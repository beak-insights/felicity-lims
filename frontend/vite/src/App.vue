<template>
  <component :is="layout">
    <!-- <div class="text-center">Flash Messages will come here.</div> -->
    <router-view />
  </component>
</template>

<script lang="ts">
import Swal from 'sweetalert2';
import { Notyf } from 'notyf';
import { defineComponent, ref, computed, watch, inject } from 'vue';
import { useRouter } from 'vue-router';
import { mapGetters, mapActions, useStore } from "vuex";
const defaultLayout = 'default';
export default defineComponent({
  setup(props, context) {
    const { currentRoute } = useRouter();
    const store = useStore();

    const notyf = new Notyf({ // https://github.com/caroso1222/notyf
        duration: 5000,
        position: {
          x: 'left',
          y: 'bottom',
        },
        types: [
          {
            type: 'warning',
            background: 'orange',
            icon: {
              className: 'material-icons',
              tagName: 'i',
              text: 'warning'
            }
          },
          {
            type: 'error',
            background: 'indianred',
            duration: 2000,
            dismissible: true
          }
        ]
      });
    
    const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`);

    notyf.success('Felicity LIMS is Next Level :)');

    const fireSuccess = (options) => {
      Swal.fire({
        title: 'Yay!',
        text: options.message,
        icon: options.icon,
        confirmButtonText: 'Cool'
      })
    }

    const archiveVehicle = async () => {
      try {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, archive it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Archive!',
              'Your file has been archived.',
              'success'
            )
            // do something after user confirms ...
          }
        })
      } catch (error) {
        logger.log(error)
      }
    }

    watch(store.state.toast.alert, (current, prev) => {
      fireSuccess(current)
      // archiveVehicle()
    });

    return {
      layout,
    };
  },
});
</script>