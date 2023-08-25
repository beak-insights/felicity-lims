
from domain.shared.services import BaseService
from domain.exceptions import NoFoundError, AlreadyExistsError
from domain.inventory.ports.service import (
    IStockItemService,
    IStockCategoryService,
    IHazardService,
    IStockUnitService,
    IStockPackagingService,
    IStockProductService,
    IStockOrderProductService,
    IStockTransactionService,
    IStockAdjustmentService,
    IStockOrderService,
)
from domain.inventory.schemas import (
    StockItem,
    StockCategory,
    Hazard,
    StockUnit,
    StockPackaging,
    StockProduct,
    StockOrderProduct,
    StockTransaction,
    StockAdjustment,
    StockOrder, StockOrderCreate
)

    async def stock_item_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockItemCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = ["name__ilike"]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.StockItem.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockItemEdge[types.StockItemType]] = page.edges
        items: List[types.StockItemType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockItemCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )


    async def stock_product_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockProductCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = ["name__ilike"]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.StockProduct.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockProductEdge[types.StockProductType]] = page.edges
        items: List[types.StockProductType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockProductCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )



    async def stock_order_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        status: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockOrderCursorPage:
        filters = []

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = ["order_number__ilike"]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters.append({sa.or_: _or_})
        
        if status:
            filters.append({"status__exact": status})


        page = await models.StockOrder.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockOrderEdge[types.StockOrderType]] = page.edges
        items: List[types.StockOrderType] = page.items
        page_info: PageInfo = page.page_info
 
        return types.StockOrderCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )


    async def stock_transaction_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockTransactionCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = ["name__ilike", "product___name__ilike"]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.StockTransaction.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockTransactionEdge[types.StockTransactionType]] = page.edges
        items: List[types.StockTransactionType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockTransactionCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )



    async def stock_adjustment_all(
        self,
        info,
        page_size: int | None = None,
        after_cursor: str | None = None,
        before_cursor: str | None = None,
        text: str | None = None,
        sort_by: list[str] | None = None,
    ) -> types.StockAdjustmentCursorPage:
        filters = {}

        _or_ = dict()
        if has_value_or_is_truthy(text):
            arg_list = [
                "name__ilike",
                "adjustment_type__ilike",
                "remarks__ilike",
                "product___name__ilike",
            ]
            for _arg in arg_list:
                _or_[_arg] = f"%{text}%"

            filters = {sa.or_: _or_}

        page = await models.StockAdjustment.paginate_with_cursors(
            page_size=page_size,
            after_cursor=after_cursor,
            before_cursor=before_cursor,
            filters=filters,
            sort_by=sort_by,
        )

        total_count: int = page.total_count
        edges: List[types.StockAdjustmentEdge[types.StockAdjustmentType]] = page.edges
        items: List[types.StockAdjustmentType] = page.items
        page_info: PageInfo = page.page_info

        return types.StockAdjustmentCursorPage(
            total_count=total_count, edges=edges, items=items, page_info=page_info
        )


    
    async def create_stock_item(
        self, info, payload: StockItemInputType
    ) -> StockItemResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock item",
        )
        if not auth_success:
            return auth_error

        exists = await models.StockItem.get(name=payload.name)
        if exists:
            return OperationError(error="StockItem with this name already exists")

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.StockItemCreate(**incoming)
        stock_item: models.StockItem = await models.StockItem.create(obj_in)
        return types.StockItemType(**stock_item.marshal_simple())

    
    async def update_stock_item(
        self, info, uid: str, payload: StockItemInputType
    ) -> StockItemResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update stock item",
        )

        if not uid:
            return OperationError(error="No uid provided to identity update obj.")

        stock_item: models.StockItem = await models.StockItem.get(uid=uid)
        if not stock_item:
            return OperationError(
                error=f"StockItem with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = stock_item.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(stock_item, field, payload.__dict__[field])
                except Exception as e:  # noqa
                    pass

        setattr(stock_item, "updated_by_uid", felicity_user.uid)

        obj_in = schemas.StockItemUpdate(**stock_item.to_dict())
        stock_item = await stock_item.update(obj_in)
        return types.StockItemType(**stock_item.marshal_simple())

    
    async def create_stock_category(
        self, info, payload: StockCategoryInputType
    ) -> StockCategoryResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock categories",
        )
        if not auth_success:
            return auth_error

        exists = await models.StockCategory.get(name=payload.name)
        if exists:
            return OperationError(error="StockCategory with this name already exists")

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.StockCategoryCreate(**incoming)
        stock_category: models.StockCategory = await models.StockCategory.create(obj_in)
        return types.StockCategoryType(**stock_category.marshal_simple())

    
    async def update_stock_category(
        self, info, uid: str, payload: StockCategoryInputType
    ) -> StockCategoryResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update stock category",
        )

        if not uid:
            return OperationError(error="No uid provided to identity update stock category")

        stock_category: models.StockCategory = await models.StockCategory.get(uid=uid)
        if not stock_category:
            return OperationError(
                error=f"StockCategory with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = stock_category.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(stock_category, field, payload.__dict__[field])
                except Exception as e:  # noqa
                    pass

        setattr(stock_category, "updated_by_uid", felicity_user.uid)

        obj_in = schemas.StockCategoryUpdate(**stock_category.to_dict())
        stock_category = await stock_category.update(obj_in)
        return types.StockCategoryType(**stock_category.marshal_simple())

    
    async def create_hazard(self, info, payload: HazardInputType) -> HazardResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create hazard",
        )
        if not auth_success:
            return auth_error

        exists = await models.Hazard.get(name=payload.name)
        if exists:
            return OperationError(error="Hazard with this name already exists")

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.HazardCreate(**incoming)
        hazard: models.Hazard = await models.Hazard.create(obj_in)
        return types.HazardType(**hazard.marshal_simple())

    
    async def update_hazard(
        self, info, uid: str, payload: HazardInputType
    ) -> HazardResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update hazard",
        )

        if not uid:
            return OperationError(error="No uid provided to identity update hazard")

        hazard: models.Hazard = await models.Hazard.get(uid=uid)
        if not hazard:
            return OperationError(
                error=f"Hazard with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = hazard.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(hazard, field, payload.__dict__[field])
                except Exception as e:  # noqa
                    pass

        setattr(hazard, "updated_by_uid", felicity_user.uid)

        obj_in = schemas.HazardUpdate(**hazard.to_dict())
        hazard = await hazard.update(obj_in)
        return types.HazardType(**hazard.marshal_simple())

    
    async def create_stock_unit(
        self, info, payload: StockUnitInputType
    ) -> StockUnitResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock_unit",
        )
        if not auth_success:
            return auth_error

        exists = await models.StockUnit.get(name=payload.name)
        if exists:
            return OperationError(error="StockUnit with this name already exists")

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.StockUnitCreate(**incoming)
        stock_unit: models.StockUnit = await models.StockUnit.create(obj_in)
        return types.StockUnitType(**stock_unit.marshal_simple())

    
    async def update_stock_unit(
        self, info, uid: str, payload: StockUnitInputType
    ) -> StockUnitResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update stock_unit",
        )

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        stock_unit: models.StockUnit = await models.StockUnit.get(uid=uid)
        if not stock_unit:
            return OperationError(
                error=f"StockUnit with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = stock_unit.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(stock_unit, field, payload.__dict__[field])
                except Exception as e:  # noqa
                    pass

        setattr(stock_unit, "updated_by_uid", felicity_user.uid)

        obj_in = schemas.StockUnitUpdate(**stock_unit.to_dict())
        stock_unit = await stock_unit.update(obj_in)
        return types.StockUnitType(**stock_unit.marshal_simple())

    
    async def create_stock_packaging(
        self, info, payload: StockPackagingInputType
    ) -> StockPackagingResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock_packaging",
        )
        if not auth_success:
            return auth_error

        exists = await models.StockPackaging.get(name=payload.name)
        if exists:
            return OperationError(error="StockPackaging with this name already exists")

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.StockPackagingCreate(**incoming)
        stock_packaging: models.StockPackaging = await models.StockPackaging.create(
            obj_in
        )
        return types.StockPackagingType(**stock_packaging.marshal_simple())

    
    async def update_stock_packaging(
        self, info, uid: str, payload: StockPackagingInputType
    ) -> StockPackagingResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update stock_packaging",
        )

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        stock_packaging: models.StockPackaging = await models.StockPackaging.get(
            uid=uid
        )
        if not stock_packaging:
            return OperationError(
                error=f"StockPackaging with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = stock_packaging.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(stock_packaging, field, payload.__dict__[field])
                except Exception as e:  # noqa
                    pass

        setattr(stock_packaging, "updated_by_uid", felicity_user.uid)

        obj_in = schemas.StockPackagingUpdate(**stock_packaging.to_dict())
        stock_packaging = await stock_packaging.update(obj_in)
        return types.StockPackagingType(**stock_packaging.marshal_simple())

    
    async def create_stock_product(
        self, info, payload: StockProductInputType
    ) -> StockProductResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock_product",
        )
        if not auth_success:
            return auth_error

        incoming: dict = {
            "date_received": datetime.today(),
            "expiry_date": datetime.today() + timedelta(days=10),
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v
        incoming["remaining"] = payload.quantity_received

        obj_in = schemas.StockProductCreate(**incoming)
        stock_product: models.StockProduct = await models.StockProduct.create(obj_in)
        return types.StockProductType(**stock_product.marshal_simple())

    
    async def update_stock_product(
        self, info, uid: str, payload: StockProductInputType
    ) -> StockProductResponse:

        is_authenticated, felicity_user = await auth_from_info(info)
        verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can update stock_product",
        )

        if not uid:
            return OperationError(error="No uid provided to identity update obj")

        stock_product: models.StockProduct = await models.StockProduct.get(uid=uid)
        if not stock_product:
            return OperationError(
                error=f"StockProduct with uid {uid} not found. Cannot update obj ..."
            )

        obj_data = stock_product.to_dict()
        for field in obj_data:
            if field in payload.__dict__:
                try:
                    setattr(stock_product, field, payload.__dict__[field])
                except Exception as e:  # noqa
                    pass

        setattr(stock_product, "updated_by_uid", felicity_user.uid)

        obj_in = schemas.StockProductUpdate(**stock_product.to_dict())
        stock_product = await stock_product.update(obj_in)
        return types.StockProductType(**stock_product.marshal_simple())

    
    async def create_stock_order(
        self, info, payload: StockOrderInputType
    ) -> StockOrderResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock_order",
        )
        if not auth_success:
            return auth_error

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
            "order_by_uid": felicity_user.uid,
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.StockOrderCreate(**incoming)
        stock_order: models.StockOrder = await models.StockOrder.create(obj_in)

        # create Order Products
        for prod in payload.order_products:
            product: models.StockProduct = await models.StockProduct.get(
                uid=prod.product_uid
            )
            op_in = schemas.StockOrderProductCreate(
                product_uid=prod.product_uid,
                order_uid=stock_order.uid,
                price=product.price,
                quantity=prod.quantity,
            )
            await models.StockOrderProduct.create(op_in)

        order_products = await models.StockOrderProduct.get_all(
            order_uid=stock_order.uid
        )

        return StockOrderLineType(
            stock_order=stock_order, order_products=order_products
        )

    
    async def update_stock_order(
        self, info, uid: str, payload: StockOrderInputType
    ) -> StockOrderResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock_order",
        )
        if not auth_success:
            return auth_error

        stock_order: models.StockOrder = await models.StockOrder.get(uid=uid)
        if stock_order.status != order_states.PREPARATION:
            return OperationError(
                error="You can only update a StockOrder under preparation"
            )
        
        obj_in = schemas.StockOrderUpdate(**{
            "department_uid" : payload.department_uid,
            "order_by_uid": felicity_user.uid,
        })
        await stock_order.update(obj_in)

        # add Order Products
        old_products = await models.StockOrderProduct.get_all(order_uid=uid)
        _pr_uids = [p.product_uid for p in old_products]
        for prod in payload.order_products:
            # New product
            if prod.product_uid not in _pr_uids:
                product: models.StockProduct = await models.StockProduct.get(
                    uid=prod.product_uid
                )
                op_in = schemas.StockOrderProductCreate(
                    product_uid=prod.product_uid,
                    order_uid=uid,
                    price=product.price,
                    quantity=prod.quantity,
                )
                await models.StockOrderProduct.create(op_in)
            else:  # update existing products
                so_product = await models.StockOrderProduct.get(
                    product_uid=prod.product_uid, order_uid=uid
                )
                await so_product.update({"quantity": prod.quantity})

        # delete removed products
        order_products_uids = [p.product_uid for p in payload.order_products]
        for _op in old_products:
            if _op.product_uid not in order_products_uids:
                await _op.delete()

        # re-fetch updated
        o_products = await models.StockOrderProduct.get_all(order_uid=uid)
        stock_order: models.StockOrder = await models.StockOrder.get(uid=uid)

        return StockOrderLineType(stock_order=stock_order, order_products=o_products)

    
    async def submit_stock_order(self, info, uid: str) -> StockOrderResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can submit stock orders",
        )
        if not auth_success:
            return auth_error

        stock_order: models.StockOrder = await models.StockOrder.get(uid=uid)
        if stock_order.status not in [order_states.PREPARATION]:
            return OperationError(
                error="You can only submit a StockOrder under preperation"
            )

        stock_order = await stock_order.update(
            {"status": order_states.SUBMITTED}
        )  # noqa
        return types.StockOrderType(**stock_order.marshal_simple())

    
    async def approve_stock_order(
        self, info, uid: str, payload: StockOrderApprovalInputType
    ) -> StockOrderResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can approve stock orders",
        )
        if not auth_success:
            return auth_error

        stock_order: models.StockOrder = await models.StockOrder.get(uid=uid)
        if stock_order.status not in [order_states.SUBMITTED]:
            return OperationError(
                error="You can only approve/revert a submitted StockOrder"
            )

        stock_order = await stock_order.update(
            {"status": payload.status, "remarks": payload.remarks }
        )  # noqa
        return types.StockOrderType(**stock_order.marshal_simple())

    
    async def issue_stock_order(
        self, info, uid: str, payload: List[StockOrderProductLineInputType]
    ) -> StockOrderResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can delete stock orders",
        )
        if not auth_success:
            return auth_error

        stock_order: models.StockOrder = await models.StockOrder.get(uid=uid)
        if stock_order.status not in [order_states.PENDING, order_states.SUBMITTED]:
            return OperationError(error="You can only issue a pending StockOrder")

        # issuance
        for order_p in payload:
            # init transaction
            incoming: dict = {
                "created_by_uid": felicity_user.uid,
                "updated_by_uid": felicity_user.uid,
                "date_issued": datetime.now(),
                "product_uid": order_p.product_uid,
                "issued": order_p.quantity,
                "issued_to_uid": stock_order.order_by_uid,
                "department_uid": stock_order.department_uid,
                "transaction_by_uid": felicity_user.uid,
            }
            obj_in = schemas.StockTransactionCreate(**incoming)
            stock_transaction: models.StockTransaction = (
                await models.StockTransaction.create(obj_in)
            )
            #
            product = await models.StockProduct.get(uid=order_p.product_uid)
            quantity = product.remaining - order_p.quantity
            if quantity < 0:
                return OperationError(
                    error="Sorry you cannot issue beyond whats available"
                )
            else:
                await product.update({"remaining": quantity})

        stock_order = await stock_order.update(
            {"status": order_states.PROCESSED, "remarks": ""}
        )  # noqa
        o_products = await models.StockOrderProduct.get_all(order_uid=uid)
        return StockOrderLineType(stock_order=stock_order, order_products=o_products)

    
    async def delete_stock_order(self, info, uid: str) -> StockOrderResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can delete stock orders",
        )
        if not auth_success:
            return auth_error

        stock_order: models.StockOrder = await models.StockOrder.get(uid=uid)
        if stock_order.status != order_states.PREPARATION:
            return OperationError(
                error="You can only delete a StockOrder under preparation"
            )

        order_products = await models.StockOrderProduct.get_all(
            order_uid=stock_order.uid
        )
        for op in order_products:
            await op.delete()

        await stock_order.delete()
        return types.StockOrderType(**stock_order.marshal_simple())

    
    async def create_stock_transaction(
        self, info, payload: StockTransactionInputType
    ) -> StockTransactionResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock_transaction",
        )
        if not auth_success:
            return auth_error

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
            "transaction_by_uid": felicity_user.uid,
            "date_issued": datetime.now(),
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.StockTransactionCreate(**incoming)
        stock_transaction: models.StockTransaction = (
            await models.StockTransaction.create(obj_in)
        )

        product = await models.StockProduct.get(uid=stock_transaction.product_uid)

        # Transact
        remaining = product.remaining - stock_transaction.issued
        if remaining < 0:
            await stock_transaction.update(
                {"remarks": "Sustained: Sorry you cannot issue beyond whats available"}
            )  # noqa
            return OperationError(
                error="Sorry you cannot issue beyond whats available"
            )
        else:
            await product.update({"remaining": remaining})

        return types.StockTransactionType(**stock_transaction.marshal_simple())

    
    async def create_stock_adjustment(
        self, info, payload: StockAdjustmentInputType
    ) -> StockAdjustmentResponse:
        is_authenticated, felicity_user = await auth_from_info(info)
        auth_success, auth_error = verify_user_auth(
            is_authenticated,
            felicity_user,
            "Only Authenticated user can create stock_adjustment",
        )
        if not auth_success:
            return auth_error

        incoming: dict = {
            "created_by_uid": felicity_user.uid,
            "updated_by_uid": felicity_user.uid,
            "adjustment_by_uid": felicity_user.uid,
            "adjustment_date": datetime.now(),
        }
        for k, v in payload.__dict__.items():
            incoming[k] = v

        obj_in = schemas.StockAdjustmentCreate(**incoming)
        stock_adjustment: models.StockAdjustment = await models.StockAdjustment.create(
            obj_in
        )

        product = await models.StockProduct.get(uid=stock_adjustment.product_uid)

        # Adjust
        if stock_adjustment.adjustment_type == "transfer-in":
            remaining = product.remaining + stock_adjustment.adjust
            await product.update({"remaining": remaining})
        else:
            remaining = product.remaining - stock_adjustment.adjust
            if remaining < 0:
                await stock_adjustment.update(
                    {
                        "remarks": "Sustained: Sorry you cant adjust beyond what you have"
                    }
                )  # noqa
                return OperationError(
                    error="Sorry you cant adjust beyond what you have"
                )
            else:
                await product.update({"remaining": remaining})

        return types.StockAdjustmentType(**stock_adjustment.marshal_simple())


class IStockItemService(BaseService[StockItem], IStockItemService): ...

class IStockCategoryService(BaseService[StockCategory], IStockCategoryService): ...

class IHazardService(BaseService[Hazard], IHazardService): ...

class IStockUnitService(BaseService[StockUnit], IStockUnitService): ...

class IStockPackagingService(BaseService[StockPackaging], IStockPackagingService): ...

class IStockProductService(BaseService[StockProduct], IStockProductService): ...

class IStockOrderProductService(BaseService[StockOrderProduct], IStockOrderProductService): ...

class IStockTransactionService(BaseService[StockTransaction], IStockTransactionService): ...

class IStockAdjustmentService(BaseService[StockAdjustment], IStockAdjustmentService): ...

class IStockOrderService(BaseService[StockOrder], IStockOrderService):
    async def create(cls, obj_in: StockOrderCreate) -> StockOrder:
        data = cls._import(obj_in)
        data["status"] = order_states.PREPARATION
        data["order_number"] = (await IdSequence.get_next_number("SON"))[1]
        return await super().create(**data)
