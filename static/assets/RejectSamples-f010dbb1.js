import{d as S,ac as j,u as k,P as C,A as V,q,U as N,B as D,o as l,g as c,F as _,z as v,h as s,t as n,i as p,R as E,j as I,v as P,C as U,l as A,w as B,y as M,_ as T}from"./index-f00208cb.js";import{u as F}from"./samples-626af416.js";const O=s("h4",null,"Sample Rejection",-1),$=s("hr",{class:"my-4"},null,-1),z={class:"text-gray-800 font-bold"},J={class:"grid grid-cols-12 gap-1 mt-2"},L={class:"col-span-6 grid grid-cols-2 gap-1"},G={class:"col-span-1"},H={class:"flex w-full"},K=s("span",{class:"text-gray-700 font-semibold w-4/12"},"Sample Type",-1),Q={class:"flex w-full"},W=s("span",{class:"text-gray-700 font-semibold w-4/12"},"Client Sample ID",-1),X={class:"flex w-full"},Y=s("span",{class:"text-gray-700 font-semibold w-4/12"},"Anayses",-1),Z={class:"col-span-1"},ss={class:"flex w-full"},es=s("span",{class:"text-gray-700 font-semibold w-4/12"},"Patient",-1),ts={class:"flex w-full"},os=s("span",{class:"text-gray-700 font-semibold w-4/12"},"Client Patient ID",-1),ns={class:"col-span-5"},as={class:"grid grid-cols-2 gap-2"},ls={class:"col-span-1"},cs={class:"flex flex-col whitespace-nowrap w-full"},is=s("span",{class:"text-gray-800 font-bold"},"Rejection Reasons",-1),rs=s("hr",null,null,-1),ds=["onUpdate:modelValue"],us=s("option",{value:""},null,-1),_s=["value"],ps={class:"col-span-1"},hs={class:"flex flex-col whitespace-nowrap w-full"},fs=s("span",{class:"text-gray-700 font-bold"},"Other",-1),ms=s("hr",null,null,-1),vs=["onUpdate:modelValue"],gs={class:"col-span-1 pt-4 pl-4"},ys=["onClick"],ws=S({__name:"RejectSamples",setup(xs){j();const u=k(),h=C(),{rejectSamples:g}=F(),d=u.options.history.state,i=V({rejections:[]}),y=JSON.parse(window.history.state.samples);let f=[];for(let t of y)t.reasons=[],t.other=void 0,f.push(t);i.rejections=f,q(()=>h.fetchRejectionReasons());const w=(t,o)=>{let r=[];return t?.forEach(e=>r.push(e.name)),o?.forEach(e=>r.push(e.name)),r.join(", ")},x=t=>{i.rejections?.forEach(o=>{o.reasons=t.reasons,o.other=t.other})},b=N(()=>h.getRejectionReasons),R=async()=>{const t=[];i.rejections?.forEach(o=>{t.push({uid:o?.uid,reasons:o?.reasons,other:o?.other})}),await g(t).then(o=>{console.log(t.length,d.back?.toString(),d.back?.toString().includes("patient/")),t.length==1&&d.back?.toString().includes("patient")?u.push({path:d.back.toString()}):u.push({name:"samples-listing"})})};return(t,o)=>{const r=D("font-awesome-icon");return l(),c(_,null,[O,(l(!0),c(_,null,v(i.rejections,(e,m)=>(l(),c("div",{key:m},[$,s("h2",z,n(e?.sampleId)+" → "+n(e?.status),1),s("div",J,[s("div",L,[s("div",G,[s("div",H,[K,s("span",null,n(e?.sampleType?.name),1)]),s("div",Q,[W,s("span",null,n(e?.analysisRequest?.clientRequestId),1)]),s("div",X,[Y,s("span",null,n(w(e?.profiles,e?.analyses)),1)])]),s("div",Z,[s("div",ss,[es,s("span",null,n(e?.analysisRequest?.patient?.firstName)+" "+n(e?.analysisRequest?.patient?.lastName),1)]),s("div",ts,[os,s("span",null,n(e?.analysisRequest?.patient?.clientPatientId),1)])])]),s("div",ns,[s("div",as,[s("div",ls,[s("label",cs,[is,rs,p(s("select",{name:"reasons",rows:"3",class:"form-input mt-1",multiple:"","onUpdate:modelValue":a=>e.reasons=a},[us,(l(!0),c(_,null,v(I(b),a=>(l(),c("option",{key:a.uid,value:a.uid},n(a.reason),9,_s))),128))],8,ds),[[E,e.reasons]])])]),s("div",ps,[s("label",hs,[fs,ms,p(s("input",{type:"text",class:"form-input mt-1 block w-full","onUpdate:modelValue":a=>e.other=a},null,8,vs),[[P,e.other]])])])])]),s("div",gs,[p(s("button",{class:"ml-4 mt-4",onClick:a=>x(e)},[A(r,{icon:"level-down-alt"})],8,ys),[[U,m===0]])])])]))),128)),i.rejections?.length>0?(l(),c("button",{key:0,onClick:o[0]||(o[0]=B(e=>R(),["prevent"])),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600 rounded-sm transition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"}," Reject Samples ")):M("v-if",!0)],64)}}}),Ss=T(ws,[["__file","/home/aurthur/Development/Python/felicity/felicity-lims/webapp/views/sample/RejectSamples.vue"]]);export{Ss as default};