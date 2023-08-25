import sqlalchemy as sa
from domain.user.ports.repository import (
    IUserRepository,
    IPermissionRepository,
    IGroupRepository,
    IUserPreferenceRepository,
)
from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository
from infrastructure.database.user.entities import (
    User,
    Permission,
    Group,
    UserPreference,
)
from domain.shared.ports.paginator.cursor import PageCursor


class UserRespository(BaseRepository[User], IUserRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = User
        super().__init__(db)

    async def paginate_with_cursors(
        self,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> PageCursor:
        filters = {}

        _or_ = dict()
        if text:
            arg_list = [
                "first_name__ilike",
                "last_name__ilike",
                "email__ilike",
                "mobile_phone__ilike",
                "business_phone__ilike",
            ]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        return super().paginate(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )


class PermissionRespository(BaseRepository[Permission], IPermissionRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Permission
        super().__init__(db)


class GroupRespository(BaseRepository[Group], IGroupRepository):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = Group
        super().__init__(db)


class UserPreferenceRespository(
    BaseRepository[UserPreference], IUserPreferenceRepository
):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = UserPreference
        super().__init__(db)
