
from domain.shared.services import BaseService
from domain.patient.ports.service import (
    IIdentificationService,
    IPatientIdentificationService,
    IPatientService
)
from domain.patient.schemas import (
    Identification,
    PatientIdentification,
    Patient
)
    async def patient_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> PatientCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = [
                "first_name__ilike",
                "last_name__ilike",
                "middle_name__ilike",
                "client_patient_id__ilike",
                "patient_id__ilike",
                "client___name__ilike",
                "patient_id__ilike",
                "email__ilike",
                "phone_mobile__ilike",
                "phone_home__ilike",
            ]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.Patient.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[PatientEdge[PatientType]] = page.edges
        items: List[PatientType] = page.items
        page_info: PageInfo = page.page_info

        return PatientCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    async def patient_search(self, info, query_string: str) -> List[PatientType]:
        filters = [
            "first_name__ilike",
            "middle_name__ilike",
            "last_name__ilike",
            "patient_id__ilike",
            "client_patient_id__ilike",
            "phone_mobile__ilike",
            "phone_home__ilike",
        ]
        combined = set()
        for _filter in filters:
            arg = dict()
            arg[_filter] = f"%{query_string}%"
            query = await models.Patient.get_all(**arg)
            for item in query:
                combined.add(item)
        return list(combined)


    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_identification(info, name: str) -> IdentificationResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create person identification",
        )

        if not name:
            return OperationError(error="name is mandatory")

        exists = await models.Identification.get(name=name)
        if exists:
            return OperationError(
                error=f"The Identfication name -> {name} <- already exists"
            )

        incoming = {
            "name": name,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }

        obj_in = schemas.IdentificationCreate(**incoming)
        identification: models.Identification = await models.Identification.create(
            obj_in
        )
        return IdentificationType(**identification.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_identification(
        info, uid: str, name: str
    ) -> IdentificationResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update person identifications",
        )

        identification = await models.Identification.get(uid=uid)
        if not identification:
            return OperationError(error=f"identification with uid {uid} does not exist")

        try:
            setattr(identification, "name", name)
        except AttributeError as e:
            logger.warning(e)

        id_in = schemas.IdentificationUpdate(**identification.to_dict())
        identification = await identification.update(id_in)
        return IdentificationType(**identification.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def create_patient(self, info, payload: PatientInputType) -> PatientResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create patients",
        )
        if not auth_success:
            return auth_error

        if (
            not payload.client_patient_id
            or not payload.first_name
            or not payload.last_name
            or not payload.client_uid
        ):
            return OperationError(
                error="Client Patient Id, First Name and Last Name , gender etc are required"
            )

        exists = await models.Patient.get(client_patient_id=payload.client_patient_id)
        if exists:
            return OperationError(error=f"Client Patient Id already in use")

        client = await client_models.Client.get(uid=payload.client_uid)
        if not client:
            return OperationError(
                error=f"Client with uid {payload.client_uid} does not exist"
            )

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.PatientCreate(**incoming)
        patient: models.Patient = await models.Patient.create(obj_in)

        # create identifications
        for p_id in payload.identifications:
            pid_in = schemas.PatientIdentificationCreate(
                patient_uid=patient.uid,
                identification_uid=p_id.identification_uid,
                value=p_id.value,
            )
            await models.PatientIdentification.create(pid_in)

        return PatientType(**patient.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def update_patient(
        self, info, uid: str, payload: PatientInputType
    ) -> PatientResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update patients",
        )

        if not uid:
            return OperationError(error="No uid provided to idenity update obj")

        patient: models.Patient = await models.Patient.get(uid=uid)
        if not patient:
            return OperationError(
                error=f"patient with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = patient.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(patient, field, payload.__dict__[field])
                except Exception as e:  # noqa
                    pass

        setattr(patient, "updated_by_uid", felicity_user.uid)

        obj_in = schemas.PatientUpdate(**patient.to_dict())
        patient = await patient.update(obj_in)

        # update identifications
        update_identification_uids = [
            id.identification_uid for id in payload.identifications
        ]
        identifications = await models.PatientIdentification.get_all(
            patient_uid=patient.uid
        )
        identifications_uids = [id.uid for id in identifications]

        for identification in identifications:
            # deleted
            if not identification.uid in update_identification_uids:
                await identification.delete()
            else:  # update
                update_identification = list(
                    filter(
                        lambda x: x.identification_uid == identification.uid,
                        payload.identifications,
                    )
                )[0]
                id_update_in = schemas.PatientIdentificationUpdate(
                    patient_uid=patient.uid, **id_update_in.to_dict()
                )
                identification = await identification.update(id_update_in)

        # new
        for _pid in payload.identifications:
            if not _pid.identification_uid in identifications_uids:
                pid_in = schemas.PatientIdentificationCreate(
                    patient_uid=patient.uid,
                    identification_uid=_pid.identification_uid,
                    value=_pid.value,
                )
                await models.PatientIdentification.create(pid_in)

        patient = await models.Patient.get(uid=patient.uid)
        return PatientType(**patient.marshal_simple())


class IdentificationService(BaseService[Identification], IIdentificationService):
    ...
    
class PatientIdentificationService(BaseService[PatientIdentification], IPatientIdentificationService):
    ...
    
class PatientService(BaseService[Patient], IPatientService):
    async def create(cls, obj_in: schemas.PatientCreate) -> schemas.Patient:
        data = cls._import(obj_in)
        data["patient_id"] = (await IdSequence.get_next_number(prefix="P", generic=True))[1]
        return await super().create(**data)