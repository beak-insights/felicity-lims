from datetime import timedelta
import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.client import schemas, models
from felicity.gql.client.types import ClientType

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
        consent_email = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        consent_sms = graphene.String(required=False)
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
        consent_email = graphene.String(required=False)
        mobile_phone = graphene.String(required=False)
        business_phone = graphene.String(required=False)
        consent_sms = graphene.String(required=False)
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
  

class ClientMutations(graphene.ObjectType):
    # Client
    create_client = CreateClient.Field()
    update_client = UpdateClient.Field()
    