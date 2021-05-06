import graphene
from graphene import (
    relay,
)
from graphene_sqlalchemy import SQLAlchemyConnectionField
from felicity.apps.markdown import models
from felicity.gql import FilterableConnectionField
from felicity.gql.markdown.types import DocumentTagType, DocumentCategoryType, DocumentType


class FilterableAuditField(FilterableConnectionField):
    pass


class MarkDownQuery(graphene.ObjectType):
    node = relay.Node.Field()
    document_all = SQLAlchemyConnectionField(DocumentType.connection)
    document_tag_all = SQLAlchemyConnectionField(DocumentTagType.connection)
    document_category_all = SQLAlchemyConnectionField(DocumentCategoryType.connection)
    document_by_uid = graphene.Field(lambda: DocumentType, uid=graphene.String(default_value=""))
    documents_by_tag = graphene.List(lambda: DocumentType, tag=graphene.String(default_value=""))
    documents_by_category = graphene.List(lambda: DocumentType, category=graphene.String(default_value=""))
    documents_search = graphene.List(lambda: DocumentType, query_string=graphene.String(default_value=""))

    @staticmethod
    def resolve_document_by_uid(info, uid):
        document = models.Document.get(uid=uid)
        return document

    @staticmethod
    def resolve_documents_by_tag(info, tag):
        documents = models.Document.where(tags___name__ilike=f"%{tag}%").all()
        return documents

    @staticmethod
    def resolve_documents_by_category(info, category):
        documents = models.Document.where(category___name__ilike=f"%{category}%").all()
        return documents

    @staticmethod
    def resolve_documents_search(info, query_string):
        filters = [
            'name__ilike',
            'subtitle__ilike',
            'document_id__ilike',
            'tags___name__ilike'
        ]
        combined = set()
        for _filter in filters:
            arg = dict()
            arg[_filter] = f"%{query_string}%"
            query = models.Document.where(**arg).all()
            for item in query:
                combined.add(item)
        return list(combined)
