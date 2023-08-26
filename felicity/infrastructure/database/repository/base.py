from typing import Generic, TypeVar, Any, List
from datetime import datetime
from sqlalchemy import update
from sqlalchemy import select
from sqlalchemy.sql import func
from sqlalchemy.sql.expression import bindparam
from sqlalchemy import or_ as sa_or_

from domain.shared.ports.persistance import PersistenceProtocol
from domain.shared.ports.repository import IBaseRepository
from domain.shared.ports.paginator.cursor import PageCursor, EdgeNode, PageInfo
from infrastructure.database.utils.queryset import QueryBuilder, settable_attributes

M = TypeVar("M")


class BaseRepository(Generic[M], IBaseRepository[M]):
    model: M = None

    def __init__(self, db: PersistenceProtocol) -> None:
        self._db = db
        self.async_session = self._db.async_session
        self._qb = QueryBuilder(model=self.model)

    def fill(self, m: M, **kwargs):
        for name in kwargs.keys():
            if name in settable_attributes(m):
                setattr(m, name, kwargs[name])
            else:
                raise KeyError("Attribute '{}' doesn't exist".format(name))
        return m

    async def save(self, m: M) -> M:
        async with self.async_session() as session:
            try:
                session.add(m)
                await session.flush()
                await session.commit()
            except Exception:
                await session.rollback()
                raise
        return m

    async def create(self, **kwargs) -> M:
        cls = self.model()
        filled = self.fill(cls, **kwargs)
        return await self.save(filled)

    async def bulk_create(self, bulk: list[dict]) -> list[M]:
        pass

    async def update(self, model: M, **kwargs) -> M:
        filled = self.fill(model, **kwargs)
        return await self.save(filled)

    async def update_by_uid(self, uid: str, **kwargs) -> M:
        update = await self.get(uid=uid)
        filled = self.fill(update, **kwargs)
        return await self.save(filled)

    async def get(self, **kwargs) -> M:
        stmt = self._qb.where(**kwargs)
        async with self.async_session() as session:
            results = await session.execute(stmt)
            found = results.scalars().first()
        return found

    async def get_all(self, **kwargs) -> list[M]:
        stmt = self._qb.where(**kwargs)
        async with self.async_session() as session:
            results = await session.execute(stmt)
            found = results.scalars().all()
        return found

    async def all(self) -> list[M]:
        async with self.async_session() as session:
            results = await session.execute(select(self.model))
        return results.scalars().all()

    async def bulk_update_with_mappings(self, mappings: list) -> None:
        """
        @param mappings a List of dictionary update values with pks.
        e.g [{'uid': 34, update_values}, ...]
        ?? there must be zero many-to-many relations
        NB: Function does not return anything
        """
        if len(mappings) == 0:
            return

        to_update = [self._import(data) for data in mappings]
        for item in to_update:
            item["_uid"] = item["uid"]

        query = update(self.model).where(self.model.uid == bindparam("_uid"))

        binds = {}
        for key in to_update[0]:
            if key != "_uid":
                binds[key] = bindparam(key)

        stmt = query.values(binds).execution_options(
            synchronize_session=None
        )  # "fetch" not available

        async with self.async_session() as session:
            await session.execute(stmt, to_update)
            await session.flush()
            await session.commit()

    async def delete(self, uid: str) -> M:
        obj = await self.get(uid=uid)
        async with self.async_session() as session:
            await session.delete(obj)
            await session.flush()
            await session.commit()

    async def count_where(self, filters: dict) -> int:
        """
        :param filters:
        :return: int
        """
        # filter_stmt = smart_query(query=select(cls), filters=filters) noqa
        filter_stmt = self._qb.smart_query(filters=filters)
        count_stmt = select(func.count(filter_stmt.c.uid)).select_from(filter_stmt)
        async with self.async_session() as session:
            res = await session.execute(count_stmt)
        count = res.scalars().one()
        return count

    async def search(self, **kwargs) -> list[M]:
        filters = []
        combined = set()
        for k, v in kwargs:
            filter_string = f"{k}__ilike"
            filters.append(filter_string)

            arg = dict()
            arg[k] = f"%{v}%"
            query = await self.get_all(**arg)
            for item in query:
                combined.add(item)

        return list(combined)

    async def paginate_with_cursors(
        self,
        page_size: int | None,
        after_cursor: str | None,
        before_cursor: str | None,
        filters: dict | list[dict] | None,
        sort_by: list[str] | None,
        **kwargs,
    ) -> PageCursor:
        if not filters:
            filters = {}

        # get total count without paging filters from cursors
        total_count: int = await self.count_where(filters=filters)
        total_count = total_count if total_count else 0

        cursor_limit = {}
        if after_cursor:
            cursor_limit = {"uid__gt": self.decode_cursor(after_cursor)}

        if before_cursor:
            cursor_limit = {"uid__lt": self.decode_cursor(before_cursor)}

        # add paging filters
        _filters = None
        if isinstance(filters, dict):
            _filters = [{sa_or_: cursor_limit}, filters] if cursor_limit else filters
        elif isinstance(filters, list):
            _filters = filters
            if cursor_limit:
                _filters.append({sa_or_: cursor_limit})

        stmt = self._qb.smart_query(filters=_filters, sort_attrs=sort_by)

        if kwargs.get("get_related"):
            # stmt = stmt.options(selectinload(get_related))   noqa
            pass

        if page_size:
            stmt = stmt.limit(page_size)

        async with self.async_session() as session:
            res = await session.execute(stmt)

        qs = res.scalars().all()

        if qs is not None:
            items = qs
        else:
            qs = []
            items = []

        has_additional = (
            len(items) == page_size if page_size else True
        )  # len(qs) > len(items)s
        page_info = {
            "start_cursor": self.encode_cursor(items[0].uid) if items else None,
            "end_cursor": self.encode_cursor(items[-1].uid) if items else None,
        }
        if page_size is not None:
            page_info["has_next_page"] = has_additional
            page_info["has_previous_page"] = bool(after_cursor)

        return PageCursor(
            **{
                "total_count": total_count,
                "edges": self.build_edges(items=items),
                "items": items,
                "page_info": self.build_page_info(**page_info),
            }
        )

    def build_edges(self, items: List[Any]) -> List[EdgeNode]:
        if not items:
            return []
        return [self.build_node(item) for item in items]

    def build_node(self, item: Any) -> EdgeNode:
        return EdgeNode(**{"cursor": self.encode_cursor(item.uid), "node": item})

    def build_page_info(
        self,
        start_cursor: str = None,
        end_cursor: str = None,
        has_next_page: bool = False,
        has_previous_page: bool = False,
    ) -> PageInfo:
        return PageInfo(
            **{
                "start_cursor": start_cursor,
                "end_cursor": end_cursor,
                "has_next_page": has_next_page,
                "has_previous_page": has_previous_page,
            }
        )

    def decode_cursor(self, cursor):
        return cursor

    def encode_cursor(self, identifier: Any):
        return identifier
