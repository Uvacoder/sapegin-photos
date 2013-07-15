/*!
 * Fotorama 4.0.7 | http://fotorama.io/license/
 */
(function(t,e,n,o){function i(t){var e="bez_"+n.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof n.easing[e]){var o=function(t,e){var n=[null,null],o=[null,null],i=[null,null],a=function(a,r){return i[r]=3*t[r],o[r]=3*(e[r]-t[r])-i[r],n[r]=1-i[r]-o[r],a*(i[r]+a*(o[r]+a*n[r]))},r=function(t){return i[0]+t*(2*o[0]+3*n[0]*t)},s=function(t){for(var e,n=t,o=0;14>++o&&(e=a(n,0)-t,!(.001>Math.abs(e)));)n-=e/r(n);return n};return function(t){return a(s(t),1)}};n.easing[e]=function(e,n,i,a,r){return a*o([t[0],t[1]],[t[2],t[3]])(n/r)+i}}return e}function a(){}function r(t,e,n){return Math.max("number"!=typeof e?-1/0:e,Math.min("number"!=typeof n?1/0:n,t))}function s(t){return t.match(/-?\d+/g)[4]}function u(t){return cn?Number(s(t.css("transform"))):Number(t.css("left").replace("px",""))}function l(t){var e={};return cn?e.transform="translate3d("+t+"px,0,0)":e.left=t,e}function c(t){return{"transition-duration":t+"ms"}}function d(t,e){return t=Number((t+"").replace(e||"px","")),isNaN(t)?!1:t}function f(t){var e=d(t,"%");return e&&/%$/.test(t)?e:!1}function h(t){return d(t)||d(t,"%")?t:!1}function m(t,e,n,o){return(t-(o||0))*(e+(n||0))}function p(t,e,n,o){return-Math.round(t/(e+(n||0))-(o||0))}function v(t,e){return Math.floor(Math.random()*(e-t+1))+t}function g(t){var e=t.data();if(!e.transEnd){var n=t[0],o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};n.addEventListener(o[K.prefixed("transition")],function(t){var n=e.transProp;(n.match(t.propertyName)||n.match("all"))&&(e.transProp=n.replace(t.propertyName,""),e.onEndFn.call(this))}),e.transEnd=!0}}function y(t,e,n){var o,i=t.data();i.transProp=t.css("transition-property"),i.onEndFn=function(){o=!0,e.call(this)},g(t),clearTimeout(i.transTimeout),n&&(i.transTimeout=setTimeout(function(){o||(t.data().onEndFn=a,e.call(t[0]))},1.1*n))}function b(t){cn?(t.css(c(0)),y(t,a)):t.stop();var e=u(t);return t.css(l(e)),e}function w(t,e){return Math.round(t+(e-t)/1.5)}function x(){return x.protocol=x.protocol||("https://"===location.protocol?"https://":"http://"),x.protocol}function _(t){var n=e.createElement("a");return n.href=t,n}function T(t,e){if("string"!=typeof t)return t;t=_(t),t.host=t.host.replace(/^www./,"");var n,o;if("youtube.com"===t.host&&t.search){if(n=t.search.split("v=")[1]){var i=n.indexOf("&");-1!==i&&(n=n.substring(0,i)),o="youtube"}}else"youtube.com"===t.host||"youtu.be"===t.host?(n=t.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),o="youtube"):("vimeo.com"===t.host||"player.vimeo.com"===t.host)&&(o="vimeo",n=t.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return n&&o||!e||(n=t.href,o="custom"),n?{id:n,type:o}:!1}function C(t,e,o){var i,a,r=t.video;return"youtube"===r.type?(a=x()+"img.youtube.com/vi/"+r.id+"/default.jpg",i=a.replace(/\/default.jpg$/,"/hqdefault.jpg"),t.thumbsReady=!0):"vimeo"===r.type?n.ajax({url:x()+"vimeo.com/api/v2/video/"+r.id+".json",dataType:"jsonp",success:function(n){t.thumbsReady=!0,F(e,{img:n[0].thumbnail_large,thumb:n[0].thumbnail_small},t.i,o)}}):t.thumbsReady=!0,{img:i,thumb:a}}function F(t,e,n,o){for(var i=0,a=t.length;a>i;i++){var r=t[i];if(r.i===n&&r.thumbsReady){o.splice(i,1,{i:n,video:r.video,videoReady:!0,caption:r.caption,img:r.img||e.img,thumb:r.thumb||e.thumb});break}}}function k(t){function e(t,e){var n=t.data(),o=t.children("img").eq(0),i=t.attr("href"),a=t.attr("src"),r=o.attr("src"),s=n.video,u=e?T(i,s===!0):!1;return u?i=!1:u=T(s,s),{video:u,img:n.img||i||a||r,thumb:n.thumb||r||a||i,id:t.attr("id")}}var o=[];return t.children().each(function(){var t=n(this),i=t.data();if(t.is("a, img"))n.extend(i,e(t,!0));else{if(t.is(":empty"))return;i.html=this}o.push(i)}),o}function M(t){return 0===t.offsetWidth&&0===t.offsetHeight}function S(t,e,n){t()?e():setTimeout(function(){S(t,e)},n||100)}function P(t,e,n){var o=t.data(),i=o.measures;if(i&&(!o.l||o.l.w!==i.width||o.l.h!==i.height||o.l.r!==i.ratio||o.l.W!==e.w||o.l.H!==e.h||o.l.m!==n)){var a=i.width,s=i.height,u=e.w/e.h,l=i.ratio>=u,c=n===!0,d="contain"===n,f="cover"===n;l&&(c||d)||!l&&f?(a=r(e.w,0,c?a:1/0),s=a/i.ratio):(l&&f||!l&&(c||d))&&(s=r(e.h,0,c?s:1/0),a=s*i.ratio),t.css({width:Math.round(a),height:Math.round(s),marginLeft:Math.round(-a/2),marginTop:Math.round(-s/2)}),o.l={w:i.width,h:i.height,r:i.ratio,W:e.w,H:e.h,m:n}}}function E(t,e){var n=t[0];n.styleSheet?n.styleSheet.cssText=e:t.html(e)}function $(t,e,n){return e===n?!1:e>=t?"left":t>=n?"right":"left right"}function N(t,e,n){if(!n)return!1;var o=Number(t);if(!isNaN(o))return o-1;for(var i=0,a=e.length;a>i;i++){var r=e[i];if(r.id===t){o=i;break}}return o}function L(t,e,o){o=o||{},t.each(function(){var t,i=n(this),r=i.data();r.clickOn||(r.clickOn=!0,n.extend(I(i,{onStart:function(e){t=e,(o.onStart||a).call(this,e)},onMove:o.onMove||a,onEnd:function(n){n.moved||o.tail.checked||e.call(this,t)}}),o.tail))})}function H(){return!1}function j(t){return t.each(function(){n(this).off("mousedown mousemove mouseup").on("mousedown mousemove mouseup",H),un&&(this.removeEventListener("touchstart",H),this.removeEventListener("touchmove",H),this.removeEventListener("touchend",H),this.addEventListener("touchstart",H),this.addEventListener("touchmove",H),this.addEventListener("touchend",H))})}function z(t,e){var i=Math.round(e.pos),r=e.onEnd||a;e.overPos!==o&&e.overPos!==e.pos&&(i=e.overPos,r=function(){z(t,n.extend({},e,{overPos:e.pos,time:Math.max(hn,e.time/2)}))});var s=l(i);cn?(t.css(n.extend(c(e.time),s)),e.time>10?y(t,r,e.time):r()):t.stop().animate(s,e.time,wn,r)}function W(t,e,o){var i=t,r=e,s="crossfade"===o.method;W.$el1=t=t||n(t),W.$el2=e=e||n(e);var u=function(){u.done||W.$el1!==t||W.$el2!==e||(t.removeClass($e),e.removeClass(Ee),(o.onEnd||a)(),u.done=!0)},l=c(o.time),d=c(0),f={opacity:0},h={opacity:1};t.stop().css(d).addClass($e).removeClass(Ee),e.stop().css(d).addClass(Ee).removeClass($e),cn?(r&&t.css(s?f:h),setTimeout(function(){t.css(n.extend(l,h)),e.css(n.extend(l,f))},4),o.time>10&&(i||r)?i?y(t,u,o.time):r&&y(e,u,o.time):u()):(r&&t.stop().fadeTo(0,s?0:1),t.stop().fadeTo(o.time,1,u),e.stop().fadeTo(o.time,0,u),i||r||u())}function D(t,e){t._x=e?t.touches[0].pageX:t.pageX,t._y=e?t.touches[0].pageY:t.pageY}function I(t,e){function i(t){return h=n(t.target),v=!1,u||d||t.touches&&t.touches.length>1||t.which>1||y.prevent||G&&G.type!==t.type&&Z||(v=e.select&&h.is(e.select,g))?y.prevent!==!0||v:(p=t.type.match("touch"),D(t,p),y.checked=l=f=!1,G=t,J=t.type.replace(/down|start/,"move"),c=t,m=y.control,(e.onStart||a).call(g,t,{control:m,$target:h}),u=d=!0,p||t.preventDefault(),o)}function r(t){if(!u||t.touches&&t.touches.length>1)return s(),o;if(J===t.type){D(t,p);var n=Math.abs(t._x-c._x),i=Math.abs(t._y-c._y),r=n-i,d=r>=3,h=-3>=r;f||(f=!(!d&&!h)),p&&!y.checked?((d||h)&&(y.checked=!0,l=d),(!y.checked||l)&&t.preventDefault()):!p||l?(t.preventDefault(),(e.onMove||a).call(g,t)):u=!1,y.checked=y.checked||d||h}}function s(t){d=y.control=!1,u&&(t&&t.preventDefault&&t.preventDefault(),Z=!0,clearTimeout(te),te=setTimeout(function(){Z=!1},1e3),(e.onEnd||a).call(g,{moved:!!f,$target:h,control:m,startEvent:c,aborted:!t,touch:p}),u=!1)}var u,l,c,d,f,h,m,p,v,g=t[0],y={};return un&&(g.addEventListener("touchstart",i),g.addEventListener("touchmove",r),g.addEventListener("touchend",s)),t.on("mousedown",i),sn.on("mousemove",r).on("mouseup",s),t.on("click","a",function(t){y.checked&&t.preventDefault()}),y}function q(t,e){function o(n){c=d=n._x,p=[[(new Date).getTime(),c]],f=h=b(t),(e.onStart||a).call(F,n,{pos:f})}function i(t,e){g=k.minPos,y=k.maxPos,x=k.snap,_=t.altKey,C=!1,T=e.control,T||o(t)}function s(n){T&&(T=!1,o(n)),d=n._x,p.push([(new Date).getTime(),d]),h=f-(c-d),m=$(h,g,y),g>=h?h=w(h,g):h>=y&&(h=w(h,y)),M.noMove||(t.css(l(h)),C||(C=!0,Y.addClass("grabbing"))),(e.onMove||a).call(F,n,{pos:h,edge:m})}function u(t){if(!T){Y.removeClass("grabbing"),v=(new Date).getTime();for(var o,i,s,u,l,c,m,b,w,C=v-fn,k=null,M=hn,S=e.friction,P=p.length-1;P>=0;P--){if(o=p[P][0],i=Math.abs(o-C),null===k||s>i)k=o,u=p[P][1];else if(k===C||i>s)break;s=i}m=r(h,g,y);var E=u-d,$=E>=0,N=v-k,L=fn>=N&&h!==f&&m===h;x&&(m=r(Math[L?$?"floor":"ceil":"round"](h/x)*x,g,y),g=y=m),L&&(x||m===h)&&(w=-(E/N),M*=r(Math.abs(w),e.timeLow,e.timeHigh),l=Math.round(h+w*M/S),x||(m=l),(!$&&l>y||$&&g>l)&&(c=$?g:y,b=l-c,x||(m=c),b=r(m+.03*b,c-50,c+50),M=Math.abs((h-b)/(w/S)))),M*=_?10:1,(e.onEnd||a).call(F,n.extend(t,{pos:h,newPos:m,overPos:b,time:M}))}}var c,d,f,h,m,p,v,g,y,x,_,T,C,F=t[0],k=t.data(),M={};return M=n.extend(I(e.$wrap,{onStart:i,onMove:s,onEnd:u,select:e.select,control:e.control}),M)}var A={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},O=RegExp("[&<>\"'/]","g"),R={escape:function(t){return null==t?"":(""+t).replace(O,function(t){return A[t]})}},K=function(t,e,n){function o(t){g.cssText=t}function i(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function r(t,e){for(var o in t){var i=t[o];if(!a(i,"-")&&g[i]!==n)return"pfx"==e?i:!0}return!1}function s(t,e,o){for(var a in t){var r=e[t[a]];if(r!==n)return o===!1?t[a]:i(r,"function")?r.bind(o||e):r}return!1}function u(t,e,n){var o=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+w.join(o+" ")+o).split(" ");return i(e,"string")||i(e,"undefined")?r(a,e):(a=(t+" "+x.join(o+" ")+o).split(" "),s(a,e,n))}var l,c,d,f="2.6.2",h={},m=e.documentElement,p="modernizr",v=e.createElement(p),g=v.style,y=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),b="Webkit Moz O ms",w=b.split(" "),x=b.toLowerCase().split(" "),_={},T=[],C=T.slice,F=function(t,n,o,i){var a,r,s,u,l=e.createElement("div"),c=e.body,d=c||e.createElement("body");if(parseInt(o,10))for(;o--;)s=e.createElement("div"),s.id=i?i[o]:p+(o+1),l.appendChild(s);return a=["&#173;",'<style id="s',p,'">',t,"</style>"].join(""),l.id=p,(c?l:d).innerHTML+=a,d.appendChild(l),c||(d.style.background="",d.style.overflow="hidden",u=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),r=n(l,t),c?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=u),!!r},k={}.hasOwnProperty;d=i(k,"undefined")||i(k.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return k.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=C.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var a=new i,r=e.apply(a,n.concat(C.call(arguments)));return Object(r)===r?r:a}return e.apply(t,n.concat(C.call(arguments)))};return o}),_.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:F(["@media (",y.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},_.csstransforms3d=function(){var t=!!u("perspective");return t&&"webkitPerspective"in m.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},_.csstransitions=function(){return u("transition")};for(var M in _)d(_,M)&&(c=M.toLowerCase(),h[c]=_[M](),T.push((h[c]?"":"no-")+c));return h.addTest=function(t,e){if("object"==typeof t)for(var o in t)d(t,o)&&h.addTest(o,t[o]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(m.className+=" "+(e?"":"no-")+t),h[t]=e}return h},o(""),v=l=null,h._version=f,h._prefixes=y,h._domPrefixes=x,h._cssomPrefixes=w,h.testProp=function(t){return r([t])},h.testAllProps=u,h.testStyles=F,h.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},h}(this,this.document),B={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},V="webkit moz o ms khtml".split(" ");if(e.cancelFullScreen!==o)B.ok=!0;else for(var X=0,Q=V.length;Q>X;X++)if(B.prefix=V[X],e[B.prefix+"CancelFullScreen"]!==o){B.ok=!0;break}B.ok&&(B.event=B.prefix+"fullscreenchange",B.is=function(){switch(this.prefix){case"":return e.fullScreen;case"webkit":return e.webkitIsFullScreen;default:return e[this.prefix+"FullScreen"]}},B.request=function(t){return""===this.prefix?t.requestFullScreen():t[this.prefix+"RequestFullScreen"]()},B.cancel=function(){return""===this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"]()});var U,Y,G,J,Z,te,ee,ne="fotorama",oe="fullscreen",ie=ne+"__wrap",ae=ie+"--not-ready",re=ie+"--css3",se=ie+"--video",ue=ie+"--fade",le=ie+"--slide",ce=ie+"--no-controls",de=ne+"__stage",fe=de+"__frame",he=fe+"--video",me=de+"__shaft",pe=de+"--only-active",ve=ne+"__arr",ge=ve+"--disabled",ye=ve+"--prev",be=ve+"--next",we=ve+"__arr",xe=ne+"__nav",_e=xe+"-wrap",Te=xe+"__shaft",Ce=xe+"--dots",Fe=xe+"--thumbs",ke=xe+"__frame",Me=ke+"--dot",Se=ke+"--thumb",Pe=ne+"__fade",Ee=Pe+"-front",$e=Pe+"-rear",Ne=ne+"__shadow",Le=Ne+"--left",He=Ne+"--right",je=Ne+"s",ze=je+"--left",We=je+"--right",De=ne+"__active",Ie=ne+"__select",qe=ne+"--hidden",Ae=ne+"--fullscreen",Oe=ne+"__fullscreen-icon",Re=ne+"__error",Ke=ne+"__loading",Be=ne+"__loaded",Ve=Be+"--full",Xe=Be+"--img",Qe=ne+"__load",Ue=ne+"__img",Ye=Ue+"--full",Ge=ne+"__dot",Je=ne+"__thumb",Ze=Je+"-border",tn=ne+"__html",en=ne+"__video",nn=en+"-play",on=en+"-close",an=ne+"__caption",rn=n(t),sn=n(e),un=K.touch,ln="quirks"===e.location.hash.replace("#",""),cn=K.csstransforms3d&&K.csstransitions&&!ln,dn=B.ok,fn=300,hn=333,mn="#777",pn=5e3,vn=2,gn=64,yn=500,bn=333,wn=i([.1,0,.25,1]),xn="{{X}}",_n='<div class="fotorama__video"><iframe src="'+xn+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>',Tn={vimeo:"http://player.vimeo.com/video/"+xn+"?autoplay=1&amp;badge=0",youtube:"http://www.youtube.com/embed/"+xn+"?autoplay=1",custom:xn};(function(t,e,n){function o(t,n){var o,i=e.createElement(t||"div");for(o in n)i[o]=n[o];return i}function i(t){for(var e=1,n=arguments.length;n>e;e++)t.appendChild(arguments[e]);return t}function a(t,e,n,o){var i=["opacity",e,~~(100*t),n,o].join("-"),a=.01+100*(n/o),r=Math.max(1-(1-t)/e*(100-a),t),s=c.substring(0,c.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return f[i]||(h.insertRule("@"+u+"keyframes "+i+"{"+"0%{opacity:"+r+"}"+a+"%{opacity:"+t+"}"+(a+.01)+"%{opacity:1}"+(a+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+r+"}"+"}",h.cssRules.length),f[i]=1),i}function r(t,e){var o,i,a=t.style;if(a[e]!==n)return e;for(e=e.charAt(0).toUpperCase()+e.slice(1),i=0;d.length>i;i++)if(o=d[i]+e,a[o]!==n)return o}function s(t,e){for(var n in e)t.style[r(t,n)||n]=e[n];return t}function u(t){for(var e=1;arguments.length>e;e++){var o=arguments[e];for(var i in o)t[i]===n&&(t[i]=o[i])}return t}function l(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var c,d=["webkit","Moz","ms","O"],f={},h=function(){var t=o("style",{type:"text/css"});return i(e.getElementsByTagName("head")[0],t),t.sheet||t.styleSheet}(),m={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"};ee=function(t){return this.spin?(this.opts=u(t||{},ee.defaults,m),n):new ee(t)},ee.defaults={},u(ee.prototype,{spin:function(t){this.stop();var e,n,i=this,a=i.opts,r=i.el=s(o(0,{className:a.className}),{position:"relative",width:0,zIndex:a.zIndex}),u=a.radius+a.length+a.width;if(t&&(t.insertBefore(r,t.firstChild||null),n=l(t),e=l(r),s(r,{left:("auto"==a.left?n.x-e.x+(t.offsetWidth>>1):parseInt(a.left,10)+u)+"px",top:("auto"==a.top?n.y-e.y+(t.offsetHeight>>1):parseInt(a.top,10)+u)+"px"})),r.setAttribute("aria-role","progressbar"),i.lines(r,i.opts),!c){var d=0,f=a.fps,h=f/a.speed,m=(1-a.opacity)/(h*a.trail/100),p=h/a.lines;(function v(){d++;for(var t=a.lines;t;t--){var e=Math.max(1-(d+t*p)%h*m,a.opacity);i.opacity(r,a.lines-t,e,a)}i.timeout=i.el&&setTimeout(v,~~(1e3/f))})()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=n),this},lines:function(t,e){function n(t,n){return s(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*u+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var r,u=0;e.lines>u;u++)r=s(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:c&&a(e.opacity,e.trail,u,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&i(r,s(n("#000","0 0 4px #000"),{top:"2px"})),i(t,i(r,n(e.color,"0 0 1px rgba(0,0,0,.1)")));return t},opacity:function(t,e,n){t.childNodes.length>e&&(t.childNodes[e].style.opacity=n)}}),function(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}var e=s(o("group"),{behavior:"url(#default#VML)"});!r(e,"transform")&&e.adj?(h.addRule(".spin-vml","behavior:url(#default#VML)"),ee.prototype.lines=function(e,n){function o(){return s(t("group",{coordsize:l+" "+l,coordorigin:-u+" "+-u}),{width:l,height:l})}function a(e,a,r){i(d,i(s(o(),{rotation:360/n.lines*e+"deg",left:~~a}),i(s(t("roundrect",{arcsize:n.corners}),{width:u,height:n.width,left:n.radius,top:-n.width>>1,filter:r}),t("fill",{color:n.color,opacity:n.opacity}),t("stroke",{opacity:0}))))}var r,u=n.length+n.width,l=2*u,c=2*-(n.width+n.length)+"px",d=s(o(),{position:"absolute",top:c,left:c});if(n.shadow)for(r=1;n.lines>=r;r++)a(r,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(r=1;n.lines>=r;r++)a(r);return i(e,d)},ee.prototype.opacity=function(t,e,n,o){var i=t.firstChild;o=o.shadow&&o.lines||0,i&&i.childNodes.length>e+o&&(i=i.childNodes[e+o],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):c=r(e,"animation")}()})(t,e),jQuery.Fotorama=function(i,a){function s(){n.each(Dn,function(t,e){if(!e.i){e.i=vo++;var n=T(e.video,!0);if(n){var o={};e.video=n,e.img||e.thumb?e.thumbsReady=!0:o=C(e,Dn,fo),F(Dn,{img:o.img,thumb:o.thumb},e.i,fo)}}})}function u(){Dn=fo.data=Dn&&Dn.length?Dn:k(i),In=fo.size=Dn.length,s(),Ao=H(Ao),te.ok=!1,In?lo||(i.html("").append(wo),lo=!0):fo.destroy()}function g(){Vo.noMove=2>In||On||to}function y(t){t===!0&&(t=""),a.autoplay=Math.max(Number(t)||pn,3*hn)}function w(t){return t?"add":"remove"}function x(){Un=a.loop&&In>2,to="crossfade"===a.transition||"dissolve"===a.transition;var t={add:[],remove:[]};In>1?(Yn=a.nav,Gn="top"===a.navPosition,t.remove.push(Ie),ko.show(),Pe()):(Yn=!1,ko.hide()),a.autoplay&&y(a.autoplay),eo=d(a.thumbWidth)||gn,no=d(a.thumbHeight)||gn,g(),Fn(a),Yn===!0||"dots"===Yn?(So.addClass(Ce).removeClass(Fe),Q(In,"navDot")):"thumbs"===Yn?(E(yo,n.Fotorama.jst.style({thumbWidth:eo,thumbHeight:no,thumbMargin:vn,stamp:mo})),So.addClass(Fe).removeClass(Ce),Q(In,"navThumb")):(Yn=!1,So.removeClass(Fe+" "+Ce)),Jn=a.allowFullScreen,i.insertAfter(bo).removeClass(qe),Yn&&Gn?Mo.insertBefore(xo):Mo.insertAfter(xo),Jn?(Io.appendTo(xo),Zn=dn&&"native"===Jn):(Io.detach(),Zn=!1),t[w(to)].push(ue),t[w(!to&&!Vo.noMove)].push(le),Bo.stop&&Bo.stop(),Bo=new ee({length:8,radius:6,width:2,color:mn,rotate:15}),wo.addClass(t.add.join(" ")).removeClass(t.remove.join(" ")),Ro=n.extend({},a)}function _(t){return 0>t?(In+t%In)%In:t>=In?t%In:t}function H(t){return r(t,0,In-1)}function D(t){return t>0||Un?t-1:!1}function I(t){return In-1>t||Un?t+1:!1}function A(){jo.minPos=Un?-1/0:-m(In-1,Ko.w,vn,Kn),jo.maxPos=Un?1/0:-m(0,Ko.w,vn,Kn),jo.snap=Ko.w+vn}function O(){zo.minPos=Math.min(0,Ko.w-Po.width()),zo.maxPos=0,Xo.noMove=zo.minPos===zo.maxPos}function R(t,e,o){if("number"==typeof t){t=Array(t);var i=!0}return n.each(t,function(t,n){if(i&&(n=t),"number"==typeof n){var a=Dn[_(n)],r="$"+e+"Frame",s=a[r];o.call(this,t,n,a,s,r,s&&s.data())}})}function K(t,e,n,o){(!oo||"*"===oo&&o===Oo)&&(t=h(a.width)||h(t)||yn,e=h(a.height)||h(e)||bn,fo.resize({width:t,ratio:a.ratio||n||t/e},0,o===Oo?!0:"*"))}function V(t,e,r,s,u){R(t,e,function(t,l,c,d,f,h){function m(){b.remove(),n.Fotorama.cache[T]="error",c.html&&"stage"===e||!C||C===T?(T&&!h.html?d.trigger("f:error").removeClass(Ke).addClass(Re):"stage"===e&&(d.trigger("f:load").removeClass(Ke+" "+Re).addClass(Be),K()),h.state="error",!(In>1)||c.html||c.deleted||c.video||g||(c.deleted=!0,fo.splice(l,1))):(c[x]=T=C,V([l],e,r,s,!0))}function p(){var t=b.width(),o=b.height(),u=t/o;w.measures={width:t,height:o,ratio:u},K(t,o,u,l),b.off("load error").addClass(Ue+(g?" "+Ye:"")).prependTo(d),P(b,r||Ko,s||c.fit||a.fit),n.Fotorama.cache[T]="loaded",h.state="loaded",setTimeout(function(){d.trigger("f:load").removeClass(Ke+" "+Re).addClass(Be+" "+(g?Ve:Xe)),"stage"===e&&i.trigger("fotorama:load",kn(_(l)))},5)}function v(){S(function(){return!M(y)},function(){p()})}if(d){var g=fo.fullScreen&&c.full&&!h.$full&&"stage"===e;if(!h.$img||u||g){var y=new Image,b=n(y),w=b.data();h[g?"$full":"$img"]=b;var x="stage"===e?g?"full":"img":"thumb",T=c[x],C=g?null:c["stage"===e?"thumb":"img"];if("navThumb"===e&&(d=h.$wrap),!T)return m(),o;n.Fotorama.cache[T]?function F(){"error"===n.Fotorama.cache[T]?m():"loaded"===n.Fotorama.cache[T]?v():setTimeout(F,100)}():(n.Fotorama.cache[T]="*",b.on("load",v).on("error",m)),y.src=T,b.appendTo(n.Fotorama.$load)}}})}function X(){var t=fo.activeFrame[No];t&&!t.data().state&&(Bo.stop().spin(t[0]),t.on("f:load f:error",function(){t.off("f:load f:error"),Bo.stop()}))}function Q(t,e){R(t,e,function(t,o,i,r,s,u){if(!r)if(r=i[s]=wo[s].clone(),u=r.data(),u.data=i,"stage"===e){if(i.html&&n('<div class="'+tn+'"></div>').append(i.html).appendTo(r),a.captions&&i.caption&&n('<div class="'+an+'"></div>').append(i.caption).appendTo(r),i.video){var l=qo.clone();L(l,function(){fo.playVideo()},{onStart:function(t){Mn.call(this,t),Vo.control=!0},tail:Vo}),r.addClass(he).append(l)}To=To.add(r)}else"navDot"===e?Eo=Eo.add(r):"navThumb"===e&&(u.$wrap=r.children(":first"),$o=$o.add(r),i.video&&r.append(qo.clone()))})}function G(t,e,n){return t&&t.length&&P(t,e,n)}function J(t){R(t,"stage",function(t,e,o,i,r,s){if(i){i.css(n.extend({left:to?0:m(e,Ko.w,vn,Kn)},to&&c(0))).fadeTo(0,to&&e!==Ao?0:1),s.appended||(i.appendTo(_o),s.appended=!0,Nn(o.$video));var u=o.fit||a.fit;G(s.$img,Ko,u),G(s.$full,Ko,u)}})}function Z(t,e){if("thumbs"===Yn&&!isNaN(t)){var o=eo+vn,i=H(p(t+o,o)),a=H(p(t-Ko.w,o)),r={};r.w=eo,r.h=no,$o.each(function(){var t=n(this),o=t.data(),s=o.eq,u="cover";i>s||s>a||G(o.$img,r,u)||e&&V([s],"navThumb",r,u)})}}function te(t,e,o){te.ok||(t=t.filter(function(){for(var t,e=n(this),o=e.data(),i=0,a=Dn.length;a>i;i++){var r=Dn[i];if(o.data===r){t=!0,o.eq=i;break}}return t||e.remove(),t}).sort(function(t,e){return n(t).data().eq-n(e).data().eq}).appendTo(e),o&&O(),te.ok=!0)}function Pe(){ko.each(function(t){n(this).toggleClass(ge,!Un&&(0===Ao&&0===t||Ao===In-1&&1===t)&&!On)})}function en(t){return t.position().left+eo/2}function un(t){z(Do,{time:.9*t,pos:en(fo.activeFrame[An])})}function ln(t){if(Dn[t.guessIndex][An]){var e=r(t.coo-en(Dn[t.guessIndex][An]),zo.minPos,zo.maxPos),n=.9*t.time;z(Po,{time:n,pos:e,onEnd:function(){Z(e,!0)}}),n&&Z(e),$n(So,$(e,zo.minPos,zo.maxPos))}}function fn(){if("thumbs"===Yn)qn=$o,An=Ho;else{if(!Yn)return;qn=Eo,An=Lo}te(qn,Po,!0),qn.removeClass(De),fo.activeFrame[An].addClass(De)}function wn(){Kn=Bn=Ao;var t=fo.activeFrame,e=t[No];e&&(To.not(fo.activeFrame[No].addClass(De)).detach().data("appended",!1).removeClass(De+" "+Ee+" "+$e),b(_o),_o.css(l(0)),J([Ao,Xn,Qn]),A(),O())}function Fn(t){t&&n.extend(Ko,{width:t.width,height:t.height,minWidth:t.minWidth,maxWidth:t.maxWidth,minHeight:t.minHeight,maxHeight:t.maxHeight,ratio:function(t){if(t){var e=Number(t);return isNaN(e)?(e=t.split("/"),Number(e[0]/e[1])||o):e}}(t.ratio)})}function kn(t){return{index:t,frame:Dn[t]}}function Mn(){a.stopAutoplayOnTouch?fo.stopAutoplay():so=!0}function Sn(){so=!(!On&&!uo)}function Pn(){if(clearTimeout(Pn.t),!a.autoplay||so)return fo.autoplay&&(fo.autoplay=!1,i.trigger("fotorama:stopautoplay")),o;fo.autoplay||(fo.autoplay=!0,i.trigger("fotorama:startautoplay"));var t=Ao;Pn.t=setTimeout(function(){var e=fo.activeFrame[No].data();S(function(){return e.state||t!==Ao},function(){so||t!==Ao||fo.show({index:_(Ao+1),auto:!0})})},a.autoplay)}function En(){fo.fullScreen&&(fo.fullScreen=!1,dn&&B.cancel(po),Y.removeClass(oe),i.removeClass(Ae).insertAfter(bo).trigger("fotorama:fullscreenexit"),Ko=n.extend({},co),Nn(On,!0),fo.resize(),V([Ao,Xn,Qn],"stage"),rn.scrollLeft(ao).scrollTop(io))}function $n(t,e){t.removeClass(ze+" "+We),e&&!On&&t.addClass(e.replace(/^|\s/g," "+je+"--"))}function Nn(t,e,n){e&&(wo.removeClass(se),On=!1,g()),t&&(t.remove(),i.trigger("fotorama:unloadvideo")),n&&(Sn(),Pn())}function Ln(t){wo.toggleClass(ce,t)}function Hn(t,e){On?Nn(On,!0,!0):e?Ln():fo.show({index:t.shiftKey||t._x-xo.offset().left<Ko.w/3?"<":">",slow:t.altKey})}function jn(t,e){var o=n(this).data().eq;fo.show({index:o,slow:t.altKey,coo:t._x-So.offset().left,time:e})}function zn(){if(u(),x(),!Wn.ok){if(a.hash&&location.hash&&(a.startIndex=N(location.hash.replace(/^#/,""),Dn,0===ho)||0),"random"===a.startIndex&&(a.startIndex=v(0,In-1)),Oo=Un?_(a.startIndex):H(a.startIndex),isNaN(Oo)){var t=N(a.startIndex,Dn,!0);Oo=isNaN(t)?0:t}Ao=Kn=Bn=Vn=Oo}In?(On&&Nn(On,!0),fo.show({index:Ao,time:0,auto:!0}),fo.resize()):fo.destroy()}function Wn(){Wn.ok||(Wn.ok=!0,wo.removeClass(ae),i.trigger("fotorama:ready"))}U=U||n("html"),Y=Y||n("body"),n.Fotorama.$load=n.Fotorama.$load||n('<div class="'+Qe+'"></div>').appendTo(Y);var Dn,In,qn,An,On,Rn,Kn,Bn,Vn,Xn,Qn,Un,Yn,Gn,Jn,Zn,to,eo,no,oo,io,ao,ro,so,uo,lo,co,fo=this,ho=Cn,mo=(new Date).getTime(),po=i.addClass(ne+mo)[0],vo=1,go=i.data(),yo=n("<style></style>").insertBefore(i),bo=n('<div style="display: none;"></div>').insertBefore(i),wo=n('<div class="'+ie+" "+ae+'"></div>'),xo=n('<div class="'+de+'"></div>').appendTo(wo),_o=(xo[0],n('<div class="'+me+'"></div>').appendTo(xo)),To=n(),Co=n('<div class="'+ve+" "+ye+'"><div class="'+we+'"></div></div>'),Fo=n('<div class="'+ve+" "+be+'"><div class="'+we+'"></div></div>'),ko=Co.add(Fo).appendTo(xo),Mo=n('<div class="'+_e+'"></div>'),So=n('<div class="'+xe+'"></div>').appendTo(Mo),Po=n('<div class="'+Te+'"></div>').appendTo(So),Eo=n(),$o=n(),No="$stageFrame",Lo="$navDotFrame",Ho="$navThumbFrame",jo=_o.data(),zo=Po.data(),Wo=j(n('<div class="'+Ne+" "+Le+'"></div><div class="'+Ne+" "+He+'"></div>').appendTo(xo)),Do=(j(Wo.clone().appendTo(So)),n('<div class="'+Ze+'"></div>').appendTo(Po)),Io=n('<div class="'+Oe+'"></div>'),qo=n('<div class="'+nn+'"></div>'),Ao=(n('<div class="'+on+'"></div>').appendTo(xo),!1),Oo=!1,Ro={},Ko={},Bo={},Vo={},Xo={};wo[No]=n('<div class="'+fe+'"></div>'),wo[Ho]=n('<div class="'+ke+" "+Se+'"><div class="'+Je+'"></div></div>'),wo[Lo]=n('<div class="'+ke+" "+Me+'"><div class="'+Ge+'"></div></div>'),cn&&wo.addClass(re),n.Fotorama.size++,Cn++,n.Fotorama.api[ho]=this,this.startAutoplay=function(t){return fo.autoplay?this:(so=uo=!1,y(t||a.autoplay),Pn(),this)},this.stopAutoplay=function(){return fo.autoplay&&(so=uo=!0,Pn()),this},this.show=function(t){function e(){X(),V([Ao,Xn,Qn],"stage"),wn(),i.trigger("fotorama:showend",t.auto),a.hash&&ro&&!fo.eq&&location.replace("#"+(Rn.id||Ao+1)),Sn(),Pn(),ro=!0}var n,s,u=hn;if("object"!=typeof t?n=t:(n=t.index,u="number"==typeof t.time?t.time:u,s=t.overPos),t.slow&&(u*=10),">"===n?n=Bn+1:"<"===n?n=Bn-1:"<<"===n?n=0:">>"===n&&(n=In-1),isNaN(n)&&(n=N(n,Dn,!0)||Ao||0),fo.activeIndex=Ao=Un?_(n):H(n),Xn=D(Ao),Qn=I(Ao),Bn=Un?n:Ao,fo.activeFrame=Rn=Dn[Ao],J([Bn]),Q([Ao,Xn,Qn],"stage"),Nn(!1,Rn.i!==Dn[_(Kn)].i),i.trigger("fotorama:show",t.auto),to){var l=Rn[No],c=Ao!==Vn?Dn[Vn][No]:null;W(l,c,{time:u,method:a.transition,onEnd:e})}else z(_o,{pos:-m(Bn,Ko.w,vn,Kn),overPos:s,time:u,onEnd:e});if(Pe(),fn(),Yn){var d=H(Ao+r(Bn-Vn,-1,1)),f=t.coo===o;(f||d!==Ao)&&ln({time:u,coo:f?Ko.w/2:t.coo,guessIndex:f?Ao:d})}return"thumbs"===Yn&&un(u),Vn=Ao,this},this.requestFullScreen=function(){return Jn&&!fo.fullScreen&&(fo.fullScreen=!0,io=rn.scrollTop(),ao=rn.scrollLeft(),rn.scrollLeft(1).scrollTop(1),Zn&&B.request(po),setTimeout(function(){rn.scrollLeft(0).scrollTop(0),Y.addClass(oe),i.addClass(Ae).css({top:0}).appendTo(Y).trigger("fotorama:fullscreenenter"),co=n.extend({},Ko),Nn(On,!0),fo.resize(),V([Ao,Xn,Qn],"stage")},5)),this},this.cancelFullScreen=function(){return Zn&&B.is()?B.cancel(e):En(),this},e.addEventListener&&e.addEventListener(B.event,function(){B.is()||On||En()}),sn.on("keydown",function(t){On&&27===t.keyCode?(t.preventDefault(),Nn(On,!0,!0)):(fo.fullScreen||a.keyboard&&!ho)&&(27===t.keyCode?(t.preventDefault(),fo.cancelFullScreen()):39===t.keyCode||40===t.keyCode&&fo.fullScreen?(t.preventDefault(),fo.show({index:">",slow:t.altKey})):(37===t.keyCode||38===t.keyCode&&fo.fullScreen)&&(t.preventDefault(),fo.show({index:"<",slow:t.altKey})))}),ho||sn.on("keydown","textarea, input, select",function(t){fo.fullScreen||t.stopPropagation()}),this.resize=function(e){Fn(fo.fullScreen?{width:"100%",maxWidth:null,minWidth:null,height:"100%",maxHeight:null,minHeight:null}:e);var n=arguments[1]||0,o=arguments[2],i=Ko.width,a=Ko.height,s=Ko.ratio,u=t.innerHeight-(Yn?So.height():0);return h(i)&&(wo.css({width:i,minWidth:Ko.minWidth,maxWidth:Ko.maxWidth}),i=Ko.w=wo.width(),a=f(a)/100*u||d(a),a=a||s&&i/s,a&&(a=Ko.h=r(a,f(Ko.minHeight)/100*u||d(Ko.minHeight),f(Ko.maxHeight)/100*u||d(Ko.maxHeight)),wn(),xo.addClass(pe).stop().animate({width:i,height:a},n,function(){xo.removeClass(pe)}),Yn&&(So.stop().animate({width:i},n).css({left:0}),ln({guessIndex:Ao,time:n,coo:Ko.w/2}),"thumbs"===Yn&&te.ok&&un(n)),oo=o||!0,Wn())),this},this.setOptions=function(t){return n.extend(a,t),zn(),this},this.destroy=function(){return wo.detach(),i.html(go.urtext),lo=!1,Dn=fo.data=[],n.Fotorama.size--,this},this.playVideo=function(){var t=fo.activeFrame,e=t.video,o=Ao;return"object"==typeof e&&t.videoReady&&(Zn&&fo.fullScreen&&fo.cancelFullScreen(),S(function(){return!B.is()||o!==Ao},function(){o===Ao&&(t.$video=t.$video||n(_n.replace(xn,Tn[e.type].replace(xn,e.id))),t.$video.appendTo(t[No]),wo.addClass(se),On=t.$video,Vo.noMove=!0,i.trigger("fotorama:loadvideo"))})),this},this.stopVideo=function(){return Nn(On,!0,!0),this},wo.hover(function(){Ln(!1)},function(){Ln(!0)}),Vo=q(_o,{onStart:Mn,onMove:function(t,e){$n(xo,e.edge)},onEnd:function(t){if($n(xo),t.pos!==t.newPos){var e=p(t.newPos,Ko.w,vn,Kn);fo.show({index:e,time:t.time,overPos:t.overPos})}else t.aborted||Hn(t.startEvent,t.touch)},timeLow:1,timeHigh:1,friction:2,select:"."+Ie+", ."+Ie+" *",$wrap:xo}),Xo=q(Po,{onStart:Mn,onMove:function(t,e){$n(So,e.edge)},onEnd:function(t){function e(){Sn(),Pn(),Z(t.newPos,!0)}if(t.moved)t.pos!==t.newPos?(z(Po,{time:t.time,pos:t.newPos,overPos:t.overPos,onEnd:e}),Z(t.newPos),$n(So,$(t.newPos,zo.minPos,zo.maxPos))):e();else{var n=t.$target.closest("."+ke,Po)[0];n&&jn.call(n,t.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:So}),L(ko,function(t){t.preventDefault(),On?Nn(On,!0,!0):fo.show({index:ko.index(this)?">":"<",slow:t.altKey})},{onStart:function(t){Mn.call(this,t),Vo.control=!0},tail:Vo}),L(Io,function(){fo.fullScreen?fo.cancelFullScreen():fo.requestFullScreen(),Sn(),Pn()},{onStart:function(t){Mn.call(this,t),Vo.control=!0},tail:Vo}),n.each("load push pop shift unshift reverse sort splice".split(" "),function(t,e){fo[e]=function(){return"load"!==e?Array.prototype[e].apply(Dn,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Dn=arguments[0]),zn(),fo}}),rn.on("resize",this.resize),zn()},n.fn.fotorama=function(t){return this.each(function(){var e=this,o=n(this),i=o.data(),a=i.api;a?a.setOptions(t):S(function(){return!M(e)},function(){i.urtext=o.html(),i.api=new n.Fotorama(o,n.extend({},{loop:!1,startIndex:0,transition:"slide",keyboard:!1,fit:"contain",nav:"dots",navPosition:"bottom",hash:!1,allowFullScreen:!1,captions:!0,autoplay:!1,stopAutoplayOnTouch:!0,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,ratio:null,thumbWidth:gn,thumbHeight:gn},n.extend({},t,i)))
})})},n.Fotorama.cache={};var Cn=0;n.Fotorama.size=0,n.Fotorama.api=[],n(function(){n(".fotorama").fotorama()}),this.$=this.$||{},this.$.Fotorama=this.$.Fotorama||{},this.$.Fotorama.jst=this.$.Fotorama.jst||{},this.$.Fotorama.jst.style=function(t){var e,n="";return R.escape,n+=".fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__nav--thumbs .fotorama__nav__frame {\n  padding: "+(null==(e=t.thumbMargin)?"":e)+"px "+(null==(e=t.thumbMargin/2)?"":e)+"px;\n  width: "+(null==(e=t.thumbWidth)?"":e)+"px;\n  height: "+(null==(e=t.thumbHeight)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__thumb {\n  width: "+(null==(e=t.thumbWidth)?"":e)+"px;\n  height: "+(null==(e=t.thumbHeight)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__thumb-border {\n  width: "+(null==(e=t.thumbWidth-2*t.thumbMargin)?"":e)+"px;\n  height: "+(null==(e=t.thumbHeight-2*t.thumbMargin)?"":e)+"px;\n  border-width: "+(null==(e=t.thumbMargin)?"":e)+"px;\n  margin-top: "+(null==(e=t.thumbMargin)?"":e)+"px;\n  margin-left: "+(null==(e=-t.thumbWidth/2+t.thumbMargin/2)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__wrap--vertical .fotorama__nav--thumbs {\n  width: "+(null==(e=t.thumbWidth+2*t.thumbMargin)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__wrap--vertical .fotorama__nav__frame {\n  padding: "+(null==(e=t.thumbMargin/2)?"":e)+"px "+(null==(e=t.thumbMargin)?"":e)+"px;\n}\n.fotorama"+(null==(e=t.stamp)?"":e)+" .fotorama__wrap--vertical .fotorama__thumb-border {\n  margin-left: "+(null==(e=t.thumbMargin)?"":e)+"px;\n  margin-top: "+(null==(e=-t.thumbHeight/2+t.thumbMargin/2)?"":e)+"px;\n}\n"}})(window,document,jQuery);
/**
 * HashNav
 *
 * Simple hash navigation
 *
 * @author Artem Sapegin
 * @copyright 2012 Artem Sapegin, http://sapegin.me
 * @license MIT
 */

/*jshint browser:true, jquery:true, white:false, smarttabs:true, eqeqeq:true,
         immed:true, latedef:true, newcap:true, undef:true */
/*global define:false */
(function(factory) {  // Try to register as an anonymous AMD module
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else {
		factory();
	}
}(function() {
	'use strict';

	var HashNav = {
		_inited: false,
		_initial: '',
		_hash: '',
		_callbacks: [],

		/*
		 * Get/set default hash
		 * @param value {String|undefined}
		 */
		initial: function(value) {
			if (value === undefined) {
				return this._initial;
			}
			else {
				if (value !== this._initial) {
					this._initial = value;
					if (location.hash !== value) {
						var hash = location.hash.slice(1);
						this.change(hash || value);
					}
					else {
						this._hash = value;
					}
				}
			}
		},

		/*
		 * Set/execute change handler
		 * @param value {String|Function}
		 */
		change: function(value) {
			if (!this._inited) {
				this._init();
			}

			if (typeof value === 'string') {
				this._change(value);
				this._hash = value;
				if (value === this._initial) {
					this._removeHash();
				}
				else {
					location.hash = value;
				}
			}
			else {
				var that = this;
				this._callbacks.push(value);
				if (this._hash) {
					value(this._hash);
				}
			}
		},

		_change: function(hash) {
			for (var cbIdx = 0; cbIdx < this._callbacks.length; cbIdx++) {
				this._callbacks[cbIdx](hash);
			}
		},

		_init: function() {
			if (!('onhashchange' in window)) return;
			var that = this;
			window.addEventListener('hashchange', function() {
				that._hashChanged();
			}, false);
		},

		_hashChanged: function() {
			var hash = location.hash.slice(1);
			if (hash === this._initial) {
				this._removeHash(true);
				return;
			}
			this._change(hash || this._initial);
		},

		_removeHash: function(replace) {
			if (history.pushState) {
				var url = window.location.pathname + window.location.search;
				history[replace ? 'replaceState' : 'pushState']('', document.title, url);
			}
			else {
				location.hash = '';
			}
		}
	};

	window.HashNav = HashNav;

}));
/**
 * jQuery Tag Filter
 *
 * @version 0.2
 * @requires jQuery, HashNav
 * @author Artem Sapegin
 * @copyright 2012 Artem Sapegin (sapegin.me)
 * @license MIT
 */

/*global jQuery:false, define:false, HashNav:false*/
(function (factory) {  // Try to register as an anonymous AMD module
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {

$.fn.tagFilter = function(options) {
	options = $.extend({}, $.fn.tagFilter.defaults, options);

	return this.each(function() {
		new TagFilter($(this), options);
	});
};

$.fn.tagFilter.defaults = {
	barSelector: '.tags',
	linkSelector: 'li',
	linkActiveClass: 'is-active',
	tagClassPrefix: 'tag_'
};

function TagFilter(container, options) {
	this.container = container;
	this.options = options;
	this.init();
}

TagFilter.prototype = {
	init: function() {
		this.bar = this.container.find(this.options.barSelector);
		if (!this.bar.length) return;

		this.bar.delegate(this.options.linkSelector, 'click', $.proxy(this.tagClick, this));

		this.tagClassRegExp = new RegExp('\\b' + this.options.tagClassPrefix + '.*?\\b', 'g');

		var defaultTag = this.container.find('.is-default').data('tag-id');
		if (defaultTag) {
			HashNav.initial(defaultTag);
		}

		HashNav.change(this.change.bind(this));
	},

	tagClick: function(e) {
		this.change($(e.target).data('tag-id'));
		return false;
	},

	change: function(tag) {
		var link = this.container.find('[data-tag-id="' + tag + '"]');
		if (!link.length || link.hasClass(this.options.linkActiveClass)) return;

		// Replace tag class on container
		this.container[0].className = this.container[0].className.replace(this.tagClassRegExp, '');
		if (tag) this.container.addClass(this.options.tagClassPrefix + tag);

		// Highlight button
		link.siblings().removeClass(this.options.linkActiveClass);
		link.addClass(this.options.linkActiveClass);

		// Update page URL
		HashNav.change(tag);
	}
};

}));
// Tâmia © 2013 Artem Sapegin http://sapegin.me
// Core helpers

;(function ($) {
	'use strict';

	function _getContainers() {
		if (document.querySelectorAll) {
			return document.querySelectorAll('[data-component]');
		}
		else {
			return $('[data-component]');
		}
	}
	var _containersCache;
	var _delayedFuncs = {};


	/**
	 * Initialize components
	 * Invoke initComponents again to initialize components that was hidden before.
	 *
	 * @param {Object} [funcs] Initializers for each component:
	 *        {
	 *          pony: function(elem) { // $(elem) },
	 *          jquerypony: function(elem) { $(elem).pluginmethod({option1: 'val1', options2: 'val2'}); },
	 *          jquerypony: {pluginmethod: {option1: 'val1', options2: 'val2'}}
	 *        }
	 *
	 * <div data-component="pony"></div>
	 */
	function initComponents(funcs) {
		var containers = _containersCache || (_containersCache = _getContainers());

		// Call without arguments: try to initialize hidden components again
		if (!arguments.length) {
			var _found = false;
			for (var _func in _delayedFuncs) {
				_found = true;
				break;
			}
			if (!_found) return;
			funcs = {};
		}

		for (var containerIdx = 0, containerCnt = containers.length; containerIdx < containerCnt; containerIdx++) {
			var container = containers[containerIdx];
			var component = container.getAttribute('data-component');
			var func = funcs[component];
			if (func) {
				if (container.offsetWidth || container.offsetHeight) {
					if (typeof func === 'function') {
						func(container);
					}
					else {
						// Shortcut for jQuery plugins initialization
						for (var method in func) {
							$(container)[method](func[method]);
						}
					}
				}
				else {
					_delayInit(func, component, container);
				}
			}
			else if (_delayedFuncs[component]) {
				if (container.offsetWidth || container.offsetHeight) {
					_delayedFuncs[component]();
					delete _delayedFuncs[component];
				}
			}
		}
	}

	function _delayInit(func, component, elem) {
		_delayedFuncs[component] = function() {
			func(elem);
		};
	}


	/**
	 * Controls
	 *
	 * <span data-fire="slider-next" data-to=".portfolio" data-attrs="1,2,3">Next</span>
	 */
	$(document).click(function(e) {
		var target = e.target;
		if (target.parentNode && target.parentNode.getAttribute('data-fire')) target = target.parentNode;
		if (target.getAttribute('data-fire') && target.getAttribute('data-to')) {
			target = $(target);
			var attrs = (''+target.data('attrs')).split(/[;, ]/);
			$(target.data('to')).trigger(target.data('fire'), attrs);
			e.preventDefault();
		}
	});


	window.utils = {
		initComponents: initComponents
	};

}(jQuery));

var __templates = (function(){
function encodeHTMLSource() {var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;return function() {return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;};};
  String.prototype.encodeHTML=encodeHTMLSource();
  var __templates=__templates|| {};
  __templates['photo-info']=function anonymous(it) {
var out='<h1 class="photo-info__title">'+(it.title)+'</h1><div class="photo-info__album"><a href="'+(it.albumHref)+'" class="photo-info__album-link">⇧ <u>'+(it.album)+'</u></a></div>';if(it.info.caption){out+='<div class="photo-info__caption">'+(it.info.caption)+'</div>';}if(it.location){out+='<div class="photo-info__location">'+(it.location)+'</div>';}out+='<div class="photo-info__meta">'+(it.pubdate)+', '+(it.exif)+'</div>';return out;
};
  __templates['photo-title']=function anonymous(it) {
var out=''+(it.title)+' - '+(it.siteTitle);return out;
};
return __templates;})()
/* Author: Artem Sapegin, http://sapegin.me, 2013 */

/*global utils:false */
;(function ($) {
	'use strict';

	$.fn.tmpl = function(tmplId, data) {
		return $(this).html(window.__templates[tmplId](data));
	};

	utils.initComponents({
		'featured-album': function(elem) {
			var container = $(elem);
			var photos = window.__photos;

			container.fotorama({
				nav: false,
				transition: 'crossfade',
				loop: true,
				autoplay: 15000,
				width: '100%',
				ratio: '3/2'
			});

			var fotorama = container.data('api');
			fotorama.load(photos);

		},
		'photo-album': function(elem) {
			function update() {
				gallery.addClass('is-activated');
				var frame = fotorama.activeFrame;
				frame.title = frame.info.title || '***';
				frame.permalink = location.href.replace(/\/photos\/\d+\/$/, '/photos/' + frame.id + '/');
				frame.albumHref = albumHref;
				frame.album = albumName;

				// Update URL
				history.pushState('', frame.title, frame.permalink);

				// Update page title
				document.title = window.__templates['photo-title']({
					title: frame.title,
					siteTitle: siteTitle
				});

				// Update info and share
				infoPane.tmpl('photo-info', frame);
			}

			function resize() {
				fotorama.resize({
					width: gallery.width(),
					height: gallery.height()
				});
			}

			var photos = window.__photos;
			var currentId = window.__photos_current_id;
			var startIndex = 0;
			$.each(photos, function(index, value) {
				if (photos[index].id === currentId) {
					startIndex = index;
					return false;
				}
			});

			var container = $(elem);
			var gallery = container.find('.js-gallery');
			var sharePane = container.find('.js-share');
			var infoPane = container.find('.js-info');
			var siteTitle = $('.js-site-title').text();
			var albumLinkElem = $('.js-album-link');
			var albumHref = albumLinkElem.attr('href');
			var albumName = albumLinkElem.text();

			gallery.fotorama({
				nav: false,
				keyboard: true,
				transition: 'crossfade',
				width: gallery.width(),
				height: gallery.height()
			});

			var fotorama = gallery.data('api');
			fotorama.load(photos);
			fotorama.show({index: startIndex, time: 0});
			gallery.on('fotorama:show', update);

			$(window).resize(resize);
		},

		'tag-filter': {tagFilter: {
			barSelector: '.js-filter',
			linkSelector: '.js-filter-tag'
		}}
	});

}(jQuery));
