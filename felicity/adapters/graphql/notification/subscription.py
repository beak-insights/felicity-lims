import asyncio
import logging
from typing import AsyncGenerator

import strawberry  # noqa
from domain.notification.models import ActivityStream

from adapters.graphql.notification.types import ActivityStreamType
from adapters.graphql.permissions import IsAuthenticated
from domain.shared.channel import BroadcastEvent, Subscriber, broadcast

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.type
class StreamSubscription:
    @strawberry.subscription(permission_classes=[IsAuthenticated])
    async def latest_activity(self) -> AsyncGenerator[ActivityStreamType, None]:  # noqa
        subscriber: Subscriber
        async with broadcast.subscribe(channel="activities") as subscriber:
            logger.info("Subscribed")
            event: BroadcastEvent
            try:
                async for event in subscriber:
                    logger.info(event)
                    yield event.message
            finally:
                logger.info("Unsubscribed")

    @strawberry.subscription(permission_classes=[IsAuthenticated])
    async def stream_all(self) -> AsyncGenerator[ActivityStreamType, None]:  # noqa
        streams = await ActivityStream.all()
        for stream in streams:
            yield stream
            await asyncio.sleep(1)
