(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function xf(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ve={},Mi=[],xn=()=>{},CT=()=>!1,AT=/^on[^a-z]/,hu=t=>AT.test(t),kf=t=>t.startsWith("onUpdate:"),ct=Object.assign,Cf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},RT=Object.prototype.hasOwnProperty,Ie=(t,e)=>RT.call(t,e),se=Array.isArray,Fi=t=>rc(t)==="[object Map]",du=t=>rc(t)==="[object Set]",ng=t=>rc(t)==="[object Date]",pe=t=>typeof t=="function",lt=t=>typeof t=="string",ba=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",c_=t=>Fe(t)&&pe(t.then)&&pe(t.catch),l_=Object.prototype.toString,rc=t=>l_.call(t),NT=t=>rc(t).slice(8,-1),u_=t=>rc(t)==="[object Object]",Af=t=>lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rl=xf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},DT=/-(\w)/g,es=fu(t=>t.replace(DT,(e,n)=>n?n.toUpperCase():"")),PT=/\B([A-Z])/g,ui=fu(t=>t.replace(PT,"-$1").toLowerCase()),pu=fu(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sh=fu(t=>t?`on${pu(t)}`:""),Ia=(t,e)=>!Object.is(t,e),il=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},kl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ud=t=>{const e=parseFloat(t);return isNaN(e)?t:e},OT=t=>{const e=lt(t)?Number(t):NaN;return isNaN(e)?t:e};let sg;const hd=()=>sg||(sg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rf(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=lt(s)?UT(s):Rf(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(lt(t))return t;if(Fe(t))return t}}const LT=/;(?![^(]*\))/g,MT=/:([^]+)/,FT=/\/\*[^]*?\*\//g;function UT(t){const e={};return t.replace(FT,"").split(LT).forEach(n=>{if(n){const s=n.split(MT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function kn(t){let e="";if(lt(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const s=kn(t[n]);s&&(e+=s+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $T="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",VT=xf($T);function h_(t){return!!t||t===""}function BT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=mu(t[s],e[s]);return n}function mu(t,e){if(t===e)return!0;let n=ng(t),s=ng(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ba(t),s=ba(e),n||s)return t===e;if(n=se(t),s=se(e),n||s)return n&&s?BT(t,e):!1;if(n=Fe(t),s=Fe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!mu(t[o],e[o]))return!1}}return String(t)===String(e)}function d_(t,e){return t.findIndex(n=>mu(n,e))}const ke=t=>lt(t)?t:t==null?"":se(t)||Fe(t)&&(t.toString===l_||!pe(t.toString))?JSON.stringify(t,f_,2):String(t),f_=(t,e)=>e&&e.__v_isRef?f_(t,e.value):Fi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:du(e)?{[`Set(${e.size})`]:[...e.values()]}:Fe(e)&&!se(e)&&!u_(e)?String(e):e;let on;class p_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function m_(t){return new p_(t)}function qT(t,e=on){e&&e.active&&e.effects.push(t)}function g_(){return on}function jT(t){on&&on.cleanups.push(t)}const Nf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},y_=t=>(t.w&Ys)>0,v_=t=>(t.n&Ys)>0,zT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ys},HT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];y_(r)&&!v_(r)?r.delete(t):e[n++]=r,r.w&=~Ys,r.n&=~Ys}e.length=n}},Cl=new WeakMap;let Qo=0,Ys=1;const dd=30;let In;const qr=Symbol(""),fd=Symbol("");class Df{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qT(this,s)}run(){if(!this.active)return this.fn();let e=In,n=zs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=In,In=this,zs=!0,Ys=1<<++Qo,Qo<=dd?zT(this):rg(this),this.fn()}finally{Qo<=dd&&HT(this),Ys=1<<--Qo,In=this.parent,zs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){In===this?this.deferStop=!0:this.active&&(rg(this),this.onStop&&this.onStop(),this.active=!1)}}function rg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zs=!0;const __=[];function fo(){__.push(zs),zs=!1}function po(){const t=__.pop();zs=t===void 0?!0:t}function tn(t,e,n){if(zs&&In){let s=Cl.get(t);s||Cl.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Nf()),w_(r)}}function w_(t,e){let n=!1;Qo<=dd?v_(t)||(t.n|=Ys,n=!y_(t)):n=!t.has(In),n&&(t.add(In),In.deps.push(t))}function ps(t,e,n,s,r,i){const o=Cl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&se(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":se(t)?Af(n)&&a.push(o.get("length")):(a.push(o.get(qr)),Fi(t)&&a.push(o.get(fd)));break;case"delete":se(t)||(a.push(o.get(qr)),Fi(t)&&a.push(o.get(fd)));break;case"set":Fi(t)&&a.push(o.get(qr));break}if(a.length===1)a[0]&&pd(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);pd(Nf(c))}}function pd(t,e){const n=se(t)?t:[...t];for(const s of n)s.computed&&ig(s);for(const s of n)s.computed||ig(s)}function ig(t,e){(t!==In||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function KT(t,e){var n;return(n=Cl.get(t))==null?void 0:n.get(e)}const GT=xf("__proto__,__v_isRef,__isVue"),b_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ba)),WT=Pf(),QT=Pf(!1,!0),YT=Pf(!0),og=XT();function XT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=be(this);for(let i=0,o=this.length;i<o;i++)tn(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(be)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fo();const s=be(this)[e].apply(this,n);return po(),s}}),t}function JT(t){const e=be(this);return tn(e,"has",t),e.hasOwnProperty(t)}function Pf(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?pS:x_:e?S_:T_).get(s))return s;const o=se(s);if(!t){if(o&&Ie(og,r))return Reflect.get(og,r,i);if(r==="hasOwnProperty")return JT}const a=Reflect.get(s,r,i);return(ba(r)?b_.has(r):GT(r))||(t||tn(s,"get",r),e)?a:nt(a)?o&&Af(r)?a:a.value:Fe(a)?t?k_(a):mo(a):a}}const ZT=I_(),eS=I_(!0);function I_(t=!1){return function(n,s,r,i){let o=n[s];if(Gi(o)&&nt(o)&&!nt(r))return!1;if(!t&&(!Al(r)&&!Gi(r)&&(o=be(o),r=be(r)),!se(n)&&nt(o)&&!nt(r)))return o.value=r,!0;const a=se(n)&&Af(s)?Number(s)<n.length:Ie(n,s),c=Reflect.set(n,s,r,i);return n===be(i)&&(a?Ia(r,o)&&ps(n,"set",s,r):ps(n,"add",s,r)),c}}function tS(t,e){const n=Ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ps(t,"delete",e,void 0),s}function nS(t,e){const n=Reflect.has(t,e);return(!ba(e)||!b_.has(e))&&tn(t,"has",e),n}function sS(t){return tn(t,"iterate",se(t)?"length":qr),Reflect.ownKeys(t)}const E_={get:WT,set:ZT,deleteProperty:tS,has:nS,ownKeys:sS},rS={get:YT,set(t,e){return!0},deleteProperty(t,e){return!0}},iS=ct({},E_,{get:QT,set:eS}),Of=t=>t,gu=t=>Reflect.getPrototypeOf(t);function Fc(t,e,n=!1,s=!1){t=t.__v_raw;const r=be(t),i=be(e);n||(e!==i&&tn(r,"get",e),tn(r,"get",i));const{has:o}=gu(r),a=s?Of:n?Ff:Ea;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Uc(t,e=!1){const n=this.__v_raw,s=be(n),r=be(t);return e||(t!==r&&tn(s,"has",t),tn(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function $c(t,e=!1){return t=t.__v_raw,!e&&tn(be(t),"iterate",qr),Reflect.get(t,"size",t)}function ag(t){t=be(t);const e=be(this);return gu(e).has.call(e,t)||(e.add(t),ps(e,"add",t,t)),this}function cg(t,e){e=be(e);const n=be(this),{has:s,get:r}=gu(n);let i=s.call(n,t);i||(t=be(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ia(e,o)&&ps(n,"set",t,e):ps(n,"add",t,e),this}function lg(t){const e=be(this),{has:n,get:s}=gu(e);let r=n.call(e,t);r||(t=be(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ps(e,"delete",t,void 0),i}function ug(){const t=be(this),e=t.size!==0,n=t.clear();return e&&ps(t,"clear",void 0,void 0),n}function Vc(t,e){return function(s,r){const i=this,o=i.__v_raw,a=be(o),c=e?Of:t?Ff:Ea;return!t&&tn(a,"iterate",qr),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Bc(t,e,n){return function(...s){const r=this.__v_raw,i=be(r),o=Fi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Of:e?Ff:Ea;return!e&&tn(i,"iterate",c?fd:qr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ks(t){return function(...e){return t==="delete"?!1:this}}function oS(){const t={get(i){return Fc(this,i)},get size(){return $c(this)},has:Uc,add:ag,set:cg,delete:lg,clear:ug,forEach:Vc(!1,!1)},e={get(i){return Fc(this,i,!1,!0)},get size(){return $c(this)},has:Uc,add:ag,set:cg,delete:lg,clear:ug,forEach:Vc(!1,!0)},n={get(i){return Fc(this,i,!0)},get size(){return $c(this,!0)},has(i){return Uc.call(this,i,!0)},add:ks("add"),set:ks("set"),delete:ks("delete"),clear:ks("clear"),forEach:Vc(!0,!1)},s={get(i){return Fc(this,i,!0,!0)},get size(){return $c(this,!0)},has(i){return Uc.call(this,i,!0)},add:ks("add"),set:ks("set"),delete:ks("delete"),clear:ks("clear"),forEach:Vc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Bc(i,!1,!1),n[i]=Bc(i,!0,!1),e[i]=Bc(i,!1,!0),s[i]=Bc(i,!0,!0)}),[t,n,e,s]}const[aS,cS,lS,uS]=oS();function Lf(t,e){const n=e?t?uS:lS:t?cS:aS;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ie(n,r)&&r in s?n:s,r,i)}const hS={get:Lf(!1,!1)},dS={get:Lf(!1,!0)},fS={get:Lf(!0,!1)},T_=new WeakMap,S_=new WeakMap,x_=new WeakMap,pS=new WeakMap;function mS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gS(t){return t.__v_skip||!Object.isExtensible(t)?0:mS(NT(t))}function mo(t){return Gi(t)?t:Mf(t,!1,E_,hS,T_)}function yS(t){return Mf(t,!1,iS,dS,S_)}function k_(t){return Mf(t,!0,rS,fS,x_)}function Mf(t,e,n,s,r){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=gS(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Hs(t){return Gi(t)?Hs(t.__v_raw):!!(t&&t.__v_isReactive)}function Gi(t){return!!(t&&t.__v_isReadonly)}function Al(t){return!!(t&&t.__v_isShallow)}function C_(t){return Hs(t)||Gi(t)}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function yu(t){return kl(t,"__v_skip",!0),t}const Ea=t=>Fe(t)?mo(t):t,Ff=t=>Fe(t)?k_(t):t;function A_(t){zs&&In&&(t=be(t),w_(t.dep||(t.dep=Nf())))}function R_(t,e){t=be(t);const n=t.dep;n&&pd(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function he(t){return N_(t,!1)}function vS(t){return N_(t,!0)}function N_(t,e){return nt(t)?t:new _S(t,e)}class _S{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:Ea(e)}get value(){return A_(this),this._value}set value(e){const n=this.__v_isShallow||Al(e)||Gi(e);e=n?e:be(e),Ia(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ea(e),R_(this))}}function ue(t){return nt(t)?t.value:t}const wS={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return nt(r)&&!nt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function D_(t){return Hs(t)?t:new Proxy(t,wS)}function bS(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=ES(t,n);return e}class IS{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return KT(be(this._object),this._key)}}function ES(t,e,n){const s=t[e];return nt(s)?s:new IS(t,e,n)}class TS{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Df(e,()=>{this._dirty||(this._dirty=!0,R_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=be(this);return A_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function SS(t,e,n=!1){let s,r;const i=pe(t);return i?(s=t,r=xn):(s=t.get,r=t.set),new TS(s,r,i||!r,n)}function Ks(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){vu(i,e,n)}return r}function mn(t,e,n,s){if(pe(t)){const i=Ks(t,e,n,s);return i&&c_(i)&&i.catch(o=>{vu(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(mn(t[i],e,n,s));return r}function vu(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ks(c,null,10,[t,o,a]);return}}xS(t,n,r,s)}function xS(t,e,n,s=!0){console.error(t)}let Ta=!1,md=!1;const Lt=[];let Vn=0;const Ui=[];let os=null,xr=0;const P_=Promise.resolve();let Uf=null;function $f(t){const e=Uf||P_;return t?e.then(this?t.bind(this):t):e}function kS(t){let e=Vn+1,n=Lt.length;for(;e<n;){const s=e+n>>>1;Sa(Lt[s])<t?e=s+1:n=s}return e}function Vf(t){(!Lt.length||!Lt.includes(t,Ta&&t.allowRecurse?Vn+1:Vn))&&(t.id==null?Lt.push(t):Lt.splice(kS(t.id),0,t),O_())}function O_(){!Ta&&!md&&(md=!0,Uf=P_.then(M_))}function CS(t){const e=Lt.indexOf(t);e>Vn&&Lt.splice(e,1)}function AS(t){se(t)?Ui.push(...t):(!os||!os.includes(t,t.allowRecurse?xr+1:xr))&&Ui.push(t),O_()}function hg(t,e=Ta?Vn+1:0){for(;e<Lt.length;e++){const n=Lt[e];n&&n.pre&&(Lt.splice(e,1),e--,n())}}function L_(t){if(Ui.length){const e=[...new Set(Ui)];if(Ui.length=0,os){os.push(...e);return}for(os=e,os.sort((n,s)=>Sa(n)-Sa(s)),xr=0;xr<os.length;xr++)os[xr]();os=null,xr=0}}const Sa=t=>t.id==null?1/0:t.id,RS=(t,e)=>{const n=Sa(t)-Sa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function M_(t){md=!1,Ta=!0,Lt.sort(RS);const e=xn;try{for(Vn=0;Vn<Lt.length;Vn++){const n=Lt[Vn];n&&n.active!==!1&&Ks(n,null,14)}}finally{Vn=0,Lt.length=0,L_(),Ta=!1,Uf=null,(Lt.length||Ui.length)&&M_()}}function NS(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ve;d&&(r=n.map(f=>lt(f)?f.trim():f)),h&&(r=n.map(ud))}let a,c=s[a=Sh(e)]||s[a=Sh(es(e))];!c&&i&&(c=s[a=Sh(ui(e))]),c&&mn(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mn(l,t,6,r)}}function F_(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!pe(t)){const c=l=>{const u=F_(l,e,!0);u&&(a=!0,ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Fe(t)&&s.set(t,null),null):(se(i)?i.forEach(c=>o[c]=null):ct(o,i),Fe(t)&&s.set(t,o),o)}function _u(t,e){return!t||!hu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,ui(e))||Ie(t,e))}let yt=null,U_=null;function Rl(t){const e=yt;return yt=t,U_=t&&t.type.__scopeId||null,e}function Me(t,e=yt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Eg(-1);const i=Rl(e);let o;try{o=t(...r)}finally{Rl(i),s._d&&Eg(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xh(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:v}=t;let _,S;const N=Rl(t);try{if(n.shapeFlag&4){const C=r||s;_=$n(u.call(C,C,h,i,f,d,m)),S=c}else{const C=e;_=$n(C.length>1?C(i,{attrs:c,slots:a,emit:l}):C(i,null)),S=e.props?c:DS(c)}}catch(C){oa.length=0,vu(C,t,1),_=L(vn)}let D=_;if(S&&v!==!1){const C=Object.keys(S),{shapeFlag:H}=D;C.length&&H&7&&(o&&C.some(kf)&&(S=PS(S,o)),D=Js(D,S))}return n.dirs&&(D=Js(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),_=D,Rl(N),_}const DS=t=>{let e;for(const n in t)(n==="class"||n==="style"||hu(n))&&((e||(e={}))[n]=t[n]);return e},PS=(t,e)=>{const n={};for(const s in t)(!kf(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function OS(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?dg(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!_u(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?dg(s,o,l):!0:!!o;return!1}function dg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!_u(n,i))return!0}return!1}function LS({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const MS=t=>t.__isSuspense;function FS(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):AS(t)}const qc={};function Gs(t,e,n){return $_(t,e,n)}function $_(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ve){var a;const c=g_()===((a=ht)==null?void 0:a.scope)?ht:null;let l,u=!1,h=!1;if(nt(t)?(l=()=>t.value,u=Al(t)):Hs(t)?(l=()=>t,s=!0):se(t)?(h=!0,u=t.some(C=>Hs(C)||Al(C)),l=()=>t.map(C=>{if(nt(C))return C.value;if(Hs(C))return Lr(C);if(pe(C))return Ks(C,c,2)})):pe(t)?e?l=()=>Ks(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),mn(t,c,3,[f])}:l=xn,e&&s){const C=l;l=()=>Lr(C())}let d,f=C=>{d=N.onStop=()=>{Ks(C,c,4)}},m;if(Ca)if(f=xn,e?n&&mn(e,c,3,[l(),h?[]:void 0,f]):l(),r==="sync"){const C=Px();m=C.__watcherHandles||(C.__watcherHandles=[])}else return xn;let v=h?new Array(t.length).fill(qc):qc;const _=()=>{if(N.active)if(e){const C=N.run();(s||u||(h?C.some((H,ee)=>Ia(H,v[ee])):Ia(C,v)))&&(d&&d(),mn(e,c,3,[C,v===qc?void 0:h&&v[0]===qc?[]:v,f]),v=C)}else N.run()};_.allowRecurse=!!e;let S;r==="sync"?S=_:r==="post"?S=()=>Gt(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),S=()=>Vf(_));const N=new Df(l,S);e?n?_():v=N.run():r==="post"?Gt(N.run.bind(N),c&&c.suspense):N.run();const D=()=>{N.stop(),c&&c.scope&&Cf(c.scope.effects,N)};return m&&m.push(D),D}function US(t,e,n){const s=this.proxy,r=lt(t)?t.includes(".")?V_(s,t):()=>s[t]:t.bind(s,s);let i;pe(e)?i=e:(i=e.handler,n=e);const o=ht;Wi(this);const a=$_(r,i.bind(s),n);return o?Wi(o):jr(),a}function V_(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Lr(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))Lr(t.value,e);else if(se(t))for(let n=0;n<t.length;n++)Lr(t[n],e);else if(du(t)||Fi(t))t.forEach(n=>{Lr(n,e)});else if(u_(t))for(const n in t)Lr(t[n],e);return t}function gn(t,e){const n=yt;if(n===null)return t;const s=Tu(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ve]=e[i];o&&(pe(o)&&(o={mounted:o,updated:o}),o.deep&&Lr(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function _r(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(fo(),mn(c,n,8,[t.el,a,t,e]),po())}}function $S(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hr(()=>{t.isMounted=!0}),K_(()=>{t.isUnmounting=!0}),t}const dn=[Function,Array],B_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},VS={name:"BaseTransition",props:B_,setup(t,{slots:e}){const n=Sx(),s=$S();let r;return()=>{const i=e.default&&j_(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==vn){o=v;break}}const a=be(t),{mode:c}=a;if(s.isLeaving)return kh(o);const l=fg(o);if(!l)return kh(o);const u=gd(l,a,s,n);yd(l,u);const h=n.subTree,d=h&&fg(h);let f=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,f=!0)}if(d&&d.type!==vn&&(!kr(l,d)||f)){const v=gd(d,a,s,n);if(yd(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},kh(o);c==="in-out"&&l.type!==vn&&(v.delayLeave=(_,S,N)=>{const D=q_(s,d);D[String(d.key)]=d,_._leaveCb=()=>{S(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},BS=VS;function q_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function gd(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:v,onAppear:_,onAfterAppear:S,onAppearCancelled:N}=e,D=String(t.key),C=q_(n,t),H=(F,W)=>{F&&mn(F,s,9,W)},ee=(F,W)=>{const fe=W[1];H(F,W),se(F)?F.every(Pe=>Pe.length<=1)&&fe():F.length<=1&&fe()},ae={mode:i,persisted:o,beforeEnter(F){let W=a;if(!n.isMounted)if(r)W=v||a;else return;F._leaveCb&&F._leaveCb(!0);const fe=C[D];fe&&kr(t,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),H(W,[F])},enter(F){let W=c,fe=l,Pe=u;if(!n.isMounted)if(r)W=_||c,fe=S||l,Pe=N||u;else return;let Q=!1;const Te=F._enterCb=Et=>{Q||(Q=!0,Et?H(Pe,[F]):H(fe,[F]),ae.delayedLeave&&ae.delayedLeave(),F._enterCb=void 0)};W?ee(W,[F,Te]):Te()},leave(F,W){const fe=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return W();H(h,[F]);let Pe=!1;const Q=F._leaveCb=Te=>{Pe||(Pe=!0,W(),Te?H(m,[F]):H(f,[F]),F._leaveCb=void 0,C[fe]===t&&delete C[fe])};C[fe]=t,d?ee(d,[F,Q]):Q()},clone(F){return gd(F,e,n,s)}};return ae}function kh(t){if(wu(t))return t=Js(t),t.children=null,t}function fg(t){return wu(t)?t.children?t.children[0]:void 0:t}function yd(t,e){t.shapeFlag&6&&t.component?yd(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function j_(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&r++,s=s.concat(j_(o.children,e,a))):(e||o.type!==vn)&&s.push(a!=null?Js(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function z_(t,e){return pe(t)?(()=>ct({name:t.name},e,{setup:t}))():t}const ra=t=>!!t.type.__asyncLoader,wu=t=>t.type.__isKeepAlive;function qS(t,e){H_(t,"a",e)}function jS(t,e){H_(t,"da",e)}function H_(t,e,n=ht){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(bu(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wu(r.parent.vnode)&&zS(s,e,n,r),r=r.parent}}function zS(t,e,n,s){const r=bu(e,t,s,!0);G_(()=>{Cf(s[e],r)},n)}function bu(t,e,n=ht,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fo(),Wi(n);const a=mn(e,n,t,o);return jr(),po(),a});return s?r.unshift(i):r.push(i),i}}const _s=t=>(e,n=ht)=>(!Ca||t==="sp")&&bu(t,(...s)=>e(...s),n),HS=_s("bm"),hr=_s("m"),KS=_s("bu"),GS=_s("u"),K_=_s("bum"),G_=_s("um"),WS=_s("sp"),QS=_s("rtg"),YS=_s("rtc");function XS(t,e=ht){bu("ec",t,e)}const W_="components";function go(t,e){return ZS(W_,t,!0,e)||t}const JS=Symbol.for("v-ndc");function ZS(t,e,n=!0,s=!1){const r=yt||ht;if(r){const i=r.type;if(t===W_){const a=Rx(i,!1);if(a&&(a===e||a===es(e)||a===pu(es(e))))return i}const o=pg(r[t]||i[t],e)||pg(r.appContext[t],e);return!o&&s?i:o}}function pg(t,e){return t&&(t[e]||t[es(e)]||t[pu(es(e))])}function Cn(t,e,n,s){let r;const i=n&&n[s];if(se(t)||lt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Fe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Bf(t,e,n={},s,r){if(yt.isCE||yt.parent&&ra(yt.parent)&&yt.parent.isCE)return e!=="default"&&(n.name=e),L("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),K();const o=i&&Q_(i(n)),a=Xs(Le,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Q_(t){return t.some(e=>Dl(e)?!(e.type===vn||e.type===Le&&!Q_(e.children)):!0)?t:null}const vd=t=>t?ow(t)?Tu(t)||t.proxy:vd(t.parent):null,ia=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vd(t.parent),$root:t=>vd(t.root),$emit:t=>t.emit,$options:t=>qf(t),$forceUpdate:t=>t.f||(t.f=()=>Vf(t.update)),$nextTick:t=>t.n||(t.n=$f.bind(t.proxy)),$watch:t=>US.bind(t)}),Ch=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Ie(t,e),ex={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ch(s,e))return o[e]=1,s[e];if(r!==Ve&&Ie(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Ie(l,e))return o[e]=3,i[e];if(n!==Ve&&Ie(n,e))return o[e]=4,n[e];_d&&(o[e]=0)}}const u=ia[e];let h,d;if(u)return e==="$attrs"&&tn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&Ie(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Ie(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ch(r,e)?(r[e]=n,!0):s!==Ve&&Ie(s,e)?(s[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&Ie(t,o)||Ch(e,o)||(a=i[0])&&Ie(a,o)||Ie(s,o)||Ie(ia,o)||Ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mg(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _d=!0;function tx(t){const e=qf(t),n=t.proxy,s=t.ctx;_d=!1,e.beforeCreate&&gg(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:v,deactivated:_,beforeDestroy:S,beforeUnmount:N,destroyed:D,unmounted:C,render:H,renderTracked:ee,renderTriggered:ae,errorCaptured:F,serverPrefetch:W,expose:fe,inheritAttrs:Pe,components:Q,directives:Te,filters:Et}=e;if(l&&nx(l,s,null),o)for(const Oe in o){const Se=o[Oe];pe(Se)&&(s[Oe]=Se.bind(n))}if(r){const Oe=r.call(n,n);Fe(Oe)&&(t.data=mo(Oe))}if(_d=!0,i)for(const Oe in i){const Se=i[Oe],rs=pe(Se)?Se.bind(n,n):pe(Se.get)?Se.get.bind(n,n):xn,xs=!pe(Se)&&pe(Se.set)?Se.set.bind(n):xn,Ln=gt({get:rs,set:xs});Object.defineProperty(s,Oe,{enumerable:!0,configurable:!0,get:()=>Ln.value,set:Kt=>Ln.value=Kt})}if(a)for(const Oe in a)Y_(a[Oe],s,n,Oe);if(c){const Oe=pe(c)?c.call(n):c;Reflect.ownKeys(Oe).forEach(Se=>{ol(Se,Oe[Se])})}u&&gg(u,t,"c");function ye(Oe,Se){se(Se)?Se.forEach(rs=>Oe(rs.bind(n))):Se&&Oe(Se.bind(n))}if(ye(HS,h),ye(hr,d),ye(KS,f),ye(GS,m),ye(qS,v),ye(jS,_),ye(XS,F),ye(YS,ee),ye(QS,ae),ye(K_,N),ye(G_,C),ye(WS,W),se(fe))if(fe.length){const Oe=t.exposed||(t.exposed={});fe.forEach(Se=>{Object.defineProperty(Oe,Se,{get:()=>n[Se],set:rs=>n[Se]=rs})})}else t.exposed||(t.exposed={});H&&t.render===xn&&(t.render=H),Pe!=null&&(t.inheritAttrs=Pe),Q&&(t.components=Q),Te&&(t.directives=Te)}function nx(t,e,n=xn){se(t)&&(t=wd(t));for(const s in t){const r=t[s];let i;Fe(r)?"default"in r?i=yn(r.from||s,r.default,!0):i=yn(r.from||s):i=yn(r),nt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function gg(t,e,n){mn(se(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Y_(t,e,n,s){const r=s.includes(".")?V_(n,s):()=>n[s];if(lt(t)){const i=e[t];pe(i)&&Gs(r,i)}else if(pe(t))Gs(r,t.bind(n));else if(Fe(t))if(se(t))t.forEach(i=>Y_(i,e,n,s));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Gs(r,i,t)}}function qf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Nl(c,l,o,!0)),Nl(c,e,o)),Fe(e)&&i.set(e,c),c}function Nl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Nl(t,i,n,!0),r&&r.forEach(o=>Nl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=sx[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sx={data:yg,props:vg,emits:vg,methods:Yo,computed:Yo,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Yo,directives:Yo,watch:ix,provide:yg,inject:rx};function yg(t,e){return e?t?function(){return ct(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function rx(t,e){return Yo(wd(t),wd(e))}function wd(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Yo(t,e){return t?ct(Object.create(null),t,e):e}function vg(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:ct(Object.create(null),mg(t),mg(e??{})):e}function ix(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const s in e)n[s]=Bt(t[s],e[s]);return n}function X_(){return{app:null,config:{isNativeTag:CT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ox=0;function ax(t,e){return function(s,r=null){pe(s)||(s=ct({},s)),r!=null&&!Fe(r)&&(r=null);const i=X_(),o=new Set;let a=!1;const c=i.app={_uid:ox++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ox,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&pe(l.install)?(o.add(l),l.install(c,...u)):pe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=L(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Tu(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){xa=c;try{return l()}finally{xa=null}}};return c}}let xa=null;function ol(t,e){if(ht){let n=ht.provides;const s=ht.parent&&ht.parent.provides;s===n&&(n=ht.provides=Object.create(s)),n[t]=e}}function yn(t,e,n=!1){const s=ht||yt;if(s||xa){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:xa._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&pe(e)?e.call(s&&s.proxy):e}}function cx(){return!!(ht||yt||xa)}function lx(t,e,n,s=!1){const r={},i={};kl(i,Eu,1),t.propsDefaults=Object.create(null),J_(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:yS(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ux(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=be(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(_u(t.emitsOptions,d))continue;const f=e[d];if(c)if(Ie(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const m=es(d);r[m]=bd(c,a,m,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{J_(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!Ie(e,h)&&((u=ui(h))===h||!Ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=bd(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Ie(e,h))&&(delete i[h],l=!0)}l&&ps(t,"set","$attrs")}function J_(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(rl(c))continue;const l=e[c];let u;r&&Ie(r,u=es(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:_u(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=be(n),l=a||Ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=bd(r,c,h,l[h],t,!Ie(l,h))}}return o}function bd(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Wi(r),s=l[n]=c.call(null,e),jr())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ui(n))&&(s=!0))}return s}function Z_(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!pe(t)){const u=h=>{c=!0;const[d,f]=Z_(h,e,!0);ct(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Fe(t)&&s.set(t,Mi),Mi;if(se(i))for(let u=0;u<i.length;u++){const h=es(i[u]);_g(h)&&(o[h]=Ve)}else if(i)for(const u in i){const h=es(u);if(_g(h)){const d=i[u],f=o[h]=se(d)||pe(d)?{type:d}:ct({},d);if(f){const m=Ig(Boolean,f.type),v=Ig(String,f.type);f[0]=m>-1,f[1]=v<0||m<v,(m>-1||Ie(f,"default"))&&a.push(h)}}}const l=[o,a];return Fe(t)&&s.set(t,l),l}function _g(t){return t[0]!=="$"}function wg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function bg(t,e){return wg(t)===wg(e)}function Ig(t,e){return se(e)?e.findIndex(n=>bg(n,t)):pe(e)&&bg(e,t)?0:-1}const ew=t=>t[0]==="_"||t==="$stable",jf=t=>se(t)?t.map($n):[$n(t)],hx=(t,e,n)=>{if(e._n)return e;const s=Me((...r)=>jf(e(...r)),n);return s._c=!1,s},tw=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ew(r))continue;const i=t[r];if(pe(i))e[r]=hx(r,i,s);else if(i!=null){const o=jf(i);e[r]=()=>o}}},nw=(t,e)=>{const n=jf(e);t.slots.default=()=>n},dx=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=be(e),kl(e,"_",n)):tw(e,t.slots={})}else t.slots={},e&&nw(t,e);kl(t.slots,Eu,1)},fx=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ct(r,e),!n&&a===1&&delete r._):(i=!e.$stable,tw(e,r)),o=e}else e&&(nw(t,e),o={default:1});if(i)for(const a in r)!ew(a)&&!(a in o)&&delete r[a]};function Id(t,e,n,s,r=!1){if(se(t)){t.forEach((d,f)=>Id(d,e&&(se(e)?e[f]:e),n,s,r));return}if(ra(s)&&!r)return;const i=s.shapeFlag&4?Tu(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(lt(l)?(u[l]=null,Ie(h,l)&&(h[l]=null)):nt(l)&&(l.value=null)),pe(c))Ks(c,a,12,[o,u]);else{const d=lt(c),f=nt(c);if(d||f){const m=()=>{if(t.f){const v=d?Ie(h,c)?h[c]:u[c]:c.value;r?se(v)&&Cf(v,i):se(v)?v.includes(i)||v.push(i):d?(u[c]=[i],Ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,Ie(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Gt(m,n)):m()}}}const Gt=FS;function px(t){return mx(t)}function mx(t,e){const n=hd();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=xn,insertStaticContent:m}=t,v=(g,y,w,E=null,x=null,R=null,j=!1,M=null,$=!!y.dynamicChildren)=>{if(g===y)return;g&&!kr(g,y)&&(E=T(g),Kt(g,x,R,!0),g=null),y.patchFlag===-2&&($=!1,y.dynamicChildren=null);const{type:P,ref:re,shapeFlag:Y}=y;switch(P){case Iu:_(g,y,w,E);break;case vn:S(g,y,w,E);break;case al:g==null&&N(y,w,E,j);break;case Le:Q(g,y,w,E,x,R,j,M,$);break;default:Y&1?H(g,y,w,E,x,R,j,M,$):Y&6?Te(g,y,w,E,x,R,j,M,$):(Y&64||Y&128)&&P.process(g,y,w,E,x,R,j,M,$,V)}re!=null&&x&&Id(re,g&&g.ref,R,y||g,!y)},_=(g,y,w,E)=>{if(g==null)s(y.el=a(y.children),w,E);else{const x=y.el=g.el;y.children!==g.children&&l(x,y.children)}},S=(g,y,w,E)=>{g==null?s(y.el=c(y.children||""),w,E):y.el=g.el},N=(g,y,w,E)=>{[g.el,g.anchor]=m(g.children,y,w,E,g.el,g.anchor)},D=({el:g,anchor:y},w,E)=>{let x;for(;g&&g!==y;)x=d(g),s(g,w,E),g=x;s(y,w,E)},C=({el:g,anchor:y})=>{let w;for(;g&&g!==y;)w=d(g),r(g),g=w;r(y)},H=(g,y,w,E,x,R,j,M,$)=>{j=j||y.type==="svg",g==null?ee(y,w,E,x,R,j,M,$):W(g,y,x,R,j,M,$)},ee=(g,y,w,E,x,R,j,M)=>{let $,P;const{type:re,props:Y,shapeFlag:ie,transition:ce,dirs:me}=g;if($=g.el=o(g.type,R,Y&&Y.is,Y),ie&8?u($,g.children):ie&16&&F(g.children,$,null,E,x,R&&re!=="foreignObject",j,M),me&&_r(g,null,E,"created"),ae($,g,g.scopeId,j,E),Y){for(const Ne in Y)Ne!=="value"&&!rl(Ne)&&i($,Ne,null,Y[Ne],R,g.children,E,x,Dt);"value"in Y&&i($,"value",null,Y.value),(P=Y.onVnodeBeforeMount)&&Fn(P,E,g)}me&&_r(g,null,E,"beforeMount");const Ue=(!x||x&&!x.pendingBranch)&&ce&&!ce.persisted;Ue&&ce.beforeEnter($),s($,y,w),((P=Y&&Y.onVnodeMounted)||Ue||me)&&Gt(()=>{P&&Fn(P,E,g),Ue&&ce.enter($),me&&_r(g,null,E,"mounted")},x)},ae=(g,y,w,E,x)=>{if(w&&f(g,w),E)for(let R=0;R<E.length;R++)f(g,E[R]);if(x){let R=x.subTree;if(y===R){const j=x.vnode;ae(g,j,j.scopeId,j.slotScopeIds,x.parent)}}},F=(g,y,w,E,x,R,j,M,$=0)=>{for(let P=$;P<g.length;P++){const re=g[P]=M?Ls(g[P]):$n(g[P]);v(null,re,y,w,E,x,R,j,M)}},W=(g,y,w,E,x,R,j)=>{const M=y.el=g.el;let{patchFlag:$,dynamicChildren:P,dirs:re}=y;$|=g.patchFlag&16;const Y=g.props||Ve,ie=y.props||Ve;let ce;w&&wr(w,!1),(ce=ie.onVnodeBeforeUpdate)&&Fn(ce,w,y,g),re&&_r(y,g,w,"beforeUpdate"),w&&wr(w,!0);const me=x&&y.type!=="foreignObject";if(P?fe(g.dynamicChildren,P,M,w,E,me,R):j||Se(g,y,M,null,w,E,me,R,!1),$>0){if($&16)Pe(M,y,Y,ie,w,E,x);else if($&2&&Y.class!==ie.class&&i(M,"class",null,ie.class,x),$&4&&i(M,"style",Y.style,ie.style,x),$&8){const Ue=y.dynamicProps;for(let Ne=0;Ne<Ue.length;Ne++){const it=Ue[Ne],bn=Y[it],bi=ie[it];(bi!==bn||it==="value")&&i(M,it,bn,bi,x,g.children,w,E,Dt)}}$&1&&g.children!==y.children&&u(M,y.children)}else!j&&P==null&&Pe(M,y,Y,ie,w,E,x);((ce=ie.onVnodeUpdated)||re)&&Gt(()=>{ce&&Fn(ce,w,y,g),re&&_r(y,g,w,"updated")},E)},fe=(g,y,w,E,x,R,j)=>{for(let M=0;M<y.length;M++){const $=g[M],P=y[M],re=$.el&&($.type===Le||!kr($,P)||$.shapeFlag&70)?h($.el):w;v($,P,re,null,E,x,R,j,!0)}},Pe=(g,y,w,E,x,R,j)=>{if(w!==E){if(w!==Ve)for(const M in w)!rl(M)&&!(M in E)&&i(g,M,w[M],null,j,y.children,x,R,Dt);for(const M in E){if(rl(M))continue;const $=E[M],P=w[M];$!==P&&M!=="value"&&i(g,M,P,$,j,y.children,x,R,Dt)}"value"in E&&i(g,"value",w.value,E.value)}},Q=(g,y,w,E,x,R,j,M,$)=>{const P=y.el=g?g.el:a(""),re=y.anchor=g?g.anchor:a("");let{patchFlag:Y,dynamicChildren:ie,slotScopeIds:ce}=y;ce&&(M=M?M.concat(ce):ce),g==null?(s(P,w,E),s(re,w,E),F(y.children,w,re,x,R,j,M,$)):Y>0&&Y&64&&ie&&g.dynamicChildren?(fe(g.dynamicChildren,ie,w,x,R,j,M),(y.key!=null||x&&y===x.subTree)&&sw(g,y,!0)):Se(g,y,w,re,x,R,j,M,$)},Te=(g,y,w,E,x,R,j,M,$)=>{y.slotScopeIds=M,g==null?y.shapeFlag&512?x.ctx.activate(y,w,E,j,$):Et(y,w,E,x,R,j,$):$t(g,y,$)},Et=(g,y,w,E,x,R,j)=>{const M=g.component=Tx(g,E,x);if(wu(g)&&(M.ctx.renderer=V),xx(M),M.asyncDep){if(x&&x.registerDep(M,ye),!g.el){const $=M.subTree=L(vn);S(null,$,y,w)}return}ye(M,g,y,w,x,R,j)},$t=(g,y,w)=>{const E=y.component=g.component;if(OS(g,y,w))if(E.asyncDep&&!E.asyncResolved){Oe(E,y,w);return}else E.next=y,CS(E.update),E.update();else y.el=g.el,E.vnode=y},ye=(g,y,w,E,x,R,j)=>{const M=()=>{if(g.isMounted){let{next:re,bu:Y,u:ie,parent:ce,vnode:me}=g,Ue=re,Ne;wr(g,!1),re?(re.el=me.el,Oe(g,re,j)):re=me,Y&&il(Y),(Ne=re.props&&re.props.onVnodeBeforeUpdate)&&Fn(Ne,ce,re,me),wr(g,!0);const it=xh(g),bn=g.subTree;g.subTree=it,v(bn,it,h(bn.el),T(bn),g,x,R),re.el=it.el,Ue===null&&LS(g,it.el),ie&&Gt(ie,x),(Ne=re.props&&re.props.onVnodeUpdated)&&Gt(()=>Fn(Ne,ce,re,me),x)}else{let re;const{el:Y,props:ie}=y,{bm:ce,m:me,parent:Ue}=g,Ne=ra(y);if(wr(g,!1),ce&&il(ce),!Ne&&(re=ie&&ie.onVnodeBeforeMount)&&Fn(re,Ue,y),wr(g,!0),Y&&xe){const it=()=>{g.subTree=xh(g),xe(Y,g.subTree,g,x,null)};Ne?y.type.__asyncLoader().then(()=>!g.isUnmounted&&it()):it()}else{const it=g.subTree=xh(g);v(null,it,w,E,g,x,R),y.el=it.el}if(me&&Gt(me,x),!Ne&&(re=ie&&ie.onVnodeMounted)){const it=y;Gt(()=>Fn(re,Ue,it),x)}(y.shapeFlag&256||Ue&&ra(Ue.vnode)&&Ue.vnode.shapeFlag&256)&&g.a&&Gt(g.a,x),g.isMounted=!0,y=w=E=null}},$=g.effect=new Df(M,()=>Vf(P),g.scope),P=g.update=()=>$.run();P.id=g.uid,wr(g,!0),P()},Oe=(g,y,w)=>{y.component=g;const E=g.vnode.props;g.vnode=y,g.next=null,ux(g,y.props,E,w),fx(g,y.children,w),fo(),hg(),po()},Se=(g,y,w,E,x,R,j,M,$=!1)=>{const P=g&&g.children,re=g?g.shapeFlag:0,Y=y.children,{patchFlag:ie,shapeFlag:ce}=y;if(ie>0){if(ie&128){xs(P,Y,w,E,x,R,j,M,$);return}else if(ie&256){rs(P,Y,w,E,x,R,j,M,$);return}}ce&8?(re&16&&Dt(P,x,R),Y!==P&&u(w,Y)):re&16?ce&16?xs(P,Y,w,E,x,R,j,M,$):Dt(P,x,R,!0):(re&8&&u(w,""),ce&16&&F(Y,w,E,x,R,j,M,$))},rs=(g,y,w,E,x,R,j,M,$)=>{g=g||Mi,y=y||Mi;const P=g.length,re=y.length,Y=Math.min(P,re);let ie;for(ie=0;ie<Y;ie++){const ce=y[ie]=$?Ls(y[ie]):$n(y[ie]);v(g[ie],ce,w,null,x,R,j,M,$)}P>re?Dt(g,x,R,!0,!1,Y):F(y,w,E,x,R,j,M,$,Y)},xs=(g,y,w,E,x,R,j,M,$)=>{let P=0;const re=y.length;let Y=g.length-1,ie=re-1;for(;P<=Y&&P<=ie;){const ce=g[P],me=y[P]=$?Ls(y[P]):$n(y[P]);if(kr(ce,me))v(ce,me,w,null,x,R,j,M,$);else break;P++}for(;P<=Y&&P<=ie;){const ce=g[Y],me=y[ie]=$?Ls(y[ie]):$n(y[ie]);if(kr(ce,me))v(ce,me,w,null,x,R,j,M,$);else break;Y--,ie--}if(P>Y){if(P<=ie){const ce=ie+1,me=ce<re?y[ce].el:E;for(;P<=ie;)v(null,y[P]=$?Ls(y[P]):$n(y[P]),w,me,x,R,j,M,$),P++}}else if(P>ie)for(;P<=Y;)Kt(g[P],x,R,!0),P++;else{const ce=P,me=P,Ue=new Map;for(P=me;P<=ie;P++){const rn=y[P]=$?Ls(y[P]):$n(y[P]);rn.key!=null&&Ue.set(rn.key,P)}let Ne,it=0;const bn=ie-me+1;let bi=!1,Zm=0;const Po=new Array(bn);for(P=0;P<bn;P++)Po[P]=0;for(P=ce;P<=Y;P++){const rn=g[P];if(it>=bn){Kt(rn,x,R,!0);continue}let Mn;if(rn.key!=null)Mn=Ue.get(rn.key);else for(Ne=me;Ne<=ie;Ne++)if(Po[Ne-me]===0&&kr(rn,y[Ne])){Mn=Ne;break}Mn===void 0?Kt(rn,x,R,!0):(Po[Mn-me]=P+1,Mn>=Zm?Zm=Mn:bi=!0,v(rn,y[Mn],w,null,x,R,j,M,$),it++)}const eg=bi?gx(Po):Mi;for(Ne=eg.length-1,P=bn-1;P>=0;P--){const rn=me+P,Mn=y[rn],tg=rn+1<re?y[rn+1].el:E;Po[P]===0?v(null,Mn,w,tg,x,R,j,M,$):bi&&(Ne<0||P!==eg[Ne]?Ln(Mn,w,tg,2):Ne--)}}},Ln=(g,y,w,E,x=null)=>{const{el:R,type:j,transition:M,children:$,shapeFlag:P}=g;if(P&6){Ln(g.component.subTree,y,w,E);return}if(P&128){g.suspense.move(y,w,E);return}if(P&64){j.move(g,y,w,V);return}if(j===Le){s(R,y,w);for(let Y=0;Y<$.length;Y++)Ln($[Y],y,w,E);s(g.anchor,y,w);return}if(j===al){D(g,y,w);return}if(E!==2&&P&1&&M)if(E===0)M.beforeEnter(R),s(R,y,w),Gt(()=>M.enter(R),x);else{const{leave:Y,delayLeave:ie,afterLeave:ce}=M,me=()=>s(R,y,w),Ue=()=>{Y(R,()=>{me(),ce&&ce()})};ie?ie(R,me,Ue):Ue()}else s(R,y,w)},Kt=(g,y,w,E=!1,x=!1)=>{const{type:R,props:j,ref:M,children:$,dynamicChildren:P,shapeFlag:re,patchFlag:Y,dirs:ie}=g;if(M!=null&&Id(M,null,w,g,!0),re&256){y.ctx.deactivate(g);return}const ce=re&1&&ie,me=!ra(g);let Ue;if(me&&(Ue=j&&j.onVnodeBeforeUnmount)&&Fn(Ue,y,g),re&6)Mc(g.component,w,E);else{if(re&128){g.suspense.unmount(w,E);return}ce&&_r(g,null,y,"beforeUnmount"),re&64?g.type.remove(g,y,w,x,V,E):P&&(R!==Le||Y>0&&Y&64)?Dt(P,y,w,!1,!0):(R===Le&&Y&384||!x&&re&16)&&Dt($,y,w),E&&_i(g)}(me&&(Ue=j&&j.onVnodeUnmounted)||ce)&&Gt(()=>{Ue&&Fn(Ue,y,g),ce&&_r(g,null,y,"unmounted")},w)},_i=g=>{const{type:y,el:w,anchor:E,transition:x}=g;if(y===Le){wi(w,E);return}if(y===al){C(g);return}const R=()=>{r(w),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(g.shapeFlag&1&&x&&!x.persisted){const{leave:j,delayLeave:M}=x,$=()=>j(w,R);M?M(g.el,R,$):$()}else R()},wi=(g,y)=>{let w;for(;g!==y;)w=d(g),r(g),g=w;r(y)},Mc=(g,y,w)=>{const{bum:E,scope:x,update:R,subTree:j,um:M}=g;E&&il(E),x.stop(),R&&(R.active=!1,Kt(j,g,y,w)),M&&Gt(M,y),Gt(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Dt=(g,y,w,E=!1,x=!1,R=0)=>{for(let j=R;j<g.length;j++)Kt(g[j],y,w,E,x)},T=g=>g.shapeFlag&6?T(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),G=(g,y,w)=>{g==null?y._vnode&&Kt(y._vnode,null,null,!0):v(y._vnode||null,g,y,null,null,null,w),hg(),L_(),y._vnode=g},V={p:v,um:Kt,m:Ln,r:_i,mt:Et,mc:F,pc:Se,pbc:fe,n:T,o:t};let ne,xe;return e&&([ne,xe]=e(V)),{render:G,hydrate:ne,createApp:ax(G,ne)}}function wr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sw(t,e,n=!1){const s=t.children,r=e.children;if(se(s)&&se(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ls(r[i]),a.el=o.el),n||sw(o,a)),a.type===Iu&&(a.el=o.el)}}function gx(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const yx=t=>t.__isTeleport,Le=Symbol.for("v-fgt"),Iu=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),al=Symbol.for("v-stc"),oa=[];let En=null;function K(t=!1){oa.push(En=t?null:[])}function vx(){oa.pop(),En=oa[oa.length-1]||null}let ka=1;function Eg(t){ka+=t}function rw(t){return t.dynamicChildren=ka>0?En||Mi:null,vx(),ka>0&&En&&En.push(t),t}function X(t,e,n,s,r,i){return rw(p(t,e,n,s,r,i,!0))}function Xs(t,e,n,s,r){return rw(L(t,e,n,s,r,!0))}function Dl(t){return t?t.__v_isVNode===!0:!1}function kr(t,e){return t.type===e.type&&t.key===e.key}const Eu="__vInternal",iw=({key:t})=>t??null,cl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?lt(t)||nt(t)||pe(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,s=0,r=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&iw(e),ref:e&&cl(e),scopeId:U_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yt};return a?(Hf(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=lt(n)?8:16),ka>0&&!o&&En&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&En.push(c),c}const L=_x;function _x(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===JS)&&(t=vn),Dl(t)){const a=Js(t,e,!0);return n&&Hf(a,n),ka>0&&!i&&En&&(a.shapeFlag&6?En[En.indexOf(t)]=a:En.push(a)),a.patchFlag|=-2,a}if(Nx(t)&&(t=t.__vccOpts),e){e=wx(e);let{class:a,style:c}=e;a&&!lt(a)&&(e.class=kn(a)),Fe(c)&&(C_(c)&&!se(c)&&(c=ct({},c)),e.style=Rf(c))}const o=lt(t)?1:MS(t)?128:yx(t)?64:Fe(t)?4:pe(t)?2:0;return p(t,e,n,s,r,o,i,!0)}function wx(t){return t?C_(t)||Eu in t?ct({},t):t:null}function Js(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?bx(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&iw(a),ref:e&&e.ref?n&&r?se(r)?r.concat(cl(e)):[r,cl(e)]:cl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Js(t.ssContent),ssFallback:t.ssFallback&&Js(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Xe(t=" ",e=0){return L(Iu,null,t,e)}function zf(t,e){const n=L(al,null,t);return n.staticCount=e,n}function Xt(t="",e=!1){return e?(K(),Xs(vn,null,t)):L(vn,null,t)}function $n(t){return t==null||typeof t=="boolean"?L(vn):se(t)?L(Le,null,t.slice()):typeof t=="object"?Ls(t):L(Iu,null,String(t))}function Ls(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Js(t)}function Hf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Hf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Eu in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),s&64?(n=16,e=[Xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function bx(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=kn([e.class,s.class]));else if(r==="style")e.style=Rf([e.style,s.style]);else if(hu(r)){const i=e[r],o=s[r];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Fn(t,e,n,s=null){mn(t,e,7,[n,s])}const Ix=X_();let Ex=0;function Tx(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ix,i={uid:Ex++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new p_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Z_(s,r),emitsOptions:F_(s,r),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:s.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=NS.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const Sx=()=>ht||yt;let Kf,Ii,Tg="__VUE_INSTANCE_SETTERS__";(Ii=hd()[Tg])||(Ii=hd()[Tg]=[]),Ii.push(t=>ht=t),Kf=t=>{Ii.length>1?Ii.forEach(e=>e(t)):Ii[0](t)};const Wi=t=>{Kf(t),t.scope.on()},jr=()=>{ht&&ht.scope.off(),Kf(null)};function ow(t){return t.vnode.shapeFlag&4}let Ca=!1;function xx(t,e=!1){Ca=e;const{props:n,children:s}=t.vnode,r=ow(t);lx(t,n,r,e),dx(t,s);const i=r?kx(t,e):void 0;return Ca=!1,i}function kx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=yu(new Proxy(t.ctx,ex));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Ax(t):null;Wi(t),fo();const i=Ks(s,t,0,[t.props,r]);if(po(),jr(),c_(i)){if(i.then(jr,jr),e)return i.then(o=>{Sg(t,o,e)}).catch(o=>{vu(o,t,0)});t.asyncDep=i}else Sg(t,i,e)}else aw(t,e)}function Sg(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=D_(e)),aw(t,n)}let xg;function aw(t,e,n){const s=t.type;if(!t.render){if(!e&&xg&&!s.render){const r=s.template||qf(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ct(ct({isCustomElement:i,delimiters:a},o),c);s.render=xg(r,l)}}t.render=s.render||xn}Wi(t),fo(),tx(t),po(),jr()}function Cx(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return tn(t,"get","$attrs"),e[n]}}))}function Ax(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Cx(t)},slots:t.slots,emit:t.emit,expose:e}}function Tu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(D_(yu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ia)return ia[n](t)},has(e,n){return n in e||n in ia}}))}function Rx(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function Nx(t){return pe(t)&&"__vccOpts"in t}const gt=(t,e)=>SS(t,e,Ca);function Gf(t,e,n){const s=arguments.length;return s===2?Fe(e)&&!se(e)?Dl(e)?L(t,null,[e]):L(t,e):L(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Dl(n)&&(n=[n]),L(t,e,n))}const Dx=Symbol.for("v-scx"),Px=()=>yn(Dx),Ox="3.3.4",Lx="http://www.w3.org/2000/svg",Cr=typeof document<"u"?document:null,kg=Cr&&Cr.createElement("template"),Mx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Cr.createElementNS(Lx,t):Cr.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Cr.createTextNode(t),createComment:t=>Cr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{kg.innerHTML=s?`<svg>${t}</svg>`:t;const a=kg.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Fx(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ux(t,e,n){const s=t.style,r=lt(n);if(n&&!r){if(e&&!lt(e))for(const i in e)n[i]==null&&Ed(s,i,"");for(const i in n)Ed(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Cg=/\s*!important$/;function Ed(t,e,n){if(se(n))n.forEach(s=>Ed(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$x(t,e);Cg.test(n)?t.setProperty(ui(s),n.replace(Cg,""),"important"):t[s]=n}}const Ag=["Webkit","Moz","ms"],Ah={};function $x(t,e){const n=Ah[e];if(n)return n;let s=es(e);if(s!=="filter"&&s in t)return Ah[e]=s;s=pu(s);for(let r=0;r<Ag.length;r++){const i=Ag[r]+s;if(i in t)return Ah[e]=i}return e}const Rg="http://www.w3.org/1999/xlink";function Vx(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Rg,e.slice(6,e.length)):t.setAttributeNS(Rg,e,n);else{const i=VT(e);n==null||i&&!h_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Bx(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=h_(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ar(t,e,n,s){t.addEventListener(e,n,s)}function qx(t,e,n,s){t.removeEventListener(e,n,s)}function jx(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=zx(e);if(s){const l=i[e]=Gx(s,r);Ar(t,a,l,c)}else o&&(qx(t,a,o,c),i[e]=void 0)}}const Ng=/(?:Once|Passive|Capture)$/;function zx(t){let e;if(Ng.test(t)){e={};let s;for(;s=t.match(Ng);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ui(t.slice(2)),e]}let Rh=0;const Hx=Promise.resolve(),Kx=()=>Rh||(Hx.then(()=>Rh=0),Rh=Date.now());function Gx(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;mn(Wx(s,n.value),e,5,[s])};return n.value=t,n.attached=Kx(),n}function Wx(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Dg=/^on[a-z]/,Qx=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Fx(t,s,r):e==="style"?Ux(t,n,s):hu(e)?kf(e)||jx(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yx(t,e,s,r))?Bx(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Vx(t,e,s,r))};function Yx(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Dg.test(e)&&pe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Dg.test(e)&&lt(n)?!1:e in t}const Cs="transition",Oo="animation",Wf=(t,{slots:e})=>Gf(BS,Xx(t),e);Wf.displayName="Transition";const cw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wf.props=ct({},B_,cw);const br=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Pg=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function Xx(t){const e={};for(const Q in t)Q in cw||(e[Q]=t[Q]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=Jx(r),v=m&&m[0],_=m&&m[1],{onBeforeEnter:S,onEnter:N,onEnterCancelled:D,onLeave:C,onLeaveCancelled:H,onBeforeAppear:ee=S,onAppear:ae=N,onAppearCancelled:F=D}=e,W=(Q,Te,Et)=>{Ir(Q,Te?u:a),Ir(Q,Te?l:o),Et&&Et()},fe=(Q,Te)=>{Q._isLeaving=!1,Ir(Q,h),Ir(Q,f),Ir(Q,d),Te&&Te()},Pe=Q=>(Te,Et)=>{const $t=Q?ae:N,ye=()=>W(Te,Q,Et);br($t,[Te,ye]),Og(()=>{Ir(Te,Q?c:i),As(Te,Q?u:a),Pg($t)||Lg(Te,s,v,ye)})};return ct(e,{onBeforeEnter(Q){br(S,[Q]),As(Q,i),As(Q,o)},onBeforeAppear(Q){br(ee,[Q]),As(Q,c),As(Q,l)},onEnter:Pe(!1),onAppear:Pe(!0),onLeave(Q,Te){Q._isLeaving=!0;const Et=()=>fe(Q,Te);As(Q,h),t1(),As(Q,d),Og(()=>{Q._isLeaving&&(Ir(Q,h),As(Q,f),Pg(C)||Lg(Q,s,_,Et))}),br(C,[Q,Et])},onEnterCancelled(Q){W(Q,!1),br(D,[Q])},onAppearCancelled(Q){W(Q,!0),br(F,[Q])},onLeaveCancelled(Q){fe(Q),br(H,[Q])}})}function Jx(t){if(t==null)return null;if(Fe(t))return[Nh(t.enter),Nh(t.leave)];{const e=Nh(t);return[e,e]}}function Nh(t){return OT(t)}function As(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ir(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Og(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Zx=0;function Lg(t,e,n,s){const r=t._endId=++Zx,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=e1(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=f=>{f.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function e1(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${Cs}Delay`),i=s(`${Cs}Duration`),o=Mg(r,i),a=s(`${Oo}Delay`),c=s(`${Oo}Duration`),l=Mg(a,c);let u=null,h=0,d=0;e===Cs?o>0&&(u=Cs,h=o,d=i.length):e===Oo?l>0&&(u=Oo,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Cs:Oo:null,d=u?u===Cs?i.length:c.length:0);const f=u===Cs&&/\b(transform|all)(,|$)/.test(s(`${Cs}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Mg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Fg(n)+Fg(t[s])))}function Fg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function t1(){return document.body.offsetHeight}const Pl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>il(e,n):e};function n1(t){t.target.composing=!0}function Ug(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $g={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Pl(r);const i=s||r.props&&r.props.type==="number";Ar(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ud(a)),t._assign(a)}),n&&Ar(t,"change",()=>{t.value=t.value.trim()}),e||(Ar(t,"compositionstart",n1),Ar(t,"compositionend",Ug),Ar(t,"change",Ug))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Pl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ud(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},lw={deep:!0,created(t,e,n){t._assign=Pl(n),Ar(t,"change",()=>{const s=t._modelValue,r=s1(t),i=t.checked,o=t._assign;if(se(s)){const a=d_(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(du(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(uw(t,i))})},mounted:Vg,beforeUpdate(t,e,n){t._assign=Pl(n),Vg(t,e,n)}};function Vg(t,{value:e,oldValue:n},s){t._modelValue=e,se(e)?t.checked=d_(e,s.props.value)>-1:du(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=mu(e,uw(t,!0)))}function s1(t){return"_value"in t?t._value:t.value}function uw(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const r1=["ctrl","shift","alt","meta"],i1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>r1.some(n=>t[`${n}Key`]&&!e.includes(n))},An=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=i1[e[r]];if(i&&i(n,e))return}return t(n,...s)},o1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},a1=(t,e)=>n=>{if(!("key"in n))return;const s=ui(n.key);if(e.some(r=>r===s||o1[r]===s))return t(n)},Ws={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Lo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Lo(t,!0),s.enter(t)):s.leave(t,()=>{Lo(t,!1)}):Lo(t,e))},beforeUnmount(t,{value:e}){Lo(t,e)}};function Lo(t,e){t.style.display=e?t._vod:"none"}const c1=ct({patchProp:Qx},Mx);let Bg;function l1(){return Bg||(Bg=px(c1))}const u1=(...t)=>{const e=l1().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=h1(s);if(!r)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function h1(t){return lt(t)?document.querySelector(t):t}var d1=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let hw;const Su=t=>hw=t,dw=Symbol();function Td(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var aa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(aa||(aa={}));function f1(){const t=m_(!0),e=t.run(()=>he({}));let n=[],s=[];const r=yu({install(i){Su(r),r._a=i,i.provide(dw,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!d1?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const fw=()=>{};function qg(t,e,n,s=fw){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&g_()&&jT(r),r}function Ei(t,...e){t.slice().forEach(n=>{n(...e)})}const p1=t=>t();function Sd(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Td(r)&&Td(s)&&t.hasOwnProperty(n)&&!nt(s)&&!Hs(s)?t[n]=Sd(r,s):t[n]=s}return t}const m1=Symbol();function g1(t){return!Td(t)||!t.hasOwnProperty(m1)}const{assign:Os}=Object;function y1(t){return!!(nt(t)&&t.effect)}function v1(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=bS(n.state.value[t]);return Os(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=yu(gt(()=>{Su(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=pw(t,l,e,n,s,!0),c}function pw(t,e,n={},s,r,i){let o;const a=Os({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),he({});let v;function _(F){let W;l=u=!1,typeof F=="function"?(F(s.state.value[t]),W={type:aa.patchFunction,storeId:t,events:f}):(Sd(s.state.value[t],F),W={type:aa.patchObject,payload:F,storeId:t,events:f});const fe=v=Symbol();$f().then(()=>{v===fe&&(l=!0)}),u=!0,Ei(h,W,s.state.value[t])}const S=i?function(){const{state:W}=n,fe=W?W():{};this.$patch(Pe=>{Os(Pe,fe)})}:fw;function N(){o.stop(),h=[],d=[],s._s.delete(t)}function D(F,W){return function(){Su(s);const fe=Array.from(arguments),Pe=[],Q=[];function Te(ye){Pe.push(ye)}function Et(ye){Q.push(ye)}Ei(d,{args:fe,name:F,store:H,after:Te,onError:Et});let $t;try{$t=W.apply(this&&this.$id===t?this:H,fe)}catch(ye){throw Ei(Q,ye),ye}return $t instanceof Promise?$t.then(ye=>(Ei(Pe,ye),ye)).catch(ye=>(Ei(Q,ye),Promise.reject(ye))):(Ei(Pe,$t),$t)}}const C={_p:s,$id:t,$onAction:qg.bind(null,d),$patch:_,$reset:S,$subscribe(F,W={}){const fe=qg(h,F,W.detached,()=>Pe()),Pe=o.run(()=>Gs(()=>s.state.value[t],Q=>{(W.flush==="sync"?u:l)&&F({storeId:t,type:aa.direct,events:f},Q)},Os({},c,W)));return fe},$dispose:N},H=mo(C);s._s.set(t,H);const ee=s._a&&s._a.runWithContext||p1,ae=s._e.run(()=>(o=m_(),ee(()=>o.run(e))));for(const F in ae){const W=ae[F];if(nt(W)&&!y1(W)||Hs(W))i||(m&&g1(W)&&(nt(W)?W.value=m[F]:Sd(W,m[F])),s.state.value[t][F]=W);else if(typeof W=="function"){const fe=D(F,W);ae[F]=fe,a.actions[F]=W}}return Os(H,ae),Os(be(H),ae),Object.defineProperty(H,"$state",{get:()=>s.state.value[t],set:F=>{_(W=>{Os(W,F)})}}),s._p.forEach(F=>{Os(H,o.run(()=>F({store:H,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(H.$state,m),l=!0,u=!0,H}function _1(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=cx();return a=a||(l?yn(dw,null):null),a&&Su(a),a=hw,a._s.has(s)||(i?pw(s,e,r,a):v1(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ai=typeof window<"u";function w1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ce=Object.assign;function Dh(t,e){const n={};for(const s in e){const r=e[s];n[s]=Rn(r)?r.map(t):t(r)}return n}const ca=()=>{},Rn=Array.isArray,b1=/\/$/,I1=t=>t.replace(b1,"");function Ph(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=x1(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function E1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function T1(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Qi(e.matched[s],n.matched[r])&&mw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!S1(t[n],e[n]))return!1;return!0}function S1(t,e){return Rn(t)?zg(t,e):Rn(e)?zg(e,t):t===e}function zg(t,e){return Rn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function x1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Aa;(function(t){t.pop="pop",t.push="push"})(Aa||(Aa={}));var la;(function(t){t.back="back",t.forward="forward",t.unknown=""})(la||(la={}));function k1(t){if(!t)if(Ai){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),I1(t)}const C1=/^[^#]+#/;function A1(t,e){return t.replace(C1,"#")+e}function R1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const xu=()=>({left:window.pageXOffset,top:window.pageYOffset});function N1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=R1(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hg(t,e){return(history.state?history.state.position-e:-1)+t}const xd=new Map;function D1(t,e){xd.set(t,e)}function P1(t){const e=xd.get(t);return xd.delete(t),e}let O1=()=>location.protocol+"//"+location.host;function gw(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),jg(c,"")}return jg(n,t)+s+r}function L1(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const f=gw(t,location),m=n.value,v=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}_=v?d.position-v.position:0}else s(f);r.forEach(S=>{S(n.value,m,{delta:_,type:Aa.pop,direction:_?_>0?la.forward:la.back:la.unknown})})};function c(){o=n.value}function l(d){r.push(d);const f=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ce({},d.state,{scroll:xu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Kg(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?xu():null}}function M1(t){const{history:e,location:n}=window,s={value:gw(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:O1()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ce({},e.state,Kg(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ce({},r.value,e.state,{forward:c,scroll:xu()});i(u.current,u,!0);const h=Ce({},Kg(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function F1(t){t=k1(t);const e=M1(t),n=L1(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ce({location:"",base:t,go:s,createHref:A1.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function U1(t){return typeof t=="string"||t&&typeof t=="object"}function yw(t){return typeof t=="string"||typeof t=="symbol"}const Rs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vw=Symbol("");var Gg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gg||(Gg={}));function Yi(t,e){return Ce(new Error,{type:t,[vw]:!0},e)}function is(t,e){return t instanceof Error&&vw in t&&(e==null||!!(t.type&e))}const Wg="[^/]+?",$1={sensitive:!1,strict:!1,start:!0,end:!0},V1=/[.+*?^${}()[\]/\\]/g;function B1(t,e){const n=Ce({},$1,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(V1,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:v,optional:_,regexp:S}=d;i.push({name:m,repeatable:v,optional:_});const N=S||Wg;if(N!==Wg){f+=10;try{new RegExp(`(${N})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+C.message)}}let D=v?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(D=_&&l.length<2?`(?:/${D})`:"/"+D),_&&(D+="?"),r+=D,f+=20,_&&(f+=-8),v&&(f+=-20),N===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=i[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:v,optional:_}=f,S=m in l?l[m]:"";if(Rn(S)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=Rn(S)?S.join("/"):S;if(!N)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function q1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function j1(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=q1(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Qg(s))return 1;if(Qg(r))return-1}return r.length-s.length}function Qg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const z1={type:0,value:""},H1=/[a-zA-Z0-9_]/;function K1(t){if(!t)return[[]];if(t==="/")return[[z1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:H1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function G1(t,e,n){const s=B1(K1(t.path),n),r=Ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function W1(t,e){const n=[],s=new Map;e=Jg({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const f=!d,m=Q1(u);m.aliasOf=d&&d.record;const v=Jg(e,u),_=[m];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of D)_.push(Ce({},m,{components:d?d.record.components:m.components,path:C,aliasOf:d?d.record:m}))}let S,N;for(const D of _){const{path:C}=D;if(h&&C[0]!=="/"){const H=h.record.path,ee=H[H.length-1]==="/"?"":"/";D.path=h.record.path+(C&&ee+C)}if(S=G1(D,h,v),d?d.alias.push(S):(N=N||S,N!==S&&N.alias.push(S),f&&u.name&&!Xg(S)&&o(u.name)),m.children){const H=m.children;for(let ee=0;ee<H.length;ee++)i(H[ee],S,d&&d.children[ee])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return N?()=>{o(N)}:ca}function o(u){if(yw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&j1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!_w(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Xg(u)&&s.set(u.record.name,u)}function l(u,h){let d,f={},m,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Yi(1,{location:u});v=d.record.name,f=Ce(Yg(h.params,d.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Yg(u.params,d.keys.map(N=>N.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(N=>N.re.test(m)),d&&(f=d.parse(m),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!d)throw Yi(1,{location:u,currentLocation:h});v=d.record.name,f=Ce({},h.params,u.params),m=d.stringify(f)}const _=[];let S=d;for(;S;)_.unshift(S.record),S=S.parent;return{name:v,path:m,params:f,matched:_,meta:X1(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Yg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Q1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Y1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Y1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Xg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function X1(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function Jg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _w(t,e){return e.children.some(n=>n===t||_w(t,n))}const ww=/#/g,J1=/&/g,Z1=/\//g,ek=/=/g,tk=/\?/g,bw=/\+/g,nk=/%5B/g,sk=/%5D/g,Iw=/%5E/g,rk=/%60/g,Ew=/%7B/g,ik=/%7C/g,Tw=/%7D/g,ok=/%20/g;function Qf(t){return encodeURI(""+t).replace(ik,"|").replace(nk,"[").replace(sk,"]")}function ak(t){return Qf(t).replace(Ew,"{").replace(Tw,"}").replace(Iw,"^")}function kd(t){return Qf(t).replace(bw,"%2B").replace(ok,"+").replace(ww,"%23").replace(J1,"%26").replace(rk,"`").replace(Ew,"{").replace(Tw,"}").replace(Iw,"^")}function ck(t){return kd(t).replace(ek,"%3D")}function lk(t){return Qf(t).replace(ww,"%23").replace(tk,"%3F")}function uk(t){return t==null?"":lk(t).replace(Z1,"%2F")}function Ol(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function hk(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(bw," "),o=i.indexOf("="),a=Ol(o<0?i:i.slice(0,o)),c=o<0?null:Ol(i.slice(o+1));if(a in e){let l=e[a];Rn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Zg(t){let e="";for(let n in t){const s=t[n];if(n=ck(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rn(s)?s.map(i=>i&&kd(i)):[s&&kd(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Rn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const fk=Symbol(""),ey=Symbol(""),ku=Symbol(""),Yf=Symbol(""),Cd=Symbol("");function Mo(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ms(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Yi(4,{from:n,to:e})):h instanceof Error?a(h):U1(h)?a(Yi(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Oh(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(pk(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Ms(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=w1(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ms(d,n,s,i,o)()}))}}return r}function pk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ty(t){const e=yn(ku),n=yn(Yf),s=gt(()=>e.resolve(ue(t.to))),r=gt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Qi.bind(null,u));if(d>-1)return d;const f=ny(c[l-2]);return l>1&&ny(u)===f&&h[h.length-1].path!==f?h.findIndex(Qi.bind(null,c[l-2])):d}),i=gt(()=>r.value>-1&&yk(n.params,s.value.params)),o=gt(()=>r.value>-1&&r.value===n.matched.length-1&&mw(n.params,s.value.params));function a(c={}){return gk(c)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(ca):Promise.resolve()}return{route:s,href:gt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const mk=z_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ty,setup(t,{slots:e}){const n=mo(ty(t)),{options:s}=yn(ku),r=gt(()=>({[sy(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[sy(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Gf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Tn=mk;function gk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yk(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Rn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ny(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sy=(t,e,n)=>t??e??n,vk=z_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=yn(Cd),r=gt(()=>t.route||s.value),i=yn(ey,0),o=gt(()=>{let l=ue(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=gt(()=>r.value.matched[o.value]);ol(ey,gt(()=>o.value+1)),ol(fk,a),ol(Cd,r);const c=he();return Gs(()=>[c.value,a.value,t.name],([l,u,h],[d,f,m])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Qi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return ry(n.default,{Component:d,route:l});const f=h.props[u],m=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=Gf(d,Ce({},m,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ry(n.default,{Component:_,route:l})||_}}});function ry(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ic=vk;function _k(t){const e=W1(t.routes,t),n=t.parseQuery||hk,s=t.stringifyQuery||Zg,r=t.history,i=Mo(),o=Mo(),a=Mo(),c=vS(Rs);let l=Rs;Ai&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dh.bind(null,T=>""+T),h=Dh.bind(null,uk),d=Dh.bind(null,Ol);function f(T,G){let V,ne;return yw(T)?(V=e.getRecordMatcher(T),ne=G):ne=T,e.addRoute(ne,V)}function m(T){const G=e.getRecordMatcher(T);G&&e.removeRoute(G)}function v(){return e.getRoutes().map(T=>T.record)}function _(T){return!!e.getRecordMatcher(T)}function S(T,G){if(G=Ce({},G||c.value),typeof T=="string"){const w=Ph(n,T,G.path),E=e.resolve({path:w.path},G),x=r.createHref(w.fullPath);return Ce(w,E,{params:d(E.params),hash:Ol(w.hash),redirectedFrom:void 0,href:x})}let V;if("path"in T)V=Ce({},T,{path:Ph(n,T.path,G.path).path});else{const w=Ce({},T.params);for(const E in w)w[E]==null&&delete w[E];V=Ce({},T,{params:h(w)}),G.params=h(G.params)}const ne=e.resolve(V,G),xe=T.hash||"";ne.params=u(d(ne.params));const g=E1(s,Ce({},T,{hash:ak(xe),path:ne.path})),y=r.createHref(g);return Ce({fullPath:g,hash:xe,query:s===Zg?dk(T.query):T.query||{}},ne,{redirectedFrom:void 0,href:y})}function N(T){return typeof T=="string"?Ph(n,T,c.value.path):Ce({},T)}function D(T,G){if(l!==T)return Yi(8,{from:G,to:T})}function C(T){return ae(T)}function H(T){return C(Ce(N(T),{replace:!0}))}function ee(T){const G=T.matched[T.matched.length-1];if(G&&G.redirect){const{redirect:V}=G;let ne=typeof V=="function"?V(T):V;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=N(ne):{path:ne},ne.params={}),Ce({query:T.query,hash:T.hash,params:"path"in ne?{}:T.params},ne)}}function ae(T,G){const V=l=S(T),ne=c.value,xe=T.state,g=T.force,y=T.replace===!0,w=ee(V);if(w)return ae(Ce(N(w),{state:typeof w=="object"?Ce({},xe,w.state):xe,force:g,replace:y}),G||V);const E=V;E.redirectedFrom=G;let x;return!g&&T1(s,ne,V)&&(x=Yi(16,{to:E,from:ne}),Ln(ne,ne,!0,!1)),(x?Promise.resolve(x):fe(E,ne)).catch(R=>is(R)?is(R,2)?R:xs(R):Se(R,E,ne)).then(R=>{if(R){if(is(R,2))return ae(Ce({replace:y},N(R.to),{state:typeof R.to=="object"?Ce({},xe,R.to.state):xe,force:g}),G||E)}else R=Q(E,ne,!0,y,xe);return Pe(E,ne,R),R})}function F(T,G){const V=D(T,G);return V?Promise.reject(V):Promise.resolve()}function W(T){const G=wi.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(T):T()}function fe(T,G){let V;const[ne,xe,g]=wk(T,G);V=Oh(ne.reverse(),"beforeRouteLeave",T,G);for(const w of ne)w.leaveGuards.forEach(E=>{V.push(Ms(E,T,G))});const y=F.bind(null,T,G);return V.push(y),Dt(V).then(()=>{V=[];for(const w of i.list())V.push(Ms(w,T,G));return V.push(y),Dt(V)}).then(()=>{V=Oh(xe,"beforeRouteUpdate",T,G);for(const w of xe)w.updateGuards.forEach(E=>{V.push(Ms(E,T,G))});return V.push(y),Dt(V)}).then(()=>{V=[];for(const w of T.matched)if(w.beforeEnter&&!G.matched.includes(w))if(Rn(w.beforeEnter))for(const E of w.beforeEnter)V.push(Ms(E,T,G));else V.push(Ms(w.beforeEnter,T,G));return V.push(y),Dt(V)}).then(()=>(T.matched.forEach(w=>w.enterCallbacks={}),V=Oh(g,"beforeRouteEnter",T,G),V.push(y),Dt(V))).then(()=>{V=[];for(const w of o.list())V.push(Ms(w,T,G));return V.push(y),Dt(V)}).catch(w=>is(w,8)?w:Promise.reject(w))}function Pe(T,G,V){for(const ne of a.list())W(()=>ne(T,G,V))}function Q(T,G,V,ne,xe){const g=D(T,G);if(g)return g;const y=G===Rs,w=Ai?history.state:{};V&&(ne||y?r.replace(T.fullPath,Ce({scroll:y&&w&&w.scroll},xe)):r.push(T.fullPath,xe)),c.value=T,Ln(T,G,V,y),xs()}let Te;function Et(){Te||(Te=r.listen((T,G,V)=>{if(!Mc.listening)return;const ne=S(T),xe=ee(ne);if(xe){ae(Ce(xe,{replace:!0}),ne).catch(ca);return}l=ne;const g=c.value;Ai&&D1(Hg(g.fullPath,V.delta),xu()),fe(ne,g).catch(y=>is(y,12)?y:is(y,2)?(ae(y.to,ne).then(w=>{is(w,20)&&!V.delta&&V.type===Aa.pop&&r.go(-1,!1)}).catch(ca),Promise.reject()):(V.delta&&r.go(-V.delta,!1),Se(y,ne,g))).then(y=>{y=y||Q(ne,g,!1),y&&(V.delta&&!is(y,8)?r.go(-V.delta,!1):V.type===Aa.pop&&is(y,20)&&r.go(-1,!1)),Pe(ne,g,y)}).catch(ca)}))}let $t=Mo(),ye=Mo(),Oe;function Se(T,G,V){xs(T);const ne=ye.list();return ne.length?ne.forEach(xe=>xe(T,G,V)):console.error(T),Promise.reject(T)}function rs(){return Oe&&c.value!==Rs?Promise.resolve():new Promise((T,G)=>{$t.add([T,G])})}function xs(T){return Oe||(Oe=!T,Et(),$t.list().forEach(([G,V])=>T?V(T):G()),$t.reset()),T}function Ln(T,G,V,ne){const{scrollBehavior:xe}=t;if(!Ai||!xe)return Promise.resolve();const g=!V&&P1(Hg(T.fullPath,0))||(ne||!V)&&history.state&&history.state.scroll||null;return $f().then(()=>xe(T,G,g)).then(y=>y&&N1(y)).catch(y=>Se(y,T,G))}const Kt=T=>r.go(T);let _i;const wi=new Set,Mc={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:_,getRoutes:v,resolve:S,options:t,push:C,replace:H,go:Kt,back:()=>Kt(-1),forward:()=>Kt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:rs,install(T){const G=this;T.component("RouterLink",Tn),T.component("RouterView",ic),T.config.globalProperties.$router=G,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),Ai&&!_i&&c.value===Rs&&(_i=!0,C(r.location).catch(xe=>{}));const V={};for(const xe in Rs)V[xe]=gt(()=>c.value[xe]);T.provide(ku,G),T.provide(Yf,mo(V)),T.provide(Cd,c);const ne=T.unmount;wi.add(T),T.unmount=function(){wi.delete(T),wi.size<1&&(l=Rs,Te&&Te(),Te=null,c.value=Rs,_i=!1,Oe=!1),ne()}}};function Dt(T){return T.reduce((G,V)=>G.then(()=>W(V)),Promise.resolve())}return Mc}function wk(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Qi(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Qi(l,c))||r.push(c))}return[n,s,r]}function oc(){return yn(ku)}function Xf(){return yn(Yf)}const bk={__name:"App",setup(t){return(e,n)=>(K(),Xs(ue(ic)))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ik=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ik(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Ek;const d=i<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ek extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tk=function(t){const e=Sw(t);return xw.encodeByteArray(e,!0)},Ll=function(t){return Tk(t).replace(/\./g,"")},kw=function(t){try{return xw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ml(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Sk(n)||(t[n]=Ml(t[n],e[n]));return t}function Sk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=()=>xk().__FIREBASE_DEFAULTS__,Ck=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ak=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kw(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return kk()||Ck()||Ak()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rk=t=>{var e,n;return(n=(e=Cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Nk=t=>{const e=Rk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Cw=()=>{var t;return(t=Cu())===null||t===void 0?void 0:t.config},Dk=t=>{var e;return(e=Cu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ll(JSON.stringify(n)),Ll(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ok(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Au(){var t;const e=(t=Cu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lk(){return typeof self=="object"&&self.self===self}function Rw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nw(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mk(){return!Au()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ra(){try{return typeof indexedDB=="object"}catch{return!1}}function Fk(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="FirebaseError";class Mt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Uk,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$k(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Mt(r,a,s)}}function $k(t,e){return t.replace(Vk,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Vk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ad(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(oy(i)&&oy(o)){if(!Ad(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function oy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Xo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dw(t,e){const n=new qk(t,e);return n.subscribe.bind(n)}class qk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jk(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Lh),r.error===void 0&&(r.error=Lh),r.complete===void 0&&(r.complete=Lh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pk;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kk(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hk(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hk(t){return t===Tr?void 0:t}function Kk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=[];var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const Pw={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},Wk=_e.INFO,Qk={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Yk=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Qk[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ru{constructor(e){this.name=e,this._logLevel=Wk,this._logHandler=Yk,this._userLogHandler=null,Zf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}function Xk(t){Zf.forEach(e=>{e.setLogLevel(t)})}function Jk(t,e){for(const n of Zf){let s=null;e&&e.level&&(s=Pw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(s??r.logLevel)&&t({level:_e[i].toLowerCase(),message:a,args:o,type:r.name})}}}const Zk=(t,e)=>e.some(n=>t instanceof n);let ay,cy;function eC(){return ay||(ay=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tC(){return cy||(cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ow=new WeakMap,Rd=new WeakMap,Lw=new WeakMap,Mh=new WeakMap,ep=new WeakMap;function nC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ow.set(n,t)}).catch(()=>{}),ep.set(e,t),e}function sC(t){if(Rd.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rd.set(t,e)}let Nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rC(t){Nd=t(Nd)}function iC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fh(this),e,...n);return Lw.set(s,e.sort?e.sort():[e]),Qs(s)}:tC().includes(t)?function(...e){return t.apply(Fh(this),e),Qs(Ow.get(this))}:function(...e){return Qs(t.apply(Fh(this),e))}}function oC(t){return typeof t=="function"?iC(t):(t instanceof IDBTransaction&&sC(t),Zk(t,eC())?new Proxy(t,Nd):t)}function Qs(t){if(t instanceof IDBRequest)return nC(t);if(Mh.has(t))return Mh.get(t);const e=oC(t);return e!==t&&(Mh.set(t,e),ep.set(e,t)),e}const Fh=t=>ep.get(t);function aC(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Qs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Qs(o.result),c.oldVersion,c.newVersion,Qs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const cC=["get","getKey","getAll","getAllKeys","count"],lC=["put","add","delete","clear"],Uh=new Map;function ly(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=lC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||cC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Uh.set(e,i),i}rC(t=>({...t,get:(e,n,s)=>ly(e,n)||t.get(e,n,s),has:(e,n)=>!!ly(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",uy="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Ru("@firebase/app"),dC="@firebase/app-compat",fC="@firebase/analytics-compat",pC="@firebase/analytics",mC="@firebase/app-check-compat",gC="@firebase/app-check",yC="@firebase/auth",vC="@firebase/auth-compat",_C="@firebase/database",wC="@firebase/database-compat",bC="@firebase/functions",IC="@firebase/functions-compat",EC="@firebase/installations",TC="@firebase/installations-compat",SC="@firebase/messaging",xC="@firebase/messaging-compat",kC="@firebase/performance",CC="@firebase/performance-compat",AC="@firebase/remote-config",RC="@firebase/remote-config-compat",NC="@firebase/storage",DC="@firebase/storage-compat",PC="@firebase/firestore",OC="@firebase/firestore-compat",LC="firebase",MC="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]",FC={[Dd]:"fire-core",[dC]:"fire-core-compat",[pC]:"fire-analytics",[fC]:"fire-analytics-compat",[gC]:"fire-app-check",[mC]:"fire-app-check-compat",[yC]:"fire-auth",[vC]:"fire-auth-compat",[_C]:"fire-rtdb",[wC]:"fire-rtdb-compat",[bC]:"fire-fn",[IC]:"fire-fn-compat",[EC]:"fire-iid",[TC]:"fire-iid-compat",[SC]:"fire-fcm",[xC]:"fire-fcm-compat",[kC]:"fire-perf",[CC]:"fire-perf-compat",[AC]:"fire-rc",[RC]:"fire-rc-compat",[NC]:"fire-gcs",[DC]:"fire-gcs-compat",[PC]:"fire-fst",[OC]:"fire-fst-compat","fire-js":"fire-js",[LC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Map,Na=new Map;function Fl(t,e){try{t.container.addComponent(e)}catch(n){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mw(t,e){t.container.addOrOverwriteComponent(e)}function ms(t){const e=t.name;if(Na.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;Na.set(e,t);for(const n of er.values())Fl(n,t);return!0}function tp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function UC(t,e,n=Zs){tp(t,e).clearInstance(n)}function $C(){Na.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hs=new hi("app","Firebase",VC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BC=class{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hs.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=MC;function np(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zs,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw hs.create("bad-app-name",{appName:String(r)});if(n||(n=Cw()),!n)throw hs.create("no-options");const i=er.get(r);if(i){if(Ad(n,i.options)&&Ad(s,i.config))return i;throw hs.create("duplicate-app",{appName:r})}const o=new Gk(r);for(const c of Na.values())o.addComponent(c);const a=new BC(n,s,o);return er.set(r,a),a}function Fw(t=Zs){const e=er.get(t);if(!e&&t===Zs&&Cw())return np();if(!e)throw hs.create("no-app",{appName:t});return e}function qC(){return Array.from(er.values())}async function Uw(t){const e=t.name;er.has(e)&&(er.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function _n(t,e,n){var s;let r=(s=FC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(a.join(" "));return}ms(new Nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function $w(t,e){if(t!==null&&typeof t!="function")throw hs.create("invalid-log-argument");Jk(t,e)}function Vw(t){Xk(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="firebase-heartbeat-database",zC=1,Da="firebase-heartbeat-store";let $h=null;function Bw(){return $h||($h=aC(jC,zC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Da)}}}).catch(t=>{throw hs.create("idb-open",{originalErrorMessage:t.message})})),$h}async function HC(t){try{return await(await Bw()).transaction(Da).objectStore(Da).get(qw(t))}catch(e){if(e instanceof Mt)Yr.warn(e.message);else{const n=hs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(n.message)}}}async function hy(t,e){try{const s=(await Bw()).transaction(Da,"readwrite");await s.objectStore(Da).put(e,qw(t)),await s.done}catch(n){if(n instanceof Mt)Yr.warn(n.message);else{const s=hs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yr.warn(s.message)}}}function qw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=1024,GC=30*24*60*60*1e3;class WC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=GC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dy(),{heartbeatsToSend:n,unsentEntries:s}=QC(this._heartbeatsCache.heartbeats),r=Ll(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function dy(){return new Date().toISOString().substring(0,10)}function QC(t,e=KC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),fy(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),fy(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class YC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ra()?Fk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return hy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function fy(t){return Ll(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t){ms(new Nn("platform-logger",e=>new uC(e),"PRIVATE")),ms(new Nn("heartbeat",e=>new WC(e),"PRIVATE")),_n(Dd,uy,t),_n(Dd,uy,"esm2017"),_n("fire-js","")}XC("");const JC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Mt,SDK_VERSION:ws,_DEFAULT_ENTRY_NAME:Zs,_addComponent:Fl,_addOrOverwriteComponent:Mw,_apps:er,_clearComponents:$C,_components:Na,_getProvider:tp,_registerComponent:ms,_removeServiceInstance:UC,deleteApp:Uw,getApp:Fw,getApps:qC,initializeApp:np,onLog:$w,registerVersion:_n,setLogLevel:Vw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n){this._delegate=e,this.firebase=n,Fl(e,new Nn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Uw(this._delegate)))}_getService(e,n=Zs){var s;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((s=r.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=Zs){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Fl(this._delegate,e)}_addOrOverwriteComponent(e){Mw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},py=new hi("app-compat","Firebase",eA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){const e={},n={__esModule:!0,initializeApp:i,app:r,registerVersion:_n,setLogLevel:Vw,onLog:$w,apps:null,SDK_VERSION:ws,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:JC}};n.default=n,Object.defineProperty(n,"apps",{get:o});function s(l){delete e[l]}function r(l){if(l=l||Zs,!iy(e,l))throw py.create("no-app",{appName:l});return e[l]}r.App=t;function i(l,u={}){const h=np(l,u);if(iy(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(ms(l)&&l.type==="PUBLIC"){const d=(f=r())=>{if(typeof f[h]!="function")throw py.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Ml(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function c(l,u){return u==="serverAuth"?null:u}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){const t=tA(ZC);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:jw,extendNamespace:e,createSubscribe:Dw,ErrorFactory:hi,deepExtend:Ml});function e(n){Ml(t,n)}return t}const nA=jw();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=new Ru("@firebase/app-compat"),sA="@firebase/app-compat",rA="0.2.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){_n(sA,rA,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Lk()&&self.firebase!==void 0){my.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&my.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ot=nA;iA();var oA="firebase",aA="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.registerVersion(oA,aA,"app-compat");var cA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,sp=sp||{},oe=cA||self;function Nu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ac(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function lA(t){return Object.prototype.hasOwnProperty.call(t,Vh)&&t[Vh]||(t[Vh]=++uA)}var Vh="closure_uid_"+(1e9*Math.random()>>>0),uA=0;function hA(t,e,n){return t.call.apply(t.bind,arguments)}function dA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ft=hA:Ft=dA,Ft.apply(null,arguments)}function jc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function wt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function dr(){this.s=this.s,this.o=this.o}var fA=0;dr.prototype.s=!1;dr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fA!=0)&&lA(this)};dr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rp(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gy(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Nu(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ut.prototype.h=function(){this.defaultPrevented=!0};var pA=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",()=>{},e),oe.removeEventListener("test",()=>{},e)}catch{}return t}();function Pa(t){return/^[\s\xa0]*$/.test(t)}function Du(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function Bn(t){return Du().indexOf(t)!=-1}function ip(t){return ip[" "](t),t}ip[" "]=function(){};function mA(t,e){var n=aR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gA=Bn("Opera"),Xi=Bn("Trident")||Bn("MSIE"),Hw=Bn("Edge"),Pd=Hw||Xi,Kw=Bn("Gecko")&&!(Du().toLowerCase().indexOf("webkit")!=-1&&!Bn("Edge"))&&!(Bn("Trident")||Bn("MSIE"))&&!Bn("Edge"),yA=Du().toLowerCase().indexOf("webkit")!=-1&&!Bn("Edge");function Gw(){var t=oe.document;return t?t.documentMode:void 0}var Od;e:{var Bh="",qh=function(){var t=Du();if(Kw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hw)return/Edge\/([\d\.]+)/.exec(t);if(Xi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yA)return/WebKit\/(\S+)/.exec(t);if(gA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qh&&(Bh=qh?qh[1]:""),Xi){var jh=Gw();if(jh!=null&&jh>parseFloat(Bh)){Od=String(jh);break e}}Od=Bh}var Ld;if(oe.document&&Xi){var yy=Gw();Ld=yy||parseInt(Od,10)||void 0}else Ld=void 0;var vA=Ld;function Oa(t,e){if(Ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kw){e:{try{ip(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_A[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Oa.$.h.call(this)}}wt(Oa,Ut);var _A={2:"touch",3:"pen",4:"mouse"};Oa.prototype.h=function(){Oa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var cc="closure_listenable_"+(1e6*Math.random()|0),wA=0;function bA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++wA,this.fa=this.ia=!1}function Pu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function op(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function IA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ww(t){const e={};for(const n in t)e[n]=t[n];return e}const vy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qw(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vy.length;i++)n=vy[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ou(t){this.src=t,this.g={},this.h=0}Ou.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Fd(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bA(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Md(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=zw(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Pu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fd(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var ap="closure_lm_"+(1e6*Math.random()|0),zh={};function Yw(t,e,n,s,r){if(s&&s.once)return Jw(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yw(t,e[i],n,s,r);return null}return n=up(n),t&&t[cc]?t.O(e,n,ac(s)?!!s.capture:!!s,r):Xw(t,e,n,!1,s,r)}function Xw(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ac(r)?!!r.capture:!!r,a=lp(t);if(a||(t[ap]=a=new Ou(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=EA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)pA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(eb(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function EA(){function t(n){return e.call(t.src,t.listener,n)}const e=TA;return t}function Jw(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jw(t,e[i],n,s,r);return null}return n=up(n),t&&t[cc]?t.P(e,n,ac(s)?!!s.capture:!!s,r):Xw(t,e,n,!0,s,r)}function Zw(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Zw(t,e[i],n,s,r);else s=ac(s)?!!s.capture:!!s,n=up(n),t&&t[cc]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Fd(i,n,s,r),-1<n&&(Pu(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=lp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fd(e,n,s,r)),(n=-1<t?e[t]:null)&&cp(n))}function cp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[cc])Md(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(eb(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=lp(e))?(Md(n,t),n.h==0&&(n.src=null,e[ap]=null)):Pu(t)}}}function eb(t){return t in zh?zh[t]:zh[t]="on"+t}function TA(t,e){if(t.fa)t=!0;else{e=new Oa(e,this);var n=t.listener,s=t.la||t.src;t.ia&&cp(t),t=n.call(s,e)}return t}function lp(t){return t=t[ap],t instanceof Ou?t:null}var Hh="__closure_events_fn_"+(1e9*Math.random()>>>0);function up(t){return typeof t=="function"?t:(t[Hh]||(t[Hh]=function(e){return t.handleEvent(e)}),t[Hh])}function _t(){dr.call(this),this.i=new Ou(this),this.S=this,this.J=null}wt(_t,dr);_t.prototype[cc]=!0;_t.prototype.removeEventListener=function(t,e,n,s){Zw(this,t,e,n,s)};function Ct(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Ut(e,t);else if(e instanceof Ut)e.target=e.target||t;else{var r=e;e=new Ut(s,t),Qw(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=zc(o,s,!0,e)&&r}if(o=e.g=t,r=zc(o,s,!0,e)&&r,r=zc(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=zc(o,s,!1,e)&&r}_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Pu(n[s]);delete t.g[e],t.h--}}this.J=null};_t.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};_t.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function zc(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Md(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var hp=oe.JSON.stringify;class SA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xA(){var t=dp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kA{constructor(){this.h=this.g=null}add(e,n){const s=tb.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var tb=new SA(()=>new CA,t=>t.reset());class CA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function RA(t){oe.setTimeout(()=>{throw t},0)}let La,Ma=!1,dp=new kA,nb=()=>{const t=oe.Promise.resolve(void 0);La=()=>{t.then(NA)}};var NA=()=>{for(var t;t=xA();){try{t.h.call(t.g)}catch(n){RA(n)}var e=tb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ma=!1};function Lu(t,e){_t.call(this),this.h=t||1,this.g=e||oe,this.j=Ft(this.qb,this),this.l=Date.now()}wt(Lu,_t);q=Lu.prototype;q.ga=!1;q.T=null;q.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ct(this,"tick"),this.ga&&(fp(this),this.start()))}};q.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}q.N=function(){Lu.$.N.call(this),fp(this),delete this.g};function pp(t,e,n){if(typeof t=="function")n&&(t=Ft(t,n));else if(t&&typeof t.handleEvent=="function")t=Ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function sb(t){t.g=pp(()=>{t.g=null,t.i&&(t.i=!1,sb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DA extends dr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sb(this)}N(){super.N(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fa(t){dr.call(this),this.h=t,this.g={}}wt(Fa,dr);var _y=[];function rb(t,e,n,s){Array.isArray(n)||(n&&(_y[0]=n.toString()),n=_y);for(var r=0;r<n.length;r++){var i=Yw(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ib(t){op(t.g,function(e,n){this.g.hasOwnProperty(n)&&cp(e)},t),t.g={}}Fa.prototype.N=function(){Fa.$.N.call(this),ib(this)};Fa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mu(){this.g=!0}Mu.prototype.Ea=function(){this.g=!1};function PA(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function OA(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Li(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MA(t,n)+(s?" "+s:"")})}function LA(t,e){t.info(function(){return"TIMEOUT: "+e})}Mu.prototype.info=function(){};function MA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return hp(n)}catch{return e}}var di={},wy=null;function Fu(){return wy=wy||new _t}di.Ta="serverreachability";function ob(t){Ut.call(this,di.Ta,t)}wt(ob,Ut);function Ua(t){const e=Fu();Ct(e,new ob(e))}di.STAT_EVENT="statevent";function ab(t,e){Ut.call(this,di.STAT_EVENT,t),this.stat=e}wt(ab,Ut);function zt(t){const e=Fu();Ct(e,new ab(e,t))}di.Ua="timingevent";function cb(t,e){Ut.call(this,di.Ua,t),this.size=e}wt(cb,Ut);function lc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var Uu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function mp(){}mp.prototype.h=null;function by(t){return t.h||(t.h=t.i())}function ub(){}var uc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gp(){Ut.call(this,"d")}wt(gp,Ut);function yp(){Ut.call(this,"c")}wt(yp,Ut);var Ud;function $u(){}wt($u,mp);$u.prototype.g=function(){return new XMLHttpRequest};$u.prototype.i=function(){return{}};Ud=new $u;function hc(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Fa(this),this.P=FA,t=Pd?125:void 0,this.V=new Lu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hb}function hb(){this.i=null,this.g="",this.h=!1}var FA=45e3,$d={},Ul={};q=hc.prototype;q.setTimeout=function(t){this.P=t};function Vd(t,e,n){t.L=1,t.v=Bu(gs(e)),t.s=n,t.S=!0,db(t,null)}function db(t,e){t.G=Date.now(),dc(t),t.A=gs(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),wb(n.i,"t",s),t.C=0,n=t.l.J,t.h=new hb,t.g=Bb(t.l,n?e:null,!t.s),0<t.O&&(t.M=new DA(Ft(t.Pa,t,t.g),t.O)),rb(t.U,t.g,"readystatechange",t.nb),e=t.I?Ww(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ua(),PA(t.j,t.u,t.A,t.m,t.W,t.s)}q.nb=function(t){t=t.target;const e=this.M;e&&Kn(t)==3?e.l():this.Pa(t)};q.Pa=function(t){try{if(t==this.g)e:{const u=Kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Pd||this.g&&(this.h.h||this.g.ja()||Sy(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ua(3):Ua(2)),Vu(this);var n=this.g.da();this.ca=n;t:if(fb(this)){var s=Sy(this.g);t="";var r=s.length,i=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),ua(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,OA(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pa(a)){var l=a;break t}}l=null}if(n=l)Li(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bd(this,n);else{this.i=!1,this.o=3,zt(12),Mr(this),ua(this);break e}}this.S?(pb(this,u,o),Pd&&this.i&&u==3&&(rb(this.U,this.V,"tick",this.mb),this.V.start())):(Li(this.j,this.m,o,null),Bd(this,o)),u==4&&Mr(this),this.i&&!this.J&&(u==4?Fb(this.l,this):(this.i=!1,dc(this)))}else rR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),Mr(this),ua(this)}}}catch{}finally{}};function fb(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function pb(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=UA(t,n),r==Ul){e==4&&(t.o=4,zt(14),s=!1),Li(t.j,t.m,null,"[Incomplete Response]");break}else if(r==$d){t.o=4,zt(15),Li(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Li(t.j,t.m,r,null),Bd(t,r);fb(t)&&r!=Ul&&r!=$d&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,zt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ep(e),e.M=!0,zt(11))):(Li(t.j,t.m,n,"[Invalid Chunked Response]"),Mr(t),ua(t))}q.mb=function(){if(this.g){var t=Kn(this.g),e=this.g.ja();this.C<e.length&&(Vu(this),pb(this,t,e),this.i&&t!=4&&dc(this))}};function UA(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ul:(n=Number(e.substring(n,s)),isNaN(n)?$d:(s+=1,s+n>e.length?Ul:(e=e.slice(s,s+n),t.C=s+n,e)))}q.cancel=function(){this.J=!0,Mr(this)};function dc(t){t.Y=Date.now()+t.P,mb(t,t.P)}function mb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=lc(Ft(t.lb,t),e)}function Vu(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}q.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(LA(this.j,this.A),this.L!=2&&(Ua(),zt(17)),Mr(this),this.o=2,ua(this)):mb(this,this.Y-t)};function ua(t){t.l.H==0||t.J||Fb(t.l,t)}function Mr(t){Vu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,fp(t.V),ib(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||qd(n.i,t))){if(!t.K&&qd(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Bl(n),zu(n);else break e;Ip(n),zt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=lc(Ft(n.ib,n),6e3));if(1>=Eb(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Fr(n,11)}else if((t.K||n.g==t)&&Bl(n),!Pa(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(vp(i,i.h),i.h=null))}if(s.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,Be(s.I,s.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Vb(s,s.J?s.pa:null,s.Y),o.K){Tb(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Vu(a),dc(a)),s.g=o}else Lb(s);0<n.j.length&&Hu(n)}else l[0]!="stop"&&l[0]!="close"||Fr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Fr(n,7):bp(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ua(4)}catch{}}function $A(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Nu(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function VA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Nu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Nu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=VA(t),s=$A(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function zr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zr){this.h=t.h,$l(this,t.j),this.s=t.s,this.g=t.g,Vl(this,t.m),this.l=t.l;var e=t.i,n=new $a;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Iy(this,n),this.o=t.o}else t&&(e=String(t).match(yb))?(this.h=!1,$l(this,e[1]||"",!0),this.s=Jo(e[2]||""),this.g=Jo(e[3]||"",!0),Vl(this,e[4]),this.l=Jo(e[5]||"",!0),Iy(this,e[6]||"",!0),this.o=Jo(e[7]||"")):(this.h=!1,this.i=new $a(null,this.h))}zr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zo(e,Ey,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zo(e,Ey,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zo(n,n.charAt(0)=="/"?zA:jA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zo(n,KA)),t.join("")};function gs(t){return new zr(t)}function $l(t,e,n){t.j=n?Jo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Iy(t,e,n){e instanceof $a?(t.i=e,GA(t.i,t.h)):(n||(e=Zo(e,HA)),t.i=new $a(e,t.h))}function Be(t,e,n){t.i.set(e,n)}function Bu(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Jo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ey=/[#\/\?@]/g,jA=/[#\?:]/g,zA=/[#\?]/g,HA=/[#\?@]/g,KA=/#/g;function $a(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fr(t){t.g||(t.g=new Map,t.h=0,t.i&&BA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=$a.prototype;q.add=function(t,e){fr(this),this.i=null,t=vo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vb(t,e){fr(t),e=vo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _b(t,e){return fr(t),e=vo(t,e),t.g.has(e)}q.forEach=function(t,e){fr(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};q.ta=function(){fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};q.Z=function(t){fr(this);let e=[];if(typeof t=="string")_b(this,t)&&(e=e.concat(this.g.get(vo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return fr(this),this.i=null,t=vo(this,t),_b(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wb(t,e,n){vb(t,e),0<n.length&&(t.i=null,t.g.set(vo(t,e),rp(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function vo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GA(t,e){e&&!t.j&&(fr(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(vb(this,s),wb(this,r,n))},t)),t.j=e}var WA=class{constructor(t,e){this.g=t,this.map=e}};function bb(t){this.l=t||QA,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ka&&oe.g.Ka()&&oe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QA=10;function Ib(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Eb(t){return t.h?1:t.g?t.g.size:0}function qd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vp(t,e){t.g?t.g.add(e):t.h=e}function Tb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bb.prototype.cancel=function(){if(this.i=Sb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sb(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return rp(t.i)}var YA=class{stringify(t){return oe.JSON.stringify(t,void 0)}parse(t){return oe.JSON.parse(t,void 0)}};function XA(){this.g=new YA}function JA(t,e,n){const s=n||"";try{gb(t,function(r,i){let o=r;ac(r)&&(o=hp(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ZA(t,e){const n=new Mu;if(oe.Image){const s=new Image;s.onload=jc(Hc,n,s,"TestLoadImage: loaded",!0,e),s.onerror=jc(Hc,n,s,"TestLoadImage: error",!1,e),s.onabort=jc(Hc,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=jc(Hc,n,s,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Hc(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function fc(t){this.l=t.fc||null,this.j=t.ob||!1}wt(fc,mp);fc.prototype.g=function(){return new qu(this.l,this.j)};fc.prototype.i=function(t){return function(){return t}}({});function qu(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=_p,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wt(qu,_t);var _p=0;q=qu.prototype;q.open=function(t,e){if(this.readyState!=_p)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Va(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||oe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pc(this)),this.readyState=_p};q.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Va(this)),this.g&&(this.readyState=3,Va(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function xb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}q.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pc(this):Va(this),this.readyState==3&&xb(this)}};q.Za=function(t){this.g&&(this.response=this.responseText=t,pc(this))};q.Ya=function(t){this.g&&(this.response=t,pc(this))};q.ka=function(){this.g&&pc(this)};function pc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Va(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Va(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eR=oe.JSON.parse;function Je(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=kb,this.L=this.M=!1}wt(Je,_t);var kb="",tR=/^https?$/i,nR=["POST","PUT"];q=Je.prototype;q.Oa=function(t){this.M=t};q.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ud.g(),this.C=this.u?by(this.u):by(Ud),this.g.onreadystatechange=Ft(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Ty(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=oe.FormData&&t instanceof oe.FormData,!(0<=zw(nR,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rb(this),0<this.B&&((this.L=sR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ft(this.ua,this)):this.A=pp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ty(this,i)}};function sR(t){return Xi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.ua=function(){typeof sp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))};function Ty(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cb(t),ju(t)}function Cb(t){t.F||(t.F=!0,Ct(t,"complete"),Ct(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),ju(this))};q.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ju(this,!0)),Je.$.N.call(this)};q.La=function(){this.s||(this.G||this.v||this.l?Ab(this):this.kb())};q.kb=function(){Ab(this)};function Ab(t){if(t.h&&typeof sp<"u"&&(!t.C[1]||Kn(t)!=4||t.da()!=2)){if(t.v&&Kn(t)==4)pp(t.La,0,t);else if(Ct(t,"readystatechange"),Kn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(yb)[1]||null;!r&&oe.self&&oe.self.location&&(r=oe.self.location.protocol.slice(0,-1)),s=!tR.test(r?r.toLowerCase():"")}n=s}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var i=2<Kn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Cb(t)}}finally{ju(t)}}}}function ju(t,e){if(t.g){Rb(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ct(t,"ready");try{n.onreadystatechange=s}catch{}}}function Rb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}q.isActive=function(){return!!this.g};function Kn(t){return t.g?t.g.readyState:0}q.da=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};q.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eR(e)}};function Sy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case kb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function rR(t){const e={};t=(t.g&&2<=Kn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Pa(t[s]))continue;var n=AA(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}IA(e,function(s){return s.join(", ")})}q.Ia=function(){return this.m};q.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nb(t){let e="";return op(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function wp(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Nb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Be(t,e,n))}function Fo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Db(t){this.Ga=0,this.j=[],this.l=new Mu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fo("baseRetryDelayMs",5e3,t),this.hb=Fo("retryDelaySeedMs",1e4,t),this.eb=Fo("forwardChannelMaxRetries",2,t),this.xa=Fo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bb(t&&t.concurrentRequestLimit),this.Ja=new XA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}q=Db.prototype;q.ra=8;q.H=1;function bp(t){if(Pb(t),t.H==3){var e=t.W++,n=gs(t.I);if(Be(n,"SID",t.K),Be(n,"RID",e),Be(n,"TYPE","terminate"),mc(t,n),e=new hc(t,t.l,e),e.L=2,e.v=Bu(gs(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon)try{n=oe.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=Bb(e.l,null),e.g.ha(e.v)),e.G=Date.now(),dc(e)}$b(t)}function zu(t){t.g&&(Ep(t),t.g.cancel(),t.g=null)}function Pb(t){zu(t),t.u&&(oe.clearTimeout(t.u),t.u=null),Bl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function Hu(t){if(!Ib(t.i)&&!t.m){t.m=!0;var e=t.Na;La||nb(),Ma||(La(),Ma=!0),dp.add(e,t),t.C=0}}function iR(t,e){return Eb(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=lc(Ft(t.Na,t,e),Ub(t,t.C)),t.C++,!0)}q.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new hc(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Ww(i),Qw(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ob(this,r,e),n=gs(this.I),Be(n,"RID",t),Be(n,"CVER",22),this.F&&Be(n,"X-HTTP-Session-Id",this.F),mc(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Nb(i)))+"&"+e:this.o&&wp(n,this.o,i)),vp(this.i,r),this.bb&&Be(n,"TYPE","init"),this.P?(Be(n,"$req",e),Be(n,"SID","null"),r.aa=!0,Vd(r,n,null)):Vd(r,n,e),this.H=2}}else this.H==3&&(t?xy(this,t):this.j.length==0||Ib(this.i)||xy(this))};function xy(t,e){var n;e?n=e.m:n=t.W++;const s=gs(t.I);Be(s,"SID",t.K),Be(s,"RID",n),Be(s,"AID",t.V),mc(t,s),t.o&&t.s&&wp(s,t.o,t.s),n=new hc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ob(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),vp(t.i,n),Vd(n,s,e)}function mc(t,e){t.na&&op(t.na,function(n,s){Be(e,s,n)}),t.h&&gb({},function(n,s){Be(e,s,n)})}function Ob(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Ft(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{JA(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Lb(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;La||nb(),Ma||(La(),Ma=!0),dp.add(e,t),t.A=0}}function Ip(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=lc(Ft(t.Ma,t),Ub(t,t.A)),t.A++,!0)}q.Ma=function(){if(this.u=null,Mb(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=lc(Ft(this.jb,this),t)}};q.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zt(10),zu(this),Mb(this))};function Ep(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function Mb(t){t.g=new hc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gs(t.wa);Be(e,"RID","rpc"),Be(e,"SID",t.K),Be(e,"AID",t.V),Be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Be(e,"TO",t.qa),Be(e,"TYPE","xmlhttp"),mc(t,e),t.o&&t.s&&wp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Bu(gs(e)),n.s=null,n.S=!0,db(n,t)}q.ib=function(){this.v!=null&&(this.v=null,zu(this),Ip(this),zt(19))};function Bl(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function Fb(t,e){var n=null;if(t.g==e){Bl(t),Ep(t),t.g=null;var s=2}else if(qd(t.i,e))n=e.F,Tb(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Fu(),Ct(s,new cb(s,n)),Hu(t)}else Lb(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&iR(t,e)||s==2&&Ip(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Fr(t,5);break;case 4:Fr(t,10);break;case 3:Fr(t,6);break;default:Fr(t,2)}}}function Ub(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Fr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Ft(t.pb,t);n||(n=new zr("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||$l(n,"https"),Bu(n)),ZA(n.toString(),s)}else zt(2);t.H=0,t.h&&t.h.za(e),$b(t),Pb(t)}q.pb=function(t){t?(this.l.info("Successfully pinged google.com"),zt(2)):(this.l.info("Failed to ping google.com"),zt(1))};function $b(t){if(t.H=0,t.ma=[],t.h){const e=Sb(t.i);(e.length!=0||t.j.length!=0)&&(gy(t.ma,e),gy(t.ma,t.j),t.i.i.length=0,rp(t.j),t.j.length=0),t.h.ya()}}function Vb(t,e,n){var s=n instanceof zr?gs(n):new zr(n);if(s.g!="")e&&(s.g=e+"."+s.g),Vl(s,s.m);else{var r=oe.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new zr(null);s&&$l(i,s),e&&(i.g=e),r&&Vl(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Be(s,n,e),Be(s,"VER",t.ra),mc(t,s),s}function Bb(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Je(new fc({ob:!0})):new Je(t.va),e.Oa(t.J),e}q.isActive=function(){return!!this.h&&this.h.isActive(this)};function qb(){}q=qb.prototype;q.Ba=function(){};q.Aa=function(){};q.za=function(){};q.ya=function(){};q.isActive=function(){return!0};q.Va=function(){};function ql(){if(Xi&&!(10<=Number(vA)))throw Error("Environmental error: no available transport.")}ql.prototype.g=function(t,e){return new un(t,e)};function un(t,e){_t.call(this),this.g=new Db(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Pa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _o(this)}wt(un,_t);un.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;zt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Vb(t,null,t.Y),Hu(t)};un.prototype.close=function(){bp(this.g)};un.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hp(t),t=n);e.j.push(new WA(e.fb++,t)),e.H==3&&Hu(e)};un.prototype.N=function(){this.g.h=null,delete this.j,bp(this.g),delete this.g,un.$.N.call(this)};function jb(t){gp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}wt(jb,gp);function zb(){yp.call(this),this.status=1}wt(zb,yp);function _o(t){this.g=t}wt(_o,qb);_o.prototype.Ba=function(){Ct(this.g,"a")};_o.prototype.Aa=function(t){Ct(this.g,new jb(t))};_o.prototype.za=function(t){Ct(this.g,new zb)};_o.prototype.ya=function(){Ct(this.g,"b")};function oR(){this.blockSize=-1}function Dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}wt(Dn,oR);Dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Kh(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Kh(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Kh(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Kh(this,s),r=0;break}}this.h=r,this.i+=e};Dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Re(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var aR={};function Tp(t){return-128<=t&&128>t?mA(t,function(e){return new Re([e|0],0>e?-1:0)}):new Re([t|0],0>t?-1:0)}function Gn(t){if(isNaN(t)||!isFinite(t))return $i;if(0>t)return xt(Gn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=jd;return new Re(e,0)}function Hb(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xt(Hb(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gn(Math.pow(e,8)),s=$i,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Gn(Math.pow(e,i)),s=s.R(i).add(Gn(o))):(s=s.R(n),s=s.add(Gn(o)))}return s}var jd=4294967296,$i=Tp(0),zd=Tp(1),ky=Tp(16777216);q=Re.prototype;q.ea=function(){if(fn(this))return-xt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:jd+s)*e,e*=jd}return t};q.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(as(this))return"0";if(fn(this))return"-"+xt(this).toString(t);for(var e=Gn(Math.pow(t,6)),n=this,s="";;){var r=zl(n,e).g;n=jl(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,as(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};q.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function as(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function fn(t){return t.h==-1}q.X=function(t){return t=jl(this,t),fn(t)?-1:as(t)?0:1};function xt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Re(n,~t.h).add(zd)}q.abs=function(){return fn(this)?xt(this):this};q.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Re(n,n[n.length-1]&-2147483648?-1:0)};function jl(t,e){return t.add(xt(e))}q.R=function(t){if(as(this)||as(t))return $i;if(fn(this))return fn(t)?xt(this).R(xt(t)):xt(xt(this).R(t));if(fn(t))return xt(this.R(xt(t)));if(0>this.X(ky)&&0>t.X(ky))return Gn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Kc(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Kc(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Kc(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Kc(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Re(n,0)};function Kc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Uo(t,e){this.g=t,this.h=e}function zl(t,e){if(as(e))throw Error("division by zero");if(as(t))return new Uo($i,$i);if(fn(t))return e=zl(xt(t),e),new Uo(xt(e.g),xt(e.h));if(fn(e))return e=zl(t,xt(e)),new Uo(xt(e.g),e.h);if(30<t.g.length){if(fn(t)||fn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zd,s=e;0>=s.X(t);)n=Cy(n),s=Cy(s);var r=Ti(n,1),i=Ti(s,1);for(s=Ti(s,2),n=Ti(n,2);!as(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ti(s,1),n=Ti(n,1)}return e=jl(t,r.R(e)),new Uo(r,e)}for(r=$i;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Gn(n),o=i.R(e);fn(o)||0<o.X(t);)n-=s,i=Gn(n),o=i.R(e);as(i)&&(i=zd),r=r.add(i),t=jl(t,o)}return new Uo(r,t)}q.gb=function(t){return zl(this,t).h};q.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Re(n,this.h&t.h)};q.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Re(n,this.h|t.h)};q.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Re(n,this.h^t.h)};function Cy(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Re(n,t.h)}function Ti(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Re(r,t.h)}ql.prototype.createWebChannel=ql.prototype.g;un.prototype.send=un.prototype.u;un.prototype.open=un.prototype.m;un.prototype.close=un.prototype.close;Uu.NO_ERROR=0;Uu.TIMEOUT=8;Uu.HTTP_ERROR=6;lb.COMPLETE="complete";ub.EventType=uc;uc.OPEN="a";uc.CLOSE="b";uc.ERROR="c";uc.MESSAGE="d";_t.prototype.listen=_t.prototype.O;Je.prototype.listenOnce=Je.prototype.P;Je.prototype.getLastError=Je.prototype.Sa;Je.prototype.getLastErrorCode=Je.prototype.Ia;Je.prototype.getStatus=Je.prototype.da;Je.prototype.getResponseJson=Je.prototype.Wa;Je.prototype.getResponseText=Je.prototype.ja;Je.prototype.send=Je.prototype.ha;Je.prototype.setWithCredentials=Je.prototype.Oa;Dn.prototype.digest=Dn.prototype.l;Dn.prototype.reset=Dn.prototype.reset;Dn.prototype.update=Dn.prototype.j;Re.prototype.add=Re.prototype.add;Re.prototype.multiply=Re.prototype.R;Re.prototype.modulo=Re.prototype.gb;Re.prototype.compare=Re.prototype.X;Re.prototype.toNumber=Re.prototype.ea;Re.prototype.toString=Re.prototype.toString;Re.prototype.getBits=Re.prototype.D;Re.fromNumber=Gn;Re.fromString=Hb;var cR=function(){return new ql},lR=function(){return Fu()},Gh=Uu,uR=lb,hR=di,Ay={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dR=fc,Gc=ub,fR=Je,pR=Dn,Vi=Re;const Ry="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Ru("@firebase/firestore");function Hd(){return tr.logLevel}function mR(t){tr.setLogLevel(t)}function A(t,...e){if(tr.logLevel<=_e.DEBUG){const n=e.map(Sp);tr.debug(`Firestore (${wo}): ${t}`,...n)}}function et(t,...e){if(tr.logLevel<=_e.ERROR){const n=e.map(Sp);tr.error(`Firestore (${wo}): ${t}`,...n)}}function Pn(t,...e){if(tr.logLevel<=_e.WARN){const n=e.map(Sp);tr.warn(`Firestore (${wo}): ${t}`,...n)}}function Sp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: `+t;throw et(e),new Error(e)}function Z(t,e){t||z()}function gR(t,e){t||z()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class vR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _R{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Z(typeof s.accessToken=="string"),new Kb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new mt(e)}}class wR{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class bR{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new wR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ER{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.T=n.token,new IR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=TR(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function le(t,e){return t<e?-1:t>e?1:0}function Ji(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}function Wb(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ge(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ge(0,0))}static max(){return new J(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ba.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ba?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Ba{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new k(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const SR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Ba{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return SR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new k(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new k(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new k(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new k(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(we.fromString(e))}static fromName(e){return new U(we.fromString(e).popFirst(5))}static empty(){return new U(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new we(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,s,r){this.indexId=e,this.collectionGroup=n,this.fields=s,this.indexState=r}}function Kd(t){return t.fields.find(e=>e.kind===2)}function Sr(t){return t.fields.filter(e=>e.kind!==2)}Qb.UNKNOWN_ID=-1;class xR{constructor(e,n){this.fieldPath=e,this.kind=n}}class Hl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Hl(0,hn.min())}}function Yb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new Ge(n+1,0):new Ge(n,s));return new hn(r,U.empty(),e)}function Xb(t){return new hn(t.readTime,t.key,-1)}class hn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new hn(J.min(),U.empty(),-1)}static max(){return new hn(J.max(),U.empty(),-1)}}function xp(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Jb)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new vt,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new ha(e,n.error)):this.v.resolve()},this.transaction.onerror=s=>{const r=kp(s.target.error);this.v.reject(new ha(e,r))}}static open(e,n,s,r){try{return new Ku(n,e.transaction(r,s))}catch(i){throw new ha(n,i)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new CR(n)}}class Sn{constructor(e,n,s){this.name=e,this.version=n,this.V=s,Sn.S(We())===12.2&&et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),Rr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ra())return!1;if(Sn.C())return!0;const e=We(),n=Sn.S(e),s=0<n&&n<10,r=Sn.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static N(e){const n=e.match(/Android ([\d.]+)/i),s=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async $(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;n(o)},r.onblocked=()=>{s(new ha(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new k(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new k(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new ha(e,o))},r.onupgradeneeded=i=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.O(o,r.transaction,i.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,s,r){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Ku.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),b.reject(l))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kR{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Rr(this.L.delete())}}class ha extends k{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function mr(t){return t.name==="IndexedDbTransactionError"}class CR{constructor(e){this.store=e}put(e,n){let s;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),s=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),Rr(s)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),Rr(this.store.add(e))}get(e){return Rr(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),Rr(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),Rr(this.store.count())}j(e,n){const s=this.options(e,n);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.W(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new b((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}H(e,n){const s=this.store.getAll(e,n===null?void 0:n);return new b((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}J(e,n){A("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,n);s.Y=!1;const r=this.cursor(s);return this.W(r,(i,o,a)=>a.delete())}X(e,n){let s;n?s=e:(s={},n=e);const r=this.cursor(s);return this.W(r,n)}Z(e){const n=this.cursor({});return new b((s,r)=>{n.onerror=i=>{const o=kp(i.target.error);r(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}W(e,n){const s=[];return new b((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new kR(a),l=n(a.primaryKey,a.value,c);if(l instanceof b){const u=l.catch(h=>(c.done(),b.reject(h)));s.push(u)}c.isDone?r():c.K===null?a.continue():a.continue(c.K)}}).next(()=>b.waitFor(s))}options(e,n){let s;return e!==void 0&&(typeof e=="string"?s=e:n=e),{index:s,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const s=this.store.index(e.index);return e.Y?s.openKeyCursor(e.range,n):s.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Rr(t){return new b((e,n)=>{t.onsuccess=s=>{const r=s.target.result;e(r)},t.onerror=s=>{const r=kp(s.target.error);n(r)}})}let Ny=!1;function kp(t){const e=Sn.S(We());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const s=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ny||(Ny=!0,setTimeout(()=>{throw s},0)),s}}return t}class AR{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){mr(n)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await pr(n)}await this.et(6e4)})}}class RR{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const s=new Set;let r=n,i=!0;return b.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return A("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>n-r)}it(e,n,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(r=>this.localStore.localDocuments.getNextDocuments(e,n,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(r,i)).next(a=>(A("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let s=e;return n.changes.forEach((r,i)=>{const o=Xb(i);xp(o,s)>0&&(s=o)}),new hn(s.readTime,s.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Jt.ct=-1;function gc(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function eI(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dy(e)),e=NR(t.get(n),e);return Dy(e)}function NR(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Dy(t){return t+""}function Wn(t){const e=t.length;if(Z(e>=2),e===2)return Z(t.charAt(0)===""&&t.charAt(1)===""),we.emptyPath();const n=e-2,s=[];let r="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&z(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=t.substring(i,o),r+="\0";break;case"":r+=t.substring(i,o+1);break;default:z()}i=o+2}return new we(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e){return[t,Ht(e)]}function tI(t,e,n){return[t,Ht(e),n]}const DR={},PR=["prefixPath","collectionGroup","readTime","documentId"],OR=["prefixPath","collectionGroup","documentId"],LR=["collectionGroup","readTime","prefixPath","documentId"],MR=["canonicalId","targetId"],FR=["targetId","path"],UR=["path","targetId"],$R=["collectionId","parent"],VR=["indexId","uid"],BR=["uid","sequenceNumber"],qR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],jR=["indexId","uid","orderedDocumentKey"],zR=["userId","collectionPath","documentId"],HR=["userId","collectionPath","largestBatchId"],KR=["userId","collectionGroup","largestBatchId"],nI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],GR=[...nI,"documentOverlays"],sI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],rI=sI,WR=[...rI,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends Zb{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function bt(t,e){const n=B(t);return Sn.M(n.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wc(this.root,e,this.comparator,!0)}}class Wc{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??St.RED,this.left=r??St.EMPTY,this.right=i??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new St(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return St.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new St(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Si(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new je(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new oI("Invalid base64 string: "+r):r}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const YR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(Z(!!t),typeof t=="string"){let e=0;const n=YR.exec(t);if(Z(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cp(t){const e=t.mapValue.fields.__previous_value__;return Gu(e)?Cp(e):e}function ja(t){const e=nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ul={nullValue:"NULL_VALUE"};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gu(t)?4:aI(t)?9007199254740991:10:z()}function ts(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ja(t).isEqual(ja(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=nr(s.timestampValue),o=nr(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return sr(s.bytesValue).isEqual(sr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ye(s.geoPointValue.latitude)===Ye(r.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ye(s.integerValue)===Ye(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ye(s.doubleValue),o=Ye(r.doubleValue);return i===o?qa(i)===qa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ji(t.arrayValue.values||[],e.arrayValue.values||[],ts);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Oy(i)!==Oy(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ts(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function za(t,e){return(t.values||[]).find(n=>ts(n,e))!==void 0}function ir(t,e){if(t===e)return 0;const n=Xr(t),s=Xr(e);if(n!==s)return le(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ye(r.integerValue||r.doubleValue),a=Ye(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return My(t.timestampValue,e.timestampValue);case 4:return My(ja(t),ja(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(r,i){const o=sr(r),a=sr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=le(Ye(r.latitude),Ye(i.latitude));return o!==0?o:le(Ye(r.longitude),Ye(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ir(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Bs.mapValue&&i===Bs.mapValue)return 0;if(r===Bs.mapValue)return 1;if(i===Bs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const d=ir(o[a[u]],c[l[u]]);if(d!==0)return d}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function My(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=nr(t),s=nr(e),r=le(n.seconds,s.seconds);return r!==0?r:le(n.nanos,s.nanos)}function Zi(t){return Wd(t)}function Wd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=nr(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?sr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Wd(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Wd(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function Jr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qd(t){return!!t&&"integerValue"in t}function Ha(t){return!!t&&"arrayValue"in t}function Fy(t){return!!t&&"nullValue"in t}function Uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hl(t){return!!t&&"mapValue"in t}function da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=da(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function JR(t){return"nullValue"in t?ul:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Jr(rr.empty(),U.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:z()}function ZR(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Jr(rr.empty(),U.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Bs:z()}function $y(t,e){const n=ir(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Vy(t,e){const n=ir(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=da(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=da(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ts(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];hl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){fi(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new kt(da(this.value))}}function cI(t){const e=[];return fi(t.fields,(n,s)=>{const r=new tt([n]);if(hl(s)){const i=cI(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qe(e,0,J.min(),J.min(),J.min(),kt.empty(),0)}static newFoundDocument(e,n,s,r){return new qe(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new qe(e,2,n,J.min(),J.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,J.min(),J.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.position=e,this.inclusive=n}}function By(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=U.comparator(U.fromName(o.referenceValue),n.key):s=ir(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function qy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ts(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n="asc"){this.field=e,this.dir=n}}function eN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{}class ge extends lI{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new tN(e,n,s):n==="array-contains"?new rN(e,s):n==="in"?new mI(e,s):n==="not-in"?new iN(e,s):n==="array-contains-any"?new oN(e,s):new ge(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new nN(e,s):new sN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ir(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ae extends lI{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Ae(e,n)}matches(e){return eo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function eo(t){return t.op==="and"}function Yd(t){return t.op==="or"}function Ap(t){return uI(t)&&eo(t)}function uI(t){for(const e of t.filters)if(e instanceof Ae)return!1;return!0}function Xd(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+Zi(t.value);if(Ap(t))return t.filters.map(e=>Xd(e)).join(",");{const e=t.filters.map(n=>Xd(n)).join(",");return`${t.op}(${e})`}}function hI(t,e){return t instanceof ge?function(n,s){return s instanceof ge&&n.op===s.op&&n.field.isEqual(s.field)&&ts(n.value,s.value)}(t,e):t instanceof Ae?function(n,s){return s instanceof Ae&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&hI(i,s.filters[o]),!0):!1}(t,e):void z()}function dI(t,e){const n=t.filters.concat(e);return Ae.create(n,t.op)}function fI(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${Zi(e.value)}`}(t):t instanceof Ae?function(e){return e.op.toString()+" {"+e.getFilters().map(fI).join(" ,")+"}"}(t):"Filter"}class tN extends ge{constructor(e,n,s){super(e,n,s),this.key=U.fromName(s.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class nN extends ge{constructor(e,n){super(e,"in",n),this.keys=pI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sN extends ge{constructor(e,n){super(e,"not-in",n),this.keys=pI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>U.fromName(s.referenceValue))}class rN extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ha(n)&&za(n.arrayValue,this.value)}}class mI extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&za(this.value.arrayValue,n)}}class iN extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!za(this.value.arrayValue,n)}}class oN extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>za(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Jd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new aN(t,e,n,s,r,i,o)}function Zr(t){const e=B(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Xd(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Zi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Zi(s)).join(",")),e.dt=n}return e.dt}function yc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qy(t.startAt,e.startAt)&&qy(t.endAt,e.endAt)}function Kl(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Gl(t,e){return t.filters.filter(n=>n instanceof ge&&n.field.isEqual(e))}function jy(t,e,n){let s=ul,r=!0;for(const i of Gl(t,e)){let o=ul,a=!0;switch(i.op){case"<":case"<=":o=JR(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=ul}$y({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];$y({value:s,inclusive:r},{value:o,inclusive:n.inclusive})<0&&(s=o,r=n.inclusive);break}}return{value:s,inclusive:r}}function zy(t,e,n){let s=Bs,r=!0;for(const i of Gl(t,e)){let o=Bs,a=!0;switch(i.op){case">=":case">":o=ZR(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Bs}Vy({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Vy({value:s,inclusive:r},{value:o,inclusive:n.inclusive})>0&&(s=o,r=n.inclusive);break}}return{value:s,inclusive:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function gI(t,e,n,s,r,i,o,a){return new bs(t,e,n,s,r,i,o,a)}function bo(t){return new bs(t)}function Hy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Rp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Np(t){return t.collectionGroup!==null}function Hr(t){const e=B(t);if(e.wt===null){e.wt=[];const n=Wu(e),s=Rp(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Bi(n)),e.wt.push(new Bi(tt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Bi(tt.keyField(),i))}}}return e.wt}function nn(t){const e=B(t);if(!e._t)if(e.limitType==="F")e._t=Jd(e.path,e.collectionGroup,Hr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Hr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Bi(i.field,o))}const s=e.endAt?new or(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new or(e.startAt.position,e.startAt.inclusive):null;e._t=Jd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Zd(t,e){e.getFirstInequalityField(),Wu(t);const n=t.filters.concat([e]);return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wl(t,e,n){return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return yc(nn(t),nn(e))&&t.limitType===e.limitType}function yI(t){return`${Zr(nn(t))}|lt:${t.limitType}`}function ef(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>fI(s)).join(", ")}]`),gc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Zi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Zi(s)).join(",")),`Target(${n})`}(nn(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):U.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Hr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=By(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Hr(n),s)||n.endAt&&!function(r,i,o){const a=By(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Hr(n),s))}(t,e)}function vI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _I(t){return(e,n)=>{let s=!1;for(const r of Hr(t)){const i=cN(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function cN(t,e,n){const s=t.field.isKeyField()?U.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ir(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return iI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new $e(U.comparator);function en(){return lN}const wI=new $e(U.comparator);function ea(...t){let e=wI;for(const n of t)e=e.insert(n.key,n);return e}function bI(t){let e=wI;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Qn(){return fa()}function II(){return fa()}function fa(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const uN=new $e(U.comparator),hN=new je(U.comparator);function de(...t){let e=hN;for(const n of t)e=e.add(n);return e}const dN=new je(le);function Dp(){return dN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function TI(t){return{integerValue:""+t}}function SI(t,e){return eI(e)?TI(e):EI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this._=void 0}}function fN(t,e,n){return t instanceof to?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Gu(r)&&(r=Cp(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ei?kI(t,e):t instanceof ti?CI(t,e):function(s,r){const i=xI(s,r),o=Ky(i)+Ky(s.gt);return Qd(i)&&Qd(s.gt)?TI(o):EI(s.serializer,o)}(t,e)}function pN(t,e,n){return t instanceof ei?kI(t,e):t instanceof ti?CI(t,e):n}function xI(t,e){return t instanceof no?Qd(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class to extends Qu{}class ei extends Qu{constructor(e){super(),this.elements=e}}function kI(t,e){const n=AI(e);for(const s of t.elements)n.some(r=>ts(r,s))||n.push(s);return{arrayValue:{values:n}}}class ti extends Qu{constructor(e){super(),this.elements=e}}function CI(t,e){let n=AI(e);for(const s of t.elements)n=n.filter(r=>!ts(r,s));return{arrayValue:{values:n}}}class no extends Qu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Ky(t){return Ye(t.integerValue||t.doubleValue)}function AI(t){return Ha(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n){this.field=e,this.transform=n}}function mN(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ei&&s instanceof ei||n instanceof ti&&s instanceof ti?Ji(n.elements,s.elements,ts):n instanceof no&&s instanceof no?ts(n.gt,s.gt):n instanceof to&&s instanceof to}(t.transform,e.transform)}class gN{constructor(e,n){this.version=e,this.transformResults=n}}class Ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yu{}function RI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Eo(t.key,Ke.none()):new Io(t.key,t.data,Ke.none());{const n=t.data,s=kt.empty();let r=new je(tt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Is(t.key,s,new Zt(r.toArray()),Ke.none())}}function yN(t,e,n){t instanceof Io?function(s,r,i){const o=s.value.clone(),a=Wy(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Is?function(s,r,i){if(!dl(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Wy(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(NI(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function pa(t,e,n,s){return t instanceof Io?function(r,i,o,a){if(!dl(r.precondition,i))return o;const c=r.value.clone(),l=Qy(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Is?function(r,i,o,a){if(!dl(r.precondition,i))return o;const c=Qy(r.fieldTransforms,a,i),l=i.data;return l.setAll(NI(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return dl(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function vN(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=xI(s.transform,r||null);i!=null&&(n===null&&(n=kt.empty()),n.set(s.field,i))}return n||null}function Gy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ji(n,s,(r,i)=>mN(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends Yu{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Is extends Yu{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function NI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Wy(t,e,n){const s=new Map;Z(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,pN(o,a,n[r]))}return s}function Qy(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,fN(i,o,e))}return s}class Eo extends Yu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pp extends Yu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&yN(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=pa(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=pa(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=II();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=RI(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(n,s)=>Gy(n,s))&&Ji(this.baseMutations,e.baseMutations,(n,s)=>Gy(n,s))}}class Lp{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Z(e.mutations.length===s.length);let r=uN;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Lp(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,ve;function DI(t){switch(t){default:return z();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function PI(t){if(t===void 0)return et("GRPC error has no .code"),I.UNKNOWN;switch(t){case ot.OK:return I.OK;case ot.CANCELLED:return I.CANCELLED;case ot.UNKNOWN:return I.UNKNOWN;case ot.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ot.INTERNAL:return I.INTERNAL;case ot.UNAVAILABLE:return I.UNAVAILABLE;case ot.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ot.NOT_FOUND:return I.NOT_FOUND;case ot.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ot.ABORTED:return I.ABORTED;case ot.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ot.DATA_LOSS:return I.DATA_LOSS;default:return z()}}(ve=ot||(ot={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Qc}static getOrCreateInstance(){return Qc===null&&(Qc=new Fp),Qc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Qc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new Vi([4294967295,4294967295],0);function Yy(t){const e=OI().encode(t),n=new pR;return n.update(e),new Uint8Array(n.digest())}function Xy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vi([n,s],0),new Vi([r,i],0)]}class Up{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ta(`Invalid padding: ${n}`);if(s<0)throw new ta(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ta(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ta(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Vi.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(Vi.fromNumber(s)));return r.compare(wN)===1&&(r=new Vi([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Yy(e),[s,r]=Xy(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Up(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Yy(e),[s,r]=Xy(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ic.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new bc(J.min(),r,new $e(le),en(),de())}}class Ic{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ic(s,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class LI{constructor(e,n){this.targetId=e,this.Vt=n}}class MI{constructor(e,n,s=dt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Jy{constructor(){this.St=0,this.Dt=ev(),this.Ct=dt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=de(),n=de(),s=de();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new Ic(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=ev()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class bN{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=en(),this.zt=Zy(),this.Wt=new $e(le)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Kl(o))if(r===0){const a=new U(o.path);this.Yt(s,a,qe.newNoDocument(a,J.min()))}else Z(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=Fp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,m,v,_,S;const N={localCacheCount:u,existenceFilterCount:h.count},D=h.unchangedNames;return D&&(N.bloomFilter={applied:l===0,hashCount:(d=D==null?void 0:D.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(m=(f=D==null?void 0:D.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(S=(_=D==null?void 0:D.bits)===null||_===void 0?void 0:_.padding)!==null&&S!==void 0?S:0}),N}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=sr(i).toUint8Array()}catch(u){if(u instanceof oI)return Pn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Up(c,o,a)}catch(u){return Pn(u instanceof ta?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Kl(a.target)){const c=new U(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,qe.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=de();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new bc(e,n,this.Wt,this.jt,s);return this.jt=en(),this.zt=Zy(),this.Wt=new $e(le),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Jy,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new je(le),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Jy),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Zy(){return new $e(U.comparator)}function ev(){return new $e(U.comparator)}const IN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),EN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),TN=(()=>({and:"AND",or:"OR"}))();class SN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tf(t,e){return t.useProto3Json||gc(e)?e:{value:e}}function so(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xN(t,e){return so(t,e.toTimestamp())}function st(t){return Z(!!t),J.fromTimestamp(function(e){const n=nr(e);return new Ge(n.seconds,n.nanos)}(t))}function $p(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function UI(t){const e=we.fromString(t);return Z(GI(e)),e}function Ka(t,e){return $p(t.databaseId,e.path)}function Jn(t,e){const n=UI(e);if(n.get(1)!==t.databaseId.projectId)throw new k(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(VI(n))}function nf(t,e){return $p(t.databaseId,e)}function $I(t){const e=UI(t);return e.length===4?we.emptyPath():VI(e)}function Ga(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VI(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tv(t,e,n){return{name:Ka(t,e),fields:n.value.mapValue.fields}}function BI(t,e,n){const s=Jn(t,e.name),r=st(e.updateTime),i=e.createTime?st(e.createTime):J.min(),o=new kt({mapValue:{fields:e.fields}}),a=qe.newFoundDocument(s,r,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function kN(t,e){return"found"in e?function(n,s){Z(!!s.found),s.found.name,s.found.updateTime;const r=Jn(n,s.found.name),i=st(s.found.updateTime),o=s.found.createTime?st(s.found.createTime):J.min(),a=new kt({mapValue:{fields:s.found.fields}});return qe.newFoundDocument(r,i,o,a)}(t,e):"missing"in e?function(n,s){Z(!!s.missing),Z(!!s.readTime);const r=Jn(n,s.missing),i=st(s.readTime);return qe.newNoDocument(r,i)}(t,e):z()}function CN(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Z(l===void 0||typeof l=="string"),dt.fromBase64String(l||"")):(Z(l===void 0||l instanceof Uint8Array),dt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:PI(c.code);return new k(l,c.message||"")}(o);n=new MI(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Jn(t,s.document.name),i=st(s.document.updateTime),o=s.document.createTime?st(s.document.createTime):J.min(),a=new kt({mapValue:{fields:s.document.fields}}),c=qe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new fl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Jn(t,s.document),i=s.readTime?st(s.readTime):J.min(),o=qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new fl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Jn(t,s.document),i=s.removedTargetIds||[];n=new fl([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new _N(r,i),a=s.targetId;n=new LI(a,o)}}return n}function Wa(t,e){let n;if(e instanceof Io)n={update:tv(t,e.key,e.value)};else if(e instanceof Eo)n={delete:Ka(t,e.key)};else if(e instanceof Is)n={update:tv(t,e.key,e.data),updateMask:ON(e.fieldMask)};else{if(!(e instanceof Pp))return z();n={verify:Ka(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof to)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ei)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof no)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:xN(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function sf(t,e){const n=e.currentDocument?function(r){return r.updateTime!==void 0?Ke.updateTime(st(r.updateTime)):r.exists!==void 0?Ke.exists(r.exists):Ke.none()}(e.currentDocument):Ke.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)Z(o.setToServerValue==="REQUEST_TIME"),a=new to;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new ei(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new ti(l)}else"increment"in o?a=new no(i,o.increment):z();const c=tt.fromServerFormat(o.fieldPath);return new wc(c,a)}(t,r)):[];if(e.update){e.update.name;const r=Jn(t,e.update.name),i=new kt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Zt(c.map(l=>tt.fromServerFormat(l)))}(e.updateMask);return new Is(r,i,o,n,s)}return new Io(r,i,n,s)}if(e.delete){const r=Jn(t,e.delete);return new Eo(r,n)}if(e.verify){const r=Jn(t,e.verify);return new Pp(r,n)}return z()}function AN(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?st(s.updateTime):st(r);return i.isEqual(J.min())&&(i=st(r)),new gN(i,s.transformResults||[])}(n,e))):[]}function qI(t,e){return{documents:[nf(t,e.path)]}}function jI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=nf(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nf(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return KI(Ae.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ri(u.field),direction:NN(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=tf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function zI(t){let e=$I(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Z(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=HI(u);return h instanceof Ae&&Ap(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Bi(Ni(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,gc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new or(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new or(d,h)}(n.endAt)),gI(e,r,o,i,a,"F",c,l)}function RN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ni(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ni(e.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ni(e.unaryFilter.field);return ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ni(e.unaryFilter.field);return ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return ge.create(Ni(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ae.create(e.compositeFilter.filters.map(n=>HI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function NN(t){return IN[t]}function DN(t){return EN[t]}function PN(t){return TN[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Ni(t){return tt.fromServerFormat(t.fieldPath)}function KI(t){return t instanceof ge?function(e){if(e.op==="=="){if(Uy(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NAN"}};if(Fy(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Uy(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NAN"}};if(Fy(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(e.field),op:DN(e.op),value:e.value}}}(t):t instanceof Ae?function(e){const n=e.getFilters().map(s=>KI(s));return n.length===1?n[0]:{compositeFilter:{op:PN(e.op),filters:n}}}(t):z()}function ON(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,s,r,i=J.min(),o=J.min(),a=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.fe=e}}function LN(t,e){let n;if(e.document)n=BI(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=U.fromSegments(e.noDocument.path),r=si(e.noDocument.readTime);n=qe.newNoDocument(s,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return z();{const s=U.fromSegments(e.unknownDocument.path),r=si(e.unknownDocument.version);n=qe.newUnknownDocument(s,r)}}return e.readTime&&n.setReadTime(function(s){const r=new Ge(s[0],s[1]);return J.fromTimestamp(r)}(e.readTime)),n}function nv(t,e){const n=e.key,s={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ql(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:Ka(r,i.key),fields:i.data.value.mapValue.fields,updateTime:so(r,i.version.toTimestamp()),createTime:so(r,i.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())s.noDocument={path:n.path.toArray(),readTime:ni(e.version)};else{if(!e.isUnknownDocument())return z();s.unknownDocument={path:n.path.toArray(),version:ni(e.version)}}return s}function Ql(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ni(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function si(t){const e=new Ge(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function Nr(t,e){const n=(e.baseMutations||[]).map(i=>sf(t.fe,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>sf(t.fe,i)),r=Ge.fromMillis(e.localWriteTimeMs);return new Op(e.batchId,r,n,s)}function na(t){const e=si(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?si(t.lastLimboFreeSnapshotVersion):J.min();let s;var r;return t.query.documents!==void 0?(Z((r=t.query).documents.length===1),s=nn(bo($I(r.documents[0])))):s=function(i){return nn(zI(i))}(t.query),new cs(s,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,dt.fromBase64String(t.resumeToken))}function QI(t,e){const n=ni(e.snapshotVersion),s=ni(e.lastLimboFreeSnapshotVersion);let r;r=Kl(e.target)?qI(t.fe,e.target):jI(t.fe,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Zr(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Vp(t){const e=zI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wl(e,e.limit,"L"):e}function Wh(t,e){return new Mp(e.largestBatchId,sf(t.fe,e.overlayMutation))}function sv(t,e){const n=e.path.lastSegment();return[t,Ht(e.path.popLast()),n]}function rv(t,e,n,s){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:ni(s.readTime),documentKey:Ht(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{getBundleMetadata(e,n){return iv(e).get(n).next(s=>{if(s)return{id:(r=s).bundleId,createTime:si(r.createTime),version:r.version};var r})}saveBundleMetadata(e,n){return iv(e).put({bundleId:(s=n).id,createTime:ni(st(s.createTime)),version:s.version});var s}getNamedQuery(e,n){return ov(e).get(n).next(s=>{if(s)return{name:(r=s).name,query:Vp(r.bundledQuery),readTime:si(r.readTime)};var r})}saveNamedQuery(e,n){return ov(e).put(function(s){return{name:s.name,readTime:ni(st(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function iv(t){return bt(t,"bundles")}function ov(t){return bt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const s=n.uid||"";return new Xu(e,s)}getOverlay(e,n){return $o(e).get(sv(this.userId,n)).next(s=>s?Wh(this.serializer,s):null)}getOverlays(e,n){const s=Qn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){const r=[];return s.forEach((i,o)=>{const a=new Mp(n,o);r.push(this.we(e,a))}),b.waitFor(r)}removeOverlaysForBatchId(e,n,s){const r=new Set;n.forEach(o=>r.add(Ht(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push($o(e).J("collectionPathOverlayIndex",a))}),b.waitFor(i)}getOverlaysForCollection(e,n,s){const r=Qn(),i=Ht(n),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return $o(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Wh(this.serializer,c);r.set(l.getKey(),l)}return r})}getOverlaysForCollectionGroup(e,n,s,r){const i=Qn();let o;const a=IDBKeyRange.bound([this.userId,n,s],[this.userId,n,Number.POSITIVE_INFINITY],!0);return $o(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Wh(this.serializer,l);i.size()<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}we(e,n){return $o(e).put(function(s,r,i){const[o,a,c]=sv(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Wa(s.fe,i.mutation)}}(this.serializer,this.userId,n))}}function $o(t){return bt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(Ye(e.integerValue));else if("doubleValue"in e){const s=Ye(e.doubleValue);isNaN(s)?this.ye(n,13):(this.ye(n,15),qa(s)?n.pe(0):n.pe(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ye(n,20),typeof s=="string"?n.Ie(s):(n.Ie(`${s.seconds||""}`),n.pe(s.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(sr(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const s=e.geoPointValue;this.ye(n,45),n.pe(s.latitude||0),n.pe(s.longitude||0)}else"mapValue"in e?aI(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):z()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const s=e.fields||{};this.ye(n,55);for(const r of Object.keys(s))this.Te(r,n),this.me(s[r],n)}Pe(e,n){const s=e.values||[];this.ye(n,50);for(const r of s)this.me(r,n)}ve(e,n){this.ye(n,37),U.fromName(e).path.forEach(s=>{this.ye(n,60),this.be(s,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Dr.Ve=new Dr;function FN(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function av(t){const e=64-function(n){let s=0;for(let r=0;r<8;++r){const i=FN(255&n[r]);if(s+=i,i!==8)break}return s}(t);return Math.ceil(e/8)}class UN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.De(s.value),s=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.Ne(s.value),s=n.next();this.ke()}Me(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.De(s);else if(s<2048)this.De(960|s>>>6),this.De(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|s>>>12),this.De(128|63&s>>>6),this.De(128|63&s);else{const r=n.codePointAt(0);this.De(240|r>>>18),this.De(128|63&r>>>12),this.De(128|63&r>>>6),this.De(128|63&r)}}this.Ce()}$e(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.Ne(s);else if(s<2048)this.Ne(960|s>>>6),this.Ne(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|s>>>12),this.Ne(128|63&s>>>6),this.Ne(128|63&s);else{const r=n.codePointAt(0);this.Ne(240|r>>>18),this.Ne(128|63&r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r)}}this.ke()}Oe(e){const n=this.Fe(e),s=av(n);this.Be(1+s),this.buffer[this.position++]=255&s;for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=255&n[r]}Le(e){const n=this.Fe(e),s=av(n);this.Be(1+s),this.buffer[this.position++]=~(255&s);for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=~(255&n[r])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&n[0])!=0;n[0]^=s?255:128;for(let r=1;r<n.length;++r)n[r]^=s?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let s=2*this.buffer.length;s<n&&(s=n);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class $N{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class VN{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Vo{constructor(){this.je=new UN,this.ze=new $N(this.je),this.We=new VN(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s,r){this.indexId=e,this.documentKey=n,this.arrayValue=s,this.directionalValue=r}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(n);return s.set(this.directionalValue,0),n!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new Pr(this.indexId,this.documentKey,this.arrayValue,s)}}function Ns(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=cv(t.arrayValue,e.arrayValue),n!==0?n:(n=cv(t.directionalValue,e.directionalValue),n!==0?n:U.comparator(t.documentKey,e.documentKey)))}function cv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const s=t[n]-e[n];if(s!==0)return s}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const s=n;s.isInequality()?this.Ze=s:this.Xe.push(s)}}tn(e){Z(e.collectionGroup===this.collectionId);const n=Kd(e);if(n!==void 0&&!this.en(n))return!1;const s=Sr(e);let r=new Set,i=0,o=0;for(;i<s.length&&this.en(s[i]);++i)r=r.add(s[i].fieldPath.canonicalString());if(i===s.length)return!0;if(this.Ze!==void 0){if(!r.has(this.Ze.field.canonicalString())){const a=s[i];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++i}for(;i<s.length;++i){const a=s[i];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===s}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){var e,n;if(Z(t instanceof ge||t instanceof Ae),t instanceof ge){if(t instanceof mI){const r=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ge.create(t.field,"==",i)))||[];return Ae.create(r,"or")}return t}const s=t.filters.map(r=>YI(r));return Ae.create(s,t.op)}function qN(t){if(t.getFilters().length===0)return[];const e=af(YI(t));return Z(XI(e)),rf(e)||of(e)?[e]:e.getFilters()}function rf(t){return t instanceof ge}function of(t){return t instanceof Ae&&Ap(t)}function XI(t){return rf(t)||of(t)||function(e){if(e instanceof Ae&&Yd(e)){for(const n of e.getFilters())if(!rf(n)&&!of(n))return!1;return!0}return!1}(t)}function af(t){if(Z(t instanceof ge||t instanceof Ae),t instanceof ge)return t;if(t.filters.length===1)return af(t.filters[0]);const e=t.filters.map(s=>af(s));let n=Ae.create(e,t.op);return n=Yl(n),XI(n)?n:(Z(n instanceof Ae),Z(eo(n)),Z(n.filters.length>1),n.filters.reduce((s,r)=>Bp(s,r)))}function Bp(t,e){let n;return Z(t instanceof ge||t instanceof Ae),Z(e instanceof ge||e instanceof Ae),n=t instanceof ge?e instanceof ge?function(s,r){return Ae.create([s,r],"and")}(t,e):lv(t,e):e instanceof ge?lv(e,t):function(s,r){if(Z(s.filters.length>0&&r.filters.length>0),eo(s)&&eo(r))return dI(s,r.getFilters());const i=Yd(s)?s:r,o=Yd(s)?r:s,a=i.filters.map(c=>Bp(c,o));return Ae.create(a,"or")}(t,e),Yl(n)}function lv(t,e){if(eo(e))return dI(e,t.getFilters());{const n=e.filters.map(s=>Bp(t,s));return Ae.create(n,"or")}}function Yl(t){if(Z(t instanceof ge||t instanceof Ae),t instanceof ge)return t;const e=t.getFilters();if(e.length===1)return Yl(e[0]);if(uI(t))return t;const n=e.map(r=>Yl(r)),s=[];return n.forEach(r=>{r instanceof ge?s.push(r):r instanceof Ae&&(r.op===t.op?s.push(...r.filters):s.push(r))}),s.length===1?s[0]:Ae.create(s,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.rn=new qp}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(hn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class qp{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new je(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new je(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new Uint8Array(0);class zN{constructor(e,n){this.user=e,this.databaseId=n,this.on=new qp,this.un=new gr(s=>Zr(s),(s,r)=>yc(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const s=n.lastSegment(),r=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const i={collectionId:s,parent:Ht(r)};return uv(e).put(i)}return b.resolve()}getCollectionParents(e,n){const s=[],r=IDBKeyRange.bound([n,""],[Wb(n),""],!1,!0);return uv(e).j(r).next(i=>{for(const o of i){if(o.collectionId!==n)break;s.push(Wn(o.parent))}return s})}addFieldIndex(e,n){const s=Xc(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete r.indexId;const i=s.add(r);if(n.indexState){const o=qo(e);return i.next(a=>{o.put(rv(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const s=Xc(e),r=qo(e),i=Bo(e);return s.delete(n.indexId).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const s=Bo(e);let r=!0;const i=new Map;return b.forEach(this.cn(n),o=>this.an(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=de();const a=[];return b.forEach(i,(c,l)=>{var u;A("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`} to execute ${Zr(n)}`);const h=function(D,C){const H=Kd(C);if(H===void 0)return null;for(const ee of Gl(D,H.fieldPath))switch(ee.op){case"array-contains-any":return ee.value.arrayValue.values||[];case"array-contains":return[ee.value]}return null}(l,c),d=function(D,C){const H=new Map;for(const ee of Sr(C))for(const ae of Gl(D,ee.fieldPath))switch(ae.op){case"==":case"in":H.set(ee.fieldPath.canonicalString(),ae.value);break;case"not-in":case"!=":return H.set(ee.fieldPath.canonicalString(),ae.value),Array.from(H.values())}return null}(l,c),f=function(D,C){const H=[];let ee=!0;for(const ae of Sr(C)){const F=ae.kind===0?jy(D,ae.fieldPath,D.startAt):zy(D,ae.fieldPath,D.startAt);H.push(F.value),ee&&(ee=F.inclusive)}return new or(H,ee)}(l,c),m=function(D,C){const H=[];let ee=!0;for(const ae of Sr(C)){const F=ae.kind===0?zy(D,ae.fieldPath,D.endAt):jy(D,ae.fieldPath,D.endAt);H.push(F.value),ee&&(ee=F.inclusive)}return new or(H,ee)}(l,c),v=this.hn(c,l,f),_=this.hn(c,l,m),S=this.ln(c,l,d),N=this.fn(c.indexId,h,v,f.inclusive,_,m.inclusive,S);return b.forEach(N,D=>s.H(D,n.limit).next(C=>{C.forEach(H=>{const ee=U.fromSegments(H.documentKey);o.has(ee)||(o=o.add(ee),a.push(ee))})}))}).next(()=>a)}return b.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=qN(Ae.create(e.filters,"and")).map(s=>Jd(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,s,r,i,o,a){const c=(n!=null?n.length:1)*Math.max(s.length,i.length),l=c/(n!=null?n.length:1),u=[];for(let h=0;h<c;++h){const d=n?this.dn(n[h/l]):Yc,f=this.wn(e,d,s[h%l],r),m=this._n(e,d,i[h%l],o),v=a.map(_=>this.wn(e,d,_,!0));u.push(...this.createRange(f,m,v))}return u}wn(e,n,s,r){const i=new Pr(e,U.empty(),n,s);return r?i:i.Je()}_n(e,n,s,r){const i=new Pr(e,U.empty(),n,s);return r?i.Je():i}an(e,n){const s=new BN(n),r=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let s=2;const r=this.cn(n);return b.forEach(r,i=>this.an(e,i).next(o=>{o?s!==0&&o.fields.length<function(a){let c=new je(tt.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(i)&&(s=1):s=0})).next(()=>function(i){return i.limit!==null}(n)&&r.length>1&&s===2?1:s)}mn(e,n){const s=new Vo;for(const r of Sr(e)){const i=n.data.field(r.fieldPath);if(i==null)return null;const o=s.He(r.kind);Dr.Ve._e(i,o)}return s.Qe()}dn(e){const n=new Vo;return Dr.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const s=new Vo;return Dr.Ve._e(Jr(this.databaseId,n),s.He(function(r){const i=Sr(r);return i.length===0?0:i[i.length-1].kind}(e))),s.Qe()}ln(e,n,s){if(s===null)return[];let r=[];r.push(new Vo);let i=0;for(const o of Sr(e)){const a=s[i++];for(const c of r)if(this.yn(n,o.fieldPath)&&Ha(a))r=this.pn(r,o,a);else{const l=c.He(o.kind);Dr.Ve._e(a,l)}}return this.In(r)}hn(e,n,s){return this.ln(e,n,s.position)}In(e){const n=[];for(let s=0;s<e.length;++s)n[s]=e[s].Qe();return n}pn(e,n,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const c=new Vo;c.seed(a.Qe()),Dr.Ve._e(o,c.He(n.kind)),i.push(c)}return i}yn(e,n){return!!e.filters.find(s=>s instanceof ge&&s.field.isEqual(n)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,n){const s=Xc(e),r=qo(e);return(n?s.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):s.j()).next(i=>{const o=[];return b.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Hl(u.sequenceNumber,new hn(si(u.readTime),new U(Wn(u.documentKey)),u.largestBatchId)):Hl.empty(),d=l.fields.map(([f,m])=>new xR(tt.fromServerFormat(f),m));return new Qb(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:le(s.collectionGroup,r.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,s){const r=Xc(e),i=qo(e);return this.Tn(e).next(o=>r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,c=>i.put(rv(c.indexId,this.user,o,s)))))}updateIndexEntries(e,n){const s=new Map;return b.forEach(n,(r,i)=>{const o=s.get(r.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),b.forEach(a,c=>this.En(e,r,c).next(l=>{const u=this.An(i,c);return l.isEqual(u)?b.resolve():this.vn(e,i,c,l,u)}))))})}Rn(e,n,s,r){return Bo(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(s,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,s,r){return Bo(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(s,n.key),n.key.path.toArray()])}En(e,n,s){const r=Bo(e);let i=new je(Ns);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.gn(s,n)])},(o,a)=>{i=i.add(new Pr(s.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}An(e,n){let s=new je(Ns);const r=this.mn(n,e);if(r==null)return s;const i=Kd(n);if(i!=null){const o=e.data.field(i.fieldPath);if(Ha(o))for(const a of o.arrayValue.values||[])s=s.add(new Pr(n.indexId,e.key,this.dn(a),r))}else s=s.add(new Pr(n.indexId,e.key,Yc,r));return s}vn(e,n,s,r,i){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let m=Si(d),v=Si(f);for(;m||v;){let _=!1,S=!1;if(m&&v){const N=l(m,v);N<0?S=!0:N>0&&(_=!0)}else m!=null?S=!0:_=!0;_?(u(v),v=Si(f)):S?(h(m),m=Si(d)):(m=Si(d),v=Si(f))}}(r,i,Ns,a=>{o.push(this.Rn(e,n,s,a))},a=>{o.push(this.Pn(e,n,s,a))}),b.waitFor(o)}Tn(e){let n=1;return qo(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),n=r.sequenceNumber+1}).next(()=>n)}createRange(e,n,s){s=s.sort((o,a)=>Ns(o,a)).filter((o,a,c)=>!a||Ns(o,c[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=Ns(o,e),c=Ns(o,n);if(a===0)r[0]=e.Je();else if(a>0&&c<0)r.push(o),r.push(o.Je());else if(c>0)break}r.push(n);const i=[];for(let o=0;o<r.length;o+=2){if(this.bn(r[o],r[o+1]))return[];const a=[r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,Yc,[]],c=[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,Yc,[]];i.push(IDBKeyRange.bound(a,c))}return i}bn(e,n){return Ns(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(hv)}getMinOffset(e,n){return b.mapArray(this.cn(n),s=>this.an(e,s).next(r=>r||z())).next(hv)}}function uv(t){return bt(t,"collectionParents")}function Bo(t){return bt(t,"indexEntries")}function Xc(t){return bt(t,"indexConfiguration")}function qo(t){return bt(t,"indexState")}function hv(t){Z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let s=1;s<t.length;s++){const r=t[s].indexState.offset;xp(r,e)<0&&(e=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new hn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wt{constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t,e,n){const s=t.store("mutations"),r=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=s.X({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{Z(a===1)}));const l=[];for(const u of n.mutations){const h=tI(e,u.key.path,n.batchId);i.push(r.delete(h)),l.push(u.key)}return b.waitFor(i).next(()=>l)}function Xl(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw z();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(41943040,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);class Ju{constructor(e,n,s,r){this.userId=e,this.serializer=n,this.indexManager=s,this.referenceDelegate=r,this.Vn={}}static de(e,n,s,r){Z(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ju(i,n,s,r)}checkEmpty(e){let n=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ds(e).X({index:"userMutationsIndex",range:s},(r,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,s,r){const i=Di(e),o=Ds(e);return o.add({}).next(a=>{Z(typeof a=="number");const c=new Op(a,n,s,r),l=function(d,f,m){const v=m.baseMutations.map(S=>Wa(d.fe,S)),_=m.mutations.map(S=>Wa(d.fe,S));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:v,mutations:_}}(this.serializer,this.userId,c),u=[];let h=new je((d,f)=>le(d.canonicalString(),f.canonicalString()));for(const d of r){const f=tI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(f,DR))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),b.waitFor(u).next(()=>c)})}lookupMutationBatch(e,n){return Ds(e).get(n).next(s=>s?(Z(s.userId===this.userId),Nr(this.serializer,s)):null)}Sn(e,n){return this.Vn[n]?b.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(s=>{if(s){const r=s.keys();return this.Vn[n]=r,r}return null})}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return Ds(e).X({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(Z(a.batchId>=s),i=Nr(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Ds(e).X({index:"userMutationsIndex",range:n,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ds(e).j("userMutationsIndex",n).next(s=>s.map(r=>Nr(this.serializer,r)))}getAllMutationBatchesAffectingDocumentKey(e,n){const s=ll(this.userId,n.path),r=IDBKeyRange.lowerBound(s),i=[];return Di(e).X({range:r},(o,a,c)=>{const[l,u,h]=o,d=Wn(u);if(l===this.userId&&n.path.isEqual(d))return Ds(e).get(h).next(f=>{if(!f)throw z();Z(f.userId===this.userId),i.push(Nr(this.serializer,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new je(le);const r=[];return n.forEach(i=>{const o=ll(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Di(e).X({range:a},(l,u,h)=>{const[d,f,m]=l,v=Wn(f);d===this.userId&&i.path.isEqual(v)?s=s.add(m):h.done()});r.push(c)}),b.waitFor(r).next(()=>this.Dn(e,s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1,i=ll(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new je(le);return Di(e).X({range:o},(c,l,u)=>{const[h,d,f]=c,m=Wn(d);h===this.userId&&s.isPrefixOf(m)?m.length===r&&(a=a.add(f)):u.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const s=[],r=[];return n.forEach(i=>{r.push(Ds(e).get(i).next(o=>{if(o===null)throw z();Z(o.userId===this.userId),s.push(Nr(this.serializer,o))}))}),b.waitFor(r).next(()=>s)}removeMutationBatch(e,n){return JI(e.ht,this.userId,n).next(s=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),b.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return Di(e).X({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=Wn(i[1]);r.push(c)}else a.done()}).next(()=>{Z(r.length===0)})})}containsKey(e,n){return ZI(e,this.userId,n)}xn(e){return e0(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ZI(t,e,n){const s=ll(e,n.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Di(t).X({range:i,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===r&&(o=!0),l.done()}).next(()=>o)}function Ds(t){return bt(t,"mutations")}function Di(t){return bt(t,"documentMutations")}function e0(t){return bt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ri(0)}static Mn(){return new ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const s=new ri(n.highestTargetId);return n.highestTargetId=s.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>J.fromTimestamp(new Ge(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,s){return this.$n(e).next(r=>(r.highestListenSequenceNumber=n,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),n>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=n),this.On(e,r)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(s=>(s.targetCount+=1,this.Bn(n,s),this.On(e,s))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>xi(e).delete(n.targetId)).next(()=>this.$n(e)).next(s=>(Z(s.targetCount>0),s.targetCount-=1,this.On(e,s)))}removeTargets(e,n,s){let r=0;const i=[];return xi(e).X((o,a)=>{const c=na(a);c.sequenceNumber<=n&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>b.waitFor(i)).next(()=>r)}forEachTarget(e,n){return xi(e).X((s,r)=>{const i=na(r);n(i)})}$n(e){return fv(e).get("targetGlobalKey").next(n=>(Z(n!==null),n))}On(e,n){return fv(e).put("targetGlobalKey",n)}Fn(e,n){return xi(e).put(QI(this.serializer,n))}Bn(e,n){let s=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,s=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const s=Zr(n),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return xi(e).X({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const l=na(a);yc(n,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,n,s){const r=[],i=Us(e);return n.forEach(o=>{const a=Ht(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),b.waitFor(r)}removeMatchingKeys(e,n,s){const r=Us(e);return b.forEach(n,i=>{const o=Ht(i.path);return b.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,n){const s=Us(e),r=IDBKeyRange.bound([n],[n+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,n){const s=IDBKeyRange.bound([n],[n+1],!1,!0),r=Us(e);let i=de();return r.X({range:s,Y:!0},(o,a,c)=>{const l=Wn(o[1]),u=new U(l);i=i.add(u)}).next(()=>i)}containsKey(e,n){const s=Ht(n.path),r=IDBKeyRange.bound([s],[Wb(s)],!1,!0);let i=0;return Us(e).X({index:"documentTargetsIndex",Y:!0,range:r},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}le(e,n){return xi(e).get(n).next(s=>s?na(s):null)}}function xi(t){return bt(t,"targets")}function fv(t){return bt(t,"targetGlobal")}function Us(t){return bt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv([t,e],[n,s]){const r=le(t,n);return r===0?le(e,s):r}class KN{constructor(e){this.Ln=e,this.buffer=new je(pv),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();pv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GN{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mr(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await pr(n)}await this.Qn(3e5)})}}class WN{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Jt.ct);const s=new KN(n);return this.jn.forEachTarget(e,r=>s.Kn(r.sequenceNumber)).next(()=>this.jn.Wn(e,r=>s.Kn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.jn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(dv)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dv):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let s,r,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),Hd()<=_e.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}function QN(t,e){return new WN(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n){this.db=e,this.garbageCollector=QN(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}Jn(e){let n=0;return this.Wn(e,s=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(s,r)=>n(r))}addReference(e,n,s){return Jc(e,s)}removeReference(e,n,s){return Jc(e,s)}removeTargets(e,n,s){return this.db.getTargetCache().removeTargets(e,n,s)}markPotentiallyOrphaned(e,n){return Jc(e,n)}Xn(e,n){return function(s,r){let i=!1;return e0(s).Z(o=>ZI(s,o,r).next(a=>(a&&(i=!0),b.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Xn(e,o).next(l=>{if(!l)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,J.min()),Us(e).delete([0,Ht(o.path)])))});r.push(c)}}).next(()=>b.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,n){return Jc(e,n)}Yn(e,n){const s=Us(e);let r,i=Jt.ct;return s.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==Jt.ct&&n(new U(Wn(r)),i),i=l,r=c):i=Jt.ct}).next(()=>{i!==Jt.ct&&n(new U(Wn(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Jc(t,e){return Us(t).put(function(n,s){return{targetId:0,path:Ht(n.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.changes=new gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,s){return Er(e).put(s)}removeEntry(e,n,s){return Er(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ql(i),o[o.length-1]]}(n,s))}updateMetadata(e,n){return this.getMetadata(e).next(s=>(s.byteSize+=n,this.Zn(e,s)))}getEntry(e,n){let s=qe.newInvalidDocument(n);return Er(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(jo(n))},(r,i)=>{s=this.ts(n,i)}).next(()=>s)}es(e,n){let s={size:0,document:qe.newInvalidDocument(n)};return Er(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(jo(n))},(r,i)=>{s={document:this.ts(n,i),size:Xl(i)}}).next(()=>s)}getEntries(e,n){let s=en();return this.ns(e,n,(r,i)=>{const o=this.ts(r,i);s=s.insert(r,o)}).next(()=>s)}ss(e,n){let s=en(),r=new $e(U.comparator);return this.ns(e,n,(i,o)=>{const a=this.ts(i,o);s=s.insert(i,a),r=r.insert(i,Xl(o))}).next(()=>({documents:s,rs:r}))}ns(e,n,s){if(n.isEmpty())return b.resolve();let r=new je(yv);n.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(jo(r.first()),jo(r.last())),o=r.getIterator();let a=o.getNext();return Er(e).X({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=U.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&yv(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.G(jo(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,s,r){const i=n.path,o=[i.popLast().toArray(),i.lastSegment(),Ql(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Er(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=en();for(const u of c){const h=this.ts(U.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(_c(n,h)||r.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,s,r){let i=en();const o=gv(n,s),a=gv(n,hn.max());return Er(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.ts(U.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===r&&u.done()}).next(()=>i)}newChangeBuffer(e){return new JN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return mv(e).get("remoteDocumentGlobalKey").next(n=>(Z(!!n),n))}Zn(e,n){return mv(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const s=LN(this.serializer,n);if(!(s.isNoDocument()&&s.version.isEqual(J.min())))return s}return qe.newInvalidDocument(e)}}function n0(t){return new XN(t)}class JN extends t0{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new gr(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const n=[];let s=0,r=new je((i,o)=>le(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.us.get(i);if(n.push(this.os.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=nv(this.os.serializer,o);r=r.add(i.path.popLast());const l=Xl(c);s+=l-a.size,n.push(this.os.addEntry(e,i,c))}else if(s-=a.size,this.trackRemovals){const c=nv(this.os.serializer,o.convertToNoDocument(J.min()));n.push(this.os.addEntry(e,i,c))}}),r.forEach(i=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.os.updateMetadata(e,s)),b.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(s=>(this.us.set(n,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:s,rs:r})=>(r.forEach((i,o)=>{this.us.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function mv(t){return bt(t,"remoteDocumentGlobal")}function Er(t){return bt(t,"remoteDocumentsV14")}function jo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function gv(t,e){const n=e.documentKey.path.toArray();return[t,Ql(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function yv(t,e){const n=t.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<n.length-2&&i<s.length-2;++i)if(r=le(n[i],s[i]),r)return r;return r=le(n.length,s.length),r||(r=le(n[n.length-2],s[s.length-2]),r||le(n[n.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&pa(s.mutation,r,Zt.empty(),Ge.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,de()).next(()=>s))}getLocalViewOfDocuments(e,n,s=de()){const r=Qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ea();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Qn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,de()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=en();const o=fa(),a=fa();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Is)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),pa(u.mutation,l,u.mutation.getFieldMask(),Ge.now())):o.set(l.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new ZN(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fa();let r=new $e((o,a)=>o-a),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Zt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||de()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=II();u.forEach(d=>{if(!i.has(d)){const f=RI(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Np(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Qn());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,de())).next(u=>({batchId:a,changes:bI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(s=>{let r=ea();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ea();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new bs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,qe.newInvalidDocument(l)))});let o=ea();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&pa(l.mutation,c,Zt.empty(),Ge.now()),_c(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:st(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Vp(s.bundledQuery),readTime:st(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.overlays=new $e(U.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Qn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Qn(),i=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new $e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Qn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Mp(n,s));let i=this.ls.get(n);i===void 0&&(i=de(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.fs=new je(pt.ds),this.ws=new je(pt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new pt(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new pt(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new U(new we([])),s=new pt(n,e),r=new pt(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new U(new we([])),s=new pt(n,e),r=new pt(n,e+1);let i=de();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new pt(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class pt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return U.comparator(e.key,n.key)||le(e.As,n.As)}static _s(e,n){return le(e.As,n.As)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new je(pt.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Op(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new pt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new pt(n,0),r=new pt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new je(le);return n.forEach(r=>{const i=new pt(r,0),o=new pt(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),b.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;U.isDocumentKey(i)||(i=i.child(""));const o=new pt(new U(i),0);let a=new je(le);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Z(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return b.forEach(n.mutations,r=>{const i=new pt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new pt(n,0),r=this.Rs.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.Ds=e,this.docs=new $e(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let s=en();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():qe.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=en();const o=n.path,a=new U(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||xp(Xb(u),s)<=0||(r.has(u.key)||_c(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){z()}Cs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new rD(this)}getSize(e){return b.resolve(this.size)}}class rD extends t0{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.persistence=e,this.xs=new gr(n=>Zr(n),yc),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Ns=0,this.ks=new jp,this.targetCount=0,this.Ms=ri.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.$s={},this.overlays={},this.Os=new Jt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new iD(this),this.indexManager=new jN,this.remoteDocumentCache=function(s){return new sD(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new WI(n),this.qs=new eD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new nD(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){A("MemoryPersistence","Starting transaction:",e);const r=new oD(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return b.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class oD extends Zb{constructor(e){super(),this.currentSequenceNumber=e}}class Zu{constructor(e){this.persistence=e,this.Qs=new jp,this.js=null}static zs(e){return new Zu(e)}get Ws(){if(this.js)return this.js;throw z()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,s=>{const r=U.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.serializer=e}O(e,n,s,r){const i=new Ku("createOrUpgrade",n);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Py,{unique:!0}),a.createObjectStore("documentMutations")}(e),vv(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),vv(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Py,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return b.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Ys(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),s<7&&r>=7&&(o=o.next(()=>this.Zs(i))),s<8&&r>=8&&(o=o.next(()=>this.ti(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.ei(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:zR});c.createIndex("collectionPathOverlayIndex",HR,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",KR,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:PR});c.createIndex("documentKeyIndex",OR),c.createIndex("collectionGroupIndex",LR)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.si(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:VR}).createIndex("sequenceNumberIndex",BR,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:qR}).createIndex("documentKeyIndex",jR,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((s,r)=>{n+=Xl(r)}).next(()=>{const s={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Ys(e){const n=e.store("mutationQueues"),s=e.store("mutations");return n.j().next(r=>b.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.j("userMutationsIndex",o).next(a=>b.forEach(a,c=>{Z(c.userId===i.userId);const l=Nr(this.serializer,c);return JI(e,i.userId,l).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.X((o,a)=>{const c=new we(o),l=function(u){return[0,Ht(u)]}(c);i.push(n.get(l).next(u=>u?b.resolve():(h=>n.put({targetId:0,path:Ht(h),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>b.waitFor(i))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:$R});const s=n.store("collectionParents"),r=new qp,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:Ht(c)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new we(o);return i(c.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,c],l)=>{const u=Wn(a);return i(u.popLast())}))}ei(e){const n=e.store("targets");return n.X((s,r)=>{const i=na(r),o=QI(this.serializer,i);return n.put(o)})}ni(e,n){const s=n.store("remoteDocuments"),r=[];return s.X((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(l=o,l.document?new U(we.fromString(l.document.name).popFirst(5)):l.noDocument?U.fromSegments(l.noDocument.path):l.unknownDocument?U.fromSegments(l.unknownDocument.path):z()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(u))}).next(()=>b.waitFor(r))}si(e,n){const s=n.store("mutations"),r=n0(this.serializer),i=new r0(Zu.zs,this.serializer.fe);return s.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:de();Nr(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),b.forEach(a,(c,l)=>{const u=new mt(l),h=Xu.de(this.serializer,u),d=i.getIndexManager(u),f=Ju.de(u,this.serializer,d,i.referenceDelegate);return new s0(r,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Gd(n,Jt.ct),c).next()})})}}function vv(t){t.createObjectStore("targetDocuments",{keyPath:FR}).createIndex("documentTargetsIndex",UR,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",MR,{unique:!0}),t.createObjectStore("targetGlobal")}const Qh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class zp{constructor(e,n,s,r,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=s,this.ii=i,this.window=o,this.document=a,this.ri=l,this.oi=u,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!zp.D())throw new k(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new YN(this,r),this.di=n+"main",this.serializer=new WI(c),this.wi=new Sn(this.di,this.ui,new aD(this.serializer)),this.Bs=new HN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=n0(this.serializer),this.qs=new MN,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,u===!1&&et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(I.FAILED_PRECONDITION,Qh);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Jt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(mr(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return zo(e).get("owner").next(n=>b.resolve(this.Ri(n)))}Pi(e){return Zc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const s=bt(n,"clientMetadata");return s.j().next(r=>{const i=this.Si(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return b.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?b.resolve(!0):zo(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new k(I.FAILED_PRECONDITION,Qh);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zc(e).j().next(s=>this.Si(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Gd(e,Jt.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(s=>this.Vi(s.updateTimeMs,n)&&!this.Ci(s.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Zc(e).j().next(n=>this.Si(n,18e5).map(s=>s.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Ju.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zN(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Xu.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,s){A("IndexedDbPersistence","Starting transaction:",e);const r=n==="readonly"?"readonly":"readwrite",i=(o=this.ui)===15?WR:o===14?rI:o===13?sI:o===12?GR:o===11?nI:void z();var o;let a;return this.wi.runTransaction(e,r,i,c=>(a=new Gd(c,this.Os?this.Os.next():Jt.ct),n==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new k(I.FAILED_PRECONDITION,Jb);return s(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return zo(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new k(I.FAILED_PRECONDITION,Qh)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return zo(e).put("owner",n)}static D(){return Sn.D()}Ai(e){const n=zo(e);return n.get("owner").next(s=>this.Ri(s)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Vi(e,n){const s=Date.now();return!(e<s-n)&&(!(e>s)||(et(`Detected an update time that is in the future: ${e} > ${s}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;Mk()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const s=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return et("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){et("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function zo(t){return bt(t,"owner")}function Zc(t){return bt(t,"clientMetadata")}function Hp(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=de(),r=de();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Kp(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Hy(n))return b.resolve(null);let s=nn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Wl(n,null,"F"),s=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=de(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Wl(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return Hy(n)||r.isEqual(J.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Hd()<=_e.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ef(n)),this.Wi(e,o,n,Yb(r,-1)))})}ji(e,n){let s=new je(_I(e));return n.forEach((r,i)=>{_c(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Hd()<=_e.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",ef(n)),this.Ui.getDocumentsMatchingQuery(e,n,hn.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new $e(le),this.Yi=new gr(i=>Zr(i),yc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s0(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function o0(t,e,n,s){return new cD(t,e,n,s)}async function a0(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=de();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function lD(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const v=c.docVersions.get(f);Z(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=de();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function c0(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function uD(t,e){const n=B(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(dt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(m,v,_){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,u)&&a.push(n.Bs.updateTargetData(i,f))});let c=en(),l=de();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(l0(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(J.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function l0(t,e,n){let s=de(),r=de();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=en();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function hD(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ro(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new cs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function io(t,e,n){const s=B(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!mr(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Jl(t,e,n){const s=B(t);let r=J.min(),i=de();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=B(a),h=u.Yi.get(l);return h!==void 0?b.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,nn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:de())).next(a=>(d0(s,vI(e),a),{documents:a,ir:i})))}function u0(t,e){const n=B(t),s=B(n.Bs),r=n.Ji.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",i=>s.le(i,e).next(o=>o?o.target:null))}function h0(t,e){const n=B(t),s=n.Xi.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",r=>n.Zi.getAllFromCollectionGroup(r,e,Yb(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(d0(n,e,r),r))}function d0(t,e,n){let s=t.Xi.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}async function dD(t,e,n,s){const r=B(t);let i=de(),o=en();for(const l of n){const u=e.rr(l.metadata.name);l.document&&(i=i.add(u));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(u,h)}const a=r.Zi.newChangeBuffer({trackRemovals:!0}),c=await ro(r,function(l){return nn(bo(we.fromString(`__bundle__/docs/${l}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",l=>l0(l,a,o).next(u=>(a.apply(l),u)).next(u=>r.Bs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>r.Bs.addMatchingKeys(l,i,c.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(l,u.nr,u.sr)).next(()=>u.nr)))}async function fD(t,e,n=de()){const s=await ro(t,nn(Vp(e.bundledQuery))),r=B(t);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=st(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.qs.saveNamedQuery(i,e);const a=s.withResumeToken(dt.EMPTY_BYTE_STRING,o);return r.Ji=r.Ji.insert(a.targetId,a),r.Bs.updateTargetData(i,a).next(()=>r.Bs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Bs.addMatchingKeys(i,n,s.targetId)).next(()=>r.qs.saveNamedQuery(i,e))})}function _v(t,e){return`firestore_clients_${t}_${e}`}function wv(t,e,n){let s=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function Yh(t,e){return`firestore_targets_${t}_${e}`}class Zl{constructor(e,n,s,r){this.user=e,this.batchId=n,this.state=s,this.error=r}static ar(e,n,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new k(r.error.code,r.error.message))),o?new Zl(e,n,r.state,i):(et("SharedClientState",`Failed to parse mutation state for ID '${n}': ${s}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ma{constructor(e,n,s){this.targetId=e,this.state=n,this.error=s}static ar(e,n){const s=JSON.parse(n);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new k(s.error.code,s.error.message))),i?new ma(e,s.state,r):(et("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class eu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const s=JSON.parse(n);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=Dp();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=eI(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new eu(e,i):(et("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Gp{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Gp(n.clientId,n.onlineState):(et("SharedClientState",`Failed to parse online state: ${e}`),null)}}class cf{constructor(){this.activeTargetIds=Dp()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xh{constructor(e,n,s,r,i){this.window=e,this.ii=n,this.persistenceKey=s,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new $e(le),this.started=!1,this.yr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=_v(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new cf),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const s of e){if(s===this.wr)continue;const r=this.getItem(_v(this.persistenceKey,s));if(r){const i=eu.ar(s,r);i&&(this.gr=this.gr.insert(i.clientId,i))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const s=this.br(n);s&&this.Vr(s)}for(const s of this.yr)this.mr(s);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((s,r)=>{r.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,s){this.Dr(e,n,s),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Yh(this.persistenceKey,e));if(s){const r=ma.ar(e,s);r&&(n=r.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Yh(this.persistenceKey,e))}updateQueryState(e,n,s){this.kr(e,n,s)}handleUserChange(e,n,s){n.forEach(r=>{this.Cr(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void et("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const s=this.Or(n.key);return this.Fr(s,null)}{const s=this.Br(n.key,n.newValue);if(s)return this.Fr(s.clientId,s)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const s=this.Lr(n.key,n.newValue);if(s)return this.qr(s)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const s=this.Ur(n.key,n.newValue);if(s)return this.Kr(s)}}else if(n.key===this.vr){if(n.newValue!==null){const s=this.br(n.newValue);if(s)return this.Vr(s)}}else if(n.key===this.Ir){const s=function(r){let i=Jt.ct;if(r!=null)try{const o=JSON.parse(r);Z(typeof o=="number"),i=o}catch(o){et("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(n.newValue);s!==Jt.ct&&this.sequenceNumberHandler(s)}else if(n.key===this.Rr){const s=this.Gr(n.newValue);await Promise.all(s.map(r=>this.syncEngine.Qr(r)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,s){const r=new Zl(this.currentUser,e,n,s),i=wv(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const n=wv(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,s){const r=Yh(this.persistenceKey,e),i=new ma(e,n,s);this.setItem(r,i.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const s=this.Or(e);return eu.ar(s,n)}Lr(e,n){const s=this.Er.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return Zl.ar(new mt(i),r,n)}Ur(e,n){const s=this.Ar.exec(e),r=Number(s[1]);return ma.ar(r,n)}br(e){return Gp.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const s=n?this.gr.insert(e,n):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=s})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Dp();return e.forEach((s,r)=>{n=n.unionWith(r.activeTargetIds)}),n}}class f0{constructor(){this.Hr=new cf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new cf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el=null;function Jh(){return el===null?el=268435456+Math.round(2147483648*Math.random()):el++,"0x"+el.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class yD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=Jh(),a=this.To(e,n);A("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(A("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Pn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+wo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=mD[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Jh();return new Promise((o,a)=>{const c=new fR;c.setWithCredentials(!0),c.listenOnce(uR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Gh.NO_ERROR:const u=c.getResponseJson();A(Pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Gh.TIMEOUT:A(Pt,`RPC '${e}' ${i} timed out`),a(new k(I.DEADLINE_EXCEEDED,"Request time out"));break;case Gh.HTTP_ERROR:const h=c.getStatus();if(A(Pt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(f.status);a(new k(m,f.message))}else a(new k(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new k(I.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{A(Pt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);A(Pt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Jh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cR(),a=lR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new dR({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");A(Pt,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const m=new gD({ro:_=>{f?A(Pt,`Not sending because RPC '${e}' stream ${r} is closed:`,_):(d||(A(Pt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),A(Pt,`RPC '${e}' stream ${r} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,S,N)=>{_.listen(S,D=>{try{N(D)}catch(C){setTimeout(()=>{throw C},0)}})};return v(h,Gc.EventType.OPEN,()=>{f||A(Pt,`RPC '${e}' stream ${r} transport opened.`)}),v(h,Gc.EventType.CLOSE,()=>{f||(f=!0,A(Pt,`RPC '${e}' stream ${r} transport closed`),m.wo())}),v(h,Gc.EventType.ERROR,_=>{f||(f=!0,Pn(Pt,`RPC '${e}' stream ${r} transport errored:`,_),m.wo(new k(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,Gc.EventType.MESSAGE,_=>{var S;if(!f){const N=_.data[0];Z(!!N);const D=N,C=D.error||((S=D[0])===null||S===void 0?void 0:S.error);if(C){A(Pt,`RPC '${e}' stream ${r} received error:`,C);const H=C.status;let ee=function(F){const W=ot[F];if(W!==void 0)return PI(W)}(H),ae=C.message;ee===void 0&&(ee=I.INTERNAL,ae="Unknown error status: "+H+" with message "+C.message),f=!0,m.wo(new k(ee,ae)),h.close()}else A(Pt,`RPC '${e}' stream ${r} received:`,N),m._o(N)}}),v(a,hR.STAT_EVENT,_=>{_.stat===Ay.PROXY?A(Pt,`RPC '${e}' stream ${r} detected buffering proxy`):_.stat===Ay.NOPROXY&&A(Pt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return typeof window<"u"?window:null}function pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t){return new SN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Wp(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(et(n.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new k(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vD extends m0{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=CN(this.serializer,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?st(i.readTime):J.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Ga(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Kl(a)?{documents:qI(r,a)}:{query:jI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=FI(r,i.resumeToken);const c=tf(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(J.min())>0){o.readTime=so(r,i.snapshotVersion.toTimestamp());const c=tf(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=RN(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Ga(this.serializer),n.removeTarget=e,this.Wo(n)}}class _D extends m0{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=AN(e.writeResults,e.commitTime),s=st(e.commitTime);return this.listener.cu(s,n)}return Z(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ga(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Wa(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new k(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new k(I.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(I.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class bD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(et(n),this.mu=!1):A("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{yr(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=B(a);c.vu.add(4),await To(c),c.bu.set("Unknown"),c.vu.delete(4),await Tc(c)}(this))})}),this.bu=new bD(s,r)}}async function Tc(t){if(yr(t))for(const e of t.Ru)await e(!0)}async function To(t){for(const e of t.Ru)await e(!1)}function eh(t,e){const n=B(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Xp(n)?Yp(n):xo(n).Ko()&&Qp(n,e))}function Qa(t,e){const n=B(t),s=xo(n);n.Au.delete(e),s.Ko()&&g0(n,e),n.Au.size===0&&(s.Ko()?s.jo():yr(n)&&n.bu.set("Unknown"))}function Qp(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xo(t).su(e)}function g0(t,e){t.Vu.qt(e),xo(t).iu(e)}function Yp(t){t.Vu=new bN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),xo(t).start(),t.bu.gu()}function Xp(t){return yr(t)&&!xo(t).Uo()&&t.Au.size>0}function yr(t){return B(t).vu.size===0}function y0(t){t.Vu=void 0}async function ED(t){t.Au.forEach((e,n)=>{Qp(t,e)})}async function TD(t,e){y0(t),Xp(t)?(t.bu.Iu(e),Yp(t)):t.bu.set("Unknown")}async function SD(t,e,n){if(t.bu.set("Online"),e instanceof MI&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await tu(t,s)}else if(e instanceof fl?t.Vu.Ht(e):e instanceof LI?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(J.min()))try{const s=await c0(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(dt.EMPTY_BYTE_STRING,l.snapshotVersion)),g0(r,a);const u=new cs(l.target,a,c,l.sequenceNumber);Qp(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){A("RemoteStore","Failed to raise snapshot:",s),await tu(t,s)}}async function tu(t,e,n){if(!mr(e))throw e;t.vu.add(1),await To(t),t.bu.set("Offline"),n||(n=()=>c0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Tc(t)})}function v0(t,e){return e().catch(n=>tu(t,n,e))}async function So(t){const e=B(t),n=ar(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;xD(e);)try{const r=await hD(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,kD(e,r)}catch(r){await tu(e,r)}_0(e)&&w0(e)}function xD(t){return yr(t)&&t.Eu.length<10}function kD(t,e){t.Eu.push(e);const n=ar(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function _0(t){return yr(t)&&!ar(t).Uo()&&t.Eu.length>0}function w0(t){ar(t).start()}async function CD(t){ar(t).hu()}async function AD(t){const e=ar(t);for(const n of t.Eu)e.uu(n.mutations)}async function RD(t,e,n){const s=t.Eu.shift(),r=Lp.from(s,e,n);await v0(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await So(t)}async function ND(t,e){e&&ar(t).ou&&await async function(n,s){if(r=s.code,DI(r)&&r!==I.ABORTED){const i=n.Eu.shift();ar(n).Qo(),await v0(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await So(n)}var r}(t,e),_0(t)&&w0(t)}async function Iv(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const s=yr(n);n.vu.add(3),await To(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Tc(n)}async function lf(t,e){const n=B(t);e?(n.vu.delete(2),await Tc(n)):e||(n.vu.add(2),await To(n),n.bu.set("Unknown"))}function xo(t){return t.Su||(t.Su=function(e,n,s){const r=B(e);return r.fu(),new vD(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:ED.bind(null,t),ao:TD.bind(null,t),nu:SD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Xp(t)?Yp(t):t.bu.set("Unknown")):(await t.Su.stop(),y0(t))})),t.Su}function ar(t){return t.Du||(t.Du=function(e,n,s){const r=B(e);return r.fu(),new _D(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:CD.bind(null,t),ao:ND.bind(null,t),au:AD.bind(null,t),cu:RD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await So(t)):(await t.Du.stop(),t.Eu.length>0&&(A("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Jp(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ko(t,e){if(et("AsyncQueue",`${e}: ${t}`),mr(t))return new k(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||U.comparator(n.key,s.key):(n,s)=>U.comparator(n.key,s.key),this.keyedMap=ea(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new qi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.Cu=new $e(U.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):z():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class oo{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,qi.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.Nu=void 0,this.listeners=[]}}class PD{constructor(){this.queries=new gr(e=>yI(e),vc),this.onlineState="Unknown",this.ku=new Set}}async function Zp(t,e){const n=B(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new DD),r)try{i.Nu=await n.onListen(s)}catch(o){const a=ko(o,`Initialization of query '${ef(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&tm(n)}async function em(t,e){const n=B(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function OD(t,e){const n=B(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&tm(n)}function LD(t,e,n){const s=B(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function tm(t){t.ku.forEach(e=>{e.next()})}class nm{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new oo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.serializer=e}rr(e){return Jn(this.serializer,e)}ur(e){return e.metadata.exists?BI(this.serializer,e.document,!1):qe.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return st(e)}}class FD{constructor(e,n,s){this.ju=e,this.localStore=n,this.serializer=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=b0(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const s=we.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,s=new Tv(this.serializer);for(const r of e)if(r.metadata.queries){const i=s.rr(r.metadata.name);for(const o of r.metadata.queries){const a=(n.get(o)||de()).add(i);n.set(o,a)}}return n}async complete(){const e=await dD(this.localStore,new Tv(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const s of this.queries)await fD(this.localStore,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function b0(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.key=e}}class E0{constructor(e){this.key=e}}class T0{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=de(),this.mutatedKeys=de(),this.tc=_I(e),this.ec=new qi(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Ev,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=_c(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?m!==v&&(s.track({type:3,doc:f}),_=!0):this.rc(d,f)||(s.track({type:2,doc:f}),_=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),_=!0):d&&!f&&(s.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new oo(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ev,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=de(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new E0(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new I0(s))}),n}hc(e){this.Yu=e.ir,this.Zu=de();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return oo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class UD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class $D{constructor(e){this.key=e,this.fc=!1}}class VD{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new gr(a=>yI(a),vc),this._c=new Map,this.mc=new Set,this.gc=new $e(U.comparator),this.yc=new Map,this.Ic=new jp,this.Tc={},this.Ec=new Map,this.Ac=ri.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function BD(t,e){const n=am(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await ro(n.localStore,nn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await sm(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&eh(n.remoteStore,o)}return r}async function sm(t,e,n,s,r){t.Rc=(h,d,f)=>async function(m,v,_,S){let N=v.view.sc(_);N.zi&&(N=await Jl(m.localStore,v.query,!1).then(({documents:H})=>v.view.sc(H,N)));const D=S&&S.targetChanges.get(v.targetId),C=v.view.applyChanges(N,m.isPrimaryClient,D);return uf(m,v.targetId,C.cc),C.snapshot}(t,h,d,f);const i=await Jl(t.localStore,e,!0),o=new T0(e,i.ir),a=o.sc(i.documents),c=Ic.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);uf(t,n,l.cc);const u=new UD(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function qD(t,e){const n=B(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!vc(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await io(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Qa(n.remoteStore,s.targetId),ao(n,s.targetId)}).catch(pr)):(ao(n,s.targetId),await io(n.localStore,s.targetId,!0))}async function jD(t,e,n){const s=cm(t);try{const r=await function(i,o){const a=B(i),c=Ge.now(),l=o.reduce((d,f)=>d.add(f.key),de());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=en(),m=de();return a.Zi.getEntries(d,l).next(v=>{f=v,f.forEach((_,S)=>{S.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{u=v;const _=[];for(const S of o){const N=vN(S,u.get(S.key).overlayedDocument);N!=null&&_.push(new Is(S.key,N,cI(N.value.mapValue),Ke.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:bI(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new $e(le)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Es(s,r.changes),await So(s.remoteStore)}catch(r){const i=ko(r,"Failed to persist write");n.reject(i)}}async function S0(t,e){const n=B(t);try{const s=await uD(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(Z(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?Z(o.fc):r.removedDocuments.size>0&&(Z(o.fc),o.fc=!1))}),await Es(n,s,e)}catch(s){await pr(s)}}function Sv(t,e,n){const s=B(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=B(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&tm(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zD(t,e,n){const s=B(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new $e(U.comparator);o=o.insert(i,qe.newNoDocument(i,J.min()));const a=de().add(i),c=new bc(J.min(),new Map,new $e(le),o,a);await S0(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),om(s)}else await io(s.localStore,e,!1).then(()=>ao(s,e,n)).catch(pr)}async function HD(t,e){const n=B(t),s=e.batch.batchId;try{const r=await lD(n.localStore,e);im(n,s,null),rm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Es(n,r)}catch(r){await pr(r)}}async function KD(t,e,n){const s=B(t);try{const r=await function(i,o){const a=B(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Z(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);im(s,e,n),rm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Es(s,r)}catch(r){await pr(r)}}async function GD(t,e){const n=B(t);yr(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=B(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(s===-1)return void e.resolve();const r=n.Ec.get(s)||[];r.push(e),n.Ec.set(s,r)}catch(s){const r=ko(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function rm(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function im(t,e,n){const s=B(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function ao(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||x0(t,s)})}function x0(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Qa(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),om(t))}function uf(t,e,n){for(const s of n)s instanceof I0?(t.Ic.addReference(s.key,e),WD(t,s)):s instanceof E0?(A("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||x0(t,s.key)):z()}function WD(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(A("SyncEngine","New document in limbo: "+n),t.mc.add(s),om(t))}function om(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new U(we.fromString(e)),s=t.Ac.next();t.yc.set(s,new $D(n)),t.gc=t.gc.insert(n,s),eh(t.remoteStore,new cs(nn(bo(n.path)),s,"TargetPurposeLimboResolution",Jt.ct))}}async function Es(t,e,n){const s=B(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Kp.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=B(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!mr(u))throw u;A("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,m)}}}(s.localStore,i))}async function QD(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const s=await a0(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new k(I.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Es(n,s.er)}}function YD(t,e){const n=B(t),s=n.yc.get(e);if(s&&s.fc)return de().add(s.key);{let r=de();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}async function XD(t,e){const n=B(t),s=await Jl(n.localStore,e.query,!0),r=e.view.hc(s);return n.isPrimaryClient&&uf(n,e.targetId,r.cc),r}async function JD(t,e){const n=B(t);return h0(n.localStore,e).then(s=>Es(n,s))}async function ZD(t,e,n,s){const r=B(t),i=await function(o,a){const c=B(o),l=B(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Sn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):b.resolve(null)))}(r.localStore,e);i!==null?(n==="pending"?await So(r.remoteStore):n==="acknowledged"||n==="rejected"?(im(r,e,s||null),rm(r,e),function(o,a){B(B(o).mutationQueue).Cn(a)}(r.localStore,e)):z(),await Es(r,i)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function eP(t,e){const n=B(t);if(am(n),cm(n),e===!0&&n.vc!==!0){const s=n.sharedClientState.getAllActiveQueryTargets(),r=await xv(n,s.toArray());n.vc=!0,await lf(n.remoteStore,!0);for(const i of r)eh(n.remoteStore,i)}else if(e===!1&&n.vc!==!1){const s=[];let r=Promise.resolve();n._c.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(ao(n,o),io(n.localStore,o,!0))),Qa(n.remoteStore,o)}),await r,await xv(n,s),function(i){const o=B(i);o.yc.forEach((a,c)=>{Qa(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new $e(U.comparator)}(n),n.vc=!1,await lf(n.remoteStore,!1)}}async function xv(t,e,n){const s=B(t),r=[],i=[];for(const o of e){let a;const c=s._c.get(o);if(c&&c.length!==0){a=await ro(s.localStore,nn(c[0]));for(const l of c){const u=s.wc.get(l),h=await XD(s,u);h.snapshot&&i.push(h.snapshot)}}else{const l=await u0(s.localStore,o);a=await ro(s.localStore,l),await sm(s,k0(l),o,!1,a.resumeToken)}r.push(a)}return s.dc.nu(i),r}function k0(t){return gI(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function tP(t){const e=B(t);return B(B(e.localStore).persistence).$i()}async function nP(t,e,n,s){const r=B(t);if(r.vc)return void A("SyncEngine","Ignoring unexpected query state notification.");const i=r._c.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await h0(r.localStore,vI(i[0])),a=bc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",dt.EMPTY_BYTE_STRING);await Es(r,o,a);break}case"rejected":await io(r.localStore,e,!0),ao(r,e,s);break;default:z()}}async function sP(t,e,n){const s=am(t);if(s.vc){for(const r of e){if(s._c.has(r)){A("SyncEngine","Adding an already active target "+r);continue}const i=await u0(s.localStore,r),o=await ro(s.localStore,i);await sm(s,k0(i),o.targetId,!1,o.resumeToken),eh(s.remoteStore,o)}for(const r of n)s._c.has(r)&&await io(s.localStore,r,!1).then(()=>{Qa(s.remoteStore,r),ao(s,r)}).catch(pr)}}function am(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=S0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zD.bind(null,e),e.dc.nu=OD.bind(null,e.eventManager),e.dc.Pc=LD.bind(null,e.eventManager),e}function cm(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KD.bind(null,e),e}function rP(t,e,n){const s=B(t);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(h,d){const f=B(h),m=st(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.qs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(m)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(b0(a));const c=new FD(a,r.localStore,i.serializer);let l=await i.bc();for(;l;){const h=await c.zu(l);h&&o._updateProgress(h),l=await i.bc()}const u=await c.complete();return await Es(r,u.Ju,void 0),await function(h,d){const f=B(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.qs.saveBundleMetadata(m,d))}(r.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Hu)}catch(a){return Pn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,n).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class hf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return o0(this.persistence,new i0,e.initialUser,this.serializer)}createPersistence(e){return new r0(Zu.zs,this.serializer)}createSharedClientState(e){return new f0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class C0 extends hf{constructor(e,n,s){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await cm(this.Vc.syncEngine),await So(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return o0(this.persistence,new i0,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const s=this.persistence.referenceDelegate.garbageCollector;return new GN(s,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const s=new RR(n,this.persistence);return new AR(e.asyncQueue,s)}createPersistence(e){const n=Hp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new zp(this.synchronizeTabs,n,e.clientId,s,e.asyncQueue,p0(),pl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new f0}}class iP extends C0{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof Xh&&(this.sharedClientState.syncEngine={jr:ZD.bind(null,n),zr:nP.bind(null,n),Wr:sP.bind(null,n),$i:tP.bind(null,n),Qr:JD.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async s=>{await eP(this.Vc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=p0();if(!Xh.D(n))throw new k(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Hp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Xh(n,e.asyncQueue,s,e.clientId,e.initialUser)}}class lm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=QD.bind(null,this.syncEngine),await lf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new PD}createDatastore(e){const n=Ec(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new yD(r));var r;return function(i,o,a,c){return new wD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Sv(this.syncEngine,a,0),o=bv.D()?new bv:new pD,new ID(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new VD(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);A("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await To(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const s={value:t.slice(n,n+e),done:!1};return n+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new vt,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(s=>{s&&s.Qu()?this.metadata.resolve(s.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.Gu)}`))},s=>this.metadata.reject(s))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),s=Number(n);isNaN(s)&&this.Mc(`length string (${n}) is not valid number`);const r=await this.$c(s);return new MD(JSON.parse(r),e.length+s)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new k(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,r){const i=B(s),o=Ga(i.serializer)+"/documents",a={documents:r.map(h=>Ka(i.serializer,h))},c=await i.vo("BatchGetDocuments",o,a,r.length),l=new Map;c.forEach(h=>{const d=kN(i.serializer,h);l.set(d.key.toString(),d)});const u=[];return r.forEach(h=>{const d=l.get(h.toString());Z(!!d),u.push(d)}),u}(this.datastore,e);return n.forEach(s=>this.recordVersion(s)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Eo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,s)=>{const r=U.fromPath(s);this.mutations.push(new Pp(r,this.precondition(r)))}),await async function(n,s){const r=B(n),i=Ga(r.serializer)+"/documents",o={writes:s.map(a=>Wa(r.serializer,a))};await r.Io("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw z();n=J.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new k(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?Ke.exists(!1):Ke.updateTime(n):Ke.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new k(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ke.updateTime(n)}return Ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,s,r,i){this.asyncQueue=e,this.datastore=n,this.options=s,this.updateFunction=r,this.deferred=i,this.Bc=s.maxAttempts,this.qo=new Wp(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new aP(this.datastore),n=this.qc(e);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Uc(r)}))}).catch(s=>{this.Uc(s)})})}qc(e){try{const n=this.updateFunction(e);return!gc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!DI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=mt.UNAUTHENTICATED,this.clientId=Gb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{A("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(A("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ko(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ml(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await a0(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function df(t,e){t.asyncQueue.verifyOperationInProgress();const n=await um(t);A("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Iv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Iv(e.remoteStore,i)),t._onlineComponents=e}function A0(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function um(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await ml(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!A0(n))throw n;Pn("Error using user provided cache. Falling back to memory cache: "+n),await ml(t,new hf)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await ml(t,new hf);return t._offlineComponents}async function nh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await df(t,t._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await df(t,new lm))),t._onlineComponents}function R0(t){return um(t).then(e=>e.persistence)}function hm(t){return um(t).then(e=>e.localStore)}function N0(t){return nh(t).then(e=>e.remoteStore)}function dm(t){return nh(t).then(e=>e.syncEngine)}function uP(t){return nh(t).then(e=>e.datastore)}async function co(t){const e=await nh(t),n=e.eventManager;return n.onListen=BD.bind(null,e.syncEngine),n.onUnlisten=qD.bind(null,e.syncEngine),n}function hP(t){return t.asyncQueue.enqueue(async()=>{const e=await R0(t),n=await N0(t);return e.setNetworkEnabled(!0),function(s){const r=B(s);return r.vu.delete(0),Tc(r)}(n)})}function dP(t){return t.asyncQueue.enqueue(async()=>{const e=await R0(t),n=await N0(t);return e.setNetworkEnabled(!1),async function(s){const r=B(s);r.vu.add(0),await To(r),r.bu.set("Offline")}(n)})}function fP(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const l=B(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new k(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=ko(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await hm(t),e,n)),n.promise}function D0(t,e,n={}){const s=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new th({next:h=>{i.enqueueAndForget(()=>em(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new k(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new k(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new nm(bo(o.path),l,{includeMetadataChanges:!0,Ku:!0});return Zp(r,u)}(await co(t),t.asyncQueue,e,n,s)),s.promise}function pP(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await Jl(s,r,!0),a=new T0(r,o.ir),c=a.sc(o.documents),l=a.applyChanges(c,!1);i.resolve(l.snapshot)}catch(o){const a=ko(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await hm(t),e,n)),n.promise}function P0(t,e,n={}){const s=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new th({next:h=>{i.enqueueAndForget(()=>em(r,u)),h.fromCache&&a.source==="server"?c.reject(new k(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new nm(o,l,{includeMetadataChanges:!0,Ku:!0});return Zp(r,u)}(await co(t),t.asyncQueue,e,n,s)),s.promise}function mP(t,e){const n=new th(e);return t.asyncQueue.enqueueAndForget(async()=>function(s,r){B(s).ku.add(r),r.next()}(await co(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(s,r){B(s).ku.delete(r)}(await co(t),n))}}function gP(t,e,n,s){const r=function(i,o){let a;return a=typeof i=="string"?OI().encode(i):i,function(c,l){return new oP(c,l)}(function(c,l){if(c instanceof Uint8Array)return kv(c,l);if(c instanceof ArrayBuffer)return kv(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Ec(e));t.asyncQueue.enqueueAndForget(async()=>{rP(await dm(t),r,s)})}function yP(t,e){return t.asyncQueue.enqueue(async()=>function(n,s){const r=B(n);return r.persistence.runTransaction("Get named query","readonly",i=>r.qs.getNamedQuery(i,s))}(await hm(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e,n){if(!n)throw new k(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function L0(t,e,n,s){if(e===!0&&s===!0)throw new k(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Av(t){if(!U.isDocumentKey(t))throw new k(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rv(t){if(U.isDocumentKey(t))throw new k(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Ee(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sh(t);throw new k(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function M0(t,e){if(e<=0)throw new k(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new k(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}L0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new k(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new k(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new k(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class Sc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yR;switch(n.type){case"firstParty":return new bR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Cv.get(e);n&&(A("ComponentProvider","Removing Datastore"),Cv.delete(e),n.terminate())}(this),Promise.resolve()}}function vP(t,e,n,s={}){var r;const i=(t=Ee(t,Sc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=mt.MOCK_USER;else{a=Aw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new k(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(l)}t._authCredentials=new vR(new Kb(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Rt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Rt(this.firestore,e,this._query)}}class Zn extends Rt{constructor(e,n,s){super(e,n,bo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new U(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function Fs(t,e,...n){if(t=te(t),fm("collection","path",e),t instanceof Sc){const s=we.fromString(e,...n);return Rv(s),new Zn(t,null,s)}{if(!(t instanceof ze||t instanceof Zn))throw new k(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Rv(s),new Zn(t.firestore,null,s)}}function _P(t,e){if(t=Ee(t,Sc),fm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(t,null,function(n){return new bs(we.emptyPath(),n)}(e))}function qs(t,e,...n){if(t=te(t),arguments.length===1&&(e=Gb.A()),fm("doc","path",e),t instanceof Sc){const s=we.fromString(e,...n);return Av(s),new ze(t,null,new U(s))}{if(!(t instanceof ze||t instanceof Zn))throw new k(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Av(s),new ze(t.firestore,t instanceof Zn?t.converter:null,new U(s))}}function F0(t,e){return t=te(t),e=te(e),(t instanceof ze||t instanceof Zn)&&(e instanceof ze||e instanceof Zn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function U0(t,e){return t=te(t),e=te(e),t instanceof Rt&&e instanceof Rt&&t.firestore===e.firestore&&vc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Wp(this,"async_queue_retry"),this.Xc=()=>{const n=pl();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=pl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new vt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!mr(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw et("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Jp.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&z()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function ff(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class bP{constructor(){this._progressObserver={},this._taskCompletionResolver=new vt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,s){this._progressObserver={next:e,error:n,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=-1;class Ze extends Sc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new wP,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$0(this),this._firestoreClient.terminate()}}function It(t){return t._firestoreClient||$0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $0(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new XR(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,O0(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new lP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}function EP(t,e){B0(t=Ee(t,Ze));const n=It(t);if(n._uninitializedComponentsProvider)throw new k(I.FAILED_PRECONDITION,"SDK cache is already specified.");Pn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const s=t._freezeSettings(),r=new lm;return V0(n,r,new C0(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function TP(t){B0(t=Ee(t,Ze));const e=It(t);if(e._uninitializedComponentsProvider)throw new k(I.FAILED_PRECONDITION,"SDK cache is already specified.");Pn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),s=new lm;return V0(e,s,new iP(s,n.cacheSizeBytes))}function V0(t,e,n){const s=new vt;return t.asyncQueue.enqueue(async()=>{try{await ml(t,n),await df(t,e),s.resolve()}catch(r){const i=r;if(!A0(i))throw i;Pn("Error enabling indexeddb cache. Falling back to memory cache: "+i),s.reject(i)}}).then(()=>s.promise)}function SP(t){if(t._initialized&&!t._terminated)throw new k(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new vt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Sn.D())return Promise.resolve();const s=n+"main";await Sn.delete(s)}(Hp(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function xP(t){return function(e){const n=new vt;return e.asyncQueue.enqueueAndForget(async()=>GD(await dm(e),n)),n.promise}(It(t=Ee(t,Ze)))}function kP(t){return hP(It(t=Ee(t,Ze)))}function CP(t){return dP(It(t=Ee(t,Ze)))}function AP(t,e){const n=It(t=Ee(t,Ze)),s=new bP;return gP(n,t._databaseId,e,s),s}function RP(t,e){return yP(It(t=Ee(t,Ze)),e).then(n=>n?new Rt(t,null,n.query):null)}function B0(t){if(t._initialized||t._terminated)throw new k(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(dt.fromBase64String(e))}catch(n){throw new k(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=/^__.*__$/;class DP{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}class q0{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function j0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ih{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return nu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(j0(this.ca)&&NP.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class PP{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ec(e)}ya(e,n,s,r=!1){return new ih({ca:e,methodName:n,ga:s,path:tt.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mi(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new PP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oh(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);ym("Data must be an object, but it was:",o,s);const a=K0(s,o);let c,l;if(i.merge)c=new Zt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=pf(e,h,n);if(!o.contains(d))throw new k(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);W0(u,d)||u.push(d)}c=new Zt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new DP(new kt(a),c,l)}class xc extends pi{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xc}}function z0(t,e,n){return new ih({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class pm extends pi{_toFieldTransform(e){return new wc(e.path,new to)}isEqual(e){return e instanceof pm}}class OP extends pi{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=z0(this,e,!0),s=this.pa.map(i=>gi(i,n)),r=new ei(s);return new wc(e.path,r)}isEqual(e){return this===e}}class LP extends pi{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=z0(this,e,!0),s=this.pa.map(i=>gi(i,n)),r=new ti(s);return new wc(e.path,r)}isEqual(e){return this===e}}class MP extends pi{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new no(e.serializer,SI(e.serializer,this.Ia));return new wc(e.path,n)}isEqual(e){return this===e}}function mm(t,e,n,s){const r=t.ya(1,e,n);ym("Data must be an object, but it was:",r,s);const i=[],o=kt.empty();fi(s,(c,l)=>{const u=vm(e,c,n);l=te(l);const h=r.da(u);if(l instanceof xc)i.push(u);else{const d=gi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Zt(i);return new q0(o,a,r.fieldTransforms)}function gm(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[pf(e,s,n)],c=[r];if(i.length%2!=0)throw new k(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(pf(e,i[d])),c.push(i[d+1]);const l=[],u=kt.empty();for(let d=a.length-1;d>=0;--d)if(!W0(l,a[d])){const f=a[d];let m=c[d];m=te(m);const v=o.da(f);if(m instanceof xc)l.push(f);else{const _=gi(m,v);_!=null&&(l.push(f),u.set(f,_))}}const h=new Zt(l);return new q0(u,h,o.fieldTransforms)}function H0(t,e,n,s=!1){return gi(n,t.ya(s?4:3,e))}function gi(t,e){if(G0(t=te(t)))return ym("Unsupported field value:",e,t),K0(t,e);if(t instanceof pi)return function(n,s){if(!j0(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=gi(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return SI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ge.fromDate(n);return{timestampValue:so(s.serializer,r)}}if(n instanceof Ge){const r=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:so(s.serializer,r)}}if(n instanceof rh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ns)return{bytesValue:FI(s.serializer,n._byteString)};if(n instanceof ze){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:$p(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${sh(n)}`)}(t,e)}function K0(t,e){const n={};return iI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,(s,r)=>{const i=gi(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function G0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof rh||t instanceof ns||t instanceof ze||t instanceof pi)}function ym(t,e,n){if(!G0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=sh(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function pf(t,e,n){if((e=te(e))instanceof cr)return e._internalPath;if(typeof e=="string")return vm(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const FP=new RegExp("[~\\*/\\[\\]]");function vm(t,e,n){if(e.search(FP)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cr(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new k(I.INVALID_ARGUMENT,a+t+c)}function W0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ah("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UP extends Ya{data(){return super.data()}}function ah(t,e){return typeof e=="string"?vm(t,e):e instanceof cr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _m{}class kc extends _m{}function Tt(t,e,...n){let s=[];e instanceof _m&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof wm).length,o=r.filter(a=>a instanceof ch).length;if(i>1||i>0&&o>0)throw new k(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ch extends kc{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ch(e,n,s)}_apply(e){const n=this._parse(e);return X0(e._query,n),new Rt(e.firestore,e.converter,Zd(e._query,n))}_parse(e){const n=mi(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new k(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Pv(u,l);const d=[];for(const f of u)d.push(Dv(a,r,f));h={arrayValue:{values:d}}}else h=Dv(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Pv(u,l),h=H0(o,i,u,l==="in"||l==="not-in");return ge.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gl(t,e,n){const s=e,r=ah("where",t);return ch._create(r,s,n)}class wm extends _m{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wm(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ae.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)X0(i,a),i=Zd(i,a)}(e._query,n),new Rt(e.firestore,e.converter,Zd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bm extends kc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bm(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new k(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Bi(r,i);return function(a,c){if(Rp(a)===null){const l=Wu(a);l!==null&&J0(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Rt(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new bs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function yl(t,e="asc"){const n=e,s=ah("orderBy",t);return bm._create(s,n)}class lh extends kc{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new lh(e,n,s)}_apply(e){return new Rt(e.firestore,e.converter,Wl(e._query,this._limit,this._limitType))}}function vl(t){return M0("limit",t),lh._create("limit",t,"F")}function $P(t){return M0("limitToLast",t),lh._create("limitToLast",t,"L")}class uh extends kc{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new uh(e,n,s)}_apply(e){const n=Y0(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(s,r){return new bs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function VP(...t){return uh._create("startAt",t,!0)}function BP(...t){return uh._create("startAfter",t,!1)}class hh extends kc{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new hh(e,n,s)}_apply(e){const n=Y0(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(s,r){return new bs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function qP(...t){return hh._create("endBefore",t,!1)}function jP(...t){return hh._create("endAt",t,!0)}function Y0(t,e,n,s){if(n[0]=te(n[0]),n[0]instanceof Ya)return function(r,i,o,a,c){if(!a)throw new k(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Hr(r))if(u.field.isKeyField())l.push(Jr(i,a.key));else{const h=a.data.field(u.field);if(Gu(h))throw new k(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new k(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new or(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=mi(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new k(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const m=l[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new k(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Np(i)&&m.indexOf("/")!==-1)throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const v=i.path.child(we.fromString(m));if(!U.isDocumentKey(v))throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const _=new U(v);d.push(Jr(o,_))}else{const v=H0(a,c,m);d.push(v)}}return new or(d,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Dv(t,e,n){if(typeof(n=te(n))=="string"){if(n==="")throw new k(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Np(e)&&n.indexOf("/")!==-1)throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(we.fromString(n));if(!U.isDocumentKey(s))throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Jr(t,new U(s))}if(n instanceof ze)return Jr(t,n._key);throw new k(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sh(n)}.`)}function Pv(t,e){if(!Array.isArray(t)||t.length===0)throw new k(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function X0(t,e){if(e.isInequality()){const s=Wu(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new k(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Rp(t);i!==null&&J0(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new k(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function J0(t,e,n){if(!n.isEqual(e))throw new k(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Im{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return fi(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new rh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Cp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const n=nr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);Z(GI(s));const r=new rr(s.get(1),s.get(3)),i=new U(s.popFirst(5));return r.isEqual(n)||et(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class zP extends Im{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ys extends Ya{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ah("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ga extends ys{data(e={}){return super.data(e)}}class lr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ur(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ga(this._firestore,this._userDataWriter,s.key,s,new Ur(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ga(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ur(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ga(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ur(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:HP(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}function Z0(t,e){return t instanceof ys&&e instanceof ys?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof lr&&e instanceof lr&&t._firestore===e._firestore&&U0(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){t=Ee(t,ze);const e=Ee(t.firestore,Ze);return D0(It(e),t._key).then(n=>Tm(e,t,n))}class yi extends Im{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function KP(t){t=Ee(t,ze);const e=Ee(t.firestore,Ze),n=It(e),s=new yi(e);return fP(n,t._key).then(r=>new ys(e,s,t._key,r,new Ur(r!==null&&r.hasLocalMutations,!0),t.converter))}function GP(t){t=Ee(t,ze);const e=Ee(t.firestore,Ze);return D0(It(e),t._key,{source:"server"}).then(n=>Tm(e,t,n))}function wl(t){t=Ee(t,Rt);const e=Ee(t.firestore,Ze),n=It(e),s=new yi(e);return Q0(t._query),P0(n,t._query).then(r=>new lr(e,s,t,r))}function WP(t){t=Ee(t,Rt);const e=Ee(t.firestore,Ze),n=It(e),s=new yi(e);return pP(n,t._query).then(r=>new lr(e,s,t,r))}function QP(t){t=Ee(t,Rt);const e=Ee(t.firestore,Ze),n=It(e),s=new yi(e);return P0(n,t._query,{source:"server"}).then(r=>new lr(e,s,t,r))}function Ov(t,e,n){t=Ee(t,ze);const s=Ee(t.firestore,Ze),r=dh(t.converter,e,n);return Cc(s,[oh(mi(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ke.none())])}function su(t,e,n,...s){t=Ee(t,ze);const r=Ee(t.firestore,Ze),i=mi(r);let o;return o=typeof(e=te(e))=="string"||e instanceof cr?gm(i,"updateDoc",t._key,e,n,s):mm(i,"updateDoc",t._key,e),Cc(r,[o.toMutation(t._key,Ke.exists(!0))])}function YP(t){return Cc(Ee(t.firestore,Ze),[new Eo(t._key,Ke.none())])}function bl(t,e){const n=Ee(t.firestore,Ze),s=qs(t),r=dh(t.converter,e);return Cc(n,[oh(mi(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ke.exists(!1))]).then(()=>s)}function Em(t,...e){var n,s,r;t=te(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ff(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ff(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ze)l=Ee(t.firestore,Ze),u=bo(t._key.path),c={next:h=>{e[o]&&e[o](Tm(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ee(t,Rt);l=Ee(h.firestore,Ze),u=h._query;const d=new yi(l);c={next:f=>{e[o]&&e[o](new lr(l,d,h,f))},error:e[o+1],complete:e[o+2]},Q0(t._query)}return function(h,d,f,m){const v=new th(m),_=new nm(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>Zp(await co(h),_)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>em(await co(h),_))}}(It(l),u,a,c)}function XP(t,e){return mP(It(t=Ee(t,Ze)),ff(e)?e:{next:e})}function Cc(t,e){return function(n,s){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>jD(await dm(n),s,r)),r.promise}(It(t),e)}function Tm(t,e,n){const s=n.docs.get(e._key),r=new yi(t);return new ys(t,r,e._key,s,new Ur(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=mi(e)}set(e,n,s){this._verifyNotCommitted();const r=$s(e,this._firestore),i=dh(r.converter,n,s),o=oh(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,Ke.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=$s(e,this._firestore);let o;return o=typeof(n=te(n))=="string"||n instanceof cr?gm(this._dataReader,"WriteBatch.update",i._key,n,s,r):mm(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$s(e,this._firestore);return this._mutations=this._mutations.concat(new Eo(n._key,Ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $s(t,e){if((t=te(t)).firestore!==e)throw new k(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=mi(e)}get(e){const n=$s(e,this._firestore),s=new zP(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return z();const i=r[0];if(i.isFoundDocument())return new Ya(this._firestore,s,i.key,i,n.converter);if(i.isNoDocument())return new Ya(this._firestore,s,n._key,null,n.converter);throw z()})}set(e,n,s){const r=$s(e,this._firestore),i=dh(r.converter,n,s),o=oh(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,n,s,...r){const i=$s(e,this._firestore);let o;return o=typeof(n=te(n))=="string"||n instanceof cr?gm(this._dataReader,"Transaction.update",i._key,n,s,r):mm(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=$s(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=$s(e,this._firestore),s=new yi(this._firestore);return super.get(e).then(r=>new ys(this._firestore,s,n._key,r._document,new Ur(!1,!1),n.converter))}}function tO(t,e,n){t=Ee(t,Ze);const s=Object.assign(Object.assign({},JP),n);return function(r){if(r.maxAttempts<1)throw new k(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,i,o){const a=new vt;return r.asyncQueue.enqueueAndForget(async()=>{const c=await uP(r);new cP(r.asyncQueue,c,o,i,a).run()}),a.promise}(It(t),r=>e(new eO(t,r)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(){return new xc("deleteField")}function sO(){return new pm("serverTimestamp")}function rO(...t){return new OP("arrayUnion",t)}function iO(...t){return new LP("arrayRemove",t)}function oO(t){return new MP("increment",t)}(function(t,e=!0){(function(n){wo=n})(ws),ms(new Nn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ze(new _R(n.getProvider("auth-internal")),new ER(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),_n(Ry,"3.12.2",t),_n(Ry,"3.12.2","esm2017")})();const aO="@firebase/firestore-compat",cO="0.3.11";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function Mv(){if(!QR())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}let eE=class mf{constructor(e){this._delegate=e}static fromBase64String(e){return Mv(),new mf(ns.fromBase64String(e))}static fromUint8Array(e){return Lv(),new mf(ns.fromUint8Array(e))}toBase64(){return Mv(),this._delegate.toBase64()}toUint8Array(){return Lv(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){return lO(t,["next","error","complete"])}function lO(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const s of e)if(s in n&&typeof n[s]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{enableIndexedDbPersistence(e,n){return EP(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return TP(e._delegate)}clearIndexedDbPersistence(e){return SP(e._delegate)}}class tE{constructor(e,n,s){this._delegate=n,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof rr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Pn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,s={}){vP(this._delegate,e,n,s)}enableNetwork(){return kP(this._delegate)}disableNetwork(){return CP(this._delegate)}enablePersistence(e){let n=!1,s=!1;return e&&(n=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,L0("synchronizeTabs",n,"experimentalForceOwningTab",s)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return xP(this._delegate)}onSnapshotsInSync(e){return XP(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new lo(this,Fs(this._delegate,e))}catch(n){throw jt(n,"collection()","Firestore.collection()")}}doc(e){try{return new pn(this,qs(this._delegate,e))}catch(n){throw jt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new qt(this,_P(this._delegate,e))}catch(n){throw jt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return tO(this._delegate,n=>e(new nE(this,n)))}batch(){return It(this._delegate),new sE(new ZP(this._delegate,e=>Cc(this._delegate,e)))}loadBundle(e){return AP(this._delegate,e)}namedQuery(e){return RP(this._delegate,e).then(n=>n?new qt(this,n):null)}}class fh extends Im{constructor(e){super(),this.firestore=e}convertBytes(e){return new eE(new ns(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return pn.forKey(n,this.firestore,null)}}function hO(t){mR(t)}class nE{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new fh(e)}get(e){const n=$r(e);return this._delegate.get(n).then(s=>new Xa(this._firestore,new ys(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,n.converter)))}set(e,n,s){const r=$r(e);return s?(Sm("Transaction.set",s),this._delegate.set(r,n,s)):this._delegate.set(r,n),this}update(e,n,s,...r){const i=$r(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,s,...r),this}delete(e){const n=$r(e);return this._delegate.delete(n),this}}class sE{constructor(e){this._delegate=e}set(e,n,s){const r=$r(e);return s?(Sm("WriteBatch.set",s),this._delegate.set(r,n,s)):this._delegate.set(r,n),this}update(e,n,s,...r){const i=$r(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,s,...r),this}delete(e){const n=$r(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ii{constructor(e,n,s){this._firestore=e,this._userDataWriter=n,this._delegate=s}fromFirestore(e,n){const s=new ga(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ja(this._firestore,s),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const s=ii.INSTANCES;let r=s.get(e);r||(r=new WeakMap,s.set(e,r));let i=r.get(n);return i||(i=new ii(e,new fh(e),n),r.set(n,i)),i}}ii.INSTANCES=new WeakMap;class pn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new fh(e)}static forPath(e,n,s){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new pn(n,new ze(n._delegate,s,new U(e)))}static forKey(e,n,s){return new pn(n,new ze(n._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new lo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new lo(this.firestore,Fs(this._delegate,e))}catch(n){throw jt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=te(e),e instanceof ze?F0(this._delegate,e):!1}set(e,n){n=Sm("DocumentReference.set",n);try{return n?Ov(this._delegate,e,n):Ov(this._delegate,e)}catch(s){throw jt(s,"setDoc()","DocumentReference.set()")}}update(e,n,...s){try{return arguments.length===1?su(this._delegate,e):su(this._delegate,e,n,...s)}catch(r){throw jt(r,"updateDoc()","DocumentReference.update()")}}delete(){return YP(this._delegate)}onSnapshot(...e){const n=rE(e),s=iE(e,r=>new Xa(this.firestore,new ys(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return Em(this._delegate,n,s)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=KP(this._delegate):(e==null?void 0:e.source)==="server"?n=GP(this._delegate):n=_l(this._delegate),n.then(s=>new Xa(this.firestore,new ys(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new pn(this.firestore,e?this._delegate.withConverter(ii.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function jt(t,e,n){return t.message=t.message.replace(e,n),t}function rE(t){for(const e of t)if(typeof e=="object"&&!gf(e))return e;return{}}function iE(t,e){var n,s;let r;return gf(t[0])?r=t[0]:gf(t[1])?r=t[1]:typeof t[0]=="function"?r={next:t[0],error:t[1],complete:t[2]}:r={next:t[1],error:t[2],complete:t[3]},{next:i=>{r.next&&r.next(e(i))},error:(n=r.error)===null||n===void 0?void 0:n.bind(r),complete:(s=r.complete)===null||s===void 0?void 0:s.bind(r)}}class Xa{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new pn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Z0(this._delegate,e._delegate)}}class Ja extends Xa{data(e){const n=this._delegate.data(e);return gR(n!==void 0),n}}class qt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new fh(e)}where(e,n,s){try{return new qt(this.firestore,Tt(this._delegate,gl(e,n,s)))}catch(r){throw jt(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new qt(this.firestore,Tt(this._delegate,yl(e,n)))}catch(s){throw jt(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new qt(this.firestore,Tt(this._delegate,vl(e)))}catch(n){throw jt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new qt(this.firestore,Tt(this._delegate,$P(e)))}catch(n){throw jt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new qt(this.firestore,Tt(this._delegate,VP(...e)))}catch(n){throw jt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new qt(this.firestore,Tt(this._delegate,BP(...e)))}catch(n){throw jt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new qt(this.firestore,Tt(this._delegate,qP(...e)))}catch(n){throw jt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new qt(this.firestore,Tt(this._delegate,jP(...e)))}catch(n){throw jt(n,"endAt()","Query.endAt()")}}isEqual(e){return U0(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=WP(this._delegate):(e==null?void 0:e.source)==="server"?n=QP(this._delegate):n=wl(this._delegate),n.then(s=>new yf(this.firestore,new lr(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const n=rE(e),s=iE(e,r=>new yf(this.firestore,new lr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return Em(this._delegate,n,s)}withConverter(e){return new qt(this.firestore,e?this._delegate.withConverter(ii.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class dO{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ja(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class yf{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new qt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ja(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new dO(this._firestore,n))}forEach(e,n){this._delegate.forEach(s=>{e.call(n,new Ja(this._firestore,s))})}isEqual(e){return Z0(this._delegate,e._delegate)}}class lo extends qt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new pn(this.firestore,e):null}doc(e){try{return e===void 0?new pn(this.firestore,qs(this._delegate)):new pn(this.firestore,qs(this._delegate,e))}catch(n){throw jt(n,"doc()","CollectionReference.doc()")}}add(e){return bl(this._delegate,e).then(n=>new pn(this.firestore,n))}isEqual(e){return F0(this._delegate,e._delegate)}withConverter(e){return new lo(this.firestore,e?this._delegate.withConverter(ii.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $r(t){return Ee(t,ze)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(...e){this._delegate=new cr(...e)}static documentId(){return new xm(tt.keyField().canonicalString())}isEqual(e){return e=te(e),e instanceof cr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this._delegate=e}static serverTimestamp(){const e=sO();return e._methodName="FieldValue.serverTimestamp",new Or(e)}static delete(){const e=nO();return e._methodName="FieldValue.delete",new Or(e)}static arrayUnion(...e){const n=rO(...e);return n._methodName="FieldValue.arrayUnion",new Or(n)}static arrayRemove(...e){const n=iO(...e);return n._methodName="FieldValue.arrayRemove",new Or(n)}static increment(e){const n=oO(e);return n._methodName="FieldValue.increment",new Or(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO={Firestore:tE,GeoPoint:rh,Timestamp:Ge,Blob:eE,Transaction:nE,WriteBatch:sE,DocumentReference:pn,DocumentSnapshot:Xa,Query:qt,QueryDocumentSnapshot:Ja,QuerySnapshot:yf,CollectionReference:lo,FieldPath:xm,FieldValue:Or,setLogLevel:hO,CACHE_SIZE_UNLIMITED:IP};function pO(t,e){t.INTERNAL.registerComponent(new Nn("firestore-compat",n=>{const s=n.getProvider("app-compat").getImmediate(),r=n.getProvider("firestore").getImmediate();return e(s,r)},"PUBLIC").setServiceProps(Object.assign({},fO)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(t){pO(t,(e,n)=>new tE(e,n,new uO)),t.registerVersion(aO,cO)}mO(Ot);const gO={apiKey:"AIzaSyB92XCW231iCTqH4TmwITBeQvbLVqneYA8",authDomain:"itemshare-68ae3.firebaseapp.com",projectId:"itemshare-68ae3",storageBucket:"itemshare-68ae3.appspot.com",messagingSenderId:"468617277076",appId:"1:468617277076:web:6c0ce2cd38ad48ca66ce81"};Ot.initializeApp(gO);Ot.firestore.FieldValue.serverTimestamp;const Un=Ot.firestore();function km(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}const Ho={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ki={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function oE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vO=yO,_O=oE,aE=new hi("auth","Firebase",oE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new Ru("@firebase/auth");function wO(t,...e){ru.logLevel<=_e.WARN&&ru.warn(`Auth (${ws}): ${t}`,...e)}function Il(t,...e){ru.logLevel<=_e.ERROR&&ru.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw Cm(t,...e)}function At(t,...e){return Cm(t,...e)}function cE(t,e,n){const s=Object.assign(Object.assign({},_O()),{[e]:n});return new hi("auth","Firebase",s).create(e,{appName:t.name})}function Co(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Nt(t,"argument-error"),cE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cm(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return aE.create(t,...e)}function O(t,e,...n){if(!t)throw Cm(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Il(e),new Error(e)}function On(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Am(){return Fv()==="http:"||Fv()==="https:"}function Fv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Am()||Rw()||"connection"in navigator)?navigator.onLine:!0}function IO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Ok()||Jf()}get(){return bO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=new Ac(3e4,6e4);function ut(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ft(t,e,n,s,r={}){return uE(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=yo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),lE.fetch()(hE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function uE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},EO),e);try{const r=new SO(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw sa(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cE(t,u,l);Nt(t,u)}}catch(r){if(r instanceof Mt)throw r;Nt(t,"network-request-failed",{message:String(r)})}}async function Ts(t,e,n,s,r={}){const i=await ft(t,e,n,s,r);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hE(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Rm(t.config,r):`${t.config.apiScheme}://${r}`}class SO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(At(this.auth,"network-request-failed")),TO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=At(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,e){return ft(t,"POST","/v1/accounts:delete",e)}async function kO(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function CO(t,e){return ft(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AO(t,e=!1){const n=te(t),s=await n.getIdToken(e),r=ph(s);O(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ya(Zh(r.auth_time)),issuedAtTime:ya(Zh(r.iat)),expirationTime:ya(Zh(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zh(t){return Number(t)*1e3}function ph(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const r=kw(n);return r?JSON.parse(r):(Il("Failed to decode base64 JWT payload"),null)}catch(r){return Il("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function RO(t){const e=ph(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mt&&NO(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function NO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ya(this.lastLoginAt),this.creationTime=ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(t){var e;const n=t.auth,s=await t.getIdToken(),r=await vs(t,CO(n,{idToken:s}));O(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?LO(i.providerUserInfo):[],a=OO(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dE(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function PO(t){const e=te(t);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OO(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function LO(t){return t.map(e=>{var{providerId:n}=e,s=km(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,e){const n=await uE(t,{},async()=>{const s=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=hE(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await MO(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new tc;return s&&(O(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(O(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tc,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dE(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AO(this,e)}reload(){return PO(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ec(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,xO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:C,isAnonymous:H,providerData:ee,stsTokenManager:ae}=n;O(D&&ae,e,"internal-error");const F=tc.fromJSON(this.name,ae);O(typeof D=="string",e,"internal-error"),Ps(h,e.name),Ps(d,e.name),O(typeof C=="boolean",e,"internal-error"),O(typeof H=="boolean",e,"internal-error"),Ps(f,e.name),Ps(m,e.name),Ps(v,e.name),Ps(_,e.name),Ps(S,e.name),Ps(N,e.name);const W=new Kr({uid:D,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:H,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:F,createdAt:S,lastLoginAt:N});return ee&&Array.isArray(ee)&&(W.providerData=ee.map(fe=>Object.assign({},fe))),_&&(W._redirectEventId=_),W}static async _fromIdTokenResponse(e,n,s=!1){const r=new tc;r.updateFromServerResponse(n);const i=new Kr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ec(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Map;function cn(t){On(t instanceof Function,"Expected a class definition");let e=Uv.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fE.type="NONE";const uo=fE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Gr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Gr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ji(cn(uo),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||cn(uo);const o=Gr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Kr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ji(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ji(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yE(e))return"Blackberry";if(vE(e))return"Webos";if(Nm(e))return"Safari";if((e.includes("chrome/")||mE(e))&&!e.includes("edge/"))return"Chrome";if(Rc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pE(t=We()){return/firefox\//i.test(t)}function Nm(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mE(t=We()){return/crios\//i.test(t)}function gE(t=We()){return/iemobile/i.test(t)}function Rc(t=We()){return/android/i.test(t)}function yE(t=We()){return/blackberry/i.test(t)}function vE(t=We()){return/webos/i.test(t)}function Ao(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FO(t=We()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function UO(t=We()){var e;return Ao(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $O(){return Nw()&&document.documentMode===10}function _E(t=We()){return Ao(t)||Rc(t)||vE(t)||yE(t)||/windows phone/i.test(t)||gE(t)}function VO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t,e=[]){let n;switch(t){case"Browser":n=$v(We());break;case"Worker":n=`${$v(We())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(t){return(await ft(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function bE(t,e){return ft(t,"GET","/v2/recaptchaConfig",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){return t!==void 0&&t.getResponse!==void 0}function Bv(t){return t!==void 0&&t.enterprise!==void 0}class IE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Dm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=At("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",qO().appendChild(s)})}function EE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jO="https://www.google.com/recaptcha/enterprise.js?render=",zO="recaptcha-enterprise",HO="NO_RECAPTCHA";class TE{constructor(e){this.type=zO,this.auth=rt(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{bE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new IE(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Bv(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(HO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Bv(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Dm(jO+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ur(t,e,n,s=!1){const r=new TE(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qv(this),this.idTokenSubscription=new qv(this),this.beforeStateQueue=new KO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?te(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}async initializeRecaptchaConfig(){const e=await bE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new IE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new TE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rt(t){return te(t)}class qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function WO(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function QO(t,e,n){const s=rt(t);O(s._canInitEmulator,s,"emulator-config-failed"),O(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=SE(e),{host:o,port:a}=YO(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||XO()}function SE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YO(t){const e=SE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:jv(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:jv(o)}}}function jv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(t,e){return ft(t,"POST","/v1/accounts:resetPassword",ut(t,e))}async function kE(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function JO(t,e){return ft(t,"POST","/v1/accounts:update",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(t,e){return Ts(t,"POST","/v1/accounts:signInWithPassword",ut(t,e))}async function mh(t,e){return ft(t,"POST","/v1/accounts:sendOobCode",ut(t,e))}async function ZO(t,e){return mh(t,e)}async function td(t,e){return mh(t,e)}async function nd(t,e){return mh(t,e)}async function eL(t,e){return mh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",ut(t,e))}async function nL(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends Ro{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new nc(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new nc(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await ur(e,s,"signInWithPassword");return ed(e,r)}else return ed(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ur(e,s,"signInWithPassword");return ed(e,i)}else return Promise.reject(r)});case"emailLink":return tL(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return kE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nL(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Ts(t,"POST","/v1/accounts:signInWithIdp",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL="http://localhost";class ss extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=km(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ss(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:sL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rL(t,e){return ft(t,"POST","/v1/accounts:sendVerificationCode",ut(t,e))}async function iL(t,e){return Ts(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,e))}async function oL(t,e){const n=await Ts(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,e));if(n.temporaryProof)throw sa(t,"account-exists-with-different-credential",n);return n}const aL={USER_NOT_FOUND:"user-not-found"};async function cL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ts(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,n),aL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Ro{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Wr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Wr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return iL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return oL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return cL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!n&&!r&&!i?null:new Wr({verificationId:n,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uL(t){const e=Oi(Xo(t)).link,n=e?Oi(Xo(e)).deep_link_id:null,s=Oi(Xo(t)).deep_link_id;return(s?Oi(Xo(s)).link:null)||s||n||e||t}class gh{constructor(e){var n,s,r,i,o,a;const c=Oi(Xo(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=lL((r=c.mode)!==null&&r!==void 0?r:null);O(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uL(e);try{return new gh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.providerId=vr.PROVIDER_ID}static credential(e,n){return nc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=gh.parseLink(n);return O(s,"argument-error"),nc._fromEmailAndCode(e,s.code,s.tenantId)}}vr.PROVIDER_ID="password";vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends Ss{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class zi extends No{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),ss._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),ss._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return zi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return zi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!s&&!r&&!n&&!i||!a)return null;try{return new zi(a)._credential({idToken:n,accessToken:s,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends No{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return jn.credential(n,s)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends No{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL="http://localhost";class ho extends Ro{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,pendingToken:i}=n;return!s||!r||!i||s!==r?null:new ho(s,i)}static _create(e,n){return new ho(e,n)}buildRequest(){return{requestUri:hL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL="saml.";class iu extends Ss{constructor(e){O(e.startsWith(dL),"argument-error"),super(e)}static credentialFromResult(e){return iu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return iu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ho.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:s}=e;if(!n||!s)return null;try{return ho._create(s,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends No{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Hn.credential(n,s)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t,e){return Ts(t,"POST","/v1/accounts:signUp",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Kr._fromIdTokenResponse(e,s,r),o=zv(s);return new wn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=zv(s);return new wn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function zv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(t){var e;const n=rt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new wn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await El(n,{returnSecureToken:!0}),r=await wn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends Mt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ou.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ou(e,n,s,r)}}function CE(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ou._fromErrorAndOperation(t,i,e,s):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pL(t,e){const n=te(t);await yh(!0,n,e);const{providerUserInfo:s}=await kO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=AE(s||[]);return n.providerData=n.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Pm(t,e,n=!1){const s=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wn._forOperation(t,"link",s)}async function yh(t,e,n){await ec(e);const s=AE(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";O(s.has(n)===t,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await vs(t,CE(s,r,e,t),n);O(i.idToken,s,"internal-error");const o=ph(i.idToken);O(o,s,"internal-error");const{sub:a}=o;return O(t.uid===a,s,"user-mismatch"),wn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t,e,n=!1){const s="signIn",r=await CE(t,s,e),i=await wn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function vh(t,e){return NE(rt(t),e)}async function DE(t,e){const n=te(t);return await yh(!1,n,e.providerId),Pm(n,e)}async function PE(t,e){return RE(te(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mL(t,e){return Ts(t,"POST","/v1/accounts:signInWithCustomToken",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(t,e){const n=rt(t),s=await mL(n,{token:e,returnSecureToken:!0}),r=await wn._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Om._fromServerResponse(e,n):"totpInfo"in n?Lm._fromServerResponse(e,n):Nt(e,"internal-error")}}class Om extends Nc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Om(n)}}class Lm extends Nc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Lm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e,n){var s;O(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(t,e,n){var s;const r=rt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const o=await ur(r,i,"getOobCode",!0);n&&Hi(r,o,n),await td(r,o)}else n&&Hi(r,i,n),await td(r,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ur(r,i,"getOobCode",!0);n&&Hi(r,a,n),await td(r,a)}else return Promise.reject(o)})}async function vL(t,e,n){await xE(te(t),{oobCode:e,newPassword:n})}async function _L(t,e){await JO(te(t),{oobCode:e})}async function OE(t,e){const n=te(t),s=await xE(n,{oobCode:e}),r=s.requestType;switch(O(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(s.mfaInfo,n,"internal-error");default:O(s.email,n,"internal-error")}let i=null;return s.mfaInfo&&(i=Nc._fromServerResponse(rt(n),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:i},operation:r}}async function wL(t,e){const{data:n}=await OE(te(t),e);return n.email}async function bL(t,e,n){var s;const r=rt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await ur(r,i,"signUpPassword");o=El(r,l)}else o=El(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ur(r,i,"signUpPassword");return El(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await wn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function IL(t,e,n){return vh(te(t),vr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EL(t,e,n){var s;const r=rt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){O(c.handleCodeInApp,r,"argument-error"),c&&Hi(r,a,c)}if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const a=await ur(r,i,"getOobCode",!0);o(a,n),await nd(r,a)}else o(i,n),await nd(r,i).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await ur(r,i,"getOobCode",!0);o(c,n),await nd(r,c)}else return Promise.reject(a)})}function TL(t,e){const n=gh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function SL(t,e,n){const s=te(t),r=vr.credentialWithLink(e,n||Za());return O(r._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),vh(s,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xL(t,e){return ft(t,"POST","/v1/accounts:createAuthUri",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kL(t,e){const n=Am()?Za():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:r}=await xL(te(t),s);return r||[]}async function CL(t,e){const n=te(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Hi(n.auth,r,e);const{email:i}=await ZO(n.auth,r);i!==t.email&&await t.reload()}async function AL(t,e,n){const s=te(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Hi(s.auth,i,n);const{email:o}=await eL(s.auth,i);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL(t,e){return ft(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=te(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vs(s,RL(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function DL(t,e){return LE(te(t),e,null)}function PL(t,e){return LE(te(t),null,e)}async function LE(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await vs(t,kE(s,i));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(t){var e,n;if(!t)return null;const{providerId:s}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},i=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(t!=null&&t.idToken)){const o=(n=(e=ph(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ki(i,a)}}if(!s)return null;switch(s){case"facebook.com":return new LL(i,r);case"github.com":return new ML(i,r);case"google.com":return new FL(i,r);case"twitter.com":return new UL(i,r,t.screenName||null);case"custom":case"anonymous":return new Ki(i,null);default:return new Ki(i,s,r)}}class Ki{constructor(e,n,s={}){this.isNewUser=e,this.providerId=n,this.profile=s}}class ME extends Ki{constructor(e,n,s,r){super(e,n,s),this.username=r}}class LL extends Ki{constructor(e,n){super(e,"facebook.com",n)}}class ML extends ME{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class FL extends Ki{constructor(e,n){super(e,"google.com",n)}}class UL extends ME{constructor(e,n,s){super(e,"twitter.com",n,s)}}function $L(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:OL(n)}class Vr{constructor(e,n,s){this.type=e,this.credential=n,this.auth=s}static _fromIdtoken(e,n){return new Vr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Vr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,s;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Vr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return Vr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,s){this.session=e,this.hints=n,this.signInResolver=s}static _fromError(e,n){const s=rt(e),r=n.customData._serverResponse,i=(r.mfaInfo||[]).map(a=>Nc._fromServerResponse(s,a));O(r.mfaPendingCredential,s,"internal-error");const o=Vr._fromMfaPendingCredential(r.mfaPendingCredential);return new Mm(o,i,async a=>{const c=await a._process(s,o);delete r.mfaInfo,delete r.mfaPendingCredential;const l=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const u=await wn._fromIdTokenResponse(s,n.operationType,l);return await s._updateCurrentUser(u.user),u;case"reauthenticate":return O(n.user,s,"internal-error"),wn._forOperation(n.user,n.operationType,l);default:Nt(s,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function VL(t,e){var n;const s=te(t),r=e;return O(e.customData.operationType,s,"argument-error"),O((n=r.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,s,"argument-error"),Mm._fromError(s,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BL(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:start",ut(t,e))}function qL(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:finalize",ut(t,e))}function jL(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ut(t,e))}class Fm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>Nc._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Fm(e)}async getSession(){return Vr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const s=e,r=await this.getSession(),i=await vs(this.user,s._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const r=await vs(this.user,jL(this.user.auth,{idToken:s,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==n),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const sd=new WeakMap;function zL(t){const e=te(t);return sd.has(e)||sd.set(e,Fm._fromUser(e)),sd.get(e)}const au="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(au,"1"),this.storage.removeItem(au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(){const t=We();return Nm(t)||Ao(t)}const KL=1e3,GL=10;class UE extends FE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HL()&&VO(),this.fallbackToPolling=_E(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);$O()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,GL):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},KL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}UE.type="LOCAL";const Um=UE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends FE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$E.type="SESSION";const oi=$E;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new _h(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await WL(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Dc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function YL(t){at().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function XL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZL(){return $m()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="firebaseLocalStorageDb",eM=1,cu="firebaseLocalStorage",BE="fbase_key";class Pc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wh(t,e){return t.transaction([cu],e?"readwrite":"readonly").objectStore(cu)}function tM(){const t=indexedDB.deleteDatabase(VE);return new Pc(t).toPromise()}function vf(){const t=indexedDB.open(VE,eM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(cu,{keyPath:BE})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(cu)?e(s):(s.close(),await tM(),e(await vf()))})})}async function Hv(t,e,n){const s=wh(t,!0).put({[BE]:e,value:n});return new Pc(s).toPromise()}async function nM(t,e){const n=wh(t,!1).get(e),s=await new Pc(n).toPromise();return s===void 0?null:s.value}function Kv(t,e){const n=wh(t,!0).delete(e);return new Pc(n).toPromise()}const sM=800,rM=3;class qE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>rM)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(ZL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XL(),!this.activeServiceWorker)return;this.sender=new QL(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vf();return await Hv(e,au,"1"),await Kv(e,au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Hv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>nM(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=wh(r,!1).getAll();return new Pc(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qE.type="LOCAL";const sc=qE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:start",ut(t,e))}function oM(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:finalize",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=500,cM=6e4,tl=1e12;class lM{constructor(e){this.auth=e,this.counter=tl,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new uM(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||tl;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||tl;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||tl;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class uM{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;O(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=hM(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cM)},aM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function hM(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<t;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=EE("rcb"),dM=new Ac(3e4,6e4),fM="https://www.google.com/recaptcha/api.js?";class pM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=at().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(mM(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Vv(at().grecaptcha)?Promise.resolve(at().grecaptcha):new Promise((s,r)=>{const i=at().setTimeout(()=>{r(At(e,"network-request-failed"))},dM.get());at()[rd]=()=>{at().clearTimeout(i),delete at()[rd];const a=at().grecaptcha;if(!a||!Vv(a)){r(At(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=n,s(a)};const o=`${fM}?${yo({onload:rd,render:"explicit",hl:n})}`;Dm(o).catch(()=>{clearTimeout(i),r(At(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=at().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mM(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class gM{async load(e){return new lM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="recaptcha",yM={theme:"light",type:"image"};let vM=class{constructor(e,n=Object.assign({},yM),s){this.parameters=n,this.type=jE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=rt(s),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;O(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new gM:new pM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(r=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),r(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=at()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(Am()&&!$m(),this.auth,"internal-error"),await _M(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await BO(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function _M(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Wr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function wM(t,e,n){const s=rt(t),r=await bh(s,e,te(n));return new Vm(r,i=>vh(s,i))}async function bM(t,e,n){const s=te(t);await yh(!1,s,"phone");const r=await bh(s.auth,e,te(n));return new Vm(r,i=>DE(s,i))}async function IM(t,e,n){const s=te(t),r=await bh(s.auth,e,te(n));return new Vm(r,i=>PE(s,i))}async function bh(t,e,n){var s;const r=await n.verify();try{O(typeof r=="string",t,"argument-error"),O(n.type===jE,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return O(o.type==="enroll",t,"internal-error"),(await BL(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((s=i.multiFactorHint)===null||s===void 0?void 0:s.uid)||i.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await iM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await rL(t,{phoneNumber:i.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}async function EM(t,e){await Pm(te(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai=class Tl{constructor(e){this.providerId=Tl.PROVIDER_ID,this.auth=rt(e)}verifyPhoneNumber(e,n){return bh(this.auth,e,te(n))}static credential(e,n){return Wr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Tl.credentialFromTaggedObject(n)}static credentialFromError(e){return Tl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?Wr._fromTokenResponse(n,s):null}};ai.PROVIDER_ID="phone";ai.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e){return e?cn(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TM(t){return NE(t.auth,new Bm(t),t.bypassAuthState)}function SM(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),RE(n,new Bm(t),t.bypassAuthState)}async function xM(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Pm(n,new Bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TM;case"linkViaPopup":case"linkViaRedirect":return xM;case"reauthViaPopup":case"reauthViaRedirect":return SM;default:Nt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=new Ac(2e3,1e4);async function CM(t,e,n){const s=rt(t);Co(t,e,Ss);const r=vi(s,n);return new ls(s,"signInViaPopup",e,r).executeNotNull()}async function AM(t,e,n){const s=te(t);Co(s.auth,e,Ss);const r=vi(s.auth,n);return new ls(s.auth,"reauthViaPopup",e,r,s).executeNotNull()}async function RM(t,e,n){const s=te(t);Co(s.auth,e,Ss);const r=vi(s.auth,n);return new ls(s.auth,"linkViaPopup",e,r,s).executeNotNull()}class ls extends zE{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kM.get())};e()}}ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM="pendingRedirect",va=new Map;class DM extends zE{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const s=await PM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PM(t,e){const n=KE(e),s=HE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function qm(t,e){return HE(t)._set(KE(e),"true")}function OM(){va.clear()}function jm(t,e){va.set(t._key(),e)}function HE(t){return cn(t._redirectPersistence)}function KE(t){return Gr(NM,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(t,e,n){return MM(t,e,n)}async function MM(t,e,n){const s=rt(t);Co(t,e,Ss),await s._initializationPromise;const r=vi(s,n);return await qm(r,s),r._openRedirect(s,e,"signInViaRedirect")}function FM(t,e,n){return UM(t,e,n)}async function UM(t,e,n){const s=te(t);Co(s.auth,e,Ss),await s.auth._initializationPromise;const r=vi(s.auth,n);await qm(r,s.auth);const i=await GE(s);return r._openRedirect(s.auth,e,"reauthViaRedirect",i)}function $M(t,e,n){return VM(t,e,n)}async function VM(t,e,n){const s=te(t);Co(s.auth,e,Ss),await s.auth._initializationPromise;const r=vi(s.auth,n);await yh(!1,s,e.providerId),await qm(r,s.auth);const i=await GE(s);return r._openRedirect(s.auth,e,"linkViaRedirect",i)}async function BM(t,e){return await rt(t)._initializationPromise,Ih(t,e,!1)}async function Ih(t,e,n=!1){const s=rt(t),r=vi(s,e),o=await new DM(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}async function GE(t){const e=Dc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=10*60*1e3;class WE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!QE(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(At(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gv(e))}saveEventToCache(e){this.cachedEventUids.add(Gv(e)),this.lastProcessedEventTime=Date.now()}}function Gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function QE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(t,e={}){return ft(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HM=/^https?/;async function KM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YE(t);for(const n of e)try{if(GM(n))return}catch{}Nt(t,"unauthorized-domain")}function GM(t){const e=Za(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!HM.test(n))return!1;if(zM.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=new Ac(3e4,6e4);function Wv(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QM(t){return new Promise((e,n)=>{var s,r,i;function o(){Wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wv(),n(At(t,"network-request-failed"))},timeout:WM.get()})}if(!((r=(s=at().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=at().gapi)===null||i===void 0)&&i.load)o();else{const a=EE("iframefcb");return at()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},Dm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function YM(t){return Sl=Sl||QM(t),Sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=new Ac(5e3,15e3),JM="__/auth/iframe",ZM="emulator/auth/iframe",e2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n2(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rm(e,ZM):`https://${t.config.authDomain}/${JM}`,s={apiKey:e.apiKey,appName:t.name,v:ws},r=t2.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${yo(s).slice(1)}`}async function s2(t){const e=await YM(t),n=at().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:n2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e2,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=at().setTimeout(()=>{i(o)},XM.get());function c(){at().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i2=500,o2=600,a2="_blank",c2="http://localhost";class Qv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l2(t,e,n,s=i2,r=o2){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},r2),{width:s.toString(),height:r.toString(),top:i,left:o}),l=We().toLowerCase();n&&(a=mE(l)?a2:n),pE(l)&&(e=e||c2,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(UO(l)&&a!=="_self")return u2(e||"",a),new Qv(null);const h=window.open(e||"",a,u);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Qv(h)}function u2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2="__/auth/handler",d2="emulator/auth/handler",f2=encodeURIComponent("fac");async function _f(t,e,n,s,r,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ws,eventId:r};if(e instanceof Ss){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof No){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${f2}=${encodeURIComponent(c)}`:"";return`${p2(t)}?${yo(a).slice(1)}${l}`}function p2({config:t}){return t.emulator?Rm(t,d2):`https://${t.authDomain}/${h2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="webStorageSupport";class m2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oi,this._completeRedirectFn=Ih,this._overrideRedirectResult=jm}async _openPopup(e,n,s,r){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _f(e,n,s,Za(),r);return l2(e,o,Dc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await _f(e,n,s,Za(),r);return YL(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(On(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await s2(e),s=new WE(e);return n.register("authEvent",r=>(O(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(id,{type:id},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[id];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _E()||Nm()||Ao()}}const g2=m2;class y2{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return Yn("unexpected MultiFactorSessionType")}}}class zm extends y2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zm(e)}_finalizeEnroll(e,n,s){return qL(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return oM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class XE{constructor(){}static assertion(e){return zm._fromCredential(e)}}XE.FACTOR_ID="phone";var Yv="@firebase/auth",Xv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function w2(t){ms(new Nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wE(t)},l=new GO(s,r,i,c);return WO(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ms(new Nn("auth-internal",e=>{const n=rt(e.getProvider("auth").getImmediate());return(s=>new v2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Yv,Xv,_2(t)),_n(Yv,Xv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=5*60;Dk("authIdTokenMaxAge");w2("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=2e3;async function E2(t,e,n){var s;const{BuildInfo:r}=ci();On(e.sessionId,"AuthEvent did not contain a session ID");const i=await C2(e.sessionId),o={};return Ao()?o.ibi=r.packageName:Rc()?o.apn=r.packageName:Nt(t,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=i,_f(t,n,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,o)}async function T2(t){const{BuildInfo:e}=ci(),n={};Ao()?n.iosBundleId=e.packageName:Rc()?n.androidPackageName=e.packageName:Nt(t,"operation-not-supported-in-this-environment"),await YE(t,n)}function S2(t){const{cordova:e}=ci();return new Promise(n=>{e.plugins.browsertab.isAvailable(s=>{let r=null;s?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,FO()?"_blank":"_system","location=yes"),n(r)})})}async function x2(t,e,n){const{cordova:s}=ci();let r=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=s.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(At(t,"redirect-cancelled-by-user"))},I2))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Rc()&&document.addEventListener("visibilitychange",u,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{r()}}function k2(t){var e,n,s,r,i,o,a,c,l,u;const h=ci();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((i=(r=(s=h==null?void 0:h.cordova)===null||s===void 0?void 0:s.plugins)===null||r===void 0?void 0:r.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function C2(t){const e=A2(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function A2(t){if(On(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=20;class N2 extends WE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function D2(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:L2(),postBody:null,tenantId:t.tenantId,error:At(t,"no-auth-event")}}function P2(t,e){return wf()._set(bf(t),e)}async function Jv(t){const e=await wf()._get(bf(t));return e&&await wf()._remove(bf(t)),e}function O2(t,e){var n,s;const r=F2(e);if(r.includes("/__/auth/callback")){const i=xl(r),o=i.firebaseError?M2(decodeURIComponent(i.firebaseError)):null,a=(s=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||s===void 0?void 0:s[1],c=a?At(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function L2(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<R2;n++){const s=Math.floor(Math.random()*e.length);t.push(e.charAt(s))}return t.join("")}function wf(){return cn(Um)}function bf(t){return Gr("authEvent",t.config.apiKey,t.name)}function M2(t){try{return JSON.parse(t)}catch{return null}}function F2(t){const e=xl(t),n=e.link?decodeURIComponent(e.link):void 0,s=xl(n).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return xl(r).link||r||s||n||t}function xl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Oi(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=500;class $2{constructor(){this._redirectPersistence=oi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ih,this._overrideRedirectResult=jm}async _initialize(e){const n=e._key();let s=this.eventManagers.get(n);return s||(s=new N2(e),this.eventManagers.set(n,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){Nt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,s,r){k2(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),OM(),await this._originValidation(e);const o=D2(e,s,r);await P2(e,o);const a=await E2(e,o,n),c=await S2(a);return x2(e,i,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=T2(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:s,handleOpenURL:r,BuildInfo:i}=ci(),o=setTimeout(async()=>{await Jv(e),n.onEvent(Zv())},U2),a=async u=>{clearTimeout(o);const h=await Jv(e);let d=null;h&&(u!=null&&u.url)&&(d=O2(h,u.url)),n.onEvent(d||Zv())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,a);const c=r,l=`${i.packageName.toLowerCase()}://`;ci().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const V2=$2;function Zv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:At("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t,e){rt(t)._logFramework(e)}var q2="@firebase/auth-compat",j2="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=1e3;function _a(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function H2(){return _a()==="http:"||_a()==="https:"}function JE(t=We()){return!!((_a()==="file:"||_a()==="ionic:"||_a()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function K2(){return Jf()||Au()}function G2(){return Nw()&&(document==null?void 0:document.documentMode)===11}function W2(t=We()){return/Edge\/\d+/.test(t)}function Q2(t=We()){return G2()||W2(t)}function ZE(){try{const t=self.localStorage,e=Dc();if(t)return t.setItem(e,"1"),t.removeItem(e),Q2()?Ra():!0}catch{return Hm()&&Ra()}return!1}function Hm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function od(){return(H2()||Rw()||JE())&&!K2()&&ZE()&&!Hm()}function eT(){return JE()&&typeof document<"u"}async function Y2(){return eT()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},z2);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function X2(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={LOCAL:"local",NONE:"none",SESSION:"session"},Ko=O,tT="persistence";function J2(t,e){if(Ko(Object.values(an).includes(e),t,"invalid-persistence-type"),Jf()){Ko(e!==an.SESSION,t,"unsupported-persistence-type");return}if(Au()){Ko(e===an.NONE,t,"unsupported-persistence-type");return}if(Hm()){Ko(e===an.NONE||e===an.LOCAL&&Ra(),t,"unsupported-persistence-type");return}Ko(e===an.NONE||ZE(),t,"unsupported-persistence-type")}async function If(t){await t._initializationPromise;const e=nT(),n=Gr(tT,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Z2(t,e){const n=nT();if(!n)return[];const s=Gr(tT,t,e);switch(n.getItem(s)){case an.NONE:return[uo];case an.LOCAL:return[sc,oi];case an.SESSION:return[oi];default:return[]}}function nT(){var t;try{return((t=X2())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF=O;class js{constructor(){this.browserResolver=cn(g2),this.cordovaResolver=cn(V2),this.underlyingResolver=null,this._redirectPersistence=oi,this._completeRedirectFn=Ih,this._overrideRedirectResult=jm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,s,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,s,r)}async _openRedirect(e,n,s,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,s,r)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return eT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return eF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Y2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){return t.unwrap()}function tF(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(t){return rT(t)}function sF(t,e){var n;const s=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new rF(t,VL(t,e))}else if(s){const r=rT(e),i=e;r&&(i.credential=r,i.tenantId=s.tenantId||void 0,i.email=s.email||void 0,i.phoneNumber=s.phoneNumber||void 0)}}function rT(t){const{_tokenResponse:e}=t instanceof Mt?t.customData:t;if(!e)return null;if(!(t instanceof Mt)&&"temporaryProof"in e&&"phoneNumber"in e)return ai.credentialFromResult(t);const n=e.providerId;if(!n||n===Ho.PASSWORD)return null;let s;switch(n){case Ho.GOOGLE:s=jn;break;case Ho.FACEBOOK:s=qn;break;case Ho.GITHUB:s=zn;break;case Ho.TWITTER:s=Hn;break;default:const{oauthIdToken:r,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!r&&!a?null:a?n.startsWith("saml.")?ho._create(n,a):ss._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:r,accessToken:i}):new zi(n).credential({idToken:r,accessToken:i,rawNonce:c})}return t instanceof Mt?s.credentialFromError(t):s.credentialFromResult(t)}function Qt(t,e){return e.catch(n=>{throw n instanceof Mt&&sF(t,n),n}).then(n=>{const s=n.operationType,r=n.user;return{operationType:s,credential:nF(n),additionalUserInfo:$L(n),user:us.getOrCreate(r)}})}async function Ef(t,e){const n=await e;return{verificationId:n.verificationId,confirm:s=>Qt(t,n.confirm(s))}}class rF{constructor(e,n){this.resolver=n,this.auth=tF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Qt(sT(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this._delegate=e,this.multiFactor=zL(e)}static getOrCreate(e){return us.USER_MAP.has(e)||us.USER_MAP.set(e,new us(e)),us.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Qt(this.auth,DE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ef(this.auth,bM(this._delegate,e,n))}async linkWithPopup(e){return Qt(this.auth,RM(this._delegate,e,js))}async linkWithRedirect(e){return await If(rt(this.auth)),$M(this._delegate,e,js)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Qt(this.auth,PE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ef(this.auth,IM(this._delegate,e,n))}reauthenticateWithPopup(e){return Qt(this.auth,AM(this._delegate,e,js))}async reauthenticateWithRedirect(e){return await If(rt(this.auth)),FM(this._delegate,e,js)}sendEmailVerification(e){return CL(this._delegate,e)}async unlink(e){return await pL(this._delegate,e),this}updateEmail(e){return DL(this._delegate,e)}updatePassword(e){return PL(this._delegate,e)}updatePhoneNumber(e){return EM(this._delegate,e)}updateProfile(e){return NL(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return AL(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}us.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=O;class Tf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;Go(s,"invalid-api-key",{appName:e.name}),Go(s,"invalid-api-key",{appName:e.name});const r=typeof window<"u"?js:void 0;this._delegate=n.initialize({options:{persistence:iF(s,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(vO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?us.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){QO(this._delegate,e,n)}applyActionCode(e){return _L(this._delegate,e)}checkActionCode(e){return OE(this._delegate,e)}confirmPasswordReset(e,n){return vL(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Qt(this._delegate,bL(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return kL(this._delegate,e)}isSignInWithEmailLink(e){return TL(this._delegate,e)}async getRedirectResult(){Go(od(),this._delegate,"operation-not-supported-in-this-environment");const e=await BM(this._delegate,js);return e?Qt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){B2(this._delegate,e)}onAuthStateChanged(e,n,s){const{next:r,error:i,complete:o}=e_(e,n,s);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,n,s){const{next:r,error:i,complete:o}=e_(e,n,s);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,n){return EL(this._delegate,e,n)}sendPasswordResetEmail(e,n){return yL(this._delegate,e,n||void 0)}async setPersistence(e){J2(this._delegate,e);let n;switch(e){case an.SESSION:n=oi;break;case an.LOCAL:n=await cn(sc)._isAvailable()?sc:Um;break;case an.NONE:n=uo;break;default:return Nt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Qt(this._delegate,fL(this._delegate))}signInWithCredential(e){return Qt(this._delegate,vh(this._delegate,e))}signInWithCustomToken(e){return Qt(this._delegate,gL(this._delegate,e))}signInWithEmailAndPassword(e,n){return Qt(this._delegate,IL(this._delegate,e,n))}signInWithEmailLink(e,n){return Qt(this._delegate,SL(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ef(this._delegate,wM(this._delegate,e,n))}async signInWithPopup(e){return Go(od(),this._delegate,"operation-not-supported-in-this-environment"),Qt(this._delegate,CM(this._delegate,e,js))}async signInWithRedirect(e){return Go(od(),this._delegate,"operation-not-supported-in-this-environment"),await If(this._delegate),LM(this._delegate,e,js)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return wL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Tf.Persistence=an;function e_(t,e,n){let s=t;typeof t!="function"&&({next:s,error:e,complete:n}=t);const r=s;return{next:o=>r(o&&us.getOrCreate(o)),error:e,complete:n}}function iF(t,e){const n=Z2(t,e);if(typeof self<"u"&&!n.includes(sc)&&n.push(sc),typeof window<"u")for(const s of[Um,oi])n.includes(s)||n.push(s);return n.includes(uo)||n.push(uo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.providerId="phone",this._delegate=new ai(sT(Ot.auth()))}static credential(e,n){return ai.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Km.PHONE_SIGN_IN_METHOD=ai.PHONE_SIGN_IN_METHOD;Km.PROVIDER_ID=ai.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oF=O;class aF{constructor(e,n,s=Ot.app()){var r;oF((r=s.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new vM(e,n,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cF="auth-compat";function lF(t){t.INTERNAL.registerComponent(new Nn(cF,e=>{const n=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new Tf(n,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ki.EMAIL_SIGNIN,PASSWORD_RESET:ki.PASSWORD_RESET,RECOVER_EMAIL:ki.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ki.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ki.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ki.VERIFY_EMAIL}},EmailAuthProvider:vr,FacebookAuthProvider:qn,GithubAuthProvider:zn,GoogleAuthProvider:jn,OAuthProvider:zi,SAMLAuthProvider:iu,PhoneAuthProvider:Km,PhoneMultiFactorGenerator:XE,RecaptchaVerifier:aF,TwitterAuthProvider:Hn,Auth:Tf,AuthCredential:Ro,Error:Mt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(q2,j2)}lF(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebasestorage.googleapis.com",oT="storageBucket",uF=2*60*1e3,hF=10*60*1e3,dF=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Mt{constructor(e,n,s=0){super(ad(e),`Firebase Storage: ${n} (${ad(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ad(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function ad(t){return"storage/"+t}function Gm(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(He.UNKNOWN,t)}function fF(t){return new Qe(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pF(t){return new Qe(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(He.UNAUTHENTICATED,t)}function gF(){return new Qe(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yF(t){return new Qe(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function aT(){return new Qe(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cT(){return new Qe(He.CANCELED,"User canceled the upload/download.")}function vF(t){return new Qe(He.INVALID_URL,"Invalid URL '"+t+"'.")}function _F(t){return new Qe(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wF(){return new Qe(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+oT+"' property when initializing the app?")}function lT(){return new Qe(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bF(){return new Qe(He.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function IF(){return new Qe(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function EF(t){return new Qe(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sf(t){return new Qe(He.INVALID_ARGUMENT,t)}function uT(){return new Qe(He.APP_DELETED,"The Firebase app was deleted.")}function TF(t){return new Qe(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wa(t,e){return new Qe(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Wo(t){throw new Qe(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ln.makeFromUrl(e,n)}catch{return new ln(e,"")}if(s.path==="")return s;throw _F(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},v=n===iT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",S=new RegExp(`^https?://${v}/${r}/${_}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:f,indices:m,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let C=0;C<D.length;C++){const H=D[C],ee=H.regex.exec(e);if(ee){const ae=ee[H.indices.bucket];let F=ee[H.indices.path];F||(F=""),s=new ln(ae,F),H.postModify(s);break}}if(s==null)throw vF(e);return s}}class SF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){r=setTimeout(()=>{r=null,t(f,c())},_)}function d(){i&&clearTimeout(i)}function f(_,...S){if(l){d();return}if(_){d(),u.call(null,_,...S);return}if(c()||o){d(),u.call(null,_,...S);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,h(D)}let m=!1;function v(_){m||(m=!0,d(),!l&&(r!==null?(_||(a=2),clearTimeout(r),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function kF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t){return t!==void 0}function AF(t){return typeof t=="function"}function RF(t){return typeof t=="object"&&!Array.isArray(t)}function Eh(t){return typeof t=="string"||t instanceof String}function t_(t){return Wm()&&t instanceof Blob}function Wm(){return typeof Blob<"u"&&!Au()}function n_(t,e,n,s){if(s<e)throw Sf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Sf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function hT(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qr||(Qr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new nl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Qr.NO_ERROR,c=i.getStatus();if(!a||dT(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Qr.ABORT;s(!1,new nl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new nl(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());CF(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Gm();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?uT():cT();o(c)}else{const c=aT();o(c)}};this.canceled_?n(!1,new nl(!1,null,!0)):this.backoffId_=xF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function DF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function LF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MF(t,e,n,s,r,i,o=!0){const a=hT(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return OF(l,e),DF(l,n),PF(l,i),LF(l,s),new NF(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function UF(...t){const e=FF();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Wm())return new Blob(t);throw new Qe(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $F(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VF(t){if(typeof atob>"u")throw EF("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cd{constructor(e,n){this.data=e,this.contentType=n||null}}function BF(t,e){switch(t){case Xn.RAW:return new cd(fT(e));case Xn.BASE64:case Xn.BASE64URL:return new cd(pT(t,e));case Xn.DATA_URL:return new cd(jF(e),zF(e))}throw Gm()}function fT(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function qF(t){let e;try{e=decodeURIComponent(t)}catch{throw wa(Xn.DATA_URL,"Malformed data URL.")}return fT(e)}function pT(t,e){switch(t){case Xn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw wa(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Xn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw wa(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=VF(e)}catch(r){throw r.message.includes("polyfill")?r:wa(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class mT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wa(Xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=HF(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function jF(t){const e=new mT(t);return e.base64?pT(Xn.BASE64,e.rest):qF(e.rest)}function zF(t){return new mT(t).contentType}function HF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){let s=0,r="";t_(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(t_(this.data_)){const s=this.data_,r=$F(s,e,n);return r===null?null:new Vs(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Vs(s,!0)}}static getBlob(...e){if(Wm()){const n=e.map(s=>s instanceof Vs?s.data_:s);return new Vs(UF.apply(null,n))}else{const n=e.map(o=>Eh(o)?BF(Xn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Vs(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){let e;try{e=JSON.parse(t)}catch{return null}return RF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function GF(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function yT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WF(t,e){return e}class Vt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||WF}}let sl=null;function QF(t){return!Eh(t)||t.length<2?t:yT(t)}function vT(){if(sl)return sl;const t=[];t.push(new Vt("bucket")),t.push(new Vt("generation")),t.push(new Vt("metageneration")),t.push(new Vt("name","fullPath",!0));function e(i,o){return QF(o)}const n=new Vt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Vt("size");return r.xform=s,t.push(r),t.push(new Vt("timeCreated")),t.push(new Vt("updated")),t.push(new Vt("md5Hash",null,!0)),t.push(new Vt("cacheControl",null,!0)),t.push(new Vt("contentDisposition",null,!0)),t.push(new Vt("contentEncoding",null,!0)),t.push(new Vt("contentLanguage",null,!0)),t.push(new Vt("contentType",null,!0)),t.push(new Vt("metadata","customMetadata",!0)),sl=t,sl}function YF(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new ln(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function XF(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return YF(s,t),s}function _T(t,e,n){const s=gT(e);return s===null?null:XF(t,s,n)}function JF(t,e,n,s){const r=gT(e);if(r===null||!Eh(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Oc(d,n,s),m=hT({alt:"media",token:l});return f+m})[0]}function wT(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Do{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){if(!t)throw Gm()}function Qm(t,e){function n(s,r){const i=_T(t,r,e);return fs(i!==null),i}return n}function ZF(t,e){function n(s,r){const i=_T(t,r,e);return fs(i!==null),JF(i,r,t.host,t._protocol)}return n}function Lc(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=gF():r=mF():n.getStatus()===402?r=pF(t.bucket):n.getStatus()===403?r=yF(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function bT(t){const e=Lc(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=fF(t.path)),i.serverResponse=r.serverResponse,i}return n}function eU(t,e,n){const s=e.fullServerUrl(),r=Oc(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Do(r,i,Qm(t,n),o);return a.errorHandler=bT(e),a}function tU(t,e,n){const s=e.fullServerUrl(),r=Oc(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Do(r,i,ZF(t,n),o);return a.errorHandler=bT(e),a}function nU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function IT(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=nU(null,e)),s}function sU(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let C=0;C<2;C++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=IT(e,s,r),u=wT(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Vs.getBlob(h,s,d);if(f===null)throw lT();const m={name:l.fullPath},v=Oc(i,t.host,t._protocol),_="POST",S=t.maxUploadRetryTime,N=new Do(v,_,Qm(t,n),S);return N.urlParams=m,N.headers=o,N.body=f.uploadData(),N.errorHandler=Lc(e),N}class lu{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function Ym(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{fs(!1)}return fs(!!n&&(e||["active"]).indexOf(n)!==-1),n}function rU(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=IT(e,s,r),a={name:o.fullPath},c=Oc(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=wT(o,n),d=t.maxUploadRetryTime;function f(v){Ym(v);let _;try{_=v.getResponseHeader("X-Goog-Upload-URL")}catch{fs(!1)}return fs(Eh(_)),_}const m=new Do(c,l,f,d);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=Lc(e),m}function iU(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const u=Ym(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{fs(!1)}h||fs(!1);const d=Number(h);return fs(!isNaN(d)),new lu(d,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Do(n,o,i,a);return c.headers=r,c.errorHandler=Lc(e),c}const s_=256*1024;function oU(t,e,n,s,r,i,o,a){const c=new lu(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw bF();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,d);if(v===null)throw lT();function _(C,H){const ee=Ym(C,["active","final"]),ae=c.current+u,F=s.size();let W;return ee==="final"?W=Qm(e,i)(C,H):W=null,new lu(ae,F,ee==="final",W)}const S="POST",N=e.maxUploadRetryTime,D=new Do(n,S,_,N);return D.headers=m,D.body=v.uploadData(),D.progressCallback=a||null,D.errorHandler=Lc(t),D}const Yt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ld(t){switch(t){case"running":case"pausing":case"canceling":return Yt.RUNNING;case"paused":return Yt.PAUSED;case"success":return Yt.SUCCESS;case"canceled":return Yt.CANCELED;case"error":return Yt.ERROR;default:return Yt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e,n,s){if(AF(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class cU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Wo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lU extends cU{initXhr(){this.xhr_.responseType="text"}}function Pi(){return new lU}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=vT(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(He.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(dT(r.status,[]))if(i)r=aT();else{this.sleepTime=Math.max(this.sleepTime*2,dF),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(He.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=rU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Pi,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=iU(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,Pi,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=s_*this._chunkMultiplier,n=new lu(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=oU(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Pi,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){s_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=eU(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Pi,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=sU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Pi,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=cT(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ld(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new aU(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ld(this._state)){case Yt.SUCCESS:Ci(this._resolve.bind(null,this.snapshot))();break;case Yt.CANCELED:case Yt.ERROR:const n=this._reject;Ci(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ld(this._state)){case Yt.RUNNING:case Yt.PAUSED:e.next&&Ci(e.next.bind(e,this.snapshot))();break;case Yt.SUCCESS:e.complete&&Ci(e.complete.bind(e))();break;case Yt.CANCELED:case Yt.ERROR:e.error&&Ci(e.error.bind(e,this._error))();break;default:e.error&&Ci(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this._service=e,n instanceof ln?this._location=n:this._location=ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new li(e,n)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yT(this._location.path)}get storage(){return this._service}get parent(){const e=KF(this._location.path);if(e===null)return null;const n=new ln(this._location.bucket,e);return new li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw TF(e)}}function hU(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new uU(t,new Vs(e),n)}function dU(t){t._throwIfRoot("getDownloadURL");const e=tU(t.storage,t._location,vT());return t.storage.makeRequestWithTokens(e,Pi).then(n=>{if(n===null)throw IF();return n})}function fU(t,e){const n=GF(t._location.path,e),s=new ln(t._location.bucket,n);return new li(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(t){return/^[A-Za-z]+:\/\//.test(t)}function mU(t,e){return new li(t,e)}function ET(t,e){if(t instanceof Xm){const n=t;if(n._bucket==null)throw wF();const s=new li(n,n._bucket);return e!=null?ET(s,e):s}else return e!==void 0?fU(t,e):t}function gU(t,e){if(e&&pU(e)){if(t instanceof Xm)return mU(t,e);throw Sf("To use ref(service, url), the first argument must be a Storage instance.")}else return ET(t,e)}function r_(t,e){const n=e==null?void 0:e[oT];return n==null?null:ln.makeFromBucketSpec(n,t)}function yU(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Aw(r,t.app.options.projectId))}class Xm{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=iT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uF,this._maxUploadRetryTime=hF,this._requests=new Set,r!=null?this._bucket=ln.makeFromBucketSpec(r,this._host):this._bucket=r_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=r_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){n_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){n_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new li(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new SF(uT());{const o=MF(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const i_="@firebase/storage",o_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="storage";function vU(t,e,n){return t=te(t),hU(t,e,n)}function _U(t){return t=te(t),dU(t)}function wU(t,e){return t=te(t),gU(t,e)}function bU(t=Fw(),e){t=te(t);const s=tp(t,TT).getImmediate({identifier:e}),r=Nk("storage");return r&&IU(s,...r),s}function IU(t,e,n,s={}){yU(t,e,n,s)}function EU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Xm(n,s,r,e,ws)}function TU(){ms(new Nn(TT,EU,"PUBLIC").setMultipleInstances(!0)),_n(i_,o_,""),_n(i_,o_,"esm2017")}TU();const SU=bU(),sn=_1("itemshare",{state:()=>({myUserUid:localStorage.getItem("useruid")||null,myProfile:{firstName:"",lastName:"",image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",location:""},editProfile:{id:9,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},sampleProfiles:[{id:0,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},{id:1,firstName:"John",lastName:"Smith",image:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",location:"Baybay City"},{id:2,firstName:"Emily",lastName:"Johnson",image:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",location:"Tacloban City"},{id:3,firstName:"David",lastName:"Brown",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Calbayog City"},{id:4,firstName:"Sarah",lastName:"Davis",image:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",location:"Tacloban City"},{id:5,firstName:"Michael",lastName:"Wilson",image:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",location:"Ormoc City"},{id:6,firstName:"Jessica",lastName:"Thompson",image:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",location:"Maasin City"},{id:7,firstName:"Christopher",lastName:"Martinez",image:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",location:"Tacloban City"},{id:8,firstName:"Megan",lastName:"Taylor",image:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",location:"Calbayog City"}],rentedItems:[],sampleItems:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",ownerId:0},{itemId:2,itemName:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",ownerId:1},{itemId:3,itemName:"Cushion set A",location:"Maasin City",rentAmount:"50.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",ownerId:2},{itemId:4,name:"Table",location:"Ormoc City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",ownerId:3},{itemId:5,itemName:"Chair",location:"Sogod, Southern Leyte",rentAmount:"75.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",ownerId:4},{itemId:6,itemName:"Bookshelf",location:"Biliran",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",ownerId:5},{itemId:7,itemName:"Sofa",location:"Ormoc City",rentAmount:"250.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",ownerId:6},{itemId:8,itemName:"Dining Table",location:"Baybay City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",ownerId:7},{itemId:9,itemName:"Kitchen Cabinet",location:"Maasin, Southern Leyte",rentAmount:"220.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",ownerId:8},{itemId:10,itemName:"Desk",location:"Tacloban City",rentAmount:"120.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",ownerId:0},{itemId:11,itemName:"Bed Frame",location:"Ormoc City",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",ownerId:1},{itemId:12,itemName:"Mattress",location:"Baybay City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",ownerId:2},{itemId:13,itemName:"Wardrobe",location:"Tacloban City",rentAmount:"180.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",ownerId:3},{itemId:14,itemName:"Television",location:"Maasin, Southern Leyte",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",ownerId:4},{itemId:15,itemName:"Coffee Table",location:"Ormoc City",rentAmount:"90.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",ownerId:5},{itemId:16,itemName:"Side Table",location:"Baybay City",rentAmount:"60.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",ownerId:6},{itemId:17,itemName:"Dresser",location:"Tacloban City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",ownerId:7},{itemId:18,itemName:"Armchair",location:"Maasin, Southern Leyte",rentAmount:"120.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",ownerId:8}],loadedMessages:[]}),getters:{tempUserProfile(t){return{firstName:"Loading...",lastName:"",image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",location:"Loading location..."}},myFullName(t){return t.myProfile.firstName+" "+t.myProfile.lastName},productsCheaperThan(t){return e=>t.products.filter(n=>n.price<e)},itemsInRange(t){return(e,n)=>t.sampleItems.slice(e,n)},itemById(t){return e=>t.sampleItems.find(n=>n.id==e)},loadedProfile(t){return e=>t.sampleProfiles[e]},loggedInUser(t){return t.myUserUid},isSamePerson(t){return e=>e+1==t.loadedMessages.length?!1:t.loadedMessages[e].sender==t.loadedMessages[e+1].sender},isSameMessageSource(t){return e=>{var n="";return e+1<t.loadedMessages.length&&t.loadedMessages[e].sender==t.loadedMessages[e+1].sender&&(n+=t.loadedMessages[e].sender==t.myUserUid?" rounded-br-none":" rounded-bl-none"),e-1>=0&&t.loadedMessages[e].sender==t.loadedMessages[e-1].sender&&(n+=t.loadedMessages[e].sender==t.myUserUid?" rounded-tr-none":" rounded-tl-none"),n+=t.loadedMessages[e].sender==t.myUserUid?" bg-primary text-background bg-opacity-90":" bg-secondary bg-opacity-40",n}}},actions:{async initMyProfile(){Ot.auth().onAuthStateChanged(async t=>{if(t)this.myUserUid=t.uid,this.myProfile=await this.loadProfile(t.uid);else return this.useruid=null,{}})},async loadProfile(t){const e=await _l(qs(Un,"users",t));if(e.exists())return{firstName:e.data().firstName,lastName:e.data().lastName,location:e.data().location,image:e.data().image}},async login(t,e){if(t!==""&&e!=="")try{const n=await Ot.auth().signInWithEmailAndPassword(t,e);return this.myUserUid=n.user.uid,localStorage.setItem("useruid",this.myUserUid),!0}catch(n){switch(n.code){case"auth/invalid-email":throw"Invalid email";case"auth/user-not-found":throw"No account with that email was found";case"auth/wrong-password":throw"Incorrect password";default:throw n.code}}else throw"Please fill out all the fields!"},async resetPassword(t){if(t=="")throw"Please enter your email address.";try{return await Ot.auth().sendPasswordResetEmail(t),!0}catch(e){throw e}},async loadItems(t=12,e=""){let n=Tt(Fs(Un,"items"));e&&(n=Tt(n,gl("ownerId","==",e))),n=Tt(n,yl("createdAt","desc"),vl(t));const s=await wl(n),r=[];return s.forEach(i=>{const o={itemId:i.id,itemName:i.data().itemName,location:i.data().location,rentAmount:i.data().rentAmount,rentRate:i.data().rentRate,image:i.data().images?i.data().images[0]:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"};r.push(o)}),r},async loadItem(t){const e=await _l(qs(Un,"items",t));if(e.exists())return{itemName:e.data().itemName,location:e.data().location,rentAmount:e.data().rentAmount,rentRate:e.data().rentRate,description:e.data().description,tags:e.data().tags,images:e.data().images||["https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"],ownerId:e.data().ownerId}},async uploadImage(t){const e=wU(SU,"itemImages/"+Date.now()+"."+t.name.split(".").pop());return await vU(e,t),await _U(e)},async createItem(t){if(t.imageFiles.length==0||t.itemName==""||t.location==""||t.rentAmount==""||t.rentRate==""||t.tags.length==0||t.description=="")throw"Please fill out all the fields!";try{const n=[];for(var e of t.imageFiles)n.push(await this.uploadImage(e));return await bl(Fs(Un,"items"),{ownerId:this.myUserUid,images:n,itemName:t.itemName,location:t.location,rentAmount:t.rentAmount,rentRate:t.rentRate,tags:t.tags,description:t.description,createdAt:Ot.firestore.FieldValue.serverTimestamp()}),!0}catch(n){throw n.message}},searchItem(){return[]},async loadConversations(t){let e=Tt(Fs(Un,"conversations"));e=Tt(e,gl("participants","array-contains",t)),e=Tt(e,yl("lastSentAt","desc"),vl(12));const n=await wl(e),s=[];for(const r of n.docs){let i={convoId:r.id,lastMessage:r.data().lastMessage,lastSentAt:r.data().lastSentAt,lastSender:r.data().lastSender,participant:await this.loadProfile(r.data().participants.find(o=>o!=t)),isRead:r.data().isRead};s.push(i)}return s},async loadConversation(t){const e=qs(Un,"conversations",t),n=await _l(e);if(n.exists())return n.data().lastSender!=this.myUserUid&&await su(e,{isRead:!0}),{lastMessage:n.data().lastMessage,lastSentAt:n.data().lastSentAt,lastSender:n.data().lastSender,participants:n.data().participants}},async loadMessages(t){this.loadedMessages=[];let e=Tt(Fs(Un,"conversations",t,"messages"));e=Tt(e,yl("sentAt"),vl(64)),Em(e,n=>{const s=[];n.forEach(r=>{let i={content:r.data().content,sender:r.data().sender,type:r.data().type};s.push(i)}),this.loadedMessages=s})},async register(t){if(t.phoneNumber==""||t.email==""||t.firstName==""||t.lastName==""||t.location==""||t.password==""||t.confirmPassword=="")throw"Please fill out all the fields!";if(t.password!=t.confirmPassword)throw"Password does not match!";if(!t.terms)throw"Please agree to the terms and conditions.";switch(t.gender){case"Male":t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_male.png?alt=media&token=b239dcf0-a57f-43a1-a0bd-34898f5a9714";break;case"Female":t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_female.png?alt=media&token=6bca62c3-150b-46f7-ad60-6128217e24bd";break;default:t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366";break}try{const e=await Ot.auth().createUserWithEmailAndPassword(t.email,t.password);await Un.collection("users").doc(e.user.uid).set({firstName:t.firstName,lastName:t.lastName,email:t.email,phoneNumber:t.phoneNumber,location:t.location,image:t.image,verified:!1,admin:!1}),this.myUserUid=e.user.uid,localStorage.setItem("useruid",this.myUserUid)}catch(e){throw e.message}return!0},async logout(){try{return await Ot.auth().signOut(),this.myUserUid=null,localStorage.removeItem("useruid"),!0}catch(t){throw t}},async messageOwner(t,e){const n=Fs(Un,"conversations"),s=[this.myUserUid,t],r=Tt(n,gl("participants","==",s)),i=await wl(r);let o,a;return i.empty?(a=await bl(n,{participants:s}),o=a.id):(a=i.docs[0],o=a.id),this.sendMessage(o,e),o},async sendMessage(t,e){const n=qs(Un,"conversations",t),s=Fs(n,"messages");await bl(s,{sender:this.myUserUid,type:"message",content:e,sentAt:Ot.firestore.FieldValue.serverTimestamp()}),await su(n,{lastMessage:e,lastSender:this.myUserUid,lastSentAt:Ot.firestore.FieldValue.serverTimestamp(),isRead:!1})}}}),xU="/itemshare/assets/ItemShareLogo-622ee656.png",kU=p("span",{class:"font-poppins hidden select-none text-3xl font-black text-background underline decoration-accent decoration-2 underline-offset-4 md:inline-block"},"ItemShare",-1),CU=["src"],ST={__name:"ItemShareLogo",setup(t){return(e,n)=>(K(),Xs(ue(Tn),{to:"/",class:"flex items-center gap-2"},{default:Me(()=>[kU,p("img",{src:ue(xU),class:"w-10 rounded-xl",loading:"lazy"},null,8,CU)]),_:1}))}},AU=p("div",{class:"flex h-full flex-col-reverse bg-background md:flex-row-reverse",style:{"background-image":"url('/images/landingBg.jpg')","background-size":"cover","background-position":"center"}},[p("div",{class:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),p("div",{class:"z-10 basis-1/2 bg-primary"})],-1),RU={class:"absolute top-0 z-20 flex h-screen w-full flex-col md:flex-row-reverse"},NU={class:"flex w-full basis-full flex-col justify-between gap-4 overflow-y-auto p-8 md:basis-1/2"},DU={class:"flex items-center justify-between"},PU={class:"flex gap-4 text-background"},OU=p("footer",{class:"text-right text-background"}," All Rights Reserved 2023. ® ",-1),LU={__name:"LandingView",setup(t){return(e,n)=>{const s=go("RouterLink");return K(),X(Le,null,[AU,p("div",RU,[p("div",NU,[p("header",DU,[p("nav",PU,[L(s,{to:"/about"},{default:Me(()=>[Xe("About Us")]),_:1}),L(s,{to:"/about"},{default:Me(()=>[Xe("Contacts")]),_:1})]),L(ST)]),L(ue(ic)),OU])])],64)}}},Th=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},MU={},FU={class:"flex basis-full flex-col justify-between divide-y-0 divide-secondary/80 px-4 md:divide-y-4"},UU=p("div",{class:"flex basis-full flex-col justify-center"},[p("h1",{class:"text-5xl font-bold text-background sm:text-6xl md:shadow-none"}," Hello, looking for something you like? ")],-1),$U={class:"flex basis-full flex-col gap-8 px-4 py-16"},VU=p("p",{class:"text-xl text-background"}," Unlock the value of your unused items: Earn, Share, and Connect with ItemShare ",-1),BU={class:"flex items-center gap-2"};function qU(t,e){const n=go("RouterLink");return K(),X("div",FU,[UU,p("div",$U,[VU,p("div",BU,[L(n,{to:"/login",class:"rounded-md border-2 border-background bg-background px-8 py-2 text-center text-green-800"},{default:Me(()=>[Xe(" LOGIN ")]),_:1}),L(n,{to:"/register",class:"rounded-md border-2 border-background px-8 py-2 text-center text-background"},{default:Me(()=>[Xe(" REGISTER ")]),_:1})])])])}const jU=Th(MU,[["render",qU]]),zU={class:"flex w-full flex-col gap-1"},HU=["type","placeholder","value","disabled"],De={__name:"CustomField",props:{modelValue:{default:""},inputType:{type:String,default:"text"},placeholder:{type:String,default:""},label:{type:String,default:""},disabled:{default:!1}},emits:["update:modelValue"],setup(t){return(e,n)=>(K(),X("div",zU,[gn(p("label",{class:"text-text"},ke(t.label),513),[[Ws,t.label]]),p("input",{size:"1",type:t.inputType,placeholder:t.placeholder,value:t.modelValue,disabled:t.disabled,onInput:n[0]||(n[0]=s=>e.$emit("update:modelValue",s.target.value)),class:"rounded-md border-2 border-text/50 bg-white/50 text-text placeholder:text-sm placeholder:text-text/60 focus:border-2 focus:border-primary/100 focus:bg-white/90 focus:ring-primary/50 focus:placeholder:text-text/50 disabled:bg-text/10"},null,40,HU),Bf(e.$slots,"default")]))}},KU={class:"flex max-w-xs flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},GU=["onSubmit"],WU=p("h1",null,"Login",-1),QU={class:"pt-2"},YU={class:"pt-2"},XU=p("button",{class:"rounded-md bg-primary px-6 py-2 text-background"}," Login ",-1),JU={__name:"LoginView",setup(t){const e=oc(),n=sn(),s=he(""),r=he(""),i=he("");async function o(){i.value="";try{await n.login(s.value,r.value)&&e.push("/home")}catch(a){i.value=a}}return(a,c)=>{const l=go("RouterLink");return K(),X("div",KU,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:An(o,["stop","prevent"])},[WU,L(De,{"input-type":"email",modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),placeholder:"Email"},null,8,["modelValue"]),L(De,{"input-type":"password",modelValue:r.value,"onUpdate:modelValue":c[1]||(c[1]=u=>r.value=u),placeholder:"Password"},null,8,["modelValue"]),gn(p("div",{class:"rounded-md border-2 border-red-400 bg-red-300 px-4 py-2 align-middle text-sm text-red-800"},ke(i.value),513),[[Ws,i.value]]),p("p",QU,[L(l,{to:"/forgot-password",class:"underline decoration-accent"},{default:Me(()=>[Xe("Forgot Password?")]),_:1})]),p("p",YU,[Xe(" New here? "),L(l,{to:"/register",class:"underline decoration-accent"},{default:Me(()=>[Xe("Create an account!")]),_:1})]),XU],40,GU)])}}},ZU={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},e$=["onSubmit"],t$=p("h1",null,"Create an account",-1),n$={class:"flex flex-col gap-2 xl:flex-row xl:gap-8"},s$={class:"flex basis-1/2 flex-col gap-2"},r$=p("button",{class:"rounded-md border-2 border-text/50 bg-secondary/100 px-6 py-2 text-text/80 transition-colors"}," Send SMS Code ",-1),i$={class:"flex basis-1/2 flex-col gap-2"},o$={class:"text-sm"},a$=p("span",null," I agree to the ",-1),c$=p("button",{class:"rounded-md border-2 border-transparent bg-primary px-6 py-2 text-white"}," Create account ",-1),l$={class:"pt-2 text-sm"},u$={__name:"RegisterView",setup(t){const e=oc(),n=sn(),s=he(""),r=he({phoneNumber:"",email:"",firstName:"",lastName:"",location:"",image:"",password:"",confirmPassword:"",terms:!1});async function i(){try{s.value="",await n.register(r.value)&&e.push("/home")}catch(o){s.value=o}}return(o,a)=>{const c=go("RouterLink");return K(),X("div",ZU,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:An(i,["stop","prevent"])},[t$,p("div",n$,[p("div",s$,[L(De,{label:"Phone Number",modelValue:r.value.phoneNumber,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value.phoneNumber=l),"input-type":"tel",placeholder:"Enter your phone number"},{default:Me(()=>[r$]),_:1},8,["modelValue"]),L(De,{label:"Email Address",modelValue:r.value.email,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value.email=l),"input-type":"email",placeholder:"Email"},null,8,["modelValue"]),L(De,{label:"First Name",modelValue:r.value.firstName,"onUpdate:modelValue":a[2]||(a[2]=l=>r.value.firstName=l),"input-type":"text",placeholder:"First Name"},null,8,["modelValue"]),L(De,{label:"Last Name",modelValue:r.value.lastName,"onUpdate:modelValue":a[3]||(a[3]=l=>r.value.lastName=l),"input-type":"text",placeholder:"Last Name"},null,8,["modelValue"])]),p("div",i$,[L(De,{label:"Location",modelValue:r.value.location,"onUpdate:modelValue":a[4]||(a[4]=l=>r.value.location=l),"input-type":"text",placeholder:"Location"},null,8,["modelValue"]),L(De,{label:"Password",modelValue:r.value.password,"onUpdate:modelValue":a[5]||(a[5]=l=>r.value.password=l),"input-type":"password",placeholder:"Password"},null,8,["modelValue"]),L(De,{label:"Confirm Password",modelValue:r.value.confirmPassword,"onUpdate:modelValue":a[6]||(a[6]=l=>r.value.confirmPassword=l),"input-type":"password",placeholder:"Confirm Password"},null,8,["modelValue"]),gn(p("div",{class:"rounded-md border-2 border-red-400 bg-red-300 px-4 py-2 align-middle text-sm text-red-800"},ke(s.value),513),[[Ws,s.value]]),p("p",o$,[gn(p("input",{type:"checkbox",name:"checkbox",id:"checkbox","onUpdate:modelValue":a[7]||(a[7]=l=>r.value.terms=l),class:"text-accent focus:ring-0"},null,512),[[lw,r.value.terms]]),a$,L(c,{to:"/terms-and-conditions",class:"underline decoration-accent"},{default:Me(()=>[Xe(" Terms and Conditions ")]),_:1})]),c$,p("p",l$,[Xe(" Have an account? "),L(c,{to:"/login",class:"underline decoration-accent"},{default:Me(()=>[Xe("Log in instead!")]),_:1})])])])],40,e$)])}}},h$={class:"whitespace-pre text-primary"},d$={class:"material-icons-outlined"},Br={__name:"StarRating",props:{value:{default:0}},setup(t){return(e,n)=>(K(),X("p",h$,[(K(),X(Le,null,Cn(5,s=>p("span",d$,ke(s<t.value?"star":"grade"),1)),64))]))}},f$={key:0,class:"absolute left-0 z-50 mt-2.5 w-screen max-w-max translate-x-0 overflow-hidden rounded-none bg-white shadow-md shadow-gray-400 md:left-auto md:-translate-x-1/2 md:rounded-lg lg:mt-4",id:"dropdownNotifications"},p$={class:"flex h-64 w-full flex-col md:w-96"},m$=p("h2",{class:"z-10 px-3 py-2 font-bold text-green-600 shadow-sm shadow-gray-400"}," NOTIFICATIONS ",-1),g$={class:"overflow-y-auto bg-green-50"},y$={class:"flex flex-col gap-1 p-2"},v$={class:"bg-white p-2 text-sm text-gray-700 shadow-sm shadow-gray-400"},_$={__name:"NotificationsPopup",props:{visible:Boolean},setup(t){const e=he([{type:"review",message:'Lorem Dolor gave your "3D Scanner" a rating:',rating:4,time:"JUST NOW"},{type:"review",message:'Lorem Dolor left a review to your "3D Scanner": "Way lami imo item di nani nahu iuli nimo kay ahu ni sunugon human gamit!"',rating:5,time:"24 MINS AGO"},{type:"upcoming",message:'"2D Printer" will be ready for you to pick up in 24 hours.',time:"23 HOURS AGO"},{type:"message",message:"Lorem Dolor chatted you! Be sure to leave a reply.",time:"4 DAYS AGO"}]);return(n,s)=>(K(),Xs(Wf,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:Me(()=>[t.visible?(K(),X("div",f$,[p("div",p$,[m$,p("div",g$,[p("div",y$,[(K(!0),X(Le,null,Cn(e.value,r=>(K(),X("article",v$,[p("p",null,ke(r.message),1),r.rating?(K(),Xs(Br,{key:0,value:r.rating},null,8,["value"])):Xt("",!0),p("p",null,ke(r.time),1)]))),256))])])])])):Xt("",!0)]),_:1}))}},w$={key:0,class:"sticky flex w-full flex-col bg-primary text-background shadow-sm shadow-secondary"},b$={class:"container mx-auto flex items-center justify-between bg-primary px-4 py-2"},I$={class:"flex items-center gap-4"},E$=p("span",{class:"material-icons text-3xl lg:text-base"},"add_box",-1),T$=p("span",{class:"hidden lg:inline-block"},"CREATE ITEM",-1),S$=p("span",{class:"material-icons text-3xl lg:text-base"},"notifications",-1),x$=p("span",{class:"hidden lg:inline-block"},"NOTIFICATIONS",-1),k$=[S$,x$],C$=p("span",{class:"material-icons text-3xl lg:text-base"},"chat",-1),A$=p("span",{class:"hidden lg:inline-block"},"MESSAGES",-1),R$=["onClick"],N$=p("span",{class:"material-icons text-3xl lg:text-base"},"logout",-1),D$=p("span",{class:"hidden lg:inline-block"},"LOG OUT",-1),P$=[N$,D$],O$=["src","title"],L$={class:"bg-secondary/20"},M$={class:"container mx-auto flex flex-col-reverse items-stretch justify-between px-4 lg:flex-row"},F$={key:0,class:"flex scroll-p-12 gap-8 overflow-x-auto whitespace-nowrap px-4 pb-4 lg:py-4"},U$=p("li",null,"NEW",-1),$$=p("li",null,"HOT",-1),V$=p("li",null,"TOP RATED",-1),B$=p("li",null,"KIDS",-1),q$=p("li",null,"MEN",-1),j$=p("li",null,"WOMEN",-1),z$=[U$,$$,V$,B$,q$,j$],H$=p("div",null,null,-1),K$=p("input",{type:"text",name:"",id:"",class:"w-full rounded-l-md border-none bg-white/50 px-4 py-1 text-sm text-text placeholder:text-text/60 focus:bg-white/90 focus:ring-0 focus:placeholder:text-text/50",placeholder:"Search..."},null,-1),G$=p("button",{class:"material-icons bg-accent px-2 py-1 text-text/70 lg:py-0 lg:text-lg"}," search ",-1),W$={__name:"NavigationBar",setup(t){const e=oc(),n=sn(),s=he(!1);hr(async()=>{await n.initMyProfile()});function r(){n.searchItem()&&e.push("/search")}async function i(){try{await n.logout(),e.push("/")}catch(o){alert("Sign Out Error"+o)}}return(o,a)=>["login","register"].includes(o.$route.name)?Xt("",!0):(K(),X("header",w$,[p("nav",b$,[L(ST),p("ul",I$,[p("li",null,[L(ue(Tn),{to:"/create-item",class:"flex gap-1"},{default:Me(()=>[E$,T$]),_:1})]),p("li",null,[p("button",{type:"button",class:"flex gap-1",onClick:a[0]||(a[0]=c=>s.value=!s.value)},k$),L(_$,{visible:s.value},null,8,["visible"])]),p("li",null,[L(ue(Tn),{to:"/messages",class:"flex gap-1"},{default:Me(()=>[C$,A$]),_:1})]),p("li",null,[p("button",{onClick:An(i,["prevent"]),class:"flex gap-1"},P$,8,R$)]),p("li",null,[L(ue(Tn),{to:"/profile",class:"flex items-center gap-2"},{default:Me(()=>[p("img",{src:ue(n).myProfile.image,alt:"",class:"aspect-square w-10 rounded-full",title:ue(n).myFullName},null,8,O$)]),_:1})])])]),p("section",L$,[p("div",M$,[["home"].includes(o.$route.name)?(K(),X("ol",F$,z$)):Xt("",!0),H$,["search"].includes(o.$route.name)?Xt("",!0):(K(),X("form",{key:1,class:"my-3 flex overflow-hidden rounded-md border-2 border-text/50 bg-background focus-within:border-2 focus-within:border-primary/100",onSubmit:a[1]||(a[1]=An(c=>r(),["stop","prevent"]))},[K$,G$,L(ue(Tn),{to:"/search",class:"material-icons bg-accent py-1 pr-2 text-text/70 lg:py-0 lg:text-lg"},{default:Me(()=>[Xe(" menu ")]),_:1})],32))])])]))}},Q$={},Y$={key:0,class:"sticky bottom-0 flex w-full flex-col bg-primary px-4 text-background"},X$=p("nav",{class:"container mx-auto flex items-center justify-end py-4"},[p("p",null,"All Rights Reserved 2023. ®")],-1),J$=[X$];function Z$(t,e){return["login","register"].includes(t.$route.name)?Xt("",!0):(K(),X("header",Y$,J$))}const eV=Th(Q$,[["render",Z$]]),tV={class:"flex h-screen flex-col"},nV={class:"basis-full overflow-y-auto"},sV={__name:"HomePageView",setup(t){return(e,n)=>(K(),X("div",tV,[L(W$),p("div",nV,[L(ue(ic))]),L(eV)]))}},rV={key:0,class:"rounded-none bg-primary/80 text-background px-2 py-2 sm:rounded-xl sm:px-4"},iV={class:"aspect-square w-full"},oV=["src"],aV={class:"flex flex-col"},cV={class:"text-xs"},lV={class:"text-green-800"},uV=p("span",{class:"text-2xl"},"₱",-1),uu={__name:"ItemsContainer",props:{gridfor:{type:String,default:""},items:{type:Array,default:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"},{id:2,name:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg"}]}},setup(t){function e(n){switch(n){case"search":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"}}return(n,s)=>t.items.length==0?(K(),X("div",rV," No items found ")):(K(),X("div",{key:1,class:kn(["grid grid-flow-row gap-2 rounded-none bg-gradient-to-b from-primary/80 to-transparent bg-[length:100%_150px] bg-no-repeat px-2 py-4 sm:rounded-xl sm:px-4",e(t.gridfor)])},[(K(!0),X(Le,null,Cn(t.items,r=>(K(),Xs(ue(Tn),{to:"/item/"+r.itemId,class:"bg-white p-2 shadow-sm shadow-secondary"},{default:Me(()=>[p("div",iV,[p("img",{src:r.image,alt:"",srcset:"",loading:"lazy",class:"aspect-square h-full object-contain"},null,8,oV)]),p("div",aV,[p("p",null,ke(r.itemName),1),p("p",cV,ke(r.location),1),p("p",lV,[uV,Xe(ke(r.rentAmount+" - "+r.rentRate),1)])])]),_:2},1032,["to"]))),256))],2))}},hV={class:"container mx-auto flex flex-col gap-8 px-0 py-8 sm:px-4"},dV={class:"flex flex-col gap-2"},fV=p("h1",{class:"px-4 sm:px-0"},"JUST FOR YOU",-1),pV={class:"flex flex-col gap-2"},mV=p("h1",{class:"px-4 sm:px-0"},"DISCOVER",-1),gV={__name:"HomeView",setup(t){const e=sn(),n=he([]);return hr(async()=>{n.value=await e.loadItems()}),(s,r)=>(K(),X("main",hV,[p("section",dV,[fV,L(uu,{items:ue(e).itemsInRange(12,18)},null,8,["items"])]),p("section",pV,[mV,L(uu,{items:n.value},null,8,["items"])])]))}},yV=["onSubmit"],vV=p("h1",null,"Edit Profile",-1),_V={class:"flex flex-col gap-2 p-2 sm:gap-4"},wV={class:"flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"},bV={class:"flex flex-col"},IV=p("h2",null,"Profile Picture",-1),EV={class:"relative inline-block aspect-square w-32 rounded-sm object-contain"},TV=["src"],SV=p("label",{for:"add-image",class:"material-icons absolute -bottom-2 -right-2 cursor-pointer rounded-md border-2 border-text/50 bg-accent px-1 py-1 text-text/70"}," add_photo_alternate ",-1),xV={class:"flex w-56 basis-full flex-col gap-2"},kV={class:"my-2 flex flex-col justify-end gap-2 px-2 sm:flex-row"},CV=p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"}," Save changes ",-1),AV={__name:"EditProfile",props:{useruid:{default:0},profile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:""}}},emits:["close"],setup(t,{emit:e}){const n=t,s=sn(),r=new FileReader,i=he(Object.assign({},n.profile));function o(c){let l=c.target.files[0];r.readAsDataURL(l),r.onload=u=>{i.value.image=u.target.result}}function a(){s.editProfile=Object.assign({},profile.value),e("close")}return Gs(()=>n.profile,c=>{i.value=Object.assign({},c)}),(c,l)=>(K(),X("form",{action:"#",onSubmit:An(a,["stop","prevent"])},[vV,p("div",_V,[p("div",wV,[p("div",bV,[IV,p("div",EV,[p("img",{src:i.value.image,alt:"",srcset:"",class:"aspect-square w-32 rounded-lg object-contain shadow-sm shadow-secondary"},null,8,TV),SV,p("input",{type:"file",id:"add-image",onChange:l[0]||(l[0]=u=>o(u)),hidden:""},null,32)])]),p("div",xV,[L(De,{label:"First Name",modelValue:i.value.firstName,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value.firstName=u),placeholder:"First Name"},null,8,["modelValue"]),L(De,{label:"Last Name",modelValue:i.value.lastName,"onUpdate:modelValue":l[2]||(l[2]=u=>i.value.lastName=u),placeholder:"Last Name"},null,8,["modelValue"])])]),L(De,{label:"Location",modelValue:i.value.location,"onUpdate:modelValue":l[3]||(l[3]=u=>i.value.location=u),placeholder:"Current Location"},null,8,["modelValue"])]),p("footer",kV,[CV,p("button",{type:"button",onClick:l[4]||(l[4]=u=>e("close")),class:"rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"}," Cancel ")])],40,yV))}},RV={class:"flex items-center justify-between gap-24 bg-primary/90 px-4 py-2 shadow-md shadow-secondary"},NV={class:"flex items-center gap-2"},DV=["src"],PV={class:"font-black text-background"},OV={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white"},LV=["disabled"],xT={__name:"MessageOwner",props:{ownerId:String,ownerProfile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:""}}},emits:["close"],setup(t,{emit:e}){const n=t,s=oc(),r=sn(),i=he(""),o=he(!1);async function a(){try{o.value=!0;let c=await r.messageOwner(n.ownerId,i.value);s.push("/messages/"+c)}catch(c){console.log(c+"from MessageOwner")}finally{o.value=!1}}return(c,l)=>(K(),X(Le,null,[p("header",RV,[p("div",NV,[p("img",{src:t.ownerProfile.image,alt:"",class:"aspect-square w-8 rounded-full"},null,8,DV),p("p",PV,ke(t.ownerProfile.firstName+" "+t.ownerProfile.lastName),1)]),p("button",{class:"material-icons text-background",onClick:l[0]||(l[0]=u=>e("close"))}," close ")]),p("section",OV,[p("form",{class:"bg-amber-400 flex gap-2 bg-secondary/80 p-2 shadow-gray-400 drop-shadow-sm",onSubmit:l[2]||(l[2]=An(u=>a(),["prevent"]))},[L(De,{placeholder:"Enter message...",modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value=u),disabled:o.value},null,8,["modelValue","disabled"]),p("button",{disabled:o.value,type:"submit",class:"material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background disabled:bg-text/50"}," send ",8,LV)],32)])],64))}},MV={class:"container mx-auto flex flex-col gap-8 px-4 py-8"},FV={class:"flex flex-col gap-2 lg:flex-row"},UV={class:"flex basis-9/12 flex-col gap-2 sm:flex-row"},$V={class:"flex basis-4/12 flex-col gap-2 bg-white p-4 shadow-sm shadow-secondary"},VV=["src"],BV={class:"flex w-full basis-8/12 flex-col justify-between bg-white p-4 shadow-sm shadow-secondary"},qV={class:"flex flex-wrap items-start justify-between gap-2"},jV={class:"text-3xl"},zV={class:"flex"},HV=p("span",{class:"material-icons text-green-600"},"location_on",-1),KV={class:"my-4"},GV=p("h2",null,"Lender Ratings",-1),WV={class:"mb-4 flex gap-4"},QV=p("span",null,"3.0 / 5.0",-1),YV=p("h2",null,"Chat Response Rate",-1),XV={class:"mb-4 flex gap-4"},JV=p("span",null,"4.0 / 5.0",-1),ZV={class:"flex flex-col justify-end gap-2 md:flex-row"},e4=p("span",{class:"material-icons"},"edit",-1),t4=p("span",null,"Edit Profile",-1),n4=[e4,t4],s4=p("span",{class:"material-icons"},"forum",-1),r4=p("span",null,"Chat",-1),i4=[s4,r4],o4={key:2,class:"flex items-center justify-center gap-1 rounded-md border-2 border-text/50 bg-secondary px-8 py-2 text-text/80"},a4=p("span",{class:"material-icons"},"flag",-1),c4=p("span",null,"Report user",-1),l4=[a4,c4],u4=zf('<div class="flex basis-3/12 flex-row gap-4 bg-white p-4 shadow-sm shadow-secondary lg:flex-col"><div class="basis-1/2 lg:basis-0"><h2>Lended Items</h2><h2 class="text-2xl">542</h2></div><div class="basis-1/2 lg:basis-0"><h2>Rented Items</h2><h2 class="text-2xl">34</h2></div></div>',1),h4={key:0,class:"flex flex-col gap-2"},a_={__name:"ProfileView",setup(t){const e=sn(),n=Xf(),s=he(n.params.id||e.myUserUid),r=he(!0),i=he([]),o=he({firstName:"",lastName:"",image:"",location:""}),a=he(null),c=he(null),l=gt(()=>s.value==e.myUserUid);function u(d){d?a.value.showModal():a.value.close()}function h(d){d?c.value.showModal():c.value.close()}return hr(async()=>{o.value=await e.loadProfile(s.value),i.value=await e.loadItems(12,s.value),r.value=!1}),Gs(()=>n.params.id,async d=>{r.value=!0,s.value=d||e.myUserUid,o.value=await e.loadProfile(s.value),i.value=await e.loadItems(12,s.value),r.value=!1}),(d,f)=>(K(),X(Le,null,[p("main",MV,[p("section",FV,[p("div",UV,[p("div",$V,[o.value.image?(K(),X("img",{key:0,src:o.value.image,alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,VV)):Xt("",!0)]),p("div",BV,[p("div",null,[p("div",qV,[p("h1",jV,ke(o.value.firstName+" "+o.value.lastName),1),p("div",zV,[HV,p("span",null,ke(o.value.location),1)])]),p("div",KV,[GV,p("div",WV,[QV,L(Br,{value:"3"})]),YV,p("div",XV,[JV,L(Br,{value:"4"})])])]),p("div",ZV,[l.value?(K(),X("button",{key:0,onClick:f[0]||(f[0]=m=>u(!0)),class:"flex items-center justify-center gap-1 rounded-md border-2 border-text/50 bg-secondary px-8 py-2 text-text/80"},n4)):Xt("",!0),l.value?Xt("",!0):(K(),X("button",{key:1,onClick:f[1]||(f[1]=m=>h(!0)),class:"flex items-center justify-center gap-1 rounded-md border-2 border-primary bg-primary px-8 py-2 text-background sm:basis-auto"},i4)),l.value?Xt("",!0):(K(),X("button",o4,l4))])])]),u4]),r.value?Xt("",!0):(K(),X("section",h4,[p("h1",null,ke(o.value.firstName+" "+o.value.lastName+"'s Item(s)"),1),L(uu,{items:i.value},null,8,["items"])]))]),p("dialog",{ref_key:"editDialog",ref:a,class:"rounded-xl backdrop:backdrop-brightness-50"},[L(AV,{onClose:f[2]||(f[2]=m=>u(!1)),useruid:s.value,profile:o.value},null,8,["useruid","profile"])],512),p("dialog",{ref_key:"messageDialog",ref:c,class:"rounded-xl p-0 backdrop:backdrop-brightness-50"},[L(xT,{"owner-id":s.value,"owner-profile":o.value,onClose:f[3]||(f[3]=m=>h(!1))},null,8,["owner-id","owner-profile"])],512)],64))}},d4={class:"flex w-full flex-col gap-1"},f4=["disabled","value"],p4=p("option",null,"Select...",-1),m4={__name:"CustomDropdown",props:{modelValue:{default:""},label:{type:String,default:""},disabled:{default:!1}},emits:["update:modelValue"],setup(t){return(e,n)=>(K(),X("div",d4,[gn(p("label",{class:"text-text"},ke(t.label),513),[[Ws,t.label]]),p("select",{disabled:t.disabled,value:t.modelValue,class:"rounded-md border-2 border-text/50 bg-white/50 focus:border-2 focus:border-primary/60 focus:bg-white/90 focus:ring-0",onChange:n[0]||(n[0]=s=>e.$emit("update:modelValue",s.target.value))},[Bf(e.$slots,"default",{},()=>[p4])],40,f4)]))}},g4=["onSubmit"],y4=p("h1",null,"Rent Item",-1),v4={class:"flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"},_4={class:"flex w-56 basis-full flex-col gap-2"},w4={class:"flex w-56 basis-full flex-col gap-2"},b4={class:"flex items-center text-sm"},I4=p("span",null,"Suggest another address",-1),E4=p("option",null,"Select...",-1),T4=p("option",null,"Cash on Delivery",-1),S4=p("option",null,"Credit Card",-1),x4={class:"mt-4 flex flex-col justify-end gap-2 sm:flex-row"},k4=p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"}," Request Rent ",-1),C4={__name:"RentItem",props:{rentRate:{default:1}},emits:["close"],setup(t,{emit:e}){const n=t,s=he(!1),r=he({startDate:h(new Date,1),endDate:h(new Date,n.rentRate+1),returnDate:h(new Date,n.rentRate+2),address:"The Chasm, Liyue",paymentOption:"Select..."}),i=gt({get(){return u(r.value.startDate)},set(m){r.value.startDate=l(m)}}),o=gt({get(){return u(r.value.endDate)},set(m){r.value.endDate=l(m)}}),a=gt({get(){return u(r.value.returnDate)},set(m){r.value.returnDate=l(m)}});function c(){e("close")}function l(m){const[v,_,S]=m.split("-");return new Date(+v,_-1,+S)}function u(m){return m.getFullYear()+"-"+f(m.getMonth()+1)+"-"+f(m.getDate())}function h(m=new Date,v){const _=new Date(m);return _.setDate(m.getDate()+v),_}function d(){r.value.returnDate=h(r.value.endDate,1)}function f(m,v=String(m)){return v.length<2?`0${v}`:v}return(m,v)=>(K(),X("form",{action:"#",onSubmit:An(c,["stop","prevent"])},[y4,p("div",v4,[p("div",_4,[L(De,{label:"Start Date","input-type":"date",modelValue:i.value,"onUpdate:modelValue":v[0]||(v[0]=_=>i.value=_)},null,8,["modelValue"]),L(De,{label:"End Date","input-type":"date",modelValue:o.value,"onUpdate:modelValue":[v[1]||(v[1]=_=>o.value=_),d]},null,8,["modelValue"]),L(De,{label:"Return Date","input-type":"date",modelValue:a.value,"onUpdate:modelValue":v[2]||(v[2]=_=>a.value=_),disabled:"true"},null,8,["modelValue"])]),p("div",w4,[L(De,{label:"Address",disabled:!s.value,modelValue:r.value.address,"onUpdate:modelValue":v[4]||(v[4]=_=>r.value.address=_)},{default:Me(()=>[p("p",b4,[gn(p("input",{type:"checkbox","onUpdate:modelValue":v[3]||(v[3]=_=>s.value=_),class:"mr-1 rounded-sm text-accent focus:ring-0"},null,512),[[lw,s.value]]),I4])]),_:1},8,["disabled","modelValue"]),L(m4,{label:"Payment Options",modelValue:r.value.paymentOption,"onUpdate:modelValue":v[5]||(v[5]=_=>r.value.paymentOption=_)},{default:Me(()=>[E4,T4,S4]),_:1},8,["modelValue"])])]),p("footer",x4,[k4,p("button",{type:"button",onClick:v[6]||(v[6]=_=>e("close")),class:"rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"}," Cancel ")])],40,g4))}},A4={class:"container mx-auto flex flex-col gap-4 px-4 py-8"},R4={class:"flex flex-row-reverse gap-2"},N4={class:"flex flex-col gap-2 lg:flex-row"},D4={class:"flex basis-3/12 flex-col bg-white p-4 shadow-sm shadow-secondary"},P4=["src"],O4={class:"flex w-full gap-2 overflow-x-auto px-1 py-2"},L4=["src","onClick"],M4={class:"flex w-full basis-6/12 flex-col justify-between bg-white p-4 shadow-sm shadow-secondary"},F4={class:"flex items-start justify-between"},U4=p("span",{class:"rounded-full bg-green-600 px-4 py-1 text-xs font-black text-white"}," AVAILABLE ",-1),$4={class:"my-4"},V4={class:"text-green-600"},B4=p("span",{class:"mr-2 text-2xl"},"₱",-1),q4={class:"flex gap-4"},j4=p("span",null,"4.0 / 5.0",-1),z4={class:"flex"},H4=p("span",{class:"material-icons text-green-600"},"location_on",-1),K4={class:"mt-2 flex flex-col"},G4={class:"flex gap-2"},W4={class:"flex flex-wrap gap-2"},Q4={class:"rounded-full border-2 border-yellow-500 bg-yellow-200 px-4 py-1 text-xs text-yellow-700"},Y4=p("span",{class:"material-icons"},"more_time",-1),X4=p("span",null,"Rent",-1),J4=[Y4,X4],Z4=p("button",{class:"flex basis-1/2 items-center justify-center gap-1 rounded-md border-2 border-text/50 bg-secondary px-8 py-2 text-text/80 transition-colors hover:bg-secondary/90 sm:basis-auto"},[p("span",{class:"material-icons"},"star"),p("span",null,"Add to Favorites")],-1),eB={class:"basis-3/12 bg-white p-4 shadow-sm shadow-secondary"},tB={key:0,class:"mb-4 flex flex-wrap items-center justify-between gap-2"},nB=["src"],sB={class:"flex flex-col"},rB={class:"font-black"},iB=p("p",{class:"text-sm"},"Item Owner",-1),oB=p("span",{class:"material-icons text-green-600"},"forum",-1),aB=p("span",null,"Chat",-1),cB=[oB,aB],lB=p("h2",null,"Lender Ratings",-1),uB={class:"mb-4 flex items-center gap-4"},hB=p("span",null,"4.0 / 5.0",-1),dB=p("h2",null,"Chat Response Rate",-1),fB={class:"mb-4 flex items-center gap-4"},pB=p("span",null,"3.0 / 5.0",-1),mB={class:"flex flex-col gap-2"},gB=zf('<div class="flex flex-col justify-between gap-4 bg-white p-4 md:flex-row md:items-center"><h1>Item Reviews and Rating</h1><div class="flex flex-wrap items-start gap-4 text-sm sm:text-base md:items-center"><div class="flex items-center gap-1"><span class="material-icons text-green-600">filter_alt</span><span>Filter:</span><select name="" id="" class="text-xs sm:text-base"><option value="">All Star</option></select></div><div class="flex items-center gap-1"><span class="material-icons text-green-600">sort</span><span>Sort:</span><select name="" id="" class="text-xs sm:text-base"><option value="">Relevance</option><option value="">???</option></select></div></div></div>',1),yB={class:"flex flex-col gap-2"},vB={class:"flex flex-col gap-2 bg-white p-4"},_B={class:"flex items-center gap-2"},wB=["src"],bB={class:"flex flex-col"},IB={class:"truncate text-gray-700"},EB=p("p",{class:"py-2"},"user review........................",-1),TB={__name:"ItemDetailView",setup(t){const e=sn(),n=Xf(),s=he(n.params.id),r=he(0),i=he(""),o=he({itemName:"",location:"",rentAmount:"",rentRate:"",images:[],description:"",ownerId:"",tags:[]}),a=he(null),c=he(null),l=gt(()=>o.value.ownerId==e.myUserUid);function u(m){m?a.value.showModal():a.value.close()}function h(m){r.value=m}function d(){c.value.showModal()}function f(){c.value.close()}return hr(async()=>{o.value=await e.loadItem(s.value),i.value=await e.loadProfile(o.value.ownerId)}),(m,v)=>(K(),X(Le,null,[p("main",A4,[p("section",R4,[L(ue(Tn),{to:"/home"},{default:Me(()=>[Xe("Close X")]),_:1})]),p("section",N4,[p("div",D4,[o.value.images.length>0?(K(),X("img",{key:0,src:o.value.images[r.value],class:"aspect-square w-full object-contain"},null,8,P4)):Xt("",!0),p("div",O4,[(K(!0),X(Le,null,Cn(o.value.images,(_,S)=>(K(),X("img",{class:kn(["aspect-square h-24 cursor-pointer object-contain ring-4",r.value==S?"ring-primary/75":"ring-transparent"]),src:_,onClick:N=>h(S),alt:"",srcset:""},null,10,L4))),256))])]),p("div",M4,[p("div",null,[p("div",F4,[p("h1",null,ke(o.value.itemName),1),U4]),p("div",$4,[p("p",V4,[B4,Xe(ke(o.value.rentAmount+" - "+o.value.rentRate),1)]),p("div",q4,[j4,L(Br,{value:"4"})]),p("div",z4,[H4,p("span",null,ke(o.value.location),1)])]),p("p",null,ke(o.value.description),1)]),p("div",K4,[p("div",G4,[Xe(" Tags: "),p("ul",W4,[(K(!0),X(Le,null,Cn(o.value.tags,_=>(K(),X("li",Q4,ke(_),1))),256))])]),p("div",{class:"mt-4 flex flex-col justify-end gap-2 sm:flex-row"},[p("button",{onClick:d,class:"flex basis-1/2 items-center justify-center gap-1 rounded-md bg-primary px-8 py-2 text-background sm:basis-auto"},J4),Z4])])]),p("div",eB,[i.value?(K(),X("div",tB,[L(ue(Tn),{to:"/profile/"+o.value.ownerId,class:"flex items-center gap-2"},{default:Me(()=>[p("img",{class:"aspect-square w-12 rounded-full",src:i.value.image,alt:"",srcset:""},null,8,nB),p("div",sB,[p("p",rB,ke(i.value.firstName+" "+i.value.lastName),1),iB])]),_:1},8,["to"]),l.value?Xt("",!0):(K(),X("button",{key:0,class:"flex items-center gap-1",onClick:v[0]||(v[0]=_=>u(!0))},cB))])):Xt("",!0),lB,p("div",uB,[hB,L(Br,{value:"4"})]),dB,p("div",fB,[pB,L(Br,{value:"3"})])])]),p("section",mB,[gB,p("section",yB,[(K(),X(Le,null,Cn(6,_=>p("article",vB,[p("div",_B,[p("img",{class:"aspect-square w-12 rounded-full",src:ue(e).loadedProfile(_).image,alt:"",srcset:""},null,8,wB),p("div",bB,[L(Br,{value:"4"}),p("span",IB,ke(ue(e).loadedProfile(_).firstName+" "+ue(e).loadedProfile(_).lastName),1)])]),EB])),64))])])]),p("dialog",{ref_key:"rentDialog",ref:c,class:"rounded-xl bg-background backdrop:backdrop-brightness-50"},[L(C4,{onClose:f,item:o.value},null,8,["item"])],512),p("dialog",{ref_key:"messageDialog",ref:a,class:"rounded-xl p-0 backdrop:backdrop-brightness-50"},[L(xT,{"owner-id":o.value.ownerId,"owner-profile":i.value,onClose:v[1]||(v[1]=_=>u(!1))},null,8,["owner-id","owner-profile"])],512)],64))}},SB={class:"container mx-auto flex h-full flex-row items-stretch gap-4 px-4 py-8"},xB={class:"flex h-full flex-col overflow-hidden"},kB=p("h1",{class:"bg-white px-6 py-4 shadow-sm shadow-secondary"}," Recent Messages ",-1),CB={key:0,class:"overflow-y-auto px-2"},AB=["src"],RB={class:"w-full truncate"},NB={class:"truncate font-black"},DB={key:1,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text/60"},PB=p("p",null,"Loading messages...",-1),OB=[PB],LB={key:2,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text/60"},MB=p("p",null,"No messages to show.",-1),FB=[MB],UB={__name:"MessagesView",setup(t){const e=sn(),n=he([]),s=he(!0);return hr(async()=>{n.value=await e.loadConversations(e.myUserUid),s.value=!1}),(r,i)=>(K(),X("main",SB,[p("aside",{class:kn(["box-border basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-secondary lg:block lg:basis-1/3",["messages"].includes(r.$route.name)?"":"hidden"])},[p("div",xB,[kB,n.value.length!=0?(K(),X("div",CB,[(K(!0),X(Le,null,Cn(n.value,o=>(K(),Xs(ue(Tn),{to:"/messages/"+o.convoId,class:"my-2 flex gap-2 rounded-lg p-2","active-class":"bg-secondary/40"},{default:Me(()=>[p("img",{src:o.participant.image,alt:"",class:"aspect-square w-12 rounded-full shadow-sm shadow-secondary"},null,8,AB),p("div",RB,[p("p",NB,ke(o.participant.firstName+" "+o.participant.lastName),1),p("p",{class:kn(["truncate text-base text-gray-800",o.isRead||o.lastSender==ue(e).myUserUid?"font-normal":"font-bold"])},ke((o.lastSender==ue(e).myUserUid?"You: ":"")+o.lastMessage),3)])]),_:2},1032,["to"]))),256))])):s.value?(K(),X("div",DB,OB)):(K(),X("div",LB,FB))])],2),p("div",{class:kn(["basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-2/3",["messages"].includes(r.$route.name)?"hidden":""])},[L(ue(ic))],2)]))}},$B={class:"container mx-auto flex flex-col gap-4 px-0 py-8 sm:px-4 lg:flex-row"},VB={class:"basis-1/3 px-4 sm:px-0"},BB={class:"box-border flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm shadow-secondary"},qB=p("h1",null,"Search for Items",-1),jB={action:"#",method:"get",class:"flex flex-col gap-2"},zB={class:"flex gap-2"},HB=p("button",{type:"submit",class:"rounded-md border-2 border-transparent bg-primary px-6 py-2 text-background"}," Search ",-1),KB={class:"flex gap-2"},GB={__name:"SearchView",setup(t){const e=sn();return(n,s)=>(K(),X("main",$B,[p("aside",VB,[p("div",BB,[qB,p("form",jB,[p("div",zB,[L(De,{placeholder:"Item name"}),HB]),p("div",KB,[L(De,{placeholder:"Min. Rate"}),L(De,{placeholder:"Max. Rate"})]),L(De,{placeholder:"Location"}),L(De,{placeholder:"Tags"})])])]),L(uu,{items:ue(e).itemsInRange(4,16),gridfor:"search",class:"basis-2/3"},null,8,["items"])]))}},WB={},QB={class:"flex h-full flex-col items-center justify-center"},YB={class:"text-gray-500"};function XB(t,e){return K(),X("div",QB,[p("p",YB,[Bf(t.$slots,"default",{},()=>[Xe("Click on a conversation to start")])])])}const JB=Th(WB,[["render",XB]]),ZB={key:0,class:"flex h-full flex-col justify-between"},eq={class:"flex items-center justify-between bg-primary/90 px-6 py-2 shadow-sm shadow-secondary"},tq={class:"flex gap-2"},nq=["src"],sq={class:"flex flex-col text-background"},rq={class:"font-black"},iq=p("div",{class:"flex items-center gap-1 truncate"},[p("div",{class:"inline-block h-2 w-2 rounded-full bg-green-300"}),p("span",null,"Online")],-1),oq={class:"flex basis-full flex-col-reverse overflow-y-auto"},aq={class:"bg-white px-6 pt-12"},cq=["src"],lq={class:"max-w-full break-words"},uq={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4"},hq=p("button",{type:"submit",class:"material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background"}," send ",-1),dq={key:1,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text/60"},fq=p("p",null,"Loading messages...",-1),pq=[fq],mq={__name:"ConversationView",setup(t){const e=Xf(),n=sn(),s=he(e.params.id),r=he(""),i=he(n.tempUserProfile),o=he({lastMessage:"Loading...",lastSender:"12",isRead:!0});async function a(l){o.value=await n.loadConversation(l),i.value=await n.loadProfile(o.value.participants.find(u=>u!=n.myUserUid)),n.loadMessages(l)}async function c(l){r.value="",n.loadedMessages.push({sender:n.myUserUid,content:l,type:"message"}),await n.sendMessage(s.value,l)}return hr(async()=>{await a(e.params.id)}),Gs(()=>e.params.id,async l=>{l&&(s.value=l,await a(l))}),(l,u)=>ue(n).loadedMessages.length!=0?(K(),X("div",ZB,[p("header",eq,[p("div",tq,[p("img",{src:i.value.image,alt:"",class:"aspect-square w-12 rounded-full"},null,8,nq),p("div",sq,[p("p",rq,ke(i.value.firstName+" "+i.value.lastName),1),iq])]),L(ue(Tn),{to:"/messages",class:"material-icons text-background"},{default:Me(()=>[Xe("close")]),_:1})]),p("main",oq,[p("div",aq,[(K(!0),X(Le,null,Cn(ue(n).loadedMessages,(h,d)=>(K(),X("div",{class:kn([h.sender==ue(n).myUserUid?"flex-row-reverse":"flex-row","my-1 flex items-end gap-2"])},[p("img",{src:h.sender==ue(n).myUserUid?ue(n).myProfile.image:i.value.image,alt:"",class:kn(["aspect-square w-12 rounded-full shadow-sm shadow-secondary",ue(n).isSamePerson(d)?"opacity-0":""])},null,10,cq),p("div",{class:kn(["max-w-md rounded-3xl px-4 py-3 shadow-sm shadow-secondary",ue(n).isSameMessageSource(d)])},[p("p",lq,ke(h.content),1)],2)],2))),256)),p("section",uq,[p("form",{class:"bg-amber-400 flex gap-2 rounded-xl bg-secondary/80 p-2 shadow-gray-400 drop-shadow-sm",onSubmit:u[1]||(u[1]=An(h=>c(r.value),["prevent"]))},[L(De,{placeholder:"Enter message...",modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=h=>r.value=h)},null,8,["modelValue"]),hq],32)])])])])):(K(),X("div",dq,pq))}},gq={class:"flex max-w-xs flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},yq={class:"flex flex-col gap-4"},vq=["onSubmit"],_q=p("button",{class:"rounded-md border-2 border-transparent bg-primary px-6 py-2 text-background"}," Reset Password ",-1),wq={__name:"ForgotPasswordView",setup(t){const e=sn(),n=he("");let s=he(""),r=he("");async function i(){try{s.value="",await e.resetPassword(n.value)&&(r.value="Check your email to reset your password")}catch(o){s.value=o}}return(o,a)=>{const c=go("RouterLink");return K(),X("div",gq,[gn(p("div",yq,[p("p",null,ke(ue(r)),1),L(c,{to:"/login",class:"rounded-md bg-primary px-6 py-2 text-center text-background"},{default:Me(()=>[Xe(" Close ")]),_:1})],512),[[Ws,ue(r)]]),gn(p("form",{onSubmit:An(i,["stop","prevent"]),class:"flex flex-col gap-2"},[L(De,{placeholder:"Email address",label:"Enter the email associated with your account.",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),"input-type":"email"},null,8,["modelValue"]),gn(p("div",{class:"rounded-md border-2 border-red-400 bg-red-300 px-4 py-2 align-middle text-sm text-red-800"},ke(ue(s)),513),[[Ws,ue(s)]]),_q,L(c,{to:"/login",class:"rounded-md border-2 border-primary bg-background px-6 py-2 text-center text-primary"},{default:Me(()=>[Xe(" Back ")]),_:1})],40,vq),[[Ws,!ue(r)]])])}}};const bq={},Iq={class:"bg-white p-8 self-center max-w-full rounded-3xl flex flex-col overflow-y-auto"},Eq=zf('<div class="overflow-y-auto max-h-96 text-justify pr-2" data-v-57730d13><h1 data-v-57730d13>Terms and Conditions</h1><h2 data-v-57730d13>Acceptance of Terms</h2><p data-v-57730d13> You accept and agree to be governed by these Terms and Conditions by accessing and using our renting web app (ItemShare). Please don&#39;t use the Platform if you disagree with these terms. </p><h2 data-v-57730d13>User Responsibility</h2><p data-v-57730d13> The Platform provides a platform for people to interact and conduct rental business. The things that are listed on the Platform are not under our ownership or control. </p><p data-v-57730d13> Users are completely responsible for their rental actions, which may include interacting with other users and negotiating and agreeing on rental terms. </p><p data-v-57730d13> Things advertised on the Platform may not be available, in good condition, of sufficient quality, or compliance with the law. Users are in charge of determining if the products are appropriate and trustworthy, and they use them at their own risk. </p><h2 data-v-57730d13>Liability</h2><p data-v-57730d13> We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or connected with the Platform, including but not limited to loss of data, loss of profit, or loss of business opportunities, to the extent permitted by applicable law. </p><p data-v-57730d13> The users undertake to hold us harmless from any claims, demands, or losses resulting from disagreements with other users or other parties. </p><h2 data-v-57730d13>Privacy and Personal Information</h2><p data-v-57730d13> We are dedicated to safeguarding our users&#39; data and privacy. For thorough information on how we gather, utilize, and protect user data, please refer to our Privacy Policy. </p><p data-v-57730d13> Although we will make a reasonable effort to protect user data, we cannot ensure the security of user data sent through the Platform. Users are aware of and agree to this risk. </p><h2 data-v-57730d13>Intellectual Property</h2><p data-v-57730d13> The Platform and its contents (aside from user-generated material) are owned by their respective owners and are covered by intellectual property rights. Without express authorization, Users agree not to use, modify, distribute, or reproduce any aspect of the Platform. </p><h2 data-v-57730d13>Modifications and Termination</h2><p data-v-57730d13> The Platform, together with these Terms and Conditions, is subject to change or termination at any moment with prior notice. </p><p data-v-57730d13> Users are recommended to often review the Terms and Conditions. Any changes made are accepted by continuing to use the Platform. </p></div>',1),Tq={class:"flex justify-end gap-2 mt-4"};function Sq(t,e){const n=go("RouterLink");return K(),X("div",Iq,[Eq,p("div",Tq,[L(n,{to:"/register",class:"py-3 px-5 text-white bg-green-800 rounded-lg"},{default:Me(()=>[Xe(" ACCEPT ")]),_:1}),L(n,{to:"/register",class:"py-3 px-5 text-white bg-red-800 rounded-lg"},{default:Me(()=>[Xe(" DECLINE ")]),_:1})])])}const xq=Th(bq,[["render",Sq],["__scopeId","data-v-57730d13"]]),kq={class:"container mx-auto flex flex-col gap-2 px-4 py-8"},Cq=p("h1",null,"New Item for Rent",-1),Aq=["onSubmit"],Rq={class:"flex basis-1/2 flex-col gap-4 px-8"},Nq={class:"flex flex-col gap-1"},Dq=p("label",null,"Description",-1),Pq={class:"flex flex-col gap-1"},Oq=p("label",null,"Tags",-1),Lq={class:"flex flex-wrap gap-2 rounded-md border-2 border-text/50 bg-white/50 p-2 focus-within:border-primary/100 focus-within:bg-white/90"},Mq={class:"flex items-center gap-1 whitespace-nowrap rounded-md bg-primary/80 py-1 pl-2 pr-1 text-background"},Fq=["onClick"],Uq={class:"flex basis-1/2 flex-col gap-4 px-8"},$q={class:"flex flex-col gap-1"},Vq=p("label",null,"Images",-1),Bq={class:"w-full overflow-x-auto rounded-md border-2 border-text/25 bg-secondary/50 p-2",id:"images"},qq={class:"flex gap-2"},jq={for:"add-image",class:"group/x relative aspect-square h-40 rounded-md border-2 border-dashed border-text/40 px-2 py-4 text-center hover:border-primary"},zq=p("p",{class:"material-icons text-6xl text-text/50 group-hover/x:text-primary"}," add_photo_alternate ",-1),Hq=p("p",{class:"text-sm text-text/75 group-hover/x:text-primary"}," Browse for an image to upload. ",-1),Kq=["src","onClick"],Gq={class:"flex flex-col gap-4 sm:flex-row"},Wq=p("footer",{class:"mt-4 flex flex-col justify-end gap-2 md:flex-row"},[p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-8 py-2 text-white"}," Create "),p("button",{type:"button",class:"rounded-md border-2 border-green-800 bg-white px-8 py-2 text-green-800"}," Cancel ")],-1),Qq={__name:"CreateItemView",setup(t){const e=oc(),n=sn(),s=he([]),r=he(""),i=he(""),o=he({itemName:"",location:"",rentAmount:"",rentRate:"",description:"",imageFiles:[],tags:[]});function a(f){for(let m of f.target.files){let v=new FileReader;o.value.imageFiles.push(m),v.readAsDataURL(m),v.onload=_=>{s.value.push(_.target.result)}}}function c(f){s.value.splice(f,1),o.value.imageFiles.splice(f,1)}function l(f){o.value.tags.splice(f,1)}function u(){i.value&&(o.value.tags.includes(i.value)||o.value.tags.push(i.value),i.value="")}function h(){i.value.endsWith(",")&&(i.value=i.value.slice(0,-1),u())}async function d(){r.value="";try{await n.createItem(o.value)&&e.push("/home")}catch(f){r.value=f}}return(f,m)=>(K(),X("main",kq,[Cq,p("form",{onSubmit:An(d,["stop","prevent"]),class:"flex flex-col gap-4 divide-x-0 divide-secondary bg-white py-8 shadow-sm shadow-secondary md:flex-row md:gap-0 md:divide-x-2"},[p("div",Rq,[L(De,{modelValue:o.value.itemName,"onUpdate:modelValue":m[0]||(m[0]=v=>o.value.itemName=v),label:"Item Name",placeholder:"A name for the item..."},null,8,["modelValue"]),p("div",Nq,[Dq,gn(p("textarea",{"onUpdate:modelValue":m[1]||(m[1]=v=>o.value.description=v),name:"description",class:"rounded-md border-2 border-text/50 bg-white/50 placeholder:text-sm placeholder:text-text/60 focus:border-primary/100 focus:bg-white/90 focus:ring-0 focus:placeholder:text-text/50",placeholder:"A description on the item..."},null,512),[[$g,o.value.description]])]),p("div",Pq,[Oq,p("div",Lq,[(K(!0),X(Le,null,Cn(o.value.tags,(v,_)=>(K(),X("div",Mq,[p("span",null,ke(v),1),p("button",{class:"material-icons aspect-square rounded-lg bg-background/10 px-1 text-xs font-bold text-background hover:bg-accent hover:text-text",onClick:S=>l(_),type:"button"}," close ",8,Fq)]))),256)),gn(p("input",{type:"text",placeholder:"Add a tag...",onInput:m[2]||(m[2]=v=>h()),onKeydown:m[3]||(m[3]=a1(An(v=>u(),["prevent"]),["enter"])),onFocusout:m[4]||(m[4]=v=>u()),"onUpdate:modelValue":m[5]||(m[5]=v=>i.value=v),class:"flex-1 border-none bg-transparent px-1 py-1 focus:ring-0"},null,544),[[$g,i.value]])])]),L(De,{modelValue:o.value.location,"onUpdate:modelValue":m[6]||(m[6]=v=>o.value.location=v),label:"Location",placeholder:"Preferred area to deliver or retrieve..."},null,8,["modelValue"])]),p("div",Uq,[p("div",$q,[Vq,p("div",Bq,[p("div",qq,[p("label",jq,[zq,Hq,p("input",{type:"file",id:"add-image",accept:"image/*",onChange:m[7]||(m[7]=v=>a(v)),class:"absolute left-0 top-0 block h-full w-full cursor-pointer opacity-0",multiple:""},null,32)]),(K(!0),X(Le,null,Cn(s.value,(v,_)=>(K(),X("img",{class:"aspect-square h-40 cursor-pointer rounded-md object-contain ring-4 ring-transparent hover:opacity-60 hover:ring-primary",src:v,alt:"",onClick:S=>c(_),srcset:""},null,8,Kq))),256))])])]),p("div",Gq,[L(De,{modelValue:o.value.rentAmount,"onUpdate:modelValue":m[8]||(m[8]=v=>o.value.rentAmount=v),placeholder:"1,500",label:"Rent Amount",class:"basis-1/2"},null,8,["modelValue"]),L(De,{modelValue:o.value.rentRate,"onUpdate:modelValue":m[9]||(m[9]=v=>o.value.rentRate=v),label:"Rent Rate",class:"basis-1/2",placeholder:"per day/week/month"},null,8,["modelValue"])]),gn(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},ke(r.value),513),[[Ws,r.value]]),Wq])],40,Aq)]))}},Yq={class:"flex flex-col gap-4 rounded-xl bg-text/25 p-8"},Xq=p("h1",{class:"text-white"},"The Team",-1),Jq={class:"grid grid-cols-2 justify-around gap-8"},Zq={class:"flex flex-col items-center gap-2"},ej=["src"],tj={class:"flex flex-col text-background"},nj={class:"font-black"},sj={__name:"AboutView",setup(t){const e=he([{image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/devs%2Fciann.jpg?alt=media&token=76a72dd1-d5f5-4989-b83b-6d5899212ab8",name:"Ciann Renel Cazar"},{image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/devs%2Fabimael.jpg?alt=media&token=3136962d-40f5-4a09-ae5c-5913efddd1fe",name:"Abimael Dadap"},{image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/devs%2Fhans.jpg?alt=media&token=a8b46e11-3a86-47af-9094-d75396490773",name:"Hans Legaspi"},{image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/devs%2Fhanz.jpg?alt=media&token=3300883e-0fe9-4334-bd45-dcabe374b728",name:"Hanz Felix Tumulak"}]);return(n,s)=>(K(),X("div",Yq,[Xq,p("div",Jq,[(K(!0),X(Le,null,Cn(e.value,r=>(K(),X("div",Zq,[p("img",{src:r.image,alt:"",class:"aspect-square w-32 rounded-full"},null,8,ej),p("div",tj,[p("p",nj,ke(r.name),1)])]))),256))])]))}},kT=_k({history:F1("/itemshare/"),routes:[{path:"/",component:LU,meta:{requiresAuth:!1},children:[{path:"",name:"getStarted",component:jU},{path:"/login",name:"login",component:JU},{path:"/register",name:"register",component:u$},{path:"/terms-and-conditions",name:"termsAndConditions",component:xq},{path:"/forgot-password",name:"forgotPassword",component:wq},{path:"/about",name:"about",component:sj}]},{path:"/home",component:sV,meta:{requiresAuth:!0},children:[{path:"",name:"home",component:gV},{path:"/profile/:id",name:"profile",component:a_},{path:"/profile",name:"myProfile",component:a_},{path:"/messages",component:UB,children:[{path:"",name:"messages",component:JB},{path:"/messages/:id",name:"conversation",component:mq}]},{path:"/item/:id",name:"itemDetail",component:TB},{path:"/search",name:"search",component:GB},{path:"/create-item",name:"createItem",component:Qq}]}],scrollBehavior(t,e,n){const s=document.getElementsByClassName("overflow-y-auto")[0];return s&&s.scrollTo(0,0),window.scrollTo(0,0),n||{top:0}}});kT.beforeEach((t,e,n)=>{const s=sn();t.meta.requiresAuth&&!s.loggedInUser?n("/"):!t.meta.requiresAuth&&s.loggedInUser?n("/home"):n()});const Jm=u1(bk);Jm.use(f1());Jm.use(kT);Jm.mount("#app");
