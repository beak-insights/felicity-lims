import { createClient } from '@urql/core';

export const urqlClient = createClient({
  url: 'http://localhost:8000/felicity-gql',
});