import{d as g,a8 as v,I as k,P as w,r as u,n as I,g as e,A as s,e as n,v as r,j as V,_ as A}from"./index-48799f0c.js";import{u as L,m as M,n as S}from"./inventory-8fabf1e7.js";const D=V(()=>A(()=>import("./FelModal-12de65c9.js"),["assets/FelModal-12de65c9.js","assets/index-48799f0c.js","assets/index-c2286288.css","assets/FelModal-780aeea9.css"])),_=g({name:"StockItemDetail",props:{stockItem:{type:Object}},setup(t,C){const{stockItem:i}=v(t);console.log(i.value);const m=L(),{withClientMutation:p}=k();w(()=>t.stockItem?.uid,async(a,l)=>{a&&await m.fetchItemVariants(a)});let c=u(!1),b=u(""),o=I({});const d=u(!0);function f(){const a={...o};p(M,{stockItemUid:i?.value?.uid,payload:a},"createStockItemVariant").then(l=>m.addItemVariant(l))}function h(){const a={name:o.name,description:o.description,minimumLevel:o.minimumLevel,maximumLevel:o.maximumLevel};p(S,{uid:o.uid,payload:a},"updateStockItemVariant").then(l=>m.updateItemVariant(l))}function x(a,l){d.value=a,b.value=(a?"CREATE":"EDIT")+" A VARIANT",c.value=!0,a?Object.assign(o,{}):Object.assign(o,{...l})}function y(){d.value===!0&&f(),d.value===!1&&h(),c.value=!1}return{form:o,FormManager:x,saveForm:y,showModal:c,formTitle:b,stockItem:i}},render(){return e("div",{class:"container w-full my-4"},[e("section",null,[e("h3",{class:"text-xl font-semibold text-gray-700"},[this.stockItem?.name]),e("p",{class:"mt-2 italic leading-3 text-gray-500"},[this.stockItem?.description])]),e("hr",{class:"mt-8 "},null),e("div",{className:"py-1 flex justify-between items-center"},[e("h3",{class:"text-xl font-semibold"},[s("Item Variants")]),e("button",{onClick:()=>this.FormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[s("Add New "),this.stockItem?.name])]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Variant Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[s("Description")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"},null)])]),e("tbody",{class:"bg-white"},[this.stockItem?.variants?.map(t=>e("tr",{key:t?.uid},[e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"flex items-center"},[e("div",{class:"text-sm leading-5 text-gray-800"},[t?.name])])]),e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"text-sm leading-5 text-sky-800"},[t?.description])]),e("td",{class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},[e("button",{onClick:()=>this.FormManager(!1,t),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[s("Edit")])])]))])])])]),this.showModal?e(D,{onClose:()=>this.showModal=!1,contentWidth:"w-1/4"},{header:()=>e("h3",null,[this.formTitle]),body:()=>e("form",{action:"post",class:"p-1"},[e("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[s("Variant Name")]),n(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.name=t,placeholder:"Name ..."},null),[[r,this.form.name]])]),e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[s("Description")]),n(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.description=t,placeholder:"Description ..."},null),[[r,this.form.description]])]),e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[s("Minimum Level")]),n(e("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.minimumLevel=t,default:0},null),[[r,this.form.minimumLevel]])]),e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[s("Maximum Level")]),n(e("input",{type:"number",class:"form-input mt-1 block w-full","onUpdate:modelValue":t=>this.form.maximumLevel=t,default:0},null),[[r,this.form.maximumLevel]])])]),e("hr",null,null),e("button",{type:"button",onClick:()=>this.saveForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[s("Save Form")])])}):null])}});export{_ as StockItemDetail,_ as default};