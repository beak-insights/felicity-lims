import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.client import schemas, models
from felicity.gql.client.types import ClientType, ClientContactType

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# 
# Client Mutations
# 
class CreateClient(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        code = graphene.String(required=True)
        district_uid = graphene.Int(required=False)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        consent_email = graphene.Boolean(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        consent_sms = graphene.Boolean(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    client = graphene.Field(lambda: ClientType)

    @staticmethod
    def mutate(root, info, name, code, **kwargs):
        if not code or not name:
            raise GraphQLError("Please Provide a name and a unique client code")
        exists = models.Client.get(code=code)
        if exists:
            raise GraphQLError(f"Client code {code} already belong to client {exists.name}")
        
        incoming = {
            "name": name,
            "code": code,
            "active": True
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.ClientCreate(**incoming)  
        client = models.Client.create(obj_in)
        ok = True
        return CreateClient(client=client, ok=ok)

                
class UpdateClient(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        name = graphene.String(required=False)
        code = graphene.String(required=False)
        district_uid = graphene.Int(required=False)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        consent_email = graphene.Boolean(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        consent_sms = graphene.Boolean(required=False)
        active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    client = graphene.Field(lambda: ClientType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        if not uid:
            raise GraphQLError("No uid provided to identify update obj")
        
        client = models.Client.get(uid=uid)
        if not client:
            raise GraphQLError(f"Client with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(client)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(client, field, kwargs[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")
        obj_in = schemas.ClientUpdate(**client.to_dict())    
        client = client.update(obj_in)
        ok = True
        return UpdateClient(ok=ok, client=client)


#
# Client Contact Mutations
#

class CreateClientContact(graphene.Mutation):
    class Arguments:
        client_uid = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=False)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        consent_sms = graphene.String(required=False)
        is_active = graphene.Boolean(required=True)

    ok = graphene.Boolean()
    client_contact = graphene.Field(lambda: ClientContactType)

    @staticmethod
    def mutate(root, info, first_name, client_uid, **kwargs):
        if not client_uid or not first_name:
            raise GraphQLError("Please Provide a first_name and a client uid")
        client_exists = models.Client.get(uid=client_uid)
        if not client_exists:
            raise GraphQLError(f"Client with uid {client_uid} does not exist")
        contact_exists = models.ClientContact.where(client_uid=client_uid, first_name=first_name).all()
        if contact_exists:
            raise GraphQLError(f"Client Contact with name {first_name} already exists")

        incoming = {
            "first_name": first_name,
            "client_uid": client_uid,
            "is_active": True,
            "is_superuser": False,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.ClientContactCreate(**incoming)
        client_contact = models.ClientContact.create(obj_in)
        ok = True
        return CreateClientContact(client_contact=client_contact, ok=ok)


class UpdateClientContact(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        first_name = graphene.String(required=False)
        last_name = graphene.String(required=False)
        email = graphene.String(required=False)
        email_cc = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        consent_sms = graphene.String(required=False)
        is_active = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    client_contact = graphene.Field(lambda: ClientContactType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        client_contact = models.ClientContact.get(uid=uid)
        if not client_contact:
            raise GraphQLError(f"Client Contact with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(client_contact)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(client_contact, field, kwargs[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")
        obj_in = schemas.ClientContactUpdate(**client_contact.to_dict())
        client_contact = client_contact.update(obj_in)
        ok = True
        return UpdateClientContact(ok=ok, client_contact=client_contact)

class ClientMutations(graphene.ObjectType):
    # Client
    create_client = CreateClient.Field()
    update_client = UpdateClient.Field()
    # Client Contact
    create_client_contact = CreateClientContact.Field()
    update_client_contact = UpdateClientContact.Field()
    