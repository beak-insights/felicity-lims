import{_ as B,Y as F,Z as L,a0 as P}from"./billing-356772f3.js";import{f as R,G as q,M as $,w as O,d as w,v as W,h as n,k as l,x as e,F as v,ak as y,j,u as t,D as r,y as h,ag as C,B as G,_ as J}from"./_plugin-vue_export-helper-3f67fb71.js";import{u as Y}from"./samples-6869bb19.js";import{c as Z,e as z,u as H,b as K}from"./array-a5aedee5.js";import{a as M,d as Q,b as X}from"./runtime-dom.esm-bundler-6e07ef74.js";const ee=e("h4",null,"Store Samples",-1),se={class:"grid grid-cols-12 gap-4 min-h-full bg-white"},te={className:"col-span-2 pt-4 pl-4 bg-sky-200"},oe={className:"col-span-7 pt-4"},ae={class:"mb-2"},ne={key:0},ie={class:"grid grid-cols-2 mt-2"},le={class:"col-span-1"},re={class:"flex"},de=e("span",{class:"text-gray-600 text-md font-bold w-52"},"Name:",-1),ce={class:"text-gray-600 text-md"},me={class:"flex"},pe=e("span",{class:"text-gray-600 text-md font-bold w-52"},"Layout:",-1),ue={class:"text-gray-600 text-md"},_e={key:0,class:"ml-2 text-gray-600 text-md italic bg-slate-400 px-1 rounded-sm"},he={class:"col-span-1"},ge={class:"flex"},ve=e("span",{class:"text-gray-600 text-md font-bold w-52"},"Slots:",-1),fe={class:"text-gray-600 text-md"},Se={class:"flex mt-2"},ye=e("span",{class:"text-gray-600 text-md font-bold w-52"},"Empty Slots:",-1),be={class:"text-gray-600 text-md mr-2"},xe={key:1},we=e("hr",null,null,-1),Ce=e("div",{class:"grid grid-cols-12 mb-4"},[e("div",{class:"col-span-1 font-semibold"},"Position"),e("div",{class:"col-span-1 font-semibold"},"Label"),e("div",{class:"col-span-10 font-semibold"},"Sample")],-1),ke=e("div",{class:"col-span-12 mb-2"},[e("hr")],-1),Ue={class:"col-span-1"},Ne={class:"col-span-1"},De={class:"col-span-10"},Ie=["onUpdate:modelValue"],Ve=["value"],Ee=["onClick"],Te=e("hr",{class:"mt-8"},null,-1),Ae={key:0,type:"submit",class:"px-2 py-1 mt-4 border-orange-600 border text-orange-600 rounded-sm transition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"},Be=e("div",{className:"col-span-3 p-2"},null,-1),Fe=R({__name:"StoreSamples",setup(Le){const k=q(()=>B(()=>import("./TreeItem-c8cb347f.js"),["assets/TreeItem-c8cb347f.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/billing-356772f3.js","assets/runtime-dom.esm-bundler-6e07ef74.js"])),{treeData:U,tags:f,activeTree:g,resetActiveTree:N}=F();N();const u=L(),{storeSamples:D}=Y();let _=JSON.parse(window.history.state.samples),p=[];const I=a=>{p=[],c.value.forEach(s=>{s.sampleUid&&p.push(s.sampleUid?.toString())})};$(()=>u.fetchStorageTree()),O(()=>g.value,(a,s)=>{a.tag==="storage-container"&&(u.fetchStorageContainer(a.uid),c.value=[])},{deep:!0});const i=w(()=>u.getStorageContainer),V=w(()=>{const a=u.getStorageContainer;return(a?.slots??0)-(a?.storedCount??0)}),b=()=>{_=[..._,...i.value?.samples??[]],c.value=[],P(i.value?.cols??1,i.value?.rows??1,!i.value?.grid,i.value?.rowWise??!1).map(s=>({...s,storageContainerUid:i.value?.uid})).forEach(s=>{const m=_.filter(o=>o.storageSlotIndex===s.storageSlotIndex&&o.storageContainerUid===s.storageContainerUid);m.length>0&&(s={...s,sampleUid:m[0].uid},p.push(s.sampleUid.toString())),c.value.push({sampleUid:void 0,...s})})},E=Z({samples:z().required().min(1,"Select At least one sample")}),{handleSubmit:T,errors:Pe}=H({validationSchema:E,initialValues:{priority:0,samples:i.value?.samples??[]}}),{value:c}=K("samples"),A=a=>{c.value=c.value.map(s=>(s.sampleUid===a&&(s={...s,sampleUid:void 0}),s)),p=p.filter(s=>+s!==a)},x=T(async a=>{const s=a.samples.filter(m=>m.sampleUid);await D(s).then(async m=>{await u.fetchStorageContainer(s[0].storageContainerUid),b()})});return(a,s)=>{const m=W("font-awesome-icon");return n(),l(v,null,[ee,e("div",se,[e("div",te,[e("ul",null,[(n(!0),l(v,null,y(t(U),(o,S)=>(n(),j(t(k),{tree:o,key:S},null,8,["tree"]))),128))])]),e("div",oe,[e("div",ae,[t(g).tag===t(f).storageContainer?(n(),l("div",ne,[e("div",ie,[e("div",le,[e("div",re,[de,e("span",ce,r(t(i)?.name),1)]),e("div",me,[pe,e("span",ue,r(t(i)?.grid?"grid":"column"),1),t(i)?.grid?(n(),l("span",_e,r(t(i)?.rowWise?"by-row":"by-column"),1)):h("v-if",!0)])]),e("div",he,[e("div",ge,[ve,e("span",fe,r(t(i)?.slots),1)]),e("div",Se,[ye,e("span",be,r(t(V)),1)])])])])):(n(),l("div",xe,"Please select a storage container"))]),we,t(g).tag===t(f).storageContainer?(n(),l("button",{key:0,class:"border border-sky-800 bg-sky-800 text-white rounded-sm mt-2 px-4 py-1 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline",onClick:s[0]||(s[0]=o=>b())}," Reset Slots ")):h("v-if",!0),e("form",{action:"post",class:"p-4 mb-8 bg-white",onSubmit:s[1]||(s[1]=M((...o)=>t(x)&&t(x)(...o),["prevent"]))},[Ce,(n(!0),l(v,null,y(t(c),(o,S)=>(n(),l("div",{class:"mt-2 grid grid-cols-12",key:S},[ke,e("div",Ue,r(o.storageSlotIndex),1),e("div",Ne,r(o.storageSlot),1),e("label",De,[C(e("select",{name:"sampleUid",id:"sampleUid","onUpdate:modelValue":d=>o.sampleUid=d,class:"form-input w-64 h-6 p-0",onChange:I},[(n(!0),l(v,null,y(t(_),d=>C((n(),l("option",{key:d.uid,value:d.uid},r(d?.sampleId)+" ❲"+r(d?.analysisRequest?.clientRequestId)+"❳ ",9,Ve)),[[X,!t(p).includes(d.uid.toString())]])),128))],40,Ie),[[Q,o.sampleUid]]),o.sampleUid?(n(),l("span",{key:0,class:"ml-2 text-red-500",onClick:d=>A(o.sampleUid)},[G(m,{icon:"ban"})],8,Ee)):h("v-if",!0)])]))),128)),Te,t(g).tag===t(f).storageContainer&&t(_)?.length>0?(n(),l("button",Ae," Store Samples ")):h("v-if",!0)],32),h("  ")]),Be])],64)}}}),je=J(Fe,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/sample/StoreSamples.vue"]]);export{je as default};