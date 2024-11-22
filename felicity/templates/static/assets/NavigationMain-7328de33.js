import{d as $,I as A,r as a,l as D,N as E,q as M,p as I,m as _,o as m,c as p,b as e,e as i,L as l,f as c,g as s,M as L,K as P,z as v,t as g,F as x,C as T,j as z,_ as B,k as F}from"./index-48799f0c.js";import{u as O}from"./notification-d0343839.js";const V={id:"main-nav",class:"flex items-center pr-4 bg-sky-800",role:"navigation"},j=e("div",{class:"flex-1 py-2"},[e("div",{class:"relative w-full max-w-xl mr-6 focus-within:text-purple-500"})],-1),R={class:"flex"},q=e("span",null,"Errors",-1),K=e("span",null,"Notifications",-1),U=e("span",{class:"text-sm"},"Settings",-1),G={class:"flex text-right align-middle py-2"},H={class:"flex justify-center items-center h-8 w-8 rounded-full border-2 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none text-white"},J={class:"relative"},Q={class:"text-white text-sm mr-2"},W={class:"absolute right-0 mt-4 py-2 w-48 bg-sky-800 rounded-sm shadow-xl z-20"},X=e("h3",null,"Errors List",-1),Y=$({__name:"NavigationMain",setup(Z){const y=z(()=>B(()=>import("./FelDrawer-6b3fd444.js"),["assets/FelDrawer-6b3fd444.js","assets/index-48799f0c.js","assets/index-c2286288.css"])),{errors:f}=A(),r=a(!1);a(!1),a(!1);const b=O(),d=D(),{theme:ee,toggleTheme:te,loadPreferedTheme:w}=E();M(()=>w());const k=I(()=>`${d.auth?.user?.firstName} ${d.auth?.user?.lastName}`),N=h=>b.showNotifications(h),u=a(!1);return(h,t)=>{const n=_("font-awesome-icon"),C=_("router-link");return m(),p(x,null,[e("nav",V,[j,e("div",R,[i(e("a",{class:"no-underline text-gray-100 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark",onClick:t[0]||(t[0]=o=>u.value=!0)},[s(n,{icon:"bell",class:"mr-2"}),q],512),[[l,c(f).length>0]]),e("a",{class:"no-underline text-gray-100 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark",onClick:t[1]||(t[1]=o=>N(!0))},[s(n,{icon:"bell",class:"mr-2"}),K]),i(s(C,{to:"/admin",class:"no-underline text-gray-100 opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"},{default:v(()=>[s(n,{icon:"cog",class:"mr-2"}),U]),_:1},512),[[l,L(P.ADMINISTRATION)]]),e("div",G,[e("span",H,[s(n,{icon:"user"})]),e("div",J,[e("div",{onClick:t[2]||(t[2]=o=>r.value=!r.value),class:"hidden md:block md:flex md:items-center ml-2 mt-1"},[e("span",Q,g(k.value),1),e("div",null,[s(n,{icon:"chevron-down",class:"text-gray-400"})])]),i(e("div",{onClick:t[3]||(t[3]=o=>r.value=!1),class:"fixed inset-0 h-full w-full z-100"},null,512),[[l,r.value]]),i(e("div",W,[e("li",{onClick:t[4]||(t[4]=o=>c(d).logout()),class:"no-underline text-gray-100 py-1 opacity-80 flex items-center px-4 border-b border-transparent hover:bg-gray-800 hover:bg-opacity-25 hover:text-white"}," Log out ")],512),[[l,r.value]])])])])]),s(c(y),{show:u.value,onClose:t[5]||(t[5]=o=>u.value=!1)},{header:v(()=>[X]),body:v(()=>[e("ul",null,[(m(!0),p(x,null,T(c(f),(o,S)=>(m(),p("li",{key:S},g(o),1))),128))])]),_:1},8,["show"])],64)}}}),re=F(Y,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/nav/NavigationMain.vue"]]);export{re as default};