import{_ as C,n as D,q as E}from"./billing-356772f3.js";import{f as F,G as R,r as c,c as T,d as U,h as l,k as u,x as e,F as h,ak as N,D as p,u as a,y as b,j as S,A as y,ag as g,i as V,_ as B}from"./_plugin-vue_export-helper-3f67fb71.js";import{g as $,h as j}from"./instrument.mutations-c5d0ba02.js";import{v,a as I}from"./runtime-dom.esm-bundler-6e07ef74.js";const L={class:"container w-full my-4"},O=e("hr",null,null,-1),P=e("hr",null,null,-1),q={class:"overflow-x-auto mt-4"},G={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},z={class:"min-w-full"},H=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Manufacturer"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Description"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),J={class:"bg-white"},K={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Q={class:"flex items-center"},W={class:"text-sm leading-5 text-gray-800"},X={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Y={class:"text-sm leading-5 text-sky-800"},Z={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},ee=["onClick"],te={action:"post",class:"p-1"},se={class:"grid grid-cols-2 gap-x-4 mb-4"},oe={class:"block col-span-1 mb-2"},ne=e("span",{class:"text-gray-700"},"Name",-1),ae={class:"block col-span-2 mb-2"},re=e("span",{class:"text-gray-700"},"Description",-1),ie=e("hr",null,null,-1),le=F({__name:"Manufacturers",setup(de){const x=R(()=>C(()=>import("./SimpleModal-1f91868a.js"),["assets/SimpleModal-1f91868a.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/SimpleModal-f645a074.css"])),i=D(),{withClientMutation:m}=E();let r=c(!1),f=c(""),s=T({});const d=c(!0);i.fetchManufacturers();const w=U(()=>i.getManufacturers);function k(){const n={name:s.name,description:s.description};m($,{payload:n},"createManufacturer").then(t=>i.addManufacturer(t))}function M(){const n={name:s.name,description:s.description};m(j,{uid:s.uid,payload:n},"updateManufacturer").then(t=>i.updateManufacturer(t))}function _(n,t={}){d.value=n,r.value=!0,f.value=(n?"CREATE":"EDIT")+" MANUFACTURER",n?Object.assign(s,{}):Object.assign(s,{...t})}function A(){d.value===!0&&k(),d.value===!1&&M(),r.value=!1}return(n,t)=>(l(),u(h,null,[e("div",L,[O,e("button",{onClick:t[0]||(t[0]=o=>_(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add Manufacturer"),P,e("div",q,[e("div",G,[e("table",z,[H,e("tbody",J,[(l(!0),u(h,null,N(a(w),o=>(l(),u("tr",{key:o?.uid},[e("td",K,[e("div",Q,[e("div",null,[e("div",W,p(o?.name),1)])])]),e("td",X,[e("div",Y,p(o?.description),1)]),e("td",Z,[e("button",{onClick:ce=>_(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,ee)])]))),128))])])])])]),b(" Location Edit Form Modal "),a(r)?(l(),S(a(x),{key:0,onClose:t[4]||(t[4]=o=>V(r)?r.value=!1:r=!1)},{header:y(()=>[e("h3",null,p(a(f)),1)]),body:y(()=>[e("form",te,[e("div",se,[e("label",oe,[ne,g(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=o=>a(s).name=o),placeholder:"Name ..."},null,512),[[v,a(s).name]])]),e("label",ae,[re,g(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=o=>a(s).description=o),placeholder:"Description ..."},null,512),[[v,a(s).description]])])]),ie,e("button",{type:"button",onClick:t[3]||(t[3]=I(o=>A(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):b("v-if",!0)],64))}}),_e=B(le,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/admin/suppliers/Manufacturers.vue"]]);export{_e as default};