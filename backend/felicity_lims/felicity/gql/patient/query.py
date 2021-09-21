from typing import List, Optional
import strawberry

from felicity.apps.patient import models
from felicity.gql.patient.types import (
    PatientType,
)


@strawberry.type
class PatientQuery:
    @strawberry.field
    async def patient_all(self, info) -> List[PatientType]:
        return await models.Patient.all()

    @strawberry.field
    async def patient_by_uid(self, info, uid: int) -> Optional[PatientType]:
        return await models.Patient.get(uid=uid)

    @strawberry.field
    async def patient_by_patient_id(self, info, patient_id: str) -> Optional[PatientType]:
        return await models.Patient.get(patient_id=patient_id)

    @strawberry.field
    async def patient_search(self, info, query_string: str) -> List[PatientType]:
        filters = ['first_name__ilike', 'middle_name__ilike', 'last_name__ilike', 'patient_id__ilike',
                   'client_patient_id__ilike', 'phone_mobile__ilike', 'phone_home__ilike']
        combined = set()
        for _filter in filters:
            arg = dict()
            arg[_filter] = f"%{query_string}%"
            query = await models.Patient.where(**arg).all()
            for item in query:
                combined.add(item)
        return list(combined)
