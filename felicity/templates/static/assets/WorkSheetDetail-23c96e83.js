import{d as k,ar as v,r as f,D as g,o as a,c,b as o,x as r,F as y,p as x,y as D,f as t,i as b,t as w,q as i,j as n,_ as l,k as S}from"./index-8a5660e7.js";const C={class:""},E={class:"col-span-12"},W={class:"bg-white shadow-md mt-2"},A={class:"-mb-px flex justify-start"},L=["onClick"],R=k({__name:"WorkSheetDetail",setup(T){const _=n(()=>l(()=>import("./WorkSheetAssign-8ecbafa0.js"),["assets/WorkSheetAssign-8ecbafa0.js","assets/index-8a5660e7.js","assets/index-227a7d92.css","assets/constants-4e81a61d.js"])),d=n(()=>l(()=>import("./WorkSheetResults-dbe4fe89.js"),["assets/WorkSheetResults-dbe4fe89.js","assets/index-8a5660e7.js","assets/index-227a7d92.css","assets/analysis-76a95c35.js","assets/constants-4e81a61d.js"])),p=n(()=>l(()=>import("./FelAuditLog-455a3a78.js"),["assets/FelAuditLog-455a3a78.js","assets/index-8a5660e7.js","assets/index-227a7d92.css"]));let u=v(),e=f("detail");const m=["detail","assign-samples","logs"],h=g(()=>u.getWorkSheet);return(V,B)=>(a(),c("div",C,[o("section",E,[r(" Sample and Case Data "),o("nav",W,[o("div",A,[(a(),c(y,null,x(m,s=>o("a",{key:s,class:D(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":t(e)===s}]),onClick:P=>b(e)?e.value=s:e=s},w(s),11,L)),64))])]),o("div",null,[t(e)==="detail"?(a(),i(t(d),{key:0})):r("v-if",!0),t(e)==="assign-samples"?(a(),i(t(_),{key:1})):r("v-if",!0),t(e)==="logs"?(a(),i(t(p),{key:2,targetType:"worksheet",targetUid:h.value?.uid},null,8,["targetUid"])):r("v-if",!0)])])]))}}),O=S(R,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/worksheet/_id/WorkSheetDetail.vue"]]);export{O as default};