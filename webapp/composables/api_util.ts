import { urqlClient } from '@/urql';
import { TypedDocumentNode } from '@urql/core';
import { AnyVariables, CombinedError } from '@urql/core';
import { ref, Ref } from 'vue';
import { RequestPolicy } from '@urql/vue';
import useNotifyToast from './alert_toast';
import { authLogout } from '@/auth';

// Define clear interfaces for different types of responses
interface OperationError {
  __typename: 'OperationError';
  error: string;
  suggestion: string;
}

interface OperationSuccess {
  __typename: 'OperationSuccess' | 'MessagesType';
  message: string;
}

// Discriminated union for operation results
type OperationResult = 
  | OperationError 
  | OperationSuccess 
  | null 
  | undefined;

// Enhanced error handling interface
interface GraphQLErrorContext {
  networkError?: Error;
  graphQLErrors?: Array<{
    message: string;
    extensions?: Record<string, any>;
  }>;
}

// Global Access
const errors: Ref<any[]> = ref([]);

export default function useApiUtil() {
  // Reactive error and message tracking with proper typing
  const messages: Ref<OperationSuccess[]> = ref([]);
  const { toastInfo, toastError, swalError } = useNotifyToast();

  const addError = (err: any): void => {
    errors.value.unshift(err);
  };

  const clearErrors = (): void => {
    errors.value = [];
  };

  /**
   * Comprehensive error handler for GraphQL operations
   * @param error - The error object from GraphQL operation
   */
  const gqlErrorHandler = (error: GraphQLErrorContext | CombinedError): void => {
    // Network errors
    if ('networkError' in error && error.networkError) {
      const errorMessage = error.networkError.message || 'Unknown network error';
      errors.value.unshift(errorMessage);
      toastError(errorMessage);
      swalError('Network Error: Please check your connection and try again.');
    }

    // GraphQL specific errors
    if ('graphQLErrors' in error && error.graphQLErrors?.length) {
      const uniqueErrors = new Set<string>();
      
      error.graphQLErrors.forEach(err => {
        const message = err.message || 'Unknown GraphQL error';
        uniqueErrors.add(message);
        
        if (message === "Only accessible to authenticated users") {
          authLogout();
          setTimeout(() => location.reload(), 3000);
          toastInfo("You are being redirected to re-login...");
        }
        
        // Optional: log extended error information
        if (err.extensions) {
          console.error('GraphQL Error Details:', err.extensions);
        }
      });

      uniqueErrors.forEach(errorMessage => {
        errors.value.unshift(errorMessage);
        toastError(errorMessage);
      });
    }
  };

  /**
   * Handles the response from GraphQL operations
   * @param res - The raw response from the operation
   * @returns Processed data or empty object
   */
  const gqlResponseHandler = <T = any>(res: { data?: T; error?: CombinedError }): T => {
    if (res?.error) {
      gqlErrorHandler(res.error);
      throw res.error;
    }
    return res?.data ?? {} as T;
  };

  /**
   * Handles operational errors with type-specific logic
   * @param payload - The response payload
   * @param key - The key to extract from payload
   * @returns Processed payload
   */
  const gqlOperationalErrorHandler = <T extends Record<string, OperationResult>>(
    payload: T, 
    key?: keyof T
  ): T => {
    if (!key) return payload;

    const result = payload[key];

    if (result?.__typename === 'OperationError') {
      errors.value.unshift(result);
      swalError(`${result.error}\n${result.suggestion}`);
      throw new Error(result.error);
    }

    if (result?.__typename === 'OperationSuccess' || result?.__typename === 'MessagesType') {
      const successResult = result as OperationSuccess;
      messages.value.unshift(successResult);
      toastInfo(successResult.message);
    }
    
    return payload;
  };

  /**
   * Unified response interceptor for all GraphQL operations
   * @param res - The raw response
   * @param key - Optional key to extract from response
   * @returns Processed data
   */
  const GQLResponseInterceptor = <T extends Record<string, any>>(
    res: any, 
    key?: keyof T
  ): T => {
    const processedResponse = gqlResponseHandler<T>(res);
    
    // Use type assertion to handle empty object case
    return key 
      ? gqlOperationalErrorHandler({ [key]: processedResponse[key] } as T, key)
      : processedResponse;
  };

  /**
   * Perform a type-safe GraphQL query
   * @param query - The GraphQL query document
   * @param variables - Query variables
   * @param dataKey - Optional key to extract from response
   * @param requestPolicy - Caching policy
   * @returns Promise with query result
   */
  async function withClientQuery<TData extends Record<string, any>, TVariables extends AnyVariables>(
    query: TypedDocumentNode<TData, TVariables>,
    variables: TVariables,
    dataKey?: keyof TData,
    requestPolicy: RequestPolicy = 'cache-first'
  ): Promise<TData[keyof TData] | undefined> {
    try {
      const result = await urqlClient
        .query(query, variables, { requestPolicy })
        .toPromise();

      const data = GQLResponseInterceptor<TData>(result, dataKey);
      return dataKey ? (data[dataKey] as TData[keyof TData]) : (data as unknown as TData[keyof TData]);
    } catch (error) {
      gqlErrorHandler(error as GraphQLErrorContext);
      throw error;
    }
  }

  /**
   * Perform a type-safe GraphQL mutation
   * @param mutation - The GraphQL mutation document
   * @param variables - Mutation variables
   * @param dataKey - Optional key to extract from response
   * @returns Promise with mutation result
   */
  async function withClientMutation<TData extends Record<string, any>, TVariables extends AnyVariables>(
    mutation: TypedDocumentNode<TData, TVariables>,
    variables: TVariables,
    dataKey?: keyof TData
  ): Promise<any> {
    try {
      const result = await urqlClient
        .mutation(mutation, variables)
        .toPromise();

      // Handle the case where dataKey is provided
      if (dataKey) {
        const data = GQLResponseInterceptor<TData>(result, dataKey);
        return data[dataKey];
      }
      
      // Return the full data object when no dataKey is provided
      return GQLResponseInterceptor<TData>(result);
    } catch (error) {
      gqlErrorHandler(error as GraphQLErrorContext);
      throw error;
    }
  }

  return {
    withClientQuery,
    withClientMutation,
    gqlErrorHandler,
    addError,
    clearErrors,
    errors,
    messages,
  };
}
