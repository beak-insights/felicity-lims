# Import all the models, so that Base has them before being
# imported by Alembic

# Base Model
from felicity.database.base_class import DBModel
# App Setup models
from felicity.apps.setup.models import Country
from felicity.apps.setup.models import Province
from felicity.apps.setup.models import District
from felicity.apps.setup.models import Laboratory
from felicity.apps.setup.models import Department
from felicity.apps.setup.models import Supplier
from felicity.apps.setup.models import Instrument
from felicity.apps.setup.models import Method
# App User models
from felicity.apps.user.models import UserAuth
from felicity.apps.user.models import User
# App Client models
from felicity.apps.client.models import Client
from felicity.apps.client.models import ClientContact
# App Patient models
from felicity.apps.patient.models import Patient
# App Analysis models
from felicity.apps.analysis.models import SampleType
from felicity.apps.analysis.models import Analysis
from felicity.apps.analysis.models import Profile
from felicity.apps.analysis.models import Sample
from felicity.apps.analysis.models import AnalysisRequest
from felicity.apps.analysis.models import AnalysisResult
# App Job models
from felicity.apps.job.models import Job