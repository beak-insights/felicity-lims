from abc import ABC

from domain.shared.ports.repository import IBaseRepository


class IReportMetaRepository(IBaseRepository, ABC):
    ...


class ISampleAnalyticsRepository(IBaseRepository, ABC):
    async def get_line_listing(
        self,
        period_start: str,
        period_end: str,
        sample_states: list[str],
        date_column: str,
        analysis_uids: list[str],
    ) -> tuple:
        ...

    async def get_counts_group_by(
        self,
        group_by: str,
        start: tuple[str, str] | None,
        end: tuple[str, str] | None,
        group_in: list[str] | None = None,
    ) -> list:
        ...

    async def count_analyses_retests(
        self, start: tuple[str, str], end: tuple[str, str]
    ) -> list:
        ...

    async def get_sample_process_performance(
        self, start: tuple[str, str], end: tuple[str, str]
    ) -> list:
        ...

    async def get_analysis_process_performance(
        self, start: tuple[str, str], end: tuple[str, str]
    ) -> list:
        ...

    async def get_laggards(self) -> tuple:
        ...
