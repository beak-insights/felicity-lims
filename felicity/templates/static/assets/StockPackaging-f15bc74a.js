import{d as f,bp as k,r as d,C as y,D as x,g as e,H as r,e as v,v as w,j as P,_ as C,O as A}from"./index-2a6c9271.js";import{f as S,g as _}from"./inventory.mutations-6db1ac57.js";const T=P(()=>C(()=>import("./SimpleModal-0c0664c5.js"),["assets/SimpleModal-0c0664c5.js","assets/index-2a6c9271.js","assets/index-88806377.css","assets/SimpleModal-f645a074.css"])),E=f({name:"stock-packaging",setup(a,M){const n=k(),{withClientMutation:c}=A();let l=d(!1),u=d(""),o=y({});const i=d(!0);n.fetchPackages();const g=x(()=>n.getPackages);function m(){const t={...o};c(S,{payload:t},"createStockPackaging").then(s=>n.addPackaging(s))}function p(){const t={name:o.name};c(_,{uid:o.uid,payload:t},"updateStockPackaging").then(s=>n.updatePackaging(s))}function b(t,s){i.value=t,u.value=(t?"CREATE":"EDIT")+" STOCK PACKAGING",l.value=!0,t?Object.assign(o,{}):Object.assign(o,{...s})}function h(){i.value===!0&&m(),i.value===!1&&p(),l.value=!1}return{form:o,FormManager:b,saveForm:h,stockPackages:g,showModal:l,formTitle:u}},render(){return e("div",{class:"container w-full my-4"},[e("hr",null,null),e("button",{onClick:()=>this.FormManager(!0,null),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Add Stock Packaging")]),e("hr",null,null),e("div",{class:"overflow-x-auto mt-4"},[e("div",{class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},[e("table",{class:"min-w-full"},[e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},[r("Packaging Name")]),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},null),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"},null)])]),e("tbody",{class:"bg-white"},[this.stockPackages.map(a=>e("tr",{key:a?.uid},[e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"flex items-center"},[e("div",{class:"text-sm leading-5 text-gray-800"},[a?.name])])]),e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},[e("div",{class:"text-sm leading-5 text-sky-800"},null)]),e("td",{class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},[e("button",{onClick:()=>this.FormManager(!1,a),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},[r("Edit")])])]))])])])]),this.showModal?e(T,{onClose:()=>this.showModal=!1,contentWidth:"w-1/4"},{header:()=>e("h3",null,[this.formTitle]),body:()=>e("form",{action:"post",class:"p-1"},[e("div",{class:"grid grid-cols-2 gap-x-4 mb-4"},[e("label",{class:"block col-span-2 mb-2"},[e("span",{class:"text-gray-700"},[r("Stock Packaging Name")]),v(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":a=>this.form.name=a,placeholder:"Name ..."},null),[[w,this.form.name]])])]),e("hr",null,null),e("button",{type:"button",onClick:()=>this.saveForm(),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"},[r("Save Form")])])}):null])}});export{E as StockPackaging,E as default};