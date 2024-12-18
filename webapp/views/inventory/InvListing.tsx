import { computed, watch, defineComponent, reactive, ref, h, defineAsyncComponent } from 'vue';
import { useInventoryStore } from '@/stores/inventory';
import { IStockLot, IStockProduct } from '@/models/inventory';
import  useApiUtil  from '@/composables/api_util';
import { AddStockAdjustmentDocument, AddStockAdjustmentMutation, AddStockAdjustmentMutationVariables } from '@/graphql/operations/inventory.mutations';
import { GetAllStockLotsDocument, GetAllStockLotsQuery, GetAllStockLotsQueryVariables } from '@/graphql/operations/inventory.queries';
import { parseDate } from '@/utils/helpers';

const DataTable = defineAsyncComponent(
    () => import('@/components/ui/datatable/FelDataTable.vue')
)
const Drawer = defineAsyncComponent(
    () => import( '@/components/ui/FelDrawer.vue')
)
const Modal = defineAsyncComponent(
    () => import('@/components/ui/FelModal.vue')
)
const StockReceiveForm = defineAsyncComponent(
    () => import('./StockReceiveForm.vue')
)
const ProductDetail = defineAsyncComponent(
    () => import('./ProductDetail')
)

const InventoryListing = defineComponent({
    name: 'stock-listing',
    setup(props, ctx) {
        const { withClientMutation, withClientQuery } = useApiUtil();
        const inventoryStore = useInventoryStore();
        inventoryStore.fetchProducts({
            first: 50,
            after: '',
            text: '',
            sortBy: ['-uid'],
        });

        const choiceProduct = reactive({
            product: {} as IStockProduct,
            quantity: 0,
            stockLotUid: "",
            type: "",
            remarks: ""
        });
        const openAddProduct = ref(false);

        const stockLots = ref([]);
        const fetchLots = (productUid: string) => {
            withClientQuery<GetAllStockLotsQuery, GetAllStockLotsQueryVariables>(GetAllStockLotsDocument, { productUid }, 'stockLots').then(result => {
                stockLots.value = result;
            })
        }

        watch(() => choiceProduct.product?.uid, (itemUid, _) => (itemUid && fetchLots(itemUid)))
        
        const openAdjustProduct = ref(false);
        const openProductDetail = ref(false);
        const productDetailItem = ref({} as IStockProduct);
        
        const tableColumns = ref([
            {
                name: 'UID',
                value: 'uid',
                sortable: true,
                sortBy: 'asc',
                defaultSort: true,
                showInToggler: false,
                hidden: true,
            },
            {
                name: 'Name',
                value: 'stockItem.name',
                sortable: false,
                sortBy: 'asc',
                hidden: false,
            },
            {
                name: 'Type',
                value: 'name',
                sortable: false,
                sortBy: 'asc',
                hidden: false,
            },
            {
                name: 'Category',
                value: 'stockItem.category.name',
                sortable: false,
                sortBy: 'asc',
                hidden: false,
            },
            {
                name: 'Hazard',
                value: 'stockItem.hazard.name',
                sortable: false,
                sortBy: 'asc',
                hidden: false,
            },
            {
                name: 'Quantity',
                value: 'quantity',
                sortable: false,
                sortBy: 'asc',
                hidden: false,
            },
            {
                name: 'Description',
                value: 'description',
                sortable: false,
                sortBy: 'asc',
                hidden: false,
            },
            {
                name: 'Actions',
                value: '',
                sortable: false,
                sortBy: 'asc',
                hidden: false,
                customRender: function (product, _) {
                    return h(
                        'div',
                        {
                            class: 'flex justify-start align-items-center gap-x-4',
                        },
                        [
                            h(
                                'button',
                                {
                                    type: 'button',
                                    class: 'bg-sky-800 text-white py-1 px-2 rounded-sm leading-none disabled:bg-gray-500',
                                    innerHTML: '+ Basket',
                                    disabled: product.quantity < 1,
                                    onClick: () => {
                                        choiceProduct.product = product;
                                        choiceProduct.quantity = 0;
                                        openAddProduct.value = true;
                                    },
                                },
                                []
                            ),
                            h(
                                'button',
                                {
                                    type: 'button',
                                    class: 'bg-sky-800 text-white py-1 px-2 rounded-sm leading-none disabled:bg-gray-500',
                                    innerHTML: '+/- Adjust',
                                    disabled: product.quantity < 1,
                                    onClick: () => {
                                        choiceProduct.product = product;
                                        choiceProduct.quantity = 0;
                                        openAdjustProduct.value = true;
                                    },
                                },
                                []
                            ),
                            h(
                                'button',
                                {
                                    type: 'button',
                                    class: 'bg-sky-800 text-white py-1 px-2 rounded-sm leading-none',
                                    innerHTML: 'View Detail',
                                    onClick: () => {
                                        openProductDetail.value = true;
                                        productDetailItem.value = product;
                                    },
                                },
                                []
                            ),
                        ]
                    );
                },
            },
        ]);

        let productParams = reactive({
            first: 50,
            before: '',
            text: '',
            sortBy: ['-uid'],
            filterAction: false,
        });

        return {
            tableColumns,
            inventoryStore,
            openDrawer: ref(false),
            openAddProduct,
            choiceProduct,
            openAdjustProduct,
            stockLots,
            openProductDetail,
            productDetailItem,
            filterProducts: (opts: any) => {
                productParams.first = 50;
                productParams.before = '';
                productParams.text = opts.filterText;
                productParams.filterAction = true;
                inventoryStore.fetchProducts(productParams);
            },
            showMoreProducts: (opts: any) => {
                productParams.first = opts.fetchCount;
                productParams.before = inventoryStore.productsPaging?.pageInfo?.endCursor ?? '';
                productParams.text = opts.filterText;
                productParams.filterAction = false;
                inventoryStore.fetchProducts(productParams);
            },
            countNone: computed(() => inventoryStore.products?.length + ' of ' + inventoryStore.productsPaging.totalCount + ' products'),
            validateMinMax: event => {
                // const value = Math.max(0, Math.min(choiceProduct.product.remaining ?? 0, Number(event.target.value)));
                // choiceProduct.quantity = value;
            },
            adjustStock: () => {
                withClientMutation<AddStockAdjustmentMutation, AddStockAdjustmentMutationVariables>(AddStockAdjustmentDocument,
                    {
                      payload: {
                        productUid: choiceProduct.product.uid,
                        stockLotUid: choiceProduct.stockLotUid,
                        adjustmentType: choiceProduct.type,
                        adjust: choiceProduct.quantity,
                        remarks: choiceProduct.remarks
                      }
                    },
                    'createStockAjustment'
                ).then(result => {
                });
            },
        };
    },
    render() {
        return (
            <>
                <div>
                    <button
                        onClick={() => (this.openDrawer = true)}
                        class="px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"
                    >
                        Receive Stock
                    </button>
                </div>
                <DataTable
                    columns={this.tableColumns}
                    data={this.inventoryStore.products}
                    toggleColumns={false}
                    loading={false}
                    paginable={true}
                    pageMeta={{
                        fetchCount: 10,
                        hasNextPage: false,
                        countNone: this.countNone,
                    }}
                    searchable={true}
                    filterable={false}
                    selectable={false}
                    onOnSearch={x => this.filterProducts(x)}
                    onOnPaginate={x => this.showMoreProducts(x)}
                ></DataTable>
                {/* Drawer */}
                <Drawer show={this.openDrawer} onClose={() => (this.openDrawer = false)}>
                    {{
                        header: () => 'Receive Stock',
                        body: () => [<StockReceiveForm onClose={() => (this.openDrawer = false)} />],
                    }}
                </Drawer>
                {/* Drawer */}
                <Drawer show={this.openProductDetail} onClose={() => (this.openProductDetail = false)}>
                    {{
                        header: () => 'Product Details',
                        body: () => [<ProductDetail product={this.productDetailItem} onClose={() => (this.openProductDetail = false)} />],
                    }}
                </Drawer>
                {this.openAddProduct && (
                    <Modal onClose={() => (this.openAddProduct = false)} contentWidth="w-1/4">
                        {{
                            header: () => <h3>{this.choiceProduct.product?.stockItem?.name} ({this.choiceProduct.product.name})</h3>,
                            body: () => {
                                return (
                                    <form action="post" class="p-1">
                                        <label class="grid grid-cols-4 items-center gap-4 mb-4">
                                            <span class="col-span-1 text-gray-700  text-nowrap">Product Lot</span>
                                            <select class="col-span-3 form-select block w-full mt-1" v-model={this.choiceProduct.stockLotUid}>
                                            <option></option>
                                            {this.stockLots?.map((lot: IStockLot) => (<option key={lot.uid} value={lot.uid}>
                                                {lot.lotNumber} ({lot.quantity}) [{parseDate(lot.expiryDate, false)}]
                                            </option>))}
                                            </select>
                                        </label>
                                        <label class="grid grid-cols-4 items-center gap-4 mb-4">
                                            <span class="col-span-1 text-gray-700 text-nowrap">Quantiy</span>
                                            <input
                                                class="col-span-3 form-input mt-1 block w-full"
                                                type="number"
                                                onChange={this.validateMinMax}
                                                v-model={this.choiceProduct.quantity}
                                                placeholder="Name ..."
                                            />
                                        </label>
                                        <hr />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                this.inventoryStore.addToBasket(
                                                    this.choiceProduct.product.uid,
                                                    this.choiceProduct.stockLotUid,
                                                    this.choiceProduct.quantity
                                                );
                                                this.openAddProduct = false;
                                            }}
                                            class="-mb-4 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                                            disabled={!this.choiceProduct.stockLotUid}>
                                            Add to basket
                                        </button>
                                    </form>
                                );
                            },
                        }}
                    </Modal>
                )}
                {this.openAdjustProduct && (
                    <Modal onClose={() => (this.openAdjustProduct = false)} contentWidth="w-1/4">
                        {{
                            header: () => <h3>{this.choiceProduct.product?.stockItem?.name} ({this.choiceProduct.product.name})</h3>,
                            body: () => {
                                return (
                                    <form action="post" class="p-1">
                                        <label class="grid grid-cols-4 items-center gap-4 mb-4">
                                            <span class="col-span-1 text-gray-700  text-nowrap">Product Lot</span>
                                            <select class="col-span-3 form-select block w-full mt-1" v-model={this.choiceProduct.stockLotUid}>
                                            <option></option>
                                            {this.stockLots?.map((lot: IStockLot) => (<option key={lot.uid} value={lot.uid}>{lot.lotNumber}</option>))}
                                            </select>
                                        </label>
                                        <label class="grid grid-cols-4 items-center gap-4 mb-4">
                                            <span class="col-span-1 text-gray-700">Adjustmet</span>
                                            <select 
                                            class="col-span-3 form-select block w-full mt-1" 
                                            v-model={this.choiceProduct.type}
                                            >
                                                <option value="lost">Lost</option>
                                                <option value="theft">Theft</option>
                                                <option value="transfer-out">Transfer Out</option>
                                            </select>
                                        </label>
                                        <label class="grid grid-cols-4 items-center gap-4 mb-4">
                                            <span class="col-span-1 text-gray-700">Quantiy</span>
                                            <input
                                                class="col-span-3 form-input mt-1 block w-full"
                                                type="number"
                                                onChange={this.validateMinMax}
                                                v-model={this.choiceProduct.quantity}
                                                placeholder="Name ..."
                                            />
                                        </label>
                                        <label class="grid grid-cols-4 items-center gap-4 mb-4">
                                            <span class="col-span-1 text-gray-700">Remarks</span>
                                            <textarea
                                                class="col-span-3 form-input mt-1 block w-full"
                                                rows="3"
                                                v-model={this.choiceProduct.remarks}
                                                placeholder="Remarks ..."
                                            ></textarea>
                                        </label>
                                        <hr />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                this.adjustStock()
                                                this.openAdjustProduct = false;
                                            }}
                                            class="-mb-4 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                                            disabled={!this.choiceProduct.stockLotUid}>
                                            Adjust
                                        </button>
                                    </form>
                                );
                            },
                        }}
                    </Modal>
                )}
            </>
        );
    },
});

export { InventoryListing };
export default InventoryListing