(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.KMaps = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var konva_min = createCommonjsModule(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){/*
	   * Konva JavaScript Framework v8.3.3
	   * http://konvajs.org/
	   * Licensed under the MIT
	   * Date: Wed Feb 23 2022
	   *
	   * Original work Copyright (C) 2011 - 2013 by Eric Rowell (KineticJS)
	   * Modified work Copyright (C) 2014 - present by Anton Lavrenov (Konva)
	   *
	   * @license
	   */var t=Math.PI/180;const e="undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:{},i={_global:e,version:"8.3.3",isBrowser:"undefined"!=typeof window&&("[object Window]"==={}.toString.call(window)||"[object global]"==={}.toString.call(window)),isUnminified:/param/.test(function(t){}.toString()),dblClickWindow:400,getAngle:e=>i.angleDeg?e*t:e,enableTrace:!1,pointerEventsEnabled:!0,autoDrawEnabled:!0,hitOnDragEnabled:!1,capturePointerEventsEnabled:!1,_mouseListenClick:!1,_touchListenClick:!1,_pointerListenClick:!1,_mouseInDblClickWindow:!1,_touchInDblClickWindow:!1,_pointerInDblClickWindow:!1,_mouseDblClickPointerId:null,_touchDblClickPointerId:null,_pointerDblClickPointerId:null,pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1,dragDistance:3,angleDeg:!0,showWarnings:!0,dragButtons:[0,1],isDragging:()=>i.DD.isDragging,isDragReady:()=>!!i.DD.node,document:e.document,_injectGlobal(t){e.Konva=t;}},r=t=>{i[t.prototype.getClassName()]=t;};i._injectGlobal(i);class a{constructor(t=[1,0,0,1,0,0]){this.dirty=!1,this.m=t&&t.slice()||[1,0,0,1,0,0];}reset(){this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this.m[4]=0,this.m[5]=0;}copy(){return new a(this.m)}copyInto(t){t.m[0]=this.m[0],t.m[1]=this.m[1],t.m[2]=this.m[2],t.m[3]=this.m[3],t.m[4]=this.m[4],t.m[5]=this.m[5];}point(t){var e=this.m;return {x:e[0]*t.x+e[2]*t.y+e[4],y:e[1]*t.x+e[3]*t.y+e[5]}}translate(t,e){return this.m[4]+=this.m[0]*t+this.m[2]*e,this.m[5]+=this.m[1]*t+this.m[3]*e,this}scale(t,e){return this.m[0]*=t,this.m[1]*=t,this.m[2]*=e,this.m[3]*=e,this}rotate(t){var e=Math.cos(t),i=Math.sin(t),r=this.m[0]*e+this.m[2]*i,a=this.m[1]*e+this.m[3]*i,n=this.m[0]*-i+this.m[2]*e,s=this.m[1]*-i+this.m[3]*e;return this.m[0]=r,this.m[1]=a,this.m[2]=n,this.m[3]=s,this}getTranslation(){return {x:this.m[4],y:this.m[5]}}skew(t,e){var i=this.m[0]+this.m[2]*e,r=this.m[1]+this.m[3]*e,a=this.m[2]+this.m[0]*t,n=this.m[3]+this.m[1]*t;return this.m[0]=i,this.m[1]=r,this.m[2]=a,this.m[3]=n,this}multiply(t){var e=this.m[0]*t.m[0]+this.m[2]*t.m[1],i=this.m[1]*t.m[0]+this.m[3]*t.m[1],r=this.m[0]*t.m[2]+this.m[2]*t.m[3],a=this.m[1]*t.m[2]+this.m[3]*t.m[3],n=this.m[0]*t.m[4]+this.m[2]*t.m[5]+this.m[4],s=this.m[1]*t.m[4]+this.m[3]*t.m[5]+this.m[5];return this.m[0]=e,this.m[1]=i,this.m[2]=r,this.m[3]=a,this.m[4]=n,this.m[5]=s,this}invert(){var t=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),e=this.m[3]*t,i=-this.m[1]*t,r=-this.m[2]*t,a=this.m[0]*t,n=t*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),s=t*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);return this.m[0]=e,this.m[1]=i,this.m[2]=r,this.m[3]=a,this.m[4]=n,this.m[5]=s,this}getMatrix(){return this.m}setAbsolutePosition(t,e){var i=this.m[0],r=this.m[1],a=this.m[2],n=this.m[3],s=this.m[4],o=(i*(e-this.m[5])-r*(t-s))/(i*n-r*a),h=(t-s-a*o)/i;return this.translate(h,o)}decompose(){var t=this.m[0],e=this.m[1],i=this.m[2],r=this.m[3],a=t*r-e*i;let n={x:this.m[4],y:this.m[5],rotation:0,scaleX:0,scaleY:0,skewX:0,skewY:0};if(0!=t||0!=e){var s=Math.sqrt(t*t+e*e);n.rotation=e>0?Math.acos(t/s):-Math.acos(t/s),n.scaleX=s,n.scaleY=a/s,n.skewX=(t*i+e*r)/a,n.skewY=0;}else if(0!=i||0!=r){var o=Math.sqrt(i*i+r*r);n.rotation=Math.PI/2-(r>0?Math.acos(-i/o):-Math.acos(i/o)),n.scaleX=a/o,n.scaleY=o,n.skewX=0,n.skewY=(t*i+e*r)/a;}return n.rotation=g._getRotation(n.rotation),n}}var n=Math.PI/180,s=180/Math.PI,o="Konva error: ",h={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,132,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,255,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,203],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[119,128,144],slategrey:[119,128,144],snow:[255,255,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],transparent:[255,255,255,0],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,5]},l=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,d=[];const c="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||function(t){setTimeout(t,60);},g={_isElement:t=>!(!t||1!=t.nodeType),_isFunction:t=>!!(t&&t.constructor&&t.call&&t.apply),_isPlainObject:t=>!!t&&t.constructor===Object,_isArray:t=>"[object Array]"===Object.prototype.toString.call(t),_isNumber:t=>"[object Number]"===Object.prototype.toString.call(t)&&!isNaN(t)&&isFinite(t),_isString:t=>"[object String]"===Object.prototype.toString.call(t),_isBoolean:t=>"[object Boolean]"===Object.prototype.toString.call(t),isObject:t=>t instanceof Object,isValidSelector(t){if("string"!=typeof t)return !1;var e=t[0];return "#"===e||"."===e||e===e.toUpperCase()},_sign:t=>0===t||t>0?1:-1,requestAnimFrame(t){d.push(t),1===d.length&&c((function(){const t=d;d=[],t.forEach((function(t){t();}));}));},createCanvasElement(){var t=document.createElement("canvas");try{t.style=t.style||{};}catch(t){}return t},createImageElement:()=>document.createElement("img"),_isInDocument(t){for(;t=t.parentNode;)if(t==document)return !0;return !1},_urlToImage(t,e){var i=g.createImageElement();i.onload=function(){e(i);},i.src=t;},_rgbToHex:(t,e,i)=>((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1),_hexToRgb(t){t=t.replace("#","");var e=parseInt(t,16);return {r:e>>16&255,g:e>>8&255,b:255&e}},getRandomColor(){for(var t=(16777215*Math.random()<<0).toString(16);t.length<6;)t="0"+t;return "#"+t},getRGB(t){var e;return t in h?{r:(e=h[t])[0],g:e[1],b:e[2]}:"#"===t[0]?this._hexToRgb(t.substring(1)):"rgb("===t.substr(0,4)?(e=l.exec(t.replace(/ /g,"")),{r:parseInt(e[1],10),g:parseInt(e[2],10),b:parseInt(e[3],10)}):{r:0,g:0,b:0}},colorToRGBA:t=>(t=t||"black",g._namedColorToRBA(t)||g._hex3ColorToRGBA(t)||g._hex6ColorToRGBA(t)||g._rgbColorToRGBA(t)||g._rgbaColorToRGBA(t)||g._hslColorToRGBA(t)),_namedColorToRBA(t){var e=h[t.toLowerCase()];return e?{r:e[0],g:e[1],b:e[2],a:1}:null},_rgbColorToRGBA(t){if(0===t.indexOf("rgb(")){var e=(t=t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);return {r:e[0],g:e[1],b:e[2],a:1}}},_rgbaColorToRGBA(t){if(0===t.indexOf("rgba(")){var e=(t=t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(((t,e)=>"%"===t.slice(-1)?3===e?parseInt(t)/100:parseInt(t)/100*255:Number(t)));return {r:e[0],g:e[1],b:e[2],a:e[3]}}},_hex6ColorToRGBA(t){if("#"===t[0]&&7===t.length)return {r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16),a:1}},_hex3ColorToRGBA(t){if("#"===t[0]&&4===t.length)return {r:parseInt(t[1]+t[1],16),g:parseInt(t[2]+t[2],16),b:parseInt(t[3]+t[3],16),a:1}},_hslColorToRGBA(t){if(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)){const[e,...i]=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),r=Number(i[0])/360,a=Number(i[1])/100,n=Number(i[2])/100;let s,o,h;if(0===a)return h=255*n,{r:Math.round(h),g:Math.round(h),b:Math.round(h),a:1};s=n<.5?n*(1+a):n+a-n*a;const l=2*n-s,d=[0,0,0];for(let t=0;t<3;t++)o=r+1/3*-(t-1),o<0&&o++,o>1&&o--,h=6*o<1?l+6*(s-l)*o:2*o<1?s:3*o<2?l+(s-l)*(2/3-o)*6:l,d[t]=255*h;return {r:Math.round(d[0]),g:Math.round(d[1]),b:Math.round(d[2]),a:1}}},haveIntersection:(t,e)=>!(e.x>t.x+t.width||e.x+e.width<t.x||e.y>t.y+t.height||e.y+e.height<t.y),cloneObject(t){var e={};for(var i in t)this._isPlainObject(t[i])?e[i]=this.cloneObject(t[i]):this._isArray(t[i])?e[i]=this.cloneArray(t[i]):e[i]=t[i];return e},cloneArray:t=>t.slice(0),degToRad:t=>t*n,radToDeg:t=>t*s,_degToRad:t=>(g.warn("Util._degToRad is removed. Please use public Util.degToRad instead."),g.degToRad(t)),_radToDeg:t=>(g.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."),g.radToDeg(t)),_getRotation:t=>i.angleDeg?g.radToDeg(t):t,_capitalize:t=>t.charAt(0).toUpperCase()+t.slice(1),throw(t){throw new Error(o+t)},error(t){console.error(o+t);},warn(t){i.showWarnings&&console.warn("Konva warning: "+t);},each(t,e){for(var i in t)e(i,t[i]);},_inRange:(t,e,i)=>e<=t&&t<i,_getProjectionToSegment(t,e,i,r,a,n){var s,o,h,l=(t-i)*(t-i)+(e-r)*(e-r);if(0==l)s=t,o=e,h=(a-i)*(a-i)+(n-r)*(n-r);else {var d=((a-t)*(i-t)+(n-e)*(r-e))/l;d<0?(s=t,o=e,h=(t-a)*(t-a)+(e-n)*(e-n)):d>1?(s=i,o=r,h=(i-a)*(i-a)+(r-n)*(r-n)):h=((s=t+d*(i-t))-a)*(s-a)+((o=e+d*(r-e))-n)*(o-n);}return [s,o,h]},_getProjectionToLine(t,e,i){var r=g.cloneObject(t),a=Number.MAX_VALUE;return e.forEach((function(n,s){if(i||s!==e.length-1){var o=e[(s+1)%e.length],h=g._getProjectionToSegment(n.x,n.y,o.x,o.y,t.x,t.y),l=h[0],d=h[1],c=h[2];c<a&&(r.x=l,r.y=d,a=c);}})),r},_prepareArrayForTween(t,e,i){var r,a=[],n=[];if(t.length>e.length){var s=e;e=t,t=s;}for(r=0;r<t.length;r+=2)a.push({x:t[r],y:t[r+1]});for(r=0;r<e.length;r+=2)n.push({x:e[r],y:e[r+1]});var o=[];return n.forEach((function(t){var e=g._getProjectionToLine(t,a,i);o.push(e.x),o.push(e.y);})),o},_prepareToStringify(t){var e;for(var i in t.visitedByCircularReferenceRemoval=!0,t)if(t.hasOwnProperty(i)&&t[i]&&"object"==typeof t[i])if(e=Object.getOwnPropertyDescriptor(t,i),t[i].visitedByCircularReferenceRemoval||g._isElement(t[i])){if(!e.configurable)return null;delete t[i];}else if(null===g._prepareToStringify(t[i])){if(!e.configurable)return null;delete t[i];}return delete t.visitedByCircularReferenceRemoval,t},_assign(t,e){for(var i in e)t[i]=e[i];return t},_getFirstPointerId:t=>t.touches?t.changedTouches[0].identifier:t.pointerId||999};function u(t){return g._isString(t)?'"'+t+'"':"[object Number]"===Object.prototype.toString.call(t)||g._isBoolean(t)?t:Object.prototype.toString.call(t)}function f(t){return t>255?255:t<0?0:Math.round(t)}function p(){if(i.isUnminified)return function(t,e){return g._isNumber(t)||g.warn(u(t)+' is a not valid value for "'+e+'" attribute. The value should be a number.'),t}}function v(t){if(i.isUnminified)return function(e,i){let r=g._isNumber(e),a=g._isArray(e)&&e.length==t;return r||a||g.warn(u(e)+' is a not valid value for "'+i+'" attribute. The value should be a number or Array<number>('+t+")"),e}}function m(){if(i.isUnminified)return function(t,e){return g._isNumber(t)||"auto"===t||g.warn(u(t)+' is a not valid value for "'+e+'" attribute. The value should be a number or "auto".'),t}}function _(){if(i.isUnminified)return function(t,e){return g._isString(t)||g.warn(u(t)+' is a not valid value for "'+e+'" attribute. The value should be a string.'),t}}function y(){if(i.isUnminified)return function(t,e){const i=g._isString(t),r="[object CanvasGradient]"===Object.prototype.toString.call(t)||t&&t.addColorStop;return i||r||g.warn(u(t)+' is a not valid value for "'+e+'" attribute. The value should be a string or a native gradient.'),t}}function x(){if(i.isUnminified)return function(t,e){return !0===t||!1===t||g.warn(u(t)+' is a not valid value for "'+e+'" attribute. The value should be a boolean.'),t}}var b="get",S="set";const w={addGetterSetter(t,e,i,r,a){w.addGetter(t,e,i),w.addSetter(t,e,r,a),w.addOverloadedGetterSetter(t,e);},addGetter(t,e,i){var r=b+g._capitalize(e);t.prototype[r]=t.prototype[r]||function(){var t=this.attrs[e];return void 0===t?i:t};},addSetter(t,e,i,r){var a=S+g._capitalize(e);t.prototype[a]||w.overWriteSetter(t,e,i,r);},overWriteSetter(t,e,i,r){var a=S+g._capitalize(e);t.prototype[a]=function(t){return i&&null!=t&&(t=i.call(this,t,e)),this._setAttr(e,t),r&&r.call(this),this};},addComponentsGetterSetter(t,e,r,a,n){var s,o,h=r.length,l=g._capitalize,d=b+l(e),c=S+l(e);t.prototype[d]=function(){var t={};for(s=0;s<h;s++)t[o=r[s]]=this.getAttr(e+l(o));return t};var f=function(t){if(i.isUnminified)return function(e,i){return g.isObject(e)||g.warn(u(e)+' is a not valid value for "'+i+'" attribute. The value should be an object with properties '+t),e}}(r);t.prototype[c]=function(t){var i,r=this.attrs[e];for(i in a&&(t=a.call(this,t)),f&&f.call(this,t,e),t)t.hasOwnProperty(i)&&this._setAttr(e+l(i),t[i]);return this._fireChangeEvent(e,r,t),n&&n.call(this),this},w.addOverloadedGetterSetter(t,e);},addOverloadedGetterSetter(t,e){var i=g._capitalize(e),r=S+i,a=b+i;t.prototype[e]=function(){return arguments.length?(this[r](arguments[0]),this):this[a]()};},addDeprecatedGetterSetter(t,e,i,r){g.error("Adding deprecated "+e);var a=b+g._capitalize(e),n=e+" property is deprecated and will be removed soon. Look at Konva change log for more information.";t.prototype[a]=function(){g.error(n);var t=this.attrs[e];return void 0===t?i:t},w.addSetter(t,e,r,(function(){g.error(n);})),w.addOverloadedGetterSetter(t,e);},backCompat(t,e){g.each(e,(function(e,i){var r=t.prototype[i],a=b+g._capitalize(e),n=S+g._capitalize(e);function s(){r.apply(this,arguments),g.error('"'+e+'" method is deprecated and will be removed soon. Use ""'+i+'" instead.');}t.prototype[e]=s,t.prototype[a]=s,t.prototype[n]=s;}));},afterSetFilter(){this._filterUpToDate=!1;}};function C(t){var e,i,r=[],a=t.length,n=g;for(e=0;e<a;e++)i=t[e],n._isNumber(i)?i=Math.round(1e3*i)/1e3:n._isString(i)||(i+=""),r.push(i);return r}var P=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","ellipse","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"];class k{constructor(t){this.canvas=t,this._context=t._canvas.getContext("2d"),i.enableTrace&&(this.traceArr=[],this._enableTrace());}fillShape(t){t.fillEnabled()&&this._fill(t);}_fill(t){}strokeShape(t){t.hasStroke()&&this._stroke(t);}_stroke(t){}fillStrokeShape(t){t.attrs.fillAfterStrokeEnabled?(this.strokeShape(t),this.fillShape(t)):(this.fillShape(t),this.strokeShape(t));}getTrace(t,e){var i,r,a,n,s=this.traceArr,o=s.length,h="";for(i=0;i<o;i++)(a=(r=s[i]).method)?(n=r.args,h+=a,t?h+="()":g._isArray(n[0])?h+="(["+n.join(",")+"])":(e&&(n=n.map((t=>"number"==typeof t?Math.floor(t):t))),h+="("+n.join(",")+")")):(h+=r.property,t||(h+="="+r.val)),h+=";";return h}clearTrace(){this.traceArr=[];}_trace(t){var e=this.traceArr;e.push(t),e.length>=100&&e.shift();}reset(){var t=this.getCanvas().getPixelRatio();this.setTransform(1*t,0,0,1*t,0,0);}getCanvas(){return this.canvas}clear(t){var e=this.getCanvas();t?this.clearRect(t.x||0,t.y||0,t.width||0,t.height||0):this.clearRect(0,0,e.getWidth()/e.pixelRatio,e.getHeight()/e.pixelRatio);}_applyLineCap(t){var e=t.getLineCap();e&&this.setAttr("lineCap",e);}_applyOpacity(t){var e=t.getAbsoluteOpacity();1!==e&&this.setAttr("globalAlpha",e);}_applyLineJoin(t){var e=t.attrs.lineJoin;e&&this.setAttr("lineJoin",e);}setAttr(t,e){this._context[t]=e;}arc(t,e,i,r,a,n){this._context.arc(t,e,i,r,a,n);}arcTo(t,e,i,r,a){this._context.arcTo(t,e,i,r,a);}beginPath(){this._context.beginPath();}bezierCurveTo(t,e,i,r,a,n){this._context.bezierCurveTo(t,e,i,r,a,n);}clearRect(t,e,i,r){this._context.clearRect(t,e,i,r);}clip(){this._context.clip();}closePath(){this._context.closePath();}createImageData(t,e){var i=arguments;return 2===i.length?this._context.createImageData(t,e):1===i.length?this._context.createImageData(t):void 0}createLinearGradient(t,e,i,r){return this._context.createLinearGradient(t,e,i,r)}createPattern(t,e){return this._context.createPattern(t,e)}createRadialGradient(t,e,i,r,a,n){return this._context.createRadialGradient(t,e,i,r,a,n)}drawImage(t,e,i,r,a,n,s,o,h){var l=arguments,d=this._context;3===l.length?d.drawImage(t,e,i):5===l.length?d.drawImage(t,e,i,r,a):9===l.length&&d.drawImage(t,e,i,r,a,n,s,o,h);}ellipse(t,e,i,r,a,n,s,o){this._context.ellipse(t,e,i,r,a,n,s,o);}isPointInPath(t,e){return this._context.isPointInPath(t,e)}fill(t){t?this._context.fill(t):this._context.fill();}fillRect(t,e,i,r){this._context.fillRect(t,e,i,r);}strokeRect(t,e,i,r){this._context.strokeRect(t,e,i,r);}fillText(t,e,i,r){r?this._context.fillText(t,e,i,r):this._context.fillText(t,e,i);}measureText(t){return this._context.measureText(t)}getImageData(t,e,i,r){return this._context.getImageData(t,e,i,r)}lineTo(t,e){this._context.lineTo(t,e);}moveTo(t,e){this._context.moveTo(t,e);}rect(t,e,i,r){this._context.rect(t,e,i,r);}putImageData(t,e,i){this._context.putImageData(t,e,i);}quadraticCurveTo(t,e,i,r){this._context.quadraticCurveTo(t,e,i,r);}restore(){this._context.restore();}rotate(t){this._context.rotate(t);}save(){this._context.save();}scale(t,e){this._context.scale(t,e);}setLineDash(t){this._context.setLineDash?this._context.setLineDash(t):"mozDash"in this._context?this._context.mozDash=t:"webkitLineDash"in this._context&&(this._context.webkitLineDash=t);}getLineDash(){return this._context.getLineDash()}setTransform(t,e,i,r,a,n){this._context.setTransform(t,e,i,r,a,n);}stroke(t){t?this._context.stroke(t):this._context.stroke();}strokeText(t,e,i,r){this._context.strokeText(t,e,i,r);}transform(t,e,i,r,a,n){this._context.transform(t,e,i,r,a,n);}translate(t,e){this._context.translate(t,e);}_enableTrace(){var t,e,i=this,r=P.length,a=this.setAttr,n=function(t){var r,a=i[t];i[t]=function(){return e=C(Array.prototype.slice.call(arguments,0)),r=a.apply(i,arguments),i._trace({method:t,args:e}),r};};for(t=0;t<r;t++)n(P[t]);i.setAttr=function(){a.apply(i,arguments);var t=arguments[0],e=arguments[1];"shadowOffsetX"!==t&&"shadowOffsetY"!==t&&"shadowBlur"!==t||(e/=this.canvas.getPixelRatio()),i._trace({property:t,val:e});};}_applyGlobalCompositeOperation(t){const e=t.attrs.globalCompositeOperation;!e||"source-over"===e||this.setAttr("globalCompositeOperation",e);}}["fillStyle","strokeStyle","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","font","textAlign","textBaseline","globalAlpha","globalCompositeOperation","imageSmoothingEnabled"].forEach((function(t){Object.defineProperty(k.prototype,t,{get(){return this._context[t]},set(e){this._context[t]=e;}});}));class T extends k{_fillColor(t){var e=t.fill();this.setAttr("fillStyle",e),t._fillFunc(this);}_fillPattern(t){this.setAttr("fillStyle",t._getFillPattern()),t._fillFunc(this);}_fillLinearGradient(t){var e=t._getLinearGradient();e&&(this.setAttr("fillStyle",e),t._fillFunc(this));}_fillRadialGradient(t){var e=t._getRadialGradient();e&&(this.setAttr("fillStyle",e),t._fillFunc(this));}_fill(t){var e=t.fill(),i=t.getFillPriority();if(e&&"color"===i)this._fillColor(t);else {var r=t.getFillPatternImage();if(r&&"pattern"===i)this._fillPattern(t);else {var a=t.getFillLinearGradientColorStops();if(a&&"linear-gradient"===i)this._fillLinearGradient(t);else {var n=t.getFillRadialGradientColorStops();n&&"radial-gradient"===i?this._fillRadialGradient(t):e?this._fillColor(t):r?this._fillPattern(t):a?this._fillLinearGradient(t):n&&this._fillRadialGradient(t);}}}}_strokeLinearGradient(t){var e=t.getStrokeLinearGradientStartPoint(),i=t.getStrokeLinearGradientEndPoint(),r=t.getStrokeLinearGradientColorStops(),a=this.createLinearGradient(e.x,e.y,i.x,i.y);if(r){for(var n=0;n<r.length;n+=2)a.addColorStop(r[n],r[n+1]);this.setAttr("strokeStyle",a);}}_stroke(t){var e=t.dash(),i=t.getStrokeScaleEnabled();if(t.hasStroke()){if(!i){this.save();var r=this.getCanvas().getPixelRatio();this.setTransform(r,0,0,r,0,0);}this._applyLineCap(t),e&&t.dashEnabled()&&(this.setLineDash(e),this.setAttr("lineDashOffset",t.dashOffset())),this.setAttr("lineWidth",t.strokeWidth()),t.getShadowForStrokeEnabled()||this.setAttr("shadowColor","rgba(0,0,0,0)"),t.getStrokeLinearGradientColorStops()?this._strokeLinearGradient(t):this.setAttr("strokeStyle",t.stroke()),t._strokeFunc(this),i||this.restore();}}_applyShadow(t){var e,i,r,a=null!==(e=t.getShadowRGBA())&&void 0!==e?e:"black",n=null!==(i=t.getShadowBlur())&&void 0!==i?i:5,s=null!==(r=t.getShadowOffset())&&void 0!==r?r:{x:0,y:0},o=t.getAbsoluteScale(),h=this.canvas.getPixelRatio(),l=o.x*h,d=o.y*h;this.setAttr("shadowColor",a),this.setAttr("shadowBlur",n*Math.min(Math.abs(l),Math.abs(d))),this.setAttr("shadowOffsetX",s.x*l),this.setAttr("shadowOffsetY",s.y*d);}}class A extends k{_fill(t){this.save(),this.setAttr("fillStyle",t.colorKey),t._fillFuncHit(this),this.restore();}strokeShape(t){t.hasHitStroke()&&this._stroke(t);}_stroke(t){if(t.hasHitStroke()){var e=t.getStrokeScaleEnabled();if(!e){this.save();var i=this.getCanvas().getPixelRatio();this.setTransform(i,0,0,i,0,0);}this._applyLineCap(t);var r=t.hitStrokeWidth(),a="auto"===r?t.strokeWidth():r;this.setAttr("lineWidth",a),this.setAttr("strokeStyle",t.colorKey),t._strokeFuncHit(this),e||this.restore();}}}var M;class G{constructor(t){this.pixelRatio=1,this.width=0,this.height=0,this.isCache=!1;var e=(t||{}).pixelRatio||i.pixelRatio||function(){if(M)return M;var t=g.createCanvasElement().getContext("2d");return M=(i._global.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}();this.pixelRatio=e,this._canvas=g.createCanvasElement(),this._canvas.style.padding="0",this._canvas.style.margin="0",this._canvas.style.border="0",this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top="0",this._canvas.style.left="0";}getContext(){return this.context}getPixelRatio(){return this.pixelRatio}setPixelRatio(t){var e=this.pixelRatio;this.pixelRatio=t,this.setSize(this.getWidth()/e,this.getHeight()/e);}setWidth(t){this.width=this._canvas.width=t*this.pixelRatio,this._canvas.style.width=t+"px";var e=this.pixelRatio;this.getContext()._context.scale(e,e);}setHeight(t){this.height=this._canvas.height=t*this.pixelRatio,this._canvas.style.height=t+"px";var e=this.pixelRatio;this.getContext()._context.scale(e,e);}getWidth(){return this.width}getHeight(){return this.height}setSize(t,e){this.setWidth(t||0),this.setHeight(e||0);}toDataURL(t,e){try{return this._canvas.toDataURL(t,e)}catch(t){try{return this._canvas.toDataURL()}catch(t){return g.error("Unable to get data URL. "+t.message+" For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."),""}}}}w.addGetterSetter(G,"pixelRatio",void 0,p());class E extends G{constructor(t={width:0,height:0}){super(t),this.context=new T(this),this.setSize(t.width,t.height);}}class R extends G{constructor(t={width:0,height:0}){super(t),this.hitCanvas=!0,this.context=new A(this),this.setSize(t.width,t.height);}}const L={get isDragging(){var t=!1;return L._dragElements.forEach((e=>{"dragging"===e.dragStatus&&(t=!0);})),t},justDragged:!1,get node(){var t;return L._dragElements.forEach((e=>{t=e.node;})),t},_dragElements:new Map,_drag(t){const e=[];L._dragElements.forEach(((i,r)=>{const{node:a}=i,n=a.getStage();n.setPointersPositions(t),void 0===i.pointerId&&(i.pointerId=g._getFirstPointerId(t));const s=n._changedPointerPositions.find((t=>t.id===i.pointerId));if(s){if("dragging"!==i.dragStatus){var o=a.dragDistance();if(Math.max(Math.abs(s.x-i.startPointerPos.x),Math.abs(s.y-i.startPointerPos.y))<o)return;if(a.startDrag({evt:t}),!a.isDragging())return}a._setDragPosition(t,i),e.push(a);}})),e.forEach((e=>{e.fire("dragmove",{type:"dragmove",target:e,evt:t},!0);}));},_endDragBefore(t){L._dragElements.forEach((e=>{const{node:r}=e,a=r.getStage();t&&a.setPointersPositions(t);if(!a._changedPointerPositions.find((t=>t.id===e.pointerId)))return;"dragging"!==e.dragStatus&&"stopped"!==e.dragStatus||(L.justDragged=!0,i._mouseListenClick=!1,i._touchListenClick=!1,i._pointerListenClick=!1,e.dragStatus="stopped");const n=e.node.getLayer()||e.node instanceof i.Stage&&e.node;n&&n.batchDraw();}));},_endDragAfter(t){L._dragElements.forEach(((e,i)=>{"stopped"===e.dragStatus&&e.node.fire("dragend",{type:"dragend",target:e.node,evt:t},!0),"dragging"!==e.dragStatus&&L._dragElements.delete(i);}));}};i.isBrowser&&(window.addEventListener("mouseup",L._endDragBefore,!0),window.addEventListener("touchend",L._endDragBefore,!0),window.addEventListener("mousemove",L._drag),window.addEventListener("touchmove",L._drag),window.addEventListener("mouseup",L._endDragAfter,!1),window.addEventListener("touchend",L._endDragAfter,!1));var D="absoluteOpacity",O="allEventListeners",I="absoluteTransform",F="absoluteScale",N="canvas",B="listening",z="mouseenter",W="mouseleave",H="Shape",Y=" ",X="stage",j="transform",U="visible",q=["xChange.konva","yChange.konva","scaleXChange.konva","scaleYChange.konva","skewXChange.konva","skewYChange.konva","rotationChange.konva","offsetXChange.konva","offsetYChange.konva","transformsEnabledChange.konva"].join(Y);let V=1;class K{constructor(t){this._id=V++,this.eventListeners={},this.attrs={},this.index=0,this._allEventListeners=null,this.parent=null,this._cache=new Map,this._attachedDepsListeners=new Map,this._lastPos=null,this._batchingTransformChange=!1,this._needClearTransformCache=!1,this._filterUpToDate=!1,this._isUnderCache=!1,this._dragEventId=null,this._shouldFireChangeEvents=!1,this.setAttrs(t),this._shouldFireChangeEvents=!0;}hasChildren(){return !1}_clearCache(t){t!==j&&t!==I||!this._cache.get(t)?t?this._cache.delete(t):this._cache.clear():this._cache.get(t).dirty=!0;}_getCache(t,e){var i=this._cache.get(t);return (void 0===i||(t===j||t===I)&&!0===i.dirty)&&(i=e.call(this),this._cache.set(t,i)),i}_calculate(t,e,i){if(!this._attachedDepsListeners.get(t)){const i=e.map((t=>t+"Change.konva")).join(Y);this.on(i,(()=>{this._clearCache(t);})),this._attachedDepsListeners.set(t,!0);}return this._getCache(t,i)}_getCanvasCache(){return this._cache.get(N)}_clearSelfAndDescendantCache(t){this._clearCache(t),t===I&&this.fire("absoluteTransformChange");}clearCache(){return this._cache.delete(N),this._clearSelfAndDescendantCache(),this._requestDraw(),this}cache(t){var e=t||{},i={};void 0!==e.x&&void 0!==e.y&&void 0!==e.width&&void 0!==e.height||(i=this.getClientRect({skipTransform:!0,relativeTo:this.getParent()}));var r=Math.ceil(e.width||i.width),a=Math.ceil(e.height||i.height),n=e.pixelRatio,s=void 0===e.x?i.x:e.x,o=void 0===e.y?i.y:e.y,h=e.offset||0,l=e.drawBorder||!1,d=e.hitCanvasPixelRatio||1;if(r&&a){s-=h,o-=h;var c=new E({pixelRatio:n,width:r+=2*h,height:a+=2*h}),u=new E({pixelRatio:n,width:0,height:0}),f=new R({pixelRatio:d,width:r,height:a}),p=c.getContext(),v=f.getContext();return f.isCache=!0,c.isCache=!0,this._cache.delete(N),this._filterUpToDate=!1,!1===e.imageSmoothingEnabled&&(c.getContext()._context.imageSmoothingEnabled=!1,u.getContext()._context.imageSmoothingEnabled=!1),p.save(),v.save(),p.translate(-s,-o),v.translate(-s,-o),this._isUnderCache=!0,this._clearSelfAndDescendantCache(D),this._clearSelfAndDescendantCache(F),this.drawScene(c,this),this.drawHit(f,this),this._isUnderCache=!1,p.restore(),v.restore(),l&&(p.save(),p.beginPath(),p.rect(0,0,r,a),p.closePath(),p.setAttr("strokeStyle","red"),p.setAttr("lineWidth",5),p.stroke(),p.restore()),this._cache.set(N,{scene:c,filter:u,hit:f,x:s,y:o}),this._requestDraw(),this}g.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");}isCached(){return this._cache.has(N)}getClientRect(t){throw new Error('abstract "getClientRect" method call')}_transformedRect(t,e){var i,r,a,n,s=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],o=this.getAbsoluteTransform(e);return s.forEach((function(t){var e=o.point(t);void 0===i&&(i=a=e.x,r=n=e.y),i=Math.min(i,e.x),r=Math.min(r,e.y),a=Math.max(a,e.x),n=Math.max(n,e.y);})),{x:i,y:r,width:a-i,height:n-r}}_drawCachedSceneCanvas(t){t.save(),t._applyOpacity(this),t._applyGlobalCompositeOperation(this);const e=this._getCanvasCache();t.translate(e.x,e.y);var i=this._getCachedSceneCanvas(),r=i.pixelRatio;t.drawImage(i._canvas,0,0,i.width/r,i.height/r),t.restore();}_drawCachedHitCanvas(t){var e=this._getCanvasCache(),i=e.hit;t.save(),t.translate(e.x,e.y),t.drawImage(i._canvas,0,0,i.width/i.pixelRatio,i.height/i.pixelRatio),t.restore();}_getCachedSceneCanvas(){var t,e,i,r,a=this.filters(),n=this._getCanvasCache(),s=n.scene,o=n.filter,h=o.getContext();if(a){if(!this._filterUpToDate){var l=s.pixelRatio;o.setSize(s.width/s.pixelRatio,s.height/s.pixelRatio);try{for(t=a.length,h.clear(),h.drawImage(s._canvas,0,0,s.getWidth()/l,s.getHeight()/l),e=h.getImageData(0,0,o.getWidth(),o.getHeight()),i=0;i<t;i++)"function"==typeof(r=a[i])?(r.call(this,e),h.putImageData(e,0,0)):g.error("Filter should be type of function, but got "+typeof r+" instead. Please check correct filters");}catch(t){g.error("Unable to apply filter. "+t.message+" This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");}this._filterUpToDate=!0;}return o}return s}on(t,e){if(this._cache&&this._cache.delete(O),3===arguments.length)return this._delegate.apply(this,arguments);var i,r,a,n,s=t.split(Y),o=s.length;for(i=0;i<o;i++)a=(r=s[i].split("."))[0],n=r[1]||"",this.eventListeners[a]||(this.eventListeners[a]=[]),this.eventListeners[a].push({name:n,handler:e});return this}off(t,e){var i,r,a,n,s,o=(t||"").split(Y),h=o.length;if(this._cache&&this._cache.delete(O),!t)for(r in this.eventListeners)this._off(r);for(i=0;i<h;i++)if(n=(a=o[i].split("."))[0],s=a[1],n)this.eventListeners[n]&&this._off(n,s,e);else for(r in this.eventListeners)this._off(r,s,e);return this}dispatchEvent(t){var e={target:this,type:t.type,evt:t};return this.fire(t.type,e),this}addEventListener(t,e){return this.on(t,(function(t){e.call(this,t.evt);})),this}removeEventListener(t){return this.off(t),this}_delegate(t,e,i){var r=this;this.on(t,(function(t){for(var a=t.target.findAncestors(e,!0,r),n=0;n<a.length;n++)(t=g.cloneObject(t)).currentTarget=a[n],i.call(a[n],t);}));}remove(){return this.isDragging()&&this.stopDrag(),L._dragElements.delete(this._id),this._remove(),this}_clearCaches(){this._clearSelfAndDescendantCache(I),this._clearSelfAndDescendantCache(D),this._clearSelfAndDescendantCache(F),this._clearSelfAndDescendantCache(X),this._clearSelfAndDescendantCache(U),this._clearSelfAndDescendantCache(B);}_remove(){this._clearCaches();var t=this.getParent();t&&t.children&&(t.children.splice(this.index,1),t._setChildrenIndices(),this.parent=null);}destroy(){return this.remove(),this}getAttr(t){var e="get"+g._capitalize(t);return g._isFunction(this[e])?this[e]():this.attrs[t]}getAncestors(){for(var t=this.getParent(),e=[];t;)e.push(t),t=t.getParent();return e}getAttrs(){return this.attrs||{}}setAttrs(t){return this._batchTransformChanges((()=>{var e,i;if(!t)return this;for(e in t)"children"!==e&&(i="set"+g._capitalize(e),g._isFunction(this[i])?this[i](t[e]):this._setAttr(e,t[e]));})),this}isListening(){return this._getCache(B,this._isListening)}_isListening(t){if(!this.listening())return !1;const e=this.getParent();return !e||e===t||this===t||e._isListening(t)}isVisible(){return this._getCache(U,this._isVisible)}_isVisible(t){if(!this.visible())return !1;const e=this.getParent();return !e||e===t||this===t||e._isVisible(t)}shouldDrawHit(t,e=!1){if(t)return this._isVisible(t)&&this._isListening(t);var r=this.getLayer(),a=!1;L._dragElements.forEach((t=>{"dragging"===t.dragStatus&&("Stage"===t.node.nodeType||t.node.getLayer()===r)&&(a=!0);}));var n=!e&&!i.hitOnDragEnabled&&a;return this.isListening()&&this.isVisible()&&!n}show(){return this.visible(!0),this}hide(){return this.visible(!1),this}getZIndex(){return this.index||0}getAbsoluteZIndex(){var t,e,i,r,a=this.getDepth(),n=this,s=0;return "Stage"!==n.nodeType&&function o(h){for(t=[],e=h.length,i=0;i<e;i++)r=h[i],s++,r.nodeType!==H&&(t=t.concat(r.getChildren().slice())),r._id===n._id&&(i=e);t.length>0&&t[0].getDepth()<=a&&o(t);}(n.getStage().getChildren()),s}getDepth(){for(var t=0,e=this.parent;e;)t++,e=e.parent;return t}_batchTransformChanges(t){this._batchingTransformChange=!0,t(),this._batchingTransformChange=!1,this._needClearTransformCache&&(this._clearCache(j),this._clearSelfAndDescendantCache(I)),this._needClearTransformCache=!1;}setPosition(t){return this._batchTransformChanges((()=>{this.x(t.x),this.y(t.y);})),this}getPosition(){return {x:this.x(),y:this.y()}}getRelativePointerPosition(){if(!this.getStage())return null;var t=this.getStage().getPointerPosition();if(!t)return null;var e=this.getAbsoluteTransform().copy();return e.invert(),e.point(t)}getAbsolutePosition(t){let e=!1,i=this.parent;for(;i;){if(i.isCached()){e=!0;break}i=i.parent;}e&&!t&&(t=!0);var r=this.getAbsoluteTransform(t).getMatrix(),n=new a,s=this.offset();return n.m=r.slice(),n.translate(s.x,s.y),n.getTranslation()}setAbsolutePosition(t){var e=this._clearTransform();this.attrs.x=e.x,this.attrs.y=e.y,delete e.x,delete e.y,this._clearCache(j);var i=this._getAbsoluteTransform().copy();return i.invert(),i.translate(t.x,t.y),t={x:this.attrs.x+i.getTranslation().x,y:this.attrs.y+i.getTranslation().y},this._setTransform(e),this.setPosition({x:t.x,y:t.y}),this._clearCache(j),this._clearSelfAndDescendantCache(I),this}_setTransform(t){var e;for(e in t)this.attrs[e]=t[e];}_clearTransform(){var t={x:this.x(),y:this.y(),rotation:this.rotation(),scaleX:this.scaleX(),scaleY:this.scaleY(),offsetX:this.offsetX(),offsetY:this.offsetY(),skewX:this.skewX(),skewY:this.skewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,t}move(t){var e=t.x,i=t.y,r=this.x(),a=this.y();return void 0!==e&&(r+=e),void 0!==i&&(a+=i),this.setPosition({x:r,y:a}),this}_eachAncestorReverse(t,e){var i,r,a=[],n=this.getParent();if(!e||e._id!==this._id){for(a.unshift(this);n&&(!e||n._id!==e._id);)a.unshift(n),n=n.parent;for(i=a.length,r=0;r<i;r++)t(a[r]);}}rotate(t){return this.rotation(this.rotation()+t),this}moveToTop(){if(!this.parent)return g.warn("Node has no parent. moveToTop function is ignored."),!1;var t=this.index;return t<this.parent.getChildren().length-1&&(this.parent.children.splice(t,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0)}moveUp(){if(!this.parent)return g.warn("Node has no parent. moveUp function is ignored."),!1;var t=this.index;return t<this.parent.getChildren().length-1&&(this.parent.children.splice(t,1),this.parent.children.splice(t+1,0,this),this.parent._setChildrenIndices(),!0)}moveDown(){if(!this.parent)return g.warn("Node has no parent. moveDown function is ignored."),!1;var t=this.index;return t>0&&(this.parent.children.splice(t,1),this.parent.children.splice(t-1,0,this),this.parent._setChildrenIndices(),!0)}moveToBottom(){if(!this.parent)return g.warn("Node has no parent. moveToBottom function is ignored."),!1;var t=this.index;return t>0&&(this.parent.children.splice(t,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0)}setZIndex(t){if(!this.parent)return g.warn("Node has no parent. zIndex parameter is ignored."),this;(t<0||t>=this.parent.children.length)&&g.warn("Unexpected value "+t+" for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to "+(this.parent.children.length-1)+".");var e=this.index;return this.parent.children.splice(e,1),this.parent.children.splice(t,0,this),this.parent._setChildrenIndices(),this}getAbsoluteOpacity(){return this._getCache(D,this._getAbsoluteOpacity)}_getAbsoluteOpacity(){var t=this.opacity(),e=this.getParent();return e&&!e._isUnderCache&&(t*=e.getAbsoluteOpacity()),t}moveTo(t){return this.getParent()!==t&&(this._remove(),t.add(this)),this}toObject(){var t,e,i,r,a={},n=this.getAttrs();for(t in a.attrs={},n)e=n[t],g.isObject(e)&&!g._isPlainObject(e)&&!g._isArray(e)||(i="function"==typeof this[t]&&this[t],delete n[t],r=i?i.call(this):null,n[t]=e,r!==e&&(a.attrs[t]=e));return a.className=this.getClassName(),g._prepareToStringify(a)}toJSON(){return JSON.stringify(this.toObject())}getParent(){return this.parent}findAncestors(t,e,i){var r=[];e&&this._isMatch(t)&&r.push(this);for(var a=this.parent;a;){if(a===i)return r;a._isMatch(t)&&r.push(a),a=a.parent;}return r}isAncestorOf(t){return !1}findAncestor(t,e,i){return this.findAncestors(t,e,i)[0]}_isMatch(t){if(!t)return !1;if("function"==typeof t)return t(this);var e,i,r=t.replace(/ /g,"").split(","),a=r.length;for(e=0;e<a;e++)if(i=r[e],g.isValidSelector(i)||(g.warn('Selector "'+i+'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'),g.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'),g.warn("Konva is awesome, right?")),"#"===i.charAt(0)){if(this.id()===i.slice(1))return !0}else if("."===i.charAt(0)){if(this.hasName(i.slice(1)))return !0}else if(this.className===i||this.nodeType===i)return !0;return !1}getLayer(){var t=this.getParent();return t?t.getLayer():null}getStage(){return this._getCache(X,this._getStage)}_getStage(){var t=this.getParent();return t?t.getStage():void 0}fire(t,e={},i){return e.target=e.target||this,i?this._fireAndBubble(t,e):this._fire(t,e),this}getAbsoluteTransform(t){return t?this._getAbsoluteTransform(t):this._getCache(I,this._getAbsoluteTransform)}_getAbsoluteTransform(t){var e;if(t)return e=new a,this._eachAncestorReverse((function(t){var i=t.transformsEnabled();"all"===i?e.multiply(t.getTransform()):"position"===i&&e.translate(t.x()-t.offsetX(),t.y()-t.offsetY());}),t),e;e=this._cache.get(I)||new a,this.parent?this.parent.getAbsoluteTransform().copyInto(e):e.reset();var i=this.transformsEnabled();if("all"===i)e.multiply(this.getTransform());else if("position"===i){const t=this.attrs.x||0,i=this.attrs.y||0,r=this.attrs.offsetX||0,a=this.attrs.offsetY||0;e.translate(t-r,i-a);}return e.dirty=!1,e}getAbsoluteScale(t){for(var e=this;e;)e._isUnderCache&&(t=e),e=e.getParent();const i=this.getAbsoluteTransform(t).decompose();return {x:i.scaleX,y:i.scaleY}}getAbsoluteRotation(){return this.getAbsoluteTransform().decompose().rotation}getTransform(){return this._getCache(j,this._getTransform)}_getTransform(){var t,e,r=this._cache.get(j)||new a;r.reset();var n=this.x(),s=this.y(),o=i.getAngle(this.rotation()),h=null!==(t=this.attrs.scaleX)&&void 0!==t?t:1,l=null!==(e=this.attrs.scaleY)&&void 0!==e?e:1,d=this.attrs.skewX||0,c=this.attrs.skewY||0,g=this.attrs.offsetX||0,u=this.attrs.offsetY||0;return 0===n&&0===s||r.translate(n,s),0!==o&&r.rotate(o),0===d&&0===c||r.skew(d,c),1===h&&1===l||r.scale(h,l),0===g&&0===u||r.translate(-1*g,-1*u),r.dirty=!1,r}clone(t){var e,i,r,a,n,s=g.cloneObject(this.attrs);for(e in t)s[e]=t[e];var o=new this.constructor(s);for(e in this.eventListeners)for(r=(i=this.eventListeners[e]).length,a=0;a<r;a++)(n=i[a]).name.indexOf("konva")<0&&(o.eventListeners[e]||(o.eventListeners[e]=[]),o.eventListeners[e].push(n));return o}_toKonvaCanvas(t){t=t||{};var e=this.getClientRect(),i=this.getStage(),r=void 0!==t.x?t.x:e.x,a=void 0!==t.y?t.y:e.y,n=t.pixelRatio||1,s=new E({width:t.width||e.width||(i?i.width():0),height:t.height||e.height||(i?i.height():0),pixelRatio:n}),o=s.getContext();return o.save(),(r||a)&&o.translate(-1*r,-1*a),this.drawScene(s),o.restore(),s}toCanvas(t){return this._toKonvaCanvas(t)._canvas}toDataURL(t){var e=(t=t||{}).mimeType||null,i=t.quality||null,r=this._toKonvaCanvas(t).toDataURL(e,i);return t.callback&&t.callback(r),r}toImage(t){if(!t||!t.callback)throw "callback required for toImage method config argument";var e=t.callback;delete t.callback,g._urlToImage(this.toDataURL(t),(function(t){e(t);}));}setSize(t){return this.width(t.width),this.height(t.height),this}getSize(){return {width:this.width(),height:this.height()}}getClassName(){return this.className||this.nodeType}getType(){return this.nodeType}getDragDistance(){return void 0!==this.attrs.dragDistance?this.attrs.dragDistance:this.parent?this.parent.getDragDistance():i.dragDistance}_off(t,e,i){var r,a,n,s=this.eventListeners[t];for(r=0;r<s.length;r++)if(a=s[r].name,n=s[r].handler,!("konva"===a&&"konva"!==e||e&&a!==e||i&&i!==n)){if(s.splice(r,1),0===s.length){delete this.eventListeners[t];break}r--;}}_fireChangeEvent(t,e,i){this._fire(t+"Change",{oldVal:e,newVal:i});}addName(t){if(!this.hasName(t)){var e=this.name(),i=e?e+" "+t:t;this.name(i);}return this}hasName(t){if(!t)return !1;const e=this.name();return !!e&&-1!==(e||"").split(/\s/g).indexOf(t)}removeName(t){var e=(this.name()||"").split(/\s/g),i=e.indexOf(t);return -1!==i&&(e.splice(i,1),this.name(e.join(" "))),this}setAttr(t,e){var i=this["set"+g._capitalize(t)];return g._isFunction(i)?i.call(this,e):this._setAttr(t,e),this}_requestDraw(){if(i.autoDrawEnabled){const t=this.getLayer()||this.getStage();null==t||t.batchDraw();}}_setAttr(t,e){var i=this.attrs[t];(i!==e||g.isObject(e))&&(null==e?delete this.attrs[t]:this.attrs[t]=e,this._shouldFireChangeEvents&&this._fireChangeEvent(t,i,e),this._requestDraw());}_setComponentAttr(t,e,i){var r;void 0!==i&&((r=this.attrs[t])||(this.attrs[t]=this.getAttr(t)),this.attrs[t][e]=i,this._fireChangeEvent(t,r,i));}_fireAndBubble(t,e,i){if(e&&this.nodeType===H&&(e.target=this),!((t===z||t===W)&&(i&&(this===i||this.isAncestorOf&&this.isAncestorOf(i))||"Stage"===this.nodeType&&!i))){this._fire(t,e);var r=(t===z||t===W)&&i&&i.isAncestorOf&&i.isAncestorOf(this)&&!i.isAncestorOf(this.parent);(e&&!e.cancelBubble||!e)&&this.parent&&this.parent.isListening()&&!r&&(i&&i.parent?this._fireAndBubble.call(this.parent,t,e,i):this._fireAndBubble.call(this.parent,t,e));}}_getProtoListeners(t){let e=this._cache.get(O);if(!e){e={};let t=Object.getPrototypeOf(this);for(;t;)if(t.eventListeners){for(var i in t.eventListeners){const r=t.eventListeners[i],a=e[i]||[];e[i]=r.concat(a);}t=Object.getPrototypeOf(t);}else t=Object.getPrototypeOf(t);this._cache.set(O,e);}return e[t]}_fire(t,e){(e=e||{}).currentTarget=this,e.type=t;const i=this._getProtoListeners(t);if(i)for(var r=0;r<i.length;r++)i[r].handler.call(this,e);const a=this.eventListeners[t];if(a)for(r=0;r<a.length;r++)a[r].handler.call(this,e);}draw(){return this.drawScene(),this.drawHit(),this}_createDragElement(t){var e=t?t.pointerId:void 0,i=this.getStage(),r=this.getAbsolutePosition(),a=i._getPointerById(e)||i._changedPointerPositions[0]||r;L._dragElements.set(this._id,{node:this,startPointerPos:a,offset:{x:a.x-r.x,y:a.y-r.y},dragStatus:"ready",pointerId:e});}startDrag(t,e=!0){L._dragElements.has(this._id)||this._createDragElement(t);L._dragElements.get(this._id).dragStatus="dragging",this.fire("dragstart",{type:"dragstart",target:this,evt:t&&t.evt},e);}_setDragPosition(t,e){const i=this.getStage()._getPointerById(e.pointerId);if(i){var r={x:i.x-e.offset.x,y:i.y-e.offset.y},a=this.dragBoundFunc();if(void 0!==a){const e=a.call(this,r,t);e?r=e:g.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");}this._lastPos&&this._lastPos.x===r.x&&this._lastPos.y===r.y||(this.setAbsolutePosition(r),this._requestDraw()),this._lastPos=r;}}stopDrag(t){const e=L._dragElements.get(this._id);e&&(e.dragStatus="stopped"),L._endDragBefore(t),L._endDragAfter(t);}setDraggable(t){this._setAttr("draggable",t),this._dragChange();}isDragging(){const t=L._dragElements.get(this._id);return !!t&&"dragging"===t.dragStatus}_listenDrag(){this._dragCleanup(),this.on("mousedown.konva touchstart.konva",(function(t){if((!(void 0!==t.evt.button)||i.dragButtons.indexOf(t.evt.button)>=0)&&!this.isDragging()){var e=!1;L._dragElements.forEach((t=>{this.isAncestorOf(t.node)&&(e=!0);})),e||this._createDragElement(t);}}));}_dragChange(){if(this.attrs.draggable)this._listenDrag();else {if(this._dragCleanup(),!this.getStage())return;const t=L._dragElements.get(this._id),e=t&&"dragging"===t.dragStatus,i=t&&"ready"===t.dragStatus;e?this.stopDrag():i&&L._dragElements.delete(this._id);}}_dragCleanup(){this.off("mousedown.konva"),this.off("touchstart.konva");}isClientRectOnScreen(t={x:0,y:0}){const e=this.getStage();if(!e)return !1;const i={x:-t.x,y:-t.y,width:e.width()+2*t.x,height:e.height()+2*t.y};return g.haveIntersection(i,this.getClientRect())}static create(t,e){return g._isString(t)&&(t=JSON.parse(t)),this._createNode(t,e)}static _createNode(t,e){var r,a,n,s=K.prototype.getClassName.call(t),o=t.children;e&&(t.attrs.container=e),i[s]||(g.warn('Can not find a node with class name "'+s+'". Fallback to "Shape".'),s="Shape");if(r=new(i[s])(t.attrs),o)for(a=o.length,n=0;n<a;n++)r.add(K._createNode(o[n]));return r}}K.prototype.nodeType="Node",K.prototype._attrsAffectingSize=[],K.prototype.eventListeners={},K.prototype.on.call(K.prototype,q,(function(){this._batchingTransformChange?this._needClearTransformCache=!0:(this._clearCache(j),this._clearSelfAndDescendantCache(I));})),K.prototype.on.call(K.prototype,"visibleChange.konva",(function(){this._clearSelfAndDescendantCache(U);})),K.prototype.on.call(K.prototype,"listeningChange.konva",(function(){this._clearSelfAndDescendantCache(B);})),K.prototype.on.call(K.prototype,"opacityChange.konva",(function(){this._clearSelfAndDescendantCache(D);}));const Q=w.addGetterSetter;Q(K,"zIndex"),Q(K,"absolutePosition"),Q(K,"position"),Q(K,"x",0,p()),Q(K,"y",0,p()),Q(K,"globalCompositeOperation","source-over",_()),Q(K,"opacity",1,p()),Q(K,"name","",_()),Q(K,"id","",_()),Q(K,"rotation",0,p()),w.addComponentsGetterSetter(K,"scale",["x","y"]),Q(K,"scaleX",1,p()),Q(K,"scaleY",1,p()),w.addComponentsGetterSetter(K,"skew",["x","y"]),Q(K,"skewX",0,p()),Q(K,"skewY",0,p()),w.addComponentsGetterSetter(K,"offset",["x","y"]),Q(K,"offsetX",0,p()),Q(K,"offsetY",0,p()),Q(K,"dragDistance",null,p()),Q(K,"width",0,p()),Q(K,"height",0,p()),Q(K,"listening",!0,x()),Q(K,"preventDefault",!0,x()),Q(K,"filters",null,(function(t){return this._filterUpToDate=!1,t})),Q(K,"visible",!0,x()),Q(K,"transformsEnabled","all",_()),Q(K,"size"),Q(K,"dragBoundFunc"),Q(K,"draggable",!1,x()),w.backCompat(K,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"});class J extends K{constructor(){super(...arguments),this.children=[];}getChildren(t){if(!t)return this.children||[];const e=this.children||[];var i=[];return e.forEach((function(e){t(e)&&i.push(e);})),i}hasChildren(){return this.getChildren().length>0}removeChildren(){return this.getChildren().forEach((t=>{t.parent=null,t.index=0,t.remove();})),this.children=[],this._requestDraw(),this}destroyChildren(){return this.getChildren().forEach((t=>{t.parent=null,t.index=0,t.destroy();})),this.children=[],this._requestDraw(),this}add(...t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}var i=t[0];return i.getParent()?(i.moveTo(this),this):(this._validateAdd(i),i.index=this.getChildren().length,i.parent=this,i._clearCaches(),this.getChildren().push(i),this._fire("add",{child:i}),this._requestDraw(),this)}destroy(){return this.hasChildren()&&this.destroyChildren(),super.destroy(),this}find(t){return this._generalFind(t,!1)}findOne(t){var e=this._generalFind(t,!0);return e.length>0?e[0]:void 0}_generalFind(t,e){var i=[];return this._descendants((r=>{const a=r._isMatch(t);return a&&i.push(r),!(!a||!e)})),i}_descendants(t){let e=!1;const i=this.getChildren();for(const r of i){if(e=t(r),e)return !0;if(r.hasChildren()&&(e=r._descendants(t),e))return !0}return !1}toObject(){var t=K.prototype.toObject.call(this);return t.children=[],this.getChildren().forEach((e=>{t.children.push(e.toObject());})),t}isAncestorOf(t){for(var e=t.getParent();e;){if(e._id===this._id)return !0;e=e.getParent();}return !1}clone(t){var e=K.prototype.clone.call(this,t);return this.getChildren().forEach((function(t){e.add(t.clone());})),e}getAllIntersections(t){var e=[];return this.find("Shape").forEach((function(i){i.isVisible()&&i.intersects(t)&&e.push(i);})),e}_clearSelfAndDescendantCache(t){var e;super._clearSelfAndDescendantCache(t),this.isCached()||null===(e=this.children)||void 0===e||e.forEach((function(e){e._clearSelfAndDescendantCache(t);}));}_setChildrenIndices(){var t;null===(t=this.children)||void 0===t||t.forEach((function(t,e){t.index=e;})),this._requestDraw();}drawScene(t,e){var i=this.getLayer(),r=t||i&&i.getCanvas(),a=r&&r.getContext(),n=this._getCanvasCache(),s=n&&n.scene,o=r&&r.isCache;if(!this.isVisible()&&!o)return this;if(s){a.save();var h=this.getAbsoluteTransform(e).getMatrix();a.transform(h[0],h[1],h[2],h[3],h[4],h[5]),this._drawCachedSceneCanvas(a),a.restore();}else this._drawChildren("drawScene",r,e);return this}drawHit(t,e){if(!this.shouldDrawHit(e))return this;var i=this.getLayer(),r=t||i&&i.hitCanvas,a=r&&r.getContext(),n=this._getCanvasCache();if(n&&n.hit){a.save();var s=this.getAbsoluteTransform(e).getMatrix();a.transform(s[0],s[1],s[2],s[3],s[4],s[5]),this._drawCachedHitCanvas(a),a.restore();}else this._drawChildren("drawHit",r,e);return this}_drawChildren(t,e,i){var r,a=e&&e.getContext(),n=this.clipWidth(),s=this.clipHeight(),o=this.clipFunc(),h=n&&s||o;const l=i===this;if(h){a.save();var d=this.getAbsoluteTransform(i),c=d.getMatrix();if(a.transform(c[0],c[1],c[2],c[3],c[4],c[5]),a.beginPath(),o)o.call(this,a,this);else {var g=this.clipX(),u=this.clipY();a.rect(g,u,n,s);}a.clip(),c=d.copy().invert().getMatrix(),a.transform(c[0],c[1],c[2],c[3],c[4],c[5]);}var f=!l&&"source-over"!==this.globalCompositeOperation()&&"drawScene"===t;f&&(a.save(),a._applyGlobalCompositeOperation(this)),null===(r=this.children)||void 0===r||r.forEach((function(r){r[t](e,i);})),f&&a.restore(),h&&a.restore();}getClientRect(t){var e,i,r,a,n,s=(t=t||{}).skipTransform,o=t.relativeTo,h={x:1/0,y:1/0,width:0,height:0},l=this;null===(e=this.children)||void 0===e||e.forEach((function(e){if(e.visible()){var s=e.getClientRect({relativeTo:l,skipShadow:t.skipShadow,skipStroke:t.skipStroke});0===s.width&&0===s.height||(void 0===i?(i=s.x,r=s.y,a=s.x+s.width,n=s.y+s.height):(i=Math.min(i,s.x),r=Math.min(r,s.y),a=Math.max(a,s.x+s.width),n=Math.max(n,s.y+s.height)));}}));for(var d=this.find("Shape"),c=!1,g=0;g<d.length;g++){if(d[g]._isVisible(this)){c=!0;break}}return h=c&&void 0!==i?{x:i,y:r,width:a-i,height:n-r}:{x:0,y:0,width:0,height:0},s?h:this._transformedRect(h,o)}}w.addComponentsGetterSetter(J,"clip",["x","y","width","height"]),w.addGetterSetter(J,"clipX",void 0,p()),w.addGetterSetter(J,"clipY",void 0,p()),w.addGetterSetter(J,"clipWidth",void 0,p()),w.addGetterSetter(J,"clipHeight",void 0,p()),w.addGetterSetter(J,"clipFunc");const Z=new Map,$=void 0!==i._global.PointerEvent;function tt(t){return Z.get(t)}function et(t){return {evt:t,pointerId:t.pointerId}}function it(t,e){return Z.get(t)===e}function rt(t,e){at(t);e.getStage()&&(Z.set(t,e),$&&e._fire("gotpointercapture",et(new PointerEvent("gotpointercapture"))));}function at(t,e){const i=Z.get(t);if(!i)return;const r=i.getStage();r&&r.content,Z.delete(t),$&&i._fire("lostpointercapture",et(new PointerEvent("lostpointercapture")));}var nt="mouseleave",st="mouseover",ot="mouseenter",ht="mousemove",lt="mousedown",dt="mouseup",ct="pointermove",gt="pointerdown",ut="pointerup",ft="pointercancel",pt="pointerout",vt="pointerleave",mt="pointerover",_t="pointerenter",yt="contextmenu",xt="touchstart",bt="touchend",St="touchmove",wt="touchcancel",Ct="wheel",Pt=[[ot,"_pointerenter"],[lt,"_pointerdown"],[ht,"_pointermove"],[dt,"_pointerup"],[nt,"_pointerleave"],[xt,"_pointerdown"],[St,"_pointermove"],[bt,"_pointerup"],[wt,"_pointercancel"],[st,"_pointerover"],[Ct,"_wheel"],[yt,"_contextmenu"],[gt,"_pointerdown"],[ct,"_pointermove"],[ut,"_pointerup"],[ft,"_pointercancel"],["lostpointercapture","_lostpointercapture"]];const kt={mouse:{[pt]:"mouseout",[vt]:nt,[mt]:st,[_t]:ot,[ct]:ht,[gt]:lt,[ut]:dt,[ft]:"mousecancel",pointerclick:"click",pointerdblclick:"dblclick"},touch:{[pt]:"touchout",[vt]:"touchleave",[mt]:"touchover",[_t]:"touchenter",[ct]:St,[gt]:xt,[ut]:bt,[ft]:wt,pointerclick:"tap",pointerdblclick:"dbltap"},pointer:{[pt]:pt,[vt]:vt,[mt]:mt,[_t]:_t,[ct]:ct,[gt]:gt,[ut]:ut,[ft]:ft,pointerclick:"pointerclick",pointerdblclick:"pointerdblclick"}},Tt=t=>t.indexOf("pointer")>=0?"pointer":t.indexOf("touch")>=0?"touch":"mouse",At=t=>{const e=Tt(t);return "pointer"===e?i.pointerEventsEnabled&&kt.pointer:"touch"===e?kt.touch:"mouse"===e?kt.mouse:void 0};function Mt(t={}){return (t.clipFunc||t.clipWidth||t.clipHeight)&&g.warn("Stage does not support clipping. Please use clip for Layers or Groups."),t}const Gt=[];class Et extends J{constructor(t){super(Mt(t)),this._pointerPositions=[],this._changedPointerPositions=[],this._buildDOM(),this._bindContentEvents(),Gt.push(this),this.on("widthChange.konva heightChange.konva",this._resizeDOM),this.on("visibleChange.konva",this._checkVisibility),this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",(()=>{Mt(this.attrs);})),this._checkVisibility();}_validateAdd(t){const e="Layer"===t.getType(),i="FastLayer"===t.getType();e||i||g.throw("You may only add layers to the stage.");}_checkVisibility(){if(!this.content)return;const t=this.visible()?"":"none";this.content.style.display=t;}setContainer(t){if("string"==typeof t){if("."===t.charAt(0)){var e=t.slice(1);t=document.getElementsByClassName(e)[0];}else {var i;i="#"!==t.charAt(0)?t:t.slice(1),t=document.getElementById(i);}if(!t)throw "Can not find container in document with id "+i}return this._setAttr("container",t),this.content&&(this.content.parentElement&&this.content.parentElement.removeChild(this.content),t.appendChild(this.content)),this}shouldDrawHit(){return !0}clear(){var t,e=this.children,i=e.length;for(t=0;t<i;t++)e[t].clear();return this}clone(t){return t||(t={}),t.container="undefined"!=typeof document&&document.createElement("div"),J.prototype.clone.call(this,t)}destroy(){super.destroy();var t=this.content;t&&g._isInDocument(t)&&this.container().removeChild(t);var e=Gt.indexOf(this);return e>-1&&Gt.splice(e,1),this}getPointerPosition(){const t=this._pointerPositions[0]||this._changedPointerPositions[0];return t?{x:t.x,y:t.y}:(g.warn("Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"),null)}_getPointerById(t){return this._pointerPositions.find((e=>e.id===t))}getPointersPositions(){return this._pointerPositions}getStage(){return this}getContent(){return this.content}_toKonvaCanvas(t){(t=t||{}).x=t.x||0,t.y=t.y||0,t.width=t.width||this.width(),t.height=t.height||this.height();var e=new E({width:t.width,height:t.height,pixelRatio:t.pixelRatio||1}),i=e.getContext()._context,r=this.children;return (t.x||t.y)&&i.translate(-1*t.x,-1*t.y),r.forEach((function(e){if(e.isVisible()){var r=e._toKonvaCanvas(t);i.drawImage(r._canvas,t.x,t.y,r.getWidth()/r.getPixelRatio(),r.getHeight()/r.getPixelRatio());}})),e}getIntersection(t){if(!t)return null;var e,i=this.children;for(e=i.length-1;e>=0;e--){const r=i[e].getIntersection(t);if(r)return r}return null}_resizeDOM(){var t=this.width(),e=this.height();this.content&&(this.content.style.width=t+"px",this.content.style.height=e+"px"),this.bufferCanvas.setSize(t,e),this.bufferHitCanvas.setSize(t,e),this.children.forEach((i=>{i.setSize({width:t,height:e}),i.draw();}));}add(t,...e){if(arguments.length>1){for(var r=0;r<arguments.length;r++)this.add(arguments[r]);return this}super.add(t);var a=this.children.length;return a>5&&g.warn("The stage has "+a+" layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."),t.setSize({width:this.width(),height:this.height()}),t.draw(),i.isBrowser&&this.content.appendChild(t.canvas._canvas),this}getParent(){return null}getLayer(){return null}hasPointerCapture(t){return it(t,this)}setPointerCapture(t){rt(t,this);}releaseCapture(t){at(t);}getLayers(){return this.children}_bindContentEvents(){i.isBrowser&&Pt.forEach((([t,e])=>{this.content.addEventListener(t,(t=>{this[e](t);}));}));}_pointerenter(t){this.setPointersPositions(t);const e=At(t.type);this._fire(e.pointerenter,{evt:t,target:this,currentTarget:this});}_pointerover(t){this.setPointersPositions(t);const e=At(t.type);this._fire(e.pointerover,{evt:t,target:this,currentTarget:this});}_getTargetShape(t){let e=this[t+"targetShape"];return e&&!e.getStage()&&(e=null),e}_pointerleave(t){const e=At(t.type),r=Tt(t.type);if(e){this.setPointersPositions(t);var a=this._getTargetShape(r),n=!L.isDragging||i.hitOnDragEnabled;a&&n?(a._fireAndBubble(e.pointerout,{evt:t}),a._fireAndBubble(e.pointerleave,{evt:t}),this._fire(e.pointerleave,{evt:t,target:this,currentTarget:this}),this[r+"targetShape"]=null):n&&(this._fire(e.pointerleave,{evt:t,target:this,currentTarget:this}),this._fire(e.pointerout,{evt:t,target:this,currentTarget:this})),this.pointerPos=void 0,this._pointerPositions=[];}}_pointerdown(t){const e=At(t.type),r=Tt(t.type);if(e){this.setPointersPositions(t);var a=!1;this._changedPointerPositions.forEach((n=>{var s=this.getIntersection(n);L.justDragged=!1,i["_"+r+"ListenClick"]=!0;if(!(s&&s.isListening()))return;i.capturePointerEventsEnabled&&s.setPointerCapture(n.id),this[r+"ClickStartShape"]=s,s._fireAndBubble(e.pointerdown,{evt:t,pointerId:n.id}),a=!0;const o=t.type.indexOf("touch")>=0;s.preventDefault()&&t.cancelable&&o&&t.preventDefault();})),a||this._fire(e.pointerdown,{evt:t,target:this,currentTarget:this,pointerId:this._pointerPositions[0].id});}}_pointermove(t){const e=At(t.type),r=Tt(t.type);if(!e)return;if(L.isDragging&&L.node.preventDefault()&&t.cancelable&&t.preventDefault(),this.setPointersPositions(t),!(!L.isDragging||i.hitOnDragEnabled))return;var a={};let n=!1;var s=this._getTargetShape(r);this._changedPointerPositions.forEach((i=>{const o=tt(i.id)||this.getIntersection(i),h=i.id,l={evt:t,pointerId:h};var d=s!==o;if(d&&s&&(s._fireAndBubble(e.pointerout,Object.assign({},l),o),s._fireAndBubble(e.pointerleave,Object.assign({},l),o)),o){if(a[o._id])return;a[o._id]=!0;}o&&o.isListening()?(n=!0,d&&(o._fireAndBubble(e.pointerover,Object.assign({},l),s),o._fireAndBubble(e.pointerenter,Object.assign({},l),s),this[r+"targetShape"]=o),o._fireAndBubble(e.pointermove,Object.assign({},l))):s&&(this._fire(e.pointerover,{evt:t,target:this,currentTarget:this,pointerId:h}),this[r+"targetShape"]=null);})),n||this._fire(e.pointermove,{evt:t,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id});}_pointerup(t){const e=At(t.type),r=Tt(t.type);if(!e)return;this.setPointersPositions(t);const a=this[r+"ClickStartShape"],n=this[r+"ClickEndShape"];var s={};let o=!1;this._changedPointerPositions.forEach((h=>{const l=tt(h.id)||this.getIntersection(h);if(l){if(l.releaseCapture(h.id),s[l._id])return;s[l._id]=!0;}const d=h.id,c={evt:t,pointerId:d};let g=!1;i["_"+r+"InDblClickWindow"]?(g=!0,clearTimeout(this[r+"DblTimeout"])):L.justDragged||(i["_"+r+"InDblClickWindow"]=!0,clearTimeout(this[r+"DblTimeout"])),this[r+"DblTimeout"]=setTimeout((function(){i["_"+r+"InDblClickWindow"]=!1;}),i.dblClickWindow),l&&l.isListening()?(o=!0,this[r+"ClickEndShape"]=l,l._fireAndBubble(e.pointerup,Object.assign({},c)),i["_"+r+"ListenClick"]&&a&&a===l&&(l._fireAndBubble(e.pointerclick,Object.assign({},c)),g&&n&&n===l&&l._fireAndBubble(e.pointerdblclick,Object.assign({},c)))):(this[r+"ClickEndShape"]=null,i["_"+r+"ListenClick"]&&this._fire(e.pointerclick,{evt:t,target:this,currentTarget:this,pointerId:d}),g&&this._fire(e.pointerdblclick,{evt:t,target:this,currentTarget:this,pointerId:d}));})),o||this._fire(e.pointerup,{evt:t,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id}),i["_"+r+"ListenClick"]=!1,t.cancelable&&t.preventDefault();}_contextmenu(t){this.setPointersPositions(t);var e=this.getIntersection(this.getPointerPosition());e&&e.isListening()?e._fireAndBubble(yt,{evt:t}):this._fire(yt,{evt:t,target:this,currentTarget:this});}_wheel(t){this.setPointersPositions(t);var e=this.getIntersection(this.getPointerPosition());e&&e.isListening()?e._fireAndBubble(Ct,{evt:t}):this._fire(Ct,{evt:t,target:this,currentTarget:this});}_pointercancel(t){this.setPointersPositions(t);const e=tt(t.pointerId)||this.getIntersection(this.getPointerPosition());e&&e._fireAndBubble(ut,et(t)),at(t.pointerId);}_lostpointercapture(t){at(t.pointerId);}setPointersPositions(t){var e=this._getContentPosition(),i=null,r=null;void 0!==(t=t||window.event).touches?(this._pointerPositions=[],this._changedPointerPositions=[],Array.prototype.forEach.call(t.touches,(t=>{this._pointerPositions.push({id:t.identifier,x:(t.clientX-e.left)/e.scaleX,y:(t.clientY-e.top)/e.scaleY});})),Array.prototype.forEach.call(t.changedTouches||t.touches,(t=>{this._changedPointerPositions.push({id:t.identifier,x:(t.clientX-e.left)/e.scaleX,y:(t.clientY-e.top)/e.scaleY});}))):(i=(t.clientX-e.left)/e.scaleX,r=(t.clientY-e.top)/e.scaleY,this.pointerPos={x:i,y:r},this._pointerPositions=[{x:i,y:r,id:g._getFirstPointerId(t)}],this._changedPointerPositions=[{x:i,y:r,id:g._getFirstPointerId(t)}]);}_setPointerPosition(t){g.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'),this.setPointersPositions(t);}_getContentPosition(){if(!this.content||!this.content.getBoundingClientRect)return {top:0,left:0,scaleX:1,scaleY:1};var t=this.content.getBoundingClientRect();return {top:t.top,left:t.left,scaleX:t.width/this.content.clientWidth||1,scaleY:t.height/this.content.clientHeight||1}}_buildDOM(){if(this.bufferCanvas=new E({width:this.width(),height:this.height()}),this.bufferHitCanvas=new R({pixelRatio:1,width:this.width(),height:this.height()}),i.isBrowser){var t=this.container();if(!t)throw "Stage has no container. A container is required.";t.innerHTML="",this.content=document.createElement("div"),this.content.style.position="relative",this.content.style.userSelect="none",this.content.className="konvajs-content",this.content.setAttribute("role","presentation"),t.appendChild(this.content),this._resizeDOM();}}cache(){return g.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."),this}clearCache(){return this}batchDraw(){return this.getChildren().forEach((function(t){t.batchDraw();})),this}}Et.prototype.nodeType="Stage",r(Et),w.addGetterSetter(Et,"container");var Rt="hasShadow",Lt="shadowRGBA",Dt="patternImage",Ot="linearGradient",It="radialGradient";let Ft;function Nt(){return Ft||(Ft=g.createCanvasElement().getContext("2d"),Ft)}const Bt={};class zt extends K{constructor(t){let e;for(super(t);e=g.getRandomColor(),!e||e in Bt;);this.colorKey=e,Bt[e]=this;}getContext(){return g.warn("shape.getContext() method is deprecated. Please do not use it."),this.getLayer().getContext()}getCanvas(){return g.warn("shape.getCanvas() method is deprecated. Please do not use it."),this.getLayer().getCanvas()}getSceneFunc(){return this.attrs.sceneFunc||this._sceneFunc}getHitFunc(){return this.attrs.hitFunc||this._hitFunc}hasShadow(){return this._getCache(Rt,this._hasShadow)}_hasShadow(){return this.shadowEnabled()&&0!==this.shadowOpacity()&&!!(this.shadowColor()||this.shadowBlur()||this.shadowOffsetX()||this.shadowOffsetY())}_getFillPattern(){return this._getCache(Dt,this.__getFillPattern)}__getFillPattern(){if(this.fillPatternImage()){const t=Nt().createPattern(this.fillPatternImage(),this.fillPatternRepeat()||"repeat");if(t&&t.setTransform){const e=new a;e.translate(this.fillPatternX(),this.fillPatternY()),e.rotate(i.getAngle(this.fillPatternRotation())),e.scale(this.fillPatternScaleX(),this.fillPatternScaleY()),e.translate(-1*this.fillPatternOffsetX(),-1*this.fillPatternOffsetY());const r=e.getMatrix();t.setTransform({a:r[0],b:r[1],c:r[2],d:r[3],e:r[4],f:r[5]});}return t}}_getLinearGradient(){return this._getCache(Ot,this.__getLinearGradient)}__getLinearGradient(){var t=this.fillLinearGradientColorStops();if(t){for(var e=Nt(),i=this.fillLinearGradientStartPoint(),r=this.fillLinearGradientEndPoint(),a=e.createLinearGradient(i.x,i.y,r.x,r.y),n=0;n<t.length;n+=2)a.addColorStop(t[n],t[n+1]);return a}}_getRadialGradient(){return this._getCache(It,this.__getRadialGradient)}__getRadialGradient(){var t=this.fillRadialGradientColorStops();if(t){for(var e=Nt(),i=this.fillRadialGradientStartPoint(),r=this.fillRadialGradientEndPoint(),a=e.createRadialGradient(i.x,i.y,this.fillRadialGradientStartRadius(),r.x,r.y,this.fillRadialGradientEndRadius()),n=0;n<t.length;n+=2)a.addColorStop(t[n],t[n+1]);return a}}getShadowRGBA(){return this._getCache(Lt,this._getShadowRGBA)}_getShadowRGBA(){if(this.hasShadow()){var t=g.colorToRGBA(this.shadowColor());return "rgba("+t.r+","+t.g+","+t.b+","+t.a*(this.shadowOpacity()||1)+")"}}hasFill(){return this._calculate("hasFill",["fillEnabled","fill","fillPatternImage","fillLinearGradientColorStops","fillRadialGradientColorStops"],(()=>this.fillEnabled()&&!!(this.fill()||this.fillPatternImage()||this.fillLinearGradientColorStops()||this.fillRadialGradientColorStops())))}hasStroke(){return this._calculate("hasStroke",["strokeEnabled","strokeWidth","stroke","strokeLinearGradientColorStops"],(()=>this.strokeEnabled()&&this.strokeWidth()&&!(!this.stroke()&&!this.strokeLinearGradientColorStops())))}hasHitStroke(){const t=this.hitStrokeWidth();return "auto"===t?this.hasStroke():this.strokeEnabled()&&!!t}intersects(t){var e=this.getStage().bufferHitCanvas;return e.getContext().clear(),this.drawHit(e,null,!0),e.context.getImageData(Math.round(t.x),Math.round(t.y),1,1).data[3]>0}destroy(){return K.prototype.destroy.call(this),delete Bt[this.colorKey],delete this.colorKey,this}_useBufferCanvas(t){var e;if(!this.getStage())return !1;if(!(null===(e=this.attrs.perfectDrawEnabled)||void 0===e||e))return !1;const i=t||this.hasFill(),r=this.hasStroke(),a=1!==this.getAbsoluteOpacity();if(i&&r&&a)return !0;const n=this.hasShadow(),s=this.shadowForStrokeEnabled();return !!(i&&r&&n&&s)}setStrokeHitEnabled(t){g.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."),t?this.hitStrokeWidth("auto"):this.hitStrokeWidth(0);}getStrokeHitEnabled(){return 0!==this.hitStrokeWidth()}getSelfRect(){var t=this.size();return {x:this._centroid?-t.width/2:0,y:this._centroid?-t.height/2:0,width:t.width,height:t.height}}getClientRect(t={}){const e=t.skipTransform,i=t.relativeTo,r=this.getSelfRect(),a=!t.skipStroke&&this.hasStroke()&&this.strokeWidth()||0,n=r.width+a,s=r.height+a,o=!t.skipShadow&&this.hasShadow(),h=o?this.shadowOffsetX():0,l=o?this.shadowOffsetY():0,d=n+Math.abs(h),c=s+Math.abs(l),g=o&&this.shadowBlur()||0,u=d+2*g,f=c+2*g;let p=0;Math.round(a/2)!==a/2&&(p=1);const v={width:u+p,height:f+p,x:-Math.round(a/2+g)+Math.min(h,0)+r.x,y:-Math.round(a/2+g)+Math.min(l,0)+r.y};return e?v:this._transformedRect(v,i)}drawScene(t,e){var i,r,a=this.getLayer(),n=t||a.getCanvas(),s=n.getContext(),o=this._getCanvasCache(),h=this.getSceneFunc(),l=this.hasShadow(),d=n.isCache,c=e===this;if(!this.isVisible()&&!c)return this;if(o){s.save();var g=this.getAbsoluteTransform(e).getMatrix();return s.transform(g[0],g[1],g[2],g[3],g[4],g[5]),this._drawCachedSceneCanvas(s),s.restore(),this}if(!h)return this;if(s.save(),this._useBufferCanvas()&&!d){(r=(i=this.getStage().bufferCanvas).getContext()).clear(),r.save(),r._applyLineJoin(this);var u=this.getAbsoluteTransform(e).getMatrix();r.transform(u[0],u[1],u[2],u[3],u[4],u[5]),h.call(this,r,this),r.restore();var f=i.pixelRatio;l&&s._applyShadow(this),s._applyOpacity(this),s._applyGlobalCompositeOperation(this),s.drawImage(i._canvas,0,0,i.width/f,i.height/f);}else {if(s._applyLineJoin(this),!c){u=this.getAbsoluteTransform(e).getMatrix();s.transform(u[0],u[1],u[2],u[3],u[4],u[5]),s._applyOpacity(this),s._applyGlobalCompositeOperation(this);}l&&s._applyShadow(this),h.call(this,s,this);}return s.restore(),this}drawHit(t,e,i=!1){if(!this.shouldDrawHit(e,i))return this;var r=this.getLayer(),a=t||r.hitCanvas,n=a&&a.getContext(),s=this.hitFunc()||this.sceneFunc(),o=this._getCanvasCache(),h=o&&o.hit;if(this.colorKey||g.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"),h){n.save();var l=this.getAbsoluteTransform(e).getMatrix();return n.transform(l[0],l[1],l[2],l[3],l[4],l[5]),this._drawCachedHitCanvas(n),n.restore(),this}if(!s)return this;n.save(),n._applyLineJoin(this);if(!(this===e)){var d=this.getAbsoluteTransform(e).getMatrix();n.transform(d[0],d[1],d[2],d[3],d[4],d[5]);}return s.call(this,n,this),n.restore(),this}drawHitFromCache(t=0){var e,i,r,a,n,s=this._getCanvasCache(),o=this._getCachedSceneCanvas(),h=s.hit,l=h.getContext(),d=h.getWidth(),c=h.getHeight();l.clear(),l.drawImage(o._canvas,0,0,d,c);try{for(r=(i=(e=l.getImageData(0,0,d,c)).data).length,a=g._hexToRgb(this.colorKey),n=0;n<r;n+=4)i[n+3]>t?(i[n]=a.r,i[n+1]=a.g,i[n+2]=a.b,i[n+3]=255):i[n+3]=0;l.putImageData(e,0,0);}catch(t){g.error("Unable to draw hit graph from cached scene canvas. "+t.message);}return this}hasPointerCapture(t){return it(t,this)}setPointerCapture(t){rt(t,this);}releaseCapture(t){at(t);}}zt.prototype._fillFunc=function(t){t.fill();},zt.prototype._strokeFunc=function(t){t.stroke();},zt.prototype._fillFuncHit=function(t){t.fill();},zt.prototype._strokeFuncHit=function(t){t.stroke();},zt.prototype._centroid=!1,zt.prototype.nodeType="Shape",r(zt),zt.prototype.eventListeners={},zt.prototype.on.call(zt.prototype,"shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",(function(){this._clearCache(Rt);})),zt.prototype.on.call(zt.prototype,"shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",(function(){this._clearCache(Lt);})),zt.prototype.on.call(zt.prototype,"fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva",(function(){this._clearCache(Dt);})),zt.prototype.on.call(zt.prototype,"fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",(function(){this._clearCache(Ot);})),zt.prototype.on.call(zt.prototype,"fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",(function(){this._clearCache(It);})),w.addGetterSetter(zt,"stroke",void 0,y()),w.addGetterSetter(zt,"strokeWidth",2,p()),w.addGetterSetter(zt,"fillAfterStrokeEnabled",!1),w.addGetterSetter(zt,"hitStrokeWidth","auto",m()),w.addGetterSetter(zt,"strokeHitEnabled",!0,x()),w.addGetterSetter(zt,"perfectDrawEnabled",!0,x()),w.addGetterSetter(zt,"shadowForStrokeEnabled",!0,x()),w.addGetterSetter(zt,"lineJoin"),w.addGetterSetter(zt,"lineCap"),w.addGetterSetter(zt,"sceneFunc"),w.addGetterSetter(zt,"hitFunc"),w.addGetterSetter(zt,"dash"),w.addGetterSetter(zt,"dashOffset",0,p()),w.addGetterSetter(zt,"shadowColor",void 0,_()),w.addGetterSetter(zt,"shadowBlur",0,p()),w.addGetterSetter(zt,"shadowOpacity",1,p()),w.addComponentsGetterSetter(zt,"shadowOffset",["x","y"]),w.addGetterSetter(zt,"shadowOffsetX",0,p()),w.addGetterSetter(zt,"shadowOffsetY",0,p()),w.addGetterSetter(zt,"fillPatternImage"),w.addGetterSetter(zt,"fill",void 0,y()),w.addGetterSetter(zt,"fillPatternX",0,p()),w.addGetterSetter(zt,"fillPatternY",0,p()),w.addGetterSetter(zt,"fillLinearGradientColorStops"),w.addGetterSetter(zt,"strokeLinearGradientColorStops"),w.addGetterSetter(zt,"fillRadialGradientStartRadius",0),w.addGetterSetter(zt,"fillRadialGradientEndRadius",0),w.addGetterSetter(zt,"fillRadialGradientColorStops"),w.addGetterSetter(zt,"fillPatternRepeat","repeat"),w.addGetterSetter(zt,"fillEnabled",!0),w.addGetterSetter(zt,"strokeEnabled",!0),w.addGetterSetter(zt,"shadowEnabled",!0),w.addGetterSetter(zt,"dashEnabled",!0),w.addGetterSetter(zt,"strokeScaleEnabled",!0),w.addGetterSetter(zt,"fillPriority","color"),w.addComponentsGetterSetter(zt,"fillPatternOffset",["x","y"]),w.addGetterSetter(zt,"fillPatternOffsetX",0,p()),w.addGetterSetter(zt,"fillPatternOffsetY",0,p()),w.addComponentsGetterSetter(zt,"fillPatternScale",["x","y"]),w.addGetterSetter(zt,"fillPatternScaleX",1,p()),w.addGetterSetter(zt,"fillPatternScaleY",1,p()),w.addComponentsGetterSetter(zt,"fillLinearGradientStartPoint",["x","y"]),w.addComponentsGetterSetter(zt,"strokeLinearGradientStartPoint",["x","y"]),w.addGetterSetter(zt,"fillLinearGradientStartPointX",0),w.addGetterSetter(zt,"strokeLinearGradientStartPointX",0),w.addGetterSetter(zt,"fillLinearGradientStartPointY",0),w.addGetterSetter(zt,"strokeLinearGradientStartPointY",0),w.addComponentsGetterSetter(zt,"fillLinearGradientEndPoint",["x","y"]),w.addComponentsGetterSetter(zt,"strokeLinearGradientEndPoint",["x","y"]),w.addGetterSetter(zt,"fillLinearGradientEndPointX",0),w.addGetterSetter(zt,"strokeLinearGradientEndPointX",0),w.addGetterSetter(zt,"fillLinearGradientEndPointY",0),w.addGetterSetter(zt,"strokeLinearGradientEndPointY",0),w.addComponentsGetterSetter(zt,"fillRadialGradientStartPoint",["x","y"]),w.addGetterSetter(zt,"fillRadialGradientStartPointX",0),w.addGetterSetter(zt,"fillRadialGradientStartPointY",0),w.addComponentsGetterSetter(zt,"fillRadialGradientEndPoint",["x","y"]),w.addGetterSetter(zt,"fillRadialGradientEndPointX",0),w.addGetterSetter(zt,"fillRadialGradientEndPointY",0),w.addGetterSetter(zt,"fillPatternRotation",0),w.backCompat(zt,{dashArray:"dash",getDashArray:"getDash",setDashArray:"getDash",drawFunc:"sceneFunc",getDrawFunc:"getSceneFunc",setDrawFunc:"setSceneFunc",drawHitFunc:"hitFunc",getDrawHitFunc:"getHitFunc",setDrawHitFunc:"setHitFunc"});var Wt=[{x:0,y:0},{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],Ht=Wt.length;class Yt extends J{constructor(t){super(t),this.canvas=new E,this.hitCanvas=new R({pixelRatio:1}),this._waitingForDraw=!1,this.on("visibleChange.konva",this._checkVisibility),this._checkVisibility(),this.on("imageSmoothingEnabledChange.konva",this._setSmoothEnabled),this._setSmoothEnabled();}createPNGStream(){return this.canvas._canvas.createPNGStream()}getCanvas(){return this.canvas}getNativeCanvasElement(){return this.canvas._canvas}getHitCanvas(){return this.hitCanvas}getContext(){return this.getCanvas().getContext()}clear(t){return this.getContext().clear(t),this.getHitCanvas().getContext().clear(t),this}setZIndex(t){super.setZIndex(t);var e=this.getStage();return e&&e.content&&(e.content.removeChild(this.getNativeCanvasElement()),t<e.children.length-1?e.content.insertBefore(this.getNativeCanvasElement(),e.children[t+1].getCanvas()._canvas):e.content.appendChild(this.getNativeCanvasElement())),this}moveToTop(){K.prototype.moveToTop.call(this);var t=this.getStage();return t&&t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.appendChild(this.getNativeCanvasElement())),!0}moveUp(){if(!K.prototype.moveUp.call(this))return !1;var t=this.getStage();return !(!t||!t.content)&&(t.content.removeChild(this.getNativeCanvasElement()),this.index<t.children.length-1?t.content.insertBefore(this.getNativeCanvasElement(),t.children[this.index+1].getCanvas()._canvas):t.content.appendChild(this.getNativeCanvasElement()),!0)}moveDown(){if(K.prototype.moveDown.call(this)){var t=this.getStage();if(t){var e=t.children;t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.insertBefore(this.getNativeCanvasElement(),e[this.index+1].getCanvas()._canvas));}return !0}return !1}moveToBottom(){if(K.prototype.moveToBottom.call(this)){var t=this.getStage();if(t){var e=t.children;t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.insertBefore(this.getNativeCanvasElement(),e[1].getCanvas()._canvas));}return !0}return !1}getLayer(){return this}remove(){var t=this.getNativeCanvasElement();return K.prototype.remove.call(this),t&&t.parentNode&&g._isInDocument(t)&&t.parentNode.removeChild(t),this}getStage(){return this.parent}setSize({width:t,height:e}){return this.canvas.setSize(t,e),this.hitCanvas.setSize(t,e),this._setSmoothEnabled(),this}_validateAdd(t){var e=t.getType();"Group"!==e&&"Shape"!==e&&g.throw("You may only add groups and shapes to a layer.");}_toKonvaCanvas(t){return (t=t||{}).width=t.width||this.getWidth(),t.height=t.height||this.getHeight(),t.x=void 0!==t.x?t.x:this.x(),t.y=void 0!==t.y?t.y:this.y(),K.prototype._toKonvaCanvas.call(this,t)}_checkVisibility(){const t=this.visible();this.canvas._canvas.style.display=t?"block":"none";}_setSmoothEnabled(){this.getContext()._context.imageSmoothingEnabled=this.imageSmoothingEnabled();}getWidth(){if(this.parent)return this.parent.width()}setWidth(){g.warn('Can not change width of layer. Use "stage.width(value)" function instead.');}getHeight(){if(this.parent)return this.parent.height()}setHeight(){g.warn('Can not change height of layer. Use "stage.height(value)" function instead.');}batchDraw(){return this._waitingForDraw||(this._waitingForDraw=!0,g.requestAnimFrame((()=>{this.draw(),this._waitingForDraw=!1;}))),this}getIntersection(t){if(!this.isListening()||!this.isVisible())return null;for(var e=1,i=!1;;){for(let r=0;r<Ht;r++){const a=Wt[r],n=this._getIntersection({x:t.x+a.x*e,y:t.y+a.y*e}),s=n.shape;if(s)return s;if(i=!!n.antialiased,!n.antialiased)break}if(!i)return null;e+=1;}}_getIntersection(t){const e=this.hitCanvas.pixelRatio,i=this.hitCanvas.context.getImageData(Math.round(t.x*e),Math.round(t.y*e),1,1).data,r=i[3];if(255===r){const t=g._rgbToHex(i[0],i[1],i[2]),e=Bt["#"+t];return e?{shape:e}:{antialiased:!0}}return r>0?{antialiased:!0}:{}}drawScene(t,e){var i=this.getLayer(),r=t||i&&i.getCanvas();return this._fire("beforeDraw",{node:this}),this.clearBeforeDraw()&&r.getContext().clear(),J.prototype.drawScene.call(this,r,e),this._fire("draw",{node:this}),this}drawHit(t,e){var i=this.getLayer(),r=t||i&&i.hitCanvas;return i&&i.clearBeforeDraw()&&i.getHitCanvas().getContext().clear(),J.prototype.drawHit.call(this,r,e),this}enableHitGraph(){return this.hitGraphEnabled(!0),this}disableHitGraph(){return this.hitGraphEnabled(!1),this}setHitGraphEnabled(t){g.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."),this.listening(t);}getHitGraphEnabled(t){return g.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."),this.listening()}toggleHitCanvas(){if(this.parent&&this.parent.content){var t=this.parent;!!this.hitCanvas._canvas.parentNode?t.content.removeChild(this.hitCanvas._canvas):t.content.appendChild(this.hitCanvas._canvas);}}}Yt.prototype.nodeType="Layer",r(Yt),w.addGetterSetter(Yt,"imageSmoothingEnabled",!0),w.addGetterSetter(Yt,"clearBeforeDraw",!0),w.addGetterSetter(Yt,"hitGraphEnabled",!0,x());class Xt extends Yt{constructor(t){super(t),this.listening(!1),g.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');}}Xt.prototype.nodeType="FastLayer",r(Xt);class jt extends J{_validateAdd(t){var e=t.getType();"Group"!==e&&"Shape"!==e&&g.throw("You may only add groups and shapes to groups.");}}jt.prototype.nodeType="Group",r(jt);var Ut=e.performance&&e.performance.now?function(){return e.performance.now()}:function(){return (new Date).getTime()};class qt{constructor(t,e){this.id=qt.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:Ut(),frameRate:0},this.func=t,this.setLayers(e);}setLayers(t){var e=[];return e=t?t.length>0?t:[t]:[],this.layers=e,this}getLayers(){return this.layers}addLayer(t){var e,i=this.layers,r=i.length;for(e=0;e<r;e++)if(i[e]._id===t._id)return !1;return this.layers.push(t),!0}isRunning(){var t,e=qt.animations,i=e.length;for(t=0;t<i;t++)if(e[t].id===this.id)return !0;return !1}start(){return this.stop(),this.frame.timeDiff=0,this.frame.lastTime=Ut(),qt._addAnimation(this),this}stop(){return qt._removeAnimation(this),this}_updateFrameObject(t){this.frame.timeDiff=t-this.frame.lastTime,this.frame.lastTime=t,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff;}static _addAnimation(t){this.animations.push(t),this._handleAnimation();}static _removeAnimation(t){var e,i=t.id,r=this.animations,a=r.length;for(e=0;e<a;e++)if(r[e].id===i){this.animations.splice(e,1);break}}static _runFrames(){var t,e,i,r,a,n,s,o,h={},l=this.animations;for(r=0;r<l.length;r++)if(e=(t=l[r]).layers,i=t.func,t._updateFrameObject(Ut()),n=e.length,!i||!1!==i.call(t,t.frame))for(a=0;a<n;a++)void 0!==(s=e[a])._id&&(h[s._id]=s);for(o in h)h.hasOwnProperty(o)&&h[o].batchDraw();}static _animationLoop(){var t=qt;t.animations.length?(t._runFrames(),g.requestAnimFrame(t._animationLoop)):t.animRunning=!1;}static _handleAnimation(){this.animRunning||(this.animRunning=!0,g.requestAnimFrame(this._animationLoop));}}qt.animations=[],qt.animIdCounter=0,qt.animRunning=!1;var Vt={node:1,duration:1,easing:1,onFinish:1,yoyo:1},Kt=0,Qt=["fill","stroke","shadowColor"];class Jt{constructor(t,e,i,r,a,n,s){this.prop=t,this.propFunc=e,this.begin=r,this._pos=r,this.duration=n,this._change=0,this.prevPos=0,this.yoyo=s,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=i,this._change=a-this.begin,this.pause();}fire(t){var e=this[t];e&&e();}setTime(t){t>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():t<0?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=t,this.update());}getTime(){return this._time}setPosition(t){this.prevPos=this._pos,this.propFunc(t),this._pos=t;}getPosition(t){return void 0===t&&(t=this._time),this.func(t,this.begin,this._change,this.duration)}play(){this.state=2,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay");}reverse(){this.state=3,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse");}seek(t){this.pause(),this._time=t,this.update(),this.fire("onSeek");}reset(){this.pause(),this._time=0,this.update(),this.fire("onReset");}finish(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish");}update(){this.setPosition(this.getPosition(this._time)),this.fire("onUpdate");}onEnterFrame(){var t=this.getTimer()-this._startTime;2===this.state?this.setTime(t):3===this.state&&this.setTime(this.duration-t);}pause(){this.state=1,this.fire("onPause");}getTimer(){return (new Date).getTime()}}class Zt{constructor(t){var e,r,a=this,n=t.node,s=n._id,o=t.easing||$t.Linear,h=!!t.yoyo;e=void 0===t.duration?.3:0===t.duration?.001:t.duration,this.node=n,this._id=Kt++;var l=n.getLayer()||(n instanceof i.Stage?n.getLayers():null);for(r in l||g.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."),this.anim=new qt((function(){a.tween.onEnterFrame();}),l),this.tween=new Jt(r,(function(t){a._tweenFunc(t);}),o,0,1,1e3*e,h),this._addListeners(),Zt.attrs[s]||(Zt.attrs[s]={}),Zt.attrs[s][this._id]||(Zt.attrs[s][this._id]={}),Zt.tweens[s]||(Zt.tweens[s]={}),t)void 0===Vt[r]&&this._addAttr(r,t[r]);this.reset(),this.onFinish=t.onFinish,this.onReset=t.onReset,this.onUpdate=t.onUpdate;}_addAttr(t,e){var i,r,a,n,s,o,h,l,d=this.node,c=d._id;if((a=Zt.tweens[c][t])&&delete Zt.attrs[c][a][t],i=d.getAttr(t),g._isArray(e))if(r=[],s=Math.max(e.length,i.length),"points"===t&&e.length!==i.length&&(e.length>i.length?(h=i,i=g._prepareArrayForTween(i,e,d.closed())):(o=e,e=g._prepareArrayForTween(e,i,d.closed()))),0===t.indexOf("fill"))for(n=0;n<s;n++)if(n%2==0)r.push(e[n]-i[n]);else {var u=g.colorToRGBA(i[n]);l=g.colorToRGBA(e[n]),i[n]=u,r.push({r:l.r-u.r,g:l.g-u.g,b:l.b-u.b,a:l.a-u.a});}else for(n=0;n<s;n++)r.push(e[n]-i[n]);else -1!==Qt.indexOf(t)?(i=g.colorToRGBA(i),r={r:(l=g.colorToRGBA(e)).r-i.r,g:l.g-i.g,b:l.b-i.b,a:l.a-i.a}):r=e-i;Zt.attrs[c][this._id][t]={start:i,diff:r,end:e,trueEnd:o,trueStart:h},Zt.tweens[c][t]=this._id;}_tweenFunc(t){var e,i,r,a,n,s,o,h,l=this.node,d=Zt.attrs[l._id][this._id];for(e in d){if(r=(i=d[e]).start,a=i.diff,h=i.end,g._isArray(r))if(n=[],o=Math.max(r.length,h.length),0===e.indexOf("fill"))for(s=0;s<o;s++)s%2==0?n.push((r[s]||0)+a[s]*t):n.push("rgba("+Math.round(r[s].r+a[s].r*t)+","+Math.round(r[s].g+a[s].g*t)+","+Math.round(r[s].b+a[s].b*t)+","+(r[s].a+a[s].a*t)+")");else for(s=0;s<o;s++)n.push((r[s]||0)+a[s]*t);else n=-1!==Qt.indexOf(e)?"rgba("+Math.round(r.r+a.r*t)+","+Math.round(r.g+a.g*t)+","+Math.round(r.b+a.b*t)+","+(r.a+a.a*t)+")":r+a*t;l.setAttr(e,n);}}_addListeners(){this.tween.onPlay=()=>{this.anim.start();},this.tween.onReverse=()=>{this.anim.start();},this.tween.onPause=()=>{this.anim.stop();},this.tween.onFinish=()=>{var t=this.node,e=Zt.attrs[t._id][this._id];e.points&&e.points.trueEnd&&t.setAttr("points",e.points.trueEnd),this.onFinish&&this.onFinish.call(this);},this.tween.onReset=()=>{var t=this.node,e=Zt.attrs[t._id][this._id];e.points&&e.points.trueStart&&t.points(e.points.trueStart),this.onReset&&this.onReset();},this.tween.onUpdate=()=>{this.onUpdate&&this.onUpdate.call(this);};}play(){return this.tween.play(),this}reverse(){return this.tween.reverse(),this}reset(){return this.tween.reset(),this}seek(t){return this.tween.seek(1e3*t),this}pause(){return this.tween.pause(),this}finish(){return this.tween.finish(),this}destroy(){var t,e=this.node._id,i=this._id,r=Zt.tweens[e];for(t in this.pause(),r)delete Zt.tweens[e][t];delete Zt.attrs[e][i];}}Zt.attrs={},Zt.tweens={},K.prototype.to=function(t){var e=t.onFinish;t.node=this,t.onFinish=function(){this.destroy(),e&&e();},new Zt(t).play();};const $t={BackEaseIn(t,e,i,r){var a=1.70158;return i*(t/=r)*t*((a+1)*t-a)+e},BackEaseOut(t,e,i,r){var a=1.70158;return i*((t=t/r-1)*t*((a+1)*t+a)+1)+e},BackEaseInOut(t,e,i,r){var a=1.70158;return (t/=r/2)<1?i/2*(t*t*((1+(a*=1.525))*t-a))+e:i/2*((t-=2)*t*((1+(a*=1.525))*t+a)+2)+e},ElasticEaseIn(t,e,i,r,a,n){var s=0;return 0===t?e:1==(t/=r)?e+i:(n||(n=.3*r),!a||a<Math.abs(i)?(a=i,s=n/4):s=n/(2*Math.PI)*Math.asin(i/a),-a*Math.pow(2,10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/n)+e)},ElasticEaseOut(t,e,i,r,a,n){var s=0;return 0===t?e:1==(t/=r)?e+i:(n||(n=.3*r),!a||a<Math.abs(i)?(a=i,s=n/4):s=n/(2*Math.PI)*Math.asin(i/a),a*Math.pow(2,-10*t)*Math.sin((t*r-s)*(2*Math.PI)/n)+i+e)},ElasticEaseInOut(t,e,i,r,a,n){var s=0;return 0===t?e:2==(t/=r/2)?e+i:(n||(n=r*(.3*1.5)),!a||a<Math.abs(i)?(a=i,s=n/4):s=n/(2*Math.PI)*Math.asin(i/a),t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/n)*-.5+e:a*Math.pow(2,-10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/n)*.5+i+e)},BounceEaseOut:(t,e,i,r)=>(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e,BounceEaseIn:(t,e,i,r)=>i-$t.BounceEaseOut(r-t,0,i,r)+e,BounceEaseInOut:(t,e,i,r)=>t<r/2?.5*$t.BounceEaseIn(2*t,0,i,r)+e:.5*$t.BounceEaseOut(2*t-r,0,i,r)+.5*i+e,EaseIn:(t,e,i,r)=>i*(t/=r)*t+e,EaseOut:(t,e,i,r)=>-i*(t/=r)*(t-2)+e,EaseInOut:(t,e,i,r)=>(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e,StrongEaseIn:(t,e,i,r)=>i*(t/=r)*t*t*t*t+e,StrongEaseOut:(t,e,i,r)=>i*((t=t/r-1)*t*t*t*t+1)+e,StrongEaseInOut:(t,e,i,r)=>(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e,Linear:(t,e,i,r)=>i*t/r+e},te=g._assign(i,{Util:g,Transform:a,Node:K,Container:J,Stage:Et,stages:Gt,Layer:Yt,FastLayer:Xt,Group:jt,DD:L,Shape:zt,shapes:Bt,Animation:qt,Tween:Zt,Easings:$t,Context:k,Canvas:G});class ee extends zt{_sceneFunc(t){var e=i.getAngle(this.angle()),r=this.clockwise();t.beginPath(),t.arc(0,0,this.outerRadius(),0,e,r),t.arc(0,0,this.innerRadius(),e,0,!r),t.closePath(),t.fillStrokeShape(this);}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2);}setHeight(t){this.outerRadius(t/2);}getSelfRect(){const t=this.innerRadius(),e=this.outerRadius(),r=this.clockwise(),a=i.getAngle(r?360-this.angle():this.angle()),n=Math.cos(Math.min(a,Math.PI)),s=Math.sin(Math.min(Math.max(Math.PI,a),3*Math.PI/2)),o=Math.sin(Math.min(a,Math.PI/2)),h=n*(n>0?t:e),l=1*e,d=s*(s>0?t:e),c=o*(o>0?e:t);return {x:Math.round(h),y:Math.round(r?-1*c:d),width:Math.round(l-h),height:Math.round(c-d)}}}function ie(t,e,i,r,a,n,s){var o=Math.sqrt(Math.pow(i-t,2)+Math.pow(r-e,2)),h=Math.sqrt(Math.pow(a-i,2)+Math.pow(n-r,2)),l=s*o/(o+h),d=s*h/(o+h);return [i-l*(a-t),r-l*(n-e),i+d*(a-t),r+d*(n-e)]}function re(t,e){var i,r,a=t.length,n=[];for(i=2;i<a-2;i+=2)r=ie(t[i-2],t[i-1],t[i],t[i+1],t[i+2],t[i+3],e),isNaN(r[0])||(n.push(r[0]),n.push(r[1]),n.push(t[i]),n.push(t[i+1]),n.push(r[2]),n.push(r[3]));return n}ee.prototype._centroid=!0,ee.prototype.className="Arc",ee.prototype._attrsAffectingSize=["innerRadius","outerRadius"],r(ee),w.addGetterSetter(ee,"innerRadius",0,p()),w.addGetterSetter(ee,"outerRadius",0,p()),w.addGetterSetter(ee,"angle",0,p()),w.addGetterSetter(ee,"clockwise",!1,x());class ae extends zt{constructor(t){super(t),this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",(function(){this._clearCache("tensionPoints");}));}_sceneFunc(t){var e,i,r,a=this.points(),n=a.length,s=this.tension(),o=this.closed(),h=this.bezier();if(n){if(t.beginPath(),t.moveTo(a[0],a[1]),0!==s&&n>4){for(i=(e=this.getTensionPoints()).length,r=o?0:4,o||t.quadraticCurveTo(e[0],e[1],e[2],e[3]);r<i-2;)t.bezierCurveTo(e[r++],e[r++],e[r++],e[r++],e[r++],e[r++]);o||t.quadraticCurveTo(e[i-2],e[i-1],a[n-2],a[n-1]);}else if(h)for(r=2;r<n;)t.bezierCurveTo(a[r++],a[r++],a[r++],a[r++],a[r++],a[r++]);else for(r=2;r<n;r+=2)t.lineTo(a[r],a[r+1]);o?(t.closePath(),t.fillStrokeShape(this)):t.strokeShape(this);}}getTensionPoints(){return this._getCache("tensionPoints",this._getTensionPoints)}_getTensionPoints(){return this.closed()?this._getTensionPointsClosed():re(this.points(),this.tension())}_getTensionPointsClosed(){var t=this.points(),e=t.length,i=this.tension(),r=ie(t[e-2],t[e-1],t[0],t[1],t[2],t[3],i),a=ie(t[e-4],t[e-3],t[e-2],t[e-1],t[0],t[1],i),n=re(t,i);return [r[2],r[3]].concat(n).concat([a[0],a[1],t[e-2],t[e-1],a[2],a[3],r[0],r[1],t[0],t[1]])}getWidth(){return this.getSelfRect().width}getHeight(){return this.getSelfRect().height}getSelfRect(){var t=this.points();if(t.length<4)return {x:t[0]||0,y:t[1]||0,width:0,height:0};for(var e,i,r=(t=0!==this.tension()?[t[0],t[1],...this._getTensionPoints(),t[t.length-2],t[t.length-1]]:this.points())[0],a=t[0],n=t[1],s=t[1],o=0;o<t.length/2;o++)e=t[2*o],i=t[2*o+1],r=Math.min(r,e),a=Math.max(a,e),n=Math.min(n,i),s=Math.max(s,i);return {x:r,y:n,width:a-r,height:s-n}}}ae.prototype.className="Line",ae.prototype._attrsAffectingSize=["points","bezier","tension"],r(ae),w.addGetterSetter(ae,"closed",!1),w.addGetterSetter(ae,"bezier",!1),w.addGetterSetter(ae,"tension",0,p()),w.addGetterSetter(ae,"points",[],function(){if(i.isUnminified)return function(t,e){return g._isArray(t)?t.forEach((function(t){g._isNumber(t)||g.warn('"'+e+'" attribute has non numeric element '+t+". Make sure that all elements are numbers.");})):g.warn(u(t)+' is a not valid value for "'+e+'" attribute. The value should be a array of numbers.'),t}}());class ne extends zt{constructor(t){super(t),this.dataArray=[],this.pathLength=0,this.dataArray=ne.parsePathData(this.data()),this.pathLength=0;for(var e=0;e<this.dataArray.length;++e)this.pathLength+=this.dataArray[e].pathLength;this.on("dataChange.konva",(function(){this.dataArray=ne.parsePathData(this.data()),this.pathLength=0;for(var t=0;t<this.dataArray.length;++t)this.pathLength+=this.dataArray[t].pathLength;}));}_sceneFunc(t){var e=this.dataArray;t.beginPath();for(var i=!1,r=0;r<e.length;r++){var a=e[r].command,n=e[r].points;switch(a){case"L":t.lineTo(n[0],n[1]);break;case"M":t.moveTo(n[0],n[1]);break;case"C":t.bezierCurveTo(n[0],n[1],n[2],n[3],n[4],n[5]);break;case"Q":t.quadraticCurveTo(n[0],n[1],n[2],n[3]);break;case"A":var s=n[0],o=n[1],h=n[2],l=n[3],d=n[4],c=n[5],g=n[6],u=n[7],f=h>l?h:l,p=h>l?1:h/l,v=h>l?l/h:1;t.translate(s,o),t.rotate(g),t.scale(p,v),t.arc(0,0,f,d,d+c,1-u),t.scale(1/p,1/v),t.rotate(-g),t.translate(-s,-o);break;case"z":i=!0,t.closePath();}}i||this.hasFill()?t.fillStrokeShape(this):t.strokeShape(this);}getSelfRect(){var t=[];this.dataArray.forEach((function(e){if("A"===e.command){var i=e.points[4],r=e.points[5],a=e.points[4]+r,n=Math.PI/180;if(Math.abs(i-a)<n&&(n=Math.abs(i-a)),r<0)for(let r=i-n;r>a;r-=n){const i=ne.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],r,0);t.push(i.x,i.y);}else for(let r=i+n;r<a;r+=n){const i=ne.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],r,0);t.push(i.x,i.y);}}else if("C"===e.command)for(let i=0;i<=1;i+=.01){const r=ne.getPointOnCubicBezier(i,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3],e.points[4],e.points[5]);t.push(r.x,r.y);}else t=t.concat(e.points);}));for(var e,i,r=t[0],a=t[0],n=t[1],s=t[1],o=0;o<t.length/2;o++)e=t[2*o],i=t[2*o+1],isNaN(e)||(r=Math.min(r,e),a=Math.max(a,e)),isNaN(i)||(n=Math.min(n,i),s=Math.max(s,i));return {x:Math.round(r),y:Math.round(n),width:Math.round(a-r),height:Math.round(s-n)}}getLength(){return this.pathLength}getPointAtLength(t){var e,i=0,r=this.dataArray.length;if(!r)return null;for(;i<r&&t>this.dataArray[i].pathLength;)t-=this.dataArray[i].pathLength,++i;if(i===r)return {x:(e=this.dataArray[i-1].points.slice(-2))[0],y:e[1]};if(t<.01)return {x:(e=this.dataArray[i].points.slice(0,2))[0],y:e[1]};var a=this.dataArray[i],n=a.points;switch(a.command){case"L":return ne.getPointOnLine(t,a.start.x,a.start.y,n[0],n[1]);case"C":return ne.getPointOnCubicBezier(t/a.pathLength,a.start.x,a.start.y,n[0],n[1],n[2],n[3],n[4],n[5]);case"Q":return ne.getPointOnQuadraticBezier(t/a.pathLength,a.start.x,a.start.y,n[0],n[1],n[2],n[3]);case"A":var s=n[0],o=n[1],h=n[2],l=n[3],d=n[4],c=n[5],g=n[6];return d+=c*t/a.pathLength,ne.getPointOnEllipticalArc(s,o,h,l,d,g)}return null}static getLineLength(t,e,i,r){return Math.sqrt((i-t)*(i-t)+(r-e)*(r-e))}static getPointOnLine(t,e,i,r,a,n,s){void 0===n&&(n=e),void 0===s&&(s=i);var o=(a-i)/(r-e+1e-8),h=Math.sqrt(t*t/(1+o*o));r<e&&(h*=-1);var l,d=o*h;if(r===e)l={x:n,y:s+d};else if((s-i)/(n-e+1e-8)===o)l={x:n+h,y:s+d};else {var c,g,u=this.getLineLength(e,i,r,a),f=(n-e)*(r-e)+(s-i)*(a-i);c=e+(f/=u*u)*(r-e),g=i+f*(a-i);var p=this.getLineLength(n,s,c,g),v=Math.sqrt(t*t-p*p);h=Math.sqrt(v*v/(1+o*o)),r<e&&(h*=-1),l={x:c+h,y:g+(d=o*h)};}return l}static getPointOnCubicBezier(t,e,i,r,a,n,s,o,h){function l(t){return t*t*t}function d(t){return 3*t*t*(1-t)}function c(t){return 3*t*(1-t)*(1-t)}function g(t){return (1-t)*(1-t)*(1-t)}return {x:o*l(t)+n*d(t)+r*c(t)+e*g(t),y:h*l(t)+s*d(t)+a*c(t)+i*g(t)}}static getPointOnQuadraticBezier(t,e,i,r,a,n,s){function o(t){return t*t}function h(t){return 2*t*(1-t)}function l(t){return (1-t)*(1-t)}return {x:n*o(t)+r*h(t)+e*l(t),y:s*o(t)+a*h(t)+i*l(t)}}static getPointOnEllipticalArc(t,e,i,r,a,n){var s=Math.cos(n),o=Math.sin(n),h=i*Math.cos(a),l=r*Math.sin(a);return {x:t+(h*s-l*o),y:e+(h*o+l*s)}}static parsePathData(t){if(!t)return [];var e=t,i=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];e=e.replace(new RegExp(" ","g"),",");for(var r=0;r<i.length;r++)e=e.replace(new RegExp(i[r],"g"),"|"+i[r]);var a,n=e.split("|"),s=[],o=[],h=0,l=0,d=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;for(r=1;r<n.length;r++){var c=n[r],g=c.charAt(0);for(c=c.slice(1),o.length=0;a=d.exec(c);)o.push(a[0]);for(var u=[],f=0,p=o.length;f<p;f++)if("00"!==o[f]){var v=parseFloat(o[f]);isNaN(v)?u.push(0):u.push(v);}else u.push(0,0);for(;u.length>0&&!isNaN(u[0]);){var m,_,y,x,b,S,w,C,P,k,T=null,A=[],M=h,G=l;switch(g){case"l":h+=u.shift(),l+=u.shift(),T="L",A.push(h,l);break;case"L":h=u.shift(),l=u.shift(),A.push(h,l);break;case"m":var E=u.shift(),R=u.shift();if(h+=E,l+=R,T="M",s.length>2&&"z"===s[s.length-1].command)for(var L=s.length-2;L>=0;L--)if("M"===s[L].command){h=s[L].points[0]+E,l=s[L].points[1]+R;break}A.push(h,l),g="l";break;case"M":h=u.shift(),l=u.shift(),T="M",A.push(h,l),g="L";break;case"h":h+=u.shift(),T="L",A.push(h,l);break;case"H":h=u.shift(),T="L",A.push(h,l);break;case"v":l+=u.shift(),T="L",A.push(h,l);break;case"V":l=u.shift(),T="L",A.push(h,l);break;case"C":A.push(u.shift(),u.shift(),u.shift(),u.shift()),h=u.shift(),l=u.shift(),A.push(h,l);break;case"c":A.push(h+u.shift(),l+u.shift(),h+u.shift(),l+u.shift()),h+=u.shift(),l+=u.shift(),T="C",A.push(h,l);break;case"S":_=h,y=l,"C"===(m=s[s.length-1]).command&&(_=h+(h-m.points[2]),y=l+(l-m.points[3])),A.push(_,y,u.shift(),u.shift()),h=u.shift(),l=u.shift(),T="C",A.push(h,l);break;case"s":_=h,y=l,"C"===(m=s[s.length-1]).command&&(_=h+(h-m.points[2]),y=l+(l-m.points[3])),A.push(_,y,h+u.shift(),l+u.shift()),h+=u.shift(),l+=u.shift(),T="C",A.push(h,l);break;case"Q":A.push(u.shift(),u.shift()),h=u.shift(),l=u.shift(),A.push(h,l);break;case"q":A.push(h+u.shift(),l+u.shift()),h+=u.shift(),l+=u.shift(),T="Q",A.push(h,l);break;case"T":_=h,y=l,"Q"===(m=s[s.length-1]).command&&(_=h+(h-m.points[0]),y=l+(l-m.points[1])),h=u.shift(),l=u.shift(),T="Q",A.push(_,y,h,l);break;case"t":_=h,y=l,"Q"===(m=s[s.length-1]).command&&(_=h+(h-m.points[0]),y=l+(l-m.points[1])),h+=u.shift(),l+=u.shift(),T="Q",A.push(_,y,h,l);break;case"A":x=u.shift(),b=u.shift(),S=u.shift(),w=u.shift(),C=u.shift(),P=h,k=l,h=u.shift(),l=u.shift(),T="A",A=this.convertEndpointToCenterParameterization(P,k,h,l,w,C,x,b,S);break;case"a":x=u.shift(),b=u.shift(),S=u.shift(),w=u.shift(),C=u.shift(),P=h,k=l,h+=u.shift(),l+=u.shift(),T="A",A=this.convertEndpointToCenterParameterization(P,k,h,l,w,C,x,b,S);}s.push({command:T||g,points:A,start:{x:M,y:G},pathLength:this.calcLength(M,G,T||g,A)});}"z"!==g&&"Z"!==g||s.push({command:"z",points:[],start:void 0,pathLength:0});}return s}static calcLength(t,e,i,r){var a,n,s,o,h=ne;switch(i){case"L":return h.getLineLength(t,e,r[0],r[1]);case"C":for(a=0,n=h.getPointOnCubicBezier(0,t,e,r[0],r[1],r[2],r[3],r[4],r[5]),o=.01;o<=1;o+=.01)s=h.getPointOnCubicBezier(o,t,e,r[0],r[1],r[2],r[3],r[4],r[5]),a+=h.getLineLength(n.x,n.y,s.x,s.y),n=s;return a;case"Q":for(a=0,n=h.getPointOnQuadraticBezier(0,t,e,r[0],r[1],r[2],r[3]),o=.01;o<=1;o+=.01)s=h.getPointOnQuadraticBezier(o,t,e,r[0],r[1],r[2],r[3]),a+=h.getLineLength(n.x,n.y,s.x,s.y),n=s;return a;case"A":a=0;var l=r[4],d=r[5],c=r[4]+d,g=Math.PI/180;if(Math.abs(l-c)<g&&(g=Math.abs(l-c)),n=h.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],l,0),d<0)for(o=l-g;o>c;o-=g)s=h.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],o,0),a+=h.getLineLength(n.x,n.y,s.x,s.y),n=s;else for(o=l+g;o<c;o+=g)s=h.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],o,0),a+=h.getLineLength(n.x,n.y,s.x,s.y),n=s;return s=h.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],c,0),a+=h.getLineLength(n.x,n.y,s.x,s.y)}return 0}static convertEndpointToCenterParameterization(t,e,i,r,a,n,s,o,h){var l=h*(Math.PI/180),d=Math.cos(l)*(t-i)/2+Math.sin(l)*(e-r)/2,c=-1*Math.sin(l)*(t-i)/2+Math.cos(l)*(e-r)/2,g=d*d/(s*s)+c*c/(o*o);g>1&&(s*=Math.sqrt(g),o*=Math.sqrt(g));var u=Math.sqrt((s*s*(o*o)-s*s*(c*c)-o*o*(d*d))/(s*s*(c*c)+o*o*(d*d)));a===n&&(u*=-1),isNaN(u)&&(u=0);var f=u*s*c/o,p=u*-o*d/s,v=(t+i)/2+Math.cos(l)*f-Math.sin(l)*p,m=(e+r)/2+Math.sin(l)*f+Math.cos(l)*p,_=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},y=function(t,e){return (t[0]*e[0]+t[1]*e[1])/(_(t)*_(e))},x=function(t,e){return (t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(y(t,e))},b=x([1,0],[(d-f)/s,(c-p)/o]),S=[(d-f)/s,(c-p)/o],w=[(-1*d-f)/s,(-1*c-p)/o],C=x(S,w);return y(S,w)<=-1&&(C=Math.PI),y(S,w)>=1&&(C=0),0===n&&C>0&&(C-=2*Math.PI),1===n&&C<0&&(C+=2*Math.PI),[v,m,s,o,b,C,l,n]}}ne.prototype.className="Path",ne.prototype._attrsAffectingSize=["data"],r(ne),w.addGetterSetter(ne,"data");class se extends ae{_sceneFunc(t){super._sceneFunc(t);var e=2*Math.PI,i=this.points(),r=i,a=0!==this.tension()&&i.length>4;a&&(r=this.getTensionPoints());var n,s,o=this.pointerLength(),h=i.length;if(a){const t=[r[r.length-4],r[r.length-3],r[r.length-2],r[r.length-1],i[h-2],i[h-1]],e=ne.calcLength(r[r.length-4],r[r.length-3],"C",t),a=ne.getPointOnQuadraticBezier(Math.min(1,1-o/e),t[0],t[1],t[2],t[3],t[4],t[5]);n=i[h-2]-a.x,s=i[h-1]-a.y;}else n=i[h-2]-i[h-4],s=i[h-1]-i[h-3];var l=(Math.atan2(s,n)+e)%e,d=this.pointerWidth();this.pointerAtEnding()&&(t.save(),t.beginPath(),t.translate(i[h-2],i[h-1]),t.rotate(l),t.moveTo(0,0),t.lineTo(-o,d/2),t.lineTo(-o,-d/2),t.closePath(),t.restore(),this.__fillStroke(t)),this.pointerAtBeginning()&&(t.save(),t.beginPath(),t.translate(i[0],i[1]),a?(n=(r[0]+r[2])/2-i[0],s=(r[1]+r[3])/2-i[1]):(n=i[2]-i[0],s=i[3]-i[1]),t.rotate((Math.atan2(-s,-n)+e)%e),t.moveTo(0,0),t.lineTo(-o,d/2),t.lineTo(-o,-d/2),t.closePath(),t.restore(),this.__fillStroke(t));}__fillStroke(t){var e=this.dashEnabled();e&&(this.attrs.dashEnabled=!1,t.setLineDash([])),t.fillStrokeShape(this),e&&(this.attrs.dashEnabled=!0);}getSelfRect(){const t=super.getSelfRect(),e=this.pointerWidth()/2;return {x:t.x-e,y:t.y-e,width:t.width+2*e,height:t.height+2*e}}}se.prototype.className="Arrow",r(se),w.addGetterSetter(se,"pointerLength",10,p()),w.addGetterSetter(se,"pointerWidth",10,p()),w.addGetterSetter(se,"pointerAtBeginning",!1),w.addGetterSetter(se,"pointerAtEnding",!0);class oe extends zt{_sceneFunc(t){t.beginPath(),t.arc(0,0,this.attrs.radius||0,0,2*Math.PI,!1),t.closePath(),t.fillStrokeShape(this);}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius()!==t/2&&this.radius(t/2);}setHeight(t){this.radius()!==t/2&&this.radius(t/2);}}oe.prototype._centroid=!0,oe.prototype.className="Circle",oe.prototype._attrsAffectingSize=["radius"],r(oe),w.addGetterSetter(oe,"radius",0,p());class he extends zt{_sceneFunc(t){var e=this.radiusX(),i=this.radiusY();t.beginPath(),t.save(),e!==i&&t.scale(1,i/e),t.arc(0,0,e,0,2*Math.PI,!1),t.restore(),t.closePath(),t.fillStrokeShape(this);}getWidth(){return 2*this.radiusX()}getHeight(){return 2*this.radiusY()}setWidth(t){this.radiusX(t/2);}setHeight(t){this.radiusY(t/2);}}he.prototype.className="Ellipse",he.prototype._centroid=!0,he.prototype._attrsAffectingSize=["radiusX","radiusY"],r(he),w.addComponentsGetterSetter(he,"radius",["x","y"]),w.addGetterSetter(he,"radiusX",0,p()),w.addGetterSetter(he,"radiusY",0,p());class le extends zt{constructor(t){super(t),this.on("imageChange.konva",(()=>{this._setImageLoad();})),this._setImageLoad();}_setImageLoad(){const t=this.image();t&&t.complete||t&&4===t.readyState||t&&t.addEventListener&&t.addEventListener("load",(()=>{this._requestDraw();}));}_useBufferCanvas(){return super._useBufferCanvas(!0)}_sceneFunc(t){const e=this.getWidth(),i=this.getHeight(),r=this.attrs.image;let a;if(r){const t=this.attrs.cropWidth,n=this.attrs.cropHeight;a=t&&n?[r,this.cropX(),this.cropY(),t,n,0,0,e,i]:[r,0,0,e,i];}(this.hasFill()||this.hasStroke())&&(t.beginPath(),t.rect(0,0,e,i),t.closePath(),t.fillStrokeShape(this)),r&&t.drawImage.apply(t,a);}_hitFunc(t){var e=this.width(),i=this.height();t.beginPath(),t.rect(0,0,e,i),t.closePath(),t.fillStrokeShape(this);}getWidth(){var t,e;return null!==(t=this.attrs.width)&&void 0!==t?t:null===(e=this.image())||void 0===e?void 0:e.width}getHeight(){var t,e;return null!==(t=this.attrs.height)&&void 0!==t?t:null===(e=this.image())||void 0===e?void 0:e.height}static fromURL(t,e,i=null){var r=g.createImageElement();r.onload=function(){var t=new le({image:r});e(t);},r.onerror=i,r.crossOrigin="Anonymous",r.src=t;}}le.prototype.className="Image",r(le),w.addGetterSetter(le,"image"),w.addComponentsGetterSetter(le,"crop",["x","y","width","height"]),w.addGetterSetter(le,"cropX",0,p()),w.addGetterSetter(le,"cropY",0,p()),w.addGetterSetter(le,"cropWidth",0,p()),w.addGetterSetter(le,"cropHeight",0,p());var de=["fontFamily","fontSize","fontStyle","padding","lineHeight","text","width","height"],ce="up",ge="right",ue="down",fe="left",pe=de.length;class ve extends jt{constructor(t){super(t),this.on("add.konva",(function(t){this._addListeners(t.child),this._sync();}));}getText(){return this.find("Text")[0]}getTag(){return this.find("Tag")[0]}_addListeners(t){var e,i=this,r=function(){i._sync();};for(e=0;e<pe;e++)t.on(de[e]+"Change.konva",r);}getWidth(){return this.getText().width()}getHeight(){return this.getText().height()}_sync(){var t,e,i,r,a,n,s,o=this.getText(),h=this.getTag();if(o&&h){switch(t=o.width(),e=o.height(),i=h.pointerDirection(),r=h.pointerWidth(),s=h.pointerHeight(),a=0,n=0,i){case ce:a=t/2,n=-1*s;break;case ge:a=t+r,n=e/2;break;case ue:a=t/2,n=e+s;break;case fe:a=-1*r,n=e/2;}h.setAttrs({x:-1*a,y:-1*n,width:t,height:e}),o.setAttrs({x:-1*a,y:-1*n});}}}ve.prototype.className="Label",r(ve);class me extends zt{_sceneFunc(t){var e=this.width(),i=this.height(),r=this.pointerDirection(),a=this.pointerWidth(),n=this.pointerHeight(),s=this.cornerRadius();let o=0,h=0,l=0,d=0;"number"==typeof s?o=h=l=d=Math.min(s,e/2,i/2):(o=Math.min(s[0]||0,e/2,i/2),h=Math.min(s[1]||0,e/2,i/2),d=Math.min(s[2]||0,e/2,i/2),l=Math.min(s[3]||0,e/2,i/2)),t.beginPath(),t.moveTo(o,0),r===ce&&(t.lineTo((e-a)/2,0),t.lineTo(e/2,-1*n),t.lineTo((e+a)/2,0)),t.lineTo(e-h,0),t.arc(e-h,h,h,3*Math.PI/2,0,!1),r===ge&&(t.lineTo(e,(i-n)/2),t.lineTo(e+a,i/2),t.lineTo(e,(i+n)/2)),t.lineTo(e,i-d),t.arc(e-d,i-d,d,0,Math.PI/2,!1),r===ue&&(t.lineTo((e+a)/2,i),t.lineTo(e/2,i+n),t.lineTo((e-a)/2,i)),t.lineTo(l,i),t.arc(l,i-l,l,Math.PI/2,Math.PI,!1),r===fe&&(t.lineTo(0,(i+n)/2),t.lineTo(-1*a,i/2),t.lineTo(0,(i-n)/2)),t.lineTo(0,o),t.arc(o,o,o,Math.PI,3*Math.PI/2,!1),t.closePath(),t.fillStrokeShape(this);}getSelfRect(){var t=0,e=0,i=this.pointerWidth(),r=this.pointerHeight(),a=this.pointerDirection(),n=this.width(),s=this.height();return a===ce?(e-=r,s+=r):a===ue?s+=r:a===fe?(t-=1.5*i,n+=i):a===ge&&(n+=1.5*i),{x:t,y:e,width:n,height:s}}}me.prototype.className="Tag",r(me),w.addGetterSetter(me,"pointerDirection","none"),w.addGetterSetter(me,"pointerWidth",0,p()),w.addGetterSetter(me,"pointerHeight",0,p()),w.addGetterSetter(me,"cornerRadius",0,v(4));class _e extends zt{_sceneFunc(t){var e=this.cornerRadius(),i=this.width(),r=this.height();if(t.beginPath(),e){let a=0,n=0,s=0,o=0;"number"==typeof e?a=n=s=o=Math.min(e,i/2,r/2):(a=Math.min(e[0]||0,i/2,r/2),n=Math.min(e[1]||0,i/2,r/2),o=Math.min(e[2]||0,i/2,r/2),s=Math.min(e[3]||0,i/2,r/2)),t.moveTo(a,0),t.lineTo(i-n,0),t.arc(i-n,n,n,3*Math.PI/2,0,!1),t.lineTo(i,r-o),t.arc(i-o,r-o,o,0,Math.PI/2,!1),t.lineTo(s,r),t.arc(s,r-s,s,Math.PI/2,Math.PI,!1),t.lineTo(0,a),t.arc(a,a,a,Math.PI,3*Math.PI/2,!1);}else t.rect(0,0,i,r);t.closePath(),t.fillStrokeShape(this);}}_e.prototype.className="Rect",r(_e),w.addGetterSetter(_e,"cornerRadius",0,v(4));class ye extends zt{_sceneFunc(t){const e=this._getPoints();t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var i=1;i<e.length;i++)t.lineTo(e[i].x,e[i].y);t.closePath(),t.fillStrokeShape(this);}_getPoints(){const t=this.attrs.sides,e=this.attrs.radius||0,i=[];for(var r=0;r<t;r++)i.push({x:e*Math.sin(2*r*Math.PI/t),y:-1*e*Math.cos(2*r*Math.PI/t)});return i}getSelfRect(){const t=this._getPoints();var e=t[0].x,i=t[0].y,r=t[0].x,a=t[0].y;return t.forEach((t=>{e=Math.min(e,t.x),i=Math.max(i,t.x),r=Math.min(r,t.y),a=Math.max(a,t.y);})),{x:e,y:r,width:i-e,height:a-r}}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius(t/2);}setHeight(t){this.radius(t/2);}}ye.prototype.className="RegularPolygon",ye.prototype._centroid=!0,ye.prototype._attrsAffectingSize=["radius"],r(ye),w.addGetterSetter(ye,"radius",0,p()),w.addGetterSetter(ye,"sides",0,p());var xe=2*Math.PI;class be extends zt{_sceneFunc(t){t.beginPath(),t.arc(0,0,this.innerRadius(),0,xe,!1),t.moveTo(this.outerRadius(),0),t.arc(0,0,this.outerRadius(),xe,0,!0),t.closePath(),t.fillStrokeShape(this);}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2);}setHeight(t){this.outerRadius(t/2);}}be.prototype.className="Ring",be.prototype._centroid=!0,be.prototype._attrsAffectingSize=["innerRadius","outerRadius"],r(be),w.addGetterSetter(be,"innerRadius",0,p()),w.addGetterSetter(be,"outerRadius",0,p());class Se extends zt{constructor(t){super(t),this._updated=!0,this.anim=new qt((()=>{var t=this._updated;return this._updated=!1,t})),this.on("animationChange.konva",(function(){this.frameIndex(0);})),this.on("frameIndexChange.konva",(function(){this._updated=!0;})),this.on("frameRateChange.konva",(function(){this.anim.isRunning()&&(clearInterval(this.interval),this._setInterval());}));}_sceneFunc(t){var e=this.animation(),i=this.frameIndex(),r=4*i,a=this.animations()[e],n=this.frameOffsets(),s=a[r+0],o=a[r+1],h=a[r+2],l=a[r+3],d=this.image();if((this.hasFill()||this.hasStroke())&&(t.beginPath(),t.rect(0,0,h,l),t.closePath(),t.fillStrokeShape(this)),d)if(n){var c=n[e],g=2*i;t.drawImage(d,s,o,h,l,c[g+0],c[g+1],h,l);}else t.drawImage(d,s,o,h,l,0,0,h,l);}_hitFunc(t){var e=this.animation(),i=this.frameIndex(),r=4*i,a=this.animations()[e],n=this.frameOffsets(),s=a[r+2],o=a[r+3];if(t.beginPath(),n){var h=n[e],l=2*i;t.rect(h[l+0],h[l+1],s,o);}else t.rect(0,0,s,o);t.closePath(),t.fillShape(this);}_useBufferCanvas(){return super._useBufferCanvas(!0)}_setInterval(){var t=this;this.interval=setInterval((function(){t._updateIndex();}),1e3/this.frameRate());}start(){if(!this.isRunning()){var t=this.getLayer();this.anim.setLayers(t),this._setInterval(),this.anim.start();}}stop(){this.anim.stop(),clearInterval(this.interval);}isRunning(){return this.anim.isRunning()}_updateIndex(){var t=this.frameIndex(),e=this.animation();t<this.animations()[e].length/4-1?this.frameIndex(t+1):this.frameIndex(0);}}Se.prototype.className="Sprite",r(Se),w.addGetterSetter(Se,"animation"),w.addGetterSetter(Se,"animations"),w.addGetterSetter(Se,"frameOffsets"),w.addGetterSetter(Se,"image"),w.addGetterSetter(Se,"frameIndex",0,p()),w.addGetterSetter(Se,"frameRate",17,p()),w.backCompat(Se,{index:"frameIndex",getIndex:"getFrameIndex",setIndex:"setFrameIndex"});class we extends zt{_sceneFunc(t){var e=this.innerRadius(),i=this.outerRadius(),r=this.numPoints();t.beginPath(),t.moveTo(0,0-i);for(var a=1;a<2*r;a++){var n=a%2==0?i:e,s=n*Math.sin(a*Math.PI/r),o=-1*n*Math.cos(a*Math.PI/r);t.lineTo(s,o);}t.closePath(),t.fillStrokeShape(this);}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2);}setHeight(t){this.outerRadius(t/2);}}function Ce(t){return Array.from(t)}we.prototype.className="Star",we.prototype._centroid=!0,we.prototype._attrsAffectingSize=["innerRadius","outerRadius"],r(we),w.addGetterSetter(we,"numPoints",5,p()),w.addGetterSetter(we,"innerRadius",0,p()),w.addGetterSetter(we,"outerRadius",0,p());var Pe,ke="auto",Te="justify",Ae="left",Me="middle",Ge="normal",Ee=" ",Re=["fontFamily","fontSize","fontStyle","fontVariant","padding","align","verticalAlign","lineHeight","text","width","height","wrap","ellipsis","letterSpacing"],Le=Re.length;function De(){return Pe||(Pe=g.createCanvasElement().getContext("2d"))}class Oe extends zt{constructor(t){super(function(t){return (t=t||{}).fillLinearGradientColorStops||t.fillRadialGradientColorStops||t.fillPatternImage||(t.fill=t.fill||"black"),t}(t)),this._partialTextX=0,this._partialTextY=0;for(var e=0;e<Le;e++)this.on(Re[e]+"Change.konva",this._setTextData);this._setTextData();}_sceneFunc(t){var e=this.textArr,i=e.length;if(this.text()){var r,a=this.padding(),n=this.fontSize(),s=this.lineHeight()*n,o=this.verticalAlign(),h=0,l=this.align(),d=this.getWidth(),c=this.letterSpacing(),g=this.fill(),u=this.textDecoration(),f=-1!==u.indexOf("underline"),p=-1!==u.indexOf("line-through"),v=0,m=(v=s/2,0),_=0;for(t.setAttr("font",this._getContextFont()),t.setAttr("textBaseline",Me),t.setAttr("textAlign",Ae),o===Me?h=(this.getHeight()-i*s-2*a)/2:"bottom"===o&&(h=this.getHeight()-i*s-2*a),t.translate(a,h+a),r=0;r<i;r++){m=0,_=0;var y,x,b,S=e[r],w=S.text,C=S.width,P=S.lastInParagraph;if(t.save(),"right"===l?m+=d-C-2*a:"center"===l&&(m+=(d-C-2*a)/2),f&&(t.save(),t.beginPath(),t.moveTo(m,v+_+Math.round(n/2)),x=0===(y=w.split(" ").length-1),b=l===Te&&P&&!x?d-2*a:C,t.lineTo(m+Math.round(b),v+_+Math.round(n/2)),t.lineWidth=n/15,t.strokeStyle=g,t.stroke(),t.restore()),p&&(t.save(),t.beginPath(),t.moveTo(m,v+_),x=0===(y=w.split(" ").length-1),b=l===Te&&P&&!x?d-2*a:C,t.lineTo(m+Math.round(b),v+_),t.lineWidth=n/15,t.strokeStyle=g,t.stroke(),t.restore()),0!==c||l===Te){y=w.split(" ").length-1;for(var k=Ce(w),T=0;T<k.length;T++){var A=k[T];" "!==A||P||l!==Te||(m+=(d-2*a-C)/y),this._partialTextX=m,this._partialTextY=v+_,this._partialText=A,t.fillStrokeShape(this),m+=this.measureSize(A).width+c;}}else this._partialTextX=m,this._partialTextY=v+_,this._partialText=w,t.fillStrokeShape(this);t.restore(),i>1&&(v+=s);}}}_hitFunc(t){var e=this.getWidth(),i=this.getHeight();t.beginPath(),t.rect(0,0,e,i),t.closePath(),t.fillStrokeShape(this);}setText(t){var e=g._isString(t)?t:null==t?"":t+"";return this._setAttr("text",e),this}getWidth(){return this.attrs.width===ke||void 0===this.attrs.width?this.getTextWidth()+2*this.padding():this.attrs.width}getHeight(){return this.attrs.height===ke||void 0===this.attrs.height?this.fontSize()*this.textArr.length*this.lineHeight()+2*this.padding():this.attrs.height}getTextWidth(){return this.textWidth}getTextHeight(){return g.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),this.textHeight}measureSize(t){var e,i=De(),r=this.fontSize();return i.save(),i.font=this._getContextFont(),e=i.measureText(t),i.restore(),{width:e.width,height:r}}_getContextFont(){return this.fontStyle()+Ee+this.fontVariant()+Ee+(this.fontSize()+"px ")+this.fontFamily().split(",").map((t=>{const e=(t=t.trim()).indexOf(" ")>=0,i=t.indexOf('"')>=0||t.indexOf("'")>=0;return e&&!i&&(t=`"${t}"`),t})).join(", ")}_addTextLine(t){this.align()===Te&&(t=t.trim());var e=this._getTextWidth(t);return this.textArr.push({text:t,width:e,lastInParagraph:!1})}_getTextWidth(t){var e=this.letterSpacing(),i=t.length;return De().measureText(t).width+(i?e*(i-1):0)}_setTextData(){var t=this.text().split("\n"),e=+this.fontSize(),i=0,r=this.lineHeight()*e,a=this.attrs.width,n=this.attrs.height,s=a!==ke&&void 0!==a,o=n!==ke&&void 0!==n,h=this.padding(),l=a-2*h,d=n-2*h,c=0,g=this.wrap(),u="none"!==g,f="char"!==g&&u,p=this.ellipsis();this.textArr=[],De().font=this._getContextFont();for(var v=p?this._getTextWidth("…"):0,m=0,_=t.length;m<_;++m){var y=t[m],x=this._getTextWidth(y);if(s&&x>l)for(;y.length>0;){for(var b=0,S=y.length,w="",C=0;b<S;){var P=b+S>>>1,k=y.slice(0,P+1),T=this._getTextWidth(k)+v;T<=l?(b=P+1,w=k,C=T):S=P;}if(!w)break;if(f){var A,M=y[w.length];(A=(M===Ee||"-"===M)&&C<=l?w.length:Math.max(w.lastIndexOf(Ee),w.lastIndexOf("-"))+1)>0&&(b=A,w=w.slice(0,b),C=this._getTextWidth(w));}if(w=w.trimRight(),this._addTextLine(w),i=Math.max(i,C),c+=r,!u||o&&c+r>d){var G=this.textArr[this.textArr.length-1];if(G)if(p)this._getTextWidth(G.text+"…")<l||(G.text=G.text.slice(0,G.text.length-3)),this.textArr.splice(this.textArr.length-1,1),this._addTextLine(G.text+"…");break}if((y=(y=y.slice(b)).trimLeft()).length>0&&(x=this._getTextWidth(y))<=l){this._addTextLine(y),c+=r,i=Math.max(i,x);break}}else this._addTextLine(y),c+=r,i=Math.max(i,x);if(o&&c+r>d)break;this.textArr[this.textArr.length-1]&&(this.textArr[this.textArr.length-1].lastInParagraph=!0);}this.textHeight=e,this.textWidth=i;}getStrokeScaleEnabled(){return !0}}Oe.prototype._fillFunc=function(t){t.fillText(this._partialText,this._partialTextX,this._partialTextY);},Oe.prototype._strokeFunc=function(t){t.strokeText(this._partialText,this._partialTextX,this._partialTextY);},Oe.prototype.className="Text",Oe.prototype._attrsAffectingSize=["text","fontSize","padding","wrap","lineHeight","letterSpacing"],r(Oe),w.overWriteSetter(Oe,"width",m()),w.overWriteSetter(Oe,"height",m()),w.addGetterSetter(Oe,"fontFamily","Arial"),w.addGetterSetter(Oe,"fontSize",12,p()),w.addGetterSetter(Oe,"fontStyle",Ge),w.addGetterSetter(Oe,"fontVariant",Ge),w.addGetterSetter(Oe,"padding",0,p()),w.addGetterSetter(Oe,"align",Ae),w.addGetterSetter(Oe,"verticalAlign","top"),w.addGetterSetter(Oe,"lineHeight",1,p()),w.addGetterSetter(Oe,"wrap","word"),w.addGetterSetter(Oe,"ellipsis",!1,x()),w.addGetterSetter(Oe,"letterSpacing",0,p()),w.addGetterSetter(Oe,"text","",_()),w.addGetterSetter(Oe,"textDecoration","");var Ie="normal";function Fe(t){t.fillText(this.partialText,0,0);}function Ne(t){t.strokeText(this.partialText,0,0);}class Be extends zt{constructor(t){super(t),this.dummyCanvas=g.createCanvasElement(),this.dataArray=[],this.dataArray=ne.parsePathData(this.attrs.data),this.on("dataChange.konva",(function(){this.dataArray=ne.parsePathData(this.attrs.data),this._setTextData();})),this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva",this._setTextData),this._setTextData();}_sceneFunc(t){t.setAttr("font",this._getContextFont()),t.setAttr("textBaseline",this.textBaseline()),t.setAttr("textAlign","left"),t.save();var e=this.textDecoration(),i=this.fill(),r=this.fontSize(),a=this.glyphInfo;"underline"===e&&t.beginPath();for(var n=0;n<a.length;n++){t.save();var s=a[n].p0;t.translate(s.x,s.y),t.rotate(a[n].rotation),this.partialText=a[n].text,t.fillStrokeShape(this),"underline"===e&&(0===n&&t.moveTo(0,r/2+1),t.lineTo(r,r/2+1)),t.restore();}"underline"===e&&(t.strokeStyle=i,t.lineWidth=r/20,t.stroke()),t.restore();}_hitFunc(t){t.beginPath();var e=this.glyphInfo;if(e.length>=1){var i=e[0].p0;t.moveTo(i.x,i.y);}for(var r=0;r<e.length;r++){var a=e[r].p1;t.lineTo(a.x,a.y);}t.setAttr("lineWidth",this.fontSize()),t.setAttr("strokeStyle",this.colorKey),t.stroke();}getTextWidth(){return this.textWidth}getTextHeight(){return g.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),this.textHeight}setText(t){return Oe.prototype.setText.call(this,t)}_getContextFont(){return Oe.prototype._getContextFont.call(this)}_getTextSize(t){var e=this.dummyCanvas.getContext("2d");e.save(),e.font=this._getContextFont();var i=e.measureText(t);return e.restore(),{width:i.width,height:parseInt(this.attrs.fontSize,10)}}_setTextData(){var t=this,e=this._getTextSize(this.attrs.text),i=this.letterSpacing(),r=this.align(),a=this.kerningFunc();this.textWidth=e.width,this.textHeight=e.height;var n=Math.max(this.textWidth+((this.attrs.text||"").length-1)*i,0);this.glyphInfo=[];for(var s=0,o=0;o<t.dataArray.length;o++)t.dataArray[o].pathLength>0&&(s+=t.dataArray[o].pathLength);var h=0;"center"===r&&(h=Math.max(0,s/2-n/2)),"right"===r&&(h=Math.max(0,s-n));for(var l,d,c,g=Ce(this.text()),u=this.text().split(" ").length-1,f=-1,p=0,v=function(){p=0;for(var e=t.dataArray,i=f+1;i<e.length;i++){if(e[i].pathLength>0)return f=i,e[i];"M"===e[i].command&&(l={x:e[i].points[0],y:e[i].points[1]});}return {}},m=function(e){var a=t._getTextSize(e).width+i;" "===e&&"justify"===r&&(a+=(s-n)/u);var o=0,h=0;for(d=void 0;Math.abs(a-o)/a>.01&&h<20;){h++;for(var g=o;void 0===c;)(c=v())&&g+c.pathLength<a&&(g+=c.pathLength,c=void 0);if(c==={}||void 0===l)return;var f=!1;switch(c.command){case"L":ne.getLineLength(l.x,l.y,c.points[0],c.points[1])>a?d=ne.getPointOnLine(a,l.x,l.y,c.points[0],c.points[1],l.x,l.y):c=void 0;break;case"A":var m=c.points[4],_=c.points[5],y=c.points[4]+_;0===p?p=m+1e-8:a>o?p+=Math.PI/180*_/Math.abs(_):p-=Math.PI/360*_/Math.abs(_),(_<0&&p<y||_>=0&&p>y)&&(p=y,f=!0),d=ne.getPointOnEllipticalArc(c.points[0],c.points[1],c.points[2],c.points[3],p,c.points[6]);break;case"C":0===p?p=a>c.pathLength?1e-8:a/c.pathLength:a>o?p+=(a-o)/c.pathLength/2:p=Math.max(p-(o-a)/c.pathLength/2,0),p>1&&(p=1,f=!0),d=ne.getPointOnCubicBezier(p,c.start.x,c.start.y,c.points[0],c.points[1],c.points[2],c.points[3],c.points[4],c.points[5]);break;case"Q":0===p?p=a/c.pathLength:a>o?p+=(a-o)/c.pathLength:p-=(o-a)/c.pathLength,p>1&&(p=1,f=!0),d=ne.getPointOnQuadraticBezier(p,c.start.x,c.start.y,c.points[0],c.points[1],c.points[2],c.points[3]);}void 0!==d&&(o=ne.getLineLength(l.x,l.y,d.x,d.y)),f&&(f=!1,c=void 0);}},_=h/(t._getTextSize("C").width+i)-1,y=0;y<_&&(m("C"),void 0!==l&&void 0!==d);y++)l=d;for(var x=0;x<g.length&&(m(g[x]),void 0!==l&&void 0!==d);x++){var b=ne.getLineLength(l.x,l.y,d.x,d.y),S=0;if(a)try{S=a(g[x-1],g[x])*this.fontSize();}catch(t){S=0;}l.x+=S,d.x+=S,this.textWidth+=S;var w=ne.getPointOnLine(S+b/2,l.x,l.y,d.x,d.y),C=Math.atan2(d.y-l.y,d.x-l.x);this.glyphInfo.push({transposeX:w.x,transposeY:w.y,text:g[x],rotation:C,p0:l,p1:d}),l=d;}}getSelfRect(){if(!this.glyphInfo.length)return {x:0,y:0,width:0,height:0};var t=[];this.glyphInfo.forEach((function(e){t.push(e.p0.x),t.push(e.p0.y),t.push(e.p1.x),t.push(e.p1.y);}));for(var e,i,r=t[0]||0,a=t[0]||0,n=t[1]||0,s=t[1]||0,o=0;o<t.length/2;o++)e=t[2*o],i=t[2*o+1],r=Math.min(r,e),a=Math.max(a,e),n=Math.min(n,i),s=Math.max(s,i);var h=this.fontSize();return {x:r-h/2,y:n-h/2,width:a-r+h,height:s-n+h}}}Be.prototype._fillFunc=Fe,Be.prototype._strokeFunc=Ne,Be.prototype._fillFuncHit=Fe,Be.prototype._strokeFuncHit=Ne,Be.prototype.className="TextPath",Be.prototype._attrsAffectingSize=["text","fontSize","data"],r(Be),w.addGetterSetter(Be,"data"),w.addGetterSetter(Be,"fontFamily","Arial"),w.addGetterSetter(Be,"fontSize",12,p()),w.addGetterSetter(Be,"fontStyle",Ie),w.addGetterSetter(Be,"align","left"),w.addGetterSetter(Be,"letterSpacing",0,p()),w.addGetterSetter(Be,"textBaseline","middle"),w.addGetterSetter(Be,"fontVariant",Ie),w.addGetterSetter(Be,"text",""),w.addGetterSetter(Be,"textDecoration",null),w.addGetterSetter(Be,"kerningFunc",null);var ze="tr-konva",We=["resizeEnabledChange","rotateAnchorOffsetChange","rotateEnabledChange","enabledAnchorsChange","anchorSizeChange","borderEnabledChange","borderStrokeChange","borderStrokeWidthChange","borderDashChange","anchorStrokeChange","anchorStrokeWidthChange","anchorFillChange","anchorCornerRadiusChange","ignoreStrokeChange"].map((t=>t+".tr-konva")).join(" "),He="nodesRect",Ye=["widthChange","heightChange","scaleXChange","scaleYChange","skewXChange","skewYChange","rotationChange","offsetXChange","offsetYChange","transformsEnabledChange","strokeWidthChange"],Xe={"top-left":-45,"top-center":0,"top-right":45,"middle-right":-90,"middle-left":90,"bottom-left":-135,"bottom-center":180,"bottom-right":135};const je="ontouchstart"in i._global;var Ue=["top-left","top-center","top-right","middle-right","middle-left","bottom-left","bottom-center","bottom-right"];function qe(t,e,i){const r=i.x+(t.x-i.x)*Math.cos(e)-(t.y-i.y)*Math.sin(e),a=i.y+(t.x-i.x)*Math.sin(e)+(t.y-i.y)*Math.cos(e);return Object.assign(Object.assign({},t),{rotation:t.rotation+e,x:r,y:a})}function Ve(t,e){const i=function(t){return {x:t.x+t.width/2*Math.cos(t.rotation)+t.height/2*Math.sin(-t.rotation),y:t.y+t.height/2*Math.cos(t.rotation)+t.width/2*Math.sin(t.rotation)}}(t);return qe(t,e,i)}class Ke extends jt{constructor(t){super(t),this._transforming=!1,this._createElements(),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this.update=this.update.bind(this),this.on(We,this.update),this.getNode()&&this.update();}attachTo(t){return this.setNode(t),this}setNode(t){return g.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."),this.setNodes([t])}getNode(){return this._nodes&&this._nodes[0]}_getEventNamespace(){return ze+this._id}setNodes(t=[]){return this._nodes&&this._nodes.length&&this.detach(),this._nodes=t,1===t.length&&this.useSingleNodeRotation()?this.rotation(t[0].getAbsoluteRotation()):this.rotation(0),this._nodes.forEach((t=>{const e=()=>{1===this.nodes().length&&this.useSingleNodeRotation()&&this.rotation(this.nodes()[0].getAbsoluteRotation()),this._resetTransformCache(),this._transforming||this.isDragging()||this.update();},i=t._attrsAffectingSize.map((t=>t+"Change."+this._getEventNamespace())).join(" ");t.on(i,e),t.on(Ye.map((t=>t+`.${this._getEventNamespace()}`)).join(" "),e),t.on(`absoluteTransformChange.${this._getEventNamespace()}`,e),this._proxyDrag(t);})),this._resetTransformCache(),!!this.findOne(".top-left")&&this.update(),this}_proxyDrag(t){let e;t.on(`dragstart.${this._getEventNamespace()}`,(i=>{e=t.getAbsolutePosition(),this.isDragging()||t===this.findOne(".back")||this.startDrag(i,!1);})),t.on(`dragmove.${this._getEventNamespace()}`,(i=>{if(!e)return;const r=t.getAbsolutePosition(),a=r.x-e.x,n=r.y-e.y;this.nodes().forEach((e=>{if(e===t)return;if(e.isDragging())return;const r=e.getAbsolutePosition();e.setAbsolutePosition({x:r.x+a,y:r.y+n}),e.startDrag(i);})),e=null;}));}getNodes(){return this._nodes||[]}getActiveAnchor(){return this._movingAnchorName}detach(){this._nodes&&this._nodes.forEach((t=>{t.off("."+this._getEventNamespace());})),this._nodes=[],this._resetTransformCache();}_resetTransformCache(){this._clearCache(He),this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform");}_getNodeRect(){return this._getCache(He,this.__getNodeRect)}__getNodeShape(t,e=this.rotation(),r){var a=t.getClientRect({skipTransform:!0,skipShadow:!0,skipStroke:this.ignoreStroke()}),n=t.getAbsoluteScale(r),s=t.getAbsolutePosition(r),o=a.x*n.x-t.offsetX()*n.x,h=a.y*n.y-t.offsetY()*n.y;const l=(i.getAngle(t.getAbsoluteRotation())+2*Math.PI)%(2*Math.PI);return qe({x:s.x+o*Math.cos(l)+h*Math.sin(-l),y:s.y+h*Math.cos(l)+o*Math.sin(l),width:a.width*n.x,height:a.height*n.y,rotation:l},-i.getAngle(e),{x:0,y:0})}__getNodeRect(){if(!this.getNode())return {x:-1e8,y:-1e8,width:0,height:0,rotation:0};const t=[];this.nodes().map((e=>{const i=e.getClientRect({skipTransform:!0,skipShadow:!0,skipStroke:this.ignoreStroke()});var r=[{x:i.x,y:i.y},{x:i.x+i.width,y:i.y},{x:i.x+i.width,y:i.y+i.height},{x:i.x,y:i.y+i.height}],a=e.getAbsoluteTransform();r.forEach((function(e){var i=a.point(e);t.push(i);}));}));const e=new a;var r,n,s,o;e.rotate(-i.getAngle(this.rotation())),t.forEach((function(t){var i=e.point(t);void 0===r&&(r=s=i.x,n=o=i.y),r=Math.min(r,i.x),n=Math.min(n,i.y),s=Math.max(s,i.x),o=Math.max(o,i.y);})),e.invert();const h=e.point({x:r,y:n});return {x:h.x,y:h.y,width:s-r,height:o-n,rotation:i.getAngle(this.rotation())}}getX(){return this._getNodeRect().x}getY(){return this._getNodeRect().y}getWidth(){return this._getNodeRect().width}getHeight(){return this._getNodeRect().height}_createElements(){this._createBack(),Ue.forEach(function(t){this._createAnchor(t);}.bind(this)),this._createAnchor("rotater");}_createAnchor(t){var e=new _e({stroke:"rgb(0, 161, 255)",fill:"white",strokeWidth:1,name:t+" _anchor",dragDistance:0,draggable:!0,hitStrokeWidth:je?10:"auto"}),r=this;e.on("mousedown touchstart",(function(t){r._handleMouseDown(t);})),e.on("dragstart",(t=>{e.stopDrag(),t.cancelBubble=!0;})),e.on("dragend",(t=>{t.cancelBubble=!0;})),e.on("mouseenter",(()=>{var r=i.getAngle(this.rotation()),a=function(t,e){if("rotater"===t)return "crosshair";e+=g.degToRad(Xe[t]||0);var i=(g.radToDeg(e)%360+360)%360;return g._inRange(i,337.5,360)||g._inRange(i,0,22.5)?"ns-resize":g._inRange(i,22.5,67.5)?"nesw-resize":g._inRange(i,67.5,112.5)?"ew-resize":g._inRange(i,112.5,157.5)?"nwse-resize":g._inRange(i,157.5,202.5)?"ns-resize":g._inRange(i,202.5,247.5)?"nesw-resize":g._inRange(i,247.5,292.5)?"ew-resize":g._inRange(i,292.5,337.5)?"nwse-resize":(g.error("Transformer has unknown angle for cursor detection: "+i),"pointer")}(t,r);e.getStage().content&&(e.getStage().content.style.cursor=a),this._cursorChange=!0;})),e.on("mouseout",(()=>{e.getStage().content&&(e.getStage().content.style.cursor=""),this._cursorChange=!1;})),this.add(e);}_createBack(){var t=new zt({name:"back",width:0,height:0,draggable:!0,sceneFunc(t){var e=this.getParent(),i=e.padding();t.beginPath(),t.rect(-i,-i,this.width()+2*i,this.height()+2*i),t.moveTo(this.width()/2,-i),e.rotateEnabled()&&t.lineTo(this.width()/2,-e.rotateAnchorOffset()*g._sign(this.height())-i),t.fillStrokeShape(this);},hitFunc:(t,e)=>{if(this.shouldOverdrawWholeArea()){var i=this.padding();t.beginPath(),t.rect(-i,-i,e.width()+2*i,e.height()+2*i),t.fillStrokeShape(e);}}});this.add(t),this._proxyDrag(t),t.on("dragstart",(t=>{t.cancelBubble=!0;})),t.on("dragmove",(t=>{t.cancelBubble=!0;})),t.on("dragend",(t=>{t.cancelBubble=!0;})),this.on("dragmove",(t=>{this.update();}));}_handleMouseDown(t){this._movingAnchorName=t.target.name().split(" ")[0];var e=this._getNodeRect(),i=e.width,r=e.height,a=Math.sqrt(Math.pow(i,2)+Math.pow(r,2));this.sin=Math.abs(r/a),this.cos=Math.abs(i/a),"undefined"!=typeof window&&(window.addEventListener("mousemove",this._handleMouseMove),window.addEventListener("touchmove",this._handleMouseMove),window.addEventListener("mouseup",this._handleMouseUp,!0),window.addEventListener("touchend",this._handleMouseUp,!0)),this._transforming=!0;var n=t.target.getAbsolutePosition(),s=t.target.getStage().getPointerPosition();this._anchorDragOffset={x:s.x-n.x,y:s.y-n.y},this._fire("transformstart",{evt:t,target:this.getNode()}),this._nodes.forEach((e=>{e._fire("transformstart",{evt:t,target:e});}));}_handleMouseMove(t){var e,r,a,n=this.findOne("."+this._movingAnchorName),s=n.getStage();s.setPointersPositions(t);const o=s.getPointerPosition();let h={x:o.x-this._anchorDragOffset.x,y:o.y-this._anchorDragOffset.y};const l=n.getAbsolutePosition();this.anchorDragBoundFunc()&&(h=this.anchorDragBoundFunc()(l,h,t)),n.setAbsolutePosition(h);const d=n.getAbsolutePosition();if(l.x!==d.x||l.y!==d.y)if("rotater"!==this._movingAnchorName){var c=this.keepRatio()||t.shiftKey,g=this.centeredScaling()||t.altKey;if("top-left"===this._movingAnchorName){if(c){var u=g?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".bottom-right").x(),y:this.findOne(".bottom-right").y()};a=Math.sqrt(Math.pow(u.x-n.x(),2)+Math.pow(u.y-n.y(),2));var f=this.findOne(".top-left").x()>u.x?-1:1,p=this.findOne(".top-left").y()>u.y?-1:1;e=a*this.cos*f,r=a*this.sin*p,this.findOne(".top-left").x(u.x-e),this.findOne(".top-left").y(u.y-r);}}else if("top-center"===this._movingAnchorName)this.findOne(".top-left").y(n.y());else if("top-right"===this._movingAnchorName){if(c){u=g?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".bottom-left").x(),y:this.findOne(".bottom-left").y()};a=Math.sqrt(Math.pow(n.x()-u.x,2)+Math.pow(u.y-n.y(),2));f=this.findOne(".top-right").x()<u.x?-1:1,p=this.findOne(".top-right").y()>u.y?-1:1;e=a*this.cos*f,r=a*this.sin*p,this.findOne(".top-right").x(u.x+e),this.findOne(".top-right").y(u.y-r);}var v=n.position();this.findOne(".top-left").y(v.y),this.findOne(".bottom-right").x(v.x);}else if("middle-left"===this._movingAnchorName)this.findOne(".top-left").x(n.x());else if("middle-right"===this._movingAnchorName)this.findOne(".bottom-right").x(n.x());else if("bottom-left"===this._movingAnchorName){if(c){u=g?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".top-right").x(),y:this.findOne(".top-right").y()};a=Math.sqrt(Math.pow(u.x-n.x(),2)+Math.pow(n.y()-u.y,2));f=u.x<n.x()?-1:1,p=n.y()<u.y?-1:1;e=a*this.cos*f,r=a*this.sin*p,n.x(u.x-e),n.y(u.y+r);}v=n.position(),this.findOne(".top-left").x(v.x),this.findOne(".bottom-right").y(v.y);}else if("bottom-center"===this._movingAnchorName)this.findOne(".bottom-right").y(n.y());else if("bottom-right"===this._movingAnchorName){if(c){u=g?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".top-left").x(),y:this.findOne(".top-left").y()};a=Math.sqrt(Math.pow(n.x()-u.x,2)+Math.pow(n.y()-u.y,2));f=this.findOne(".bottom-right").x()<u.x?-1:1,p=this.findOne(".bottom-right").y()<u.y?-1:1;e=a*this.cos*f,r=a*this.sin*p,this.findOne(".bottom-right").x(u.x+e),this.findOne(".bottom-right").y(u.y+r);}}else console.error(new Error("Wrong position argument of selection resizer: "+this._movingAnchorName));if(g=this.centeredScaling()||t.altKey){var m=this.findOne(".top-left"),_=this.findOne(".bottom-right"),y=m.x(),x=m.y(),b=this.getWidth()-_.x(),S=this.getHeight()-_.y();_.move({x:-y,y:-x}),m.move({x:b,y:S});}var w=this.findOne(".top-left").getAbsolutePosition();e=w.x,r=w.y;var C=this.findOne(".bottom-right").x()-this.findOne(".top-left").x(),P=this.findOne(".bottom-right").y()-this.findOne(".top-left").y();this._fitNodesInto({x:e,y:r,width:C,height:P,rotation:i.getAngle(this.rotation())},t);}else {var k=this._getNodeRect();e=n.x()-k.width/2,r=-n.y()+k.height/2;let a=Math.atan2(-r,e)+Math.PI/2;k.height<0&&(a-=Math.PI);const s=i.getAngle(this.rotation())+a,o=i.getAngle(this.rotationSnapTolerance()),h=function(t,e,r){let a=e;for(let n=0;n<t.length;n++){const s=i.getAngle(t[n]),o=Math.abs(s-e)%(2*Math.PI);Math.min(o,2*Math.PI-o)<r&&(a=s);}return a}(this.rotationSnaps(),s,o),l=Ve(k,h-k.rotation);this._fitNodesInto(l,t);}}_handleMouseUp(t){this._removeEvents(t);}getAbsoluteTransform(){return this.getTransform()}_removeEvents(t){if(this._transforming){this._transforming=!1,"undefined"!=typeof window&&(window.removeEventListener("mousemove",this._handleMouseMove),window.removeEventListener("touchmove",this._handleMouseMove),window.removeEventListener("mouseup",this._handleMouseUp,!0),window.removeEventListener("touchend",this._handleMouseUp,!0));var e=this.getNode();this._fire("transformend",{evt:t,target:e}),e&&this._nodes.forEach((e=>{e._fire("transformend",{evt:t,target:e});})),this._movingAnchorName=null;}}_fitNodesInto(t,e){var r=this._getNodeRect();if(g._inRange(t.width,2*-this.padding()-1,1))return void this.update();if(g._inRange(t.height,2*-this.padding()-1,1))return void this.update();const n=this.flipEnabled();var s=new a;if(s.rotate(i.getAngle(this.rotation())),this._movingAnchorName&&t.width<0&&this._movingAnchorName.indexOf("left")>=0){const e=s.point({x:2*-this.padding(),y:0});if(t.x+=e.x,t.y+=e.y,t.width+=2*this.padding(),this._movingAnchorName=this._movingAnchorName.replace("left","right"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,!n)return void this.update()}else if(this._movingAnchorName&&t.width<0&&this._movingAnchorName.indexOf("right")>=0){const e=s.point({x:2*this.padding(),y:0});if(this._movingAnchorName=this._movingAnchorName.replace("right","left"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.width+=2*this.padding(),!n)return void this.update()}if(this._movingAnchorName&&t.height<0&&this._movingAnchorName.indexOf("top")>=0){const e=s.point({x:0,y:2*-this.padding()});if(t.x+=e.x,t.y+=e.y,this._movingAnchorName=this._movingAnchorName.replace("top","bottom"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.height+=2*this.padding(),!n)return void this.update()}else if(this._movingAnchorName&&t.height<0&&this._movingAnchorName.indexOf("bottom")>=0){const e=s.point({x:0,y:2*this.padding()});if(this._movingAnchorName=this._movingAnchorName.replace("bottom","top"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.height+=2*this.padding(),!n)return void this.update()}if(this.boundBoxFunc()){const e=this.boundBoxFunc()(r,t);e?t=e:g.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");}const o=1e7,h=new a;h.translate(r.x,r.y),h.rotate(r.rotation),h.scale(r.width/o,r.height/o);const l=new a;l.translate(t.x,t.y),l.rotate(t.rotation),l.scale(t.width/o,t.height/o);const d=l.multiply(h.invert());this._nodes.forEach((t=>{var i;const r=t.getParent().getAbsoluteTransform(),n=t.getTransform().copy();n.translate(t.offsetX(),t.offsetY());const s=new a;s.multiply(r.copy().invert()).multiply(d).multiply(r).multiply(n);const o=s.decompose();t.setAttrs(o),this._fire("transform",{evt:e,target:t}),t._fire("transform",{evt:e,target:t}),null===(i=t.getLayer())||void 0===i||i.batchDraw();})),this.rotation(g._getRotation(t.rotation)),this._resetTransformCache(),this.update(),this.getLayer().batchDraw();}forceUpdate(){this._resetTransformCache(),this.update();}_batchChangeChild(t,e){this.findOne(t).setAttrs(e);}update(){var t,e=this._getNodeRect();this.rotation(g._getRotation(e.rotation));var i=e.width,r=e.height,a=this.enabledAnchors(),n=this.resizeEnabled(),s=this.padding(),o=this.anchorSize();this.find("._anchor").forEach((t=>{t.setAttrs({width:o,height:o,offsetX:o/2,offsetY:o/2,stroke:this.anchorStroke(),strokeWidth:this.anchorStrokeWidth(),fill:this.anchorFill(),cornerRadius:this.anchorCornerRadius()});})),this._batchChangeChild(".top-left",{x:0,y:0,offsetX:o/2+s,offsetY:o/2+s,visible:n&&a.indexOf("top-left")>=0}),this._batchChangeChild(".top-center",{x:i/2,y:0,offsetY:o/2+s,visible:n&&a.indexOf("top-center")>=0}),this._batchChangeChild(".top-right",{x:i,y:0,offsetX:o/2-s,offsetY:o/2+s,visible:n&&a.indexOf("top-right")>=0}),this._batchChangeChild(".middle-left",{x:0,y:r/2,offsetX:o/2+s,visible:n&&a.indexOf("middle-left")>=0}),this._batchChangeChild(".middle-right",{x:i,y:r/2,offsetX:o/2-s,visible:n&&a.indexOf("middle-right")>=0}),this._batchChangeChild(".bottom-left",{x:0,y:r,offsetX:o/2+s,offsetY:o/2-s,visible:n&&a.indexOf("bottom-left")>=0}),this._batchChangeChild(".bottom-center",{x:i/2,y:r,offsetY:o/2-s,visible:n&&a.indexOf("bottom-center")>=0}),this._batchChangeChild(".bottom-right",{x:i,y:r,offsetX:o/2-s,offsetY:o/2-s,visible:n&&a.indexOf("bottom-right")>=0}),this._batchChangeChild(".rotater",{x:i/2,y:-this.rotateAnchorOffset()*g._sign(r)-s,visible:this.rotateEnabled()}),this._batchChangeChild(".back",{width:i,height:r,visible:this.borderEnabled(),stroke:this.borderStroke(),strokeWidth:this.borderStrokeWidth(),dash:this.borderDash(),x:0,y:0}),null===(t=this.getLayer())||void 0===t||t.batchDraw();}isTransforming(){return this._transforming}stopTransform(){if(this._transforming){this._removeEvents();var t=this.findOne("."+this._movingAnchorName);t&&t.stopDrag();}}destroy(){return this.getStage()&&this._cursorChange&&this.getStage().content&&(this.getStage().content.style.cursor=""),jt.prototype.destroy.call(this),this.detach(),this._removeEvents(),this}toObject(){return K.prototype.toObject.call(this)}}Ke.prototype.className="Transformer",r(Ke),w.addGetterSetter(Ke,"enabledAnchors",Ue,(function(t){return t instanceof Array||g.warn("enabledAnchors value should be an array"),t instanceof Array&&t.forEach((function(t){-1===Ue.indexOf(t)&&g.warn("Unknown anchor name: "+t+". Available names are: "+Ue.join(", "));})),t||[]})),w.addGetterSetter(Ke,"flipEnabled",!0,x()),w.addGetterSetter(Ke,"resizeEnabled",!0),w.addGetterSetter(Ke,"anchorSize",10,p()),w.addGetterSetter(Ke,"rotateEnabled",!0),w.addGetterSetter(Ke,"rotationSnaps",[]),w.addGetterSetter(Ke,"rotateAnchorOffset",50,p()),w.addGetterSetter(Ke,"rotationSnapTolerance",5,p()),w.addGetterSetter(Ke,"borderEnabled",!0),w.addGetterSetter(Ke,"anchorStroke","rgb(0, 161, 255)"),w.addGetterSetter(Ke,"anchorStrokeWidth",1,p()),w.addGetterSetter(Ke,"anchorFill","white"),w.addGetterSetter(Ke,"anchorCornerRadius",0,p()),w.addGetterSetter(Ke,"borderStroke","rgb(0, 161, 255)"),w.addGetterSetter(Ke,"borderStrokeWidth",1,p()),w.addGetterSetter(Ke,"borderDash"),w.addGetterSetter(Ke,"keepRatio",!0),w.addGetterSetter(Ke,"centeredScaling",!1),w.addGetterSetter(Ke,"ignoreStroke",!1),w.addGetterSetter(Ke,"padding",0,p()),w.addGetterSetter(Ke,"node"),w.addGetterSetter(Ke,"nodes"),w.addGetterSetter(Ke,"boundBoxFunc"),w.addGetterSetter(Ke,"anchorDragBoundFunc"),w.addGetterSetter(Ke,"shouldOverdrawWholeArea",!1),w.addGetterSetter(Ke,"useSingleNodeRotation",!0),w.backCompat(Ke,{lineEnabled:"borderEnabled",rotateHandlerOffset:"rotateAnchorOffset",enabledHandlers:"enabledAnchors"});class Qe extends zt{_sceneFunc(t){t.beginPath(),t.arc(0,0,this.radius(),0,i.getAngle(this.angle()),this.clockwise()),t.lineTo(0,0),t.closePath(),t.fillStrokeShape(this);}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius(t/2);}setHeight(t){this.radius(t/2);}}function Je(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null;}Qe.prototype.className="Wedge",Qe.prototype._centroid=!0,Qe.prototype._attrsAffectingSize=["radius"],r(Qe),w.addGetterSetter(Qe,"radius",0,p()),w.addGetterSetter(Qe,"angle",0,p()),w.addGetterSetter(Qe,"clockwise",!1),w.backCompat(Qe,{angleDeg:"angle",getAngleDeg:"getAngle",setAngleDeg:"setAngle"});var Ze=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],$e=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];w.addGetterSetter(K,"blurRadius",0,p(),w.afterSetFilter);w.addGetterSetter(K,"brightness",0,p(),w.afterSetFilter);w.addGetterSetter(K,"contrast",0,p(),w.afterSetFilter);function ti(t,e,i,r,a){var n=i-e,s=a-r;return 0===n?r+s/2:0===s?r:s*((t-e)/n)+r}w.addGetterSetter(K,"embossStrength",.5,p(),w.afterSetFilter),w.addGetterSetter(K,"embossWhiteLevel",.5,p(),w.afterSetFilter),w.addGetterSetter(K,"embossDirection","top-left",null,w.afterSetFilter),w.addGetterSetter(K,"embossBlend",!1,null,w.afterSetFilter);w.addGetterSetter(K,"enhance",0,p(),w.afterSetFilter);w.addGetterSetter(K,"hue",0,p(),w.afterSetFilter),w.addGetterSetter(K,"saturation",0,p(),w.afterSetFilter),w.addGetterSetter(K,"luminance",0,p(),w.afterSetFilter);w.addGetterSetter(K,"hue",0,p(),w.afterSetFilter),w.addGetterSetter(K,"saturation",0,p(),w.afterSetFilter),w.addGetterSetter(K,"value",0,p(),w.afterSetFilter);function ei(t,e,i){var r=4*(i*t.width+e),a=[];return a.push(t.data[r++],t.data[r++],t.data[r++],t.data[r++]),a}function ii(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)+Math.pow(t[2]-e[2],2))}w.addGetterSetter(K,"kaleidoscopePower",2,p(),w.afterSetFilter),w.addGetterSetter(K,"kaleidoscopeAngle",0,p(),w.afterSetFilter);w.addGetterSetter(K,"threshold",0,p(),w.afterSetFilter);w.addGetterSetter(K,"noise",.2,p(),w.afterSetFilter);w.addGetterSetter(K,"pixelSize",8,p(),w.afterSetFilter);w.addGetterSetter(K,"levels",.5,p(),w.afterSetFilter);w.addGetterSetter(K,"red",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),w.addGetterSetter(K,"green",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),w.addGetterSetter(K,"blue",0,f,w.afterSetFilter);w.addGetterSetter(K,"red",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),w.addGetterSetter(K,"green",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),w.addGetterSetter(K,"blue",0,f,w.afterSetFilter),w.addGetterSetter(K,"alpha",1,(function(t){return this._filterUpToDate=!1,t>1?1:t<0?0:t}));w.addGetterSetter(K,"threshold",.5,p(),w.afterSetFilter);return te.Util._assign(te,{Arc:ee,Arrow:se,Circle:oe,Ellipse:he,Image:le,Label:ve,Tag:me,Line:ae,Path:ne,Rect:_e,RegularPolygon:ye,Ring:be,Sprite:Se,Star:we,Text:Oe,TextPath:Be,Transformer:Ke,Wedge:Qe,Filters:{Blur:function(t){var e=Math.round(this.blurRadius());e>0&&function(t,e){var i,r,a,n,s,o,h,l,d,c,g,u,f,p,v,m,_,y,x,b,S,w,C,P,k=t.data,T=t.width,A=t.height,M=e+e+1,G=T-1,E=A-1,R=e+1,L=R*(R+1)/2,D=new Je,O=null,I=D,F=null,N=null,B=Ze[e],z=$e[e];for(a=1;a<M;a++)I=I.next=new Je,a===R&&(O=I);for(I.next=D,h=o=0,r=0;r<A;r++){for(m=_=y=x=l=d=c=g=0,u=R*(b=k[o]),f=R*(S=k[o+1]),p=R*(w=k[o+2]),v=R*(C=k[o+3]),l+=L*b,d+=L*S,c+=L*w,g+=L*C,I=D,a=0;a<R;a++)I.r=b,I.g=S,I.b=w,I.a=C,I=I.next;for(a=1;a<R;a++)n=o+((G<a?G:a)<<2),l+=(I.r=b=k[n])*(P=R-a),d+=(I.g=S=k[n+1])*P,c+=(I.b=w=k[n+2])*P,g+=(I.a=C=k[n+3])*P,m+=b,_+=S,y+=w,x+=C,I=I.next;for(F=D,N=O,i=0;i<T;i++)k[o+3]=C=g*B>>z,0!==C?(C=255/C,k[o]=(l*B>>z)*C,k[o+1]=(d*B>>z)*C,k[o+2]=(c*B>>z)*C):k[o]=k[o+1]=k[o+2]=0,l-=u,d-=f,c-=p,g-=v,u-=F.r,f-=F.g,p-=F.b,v-=F.a,n=h+((n=i+e+1)<G?n:G)<<2,l+=m+=F.r=k[n],d+=_+=F.g=k[n+1],c+=y+=F.b=k[n+2],g+=x+=F.a=k[n+3],F=F.next,u+=b=N.r,f+=S=N.g,p+=w=N.b,v+=C=N.a,m-=b,_-=S,y-=w,x-=C,N=N.next,o+=4;h+=T;}for(i=0;i<T;i++){for(_=y=x=m=d=c=g=l=0,u=R*(b=k[o=i<<2]),f=R*(S=k[o+1]),p=R*(w=k[o+2]),v=R*(C=k[o+3]),l+=L*b,d+=L*S,c+=L*w,g+=L*C,I=D,a=0;a<R;a++)I.r=b,I.g=S,I.b=w,I.a=C,I=I.next;for(s=T,a=1;a<=e;a++)o=s+i<<2,l+=(I.r=b=k[o])*(P=R-a),d+=(I.g=S=k[o+1])*P,c+=(I.b=w=k[o+2])*P,g+=(I.a=C=k[o+3])*P,m+=b,_+=S,y+=w,x+=C,I=I.next,a<E&&(s+=T);for(o=i,F=D,N=O,r=0;r<A;r++)k[3+(n=o<<2)]=C=g*B>>z,C>0?(C=255/C,k[n]=(l*B>>z)*C,k[n+1]=(d*B>>z)*C,k[n+2]=(c*B>>z)*C):k[n]=k[n+1]=k[n+2]=0,l-=u,d-=f,c-=p,g-=v,u-=F.r,f-=F.g,p-=F.b,v-=F.a,n=i+((n=r+R)<E?n:E)*T<<2,l+=m+=F.r=k[n],d+=_+=F.g=k[n+1],c+=y+=F.b=k[n+2],g+=x+=F.a=k[n+3],F=F.next,u+=b=N.r,f+=S=N.g,p+=w=N.b,v+=C=N.a,m-=b,_-=S,y-=w,x-=C,N=N.next,o+=T;}}(t,e);},Brighten:function(t){var e,i=255*this.brightness(),r=t.data,a=r.length;for(e=0;e<a;e+=4)r[e]+=i,r[e+1]+=i,r[e+2]+=i;},Contrast:function(t){var e,i=Math.pow((this.contrast()+100)/100,2),r=t.data,a=r.length,n=150,s=150,o=150;for(e=0;e<a;e+=4)n=r[e],s=r[e+1],o=r[e+2],n/=255,n-=.5,n*=i,n+=.5,s/=255,s-=.5,s*=i,s+=.5,o/=255,o-=.5,o*=i,o+=.5,n=(n*=255)<0?0:n>255?255:n,s=(s*=255)<0?0:s>255?255:s,o=(o*=255)<0?0:o>255?255:o,r[e]=n,r[e+1]=s,r[e+2]=o;},Emboss:function(t){var e=10*this.embossStrength(),i=255*this.embossWhiteLevel(),r=this.embossDirection(),a=this.embossBlend(),n=0,s=0,o=t.data,h=t.width,l=t.height,d=4*h,c=l;switch(r){case"top-left":n=-1,s=-1;break;case"top":n=-1,s=0;break;case"top-right":n=-1,s=1;break;case"right":n=0,s=1;break;case"bottom-right":n=1,s=1;break;case"bottom":n=1,s=0;break;case"bottom-left":n=1,s=-1;break;case"left":n=0,s=-1;break;default:g.error("Unknown emboss direction: "+r);}do{var u=(c-1)*d,f=n;c+f<1&&(f=0),c+f>l&&(f=0);var p=(c-1+f)*h*4,v=h;do{var m=u+4*(v-1),_=s;v+_<1&&(_=0),v+_>h&&(_=0);var y=p+4*(v-1+_),x=o[m]-o[y],b=o[m+1]-o[y+1],S=o[m+2]-o[y+2],w=x,C=w>0?w:-w;if((b>0?b:-b)>C&&(w=b),(S>0?S:-S)>C&&(w=S),w*=e,a){var P=o[m]+w,k=o[m+1]+w,T=o[m+2]+w;o[m]=P>255?255:P<0?0:P,o[m+1]=k>255?255:k<0?0:k,o[m+2]=T>255?255:T<0?0:T;}else {var A=i-w;A<0?A=0:A>255&&(A=255),o[m]=o[m+1]=o[m+2]=A;}}while(--v)}while(--c)},Enhance:function(t){var e,i,r,a,n=t.data,s=n.length,o=n[0],h=o,l=n[1],d=l,c=n[2],g=c,u=this.enhance();if(0!==u){for(a=0;a<s;a+=4)(e=n[a+0])<o?o=e:e>h&&(h=e),(i=n[a+1])<l?l=i:i>d&&(d=i),(r=n[a+2])<c?c=r:r>g&&(g=r);var f,p,v,m,_,y,x,b,S;for(h===o&&(h=255,o=0),d===l&&(d=255,l=0),g===c&&(g=255,c=0),u>0?(p=h+u*(255-h),v=o-u*(o-0),_=d+u*(255-d),y=l-u*(l-0),b=g+u*(255-g),S=c-u*(c-0)):(p=h+u*(h-(f=.5*(h+o))),v=o+u*(o-f),_=d+u*(d-(m=.5*(d+l))),y=l+u*(l-m),b=g+u*(g-(x=.5*(g+c))),S=c+u*(c-x)),a=0;a<s;a+=4)n[a+0]=ti(n[a+0],o,h,v,p),n[a+1]=ti(n[a+1],l,d,y,_),n[a+2]=ti(n[a+2],c,g,S,b);}},Grayscale:function(t){var e,i,r=t.data,a=r.length;for(e=0;e<a;e+=4)i=.34*r[e]+.5*r[e+1]+.16*r[e+2],r[e]=i,r[e+1]=i,r[e+2]=i;},HSL:function(t){var e,i,r,a,n,s=t.data,o=s.length,h=Math.pow(2,this.saturation()),l=Math.abs(this.hue()+360)%360,d=127*this.luminance(),c=1*h*Math.cos(l*Math.PI/180),g=1*h*Math.sin(l*Math.PI/180),u=.299+.701*c+.167*g,f=.587-.587*c+.33*g,p=.114-.114*c-.497*g,v=.299-.299*c-.328*g,m=.587+.413*c+.035*g,_=.114-.114*c+.293*g,y=.299-.3*c+1.25*g,x=.587-.586*c-1.05*g,b=.114+.886*c-.2*g;for(e=0;e<o;e+=4)i=s[e+0],r=s[e+1],a=s[e+2],n=s[e+3],s[e+0]=u*i+f*r+p*a+d,s[e+1]=v*i+m*r+_*a+d,s[e+2]=y*i+x*r+b*a+d,s[e+3]=n;},HSV:function(t){var e,i,r,a,n,s=t.data,o=s.length,h=Math.pow(2,this.value()),l=Math.pow(2,this.saturation()),d=Math.abs(this.hue()+360)%360,c=h*l*Math.cos(d*Math.PI/180),g=h*l*Math.sin(d*Math.PI/180),u=.299*h+.701*c+.167*g,f=.587*h-.587*c+.33*g,p=.114*h-.114*c-.497*g,v=.299*h-.299*c-.328*g,m=.587*h+.413*c+.035*g,_=.114*h-.114*c+.293*g,y=.299*h-.3*c+1.25*g,x=.587*h-.586*c-1.05*g,b=.114*h+.886*c-.2*g;for(e=0;e<o;e+=4)i=s[e+0],r=s[e+1],a=s[e+2],n=s[e+3],s[e+0]=u*i+f*r+p*a,s[e+1]=v*i+m*r+_*a,s[e+2]=y*i+x*r+b*a,s[e+3]=n;},Invert:function(t){var e,i=t.data,r=i.length;for(e=0;e<r;e+=4)i[e]=255-i[e],i[e+1]=255-i[e+1],i[e+2]=255-i[e+2];},Kaleidoscope:function(t){var e,i,r,a,n,s,o,h,l,d=t.width,c=t.height,u=Math.round(this.kaleidoscopePower()),f=Math.round(this.kaleidoscopeAngle()),p=Math.floor(d*(f%360)/360);if(!(u<1)){var v=g.createCanvasElement();v.width=d,v.height=c;var m=v.getContext("2d").getImageData(0,0,d,c);!function(t,e,i){var r,a,n,s,o=t.data,h=e.data,l=t.width,d=t.height,c=i.polarCenterX||l/2,g=i.polarCenterY||d/2,u=0,f=0,p=0,v=0,m=Math.sqrt(c*c+g*g);a=l-c,n=d-g,m=(s=Math.sqrt(a*a+n*n))>m?s:m;var _,y,x,b,S=d,w=l,C=360/w*Math.PI/180;for(y=0;y<w;y+=1)for(x=Math.sin(y*C),b=Math.cos(y*C),_=0;_<S;_+=1)a=Math.floor(c+m*_/S*b),u=o[0+(r=4*((n=Math.floor(g+m*_/S*x))*l+a))],f=o[r+1],p=o[r+2],v=o[r+3],h[0+(r=4*(y+_*l))]=u,h[r+1]=f,h[r+2]=p,h[r+3]=v;}(t,m,{polarCenterX:d/2,polarCenterY:c/2});for(var _=d/Math.pow(2,u);_<=8;)_*=2,u-=1;var y=_=Math.ceil(_),x=0,b=y,S=1;for(p+_>d&&(x=y,b=0,S=-1),i=0;i<c;i+=1)for(e=x;e!==b;e+=S)h=4*(d*i+Math.round(e+p)%d),a=m.data[h+0],n=m.data[h+1],s=m.data[h+2],o=m.data[h+3],l=4*(d*i+e),m.data[l+0]=a,m.data[l+1]=n,m.data[l+2]=s,m.data[l+3]=o;for(i=0;i<c;i+=1)for(y=Math.floor(_),r=0;r<u;r+=1){for(e=0;e<y+1;e+=1)h=4*(d*i+e),a=m.data[h+0],n=m.data[h+1],s=m.data[h+2],o=m.data[h+3],l=4*(d*i+2*y-e-1),m.data[l+0]=a,m.data[l+1]=n,m.data[l+2]=s,m.data[l+3]=o;y*=2;}!function(t,e,i){var r,a,n,s,o,h,l=t.data,d=e.data,c=t.width,g=t.height,u=i.polarCenterX||c/2,f=i.polarCenterY||g/2,p=0,v=0,m=0,_=0,y=Math.sqrt(u*u+f*f);a=c-u,n=g-f,y=(h=Math.sqrt(a*a+n*n))>y?h:y;var x,b,S,w=g,C=c,P=i.polarRotation||0;for(a=0;a<c;a+=1)for(n=0;n<g;n+=1)s=a-u,o=n-f,x=Math.sqrt(s*s+o*o)*w/y,b=(b=(180*Math.atan2(o,s)/Math.PI+360+P)%360)*C/360,S=Math.floor(b),p=l[0+(r=4*(Math.floor(x)*c+S))],v=l[r+1],m=l[r+2],_=l[r+3],d[0+(r=4*(n*c+a))]=p,d[r+1]=v,d[r+2]=m,d[r+3]=_;}(m,t,{polarRotation:0});}},Mask:function(t){var e=function(t,e){var i=ei(t,0,0),r=ei(t,t.width-1,0),a=ei(t,0,t.height-1),n=ei(t,t.width-1,t.height-1),s=e||10;if(ii(i,r)<s&&ii(r,n)<s&&ii(n,a)<s&&ii(a,i)<s){for(var o=function(t){for(var e=[0,0,0],i=0;i<t.length;i++)e[0]+=t[i][0],e[1]+=t[i][1],e[2]+=t[i][2];return e[0]/=t.length,e[1]/=t.length,e[2]/=t.length,e}([r,i,n,a]),h=[],l=0;l<t.width*t.height;l++){var d=ii(o,[t.data[4*l],t.data[4*l+1],t.data[4*l+2]]);h[l]=d<s?0:255;}return h}}(t,this.threshold());return e&&function(t,e){for(var i=0;i<t.width*t.height;i++)t.data[4*i+3]=e[i];}(t,e=function(t,e,i){for(var r=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],a=Math.round(Math.sqrt(r.length)),n=Math.floor(a/2),s=[],o=0;o<i;o++)for(var h=0;h<e;h++){for(var l=o*e+h,d=0,c=0;c<a;c++)for(var g=0;g<a;g++){var u=o+c-n,f=h+g-n;if(u>=0&&u<i&&f>=0&&f<e){var p=r[c*a+g];d+=t[u*e+f]*p;}}s[l]=d;}return s}(e=function(t,e,i){for(var r=[1,1,1,1,1,1,1,1,1],a=Math.round(Math.sqrt(r.length)),n=Math.floor(a/2),s=[],o=0;o<i;o++)for(var h=0;h<e;h++){for(var l=o*e+h,d=0,c=0;c<a;c++)for(var g=0;g<a;g++){var u=o+c-n,f=h+g-n;if(u>=0&&u<i&&f>=0&&f<e){var p=r[c*a+g];d+=t[u*e+f]*p;}}s[l]=d>=1020?255:0;}return s}(e=function(t,e,i){for(var r=[1,1,1,1,0,1,1,1,1],a=Math.round(Math.sqrt(r.length)),n=Math.floor(a/2),s=[],o=0;o<i;o++)for(var h=0;h<e;h++){for(var l=o*e+h,d=0,c=0;c<a;c++)for(var g=0;g<a;g++){var u=o+c-n,f=h+g-n;if(u>=0&&u<i&&f>=0&&f<e){var p=r[c*a+g];d+=t[u*e+f]*p;}}s[l]=2040===d?255:0;}return s}(e,t.width,t.height),t.width,t.height),t.width,t.height)),t},Noise:function(t){var e,i=255*this.noise(),r=t.data,a=r.length,n=i/2;for(e=0;e<a;e+=4)r[e+0]+=n-2*n*Math.random(),r[e+1]+=n-2*n*Math.random(),r[e+2]+=n-2*n*Math.random();},Pixelate:function(t){var e,i,r,a,n,s,o,h,l,d,c,u,f,p,v=Math.ceil(this.pixelSize()),m=t.width,_=t.height,y=Math.ceil(m/v),x=Math.ceil(_/v),b=t.data;if(v<=0)g.error("pixelSize value can not be <= 0");else for(u=0;u<y;u+=1)for(f=0;f<x;f+=1){for(a=0,n=0,s=0,o=0,l=(h=u*v)+v,c=(d=f*v)+v,p=0,e=h;e<l;e+=1)if(!(e>=m))for(i=d;i<c;i+=1)i>=_||(a+=b[(r=4*(m*i+e))+0],n+=b[r+1],s+=b[r+2],o+=b[r+3],p+=1);for(a/=p,n/=p,s/=p,o/=p,e=h;e<l;e+=1)if(!(e>=m))for(i=d;i<c;i+=1)i>=_||(b[(r=4*(m*i+e))+0]=a,b[r+1]=n,b[r+2]=s,b[r+3]=o);}},Posterize:function(t){var e,i=Math.round(254*this.levels())+1,r=t.data,a=r.length,n=255/i;for(e=0;e<a;e+=1)r[e]=Math.floor(r[e]/n)*n;},RGB:function(t){var e,i,r=t.data,a=r.length,n=this.red(),s=this.green(),o=this.blue();for(e=0;e<a;e+=4)i=(.34*r[e]+.5*r[e+1]+.16*r[e+2])/255,r[e]=i*n,r[e+1]=i*s,r[e+2]=i*o,r[e+3]=r[e+3];},RGBA:function(t){var e,i,r=t.data,a=r.length,n=this.red(),s=this.green(),o=this.blue(),h=this.alpha();for(e=0;e<a;e+=4)i=1-h,r[e]=n*h+r[e]*i,r[e+1]=s*h+r[e+1]*i,r[e+2]=o*h+r[e+2]*i;},Sepia:function(t){var e,i,r,a,n=t.data,s=n.length;for(e=0;e<s;e+=4)i=n[e+0],r=n[e+1],a=n[e+2],n[e+0]=Math.min(255,.393*i+.769*r+.189*a),n[e+1]=Math.min(255,.349*i+.686*r+.168*a),n[e+2]=Math.min(255,.272*i+.534*r+.131*a);},Solarize:function(t){var e=t.data,i=t.width,r=4*i,a=t.height;do{var n=(a-1)*r,s=i;do{var o=n+4*(s-1),h=e[o],l=e[o+1],d=e[o+2];h>127&&(h=255-h),l>127&&(l=255-l),d>127&&(d=255-d),e[o]=h,e[o+1]=l,e[o+2]=d;}while(--s)}while(--a)},Threshold:function(t){var e,i=255*this.threshold(),r=t.data,a=r.length;for(e=0;e<a;e+=1)r[e]=r[e]<i?0:255;}}})}));
	});

	/*
	 * @Author: wjz
	 * @Date: 2021-10-22 16:20:15
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-04-12 10:31:50
	 * @FilePath: /kmaps/src/_util.ts
	 */
	/*
	 * @description 鼠标滚轮结束事件
	 * @param {Object} target 响应目标
	 * @param {Object} callBack 事件结束回调
	 */
	function wheelEvent(target, callBack) {
	    let st = null;
	    target.addEventListener('wheel', function (e) {
	        Reflect.defineProperty(e, "type", {
	            value: "wheelmove",
	            enumerable: false,
	            configurable: false,
	            writable: true,
	        });
	        callBack(e);
	        clearTimeout(st);
	        st = null;
	        st = setTimeout(() => {
	            Reflect.defineProperty(e, "type", {
	                value: "wheelend",
	                enumerable: false,
	                configurable: false,
	                writable: true,
	            });
	            callBack(e);
	        }, 50);
	    });
	}
	//  hex 转rgb
	function colorHextoRGBA(sHex, alpha = 1) {
	    // 十六进制颜色值的正则表达式
	    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	    /* 16进制颜色转为RGB格式 */
	    let sColor = sHex.toLowerCase();
	    if (sColor && reg.test(sColor)) {
	        if (sColor.length === 4) {
	            var sColorNew = '#';
	            for (let i = 1; i < 4; i += 1) {
	                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
	            }
	            sColor = sColorNew;
	        }
	        //  处理六位的颜色值
	        var sColorChange = [];
	        for (let i = 1; i < 7; i += 2) {
	            sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
	        }
	        // return sColorChange.join(',')
	        // 或
	        return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
	    }
	    else {
	        return sColor;
	    }
	}
	//rgb 转数组
	function rgbaToArray(color) {
	    let rgb = colorHextoRGBA(color);
	    let rgbArr = rgb.split(',').map((item) => Number(item.replace(/[^0-9]+/g, '')));
	    // console.log(rgbArr);
	    // let colorStr = new RegExp(/(?<=\()\S+(?=\))/).exec(color); //校验是否为颜色值 此方式不兼容某些移动端
	    // console.log(colorStr);
	    // if (colorStr) {
	    //   ret = colorStr[0].split(",");
	    //   ret.map(item => {
	    //     return Number.parseFloat(item);
	    //   });
	    // }
	    // if (normalized) {
	    // 	ret = ret.map(item => {
	    // 		return (item = +item / 255);
	    // 	});
	    // }
	    return rgbArr;
	}
	//二维数组转一维
	function arrayConvert(arr) {
	    let points = [];
	    for (let item of arr) {
	        points.push(item[0], item[1]);
	    }
	    return points;
	}
	/**
	 * @description 拖拽点吸附
	 * @param target 检测目标(当前识别的目标)
	 * @param layer 可选参数 碰撞检测图层，默认为Stage(搜索全局可拖拽锚点)
	 */
	function adsorb(target, layer) {
	    let targetAnchor = target.find("._drag_anchor"); //当前正在编辑的图形节点内的拖拽锚点
	    for (let item of targetAnchor) {
	        item.off('dragend'); //先解除绑定事件防止重复绑定
	        item.on('dragend', function (e) {
	            e.cancelBubble = true;
	            let ta = target.find("._drag_anchor"); //当前正在编辑的图形节点内的拖拽锚点
	            let layerAnchor = layer.find("._drag_anchor");
	            // for (let t of targetAnchor) {
	            //   let index = layerAnchor.indexOf(t)
	            //   layerAnchor.splice(index,1)
	            // }
	            let tarRect = this.getClientRect();
	            for (let ar of layerAnchor) {
	                if (ar == this)
	                    continue;
	                if (haveIntersection(ar.getClientRect(), tarRect)) { //进入目标碰撞监测范围
	                    if (this.getParent() == ar.getParent()) { //图形自身锚点
	                        if (ta.length <= 2) {
	                            return;
	                        }
	                        // if(ta.indexOf(this) !== 0 && ta.indexOf(this) !== (ta.length-1)){
	                        if (ta.indexOf(this) > 0 && ta.indexOf(this) < ta.length - 1) {
	                            return;
	                        }
	                        if (ta.indexOf(ar) !== 0 && ta.indexOf(ar) !== ta.length - 1) {
	                            return;
	                        }
	                        if (this.getParent().attrs.closed) {
	                            return;
	                        }
	                    }
	                    let arPos = ar.getAbsolutePosition(ar.getParent().getParent());
	                    let node = this.getParent(); //获取父级图组  富信息图形节点
	                    let line = node.findOne('._line'); //线图形、主图
	                    let anchor = node.find('._drag_anchor');
	                    let pts = [];
	                    anchor.forEach((item, index, arr) => {
	                        if (item == this) {
	                            //当前锚点与目标锚点一致时
	                            var { x, y } = arPos;
	                        }
	                        else {
	                            //当前锚点与目标锚点不一致时获取相对地图的绝对坐标位置
	                            var { x, y } = item.getAbsolutePosition(node.getParent()); //获取图形节点相对于父级图组（图片的绝对位置）
	                            pts.push(x, y);
	                        }
	                        pts.push(x, y);
	                        item.position({ x, y }); //重置两个锚点为绝对位置
	                    });
	                    line.points(pts); //绘制图形
	                    node.position({ x: 0, y: 0 }); //重置图组节点坐标为初始状态
	                }
	            }
	        });
	    }
	    //包围盒碰撞判定 缩小包围盒碰撞范围 / 4 缩小4倍
	    function haveIntersection(r1, r2, scope = 2) {
	        return !(r2.x > r1.x + (r1.width / scope) ||
	            r2.x + (r2.width / scope) < r1.x ||
	            r2.y > r1.y + (r1.height / scope) ||
	            r2.y + (r2.height / scope) < r1.y);
	    }
	}

	var hammerKonva = createCommonjsModule(function (module) {
	/*! This is slightly modified version of hammer library to make it work with Konva framework
	 * Modified by Anton Lavrenov.
	 * Original code:
	 * Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 * that version is slightly modified by Anton Lavrenov
	 * to make it work with Konva framework
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined$1) {

	  var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	  var TEST_ELEMENT = document.createElement('div');

	  var TYPE_FUNCTION = 'function';

	  var round = Math.round;
	  var abs = Math.abs;
	  var now = Date.now;

	  /**
	   * set a timeout with a given scope
	   * @param {Function} fn
	   * @param {Number} timeout
	   * @param {Object} context
	   * @returns {number}
	   */
	  function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	  }

	  /**
	   * if the argument is an array, we want to execute the fn on each entry
	   * if it aint an array we don't want to do a thing.
	   * this is used by all the methods that accept a single and array argument.
	   * @param {*|Array} arg
	   * @param {String} fn
	   * @param {Object} [context]
	   * @returns {Boolean}
	   */
	  function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	      each(arg, context[fn], context);
	      return true;
	    }
	    return false;
	  }

	  /**
	   * walk objects and arrays
	   * @param {Object} obj
	   * @param {Function} iterator
	   * @param {Object} context
	   */
	  function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	      return;
	    }

	    if (obj.forEach) {
	      obj.forEach(iterator, context);
	    } else if (obj.length !== undefined$1) {
	      i = 0;
	      while (i < obj.length) {
	        iterator.call(context, obj[i], i, obj);
	        i++;
	      }
	    } else {
	      for (i in obj) {
	        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	      }
	    }
	  }

	  /**
	   * wrap a method with a deprecation warning and stack trace
	   * @param {Function} method
	   * @param {String} name
	   * @param {String} message
	   * @returns {Function} A new function wrapping the supplied method.
	   */
	  function deprecate(method, name, message) {
	    var deprecationMessage =
	      'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	      var e = new Error('get-stack-trace');
	      var stack =
	        e && e.stack
	          ? e.stack
	              .replace(/^[^\(]+?[\n$]/gm, '')
	              .replace(/^\s+at\s+/gm, '')
	              .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
	          : 'Unknown Stack Trace';

	      var log = window.console && (window.console.warn || window.console.log);
	      if (log) {
	        log.call(window.console, deprecationMessage, stack);
	      }
	      return method.apply(this, arguments);
	    };
	  }

	  /**
	   * extend object.
	   * means that properties in dest will be overwritten by the ones in src.
	   * @param {Object} target
	   * @param {...Object} objects_to_assign
	   * @returns {Object} target
	   */
	  var assign;
	  if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	      if (target === undefined$1 || target === null) {
	        throw new TypeError('Cannot convert undefined or null to object');
	      }

	      var output = Object(target);
	      for (var index = 1; index < arguments.length; index++) {
	        var source = arguments[index];
	        if (source !== undefined$1 && source !== null) {
	          for (var nextKey in source) {
	            if (source.hasOwnProperty(nextKey)) {
	              output[nextKey] = source[nextKey];
	            }
	          }
	        }
	      }
	      return output;
	    };
	  } else {
	    assign = Object.assign;
	  }

	  /**
	   * extend object.
	   * means that properties in dest will be overwritten by the ones in src.
	   * @param {Object} dest
	   * @param {Object} src
	   * @param {Boolean} [merge=false]
	   * @returns {Object} dest
	   */
	  var extend = deprecate(
	    function extend(dest, src, merge) {
	      var keys = Object.keys(src);
	      var i = 0;
	      while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined$1)) {
	          dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	      }
	      return dest;
	    },
	    'extend',
	    'Use `assign`.'
	  );

	  /**
	   * merge the values from src in the dest.
	   * means that properties that exist in dest will not be overwritten by src
	   * @param {Object} dest
	   * @param {Object} src
	   * @returns {Object} dest
	   */
	  var merge = deprecate(
	    function merge(dest, src) {
	      return extend(dest, src, true);
	    },
	    'merge',
	    'Use `assign`.'
	  );

	  /**
	   * simple class inheritance
	   * @param {Function} child
	   * @param {Function} base
	   * @param {Object} [properties]
	   */
	  function inherit(child, base, properties) {
	    var baseP = base.prototype,
	      childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	      assign(childP, properties);
	    }
	  }

	  /**
	   * simple function bind
	   * @param {Function} fn
	   * @param {Object} context
	   * @returns {Function}
	   */
	  function bindFn(fn, context) {
	    return function boundFn() {
	      return fn.apply(context, arguments);
	    };
	  }

	  /**
	   * let a boolean value also be a function that must return a boolean
	   * this first item in args will be used as the context
	   * @param {Boolean|Function} val
	   * @param {Array} [args]
	   * @returns {Boolean}
	   */
	  function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	      return val.apply(args ? args[0] || undefined$1 : undefined$1, args);
	    }
	    return val;
	  }

	  /**
	   * use the val2 when val1 is undefined
	   * @param {*} val1
	   * @param {*} val2
	   * @returns {*}
	   */
	  function ifUndefined(val1, val2) {
	    return val1 === undefined$1 ? val2 : val1;
	  }

	  /**
	   * addEventListener with multiple events at once
	   * @param {EventTarget} target
	   * @param {String} types
	   * @param {Function} handler
	   */
	  function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	      target.addEventListener(type, handler, false);
	    });
	  }

	  /**
	   * removeEventListener with multiple events at once
	   * @param {EventTarget} target
	   * @param {String} types
	   * @param {Function} handler
	   */
	  function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	      target.removeEventListener(type, handler, false);
	    });
	  }

	  /**
	   * find if a node is in the given parent
	   * @method hasParent
	   * @param {HTMLElement} node
	   * @param {HTMLElement} parent
	   * @return {Boolean} found
	   */
	  function hasParent(node, parent) {
	    while (node) {
	      if (node == parent) {
	        return true;
	      }
	      node = node.parentNode;
	    }
	    return false;
	  }

	  /**
	   * small indexOf wrapper
	   * @param {String} str
	   * @param {String} find
	   * @returns {Boolean} found
	   */
	  function inStr(str, find) {
	    return str.indexOf(find) > -1;
	  }

	  /**
	   * split string on whitespace
	   * @param {String} str
	   * @returns {Array} words
	   */
	  function splitStr(str) {
	    return str.trim().split(/\s+/g);
	  }

	  /**
	   * find if a array contains the object using indexOf or a simple polyFill
	   * @param {Array} src
	   * @param {String} find
	   * @param {String} [findByKey]
	   * @return {Boolean|Number} false when not found, or the index
	   */
	  function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	      return src.indexOf(find);
	    } else {
	      var i = 0;
	      while (i < src.length) {
	        if (
	          (findByKey && src[i][findByKey] == find) ||
	          (!findByKey && src[i] === find)
	        ) {
	          return i;
	        }
	        i++;
	      }
	      return -1;
	    }
	  }

	  /**
	   * convert array-like objects to real arrays
	   * @param {Object} obj
	   * @returns {Array}
	   */
	  function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	  }

	  /**
	   * unique array with objects based on a key (like 'id') or just by the array's value
	   * @param {Array} src [{id:1},{id:2},{id:1}]
	   * @param {String} [key]
	   * @param {Boolean} [sort=False]
	   * @returns {Array} [{id:1},{id:2}]
	   */
	  function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	      var val = key ? src[i][key] : src[i];
	      if (inArray(values, val) < 0) {
	        results.push(src[i]);
	      }
	      values[i] = val;
	      i++;
	    }

	    if (sort) {
	      if (!key) {
	        results = results.sort();
	      } else {
	        results = results.sort(function sortUniqueArray(a, b) {
	          return a[key] > b[key];
	        });
	      }
	    }

	    return results;
	  }

	  /**
	   * get the prefixed property
	   * @param {Object} obj
	   * @param {String} property
	   * @returns {String|Undefined} prefixed
	   */
	  function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	      prefix = VENDOR_PREFIXES[i];
	      prop = prefix ? prefix + camelProp : property;

	      if (prop in obj) {
	        return prop;
	      }
	      i++;
	    }
	    return undefined$1;
	  }

	  /**
	   * get a unique id
	   * @returns {number} uniqueId
	   */
	  var _uniqueId = 1;
	  function uniqueId() {
	    return _uniqueId++;
	  }

	  /**
	   * get the window object of an element
	   * @param {HTMLElement} element
	   * @returns {DocumentView|Window}
	   */
	  function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return doc.defaultView || doc.parentWindow || window;
	  }

	  var INPUT_TYPE_TOUCH = 'touch';
	  var INPUT_TYPE_PEN = 'pen';
	  var INPUT_TYPE_MOUSE = 'mouse';
	  var INPUT_TYPE_KINECT = 'kinect';

	  var COMPUTE_INTERVAL = 25;

	  var INPUT_START = 1;
	  var INPUT_MOVE = 2;
	  var INPUT_END = 4;
	  var INPUT_CANCEL = 8;

	  var DIRECTION_NONE = 1;
	  var DIRECTION_LEFT = 2;
	  var DIRECTION_RIGHT = 4;
	  var DIRECTION_UP = 8;
	  var DIRECTION_DOWN = 16;

	  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	  var PROPS_XY = ['x', 'y'];
	  var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	  /**
	   * create new input type manager
	   * @param {Manager} manager
	   * @param {Function} callback
	   * @returns {Input}
	   * @constructor
	   */
	  function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	      if (boolOrFn(manager.options.enable, [manager])) {
	        self.handler(ev);
	      }
	    };

	    this.init();
	  }

	  Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() {},

	    /**
	     * bind the events
	     */
	    init: function() {
	      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	      this.evTarget &&
	        addEventListeners(this.target, this.evTarget, this.domHandler);
	      this.evWin &&
	        addEventListeners(
	          getWindowForElement(this.element),
	          this.evWin,
	          this.domHandler
	        );
	    },

	    /**
	     * unbind the events
	     */
	    destroy: function() {
	      this.evEl &&
	        removeEventListeners(this.element, this.evEl, this.domHandler);
	      this.evTarget &&
	        removeEventListeners(this.target, this.evTarget, this.domHandler);
	      this.evWin &&
	        removeEventListeners(
	          getWindowForElement(this.element),
	          this.evWin,
	          this.domHandler
	        );
	    }
	  };

	  /**
	   * create new input type manager
	   * called by the Manager constructor
	   * @param {Hammer} manager
	   * @returns {Input}
	   */
	  function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	      Type = inputClass;
	    } else {
	      Type = TouchInput;
	    }
	    return new Type(manager, inputHandler);
	  }

	  /**
	   * handle input events
	   * @param {Manager} manager
	   * @param {String} eventType
	   * @param {Object} input
	   */
	  function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst =
	      eventType & INPUT_START && pointersLen - changedPointersLen === 0;
	    var isFinal =
	      eventType & (INPUT_END | INPUT_CANCEL) &&
	      pointersLen - changedPointersLen === 0;

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	      manager.session = {};
	    }

	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;

	    // compute scale, rotation etc
	    computeInputData(manager, input);

	    // emit secret event
	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	  }

	  /**
	   * extend the data with some usable properties like scale, rotate, velocity etc
	   * @param {Object} manager
	   * @param {Object} input
	   */
	  function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	      session.firstInput = simpleCloneInputData(input);
	    }

	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	      session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	      session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = (input.center = getCenter(pointers));
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    var overallVelocity = getVelocity(
	      input.deltaTime,
	      input.deltaX,
	      input.deltaY
	    );
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity =
	      abs(overallVelocity.x) > abs(overallVelocity.y)
	        ? overallVelocity.x
	        : overallVelocity.y;

	    input.scale = firstMultiple
	      ? getScale(firstMultiple.pointers, pointers)
	      : 1;
	    input.rotation = firstMultiple
	      ? getRotation(firstMultiple.pointers, pointers)
	      : 0;

	    input.maxPointers = !session.prevInput
	      ? input.pointers.length
	      : input.pointers.length > session.prevInput.maxPointers
	      ? input.pointers.length
	      : session.prevInput.maxPointers;

	    computeIntervalInputData(session, input);

	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	      target = input.srcEvent.target;
	    }
	    input.target = target;
	  }

	  function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	      prevDelta = session.prevDelta = {
	        x: prevInput.deltaX || 0,
	        y: prevInput.deltaY || 0
	      };

	      offset = session.offsetDelta = {
	        x: center.x,
	        y: center.y
	      };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	  }

	  /**
	   * velocity is calculated every x ms
	   * @param {Object} session
	   * @param {Object} input
	   */
	  function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	      deltaTime = input.timeStamp - last.timeStamp,
	      velocity,
	      velocityX,
	      velocityY,
	      direction;

	    if (
	      input.eventType != INPUT_CANCEL &&
	      (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined$1)
	    ) {
	      var deltaX = input.deltaX - last.deltaX;
	      var deltaY = input.deltaY - last.deltaY;

	      var v = getVelocity(deltaTime, deltaX, deltaY);
	      velocityX = v.x;
	      velocityY = v.y;
	      velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
	      direction = getDirection(deltaX, deltaY);

	      session.lastInterval = input;
	    } else {
	      // use latest velocity info if it doesn't overtake a minimum period
	      velocity = last.velocity;
	      velocityX = last.velocityX;
	      velocityY = last.velocityY;
	      direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	  }

	  /**
	   * create a simple clone from the input used for storage of firstInput and firstMultiple
	   * @param {Object} input
	   * @returns {Object} clonedInputData
	   */
	  function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	      pointers[i] = {
	        clientX: round(input.pointers[i].clientX),
	        clientY: round(input.pointers[i].clientY)
	      };
	      i++;
	    }

	    return {
	      timeStamp: now(),
	      pointers: pointers,
	      center: getCenter(pointers),
	      deltaX: input.deltaX,
	      deltaY: input.deltaY
	    };
	  }

	  /**
	   * get the center of all the pointers
	   * @param {Array} pointers
	   * @return {Object} center contains `x` and `y` properties
	   */
	  function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	      return {
	        x: round(pointers[0].clientX),
	        y: round(pointers[0].clientY)
	      };
	    }

	    var x = 0,
	      y = 0,
	      i = 0;
	    while (i < pointersLength) {
	      x += pointers[i].clientX;
	      y += pointers[i].clientY;
	      i++;
	    }

	    return {
	      x: round(x / pointersLength),
	      y: round(y / pointersLength)
	    };
	  }

	  /**
	   * calculate the velocity between two points. unit is in px per ms.
	   * @param {Number} deltaTime
	   * @param {Number} x
	   * @param {Number} y
	   * @return {Object} velocity `x` and `y`
	   */
	  function getVelocity(deltaTime, x, y) {
	    return {
	      x: x / deltaTime || 0,
	      y: y / deltaTime || 0
	    };
	  }

	  /**
	   * get the direction between two points
	   * @param {Number} x
	   * @param {Number} y
	   * @return {Number} direction
	   */
	  function getDirection(x, y) {
	    if (x === y) {
	      return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	      return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	  }

	  /**
	   * calculate the absolute distance between two points
	   * @param {Object} p1 {x, y}
	   * @param {Object} p2 {x, y}
	   * @param {Array} [props] containing x and y keys
	   * @return {Number} distance
	   */
	  function getDistance(p1, p2, props) {
	    if (!props) {
	      props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	      y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt(x * x + y * y);
	  }

	  /**
	   * calculate the angle between two coordinates
	   * @param {Object} p1
	   * @param {Object} p2
	   * @param {Array} [props] containing x and y keys
	   * @return {Number} angle
	   */
	  function getAngle(p1, p2, props) {
	    if (!props) {
	      props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	      y = p2[props[1]] - p1[props[1]];
	    return (Math.atan2(y, x) * 180) / Math.PI;
	  }

	  /**
	   * calculate the rotation degrees between two pointersets
	   * @param {Array} start array of pointers
	   * @param {Array} end array of pointers
	   * @return {Number} rotation
	   */
	  function getRotation(start, end) {
	    return (
	      getAngle(end[1], end[0], PROPS_CLIENT_XY) +
	      getAngle(start[1], start[0], PROPS_CLIENT_XY)
	    );
	  }

	  /**
	   * calculate the scale factor between two pointersets
	   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	   * @param {Array} start array of pointers
	   * @param {Array} end array of pointers
	   * @return {Number} scale
	   */
	  function getScale(start, end) {
	    return (
	      getDistance(end[0], end[1], PROPS_CLIENT_XY) /
	      getDistance(start[0], start[1], PROPS_CLIENT_XY)
	    );
	  }

	  var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	  };

	  var MOUSE_ELEMENT_EVENTS = 'mousedown';
	  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	  /**
	   * Mouse events input
	   * @constructor
	   * @extends Input
	   */
	  function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.pressed = false; // mousedown state

	    Input.apply(this, arguments);
	  }

	  inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	      var eventType = MOUSE_INPUT_MAP[ev.type];

	      // on start we want to have the left mouse button down
	      if (eventType & INPUT_START && ev.button === 0) {
	        this.pressed = true;
	      }

	      if (eventType & INPUT_MOVE && ev.which !== 1) {
	        eventType = INPUT_END;
	      }

	      // mouse must be down
	      if (!this.pressed) {
	        return;
	      }

	      if (eventType & INPUT_END) {
	        this.pressed = false;
	      }

	      this.callback(this.manager, eventType, {
	        pointers: [ev],
	        changedPointers: [ev],
	        pointerType: INPUT_TYPE_MOUSE,
	        srcEvent: ev
	      });
	    }
	  });

	  var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	  };

	  // in IE10 the pointer types is defined as an enum
	  var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	  };

	  var POINTER_ELEMENT_EVENTS = 'pointerdown';
	  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	  // IE10 has prefixed support, and case-sensitive
	  if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	  }

	  /**
	   * Pointer events input
	   * @constructor
	   * @extends Input
	   */
	  function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = this.manager.session.pointerEvents = [];
	  }

	  inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	      var store = this.store;
	      var removePointer = false;

	      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	      var pointerType =
	        IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	      var isTouch = pointerType == INPUT_TYPE_TOUCH;

	      // get index of the event in the store
	      var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	      // start and mouse must be down
	      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	        if (storeIndex < 0) {
	          store.push(ev);
	          storeIndex = store.length - 1;
	        }
	      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        removePointer = true;
	      }

	      // it not found, so the pointer hasn't been down (so it's probably a hover)
	      if (storeIndex < 0) {
	        return;
	      }

	      // update the event in the store
	      store[storeIndex] = ev;

	      this.callback(this.manager, eventType, {
	        pointers: store,
	        changedPointers: [ev],
	        pointerType: pointerType,
	        srcEvent: ev
	      });

	      if (removePointer) {
	        // remove from the store
	        store.splice(storeIndex, 1);
	      }
	    }
	  });

	  var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	  };

	  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	  /**
	   * Touch events input
	   * @constructor
	   * @extends Input
	   */
	  function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	  }

	  inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	      var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	      // should we handle the touch events?
	      if (type === INPUT_START) {
	        this.started = true;
	      }

	      if (!this.started) {
	        return;
	      }

	      var touches = normalizeSingleTouches.call(this, ev, type);

	      // when done, reset the started state
	      if (
	        type & (INPUT_END | INPUT_CANCEL) &&
	        touches[0].length - touches[1].length === 0
	      ) {
	        this.started = false;
	      }

	      this.callback(this.manager, type, {
	        pointers: touches[0],
	        changedPointers: touches[1],
	        pointerType: INPUT_TYPE_TOUCH,
	        srcEvent: ev
	      });
	    }
	  });

	  /**
	   * @this {TouchInput}
	   * @param {Object} ev
	   * @param {Number} type flag
	   * @returns {undefined|Array} [all, changed]
	   */
	  function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	      all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	  }

	  var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	  };

	  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	  /**
	   * Multi-user touch events input
	   * @constructor
	   * @extends Input
	   */
	  function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	  }

	  inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	      var type = TOUCH_INPUT_MAP[ev.type];
	      var touches = getTouches.call(this, ev, type);
	      if (!touches) {
	        return;
	      }

	      this.callback(this.manager, type, {
	        pointers: touches[0],
	        changedPointers: touches[1],
	        pointerType: INPUT_TYPE_TOUCH,
	        srcEvent: ev
	      });
	    }
	  });

	  /**
	   * @this {TouchInput}
	   * @param {Object} ev
	   * @param {Number} type flag
	   * @returns {undefined|Array} [all, changed]
	   */
	  function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	      targetIds[allTouches[0].identifier] = true;
	      return [allTouches, allTouches];
	    }

	    var i,
	      targetTouches,
	      changedTouches = toArray(ev.changedTouches),
	      changedTargetTouches = [];
	      this.target;

	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	      return true;
	    });

	    // collect touches
	    if (type === INPUT_START) {
	      i = 0;
	      while (i < targetTouches.length) {
	        targetIds[targetTouches[i].identifier] = true;
	        i++;
	      }
	    }

	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	      if (targetIds[changedTouches[i].identifier]) {
	        changedTargetTouches.push(changedTouches[i]);
	      }

	      // cleanup removed touches
	      if (type & (INPUT_END | INPUT_CANCEL)) {
	        delete targetIds[changedTouches[i].identifier];
	      }
	      i++;
	    }

	    if (!changedTargetTouches.length) {
	      return;
	    }

	    return [
	      // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	      uniqueArray(
	        targetTouches.concat(changedTargetTouches),
	        'identifier',
	        true
	      ),
	      changedTargetTouches
	    ];
	  }

	  /**
	   * Combined touch and mouse input
	   *
	   * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	   * This because touch devices also emit mouse events while doing a touch.
	   *
	   * @constructor
	   * @extends Input
	   */

	  var DEDUP_TIMEOUT = 2500;

	  function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);

	    this.primaryTouch = null;
	    this.lastTouches = [];
	  }

	  inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	      var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
	        isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

	      if (
	        isMouse &&
	        inputData.sourceCapabilities &&
	        inputData.sourceCapabilities.firesTouchEvents
	      ) {
	        return;
	      }

	      // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	      if (isTouch) {
	        recordTouches.call(this, inputEvent, inputData);
	      } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	        return;
	      }

	      this.callback(manager, inputEvent, inputData);
	    },

	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	      this.touch.destroy();
	      this.mouse.destroy();
	    }
	  });

	  function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	      this.primaryTouch = eventData.changedPointers[0].identifier;
	      setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	      setLastTouch.call(this, eventData);
	    }
	  }

	  function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];

	    if (touch.identifier === this.primaryTouch) {
	      var lastTouch = { x: touch.clientX, y: touch.clientY };
	      this.lastTouches.push(lastTouch);
	      var lts = this.lastTouches;
	      var removeLastTouch = function() {
	        var i = lts.indexOf(lastTouch);
	        if (i > -1) {
	          lts.splice(i, 1);
	        }
	      };
	      setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	  }

	  function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX,
	      y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	      var t = this.lastTouches[i];
	      var dx = Math.abs(x - t.x),
	        dy = Math.abs(y - t.y);
	      if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	        return true;
	      }
	    }
	    return false;
	  }

	  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined$1;

	  // magical touchAction value
	  var TOUCH_ACTION_COMPUTE = 'compute';
	  var TOUCH_ACTION_AUTO = 'auto';
	  var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	  var TOUCH_ACTION_NONE = 'none';
	  var TOUCH_ACTION_PAN_X = 'pan-x';
	  var TOUCH_ACTION_PAN_Y = 'pan-y';
	  var TOUCH_ACTION_MAP = getTouchActionProps();

	  /**
	   * Touch Action
	   * sets the touchAction property or uses the js alternative
	   * @param {Manager} manager
	   * @param {String} value
	   * @constructor
	   */
	  function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	  }

	  TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	      // find out the touch-action by the event handlers
	      if (value == TOUCH_ACTION_COMPUTE) {
	        value = this.compute();
	      }

	      if (
	        NATIVE_TOUCH_ACTION &&
	        this.manager.element.style &&
	        TOUCH_ACTION_MAP[value]
	      ) {
	        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	      }
	      this.actions = value.toLowerCase().trim();
	    },

	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	      this.set(this.manager.options.touchAction);
	    },

	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	      var actions = [];
	      each(this.manager.recognizers, function(recognizer) {
	        if (boolOrFn(recognizer.options.enable, [recognizer])) {
	          actions = actions.concat(recognizer.getTouchAction());
	        }
	      });
	      return cleanTouchActions(actions.join(' '));
	    },

	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	      var srcEvent = input.srcEvent;
	      var direction = input.offsetDirection;

	      // if the touch action did prevented once this session
	      if (this.manager.session.prevented) {
	        srcEvent.preventDefault();
	        return;
	      }

	      var actions = this.actions;
	      var hasNone =
	        inStr(actions, TOUCH_ACTION_NONE) &&
	        !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	      var hasPanY =
	        inStr(actions, TOUCH_ACTION_PAN_Y) &&
	        !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	      var hasPanX =
	        inStr(actions, TOUCH_ACTION_PAN_X) &&
	        !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	      if (hasNone) {
	        //do not prevent defaults if this is a tap gesture

	        var isTapPointer = input.pointers.length === 1;
	        var isTapMovement = input.distance < 2;
	        var isTapTouchTime = input.deltaTime < 250;

	        if (isTapPointer && isTapMovement && isTapTouchTime) {
	          return;
	        }
	      }

	      if (hasPanX && hasPanY) {
	        // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	        return;
	      }

	      if (
	        hasNone ||
	        (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	        (hasPanX && direction & DIRECTION_VERTICAL)
	      ) {
	        return this.preventSrc(srcEvent);
	      }
	    },

	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	      this.manager.session.prevented = true;
	      srcEvent.preventDefault();
	    }
	  };

	  /**
	   * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	   * @param {String} actions
	   * @returns {*}
	   */
	  function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	      return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	      return TOUCH_ACTION_NONE;
	    }

	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	      return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	  }

	  function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	      return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(
	      function(val) {
	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports
	          ? window.CSS.supports('touch-action', val)
	          : true;
	      }
	    );
	    return touchMap;
	  }

	  /**
	   * Recognizer flow explained; *
	   * All recognizers have the initial state of POSSIBLE when a input session starts.
	   * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	   * Example session for mouse-input: mousedown -> mousemove -> mouseup
	   *
	   * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	   * which determines with state it should be.
	   *
	   * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	   * POSSIBLE to give it another change on the next cycle.
	   *
	   *               Possible
	   *                  |
	   *            +-----+---------------+
	   *            |                     |
	   *      +-----+-----+               |
	   *      |           |               |
	   *   Failed      Cancelled          |
	   *                          +-------+------+
	   *                          |              |
	   *                      Recognized       Began
	   *                                         |
	   *                                      Changed
	   *                                         |
	   *                                  Ended/Recognized
	   */
	  var STATE_POSSIBLE = 1;
	  var STATE_BEGAN = 2;
	  var STATE_CHANGED = 4;
	  var STATE_ENDED = 8;
	  var STATE_RECOGNIZED = STATE_ENDED;
	  var STATE_CANCELLED = 16;
	  var STATE_FAILED = 32;

	  /**
	   * Recognizer
	   * Every recognizer needs to extend from this class.
	   * @constructor
	   * @param {Object} options
	   */
	  function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});

	    this.id = uniqueId();

	    this.manager = null;

	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	  }

	  Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},

	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	      assign(this.options, options);

	      // also update the touchAction, in case something changed about the directions/enabled state
	      this.manager && this.manager.touchAction.update();
	      return this;
	    },

	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	        return this;
	      }

	      var simultaneous = this.simultaneous;
	      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	      if (!simultaneous[otherRecognizer.id]) {
	        simultaneous[otherRecognizer.id] = otherRecognizer;
	        otherRecognizer.recognizeWith(this);
	      }
	      return this;
	    },

	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	        return this;
	      }

	      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	      delete this.simultaneous[otherRecognizer.id];
	      return this;
	    },

	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	        return this;
	      }

	      var requireFail = this.requireFail;
	      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	      if (inArray(requireFail, otherRecognizer) === -1) {
	        requireFail.push(otherRecognizer);
	        otherRecognizer.requireFailure(this);
	      }
	      return this;
	    },

	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	        return this;
	      }

	      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	      var index = inArray(this.requireFail, otherRecognizer);
	      if (index > -1) {
	        this.requireFail.splice(index, 1);
	      }
	      return this;
	    },

	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	      return this.requireFail.length > 0;
	    },

	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	      return !!this.simultaneous[otherRecognizer.id];
	    },

	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	      var self = this;
	      var state = this.state;

	      function emit(event) {
	        self.manager.emit(event, input);
	      }

	      // 'panstart' and 'panmove'
	      if (state < STATE_ENDED) {
	        emit(self.options.event + stateStr(state));
	      }

	      emit(self.options.event); // simple 'eventName' events

	      if (input.additionalEvent) {
	        // additional event(panleft, panright, pinchin, pinchout...)
	        emit(input.additionalEvent);
	      }

	      // panend and pancancel
	      if (state >= STATE_ENDED) {
	        emit(self.options.event + stateStr(state));
	      }
	    },

	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	      if (this.canEmit()) {
	        return this.emit(input);
	      }
	      // it's failing anyway
	      this.state = STATE_FAILED;
	    },

	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	      var i = 0;
	      while (i < this.requireFail.length) {
	        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	          return false;
	        }
	        i++;
	      }
	      return true;
	    },

	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	      // make a new copy of the inputData
	      // so we can change the inputData without messing up the other recognizers
	      var inputDataClone = assign({}, inputData);

	      // is is enabled and allow recognizing?
	      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	        this.reset();
	        this.state = STATE_FAILED;
	        return;
	      }

	      // reset when we've reached the end
	      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	        this.state = STATE_POSSIBLE;
	      }

	      this.state = this.process(inputDataClone);

	      // the recognizer has recognized a gesture
	      // so trigger an event
	      if (
	        this.state &
	        (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)
	      ) {
	        this.tryEmit(inputDataClone);
	      }
	    },

	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) {}, // jshint ignore:line

	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() {},

	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() {}
	  };

	  /**
	   * get a usable string, used as event postfix
	   * @param {Const} state
	   * @returns {String} state
	   */
	  function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	      return 'cancel';
	    } else if (state & STATE_ENDED) {
	      return 'end';
	    } else if (state & STATE_CHANGED) {
	      return 'move';
	    } else if (state & STATE_BEGAN) {
	      return 'start';
	    }
	    return '';
	  }

	  /**
	   * direction cons to string
	   * @param {Const} direction
	   * @returns {String}
	   */
	  function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	      return 'down';
	    } else if (direction == DIRECTION_UP) {
	      return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	      return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	      return 'right';
	    }
	    return '';
	  }

	  /**
	   * get a recognizer by name if it is bound to a manager
	   * @param {Recognizer|String} otherRecognizer
	   * @param {Recognizer} recognizer
	   * @returns {Recognizer}
	   */
	  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	      return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	  }

	  /**
	   * This recognizer is just used as a base for the simple attribute recognizers.
	   * @constructor
	   * @extends Recognizer
	   */
	  function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	  }

	  inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	      /**
	       * @type {Number}
	       * @default 1
	       */
	      pointers: 1
	    },

	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	      var optionPointers = this.options.pointers;
	      return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	      var state = this.state;
	      var eventType = input.eventType;

	      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	      var isValid = this.attrTest(input);

	      // on cancel input and we've recognized before, return STATE_CANCELLED
	      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	        return state | STATE_CANCELLED;
	      } else if (isRecognized || isValid) {
	        if (eventType & INPUT_END) {
	          return state | STATE_ENDED;
	        } else if (!(state & STATE_BEGAN)) {
	          return STATE_BEGAN;
	        }
	        return state | STATE_CHANGED;
	      }
	      return STATE_FAILED;
	    }
	  });

	  /**
	   * Pan
	   * Recognized when the pointer is down and moved in the allowed direction.
	   * @constructor
	   * @extends AttrRecognizer
	   */
	  function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	  }

	  inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	      event: 'pan',
	      threshold: 10,
	      pointers: 1,
	      direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	      var direction = this.options.direction;
	      var actions = [];
	      if (direction & DIRECTION_HORIZONTAL) {
	        actions.push(TOUCH_ACTION_PAN_Y);
	      }
	      if (direction & DIRECTION_VERTICAL) {
	        actions.push(TOUCH_ACTION_PAN_X);
	      }
	      return actions;
	    },

	    directionTest: function(input) {
	      var options = this.options;
	      var hasMoved = true;
	      var distance = input.distance;
	      var direction = input.direction;
	      var x = input.deltaX;
	      var y = input.deltaY;

	      // lock to axis?
	      if (!(direction & options.direction)) {
	        if (options.direction & DIRECTION_HORIZONTAL) {
	          direction =
	            x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	          hasMoved = x != this.pX;
	          distance = Math.abs(input.deltaX);
	        } else {
	          direction =
	            y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	          hasMoved = y != this.pY;
	          distance = Math.abs(input.deltaY);
	        }
	      }
	      input.direction = direction;
	      return (
	        hasMoved &&
	        distance > options.threshold &&
	        direction & options.direction
	      );
	    },

	    attrTest: function(input) {
	      return (
	        AttrRecognizer.prototype.attrTest.call(this, input) &&
	        (this.state & STATE_BEGAN ||
	          (!(this.state & STATE_BEGAN) && this.directionTest(input)))
	      );
	    },

	    emit: function(input) {
	      this.pX = input.deltaX;
	      this.pY = input.deltaY;

	      var direction = directionStr(input.direction);

	      if (direction) {
	        input.additionalEvent = this.options.event + direction;
	      }
	      this._super.emit.call(this, input);
	    }
	  });

	  /**
	   * Pinch
	   * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	   * @constructor
	   * @extends AttrRecognizer
	   */
	  function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	  }

	  inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	      event: 'pinch',
	      threshold: 0,
	      pointers: 2
	    },

	    getTouchAction: function() {
	      return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	      return (
	        this._super.attrTest.call(this, input) &&
	        (Math.abs(input.scale - 1) > this.options.threshold ||
	          this.state & STATE_BEGAN)
	      );
	    },

	    emit: function(input) {
	      if (input.scale !== 1) {
	        var inOut = input.scale < 1 ? 'in' : 'out';
	        input.additionalEvent = this.options.event + inOut;
	      }
	      this._super.emit.call(this, input);
	    }
	  });

	  /**
	   * Press
	   * Recognized when the pointer is down for x ms without any movement.
	   * @constructor
	   * @extends Recognizer
	   */
	  function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	  }

	  inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	      event: 'press',
	      pointers: 1,
	      time: 251, // minimal time of the pointer to be pressed
	      threshold: 9 // a minimal movement is ok, but keep it low
	    },

	    getTouchAction: function() {
	      return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	      var options = this.options;
	      var validPointers = input.pointers.length === options.pointers;
	      var validMovement = input.distance < options.threshold;
	      var validTime = input.deltaTime > options.time;

	      this._input = input;

	      // we only allow little movement
	      // and we've reached an end event, so a tap is possible
	      if (
	        !validMovement ||
	        !validPointers ||
	        (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)
	      ) {
	        this.reset();
	      } else if (input.eventType & INPUT_START) {
	        this.reset();
	        this._timer = setTimeoutContext(
	          function() {
	            this.state = STATE_RECOGNIZED;
	            this.tryEmit();
	          },
	          options.time,
	          this
	        );
	      } else if (input.eventType & INPUT_END) {
	        return STATE_RECOGNIZED;
	      }
	      return STATE_FAILED;
	    },

	    reset: function() {
	      clearTimeout(this._timer);
	    },

	    emit: function(input) {
	      if (this.state !== STATE_RECOGNIZED) {
	        return;
	      }

	      if (input && input.eventType & INPUT_END) {
	        this.manager.emit(this.options.event + 'up', input);
	      } else {
	        this._input.timeStamp = now();
	        this.manager.emit(this.options.event, this._input);
	      }
	    }
	  });

	  /**
	   * Rotate
	   * Recognized when two or more pointer are moving in a circular motion.
	   * @constructor
	   * @extends AttrRecognizer
	   */
	  function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	  }

	  inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	      event: 'rotate',
	      threshold: 0,
	      pointers: 2
	    },

	    getTouchAction: function() {
	      return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	      return (
	        this._super.attrTest.call(this, input) &&
	        (Math.abs(input.rotation) > this.options.threshold ||
	          this.state & STATE_BEGAN)
	      );
	    }
	  });

	  /**
	   * Swipe
	   * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	   * @constructor
	   * @extends AttrRecognizer
	   */
	  function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	  }

	  inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	      event: 'swipe',
	      threshold: 10,
	      velocity: 0.3,
	      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	      pointers: 1
	    },

	    getTouchAction: function() {
	      return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	      var direction = this.options.direction;
	      var velocity;

	      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	        velocity = input.overallVelocity;
	      } else if (direction & DIRECTION_HORIZONTAL) {
	        velocity = input.overallVelocityX;
	      } else if (direction & DIRECTION_VERTICAL) {
	        velocity = input.overallVelocityY;
	      }

	      return (
	        this._super.attrTest.call(this, input) &&
	        direction & input.offsetDirection &&
	        input.distance > this.options.threshold &&
	        input.maxPointers == this.options.pointers &&
	        abs(velocity) > this.options.velocity &&
	        input.eventType & INPUT_END
	      );
	    },

	    emit: function(input) {
	      var direction = directionStr(input.offsetDirection);
	      if (direction) {
	        this.manager.emit(this.options.event + direction, input);
	      }

	      this.manager.emit(this.options.event, input);
	    }
	  });

	  /**
	   * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	   * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	   * a single tap.
	   *
	   * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	   * multi-taps being recognized.
	   * @constructor
	   * @extends Recognizer
	   */
	  function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	  }

	  inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	      event: 'tap',
	      pointers: 1,
	      taps: 1,
	      interval: 300, // max time between the multi-tap taps
	      time: 250, // max time of the pointer to be down (like finger on the screen)
	      threshold: 9, // a minimal movement is ok, but keep it low
	      posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },

	    getTouchAction: function() {
	      return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	      var options = this.options;

	      var validPointers = input.pointers.length === options.pointers;
	      var validMovement = input.distance < options.threshold;
	      var validTouchTime = input.deltaTime < options.time;

	      this.reset();

	      if (input.eventType & INPUT_START && this.count === 0) {
	        return this.failTimeout();
	      }

	      // we only allow little movement
	      // and we've reached an end event, so a tap is possible
	      if (validMovement && validTouchTime && validPointers) {
	        if (input.eventType != INPUT_END) {
	          return this.failTimeout();
	        }

	        var validInterval = this.pTime
	          ? input.timeStamp - this.pTime < options.interval
	          : true;
	        var validMultiTap =
	          !this.pCenter ||
	          getDistance(this.pCenter, input.center) < options.posThreshold;

	        this.pTime = input.timeStamp;
	        this.pCenter = input.center;

	        if (!validMultiTap || !validInterval) {
	          this.count = 1;
	        } else {
	          this.count += 1;
	        }

	        this._input = input;

	        // if tap count matches we have recognized it,
	        // else it has began recognizing...
	        var tapCount = this.count % options.taps;
	        if (tapCount === 0) {
	          // no failing requirements, immediately trigger the tap event
	          // or wait as long as the multitap interval to trigger
	          if (!this.hasRequireFailures()) {
	            return STATE_RECOGNIZED;
	          } else {
	            this._timer = setTimeoutContext(
	              function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	              },
	              options.interval,
	              this
	            );
	            return STATE_BEGAN;
	          }
	        }
	      }
	      return STATE_FAILED;
	    },

	    failTimeout: function() {
	      this._timer = setTimeoutContext(
	        function() {
	          this.state = STATE_FAILED;
	        },
	        this.options.interval,
	        this
	      );
	      return STATE_FAILED;
	    },

	    reset: function() {
	      clearTimeout(this._timer);
	    },

	    emit: function() {
	      if (this.state == STATE_RECOGNIZED) {
	        this._input.tapCount = this.count;
	        this.manager.emit(this.options.event, this._input);
	      }
	    }
	  });

	  /**
	   * Simple way to create a manager with a default set of recognizers.
	   * @param {HTMLElement} element
	   * @param {Object} [options]
	   * @constructor
	   */
	  function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(
	      options.recognizers,
	      Hammer.defaults.preset
	    );
	    return new Manager(element, options);
	  }

	  /**
	   * @const {string}
	   */
	  Hammer.VERSION = '2.0.7';

	  /**
	   * default settings
	   * @namespace
	   */
	  Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,

	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,

	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,

	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,

	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,

	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	      // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	      [RotateRecognizer, { enable: false }],
	      [PinchRecognizer, { enable: false }, ['rotate']],
	      [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
	      [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
	      [TapRecognizer],
	      [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
	      [PressRecognizer]
	    ],

	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	      /**
	       * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	       * @type {String}
	       * @default 'none'
	       */
	      userSelect: 'none',

	      /**
	       * Disable the Windows Phone grippers when pressing an element.
	       * @type {String}
	       * @default 'none'
	       */
	      touchSelect: 'none',

	      /**
	       * Disables the default callout shown when you touch and hold a touch target.
	       * On iOS, when you touch and hold a touch target such as a link, Safari displays
	       * a callout containing information about the link. This property allows you to disable that callout.
	       * @type {String}
	       * @default 'none'
	       */
	      touchCallout: 'none',

	      /**
	       * Specifies whether zooming is enabled. Used by IE10>
	       * @type {String}
	       * @default 'none'
	       */
	      contentZooming: 'none',

	      /**
	       * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	       * @type {String}
	       * @default 'none'
	       */
	      userDrag: 'none',

	      /**
	       * Overrides the highlight color shown when the user taps a link or a JavaScript
	       * clickable element in iOS. This property obeys the alpha value, if specified.
	       * @type {String}
	       * @default 'rgba(0,0,0,0)'
	       */
	      tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	  };

	  var STOP = 1;
	  var FORCED_STOP = 2;

	  /**
	   * Manager
	   * @param {HTMLElement} element
	   * @param {Object} [options]
	   * @constructor
	   */
	  function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});

	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(
	      this.options.recognizers,
	      function(item) {
	        var recognizer = this.add(new item[0](item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	      },
	      this
	    );
	  }

	  Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	      assign(this.options, options);

	      // Options that need a little more setup
	      if (options.touchAction) {
	        this.touchAction.update();
	      }
	      if (options.inputTarget) {
	        // Clean up existing event listeners and reinitialize
	        this.input.destroy();
	        this.input.target = options.inputTarget;
	        this.input.init();
	      }
	      return this;
	    },

	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	      this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	      var session = this.session;
	      if (session.stopped) {
	        return;
	      }

	      // run the touch-action polyfill
	      this.touchAction.preventDefaults(inputData);

	      var recognizer;
	      var recognizers = this.recognizers;

	      // this holds the recognizer that is being recognized.
	      // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	      // if no recognizer is detecting a thing, it is set to `null`
	      var curRecognizer = session.curRecognizer;

	      // reset when the last recognizer is recognized
	      // or when we're in a new session
	      if (
	        !curRecognizer ||
	        (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)
	      ) {
	        curRecognizer = session.curRecognizer = null;
	      }

	      var i = 0;
	      while (i < recognizers.length) {
	        recognizer = recognizers[i];

	        // find out if we are allowed try to recognize the input for this one.
	        // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	        // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	        //      that is being recognized.
	        // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	        //      this can be setup with the `recognizeWith()` method on the recognizer.
	        if (
	          session.stopped !== FORCED_STOP && // 1
	          (!curRecognizer ||
	          recognizer == curRecognizer || // 2
	            recognizer.canRecognizeWith(curRecognizer))
	        ) {
	          // 3
	          recognizer.recognize(inputData);
	        } else {
	          recognizer.reset();
	        }

	        // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	        // current active recognizer. but only if we don't already have an active recognizer
	        if (
	          !curRecognizer &&
	          recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)
	        ) {
	          curRecognizer = session.curRecognizer = recognizer;
	        }
	        i++;
	      }
	    },

	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	      if (recognizer instanceof Recognizer) {
	        return recognizer;
	      }

	      var recognizers = this.recognizers;
	      for (var i = 0; i < recognizers.length; i++) {
	        if (recognizers[i].options.event == recognizer) {
	          return recognizers[i];
	        }
	      }
	      return null;
	    },

	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	      if (invokeArrayArg(recognizer, 'add', this)) {
	        return this;
	      }

	      // remove existing
	      var existing = this.get(recognizer.options.event);
	      if (existing) {
	        this.remove(existing);
	      }

	      this.recognizers.push(recognizer);
	      recognizer.manager = this;

	      this.touchAction.update();
	      return recognizer;
	    },

	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	      if (invokeArrayArg(recognizer, 'remove', this)) {
	        return this;
	      }

	      recognizer = this.get(recognizer);

	      // let's make sure this recognizer exists
	      if (recognizer) {
	        var recognizers = this.recognizers;
	        var index = inArray(recognizers, recognizer);

	        if (index !== -1) {
	          recognizers.splice(index, 1);
	          this.touchAction.update();
	        }
	      }

	      return this;
	    },

	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	      if (events === undefined$1) {
	        return;
	      }
	      if (handler === undefined$1) {
	        return;
	      }

	      var handlers = this.handlers;
	      each(splitStr(events), function(event) {
	        handlers[event] = handlers[event] || [];
	        handlers[event].push(handler);
	      });
	      return this;
	    },

	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	      if (events === undefined$1) {
	        return;
	      }

	      var handlers = this.handlers;
	      each(splitStr(events), function(event) {
	        if (!handler) {
	          delete handlers[event];
	        } else {
	          handlers[event] &&
	            handlers[event].splice(inArray(handlers[event], handler), 1);
	        }
	      });
	      return this;
	    },

	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	      // we also want to trigger dom events
	      if (this.options.domEvents) {
	        triggerDomEvent(event, data);
	      }

	      // no handlers, so skip it all
	      var handlers = this.handlers[event] && this.handlers[event].slice();
	      if (!handlers || !handlers.length) {
	        return;
	      }

	      data.type = event;
	      data.preventDefault = function() {
	        data.srcEvent.preventDefault();
	      };

	      var i = 0;
	      while (i < handlers.length) {
	        handlers[i](data);
	        i++;
	      }
	    },

	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	      this.element && toggleCssProps(this, false);

	      this.handlers = {};
	      this.session = {};
	      this.input.destroy();
	      this.element = null;
	    }
	  };

	  /**
	   * add/remove the css properties as defined in manager.options.cssProps
	   * @param {Manager} manager
	   * @param {Boolean} add
	   */
	  function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	      return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	      prop = prefixed(element.style, name);
	      if (add) {
	        manager.oldCssProps[prop] = element.style[prop];
	        element.style[prop] = value;
	      } else {
	        element.style[prop] = manager.oldCssProps[prop] || '';
	      }
	    });
	    if (!add) {
	      manager.oldCssProps = {};
	    }
	  }

	  /**
	   * trigger dom event
	   * @param {String} event
	   * @param {Object} data
	   */
	  function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	  }

	  assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	  });

	  // this prevents errors when Hammer is loaded in the presence of an AMD
	  //  style loader but by script tag, not by the loader.
	  var freeGlobal =
	    typeof window !== 'undefined'
	      ? window
	      : typeof self !== 'undefined'
	      ? self
	      : {}; // jshint ignore:line
	  freeGlobal.Hammer = Hammer;

	  if (typeof undefined$1 === 'function' && undefined$1.amd) {
	    undefined$1(function() {
	      return Hammer;
	    });
	  } else if (module.exports) {
	    module.exports = Hammer;
	  } else {
	    window[exportName] = Hammer;
	  }
	})(window, document, 'Hammer');
	});

	/*
	 * @Author: wjz
	 * @Date: 2021-10-22 14:14:27
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-04-18 14:44:30
	 * @FilePath: /kmaps/src/Stage.ts
	 */
	var EVENT = new CustomEvent('setscale');
	/**
	 * @description 非地理坐标地图 创建舞台
	 * @constructor
	 * @extends Konva.Stage
	 * @param {Object} attrs
	 *
	 * @param {String} attrs.container 地图容器
	 * @param {Number} attrs.width 地图宽度
	 * @param {Number} attrs.height 地图高度
	 * @param {Number} attrs.scaleMax 最大缩放倍数 默认10
	 * @param {Number} attrs.scaleMin 最小缩放倍数 默认0.1
	 *
	 * @example
	 * var stage = new Stage({})
	 */
	class Stage extends konva_min.Stage {
	    constructor(attrs) {
	        attrs.id = 'stage';
	        attrs.draggable = true; //拖拽
	        attrs.dragBoundFunc = dragBoundFunc;
	        !attrs.scaleMax ? attrs.scaleMax = 10 : null; //最大缩放
	        !attrs.scaleMin ? attrs.scaleMin = 0.1 : null; //最小缩放
	        super(attrs);
	        // (window as any)._KMap_Stage = this; //将_KMap挂载到window对象上
	        window["_KMap"]["_Stage"] = this; //将_KMap挂载到window对象上
	        Hammer.bind(this)();
	        // let hammer = Hammer.bind(this)
	        // hammer()
	    }
	    /**
	     * @description 设置舞台缩放值 功能与 scale一致 但没有返回值，不可获取缩放，只能设置
	     * @param {Object} param  参数
	     * @param {number} param.x x轴缩放比例
	     * @param {number} param.y y轴缩放比例
	     */
	    setscale(param = { x: 0, y: 0 }) {
	        this.scale(param);
	        this.dispatchEvent(EVENT);
	    }
	    /*
	     * @description 获取当前位置画布的中心坐标
	     * @returns {x,y} 返回当前舞台中心对应在画布上的坐标位置（已转换缩放问题）
	     */
	    centre() {
	        let { px, py } = this.position(); //当前坐标
	        let scale = this.scaleX(); //x,y同时缩放的，获取其一即可
	        let x = (this.attrs.width / 2 - px) / scale, y = (this.attrs.height / 2 - py) / scale;
	        return { x, y };
	    }
	}
	/*
	 *
	 * @param pos 图层拖拽范围限制
	 * @returns pos 拖拽后的坐标
	 */
	function dragBoundFunc(pos) {
	    let apos = this.absolutePosition(); //获取舞台实际位置
	    let { x, y } = pos; //舞台移动位置
	    let scope = Object.assign({}, pos);
	    let baseMap = this.findOne('#BaseMap'); //获取图片对象
	    if (!baseMap) { //舞台没有添加图层，没有可参照图形做范围限制，不可拖拽移动
	        return { x: 0, y: 0 };
	    }
	    let imgPos = baseMap.position(); //图片位置
	    let img = baseMap.size(); //图片尺寸
	    let scale = this.scale(); // 舞台缩放
	    let size = this.size(); // 舞台尺寸
	    //单独x轴拖拽限制
	    if (img.width * scale.x > size.width) { //放大超出屏幕 
	        if (apos.x > x) { //左滑
	            if (x + (imgPos.x + img.width) * scale.x <= size.width - 200)
	                scope.x = apos.x;
	        }
	        if (apos.x < x) { //右滑 
	            if (x >= imgPos.x * -1 * scale.x + 200)
	                scope.x = apos.x;
	        }
	    }
	    else { //未超出屏幕显示范围
	        if (apos.x > x) { //左滑
	            if (imgPos.x * -1 > x / scale.x + 200)
	                scope.x = apos.x;
	        }
	        if (apos.x < x) { //右滑 
	            if (x + (imgPos.x + img.width) * scale.x > size.width + 200)
	                scope.x = apos.x;
	        }
	    }
	    //单独y轴拖拽限制
	    if (img.height * scale.x > size.height) {
	        if (apos.y > y) { //上滑
	            if (y + (imgPos.y + img.height) * scale.y < size.height - 200)
	                scope.y = apos.y;
	        }
	        if (apos.y < y) { //下滑 
	            if (y >= imgPos.y * -1 * scale.y + 200)
	                scope.y = apos.y;
	        }
	    }
	    else {
	        if (apos.y > y) { //上滑
	            if (imgPos.y * -1 > y / scale.y + 200)
	                scope.y = apos.y;
	        }
	        if (apos.y < y) { //下滑 
	            if (y + (imgPos.y + img.height) * scale.y > size.height + 200)
	                scope.y = apos.y;
	        }
	    }
	    return scope;
	}
	/*
	 * @description 手势以及鼠标缩放控制
	 */
	function Hammer() {
	    let scaleRange = {
	        max: this.attrs.scaleMax,
	        min: this.attrs.scaleMin
	    };
	    let hammer = new hammerKonva(this, {
	        domEvents: true
	    });
	    hammer.get('tap').set({
	        enable: false
	    });
	    hammer.get('pinch').set({
	        enable: true
	    });
	    var scaleStart = new CustomEvent('scalestart', {
	        detail: {
	            scale: 1,
	            pointer: [0, 0]
	        }
	    });
	    var scaleMove = new CustomEvent('scalemove', {
	        detail: {
	            scale: 1,
	            pointer: [0, 0]
	        }
	    });
	    var scaleend = new CustomEvent('scaleend', {
	        detail: {
	            scale: 1,
	            pointer: [0, 0]
	        }
	    });
	    var scaleBy = 1.05;
	    var pointer = { x: 0, y: 0 };
	    let st = null; //鼠标滚轮反馈
	    let wheelState = true;
	    this.on(' pinchstart pinchmove pinchend wheel', (e) => {
	        e.cancelBubble = true;
	        // console.log(e);
	        //全局缩放事件
	        var oldScale = this.scaleX();
	        let mousePointTo = {}, newScale = 1, newPos = {};
	        switch (e.type) {
	            case 'wheel': //鼠标滚轮 
	                pointer = this.getPointerPosition();
	                mousePointTo = {
	                    x: (pointer.x - this.x()) / oldScale,
	                    y: (pointer.y - this.y()) / oldScale,
	                };
	                newScale =
	                    e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
	                if (newScale >= scaleRange.max || newScale <= scaleRange.min) {
	                    return;
	                }
	                newPos = {
	                    x: pointer.x - mousePointTo.x * newScale,
	                    y: pointer.y - mousePointTo.y * newScale,
	                };
	                this.scale({
	                    x: newScale,
	                    y: newScale
	                });
	                this.position(newPos);
	                if (wheelState) {
	                    scaleStart.detail.scale = newScale;
	                    scaleStart.detail.pointer == [pointer.x, pointer.y];
	                    this.dispatchEvent(scaleStart);
	                    wheelState = false;
	                }
	                else {
	                    scaleMove.detail.scale = newScale;
	                    scaleMove.detail.pointer == [pointer.x, pointer.y];
	                    this.dispatchEvent(scaleMove);
	                    wheelState = false;
	                }
	                clearTimeout(st);
	                st = setTimeout(() => {
	                    scaleend.detail.scale = newScale;
	                    scaleend.detail.pointer == [pointer.x, pointer.y];
	                    this.dispatchEvent(scaleend);
	                    wheelState = true;
	                }, 100);
	                break;
	            case 'pinchstart': //捏放开始
	                this.draggable(false);
	                pointer = this.getPointerPosition(); //e.evt.gesture.center; //缩放基准点
	                scaleStart.detail.scale = this.scaleX();
	                scaleStart.detail.pointer == [pointer.x, pointer.y];
	                this.dispatchEvent(scaleStart);
	                break;
	            case 'pinchmove': //捏放中
	                mousePointTo = {
	                    x: (pointer.x - this.x()) / oldScale,
	                    y: (pointer.y - this.y()) / oldScale,
	                };
	                newScale = e.evt.gesture.scale > 1 ? oldScale * (scaleBy + 0.04) : oldScale / (scaleBy + 0.04);
	                if (newScale >= scaleRange.max || newScale <= scaleRange.min) {
	                    return;
	                }
	                newPos = {
	                    x: pointer.x - mousePointTo.x * newScale,
	                    y: pointer.y - mousePointTo.y * newScale,
	                };
	                this.scale({
	                    x: newScale,
	                    y: newScale
	                });
	                this.position(newPos);
	                scaleMove.detail.scale = newScale;
	                scaleMove.detail.pointer == [pointer.x, pointer.y];
	                this.dispatchEvent(scaleMove);
	                break;
	            case 'pinchend': //捏放结束
	                this.draggable(true);
	                this.dispatchEvent(scaleend);
	                scaleend.detail.scale = this.scaleX();
	                scaleend.detail.pointer == [pointer.x, pointer.y];
	                this.dispatchEvent(scaleend);
	                break;
	        }
	    });
	}

	/*
	 * @Author: wjz
	 * @Date: 2021-11-12 10:46:30
	 * @LastEditors: wjz
	 * @LastEditTime: 2021-11-16 11:04:11
	 * @FilePath: /kmaps/src/Layer.ts
	 */
	/**
	 * Layer
	 * @description 重写add方法 在原功能基础上增加调用子节点绘制方法
	 * @example
	 * let node = new Layer()
	 */
	class Layer extends konva_min.Layer {
	    constructor(attrs) {
	        super(attrs);
	    }
	    /**
	     * @description 添加子节点元素，参数顺序为节点图层排列顺序
	     * @example
	     * node.add(child1,child2,child3)
	     */
	    add() {
	        for (let item of arguments) {
	            super.add(item);
	            if (item._draw) {
	                item._draw();
	            }
	        }
	    }
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __classPrivateFieldGet(receiver, privateMap) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to get private field on non-instance");
	    }
	    return privateMap.get(receiver);
	}

	function __classPrivateFieldSet(receiver, privateMap, value) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to set private field on non-instance");
	    }
	    privateMap.set(receiver, value);
	    return value;
	}

	/**
	 * Group
	 * @description 重写的add方法 在原功能基础上增加调用子节点绘制方法
	 * @extends Konva.Group https://konvajs.org/api/Konva.Group.html
	 * @param {boolean} awaitMap 是否等待底图绘制状态
	 * @example
	 * let node = new Group()
	 */
	class Group extends konva_min.Group {
	    constructor(attrs) {
	        attrs["awaitMap"] !== false ? attrs["awaitMap"] = true : null;
	        super(attrs);
	        if (attrs["awaitMap"]) {
	            window["_KMap"]["_BaseMap_unpdata"].push(this._position.bind(this));
	            if (attrs.visible !== false) {
	                return;
	            }
	            this.visible(false);
	        }
	    }
	    _position(map) {
	        return __awaiter(this, void 0, void 0, function* () {
	            if (this.attrs.visible !== false) {
	                this.visible(true);
	                this.attrs.visible = true;
	            }
	            if (!this.attrs.awaitMap) {
	                return;
	            }
	            let { x, y } = map.attrs;
	            this.position({ x, y });
	            // this.offsetX(x*-1)
	            // this.offsetY(y*-1)
	        });
	    }
	    /**
	     * @description 添加子节点元素，参数顺序为节点图层排列顺序
	     * @override
	     * @example
	     * node.add(child1,child2,child3)
	     */
	    add() {
	        for (let item of arguments) {
	            super.add(item);
	            if (item._draw) {
	                item._draw();
	            }
	        }
	    }
	    /**
	     * @description 是否自动响应修改底图尺寸变化带来的坐标系变化
	     * @param param
	     * @returns
	     */
	    awaitMap(param) {
	        if (!arguments.length) {
	            return this.attrs.awaitMap;
	        }
	        this.attrs.awaitMap = param;
	    }
	}

	/*
	 * @Author: wjz
	 * @Date: 2021-10-26 15:59:56
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-04-18 15:28:54
	 * @FilePath: /kmaps/src/BaseMap.ts
	 */
	/**
	 * @description 底图类,用于绘制地图图片，计算初始坐标系
	 * @constructor
	 * @class
	 * @extends {Konva.Image}
	 * @param {boolean} awaitMap 是否等待底图绘制状态,开启坐标重置订阅器
	 * @example
	 * let node = new BaseMap(可选参数) //详情参照Konva中的Image
	 */
	class BaseMap extends konva_min.Group {
	    constructor(attrs = {}) {
	        attrs['id'] = 'BaseMap';
	        // !attrs["awaitMap"]? attrs["awaitMap"] = true : null
	        attrs["awaitMap"] !== false ? attrs["awaitMap"] = true : null;
	        super(attrs);
	        this._image = new konva_min.Image({ id: "_image" });
	        this._state = false;
	        this.add(this._image);
	        let self = this;
	        window["_KMap"]["_BaseMap"] = this; //将_KMap挂载到window对象上
	        this._wacth = new Proxy({}, {
	            set: function (target, propKey, value, receiver) {
	                window["_KMap"]["_BaseMap_unpdata"].forEach((item) => {
	                    item(self);
	                });
	                return Reflect.set(target, propKey, value, receiver);
	            }
	        });
	    }
	    /**
	     * @description 绘制图片到此图层
	     * @param {Object} img 图片节点
	     * @example
	     * node.images(img)
	     * return BaseMap对象
	     */
	    image(img) {
	        let width = img.width, //图片宽度
	        height = img.height; //图片高度
	        let stage = super.getStage();
	        this.position({
	            x: stage.size().width / 2 - width / 2,
	            y: stage.size().height / 2 - height / 2
	        });
	        this.size({
	            width,
	            height
	        });
	        this._image.image(img);
	        this._state = true;
	        if (this.attrs["awaitMap"]) {
	            this._wacth.time = new Date().getTime();
	        }
	        return this;
	    }
	    /**
	     * @description 根据图片坐标重置图层的默认坐标系归零点
	     * @param {boolean}  默认true
	     */
	    awaitMap(param) {
	        if (!arguments.length) {
	            return this.attrs.awaitMap;
	        }
	        this.attrs.awaitMap = param;
	    }
	    /**
	     * @description 将目标坐标转换为相对图片的坐标（图片左上角为0，0 点）
	     * @param pos {x,y} 坐标位置
	     * @returns 转换后的坐标位置
	     */
	    relativePosition(pos) {
	        let scale = this.getStage().scaleX();
	        let absPos = this.getAbsolutePosition();
	        return {
	            x: (pos.x - absPos.x) / scale,
	            y: (pos.y - absPos.y) / scale
	        };
	    }
	}

	/*
	 * @Author: wjz
	 * @Date: 2021-10-29 09:54:14
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-04-18 14:56:25
	 * @FilePath: /kmaps/src/Grid.ts
	 */
	// import {wheelEvent} from './_util'
	/**
	 * @description 网格图层，网格参照层 参数详情查看 https://konvajs.org/api/Konva.Group.html文档
	 * @constructor
	 * @extends Konva.Group
	 * @param {number} size 网格尺寸
	 * @example
	 * let grid = new KMap.Grid({size:50})
	 */
	class Grid extends konva_min.Group {
	    constructor(attrs = {}) {
	        attrs['id'] = 'Grid';
	        attrs['x'] = 0;
	        attrs['y'] = 0;
	        super(attrs);
	    }
	    /* 节点被添加到图层后自动绘制 */
	    _draw() {
	        this.drawGraph();
	    }
	    /*
	     * @description 绘制网格图层
	     * @param {number} param.size 网格单格大小默认50px
	     */
	    drawGraph() {
	        let _stage = this.getStage();
	        //未获取到舞台节点，抛出异常
	        if (_stage == null) {
	            throw new Error("The stage node was not obtained");
	        }
	        let sizeW = _stage.width(), sizeH = _stage.height();
	        let strokeWidth = this.attrs.lineWidth || 0.1;
	        let color = this.attrs.color || "#000000";
	        let self = this;
	        let size = this.attrs.grid || 50;
	        let stagePos = _stage.absolutePosition(); //舞台位置 .起始绘制点
	        let scale = _stage.scaleX();
	        let startPoint = {
	            x: (sizeW - stagePos.x) / scale,
	            y: (sizeH - stagePos.y) / scale
	        };
	        let XGCount = Math.round(startPoint.x / size), YGCount = Math.round(startPoint.y / size);
	        for (let xc = 1; xc <= YGCount; xc++) { //水平线
	            let levelLine = new konva_min.Line({
	                name: 'levelLine',
	                points: [0 - stagePos.x - 0.5, (0 - stagePos.y) + size * xc - 0.5, startPoint.x - 0.5, (0 -
	                        stagePos
	                            .y) + size * xc - 0.5],
	                stroke: color,
	                strokeWidth: strokeWidth,
	            });
	            this.add(levelLine);
	        }
	        for (let yc = 1; yc <= XGCount; yc++) { //垂直线
	            let verticalLine = new konva_min.Line({
	                name: 'verticalLine',
	                points: [size * yc - 0.5, 0 - stagePos.y - 0.5, size * yc - 0.5, startPoint.y -
	                        0.5
	                ],
	                stroke: color,
	                strokeWidth: strokeWidth,
	            });
	            this.add(verticalLine);
	        }
	        _stage.addEventListener('dragmove', function (e) {
	            self.absolutePosition({
	                x: 0,
	                y: 0
	            }); //反向位移，将网格重置为初始位置
	        });
	        // wheelEvent(_stage , (e) => {
	        //   if(e.type == "wheelend"){
	        //     self.absolutePosition({
	        //       x: 0,
	        //       y: 0
	        //     }) //将网格重置为0点
	        //     self.scale({
	        //       x: 1 / _stage.scale().x,
	        //       y: 1 / _stage.scale().y
	        //     })
	        //   }
	        // })
	        _stage.addEventListener('scaleend setscale', function (e) {
	            self.absolutePosition({
	                x: 0,
	                y: 0
	            }); //反向位移，将网格重置为初始位置
	            self.scale({
	                x: 1 / this.scaleX(),
	                y: 1 / this.scaleY()
	            });
	        });
	    }
	}

	/*
	 * @Author: wjz
	 * @Date: 2021-10-29 11:10:22
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-03-23 16:06:26
	 * @FilePath: /kmaps/src/Location.ts
	 */
	//默认属性
	let defaultAttrs = {
	    id: "Location",
	    themeColor: "#F00000"
	};
	/**
	 * @description 定位点，图形组 参数详情查看https://konvajs.org/api/Konva.Group.html文档
	 * @class
	 * @constructor
	 * @extends Konva.Group
	 *
	 * @param {Object} attrs  自定义封装
	 * @param {String} attrs.themeColor  定位点主题颜色 ，拖拽范围背景为当前颜色的反向颜色
	 * @param {Number} attrs.x   默认x轴坐标
	 * @param {Number} attrs.y   默认y轴坐标
	 * @param {Number} attrs.angle   默认方向 角度 >= 360°
	 */
	class Location extends konva_min.Group {
	    constructor(attrs) {
	        // attrs["id"] = "Location"
	        attrs = Object.assign(defaultAttrs, attrs);
	        super(attrs);
	        this._drawstate = false;
	        this._stage = window["_KMap"]["_Stage"]; //(window as any)._KMap_Stage
	        this._drag_group_anchor = this;
	    }
	    /*节点被添加到图层后自动绘制 */
	    _draw() {
	        this.drawGraph();
	    }
	    //绘制定位图形
	    drawGraph() {
	        this._drawstate = true;
	        const self = this;
	        let attrs = this.attrs;
	        let themeColorArray = rgbaToArray(colorHextoRGBA(attrs.themeColor || "#F00000")).slice(0, 3); //主题色
	        let radius = 12;
	        const _anchor = anchor({
	            radius,
	            themeColor: attrs.themeColor,
	            shadowColor: attrs.shadowColor,
	            shadowBlur: attrs.shadowBlur,
	        });
	        this._anchor = _anchor;
	        this._drag_group = new konva_min.Group({ id: "_drag_group", visible: false }); //拖拽图形组
	        //主题颜色 rgb反色
	        let R = 255 - themeColorArray[0], G = 255 - themeColorArray[1], B = 255 - themeColorArray[2];
	        let _drag_group_scope = new konva_min.Circle({
	            id: "_drag_group_scope",
	            radius: 80,
	            // fill:"#0C8FF0",
	            // fillRadialGradientColorStops: [0, 'rgba(252, 0, 13, 0.4)', 0.3, 'rgba(252, 0, 13, 0.2)', 1,
	            //   'rgba(255, 255, 255,0)'
	            // ],
	            fillRadialGradientColorStops: [0, `rgba(${R}, ${G}, ${B}, 0.4)`, 0.3, `rgba(${R}, ${G}, ${B}, 0.2)`, 1,
	                'rgba(255, 255, 255,0)'
	            ],
	            fillRadialGradientStartRadius: 80,
	            // fillRadialGradientEndRadius: 0,
	            stroke: `rgba(${R}, ${G}, ${B}, 1)`,
	            strokeWidth: 0.1,
	        });
	        this._drag_group_scope = _drag_group_scope;
	        let _drag_group_line = new konva_min.Line({
	            id: '_drag_group_line',
	            points: [0, 0, _drag_group_scope.y() + 80, 0],
	            stroke: `rgba(${themeColorArray.join(',')}, 1)`,
	            strokeWidth: 1,
	            // shadowColor: `rgba(${themeColorArray.join(',')}, 1)`,//'#fd5807',
	            // shadowBlur: 3,
	            // shadowOpacity: 0.8,
	            hitStrokeWidth: 20,
	        });
	        this._drag_group_line = _drag_group_line;
	        let _drag_group_anchor = new konva_min.Circle({
	            id: '_drag_group_anchor',
	            x: _drag_group_scope.x() + 80,
	            radius: 12,
	            fill: '#ffffff',
	            stroke: `rgba(${themeColorArray.join(',')}, 1)`,
	            strokeWidth: 1.5,
	            // shadowColor: `rgba(${themeColorArray.join(',')}, 1)`,//'#fd5807',
	            // shadowBlur: 3,
	            // shadowOpacity: 0.8,
	            hitStrokeWidth: 20,
	            draggable: true,
	            dragBoundFunc: function (pos) {
	                let center = self.absolutePosition(); //圆心
	                let radian = Math.atan2((pos.y - center.y), (pos.x - center.x)); // 弧度
	                let x = center.x + 80 / _drag_group_scope.scaleX() * Math.cos(radian), y = center.y + 80 / _drag_group_scope.scaleY() * Math.sin(radian);
	                return {
	                    x,
	                    y
	                };
	            }
	        });
	        this._drag_group_anchor = _drag_group_anchor;
	        this._drag_group.add(_drag_group_scope, _drag_group_line, _drag_group_anchor);
	        this._scope = new konva_min.Circle({
	            id: "anchor_scope",
	            radius: radius,
	            // fillRadialGradientColorStops: [0, 'rgba(0, 139, 255, 0.4)', 0.3, 'rgba(0, 139, 255, 0.2)', 1,
	            //   'rgba(255, 255, 255,0)'
	            // ],
	            fillRadialGradientColorStops: [0, `rgba(${themeColorArray.join(',')}, 0.4)`, 0.3, `rgba(${themeColorArray.join(',')}, 0.2)`, 1,
	                'rgba(255, 255, 255,0)'
	            ],
	            fillRadialGradientStartRadius: radius,
	            // fillRadialGradientEndRadius: 0,
	            stroke: 'rgba(252, 0, 13, 1)',
	            strokeWidth: 0.1,
	            visible: true
	        });
	        this.add(this._drag_group, this._scope, this._anchor); //添加定位锚点到主图组
	        /*
	         * @event drags  定位拖拽事件
	         */
	        var myEvent = new CustomEvent('drag', {
	            detail: {
	                x: this.x(),
	                y: this.y(),
	                angle: _anchor.rotation()
	            }
	        });
	        this.on('dragmove', function (e) {
	            e.cancelBubble = true;
	            //自定义事件 ，返回拖拽后的坐标位置
	            myEvent.detail.x = this.x();
	            myEvent.detail.y = this.y();
	            myEvent.detail.angle = _anchor.rotation();
	            self.dispatchEvent(myEvent);
	        });
	        //角度调整
	        _drag_group_anchor.on('dragmove', function (e) {
	            e.cancelBubble = true;
	            let { x, y } = this.position();
	            let deg = 180 * Math.atan2(y, x) / Math.PI;
	            _drag_group_line.points([0, 0, x, y]);
	            _anchor.rotation(deg);
	            //自定义事件 ，返回拖拽后的坐标位置
	            myEvent.detail.x = self.x();
	            myEvent.detail.y = self.y();
	            myEvent.detail.angle = _anchor.rotation();
	            self.dispatchEvent(myEvent);
	        });
	        //loc_scope.moveToBottom()
	        //响应舞台缩放，固定相对画布缩放倍数
	        function scale_event() {
	            return __awaiter(this, void 0, void 0, function* () {
	                let scale = self._stage.scaleX();
	                self.scale({
	                    x: 1 / scale,
	                    y: 1 / scale
	                });
	                //放大固定倍数，缩小固定倍数怎样判定
	                self._scope.strokeWidth(0.1 / scale);
	                let s = scale;
	                if (scale > 8) {
	                    s = 8 * (8 / scale);
	                }
	                self._scope.scale({
	                    x: s,
	                    y: s
	                });
	            });
	        }
	        this._scale_event = scale_event;
	        //缩放结束
	        this._stage.addEventListener("scaleend setscale", function (e) {
	            e.cancelBubble = true;
	            scale_event();
	        });
	        this.location({ x: (typeof attrs.x) == 'number' ? attrs.x : 0, y: (typeof attrs.y) == 'number' ? attrs.y : 0, angle: (typeof attrs.angle) == 'number' ? attrs.angle : 0 });
	    }
	    /**
	     * @description 设置定位点是否可拖拽
	     * @param {boolean} param 是否可拖拽
	     * @override
	     * @example
	     * node.draggable(true) //可拖拽
	     * node.draggable(false) //不可拖拽
	     */
	    draggable(param) {
	        if (!this._drawstate) {
	            return;
	        }
	        if (!arguments.length) {
	            return super.draggable();
	        }
	        super.draggable(param);
	        this._drag_group.visible(param);
	        this._scope.visible(!param);
	        if (param) {
	            this.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e) {
	                e.cancelBubble = true; //阻止事件冒泡
	            });
	        }
	        else {
	            this.off("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom");
	        }
	        return super.draggable();
	    }
	    /**
	     * @description 更新定位点
	     * @param {number} x x轴坐标
	     * @param {number} y y轴坐标
	     * @param {number} angle 方向角度
	     *
	     * @example
	     * node.location({x,y,angle}) //get 返回坐标为相对父节点坐标位置 position
	     * let pos =  node.location() //set 设置坐标为相对父节点坐标位置 position
	     *
	     * @return  {x,y,angle} number
	     */
	    location(param) {
	        if (!this._drawstate) {
	            return;
	        }
	        if (!arguments.length) {
	            return {
	                x: this.x(),
	                y: this.y(),
	                angle: this._anchor.rotation()
	            };
	        }
	        this.position({ x: param.x, y: param.y });
	        let center = this.absolutePosition(); //圆心
	        let radian = param.angle * Math.PI / 180; //Math.atan2((pos.y-center.y), (pos.x-center.x)) // 弧度
	        let x = center.x + this._drag_group_scope.radius() * this._drag_group_scope.scaleX() * Math.cos(radian), y = center.y + this._drag_group_scope.radius() * this._drag_group_scope.scaleY() * Math.sin(radian);
	        this._drag_group_anchor.absolutePosition({ x, y });
	        let arPos = this._drag_group_anchor.position();
	        this._drag_group_line.points([0, 0, arPos.x, arPos.y]);
	        this._anchor.rotation(param.angle);
	        return {
	            x: this.x(),
	            y: this.y(),
	            angle: this._anchor.rotation()
	        };
	    }
	}
	/**
	 * 定位图标
	 * @param attrs.radius 定位点圆心半径尺寸 箭头跟随半径自适应大小
	 * @param attrs.circleFill 圆心填充颜色
	 * @param attrs.arrowFill 箭头填充颜色
	 * @param attrs.shadowColor 阴影颜色
	 * @param attrs.shadowBlur 阴影延伸尺寸
	 * @returns
	 */
	// 定位锚点绘制初始化图形组
	function anchor(attrs) {
	    let group = new konva_min.Group({
	        rotation: attrs.rotation
	    });
	    let circle = new konva_min.Circle({
	        id: "anchor_circle",
	        radius: attrs.radius,
	        fill: '#fff',
	        //strokeWidth: 0
	        shadowColor: attrs.themeColor || 'rgb(255, 0, 0)',
	        shadowBlur: 10,
	    });
	    // let ring = new Konva.Ring({ //外圈
	    //   id: "anchor_ring",
	    //   innerRadius: radius / 1.5,
	    //   outerRadius: radius,
	    //   fill: '#fff',
	    //   strokeWidth: 0.1,
	    //   shadowColor: 'rgba(255, 0, 0,0.7)', //'#0033FF',
	    //   shadowBlur: 10,
	    // });
	    let arrow = new konva_min.RegularPolygon({
	        id: "anchor_arrow",
	        // y: attrs.radius /2,
	        x: attrs.radius + 1,
	        sides: 3,
	        radius: attrs.radius - 1,
	        rotation: 90,
	        fill: attrs.themeColor || 'rgb(255, 0, 0)', //'#0033FF',
	        // shadowColor: 'rgba(255, 0, 0,1)', //'#0033FF',
	        // shadowBlur: 10,
	    });
	    group.add(arrow, circle);
	    return group;
	}

	/*
	 * @Author: wjz
	 * @Date: 2021-11-15 13:36:06
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-03-29 10:10:16
	 * @FilePath: /kmaps/src/Track.ts
	 */
	// * @param {number} width 绘制区域宽度 必传参数
	//  * @param {number} height 绘制区域高度 必传参数
	/**
	 * @description 轨迹路线图组
	 * @constructor
	 * @class
	 * @extends Konva.Group
	 *
	 * @param {number} pixelRatio 轨迹区域像素，尽量为偶数 毕传参数
	 
	 * @example
	 *
	 * let node = new Track() //参数详见konva.Group
	 */
	class Track extends konva_min.Line {
	    constructor(attrs) {
	        attrs["id"] = "Track";
	        attrs["globalCompositeOperation"] = 'source-over';
	        attrs['lineCap'] = "round";
	        super(attrs);
	        this._stage = window["_KMap"]["_Stage"]; //(window as any)._KMap_Stage
	    }
	    // _draw() {
	    //   const map = this._stage.findOne("#BaseMap")
	    //   if(map && map._state){ //图片绘制完成 创建缓冲画布并添加到主屏幕图组节点上
	    //     this.drawGraph()
	    //   }else{ //图片未绘制完成，将绘制方法添加至订阅器，等待图片绘制完成
	    //       window["_KMap"]["_BaseMap_unpdata"].push(this._asyncDrawGraph.bind(this))
	    //       this.visible(false)
	    //   }
	    // }
	    // async _asyncDrawGraph(){
	    //   this.drawGraph()
	    // }
	    // drawGraph(){
	    // }
	    //开始位置
	    moveTo(pos) {
	        this.points([pos.x, pos.y]);
	    }
	    //当前画笔位置
	    lineTo(pos) {
	        var newPoints = this.points().concat([pos.x, pos.y]);
	        // if(newPoints.length %10 == 0){
	        //   this.cache()
	        //   this.clearCache();
	        // }
	        this.points(newPoints);
	    }
	}

	/*
	 * @Author: wjz
	 * @Date: 2021-11-17 11:11:23
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-03-23 14:19:15
	 * @FilePath: /kmaps/src/Path.ts
	 */
	/**
	 * @description 地图路径绘制
	 * @constructor
	 * @class
	 * @param {JSON} attrs 参数详情查看https://konvajs.org/api/Konva.Line.html文档
	 * @example
	 *
	 * let node = new Path(attrs)
	 */
	class Path extends konva_min.Line {
	    constructor(attrs) {
	        attrs["bezier"] = true;
	        attrs["lineJoin"] = "round";
	        attrs["lineCap"] = "round";
	        super(attrs);
	    }
	}

	/*
	 * @Author: wjz
	 * @Date: 2022-02-09 14:26:02
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-05-30 20:07:35
	 * @FilePath: /kmaps/src/AnchorLine.ts
	 */
	var _AnchorLine_anchorCallBack;
	/**
	 * @description 带有拖拽锚点的 Line 允许闭合为多边形
	 * @param {Object} attrs 详情参数参考Konva.Circle
	 *
	 * @param {String} attrs.id id
	 * @param {String} attrs.name name
	 * @param {Array} attrs.points 坐标点数据
	 * @param {String} attrs.stroke 画笔颜色 仅初始化时可设置
	 * @param {Number} attrs.strokeWidth 画笔宽度 仅初始化时可设置
	 * @param {Number} attrs.hitStrokeWidth 点击识别范围 仅初始化时可设置
	 * @param {String} attrs.fill 填充颜色
	 * @param {Array} attrs.dash  虚线数组 详情参照konva.Line 仅初始化时可设置
	 * @param {Boolean} attrs.closed 是否闭合图形 仅初始化时可设置
	 * @param {Boolean} attrs.draggable 是否可拖拽
	 * @param {Boolean} attrs.anchor 是否绘制拖拽锚点 默认为true 仅初始化时可设置
	 * @param {Boolean} attrs.anchorVisible 拖拽锚点是否显示默认 true, anchor 为true时有效
	 * @param {Boolean} attrs.absoluteSize 绝对尺寸，与舞台一同缩放 默认true 仅初始化时可设置
	 * @param {Boolean} attrs.adsorb 是否开启锚点吸附
	 *
	 * @example
	 * let node = new KMaps.AnchorLine({...})
	 */
	class AnchorLine extends konva_min.Group {
	    constructor(attrs) {
	        attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true; //绝对尺寸，与舞台一同缩放
	        attrs["anchor"] === false ? null : attrs["anchor"] = true; //拖拽锚点
	        super(attrs);
	        _AnchorLine_anchorCallBack.set(this, (e) => { });
	        this._strokeWidth = attrs.strokeWidth || 1; //宽度默认为1
	        this._hitStrokeWidth = attrs.hitStrokeWidth;
	        if (attrs.draggable) {
	            this.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e) {
	                e.cancelBubble = true; //阻止事件冒泡
	            });
	        }
	        this._stage = window["_KMap"]["_Stage"]; //(window as any)._KMap_Stage
	        this._lineFun(attrs);
	        if (attrs['anchor'] !== false) {
	            attrs.points.forEach((_item, _index, _array) => {
	                this._circleFun({ x: _item[0], y: _item[1] }, _index);
	            });
	        }
	        //锚点拖拽吸附
	        if (this.attrs.adsorb) {
	            adsorb(this, this._stage);
	        }
	        let self = this;
	        // let hammer = new Hammer(self, { //绑定事件
	        //   domEvents: true,
	        //   recognizers: [
	        //     [Hammer["Press"], {
	        //       time: 500 //长按响应时间
	        //     }]
	        //   ]
	        // });
	        //缩放事件监听
	        this._stage.addEventListener("scaleend setscale", function (e) {
	            e.cancelBubble = true;
	            let scale = self._stage.scaleX();
	            if (self.attrs.absoluteSize) {
	                self._line.strokeWidth(self._strokeWidth / scale); //缩放边缘线宽度
	                if (!self.attrs.closed) {
	                    // self._line.strokeWidth(self._strokeWidth / scale) //缩放线宽度
	                    self._line.hitStrokeWidth(self._hitStrokeWidth / scale); //缩放点击识别范围
	                }
	            }
	            //获取拖拽锚点
	            let anchorArr = self.find("._drag_anchor");
	            for (let item of anchorArr) { //缩放锚点大小
	                item.scale({
	                    x: 1 / scale,
	                    y: 1 / scale
	                });
	            }
	        });
	    }
	    _lineFun(attrs) {
	        if (!attrs.points) {
	            return;
	        }
	        let scale = this._stage.scale();
	        // let rgb = attrs.stroke ? colorHextoRGBA(attrs.stroke, 0.5) : ""
	        // let _points = arrayConvert(attrs.points)
	        let config = JSON.parse(JSON.stringify(attrs));
	        let ats = Object.assign(config, {
	            id: `_line`,
	            name: "_line",
	            x: 0,
	            y: 0,
	            points: arrayConvert(config.points),
	            draggable: false,
	            strokeWidth: (config.strokeWidth || 1) / scale.x,
	        });
	        // console.log('object :>> ', ats);
	        let _line = new konva_min.Line(ats);
	        this.add(_line);
	        this._line = _line;
	        // this._line = new Proxy(_line, { //监听图片绘制变化，调用图形坐标重置
	        //   set: (target, propKey, value, receiver) => {
	        //     this._line.position({ x: 0, y: 0 })
	        //     return Reflect.set(target, propKey, value, receiver);
	        //   }
	        // })
	    }
	    /**
	     * @description 虚线参数设置
	     *
	     * @example
	     * 应用10像素长，间隔5像素的虚线描边
	     * line.dash([10, 5]);
	     * //应用由交替虚线组成的虚线描边
	     * //10像素长，20像素宽的线，还有点
	     * //半径为5px，相距20px
	     * line.dash([10, 20, 0.001, 20]);
	     */
	    dash(arr) {
	        this._line.dash(arr);
	        this.attrs.dash = arr;
	    }
	    _circleFun({ x, y }, index) {
	        let scale = this._stage.scale();
	        let self = this;
	        let _anchor = new konva_min.Circle({
	            id: `_drag_anchor-${index}`,
	            name: "_drag_anchor",
	            x, y,
	            scale: { x: 1 / scale.x, y: 1 / scale.y },
	            radius: 20,
	            fill: 'rgba(255,255,255,0.6)',
	            stroke: "rgba(0,200,100,1)",
	            strokeWidth: 2,
	            hitStrokeWidth: this.attrs.hitStrokeWidth,
	            visible: this.attrs.anchorVisible || false,
	            // visible: super.draggable() || false, //默认显示状态
	            draggable: this.attrs.anchorVisible || false,
	        });
	        this.add(_anchor);
	        if (index) {
	            this.findOne(`#_drag_anchor-${index - 1}`).stroke("#00aaff");
	        }
	        _anchor.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e) {
	            e.cancelBubble = true;
	            if (e.type == "dragmove") {
	                let points = []; //拖拽锚点当前坐标
	                let anchorArr = self.find("._drag_anchor");
	                for (let item of anchorArr) {
	                    let { x, y } = item.position();
	                    points.push(x, y);
	                }
	                self._line.points(points);
	                __classPrivateFieldGet(self, _AnchorLine_anchorCallBack).call(self, this);
	            }
	        });
	        return _anchor;
	    }
	    anchorChange(callback) {
	        __classPrivateFieldSet(this, _AnchorLine_anchorCallBack, callback);
	    }
	    /**
	     * @description 获取或设置图形可拖拽状态
	     * @override
	     * @param {boolean} param 可拖拽状态
	     */
	    draggable(param) {
	        if (!arguments.length) {
	            return super.draggable();
	        }
	        super.draggable(param);
	        // let anchorArr = this.find("._drag_anchor")
	        // for (let item of anchorArr) {
	        //   item.visible(param)
	        // }
	        //防止事件冒泡，提前阻止，拖拽关闭后 移除
	        if (param) {
	            this.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e) {
	                e.cancelBubble = true; //阻止事件冒泡
	            });
	        }
	        else {
	            this.off("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom");
	        }
	        return param;
	    }
	    /**
	     * @description 添加点，折线端点 拖拽锚点
	     * @param {Array} points 点坐标数组 [x,y] 一次只能添加一个点
	     * @returns {Object} this 返回更新后的对象本身
	     */
	    addPoints(points) {
	        //添加拖拽锚点
	        let anchor = super.find("._drag_anchor"); //锚点序号index
	        let pos = this.position();
	        if (this.attrs.anchor) {
	            this._circleFun({ x: points[0] - pos.x, y: points[1] - pos.y }, anchor.length);
	            if (this.attrs.adsorb) {
	                adsorb(this, this._stage); //锚点拖拽吸附
	            }
	        }
	        let line = this._line.points();
	        line.push(points[0] - pos.x, points[1] - pos.y);
	        this._line.points(line);
	        this.attrs.points = this.getPoints();
	        return this;
	    }
	    /**
	     * @description 移除点，线端点 拖拽锚点
	     * @param {Array} index 移除的目标点 数组下标位置 index
	     * @returns {Object} this 返回更新后的对象本身
	     */
	    removePoints(index) {
	        let anchor = super.findOne(`#_drag_anchor-${index}`);
	        //销毁目标锚点
	        if (anchor) {
	            anchor.destroy();
	        }
	        else {
	            return;
	        }
	        let points = this.getPoints(); //获取当前锚点坐标数据
	        // points.splice(index,1)
	        this._line.points(arrayConvert(points));
	        //获取需要移除的锚点对象
	        this.attrs.points = this.getPoints();
	        return this;
	    }
	    /**
	     * @description 锚点显示状态 anchor 为ture 可用
	     * @param {boolean} param 显示状态
	     * @returns {boolean} anchorVisible 锚点显示状态
	     *
	     */
	    anchorVisible(param) {
	        if (!arguments.length) {
	            return this.attrs.anchorVisible || false;
	        }
	        this.attrs.anchorVisible = param;
	        let anchorArr = this.find("._drag_anchor");
	        for (let item of anchorArr) {
	            item.visible(param);
	            item.draggable(param);
	            // if (param) {
	            //   item.on("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom", function (e: any) {
	            //     e.cancelBubble = true;//阻止事件冒泡
	            //   })
	            // } else {
	            //   item.off("dragstart.—custom dragmove.—custom dragend.—custom touchstart.—custom touchmove.—custom touchend.—custom")
	            // }
	        }
	        return param;
	    }
	    /**
	     * @description 获取当前图形的锚点坐标
	     * @returns 端点坐标 二维数组
	     * @example
	     * let points = node.getPoints() //[[10，10],[2020],...]
	     */
	    getPoints() {
	        return this.find("._drag_anchor").map(item => {
	            let { x, y } = item.getAbsolutePosition(this.getParent()); //相对父级节点的绝对位置
	            return [x, y];
	        });
	    }
	    /**
	     * @description 获取锚点数组，参数传入锚点对象 #id .class 不传默认返回所有拖拽锚点的数组
	     * @param {string} selector 选择器
	     * @returns {Array} anchor 节点对象
	     */
	    getAnchor(selector) {
	        if (selector) {
	            return this.findOne(selector);
	        }
	        return this.find("._drag_anchor");
	    }
	    /**
	     * @description 克隆对象
	     * @override
	     * @param {object} object json格式详情参考 Konva
	     * @returns 克隆后的节点
	     */
	    clone(object = {}) {
	        let points = this.getPoints(); //获取当前最新锚点坐标位置数组
	        let _obj = Object.assign({ points }, object); //与传入的参数合并，覆盖
	        var node = konva_min.Node.prototype.clone.call(this, _obj);
	        node.position({ x: 0, y: 0 });
	        return node;
	    }
	    /**
	     * @description 是否允许锚点吸附
	     * @param {boolean} param json格式详情参考 Konva
	     * @returns 克隆后的节点
	     */
	    adsorb(param) {
	        if (!arguments.length) {
	            return this.attrs.adsorb || false;
	        }
	        if (param && this.attrs.adsorb !== true) {
	            adsorb(this, this._stage); //锚点拖拽吸附
	            this.attrs.adsorb = param;
	        }
	        else if (param == false) {
	            //移除 拖拽结束事件 关闭吸附功能
	            for (let item of this.find("._drag_anchor")) {
	                item.off('dragend');
	            }
	            this.attrs.adsorb = param;
	        }
	        return param;
	    }
	}
	_AnchorLine_anchorCallBack = new WeakMap();

	/*
	 * @Author: wjz
	 * @Date: 2021-11-18 10:08:49
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-02-11 20:38:03
	 * @FilePath: /kmaps/src/Line.ts
	 */
	// interface attrs {
	//   id: string,
	//   points: [[number, number], [number, number]]
	//   color:string,
	//   strokeWidth?:number
	//   hitStrokeWidth?:number
	//   absoluteSize?:boolean
	// }
	/**
	 * @description  线绘制 基于Konv.Line 封装的可根据舞台缩放自动调整宽度的line类
	 * @constructor
	 * @class
	 * @extends Konva.Line
	 *
	 * @example
	 * let node = new Line(attrs)
	 */
	class Line extends konva_min.Line {
	    constructor(attrs) {
	        let _stage = window["_KMap"]["_Stage"]; //(window as any)._KMap_Stage
	        // let scale = _stage.scaleX()
	        attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true; //绝对尺寸，与舞台一同缩放
	        let points = attrs.points;
	        attrs.points = arrayConvert(points);
	        // console.log(attrs);
	        // let w = (attrs.strokeWidth|| 1 ) / _stage.scaleX()
	        let config = JSON.parse(JSON.stringify(attrs));
	        config.strokeWidth = (attrs.strokeWidth || 1) / _stage.scaleX();
	        super(config);
	        this._strokeWidth = attrs.strokeWidth || 1; //宽度默认为1
	        this._hitStrokeWidth = attrs.hitStrokeWidth;
	        let self = this;
	        _stage.addEventListener("scaleend setscale", function (e) {
	            e.cancelBubble = true;
	            scale_event();
	        });
	        function scale_event() {
	            return __awaiter(this, void 0, void 0, function* () {
	                let scale = _stage.scaleX();
	                if (attrs.absoluteSize) {
	                    self.strokeWidth(self._strokeWidth / scale);
	                    self.hitStrokeWidth(self._hitStrokeWidth / scale);
	                }
	            });
	        }
	    }
	}

	/*
	 * @Author: wjz
	 * @Date: 2021-11-22 16:45:13
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-03-23 15:59:51
	 * @FilePath: /kmaps/src/Circle.ts
	 */
	/**
	 * @description 圆图形
	 * @constructor
	 * @class
	 * @extends Konva.Circle
	 * @param {Object} attrs  详情参数参考Konva.Circle
	 * @param {number} attrs.x x轴坐标位置
	 * @param {number} attrs.y y轴坐标位置
	 * @param {number} attrs.radius 点的直径大小
	 * @param {number} attrs.fill 填充颜色
	 * @param {number} attrs.shadowBlur 阴影范围、可选参数
	 * @param {number} attrs.shadowColor 阴影颜色、可选参数
	 *
	 * @example
	 * let  node = new Circle(attrs)
	 */
	class Circle extends konva_min.Circle {
	    constructor(attrs) {
	        let _stage = window["_KMap"]["_Stage"]; //(window as any)._KMap_Stage
	        attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true; //绝对尺寸，不与舞台一同缩放
	        // let config = JSON.parse(JSON.stringify(attrs))
	        super(attrs);
	        let self = this;
	        scale_event();
	        _stage.addEventListener("scaleend setscale", function (e) {
	            e.cancelBubble = true;
	            scale_event();
	        });
	        function scale_event() {
	            return __awaiter(this, void 0, void 0, function* () {
	                if (attrs.absoluteSize) {
	                    let scale = _stage.scaleX();
	                    self.scale({
	                        x: 1 / scale,
	                        y: 1 / scale
	                    });
	                }
	            });
	        }
	    }
	}

	/*
	 * @Author: wjz
	 * @Date: 2021-12-30 14:00:48
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-01-04 10:23:50
	 * @FilePath: /kmaps/src/Text.ts
	 */
	/**
	 * @description 文本绘制 参数及方法详情参考 https://konvajs.org/api/Konva.Text.html
	 */
	class Text extends konva_min.Text {
	    constructor(attrs) {
	        attrs["absoluteSize"] === false ? null : attrs["absoluteSize"] = true; //绝对尺寸，不与舞台一同缩放
	        super(attrs);
	        let _stage = window["_KMap"]["_Stage"]; //(window as any)._KMap_Stage
	        let self = this;
	        _stage.addEventListener("scaleend setscale", function (e) {
	            e.cancelBubble = true;
	            if (attrs.absoluteSize) {
	                scale_event();
	            }
	        });
	        scale_event();
	        function scale_event() {
	            return __awaiter(this, void 0, void 0, function* () {
	                let scale = _stage.scaleX();
	                self.scale({
	                    x: 1 / scale,
	                    y: 1 / scale
	                });
	            });
	        }
	    }
	}

	var _Magnifying_viewBox;
	/**
	 * @description 局部放大镜，放大手指下操作位置
	 * @exports Konva.Group
	 * @param {Object} attrs
	 */
	class Magnifying {
	    constructor(attrs) {
	        _Magnifying_viewBox.set(this, null);
	        // this.#viewBox = 
	    }
	}
	_Magnifying_viewBox = new WeakMap();

	/*
	 * @Author: wjz
	 * @Date: 2021-10-21 15:30:30
	 * @LastEditors: wjz
	 * @LastEditTime: 2022-04-18 16:21:28
	 * @FilePath: /kmaps/src/index.ts
	 */
	window["_KMap"] = {};
	window["_KMap"]["_BaseMap_unpdata"] = []; //地图图片更新
	var index = {
	    Konva: konva_min,
	    // Hammer,
	    Util: {
	        wheelEvent,
	        colorHextoRGBA,
	        adsorb
	    },
	    Stage,
	    Layer,
	    Group,
	    BaseMap,
	    Grid,
	    Location,
	    Track,
	    Path,
	    AnchorLine,
	    Line,
	    // Polygon,
	    Circle,
	    Text,
	    Magnifying,
	    versions: "1.4.0"
	};

	return index;

}));
