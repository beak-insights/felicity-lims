<template>
  <div class="px-6">
    <h4>Felicity Flash DashBoard</h4>
    <span v-if="fetching">Fetching users data ...</span>
    <span v-else-if="error">Error: {{ error }}</span>
    <ul v-else>
      <li v-for="user in data.userAll.edges" :key="user.id">{{ user.node.firstName }}</li>
    </ul> 

  <hr class="mt-4 mb-2">
  <div class="flex justify-between mb-2">
    <button @click="doSuccess" type="button" class="btn btn-success">Success</button>
    <button @click="doError" type="button" class="btn btn-danger">Error</button>
    <button @click="doWarning" type="button" class="btn btn-warning">Warning</button>
    <button @click="doInfo" type="button" class="btn btn-info">Info</button>
    <button @click="doQuestion" type="button" class="btn btn-primary">QUESTION?</button>
  </div>


  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuery } from '@urql/vue';
import { mapGetters, mapActions, useStore} from "vuex";
import { GET_ALL_USERS } from '../../graphql/_queries'
import { ActionTypes } from '../../store/modules/toast'
export default defineComponent({
  name: "DashBoard",
  setup() {
    let store = useStore();

    const { data, fetching, error } = useQuery({
      query: GET_ALL_USERS,
    })

    function doSuccess() {
      store.dispatch(ActionTypes.ALERT_SUCCESS, "yi doSuccess le")
    }

    function doError() { 
      store.dispatch(ActionTypes.ALERT_ERROR, "yi doError le")
    }

    function doWarning() {
      store.dispatch(ActionTypes.ALERT_WARING, "yi doWarning le")
    }

    function doInfo() {
      store.dispatch(ActionTypes.ALERT_INFO, "yi doInfo le")
    }

    function doQuestion() {
      store.dispatch(ActionTypes.ALERT_QUESTION, "yi doQuestion le")
    }

    return { 
      data, 
      fetching, 
      error,
      doSuccess,
      doError,
      doWarning,
      doInfo,
      doQuestion
    };
  },
});
</script>