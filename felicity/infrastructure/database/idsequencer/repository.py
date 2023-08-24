from datetime import datetime
from sqlalchemy.dialects.postgresql import insert

from domain.shared.ports.persistance import PersistenceProtocol
from infrastructure.database.repository.base import BaseRepository
from infrastructure.database.sqlalchemy import Database
from infrastructure.database.idsequencer.utils import sequencer, sequence_alpha
from infrastructure.database.idsequencer.exception import (
    SequenceGenerateError,
    IncompleDataError
)
from infrastructure.database.idsequencer.entities import IdSequence


SEQUENCE_BEGIN = 5
SEQUENCE_CUTOFF = 10


class IdSequenceRespository(BaseRepository[IdSequence]):
    def __init__(self, db: PersistenceProtocol) -> None:
        self.model = IdSequence
        super().__init__(db)

    async def get_next_number(self, prefix: str = None, generic=False) -> tuple[int, str]:
        if not prefix:
            raise IncompleDataError("A prefix is requred")
        prefix_year = str(datetime.now().year)[2:]

        if generic:
            fetch = await self.get_all(prefix__istartswith=f"{prefix}{prefix_year}")
            if not fetch:
                alpha = "AA"
            else:
                sequences = sorted(
                    fetch, key=lambda s: s.updated, reverse=True)

                latest = sequences[0]

                alpha = latest.prefix.split(prefix_year)[1]
                if not alpha:
                    alpha = "AA"

                if latest.number >= SEQUENCE_CUTOFF:
                    alpha = sequence_alpha(alpha)

            if prefix_year not in prefix:
                prefix = f"{prefix}{prefix_year}{alpha}"
        else:

            if prefix_year not in prefix:
                prefix = f"{prefix}{prefix_year}"

        insert_stmt = (
            insert(IdSequence)
            .values(prefix=prefix, number=1)
            .on_conflict_do_update(
                index_elements=["prefix"], set_=dict(prefix=prefix, number=IdSequence.number + 1, updated=datetime.utcnow())
            )
            .returning(IdSequence.number)
        )

        async with Database().async_session() as session:
            results = await session.execute(insert_stmt)

            try:
                await session.flush()
                await session.commit()
            except Exception as e:
                session.rollback()
                raise SequenceGenerateError(f"Failed to generate sequential id {e}")

        next_number = results.scalars().first()

        return next_number, f"{prefix}-{sequencer(next_number, SEQUENCE_BEGIN)}"
