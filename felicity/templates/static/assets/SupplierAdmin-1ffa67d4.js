import{d as m,r as d,p as f,o as a,c as n,b as r,F as v,C as y,G as h,f as t,i as k,t as x,y as o,B as i,j as c,_ as p,k as b}from"./index-0b8039cf.js";const g={class:"mt-4"},C={class:"bg-white shadow-md mt-2"},A={class:"-mb-px flex justify-start"},w=["onClick"],B=m({__name:"SupplierAdmin",setup(D){const l=c(()=>p(()=>import("./SuppliersListing-bd60eefe.js"),["assets/SuppliersListing-bd60eefe.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/setup-7da018b2.js","assets/_queries-58a09d05.js","assets/instrument.mutations-b35bb1e0.js","assets/SuppliersListing-8d8b4931.css"])),u=c(()=>p(()=>import("./Manufacturers-6afc616a.js"),["assets/Manufacturers-6afc616a.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/instrument.mutations-b35bb1e0.js","assets/setup-7da018b2.js","assets/_queries-58a09d05.js"]));let e=d("suppliers");const _=["suppliers","manufacturers"];return f(()=>"tab-"+e.value),(E,S)=>(a(),n("div",g,[r("nav",C,[r("div",A,[(a(),n(v,null,y(_,s=>r("a",{key:s,class:h(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":t(e)===s}]),onClick:V=>k(e)?e.value=s:e=s},x(s),11,w)),64))])]),t(e)==="suppliers"?(a(),o(t(l),{key:0})):i("",!0),t(e)==="manufacturers"?(a(),o(t(u),{key:1})):i("",!0)]))}}),P=b(B,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/suppliers/SupplierAdmin.vue"]]);export{P as default};