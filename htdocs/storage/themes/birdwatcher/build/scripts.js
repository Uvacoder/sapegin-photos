/*!
 * Fotorama 4.2.1 | http://fotorama.io/license/
 */
!function(a,b,c,d){"use strict";function e(a){var b="bez_"+c.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof c.easing[b]){var d=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};c.easing[b]=function(b,c,e,f,g){return f*d([a[0],a[1]],[a[2],a[3]])(c/g)+e}}return b}function f(){}function g(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function h(a){return a.match(/^m/)&&a.match(/-?\d+/g)[4]}function i(a){return mc?+h(a.css("transform")):+a.css("left").replace("px","")}function j(a){var b={};return mc?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function k(a){return{"transition-duration":a+"ms"}}function l(a,b){return+String(a).replace(b||"px","")}function m(a){return/%$/.test(a)&&l(a,"%")}function n(a){return(!!l(a)||!!l(a,"%"))&&a}function o(a,b,c,d){return(a-(d||0))*(b+(c||0))}function p(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function q(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[T.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn.call(this)}),b.tEnd=!0}}function r(a,b,c){var d,e=a.data();e&&(e.onEndFn=function(){d||(c.call(this),d=!0)},e.tProp=b,q(a))}function s(a,b){if(a.length){mc?a.css(k(0)).data("onEndFn",f):a.stop();var c=b||i(a);return a.css(j(c)),c}}function t(a,b){return Math.round(a+(b-a)/1.5)}function u(){return u.p=u.p||("https://"===location.protocol?"https://":"http://"),u.p}function v(a){var c=b.createElement("a");return c.href=a,c}function w(a,b){if("string"!=typeof a)return a;a=v(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d}:!1}function x(a,b,d){var e,f,g=a.video;return"youtube"===g.type?(f=u()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?c.ajax({url:u()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(c){a.thumbsReady=!0,y(b,{img:c[0].thumbnail_large,thumb:c[0].thumbnail_small},a.i,d)}}):a.thumbsReady=!0,{img:e,thumb:f}}function y(a,b,d,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===d&&h.thumbsReady){var i={videoReady:!0};i[vc]=i[xc]=i[wc]=!1,e.splice(f,1,c.extend({},h,i,b));break}}}function z(a){function b(a,b){var c=a.data(),e=a.children("img").eq(0),f=a.attr("href"),g=a.attr("src"),h=e.attr("src"),i=c.video,j=b?w(f,i===!0):!1;j?f=!1:j=w(i,i);var k=c.img||f||g||h,m=c.thumb||h||g||f,n=k!==m,o=l(c.width||a.attr("width")),p=l(c.height||a.attr("height")),q=l(c.thumbWidth||e.attr("width")||n||o),r=l(c.thumbHeight||e.attr("height")||n||p);return{video:j,img:k,width:o||d,height:p||d,thumb:m,thumbRatio:q/r||d}}var e=[];return a.children().each(function(){var a=c(this),d=c.extend(a.data(),{id:a.attr("id")});if(a.is("a, img"))c.extend(d,b(a,!0));else{if(a.is(":empty"))return;c.extend(d,{html:this,_html:a.html()})}e.push(d)}),e}function A(a){return 0===a.offsetWidth&&0===a.offsetHeight}function B(a){return!c.contains(b.documentElement,a)}function C(a,b,c){a()?b():setTimeout(function(){C(a,b)},c||100)}function D(a){location.replace(location.protocol+"//"+location.host+location.pathname.replace(/^\/?/,"/")+location.search+"#"+a)}function E(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,h=e.height,i=b.w/b.h,j=e.ratio>=i,k="scale-down"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=g(b.w,0,k?f:1/0),h=f/e.ratio):(j&&m||!j&&(k||l))&&(h=g(b.h,0,k?h:1/0),f=h*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(h),marginLeft:Math.floor(-f/2),marginTop:Math.floor(-h/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function F(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function G(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function H(a,b,c){if(!c)return!1;if(!isNaN(a))return a-1;for(var d,e=0,f=b.length;f>e;e++){var g=b[e];if(g.id===a){d=e;break}}return d}function I(a,b,d){d=d||{},a.each(function(){var a,e=c(this),g=e.data();g.clickOn||(g.clickOn=!0,c.extend(O(e,{onStart:function(b){a=b,(d.onStart||f).call(this,b)},onMove:d.onMove||f,onEnd:function(c){c.moved||d.tail.checked||b.call(this,a)}}),d.tail))})}function J(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function K(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function L(a,b){var d=Math.round(b.pos),e=b.onEnd||f;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(d=b.overPos,e=function(){L(a,c.extend({},b,{overPos:b.pos,time:Math.max(pc,b.time/2)}))});var g=c.extend(j(d),{width:b.width});mc?(a.css(c.extend(k(b.time),g)),b.time>10?r(a,"transform",e,b.time):e()):a.stop().animate(g,b.time,yc,e)}function M(a,b,d,e){a=a||c(a),b=b||c(b);var g=a[0],h=b[0],i="crossfade"===e.method,j=function(){j.done||((e.onEnd||f)(),j.done=!0)},l=k(e.time),m=k(0),n={opacity:0},o={opacity:1};d.removeClass(Jb+" "+Ib),a.addClass(Jb),b.addClass(Ib),mc?(s(a),s(b),i&&h&&a.css(c.extend(m,n)).width(),a.css(c.extend(i?l:m,o)),b.css(c.extend(l,n)),e.time>10&&(g||h)?(r(a,"opacity",j,e.time),r(b,"opacity",j,e.time)):j()):(a.stop(),b.stop(),i&&h&&a.fadeTo(0,0),a.fadeTo(i?e.time:0,1,i&&j),b.fadeTo(e.time,0,j),g&&i||h||j())}function N(a,b){a._x=b?a.touches[0].pageX:a.pageX,a._y=b?a.touches[0].pageY:a.pageY}function O(a,b){function d(a){return l=c(a.target),r.checked=i=k=o=p=!1,h||r.flow||a.touches&&a.touches.length>1||a.which>1||_&&_.type!==a.type&&bb||(o=b.select&&l.is(b.select,q))?o:(n=a.type.match("touch"),p=l.is("a, a *",q),N(a,n),_=a,ab=a.type.replace(/down|start/,"move"),j=a,m=r.control,(b.onStart||f).call(q,a,{control:m,$target:l}),r.flow=h=!0,n||a.preventDefault(),void 0)}function e(a){if(!h||a.touches&&a.touches.length>1)return g(),void 0;if(ab===a.type){N(a,n);var c=Math.abs(a._x-j._x),d=Math.abs(a._y-j._y),e=c-d,l=!r.stable||e>=3,m=-3>=e;k||(k=!(!l&&!m)),n&&!r.checked?((l||m)&&(r.checked=!0,i=l),(!r.checked||i)&&a.preventDefault()):!n||i?(a.preventDefault(),(b.onMove||f).call(q,a,{touch:n})):h=!1,r.checked=r.checked||l||m}}function g(a){var c=h;r.flow=r.control=h=!1,!c||p&&!r.checked||(a&&a.preventDefault(),bb=!0,clearTimeout(cb),cb=setTimeout(function(){bb=!1},1e3),(b.onEnd||f).call(q,{moved:!!k,$target:l,control:m,startEvent:j,aborted:!a,touch:n}))}var h,i,j,k,l,m,n,o,p,q=a[0],r={};return q.addEventListener&&(q.addEventListener("touchstart",d),q.addEventListener("touchmove",e),q.addEventListener("touchend",g)),a.on("mousedown",d),jc.on("mousemove",e).on("mouseup",g),a.on("click","a",function(a){r.checked&&a.preventDefault()}),r}function P(a,b){function d(c){k=l=c._x,p=[[+new Date,k]],m=n=s(a,b.getPos&&b.getPos()),z=C.stable=!(m%v),!z&&c.preventDefault(),(b.onStart||f).call(A,c,{pos:m})}function e(a,b){r=B.minPos,u=B.maxPos,v=B.snap,w=a.altKey,y=!1,x=b.control,x||d(a)}function h(c,e){x&&(x=!1,d(c)),C.noSwipe||(l=c._x,p.push([(new Date).getTime(),l]),n=m-(k-l),o=G(n,r,u),r>=n?n=t(n,r):n>=u&&(n=t(n,u)),C.noMove||(a.css(j(n)),y||(y=!0,e.touch||a.addClass(Yb)),(b.onMove||f).call(A,c,{pos:n,edge:o})))}function i(d){if(!x){d.touch||a.removeClass(Yb),q=(new Date).getTime();for(var e,h,i,j,k,o,s,t,y,z=q-oc,B=null,C=pc,D=b.friction,E=p.length-1;E>=0;E--){if(e=p[E][0],h=Math.abs(e-z),null===B||i>h)B=e,j=p[E][1];else if(B===z||h>i)break;i=h}s=g(n,r,u);var F=j-l,G=F>=0,H=q-B,I=H>oc,J=!I&&n!==m&&s===n;v&&(s=g(Math[J?G?"floor":"ceil":"round"](n/v)*v,r,u),r=u=s),J&&(v||s===n)&&(y=-(F/H),C*=g(Math.abs(y),b.timeLow,b.timeHigh),k=Math.round(n+y*C/D),v||(s=k),(!G&&k>u||G&&r>k)&&(o=G?r:u,t=k-o,v||(s=o),t=g(s+.03*t,o-50,o+50),C=Math.abs((n-t)/(y/D)))),C*=w?10:1,(b.onEnd||f).call(A,c.extend(d,{pos:n,newPos:s,overPos:t,time:C,moved:I&&v||d.moved}))}}var k,l,m,n,o,p,q,r,u,v,w,x,y,z,A=a[0],B=a.data(),C={};return C=c.extend(O(b.$wrap,{onStart:e,onMove:h,onEnd:i,select:b.select,control:b.control}),C)}function Q(a){R(!0),zc.appendTo(a),eb=0,Ac(),db=setInterval(Ac,200)}function R(a){a||zc.detach(),clearInterval(db)}var S={},T=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),U={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},V="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)U.ok=!0;else for(var W=0,X=V.length;X>W;W++)if(U.prefix=V[W],"undefined"!=typeof b[U.prefix+"CancelFullScreen"]){U.ok=!0;break}U.ok&&(U.event=U.prefix+"fullscreenchange",U.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},U.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},U.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var Y,Z,$,_,ab,bb,cb,db,eb,fb="fotorama",gb="fullscreen",hb=fb+"__wrap",ib=hb+"--css3",jb=hb+"--video",kb=hb+"--fade",lb=hb+"--slide",mb=hb+"--no-controls",nb=fb+"__stage",ob=nb+"__frame",pb=ob+"--video",qb=nb+"__shaft",rb=nb+"--only-active",sb=fb+"__grab",tb=fb+"__pointer",ub=fb+"__arr",vb=ub+"--disabled",wb=ub+"--prev",xb=ub+"--next",yb=ub+"__arr",zb=fb+"__nav",Ab=zb+"-wrap",Bb=zb+"__shaft",Cb=zb+"--dots",Db=zb+"--thumbs",Eb=zb+"__frame",Fb=Eb+"--dot",Gb=Eb+"--thumb",Hb=fb+"__fade",Ib=Hb+"-front",Jb=Hb+"-rear",Kb=fb+"__shadow",Lb=Kb+"s",Mb=Lb+"--left",Nb=Lb+"--right",Ob=fb+"__active",Pb=fb+"__select",Qb=fb+"--hidden",Rb=fb+"--fullscreen",Sb=fb+"__fullscreen-icon",Tb=fb+"__error",Ub=fb+"__loading",Vb=fb+"__loaded",Wb=Vb+"--full",Xb=Vb+"--img",Yb=fb+"__grabbing",Zb=fb+"__img",$b=Zb+"--full",_b=fb+"__dot",ac=fb+"__thumb",bc=ac+"-border",cc=fb+"__html",dc=fb+"__video",ec=dc+"-play",fc=dc+"-close",gc=fb+"__caption",hc=fb+"__oooo",ic=c(a),jc=c(b),kc="CSS1Compat"===b.compatMode,lc="quirks"===location.hash.replace("#",""),mc=T.csstransforms3d&&!lc,nc=U.ok,oc=250,pc=300,qc=5e3,rc=2,sc=64,tc=500,uc=333,vc="$stageFrame",wc="$navDotFrame",xc="$navThumbFrame",yc=e([.1,0,.25,1]),zc=c(J("",J(hc))),Ac=function(){zc.attr("class",hc+" "+hc+"--"+eb),eb++,eb>4&&(eb=0)};jQuery.Fotorama=function(e,f){function h(){c.each(Rc,function(a,b){if(!b.i){b.i=vd++;var c=w(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=x(b,Rc,rd),y(Rc,{img:d.img,thumb:d.thumb},b.i,rd)}}})}function i(){Rc=rd.data=Rc||z(e),Sc=rd.size=Rc.length,!Qc.ok&&f.shuffle&&K(Rc),h(),Qd=A(Qd),Sc&&(od||(e.html("").append(zd),c.Fotorama.size++,od=!0))}function q(){Ud.noMove=2>Sc||Uc||fd,Ud.noSwipe=!f.swipe,Bd.toggleClass(sb,!Ud.noMove&&!Ud.noSwipe)}function r(a){a===!0&&(a=""),f.autoplay=Math.max(Number(a)||qc,1.5*pc)}function t(a){return a?"add":"remove"}function u(){fd="crossfade"===f.transition||"dissolve"===f.transition,ad=f.loop&&(Sc>2||fd);var a={add:[],remove:[]};Sc>1?(bd=f.nav,cd="top"===f.navPosition,a.remove.push(Pb),Fd.toggle(f.arrows),Kb()):(bd=!1,Fd.hide()),f.autoplay&&r(f.autoplay),gd=l(f.thumbWidth)||sc,hd=l(f.thumbHeight)||sc,q(),Cc(f,!0),"thumbs"===bd?(bb(Sc,"navThumb"),Tc=Kd,$=xc,F(xd,c.Fotorama.jst.style({w:gd,h:hd,m:rc,s:td,q:!kc})),Hd.addClass(Db).removeClass(Cb)):"dots"===bd?(bb(Sc,"navDot"),Tc=Jd,$=wc,Hd.addClass(Cb).removeClass(Db)):(bd=!1,Hd.removeClass(Db+" "+Cb)),bd&&(cd?Gd.insertBefore(Ad):Gd.insertAfter(Ad),Hb.nav=!1,Hb(Tc,Id,"nav")),dd=f.allowFullScreen,e.insertAfter(yd).removeClass(Qb),dd?(Od.appendTo(Ad),ed=nc&&"native"===dd):(Od.detach(),ed=!1),a[t(fd)].push(kb),a[t(!fd)].push(lb),R(),zd.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),Sd=c.extend({},f)}function v(a){return 0>a?(Sc+a%Sc)%Sc:a>=Sc?a%Sc:a}function A(a){return g(a,0,Sc-1)}function N(a){return ad?v(a):A(a)}function O(a){return a>0||ad?a-1:!1}function S(a){return Sc-1>a||ad?a+1:!1}function T(){Ld.minPos=ad?-1/0:-o(Sc-1,Td.w,rc,Xc),Ld.maxPos=ad?1/0:-o(0,Td.w,rc,Xc),Ld.snap=Td.w+rc}function V(){Md.minPos=Math.min(0,Td.w-Id.width()),Md.maxPos=0,Vd.noMove=Md.minPos===Md.maxPos,Id.toggleClass(sb,!Vd.noMove)}function W(a,b,d){if("number"==typeof a){a=new Array(a);var e=!0}return c.each(a,function(a,c){if(e&&(c=a),"number"==typeof c){var f=Rc[v(c)],g="$"+b+"Frame",h=f[g];d.call(this,a,c,f,h,g,h&&h.data())}})}function X(a,b,c,d){(!id||"*"===id&&d===Rd)&&(a=n(f.width)||n(a)||tc,b=n(f.height)||n(b)||uc,rd.resize({width:a,ratio:f.ratio||c||a/b},0,d===Rd?!0:"*"))}function _(a,b,d,e,g){W(a,b,function(a,h,i,j,k,l){function m(a){var b=v(h);Dc(a,{index:b,src:w,frame:Rc[b]})}function n(){s.remove(),c.Fotorama.cache[w]="error",i.html&&"stage"===b||!x||x===w?(w&&!i.html?(j.trigger("f:error").removeClass(Ub).addClass(Tb),m("error")):"stage"===b&&(j.trigger("f:load").removeClass(Ub+" "+Tb).addClass(Vb),m("load"),X()),l.state="error",!(Sc>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,rd.splice(h,1))):(i[u]=w=x,_([h],b,d,e,!0))}function o(){var a=r.width,g=r.height,k=a/g;t.measures={width:a,height:g,ratio:k},X(a,g,k,h),s.off("load error").addClass(Zb+(q?" "+$b:"")).prependTo(j),E(s,d||Td,e||i.fit||f.fit),c.Fotorama.cache[w]="loaded",l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Ub+" "+Tb).addClass(Vb+" "+(q?Wb:Xb)),"stage"===b&&m("load")},5)}function p(){C(function(){return!qd},function(){o()})}if(j){var q=rd.fullScreen&&i.full&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=c(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",w=i[u],x=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!w)return n(),void 0;c.Fotorama.cache[w]?function y(){"error"===c.Fotorama.cache[w]?n():"loaded"===c.Fotorama.cache[w]?setTimeout(p,0):setTimeout(y,100)}():(c.Fotorama.cache[w]="*",s.on("load",p).on("error",n)),r.src=w}}})}function ab(){var a=rd.activeFrame[vc];a&&!a.data().state&&(Q(a),a.on("f:load f:error",function(){a.off("f:load f:error"),R()}))}function bb(a,b){W(a,b,function(a,d,e,g,h,i){if(!g)if(g=e[h]=zd[h].clone(),i=g.data(),i.data=e,"stage"===b){if(e.html&&c('<div class="'+cc+'"></div>').append(c(e.html).removeAttr("id").html(e._html)).appendTo(g),f.captions&&e.caption&&c('<div class="'+gc+'"></div>').append(e.caption).appendTo(g),e.video){var j=Pd.clone();I(j,function(){Fc(),rd.playVideo()},{onStart:function(){Ec(),Ud.control=!0},tail:Ud}),g.addClass(pb).append(j)}Cd=Cd.add(g)}else"navDot"===b?Jd=Jd.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),Kd=Kd.add(g),e.video&&g.append(Pd.clone()))})}function cb(a,b,c){return a&&a.length&&E(a,b,c)}function db(a){W(a,"stage",function(a,b,d,e,g,h){if(e){Xd[vc].push(e.css(c.extend({left:fd?0:o(b,Td.w,rc,Xc)},fd&&k(0)))),B(e[0])&&(e.appendTo(Bd),Kc(d.$video));var i=d.fit||f.fit;cb(h.$img,Td,i),cb(h.$full,Td,i)}})}function eb(a,b){if("thumbs"===bd&&!isNaN(a)){var d=-a,e=-a+Td.w;Kd.each(function(){var a=c(this),f=a.data(),g=f.eq,h={h:hd},i="cover";h.w=f.w,f.l+f.w<d||f.l>e||cb(f.$img,h,i)||b&&_([g],"navThumb",h,i)})}}function Hb(a,b,d){if(!Hb[d]){var e="nav"===d&&"thumbs"===bd,f=0;b.append(a.filter(function(){for(var a,b=c(this),d=b.data(),e=0,f=Rc.length;f>e;e++)if(d.data===Rc[e]){a=!0,d.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return c(a).data().eq-c(b).data().eq}).each(function(){if(e){var a=c(this),b=a.data(),d=Math.round(hd*b.data.thumbRatio||gd);b.l=f,b.w=d,a.css({width:d}),f+=d+rc}})),Hb[d]=!0}}function Ib(a){return a-Yd>Td.w/3}function Jb(a){return!(ad||Qd+a&&Qd-Sc+a||Uc)}function Kb(){Fd.each(function(a){c(this).toggleClass(vb,Jb(a))})}function Yb(a){return a.l+a.w/2}function dc(a){var b=rd.activeFrame[$].data();L(Nd,{time:.9*a,pos:b.l,width:b.w-2*rc})}function hc(a){if(Rc[a.guessIndex][$]){var b=g(a.coo-Yb(Rc[a.guessIndex][$].data()),Md.minPos,Md.maxPos),c=.9*a.time;L(Id,{time:c,pos:b,onEnd:function(){eb(b,!0)}}),c&&eb(b),Jc(Hd,G(b,Md.minPos,Md.maxPos))}}function lc(){yc($),Wd[$].push(rd.activeFrame[$].addClass(Ob))}function yc(a){for(var b=Wd[a];b.length;)b.shift().removeClass(Ob)}function zc(a){for(var b=Xd[a];b.length;){var c=b.shift();rd.activeFrame[a]!==c&&c.detach()}}function Ac(){Xc=Yc=Qd;var a=rd.activeFrame,b=a[vc];b&&(yc(vc),Wd[vc].push(b.addClass(Ob)),s(Bd.css(j(0))),zc(vc),db(Wc),T(),V())}function Cc(a,b){a&&c.extend(Td,{width:a.width||Td.width,height:a.height,minWidth:a.minWidth,maxWidth:a.maxWidth,minHeight:a.minHeight,maxHeight:a.maxHeight,ratio:function(a){if(a){var b=Number(a);return isNaN(b)?(b=a.split("/"),Number(b[0]/b[1])||d):b}}(a.ratio)})&&!b&&c.extend(f,{width:Td.width,height:Td.height,minWidth:Td.minWidth,maxWidth:Td.maxWidth,minHeight:Td.minHeight,maxHeight:Td.maxHeight,ratio:Td.ratio})}function Dc(a,b){e.trigger(fb+":"+a,[rd,b])}function Ec(){clearTimeout(Fc.t),qd=1,f.stopAutoplayOnTouch?rd.stopAutoplay():md=!0}function Fc(){Fc.t=setTimeout(function(){qd=0},pc+oc)}function Gc(){md=!(!Uc&&!nd)}function Hc(){if(clearTimeout(Hc.t),!f.autoplay||md)return rd.autoplay&&(rd.autoplay=!1,Dc("stopautoplay")),void 0;rd.autoplay||(rd.autoplay=!0,Dc("startautoplay"));var a=Qd;Hc.t=setTimeout(function(){var b=rd.activeFrame[vc].data();C(function(){return b.state||a!==Qd},function(){md||a!==Qd||rd.show(ad?">":v(Qd+1))})},f.autoplay)}function Ic(){rd.fullScreen&&(rd.fullScreen=!1,nc&&U.cancel(ud),Z.removeClass(gb),e.removeClass(Rb).insertAfter(yd),Dc("fullscreenexit"),Td=c.extend({},pd),Kc(Uc,!0),rd.resize(),_(Wc,"stage"),ic.scrollLeft(kd).scrollTop(jd))}function Jc(a,b){a.removeClass(Mb+" "+Nb),b&&!Uc&&a.addClass(b.replace(/^|\s/g," "+Lb+"--"))}function Kc(a,b,c){b&&(zd.removeClass(jb),Uc=!1,q()),a&&a!==Uc&&(a.remove(),Dc("unloadvideo")),c&&(Gc(),Hc())}function Lc(a){zd.toggleClass(mb,a)}function Mc(a){if(!Ud.flow){var b=a?a.pageX:Mc.x,c=!Jb(Ib(b));Mc.p===c||!fd&&f.swipe||!Ad.toggleClass(tb,c&&f.click)||(Mc.p=c,Mc.x=b)}}function Nc(a,b){Uc?Kc(Uc,!0,!0):b&&f.arrows?Lc():f.click&&rd.show({index:a.shiftKey||!Ib(a._x)/3?"<":">",slow:a.altKey,direct:!0})}function Oc(a,b){var d=c(this).data().eq;rd.show({index:d,slow:a.altKey,direct:!0,coo:a._x-Hd.offset().left,time:b})}function Pc(){i(),u(),Qc.ok||(f.hash&&location.hash&&(Rd=H(location.hash.replace(/^#/,""),Rc,0===sd)),Qd=Xc=Yc=Zc=Rd=N(Rd)||0),Sc?(Uc&&Kc(Uc,!0),rd.show({index:Qd,time:0}),rd.resize()):rd.destroy()}function Qc(){Qc.ok||(Qc.ok=!0,Dc("ready"))}Y=Y||c("html"),Z=Z||c("body");var Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd=this,sd=Bc,td=+new Date,ud=e.addClass(fb+td)[0],vd=1,wd=e.data(),xd=c("<style></style>").insertBefore(e),yd=c(J(Qb)).insertBefore(e),zd=c(J(hb)),Ad=c(J(nb)).appendTo(zd),Bd=(Ad[0],c(J(qb)).appendTo(Ad)),Cd=c(),Dd=c(J(ub+" "+wb,J(yb))),Ed=c(J(ub+" "+xb,J(yb))),Fd=Dd.add(Ed).appendTo(Ad),Gd=c(J(Ab)),Hd=c(J(zb)).appendTo(Gd),Id=c(J(Bb)).appendTo(Hd),Jd=c(),Kd=c(),Ld=Bd.data(),Md=Id.data(),Nd=c(J(bc)).appendTo(Id),Od=c(J(Sb)),Pd=c(J(ec)),Qd=(c(J(fc)).appendTo(Ad),!1),Rd=!1,Sd={},Td={},Ud={},Vd={},Wd={},Xd={},Yd=0;zd[vc]=c(J(ob)),zd[xc]=c(J(Eb+" "+Gb,J(ac))),zd[wc]=c(J(Eb+" "+Fb,J(_b))),Wd[vc]=[],Wd[xc]=[],Wd[wc]=[],Xd[vc]=[],mc&&zd.addClass(ib),wd.fotorama=this,rd.options=f,Bc++,rd.startAutoplay=function(a){return rd.autoplay?this:(md=nd=!1,r(a||f.autoplay),Hc(),this)},rd.stopAutoplay=function(){return rd.autoplay&&(md=nd=!0,Hc()),this},rd.show=function(a){function b(){ab(),_(Wc,"stage"),Ac(),Dc("showend",a.direct),Mc(),Gc(),Hc()}var c,d,e=pc;if("object"!=typeof a?(c=a,a={}):(c=a.index,e="number"==typeof a.time?a.time:e,d=a.overPos),a.slow&&(e*=10),c=">"===c?Yc+1:"<"===c?Yc-1:"<<"===c?0:">>"===c?Sc-1:c,c=isNaN(c)?H(c,Rc,!0):c,c="undefined"==typeof c?Qd||0:c,rd.activeIndex=Qd=N(c),$c=O(Qd),_c=S(Qd),Wc=[Qd,$c,_c],Yc=ad?c:Qd,rd.activeFrame=Vc=Rc[Qd],Kc(!1,Vc.i!==Rc[v(Xc)].i),bb([Qd,$c,_c],"stage"),db([Yc]),Dc("show",a.direct),fd){var h=Vc[vc],i=Qd!==Zc?Rc[Zc][vc]:null;M(h,i,Cd,{time:e,method:f.transition,onEnd:b})}else L(Bd,{pos:-o(Yc,Td.w,rc,Xc),overPos:d,time:e,onEnd:b});if(Kb(),bd){lc();var j=A(Qd+g(Yc-Zc,-1,1)),k="undefined"==typeof a.coo;(k||j!==Qd)&&hc({time:e,coo:k?Td.w/2:a.coo,guessIndex:k?Qd:j}),"thumbs"===bd&&dc(e)}return ld="undefined"!=typeof Zc&&Zc!==Qd,Zc=Qd,f.hash&&ld&&!rd.eq&&D(Vc.id||Qd+1),this},rd.requestFullScreen=function(){return dd&&!rd.fullScreen&&(jd=ic.scrollTop(),kd=ic.scrollLeft(),ic.scrollTop(0).scrollLeft(0),pd=c.extend({},Td),e.addClass(Rb).appendTo(Z.addClass(gb)),Kc(Uc,!0),rd.fullScreen=!0,ed&&U.request(ud),rd.resize(),_(Wc,"stage"),Dc("fullscreenenter")),this},rd.cancelFullScreen=function(){return ed&&U.is()?U.cancel(b):Ic(),this},b.addEventListener&&b.addEventListener(U.event,function(){U.is()||Uc||Ic()}),jc.on("keydown",function(a){Uc&&27===a.keyCode?(a.preventDefault(),Kc(Uc,!0,!0)):(rd.fullScreen||f.keyboard&&!sd)&&(27===a.keyCode?(a.preventDefault(),rd.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&rd.fullScreen?(a.preventDefault(),rd.show({index:">",slow:a.altKey,direct:!0})):(37===a.keyCode||38===a.keyCode&&rd.fullScreen)&&(a.preventDefault(),rd.show({index:"<",slow:a.altKey,direct:!0})))}),sd||jc.on("keydown","textarea, input, select",function(a){rd.fullScreen||a.stopPropagation()}),rd.resize=function(b){if(!Rc)return this;Cc(rd.fullScreen?{width:"100%",maxWidth:null,minWidth:null,height:"100%",maxHeight:null,minHeight:null}:b,rd.fullScreen);var c=arguments[1]||0,d=arguments[2],e=Td.width,f=Td.height,h=Td.ratio,i=a.innerHeight-(bd?Hd.height():0);return n(e)&&(zd.css({width:e,minWidth:Td.minWidth,maxWidth:Td.maxWidth}),e=Td.w=zd.width(),f=m(f)/100*i||l(f),f=f||h&&e/h,f&&(e=Math.round(e),f=Td.h=Math.round(g(f,m(Td.minHeight)/100*i||l(Td.minHeight),m(Td.maxHeight)/100*i||l(Td.maxHeight))),Ac(),Ad.addClass(rb).stop().animate({width:e,height:f},c,function(){Ad.removeClass(rb)}),bd&&(Hd.stop().animate({width:e},c).css({left:0}),hc({guessIndex:Qd,time:c,coo:Td.w/2}),"thumbs"===bd&&Hb.nav&&dc(c)),id=d||!0,Qc())),Yd=Ad.offset().left,this},rd.setOptions=function(a){return c.extend(f,a),Pc(),this},rd.shuffle=function(){return Rc&&K(Rc)&&Pc(),this},rd.destroy=function(){return rd.stopAutoplay(),zd.detach(),e.html(wd.urtext),od=!1,Rc=rd.data=null,c.Fotorama.size--,this},rd.playVideo=function(){var a=rd.activeFrame,b=a.video,d=Qd;return"object"==typeof b&&a.videoReady&&(ed&&rd.fullScreen&&rd.cancelFullScreen(),C(function(){return!U.is()||d!==Qd},function(){d===Qd&&(a.$video=a.$video||c(c.Fotorama.jst.video(b)),a.$video.appendTo(a[vc]),zd.addClass(jb),Uc=a.$video,Ud.noMove=!0,Dc("loadvideo"))})),this},rd.stopVideo=function(){return Kc(Uc,!0,!0),this},zd.hover(function(){Lc(!1)},function(){Lc(!0)}),Ad.on("mousemove",Mc),Ud=P(Bd,{onStart:Ec,onMove:function(a,b){Jc(Ad,b.edge)},onEnd:function(a){if(Jc(Ad),Fc(),a.moved||a.touch&&a.pos!==a.newPos){var b=p(a.newPos,Td.w,rc,Xc);rd.show({index:b,time:a.time,overPos:a.overPos,direct:!0})}else a.aborted||Nc(a.startEvent,a.touch)},getPos:function(){return-o(Yc,Td.w,rc,Xc)},timeLow:1,timeHigh:1,friction:2,select:"."+Pb+", ."+Pb+" *",$wrap:Ad}),Vd=P(Id,{onStart:Ec,onMove:function(a,b){Jc(Hd,b.edge)},onEnd:function(a){function b(){Gc(),Hc(),eb(a.newPos,!0)}if(Fc(),a.moved)a.pos!==a.newPos?(L(Id,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),eb(a.newPos),Jc(Hd,G(a.newPos,Md.minPos,Md.maxPos))):b();else{var c=a.$target.closest("."+Eb,Id)[0];c&&Oc.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Hd}),I(Fd,function(a){a.preventDefault(),Uc?Kc(Uc,!0,!0):(Fc(),rd.show({index:Fd.index(this)?">":"<",slow:a.altKey,direct:!0}))},{onStart:function(){Ec(),Ud.control=!0},tail:Ud}),I(Od,function(){Fc(),rd.fullScreen?rd.cancelFullScreen():rd.requestFullScreen(),Gc(),Hc()},{onStart:function(){Ec(),Ud.control=!0},tail:Ud}),c.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){rd[b]=function(){return Rc=Rc||[],"load"!==b?Array.prototype[b].apply(Rc,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Rc=arguments[0]),Pc(),rd}}),ic.on("resize",rd.resize),Pc()},c.fn.fotorama=function(a){return this.each(function(){var b=this,d=c(this),e=d.data(),f=e.fotorama;f?f.setOptions(a):C(function(){return!A(b)},function(){e.urtext=d.html(),new c.Fotorama(d,c.extend({},{width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,ratio:null,nav:"dots",navPosition:"bottom",thumbWidth:sc,thumbHeight:sc,arrows:!0,click:!0,swipe:!0,allowFullScreen:!1,fit:"contain",transition:"slide",captions:!0,hash:!1,autoplay:!1,stopAutoplayOnTouch:!0,keyboard:!1,loop:!1,shuffle:!1},a,e))})})},c.Fotorama.cache={};var Bc=0;c.Fotorama.size=0,c(function(){c("."+fb+':not([data-auto="false"])').fotorama()}),c=c||{},c.Fotorama=c.Fotorama||{},c.Fotorama.jst=c.Fotorama.jst||{},c.Fotorama.jst.style=function(a){var b,c="";return S.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\npadding-left:0;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame:last-child{\npadding-right:0}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.m*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.m)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},c.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(S.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&amp;badge=0":a.id),c+='" frameborder="0" allowfullscreen></iframe></div>'}}(window,document,jQuery);
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
  var tmpl = {};
  tmpl['photo-info']=function anonymous(it) {
var out='<h1 class="photo-info__title">'+(it.title)+'</h1><div class="photo-info__album"><a href="'+(it.albumHref)+'" class="photo-info__album-link">⇧ <u>'+(it.album)+'</u></a></div>';if(it.info.caption){out+='<div class="photo-info__caption">'+(it.info.caption)+'</div>';}if(it.location){out+='<div class="photo-info__location">'+(it.location)+'</div>';}out+='<div class="photo-info__meta">'+(it.pubdate)+', '+(it.exif)+'</div>';return out;
};
  tmpl['photo-title']=function anonymous(it) {
var out=''+(it.title)+' - '+(it.siteTitle);return out;
};
return tmpl;})()
/* Author: Artem Sapegin, http://sapegin.me, 2013 */

/*global utils:false */
;(function ($) {
	'use strict';

	$.fn.tmpl = function(tmplId, data) {
		return $(this).html(window.__templates[tmplId](data));
	};

	utils.initComponents({
		'featured-album': function(elem) {
			function resize() {
				contentContainer.css('margin-top', container.height());
			}

			var container = $(elem);
			var contentContainer = $('.js-content');
			var photos = window.__photos;

			container.fotorama({
				nav: false,
				transition: 'dissolve',
				loop: true,
				autoplay: 7000,
				width: '100%',
				minHeight: 300,
				maxHeight: '100%',
				fit: 'cover'
			});
			container.on('fotorama:load', resize);

			var fotorama = container.data('fotorama');
			fotorama.load(photos);

			$(window).resize(resize);
		},
		'photo-album': function(elem) {
			function update() {
				gallery.addClass('is-activated');
				var frame = fotorama.activeFrame;
				currentId = frame.id;
				frame.title = frame.info.title || '***';
				frame.permalink = location.href.replace(urlRegExp, '/photos/' + currentId + '/');
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

				updateNav();
			}

			function isFirst() {
				return fotorama.activeIndex === 0;
			}

			function isLast() {
				return fotorama.activeIndex === fotorama.data.length-1;
			}

			function updateNav() {
				prevButton.toggleClass('is-disabled', isFirst());
				nextButton.toggleClass('is-disabled', isLast());
			}

			function resize() {
				fotorama.resize({
					width: gallery.width(),
					height: gallery.height()
				});
			}

			function idToIndex(id) {
				var index;
				$.each(photos, function(idx, val) {
					if (photos[idx].id === id) {
						index = idx;
						return false;
					}
				});
				return index;
			}

			var photos = window.__photos;
			var currentId = window.__photos_current_id;
			var urlRegExp = /\/photos\/(\d+)\/$/;
			var startIndex = idToIndex(currentId);
			var container = $(elem);
			var gallery = container.find('.js-gallery');
			var sharePane = container.find('.js-share');
			var infoPane = container.find('.js-info');
			var prevButton = container.find('.js-prev');
			var nextButton = container.find('.js-next');
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

			var fotorama = gallery.data('fotorama');
			fotorama.load(photos);
			fotorama.show({index: startIndex, time: 0});
			gallery.on('fotorama:show', update);

			container.on('click', '.js-prev', function() {
				if (isFirst()) return;
				fotorama.show('<');
				updateNav();
			});
			container.on('click', '.js-next', function() {
				if (isLast()) return;
				fotorama.show('>');
				updateNav();
			});

			updateNav();

			$(window).resize(resize);

			$(window).on('popstate', function(event) {
				var m = window.location.href.match(urlRegExp);
				var id = m && m[1];
				if (!id || id === currentId) return;
				fotorama.show({index: idToIndex(id)});
			});
		},

		'tag-filter': {tagFilter: {
			barSelector: '.js-filter',
			linkSelector: '.js-filter-tag'
		}},

		'parallax': function(container) {
			if (!('pageYOffset' in window)) return;
			container = $(container);
			var speed = container.data('speed') || 0.5;
			var screenHeight = screen.height;
			$(document).scroll(function() {
				var pageY = window.pageYOffset;
				if (pageY < screenHeight) {
					container.css('transform', 'translateY(' + (-pageY * speed) + 'px)');
				}
			});
		}
	});

}(jQuery));
