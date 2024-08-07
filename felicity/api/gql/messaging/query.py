from typing import List, Optional

import strawberry  # noqa

from felicity.api.gql.messaging.types import MessageThreadType
from felicity.api.gql.permissions import IsAuthenticated
from felicity.apps.messaging.services import MessageThreadService


@strawberry.type
class MessageQuery:
    @strawberry.field(permission_classes=[IsAuthenticated])
    async def threads_for_user(
        self, info, uid: str
    ) -> Optional[List[MessageThreadType]]:
        return await MessageThreadService().get_all(recipients__uid__in=[uid])

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def thread_by_uid(self, info, uid: str) -> Optional[MessageThreadType]:
        return await MessageThreadService().get(uid=uid)
