
from domain.worksheet.ports.service import IWorkSheetService
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AleadyExistsError
from domain.analysis.schemas import AnalysisResult
from domain.analysis.ports.service.result import IAnalysisResultService
from domain.worksheet.schemas import WorkSheet
from domain.worksheet.ports.repository import IWorkSheetRepository


class WorkSheetService(BaseService[WorkSheet], IWorkSheetService):
    def __init__(
        self,
        repository: IWorkSheetRepository,
        analysis_result_service: IAnalysisResultService
    ):
        self.repository = repository
        self.analysis_result_service = analysis_result_service
        super().__init__(repository)
        
        
    async def get_analysis_results(self, worksheet_uid: str):
        results: list[AnalysisResult] = []
        qc_results: list[AnalysisResult] = []

        all_results = await self.analysis_result_service.get_all(worksheet_uid=worksheet_uid)
        for result in all_results:
            if result.sample.sample_type.name == "QC Sample":
                qc_results.append(result)
            else:
                results.append(result)

        return results, qc_results

    async def reset_assigned_count(self, worksheet_uid: str):
        # TODO: DO NOT COUNT QC SAMPLES
        worksheet = await self.repository.get(uid=worksheet_uid)
        analysis_results, _ = await worksheet.get_analysis_results()
        count = len(analysis_results)
        self.assigned_count = count
        if count == 0:
            self.state = conf.worksheet_states.EMPTY

        if count > 0 and self.state == conf.worksheet_states.EMPTY:
            self.state = conf.worksheet_states.PENDING

        await self.save()

    async def change_state(self, state, updated_by_uid):
        self.state = state
        self.updated_by_uid = updated_by_uid  # noqa
        await self.save()

    async def has_processed_samples(self):
        states = [
            analysis_conf.states.result.RESULTED,
            analysis_conf.states.result.APPROVED,
        ]

        results, qc_results = await self.get_analysis_results()
        analysis_results = results + qc_results
        processed = any([res.status in states for res in analysis_results])
        return processed

    async def submit(self, submitter):
        if self.state != conf.worksheet_states.AWAITING:
            states = [
                analysis_conf.states.result.RESULTED,
                analysis_conf.states.result.APPROVED,
            ]

            results, qc_results = await self.get_analysis_results()
            analysis_results = results + qc_results
            if all([res.status in states for res in analysis_results]):
                self.state = conf.worksheet_states.AWAITING
                self.updated_by_uid = submitter.uid  # noqa
                self.submitted_by_uid = submitter.uid
                saved = await self.save()
                await streamer.stream(saved, submitter, "submitted", "worksheet")
                return saved
        return self

    async def verify(self, verified_by):
        if self.state != conf.worksheet_states.APPROVED:
            states = [
                analysis_conf.states.result.APPROVED,
                analysis_conf.states.result.RETRACTED,
            ]

            results, qc_results = await self.get_analysis_results()
            analysis_results = results + qc_results
            if all([res.status in states for res in analysis_results]):
                self.state = conf.worksheet_states.APPROVED
                self.updated_by_uid = verified_by.uid  # noqa
                self.verified_by_uid = verified_by.uid
                saved = await self.save()
                await streamer.stream(saved, verified_by, "verified", "worksheet")
                return saved
        return self
    

    async def create_worksheet_template(
        self, info, payload: WorksheetTemplateInputType
    ) -> WorkSheetTemplateResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create worksheet templates",
        )

        if not payload.name or not payload.sample_type_uid or not payload.analysis_uid:
            return OperationError(
                error="Template name and sample type and analysis are mandatory"
            )

        taken = await models.WorkSheetTemplate.get(name=payload.name)
        if taken:
            return OperationError(
                error=f"WorkSheet Template with name {taken.name} already exist"
            )

        sample_type = await analysis_models.SampleType.get(uid=payload.sample_type_uid)
        if not sample_type:
            return OperationError(
                error=f"Sample Type with uid {payload.sample_type_uid} does not exist"
            )

        incoming = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            if has_value_or_is_truthy(v):
                incoming[k] = v

        _qc_levels = []
        if payload.qc_template_uid:
            qc_template = await qc_models.QCTemplate.get(uid=payload.qc_template_uid)
            if qc_template:
                _qc_levels = qc_template.qc_levels

        incoming["reserved"] = []
        if payload.reserved:
            positions = dict()
            for item in payload.reserved:
                positions[item.position] = {
                    "position": item.position,
                    "level_uid": item.level_uid,
                }
                l_uids = [lvl.uid for lvl in _qc_levels]
                if item.level_uid not in l_uids:
                    qc_level = await qc_models.QCLevel.get(uid=item.level_uid)
                    _qc_levels.append(qc_level)

            incoming["reserved"] = positions

        wst_schema = schemas.WSTemplateCreate(**incoming)
        wst_schema.qc_levels = _qc_levels
        wst: schemas.WSTemplate = await models.WorkSheetTemplate.create(wst_schema)

        return WorkSheetTemplateType(**wst.marshal_simple())

    async def update_worksheet_template(
        self, uid: str, payload: WorksheetTemplateInputType
    ) -> WorkSheetTemplateResponse:

        if not uid:
            return OperationError(error="Worksheet Template uid is required")

        ws_template = await models.WorkSheetTemplate.get(uid=uid)
        if not ws_template:
            return OperationError(error=f"WorkSheet Template with uid {uid} not found")

        wst_data = ws_template.to_dict()
        for field in wst_data:
            if field in payload.__dict__ and field not in ["reserved"]:
                try:
                    setattr(ws_template, field, payload.__dict__[field])
                except AttributeError as e:
                    logger.warning(e)

        _qc_levels = []
        if payload.qc_template_uid:
            ws_template.qc_levels.clear()
            ws_template = await ws_template.save()
            qc_template = await qc_models.QCTemplate.get(uid=payload.qc_template_uid)
            _qc_levels = qc_template.qc_levels
            ws_template.qc_levels = qc_template.qc_levels
            ws_template = await ws_template.save()

        if payload.reserved:
            positions = dict()
            for item in payload.reserved:
                positions[item.position] = item.__dict__
                qc_level = await qc_models.QCLevel.get(uid=item.level_uid)
                if qc_level not in _qc_levels:
                    _qc_levels.append(qc_level)
            setattr(ws_template, "reserved", positions)

        wst_schema = schemas.WSTemplateUpdate(**ws_template.to_dict())
        await ws_template.update(wst_schema)

        return WorkSheetTemplateType(**ws_template.marshal_simple())

    async def create_worksheet(
        self,
        info,
        template_uid: str,
        analyst_uid: str,
        count: int | None = 1,
    ) -> WorkSheetsResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create worksheets",
        )

        if not template_uid or not analyst_uid:
            return OperationError(error="Analyst and Template are mandatory")

        ws_temp = await models.WorkSheetTemplate.get(uid=template_uid)
        if not ws_temp:
            return OperationError(
                error=f"WorkSheet Template {template_uid} does not exist"
            )

        analyst = await user_models.User.get(uid=analyst_uid)
        if not analyst:
            return OperationError(
                error=f"Selected Analyst {analyst_uid} does not exist"
            )

        incoming = {
            "template_uid": template_uid,
            "analyst_uid": analyst_uid,
            "instrument_uid": ws_temp.instrument_uid,
            "sample_type_uid": ws_temp.sample_type_uid,
            "worksheet_id": None,
            "reserved": ws_temp.reserved,
            "number_of_samples": ws_temp.number_of_samples,
            "rows": ws_temp.rows,
            "cols": ws_temp.cols,
            "row_wise": ws_temp.row_wise,
            "state": conf.worksheet_states.EMPTY,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }

        ws_schema = schemas.WorkSheetCreate(**incoming)
        ws_schema.analysis_uid = ws_temp.analysis_uid
        # ws_schema.qc_levels = ws_temp.qc_levels

        worksheet_schemas = [
            ws_schema.copy(
                update={"worksheet_id": (await IdSequence.get_next_number("WS"))[1]}
            )
            for i in list(range(count))
        ]

        worksheets = await models.WorkSheet.bulk_create(worksheet_schemas)
        logger.info(f"Bulk create: {worksheets}")

        job_schema = job_schemas.JobCreate(
            action=actions.WS_ASSIGN,
            category=categories.WORKSHEET,
            priority=priorities.MEDIUM,
            job_id=None,
            creator_uid=felicity_user.uid,
            status=states.PENDING,
        )
        j_schemas = []
        for ws in worksheets:
            j_schemas.append(job_schema.copy(update={"job_id": ws.uid}))

        await job_models.Job.bulk_create(j_schemas)

        # to get lazy loads working otherwise return WorksheetlistingType(worksheets)
        to_send = [models.WorkSheet.get(uid=ws.uid) for ws in worksheets]

        return WorksheetlistingType(worksheets=to_send)

    async def update_worksheet(
        self,
        info,
        worksheet_uid: str,
        analyst_uid: str | None = None,
        instrument_uid: str | None = None,
        method_uid: str | None = None,
        action: str | None = None,
        samples: Optional[list[str]] = None,
    ) -> WorkSheetResponse:  # noqa

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update worksheets",
        )

        if not worksheet_uid:
            return OperationError(error="Worksheet uid required")

        worksheet: Optional[models.WorkSheet] = await models.WorkSheet.get(
            uid=worksheet_uid
        )
        if not worksheet:
            return OperationError(
                error=f"WorkSheet Template {worksheet_uid} does not exist"
            )

        incoming = {}
        result_update = {}
        if analyst_uid:
            analyst = await user_models.User.get(uid=analyst_uid)
            if not analyst:
                return OperationError(
                    error=f"Selected Analyst {analyst_uid} does not exist"
                )
            incoming["analyst_uid"] = analyst_uid

        if instrument_uid:
            instrument = await setup_models.Instrument.get(uid=instrument_uid)
            if not instrument:
                return OperationError(
                    error=f"Selected Instrument {instrument_uid} does not exist"
                )
            incoming["instrument_uid"] = instrument_uid
            result_update["instrument_uid"] = instrument_uid

        if method_uid:
            method = await setup_models.Method.get(uid=method_uid)
            if not method:
                return OperationError(
                    error=f"Selected Method {instrument_uid} does not exist"
                )
            result_update["method_uid"] = method_uid

        if incoming:
            ws_schema = schemas.WorkSheetUpdate(**incoming)
            worksheet = await worksheet.update(ws_schema)

        if result_update:
            # update analysis results with updated instrument and methods
            for result in worksheet.analysis_results:
                await result.update(result_update)

        if action and samples:
            if action == actions.WS_UN_ASSIGN:
                for res_uid in samples:
                    result:AnalysisResult = await AnalysisResult.get(uids=res_uid)
                    if not result:
                        continue
                    # skip un assign of quality control samples
                    if not result.sample.qc_level_uid:
                        result.un_assign()
                await worksheet.reset_assigned_count()

        return WorkSheetType(**worksheet.marshal_simple())

    async def update_worksheet_apply_template(
        self, info, template_uid: str, worksheet_uid: str
    ) -> WorkSheetResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update worksheets",
        )

        if not template_uid or not worksheet_uid:
            return OperationError(error="Template and Worksheet are required")

        ws = await models.WorkSheet.get(uid=worksheet_uid)
        if not ws:
            return OperationError(error=f"WorkSheet {worksheet_uid} does not exist")

        ws_temp = await models.WorkSheetTemplate.get(uid=template_uid)
        if not ws_temp:
            return OperationError(
                error=f"WorkSheet Template {template_uid} does not exist"
            )

        # If WS already contains at least a sample from a different template do nothing: No confusion here
        if ws.assigned_count > 0 and ws.template_uid != template_uid:
            return OperationError(
                error=f"Worksheet has {ws.assigned_count} assigned samples. You can not apply a different template",
                suggestion="Un-assign contained samples first and you will be able to apply any template of your "
                "choosing ",
            )

        incoming = {
            "template_uid": template_uid,
            "analysis_uid": ws_temp.analysis_uid,
            "instrument_uid": ws_temp.instrument_uid,
            "sample_type_uid": ws_temp.sample_type_uid,
            "reserved": ws_temp.reserved,
            "number_of_samples": ws_temp.number_of_samples,
            "rows": ws_temp.rows,
            "cols": ws_temp.cols,
            "row_wise": ws_temp.row_wise,
            "state": conf.worksheet_states.EMPTY,
        }

        ws_schema = schemas.WorkSheetUpdate(**incoming)
        ws = await ws.update(ws_schema)

        # Add a job
        job_schema = job_schemas.JobCreate(
            action=actions.WS_ASSIGN,
            category=categories.WORKSHEET,
            priority=priorities.MEDIUM,
            creator_uid=felicity_user.uid,
            job_id=ws.uid,
            status=states.PENDING,
        )
        await job_models.Job.create(job_schema)
        # await tasks.populate_worksheet_plate(job.uid)

        return WorkSheetType(**ws.marshal_simple())

    async def update_worksheet_manual_assign(
        self,
        info,
        uid: str,
        analyses_uids: list[str],
        qc_template_uid: str | None = None,
    ) -> WorkSheetResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update worksheets",
        )

        if not len(analyses_uids) > 0:
            return OperationError(error="Analyses for assignment are required")

        if not uid:
            return OperationError(error="Worksheet uid is required")

        ws = await models.WorkSheet.get(uid=uid)
        if not ws:
            return OperationError(error=f"WorkSheet {uid} does not exist")

        # incoming = {}
        # ws_schema = schemas.WorkSheetUpdate(**incoming)
        # ws = await ws.update(ws_schema)

        # Add a job
        job_schema = job_schemas.JobCreate(
            action=actions.WS_MANUAL_ASSIGN,
            category=categories.WORKSHEET,
            priority=priorities.MEDIUM,
            creator_uid=felicity_user.uid,
            job_id=ws.uid,
            status=states.PENDING,
            data={"qc_template_uid": qc_template_uid, "analyses_uids": analyses_uids},
        )
        await job_models.Job.create(job_schema)

        return WorkSheetType(**ws.marshal_simple())
    
    async def worksheet_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        status: str | None = None,
        sort_by: list[str] | None = None,
    ) -> WorkSheetCursorPage:

        filters = []

        _or_text_ = {}
        if has_value_or_is_truthy(text):
            arg_list = [
                "state__ilike",
                "worksheet_id__ilike",
                "analyst___first_name__ilike",
                "analyst___last_name__ilike",
                "analyst___auth___user_name__ilike",
            ]
            for _arg in arg_list:
                _or_text_[_arg] = f"%{text}%"

            text_filters = {sa.or_: _or_text_}
            filters.append(text_filters)

        if status:
            filters.append({"state__exact": status})

        # filters.append({'internal_use__ne': True})

        page = await ws_models.WorkSheet.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: list[WorkSheetEdge[WorkSheetType]] = page.edges
        items: list[WorkSheetType] = page.items
        page_info: PageInfo = page.page_info

        return WorkSheetCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )