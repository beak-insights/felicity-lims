
from domain.shared.services import BaseService
from domain.noticeboard.ports.service import INoticeService
from domain.noticeboard.schemas import Notice
from domain.user.schemas import User, Group
from domain.setup.schemas import Department

    async def notice_filter(
        self,
        info,
        group_uid: str | None,
        department_uid: str | None,
    ) -> List[NoticeType]:
        filters = {}

        if group_uid:
            filters["groups__uid__in"] = [group_uid]

        if department_uid:
            filters["departments__uid__in"] = [department_uid]

        notice_stmt = models.Notice.smart_query(
            filters=filters, sort_attrs=["-created_at"]
        )

        notices = (await models.Notice.session.execute(notice_stmt)).scalars().all()
        return list(notices)


    
    async def create_notice(self, info, payload: NoticeInputType) -> NoticeResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create notices",
        )

        if not payload.title or not payload.body or not payload.expiry:
            return OperationError(
                error="Some fields have missing required data",
                suggestion="Make sure that the fields: [title, body, expiry] all have values",
            )

        exists = await models.Notice.get(title=payload.title)
        if exists:
            return OperationError(
                error="Notice title Duplication not Allowed",
                suggestion=f"Change the notice title",
            )

        incoming = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        if payload.groups:
            incoming["groups"] = []
            for g_uid in payload.groups:
                _gr = models.Group.get(uid=g_uid)
                if _gr:
                    incoming["groups"].append(_gr)

        if payload.departments:
            incoming["departments"] = []
            for dept_uid in payload.departments:
                _gr = models.Department.get(uid=dept_uid)
                if _gr:
                    incoming["departments"].append(_gr)

        obj_in = schemas.NoticeCreate(**incoming)
        notice: models.Notice = await models.Notice.create(obj_in)
        return NoticeType(**notice.marshal_simple())

    
    async def update_notice(
        self, info, uid: str, payload: NoticeInputType
    ) -> NoticeResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update notices",
        )

        notice = await models.Notice.get(uid=uid)
        if not notice:
            raise OperationError(
                error=f"notice with uid {uid} does not exist",
                suggestion=f"Refresh page",
            )

        notice_data = notice.to_dict()
        for field in notice_data:
            if field in payload.__dict__:
                try:
                    setattr(notice, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        if payload.groups:
            _groups = []
            for g_uid in payload.groups:
                _gr = models.Group.get(uid=g_uid)
                if _gr:
                    _groups.append(_gr)
            setattr(notice, "groups", _groups)

        if payload.departments:
            _departments = []
            for dept_uid in payload.departments:
                _gr = models.Department.get(uid=dept_uid)
                if _gr:
                    _departments.append(_gr)
            setattr(notice, "departments", _departments)

        setattr(notice, "update_by_uid", felicity_user.uid)

        notice_in = schemas.NoticeUpdate(**notice.to_dict())
        notice = await notice.update(notice_in)
        return NoticeType(**notice.marshal_simple())

    
    async def view_notice(
        self, info, uid: str, viewer: str
    ) -> NoticeType:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated, felicity_user, "Only Authenticated user can view notices"
        )

        notice: models.Notice = await models.Notice.get(uid=uid)
        if not notice:
            raise Exception(f"Notice with uid {uid} does not exist")

        _viewer = await models.User.get(uid=viewer)
        if not _viewer:
            raise Exception(f"User with uid {viewer} does not exist")

        notice = await notice.add_viewer(_viewer)
        return NoticeType(**notice.marshal_simple())

    
    async def delete_notice(self, info, uid: str) -> DeleteResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated, felicity_user, "Only Authenticated user can view notices"
        )

        notice: models.Notice = await models.Notice.get(uid=uid)
        if not notice:
            raise Exception(f"Notice with uid {uid} does not exist")

        await notice.delete()
        return DeletedItem(uid=uid)



class NoticeService(BaseService[Notice], INoticeService):
    async def reset_views(self) -> Notice:
        self.viewers.clear()
        return await self.save()

    async def remove_viewer(self, user: User) -> Notice:
        self.viewers.remove(user)
        return await self.save()

    async def add_viewer(self, user: User) -> Notice:
        if user not in self.viewers:
            self.viewers.append(user)
            return await self.save()
        return self

    async def reset_departments(self) -> Notice:
        self.departments.clear()
        return await self.save()

    async def remove_department(self, department: Department) -> Notice:
        self.departments.remove(department)
        return await self.save()

    async def add_department(self, department: Department) -> Notice:
        if department not in self.departments:
            self.departments.append(department)
            return await self.save()
        return self

    async def reset_groups(self) -> Notice:
        self.groups.clear()
        return await self.save()

    async def remove_group(self, group: Group) -> Notice:
        self.groups.remove(group)
        return await self.save()

    async def add_group(self, group: Group) -> Notice:
        if group not in self.groups:
            self.groups.append(group)
            return await self.save()
        return self