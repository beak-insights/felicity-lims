import{d as b,R as E,J as h,r as R,p as D,o as t,c as i,b as l,F as T,C as g,G as x,f as e,i as C,t as L,y as a,B as P,j as o,_ as n,k as S}from"./index-0b8039cf.js";import{u as V}from"./setup-7da018b2.js";import"./_queries-58a09d05.js";const I={class:"mt-4"},O={class:"bg-white shadow-md mt-2"},j={class:"-mb-px flex justify-start"},q=["onClick"],w=b({__name:"AnalysesAdmin",setup(B){const c=o(()=>n(()=>import("./AnalysesCategories-e5c9417f.js"),["assets/AnalysesCategories-e5c9417f.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/analyses.mutations-891c10cb.js","assets/setup-7da018b2.js","assets/_queries-58a09d05.js","assets/analysis-0f81a9d5.js"])),_=o(()=>n(()=>import("./AnalysesProfiles-cbb5f124.js"),["assets/AnalysesProfiles-cbb5f124.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/analyses.mutations-891c10cb.js","assets/setup-7da018b2.js","assets/_queries-58a09d05.js","assets/analysis-0f81a9d5.js"])),m=o(()=>n(()=>import("./AnalysesTemplates-32cd50f3.js"),["assets/AnalysesTemplates-32cd50f3.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/analyses.mutations-891c10cb.js","assets/setup-7da018b2.js","assets/_queries-58a09d05.js","assets/analysis-0f81a9d5.js"])),p=o(()=>n(()=>import("./ServicesAdmin-1da49dc5.js"),["assets/ServicesAdmin-1da49dc5.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/analyses.mutations-891c10cb.js","assets/setup-7da018b2.js","assets/_queries-58a09d05.js","assets/analysis-0f81a9d5.js"])),y=o(()=>n(()=>import("./QCLevels-c92f6797.js"),["assets/QCLevels-c92f6797.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/analyses.mutations-891c10cb.js","assets/analysis-0f81a9d5.js","assets/QCLevels-b0e61712.css"])),u=o(()=>n(()=>import("./QCTemplates-e1f692d0.js"),["assets/QCTemplates-e1f692d0.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/analyses.mutations-891c10cb.js","assets/analysis-0f81a9d5.js"])),d=o(()=>n(()=>import("./RejectionReasons-4dc877d2.js"),["assets/RejectionReasons-4dc877d2.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/analyses.mutations-891c10cb.js","assets/analysis-0f81a9d5.js"])),v=V(),f=E(),A=h();let s=R(A.query.tab||"analyses-profiles");const k=["analyses-profiles","analyses-services","analyses-templates","analyses-categories","quality-control-levels","quality-control-templates","rejection-reasons"];return D(()=>"tab-"+s.value),f.fetchSampleTypes(),v.fetchDepartments({}),(F,N)=>(t(),i("div",I,[l("nav",O,[l("div",j,[(t(),i(T,null,g(k,r=>l("a",{key:r,class:x(["no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200",{"tab-active":e(s)===r}]),onClick:Q=>C(s)?s.value=r:s=r},L(r),11,q)),64))])]),e(s)==="analyses-profiles"?(t(),a(e(_),{key:0})):e(s)==="analyses-services"?(t(),a(e(p),{key:1})):e(s)==="analyses-templates"?(t(),a(e(m),{key:2})):e(s)==="analyses-categories"?(t(),a(e(c),{key:3})):e(s)==="quality-control-levels"?(t(),a(e(y),{key:4})):e(s)==="quality-control-templates"?(t(),a(e(u),{key:5})):e(s)==="rejection-reasons"?(t(),a(e(d),{key:6})):P("",!0)]))}}),$=S(w,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/analyses/AnalysesAdmin.vue"]]);export{$ as default};