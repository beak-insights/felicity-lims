import { createClient, dedupExchange, cacheExchange, fetchExchange, errorExchange } from 'urql';
import { makeOperation } from '@urql/core';
import { authExchange } from '@urql/exchange-auth';

import { graphql_url } from './conf'

const getAuth = async (authState: any) => {
  if (!authState) {
    const token = localStorage.getItem('fwt');
    if (token) {
      return { token };
    }
    return null;
  }

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

  return makeOperation(operation?.kind, operation, {
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
  console.log("logging you out")
  localStorage.clear();
}

const willAuthError = (authState: any) => {
  if (!authState || "/* JWT is expired */") return true;
  return false;
}

// https://github.com/FormidableLabs/urql/tree/main/exchanges/auth#quick-start-guide
export const urqlClient = createClient({
  url: graphql_url,
  // exchanges: [
  //   dedupExchange,
  //   cacheExchange,
  //   errorExchange({
  //     onError: error => {
  //       const isAuthError = error.graphQLErrors.some(e => e.extensions?.code === 'FORBIDDEN');
  //       if (isAuthError) {
  //         logout();
  //       }
  //     },
  //   }),
  //   authExchange({
  //     addAuthToOperation,
  //     willAuthError,
  //     didAuthError,
  //     getAuth,
  //   }),
  //   fetchExchange
  // ],
  // fetchOptions: () => {
  //   const token = localStorage.getItem('fwt');
  //   return {
  //     headers: { "Authorization": `Bearer ${token}` }
  //   }
  // },
});