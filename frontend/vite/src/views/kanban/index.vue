<template>
    <div class="flex justify-center">
        <div class="min-h-screen flex overflow-x-scroll py-12">
            <div v-for="column in columns" :key="column.title" class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4">
                <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{column.title}}</p>
                <draggable 
                :list="column.tasks" 
                group="tasks" 
                ghost-class="ghost-card" 
                item-key="column.title"
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
                        <button @click="addPeople">Add</button>
                    </template>
                </draggable>
            </div>
        </div>
    </div>


  <!-- Task Modal -->
  <modal v-if="showModal" @close="showModal = false">
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

</template>

<script>
import modal from '../_components/SimpleModal.vue';
import draggable from "vuedraggable";
import TaskCard from "../_components/TaskCard.vue";
import { defineComponent, ref, reactive, computed } from 'vue';
export default defineComponent({
  name: "Kanban-Tasks",
  components: {
    TaskCard,
    draggable,
    modal
  },
  setup() {
      let showModal = ref(false);
      let movedObjectsIds = ref([]);
      let moveTimeOut = ref(null);

      // Modal Vars
      let modalTitle = ref("Default")

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

      return { 
          log, 
          checkMove,
          showModal,
          viewTask,
          modalTitle
        }
  },
  data() {
    return {
      columns: [
        {
          title: "Backlog",
          tasks: [
            {
              id: 1,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 2,
              title: "Provide documentation on integrations",
              date: "Sep 12"
            },
            {
              id: 3,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 4,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 5,
              title: "Test checkout flow",
              date: "Sep 15",
              type: "QA"
            }
          ]
        },
        {
          title: "In Progress",
          tasks: [
            {
              id: 6,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 7,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 8,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Backend"
            }
          ]
        },
        {
          title: "Review",
          tasks: [
            {
              id: 9,
              title: "Provide documentation on integrations",
              date: "Sep 12"
            },
            {
              id: 10,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 11,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 12,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 13,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            }
          ]
        },
        {
          title: "Done",
          tasks: [
            {
              id: 14,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 15,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 16,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            }
          ]
        }
      ]
    };
  }
});
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}

.ghost-card {
  @apply border opacity-50 border-blue-500 bg-gray-200
}
</style>
