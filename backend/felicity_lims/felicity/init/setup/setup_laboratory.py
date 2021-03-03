from typing import Optional

from felicity.apps.setup.models import Laboratory
from felicity.apps.setup.schemas import LaboratoryCreate


def create_laboratory() -> None:
    laboratory: Optional[Laboratory] = Laboratory.get_by_setup_name("felicity")
    if not laboratory:
        lab_in = LaboratoryCreate(
            setup_name="felicity",
            lab_name="Felicity Labs",
            email=None,
            email_cc=None,
            mobile_phone=None,
            business_phone=None,
        )
        Laboratory.create(lab_in)
