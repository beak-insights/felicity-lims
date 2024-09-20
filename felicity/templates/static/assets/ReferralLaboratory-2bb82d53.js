import{d as C,a_ as E,r as g,C as V,D,o as b,c as f,b as e,F as y,p as I,t as l,f as r,q as O,G as w,e as d,v as c,H as k,au as v,w as T,i as U,x as S,j as B,_ as F,bV as P,bW as M,I as N,J as $,O as j,k as Y}from"./index-73e47413.js";const a=p=>(N("data-v-f1975450"),p=p(),$(),p),q={class:"container w-full my-4"},G=a(()=>e("hr",null,null,-1)),H=a(()=>e("hr",null,null,-1)),J={class:"overflow-x-auto mt-4"},W={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},z={class:"min-w-full"},K=a(()=>e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Name"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"Code"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"url"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"is refferal"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"is reference"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"has username"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"},"has password"),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1)),Q={class:"bg-white"},X={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Z={class:"flex items-center"},ee={class:"text-sm leading-5 text-gray-800"},te={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},se={class:"text-sm leading-5 text-sky-800"},oe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},re={class:"text-sm leading-5 text-sky-800"},ae={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},le={class:"text-sm leading-5 text-sky-800"},ne={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},de={class:"text-sm leading-5 text-sky-800"},ie={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ce={class:"text-sm leading-5 text-sky-800"},pe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ue={class:"text-sm leading-5 text-sky-800"},be={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},_e=["onClick"],ge={action:"post",class:"p-1"},fe={class:"grid grid-cols-2 gap-x-4 mb-4"},me={class:"block col-span-1 mb-2"},he=a(()=>e("span",{class:"text-gray-700"},"Laboratory Name",-1)),xe={class:"block col-span-1 mb-2"},ye=a(()=>e("span",{class:"text-gray-700"},"Code",-1)),we={class:"block col-span-1 mb-2"},ke=a(()=>e("span",{class:"text-gray-700"},"Url",-1)),ve={class:"block col-span-1 mb-2"},Re=a(()=>e("span",{class:"text-gray-700"},"Username",-1)),Le={class:"block col-span-1 mb-2"},Ae=a(()=>e("span",{class:"text-gray-700"},"Password",-1)),Ce={for:"toggle",class:"text-xs text-gray-700 mr-4"},Ee={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},Ve=a(()=>e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1)),De={for:"toggle",class:"text-xs text-gray-700 mr-4"},Ie={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},Oe=a(()=>e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1)),Te=a(()=>e("hr",null,null,-1)),Ue=C({__name:"ReferralLaboratory",setup(p){const R=B(()=>F(()=>import("./FelModal-344bef25.js"),["assets/FelModal-344bef25.js","assets/index-73e47413.js","assets/index-227a7d92.css","assets/FelModal-a7d23795.css"])),u=E(),{withClientMutation:m}=j();let i=g(!1),h=g(""),o=V({});const _=g(!0);u.fetchReferralLaboratories();const L=D(()=>u.getReferalLaboratories);function x(n,t={}){_.value=n,i.value=!0,h.value=(n?"CREATE":"EDIT")+" REFERRAL LABORATORY",n?Object.assign(o,{}):Object.assign(o,{...t})}function A(){const n={name:o.name,code:o.code,url:o.url,username:o.username,password:o.password,isReferral:o.isReferral,isReference:o.isReference};_.value===!0&&m(P,{payload:n},"createReferralLaboratory").then(t=>u.addReferralLaboratory(t)),_.value===!1&&m(M,{uid:o.uid,payload:n},"updateReferralLaboratory").then(t=>u.updateReferralLaboratory(t)),i.value=!1}return(n,t)=>(b(),f(y,null,[e("div",q,[G,e("button",{onClick:t[0]||(t[0]=s=>x(!0)),class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Add Referral Laboratory"),H,e("div",J,[e("div",W,[e("table",z,[K,e("tbody",Q,[(b(!0),f(y,null,I(L.value,s=>(b(),f("tr",{key:s?.uid},[e("td",X,[e("div",Z,[e("div",ee,l(s?.name),1)])]),e("td",te,[e("div",se,l(s?.code),1)]),e("td",oe,[e("div",re,l(s?.url),1)]),e("td",ae,[e("div",le,l(s?.isReferral),1)]),e("td",ne,[e("div",de,l(s?.isReference),1)]),e("td",ie,[e("div",ce,l(s?.username?"yes":"no"),1)]),e("td",pe,[e("div",ue,l(s?.password?"no":"yes"),1)]),e("td",be,[e("button",{onClick:Se=>x(!1,s),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},"Edit",8,_e)])]))),128))])])])])]),r(i)?(b(),O(r(R),{key:0,onClose:t[9]||(t[9]=s=>U(i)?i.value=!1:i=!1)},{header:w(()=>[e("h3",null,l(r(h)),1)]),body:w(()=>[e("form",ge,[e("div",fe,[e("label",me,[he,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=s=>r(o).name=s),placeholder:"Name ..."},null,512),[[c,r(o).name]])]),e("label",xe,[ye,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[2]||(t[2]=s=>r(o).code=s),placeholder:"Prefix ..."},null,512),[[c,r(o).code]])]),e("label",we,[ke,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[3]||(t[3]=s=>r(o).url=s),placeholder:"Prefix ..."},null,512),[[c,r(o).url]])]),e("label",ve,[Re,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[4]||(t[4]=s=>r(o).username=s),placeholder:"Prefix ..."},null,512),[[c,r(o).username]])]),e("label",Le,[Ae,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[5]||(t[5]=s=>r(o).password=s),placeholder:"Prefix ..."},null,512),[[c,r(o).password]])]),e("label",Ce,[k("Is Referral "),e("div",Ee,[d(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":t[6]||(t[6]=s=>r(o).isReferral=s),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[v,r(o).isReferral]]),Ve])]),e("label",De,[k("Is Reference "),e("div",Ie,[d(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":t[7]||(t[7]=s=>r(o).isReference=s),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[v,r(o).isReference]]),Oe])])]),Te,e("button",{type:"button",onClick:t[8]||(t[8]=T(s=>A(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Laboratory ")])]),_:1})):S("",!0)],64))}});const Fe=Y(Ue,[["__scopeId","data-v-f1975450"],["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/shipment/ReferralLaboratory.vue"]]);export{Fe as default};