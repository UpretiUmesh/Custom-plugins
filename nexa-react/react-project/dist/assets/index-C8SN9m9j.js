(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yu={exports:{}},ba={},Su={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function _v(){if(Fp)return lt;Fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function v(F,se,Ue){this.props=F,this.context=se,this.refs=C,this.updater=Ue||S}v.prototype.isReactComponent={},v.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function g(){}g.prototype=v.prototype;function L(F,se,Ue){this.props=F,this.context=se,this.refs=C,this.updater=Ue||S}var b=L.prototype=new g;b.constructor=L,T(b,v.prototype),b.isPureReactComponent=!0;var N=Array.isArray,X=Object.prototype.hasOwnProperty,k={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function W(F,se,Ue){var Q,ue={},ye=null,Se=null;if(se!=null)for(Q in se.ref!==void 0&&(Se=se.ref),se.key!==void 0&&(ye=""+se.key),se)X.call(se,Q)&&!U.hasOwnProperty(Q)&&(ue[Q]=se[Q]);var be=arguments.length-2;if(be===1)ue.children=Ue;else if(1<be){for(var Pe=Array(be),tt=0;tt<be;tt++)Pe[tt]=arguments[tt+2];ue.children=Pe}if(F&&F.defaultProps)for(Q in be=F.defaultProps,be)ue[Q]===void 0&&(ue[Q]=be[Q]);return{$$typeof:s,type:F,key:ye,ref:Se,props:ue,_owner:k.current}}function he(F,se){return{$$typeof:s,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function M(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function P(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ue){return se[Ue]})}var ie=/\/+/g;function q(F,se){return typeof F=="object"&&F!==null&&F.key!=null?P(""+F.key):se.toString(36)}function re(F,se,Ue,Q,ue){var ye=typeof F;(ye==="undefined"||ye==="boolean")&&(F=null);var Se=!1;if(F===null)Se=!0;else switch(ye){case"string":case"number":Se=!0;break;case"object":switch(F.$$typeof){case s:case e:Se=!0}}if(Se)return Se=F,ue=ue(Se),F=Q===""?"."+q(Se,0):Q,N(ue)?(Ue="",F!=null&&(Ue=F.replace(ie,"$&/")+"/"),re(ue,se,Ue,"",function(tt){return tt})):ue!=null&&(M(ue)&&(ue=he(ue,Ue+(!ue.key||Se&&Se.key===ue.key?"":(""+ue.key).replace(ie,"$&/")+"/")+F)),se.push(ue)),1;if(Se=0,Q=Q===""?".":Q+":",N(F))for(var be=0;be<F.length;be++){ye=F[be];var Pe=Q+q(ye,be);Se+=re(ye,se,Ue,Pe,ue)}else if(Pe=x(F),typeof Pe=="function")for(F=Pe.call(F),be=0;!(ye=F.next()).done;)ye=ye.value,Pe=Q+q(ye,be++),Se+=re(ye,se,Ue,Pe,ue);else if(ye==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return Se}function le(F,se,Ue){if(F==null)return F;var Q=[],ue=0;return re(F,Q,"","",function(ye){return se.call(Ue,ye,ue++)}),Q}function ee(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(Ue){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ue)},function(Ue){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ue)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var ce={current:null},B={transition:null},de={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function oe(){throw Error("act(...) is not supported in production builds of React.")}return lt.Children={map:le,forEach:function(F,se,Ue){le(F,function(){se.apply(this,arguments)},Ue)},count:function(F){var se=0;return le(F,function(){se++}),se},toArray:function(F){return le(F,function(se){return se})||[]},only:function(F){if(!M(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},lt.Component=v,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=L,lt.StrictMode=r,lt.Suspense=p,lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,lt.act=oe,lt.cloneElement=function(F,se,Ue){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Q=T({},F.props),ue=F.key,ye=F.ref,Se=F._owner;if(se!=null){if(se.ref!==void 0&&(ye=se.ref,Se=k.current),se.key!==void 0&&(ue=""+se.key),F.type&&F.type.defaultProps)var be=F.type.defaultProps;for(Pe in se)X.call(se,Pe)&&!U.hasOwnProperty(Pe)&&(Q[Pe]=se[Pe]===void 0&&be!==void 0?be[Pe]:se[Pe])}var Pe=arguments.length-2;if(Pe===1)Q.children=Ue;else if(1<Pe){be=Array(Pe);for(var tt=0;tt<Pe;tt++)be[tt]=arguments[tt+2];Q.children=be}return{$$typeof:s,type:F.type,key:ue,ref:ye,props:Q,_owner:Se}},lt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},lt.createElement=W,lt.createFactory=function(F){var se=W.bind(null,F);return se.type=F,se},lt.createRef=function(){return{current:null}},lt.forwardRef=function(F){return{$$typeof:f,render:F}},lt.isValidElement=M,lt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:ee}},lt.memo=function(F,se){return{$$typeof:m,type:F,compare:se===void 0?null:se}},lt.startTransition=function(F){var se=B.transition;B.transition={};try{F()}finally{B.transition=se}},lt.unstable_act=oe,lt.useCallback=function(F,se){return ce.current.useCallback(F,se)},lt.useContext=function(F){return ce.current.useContext(F)},lt.useDebugValue=function(){},lt.useDeferredValue=function(F){return ce.current.useDeferredValue(F)},lt.useEffect=function(F,se){return ce.current.useEffect(F,se)},lt.useId=function(){return ce.current.useId()},lt.useImperativeHandle=function(F,se,Ue){return ce.current.useImperativeHandle(F,se,Ue)},lt.useInsertionEffect=function(F,se){return ce.current.useInsertionEffect(F,se)},lt.useLayoutEffect=function(F,se){return ce.current.useLayoutEffect(F,se)},lt.useMemo=function(F,se){return ce.current.useMemo(F,se)},lt.useReducer=function(F,se,Ue){return ce.current.useReducer(F,se,Ue)},lt.useRef=function(F){return ce.current.useRef(F)},lt.useState=function(F){return ce.current.useState(F)},lt.useSyncExternalStore=function(F,se,Ue){return ce.current.useSyncExternalStore(F,se,Ue)},lt.useTransition=function(){return ce.current.useTransition()},lt.version="18.3.1",lt}var kp;function Xd(){return kp||(kp=1,Su.exports=_v()),Su.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function xv(){if(Op)return ba;Op=1;var s=Xd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var _,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(y[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:f,key:x,ref:S,props:y,_owner:o.current}}return ba.Fragment=n,ba.jsx=u,ba.jsxs=u,ba}var zp;function yv(){return zp||(zp=1,yu.exports=xv()),yu.exports}var w=yv(),vt=Xd();const Sv=Km(vt);var el={},Mu={exports:{}},An={},Eu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Mv(){return Bp||(Bp=1,(function(s){function e(B,de){var oe=B.length;B.push(de);e:for(;0<oe;){var F=oe-1>>>1,se=B[F];if(0<o(se,de))B[F]=de,B[oe]=se,oe=F;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var de=B[0],oe=B.pop();if(oe!==de){B[0]=oe;e:for(var F=0,se=B.length,Ue=se>>>1;F<Ue;){var Q=2*(F+1)-1,ue=B[Q],ye=Q+1,Se=B[ye];if(0>o(ue,oe))ye<se&&0>o(Se,ue)?(B[F]=Se,B[ye]=oe,F=ye):(B[F]=ue,B[Q]=oe,F=Q);else if(ye<se&&0>o(Se,oe))B[F]=Se,B[ye]=oe,F=ye;else break e}}return de}function o(B,de){var oe=B.sortIndex-de.sortIndex;return oe!==0?oe:B.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],m=[],_=1,y=null,x=3,S=!1,T=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=B)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function N(B){if(C=!1,b(B),!T)if(n(p)!==null)T=!0,ee(X);else{var de=n(m);de!==null&&ce(N,de.startTime-B)}}function X(B,de){T=!1,C&&(C=!1,g(W),W=-1),S=!0;var oe=x;try{for(b(de),y=n(p);y!==null&&(!(y.expirationTime>de)||B&&!P());){var F=y.callback;if(typeof F=="function"){y.callback=null,x=y.priorityLevel;var se=F(y.expirationTime<=de);de=s.unstable_now(),typeof se=="function"?y.callback=se:y===n(p)&&r(p),b(de)}else r(p);y=n(p)}if(y!==null)var Ue=!0;else{var Q=n(m);Q!==null&&ce(N,Q.startTime-de),Ue=!1}return Ue}finally{y=null,x=oe,S=!1}}var k=!1,U=null,W=-1,he=5,M=-1;function P(){return!(s.unstable_now()-M<he)}function ie(){if(U!==null){var B=s.unstable_now();M=B;var de=!0;try{de=U(!0,B)}finally{de?q():(k=!1,U=null)}}else k=!1}var q;if(typeof L=="function")q=function(){L(ie)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,le=re.port2;re.port1.onmessage=ie,q=function(){le.postMessage(null)}}else q=function(){v(ie,0)};function ee(B){U=B,k||(k=!0,q())}function ce(B,de){W=v(function(){B(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ee(X))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var oe=x;x=de;try{return B()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,de){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=x;x=B;try{return de()}finally{x=oe}},s.unstable_scheduleCallback=function(B,de,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,B={id:_++,callback:de,priorityLevel:B,startTime:oe,expirationTime:se,sortIndex:-1},oe>F?(B.sortIndex=oe,e(m,B),n(p)===null&&B===n(m)&&(C?(g(W),W=-1):C=!0,ce(N,oe-F))):(B.sortIndex=se,e(p,B),T||S||(T=!0,ee(X))),B},s.unstable_shouldYield=P,s.unstable_wrapCallback=function(B){var de=x;return function(){var oe=x;x=de;try{return B.apply(this,arguments)}finally{x=oe}}}})(wu)),wu}var Hp;function Ev(){return Hp||(Hp=1,Eu.exports=Mv()),Eu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function wv(){if(Vp)return An;Vp=1;var s=Xd(),e=Ev();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return p.call(y,t)?!0:p.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function S(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||S(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,d,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,L);v[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,L);v[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,L);v[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,a,l){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,l)&&(a=null),l||d===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),k=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),P=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,F;function se(t){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Ue=!1;function Q(t,i){if(!t||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),h=l.stack.split(`
`),E=d.length-1,I=h.length-1;1<=E&&0<=I&&d[E]!==h[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==h[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==h[I]){var O=`
`+d[E].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=E&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?se(t):""}function ue(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case k:return"Portal";case he:return"Profiler";case W:return"StrictMode";case q:return"Suspense";case re:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tt(t){var i=Pe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function _t(t){t._valueTracker||(t._valueTracker=tt(t))}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Pe(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function z(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rn(t,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function ct(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function Ke(t,i){pt(t,i);var a=be(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(t,i.type,a):i.hasOwnProperty("defaultValue")&&Qe(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ct(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Qe(t,i,a){(i!=="number"||z(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var D=Array.isArray;function A(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Z(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pe(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(D(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:be(a)}}function _e(t,i){var a=be(i.value),l=be(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function fe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){nt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function Je(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function ze(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=Je(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var ft=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(t,i){if(i){if(ft[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function wt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V=null;function Le(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ae=null,me=null,Ce=null;function De(t){if(t=pa(t)){if(typeof ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=mo(i),ae(t.stateNode,t.type,i))}}function ht(t){me?Ce?Ce.push(t):Ce=[t]:me=t}function zt(){if(me){var t=me,i=Ce;if(Ce=me=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function sn(t,i){return t(i)}function gt(){}var Zt=!1;function Vn(t,i,a){if(Zt)return t(i,a);Zt=!0;try{return sn(t,i,a)}finally{Zt=!1,(me!==null||Ce!==null)&&(gt(),zt())}}function zi(t,i){var a=t.stateNode;if(a===null)return null;var l=mo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var qr=!1;if(f)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{qr=!1}function $s(t,i,a,l,d,h,E,I,O){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(ve){this.onError(ve)}}var Bi=!1,xr=null,_i=!1,Yr=null,$r={onError:function(t){Bi=!0,xr=t}};function $a(t,i,a,l,d,h,E,I,O){Bi=!1,xr=null,$s.apply($r,arguments)}function Ka(t,i,a,l,d,h,E,I,O){if($a.apply(this,arguments),Bi){if(Bi){var ne=xr;Bi=!1,xr=null}else throw Error(n(198));_i||(_i=!0,Yr=ne)}}function xi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Za(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qa(t){if(xi(t)!==t)throw Error(n(188))}function R(t){var i=t.alternate;if(!i){if(i=xi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return Qa(d),t;if(h===l)return Qa(d),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=h;else{for(var E=!1,I=d.child;I;){if(I===a){E=!0,a=d,l=h;break}if(I===l){E=!0,l=d,a=h;break}I=I.sibling}if(!E){for(I=h.child;I;){if(I===a){E=!0,a=h,l=d;break}if(I===l){E=!0,l=h,a=d;break}I=I.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function G(t){return t=R(t),t!==null?J(t):null}function J(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=J(t);if(i!==null)return i;t=t.sibling}return null}var te=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,we=e.unstable_shouldYield,Ne=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,$e=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,Et=e.unstable_LowPriority,Rt=e.unstable_IdlePriority,Pt=null,Ft=null;function yt(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Pt,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:In,Xt=Math.log,St=Math.LN2;function In(t){return t>>>=0,t===0?32:31-(Xt(t)/St|0)|0}var Zn=64,Qt=4194304;function yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var I=E&~d;I!==0?l=yi(I):(h&=E,h!==0&&(l=yi(h)))}else E=a&~d,E!==0?l=yi(E):h!==0&&(l=yi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Oe(i),d=1<<a,l|=t[a],i&=~d;return l}function ui(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ks(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Oe(h),I=1<<E,O=d[E];O===-1?((I&a)===0||(I&l)!==0)&&(d[E]=ui(I,i)):O<=i&&(t.expiredLanes|=I),h&=~I}}function ln(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kr(){var t=Zn;return Zn<<=1,(Zn&4194240)===0&&(Zn=64),t}function Zs(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Hi(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=a}function zg(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Oe(a),h=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~h}}function Gl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Oe(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var At=0;function pf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var mf,Wl,gf,vf,_f,jl=!1,Ja=[],Vi=null,Gi=null,Wi=null,Qs=new Map,Js=new Map,ji=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function ea(t,i,a,l,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[d]},i!==null&&(i=pa(i),i!==null&&Wl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Hg(t,i,a,l,d){switch(i){case"focusin":return Vi=ea(Vi,t,i,a,l,d),!0;case"dragenter":return Gi=ea(Gi,t,i,a,l,d),!0;case"mouseover":return Wi=ea(Wi,t,i,a,l,d),!0;case"pointerover":var h=d.pointerId;return Qs.set(h,ea(Qs.get(h)||null,t,i,a,l,d)),!0;case"gotpointercapture":return h=d.pointerId,Js.set(h,ea(Js.get(h)||null,t,i,a,l,d)),!0}return!1}function yf(t){var i=yr(t.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=Za(a),i!==null){t.blockedOn=i,_f(t.priority,function(){gf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);V=l,a.target.dispatchEvent(l),V=null}else return i=pa(a),i!==null&&Wl(i),t.blockedOn=a,!1;i.shift()}return!0}function Sf(t,i,a){eo(t)&&a.delete(i)}function Vg(){jl=!1,Vi!==null&&eo(Vi)&&(Vi=null),Gi!==null&&eo(Gi)&&(Gi=null),Wi!==null&&eo(Wi)&&(Wi=null),Qs.forEach(Sf),Js.forEach(Sf)}function ta(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vg)))}function na(t){function i(d){return ta(d,t)}if(0<Ja.length){ta(Ja[0],t);for(var a=1;a<Ja.length;a++){var l=Ja[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&ta(Vi,t),Gi!==null&&ta(Gi,t),Wi!==null&&ta(Wi,t),Qs.forEach(i),Js.forEach(i),a=0;a<ji.length;a++)l=ji[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(a=ji[0],a.blockedOn===null);)yf(a),a.blockedOn===null&&ji.shift()}var Zr=N.ReactCurrentBatchConfig,to=!0;function Gg(t,i,a,l){var d=At,h=Zr.transition;Zr.transition=null;try{At=1,Xl(t,i,a,l)}finally{At=d,Zr.transition=h}}function Wg(t,i,a,l){var d=At,h=Zr.transition;Zr.transition=null;try{At=4,Xl(t,i,a,l)}finally{At=d,Zr.transition=h}}function Xl(t,i,a,l){if(to){var d=ql(t,i,a,l);if(d===null)uc(t,i,l,no,a),xf(t,l);else if(Hg(d,t,i,a,l))l.stopPropagation();else if(xf(t,l),i&4&&-1<Bg.indexOf(t)){for(;d!==null;){var h=pa(d);if(h!==null&&mf(h),h=ql(t,i,a,l),h===null&&uc(t,i,l,no,a),h===d)break;d=h}d!==null&&l.stopPropagation()}else uc(t,i,l,null,a)}}var no=null;function ql(t,i,a,l){if(no=null,t=Le(l),t=yr(t),t!==null)if(i=xi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Za(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return no=t,null}function Mf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case $e:return 1;case Ze:return 4;case We:case Et:return 16;case Rt:return 536870912;default:return 16}default:return 16}}var Xi=null,Yl=null,io=null;function Ef(){if(io)return io;var t,i=Yl,a=i.length,l,d="value"in Xi?Xi.value:Xi.textContent,h=d.length;for(t=0;t<a&&i[t]===d[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===d[h-l];l++);return io=d.slice(t,1<l?1-l:void 0)}function ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function wf(){return!1}function Un(t){function i(a,l,d,h,E){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?so:wf,this.isPropagationStopped=wf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Un(Qr),ia=oe({},Qr,{view:0,detail:0}),jg=Un(ia),Kl,Zl,ra,ao=oe({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Kl=t.screenX-ra.screenX,Zl=t.screenY-ra.screenY):Zl=Kl=0,ra=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),Tf=Un(ao),Xg=oe({},ao,{dataTransfer:0}),qg=Un(Xg),Yg=oe({},ia,{relatedTarget:0}),Ql=Un(Yg),$g=oe({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=Un($g),Zg=oe({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qg=Un(Zg),Jg=oe({},Qr,{data:0}),Af=Un(Jg),e0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=n0[t])?!!i[t]:!1}function Jl(){return i0}var r0=oe({},ia,{key:function(t){if(t.key){var i=e0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s0=Un(r0),a0=oe({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=Un(a0),o0=oe({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),l0=Un(o0),c0=oe({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=Un(c0),d0=oe({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=Un(d0),h0=[9,13,27,32],ec=f&&"CompositionEvent"in window,sa=null;f&&"documentMode"in document&&(sa=document.documentMode);var p0=f&&"TextEvent"in window&&!sa,Rf=f&&(!ec||sa&&8<sa&&11>=sa),bf=" ",Pf=!1;function Lf(t,i){switch(t){case"keyup":return h0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function m0(t,i){switch(t){case"compositionend":return Nf(i);case"keypress":return i.which!==32?null:(Pf=!0,bf);case"textInput":return t=i.data,t===bf&&Pf?null:t;default:return null}}function g0(t,i){if(Jr)return t==="compositionend"||!ec&&Lf(t,i)?(t=Ef(),io=Yl=Xi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rf&&i.locale!=="ko"?null:i.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!v0[t.type]:i==="textarea"}function If(t,i,a,l){ht(l),i=fo(i,"onChange"),0<i.length&&(a=new $l("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var aa=null,oa=null;function _0(t){Qf(t,0)}function oo(t){var i=rs(t);if(dt(i))return t}function x0(t,i){if(t==="change")return i}var Uf=!1;if(f){var tc;if(f){var nc="oninput"in document;if(!nc){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),nc=typeof Ff.oninput=="function"}tc=nc}else tc=!1;Uf=tc&&(!document.documentMode||9<document.documentMode)}function kf(){aa&&(aa.detachEvent("onpropertychange",Of),oa=aa=null)}function Of(t){if(t.propertyName==="value"&&oo(oa)){var i=[];If(i,oa,t,Le(t)),Vn(_0,i)}}function y0(t,i,a){t==="focusin"?(kf(),aa=i,oa=a,aa.attachEvent("onpropertychange",Of)):t==="focusout"&&kf()}function S0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(oa)}function M0(t,i){if(t==="click")return oo(i)}function E0(t,i){if(t==="input"||t==="change")return oo(i)}function w0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:w0;function la(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!p.call(i,d)||!Qn(t[d],i[d]))return!1}return!0}function zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bf(t,i){var a=zf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zf(a)}}function Hf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Hf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Vf(){for(var t=window,i=z();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=z(t.document)}return i}function ic(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function T0(t){var i=Vf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Hf(a.ownerDocument.documentElement,a)){if(l!==null&&ic(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,h=Math.min(l.start,d);l=l.end===void 0?h:Math.min(l.end,d),!t.extend&&h>l&&(d=l,l=h,h=d),d=Bf(a,h);var E=Bf(a,l);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var A0=f&&"documentMode"in document&&11>=document.documentMode,es=null,rc=null,ca=null,sc=!1;function Gf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sc||es==null||es!==z(l)||(l=es,"selectionStart"in l&&ic(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ca&&la(ca,l)||(ca=l,l=fo(rc,"onSelect"),0<l.length&&(i=new $l("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=es)))}function lo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ts={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},ac={},Wf={};f&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function co(t){if(ac[t])return ac[t];if(!ts[t])return t;var i=ts[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Wf)return ac[t]=i[a];return t}var jf=co("animationend"),Xf=co("animationiteration"),qf=co("animationstart"),Yf=co("transitionend"),$f=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){$f.set(t,i),c(i,[t])}for(var oc=0;oc<Kf.length;oc++){var lc=Kf[oc],C0=lc.toLowerCase(),R0=lc[0].toUpperCase()+lc.slice(1);qi(C0,"on"+R0)}qi(jf,"onAnimationEnd"),qi(Xf,"onAnimationIteration"),qi(qf,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(Yf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function Zf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Ka(l,i,void 0,t),t.currentTarget=null}function Qf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var I=l[E],O=I.instance,ne=I.currentTarget;if(I=I.listener,O!==h&&d.isPropagationStopped())break e;Zf(d,I,ne),h=O}else for(E=0;E<l.length;E++){if(I=l[E],O=I.instance,ne=I.currentTarget,I=I.listener,O!==h&&d.isPropagationStopped())break e;Zf(d,I,ne),h=O}}}if(_i)throw t=Yr,_i=!1,Yr=null,t}function Dt(t,i){var a=i[gc];a===void 0&&(a=i[gc]=new Set);var l=t+"__bubble";a.has(l)||(Jf(i,t,2,!1),a.add(l))}function cc(t,i,a){var l=0;i&&(l|=4),Jf(a,t,l,i)}var uo="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[uo]){t[uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(b0.has(a)||cc(a,!1,t),cc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uo]||(i[uo]=!0,cc("selectionchange",!1,i))}}function Jf(t,i,a,l){switch(Mf(i)){case 1:var d=Gg;break;case 4:d=Wg;break;default:d=Xl}a=d.bind(null,i,a,t),d=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function uc(t,i,a,l,d){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;E=E.return}for(;I!==null;){if(E=yr(I),E===null)return;if(O=E.tag,O===5||O===6){l=h=E;continue e}I=I.parentNode}}l=l.return}Vn(function(){var ne=h,ve=Le(a),xe=[];e:{var ge=$f.get(t);if(ge!==void 0){var Ie=$l,He=t;switch(t){case"keypress":if(ro(a)===0)break e;case"keydown":case"keyup":Ie=s0;break;case"focusin":He="focus",Ie=Ql;break;case"focusout":He="blur",Ie=Ql;break;case"beforeblur":case"afterblur":Ie=Ql;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=l0;break;case jf:case Xf:case qf:Ie=Kg;break;case Yf:Ie=u0;break;case"scroll":Ie=jg;break;case"wheel":Ie=f0;break;case"copy":case"cut":case"paste":Ie=Qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Cf}var Ve=(i&4)!==0,Gt=!Ve&&t==="scroll",$=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var H=ne,K;H!==null;){K=H;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,$!==null&&(Ee=zi(H,$),Ee!=null&&Ve.push(fa(H,Ee,K)))),Gt)break;H=H.return}0<Ve.length&&(ge=new Ie(ge,He,null,a,ve),xe.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&a!==V&&(He=a.relatedTarget||a.fromElement)&&(yr(He)||He[Si]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(He=a.relatedTarget||a.toElement,Ie=ne,He=He?yr(He):null,He!==null&&(Gt=xi(He),He!==Gt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=ne),Ie!==He)){if(Ve=Tf,Ee="onMouseLeave",$="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=Cf,Ee="onPointerLeave",$="onPointerEnter",H="pointer"),Gt=Ie==null?ge:rs(Ie),K=He==null?ge:rs(He),ge=new Ve(Ee,H+"leave",Ie,a,ve),ge.target=Gt,ge.relatedTarget=K,Ee=null,yr(ve)===ne&&(Ve=new Ve($,H+"enter",He,a,ve),Ve.target=K,Ve.relatedTarget=Gt,Ee=Ve),Gt=Ee,Ie&&He)t:{for(Ve=Ie,$=He,H=0,K=Ve;K;K=ns(K))H++;for(K=0,Ee=$;Ee;Ee=ns(Ee))K++;for(;0<H-K;)Ve=ns(Ve),H--;for(;0<K-H;)$=ns($),K--;for(;H--;){if(Ve===$||$!==null&&Ve===$.alternate)break t;Ve=ns(Ve),$=ns($)}Ve=null}else Ve=null;Ie!==null&&eh(xe,ge,Ie,Ve,!1),He!==null&&Gt!==null&&eh(xe,Gt,He,Ve,!0)}}e:{if(ge=ne?rs(ne):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var je=x0;else if(Df(ge))if(Uf)je=E0;else{je=S0;var qe=y0}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=M0);if(je&&(je=je(t,ne))){If(xe,je,a,ve);break e}qe&&qe(t,ge,ne),t==="focusout"&&(qe=ge._wrapperState)&&qe.controlled&&ge.type==="number"&&Qe(ge,"number",ge.value)}switch(qe=ne?rs(ne):window,t){case"focusin":(Df(qe)||qe.contentEditable==="true")&&(es=qe,rc=ne,ca=null);break;case"focusout":ca=rc=es=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,Gf(xe,a,ve);break;case"selectionchange":if(A0)break;case"keydown":case"keyup":Gf(xe,a,ve)}var Ye;if(ec)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Jr?Lf(t,a)&&(it="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(Rf&&a.locale!=="ko"&&(Jr||it!=="onCompositionStart"?it==="onCompositionEnd"&&Jr&&(Ye=Ef()):(Xi=ve,Yl="value"in Xi?Xi.value:Xi.textContent,Jr=!0)),qe=fo(ne,it),0<qe.length&&(it=new Af(it,t,null,a,ve),xe.push({event:it,listeners:qe}),Ye?it.data=Ye:(Ye=Nf(a),Ye!==null&&(it.data=Ye)))),(Ye=p0?m0(t,a):g0(t,a))&&(ne=fo(ne,"onBeforeInput"),0<ne.length&&(ve=new Af("onBeforeInput","beforeinput",null,a,ve),xe.push({event:ve,listeners:ne}),ve.data=Ye))}Qf(xe,i)})}function fa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function fo(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=zi(t,a),h!=null&&l.unshift(fa(t,h,d)),h=zi(t,i),h!=null&&l.push(fa(t,h,d))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eh(t,i,a,l,d){for(var h=i._reactName,E=[];a!==null&&a!==l;){var I=a,O=I.alternate,ne=I.stateNode;if(O!==null&&O===l)break;I.tag===5&&ne!==null&&(I=ne,d?(O=zi(a,h),O!=null&&E.unshift(fa(a,O,I))):d||(O=zi(a,h),O!=null&&E.push(fa(a,O,I)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var P0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function th(t){return(typeof t=="string"?t:""+t).replace(P0,`
`).replace(L0,"")}function ho(t,i,a){if(i=th(i),th(t)!==i&&a)throw Error(n(425))}function po(){}var dc=null,fc=null;function hc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,N0=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(t){return nh.resolve(null).then(t).catch(I0)}:pc;function I0(t){setTimeout(function(){throw t})}function mc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),na(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);na(i)}function Yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ih(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),di="__reactFiber$"+is,ha="__reactProps$"+is,Si="__reactContainer$"+is,gc="__reactEvents$"+is,U0="__reactListeners$"+is,F0="__reactHandles$"+is;function yr(t){var i=t[di];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Si]||a[di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=ih(t);t!==null;){if(a=t[di])return a;t=ih(t)}return i}t=a,a=t.parentNode}return null}function pa(t){return t=t[di]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[ha]||null}var vc=[],ss=-1;function $i(t){return{current:t}}function It(t){0>ss||(t.current=vc[ss],vc[ss]=null,ss--)}function Nt(t,i){ss++,vc[ss]=t.current,t.current=i}var Ki={},cn=$i(Ki),Sn=$i(!1),Sr=Ki;function as(t,i){var a=t.type.contextTypes;if(!a)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Mn(t){return t=t.childContextTypes,t!=null}function go(){It(Sn),It(cn)}function rh(t,i,a){if(cn.current!==Ki)throw Error(n(168));Nt(cn,i),Nt(Sn,a)}function sh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,Se(t)||"Unknown",d));return oe({},a,l)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Sr=cn.current,Nt(cn,t),Nt(Sn,Sn.current),!0}function ah(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=sh(t,i,Sr),l.__reactInternalMemoizedMergedChildContext=t,It(Sn),It(cn),Nt(cn,t)):It(Sn),Nt(Sn,a)}var Mi=null,_o=!1,_c=!1;function oh(t){Mi===null?Mi=[t]:Mi.push(t)}function k0(t){_o=!0,oh(t)}function Zi(){if(!_c&&Mi!==null){_c=!0;var t=0,i=At;try{var a=Mi;for(At=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Mi=null,_o=!1}catch(d){throw Mi!==null&&(Mi=Mi.slice(t+1)),te($e,Zi),d}finally{At=i,_c=!1}}return null}var os=[],ls=0,xo=null,yo=0,Gn=[],Wn=0,Mr=null,Ei=1,wi="";function Er(t,i){os[ls++]=yo,os[ls++]=xo,xo=t,yo=i}function lh(t,i,a){Gn[Wn++]=Ei,Gn[Wn++]=wi,Gn[Wn++]=Mr,Mr=t;var l=Ei;t=wi;var d=32-Oe(l)-1;l&=~(1<<d),a+=1;var h=32-Oe(i)+d;if(30<h){var E=d-d%5;h=(l&(1<<E)-1).toString(32),l>>=E,d-=E,Ei=1<<32-Oe(i)+d|a<<d|l,wi=h+t}else Ei=1<<h|a<<d|l,wi=t}function xc(t){t.return!==null&&(Er(t,1),lh(t,1,0))}function yc(t){for(;t===xo;)xo=os[--ls],os[ls]=null,yo=os[--ls],os[ls]=null;for(;t===Mr;)Mr=Gn[--Wn],Gn[Wn]=null,wi=Gn[--Wn],Gn[Wn]=null,Ei=Gn[--Wn],Gn[Wn]=null}var Fn=null,kn=null,kt=!1,Jn=null;function ch(t,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function uh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,kn=Yi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Mr!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Fn=t,kn=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(kt){var i=kn;if(i){var a=i;if(!uh(t,i)){if(Sc(t))throw Error(n(418));i=Yi(a.nextSibling);var l=Fn;i&&uh(t,i)?ch(l,a):(t.flags=t.flags&-4097|2,kt=!1,Fn=t)}}else{if(Sc(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Fn=t}}}function dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function So(t){if(t!==Fn)return!1;if(!kt)return dh(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!hc(t.type,t.memoizedProps)),i&&(i=kn)){if(Sc(t))throw fh(),Error(n(418));for(;i;)ch(t,i),i=Yi(i.nextSibling)}if(dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){kn=Yi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=Fn?Yi(t.stateNode.nextSibling):null;return!0}function fh(){for(var t=kn;t;)t=Yi(t.nextSibling)}function cs(){kn=Fn=null,kt=!1}function Ec(t){Jn===null?Jn=[t]:Jn.push(t)}var O0=N.ReactCurrentBatchConfig;function ma(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var I=d.refs;E===null?delete I[h]:I[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function hh(t){var i=t._init;return i(t._payload)}function ph(t){function i($,H){if(t){var K=$.deletions;K===null?($.deletions=[H],$.flags|=16):K.push(H)}}function a($,H){if(!t)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function l($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function d($,H){return $=sr($,H),$.index=0,$.sibling=null,$}function h($,H,K){return $.index=K,t?(K=$.alternate,K!==null?(K=K.index,K<H?($.flags|=2,H):K):($.flags|=2,H)):($.flags|=1048576,H)}function E($){return t&&$.alternate===null&&($.flags|=2),$}function I($,H,K,Ee){return H===null||H.tag!==6?(H=pu(K,$.mode,Ee),H.return=$,H):(H=d(H,K),H.return=$,H)}function O($,H,K,Ee){var je=K.type;return je===U?ve($,H,K.props.children,Ee,K.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ee&&hh(je)===H.type)?(Ee=d(H,K.props),Ee.ref=ma($,H,K),Ee.return=$,Ee):(Ee=Xo(K.type,K.key,K.props,null,$.mode,Ee),Ee.ref=ma($,H,K),Ee.return=$,Ee)}function ne($,H,K,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=mu(K,$.mode,Ee),H.return=$,H):(H=d(H,K.children||[]),H.return=$,H)}function ve($,H,K,Ee,je){return H===null||H.tag!==7?(H=Lr(K,$.mode,Ee,je),H.return=$,H):(H=d(H,K),H.return=$,H)}function xe($,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=pu(""+H,$.mode,K),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case X:return K=Xo(H.type,H.key,H.props,null,$.mode,K),K.ref=ma($,null,H),K.return=$,K;case k:return H=mu(H,$.mode,K),H.return=$,H;case ee:var Ee=H._init;return xe($,Ee(H._payload),K)}if(D(H)||de(H))return H=Lr(H,$.mode,K,null),H.return=$,H;Mo($,H)}return null}function ge($,H,K,Ee){var je=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return je!==null?null:I($,H,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case X:return K.key===je?O($,H,K,Ee):null;case k:return K.key===je?ne($,H,K,Ee):null;case ee:return je=K._init,ge($,H,je(K._payload),Ee)}if(D(K)||de(K))return je!==null?null:ve($,H,K,Ee,null);Mo($,K)}return null}function Ie($,H,K,Ee,je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(K)||null,I(H,$,""+Ee,je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case X:return $=$.get(Ee.key===null?K:Ee.key)||null,O(H,$,Ee,je);case k:return $=$.get(Ee.key===null?K:Ee.key)||null,ne(H,$,Ee,je);case ee:var qe=Ee._init;return Ie($,H,K,qe(Ee._payload),je)}if(D(Ee)||de(Ee))return $=$.get(K)||null,ve(H,$,Ee,je,null);Mo(H,Ee)}return null}function He($,H,K,Ee){for(var je=null,qe=null,Ye=H,it=H=0,tn=null;Ye!==null&&it<K.length;it++){Ye.index>it?(tn=Ye,Ye=null):tn=Ye.sibling;var Mt=ge($,Ye,K[it],Ee);if(Mt===null){Ye===null&&(Ye=tn);break}t&&Ye&&Mt.alternate===null&&i($,Ye),H=h(Mt,H,it),qe===null?je=Mt:qe.sibling=Mt,qe=Mt,Ye=tn}if(it===K.length)return a($,Ye),kt&&Er($,it),je;if(Ye===null){for(;it<K.length;it++)Ye=xe($,K[it],Ee),Ye!==null&&(H=h(Ye,H,it),qe===null?je=Ye:qe.sibling=Ye,qe=Ye);return kt&&Er($,it),je}for(Ye=l($,Ye);it<K.length;it++)tn=Ie(Ye,$,it,K[it],Ee),tn!==null&&(t&&tn.alternate!==null&&Ye.delete(tn.key===null?it:tn.key),H=h(tn,H,it),qe===null?je=tn:qe.sibling=tn,qe=tn);return t&&Ye.forEach(function(ar){return i($,ar)}),kt&&Er($,it),je}function Ve($,H,K,Ee){var je=de(K);if(typeof je!="function")throw Error(n(150));if(K=je.call(K),K==null)throw Error(n(151));for(var qe=je=null,Ye=H,it=H=0,tn=null,Mt=K.next();Ye!==null&&!Mt.done;it++,Mt=K.next()){Ye.index>it?(tn=Ye,Ye=null):tn=Ye.sibling;var ar=ge($,Ye,Mt.value,Ee);if(ar===null){Ye===null&&(Ye=tn);break}t&&Ye&&ar.alternate===null&&i($,Ye),H=h(ar,H,it),qe===null?je=ar:qe.sibling=ar,qe=ar,Ye=tn}if(Mt.done)return a($,Ye),kt&&Er($,it),je;if(Ye===null){for(;!Mt.done;it++,Mt=K.next())Mt=xe($,Mt.value,Ee),Mt!==null&&(H=h(Mt,H,it),qe===null?je=Mt:qe.sibling=Mt,qe=Mt);return kt&&Er($,it),je}for(Ye=l($,Ye);!Mt.done;it++,Mt=K.next())Mt=Ie(Ye,$,it,Mt.value,Ee),Mt!==null&&(t&&Mt.alternate!==null&&Ye.delete(Mt.key===null?it:Mt.key),H=h(Mt,H,it),qe===null?je=Mt:qe.sibling=Mt,qe=Mt);return t&&Ye.forEach(function(vv){return i($,vv)}),kt&&Er($,it),je}function Gt($,H,K,Ee){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case X:e:{for(var je=K.key,qe=H;qe!==null;){if(qe.key===je){if(je=K.type,je===U){if(qe.tag===7){a($,qe.sibling),H=d(qe,K.props.children),H.return=$,$=H;break e}}else if(qe.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ee&&hh(je)===qe.type){a($,qe.sibling),H=d(qe,K.props),H.ref=ma($,qe,K),H.return=$,$=H;break e}a($,qe);break}else i($,qe);qe=qe.sibling}K.type===U?(H=Lr(K.props.children,$.mode,Ee,K.key),H.return=$,$=H):(Ee=Xo(K.type,K.key,K.props,null,$.mode,Ee),Ee.ref=ma($,H,K),Ee.return=$,$=Ee)}return E($);case k:e:{for(qe=K.key;H!==null;){if(H.key===qe)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a($,H.sibling),H=d(H,K.children||[]),H.return=$,$=H;break e}else{a($,H);break}else i($,H);H=H.sibling}H=mu(K,$.mode,Ee),H.return=$,$=H}return E($);case ee:return qe=K._init,Gt($,H,qe(K._payload),Ee)}if(D(K))return He($,H,K,Ee);if(de(K))return Ve($,H,K,Ee);Mo($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(a($,H.sibling),H=d(H,K),H.return=$,$=H):(a($,H),H=pu(K,$.mode,Ee),H.return=$,$=H),E($)):a($,H)}return Gt}var us=ph(!0),mh=ph(!1),Eo=$i(null),wo=null,ds=null,wc=null;function Tc(){wc=ds=wo=null}function Ac(t){var i=Eo.current;It(Eo),t._currentValue=i}function Cc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function fs(t,i){wo=t,wc=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(En=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(wc!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(wo===null)throw Error(n(308));ds=t,wo.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var wr=null;function Rc(t){wr===null?wr=[t]:wr.push(t)}function gh(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Rc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ti(t,l)}function Ti(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ti(t,a)}return d=l.interleaved,d===null?(i.next=i,Rc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ti(t,a)}function To(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Gl(t,a)}}function _h(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ao(t,i,a,l){var d=t.updateQueue;Qi=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var O=I,ne=O.next;O.next=null,E===null?h=ne:E.next=ne,E=O;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==E&&(I===null?ve.firstBaseUpdate=ne:I.next=ne,ve.lastBaseUpdate=O))}if(h!==null){var xe=d.baseState;E=0,ve=ne=O=null,I=h;do{var ge=I.lane,Ie=I.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=t,Ve=I;switch(ge=i,Ie=a,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){xe=He.call(Ie,xe,ge);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,ge=typeof He=="function"?He.call(Ie,xe,ge):He,ge==null)break e;xe=oe({},xe,ge);break e;case 2:Qi=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ne=ve=Ie,O=xe):ve=ve.next=Ie,E|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(O=xe),d.baseState=O,d.firstBaseUpdate=ne,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Cr|=E,t.lanes=E,t.memoizedState=xe}}function xh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var ga={},fi=$i(ga),va=$i(ga),_a=$i(ga);function Tr(t){if(t===ga)throw Error(n(174));return t}function Pc(t,i){switch(Nt(_a,i),Nt(va,t),Nt(fi,ga),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}It(fi),Nt(fi,i)}function hs(){It(fi),It(va),It(_a)}function yh(t){Tr(_a.current);var i=Tr(fi.current),a=Ae(i,t.type);i!==a&&(Nt(va,t),Nt(fi,a))}function Lc(t){va.current===t&&(It(fi),It(va))}var Bt=$i(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Dc(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Ro=N.ReactCurrentDispatcher,Ic=N.ReactCurrentBatchConfig,Ar=0,Ht=null,qt=null,Jt=null,bo=!1,xa=!1,ya=0,z0=0;function un(){throw Error(n(321))}function Uc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Qn(t[a],i[a]))return!1;return!0}function Fc(t,i,a,l,d,h){if(Ar=h,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?G0:W0,t=a(l,d),xa){h=0;do{if(xa=!1,ya=0,25<=h)throw Error(n(301));h+=1,Jt=qt=null,i.updateQueue=null,Ro.current=j0,t=a(l,d)}while(xa)}if(Ro.current=No,i=qt!==null&&qt.next!==null,Ar=0,Jt=qt=Ht=null,bo=!1,i)throw Error(n(300));return t}function kc(){var t=ya!==0;return ya=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ht.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Xn(){if(qt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Jt===null?Ht.memoizedState:Jt.next;if(i!==null)Jt=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Jt===null?Ht.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Sa(t,i){return typeof i=="function"?i(t):i}function Oc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=qt,d=l.baseQueue,h=a.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}l.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,l=l.baseState;var I=E=null,O=null,ne=h;do{var ve=ne.lane;if((Ar&ve)===ve)O!==null&&(O=O.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var xe={lane:ve,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};O===null?(I=O=xe,E=l):O=O.next=xe,Ht.lanes|=ve,Cr|=ve}ne=ne.next}while(ne!==null&&ne!==h);O===null?E=l:O.next=I,Qn(l,i.memoizedState)||(En=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=O,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do h=d.lane,Ht.lanes|=h,Cr|=h,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function zc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do h=t(h,E.action),E=E.next;while(E!==d);Qn(h,i.memoizedState)||(En=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function Sh(){}function Mh(t,i){var a=Ht,l=Xn(),d=i(),h=!Qn(l.memoizedState,d);if(h&&(l.memoizedState=d,En=!0),l=l.queue,Bc(Th.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Ma(9,wh.bind(null,a,l,d,i),void 0,null),en===null)throw Error(n(349));(Ar&30)!==0||Eh(a,i,d)}return d}function Eh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function wh(t,i,a,l){i.value=a,i.getSnapshot=l,Ah(i)&&Ch(t)}function Th(t,i,a){return a(function(){Ah(i)&&Ch(t)})}function Ah(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Qn(t,a)}catch{return!0}}function Ch(t){var i=Ti(t,1);i!==null&&ii(i,t,1,-1)}function Rh(t){var i=hi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},i.queue=t,t=t.dispatch=V0.bind(null,Ht,t),[i.memoizedState,t]}function Ma(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function bh(){return Xn().memoizedState}function Po(t,i,a,l){var d=hi();Ht.flags|=t,d.memoizedState=Ma(1|i,a,void 0,l===void 0?null:l)}function Lo(t,i,a,l){var d=Xn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var E=qt.memoizedState;if(h=E.destroy,l!==null&&Uc(l,E.deps)){d.memoizedState=Ma(i,a,h,l);return}}Ht.flags|=t,d.memoizedState=Ma(1|i,a,h,l)}function Ph(t,i){return Po(8390656,8,t,i)}function Bc(t,i){return Lo(2048,8,t,i)}function Lh(t,i){return Lo(4,2,t,i)}function Nh(t,i){return Lo(4,4,t,i)}function Dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ih(t,i,a){return a=a!=null?a.concat([t]):null,Lo(4,4,Dh.bind(null,i,t),a)}function Hc(){}function Uh(t,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Uc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Fh(t,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Uc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function kh(t,i,a){return(Ar&21)===0?(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=a):(Qn(a,i)||(a=Kr(),Ht.lanes|=a,Cr|=a,t.baseState=!0),i)}function B0(t,i){var a=At;At=a!==0&&4>a?a:4,t(!0);var l=Ic.transition;Ic.transition={};try{t(!1),i()}finally{At=a,Ic.transition=l}}function Oh(){return Xn().memoizedState}function H0(t,i,a){var l=ir(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},zh(t))Bh(i,a);else if(a=gh(t,i,a,l),a!==null){var d=vn();ii(a,t,l,d),Hh(a,i,l)}}function V0(t,i,a){var l=ir(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(zh(t))Bh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,I=h(E,a);if(d.hasEagerState=!0,d.eagerState=I,Qn(I,E)){var O=i.interleaved;O===null?(d.next=d,Rc(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}a=gh(t,i,d,l),a!==null&&(d=vn(),ii(a,t,l,d),Hh(a,i,l))}}function zh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Bh(t,i){xa=bo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Hh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Gl(t,a)}}var No={readContext:jn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},G0={readContext:jn,useCallback:function(t,i){return hi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Ph,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Po(4194308,4,Dh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Po(4194308,4,t,i)},useInsertionEffect:function(t,i){return Po(4,2,t,i)},useMemo:function(t,i){var a=hi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=hi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=H0.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=hi();return t={current:t},i.memoizedState=t},useState:Rh,useDebugValue:Hc,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Rh(!1),i=t[0];return t=B0.bind(null,t[1]),hi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Ht,d=hi();if(kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),en===null)throw Error(n(349));(Ar&30)!==0||Eh(l,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,Ph(Th.bind(null,l,h,t),[t]),l.flags|=2048,Ma(9,wh.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=hi(),i=en.identifierPrefix;if(kt){var a=wi,l=Ei;a=(l&~(1<<32-Oe(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=z0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},W0={readContext:jn,useCallback:Uh,useContext:jn,useEffect:Bc,useImperativeHandle:Ih,useInsertionEffect:Lh,useLayoutEffect:Nh,useMemo:Fh,useReducer:Oc,useRef:bh,useState:function(){return Oc(Sa)},useDebugValue:Hc,useDeferredValue:function(t){var i=Xn();return kh(i,qt.memoizedState,t)},useTransition:function(){var t=Oc(Sa)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:Mh,useId:Oh,unstable_isNewReconciler:!1},j0={readContext:jn,useCallback:Uh,useContext:jn,useEffect:Bc,useImperativeHandle:Ih,useInsertionEffect:Lh,useLayoutEffect:Nh,useMemo:Fh,useReducer:zc,useRef:bh,useState:function(){return zc(Sa)},useDebugValue:Hc,useDeferredValue:function(t){var i=Xn();return qt===null?i.memoizedState=t:kh(i,qt.memoizedState,t)},useTransition:function(){var t=zc(Sa)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:Sh,useSyncExternalStore:Mh,useId:Oh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Vc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:oe({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Do={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=vn(),d=ir(t),h=Ai(l,d);h.payload=i,a!=null&&(h.callback=a),i=Ji(t,h,d),i!==null&&(ii(i,t,d,l),To(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=vn(),d=ir(t),h=Ai(l,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Ji(t,h,d),i!==null&&(ii(i,t,d,l),To(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=vn(),l=ir(t),d=Ai(a,l);d.tag=2,i!=null&&(d.callback=i),i=Ji(t,d,l),i!==null&&(ii(i,t,l,a),To(i,t,l))}};function Vh(t,i,a,l,d,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!la(a,l)||!la(d,h):!0}function Gh(t,i,a){var l=!1,d=Ki,h=i.contextType;return typeof h=="object"&&h!==null?h=jn(h):(d=Mn(i)?Sr:cn.current,l=i.contextTypes,h=(l=l!=null)?as(t,d):Ki),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Wh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Do.enqueueReplaceState(i,i.state,null)}function Gc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},bc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=jn(h):(h=Mn(i)?Sr:cn.current,d.context=as(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Vc(t,i,h,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Do.enqueueReplaceState(d,d.state,null),Ao(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var a="",l=i;do a+=ue(l),l=l.return;while(l);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Wc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function jc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var X0=typeof WeakMap=="function"?WeakMap:Map;function jh(t,i,a){a=Ai(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Bo||(Bo=!0,au=l),jc(t,i)},a}function Xh(t,i,a){a=Ai(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){jc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){jc(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function qh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new X0;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=av.bind(null,t,i,a),i.then(t,t))}function Yh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function $h(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ai(-1,1),i.tag=2,Ji(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var q0=N.ReactCurrentOwner,En=!1;function gn(t,i,a,l){i.child=t===null?mh(i,null,a,l):us(i,t.child,a,l)}function Kh(t,i,a,l,d){a=a.render;var h=i.ref;return fs(i,d),l=Fc(t,i,a,l,h,d),a=kc(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(kt&&a&&xc(i),i.flags|=1,gn(t,i,l,d),i.child)}function Zh(t,i,a,l,d){if(t===null){var h=a.type;return typeof h=="function"&&!hu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Qh(t,i,h,l,d)):(t=Xo(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(E,l)&&t.ref===i.ref)return Ci(t,i,d)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Qh(t,i,a,l,d){if(t!==null){var h=t.memoizedProps;if(la(h,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,Ci(t,i,d)}return Xc(t,i,a,l,d)}function Jh(t,i,a){var l=i.pendingProps,d=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(gs,On),On|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(gs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Nt(gs,On),On|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Nt(gs,On),On|=l;return gn(t,i,d,a),i.child}function ep(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Xc(t,i,a,l,d){var h=Mn(a)?Sr:cn.current;return h=as(i,h),fs(i,d),a=Fc(t,i,a,l,h,d),l=kc(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ci(t,i,d)):(kt&&l&&xc(i),i.flags|=1,gn(t,i,a,d),i.child)}function tp(t,i,a,l,d){if(Mn(a)){var h=!0;vo(i)}else h=!1;if(fs(i,d),i.stateNode===null)Uo(t,i),Gh(i,a,l),Gc(i,a,l,d),l=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var O=E.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=jn(ne):(ne=Mn(a)?Sr:cn.current,ne=as(i,ne));var ve=a.getDerivedStateFromProps,xe=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==l||O!==ne)&&Wh(i,E,l,ne),Qi=!1;var ge=i.memoizedState;E.state=ge,Ao(i,l,E,d),O=i.memoizedState,I!==l||ge!==O||Sn.current||Qi?(typeof ve=="function"&&(Vc(i,a,ve,l),O=i.memoizedState),(I=Qi||Vh(i,a,I,l,ge,O,ne))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),E.props=l,E.state=O,E.context=ne,l=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,vh(t,i),I=i.memoizedProps,ne=i.type===i.elementType?I:ei(i.type,I),E.props=ne,xe=i.pendingProps,ge=E.context,O=a.contextType,typeof O=="object"&&O!==null?O=jn(O):(O=Mn(a)?Sr:cn.current,O=as(i,O));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||ge!==O)&&Wh(i,E,l,O),Qi=!1,ge=i.memoizedState,E.state=ge,Ao(i,l,E,d);var He=i.memoizedState;I!==xe||ge!==He||Sn.current||Qi?(typeof Ie=="function"&&(Vc(i,a,Ie,l),He=i.memoizedState),(ne=Qi||Vh(i,a,ne,l,ge,He,O)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,He,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,He,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),E.props=l,E.state=He,E.context=O,l=ne):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return qc(t,i,a,l,h,d)}function qc(t,i,a,l,d,h){ep(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return d&&ah(i,a,!1),Ci(t,i,h);l=i.stateNode,q0.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=us(i,t.child,null,h),i.child=us(i,null,I,h)):gn(t,i,I,h),i.memoizedState=l.state,d&&ah(i,a,!0),i.child}function np(t){var i=t.stateNode;i.pendingContext?rh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&rh(t,i.context,!1),Pc(t,i.containerInfo)}function ip(t,i,a,l,d){return cs(),Ec(d),i.flags|=256,gn(t,i,a,l),i.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function rp(t,i,a){var l=i.pendingProps,d=Bt.current,h=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Nt(Bt,d&1),t===null)return Mc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=qo(E,l,0,null),t=Lr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=$c(a),i.memoizedState=Yc,t):Kc(i,E));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Y0(t,i,E,l,I,d,a);if(h){h=l.fallback,E=i.mode,d=t.child,I=d.sibling;var O={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=sr(d,O),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?h=sr(I,h):(h=Lr(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?$c(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=Yc,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Kc(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Io(t,i,a,l){return l!==null&&Ec(l),us(i,t.child,null,a),t=Kc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Y0(t,i,a,l,d,h,E){if(a)return i.flags&256?(i.flags&=-257,l=Wc(Error(n(422))),Io(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,d=i.mode,l=qo({mode:"visible",children:l.children},d,0,null),h=Lr(h,d,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&us(i,t.child,null,E),i.child.memoizedState=$c(E),i.memoizedState=Yc,h);if((i.mode&1)===0)return Io(t,i,E,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,h=Error(n(419)),l=Wc(h,l,void 0),Io(t,i,E,l)}if(I=(E&t.childLanes)!==0,En||I){if(l=en,l!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|E))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Ti(t,d),ii(l,t,d,-1))}return fu(),l=Wc(Error(n(421))),Io(t,i,E,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=ov.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,kn=Yi(d.nextSibling),Fn=i,kt=!0,Jn=null,t!==null&&(Gn[Wn++]=Ei,Gn[Wn++]=wi,Gn[Wn++]=Mr,Ei=t.id,wi=t.overflow,Mr=i),i=Kc(i,l.children),i.flags|=4096,i)}function sp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cc(t.return,i,a)}function Zc(t,i,a,l,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=d)}function ap(t,i,a){var l=i.pendingProps,d=l.revealOrder,h=l.tail;if(gn(t,i,l.children,a),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sp(t,a,i);else if(t.tag===19)sp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Nt(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Co(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Zc(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Co(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Zc(i,!0,a,null,h);break;case"together":Zc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Uo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function $0(t,i,a){switch(i.tag){case 3:np(i),cs();break;case 5:yh(i);break;case 1:Mn(i.type)&&vo(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Nt(Eo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Nt(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?rp(t,i,a):(Nt(Bt,Bt.current&1),t=Ci(t,i,a),t!==null?t.sibling:null);Nt(Bt,Bt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ap(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Jh(t,i,a)}return Ci(t,i,a)}var op,Qc,lp,cp;op=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qc=function(){},lp=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Tr(fi.current);var h=null;switch(a){case"input":d=rn(t,d),l=rn(t,l),h=[];break;case"select":d=oe({},d,{value:void 0}),l=oe({},l,{value:void 0}),h=[];break;case"textarea":d=Z(t,d),l=Z(t,l),h=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=po)}rt(a,l);var E;a=null;for(ne in d)if(!l.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var I=d[ne];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?h||(h=[]):(h=h||[]).push(ne,null));for(ne in l){var O=l[ne];if(I=d!=null?d[ne]:void 0,l.hasOwnProperty(ne)&&O!==I&&(O!=null||I!=null))if(ne==="style")if(I){for(E in I)!I.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in O)O.hasOwnProperty(E)&&I[E]!==O[E]&&(a||(a={}),a[E]=O[E])}else a||(h||(h=[]),h.push(ne,a)),a=O;else ne==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(h=h||[]).push(ne,O)):ne==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(ne,""+O):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(O!=null&&ne==="onScroll"&&Dt("scroll",t),h||I===O||(h=[])):(h=h||[]).push(ne,O))}a&&(h=h||[]).push("style",a);var ne=h;(i.updateQueue=ne)&&(i.flags|=4)}},cp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ea(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function K0(t,i,a){var l=i.pendingProps;switch(yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Mn(i.type)&&go(),dn(i),null;case 3:return l=i.stateNode,hs(),It(Sn),It(cn),Dc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(So(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(cu(Jn),Jn=null))),Qc(t,i),dn(i),null;case 5:Lc(i);var d=Tr(_a.current);if(a=i.type,t!==null&&i.stateNode!=null)lp(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Tr(fi.current),So(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[di]=i,l[ha]=h,t=(i.mode&1)!==0,a){case"dialog":Dt("cancel",l),Dt("close",l);break;case"iframe":case"object":case"embed":Dt("load",l);break;case"video":case"audio":for(d=0;d<ua.length;d++)Dt(ua[d],l);break;case"source":Dt("error",l);break;case"img":case"image":case"link":Dt("error",l),Dt("load",l);break;case"details":Dt("toggle",l);break;case"input":ct(l,h),Dt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Dt("invalid",l);break;case"textarea":pe(l,h),Dt("invalid",l)}rt(a,h),d=null;for(var E in h)if(h.hasOwnProperty(E)){var I=h[E];E==="children"?typeof I=="string"?l.textContent!==I&&(h.suppressHydrationWarning!==!0&&ho(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&ho(l.textContent,I,t),d=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Dt("scroll",l)}switch(a){case"input":_t(l),Ct(l,h,!0);break;case"textarea":_t(l),fe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=po)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[di]=i,t[ha]=l,op(t,i,!1,!1),i.stateNode=t;e:{switch(E=wt(a,l),a){case"dialog":Dt("cancel",t),Dt("close",t),d=l;break;case"iframe":case"object":case"embed":Dt("load",t),d=l;break;case"video":case"audio":for(d=0;d<ua.length;d++)Dt(ua[d],t);d=l;break;case"source":Dt("error",t),d=l;break;case"img":case"image":case"link":Dt("error",t),Dt("load",t),d=l;break;case"details":Dt("toggle",t),d=l;break;case"input":ct(t,l),d=rn(t,l),Dt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=oe({},l,{value:void 0}),Dt("invalid",t);break;case"textarea":pe(t,l),d=Z(t,l),Dt("invalid",t);break;default:d=l}rt(a,d),I=d;for(h in I)if(I.hasOwnProperty(h)){var O=I[h];h==="style"?ze(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&mt(t,O)):h==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&Me(t,O):typeof O=="number"&&Me(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Dt("scroll",t):O!=null&&b(t,h,O,E))}switch(a){case"input":_t(t),Ct(t,l,!1);break;case"textarea":_t(t),fe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?A(t,!!l.multiple,h,!1):l.defaultValue!=null&&A(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=po)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)cp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Tr(_a.current),Tr(fi.current),So(i)){if(l=i.stateNode,a=i.memoizedProps,l[di]=i,(h=l.nodeValue!==a)&&(t=Fn,t!==null))switch(t.tag){case 3:ho(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return dn(i),null;case 13:if(It(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)fh(),cs(),i.flags|=98560,h=!1;else if(h=So(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[di]=i}else cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else Jn!==null&&(cu(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Yt===0&&(Yt=3):fu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return hs(),Qc(t,i),t===null&&da(i.stateNode.containerInfo),dn(i),null;case 10:return Ac(i.type._context),dn(i),null;case 17:return Mn(i.type)&&go(),dn(i),null;case 19:if(It(Bt),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Ea(h,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Co(t),E!==null){for(i.flags|=128,Ea(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Nt(Bt,Bt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>vs&&(i.flags|=128,l=!0,Ea(h,!1),i.lanes=4194304)}else{if(!l)if(t=Co(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!kt)return dn(i),null}else 2*Te()-h.renderingStartTime>vs&&a!==1073741824&&(i.flags|=128,l=!0,Ea(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,a=Bt.current,Nt(Bt,l?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return du(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Z0(t,i){switch(yc(i),i.tag){case 1:return Mn(i.type)&&go(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),It(Sn),It(cn),Dc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Lc(i),null;case 13:if(It(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));cs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Bt),null;case 4:return hs(),null;case 10:return Ac(i.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Fo=!1,fn=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ms(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Vt(t,i,l)}else a.current=null}function Jc(t,i,a){try{a()}catch(l){Vt(t,i,l)}}var up=!1;function J0(t,i){if(dc=to,t=Vf(),ic(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,I=-1,O=-1,ne=0,ve=0,xe=t,ge=null;t:for(;;){for(var Ie;xe!==a||d!==0&&xe.nodeType!==3||(I=E+d),xe!==h||l!==0&&xe.nodeType!==3||(O=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)ge=xe,xe=Ie;for(;;){if(xe===t)break t;if(ge===a&&++ne===d&&(I=E),ge===h&&++ve===l&&(O=E),(Ie=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Ie}a=I===-1||O===-1?null:{start:I,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(fc={focusedElem:t,selectionRange:a},to=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Gt=He.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ei(i.type,Ve),Gt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Vt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return He=up,up=!1,He}function wa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Jc(i,a,h)}d=d.next}while(d!==l)}}function ko(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function eu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function dp(t){var i=t.alternate;i!==null&&(t.alternate=null,dp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[ha],delete i[gc],delete i[U0],delete i[F0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fp(t){return t.tag===5||t.tag===3||t.tag===4}function hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=po));else if(l!==4&&(t=t.child,t!==null))for(tu(t,i,a),t=t.sibling;t!==null;)tu(t,i,a),t=t.sibling}function nu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(nu(t,i,a),t=t.sibling;t!==null;)nu(t,i,a),t=t.sibling}var an=null,ti=!1;function er(t,i,a){for(a=a.child;a!==null;)pp(t,i,a),a=a.sibling}function pp(t,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Pt,a)}catch{}switch(a.tag){case 5:fn||ms(a,i);case 6:var l=an,d=ti;an=null,er(t,i,a),an=l,ti=d,an!==null&&(ti?(t=an,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):an.removeChild(a.stateNode));break;case 18:an!==null&&(ti?(t=an,a=a.stateNode,t.nodeType===8?mc(t.parentNode,a):t.nodeType===1&&mc(t,a),na(t)):mc(an,a.stateNode));break;case 4:l=an,d=ti,an=a.stateNode.containerInfo,ti=!0,er(t,i,a),an=l,ti=d;break;case 0:case 11:case 14:case 15:if(!fn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var h=d,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Jc(a,i,E),d=d.next}while(d!==l)}er(t,i,a);break;case 1:if(!fn&&(ms(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){Vt(a,i,I)}er(t,i,a);break;case 21:er(t,i,a);break;case 22:a.mode&1?(fn=(l=fn)||a.memoizedState!==null,er(t,i,a),fn=l):er(t,i,a);break;default:er(t,i,a)}}function mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Q0),i.forEach(function(l){var d=lv.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function ni(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var h=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:an=I.stateNode,ti=!1;break e;case 3:an=I.stateNode.containerInfo,ti=!0;break e;case 4:an=I.stateNode.containerInfo,ti=!0;break e}I=I.return}if(an===null)throw Error(n(160));pp(h,E,d),an=null,ti=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(ne){Vt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gp(i,t),i=i.sibling}function gp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),pi(t),l&4){try{wa(3,t,t.return),ko(3,t)}catch(Ve){Vt(t,t.return,Ve)}try{wa(5,t,t.return)}catch(Ve){Vt(t,t.return,Ve)}}break;case 1:ni(i,t),pi(t),l&512&&a!==null&&ms(a,a.return);break;case 5:if(ni(i,t),pi(t),l&512&&a!==null&&ms(a,a.return),t.flags&32){var d=t.stateNode;try{Me(d,"")}catch(Ve){Vt(t,t.return,Ve)}}if(l&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,I=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&pt(d,h),wt(I,E);var ne=wt(I,h);for(E=0;E<O.length;E+=2){var ve=O[E],xe=O[E+1];ve==="style"?ze(d,xe):ve==="dangerouslySetInnerHTML"?mt(d,xe):ve==="children"?Me(d,xe):b(d,ve,xe,ne)}switch(I){case"input":Ke(d,h);break;case"textarea":_e(d,h);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?A(d,!!h.multiple,Ie,!1):ge!==!!h.multiple&&(h.defaultValue!=null?A(d,!!h.multiple,h.defaultValue,!0):A(d,!!h.multiple,h.multiple?[]:"",!1))}d[ha]=h}catch(Ve){Vt(t,t.return,Ve)}}break;case 6:if(ni(i,t),pi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(Ve){Vt(t,t.return,Ve)}}break;case 3:if(ni(i,t),pi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{na(i.containerInfo)}catch(Ve){Vt(t,t.return,Ve)}break;case 4:ni(i,t),pi(t);break;case 13:ni(i,t),pi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(su=Te())),l&4&&mp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(fn=(ne=fn)||ve,ni(i,t),fn=ne):ni(i,t),pi(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!ve&&(t.mode&1)!==0)for(Be=t,ve=t.child;ve!==null;){for(xe=Be=ve;Be!==null;){switch(ge=Be,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:wa(4,ge,ge.return);break;case 1:ms(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Vt(l,a,Ve)}}break;case 5:ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){xp(xe);continue}}Ie!==null?(Ie.return=ge,Be=Ie):xp(xe)}ve=ve.sibling}e:for(ve=null,xe=t;;){if(xe.tag===5){if(ve===null){ve=xe;try{d=xe.stateNode,ne?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=xe.stateNode,O=xe.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Je("display",E))}catch(Ve){Vt(t,t.return,Ve)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=ne?"":xe.memoizedProps}catch(Ve){Vt(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ni(i,t),pi(t),l&4&&mp(t);break;case 21:break;default:ni(i,t),pi(t)}}function pi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(fp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Me(d,""),l.flags&=-33);var h=hp(t);nu(t,h,d);break;case 3:case 4:var E=l.stateNode.containerInfo,I=hp(t);tu(t,I,E);break;default:throw Error(n(161))}}catch(O){Vt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ev(t,i,a){Be=t,vp(t)}function vp(t,i,a){for(var l=(t.mode&1)!==0;Be!==null;){var d=Be,h=d.child;if(d.tag===22&&l){var E=d.memoizedState!==null||Fo;if(!E){var I=d.alternate,O=I!==null&&I.memoizedState!==null||fn;I=Fo;var ne=fn;if(Fo=E,(fn=O)&&!ne)for(Be=d;Be!==null;)E=Be,O=E.child,E.tag===22&&E.memoizedState!==null?yp(d):O!==null?(O.return=E,Be=O):yp(d);for(;h!==null;)Be=h,vp(h),h=h.sibling;Be=d,Fo=I,fn=ne}_p(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Be=h):_p(t)}}function _p(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||ko(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ei(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&xh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xh(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ve=ne.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&na(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&eu(i)}catch(ge){Vt(i,i.return,ge)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function xp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function yp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ko(4,i)}catch(O){Vt(i,a,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(O){Vt(i,d,O)}}var h=i.return;try{eu(i)}catch(O){Vt(i,h,O)}break;case 5:var E=i.return;try{eu(i)}catch(O){Vt(i,E,O)}}}catch(O){Vt(i,i.return,O)}if(i===t){Be=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Be=I;break}Be=i.return}}var tv=Math.ceil,Oo=N.ReactCurrentDispatcher,iu=N.ReactCurrentOwner,qn=N.ReactCurrentBatchConfig,xt=0,en=null,Wt=null,on=0,On=0,gs=$i(0),Yt=0,Ta=null,Cr=0,zo=0,ru=0,Aa=null,wn=null,su=0,vs=1/0,Ri=null,Bo=!1,au=null,tr=null,Ho=!1,nr=null,Vo=0,Ca=0,ou=null,Go=-1,Wo=0;function vn(){return(xt&6)!==0?Te():Go!==-1?Go:Go=Te()}function ir(t){return(t.mode&1)===0?1:(xt&2)!==0&&on!==0?on&-on:O0.transition!==null?(Wo===0&&(Wo=Kr()),Wo):(t=At,t!==0||(t=window.event,t=t===void 0?16:Mf(t.type)),t)}function ii(t,i,a,l){if(50<Ca)throw Ca=0,ou=null,Error(n(185));Hi(t,a,l),((xt&2)===0||t!==en)&&(t===en&&((xt&2)===0&&(zo|=a),Yt===4&&rr(t,on)),Tn(t,l),a===1&&xt===0&&(i.mode&1)===0&&(vs=Te()+500,_o&&Zi()))}function Tn(t,i){var a=t.callbackNode;Ks(t,i);var l=Lt(t,t===en?on:0);if(l===0)a!==null&&j(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&j(a),i===1)t.tag===0?k0(Mp.bind(null,t)):oh(Mp.bind(null,t)),D0(function(){(xt&6)===0&&Zi()}),a=null;else{switch(pf(l)){case 1:a=$e;break;case 4:a=Ze;break;case 16:a=We;break;case 536870912:a=Rt;break;default:a=We}a=Pp(a,Sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Sp(t,i){if(Go=-1,Wo=0,(xt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(_s()&&t.callbackNode!==a)return null;var l=Lt(t,t===en?on:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=jo(t,l);else{i=l;var d=xt;xt|=2;var h=wp();(en!==t||on!==i)&&(Ri=null,vs=Te()+500,br(t,i));do try{rv();break}catch(I){Ep(t,I)}while(!0);Tc(),Oo.current=h,xt=d,Wt!==null?i=0:(en=null,on=0,i=Yt)}if(i!==0){if(i===2&&(d=ln(t),d!==0&&(l=d,i=lu(t,d))),i===1)throw a=Ta,br(t,0),rr(t,l),Tn(t,Te()),a;if(i===6)rr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!nv(d)&&(i=jo(t,l),i===2&&(h=ln(t),h!==0&&(l=h,i=lu(t,h))),i===1))throw a=Ta,br(t,0),rr(t,l),Tn(t,Te()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,wn,Ri);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=su+500-Te(),10<i)){if(Lt(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=pc(Pr.bind(null,t,wn,Ri),i);break}Pr(t,wn,Ri);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var E=31-Oe(l);h=1<<E,E=i[E],E>d&&(d=E),l&=~h}if(l=d,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*tv(l/1960))-l,10<l){t.timeoutHandle=pc(Pr.bind(null,t,wn,Ri),l);break}Pr(t,wn,Ri);break;case 5:Pr(t,wn,Ri);break;default:throw Error(n(329))}}}return Tn(t,Te()),t.callbackNode===a?Sp.bind(null,t):null}function lu(t,i){var a=Aa;return t.current.memoizedState.isDehydrated&&(br(t,i).flags|=256),t=jo(t,i),t!==2&&(i=wn,wn=a,i!==null&&cu(i)),t}function cu(t){wn===null?wn=t:wn.push.apply(wn,t)}function nv(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],h=d.getSnapshot;d=d.value;try{if(!Qn(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~ru,i&=~zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Oe(i),l=1<<a;t[a]=-1,i&=~l}}function Mp(t){if((xt&6)!==0)throw Error(n(327));_s();var i=Lt(t,0);if((i&1)===0)return Tn(t,Te()),null;var a=jo(t,i);if(t.tag!==0&&a===2){var l=ln(t);l!==0&&(i=l,a=lu(t,l))}if(a===1)throw a=Ta,br(t,0),rr(t,i),Tn(t,Te()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,wn,Ri),Tn(t,Te()),null}function uu(t,i){var a=xt;xt|=1;try{return t(i)}finally{xt=a,xt===0&&(vs=Te()+500,_o&&Zi())}}function Rr(t){nr!==null&&nr.tag===0&&(xt&6)===0&&_s();var i=xt;xt|=1;var a=qn.transition,l=At;try{if(qn.transition=null,At=1,t)return t()}finally{At=l,qn.transition=a,xt=i,(xt&6)===0&&Zi()}}function du(){On=gs.current,It(gs)}function br(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,N0(a)),Wt!==null)for(a=Wt.return;a!==null;){var l=a;switch(yc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&go();break;case 3:hs(),It(Sn),It(cn),Dc();break;case 5:Lc(l);break;case 4:hs();break;case 13:It(Bt);break;case 19:It(Bt);break;case 10:Ac(l.type._context);break;case 22:case 23:du()}a=a.return}if(en=t,Wt=t=sr(t.current,null),on=On=i,Yt=0,Ta=null,ru=zo=Cr=0,wn=Aa=null,wr!==null){for(i=0;i<wr.length;i++)if(a=wr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,h=a.pending;if(h!==null){var E=h.next;h.next=d,l.next=E}a.pending=l}wr=null}return t}function Ep(t,i){do{var a=Wt;try{if(Tc(),Ro.current=No,bo){for(var l=Ht.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}bo=!1}if(Ar=0,Jt=qt=Ht=null,xa=!1,ya=0,iu.current=null,a===null||a.return===null){Yt=1,Ta=i,Wt=null;break}e:{var h=t,E=a.return,I=a,O=i;if(i=on,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ne=O,ve=I,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Yh(E);if(Ie!==null){Ie.flags&=-257,$h(Ie,E,I,h,i),Ie.mode&1&&qh(h,ne,i),i=Ie,O=ne;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else He.add(O);break e}else{if((i&1)===0){qh(h,ne,i),fu();break e}O=Error(n(426))}}else if(kt&&I.mode&1){var Gt=Yh(E);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),$h(Gt,E,I,h,i),Ec(ps(O,I));break e}}h=O=ps(O,I),Yt!==4&&(Yt=2),Aa===null?Aa=[h]:Aa.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var $=jh(h,O,i);_h(h,$);break e;case 1:I=O;var H=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(tr===null||!tr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Xh(h,I,i);_h(h,Ee);break e}}h=h.return}while(h!==null)}Ap(a)}catch(je){i=je,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function wp(){var t=Oo.current;return Oo.current=No,t===null?No:t}function fu(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||(Cr&268435455)===0&&(zo&268435455)===0||rr(en,on)}function jo(t,i){var a=xt;xt|=2;var l=wp();(en!==t||on!==i)&&(Ri=null,br(t,i));do try{iv();break}catch(d){Ep(t,d)}while(!0);if(Tc(),xt=a,Oo.current=l,Wt!==null)throw Error(n(261));return en=null,on=0,Yt}function iv(){for(;Wt!==null;)Tp(Wt)}function rv(){for(;Wt!==null&&!we();)Tp(Wt)}function Tp(t){var i=bp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?Ap(t):Wt=i,iu.current=null}function Ap(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=K0(a,i,On),a!==null){Wt=a;return}}else{if(a=Z0(a,i),a!==null){a.flags&=32767,Wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Pr(t,i,a){var l=At,d=qn.transition;try{qn.transition=null,At=1,sv(t,i,a,l)}finally{qn.transition=d,At=l}return null}function sv(t,i,a,l){do _s();while(nr!==null);if((xt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(zg(t,h),t===en&&(Wt=en=null,on=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ho||(Ho=!0,Pp(We,function(){return _s(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=qn.transition,qn.transition=null;var E=At;At=1;var I=xt;xt|=4,iu.current=null,J0(t,a),gp(a,t),T0(fc),to=!!dc,fc=dc=null,t.current=a,ev(a),Ne(),xt=I,At=E,qn.transition=h}else t.current=a;if(Ho&&(Ho=!1,nr=t,Vo=d),h=t.pendingLanes,h===0&&(tr=null),yt(a.stateNode),Tn(t,Te()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Bo)throw Bo=!1,t=au,au=null,t;return(Vo&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===ou?Ca++:(Ca=0,ou=t):Ca=0,Zi(),null}function _s(){if(nr!==null){var t=pf(Vo),i=qn.transition,a=At;try{if(qn.transition=null,At=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Vo=0,(xt&6)!==0)throw Error(n(331));var d=xt;for(xt|=4,Be=t.current;Be!==null;){var h=Be,E=h.child;if((Be.flags&16)!==0){var I=h.deletions;if(I!==null){for(var O=0;O<I.length;O++){var ne=I[O];for(Be=ne;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:wa(8,ve,h)}var xe=ve.child;if(xe!==null)xe.return=ve,Be=xe;else for(;Be!==null;){ve=Be;var ge=ve.sibling,Ie=ve.return;if(dp(ve),ve===ne){Be=null;break}if(ge!==null){ge.return=Ie,Be=ge;break}Be=Ie}}}var He=h.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Be=E;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:wa(9,h,h.return)}var $=h.sibling;if($!==null){$.return=h.return,Be=$;break e}Be=h.return}}var H=t.current;for(Be=H;Be!==null;){E=Be;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Be=K;else e:for(E=H;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:ko(9,I)}}catch(je){Vt(I,I.return,je)}if(I===E){Be=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Be=Ee;break e}Be=I.return}}if(xt=d,Zi(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Pt,t)}catch{}l=!0}return l}finally{At=a,qn.transition=i}}return!1}function Cp(t,i,a){i=ps(a,i),i=jh(t,i,1),t=Ji(t,i,1),i=vn(),t!==null&&(Hi(t,1,i),Tn(t,i))}function Vt(t,i,a){if(t.tag===3)Cp(t,t,a);else for(;i!==null;){if(i.tag===3){Cp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=ps(a,t),t=Xh(i,t,1),i=Ji(i,t,1),t=vn(),i!==null&&(Hi(i,1,t),Tn(i,t));break}}i=i.return}}function av(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&a,en===t&&(on&a)===a&&(Yt===4||Yt===3&&(on&130023424)===on&&500>Te()-su?br(t,0):ru|=a),Tn(t,i)}function Rp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var a=vn();t=Ti(t,i),t!==null&&(Hi(t,i,a),Tn(t,a))}function ov(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Rp(t,a)}function lv(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Rp(t,a)}var bp;bp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Sn.current)En=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return En=!1,$0(t,i,a);En=(t.flags&131072)!==0}else En=!1,kt&&(i.flags&1048576)!==0&&lh(i,yo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Uo(t,i),t=i.pendingProps;var d=as(i,cn.current);fs(i,a),d=Fc(null,i,l,t,d,a);var h=kc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Mn(l)?(h=!0,vo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,bc(i),d.updater=Do,i.stateNode=d,d._reactInternals=i,Gc(i,l,t,a),i=qc(null,i,l,!0,h,a)):(i.tag=0,kt&&h&&xc(i),gn(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Uo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=uv(l),t=ei(l,t),d){case 0:i=Xc(null,i,l,t,a);break e;case 1:i=tp(null,i,l,t,a);break e;case 11:i=Kh(null,i,l,t,a);break e;case 14:i=Zh(null,i,l,ei(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),Xc(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),tp(t,i,l,d,a);case 3:e:{if(np(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,d=h.element,vh(t,i),Ao(i,l,null,a);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ps(Error(n(423)),i),i=ip(t,i,l,a,d);break e}else if(l!==d){d=ps(Error(n(424)),i),i=ip(t,i,l,a,d);break e}else for(kn=Yi(i.stateNode.containerInfo.firstChild),Fn=i,kt=!0,Jn=null,a=mh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),l===d){i=Ci(t,i,a);break e}gn(t,i,l,a)}i=i.child}return i;case 5:return yh(i),t===null&&Mc(i),l=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,E=d.children,hc(l,d)?E=null:h!==null&&hc(l,h)&&(i.flags|=32),ep(t,i),gn(t,i,E,a),i.child;case 6:return t===null&&Mc(i),null;case 13:return rp(t,i,a);case 4:return Pc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,a):gn(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),Kh(t,i,l,d,a);case 7:return gn(t,i,i.pendingProps,a),i.child;case 8:return gn(t,i,i.pendingProps.children,a),i.child;case 12:return gn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,h=i.memoizedProps,E=d.value,Nt(Eo,l._currentValue),l._currentValue=E,h!==null)if(Qn(h.value,E)){if(h.children===d.children&&!Sn.current){i=Ci(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var I=h.dependencies;if(I!==null){E=h.child;for(var O=I.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ai(-1,a&-a),O.tag=2;var ne=h.updateQueue;if(ne!==null){ne=ne.shared;var ve=ne.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),ne.pending=O}}h.lanes|=a,O=h.alternate,O!==null&&(O.lanes|=a),Cc(h.return,a,i),I.lanes|=a;break}O=O.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),Cc(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}gn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,fs(i,a),d=jn(d),l=l(d),i.flags|=1,gn(t,i,l,a),i.child;case 14:return l=i.type,d=ei(l,i.pendingProps),d=ei(l.type,d),Zh(t,i,l,d,a);case 15:return Qh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ei(l,d),Uo(t,i),i.tag=1,Mn(l)?(t=!0,vo(i)):t=!1,fs(i,a),Gh(i,l,d),Gc(i,l,d,a),qc(null,i,l,!0,t,a);case 19:return ap(t,i,a);case 22:return Jh(t,i,a)}throw Error(n(156,i.tag))};function Pp(t,i){return te(t,i)}function cv(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,a,l){return new cv(t,i,a,l)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uv(t){if(typeof t=="function")return hu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===le)return 14}return 2}function sr(t,i){var a=t.alternate;return a===null?(a=Yn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Xo(t,i,a,l,d,h){var E=2;if(l=t,typeof t=="function")hu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case U:return Lr(a.children,d,h,i);case W:E=8,d|=8;break;case he:return t=Yn(12,a,i,d|2),t.elementType=he,t.lanes=h,t;case q:return t=Yn(13,a,i,d),t.elementType=q,t.lanes=h,t;case re:return t=Yn(19,a,i,d),t.elementType=re,t.lanes=h,t;case ce:return qo(a,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M:E=10;break e;case P:E=9;break e;case ie:E=11;break e;case le:E=14;break e;case ee:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(E,a,i,d),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,a,l){return t=Yn(7,t,l,i),t.lanes=a,t}function qo(t,i,a,l){return t=Yn(22,t,l,i),t.elementType=ce,t.lanes=a,t.stateNode={isHidden:!1},t}function pu(t,i,a){return t=Yn(6,t,null,i),t.lanes=a,t}function mu(t,i,a){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function dv(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function gu(t,i,a,l,d,h,E,I,O){return t=new dv(t,i,a,I,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(h),t}function fv(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Lp(t){if(!t)return Ki;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Mn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Mn(a))return sh(t,a,i)}return i}function Np(t,i,a,l,d,h,E,I,O){return t=gu(a,l,!0,t,d,h,E,I,O),t.context=Lp(null),a=t.current,l=vn(),d=ir(a),h=Ai(l,d),h.callback=i??null,Ji(a,h,d),t.current.lanes=d,Hi(t,d,l),Tn(t,l),t}function Yo(t,i,a,l){var d=i.current,h=vn(),E=ir(d);return a=Lp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ai(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(d,i,E),t!==null&&(ii(t,d,E,h),To(t,d,E)),E}function $o(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function vu(t,i){Dp(t,i),(t=t.alternate)&&Dp(t,i)}function hv(){return null}var Ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function _u(t){this._internalRoot=t}Ko.prototype.render=_u.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Yo(t,i,null,null)},Ko.prototype.unmount=_u.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Yo(null,t,null,null)}),i[Si]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=vf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ji.length&&i!==0&&i<ji[a].priority;a++);ji.splice(a,0,t),a===0&&yf(t)}};function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function pv(t,i,a,l,d){if(d){if(typeof l=="function"){var h=l;l=function(){var ne=$o(E);h.call(ne)}}var E=Np(i,l,t,0,null,!1,!1,"",Up);return t._reactRootContainer=E,t[Si]=E.current,da(t.nodeType===8?t.parentNode:t),Rr(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var ne=$o(O);I.call(ne)}}var O=gu(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=O,t[Si]=O.current,da(t.nodeType===8?t.parentNode:t),Rr(function(){Yo(i,O,a,l)}),O}function Qo(t,i,a,l,d){var h=a._reactRootContainer;if(h){var E=h;if(typeof d=="function"){var I=d;d=function(){var O=$o(E);I.call(O)}}Yo(i,E,t,d)}else E=pv(a,i,t,d,l);return $o(E)}mf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=yi(i.pendingLanes);a!==0&&(Gl(i,a|1),Tn(i,Te()),(xt&6)===0&&(vs=Te()+500,Zi()))}break;case 13:Rr(function(){var l=Ti(t,1);if(l!==null){var d=vn();ii(l,t,1,d)}}),vu(t,1)}},Wl=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var a=vn();ii(i,t,134217728,a)}vu(t,134217728)}},gf=function(t){if(t.tag===13){var i=ir(t),a=Ti(t,i);if(a!==null){var l=vn();ii(a,t,i,l)}vu(t,i)}},vf=function(){return At},_f=function(t,i){var a=At;try{return At=t,i()}finally{At=a}},ae=function(t,i,a){switch(i){case"input":if(Ke(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=mo(l);if(!d)throw Error(n(90));dt(l),Ke(l,d)}}}break;case"textarea":_e(t,a);break;case"select":i=a.value,i!=null&&A(t,!!a.multiple,i,!1)}},sn=uu,gt=Rr;var mv={usingClientEntryPoint:!1,Events:[pa,rs,mo,ht,zt,uu]},Ra={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gv={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Pt=Jo.inject(gv),Ft=Jo}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mv,An.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(i))throw Error(n(200));return fv(t,i,null,a)},An.createRoot=function(t,i){if(!xu(t))throw Error(n(299));var a=!1,l="",d=Ip;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=gu(t,1,!1,null,null,a,!1,l,d),t[Si]=i.current,da(t.nodeType===8?t.parentNode:t),new _u(i)},An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=G(i),t=t===null?null:t.stateNode,t},An.flushSync=function(t){return Rr(t)},An.hydrate=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!0,a)},An.hydrateRoot=function(t,i,a){if(!xu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,h="",E=Ip;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Np(i,null,t,1,a??null,d,!1,h,E),t[Si]=i.current,da(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ko(i)},An.render=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!1,a)},An.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},An.unstable_batchedUpdates=uu,An.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Zo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,i,a,!1,l)},An.version="18.3.1-next-f1338f8080-20240426",An}var Gp;function Tv(){if(Gp)return Mu.exports;Gp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mu.exports=wv(),Mu.exports}var Wp;function Av(){if(Wp)return el;Wp=1;var s=Tv();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var Cv=Av();const Rv=Km(Cv),jp=(s,e,n)=>s+(e-s)*n;function bv(){const s=vt.useRef(null),e=vt.useRef(null);return vt.useEffect(()=>{const n=s.current,r=e.current;if(!n||!r)return;if(window.matchMedia("(hover: none)").matches){n.style.display="none",r.style.display="none";return}let o=0,c=0,u=0,f=0;const p=C=>{o=C.clientX,c=C.clientY,n.style.transform=`translate(${o}px, ${c}px) translate(-50%, -50%)`},m=()=>{u=jp(u,o,.1),f=jp(f,c,.1),r.style.transform=`translate(${u}px, ${f}px) translate(-50%, -50%)`,requestAnimationFrame(m)};m();const _="a, button, .filter-btn, .slider-btn, .work-card, .service-card, input, textarea, select, label",y=C=>{C.target.closest(_)&&document.body.classList.add("cursor-hover")},x=C=>{C.target.closest(_)&&document.body.classList.remove("cursor-hover")},S=()=>{n.style.opacity="0",r.style.opacity="0"},T=()=>{n.style.opacity="1",r.style.opacity="1"};return document.addEventListener("mousemove",p),document.addEventListener("mouseover",y),document.addEventListener("mouseout",x),document.addEventListener("mouseleave",S),document.addEventListener("mouseenter",T),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseover",y),document.removeEventListener("mouseout",x),document.removeEventListener("mouseleave",S),document.removeEventListener("mouseenter",T)}},[]),w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"cursor",ref:s}),w.jsx("div",{className:"cursor-follower",ref:e})]})}const Pv=s=>1-(1-s)*(1-s);function Lv(){const[s,e]=vt.useState(0),[n,r]=vt.useState(!1),[o,c]=vt.useState(!1);return vt.useEffect(()=>{const f=performance.now(),p=m=>{const _=Math.min((m-f)/2e3,1);e(Math.round(Pv(_)*100)),_<1?requestAnimationFrame(p):(r(!0),document.body.classList.add("loaded"),setTimeout(()=>c(!0),700))};requestAnimationFrame(p)},[]),o?null:w.jsx("div",{className:`loader${n?" hidden":""}`,children:w.jsxs("div",{className:"loader-inner",children:[w.jsxs("div",{className:"loader-logo",children:["NEXA",w.jsx("span",{children:"STUDIO"})]}),w.jsx("div",{className:"loader-bar",children:w.jsx("div",{className:"loader-progress",style:{width:s+"%"}})}),w.jsxs("div",{className:"loader-count",children:[s,"%"]})]})})}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=vt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...f},p)=>vt.createElement("svg",{ref:p,...Dv,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Zm("lucide",o),...f},[...u.map(([m,_])=>vt.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=(s,e)=>{const n=vt.forwardRef(({className:r,...o},c)=>vt.createElement(Iv,{ref:c,iconNode:e,className:Zm(`lucide-${Nv(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=et("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=et("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=et("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=et("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=et("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=et("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=et("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=et("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=et("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=et("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=et("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=et("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=et("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=et("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=et("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=et("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=et("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=et("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=et("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=et("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=et("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=et("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=et("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=et("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=et("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=et("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=et("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=et("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=et("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=et("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=et("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=et("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=et("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=et("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=et("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=et("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=et("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=et("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=et("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=et("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=et("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=et("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=et("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=et("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=et("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=et("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=et("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=et("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function g_({theme:s,onToggle:e}){return w.jsxs("button",{className:"theme-fab",onClick:e,"aria-label":"Toggle dark/light mode",children:[w.jsx(ig,{className:"icon-sun",size:16}),w.jsx(tg,{className:"icon-moon",size:16}),w.jsx("span",{className:"theme-fab-label"})]})}const v_=["About","Services","Work","Team","Contact"];function __({theme:s,onToggle:e,onMenuOpen:n}){return w.jsx("nav",{className:"nav",id:"nav",children:w.jsxs("div",{className:"nav-container",children:[w.jsxs("a",{href:"#",className:"nav-logo",children:["NEXA",w.jsx("span",{children:"STUDIO"})]}),w.jsx("ul",{className:"nav-links",children:v_.map(r=>w.jsx("li",{children:w.jsx("a",{href:`#${r.toLowerCase()}`,className:"nav-link",children:r})},r))}),w.jsxs("div",{className:"nav-actions",children:[w.jsxs("button",{className:"theme-toggle",onClick:e,"aria-label":"Toggle theme",children:[w.jsx(ig,{className:"icon-sun",size:18}),w.jsx(tg,{className:"icon-moon",size:18})]}),w.jsxs("a",{href:"#contact",className:"btn btn-primary",children:[w.jsx(e_,{size:16})," Let's Talk"]})]}),w.jsxs("button",{className:"nav-hamburger",onClick:n,"aria-label":"Menu",children:[w.jsx("span",{}),w.jsx("span",{}),w.jsx("span",{})]})]})})}const x_=["About","Services","Work","Team","Contact"];function y_({open:s,onClose:e}){return w.jsxs("div",{className:`mobile-menu${s?" open":""}`,children:[w.jsx("button",{className:"mobile-close",onClick:e,"aria-label":"Close menu",children:w.jsx(p_,{size:20})}),w.jsx("ul",{children:x_.map(n=>w.jsx("li",{children:w.jsx("a",{href:`#${n.toLowerCase()}`,className:"mobile-link",onClick:e,children:n})},n))}),w.jsx("a",{href:"#contact",className:"btn btn-primary mobile-cta",onClick:e,children:"Start a Project"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="169",S_=0,qp=1,M_=2,sg=1,E_=2,Ii=3,gr=0,Pn=1,Ui=2,pr=0,ks=1,Yp=2,$p=3,Kp=4,w_=5,Br=100,T_=101,A_=102,C_=103,R_=104,b_=200,P_=201,L_=202,N_=203,rd=204,sd=205,D_=206,I_=207,U_=208,F_=209,k_=210,O_=211,z_=212,B_=213,H_=214,ad=0,od=1,ld=2,Bs=3,cd=4,ud=5,dd=6,fd=7,Kd=0,V_=1,G_=2,mr=0,W_=1,j_=2,X_=3,q_=4,Y_=5,$_=6,K_=7,ag=300,Hs=301,Vs=302,hd=303,pd=304,Ol=306,md=1e3,Vr=1001,gd=1002,Kn=1003,Z_=1004,tl=1005,oi=1006,Tu=1007,Gr=1008,Oi=1009,og=1010,lg=1011,Ha=1012,Zd=1013,jr=1014,Fi=1015,Ga=1016,Qd=1017,Jd=1018,Gs=1020,cg=35902,ug=1021,dg=1022,ci=1023,fg=1024,hg=1025,Os=1026,Ws=1027,pg=1028,ef=1029,mg=1030,tf=1031,nf=1033,wl=33776,Tl=33777,Al=33778,Cl=33779,vd=35840,_d=35841,xd=35842,yd=35843,Sd=36196,Md=37492,Ed=37496,wd=37808,Td=37809,Ad=37810,Cd=37811,Rd=37812,bd=37813,Pd=37814,Ld=37815,Nd=37816,Dd=37817,Id=37818,Ud=37819,Fd=37820,kd=37821,Rl=36492,Od=36494,zd=36495,gg=36283,Bd=36284,Hd=36285,Vd=36286,Q_=3200,J_=3201,vg=0,ex=1,hr="",mi="srgb",_r="srgb-linear",rf="display-p3",zl="display-p3-linear",Nl="linear",Ut="srgb",Dl="rec709",Il="p3",xs=7680,Zp=519,tx=512,nx=513,ix=514,_g=515,rx=516,sx=517,ax=518,ox=519,Qp=35044,Jp="300 es",ki=2e3,Ul=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,Gd=180/Math.PI;function Wa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Rn(s,e,n){return Math.max(e,Math.min(n,s))}function lx(s,e){return(s%e+e)%e}function Cu(s,e,n){return(1-n)*s+n*e}function Pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,o,c,u,f,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,m)}set(e,n,r,o,c,u,f,p,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],p=r[6],m=r[1],_=r[4],y=r[7],x=r[2],S=r[5],T=r[8],C=o[0],v=o[3],g=o[6],L=o[1],b=o[4],N=o[7],X=o[2],k=o[5],U=o[8];return c[0]=u*C+f*L+p*X,c[3]=u*v+f*b+p*k,c[6]=u*g+f*N+p*U,c[1]=m*C+_*L+y*X,c[4]=m*v+_*b+y*k,c[7]=m*g+_*N+y*U,c[2]=x*C+S*L+T*X,c[5]=x*v+S*b+T*k,c[8]=x*g+S*N+T*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return n*u*_-n*f*m-r*c*_+r*f*p+o*c*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8],y=_*u-f*m,x=f*p-_*c,S=m*c-u*p,T=n*y+r*x+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=y*C,e[1]=(o*m-_*r)*C,e[2]=(f*r-o*u)*C,e[3]=x*C,e[4]=(_*n-o*p)*C,e[5]=(o*c-f*n)*C,e[6]=S*C,e[7]=(r*p-m*n)*C,e[8]=(u*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*f)+u+e,-o*m,o*p,-o*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new at;function xg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cx(){const s=Fl("canvas");return s.style.display="block",s}const em={};function bl(s){s in em||(em[s]=!0,console.warn(s))}function ux(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function dx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tm=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nm=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[_r]:{transfer:Nl,primaries:Dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[mi]:{transfer:Ut,primaries:Dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zl]:{transfer:Nl,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(nm),fromReference:s=>s.applyMatrix3(tm)},[rf]:{transfer:Ut,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(nm),fromReference:s=>s.applyMatrix3(tm).convertLinearToSRGB()}},hx=new Set([_r,zl]),Tt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!hx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=La[e].toReference,o=La[n].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return La[s].primaries},getTransfer:function(s){return s===hr?Nl:La[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(La[e].luminanceCoefficients)}};function zs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class px{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Fl("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=zs(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zs(n[r]/255)*255):n[r]=zs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mx=0;class yg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Pu(o[u].image)):c.push(Pu(o[u]))}else c=Pu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?px.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gx=0;class Ln extends Xs{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Vr,o=Vr,c=oi,u=Gr,f=ci,p=Oi,m=Ln.DEFAULT_ANISOTROPY,_=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Wa(),this.name="",this.source=new yg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=ag;Ln.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,r=0,o=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],_=p[4],y=p[8],x=p[1],S=p[5],T=p[9],C=p[2],v=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(y-C)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+C)<.1&&Math.abs(T+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,N=(S+1)/2,X=(g+1)/2,k=(_+x)/4,U=(y+C)/4,W=(T+v)/4;return b>N&&b>X?b<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(b),o=k/r,c=U/r):N>X?N<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),r=k/o,c=W/o):X<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(X),r=U/c,o=W/c),this.set(r,o,c,n),this}let L=Math.sqrt((v-T)*(v-T)+(y-C)*(y-C)+(x-_)*(x-_));return Math.abs(L)<.001&&(L=1),this.x=(v-T)/L,this.y=(y-C)/L,this.z=(x-_)/L,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vx extends Xs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Ln(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new yg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends vx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Sg extends Ln{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _x extends Ln{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let p=r[o+0],m=r[o+1],_=r[o+2],y=r[o+3];const x=c[u+0],S=c[u+1],T=c[u+2],C=c[u+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=C;return}if(y!==C||p!==x||m!==S||_!==T){let v=1-f;const g=p*x+m*S+_*T+y*C,L=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const X=Math.sqrt(b),k=Math.atan2(X,g*L);v=Math.sin(v*k)/X,f=Math.sin(f*k)/X}const N=f*L;if(p=p*v+x*N,m=m*v+S*N,_=_*v+T*N,y=y*v+C*N,v===1-f){const X=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=X,m*=X,_*=X,y*=X}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],p=r[o+1],m=r[o+2],_=r[o+3],y=c[u],x=c[u+1],S=c[u+2],T=c[u+3];return e[n]=f*T+_*y+p*S-m*x,e[n+1]=p*T+_*x+m*y-f*S,e[n+2]=m*T+_*S+f*x-p*y,e[n+3]=_*T-f*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(o/2),y=f(c/2),x=p(r/2),S=p(o/2),T=p(c/2);switch(u){case"XYZ":this._x=x*_*y+m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y-x*S*T;break;case"YXZ":this._x=x*_*y+m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y+x*S*T;break;case"ZXY":this._x=x*_*y-m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y-x*S*T;break;case"ZYX":this._x=x*_*y-m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y+x*S*T;break;case"YZX":this._x=x*_*y+m*S*T,this._y=m*S*y+x*_*T,this._z=m*_*T-x*S*y,this._w=m*_*y-x*S*T;break;case"XZY":this._x=x*_*y-m*S*T,this._y=m*S*y-x*_*T,this._z=m*_*T+x*S*y,this._w=m*_*y+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],m=n[2],_=n[6],y=n[10],x=r+f+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(u-o)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(_-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+m)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(c-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(u-o)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+u*f+o*m-c*p,this._y=o*_+u*p+c*f-r*m,this._z=c*_+u*m+r*p-o*f,this._w=u*_-r*f-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,f),y=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=u*y+this._w*x,this._x=r*y+this._x*x,this._y=o*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*o-f*r),_=2*(f*n-c*o),y=2*(c*r-u*n);return this.x=n+p*m+u*y-f*_,this.y=r+p*_+f*m-c*y,this.z=o+p*y+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new Y,im=new ja;class Xa{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ri):ri.fromBufferAttribute(c,u),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),il.subVectors(this.max,Na),Ss.subVectors(e.a,Na),Ms.subVectors(e.b,Na),Es.subVectors(e.c,Na),or.subVectors(Ms,Ss),lr.subVectors(Es,Ms),Nr.subVectors(Ss,Es);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Nr.z,Nr.y,or.z,0,-or.x,lr.z,0,-lr.x,Nr.z,0,-Nr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Nr.y,Nr.x,0];return!Nu(n,Ss,Ms,Es,il)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,Ss,Ms,Es,il))?!1:(rl.crossVectors(or,lr),n=[rl.x,rl.y,rl.z],Nu(n,Ss,Ms,Es,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ri=new Y,nl=new Xa,Ss=new Y,Ms=new Y,Es=new Y,or=new Y,lr=new Y,Nr=new Y,Na=new Y,il=new Y,rl=new Y,Dr=new Y;function Nu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Dr.fromArray(s,c);const f=o.x*Math.abs(Dr.x)+o.y*Math.abs(Dr.y)+o.z*Math.abs(Dr.z),p=e.dot(Dr),m=n.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const xx=new Xa,Da=new Y,Du=new Y;class Bl{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):xx.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const n=Da.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Du)),this.expandByPoint(Da.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new Y,Iu=new Y,sl=new Y,cr=new Y,Uu=new Y,al=new Y,Fu=new Y;class Mg{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Iu.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Iu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(sl),f=cr.dot(this.direction),p=-cr.dot(sl),m=cr.lengthSq(),_=Math.abs(1-u*u);let y,x,S,T;if(_>0)if(y=u*p-f,x=u*f-p,T=c*_,y>=0)if(x>=-T)if(x<=T){const C=1/_;y*=C,x*=C,S=y*(y+u*x+2*f)+x*(u*y+x+2*p)+m}else x=c,y=Math.max(0,-(u*x+f)),S=-y*y+x*(x+2*p)+m;else x=-c,y=Math.max(0,-(u*x+f)),S=-y*y+x*(x+2*p)+m;else x<=-T?(y=Math.max(0,-(-u*c+f)),x=y>0?-c:Math.min(Math.max(-c,-p),c),S=-y*y+x*(x+2*p)+m):x<=T?(y=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(y=Math.max(0,-(u*c+f)),x=y>0?c:Math.min(Math.max(-c,-p),c),S=-y*y+x*(x+2*p)+m);else x=u>0?-c:c,y=Math.max(0,-(u*x+f)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Iu).addScaledVector(sl,x),S}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const r=Pi.dot(this.direction),o=Pi.dot(Pi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),_>=0?(c=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(f=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,r,o,c){Uu.subVectors(n,e),al.subVectors(r,e),Fu.crossVectors(Uu,al);let u=this.direction.dot(Fu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;cr.subVectors(this.origin,e);const p=f*this.direction.dot(al.crossVectors(cr,al));if(p<0)return null;const m=f*this.direction.dot(Uu.cross(cr));if(m<0||p+m>u)return null;const _=-f*cr.dot(Fu);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,r,o,c,u,f,p,m,_,y,x,S,T,C,v){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,p,m,_,y,x,S,T,C,v)}set(e,n,r,o,c,u,f,p,m,_,y,x,S,T,C,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=o,g[1]=c,g[5]=u,g[9]=f,g[13]=p,g[2]=m,g[6]=_,g[10]=y,g[14]=x,g[3]=S,g[7]=T,g[11]=C,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/ws.setFromMatrixColumn(e,0).length(),c=1/ws.setFromMatrixColumn(e,1).length(),u=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),_=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=u*_,S=u*y,T=f*_,C=f*y;n[0]=p*_,n[4]=-p*y,n[8]=m,n[1]=S+T*m,n[5]=x-C*m,n[9]=-f*p,n[2]=C-x*m,n[6]=T+S*m,n[10]=u*p}else if(e.order==="YXZ"){const x=p*_,S=p*y,T=m*_,C=m*y;n[0]=x+C*f,n[4]=T*f-S,n[8]=u*m,n[1]=u*y,n[5]=u*_,n[9]=-f,n[2]=S*f-T,n[6]=C+x*f,n[10]=u*p}else if(e.order==="ZXY"){const x=p*_,S=p*y,T=m*_,C=m*y;n[0]=x-C*f,n[4]=-u*y,n[8]=T+S*f,n[1]=S+T*f,n[5]=u*_,n[9]=C-x*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const x=u*_,S=u*y,T=f*_,C=f*y;n[0]=p*_,n[4]=T*m-S,n[8]=x*m+C,n[1]=p*y,n[5]=C*m+x,n[9]=S*m-T,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const x=u*p,S=u*m,T=f*p,C=f*m;n[0]=p*_,n[4]=C-x*y,n[8]=T*y+S,n[1]=y,n[5]=u*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*y+T,n[10]=x-C*y}else if(e.order==="XZY"){const x=u*p,S=u*m,T=f*p,C=f*m;n[0]=p*_,n[4]=-y,n[8]=m*_,n[1]=x*y+C,n[5]=u*_,n[9]=S*y-T,n[2]=T*y-S,n[6]=f*_,n[10]=C*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yx,e,Sx)}lookAt(e,n,r){const o=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ur.crossVectors(r,zn),ur.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ur.crossVectors(r,zn)),ur.normalize(),ol.crossVectors(zn,ur),o[0]=ur.x,o[4]=ol.x,o[8]=zn.x,o[1]=ur.y,o[5]=ol.y,o[9]=zn.y,o[2]=ur.z,o[6]=ol.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],p=r[8],m=r[12],_=r[1],y=r[5],x=r[9],S=r[13],T=r[2],C=r[6],v=r[10],g=r[14],L=r[3],b=r[7],N=r[11],X=r[15],k=o[0],U=o[4],W=o[8],he=o[12],M=o[1],P=o[5],ie=o[9],q=o[13],re=o[2],le=o[6],ee=o[10],ce=o[14],B=o[3],de=o[7],oe=o[11],F=o[15];return c[0]=u*k+f*M+p*re+m*B,c[4]=u*U+f*P+p*le+m*de,c[8]=u*W+f*ie+p*ee+m*oe,c[12]=u*he+f*q+p*ce+m*F,c[1]=_*k+y*M+x*re+S*B,c[5]=_*U+y*P+x*le+S*de,c[9]=_*W+y*ie+x*ee+S*oe,c[13]=_*he+y*q+x*ce+S*F,c[2]=T*k+C*M+v*re+g*B,c[6]=T*U+C*P+v*le+g*de,c[10]=T*W+C*ie+v*ee+g*oe,c[14]=T*he+C*q+v*ce+g*F,c[3]=L*k+b*M+N*re+X*B,c[7]=L*U+b*P+N*le+X*de,c[11]=L*W+b*ie+N*ee+X*oe,c[15]=L*he+b*q+N*ce+X*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],p=e[9],m=e[13],_=e[2],y=e[6],x=e[10],S=e[14],T=e[3],C=e[7],v=e[11],g=e[15];return T*(+c*p*y-o*m*y-c*f*x+r*m*x+o*f*S-r*p*S)+C*(+n*p*S-n*m*x+c*u*x-o*u*S+o*m*_-c*p*_)+v*(+n*m*y-n*f*S-c*u*y+r*u*S+c*f*_-r*m*_)+g*(-o*f*_-n*p*y+n*f*x+o*u*y-r*u*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8],y=e[9],x=e[10],S=e[11],T=e[12],C=e[13],v=e[14],g=e[15],L=y*v*m-C*x*m+C*p*S-f*v*S-y*p*g+f*x*g,b=T*x*m-_*v*m-T*p*S+u*v*S+_*p*g-u*x*g,N=_*C*m-T*y*m+T*f*S-u*C*S-_*f*g+u*y*g,X=T*y*p-_*C*p-T*f*x+u*C*x+_*f*v-u*y*v,k=n*L+r*b+o*N+c*X;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return e[0]=L*U,e[1]=(C*x*c-y*v*c-C*o*S+r*v*S+y*o*g-r*x*g)*U,e[2]=(f*v*c-C*p*c+C*o*m-r*v*m-f*o*g+r*p*g)*U,e[3]=(y*p*c-f*x*c-y*o*m+r*x*m+f*o*S-r*p*S)*U,e[4]=b*U,e[5]=(_*v*c-T*x*c+T*o*S-n*v*S-_*o*g+n*x*g)*U,e[6]=(T*p*c-u*v*c-T*o*m+n*v*m+u*o*g-n*p*g)*U,e[7]=(u*x*c-_*p*c+_*o*m-n*x*m-u*o*S+n*p*S)*U,e[8]=N*U,e[9]=(T*y*c-_*C*c-T*r*S+n*C*S+_*r*g-n*y*g)*U,e[10]=(u*C*c-T*f*c+T*r*m-n*C*m-u*r*g+n*f*g)*U,e[11]=(_*f*c-u*y*c-_*r*m+n*y*m+u*r*S-n*f*S)*U,e[12]=X*U,e[13]=(_*C*o-T*y*o+T*r*x-n*C*x-_*r*v+n*y*v)*U,e[14]=(T*f*o-u*C*o-T*r*p+n*C*p+u*r*v-n*f*v)*U,e[15]=(u*y*o-_*f*o+_*r*p-n*y*p-u*r*x+n*f*x)*U,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,p=e.z,m=c*u,_=c*f;return this.set(m*u+r,m*f-o*p,m*p+o*f,0,m*f+o*p,_*f+r,_*p-o*u,0,m*p-o*f,_*p+o*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,m=c+c,_=u+u,y=f+f,x=c*m,S=c*_,T=c*y,C=u*_,v=u*y,g=f*y,L=p*m,b=p*_,N=p*y,X=r.x,k=r.y,U=r.z;return o[0]=(1-(C+g))*X,o[1]=(S+N)*X,o[2]=(T-b)*X,o[3]=0,o[4]=(S-N)*k,o[5]=(1-(x+g))*k,o[6]=(v+L)*k,o[7]=0,o[8]=(T+b)*U,o[9]=(v-L)*U,o[10]=(1-(x+C))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=ws.set(o[0],o[1],o[2]).length();const u=ws.set(o[4],o[5],o[6]).length(),f=ws.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],si.copy(this);const m=1/c,_=1/u,y=1/f;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=y,si.elements[9]*=y,si.elements[10]*=y,n.setFromRotationMatrix(si),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=ki){const p=this.elements,m=2*c/(n-e),_=2*c/(r-o),y=(n+e)/(n-e),x=(r+o)/(r-o);let S,T;if(f===ki)S=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(f===Ul)S=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=ki){const p=this.elements,m=1/(n-e),_=1/(r-o),y=1/(u-c),x=(n+e)*m,S=(r+o)*_;let T,C;if(f===ki)T=(u+c)*y,C=-2*y;else if(f===Ul)T=c*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=C,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new Y,si=new Ot,yx=new Y(0,0,0),Sx=new Y(1,1,1),ur=new Y,ol=new Y,zn=new Y,rm=new Ot,sm=new ja;class vi{constructor(e=0,n=0,r=0,o=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],p=o[1],m=o[5],_=o[9],y=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Rn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mx=0;const am=new Y,Ts=new ja,Li=new Ot,ll=new Y,Ia=new Y,Ex=new Y,wx=new ja,om=new Y(1,0,0),lm=new Y(0,1,0),cm=new Y(0,0,1),um={type:"added"},Tx={type:"removed"},As={type:"childadded",child:null},ku={type:"childremoved",child:null};class yn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new Y,n=new vi,r=new ja,o=new Y(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new at}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ia,ll,this.up):Li.lookAt(ll,Ia,this.up),this.quaternion.setFromRotationMatrix(Li),o&&(Li.extractRotation(o.matrixWorld),Ts.setFromRotationMatrix(Li),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Tx),ku.child=e,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,Ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];c(e.shapes,y)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),y=u(e.shapes),x=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}yn.DEFAULT_UP=new Y(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new Y,Ni=new Y,Ou=new Y,Di=new Y,Cs=new Y,Rs=new Y,dm=new Y,zu=new Y,Bu=new Y,Hu=new Y,Vu=new bt,Gu=new bt,Wu=new bt;class li{constructor(e=new Y,n=new Y,r=new Y){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ai.subVectors(e,n),o.cross(ai);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){ai.subVectors(o,n),Ni.subVectors(r,n),Ou.subVectors(e,n);const u=ai.dot(ai),f=ai.dot(Ni),p=ai.dot(Ou),m=Ni.dot(Ni),_=Ni.dot(Ou),y=u*m-f*f;if(y===0)return c.set(0,0,0),null;const x=1/y,S=(m*p-f*_)*x,T=(u*_-f*p)*x;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,r,o,c,u,f,p){return this.getBarycoord(e,n,r,o,Di)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Di.x),p.addScaledVector(u,Di.y),p.addScaledVector(f,Di.z),p)}static getInterpolatedAttribute(e,n,r,o,c,u){return Vu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),Vu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,r),Wu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Vu,c.x),u.addScaledVector(Gu,c.y),u.addScaledVector(Wu,c.z),u}static isFrontFacing(e,n,r,o){return ai.subVectors(r,n),Ni.subVectors(e,n),ai.cross(Ni).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ai.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return li.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Cs.subVectors(o,r),Rs.subVectors(c,r),zu.subVectors(e,r);const p=Cs.dot(zu),m=Rs.dot(zu);if(p<=0&&m<=0)return n.copy(r);Bu.subVectors(e,o);const _=Cs.dot(Bu),y=Rs.dot(Bu);if(_>=0&&y<=_)return n.copy(o);const x=p*y-_*m;if(x<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(r).addScaledVector(Cs,u);Hu.subVectors(e,c);const S=Cs.dot(Hu),T=Rs.dot(Hu);if(T>=0&&S<=T)return n.copy(c);const C=S*m-p*T;if(C<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Rs,f);const v=_*T-S*y;if(v<=0&&y-_>=0&&S-T>=0)return dm.subVectors(c,o),f=(y-_)/(y-_+(S-T)),n.copy(o).addScaledVector(dm,f);const g=1/(v+C+x);return u=C*g,f=x*g,n.copy(r).addScaledVector(Cs,u).addScaledVector(Rs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class ot{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=lx(e,1),n=Rn(n,0,1),r=Rn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=ju(u,c,e+1/3),this.g=ju(u,c,e),this.b=ju(u,c,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,n=mi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const r=wg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=bu(e.r),this.g=bu(e.g),this.b=bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Tt.fromWorkingColorSpace(pn.copy(this),e),Math.round(Rn(pn.r*255,0,255))*65536+Math.round(Rn(pn.g*255,0,255))*256+Math.round(Rn(pn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,o=pn.g,c=pn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let p,m;const _=(f+u)/2;if(f===u)p=0,m=0;else{const y=u-f;switch(m=_<=.5?y/(u+f):y/(2-u-f),u){case r:p=(o-c)/y+(o<c?6:0);break;case o:p=(c-r)/y+2;break;case c:p=(r-o)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=mi){Tt.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,o=pn.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(cl);const r=Cu(dr.h,cl.h,n),o=Cu(dr.s,cl.s,n),c=Cu(dr.l,cl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new ot;ot.NAMES=wg;let Ax=0;class qs extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=ks,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rd&&(r.blendSrc=this.blendSrc),this.blendDst!==sd&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tg extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new Y,ul=new ut;class Nn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Qp,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),o=Cn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),o=Cn(o,this.array),c=Cn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qp&&(e.usage=this.usage),e}}class Ag extends Nn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Cg extends Nn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class mn extends Nn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Cx=0;const $n=new Ot,Xu=new yn,bs=new Y,Bn=new Xa,Ua=new Xa,nn=new Y;class Hn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?Cg:Ag)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new at().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new mn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Bn.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Ua.setFromBufferAttribute(f),this.morphTargetsRelative?(nn.addVectors(Bn.min,Ua.min),Bn.expandByPoint(nn),nn.addVectors(Bn.max,Ua.max),Bn.expandByPoint(nn)):(Bn.expandByPoint(Ua.min),Bn.expandByPoint(Ua.max))}Bn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(nn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)nn.fromBufferAttribute(f,m),p&&(bs.fromBufferAttribute(e,m),nn.add(bs)),o=Math.max(o,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let W=0;W<r.count;W++)f[W]=new Y,p[W]=new Y;const m=new Y,_=new Y,y=new Y,x=new ut,S=new ut,T=new ut,C=new Y,v=new Y;function g(W,he,M){m.fromBufferAttribute(r,W),_.fromBufferAttribute(r,he),y.fromBufferAttribute(r,M),x.fromBufferAttribute(c,W),S.fromBufferAttribute(c,he),T.fromBufferAttribute(c,M),_.sub(m),y.sub(m),S.sub(x),T.sub(x);const P=1/(S.x*T.y-T.x*S.y);isFinite(P)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(P),v.copy(y).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(P),f[W].add(C),f[he].add(C),f[M].add(C),p[W].add(v),p[he].add(v),p[M].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,he=L.length;W<he;++W){const M=L[W],P=M.start,ie=M.count;for(let q=P,re=P+ie;q<re;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new Y,N=new Y,X=new Y,k=new Y;function U(W){X.fromBufferAttribute(o,W),k.copy(X);const he=f[W];b.copy(he),b.sub(X.multiplyScalar(X.dot(he))).normalize(),N.crossVectors(k,he);const P=N.dot(p[W])<0?-1:1;u.setXYZW(W,b.x,b.y,b.z,P)}for(let W=0,he=L.length;W<he;++W){const M=L[W],P=M.start,ie=M.count;for(let q=P,re=P+ie;q<re;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new Y,c=new Y,u=new Y,f=new Y,p=new Y,m=new Y,_=new Y,y=new Y;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),C=e.getX(x+1),v=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),_.subVectors(u,c),y.subVectors(o,c),_.cross(y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),f.add(_),p.add(_),m.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),_.subVectors(u,c),y.subVectors(o,c),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,y=f.normalized,x=new m.constructor(p.length*_);let S=0,T=0;for(let C=0,v=p.length;C<v;C++){f.isInterleavedBufferAttribute?S=p[C]*f.data.stride+f.offset:S=p[C]*_;for(let g=0;g<_;g++)x[T++]=m[S++]}return new Nn(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let _=0,y=m.length;_<y;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(o[p]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],y=c[m];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Ot,Ir=new Mg,dl=new Bl,hm=new Y,fl=new Y,hl=new Y,pl=new Y,qu=new Y,ml=new Y,pm=new Y,gl=new Y;class bn extends yn{constructor(e=new Hn,n=new Tg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){ml.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=f[p],y=c[p];_!==0&&(qu.fromBufferAttribute(y,e),u?ml.addScaledVector(qu,_):ml.addScaledVector(qu.sub(n),_))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dl.copy(r.boundingSphere),dl.applyMatrix4(c),Ir.copy(e.ray).recast(e.near),!(dl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(dl,hm)===null||Ir.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(fm.copy(c).invert(),Ir.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,x=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,C=x.length;T<C;T++){const v=x[T],g=u[v.materialIndex],L=Math.max(v.start,S.start),b=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let N=L,X=b;N<X;N+=3){const k=f.getX(N),U=f.getX(N+1),W=f.getX(N+2);o=vl(this,g,e,r,m,_,y,k,U,W),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let v=T,g=C;v<g;v+=3){const L=f.getX(v),b=f.getX(v+1),N=f.getX(v+2);o=vl(this,u,e,r,m,_,y,L,b,N),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,C=x.length;T<C;T++){const v=x[T],g=u[v.materialIndex],L=Math.max(v.start,S.start),b=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let N=L,X=b;N<X;N+=3){const k=N,U=N+1,W=N+2;o=vl(this,g,e,r,m,_,y,k,U,W),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let v=T,g=C;v<g;v+=3){const L=v,b=v+1,N=v+2;o=vl(this,u,e,r,m,_,y,L,b,N),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function Rx(s,e,n,r,o,c,u,f){let p;if(e.side===Pn?p=r.intersectTriangle(u,c,o,!0,f):p=r.intersectTriangle(o,c,u,e.side===gr,f),p===null)return null;gl.copy(f),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function vl(s,e,n,r,o,c,u,f,p,m){s.getVertexPosition(f,fl),s.getVertexPosition(p,hl),s.getVertexPosition(m,pl);const _=Rx(s,e,n,r,fl,hl,pl,pm);if(_){const y=new Y;li.getBarycoord(pm,fl,hl,pl,y),o&&(_.uv=li.getInterpolatedAttribute(o,f,p,m,y,new ut)),c&&(_.uv1=li.getInterpolatedAttribute(c,f,p,m,y,new ut)),u&&(_.normal=li.getInterpolatedAttribute(u,f,p,m,y,new Y),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new Y,materialIndex:0};li.getNormal(fl,hl,pl,x.normal),_.face=x,_.barycoord=y}return _}class qa extends Hn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],_=[],y=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(_,3)),this.setAttribute("uv",new mn(y,2));function T(C,v,g,L,b,N,X,k,U,W,he){const M=N/U,P=X/W,ie=N/2,q=X/2,re=k/2,le=U+1,ee=W+1;let ce=0,B=0;const de=new Y;for(let oe=0;oe<ee;oe++){const F=oe*P-q;for(let se=0;se<le;se++){const Ue=se*M-ie;de[C]=Ue*L,de[v]=F*b,de[g]=re,m.push(de.x,de.y,de.z),de[C]=0,de[v]=0,de[g]=k>0?1:-1,_.push(de.x,de.y,de.z),y.push(se/U),y.push(1-oe/W),ce+=1}}for(let oe=0;oe<W;oe++)for(let F=0;F<U;F++){const se=x+F+le*oe,Ue=x+F+le*(oe+1),Q=x+(F+1)+le*(oe+1),ue=x+(F+1)+le*oe;p.push(se,Ue,ue),p.push(Ue,Q,ue),B+=6}f.addGroup(S,B,he),S+=B,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const o in r)e[o]=r[o]}return e}function bx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Px={clone:js,merge:_n};var Lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lx,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class bg extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new Y,mm=new ut,gm=new ut;class xn extends bg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,mm,gm),n.subVectors(gm,mm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class Dx extends yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new xn(Ps,Ls,e,n);o.layers=this.layers,this.add(o);const c=new xn(Ps,Ls,e,n);c.layers=this.layers,this.add(c);const u=new xn(Ps,Ls,e,n);u.layers=this.layers,this.add(u);const f=new xn(Ps,Ls,e,n);f.layers=this.layers,this.add(f);const p=new xn(Ps,Ls,e,n);p.layers=this.layers,this.add(p);const m=new xn(Ps,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,p]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ul)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,m,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(n,_),e.setRenderTarget(y,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Pg extends Ln{constructor(e,n,r,o,c,u,f,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,r,o,c,u,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ix extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Pg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new qa(5,5,5),c=new vr({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:pr});c.uniforms.tEquirect.value=n;const u=new bn(o,c),f=n.minFilter;return n.minFilter===Gr&&(n.minFilter=oi),new Dx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}const Yu=new Y,Ux=new Y,Fx=new at;class Or{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Yu.subVectors(r,n).cross(Ux.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Yu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Fx.getNormalMatrix(e),o=this.coplanarPoint(Yu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Bl,_l=new Y;class sf{constructor(e=new Or,n=new Or,r=new Or,o=new Or,c=new Or,u=new Or){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,o=e.elements,c=o[0],u=o[1],f=o[2],p=o[3],m=o[4],_=o[5],y=o[6],x=o[7],S=o[8],T=o[9],C=o[10],v=o[11],g=o[12],L=o[13],b=o[14],N=o[15];if(r[0].setComponents(p-c,x-m,v-S,N-g).normalize(),r[1].setComponents(p+c,x+m,v+S,N+g).normalize(),r[2].setComponents(p+u,x+_,v+T,N+L).normalize(),r[3].setComponents(p-u,x-_,v-T,N-L).normalize(),r[4].setComponents(p-f,x-y,v-C,N-b).normalize(),n===ki)r[5].setComponents(p+f,x+y,v+C,N+b).normalize();else if(n===Ul)r[5].setComponents(f,y,C,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(_l.x=o.normal.x>0?e.max.x:e.min.x,_l.y=o.normal.y>0?e.max.y:e.min.y,_l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function kx(s){const e=new WeakMap;function n(f,p){const m=f.array,_=f.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,p,m){const _=p.array,y=p.updateRanges;if(s.bindBuffer(m,f),y.length===0)s.bufferSubData(m,0,_);else{y.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<y.length;S++){const T=y[x],C=y[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,y[x]=C)}y.length=x+1;for(let S=0,T=y.length;S<T;S++){const C=y[S];s.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:c,update:u}}class Hl extends Hn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),p=Math.floor(o),m=f+1,_=p+1,y=e/f,x=n/p,S=[],T=[],C=[],v=[];for(let g=0;g<_;g++){const L=g*x-u;for(let b=0;b<m;b++){const N=b*y-c;T.push(N,-L,0),C.push(0,0,1),v.push(b/f),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let L=0;L<f;L++){const b=L+m*g,N=L+m*(g+1),X=L+1+m*(g+1),k=L+1+m*g;S.push(b,N,k),S.push(N,X,k)}this.setIndex(S),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(C,3)),this.setAttribute("uv",new mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
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
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wx=`#ifdef USE_AOMAP
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
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
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
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zx=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oy=`#define PI 3.141592653589793
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
} // validated`,ly=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cy=`vec3 transformedNormal = objectNormal;
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
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,py="gl_FragColor = linearToOutputTexel( gl_FragColor );",my=`
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
}`,gy=`#ifdef USE_ENVMAP
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
#endif`,vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_y=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,My=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
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
}`,Ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uy=`PhysicalMaterial material;
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
#endif`,Fy=`struct PhysicalMaterial {
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
}`,ky=`
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qy=`#if defined( USE_POINTS_UV )
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
#endif`,Yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`#ifdef USE_MORPHTARGETS
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
#endif`,eS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aS=`#ifdef USE_NORMALMAP
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
#endif`,oS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MS=`float getShadowMask() {
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
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,TS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,CS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OS=`uniform sampler2D t2D;
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`#include <common>
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
}`,WS=`#if DEPTH_PACKING == 3200
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
}`,jS=`#define DISTANCE
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
}`,XS=`#define DISTANCE
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`uniform float scale;
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
}`,KS=`uniform vec3 diffuse;
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
}`,ZS=`#include <common>
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
}`,QS=`uniform vec3 diffuse;
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
}`,JS=`#define LAMBERT
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define MATCAP
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
}`,n1=`#define MATCAP
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
}`,i1=`#define NORMAL
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
}`,r1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,a1=`#define PHONG
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
}`,o1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
}`,c1=`#define TOON
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
}`,u1=`#define TOON
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
}`,d1=`uniform float size;
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
}`,f1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,p1=`uniform vec3 color;
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
}`,m1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Ox,alphahash_pars_fragment:zx,alphamap_fragment:Bx,alphamap_pars_fragment:Hx,alphatest_fragment:Vx,alphatest_pars_fragment:Gx,aomap_fragment:Wx,aomap_pars_fragment:jx,batching_pars_vertex:Xx,batching_vertex:qx,begin_vertex:Yx,beginnormal_vertex:$x,bsdfs:Kx,iridescence_fragment:Zx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:ey,clipping_planes_pars_vertex:ty,clipping_planes_vertex:ny,color_fragment:iy,color_pars_fragment:ry,color_pars_vertex:sy,color_vertex:ay,common:oy,cube_uv_reflection_fragment:ly,defaultnormal_vertex:cy,displacementmap_pars_vertex:uy,displacementmap_vertex:dy,emissivemap_fragment:fy,emissivemap_pars_fragment:hy,colorspace_fragment:py,colorspace_pars_fragment:my,envmap_fragment:gy,envmap_common_pars_fragment:vy,envmap_pars_fragment:_y,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Py,envmap_vertex:yy,fog_vertex:Sy,fog_pars_vertex:My,fog_fragment:Ey,fog_pars_fragment:wy,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:Ay,lights_lambert_fragment:Cy,lights_lambert_pars_fragment:Ry,lights_pars_begin:by,lights_toon_fragment:Ly,lights_toon_pars_fragment:Ny,lights_phong_fragment:Dy,lights_phong_pars_fragment:Iy,lights_physical_fragment:Uy,lights_physical_pars_fragment:Fy,lights_fragment_begin:ky,lights_fragment_maps:Oy,lights_fragment_end:zy,logdepthbuf_fragment:By,logdepthbuf_pars_fragment:Hy,logdepthbuf_pars_vertex:Vy,logdepthbuf_vertex:Gy,map_fragment:Wy,map_pars_fragment:jy,map_particle_fragment:Xy,map_particle_pars_fragment:qy,metalnessmap_fragment:Yy,metalnessmap_pars_fragment:$y,morphinstance_vertex:Ky,morphcolor_vertex:Zy,morphnormal_vertex:Qy,morphtarget_pars_vertex:Jy,morphtarget_vertex:eS,normal_fragment_begin:tS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:rS,normal_vertex:sS,normalmap_pars_fragment:aS,clearcoat_normal_fragment_begin:oS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:uS,opaque_fragment:dS,packing:fS,premultiplied_alpha_fragment:hS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:gS,roughnessmap_fragment:vS,roughnessmap_pars_fragment:_S,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:yS,shadowmap_vertex:SS,shadowmask_pars_fragment:MS,skinbase_vertex:ES,skinning_pars_vertex:wS,skinning_vertex:TS,skinnormal_vertex:AS,specularmap_fragment:CS,specularmap_pars_fragment:RS,tonemapping_fragment:bS,tonemapping_pars_fragment:PS,transmission_fragment:LS,transmission_pars_fragment:NS,uv_pars_fragment:DS,uv_pars_vertex:IS,uv_vertex:US,worldpos_vertex:FS,background_vert:kS,background_frag:OS,backgroundCube_vert:zS,backgroundCube_frag:BS,cube_vert:HS,cube_frag:VS,depth_vert:GS,depth_frag:WS,distanceRGBA_vert:jS,distanceRGBA_frag:XS,equirect_vert:qS,equirect_frag:YS,linedashed_vert:$S,linedashed_frag:KS,meshbasic_vert:ZS,meshbasic_frag:QS,meshlambert_vert:JS,meshlambert_frag:e1,meshmatcap_vert:t1,meshmatcap_frag:n1,meshnormal_vert:i1,meshnormal_frag:r1,meshphong_vert:s1,meshphong_frag:a1,meshphysical_vert:o1,meshphysical_frag:l1,meshtoon_vert:c1,meshtoon_frag:u1,points_vert:d1,points_frag:f1,shadow_vert:h1,shadow_frag:p1,sprite_vert:m1,sprite_frag:g1},Re={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},gi={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};gi.physical={uniforms:_n([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const xl={r:0,b:0,g:0},Fr=new vi,v1=new Ot;function _1(s,e,n,r,o,c,u){const f=new ot(0);let p=c===!0?0:1,m,_,y=null,x=0,S=null;function T(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?n:e).get(b)),b}function C(L){let b=!1;const N=T(L);N===null?g(f,p):N&&N.isColor&&(g(N,1),b=!0);const X=s.xr.getEnvironmentBlendMode();X==="additive"?r.buffers.color.setClear(0,0,0,1,u):X==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(L,b){const N=T(b);N&&(N.isCubeTexture||N.mapping===Ol)?(_===void 0&&(_=new bn(new qa(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:js(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(X,k,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),Fr.copy(b.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(Fr)),_.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Ut,(y!==N||x!==N.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=N,x=N.version,S=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new bn(new Hl(2,2),new vr({name:"BackgroundMaterial",uniforms:js(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Ut,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(y!==N||x!==N.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=N,x=N.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,b){L.getRGB(xl,Rg(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,b,u)}return{getClearColor:function(){return f},setClearColor:function(L,b=1){f.set(L),p=b,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(f,p)},render:C,addToRenderList:v}}function x1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,u=!1;function f(M,P,ie,q,re){let le=!1;const ee=y(q,ie,P);c!==ee&&(c=ee,m(c.object)),le=S(M,q,ie,re),le&&T(M,q,ie,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,N(M,P,ie,q),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return s.createVertexArray()}function m(M){return s.bindVertexArray(M)}function _(M){return s.deleteVertexArray(M)}function y(M,P,ie){const q=ie.wireframe===!0;let re=r[M.id];re===void 0&&(re={},r[M.id]=re);let le=re[P.id];le===void 0&&(le={},re[P.id]=le);let ee=le[q];return ee===void 0&&(ee=x(p()),le[q]=ee),ee}function x(M){const P=[],ie=[],q=[];for(let re=0;re<n;re++)P[re]=0,ie[re]=0,q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:ie,attributeDivisors:q,object:M,attributes:{},index:null}}function S(M,P,ie,q){const re=c.attributes,le=P.attributes;let ee=0;const ce=ie.getAttributes();for(const B in ce)if(ce[B].location>=0){const oe=re[B];let F=le[B];if(F===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;ee++}return c.attributesNum!==ee||c.index!==q}function T(M,P,ie,q){const re={},le=P.attributes;let ee=0;const ce=ie.getAttributes();for(const B in ce)if(ce[B].location>=0){let oe=le[B];oe===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),re[B]=F,ee++}c.attributes=re,c.attributesNum=ee,c.index=q}function C(){const M=c.newAttributes;for(let P=0,ie=M.length;P<ie;P++)M[P]=0}function v(M){g(M,0)}function g(M,P){const ie=c.newAttributes,q=c.enabledAttributes,re=c.attributeDivisors;ie[M]=1,q[M]===0&&(s.enableVertexAttribArray(M),q[M]=1),re[M]!==P&&(s.vertexAttribDivisor(M,P),re[M]=P)}function L(){const M=c.newAttributes,P=c.enabledAttributes;for(let ie=0,q=P.length;ie<q;ie++)P[ie]!==M[ie]&&(s.disableVertexAttribArray(ie),P[ie]=0)}function b(M,P,ie,q,re,le,ee){ee===!0?s.vertexAttribIPointer(M,P,ie,re,le):s.vertexAttribPointer(M,P,ie,q,re,le)}function N(M,P,ie,q){C();const re=q.attributes,le=ie.getAttributes(),ee=P.defaultAttributeValues;for(const ce in le){const B=le[ce];if(B.location>=0){let de=re[ce];if(de===void 0&&(ce==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),ce==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const oe=de.normalized,F=de.itemSize,se=e.get(de);if(se===void 0)continue;const Ue=se.buffer,Q=se.type,ue=se.bytesPerElement,ye=Q===s.INT||Q===s.UNSIGNED_INT||de.gpuType===Zd;if(de.isInterleavedBufferAttribute){const Se=de.data,be=Se.stride,Pe=de.offset;if(Se.isInstancedInterleavedBuffer){for(let tt=0;tt<B.locationSize;tt++)g(B.location+tt,Se.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let tt=0;tt<B.locationSize;tt++)v(B.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let tt=0;tt<B.locationSize;tt++)b(B.location+tt,F/B.locationSize,Q,oe,be*ue,(Pe+F/B.locationSize*tt)*ue,ye)}else{if(de.isInstancedBufferAttribute){for(let Se=0;Se<B.locationSize;Se++)g(B.location+Se,de.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Se=0;Se<B.locationSize;Se++)v(B.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Se=0;Se<B.locationSize;Se++)b(B.location+Se,F/B.locationSize,Q,oe,F*ue,F/B.locationSize*Se*ue,ye)}}else if(ee!==void 0){const oe=ee[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(B.location,oe);break;case 3:s.vertexAttrib3fv(B.location,oe);break;case 4:s.vertexAttrib4fv(B.location,oe);break;default:s.vertexAttrib1fv(B.location,oe)}}}}L()}function X(){W();for(const M in r){const P=r[M];for(const ie in P){const q=P[ie];for(const re in q)_(q[re].object),delete q[re];delete P[ie]}delete r[M]}}function k(M){if(r[M.id]===void 0)return;const P=r[M.id];for(const ie in P){const q=P[ie];for(const re in q)_(q[re].object),delete q[re];delete P[ie]}delete r[M.id]}function U(M){for(const P in r){const ie=r[P];if(ie[M.id]===void 0)continue;const q=ie[M.id];for(const re in q)_(q[re].object),delete q[re];delete ie[M.id]}}function W(){he(),u=!0,c!==o&&(c=o,m(c.object))}function he(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:W,resetDefaultState:he,dispose:X,releaseStatesOfGeometry:k,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:v,disableUnusedAttributes:L}}function y1(s,e,n){let r;function o(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,y){y!==0&&(s.drawArraysInstanced(r,m,_,y),n.update(_,r,y))}function f(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let S=0;for(let T=0;T<y;T++)S+=_[T];n.update(S,r,1)}function p(m,_,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)u(m[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,y);let T=0;for(let C=0;C<y;C++)T+=_[C];for(let C=0;C<x.length;C++)n.update(T,r,x[C])}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function S1(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==ci&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const W=U===Ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Oi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fi&&!W)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const U=e.get("EXT_clip_control");U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:N,vertexTextures:X,maxSamples:k}}function M1(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Or,f=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||o;return o=x,r=y.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,S){const T=y.clippingPlanes,C=y.clipIntersection,v=y.clipShadows,g=s.get(y);if(!o||T===null||T.length===0||c&&!v)c?_(null):m();else{const L=c?0:r,b=L*4;let N=g.clippingState||null;p.value=N,N=_(T,x,b,S);for(let X=0;X!==b;++X)N[X]=n[X];g.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,T){const C=y!==null?y.length:0;let v=null;if(C!==0){if(v=p.value,T!==!0||v===null){const g=S+C*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(v===null||v.length<g)&&(v=new Float32Array(g));for(let b=0,N=S;b!==C;++b,N+=4)u.copy(y[b]).applyMatrix4(L,f),u.normal.toArray(v,N),v[N+3]=u.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}function E1(s){let e=new WeakMap;function n(u,f){return f===hd?u.mapping=Hs:f===pd&&(u.mapping=Vs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===hd||f===pd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new Ix(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class w1 extends bg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,vm=[.125,.215,.35,.446,.526,.582],Hr=20,$u=new w1,_m=new ot;let Ku=null,Zu=0,Qu=0,Ju=!1;const zr=(1+Math.sqrt(5))/2,Ns=1/zr,xm=[new Y(-zr,Ns,0),new Y(zr,Ns,0),new Y(-Ns,0,zr),new Y(Ns,0,zr),new Y(0,zr,-Ns),new Y(0,zr,Ns),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),this._renderer.xr.enabled=Ju,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Ga,format:ci,colorSpace:_r,depthBuffer:!1},o=Sm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T1(c)),this._blurMaterial=A1(c,e,n)}return o}_compileMaterial(e){const n=new bn(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,r,o){const f=new xn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(_m),_.toneMapping=mr,_.autoClear=!1;const S=new Tg({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),T=new bn(new qa,S);let C=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,C=!0):(S.color.copy(_m),C=!0);for(let g=0;g<6;g++){const L=g%3;L===0?(f.up.set(0,p[g],0),f.lookAt(m[g],0,0)):L===1?(f.up.set(0,0,p[g]),f.lookAt(0,m[g],0)):(f.up.set(0,p[g],0),f.lookAt(0,0,m[g]));const b=this._cubeSize;yl(o,L*b,g>2?b:0,b,b),_.setRenderTarget(o),C&&_.render(T,f),_.render(e,f)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Hs||e.mapping===Vs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new bn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;yl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,$u)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=xm[(o-c-1)%xm.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new bn(this._lodPlanes[o],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Hr-1),C=c/T,v=isFinite(c)?1+Math.floor(_*C):Hr;v>Hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Hr}`);const g=[];let L=0;for(let U=0;U<Hr;++U){const W=U/C,he=Math.exp(-W*W/2);g.push(he),U===0?L+=he:U<v&&(L+=2*he)}for(let U=0;U<g.length;U++)g[U]=g[U]/L;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=T,x.mipInt.value=b-r;const N=this._sizeLods[o],X=3*N*(o>b-Us?o-b+Us:0),k=4*(this._cubeSize-N);yl(n,X,k,3*N,2*N),p.setRenderTarget(n),p.render(y,$u)}}function T1(s){const e=[],n=[],r=[];let o=s;const c=s-Us+1+vm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);n.push(f);let p=1/f;u>s-Us?p=vm[u-s+Us-1]:u===0&&(p=0),r.push(p);const m=1/(f-2),_=-m,y=1+m,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,T=6,C=3,v=2,g=1,L=new Float32Array(C*T*S),b=new Float32Array(v*T*S),N=new Float32Array(g*T*S);for(let k=0;k<S;k++){const U=k%3*2/3-1,W=k>2?0:-1,he=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];L.set(he,C*T*k),b.set(x,v*T*k);const M=[k,k,k,k,k,k];N.set(M,g*T*k)}const X=new Hn;X.setAttribute("position",new Nn(L,C)),X.setAttribute("uv",new Nn(b,v)),X.setAttribute("faceIndex",new Nn(N,g)),e.push(X),o>Us&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Sm(s,e,n){const r=new Xr(s,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function A1(s,e,n){const r=new Float32Array(Hr),o=new Y(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:af(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Mm(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Em(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function af(){return`

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
	`}function C1(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===hd||p===pd,_=p===Hs||p===Vs;if(m||_){let y=e.get(f);const x=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new ym(s)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&o(S)?(n===null&&(n=new ym(s)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",c),y.texture):null}}}return f}function o(f){let p=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function R1(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&bl("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function b1(s,e,n,r){const o={},c=new WeakMap;function u(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const C=x.morphAttributes[T];for(let v=0,g=C.length;v<g;v++)e.remove(C[v])}x.removeEventListener("dispose",u),delete o[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(y,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const C=S[T];for(let v=0,g=C.length;v<g;v++)e.update(C[v],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,T=y.attributes.position;let C=0;if(S!==null){const L=S.array;C=S.version;for(let b=0,N=L.length;b<N;b+=3){const X=L[b+0],k=L[b+1],U=L[b+2];x.push(X,k,k,U,U,X)}}else if(T!==void 0){const L=T.array;C=T.version;for(let b=0,N=L.length/3-1;b<N;b+=3){const X=b+0,k=b+1,U=b+2;x.push(X,k,k,U,U,X)}}else return;const v=new(xg(x)?Cg:Ag)(x,1);v.version=C;const g=c.get(y);g&&e.remove(g),c.set(y,v)}function _(y){const x=c.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return c.get(y)}return{get:f,update:p,getWireframeAttribute:_}}function P1(s,e,n){let r;function o(x){r=x}let c,u;function f(x){c=x.type,u=x.bytesPerElement}function p(x,S){s.drawElements(r,S,c,x*u),n.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,c,x*u,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,T);let v=0;for(let g=0;g<T;g++)v+=S[g];n.update(v,r,1)}function y(x,S,T,C){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)m(x[g]/u,S[g],C[g]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,C,0,T);let g=0;for(let L=0;L<T;L++)g+=S[L];for(let L=0;L<C.length;L++)n.update(g,r,C[L])}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function L1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function N1(s,e,n){const r=new WeakMap,o=new bt;function c(u,f,p){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let M=function(){W.dispose(),r.delete(f),f.removeEventListener("dispose",M)};var S=M;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),v===!0&&(N=3);let X=f.attributes.position.count*N,k=1;X>e.maxTextureSize&&(k=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const U=new Float32Array(X*k*4*y),W=new Sg(U,X,k,y);W.type=Fi,W.needsUpdate=!0;const he=N*4;for(let P=0;P<y;P++){const ie=g[P],q=L[P],re=b[P],le=X*k*4*P;for(let ee=0;ee<ie.count;ee++){const ce=ee*he;T===!0&&(o.fromBufferAttribute(ie,ee),U[le+ce+0]=o.x,U[le+ce+1]=o.y,U[le+ce+2]=o.z,U[le+ce+3]=0),C===!0&&(o.fromBufferAttribute(q,ee),U[le+ce+4]=o.x,U[le+ce+5]=o.y,U[le+ce+6]=o.z,U[le+ce+7]=0),v===!0&&(o.fromBufferAttribute(re,ee),U[le+ce+8]=o.x,U[le+ce+9]=o.y,U[le+ce+10]=o.z,U[le+ce+11]=re.itemSize===4?o.w:1)}}x={count:y,texture:W,size:new ut(X,k)},r.set(f,x),f.addEventListener("dispose",M)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const C=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function D1(s,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return y}function u(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Ng extends Ln{constructor(e,n,r,o,c,u,f,p,m,_=Os){if(_!==Os&&_!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=jr),r===void 0&&_===Ws&&(r=Gs),super(null,o,c,u,f,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Kn,this.minFilter=p!==void 0?p:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Dg=new Ln,wm=new Ng(1,1),Ig=new Sg,Ug=new _x,Fg=new Pg,Tm=[],Am=[],Cm=new Float32Array(16),Rm=new Float32Array(9),bm=new Float32Array(4);function Ys(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Tm[o];if(c===void 0&&(c=new Float32Array(o),Tm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Vl(s,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function I1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function U1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function F1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function k1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function O1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;bm.set(r),s.uniformMatrix2fv(this.addr,!1,bm),Kt(n,r)}}function z1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),Kt(n,r)}}function B1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Cm.set(r),s.uniformMatrix4fv(this.addr,!1,Cm),Kt(n,r)}}function H1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function V1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function G1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function W1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function j1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function X1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function q1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function Y1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function $1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(wm.compareFunction=_g,c=wm):c=Dg,n.setTexture2D(e||c,o)}function K1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Ug,o)}function Z1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Fg,o)}function Q1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Ig,o)}function J1(s){switch(s){case 5126:return I1;case 35664:return U1;case 35665:return F1;case 35666:return k1;case 35674:return O1;case 35675:return z1;case 35676:return B1;case 5124:case 35670:return H1;case 35667:case 35671:return V1;case 35668:case 35672:return G1;case 35669:case 35673:return W1;case 5125:return j1;case 36294:return X1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return Q1}}function eM(s,e){s.uniform1fv(this.addr,e)}function tM(s,e){const n=Ys(e,this.size,2);s.uniform2fv(this.addr,n)}function nM(s,e){const n=Ys(e,this.size,3);s.uniform3fv(this.addr,n)}function iM(s,e){const n=Ys(e,this.size,4);s.uniform4fv(this.addr,n)}function rM(s,e){const n=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function sM(s,e){const n=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function aM(s,e){const n=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function oM(s,e){s.uniform1iv(this.addr,e)}function lM(s,e){s.uniform2iv(this.addr,e)}function cM(s,e){s.uniform3iv(this.addr,e)}function uM(s,e){s.uniform4iv(this.addr,e)}function dM(s,e){s.uniform1uiv(this.addr,e)}function fM(s,e){s.uniform2uiv(this.addr,e)}function hM(s,e){s.uniform3uiv(this.addr,e)}function pM(s,e){s.uniform4uiv(this.addr,e)}function mM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Dg,c[u])}function gM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Ug,c[u])}function vM(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Fg,c[u])}function _M(s,e,n){const r=this.cache,o=e.length,c=Vl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Ig,c[u])}function xM(s){switch(s){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return aM;case 5124:case 35670:return oM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return fM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return _M}}class yM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=J1(n.type)}}class SM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xM(n.type)}}class MM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function EM(s,e,n){const r=s.name,o=r.length;for(ed.lastIndex=0;;){const c=ed.exec(r),u=ed.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===o){Pm(n,m===void 0?new yM(f,s,e):new SM(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new MM(f),Pm(n,y)),n=y}}}class Pl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);EM(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Lm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const wM=37297;let TM=0;function AM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}function CM(s){const e=Tt.getPrimaries(Tt.workingColorSpace),n=Tt.getPrimaries(s);let r;switch(e===n?r="":e===Il&&n===Dl?r="LinearDisplayP3ToLinearSRGB":e===Dl&&n===Il&&(r="LinearSRGBToLinearDisplayP3"),s){case _r:case zl:return[r,"LinearTransferOETF"];case mi:case rf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Nm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+AM(s.getShaderSource(e),u)}else return o}function RM(s,e){const n=CM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function bM(s,e){let n;switch(e){case W_:n="Linear";break;case j_:n="Reinhard";break;case X_:n="Cineon";break;case q_:n="ACESFilmic";break;case $_:n="AgX";break;case K_:n="Neutral";break;case Y_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new Y;function PM(){Tt.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function NM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function DM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Oa(s){return s!==""}function Dm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(s){return s.replace(IM,FM)}const UM=new Map;function FM(s,e){let n=st[e];if(n===void 0){const r=UM.get(e);if(r!==void 0)n=st[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wd(n)}const kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(s){return s.replace(kM,OM)}function OM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Fm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function zM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function BM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function VM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kd:e="ENVMAP_BLENDING_MULTIPLY";break;case V_:e="ENVMAP_BLENDING_MIX";break;case G_:e="ENVMAP_BLENDING_ADD";break}return e}function GM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function WM(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=zM(n),m=BM(n),_=HM(n),y=VM(n),x=GM(n),S=LM(n),T=NM(c),C=o.createProgram();let v,g,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oa).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oa).join(`
`),g.length>0&&(g+=`
`)):(v=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),g=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?st.tonemapping_pars_fragment:"",n.toneMapping!==mr?bM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,RM("linearToOutputTexel",n.outputColorSpace),PM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),u=Wd(u),u=Dm(u,n),u=Im(u,n),f=Wd(f),f=Dm(f,n),f=Im(f,n),u=Um(u),f=Um(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=L+v+u,N=L+g+f,X=Lm(o,o.VERTEX_SHADER,b),k=Lm(o,o.FRAGMENT_SHADER,N);o.attachShader(C,X),o.attachShader(C,k),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function U(P){if(s.debug.checkShaderErrors){const ie=o.getProgramInfoLog(C).trim(),q=o.getShaderInfoLog(X).trim(),re=o.getShaderInfoLog(k).trim();let le=!0,ee=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,X,k);else{const ce=Nm(o,X,"vertex"),B=Nm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ie+`
`+ce+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(q===""||re==="")&&(ee=!1);ee&&(P.diagnostics={runnable:le,programLog:ie,vertexShader:{log:q,prefix:v},fragmentShader:{log:re,prefix:g}})}o.deleteShader(X),o.deleteShader(k),W=new Pl(o,C),he=DM(o,C)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let he;this.getAttributes=function(){return he===void 0&&U(this),he};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(C,wM)),M},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=k,this}let jM=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new qM(e),n.set(e,r)),r}}class qM{constructor(e){this.id=jM++,this.code=e,this.usedTimes=0}}function YM(s,e,n,r,o,c,u){const f=new Eg,p=new XM,m=new Set,_=[],y=o.logarithmicDepthBuffer,x=o.reverseDepthBuffer,S=o.vertexTextures;let T=o.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return m.add(M),M===0?"uv":`uv${M}`}function g(M,P,ie,q,re){const le=q.fog,ee=re.geometry,ce=M.isMeshStandardMaterial?q.environment:null,B=(M.isMeshStandardMaterial?n:e).get(M.envMap||ce),de=B&&B.mapping===Ol?B.image.height:null,oe=C[M.type];M.precision!==null&&(T=o.getMaxPrecision(M.precision),T!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",T,"instead."));const F=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,se=F!==void 0?F.length:0;let Ue=0;ee.morphAttributes.position!==void 0&&(Ue=1),ee.morphAttributes.normal!==void 0&&(Ue=2),ee.morphAttributes.color!==void 0&&(Ue=3);let Q,ue,ye,Se;if(oe){const Zt=gi[oe];Q=Zt.vertexShader,ue=Zt.fragmentShader}else Q=M.vertexShader,ue=M.fragmentShader,p.update(M),ye=p.getVertexShaderID(M),Se=p.getFragmentShaderID(M);const be=s.getRenderTarget(),Pe=re.isInstancedMesh===!0,tt=re.isBatchedMesh===!0,_t=!!M.map,dt=!!M.matcap,z=!!B,rn=!!M.aoMap,ct=!!M.lightMap,pt=!!M.bumpMap,Ke=!!M.normalMap,Ct=!!M.displacementMap,Qe=!!M.emissiveMap,D=!!M.metalnessMap,A=!!M.roughnessMap,Z=M.anisotropy>0,pe=M.clearcoat>0,_e=M.dispersion>0,fe=M.iridescence>0,Xe=M.sheen>0,Ae=M.transmission>0,Fe=Z&&!!M.anisotropyMap,mt=pe&&!!M.clearcoatMap,Me=pe&&!!M.clearcoatNormalMap,ke=pe&&!!M.clearcoatRoughnessMap,nt=fe&&!!M.iridescenceMap,Je=fe&&!!M.iridescenceThicknessMap,ze=Xe&&!!M.sheenColorMap,ft=Xe&&!!M.sheenRoughnessMap,rt=!!M.specularMap,wt=!!M.specularColorMap,V=!!M.specularIntensityMap,Le=Ae&&!!M.transmissionMap,ae=Ae&&!!M.thicknessMap,me=!!M.gradientMap,Ce=!!M.alphaMap,De=M.alphaTest>0,ht=!!M.alphaHash,zt=!!M.extensions;let sn=mr;M.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(sn=s.toneMapping);const gt={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Q,fragmentShader:ue,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:T,batching:tt,batchingColor:tt&&re._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&re.instanceColor!==null,instancingMorph:Pe&&re.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:_r,alphaToCoverage:!!M.alphaToCoverage,map:_t,matcap:dt,envMap:z,envMapMode:z&&B.mapping,envMapCubeUVHeight:de,aoMap:rn,lightMap:ct,bumpMap:pt,normalMap:Ke,displacementMap:S&&Ct,emissiveMap:Qe,normalMapObjectSpace:Ke&&M.normalMapType===ex,normalMapTangentSpace:Ke&&M.normalMapType===vg,metalnessMap:D,roughnessMap:A,anisotropy:Z,anisotropyMap:Fe,clearcoat:pe,clearcoatMap:mt,clearcoatNormalMap:Me,clearcoatRoughnessMap:ke,dispersion:_e,iridescence:fe,iridescenceMap:nt,iridescenceThicknessMap:Je,sheen:Xe,sheenColorMap:ze,sheenRoughnessMap:ft,specularMap:rt,specularColorMap:wt,specularIntensityMap:V,transmission:Ae,transmissionMap:Le,thicknessMap:ae,gradientMap:me,opaque:M.transparent===!1&&M.blending===ks&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:De,alphaHash:ht,combine:M.combine,mapUv:_t&&v(M.map.channel),aoMapUv:rn&&v(M.aoMap.channel),lightMapUv:ct&&v(M.lightMap.channel),bumpMapUv:pt&&v(M.bumpMap.channel),normalMapUv:Ke&&v(M.normalMap.channel),displacementMapUv:Ct&&v(M.displacementMap.channel),emissiveMapUv:Qe&&v(M.emissiveMap.channel),metalnessMapUv:D&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:Fe&&v(M.anisotropyMap.channel),clearcoatMapUv:mt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(M.sheenRoughnessMap.channel),specularMapUv:rt&&v(M.specularMap.channel),specularColorMapUv:wt&&v(M.specularColorMap.channel),specularIntensityMapUv:V&&v(M.specularIntensityMap.channel),transmissionMapUv:Le&&v(M.transmissionMap.channel),thicknessMapUv:ae&&v(M.thicknessMap.channel),alphaMapUv:Ce&&v(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ke||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!ee.attributes.uv&&(_t||Ce),fog:!!le,useFog:M.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:re.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ue,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&ie.length>0,shadowMapType:s.shadowMap.type,toneMapping:sn,decodeVideoTexture:_t&&M.map.isVideoTexture===!0&&Tt.getTransfer(M.map.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ui,flipSided:M.side===Pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:zt&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&M.extensions.multiDraw===!0||tt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=m.has(1),gt.vertexUv2s=m.has(2),gt.vertexUv3s=m.has(3),m.clear(),gt}function L(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ie in M.defines)P.push(ie),P.push(M.defines[ie]);return M.isRawShaderMaterial===!1&&(b(P,M),N(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function b(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function N(M,P){f.disableAll(),P.supportsVertexTextures&&f.enable(0),P.instancing&&f.enable(1),P.instancingColor&&f.enable(2),P.instancingMorph&&f.enable(3),P.matcap&&f.enable(4),P.envMap&&f.enable(5),P.normalMapObjectSpace&&f.enable(6),P.normalMapTangentSpace&&f.enable(7),P.clearcoat&&f.enable(8),P.iridescence&&f.enable(9),P.alphaTest&&f.enable(10),P.vertexColors&&f.enable(11),P.vertexAlphas&&f.enable(12),P.vertexUv1s&&f.enable(13),P.vertexUv2s&&f.enable(14),P.vertexUv3s&&f.enable(15),P.vertexTangents&&f.enable(16),P.anisotropy&&f.enable(17),P.alphaHash&&f.enable(18),P.batching&&f.enable(19),P.dispersion&&f.enable(20),P.batchingColor&&f.enable(21),M.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.reverseDepthBuffer&&f.enable(4),P.skinning&&f.enable(5),P.morphTargets&&f.enable(6),P.morphNormals&&f.enable(7),P.morphColors&&f.enable(8),P.premultipliedAlpha&&f.enable(9),P.shadowMapEnabled&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),P.alphaToCoverage&&f.enable(20),M.push(f.mask)}function X(M){const P=C[M.type];let ie;if(P){const q=gi[P];ie=Px.clone(q.uniforms)}else ie=M.uniforms;return ie}function k(M,P){let ie;for(let q=0,re=_.length;q<re;q++){const le=_[q];if(le.cacheKey===P){ie=le,++ie.usedTimes;break}}return ie===void 0&&(ie=new WM(s,P,M,c),_.push(ie)),ie}function U(M){if(--M.usedTimes===0){const P=_.indexOf(M);_[P]=_[_.length-1],_.pop(),M.destroy()}}function W(M){p.remove(M)}function he(){p.dispose()}return{getParameters:g,getProgramCacheKey:L,getUniforms:X,acquireProgram:k,releaseProgram:U,releaseShaderCache:W,programs:_,dispose:he}}function $M(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function KM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Om(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(y,x,S,T,C,v){let g=s[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:S,groupOrder:T,renderOrder:y.renderOrder,z:C,group:v},s[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=S,g.groupOrder=T,g.renderOrder=y.renderOrder,g.z=C,g.group=v),e++,g}function f(y,x,S,T,C,v){const g=u(y,x,S,T,C,v);S.transmission>0?r.push(g):S.transparent===!0?o.push(g):n.push(g)}function p(y,x,S,T,C,v){const g=u(y,x,S,T,C,v);S.transmission>0?r.unshift(g):S.transparent===!0?o.unshift(g):n.unshift(g)}function m(y,x){n.length>1&&n.sort(y||KM),r.length>1&&r.sort(x||km),o.length>1&&o.sort(x||km)}function _(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:_,sort:m}}function ZM(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Om,s.set(r,[u])):o>=c.length?(u=new Om,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function QM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new ot};break;case"SpotLight":n={position:new Y,direction:new Y,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=n,n}}}function JM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let eE=0;function tE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nE(s){const e=new QM,n=JM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const o=new Y,c=new Ot,u=new Ot;function f(m){let _=0,y=0,x=0;for(let he=0;he<9;he++)r.probe[he].set(0,0,0);let S=0,T=0,C=0,v=0,g=0,L=0,b=0,N=0,X=0,k=0,U=0;m.sort(tE);for(let he=0,M=m.length;he<M;he++){const P=m[he],ie=P.color,q=P.intensity,re=P.distance,le=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)_+=ie.r*q,y+=ie.g*q,x+=ie.b*q;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(P.sh.coefficients[ee],q);U++}else if(P.isDirectionalLight){const ee=e.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ce=P.shadow,B=n.get(P);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=P.shadow.matrix,L++}r.directional[S]=ee,S++}else if(P.isSpotLight){const ee=e.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(ie).multiplyScalar(q),ee.distance=re,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,r.spot[C]=ee;const ce=P.shadow;if(P.map&&(r.spotLightMap[X]=P.map,X++,ce.updateMatrices(P),P.castShadow&&k++),r.spotLightMatrix[C]=ce.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.spotShadow[C]=B,r.spotShadowMap[C]=le,N++}C++}else if(P.isRectAreaLight){const ee=e.get(P);ee.color.copy(ie).multiplyScalar(q),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=ee,v++}else if(P.isPointLight){const ee=e.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){const ce=P.shadow,B=n.get(P);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=le,r.pointShadowMatrix[T]=P.shadow.matrix,b++}r.point[T]=ee,T++}else if(P.isHemisphereLight){const ee=e.get(P);ee.skyColor.copy(P.color).multiplyScalar(q),ee.groundColor.copy(P.groundColor).multiplyScalar(q),r.hemi[g]=ee,g++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==S||W.pointLength!==T||W.spotLength!==C||W.rectAreaLength!==v||W.hemiLength!==g||W.numDirectionalShadows!==L||W.numPointShadows!==b||W.numSpotShadows!==N||W.numSpotMaps!==X||W.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=v,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=N+X-k,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=U,W.directionalLength=S,W.pointLength=T,W.spotLength=C,W.rectAreaLength=v,W.hemiLength=g,W.numDirectionalShadows=L,W.numPointShadows=b,W.numSpotShadows=N,W.numSpotMaps=X,W.numLightProbes=U,r.version=eE++)}function p(m,_){let y=0,x=0,S=0,T=0,C=0;const v=_.matrixWorldInverse;for(let g=0,L=m.length;g<L;g++){const b=m[g];if(b.isDirectionalLight){const N=r.directional[y];N.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),y++}else if(b.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(v),S++}else if(b.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(v),u.identity(),c.copy(b.matrixWorld),c.premultiply(v),u.extractRotation(c),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),T++}else if(b.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(v),x++}else if(b.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(b.matrixWorld),N.direction.transformDirection(v),C++}}}return{setup:f,setupView:p,state:r}}function zm(s){const e=new nE(s),n=[],r=[];function o(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function iE(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new zm(s),e.set(o,[f])):c>=u.length?(f=new zm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class rE extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sE extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
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
}`;function lE(s,e,n){let r=new sf;const o=new ut,c=new ut,u=new bt,f=new rE({depthPacking:J_}),p=new sE,m={},_=n.maxTextureSize,y={[gr]:Pn,[Pn]:gr,[Ui]:Ui},x=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:aE,fragmentShader:oE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Hn;T.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new bn(T,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sg;let g=this.type;this.render=function(k,U,W){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const he=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(pr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const q=g!==Ii&&this.type===Ii,re=g===Ii&&this.type!==Ii;for(let le=0,ee=k.length;le<ee;le++){const ce=k[le],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const de=B.getFrameExtents();if(o.multiply(de),c.copy(B.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/de.x),o.x=c.x*de.x,B.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/de.y),o.y=c.y*de.y,B.mapSize.y=c.y)),B.map===null||q===!0||re===!0){const F=this.type!==Ii?{minFilter:Kn,magFilter:Kn}:{};B.map!==null&&B.map.dispose(),B.map=new Xr(o.x,o.y,F),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const oe=B.getViewportCount();for(let F=0;F<oe;F++){const se=B.getViewport(F);u.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),ie.viewport(u),B.updateMatrices(ce,F),r=B.getFrustum(),N(U,W,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Ii&&L(B,W),B.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(he,M,P)};function L(k,U){const W=e.update(C);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Xr(o.x,o.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(U,null,W,x,C,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(U,null,W,S,C,null)}function b(k,U,W,he){let M=null;const P=W.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(P!==void 0)M=P;else if(M=W.isPointLight===!0?p:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ie=M.uuid,q=U.uuid;let re=m[ie];re===void 0&&(re={},m[ie]=re);let le=re[q];le===void 0&&(le=M.clone(),re[q]=le,U.addEventListener("dispose",X)),M=le}if(M.visible=U.visible,M.wireframe=U.wireframe,he===Ii?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:y[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,W.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ie=s.properties.get(M);ie.light=W}return M}function N(k,U,W,he,M){if(k.visible===!1)return;if(k.layers.test(U.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&M===Ii)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,k.matrixWorld);const q=e.update(k),re=k.material;if(Array.isArray(re)){const le=q.groups;for(let ee=0,ce=le.length;ee<ce;ee++){const B=le[ee],de=re[B.materialIndex];if(de&&de.visible){const oe=b(k,de,he,M);k.onBeforeShadow(s,k,U,W,q,oe,B),s.renderBufferDirect(W,null,q,oe,k,B),k.onAfterShadow(s,k,U,W,q,oe,B)}}}else if(re.visible){const le=b(k,re,he,M);k.onBeforeShadow(s,k,U,W,q,le,null),s.renderBufferDirect(W,null,q,le,k,null),k.onAfterShadow(s,k,U,W,q,le,null)}}const ie=k.children;for(let q=0,re=ie.length;q<re;q++)N(ie[q],U,W,he,M)}function X(k){k.target.removeEventListener("dispose",X);for(const W in m){const he=m[W],M=k.target.uuid;M in he&&(he[M].dispose(),delete he[M])}}}const cE={[ad]:od,[ld]:dd,[cd]:fd,[Bs]:ud,[od]:ad,[dd]:ld,[fd]:cd,[ud]:Bs};function uE(s){function e(){let V=!1;const Le=new bt;let ae=null;const me=new bt(0,0,0,0);return{setMask:function(Ce){ae!==Ce&&!V&&(s.colorMask(Ce,Ce,Ce,Ce),ae=Ce)},setLocked:function(Ce){V=Ce},setClear:function(Ce,De,ht,zt,sn){sn===!0&&(Ce*=zt,De*=zt,ht*=zt),Le.set(Ce,De,ht,zt),me.equals(Le)===!1&&(s.clearColor(Ce,De,ht,zt),me.copy(Le))},reset:function(){V=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let V=!1,Le=!1,ae=null,me=null,Ce=null;return{setReversed:function(De){Le=De},setTest:function(De){De?ye(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(De){ae!==De&&!V&&(s.depthMask(De),ae=De)},setFunc:function(De){if(Le&&(De=cE[De]),me!==De){switch(De){case ad:s.depthFunc(s.NEVER);break;case od:s.depthFunc(s.ALWAYS);break;case ld:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case cd:s.depthFunc(s.EQUAL);break;case ud:s.depthFunc(s.GEQUAL);break;case dd:s.depthFunc(s.GREATER);break;case fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=De}},setLocked:function(De){V=De},setClear:function(De){Ce!==De&&(s.clearDepth(De),Ce=De)},reset:function(){V=!1,ae=null,me=null,Ce=null}}}function r(){let V=!1,Le=null,ae=null,me=null,Ce=null,De=null,ht=null,zt=null,sn=null;return{setTest:function(gt){V||(gt?ye(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(gt){Le!==gt&&!V&&(s.stencilMask(gt),Le=gt)},setFunc:function(gt,Zt,Vn){(ae!==gt||me!==Zt||Ce!==Vn)&&(s.stencilFunc(gt,Zt,Vn),ae=gt,me=Zt,Ce=Vn)},setOp:function(gt,Zt,Vn){(De!==gt||ht!==Zt||zt!==Vn)&&(s.stencilOp(gt,Zt,Vn),De=gt,ht=Zt,zt=Vn)},setLocked:function(gt){V=gt},setClear:function(gt){sn!==gt&&(s.clearStencil(gt),sn=gt)},reset:function(){V=!1,Le=null,ae=null,me=null,Ce=null,De=null,ht=null,zt=null,sn=null}}}const o=new e,c=new n,u=new r,f=new WeakMap,p=new WeakMap;let m={},_={},y=new WeakMap,x=[],S=null,T=!1,C=null,v=null,g=null,L=null,b=null,N=null,X=null,k=new ot(0,0,0),U=0,W=!1,he=null,M=null,P=null,ie=null,q=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ee=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ce)[1]),le=ee>=1):ce.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),le=ee>=2);let B=null,de={};const oe=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),se=new bt().fromArray(oe),Ue=new bt().fromArray(F);function Q(V,Le,ae,me){const Ce=new Uint8Array(4),De=s.createTexture();s.bindTexture(V,De),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<ae;ht++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Le+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return De}const ue={};ue[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ye(s.DEPTH_TEST),c.setFunc(Bs),ct(!1),pt(qp),ye(s.CULL_FACE),z(pr);function ye(V){m[V]!==!0&&(s.enable(V),m[V]=!0)}function Se(V){m[V]!==!1&&(s.disable(V),m[V]=!1)}function be(V,Le){return _[V]!==Le?(s.bindFramebuffer(V,Le),_[V]=Le,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Pe(V,Le){let ae=x,me=!1;if(V){ae=y.get(Le),ae===void 0&&(ae=[],y.set(Le,ae));const Ce=V.textures;if(ae.length!==Ce.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let De=0,ht=Ce.length;De<ht;De++)ae[De]=s.COLOR_ATTACHMENT0+De;ae.length=Ce.length,me=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,me=!0);me&&s.drawBuffers(ae)}function tt(V){return S!==V?(s.useProgram(V),S=V,!0):!1}const _t={[Br]:s.FUNC_ADD,[T_]:s.FUNC_SUBTRACT,[A_]:s.FUNC_REVERSE_SUBTRACT};_t[C_]=s.MIN,_t[R_]=s.MAX;const dt={[b_]:s.ZERO,[P_]:s.ONE,[L_]:s.SRC_COLOR,[rd]:s.SRC_ALPHA,[k_]:s.SRC_ALPHA_SATURATE,[U_]:s.DST_COLOR,[D_]:s.DST_ALPHA,[N_]:s.ONE_MINUS_SRC_COLOR,[sd]:s.ONE_MINUS_SRC_ALPHA,[F_]:s.ONE_MINUS_DST_COLOR,[I_]:s.ONE_MINUS_DST_ALPHA,[O_]:s.CONSTANT_COLOR,[z_]:s.ONE_MINUS_CONSTANT_COLOR,[B_]:s.CONSTANT_ALPHA,[H_]:s.ONE_MINUS_CONSTANT_ALPHA};function z(V,Le,ae,me,Ce,De,ht,zt,sn,gt){if(V===pr){T===!0&&(Se(s.BLEND),T=!1);return}if(T===!1&&(ye(s.BLEND),T=!0),V!==w_){if(V!==C||gt!==W){if((v!==Br||b!==Br)&&(s.blendEquation(s.FUNC_ADD),v=Br,b=Br),gt)switch(V){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yp:s.blendFunc(s.ONE,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}g=null,L=null,N=null,X=null,k.set(0,0,0),U=0,C=V,W=gt}return}Ce=Ce||Le,De=De||ae,ht=ht||me,(Le!==v||Ce!==b)&&(s.blendEquationSeparate(_t[Le],_t[Ce]),v=Le,b=Ce),(ae!==g||me!==L||De!==N||ht!==X)&&(s.blendFuncSeparate(dt[ae],dt[me],dt[De],dt[ht]),g=ae,L=me,N=De,X=ht),(zt.equals(k)===!1||sn!==U)&&(s.blendColor(zt.r,zt.g,zt.b,sn),k.copy(zt),U=sn),C=V,W=!1}function rn(V,Le){V.side===Ui?Se(s.CULL_FACE):ye(s.CULL_FACE);let ae=V.side===Pn;Le&&(ae=!ae),ct(ae),V.blending===ks&&V.transparent===!1?z(pr):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),o.setMask(V.colorWrite);const me=V.stencilWrite;u.setTest(me),me&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ct(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){he!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),he=V)}function pt(V){V!==S_?(ye(s.CULL_FACE),V!==M&&(V===qp?s.cullFace(s.BACK):V===M_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),M=V}function Ke(V){V!==P&&(le&&s.lineWidth(V),P=V)}function Ct(V,Le,ae){V?(ye(s.POLYGON_OFFSET_FILL),(ie!==Le||q!==ae)&&(s.polygonOffset(Le,ae),ie=Le,q=ae)):Se(s.POLYGON_OFFSET_FILL)}function Qe(V){V?ye(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function D(V){V===void 0&&(V=s.TEXTURE0+re-1),B!==V&&(s.activeTexture(V),B=V)}function A(V,Le,ae){ae===void 0&&(B===null?ae=s.TEXTURE0+re-1:ae=B);let me=de[ae];me===void 0&&(me={type:void 0,texture:void 0},de[ae]=me),(me.type!==V||me.texture!==Le)&&(B!==ae&&(s.activeTexture(ae),B=ae),s.bindTexture(V,Le||ue[V]),me.type=V,me.texture=Le)}function Z(){const V=de[B];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){se.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),se.copy(V))}function ze(V){Ue.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ue.copy(V))}function ft(V,Le){let ae=p.get(Le);ae===void 0&&(ae=new WeakMap,p.set(Le,ae));let me=ae.get(V);me===void 0&&(me=s.getUniformBlockIndex(Le,V.name),ae.set(V,me))}function rt(V,Le){const me=p.get(Le).get(V);f.get(Le)!==me&&(s.uniformBlockBinding(Le,me,V.__bindingPointIndex),f.set(Le,me))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},B=null,de={},_={},y=new WeakMap,x=[],S=null,T=!1,C=null,v=null,g=null,L=null,b=null,N=null,X=null,k=new ot(0,0,0),U=0,W=!1,he=null,M=null,P=null,ie=null,q=null,se.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:ye,disable:Se,bindFramebuffer:be,drawBuffers:Pe,useProgram:tt,setBlending:z,setMaterial:rn,setFlipSided:ct,setCullFace:pt,setLineWidth:Ke,setPolygonOffset:Ct,setScissorTest:Qe,activeTexture:D,bindTexture:A,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:ke,texImage3D:nt,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:mt,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:Je,viewport:ze,reset:wt}}function Bm(s,e,n,r){const o=dE(r);switch(n){case ug:return s*e;case fg:return s*e;case hg:return s*e*2;case pg:return s*e/o.components*o.byteLength;case ef:return s*e/o.components*o.byteLength;case mg:return s*e*2/o.components*o.byteLength;case tf:return s*e*2/o.components*o.byteLength;case dg:return s*e*3/o.components*o.byteLength;case ci:return s*e*4/o.components*o.byteLength;case nf:return s*e*4/o.components*o.byteLength;case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:case yd:return Math.max(s,16)*Math.max(e,8)/4;case vd:case xd:return Math.max(s,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Od:case zd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case gg:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dE(s){switch(s){case Oi:case og:return{byteLength:1,components:1};case Ha:case lg:case Ga:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case jr:case Zd:case Fi:return{byteLength:4,components:1};case cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function fE(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,A){return S?new OffscreenCanvas(D,A):Fl("canvas")}function C(D,A,Z){let pe=1;const _e=Qe(D);if((_e.width>Z||_e.height>Z)&&(pe=Z/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(pe*_e.width),Xe=Math.floor(pe*_e.height);y===void 0&&(y=T(fe,Xe));const Ae=A?T(fe,Xe):y;return Ae.width=fe,Ae.height=Xe,Ae.getContext("2d").drawImage(D,0,0,fe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Xe+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function v(D){return D.generateMipmaps&&D.minFilter!==Kn&&D.minFilter!==oi}function g(D){s.generateMipmap(D)}function L(D,A,Z,pe,_e=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=A;if(A===s.RED&&(Z===s.FLOAT&&(fe=s.R32F),Z===s.HALF_FLOAT&&(fe=s.R16F),Z===s.UNSIGNED_BYTE&&(fe=s.R8)),A===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.R8UI),Z===s.UNSIGNED_SHORT&&(fe=s.R16UI),Z===s.UNSIGNED_INT&&(fe=s.R32UI),Z===s.BYTE&&(fe=s.R8I),Z===s.SHORT&&(fe=s.R16I),Z===s.INT&&(fe=s.R32I)),A===s.RG&&(Z===s.FLOAT&&(fe=s.RG32F),Z===s.HALF_FLOAT&&(fe=s.RG16F),Z===s.UNSIGNED_BYTE&&(fe=s.RG8)),A===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Z===s.UNSIGNED_INT&&(fe=s.RG32UI),Z===s.BYTE&&(fe=s.RG8I),Z===s.SHORT&&(fe=s.RG16I),Z===s.INT&&(fe=s.RG32I)),A===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Z===s.UNSIGNED_INT&&(fe=s.RGB32UI),Z===s.BYTE&&(fe=s.RGB8I),Z===s.SHORT&&(fe=s.RGB16I),Z===s.INT&&(fe=s.RGB32I)),A===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Z===s.BYTE&&(fe=s.RGBA8I),Z===s.SHORT&&(fe=s.RGBA16I),Z===s.INT&&(fe=s.RGBA32I)),A===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),A===s.RGBA){const Xe=_e?Nl:Tt.getTransfer(pe);Z===s.FLOAT&&(fe=s.RGBA32F),Z===s.HALF_FLOAT&&(fe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(fe=Xe===Ut?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(D,A){let Z;return D?A===null||A===jr||A===Gs?Z=s.DEPTH24_STENCIL8:A===Fi?Z=s.DEPTH32F_STENCIL8:A===Ha&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===jr||A===Gs?Z=s.DEPTH_COMPONENT24:A===Fi?Z=s.DEPTH_COMPONENT32F:A===Ha&&(Z=s.DEPTH_COMPONENT16),Z}function N(D,A){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==Kn&&D.minFilter!==oi?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function X(D){const A=D.target;A.removeEventListener("dispose",X),U(A),A.isVideoTexture&&_.delete(A)}function k(D){const A=D.target;A.removeEventListener("dispose",k),he(A)}function U(D){const A=r.get(D);if(A.__webglInit===void 0)return;const Z=D.source,pe=x.get(Z);if(pe){const _e=pe[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&W(D),Object.keys(pe).length===0&&x.delete(Z)}r.remove(D)}function W(D){const A=r.get(D);s.deleteTexture(A.__webglTexture);const Z=D.source,pe=x.get(Z);delete pe[A.__cacheKey],u.memory.textures--}function he(D){const A=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let _e=0;_e<A.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(A.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)s.deleteFramebuffer(A.__webglFramebuffer[pe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=D.textures;for(let pe=0,_e=Z.length;pe<_e;pe++){const fe=r.get(Z[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(Z[pe])}r.remove(D)}let M=0;function P(){M=0}function ie(){const D=M;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),M+=1,D}function q(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function re(D,A){const Z=r.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Z,D,A);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+A)}function le(D,A){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Ue(Z,D,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+A)}function ee(D,A){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Ue(Z,D,A);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+A)}function ce(D,A){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+A)}const B={[md]:s.REPEAT,[Vr]:s.CLAMP_TO_EDGE,[gd]:s.MIRRORED_REPEAT},de={[Kn]:s.NEAREST,[Z_]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[oi]:s.LINEAR,[Tu]:s.LINEAR_MIPMAP_NEAREST,[Gr]:s.LINEAR_MIPMAP_LINEAR},oe={[tx]:s.NEVER,[ox]:s.ALWAYS,[nx]:s.LESS,[_g]:s.LEQUAL,[ix]:s.EQUAL,[ax]:s.GEQUAL,[rx]:s.GREATER,[sx]:s.NOTEQUAL};function F(D,A){if(A.type===Fi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===oi||A.magFilter===Tu||A.magFilter===tl||A.magFilter===Gr||A.minFilter===oi||A.minFilter===Tu||A.minFilter===tl||A.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,B[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,B[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,B[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,de[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,de[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Kn||A.minFilter!==tl&&A.minFilter!==Gr||A.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function se(D,A){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",X));const pe=A.source;let _e=x.get(pe);_e===void 0&&(_e={},x.set(pe,_e));const fe=q(A);if(fe!==D.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),_e[fe].usedTimes++;const Xe=_e[D.__cacheKey];Xe!==void 0&&(_e[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&W(A)),D.__cacheKey=fe,D.__webglTexture=_e[fe].texture}return Z}function Ue(D,A,Z){let pe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=se(D,A),fe=A.source;n.bindTexture(pe,D.__webglTexture,s.TEXTURE0+Z);const Xe=r.get(fe);if(fe.version!==Xe.__version||_e===!0){n.activeTexture(s.TEXTURE0+Z);const Ae=Tt.getPrimaries(Tt.workingColorSpace),Fe=A.colorSpace===hr?null:Tt.getPrimaries(A.colorSpace),mt=A.colorSpace===hr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Me=C(A.image,!1,o.maxTextureSize);Me=Ct(A,Me);const ke=c.convert(A.format,A.colorSpace),nt=c.convert(A.type);let Je=L(A.internalFormat,ke,nt,A.colorSpace,A.isVideoTexture);F(pe,A);let ze;const ft=A.mipmaps,rt=A.isVideoTexture!==!0,wt=Xe.__version===void 0||_e===!0,V=fe.dataReady,Le=N(A,Me);if(A.isDepthTexture)Je=b(A.format===Ws,A.type),wt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,ke,nt,null));else if(A.isDataTexture)if(ft.length>0){rt&&wt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,ft[0].width,ft[0].height);for(let ae=0,me=ft.length;ae<me;ae++)ze=ft[ae],rt?V&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,nt,ze.data):n.texImage2D(s.TEXTURE_2D,ae,Je,ze.width,ze.height,0,ke,nt,ze.data);A.generateMipmaps=!1}else rt?(wt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,Me.width,Me.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,nt,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,ke,nt,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){rt&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Je,ft[0].width,ft[0].height,Me.depth);for(let ae=0,me=ft.length;ae<me;ae++)if(ze=ft[ae],A.format!==ci)if(ke!==null)if(rt){if(V)if(A.layerUpdates.size>0){const Ce=Bm(ze.width,ze.height,A.format,A.type);for(const De of A.layerUpdates){const ht=ze.data.subarray(De*Ce/ze.data.BYTES_PER_ELEMENT,(De+1)*Ce/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,De,ze.width,ze.height,1,ke,ht,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Me.depth,ke,ze.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Je,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Me.depth,ke,nt,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,Je,ze.width,ze.height,Me.depth,0,ke,nt,ze.data)}else{rt&&wt&&n.texStorage2D(s.TEXTURE_2D,Le,Je,ft[0].width,ft[0].height);for(let ae=0,me=ft.length;ae<me;ae++)ze=ft[ae],A.format!==ci?ke!==null?rt?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze.width,ze.height,ke,nt,ze.data):n.texImage2D(s.TEXTURE_2D,ae,Je,ze.width,ze.height,0,ke,nt,ze.data)}else if(A.isDataArrayTexture)if(rt){if(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Je,Me.width,Me.height,Me.depth),V)if(A.layerUpdates.size>0){const ae=Bm(Me.width,Me.height,A.format,A.type);for(const me of A.layerUpdates){const Ce=Me.data.subarray(me*ae/Me.data.BYTES_PER_ELEMENT,(me+1)*ae/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,ke,nt,Ce)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,nt,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,ke,nt,Me.data);else if(A.isData3DTexture)rt?(wt&&n.texStorage3D(s.TEXTURE_3D,Le,Je,Me.width,Me.height,Me.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,nt,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,ke,nt,Me.data);else if(A.isFramebufferTexture){if(wt)if(rt)n.texStorage2D(s.TEXTURE_2D,Le,Je,Me.width,Me.height);else{let ae=Me.width,me=Me.height;for(let Ce=0;Ce<Le;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,Je,ae,me,0,ke,nt,null),ae>>=1,me>>=1}}else if(ft.length>0){if(rt&&wt){const ae=Qe(ft[0]);n.texStorage2D(s.TEXTURE_2D,Le,Je,ae.width,ae.height)}for(let ae=0,me=ft.length;ae<me;ae++)ze=ft[ae],rt?V&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke,nt,ze):n.texImage2D(s.TEXTURE_2D,ae,Je,ke,nt,ze);A.generateMipmaps=!1}else if(rt){if(wt){const ae=Qe(Me);n.texStorage2D(s.TEXTURE_2D,Le,Je,ae.width,ae.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,nt,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,ke,nt,Me);v(A)&&g(pe),Xe.__version=fe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Q(D,A,Z){if(A.image.length!==6)return;const pe=se(D,A),_e=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const fe=r.get(_e);if(_e.version!==fe.__version||pe===!0){n.activeTexture(s.TEXTURE0+Z);const Xe=Tt.getPrimaries(Tt.workingColorSpace),Ae=A.colorSpace===hr?null:Tt.getPrimaries(A.colorSpace),Fe=A.colorSpace===hr||Xe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const mt=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,ke=[];for(let me=0;me<6;me++)!mt&&!Me?ke[me]=C(A.image[me],!0,o.maxCubemapSize):ke[me]=Me?A.image[me].image:A.image[me],ke[me]=Ct(A,ke[me]);const nt=ke[0],Je=c.convert(A.format,A.colorSpace),ze=c.convert(A.type),ft=L(A.internalFormat,Je,ze,A.colorSpace),rt=A.isVideoTexture!==!0,wt=fe.__version===void 0||pe===!0,V=_e.dataReady;let Le=N(A,nt);F(s.TEXTURE_CUBE_MAP,A);let ae;if(mt){rt&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ft,nt.width,nt.height);for(let me=0;me<6;me++){ae=ke[me].mipmaps;for(let Ce=0;Ce<ae.length;Ce++){const De=ae[Ce];A.format!==ci?Je!==null?rt?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce,0,0,De.width,De.height,Je,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce,ft,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce,0,0,De.width,De.height,Je,ze,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce,ft,De.width,De.height,0,Je,ze,De.data)}}}else{if(ae=A.mipmaps,rt&&wt){ae.length>0&&Le++;const me=Qe(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ft,me.width,me.height)}for(let me=0;me<6;me++)if(Me){rt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke[me].width,ke[me].height,Je,ze,ke[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,ke[me].width,ke[me].height,0,Je,ze,ke[me].data);for(let Ce=0;Ce<ae.length;Ce++){const ht=ae[Ce].image[me].image;rt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce+1,0,0,ht.width,ht.height,Je,ze,ht.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce+1,ft,ht.width,ht.height,0,Je,ze,ht.data)}}else{rt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,ze,ke[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,Je,ze,ke[me]);for(let Ce=0;Ce<ae.length;Ce++){const De=ae[Ce];rt?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce+1,0,0,Je,ze,De.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce+1,ft,Je,ze,De.image[me])}}}v(A)&&g(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ue(D,A,Z,pe,_e,fe){const Xe=c.convert(Z.format,Z.colorSpace),Ae=c.convert(Z.type),Fe=L(Z.internalFormat,Xe,Ae,Z.colorSpace);if(!r.get(A).__hasExternalTextures){const Me=Math.max(1,A.width>>fe),ke=Math.max(1,A.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,Fe,Me,ke,A.depth,0,Xe,Ae,null):n.texImage2D(_e,fe,Fe,Me,ke,0,Xe,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),pt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,r.get(Z).__webglTexture,0,ct(A)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,r.get(Z).__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(D,A,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const pe=A.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,fe=b(A.stencilBuffer,_e),Xe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ct(A);pt(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,A.width,A.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,fe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,D)}else{const pe=A.textures;for(let _e=0;_e<pe.length;_e++){const fe=pe[_e],Xe=c.convert(fe.format,fe.colorSpace),Ae=c.convert(fe.type),Fe=L(fe.internalFormat,Xe,Ae,fe.colorSpace),mt=ct(A);Z&&pt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,Fe,A.width,A.height):pt(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,Fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re(A.depthTexture,0);const pe=r.get(A.depthTexture).__webglTexture,_e=ct(A);if(A.depthTexture.format===Os)pt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(A.depthTexture.format===Ws)pt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function be(D){const A=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=pe}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Se(A.__webglFramebuffer,D)}else if(Z){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=s.createRenderbuffer(),ye(A.__webglDepthbuffer[pe],D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ye(A.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(D,A,Z){const pe=r.get(D);A!==void 0&&ue(pe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&be(D)}function tt(D){const A=D.texture,Z=r.get(D),pe=r.get(A);D.addEventListener("dispose",k);const _e=D.textures,fe=D.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=A.version,u.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)Z.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const mt=r.get(_e[Ae]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&pt(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];Z.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const mt=c.convert(Fe.format,Fe.colorSpace),Me=c.convert(Fe.type),ke=L(Fe.internalFormat,mt,Me,Fe.colorSpace,D.isXRRenderTarget===!0),nt=ct(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,ke,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),F(s.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)ue(Z.__webglFramebuffer[Ae][Fe],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else ue(Z.__webglFramebuffer[Ae],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);v(A)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const mt=_e[Ae],Me=r.get(mt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),F(s.TEXTURE_2D,mt),ue(Z.__webglFramebuffer,D,mt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),v(mt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,pe.__webglTexture),F(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)ue(Z.__webglFramebuffer[Fe],D,A,s.COLOR_ATTACHMENT0,Ae,Fe);else ue(Z.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,Ae,0);v(A)&&g(Ae),n.unbindTexture()}D.depthBuffer&&be(D)}function _t(D){const A=D.textures;for(let Z=0,pe=A.length;Z<pe;Z++){const _e=A[Z];if(v(_e)){const fe=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Xe=r.get(_e).__webglTexture;n.bindTexture(fe,Xe),g(fe),n.unbindTexture()}}}const dt=[],z=[];function rn(D){if(D.samples>0){if(pt(D)===!1){const A=D.textures,Z=D.width,pe=D.height;let _e=s.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(D),Ae=A.length>1;if(Ae)for(let Fe=0;Fe<A.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const mt=r.get(A[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,mt,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,_e,s.NEAREST),p===!0&&(dt.length=0,z.length=0,dt.push(s.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(dt.push(fe),z.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<A.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const mt=r.get(A[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,mt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ct(D){return Math.min(o.maxSamples,D.samples)}function pt(D){const A=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ke(D){const A=u.render.frame;_.get(D)!==A&&(_.set(D,A),D.update())}function Ct(D,A){const Z=D.colorSpace,pe=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==_r&&Z!==hr&&(Tt.getTransfer(Z)===Ut?(pe!==ci||_e!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=ie,this.resetTextureUnits=P,this.setTexture2D=re,this.setTexture2DArray=le,this.setTexture3D=ee,this.setTextureCube=ce,this.rebindTextures=Pe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=pt}function hE(s,e){function n(r,o=hr){let c;const u=Tt.getTransfer(o);if(r===Oi)return s.UNSIGNED_BYTE;if(r===Qd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===cg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===og)return s.BYTE;if(r===lg)return s.SHORT;if(r===Ha)return s.UNSIGNED_SHORT;if(r===Zd)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Ga)return s.HALF_FLOAT;if(r===ug)return s.ALPHA;if(r===dg)return s.RGB;if(r===ci)return s.RGBA;if(r===fg)return s.LUMINANCE;if(r===hg)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===pg)return s.RED;if(r===ef)return s.RED_INTEGER;if(r===mg)return s.RG;if(r===tf)return s.RG_INTEGER;if(r===nf)return s.RGBA_INTEGER;if(r===wl||r===Tl||r===Al||r===Cl)if(u===Ut)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===wl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===wl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===_d||r===xd||r===yd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd||r===Md||r===Ed)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Sd||r===Md)return u===Ut?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ed)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wd||r===Td||r===Ad||r===Cd||r===Rd||r===bd||r===Pd||r===Ld||r===Nd||r===Dd||r===Id||r===Ud||r===Fd||r===kd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===wd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Td)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ad)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ld)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Id)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ud)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===Od||r===zd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rl)return u===Ut?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gg||r===Bd||r===Hd||r===Vd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class pE extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mE={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const v=n.getJointPose(C,r),g=this._getHandJoint(m,C);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const gE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vE=`
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

}`;class _E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Ln,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new vr({vertexShader:gE,fragmentShader:vE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new Hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xE extends Xs{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",p=1,m=null,_=null,y=null,x=null,S=null,T=null;const C=new _E,v=n.getContextAttributes();let g=null,L=null;const b=[],N=[],X=new ut;let k=null;const U=new xn;U.layers.enable(1),U.viewport=new bt;const W=new xn;W.layers.enable(2),W.viewport=new bt;const he=[U,W],M=new pE;M.layers.enable(1),M.layers.enable(2);let P=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=b[Q];return ue===void 0&&(ue=new td,b[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=b[Q];return ue===void 0&&(ue=new td,b[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=b[Q];return ue===void 0&&(ue=new td,b[Q]=ue),ue.getHandSpace()};function q(Q){const ue=N.indexOf(Q.inputSource);if(ue===-1)return;const ye=b[ue];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,m||u),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function re(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",le);for(let Q=0;Q<b.length;Q++){const ue=N[Q];ue!==null&&(N[Q]=null,b[Q].disconnect(ue))}P=null,ie=null,C.reset(),e.setRenderTarget(g),S=null,x=null,y=null,o=null,L=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",re),o.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(X),o.renderState.layers===void 0){const ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,ue),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Xr(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,ye=null,Se=null;v.depth&&(Se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=v.stencil?Ws:Os,ye=v.stencil?Gs:jr);const be={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:c};y=new XRWebGLBinding(o,n),x=y.createProjectionLayer(be),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Xr(x.textureWidth,x.textureHeight,{format:ci,type:Oi,depthTexture:new Ng(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(f),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function le(Q){for(let ue=0;ue<Q.removed.length;ue++){const ye=Q.removed[ue],Se=N.indexOf(ye);Se>=0&&(N[Se]=null,b[Se].disconnect(ye))}for(let ue=0;ue<Q.added.length;ue++){const ye=Q.added[ue];let Se=N.indexOf(ye);if(Se===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=N.length){N.push(ye),Se=Pe;break}else if(N[Pe]===null){N[Pe]=ye,Se=Pe;break}if(Se===-1)break}const be=b[Se];be&&be.connect(ye)}}const ee=new Y,ce=new Y;function B(Q,ue,ye){ee.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const Se=ee.distanceTo(ce),be=ue.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,tt=be[14]/(be[10]-1),_t=be[14]/(be[10]+1),dt=(be[9]+1)/be[5],z=(be[9]-1)/be[5],rn=(be[8]-1)/be[0],ct=(Pe[8]+1)/Pe[0],pt=tt*rn,Ke=tt*ct,Ct=Se/(-rn+ct),Qe=Ct*-rn;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qe),Q.translateZ(Ct),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const D=tt+Ct,A=_t+Ct,Z=pt-Qe,pe=Ke+(Se-Qe),_e=dt*_t/A*D,fe=z*_t/A*D;Q.projectionMatrix.makePerspective(Z,pe,_e,fe,D,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function de(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ue=Q.near,ye=Q.far;C.texture!==null&&(C.depthNear>0&&(ue=C.depthNear),C.depthFar>0&&(ye=C.depthFar)),M.near=W.near=U.near=ue,M.far=W.far=U.far=ye,(P!==M.near||ie!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,ie=M.far);const Se=Q.parent,be=M.cameras;de(M,Se);for(let Pe=0;Pe<be.length;Pe++)de(be[Pe],Se);be.length===2?B(M,U,W):M.projectionMatrix.copy(U.projectionMatrix),oe(Q,M,Se)};function oe(Q,ue,ye){ye===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(M)};let F=null;function se(Q,ue){if(_=ue.getViewerPose(m||u),T=ue,_!==null){const ye=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Se=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let Pe=0;Pe<ye.length;Pe++){const tt=ye[Pe];let _t=null;if(S!==null)_t=S.getViewport(tt);else{const z=y.getViewSubImage(x,tt);_t=z.viewport,Pe===0&&(e.setRenderTargetTextures(L,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(L))}let dt=he[Pe];dt===void 0&&(dt=new xn,dt.layers.enable(Pe),dt.viewport=new bt,he[Pe]=dt),dt.matrix.fromArray(tt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(tt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(_t.x,_t.y,_t.width,_t.height),Pe===0&&(M.matrix.copy(dt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(dt)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const Pe=y.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&C.init(e,Pe,o.renderState)}}for(let ye=0;ye<b.length;ye++){const Se=N[ye],be=b[ye];Se!==null&&be!==void 0&&be.update(Se,ue,m||u)}F&&F(Q,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Ue=new Lg;Ue.setAnimationLoop(se),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const kr=new vi,yE=new Ot;function SE(s,e){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Rg(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function o(v,g,L,b,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(v,g):g.isMeshToonMaterial?(c(v,g),y(v,g)):g.isMeshPhongMaterial?(c(v,g),_(v,g)):g.isMeshStandardMaterial?(c(v,g),x(v,g),g.isMeshPhysicalMaterial&&S(v,g,N)):g.isMeshMatcapMaterial?(c(v,g),T(v,g)):g.isMeshDepthMaterial?c(v,g):g.isMeshDistanceMaterial?(c(v,g),C(v,g)):g.isMeshNormalMaterial?c(v,g):g.isLineBasicMaterial?(u(v,g),g.isLineDashedMaterial&&f(v,g)):g.isPointsMaterial?p(v,g,L,b):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Pn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Pn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const L=e.get(g),b=L.envMap,N=L.envMapRotation;b&&(v.envMap.value=b,kr.copy(N),kr.x*=-1,kr.y*=-1,kr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.envMapRotation.value.setFromMatrix4(yE.makeRotationFromEuler(kr)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function u(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function f(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,L,b){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*L,v.scale.value=b*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function y(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,L){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,g){g.matcap&&(v.matcap.value=g.matcap)}function C(v,g){const L=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ME(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,b){const N=b.program;r.uniformBlockBinding(L,N)}function m(L,b){let N=o[L.id];N===void 0&&(T(L),N=_(L),o[L.id]=N,L.addEventListener("dispose",v));const X=b.program;r.updateUBOMapping(L,X);const k=e.render.frame;c[L.id]!==k&&(x(L),c[L.id]=k)}function _(L){const b=y();L.__bindingPointIndex=b;const N=s.createBuffer(),X=L.__size,k=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,X,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,N),N}function y(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const b=o[L.id],N=L.uniforms,X=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let k=0,U=N.length;k<U;k++){const W=Array.isArray(N[k])?N[k]:[N[k]];for(let he=0,M=W.length;he<M;he++){const P=W[he];if(S(P,k,he,X)===!0){const ie=P.__offset,q=Array.isArray(P.value)?P.value:[P.value];let re=0;for(let le=0;le<q.length;le++){const ee=q[le],ce=C(ee);typeof ee=="number"||typeof ee=="boolean"?(P.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,ie+re,P.__data)):ee.isMatrix3?(P.__data[0]=ee.elements[0],P.__data[1]=ee.elements[1],P.__data[2]=ee.elements[2],P.__data[3]=0,P.__data[4]=ee.elements[3],P.__data[5]=ee.elements[4],P.__data[6]=ee.elements[5],P.__data[7]=0,P.__data[8]=ee.elements[6],P.__data[9]=ee.elements[7],P.__data[10]=ee.elements[8],P.__data[11]=0):(ee.toArray(P.__data,re),re+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,b,N,X){const k=L.value,U=b+"_"+N;if(X[U]===void 0)return typeof k=="number"||typeof k=="boolean"?X[U]=k:X[U]=k.clone(),!0;{const W=X[U];if(typeof k=="number"||typeof k=="boolean"){if(W!==k)return X[U]=k,!0}else if(W.equals(k)===!1)return W.copy(k),!0}return!1}function T(L){const b=L.uniforms;let N=0;const X=16;for(let U=0,W=b.length;U<W;U++){const he=Array.isArray(b[U])?b[U]:[b[U]];for(let M=0,P=he.length;M<P;M++){const ie=he[M],q=Array.isArray(ie.value)?ie.value:[ie.value];for(let re=0,le=q.length;re<le;re++){const ee=q[re],ce=C(ee),B=N%X,de=B%ce.boundary,oe=B+de;N+=de,oe!==0&&X-oe<ce.storage&&(N+=X-oe),ie.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=N,N+=ce.storage}}}const k=N%X;return k>0&&(N+=X-k),L.__size=N,L.__cache={},this}function C(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function v(L){const b=L.target;b.removeEventListener("dispose",v);const N=u.indexOf(b.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[b.id]),delete o[b.id],delete c[b.id]}function g(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:p,update:m,dispose:g}}class of{constructor(e={}){const{canvas:n=cx(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const S=new Uint32Array(4),T=new Int32Array(4);let C=null,v=null;const g=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=mr,this.toneMappingExposure=1;const b=this;let N=!1,X=0,k=0,U=null,W=-1,he=null;const M=new bt,P=new bt;let ie=null;const q=new ot(0);let re=0,le=n.width,ee=n.height,ce=1,B=null,de=null;const oe=new bt(0,0,le,ee),F=new bt(0,0,le,ee);let se=!1;const Ue=new sf;let Q=!1,ue=!1;const ye=new Ot,Se=new Ot,be=new Y,Pe=new bt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function dt(){return U===null?ce:1}let z=r;function rn(R,G){return n.getContext(R,G)}try{const R={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$d}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",De,!1),z===null){const G="webgl2";if(z=rn(G,R),z===null)throw rn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,pt,Ke,Ct,Qe,D,A,Z,pe,_e,fe,Xe,Ae,Fe,mt,Me,ke,nt,Je,ze,ft,rt,wt,V;function Le(){ct=new R1(z),ct.init(),rt=new hE(z,ct),pt=new S1(z,ct,e,rt),Ke=new uE(z),pt.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),Ct=new L1(z),Qe=new $M,D=new fE(z,ct,Ke,Qe,pt,rt,Ct),A=new E1(b),Z=new C1(b),pe=new kx(z),wt=new x1(z,pe),_e=new b1(z,pe,Ct,wt),fe=new D1(z,_e,pe,Ct),Je=new N1(z,pt,D),Me=new M1(Qe),Xe=new YM(b,A,Z,ct,pt,wt,Me),Ae=new SE(b,Qe),Fe=new ZM,mt=new iE(ct),nt=new _1(b,A,Z,Ke,fe,x,p),ke=new lE(b,fe,pt),V=new ME(z,Ct,pt,Ke),ze=new y1(z,ct,Ct),ft=new P1(z,ct,Ct),Ct.programs=Xe.programs,b.capabilities=pt,b.extensions=ct,b.properties=Qe,b.renderLists=Fe,b.shadowMap=ke,b.state=Ke,b.info=Ct}Le();const ae=new xE(b,z);this.xr=ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(le,ee,!1))},this.getSize=function(R){return R.set(le,ee)},this.setSize=function(R,G,J=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=R,ee=G,n.width=Math.floor(R*ce),n.height=Math.floor(G*ce),J===!0&&(n.style.width=R+"px",n.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(le*ce,ee*ce).floor()},this.setDrawingBufferSize=function(R,G,J){le=R,ee=G,ce=J,n.width=Math.floor(R*J),n.height=Math.floor(G*J),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,G,J,te){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,G,J,te),Ke.viewport(M.copy(oe).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(F)},this.setScissor=function(R,G,J,te){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,G,J,te),Ke.scissor(P.copy(F).multiplyScalar(ce).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(R){Ke.setScissorTest(se=R)},this.setOpaqueSort=function(R){B=R},this.setTransparentSort=function(R){de=R},this.getClearColor=function(R){return R.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(R=!0,G=!0,J=!0){let te=0;if(R){let j=!1;if(U!==null){const we=U.texture.format;j=we===nf||we===tf||we===ef}if(j){const we=U.texture.type,Ne=we===Oi||we===jr||we===Ha||we===Gs||we===Qd||we===Jd,Te=nt.getClearColor(),Ge=nt.getClearAlpha(),$e=Te.r,Ze=Te.g,We=Te.b;Ne?(S[0]=$e,S[1]=Ze,S[2]=We,S[3]=Ge,z.clearBufferuiv(z.COLOR,0,S)):(T[0]=$e,T[1]=Ze,T[2]=We,T[3]=Ge,z.clearBufferiv(z.COLOR,0,T))}else te|=z.COLOR_BUFFER_BIT}G&&(te|=z.DEPTH_BUFFER_BIT,z.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(te|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),mt.dispose(),Qe.dispose(),A.dispose(),Z.dispose(),fe.dispose(),wt.dispose(),V.dispose(),Xe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",zi),ae.removeEventListener("sessionend",qr),Dn.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=Ct.autoReset,G=ke.enabled,J=ke.autoUpdate,te=ke.needsUpdate,j=ke.type;Le(),Ct.autoReset=R,ke.enabled=G,ke.autoUpdate=J,ke.needsUpdate=te,ke.type=j}function De(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ht(R){const G=R.target;G.removeEventListener("dispose",ht),zt(G)}function zt(R){sn(R),Qe.remove(R)}function sn(R){const G=Qe.get(R).programs;G!==void 0&&(G.forEach(function(J){Xe.releaseProgram(J)}),R.isShaderMaterial&&Xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,J,te,j,we){G===null&&(G=tt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Te=xi(R,G,J,te,j);Ke.setMaterial(te,Ne);let Ge=J.index,$e=1;if(te.wireframe===!0){if(Ge=_e.getWireframeAttribute(J),Ge===void 0)return;$e=2}const Ze=J.drawRange,We=J.attributes.position;let Et=Ze.start*$e,Rt=(Ze.start+Ze.count)*$e;we!==null&&(Et=Math.max(Et,we.start*$e),Rt=Math.min(Rt,(we.start+we.count)*$e)),Ge!==null?(Et=Math.max(Et,0),Rt=Math.min(Rt,Ge.count)):We!=null&&(Et=Math.max(Et,0),Rt=Math.min(Rt,We.count));const Pt=Rt-Et;if(Pt<0||Pt===1/0)return;wt.setup(j,te,Te,J,Ge);let Ft,yt=ze;if(Ge!==null&&(Ft=pe.get(Ge),yt=ft,yt.setIndex(Ft)),j.isMesh)te.wireframe===!0?(Ke.setLineWidth(te.wireframeLinewidth*dt()),yt.setMode(z.LINES)):yt.setMode(z.TRIANGLES);else if(j.isLine){let Oe=te.linewidth;Oe===void 0&&(Oe=1),Ke.setLineWidth(Oe*dt()),j.isLineSegments?yt.setMode(z.LINES):j.isLineLoop?yt.setMode(z.LINE_LOOP):yt.setMode(z.LINE_STRIP)}else j.isPoints?yt.setMode(z.POINTS):j.isSprite&&yt.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)yt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Oe=j._multiDrawStarts,Xt=j._multiDrawCounts,St=j._multiDrawCount,In=Ge?pe.get(Ge).bytesPerElement:1,Zn=Qe.get(te).currentProgram.getUniforms();for(let Qt=0;Qt<St;Qt++)Zn.setValue(z,"_gl_DrawID",Qt),yt.render(Oe[Qt]/In,Xt[Qt])}else if(j.isInstancedMesh)yt.renderInstances(Et,Pt,j.count);else if(J.isInstancedBufferGeometry){const Oe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xt=Math.min(J.instanceCount,Oe);yt.renderInstances(Et,Pt,Xt)}else yt.render(Et,Pt)};function gt(R,G,J){R.transparent===!0&&R.side===Ui&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,$r(R,G,J),R.side=gr,R.needsUpdate=!0,$r(R,G,J),R.side=Ui):$r(R,G,J)}this.compile=function(R,G,J=null){J===null&&(J=R),v=mt.get(J),v.init(G),L.push(v),J.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),R!==J&&R.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const te=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Te=we[Ne];gt(Te,J,j),te.add(Te)}else gt(we,J,j),te.add(we)}),L.pop(),v=null,te},this.compileAsync=function(R,G,J=null){const te=this.compile(R,G,J);return new Promise(j=>{function we(){if(te.forEach(function(Ne){Qe.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){j(R);return}setTimeout(we,10)}ct.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Zt=null;function Vn(R){Zt&&Zt(R)}function zi(){Dn.stop()}function qr(){Dn.start()}const Dn=new Lg;Dn.setAnimationLoop(Vn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(R){Zt=R,ae.setAnimationLoop(R),R===null?Dn.stop():Dn.start()},ae.addEventListener("sessionstart",zi),ae.addEventListener("sessionend",qr),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,G,U),v=mt.get(R,L.length),v.init(G),L.push(v),Se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ue.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,Q=Me.init(this.clippingPlanes,ue),C=Fe.get(R,g.length),C.init(),g.push(C),ae.enabled===!0&&ae.isPresenting===!0){const we=b.xr.getDepthSensingMesh();we!==null&&$s(we,G,-1/0,b.sortObjects)}$s(R,G,0,b.sortObjects),C.finish(),b.sortObjects===!0&&C.sort(B,de),_t=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,_t&&nt.addToRenderList(C,R),this.info.render.frame++,Q===!0&&Me.beginShadows();const J=v.state.shadowsArray;ke.render(J,R,G),Q===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=C.opaque,j=C.transmissive;if(v.setupLights(),G.isArrayCamera){const we=G.cameras;if(j.length>0)for(let Ne=0,Te=we.length;Ne<Te;Ne++){const Ge=we[Ne];xr(te,j,R,Ge)}_t&&nt.render(R);for(let Ne=0,Te=we.length;Ne<Te;Ne++){const Ge=we[Ne];Bi(C,R,Ge,Ge.viewport)}}else j.length>0&&xr(te,j,R,G),_t&&nt.render(R),Bi(C,R,G);U!==null&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(b,R,G),wt.resetDefaultState(),W=-1,he=null,L.pop(),L.length>0?(v=L[L.length-1],Q===!0&&Me.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,g.pop(),g.length>0?C=g[g.length-1]:C=null};function $s(R,G,J,te){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ue.intersectsSprite(R)){te&&Pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);const Ne=fe.update(R),Te=R.material;Te.visible&&C.push(R,Ne,Te,J,Pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ue.intersectsObject(R))){const Ne=fe.update(R),Te=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pe.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Pe.copy(Ne.boundingSphere.center)),Pe.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){const Ge=Ne.groups;for(let $e=0,Ze=Ge.length;$e<Ze;$e++){const We=Ge[$e],Et=Te[We.materialIndex];Et&&Et.visible&&C.push(R,Ne,Et,J,Pe.z,We)}}else Te.visible&&C.push(R,Ne,Te,J,Pe.z,null)}}const we=R.children;for(let Ne=0,Te=we.length;Ne<Te;Ne++)$s(we[Ne],G,J,te)}function Bi(R,G,J,te){const j=R.opaque,we=R.transmissive,Ne=R.transparent;v.setupLightsView(J),Q===!0&&Me.setGlobalState(b.clippingPlanes,J),te&&Ke.viewport(M.copy(te)),j.length>0&&_i(j,G,J),we.length>0&&_i(we,G,J),Ne.length>0&&_i(Ne,G,J),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function xr(R,G,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[te.id]===void 0&&(v.state.transmissionRenderTarget[te.id]=new Xr(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Ga:Oi,minFilter:Gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const we=v.state.transmissionRenderTarget[te.id],Ne=te.viewport||M;we.setSize(Ne.z,Ne.w);const Te=b.getRenderTarget();b.setRenderTarget(we),b.getClearColor(q),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),_t&&nt.render(J);const Ge=b.toneMapping;b.toneMapping=mr;const $e=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),v.setupLightsView(te),Q===!0&&Me.setGlobalState(b.clippingPlanes,te),_i(R,J,te),D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let We=0,Et=G.length;We<Et;We++){const Rt=G[We],Pt=Rt.object,Ft=Rt.geometry,yt=Rt.material,Oe=Rt.group;if(yt.side===Ui&&Pt.layers.test(te.layers)){const Xt=yt.side;yt.side=Pn,yt.needsUpdate=!0,Yr(Pt,J,te,Ft,yt,Oe),yt.side=Xt,yt.needsUpdate=!0,Ze=!0}}Ze===!0&&(D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we))}b.setRenderTarget(Te),b.setClearColor(q,re),$e!==void 0&&(te.viewport=$e),b.toneMapping=Ge}function _i(R,G,J){const te=G.isScene===!0?G.overrideMaterial:null;for(let j=0,we=R.length;j<we;j++){const Ne=R[j],Te=Ne.object,Ge=Ne.geometry,$e=te===null?Ne.material:te,Ze=Ne.group;Te.layers.test(J.layers)&&Yr(Te,G,J,Ge,$e,Ze)}}function Yr(R,G,J,te,j,we){R.onBeforeRender(b,G,J,te,j,we),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(b,G,J,te,R,we),j.transparent===!0&&j.side===Ui&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,b.renderBufferDirect(J,G,te,j,R,we),j.side=gr,j.needsUpdate=!0,b.renderBufferDirect(J,G,te,j,R,we),j.side=Ui):b.renderBufferDirect(J,G,te,j,R,we),R.onAfterRender(b,G,J,te,j,we)}function $r(R,G,J){G.isScene!==!0&&(G=tt);const te=Qe.get(R),j=v.state.lights,we=v.state.shadowsArray,Ne=j.state.version,Te=Xe.getParameters(R,j.state,we,G,J),Ge=Xe.getProgramCacheKey(Te);let $e=te.programs;te.environment=R.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(R.isMeshStandardMaterial?Z:A).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",ht),$e=new Map,te.programs=$e);let Ze=$e.get(Ge);if(Ze!==void 0){if(te.currentProgram===Ze&&te.lightsStateVersion===Ne)return Ka(R,Te),Ze}else Te.uniforms=Xe.getUniforms(R),R.onBeforeCompile(Te,b),Ze=Xe.acquireProgram(Te,Ge),$e.set(Ge,Ze),te.uniforms=Te.uniforms;const We=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Me.uniform),Ka(R,Te),te.needsLights=Qa(R),te.lightsStateVersion=Ne,te.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=Ze,te.uniformsList=null,Ze}function $a(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Pl.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Ka(R,G){const J=Qe.get(R);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function xi(R,G,J,te,j){G.isScene!==!0&&(G=tt),D.resetTextureUnits();const we=G.fog,Ne=te.isMeshStandardMaterial?G.environment:null,Te=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_r,Ge=(te.isMeshStandardMaterial?Z:A).get(te.envMap||Ne),$e=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ze=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!J.morphAttributes.position,Et=!!J.morphAttributes.normal,Rt=!!J.morphAttributes.color;let Pt=mr;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=b.toneMapping);const Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=Ft!==void 0?Ft.length:0,Oe=Qe.get(te),Xt=v.state.lights;if(Q===!0&&(ue===!0||R!==he)){const ln=R===he&&te.id===W;Me.setState(te,R,ln)}let St=!1;te.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==Te||j.isBatchedMesh&&Oe.batching===!1||!j.isBatchedMesh&&Oe.batching===!0||j.isBatchedMesh&&Oe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Oe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||j.isInstancedMesh&&Oe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Oe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Oe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Oe.instancingMorph===!1&&j.morphTexture!==null||Oe.envMap!==Ge||te.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Me.numPlanes||Oe.numIntersection!==Me.numIntersection)||Oe.vertexAlphas!==$e||Oe.vertexTangents!==Ze||Oe.morphTargets!==We||Oe.morphNormals!==Et||Oe.morphColors!==Rt||Oe.toneMapping!==Pt||Oe.morphTargetsCount!==yt)&&(St=!0):(St=!0,Oe.__version=te.version);let In=Oe.currentProgram;St===!0&&(In=$r(te,G,j));let Zn=!1,Qt=!1,yi=!1;const Lt=In.getUniforms(),ui=Oe.uniforms;if(Ke.useProgram(In.program)&&(Zn=!0,Qt=!0,yi=!0),te.id!==W&&(W=te.id,Qt=!0),Zn||he!==R){pt.reverseDepthBuffer?(ye.copy(R.projectionMatrix),dx(ye),fx(ye),Lt.setValue(z,"projectionMatrix",ye)):Lt.setValue(z,"projectionMatrix",R.projectionMatrix),Lt.setValue(z,"viewMatrix",R.matrixWorldInverse);const ln=Lt.map.cameraPosition;ln!==void 0&&ln.setValue(z,be.setFromMatrixPosition(R.matrixWorld)),pt.logarithmicDepthBuffer&&Lt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Lt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),he!==R&&(he=R,Qt=!0,yi=!0)}if(j.isSkinnedMesh){Lt.setOptional(z,j,"bindMatrix"),Lt.setOptional(z,j,"bindMatrixInverse");const ln=j.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Lt.setValue(z,"boneTexture",ln.boneTexture,D))}j.isBatchedMesh&&(Lt.setOptional(z,j,"batchingTexture"),Lt.setValue(z,"batchingTexture",j._matricesTexture,D),Lt.setOptional(z,j,"batchingIdTexture"),Lt.setValue(z,"batchingIdTexture",j._indirectTexture,D),Lt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(z,"batchingColorTexture",j._colorsTexture,D));const Ks=J.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Je.update(j,J,In),(Qt||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,Lt.setValue(z,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ui.envMap.value=Ge,ui.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(ui.envMapIntensity.value=G.environmentIntensity),Qt&&(Lt.setValue(z,"toneMappingExposure",b.toneMappingExposure),Oe.needsLights&&Za(ui,yi),we&&te.fog===!0&&Ae.refreshFogUniforms(ui,we),Ae.refreshMaterialUniforms(ui,te,ce,ee,v.state.transmissionRenderTarget[R.id]),Pl.upload(z,$a(Oe),ui,D)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Pl.upload(z,$a(Oe),ui,D),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Lt.setValue(z,"center",j.center),Lt.setValue(z,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(z,"normalMatrix",j.normalMatrix),Lt.setValue(z,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const ln=te.uniformsGroups;for(let Kr=0,Zs=ln.length;Kr<Zs;Kr++){const Hi=ln[Kr];V.update(Hi,In),V.bind(Hi,In)}}return In}function Za(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Qa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,G,J){Qe.get(R.texture).__webglTexture=G,Qe.get(R.depthTexture).__webglTexture=J;const te=Qe.get(R);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const J=Qe.get(R);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,J=0){U=R,X=G,k=J;let te=!0,j=null,we=!1,Ne=!1;if(R){const Ge=Qe.get(R);if(Ge.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(z.FRAMEBUFFER,null),te=!1;else if(Ge.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ge.__hasExternalTextures)D.rebindTextures(R,Qe.get(R.texture).__webglTexture,Qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const Ze=Qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?j=Ze[G][J]:j=Ze[G],we=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?j=Qe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?j=Ze[J]:j=Ze,M.copy(R.viewport),P.copy(R.scissor),ie=R.scissorTest}else M.copy(oe).multiplyScalar(ce).floor(),P.copy(F).multiplyScalar(ce).floor(),ie=se;if(Ke.bindFramebuffer(z.FRAMEBUFFER,j)&&te&&Ke.drawBuffers(R,j),Ke.viewport(M),Ke.scissor(P),Ke.setScissorTest(ie),we){const Ge=Qe.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ge.__webglTexture,J)}else if(Ne){const Ge=Qe.get(R.texture),$e=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.__webglTexture,J||0,$e)}W=-1},this.readRenderTargetPixels=function(R,G,J,te,j,we,Ne){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Te=Te[Ne]),Te){Ke.bindFramebuffer(z.FRAMEBUFFER,Te);try{const Ge=R.texture,$e=Ge.format,Ze=Ge.type;if(!pt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-te&&J>=0&&J<=R.height-j&&z.readPixels(G,J,te,j,rt.convert($e),rt.convert(Ze),we)}finally{const Ge=U!==null?Qe.get(U).__webglFramebuffer:null;Ke.bindFramebuffer(z.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,G,J,te,j,we,Ne){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Te=Te[Ne]),Te){const Ge=R.texture,$e=Ge.format,Ze=Ge.type;if(!pt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-te&&J>=0&&J<=R.height-j){Ke.bindFramebuffer(z.FRAMEBUFFER,Te);const We=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.bufferData(z.PIXEL_PACK_BUFFER,we.byteLength,z.STREAM_READ),z.readPixels(G,J,te,j,rt.convert($e),rt.convert(Ze),0);const Et=U!==null?Qe.get(U).__webglFramebuffer:null;Ke.bindFramebuffer(z.FRAMEBUFFER,Et);const Rt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ux(z,Rt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,we),z.deleteBuffer(We),z.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,J=0){R.isTexture!==!0&&(bl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const te=Math.pow(2,-J),j=Math.floor(R.image.width*te),we=Math.floor(R.image.height*te),Ne=G!==null?G.x:0,Te=G!==null?G.y:0;D.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Ne,Te,j,we),Ke.unbindTexture()},this.copyTextureToTexture=function(R,G,J=null,te=null,j=0){R.isTexture!==!0&&(bl("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,R=arguments[1],G=arguments[2],j=arguments[3]||0,J=null);let we,Ne,Te,Ge,$e,Ze;J!==null?(we=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Te=J.min.x,Ge=J.min.y):(we=R.image.width,Ne=R.image.height,Te=0,Ge=0),te!==null?($e=te.x,Ze=te.y):($e=0,Ze=0);const We=rt.convert(G.format),Et=rt.convert(G.type);D.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const Rt=z.getParameter(z.UNPACK_ROW_LENGTH),Pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ft=z.getParameter(z.UNPACK_SKIP_PIXELS),yt=z.getParameter(z.UNPACK_SKIP_ROWS),Oe=z.getParameter(z.UNPACK_SKIP_IMAGES),Xt=R.isCompressedTexture?R.mipmaps[j]:R.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Xt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Xt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Te),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ge),R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,$e,Ze,we,Ne,We,Et,Xt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,$e,Ze,Xt.width,Xt.height,We,Xt.data):z.texSubImage2D(z.TEXTURE_2D,j,$e,Ze,we,Ne,We,Et,Xt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Rt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ft),z.pixelStorei(z.UNPACK_SKIP_ROWS,yt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Oe),j===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,G,J=null,te=null,j=0){R.isTexture!==!0&&(bl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,R=arguments[2],G=arguments[3],j=arguments[4]||0);let we,Ne,Te,Ge,$e,Ze,We,Et,Rt;const Pt=R.isCompressedTexture?R.mipmaps[j]:R.image;J!==null?(we=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Te=J.max.z-J.min.z,Ge=J.min.x,$e=J.min.y,Ze=J.min.z):(we=Pt.width,Ne=Pt.height,Te=Pt.depth,Ge=0,$e=0,Ze=0),te!==null?(We=te.x,Et=te.y,Rt=te.z):(We=0,Et=0,Rt=0);const Ft=rt.convert(G.format),yt=rt.convert(G.type);let Oe;if(G.isData3DTexture)D.setTexture3D(G,0),Oe=z.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)D.setTexture2DArray(G,0),Oe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const Xt=z.getParameter(z.UNPACK_ROW_LENGTH),St=z.getParameter(z.UNPACK_IMAGE_HEIGHT),In=z.getParameter(z.UNPACK_SKIP_PIXELS),Zn=z.getParameter(z.UNPACK_SKIP_ROWS),Qt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,$e),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ze),R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Oe,j,We,Et,Rt,we,Ne,Te,Ft,yt,Pt.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Oe,j,We,Et,Rt,we,Ne,Te,Ft,Pt.data):z.texSubImage3D(Oe,j,We,Et,Rt,we,Ne,Te,Ft,yt,Pt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),z.pixelStorei(z.UNPACK_SKIP_PIXELS,In),z.pixelStorei(z.UNPACK_SKIP_ROWS,Zn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qt),j===0&&G.generateMipmaps&&z.generateMipmap(Oe),Ke.unbindTexture()},this.initRenderTarget=function(R){Qe.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){X=0,k=0,U=null,Ke.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rf?"display-p3":"srgb",n.unpackColorSpace=Tt.workingColorSpace===zl?"display-p3":"srgb"}}class lf extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cf extends qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hm=new Ot,jd=new Mg,Ml=new Bl,El=new Y;class kg extends yn{constructor(e=new Hn,n=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(o),Ml.radius+=c,e.ray.intersectsSphere(Ml)===!1)return;Hm.copy(o).invert(),jd.copy(e.ray).applyMatrix4(Hm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let T=x,C=S;T<C;T++){const v=m.getX(T);El.fromBufferAttribute(y,v),Vm(El,v,p,o,e,n,this)}}else{const x=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let T=x,C=S;T<C;T++)El.fromBufferAttribute(y,T),Vm(El,T,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Vm(s,e,n,r,o,c,u){const f=jd.distanceSqToPoint(s);if(f<n){const p=new Y;jd.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ya extends Hn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],u=[];f(o),m(r),_(),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(c.slice(),3)),this.setAttribute("uv",new mn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const b=new Y,N=new Y,X=new Y;for(let k=0;k<n.length;k+=3)S(n[k+0],b),S(n[k+1],N),S(n[k+2],X),p(b,N,X,L)}function p(L,b,N,X){const k=X+1,U=[];for(let W=0;W<=k;W++){U[W]=[];const he=L.clone().lerp(N,W/k),M=b.clone().lerp(N,W/k),P=k-W;for(let ie=0;ie<=P;ie++)ie===0&&W===k?U[W][ie]=he:U[W][ie]=he.clone().lerp(M,ie/P)}for(let W=0;W<k;W++)for(let he=0;he<2*(k-W)-1;he++){const M=Math.floor(he/2);he%2===0?(x(U[W][M+1]),x(U[W+1][M]),x(U[W][M])):(x(U[W][M+1]),x(U[W+1][M+1]),x(U[W+1][M]))}}function m(L){const b=new Y;for(let N=0;N<c.length;N+=3)b.x=c[N+0],b.y=c[N+1],b.z=c[N+2],b.normalize().multiplyScalar(L),c[N+0]=b.x,c[N+1]=b.y,c[N+2]=b.z}function _(){const L=new Y;for(let b=0;b<c.length;b+=3){L.x=c[b+0],L.y=c[b+1],L.z=c[b+2];const N=v(L)/2/Math.PI+.5,X=g(L)/Math.PI+.5;u.push(N,1-X)}T(),y()}function y(){for(let L=0;L<u.length;L+=6){const b=u[L+0],N=u[L+2],X=u[L+4],k=Math.max(b,N,X),U=Math.min(b,N,X);k>.9&&U<.1&&(b<.2&&(u[L+0]+=1),N<.2&&(u[L+2]+=1),X<.2&&(u[L+4]+=1))}}function x(L){c.push(L.x,L.y,L.z)}function S(L,b){const N=L*3;b.x=e[N+0],b.y=e[N+1],b.z=e[N+2]}function T(){const L=new Y,b=new Y,N=new Y,X=new Y,k=new ut,U=new ut,W=new ut;for(let he=0,M=0;he<c.length;he+=9,M+=6){L.set(c[he+0],c[he+1],c[he+2]),b.set(c[he+3],c[he+4],c[he+5]),N.set(c[he+6],c[he+7],c[he+8]),k.set(u[M+0],u[M+1]),U.set(u[M+2],u[M+3]),W.set(u[M+4],u[M+5]),X.copy(L).add(b).add(N).divideScalar(3);const P=v(X);C(k,M+0,L,P),C(U,M+2,b,P),C(W,M+4,N,P)}}function C(L,b,N,X){X<0&&L.x===1&&(u[b]=L.x-1),N.x===0&&N.z===0&&(u[b]=X/2/Math.PI+.5)}function v(L){return Math.atan2(L.z,-L.x)}function g(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.vertices,e.indices,e.radius,e.details)}}class Wr extends Ya{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class za extends Ya{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new za(e.radius,e.detail)}}class uf extends Hn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let m=0;const _=[],y=new Y,x=new Y,S=[],T=[],C=[],v=[];for(let g=0;g<=r;g++){const L=[],b=g/r;let N=0;g===0&&u===0?N=.5/n:g===r&&p===Math.PI&&(N=-.5/n);for(let X=0;X<=n;X++){const k=X/n;y.x=-e*Math.cos(o+k*c)*Math.sin(u+b*f),y.y=e*Math.cos(u+b*f),y.z=e*Math.sin(o+k*c)*Math.sin(u+b*f),T.push(y.x,y.y,y.z),x.copy(y).normalize(),C.push(x.x,x.y,x.z),v.push(k+N,1-b),L.push(m++)}_.push(L)}for(let g=0;g<r;g++)for(let L=0;L<n;L++){const b=_[g][L+1],N=_[g][L],X=_[g+1][L],k=_[g+1][L+1];(g!==0||u>0)&&S.push(b,N,k),(g!==r-1||p<Math.PI)&&S.push(N,X,k)}this.setIndex(S),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(C,3)),this.setAttribute("uv",new mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kl extends Ya{constructor(e=1,n=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],o=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,o,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new kl(e.radius,e.detail)}}class df extends Hn{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c},r=Math.floor(r),o=Math.floor(o);const u=[],f=[],p=[],m=[],_=new Y,y=new Y,x=new Y;for(let S=0;S<=r;S++)for(let T=0;T<=o;T++){const C=T/o*c,v=S/r*Math.PI*2;y.x=(e+n*Math.cos(v))*Math.cos(C),y.y=(e+n*Math.cos(v))*Math.sin(C),y.z=n*Math.sin(v),f.push(y.x,y.y,y.z),_.x=e*Math.cos(C),_.y=e*Math.sin(C),x.subVectors(y,_).normalize(),p.push(x.x,x.y,x.z),m.push(T/o),m.push(S/r)}for(let S=1;S<=r;S++)for(let T=1;T<=o;T++){const C=(o+1)*S+T-1,v=(o+1)*(S-1)+T-1,g=(o+1)*(S-1)+T,L=(o+1)*S+T;u.push(C,v,L),u.push(v,g,L)}this.setIndex(u),this.setAttribute("position",new mn(f,3)),this.setAttribute("normal",new mn(p,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Va extends qs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vg,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Og extends yn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const nd=new Ot,Gm=new Y,Wm=new Y;class EE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gm),Wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Wm),n.updateMatrixWorld(),nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jm=new Ot,Fa=new Y,id=new Y;class wE extends EE{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Fa.setFromMatrixPosition(e.matrixWorld),r.position.copy(Fa),id.copy(r.position),id.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(id),r.updateMatrixWorld(),o.makeTranslation(-Fa.x,-Fa.y,-Fa.z),jm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jm)}}class Ba extends Og{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new wE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ff extends Og{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class hf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Xm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Xm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);const qm=[{count:150,suffix:"+",label:"Projects Delivered"},{count:98,suffix:"%",label:"Client Satisfaction"},{count:12,suffix:"+",label:"Years of Excellence"},{count:40,suffix:"+",label:"Global Clients"}];function TE(){const s=vt.useRef(null);return vt.useEffect(()=>{const e=s.current;if(!e)return;const n=new of({canvas:e,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(0,0);const r=new lf,o=new xn(60,1,.1,200);o.position.set(0,0,30);const c=()=>{const q=e.parentElement.offsetWidth,re=e.parentElement.offsetHeight;n.setSize(q,re),o.aspect=q/re,o.updateProjectionMatrix()};c(),window.addEventListener("resize",c),r.add(new ff(16777215,.6));const u=new Ba(6514417,3,80);u.position.set(-15,10,10),r.add(u);const f=new Ba(15485081,2,60);f.position.set(15,-10,5),r.add(f);const p=new Ba(440020,1.5,50);p.position.set(0,15,-5),r.add(p);const m=new Fs;r.add(m);const _=[new Wr(3.5,1),new za(2.2,0),new kl(1.8,0),new Wr(1.4,0),new za(1,0),new Wr(.8,0),new kl(1.2,0),new za(.7,0)],y=[6514417,9133302,15485081,440020,6514417,9133302,15485081,440020],x=_.map((q,re)=>{const le=new Va({color:y[re],wireframe:re%2===0,transparent:!0,opacity:re%2===0?.55:.18,shininess:80}),ee=new bn(q,le),ce=re/_.length*Math.PI*2,B=8+re%3*4;return ee.position.set(Math.cos(ce)*B,Math.sin(ce)*B*.5+(Math.random()-.5)*6,(Math.random()-.5)*12),ee.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),ee.userData={rotSpeed:new Y((Math.random()-.5)*.008,(Math.random()-.5)*.012,(Math.random()-.5)*.006),floatSpeed:.3+Math.random()*.5,floatAmp:.8+Math.random()*1.2,floatOffset:Math.random()*Math.PI*2,baseY:ee.position.y},m.add(ee),ee}),S=new bn(new Wr(6,2),new Va({color:6514417,wireframe:!0,transparent:!0,opacity:.08}));S.position.set(0,0,-5),r.add(S);const T=2e3,C=new Float32Array(T*3),v=new Float32Array(T*3),g=[new ot(6514417),new ot(9133302),new ot(15485081),new ot(440020)];for(let q=0;q<T;q++){C[q*3]=(Math.random()-.5)*80,C[q*3+1]=(Math.random()-.5)*50,C[q*3+2]=(Math.random()-.5)*40-10;const re=g[Math.floor(Math.random()*g.length)];v[q*3]=re.r,v[q*3+1]=re.g,v[q*3+2]=re.b}const L=new Hn;L.setAttribute("position",new Nn(C,3)),L.setAttribute("color",new Nn(v,3));const b=new cf({size:.18,vertexColors:!0,transparent:!0,opacity:.7,sizeAttenuation:!0}),N=new kg(L,b);r.add(N);const X=new ut(0,0),k=new ut(0,0),U=new ut(0,0),W=q=>{X.x=q.clientX/window.innerWidth*2-1,X.y=q.clientY/window.innerHeight*2-1,k.x=X.y*.3,k.y=X.x*.5};document.addEventListener("mousemove",W);const he=()=>{const q=document.documentElement.getAttribute("data-theme")==="dark";b.opacity=q?.7:.5,S.material.opacity=q?.08:.06};document.addEventListener("themechange",he),he();const M=new hf;let P;const ie=()=>{P=requestAnimationFrame(ie);const q=M.getElapsedTime();U.x+=(k.x-U.x)*.05,U.y+=(k.y-U.y)*.05,m.rotation.x=U.x*.4,m.rotation.y=U.y*.4+q*.04,S.rotation.x=q*.05,S.rotation.y=q*.08,x.forEach(le=>{le.rotation.x+=le.userData.rotSpeed.x,le.rotation.y+=le.userData.rotSpeed.y,le.rotation.z+=le.userData.rotSpeed.z,le.position.y=le.userData.baseY+Math.sin(q*le.userData.floatSpeed+le.userData.floatOffset)*le.userData.floatAmp});const re=L.attributes.position;for(let le=0;le<T;le++){const ee=re.getX(le),ce=re.getZ(le);re.setY(le,Math.sin(ee*.15+q*.4)*2.5+Math.cos(ce*.1+q*.3)*1.5)}re.needsUpdate=!0,N.rotation.y=q*.015,u.position.x=Math.sin(q*.4)*20,u.position.y=Math.cos(q*.3)*15,f.position.x=Math.cos(q*.35)*18,f.position.y=Math.sin(q*.45)*12,n.render(r,o)};return ie(),()=>{cancelAnimationFrame(P),window.removeEventListener("resize",c),document.removeEventListener("mousemove",W),document.removeEventListener("themechange",he),n.dispose()}},[]),w.jsxs("section",{className:"hero",id:"hero",children:[w.jsx("div",{className:"hero-bg",children:w.jsx("canvas",{ref:s,className:"three-canvas"})}),w.jsxs("div",{className:"hero-container",children:[w.jsxs("div",{className:"hero-badge reveal-up",children:[w.jsx("span",{className:"badge-dot"})," Now accepting projects for Q3 2026"]}),w.jsxs("h1",{className:"hero-title",children:[w.jsx("span",{className:"hero-line reveal-up","data-delay":"0.1",children:"We Craft"}),w.jsx("span",{className:"hero-line hero-line-accent reveal-up","data-delay":"0.2",children:"Digital"}),w.jsx("span",{className:"hero-line reveal-up","data-delay":"0.3",children:"Experiences"})]}),w.jsxs("p",{className:"hero-desc reveal-up","data-delay":"0.4",children:["NexaStudio is a New York-based digital agency building bold brands,",w.jsx("br",{}),"high-performance websites, and scalable products since 2012."]}),w.jsxs("div",{className:"hero-cta reveal-up","data-delay":"0.5",children:[w.jsxs("a",{href:"#work",className:"btn btn-primary btn-lg magnetic",children:[w.jsx(Jv,{size:16})," View Our Work"]}),w.jsxs("a",{href:"#about",className:"btn btn-ghost btn-lg magnetic",children:[w.jsx(Hv,{size:16})," Our Story"]})]}),w.jsx("div",{className:"hero-stats reveal-up","data-delay":"0.6",children:qm.map((e,n)=>w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"stat",children:[w.jsxs("div",{className:"stat-row",children:[w.jsx("span",{className:"stat-num","data-count":e.count,children:"0"}),w.jsx("span",{className:"stat-suffix",children:e.suffix})]}),w.jsx("p",{children:e.label})]},e.label),n<qm.length-1&&w.jsx("div",{className:"stat-divider"},`d${n}`)]}))})]}),w.jsx("div",{className:"hero-scroll",children:w.jsxs("div",{className:"scroll-indicator",children:[w.jsx("div",{className:"scroll-line"}),w.jsx("span",{children:"Scroll"})]})})]})}const Ym=["Branding","Web Design","Development","Motion Design","UI/UX","Strategy"];function AE(){const s=[...Ym,...Ym];return w.jsx("div",{className:"marquee-section",children:w.jsx("div",{className:"marquee-track",children:w.jsx("div",{className:"marquee-content",children:s.map((e,n)=>w.jsxs("span",{children:[e,n<s.length-1&&w.jsx("span",{className:"dot",children:" ✦ "})]},n))})})})}const CE=[{Icon:kv,title:"Awwwards",sub:"Site of the Day — 2024"},{Icon:ng,title:"CSS Design Awards",sub:"Best Innovation — 2023"},{Icon:f_,title:"Webby Awards",sub:"Honoree — 2022 & 2023"}],RE=[{Icon:m_,label:"Fast Delivery"},{Icon:Wv,label:"Pixel Perfect"},{Icon:c_,label:"Secure & Scalable"},{Icon:Kv,label:"Global Reach"},{Icon:Zv,label:"24/7 Support"},{Icon:zv,label:"Data-Driven"}];function bE(){return w.jsx("section",{className:"about section",id:"about",children:w.jsx("div",{className:"container",children:w.jsxs("div",{className:"about-grid",children:[w.jsx("div",{className:"about-visual",children:w.jsxs("div",{className:"about-img-wrap reveal-left",children:[w.jsx("div",{className:"about-img-bg"}),w.jsx("div",{className:"about-img-card",children:w.jsxs("div",{className:"about-img-inner",children:[w.jsx("div",{className:"about-shape shape-1"}),w.jsx("div",{className:"about-shape shape-2"}),w.jsx("div",{className:"about-shape shape-3"}),w.jsx("div",{className:"about-visual-stats",children:CE.map(({Icon:s,title:e,sub:n})=>w.jsxs("div",{className:"vs-item",children:[w.jsx(s,{size:20}),w.jsxs("div",{children:[w.jsx("strong",{children:e}),w.jsx("small",{children:n})]})]},e))}),w.jsxs("div",{className:"about-badge-float",children:[w.jsx(rg,{size:20}),w.jsxs("div",{children:[w.jsx("strong",{children:"$2.4B+ Revenue"}),w.jsx("small",{children:"Generated for clients"})]})]})]})})]})}),w.jsxs("div",{className:"about-content",children:[w.jsx("div",{className:"section-tag reveal-up",children:"About NexaStudio"}),w.jsxs("h2",{className:"section-title reveal-up",children:["We are a team of ",w.jsx("span",{className:"text-gradient",children:"creative rebels"})]}),w.jsx("p",{className:"about-text reveal-up",children:"Founded in 2012 by Alex Kim and Sofia Reyes, NexaStudio is a full-service digital agency headquartered in New York City with studios in London and Singapore. We partner with ambitious brands — from Fortune 500 companies to bold startups — to create digital experiences that connect, inspire, and convert."}),w.jsx("p",{className:"about-text reveal-up",children:"Our 60-person multidisciplinary team of designers, engineers, strategists, and storytellers has shipped over 150 projects across 30+ countries. We don't just build websites — we build digital businesses."}),w.jsx("div",{className:"about-features reveal-up",children:RE.map(({Icon:s,label:e})=>w.jsxs("div",{className:"feature-item",children:[w.jsx(s,{size:18}),w.jsx("span",{children:e})]},e))}),w.jsxs("a",{href:"#contact",className:"btn btn-primary magnetic reveal-up",children:[w.jsx(Qm,{size:16})," Work With Us"]})]})]})})})}const PE=[{Icon:i_,title:"Brand Identity",desc:"Logos, visual systems, brand guidelines, and tone-of-voice frameworks that make you instantly recognizable and unforgettable.",tags:["Logo Design","Style Guide","Typography"],delay:"0.1"},{Icon:n_,title:"Web Design & Dev",desc:"High-performance, SEO-optimized websites and web apps built with React, Next.js, and cutting-edge animation libraries.",tags:["React","Next.js","GSAP"],delay:"0.15"},{Icon:d_,title:"Mobile Apps",desc:"Native iOS & Android apps and cross-platform solutions with intuitive UX that users love to open every single day.",tags:["iOS","Android","Flutter"],delay:"0.2"},{Icon:Yv,title:"Motion & 3D",desc:"Cinematic animations, 3D product visualizations, and interactive WebGL experiences that bring your brand to life.",tags:["After Effects","Three.js","Blender"],delay:"0.25"},{Icon:rg,title:"Digital Strategy",desc:"Data-driven growth strategies, SEO audits, conversion optimization, and analytics frameworks aligned with your KPIs.",tags:["SEO","Analytics","CRO"],delay:"0.3"},{Icon:u_,title:"E-Commerce",desc:"Conversion-optimized storefronts on Shopify, WooCommerce, or fully custom platforms that turn browsers into buyers.",tags:["Shopify","WooCommerce","Custom"],delay:"0.35"}];function LE(){const s=vt.useRef(null);return vt.useEffect(()=>{const e=s.current;if(!e)return;const n=new of({canvas:e,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(0,0);const r=new lf,o=new xn(50,1,.1,200);o.position.set(0,0,25);const c=()=>{const S=e.parentElement.offsetWidth,T=e.parentElement.offsetHeight;n.setSize(S,T),o.aspect=S/T,o.updateProjectionMatrix()};c(),window.addEventListener("resize",c),r.add(new ff(16777215,.5));const u=new Ba(9133302,2,60);u.position.set(10,10,10),r.add(u);const f=new Fs;r.add(f);const m=[{r:5,tube:.15,color:6514417},{r:8,tube:.12,color:9133302},{r:11,tube:.1,color:15485081},{r:14,tube:.08,color:440020}].map(({r:S,tube:T,color:C},v)=>{const g=new bn(new df(S,T,16,100),new Va({color:C,transparent:!0,opacity:.35,shininess:100}));return g.rotation.x=.5*(v+1),g.rotation.y=.3*(v+1),f.add(g),g});for(let S=0;S<30;S++){const T=new bn(new uf(.12+Math.random()*.2,8,8),new Va({color:[6514417,9133302,15485081,440020][S%4],transparent:!0,opacity:.6})),C=Math.random()*Math.PI*2,v=4+Math.random()*12;T.position.set(Math.cos(C)*v,(Math.random()-.5)*10,Math.sin(C)*v-5),f.add(T)}const _=new hf;let y;const x=()=>{y=requestAnimationFrame(x);const S=_.getElapsedTime();m.forEach((T,C)=>{T.rotation.z+=.003*(C%2===0?1:-1),T.rotation.x+=.001}),f.rotation.y=S*.05,n.render(r,o)};return x(),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",c),n.dispose()}},[]),w.jsxs("section",{className:"services section",id:"services",children:[w.jsx("canvas",{ref:s,className:"section-three-canvas"}),w.jsxs("div",{className:"container",children:[w.jsxs("div",{className:"section-header",children:[w.jsx("div",{className:"section-tag reveal-up",children:"What We Do"}),w.jsxs("h2",{className:"section-title reveal-up",children:["Services that ",w.jsx("span",{className:"text-gradient",children:"move the needle"})]}),w.jsx("p",{className:"section-subtitle reveal-up",children:"End-to-end digital solutions tailored to your business goals."})]}),w.jsx("div",{className:"services-grid",children:PE.map(({Icon:e,title:n,desc:r,tags:o,delay:c})=>w.jsxs("div",{className:"service-card reveal-up","data-delay":c,children:[w.jsx("div",{className:"service-icon-wrap",children:w.jsx(e,{size:26})}),w.jsx("h3",{children:n}),w.jsx("p",{children:r}),w.jsx("div",{className:"service-tags",children:o.map(u=>w.jsx("span",{children:u},u))}),w.jsx("div",{className:"service-arrow",children:w.jsx(Fv,{size:20})})]},n))})]})]})}const NE=[{category:"web",delay:"0.1",c1:"#6366f1",c2:"#8b5cf6",cat:"Web Design & Development",title:"Luminary Finance Platform",desc:"A next-gen investment dashboard for 50,000+ users with real-time data visualization and AI-powered insights.",mock:"default"},{category:"branding",delay:"0.15",c1:"#f59e0b",c2:"#ef4444",cat:"Brand Identity",title:"Solaris Energy — Brand Overhaul",desc:"Complete rebrand for a $400M renewable energy company — logo, identity system, and 200-page brand guidelines.",mock:"brand",letter:"S"},{category:"web",delay:"0.2",wide:!0,c1:"#10b981",c2:"#06b6d4",cat:"Web App + Motion Design",title:"Verdant — Sustainability Intelligence Platform",desc:"An enterprise SaaS dashboard tracking carbon footprint across 12 industries. Won the 2024 Webby Award for Best Data Visualization.",mock:"wide"},{category:"mobile",delay:"0.25",c1:"#ec4899",c2:"#8b5cf6",cat:"Mobile App — iOS & Android",title:"Bloom — Mental Wellness App",desc:`A mindfulness and therapy app with 500K+ downloads, featured in Apple's App Store "Apps We Love" collection.`,mock:"mobile"},{category:"branding",delay:"0.3",c1:"#f97316",c2:"#facc15",cat:"Brand Identity + Merchandise",title:"Apex Sports — Global Rebrand",desc:"Full identity system for a professional sports brand across 18 countries — from jersey design to stadium signage.",mock:"brand",letter:"A"}];function DE({mock:s,letter:e,c1:n,c2:r}){return s==="brand"?w.jsxs("div",{className:"work-mock work-mock-brand",children:[w.jsx("div",{className:"mock-logo-big",children:e}),w.jsxs("div",{className:"mock-brand-lines",children:[w.jsx("span",{}),w.jsx("span",{})]})]}):s==="wide"?w.jsxs("div",{className:"work-mock work-mock-wide",children:[w.jsx("div",{className:"mock-sidebar"}),w.jsxs("div",{className:"mock-main",children:[w.jsx("div",{className:"mock-chart"}),w.jsxs("div",{className:"mock-stats-row",children:[w.jsx("span",{}),w.jsx("span",{}),w.jsx("span",{})]})]})]}):s==="mobile"?w.jsx("div",{className:"work-mock work-mock-mobile",children:w.jsx("div",{className:"mock-phone",children:w.jsxs("div",{className:"mock-phone-screen",children:[w.jsx("div",{className:"mock-ph-header"}),w.jsxs("div",{className:"mock-ph-content",children:[w.jsx("span",{}),w.jsx("span",{}),w.jsx("span",{})]})]})})}):w.jsxs("div",{className:"work-mock",children:[w.jsx("div",{className:"mock-bar"}),w.jsxs("div",{className:"mock-lines",children:[w.jsx("span",{}),w.jsx("span",{}),w.jsx("span",{})]}),w.jsxs("div",{className:"mock-card-row",children:[w.jsx("span",{}),w.jsx("span",{})]})]})}function IE(){const[s,e]=vt.useState("all"),n=["all","branding","web","mobile"];return w.jsx("section",{className:"work section",id:"work",children:w.jsxs("div",{className:"container",children:[w.jsxs("div",{className:"section-header",children:[w.jsx("div",{className:"section-tag reveal-up",children:"Portfolio"}),w.jsxs("h2",{className:"section-title reveal-up",children:["Selected ",w.jsx("span",{className:"text-gradient",children:"Work"})]}),w.jsx("p",{className:"section-subtitle reveal-up",children:"A curated selection of projects we're proud of."})]}),w.jsx("div",{className:"work-filter reveal-up",children:n.map(r=>w.jsx("button",{className:`filter-btn${s===r?" active":""}`,onClick:()=>e(r),children:r==="all"?"All Projects":r.charAt(0).toUpperCase()+r.slice(1)},r))}),w.jsx("div",{className:"work-grid",children:NE.map(({category:r,delay:o,wide:c,c1:u,c2:f,cat:p,title:m,desc:_,mock:y,letter:x})=>{const S=s!=="all"&&s!==r;return w.jsxs("div",{className:`work-card reveal-up${c?" work-card-wide":""}${S?" hidden":""}`,"data-category":r,"data-delay":o,style:S?{opacity:0,transform:"scale(0.95)",pointerEvents:"none"}:{},children:[w.jsxs("div",{className:"work-img",children:[w.jsx("div",{className:"work-placeholder",style:{"--c1":u,"--c2":f},children:w.jsx(DE,{mock:y,letter:x,c1:u,c2:f})}),w.jsx("div",{className:"work-overlay",children:w.jsxs("span",{className:"work-view",children:[w.jsx(Xv,{size:16})," View Project"]})})]}),w.jsxs("div",{className:"work-info",children:[w.jsx("span",{className:"work-cat",children:p}),w.jsx("h3",{children:m}),w.jsx("p",{className:"work-desc",children:_})]})]},m)})}),w.jsx("div",{className:"work-cta reveal-up",children:w.jsxs("a",{href:"#contact",className:"btn btn-ghost btn-lg magnetic",children:[w.jsx($v,{size:16})," See All 150+ Projects"]})})]})})}const $m=[{Icon:o_,num:"01",title:"Discovery",desc:"We run deep-dive workshops to understand your brand, audience, competitors, and goals — building a strategic foundation before a single pixel is drawn.",delay:"0.1"},{Icon:qv,num:"02",title:"Design",desc:"Our designers craft high-fidelity prototypes in Figma, iterating with you until every interaction, animation, and layout feels exactly right.",delay:"0.2"},{Icon:Gv,num:"03",title:"Build",desc:"Our engineers write clean, tested, and documented code — optimized for performance, accessibility (WCAG 2.1), and long-term maintainability.",delay:"0.3"},{Icon:a_,num:"04",title:"Launch & Grow",desc:"We deploy with zero-downtime pipelines, monitor performance post-launch, and provide ongoing support as your product scales.",delay:"0.4"}];function UE(){return w.jsx("section",{className:"process section",children:w.jsxs("div",{className:"container",children:[w.jsxs("div",{className:"section-header",children:[w.jsx("div",{className:"section-tag reveal-up",children:"How We Work"}),w.jsxs("h2",{className:"section-title reveal-up",children:["Our ",w.jsx("span",{className:"text-gradient",children:"Process"})]}),w.jsx("p",{className:"section-subtitle reveal-up",children:"A proven 4-step framework that delivers results, every time."})]}),w.jsx("div",{className:"process-steps",children:$m.map(({Icon:s,num:e,title:n,desc:r,delay:o},c)=>w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"process-step reveal-up","data-delay":o,children:[w.jsx("div",{className:"step-icon",children:w.jsx(s,{size:22})}),w.jsx("div",{className:"step-num",children:e}),w.jsxs("div",{className:"step-content",children:[w.jsx("h3",{children:n}),w.jsx("p",{children:r})]})]},n),c<$m.length-1&&w.jsx("div",{className:"process-connector"},`c${c}`)]}))})]})})}const FE=[{initials:"AK",c1:"#6366f1",c2:"#8b5cf6",name:"Alex Kim",role:"CEO & Creative Director",bio:"15 years shaping digital brands. Former Creative Lead at Pentagram. Speaker at SXSW and Awwwards Conference.",socials:[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Ll,href:"https://dribbble.com",label:"Dribbble"}],delay:"0.1"},{initials:"SR",c1:"#f59e0b",c2:"#ef4444",name:"Sofia Reyes",role:"Co-Founder & Design Lead",bio:"Award-winning UX designer with 12 years of experience. Previously at Apple Design Team and IDEO. Figma Community Ambassador.",socials:[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Ll,href:"https://dribbble.com",label:"Dribbble"}],delay:"0.2"},{initials:"MP",c1:"#10b981",c2:"#06b6d4",name:"Marcus Park",role:"Head of Engineering",bio:"Full-stack architect with deep expertise in React, Node.js, and cloud infrastructure. Ex-Google SWE. Open-source contributor with 8K+ GitHub stars.",socials:[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:qd,href:"https://github.com",label:"GitHub"},{Icon:Is,href:"https://twitter.com",label:"Twitter"}],delay:"0.3"},{initials:"LN",c1:"#ec4899",c2:"#8b5cf6",name:"Luna Nakamura",role:"Motion & 3D Director",bio:"Specialist in WebGL, Three.js, and cinematic motion design. Her work has been featured in Motionographer and Stash Magazine.",socials:[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Yd,href:"https://instagram.com",label:"Instagram"}],delay:"0.4"}];function kE(){return w.jsx("section",{className:"team section",id:"team",children:w.jsxs("div",{className:"container",children:[w.jsxs("div",{className:"section-header",children:[w.jsx("div",{className:"section-tag reveal-up",children:"The People"}),w.jsxs("h2",{className:"section-title reveal-up",children:["Meet the ",w.jsx("span",{className:"text-gradient",children:"Team"})]}),w.jsx("p",{className:"section-subtitle reveal-up",children:"60 talented humans across New York, London, and Singapore."})]}),w.jsx("div",{className:"team-grid",children:FE.map(({initials:s,c1:e,c2:n,name:r,role:o,bio:c,socials:u,delay:f})=>w.jsxs("div",{className:"team-card reveal-up","data-delay":f,children:[w.jsx("div",{className:"team-avatar",style:{"--c1":e,"--c2":n},children:s}),w.jsxs("div",{className:"team-info",children:[w.jsx("h3",{children:r}),w.jsx("span",{className:"team-role",children:o}),w.jsx("p",{className:"team-bio",children:c}),w.jsx("div",{className:"team-socials",children:u.map(({Icon:p,href:m,label:_})=>w.jsx("a",{href:m,target:"_blank",rel:"noopener","aria-label":_,children:w.jsx(p,{size:14})},_))})]})]},r))})]})})}const ka=[{quote:'"NexaStudio completely transformed our digital presence. Within 3 months of launch, our conversion rate increased by 340% and organic traffic doubled. The attention to detail and creative vision they brought was beyond anything we expected."',name:"James Mitchell",title:"CEO, Luminary Finance — New York",initials:"JM",c1:"#6366f1",c2:"#8b5cf6"},{quote:`"Working with NexaStudio on our rebrand was a game-changer. They delivered a stunning brand identity that perfectly captures our company's spirit. The new brand helped us close a $50M Series B round — investors loved the professionalism."`,name:"Emma Laurent",title:"Founder & CEO, Solaris Energy — Paris",initials:"EL",c1:"#10b981",c2:"#06b6d4"},{quote:`"The team's technical expertise combined with their design sensibility is genuinely rare. Our Bloom app launched to 500K downloads in the first month, was featured by Apple, and has a 4.9-star rating. NexaStudio delivered beyond every KPI."`,name:"Ryan Chen",title:"CTO, Bloom Health — San Francisco",initials:"RC",c1:"#f59e0b",c2:"#ef4444"},{quote:`"We've worked with many agencies over 20 years. NexaStudio is in a different league. They think like business partners, not just service providers. The Verdant platform they built won a Webby Award and is now used by 200+ enterprise clients."`,name:"Diana Walsh",title:"VP Product, Verdant Technologies — London",initials:"DW",c1:"#ec4899",c2:"#8b5cf6"}];function OE(){const[s,e]=vt.useState(0),n=vt.useRef(null),r=c=>{e((c+ka.length)%ka.length),o()},o=()=>{clearInterval(n.current),n.current=setInterval(()=>e(c=>(c+1)%ka.length),5e3)};return vt.useEffect(()=>(o(),()=>clearInterval(n.current)),[]),w.jsx("section",{className:"testimonials section",children:w.jsxs("div",{className:"container",children:[w.jsxs("div",{className:"section-header",children:[w.jsx("div",{className:"section-tag reveal-up",children:"Client Love"}),w.jsxs("h2",{className:"section-title reveal-up",children:["What clients ",w.jsx("span",{className:"text-gradient",children:"say"})]})]}),w.jsxs("div",{className:"testimonials-slider",onMouseEnter:()=>clearInterval(n.current),onMouseLeave:o,children:[w.jsx("div",{className:"testimonial-track",style:{transform:`translateX(-${s*100}%)`},children:ka.map(({quote:c,name:u,title:f,initials:p,c1:m,c2:_})=>w.jsxs("div",{className:"testimonial-card",children:[w.jsx(s_,{size:36,className:"quote-icon"}),w.jsx("div",{className:"testimonial-stars",children:[...Array(5)].map((y,x)=>w.jsx(ng,{size:16,fill:"#f59e0b",stroke:"#f59e0b"},x))}),w.jsx("p",{children:c}),w.jsxs("div",{className:"testimonial-author",children:[w.jsx("div",{className:"author-avatar",style:{"--c1":m,"--c2":_},children:p}),w.jsxs("div",{children:[w.jsx("strong",{children:u}),w.jsx("span",{children:f})]})]})]},u))}),w.jsxs("div",{className:"slider-controls",children:[w.jsx("button",{className:"slider-btn",onClick:()=>r(s-1),"aria-label":"Previous slide",children:w.jsx(Uv,{size:18})}),w.jsx("div",{className:"slider-dots",children:ka.map((c,u)=>w.jsx("button",{className:`slider-dot${u===s?" active":""}`,onClick:()=>r(u),"aria-label":`Slide ${u+1}`},u))}),w.jsx("button",{className:"slider-btn",onClick:()=>r(s+1),"aria-label":"Next slide",children:w.jsx(Qm,{size:18})})]})]})]})})}function zE(){const s=vt.useRef(null);return vt.useEffect(()=>{const e=s.current;if(!e)return;const n=new of({canvas:e,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(0,0);const r=new lf,o=new xn(60,1,.1,200);o.position.set(0,0,20);const c=()=>{const g=e.parentElement.offsetWidth,L=e.parentElement.offsetHeight;n.setSize(g,L),o.aspect=g/L,o.updateProjectionMatrix()};c(),window.addEventListener("resize",c),r.add(new ff(16777215,.8));const u=new Ba(6514417,3,80);u.position.set(0,0,10),r.add(u);const f=1500,p=new Float32Array(f*3),m=new Float32Array(f*3),_=[new ot(6514417),new ot(9133302),new ot(15485081)];for(let g=0;g<f;g++){const L=5+Math.random()*20,b=Math.random()*Math.PI*2,N=Math.acos(2*Math.random()-1);p[g*3]=L*Math.sin(N)*Math.cos(b),p[g*3+1]=L*Math.sin(N)*Math.sin(b),p[g*3+2]=L*Math.cos(N);const X=_[g%3];m[g*3]=X.r,m[g*3+1]=X.g,m[g*3+2]=X.b}const y=new Hn;y.setAttribute("position",new Nn(p,3)),y.setAttribute("color",new Nn(m,3));const x=new kg(y,new cf({size:.22,vertexColors:!0,transparent:!0,opacity:.8}));r.add(x);const S=new bn(new Wr(2.5,1),new Va({color:6514417,wireframe:!0,transparent:!0,opacity:.3}));r.add(S);const T=new hf;let C;const v=()=>{C=requestAnimationFrame(v);const g=T.getElapsedTime();x.rotation.y=g*.06,x.rotation.x=g*.02,S.rotation.y=g*.15,S.rotation.x=g*.1,u.intensity=2.5+Math.sin(g*2)*.5,n.render(r,o)};return v(),()=>{cancelAnimationFrame(C),window.removeEventListener("resize",c),n.dispose()}},[]),w.jsxs("section",{className:"cta-banner",children:[w.jsx("canvas",{ref:s,className:"section-three-canvas"}),w.jsx("div",{className:"cta-orb cta-orb-1"}),w.jsx("div",{className:"cta-orb cta-orb-2"}),w.jsx("div",{className:"container",children:w.jsxs("div",{className:"cta-content reveal-up",children:[w.jsxs("h2",{children:["Ready to build something ",w.jsx("span",{className:"text-gradient",children:"extraordinary?"})]}),w.jsx("p",{children:"Let's turn your vision into a digital reality that stands out."}),w.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg magnetic",children:"Start a Project"})]})})]})}const BE=[{Icon:Jm,label:"Email",content:w.jsx("a",{href:"mailto:hello@nexastudio.com",children:"hello@nexastudio.com"})},{Icon:r_,label:"Phone",content:w.jsx("a",{href:"tel:+12125550100",children:"+1 (212) 555-0100"})},{Icon:eg,label:"HQ Office",content:w.jsxs("span",{children:["350 Fifth Avenue, Suite 4100",w.jsx("br",{}),"New York, NY 10118"]})},{Icon:Vv,label:"Working Hours",content:w.jsx("span",{children:"Mon – Fri, 9:00 AM – 6:00 PM EST"})}],HE=[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Yd,href:"https://instagram.com",label:"Instagram"},{Icon:Ll,href:"https://dribbble.com",label:"Dribbble"},{Icon:qd,href:"https://github.com",label:"GitHub"}];function VE(){const[s,e]=vt.useState(!1),[n,r]=vt.useState({name:"",email:"",company:"",budget:"",service:"",message:""}),o=c=>{c.preventDefault(),!(!n.name.trim()||!n.email.trim()||!n.message.trim())&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)&&e(!0)};return w.jsx("section",{className:"contact section",id:"contact",children:w.jsx("div",{className:"container",children:w.jsxs("div",{className:"contact-grid",children:[w.jsxs("div",{className:"contact-info",children:[w.jsx("div",{className:"section-tag reveal-up",children:"Get In Touch"}),w.jsxs("h2",{className:"section-title reveal-up",children:["Let's create something ",w.jsx("span",{className:"text-gradient",children:"great"})]}),w.jsx("p",{className:"about-text reveal-up",children:"Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours."}),w.jsx("div",{className:"contact-details reveal-up",children:BE.map(({Icon:c,label:u,content:f})=>w.jsxs("div",{className:"contact-item",children:[w.jsx("div",{className:"contact-icon-wrap",children:w.jsx(c,{size:18})}),w.jsxs("div",{children:[w.jsx("strong",{children:u}),f]})]},u))}),w.jsx("div",{className:"social-links reveal-up",children:HE.map(({Icon:c,href:u,label:f})=>w.jsx("a",{href:u,target:"_blank",rel:"noopener",className:"social-link magnetic","aria-label":f,children:w.jsx(c,{size:18})},f))})]}),w.jsx("div",{className:"contact-form-wrap reveal-right",children:s?w.jsxs("div",{className:"form-success",children:[w.jsx("div",{className:"success-icon",children:w.jsx(Bv,{size:56,stroke:"#22c55e"})}),w.jsx("h3",{children:"Message Sent!"}),w.jsx("p",{children:"Thanks for reaching out. We'll get back to you within 24 hours."})]}):w.jsxs("form",{className:"contact-form",onSubmit:o,children:[w.jsxs("div",{className:"form-row",children:[w.jsxs("div",{className:"form-group",children:[w.jsxs("label",{htmlFor:"name",children:[w.jsx(h_,{size:14})," Your Name"]}),w.jsx("input",{type:"text",id:"name",placeholder:"John Doe",required:!0,value:n.name,onChange:c=>r(u=>({...u,name:c.target.value}))})]}),w.jsxs("div",{className:"form-group",children:[w.jsxs("label",{htmlFor:"email",children:[w.jsx(Jm,{size:14})," Email Address"]}),w.jsx("input",{type:"email",id:"email",placeholder:"john@company.com",required:!0,value:n.email,onChange:c=>r(u=>({...u,email:c.target.value}))})]})]}),w.jsxs("div",{className:"form-group",children:[w.jsxs("label",{htmlFor:"company",children:[w.jsx(Ov,{size:14})," Company Name"]}),w.jsx("input",{type:"text",id:"company",placeholder:"Acme Inc.",value:n.company,onChange:c=>r(u=>({...u,company:c.target.value}))})]}),w.jsxs("div",{className:"form-group",children:[w.jsxs("label",{htmlFor:"budget",children:[w.jsx(jv,{size:14})," Project Budget"]}),w.jsxs("select",{id:"budget",value:n.budget,onChange:c=>r(u=>({...u,budget:c.target.value})),children:[w.jsx("option",{value:"",children:"Select your budget range"}),w.jsx("option",{children:"$5,000 – $15,000"}),w.jsx("option",{children:"$15,000 – $50,000"}),w.jsx("option",{children:"$50,000 – $150,000"}),w.jsx("option",{children:"$150,000+"})]})]}),w.jsxs("div",{className:"form-group",children:[w.jsxs("label",{htmlFor:"service",children:[w.jsx(Qv,{size:14})," Service Interested In"]}),w.jsxs("select",{id:"service",value:n.service,onChange:c=>r(u=>({...u,service:c.target.value})),children:[w.jsx("option",{value:"",children:"Select a service"}),w.jsx("option",{children:"Brand Identity"}),w.jsx("option",{children:"Web Design & Development"}),w.jsx("option",{children:"Mobile App"}),w.jsx("option",{children:"Motion & 3D"}),w.jsx("option",{children:"Digital Strategy"}),w.jsx("option",{children:"E-Commerce"}),w.jsx("option",{children:"Full-Service Partnership"})]})]}),w.jsxs("div",{className:"form-group",children:[w.jsxs("label",{htmlFor:"message",children:[w.jsx(t_,{size:14})," Tell Us About Your Project"]}),w.jsx("textarea",{id:"message",rows:"5",placeholder:"Describe your project, goals, timeline...",required:!0,value:n.message,onChange:c=>r(u=>({...u,message:c.target.value}))})]}),w.jsxs("button",{type:"submit",className:"btn btn-primary btn-full magnetic",children:[w.jsx(l_,{size:16})," Send Message"]})]})})]})})})}const GE=[{Icon:Ds,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Is,href:"https://twitter.com",label:"Twitter"},{Icon:Yd,href:"https://instagram.com",label:"Instagram"},{Icon:Ll,href:"https://dribbble.com",label:"Dribbble"},{Icon:qd,href:"https://github.com",label:"GitHub"}],WE=[{label:"About Us",href:"#about"},{label:"Our Team",href:"#team"},{label:"Portfolio",href:"#work"},{label:"Contact",href:"#contact"},{label:"Careers",href:"#",badge:"3 Open"}],jE=["Brand Identity","Web Design & Dev","Mobile Apps","Motion & 3D","E-Commerce"],XE=[{city:"New York",addr:"350 Fifth Ave, Suite 4100"},{city:"London",addr:"1 Canada Square, Canary Wharf"},{city:"Singapore",addr:"1 Raffles Place, #20-61"}];function qE(){return w.jsx("footer",{className:"footer",children:w.jsxs("div",{className:"container",children:[w.jsxs("div",{className:"footer-top",children:[w.jsxs("div",{className:"footer-brand",children:[w.jsxs("div",{className:"nav-logo",children:["NEXA",w.jsx("span",{children:"STUDIO"})]}),w.jsx("p",{children:"Crafting digital experiences that inspire, connect, and convert — since 2012."}),w.jsx("div",{className:"footer-socials",children:GE.map(({Icon:s,href:e,label:n})=>w.jsx("a",{href:e,target:"_blank",rel:"noopener","aria-label":n,children:w.jsx(s,{size:15})},n))})]}),w.jsxs("div",{className:"footer-links",children:[w.jsxs("div",{className:"footer-col",children:[w.jsx("h4",{children:"Company"}),w.jsx("ul",{children:WE.map(({label:s,href:e,badge:n})=>w.jsx("li",{children:w.jsxs("a",{href:e,children:[w.jsx(Xp,{size:12}),s,n&&w.jsx("span",{className:"footer-badge",children:n})]})},s))})]}),w.jsxs("div",{className:"footer-col",children:[w.jsx("h4",{children:"Services"}),w.jsx("ul",{children:jE.map(s=>w.jsx("li",{children:w.jsxs("a",{href:"#services",children:[w.jsx(Xp,{size:12}),s]})},s))})]}),w.jsxs("div",{className:"footer-col",children:[w.jsx("h4",{children:"Offices"}),w.jsx("ul",{className:"footer-offices",children:XE.map(({city:s,addr:e})=>w.jsxs("li",{children:[w.jsx(eg,{size:14}),w.jsxs("div",{children:[w.jsx("strong",{children:s}),w.jsx("span",{children:e})]})]},s))})]})]})]}),w.jsxs("div",{className:"footer-bottom",children:[w.jsx("p",{children:"© 2026 NexaStudio Inc. All rights reserved."}),w.jsxs("div",{className:"footer-legal",children:[w.jsx("a",{href:"#",children:"Privacy Policy"}),w.jsx("a",{href:"#",children:"Terms of Service"}),w.jsx("a",{href:"#",children:"Cookie Settings"})]})]})]})})}function YE(){const[s,e]=vt.useState(()=>localStorage.getItem("nexaTheme")||"light");return vt.useEffect(()=>{document.documentElement.setAttribute("data-theme",s),localStorage.setItem("nexaTheme",s),document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:s}}))},[s]),{theme:s,toggleTheme:()=>e(r=>r==="dark"?"light":"dark")}}function $E(){const[s,e]=vt.useState(!1),n=()=>{e(!0),document.body.style.overflow="hidden"},r=()=>{e(!1),document.body.style.overflow=""};return vt.useEffect(()=>()=>{document.body.style.overflow=""},[]),{menuOpen:s,openMenu:n,closeMenu:r}}function KE(){vt.useEffect(()=>{const s=document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");if(!s.length)return;const e=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){const o=r.target,c=parseFloat(o.dataset.delay||0);o.style.transitionDelay=c+"s",o.classList.add("revealed"),e.unobserve(o)}})},{threshold:.2});return s.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}const ZE=s=>1-(1-s)*(1-s);function QE(){vt.useEffect(()=>{const s=document.querySelectorAll(".stat-num[data-count]");if(!s.length)return;const e=new IntersectionObserver(n=>{n.forEach(r=>{if(!r.isIntersecting)return;const o=r.target,c=parseInt(o.dataset.count,10),u=2e3,f=performance.now(),p=m=>{const _=Math.min((m-f)/u,1);o.textContent=Math.round(ZE(_)*c),_<1&&requestAnimationFrame(p)};requestAnimationFrame(p),e.unobserve(o)})},{threshold:.5});return s.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}function JE(){vt.useEffect(()=>{(()=>{document.querySelectorAll(".magnetic").forEach(e=>{const n=o=>{const c=e.getBoundingClientRect(),u=(o.clientX-c.left-c.width/2)*.3,f=(o.clientY-c.top-c.height/2)*.3;e.style.transform=`translate(${u}px, ${f}px)`},r=()=>{e.style.transform=""};e.addEventListener("mousemove",n),e.addEventListener("mouseleave",r)})})()},[])}function ew(){vt.useEffect(()=>{const s=document.getElementById("nav"),e=document.querySelectorAll(".nav-link");if(!s)return;const n=()=>s.classList.toggle("scrolled",window.scrollY>50);window.addEventListener("scroll",n,{passive:!0}),n();const r=document.querySelectorAll("section[id]"),o=new IntersectionObserver(c=>{c.forEach(u=>{if(u.isIntersecting){const f=u.target.getAttribute("id");e.forEach(p=>p.classList.toggle("active",p.getAttribute("href")===`#${f}`))}})},{rootMargin:"-40% 0px -55% 0px"});return r.forEach(c=>o.observe(c)),()=>{window.removeEventListener("scroll",n),o.disconnect()}},[])}function tw(){vt.useEffect(()=>{const s=document.querySelector(".hero-container");if(!s)return;const e=()=>{const n=window.scrollY;n>window.innerHeight||(s.style.transform=`translateY(${n*.25}px)`,s.style.opacity=`${1-n/(window.innerHeight*.8)}`)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[])}function nw(){const{theme:s,toggleTheme:e}=YE(),{menuOpen:n,openMenu:r,closeMenu:o}=$E();return KE(),QE(),JE(),ew(),tw(),w.jsxs(w.Fragment,{children:[w.jsx(bv,{}),w.jsx(Lv,{}),w.jsx(g_,{theme:s,onToggle:e}),w.jsx(__,{theme:s,onToggle:e,onMenuOpen:r}),w.jsx(y_,{open:n,onClose:o}),w.jsxs("main",{children:[w.jsx(TE,{}),w.jsx(AE,{}),w.jsx(bE,{}),w.jsx(LE,{}),w.jsx(IE,{}),w.jsx(UE,{}),w.jsx(kE,{}),w.jsx(OE,{}),w.jsx(zE,{}),w.jsx(VE,{})]}),w.jsx(qE,{})]})}Rv.createRoot(document.getElementById("root")).render(w.jsx(Sv.StrictMode,{children:w.jsx(nw,{})}));
