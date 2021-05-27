import graphene
import asyncio
from graphene import String
from graphql import GraphQLError

from felicity.gql.setup.query import SetupQuery
from felicity.gql.audit.query import AuditLogQuery
from felicity.gql.setup.mutations import SetupMutations
from felicity.gql.user.query import UserQuery
from felicity.gql.user.mutations import UserMutations
from felicity.gql.client.query import ClientQuery
from felicity.gql.client.mutations import ClientMutations
from felicity.gql.patient.query import PatientQuery
from felicity.gql.patient.mutations import PatientMutations
from felicity.gql.analysis.query import AnalysisQuery
from felicity.gql.analysis.mutations import AnalysisMutations
from felicity.gql.worksheet.query import WorkSheetQuery
from felicity.gql.worksheet.mutations import WorkSheetMutations
from felicity.gql.markdown.query import MarkDownQuery
from felicity.gql.markdown.mutations import MarkdownMutations
from felicity.gql.kanban.query import KanBanQuery
from felicity.gql.kanban.mutations import KanBanMutations


class Query(
    SetupQuery, UserQuery, ClientQuery,
    PatientQuery, AnalysisQuery, WorkSheetQuery,
    AuditLogQuery, MarkDownQuery, KanBanQuery,
    graphene.ObjectType
):
    pass


class Mutation(
    SetupMutations, UserMutations, ClientMutations,
    PatientMutations, AnalysisMutations, WorkSheetMutations,
    MarkdownMutations, KanBanMutations,
    graphene.ObjectType
):
    pass


class Subscription(graphene.ObjectType):
    count_seconds = graphene.Float(up_to=graphene.Int())

    @staticmethod
    async def resolve_count_seconds(root, info, up_to):
        for i in range(up_to):
            yield i
            await asyncio.sleep(1.)
        yield up_to


gql_schema = graphene.Schema(query=Query, mutation=Mutation, subscription=Subscription)
