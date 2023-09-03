from sanic import Sanic

from adapters.graphql.dependencies import IDependencyService, DependencyService
from domain.analysis.ports.repository.analysis import (
    ICodingStandardRepository,
    ISampleTypeRepository,
    ISampleTypeCodingRepository,
    IProfileRepository,
    IProfileCodingRepository,
    IAnalysisRepository,
    IAnalysisInterimRepository,
    IAnalysisCorrectionFactorRepository,
    IAnalysisDetectionLimitRepository,
    IAnalysisUncertaintyRepository,
    IAnalysisSpecificationRepository,
    IResultOptionRepository,
    IAnalysisRequestRepository,
)
from domain.analysis.ports.repository.quality_control import (
    IQCSetRepository,
    IQCLevelRepository,
    IQCTemplateRepository,
)
from domain.analysis.ports.repository.result import (
    IAnalysisResultRepository,
    IResultMutationRepository,
)
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
from domain.analysis.services.analysis import (
    AnalysisCategoryService,
    CodingStandardService,
    SampleTypeCodingService,
    SampleTypeService,
    ProfileService,
    ProfileCodingService,
    AnalysisService,
    AnalysisCodingService,
    AnalysisInterimService,
    AnalysisCorrectionFactorService,
    AnalysisDetectionLimitService,
    AnalysisUncertaintyService,
    AnalysisSpecificationService,
    ResultOptionService,
    AnalysisRequestService,
    RejectionReasonService,
    SampleService,
)
from domain.analysis.services.quality_control import (
    QCSetService,
    QCLevelService,
    QCTemplateService,
)
from domain.analysis.services.result import ResultMutationService, AnalysisResultService
from domain.analytics.ports.repository import (
    IReportMetaRepository,
    ISampleAnalyticsRepository,
)
from domain.analytics.ports.service import IReportMetaService
from domain.analytics.services import ReportMetaService
from domain.client.ports.repository import IClientRepository, IClientContactRepository
from domain.client.ports.service import IClientContactService, IClientService
from domain.client.services import ClientContactService, ClientService
from domain.errlog.ports.repository import IErrorLogRepository
from domain.errlog.ports.service import IErrorLogService
from domain.errlog.services import ErrorLogService
from domain.idsequence.ports.repository import IIdSequenceRepository
from domain.idsequence.ports.service import IIdSequenceService
from domain.idsequence.service import IdSequenceService
from domain.impress.ports.repository import IReportImpressRepository
from domain.impress.ports.service import IReportImpressService
from domain.impress.services import ReportImpressService
from domain.instrument.ports.repository import (
    ICalibrationCertificateRepository,
    IMethodRepository,
    IInstrumentTypeRepository,
    IInstrumentCalibrationRepository,
)
from domain.instrument.ports.service import (
    ICalibrationCertificateService,
    IMethodService,
    IInstrumentTypeService,
    IInstrumentService,
    IInstrumentCalibrationService,
)
from domain.instrument.services import (
    CalibrationCertificateService,
    InstrumentTypeService,
    InstrumentService,
    InstrumentCalibrationService,
    MethodService,
)
from domain.inventory.ports.repository import (
    IStockItemRepository,
    IStockOrderRepository,
    IStockAdjustmentRepository,
    IStockTransactionRepository,
    IStockOrderProductRepository,
    IStockProductRepository,
    IStockPackagingRepository,
    IStockUnitRepository,
    IHazardRepository,
    IStockCategoryRepository,
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
from domain.inventory.services import (
    StockItemService,
    StockCategoryService,
    HazardService,
    StockUnitService,
    StockPackagingService,
    StockProductService,
    StockOrderProductService,
    StockTransactionService,
    StockAdjustmentService,
    StockOrderService,
)
from domain.iol.fhir.services.action import IOLService
from domain.iol.fhir.services.create import FhirCreateService
from domain.iol.fhir.services.read import FhirReadService
from domain.iol.ports.service import IIOLService, IFhirReadService, IFhirCreateService
from domain.job.ports.repository import IJobRepository
from domain.job.ports.service import IJobService, IJobWorkerService
from domain.job.services import JobService, JobWorkerService
from domain.messaging.ports.repository import (
    IMessageThreadRepository,
    IMessageRepository,
)
from domain.messaging.ports.service import IMessageThreadService, IMessageService
from domain.messaging.services import MessageThreadService, MessageService
from domain.noticeboard.ports.repository import INoticeRepository
from domain.noticeboard.ports.service import INoticeService
from domain.noticeboard.services import NoticeService
from domain.notification.ports.repository import (
    INotificationRepository,
    IActivityFeedRepository,
    IActivityStreamRepository,
)
from domain.notification.ports.service import (
    IActivityFeedService,
    IActivityStreamService,
    INotificationService,
)
from domain.notification.services import (
    ActivityFeedService,
    ActivityStreamService,
    NotificationService,
)
from domain.patient.ports.repository import (
    IPatientRepository,
    IIdentificationRepository,
    IPatientIdentificationRepository,
)
from domain.patient.ports.service import (
    IIdentificationService,
    IPatientIdentificationService,
    IPatientService,
)
from domain.patient.services import (
    IdentificationService,
    PatientIdentificationService,
    PatientService,
)
from domain.reflex.ports.repository import (
    IReflexRuleRepository,
    IReflexActionRepository,
    IReflexBrainRepository,
    IReflexBrainCriteriaRepository,
    IReflexBrainFinalRepository,
    IReflexBrainAdditionRepository,
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
from domain.reflex.services import (
    ReflexRuleService,
    ReflexBrainAdditionService,
    ReflexBrainFinalService,
    ReflexBrainCriteriaService,
    ReflexBrainService,
    ReflexActionService,
    ReflexEngineService,
)
from domain.setup.ports.repository import (
    ILaboratoryRepository,
    ICountryRepository,
    ILaboratorySettingRepository,
    ISupplierRepository,
    IManufacturerRepository,
    IDepartmentRepository,
    IUnitRepository,
    IDistrictRepository,
    IProvinceRepository,
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
from domain.setup.services import (
    LaboratorySettingService,
    SupplierService,
    ManufacturerService,
    DepartmentService,
    UnitService,
    LaboratoryService,
    DistrictService,
    ProvinceService,
    CountryService,
)
from domain.shared.ports.repository import IBaseRepository
from domain.shared.ports.service import IBaseService
from domain.shared.services import BaseService
from domain.shipment.ports.repository import (
    IReferralLaboratoryRepository,
    IShippedSampleRepository,
    IShipmentRepository,
)
from domain.shipment.ports.service import (
    IReferralLaboratoryService,
    IShippedSampleService,
    IShipmentService,
)
from domain.shipment.services import (
    ReferralLaboratoryService,
    ShippedSampleService,
    ShipmentService,
)
from domain.storage.ports.repository import (
    IStoreRoomRepository,
    IStorageLocationRepository,
    IStorageSectionRepository,
    IStorageContainerRepository,
)
from domain.storage.ports.service import (
    IStoreRoomService,
    IStorageLocationService,
    IStorageSectionService,
    IStorageContainerService,
)
from domain.storage.services import (
    StoreRoomService,
    StorageLocationService,
    StorageSectionService,
    StorageContainerService,
)
from domain.user.ports.repository import IUserRepository, IGroupRepository
from domain.user.ports.service import (
    IUserService,
    IGroupService,
    IPermissionService,
)
from domain.user.services import UserService, PermissionService, GroupService
from domain.worksheet.ports.repository import (
    IWorkSheetRepository,
    IWorkSheetTemplateRepository,
)
from domain.worksheet.ports.service import IWorkSheetService, IWorkSheetTemplateService
from domain.worksheet.services import WorkSheetService, WorkSheetTemplateService
from infrastructure.database.analysis.repository.analysis import (
    AnalysisCorrectionFactorRepository,
    AnalysisDetectionLimitRepository,
    AnalysisInterimRepository,
    AnalysisRepository,
    AnalysisRequestRepository,
    AnalysisSpecificationRepository,
    AnalysisUncertaintyRepository,
    CodingStandardRepository,
    ProfileCodingRepository,
    ProfileRepository,
    ResultOptionRepository,
    SampleTypeCodingRepository,
    SampleTypeRepository,
)
from infrastructure.database.analysis.repository.quality_control import (
    QCSetRepository,
    QCLevelRepository,
    QCTemplateRepository,
)
from infrastructure.database.analysis.repository.results import (
    ResultMutationRepository,
    AnalysisResultRepository,
)
from infrastructure.database.analytics.repository import (
    ReportMetaRepository,
    SampleAnalyticsRepository,
)
from infrastructure.database.client.repository import (
    ClientRepository,
    ClientContactRepository,
)
from infrastructure.database.errlog.repository import ErrorLogRepository
from infrastructure.database.idsequencer.repository import IdSequenceRepository
from infrastructure.database.impress.repository import ReportImpressRepository
from infrastructure.database.instrument.repository import (
    CalibrationCertificateRepository,
    InstrumentTypeRepository,
    InstrumentCalibrationRepository,
    MethodRepository,
)
from infrastructure.database.inventory.repository import (
    StockItemRepository,
    StockOrderRepository,
    StockAdjustmentRepository,
    StockTransactionRepository,
    StockOrderProductRepository,
    StockProductRepository,
    StockPackagingRepository,
    StockUnitRepository,
    HazardRepository,
    StockCategoryRepository,
)
from infrastructure.database.job.repository import JobRepository
from infrastructure.database.messaging.repository import (
    MessageThreadRepository,
    MessageRepository,
)
from infrastructure.database.noticeboard.repository import NoticeRepository
from infrastructure.database.notification.repository import (
    NotificationRepository,
    ActivityFeedRepository,
    ActivityStreamRepository,
)
from infrastructure.database.patient.repository import (
    PatientRepository,
    IdentificationRepository,
    PatientIdentificationRepository,
)
from infrastructure.database.reflex.repository import (
    ReflexRuleRepository,
    ReflexActionRepository,
    ReflexBrainRepository,
    ReflexBrainCriteriaRepository,
    ReflexBrainFinalRepository,
    ReflexBrainAdditionRepository,
)
from infrastructure.database.repository.base import BaseRepository
from infrastructure.database.setup.repositories.location import (
    CountryRepository,
    DistrictRepository,
    ProvinceRepository,
)
from infrastructure.database.setup.repositories.setup import (
    LaboratoryRepository,
    LaboratorySettingRepository,
    SupplierRepository,
    ManufacturerRepository,
    DepartmentRepository,
    UnitRepository,
)
from infrastructure.database.shipment.repository import (
    ReferralLaboratoryRepository,
    ShippedSampleRepository,
    ShipmentRepository,
)
from infrastructure.database.storage.repository import (
    StoreRoomRepository,
    StorageLocationRepository,
    StorageSectionRepository,
    StorageContainerRepository,
)
from infrastructure.database.user.repository import UserRepository, GroupRepository
from infrastructure.database.worksheet.repository import (
    WorkSheetRepository,
    WorkSheetTemplateRepository,
)


def register_dependencies(app: Sanic):
    # bases
    app.ext.add_dependency(IBaseRepository, BaseRepository)
    app.ext.add_dependency(IBaseService, BaseService)

    app.ext.add_dependency(ICodingStandardRepository, CodingStandardRepository)
    app.ext.add_dependency(ISampleTypeRepository, SampleTypeRepository)
    app.ext.add_dependency(ISampleTypeCodingRepository, SampleTypeCodingRepository)
    app.ext.add_dependency(IProfileRepository, ProfileRepository)
    app.ext.add_dependency(IProfileCodingRepository, ProfileCodingRepository)
    app.ext.add_dependency(IAnalysisRepository, AnalysisRepository)
    app.ext.add_dependency(IAnalysisInterimRepository, AnalysisInterimRepository)
    app.ext.add_dependency(
        IAnalysisCorrectionFactorRepository, AnalysisCorrectionFactorRepository
    )
    app.ext.add_dependency(
        IAnalysisDetectionLimitRepository, AnalysisDetectionLimitRepository
    )
    app.ext.add_dependency(
        IAnalysisUncertaintyRepository, AnalysisUncertaintyRepository
    )
    app.ext.add_dependency(
        IAnalysisSpecificationRepository, AnalysisSpecificationRepository
    )
    app.ext.add_dependency(IResultOptionRepository, ResultOptionRepository)
    app.ext.add_dependency(IAnalysisRequestRepository, AnalysisRequestRepository)
    app.ext.add_dependency(ICodingStandardService, CodingStandardService)
    app.ext.add_dependency(ISampleTypeService, SampleTypeService)
    app.ext.add_dependency(ISampleTypeCodingService, SampleTypeCodingService)
    app.ext.add_dependency(IAnalysisCategoryService, AnalysisCategoryService)
    app.ext.add_dependency(IProfileService, ProfileService)
    app.ext.add_dependency(IProfileCodingService, ProfileCodingService)
    app.ext.add_dependency(IAnalysisService, AnalysisService)
    app.ext.add_dependency(IAnalysisCodingService, AnalysisCodingService)
    app.ext.add_dependency(IAnalysisInterimService, AnalysisInterimService)
    app.ext.add_dependency(
        IAnalysisCorrectionFactorService, AnalysisCorrectionFactorService
    )
    app.ext.add_dependency(
        IAnalysisDetectionLimitService, AnalysisDetectionLimitService
    )
    app.ext.add_dependency(IAnalysisUncertaintyService, AnalysisUncertaintyService)
    app.ext.add_dependency(IAnalysisSpecificationService, AnalysisSpecificationService)
    app.ext.add_dependency(IResultOptionService, ResultOptionService)
    app.ext.add_dependency(IAnalysisRequestService, AnalysisRequestService)
    app.ext.add_dependency(IRejectionReasonService, RejectionReasonService)
    app.ext.add_dependency(ISampleService, SampleService)
    app.ext.add_dependency(IQCSetRepository, QCSetRepository)
    app.ext.add_dependency(IQCLevelRepository, QCLevelRepository)
    app.ext.add_dependency(IQCTemplateRepository, QCTemplateRepository)
    app.ext.add_dependency(IAnalysisResultRepository, AnalysisResultRepository)
    app.ext.add_dependency(IResultMutationRepository, ResultMutationRepository)
    app.ext.add_dependency(IQCSetService, QCSetService)
    app.ext.add_dependency(IQCLevelService, QCLevelService)
    app.ext.add_dependency(IQCTemplateService, QCTemplateService)
    app.ext.add_dependency(IResultMutationService, ResultMutationService)
    app.ext.add_dependency(IAnalysisResultService, AnalysisResultService)
    app.ext.add_dependency(IReportMetaRepository, ReportMetaRepository)
    app.ext.add_dependency(ISampleAnalyticsRepository, SampleAnalyticsRepository)
    app.ext.add_dependency(IReportMetaService, ReportMetaService)
    app.ext.add_dependency(IClientRepository, ClientRepository)
    app.ext.add_dependency(IClientContactRepository, ClientContactRepository)
    app.ext.add_dependency(IClientContactService, ClientContactService)
    app.ext.add_dependency(IClientService, ClientService)
    app.ext.add_dependency(IErrorLogRepository, ErrorLogRepository)
    app.ext.add_dependency(IErrorLogService, ErrorLogService)
    app.ext.add_dependency(IIdSequenceService, IdSequenceService)
    app.ext.add_dependency(IIdSequenceRepository, IdSequenceRepository)
    app.ext.add_dependency(IReportImpressRepository, ReportImpressRepository)
    app.ext.add_dependency(IReportImpressService, ReportImpressService)
    app.ext.add_dependency(
        ICalibrationCertificateRepository, CalibrationCertificateRepository
    )
    app.ext.add_dependency(IMethodRepository, MethodRepository)
    app.ext.add_dependency(IInstrumentTypeRepository, InstrumentTypeRepository)
    app.ext.add_dependency(
        IInstrumentCalibrationRepository, InstrumentCalibrationRepository
    )
    app.ext.add_dependency(
        ICalibrationCertificateService, CalibrationCertificateService
    )
    app.ext.add_dependency(IMethodService, MethodService)
    app.ext.add_dependency(IInstrumentTypeService, InstrumentTypeService)
    app.ext.add_dependency(IInstrumentService, InstrumentService)
    app.ext.add_dependency(IInstrumentCalibrationService, InstrumentCalibrationService)
    app.ext.add_dependency(IStockItemRepository, StockItemRepository)
    app.ext.add_dependency(IStockOrderRepository, StockOrderRepository)
    app.ext.add_dependency(IStockAdjustmentRepository, StockAdjustmentRepository)
    app.ext.add_dependency(IStockTransactionRepository, StockTransactionRepository)
    app.ext.add_dependency(IStockOrderProductRepository, StockOrderProductRepository)
    app.ext.add_dependency(IStockProductRepository, StockProductRepository)
    app.ext.add_dependency(IStockPackagingRepository, StockPackagingRepository)
    app.ext.add_dependency(IStockUnitRepository, StockUnitRepository)
    app.ext.add_dependency(IHazardRepository, HazardRepository)
    app.ext.add_dependency(IStockCategoryRepository, StockCategoryRepository)
    app.ext.add_dependency(IStockItemService, StockItemService)
    app.ext.add_dependency(IStockCategoryService, StockCategoryService)
    app.ext.add_dependency(IHazardService, HazardService)
    app.ext.add_dependency(IStockUnitService, StockUnitService)
    app.ext.add_dependency(IStockPackagingService, StockPackagingService)
    app.ext.add_dependency(IStockProductService, StockProductService)
    app.ext.add_dependency(IStockOrderProductService, StockOrderProductService)
    app.ext.add_dependency(IStockTransactionService, StockTransactionService)
    app.ext.add_dependency(IStockAdjustmentService, StockAdjustmentService)
    app.ext.add_dependency(IStockOrderService, StockOrderService)
    app.ext.add_dependency(IIOLService, IOLService)
    app.ext.add_dependency(IFhirReadService, FhirReadService)
    app.ext.add_dependency(IFhirCreateService, FhirCreateService)
    app.ext.add_dependency(IJobRepository, JobRepository)
    app.ext.add_dependency(IJobService, JobService)
    app.ext.add_dependency(IJobWorkerService, JobWorkerService)
    app.ext.add_dependency(IMessageThreadRepository, MessageThreadRepository)
    app.ext.add_dependency(IMessageRepository, MessageRepository)
    app.ext.add_dependency(IMessageThreadService, MessageThreadService)
    app.ext.add_dependency(IMessageService, MessageService)
    app.ext.add_dependency(INoticeRepository, NoticeRepository)
    app.ext.add_dependency(INoticeService, NoticeService)
    app.ext.add_dependency(INotificationRepository, NotificationRepository)
    app.ext.add_dependency(IActivityFeedRepository, ActivityFeedRepository)
    app.ext.add_dependency(IActivityStreamRepository, ActivityStreamRepository)
    app.ext.add_dependency(IActivityFeedService, ActivityFeedService)
    app.ext.add_dependency(IActivityStreamService, ActivityStreamService)
    app.ext.add_dependency(INotificationService, NotificationService)
    app.ext.add_dependency(IPatientRepository, PatientRepository)
    app.ext.add_dependency(IIdentificationRepository, IdentificationRepository)
    app.ext.add_dependency(
        IPatientIdentificationRepository, PatientIdentificationRepository
    )
    app.ext.add_dependency(IIdentificationService, IdentificationService)
    app.ext.add_dependency(IPatientIdentificationService, PatientIdentificationService)
    app.ext.add_dependency(IPatientService, PatientService)
    app.ext.add_dependency(IReflexRuleRepository, ReflexRuleRepository)
    app.ext.add_dependency(IReflexActionRepository, ReflexActionRepository)
    app.ext.add_dependency(IReflexBrainRepository, ReflexBrainRepository)
    app.ext.add_dependency(
        IReflexBrainCriteriaRepository, ReflexBrainCriteriaRepository
    )
    app.ext.add_dependency(IReflexBrainFinalRepository, ReflexBrainFinalRepository)
    app.ext.add_dependency(
        IReflexBrainAdditionRepository, ReflexBrainAdditionRepository
    )
    app.ext.add_dependency(IReflexRuleService, ReflexRuleService)
    app.ext.add_dependency(IReflexBrainAdditionService, ReflexBrainAdditionService)
    app.ext.add_dependency(IReflexBrainFinalService, ReflexBrainFinalService)
    app.ext.add_dependency(IReflexBrainCriteriaService, ReflexBrainCriteriaService)
    app.ext.add_dependency(IReflexBrainService, ReflexBrainService)
    app.ext.add_dependency(IReflexActionService, ReflexActionService)
    app.ext.add_dependency(IReflexEngineService, ReflexEngineService)
    app.ext.add_dependency(ILaboratoryRepository, LaboratoryRepository)
    app.ext.add_dependency(ICountryRepository, CountryRepository)
    app.ext.add_dependency(ILaboratorySettingRepository, LaboratorySettingRepository)
    app.ext.add_dependency(ISupplierRepository, SupplierRepository)
    app.ext.add_dependency(IManufacturerRepository, ManufacturerRepository)
    app.ext.add_dependency(IDepartmentRepository, DepartmentRepository)
    app.ext.add_dependency(IUnitRepository, UnitRepository)
    app.ext.add_dependency(IDistrictRepository, DistrictRepository)
    app.ext.add_dependency(IProvinceRepository, ProvinceRepository)
    app.ext.add_dependency(ILaboratorySettingService, LaboratorySettingService)
    app.ext.add_dependency(ISupplierService, SupplierService)
    app.ext.add_dependency(IManufacturerService, ManufacturerService)
    app.ext.add_dependency(IDepartmentService, DepartmentService)
    app.ext.add_dependency(IUnitService, UnitService)
    app.ext.add_dependency(ILaboratoryService, LaboratoryService)
    app.ext.add_dependency(IDistrictService, DistrictService)
    app.ext.add_dependency(IProvinceService, ProvinceService)
    app.ext.add_dependency(ICountryService, CountryService)
    app.ext.add_dependency(IReferralLaboratoryRepository, ReferralLaboratoryRepository)
    app.ext.add_dependency(IShippedSampleRepository, ShippedSampleRepository)
    app.ext.add_dependency(IShipmentRepository, ShipmentRepository)
    app.ext.add_dependency(IReferralLaboratoryService, ReferralLaboratoryService)
    app.ext.add_dependency(IShippedSampleService, ShippedSampleService)
    app.ext.add_dependency(IShipmentService, ShipmentService)
    app.ext.add_dependency(IStoreRoomRepository, StoreRoomRepository)
    app.ext.add_dependency(IStorageLocationRepository, StorageLocationRepository)
    app.ext.add_dependency(IStorageSectionRepository, StorageSectionRepository)
    app.ext.add_dependency(IStorageContainerRepository, StorageContainerRepository)
    app.ext.add_dependency(IStoreRoomService, StoreRoomService)
    app.ext.add_dependency(IStorageLocationService, StorageLocationService)
    app.ext.add_dependency(IStorageSectionService, StorageSectionService)
    app.ext.add_dependency(IStorageContainerService, StorageContainerService)
    app.ext.add_dependency(IUserRepository, UserRepository)
    app.ext.add_dependency(IGroupRepository, GroupRepository)
    app.ext.add_dependency(IUserService, UserService)
    app.ext.add_dependency(IGroupService, GroupService)
    app.ext.add_dependency(IPermissionService, PermissionService)
    app.ext.add_dependency(IWorkSheetRepository, WorkSheetRepository)
    app.ext.add_dependency(IWorkSheetTemplateRepository, WorkSheetTemplateRepository)
    app.ext.add_dependency(IWorkSheetService, WorkSheetService)
    app.ext.add_dependency(IWorkSheetTemplateService, WorkSheetTemplateService)
    app.ext.add_dependency(IDependencyService, DependencyService)
