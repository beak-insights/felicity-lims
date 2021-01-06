import graphene
from graphene import String
from graphql import GraphQLError

from felicity.gql.setup.query import SetupQuery
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


class Query(
    SetupQuery, UserQuery, ClientQuery, 
    PatientQuery, AnalysisQuery, WorkSheetQuery, 
    graphene.ObjectType):
    pass

class Mutation(
    SetupMutations, UserMutations, ClientMutations, 
    PatientMutations, AnalysisMutations, 
    graphene.ObjectType):
    pass
    

gql_schema = graphene.Schema(query=Query, mutation=Mutation)