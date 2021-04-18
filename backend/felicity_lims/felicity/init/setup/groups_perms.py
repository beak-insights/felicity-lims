from typing import Optional

from felicity.apps.user import models
from felicity.apps.user import schemas

groups = [
    'Administrator',
    'Laboratory Manager',
    'Laboratory Scientist',
    'Laboratory Technicians',
    'Laboratory Hand',
    'Data Clerk',
]

actions_targets = [
    # All round
    ('any', 'any'),
    # admin
    ('access', 'admin'),
    # worksheet
    ('create', 'worksheet'),
    ('modify', 'worksheet'),
    ('submit', 'worksheet'),
    ('verify', 'worksheet'),
    # sample
    ('create', 'sample'),
    ('modify', 'sample'),
    ('submit', 'sample'),
    ('verify', 'sample'),
    # results
    ('submit', 'result'),
    ('verify', 'result'),
]


def create_groups() -> None:
    for _grp in groups:
        exists = models.Group.get(name=_grp)
        if not exists:
            schema = schemas.GroupCreate(name=_grp)
            models.Group.create(schema)


def create_permissions() -> None:
    for _perm in actions_targets:
        exists = models.Permission.get(action__exact=_perm[0], target__exact=_perm[1])
        if not exists:
            schema = schemas.PermissionCreate(action=_perm[0], target=_perm[1])
            models.Permission.create(schema)
