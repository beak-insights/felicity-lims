<template>

    <div class="container  mx-auto w-full my-4">
        <hr>
        <div class="flex justify-between">
          <h3>Users</h3>
          <button @click="UserFormManager(true, null)" class="px-2 py-1 ml-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Add User/Lab Contact</button>
        </div>
        <hr>
        
        <div class="overflow-x-auto mt-4">
            <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg">
            <table class="min-w-full">
                <thead>
                <tr>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">First Name</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Last Name</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Email Adress</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Active</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Groups</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Username</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">User Type</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Blocked</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300"></th>
                </tr>
                </thead>
                <tbody class="bg-white">
                <tr v-for="user in users" :key="user.uid">
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                      <div class="flex items-center">
                          <div class="text-sm leading-5 text-gray-800">{{ user.firstName }}</div>
                      </div>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">{{ user.lastName }}</div>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">{{ user.email }}</div>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                        <span class=""
                          :class="[
                            'block h-4 w-4 rounded-full bottom-0 right-0',
                            user?.isActive ? 'bg-green-400' : 'bg-red-400' ,
                          ]"
                        ></span>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">{{ userGroupsName(user) }}</div>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">{{ user?.auth?.userName }}</div>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">{{ user?.auth?.userType }}</div>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                        <span class=""
                          :class="[
                            'block h-4 w-4 rounded-full bottom-0 right-0',
                            !user?.isBlocked ? 'bg-green-400' : 'bg-red-400' ,
                          ]"
                        ></span>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                        <button @click="UserFormManager(false, user)" class="px-2 py-1 mr-2 border-orange-500 border text-orange-500 rounded transition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none">Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

    </div>



      <!-- UserForm Modal -->
  <modal v-if="showUserModal" @close="showUserModal = false">
    <template v-slot:header>
      <h3>{{ formTitle }}</h3>
    </template>

    <template v-slot:body>
      <form action="post" class="p-1">
        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">First Name</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="userForm.firstName"
              placeholder="First Name ..."
            />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Last Name</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="userForm.lastName"
              placeholder="Last Name ..."
            />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Email</span>
            <input
              class="form-input mt-1 block w-full"
              type="email"
              v-model="userForm.email"
              placeholder="Email ..."
            />
          </label>
          <label for="toggle" class=" block col-span-2 text-xs text-gray-700 mt-4">Active
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input 
                type="checkbox" 
                name="toggle" id="toggle" 
                v-model="userForm.active"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"/>
                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </label>
        </div>
        <hr />
        <button
          type="button"
          @click.prevent="saveForm()"
          class="-mb-4 w-full border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Save Form
        </button>
      </form>
    </template>
  </modal>


</template>

<script lang="ts">
import modal from '../../../_components/modals/simpleModal.vue';

import { defineComponent, ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import  { useStore } from 'vuex';
import { ActionTypes } from '../../../../store/actions';
export default defineComponent({
  name: "tab-users",
  components: {
    modal
  },
  setup() {
    let store = useStore();

    let showUserModal = ref(false);
    let formTitle = ref('');
    let userForm = reactive({ ...new Object });
    const userFormAction = ref(true);

    store.dispatch(ActionTypes.FETCH_USERS);
    let users = computed(() => store.getters.getUsers)
    
    function userGroupsName(user: any): void {
        let groups = [];
        user?.groups?.forEach(a => groups.push(g.name));
        return groups.join(', ');
    }

    function UserFormManager(create, obj): void {
      userFormAction.value = create;
      showUserModal.value = true;
      formTitle.value = (create ? 'CREATE' : 'EDIT') + ' ' + "USER";
      if (create) {
        let user = new Object;
        user.firstName = "";
        user.lastName = "";
        user.email = "";
        Object.assign(userForm, { ...user });
      } else {
        Object.assign(userForm, { ...obj });
      }
    }

    return {  
      users, 
      userGroupsName,
      UserFormManager, 
      showUserModal,
      formTitle,
      userForm,
    };
  },
});
</script>