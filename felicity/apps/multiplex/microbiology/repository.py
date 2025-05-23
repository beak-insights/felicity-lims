from felicity.apps.abstract.repository import BaseRepository
from felicity.apps.multiplex.microbiology.entities import (
    AbxGuideline, AbxAntibioticGuideline, AbxAntibiotic,
    AbxKingdom, AbxPhylum, AbxClass, AbxOrder, AbxFamily, AbxGenus, AbxOrganism, AbxOrganismSerotype, AbxTestMethod,
    AbxBreakpointType, AbxHost, AbxSiteOfInfection, AbxBreakpoint, AbxExpResPhenotype,
    AbxExpertInterpretationRule, AbxMedium, AbxQCRange, AbxASTPanel, AbxASTResult, AbxOrganismResult, AbxGuidelineYear
)


class AbxGuidelineRepository(BaseRepository[AbxGuideline]):
    def __init__(self) -> None:
        super().__init__(AbxGuideline)


class AbxGuidelineYearRepository(BaseRepository[AbxGuidelineYear]):
    def __init__(self) -> None:
        super().__init__(AbxGuidelineYear)


class AbxAntibioticGuidelineRepository(BaseRepository[AbxAntibioticGuideline]):
    def __init__(self) -> None:
        super().__init__(AbxAntibioticGuideline)


class AbxAntibioticRepository(BaseRepository[AbxAntibiotic]):
    def __init__(self) -> None:
        super().__init__(AbxAntibiotic)


class AbxKingdomRepository(BaseRepository[AbxKingdom]):
    def __init__(self) -> None:
        super().__init__(AbxKingdom)


class AbxPhylumRepository(BaseRepository[AbxPhylum]):
    def __init__(self) -> None:
        super().__init__(AbxPhylum)


class AbxClassRepository(BaseRepository[AbxClass]):
    def __init__(self) -> None:
        super().__init__(AbxClass)


class AbxOrderRepository(BaseRepository[AbxOrder]):
    def __init__(self) -> None:
        super().__init__(AbxOrder)


class AbxFamilyRepository(BaseRepository[AbxFamily]):
    def __init__(self) -> None:
        super().__init__(AbxFamily)


class AbxGenusRepository(BaseRepository[AbxGenus]):
    def __init__(self) -> None:
        super().__init__(AbxGenus)


class AbxOrganismRepository(BaseRepository[AbxOrganism]):
    def __init__(self) -> None:
        super().__init__(AbxOrganism)


class AbxOrganismSerotypeRepository(BaseRepository[AbxOrganismSerotype]):
    def __init__(self) -> None:
        super().__init__(AbxOrganismSerotype)


class AbxTestMethodRepository(BaseRepository[AbxTestMethod]):
    def __init__(self) -> None:
        super().__init__(AbxTestMethod)


class AbxBreakpointTypeRepository(BaseRepository[AbxBreakpointType]):
    def __init__(self) -> None:
        super().__init__(AbxBreakpointType)


class AbxHostRepository(BaseRepository[AbxHost]):
    def __init__(self) -> None:
        super().__init__(AbxHost)


class AbxSiteOfInfectionRepository(BaseRepository[AbxSiteOfInfection]):
    def __init__(self) -> None:
        super().__init__(AbxSiteOfInfection)


class AbxBreakpointRepository(BaseRepository[AbxBreakpoint]):
    def __init__(self) -> None:
        super().__init__(AbxBreakpoint)


class AbxExpResPhenotypeRepository(BaseRepository[AbxExpResPhenotype]):
    def __init__(self) -> None:
        super().__init__(AbxExpResPhenotype)


class AbxExpertInterpretationRuleRepository(BaseRepository[AbxExpertInterpretationRule]):
    def __init__(self) -> None:
        super().__init__(AbxExpertInterpretationRule)


class AbxMediumRepository(BaseRepository[AbxMedium]):
    def __init__(self) -> None:
        super().__init__(AbxMedium)


class AbxQCRangeRepository(BaseRepository[AbxQCRange]):
    def __init__(self) -> None:
        super().__init__(AbxQCRange)


class AbxASTPanelRepository(BaseRepository[AbxASTPanel]):
    def __init__(self) -> None:
        super().__init__(AbxASTPanel)


class AbxASTResultRepository(BaseRepository[AbxASTResult]):
    def __init__(self) -> None:
        super().__init__(AbxASTResult)


class AbxOrganismResultRepository(BaseRepository[AbxOrganismResult]):
    def __init__(self) -> None:
        super().__init__(AbxOrganismResult)
