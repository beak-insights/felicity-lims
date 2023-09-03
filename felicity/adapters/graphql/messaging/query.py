from typing import List, Optional

import strawberry  # noqa

from adapters.graphql.messaging.types import MessageThreadType
from adapters.graphql.permissions import IsAuthenticated
from domain.messaging import models


@strawberry.type
class MessageQuery:
    @strawberry.field(permission_classes=[IsAuthenticated])
    async def threads_for_user(
            self, info, uid: str
    ) -> Optional[List[MessageThreadType]]:
        return await models.MessageThread.get_all(recipients__uid__in=[uid])

    @strawberry.field(permission_classes=[IsAuthenticated])
    async def thread_by_uid(self, info, uid: str) -> Optional[MessageThreadType]:
        return await models.MessageThread.get(uid=uid)
