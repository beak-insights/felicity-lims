import logging

import graphene
from graphql import GraphQLError
from fastapi.encoders import jsonable_encoder

from felicity.apps.markdown import schemas, models, conf
from felicity.gql.markdown import types

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# 
# DocumentTag Mutations
# 
class CreateDocumentTag(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)

    ok = graphene.Boolean()
    tag = graphene.Field(lambda: types.DocumentTagType)

    @staticmethod
    def mutate(root, info, name, **kwargs):
        if not name:
            raise GraphQLError("Please Provide a Tag name")

        exists = models.DocumentTag.get(name=name)
        if exists:
            raise GraphQLError(f"DocumentTag {name} already exists")
        
        incoming = {
            "name": name,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.DocumentTagCreate(**incoming)
        tag = models.DocumentTag.create(obj_in)
        ok = True
        return CreateDocumentTag(tag=tag, ok=ok)

                
class UpdateDocumentTag(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        name = graphene.String(required=False)

    ok = graphene.Boolean()
    tag = graphene.Field(lambda: types.DocumentTagType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):   
        if not uid:
            raise GraphQLError("No uid provided to identify update obj")
        
        tag = models.DocumentTag.get(uid=uid)
        if not tag:
            raise GraphQLError(f"Tag with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(tag)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(tag, field, kwargs[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")
        obj_in = schemas.DocumentTagUpdate(**tag.to_dict())
        tag = tag.update(obj_in)
        ok = True
        return UpdateDocumentTag(ok=ok, tag=tag)


#
# DocumentCategory Mutations
#
class CreateDocumentCategory(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)

    ok = graphene.Boolean()
    category = graphene.Field(lambda: types.DocumentCategoryType)

    @staticmethod
    def mutate(root, info, name, **kwargs):
        if not name:
            raise GraphQLError("Please Provide a category name")

        exists = models.DocumentCategory.get(name=name)
        if exists:
            raise GraphQLError(f"Document Category {name} already exists")

        incoming = {
            "name": name,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        obj_in = schemas.DocumentCategoryCreate(**incoming)
        category = models.DocumentCategory.create(obj_in)
        ok = True
        return CreateDocumentCategory(category=category, ok=ok)


class UpdateDocumentCategory(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        name = graphene.String(required=False)

    ok = graphene.Boolean()
    category = graphene.Field(lambda: types.DocumentCategoryType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        category = models.DocumentCategory.get(uid=uid)
        if not category:
            raise GraphQLError(f"Category with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(category)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(category, field, kwargs[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")
        obj_in = schemas.DocumentCategoryUpdate(**category.to_dict())
        category = category.update(obj_in)
        ok = True
        return UpdateDocumentCategory(ok=ok, category=category)


#
# Markdown Document Mutations
#
class CreateDocument(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        subtitle = graphene.String(required=False)
        document_id = graphene.String(required=False)
        version = graphene.String(required=False)
        department_uid = graphene.String(required=False)
        category_uid = graphene.String(required=False)
        tags_uids = graphene.List(graphene.String, required=False)

    ok = graphene.Boolean()
    document = graphene.Field(lambda: types.DocumentType)

    @staticmethod
    def mutate(root, info, name, **kwargs):
        if not name:
            raise GraphQLError("Please Provide a name")
        exists = models.Document.get(name=name)
        if exists:
            name += " Copy"

        incoming = {
            "name": name,
            "content": f"## {name}",
            "status": conf.states.DRAFT,
        }
        for k, v in kwargs.items():
            incoming[k] = v

        incoming['department_uid'] = kwargs.get('departmentUid', None)
        incoming['category_uid'] = kwargs.get('categoryUid', None)
        tags_uids = kwargs.get('tagsUids', [])
        tags = []
        for _tag_uid in tags_uids:
            tag = models.DocumentTag.get(uid=_tag_uid)
            if tag:
                tags.append(tag)
        incoming['tags'] = tags

        obj_in = schemas.DocumentCreate(**incoming)
        document = models.Document.create(obj_in)
        ok = True
        return CreateDocument(document=document, ok=ok)


class UpdateDocument(graphene.Mutation):
    class Arguments:
        uid = graphene.String(required=True)
        name = graphene.String(required=False)
        subtitle = graphene.String(required=False)
        document_id = graphene.String(required=False)
        version = graphene.String(required=False)
        department_uid = graphene.String(required=False)
        category_uid = graphene.String(required=False)
        tags_uids = graphene.List(graphene.String, required=False)

    ok = graphene.Boolean()
    document = graphene.Field(lambda: types.DocumentType)

    @staticmethod
    def mutate(root, info, uid, **kwargs):
        if not uid:
            raise GraphQLError("No uid provided to identify update obj")

        document = models.Document.get(uid=uid)
        if not document:
            raise GraphQLError(f"Document with uid {uid} not found. Cannot update obj ...")

        obj_data = jsonable_encoder(document)
        for field in obj_data:
            if field in kwargs:
                try:
                    setattr(document, field, kwargs[field])
                except Exception as e:
                    logger.warning(f"failed to set attribute {field}: {e}")

        setattr(document, 'department_uid', kwargs.get('departmentUid', None))
        setattr(document, 'category_uid', kwargs.get('category_uid', None))

        document.tags.clear()
        tags_uids = kwargs.get('tagsUids', [])
        tags = []
        for _tag_uid in tags_uids:
            tag = models.DocumentTag.get(uid=_tag_uid)
            if tag:
                tags.append(tag)
        setattr(document, 'tags', tags)

        obj_in = schemas.DocumentUpdate(**document.to_dict())
        document = document.update(obj_in)
        ok = True
        return UpdateDocument(ok=ok, document=document)


class MarkdownMutations(graphene.ObjectType):
    create_document_tag = CreateDocumentTag.Field()
    update_document_tag = UpdateDocumentTag.Field()
    create_document_category = CreateDocumentCategory.Field()
    update_document_category = UpdateDocumentCategory.Field()
    create_document = CreateDocument.Field()
    update_document = UpdateDocument.Field()
