import{d as A,I as C,n as P,r as c,P as T,at as u,p as I,g as t,B as o,e as l,ad as h,az as U,v as m,F as M,j as i,_ as d}from"./index-7210a26e.js";import{u as j,a as S,G as V}from"./inventory-6fa4e920.js";const q=i(()=>d(()=>import("./FelDataTable-a2b4d2a6.js"),["assets/FelDataTable-a2b4d2a6.js","assets/index-7210a26e.js","assets/index-a67f0314.css"])),v=i(()=>d(()=>import("./FelDrawer-ca080e09.js"),["assets/FelDrawer-ca080e09.js","assets/index-7210a26e.js","assets/index-a67f0314.css"])),x=i(()=>d(()=>import("./FelModal-b8e55526.js"),["assets/FelModal-b8e55526.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),B=i(()=>d(()=>import("./StockReceiveForm-1b3936a6.js"),["assets/StockReceiveForm-1b3936a6.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/vue-multiselect.esm-e73a2a58.js","assets/array-096e3bee.js","assets/inventory-6fa4e920.js","assets/storage-5eb4a979.js","assets/setup-9fdcf636.js","assets/_queries-db036553.js","assets/user-08d5de87.js"])),N=i(()=>d(()=>import("./ProductDetail-89ae1f6c.js"),["assets/ProductDetail-89ae1f6c.js","assets/index-7210a26e.js","assets/index-a67f0314.css","assets/inventory-6fa4e920.js"])),H=A({name:"stock-listing",setup(e,R){const{withClientMutation:w,withClientQuery:_}=C(),r=j();r.fetchProducts({first:50,after:"",text:"",sortBy:["-uid"]});const a=P({product:{},quantity:0,stockLotUid:"",type:"",remarks:""}),f=c(!1),y=c([]),D=s=>{_(V,{productUid:s},"stockLots").then(p=>{y.value=p})};T(()=>a.product?.uid,(s,p)=>s&&D(s));const b=c(!1),g=c(!1),k=c({}),L=c([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Name",value:"stockItem.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Type",value:"name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Category",value:"stockItem.category.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Hazard",value:"stockItem.hazard.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Quantity",value:"quantity",sortable:!1,sortBy:"asc",hidden:!1},{name:"Description",value:"description",sortable:!1,sortBy:"asc",hidden:!1},{name:"Actions",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(s,p){return u("div",{class:"flex justify-start align-items-center gap-x-4"},[u("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none disabled:bg-gray-500",innerHTML:"+ Basket",disabled:s.quantity<1,onClick:()=>{a.product=s,a.quantity=0,f.value=!0}},[]),u("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none disabled:bg-gray-500",innerHTML:"+/- Adjust",disabled:s.quantity<1,onClick:()=>{a.product=s,a.quantity=0,b.value=!0}},[]),u("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:"View Detail",onClick:()=>{g.value=!0,k.value=s}},[])])}}]);let n=P({first:50,before:"",text:"",sortBy:["-uid"],filterAction:!1});return{tableColumns:L,inventoryStore:r,openDrawer:c(!1),openAddProduct:f,choiceProduct:a,openAdjustProduct:b,stockLots:y,openProductDetail:g,productDetailItem:k,filterProducts:s=>{n.first=50,n.before="",n.text=s.filterText,n.filterAction=!0,r.fetchProducts(n)},showMoreProducts:s=>{n.first=s.fetchCount,n.before=r.productsPaging?.pageInfo?.endCursor??"",n.text=s.filterText,n.filterAction=!1,r.fetchProducts(n)},countNone:I(()=>r.products?.length+" of "+r.productsPaging.totalCount+" products"),validateMinMax:s=>{},adjustStock:()=>{w(S,{payload:{productUid:a.product.uid,stockLotUid:a.stockLotUid,adjustmentType:a.type,adjust:a.quantity,remarks:a.remarks}},"createStockAjustment").then(s=>{})}}},render(){return t(M,null,[t("div",null,[t("button",{onClick:()=>this.openDrawer=!0,class:"px-4 my-2 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},[o("Receive Stock")])]),t(q,{columns:this.tableColumns,data:this.inventoryStore.products,toggleColumns:!1,loading:!1,paginable:!0,pageMeta:{fetchCount:10,hasNextPage:!1,countNone:this.countNone},searchable:!0,filterable:!1,selectable:!1,onOnSearch:e=>this.filterProducts(e),onOnPaginate:e=>this.showMoreProducts(e)},null),t(v,{show:this.openDrawer,onClose:()=>this.openDrawer=!1},{header:()=>"Receive Stock",body:()=>[t(B,{onClose:()=>this.openDrawer=!1},null)]}),t(v,{show:this.openProductDetail,onClose:()=>this.openProductDetail=!1},{header:()=>"Product Details",body:()=>[t(N,{product:this.productDetailItem,onClose:()=>this.openProductDetail=!1},null)]}),this.openAddProduct&&t(x,{onClose:()=>this.openAddProduct=!1,contentWidth:"w-1/4"},{header:()=>t("h3",null,[this.choiceProduct.product?.stockItem?.name,o(" ("),this.choiceProduct.product.name,o(")")]),body:()=>t("form",{action:"post",class:"p-1"},[t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700  text-nowrap"},[o("Product Lot")]),l(t("select",{class:"col-span-3 form-select block w-full mt-1","onUpdate:modelValue":e=>this.choiceProduct.stockLotUid=e},[t("option",null,null),this.stockLots?.map(e=>t("option",{key:e.uid,value:e.uid},[e.lotNumber,o(" ("),e.quantity,o(") ["),U(e.expiryDate,!1),o("]")]))]),[[h,this.choiceProduct.stockLotUid]])]),t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700 text-nowrap"},[o("Quantiy")]),l(t("input",{class:"col-span-3 form-input mt-1 block w-full",type:"number",onChange:this.validateMinMax,"onUpdate:modelValue":e=>this.choiceProduct.quantity=e,placeholder:"Name ..."},null),[[m,this.choiceProduct.quantity]])]),t("hr",null,null),t("button",{type:"button",onClick:()=>{this.inventoryStore.addToBasket(this.choiceProduct.product.uid,this.choiceProduct.stockLotUid,this.choiceProduct.quantity),this.openAddProduct=!1},class:"-mb-4 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline disabled:bg-gray-500",disabled:!this.choiceProduct.stockLotUid},[o("Add to basket")])])}),this.openAdjustProduct&&t(x,{onClose:()=>this.openAdjustProduct=!1,contentWidth:"w-1/4"},{header:()=>t("h3",null,[this.choiceProduct.product?.stockItem?.name,o(" ("),this.choiceProduct.product.name,o(")")]),body:()=>t("form",{action:"post",class:"p-1"},[t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700  text-nowrap"},[o("Product Lot")]),l(t("select",{class:"col-span-3 form-select block w-full mt-1","onUpdate:modelValue":e=>this.choiceProduct.stockLotUid=e},[t("option",null,null),this.stockLots?.map(e=>t("option",{key:e.uid,value:e.uid},[e.lotNumber]))]),[[h,this.choiceProduct.stockLotUid]])]),t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700"},[o("Adjustmet")]),l(t("select",{class:"col-span-3 form-select block w-full mt-1","onUpdate:modelValue":e=>this.choiceProduct.type=e},[t("option",{value:"lost"},[o("Lost")]),t("option",{value:"theft"},[o("Theft")]),t("option",{value:"transfer-out"},[o("Transfer Out")])]),[[h,this.choiceProduct.type]])]),t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700"},[o("Quantiy")]),l(t("input",{class:"col-span-3 form-input mt-1 block w-full",type:"number",onChange:this.validateMinMax,"onUpdate:modelValue":e=>this.choiceProduct.quantity=e,placeholder:"Name ..."},null),[[m,this.choiceProduct.quantity]])]),t("label",{class:"grid grid-cols-4 items-center gap-4 mb-4"},[t("span",{class:"col-span-1 text-gray-700"},[o("Remarks")]),l(t("textarea",{class:"col-span-3 form-input mt-1 block w-full",rows:"3","onUpdate:modelValue":e=>this.choiceProduct.remarks=e,placeholder:"Remarks ..."},null),[[m,this.choiceProduct.remarks]])]),t("hr",null,null),t("button",{type:"button",onClick:()=>{this.adjustStock(),this.openAdjustProduct=!1},class:"-mb-4 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline disabled:bg-gray-500",disabled:!this.choiceProduct.stockLotUid},[o("Adjust")])])})])}});export{H as InventoryListing,H as default};