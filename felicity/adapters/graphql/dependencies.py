from dataclasses import dataclass
from typing import Any, Protocol

from sanic.request import Request
from strawberry.http.temporal_response import TemporalResponse
from strawberry.types.info import Info as StrawberryInfo, RootValueType

from adapters.shared import BaseDependencyService
from domain.analysis.ports.service.analysis import (
    ICodingStandardService,
    ISampleTypeService,
    ISampleTypeCodingService,
    IAnalysisCategoryService,
    IProfileService,
    IProfileCodingService,
    IAnalysisService,
    IAnalysisCodingService,
    IAnalysisInterimService,
    IAnalysisCorrectionFactorService,
    IAnalysisDetectionLimitService,
    IAnalysisUncertaintyService,
    IAnalysisSpecificationService,
    IResultOptionService,
    IAnalysisRequestService,
    IRejectionReasonService,
    ISampleService,
)
from domain.analysis.ports.service.quality_control import (
    IQCSetService,
    IQCLevelService,
    IQCTemplateService,
)
from domain.analysis.ports.service.result import (
    IResultMutationService,
    IAnalysisResultService,
)
from domain.analytics.ports.service import IReportMetaService
from domain.client.ports.service import IClientContactService, IClientService
from domain.errlog.ports.service import IErrorLogService
from domain.impress.ports.service import IReportImpressService
from domain.instrument.ports.service import (
    ICalibrationCertificateService,
    IMethodService,
    IInstrumentTypeService,
    IInstrumentService,
    IInstrumentCalibrationService,
)
from domain.inventory.ports.service import (
    IStockItemService,
    IStockCategoryService,
    IHazardService,
    IStockUnitService,
    IStockPackagingService,
    IStockProductService,
    IStockOrderProductService,
    IStockTransactionService,
    IStockAdjustmentService,
    IStockOrderService,
)
from domain.iol.ports.service import IIOLService, IFhirReadService, IFhirCreateService
from domain.job.ports.service import IJobService, IJobWorkerService
from domain.messaging.ports.service import IMessageThreadService, IMessageService
from domain.noticeboard.ports.service import INoticeService
from domain.notification.ports.service import (
    IActivityFeedService,
    IActivityStreamService,
    INotificationService,
)
from domain.patient.ports.service import (
    IIdentificationService,
    IPatientIdentificationService,
    IPatientService,
)
from domain.reflex.ports.service import (
    IReflexRuleService,
    IReflexBrainAdditionService,
    IReflexBrainFinalService,
    IReflexBrainCriteriaService,
    IReflexBrainService,
    IReflexActionService,
    IReflexEngineService,
)
from domain.setup.ports.service import (
    ILaboratorySettingService,
    ISupplierService,
    IManufacturerService,
    IDepartmentService,
    IUnitService,
    ILaboratoryService,
    IDistrictService,
    IProvinceService,
    ICountryService,
)
from domain.shipment.ports.service import (
    IReferralLaboratoryService,
    IShippedSampleService,
    IShipmentService,
)
from domain.storage.ports.service import (
    IStoreRoomService,
    IStorageLocationService,
    IStorageSectionService,
    IStorageContainerService,
)
from domain.user.ports.service import (
    IUserService,
    IGroupService,
    IPermissionService,
)
from domain.user.schemas import User
from domain.worksheet.ports.service import IWorkSheetService, IWorkSheetTemplateService


@dataclass
class InfoContext:
    user: User
    request: Request
    response: TemporalResponse
    coding_standard_service: ICodingStandardService
    sample_type_service: ISampleTypeService
    sample_type_coding_service: ISampleTypeCodingService
    analysis_category_service: IAnalysisCategoryService
    profile_service: IProfileService
    profile_coding_service: IProfileCodingService
    analysis_service: IAnalysisService
    analysis_coding_service: IAnalysisCodingService
    analysis_interim_service: IAnalysisInterimService
    analysis_correction_factor_service: IAnalysisCorrectionFactorService
    analysis_detection_limit_service: IAnalysisDetectionLimitService
    analysis_uncertainty_service: IAnalysisUncertaintyService
    analysis_specification_service: IAnalysisSpecificationService
    result_option_service: IResultOptionService
    analysis_request_service: IAnalysisRequestService
    rejection_reason_service: IRejectionReasonService
    sample_service: ISampleService
    qc_set_service: IQCSetService
    qc_level_service: IQCLevelService
    qc_template_service: IQCTemplateService
    result_mutation_service: IResultMutationService
    analysis_result_service: IAnalysisResultService
    report_meta_service: IReportMetaService
    client_contact_service: IClientContactService
    client_service: IClientService
    error_log_service: IErrorLogService
    report_impress_service: IReportImpressService
    calibration_certificate_service: ICalibrationCertificateService
    method_service: IMethodService
    instrument_type_service: IInstrumentTypeService
    instrument_service: IInstrumentService
    instrument_calibration_service: IInstrumentCalibrationService
    stock_item_service: IStockItemService
    stock_category_service: IStockCategoryService
    hazard_service: IHazardService
    stock_unit_service: IStockUnitService
    stock_packaging_service: IStockPackagingService
    stock_product_service: IStockProductService
    stock_order_product_service: IStockOrderProductService
    stock_transaction_service: IStockTransactionService
    stock_adjustment_service: IStockAdjustmentService
    stock_order_service: IStockOrderService
    iol_service: IIOLService
    fhir_read_service: IFhirReadService
    fhir_create_service: IFhirCreateService
    job_service: IJobService
    job_worker_service: IJobWorkerService
    message_thread_service: IMessageThreadService
    message_service: IMessageService
    notice_service: INoticeService
    activity_feed_service: IActivityFeedService
    activity_stream_service: IActivityStreamService
    notification_service: INotificationService
    identification_service: IIdentificationService
    patient_identification_service: IPatientIdentificationService
    patient_service: IPatientService
    reflex_rule_service: IReflexRuleService
    reflex_brain_addition_service: IReflexBrainAdditionService
    reflex_brain_final_service: IReflexBrainFinalService
    reflex_brain_criteria_service: IReflexBrainCriteriaService
    reflex_brain_service: IReflexBrainService
    reflex_action_service: IReflexActionService
    reflex_engine_service: IReflexEngineService
    laboratory_setting_service: ILaboratorySettingService
    supplier_service: ISupplierService
    manufacturer_service: IManufacturerService
    department_service: IDepartmentService
    unit_service: IUnitService
    laboratory_service: ILaboratoryService
    district_service: IDistrictService
    province_service: IProvinceService
    country_service: ICountryService
    referral_laboratory_service: IReferralLaboratoryService
    shipped_sample_service: IShippedSampleService
    shipment_service: IShipmentService
    store_room_service: IStoreRoomService
    storage_location_service: IStorageLocationService
    storage_section_service: IStorageSectionService
    storage_container_service: IStorageContainerService
    user_service: IUserService
    group_service: IGroupService
    permission_service: IPermissionService
    work_sheet_service: IWorkSheetService
    work_sheet_template_service: IWorkSheetTemplateService


Info = StrawberryInfo[InfoContext, RootValueType]


class IDependencyService(Protocol):
    async def get_gql_context(self, request: Request) -> Any:
        ...


class DependencyService(BaseDependencyService):
    def __init__(
        self,
        coding_standard_service: ICodingStandardService,
        sample_type_service: ISampleTypeService,
        sample_type_coding_service: ISampleTypeCodingService,
        analysis_category_service: IAnalysisCategoryService,
        profile_service: IProfileService,
        profile_coding_service: IProfileCodingService,
        analysis_service: IAnalysisService,
        analysis_coding_service: IAnalysisCodingService,
        analysis_interim_service: IAnalysisInterimService,
        analysis_correction_factor_service: IAnalysisCorrectionFactorService,
        analysis_detection_limit_service: IAnalysisDetectionLimitService,
        analysis_uncertainty_service: IAnalysisUncertaintyService,
        analysis_specification_service: IAnalysisSpecificationService,
        result_option_service: IResultOptionService,
        analysis_request_service: IAnalysisRequestService,
        rejection_reason_service: IRejectionReasonService,
        sample_service: ISampleService,
        qc_set_service: IQCSetService,
        qc_level_service: IQCLevelService,
        qc_template_service: IQCTemplateService,
        result_mutation_service: IResultMutationService,
        analysis_result_service: IAnalysisResultService,
        report_meta_service: IReportMetaService,
        client_contact_service: IClientContactService,
        client_service: IClientService,
        error_log_service: IErrorLogService,
        report_impress_service: IReportImpressService,
        calibration_certificate_service: ICalibrationCertificateService,
        method_service: IMethodService,
        instrument_type_service: IInstrumentTypeService,
        instrument_service: IInstrumentService,
        instrument_calibration_service: IInstrumentCalibrationService,
        stock_item_service: IStockItemService,
        stock_category_service: IStockCategoryService,
        hazard_service: IHazardService,
        stock_unit_service: IStockUnitService,
        stock_packaging_service: IStockPackagingService,
        stock_product_service: IStockProductService,
        stock_order_product_service: IStockOrderProductService,
        stock_transaction_service: IStockTransactionService,
        stock_adjustment_service: IStockAdjustmentService,
        stock_order_service: IStockOrderService,
        iol_service: IIOLService,
        fhir_read_service: IFhirReadService,
        fhir_create_service: IFhirCreateService,
        job_service: IJobService,
        job_worker_service: IJobWorkerService,
        message_thread_service: IMessageThreadService,
        message_service: IMessageService,
        notice_service: INoticeService,
        activity_feed_service: IActivityFeedService,
        activity_stream_service: IActivityStreamService,
        notification_service: INotificationService,
        identification_service: IIdentificationService,
        patient_identification_service: IPatientIdentificationService,
        patient_service: IPatientService,
        reflex_rule_service: IReflexRuleService,
        reflex_brain_addition_service: IReflexBrainAdditionService,
        reflex_brain_final_service: IReflexBrainFinalService,
        reflex_brain_criteria_service: IReflexBrainCriteriaService,
        reflex_brain_service: IReflexBrainService,
        reflex_action_service: IReflexActionService,
        reflex_engine_service: IReflexEngineService,
        laboratory_setting_service: ILaboratorySettingService,
        supplier_service: ISupplierService,
        manufacturer_service: IManufacturerService,
        department_service: IDepartmentService,
        unit_service: IUnitService,
        laboratory_service: ILaboratoryService,
        district_service: IDistrictService,
        province_service: IProvinceService,
        country_service: ICountryService,
        referral_laboratory_service: IReferralLaboratoryService,
        shipped_sample_service: IShippedSampleService,
        shipment_service: IShipmentService,
        store_room_service: IStoreRoomService,
        storage_location_service: IStorageLocationService,
        storage_section_service: IStorageSectionService,
        storage_container_service: IStorageContainerService,
        user_service: IUserService,
        group_service: IGroupService,
        permission_service: IPermissionService,
        work_sheet_service: IWorkSheetService,
        work_sheet_template_service: IWorkSheetTemplateService,
    ):
        self.coding_standard_service = coding_standard_service
        self.sample_type_service = sample_type_service
        self.sample_type_coding_service = sample_type_coding_service
        self.analysis_category_service = analysis_category_service
        self.profile_service = profile_service
        self.profile_coding_service = profile_coding_service
        self.analysis_service = analysis_service
        self.analysis_coding_service = analysis_coding_service
        self.analysis_interim_service = analysis_interim_service
        self.analysis_correction_factor_service = analysis_correction_factor_service
        self.analysis_detection_limit_service = analysis_detection_limit_service
        self.analysis_uncertainty_service = analysis_uncertainty_service
        self.analysis_specification_service = analysis_specification_service
        self.result_option_service = result_option_service
        self.analysis_request_service = analysis_request_service
        self.rejection_reason_service = rejection_reason_service
        self.sample_service = sample_service
        self.qc_set_service = qc_set_service
        self.qc_level_service = qc_level_service
        self.qc_template_service = qc_template_service
        self.result_mutation_service = result_mutation_service
        self.analysis_result_service = analysis_result_service
        self.report_meta_service = report_meta_service
        self.client_contact_service = client_contact_service
        self.client_service = client_service
        self.error_log_service = error_log_service
        self.report_impress_service = report_impress_service
        self.calibration_certificate_service = calibration_certificate_service
        self.method_service = method_service
        self.instrument_type_service = instrument_type_service
        self.instrument_service = instrument_service
        self.instrument_calibration_service = instrument_calibration_service
        self.stock_item_service = stock_item_service
        self.stock_category_service = stock_category_service
        self.hazard_service = hazard_service
        self.stock_unit_service = stock_unit_service
        self.stock_packaging_service = stock_packaging_service
        self.stock_product_service = stock_product_service
        self.stock_order_product_service = stock_order_product_service
        self.stock_transaction_service = stock_transaction_service
        self.stock_adjustment_service = stock_adjustment_service
        self.stock_order_service = stock_order_service
        self.iol_service = iol_service
        self.fhir_read_service = fhir_read_service
        self.fhir_create_service = fhir_create_service
        self.job_service = job_service
        self.job_worker_service = job_worker_service
        self.message_thread_service = message_thread_service
        self.message_service = message_service
        self.notice_service = notice_service
        self.activity_feed_service = activity_feed_service
        self.activity_stream_service = activity_stream_service
        self.notification_service = notification_service
        self.identification_service = identification_service
        self.patient_identification_service = patient_identification_service
        self.patient_service = patient_service
        self.reflex_rule_service = reflex_rule_service
        self.reflex_brain_addition_service = reflex_brain_addition_service
        self.reflex_brain_final_service = reflex_brain_final_service
        self.reflex_brain_criteria_service = reflex_brain_criteria_service
        self.reflex_brain_service = reflex_brain_service
        self.reflex_action_service = reflex_action_service
        self.reflex_engine_service = reflex_engine_service
        self.laboratory_setting_service = laboratory_setting_service
        self.supplier_service = supplier_service
        self.manufacturer_service = manufacturer_service
        self.department_service = department_service
        self.unit_service = unit_service
        self.laboratory_service = laboratory_service
        self.district_service = district_service
        self.province_service = province_service
        self.country_service = country_service
        self.referral_laboratory_service = referral_laboratory_service
        self.shipped_sample_service = shipped_sample_service
        self.shipment_service = shipment_service
        self.store_room_service = store_room_service
        self.storage_location_service = storage_location_service
        self.storage_section_service = storage_section_service
        self.storage_container_service = storage_container_service
        self.user_service = user_service
        self.group_service = group_service
        self.permission_service = permission_service
        self.work_sheet_service = work_sheet_service
        self.work_sheet_template_service = work_sheet_template_service

    async def get_gql_context(self, request: Request) -> Any:
        ctx = await self.get_app_context(request)
        ctx["coding_standard_service"] = self.coding_standard_service
        ctx["sample_type_service"] = self.sample_type_service
        ctx["sample_type_coding_service"] = self.sample_type_coding_service
        ctx["analysis_category_service"] = self.analysis_category_service
        ctx["profile_service"] = self.profile_service
        ctx["profile_coding_service"] = self.profile_coding_service
        ctx["analysis_service"] = self.analysis_service
        ctx["analysis_coding_service"] = self.analysis_coding_service
        ctx["analysis_interim_service"] = self.analysis_interim_service
        ctx[
            "analysis_correction_factor_service"
        ] = self.analysis_correction_factor_service
        ctx["analysis_detection_limit_service"] = self.analysis_detection_limit_service
        ctx["analysis_uncertainty_service"] = self.analysis_uncertainty_service
        ctx["analysis_specification_service"] = self.analysis_specification_service
        ctx["result_option_service"] = self.result_option_service
        ctx["analysis_request_service"] = self.analysis_request_service
        ctx["rejection_reason_service"] = self.rejection_reason_service
        ctx["sample_service"] = self.sample_service
        ctx["qc_set_service"] = self.qc_set_service
        ctx["qc_level_service"] = self.qc_level_service
        ctx["qc_template_service"] = self.qc_template_service
        ctx["result_mutation_service"] = self.result_mutation_service
        ctx["analysis_result_service"] = self.analysis_result_service
        ctx["report_meta_service"] = self.report_meta_service
        ctx["client_contact_service"] = self.client_contact_service
        ctx["client_service"] = self.client_service
        ctx["error_log_service"] = self.error_log_service
        ctx["report_impress_service"] = self.report_impress_service
        ctx["calibration_certificate_service"] = self.calibration_certificate_service
        ctx["method_service"] = self.method_service
        ctx["instrument_type_service"] = self.instrument_type_service
        ctx["instrument_service"] = self.instrument_service
        ctx["instrument_calibration_service"] = self.instrument_calibration_service
        ctx["stock_item_service"] = self.stock_item_service
        ctx["stock_category_service"] = self.stock_category_service
        ctx["hazard_service"] = self.hazard_service
        ctx["stock_unit_service"] = self.stock_unit_service
        ctx["stock_packaging_service"] = self.stock_packaging_service
        ctx["stock_product_service"] = self.stock_product_service
        ctx["stock_order_product_service"] = self.stock_order_product_service
        ctx["stock_transaction_service"] = self.stock_transaction_service
        ctx["stock_adjustment_service"] = self.stock_adjustment_service
        ctx["stock_order_service"] = self.stock_order_service
        ctx["iol_service"] = self.iol_service
        ctx["fhir_read_service"] = self.fhir_read_service
        ctx["fhir_create_service"] = self.fhir_create_service
        ctx["job_service"] = self.job_service
        ctx["job_worker_service"] = self.job_worker_service
        ctx["message_thread_service"] = self.message_thread_service
        ctx["message_service"] = self.message_service
        ctx["notice_service"] = self.notice_service
        ctx["activity_feed_service"] = self.activity_feed_service
        ctx["activity_stream_service"] = self.activity_stream_service
        ctx["notification_service"] = self.notification_service
        ctx["identification_service"] = self.identification_service
        ctx["patient_identification_service"] = self.patient_identification_service
        ctx["patient_service"] = self.patient_service
        ctx["reflex_rule_service"] = self.reflex_rule_service
        ctx["reflex_brain_addition_service"] = self.reflex_brain_addition_service
        ctx["reflex_brain_final_service"] = self.reflex_brain_final_service
        ctx["reflex_brain_criteria_service"] = self.reflex_brain_criteria_service
        ctx["reflex_brain_service"] = self.reflex_brain_service
        ctx["reflex_action_service"] = self.reflex_action_service
        ctx["reflex_engine_service"] = self.reflex_engine_service
        ctx["laboratory_setting_service"] = self.laboratory_setting_service
        ctx["supplier_service"] = self.supplier_service
        ctx["manufacturer_service"] = self.manufacturer_service
        ctx["department_service"] = self.department_service
        ctx["unit_service"] = self.unit_service
        ctx["laboratory_service"] = self.laboratory_service
        ctx["district_service"] = self.district_service
        ctx["province_service"] = self.province_service
        ctx["country_service"] = self.country_service
        ctx["referral_laboratory_service"] = self.referral_laboratory_service
        ctx["shipped_sample_service"] = self.shipped_sample_service
        ctx["shipment_service"] = self.shipment_service
        ctx["store_room_service"] = self.store_room_service
        ctx["storage_location_service"] = self.storage_location_service
        ctx["storage_section_service"] = self.storage_section_service
        ctx["storage_container_service"] = self.storage_container_service
        ctx["user_service"] = self.user_service
        ctx["group_service"] = self.group_service
        ctx["permission_service"] = self.permission_service
        ctx["work_sheet_service"] = self.work_sheet_service
        ctx["work_sheet_template_service"] = self.work_sheet_template_service
        return ctx
