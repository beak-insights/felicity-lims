import{_ as f,k as B,l as k,j as N}from"./billing-356772f3.js";import{f as I,G as m,r as h,C as l,c as R,d as w,h as A,k as L,B as c,u as a,A as p,x as s,ag as D,al as E,F as S,_ as M}from"./_plugin-vue_export-helper-3f67fb71.js";import{R as r}from"./index-3189f120.js";import{h as V,a as F,o as H}from"./constants-df420cc9.js";import{b as O}from"./runtime-dom.esm-bundler-6e07ef74.js";const U=s("div",{class:"flex content-start items-center"},[s("span",{class:"text-sky-800"},[s("i",{class:"fas fa-info-circle"})]),s("p",{class:"ml-2 italic text-orange-600"}," Click register when you dont find your patient during search* ")],-1),j=s("hr",{class:"my-2"},null,-1),q=I({__name:"PatientListing",setup(G){const g=m(()=>f(()=>import("./DataTable-6e858f1d.js"),["assets/DataTable-6e858f1d.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js"])),_=m(()=>f(()=>import("./PageHeading-8026de94.js"),["assets/PageHeading-8026de94.js","assets/_plugin-vue_export-helper-3f67fb71.js"]));let n=B(),v=k();const{patients:u,fetchingPatients:b,patientPageInfo:i}=N(n),P=h([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"Patient Id",value:"patientId",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,o){return l(r,{to:{name:"patient-detail",params:{patientUid:e?.uid}},innerHTML:e?.patientId})}},{name:"Full Name",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,o){return l(r,{to:{name:"patient-detail",params:{patientUid:e?.uid}},innerHTML:T(e)})}},{name:"Age",value:"age",sortable:!1,sortBy:"asc",hidden:!1},{name:"Gender",value:"gender",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client Patient ID",value:"clientPatientId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Province",value:"client.district.province.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"District",value:"client.district.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client",value:"client.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"",value:"",sortable:!1,sortBy:"asc",showInToggler:!1,hidden:!1,customRender:function(e,o){return l(r,{to:{name:"samples-add",params:{patientUid:e?.uid}},class:"px-2 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",innerHTML:"+ Analysis Request"})}}]);v.fetchCountries();let t=R({first:50,before:"",text:"",sortBy:["-uid"],filterAction:!1});n.fetchPatients(t);let d=h("");function y(e){t.first=100,t.before=i?.value?.endCursor??"",t.text=e.filterText,t.filterAction=!0,d.value=e.filterText,n.fetchPatients(t)}const x=w(()=>u?.value?.length+" of "+n.getPatientCount+" patients");function C(e){t.first=e.fetchCount,t.before=i?.value?.endCursor??"",t.text=e.filterText,t.filterAction=!1,n.fetchPatients(t)}let T=e=>e.firstName+" "+e.lastName;return(e,o)=>(A(),L(S,null,[c(a(_),{title:"Patients"}),c(a(g),{columns:P.value,data:a(u),toggleColumns:!0,loading:a(b),paginable:!0,pageMeta:{fetchCount:a(t).first,hasNextPage:a(i)?.hasNextPage,countNone:a(x)},searchable:!0,filterable:!1,onOnSearch:y,onOnPaginate:C,selectable:!1},{footer:p(()=>[s("div",null,[U,j,D(c(a(r),{to:{name:"patients-register",query:{cpid:a(d)}},class:"px-4 p-1 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100"},{default:p(()=>[E(" Register New Patiet ")]),_:1},8,["to"]),[[O,V(F.CREATE,H.PATIENT)]])])]),_:1},8,["columns","data","loading","pageMeta"])],64))}}),X=M(q,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/patient/PatientListing.vue"]]);export{X as default};