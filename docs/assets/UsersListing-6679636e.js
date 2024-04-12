import{_ as P,n as H,W as j,aC as q,aD as z,aE as W,aF as J,q as K}from"./billing-356772f3.js";import{f as Q,G as X,r as f,c as Y,d as A,h as n,k as c,x as e,F as y,ak as N,D as i,s as E,y as u,u as l,j as C,A as x,ag as d,al as D,i as F,_ as Z}from"./_plugin-vue_export-helper-3f67fb71.js";import{v as m,d as ee,e as T,a as S}from"./runtime-dom.esm-bundler-6e07ef74.js";const te={class:"w-full my-4"},se=e("hr",null,null,-1),oe={class:"flex justify-between items-center"},le=e("h3",null,"Users",-1),re=e("hr",null,null,-1),ae={class:"overflow-x-auto mt-4"},ne={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"},ie={class:"min-w-full"},de=e("thead",null,[e("tr",null,[e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," First Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Last Name "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Email Adress "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Active "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Groups "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Username "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," User Type "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider"}," Blocked "),e("th",{class:"px-1 py-1 border-b-2 border-gray-300"})])],-1),ce={class:"bg-white"},ue={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},pe={class:"flex items-center"},be={class:"text-sm leading-5 text-gray-800"},me={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ge={class:"text-sm leading-5 text-sky-800"},he={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},_e={class:"text-sm leading-5 text-sky-800"},fe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},xe={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ye={class:"text-sm leading-5 text-sky-800"},ve={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},ke={class:"text-sm leading-5 text-sky-800"},we={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ue={class:"text-sm leading-5 text-sky-800"},Ae={class:"px-1 py-1 whitespace-no-wrap border-b border-gray-500"},Ne={class:"px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},Ee=["onClick"],Ce=["onClick"],De=["onClick"],Fe={action:"post",class:"p-1"},Te={class:"grid grid-cols-2 gap-x-4 mb-4"},Se={class:"block col-span-1 mb-2"},Ve=e("span",{class:"text-gray-700"},"First Name",-1),Be={class:"block col-span-1 mb-2"},Me=e("span",{class:"text-gray-700"},"Last Name",-1),Le={class:"block col-span-1 mb-2"},Re=e("span",{class:"text-gray-700"},"Email",-1),Oe={class:"block col-span-1 mb-2"},$e=e("span",{class:"text-gray-700"},"Group",-1),Ge=e("option",null,null,-1),Ie=["value"],Pe={for:"toggle",class:"block col-span-2 text-xs text-gray-700 mt-4"},He={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},je=e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1),qe=e("hr",null,null,-1),ze={action:"post",class:"p-1"},We={class:"grid grid-cols-2 gap-x-4 mb-4"},Je={class:"block col-span-1 mb-2"},Ke=e("span",{class:"text-gray-700"},"UserName",-1),Qe={class:"block col-span-1 mb-2"},Xe=e("span",{class:"text-gray-700"},"Password",-1),Ye={class:"block col-span-1 mb-2"},Ze=e("span",{class:"text-gray-700"},"Confirm Password",-1),et={for:"toggle",class:"block col-span-2 text-xs text-gray-700 mt-4"},tt={class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},st=e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"},null,-1),ot=e("hr",null,null,-1),lt=Q({__name:"UsersListing",setup(rt){const v=X(()=>P(()=>import("./SimpleModal-1f91868a.js"),["assets/SimpleModal-1f91868a.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/SimpleModal-f645a074.css"]));H();const a=j(),{withClientMutation:g}=K();let p=f(!1),b=f(!1),h=f(""),o=Y({});const _=f(!0);a.fetchUsers({}),a.fetchGroupsAndPermissions(),a.fetchGroupsAndPermissions(),a.fetchUsers({});let V=A(()=>a.getUsers);const B=A(()=>a.getGroups);function M(){g(q,o,"createUser").then(r=>a.addUser(r))}function L(){g(z,o,"updateUser").then(r=>a.updateUser(r))}function R(){g(W,o,"createUserAuth").then(r=>a.addUserAuth(r))}function O(){g(J,o,"updateUserAuth").then(r=>a.updateUserAuth(r))}function $(r){let s=[];return r?.groups?.forEach(t=>s.push(t?.name)),s.join(", ")}function k(r,s={}){if(_.value=r,p.value=!0,h.value=(r?"CREATE":"EDIT")+" USER",r){let t=new Object;t.firstName="",t.lastName="",t.email="",t.isActive=!0,t.groupUid=void 0,Object.assign(o,{...t})}else s.userUid=s?.uid,s.groupUid=s?.groups[0]?.uid,Object.assign(o,{...s})}function G(){_.value?M():L(),p.value=!1}function w(r,s){_.value=r,b.value=!0,h.value=(r?"ADD":"EDIT")+" AUTHENTICATION FOR USER "+s?.firstName;let t=new Object;t.userUid=s?.uid,t.password="",t.passwordc="",r?(t.userName="",t.isBlocked=!1,Object.assign(o,{...t})):(t.userName=s?.auth?.userName,t.isBlocked=s?.auth?.isBlocked,Object.assign(o,{...t}))}function I(){_.value?R():O(),b.value=!1}return(r,s)=>(n(),c(y,null,[e("div",te,[se,e("div",oe,[le,e("button",{onClick:s[0]||(s[0]=t=>k(!0)),class:"px-2 py-1 ml-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add User/Lab Contact ")]),re,e("div",ae,[e("div",ne,[e("table",ie,[de,e("tbody",ce,[(n(!0),c(y,null,N(l(V),t=>(n(),c("tr",{key:t.uid},[e("td",ue,[e("div",pe,[e("div",be,i(t.firstName),1)])]),e("td",me,[e("div",ge,i(t.lastName),1)]),e("td",he,[e("div",_e,i(t.email),1)]),e("td",fe,[e("span",{class:E(["",["block h-4 w-4 rounded-full bottom-0 right-0",t?.isActive?"bg-emerald-600":"bg-orange-600"]])},null,2)]),e("td",xe,[e("div",ye,i($(t)),1)]),e("td",ve,[e("div",ke,i(t?.auth?.userName),1)]),e("td",we,[e("div",Ue,i(t?.auth?.userType),1)]),e("td",Ae,[t?.auth?(n(),c("span",{key:0,class:E(["block h-4 w-4 rounded-full bottom-0 right-0",t?.auth?.isBlocked?"bg-orange-600":"bg-emerald-600"])},null,2)):u("v-if",!0)]),e("td",Ne,[e("button",{onClick:U=>k(!1,t),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500 rounded-sm transition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Edit User ",8,Ee),t?.auth?u("v-if",!0):(n(),c("button",{key:0,onClick:U=>w(!0,t),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500 rounded-sm transition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Add Auth ",8,Ce)),t?.auth?(n(),c("button",{key:1,onClick:U=>w(!1,t),class:"px-2 py-1 mr-2 border-orange-500 border text-orange-500 rounded-sm transition duration-300 hover:bg-orange-700 hover:text-white focus:outline-none"}," Edit Auth ",8,De)):u("v-if",!0)])]))),128))])])])])]),u(" UserForm Modal "),l(p)?(n(),C(l(v),{key:0,onClose:s[7]||(s[7]=t=>F(p)?p.value=!1:p=!1)},{header:x(()=>[e("h3",null,i(l(h)),1)]),body:x(()=>[e("form",Fe,[e("div",Te,[e("label",Se,[Ve,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[1]||(s[1]=t=>l(o).firstName=t),placeholder:"First Name ..."},null,512),[[m,l(o).firstName]])]),e("label",Be,[Me,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[2]||(s[2]=t=>l(o).lastName=t),placeholder:"Last Name ..."},null,512),[[m,l(o).lastName]])]),e("label",Le,[Re,d(e("input",{class:"form-input mt-1 block w-full",type:"email","onUpdate:modelValue":s[3]||(s[3]=t=>l(o).email=t),placeholder:"Email ..."},null,512),[[m,l(o).email]])]),e("label",Oe,[$e,d(e("select",{class:"form-select block w-full mt-1","onUpdate:modelValue":s[4]||(s[4]=t=>l(o).groupUid=t)},[Ge,(n(!0),c(y,null,N(l(B),t=>(n(),c("option",{key:t.uid,value:t.uid},i(t?.name),9,Ie))),128))],512),[[ee,l(o).groupUid]])]),e("label",Pe,[D("Active "),e("div",He,[d(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":s[5]||(s[5]=t=>l(o).isActive=t),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[T,l(o).isActive]]),je])])]),qe,e("button",{type:"button",onClick:s[6]||(s[6]=S(t=>G(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):u("v-if",!0),u(" UserAuthForm Modal "),l(b)?(n(),C(l(v),{key:1,onClose:s[13]||(s[13]=t=>F(b)?b.value=!1:b=!1)},{header:x(()=>[e("h3",null,i(l(h)),1)]),body:x(()=>[e("form",ze,[e("div",We,[e("label",Je,[Ke,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[8]||(s[8]=t=>l(o).userName=t),placeholder:"First Name ..."},null,512),[[m,l(o).userName]])]),e("label",Qe,[Xe,d(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":s[9]||(s[9]=t=>l(o).password=t),placeholder:"Last Name ..."},null,512),[[m,l(o).password]])]),e("label",Ye,[Ze,d(e("input",{class:"form-input mt-1 block w-full",type:"email","onUpdate:modelValue":s[10]||(s[10]=t=>l(o).passwordc=t),placeholder:"Email ..."},null,512),[[m,l(o).passwordc]])]),e("label",et,[D("Blocked "),e("div",tt,[d(e("input",{type:"checkbox",name:"toggle",id:"toggle","onUpdate:modelValue":s[11]||(s[11]=t=>l(o).isBlocked=t),class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"},null,512),[[T,l(o).isBlocked]]),st])])]),ot,e("button",{type:"button",onClick:s[12]||(s[12]=S(t=>I(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):u("v-if",!0)],64))}}),dt=Z(lt,[["__file","/home/aurthurm/Development/felicity-lims/webapp/views/admin/users/UsersListing.vue"]]);export{dt as default};