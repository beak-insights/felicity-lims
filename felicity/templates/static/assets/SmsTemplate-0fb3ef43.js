import{g as S,W as Y,f as Z,t as K,a2 as v,h as X,b4 as i,b5 as k,Y as ee,a9 as te,r as C,o as d,c as p,a as B,M as h,N as oe,O as e,F as g,H as y,J as l,a5 as ne,a7 as a,z as re,D as b,Z as $,a4 as E,L as W,C as se,af as R,_ as ae}from"./index-93739211.js";const le=S`
    mutation AddSmsTemplate($payload: SmsTemplateInputType!) {
  createSmsTemplate(payload: $payload) {
    ... on SmsTemplateType {
      __typename
      uid
      name
      description
      specificationTrigger
      audience
      template
      createdAt
      updatedAt
      isActive
    }
    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}
    `,ie=S`
    mutation EditSmsTemplate($uid: String!, $payload: SmsTemplateInputType!) {
  updateSmsTemplate(uid: $uid, payload: $payload) {
    ... on SmsTemplateType {
      __typename
      uid
      name
      description
      specificationTrigger
      audience
      template
      createdAt
      updatedAt
      isActive
    }
    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}
    `,de=S`
    mutation DeleteSmsTemplate($uid: String!) {
  deleteSmsTemplate(uid: $uid) {
    ... on DeletedItem {
      __typename
      uid
    }
    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}
    `,ue=S`
    query getSmsTemplatesByTarget($targetType: String!, $targetUid: String!) {
  smsTemplatesByTarget(targetType: $targetType, targetUid: $targetUid) {
    uid
    name
    description
    specificationTrigger
    audience
    template
    createdAt
    updatedAt
    isActive
  }
}
    `,pe={class:"overflow-x-auto mt-4"},ce={class:"align-middle inline-block min-w-full shadow overflow-hidden bg-card text-card-foreground rounded-lg border border-border"},me={class:"min-w-full"},ge={class:"bg-card"},be={class:"px-4 py-2 whitespace-no-wrap border-b border-border"},fe={class:"text-sm text-foreground"},ve={class:"text-xs text-muted-foreground"},ye={class:"px-4 py-2 whitespace-no-wrap border-b border-border"},xe={class:"text-sm text-foreground"},_e={class:"px-4 py-2 whitespace-no-wrap border-b border-border"},Te={class:"text-sm text-foreground"},he={class:"px-4 py-2 border-b border-border"},Se={class:"text-sm text-foreground max-w-xs"},Ae={class:"px-4 py-2 whitespace-no-wrap border-b border-border"},we={class:"px-4 py-2 whitespace-no-wrap text-right border-b border-border"},ke=["onClick"],Ce=["onClick"],$e={class:"text-lg font-bold text-foreground"},Ee={action:"post",class:"p-6 space-y-6"},Ne={class:"space-y-4"},Ue={class:"grid grid-cols-2 gap-4"},Ie={class:"space-y-2"},De={class:"space-y-2"},Me={class:"grid grid-cols-3 gap-4"},Ve={class:"space-y-2"},Be=["value"],We={class:"space-y-2"},Re=["value"],Oe={class:"space-y-2"},Le={class:"space-y-2"},Pe={class:"flex justify-between items-center"},qe={key:0,class:"border border-border rounded-lg p-4 bg-accent/5"},Fe={class:"grid grid-cols-2 gap-4"},je={class:"text-xs font-medium text-muted-foreground uppercase"},He={class:"flex flex-wrap gap-1"},ze=["onClick"],Ge={class:"pt-4 flex gap-2"},Je=Y({__name:"SmsTemplate",props:{targetType:{type:String,required:!0,default:null},targetUid:{type:String,required:!0,default:null}},setup(O){const{withClientMutation:A,withClientQuery:L}=Z(),N=O,{targetType:x,targetUid:_}=K(N);let u=v(!1),U=v(""),r=X({targetType:x.value,targetUid:_.value});const w=v(!0),T=v(!1),I=[{value:i.Normal,label:"Normal Results"},{value:i.BelowNormal,label:"Below Normal (Not Warning)"},{value:i.AboveNormal,label:"Above Normal (Not Warning)"},{value:i.BelowWarning,label:"Below Warning Threshold"},{value:i.AboveWarning,label:"Above Warning Threshold"},{value:i.AnyAbnormal,label:"Any Abnormal Results"},{value:i.AnyWarning,label:"Any Warning Results"},{value:i.AnyResult,label:"Any Result"},{value:i.TextualNormal,label:"Textual Normal Results"},{value:i.TextualWarning,label:"Textual Warning Results"}],D=[{value:k.Patient,label:"Patient"},{value:k.Client,label:"Client"}],P=[{category:"Lab Information",variables:["{lab_name}","{lab_email}","{lab_phone}"]},{category:"Sample Information",variables:["{sample_id}","{client_sample_id}","{date_collected}"]},{category:"Patient Information",variables:["{patient_name}","{patient_id}","{gender}","{client_patient_id}","{age}"]},{category:"Analysis Information",variables:["{analysis_keyword}","{analysis_name}"]},{category:"Result Information",variables:["{result}","{unit}"]},{category:"Client Information",variables:["{client_id}","{client_name}"]},{category:"Other",variables:["Patient identification names (dynamic)"]}],c=v([]);ee(()=>N.targetUid,(n,t)=>{M()}),te(()=>{M()});function M(){L(ue,{targetType:x.value,targetUid:_.value},"smsTemplatesByTarget").then(n=>c.value=n||[])}function q(){const n={...r};A(le,{payload:n},"createSmsTemplate").then(t=>c.value.push(t))}function F(){const n={...r};delete n.uid,delete n.__typename,A(ie,{uid:r.uid,payload:n},"updateSmsTemplate").then(t=>{const s=c.value.findIndex(m=>m.uid===r.uid);s!==-1&&(c.value[s]=t)})}function j(n){confirm("Are you sure you want to delete this SMS template?")&&A(de,{uid:n},"deleteSmsTemplate").then(t=>{const s=c.value.findIndex(m=>m.uid===n);s!==-1&&c.value.splice(s,1)})}function V(n,t={}){w.value=n,u.value=!0,U.value=(n?"CREATE":"EDIT")+" SMS TEMPLATE",n?Object.assign(r,{name:"",template:"",description:"",targetType:x.value,targetUid:_.value,specificationTrigger:i.AnyAbnormal,audience:k.Patient,isActive:!0}):Object.assign(r,{...t,targetType:x.value,targetUid:_.value})}function H(){w.value===!0&&q(),w.value===!1&&F(),u.value=!1}function z(n){typeof r.template!="string"&&(r.template="");const t=document.getElementById("template-input");if(t){const s=t.selectionStart,m=t.selectionEnd;r.template=r.template.substring(0,s)+n+r.template.substring(m),setTimeout(()=>{t.focus(),t.selectionStart=t.selectionEnd=s+n.length},0)}else r.template+=n}const G=n=>I.find(s=>s.value===n)?.label||n,J=n=>D.find(s=>s.value===n)?.label||n;return(n,t)=>{const s=C("fel-button"),m=C("fel-heading"),Q=C("fel-modal");return d(),p(g,null,[B(m,{title:"SMS Templates"},{default:h(()=>[B(s,{onClick:t[0]||(t[0]=o=>V(!0))},{default:h(()=>t[11]||(t[11]=[oe("Add SMS Template")])),_:1})]),_:1}),e("div",pe,[e("div",ce,[e("table",me,[t[12]||(t[12]=e("thead",null,[e("tr",null,[e("th",{class:"px-4 py-2 border-b border-border text-left text-sm font-medium text-muted-foreground"},"Name"),e("th",{class:"px-4 py-2 border-b border-border text-left text-sm font-medium text-muted-foreground"},"Specification Trigger"),e("th",{class:"px-4 py-2 border-b border-border text-left text-sm font-medium text-muted-foreground"},"Audience"),e("th",{class:"px-4 py-2 border-b border-border text-left text-sm font-medium text-muted-foreground"},"Template"),e("th",{class:"px-4 py-2 border-b border-border text-left text-sm font-medium text-muted-foreground"},"Status"),e("th",{class:"px-4 py-2 border-b border-border"})])],-1)),e("tbody",ge,[(d(!0),p(g,null,y(c.value,o=>(d(),p("tr",{key:o?.uid,class:"hover:bg-accent/50"},[e("td",be,[e("div",fe,l(o.name),1),e("div",ve,l(o.description),1)]),e("td",ye,[e("div",xe,l(G(o.specificationTrigger||"")),1)]),e("td",_e,[e("div",Te,l(J(o.audience||"")),1)]),e("td",he,[e("div",Se,l(o.template),1)]),e("td",Ae,[e("span",{class:ne([o.isActive?"bg-green-100 text-green-800":"bg-red-100 text-red-800","px-2 py-1 text-xs font-medium rounded-full"])},l(o.isActive?"Active":"Inactive"),3)]),e("td",we,[e("button",{onClick:f=>V(!1,o),class:"px-2 py-1 mr-2 border border-border bg-background text-foreground transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring hover:bg-accent hover:text-accent-foreground"},"Edit",8,ke),e("button",{onClick:f=>j(o.uid),class:"px-2 py-1 border border-red-500 bg-background text-red-600 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring hover:bg-red-50"},"Delete",8,Ce)])]))),128))])])])]),a(u)?(d(),re(Q,{key:0,onClose:t[10]||(t[10]=o=>R(u)?u.value=!1:u=!1),contentWidth:"w-3/4"},{header:h(()=>[e("h3",$e,l(a(U)),1)]),body:h(()=>[e("form",Ee,[e("div",Ne,[e("div",Ue,[e("label",Ie,[t[13]||(t[13]=e("span",{class:"text-sm font-medium text-muted-foreground"},"Template Name",-1)),b(e("input",{type:"text",class:"w-full px-3 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-ring","onUpdate:modelValue":t[1]||(t[1]=o=>a(r).name=o),placeholder:"Enter template name..."},null,512),[[$,a(r).name]])]),e("label",De,[t[14]||(t[14]=e("span",{class:"text-sm font-medium text-muted-foreground"},"Description",-1)),b(e("input",{type:"text",class:"w-full px-3 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-ring","onUpdate:modelValue":t[2]||(t[2]=o=>a(r).description=o),placeholder:"Enter description..."},null,512),[[$,a(r).description]])])]),e("div",Me,[e("label",Ve,[t[15]||(t[15]=e("span",{class:"text-sm font-medium text-muted-foreground"},"Trigger Condition",-1)),b(e("select",{class:"w-full px-3 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-ring","onUpdate:modelValue":t[3]||(t[3]=o=>a(r).specificationTrigger=o)},[(d(),p(g,null,y(I,o=>e("option",{key:o.value,value:o.value},l(o.label),9,Be)),64))],512),[[E,a(r).specificationTrigger]])]),e("label",We,[t[16]||(t[16]=e("span",{class:"text-sm font-medium text-muted-foreground"},"Audience",-1)),b(e("select",{class:"w-full px-3 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-ring","onUpdate:modelValue":t[4]||(t[4]=o=>a(r).audience=o)},[(d(),p(g,null,y(D,o=>e("option",{key:o.value,value:o.value},l(o.label),9,Re)),64))],512),[[E,a(r).audience]])]),e("label",Oe,[t[18]||(t[18]=e("span",{class:"text-sm font-medium text-muted-foreground"},"Status",-1)),b(e("select",{class:"w-full px-3 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-ring","onUpdate:modelValue":t[5]||(t[5]=o=>a(r).isActive=o)},t[17]||(t[17]=[e("option",{value:!0},"Active",-1),e("option",{value:!1},"Inactive",-1)]),512),[[E,a(r).isActive]])])]),e("div",Le,[e("div",Pe,[t[19]||(t[19]=e("span",{class:"text-sm font-medium text-muted-foreground"},"SMS Template",-1)),e("button",{type:"button",onClick:t[6]||(t[6]=o=>T.value=!T.value),class:"text-xs text-primary hover:text-primary/80"},l(T.value?"Hide":"Show")+" Available Variables ",1)]),b(e("textarea",{id:"template-input",class:"w-full px-3 py-2 border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px]","onUpdate:modelValue":t[7]||(t[7]=o=>a(r).template=o),placeholder:"Enter SMS template with variables e.g., Hello {patient_name}, your {analysis_name} result is {result}..."},null,512),[[$,a(r).template]])]),T.value?(d(),p("div",qe,[t[20]||(t[20]=e("h4",{class:"text-sm font-medium text-foreground mb-3"},"Available Variables:",-1)),e("div",Fe,[(d(),p(g,null,y(P,o=>e("div",{key:o.category,class:"space-y-1"},[e("h5",je,l(o.category),1),e("div",He,[(d(!0),p(g,null,y(o.variables,f=>(d(),p("button",{key:f,type:"button",onClick:Qe=>z(f),class:"text-xs px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded border border-primary/20 transition-colors duration-200"},l(f),9,ze))),128))])])),64))])])):W("",!0)]),e("div",Ge,[e("button",{type:"button",onClick:t[8]||(t[8]=se(o=>H(),["prevent"])),class:"flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"}," Save Template "),e("button",{type:"button",onClick:t[9]||(t[9]=o=>R(u)?u.value=!1:u=!1),class:"px-4 py-2 border border-border bg-background text-foreground transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring hover:bg-accent hover:text-accent-foreground"}," Cancel ")])])]),_:1})):W("",!0)],64)}}});const Ze=ae(Je,[["__scopeId","data-v-ea0c084b"],["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/analyses/services/SmsTemplate.vue"]]);export{Ze as default};
