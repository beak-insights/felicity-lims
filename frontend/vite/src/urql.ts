import { createClient } from '@urql/core';
import { authExchange } from '@urql/exchange-auth';
import { makeOperation } from '@urql/core';

import { graphql_url } from './conf'

export const urqlClient = createClient({
  url: graphql_url,
  // exchanges: [
  //   authExchange({}),
  // ],
  fetchOptions: () => {
    const token = 'ddddddd';
    return {
      headers: { "Authorization": token ? `Bearer ${localStorage.getItem('fwt')}` : '' }
    }
  },
});

const getAuth = async (authState: any) => {
  if (!authState) {
    const token = localStorage.getItem('fwt');
    if (token) {
      return { token };
    }
    return null;
  }

  localStorage.clear();
  logout();

  return null;
};


const addAuthToOperation = (authState: any, operation: any) => {
  if (!authState || !authState.token) {
    return operation;
  }

  const fetchOptions =
    typeof operation.context.fetchOptions === 'function'
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {};

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: authState.token,
      },
    },
  });
};


const didAuthError = (error: any ) => {
  return error.graphQLErrors.some((e: any) => e.extensions?.code === 'FORBIDDEN');
};

const logout = () => {

}

const willAuthError = (authState: any) => {
  if (!authState || "/* JWT is expired */") return true;
  return false;
}