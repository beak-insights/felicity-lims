import{d as y,I as R,n as v,p as w,o as r,c as i,b as e,F as c,C as x,t as u,y as g,z as m,e as k,v as j,w as C,f as A,B as M,j as D,_ as E,k as T}from"./index-dcd7b802.js";import{z as B,B as F}from"./analyses.mutations-ac82bb91.js";import{u as S}from"./analysis-734a1bdc.js";const V={class:"container w-full my-4"},$=e("hr",null,null,-1),I=e("hr",null,null,-1),L={class:"overflow-x-auto mt-4"},z={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},N={class:"min-w-full"},P=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Reason"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),U={class:"bg-white"},O={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Q={class:"flex items-center"},q={class:"text-sm leading-5 text-gray-800"},G={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},H=["onClick"],J={action:"post",class:"p-1"},K={class:"grid grid-cols-2 gap-x-4 mb-4"},W={class:"block col-span-2 mb-2"},X=e("span",{class:"text-gray-700"},"Rejection Reason",-1),Y=e("hr",null,null,-1),Z=y({__name:"RejectionReasons",setup(ee){const f=D(()=>E(()=>import("./FelModal-80650623.js"),["assets/FelModal-80650623.js","assets/index-dcd7b802.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),a=S(),{withClientMutation:l}=R(),o=v({showModal:!1,formTitle:"",form:{},formAction:!1});a.fetchRejectionReasons();const h=w(()=>a.getRejectionReasons);function p(){l(B,{reason:o.form.reason},"createRejectionReason").then(s=>a.addRejectionReason(s))}function _(){l(F,{uid:o.form.uid,reason:o.form.reason},"updateRejectionReason").then(s=>a.updateRejectionReason(s))}function d(s,t={}){o.formAction=s,o.showModal=!0,o.formTitle=(s?"CREATE":"EDIT")+" QC Level",s?o.form={}:o.form={...t}}function b(){o.formAction===!0&&p(),o.formAction===!1&&_(),o.showModal=!1}return(s,t)=>(r(),i(c,null,[e("div",V,[$,e("button",{onClick:t[0]||(t[0]=n=>d(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add Rejection Reason"),I,e("div",L,[e("div",z,[e("table",N,[P,e("tbody",U,[(r(!0),i(c,null,x(h.value,n=>(r(),i("tr",{key:n?.uid},[e("td",O,[e("div",Q,[e("div",null,[e("div",q,u(n?.reason),1)])])]),e("td",G,[e("button",{onClick:oe=>d(!1,n),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,H)])]))),128))])])])])]),o.showModal?(r(),g(A(f),{key:0,onClose:t[3]||(t[3]=n=>o.showModal=!1)},{header:m(()=>[e("h3",null,u(o.formTitle),1)]),body:m(()=>[e("form",J,[e("div",K,[e("label",W,[X,k(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=n=>o.form.reason=n),placeholder:"Reason ..."},null,512),[[j,o.form.reason]])])]),Y,e("button",{type:"button",onClick:t[2]||(t[2]=C(n=>b(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):M("",!0)],64))}}),ae=T(Z,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/analyses/RejectionReasons.vue"]]);export{ae as default};