import{h as e}from"./request-CcA2miBI.js";const a=async()=>await e.request("get","/student/list"),n=async t=>await e.request("get","/student/search",t),r=async t=>await e.request("delete","/student/remove",{id:t}),u=async t=>await e.request("post","/student/edit",t),d=async t=>await e.request("post","/student/add",t);export{d as a,a as b,u as e,n as g,r};
