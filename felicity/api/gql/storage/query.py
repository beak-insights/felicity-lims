from typing import List, Optional

import strawberry  # noqa
from strawberry.permission import PermissionExtension

from felicity.api.gql.permissions import IsAuthenticated, HasPermission
from felicity.api.gql.storage import types
from felicity.apps.guard import FAction, FObject
from felicity.apps.storage.services import (
    StorageContainerService,
    StorageLocationService,
    StorageSectionService,
    StoreRoomService,
)


@strawberry.type
class StorageQuery:
    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.STORAGE)]
        )]
    )
    async def store_room_all(self, info) -> List[types.StoreRoomType]:
        return await StoreRoomService().all()

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.STORAGE)]
        )]
    )
    async def store_room_by_uid(self, info, uid: str) -> Optional[types.StoreRoomType]:
        return await StoreRoomService().get(uid=uid)

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.STORAGE)]
        )]
    )
    async def storage_locations(
            self, info, store_room_uid: str
    ) -> List[types.StorageLocationType]:
        return await StorageLocationService().get_all(store_room_uid=store_room_uid)

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.STORAGE)]
        )]
    )
    async def storage_location_by_uid(
            self, info, uid: str
    ) -> Optional[types.StorageLocationType]:
        return await StorageLocationService().get(uid=uid)

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.STORAGE)]
        )]
    )
    async def storage_sections(
            self, info, storage_location_uid: str
    ) -> List[types.StorageSectionType]:
        return await StorageLocationService().get_all(
            storage_location_uid=storage_location_uid
        )

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.STORAGE)]
        )]
    )
    async def storage_section_by_uid(
            self, info, uid: str
    ) -> Optional[types.StorageSectionType]:
        return await StorageSectionService().get(uid=uid)

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.STORAGE)]
        )]
    )
    async def storage_containers(
            self, info, storage_section_uid: str
    ) -> List[types.StorageContainerType]:
        return await StorageContainerService().get_all(
            storage_section_uid=storage_section_uid
        )

    @strawberry.field(
        extensions=[PermissionExtension(
            permissions=[IsAuthenticated(), HasPermission(FAction.READ, FObject.STORAGE)]
        )]
    )
    async def storage_container_by_uid(
            self, info, uid: str
    ) -> Optional[types.StorageContainerType]:
        return await StorageContainerService().get(uid=uid)
