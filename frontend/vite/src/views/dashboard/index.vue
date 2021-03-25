<template>
  <div class="px-6">
    <h4>Felicity Flash DashBoard</h4>
    <span v-if="fetching">Fetching users data ...</span>
    <span v-else-if="error">Error: {{ error }}</span>
    <ul v-else>
      <li v-for="user in data.userAll.edges" :key="user.id">{{ user.node.firstName }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuery } from '@urql/vue';
import { GET_ALL_USERS } from '../../graphql/_queries'
export default defineComponent({
  name: "DashBoard",
  setup() {
    const { data, fetching, error } = useQuery({
      query: GET_ALL_USERS,
    })
    return { data, fetching, error };
  },
});
</script>