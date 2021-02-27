from typing import Any, Dict, Generic, List, Optional, Type, TypeVar, Union
import databases
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from sqlalchemy.orm import Session

from felicity.database.base_class import DBModel

ModelType = TypeVar("ModelType", bound=DBModel)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)


class CRUDBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: Type[ModelType]):
        """
        USING SQLALCHEMY ORM
        CRUD object with default methods to Create, Read, Update, Delete (CRUD).

        **Parameters**

        * `model`: A SQLAlchemy model class
        * `schema`: A Pydantic model (schema) class
        """
        self.model = model

    def get(self, db: Session, _id: Any) -> Optional[ModelType]:
        return db.query(self.model).filter(self.model.id == _id).first()

    def get_multi(
            self, db: Session, *, skip: int = 0, limit: int = 100
    ) -> List[ModelType]:
        return db.query(self.model).offset(skip).limit(limit).all()

    def create(self, db: Session, *, obj_in: CreateSchemaType) -> ModelType:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data)  # type: ignore
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
            self,
            db: Session,
            *,
            db_obj: ModelType,
            obj_in: Union[UpdateSchemaType, Dict[str, Any]]
    ) -> ModelType:
        obj_data = jsonable_encoder(db_obj)
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        for field in obj_data:
            if field in update_data:
                setattr(db_obj, field, update_data[field])
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def remove(self, db: Session, *, _id: int) -> ModelType:
        obj = db.query(self.model).get(_id)
        db.delete(obj)
        db.commit()
        return obj


Database = TypeVar("Database", bound=databases.Database)


class ACRUDBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: Type[ModelType]):
        """
        async await enabled USING SQLALCHEMY CORE WITH databases
        CRUD object with default methods to Create, Read, Update, Delete (CRUD).

        **Parameters**

        * `model`: A SQLAlchemy model class
        * `schema`: A Pydantic model (schema) class
        """
        self.model = model

    @property
    def table(self):
        return self.model().__table__

    async def get(self, db: Database, _id: Any) -> Optional[ModelType]:
        query = self.table.select().where(self.model.id == _id)  # .first()
        return await db.fetch_one(query)

    async def get_multi(
            self, db: Database, *, skip: int = 0, limit: int = 100
    ) -> List[ModelType]:
        query = self.table.select().offset(skip).limit(limit)
        # from sqlalchemy.sql import select
        # columns = list(self.model())
        # stmnt = select(columns).offset(skip).limit(limit)
        return await db.fetch_all(query)

    async def create(self, db: Database, *, obj_in: CreateSchemaType) -> ModelType:
        obj_in_data = jsonable_encoder(obj_in)
        query = self.table.insert().values(**obj_in_data)
        return await db.execute(query)

    async def update(
            self,
            db: Database,
            *,
            db_obj: ModelType,
            obj_in: Union[UpdateSchemaType, Dict[str, Any]]
    ) -> ModelType:
        obj_data = jsonable_encoder(db_obj)
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        async for field in obj_data:
            if field in update_data:
                setattr(db_obj, field, update_data[field])
        query = self.table.update().values(**db_obj)
        return await db.execute(query)

    async def remove(self, db: Database, *, _id: int) -> ModelType:
        query = self.table.delete().where(self.model.id == _id)
        return await db.execute(query)
