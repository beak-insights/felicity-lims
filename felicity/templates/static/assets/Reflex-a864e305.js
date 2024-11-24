import{d as _e,I as me,J as he,r as g,n as X,q as fe,m as ve,o,c as l,b as e,t as f,f as a,F as _,C as h,g as S,z as U,A as ye,y as Y,e as v,v as B,ad as k,w as b,i as z,B as H,j as I,S as xe,_ as J,as as be,k as ge}from"./index-0b8039cf.js";import{u as ke,D as we,a as Ce,b as Re,c as Ae,d as Ue}from"./reflex.mutations-ce1546ce.js";import{u as Be}from"./analysis-0f81a9d5.js";const Ve={class:"mt-4 mb-2 text-xl text-gray-600 font-semibold tracking-wide"},De={class:"leading-2 text-md italic tracking-wide"},Se=e("hr",null,null,-1),Ee=e("hr",null,null,-1),$e=["onClick"],Ne={class:"flex justify-start items-center mb-2"},Fe=e("h4",{class:"text-l leading-4 italic"},"Reflex Action Brains",-1),Oe=["onClick"],je={class:"grid grid-cols-3 gap-4"},Te={class:"flex justify-between items-center"},Me={class:"my-2 text-l text-gray-600 font-bold"},Le=["onClick"],qe=["onClick"],Pe={class:"text-gray-500 text-sm"},Xe={action:"post",class:"p-1"},Ye={class:"grid grid-cols-2 gap-x-4 mb-4"},ze={class:"block col-span-1 mb-2"},He=e("span",{class:"text-gray-700"},"Level",-1),Ie={class:"block col-span-2 mb-2"},Je=e("span",{class:"text-gray-700"},"Target Analyses",-1),We=e("option",{value:""},null,-1),Ge=["value"],Ke={class:"block col-span-2 mb-2"},Qe=e("span",{class:"text-gray-700"},"Description",-1),Ze=e("hr",null,null,-1),et={action:"post",class:"p-1"},tt={class:"mb-2"},st=e("span",{class:"text-gray-700"},"Description",-1),ot={class:"flex items-center justify-start my-4 font-bold text-l text-gray-600"},nt=e("span",null,"Conditions (OR)",-1),it=e("p",{class:"italic text-sm text-gray-400"},"Criteria under a condition are evaluated as AND whilst conditions are evaluated as OR",-1),lt={class:"grid grid-cols-2 gap-4 my-4"},at=e("hr",null,null,-1),rt={class:"flex justify-between items-center"},ct={class:"flex justify-start items-center py-2"},dt=e("h5",null,"Criteria (AND)",-1),ut=["onClick"],pt=["onClick"],_t=e("hr",{class:"mb-4"},null,-1),mt={class:"flex items-center justify-between"},ht={class:"flex items-bottom gap-x-2"},ft={class:"flex flex-col whitespace-nowrap mb-2"},vt=e("span",{class:"text-gray-700"},"Analysis",-1),yt=["onUpdate:modelValue","onChange"],xt=e("option",{value:""},null,-1),bt=["value"],gt={class:"flex flex-col whitespace-nowrap mb-2"},kt=e("span",{class:"text-white"},".",-1),wt=["onUpdate:modelValue"],Ct=e("option",{value:"eq"},"=",-1),Rt=e("option",{value:"gt"},">",-1),At=e("option",{value:"lt"},"<",-1),Ut=e("option",{value:"neq"},"≠",-1),Bt=[Ct,Rt,At,Ut],Vt={class:"block col-span-1 mt-1"},Dt=e("span",{class:"text-gray-700"},"Result",-1),St=["onUpdate:modelValue"],Et=["onUpdate:modelValue"],$t=e("option",{value:""},null,-1),Nt=["value"],Ft={class:""},Ot=["onClick"],jt=e("hr",null,null,-1),Tt=e("h3",{class:"mt-4 font-bold text-l text-gray-600"},"Actions",-1),Mt=e("p",{class:"italic text-sm text-gray-400"},"If conditions are met, auto create new analyses and or set final results",-1),Lt={class:"flex justify-start items-center py-2"},qt=e("h5",null,"Create Analyses",-1),Pt=e("span",{class:"text-orange-600"},null,-1),Xt=["onClick"],Yt=e("hr",null,null,-1),zt={class:"flex items-center justify-between"},Ht={class:"flex items-top gap-x-4"},It={class:"flex flex-col whitespace-nowrap mb-2"},Jt=e("span",{class:"text-gray-700"},"Analysis",-1),Wt=["onUpdate:modelValue"],Gt=e("option",{value:""},null,-1),Kt=["value"],Qt={class:"block col-span-1 mb-2"},Zt=e("span",{class:"text-gray-700"},"Count",-1),es=["onUpdate:modelValue"],ts={class:""},ss=["onClick"],os={class:"flex justify-start items-center py-2"},ns=e("h5",null,"Set Final Analyses",-1),is=e("span",{class:"text-orange-600"},null,-1),ls=["onClick"],as=e("hr",null,null,-1),rs={class:"flex items-center justify-between"},cs={class:"flex items-top gap-x-4"},ds={class:"flex flex-col whitespace-nowrap mb-2"},us=e("span",{class:"text-gray-700"},"Analysis",-1),ps=["onUpdate:modelValue","onChange"],_s=e("option",{value:""},null,-1),ms=["value"],hs={class:"block col-span-1 mb-2"},fs=e("span",{class:"text-gray-700"},"Result",-1),vs=["onUpdate:modelValue"],ys=["onUpdate:modelValue"],xs=e("option",{value:""},null,-1),bs=["value"],gs={class:""},ks=["onClick"],ws=e("hr",null,null,-1),Cs=_e({__name:"Reflex",setup(Rs){const O=I(()=>J(()=>import("./FelModal-fd93dd15.js"),["assets/FelModal-fd93dd15.js","assets/index-0b8039cf.js","assets/index-a67f0314.css","assets/FelModal-780aeea9.css"])),W=I(()=>J(()=>import("./FelAccordion-0f288b82.js"),["assets/FelAccordion-0f288b82.js","assets/index-0b8039cf.js","assets/index-a67f0314.css"])),y=ke(),G=Be(),{withClientMutation:V}=me(),K=he();let w=g(!1),D=g(""),m=X({});const C=g(!0);let R=g(!1),c=X({description:"",priority:0,conditions:[],actions:[]});fe(async()=>{y.fetchReflexRuleByUid(K.params?.uid)});const Q=n=>{const t=be(n);return t.charAt(0).toUpperCase()+t.slice(1)},A=G.getAnalysesServicesSimple;function Z(){const n={reflexRuleUid:y.reflexRule?.uid,level:m.level,description:m.description,analyses:m.analyses};V(Ce,{payload:n},"createReflexAction").then(t=>y.addReflexAction(t))}function ee(){const n={reflexRuleUid:y.reflexRule?.uid,level:m.level,description:m.description,analyses:m.analyses};V(Re,{uid:m.uid,payload:n},"updateReflexAction").then(t=>y.updateReflexAction(t))}function j(n,t={}){if(C.value=n,w.value=!0,D.value=(n?"CREATE":"EDIT")+" REFLEX ACTION",n)Object.assign(m,{});else{let r=[];t.analyses?.forEach(s=>r.push(s?.uid)),Object.assign(m,{...t,analyses:r})}}function te(){C.value===!0&&Z(),C.value===!1&&ee(),w.value=!1}const E=g();function se(){const n={...c,reflexActionUid:E.value};V(Ae,{payload:n},"createReflexBrain").then(t=>y.updateReflexBrain(t))}function oe(){const n={reflexActionUid:E.value,priority:c.priority,description:c.description,conditions:c.conditions?.map(t=>({description:t.description,priority:t.priority,criteria:t.criteria?.map(r=>({analysisUid:r.analysisUid,operator:r.operator,value:r.value}))})),actions:c.actions?.map(t=>({addNew:t.addNew?.map(r=>({analysisUid:r.analysisUid,count:r.count})),finalise:t.finalise?.map(r=>({analysisUid:r.analysisUid,value:r.value}))}))};V(Ue,{uid:c.uid,payload:n},"updateReflexBrain").then(t=>y.updateReflexBrain(t))}function T(){c.conditions?.push({description:"",priority:0,criteria:[]})}function ne(n){c.conditions?.splice(n,1)}function ie(){c.actions?.push({addNew:[],finalise:[]})}function M(n){c.conditions[n].criteria?.push({operator:"eq"})}function le(n,t){c.conditions[n].criteria?.splice(t,1)}let $=g([]);function ae(n,t){const r=A?.find(s=>s.uid===t.analysisUid);t.value=void 0,$.value=r?.resultOptions||[]}function L(n){c.actions[n]?.addNew?.push({})}function re(n){c.actions[0]?.addNew?.splice(n,1)}function q(n){c.actions[0]?.finalise?.push({})}function ce(n){c.actions[n]?.finalise?.splice(n,1)}let N=g([]);function de(n,t){const r=A?.find(s=>s.uid===t.analysisUid);t.value=void 0,N.value=r?.resultOptions||[]}function P(n,t,r={}){C.value=n,R.value=!0,D.value=(n?"CREATE":"EDIT")+" REFLEX BRAIN",E.value=t,n?(Object.assign(c,{priority:0,description:"",conditions:[],actions:[]}),T(),M(0),ie(),L(0),q()):Object.assign(c,{...r})}function ue(){C.value===!0&&se(),C.value===!1&&oe(),R.value=!1}function pe(n,t){xe.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&V(we,{uid:t},"deleteReflexBrain").then(s=>y.deleteReflexBrain(n,t))})}return(n,t)=>{const r=ve("font-awesome-icon");return o(),l(_,null,[e("h3",Ve,f(a(y).reflexRule?.name),1),e("p",De,f(a(y).reflexRule?.description),1),Se,e("button",{onClick:t[0]||(t[0]=s=>j(!0)),class:"my-4 px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add Reflex Action "),Ee,(o(!0),l(_,null,h(a(y).reflexRule?.reflexActions,s=>(o(),l("section",{class:"col-span-1",key:s?.uid},[S(a(W),null,{title:U(()=>[e("span",{class:"p-2",onClick:p=>j(!1,s)},[S(r,{icon:"edit",class:"text-md text-gray-400 mr-1"})],8,$e),ye(" Reflex Action Level "+f(s?.level)+" targeting ",1),(o(!0),l(_,null,h(s?.analyses,p=>(o(),l("span",{key:p.uid,class:"ml-1"},f(p?.name)+",",1))),128))]),body:U(()=>[e("div",Ne,[Fe,e("button",{onClick:p=>P(!0,s?.uid,{}),class:"ml-4 px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add Brain ",8,Oe)]),e("div",je,[(o(!0),l(_,null,h(s?.brains,(p,d)=>(o(),l("div",{key:p?.uid,class:"block col-span-1 bg-white py-2 px-4 m"},[e("div",Te,[e("h2",Me,f(Q(d+1))+" Brain ",1),e("div",null,[e("span",{class:"p-2",onClick:x=>P(!1,s.uid,p)},[S(r,{icon:"edit",class:"text-md text-gray-400 mr-1"})],8,Le),e("span",{class:"p-2",onClick:x=>pe(s.uid,p.uid)},[S(r,{icon:"trash",class:"text-md text-red-400 mr-1"})],8,qe)])]),e("p",Pe,f(p?.description),1)]))),128))])]),_:2},1024)]))),128)),a(w)?(o(),Y(a(O),{key:0,onClose:t[5]||(t[5]=s=>z(w)?w.value=!1:w=!1)},{header:U(()=>[e("h3",null,f(a(D)),1)]),body:U(()=>[e("form",Xe,[e("div",Ye,[e("label",ze,[He,v(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":t[1]||(t[1]=s=>a(m).level=s),type:"number",min:"1",placeholder:"Name ..."},null,512),[[B,a(m).level]])]),e("label",Ie,[Je,v(e("select",{name:"analyses",id:"analyses","onUpdate:modelValue":t[2]||(t[2]=s=>a(m).analyses=s),class:"form-input mt-1 block w-full",multiple:""},[We,(o(!0),l(_,null,h(a(A),s=>(o(),l("option",{key:s.uid,value:s.uid},f(s.name),9,Ge))),128))],512),[[k,a(m).analyses]])]),e("label",Ke,[Qe,v(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[3]||(t[3]=s=>a(m).description=s),placeholder:"Description ..."},null,512),[[B,a(m).description]])])]),Ze,e("button",{type:"button",onClick:t[4]||(t[4]=b(s=>te(),["prevent"])),class:"-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save Form ")])]),_:1})):H("",!0),a(R)?(o(),Y(a(O),{key:1,onClose:t[9]||(t[9]=s=>z(R)?R.value=!1:R=!1),contentWidth:"w-4/5"},{header:U(()=>[e("h3",null,f(a(D)),1)]),body:U(()=>[e("form",et,[e("label",tt,[st,v(e("textarea",{cols:"2",class:"form-input mt-1 block w-full","onUpdate:modelValue":t[6]||(t[6]=s=>a(c).description=s),placeholder:"Description ..."},null,512),[[B,a(c).description]])]),e("h3",ot,[nt,e("button",{onClick:t[7]||(t[7]=b(s=>T(),["prevent"])),class:"px-2 py-1 ml-4 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add ")]),it,e("div",lt,[(o(!0),l(_,null,h(a(c).conditions,(s,p)=>(o(),l("section",{class:"bg-slate-100 px-1",id:"criteria",key:p},[at,e("div",rt,[e("div",ct,[dt,e("button",{onClick:b(d=>M(p),["prevent"]),class:"px-2 py-1 ml-4 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," + criteria ",8,ut)]),e("button",{onClick:b(d=>ne(p),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"}," - condition ",8,pt)]),_t,(o(!0),l(_,null,h(s.criteria,(d,x)=>(o(),l("div",{key:x},[e("div",mt,[e("div",ht,[e("label",ft,[vt,v(e("select",{name:"analysisService",id:"analysisService","onUpdate:modelValue":i=>d.analysisUid=i,class:"form-input mt-1",onChange:i=>ae(i,d)},[xt,(o(!0),l(_,null,h(a(A),i=>(o(),l("option",{key:i.uid,value:i.uid},f(i.name),9,bt))),128))],40,yt),[[k,d.analysisUid]])]),e("label",gt,[kt,v(e("select",{name:"operator",id:"operator","onUpdate:modelValue":i=>d.operator=i,class:"form-input mt-1"},[...Bt],8,wt),[[k,d.operator]])]),e("label",Vt,[Dt,a($).length==0?v((o(),l("input",{key:0,class:"form-input mt-1 block w-full","onUpdate:modelValue":i=>d.value=i,type:"text",placeholder:"Result ..."},null,8,St)),[[B,d.value]]):v((o(),l("select",{key:1,name:"criteriaValue",id:"criteriaValue","onUpdate:modelValue":i=>d.value=i,class:"form-input"},[$t,(o(!0),l(_,null,h(a($),i=>(o(),l("option",{key:i.uid,value:i.value},f(i.value),9,Nt))),128))],8,Et)),[[k,d.value]])])]),e("div",Ft,[e("button",{onClick:b(i=>le(p,x),["prevent"]),class:"px-2 py-1 mt-5 ml-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"}," - criteria ",8,Ot)])]),jt]))),128))]))),128))]),Tt,Mt,(o(!0),l(_,null,h(a(c).actions,(s,p)=>(o(),l("section",{class:"grid grid-cols-2 gap-x-4 my-4",key:p},[(o(!0),l(_,null,h(s.addNew,(d,x)=>(o(),l("div",{class:"bg-green-50 px-1",key:x},[e("div",Lt,[qt,Pt,e("button",{onClick:b(i=>L(x),["prevent"]),class:"px-2 py-1 ml-4 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add ",8,Xt)]),Yt,e("div",zt,[e("div",Ht,[e("label",It,[Jt,v(e("select",{name:"analysisService",id:"analysisService","onUpdate:modelValue":i=>d.analysisUid=i,class:"form-input mt-1"},[Gt,(o(!0),l(_,null,h(a(A),i=>(o(),l("option",{key:i.uid,value:i.uid},f(i.name),9,Kt))),128))],8,Wt),[[k,d.analysisUid]])]),e("label",Qt,[Zt,v(e("input",{class:"form-input mt-1 block w-full","onUpdate:modelValue":i=>d.count=i,type:"number",placeholder:"How Many ...",default:"1"},null,8,es),[[B,d.count]])])]),e("div",ts,[e("button",{onClick:b(i=>re(x),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"}," Remove ",8,ss)])])]))),128)),(o(!0),l(_,null,h(a(c).actions,(d,x)=>(o(),l("div",{key:x},[(o(!0),l(_,null,h(d.finalise,(i,F)=>(o(),l("div",{class:"bg-orange-50 px-1",key:F},[e("div",os,[ns,is,e("button",{onClick:b(u=>q(F),["prevent"]),class:"px-2 py-1 ml-4 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"}," Add ",8,ls)]),as,e("div",rs,[e("div",cs,[e("label",ds,[us,v(e("select",{name:"analysisService",id:"analysisService","onUpdate:modelValue":u=>i.analysisUid=u,class:"form-input mt-1",onChange:u=>de(u,i)},[_s,(o(!0),l(_,null,h(a(A),u=>(o(),l("option",{key:u.uid,value:u.uid},f(u.name),9,ms))),128))],40,ps),[[k,i.analysisUid]])]),e("label",hs,[fs,a(N).length==0?v((o(),l("input",{key:0,class:"form-input mt-1 block w-full","onUpdate:modelValue":u=>i.value=u,type:"text",placeholder:"Result ..."},null,8,vs)),[[B,i.value]]):v((o(),l("select",{key:1,name:"finalValue",id:"finalValue","onUpdate:modelValue":u=>i.value=u,class:"form-input mt-1"},[xs,(o(!0),l(_,null,h(a(N),u=>(o(),l("option",{key:u.uid,value:u.value},f(u.value),9,bs))),128))],8,ys)),[[k,i.value]])])]),e("div",gs,[e("button",{onClick:b(u=>ce(F),["prevent"]),class:"px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none"}," Remove ",8,ks)])])]))),128))]))),128))]))),128)),ws,e("button",{type:"button",onClick:t[8]||(t[8]=b(s=>ue(),["prevent"])),class:"-mb-4 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"}," Save ")])]),_:1})):H("",!0)],64)}}}),Vs=ge(Cs,[["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/views/admin/reflex/_id/Reflex.vue"]]);export{Vs as default};