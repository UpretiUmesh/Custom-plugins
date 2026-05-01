(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function tg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mu={exports:{}},ba={},Eu={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function E0(){if(Bp)return lt;Bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=S&&F[S]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function v(F,se,Ue){this.props=F,this.context=se,this.refs=A,this.updater=Ue||M}v.prototype.isReactComponent={},v.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=v.prototype;function L(F,se,Ue){this.props=F,this.context=se,this.refs=A,this.updater=Ue||M}var P=L.prototype=new _;P.constructor=L,T(P,v.prototype),P.isPureReactComponent=!0;var N=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function k(F,se,Ue){var Q,ue={},ye=null,Se=null;if(se!=null)for(Q in se.ref!==void 0&&(Se=se.ref),se.key!==void 0&&(ye=""+se.key),se)G.call(se,Q)&&!U.hasOwnProperty(Q)&&(ue[Q]=se[Q]);var be=arguments.length-2;if(be===1)ue.children=Ue;else if(1<be){for(var Pe=Array(be),et=0;et<be;et++)Pe[et]=arguments[et+2];ue.children=Pe}if(F&&F.defaultProps)for(Q in be=F.defaultProps,be)ue[Q]===void 0&&(ue[Q]=be[Q]);return{$$typeof:s,type:F,key:ye,ref:Se,props:ue,_owner:O.current}}function te(F,se){return{$$typeof:s,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function E(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function R(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ue){return se[Ue]})}var $=/\/+/g;function ee(F,se){return typeof F=="object"&&F!==null&&F.key!=null?R(""+F.key):se.toString(36)}function le(F,se,Ue,Q,ue){var ye=typeof F;(ye==="undefined"||ye==="boolean")&&(F=null);var Se=!1;if(F===null)Se=!0;else switch(ye){case"string":case"number":Se=!0;break;case"object":switch(F.$$typeof){case s:case e:Se=!0}}if(Se)return Se=F,ue=ue(Se),F=Q===""?"."+ee(Se,0):Q,N(ue)?(Ue="",F!=null&&(Ue=F.replace($,"$&/")+"/"),le(ue,se,Ue,"",function(et){return et})):ue!=null&&(E(ue)&&(ue=te(ue,Ue+(!ue.key||Se&&Se.key===ue.key?"":(""+ue.key).replace($,"$&/")+"/")+F)),se.push(ue)),1;if(Se=0,Q=Q===""?".":Q+":",N(F))for(var be=0;be<F.length;be++){ye=F[be];var Pe=Q+ee(ye,be);Se+=le(ye,se,Ue,Pe,ue)}else if(Pe=y(F),typeof Pe=="function")for(F=Pe.call(F),be=0;!(ye=F.next()).done;)ye=ye.value,Pe=Q+ee(ye,be++),Se+=le(ye,se,Ue,Pe,ue);else if(ye==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return Se}function me(F,se,Ue){if(F==null)return F;var Q=[],ue=0;return le(F,Q,"","",function(ye){return se.call(Ue,ye,ue++)}),Q}function re(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(Ue){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ue)},function(Ue){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ue)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var ce={current:null},H={transition:null},de={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return lt.Children={map:me,forEach:function(F,se,Ue){me(F,function(){se.apply(this,arguments)},Ue)},count:function(F){var se=0;return me(F,function(){se++}),se},toArray:function(F){return me(F,function(se){return se})||[]},only:function(F){if(!E(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},lt.Component=v,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=L,lt.StrictMode=r,lt.Suspense=h,lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,lt.act=oe,lt.cloneElement=function(F,se,Ue){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Q=T({},F.props),ue=F.key,ye=F.ref,Se=F._owner;if(se!=null){if(se.ref!==void 0&&(ye=se.ref,Se=O.current),se.key!==void 0&&(ue=""+se.key),F.type&&F.type.defaultProps)var be=F.type.defaultProps;for(Pe in se)G.call(se,Pe)&&!U.hasOwnProperty(Pe)&&(Q[Pe]=se[Pe]===void 0&&be!==void 0?be[Pe]:se[Pe])}var Pe=arguments.length-2;if(Pe===1)Q.children=Ue;else if(1<Pe){be=Array(Pe);for(var et=0;et<Pe;et++)be[et]=arguments[et+2];Q.children=be}return{$$typeof:s,type:F.type,key:ue,ref:ye,props:Q,_owner:Se}},lt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},lt.createElement=k,lt.createFactory=function(F){var se=k.bind(null,F);return se.type=F,se},lt.createRef=function(){return{current:null}},lt.forwardRef=function(F){return{$$typeof:f,render:F}},lt.isValidElement=E,lt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:re}},lt.memo=function(F,se){return{$$typeof:m,type:F,compare:se===void 0?null:se}},lt.startTransition=function(F){var se=H.transition;H.transition={};try{F()}finally{H.transition=se}},lt.unstable_act=oe,lt.useCallback=function(F,se){return ce.current.useCallback(F,se)},lt.useContext=function(F){return ce.current.useContext(F)},lt.useDebugValue=function(){},lt.useDeferredValue=function(F){return ce.current.useDeferredValue(F)},lt.useEffect=function(F,se){return ce.current.useEffect(F,se)},lt.useId=function(){return ce.current.useId()},lt.useImperativeHandle=function(F,se,Ue){return ce.current.useImperativeHandle(F,se,Ue)},lt.useInsertionEffect=function(F,se){return ce.current.useInsertionEffect(F,se)},lt.useLayoutEffect=function(F,se){return ce.current.useLayoutEffect(F,se)},lt.useMemo=function(F,se){return ce.current.useMemo(F,se)},lt.useReducer=function(F,se,Ue){return ce.current.useReducer(F,se,Ue)},lt.useRef=function(F){return ce.current.useRef(F)},lt.useState=function(F){return ce.current.useState(F)},lt.useSyncExternalStore=function(F,se,Ue){return ce.current.useSyncExternalStore(F,se,Ue)},lt.useTransition=function(){return ce.current.useTransition()},lt.version="18.3.1",lt}var Hp;function Yd(){return Hp||(Hp=1,Eu.exports=E0()),Eu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function w0(){if(Vp)return ba;Vp=1;var s=Yd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var x,S={},y=null,M=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(M=h.ref);for(x in h)r.call(h,x)&&!c.hasOwnProperty(x)&&(S[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)S[x]===void 0&&(S[x]=h[x]);return{$$typeof:e,type:f,key:y,ref:M,props:S,_owner:o.current}}return ba.Fragment=n,ba.jsx=u,ba.jsxs=u,ba}var Gp;function T0(){return Gp||(Gp=1,Mu.exports=w0()),Mu.exports}var g=T0(),it=Yd();const A0=tg(it);var Qo={},wu={exports:{}},Tn={},Tu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function C0(){return jp||(jp=1,(function(s){function e(H,de){var oe=H.length;H.push(de);e:for(;0<oe;){var F=oe-1>>>1,se=H[F];if(0<o(se,de))H[F]=de,H[oe]=se,oe=F;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var de=H[0],oe=H.pop();if(oe!==de){H[0]=oe;e:for(var F=0,se=H.length,Ue=se>>>1;F<Ue;){var Q=2*(F+1)-1,ue=H[Q],ye=Q+1,Se=H[ye];if(0>o(ue,oe))ye<se&&0>o(Se,ue)?(H[F]=Se,H[ye]=oe,F=ye):(H[F]=ue,H[Q]=oe,F=Q);else if(ye<se&&0>o(Se,oe))H[F]=Se,H[ye]=oe,F=ye;else break e}}return de}function o(H,de){var oe=H.sortIndex-de.sortIndex;return oe!==0?oe:H.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],x=1,S=null,y=3,M=!1,T=!1,A=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=H)r(m),de.sortIndex=de.expirationTime,e(h,de);else break;de=n(m)}}function N(H){if(A=!1,P(H),!T)if(n(h)!==null)T=!0,re(G);else{var de=n(m);de!==null&&ce(N,de.startTime-H)}}function G(H,de){T=!1,A&&(A=!1,_(k),k=-1),M=!0;var oe=y;try{for(P(de),S=n(h);S!==null&&(!(S.expirationTime>de)||H&&!R());){var F=S.callback;if(typeof F=="function"){S.callback=null,y=S.priorityLevel;var se=F(S.expirationTime<=de);de=s.unstable_now(),typeof se=="function"?S.callback=se:S===n(h)&&r(h),P(de)}else r(h);S=n(h)}if(S!==null)var Ue=!0;else{var Q=n(m);Q!==null&&ce(N,Q.startTime-de),Ue=!1}return Ue}finally{S=null,y=oe,M=!1}}var O=!1,U=null,k=-1,te=5,E=-1;function R(){return!(s.unstable_now()-E<te)}function $(){if(U!==null){var H=s.unstable_now();E=H;var de=!0;try{de=U(!0,H)}finally{de?ee():(O=!1,U=null)}}else O=!1}var ee;if(typeof L=="function")ee=function(){L($)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=$,ee=function(){me.postMessage(null)}}else ee=function(){v($,0)};function re(H){U=H,O||(O=!0,ee())}function ce(H,de){k=v(function(){H(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,re(G))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(H){switch(y){case 1:case 2:case 3:var de=3;break;default:de=y}var oe=y;y=de;try{return H()}finally{y=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,de){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=y;y=H;try{return de()}finally{y=oe}},s.unstable_scheduleCallback=function(H,de,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,H){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,H={id:x++,callback:de,priorityLevel:H,startTime:oe,expirationTime:se,sortIndex:-1},oe>F?(H.sortIndex=oe,e(m,H),n(h)===null&&H===n(m)&&(A?(_(k),k=-1):A=!0,ce(N,oe-F))):(H.sortIndex=se,e(h,H),T||M||(T=!0,re(G))),H},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(H){var de=y;return function(){var oe=y;y=de;try{return H.apply(this,arguments)}finally{y=oe}}}})(Au)),Au}var Wp;function R0(){return Wp||(Wp=1,Tu.exports=C0()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function b0(){if(Xp)return Tn;Xp=1;var s=Yd(),e=R0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function y(t){return h.call(S,t)?!0:h.call(x,t)?!1:m.test(t)?S[t]=!0:(x[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,a,l,d,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,L);v[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,L);v[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,L);v[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,a,l){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,l)&&(a=null),l||d===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,F;function se(t){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Ue=!1;function Q(t,i){if(!t||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),p=l.stack.split(`
`),w=d.length-1,I=p.length-1;1<=w&&0<=I&&d[w]!==p[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==p[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==p[I]){var z=`
`+d[w].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=w&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?se(t):""}function ue(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case O:return"Portal";case te:return"Profiler";case k:return"StrictMode";case ee:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case $:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t){var i=Pe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function _t(t){t._valueTracker||(t._valueTracker=et(t))}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Pe(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function B(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rn(t,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function ct(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Ke(t,i){mt(t,i);var a=be(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(t,i.type,a):i.hasOwnProperty("defaultValue")&&Qe(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ct(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Qe(t,i,a){(i!=="number"||B(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var D=Array.isArray;function C(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Z(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function he(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(D(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:be(a)}}function _e(t,i){var a=be(i.value),l=be(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function fe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,gt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function Je(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function ze(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=Je(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var ft=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(t,i){if(i){if(ft[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function wt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j=null;function Le(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ae=null,pe=null,Ce=null;function De(t){if(t=pa(t)){if(typeof ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ho(i),ae(t.stateNode,t.type,i))}}function ht(t){pe?Ce?Ce.push(t):Ce=[t]:pe=t}function zt(){if(pe){var t=pe,i=Ce;if(Ce=pe=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function sn(t,i){return t(i)}function vt(){}var Zt=!1;function Hn(t,i,a){if(Zt)return t(i,a);Zt=!0;try{return sn(t,i,a)}finally{Zt=!1,(pe!==null||Ce!==null)&&(vt(),zt())}}function zi(t,i){var a=t.stateNode;if(a===null)return null;var l=ho(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var qr=!1;if(f)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{qr=!1}function $s(t,i,a,l,d,p,w,I,z){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(ve){this.onError(ve)}}var Bi=!1,xr=null,_i=!1,Yr=null,$r={onError:function(t){Bi=!0,xr=t}};function qa(t,i,a,l,d,p,w,I,z){Bi=!1,xr=null,$s.apply($r,arguments)}function Ya(t,i,a,l,d,p,w,I,z){if(qa.apply(this,arguments),Bi){if(Bi){var ie=xr;Bi=!1,xr=null}else throw Error(n(198));_i||(_i=!0,Yr=ie)}}function xi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function $a(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ka(t){if(xi(t)!==t)throw Error(n(188))}function b(t){var i=t.alternate;if(!i){if(i=xi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ka(d),t;if(p===l)return Ka(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=p;else{for(var w=!1,I=d.child;I;){if(I===a){w=!0,a=d,l=p;break}if(I===l){w=!0,l=d,a=p;break}I=I.sibling}if(!w){for(I=p.child;I;){if(I===a){w=!0,a=p,l=d;break}if(I===l){w=!0,l=p,a=d;break}I=I.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function W(t){return t=b(t),t!==null?J(t):null}function J(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=J(t);if(i!==null)return i;t=t.sibling}return null}var ne=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,we=e.unstable_shouldYield,Ne=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,$e=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,je=e.unstable_NormalPriority,Et=e.unstable_LowPriority,Rt=e.unstable_IdlePriority,Pt=null,Ft=null;function yt(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Pt,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Nn,Xt=Math.log,St=Math.LN2;function Nn(t){return t>>>=0,t===0?32:31-(Xt(t)/St|0)|0}var Zn=64,Qt=4194304;function yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,w=a&268435455;if(w!==0){var I=w&~d;I!==0?l=yi(I):(p&=w,p!==0&&(l=yi(p)))}else w=a&~d,w!==0?l=yi(w):p!==0&&(l=yi(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Oe(i),d=1<<a,l|=t[a],i&=~d;return l}function ui(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ks(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-Oe(p),I=1<<w,z=d[w];z===-1?((I&a)===0||(I&l)!==0)&&(d[w]=ui(I,i)):z<=i&&(t.expiredLanes|=I),p&=~I}}function ln(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kr(){var t=Zn;return Zn<<=1,(Zn&4194240)===0&&(Zn=64),t}function Zs(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Hi(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=a}function jg(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Oe(a),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~p}}function Wl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Oe(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var At=0;function _f(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var xf,Xl,yf,Sf,Mf,ql=!1,Za=[],Vi=null,Gi=null,ji=null,Qs=new Map,Js=new Map,Wi=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function ea(t,i,a,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=pa(i),i!==null&&Xl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Xg(t,i,a,l,d){switch(i){case"focusin":return Vi=ea(Vi,t,i,a,l,d),!0;case"dragenter":return Gi=ea(Gi,t,i,a,l,d),!0;case"mouseover":return ji=ea(ji,t,i,a,l,d),!0;case"pointerover":var p=d.pointerId;return Qs.set(p,ea(Qs.get(p)||null,t,i,a,l,d)),!0;case"gotpointercapture":return p=d.pointerId,Js.set(p,ea(Js.get(p)||null,t,i,a,l,d)),!0}return!1}function wf(t){var i=yr(t.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=$a(a),i!==null){t.blockedOn=i,Mf(t.priority,function(){yf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=$l(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);j=l,a.target.dispatchEvent(l),j=null}else return i=pa(a),i!==null&&Xl(i),t.blockedOn=a,!1;i.shift()}return!0}function Tf(t,i,a){Qa(t)&&a.delete(i)}function qg(){ql=!1,Vi!==null&&Qa(Vi)&&(Vi=null),Gi!==null&&Qa(Gi)&&(Gi=null),ji!==null&&Qa(ji)&&(ji=null),Qs.forEach(Tf),Js.forEach(Tf)}function ta(t,i){t.blockedOn===i&&(t.blockedOn=null,ql||(ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qg)))}function na(t){function i(d){return ta(d,t)}if(0<Za.length){ta(Za[0],t);for(var a=1;a<Za.length;a++){var l=Za[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&ta(Vi,t),Gi!==null&&ta(Gi,t),ji!==null&&ta(ji,t),Qs.forEach(i),Js.forEach(i),a=0;a<Wi.length;a++)l=Wi[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wi.length&&(a=Wi[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&Wi.shift()}var Zr=N.ReactCurrentBatchConfig,Ja=!0;function Yg(t,i,a,l){var d=At,p=Zr.transition;Zr.transition=null;try{At=1,Yl(t,i,a,l)}finally{At=d,Zr.transition=p}}function $g(t,i,a,l){var d=At,p=Zr.transition;Zr.transition=null;try{At=4,Yl(t,i,a,l)}finally{At=d,Zr.transition=p}}function Yl(t,i,a,l){if(Ja){var d=$l(t,i,a,l);if(d===null)fc(t,i,l,eo,a),Ef(t,l);else if(Xg(d,t,i,a,l))l.stopPropagation();else if(Ef(t,l),i&4&&-1<Wg.indexOf(t)){for(;d!==null;){var p=pa(d);if(p!==null&&xf(p),p=$l(t,i,a,l),p===null&&fc(t,i,l,eo,a),p===d)break;d=p}d!==null&&l.stopPropagation()}else fc(t,i,l,null,a)}}var eo=null;function $l(t,i,a,l){if(eo=null,t=Le(l),t=yr(t),t!==null)if(i=xi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=$a(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return eo=t,null}function Af(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case $e:return 1;case Ze:return 4;case je:case Et:return 16;case Rt:return 536870912;default:return 16}default:return 16}}var Xi=null,Kl=null,to=null;function Cf(){if(to)return to;var t,i=Kl,a=i.length,l,d="value"in Xi?Xi.value:Xi.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===d[p-l];l++);return to=d.slice(t,1<l?1-l:void 0)}function no(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function Rf(){return!1}function Dn(t){function i(a,l,d,p,w){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?io:Rf,this.isPropagationStopped=Rf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Dn(Qr),ia=oe({},Qr,{view:0,detail:0}),Kg=Dn(ia),Ql,Jl,ra,ro=oe({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Ql=t.screenX-ra.screenX,Jl=t.screenY-ra.screenY):Jl=Ql=0,ra=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),bf=Dn(ro),Zg=oe({},ro,{dataTransfer:0}),Qg=Dn(Zg),Jg=oe({},ia,{relatedTarget:0}),ec=Dn(Jg),ev=oe({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=Dn(ev),nv=oe({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=Dn(nv),rv=oe({},Qr,{data:0}),Pf=Dn(rv),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ov[t])?!!i[t]:!1}function tc(){return lv}var cv=oe({},ia,{key:function(t){if(t.key){var i=sv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=no(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(t){return t.type==="keypress"?no(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?no(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uv=Dn(cv),dv=oe({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=Dn(dv),fv=oe({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),hv=Dn(fv),pv=oe({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=Dn(pv),gv=oe({},ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=Dn(gv),_v=[9,13,27,32],nc=f&&"CompositionEvent"in window,sa=null;f&&"documentMode"in document&&(sa=document.documentMode);var xv=f&&"TextEvent"in window&&!sa,Nf=f&&(!nc||sa&&8<sa&&11>=sa),Df=" ",If=!1;function Uf(t,i){switch(t){case"keyup":return _v.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function yv(t,i){switch(t){case"compositionend":return Ff(i);case"keypress":return i.which!==32?null:(If=!0,Df);case"textInput":return t=i.data,t===Df&&If?null:t;default:return null}}function Sv(t,i){if(Jr)return t==="compositionend"||!nc&&Uf(t,i)?(t=Cf(),to=Kl=Xi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Nf&&i.locale!=="ko"?null:i.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Mv[t.type]:i==="textarea"}function Of(t,i,a,l){ht(l),i=co(i,"onChange"),0<i.length&&(a=new Zl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var aa=null,oa=null;function Ev(t){nh(t,0)}function so(t){var i=rs(t);if(dt(i))return t}function wv(t,i){if(t==="change")return i}var zf=!1;if(f){var ic;if(f){var rc="oninput"in document;if(!rc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),rc=typeof Bf.oninput=="function"}ic=rc}else ic=!1;zf=ic&&(!document.documentMode||9<document.documentMode)}function Hf(){aa&&(aa.detachEvent("onpropertychange",Vf),oa=aa=null)}function Vf(t){if(t.propertyName==="value"&&so(oa)){var i=[];Of(i,oa,t,Le(t)),Hn(Ev,i)}}function Tv(t,i,a){t==="focusin"?(Hf(),aa=i,oa=a,aa.attachEvent("onpropertychange",Vf)):t==="focusout"&&Hf()}function Av(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return so(oa)}function Cv(t,i){if(t==="click")return so(i)}function Rv(t,i){if(t==="input"||t==="change")return so(i)}function bv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:bv;function la(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!h.call(i,d)||!Qn(t[d],i[d]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jf(t,i){var a=Gf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gf(a)}}function Wf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Wf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Xf(){for(var t=window,i=B();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=B(t.document)}return i}function sc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Pv(t){var i=Xf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wf(a.ownerDocument.documentElement,a)){if(l!==null&&sc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=jf(a,p);var w=jf(a,l);d&&w&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lv=f&&"documentMode"in document&&11>=document.documentMode,es=null,ac=null,ca=null,oc=!1;function qf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oc||es==null||es!==B(l)||(l=es,"selectionStart"in l&&sc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ca&&la(ca,l)||(ca=l,l=co(ac,"onSelect"),0<l.length&&(i=new Zl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=es)))}function ao(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ts={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},lc={},Yf={};f&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function oo(t){if(lc[t])return lc[t];if(!ts[t])return t;var i=ts[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Yf)return lc[t]=i[a];return t}var $f=oo("animationend"),Kf=oo("animationiteration"),Zf=oo("animationstart"),Qf=oo("transitionend"),Jf=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){Jf.set(t,i),c(i,[t])}for(var cc=0;cc<eh.length;cc++){var uc=eh[cc],Nv=uc.toLowerCase(),Dv=uc[0].toUpperCase()+uc.slice(1);qi(Nv,"on"+Dv)}qi($f,"onAnimationEnd"),qi(Kf,"onAnimationIteration"),qi(Zf,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(Qf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function th(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Ya(l,i,void 0,t),t.currentTarget=null}function nh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var I=l[w],z=I.instance,ie=I.currentTarget;if(I=I.listener,z!==p&&d.isPropagationStopped())break e;th(d,I,ie),p=z}else for(w=0;w<l.length;w++){if(I=l[w],z=I.instance,ie=I.currentTarget,I=I.listener,z!==p&&d.isPropagationStopped())break e;th(d,I,ie),p=z}}}if(_i)throw t=Yr,_i=!1,Yr=null,t}function Dt(t,i){var a=i[_c];a===void 0&&(a=i[_c]=new Set);var l=t+"__bubble";a.has(l)||(ih(i,t,2,!1),a.add(l))}function dc(t,i,a){var l=0;i&&(l|=4),ih(a,t,l,i)}var lo="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[lo]){t[lo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Iv.has(a)||dc(a,!1,t),dc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[lo]||(i[lo]=!0,dc("selectionchange",!1,i))}}function ih(t,i,a,l){switch(Af(i)){case 1:var d=Yg;break;case 4:d=$g;break;default:d=Yl}a=d.bind(null,i,a,t),d=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function fc(t,i,a,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=l.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;w=w.return}for(;I!==null;){if(w=yr(I),w===null)return;if(z=w.tag,z===5||z===6){l=p=w;continue e}I=I.parentNode}}l=l.return}Hn(function(){var ie=p,ve=Le(a),xe=[];e:{var ge=Jf.get(t);if(ge!==void 0){var Ie=Zl,He=t;switch(t){case"keypress":if(no(a)===0)break e;case"keydown":case"keyup":Ie=uv;break;case"focusin":He="focus",Ie=ec;break;case"focusout":He="blur",Ie=ec;break;case"beforeblur":case"afterblur":Ie=ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=hv;break;case $f:case Kf:case Zf:Ie=tv;break;case Qf:Ie=mv;break;case"scroll":Ie=Kg;break;case"wheel":Ie=vv;break;case"copy":case"cut":case"paste":Ie=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Lf}var Ve=(i&4)!==0,Gt=!Ve&&t==="scroll",Y=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var V=ie,K;V!==null;){K=V;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=zi(V,Y),Ee!=null&&Ve.push(fa(V,Ee,K)))),Gt)break;V=V.return}0<Ve.length&&(ge=new Ie(ge,He,null,a,ve),xe.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&a!==j&&(He=a.relatedTarget||a.fromElement)&&(yr(He)||He[Si]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(He=a.relatedTarget||a.toElement,Ie=ie,He=He?yr(He):null,He!==null&&(Gt=xi(He),He!==Gt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=ie),Ie!==He)){if(Ve=bf,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=Lf,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),Gt=Ie==null?ge:rs(Ie),K=He==null?ge:rs(He),ge=new Ve(Ee,V+"leave",Ie,a,ve),ge.target=Gt,ge.relatedTarget=K,Ee=null,yr(ve)===ie&&(Ve=new Ve(Y,V+"enter",He,a,ve),Ve.target=K,Ve.relatedTarget=Gt,Ee=Ve),Gt=Ee,Ie&&He)t:{for(Ve=Ie,Y=He,V=0,K=Ve;K;K=ns(K))V++;for(K=0,Ee=Y;Ee;Ee=ns(Ee))K++;for(;0<V-K;)Ve=ns(Ve),V--;for(;0<K-V;)Y=ns(Y),K--;for(;V--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=ns(Ve),Y=ns(Y)}Ve=null}else Ve=null;Ie!==null&&rh(xe,ge,Ie,Ve,!1),He!==null&&Gt!==null&&rh(xe,Gt,He,Ve,!0)}}e:{if(ge=ie?rs(ie):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var We=wv;else if(kf(ge))if(zf)We=Rv;else{We=Av;var qe=Tv}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=Cv);if(We&&(We=We(t,ie))){Of(xe,We,a,ve);break e}qe&&qe(t,ge,ie),t==="focusout"&&(qe=ge._wrapperState)&&qe.controlled&&ge.type==="number"&&Qe(ge,"number",ge.value)}switch(qe=ie?rs(ie):window,t){case"focusin":(kf(qe)||qe.contentEditable==="true")&&(es=qe,ac=ie,ca=null);break;case"focusout":ca=ac=es=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,qf(xe,a,ve);break;case"selectionchange":if(Lv)break;case"keydown":case"keyup":qf(xe,a,ve)}var Ye;if(nc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Jr?Uf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Nf&&a.locale!=="ko"&&(Jr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Jr&&(Ye=Cf()):(Xi=ve,Kl="value"in Xi?Xi.value:Xi.textContent,Jr=!0)),qe=co(ie,nt),0<qe.length&&(nt=new Pf(nt,t,null,a,ve),xe.push({event:nt,listeners:qe}),Ye?nt.data=Ye:(Ye=Ff(a),Ye!==null&&(nt.data=Ye)))),(Ye=xv?yv(t,a):Sv(t,a))&&(ie=co(ie,"onBeforeInput"),0<ie.length&&(ve=new Pf("onBeforeInput","beforeinput",null,a,ve),xe.push({event:ve,listeners:ie}),ve.data=Ye))}nh(xe,i)})}function fa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function co(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=zi(t,a),p!=null&&l.unshift(fa(t,p,d)),p=zi(t,i),p!=null&&l.push(fa(t,p,d))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,i,a,l,d){for(var p=i._reactName,w=[];a!==null&&a!==l;){var I=a,z=I.alternate,ie=I.stateNode;if(z!==null&&z===l)break;I.tag===5&&ie!==null&&(I=ie,d?(z=zi(a,p),z!=null&&w.unshift(fa(a,z,I))):d||(z=zi(a,p),z!=null&&w.push(fa(a,z,I)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var Uv=/\r\n?/g,Fv=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(Uv,`
`).replace(Fv,"")}function uo(t,i,a){if(i=sh(i),sh(t)!==i&&a)throw Error(n(425))}function fo(){}var hc=null,pc=null;function mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(t){return ah.resolve(null).then(t).catch(zv)}:gc;function zv(t){setTimeout(function(){throw t})}function vc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),na(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);na(i)}function Yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function oh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),di="__reactFiber$"+is,ha="__reactProps$"+is,Si="__reactContainer$"+is,_c="__reactEvents$"+is,Bv="__reactListeners$"+is,Hv="__reactHandles$"+is;function yr(t){var i=t[di];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Si]||a[di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=oh(t);t!==null;){if(a=t[di])return a;t=oh(t)}return i}t=a,a=t.parentNode}return null}function pa(t){return t=t[di]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ho(t){return t[ha]||null}var xc=[],ss=-1;function $i(t){return{current:t}}function It(t){0>ss||(t.current=xc[ss],xc[ss]=null,ss--)}function Nt(t,i){ss++,xc[ss]=t.current,t.current=i}var Ki={},cn=$i(Ki),yn=$i(!1),Sr=Ki;function as(t,i){var a=t.type.contextTypes;if(!a)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Sn(t){return t=t.childContextTypes,t!=null}function po(){It(yn),It(cn)}function lh(t,i,a){if(cn.current!==Ki)throw Error(n(168));Nt(cn,i),Nt(yn,a)}function ch(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,Se(t)||"Unknown",d));return oe({},a,l)}function mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Sr=cn.current,Nt(cn,t),Nt(yn,yn.current),!0}function uh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=ch(t,i,Sr),l.__reactInternalMemoizedMergedChildContext=t,It(yn),It(cn),Nt(cn,t)):It(yn),Nt(yn,a)}var Mi=null,go=!1,yc=!1;function dh(t){Mi===null?Mi=[t]:Mi.push(t)}function Vv(t){go=!0,dh(t)}function Zi(){if(!yc&&Mi!==null){yc=!0;var t=0,i=At;try{var a=Mi;for(At=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Mi=null,go=!1}catch(d){throw Mi!==null&&(Mi=Mi.slice(t+1)),ne($e,Zi),d}finally{At=i,yc=!1}}return null}var os=[],ls=0,vo=null,_o=0,Vn=[],Gn=0,Mr=null,Ei=1,wi="";function Er(t,i){os[ls++]=_o,os[ls++]=vo,vo=t,_o=i}function fh(t,i,a){Vn[Gn++]=Ei,Vn[Gn++]=wi,Vn[Gn++]=Mr,Mr=t;var l=Ei;t=wi;var d=32-Oe(l)-1;l&=~(1<<d),a+=1;var p=32-Oe(i)+d;if(30<p){var w=d-d%5;p=(l&(1<<w)-1).toString(32),l>>=w,d-=w,Ei=1<<32-Oe(i)+d|a<<d|l,wi=p+t}else Ei=1<<p|a<<d|l,wi=t}function Sc(t){t.return!==null&&(Er(t,1),fh(t,1,0))}function Mc(t){for(;t===vo;)vo=os[--ls],os[ls]=null,_o=os[--ls],os[ls]=null;for(;t===Mr;)Mr=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null,Ei=Vn[--Gn],Vn[Gn]=null}var In=null,Un=null,kt=!1,Jn=null;function hh(t,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ph(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Un=Yi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Mr!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,In=t,Un=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wc(t){if(kt){var i=Un;if(i){var a=i;if(!ph(t,i)){if(Ec(t))throw Error(n(418));i=Yi(a.nextSibling);var l=In;i&&ph(t,i)?hh(l,a):(t.flags=t.flags&-4097|2,kt=!1,In=t)}}else{if(Ec(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,In=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function xo(t){if(t!==In)return!1;if(!kt)return mh(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!mc(t.type,t.memoizedProps)),i&&(i=Un)){if(Ec(t))throw gh(),Error(n(418));for(;i;)hh(t,i),i=Yi(i.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Un=Yi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=In?Yi(t.stateNode.nextSibling):null;return!0}function gh(){for(var t=Un;t;)t=Yi(t.nextSibling)}function cs(){Un=In=null,kt=!1}function Tc(t){Jn===null?Jn=[t]:Jn.push(t)}var Gv=N.ReactCurrentBatchConfig;function ma(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var I=d.refs;w===null?delete I[p]:I[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function yo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function vh(t){var i=t._init;return i(t._payload)}function _h(t){function i(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=sr(Y,V),Y.index=0,Y.sibling=null,Y}function p(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=2,V):K):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function w(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,V,K,Ee){return V===null||V.tag!==6?(V=gu(K,Y.mode,Ee),V.return=Y,V):(V=d(V,K),V.return=Y,V)}function z(Y,V,K,Ee){var We=K.type;return We===U?ve(Y,V,K.props.children,Ee,K.key):V!==null&&(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===re&&vh(We)===V.type)?(Ee=d(V,K.props),Ee.ref=ma(Y,V,K),Ee.return=Y,Ee):(Ee=jo(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=ma(Y,V,K),Ee.return=Y,Ee)}function ie(Y,V,K,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=vu(K,Y.mode,Ee),V.return=Y,V):(V=d(V,K.children||[]),V.return=Y,V)}function ve(Y,V,K,Ee,We){return V===null||V.tag!==7?(V=Lr(K,Y.mode,Ee,We),V.return=Y,V):(V=d(V,K),V.return=Y,V)}function xe(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=gu(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return K=jo(V.type,V.key,V.props,null,Y.mode,K),K.ref=ma(Y,null,V),K.return=Y,K;case O:return V=vu(V,Y.mode,K),V.return=Y,V;case re:var Ee=V._init;return xe(Y,Ee(V._payload),K)}if(D(V)||de(V))return V=Lr(V,Y.mode,K,null),V.return=Y,V;yo(Y,V)}return null}function ge(Y,V,K,Ee){var We=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:I(Y,V,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===We?z(Y,V,K,Ee):null;case O:return K.key===We?ie(Y,V,K,Ee):null;case re:return We=K._init,ge(Y,V,We(K._payload),Ee)}if(D(K)||de(K))return We!==null?null:ve(Y,V,K,Ee,null);yo(Y,K)}return null}function Ie(Y,V,K,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,I(V,Y,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case G:return Y=Y.get(Ee.key===null?K:Ee.key)||null,z(V,Y,Ee,We);case O:return Y=Y.get(Ee.key===null?K:Ee.key)||null,ie(V,Y,Ee,We);case re:var qe=Ee._init;return Ie(Y,V,K,qe(Ee._payload),We)}if(D(Ee)||de(Ee))return Y=Y.get(K)||null,ve(V,Y,Ee,We,null);yo(V,Ee)}return null}function He(Y,V,K,Ee){for(var We=null,qe=null,Ye=V,nt=V=0,tn=null;Ye!==null&&nt<K.length;nt++){Ye.index>nt?(tn=Ye,Ye=null):tn=Ye.sibling;var Mt=ge(Y,Ye,K[nt],Ee);if(Mt===null){Ye===null&&(Ye=tn);break}t&&Ye&&Mt.alternate===null&&i(Y,Ye),V=p(Mt,V,nt),qe===null?We=Mt:qe.sibling=Mt,qe=Mt,Ye=tn}if(nt===K.length)return a(Y,Ye),kt&&Er(Y,nt),We;if(Ye===null){for(;nt<K.length;nt++)Ye=xe(Y,K[nt],Ee),Ye!==null&&(V=p(Ye,V,nt),qe===null?We=Ye:qe.sibling=Ye,qe=Ye);return kt&&Er(Y,nt),We}for(Ye=l(Y,Ye);nt<K.length;nt++)tn=Ie(Ye,Y,nt,K[nt],Ee),tn!==null&&(t&&tn.alternate!==null&&Ye.delete(tn.key===null?nt:tn.key),V=p(tn,V,nt),qe===null?We=tn:qe.sibling=tn,qe=tn);return t&&Ye.forEach(function(ar){return i(Y,ar)}),kt&&Er(Y,nt),We}function Ve(Y,V,K,Ee){var We=de(K);if(typeof We!="function")throw Error(n(150));if(K=We.call(K),K==null)throw Error(n(151));for(var qe=We=null,Ye=V,nt=V=0,tn=null,Mt=K.next();Ye!==null&&!Mt.done;nt++,Mt=K.next()){Ye.index>nt?(tn=Ye,Ye=null):tn=Ye.sibling;var ar=ge(Y,Ye,Mt.value,Ee);if(ar===null){Ye===null&&(Ye=tn);break}t&&Ye&&ar.alternate===null&&i(Y,Ye),V=p(ar,V,nt),qe===null?We=ar:qe.sibling=ar,qe=ar,Ye=tn}if(Mt.done)return a(Y,Ye),kt&&Er(Y,nt),We;if(Ye===null){for(;!Mt.done;nt++,Mt=K.next())Mt=xe(Y,Mt.value,Ee),Mt!==null&&(V=p(Mt,V,nt),qe===null?We=Mt:qe.sibling=Mt,qe=Mt);return kt&&Er(Y,nt),We}for(Ye=l(Y,Ye);!Mt.done;nt++,Mt=K.next())Mt=Ie(Ye,Y,nt,Mt.value,Ee),Mt!==null&&(t&&Mt.alternate!==null&&Ye.delete(Mt.key===null?nt:Mt.key),V=p(Mt,V,nt),qe===null?We=Mt:qe.sibling=Mt,qe=Mt);return t&&Ye.forEach(function(M0){return i(Y,M0)}),kt&&Er(Y,nt),We}function Gt(Y,V,K,Ee){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var We=K.key,qe=V;qe!==null;){if(qe.key===We){if(We=K.type,We===U){if(qe.tag===7){a(Y,qe.sibling),V=d(qe,K.props.children),V.return=Y,Y=V;break e}}else if(qe.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===re&&vh(We)===qe.type){a(Y,qe.sibling),V=d(qe,K.props),V.ref=ma(Y,qe,K),V.return=Y,Y=V;break e}a(Y,qe);break}else i(Y,qe);qe=qe.sibling}K.type===U?(V=Lr(K.props.children,Y.mode,Ee,K.key),V.return=Y,Y=V):(Ee=jo(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=ma(Y,V,K),Ee.return=Y,Y=Ee)}return w(Y);case O:e:{for(qe=K.key;V!==null;){if(V.key===qe)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),V=d(V,K.children||[]),V.return=Y,Y=V;break e}else{a(Y,V);break}else i(Y,V);V=V.sibling}V=vu(K,Y.mode,Ee),V.return=Y,Y=V}return w(Y);case re:return qe=K._init,Gt(Y,V,qe(K._payload),Ee)}if(D(K))return He(Y,V,K,Ee);if(de(K))return Ve(Y,V,K,Ee);yo(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),V=d(V,K),V.return=Y,Y=V):(a(Y,V),V=gu(K,Y.mode,Ee),V.return=Y,Y=V),w(Y)):a(Y,V)}return Gt}var us=_h(!0),xh=_h(!1),So=$i(null),Mo=null,ds=null,Ac=null;function Cc(){Ac=ds=Mo=null}function Rc(t){var i=So.current;It(So),t._currentValue=i}function bc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function fs(t,i){Mo=t,Ac=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(Mo===null)throw Error(n(308));ds=t,Mo.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var wr=null;function Pc(t){wr===null?wr=[t]:wr.push(t)}function yh(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Pc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ti(t,l)}function Ti(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ti(t,a)}return d=l.interleaved,d===null?(i.next=i,Pc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ti(t,a)}function Eo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Wl(t,a)}}function Mh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function wo(t,i,a,l){var d=t.updateQueue;Qi=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var z=I,ie=z.next;z.next=null,w===null?p=ie:w.next=ie,w=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==w&&(I===null?ve.firstBaseUpdate=ie:I.next=ie,ve.lastBaseUpdate=z))}if(p!==null){var xe=d.baseState;w=0,ve=ie=z=null,I=p;do{var ge=I.lane,Ie=I.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=t,Ve=I;switch(ge=i,Ie=a,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){xe=He.call(Ie,xe,ge);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,ge=typeof He=="function"?He.call(Ie,xe,ge):He,ge==null)break e;xe=oe({},xe,ge);break e;case 2:Qi=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ie=ve=Ie,z=xe):ve=ve.next=Ie,w|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(z=xe),d.baseState=z,d.firstBaseUpdate=ie,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Cr|=w,t.lanes=w,t.memoizedState=xe}}function Eh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var ga={},fi=$i(ga),va=$i(ga),_a=$i(ga);function Tr(t){if(t===ga)throw Error(n(174));return t}function Nc(t,i){switch(Nt(_a,i),Nt(va,t),Nt(fi,ga),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}It(fi),Nt(fi,i)}function hs(){It(fi),It(va),It(_a)}function wh(t){Tr(_a.current);var i=Tr(fi.current),a=Ae(i,t.type);i!==a&&(Nt(va,t),Nt(fi,a))}function Dc(t){va.current===t&&(It(fi),It(va))}var Bt=$i(0);function To(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ic=[];function Uc(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Ao=N.ReactCurrentDispatcher,Fc=N.ReactCurrentBatchConfig,Ar=0,Ht=null,qt=null,Jt=null,Co=!1,xa=!1,ya=0,jv=0;function un(){throw Error(n(321))}function kc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Qn(t[a],i[a]))return!1;return!0}function Oc(t,i,a,l,d,p){if(Ar=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ao.current=t===null||t.memoizedState===null?Yv:$v,t=a(l,d),xa){p=0;do{if(xa=!1,ya=0,25<=p)throw Error(n(301));p+=1,Jt=qt=null,i.updateQueue=null,Ao.current=Kv,t=a(l,d)}while(xa)}if(Ao.current=Po,i=qt!==null&&qt.next!==null,Ar=0,Jt=qt=Ht=null,Co=!1,i)throw Error(n(300));return t}function zc(){var t=ya!==0;return ya=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ht.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Wn(){if(qt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Jt===null?Ht.memoizedState:Jt.next;if(i!==null)Jt=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Jt===null?Ht.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Sa(t,i){return typeof i=="function"?i(t):i}function Bc(t){var i=Wn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=qt,d=l.baseQueue,p=a.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}l.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,l=l.baseState;var I=w=null,z=null,ie=p;do{var ve=ie.lane;if((Ar&ve)===ve)z!==null&&(z=z.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var xe={lane:ve,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};z===null?(I=z=xe,w=l):z=z.next=xe,Ht.lanes|=ve,Cr|=ve}ie=ie.next}while(ie!==null&&ie!==p);z===null?w=l:z.next=I,Qn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=z,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do p=d.lane,Ht.lanes|=p,Cr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Hc(t){var i=Wn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do p=t(p,w.action),w=w.next;while(w!==d);Qn(p,i.memoizedState)||(Mn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function Th(){}function Ah(t,i){var a=Ht,l=Wn(),d=i(),p=!Qn(l.memoizedState,d);if(p&&(l.memoizedState=d,Mn=!0),l=l.queue,Vc(bh.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Ma(9,Rh.bind(null,a,l,d,i),void 0,null),en===null)throw Error(n(349));(Ar&30)!==0||Ch(a,i,d)}return d}function Ch(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Rh(t,i,a,l){i.value=a,i.getSnapshot=l,Ph(i)&&Lh(t)}function bh(t,i,a){return a(function(){Ph(i)&&Lh(t)})}function Ph(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Qn(t,a)}catch{return!0}}function Lh(t){var i=Ti(t,1);i!==null&&ii(i,t,1,-1)}function Nh(t){var i=hi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},i.queue=t,t=t.dispatch=qv.bind(null,Ht,t),[i.memoizedState,t]}function Ma(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Dh(){return Wn().memoizedState}function Ro(t,i,a,l){var d=hi();Ht.flags|=t,d.memoizedState=Ma(1|i,a,void 0,l===void 0?null:l)}function bo(t,i,a,l){var d=Wn();l=l===void 0?null:l;var p=void 0;if(qt!==null){var w=qt.memoizedState;if(p=w.destroy,l!==null&&kc(l,w.deps)){d.memoizedState=Ma(i,a,p,l);return}}Ht.flags|=t,d.memoizedState=Ma(1|i,a,p,l)}function Ih(t,i){return Ro(8390656,8,t,i)}function Vc(t,i){return bo(2048,8,t,i)}function Uh(t,i){return bo(4,2,t,i)}function Fh(t,i){return bo(4,4,t,i)}function kh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Oh(t,i,a){return a=a!=null?a.concat([t]):null,bo(4,4,kh.bind(null,i,t),a)}function Gc(){}function zh(t,i){var a=Wn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Bh(t,i){var a=Wn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&kc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Hh(t,i,a){return(Ar&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=a):(Qn(a,i)||(a=Kr(),Ht.lanes|=a,Cr|=a,t.baseState=!0),i)}function Wv(t,i){var a=At;At=a!==0&&4>a?a:4,t(!0);var l=Fc.transition;Fc.transition={};try{t(!1),i()}finally{At=a,Fc.transition=l}}function Vh(){return Wn().memoizedState}function Xv(t,i,a){var l=ir(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Gh(t))jh(i,a);else if(a=yh(t,i,a,l),a!==null){var d=gn();ii(a,t,l,d),Wh(a,i,l)}}function qv(t,i,a){var l=ir(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gh(t))jh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,I=p(w,a);if(d.hasEagerState=!0,d.eagerState=I,Qn(I,w)){var z=i.interleaved;z===null?(d.next=d,Pc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=yh(t,i,d,l),a!==null&&(d=gn(),ii(a,t,l,d),Wh(a,i,l))}}function Gh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function jh(t,i){xa=Co=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Wh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Wl(t,a)}}var Po={readContext:jn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},Yv={readContext:jn,useCallback:function(t,i){return hi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Ih,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ro(4194308,4,kh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ro(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ro(4,2,t,i)},useMemo:function(t,i){var a=hi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=hi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Xv.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=hi();return t={current:t},i.memoizedState=t},useState:Nh,useDebugValue:Gc,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Nh(!1),i=t[0];return t=Wv.bind(null,t[1]),hi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Ht,d=hi();if(kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),en===null)throw Error(n(349));(Ar&30)!==0||Ch(l,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Ih(bh.bind(null,l,p,t),[t]),l.flags|=2048,Ma(9,Rh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=hi(),i=en.identifierPrefix;if(kt){var a=wi,l=Ei;a=(l&~(1<<32-Oe(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=jv++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},$v={readContext:jn,useCallback:zh,useContext:jn,useEffect:Vc,useImperativeHandle:Oh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:Bh,useReducer:Bc,useRef:Dh,useState:function(){return Bc(Sa)},useDebugValue:Gc,useDeferredValue:function(t){var i=Wn();return Hh(i,qt.memoizedState,t)},useTransition:function(){var t=Bc(Sa)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Vh,unstable_isNewReconciler:!1},Kv={readContext:jn,useCallback:zh,useContext:jn,useEffect:Vc,useImperativeHandle:Oh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:Bh,useReducer:Hc,useRef:Dh,useState:function(){return Hc(Sa)},useDebugValue:Gc,useDeferredValue:function(t){var i=Wn();return qt===null?i.memoizedState=t:Hh(i,qt.memoizedState,t)},useTransition:function(){var t=Hc(Sa)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Vh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function jc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:oe({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lo={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=gn(),d=ir(t),p=Ai(l,d);p.payload=i,a!=null&&(p.callback=a),i=Ji(t,p,d),i!==null&&(ii(i,t,d,l),Eo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=gn(),d=ir(t),p=Ai(l,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Ji(t,p,d),i!==null&&(ii(i,t,d,l),Eo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=gn(),l=ir(t),d=Ai(a,l);d.tag=2,i!=null&&(d.callback=i),i=Ji(t,d,l),i!==null&&(ii(i,t,l,a),Eo(i,t,l))}};function Xh(t,i,a,l,d,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!la(a,l)||!la(d,p):!0}function qh(t,i,a){var l=!1,d=Ki,p=i.contextType;return typeof p=="object"&&p!==null?p=jn(p):(d=Sn(i)?Sr:cn.current,l=i.contextTypes,p=(l=l!=null)?as(t,d):Ki),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Yh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Lo.enqueueReplaceState(i,i.state,null)}function Wc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Lc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=jn(p):(p=Sn(i)?Sr:cn.current,d.context=as(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(jc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Lo.enqueueReplaceState(d,d.state,null),wo(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var a="",l=i;do a+=ue(l),l=l.return;while(l);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Xc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function qc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function $h(t,i,a){a=Ai(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Oo||(Oo=!0,lu=l),qc(t,i)},a}function Kh(t,i,a){a=Ai(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){qc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){qc(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Zh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Zv;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=d0.bind(null,t,i,a),i.then(t,t))}function Qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Jh(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ai(-1,1),i.tag=2,Ji(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Qv=N.ReactCurrentOwner,Mn=!1;function mn(t,i,a,l){i.child=t===null?xh(i,null,a,l):us(i,t.child,a,l)}function ep(t,i,a,l,d){a=a.render;var p=i.ref;return fs(i,d),l=Oc(t,i,a,l,p,d),a=zc(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(kt&&a&&Sc(i),i.flags|=1,mn(t,i,l,d),i.child)}function tp(t,i,a,l,d){if(t===null){var p=a.type;return typeof p=="function"&&!mu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,np(t,i,p,l,d)):(t=jo(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(w,l)&&t.ref===i.ref)return Ci(t,i,d)}return i.flags|=1,t=sr(p,l),t.ref=i.ref,t.return=i,i.child=t}function np(t,i,a,l,d){if(t!==null){var p=t.memoizedProps;if(la(p,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Ci(t,i,d)}return Yc(t,i,a,l,d)}function ip(t,i,a){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(gs,Fn),Fn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(gs,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Nt(gs,Fn),Fn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Nt(gs,Fn),Fn|=l;return mn(t,i,d,a),i.child}function rp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Yc(t,i,a,l,d){var p=Sn(a)?Sr:cn.current;return p=as(i,p),fs(i,d),a=Oc(t,i,a,l,p,d),l=zc(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(kt&&l&&Sc(i),i.flags|=1,mn(t,i,a,d),i.child)}function sp(t,i,a,l,d){if(Sn(a)){var p=!0;mo(i)}else p=!1;if(fs(i,d),i.stateNode===null)Do(t,i),qh(i,a,l),Wc(i,a,l,d),l=!0;else if(t===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var z=w.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=jn(ie):(ie=Sn(a)?Sr:cn.current,ie=as(i,ie));var ve=a.getDerivedStateFromProps,xe=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";xe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==l||z!==ie)&&Yh(i,w,l,ie),Qi=!1;var ge=i.memoizedState;w.state=ge,wo(i,l,w,d),z=i.memoizedState,I!==l||ge!==z||yn.current||Qi?(typeof ve=="function"&&(jc(i,a,ve,l),z=i.memoizedState),(I=Qi||Xh(i,a,I,l,ge,z,ie))?(xe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),w.props=l,w.state=z,w.context=ie,l=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Sh(t,i),I=i.memoizedProps,ie=i.type===i.elementType?I:ei(i.type,I),w.props=ie,xe=i.pendingProps,ge=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=jn(z):(z=Sn(a)?Sr:cn.current,z=as(i,z));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==xe||ge!==z)&&Yh(i,w,l,z),Qi=!1,ge=i.memoizedState,w.state=ge,wo(i,l,w,d);var He=i.memoizedState;I!==xe||ge!==He||yn.current||Qi?(typeof Ie=="function"&&(jc(i,a,Ie,l),He=i.memoizedState),(ie=Qi||Xh(i,a,ie,l,ge,He,z)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,He,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,He,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),w.props=l,w.state=He,w.context=z,l=ie):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return $c(t,i,a,l,p,d)}function $c(t,i,a,l,d,p){rp(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return d&&uh(i,a,!1),Ci(t,i,p);l=i.stateNode,Qv.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=us(i,t.child,null,p),i.child=us(i,null,I,p)):mn(t,i,I,p),i.memoizedState=l.state,d&&uh(i,a,!0),i.child}function ap(t){var i=t.stateNode;i.pendingContext?lh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&lh(t,i.context,!1),Nc(t,i.containerInfo)}function op(t,i,a,l,d){return cs(),Tc(d),i.flags|=256,mn(t,i,a,l),i.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function lp(t,i,a){var l=i.pendingProps,d=Bt.current,p=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Nt(Bt,d&1),t===null)return wc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=Wo(w,l,0,null),t=Lr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Zc(a),i.memoizedState=Kc,t):Qc(i,w));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Jv(t,i,w,l,I,d,a);if(p){p=l.fallback,w=i.mode,d=t.child,I=d.sibling;var z={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=sr(d,z),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=sr(I,p):(p=Lr(p,w,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?Zc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~a,i.memoizedState=Kc,l}return p=t.child,t=p.sibling,l=sr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Qc(t,i){return i=Wo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function No(t,i,a,l){return l!==null&&Tc(l),us(i,t.child,null,a),t=Qc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Jv(t,i,a,l,d,p,w){if(a)return i.flags&256?(i.flags&=-257,l=Xc(Error(n(422))),No(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Wo({mode:"visible",children:l.children},d,0,null),p=Lr(p,d,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&us(i,t.child,null,w),i.child.memoizedState=Zc(w),i.memoizedState=Kc,p);if((i.mode&1)===0)return No(t,i,w,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=Xc(p,l,void 0),No(t,i,w,l)}if(I=(w&t.childLanes)!==0,Mn||I){if(l=en,l!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ti(t,d),ii(l,t,d,-1))}return pu(),l=Xc(Error(n(421))),No(t,i,w,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=f0.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Un=Yi(d.nextSibling),In=i,kt=!0,Jn=null,t!==null&&(Vn[Gn++]=Ei,Vn[Gn++]=wi,Vn[Gn++]=Mr,Ei=t.id,wi=t.overflow,Mr=i),i=Qc(i,l.children),i.flags|=4096,i)}function cp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bc(t.return,i,a)}function Jc(t,i,a,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=d)}function up(t,i,a){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(mn(t,i,l.children,a),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cp(t,a,i);else if(t.tag===19)cp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Nt(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&To(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Jc(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&To(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Jc(i,!0,a,null,p);break;case"together":Jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Do(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function e0(t,i,a){switch(i.tag){case 3:ap(i),cs();break;case 5:wh(i);break;case 1:Sn(i.type)&&mo(i);break;case 4:Nc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Nt(So,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Nt(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?lp(t,i,a):(Nt(Bt,Bt.current&1),t=Ci(t,i,a),t!==null?t.sibling:null);Nt(Bt,Bt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return up(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,ip(t,i,a)}return Ci(t,i,a)}var dp,eu,fp,hp;dp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},eu=function(){},fp=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Tr(fi.current);var p=null;switch(a){case"input":d=rn(t,d),l=rn(t,l),p=[];break;case"select":d=oe({},d,{value:void 0}),l=oe({},l,{value:void 0}),p=[];break;case"textarea":d=Z(t,d),l=Z(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=fo)}rt(a,l);var w;a=null;for(ie in d)if(!l.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var I=d[ie];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in l){var z=l[ie];if(I=d!=null?d[ie]:void 0,l.hasOwnProperty(ie)&&z!==I&&(z!=null||I!=null))if(ie==="style")if(I){for(w in I)!I.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&I[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(p||(p=[]),p.push(ie,a)),a=z;else ie==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(p=p||[]).push(ie,z)):ie==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(ie,""+z):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(z!=null&&ie==="onScroll"&&Dt("scroll",t),p||I===z||(p=[])):(p=p||[]).push(ie,z))}a&&(p=p||[]).push("style",a);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},hp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ea(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function t0(t,i,a){var l=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Sn(i.type)&&po(),dn(i),null;case 3:return l=i.stateNode,hs(),It(yn),It(cn),Uc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(du(Jn),Jn=null))),eu(t,i),dn(i),null;case 5:Dc(i);var d=Tr(_a.current);if(a=i.type,t!==null&&i.stateNode!=null)fp(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Tr(fi.current),xo(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[di]=i,l[ha]=p,t=(i.mode&1)!==0,a){case"dialog":Dt("cancel",l),Dt("close",l);break;case"iframe":case"object":case"embed":Dt("load",l);break;case"video":case"audio":for(d=0;d<ua.length;d++)Dt(ua[d],l);break;case"source":Dt("error",l);break;case"img":case"image":case"link":Dt("error",l),Dt("load",l);break;case"details":Dt("toggle",l);break;case"input":ct(l,p),Dt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Dt("invalid",l);break;case"textarea":he(l,p),Dt("invalid",l)}rt(a,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var I=p[w];w==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&uo(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&uo(l.textContent,I,t),d=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Dt("scroll",l)}switch(a){case"input":_t(l),Ct(l,p,!0);break;case"textarea":_t(l),fe(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=fo)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[di]=i,t[ha]=l,dp(t,i,!1,!1),i.stateNode=t;e:{switch(w=wt(a,l),a){case"dialog":Dt("cancel",t),Dt("close",t),d=l;break;case"iframe":case"object":case"embed":Dt("load",t),d=l;break;case"video":case"audio":for(d=0;d<ua.length;d++)Dt(ua[d],t);d=l;break;case"source":Dt("error",t),d=l;break;case"img":case"image":case"link":Dt("error",t),Dt("load",t),d=l;break;case"details":Dt("toggle",t),d=l;break;case"input":ct(t,l),d=rn(t,l),Dt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=oe({},l,{value:void 0}),Dt("invalid",t);break;case"textarea":he(t,l),d=Z(t,l),Dt("invalid",t);break;default:d=l}rt(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var z=I[p];p==="style"?ze(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&gt(t,z)):p==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Me(t,z):typeof z=="number"&&Me(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Dt("scroll",t):z!=null&&P(t,p,z,w))}switch(a){case"input":_t(t),Ct(t,l,!1);break;case"textarea":_t(t),fe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?C(t,!!l.multiple,p,!1):l.defaultValue!=null&&C(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=fo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)hp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Tr(_a.current),Tr(fi.current),xo(i)){if(l=i.stateNode,a=i.memoizedProps,l[di]=i,(p=l.nodeValue!==a)&&(t=In,t!==null))switch(t.tag){case 3:uo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return dn(i),null;case 13:if(It(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gh(),cs(),i.flags|=98560,p=!1;else if(p=xo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[di]=i}else cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else Jn!==null&&(du(Jn),Jn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Yt===0&&(Yt=3):pu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return hs(),eu(t,i),t===null&&da(i.stateNode.containerInfo),dn(i),null;case 10:return Rc(i.type._context),dn(i),null;case 17:return Sn(i.type)&&po(),dn(i),null;case 19:if(It(Bt),p=i.memoizedState,p===null)return dn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)Ea(p,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=To(t),w!==null){for(i.flags|=128,Ea(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Nt(Bt,Bt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Te()>vs&&(i.flags|=128,l=!0,Ea(p,!1),i.lanes=4194304)}else{if(!l)if(t=To(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!kt)return dn(i),null}else 2*Te()-p.renderingStartTime>vs&&a!==1073741824&&(i.flags|=128,l=!0,Ea(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(a=p.last,a!==null?a.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Te(),i.sibling=null,a=Bt.current,Nt(Bt,l?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return hu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function n0(t,i){switch(Mc(i),i.tag){case 1:return Sn(i.type)&&po(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),It(yn),It(cn),Uc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(It(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));cs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Bt),null;case 4:return hs(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Io=!1,fn=!1,i0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ms(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Vt(t,i,l)}else a.current=null}function tu(t,i,a){try{a()}catch(l){Vt(t,i,l)}}var pp=!1;function r0(t,i){if(hc=Ja,t=Xf(),sc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,I=-1,z=-1,ie=0,ve=0,xe=t,ge=null;t:for(;;){for(var Ie;xe!==a||d!==0&&xe.nodeType!==3||(I=w+d),xe!==p||l!==0&&xe.nodeType!==3||(z=w+l),xe.nodeType===3&&(w+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)ge=xe,xe=Ie;for(;;){if(xe===t)break t;if(ge===a&&++ie===d&&(I=w),ge===p&&++ve===l&&(z=w),(Ie=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Ie}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(pc={focusedElem:t,selectionRange:a},Ja=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Gt=He.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ei(i.type,Ve),Gt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Vt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return He=pp,pp=!1,He}function wa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&tu(i,a,p)}d=d.next}while(d!==l)}}function Uo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function nu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function mp(t){var i=t.alternate;i!==null&&(t.alternate=null,mp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[ha],delete i[_c],delete i[Bv],delete i[Hv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gp(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function iu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=fo));else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,a),t=t.sibling;t!==null;)iu(t,i,a),t=t.sibling}function ru(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ru(t,i,a),t=t.sibling;t!==null;)ru(t,i,a),t=t.sibling}var an=null,ti=!1;function er(t,i,a){for(a=a.child;a!==null;)_p(t,i,a),a=a.sibling}function _p(t,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Pt,a)}catch{}switch(a.tag){case 5:fn||ms(a,i);case 6:var l=an,d=ti;an=null,er(t,i,a),an=l,ti=d,an!==null&&(ti?(t=an,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):an.removeChild(a.stateNode));break;case 18:an!==null&&(ti?(t=an,a=a.stateNode,t.nodeType===8?vc(t.parentNode,a):t.nodeType===1&&vc(t,a),na(t)):vc(an,a.stateNode));break;case 4:l=an,d=ti,an=a.stateNode.containerInfo,ti=!0,er(t,i,a),an=l,ti=d;break;case 0:case 11:case 14:case 15:if(!fn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&tu(a,i,w),d=d.next}while(d!==l)}er(t,i,a);break;case 1:if(!fn&&(ms(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){Vt(a,i,I)}er(t,i,a);break;case 21:er(t,i,a);break;case 22:a.mode&1?(fn=(l=fn)||a.memoizedState!==null,er(t,i,a),fn=l):er(t,i,a);break;default:er(t,i,a)}}function xp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new i0),i.forEach(function(l){var d=h0.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function ni(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var p=t,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:an=I.stateNode,ti=!1;break e;case 3:an=I.stateNode.containerInfo,ti=!0;break e;case 4:an=I.stateNode.containerInfo,ti=!0;break e}I=I.return}if(an===null)throw Error(n(160));_p(p,w,d),an=null,ti=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ie){Vt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,t),i=i.sibling}function yp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),pi(t),l&4){try{wa(3,t,t.return),Uo(3,t)}catch(Ve){Vt(t,t.return,Ve)}try{wa(5,t,t.return)}catch(Ve){Vt(t,t.return,Ve)}}break;case 1:ni(i,t),pi(t),l&512&&a!==null&&ms(a,a.return);break;case 5:if(ni(i,t),pi(t),l&512&&a!==null&&ms(a,a.return),t.flags&32){var d=t.stateNode;try{Me(d,"")}catch(Ve){Vt(t,t.return,Ve)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,w=a!==null?a.memoizedProps:p,I=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&mt(d,p),wt(I,w);var ie=wt(I,p);for(w=0;w<z.length;w+=2){var ve=z[w],xe=z[w+1];ve==="style"?ze(d,xe):ve==="dangerouslySetInnerHTML"?gt(d,xe):ve==="children"?Me(d,xe):P(d,ve,xe,ie)}switch(I){case"input":Ke(d,p);break;case"textarea":_e(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?C(d,!!p.multiple,Ie,!1):ge!==!!p.multiple&&(p.defaultValue!=null?C(d,!!p.multiple,p.defaultValue,!0):C(d,!!p.multiple,p.multiple?[]:"",!1))}d[ha]=p}catch(Ve){Vt(t,t.return,Ve)}}break;case 6:if(ni(i,t),pi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ve){Vt(t,t.return,Ve)}}break;case 3:if(ni(i,t),pi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{na(i.containerInfo)}catch(Ve){Vt(t,t.return,Ve)}break;case 4:ni(i,t),pi(t);break;case 13:ni(i,t),pi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ou=Te())),l&4&&xp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(fn=(ie=fn)||ve,ni(i,t),fn=ie):ni(i,t),pi(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ve&&(t.mode&1)!==0)for(Be=t,ve=t.child;ve!==null;){for(xe=Be=ve;Be!==null;){switch(ge=Be,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:wa(4,ge,ge.return);break;case 1:ms(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Vt(l,a,Ve)}}break;case 5:ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Ep(xe);continue}}Ie!==null?(Ie.return=ge,Be=Ie):Ep(xe)}ve=ve.sibling}e:for(ve=null,xe=t;;){if(xe.tag===5){if(ve===null){ve=xe;try{d=xe.stateNode,ie?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=xe.stateNode,z=xe.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=Je("display",w))}catch(Ve){Vt(t,t.return,Ve)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=ie?"":xe.memoizedProps}catch(Ve){Vt(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ni(i,t),pi(t),l&4&&xp(t);break;case 21:break;default:ni(i,t),pi(t)}}function pi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(gp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Me(d,""),l.flags&=-33);var p=vp(t);ru(t,p,d);break;case 3:case 4:var w=l.stateNode.containerInfo,I=vp(t);iu(t,I,w);break;default:throw Error(n(161))}}catch(z){Vt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function s0(t,i,a){Be=t,Sp(t)}function Sp(t,i,a){for(var l=(t.mode&1)!==0;Be!==null;){var d=Be,p=d.child;if(d.tag===22&&l){var w=d.memoizedState!==null||Io;if(!w){var I=d.alternate,z=I!==null&&I.memoizedState!==null||fn;I=Io;var ie=fn;if(Io=w,(fn=z)&&!ie)for(Be=d;Be!==null;)w=Be,z=w.child,w.tag===22&&w.memoizedState!==null?wp(d):z!==null?(z.return=w,Be=z):wp(d);for(;p!==null;)Be=p,Sp(p),p=p.sibling;Be=d,Io=I,fn=ie}Mp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Be=p):Mp(t)}}function Mp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Uo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ei(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Eh(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Eh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ve=ie.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&na(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&nu(i)}catch(ge){Vt(i,i.return,ge)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function Ep(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function wp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Uo(4,i)}catch(z){Vt(i,a,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(z){Vt(i,d,z)}}var p=i.return;try{nu(i)}catch(z){Vt(i,p,z)}break;case 5:var w=i.return;try{nu(i)}catch(z){Vt(i,w,z)}}}catch(z){Vt(i,i.return,z)}if(i===t){Be=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Be=I;break}Be=i.return}}var a0=Math.ceil,Fo=N.ReactCurrentDispatcher,su=N.ReactCurrentOwner,Xn=N.ReactCurrentBatchConfig,xt=0,en=null,jt=null,on=0,Fn=0,gs=$i(0),Yt=0,Ta=null,Cr=0,ko=0,au=0,Aa=null,En=null,ou=0,vs=1/0,Ri=null,Oo=!1,lu=null,tr=null,zo=!1,nr=null,Bo=0,Ca=0,cu=null,Ho=-1,Vo=0;function gn(){return(xt&6)!==0?Te():Ho!==-1?Ho:Ho=Te()}function ir(t){return(t.mode&1)===0?1:(xt&2)!==0&&on!==0?on&-on:Gv.transition!==null?(Vo===0&&(Vo=Kr()),Vo):(t=At,t!==0||(t=window.event,t=t===void 0?16:Af(t.type)),t)}function ii(t,i,a,l){if(50<Ca)throw Ca=0,cu=null,Error(n(185));Hi(t,a,l),((xt&2)===0||t!==en)&&(t===en&&((xt&2)===0&&(ko|=a),Yt===4&&rr(t,on)),wn(t,l),a===1&&xt===0&&(i.mode&1)===0&&(vs=Te()+500,go&&Zi()))}function wn(t,i){var a=t.callbackNode;Ks(t,i);var l=Lt(t,t===en?on:0);if(l===0)a!==null&&X(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&X(a),i===1)t.tag===0?Vv(Ap.bind(null,t)):dh(Ap.bind(null,t)),Ov(function(){(xt&6)===0&&Zi()}),a=null;else{switch(_f(l)){case 1:a=$e;break;case 4:a=Ze;break;case 16:a=je;break;case 536870912:a=Rt;break;default:a=je}a=Ip(a,Tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Tp(t,i){if(Ho=-1,Vo=0,(xt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(_s()&&t.callbackNode!==a)return null;var l=Lt(t,t===en?on:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Go(t,l);else{i=l;var d=xt;xt|=2;var p=Rp();(en!==t||on!==i)&&(Ri=null,vs=Te()+500,br(t,i));do try{c0();break}catch(I){Cp(t,I)}while(!0);Cc(),Fo.current=p,xt=d,jt!==null?i=0:(en=null,on=0,i=Yt)}if(i!==0){if(i===2&&(d=ln(t),d!==0&&(l=d,i=uu(t,d))),i===1)throw a=Ta,br(t,0),rr(t,l),wn(t,Te()),a;if(i===6)rr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!o0(d)&&(i=Go(t,l),i===2&&(p=ln(t),p!==0&&(l=p,i=uu(t,p))),i===1))throw a=Ta,br(t,0),rr(t,l),wn(t,Te()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,En,Ri);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=ou+500-Te(),10<i)){if(Lt(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){gn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=gc(Pr.bind(null,t,En,Ri),i);break}Pr(t,En,Ri);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var w=31-Oe(l);p=1<<w,w=i[w],w>d&&(d=w),l&=~p}if(l=d,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*a0(l/1960))-l,10<l){t.timeoutHandle=gc(Pr.bind(null,t,En,Ri),l);break}Pr(t,En,Ri);break;case 5:Pr(t,En,Ri);break;default:throw Error(n(329))}}}return wn(t,Te()),t.callbackNode===a?Tp.bind(null,t):null}function uu(t,i){var a=Aa;return t.current.memoizedState.isDehydrated&&(br(t,i).flags|=256),t=Go(t,i),t!==2&&(i=En,En=a,i!==null&&du(i)),t}function du(t){En===null?En=t:En.push.apply(En,t)}function o0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],p=d.getSnapshot;d=d.value;try{if(!Qn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~au,i&=~ko,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Oe(i),l=1<<a;t[a]=-1,i&=~l}}function Ap(t){if((xt&6)!==0)throw Error(n(327));_s();var i=Lt(t,0);if((i&1)===0)return wn(t,Te()),null;var a=Go(t,i);if(t.tag!==0&&a===2){var l=ln(t);l!==0&&(i=l,a=uu(t,l))}if(a===1)throw a=Ta,br(t,0),rr(t,i),wn(t,Te()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,En,Ri),wn(t,Te()),null}function fu(t,i){var a=xt;xt|=1;try{return t(i)}finally{xt=a,xt===0&&(vs=Te()+500,go&&Zi())}}function Rr(t){nr!==null&&nr.tag===0&&(xt&6)===0&&_s();var i=xt;xt|=1;var a=Xn.transition,l=At;try{if(Xn.transition=null,At=1,t)return t()}finally{At=l,Xn.transition=a,xt=i,(xt&6)===0&&Zi()}}function hu(){Fn=gs.current,It(gs)}function br(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,kv(a)),jt!==null)for(a=jt.return;a!==null;){var l=a;switch(Mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&po();break;case 3:hs(),It(yn),It(cn),Uc();break;case 5:Dc(l);break;case 4:hs();break;case 13:It(Bt);break;case 19:It(Bt);break;case 10:Rc(l.type._context);break;case 22:case 23:hu()}a=a.return}if(en=t,jt=t=sr(t.current,null),on=Fn=i,Yt=0,Ta=null,au=ko=Cr=0,En=Aa=null,wr!==null){for(i=0;i<wr.length;i++)if(a=wr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,p=a.pending;if(p!==null){var w=p.next;p.next=d,l.next=w}a.pending=l}wr=null}return t}function Cp(t,i){do{var a=jt;try{if(Cc(),Ao.current=Po,Co){for(var l=Ht.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Co=!1}if(Ar=0,Jt=qt=Ht=null,xa=!1,ya=0,su.current=null,a===null||a.return===null){Yt=1,Ta=i,jt=null;break}e:{var p=t,w=a.return,I=a,z=i;if(i=on,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=z,ve=I,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Qh(w);if(Ie!==null){Ie.flags&=-257,Jh(Ie,w,I,p,i),Ie.mode&1&&Zh(p,ie,i),i=Ie,z=ie;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(z),i.updateQueue=Ve}else He.add(z);break e}else{if((i&1)===0){Zh(p,ie,i),pu();break e}z=Error(n(426))}}else if(kt&&I.mode&1){var Gt=Qh(w);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Jh(Gt,w,I,p,i),Tc(ps(z,I));break e}}p=z=ps(z,I),Yt!==4&&(Yt=2),Aa===null?Aa=[p]:Aa.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=$h(p,z,i);Mh(p,Y);break e;case 1:I=z;var V=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(tr===null||!tr.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=Kh(p,I,i);Mh(p,Ee);break e}}p=p.return}while(p!==null)}Pp(a)}catch(We){i=We,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function Rp(){var t=Fo.current;return Fo.current=Po,t===null?Po:t}function pu(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||(Cr&268435455)===0&&(ko&268435455)===0||rr(en,on)}function Go(t,i){var a=xt;xt|=2;var l=Rp();(en!==t||on!==i)&&(Ri=null,br(t,i));do try{l0();break}catch(d){Cp(t,d)}while(!0);if(Cc(),xt=a,Fo.current=l,jt!==null)throw Error(n(261));return en=null,on=0,Yt}function l0(){for(;jt!==null;)bp(jt)}function c0(){for(;jt!==null&&!we();)bp(jt)}function bp(t){var i=Dp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?Pp(t):jt=i,su.current=null}function Pp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=t0(a,i,Fn),a!==null){jt=a;return}}else{if(a=n0(a,i),a!==null){a.flags&=32767,jt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Pr(t,i,a){var l=At,d=Xn.transition;try{Xn.transition=null,At=1,u0(t,i,a,l)}finally{Xn.transition=d,At=l}return null}function u0(t,i,a,l){do _s();while(nr!==null);if((xt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(jg(t,p),t===en&&(jt=en=null,on=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zo||(zo=!0,Ip(je,function(){return _s(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Xn.transition,Xn.transition=null;var w=At;At=1;var I=xt;xt|=4,su.current=null,r0(t,a),yp(a,t),Pv(pc),Ja=!!hc,pc=hc=null,t.current=a,s0(a),Ne(),xt=I,At=w,Xn.transition=p}else t.current=a;if(zo&&(zo=!1,nr=t,Bo=d),p=t.pendingLanes,p===0&&(tr=null),yt(a.stateNode),wn(t,Te()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Oo)throw Oo=!1,t=lu,lu=null,t;return(Bo&1)!==0&&t.tag!==0&&_s(),p=t.pendingLanes,(p&1)!==0?t===cu?Ca++:(Ca=0,cu=t):Ca=0,Zi(),null}function _s(){if(nr!==null){var t=_f(Bo),i=Xn.transition,a=At;try{if(Xn.transition=null,At=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Bo=0,(xt&6)!==0)throw Error(n(331));var d=xt;for(xt|=4,Be=t.current;Be!==null;){var p=Be,w=p.child;if((Be.flags&16)!==0){var I=p.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ie=I[z];for(Be=ie;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:wa(8,ve,p)}var xe=ve.child;if(xe!==null)xe.return=ve,Be=xe;else for(;Be!==null;){ve=Be;var ge=ve.sibling,Ie=ve.return;if(mp(ve),ve===ie){Be=null;break}if(ge!==null){ge.return=Ie,Be=ge;break}Be=Ie}}}var He=p.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}Be=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,Be=w;else e:for(;Be!==null;){if(p=Be,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:wa(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Be=Y;break e}Be=p.return}}var V=t.current;for(Be=V;Be!==null;){w=Be;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,Be=K;else e:for(w=V;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Uo(9,I)}}catch(We){Vt(I,I.return,We)}if(I===w){Be=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Be=Ee;break e}Be=I.return}}if(xt=d,Zi(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Pt,t)}catch{}l=!0}return l}finally{At=a,Xn.transition=i}}return!1}function Lp(t,i,a){i=ps(a,i),i=$h(t,i,1),t=Ji(t,i,1),i=gn(),t!==null&&(Hi(t,1,i),wn(t,i))}function Vt(t,i,a){if(t.tag===3)Lp(t,t,a);else for(;i!==null;){if(i.tag===3){Lp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=ps(a,t),t=Kh(i,t,1),i=Ji(i,t,1),t=gn(),i!==null&&(Hi(i,1,t),wn(i,t));break}}i=i.return}}function d0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=gn(),t.pingedLanes|=t.suspendedLanes&a,en===t&&(on&a)===a&&(Yt===4||Yt===3&&(on&130023424)===on&&500>Te()-ou?br(t,0):au|=a),wn(t,i)}function Np(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var a=gn();t=Ti(t,i),t!==null&&(Hi(t,i,a),wn(t,a))}function f0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Np(t,a)}function h0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Np(t,a)}var Dp;Dp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||yn.current)Mn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Mn=!1,e0(t,i,a);Mn=(t.flags&131072)!==0}else Mn=!1,kt&&(i.flags&1048576)!==0&&fh(i,_o,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Do(t,i),t=i.pendingProps;var d=as(i,cn.current);fs(i,a),d=Oc(null,i,l,t,d,a);var p=zc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(l)?(p=!0,mo(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Lc(i),d.updater=Lo,i.stateNode=d,d._reactInternals=i,Wc(i,l,t,a),i=$c(null,i,l,!0,p,a)):(i.tag=0,kt&&p&&Sc(i),mn(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Do(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=m0(l),t=ei(l,t),d){case 0:i=Yc(null,i,l,t,a);break e;case 1:i=sp(null,i,l,t,a);break e;case 11:i=ep(null,i,l,t,a);break e;case 14:i=tp(null,i,l,ei(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),Yc(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),sp(t,i,l,d,a);case 3:e:{if(ap(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,Sh(t,i),wo(i,l,null,a);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ps(Error(n(423)),i),i=op(t,i,l,a,d);break e}else if(l!==d){d=ps(Error(n(424)),i),i=op(t,i,l,a,d);break e}else for(Un=Yi(i.stateNode.containerInfo.firstChild),In=i,kt=!0,Jn=null,a=xh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),l===d){i=Ci(t,i,a);break e}mn(t,i,l,a)}i=i.child}return i;case 5:return wh(i),t===null&&wc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,w=d.children,mc(l,d)?w=null:p!==null&&mc(l,p)&&(i.flags|=32),rp(t,i),mn(t,i,w,a),i.child;case 6:return t===null&&wc(i),null;case 13:return lp(t,i,a);case 4:return Nc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,a):mn(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),ep(t,i,l,d,a);case 7:return mn(t,i,i.pendingProps,a),i.child;case 8:return mn(t,i,i.pendingProps.children,a),i.child;case 12:return mn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,w=d.value,Nt(So,l._currentValue),l._currentValue=w,p!==null)if(Qn(p.value,w)){if(p.children===d.children&&!yn.current){i=Ci(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){w=p.child;for(var z=I.firstContext;z!==null;){if(z.context===l){if(p.tag===1){z=Ai(-1,a&-a),z.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var ve=ie.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),ie.pending=z}}p.lanes|=a,z=p.alternate,z!==null&&(z.lanes|=a),bc(p.return,a,i),I.lanes|=a;break}z=z.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),bc(w,a,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}mn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,fs(i,a),d=jn(d),l=l(d),i.flags|=1,mn(t,i,l,a),i.child;case 14:return l=i.type,d=ei(l,i.pendingProps),d=ei(l.type,d),tp(t,i,l,d,a);case 15:return np(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),Do(t,i),i.tag=1,Sn(l)?(t=!0,mo(i)):t=!1,fs(i,a),qh(i,l,d),Wc(i,l,d,a),$c(null,i,l,!0,t,a);case 19:return up(t,i,a);case 22:return ip(t,i,a)}throw Error(n(156,i.tag))};function Ip(t,i){return ne(t,i)}function p0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,a,l){return new p0(t,i,a,l)}function mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function m0(t){if(typeof t=="function")return mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$)return 11;if(t===me)return 14}return 2}function sr(t,i){var a=t.alternate;return a===null?(a=qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function jo(t,i,a,l,d,p){var w=2;if(l=t,typeof t=="function")mu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case U:return Lr(a.children,d,p,i);case k:w=8,d|=8;break;case te:return t=qn(12,a,i,d|2),t.elementType=te,t.lanes=p,t;case ee:return t=qn(13,a,i,d),t.elementType=ee,t.lanes=p,t;case le:return t=qn(19,a,i,d),t.elementType=le,t.lanes=p,t;case ce:return Wo(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:w=10;break e;case R:w=9;break e;case $:w=11;break e;case me:w=14;break e;case re:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(w,a,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Lr(t,i,a,l){return t=qn(7,t,l,i),t.lanes=a,t}function Wo(t,i,a,l){return t=qn(22,t,l,i),t.elementType=ce,t.lanes=a,t.stateNode={isHidden:!1},t}function gu(t,i,a){return t=qn(6,t,null,i),t.lanes=a,t}function vu(t,i,a){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function g0(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _u(t,i,a,l,d,p,w,I,z){return t=new g0(t,i,a,I,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(p),t}function v0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Up(t){if(!t)return Ki;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Sn(a))return ch(t,a,i)}return i}function Fp(t,i,a,l,d,p,w,I,z){return t=_u(a,l,!0,t,d,p,w,I,z),t.context=Up(null),a=t.current,l=gn(),d=ir(a),p=Ai(l,d),p.callback=i??null,Ji(a,p,d),t.current.lanes=d,Hi(t,d,l),wn(t,l),t}function Xo(t,i,a,l){var d=i.current,p=gn(),w=ir(d);return a=Up(a),i.context===null?i.context=a:i.pendingContext=a,i=Ai(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(d,i,w),t!==null&&(ii(t,d,w,p),Eo(t,d,w)),w}function qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function xu(t,i){kp(t,i),(t=t.alternate)&&kp(t,i)}function _0(){return null}var Op=typeof reportError=="function"?reportError:function(t){console.error(t)};function yu(t){this._internalRoot=t}Yo.prototype.render=yu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Xo(t,i,null,null)},Yo.prototype.unmount=yu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Xo(null,t,null,null)}),i[Si]=null}};function Yo(t){this._internalRoot=t}Yo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Sf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Wi.length&&i!==0&&i<Wi[a].priority;a++);Wi.splice(a,0,t),a===0&&wf(t)}};function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function x0(t,i,a,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var ie=qo(w);p.call(ie)}}var w=Fp(i,l,t,0,null,!1,!1,"",zp);return t._reactRootContainer=w,t[Si]=w.current,da(t.nodeType===8?t.parentNode:t),Rr(),w}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var ie=qo(z);I.call(ie)}}var z=_u(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=z,t[Si]=z.current,da(t.nodeType===8?t.parentNode:t),Rr(function(){Xo(i,z,a,l)}),z}function Ko(t,i,a,l,d){var p=a._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var I=d;d=function(){var z=qo(w);I.call(z)}}Xo(i,w,t,d)}else w=x0(a,i,t,d,l);return qo(w)}xf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=yi(i.pendingLanes);a!==0&&(Wl(i,a|1),wn(i,Te()),(xt&6)===0&&(vs=Te()+500,Zi()))}break;case 13:Rr(function(){var l=Ti(t,1);if(l!==null){var d=gn();ii(l,t,1,d)}}),xu(t,1)}},Xl=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var a=gn();ii(i,t,134217728,a)}xu(t,134217728)}},yf=function(t){if(t.tag===13){var i=ir(t),a=Ti(t,i);if(a!==null){var l=gn();ii(a,t,i,l)}xu(t,i)}},Sf=function(){return At},Mf=function(t,i){var a=At;try{return At=t,i()}finally{At=a}},ae=function(t,i,a){switch(i){case"input":if(Ke(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=ho(l);if(!d)throw Error(n(90));dt(l),Ke(l,d)}}}break;case"textarea":_e(t,a);break;case"select":i=a.value,i!=null&&C(t,!!a.multiple,i,!1)}},sn=fu,vt=Rr;var y0={usingClientEntryPoint:!1,Events:[pa,rs,ho,ht,zt,fu]},Ra={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S0={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||_0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Pt=Zo.inject(S0),Ft=Zo}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0,Tn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(i))throw Error(n(200));return v0(t,i,null,a)},Tn.createRoot=function(t,i){if(!Su(t))throw Error(n(299));var a=!1,l="",d=Op;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=_u(t,1,!1,null,null,a,!1,l,d),t[Si]=i.current,da(t.nodeType===8?t.parentNode:t),new yu(i)},Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=W(i),t=t===null?null:t.stateNode,t},Tn.flushSync=function(t){return Rr(t)},Tn.hydrate=function(t,i,a){if(!$o(i))throw Error(n(200));return Ko(null,t,i,!0,a)},Tn.hydrateRoot=function(t,i,a){if(!Su(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,p="",w=Op;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Fp(i,null,t,1,a??null,d,!1,p,w),t[Si]=i.current,da(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Yo(i)},Tn.render=function(t,i,a){if(!$o(i))throw Error(n(200));return Ko(null,t,i,!1,a)},Tn.unmountComponentAtNode=function(t){if(!$o(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){Ko(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Tn.unstable_batchedUpdates=fu,Tn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!$o(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ko(t,i,a,!1,l)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var qp;function P0(){if(qp)return wu.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wu.exports=b0(),wu.exports}var Yp;function L0(){if(Yp)return Qo;Yp=1;var s=P0();return Qo.createRoot=s.createRoot,Qo.hydrateRoot=s.hydrateRoot,Qo}var N0=L0();const D0=tg(N0),$p=(s,e,n)=>s+(e-s)*n;function I0(){const s=it.useRef(null),e=it.useRef(null);return it.useEffect(()=>{const n=s.current,r=e.current;if(!n||!r)return;if(window.matchMedia("(hover: none)").matches){n.style.display="none",r.style.display="none";return}let o=0,c=0,u=0,f=0;const h=A=>{o=A.clientX,c=A.clientY,n.style.transform=`translate(${o}px, ${c}px) translate(-50%, -50%)`},m=()=>{u=$p(u,o,.1),f=$p(f,c,.1),r.style.transform=`translate(${u}px, ${f}px) translate(-50%, -50%)`,requestAnimationFrame(m)};m();const x="a, button, .filter-btn, .slider-btn, .work-card, .service-card, input, textarea, select, label",S=A=>{A.target.closest(x)&&document.body.classList.add("cursor-hover")},y=A=>{A.target.closest(x)&&document.body.classList.remove("cursor-hover")},M=()=>{n.style.opacity="0",r.style.opacity="0"},T=()=>{n.style.opacity="1",r.style.opacity="1"};return document.addEventListener("mousemove",h),document.addEventListener("mouseover",S),document.addEventListener("mouseout",y),document.addEventListener("mouseleave",M),document.addEventListener("mouseenter",T),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseover",S),document.removeEventListener("mouseout",y),document.removeEventListener("mouseleave",M),document.removeEventListener("mouseenter",T)}},[]),g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"cursor",ref:s}),g.jsx("div",{className:"cursor-follower",ref:e})]})}const U0=s=>1-(1-s)*(1-s);function F0(){const[s,e]=it.useState(0),[n,r]=it.useState(!1),[o,c]=it.useState(!1);return it.useEffect(()=>{const f=performance.now(),h=m=>{const x=Math.min((m-f)/1800,1);e(Math.round(U0(x)*100)),x<1?requestAnimationFrame(h):(r(!0),document.body.classList.add("loaded"),setTimeout(()=>c(!0),700))};requestAnimationFrame(h)},[]),o?null:g.jsx("div",{className:`loader${n?" hidden":""}`,children:g.jsxs("div",{className:"loader-inner",children:[g.jsxs("div",{className:"loader-logo",children:["NEXA",g.jsx("span",{children:"STUDIO"})]}),g.jsx("div",{className:"loader-bar",children:g.jsx("div",{className:"loader-progress",style:{width:s+"%"}})}),g.jsxs("div",{className:"loader-count",children:[s,"%"]})]})})}function k0(){return null}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ng=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var z0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=it.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...f},h)=>it.createElement("svg",{ref:h,...z0,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:ng("lucide",o),...f},[...u.map(([m,x])=>it.createElement(m,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(s,e)=>{const n=it.forwardRef(({className:r,...o},c)=>it.createElement(B0,{ref:c,iconNode:e,className:ng(`lucide-${O0(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=ut("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=ut("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ut("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=ut("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ut("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=ut("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=ut("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=ut("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=ut("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=ut("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=ut("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=ut("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=ut("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=ut("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=ut("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=ut("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=ut("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=ut("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=ut("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=ut("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=ut("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=ut("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=ut("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=ut("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=ut("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=ut("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=ut("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=ut("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=ut("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=ut("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=ut("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=ut("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=ut("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=ut("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=ut("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=ut("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ut("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),a_=["About","Services","Work","Team","Contact"];function o_({onMenuOpen:s}){return g.jsx("nav",{className:"nav",id:"nav",children:g.jsxs("div",{className:"nav-container",children:[g.jsxs("a",{href:"#",className:"nav-logo",children:["NEXA",g.jsx("span",{children:"STUDIO"})]}),g.jsx("ul",{className:"nav-links",children:a_.map(e=>g.jsx("li",{children:g.jsx("a",{href:`#${e.toLowerCase()}`,className:"nav-link",children:e})},e))}),g.jsx("div",{className:"nav-actions",children:g.jsxs("a",{href:"#contact",className:"btn btn-primary",children:["Start a Project ",g.jsx(zl,{size:14})]})}),g.jsxs("button",{className:"nav-hamburger",onClick:s,"aria-label":"Menu",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]})]})})}const l_=["About","Services","Work","Team","Contact"];function c_({open:s,onClose:e}){return g.jsxs("div",{className:`mobile-menu${s?" open":""}`,children:[g.jsx("button",{className:"mobile-close",onClick:e,"aria-label":"Close menu",children:g.jsx(Jd,{size:20})}),g.jsx("ul",{children:l_.map(n=>g.jsx("li",{children:g.jsx("a",{href:`#${n.toLowerCase()}`,className:"mobile-link",onClick:e,children:n})},n))}),g.jsx("a",{href:"#contact",className:"btn btn-primary mobile-cta",onClick:e,children:"Start a Project"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="169",u_=0,Zp=1,d_=2,ug=1,f_=2,Ii=3,gr=0,Rn=1,Ui=2,pr=0,ks=1,Qp=2,Jp=3,em=4,h_=5,Br=100,p_=101,m_=102,g_=103,v_=104,__=200,x_=201,y_=202,S_=203,ad=204,od=205,M_=206,E_=207,w_=208,T_=209,A_=210,C_=211,R_=212,b_=213,P_=214,ld=0,cd=1,ud=2,Bs=3,dd=4,fd=5,hd=6,pd=7,tf=0,L_=1,N_=2,mr=0,D_=1,I_=2,U_=3,F_=4,k_=5,O_=6,z_=7,dg=300,Hs=301,Vs=302,md=303,gd=304,Bl=306,vd=1e3,Vr=1001,_d=1002,$n=1003,B_=1004,Jo=1005,oi=1006,Cu=1007,Gr=1008,Oi=1009,fg=1010,hg=1011,Ba=1012,nf=1013,Wr=1014,Fi=1015,Ha=1016,rf=1017,sf=1018,Gs=1020,pg=35902,mg=1021,gg=1022,ci=1023,vg=1024,_g=1025,Os=1026,js=1027,xg=1028,af=1029,yg=1030,of=1031,lf=1033,El=33776,wl=33777,Tl=33778,Al=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,wd=37492,Td=37496,Ad=37808,Cd=37809,Rd=37810,bd=37811,Pd=37812,Ld=37813,Nd=37814,Dd=37815,Id=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,zd=37821,Cl=36492,Bd=36494,Hd=36495,Sg=36283,Vd=36284,Gd=36285,jd=36286,H_=3200,V_=3201,Mg=0,G_=1,hr="",mi="srgb",_r="srgb-linear",cf="display-p3",Hl="display-p3-linear",Ll="linear",Ut="srgb",Nl="rec709",Dl="p3",xs=7680,tm=519,j_=512,W_=513,X_=514,Eg=515,q_=516,Y_=517,$_=518,K_=519,nm=35044,im="300 es",ki=2e3,Il=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,Wd=180/Math.PI;function Va(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function Z_(s,e){return(s%e+e)%e}function bu(s,e,n){return(1-n)*s+n*e}function Pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,o,c,u,f,h,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m)}set(e,n,r,o,c,u,f,h,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=c,x[5]=h,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],x=r[4],S=r[7],y=r[2],M=r[5],T=r[8],A=o[0],v=o[3],_=o[6],L=o[1],P=o[4],N=o[7],G=o[2],O=o[5],U=o[8];return c[0]=u*A+f*L+h*G,c[3]=u*v+f*P+h*O,c[6]=u*_+f*N+h*U,c[1]=m*A+x*L+S*G,c[4]=m*v+x*P+S*O,c[7]=m*_+x*N+S*U,c[2]=y*A+M*L+T*G,c[5]=y*v+M*P+T*O,c[8]=y*_+M*N+T*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],x=e[8];return n*u*x-n*f*m-r*c*x+r*f*h+o*c*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],x=e[8],S=x*u-f*m,y=f*h-x*c,M=m*c-u*h,T=n*S+r*y+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=S*A,e[1]=(o*m-x*r)*A,e[2]=(f*r-o*u)*A,e[3]=y*A,e[4]=(x*n-o*h)*A,e[5]=(o*c-f*n)*A,e[6]=M*A,e[7]=(r*h-m*n)*A,e[8]=(u*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Pu.makeScale(e,n)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new at;function wg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Q_(){const s=Ul("canvas");return s.style.display="block",s}const rm={};function Rl(s){s in rm||(rm[s]=!0,console.warn(s))}function J_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function ex(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sm=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),am=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[_r]:{transfer:Ll,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[mi]:{transfer:Ut,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Hl]:{transfer:Ll,primaries:Dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(am),fromReference:s=>s.applyMatrix3(sm)},[cf]:{transfer:Ut,primaries:Dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(am),fromReference:s=>s.applyMatrix3(sm).convertLinearToSRGB()}},nx=new Set([_r,Hl]),Tt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!nx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=La[e].toReference,o=La[n].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return La[s].primaries},getTransfer:function(s){return s===hr?Ll:La[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(La[e].luminanceCoefficients)}};function zs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class ix{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Ul("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=zs(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zs(n[r]/255)*255):n[r]=zs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class Tg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Nu(o[u].image)):c.push(Nu(o[u]))}else c=Nu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ix.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sx=0;class bn extends Xs{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=Vr,o=Vr,c=oi,u=Gr,f=ci,h=Oi,m=bn.DEFAULT_ANISOTROPY,x=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Va(),this.name="",this.source=new Tg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=dg;bn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,r=0,o=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const h=e.elements,m=h[0],x=h[4],S=h[8],y=h[1],M=h[5],T=h[9],A=h[2],v=h[6],_=h[10];if(Math.abs(x-y)<.01&&Math.abs(S-A)<.01&&Math.abs(T-v)<.01){if(Math.abs(x+y)<.1&&Math.abs(S+A)<.1&&Math.abs(T+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,N=(M+1)/2,G=(_+1)/2,O=(x+y)/4,U=(S+A)/4,k=(T+v)/4;return P>N&&P>G?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=O/r,c=U/r):N>G?N<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),r=O/o,c=k/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=U/c,o=k/c),this.set(r,o,c,n),this}let L=Math.sqrt((v-T)*(v-T)+(S-A)*(S-A)+(y-x)*(y-x));return Math.abs(L)<.001&&(L=1),this.x=(v-T)/L,this.y=(S-A)/L,this.z=(y-x)/L,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ax extends Xs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new bn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends ax{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ag extends bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ox extends bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let h=r[o+0],m=r[o+1],x=r[o+2],S=r[o+3];const y=c[u+0],M=c[u+1],T=c[u+2],A=c[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=S;return}if(f===1){e[n+0]=y,e[n+1]=M,e[n+2]=T,e[n+3]=A;return}if(S!==A||h!==y||m!==M||x!==T){let v=1-f;const _=h*y+m*M+x*T+S*A,L=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const G=Math.sqrt(P),O=Math.atan2(G,_*L);v=Math.sin(v*O)/G,f=Math.sin(f*O)/G}const N=f*L;if(h=h*v+y*N,m=m*v+M*N,x=x*v+T*N,S=S*v+A*N,v===1-f){const G=1/Math.sqrt(h*h+m*m+x*x+S*S);h*=G,m*=G,x*=G,S*=G}}e[n]=h,e[n+1]=m,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],h=r[o+1],m=r[o+2],x=r[o+3],S=c[u],y=c[u+1],M=c[u+2],T=c[u+3];return e[n]=f*T+x*S+h*M-m*y,e[n+1]=h*T+x*y+m*S-f*M,e[n+2]=m*T+x*M+f*y-h*S,e[n+3]=x*T-f*S-h*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),x=f(o/2),S=f(c/2),y=h(r/2),M=h(o/2),T=h(c/2);switch(u){case"XYZ":this._x=y*x*S+m*M*T,this._y=m*M*S-y*x*T,this._z=m*x*T+y*M*S,this._w=m*x*S-y*M*T;break;case"YXZ":this._x=y*x*S+m*M*T,this._y=m*M*S-y*x*T,this._z=m*x*T-y*M*S,this._w=m*x*S+y*M*T;break;case"ZXY":this._x=y*x*S-m*M*T,this._y=m*M*S+y*x*T,this._z=m*x*T+y*M*S,this._w=m*x*S-y*M*T;break;case"ZYX":this._x=y*x*S-m*M*T,this._y=m*M*S+y*x*T,this._z=m*x*T-y*M*S,this._w=m*x*S+y*M*T;break;case"YZX":this._x=y*x*S+m*M*T,this._y=m*M*S+y*x*T,this._z=m*x*T-y*M*S,this._w=m*x*S-y*M*T;break;case"XZY":this._x=y*x*S-m*M*T,this._y=m*M*S-y*x*T,this._z=m*x*T+y*M*S,this._w=m*x*S+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],h=n[9],m=n[2],x=n[6],S=n[10],y=r+f+S;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-h)*M,this._y=(c-m)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(x-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+m)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(c-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+x)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(c+m)/M,this._y=(h+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,h=n._y,m=n._z,x=n._w;return this._x=r*x+u*f+o*m-c*h,this._y=o*x+u*h+c*f-r*m,this._z=c*x+u*m+r*h-o*f,this._w=u*x-r*f-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),x=Math.atan2(m,f),S=Math.sin((1-n)*x)/m,y=Math.sin(n*x)/m;return this._w=u*S+this._w*y,this._x=r*S+this._x*y,this._y=o*S+this._y*y,this._z=c*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),x=2*(f*n-c*o),S=2*(c*r-u*n);return this.x=n+h*m+u*S-f*x,this.y=r+h*x+f*m-c*S,this.z=o+h*S+c*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-c*f,this.y=c*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new q,om=new Ga;class ja{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ri):ri.fromBufferAttribute(c,u),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),el.copy(r.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),tl.subVectors(this.max,Na),Ss.subVectors(e.a,Na),Ms.subVectors(e.b,Na),Es.subVectors(e.c,Na),or.subVectors(Ms,Ss),lr.subVectors(Es,Ms),Nr.subVectors(Ss,Es);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Nr.z,Nr.y,or.z,0,-or.x,lr.z,0,-lr.x,Nr.z,0,-Nr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Nr.y,Nr.x,0];return!Iu(n,Ss,Ms,Es,tl)||(n=[1,0,0,0,1,0,0,0,1],!Iu(n,Ss,Ms,Es,tl))?!1:(nl.crossVectors(or,lr),n=[nl.x,nl.y,nl.z],Iu(n,Ss,Ms,Es,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new q,new q,new q,new q,new q,new q,new q,new q],ri=new q,el=new ja,Ss=new q,Ms=new q,Es=new q,or=new q,lr=new q,Nr=new q,Na=new q,tl=new q,nl=new q,Dr=new q;function Iu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Dr.fromArray(s,c);const f=o.x*Math.abs(Dr.x)+o.y*Math.abs(Dr.y)+o.z*Math.abs(Dr.z),h=e.dot(Dr),m=n.dot(Dr),x=r.dot(Dr);if(Math.max(-Math.max(h,m,x),Math.min(h,m,x))>f)return!1}return!0}const lx=new ja,Da=new q,Uu=new q;class Vl{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):lx.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const n=Da.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Uu)),this.expandByPoint(Da.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new q,Fu=new q,il=new q,cr=new q,ku=new q,rl=new q,Ou=new q;class Cg{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Fu.copy(e).add(n).multiplyScalar(.5),il.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Fu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(il),f=cr.dot(this.direction),h=-cr.dot(il),m=cr.lengthSq(),x=Math.abs(1-u*u);let S,y,M,T;if(x>0)if(S=u*h-f,y=u*f-h,T=c*x,S>=0)if(y>=-T)if(y<=T){const A=1/x;S*=A,y*=A,M=S*(S+u*y+2*f)+y*(u*S+y+2*h)+m}else y=c,S=Math.max(0,-(u*y+f)),M=-S*S+y*(y+2*h)+m;else y=-c,S=Math.max(0,-(u*y+f)),M=-S*S+y*(y+2*h)+m;else y<=-T?(S=Math.max(0,-(-u*c+f)),y=S>0?-c:Math.min(Math.max(-c,-h),c),M=-S*S+y*(y+2*h)+m):y<=T?(S=0,y=Math.min(Math.max(-c,-h),c),M=y*(y+2*h)+m):(S=Math.max(0,-(u*c+f)),y=S>0?c:Math.min(Math.max(-c,-h),c),M=-S*S+y*(y+2*h)+m);else y=u>0?-c:c,S=Math.max(0,-(u*y+f)),M=-S*S+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Fu).addScaledVector(il,y),M}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const r=Pi.dot(this.direction),o=Pi.dot(Pi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,h;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(c=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(c=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-y.z)*S,h=(e.max.z-y.z)*S):(f=(e.max.z-y.z)*S,h=(e.min.z-y.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,r,o,c){ku.subVectors(n,e),rl.subVectors(r,e),Ou.crossVectors(ku,rl);let u=this.direction.dot(Ou),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;cr.subVectors(this.origin,e);const h=f*this.direction.dot(rl.crossVectors(cr,rl));if(h<0)return null;const m=f*this.direction.dot(ku.cross(cr));if(m<0||h+m>u)return null;const x=-f*cr.dot(Ou);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,r,o,c,u,f,h,m,x,S,y,M,T,A,v){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m,x,S,y,M,T,A,v)}set(e,n,r,o,c,u,f,h,m,x,S,y,M,T,A,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=c,_[5]=u,_[9]=f,_[13]=h,_[2]=m,_[6]=x,_[10]=S,_[14]=y,_[3]=M,_[7]=T,_[11]=A,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/ws.setFromMatrixColumn(e,0).length(),c=1/ws.setFromMatrixColumn(e,1).length(),u=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),x=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const y=u*x,M=u*S,T=f*x,A=f*S;n[0]=h*x,n[4]=-h*S,n[8]=m,n[1]=M+T*m,n[5]=y-A*m,n[9]=-f*h,n[2]=A-y*m,n[6]=T+M*m,n[10]=u*h}else if(e.order==="YXZ"){const y=h*x,M=h*S,T=m*x,A=m*S;n[0]=y+A*f,n[4]=T*f-M,n[8]=u*m,n[1]=u*S,n[5]=u*x,n[9]=-f,n[2]=M*f-T,n[6]=A+y*f,n[10]=u*h}else if(e.order==="ZXY"){const y=h*x,M=h*S,T=m*x,A=m*S;n[0]=y-A*f,n[4]=-u*S,n[8]=T+M*f,n[1]=M+T*f,n[5]=u*x,n[9]=A-y*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const y=u*x,M=u*S,T=f*x,A=f*S;n[0]=h*x,n[4]=T*m-M,n[8]=y*m+A,n[1]=h*S,n[5]=A*m+y,n[9]=M*m-T,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const y=u*h,M=u*m,T=f*h,A=f*m;n[0]=h*x,n[4]=A-y*S,n[8]=T*S+M,n[1]=S,n[5]=u*x,n[9]=-f*x,n[2]=-m*x,n[6]=M*S+T,n[10]=y-A*S}else if(e.order==="XZY"){const y=u*h,M=u*m,T=f*h,A=f*m;n[0]=h*x,n[4]=-S,n[8]=m*x,n[1]=y*S+A,n[5]=u*x,n[9]=M*S-T,n[2]=T*S-M,n[6]=f*x,n[10]=A*S+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,ux)}lookAt(e,n,r){const o=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ur.crossVectors(r,kn),ur.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ur.crossVectors(r,kn)),ur.normalize(),sl.crossVectors(kn,ur),o[0]=ur.x,o[4]=sl.x,o[8]=kn.x,o[1]=ur.y,o[5]=sl.y,o[9]=kn.y,o[2]=ur.z,o[6]=sl.z,o[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],x=r[1],S=r[5],y=r[9],M=r[13],T=r[2],A=r[6],v=r[10],_=r[14],L=r[3],P=r[7],N=r[11],G=r[15],O=o[0],U=o[4],k=o[8],te=o[12],E=o[1],R=o[5],$=o[9],ee=o[13],le=o[2],me=o[6],re=o[10],ce=o[14],H=o[3],de=o[7],oe=o[11],F=o[15];return c[0]=u*O+f*E+h*le+m*H,c[4]=u*U+f*R+h*me+m*de,c[8]=u*k+f*$+h*re+m*oe,c[12]=u*te+f*ee+h*ce+m*F,c[1]=x*O+S*E+y*le+M*H,c[5]=x*U+S*R+y*me+M*de,c[9]=x*k+S*$+y*re+M*oe,c[13]=x*te+S*ee+y*ce+M*F,c[2]=T*O+A*E+v*le+_*H,c[6]=T*U+A*R+v*me+_*de,c[10]=T*k+A*$+v*re+_*oe,c[14]=T*te+A*ee+v*ce+_*F,c[3]=L*O+P*E+N*le+G*H,c[7]=L*U+P*R+N*me+G*de,c[11]=L*k+P*$+N*re+G*oe,c[15]=L*te+P*ee+N*ce+G*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],h=e[9],m=e[13],x=e[2],S=e[6],y=e[10],M=e[14],T=e[3],A=e[7],v=e[11],_=e[15];return T*(+c*h*S-o*m*S-c*f*y+r*m*y+o*f*M-r*h*M)+A*(+n*h*M-n*m*y+c*u*y-o*u*M+o*m*x-c*h*x)+v*(+n*m*S-n*f*M-c*u*S+r*u*M+c*f*x-r*m*x)+_*(-o*f*x-n*h*S+n*f*y+o*u*S-r*u*y+r*h*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],x=e[8],S=e[9],y=e[10],M=e[11],T=e[12],A=e[13],v=e[14],_=e[15],L=S*v*m-A*y*m+A*h*M-f*v*M-S*h*_+f*y*_,P=T*y*m-x*v*m-T*h*M+u*v*M+x*h*_-u*y*_,N=x*A*m-T*S*m+T*f*M-u*A*M-x*f*_+u*S*_,G=T*S*h-x*A*h-T*f*y+u*A*y+x*f*v-u*S*v,O=n*L+r*P+o*N+c*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=L*U,e[1]=(A*y*c-S*v*c-A*o*M+r*v*M+S*o*_-r*y*_)*U,e[2]=(f*v*c-A*h*c+A*o*m-r*v*m-f*o*_+r*h*_)*U,e[3]=(S*h*c-f*y*c-S*o*m+r*y*m+f*o*M-r*h*M)*U,e[4]=P*U,e[5]=(x*v*c-T*y*c+T*o*M-n*v*M-x*o*_+n*y*_)*U,e[6]=(T*h*c-u*v*c-T*o*m+n*v*m+u*o*_-n*h*_)*U,e[7]=(u*y*c-x*h*c+x*o*m-n*y*m-u*o*M+n*h*M)*U,e[8]=N*U,e[9]=(T*S*c-x*A*c-T*r*M+n*A*M+x*r*_-n*S*_)*U,e[10]=(u*A*c-T*f*c+T*r*m-n*A*m-u*r*_+n*f*_)*U,e[11]=(x*f*c-u*S*c-x*r*m+n*S*m+u*r*M-n*f*M)*U,e[12]=G*U,e[13]=(x*A*o-T*S*o+T*r*y-n*A*y-x*r*v+n*S*v)*U,e[14]=(T*f*o-u*A*o-T*r*h+n*A*h+u*r*v-n*f*v)*U,e[15]=(u*S*o-x*f*o+x*r*h-n*S*h-u*r*y+n*f*y)*U,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,h=e.z,m=c*u,x=c*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,x*f+r,x*h-o*u,0,m*h-o*f,x*h+o*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,m=c+c,x=u+u,S=f+f,y=c*m,M=c*x,T=c*S,A=u*x,v=u*S,_=f*S,L=h*m,P=h*x,N=h*S,G=r.x,O=r.y,U=r.z;return o[0]=(1-(A+_))*G,o[1]=(M+N)*G,o[2]=(T-P)*G,o[3]=0,o[4]=(M-N)*O,o[5]=(1-(y+_))*O,o[6]=(v+L)*O,o[7]=0,o[8]=(T+P)*U,o[9]=(v-L)*U,o[10]=(1-(y+A))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=ws.set(o[0],o[1],o[2]).length();const u=ws.set(o[4],o[5],o[6]).length(),f=ws.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],si.copy(this);const m=1/c,x=1/u,S=1/f;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=x,si.elements[5]*=x,si.elements[6]*=x,si.elements[8]*=S,si.elements[9]*=S,si.elements[10]*=S,n.setFromRotationMatrix(si),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=ki){const h=this.elements,m=2*c/(n-e),x=2*c/(r-o),S=(n+e)/(n-e),y=(r+o)/(r-o);let M,T;if(f===ki)M=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(f===Il)M=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=S,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=ki){const h=this.elements,m=1/(n-e),x=1/(r-o),S=1/(u-c),y=(n+e)*m,M=(r+o)*x;let T,A;if(f===ki)T=(u+c)*S,A=-2*S;else if(f===Il)T=c*S,A=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*x,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=A,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new q,si=new Ot,cx=new q(0,0,0),ux=new q(1,1,1),ur=new q,sl=new q,kn=new q,lm=new Ot,cm=new Ga;class vi{constructor(e=0,n=0,r=0,o=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],h=o[1],m=o[5],x=o[9],S=o[2],y=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Cn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dx=0;const um=new q,Ts=new Ga,Li=new Ot,al=new q,Ia=new q,fx=new q,hx=new Ga,dm=new q(1,0,0),fm=new q(0,1,0),hm=new q(0,0,1),pm={type:"added"},px={type:"removed"},As={type:"childadded",child:null},zu={type:"childremoved",child:null};class xn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new q,n=new vi,r=new Ga,o=new q(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new at}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ia,al,this.up):Li.lookAt(al,Ia,this.up),this.quaternion.setFromRotationMatrix(Li),o&&(Li.extractRotation(o.matrixWorld),Ts.setFromRotationMatrix(Li),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(px),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,x=h.length;m<x;m++){const S=h[m];c(e.shapes,S)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(c(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),x=u(e.images),S=u(e.shapes),y=u(e.skeletons),M=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const h=[];for(const m in f){const x=f[m];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}xn.DEFAULT_UP=new q(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new q,Ni=new q,Bu=new q,Di=new q,Cs=new q,Rs=new q,mm=new q,Hu=new q,Vu=new q,Gu=new q,ju=new bt,Wu=new bt,Xu=new bt;class li{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ai.subVectors(e,n),o.cross(ai);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){ai.subVectors(o,n),Ni.subVectors(r,n),Bu.subVectors(e,n);const u=ai.dot(ai),f=ai.dot(Ni),h=ai.dot(Bu),m=Ni.dot(Ni),x=Ni.dot(Bu),S=u*m-f*f;if(S===0)return c.set(0,0,0),null;const y=1/S,M=(m*h-f*x)*y,T=(u*x-f*h)*y;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,r,o,c,u,f,h){return this.getBarycoord(e,n,r,o,Di)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Di.x),h.addScaledVector(u,Di.y),h.addScaledVector(f,Di.z),h)}static getInterpolatedAttribute(e,n,r,o,c,u){return ju.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),ju.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,r),Xu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ju,c.x),u.addScaledVector(Wu,c.y),u.addScaledVector(Xu,c.z),u}static isFrontFacing(e,n,r,o){return ai.subVectors(r,n),Ni.subVectors(e,n),ai.cross(Ni).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ai.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return li.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Cs.subVectors(o,r),Rs.subVectors(c,r),Hu.subVectors(e,r);const h=Cs.dot(Hu),m=Rs.dot(Hu);if(h<=0&&m<=0)return n.copy(r);Vu.subVectors(e,o);const x=Cs.dot(Vu),S=Rs.dot(Vu);if(x>=0&&S<=x)return n.copy(o);const y=h*S-x*m;if(y<=0&&h>=0&&x<=0)return u=h/(h-x),n.copy(r).addScaledVector(Cs,u);Gu.subVectors(e,c);const M=Cs.dot(Gu),T=Rs.dot(Gu);if(T>=0&&M<=T)return n.copy(c);const A=M*m-h*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Rs,f);const v=x*T-M*S;if(v<=0&&S-x>=0&&M-T>=0)return mm.subVectors(c,o),f=(S-x)/(S-x+(M-T)),n.copy(o).addScaledVector(mm,f);const _=1/(v+A+y);return u=A*_,f=y*_,n.copy(r).addScaledVector(Cs,u).addScaledVector(Rs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class ot{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=Z_(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=qu(u,c,e+1/3),this.g=qu(u,c,e),this.b=qu(u,c,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,n=mi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const r=bg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Lu(e.r),this.g=Lu(e.g),this.b=Lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Tt.fromWorkingColorSpace(pn.copy(this),e),Math.round(Cn(pn.r*255,0,255))*65536+Math.round(Cn(pn.g*255,0,255))*256+Math.round(Cn(pn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,o=pn.g,c=pn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let h,m;const x=(f+u)/2;if(f===u)h=0,m=0;else{const S=u-f;switch(m=x<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-c)/S+(o<c?6:0);break;case o:h=(c-r)/S+2;break;case c:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=x,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=mi){Tt.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,o=pn.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(ol);const r=bu(dr.h,ol.h,n),o=bu(dr.s,ol.s,n),c=bu(dr.l,ol.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new ot;ot.NAMES=bg;let mx=0;class qs extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=ks,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=od,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ad&&(r.blendSrc=this.blendSrc),this.blendDst!==od&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pg extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new q,ll=new pt;class Pn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=nm,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),o=An(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),o=An(o,this.array),c=An(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class Lg extends Pn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ng extends Pn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Bn extends Pn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let gx=0;const Yn=new Ot,Yu=new xn,bs=new q,On=new ja,Ua=new ja,nn=new q;class Kn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?Ng:Lg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new at().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Bn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];On.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Ua.setFromBufferAttribute(f),this.morphTargetsRelative?(nn.addVectors(On.min,Ua.min),On.expandByPoint(nn),nn.addVectors(On.max,Ua.max),On.expandByPoint(nn)):(On.expandByPoint(Ua.min),On.expandByPoint(Ua.max))}On.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(nn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)nn.fromBufferAttribute(f,m),h&&(bs.fromBufferAttribute(e,m),nn.add(bs)),o=Math.max(o,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let k=0;k<r.count;k++)f[k]=new q,h[k]=new q;const m=new q,x=new q,S=new q,y=new pt,M=new pt,T=new pt,A=new q,v=new q;function _(k,te,E){m.fromBufferAttribute(r,k),x.fromBufferAttribute(r,te),S.fromBufferAttribute(r,E),y.fromBufferAttribute(c,k),M.fromBufferAttribute(c,te),T.fromBufferAttribute(c,E),x.sub(m),S.sub(m),M.sub(y),T.sub(y);const R=1/(M.x*T.y-T.x*M.y);isFinite(R)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(S,-M.y).multiplyScalar(R),v.copy(S).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(R),f[k].add(A),f[te].add(A),f[E].add(A),h[k].add(v),h[te].add(v),h[E].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,te=L.length;k<te;++k){const E=L[k],R=E.start,$=E.count;for(let ee=R,le=R+$;ee<le;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const P=new q,N=new q,G=new q,O=new q;function U(k){G.fromBufferAttribute(o,k),O.copy(G);const te=f[k];P.copy(te),P.sub(G.multiplyScalar(G.dot(te))).normalize(),N.crossVectors(O,te);const R=N.dot(h[k])<0?-1:1;u.setXYZW(k,P.x,P.y,P.z,R)}for(let k=0,te=L.length;k<te;++k){const E=L[k],R=E.start,$=E.count;for(let ee=R,le=R+$;ee<le;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new q,c=new q,u=new q,f=new q,h=new q,m=new q,x=new q,S=new q;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),A=e.getX(y+1),v=e.getX(y+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,v),x.subVectors(u,c),S.subVectors(o,c),x.cross(S),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),f.add(x),h.add(x),m.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let y=0,M=n.count;y<M;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),x.subVectors(u,c),S.subVectors(o,c),x.cross(S),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(f,h){const m=f.array,x=f.itemSize,S=f.normalized,y=new m.constructor(h.length*x);let M=0,T=0;for(let A=0,v=h.length;A<v;A++){f.isInterleavedBufferAttribute?M=h[A]*f.data.stride+f.offset:M=h[A]*x;for(let _=0;_<x;_++)y[T++]=m[M++]}return new Pn(y,x,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let x=0,S=m.length;x<S;x++){const y=m[x],M=e(y,r);h.push(M)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],x=[];for(let S=0,y=m.length;S<y;S++){const M=m[S];x.push(M.toJSON(e.data))}x.length>0&&(o[h]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const c=e.morphAttributes;for(const m in c){const x=[],S=c[m];for(let y=0,M=S.length;y<M;y++)x.push(S[y].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Ot,Ir=new Cg,cl=new Vl,vm=new q,ul=new q,dl=new q,fl=new q,$u=new q,hl=new q,_m=new q,pl=new q;class zn extends xn{constructor(e=new Kn,n=new Pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){hl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const x=f[h],S=c[h];x!==0&&($u.fromBufferAttribute(S,e),u?hl.addScaledVector($u,x):hl.addScaledVector($u.sub(n),x))}n.add(hl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(c),Ir.copy(e.ray).recast(e.near),!(cl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(cl,vm)===null||Ir.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(gm.copy(c).invert(),Ir.copy(e.ray).applyMatrix4(gm),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,y=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,A=y.length;T<A;T++){const v=y[T],_=u[v.materialIndex],L=Math.max(v.start,M.start),P=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let N=L,G=P;N<G;N+=3){const O=f.getX(N),U=f.getX(N+1),k=f.getX(N+2);o=ml(this,_,e,r,m,x,S,O,U,k),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let v=T,_=A;v<_;v+=3){const L=f.getX(v),P=f.getX(v+1),N=f.getX(v+2);o=ml(this,u,e,r,m,x,S,L,P,N),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,A=y.length;T<A;T++){const v=y[T],_=u[v.materialIndex],L=Math.max(v.start,M.start),P=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let N=L,G=P;N<G;N+=3){const O=N,U=N+1,k=N+2;o=ml(this,_,e,r,m,x,S,O,U,k),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let v=T,_=A;v<_;v+=3){const L=v,P=v+1,N=v+2;o=ml(this,u,e,r,m,x,S,L,P,N),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function vx(s,e,n,r,o,c,u,f){let h;if(e.side===Rn?h=r.intersectTriangle(u,c,o,!0,f):h=r.intersectTriangle(o,c,u,e.side===gr,f),h===null)return null;pl.copy(f),pl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(pl);return m<n.near||m>n.far?null:{distance:m,point:pl.clone(),object:s}}function ml(s,e,n,r,o,c,u,f,h,m){s.getVertexPosition(f,ul),s.getVertexPosition(h,dl),s.getVertexPosition(m,fl);const x=vx(s,e,n,r,ul,dl,fl,_m);if(x){const S=new q;li.getBarycoord(_m,ul,dl,fl,S),o&&(x.uv=li.getInterpolatedAttribute(o,f,h,m,S,new pt)),c&&(x.uv1=li.getInterpolatedAttribute(c,f,h,m,S,new pt)),u&&(x.normal=li.getInterpolatedAttribute(u,f,h,m,S,new q),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:f,b:h,c:m,normal:new q,materialIndex:0};li.getNormal(ul,dl,fl,y.normal),x.face=y,x.barycoord=S}return x}class Wa extends Kn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],x=[],S=[];let y=0,M=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(S,2));function T(A,v,_,L,P,N,G,O,U,k,te){const E=N/U,R=G/k,$=N/2,ee=G/2,le=O/2,me=U+1,re=k+1;let ce=0,H=0;const de=new q;for(let oe=0;oe<re;oe++){const F=oe*R-ee;for(let se=0;se<me;se++){const Ue=se*E-$;de[A]=Ue*L,de[v]=F*P,de[_]=le,m.push(de.x,de.y,de.z),de[A]=0,de[v]=0,de[_]=O>0?1:-1,x.push(de.x,de.y,de.z),S.push(se/U),S.push(1-oe/k),ce+=1}}for(let oe=0;oe<k;oe++)for(let F=0;F<U;F++){const se=y+F+me*oe,Ue=y+F+me*(oe+1),Q=y+(F+1)+me*(oe+1),ue=y+(F+1)+me*oe;h.push(se,Ue,ue),h.push(Ue,Q,ue),H+=6}f.addGroup(M,H,te),M+=H,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function vn(s){const e={};for(let n=0;n<s.length;n++){const r=Ws(s[n]);for(const o in r)e[o]=r[o]}return e}function _x(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const xx={clone:Ws,merge:vn};var yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=_x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ig extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new q,xm=new pt,ym=new pt;class _n extends Ig{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,xm,ym),n.subVectors(ym,xm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ru*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class Mx extends xn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new _n(Ps,Ls,e,n);o.layers=this.layers,this.add(o);const c=new _n(Ps,Ls,e,n);c.layers=this.layers,this.add(c);const u=new _n(Ps,Ls,e,n);u.layers=this.layers,this.add(u);const f=new _n(Ps,Ls,e,n);f.layers=this.layers,this.add(f);const h=new _n(Ps,Ls,e,n);h.layers=this.layers,this.add(h);const m=new _n(Ps,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,h]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,m,x]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(S,y,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Ug extends bn{constructor(e,n,r,o,c,u,f,h,m,x){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,r,o,c,u,f,h,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ex extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ug(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Wa(5,5,5),c=new vr({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rn,blending:pr});c.uniforms.tEquirect.value=n;const u=new zn(o,c),f=n.minFilter;return n.minFilter===Gr&&(n.minFilter=oi),new Mx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}const Ku=new q,wx=new q,Tx=new at;class Or{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ku.subVectors(r,n).cross(wx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ku),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Tx.getNormalMatrix(e),o=this.coplanarPoint(Ku).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Vl,gl=new q;class uf{constructor(e=new Or,n=new Or,r=new Or,o=new Or,c=new Or,u=new Or){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,o=e.elements,c=o[0],u=o[1],f=o[2],h=o[3],m=o[4],x=o[5],S=o[6],y=o[7],M=o[8],T=o[9],A=o[10],v=o[11],_=o[12],L=o[13],P=o[14],N=o[15];if(r[0].setComponents(h-c,y-m,v-M,N-_).normalize(),r[1].setComponents(h+c,y+m,v+M,N+_).normalize(),r[2].setComponents(h+u,y+x,v+T,N+L).normalize(),r[3].setComponents(h-u,y-x,v-T,N-L).normalize(),r[4].setComponents(h-f,y-S,v-A,N-P).normalize(),n===ki)r[5].setComponents(h+f,y+S,v+A,N+P).normalize();else if(n===Il)r[5].setComponents(f,S,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(gl.x=o.normal.x>0?e.max.x:e.min.x,gl.y=o.normal.y>0?e.max.y:e.min.y,gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Ax(s){const e=new WeakMap;function n(f,h){const m=f.array,x=f.usage,S=m.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,m,x),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,m){const x=h.array,S=h.updateRanges;if(s.bindBuffer(m,f),S.length===0)s.bufferSubData(m,0,x);else{S.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<S.length;M++){const T=S[y],A=S[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,S[y]=A)}S.length=y+1;for(let M=0,T=S.length;M<T;M++){const A=S[M];s.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:c,update:u}}class Gl extends Kn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,x=h+1,S=e/f,y=n/h,M=[],T=[],A=[],v=[];for(let _=0;_<x;_++){const L=_*y-u;for(let P=0;P<m;P++){const N=P*S-c;T.push(N,-L,0),A.push(0,0,1),v.push(P/f),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const P=L+m*_,N=L+m*(_+1),G=L+1+m*(_+1),O=L+1+m*_;M.push(P,N,O),M.push(N,G,O)}this.setIndex(M),this.setAttribute("position",new Bn(T,3)),this.setAttribute("normal",new Bn(A,3)),this.setAttribute("uv",new Bn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ry=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,py=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,my=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_y=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,My=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ty=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ay=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Py=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,By=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$y=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,US=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Cx,alphahash_pars_fragment:Rx,alphamap_fragment:bx,alphamap_pars_fragment:Px,alphatest_fragment:Lx,alphatest_pars_fragment:Nx,aomap_fragment:Dx,aomap_pars_fragment:Ix,batching_pars_vertex:Ux,batching_vertex:Fx,begin_vertex:kx,beginnormal_vertex:Ox,bsdfs:zx,iridescence_fragment:Bx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:jx,clipping_planes_vertex:Wx,color_fragment:Xx,color_pars_fragment:qx,color_pars_vertex:Yx,color_vertex:$x,common:Kx,cube_uv_reflection_fragment:Zx,defaultnormal_vertex:Qx,displacementmap_pars_vertex:Jx,displacementmap_vertex:ey,emissivemap_fragment:ty,emissivemap_pars_fragment:ny,colorspace_fragment:iy,colorspace_pars_fragment:ry,envmap_fragment:sy,envmap_common_pars_fragment:ay,envmap_pars_fragment:oy,envmap_pars_vertex:ly,envmap_physical_pars_fragment:xy,envmap_vertex:cy,fog_vertex:uy,fog_pars_vertex:dy,fog_fragment:fy,fog_pars_fragment:hy,gradientmap_pars_fragment:py,lightmap_pars_fragment:my,lights_lambert_fragment:gy,lights_lambert_pars_fragment:vy,lights_pars_begin:_y,lights_toon_fragment:yy,lights_toon_pars_fragment:Sy,lights_phong_fragment:My,lights_phong_pars_fragment:Ey,lights_physical_fragment:wy,lights_physical_pars_fragment:Ty,lights_fragment_begin:Ay,lights_fragment_maps:Cy,lights_fragment_end:Ry,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:Py,logdepthbuf_pars_vertex:Ly,logdepthbuf_vertex:Ny,map_fragment:Dy,map_pars_fragment:Iy,map_particle_fragment:Uy,map_particle_pars_fragment:Fy,metalnessmap_fragment:ky,metalnessmap_pars_fragment:Oy,morphinstance_vertex:zy,morphcolor_vertex:By,morphnormal_vertex:Hy,morphtarget_pars_vertex:Vy,morphtarget_vertex:Gy,normal_fragment_begin:jy,normal_fragment_maps:Wy,normal_pars_fragment:Xy,normal_pars_vertex:qy,normal_vertex:Yy,normalmap_pars_fragment:$y,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:Qy,iridescence_pars_fragment:Jy,opaque_fragment:eS,packing:tS,premultiplied_alpha_fragment:nS,project_vertex:iS,dithering_fragment:rS,dithering_pars_fragment:sS,roughnessmap_fragment:aS,roughnessmap_pars_fragment:oS,shadowmap_pars_fragment:lS,shadowmap_pars_vertex:cS,shadowmap_vertex:uS,shadowmask_pars_fragment:dS,skinbase_vertex:fS,skinning_pars_vertex:hS,skinning_vertex:pS,skinnormal_vertex:mS,specularmap_fragment:gS,specularmap_pars_fragment:vS,tonemapping_fragment:_S,tonemapping_pars_fragment:xS,transmission_fragment:yS,transmission_pars_fragment:SS,uv_pars_fragment:MS,uv_pars_vertex:ES,uv_vertex:wS,worldpos_vertex:TS,background_vert:AS,background_frag:CS,backgroundCube_vert:RS,backgroundCube_frag:bS,cube_vert:PS,cube_frag:LS,depth_vert:NS,depth_frag:DS,distanceRGBA_vert:IS,distanceRGBA_frag:US,equirect_vert:FS,equirect_frag:kS,linedashed_vert:OS,linedashed_frag:zS,meshbasic_vert:BS,meshbasic_frag:HS,meshlambert_vert:VS,meshlambert_frag:GS,meshmatcap_vert:jS,meshmatcap_frag:WS,meshnormal_vert:XS,meshnormal_frag:qS,meshphong_vert:YS,meshphong_frag:$S,meshphysical_vert:KS,meshphysical_frag:ZS,meshtoon_vert:QS,meshtoon_frag:JS,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:rM,sprite_frag:sM},Re={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},gi={basic:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:vn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:vn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:vn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:vn([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:vn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:vn([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:vn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:vn([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:vn([Re.common,Re.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:vn([Re.lights,Re.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};gi.physical={uniforms:vn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const vl={r:0,b:0,g:0},Fr=new vi,aM=new Ot;function oM(s,e,n,r,o,c,u){const f=new ot(0);let h=c===!0?0:1,m,x,S=null,y=0,M=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function A(L){let P=!1;const N=T(L);N===null?_(f,h):N&&N.isColor&&(_(N,1),P=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(L,P){const N=T(P);N&&(N.isCubeTexture||N.mapping===Bl)?(x===void 0&&(x=new zn(new Wa(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:Ws(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(G,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Fr.copy(P.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),x.material.uniforms.envMap.value=N,x.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(aM.makeRotationFromEuler(Fr)),x.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Ut,(S!==N||y!==N.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,S=N,y=N.version,M=s.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new zn(new Gl(2,2),new vr({name:"BackgroundMaterial",uniforms:Ws(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Ut,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||y!==N.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,S=N,y=N.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,P){L.getRGB(vl,Dg(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,P,u)}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),h=P,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(f,h)},render:A,addToRenderList:v}}function lM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,u=!1;function f(E,R,$,ee,le){let me=!1;const re=S(ee,$,R);c!==re&&(c=re,m(c.object)),me=M(E,ee,$,le),me&&T(E,ee,$,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,N(E,R,$,ee),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function x(E){return s.deleteVertexArray(E)}function S(E,R,$){const ee=$.wireframe===!0;let le=r[E.id];le===void 0&&(le={},r[E.id]=le);let me=le[R.id];me===void 0&&(me={},le[R.id]=me);let re=me[ee];return re===void 0&&(re=y(h()),me[ee]=re),re}function y(E){const R=[],$=[],ee=[];for(let le=0;le<n;le++)R[le]=0,$[le]=0,ee[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:$,attributeDivisors:ee,object:E,attributes:{},index:null}}function M(E,R,$,ee){const le=c.attributes,me=R.attributes;let re=0;const ce=$.getAttributes();for(const H in ce)if(ce[H].location>=0){const oe=le[H];let F=me[H];if(F===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(F=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(F=E.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;re++}return c.attributesNum!==re||c.index!==ee}function T(E,R,$,ee){const le={},me=R.attributes;let re=0;const ce=$.getAttributes();for(const H in ce)if(ce[H].location>=0){let oe=me[H];oe===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),le[H]=F,re++}c.attributes=le,c.attributesNum=re,c.index=ee}function A(){const E=c.newAttributes;for(let R=0,$=E.length;R<$;R++)E[R]=0}function v(E){_(E,0)}function _(E,R){const $=c.newAttributes,ee=c.enabledAttributes,le=c.attributeDivisors;$[E]=1,ee[E]===0&&(s.enableVertexAttribArray(E),ee[E]=1),le[E]!==R&&(s.vertexAttribDivisor(E,R),le[E]=R)}function L(){const E=c.newAttributes,R=c.enabledAttributes;for(let $=0,ee=R.length;$<ee;$++)R[$]!==E[$]&&(s.disableVertexAttribArray($),R[$]=0)}function P(E,R,$,ee,le,me,re){re===!0?s.vertexAttribIPointer(E,R,$,le,me):s.vertexAttribPointer(E,R,$,ee,le,me)}function N(E,R,$,ee){A();const le=ee.attributes,me=$.getAttributes(),re=R.defaultAttributeValues;for(const ce in me){const H=me[ce];if(H.location>=0){let de=le[ce];if(de===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const oe=de.normalized,F=de.itemSize,se=e.get(de);if(se===void 0)continue;const Ue=se.buffer,Q=se.type,ue=se.bytesPerElement,ye=Q===s.INT||Q===s.UNSIGNED_INT||de.gpuType===nf;if(de.isInterleavedBufferAttribute){const Se=de.data,be=Se.stride,Pe=de.offset;if(Se.isInstancedInterleavedBuffer){for(let et=0;et<H.locationSize;et++)_(H.location+et,Se.meshPerAttribute);E.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let et=0;et<H.locationSize;et++)v(H.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let et=0;et<H.locationSize;et++)P(H.location+et,F/H.locationSize,Q,oe,be*ue,(Pe+F/H.locationSize*et)*ue,ye)}else{if(de.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)_(H.location+Se,de.meshPerAttribute);E.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Se=0;Se<H.locationSize;Se++)v(H.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Se=0;Se<H.locationSize;Se++)P(H.location+Se,F/H.locationSize,Q,oe,F*ue,F/H.locationSize*Se*ue,ye)}}else if(re!==void 0){const oe=re[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(H.location,oe);break;case 3:s.vertexAttrib3fv(H.location,oe);break;case 4:s.vertexAttrib4fv(H.location,oe);break;default:s.vertexAttrib1fv(H.location,oe)}}}}L()}function G(){k();for(const E in r){const R=r[E];for(const $ in R){const ee=R[$];for(const le in ee)x(ee[le].object),delete ee[le];delete R[$]}delete r[E]}}function O(E){if(r[E.id]===void 0)return;const R=r[E.id];for(const $ in R){const ee=R[$];for(const le in ee)x(ee[le].object),delete ee[le];delete R[$]}delete r[E.id]}function U(E){for(const R in r){const $=r[R];if($[E.id]===void 0)continue;const ee=$[E.id];for(const le in ee)x(ee[le].object),delete ee[le];delete $[E.id]}}function k(){te(),u=!0,c!==o&&(c=o,m(c.object))}function te(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:k,resetDefaultState:te,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:v,disableUnusedAttributes:L}}function cM(s,e,n){let r;function o(m){r=m}function c(m,x){s.drawArrays(r,m,x),n.update(x,r,1)}function u(m,x,S){S!==0&&(s.drawArraysInstanced(r,m,x,S),n.update(x,r,S))}function f(m,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,S);let M=0;for(let T=0;T<S;T++)M+=x[T];n.update(M,r,1)}function h(m,x,S,y){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)u(m[T],x[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,S);let T=0;for(let A=0;A<S;A++)T+=x[A];for(let A=0;A<y.length;A++)n.update(T,r,y[A])}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function uM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==ci&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const k=U===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Oi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fi&&!k)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=h(m);x!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(y===!0){const U=e.get("EXT_clip_control");U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT)}const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:S,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:G,maxSamples:O}}function dM(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Or,f=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const M=S.length!==0||y||r!==0||o;return o=y,r=S.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,y){n=x(S,y,0)},this.setState=function(S,y,M){const T=S.clippingPlanes,A=S.clipIntersection,v=S.clipShadows,_=s.get(S);if(!o||T===null||T.length===0||c&&!v)c?x(null):m();else{const L=c?0:r,P=L*4;let N=_.clippingState||null;h.value=N,N=x(T,y,P,M);for(let G=0;G!==P;++G)N[G]=n[G];_.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,y,M,T){const A=S!==null?S.length:0;let v=null;if(A!==0){if(v=h.value,T!==!0||v===null){const _=M+A*4,L=y.matrixWorldInverse;f.getNormalMatrix(L),(v===null||v.length<_)&&(v=new Float32Array(_));for(let P=0,N=M;P!==A;++P,N+=4)u.copy(S[P]).applyMatrix4(L,f),u.normal.toArray(v,N),v[N+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function fM(s){let e=new WeakMap;function n(u,f){return f===md?u.mapping=Hs:f===gd&&(u.mapping=Vs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===md||f===gd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new Ex(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class hM extends Ig{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=x*this.view.offsetY,h=f-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,Sm=[.125,.215,.35,.446,.526,.582],Hr=20,Zu=new hM,Mm=new ot;let Qu=null,Ju=0,ed=0,td=!1;const zr=(1+Math.sqrt(5))/2,Ns=1/zr,Em=[new q(-zr,Ns,0),new q(zr,Ns,0),new q(-Ns,0,zr),new q(Ns,0,zr),new q(0,zr,-Ns),new q(0,zr,Ns),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,Ju,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Ha,format:ci,colorSpace:_r,depthBuffer:!1},o=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(c)),this._blurMaterial=mM(c,e,n)}return o}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,r,o){const f=new _n(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,y=x.toneMapping;x.getClearColor(Mm),x.toneMapping=mr,x.autoClear=!1;const M=new Pg({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),T=new zn(new Wa,M);let A=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,A=!0):(M.color.copy(Mm),A=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):L===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const P=this._cubeSize;_l(o,L*P,_>2?P:0,P,P),x.setRenderTarget(o),A&&x.render(T,f),x.render(e,f)}T.geometry.dispose(),T.material.dispose(),x.toneMapping=y,x.autoClear=S,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Hs||e.mapping===Vs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new zn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;_l(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Zu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Em[(o-c-1)%Em.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,S=new zn(this._lodPlanes[o],m),y=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Hr-1),A=c/T,v=isFinite(c)?1+Math.floor(x*A):Hr;v>Hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Hr}`);const _=[];let L=0;for(let U=0;U<Hr;++U){const k=U/A,te=Math.exp(-k*k/2);_.push(te),U===0?L+=te:U<v&&(L+=2*te)}for(let U=0;U<_.length;U++)_[U]=_[U]/L;y.envMap.value=e.texture,y.samples.value=v,y.weights.value=_,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:P}=this;y.dTheta.value=T,y.mipInt.value=P-r;const N=this._sizeLods[o],G=3*N*(o>P-Us?o-P+Us:0),O=4*(this._cubeSize-N);_l(n,G,O,3*N,2*N),h.setRenderTarget(n),h.render(S,Zu)}}function pM(s){const e=[],n=[],r=[];let o=s;const c=s-Us+1+Sm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);n.push(f);let h=1/f;u>s-Us?h=Sm[u-s+Us-1]:u===0&&(h=0),r.push(h);const m=1/(f-2),x=-m,S=1+m,y=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,T=6,A=3,v=2,_=1,L=new Float32Array(A*T*M),P=new Float32Array(v*T*M),N=new Float32Array(_*T*M);for(let O=0;O<M;O++){const U=O%3*2/3-1,k=O>2?0:-1,te=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];L.set(te,A*T*O),P.set(y,v*T*O);const E=[O,O,O,O,O,O];N.set(E,_*T*O)}const G=new Kn;G.setAttribute("position",new Pn(L,A)),G.setAttribute("uv",new Pn(P,v)),G.setAttribute("faceIndex",new Pn(N,_)),e.push(G),o>Us&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tm(s,e,n){const r=new Xr(s,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function mM(s,e,n){const r=new Float32Array(Hr),o=new q(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Am(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Cm(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===md||h===gd,x=h===Hs||h===Vs;if(m||x){let S=e.get(f);const y=S!==void 0?S.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new wm(s)),S=m?n.fromEquirectangular(f,S):n.fromCubemap(f,S),S.texture.pmremVersion=f.pmremVersion,e.set(f,S),S.texture;if(S!==void 0)return S.texture;{const M=f.image;return m&&M&&M.height>0||x&&M&&o(M)?(n===null&&(n=new wm(s)),S=m?n.fromEquirectangular(f):n.fromCubemap(f),S.texture.pmremVersion=f.pmremVersion,e.set(f,S),f.addEventListener("dispose",c),S.texture):null}}}return f}function o(f){let h=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function vM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Rl("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function _M(s,e,n,r){const o={},c=new WeakMap;function u(S){const y=S.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);for(const T in y.morphAttributes){const A=y.morphAttributes[T];for(let v=0,_=A.length;v<_;v++)e.remove(A[v])}y.removeEventListener("dispose",u),delete o[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(S,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,n.memory.geometries++),y}function h(S){const y=S.attributes;for(const T in y)e.update(y[T],s.ARRAY_BUFFER);const M=S.morphAttributes;for(const T in M){const A=M[T];for(let v=0,_=A.length;v<_;v++)e.update(A[v],s.ARRAY_BUFFER)}}function m(S){const y=[],M=S.index,T=S.attributes.position;let A=0;if(M!==null){const L=M.array;A=M.version;for(let P=0,N=L.length;P<N;P+=3){const G=L[P+0],O=L[P+1],U=L[P+2];y.push(G,O,O,U,U,G)}}else if(T!==void 0){const L=T.array;A=T.version;for(let P=0,N=L.length/3-1;P<N;P+=3){const G=P+0,O=P+1,U=P+2;y.push(G,O,O,U,U,G)}}else return;const v=new(wg(y)?Ng:Lg)(y,1);v.version=A;const _=c.get(S);_&&e.remove(_),c.set(S,v)}function x(S){const y=c.get(S);if(y){const M=S.index;M!==null&&y.version<M.version&&m(S)}else m(S);return c.get(S)}return{get:f,update:h,getWireframeAttribute:x}}function xM(s,e,n){let r;function o(y){r=y}let c,u;function f(y){c=y.type,u=y.bytesPerElement}function h(y,M){s.drawElements(r,M,c,y*u),n.update(M,r,1)}function m(y,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,y*u,T),n.update(M,r,T))}function x(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,T);let v=0;for(let _=0;_<T;_++)v+=M[_];n.update(v,r,1)}function S(y,M,T,A){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<y.length;_++)m(y[_]/u,M[_],A[_]);else{v.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,A,0,T);let _=0;for(let L=0;L<T;L++)_+=M[L];for(let L=0;L<A.length;L++)n.update(_,r,A[L])}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function yM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function SM(s,e,n){const r=new WeakMap,o=new bt;function c(u,f,h){const m=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=x!==void 0?x.length:0;let y=r.get(f);if(y===void 0||y.count!==S){let E=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",E)};var M=E;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let N=0;T===!0&&(N=1),A===!0&&(N=2),v===!0&&(N=3);let G=f.attributes.position.count*N,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const U=new Float32Array(G*O*4*S),k=new Ag(U,G,O,S);k.type=Fi,k.needsUpdate=!0;const te=N*4;for(let R=0;R<S;R++){const $=_[R],ee=L[R],le=P[R],me=G*O*4*R;for(let re=0;re<$.count;re++){const ce=re*te;T===!0&&(o.fromBufferAttribute($,re),U[me+ce+0]=o.x,U[me+ce+1]=o.y,U[me+ce+2]=o.z,U[me+ce+3]=0),A===!0&&(o.fromBufferAttribute(ee,re),U[me+ce+4]=o.x,U[me+ce+5]=o.y,U[me+ce+6]=o.z,U[me+ce+7]=0),v===!0&&(o.fromBufferAttribute(le,re),U[me+ce+8]=o.x,U[me+ce+9]=o.y,U[me+ce+10]=o.z,U[me+ce+11]=le.itemSize===4?o.w:1)}}y={count:S,texture:k,size:new pt(G,O)},r.set(f,y),f.addEventListener("dispose",E)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const A=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function MM(s,e,n,r){let o=new WeakMap;function c(h){const m=r.render.frame,x=h.geometry,S=e.get(h,x);if(o.get(S)!==m&&(e.update(S),o.set(S,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return S}function u(){o=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class kg extends bn{constructor(e,n,r,o,c,u,f,h,m,x=Os){if(x!==Os&&x!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Os&&(r=Wr),r===void 0&&x===js&&(r=Gs),super(null,o,c,u,f,h,x,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:$n,this.minFilter=h!==void 0?h:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Og=new bn,Rm=new kg(1,1),zg=new Ag,Bg=new ox,Hg=new Ug,bm=[],Pm=[],Lm=new Float32Array(16),Nm=new Float32Array(9),Dm=new Float32Array(4);function Ys(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=bm[o];if(c===void 0&&(c=new Float32Array(o),bm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function jl(s,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function EM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function wM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function TM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function AM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function CM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Dm.set(r),s.uniformMatrix2fv(this.addr,!1,Dm),Kt(n,r)}}function RM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Nm.set(r),s.uniformMatrix3fv(this.addr,!1,Nm),Kt(n,r)}}function bM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Lm.set(r),s.uniformMatrix4fv(this.addr,!1,Lm),Kt(n,r)}}function PM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function NM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function IM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function FM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function OM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Rm.compareFunction=Eg,c=Rm):c=Og,n.setTexture2D(e||c,o)}function zM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Bg,o)}function BM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Hg,o)}function HM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||zg,o)}function VM(s){switch(s){case 5126:return EM;case 35664:return wM;case 35665:return TM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return bM;case 5124:case 35670:return PM;case 35667:case 35671:return LM;case 35668:case 35672:return NM;case 35669:case 35673:return DM;case 5125:return IM;case 36294:return UM;case 36295:return FM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return HM}}function GM(s,e){s.uniform1fv(this.addr,e)}function jM(s,e){const n=Ys(e,this.size,2);s.uniform2fv(this.addr,n)}function WM(s,e){const n=Ys(e,this.size,3);s.uniform3fv(this.addr,n)}function XM(s,e){const n=Ys(e,this.size,4);s.uniform4fv(this.addr,n)}function qM(s,e){const n=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function YM(s,e){const n=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function $M(s,e){const n=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function KM(s,e){s.uniform1iv(this.addr,e)}function ZM(s,e){s.uniform2iv(this.addr,e)}function QM(s,e){s.uniform3iv(this.addr,e)}function JM(s,e){s.uniform4iv(this.addr,e)}function e1(s,e){s.uniform1uiv(this.addr,e)}function t1(s,e){s.uniform2uiv(this.addr,e)}function n1(s,e){s.uniform3uiv(this.addr,e)}function i1(s,e){s.uniform4uiv(this.addr,e)}function r1(s,e,n){const r=this.cache,o=e.length,c=jl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Og,c[u])}function s1(s,e,n){const r=this.cache,o=e.length,c=jl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Bg,c[u])}function a1(s,e,n){const r=this.cache,o=e.length,c=jl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Hg,c[u])}function o1(s,e,n){const r=this.cache,o=e.length,c=jl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||zg,c[u])}function l1(s){switch(s){case 5126:return GM;case 35664:return jM;case 35665:return WM;case 35666:return XM;case 35674:return qM;case 35675:return YM;case 35676:return $M;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return QM;case 35669:case 35673:return JM;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return o1}}class c1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=VM(n.type)}}class u1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=l1(n.type)}}class d1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function f1(s,e,n){const r=s.name,o=r.length;for(nd.lastIndex=0;;){const c=nd.exec(r),u=nd.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){Im(n,m===void 0?new c1(f,s,e):new u1(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new d1(f),Im(n,S)),n=S}}}class bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);f1(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Um(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const h1=37297;let p1=0;function m1(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}function g1(s){const e=Tt.getPrimaries(Tt.workingColorSpace),n=Tt.getPrimaries(s);let r;switch(e===n?r="":e===Dl&&n===Nl?r="LinearDisplayP3ToLinearSRGB":e===Nl&&n===Dl&&(r="LinearSRGBToLinearDisplayP3"),s){case _r:case Hl:return[r,"LinearTransferOETF"];case mi:case cf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Fm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+m1(s.getShaderSource(e),u)}else return o}function v1(s,e){const n=g1(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _1(s,e){let n;switch(e){case D_:n="Linear";break;case I_:n="Reinhard";break;case U_:n="Cineon";break;case F_:n="ACESFilmic";break;case O_:n="AgX";break;case z_:n="Neutral";break;case k_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new q;function x1(){Tt.getLuminanceCoefficients(xl);const s=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function S1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function M1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Oa(s){return s!==""}function km(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(s){return s.replace(E1,T1)}const w1=new Map;function T1(s,e){let n=st[e];if(n===void 0){const r=w1.get(e);if(r!==void 0)n=st[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(s){return s.replace(A1,C1)}function C1(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ug?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function L1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case L_:e="ENVMAP_BLENDING_MIX";break;case N_:e="ENVMAP_BLENDING_ADD";break}return e}function N1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function D1(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=R1(n),m=b1(n),x=P1(n),S=L1(n),y=N1(n),M=y1(n),T=S1(c),A=o.createProgram();let v,_,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oa).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oa).join(`
`),_.length>0&&(_+=`
`)):(v=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),_=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?st.tonemapping_pars_fragment:"",n.toneMapping!==mr?_1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,v1("linearToOutputTexel",n.outputColorSpace),x1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),u=Xd(u),u=km(u,n),u=Om(u,n),f=Xd(f),f=km(f,n),f=Om(f,n),u=zm(u),f=zm(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=L+v+u,N=L+_+f,G=Um(o,o.VERTEX_SHADER,P),O=Um(o,o.FRAGMENT_SHADER,N);o.attachShader(A,G),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function U(R){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(A).trim(),ee=o.getShaderInfoLog(G).trim(),le=o.getShaderInfoLog(O).trim();let me=!0,re=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,G,O);else{const ce=Fm(o,G,"vertex"),H=Fm(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+$+`
`+ce+`
`+H)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(ee===""||le==="")&&(re=!1);re&&(R.diagnostics={runnable:me,programLog:$,vertexShader:{log:ee,prefix:v},fragmentShader:{log:le,prefix:_}})}o.deleteShader(G),o.deleteShader(O),k=new bl(o,A),te=M1(o,A)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let te;this.getAttributes=function(){return te===void 0&&U(this),te};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(A,h1)),E},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=O,this}let I1=0;class U1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new F1(e),n.set(e,r)),r}}class F1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function k1(s,e,n,r,o,c,u){const f=new Rg,h=new U1,m=new Set,x=[],S=o.logarithmicDepthBuffer,y=o.reverseDepthBuffer,M=o.vertexTextures;let T=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,R,$,ee,le){const me=ee.fog,re=le.geometry,ce=E.isMeshStandardMaterial?ee.environment:null,H=(E.isMeshStandardMaterial?n:e).get(E.envMap||ce),de=H&&H.mapping===Bl?H.image.height:null,oe=A[E.type];E.precision!==null&&(T=o.getMaxPrecision(E.precision),T!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",T,"instead."));const F=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,se=F!==void 0?F.length:0;let Ue=0;re.morphAttributes.position!==void 0&&(Ue=1),re.morphAttributes.normal!==void 0&&(Ue=2),re.morphAttributes.color!==void 0&&(Ue=3);let Q,ue,ye,Se;if(oe){const Zt=gi[oe];Q=Zt.vertexShader,ue=Zt.fragmentShader}else Q=E.vertexShader,ue=E.fragmentShader,h.update(E),ye=h.getVertexShaderID(E),Se=h.getFragmentShaderID(E);const be=s.getRenderTarget(),Pe=le.isInstancedMesh===!0,et=le.isBatchedMesh===!0,_t=!!E.map,dt=!!E.matcap,B=!!H,rn=!!E.aoMap,ct=!!E.lightMap,mt=!!E.bumpMap,Ke=!!E.normalMap,Ct=!!E.displacementMap,Qe=!!E.emissiveMap,D=!!E.metalnessMap,C=!!E.roughnessMap,Z=E.anisotropy>0,he=E.clearcoat>0,_e=E.dispersion>0,fe=E.iridescence>0,Xe=E.sheen>0,Ae=E.transmission>0,Fe=Z&&!!E.anisotropyMap,gt=he&&!!E.clearcoatMap,Me=he&&!!E.clearcoatNormalMap,ke=he&&!!E.clearcoatRoughnessMap,tt=fe&&!!E.iridescenceMap,Je=fe&&!!E.iridescenceThicknessMap,ze=Xe&&!!E.sheenColorMap,ft=Xe&&!!E.sheenRoughnessMap,rt=!!E.specularMap,wt=!!E.specularColorMap,j=!!E.specularIntensityMap,Le=Ae&&!!E.transmissionMap,ae=Ae&&!!E.thicknessMap,pe=!!E.gradientMap,Ce=!!E.alphaMap,De=E.alphaTest>0,ht=!!E.alphaHash,zt=!!E.extensions;let sn=mr;E.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(sn=s.toneMapping);const vt={shaderID:oe,shaderType:E.type,shaderName:E.name,vertexShader:Q,fragmentShader:ue,defines:E.defines,customVertexShaderID:ye,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:T,batching:et,batchingColor:et&&le._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&le.instanceColor!==null,instancingMorph:Pe&&le.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:_r,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:dt,envMap:B,envMapMode:B&&H.mapping,envMapCubeUVHeight:de,aoMap:rn,lightMap:ct,bumpMap:mt,normalMap:Ke,displacementMap:M&&Ct,emissiveMap:Qe,normalMapObjectSpace:Ke&&E.normalMapType===G_,normalMapTangentSpace:Ke&&E.normalMapType===Mg,metalnessMap:D,roughnessMap:C,anisotropy:Z,anisotropyMap:Fe,clearcoat:he,clearcoatMap:gt,clearcoatNormalMap:Me,clearcoatRoughnessMap:ke,dispersion:_e,iridescence:fe,iridescenceMap:tt,iridescenceThicknessMap:Je,sheen:Xe,sheenColorMap:ze,sheenRoughnessMap:ft,specularMap:rt,specularColorMap:wt,specularIntensityMap:j,transmission:Ae,transmissionMap:Le,thicknessMap:ae,gradientMap:pe,opaque:E.transparent===!1&&E.blending===ks&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:De,alphaHash:ht,combine:E.combine,mapUv:_t&&v(E.map.channel),aoMapUv:rn&&v(E.aoMap.channel),lightMapUv:ct&&v(E.lightMap.channel),bumpMapUv:mt&&v(E.bumpMap.channel),normalMapUv:Ke&&v(E.normalMap.channel),displacementMapUv:Ct&&v(E.displacementMap.channel),emissiveMapUv:Qe&&v(E.emissiveMap.channel),metalnessMapUv:D&&v(E.metalnessMap.channel),roughnessMapUv:C&&v(E.roughnessMap.channel),anisotropyMapUv:Fe&&v(E.anisotropyMap.channel),clearcoatMapUv:gt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(E.sheenRoughnessMap.channel),specularMapUv:rt&&v(E.specularMap.channel),specularColorMapUv:wt&&v(E.specularColorMap.channel),specularIntensityMapUv:j&&v(E.specularIntensityMap.channel),transmissionMapUv:Le&&v(E.transmissionMap.channel),thicknessMapUv:ae&&v(E.thicknessMap.channel),alphaMapUv:Ce&&v(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ke||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!re.attributes.uv&&(_t||Ce),fog:!!me,useFog:E.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:y,skinning:le.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ue,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:sn,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===Ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ui,flipSided:E.side===Rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return vt.vertexUv1s=m.has(1),vt.vertexUv2s=m.has(2),vt.vertexUv3s=m.has(3),m.clear(),vt}function L(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const $ in E.defines)R.push($),R.push(E.defines[$]);return E.isRawShaderMaterial===!1&&(P(R,E),N(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function P(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function N(E,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),E.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.alphaToCoverage&&f.enable(20),E.push(f.mask)}function G(E){const R=A[E.type];let $;if(R){const ee=gi[R];$=xx.clone(ee.uniforms)}else $=E.uniforms;return $}function O(E,R){let $;for(let ee=0,le=x.length;ee<le;ee++){const me=x[ee];if(me.cacheKey===R){$=me,++$.usedTimes;break}}return $===void 0&&($=new D1(s,R,E,c),x.push($)),$}function U(E){if(--E.usedTimes===0){const R=x.indexOf(E);x[R]=x[x.length-1],x.pop(),E.destroy()}}function k(E){h.remove(E)}function te(){h.dispose()}return{getParameters:_,getProgramCacheKey:L,getUniforms:G,acquireProgram:O,releaseProgram:U,releaseShaderCache:k,programs:x,dispose:te}}function O1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function z1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(S,y,M,T,A,v){let _=s[e];return _===void 0?(_={id:S.id,object:S,geometry:y,material:M,groupOrder:T,renderOrder:S.renderOrder,z:A,group:v},s[e]=_):(_.id=S.id,_.object=S,_.geometry=y,_.material=M,_.groupOrder=T,_.renderOrder=S.renderOrder,_.z=A,_.group=v),e++,_}function f(S,y,M,T,A,v){const _=u(S,y,M,T,A,v);M.transmission>0?r.push(_):M.transparent===!0?o.push(_):n.push(_)}function h(S,y,M,T,A,v){const _=u(S,y,M,T,A,v);M.transmission>0?r.unshift(_):M.transparent===!0?o.unshift(_):n.unshift(_)}function m(S,y){n.length>1&&n.sort(S||z1),r.length>1&&r.sort(y||Hm),o.length>1&&o.sort(y||Hm)}function x(){for(let S=e,y=s.length;S<y;S++){const M=s[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:h,finish:x,sort:m}}function B1(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Vm,s.set(r,[u])):o>=c.length?(u=new Vm,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function H1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new ot};break;case"SpotLight":n={position:new q,direction:new q,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=n,n}}}function V1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let G1=0;function j1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function W1(s){const e=new H1,n=V1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const o=new q,c=new Ot,u=new Ot;function f(m){let x=0,S=0,y=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let M=0,T=0,A=0,v=0,_=0,L=0,P=0,N=0,G=0,O=0,U=0;m.sort(j1);for(let te=0,E=m.length;te<E;te++){const R=m[te],$=R.color,ee=R.intensity,le=R.distance,me=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)x+=$.r*ee,S+=$.g*ee,y+=$.b*ee;else if(R.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(R.sh.coefficients[re],ee);U++}else if(R.isDirectionalLight){const re=e.get(R);if(re.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ce=R.shadow,H=n.get(R);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=me,r.directionalShadowMatrix[M]=R.shadow.matrix,L++}r.directional[M]=re,M++}else if(R.isSpotLight){const re=e.get(R);re.position.setFromMatrixPosition(R.matrixWorld),re.color.copy($).multiplyScalar(ee),re.distance=le,re.coneCos=Math.cos(R.angle),re.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),re.decay=R.decay,r.spot[A]=re;const ce=R.shadow;if(R.map&&(r.spotLightMap[G]=R.map,G++,ce.updateMatrices(R),R.castShadow&&O++),r.spotLightMatrix[A]=ce.matrix,R.castShadow){const H=n.get(R);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=me,N++}A++}else if(R.isRectAreaLight){const re=e.get(R);re.color.copy($).multiplyScalar(ee),re.halfWidth.set(R.width*.5,0,0),re.halfHeight.set(0,R.height*.5,0),r.rectArea[v]=re,v++}else if(R.isPointLight){const re=e.get(R);if(re.color.copy(R.color).multiplyScalar(R.intensity),re.distance=R.distance,re.decay=R.decay,R.castShadow){const ce=R.shadow,H=n.get(R);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=me,r.pointShadowMatrix[T]=R.shadow.matrix,P++}r.point[T]=re,T++}else if(R.isHemisphereLight){const re=e.get(R);re.skyColor.copy(R.color).multiplyScalar(ee),re.groundColor.copy(R.groundColor).multiplyScalar(ee),r.hemi[_]=re,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=y;const k=r.hash;(k.directionalLength!==M||k.pointLength!==T||k.spotLength!==A||k.rectAreaLength!==v||k.hemiLength!==_||k.numDirectionalShadows!==L||k.numPointShadows!==P||k.numSpotShadows!==N||k.numSpotMaps!==G||k.numLightProbes!==U)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=v,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,k.directionalLength=M,k.pointLength=T,k.spotLength=A,k.rectAreaLength=v,k.hemiLength=_,k.numDirectionalShadows=L,k.numPointShadows=P,k.numSpotShadows=N,k.numSpotMaps=G,k.numLightProbes=U,r.version=G1++)}function h(m,x){let S=0,y=0,M=0,T=0,A=0;const v=x.matrixWorldInverse;for(let _=0,L=m.length;_<L;_++){const P=m[_];if(P.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),S++}else if(P.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),M++}else if(P.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),u.identity(),c.copy(P.matrixWorld),c.premultiply(v),u.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),T++}else if(P.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),y++}else if(P.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(v),A++}}}return{setup:f,setupView:h,state:r}}function Gm(s){const e=new W1(s),n=[],r=[];function o(x){m.camera=x,n.length=0,r.length=0}function c(x){n.push(x)}function u(x){r.push(x)}function f(){e.setup(n)}function h(x){e.setupView(n,x)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function X1(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new Gm(s),e.set(o,[f])):c>=u.length?(f=new Gm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class q1 extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y1 extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z1(s,e,n){let r=new uf;const o=new pt,c=new pt,u=new bt,f=new q1({depthPacking:V_}),h=new Y1,m={},x=n.maxTextureSize,S={[gr]:Rn,[Rn]:gr,[Ui]:Ui},y=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:$1,fragmentShader:K1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Kn;T.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zn(T,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ug;let _=this.type;this.render=function(O,U,k){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const te=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),$=s.state;$.setBlending(pr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ee=_!==Ii&&this.type===Ii,le=_===Ii&&this.type!==Ii;for(let me=0,re=O.length;me<re;me++){const ce=O[me],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const de=H.getFrameExtents();if(o.multiply(de),c.copy(H.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/de.x),o.x=c.x*de.x,H.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/de.y),o.y=c.y*de.y,H.mapSize.y=c.y)),H.map===null||ee===!0||le===!0){const F=this.type!==Ii?{minFilter:$n,magFilter:$n}:{};H.map!==null&&H.map.dispose(),H.map=new Xr(o.x,o.y,F),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const oe=H.getViewportCount();for(let F=0;F<oe;F++){const se=H.getViewport(F);u.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),$.viewport(u),H.updateMatrices(ce,F),r=H.getFrustum(),N(U,k,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===Ii&&L(H,k),H.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(te,E,R)};function L(O,U){const k=e.update(A);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Xr(o.x,o.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,k,y,A,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,k,M,A,null)}function P(O,U,k,te){let E=null;const R=k.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(R!==void 0)E=R;else if(E=k.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const $=E.uuid,ee=U.uuid;let le=m[$];le===void 0&&(le={},m[$]=le);let me=le[ee];me===void 0&&(me=E.clone(),le[ee]=me,U.addEventListener("dispose",G)),E=me}if(E.visible=U.visible,E.wireframe=U.wireframe,te===Ii?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:S[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,k.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const $=s.properties.get(E);$.light=k}return E}function N(O,U,k,te,E){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&E===Ii)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),le=O.material;if(Array.isArray(le)){const me=ee.groups;for(let re=0,ce=me.length;re<ce;re++){const H=me[re],de=le[H.materialIndex];if(de&&de.visible){const oe=P(O,de,te,E);O.onBeforeShadow(s,O,U,k,ee,oe,H),s.renderBufferDirect(k,null,ee,oe,O,H),O.onAfterShadow(s,O,U,k,ee,oe,H)}}}else if(le.visible){const me=P(O,le,te,E);O.onBeforeShadow(s,O,U,k,ee,me,null),s.renderBufferDirect(k,null,ee,me,O,null),O.onAfterShadow(s,O,U,k,ee,me,null)}}const $=O.children;for(let ee=0,le=$.length;ee<le;ee++)N($[ee],U,k,te,E)}function G(O){O.target.removeEventListener("dispose",G);for(const k in m){const te=m[k],E=O.target.uuid;E in te&&(te[E].dispose(),delete te[E])}}}const Q1={[ld]:cd,[ud]:hd,[dd]:pd,[Bs]:fd,[cd]:ld,[hd]:ud,[pd]:dd,[fd]:Bs};function J1(s){function e(){let j=!1;const Le=new bt;let ae=null;const pe=new bt(0,0,0,0);return{setMask:function(Ce){ae!==Ce&&!j&&(s.colorMask(Ce,Ce,Ce,Ce),ae=Ce)},setLocked:function(Ce){j=Ce},setClear:function(Ce,De,ht,zt,sn){sn===!0&&(Ce*=zt,De*=zt,ht*=zt),Le.set(Ce,De,ht,zt),pe.equals(Le)===!1&&(s.clearColor(Ce,De,ht,zt),pe.copy(Le))},reset:function(){j=!1,ae=null,pe.set(-1,0,0,0)}}}function n(){let j=!1,Le=!1,ae=null,pe=null,Ce=null;return{setReversed:function(De){Le=De},setTest:function(De){De?ye(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(De){ae!==De&&!j&&(s.depthMask(De),ae=De)},setFunc:function(De){if(Le&&(De=Q1[De]),pe!==De){switch(De){case ld:s.depthFunc(s.NEVER);break;case cd:s.depthFunc(s.ALWAYS);break;case ud:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case dd:s.depthFunc(s.EQUAL);break;case fd:s.depthFunc(s.GEQUAL);break;case hd:s.depthFunc(s.GREATER);break;case pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=De}},setLocked:function(De){j=De},setClear:function(De){Ce!==De&&(s.clearDepth(De),Ce=De)},reset:function(){j=!1,ae=null,pe=null,Ce=null}}}function r(){let j=!1,Le=null,ae=null,pe=null,Ce=null,De=null,ht=null,zt=null,sn=null;return{setTest:function(vt){j||(vt?ye(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(vt){Le!==vt&&!j&&(s.stencilMask(vt),Le=vt)},setFunc:function(vt,Zt,Hn){(ae!==vt||pe!==Zt||Ce!==Hn)&&(s.stencilFunc(vt,Zt,Hn),ae=vt,pe=Zt,Ce=Hn)},setOp:function(vt,Zt,Hn){(De!==vt||ht!==Zt||zt!==Hn)&&(s.stencilOp(vt,Zt,Hn),De=vt,ht=Zt,zt=Hn)},setLocked:function(vt){j=vt},setClear:function(vt){sn!==vt&&(s.clearStencil(vt),sn=vt)},reset:function(){j=!1,Le=null,ae=null,pe=null,Ce=null,De=null,ht=null,zt=null,sn=null}}}const o=new e,c=new n,u=new r,f=new WeakMap,h=new WeakMap;let m={},x={},S=new WeakMap,y=[],M=null,T=!1,A=null,v=null,_=null,L=null,P=null,N=null,G=null,O=new ot(0,0,0),U=0,k=!1,te=null,E=null,R=null,$=null,ee=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,re=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ce)[1]),me=re>=1):ce.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),me=re>=2);let H=null,de={};const oe=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),se=new bt().fromArray(oe),Ue=new bt().fromArray(F);function Q(j,Le,ae,pe){const Ce=new Uint8Array(4),De=s.createTexture();s.bindTexture(j,De),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<ae;ht++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Le+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return De}const ue={};ue[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ye(s.DEPTH_TEST),c.setFunc(Bs),ct(!1),mt(Zp),ye(s.CULL_FACE),B(pr);function ye(j){m[j]!==!0&&(s.enable(j),m[j]=!0)}function Se(j){m[j]!==!1&&(s.disable(j),m[j]=!1)}function be(j,Le){return x[j]!==Le?(s.bindFramebuffer(j,Le),x[j]=Le,j===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Le),j===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Pe(j,Le){let ae=y,pe=!1;if(j){ae=S.get(Le),ae===void 0&&(ae=[],S.set(Le,ae));const Ce=j.textures;if(ae.length!==Ce.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let De=0,ht=Ce.length;De<ht;De++)ae[De]=s.COLOR_ATTACHMENT0+De;ae.length=Ce.length,pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ae)}function et(j){return M!==j?(s.useProgram(j),M=j,!0):!1}const _t={[Br]:s.FUNC_ADD,[p_]:s.FUNC_SUBTRACT,[m_]:s.FUNC_REVERSE_SUBTRACT};_t[g_]=s.MIN,_t[v_]=s.MAX;const dt={[__]:s.ZERO,[x_]:s.ONE,[y_]:s.SRC_COLOR,[ad]:s.SRC_ALPHA,[A_]:s.SRC_ALPHA_SATURATE,[w_]:s.DST_COLOR,[M_]:s.DST_ALPHA,[S_]:s.ONE_MINUS_SRC_COLOR,[od]:s.ONE_MINUS_SRC_ALPHA,[T_]:s.ONE_MINUS_DST_COLOR,[E_]:s.ONE_MINUS_DST_ALPHA,[C_]:s.CONSTANT_COLOR,[R_]:s.ONE_MINUS_CONSTANT_COLOR,[b_]:s.CONSTANT_ALPHA,[P_]:s.ONE_MINUS_CONSTANT_ALPHA};function B(j,Le,ae,pe,Ce,De,ht,zt,sn,vt){if(j===pr){T===!0&&(Se(s.BLEND),T=!1);return}if(T===!1&&(ye(s.BLEND),T=!0),j!==h_){if(j!==A||vt!==k){if((v!==Br||P!==Br)&&(s.blendEquation(s.FUNC_ADD),v=Br,P=Br),vt)switch(j){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qp:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}_=null,L=null,N=null,G=null,O.set(0,0,0),U=0,A=j,k=vt}return}Ce=Ce||Le,De=De||ae,ht=ht||pe,(Le!==v||Ce!==P)&&(s.blendEquationSeparate(_t[Le],_t[Ce]),v=Le,P=Ce),(ae!==_||pe!==L||De!==N||ht!==G)&&(s.blendFuncSeparate(dt[ae],dt[pe],dt[De],dt[ht]),_=ae,L=pe,N=De,G=ht),(zt.equals(O)===!1||sn!==U)&&(s.blendColor(zt.r,zt.g,zt.b,sn),O.copy(zt),U=sn),A=j,k=!1}function rn(j,Le){j.side===Ui?Se(s.CULL_FACE):ye(s.CULL_FACE);let ae=j.side===Rn;Le&&(ae=!ae),ct(ae),j.blending===ks&&j.transparent===!1?B(pr):B(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);const pe=j.stencilWrite;u.setTest(pe),pe&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ct(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(j){te!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),te=j)}function mt(j){j!==u_?(ye(s.CULL_FACE),j!==E&&(j===Zp?s.cullFace(s.BACK):j===d_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),E=j}function Ke(j){j!==R&&(me&&s.lineWidth(j),R=j)}function Ct(j,Le,ae){j?(ye(s.POLYGON_OFFSET_FILL),($!==Le||ee!==ae)&&(s.polygonOffset(Le,ae),$=Le,ee=ae)):Se(s.POLYGON_OFFSET_FILL)}function Qe(j){j?ye(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function D(j){j===void 0&&(j=s.TEXTURE0+le-1),H!==j&&(s.activeTexture(j),H=j)}function C(j,Le,ae){ae===void 0&&(H===null?ae=s.TEXTURE0+le-1:ae=H);let pe=de[ae];pe===void 0&&(pe={type:void 0,texture:void 0},de[ae]=pe),(pe.type!==j||pe.texture!==Le)&&(H!==ae&&(s.activeTexture(ae),H=ae),s.bindTexture(j,Le||ue[j]),pe.type=j,pe.texture=Le)}function Z(){const j=de[H];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function gt(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(j){se.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),se.copy(j))}function ze(j){Ue.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Ue.copy(j))}function ft(j,Le){let ae=h.get(Le);ae===void 0&&(ae=new WeakMap,h.set(Le,ae));let pe=ae.get(j);pe===void 0&&(pe=s.getUniformBlockIndex(Le,j.name),ae.set(j,pe))}function rt(j,Le){const pe=h.get(Le).get(j);f.get(Le)!==pe&&(s.uniformBlockBinding(Le,pe,j.__bindingPointIndex),f.set(Le,pe))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},H=null,de={},x={},S=new WeakMap,y=[],M=null,T=!1,A=null,v=null,_=null,L=null,P=null,N=null,G=null,O=new ot(0,0,0),U=0,k=!1,te=null,E=null,R=null,$=null,ee=null,se.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:ye,disable:Se,bindFramebuffer:be,drawBuffers:Pe,useProgram:et,setBlending:B,setMaterial:rn,setFlipSided:ct,setCullFace:mt,setLineWidth:Ke,setPolygonOffset:Ct,setScissorTest:Qe,activeTexture:D,bindTexture:C,unbindTexture:Z,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:ke,texImage3D:tt,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:gt,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:Je,viewport:ze,reset:wt}}function jm(s,e,n,r){const o=eE(r);switch(n){case mg:return s*e;case vg:return s*e;case _g:return s*e*2;case xg:return s*e/o.components*o.byteLength;case af:return s*e/o.components*o.byteLength;case yg:return s*e*2/o.components*o.byteLength;case of:return s*e*2/o.components*o.byteLength;case gg:return s*e*3/o.components*o.byteLength;case ci:return s*e*4/o.components*o.byteLength;case lf:return s*e*4/o.components*o.byteLength;case El:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(s,16)*Math.max(e,8)/4;case xd:case Sd:return Math.max(s,8)*Math.max(e,8)/2;case Ed:case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Bd:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sg:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gd:case jd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eE(s){switch(s){case Oi:case fg:return{byteLength:1,components:1};case Ba:case hg:case Ha:return{byteLength:2,components:1};case rf:case sf:return{byteLength:2,components:4};case Wr:case nf:case Fi:return{byteLength:4,components:1};case pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function tE(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,x=new WeakMap;let S;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,C){return M?new OffscreenCanvas(D,C):Ul("canvas")}function A(D,C,Z){let he=1;const _e=Qe(D);if((_e.width>Z||_e.height>Z)&&(he=Z/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(he*_e.width),Xe=Math.floor(he*_e.height);S===void 0&&(S=T(fe,Xe));const Ae=C?T(fe,Xe):S;return Ae.width=fe,Ae.height=Xe,Ae.getContext("2d").drawImage(D,0,0,fe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Xe+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function v(D){return D.generateMipmaps&&D.minFilter!==$n&&D.minFilter!==oi}function _(D){s.generateMipmap(D)}function L(D,C,Z,he,_e=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=C;if(C===s.RED&&(Z===s.FLOAT&&(fe=s.R32F),Z===s.HALF_FLOAT&&(fe=s.R16F),Z===s.UNSIGNED_BYTE&&(fe=s.R8)),C===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.R8UI),Z===s.UNSIGNED_SHORT&&(fe=s.R16UI),Z===s.UNSIGNED_INT&&(fe=s.R32UI),Z===s.BYTE&&(fe=s.R8I),Z===s.SHORT&&(fe=s.R16I),Z===s.INT&&(fe=s.R32I)),C===s.RG&&(Z===s.FLOAT&&(fe=s.RG32F),Z===s.HALF_FLOAT&&(fe=s.RG16F),Z===s.UNSIGNED_BYTE&&(fe=s.RG8)),C===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Z===s.UNSIGNED_INT&&(fe=s.RG32UI),Z===s.BYTE&&(fe=s.RG8I),Z===s.SHORT&&(fe=s.RG16I),Z===s.INT&&(fe=s.RG32I)),C===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Z===s.UNSIGNED_INT&&(fe=s.RGB32UI),Z===s.BYTE&&(fe=s.RGB8I),Z===s.SHORT&&(fe=s.RGB16I),Z===s.INT&&(fe=s.RGB32I)),C===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Z===s.BYTE&&(fe=s.RGBA8I),Z===s.SHORT&&(fe=s.RGBA16I),Z===s.INT&&(fe=s.RGBA32I)),C===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),C===s.RGBA){const Xe=_e?Ll:Tt.getTransfer(he);Z===s.FLOAT&&(fe=s.RGBA32F),Z===s.HALF_FLOAT&&(fe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(fe=Xe===Ut?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(D,C){let Z;return D?C===null||C===Wr||C===Gs?Z=s.DEPTH24_STENCIL8:C===Fi?Z=s.DEPTH32F_STENCIL8:C===Ba&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Wr||C===Gs?Z=s.DEPTH_COMPONENT24:C===Fi?Z=s.DEPTH_COMPONENT32F:C===Ba&&(Z=s.DEPTH_COMPONENT16),Z}function N(D,C){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==$n&&D.minFilter!==oi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function G(D){const C=D.target;C.removeEventListener("dispose",G),U(C),C.isVideoTexture&&x.delete(C)}function O(D){const C=D.target;C.removeEventListener("dispose",O),te(C)}function U(D){const C=r.get(D);if(C.__webglInit===void 0)return;const Z=D.source,he=y.get(Z);if(he){const _e=he[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&k(D),Object.keys(he).length===0&&y.delete(Z)}r.remove(D)}function k(D){const C=r.get(D);s.deleteTexture(C.__webglTexture);const Z=D.source,he=y.get(Z);delete he[C.__cacheKey],u.memory.textures--}function te(D){const C=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(C.__webglFramebuffer[he]))for(let _e=0;_e<C.__webglFramebuffer[he].length;_e++)s.deleteFramebuffer(C.__webglFramebuffer[he][_e]);else s.deleteFramebuffer(C.__webglFramebuffer[he]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[he])}else{if(Array.isArray(C.__webglFramebuffer))for(let he=0;he<C.__webglFramebuffer.length;he++)s.deleteFramebuffer(C.__webglFramebuffer[he]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let he=0;he<C.__webglColorRenderbuffer.length;he++)C.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[he]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Z=D.textures;for(let he=0,_e=Z.length;he<_e;he++){const fe=r.get(Z[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(Z[he])}r.remove(D)}let E=0;function R(){E=0}function $(){const D=E;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),E+=1,D}function ee(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function le(D,C){const Z=r.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const he=D.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Z,D,C);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+C)}function me(D,C){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Ue(Z,D,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+C)}function re(D,C){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Ue(Z,D,C);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+C)}function ce(D,C){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+C)}const H={[vd]:s.REPEAT,[Vr]:s.CLAMP_TO_EDGE,[_d]:s.MIRRORED_REPEAT},de={[$n]:s.NEAREST,[B_]:s.NEAREST_MIPMAP_NEAREST,[Jo]:s.NEAREST_MIPMAP_LINEAR,[oi]:s.LINEAR,[Cu]:s.LINEAR_MIPMAP_NEAREST,[Gr]:s.LINEAR_MIPMAP_LINEAR},oe={[j_]:s.NEVER,[K_]:s.ALWAYS,[W_]:s.LESS,[Eg]:s.LEQUAL,[X_]:s.EQUAL,[$_]:s.GEQUAL,[q_]:s.GREATER,[Y_]:s.NOTEQUAL};function F(D,C){if(C.type===Fi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===oi||C.magFilter===Cu||C.magFilter===Jo||C.magFilter===Gr||C.minFilter===oi||C.minFilter===Cu||C.minFilter===Jo||C.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,H[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,H[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,H[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,de[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,de[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,oe[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===$n||C.minFilter!==Jo&&C.minFilter!==Gr||C.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function se(D,C){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",G));const he=C.source;let _e=y.get(he);_e===void 0&&(_e={},y.set(he,_e));const fe=ee(C);if(fe!==D.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),_e[fe].usedTimes++;const Xe=_e[D.__cacheKey];Xe!==void 0&&(_e[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&k(C)),D.__cacheKey=fe,D.__webglTexture=_e[fe].texture}return Z}function Ue(D,C,Z){let he=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(he=s.TEXTURE_3D);const _e=se(D,C),fe=C.source;n.bindTexture(he,D.__webglTexture,s.TEXTURE0+Z);const Xe=r.get(fe);if(fe.version!==Xe.__version||_e===!0){n.activeTexture(s.TEXTURE0+Z);const Ae=Tt.getPrimaries(Tt.workingColorSpace),Fe=C.colorSpace===hr?null:Tt.getPrimaries(C.colorSpace),gt=C.colorSpace===hr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Me=A(C.image,!1,o.maxTextureSize);Me=Ct(C,Me);const ke=c.convert(C.format,C.colorSpace),tt=c.convert(C.type);let Je=L(C.internalFormat,ke,tt,C.colorSpace,C.isVideoTexture);F(he,C);let ze;const ft=C.mipmaps,rt=C.isVideoTexture!==!0,wt=Xe.__version===void 0||_e===!0,j=fe.dataReady,Le=N(C,Me);if(C.isDepthTexture)Je=P(C.format===js,C.type),wt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,ke,tt,null));else if(C.isDataTexture)if(ft.length>0){rt&&wt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,ft[0].width,ft[0].height);for(let ae=0,pe=ft.length;ae<pe;ae++)ze=ft[ae],rt?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,tt,ze.data):n.texImage2D(s.TEXTURE_2D,ae,Je,ze.width,ze.height,0,ke,tt,ze.data);C.generateMipmaps=!1}else rt?(wt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,Me.width,Me.height),j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,tt,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,ke,tt,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){rt&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Je,ft[0].width,ft[0].height,Me.depth);for(let ae=0,pe=ft.length;ae<pe;ae++)if(ze=ft[ae],C.format!==ci)if(ke!==null)if(rt){if(j)if(C.layerUpdates.size>0){const Ce=jm(ze.width,ze.height,C.format,C.type);for(const De of C.layerUpdates){const ht=ze.data.subarray(De*Ce/ze.data.BYTES_PER_ELEMENT,(De+1)*Ce/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,De,ze.width,ze.height,1,ke,ht,0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Me.depth,ke,ze.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Je,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?j&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Me.depth,ke,tt,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,Je,ze.width,ze.height,Me.depth,0,ke,tt,ze.data)}else{rt&&wt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,ft[0].width,ft[0].height);for(let ae=0,pe=ft.length;ae<pe;ae++)ze=ft[ae],C.format!==ci?ke!==null?rt?j&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,tt,ze.data):n.texImage2D(s.TEXTURE_2D,ae,Je,ze.width,ze.height,0,ke,tt,ze.data)}else if(C.isDataArrayTexture)if(rt){if(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Je,Me.width,Me.height,Me.depth),j)if(C.layerUpdates.size>0){const ae=jm(Me.width,Me.height,C.format,C.type);for(const pe of C.layerUpdates){const Ce=Me.data.subarray(pe*ae/Me.data.BYTES_PER_ELEMENT,(pe+1)*ae/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,ke,tt,Ce)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,tt,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,ke,tt,Me.data);else if(C.isData3DTexture)rt?(wt&&n.texStorage3D(s.TEXTURE_3D,Le,Je,Me.width,Me.height,Me.depth),j&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,tt,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,ke,tt,Me.data);else if(C.isFramebufferTexture){if(wt)if(rt)n.texStorage2D(s.TEXTURE_2D,Le,Je,Me.width,Me.height);else{let ae=Me.width,pe=Me.height;for(let Ce=0;Ce<Le;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,Je,ae,pe,0,ke,tt,null),ae>>=1,pe>>=1}}else if(ft.length>0){if(rt&&wt){const ae=Qe(ft[0]);n.texStorage2D(s.TEXTURE_2D,Le,Je,ae.width,ae.height)}for(let ae=0,pe=ft.length;ae<pe;ae++)ze=ft[ae],rt?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke,tt,ze):n.texImage2D(s.TEXTURE_2D,ae,Je,ke,tt,ze);C.generateMipmaps=!1}else if(rt){if(wt){const ae=Qe(Me);n.texStorage2D(s.TEXTURE_2D,Le,Je,ae.width,ae.height)}j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,tt,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,ke,tt,Me);v(C)&&_(he),Xe.__version=fe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Q(D,C,Z){if(C.image.length!==6)return;const he=se(D,C),_e=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const fe=r.get(_e);if(_e.version!==fe.__version||he===!0){n.activeTexture(s.TEXTURE0+Z);const Xe=Tt.getPrimaries(Tt.workingColorSpace),Ae=C.colorSpace===hr?null:Tt.getPrimaries(C.colorSpace),Fe=C.colorSpace===hr||Xe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const gt=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!gt&&!Me?ke[pe]=A(C.image[pe],!0,o.maxCubemapSize):ke[pe]=Me?C.image[pe].image:C.image[pe],ke[pe]=Ct(C,ke[pe]);const tt=ke[0],Je=c.convert(C.format,C.colorSpace),ze=c.convert(C.type),ft=L(C.internalFormat,Je,ze,C.colorSpace),rt=C.isVideoTexture!==!0,wt=fe.__version===void 0||he===!0,j=_e.dataReady;let Le=N(C,tt);F(s.TEXTURE_CUBE_MAP,C);let ae;if(gt){rt&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ft,tt.width,tt.height);for(let pe=0;pe<6;pe++){ae=ke[pe].mipmaps;for(let Ce=0;Ce<ae.length;Ce++){const De=ae[Ce];C.format!==ci?Je!==null?rt?j&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,De.width,De.height,Je,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ft,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,De.width,De.height,Je,ze,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ft,De.width,De.height,0,Je,ze,De.data)}}}else{if(ae=C.mipmaps,rt&&wt){ae.length>0&&Le++;const pe=Qe(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){rt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,Je,ze,ke[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,ke[pe].width,ke[pe].height,0,Je,ze,ke[pe].data);for(let Ce=0;Ce<ae.length;Ce++){const ht=ae[Ce].image[pe].image;rt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,ht.width,ht.height,Je,ze,ht.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ft,ht.width,ht.height,0,Je,ze,ht.data)}}else{rt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,ze,ke[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Je,ze,ke[pe]);for(let Ce=0;Ce<ae.length;Ce++){const De=ae[Ce];rt?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Je,ze,De.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ft,Je,ze,De.image[pe])}}}v(C)&&_(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ue(D,C,Z,he,_e,fe){const Xe=c.convert(Z.format,Z.colorSpace),Ae=c.convert(Z.type),Fe=L(Z.internalFormat,Xe,Ae,Z.colorSpace);if(!r.get(C).__hasExternalTextures){const Me=Math.max(1,C.width>>fe),ke=Math.max(1,C.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,Fe,Me,ke,C.depth,0,Xe,Ae,null):n.texImage2D(_e,fe,Fe,Me,ke,0,Xe,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),mt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,_e,r.get(Z).__webglTexture,0,ct(C)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,_e,r.get(Z).__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(D,C,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const he=C.depthTexture,_e=he&&he.isDepthTexture?he.type:null,fe=P(C.stencilBuffer,_e),Xe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ct(C);mt(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,C.width,C.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,fe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,D)}else{const he=C.textures;for(let _e=0;_e<he.length;_e++){const fe=he[_e],Xe=c.convert(fe.format,fe.colorSpace),Ae=c.convert(fe.type),Fe=L(fe.internalFormat,Xe,Ae,fe.colorSpace),gt=ct(C);Z&&mt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Fe,C.width,C.height):mt(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,Fe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),le(C.depthTexture,0);const he=r.get(C.depthTexture).__webglTexture,_e=ct(C);if(C.depthTexture.format===Os)mt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(C.depthTexture.format===js)mt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function be(D){const C=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),he){const _e=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),C.__depthDisposeCallback=_e}C.__boundDepthTexture=he}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Se(C.__webglFramebuffer,D)}else if(Z){C.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[he]),C.__webglDepthbuffer[he]===void 0)C.__webglDepthbuffer[he]=s.createRenderbuffer(),ye(C.__webglDepthbuffer[he],D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ye(C.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(D,C,Z){const he=r.get(D);C!==void 0&&ue(he.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&be(D)}function et(D){const C=D.texture,Z=r.get(D),he=r.get(C);D.addEventListener("dispose",O);const _e=D.textures,fe=D.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=C.version,u.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<C.mipmaps.length;Fe++)Z.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const gt=r.get(_e[Ae]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&mt(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];Z.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const gt=c.convert(Fe.format,Fe.colorSpace),Me=c.convert(Fe.type),ke=L(Fe.internalFormat,gt,Me,Fe.colorSpace,D.isXRRenderTarget===!0),tt=ct(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,ke,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),F(s.TEXTURE_CUBE_MAP,C);for(let Ae=0;Ae<6;Ae++)if(C.mipmaps&&C.mipmaps.length>0)for(let Fe=0;Fe<C.mipmaps.length;Fe++)ue(Z.__webglFramebuffer[Ae][Fe],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else ue(Z.__webglFramebuffer[Ae],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);v(C)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const gt=_e[Ae],Me=r.get(gt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),F(s.TEXTURE_2D,gt),ue(Z.__webglFramebuffer,D,gt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),v(gt)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,he.__webglTexture),F(Ae,C),C.mipmaps&&C.mipmaps.length>0)for(let Fe=0;Fe<C.mipmaps.length;Fe++)ue(Z.__webglFramebuffer[Fe],D,C,s.COLOR_ATTACHMENT0,Ae,Fe);else ue(Z.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,Ae,0);v(C)&&_(Ae),n.unbindTexture()}D.depthBuffer&&be(D)}function _t(D){const C=D.textures;for(let Z=0,he=C.length;Z<he;Z++){const _e=C[Z];if(v(_e)){const fe=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Xe=r.get(_e).__webglTexture;n.bindTexture(fe,Xe),_(fe),n.unbindTexture()}}}const dt=[],B=[];function rn(D){if(D.samples>0){if(mt(D)===!1){const C=D.textures,Z=D.width,he=D.height;let _e=s.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(D),Ae=C.length>1;if(Ae)for(let Fe=0;Fe<C.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<C.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const gt=r.get(C[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,gt,0)}s.blitFramebuffer(0,0,Z,he,0,0,Z,he,_e,s.NEAREST),h===!0&&(dt.length=0,B.length=0,dt.push(s.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(dt.push(fe),B.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<C.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const gt=r.get(C[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,gt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function ct(D){return Math.min(o.maxSamples,D.samples)}function mt(D){const C=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ke(D){const C=u.render.frame;x.get(D)!==C&&(x.set(D,C),D.update())}function Ct(D,C){const Z=D.colorSpace,he=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==_r&&Z!==hr&&(Tt.getTransfer(Z)===Ut?(he!==ci||_e!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=R,this.setTexture2D=le,this.setTexture2DArray=me,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=Pe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=mt}function nE(s,e){function n(r,o=hr){let c;const u=Tt.getTransfer(o);if(r===Oi)return s.UNSIGNED_BYTE;if(r===rf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fg)return s.BYTE;if(r===hg)return s.SHORT;if(r===Ba)return s.UNSIGNED_SHORT;if(r===nf)return s.INT;if(r===Wr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Ha)return s.HALF_FLOAT;if(r===mg)return s.ALPHA;if(r===gg)return s.RGB;if(r===ci)return s.RGBA;if(r===vg)return s.LUMINANCE;if(r===_g)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===xg)return s.RED;if(r===af)return s.RED_INTEGER;if(r===yg)return s.RG;if(r===of)return s.RG_INTEGER;if(r===lf)return s.RGBA_INTEGER;if(r===El||r===wl||r===Tl||r===Al)if(u===Ut)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===El)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===El)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xd||r===yd||r===Sd||r===Md)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ed||r===wd||r===Td)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ed||r===wd)return u===Ut?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Td)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ad||r===Cd||r===Rd||r===bd||r===Pd||r===Ld||r===Nd||r===Dd||r===Id||r===Ud||r===Fd||r===kd||r===Od||r===zd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ad)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ld)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Id)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl||r===Bd||r===Hd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Cl)return u===Ut?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sg||r===Vd||r===Gd||r===jd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Cl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class iE extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rE={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const v=n.getJointPose(A,r),_=this._getHandJoint(m,A);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],y=x.position.distanceTo(S.position),M=.02,T=.005;m.inputState.pinching&&y>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(rE)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const sE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new bn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new vr({vertexShader:sE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zn(new Gl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lE extends Xs{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",h=1,m=null,x=null,S=null,y=null,M=null,T=null;const A=new oE,v=n.getContextAttributes();let _=null,L=null;const P=[],N=[],G=new pt;let O=null;const U=new _n;U.layers.enable(1),U.viewport=new bt;const k=new _n;k.layers.enable(2),k.viewport=new bt;const te=[U,k],E=new iE;E.layers.enable(1),E.layers.enable(2);let R=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=P[Q];return ue===void 0&&(ue=new id,P[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=P[Q];return ue===void 0&&(ue=new id,P[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=P[Q];return ue===void 0&&(ue=new id,P[Q]=ue),ue.getHandSpace()};function ee(Q){const ue=N.indexOf(Q.inputSource);if(ue===-1)return;const ye=P[ue];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,m||u),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function le(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",le),o.removeEventListener("inputsourceschange",me);for(let Q=0;Q<P.length;Q++){const ue=N[Q];ue!==null&&(N[Q]=null,P[Q].disconnect(ue))}R=null,$=null,A.reset(),e.setRenderTarget(_),M=null,y=null,S=null,o=null,L=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return S},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",le),o.addEventListener("inputsourceschange",me),v.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0){const ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ue),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Xr(M.framebufferWidth,M.framebufferHeight,{format:ci,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,ye=null,Se=null;v.depth&&(Se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=v.stencil?js:Os,ye=v.stencil?Gs:Wr);const be={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:c};S=new XRWebGLBinding(o,n),y=S.createProjectionLayer(be),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Xr(y.textureWidth,y.textureHeight,{format:ci,type:Oi,depthTexture:new kg(y.textureWidth,y.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function me(Q){for(let ue=0;ue<Q.removed.length;ue++){const ye=Q.removed[ue],Se=N.indexOf(ye);Se>=0&&(N[Se]=null,P[Se].disconnect(ye))}for(let ue=0;ue<Q.added.length;ue++){const ye=Q.added[ue];let Se=N.indexOf(ye);if(Se===-1){for(let Pe=0;Pe<P.length;Pe++)if(Pe>=N.length){N.push(ye),Se=Pe;break}else if(N[Pe]===null){N[Pe]=ye,Se=Pe;break}if(Se===-1)break}const be=P[Se];be&&be.connect(ye)}}const re=new q,ce=new q;function H(Q,ue,ye){re.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const Se=re.distanceTo(ce),be=ue.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,et=be[14]/(be[10]-1),_t=be[14]/(be[10]+1),dt=(be[9]+1)/be[5],B=(be[9]-1)/be[5],rn=(be[8]-1)/be[0],ct=(Pe[8]+1)/Pe[0],mt=et*rn,Ke=et*ct,Ct=Se/(-rn+ct),Qe=Ct*-rn;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qe),Q.translateZ(Ct),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const D=et+Ct,C=_t+Ct,Z=mt-Qe,he=Ke+(Se-Qe),_e=dt*_t/C*D,fe=B*_t/C*D;Q.projectionMatrix.makePerspective(Z,he,_e,fe,D,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function de(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ue=Q.near,ye=Q.far;A.texture!==null&&(A.depthNear>0&&(ue=A.depthNear),A.depthFar>0&&(ye=A.depthFar)),E.near=k.near=U.near=ue,E.far=k.far=U.far=ye,(R!==E.near||$!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,$=E.far);const Se=Q.parent,be=E.cameras;de(E,Se);for(let Pe=0;Pe<be.length;Pe++)de(be[Pe],Se);be.length===2?H(E,U,k):E.projectionMatrix.copy(U.projectionMatrix),oe(Q,E,Se)};function oe(Q,ue,ye){ye===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Wd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&M===null))return h},this.setFoveation=function(Q){h=Q,y!==null&&(y.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(E)};let F=null;function se(Q,ue){if(x=ue.getViewerPose(m||u),T=ue,x!==null){const ye=x.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Se=!1;ye.length!==E.cameras.length&&(E.cameras.length=0,Se=!0);for(let Pe=0;Pe<ye.length;Pe++){const et=ye[Pe];let _t=null;if(M!==null)_t=M.getViewport(et);else{const B=S.getViewSubImage(y,et);_t=B.viewport,Pe===0&&(e.setRenderTargetTextures(L,B.colorTexture,y.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(L))}let dt=te[Pe];dt===void 0&&(dt=new _n,dt.layers.enable(Pe),dt.viewport=new bt,te[Pe]=dt),dt.matrix.fromArray(et.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(et.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(_t.x,_t.y,_t.width,_t.height),Pe===0&&(E.matrix.copy(dt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Se===!0&&E.cameras.push(dt)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const Pe=S.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&A.init(e,Pe,o.renderState)}}for(let ye=0;ye<P.length;ye++){const Se=N[ye],be=P[ye];Se!==null&&be!==void 0&&be.update(Se,ue,m||u)}F&&F(Q,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Ue=new Fg;Ue.setAnimationLoop(se),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const kr=new vi,cE=new Ot;function uE(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,Dg(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,L,P,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(v,_):_.isMeshToonMaterial?(c(v,_),S(v,_)):_.isMeshPhongMaterial?(c(v,_),x(v,_)):_.isMeshStandardMaterial?(c(v,_),y(v,_),_.isMeshPhysicalMaterial&&M(v,_,N)):_.isMeshMatcapMaterial?(c(v,_),T(v,_)):_.isMeshDepthMaterial?c(v,_):_.isMeshDistanceMaterial?(c(v,_),A(v,_)):_.isMeshNormalMaterial?c(v,_):_.isLineBasicMaterial?(u(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?h(v,_,L,P):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Rn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Rn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const L=e.get(_),P=L.envMap,N=L.envMapRotation;P&&(v.envMap.value=P,kr.copy(N),kr.x*=-1,kr.y*=-1,kr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.envMapRotation.value.setFromMatrix4(cE.makeRotationFromEuler(kr)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,L,P){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*L,v.scale.value=P*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function y(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,L){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Rn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,_){_.matcap&&(v.matcap.value=_.matcap)}function A(v,_){const L=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function dE(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,P){const N=P.program;r.uniformBlockBinding(L,N)}function m(L,P){let N=o[L.id];N===void 0&&(T(L),N=x(L),o[L.id]=N,L.addEventListener("dispose",v));const G=P.program;r.updateUBOMapping(L,G);const O=e.render.frame;c[L.id]!==O&&(y(L),c[L.id]=O)}function x(L){const P=S();L.__bindingPointIndex=P;const N=s.createBuffer(),G=L.__size,O=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,G,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function S(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const P=o[L.id],N=L.uniforms,G=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let O=0,U=N.length;O<U;O++){const k=Array.isArray(N[O])?N[O]:[N[O]];for(let te=0,E=k.length;te<E;te++){const R=k[te];if(M(R,O,te,G)===!0){const $=R.__offset,ee=Array.isArray(R.value)?R.value:[R.value];let le=0;for(let me=0;me<ee.length;me++){const re=ee[me],ce=A(re);typeof re=="number"||typeof re=="boolean"?(R.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,$+le,R.__data)):re.isMatrix3?(R.__data[0]=re.elements[0],R.__data[1]=re.elements[1],R.__data[2]=re.elements[2],R.__data[3]=0,R.__data[4]=re.elements[3],R.__data[5]=re.elements[4],R.__data[6]=re.elements[5],R.__data[7]=0,R.__data[8]=re.elements[6],R.__data[9]=re.elements[7],R.__data[10]=re.elements[8],R.__data[11]=0):(re.toArray(R.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,P,N,G){const O=L.value,U=P+"_"+N;if(G[U]===void 0)return typeof O=="number"||typeof O=="boolean"?G[U]=O:G[U]=O.clone(),!0;{const k=G[U];if(typeof O=="number"||typeof O=="boolean"){if(k!==O)return G[U]=O,!0}else if(k.equals(O)===!1)return k.copy(O),!0}return!1}function T(L){const P=L.uniforms;let N=0;const G=16;for(let U=0,k=P.length;U<k;U++){const te=Array.isArray(P[U])?P[U]:[P[U]];for(let E=0,R=te.length;E<R;E++){const $=te[E],ee=Array.isArray($.value)?$.value:[$.value];for(let le=0,me=ee.length;le<me;le++){const re=ee[le],ce=A(re),H=N%G,de=H%ce.boundary,oe=H+de;N+=de,oe!==0&&G-oe<ce.storage&&(N+=G-oe),$.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=ce.storage}}}const O=N%G;return O>0&&(N+=G-O),L.__size=N,L.__cache={},this}function A(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function v(L){const P=L.target;P.removeEventListener("dispose",v);const N=u.indexOf(P.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:h,update:m,dispose:_}}class ff{constructor(e={}){const{canvas:n=Q_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),T=new Int32Array(4);let A=null,v=null;const _=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=mr,this.toneMappingExposure=1;const P=this;let N=!1,G=0,O=0,U=null,k=-1,te=null;const E=new bt,R=new bt;let $=null;const ee=new ot(0);let le=0,me=n.width,re=n.height,ce=1,H=null,de=null;const oe=new bt(0,0,me,re),F=new bt(0,0,me,re);let se=!1;const Ue=new uf;let Q=!1,ue=!1;const ye=new Ot,Se=new Ot,be=new q,Pe=new bt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function dt(){return U===null?ce:1}let B=r;function rn(b,W){return n.getContext(b,W)}try{const b={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ef}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",De,!1),B===null){const W="webgl2";if(B=rn(W,b),B===null)throw rn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ct,mt,Ke,Ct,Qe,D,C,Z,he,_e,fe,Xe,Ae,Fe,gt,Me,ke,tt,Je,ze,ft,rt,wt,j;function Le(){ct=new vM(B),ct.init(),rt=new nE(B,ct),mt=new uM(B,ct,e,rt),Ke=new J1(B),mt.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),Ct=new yM(B),Qe=new O1,D=new tE(B,ct,Ke,Qe,mt,rt,Ct),C=new fM(P),Z=new gM(P),he=new Ax(B),wt=new lM(B,he),_e=new _M(B,he,Ct,wt),fe=new MM(B,_e,he,Ct),Je=new SM(B,mt,D),Me=new dM(Qe),Xe=new k1(P,C,Z,ct,mt,wt,Me),Ae=new uE(P,Qe),Fe=new B1,gt=new X1(ct),tt=new oM(P,C,Z,Ke,fe,y,h),ke=new Z1(P,fe,mt),j=new dE(B,Ct,mt,Ke),ze=new cM(B,ct,Ct),ft=new xM(B,ct,Ct),Ct.programs=Xe.programs,P.capabilities=mt,P.extensions=ct,P.properties=Qe,P.renderLists=Fe,P.shadowMap=ke,P.state=Ke,P.info=Ct}Le();const ae=new lE(P,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(b){b!==void 0&&(ce=b,this.setSize(me,re,!1))},this.getSize=function(b){return b.set(me,re)},this.setSize=function(b,W,J=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=b,re=W,n.width=Math.floor(b*ce),n.height=Math.floor(W*ce),J===!0&&(n.style.width=b+"px",n.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(me*ce,re*ce).floor()},this.setDrawingBufferSize=function(b,W,J){me=b,re=W,ce=J,n.width=Math.floor(b*J),n.height=Math.floor(W*J),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,W,J,ne){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,W,J,ne),Ke.viewport(E.copy(oe).multiplyScalar(ce).round())},this.getScissor=function(b){return b.copy(F)},this.setScissor=function(b,W,J,ne){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,W,J,ne),Ke.scissor(R.copy(F).multiplyScalar(ce).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){Ke.setScissorTest(se=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,W=!0,J=!0){let ne=0;if(b){let X=!1;if(U!==null){const we=U.texture.format;X=we===lf||we===of||we===af}if(X){const we=U.texture.type,Ne=we===Oi||we===Wr||we===Ba||we===Gs||we===rf||we===sf,Te=tt.getClearColor(),Ge=tt.getClearAlpha(),$e=Te.r,Ze=Te.g,je=Te.b;Ne?(M[0]=$e,M[1]=Ze,M[2]=je,M[3]=Ge,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=$e,T[1]=Ze,T[2]=je,T[3]=Ge,B.clearBufferiv(B.COLOR,0,T))}else ne|=B.COLOR_BUFFER_BIT}W&&(ne|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),gt.dispose(),Qe.dispose(),C.dispose(),Z.dispose(),fe.dispose(),wt.dispose(),j.dispose(),Xe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",zi),ae.removeEventListener("sessionend",qr),Ln.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=Ct.autoReset,W=ke.enabled,J=ke.autoUpdate,ne=ke.needsUpdate,X=ke.type;Le(),Ct.autoReset=b,ke.enabled=W,ke.autoUpdate=J,ke.needsUpdate=ne,ke.type=X}function De(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){const W=b.target;W.removeEventListener("dispose",ht),zt(W)}function zt(b){sn(b),Qe.remove(b)}function sn(b){const W=Qe.get(b).programs;W!==void 0&&(W.forEach(function(J){Xe.releaseProgram(J)}),b.isShaderMaterial&&Xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,J,ne,X,we){W===null&&(W=et);const Ne=X.isMesh&&X.matrixWorld.determinant()<0,Te=xi(b,W,J,ne,X);Ke.setMaterial(ne,Ne);let Ge=J.index,$e=1;if(ne.wireframe===!0){if(Ge=_e.getWireframeAttribute(J),Ge===void 0)return;$e=2}const Ze=J.drawRange,je=J.attributes.position;let Et=Ze.start*$e,Rt=(Ze.start+Ze.count)*$e;we!==null&&(Et=Math.max(Et,we.start*$e),Rt=Math.min(Rt,(we.start+we.count)*$e)),Ge!==null?(Et=Math.max(Et,0),Rt=Math.min(Rt,Ge.count)):je!=null&&(Et=Math.max(Et,0),Rt=Math.min(Rt,je.count));const Pt=Rt-Et;if(Pt<0||Pt===1/0)return;wt.setup(X,ne,Te,J,Ge);let Ft,yt=ze;if(Ge!==null&&(Ft=he.get(Ge),yt=ft,yt.setIndex(Ft)),X.isMesh)ne.wireframe===!0?(Ke.setLineWidth(ne.wireframeLinewidth*dt()),yt.setMode(B.LINES)):yt.setMode(B.TRIANGLES);else if(X.isLine){let Oe=ne.linewidth;Oe===void 0&&(Oe=1),Ke.setLineWidth(Oe*dt()),X.isLineSegments?yt.setMode(B.LINES):X.isLineLoop?yt.setMode(B.LINE_LOOP):yt.setMode(B.LINE_STRIP)}else X.isPoints?yt.setMode(B.POINTS):X.isSprite&&yt.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)yt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))yt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Oe=X._multiDrawStarts,Xt=X._multiDrawCounts,St=X._multiDrawCount,Nn=Ge?he.get(Ge).bytesPerElement:1,Zn=Qe.get(ne).currentProgram.getUniforms();for(let Qt=0;Qt<St;Qt++)Zn.setValue(B,"_gl_DrawID",Qt),yt.render(Oe[Qt]/Nn,Xt[Qt])}else if(X.isInstancedMesh)yt.renderInstances(Et,Pt,X.count);else if(J.isInstancedBufferGeometry){const Oe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xt=Math.min(J.instanceCount,Oe);yt.renderInstances(Et,Pt,Xt)}else yt.render(Et,Pt)};function vt(b,W,J){b.transparent===!0&&b.side===Ui&&b.forceSinglePass===!1?(b.side=Rn,b.needsUpdate=!0,$r(b,W,J),b.side=gr,b.needsUpdate=!0,$r(b,W,J),b.side=Ui):$r(b,W,J)}this.compile=function(b,W,J=null){J===null&&(J=b),v=gt.get(J),v.init(W),L.push(v),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),b!==J&&b.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const ne=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Te=we[Ne];vt(Te,J,X),ne.add(Te)}else vt(we,J,X),ne.add(we)}),L.pop(),v=null,ne},this.compileAsync=function(b,W,J=null){const ne=this.compile(b,W,J);return new Promise(X=>{function we(){if(ne.forEach(function(Ne){Qe.get(Ne).currentProgram.isReady()&&ne.delete(Ne)}),ne.size===0){X(b);return}setTimeout(we,10)}ct.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Zt=null;function Hn(b){Zt&&Zt(b)}function zi(){Ln.stop()}function qr(){Ln.start()}const Ln=new Fg;Ln.setAnimationLoop(Hn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(b){Zt=b,ae.setAnimationLoop(b),b===null?Ln.stop():Ln.start()},ae.addEventListener("sessionstart",zi),ae.addEventListener("sessionend",qr),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(W),W=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,W,U),v=gt.get(b,L.length),v.init(W),L.push(v),Se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ue.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,Q=Me.init(this.clippingPlanes,ue),A=Fe.get(b,_.length),A.init(),_.push(A),ae.enabled===!0&&ae.isPresenting===!0){const we=P.xr.getDepthSensingMesh();we!==null&&$s(we,W,-1/0,P.sortObjects)}$s(b,W,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(H,de),_t=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,_t&&tt.addToRenderList(A,b),this.info.render.frame++,Q===!0&&Me.beginShadows();const J=v.state.shadowsArray;ke.render(J,b,W),Q===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=A.opaque,X=A.transmissive;if(v.setupLights(),W.isArrayCamera){const we=W.cameras;if(X.length>0)for(let Ne=0,Te=we.length;Ne<Te;Ne++){const Ge=we[Ne];xr(ne,X,b,Ge)}_t&&tt.render(b);for(let Ne=0,Te=we.length;Ne<Te;Ne++){const Ge=we[Ne];Bi(A,b,Ge,Ge.viewport)}}else X.length>0&&xr(ne,X,b,W),_t&&tt.render(b),Bi(A,b,W);U!==null&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(P,b,W),wt.resetDefaultState(),k=-1,te=null,L.pop(),L.length>0?(v=L[L.length-1],Q===!0&&Me.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function $s(b,W,J,ne){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){ne&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Se);const Ne=fe.update(b),Te=b.material;Te.visible&&A.push(b,Ne,Te,J,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const Ne=fe.update(b),Te=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Pe.copy(Ne.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){const Ge=Ne.groups;for(let $e=0,Ze=Ge.length;$e<Ze;$e++){const je=Ge[$e],Et=Te[je.materialIndex];Et&&Et.visible&&A.push(b,Ne,Et,J,Pe.z,je)}}else Te.visible&&A.push(b,Ne,Te,J,Pe.z,null)}}const we=b.children;for(let Ne=0,Te=we.length;Ne<Te;Ne++)$s(we[Ne],W,J,ne)}function Bi(b,W,J,ne){const X=b.opaque,we=b.transmissive,Ne=b.transparent;v.setupLightsView(J),Q===!0&&Me.setGlobalState(P.clippingPlanes,J),ne&&Ke.viewport(E.copy(ne)),X.length>0&&_i(X,W,J),we.length>0&&_i(we,W,J),Ne.length>0&&_i(Ne,W,J),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function xr(b,W,J,ne){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new Xr(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Ha:Oi,minFilter:Gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const we=v.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||E;we.setSize(Ne.z,Ne.w);const Te=P.getRenderTarget();P.setRenderTarget(we),P.getClearColor(ee),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),_t&&tt.render(J);const Ge=P.toneMapping;P.toneMapping=mr;const $e=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),Q===!0&&Me.setGlobalState(P.clippingPlanes,ne),_i(b,J,ne),D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let je=0,Et=W.length;je<Et;je++){const Rt=W[je],Pt=Rt.object,Ft=Rt.geometry,yt=Rt.material,Oe=Rt.group;if(yt.side===Ui&&Pt.layers.test(ne.layers)){const Xt=yt.side;yt.side=Rn,yt.needsUpdate=!0,Yr(Pt,J,ne,Ft,yt,Oe),yt.side=Xt,yt.needsUpdate=!0,Ze=!0}}Ze===!0&&(D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we))}P.setRenderTarget(Te),P.setClearColor(ee,le),$e!==void 0&&(ne.viewport=$e),P.toneMapping=Ge}function _i(b,W,J){const ne=W.isScene===!0?W.overrideMaterial:null;for(let X=0,we=b.length;X<we;X++){const Ne=b[X],Te=Ne.object,Ge=Ne.geometry,$e=ne===null?Ne.material:ne,Ze=Ne.group;Te.layers.test(J.layers)&&Yr(Te,W,J,Ge,$e,Ze)}}function Yr(b,W,J,ne,X,we){b.onBeforeRender(P,W,J,ne,X,we),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(P,W,J,ne,b,we),X.transparent===!0&&X.side===Ui&&X.forceSinglePass===!1?(X.side=Rn,X.needsUpdate=!0,P.renderBufferDirect(J,W,ne,X,b,we),X.side=gr,X.needsUpdate=!0,P.renderBufferDirect(J,W,ne,X,b,we),X.side=Ui):P.renderBufferDirect(J,W,ne,X,b,we),b.onAfterRender(P,W,J,ne,X,we)}function $r(b,W,J){W.isScene!==!0&&(W=et);const ne=Qe.get(b),X=v.state.lights,we=v.state.shadowsArray,Ne=X.state.version,Te=Xe.getParameters(b,X.state,we,W,J),Ge=Xe.getProgramCacheKey(Te);let $e=ne.programs;ne.environment=b.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(b.isMeshStandardMaterial?Z:C).get(b.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,$e===void 0&&(b.addEventListener("dispose",ht),$e=new Map,ne.programs=$e);let Ze=$e.get(Ge);if(Ze!==void 0){if(ne.currentProgram===Ze&&ne.lightsStateVersion===Ne)return Ya(b,Te),Ze}else Te.uniforms=Xe.getUniforms(b),b.onBeforeCompile(Te,P),Ze=Xe.acquireProgram(Te,Ge),$e.set(Ge,Ze),ne.uniforms=Te.uniforms;const je=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=Me.uniform),Ya(b,Te),ne.needsLights=Ka(b),ne.lightsStateVersion=Ne,ne.needsLights&&(je.ambientLightColor.value=X.state.ambient,je.lightProbe.value=X.state.probe,je.directionalLights.value=X.state.directional,je.directionalLightShadows.value=X.state.directionalShadow,je.spotLights.value=X.state.spot,je.spotLightShadows.value=X.state.spotShadow,je.rectAreaLights.value=X.state.rectArea,je.ltc_1.value=X.state.rectAreaLTC1,je.ltc_2.value=X.state.rectAreaLTC2,je.pointLights.value=X.state.point,je.pointLightShadows.value=X.state.pointShadow,je.hemisphereLights.value=X.state.hemi,je.directionalShadowMap.value=X.state.directionalShadowMap,je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,je.spotShadowMap.value=X.state.spotShadowMap,je.spotLightMatrix.value=X.state.spotLightMatrix,je.spotLightMap.value=X.state.spotLightMap,je.pointShadowMap.value=X.state.pointShadowMap,je.pointShadowMatrix.value=X.state.pointShadowMatrix),ne.currentProgram=Ze,ne.uniformsList=null,Ze}function qa(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=bl.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Ya(b,W){const J=Qe.get(b);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function xi(b,W,J,ne,X){W.isScene!==!0&&(W=et),D.resetTextureUnits();const we=W.fog,Ne=ne.isMeshStandardMaterial?W.environment:null,Te=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_r,Ge=(ne.isMeshStandardMaterial?Z:C).get(ne.envMap||Ne),$e=ne.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ze=!!J.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!J.morphAttributes.position,Et=!!J.morphAttributes.normal,Rt=!!J.morphAttributes.color;let Pt=mr;ne.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=Ft!==void 0?Ft.length:0,Oe=Qe.get(ne),Xt=v.state.lights;if(Q===!0&&(ue===!0||b!==te)){const ln=b===te&&ne.id===k;Me.setState(ne,b,ln)}let St=!1;ne.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==Te||X.isBatchedMesh&&Oe.batching===!1||!X.isBatchedMesh&&Oe.batching===!0||X.isBatchedMesh&&Oe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Oe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||X.isInstancedMesh&&Oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Oe.instancingMorph===!1&&X.morphTexture!==null||Oe.envMap!==Ge||ne.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Me.numPlanes||Oe.numIntersection!==Me.numIntersection)||Oe.vertexAlphas!==$e||Oe.vertexTangents!==Ze||Oe.morphTargets!==je||Oe.morphNormals!==Et||Oe.morphColors!==Rt||Oe.toneMapping!==Pt||Oe.morphTargetsCount!==yt)&&(St=!0):(St=!0,Oe.__version=ne.version);let Nn=Oe.currentProgram;St===!0&&(Nn=$r(ne,W,X));let Zn=!1,Qt=!1,yi=!1;const Lt=Nn.getUniforms(),ui=Oe.uniforms;if(Ke.useProgram(Nn.program)&&(Zn=!0,Qt=!0,yi=!0),ne.id!==k&&(k=ne.id,Qt=!0),Zn||te!==b){mt.reverseDepthBuffer?(ye.copy(b.projectionMatrix),ex(ye),tx(ye),Lt.setValue(B,"projectionMatrix",ye)):Lt.setValue(B,"projectionMatrix",b.projectionMatrix),Lt.setValue(B,"viewMatrix",b.matrixWorldInverse);const ln=Lt.map.cameraPosition;ln!==void 0&&ln.setValue(B,be.setFromMatrixPosition(b.matrixWorld)),mt.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),te!==b&&(te=b,Qt=!0,yi=!0)}if(X.isSkinnedMesh){Lt.setOptional(B,X,"bindMatrix"),Lt.setOptional(B,X,"bindMatrixInverse");const ln=X.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Lt.setValue(B,"boneTexture",ln.boneTexture,D))}X.isBatchedMesh&&(Lt.setOptional(B,X,"batchingTexture"),Lt.setValue(B,"batchingTexture",X._matricesTexture,D),Lt.setOptional(B,X,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",X._indirectTexture,D),Lt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",X._colorsTexture,D));const Ks=J.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Je.update(X,J,Nn),(Qt||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,Lt.setValue(B,"receiveShadow",X.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ui.envMap.value=Ge,ui.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(ui.envMapIntensity.value=W.environmentIntensity),Qt&&(Lt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&$a(ui,yi),we&&ne.fog===!0&&Ae.refreshFogUniforms(ui,we),Ae.refreshMaterialUniforms(ui,ne,ce,re,v.state.transmissionRenderTarget[b.id]),bl.upload(B,qa(Oe),ui,D)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(bl.upload(B,qa(Oe),ui,D),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(B,"center",X.center),Lt.setValue(B,"modelViewMatrix",X.modelViewMatrix),Lt.setValue(B,"normalMatrix",X.normalMatrix),Lt.setValue(B,"modelMatrix",X.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const ln=ne.uniformsGroups;for(let Kr=0,Zs=ln.length;Kr<Zs;Kr++){const Hi=ln[Kr];j.update(Hi,Nn),j.bind(Hi,Nn)}}return Nn}function $a(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Ka(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,W,J){Qe.get(b.texture).__webglTexture=W,Qe.get(b.depthTexture).__webglTexture=J;const ne=Qe.get(b);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=J===void 0,ne.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const J=Qe.get(b);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,J=0){U=b,G=W,O=J;let ne=!0,X=null,we=!1,Ne=!1;if(b){const Ge=Qe.get(b);if(Ge.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(B.FRAMEBUFFER,null),ne=!1;else if(Ge.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Ge.__hasExternalTextures)D.rebindTextures(b,Qe.get(b.texture).__webglTexture,Qe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(Ge.__boundDepthTexture!==je){if(je!==null&&Qe.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const Ze=Qe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?X=Ze[W][J]:X=Ze[W],we=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?X=Qe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[J]:X=Ze,E.copy(b.viewport),R.copy(b.scissor),$=b.scissorTest}else E.copy(oe).multiplyScalar(ce).floor(),R.copy(F).multiplyScalar(ce).floor(),$=se;if(Ke.bindFramebuffer(B.FRAMEBUFFER,X)&&ne&&Ke.drawBuffers(b,X),Ke.viewport(E),Ke.scissor(R),Ke.setScissorTest($),we){const Ge=Qe.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,J)}else if(Ne){const Ge=Qe.get(b.texture),$e=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.__webglTexture,J||0,$e)}k=-1},this.readRenderTargetPixels=function(b,W,J,ne,X,we,Ne){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Qe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Te=Te[Ne]),Te){Ke.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Ge=b.texture,$e=Ge.format,Ze=Ge.type;if(!mt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-ne&&J>=0&&J<=b.height-X&&B.readPixels(W,J,ne,X,rt.convert($e),rt.convert(Ze),we)}finally{const Ge=U!==null?Qe.get(U).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(b,W,J,ne,X,we,Ne){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Qe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Te=Te[Ne]),Te){const Ge=b.texture,$e=Ge.format,Ze=Ge.type;if(!mt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-ne&&J>=0&&J<=b.height-X){Ke.bindFramebuffer(B.FRAMEBUFFER,Te);const je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(W,J,ne,X,rt.convert($e),rt.convert(Ze),0);const Et=U!==null?Qe.get(U).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,Et);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await J_(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(je),B.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,W=null,J=0){b.isTexture!==!0&&(Rl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const ne=Math.pow(2,-J),X=Math.floor(b.image.width*ne),we=Math.floor(b.image.height*ne),Ne=W!==null?W.x:0,Te=W!==null?W.y:0;D.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Ne,Te,X,we),Ke.unbindTexture()},this.copyTextureToTexture=function(b,W,J=null,ne=null,X=0){b.isTexture!==!0&&(Rl("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,b=arguments[1],W=arguments[2],X=arguments[3]||0,J=null);let we,Ne,Te,Ge,$e,Ze;J!==null?(we=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Te=J.min.x,Ge=J.min.y):(we=b.image.width,Ne=b.image.height,Te=0,Ge=0),ne!==null?($e=ne.x,Ze=ne.y):($e=0,Ze=0);const je=rt.convert(W.format),Et=rt.convert(W.type);D.setTexture2D(W,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Rt=B.getParameter(B.UNPACK_ROW_LENGTH),Pt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ft=B.getParameter(B.UNPACK_SKIP_PIXELS),yt=B.getParameter(B.UNPACK_SKIP_ROWS),Oe=B.getParameter(B.UNPACK_SKIP_IMAGES),Xt=b.isCompressedTexture?b.mipmaps[X]:b.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,$e,Ze,we,Ne,je,Et,Xt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,$e,Ze,Xt.width,Xt.height,je,Xt.data):B.texSubImage2D(B.TEXTURE_2D,X,$e,Ze,we,Ne,je,Et,Xt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ft),B.pixelStorei(B.UNPACK_SKIP_ROWS,yt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oe),X===0&&W.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(b,W,J=null,ne=null,X=0){b.isTexture!==!0&&(Rl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ne=arguments[1]||null,b=arguments[2],W=arguments[3],X=arguments[4]||0);let we,Ne,Te,Ge,$e,Ze,je,Et,Rt;const Pt=b.isCompressedTexture?b.mipmaps[X]:b.image;J!==null?(we=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Te=J.max.z-J.min.z,Ge=J.min.x,$e=J.min.y,Ze=J.min.z):(we=Pt.width,Ne=Pt.height,Te=Pt.depth,Ge=0,$e=0,Ze=0),ne!==null?(je=ne.x,Et=ne.y,Rt=ne.z):(je=0,Et=0,Rt=0);const Ft=rt.convert(W.format),yt=rt.convert(W.type);let Oe;if(W.isData3DTexture)D.setTexture3D(W,0),Oe=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)D.setTexture2DArray(W,0),Oe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Xt=B.getParameter(B.UNPACK_ROW_LENGTH),St=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Nn=B.getParameter(B.UNPACK_SKIP_PIXELS),Zn=B.getParameter(B.UNPACK_SKIP_ROWS),Qt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ge),B.pixelStorei(B.UNPACK_SKIP_ROWS,$e),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze),b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Oe,X,je,Et,Rt,we,Ne,Te,Ft,yt,Pt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,X,je,Et,Rt,we,Ne,Te,Ft,Pt.data):B.texSubImage3D(Oe,X,je,Et,Rt,we,Ne,Te,Ft,yt,Pt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Nn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt),X===0&&W.generateMipmaps&&B.generateMipmap(Oe),Ke.unbindTexture()},this.initRenderTarget=function(b){Qe.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Ke.unbindTexture()},this.resetState=function(){G=0,O=0,U=null,Ke.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===cf?"display-p3":"srgb",n.unpackColorSpace=Tt.workingColorSpace===Hl?"display-p3":"srgb"}}class hf extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pf extends qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wm=new Ot,qd=new Cg,yl=new Vl,Sl=new q;class Vg extends xn{constructor(e=new Kn,n=new pf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(o),yl.radius+=c,e.ray.intersectsSphere(yl)===!1)return;Wm.copy(o).invert(),qd.copy(e.ray).applyMatrix4(Wm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,S=r.attributes.position;if(m!==null){const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let T=y,A=M;T<A;T++){const v=m.getX(T);Sl.fromBufferAttribute(S,v),Xm(Sl,v,h,o,e,n,this)}}else{const y=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let T=y,A=M;T<A;T++)Sl.fromBufferAttribute(S,T),Xm(Sl,T,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Xm(s,e,n,r,o,c,u){const f=qd.distanceSqToPoint(s);if(f<n){const h=new q;qd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Xa extends Kn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],u=[];f(o),m(r),x(),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(c.slice(),3)),this.setAttribute("uv",new Bn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const P=new q,N=new q,G=new q;for(let O=0;O<n.length;O+=3)M(n[O+0],P),M(n[O+1],N),M(n[O+2],G),h(P,N,G,L)}function h(L,P,N,G){const O=G+1,U=[];for(let k=0;k<=O;k++){U[k]=[];const te=L.clone().lerp(N,k/O),E=P.clone().lerp(N,k/O),R=O-k;for(let $=0;$<=R;$++)$===0&&k===O?U[k][$]=te:U[k][$]=te.clone().lerp(E,$/R)}for(let k=0;k<O;k++)for(let te=0;te<2*(O-k)-1;te++){const E=Math.floor(te/2);te%2===0?(y(U[k][E+1]),y(U[k+1][E]),y(U[k][E])):(y(U[k][E+1]),y(U[k+1][E+1]),y(U[k+1][E]))}}function m(L){const P=new q;for(let N=0;N<c.length;N+=3)P.x=c[N+0],P.y=c[N+1],P.z=c[N+2],P.normalize().multiplyScalar(L),c[N+0]=P.x,c[N+1]=P.y,c[N+2]=P.z}function x(){const L=new q;for(let P=0;P<c.length;P+=3){L.x=c[P+0],L.y=c[P+1],L.z=c[P+2];const N=v(L)/2/Math.PI+.5,G=_(L)/Math.PI+.5;u.push(N,1-G)}T(),S()}function S(){for(let L=0;L<u.length;L+=6){const P=u[L+0],N=u[L+2],G=u[L+4],O=Math.max(P,N,G),U=Math.min(P,N,G);O>.9&&U<.1&&(P<.2&&(u[L+0]+=1),N<.2&&(u[L+2]+=1),G<.2&&(u[L+4]+=1))}}function y(L){c.push(L.x,L.y,L.z)}function M(L,P){const N=L*3;P.x=e[N+0],P.y=e[N+1],P.z=e[N+2]}function T(){const L=new q,P=new q,N=new q,G=new q,O=new pt,U=new pt,k=new pt;for(let te=0,E=0;te<c.length;te+=9,E+=6){L.set(c[te+0],c[te+1],c[te+2]),P.set(c[te+3],c[te+4],c[te+5]),N.set(c[te+6],c[te+7],c[te+8]),O.set(u[E+0],u[E+1]),U.set(u[E+2],u[E+3]),k.set(u[E+4],u[E+5]),G.copy(L).add(P).add(N).divideScalar(3);const R=v(G);A(O,E+0,L,R),A(U,E+2,P,R),A(k,E+4,N,R)}}function A(L,P,N,G){G<0&&L.x===1&&(u[P]=L.x-1),N.x===0&&N.z===0&&(u[P]=G/2/Math.PI+.5)}function v(L){return Math.atan2(L.z,-L.x)}function _(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.vertices,e.indices,e.radius,e.details)}}class jr extends Xa{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new jr(e.radius,e.detail)}}class za extends Xa{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new za(e.radius,e.detail)}}class Fl extends Xa{constructor(e=1,n=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],o=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,o,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Fl(e.radius,e.detail)}}class mf extends Kn{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c},r=Math.floor(r),o=Math.floor(o);const u=[],f=[],h=[],m=[],x=new q,S=new q,y=new q;for(let M=0;M<=r;M++)for(let T=0;T<=o;T++){const A=T/o*c,v=M/r*Math.PI*2;S.x=(e+n*Math.cos(v))*Math.cos(A),S.y=(e+n*Math.cos(v))*Math.sin(A),S.z=n*Math.sin(v),f.push(S.x,S.y,S.z),x.x=e*Math.cos(A),x.y=e*Math.sin(A),y.subVectors(S,x).normalize(),h.push(y.x,y.y,y.z),m.push(T/o),m.push(M/r)}for(let M=1;M<=r;M++)for(let T=1;T<=o;T++){const A=(o+1)*M+T-1,v=(o+1)*(M-1)+T-1,_=(o+1)*(M-1)+T,L=(o+1)*M+T;u.push(A,v,L),u.push(v,_,L)}this.setIndex(u),this.setAttribute("position",new Bn(f,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class kl extends qs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gg extends xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const rd=new Ot,qm=new q,Ym=new q;class fE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),Ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ym),n.updateMatrixWorld(),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $m=new Ot,Fa=new q,sd=new q;class hE extends fE{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Fa.setFromMatrixPosition(e.matrixWorld),r.position.copy(Fa),sd.copy(r.position),sd.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(sd),r.updateMatrixWorld(),o.makeTranslation(-Fa.x,-Fa.y,-Fa.z),$m.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix($m)}}class Ol extends Gg{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new hE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gf extends Gg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class vf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Km(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Km();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Km(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);const pE=[{count:80,suffix:"+",label:"Projects Delivered"},{count:98,suffix:"%",label:"Client Satisfaction"},{count:5,suffix:"+",label:"Years of Excellence"},{count:30,suffix:"+",label:"Happy Clients"}];function mE(){const s=it.useRef(null);return it.useEffect(()=>{const e=s.current;if(!e)return;const n=new ff({canvas:e,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(0,0);const r=new hf,o=new _n(60,1,.1,200);o.position.set(0,0,30);const c=()=>{const E=e.parentElement.offsetWidth,R=e.parentElement.offsetHeight;n.setSize(E,R),o.aspect=E/R,o.updateProjectionMatrix()};c(),window.addEventListener("resize",c),r.add(new gf(16777215,.4));const u=new Ol(13168949,2.5,80);u.position.set(-15,10,10),r.add(u);const f=new Ol(6514417,1.5,60);f.position.set(15,-10,5),r.add(f);const h=new Fs;r.add(h);const m=[new jr(3.5,1),new za(2.2,0),new Fl(1.8,0),new jr(1.4,0),new za(1,0),new jr(.8,0),new Fl(1.2,0),new za(.7,0)],x=[13168949,6514417,13168949,9133302,13168949,6514417,15485081,13168949],S=m.map((E,R)=>{const $=new kl({color:x[R],wireframe:R%2===0,transparent:!0,opacity:R%2===0?.45:.12,shininess:80}),ee=new zn(E,$),le=R/m.length*Math.PI*2,me=8+R%3*4;return ee.position.set(Math.cos(le)*me,Math.sin(le)*me*.5+(Math.random()-.5)*6,(Math.random()-.5)*12),ee.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),ee.userData={rotSpeed:new q((Math.random()-.5)*.008,(Math.random()-.5)*.012,(Math.random()-.5)*.006),floatSpeed:.3+Math.random()*.5,floatAmp:.8+Math.random()*1.2,floatOffset:Math.random()*Math.PI*2,baseY:ee.position.y},h.add(ee),ee}),y=new zn(new jr(6,2),new kl({color:13168949,wireframe:!0,transparent:!0,opacity:.05}));y.position.set(0,0,-5),r.add(y);const M=2e3,T=new Float32Array(M*3),A=new Float32Array(M*3),v=[new ot(13168949),new ot(6514417),new ot(9133302)];for(let E=0;E<M;E++){T[E*3]=(Math.random()-.5)*80,T[E*3+1]=(Math.random()-.5)*50,T[E*3+2]=(Math.random()-.5)*40-10;const R=v[Math.floor(Math.random()*v.length)];A[E*3]=R.r,A[E*3+1]=R.g,A[E*3+2]=R.b}const _=new Kn;_.setAttribute("position",new Pn(T,3)),_.setAttribute("color",new Pn(A,3));const L=new pf({size:.15,vertexColors:!0,transparent:!0,opacity:.6}),P=new Vg(_,L);r.add(P);const N=new pt(0,0),G=new pt(0,0),O=E=>{N.x=(E.clientY/window.innerHeight*2-1)*.3,N.y=(E.clientX/window.innerWidth*2-1)*.5};document.addEventListener("mousemove",O);const U=new vf;let k;const te=()=>{k=requestAnimationFrame(te);const E=U.getElapsedTime();G.x+=(N.x-G.x)*.05,G.y+=(N.y-G.y)*.05,h.rotation.x=G.x*.4,h.rotation.y=G.y*.4+E*.04,y.rotation.x=E*.05,y.rotation.y=E*.08,S.forEach($=>{$.rotation.x+=$.userData.rotSpeed.x,$.rotation.y+=$.userData.rotSpeed.y,$.rotation.z+=$.userData.rotSpeed.z,$.position.y=$.userData.baseY+Math.sin(E*$.userData.floatSpeed+$.userData.floatOffset)*$.userData.floatAmp});const R=_.attributes.position;for(let $=0;$<M;$++)R.setY($,Math.sin(R.getX($)*.15+E*.4)*2.5+Math.cos(R.getZ($)*.1+E*.3)*1.5);R.needsUpdate=!0,P.rotation.y=E*.015,u.position.x=Math.sin(E*.4)*20,u.position.y=Math.cos(E*.3)*15,n.render(r,o)};return te(),()=>{cancelAnimationFrame(k),window.removeEventListener("resize",c),document.removeEventListener("mousemove",O),n.dispose()}},[]),g.jsxs("section",{className:"hero",id:"hero",children:[g.jsxs("div",{className:"hero-bg",children:[g.jsx("canvas",{ref:s,className:"three-canvas"}),g.jsx("div",{className:"hero-noise"})]}),g.jsxs("div",{className:"hero-container",children:[g.jsxs("div",{className:"hero-eyebrow reveal-up",children:[g.jsx("span",{className:"hero-dot"}),"Now accepting new projects — 2025"]}),g.jsxs("h1",{className:"hero-title",children:[g.jsx("span",{className:"hero-title-line reveal-up","data-delay":"0.05",children:g.jsx("span",{children:"WE BUILD"})}),g.jsx("span",{className:"hero-title-line reveal-up","data-delay":"0.1",children:g.jsx("span",{className:"hero-title-accent",children:"DIGITAL"})}),g.jsx("span",{className:"hero-title-line reveal-up","data-delay":"0.15",children:g.jsx("span",{children:"PRODUCTS"})})]}),g.jsxs("div",{className:"hero-bottom",children:[g.jsxs("div",{children:[g.jsxs("p",{className:"hero-desc reveal-up","data-delay":"0.2",children:["Mohali-based digital agency crafting bold brands,",g.jsx("br",{}),"high-performance websites and apps since 2019."]}),g.jsxs("div",{className:"hero-cta reveal-up","data-delay":"0.25",style:{marginTop:"2rem"},children:[g.jsxs("a",{href:"#work",className:"btn btn-primary btn-lg magnetic",children:["View Our Work ",g.jsx(H0,{size:16})]}),g.jsxs("a",{href:"#about",className:"btn btn-ghost btn-lg magnetic",children:[g.jsx(Q0,{size:14})," Our Story"]})]})]}),g.jsx("div",{className:"hero-stats reveal-up","data-delay":"0.3",children:pE.map(e=>g.jsxs("div",{className:"stat",children:[g.jsxs("div",{className:"stat-row",children:[g.jsx("span",{className:"stat-num","data-count":e.count,children:"0"}),g.jsx("span",{className:"stat-suffix",children:e.suffix})]}),g.jsx("p",{children:e.label})]},e.label))})]})]}),g.jsxs("div",{className:"hero-scroll",children:[g.jsx("div",{className:"scroll-line"}),g.jsx("span",{children:"Scroll"})]})]})}const Zm=["WordPress","Shopify","Laravel","React","SEO","Mobile Responsive","WooCommerce","Next.js","UI/UX Design","E-Commerce"],gE=[...Zm,...Zm];function vE(){return g.jsx("div",{className:"marquee-section",children:g.jsx("div",{className:"marquee-track",children:g.jsx("div",{className:"marquee-content",children:gE.map((s,e)=>g.jsxs("span",{children:[s," ",g.jsx("span",{className:"dot",children:"◆"})]},e))})})})}const _E=["WordPress","Shopify","Laravel","React","SEO","Mobile Responsive","WooCommerce","Next.js"],xE=[{name:"5+ Years Experience",year:"2019 – Present",badge:"Est. Mohali"},{name:"80+ Projects Delivered",year:"Across India",badge:"Proven Track Record"},{name:"98% Client Retention",year:"Repeat Clients",badge:"Trusted Partner"},{name:"Full-Service Studio",year:"End-to-End",badge:"Design to Deploy"}];function yE(){return g.jsx("section",{className:"about section",id:"about",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"about-inner",children:[g.jsxs("div",{className:"about-left",children:[g.jsx("div",{className:"section-num about-num reveal-up",children:"01"}),g.jsx("div",{className:"section-label reveal-up",children:"About Us"}),g.jsxs("h2",{className:"about-heading reveal-up",children:["Mohali's most",g.jsx("br",{}),"trusted digital",g.jsx("br",{}),g.jsx("span",{className:"text-accent",children:"studio."})]}),g.jsxs("a",{href:"#contact",className:"btn btn-primary magnetic reveal-up",style:{marginTop:"2rem"},children:["Work With Us ",g.jsx($d,{size:15})]})]}),g.jsxs("div",{className:"about-right",children:[g.jsx("p",{className:"about-text reveal-up",children:"We are a full-service digital agency based in Mohali, Punjab, with over 5 years of hands-on experience building websites, mobile apps, and digital brands. Since 2019, we have partnered with startups, SMEs, and established businesses across India to deliver products that look great and perform even better."}),g.jsx("p",{className:"about-text reveal-up",children:"Our team of designers, developers, and strategists works closely with every client — from the first wireframe to the final launch. We don't just deliver projects; we build long-term digital partnerships that grow with your business."}),g.jsx("div",{className:"about-features reveal-up",children:_E.map(s=>g.jsx("span",{className:"feature-pill",children:s},s))}),g.jsx("div",{className:"about-awards reveal-up",children:xE.map(({name:s,year:e,badge:n})=>g.jsxs("div",{className:"award-row",children:[g.jsx("span",{className:"award-name",children:s}),g.jsx("span",{className:"award-year",children:e}),g.jsx("span",{className:"award-badge",children:n})]},s))})]})]})})})}const SE=[{num:"01",title:"WordPress Development",desc:"Custom WordPress websites, themes, and plugins built for speed, security, and ease of management. From blogs to full business portals.",tags:["WordPress","WooCommerce","Custom Themes","Plugins"]},{num:"02",title:"Shopify Stores",desc:"High-converting Shopify storefronts with custom design, product setup, payment integration, and ongoing store management.",tags:["Shopify","E-Commerce","Payment Gateway","Store Setup"]},{num:"03",title:"Laravel Web Apps",desc:"Robust, scalable web applications built with Laravel — from admin dashboards and CRMs to custom business tools and APIs.",tags:["Laravel","PHP","REST API","MySQL"]},{num:"04",title:"React Development",desc:"Fast, interactive frontends and single-page applications built with React. Clean code, component-driven architecture, and smooth UX.",tags:["React","Next.js","JavaScript","Tailwind CSS"]},{num:"05",title:"SEO Optimization",desc:"On-page and technical SEO that gets your website ranking on Google. Keyword research, site audits, speed optimization, and content strategy.",tags:["On-Page SEO","Technical SEO","Google Analytics","Core Web Vitals"]},{num:"06",title:"Mobile Responsive Design",desc:"Every website we build is fully responsive — pixel-perfect on mobile, tablet, and desktop. Optimized for touch, speed, and usability.",tags:["Responsive Design","Mobile-First","Cross-Browser","UI/UX"]}];function ME(){const s=it.useRef(null);return it.useEffect(()=>{const e=s.current;if(!e)return;const n=new ff({canvas:e,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(0,0);const r=new hf,o=new _n(50,1,.1,200);o.position.set(0,0,25);const c=()=>{const M=e.parentElement.offsetWidth,T=e.parentElement.offsetHeight;n.setSize(M,T),o.aspect=M/T,o.updateProjectionMatrix()};c(),window.addEventListener("resize",c),r.add(new gf(16777215,.4));const u=new Ol(13168949,2,60);u.position.set(10,10,10),r.add(u);const f=new Fs;r.add(f);const m=[{r:5,tube:.12,color:13168949},{r:8,tube:.1,color:6514417},{r:11,tube:.08,color:13168949},{r:14,tube:.06,color:9133302}].map(({r:M,tube:T,color:A},v)=>{const _=new zn(new mf(M,T,16,100),new kl({color:A,transparent:!0,opacity:.3}));return _.rotation.x=.5*(v+1),_.rotation.y=.3*(v+1),f.add(_),_}),x=new vf;let S;const y=()=>{S=requestAnimationFrame(y);const M=x.getElapsedTime();m.forEach((T,A)=>{T.rotation.z+=.003*(A%2===0?1:-1),T.rotation.x+=.001}),f.rotation.y=M*.05,n.render(r,o)};return y(),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",c),n.dispose()}},[]),g.jsxs("section",{className:"services section",id:"services",children:[g.jsx("canvas",{ref:s,className:"section-three-canvas"}),g.jsxs("div",{className:"container",children:[g.jsx("div",{className:"section-label reveal-up",children:"What We Do"}),g.jsxs("h2",{className:"display-title reveal-up",children:["Services that",g.jsx("br",{}),g.jsx("span",{className:"text-accent",children:"move the needle."})]}),g.jsx("div",{className:"services-list",children:SE.map(({num:e,title:n,desc:r,tags:o})=>g.jsxs("div",{className:"service-row reveal-up",children:[g.jsx("span",{className:"service-row-num",children:e}),g.jsxs("div",{className:"service-row-body",children:[g.jsx("h3",{children:n}),g.jsx("p",{children:r}),g.jsx("div",{className:"service-row-tags",children:o.map(c=>g.jsx("span",{children:c},c))})]}),g.jsx("div",{className:"service-row-arrow",children:g.jsx(zl,{size:22})})]},e))})]})]})}const Qm=[{id:"desktop",Icon:ag,label:"Desktop",width:"100%"},{id:"tablet",Icon:cg,label:"Tablet",width:"768px"},{id:"mobile",Icon:lg,label:"Mobile",width:"390px"}];function EE({url:s}){const[e,n]=it.useState("desktop"),[r,o]=it.useState(!1),[c,u]=it.useState(0),f=Qm.find(m=>m.id===e),h=()=>{o(!1),u(m=>m+1)};return s?g.jsxs("div",{className:"pm-preview-wrap",children:[g.jsxs("div",{className:"pm-preview-toolbar",children:[g.jsxs("div",{className:"pm-preview-url",children:[g.jsx("span",{className:"pm-secure-dot"}),g.jsx("span",{className:"pm-url-text",children:s})]}),g.jsxs("div",{className:"pm-preview-controls",children:[g.jsx("div",{className:"pm-device-btns",children:Qm.map(({id:m,Icon:x,label:S})=>g.jsx("button",{className:`pm-device-btn${e===m?" active":""}`,onClick:()=>n(m),title:S,children:g.jsx(x,{size:14})},m))}),g.jsx("button",{className:"pm-ctrl-btn",onClick:h,title:"Refresh",children:g.jsx(og,{size:13,className:r?"":"pm-spin"})}),g.jsx("a",{className:"pm-ctrl-btn",href:s,target:"_blank",rel:"noopener noreferrer",title:"Open in new tab",children:g.jsx(Kd,{size:13})})]})]}),g.jsx("div",{className:"pm-iframe-outer",children:g.jsxs("div",{className:`pm-iframe-frame pm-frame-${e}`,style:{width:f.width},children:[!r&&g.jsxs("div",{className:"pm-iframe-loading",children:[g.jsx("div",{className:"pm-spinner"}),g.jsx("span",{children:"Loading preview…"})]}),g.jsx("iframe",{src:s,title:"Live preview",className:"pm-iframe",onLoad:()=>o(!0),sandbox:"allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox",loading:"lazy"},c)]})}),g.jsx("p",{className:"pm-iframe-note",children:"⚠ Some sites block embedding. If blank, open directly via the ↗ button above."})]}):g.jsxs("div",{className:"pm-preview-empty",children:[g.jsx(Ml,{size:32}),g.jsx("span",{children:"No live URL provided"})]})}function wE({project:s,onClose:e}){const n=it.useRef(null),[r,o]=it.useState("overview");it.useEffect(()=>{const G=O=>{O.key==="Escape"&&e()};return document.addEventListener("keydown",G),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",G),document.body.style.overflow=""}},[e]);const c=G=>{G.target===n.current&&e()};if(!s)return null;const{title:u,cat:f,desc:h,fullDesc:m,c1:x,c2:S,mock:y,letter:M,tags:T,techStack:A,liveUrl:v,year:_,client:L,role:P,results:N}=s;return g.jsx("div",{className:"pm-overlay",ref:n,onClick:c,children:g.jsxs("div",{className:"pm-modal",children:[g.jsxs("div",{className:"pm-topbar",children:[g.jsx("div",{className:"pm-topbar-left",children:g.jsxs("button",{className:"pm-back-btn",onClick:e,children:[g.jsx(ig,{size:16})," Back to Work"]})}),g.jsxs("div",{className:"pm-topbar-tabs",children:[g.jsx("button",{className:`pm-tab-btn${r==="overview"?" active":""}`,onClick:()=>o("overview"),children:"Overview"}),v&&g.jsx("button",{className:`pm-tab-btn${r==="preview"?" active":""}`,onClick:()=>o("preview"),children:"Live Preview"})]}),g.jsx("button",{className:"pm-close-btn",onClick:e,"aria-label":"Close",children:g.jsx(Jd,{size:20})})]}),g.jsxs("div",{className:"pm-body",children:[r==="overview"&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"pm-hero",style:{"--c1":x,"--c2":S},children:[g.jsxs("div",{className:"pm-hero-mock",children:[y==="brand"&&g.jsxs("div",{className:"work-mock work-mock-brand",children:[g.jsx("div",{className:"mock-logo-big",children:M}),g.jsxs("div",{className:"mock-brand-lines",children:[g.jsx("span",{}),g.jsx("span",{})]})]}),y==="wide"&&g.jsxs("div",{className:"work-mock work-mock-wide",children:[g.jsx("div",{className:"mock-sidebar"}),g.jsxs("div",{className:"mock-main",children:[g.jsx("div",{className:"mock-chart"}),g.jsxs("div",{className:"mock-stats-row",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]})]})]}),y==="mobile"&&g.jsx("div",{className:"work-mock work-mock-mobile",children:g.jsx("div",{className:"mock-phone",children:g.jsxs("div",{className:"mock-phone-screen",children:[g.jsx("div",{className:"mock-ph-header"}),g.jsxs("div",{className:"mock-ph-content",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]})]})})}),y==="default"&&g.jsxs("div",{className:"work-mock",children:[g.jsx("div",{className:"mock-bar"}),g.jsxs("div",{className:"mock-lines",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]}),g.jsxs("div",{className:"mock-card-row",children:[g.jsx("span",{}),g.jsx("span",{})]})]})]}),g.jsxs("div",{className:"pm-hero-overlay",children:[g.jsx("span",{className:"pm-hero-cat",children:f}),g.jsx("h1",{className:"pm-hero-title",children:u})]})]}),g.jsxs("div",{className:"pm-meta-strip",children:[_&&g.jsxs("div",{className:"pm-meta-item",children:[g.jsx("span",{className:"pm-meta-label",children:"Year"}),g.jsx("span",{className:"pm-meta-val",children:_})]}),L&&g.jsxs("div",{className:"pm-meta-item",children:[g.jsx("span",{className:"pm-meta-label",children:"Client"}),g.jsx("span",{className:"pm-meta-val",children:L})]}),P&&g.jsxs("div",{className:"pm-meta-item",children:[g.jsx("span",{className:"pm-meta-label",children:"Role"}),g.jsx("span",{className:"pm-meta-val",children:P})]}),v&&g.jsx("div",{className:"pm-meta-item pm-meta-link",children:g.jsxs("a",{href:v,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:["Visit Live Site ",g.jsx(zl,{size:14})]})})]}),g.jsxs("div",{className:"pm-content-grid",children:[g.jsxs("div",{className:"pm-content-main",children:[g.jsx("h2",{className:"pm-section-heading",children:"About the Project"}),g.jsx("p",{className:"pm-desc",children:m||h}),N&&N.length>0&&g.jsxs(g.Fragment,{children:[g.jsx("h2",{className:"pm-section-heading",style:{marginTop:"2.5rem"},children:"Results"}),g.jsx("div",{className:"pm-results",children:N.map(G=>g.jsxs("div",{className:"pm-result-item",children:[g.jsx("span",{className:"pm-result-num",children:G.value}),g.jsx("span",{className:"pm-result-label",children:G.label})]},G.label))})]})]}),g.jsxs("div",{className:"pm-content-side",children:[T&&T.length>0&&g.jsxs("div",{className:"pm-side-block",children:[g.jsx("h3",{className:"pm-side-heading",children:"Services"}),g.jsx("div",{className:"pm-tags",children:T.map(G=>g.jsx("span",{className:"pm-tag",children:G},G))})]}),A&&A.length>0&&g.jsxs("div",{className:"pm-side-block",children:[g.jsx("h3",{className:"pm-side-heading",children:"Tech Stack"}),g.jsx("div",{className:"pm-tags",children:A.map(G=>g.jsx("span",{className:"pm-tag pm-tag-tech",children:G},G))})]}),v&&g.jsxs("div",{className:"pm-side-block",children:[g.jsx("h3",{className:"pm-side-heading",children:"Live Preview"}),g.jsxs("button",{className:"pm-preview-cta",onClick:()=>o("preview"),children:["Open Preview ",g.jsx($d,{size:14})]})]})]})]})]}),r==="preview"&&g.jsx("div",{className:"pm-preview-tab",children:g.jsx(EE,{url:v})})]})]})})}const TE=[{category:"web",c1:"#6366f1",c2:"#8b5cf6",mock:"default",cat:"WordPress Development",title:"TechCorp India — Business Website",desc:"Custom WordPress website with advanced SEO, contact forms, and a fully responsive layout optimised for mobile users.",fullDesc:"TechCorp India needed a professional online presence that could generate leads and rank on Google. We built a fully custom WordPress theme from scratch — no page builders — with structured data, Core Web Vitals optimisation, and a CMS the client can manage themselves. Organic traffic grew 3x within 4 months.",year:"2024",client:"TechCorp India",role:"WordPress + SEO",tags:["WordPress","Custom Theme","SEO","Responsive Design"],techStack:["WordPress","PHP","MySQL","GSAP","Yoast SEO"],liveUrl:"https://example.com",results:[{value:"3x",label:"Organic traffic"},{value:"#1",label:"Google ranking"},{value:"1.8s",label:"Load time"}]},{category:"web",c1:"#f59e0b",c2:"#ef4444",mock:"brand",letter:"S",cat:"Shopify E-Commerce",title:"StyleHub — Fashion Store",desc:"Full Shopify store setup with custom theme, product catalogue, payment gateway integration, and mobile-first design.",fullDesc:"StyleHub wanted to move their offline fashion business online. We designed and built a custom Shopify storefront with a clean, mobile-first UI, Razorpay payment integration, automated order notifications, and a product catalogue of 200+ SKUs. Sales crossed Rs 5L in the first month.",year:"2024",client:"StyleHub Fashion",role:"Shopify Design + Setup",tags:["Shopify","E-Commerce","Custom Theme","Payment Integration"],techStack:["Shopify","Liquid","JavaScript","Razorpay"],liveUrl:"",results:[{value:"Rs 5L+",label:"First month sales"},{value:"200+",label:"Products listed"},{value:"4.8★",label:"Customer rating"}]},{category:"web",c1:"#10b981",c2:"#06b6d4",mock:"wide",wide:!0,cat:"Laravel Web Application",title:"Verdant ERP — Business Management System",desc:"Custom Laravel ERP with inventory management, invoicing, staff roles, and a real-time dashboard for a Mohali-based manufacturer.",fullDesc:"A Mohali-based manufacturing company needed to replace their spreadsheet-based workflow with a proper system. We built a full Laravel ERP covering inventory, purchase orders, invoicing, staff management, and a live analytics dashboard. The system reduced manual work by 70% and is now used by 15 staff daily.",year:"2023",client:"Verdant Manufacturing",role:"Full-Stack Laravel",tags:["Laravel","ERP","Dashboard","REST API"],techStack:["Laravel","PHP","MySQL","Vue.js","Chart.js"],liveUrl:"https://wikipedia.org",results:[{value:"70%",label:"Less manual work"},{value:"15",label:"Daily active users"},{value:"3 mo",label:"Delivery time"}]},{category:"mobile",c1:"#ec4899",c2:"#8b5cf6",mock:"mobile",cat:"Mobile Responsive Design",title:"Bloom Clinic — Healthcare Website",desc:"Fully responsive healthcare website with appointment booking, doctor profiles, and Google Maps integration.",fullDesc:"Bloom Clinic needed a website that worked flawlessly on mobile — over 80% of their patients browse on phones. We redesigned their entire site with a mobile-first approach, added an online appointment booking system, integrated Google Maps, and optimised for local SEO. Appointment bookings increased by 60% in 2 months.",year:"2023",client:"Bloom Clinic, Mohali",role:"Responsive Design + SEO",tags:["Responsive Design","WordPress","Local SEO","Booking System"],techStack:["WordPress","PHP","Google Maps API","CSS Grid"],liveUrl:"",results:[{value:"60%",label:"More bookings"},{value:"80%+",label:"Mobile traffic"},{value:"Top 3",label:"Local search rank"}]},{category:"web",c1:"#f97316",c2:"#facc15",mock:"brand",letter:"R",cat:"React Frontend",title:"RealEstate Pro — Property Listing Portal",desc:"React-powered property listing portal with advanced filters, map view, and a Laravel backend API.",fullDesc:"A real estate startup in Chandigarh needed a fast, modern property portal to compete with established players. We built a React frontend with dynamic filters, map-based search, saved listings, and a Laravel REST API backend. The portal launched with 500+ listings and saw 2,000 unique visitors in the first week.",year:"2024",client:"RealEstate Pro",role:"React + Laravel",tags:["React","Laravel API","Maps","Property Portal"],techStack:["React","Laravel","MySQL","Google Maps API","Tailwind CSS"],liveUrl:"",results:[{value:"500+",label:"Listings at launch"},{value:"2K",label:"Week-1 visitors"},{value:"0.9s",label:"Page load speed"}]}];function AE({mock:s,letter:e}){return s==="brand"?g.jsxs("div",{className:"work-mock work-mock-brand",children:[g.jsx("div",{className:"mock-logo-big",children:e}),g.jsxs("div",{className:"mock-brand-lines",children:[g.jsx("span",{}),g.jsx("span",{})]})]}):s==="wide"?g.jsxs("div",{className:"work-mock work-mock-wide",children:[g.jsx("div",{className:"mock-sidebar"}),g.jsxs("div",{className:"mock-main",children:[g.jsx("div",{className:"mock-chart"}),g.jsxs("div",{className:"mock-stats-row",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]})]})]}):s==="mobile"?g.jsx("div",{className:"work-mock work-mock-mobile",children:g.jsx("div",{className:"mock-phone",children:g.jsxs("div",{className:"mock-phone-screen",children:[g.jsx("div",{className:"mock-ph-header"}),g.jsxs("div",{className:"mock-ph-content",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]})]})})}):g.jsxs("div",{className:"work-mock",children:[g.jsx("div",{className:"mock-bar"}),g.jsxs("div",{className:"mock-lines",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]}),g.jsxs("div",{className:"mock-card-row",children:[g.jsx("span",{}),g.jsx("span",{})]})]})}function CE(){const[s,e]=it.useState("all"),[n,r]=it.useState(null),o=["all","web","mobile"],c=TE.filter(u=>s==="all"||u.category===s);return g.jsxs("section",{className:"work section",id:"work",children:[g.jsxs("div",{className:"container",children:[g.jsx("div",{className:"section-label reveal-up",children:"Portfolio"}),g.jsxs("h2",{className:"display-title reveal-up",children:["Selected ",g.jsx("span",{className:"text-accent",children:"Work."})]}),g.jsx("div",{className:"work-filter reveal-up",style:{marginTop:"2.5rem"},children:o.map(u=>g.jsx("button",{className:`filter-btn${s===u?" active":""}`,onClick:()=>e(u),children:u==="all"?"All Projects":u.charAt(0).toUpperCase()+u.slice(1)},u))}),g.jsx("div",{className:"work-grid",children:c.map(u=>{const{c1:f,c2:h,cat:m,title:x,desc:S,mock:y,letter:M,wide:T}=u;return g.jsxs("div",{className:`work-card revealed${T&&s==="all"?" work-card-wide":""}`,onClick:()=>r(u),style:{cursor:"pointer"},children:[g.jsxs("div",{className:"work-img",children:[g.jsx("div",{className:"work-placeholder",style:{"--c1":f,"--c2":h},children:g.jsx(AE,{mock:y,letter:M})}),g.jsx("div",{className:"work-overlay",children:g.jsxs("span",{className:"work-view",children:[g.jsx(Kd,{size:14})," View Project"]})})]}),g.jsxs("div",{className:"work-info",children:[g.jsx("span",{className:"work-cat",children:m}),g.jsx("h3",{children:x}),g.jsx("p",{className:"work-desc",children:S})]})]},x)})}),g.jsx("div",{className:"work-cta reveal-up",children:g.jsxs("a",{href:"#contact",className:"btn btn-ghost btn-lg magnetic",children:[g.jsx(Y0,{size:15})," See All 150+ Projects"]})})]}),n&&g.jsx(wE,{project:n,onClose:()=>r(null)})]})}const Jm=[{Icon:n_,num:"01",title:"Discovery",desc:"Deep-dive workshops to understand your brand, audience, competitors, and goals before a single pixel is drawn."},{Icon:q0,num:"02",title:"Design",desc:"High-fidelity Figma prototypes, iterating until every interaction, animation, and layout feels exactly right."},{Icon:W0,num:"03",title:"Build",desc:"Clean, tested, documented code — optimized for performance, accessibility, and long-term maintainability."},{Icon:t_,num:"04",title:"Launch & Grow",desc:"Zero-downtime deployment, post-launch monitoring, and ongoing support as your product scales."}];function RE(){return g.jsx("section",{className:"process section",children:g.jsxs("div",{className:"container",children:[g.jsx("div",{className:"section-label reveal-up",children:"How We Work"}),g.jsxs("h2",{className:"display-title reveal-up",children:["Our ",g.jsx("span",{className:"text-accent",children:"Process."})]}),g.jsx("div",{className:"process-steps",style:{marginTop:"5rem"},children:Jm.map(({Icon:s,num:e,title:n,desc:r},o)=>g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"process-step reveal-up","data-delay":o*.1,children:[g.jsx("div",{className:"step-num",children:e}),g.jsx("div",{className:"step-icon",children:g.jsx(s,{size:22})}),g.jsxs("div",{className:"step-content",children:[g.jsx("h3",{children:n}),g.jsx("p",{children:r})]})]},n),o<Jm.length-1&&g.jsx("div",{className:"process-connector"},`c${o}`)]}))})]})})}const bE=[{initials:"AK",c1:"#6366f1",c2:"#8b5cf6",name:"Alex Kim",role:"CEO & Creative Director",bio:"15 years shaping digital brands. Former Creative Lead at Pentagram. Speaker at SXSW and Awwwards Conference.",socials:[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Pl,href:"https://dribbble.com",label:"Dribbble"}],delay:"0.1"},{initials:"SR",c1:"#f59e0b",c2:"#ef4444",name:"Sofia Reyes",role:"Co-Founder & Design Lead",bio:"Award-winning UX designer with 12 years of experience. Previously at Apple Design Team and IDEO. Figma Community Ambassador.",socials:[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Pl,href:"https://dribbble.com",label:"Dribbble"}],delay:"0.2"},{initials:"MP",c1:"#10b981",c2:"#06b6d4",name:"Marcus Park",role:"Head of Engineering",bio:"Full-stack architect with deep expertise in React, Node.js, and cloud infrastructure. Ex-Google SWE. Open-source contributor with 8K+ GitHub stars.",socials:[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Zd,href:"https://github.com",label:"GitHub"},{Icon:Is,href:"https://twitter.com",label:"Twitter"}],delay:"0.3"},{initials:"LN",c1:"#ec4899",c2:"#8b5cf6",name:"Luna Nakamura",role:"Motion & 3D Director",bio:"Specialist in WebGL, Three.js, and cinematic motion design. Her work has been featured in Motionographer and Stash Magazine.",socials:[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Qd,href:"https://instagram.com",label:"Instagram"}],delay:"0.4"}];function PE(){return g.jsx("section",{className:"team section",id:"team",children:g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"section-header",children:[g.jsx("div",{className:"section-tag reveal-up",children:"The People"}),g.jsxs("h2",{className:"section-title reveal-up",children:["Meet the ",g.jsx("span",{className:"text-gradient",children:"Team"})]}),g.jsx("p",{className:"section-subtitle reveal-up",children:"60 talented humans across New York, London, and Singapore."})]}),g.jsx("div",{className:"team-grid",children:bE.map(({initials:s,c1:e,c2:n,name:r,role:o,bio:c,socials:u,delay:f})=>g.jsxs("div",{className:"team-card reveal-up","data-delay":f,children:[g.jsx("div",{className:"team-avatar",style:{"--c1":e,"--c2":n},children:s}),g.jsxs("div",{className:"team-info",children:[g.jsx("h3",{children:r}),g.jsx("span",{className:"team-role",children:o}),g.jsx("p",{className:"team-bio",children:c}),g.jsx("div",{className:"team-socials",children:u.map(({Icon:h,href:m,label:x})=>g.jsx("a",{href:m,target:"_blank",rel:"noopener","aria-label":x,children:g.jsx(h,{size:14})},x))})]})]},r))})]})})}const ka=[{quote:'"NexaStudio completely transformed our digital presence. Within 3 months of launch, our conversion rate increased by 340% and organic traffic doubled. The attention to detail and creative vision they brought was beyond anything we expected."',name:"James Mitchell",title:"CEO, Luminary Finance — New York",initials:"JM",c1:"#6366f1",c2:"#8b5cf6"},{quote:`"Working with NexaStudio on our rebrand was a game-changer. They delivered a stunning brand identity that perfectly captures our company's spirit. The new brand helped us close a $50M Series B round — investors loved the professionalism."`,name:"Emma Laurent",title:"Founder & CEO, Solaris Energy — Paris",initials:"EL",c1:"#10b981",c2:"#06b6d4"},{quote:`"The team's technical expertise combined with their design sensibility is genuinely rare. Our Bloom app launched to 500K downloads in the first month, was featured by Apple, and has a 4.9-star rating. NexaStudio delivered beyond every KPI."`,name:"Ryan Chen",title:"CTO, Bloom Health — San Francisco",initials:"RC",c1:"#f59e0b",c2:"#ef4444"},{quote:`"We've worked with many agencies over 20 years. NexaStudio is in a different league. They think like business partners, not just service providers. The Verdant platform they built won a Webby Award and is now used by 200+ enterprise clients."`,name:"Diana Walsh",title:"VP Product, Verdant Technologies — London",initials:"DW",c1:"#ec4899",c2:"#8b5cf6"}];function LE(){const[s,e]=it.useState(0),n=it.useRef(null),r=c=>{e((c+ka.length)%ka.length),o()},o=()=>{clearInterval(n.current),n.current=setInterval(()=>e(c=>(c+1)%ka.length),5e3)};return it.useEffect(()=>(o(),()=>clearInterval(n.current)),[]),g.jsx("section",{className:"testimonials section",children:g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"section-header",children:[g.jsx("div",{className:"section-tag reveal-up",children:"Client Love"}),g.jsxs("h2",{className:"section-title reveal-up",children:["What clients ",g.jsx("span",{className:"text-gradient",children:"say"})]})]}),g.jsxs("div",{className:"testimonials-slider",onMouseEnter:()=>clearInterval(n.current),onMouseLeave:o,children:[g.jsx("div",{className:"testimonial-track",style:{transform:`translateX(-${s*100}%)`},children:ka.map(({quote:c,name:u,title:f,initials:h,c1:m,c2:x})=>g.jsxs("div",{className:"testimonial-card",children:[g.jsx(e_,{size:36,className:"quote-icon"}),g.jsx("div",{className:"testimonial-stars",children:[...Array(5)].map((S,y)=>g.jsx(r_,{size:16,fill:"#f59e0b",stroke:"#f59e0b"},y))}),g.jsx("p",{children:c}),g.jsxs("div",{className:"testimonial-author",children:[g.jsx("div",{className:"author-avatar",style:{"--c1":m,"--c2":x},children:h}),g.jsxs("div",{children:[g.jsx("strong",{children:u}),g.jsx("span",{children:f})]})]})]},u))}),g.jsxs("div",{className:"slider-controls",children:[g.jsx("button",{className:"slider-btn",onClick:()=>r(s-1),"aria-label":"Previous slide",children:g.jsx(ig,{size:18})}),g.jsx("div",{className:"slider-dots",children:ka.map((c,u)=>g.jsx("button",{className:`slider-dot${u===s?" active":""}`,onClick:()=>r(u),"aria-label":`Slide ${u+1}`},u))}),g.jsx("button",{className:"slider-btn",onClick:()=>r(s+1),"aria-label":"Next slide",children:g.jsx($d,{size:18})})]})]})]})})}function NE(){const s=it.useRef(null);return it.useEffect(()=>{const e=s.current;if(!e)return;const n=new ff({canvas:e,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(0,0);const r=new hf,o=new _n(60,1,.1,200);o.position.set(0,0,20);const c=()=>{const _=e.parentElement.offsetWidth,L=e.parentElement.offsetHeight;n.setSize(_,L),o.aspect=_/L,o.updateProjectionMatrix()};c(),window.addEventListener("resize",c),r.add(new gf(16777215,.8));const u=new Ol(526344,3,80);u.position.set(0,0,10),r.add(u);const f=1200,h=new Float32Array(f*3),m=new Float32Array(f*3),x=[new ot(526344),new ot(1710618),new ot(3355443)];for(let _=0;_<f;_++){const L=5+Math.random()*18,P=Math.random()*Math.PI*2,N=Math.acos(2*Math.random()-1);h[_*3]=L*Math.sin(N)*Math.cos(P),h[_*3+1]=L*Math.sin(N)*Math.sin(P),h[_*3+2]=L*Math.cos(N);const G=x[_%3];m[_*3]=G.r,m[_*3+1]=G.g,m[_*3+2]=G.b}const S=new Kn;S.setAttribute("position",new Pn(h,3)),S.setAttribute("color",new Pn(m,3));const y=new Vg(S,new pf({size:.2,vertexColors:!0,transparent:!0,opacity:.6}));r.add(y);const M=new zn(new jr(2.5,1),new kl({color:526344,wireframe:!0,transparent:!0,opacity:.2}));r.add(M);const T=new vf;let A;const v=()=>{A=requestAnimationFrame(v);const _=T.getElapsedTime();y.rotation.y=_*.06,y.rotation.x=_*.02,M.rotation.y=_*.15,M.rotation.x=_*.1,n.render(r,o)};return v(),()=>{cancelAnimationFrame(A),window.removeEventListener("resize",c),n.dispose()}},[]),g.jsxs("section",{className:"cta-banner",children:[g.jsx("canvas",{ref:s,className:"section-three-canvas"}),g.jsx("div",{className:"cta-orb cta-orb-1"}),g.jsx("div",{className:"cta-orb cta-orb-2"}),g.jsx("div",{className:"container",children:g.jsxs("div",{className:"cta-content reveal-up",children:[g.jsxs("h2",{children:["Ready to build something",g.jsx("br",{}),"extraordinary?"]}),g.jsx("p",{children:"Let's turn your vision into a digital reality that stands out."}),g.jsxs("a",{href:"#contact",className:"btn btn-dark btn-lg magnetic",children:["Start a Project ",g.jsx(zl,{size:16})]})]})})]})}const eg=[{id:"desktop",Icon:ag,label:"Desktop",width:"100%",height:"600px"},{id:"tablet",Icon:cg,label:"Tablet",width:"768px",height:"600px"},{id:"mobile",Icon:lg,label:"Mobile",width:"390px",height:"600px"}],DE=[{id:1,label:"Tab 1",url:""},{id:2,label:"Tab 2",url:""}];let IE=3;function UE(s){const e=s.trim();return e?/^https?:\/\//i.test(e)?e:"https://"+e:""}function FE(){const[s,e]=it.useState(DE),[n,r]=it.useState(1),[o,c]=it.useState("desktop"),[u,f]=it.useState({1:"",2:""}),[h,m]=it.useState({1:"",2:""}),[x,S]=it.useState({}),[y,M]=it.useState(null),T=it.useRef({}),A=s.find(k=>k.id===n),v=eg.find(k=>k.id===o),_=()=>{const k=IE++;e(te=>[...te,{id:k,label:`Tab ${k}`,url:""}]),f(te=>({...te,[k]:""})),m(te=>({...te,[k]:""})),r(k)},L=(k,te)=>{te.stopPropagation();const E=s.filter(R=>R.id!==k);E.length&&(e(E),n===k&&r(E[E.length-1].id),f(R=>{const $={...R};return delete $[k],$}),m(R=>{const $={...R};return delete $[k],$}))},P=(k,te)=>{e(E=>E.map(R=>R.id===k?{...R,label:te}:R))},N=k=>{const te=UE(u[k]||"");te&&(m(E=>({...E,[k]:te})),S(E=>({...E,[k]:!0})))},G=(k,te)=>{k.key==="Enter"&&N(te)},O=k=>{const te=h[k];te&&(m(E=>({...E,[k]:""})),S(E=>({...E,[k]:!0})),setTimeout(()=>m(E=>({...E,[k]:te})),50))},U=k=>{S(te=>({...te,[k]:!1}))};return g.jsx("section",{className:"tab-preview-section",children:g.jsxs("div",{className:"tab-preview-wrapper",children:[g.jsxs("div",{className:"tp-header",children:[g.jsxs("div",{className:"tp-title-block",children:[g.jsx(Ml,{size:18,className:"tp-title-icon"}),g.jsx("span",{className:"tp-title",children:"Live Preview"})]}),g.jsx("div",{className:"tp-device-switcher",children:eg.map(({id:k,Icon:te,label:E})=>g.jsxs("button",{className:`tp-device-btn${o===k?" active":""}`,onClick:()=>c(k),title:E,children:[g.jsx(te,{size:16}),g.jsx("span",{children:E})]},k))})]}),g.jsxs("div",{className:"tp-tabbar",children:[g.jsx("div",{className:"tp-tabs",children:s.map(k=>g.jsxs("div",{className:`tp-tab${n===k.id?" active":""}`,onClick:()=>r(k.id),children:[y===k.id?g.jsx("input",{className:"tp-tab-label-input",value:k.label,autoFocus:!0,onChange:te=>P(k.id,te.target.value),onBlur:()=>M(null),onKeyDown:te=>te.key==="Enter"&&M(null),onClick:te=>te.stopPropagation()}):g.jsx("span",{className:"tp-tab-label",onDoubleClick:te=>{te.stopPropagation(),M(k.id)},title:"Double-click to rename",children:k.label}),s.length>1&&g.jsx("button",{className:"tp-tab-close",onClick:te=>L(k.id,te),"aria-label":"Close tab",children:g.jsx(Jd,{size:12})})]},k.id))}),g.jsx("button",{className:"tp-add-tab",onClick:_,title:"New tab",children:g.jsx(J0,{size:16})})]}),A&&g.jsxs("div",{className:"tp-urlbar",children:[g.jsx("div",{className:"tp-url-indicator",children:h[A.id]?g.jsx("span",{className:"tp-secure-dot",title:"Loaded"}):g.jsx(Ml,{size:13,className:"tp-url-globe"})}),g.jsx("input",{className:"tp-url-input",type:"text",placeholder:"Enter URL (e.g. example.com)",value:u[A.id]||"",onChange:k=>f(te=>({...te,[A.id]:k.target.value})),onKeyDown:k=>G(k,A.id),spellCheck:!1}),g.jsxs("div",{className:"tp-url-actions",children:[g.jsx("button",{className:"tp-url-btn",onClick:()=>O(A.id),disabled:!h[A.id],title:"Refresh",children:g.jsx(og,{size:14,className:x[A.id]?"tp-spin":""})}),h[A.id]&&g.jsx("a",{className:"tp-url-btn",href:h[A.id],target:"_blank",rel:"noopener noreferrer",title:"Open in new tab",children:g.jsx(Kd,{size:14})}),g.jsx("button",{className:"tp-url-go",onClick:()=>N(A.id),children:"Go"})]})]}),g.jsx("div",{className:"tp-preview-area",children:A&&g.jsxs("div",{className:`tp-device-frame tp-device-${o}`,style:{width:v.width,height:v.height},children:[o!=="desktop"&&g.jsx("div",{className:"tp-device-chrome",children:g.jsxs("div",{className:"tp-chrome-bar",children:[g.jsx("div",{className:"tp-chrome-dot"}),g.jsx("div",{className:"tp-chrome-dot"}),g.jsx("div",{className:"tp-chrome-dot"})]})}),g.jsxs("div",{className:"tp-iframe-wrap",children:[x[A.id]&&g.jsxs("div",{className:"tp-loading",children:[g.jsx("div",{className:"tp-spinner"}),g.jsx("span",{children:"Loading preview…"})]}),h[A.id]?g.jsx("iframe",{ref:k=>T.current[A.id]=k,src:h[A.id],title:A.label,className:"tp-iframe",onLoad:()=>U(A.id),onError:()=>U(A.id),sandbox:"allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox",loading:"lazy"},h[A.id]):g.jsxs("div",{className:"tp-empty",children:[g.jsx(Ml,{size:40,className:"tp-empty-icon"}),g.jsxs("p",{children:["Enter a URL above and press ",g.jsx("kbd",{children:"Enter"})," or click ",g.jsx("strong",{children:"Go"})]}),g.jsx("button",{className:"btn btn-primary",onClick:()=>N(A.id),children:"Load Preview"})]})]})]})}),g.jsx("div",{className:"tp-footer-note",children:g.jsxs("span",{children:["⚠ Some sites block embedding via ",g.jsx("code",{children:"X-Frame-Options"}),". Try sites like ",g.jsx("strong",{children:"example.com"}),", ",g.jsx("strong",{children:"wikipedia.org"}),", or your own projects."]})})]})})}const kE=[{Icon:rg,label:"Email",content:g.jsx("a",{href:"mailto:hello@yourstudio.com",children:"hello@yourstudio.com"})},{Icon:Z0,label:"Phone",content:g.jsx("a",{href:"tel:+919876543210",children:"+91 98765 43210"})},{Icon:sg,label:"Office",content:g.jsxs("span",{children:["Phase 8B, Industrial Area",g.jsx("br",{}),"Mohali, Punjab 160071"]})},{Icon:j0,label:"Working Hours",content:g.jsx("span",{children:"Mon – Sat, 9:00 AM – 6:00 PM IST"})}],OE=[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Qd,href:"https://instagram.com",label:"Instagram"},{Icon:Pl,href:"https://dribbble.com",label:"Dribbble"},{Icon:Zd,href:"https://github.com",label:"GitHub"}];function zE(){const[s,e]=it.useState(!1),[n,r]=it.useState({name:"",email:"",company:"",budget:"",service:"",message:""}),o=c=>{c.preventDefault(),!(!n.name.trim()||!n.email.trim()||!n.message.trim())&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)&&e(!0)};return g.jsx("section",{className:"contact section",id:"contact",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"contact-grid",children:[g.jsxs("div",{className:"contact-info",children:[g.jsx("div",{className:"section-tag reveal-up",children:"Get In Touch"}),g.jsxs("h2",{className:"section-title reveal-up",children:["Let's create something ",g.jsx("span",{className:"text-gradient",children:"great"})]}),g.jsx("p",{className:"about-text reveal-up",children:"Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours."}),g.jsx("div",{className:"contact-details reveal-up",children:kE.map(({Icon:c,label:u,content:f})=>g.jsxs("div",{className:"contact-item",children:[g.jsx("div",{className:"contact-icon-wrap",children:g.jsx(c,{size:18})}),g.jsxs("div",{children:[g.jsx("strong",{children:u}),f]})]},u))}),g.jsx("div",{className:"social-links reveal-up",children:OE.map(({Icon:c,href:u,label:f})=>g.jsx("a",{href:u,target:"_blank",rel:"noopener",className:"social-link magnetic","aria-label":f,children:g.jsx(c,{size:18})},f))})]}),g.jsx("div",{className:"contact-form-wrap reveal-right",children:s?g.jsxs("div",{className:"form-success",children:[g.jsx("div",{className:"success-icon",children:g.jsx(G0,{size:56,stroke:"#22c55e"})}),g.jsx("h3",{children:"Message Sent!"}),g.jsx("p",{children:"Thanks for reaching out. We'll get back to you within 24 hours."})]}):g.jsxs("form",{className:"contact-form",onSubmit:o,children:[g.jsxs("div",{className:"form-row",children:[g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"name",children:[g.jsx(s_,{size:14})," Your Name"]}),g.jsx("input",{type:"text",id:"name",placeholder:"John Doe",required:!0,value:n.name,onChange:c=>r(u=>({...u,name:c.target.value}))})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"email",children:[g.jsx(rg,{size:14})," Email Address"]}),g.jsx("input",{type:"email",id:"email",placeholder:"john@company.com",required:!0,value:n.email,onChange:c=>r(u=>({...u,email:c.target.value}))})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"company",children:[g.jsx(V0,{size:14})," Company Name"]}),g.jsx("input",{type:"text",id:"company",placeholder:"Acme Inc.",value:n.company,onChange:c=>r(u=>({...u,company:c.target.value}))})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"budget",children:[g.jsx(X0,{size:14})," Project Budget"]}),g.jsxs("select",{id:"budget",value:n.budget,onChange:c=>r(u=>({...u,budget:c.target.value})),children:[g.jsx("option",{value:"",children:"Select your budget range"}),g.jsx("option",{children:"$5,000 – $15,000"}),g.jsx("option",{children:"$15,000 – $50,000"}),g.jsx("option",{children:"$50,000 – $150,000"}),g.jsx("option",{children:"$150,000+"})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"service",children:[g.jsx($0,{size:14})," Service Interested In"]}),g.jsxs("select",{id:"service",value:n.service,onChange:c=>r(u=>({...u,service:c.target.value})),children:[g.jsx("option",{value:"",children:"Select a service"}),g.jsx("option",{children:"Brand Identity"}),g.jsx("option",{children:"Web Design & Development"}),g.jsx("option",{children:"Mobile App"}),g.jsx("option",{children:"Motion & 3D"}),g.jsx("option",{children:"Digital Strategy"}),g.jsx("option",{children:"E-Commerce"}),g.jsx("option",{children:"Full-Service Partnership"})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"message",children:[g.jsx(K0,{size:14})," Tell Us About Your Project"]}),g.jsx("textarea",{id:"message",rows:"5",placeholder:"Describe your project, goals, timeline...",required:!0,value:n.message,onChange:c=>r(u=>({...u,message:c.target.value}))})]}),g.jsxs("button",{type:"submit",className:"btn btn-primary btn-full magnetic",children:[g.jsx(i_,{size:16})," Send Message"]})]})})]})})})}const BE=[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Qd,href:"https://instagram.com",label:"Instagram"},{Icon:Pl,href:"https://dribbble.com",label:"Dribbble"},{Icon:Zd,href:"https://github.com",label:"GitHub"}],HE=[{label:"About Us",href:"#about"},{label:"Our Team",href:"#team"},{label:"Portfolio",href:"#work"},{label:"Contact",href:"#contact"},{label:"Careers",href:"#",badge:"3 Open"}],VE=["Brand Identity","Web Design & Dev","Mobile Apps","Motion & 3D","E-Commerce"],GE=[{city:"Mohali",addr:"Phase 8B, Industrial Area, Punjab 160071"}];function jE(){return g.jsx("footer",{className:"footer",children:g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"footer-top",children:[g.jsxs("div",{className:"footer-brand",children:[g.jsxs("div",{className:"nav-logo",children:["NEXA",g.jsx("span",{children:"STUDIO"})]}),g.jsx("p",{children:"Crafting digital experiences that inspire, connect, and convert — since 2019."}),g.jsx("div",{className:"footer-socials",children:BE.map(({Icon:s,href:e,label:n})=>g.jsx("a",{href:e,target:"_blank",rel:"noopener","aria-label":n,children:g.jsx(s,{size:15})},n))})]}),g.jsxs("div",{className:"footer-links",children:[g.jsxs("div",{className:"footer-col",children:[g.jsx("h4",{children:"Company"}),g.jsx("ul",{children:HE.map(({label:s,href:e,badge:n})=>g.jsx("li",{children:g.jsxs("a",{href:e,children:[g.jsx(Kp,{size:12}),s,n&&g.jsx("span",{className:"footer-badge",children:n})]})},s))})]}),g.jsxs("div",{className:"footer-col",children:[g.jsx("h4",{children:"Services"}),g.jsx("ul",{children:VE.map(s=>g.jsx("li",{children:g.jsxs("a",{href:"#services",children:[g.jsx(Kp,{size:12}),s]})},s))})]}),g.jsxs("div",{className:"footer-col",children:[g.jsx("h4",{children:"Offices"}),g.jsx("ul",{className:"footer-offices",children:GE.map(({city:s,addr:e})=>g.jsxs("li",{children:[g.jsx(sg,{size:14}),g.jsxs("div",{children:[g.jsx("strong",{children:s}),g.jsx("span",{children:e})]})]},s))})]})]})]}),g.jsxs("div",{className:"footer-bottom",children:[g.jsx("p",{children:"© 2025 Your Studio. All rights reserved. Based in Mohali, Punjab."}),g.jsxs("div",{className:"footer-legal",children:[g.jsx("a",{href:"#",children:"Privacy Policy"}),g.jsx("a",{href:"#",children:"Terms of Service"}),g.jsx("a",{href:"#",children:"Cookie Settings"})]})]})]})})}function WE(){const[s,e]=it.useState(!1),n=()=>{e(!0),document.body.style.overflow="hidden"},r=()=>{e(!1),document.body.style.overflow=""};return it.useEffect(()=>()=>{document.body.style.overflow=""},[]),{menuOpen:s,openMenu:n,closeMenu:r}}function XE(){it.useEffect(()=>{const s=document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");if(!s.length)return;const e=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){const o=r.target,c=parseFloat(o.dataset.delay||0);o.style.transitionDelay=c+"s",o.classList.add("revealed"),e.unobserve(o)}})},{threshold:.2});return s.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}const qE=s=>1-(1-s)*(1-s);function YE(){it.useEffect(()=>{const s=document.querySelectorAll(".stat-num[data-count]");if(!s.length)return;const e=new IntersectionObserver(n=>{n.forEach(r=>{if(!r.isIntersecting)return;const o=r.target,c=parseInt(o.dataset.count,10),u=2e3,f=performance.now(),h=m=>{const x=Math.min((m-f)/u,1);o.textContent=Math.round(qE(x)*c),x<1&&requestAnimationFrame(h)};requestAnimationFrame(h),e.unobserve(o)})},{threshold:.5});return s.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}function $E(){it.useEffect(()=>{(()=>{document.querySelectorAll(".magnetic").forEach(e=>{const n=o=>{const c=e.getBoundingClientRect(),u=(o.clientX-c.left-c.width/2)*.3,f=(o.clientY-c.top-c.height/2)*.3;e.style.transform=`translate(${u}px, ${f}px)`},r=()=>{e.style.transform=""};e.addEventListener("mousemove",n),e.addEventListener("mouseleave",r)})})()},[])}function KE(){it.useEffect(()=>{const s=document.getElementById("nav"),e=document.querySelectorAll(".nav-link");if(!s)return;const n=()=>s.classList.toggle("scrolled",window.scrollY>50);window.addEventListener("scroll",n,{passive:!0}),n();const r=document.querySelectorAll("section[id]"),o=new IntersectionObserver(c=>{c.forEach(u=>{if(u.isIntersecting){const f=u.target.getAttribute("id");e.forEach(h=>h.classList.toggle("active",h.getAttribute("href")===`#${f}`))}})},{rootMargin:"-40% 0px -55% 0px"});return r.forEach(c=>o.observe(c)),()=>{window.removeEventListener("scroll",n),o.disconnect()}},[])}function ZE(){it.useEffect(()=>{const s=document.querySelector(".hero-container");if(!s)return;const e=()=>{const n=window.scrollY;n>window.innerHeight||(s.style.transform=`translateY(${n*.25}px)`,s.style.opacity=`${1-n/(window.innerHeight*.8)}`)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[])}function QE(){const{menuOpen:s,openMenu:e,closeMenu:n}=WE();return XE(),YE(),$E(),KE(),ZE(),g.jsxs(g.Fragment,{children:[g.jsx(I0,{}),g.jsx(F0,{}),g.jsx(k0,{}),g.jsx(o_,{onMenuOpen:e}),g.jsx(c_,{open:s,onClose:n}),g.jsxs("main",{children:[g.jsx(mE,{}),g.jsx(vE,{}),g.jsx(yE,{}),g.jsx(ME,{}),g.jsx(CE,{}),g.jsx(RE,{}),g.jsx(PE,{}),g.jsx(LE,{}),g.jsx(NE,{}),g.jsx(FE,{}),g.jsx(zE,{})]}),g.jsx(jE,{})]})}D0.createRoot(document.getElementById("root")).render(g.jsx(A0.StrictMode,{children:g.jsx(QE,{})}));
