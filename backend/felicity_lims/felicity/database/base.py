# Import all the models, so that Base has them before being
# imported by Alembic

# Base Model
from felicity.database.base_class import DBModel
# App setup models
from felicity.apps.setup.models import Country
from felicity.apps.setup.models import Province
from felicity.apps.setup.models import District
from felicity.apps.setup.models import Laboratory
from felicity.apps.setup.models import Department
from felicity.apps.setup.models import Supplier
from felicity.apps.setup.models import Instrument
from felicity.apps.setup.models import Method
# App user models
from felicity.apps.user.models import UserAuth
from felicity.apps.user.models import User
# App client models
from felicity.apps.client.models import Client
from felicity.apps.client.models import ClientContact
# App patient models
from felicity.apps.patient.models import Patient