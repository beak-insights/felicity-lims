import{d as l,p as r,k as d,o as t,c as a,b as s,G as o,y as i,aw as u}from"./index-7210a26e.js";const c=l({name:"FButton",props:{color:{type:String,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingOnly:{type:Boolean,default:!1}},setup(e){return{buttonClasses:r(()=>["px-2 py-1 mr-2 border transition duration-300 focus:outline-none disabled:opacity-50 relative",e.disabled||e.loading?"cursor-not-allowed":`border-${e.color} text-${e.color} hover:bg-${e.color} hover:text-white`])}}}),f=["disabled"],p={class:"flex items-center justify-center gap-2"};function b(e,n,m,y,g,h){return t(),a("button",{class:o(e.buttonClasses),disabled:e.disabled||e.loading},[s("div",p,[e.loading?(t(),a("div",{key:0,class:o(["w-4 h-4 border-2 border-t-transparent rounded-full animate-spin",`border-${e.color}`])},null,2)):i("v-if",!0),s("span",{class:o({"opacity-0":e.loading&&e.loadingOnly})},[u(e.$slots,"default")],2)])],10,f)}const $=d(c,[["render",b],["__file","/home/aurthurm/Documents/Development/felicity/felicity-lims/webapp/components/ui/buttons/FelButton.vue"]]);export{$ as default};