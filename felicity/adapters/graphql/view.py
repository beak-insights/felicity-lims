from sanic.request import Request
from strawberry.sanic.views import GraphQLView

from adapters.graphql.dependencies import IDependencyService, InfoContext


class AppGraphQLView(GraphQLView):
    async def get_context(self, request: Request, response) -> InfoContext:
        deps: IDependencyService = request.ctx.deps
        more = await deps.get_gql_context(request)
        return InfoContext(**{**more, "request": request, "response": response})
