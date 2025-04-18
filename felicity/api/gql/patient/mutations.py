import logging
from dataclasses import field
from datetime import datetime
from typing import List, Optional

import strawberry  # noqa
from strawberry.permission import PermissionExtension

from felicity.api.gql.auth import auth_from_info
from felicity.api.gql.patient.types import IdentificationType, PatientType
from felicity.api.gql.permissions import IsAuthenticated, HasPermission
from felicity.api.gql.types import OperationError
from felicity.api.gql.types.generic import StrawberryMapper
from felicity.apps.client.services import ClientService
from felicity.apps.guard import FAction, FObject
from felicity.apps.patient import schemas
from felicity.apps.patient.services import (
    IdentificationService,
    PatientIdentificationService,
    PatientService,
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

PatientResponse = strawberry.union(
    "PatientResponse",
    (PatientType, OperationError),
    description="",  # noqa
)


@strawberry.input
class PatientidentificationInput:
    value: str
    identification_uid: str


@strawberry.input
class PatientInputType:
    client_patient_id: str
    first_name: str
    last_name: str
    client_uid: str
    gender: str
    middle_name: str | None = None
    age: int | None = None
    date_of_birth: datetime | None = None
    age_dob_estimated: bool | None = False
    phone_mobile: str | None = None
    phone_home: str | None = None
    consent_sms: bool | None = False
    internal_use: bool | None = False
    country_uid: str | None = None
    province_uid: str | None = None
    district_uid: str | None = None
    identifications: Optional[List[PatientidentificationInput]] = field(
        default_factory=list
    )


IdentificationResponse = strawberry.union(
    "IdentificationResponse",
    (IdentificationType, OperationError),  # noqa
    description="",
)


@strawberry.type
class PatientMutations:
    @strawberry.mutation(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.CREATE, FObject.PATIENT)]
        )]
    )
    async def create_identification(info, name: str) -> IdentificationResponse:
        felicity_user = await auth_from_info(info)

        if not name:
            return OperationError(error="name is mandatory")

        exists = await IdentificationService().get(name=name)
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
        identification = await IdentificationService().create(obj_in)
        return IdentificationType(**identification.marshal_simple())

    @strawberry.mutation(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.UPDATE, FObject.PATIENT)]
        )]
    )
    async def update_identification(
            info, uid: str, name: str
    ) -> IdentificationResponse:
        await auth_from_info(info)

        identification = await IdentificationService().get(uid=uid)
        if not identification:
            return OperationError(error=f"identification with uid {uid} does not exist")

        try:
            setattr(identification, "name", name)
        except AttributeError as e:
            logger.warning(e)

        id_in = schemas.IdentificationUpdate(**identification.to_dict())
        identification = await IdentificationService().update(identification.uid, id_in)
        return IdentificationType(**identification.marshal_simple())

    @strawberry.mutation(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.PATIENT)]
        )]
    )
    async def create_patient(self, info, payload: PatientInputType) -> PatientResponse:
        felicity_user = await auth_from_info(info)

        if (
                not payload.client_patient_id
                or not payload.first_name
                or not payload.last_name
                or not payload.client_uid
        ):
            return OperationError(
                error="Client Patient Id, First Name and Last Name , gender etc are required"
            )

        async with PatientService().repository.async_session() as tr_session:
            exists = await PatientService().get(
                client_patient_id=payload.client_patient_id, session=tr_session
            )
            if exists:
                return OperationError(error="Client Patient Id already in use")

            client = await ClientService().get(
                related=["province", "district"], uid=payload.client_uid, session=tr_session
            )
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
            patient = await PatientService().create(obj_in, session=tr_session)

            # create identifications
            for p_id in payload.identifications:
                pid_in = schemas.PatientIdentificationCreate(
                    patient_uid=patient.uid,
                    identification_uid=p_id.identification_uid,
                    value=p_id.value,
                )
                await PatientIdentificationService().create(pid_in, commit=False, session=tr_session)

            # save transactions
            await PatientService().repository.save_transaction(tr_session)

        metadata = {"client": client.snapshot()}
        metadata["client"]["province"] = client.province.snapshot() if client.province else {}
        metadata["client"]["district"] = client.district.snapshot() if client.district else {}
        patient = await PatientService().snapshot(patient, metadata)
        return StrawberryMapper[PatientType]().map(**patient.marshal_simple())

    @strawberry.mutation(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.UPDATE, FObject.PATIENT)]
        )]
    )
    async def update_patient(
            self, info, uid: str, payload: PatientInputType
    ) -> PatientResponse:
        felicity_user = await auth_from_info(info)

        if not uid:
            return OperationError(error="No uid provided to idenity update obj")

        patient = await PatientService().get(uid=uid)
        if not patient:
            return OperationError(
                error=f"patient with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = patient.to_dict()
        for _field in obj_data:
            if _field in payload.__dict__:
                try:
                    setattr(patient, _field, payload.__dict__[_field])
                except Exception as e:  # noqa
                    pass

        setattr(patient, "updated_by_uid", felicity_user.uid)

        obj_in = schemas.PatientUpdate(**patient.to_dict())
        patient = await PatientService().update(patient.uid, obj_in)

        # update identifications
        update_identification_uids = [
            id.identification_uid for id in payload.identifications
        ]
        identifications = await PatientIdentificationService().get_all(
            patient_uid=patient.uid
        )
        identifications_uids = [id.uid for id in identifications]

        for identification in identifications:
            # deleted
            if identification.uid not in update_identification_uids:
                await PatientIdentificationService().delete(identification.uid)
            else:  # update
                update_identification = list(
                    filter(
                        lambda x: x.identification_uid == identification.uid,
                        payload.identifications,
                    )
                )[0]
                id_update_in = schemas.PatientIdentificationUpdate(
                    patient_uid=patient.uid, **update_identification.to_dict()
                )
                identification = await PatientIdentificationService().update(
                    identification.uid, id_update_in
                )

        # new
        for _pid in payload.identifications:
            if _pid.identification_uid not in identifications_uids:
                pid_in = schemas.PatientIdentificationCreate(
                    patient_uid=patient.uid,
                    identification_uid=_pid.identification_uid,
                    value=_pid.value,
                )
                await PatientIdentificationService().create(pid_in)

        patient = await PatientService().get(uid=patient.uid)
        return PatientType(**patient.marshal_simple())
