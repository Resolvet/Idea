(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yswebview-index"],{"06c5":function(t,e,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=i(n("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(t){if("string"===typeof t)return(0,r.default)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.default)(t,e):void 0}}},"0bb1":function(t,e,n){"use strict";var r=n("4ea4");n("99af"),n("caad"),n("c975"),n("acd8"),n("e25e"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("b85c")),a=uni.getSystemInfoSync().windowWidth,o=n("64d8"),s={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,r=e.split("://")[0],i=r.length;n=e[i];i++){if("/"==n&&"/"!=e[i-1]&&"/"!=e[i+1])break;r+=Math.random()>.5?n.toUpperCase():n}return r+=e.substr(i),this[t]=r}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}}},mounted:function(){this.document=document.getElementById("rtf"+this._uid),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var n=this;if(t){var r=document.createElement("div");e?this.rtf?this.rtf.appendChild(r):this.rtf=r:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=r),r.innerHTML=this._handleHtml(t,e);for(var s,l=this.rtf.getElementsByTagName("style"),c=0;s=l[c++];)s.innerHTML=s.innerHTML.replace(/body/g,"#rtf"+this._uid),s.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,r=0;e=t[r++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,f=this.rtf.getElementsByTagName("title");f.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:f[0].innerText}),this.imgList.length=0;for(var d,h=this.rtf.getElementsByTagName("img"),b=0,p=0;d=h[b];b++){parseInt(d.style.width||d.getAttribute("width"))>a&&(d.style.height="auto");var m=d.getAttribute("src");this.domain&&m&&("/"==m[0]?"/"==m[1]?d.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+m:d.src=this.domain+m:m.includes("://")||(d.src=this.domain+"/"+m)),d.hasAttribute("ignore")||"A"==d.parentElement.nodeName||(d.i=p++,u.imgList.push(d.src||d.getAttribute("data-src")),d.onclick=function(){var t=!0;this.ignore=function(){return t=!1},u.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:u.imgList})}),d.onerror=function(){o.errorImg&&(u.imgList[this.i]=this.src=o.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&d.src&&0!=d.i&&(d.setAttribute("data-src",d.src),d.removeAttribute("src"),this._observer.observe(d))}var v,g=this.rtf.getElementsByTagName("a"),y=(0,i.default)(g);try{for(y.s();!(v=y.n()).done;){var _=v.value;_.onclick=function(){var t=!0,e=this.getAttribute("href");if(u.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])u.useAnchor&&u.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(j){y.e(j)}finally{y.f()}var w=this.rtf.getElementsByTagName("video");u.videoContexts=w;for(var x,A=0;x=w[A++];)x.style.maxWidth="100%",x.onerror=function(){u.$emit("error",{source:"video",target:this})},x.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var T,C,k=this.rtf.getElementsByTagName("audio"),S=(0,i.default)(k);try{for(S.s();!(T=S.n()).done;){var I=T.value;I.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(j){S.e(j)}finally{S.f()}if(this.autoscroll){var O,B=this.rtf.getElementsByTagName("table"),L=(0,i.default)(B);try{for(L.s();!(O=L.n()).done;){var M=O.value,E=document.createElement("div");E.style.overflow="scroll",M.parentNode.replaceChild(E,M),E.appendChild(M)}}catch(j){L.e(j)}finally{L.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){n.rect=n.rtf.getBoundingClientRect(),n.rect.height==C&&(n.$emit("ready",n.rect),clearInterval(n._timer)),C=n.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var n=" ",r=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(n,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(n,".").concat(t.id):"")).boundingClientRect();this._in?r.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(n){if(!n[0])return t.fail&&t.fail("Label not found");var r=n[1].scrollTop+n[0].top-(n[2]?n[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=r:uni.pageScrollTo({scrollTop:r,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var n="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var r in o.userAgentStyles)n+="".concat(r,"{").concat(o.userAgentStyles[r],"}");for(r in this.tagStyle)n+="".concat(r,"{").concat(this.tagStyle[r],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*a/750+"px"}))),t}}};e.default=s},"1a54":function(t,e,n){var r=n("3123");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("0857d2ea",r,!0,{sourceMap:!1,shadowMode:!1})},3123:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-a6806c3c{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-a6806c3c{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"3a82":function(t,e,n){"use strict";n.r(e);var r=n("9f77"),i=n("ac37");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("8112");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"a6806c3c",null,!1,r["a"],o);e["default"]=l.exports},"64d8":function(t,e,n){n("ac1f"),n("1276");var r={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:i(" , ,\t,\r,\n,\f"),boolAttrs:i("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:i("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:i("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:i("a,colgroup,fieldset,legend,table"),selfClosingTags:i("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:i("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function i(t){for(var e=Object.create(null),n=t.split(","),r=n.length;r--;)e[n[r]]=!0;return e}t.exports=r},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},8112:function(t,e,n){"use strict";var r=n("1a54"),i=n.n(r);i.a},"9f77":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},"9ff3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{content:'<p>在此特别提醒您（用户）在注册成为用户之前，请认真阅读本《用户隐私协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。本协议约定南京牛牛信用借科技有限公司（以下简称“牛牛信用借”）与用户之间关于“喵小瞳”软件服务（以下简称“服务“）的权利义务。“用户”是指注册、登录、使用本服务的个人。本协议可由牛牛信用借随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在本APP中查阅最新版协议条款。在修改协议条款后，如果用户不接受修改后的条款，请立即停止使用喵小瞳提供的服务，用户继续使用服务将被视为接受修改后的协议。\n\t\t\n\t\t        <h4  class="h-title">一、账号注册</h4>\n\t\t        1、用户在使用本服务前需要注册一个“牛牛信用借”账号。“牛牛信用借”账号应当使用手机号码绑定注册，请用户使用尚未与“牛牛信用借”账号绑定的手机号码，以及未被服务根据本协议封禁的手机号码注册“牛牛信用借”账号。服务可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。<br >\n\t\t        2、“牛牛信用借”系基于“喵小瞳“的APP产品，用户注册时应当授权牛牛信用借及使用其个人信息方可成功注册“牛牛信用借”账号。故用户完成注册即表明用户同意服务提取、公开及使用用户的信息。<br >\n\t\t        3、鉴于“牛牛信用借”账号的绑定注册方式，您同意服务在注册时将允许您的手机号码及手机设备识别码等信息用于注册。<br >\n\t\t        4、在用户注册及使用本服务时，牛牛信用借需要搜集能识别用户身份的个人信息以便服务可以在必要时联系用户，或为用户提供更好的使用体验。牛牛信用借搜集的信息包括但不限于用户的姓名、地址；牛牛信用借同意对这些信息的使用将受限于第三条用户个人隐私信息保护的约束。\n\t\t\n\t\t        <h4  class="h-title">二、用户个人隐私信息保护</h4>\n\t\t        1、如果牛牛信用借发现或收到他人举报或投诉用户违反本协议约定的，牛牛信用借有权不经通知随时对相关内容，包括但不限于用户资料、发贴记录进行审查、删除，并视情节轻重对违规账号处以包括但不限于警告、账号封禁\n\t\t        、设备封禁 、功能封禁 的处罚，且通知用户处理结果。<br >\n\t\t        2、因违反用户协议被封禁的用户，可以自行与牛牛信用借联系。其中，被实施功能封禁的用户会在封禁期届满后自动恢复被封禁功能。被封禁用户可提交申诉，牛牛信用借将对申诉进行审查，并自行合理判断决定是否变更处罚措施。<br >\n\t\t        3、用户理解并同意，牛牛信用借有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应承担由此而产生的一切法律责任。<br >\n\t\t        4、用户理解并同意，因用户违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当赔偿牛牛信用借与合作公司、关联公司，并使之免受损害。\n\t\t\n\t\t        <h4  class="h-title">三、用户发布内容规范</h4>\n\t\t        1、本条所述内容是指用户使用服务的过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复或自动回复消息和相关链接页面，以及其他使用账号或本服务所产生的内容。\n\t\t        <br >\n\t\t        2、用户不得利用“牛牛信用借”账号或本服务制作、上载、复制、发布、传播如下法律、法规和政策禁止的内容：\n\t\t        <br >\n\t\t        (1) 反对宪法所确定的基本原则的； <br >\n\t\t        (2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；\n\t\t        <br >(3) 损害国家荣誉和利益的； <br >\n\t\t        (4) 煽动民族仇恨、民族歧视，破坏民族团结的； <br >\n\t\t        (5) 破坏国家宗教政策，宣扬邪教和封建迷信的； <br >\n\t\t        (6) 散布谣言，扰乱社会秩序，破坏社会稳定的； <br >\n\t\t        (7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的； <br >\n\t\t        (8) 侮辱或者诽谤他人，侵害他人合法权益的； <br >\n\t\t        (9) 含有法律、行政法规禁止的其他内容的信息。 <br >\n\t\t        3、用户不得利用“牛牛信用借”账号或本服务制作、上载、复制、发布、传播如下干扰“服务”正常运营，以及侵犯其他用户或第三方合法权益的内容：\n\t\t        <br >\n\t\t        (1) 含有任何性或性暗示的； <br >\n\t\t        (2) 含有辱骂、恐吓、威胁内容的； <br >\n\t\t        (3) 含有骚扰、垃圾广告、恶意信息、诱骗信息的； <br >\n\t\t        (4) 涉及他人隐私、个人信息或资料的； <br >\n\t\t        (5) 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的； <br >\n\t\t        (6)\n\t\t        含有其他干扰本服务正常运营和侵犯其他用户或第三方合法权益内容的信息。\n\t\t\n\t\t        <h4  class="h-title">四、使用规则</h4>\n\t\t        1、用户在本服务中或通过本服务所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表牛牛信用借的观点、立场或政策，牛牛信用借对此不承担任何责任。\n\t\t        <br >\n\t\t        2、用户不得利用“牛牛信用借”账号或本服务进行如下行为： <br >\n\t\t        (1) 提交、发布虚假信息，或盗用他人头像或资料，冒充、利用他人名义的；\n\t\t        <br >\n\t\t        (2) 强制、诱导其他用户关注、点击链接页面或分享信息的； <br >(3)\n\t\t        虚构事实、隐瞒真相以误导、欺骗他人的； <br >\n\t\t        (4) 利用技术手段批量建立虚假账号的； <br >(5) 利用“牛牛信用借”账号或本服务从事任何违法犯罪活动的； <br >\n\t\t        (6)\n\t\t        制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；\n\t\t        <br >\n\t\t        (7) 其他违反法律法规规定、侵犯其他用户合法权益、干扰“牛牛信用借”正常运营或服务未明示授权的行为。\n\t\t        <br >\n\t\t        3、用户须对利用“牛牛信用借”账号或本服务传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与牛牛信用借无关。 如因此给牛牛信用借或第三方造成损害的，用户应当依法予以赔偿。 <br >\n\t\t        4、牛牛信用借提供的服务中可能包括广告，用户同意在使用过程中显示牛牛信用借和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对依该广告信息进行的交易负责，\n\t\t        对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，牛牛信用借不承担任何责任。\n\t\t\n\t\t        <h4  class="h-title">五、其他</h4>\n\t\t        1、牛牛信用借郑重提醒用户注意本协议中免除牛牛信用借责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险。未成年人应在法定监护人的陪同下阅读本协议。<br >\n\t\t        2、本协议的效力、解释及纠纷的解决，适用于中华人民共和国法律。若用户和牛牛信用借之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户同意将纠纷或争议提交牛牛信用借住所地有管辖权的人民法院管辖。<br >\n\t\t        3、本协议的任何条款无论因何种原因无效或不具可执行性，其余条款仍有效，对双方具有约束力。\n\t\t\n\t\t        <h4  class="h-title">六、知识产权及其它权利</h4>\n\t\t        本《协议》版权由牛牛信用借所有，牛牛信用借保留一切对本《协议》解释的权利。</p>'}},onLoad:function(){},methods:{}};e.default=r},ac37:function(t,e,n){"use strict";n.r(e);var r=n("0bb1"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},aded:function(t,e,n){"use strict";n.r(e);var r=n("9ff3"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},b5da:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={uParse:n("3a82").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("u-parse",{attrs:{html:t.content}})],1)},a=[]},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=i(n("06c5"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,r.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(l)throw o}}}}},d105:function(t,e,n){"use strict";n.r(e);var r=n("b5da"),i=n("aded");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var o,s=n("f0c5"),l=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"25c6f926",null,!1,r["a"],o);e["default"]=l.exports}}]);