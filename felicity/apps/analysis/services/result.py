import logging
from typing import Annotated

from felicity.apps.abstract.service import BaseService
from felicity.apps.analysis.entities.results import (
    AnalysisResult,
    ResultMutation,
    result_verification,
)
from felicity.apps.analysis.enum import ResultState, SampleState
from felicity.apps.analysis.repository.results import (
    AnalysisResultRepository,
    ResultMutationRepository,
)
from felicity.apps.analysis.schemas import AnalysisResultCreate, AnalysisResultUpdate
from felicity.apps.common.schemas.dummy import Dummy
from felicity.apps.common.utils.serializer import marshaller
from felicity.apps.instrument.services import LaboratoryInstrumentService, MethodService
from felicity.apps.multiplex.microbiology.services import AbxOrganismResultService, AbxASTResultService
from felicity.apps.notification.enum import NotificationObject
from felicity.apps.notification.services import ActivityStreamService
from felicity.apps.user.entities import User, logger
from felicity.core.dtz import timenow_dt

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class AnalysisResultService(
    BaseService[AnalysisResult, AnalysisResultCreate, AnalysisResultUpdate]
):
    def __init__(self):
        self.streamer_service = ActivityStreamService()
        super().__init__(AnalysisResultRepository())

    async def verifications(
            self, uid: str
    ) -> tuple[
        Annotated[int, "Total number required verifications"],
        Annotated[list[User], "Current verifiers"],
    ]:
        analysis_result = await self.get(uid=uid, related=["analysis"])
        required = analysis_result.analysis.required_verifications
        return required, analysis_result.verified_by

    async def last_verificator(self, uid: str) -> User | None:
        _, verifiers = await self.verifications(uid)
        if verifiers:
            return verifiers[-1]
        return None

    async def retest_result(
            self, uid: str, retested_by, next_action="verify"
    ) -> tuple[
        Annotated[AnalysisResult, "Newly Created AnalysisResult"],
        Annotated[AnalysisResult, "Retested AnalysisResult"],
    ]:
        analysis_result = await self.get(uid=uid)
        a_result_in = {
            "sample_uid": analysis_result.sample_uid,
            "analysis_uid": analysis_result.analysis_uid,
            "status": ResultState.PENDING,
            "laboratory_instrument_uid": analysis_result.laboratory_instrument_uid,
            "method_uid": analysis_result.method_uid,
            "parent_id": analysis_result.uid,
            "retest": True,
        }
        a_result_schema = AnalysisResultCreate(**a_result_in)
        retest = await self.create(a_result_schema, related=["sample"])

        await self.hide_report(uid)
        if next_action == "verify":
            final = await self.verify(uid, verifier=retested_by)
        elif next_action == "retract":
            final = await self.retract(uid, retracted_by=retested_by)
        else:
            final = analysis_result
        final = await self.get(uid=final.uid, related=["sample"])
        return retest, final

    async def assign(self, uid: str, ws_uid, position, laboratory_instrument_uid):
        analysis_result = await self.get(uid=uid)
        analysis_result.worksheet_uid = ws_uid
        analysis_result.assigned = True
        analysis_result.worksheet_position = position
        analysis_result.laboratory_instrument_uid = (
            laboratory_instrument_uid if laboratory_instrument_uid else None
        )
        return await super().save(analysis_result)

    async def un_assign(self, uid: str):
        analysis_result = await self.get(uid=uid)
        analysis_result.worksheet_uid = None
        analysis_result.assigned = False
        analysis_result.worksheet_position = None
        analysis_result.laboratory_instrument_uid = None
        return await super().save(analysis_result)

    async def submit(self, uid: str, data: dict, submitter) -> AnalysisResult:
        felicity_ast = "felicity_ast"

        laboratory_instrument_uid = data.get("laboratory_instrument_uid")
        if laboratory_instrument_uid == felicity_ast:
            laboratory_instrument_uid = None

        method_uid = data.get("method_uid")
        if method_uid == felicity_ast:
            method_uid = None

        analysis_result = await self.get(uid=uid)
        analysis_result.result = data.get("result")
        analysis_result.updated_by_uid = submitter.uid  # noqa
        analysis_result.submitted_by_uid = submitter.uid  # noqa
        analysis_result.status = ResultState.RESULTED
        analysis_result.method_uid = method_uid
        analysis_result.laboratory_instrument_uid = laboratory_instrument_uid
        analysis_result.date_submitted = timenow_dt()
        final = await super().save(analysis_result, related=["analysis"])
        await self.streamer_service.stream(final, submitter, "submitted", NotificationObject.ANALYSIS_RESULT)
        return final

    async def verify(self, uid: str, verifier) -> AnalysisResult:
        analysis_result = await self.get(uid=uid)
        analysis_result.updated_by_uid = verifier.uid  # noqa
        analysis_result.status = ResultState.APPROVED
        analysis_result.date_verified = timenow_dt()
        final = await super().save(analysis_result, related=["analysis"])
        await self._verify(uid, verifier_uid=verifier.uid)
        await self.streamer_service.stream(final, verifier, "approved", NotificationObject.ANALYSIS_RESULT)
        return final

    async def _verify(self, uid: str, verifier_uid) -> None:
        await self.repository.table_insert(
            table=result_verification,
            mappings=[{"result_uid": uid, "user_uid": verifier_uid}],
        )

    async def retract(self, uid: str, retracted_by) -> AnalysisResult:
        analysis_result = await self.get(uid=uid)
        analysis_result.status = ResultState.RETRACTED
        analysis_result.date_verified = timenow_dt()
        analysis_result.updated_by_uid = retracted_by.uid  # noqa
        final = await super().save(analysis_result)
        await self.streamer_service.stream(final, retracted_by, "retracted", NotificationObject.ANALYSIS_RESULT)
        await self._verify(uid, verifier_uid=retracted_by.uid)
        return final

    async def cancel(self, uid: str, cancelled_by) -> AnalysisResult:
        analysis_result = await self.get(uid=uid)
        analysis_result.status = ResultState.CANCELLED
        analysis_result.cancelled_by_uid = cancelled_by.uid
        analysis_result.date_cancelled = timenow_dt()
        analysis_result.updated_by_uid = cancelled_by.uid  # noqa
        final = await super().save(analysis_result)
        await self.streamer_service.stream(final, cancelled_by, "cancelled", NotificationObject.ANALYSIS_RESULT)
        return final

    async def re_instate(self, uid: str, re_instated_by) -> AnalysisResult:
        analysis_result = await self.get(uid=uid)
        analysis_result.status = ResultState.PENDING
        analysis_result.cancelled_by_uid = None
        analysis_result.date_cancelled = None
        analysis_result.updated_by_uid = re_instated_by.uid  # noqa
        final = await super().save(analysis_result)
        await self.streamer_service.stream(
            final, re_instated_by, "reinstated", NotificationObject.ANALYSIS_RESULT
        )
        return final

    async def change_status(self, uid: str, status) -> AnalysisResult:
        return await super().update(uid, {"status": status})

    async def hide_report(self, uid: str) -> AnalysisResult:
        return await super().update(uid, {"reportable": False})

    async def filter_for_worksheet(
            self,
            analyses_status: str,
            analysis_uid: str,
            sample_type_uid: list[str],
            limit: int,
    ) -> list[AnalysisResult]:
        filters = {
            "status__exact": analyses_status,
            "assigned__exact": False,
            "analysis_uid__exact": analysis_uid,
            "sample___sample_type_uid__exact": sample_type_uid,
            "sample___status": SampleState.RECEIVED,
        }
        sort_attrs = ["-sample___priority", "sample___sample_id", "-created_at"]
        return await self.repository.filter(
            filters=filters, sort_attrs=sort_attrs, limit=limit
        )

    async def snapshot(self, analyses_results: list[AnalysisResult]) -> None:
        from felicity.apps.analysis.services.analysis import AnalysisService
        #
        analysis_relations = [
            "unit", "instruments", "methods",
            "interims", "correction_factors", "specifications",
            "detection_limits", "uncertainties", "result_options",
            "category", "department"
        ]
        for result in analyses_results:
            analysis = await AnalysisService().get(related=analysis_relations, uid=result.analysis_uid)
            metadata = {"analysis": analysis.snapshot()}
            if result.method_uid:
                metadata["method"] = (await MethodService().get(uid=result.method_uid)).snapshot()
            if result.laboratory_instrument_uid:
                metadata["laboratory_instrument"] = (await LaboratoryInstrumentService().get(
                    uid=result.laboratory_instrument_uid
                )).snapshot()

            for _field in analysis_relations:
                try:
                    thing = getattr(analysis, _field)
                    if isinstance(thing, list):
                        metadata[_field] = [item.snapshot() for item in thing]
                        if _field == "instruments":
                            for k, v in enumerate(metadata[_field]):
                                lab_insts = await LaboratoryInstrumentService().get_all(instrument_uid=v.get("uid"))
                                metadata[_field][k]["laboratory_instruments"] = [li.snapshot() for li in lab_insts]
                    else:
                        metadata[_field] = thing.snapshot() if thing else None
                except Exception as e:
                    logger.error(f"Failed to snapshot field {_field}: {e}")

            # AMR - AST snapshots
            if analysis.keyword == "felicity_ast_abx_organism":
                _orgs = await AbxOrganismResultService().get_all(
                    analysis_result_uid=result.uid,
                    related=["organism"]
                )
                metadata["organisms"] = [{
                    **org.snapshot(), "organism": org.organism.snapshot() if org.organism else None
                } for org in _orgs]

            if analysis.keyword == "felicity_ast_abx_antibiotic":
                ast_result = await AbxASTResultService().get(
                    analysis_result_uid=result.uid,
                    related=["antibiotic", "guideline_year", "breakpoint", "ast_method"]
                )
                metadata["ast_result"] = None
                if ast_result:
                    metadata["ast_result"] = {
                        **ast_result.snapshot(),
                        "antibiotic": ast_result.antibiotic.snapshot() if ast_result.antibiotic else None,
                        "guideline_year": ast_result.guideline_year.snapshot() if ast_result.guideline_year else None,
                        "breakpoint": ast_result.breakpoint.snapshot() if ast_result.breakpoint else None,
                        "ast_method": ast_result.ast_method.snapshot() if ast_result.ast_method else None,
                    }

            await self.update(result.uid, {"metadata_snapshot": marshaller(metadata, depth=4)})
        return None


class ResultMutationService(BaseService[ResultMutation, Dummy, Dummy]):
    def __init__(self):
        super().__init__(ResultMutationRepository())
