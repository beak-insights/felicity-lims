
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AlreadyExistsError
from domain.client.ports.service import IClientContactService, IClientService
from domain.client.schemas import Client, ClientContact

    
    async def client_all(
        self,
        info: Info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> ClientCursorPage:
        ss, dd = await auth_from_info(info)
        
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = [
                "name__ilike",
                "code__ilike",
                "email__ilike",
                "email_cc__ilike",
                "province___name__ilike",
                "district___name__ilike",
                "phone_mobile__ilike",
                "phone_business__ilike",
            ]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.Client.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[ClientEdge[ClientType]] = page.edges
        items: List[ClientType] = page.items
        page_info: PageInfo = page.page_info

        return ClientCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    
    async def client_search(self, info, query_string: str) -> List[ClientType]:
        filters = ["name__ilike", "code__ilike"]
        combined = set()
        for _filter in filters:
            arg = dict()
            arg[_filter] = f"%{query_string}%"
            query = await models.Client.get_all(**arg)
            for item in query:
                combined.add(item)
        return list(combined)
  
  

    
    async def create_client(
        self, info: Info, payload: ClientInputType
    ) -> ClientResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        success, auth_err = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create clients",
        )
        if not success:
            return auth_err

        if not payload.code or not payload.name:
            return OperationError(
                error="Please Provide a name and a unique client code"
            )

        exists = await models.Client.get(code=payload.code)
        if exists:
            return OperationError(
                error=f"Client code {payload.code} already belong to client {exists.name}"
            )

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.ClientCreate(**incoming)
        client: models.Client = await models.Client.create(obj_in)
        return ClientType(**client.marshal_simple())

    
    async def update_client(
        self, info, uid: str, payload: ClientInputType
    ) -> ClientResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update clients",
        )

        if not uid:
            return OperationError(error="No uid provided to identify update obj")

        client = await models.Client.get(uid=uid)
        if not client:
            return OperationError(
                error=f"Client with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = client.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(client, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")
        obj_in = schemas.ClientUpdate(**client.to_dict())
        client = await client.update(obj_in)
        return ClientType(**client.marshal_simple())

    
    async def create_client_contact(
        self, info, payload: ClientContactInputType
    ) -> ClientContactResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create client contacts",
        )

        if not payload.client_uid or not payload.first_name:
            return OperationError(error="Please Provide a first_name and a client uid")

        client_exists = await models.Client.get(uid=payload.client_uid)
        if not client_exists:
            return OperationError(
                error=f"Client with uid {payload.client_uid} does not exist"
            )

        contact_exists = await models.ClientContact.get_all(
            client_uid=payload.client_uid, first_name=payload.first_name
        )  # noqa
        logger.warning(contact_exists)
        if contact_exists:
            return OperationError(
                error=f"Client Contact with name {payload.first_name} already exists"
            )

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.ClientContactCreate(**incoming)
        client_contact: models.ClientContact = await models.ClientContact.create(obj_in)
        return ClientContactType(**client_contact.marshal_simple(exclude=["is_superuser", "auth_uid"]))

    
    async def update_client_contact(
        self, info, uid: str, payload: ClientContactInputType
    ) -> ClientContactResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update client contacts",
        )

        if not uid:
            return OperationError(error="No uid provided to identify update obj")

        client_contact = await models.ClientContact.get(uid=uid)
        if not client_contact:
            return OperationError(
                error=f"Client Contact with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = client_contact.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(client_contact, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")
        obj_in = schemas.ClientContactUpdate(**client_contact.to_dict())
        client_contact = await client_contact.update(obj_in)
        return ClientContactType(**client_contact.marshal_simple(exclude=["is_superuser", "auth_uid"]))

    
    async def delete_client_contact(self, info, uid: str) -> DeleteContactResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can delete/deactivate client contacts",
        )

        if not uid:
            return OperationError(error="No uid provided to identify deletion obj")

        client_contact = await models.ClientContact.get(uid=uid)
        if not client_contact:
            return OperationError(
                error=f"Client Contact with uid {uid} not found. Cannot delete obj ..."
            )

        try:
            setattr(client_contact, "is_active", False)
        except Exception as e:
            logger.warning(f"failed to set attribute is_active: {e}")

        obj_in = schemas.ClientContactUpdate(**client_contact.to_dict())
        client_contact = await client_contact.update(obj_in)
        return DeletedItem(uid=client_contact.uid)
  
    
    
class ClientService(BaseService[Client], IClientService):
    async def create(cls, obj_in: schemas.ClientCreate) -> schemas.Client:
        exist = await cls.get(code=obj_in.code)
        if exist:
            raise Exception(f"Client with code {obj_in.code} already Exists")

        data = cls._import(obj_in)
        return await super().create(**data)


class ClientContactService(BaseService[ClientContact], IClientContactService):
    async def propagate_user_type(self):
        """sets the user_type field in auth"""
        await self.auth.acquire_user_type(conf.CLIENT_CONTACT)

    async def unlink_auth(self):
        auth = self.auth
        _update = {**self.to_dict(), **{"auth_uid": None, "auth": None}}
        await self.update(_update)
        if not self.auth:
            auth.delete()

    async def link_auth(self, auth_uid):
        _update = {**self.to_dict(), **{"auth_uid": auth_uid}}
        await self.update(_update)
