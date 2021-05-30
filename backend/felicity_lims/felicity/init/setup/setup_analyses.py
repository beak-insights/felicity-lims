from typing import Optional

from felicity.apps.analysis.models.analysis import (
    Analysis,
    AnalysisCategory
)
from felicity.apps.analysis.schemas import (
    AnalysisCreate,
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


def create_analysis_services() -> None:
    category = AnalysisCategory.get(name='Quality Control')
    services = []
    qc_services = [
        AnalysisCreate(name='Blank', keyword='qc_blank', description="Blank",
                       category_uid=category.uid if category else None),
        AnalysisCreate(name='Negative Control', keyword='qc_nc', description="Negative Control",
                       category_uid=category.uid if category else None),
        AnalysisCreate(name='Positive Control', keyword='qc_pc', description="Positive Control",
                       category_uid=category.uid if category else None),
        AnalysisCreate(name='Low Positive Control', keyword='qc_lpc', description="Low Positive Control",
                       category_uid=category.uid if category else None),
        AnalysisCreate(name='Medium Positive Control', keyword='qc_mpc', description="Medium Positive Control",
                       category_uid=category.uid if category else None),
        AnalysisCreate(name='High Positive Control', keyword='qc_hpc', description="High Positive Control",
                       category_uid=category.uid if category else None),
    ]
    all_services = services + qc_services

    for analyte_in in all_services:
        analysis: Optional[Analysis] = Analysis.get(name=analyte_in.name)
        if not analysis:
            Analysis.create(analyte_in)
