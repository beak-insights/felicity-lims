import{l as r}from"./index-73e47413.js";function S(o,T){const E=r().auth?.user?.groups;if(!E||E?.length==0)return!1;const s=E[0];return s&&s.permissions?s.permissions?.some(t=>t.action==o&&t.target==T):!1}const n={PATIENT:"PATIENT",CLIENT:"CLIENT",SAMPLE:"SAMPLE",RESULT:"RESULT",WORKSHEET:"WORKSHEET",PRODUCT:"PRODUCT",SHIPMENT:"SHIPMENT"},a={CREATE:"CREATE",READ:"READ",UPDATE:"UPDATE",DELETE:"DELETE",SUBMIT:"SUBMIT",CANCEL:"CANCEL",VERIFY:"VERIFY",ISSUE:"ISSUE",ORDER:"ORDER"};export{a,S as h,n as o};