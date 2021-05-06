from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay

from felicity.apps.markdown.models import DocumentTag,  DocumentCategory, Document


# Graphene DocumentTag Type
class DocumentTagType(SQLAlchemyObjectType):
    class Meta:
        model = DocumentTag
        interfaces = (relay.Node, )


# Graphene DocumentCategory Type
class DocumentCategoryType(SQLAlchemyObjectType):
    class Meta:
        model = DocumentCategory
        interfaces = (relay.Node, )


# Graphene Document Type
class DocumentType(SQLAlchemyObjectType):
    class Meta:
        model = Document
        interfaces = (relay.Node, )