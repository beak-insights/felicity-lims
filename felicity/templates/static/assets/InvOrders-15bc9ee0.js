import{M as U,K as R,d as _,I as P,r as f,n as y,at as x,p as I,g as e,F as c,A as s,e as n,ad as N,x as m,v as k,j as w,_ as O}from"./index-48799f0c.js";import{u as A,I as L,E as T,S as q,b as B}from"./inventory-8fabf1e7.js";import{u as M}from"./setup-0815b6ec.js";import{a as p,h as E,o as b}from"./constants-9cf3ef05.js";import"./_queries-16a4477d.js";const V=Object.freeze(Object.defineProperty({__proto__:null,actions:p,canAccessPage:U,hasRights:E,objects:b,pages:R},Symbol.toStringTag,{value:"Module"})),j=w(()=>O(()=>import("./FelDrawer-6b3fd444.js"),["assets/FelDrawer-6b3fd444.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),F=w(()=>O(()=>import("./FelDataTable-24c349ea.js"),["assets/FelDataTable-24c349ea.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),K=_({name:"stock-orders",setup(t,u){const{withClientQuery:v,withClientMutation:h}=P(),S=M(),o=A();o.fetchStockOrders({first:50,after:"",text:"",status:"preparation",sortBy:["-uid"]});const i=f(!1),d=y({order:{},products:[],departmentUid:""}),D=async r=>{await v(B,{stockOrderUid:r},"stockOrderProductAll").then(l=>{d.products=l?.map(g=>({...g,issue:g.quantity}))})},C=f([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Order Number",value:"orderNumber",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(r){return x("span",{innerHTML:r?.orderNumber,onClick:()=>{d.order=r,d.departmentUid=r?.department?.uid,D(r?.uid),i.value=!0}},[])}},{name:"Department",value:"department.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Orderer",value:"orderBy",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(r){return x("span",{innerHTML:`${r?.orderBy?.firstName??"---"} ${r?.orderBy?.lastName??""}`},[])}},{name:"Issued By",value:"status",sortable:!1,sortBy:"asc",hidden:!1},{name:"Status",value:"status",sortable:!1,sortBy:"asc",hidden:!1}]);let a=y({first:50,before:"",text:"",sortBy:["-uid"],filterAction:!1,status:"preperation"});return{shield:V,tableColumns:C,inventoryStore:o,setupStore:S,slectedStockOrder:d,openDrawer:i,stockOrderParams:a,filterOptions:[{name:"All",value:""},{name:"Preperation",value:"preperation"},{name:"Submitted",value:"submitted"},{name:"Processed",value:"processed"}],filterStockOrders:r=>{a.first=50,a.before="",a.text=r.filterText,a.status=r.filterStatus,a.filterAction=!0,o.fetchStockOrders(a)},showMoreStockOrders:r=>{a.first=r.fetchCount,a.before=o.stockOrdersPaging?.pageInfo?.endCursor??"",a.text=r.filterText,a.status=r.filterStatus,a.filterAction=!1,o.fetchStockOrders(a)},countNone:I(()=>o.stockOrders?.length+" of "+o.stockOrdersPaging.totalCount+" orders"),issueOrder:()=>{const r=[];for(const l of d.products)r.push({productUid:l.product.uid,stockLotUid:l.stockLot?.uid,quantity:l.issue,remarks:"issue stock"});h(L,{uid:d?.order?.uid,payload:r},"issueStockOrder").then(l=>{o.issueStockOrder(l),i.value=!1})},removeOrderProduct:r=>{d.products=[...d.products.filter(l=>l.product.uid!==r)]},updateOrder:()=>{const r=[];for(const l of d.products)r.push({productUid:l.product.uid,stockLotUid:l.stockLot?.uid,quantity:l.quantity,remarks:""});h(T,{uid:d.order.uid,payload:{orderProducts:r,departmentUid:d.departmentUid}},"updateStockOrder").then(l=>{o.updateStockOrder(l?.stockOrder),i.value=!1})},submitOrder:()=>{h(q,{uid:d.order.uid},"submitStockOrder").then(r=>{o.updateStockOrder(r),i.value=!1})}}},render(){return e("div",{class:"mt-2"},[e(F,{columns:this.tableColumns,data:this.inventoryStore.stockOrders,toggleColumns:!1,loading:!1,paginable:!0,pageMeta:{fetchCount:10,hasNextPage:!1,countNone:this.countNone},searchable:!0,filterable:!0,filterMeta:{defaultFilter:this.stockOrderParams.status,filters:this.filterOptions},selectable:!1,onOnSearch:t=>this.filterStockOrders(t),onOnPaginate:t=>this.showMoreStockOrders(t)},null),e(j,{contentWidth:"w-1/2",show:this.openDrawer,onClose:()=>this.openDrawer=!1},{header:()=>`Order: ${this.slectedStockOrder?.order.orderNumber}`,body:()=>e(c,null,[this.slectedStockOrder?.order?.status=="preparation"&&e(c,null,[e("div",null,[s("Status: "),this.slectedStockOrder?.order?.status]),e("hr",null,null),e("label",{class:"flex justify-between items-center gap-4 mb-4"},[e("span",{class:"text-gray-700"},[s("Department")]),n(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":t=>this.slectedStockOrder.departmentUid=t},[this.setupStore.departments.map(t=>e("option",{value:t.uid},[t.name]))]),[[N,this.slectedStockOrder.departmentUid]])]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-2 mb-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Product")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Lot")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Qty")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null)])]),e("tbody",{class:"bg-white"},[this.slectedStockOrder.products.map(t=>n(e("tr",{key:t.product.uid},[e("td",null,[e("p",null,[t.product.name])]),e("td",null,[e("p",null,[t.stockLot.lotNumber,s(" ("),t.stockLot.quantity,s(")")])]),e("td",{class:"px-1 py-1"},[n(e("input",{class:"form-input",type:"number","onUpdate:modelValue":u=>t.quantity=u,placeholder:""},null),[[k,t.quantity]])]),e("td",{class:"px-1 whitespace-no-wrap"},[e("button",{type:"button",class:"w-16 bg-sky-800 text-white rounded-sm leading-none px-2 py-1",onClick:()=>this.removeOrderProduct(t.product.uid)},[s("Remove")])])]),[[m("motion-slide-right")]]))])])])]),e("hr",null,null),e("div",{class:"my-2"},[e("p",{class:"italic text-red-400 text-xs"},[s("If you made any changes here please update order first before finalising else your changes wont be saved")])]),e("hr",null,null),e("div",{class:"flex justify-start gap-x-4"},[e("button",{type:"button",onClick:()=>this.updateOrder(),class:"mt-4 bg-sky-800 text-white rounded-sm leading-none px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed",disabled:!this.shield.hasRights(p.ORDER,b.PRODUCT)},[s("Update")]),e("button",{type:"button",onClick:()=>this.submitOrder(),class:"mt-4 bg-sky-800 text-white rounded-sm leading-none px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed",disabled:!this.shield.hasRights(p.ORDER,b.PRODUCT)},[s("Finalize")])])]),["pending","submitted"].includes(this.slectedStockOrder?.order?.status??"")&&e(c,null,[e("div",null,[s("Status: "),this.slectedStockOrder?.order?.status]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4 mb-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Product")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Lot")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Available")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Requested")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Issue")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null)])]),e("tbody",{class:"bg-white"},[this.slectedStockOrder.products.map(t=>n(e("tr",{key:t.uid},[e("td",null,[e("p",null,[t.product.name])]),e("td",null,[e("p",null,[t.stockLot.lotNumber])]),e("td",null,[e("p",null,[t.stockLot.quantity])]),e("td",null,[e("p",null,[t.quantity])]),e("td",{class:"px-1 py-1 whitespace-no-wrap"},[e("label",{class:"block"},[n(e("input",{class:"form-input",type:"number","onUpdate:modelValue":u=>t.issue=u,placeholder:""},null),[[k,t.issue]])])])]),[[m("motion-slide-right")]]))])])])]),e("hr",null,null),e("button",{type:"button",class:"mt-4 bg-sky-800 text-white rounded-sm leading-none px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed",disabled:!this.shield.hasRights(p.ISSUE,b.PRODUCT),onClick:()=>this.issueOrder()},[s("Issue Order")])]),["processed"].includes(this.slectedStockOrder?.order?.status??"")&&e(c,null,[e("div",null,[s("Status: "),this.slectedStockOrder?.order?.status]),e("hr",null,null),e("h4",null,[s("Request Details")]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4 mb-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},[s("Product Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Available")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Requested")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"},null)])]),e("tbody",{class:"bg-white"},[this.slectedStockOrder.products.map(t=>n(e("tr",{key:t.uid},[e("td",null,[e("p",null,[t.product.name])]),e("td",null,[e("p",null,[t.product?.remaining])]),e("td",null,[e("p",null,[t.quantity])])]),[[m("motion-slide-right")]]))])])])]),e("hr",null,null)])]),footer:()=>[]})])}});export{K as InventoryOrders,K as default};