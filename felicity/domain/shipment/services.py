from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AlreadyExistsError
from domain.shipment.ports.service import (
    IReferralLaboratoryService,
    IShippedSampleService,
    IShipmentService,
)
from domain.shipment.schemas import (
    ReferralLaboratory,
    ShippedSample,
    Shipment,
)


class ReferralLaboratoryService(
    BaseService[ReferralLaboratory], IReferralLaboratoryService
):
    ...


class ShippedSampleService(BaseService[ShippedSample], IShippedSampleService):
    ...


class ShipmentService(BaseService[Shipment], IShipmentService):
    async def set_flow(self, flow: bool = False):
        """Set whether the flow is incoming or outgoing"""
        self.incoming = flow
        await self.save()

    async def get_samples(self):
        return list(
            map(
                lambda ss: ss.sample, await ShippedSample.get_all(shipment_uid=self.uid)
            )
        )

    async def change_state(self, state, updated_by_uid):
        self.state = state
        self.updated_by_uid = updated_by_uid  # noqa
        return await self.save()

    async def finalise(self, finaliser):
        if self.state == conf.shipment_states.PREPERATION:
            self.state = conf.shipment_states.READY
            self.finalised_by_uid = finaliser.uid  # noqa
            saved = await self.save()
            await streamer.stream(saved, finaliser, "finalised", "shipment")
            return saved
        return self

    async def dispatch(self, dispatcher):
        if self.state == conf.shipment_states.READY:
            self.state = conf.shipment_states.AWAITING
            self.dispatched_by_uid = dispatcher.uid  # noqa
            saved = await self.save()
            await streamer.stream(saved, dispatcher, "dispatched", "shipment")
            return saved
        return self

    async def shipment_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        incoming: bool = False,
        status: str | None = None,
        sort_by: list[str] | None = None,
    ) -> ShipmentCursorPage:

        filters = [{"incoming": incoming}]

        _or_text_ = {}
        if has_value_or_is_truthy(text):
            arg_list = [
                "state__ilike",
                "shipment_id__ilike",
            ]
            for _arg in arg_list:
                _or_text_[_arg] = f"%{text}%"

            text_filters = {sa.or_: _or_text_}
            filters.append(text_filters)

        if status:
            filters.append({"state__exact": status})

        page = await models.Shipment.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[ShipmentEdge[ShipmentType]] = page.edges
        items: List[ShipmentType] = page.items
        page_info: PageInfo = page.page_info

        return ShipmentCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )

    async def create_shipment(
        self, info, payload: ShipmentInputType
    ) -> ShipmentsResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create shipments",
        )

        if not payload.courier:
            return OperationError(error="Courier Details are required")

        incoming = {
            "incoming": False,
            "comment": payload.comment,
            "courier": payload.courier,
            "laboratory_uid": payload.laboratory_uid,
            "shipment_id": None,
            "state": conf.shipment_states.EMPTY,
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }

        sh_schema = schemas.ShipmentCreate(**incoming)

        shipment_schemas = [
            sh_schema.copy(
                update={"shipment_id": (await IdSequence.get_next_number("SH"))[1]}
            )
            for i in list(range(payload.count))
        ]

        shipments = await models.Shipment.bulk_create(shipment_schemas)
        logger.info(f"Bulk create: {shipments}")

        # to get lazy loads working otherwise return WorksheetListingType(shipments)
        return ShipmentListingType(
            shipments=[(await models.Shipment.get(uid=sh.uid)) for sh in shipments]
        )

    async def update_shipment(
        self, info, uid: str, payload: ShipmentUpdateInputType
    ) -> ShipmentResponse:  # noqa

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update shipments",
        )

        if not uid:
            return OperationError(
                error="The uid for the update shipment was not provided"
            )

        # if not all(not getattr(payload, attr) for attr in dir(payload)):
        #     return OperationError(error="Either comment, courier or samples must be provided.")

        shipment: Optional[models.Shipment] = await models.Shipment.get(uid=uid)

        if not shipment:
            return OperationError(error=f"Shipment {uid} does not exist")

        shipment_data = shipment.to_dict()
        for field in shipment_data:
            if field in payload.__dict__:
                try:
                    setattr(shipment, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        shipment_in = schemas.ShipmentUpdate(**shipment.to_dict())
        shipment = await shipment.update(shipment_in)

        return ShipmentType(**shipment.marshal_simple())

    async def action_shipment(
        self, info, uid: str, action: str
    ) -> ShipmentResponse:  # noqa

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can action shipments",
        )

        if not uid or not action:
            return OperationError(
                error="The uid/action for the update shipment was not provided"
            )

        shipment: Optional[models.Shipment] = await models.Shipment.get(uid=uid)

        if not shipment:
            return OperationError(error=f"Shipment {uid} does not exist")

        if action == "dispatch":
            shipment = await shipment.change_state(
                conf.shipment_states.AWAITING, felicity_user.uid
            )

            job_schema = job_schemas.JobCreate(
                action=actions.SH_DISPATCH,
                category=categories.SHIPMENT,
                priority=priorities.MEDIUM,
                creator_uid=felicity_user.uid,
                job_id=shipment.uid,
                status=states.PENDING,
                data=None,
            )
            await job_models.Job.create(job_schema)

        else:
            shipment = await action_shipment(uid, action, felicity_user)

        return ShipmentType(**shipment.marshal_simple())

    async def shipment_manage_samples(
        self, info, uid: str, payload: ShipmentManageSamplesInput
    ) -> ShipmentResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update shipments",
        )

        if not len(payload.samples) > 0:
            return OperationError(error="Samples for assignment are required")

        if not uid:
            return OperationError(error="Shipment uid is required")

        shipment = await models.Shipment.get(uid=uid)
        if not shipment:
            return OperationError(error=f"Shipment {uid} does not exist")

        data = list(map(lambda s: s.__dict__, payload.samples))
        if payload.action == "assign":
            # Add a job
            job_schema = job_schemas.JobCreate(
                action=actions.SH_MANUAL_ASSIGN,
                category=categories.SHIPMENT,
                priority=priorities.MEDIUM,
                creator_uid=felicity_user.uid,
                job_id=shipment.uid,
                status=states.PENDING,
                data=data,
            )
            await job_models.Job.create(job_schema)
        elif payload.action == "recover":
            await shipment_recover(shipment.uid, data, felicity_user.uid)
        elif payload.action == "recall":
            await shipment_recall(shipment.uid, data, felicity_user.uid)
        else:
            pass

        shipment = await models.Shipment.get(uid=uid)
        return ShipmentType(**shipment.marshal_simple())

    async def create_referral_laboratory(
        info, payload: ReferralLaboratoryInputType
    ) -> ReferralLaboratoryResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create referral labs",
        )

        if not payload.name or not payload.code:
            return OperationError(error="Name and Code are mandatory")

        stmt = models.ReferralLaboratory.smart_query(
            filters={or_: {"name__exact": payload.name, "code__exact": payload.code}}
        )
        exists = await models.ReferralLaboratory.from_smart_query(stmt)
        if exists:
            return OperationError(
                error=f"ReferralLaboratory: {payload.name}, {payload.code} already exists"
            )

        incoming = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.ReferralLaboratoryCreate(**incoming)
        referral_laboratory: models.ReferralLaboratory = (
            await models.ReferralLaboratory.create(obj_in)
        )
        return types.ReferralLaboratoryType(**referral_laboratory.marshal_simple())

    async def update_referral_laboratory(
        info, uid: str, payload: ReferralLaboratoryInputType
    ) -> ReferralLaboratoryResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update referral labs",
        )

        referral_laboratory = await models.ReferralLaboratory.get(uid=uid)
        if not referral_laboratory:
            return OperationError(
                error=f"ReferralLaboratory with uid {uid} does not exist"
            )

        st_data = referral_laboratory.to_dict()
        for field in st_data:
            if field in payload.__dict__:
                try:
                    setattr(referral_laboratory, field, payload.__dict__[field])
                except Exception as e:
                    logger.warning(e)

        referral_laboratory_in = schemas.ReferralLaboratoryUpdate(
            **referral_laboratory.to_dict()
        )
        referral_laboratory = await referral_laboratory.update(referral_laboratory_in)
        return types.ReferralLaboratoryType(**referral_laboratory.marshal_simple())
