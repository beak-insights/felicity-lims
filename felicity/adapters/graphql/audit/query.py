from typing import List

import strawberry  # noqa
from domain.audit.models import AuditLog

from adapters.graphql.audit.types import AuditLogType
from adapters.graphql.permissions import IsAuthenticated


@strawberry.type
class AuditLogQuery:
    @strawberry.field(permission_classes=[IsAuthenticated])
    async def audit_logs_filter(
            self, info, target_type: str, target_id: str
    ) -> List[AuditLogType]:
        return await AuditLog.get_all(target_type=target_type, target_id=target_id)
