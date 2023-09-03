from abc import ABC, abstractmethod
from datetime import datetime

from sanic import Request

from domain.iol.fhir.schema import (
    DiagnosticReportResource,
    PatientResource,
    BundleResource,
    SpecimenResource,
    Reference,
    ServiceRequestResource,
)
from domain.user.schemas import User


class IFhirCreateService(ABC):
    @abstractmethod
    async def create_resource(
        self,
        resource_type: str,
        resource_data: BundleResource
        | PatientResource
        | ServiceRequestResource
        | DiagnosticReportResource,
        request: Request,
        current_user: User,
    ):
        pass

    @abstractmethod
    async def create_bundle(
        self, resource_data: BundleResource, request: Request, current_user: User
    ):
        pass

    @abstractmethod
    async def create_inbound_shipment(
        self, payload: BundleResource, request: Request, current_user: User
    ):
        pass

    @abstractmethod
    async def resolve_ref_laboratory(self, ref: Reference, request: Request):
        pass

    @abstractmethod
    async def create_diagnostic_report(
        self,
        diagnostic_data: DiagnosticReportResource,
        request: Request,
        current_user: User,
    ):
        pass


class IFhirReadService(ABC):
    @staticmethod
    @abstractmethod
    def one_of_else(of: list, one: str, default=None):
        pass

    @staticmethod
    @abstractmethod
    def dt_to_st(v: datetime):
        pass

    @abstractmethod
    async def get_diagnostic_report_resource(
        self, service_request_uid: str, obs_uids: list[str], for_referral=False
    ) -> DiagnosticReportResource | None:
        pass

    @abstractmethod
    async def get_patient_resource(self, patient_id: str) -> PatientResource | None:
        pass

    @abstractmethod
    async def get_specimen_resource(self, specimen_id: str) -> SpecimenResource:
        pass

    @abstractmethod
    async def get_shipment_bundle_resource(
        self, shipment_uid: str
    ) -> BundleResource | None:
        pass


class IIOLService(ABC):
    ...
