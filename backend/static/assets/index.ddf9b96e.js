var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,c=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,n=(e,a)=>{for(var s in a||(a={}))o.call(a,s)&&c(e,s,a[s]);if(t)for(var s of t(a))r.call(a,s)&&c(e,s,a[s]);return e},i=(e,t)=>a(e,s(t));import{o as l,c as d,r as p,a as m,b as u,p as f,d as k,F as v,k as y,u as w,e as g,f as h,g as x,t as b,h as j,w as C,i as S,_ as A,j as P,l as L,m as K,n as I,q as z,s as O,v as U,x as W}from"./vendor.b22e8e44.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();var D=(e,a)=>{for(const[s,t]of a)e[s]=t;return e};const T={class:"NinjaLogo",src:"data:image/png;base64,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",alt:"logo"};const q={components:{Logo:D({},[["render",function(e,a){return l(),d("img",T)}]])}},M={class:"header"},N={class:"header-wrapper"},E={class:"flex items-center"},Q=(e=>(f("data-v-7a6e8b7c"),e=e(),k(),e))((()=>m("p",{class:"pl-3 select-none"},"火柴",-1)));var H=D(q,[["render",function(e,a,s,t,o,r){const c=p("Logo");return l(),d("div",M,[m("div",N,[m("div",E,[u(c,{class:"h-10 w-10"}),Q])])])}],["__scopeId","data-v-7a6e8b7c"]]);const V={class:"main"},F={setup:e=>(e,a)=>{const s=p("router-view");return l(),d(v,null,[u(H),m("div",V,[u(s)])],64)}};const R=y.create({prefixUrl:"/api",retry:{limit:0}});function B(e){return R.post("WSCKLogin",{json:e}).json()}const J={setup(){const e=w();g();let a=h({remark:"",jdwsck:void 0,nickName:void 0,timestamp:void 0});const s=async()=>{try{const e=localStorage.getItem("eid"),s=localStorage.getItem("wseid");if(!e&&!s)return void t();if(e){const s=await function(e){const a=new URLSearchParams;return a.set("eid",e),R.get("userinfo",{searchParams:a}).json()}(e);if(!s)return A.error("获取用户CK信息失败，请重重新登录"),void t();a.nickName=s.data.nickName,a.timestamp=new Date(s.data.timestamp).toLocaleString()}if(s){const e=await getWSCKUserinfoAPI(s);if(!e)return A.error("获取用户WSCK信息失败，请重重新登录"),void t();a.nickName=e.data.nickName,a.timestamp=new Date(e.data.timestamp).toLocaleString()}}catch(e){console.error(e)}};x(s);const t=()=>{localStorage.removeItem("eid"),localStorage.removeItem("wseid"),e.push("/login")};return i(n({},b(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:s,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return R.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?A.error(a.message):(A.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},changeremark:async()=>{try{const s=localStorage.getItem("eid"),t=localStorage.getItem("wseid"),o=a.remark;if(s){const e=await function(e){return R.post("update/remark",{json:e}).json()}({eid:s,remark:o});200!==e.code?A.success(e.message):A.error(e.message)}if(t){const a=await(e={wseid:t,remark:o},R.post("updateWSCK/remark",{json:e}).json());200!==a.code?A.success(a.message):A.error(a.message)}}catch(s){console.error(s)}var e},WSCKLogin:async()=>{try{const e=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],s=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(e&&s){const a=await B({wskey:e,pin:s});a.data.wseid?(localStorage.setItem("wseid",a.data.wseid),A.success(a.message)):A.error(a.message||"wskey 解析失败，请检查后重试！")}else A.error("wskey 解析失败，请检查后重试！")}catch(e){console.error(e)}},delWSCKAccount:async()=>{try{const e=localStorage.getItem("wseid"),a=await function(e){return R.post("WSCKDelaccount",{json:e}).json()}({wseid:e});200!==a.code?A.error(a.message):(A.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)}})}},G=e=>(f("data-v-71afa157"),e=e(),k(),e),X={class:"content"},Z={class:"card"},Y=G((()=>m("div",{class:"card-header"},[m("p",{class:"card-title"},"个人中心")],-1))),_={class:"card-body"},$={class:"card-footer"},ee=K("退出登录"),ae=K("删除CK"),se={class:"card"},te=P('<div class="card-header" data-v-71afa157><p class="card-title" data-v-71afa157>WSCK 录入</p><div class="card-body text-base leading-6" data-v-71afa157><b data-v-71afa157>wskey有效期长达一年，请联系管理员确认使用，慎重！</b><p data-v-71afa157>删WSCK在下方。</p><b data-v-71afa157>也可以保持pin不变，随意更改wskey，等同于删除WSCK。改密码解决一切CK泄露问题。</b><p data-v-71afa157>用户须手动提取pin和wskey，格式如：&quot;pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-71afa157>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-71afa157>点击跳转安装</a></p><p class="card-subtitle" data-v-71afa157>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-71afa157>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-71afa157>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p></div></div>',1),oe={class:"card-body text-center"},re={class:"card-footer"},ce=K("重新录入"),ne=K("删除WSCK"),ie={class:"card"},le=G((()=>m("div",{class:"card-header"},[m("p",{class:"card-title"},"修改备注（CK和WSCK同步）")],-1))),de={class:"card-body text-center"},pe={class:"card-footer"},me=K("修改"),ue={class:"card"},fe=G((()=>m("div",{class:"card-header"},[m("p",{class:"card-title"},"常见活动位置"),m("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1))),ke={class:"card-body"},ve={class:"pr-2"},ye=["onClick"];var we=D(J,[["render",function(e,a,s,t,o,r){const c=p("el-button"),n=p("el-input");return l(),d("div",X,[m("div",Z,[Y,m("div",_,[m("p",null,"昵称："+j(e.nickName),1),m("p",null,"更新时间："+j(e.timestamp),1)]),m("div",$,[u(c,{size:"small",auto:"",onClick:t.logout},{default:C((()=>[ee])),_:1},8,["onClick"]),u(c,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:C((()=>[ae])),_:1},8,["onClick"])])]),m("div",se,[te,m("div",oe,[u(n,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),m("div",re,[u(c,{type:"success",size:"small",auto:"",onClick:t.WSCKLogin},{default:C((()=>[ce])),_:1},8,["onClick"]),u(c,{type:"danger",size:"small",auto:"",onClick:t.delWSCKAccount},{default:C((()=>[ne])),_:1},8,["onClick"])])]),m("div",ie,[le,m("div",de,[u(n,{modelValue:e.remark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.remark=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),m("div",pe,[u(c,{type:"success",size:"small",auto:"",onClick:t.changeremark},{default:C((()=>[me])),_:1},8,["onClick"])])]),m("div",ue,[fe,m("div",ke,[m("ul",null,[(l(!0),d(v,null,S(t.activity,((e,a)=>(l(),d("li",{key:a,class:"leading-normal"},[m("span",null,j(e.name)+"：",1),m("span",ve,j(e.address),1),e.href?(l(),d("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,ye)):L("",!0)])))),128))])])])])}],["__scopeId","data-v-71afa157"]]);const ge={setup(){const e=w();g();let a=h({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1,marginWSCKCount:0,allowWSCKAdd:!0,jdwsck:void 0,showQR:!1,showWSCK:!1,showCK:!0});const s=async()=>{try{const e=(await R.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd,a.marginWSCKCount=e.marginWSCKCount,a.allowWSCKAdd=e.allowWSCKAdd,a.showQR=e.showQR,a.showWSCK=e.showWSCK,a.showCK=e.showCK}catch(e){console.error(e)}},t=async()=>{if(this.showQR)try{const e=await R.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(o,3e3))}catch(e){console.error(e),A.error("生成二维码失败！请重试或放弃")}else A.warning("扫码已禁用请手动抓包")},o=async()=>{try{const s=await function(e){return R.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==s?void 0:s.data.errcode){case 0:localStorage.setItem("eid",s.data.eid),A.success(s.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:A.error(s.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(s){clearInterval(a.timer),a.waitLogin=!1}};return x((()=>{s(),t()})),i(n({},b(a)),{getInfo:s,getQrcode:t,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:o,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const s=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],t=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(s&&t){const a=await function(e){return R.post("cklogin",{json:e}).json()}({pt_key:s,pt_pin:t});a.data.eid?(localStorage.setItem("eid",a.data.eid),A.success(a.message),e.push("/")):A.error(a.message||"cookie 解析失败，请检查后重试！")}else A.error("cookie 解析失败，请检查后重试！")}catch(s){console.error(s)}},WSCKLogin:async()=>{try{const s=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],t=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(s&&t){const a=await B({wskey:s,pin:t});a.data.wseid?(localStorage.setItem("wseid",a.data.wseid),A.success(a.message),e.push("/")):A.error(a.message||"wskey 解析失败，请检查后重试！")}else A.error("wskey 解析失败，请检查后重试！")}catch(s){console.error(s)}}})}},he=e=>(f("data-v-3f32f7a3"),e=e(),k(),e),xe={class:"content"},be=P('<div class="card" data-v-3f32f7a3><div class="card-header" data-v-3f32f7a3><div class="flex items-center justify-between" data-v-3f32f7a3><p class="card-title" data-v-3f32f7a3>火柴提醒您</p></div></div><div class="card-body text-base leading-6" data-v-3f32f7a3><p data-v-3f32f7a3>为了您的财产安全请关闭免密支付以及打开支付验密（京东-设置-支付设置-支付验密设置）。</p><p data-v-3f32f7a3>建议京东账户绑定微信以保证提现能到账。</p><p data-v-3f32f7a3>建议登录后修改备注为自己QQ,并加Q群:699935945</p><p data-v-3f32f7a3><a style="" href="https://qr.dingtalk.com/action/joingroup?code=v1,k1,DCC1kAGM9FkkBNPxJuuAshLK//V04kTOlmc4iJBBz2k=&amp;_dt_no_comment=1&amp;origin=11" target="_blank" id="waikiki" data-v-3f32f7a3>钉钉群直达</a></p><p data-v-3f32f7a3><a style="" href="https://jq.qq.com/?_wv=1027&amp;k=XbkLgMIN" target="_blank" id="waikiki" data-v-3f32f7a3>QQ群直达</a></p><p data-v-3f32f7a3><b data-v-3f32f7a3>安全起见，WSCK可以在CK登录后录入，期限半永久。</b></p></div><div class="card-footet" data-v-3f32f7a3></div></div>',1),je={key:0,class:"card"},Ce={class:"card-header"},Se={class:"flex items-center justify-between"},Ae=he((()=>m("p",{class:"card-title"},"扫码登录",-1))),Pe={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Le=he((()=>m("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1))),Ke={class:"card-body text-center"},Ie={key:0,class:"flex flex-col w-48 m-auto mt-4"},ze=K("扫描二维码登录"),Oe=K("跳转到京东 App 登录"),Ue=["src"],We=he((()=>m("div",{class:"card-footer"},null,-1))),De={key:1,class:"card"},Te={class:"card-header"},qe={class:"flex items-center justify-between"},Me=he((()=>m("p",{class:"card-title"},"WSCK 录入",-1))),Ne={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Ee=P('<div class="card-body text-base leading-6" data-v-3f32f7a3><b data-v-3f32f7a3>wskey有效期长达一年，请联系管理员确认使用（删不掉，慎用）</b><p data-v-3f32f7a3>用户须手动提取pin和wskey，格式如：&quot;pt_pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-3f32f7a3>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-3f32f7a3>点击跳转安装</a></p><p class="card-subtitle" data-v-3f32f7a3>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-3f32f7a3>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-3f32f7a3>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p></div><span class="card-subtitle" data-v-3f32f7a3> 请在下方输入您的 WSCK </span>',2),Qe={class:"card-body text-center"},He=K("录入"),Ve=he((()=>m("div",{class:"card-footet"},null,-1))),Fe={key:2,class:"card"},Re={class:"card-header"},Be={class:"flex items-center justify-between"},Je=he((()=>m("p",{class:"card-title"},"CK 登录",-1))),Ge={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Xe=he((()=>m("div",{class:"card-body text-base leading-6"},[m("p",null,[K("PC用户建议使用开源工具"),m("a",{style:{},href:"https://github.com/Waikkii/JD_Get_Cookie",target:"_blank",id:"waikiki"},"JD_Get_Cookie"),K("获取cookie并在下方填写。")]),m("p",null,[K("手机用户可以使用Alook浏览器登录"),m("a",{style:{},href:"https://m.jd.com/",target:"_blank",id:"jd"},"JD官网"),K("，并在菜单-工具箱-开发者工具-Cookies中获取（Android和iPhone通用）。")]),m("p",null,"另外也可以使用抓包工具（iPhone：Stream，Android：HttpCanary）抓取京东app的ck，要注意pt_key和pt_pin字段是以app_open开头的。"),m("p",null,"cookie直接填入输入框即可，Ninja会自动正则提取pt_key和pt_pin。")],-1))),Ze=he((()=>m("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1))),Ye={class:"card-body text-center"},_e=K("登录"),$e=he((()=>m("div",{class:"card-footet"},null,-1)));const ea=[{path:"/",component:we},{path:"/login",component:D(ge,[["render",function(e,a,s,t,o,r){const c=p("el-button"),n=p("el-input");return l(),d("div",xe,[be,e.showQR?(l(),d("div",je,[m("div",Ce,[m("div",Se,[Ae,m("span",Pe,"余量："+j(e.marginCount),1)]),Le]),m("div",Ke,[e.qrCodeVisibility?(l(),d("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,Ue)):(l(),d("div",Ie,[u(c,{type:"primary",round:"",onClick:t.showQrcode},{default:C((()=>[ze])),_:1},8,["onClick"]),u(c,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:C((()=>[Oe])),_:1},8,["onClick"])]))]),We])):L("",!0),e.showWSCK?(l(),d("div",De,[m("div",Te,[m("div",qe,[Me,m("span",Ne,"余量："+j(e.marginWSCKCount),1)]),Ee]),m("div",Qe,[u(n,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),u(c,{type:"primary",size:"small",round:"",onClick:t.WSCKLogin},{default:C((()=>[He])),_:1},8,["onClick"])]),Ve])):L("",!0),e.showCK?(l(),d("div",Fe,[m("div",Re,[m("div",Be,[Je,m("span",Ge,"余量："+j(e.marginCount),1)]),Xe,Ze]),m("div",Ye,[u(n,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),u(c,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:C((()=>[_e])),_:1},8,["onClick"])]),$e])):L("",!0)])}],["__scopeId","data-v-3f32f7a3"]])}],aa=I({history:z(),routes:ea}),sa=[U,W,A],ta=[A],oa=O(F);sa.forEach((e=>{oa.component(e.name,e)})),ta.forEach((e=>{oa.use(e)})),oa.use(aa),oa.mount("#app");
