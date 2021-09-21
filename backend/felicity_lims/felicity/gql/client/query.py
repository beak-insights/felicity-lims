from typing import List, Optional
import strawberry
from felicity.apps.client import models
from felicity.gql.client.types import ClientType, ClientContactType


@strawberry.type
class ClientQuery:
    @strawberry.field
    async def client_all(self, info) -> List[ClientType]:
        return await models.Client.all()

    @strawberry.field
    async def client_by_uid(self, info, uid: int) -> ClientType:
        return await models.Client.get(uid=uid)

    @strawberry.field
    async def client_by_code(self, info, code: str) -> ClientType:
        return await models.Client.get(code=code)

    @strawberry.field
    async def clients_by_name(self, info, name: str) -> List[ClientType]:
        clients = await models.Client.where(name__contains=name).all()
        # clients = await models.Client.where(name__like=f"%{name}%").all()
        return clients

    @strawberry.field
    async def client_search(self, info, query_string: str) -> List[ClientType]:
        filters = ['name__ilike', 'code__ilike']
        combined = set()
        for _filter in filters:
            arg = dict()
            arg[_filter] = f"%{query_string}%"
            query = await models.Client.where(**arg).all()
            for item in query:
                combined.add(item)
        return list(combined)

    @strawberry.field
    async def client_contact_all(self, info) -> List[ClientContactType]:
        return await models.ClientContact.all()

    @strawberry.field
    async def client_contact_uid(self, info, uid: int) -> ClientContactType:
        return await models.ClientContact.get(uid=uid)

    @strawberry.field
    async def client_contact_by_client_uid(self, info, client_uid: int) -> List[ClientContactType]:
        return await models.ClientContact.where(client_uid=client_uid).all()
