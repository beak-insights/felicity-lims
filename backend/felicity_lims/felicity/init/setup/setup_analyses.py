from typing import Optional

from felicity.apps.analysis.models.analysis import (
    Analysis,
    AnalysisCategory
)
from felicity.apps.analysis.models.qc import (
    QCLevel
)
from felicity.apps.analysis.schemas import (
    AnalysisCreate,
    QCLevelCreate,
    AnalysisCategoryCreate
)


def create_categories():
    categories = [
        AnalysisCategoryCreate(
            name="Quality Control",
            description='Quality Control Analysis Services Groupings',
            active=True
        ),
        AnalysisCategoryCreate(
            name="Molecular Tech",
            description='Molecular Techniques',
            active=True
        ),
    ]
    for category in categories:
        cat = AnalysisCategory.get(name=category.name)
        if not cat:
            AnalysisCategory.create(category)


def create_qc_levels() -> None:
    qc_levels = [
        QCLevelCreate(level='Blank'),
        QCLevelCreate(level='Negative Control'),
        QCLevelCreate(level='Positive Control'),
        QCLevelCreate(level='Low Positive Control'),
        QCLevelCreate(level='High Positive Control'),
    ]

    for level_in in qc_levels:
        qc_level: Optional[QCLevel] = QCLevel.get(level=level_in.level)
        if not qc_level:
            QCLevel.create(level_in)
