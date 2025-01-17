import { defineStore } from 'pinia';
import { 
    GetAllClientsDocument, GetAllClientsQuery, GetAllClientsQueryVariables,
    SearchClientsDocument, SearchClientsQuery, SearchClientsQueryVariables,
    GetClientContactsByClientUidDocument, GetClientContactsByClientUidQuery, GetClientContactsByClientUidQueryVariables,
    GetClientByUidDocument, GetClientByUidQuery, GetClientByUidQueryVariables
} from '@/graphql/operations/clients.queries';
import { addListsUnique } from '@/utils/helpers';
import { IClient, IClientContact } from '@/models/client';
import { IPageInfo } from '@/models/pagination';

import  useApiUtil  from '@/composables/api_util';
import { useLocationStore } from './location';

const { withClientQuery } = useApiUtil();

export const useClientStore = defineStore('client', {
    state: () => {
        return {
            clients: [],
            fetchingClients: false,
            client: undefined,
            fetchingClient: false,
            clientContacts: [],
            fetchingClientContacts: false,
            clientCount: 0,
            clientPageInfo: {},
        } as {
            clients: IClient[];
            fetchingClients: boolean;
            client?: IClient;
            fetchingClient: boolean;
            clientContacts: IClientContact[];
            fetchingClientContacts: boolean;
            clientCount?: number;
            clientPageInfo?: IPageInfo;
        };
    },
    getters: {
        getClientContacts: state => state.clientContacts,
        getClients: state => state.clients,
        getClient: state => state.client,
        getClientByName: state => (name: string) => state.clients?.find(cl => cl.name === name),
        getClientCount: state => state.clientCount,
        getClientPageInfo: state => state.clientPageInfo,
    },
    actions: {
        async fetchClients(params) {
            this.fetchingClients = true;
            await withClientQuery<GetAllClientsQuery, GetAllClientsQueryVariables>(GetAllClientsDocument, params, undefined)
                .then(payload => {
                    this.fetchingClients = false;
                    const page = payload.clientAll;
                    const clients = page.items;
                    if (params.filterAction) {
                        this.clients = [];
                        this.clients = clients;
                    } else {
                        this.clients = addListsUnique(this.clients!, clients, 'uid');
                    }

                    this.clientCount = page?.totalCount;
                    this.clientPageInfo = page?.pageInfo;
                })
                .catch(err => (this.fetchingClients = false));
        },
        async searchClients(queryString: string) {
            this.fetchingClients = true;
            await withClientQuery<SearchClientsQuery, SearchClientsQueryVariables>(SearchClientsDocument, { queryString }, 'clientSearch')
                .then(payload => {
                    this.fetchingClients = false;
                    this.clients = payload;
                })
                .catch(err => (this.fetchingClients = false));
        },
        async fetchClientByUid(uid) {
            if (!uid) {
                return;
            }
            this.fetchingClient = true;
            await withClientQuery<GetClientByUidQuery, GetClientByUidQueryVariables>(GetClientByUidDocument, { uid }, 'clientByUid')
                .then(payload => {
                    this.fetchingClient = false;
                    this.client = payload;
                    if(payload?.district){
                        useLocationStore().addDistrict(payload?.district);
                    }
                })
                .catch(err => (this.fetchingClient = false));
        },
        addClient(payload: IClient) {
            this.clients?.unshift(payload);
        },
        updateClient(payload: IClient) {
            this.clients = this.clients?.map(item => (item.uid === payload.uid ? payload : item));
            this.client = { ...this.client, ...payload };
        },

        async fetchClientContacts(clientUid) {
            if (!clientUid) {
                return;
            }
            this.fetchingClientContacts = true;
            await withClientQuery<GetClientContactsByClientUidQuery, GetClientContactsByClientUidQueryVariables>(GetClientContactsByClientUidDocument, { clientUid }, 'clientContactByClientUid')
                .then(payload => {
                    this.fetchingClientContacts = false;
                    this.clientContacts = payload;
                })
                .catch(err => (this.fetchingClientContacts = false));
        },
        addClientContact(payload: IClientContact) {
            this.clientContacts?.unshift(payload);
        },
        updateClientContact(payload: IClientContact) {
            this.clientContacts = this.clientContacts?.map(item => (item.uid === payload.uid ? payload : item));
        },
        deleteClientContact(uid: string) {
            this.clientContacts = this.clientContacts?.filter(item => (item.uid !== uid));            
        }
    },
});
