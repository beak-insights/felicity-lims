<template>
    <div class="flex justify-start">
        <div class="h-tasks flex overflow-x-scroll py-2">
            <div v-for="listing in board?.boardListings" :key="listing?.title" class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4">
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
         <div><span class="italic">in &rarr;</span> BackLog</div>
    </template>
    <template v-slot:body>
      <div class="grid grid-cols-3 gap-4">
          <section class="col-span-2">
            <div>
                <span>Complete</span>
                <span class="mx-2">@aurthurm</span>
            </div>
            <hr>
            <h3 class="text-xl font-medium my-2">{{ modalTitle }}</h3>
            <hr>
            <div class="text-sm font-light my-2 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quod, Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat harum at tenetur eveniet dolore repellat 
                voluptatum veritatis dolorum molestias ipsam! Ratione nam ducimus, deserunt optio quidem cum est. Amet, iure!
            </div>
            <hr>
            <h4 class="text-xl font-medium my-2">+ CheckList Item</h4>
            <div>
                <span>x</span>
                <span class="mx-2">Create BarCodes</span>
                <span>@melisa</span>
            </div>
            <div>
                <span>x</span>
                <span class="mx-2">Write SOP</span>
                <span>@melisa</span>
            </div>
            <hr>
            <h4 class="text-xl font-medium my-2">Comments</h4>
            <div>
                <label class="block mb-2">
                    <textarea
                    cols="2"
                    class="form-input mt-1 block w-full"
                    placeholder="Description ..."
                    />
                </label>
                <div>+ Add</div>
            </div>
            <div>
                <span>x</span>
                <span class="mx-2">Write SOP</span>
                <span>@melisa</span>
            </div>
          </section>
          <section class="col-span-1">
              <div>Due Date</div>
              <div>Badges</div>
              <div>Members</div>
              <div>Stream</div>
              <div>Move</div>
              <div>Diblicate</div>
              <div>Delete</div>
              <div>Archive</div>
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
