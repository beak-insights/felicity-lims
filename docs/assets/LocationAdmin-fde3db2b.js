import{m as f,_ as W,l as X,q as Z}from"./billing-356772f3.js";import{f as ee,G as te,r as w,c as k,d as P,v as oe,h as r,k as c,x as t,F as x,ak as T,s as A,u as s,D,B as U,y as $,j as ne,A as I,ag as S,i as ie,p as se,e as ae,_ as re}from"./_plugin-vue_export-helper-3f67fb71.js";import{a as O,v as L}from"./runtime-dom.esm-bundler-6e07ef74.js";const ce=f`
    mutation AddCountry($payload: CountryInputType!) {
        createCountry(payload: $payload) {
            ... on CountryType {
                __typename
                uid
                name
                code
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,de=f`
    mutation editCountry($uid: String!, $payload: CountryInputType!) {
        updateCountry(uid: $uid, payload: $payload) {
            ... on CountryType {
                __typename
                uid
                name
                code
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,le=f`
    mutation AddProvince($payload: ProvinceInputType!) {
        createProvince(payload: $payload) {
            ... on ProvinceType {
                __typename
                uid
                name
                code
                countryUid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,ue=f`
    mutation editProvince($uid: String!, $payload: ProvinceInputType!) {
        updateProvince(uid: $uid, payload: $payload) {
            ... on ProvinceType {
                __typename
                uid
                name
                code
                countryUid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,pe=f`
    mutation AddDistrict($payload: DistrictInputType!) {
        createDistrict(payload: $payload) {
            ... on DistrictType {
                __typename
                uid
                name
                code
                provinceUid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,me=f`
    mutation editDistrict($uid: String!, $payload: DistrictInputType!) {
        updateDistrict(uid: $uid, payload: $payload) {
            ... on DistrictType {
                __typename
                uid
                name
                code
                provinceUid
            }
            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`,_=h=>(se("data-v-cf24237d"),h=h(),ae(),h),ye={class:"mt-4"},ve={class:"grid grid-cols-12 gap-4 mt-2"},fe={class:"col-span-3"},_e={class:"w-full flex justify-between items-center pr-4"},be=_(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Countries",-1)),ge={class:"overflow-y-scroll overscroll-contain scroll-section"},he=["onClick"],Ce=["onClick"],we={key:0,class:"col-span-4"},ke={class:"w-full flex justify-between items-center pr-4"},xe=_(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Provinces",-1)),De={class:"overflow-y-scroll overscroll-contain scroll-section"},$e=["onClick"],Oe=["onClick"],je={key:1,class:"col-span-5"},Pe={class:"w-full flex justify-between items-center pr-4"},Te=_(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Districts",-1)),Ae={class:"overflow-y-scroll overscroll-contain scroll-section"},Ue=["onClick"],Ee=["onClick"],Ie={action:"post",class:"p-1"},Se={class:"grid grid-cols-2 gap-x-4 mb-4"},Le={class:"block col-span-1 mb-2"},Ne=_(()=>t("span",{class:"text-gray-700"},"Name",-1)),Re={class:"block col-span-1 mb-2"},Ve=_(()=>t("span",{class:"text-gray-700"},"Code",-1)),Be=_(()=>t("hr",null,null,-1)),Fe=ee({__name:"LocationAdmin",setup(h){const N=te(()=>W(()=>import("./SimpleModal-1f91868a.js"),["assets/SimpleModal-1f91868a.js","assets/_plugin-vue_export-helper-3f67fb71.js","assets/runtime-dom.esm-bundler-6e07ef74.js","assets/SimpleModal-f645a074.css"])),a=X(),{withClientMutation:m}=Z();let l=w(!0),y=w(!1),C=w(""),u=k({}),d=k({}),p=k({}),i=k({}),E=w("");a.fetchCountries();const R=P(()=>a.getCountries);function V(){const n={name:i.name,code:i.code};m(ce,{payload:n},"createCountry").then(e=>{a.addCountry(e),Object.assign(u,e)})}function B(){const n={name:i.name,code:i.code,active:!0};m(de,{uid:i.uid,payload:n},"updateCountry").then(e=>{a.updateCountry(e),Object.assign(u,e)})}function F(){const n={name:i.name,code:i.code,countryUid:u.uid};m(le,{payload:n},"createProvince").then(e=>{a.addProvince(e),Object.assign(d,e)})}function M(){const n={name:i.name,code:i.code,active:!0,countryUid:+i.countryUid};m(ue,{uid:i.uid,payload:n},"updateProvince").then(e=>{a.updateProvince(e),Object.assign(d,e)})}function q(){const n={name:i.name,code:i.code,provinceUid:d.uid};m(pe,{payload:n},"createDistrict").then(e=>{a.addDistrict(e),Object.assign(p,e)})}function Y(){const n={name:i.name,code:i.code,active:!0,provinceUid:+i.provinceUid};m(me,{uid:i.uid,payload:n},"updateDistrict").then(e=>{a.updateDistrict(e),Object.assign(p,e)})}function z(){return u.uid!==void 0}function G(){return d.uid!==void 0}const H=P(()=>a.getProvinces),J=P(()=>a.getDistricts);let j=(n,e)=>{n==="country"&&(Object.assign(u,{...e}),a.filterProvincesByCountry(e.uid)),n==="province"&&(Object.assign(d,{...e}),a.filterDistrictsByProvince(e.uid)),n==="district"&&Object.assign(p,{...e})},K=n=>{n==="country"&&(Object.assign(u,{}),Object.assign(d,{}),Object.assign(p,{})),n==="province"&&(Object.assign(d,{}),Object.assign(p,{})),n==="district"&&Object.assign(p,{})};function v(n,e,b={}){l.value=n,C.value=e,y.value=!0,E.value=(n?"CREATE":"EDIT")+" "+e.toUpperCase(),n?(K(e),Object.assign(i,{})):Object.assign(i,{...b})}function Q(){C.value==="country"&&(l.value===!0&&V(),l.value===!1&&B()),C.value==="province"&&(l.value===!0&&F(),l.value===!1&&M()),C.value==="district"&&(l.value===!0&&q(),l.value===!1&&Y()),y.value=!1}return(n,e)=>{const b=oe("font-awesome-icon");return r(),c(x,null,[t("div",ye,[t("div",ve,[t("section",fe,[t("div",_e,[be,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[0]||(e[0]=o=>v(!0,"country"))}," Add Country ")]),t("div",ge,[(r(!0),c(x,null,T(s(R),o=>(r(),c("div",{key:o.uid,class:A(s(u)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:O(g=>s(j)("country",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,D(o.name),1)],8,he),t("a",{onClick:g=>v(!1,"country",o),class:"px-2 cursor"},[U(b,{icon:"pen"})],8,Ce)],2))),128))])]),z()?(r(),c("section",we,[t("div",ke,[xe,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[1]||(e[1]=o=>v(!0,"province"))}," Add Province ")]),t("div",De,[(r(!0),c(x,null,T(s(H),o=>(r(),c("div",{key:o.uid,class:A(s(d)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:O(g=>s(j)("province",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,D(o.name),1)],8,$e),t("a",{onClick:g=>v(!1,"province",o),class:"px-2 cursor"},[U(b,{icon:"pen"})],8,Oe)],2))),128))])])):$("v-if",!0),G()?(r(),c("section",je,[t("div",Pe,[Te,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[2]||(e[2]=o=>v(!0,"district"))}," Add District ")]),t("div",Ae,[(r(!0),c(x,null,T(s(J),o=>(r(),c("div",{key:o.uid,class:A(s(p)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:O(g=>s(j)("district",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,D(o.name),1)],8,Ue),t("a",{onClick:g=>v(!1,"district",o),class:"px-2 cursor"},[U(b,{icon:"pen"})],8,Ee)],2))),128))])])):$("v-if",!0)])]),$(" Location Edit Form Modal "),s(y)?(r(),ne(s(N),{key:0,onClose:e[6]||(e[6]=o=>ie(y)?y.value=!1:y=!1)},{header:I(()=>[t("h3",null,D(s(E)),1)]),body:I(()=>[t("form",Ie,[t("div",Se,[t("label",Le,[Ne,S(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[3]||(e[3]=o=>s(i).name=o),placeholder:"Name ..."},null,512),[[L,s(i).name]])]),t("label",Re,[Ve,S(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[4]||(e[4]=o=>s(i).code=o),placeholder:"Code ..."},null,512),[[L,s(i).code]])])]),Be,t("button",{type:"button",onClick:e[5]||(e[5]=O(o=>Q(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):$("v-if",!0)],64)}}});const ze=re(Fe,[["__scopeId","data-v-cf24237d"],["__file","/home/aurthurm/Development/felicity-lims/webapp/views/admin/location/LocationAdmin.vue"]]);export{ze as default};
