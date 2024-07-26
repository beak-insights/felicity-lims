import{d as fe,X as pe,as as me,s as ve,P as ye,u as he,C as A,D as B,r as L,az as o,aA as M,aH as k,aK as be,o as ke,c as Ce,b as i,e as u,E as c,g as N,G as T,H as _e,f as C,w as d,F as Se,j as xe,_ as ge,k as Re}from"./index-03fd00e9.js";import{u as Ae}from"./samples-72819b73.js";import{h as f,o as p,a as m}from"./constants-0e2456be.js";const Le={class:"mb-4 flex justify-start"},Pe=i("hr",null,null,-1),we=fe({__name:"FelSampleListing",setup(Ee){const D=xe(()=>ge(()=>import("./FelDataTable-b2e5c7c1.js"),["assets/FelDataTable-b2e5c7c1.js","assets/index-03fd00e9.js","assets/index-91994633.css"])),v=pe(),P=me(),{samplePageInfo:w,fetchingSamples:I}=ve(v);let E=ye(),x=he();const a=A({barcodes:!1,can_cancel:!1,can_receive:!1,can_reinstate:!1,can_reject:!1,can_copy_to:!1,can_download:!1,can_print:!1,can_publish:!1,can_store:!1,can_recover:!1}),b=B(()=>v.getSamples),q=L([{name:"All",value:""},{name:"Expected",value:"expected"},{name:"Received",value:"received"},{name:"Awaiting",value:"awaiting"},{name:"Approved",value:"approved"},{name:"Published",value:"published"},{name:"Invalidated",value:"invalidated"},{name:"Cancelled",value:"cancelled"},{name:"Rejected",value:"rejected"},{name:"Stored",value:"stored"},{name:"Referred",value:"referred"},{name:"Paired",value:"paired"}]),j=L([{name:"UID",value:"uid",sortable:!0,sortBy:"asc",defaultSort:!0,showInToggler:!1,hidden:!0},{name:"",value:"",sortable:!1,showInToggler:!1,hidden:!1,customRender:function(e,t){return o("div",[e.priority>1?o("span",{class:[{"text-orange-600":e.priority>1}]},o("i",{class:"fa fa-star"})):"",e.status==="stored"?o("span",o("i",{class:"fa-briefcase"})):""])}},{name:"Sampe ID",value:"sampleId",sortable:!0,sortBy:"asc",hidden:!1,customRender:function(e,t){return o(M,{to:{name:"sample-detail",params:{patientUid:e?.analysisRequest?.patient?.uid,sampleUid:e?.uid}},innerHTML:e?.sampleId})}},{name:"Sample Type",value:"sampleType.name",sortable:!1,sortBy:"asc",hidden:!0},{name:"Test(s)",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,t){return o("span",{innerHTML:$(e.profiles,e.analyses)},[])}},{name:"Patient",value:"",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,t){const s="analysisRequest.patient.firstName".split(".").reduce((r,R)=>r?.[R],e),n="analysisRequest.patient.lastName".split(".").reduce((r,R)=>r?.[R],e);return o("span",{innerHTML:`${s} ${n}`},[])}},{name:"Gender",value:"analysisRequest.patient.gender",sortable:!1,sortBy:"asc",hidden:!0},{name:"Age",value:"analysisRequest.patient.age",sortable:!1,sortBy:"asc",hidden:!0},{name:"Client Patient ID",value:"analysisRequest.patient.clientPatientId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client",value:"analysisRequest.client.name",sortable:!1,sortBy:"asc",hidden:!1},{name:"Client Code",value:"analysisRequest.client.code",sortable:!1,sortBy:"asc",hidden:!0},{name:"Province",value:"analysisRequest.client.district.province.name",sortable:!1,sortBy:"asc",hidden:!0},{name:"District",value:"analysisRequest.client.district.name",sortable:!1,sortBy:"asc",hidden:!0},{name:"Client Request Id",value:"analysisRequest.clientRequestId",sortable:!1,sortBy:"asc",hidden:!1},{name:"Date Collected",value:"dateCollected",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(e,t){const s=t.value.split(".").reduce((n,r)=>n?.[r],e);return o("span",{innerHTML:k(s)},[])}},{name:"Date Created",value:"createdAt",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(e,t){const s=t.value.split(".").reduce((n,r)=>n?.[r],e);return o("span",{innerHTML:k(s)},[])}},{name:"Creator",value:"createdBy.firstName",sortable:!1,sortBy:"asc",hidden:!1},{name:"Date Received",value:"dateReceived",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(e,t){const s=t.value.split(".").reduce((n,r)=>n?.[r],e);return o("span",{innerHTML:k(s)},[])}},{name:"Date Submitted",value:"dateSubmitted",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(e,t){const s=t.value.split(".").reduce((n,r)=>n?.[r],e);return o("span",{innerHTML:k(s)},[])}},{name:"Date Verified",value:"dateVerified",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(e,t){const s=t.value.split(".").reduce((n,r)=>n?.[r],e);return o("span",{innerHTML:k(s)},[])}},{name:"Date Published",value:"datePublished",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(e,t){const s=t.value.split(".").reduce((n,r)=>n?.[r],e);return o("span",{innerHTML:k(s)},[])}},{name:"Date Printed",value:"datePrinted",sortable:!1,sortBy:"asc",hidden:!0,customRender:function(e,t){const s=t.value.split(".").reduce((n,r)=>n?.[r],e);return o("span",{innerHTML:k(s)},[])}},{name:"Printed",value:"printed",sortable:!1,sortBy:"asc",hidden:!0},{name:"Status",value:"status",sortable:!1,sortBy:"asc",hidden:!1,customRender:function(e,t){const s=t.value.split(".").reduce((n,r)=>n?.[r],e);return o("button",{type:"button",class:"bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",innerHTML:s},[])}}]);E?.query?.clientUid&&v.resetSamples(),v.fetchSampleTypes();let H=A({first:void 0,after:"",text:"",sortBy:["name"]});P.fetchAnalysesServices(H),P.fetchAnalysesProfiles();function $(e,t){let s=[];return e.forEach(n=>s.push(n.name)),t.forEach(n=>s.push(n.name)),s.join(", ")}let l=A({first:50,before:"",status:"received",text:"",sortBy:["-uid"],clientUid:be(E?.query?.clientUid),filterAction:!1});v.fetchSamples(l);function O(e){l.first=e.fetchCount,l.before=w?.value?.endCursor??"",l.text=e.filterText,l.status=e.filterStatus,l.filterAction=!1,v.fetchSamples(l)}function U(e){l.first=50,l.before="",l.text=e.filterText,l.status=e.filterStatus,l.filterAction=!0,v.fetchSamples(l)}const _=L(!1);function V(e){b.value?.forEach(t=>t.checked=e.checked),_.value=e.checked,g()}function F(e){const t=b.value.findIndex(s=>s.uid===e.uid);b.value[t].checked=e.checked,J()?_.value=!0:_.value=!1,g()}async function h(){b.value?.forEach(e=>e.checked=!1),_.value=!1,g()}function J(){return b.value?.every(e=>e.checked===!0)}function S(){let e=[];return b.value?.forEach(t=>{t.checked&&e.push(t)}),e}function g(){a.can_cancel=!1,a.can_receive=!1,a.can_reinstate=!1,a.can_download=!1,a.can_publish=!1,a.can_print=!1,a.can_reject=!1,a.can_store=!1,a.can_recover=!1,a.can_copy_to=!1,a.barcodes=!1;const e=S();e.length!==0&&(a.barcodes=!0,e.every(t=>t.status==="expected")&&(a.can_receive=!0),e.every(t=>["received","expected"].includes(t.status))&&(a.can_cancel=!0,a.can_reject=!0),e.every(t=>["received"].includes(t.status))&&(a.can_store=!0,a.can_copy_to=!0),e.every(t=>["stored"].includes(t.status))&&(a.can_recover=!0),e.every(t=>t.status==="cancelled")&&(a.can_reinstate=!0),e.every(t=>["approved","published"].includes(t.status))&&(a.can_copy_to=!0),e.every(t=>t.status==="approved")&&(a.can_publish=!0),e.every(t=>t.status==="published")&&(a.can_print=!0,a.can_download=!0))}function y(){const e=S();let t=[];return e?.forEach(s=>t.push(s.uid)),t}const{cancelSamples:G,reInstateSamples:z,receiveSamples:K,printSamples:X,downloadSamplesImpress:Z,publishSamples:Q,recoverSamples:W,cloneSamples:Y}=Ae(),ee=B(()=>v.getSamples?.length+" of "+v.getSampleCount+" samples"),te=async()=>Y(y()).finally(()=>h()),se=async()=>G(y()).finally(()=>h()),ae=async()=>z(y()).finally(()=>h()),ne=async()=>K(y()).finally(()=>h()),re=async()=>{const e=y().map(t=>({uid:t,action:"publish"}));await Q(e).finally(()=>h())},oe=async()=>await X(y()).finally(()=>h()),le=async()=>await Z(y()).finally(()=>h()),ie=async()=>{const e=S();x.push({name:"reject-samples",state:{samples:JSON.stringify(e)}})},ue=async()=>{const e=S();x.push({name:"store-samples",state:{samples:JSON.stringify(e)}})},ce=async()=>W(y()).finally(()=>h()),de=async()=>x.push({name:"print-barcodes",state:{sampleUids:JSON.stringify(y())}});return(e,t)=>(ke(),Ce(Se,null,[i("div",Le,[u(N(C(M),{to:"/patients/search",class:"px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"},{default:T(()=>[_e("Add Laboratory Request")]),_:1},512),[[c,f(m.CREATE,p.SAMPLE)]])]),Pe,N(C(D),{columns:j.value,data:b.value,toggleColumns:!0,loading:C(I),paginable:!0,pageMeta:{fetchCount:C(l).first,hasNextPage:C(w)?.hasNextPage,countNone:ee.value},searchable:!0,filterable:!0,filterMeta:{defaultFilter:C(l).status,filters:q.value},selectable:!0,allChecked:_.value,onOnSearch:U,onOnPaginate:O,onOnCheck:F,onOnCheckAll:V},{footer:T(()=>[i("div",null,[u(i("button",{onClick:t[0]||(t[0]=d(s=>se(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Cancel ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_cancel]]),u(i("button",{onClick:t[1]||(t[1]=d(s=>ae(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," ReInstate ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_reinstate]]),u(i("button",{onClick:t[2]||(t[2]=d(s=>ne(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Reveive ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_receive]]),u(i("button",{onClick:t[3]||(t[3]=d(s=>ue(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Store ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_store]]),u(i("button",{onClick:t[4]||(t[4]=d(s=>ce(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Recover ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_recover]]),u(i("button",{onClick:t[5]||(t[5]=d(s=>ie(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Reject ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_reject]]),u(i("button",{onClick:t[6]||(t[6]=d(s=>te(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Copy to New ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_copy_to]]),u(i("button",{onClick:t[7]||(t[7]=d(s=>le(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Download ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_download]]),u(i("button",{onClick:t[8]||(t[8]=d(s=>re(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Publish ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_publish]]),u(i("button",{onClick:t[9]||(t[9]=d(s=>oe(),["prevent"])),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Print ",512),[[c,f(m.CANCEL,p.SAMPLE)&&a.can_print]]),u(i("button",{onClick:d(de,["prevent"]),class:"px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Print Barcodes ",512),[[c,a.barcodes]])])]),_:1},8,["columns","data","loading","pageMeta","filterMeta","allChecked"])],64))}}),Te=Re(we,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/sample/FelSampleListing.vue"]]);export{Te as default};