/* empty css             *//* empty css                 *//* empty css                  */import{d as v,m as V,r as c,a as b,c as h,b as p,e as s,w as n,u as k,E as x,o as E,f as I,g as S,p as B,h as R,i as _,j as q,k as C,l as N,_ as U}from"./index-CdsqAC9y.js";import{h as $}from"./request-C_416Kza.js";import{g as F}from"./function-B-T-PDvP.js";import"./user-B7BnKzjv.js";const K=async o=>await $.request("post","/login",o),T=o=>(B("data-v-89198794"),o=o(),R(),o),j={class:"main"},M={class:"content"},z=T(()=>p("h2",{class:"title"},"登录",-1)),A={class:"form"},D=v({__name:"login",setup(o){const d=V(),f=k(),a=c({username:"",password:""}),g=c({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:2,max:10,message:"密码长度在2-10个字符",trigger:"blur"}]}),l=b(),i=m=>{m&&m.validate(async e=>{e&&await K(a).then(t=>{t.code===200?(_({message:t.message,type:"success"}),d.setUser(t.data),d.setToken(t.data.token),F(),f.push("/index")):_({message:t.message,type:"error"})})})};return(m,e)=>{const t=q,u=C,w=N,y=x;return E(),h("main",j,[p("article",M,[z,p("div",A,[s(y,{model:a,rules:g,ref_key:"fromRef",ref:l},{default:n(()=>[s(u,{label:"账号",prop:"username"},{default:n(()=>[s(t,{modelValue:a.username,"onUpdate:modelValue":e[0]||(e[0]=r=>a.username=r)},null,8,["modelValue"])]),_:1}),s(u,{label:"密码",prop:"password"},{default:n(()=>[s(t,{modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=r=>a.password=r),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),s(u,null,{default:n(()=>[s(w,{type:"primary",onKeydown:e[2]||(e[2]=I(r=>i(l.value),["enter"])),onClick:e[3]||(e[3]=r=>i(l.value))},{default:n(()=>[S("登录")]),_:1})]),_:1})]),_:1},8,["model","rules"])])])])}}}),W=U(D,[["__scopeId","data-v-89198794"]]);export{W as default};
