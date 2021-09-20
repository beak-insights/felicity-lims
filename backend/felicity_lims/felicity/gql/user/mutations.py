from datetime import timedelta
import logging 
import time

import graphene
from graphql import GraphQLError
from sqlalchemy.orm import Session

from fastapi.encoders import jsonable_encoder

from felicity.core.config import settings
from felicity.core import security
from felicity.utils.email.email import ( 
    send_reset_password_email,
    send_new_account_email
)
from felicity.core.security import ( 
    generate_password_reset_token,
    verify_password_reset_token,
)
from felicity.gql import deps
from felicity.apps.user import models as user_models
from felicity.apps.user import schemas as user_schemas
from felicity.gql.user.types import UserType, PermissionType, GroupType
from felicity.gql.user.types import UserAuthType
from felicity.gql import AuthorizedMutation, anonymous_return, AuthenticationRequired

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def simple_task(message: str):
    time.sleep(4)
    logger.info(f"finished task: {message}")
    return message


class CreateUserxx(graphene.Mutation):
    class Input:
        firstname = graphene.String(required=True)
        lastname = graphene.String(required=True)
        email = graphene.String(required=True)
        open_reg = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    user = graphene.Field(lambda: UserType)

    @anonymous_return(AuthenticationRequired.default_message)
    def mutate(root, info, **kwargs):
        return CreateUserxx(user=None, ok=True)


class CreateUser(graphene.Mutation):
    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)
        open_reg = graphene.Boolean(required=False)

    ok = graphene.Boolean()
    user = graphene.Field(lambda: UserType)

    @staticmethod
    def mutate(root, info, first_name, last_name, open_reg=False, **kwargs):
        # active_super_user = deps.get_current_active_superuser(token=token)
        if open_reg and not settings.USERS_OPEN_REGISTRATION:
            GraphQLError("Open user registration is forbidden on this server")
        email = kwargs.get("email", None)
        if email:
            user_e = user_models.User.get_by_email(email=email)
            if user_e:
                raise GraphQLError("A user with this email already exists in the system")
            
        user_in = {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "is_superuser": False,
        }
        user_in = user_schemas.UserCreate(**user_in)
        user = user_models.User.create(user_in=user_in)
        if user_in.email:
            logger.info("Handle email sending in a standalone servive")
        ok = True
        return CreateUser(user=user, ok=ok)


class UpdateUser(graphene.Mutation):
    class Arguments:
        user_uid = graphene.Int(required=True)
        first_name = graphene.String(required=False)
        last_name = graphene.String(required=False)
        email = graphene.String(required=False)

    ok = graphene.Boolean()
    user = graphene.Field(lambda: UserType)

    @staticmethod
    def mutate(root, info, user_uid, **kwargs):
        """
        fetch update instance using uid from frontend
        """
        # current_super_user = deps.get_current_active_superuser(token=token)
        user = user_models.User.get_one(uid=user_uid)
        if not user:
            raise GraphQLError("Error, failed to fetch user for updating")

        user_data = jsonable_encoder(user)
        for field in user_data:
            if field in kwargs:
                try:
                    setattr(user, field, kwargs[field])
                except Exception as e:
                    # raise GraphQLError(f"{e}")
                    pass

        user_in = user_schemas.UserUpdate(**user.to_dict())
        user.update(user_in)

        ok = True
        return AuthenticateUser(ok=ok, user=user)

    
class CreateUserAuth(graphene.Mutation):
    class Arguments:
        user_uid = graphene.Int(required=True)
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        passwordc = graphene.String(required=True)

    ok = graphene.Boolean()
    user_auth = graphene.Field(lambda: UserAuthType)

    @staticmethod
    def mutate(root, info, user_uid, username, password, passwordc, **kwargs):
        # active_super_user = deps.get_current_active_superuser(token=token)
        auth = user_models.UserAuth.get_by_username(username=username)        
        user = user_models.User.get(uid=user_uid)
        
        # 1. Link if not already Linked
        if auth and user:
            if user.auth:
                if user.auth.uid == auth.uid:
                    raise GraphQLError(f"The two accounts are already linked")
                else:
                    raise GraphQLError(f"User is already linked to different auth details")
            elif getattr(auth, user.user_type): # auth.lcuser/auth.ccuser/auth.dcuser
                raise GraphQLError(f"Auth details are already linked to {user.full_name}")
            else:
                # _update = {**user.to_dict(), **{ 'auth_uid': auth.uid }}
                # user.update(_update)     
                user.link_auth(auth_uid=auth.uid)       
        else:
            if not user: # if there is no user there is nothing to link
                raise GraphQLError("An error occured: Try Again") # Should never happen :)
                
            if password != passwordc:
                raise GraphQLError("Password do not match, try again")
            
            auth_in = {
                "user_name": username,
                "password": password,
                "login_retry": 0,
                "is_blocked": False
            }
            auth_schema = user_schemas.AuthCreate(**auth_in)            
            auth = user_models.UserAuth.create(auth_in=auth_schema)
            logger.info(f"User: {user}, Auth: {auth}")
            user.link_auth(auth_uid=auth.uid)
            user.propagate_user_type()
        ok = True
        return CreateUserAuth(user_auth=auth, ok=ok)
    
    
class UpdateUserAuth(graphene.Mutation):
    class Arguments:
        user_uid = graphene.Int(required=True)
        username = graphene.String(required=False)
        password = graphene.String(required=False)
        passwordc = graphene.String(required=False)

    ok = graphene.Boolean()
    user = graphene.Field(lambda: UserType)

    @staticmethod
    def mutate(root, info, user_uid, **kwargs):
        """
        fetch update instance using uid from frontend
        """
        if not 'username' in kwargs and not 'password' in kwargs:
            raise GraphQLError("Provide username and password to update")
            
        # current_super_user = deps.get_current_active_superuser(token=token)
        user = user_models.User.get_one(uid=user_uid)
        if not user:
            raise GraphQLError("Error, failed to fetch user for updating")

        if not user.auth:
            raise GraphQLError(f"User {user.full_name} has not authentication account")
        
        auth = user.auth
        auth_in = user_schemas.AuthUpdate(**auth.to_dict())
        
        if 'username' in kwargs:
            username = kwargs.get('username', None)
            if username:
                username_taken = user_models.UserAuth.get_by_username(username=username)
                if username_taken:
                    raise GraphQLError(f"The username {username} is already taken")
            else:
                del kwargs['username'] # username cannot be empty
                # raise GraphQLError("Username cannot be empty")  
            auth_in.user_name = username             

        if 'password' in kwargs:
            password = kwargs.get('password', None)
            passwordc = kwargs.get('passwordc', None)
            if password == None or password == "":
                raise GraphQLError(f"Cannot update an empty password")

            if password != passwordc:
                raise GraphQLError(f"provided passwords do not match")

            auth_in.password = password  
        
        auth.update(auth_in)
        ok = True
        return UpdateUserAuth(ok=ok, user=user)


class AuthenticateUser(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    ok = graphene.Boolean()
    token = graphene.String()
    token_type = graphene.String()
    user = graphene.Field(lambda: UserType)

    @staticmethod
    async def mutate(root, info, username, password, db: Session = None, ):
        auth = await user_models.UserAuth.get_by_username(username=username)
        if not auth:
            raise GraphQLError("Incorrect username")

        has_access = await auth.has_access(password)
        if not has_access:
            raise GraphQLError("Failed to log you in")  # Weird it should not reach here

        access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        # _user = getattr(auth, auth.user_type)
        _user = await user_models.User.get(auth_uid=auth.uid)
        access_token = security.create_access_token(_user.uid, expires_delta=access_token_expires),
        token_type = "bearer"
        ok = True
        return AuthenticateUser(ok=ok, token=access_token[0], token_type=token_type, user=_user)


class UnlinkUserAuth(graphene.Mutation):
    class Arguments:
        user_uid = graphene.Int(required=True)

    ok = graphene.Boolean()
    user = graphene.Field(lambda: UserType)

    @staticmethod
    def mutate(root, info, user_uid, **kwargs):
        # active_super_user = deps.get_current_active_superuser(token=token)
        user = user_models.User.get(uid=user_uid)
        if not user:
            raise GraphQLError("User not found")
        if not user.auth:
            raise GraphQLError(f"User {user.full_name} is not linked to auth access")
        user.unlink_auth()
        ok = True
        return UnlinkUserAuth(user=user, ok=ok)


class RecoverPassword(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)

    ok = graphene.Boolean()
    msg = graphene.String()

    @staticmethod
    def mutate(root, info, username):  
        auth = user_models.UserAuth.get_by_username(username=username)
        if not auth:
            raise GraphQLError("Error, failed to fetch user for password reset")
        if not auth.user:
            raise GraphQLError("You cannot rest password for an un-linked account")
        
        password_reset_token = generate_password_reset_token(email=auth.user.email)
        # send_reset_password_email(
        #     email_to=user.email, email=user.email, token=password_reset_token
        # )
        # TODO: MAYBE ADD SECURITY QUESTIONS TO RECOVER PASSWORD or give them a passphrase to remember
        # TODO: send them a new passwod to their registered phone
        # TODO: SEND USER A DEFAULT PASSWORD TO LOGIN WITH SO THEY CAN CHANGE LATER
        msg = "Password recovery email sent"
        ok = True
        return RecoverPassword(ok=ok, msg=msg)


class UpdateGroupPermissions(graphene.Mutation):
    class Arguments:
        group_uid = graphene.String(required=True)
        permission_uid = graphene.String(required=True)

    ok = graphene.Boolean()
    group = graphene.Field(lambda: GroupType)
    permission = graphene.Field(lambda: PermissionType)

    @staticmethod
    def mutate(root, info, group_uid, permission_uid):
        if not group_uid or not permission_uid:
            raise GraphQLError("Group and Permission are required.")

        permission = user_models.Permission.get(uid=permission_uid)
        if not permission:
            raise GraphQLError(f"permission with uid {permission_uid} not found")

        group = user_models.Group.get(uid=group_uid)
        if not group:
            raise GraphQLError(f"group with uid {group_uid} not found")

        print(dir(group.permissions))

        if permission in group.permissions:
            group.permissions.remove(permission)
        else:
            group.permissions.append(permission)

        ok = True
        return UpdateGroupPermissions(ok=ok, group=group, permission=permission)
    
# Reset password is an api_endpoint since it will be a link


class UserMutations(graphene.ObjectType):
    # User Specific
    create_user = CreateUser.Field()
    create_userxx = CreateUserxx.Field()
    update_user = UpdateUser.Field()
    
    # Authentication Specific
    create_user_auth = CreateUserAuth.Field()
    update_user_auth = UpdateUserAuth.Field()
    ulink_user_auth = UnlinkUserAuth.Field()
    authenticate_user = AuthenticateUser.Field()
    recover_password = RecoverPassword.Field()

    # groups and permissions
    updateGroupsAndPermissions = UpdateGroupPermissions.Field()
