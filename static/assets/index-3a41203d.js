import{d as c,ac as _,a2 as v,r as P,B as h,o as s,g as x,h as m,l as o,k as i,y as r,j as l,D as y,E as p,I as w,F as B,_ as C}from"./index-f00208cb.js";import{P as k}from"./PatientForm-5357b6b0.js";import{P as F}from"./PatientInfo-6411e5f9.js";import"./patient.mutations-6d0e483b.js";/* empty css                                                                 */import"./constants-e2838944.js";const E={class:""},g=m("h3",null,"Patient Form",-1),N=c({__name:"index",setup(V){const u=_(),a=v();let e=P(!1);a.fetchPtientByUid(u.params.patientUid);const d=n=>{a.updatePatient(n),e.value=!1};return(n,t)=>{const f=h("router-view");return s(),x(B,null,[m("div",E,[o(F,{onEditPatient:t[0]||(t[0]=()=>i(e)?e.value=!0:e=!0)}),o(f)]),r(" Patient Edit Form Modal "),l(e)?(s(),y(w,{key:0,onClose:t[1]||(t[1]=b=>i(e)?e.value=!1:e=!1)},{header:p(()=>[g]),body:p(()=>[o(k,{patient:l(a).patient,navigate:!1,onClose:d},null,8,["patient"])]),_:1})):r("v-if",!0)],64)}}}),j=C(N,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/patient/_id/index.vue"]]);export{j as default};