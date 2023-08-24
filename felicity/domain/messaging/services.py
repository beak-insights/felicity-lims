
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AleadyExistsError
from domain.messaging.ports.service import (
    IMessageThreadService,
    IMessageService
)
from domain.messaging.schemas import (
    MessageThread,
    Message
)
from domain.user.schemas import User


    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def send_message(
        self, info, recipients: List[str], body: str
    ) -> MessageResponse:

        inspector = inspect.getargvalues(inspect.currentframe())
        passed_args = get_passed_args(inspector)

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated, felicity_user, "Only Authenticated user can send messages"
        )

        if not recipients or not body:
            return OperationError(error="Message body and recipients are mandatory")

        _recipients = [felicity_user]
        for _rec in recipients:
            recipient = User.get(uid=_rec)
            if recipient and recipient not in _recipients:
                _recipients.append(felicity_user)

        thread_in = schemas.MessageThreadCreate(broadcast=len(recipients) > 1)
        thread_in.recipients = _recipients
        thread: models.MessageThread = await models.MessageThread.create(thread_in)

        incoming = {
            "thread_uid": thread.uid,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }

        for k, v in passed_args.items():
            incoming[k] = v

        exists = await models.Message.get(body=body)
        if exists:
            incoming["body"] = ">> " + incoming["body"]

        incoming["recipients"] = []
        for user_uid in recipients:
            _rec = User.get(uid=user_uid)
            if _rec:
                incoming["recipients"].append(_rec)

        obj_in = schemas.MessageCreate(**incoming)
        message: models.Message = await models.Message.create(obj_in)
        return MessageType(**message.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def reply_message(
        self, info, thread_uid: str, body: str
    ) -> MessageResponse:

        inspector = inspect.getargvalues(inspect.currentframe())
        passed_args = get_passed_args(inspector)

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can reply to messages",
        )

        thread: models.MessageThread = await models.MessageThread.get(uid=thread_uid)
        if not thread:
            return OperationError(
                error=f"Message Thread with uid {thread_uid} not fount"
            )

        if not body:
            return OperationError(error="Message cannot be blank")

        incoming = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in passed_args.items():
            incoming[k] = v

        last_message = await thread.get_last_message()

        if last_message:
            # not deleted
            incoming["parent_id"] = last_message.uid

        obj_in = schemas.MessageCreate(**incoming)
        message: models.Message = await models.Message.create(obj_in)
        return MessageType(**message.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def view_message(self, info, uid: str) -> MessageResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated, felicity_user, "Only Authenticated user can view messages"
        )

        message: models.Message = await models.Message.get(uid=uid)
        if not message:
            return OperationError(error=f"message with uid {uid} does not exist")

        message = await message.add_viewer(felicity_user)
        return MessageType(**message.marshal_simple())

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def delete_message(self, info, uid: str) -> DeleteResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can delete messages",
        )

        message: models.Message = await models.Message.get(uid=uid)
        if not message:
            return OperationError(error=f"Message with uid {uid} does not exist")

        uid = await message.delete_for_user(felicity_user)
        return DeletedItem(uid=uid)

    @strawberry.mutation(permission_classes=[IsAuthenticated])
    async def delete_thread(self, info, uid: str) -> DeleteResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can delete threads",
        )

        thread: models.Message = await models.MessageThread.get(uid=uid)
        if not thread:
            return OperationError(error=f"Message Thread with uid {uid} does not exist")

        uid = await thread.delete_for_user(felicity_user)
        return DeletedItem(uid=uid)



class MessageThreadService(BaseService[MessageThread], IMessageThreadService):
    async def get_last_message(self):
        if not self.messages:
            return None
        return sorted(self.messages, key=lambda x: x.created_at)[0]

    async def can_reply(self) -> bool:
        return self.broadcast is True

    async def add_recipient(self, user: User) -> MessageThread:
        if user not in self.recipients:
            self.recipients.append(user)
            return await self.save()
        return self

    async def add_deletion(self, user: User) -> MessageThread:
        if user not in self.deleted_by:
            self.deleted_by.append(user)
            return await self.save()
        return self

    async def delete_for_user(self, user: User) -> MessageThread:
        uid = self.uid
        # first delete all messages for user
        for message in self.messages:
            if user not in message.deleted_by:
                await message.add_deletion(user)
        # delete thread for user
        await self.add_deletion(user)

        # if all thread recipients have deleted the thread
        if self.all_have_deleted():
            # permanently delete all messages in thread
            for message in self.messages:
                await message.delete()
            # then finally delete the thread permanently
            self.delete()

        return uid

    async def all_have_deleted(self) -> bool:
        deletions = 0
        for recipient in self.recipients:
            if recipient in self.deleted_by:
                deletions += 1
        return len(self.recipients) == deletions
    


class MessageService(BaseService[Message], IMessageService):
    async def add_deletion(self, user: User) -> Message:
        if user not in self.deleted_by:
            self.deleted_by.append(user)
            return await self.save()
        return self

    async def delete_for_user(self, user: User) -> int:
        uid = self.uid
        await self.add_deletion(user)

        # if all thread recipients have deleted the message
        if self.all_have_deleted():
            # delete the message permanently
            await self.delete()
        return uid

    async def all_have_deleted(self) -> bool:
        deletions = 0
        for recipient in self.thread.recipients:
            if recipient in self.deleted_by:
                deletions += 1
        return len(self.thread.recipients) == deletions

    async def was_read(self) -> bool:
        return len(self.viewers) > 0