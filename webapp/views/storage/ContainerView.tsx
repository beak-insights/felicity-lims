import { defineComponent, computed, ref, defineAsyncComponent } from 'vue';
import { useStorageStore } from '@/stores/storage';

const ContainerColumn = defineAsyncComponent(
    () => import("./ContainerColumn")
)
const ContainerGrid = defineAsyncComponent(
    () => import("./ContainerGrid")
)

const ContainerView = defineComponent({
    name: 'contaner-view',
    setup(props, ctx) {
        const storageStore = useStorageStore();

        let currentTab = ref('column-view');

        const tabs = computed(() => {
            const cont = storageStore.getStorageContainer;
            return cont?.grid ? ['column-view', 'grid-view'] : ['column-view'];
        });

        return {
            currentTab,
            tabs,
            storageContainer: computed(() => storageStore.getStorageContainer),
        };
    },
    render() {
        return (
            <>
                <div class="grid grid-cols-2 mt-2">
                    <div class="col-span-1">
                        <div class="flex">
                            <span class="text-gray-600 text-md font-bold w-52">Name:</span>
                            <span class="text-gray-600 text-md">{this.storageContainer?.name}</span>
                        </div>
                        <div class="flex">
                            <span class="text-gray-600 text-md font-bold w-52">Layout:</span>
                            <span class="text-gray-600 text-md">{this.storageContainer?.grid ? 'grid' : 'column'}</span>
                            {this.storageContainer?.grid ? (
                                <span class="ml-2 text-gray-600 text-md italic bg-slate-400 px-1 rounded-sm">
                                    {this.storageContainer?.rowWise ? 'by-row' : 'by-column'}
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div class="flex">
                            <span class="text-gray-600 text-md font-bold w-52">Slots:</span>
                            <span class="text-gray-600 text-md">{this.storageContainer?.slots}</span>
                        </div>
                        <div class="flex mt-2">
                            <span class="text-gray-600 text-md font-bold w-52">Empty Slots:</span>
                            <span class="text-gray-600 text-md mr-2">
                                {(this.storageContainer?.slots ?? 0) - (this.storageContainer?.samples?.length ?? 0)}
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="mt-4">
                        <nav class="bg-white shadow-sm my-2">
                            <div class="-mb-px flex justify-start" role="tablist">
                                {this.tabs.map(tab => {
                                    return (
                                        <a
                                            key={tab}
                                            class={[
                                                'no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200',
                                                { 'tab-active': this.currentTab === tab },
                                            ]}
                                            onClick={() => (this.currentTab = tab)}
                                            role="tab"
                                            aria-selected={this.currentTab === tab}
                                            aria-controls={`${tab}-panel`}
                                        >
                                            {tab}
                                        </a>
                                    );
                                })}
                            </div>
                        </nav>
                        {this.currentTab === 'column-view' ? <ContainerColumn /> : null}
                        {this.currentTab === 'grid-view' ? <ContainerGrid /> : null}
                    </div>
                </div>
            </>
        );
    },
});

export { ContainerView };
export default ContainerView