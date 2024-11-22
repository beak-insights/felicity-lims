import{d as L,J as D,p as d,n as $,m as v,x as O,o as m,c as h,e as s,b as e,t as a,g as y,L as n,k as R}from"./index-48799f0c.js";import{u as B}from"./shipment-fb777d71.js";import{u as j}from"./shipment-6bc7db64.js";const E={class:""},N={class:"bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 py-4"},z={class:"grid grid-cols-12 gap-1"},A={class:"col-span-12 flex justify-between font-bold text-medium mb-2"},F={class:"flex"},I={class:"mr-10"},U={type:"button",class:"bg-sky-800 text-white px-2 py-1 rounded-sm leading-none"},V={class:"ml-2"},J={class:"absolute mt-4 py-0 bg-gray-300 rounded-sm shadow-xl z-20"},T={class:"col-span-12 sm:col-end-13 px-3 sm:px-0"},q=e("hr",null,null,-1),G={class:"grid grid-cols-2 mt-2"},H={class:"col-span-1"},K={class:"flex"},M=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"External Laboratory",-1),P={class:"text-gray-600 text-sm md:text-md"},Q={class:"flex"},W=e("span",{class:"text-gray-800 text-md font-semibold w-1/6"},"Courier:",-1),X={class:"text-gray-600 text-sm md:text-md"},Y={class:"flex"},Z=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Assigned Count:",-1),ee={class:"text-gray-600 text-sm md:text-md"},te={class:"col-span-1"},oe={class:"flex"},se=e("span",{class:"text-gray-800 text-sm font-semibold w-1/6"},"Comment:",-1),ne={class:"text-gray-600 text-sm md:text-md"},re=L({__name:"Shipment",setup(ae){const x=D(),c=B(),{actionShipment:_}=j();c.fetchReferralLaboratories(),c.fetchShipmentByUid(x.params.shipmentUid);const t=d(()=>c.getShipment),l=$({dropdownOpen:!1}),p=d(()=>!!["due"].includes(t?.value?.state?.toLowerCase())),b=d(()=>!!["preperation"].includes(t?.value?.state?.toLowerCase())),f=d(()=>!!["preperation","ready"].includes(t?.value?.state?.toLowerCase())),g=d(()=>!!["ready"].includes(t?.value?.state?.toLowerCase())),w=d(()=>!!["failed"].includes(t?.value?.state?.toLowerCase())),i=u=>{if(!t.value?.incoming&&!(t.value?.laboratory?.url&&t.value?.laboratory?.password&&t.value?.laboratory?.username&&t.value?.courier)){alert("The External Laboratory has missing information or the courier missing");return}_(t.value?.uid,u)};return(u,o)=>{const k=v("font-awesome-icon"),C=v("router-view"),S=O("motion-slide-top");return m(),h("div",E,[s((m(),h("div",N,[e("div",z,[e("div",A,[e("div",F,[e("h3",I,a(t.value?.shipmentId),1),e("h3",null,a(t.value?.incoming?"InBound":"OutBound"),1)]),e("div",null,[e("div",{onClick:o[0]||(o[0]=r=>l.dropdownOpen=!l.dropdownOpen),class:"hidden md:block md:flex md:items-center ml-2 mt-2"},[e("button",U,a(t.value?.state||"unknown"),1),e("div",V,[y(k,{icon:"chevron-down",class:"text-gray-400"})])]),s(e("div",{onClick:o[1]||(o[1]=r=>l.dropdownOpen=!1),class:"fixed inset-0 h-full w-full z-10"},null,512),[[n,l.dropdownOpen]]),s(e("div",J,[s(e("div",{onClick:o[2]||(o[2]=r=>i("reject")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Reject ",512),[[n,p.value]]),s(e("div",{onClick:o[3]||(o[3]=r=>i("receive")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Receive ",512),[[n,p.value]]),s(e("div",{onClick:o[4]||(o[4]=r=>i("finalise")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Finalise ",512),[[n,b.value]]),s(e("div",{onClick:o[5]||(o[5]=r=>i("dispatch")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Dispatch ",512),[[n,g.value]]),s(e("div",{onClick:o[6]||(o[6]=r=>i("dispatch-now")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Retry Notification ",512),[[n,w.value]]),s(e("div",{onClick:o[7]||(o[7]=r=>i("cancel")),class:"no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white"}," Cancel ",512),[[n,f.value]])],512),[[n,l.dropdownOpen]])])]),e("div",T,[q,e("div",G,[e("div",H,[e("div",K,[M,e("span",P,a(t.value?.laboratory?.name),1)]),e("div",Q,[W,e("span",X,a(t.value?.courier),1)]),e("div",Y,[Z,e("span",ee,a(t.value?.assignedCount),1)])]),e("div",te,[e("div",oe,[se,e("span",ne,a(t.value?.comment),1)])])])])])])),[[S]]),y(C)])}}}),ce=R(re,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/shipment/_id/Shipment.vue"]]);export{ce as default};