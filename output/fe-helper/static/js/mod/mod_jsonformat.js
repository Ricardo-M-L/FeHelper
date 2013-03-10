var baidu=function(){this.version="1.3.5"};baidu.namespace=new Object();baidu.namespace.register=function(fullNS){var reg=/^[_$a-z]+[_$a-z0-9]*/i;var nsArray=fullNS.split(".");var sEval="";var sNS="";for(var i=0;i<nsArray.length;i++){if(!reg.test(nsArray[i])){throw new Error("Invalid namespace:"+nsArray[i]+"");return}if(i!=0){sNS+="."}sNS+=nsArray[i];sEval+="if (typeof("+sNS+") == 'undefined') "+sNS+" = new Object();"}if(sEval!=""){eval(sEval)}};String.prototype.trim=function(){return this.replace(/^\s*|\s*$/g,"")};String.prototype.format=function(){var b=arguments.length,a=this;while(b--){a=a.replace(new RegExp("\\{"+b+"\\}","g"),arguments[b])}return a};Date.prototype.format=function(e){var a=function(m,l){var n="",k=(m<0),j=String(Math.abs(m));if(j.length<l){n=(new Array(l-j.length+1)).join("0")}return(k?"-":"")+n+j};if("string"!=typeof e){return this.toString()}var b=function(k,j){e=e.replace(k,j)};var f=this.getFullYear(),d=this.getMonth()+1,i=this.getDate(),g=this.getHours(),c=this.getMinutes(),h=this.getSeconds();b(/yyyy/g,a(f,4));b(/yy/g,a(parseInt(f.toString().slice(2),10),2));b(/MM/g,a(d,2));b(/M/g,d);b(/dd/g,a(i,2));b(/d/g,i);b(/HH/g,a(g,2));b(/H/g,g);b(/hh/g,a(g%12,2));b(/h/g,g%12);b(/mm/g,a(c,2));b(/m/g,c);b(/ss/g,a(h,2));b(/s/g,h);return e};String.prototype.getBytes=function(){var b=this.replace(/\n/g,"xx").replace(/\t/g,"x");var a=encodeURIComponent(b);return a.replace(/%[A-Z0-9][A-Z0-9]/g,"x").length};var getOuterHtmlEllipsis=function(d){var b=/(<[^>]+>)/g;var a=b.exec(d.outerHTML);var c=a?a[1]:d.outerHTML;c=c.length>40?c.substr(0,40)+"...":c;return c.replace(/</g,"&lt;").replace(/>/g,"&gt;")};var getOuterAndInnerHtmlEllipsis=function(b){var a=jQuery("<div></div>").append(b).html()};(function(){baidu.i18n={};baidu.i18n.getMessage=function(d,b){if(b){for(var c=0,a=b.length;c<a;c++){b[c]=""+b[c]}return chrome.i18n.getMessage(d,b)}else{return chrome.i18n.getMessage(d)}}})();baidu.namespace.register("baidu.log");baidu.log=(function(){var a=function(b,e){var d=109,f=2009,g="http://nsclick.baidu.com/v.gif?pid="+d+"&url="+encodeURIComponent(e)+"&type="+f+"&m="+b+"&_t="+Math.random();var i="imglog__"+(new Date()).getTime(),h=window[i]=new Image();h.onload=(h.onerror=function(){window[i]=null});h.src=g;h=null};return{track:a}})();const MSG_TYPE={BROWSER_CLICKED:"browser-clicked",GET_CSS:"get-css",GET_JS:"get-js",GET_HTML:"get-html",GET_COOKIE:"get-cookie",REMOVE_COOKIE:"remove-cookie",SET_COOKIE:"set-cookie",GET_OPTIONS:"get_options",SET_OPTIONS:"set_options",CSS_READY:"css-ready",JS_READY:"js-ready",HTML_READY:"html-ready",START_OPTION:"start-option",OPT_START_FCP:"opt-item-fcp",OPT_START_GRID:"opt-item-grid",CALC_PAGE_LOAD_TIME:"calc-page-load-time",SHOW_PAGE_LOAD_TIME:"show-page-load-time",FCP_HELPER_DETECT:"fcp-helper-detect",GRID_DETECT:"grid-detect",FDP_HELPER:"fdp-helper",EN_DECODE:"en-decode",JSON_FORMAT:"json_format",QR_CODE:"qr_code",GET_PAGE_WPO_INFO:"get_page_wpo_info"};const FILE={STYLE:"style",LINK:"link",SCRIPT:"script-block"};const PUBLIC_ID_WHITE_LIST={"":{systemIds:{"":true}},"-//W3C//DTD HTML 3.2 Final//EN":{systemIds:{"":true}},"-//W3C//DTD HTML 4.0//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/strict.dtd":true}},"-//W3C//DTD HTML 4.01//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/strict.dtd":true}},"-//W3C//DTD HTML 4.0 Transitional//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/loose.dtd":true}},"-//W3C//DTD HTML 4.01 Transitional//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/loose.dtd":true,"http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd":true}},"-//W3C//DTD XHTML 1.1//EN":{systemIds:{"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd":true}},"-//W3C//DTD XHTML Basic 1.0//EN":{systemIds:{"http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd":true}},"-//W3C//DTD XHTML 1.0 Strict//EN":{systemIds:{"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd":true}},"-//W3C//DTD XHTML 1.0 Transitional//EN":{systemIds:{"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd":true}},"ISO/IEC 15445:1999//DTD HyperText Markup Language//EN":{systemIds:{"":true}},"ISO/IEC 15445:2000//DTD HTML//EN":{systemIds:{"":true}},"ISO/IEC 15445:1999//DTD HTML//EN":{systemIds:{"":true}}};const COMPAT_MODE_DIFF_PUBLIC_ID_MAP={"-//W3C//DTD HTML 4.0 Transitional//EN":{systemIds:{"http://www.w3.org/TR/html4/loose.dtd":{IE:"S",WebKit:"Q"}}},"ISO/IEC 15445:2000//DTD HTML//EN":{systemIds:{"":{IE:"Q",WebKit:"S"}}},"ISO/IEC 15445:1999//DTD HTML//EN":{systemIds:{"":{IE:"Q",WebKit:"S"}}}};const HTML_DEPRECATED_TAGS={acronym:"定义首字母缩写",applet:"定义Java Applet",basefont:"定义Font定义",big:"定义大号文本",center:"定义居中的文本",dir:"定义目录列表",font:"定义文字相关",frame:"定义框架",frameset:"定义框架集",isindex:"定义单行的输入域",noframes:"定义noframe 部分",s:"定义加删除线的文本",strike:"定义加删除线的文本",tt:"定义打字机文本",u:"定义下划线文本",xmp:"定义预格式文本",layer:"定义层"};const HTML_DEPRECATED_ATTRIBUTES={align:{iframe:true,img:true,object:true,table:true},color:{font:true},height:{td:true,th:true},language:{script:true},noshade:{hr:true},nowrap:{td:true,th:true},size:{hr:true,font:true,basefont:true}};const BLOCK_HTML_ELEMENT=["address","blockquote","center","dir","div","dl","fieldset","form","h1","h2","h3","h4","h5","h6","hr","isindex","menu","noframes","noscript","ol","p","pre","table","ul"];const INLINE_HTML_ELEMENT=["a","acronym","b","bdo","big","br","cite","code","dfn","em","font","i","img","input","kbd","label","q","s","samp","select","small","span","strike","strong","sub","sup","textarea","tt","u","var"];const CHANGE_ABLE_HTML_ELEMENT=["applet","button","del","iframe","ins","map","object","script"];const CONDITIONAL_COMMENT_REGEXP=/\[\s*if\s+[^\]][\s\w]*\]/i;const NOT_IE_REVEALED_OPENING_CONDITIONAL_COMMENT_REGEXP=/^\[if\s+(!IE|false)\]$/i;const REVEALED_CLOSING_CONDITIONAL_COMMENT_REGEXP=/^\[endif\s*\]$/i;const NOT_IE_HIDDEN_CONDITIONAL_COMMENT_REGEXP=/^\[if\s+(!IE|false)\]>.*<!\[endif\]$/i;const REG={SCRIPT:/<script[^>]*>[\s\S]*?<\/[^>]*script>/gi,COMMENT:/<!--[\s\S]*?--\>/g,CSS_EXPRESSION:/expression[\s\r\n ]?\(/gi,TEXTAREA:/<textarea[^>]*>[\s\S]*?<\/[^>]*textarea>/gi,INVALID_TAG:/<\W+>/gi};const SELF_CLOSING_TAGS=["meta","link","area","base","col","input","img","br","hr","param","embed"];const HTML_DOM_MAX_DEPTH=30;const LOG={options_page_opened:"m_20111124_options_page_opened",options_page_btnsave:"m_20111124_options_page_btnsave",options_page_btnclose:"m_20111124_options_page_btnclose",popup_page_show:"m_20111124_popup_page_show",popup_page_fcp:"m_20111124_popup_page_fcp",popup_page_grid:"m_20111124_popup_page_grid",popup_page_fdp:"m_20111124_popup_page_fdp",popup_page_endecode:"m_20111124_popup_page_endecode",popup_page_loadtime:"m_20111124_popup_page_loadtime",endecode_page_opened:"m_20111124_endecode_page_opened",endecode_page_uniEncode:"m_20111124_endecode_page_uniEncode",endecode_page_uniDecode:"m_20111124_endecode_page_uniDecode",endecode_page_utf8Encode:"m_20111124_endecode_page_utf8Encode",endecode_page_utf8Decode:"m_20111124_endecode_page_utf8Decode",endecode_page_base64Encode:"m_20111124_endecode_page_base64Encode",endecode_page_base64Decode:"m_20111124_endecode_page_base64Decode",endecode_page_btnchange:"m_20111124_endecode_page_btnchange",endecode_page_btnclear:"m_20111124_endecode_page_btnclear",fdp_page_opened:"m_20111124_fdp_page_opened",fdp_page_spacedoc:"m_20111124_fdp_page_spacedoc",fdp_page_fedoc:"m_20111124_fdp_page_fedoc",fdp_page_btnsearch:"m_20111124_fdp_page_btnsearch",fcp_detect_show:"m_20111124_fcp_detect_show",fcp_detect_close:"m_20111124_fcp_detect_close",fcp_detect_min:"m_20111124_fcp_detect_min",fcp_detect_max:"m_20111124_fcp_detect_max",fcp_detect_morehtml:"m_20111124_fcp_detect_morehtml",fcp_detect_morecss:"m_20111124_fcp_detect_morecss",fcp_detect_morejs:"m_20111124_fcp_detect_morejs",grid_detect_show:"m_20111124_grid_detect_show",grid_detect_esc:"m_20111124_grid_detect_esc",grid_detect_btnclose:"m_20111124_grid_detect_btnclose",fehelper_user_count:"m_20111124_fehelper_user_count"};var JsonFormatDealer=(function(){var c=1,g=2,a=3,e=4,n=5,p=6;function i(v){v=("__"+v+"__").split("");var u={singleQuote:false,doubleQuote:false,regex:false,blockComment:false,lineComment:false,condComp:false};for(var t=0,s=v.length;t<s;t++){if(u.regex){if(v[t]==="/"&&v[t-1]!=="\\"){u.regex=false}continue}if(u.singleQuote){if(v[t]==="'"&&v[t-1]!=="\\"){u.singleQuote=false}continue}if(u.doubleQuote){if(v[t]==='"'&&v[t-1]!=="\\"){u.doubleQuote=false}continue}if(u.blockComment){if(v[t]==="*"&&v[t+1]==="/"){v[t+1]="";u.blockComment=false}v[t]="";continue}if(u.lineComment){if(v[t+1]==="\n"||v[t+1]==="\r"){u.lineComment=false}v[t]="";continue}if(u.condComp){if(v[t-2]==="@"&&v[t-1]==="*"&&v[t]==="/"){u.condComp=false}continue}u.doubleQuote=v[t]==='"';u.singleQuote=v[t]==="'";if(v[t]==="/"){if(v[t+1]==="*"&&v[t+2]==="@"){u.condComp=true;continue}if(v[t+1]==="*"){v[t]="";u.blockComment=true;continue}if(v[t+1]==="/"){v[t]="";u.lineComment=true;continue}u.regex=true}}return v.join("").slice(2,-2)}localStorage.jfVersion="0.5.6";var d,b=document.createElement("span");function j(u,t){var s=b.cloneNode(false);s.className=t;s.innerText=u;return s}function l(t){var s=b.cloneNode(false);s.innerText=t;return s}function r(t){var s=b.cloneNode(false);s.className=t;return s}var q={t_kvov:r("kvov"),t_exp:r("e"),t_key:r("k"),t_string:r("s"),t_number:r("n"),t_null:j("null","nl"),t_true:j("true","bl"),t_false:j("false","bl"),t_oBrace:j("{","b"),t_cBrace:j("}","b"),t_oBracket:j("[","b"),t_cBracket:j("]","b"),t_ellipsis:r("ell"),t_blockInner:r("blockInner"),t_colonAndSpace:document.createTextNode(":\u00A0"),t_commaText:document.createTextNode(","),t_dblqText:document.createTextNode('"')};function h(F,C){var A,E,y,w=q,x,v,s;if(typeof F==="string"){A=c}else{if(typeof F==="number"){A=g}else{if(F===false||F===true){A=n}else{if(F===null){A=p}else{if(F instanceof Array){A=e}else{A=a}}}}}E=w.t_kvov.cloneNode(false);if(A===a||A===e){y=false;for(x in F){if(F.hasOwnProperty(x)){y=true;break}}if(y){E.appendChild(w.t_exp.cloneNode(false))}}if(C!==false){E.classList.add("objProp");v=w.t_key.cloneNode(false);v.textContent=JSON.stringify(C).slice(1,-1);E.appendChild(w.t_dblqText.cloneNode(false));E.appendChild(v);E.appendChild(w.t_dblqText.cloneNode(false));E.appendChild(w.t_colonAndSpace.cloneNode(false))}else{E.classList.add("arrElem")}var D,L;switch(A){case c:var u=b.cloneNode(false),G=JSON.stringify(F);G=G.substring(1,G.length-1);if(F[0]==="h"&&F.substring(0,4)==="http"){var t=document.createElement("A");t.href=F;t.innerText=G;u.appendChild(t)}else{u.innerText=G}s=w.t_string.cloneNode(false);s.appendChild(w.t_dblqText.cloneNode(false));s.appendChild(u);s.appendChild(w.t_dblqText.cloneNode(false));E.appendChild(s);break;case g:s=w.t_number.cloneNode(false);s.innerText=F;E.appendChild(s);break;case a:E.appendChild(w.t_oBrace.cloneNode(true));if(y){E.appendChild(w.t_ellipsis.cloneNode(false));D=w.t_blockInner.cloneNode(false);var B=0,H,K;for(H in F){if(F.hasOwnProperty(H)){B++;L=h(F[H],H);K=w.t_commaText.cloneNode();L.appendChild(K);D.appendChild(L)}}L.removeChild(K);E.appendChild(D)}E.appendChild(w.t_cBrace.cloneNode(true));break;case e:E.appendChild(w.t_oBracket.cloneNode(true));if(y){E.appendChild(w.t_ellipsis.cloneNode(false));D=w.t_blockInner.cloneNode(false);for(var I=0,z=F.length,J=z-1;I<z;I++){L=h(F[I],false);if(I<J){L.appendChild(w.t_commaText.cloneNode())}D.appendChild(L)}E.appendChild(D)}E.appendChild(w.t_cBracket.cloneNode(true));break;case n:if(F){E.appendChild(w.t_true.cloneNode(true))}else{E.appendChild(w.t_false.cloneNode(true))}break;case p:E.appendChild(w.t_null.cloneNode(true));break}return E}function m(u,s){var w=h(u,false);w.classList.add("rootKvov");var t=document.createElement("DIV");t.id="formattedJson";t.appendChild(w);var v=t.outerHTML;if(s!==null){v='<div id="jsonpOpener">'+s+" ( </div>"+v+'<div id="jsonpCloser">)</div>'}return v}var k=function(u){var B=null;var v=JsonFormatEntrance;if(u.type==="SENDING TEXT"){var w,D=u.text;try{w=new Function("return "+D)()}catch(y){D=D.trim();var t;if(!(t=D.indexOf("("))){v.postMessage(["NOT JSON","no opening parenthesis"]);v.disconnect();return}var s=i(D.substring(0,t)).trim();if(!s.match(/^[a-zA-Z_$][\.\[\]'"0-9a-zA-Z_$]*$/)){v.postMessage(["NOT JSON","first bit not a valid function name"]);v.disconnect();return}var C;if(!(C=D.lastIndexOf(")"))){v.postMessage(["NOT JSON","no closing paren"]);v.disconnect();return}var A=i(D.substring(C+1)).trim();if(A!==""&&A!==";"){v.postMessage(["NOT JSON","last closing paren followed by invalid characters"]);v.disconnect();return}D=D.substring(t+1,C);try{w=JSON.parse(D)}catch(z){v.postMessage(["NOT JSON","looks like a function call, but the parameter is not valid JSON"]);return}B=s}if(typeof w!=="object"&&typeof w!=="array"){v.postMessage(["NOT JSON","technically JSON but not an object or array"]);v.disconnect();return}v.postMessage(["FORMATTING"]);var x=m(w,B);v.postMessage(["FORMATTED",x]);v.disconnect()}};var f=function(s){k(s)};var o=function(){};return{postMessage:f,disconnect:o}})();var JsonFormatEntrance=(function(){var q,n,m,h,f,j=JsonFormatDealer,k=+(new Date()),p,t,a,u;var i=function(A){switch(A[0]){case"NOT JSON":n.style.display="";q.innerHTML='<span class="x-json-tips">JSON不合法，请检查：</span>';a=+(new Date());break;case"FORMATTING":t=+(new Date());clearTimeout(f);var w=document.getElementById("optionBar");if(w){w.parentNode.removeChild(w)}w=document.createElement("div");w.id="optionBar";var z=document.createElement("button"),y=document.createElement("button");z.id="buttonPlain";z.innerText="元数据";y.id="buttonFormatted";y.innerText="格式化";y.classList.add("selected");var x=false;z.addEventListener("click",function(){if(!x){x=true;n.style.display="";q.style.display="none";y.classList.remove("selected");z.classList.add("selected")}},false);y.addEventListener("click",function(){if(x){x=false;n.style.display="none";q.style.display="";y.classList.add("selected");z.classList.remove("selected")}},false);w.appendChild(z);w.appendChild(y);document.addEventListener("click",l,false);q.parentNode.appendChild(w);break;case"FORMATTED":h.style.display="";q.innerHTML=A[1];u=+(new Date());break;default:throw new Error("Message not understood: "+A[0])}};var s=0;function d(A){var y,x,w,z;for(x=A.length-1;x>=0;x--){y=A[x];y.classList.add("collapsed");if(!y.id){y.id="kvov"+(++s);w=y.firstElementChild;while(w&&!w.classList.contains("blockInner")){w=w.nextElementSibling}if(!w){continue}z=w.children.length;var B=z+(z===1?" item":" items");m.insertAdjacentHTML("beforeend","\n#kvov"+s+'.collapsed:after{color: #aaa; content:" // '+B+'"}')}}}function b(x){for(var w=x.length-1;w>=0;w--){x[w].classList.remove("collapsed")}}var g=navigator.platform.indexOf("Mac")!==-1,c;if(g){c=function(w){return w.metaKey}}else{c=function(w){return w.ctrlKey}}function l(z){if(z.which===1){var y=z.target;if(y.className==="e"){z.preventDefault();var x=y.parentNode,D=q,w=document.body.offsetHeight,B=document.body.scrollTop,A;if(x.classList.contains("collapsed")){if(c(z)){b(x.parentNode.children)}else{b([x])}}else{if(c(z)){d(x.parentNode.children)}else{d([x])}}D.style.marginBottom=0;if(document.body.offsetHeight<window.innerHeight){return}if(document.body.scrollTop===B){return}var C=B-document.body.scrollTop+8;D.style.marginBottom=C+"px";document.body.scrollTop=B;return}}}var e=function(w){i(w)};var v=function(){};var r=function(w){q=document.getElementById("jfContent");if(!q){q=document.createElement("div");q.id="jfContent";document.body.appendChild(q)}q.style.display="";n=document.getElementById("jfContent_pre");if(!n){n=document.createElement("pre");n.id="jfContent_pre";document.body.appendChild(n)}n.innerHTML=w;n.style.display="none";m=document.getElementById("jfStyleEl");if(!m){m=document.createElement("style");document.head.appendChild(m)}h=document.getElementById("formattingMsg");if(!h){h=document.createElement("pre");h.id="formattingMsg";h.innerHTML='<svg id="spinner" width="16" height="16" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z" fill="#3d7fe6"></path></svg> 格式化中...';document.body.appendChild(h)}j.postMessage({type:"SENDING TEXT",text:w,length:w.length})};var o=function(){try{q.innerHTML="";n.innerHTML=""}catch(w){}};return{format:r,clear:o,postMessage:e,disconnect:v}})();baidu.jsonformat=(function(){var a=function(){$("#btnFormat").click(function(d){var c=$.trim($("#jsonSource").val());JsonFormatEntrance.clear();JsonFormatEntrance.format(c)})};var b=function(){$(function(){a()})};return{init:b}})();baidu.jsonformat.init();