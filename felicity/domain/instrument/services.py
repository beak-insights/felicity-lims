from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AlreadyExistsError
from domain.instrument.ports.service import (
    ICalibrationCertificateService,
    IMethodService,
    IInstrumentTypeService,
    IInstrumentService,
    IInstrumentCalibrationService,
)
from domain.instrument.schemas import (
    CalibrationCertificate,
    # InstrumentCompetence,
    Method,
    InstrumentType,
    Instrument,
    InstrumentCalibration,
)


async def get_all_instrument_types(
    self,
    info,
    page_size: int | None = None,
    after_cursor: str | None = None,
    before_cursor: str | None = None,
    text: str | None = None,
    sort_by: list[str] | None = None,
) -> InstrumentTypeCursorPage:
    filters = {}

    _or_ = dict()
    if has_value_or_is_truthy(text):
        arg_list = ["name__ilike", "description__ilike"]
        for _arg in arg_list:
            _or_[_arg] = f"%{text}%"

        filters = {sa.or_: _or_}

    page = await models.InstrumentType.paginate_with_cursors(
        page_size=page_size,
        after_cursor=after_cursor,
        before_cursor=before_cursor,
        filters=filters,
        sort_by=sort_by,
    )

    total_count: int = page.total_count
    edges: List[InstrumentTypeEdge[InstrumentType]] = page.edges
    items: List[InstrumentTypeType] = page.items
    page_info: PageInfo = page.page_info

    return InstrumentTypeCursorPage(
        total_count=total_count, edges=edges, items=items, page_info=page_info
    )


async def get_all_instruments(
    self,
    info,
    page_size: int | None = None,
    after_cursor: str | None = None,
    before_cursor: str | None = None,
    text: str | None = None,
    sort_by: list[str] | None = None,
) -> InstrumentCursorPage:
    filters = {}

    _or_ = dict()
    if has_value_or_is_truthy(text):
        arg_list = [
            "name__ilike",
            "code__ilike",
            "email__ilike",
            "email_cc__ilike",
            "mobile_phone__ilike",
            "business_phone__ilike",
            "province___name__ilike",
            "province___code__ilike",
        ]
        for _arg in arg_list:
            _or_[_arg] = f"%{text}%"

        filters = {sa.or_: _or_}

    page = await models.Instrument.paginate_with_cursors(
        page_size=page_size,
        after_cursor=after_cursor,
        before_cursor=before_cursor,
        filters=filters,
        sort_by=sort_by,
        get_related="methods",
    )

    total_count: int = page.total_count
    edges: List[InstrumentEdge[InstrumentType]] = page.edges
    items: List[InstrumentType] = page.items
    page_info: PageInfo = page.page_info

    return InstrumentCursorPage(
        total_count=total_count, edges=edges, items=items, page_info=page_info
    )


async def get_all_methods(
    self,
    info,
    page_size: int | None = None,
    after_cursor: str | None = None,
    before_cursor: str | None = None,
    text: str | None = None,
    sort_by: list[str] | None = None,
) -> MethodCursorPage:
    filters = {}

    _or_ = dict()
    if has_value_or_is_truthy(text):
        arg_list = ["name__ilike", "keywork__ilike"]
        for _arg in arg_list:
            _or_[_arg] = f"%{text}%"

        filters = {sa.or_: _or_}

    page = await models.Method.paginate_with_cursors(
        page_size=page_size,
        after_cursor=after_cursor,
        before_cursor=before_cursor,
        filters=filters,
        sort_by=sort_by,
        get_related="instruments",
    )

    total_count: int = page.total_count
    edges: List[MethodEdge[MethodType]] = page.edges
    items: List[MethodType] = page.items
    page_info: PageInfo = page.page_info

    return MethodCursorPage(
        total_count=total_count, edges=edges, items=items, page_info=page_info
    )

    async def create_instrument_type(
        self, info, payload: InstrumentTypeInputType
    ) -> InstrumentTypeResponse:  # noqa

        if not payload.name:
            return OperationError(error="Please a name for your instrument type")

        exists = await models.InstrumentType.get(name=payload.name)
        if exists:
            return OperationError(
                error=f"A InstrumentType named {payload.name} already exists"
            )

        incoming: dict = dict()
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.InstrumentTypeCreate(**incoming)
        inst_type: models.InstrumentType = await models.InstrumentType.create(obj_in)
        return InstrumentTypeType(**inst_type.marshal_simple())

    async def update_instrument_type(
        self, info, uid: str, payload: InstrumentTypeInputType
    ) -> InstrumentTypeResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        inst_type = await models.InstrumentType.get(uid=uid)
        if not inst_type:
            return OperationError(
                error=f"manufacturer with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = inst_type.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(inst_type, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.InstrumentTypeUpdate(**inst_type.to_dict())
        inst_type = await inst_type.update(obj_in)
        return InstrumentTypeType(**inst_type.marshal_simple())

    async def create_instrument(
        self, info, payload: InstrumentInputType
    ) -> InstrumentResponse:  # noqa

        if not payload.name or not payload.keyword:
            return OperationError(
                error="Provide a name and a unique keyword for your instrument"
            )

        taken = await models.Instrument.get(keyword=payload.keyword)
        if taken:
            return OperationError(
                error=f"Provided keyword already assigned to instrument {taken.name}"
            )

        exists = await models.Instrument.get(name=payload.name)
        if exists:
            return OperationError(
                error=f"An Instrument named {payload.name} already exists"
            )

        incoming: dict = dict()
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.InstrumentCreate(**incoming)
        instrument: models.Instrument = await models.Instrument.create(obj_in)
        return InstrumentType(**instrument.marshal_simple())

    async def update_instrument(
        self, info, uid: str, payload: InstrumentInputType
    ) -> InstrumentResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        if "keyword" in payload.__dict__:
            taken = await models.Instrument.get(keyword=payload.keyword)
            if taken and not (str(uid) == str(taken.uid)):
                return OperationError(
                    error=f"Provided keyword already assigned to instrument {taken.name}"
                )

        instrument = await models.Instrument.get(uid=uid)
        if not instrument:
            return OperationError(
                error=f"instrument with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = instrument.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(instrument, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.InstrumentUpdate(**instrument.to_dict())
        instrument = await instrument.update(obj_in)
        return InstrumentType(**instrument.marshal_simple())

    async def create_instrument_caliberation(
        self, info, payload: InstrumentCalibrationInput
    ) -> InstrumentCalibrationResponse:  # noqa

        incoming: dict = dict()
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.InstrumentCalibrationCreate(**incoming)
        calib: models.InstrumentCalibration = await models.InstrumentCalibration.create(
            obj_in
        )
        return InstrumentCalibrationType(**calib.marshal_simple())

    async def update_instrument_caliberation(
        self, info, uid: str, payload: InstrumentInputType
    ) -> InstrumentCalibrationResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        caliberation = await models.InstrumentCalibration.get(uid=uid)
        if not caliberation:
            return OperationError(
                error=f"caliberation with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = caliberation.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(caliberation, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.InstrumentCalibrationUpdate(**caliberation.to_dict())
        caliberation = await caliberation.update(obj_in)
        return InstrumentCalibrationType(**caliberation.marshal_simple())

    async def create_caliberation_certificate(
        self, info, payload: CalibrationCertificateInput
    ) -> CalibrationCertificateResponse:  # noqa

        incoming: dict = dict()
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.CalibrationCertificateCreate(**incoming)
        certificate: models.CalibrationCertificate = (
            await models.CalibrationCertificate.create(obj_in)
        )
        return CalibrationCertificateType(**certificate.marshal_simple())

    async def update_caliberation_certificate(
        self, info, uid: str, payload: CalibrationCertificateInput
    ) -> CalibrationCertificateResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        certificate = await models.CalibrationCertificate.get(uid=uid)
        if not certificate:
            return OperationError(
                error=f"caliberation certificate with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = certificate.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(certificate, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.CalibrationCertificateUpdate(**certificate.to_dict())
        certificate = await certificate.update(obj_in)
        return CalibrationCertificateType(**certificate.marshal_simple())

    async def create_method(
        self, info, payload: MethodInputType
    ) -> MethodResponse:  # noqa

        if not payload.name:
            return OperationError(error="Provide a name for your method")

        if "keyword" in payload.__dict__:
            taken = await models.Method.get(keyword=payload.keyword)
            if taken:
                return OperationError(
                    error=f"Provided keyword already assigned to Method {taken.name}"
                )

        exists = await models.Method.get(name=payload.name)
        if exists:
            return OperationError(error=f"A Method named {payload.name} already exists")

        incoming = {}
        for k, v in payload.__dict__.items():
            if k not in ["instruments", "analyses"]:
                incoming[k] = v

        obj_in = schemas.MethodCreate(**incoming)
        method: models.Method = await models.Method.create(obj_in)

        _instruments = set()
        for i_uid in payload.instruments:
            instrument = await models.Instrument.get(uid=i_uid)
            if not instrument:
                return OperationError(
                    error=f"An instrument with uid {i_uid} does not exist"
                )
            if instrument not in _instruments:
                _instruments.add(instrument)
                await models.Method.table_insert(
                    table=models.method_instrument,
                    mappings={
                        "method_uid": method.uid,
                        "instrument_uid": instrument.uid,
                    },
                )

        for a_uid in payload.analyses:
            analysis = await analysis_models.Analysis.get(uid=a_uid)
            meth_uids = [meth.uid for meth in analysis.methods]
            if method.uid not in meth_uids:
                await analysis_models.Analysis.table_insert(
                    table=analysis_models.analysis_method,
                    mappings={"method_uid": method.uid, "analysis_uid": analysis.uid},
                )

            for inst in method.instruments:
                inst_uids = [inst.uid for inst in analysis.instruments]
                if inst.uid not in inst_uids:
                    analysis.instruments.append(inst)
                    await analysis_models.Analysis.table_insert(
                        table=analysis_models.analysis_instrument,
                        mappings={
                            "instrument_uid": inst.uid,
                            "analysis_uid": analysis.uid,
                        },
                    )

        return MethodType(**method.marshal_simple(exclude=["instruments", "analyses"]))

    async def update_method(
        self, info, uid: str, payload: MethodInputType
    ) -> MethodResponse:  # noqa

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        if "keyword" in payload.__dict__:
            taken = await models.Method.get(keyword=payload.keyword)
            if taken and not (str(uid) == str(taken.uid)):
                return OperationError(
                    error=f"Provided keyword already assigned to method {taken.name}"
                )

        method = await models.Method.get(uid=uid)
        if not method:
            return OperationError(
                error=f"method with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = method.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(method, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        obj_in = schemas.MethodUpdate(**method.to_dict())
        method = await method.update(obj_in)

        # instrument management
        inst_uids = [inst.uid for inst in method.instruments]
        for _inst in inst_uids:
            if _inst not in payload.instruments:
                instruments = filter(lambda i: i.uid == _inst, method.instruments)
                instrument = list(instruments)[0]
                method.instruments.remove(instrument)
        for _inst in payload.instruments:
            if _inst not in inst_uids:
                instrument = await models.Instrument.get(uid=_inst)
                method.instruments.append(instrument)
        method = await method.save()

        # manage analyses
        all_analyses = await analysis_models.Analysis.all()
        analyses = set()
        for analysis in all_analyses:
            for _meth in analysis.methods:
                if _meth.uid == method.uid:
                    analyses.add(analysis)

        an_uids = [an.uid for an in analyses]
        for _anal in an_uids:
            if _anal not in payload.analyses:
                analysis = filter(lambda a: a.uid == _anal, analyses)
                analysis = list(analysis)[0]
                for _method in analysis.methods:
                    if _method.uid == method.uid:
                        analysis.methods.remove(_method)
                        await analysis.save()

        for _anal in payload.analyses:
            if _anal not in an_uids:
                analysis = await analysis_models.Analysis.get(uid=_anal)
                await analysis_models.Analysis.table_insert(
                    table=analysis_models.analysis_method,
                    mappings={"method_uid": method.uid, "analysis_uid": analysis.uid},
                )

        return MethodType(**method.marshal_simple())


class CalibrationCertificateService(
    BaseService[CalibrationCertificate], ICalibrationCertificateService
):
    ...


class MethodService(BaseService[Method], IMethodService):
    ...


class InstrumentTypeService(BaseService[InstrumentType], IInstrumentTypeService):
    ...


class InstrumentService(BaseService[Instrument], IInstrumentService):
    ...


class InstrumentCalibrationService(
    BaseService[InstrumentCalibration], IInstrumentCalibrationService
):
    async def create(
        cls, obj_in: schemas.InstrumentCalibrationCreate
    ) -> schemas.InstrumentCalibration:
        data = cls._import(obj_in)
        data["calibration_id"] = (await IdSequence.get_next_number("ICAL"))[1]
        return await super().create(**data)
