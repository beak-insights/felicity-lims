<template>
    <div class="flex justify-start">
        <div class="h-tasks flex overflow-x-scroll py-2">
            <div v-for="listing in board?.boardListings" :key="listing?.title" class="bg-gray-100 px-3 py-3 column-width rounded mr-4">
                <h4 class="h4 text-gray-600 font-bold font-sans tracking-wide text-medium">{{listing?.title}}</h4>
                <p class="h4 text-gray-500 font-normal italic font-sans tracking-wide text-small">{{listing?.description}}</p>
                <draggable 
                :list="listing?.listingTasks" 
                group="tasks" 
                ghost-class="ghost-card" 
                item-key="listing.title"
                @start="drag=true" 
                @end="drag=false"
                :sort="true"
                :move="checkMove"
                >
                    <template #item="{element}" >
                        <task-card 
                        :key="element.id" 
                        :task="element" 
                        class="mt-3 cursor-move" 
                        @click.prevent="viewTask(element)"/>
                    </template>
                    <template #header>
                      <div class="flex justify-start my-1">
                        <button @click="TaskFormManager(listing)" class="align-center p-1">
                          <i class="fa fa-plus-circle" aria-hidden="true"></i> Task
                        </button>
                      </div>
                    </template>
                </draggable>
            </div>
        </div>
    </div>


  <!-- Task Modal -->
  <modal v-if="showModal" @close="showModal = false"  :contentWidth="'w-3/5'">
    <template v-slot:header>
         <div>
          <span class="italic">in &rarr;</span>  
          <span class=" ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-blue-600 rounded"> Backlog</span>
         </div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-3 gap-4">
          <section class="col-span-2">
            <div class="mb-3 -mt-2">
                <span class="border border-green-500 text-green-500 rounded-md py-1 px-2  transition-colors duration-500 ease select-none hover:bg-green-500 hover:text-gray-100 focus:outline-none focus:shadow-outline">Complete</span>
                <span class="ml-2">@aurthurm</span>
            </div>
            <hr>
            <div class="pr-2 overflow-y-scroll" style="height: 65vh">
              <section>
                <h3 class="text-lg font-semibold my-4">{{ modalTitle }}</h3>
                <div class="font-medium my-4 tracking-wide text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quod, Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fugiat harum at tenetur eveniet dolore repellat 
                    voluptatum veritatis dolorum molestias ipsam! Ratione nam ducimus, deserunt optio quidem cum est. Amet, iure!
                </div>
              </section>
              <hr>
              <section class="font-medium my-4">
                <h4 class="my-4"> 
                  <span class="text-lg font-semibold">CheckList</span>
                </h4>
                <div class="mb-1 tracking-wide text-gray-500">
                    <span>-</span>
                    <span class="mx-2">Create BarCodes</span>
                    <span>@melisa</span>
                </div>
                <div class="mb-1 tracking-wide text-gray-500">
                    <span>-</span>
                    <span class="mx-2">Write SOP</span>
                    <span>@melisa</span>
                </div>
              </section>
              <hr>
              <section class="my-4">
                <h4  class="text-lg font-semibold mb-2">Comments</h4>
                <div class="mb-2">
                    <label class="block mb-2">
                        <textarea
                        cols="2"
                        class="form-input mt-1 block w-full"
                        placeholder="Description ..."
                        />
                    </label>
                    <button class="border border-blue-500 text-blue-500 rounded-md py-1 px-2  transition-colors duration-500 ease select-none hover:bg-blue-500 hover:text-gray-100 focus:outline-none focus:shadow-outline">Add Comment</button>
                </div>
                <div>
                  <div class="font-small my-2 tracking-wide text-gray-400">
                    <hr>
                    <div class="mt-2 flex justify-end">
                      <span>10/10/2021 12:45 am</span>
                      <span class="ml-4">@melisa</span>
                    </div>
                    <span class="">voluptatum veritatis dolorum molestias ipsam! Ratione nam ducimus, deserunt optio quidem cum est. Amet, iure!</span>
                  </div>
                  <div class="font-small my-2 tracking-wide text-gray-400">
                    <hr>
                    <div class="mt-2 flex justify-end">
                      <span>10/10/2021 12:45 am</span>
                      <span class="ml-4">@melisa</span>
                    </div>
                    <span class="">voluptatum veritatis dolorum molestias ipsam! Ratione nam ducimus, deserunt optio quidem cum est. Amet, iure!</span>
                  </div>
                  <div class="font-small my-2 tracking-wide text-gray-400">
                    <hr>
                    <div class="mt-2 flex justify-end">
                      <span>10/10/2021 12:45 am</span>
                      <span class="ml-4">@melisa</span>
                    </div>
                    <span class="">voluptatum veritatis dolorum molestias ipsam! Ratione nam ducimus, deserunt optio quidem cum est. Amet, iure!</span>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section class="col-span-1 pr-2">
              <div class="flex justify-between mb-4">
                <span class="text-lg font-semibold">Due Date</span>
                <span>
                  <input type="date" class="bg-blue-100 rounded-md px-1">
                </span>
              </div>
              <hr>
              <div class="flex justify-between my-4">
                <div class="text-lg font-semibold">Members</div>
                <div class="ml-4 flex flex-wrap">
                  <span class="mr-2 cursor-pointer">@aurthur</span>
                  <span class="mr-2 cursor-pointer">@melisa</span>
                  <span class="mr-2 cursor-pointer">@josphat</span>
                  <span class="mr-2 cursor-pointer">@theresia</span>
                </div>
              </div>
              <hr>
              <div class="flex flex-col my-4">
                <div class="text-lg font-semibold">Move Task</div>
                <label class="block mb-2">
                  <select class="form-select block w-full mt-1">
                      <option></option>
                      <option value="1"> Option one</option>
                      <option value="1"> Option two</option>
                      <option value="1"> Option three</option>
                      <option value="1"> Option four</option>
                    </select>
                </label>
                <button class="border border-blue-500 text-blue-500 rounded-md py-1 px-2  transition-colors duration-500 ease select-none hover:bg-blue-500 hover:text-gray-100 focus:outline-none focus:shadow-outline">Move</button>
              </div>
              <hr>
              <div class="flex flex-col my-4">
                <div class="text-lg font-semibold">Duplicate Task</div>
                <label class="block my-2 w-full" >
                  <input class="form-input mt-1 block w-full" type="tect" placeholder="Task Title ...." />
                </label>
                <button class="border border-green-500 text-green-500 rounded-md py-1 px-2  transition-colors duration-500 ease select-none hover:bg-green-500 hover:text-gray-100 focus:outline-none focus:shadow-outline">Duplicate</button>
              </div>
              <hr>
              <div class="flex justify-between my-4">
                <span class="text-lg font-semibold">Delete Task</span>
                <button class="border border-red-500 text-red-500 rounded-md py-1 px-2  transition-colors duration-500 ease select-none hover:bg-red-500 hover:text-gray-100 focus:outline-none focus:shadow-outline">Delete</button>
              </div>
              <hr>
              <div class="flex justify-between my-4">
                <span class="text-lg font-semibold">Archive Task</span>
                <button class="border border-gray-500 text-gray-500 rounded-md py-1 px-2  transition-colors duration-500 ease select-none hover:bg-gray-500 hover:text-gray-100 focus:outline-none focus:shadow-outline">Archive</button>
              </div>
          </section>
      </div>
    </template>
  </modal>

  <!-- Add Listing Modal -->
  <modal v-if="showTaskModal" @close="showTaskModal = false" :contentWidth="'w-1/3'">
    <template v-slot:header>
      <h3>{{ taskFormTitle }}</h3>
    </template>

    <template v-slot:body>
      <form action="post" class="p-1">

        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Title</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="taskForm.title"
              placeholder="Name ..."
            />
          </label>
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Description</span>
            <textarea
            cols="2"
              class="form-input mt-1 block w-full"
              v-model="taskForm.description"
              placeholder="Description ..."
            />
          </label>
        </div>

        <hr />
        <button
          type="button"
          @click.prevent="saveTaskForm()"
          class="-mb-4 w-full border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Save Form
        </button>
      </form>
    </template>
  </modal>


</template>

<script lang="ts">
import modal from '../../_components/SimpleModal.vue';
import draggable from "vuedraggable";
import TaskCard from "../../_components/TaskCard.vue";
import { useStore } from 'vuex';
import { useMutation } from '@urql/vue';
import { ActionTypes, Task, ITask } from '../../../store/modules/kanban';
import { ADD_LISTING_TASK } from '../../../graphql/kanban.mutations';
import { defineComponent, ref, reactive, computed } from 'vue';
export default defineComponent({
  name: "Kanban-Tasks",
  components: {
    TaskCard,
    draggable,
    modal
  },
  setup() {
      let store = useStore();
      let showModal = ref(false);
      let modalTitle = ref("Default")
      let movedObjectsIds = ref([]);
      let moveTimeOut = ref(null);

      function log(event) {
          if (event.moved) console.log("moved")
          if (event.removed) console.log("removed")
          if (event.added) console.log("added")
          console.log(event)
      }

      function removeFromMoved(val) {
        const index = movedObjectsIds.value.indexOf(val);
        if (index > -1) {
            movedObjectsIds.value.splice(index, 1);
        }
      }
      
      function movedFrom(event) {
          return event.from.previousElementSibling.innerText;
      }
      
      function movedTo(event) {
          return event.to.parentElement.firstElementChild.innerText;
      }

      function checkMove(event) {
            const to = movedFrom(event)
            const from = movedTo(event)
            const futureIndex = event.draggedContext.futureIndex
            const element = event.draggedContext.element
            console.log(element)
            console.log("from : ", from, " -- to: ", to, " -- index: ",futureIndex)
      }

      function viewTask(element){
          showModal.value = !showModal.value;
          modalTitle.value = element.title;
      }


      // Task Form
      let showTaskModal = ref(false);
      let taskFormTitle = ref("")
      let taskForm = reactive({ ...new Task() });

      const { executeMutation: createListingTask } = useMutation(ADD_LISTING_TASK);

      function addListingTask(): void {
        createListingTask({ title: taskForm.title, description: taskForm.description, listingUid: taskForm.listingUid }).then((result) => {
          store.dispatch(ActionTypes.ADD_LISTING_TASK, result);
        });
      }

      function TaskFormManager(listing: any): void {
        showTaskModal.value = true;
        taskFormTitle.value = "ADD " + listing.title + " LISTING";
        let task = new Task;
        task.listingUid = listing.uid;
        Object.assign(taskForm, { ...task });
      }

      function saveTaskForm():void {
        addListingTask();
        showTaskModal.value = false;
      }

      return { 
          board: computed(() => store.getters.getBoard ),
          log, 
          checkMove,
          showModal,
          viewTask,
          modalTitle,
          showTaskModal,
          taskForm,
          taskFormTitle,
          TaskFormManager,
          saveTaskForm,
      }
  },
});
</script>

<style scoped>

.h-tasks {
  height: 80vh;
}
.column-width {
  min-width: 320px;
  width: 320px;
}

.ghost-card {
  @apply border opacity-50 border-blue-500 bg-gray-200
}
</style>
