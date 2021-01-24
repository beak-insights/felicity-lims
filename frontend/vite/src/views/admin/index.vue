<template>
  <div class="px-6">
    <h4>Felicity Configurations</h4>
    <hr>

    <div class="container  mx-auto w-full my-4">
        <h5>Laboratory Setup</h5>
        <ul class="grid grid-cols-12 gap-4 my-2.5">
            <li class="col-span-4 border-gray-400">
                <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="mr-4">
                       <font-awesome-icon icon="cog" />
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            1. Country, Provinces, Districts
                        </div>
                    </div>
                </div>
            </li>
            <li class="col-span-4 border-gray-400">
                <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="mr-4">
                       <font-awesome-icon icon="cog" />
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            4. Clients
                        </div>
                    </div>
                </div>
            </li>
            <li class="col-span-4 border-gray-400">
                <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="mr-4">
                       <font-awesome-icon icon="cog" />
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            5. Laboratory, Departments
                        </div>
                    </div>
                </div>
            </li>
            <li class="col-span-4 border-gray-400">
                <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="mr-4">
                       <font-awesome-icon icon="cog" />
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            6. Users, Groups
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <hr>
    </div>

    <div class="container  mx-auto w-full my-4">
      <h5>Acquired</h5>
      <ul class="grid grid-cols-12 gap-4 my-2.5">
          <li class="col-span-4 border-gray-400">
              <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                  <div class="mr-4">
                      <font-awesome-icon icon="cog" />
                  </div>
                  <div class="flex-1 pl-1 md:mr-16">
                      <div class="font-medium dark:text-white">
                          1. Suppliers
                      </div>
                  </div>
              </div>
          </li>
          <li class="col-span-4 border-gray-400">
              <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                  <div class="mr-4">
                      <font-awesome-icon icon="cog" />
                  </div>
                  <div class="flex-1 pl-1 md:mr-16">
                      <div class="font-medium dark:text-white">
                          2. Instruments, Methods
                      </div>
                  </div>
              </div>
          </li>
      </ul>
      <hr>
    </div>



        <div class="container  mx-auto w-full my-4">
        <h5>Analyses Settings</h5>
        <ul class="grid grid-cols-12 gap-4 my-2.5">
            <li class="col-span-4 border-gray-400">
                <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="mr-4">
                       <font-awesome-icon icon="cog" />
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            1. Sample Types, Containers
                        </div>
                    </div>
                </div>
            </li>
            <li class="col-span-4 border-gray-400">
                <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="mr-4">
                       <font-awesome-icon icon="cog" />
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            2. Tests, Categories, Profiles
                        </div>
                    </div>
                </div>
            </li>
            <li class="col-span-4 border-gray-400">
                <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="mr-4">
                       <font-awesome-icon icon="cog" />
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            3. WorkSheet Templates
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <hr>
    </div>

    <div class="container  mx-auto w-full my-4">
      <h5>Publication</h5>
      <ul class="grid grid-cols-12 gap-4 my-2.5">
          <li class="col-span-4 border-gray-400">
              <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                  <div class="mr-4">
                      <font-awesome-icon icon="cog" />
                  </div>
                  <div class="flex-1 pl-1 md:mr-16">
                      <div class="font-medium dark:text-white">
                          1. Email, SMS
                      </div>
                  </div>
              </div>
          </li>
      </ul>
      <hr>
    </div>


  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "admin",
  setup() {
    return {};
  },
});
</script>