import{f as r,d as h,v as x,aj as p,h as d,k as i,ag as u,x as s,y as n,D as e,u as o,B as f,_ as v}from"./_plugin-vue_export-helper-dacf3d65.js";import{D as y,z as g}from"./shipment-53265c2d.js";const w={class:""},b={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 py-4"},k={class:"grid grid-cols-12 gap-1"},C={class:"col-span-12 flex justify-between font-bold text-medium mb-2"},D={type:"button",class:"bg-sky-800 text-white px-2 py-1 rounded-sm leading-none"},S={class:"col-span-12 sm:col-end-13 px-3 sm:px-0"},B=s("hr",null,null,-1),N={class:"grid grid-cols-2 mt-2"},V={class:"col-span-1"},W={class:"flex"},j=s("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Analyst",-1),A={class:"text-gray-600 text-sm md:text-md"},I={class:"flex"},M=s("span",{class:"text-gray-800 text-md font-semibold w-1/6"},"Instrument:",-1),U={class:"text-gray-600 text-sm md:text-md"},z={class:"flex"},E=s("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Method:",-1),R={class:"text-gray-600 text-sm md:text-md"},T={class:"col-span-1"},q={class:"flex"},F=s("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Analyses:",-1),G={class:"text-gray-600 text-sm md:text-md"},H={class:"flex"},J=s("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Samples:",-1),K={class:"text-gray-600 text-sm md:text-md"},L={class:"flex"},O=s("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Template:",-1),P={class:"text-gray-600 text-sm md:text-md"},Q=r({__name:"index",setup(X){const c=y(),a=g();a.fetchWorksheetByUid(c.params.workSheetUid);const t=h(()=>a.getWorkSheet);return(l,Y)=>{const _=x("router-view"),m=p("motion-slide-top");return d(),i("div",w,[u((d(),i("div",b,[s("div",k,[n(" Meta Column "),s("div",C,[s("h3",null,e(o(t)?.worksheetId),1),s("button",D,e(o(t)?.state||"unknown"),1)]),n(" Summary Column "),s("div",S,[B,s("div",N,[s("div",V,[n(" Client Details "),s("div",W,[j,s("span",A,e(o(t)?.analyst?.firstName),1)]),s("div",I,[M,s("span",U,e(o(t)?.instrument?.name),1)]),s("div",z,[E,s("span",R,e(o(t)?.method?.name),1)])]),s("div",T,[s("div",q,[F,s("span",G,e(o(t)?.analysis?.name),1)]),s("div",H,[J,s("span",K,e(o(t)?.assignedCount),1)]),s("div",L,[O,s("span",P,e(o(t)?.template?.name),1)])])])])])])),[[m]]),f(_)])}}}),ss=v(Q,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/worksheet/_id/index.vue"]]);export{ss as default};