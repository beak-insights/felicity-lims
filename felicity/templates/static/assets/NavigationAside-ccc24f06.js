import{f as u,r as w,v as g,h as m,k as x,x as e,B as s,A as n,s as c,u as o,ag as a,y as b,al as y,p as k,e as N,_ as A}from"./_plugin-vue_export-helper-dacf3d65.js";import{c as d,p}from"./index-41799763.js";import"./shipment-53265c2d.js";import{b as r}from"./runtime-dom.esm-bundler-98433118.js";const _=h=>(k("data-v-db6db1e2"),h=h(),N(),h),S={class:"mx-auto flex flex-col items-center h-full"},C={class:"flex-none relative"},T={id:"aside-nav",class:"",role:"navigation"},E={class:"mr-4"},I={class:"tooltip"},B={class:"mr-4"},P={class:"tooltip"},R={class:"mr-4"},D={class:"tooltip"},M={class:"mr-4"},O={class:"tooltip"},V={class:"mr-4"},L={class:"tooltip"},F={class:"mr-4"},Q={class:"tooltip"},W={class:"mr-4"},q={class:"tooltip"},G={class:"mr-4"},H={class:"tooltip"},K={class:"mr-4"},j={class:"tooltip"},z={class:"mr-4"},Y={class:"tooltip"},$=_(()=>e("div",{class:"flex-grow"},null,-1)),J={key:0,id:"asideFooter",class:"flex-none bg-gray-700 text-center text-gray-100 p-4"},U=_(()=>e("hr",null,null,-1)),X=_(()=>e("span",null,"© 2023 ",-1)),Z=_(()=>e("hr",null,null,-1)),ee=u({__name:"NavigationAside",setup(h){let t=w(!1);function f(){t.value=!t.value}return(te,v)=>{const i=g("font-awesome-icon"),l=g("router-link");return m(),x("div",S,[e("div",C,[e("div",{class:"absolute -right-6 top-2 text-2xl cursor-pointer",onClick:v[0]||(v[0]=se=>f())},[s(i,{icon:"bars"})]),s(l,{to:"/",id:"brand",class:"flex items-center md:w-auto pl-6 pt-2 pb-1 text-white"},{default:n(()=>[s(i,{icon:"meteor",class:"text-3xl"}),e("h1",{class:c(["text-left text-2xl font-medium mx-2 transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])}," Felicity",2)]),_:1}),e("nav",T,[a(s(l,{to:"/dashboard",id:"dashboard-link",class:"flex items-center has-tooltip mt-1 p-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",E,[s(i,{icon:"tachometer-alt"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Dashboard",2),a(e("span",I,"Dashboard",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.DASHBOARD)]]),a(s(l,{to:"/patients-compact",id:"patients-compact-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",B,[s(i,{icon:"bullseye"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Compact",2),a(e("span",P,"Compact",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.PATIENTS_COMPACT)]]),a(s(l,{to:"/patients",id:"patients-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",R,[s(i,{icon:"user-injured"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Patients",2),a(e("span",D,"Patients",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.PATIENTS)]]),a(s(l,{to:"/clients",id:"clients-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",M,[s(i,{icon:"clinic-medical"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Clients",2),a(e("span",O,"Clients",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.CLIENTS)]]),a(s(l,{to:"/samples",id:"samples-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",V,[s(i,{icon:"vial"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Samples",2),a(e("span",L,"Samples",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.SAMPLES)]]),a(s(l,{to:"/worksheets",id:"worksheets-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",F,[s(i,{icon:"grip-vertical"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"WorkSheets",2),a(e("span",Q,"WorkSheets",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.WORKSHEETS)]]),b(` <router-link\r
          v-show="guards.canAccessPage(guards.pages.QC_SAMPLES)"\r
          to="/quality-control"\r
          id="quality-control-link"\r
          class="flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"\r
        >\r
          <span class="mr-4"><font-awesome-icon icon="anchor" /></span>\r
          <span :class="[' transition-all duration-500', viewNavText ? 'scale-100' : 'scale-0 w-0 overflow-hidden']">QControl</span>\r
          <span v-show="!viewNavText" class="tooltip">QControl</span>\r
        </router-link> `),a(s(l,{to:"/notice-manager",id:"notice-manager-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",W,[s(i,{icon:"bell"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"NoticeManager",2),a(e("span",q,"NoticeManager",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.NOTICE_MANAGER)]]),a(s(l,{to:"/bio-banking",id:"bio-banking-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",G,[s(i,{icon:"database"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"BioBanking",2),a(e("span",H,"BioBanking",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.BIO_BANKING)]]),a(s(l,{to:"/shipments",id:"shipments-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",K,[s(i,{icon:"truck"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Referrals",2),a(e("span",j,"Referrals",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.REFERRAL)]]),a(s(l,{to:"/inventory",id:"inventory-link",class:"flex items-center has-tooltip mt-1 py-2 px-6 text-gray-100 hover:bg-gray-800 hover:bg-opacity-25 hover:text-white border-l-4 border-gray-800"},{default:n(()=>[e("span",z,[s(i,{icon:"fa-solid fa-boxes-stacked"})]),e("span",{class:c([" transition-all duration-500",o(t)?"scale-100":"scale-0 w-0 overflow-hidden"])},"Inventory",2),a(e("span",Y,"Inventory",512),[[r,!o(t)]])]),_:1},512),[[r,d(p.INVENTORY)]])])]),$,o(t)?(m(),x("footer",J,[U,X,y("| "),s(l,{to:"/about",class:"text-gray-200"},{default:n(()=>[y(" About")]),_:1}),Z])):b("v-if",!0)])}}});const le=A(ee,[["__scopeId","data-v-db6db1e2"],["__file","/home/aurthurm/Development/felicity-lims/webapp/views/components/nav/NavigationAside.vue"]]);export{le as default};