import{K as _,d as W,B as X,r as w,C as k,D as j,z as Z,o as r,c,b as t,F as x,p as P,y as T,f as i,w as D,t as O,g as A,x as I,q as ee,G as E,e as S,v as L,i as te,j as oe,I as ne,J as se,_ as ie,O as ae,k as re}from"./index-2a6c9271.js";const ce=_`
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
`,de=_`
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
`,le=_`
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
`,ue=_`
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
`,pe=_`
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
`,ye=_`
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
`,f=h=>(ne("data-v-cf24237d"),h=h(),se(),h),me={class:"mt-4"},ve={class:"grid grid-cols-12 gap-4 mt-2"},_e={class:"col-span-3"},fe={class:"w-full flex justify-between items-center pr-4"},be=f(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Countries",-1)),ge={class:"overflow-y-scroll overscroll-contain scroll-section"},he=["onClick"],Ce=["onClick"],we={key:0,class:"col-span-4"},ke={class:"w-full flex justify-between items-center pr-4"},xe=f(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Provinces",-1)),De={class:"overflow-y-scroll overscroll-contain scroll-section"},Oe=["onClick"],$e=["onClick"],je={key:1,class:"col-span-5"},Pe={class:"w-full flex justify-between items-center pr-4"},Te=f(()=>t("h2",{class:"text-l font-semibold inline uppercase"},"Districts",-1)),Ae={class:"overflow-y-scroll overscroll-contain scroll-section"},Ie=["onClick"],Ue=["onClick"],Ee={action:"post",class:"p-1"},Se={class:"grid grid-cols-2 gap-x-4 mb-4"},Le={class:"block col-span-1 mb-2"},Ne=f(()=>t("span",{class:"text-gray-700"},"Name",-1)),Re={class:"block col-span-1 mb-2"},Ve=f(()=>t("span",{class:"text-gray-700"},"Code",-1)),Be=f(()=>t("hr",null,null,-1)),Fe=W({__name:"LocationAdmin",setup(h){const N=oe(()=>ie(()=>import("./SimpleModal-0c0664c5.js"),["assets/SimpleModal-0c0664c5.js","assets/index-2a6c9271.js","assets/index-88806377.css","assets/SimpleModal-f645a074.css"])),a=X(),{withClientMutation:y}=ae();let l=w(!0),m=w(!1),C=w(""),u=k({}),d=k({}),p=k({}),s=k({}),U=w("");a.fetchCountries();const R=j(()=>a.getCountries);function V(){const n={name:s.name,code:s.code};y(ce,{payload:n},"createCountry").then(e=>{a.addCountry(e),Object.assign(u,e)})}function B(){const n={name:s.name,code:s.code,active:!0};y(de,{uid:s.uid,payload:n},"updateCountry").then(e=>{a.updateCountry(e),Object.assign(u,e)})}function F(){const n={name:s.name,code:s.code,countryUid:u.uid};y(le,{payload:n},"createProvince").then(e=>{a.addProvince(e),Object.assign(d,e)})}function M(){const n={name:s.name,code:s.code,active:!0,countryUid:+s.countryUid};y(ue,{uid:s.uid,payload:n},"updateProvince").then(e=>{a.updateProvince(e),Object.assign(d,e)})}function q(){const n={name:s.name,code:s.code,provinceUid:d.uid};y(pe,{payload:n},"createDistrict").then(e=>{a.addDistrict(e),Object.assign(p,e)})}function z(){const n={name:s.name,code:s.code,active:!0,provinceUid:+s.provinceUid};y(ye,{uid:s.uid,payload:n},"updateDistrict").then(e=>{a.updateDistrict(e),Object.assign(p,e)})}function Y(){return u.uid!==void 0}function G(){return d.uid!==void 0}const J=j(()=>a.getProvinces),K=j(()=>a.getDistricts);let $=(n,e)=>{n==="country"&&(Object.assign(u,{...e}),a.filterProvincesByCountry(e.uid)),n==="province"&&(Object.assign(d,{...e}),a.filterDistrictsByProvince(e.uid)),n==="district"&&Object.assign(p,{...e})},H=n=>{n==="country"&&(Object.assign(u,{}),Object.assign(d,{}),Object.assign(p,{})),n==="province"&&(Object.assign(d,{}),Object.assign(p,{})),n==="district"&&Object.assign(p,{})};function v(n,e,b={}){l.value=n,C.value=e,m.value=!0,U.value=(n?"CREATE":"EDIT")+" "+e.toUpperCase(),n?(H(e),Object.assign(s,{})):Object.assign(s,{...b})}function Q(){C.value==="country"&&(l.value===!0&&V(),l.value===!1&&B()),C.value==="province"&&(l.value===!0&&F(),l.value===!1&&M()),C.value==="district"&&(l.value===!0&&q(),l.value===!1&&z()),m.value=!1}return(n,e)=>{const b=Z("font-awesome-icon");return r(),c(x,null,[t("div",me,[t("div",ve,[t("section",_e,[t("div",fe,[be,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[0]||(e[0]=o=>v(!0,"country"))}," Add Country ")]),t("div",ge,[(r(!0),c(x,null,P(R.value,o=>(r(),c("div",{key:o.uid,class:T(i(u)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:D(g=>i($)("country",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,O(o.name),1)],8,he),t("a",{onClick:g=>v(!1,"country",o),class:"px-2 cursor"},[A(b,{icon:"pen"})],8,Ce)],2))),128))])]),Y()?(r(),c("section",we,[t("div",ke,[xe,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[1]||(e[1]=o=>v(!0,"province"))}," Add Province ")]),t("div",De,[(r(!0),c(x,null,P(J.value,o=>(r(),c("div",{key:o.uid,class:T(i(d)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:D(g=>i($)("province",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,O(o.name),1)],8,Oe),t("a",{onClick:g=>v(!1,"province",o),class:"px-2 cursor"},[A(b,{icon:"pen"})],8,$e)],2))),128))])])):I("",!0),G()?(r(),c("section",je,[t("div",Pe,[Te,t("button",{class:"p-2 my-2 ml-8 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100",onClick:e[2]||(e[2]=o=>v(!0,"district"))}," Add District ")]),t("div",Ae,[(r(!0),c(x,null,P(K.value,o=>(r(),c("div",{key:o.uid,class:T(i(p)?.uid===o.uid?"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border c-active":"bg-white w-full flex justify-between p-2 mb-1 rounded-l-sm shadow border")},[t("a",{onClick:D(g=>i($)("district",o),["prevent","stop"]),class:"font-semibold text-gray-700"},[t("span",null,O(o.name),1)],8,Ie),t("a",{onClick:g=>v(!1,"district",o),class:"px-2 cursor"},[A(b,{icon:"pen"})],8,Ue)],2))),128))])])):I("",!0)])]),i(m)?(r(),ee(i(N),{key:0,onClose:e[6]||(e[6]=o=>te(m)?m.value=!1:m=!1)},{header:E(()=>[t("h3",null,O(i(U)),1)]),body:E(()=>[t("form",Ee,[t("div",Se,[t("label",Le,[Ne,S(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[3]||(e[3]=o=>i(s).name=o),placeholder:"Name ..."},null,512),[[L,i(s).name]])]),t("label",Re,[Ve,S(t("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":e[4]||(e[4]=o=>i(s).code=o),placeholder:"Code ..."},null,512),[[L,i(s).code]])])]),Be,t("button",{type:"button",onClick:e[5]||(e[5]=D(o=>Q(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):I("",!0)],64)}}});const qe=re(Fe,[["__scopeId","data-v-cf24237d"],["__file","/home/aurthur/Documents/Development/felicity-lims/webapp/views/admin/location/LocationAdmin.vue"]]);export{qe as default};
