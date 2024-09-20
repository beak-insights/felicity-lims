import{d as I,L as E,r as u,D,C,o as i,c,b as e,F as b,p as N,t as y,f as r,q as A,G as h,e as f,v,w as M,i as S,x as R,j as U,_ as F,O as P,k as V}from"./index-73e47413.js";import{A as B,E as O}from"./instrument.mutations-b9a77351.js";const $={class:""},j={class:"container w-full my-4"},L=e("hr",null,null,-1),Y=e("hr",null,null,-1),q={class:"overflow-x-auto mt-4 overflow-y-scroll overscroll-contain max-h-[740px]"},G={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},z={class:"min-w-full"},H=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Description"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),J={class:"bg-white"},K={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Q={class:"text-sm leading-5 text-gray-800"},W=e("td",{class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},null,-1),X={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},Z=["onClick"],ee={action:"post",class:"p-1"},te={class:"grid grid-cols-2 gap-x-4 mb-4"},se={class:"block col-span-2 mb-2"},oe=e("span",{class:"text-gray-700"},"Instrument Type",-1),ne={class:"block col-span-2 mb-2"},re=e("span",{class:"text-gray-700"},"Description",-1),ae=e("hr",null,null,-1),le=I({__name:"InstrumentTypes",setup(ie){const x=U(()=>F(()=>import("./FelModal-344bef25.js"),["assets/FelModal-344bef25.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/FelModal-a7d23795.css"])),l=E(),{withClientMutation:p}=P();let a=u(!1),m=u("");const d=u(!0);l.fetchInstrumentTypes();const g=D(()=>l.getInstrumentTypes);let s=C({});function w(){const n={name:s.name,description:s.description};p(B,{payload:n},"createInstrumentType").then(t=>l.addInstrumentType(t))}function T(){const n={name:s.name,description:s.description};p(O,{uid:s.uid,payload:n},"updateInstrumentType").then(t=>l.updateInstrumentType(t))}function _(n,t={}){d.value=n,a.value=!0,m.value=(n?"CREATE":"EDIT")+" INSTRUMENT TYPE",n?Object.assign(s,{}):Object.assign(s,{...t})}function k(){d.value===!0&&w(),d.value===!1&&T(),a.value=!1}return(n,t)=>(i(),c(b,null,[e("div",$,[e("div",j,[L,e("button",{class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none",onClick:t[0]||(t[0]=o=>_(!0))}," Add Instrument Type"),Y]),e("div",q,[e("div",G,[e("table",z,[H,e("tbody",J,[(i(!0),c(b,null,N(g.value,o=>(i(),c("tr",{key:o?.uid},[e("td",K,[e("div",Q,y(o?.name),1)]),W,e("td",X,[e("button",{onClick:de=>_(!1,o),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,Z)])]))),128))])])])])]),r(a)?(i(),A(r(x),{key:0,onClose:t[4]||(t[4]=o=>S(a)?a.value=!1:a=!1)},{header:h(()=>[e("h3",null,y(r(m)),1)]),body:h(()=>[e("form",ee,[e("div",te,[e("label",se,[oe,f(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=o=>r(s).name=o),placeholder:"Name ..."},null,512),[[v,r(s).name]])]),e("label",ne,[re,f(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=o=>r(s).description=o),placeholder:"Description ..."},null,512),[[v,r(s).description]])])]),ae,e("button",{type:"button",onClick:t[3]||(t[3]=M(o=>k(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):R("",!0)],64))}}),pe=V(le,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/instruments/InstrumentTypes.vue"]]);export{pe as default};