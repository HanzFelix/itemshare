(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gp(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ue={},Wi=[],On=()=>{},sS=()=>!1,iS=/^on[^a-z]/,eh=t=>iS.test(t),yp=t=>t.startsWith("onUpdate:"),_t=Object.assign,vp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oS=Object.prototype.hasOwnProperty,xe=(t,e)=>oS.call(t,e),re=Array.isArray,Qi=t=>Rc(t)==="[object Map]",Po=t=>Rc(t)==="[object Set]",ay=t=>Rc(t)==="[object Date]",de=t=>typeof t=="function",ht=t=>typeof t=="string",za=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",ww=t=>Le(t)&&de(t.then)&&de(t.catch),bw=Object.prototype.toString,Rc=t=>bw.call(t),aS=t=>Rc(t).slice(8,-1),Iw=t=>Rc(t)==="[object Object]",_p=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ul=gp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),th=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cS=/-(\w)/g,ar=th(t=>t.replace(cS,(e,n)=>n?n.toUpperCase():"")),lS=/\B([A-Z])/g,wi=th(t=>t.replace(lS,"-$1").toLowerCase()),nh=th(t=>t.charAt(0).toUpperCase()+t.slice(1)),pd=th(t=>t?`on${nh(t)}`:""),Ha=(t,e)=>!Object.is(t,e),$l=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},au=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let cy;const Xd=()=>cy||(cy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wp(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ht(r)?fS(r):wp(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ht(t))return t;if(Le(t))return t}}const uS=/;(?![^(]*\))/g,hS=/:([^]+)/,dS=/\/\*[^]*?\*\//g;function fS(t){const e={};return t.replace(dS,"").split(uS).forEach(n=>{if(n){const r=n.split(hS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ln(t){let e="";if(ht(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Ln(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mS=gp(pS);function Ew(t){return!!t||t===""}function gS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Nc(t[r],e[r]);return n}function Nc(t,e){if(t===e)return!0;let n=ay(t),r=ay(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=za(t),r=za(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?gS(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Nc(t[o],e[o]))return!1}}return String(t)===String(e)}function bp(t,e){return t.findIndex(n=>Nc(n,e))}const Oe=t=>ht(t)?t:t==null?"":re(t)||Le(t)&&(t.toString===bw||!de(t.toString))?JSON.stringify(t,Tw,2):String(t),Tw=(t,e)=>e&&e.__v_isRef?Tw(t,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Po(e)?{[`Set(${e.size})`]:[...e.values()]}:Le(e)&&!re(e)&&!Iw(e)?String(e):e;let un;class xw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=un;try{return un=this,e()}finally{un=n}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sw(t){return new xw(t)}function yS(t,e=un){e&&e.active&&e.effects.push(t)}function Aw(){return un}function vS(t){un&&un.cleanups.push(t)}const Ip=t=>{const e=new Set(t);return e.w=0,e.n=0,e},kw=t=>(t.w&rs)>0,Cw=t=>(t.n&rs)>0,_S=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rs},wS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];kw(s)&&!Cw(s)?s.delete(t):e[n++]=s,s.w&=~rs,s.n&=~rs}e.length=n}},lu=new WeakMap;let ma=0,rs=1;const Jd=30;let Nn;const Gs=Symbol(""),Zd=Symbol("");class Ep{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yS(this,r)}run(){if(!this.active)return this.fn();let e=Nn,n=Zr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nn,Nn=this,Zr=!0,rs=1<<++ma,ma<=Jd?_S(this):ly(this),this.fn()}finally{ma<=Jd&&wS(this),rs=1<<--ma,Nn=this.parent,Zr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nn===this?this.deferStop=!0:this.active&&(ly(this),this.onStop&&this.onStop(),this.active=!1)}}function ly(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Zr=!0;const Rw=[];function Do(){Rw.push(Zr),Zr=!1}function Oo(){const t=Rw.pop();Zr=t===void 0?!0:t}function rn(t,e,n){if(Zr&&Nn){let r=lu.get(t);r||lu.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ip()),Nw(s)}}function Nw(t,e){let n=!1;ma<=Jd?Cw(t)||(t.n|=rs,n=!kw(t)):n=!t.has(Nn),n&&(t.add(Nn),Nn.deps.push(t))}function br(t,e,n,r,s,i){const o=lu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?_p(n)&&a.push(o.get("length")):(a.push(o.get(Gs)),Qi(t)&&a.push(o.get(Zd)));break;case"delete":re(t)||(a.push(o.get(Gs)),Qi(t)&&a.push(o.get(Zd)));break;case"set":Qi(t)&&a.push(o.get(Gs));break}if(a.length===1)a[0]&&ef(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ef(Ip(c))}}function ef(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&uy(r);for(const r of n)r.computed||uy(r)}function uy(t,e){(t!==Nn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function bS(t,e){var n;return(n=lu.get(t))==null?void 0:n.get(e)}const IS=gp("__proto__,__v_isRef,__isVue"),Pw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(za)),ES=Tp(),TS=Tp(!1,!0),xS=Tp(!0),hy=SS();function SS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)rn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Do();const r=Se(this)[e].apply(this,n);return Oo(),r}}),t}function AS(t){const e=Se(this);return rn(e,"has",t),e.hasOwnProperty(t)}function Tp(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?qS:Fw:e?Mw:Lw).get(r))return r;const o=re(r);if(!t){if(o&&xe(hy,s))return Reflect.get(hy,s,i);if(s==="hasOwnProperty")return AS}const a=Reflect.get(r,s,i);return(za(s)?Pw.has(s):IS(s))||(t||rn(r,"get",s),e)?a:nt(a)?o&&_p(s)?a:a.value:Le(a)?t?Uw(a):Lo(a):a}}const kS=Dw(),CS=Dw(!0);function Dw(t=!1){return function(n,r,s,i){let o=n[r];if(oo(o)&&nt(o)&&!nt(s))return!1;if(!t&&(!uu(s)&&!oo(s)&&(o=Se(o),s=Se(s)),!re(n)&&nt(o)&&!nt(s)))return o.value=s,!0;const a=re(n)&&_p(r)?Number(r)<n.length:xe(n,r),c=Reflect.set(n,r,s,i);return n===Se(i)&&(a?Ha(s,o)&&br(n,"set",r,s):br(n,"add",r,s)),c}}function RS(t,e){const n=xe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&br(t,"delete",e,void 0),r}function NS(t,e){const n=Reflect.has(t,e);return(!za(e)||!Pw.has(e))&&rn(t,"has",e),n}function PS(t){return rn(t,"iterate",re(t)?"length":Gs),Reflect.ownKeys(t)}const Ow={get:ES,set:kS,deleteProperty:RS,has:NS,ownKeys:PS},DS={get:xS,set(t,e){return!0},deleteProperty(t,e){return!0}},OS=_t({},Ow,{get:TS,set:CS}),xp=t=>t,rh=t=>Reflect.getPrototypeOf(t);function hl(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(e!==i&&rn(s,"get",e),rn(s,"get",i));const{has:o}=rh(s),a=r?xp:n?kp:Ka;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function dl(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(t!==s&&rn(r,"has",t),rn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function fl(t,e=!1){return t=t.__v_raw,!e&&rn(Se(t),"iterate",Gs),Reflect.get(t,"size",t)}function dy(t){t=Se(t);const e=Se(this);return rh(e).has.call(e,t)||(e.add(t),br(e,"add",t,t)),this}function fy(t,e){e=Se(e);const n=Se(this),{has:r,get:s}=rh(n);let i=r.call(n,t);i||(t=Se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ha(e,o)&&br(n,"set",t,e):br(n,"add",t,e),this}function py(t){const e=Se(this),{has:n,get:r}=rh(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&br(e,"delete",t,void 0),i}function my(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&br(t,"clear",void 0,void 0),n}function pl(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Se(o),c=e?xp:t?kp:Ka;return!t&&rn(a,"iterate",Gs),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ml(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Qi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?xp:e?kp:Ka;return!e&&rn(i,"iterate",c?Zd:Gs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Lr(t){return function(...e){return t==="delete"?!1:this}}function LS(){const t={get(i){return hl(this,i)},get size(){return fl(this)},has:dl,add:dy,set:fy,delete:py,clear:my,forEach:pl(!1,!1)},e={get(i){return hl(this,i,!1,!0)},get size(){return fl(this)},has:dl,add:dy,set:fy,delete:py,clear:my,forEach:pl(!1,!0)},n={get(i){return hl(this,i,!0)},get size(){return fl(this,!0)},has(i){return dl.call(this,i,!0)},add:Lr("add"),set:Lr("set"),delete:Lr("delete"),clear:Lr("clear"),forEach:pl(!0,!1)},r={get(i){return hl(this,i,!0,!0)},get size(){return fl(this,!0)},has(i){return dl.call(this,i,!0)},add:Lr("add"),set:Lr("set"),delete:Lr("delete"),clear:Lr("clear"),forEach:pl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ml(i,!1,!1),n[i]=ml(i,!0,!1),e[i]=ml(i,!1,!0),r[i]=ml(i,!0,!0)}),[t,n,e,r]}const[MS,FS,US,$S]=LS();function Sp(t,e){const n=e?t?$S:US:t?FS:MS;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const VS={get:Sp(!1,!1)},BS={get:Sp(!1,!0)},jS={get:Sp(!0,!1)},Lw=new WeakMap,Mw=new WeakMap,Fw=new WeakMap,qS=new WeakMap;function zS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function HS(t){return t.__v_skip||!Object.isExtensible(t)?0:zS(aS(t))}function Lo(t){return oo(t)?t:Ap(t,!1,Ow,VS,Lw)}function KS(t){return Ap(t,!1,OS,BS,Mw)}function Uw(t){return Ap(t,!0,DS,jS,Fw)}function Ap(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=HS(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function es(t){return oo(t)?es(t.__v_raw):!!(t&&t.__v_isReactive)}function oo(t){return!!(t&&t.__v_isReadonly)}function uu(t){return!!(t&&t.__v_isShallow)}function $w(t){return es(t)||oo(t)}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function sh(t){return au(t,"__v_skip",!0),t}const Ka=t=>Le(t)?Lo(t):t,kp=t=>Le(t)?Uw(t):t;function Vw(t){Zr&&Nn&&(t=Se(t),Nw(t.dep||(t.dep=Ip())))}function Bw(t,e){t=Se(t);const n=t.dep;n&&ef(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function Ee(t){return jw(t,!1)}function GS(t){return jw(t,!0)}function jw(t,e){return nt(t)?t:new WS(t,e)}class WS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:Ka(e)}get value(){return Vw(this),this._value}set value(e){const n=this.__v_isShallow||uu(e)||oo(e);e=n?e:Se(e),Ha(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ka(e),Bw(this))}}function ce(t){return nt(t)?t.value:t}const QS={get:(t,e,n)=>ce(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qw(t){return es(t)?t:new Proxy(t,QS)}function YS(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=JS(t,n);return e}class XS{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return bS(Se(this._object),this._key)}}function JS(t,e,n){const r=t[e];return nt(r)?r:new XS(t,e,n)}class ZS{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ep(e,()=>{this._dirty||(this._dirty=!0,Bw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return Vw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function eA(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=On):(r=t.get,s=t.set),new ZS(r,s,i||!s,n)}function ts(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ih(i,e,n)}return s}function Mn(t,e,n,r){if(de(t)){const i=ts(t,e,n,r);return i&&ww(i)&&i.catch(o=>{ih(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Mn(t[i],e,n,r));return s}function ih(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ts(c,null,10,[t,o,a]);return}}tA(t,n,s,r)}function tA(t,e,n,r=!0){console.error(t)}let Ga=!1,tf=!1;const Lt=[];let Hn=0;const Yi=[];let fr=null,Rs=0;const zw=Promise.resolve();let Cp=null;function Rp(t){const e=Cp||zw;return t?e.then(this?t.bind(this):t):e}function nA(t){let e=Hn+1,n=Lt.length;for(;e<n;){const r=e+n>>>1;Wa(Lt[r])<t?e=r+1:n=r}return e}function Np(t){(!Lt.length||!Lt.includes(t,Ga&&t.allowRecurse?Hn+1:Hn))&&(t.id==null?Lt.push(t):Lt.splice(nA(t.id),0,t),Hw())}function Hw(){!Ga&&!tf&&(tf=!0,Cp=zw.then(Gw))}function rA(t){const e=Lt.indexOf(t);e>Hn&&Lt.splice(e,1)}function sA(t){re(t)?Yi.push(...t):(!fr||!fr.includes(t,t.allowRecurse?Rs+1:Rs))&&Yi.push(t),Hw()}function gy(t,e=Ga?Hn+1:0){for(;e<Lt.length;e++){const n=Lt[e];n&&n.pre&&(Lt.splice(e,1),e--,n())}}function Kw(t){if(Yi.length){const e=[...new Set(Yi)];if(Yi.length=0,fr){fr.push(...e);return}for(fr=e,fr.sort((n,r)=>Wa(n)-Wa(r)),Rs=0;Rs<fr.length;Rs++)fr[Rs]();fr=null,Rs=0}}const Wa=t=>t.id==null?1/0:t.id,iA=(t,e)=>{const n=Wa(t)-Wa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gw(t){tf=!1,Ga=!0,Lt.sort(iA);const e=On;try{for(Hn=0;Hn<Lt.length;Hn++){const n=Lt[Hn];n&&n.active!==!1&&ts(n,null,14)}}finally{Hn=0,Lt.length=0,Kw(),Ga=!1,Cp=null,(Lt.length||Yi.length)&&Gw()}}function oA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ue;d&&(s=n.map(f=>ht(f)?f.trim():f)),h&&(s=n.map(cu))}let a,c=r[a=pd(e)]||r[a=pd(ar(e))];!c&&i&&(c=r[a=pd(wi(e))]),c&&Mn(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mn(l,t,6,s)}}function Ww(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const c=l=>{const u=Ww(l,e,!0);u&&(a=!0,_t(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Le(t)&&r.set(t,null),null):(re(i)?i.forEach(c=>o[c]=null):_t(o,i),Le(t)&&r.set(t,o),o)}function oh(t,e){return!t||!eh(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,wi(e))||xe(t,e))}let kt=null,Qw=null;function hu(t){const e=kt;return kt=t,Qw=t&&t.type.__scopeId||null,e}function Ge(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ay(-1);const i=hu(e);let o;try{o=t(...s)}finally{hu(i),r._d&&Ay(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function md(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=t;let _,T;const A=hu(t);try{if(n.shapeFlag&4){const E=s||r;_=zn(u.call(E,E,h,i,f,d,g)),T=c}else{const E=e;_=zn(E.length>1?E(i,{attrs:c,slots:a,emit:l}):E(i,null)),T=e.props?c:aA(c)}}catch(E){Sa.length=0,ih(E,t,1),_=H(ss)}let k=_;if(T&&v!==!1){const E=Object.keys(T),{shapeFlag:L}=k;E.length&&L&7&&(o&&E.some(yp)&&(T=cA(T,o)),k=ao(k,T))}return n.dirs&&(k=ao(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),_=k,hu(A),_}const aA=t=>{let e;for(const n in t)(n==="class"||n==="style"||eh(n))&&((e||(e={}))[n]=t[n]);return e},cA=(t,e)=>{const n={};for(const r in t)(!yp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function lA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yy(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!oh(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?yy(r,o,l):!0:!!o;return!1}function yy(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!oh(n,i))return!0}return!1}function uA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hA=t=>t.__isSuspense;function dA(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):sA(t)}const gl={};function Ws(t,e,n){return Yw(t,e,n)}function Yw(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ue){var a;const c=Aw()===((a=yt)==null?void 0:a.scope)?yt:null;let l,u=!1,h=!1;if(nt(t)?(l=()=>t.value,u=uu(t)):es(t)?(l=()=>t,r=!0):re(t)?(h=!0,u=t.some(E=>es(E)||uu(E)),l=()=>t.map(E=>{if(nt(E))return E.value;if(es(E))return Vs(E);if(de(E))return ts(E,c,2)})):de(t)?e?l=()=>ts(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Mn(t,c,3,[f])}:l=On,e&&r){const E=l;l=()=>Vs(E())}let d,f=E=>{d=A.onStop=()=>{ts(E,c,4)}},g;if(Xa)if(f=On,e?n&&Mn(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const E=sk();g=E.__watcherHandles||(E.__watcherHandles=[])}else return On;let v=h?new Array(t.length).fill(gl):gl;const _=()=>{if(A.active)if(e){const E=A.run();(r||u||(h?E.some((L,U)=>Ha(L,v[U])):Ha(E,v)))&&(d&&d(),Mn(e,c,3,[E,v===gl?void 0:h&&v[0]===gl?[]:v,f]),v=E)}else A.run()};_.allowRecurse=!!e;let T;s==="sync"?T=_:s==="post"?T=()=>Gt(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),T=()=>Np(_));const A=new Ep(l,T);e?n?_():v=A.run():s==="post"?Gt(A.run.bind(A),c&&c.suspense):A.run();const k=()=>{A.stop(),c&&c.scope&&vp(c.scope.effects,A)};return g&&g.push(k),k}function fA(t,e,n){const r=this.proxy,s=ht(t)?t.includes(".")?Xw(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=yt;co(this);const a=Yw(s,i.bind(r),n);return o?co(o):Qs(),a}function Xw(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vs(t,e){if(!Le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))Vs(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)Vs(t[n],e);else if(Po(t)||Qi(t))t.forEach(n=>{Vs(n,e)});else if(Iw(t))for(const n in t)Vs(t[n],e);return t}function _n(t,e){const n=kt;if(n===null)return t;const r=hh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ue]=e[i];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&Vs(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function xs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Do(),Mn(c,n,8,[t.el,a,t,e]),Oo())}}function Jw(t,e){return de(t)?(()=>_t({name:t.name},e,{setup:t}))():t}const Ta=t=>!!t.type.__asyncLoader,Zw=t=>t.type.__isKeepAlive;function pA(t,e){eb(t,"a",e)}function mA(t,e){eb(t,"da",e)}function eb(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ah(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zw(s.parent.vnode)&&gA(r,e,n,s),s=s.parent}}function gA(t,e,n,r){const s=ah(e,t,r,!0);nb(()=>{vp(r[e],s)},n)}function ah(t,e,n=yt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Do(),co(n);const a=Mn(e,n,t,o);return Qs(),Oo(),a});return r?s.unshift(i):s.push(i),i}}const kr=t=>(e,n=yt)=>(!Xa||t==="sp")&&ah(t,(...r)=>e(...r),n),tb=kr("bm"),bi=kr("m"),yA=kr("bu"),vA=kr("u"),_A=kr("bum"),nb=kr("um"),wA=kr("sp"),bA=kr("rtg"),IA=kr("rtc");function EA(t,e=yt){ah("ec",t,e)}const rb="components";function Pc(t,e){return xA(rb,t,!0,e)||t}const TA=Symbol.for("v-ndc");function xA(t,e,n=!0,r=!1){const s=kt||yt;if(s){const i=s.type;if(t===rb){const a=tk(i,!1);if(a&&(a===e||a===ar(e)||a===nh(ar(e))))return i}const o=vy(s[t]||i[t],e)||vy(s.appContext[t],e);return!o&&r?i:o}}function vy(t,e){return t&&(t[e]||t[ar(e)]||t[nh(ar(e))])}function rr(t,e,n,r){let s;const i=n&&n[r];if(re(t)||ht(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function sb(t,e,n={},r,s){if(kt.isCE||kt.parent&&Ta(kt.parent)&&kt.parent.isCE)return e!=="default"&&(n.name=e),H("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),se();const o=i&&ib(i(n)),a=Ii(Ke,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ib(t){return t.some(e=>fu(e)?!(e.type===ss||e.type===Ke&&!ib(e.children)):!0)?t:null}const nf=t=>t?gb(t)?hh(t)||t.proxy:nf(t.parent):null,xa=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nf(t.parent),$root:t=>nf(t.root),$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>Np(t.update)),$nextTick:t=>t.n||(t.n=Rp.bind(t.proxy)),$watch:t=>fA.bind(t)}),gd=(t,e)=>t!==Ue&&!t.__isScriptSetup&&xe(t,e),SA={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gd(r,e))return o[e]=1,r[e];if(s!==Ue&&xe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&xe(l,e))return o[e]=3,i[e];if(n!==Ue&&xe(n,e))return o[e]=4,n[e];rf&&(o[e]=0)}}const u=xa[e];let h,d;if(u)return e==="$attrs"&&rn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ue&&xe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,xe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gd(s,e)?(s[e]=n,!0):r!==Ue&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ue&&xe(t,o)||gd(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(xa,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _y(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rf=!0;function AA(t){const e=Pp(t),n=t.proxy,r=t.ctx;rf=!1,e.beforeCreate&&wy(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:_,beforeDestroy:T,beforeUnmount:A,destroyed:k,unmounted:E,render:L,renderTracked:U,renderTriggered:Y,errorCaptured:G,serverPrefetch:W,expose:le,inheritAttrs:Te,components:Fe,directives:De,filters:$t}=e;if(l&&kA(l,r,null),o)for(const pe in o){const ye=o[pe];de(ye)&&(r[pe]=ye.bind(n))}if(s){const pe=s.call(n,n);Le(pe)&&(t.data=Lo(pe))}if(rf=!0,i)for(const pe in i){const ye=i[pe],Tt=de(ye)?ye.bind(n,n):de(ye.get)?ye.get.bind(n,n):On,on=!de(ye)&&de(ye.set)?ye.set.bind(n):On,Kt=dn({get:Tt,set:on});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:ot=>Kt.value=ot})}if(a)for(const pe in a)ob(a[pe],r,n,pe);if(c){const pe=de(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ye=>{Vl(ye,pe[ye])})}u&&wy(u,t,"c");function oe(pe,ye){re(ye)?ye.forEach(Tt=>pe(Tt.bind(n))):ye&&pe(ye.bind(n))}if(oe(tb,h),oe(bi,d),oe(yA,f),oe(vA,g),oe(pA,v),oe(mA,_),oe(EA,G),oe(IA,U),oe(bA,Y),oe(_A,A),oe(nb,E),oe(wA,W),re(le))if(le.length){const pe=t.exposed||(t.exposed={});le.forEach(ye=>{Object.defineProperty(pe,ye,{get:()=>n[ye],set:Tt=>n[ye]=Tt})})}else t.exposed||(t.exposed={});L&&t.render===On&&(t.render=L),Te!=null&&(t.inheritAttrs=Te),Fe&&(t.components=Fe),De&&(t.directives=De)}function kA(t,e,n=On){re(t)&&(t=sf(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=In(s.from||r,s.default,!0):i=In(s.from||r):i=In(s),nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wy(t,e,n){Mn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ob(t,e,n,r){const s=r.includes(".")?Xw(n,r):()=>n[r];if(ht(t)){const i=e[t];de(i)&&Ws(s,i)}else if(de(t))Ws(s,t.bind(n));else if(Le(t))if(re(t))t.forEach(i=>ob(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Ws(s,i,t)}}function Pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>du(c,l,o,!0)),du(c,e,o)),Le(e)&&i.set(e,c),c}function du(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&du(t,i,n,!0),s&&s.forEach(o=>du(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=CA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const CA={data:by,props:Iy,emits:Iy,methods:ga,computed:ga,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:ga,directives:ga,watch:NA,provide:by,inject:RA};function by(t,e){return e?t?function(){return _t(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function RA(t,e){return ga(sf(t),sf(e))}function sf(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function ga(t,e){return t?_t(Object.create(null),t,e):e}function Iy(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:_t(Object.create(null),_y(t),_y(e??{})):e}function NA(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const r in e)n[r]=Bt(t[r],e[r]);return n}function ab(){return{app:null,config:{isNativeTag:sS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let PA=0;function DA(t,e){return function(r,s=null){de(r)||(r=_t({},r)),s!=null&&!Le(s)&&(s=null);const i=ab(),o=new Set;let a=!1;const c=i.app={_uid:PA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ik,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&de(l.install)?(o.add(l),l.install(c,...u)):de(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=H(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,hh(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Qa=c;try{return l()}finally{Qa=null}}};return c}}let Qa=null;function Vl(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=yt||kt;if(r||Qa){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qa._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function OA(){return!!(yt||kt||Qa)}function LA(t,e,n,r=!1){const s={},i={};au(i,lh,1),t.propsDefaults=Object.create(null),cb(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:KS(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function MA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(oh(t.emitsOptions,d))continue;const f=e[d];if(c)if(xe(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const g=ar(d);s[g]=of(c,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{cb(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!xe(e,h)&&((u=wi(h))===h||!xe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=of(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!xe(e,h))&&(delete i[h],l=!0)}l&&br(t,"set","$attrs")}function cb(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ul(c))continue;const l=e[c];let u;s&&xe(s,u=ar(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:oh(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Se(n),l=a||Ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=of(s,c,h,l[h],t,!xe(l,h))}}return o}function of(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(co(s),r=l[n]=c.call(null,e),Qs())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===wi(n))&&(r=!0))}return r}function lb(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!de(t)){const u=h=>{c=!0;const[d,f]=lb(h,e,!0);_t(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Le(t)&&r.set(t,Wi),Wi;if(re(i))for(let u=0;u<i.length;u++){const h=ar(i[u]);Ey(h)&&(o[h]=Ue)}else if(i)for(const u in i){const h=ar(u);if(Ey(h)){const d=i[u],f=o[h]=re(d)||de(d)?{type:d}:_t({},d);if(f){const g=Sy(Boolean,f.type),v=Sy(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||xe(f,"default"))&&a.push(h)}}}const l=[o,a];return Le(t)&&r.set(t,l),l}function Ey(t){return t[0]!=="$"}function Ty(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function xy(t,e){return Ty(t)===Ty(e)}function Sy(t,e){return re(e)?e.findIndex(n=>xy(n,t)):de(e)&&xy(e,t)?0:-1}const ub=t=>t[0]==="_"||t==="$stable",Dp=t=>re(t)?t.map(zn):[zn(t)],FA=(t,e,n)=>{if(e._n)return e;const r=Ge((...s)=>Dp(e(...s)),n);return r._c=!1,r},hb=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ub(s))continue;const i=t[s];if(de(i))e[s]=FA(s,i,r);else if(i!=null){const o=Dp(i);e[s]=()=>o}}},db=(t,e)=>{const n=Dp(e);t.slots.default=()=>n},UA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Se(e),au(e,"_",n)):hb(e,t.slots={})}else t.slots={},e&&db(t,e);au(t.slots,lh,1)},$A=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_t(s,e),!n&&a===1&&delete s._):(i=!e.$stable,hb(e,s)),o=e}else e&&(db(t,e),o={default:1});if(i)for(const a in s)!ub(a)&&!(a in o)&&delete s[a]};function af(t,e,n,r,s=!1){if(re(t)){t.forEach((d,f)=>af(d,e&&(re(e)?e[f]:e),n,r,s));return}if(Ta(r)&&!s)return;const i=r.shapeFlag&4?hh(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ht(l)?(u[l]=null,xe(h,l)&&(h[l]=null)):nt(l)&&(l.value=null)),de(c))ts(c,a,12,[o,u]);else{const d=ht(c),f=nt(c);if(d||f){const g=()=>{if(t.f){const v=d?xe(h,c)?h[c]:u[c]:c.value;s?re(v)&&vp(v,i):re(v)?v.includes(i)||v.push(i):d?(u[c]=[i],xe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,xe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Gt(g,n)):g()}}}const Gt=dA;function VA(t){return BA(t)}function BA(t,e){const n=Xd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=On,insertStaticContent:g}=t,v=(m,y,w,x=null,C=null,N=null,z=!1,M=null,F=!!y.dynamicChildren)=>{if(m===y)return;m&&!Zo(m,y)&&(x=S(m),ot(m,C,N,!0),m=null),y.patchFlag===-2&&(F=!1,y.dynamicChildren=null);const{type:D,ref:te,shapeFlag:Q}=y;switch(D){case ch:_(m,y,w,x);break;case ss:T(m,y,w,x);break;case Bl:m==null&&A(y,w,x,z);break;case Ke:Fe(m,y,w,x,C,N,z,M,F);break;default:Q&1?L(m,y,w,x,C,N,z,M,F):Q&6?De(m,y,w,x,C,N,z,M,F):(Q&64||Q&128)&&D.process(m,y,w,x,C,N,z,M,F,$)}te!=null&&C&&af(te,m&&m.ref,N,y||m,!y)},_=(m,y,w,x)=>{if(m==null)r(y.el=a(y.children),w,x);else{const C=y.el=m.el;y.children!==m.children&&l(C,y.children)}},T=(m,y,w,x)=>{m==null?r(y.el=c(y.children||""),w,x):y.el=m.el},A=(m,y,w,x)=>{[m.el,m.anchor]=g(m.children,y,w,x,m.el,m.anchor)},k=({el:m,anchor:y},w,x)=>{let C;for(;m&&m!==y;)C=d(m),r(m,w,x),m=C;r(y,w,x)},E=({el:m,anchor:y})=>{let w;for(;m&&m!==y;)w=d(m),s(m),m=w;s(y)},L=(m,y,w,x,C,N,z,M,F)=>{z=z||y.type==="svg",m==null?U(y,w,x,C,N,z,M,F):W(m,y,C,N,z,M,F)},U=(m,y,w,x,C,N,z,M)=>{let F,D;const{type:te,props:Q,shapeFlag:ee,transition:ie,dirs:me}=m;if(F=m.el=o(m.type,N,Q&&Q.is,Q),ee&8?u(F,m.children):ee&16&&G(m.children,F,null,x,C,N&&te!=="foreignObject",z,M),me&&xs(m,null,x,"created"),Y(F,m,m.scopeId,z,x),Q){for(const ke in Q)ke!=="value"&&!Ul(ke)&&i(F,ke,null,Q[ke],N,m.children,x,C,Ye);"value"in Q&&i(F,"value",null,Q.value),(D=Q.onVnodeBeforeMount)&&qn(D,x,m)}me&&xs(m,null,x,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&ie&&!ie.persisted;Ce&&ie.beforeEnter(F),r(F,y,w),((D=Q&&Q.onVnodeMounted)||Ce||me)&&Gt(()=>{D&&qn(D,x,m),Ce&&ie.enter(F),me&&xs(m,null,x,"mounted")},C)},Y=(m,y,w,x,C)=>{if(w&&f(m,w),x)for(let N=0;N<x.length;N++)f(m,x[N]);if(C){let N=C.subTree;if(y===N){const z=C.vnode;Y(m,z,z.scopeId,z.slotScopeIds,C.parent)}}},G=(m,y,w,x,C,N,z,M,F=0)=>{for(let D=F;D<m.length;D++){const te=m[D]=M?jr(m[D]):zn(m[D]);v(null,te,y,w,x,C,N,z,M)}},W=(m,y,w,x,C,N,z)=>{const M=y.el=m.el;let{patchFlag:F,dynamicChildren:D,dirs:te}=y;F|=m.patchFlag&16;const Q=m.props||Ue,ee=y.props||Ue;let ie;w&&Ss(w,!1),(ie=ee.onVnodeBeforeUpdate)&&qn(ie,w,y,m),te&&xs(y,m,w,"beforeUpdate"),w&&Ss(w,!0);const me=C&&y.type!=="foreignObject";if(D?le(m.dynamicChildren,D,M,w,x,me,N):z||ye(m,y,M,null,w,x,me,N,!1),F>0){if(F&16)Te(M,y,Q,ee,w,x,C);else if(F&2&&Q.class!==ee.class&&i(M,"class",null,ee.class,C),F&4&&i(M,"style",Q.style,ee.style,C),F&8){const Ce=y.dynamicProps;for(let ke=0;ke<Ce.length;ke++){const at=Ce[ke],Rn=Q[at],Ni=ee[at];(Ni!==Rn||at==="value")&&i(M,at,Rn,Ni,C,m.children,w,x,Ye)}}F&1&&m.children!==y.children&&u(M,y.children)}else!z&&D==null&&Te(M,y,Q,ee,w,x,C);((ie=ee.onVnodeUpdated)||te)&&Gt(()=>{ie&&qn(ie,w,y,m),te&&xs(y,m,w,"updated")},x)},le=(m,y,w,x,C,N,z)=>{for(let M=0;M<y.length;M++){const F=m[M],D=y[M],te=F.el&&(F.type===Ke||!Zo(F,D)||F.shapeFlag&70)?h(F.el):w;v(F,D,te,null,x,C,N,z,!0)}},Te=(m,y,w,x,C,N,z)=>{if(w!==x){if(w!==Ue)for(const M in w)!Ul(M)&&!(M in x)&&i(m,M,w[M],null,z,y.children,C,N,Ye);for(const M in x){if(Ul(M))continue;const F=x[M],D=w[M];F!==D&&M!=="value"&&i(m,M,D,F,z,y.children,C,N,Ye)}"value"in x&&i(m,"value",w.value,x.value)}},Fe=(m,y,w,x,C,N,z,M,F)=>{const D=y.el=m?m.el:a(""),te=y.anchor=m?m.anchor:a("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:ie}=y;ie&&(M=M?M.concat(ie):ie),m==null?(r(D,w,x),r(te,w,x),G(y.children,w,te,C,N,z,M,F)):Q>0&&Q&64&&ee&&m.dynamicChildren?(le(m.dynamicChildren,ee,w,C,N,z,M),(y.key!=null||C&&y===C.subTree)&&fb(m,y,!0)):ye(m,y,w,te,C,N,z,M,F)},De=(m,y,w,x,C,N,z,M,F)=>{y.slotScopeIds=M,m==null?y.shapeFlag&512?C.ctx.activate(y,w,x,z,F):$t(y,w,x,C,N,z,F):it(m,y,F)},$t=(m,y,w,x,C,N,z)=>{const M=m.component=YA(m,x,C);if(Zw(m)&&(M.ctx.renderer=$),XA(M),M.asyncDep){if(C&&C.registerDep(M,oe),!m.el){const F=M.subTree=H(ss);T(null,F,y,w)}return}oe(M,m,y,w,C,N,z)},it=(m,y,w)=>{const x=y.component=m.component;if(lA(m,y,w))if(x.asyncDep&&!x.asyncResolved){pe(x,y,w);return}else x.next=y,rA(x.update),x.update();else y.el=m.el,x.vnode=y},oe=(m,y,w,x,C,N,z)=>{const M=()=>{if(m.isMounted){let{next:te,bu:Q,u:ee,parent:ie,vnode:me}=m,Ce=te,ke;Ss(m,!1),te?(te.el=me.el,pe(m,te,z)):te=me,Q&&$l(Q),(ke=te.props&&te.props.onVnodeBeforeUpdate)&&qn(ke,ie,te,me),Ss(m,!0);const at=md(m),Rn=m.subTree;m.subTree=at,v(Rn,at,h(Rn.el),S(Rn),m,C,N),te.el=at.el,Ce===null&&uA(m,at.el),ee&&Gt(ee,C),(ke=te.props&&te.props.onVnodeUpdated)&&Gt(()=>qn(ke,ie,te,me),C)}else{let te;const{el:Q,props:ee}=y,{bm:ie,m:me,parent:Ce}=m,ke=Ta(y);if(Ss(m,!1),ie&&$l(ie),!ke&&(te=ee&&ee.onVnodeBeforeMount)&&qn(te,Ce,y),Ss(m,!0),Q&&ve){const at=()=>{m.subTree=md(m),ve(Q,m.subTree,m,C,null)};ke?y.type.__asyncLoader().then(()=>!m.isUnmounted&&at()):at()}else{const at=m.subTree=md(m);v(null,at,w,x,m,C,N),y.el=at.el}if(me&&Gt(me,C),!ke&&(te=ee&&ee.onVnodeMounted)){const at=y;Gt(()=>qn(te,Ce,at),C)}(y.shapeFlag&256||Ce&&Ta(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&m.a&&Gt(m.a,C),m.isMounted=!0,y=w=x=null}},F=m.effect=new Ep(M,()=>Np(D),m.scope),D=m.update=()=>F.run();D.id=m.uid,Ss(m,!0),D()},pe=(m,y,w)=>{y.component=m;const x=m.vnode.props;m.vnode=y,m.next=null,MA(m,y.props,x,w),$A(m,y.children,w),Do(),gy(),Oo()},ye=(m,y,w,x,C,N,z,M,F=!1)=>{const D=m&&m.children,te=m?m.shapeFlag:0,Q=y.children,{patchFlag:ee,shapeFlag:ie}=y;if(ee>0){if(ee&128){on(D,Q,w,x,C,N,z,M,F);return}else if(ee&256){Tt(D,Q,w,x,C,N,z,M,F);return}}ie&8?(te&16&&Ye(D,C,N),Q!==D&&u(w,Q)):te&16?ie&16?on(D,Q,w,x,C,N,z,M,F):Ye(D,C,N,!0):(te&8&&u(w,""),ie&16&&G(Q,w,x,C,N,z,M,F))},Tt=(m,y,w,x,C,N,z,M,F)=>{m=m||Wi,y=y||Wi;const D=m.length,te=y.length,Q=Math.min(D,te);let ee;for(ee=0;ee<Q;ee++){const ie=y[ee]=F?jr(y[ee]):zn(y[ee]);v(m[ee],ie,w,null,C,N,z,M,F)}D>te?Ye(m,C,N,!0,!1,Q):G(y,w,x,C,N,z,M,F,Q)},on=(m,y,w,x,C,N,z,M,F)=>{let D=0;const te=y.length;let Q=m.length-1,ee=te-1;for(;D<=Q&&D<=ee;){const ie=m[D],me=y[D]=F?jr(y[D]):zn(y[D]);if(Zo(ie,me))v(ie,me,w,null,C,N,z,M,F);else break;D++}for(;D<=Q&&D<=ee;){const ie=m[Q],me=y[ee]=F?jr(y[ee]):zn(y[ee]);if(Zo(ie,me))v(ie,me,w,null,C,N,z,M,F);else break;Q--,ee--}if(D>Q){if(D<=ee){const ie=ee+1,me=ie<te?y[ie].el:x;for(;D<=ee;)v(null,y[D]=F?jr(y[D]):zn(y[D]),w,me,C,N,z,M,F),D++}}else if(D>ee)for(;D<=Q;)ot(m[D],C,N,!0),D++;else{const ie=D,me=D,Ce=new Map;for(D=me;D<=ee;D++){const ln=y[D]=F?jr(y[D]):zn(y[D]);ln.key!=null&&Ce.set(ln.key,D)}let ke,at=0;const Rn=ee-me+1;let Ni=!1,sy=0;const Jo=new Array(Rn);for(D=0;D<Rn;D++)Jo[D]=0;for(D=ie;D<=Q;D++){const ln=m[D];if(at>=Rn){ot(ln,C,N,!0);continue}let jn;if(ln.key!=null)jn=Ce.get(ln.key);else for(ke=me;ke<=ee;ke++)if(Jo[ke-me]===0&&Zo(ln,y[ke])){jn=ke;break}jn===void 0?ot(ln,C,N,!0):(Jo[jn-me]=D+1,jn>=sy?sy=jn:Ni=!0,v(ln,y[jn],w,null,C,N,z,M,F),at++)}const iy=Ni?jA(Jo):Wi;for(ke=iy.length-1,D=Rn-1;D>=0;D--){const ln=me+D,jn=y[ln],oy=ln+1<te?y[ln+1].el:x;Jo[D]===0?v(null,jn,w,oy,C,N,z,M,F):Ni&&(ke<0||D!==iy[ke]?Kt(jn,w,oy,2):ke--)}}},Kt=(m,y,w,x,C=null)=>{const{el:N,type:z,transition:M,children:F,shapeFlag:D}=m;if(D&6){Kt(m.component.subTree,y,w,x);return}if(D&128){m.suspense.move(y,w,x);return}if(D&64){z.move(m,y,w,$);return}if(z===Ke){r(N,y,w);for(let Q=0;Q<F.length;Q++)Kt(F[Q],y,w,x);r(m.anchor,y,w);return}if(z===Bl){k(m,y,w);return}if(x!==2&&D&1&&M)if(x===0)M.beforeEnter(N),r(N,y,w),Gt(()=>M.enter(N),C);else{const{leave:Q,delayLeave:ee,afterLeave:ie}=M,me=()=>r(N,y,w),Ce=()=>{Q(N,()=>{me(),ie&&ie()})};ee?ee(N,me,Ce):Ce()}else r(N,y,w)},ot=(m,y,w,x=!1,C=!1)=>{const{type:N,props:z,ref:M,children:F,dynamicChildren:D,shapeFlag:te,patchFlag:Q,dirs:ee}=m;if(M!=null&&af(M,null,w,m,!0),te&256){y.ctx.deactivate(m);return}const ie=te&1&&ee,me=!Ta(m);let Ce;if(me&&(Ce=z&&z.onVnodeBeforeUnmount)&&qn(Ce,y,m),te&6)cn(m.component,w,x);else{if(te&128){m.suspense.unmount(w,x);return}ie&&xs(m,null,y,"beforeUnmount"),te&64?m.type.remove(m,y,w,C,$,x):D&&(N!==Ke||Q>0&&Q&64)?Ye(D,y,w,!1,!0):(N===Ke&&Q&384||!C&&te&16)&&Ye(F,y,w),x&&Cn(m)}(me&&(Ce=z&&z.onVnodeUnmounted)||ie)&&Gt(()=>{Ce&&qn(Ce,y,m),ie&&xs(m,null,y,"unmounted")},w)},Cn=m=>{const{type:y,el:w,anchor:x,transition:C}=m;if(y===Ke){an(w,x);return}if(y===Bl){E(m);return}const N=()=>{s(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:z,delayLeave:M}=C,F=()=>z(w,N);M?M(m.el,N,F):F()}else N()},an=(m,y)=>{let w;for(;m!==y;)w=d(m),s(m),m=w;s(y)},cn=(m,y,w)=>{const{bum:x,scope:C,update:N,subTree:z,um:M}=m;x&&$l(x),C.stop(),N&&(N.active=!1,ot(z,m,y,w)),M&&Gt(M,y),Gt(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ye=(m,y,w,x=!1,C=!1,N=0)=>{for(let z=N;z<m.length;z++)ot(m[z],y,w,x,C)},S=m=>m.shapeFlag&6?S(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),q=(m,y,w)=>{m==null?y._vnode&&ot(y._vnode,null,null,!0):v(y._vnode||null,m,y,null,null,null,w),gy(),Kw(),y._vnode=m},$={p:v,um:ot,m:Kt,r:Cn,mt:$t,mc:G,pc:ye,pbc:le,n:S,o:t};let Z,ve;return e&&([Z,ve]=e($)),{render:q,hydrate:Z,createApp:DA(q,Z)}}function Ss({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fb(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=jr(s[i]),a.el=o.el),n||fb(o,a)),a.type===ch&&(a.el=o.el)}}function jA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const qA=t=>t.__isTeleport,Ke=Symbol.for("v-fgt"),ch=Symbol.for("v-txt"),ss=Symbol.for("v-cmt"),Bl=Symbol.for("v-stc"),Sa=[];let Pn=null;function se(t=!1){Sa.push(Pn=t?null:[])}function zA(){Sa.pop(),Pn=Sa[Sa.length-1]||null}let Ya=1;function Ay(t){Ya+=t}function pb(t){return t.dynamicChildren=Ya>0?Pn||Wi:null,zA(),Ya>0&&Pn&&Pn.push(t),t}function fe(t,e,n,r,s,i){return pb(p(t,e,n,r,s,i,!0))}function Ii(t,e,n,r,s){return pb(H(t,e,n,r,s,!0))}function fu(t){return t?t.__v_isVNode===!0:!1}function Zo(t,e){return t.type===e.type&&t.key===e.key}const lh="__vInternal",mb=({key:t})=>t??null,jl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||nt(t)||de(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mb(e),ref:e&&jl(e),scopeId:Qw,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return a?(Op(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ht(n)?8:16),Ya>0&&!o&&Pn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pn.push(c),c}const H=HA;function HA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===TA)&&(t=ss),fu(t)){const a=ao(t,e,!0);return n&&Op(a,n),Ya>0&&!i&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(t)]=a:Pn.push(a)),a.patchFlag|=-2,a}if(nk(t)&&(t=t.__vccOpts),e){e=KA(e);let{class:a,style:c}=e;a&&!ht(a)&&(e.class=Ln(a)),Le(c)&&($w(c)&&!re(c)&&(c=_t({},c)),e.style=wp(c))}const o=ht(t)?1:hA(t)?128:qA(t)?64:Le(t)?4:de(t)?2:0;return p(t,e,n,r,s,o,i,!0)}function KA(t){return t?$w(t)||lh in t?_t({},t):t:null}function ao(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?GA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&mb(a),ref:e&&e.ref?n&&s?re(s)?s.concat(jl(e)):[s,jl(e)]:jl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ao(t.ssContent),ssFallback:t.ssFallback&&ao(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function we(t=" ",e=0){return H(ch,null,t,e)}function uh(t,e){const n=H(Bl,null,t);return n.staticCount=e,n}function Xi(t="",e=!1){return e?(se(),Ii(ss,null,t)):H(ss,null,t)}function zn(t){return t==null||typeof t=="boolean"?H(ss):re(t)?H(Ke,null,t.slice()):typeof t=="object"?jr(t):H(ch,null,String(t))}function jr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ao(t)}function Op(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Op(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(lh in e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[we(e)]):n=8);t.children=e,t.shapeFlag|=n}function GA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ln([e.class,r.class]));else if(s==="style")e.style=wp([e.style,r.style]);else if(eh(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qn(t,e,n,r=null){Mn(t,e,7,[n,r])}const WA=ab();let QA=0;function YA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||WA,i={uid:QA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lb(r,s),emitsOptions:Ww(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oA.bind(null,i),t.ce&&t.ce(i),i}let yt=null,Lp,Pi,ky="__VUE_INSTANCE_SETTERS__";(Pi=Xd()[ky])||(Pi=Xd()[ky]=[]),Pi.push(t=>yt=t),Lp=t=>{Pi.length>1?Pi.forEach(e=>e(t)):Pi[0](t)};const co=t=>{Lp(t),t.scope.on()},Qs=()=>{yt&&yt.scope.off(),Lp(null)};function gb(t){return t.vnode.shapeFlag&4}let Xa=!1;function XA(t,e=!1){Xa=e;const{props:n,children:r}=t.vnode,s=gb(t);LA(t,n,s,e),UA(t,r);const i=s?JA(t,e):void 0;return Xa=!1,i}function JA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=sh(new Proxy(t.ctx,SA));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ek(t):null;co(t),Do();const i=ts(r,t,0,[t.props,s]);if(Oo(),Qs(),ww(i)){if(i.then(Qs,Qs),e)return i.then(o=>{Cy(t,o,e)}).catch(o=>{ih(o,t,0)});t.asyncDep=i}else Cy(t,i,e)}else yb(t,e)}function Cy(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=qw(e)),yb(t,n)}let Ry;function yb(t,e,n){const r=t.type;if(!t.render){if(!e&&Ry&&!r.render){const s=r.template||Pp(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_t(_t({isCustomElement:i,delimiters:a},o),c);r.render=Ry(s,l)}}t.render=r.render||On}co(t),Do(),AA(t),Oo(),Qs()}function ZA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return rn(t,"get","$attrs"),e[n]}}))}function ek(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ZA(t)},slots:t.slots,emit:t.emit,expose:e}}function hh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qw(sh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xa)return xa[n](t)},has(e,n){return n in e||n in xa}}))}function tk(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function nk(t){return de(t)&&"__vccOpts"in t}const dn=(t,e)=>eA(t,e,Xa);function vb(t,e,n){const r=arguments.length;return r===2?Le(e)&&!re(e)?fu(e)?H(t,null,[e]):H(t,e):H(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fu(n)&&(n=[n]),H(t,e,n))}const rk=Symbol.for("v-scx"),sk=()=>In(rk),ik="3.3.4",ok="http://www.w3.org/2000/svg",Ns=typeof document<"u"?document:null,Ny=Ns&&Ns.createElement("template"),ak={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ns.createElementNS(ok,t):Ns.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ns.createTextNode(t),createComment:t=>Ns.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ns.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ny.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ny.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ck(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lk(t,e,n){const r=t.style,s=ht(n);if(n&&!s){if(e&&!ht(e))for(const i in e)n[i]==null&&cf(r,i,"");for(const i in n)cf(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Py=/\s*!important$/;function cf(t,e,n){if(re(n))n.forEach(r=>cf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uk(t,e);Py.test(n)?t.setProperty(wi(r),n.replace(Py,""),"important"):t[r]=n}}const Dy=["Webkit","Moz","ms"],yd={};function uk(t,e){const n=yd[e];if(n)return n;let r=ar(e);if(r!=="filter"&&r in t)return yd[e]=r;r=nh(r);for(let s=0;s<Dy.length;s++){const i=Dy[s]+r;if(i in t)return yd[e]=i}return e}const Oy="http://www.w3.org/1999/xlink";function hk(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Oy,e.slice(6,e.length)):t.setAttributeNS(Oy,e,n);else{const i=mS(e);n==null||i&&!Ew(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function dk(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ew(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Gr(t,e,n,r){t.addEventListener(e,n,r)}function fk(t,e,n,r){t.removeEventListener(e,n,r)}function pk(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=mk(e);if(r){const l=i[e]=vk(r,s);Gr(t,a,l,c)}else o&&(fk(t,a,o,c),i[e]=void 0)}}const Ly=/(?:Once|Passive|Capture)$/;function mk(t){let e;if(Ly.test(t)){e={};let r;for(;r=t.match(Ly);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wi(t.slice(2)),e]}let vd=0;const gk=Promise.resolve(),yk=()=>vd||(gk.then(()=>vd=0),vd=Date.now());function vk(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mn(_k(r,n.value),e,5,[r])};return n.value=t,n.attached=yk(),n}function _k(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const My=/^on[a-z]/,wk=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?ck(t,r,s):e==="style"?lk(t,n,r):eh(e)?yp(e)||pk(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bk(t,e,r,s))?dk(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hk(t,e,r,s))};function bk(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&My.test(e)&&de(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||My.test(e)&&ht(n)?!1:e in t}const lo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>$l(e,n):e};function Ik(t){t.target.composing=!0}function Fy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=lo(s);const i=r||s.props&&s.props.type==="number";Gr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=cu(a)),t._assign(a)}),n&&Gr(t,"change",()=>{t.value=t.value.trim()}),e||(Gr(t,"compositionstart",Ik),Gr(t,"compositionend",Fy),Gr(t,"change",Fy))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=lo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&cu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ek={deep:!0,created(t,e,n){t._assign=lo(n),Gr(t,"change",()=>{const r=t._modelValue,s=Ja(t),i=t.checked,o=t._assign;if(re(r)){const a=bp(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Po(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(_b(t,i))})},mounted:Uy,beforeUpdate(t,e,n){t._assign=lo(n),Uy(t,e,n)}};function Uy(t,{value:e,oldValue:n},r){t._modelValue=e,re(e)?t.checked=bp(e,r.props.value)>-1:Po(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Nc(e,_b(t,!0)))}const Tk={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Po(e);Gr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?cu(Ja(o)):Ja(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=lo(r)},mounted(t,{value:e}){$y(t,e)},beforeUpdate(t,e,n){t._assign=lo(n)},updated(t,{value:e}){$y(t,e)}};function $y(t,e){const n=t.multiple;if(!(n&&!re(e)&&!Po(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ja(i);if(n)re(e)?i.selected=bp(e,o)>-1:i.selected=e.has(o);else if(Nc(Ja(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ja(t){return"_value"in t?t._value:t.value}function _b(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const xk=["ctrl","shift","alt","meta"],Sk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xk.some(n=>t[`${n}Key`]&&!e.includes(n))},Ir=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Sk[e[s]];if(i&&i(n,e))return}return t(n,...r)},Ak={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kk=(t,e)=>n=>{if(!("key"in n))return;const r=wi(n.key);if(e.some(s=>s===r||Ak[s]===r))return t(n)},Ys={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ea(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ea(t,!0),r.enter(t)):r.leave(t,()=>{ea(t,!1)}):ea(t,e))},beforeUnmount(t,{value:e}){ea(t,e)}};function ea(t,e){t.style.display=e?t._vod:"none"}const Ck=_t({patchProp:wk},ak);let Vy;function Rk(){return Vy||(Vy=VA(Ck))}const Nk=(...t)=>{const e=Rk().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pk(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Pk(t){return ht(t)?document.querySelector(t):t}var Dk=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let wb;const dh=t=>wb=t,bb=Symbol();function uf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Aa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Aa||(Aa={}));function Ok(){const t=Sw(!0),e=t.run(()=>Ee({}));let n=[],r=[];const s=sh({install(i){dh(s),s._a=i,i.provide(bb,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Dk?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ib=()=>{};function By(t,e,n,r=Ib){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Aw()&&vS(s),s}function Di(t,...e){t.slice().forEach(n=>{n(...e)})}const Lk=t=>t();function hf(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];uf(s)&&uf(r)&&t.hasOwnProperty(n)&&!nt(r)&&!es(r)?t[n]=hf(s,r):t[n]=r}return t}const Mk=Symbol();function Fk(t){return!uf(t)||!t.hasOwnProperty(Mk)}const{assign:Br}=Object;function Uk(t){return!!(nt(t)&&t.effect)}function $k(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=YS(n.state.value[t]);return Br(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=sh(dn(()=>{dh(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=Eb(t,l,e,n,r,!0),c}function Eb(t,e,n={},r,s,i){let o;const a=Br({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=r.state.value[t];!i&&!g&&(r.state.value[t]={}),Ee({});let v;function _(G){let W;l=u=!1,typeof G=="function"?(G(r.state.value[t]),W={type:Aa.patchFunction,storeId:t,events:f}):(hf(r.state.value[t],G),W={type:Aa.patchObject,payload:G,storeId:t,events:f});const le=v=Symbol();Rp().then(()=>{v===le&&(l=!0)}),u=!0,Di(h,W,r.state.value[t])}const T=i?function(){const{state:W}=n,le=W?W():{};this.$patch(Te=>{Br(Te,le)})}:Ib;function A(){o.stop(),h=[],d=[],r._s.delete(t)}function k(G,W){return function(){dh(r);const le=Array.from(arguments),Te=[],Fe=[];function De(oe){Te.push(oe)}function $t(oe){Fe.push(oe)}Di(d,{args:le,name:G,store:L,after:De,onError:$t});let it;try{it=W.apply(this&&this.$id===t?this:L,le)}catch(oe){throw Di(Fe,oe),oe}return it instanceof Promise?it.then(oe=>(Di(Te,oe),oe)).catch(oe=>(Di(Fe,oe),Promise.reject(oe))):(Di(Te,it),it)}}const E={_p:r,$id:t,$onAction:By.bind(null,d),$patch:_,$reset:T,$subscribe(G,W={}){const le=By(h,G,W.detached,()=>Te()),Te=o.run(()=>Ws(()=>r.state.value[t],Fe=>{(W.flush==="sync"?u:l)&&G({storeId:t,type:Aa.direct,events:f},Fe)},Br({},c,W)));return le},$dispose:A},L=Lo(E);r._s.set(t,L);const U=r._a&&r._a.runWithContext||Lk,Y=r._e.run(()=>(o=Sw(),U(()=>o.run(e))));for(const G in Y){const W=Y[G];if(nt(W)&&!Uk(W)||es(W))i||(g&&Fk(W)&&(nt(W)?W.value=g[G]:hf(W,g[G])),r.state.value[t][G]=W);else if(typeof W=="function"){const le=k(G,W);Y[G]=le,a.actions[G]=W}}return Br(L,Y),Br(Se(L),Y),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:G=>{_(W=>{Br(W,G)})}}),r._p.forEach(G=>{Br(L,o.run(()=>G({store:L,app:r._a,pinia:r,options:a})))}),g&&i&&n.hydrate&&n.hydrate(L.$state,g),l=!0,u=!0,L}function Vk(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=OA();return a=a||(l?In(bb,null):null),a&&dh(a),a=wb,a._s.has(r)||(i?Eb(r,e,s,a):$k(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $i=typeof window<"u";function Bk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function _d(t,e){const n={};for(const r in e){const s=e[r];n[r]=Fn(s)?s.map(t):t(s)}return n}const ka=()=>{},Fn=Array.isArray,jk=/\/$/,qk=t=>t.replace(jk,"");function wd(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Gk(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function zk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&uo(e.matched[r],n.matched[s])&&Tb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function uo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Kk(t[n],e[n]))return!1;return!0}function Kk(t,e){return Fn(t)?qy(t,e):Fn(e)?qy(e,t):t===e}function qy(t,e){return Fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Gk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Za;(function(t){t.pop="pop",t.push="push"})(Za||(Za={}));var Ca;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ca||(Ca={}));function Wk(t){if(!t)if($i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qk(t)}const Qk=/^[^#]+#/;function Yk(t,e){return t.replace(Qk,"#")+e}function Xk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fh=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Xk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zy(t,e){return(history.state?history.state.position-e:-1)+t}const df=new Map;function Zk(t,e){df.set(t,e)}function e1(t){const e=df.get(t);return df.delete(t),e}let t1=()=>location.protocol+"//"+location.host;function xb(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),jy(c,"")}return jy(n,t)+r+s}function n1(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=xb(t,location),g=n.value,v=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}_=v?d.position-v.position:0}else r(f);s.forEach(T=>{T(n.value,g,{delta:_,type:Za.pop,direction:_?_>0?Ca.forward:Ca.back:Ca.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:fh()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Hy(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fh():null}}function r1(t){const{history:e,location:n}=window,r={value:xb(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:t1()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Re({},e.state,Hy(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Re({},s.value,e.state,{forward:c,scroll:fh()});i(u.current,u,!0);const h=Re({},Hy(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function s1(t){t=Wk(t);const e=r1(t),n=n1(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:Yk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function i1(t){return typeof t=="string"||t&&typeof t=="object"}function Sb(t){return typeof t=="string"||typeof t=="symbol"}const Mr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ab=Symbol("");var Ky;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ky||(Ky={}));function ho(t,e){return Re(new Error,{type:t,[Ab]:!0},e)}function dr(t,e){return t instanceof Error&&Ab in t&&(e==null||!!(t.type&e))}const Gy="[^/]+?",o1={sensitive:!1,strict:!1,start:!0,end:!0},a1=/[.+*?^${}()[\]/\\]/g;function c1(t,e){const n=Re({},o1,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(a1,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:v,optional:_,regexp:T}=d;i.push({name:g,repeatable:v,optional:_});const A=T||Gy;if(A!==Gy){f+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+E.message)}}let k=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(k=_&&l.length<2?`(?:/${k})`:"/"+k),_&&(k+="?"),s+=k,f+=20,_&&(f+=-8),v&&(f+=-20),A===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:_}=f,T=g in l?l[g]:"";if(Fn(T)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=Fn(T)?T.join("/"):T;if(!A)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function l1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function u1(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=l1(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wy(r))return 1;if(Wy(s))return-1}return s.length-r.length}function Wy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const h1={type:0,value:""},d1=/[a-zA-Z0-9_]/;function f1(t){if(!t)return[[]];if(t==="/")return[[h1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:d1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function p1(t,e,n){const r=c1(f1(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function m1(t,e){const n=[],r=new Map;e=Xy({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,g=g1(u);g.aliasOf=d&&d.record;const v=Xy(e,u),_=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of k)_.push(Re({},g,{components:d?d.record.components:g.components,path:E,aliasOf:d?d.record:g}))}let T,A;for(const k of _){const{path:E}=k;if(h&&E[0]!=="/"){const L=h.record.path,U=L[L.length-1]==="/"?"":"/";k.path=h.record.path+(E&&U+E)}if(T=p1(k,h,v),d?d.alias.push(T):(A=A||T,A!==T&&A.alias.push(T),f&&u.name&&!Yy(T)&&o(u.name)),g.children){const L=g.children;for(let U=0;U<L.length;U++)i(L[U],T,d&&d.children[U])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return A?()=>{o(A)}:ka}function o(u){if(Sb(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&u1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!kb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Yy(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},g,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ho(1,{location:u});v=d.record.name,f=Re(Qy(h.params,d.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Qy(u.params,d.keys.map(A=>A.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(A=>A.re.test(g)),d&&(f=d.parse(g),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(A=>A.re.test(h.path)),!d)throw ho(1,{location:u,currentLocation:h});v=d.record.name,f=Re({},h.params,u.params),g=d.stringify(f)}const _=[];let T=d;for(;T;)_.unshift(T.record),T=T.parent;return{name:v,path:g,params:f,matched:_,meta:v1(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function g1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:y1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function y1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Yy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function v1(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Xy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kb(t,e){return e.children.some(n=>n===t||kb(t,n))}const Cb=/#/g,_1=/&/g,w1=/\//g,b1=/=/g,I1=/\?/g,Rb=/\+/g,E1=/%5B/g,T1=/%5D/g,Nb=/%5E/g,x1=/%60/g,Pb=/%7B/g,S1=/%7C/g,Db=/%7D/g,A1=/%20/g;function Mp(t){return encodeURI(""+t).replace(S1,"|").replace(E1,"[").replace(T1,"]")}function k1(t){return Mp(t).replace(Pb,"{").replace(Db,"}").replace(Nb,"^")}function ff(t){return Mp(t).replace(Rb,"%2B").replace(A1,"+").replace(Cb,"%23").replace(_1,"%26").replace(x1,"`").replace(Pb,"{").replace(Db,"}").replace(Nb,"^")}function C1(t){return ff(t).replace(b1,"%3D")}function R1(t){return Mp(t).replace(Cb,"%23").replace(I1,"%3F")}function N1(t){return t==null?"":R1(t).replace(w1,"%2F")}function pu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function P1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rb," "),o=i.indexOf("="),a=pu(o<0?i:i.slice(0,o)),c=o<0?null:pu(i.slice(o+1));if(a in e){let l=e[a];Fn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Jy(t){let e="";for(let n in t){const r=t[n];if(n=C1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fn(r)?r.map(i=>i&&ff(i)):[r&&ff(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function D1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const O1=Symbol(""),Zy=Symbol(""),ph=Symbol(""),Fp=Symbol(""),pf=Symbol("");function ta(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ho(4,{from:n,to:e})):h instanceof Error?a(h):i1(h)?a(ho(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function bd(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(L1(a)){const l=(a.__vccOpts||a)[e];l&&s.push(qr(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Bk(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&qr(d,n,r,i,o)()}))}}return s}function L1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ev(t){const e=In(ph),n=In(Fp),r=dn(()=>e.resolve(ce(t.to))),s=dn(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(uo.bind(null,u));if(d>-1)return d;const f=tv(c[l-2]);return l>1&&tv(u)===f&&h[h.length-1].path!==f?h.findIndex(uo.bind(null,c[l-2])):d}),i=dn(()=>s.value>-1&&U1(n.params,r.value.params)),o=dn(()=>s.value>-1&&s.value===n.matched.length-1&&Tb(n.params,r.value.params));function a(c={}){return F1(c)?e[ce(t.replace)?"replace":"push"](ce(t.to)).catch(ka):Promise.resolve()}return{route:r,href:dn(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const M1=Jw({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ev,setup(t,{slots:e}){const n=Lo(ev(t)),{options:r}=In(ph),s=dn(()=>({[nv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[nv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:vb("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wn=M1;function F1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function U1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function tv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nv=(t,e,n)=>t??e??n,$1=Jw({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=In(pf),s=dn(()=>t.route||r.value),i=In(Zy,0),o=dn(()=>{let l=ce(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=dn(()=>s.value.matched[o.value]);Vl(Zy,dn(()=>o.value+1)),Vl(O1,a),Vl(pf,s);const c=Ee();return Ws(()=>[c.value,a.value,t.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!uo(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return rv(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=vb(d,Re({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return rv(n.default,{Component:_,route:l})||_}}});function rv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dc=$1;function V1(t){const e=m1(t.routes,t),n=t.parseQuery||P1,r=t.stringifyQuery||Jy,s=t.history,i=ta(),o=ta(),a=ta(),c=GS(Mr);let l=Mr;$i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_d.bind(null,S=>""+S),h=_d.bind(null,N1),d=_d.bind(null,pu);function f(S,q){let $,Z;return Sb(S)?($=e.getRecordMatcher(S),Z=q):Z=S,e.addRoute(Z,$)}function g(S){const q=e.getRecordMatcher(S);q&&e.removeRoute(q)}function v(){return e.getRoutes().map(S=>S.record)}function _(S){return!!e.getRecordMatcher(S)}function T(S,q){if(q=Re({},q||c.value),typeof S=="string"){const w=wd(n,S,q.path),x=e.resolve({path:w.path},q),C=s.createHref(w.fullPath);return Re(w,x,{params:d(x.params),hash:pu(w.hash),redirectedFrom:void 0,href:C})}let $;if("path"in S)$=Re({},S,{path:wd(n,S.path,q.path).path});else{const w=Re({},S.params);for(const x in w)w[x]==null&&delete w[x];$=Re({},S,{params:h(w)}),q.params=h(q.params)}const Z=e.resolve($,q),ve=S.hash||"";Z.params=u(d(Z.params));const m=zk(r,Re({},S,{hash:k1(ve),path:Z.path})),y=s.createHref(m);return Re({fullPath:m,hash:ve,query:r===Jy?D1(S.query):S.query||{}},Z,{redirectedFrom:void 0,href:y})}function A(S){return typeof S=="string"?wd(n,S,c.value.path):Re({},S)}function k(S,q){if(l!==S)return ho(8,{from:q,to:S})}function E(S){return Y(S)}function L(S){return E(Re(A(S),{replace:!0}))}function U(S){const q=S.matched[S.matched.length-1];if(q&&q.redirect){const{redirect:$}=q;let Z=typeof $=="function"?$(S):$;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=A(Z):{path:Z},Z.params={}),Re({query:S.query,hash:S.hash,params:"path"in Z?{}:S.params},Z)}}function Y(S,q){const $=l=T(S),Z=c.value,ve=S.state,m=S.force,y=S.replace===!0,w=U($);if(w)return Y(Re(A(w),{state:typeof w=="object"?Re({},ve,w.state):ve,force:m,replace:y}),q||$);const x=$;x.redirectedFrom=q;let C;return!m&&Hk(r,Z,$)&&(C=ho(16,{to:x,from:Z}),Kt(Z,Z,!0,!1)),(C?Promise.resolve(C):le(x,Z)).catch(N=>dr(N)?dr(N,2)?N:on(N):ye(N,x,Z)).then(N=>{if(N){if(dr(N,2))return Y(Re({replace:y},A(N.to),{state:typeof N.to=="object"?Re({},ve,N.to.state):ve,force:m}),q||x)}else N=Fe(x,Z,!0,y,ve);return Te(x,Z,N),N})}function G(S,q){const $=k(S,q);return $?Promise.reject($):Promise.resolve()}function W(S){const q=an.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(S):S()}function le(S,q){let $;const[Z,ve,m]=B1(S,q);$=bd(Z.reverse(),"beforeRouteLeave",S,q);for(const w of Z)w.leaveGuards.forEach(x=>{$.push(qr(x,S,q))});const y=G.bind(null,S,q);return $.push(y),Ye($).then(()=>{$=[];for(const w of i.list())$.push(qr(w,S,q));return $.push(y),Ye($)}).then(()=>{$=bd(ve,"beforeRouteUpdate",S,q);for(const w of ve)w.updateGuards.forEach(x=>{$.push(qr(x,S,q))});return $.push(y),Ye($)}).then(()=>{$=[];for(const w of S.matched)if(w.beforeEnter&&!q.matched.includes(w))if(Fn(w.beforeEnter))for(const x of w.beforeEnter)$.push(qr(x,S,q));else $.push(qr(w.beforeEnter,S,q));return $.push(y),Ye($)}).then(()=>(S.matched.forEach(w=>w.enterCallbacks={}),$=bd(m,"beforeRouteEnter",S,q),$.push(y),Ye($))).then(()=>{$=[];for(const w of o.list())$.push(qr(w,S,q));return $.push(y),Ye($)}).catch(w=>dr(w,8)?w:Promise.reject(w))}function Te(S,q,$){for(const Z of a.list())W(()=>Z(S,q,$))}function Fe(S,q,$,Z,ve){const m=k(S,q);if(m)return m;const y=q===Mr,w=$i?history.state:{};$&&(Z||y?s.replace(S.fullPath,Re({scroll:y&&w&&w.scroll},ve)):s.push(S.fullPath,ve)),c.value=S,Kt(S,q,$,y),on()}let De;function $t(){De||(De=s.listen((S,q,$)=>{if(!cn.listening)return;const Z=T(S),ve=U(Z);if(ve){Y(Re(ve,{replace:!0}),Z).catch(ka);return}l=Z;const m=c.value;$i&&Zk(zy(m.fullPath,$.delta),fh()),le(Z,m).catch(y=>dr(y,12)?y:dr(y,2)?(Y(y.to,Z).then(w=>{dr(w,20)&&!$.delta&&$.type===Za.pop&&s.go(-1,!1)}).catch(ka),Promise.reject()):($.delta&&s.go(-$.delta,!1),ye(y,Z,m))).then(y=>{y=y||Fe(Z,m,!1),y&&($.delta&&!dr(y,8)?s.go(-$.delta,!1):$.type===Za.pop&&dr(y,20)&&s.go(-1,!1)),Te(Z,m,y)}).catch(ka)}))}let it=ta(),oe=ta(),pe;function ye(S,q,$){on(S);const Z=oe.list();return Z.length?Z.forEach(ve=>ve(S,q,$)):console.error(S),Promise.reject(S)}function Tt(){return pe&&c.value!==Mr?Promise.resolve():new Promise((S,q)=>{it.add([S,q])})}function on(S){return pe||(pe=!S,$t(),it.list().forEach(([q,$])=>S?$(S):q()),it.reset()),S}function Kt(S,q,$,Z){const{scrollBehavior:ve}=t;if(!$i||!ve)return Promise.resolve();const m=!$&&e1(zy(S.fullPath,0))||(Z||!$)&&history.state&&history.state.scroll||null;return Rp().then(()=>ve(S,q,m)).then(y=>y&&Jk(y)).catch(y=>ye(y,S,q))}const ot=S=>s.go(S);let Cn;const an=new Set,cn={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:_,getRoutes:v,resolve:T,options:t,push:E,replace:L,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:Tt,install(S){const q=this;S.component("RouterLink",wn),S.component("RouterView",Dc),S.config.globalProperties.$router=q,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>ce(c)}),$i&&!Cn&&c.value===Mr&&(Cn=!0,E(s.location).catch(ve=>{}));const $={};for(const ve in Mr)$[ve]=dn(()=>c.value[ve]);S.provide(ph,q),S.provide(Fp,Lo($)),S.provide(pf,c);const Z=S.unmount;an.add(S),S.unmount=function(){an.delete(S),an.size<1&&(l=Mr,De&&De(),De=null,c.value=Mr,Cn=!1,pe=!1),Z()}}};function Ye(S){return S.reduce((q,$)=>q.then(()=>W($)),Promise.resolve())}return cn}function B1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>uo(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>uo(l,c))||s.push(c))}return[n,r,s]}function mh(){return In(ph)}function Up(){return In(Fp)}const j1={__name:"App",setup(t){return(e,n)=>(se(),Ii(ce(Dc)))}},q1="/itemshare/assets/ItemShareLogo-622ee656.png",z1=p("span",{class:"font-poppins hidden select-none text-3xl font-black text-background underline decoration-accent decoration-2 underline-offset-4 md:inline-block"},"ItemShare",-1),H1=["src"],Ob={__name:"ItemShareLogo",setup(t){return(e,n)=>(se(),Ii(ce(wn),{to:"/",class:"flex items-center gap-2"},{default:Ge(()=>[z1,p("img",{src:ce(q1),class:"w-10 rounded-xl",loading:"lazy"},null,8,H1)]),_:1}))}},K1=p("div",{class:"flex h-full flex-col-reverse bg-background md:flex-row-reverse",style:{"background-image":"url('https://wordpress.heals.com/blog/wp-content/uploads/2021/08/Colourful-sofa-cushions-1024x485.jpg;')","background-size":"cover","background-position":"center"}},[p("div",{class:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),p("div",{class:"z-10 basis-1/2 bg-primary"})],-1),G1={class:"absolute top-0 z-20 flex h-screen w-full flex-col md:flex-row-reverse"},W1={class:"flex w-full basis-full flex-col justify-between gap-4 overflow-y-auto p-8 md:basis-1/2"},Q1={class:"flex items-center justify-between"},Y1=p("nav",{class:"flex gap-4 text-background"},[p("a",{href:"#"},"About Us"),p("a",{href:"#"},"Contacts")],-1),X1=p("footer",{class:"text-right text-background"}," All Rights Reserved 2023. ® ",-1),J1={__name:"LandingView",setup(t){return(e,n)=>(se(),fe(Ke,null,[K1,p("div",G1,[p("div",W1,[p("header",Q1,[Y1,H(Ob)]),H(ce(Dc)),X1])])],64))}},gh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Z1={},eC={class:"flex basis-full flex-col justify-between divide-y-0 divide-secondary divide-opacity-80 px-4 md:divide-y-4"},tC=p("div",{class:"flex basis-full flex-col justify-center"},[p("h1",{class:"text-5xl font-bold text-background sm:text-6xl md:shadow-none"}," Hello, looking for something you like? ")],-1),nC={class:"flex basis-full flex-col gap-8 px-4 py-16"},rC=p("p",{class:"text-xl text-background"}," Unlock the value of your unused items: Earn, Share, and Connect with ItemShare ",-1),sC={class:"flex items-center gap-2"};function iC(t,e){const n=Pc("RouterLink");return se(),fe("div",eC,[tC,p("div",nC,[rC,p("div",sC,[H(n,{to:"/login",class:"rounded-md border-2 border-background bg-background px-8 py-2 text-center text-green-800"},{default:Ge(()=>[we(" LOGIN ")]),_:1}),H(n,{to:"/register",class:"rounded-md border-2 border-background px-8 py-2 text-center text-background"},{default:Ge(()=>[we(" REGISTER ")]),_:1})])])])}const oC=gh(Z1,[["render",iC]]);/**
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
 */const Lb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new cC;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lC=function(t){const e=Lb(t);return Mb.encodeByteArray(e,!0)},mu=function(t){return lC(t).replace(/\./g,"")},Fb=function(t){try{return Mb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function gu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uC(n)||(t[n]=gu(t[n],e[n]));return t}function uC(t){return t!=="__proto__"}/**
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
 */function hC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dC=()=>hC().__FIREBASE_DEFAULTS__,fC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fb(t[1]);return e&&JSON.parse(e)},yh=()=>{try{return dC()||fC()||pC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mC=t=>{var e,n;return(n=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gC=t=>{const e=mC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ub=()=>{var t;return(t=yh())===null||t===void 0?void 0:t.config},yC=t=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),a].join(".")}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _C(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function vh(){var t;const e=(t=yh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wC(){return typeof self=="object"&&self.self===self}function Vb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bb(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bC(){return!vh()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ec(){try{return typeof indexedDB=="object"}catch{return!1}}function IC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const EC="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EC,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,a,r)}}function TC(t,e){return t.replace(xC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xC=/\{\$([^}]+)}/g;/**
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
 */function sv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function SC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(iv(i)&&iv(o)){if(!mf(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function iv(t){return t!==null&&typeof t=="object"}/**
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
 */function Mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jb(t,e){const n=new AC(t,e);return n.subscribe.bind(n)}class AC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Id),s.error===void 0&&(s.error=Id),s.complete===void 0&&(s.complete=Id);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Id(){}/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class CC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NC(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RC(t){return t===ks?void 0:t}function NC(t){return t.instantiationMode==="EAGER"}/**
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
 */class PC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Vp=[];var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const qb={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},DC=be.INFO,OC={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},LC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _h{constructor(e){this.name=e,this._logLevel=DC,this._logHandler=LC,this._userLogHandler=null,Vp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}function MC(t){Vp.forEach(e=>{e.setLogLevel(t)})}function FC(t,e){for(const n of Vp){let r=null;e&&e.level&&(r=qb[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&t({level:be[i].toLowerCase(),message:a,args:o,type:s.name})}}}const UC=(t,e)=>e.some(n=>t instanceof n);let ov,av;function $C(){return ov||(ov=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VC(){return av||(av=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zb=new WeakMap,gf=new WeakMap,Hb=new WeakMap,Ed=new WeakMap,Bp=new WeakMap;function BC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ns(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zb.set(n,t)}).catch(()=>{}),Bp.set(e,t),e}function jC(t){if(gf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gf.set(t,e)}let yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ns(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qC(t){yf=t(yf)}function zC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Td(this),e,...n);return Hb.set(r,e.sort?e.sort():[e]),ns(r)}:VC().includes(t)?function(...e){return t.apply(Td(this),e),ns(zb.get(this))}:function(...e){return ns(t.apply(Td(this),e))}}function HC(t){return typeof t=="function"?zC(t):(t instanceof IDBTransaction&&jC(t),UC(t,$C())?new Proxy(t,yf):t)}function ns(t){if(t instanceof IDBRequest)return BC(t);if(Ed.has(t))return Ed.get(t);const e=HC(t);return e!==t&&(Ed.set(t,e),Bp.set(e,t)),e}const Td=t=>Bp.get(t);function KC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ns(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ns(o.result),c.oldVersion,c.newVersion,ns(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const GC=["get","getKey","getAll","getAllKeys","count"],WC=["put","add","delete","clear"],xd=new Map;function cv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xd.get(e))return xd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return xd.set(e,i),i}qC(t=>({...t,get:(e,n,r)=>cv(e,n)||t.get(e,n,r),has:(e,n)=>!!cv(e,n)||t.has(e,n)}));/**
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
 */class QC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vf="@firebase/app",lv="0.9.12";/**
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
 */const ii=new _h("@firebase/app"),XC="@firebase/app-compat",JC="@firebase/analytics-compat",ZC="@firebase/analytics",eR="@firebase/app-check-compat",tR="@firebase/app-check",nR="@firebase/auth",rR="@firebase/auth-compat",sR="@firebase/database",iR="@firebase/database-compat",oR="@firebase/functions",aR="@firebase/functions-compat",cR="@firebase/installations",lR="@firebase/installations-compat",uR="@firebase/messaging",hR="@firebase/messaging-compat",dR="@firebase/performance",fR="@firebase/performance-compat",pR="@firebase/remote-config",mR="@firebase/remote-config-compat",gR="@firebase/storage",yR="@firebase/storage-compat",vR="@firebase/firestore",_R="@firebase/firestore-compat",wR="firebase",bR="9.22.2";/**
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
 */const is="[DEFAULT]",IR={[vf]:"fire-core",[XC]:"fire-core-compat",[ZC]:"fire-analytics",[JC]:"fire-analytics-compat",[tR]:"fire-app-check",[eR]:"fire-app-check-compat",[nR]:"fire-auth",[rR]:"fire-auth-compat",[sR]:"fire-rtdb",[iR]:"fire-rtdb-compat",[oR]:"fire-fn",[aR]:"fire-fn-compat",[cR]:"fire-iid",[lR]:"fire-iid-compat",[uR]:"fire-fcm",[hR]:"fire-fcm-compat",[dR]:"fire-perf",[fR]:"fire-perf-compat",[pR]:"fire-rc",[mR]:"fire-rc-compat",[gR]:"fire-gcs",[yR]:"fire-gcs-compat",[vR]:"fire-fst",[_R]:"fire-fst-compat","fire-js":"fire-js",[wR]:"fire-js-all"};/**
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
 */const os=new Map,tc=new Map;function yu(t,e){try{t.container.addComponent(e)}catch(n){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kb(t,e){t.container.addOrOverwriteComponent(e)}function Er(t){const e=t.name;if(tc.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,t);for(const n of os.values())yu(n,t);return!0}function jp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ER(t,e,n=is){jp(t,e).clearInstance(n)}function TR(){tc.clear()}/**
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
 */const xR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new Ei("app","Firebase",xR);/**
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
 */let SR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}};/**
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
 */const Cr=bR;function qp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:is,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=Ub()),!n)throw vr.create("no-options");const i=os.get(s);if(i){if(mf(n,i.options)&&mf(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new PC(s);for(const c of tc.values())o.addComponent(c);const a=new SR(n,r,o);return os.set(s,a),a}function Gb(t=is){const e=os.get(t);if(!e&&t===is&&Ub())return qp();if(!e)throw vr.create("no-app",{appName:t});return e}function AR(){return Array.from(os.values())}async function Wb(t){const e=t.name;os.has(e)&&(os.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function En(t,e,n){var r;let s=(r=IR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(a.join(" "));return}Er(new Un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Qb(t,e){if(t!==null&&typeof t!="function")throw vr.create("invalid-log-argument");FC(t,e)}function Yb(t){MC(t)}/**
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
 */const kR="firebase-heartbeat-database",CR=1,nc="firebase-heartbeat-store";let Sd=null;function Xb(){return Sd||(Sd=KC(kR,CR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nc)}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Sd}async function RR(t){try{return await(await Xb()).transaction(nc).objectStore(nc).get(Jb(t))}catch(e){if(e instanceof Mt)ii.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(n.message)}}}async function uv(t,e){try{const r=(await Xb()).transaction(nc,"readwrite");await r.objectStore(nc).put(e,Jb(t)),await r.done}catch(n){if(n instanceof Mt)ii.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ii.warn(r.message)}}}function Jb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NR=1024,PR=30*24*60*60*1e3;class DR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=PR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hv(),{heartbeatsToSend:n,unsentEntries:r}=OR(this._heartbeatsCache.heartbeats),s=mu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function hv(){return new Date().toISOString().substring(0,10)}function OR(t,e=NR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ec()?IC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dv(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MR(t){Er(new Un("platform-logger",e=>new QC(e),"PRIVATE")),Er(new Un("heartbeat",e=>new DR(e),"PRIVATE")),En(vf,lv,t),En(vf,lv,"esm2017"),En("fire-js","")}MR("");const FR=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Mt,SDK_VERSION:Cr,_DEFAULT_ENTRY_NAME:is,_addComponent:yu,_addOrOverwriteComponent:Kb,_apps:os,_clearComponents:TR,_components:tc,_getProvider:jp,_registerComponent:Er,_removeServiceInstance:ER,deleteApp:Wb,getApp:Gb,getApps:AR,initializeApp:qp,onLog:Qb,registerVersion:En,setLogLevel:Yb},Symbol.toStringTag,{value:"Module"}));/**
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
 */class UR{constructor(e,n){this._delegate=e,this.firebase=n,yu(e,new Un("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Wb(this._delegate)))}_getService(e,n=is){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=is){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){yu(this._delegate,e)}_addOrOverwriteComponent(e){Kb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const $R={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},fv=new Ei("app-compat","Firebase",$R);/**
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
 */function VR(t){const e={},n={__esModule:!0,initializeApp:i,app:s,registerVersion:En,setLogLevel:Yb,onLog:Qb,apps:null,SDK_VERSION:Cr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:FR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function s(l){if(l=l||is,!sv(e,l))throw fv.create("no-app",{appName:l});return e[l]}s.App=t;function i(l,u={}){const h=qp(l,u);if(sv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Er(l)&&l.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw fv.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&gu(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function c(l,u){return u==="serverAuth"?null:u}return n}/**
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
 */function Zb(){const t=VR(UR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Zb,extendNamespace:e,createSubscribe:jb,ErrorFactory:Ei,deepExtend:gu});function e(n){gu(t,n)}return t}const BR=Zb();/**
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
 */const pv=new _h("@firebase/app-compat"),jR="@firebase/app-compat",qR="0.2.12";/**
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
 */function zR(t){En(jR,qR,t)}/**
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
 */if(wC()&&self.firebase!==void 0){pv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&pv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Xt=BR;zR();var HR="firebase",KR="9.22.2";/**
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
 */Xt.registerVersion(HR,KR,"app-compat");function zp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}const na={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Oi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function GR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function e0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WR=GR,QR=e0,t0=new Ei("auth","Firebase",e0());/**
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
 */const vu=new _h("@firebase/auth");function YR(t,...e){vu.logLevel<=be.WARN&&vu.warn(`Auth (${Cr}): ${t}`,...e)}function ql(t,...e){vu.logLevel<=be.ERROR&&vu.error(`Auth (${Cr}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw Hp(t,...e)}function Ct(t,...e){return Hp(t,...e)}function n0(t,e,n){const r=Object.assign(Object.assign({},QR()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function Fo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nt(t,"argument-error"),n0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t0.create(t,...e)}function O(t,e,...n){if(!t)throw Hp(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function $n(t,e){t||Xn(e)}/**
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
 */function rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kp(){return mv()==="http:"||mv()==="https:"}function mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function XR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kp()||Vb()||"connection"in navigator)?navigator.onLine:!0}function JR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oc{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=_C()||$p()}get(){return XR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gp(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class r0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eN=new Oc(3e4,6e4);function ut(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ft(t,e,n,r,s={}){return s0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),r0.fetch()(i0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function s0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZR),e);try{const s=new tN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw va(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw n0(t,u,l);Nt(t,u)}}catch(s){if(s instanceof Mt)throw s;Nt(t,"network-request-failed",{message:String(s)})}}async function Rr(t,e,n,r,s={}){const i=await ft(t,e,n,r,s);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function i0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Gp(t.config,s):`${t.config.apiScheme}://${s}`}class tN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),eN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ct(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function nN(t,e){return ft(t,"POST","/v1/accounts:delete",e)}async function rN(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function sN(t,e){return ft(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iN(t,e=!1){const n=ne(t),r=await n.getIdToken(e),s=wh(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ra(Ad(s.auth_time)),issuedAtTime:Ra(Ad(s.iat)),expirationTime:Ra(Ad(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ad(t){return Number(t)*1e3}function wh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fb(n);return s?JSON.parse(s):(ql("Failed to decode base64 JWT payload"),null)}catch(s){return ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function oN(t){const e=wh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&aN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class o0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Tr(t,sN(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hN(i.providerUserInfo):[],a=uN(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new o0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function lN(t){const e=ne(t);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hN(t){return t.map(e=>{var{providerId:n}=e,r=zp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dN(t,e){const n=await s0(t,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=i0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",r0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ic{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ic;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ic,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function Fr(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xs{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=zp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new o0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iN(this,e)}reload(){return lN(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tr(this,nN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:E,isAnonymous:L,providerData:U,stsTokenManager:Y}=n;O(k&&Y,e,"internal-error");const G=ic.fromJSON(this.name,Y);O(typeof k=="string",e,"internal-error"),Fr(h,e.name),Fr(d,e.name),O(typeof E=="boolean",e,"internal-error"),O(typeof L=="boolean",e,"internal-error"),Fr(f,e.name),Fr(g,e.name),Fr(v,e.name),Fr(_,e.name),Fr(T,e.name),Fr(A,e.name);const W=new Xs({uid:k,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:L,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:G,createdAt:T,lastLoginAt:A});return U&&Array.isArray(U)&&(W.providerData=U.map(le=>Object.assign({},le))),_&&(W._redirectEventId=_),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new ic;s.updateFromServerResponse(n);const i=new Xs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sc(i),i}}/**
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
 */const gv=new Map;function fn(t){$n(t instanceof Function,"Expected a class definition");let e=gv.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gv.set(t,e),e)}/**
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
 */class a0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a0.type="NONE";const fo=a0;/**
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
 */function Js(t,e,n){return`firebase:${t}:${e}:${n}`}class Ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Js(this.userKey,s.apiKey,i),this.fullPersistenceKey=Js("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ji(fn(fo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||fn(fo);const o=Js(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Xs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ji(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ji(i,e,r))}}/**
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
 */function yv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h0(e))return"Blackberry";if(d0(e))return"Webos";if(Wp(e))return"Safari";if((e.includes("chrome/")||l0(e))&&!e.includes("edge/"))return"Chrome";if(Lc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function c0(t=We()){return/firefox\//i.test(t)}function Wp(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function l0(t=We()){return/crios\//i.test(t)}function u0(t=We()){return/iemobile/i.test(t)}function Lc(t=We()){return/android/i.test(t)}function h0(t=We()){return/blackberry/i.test(t)}function d0(t=We()){return/webos/i.test(t)}function Uo(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fN(t=We()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function pN(t=We()){var e;return Uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mN(){return Bb()&&document.documentMode===10}function f0(t=We()){return Uo(t)||Lc(t)||d0(t)||h0(t)||/windows phone/i.test(t)||u0(t)}function gN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function p0(t,e=[]){let n;switch(t){case"Browser":n=yv(We());break;case"Worker":n=`${yv(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cr}/${r}`}/**
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
 */async function yN(t){return(await ft(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function m0(t,e){return ft(t,"GET","/v2/recaptchaConfig",ut(t,e))}/**
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
 */function vv(t){return t!==void 0&&t.getResponse!==void 0}function _v(t){return t!==void 0&&t.enterprise!==void 0}class g0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function vN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ct("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vN().appendChild(r)})}function y0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _N="https://www.google.com/recaptcha/enterprise.js?render=",wN="recaptcha-enterprise",bN="NO_RECAPTCHA";class v0{constructor(e){this.type=wN,this.auth=st(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{m0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new g0(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;_v(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(bN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&_v(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Qp(_N+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function as(t,e,n,r=!1){const s=new v0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class IN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class EN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wv(this),this.idTokenSubscription=new wv(this),this.beforeStateQueue=new IN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ne(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}async initializeRecaptchaConfig(){const e=await m0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new g0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new v0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function st(t){return ne(t)}class wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=jb(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function TN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xN(t,e,n){const r=st(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=_0(e),{host:o,port:a}=SN(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||AN()}function _0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SN(t){const e=_0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:bv(o)}}}function bv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $o{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
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
 */async function w0(t,e){return ft(t,"POST","/v1/accounts:resetPassword",ut(t,e))}async function b0(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function kN(t,e){return ft(t,"POST","/v1/accounts:update",ut(t,e))}/**
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
 */async function kd(t,e){return Rr(t,"POST","/v1/accounts:signInWithPassword",ut(t,e))}async function bh(t,e){return ft(t,"POST","/v1/accounts:sendOobCode",ut(t,e))}async function CN(t,e){return bh(t,e)}async function Cd(t,e){return bh(t,e)}async function Rd(t,e){return bh(t,e)}async function RN(t,e){return bh(t,e)}/**
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
 */async function NN(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",ut(t,e))}async function PN(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",ut(t,e))}/**
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
 */class oc extends $o{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new oc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await as(e,r,"signInWithPassword");return kd(e,s)}else return kd(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await as(e,r,"signInWithPassword");return kd(e,i)}else return Promise.reject(s)});case"emailLink":return NN(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return b0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PN(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _r(t,e){return Rr(t,"POST","/v1/accounts:signInWithIdp",ut(t,e))}/**
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
 */const DN="http://localhost";class cr extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=zp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_r(e,n)}buildRequest(){const e={requestUri:DN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mo(n)}return e}}/**
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
 */async function ON(t,e){return ft(t,"POST","/v1/accounts:sendVerificationCode",ut(t,e))}async function LN(t,e){return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,e))}async function MN(t,e){const n=await Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,e));if(n.temporaryProof)throw va(t,"account-exists-with-different-credential",n);return n}const FN={USER_NOT_FOUND:"user-not-found"};async function UN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,n),FN)}/**
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
 */class Zs extends $o{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Zs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Zs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return LN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return MN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return UN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new Zs({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
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
 */function $N(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VN(t){const e=zi(ya(t)).link,n=e?zi(ya(e)).deep_link_id:null,r=zi(ya(t)).deep_link_id;return(r?zi(ya(r)).link:null)||r||n||e||t}class Ih{constructor(e){var n,r,s,i,o,a;const c=zi(ya(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=$N((s=c.mode)!==null&&s!==void 0?s:null);O(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=VN(e);try{return new Ih(n)}catch{return null}}}/**
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
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return oc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ih.parseLink(n);return O(r,"argument-error"),oc._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends Nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zi extends Vo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),cr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),cr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Zi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!n&&!i||!a)return null;try{return new Zi(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class Kn extends Vo{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Wn extends Vo{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */const BN="http://localhost";class po extends $o{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return _r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_r(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=n;return!r||!s||!i||r!==s?null:new po(r,i)}static _create(e,n){return new po(e,n)}buildRequest(){return{requestUri:BN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const jN="saml.";class _u extends Nr{constructor(e){O(e.startsWith(jN),"argument-error"),super(e)}static credentialFromResult(e){return _u.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _u.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=po.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return po._create(r,n)}catch{return null}}}/**
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
 */class Qn extends Vo{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function zl(t,e){return Rr(t,"POST","/v1/accounts:signUp",ut(t,e))}/**
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
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xs._fromIdTokenResponse(e,r,s),o=Iv(r);return new xn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Iv(r);return new xn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function qN(t){var e;const n=st(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new xn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await zl(n,{returnSecureToken:!0}),s=await xn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class wu extends Mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wu(e,n,r,s)}}function I0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,i,e,r):i})}/**
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
 */function E0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function zN(t,e){const n=ne(t);await Eh(!0,n,e);const{providerUserInfo:r}=await rN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=E0(r||[]);return n.providerData=n.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Yp(t,e,n=!1){const r=await Tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xn._forOperation(t,"link",r)}async function Eh(t,e,n){await sc(e);const r=E0(e.providerData),s=t===!1?"provider-already-linked":"no-such-provider";O(r.has(n)===t,e.auth,s)}/**
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
 */async function T0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Tr(t,I0(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=wh(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),xn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),i}}/**
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
 */async function x0(t,e,n=!1){const r="signIn",s=await I0(t,r,e),i=await xn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Th(t,e){return x0(st(t),e)}async function S0(t,e){const n=ne(t);return await Eh(!1,n,e.providerId),Yp(n,e)}async function A0(t,e){return T0(ne(t),e)}/**
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
 */async function HN(t,e){return Rr(t,"POST","/v1/accounts:signInWithCustomToken",ut(t,e))}/**
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
 */async function KN(t,e){const n=st(t),r=await HN(n,{token:e,returnSecureToken:!0}),s=await xn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}/**
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
 */class Mc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Xp._fromServerResponse(e,n):"totpInfo"in n?Jp._fromServerResponse(e,n):Nt(e,"internal-error")}}class Xp extends Mc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Xp(n)}}class Jp extends Mc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Jp(n)}}/**
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
 */function eo(t,e,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function GN(t,e,n){var r;const s=st(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await as(s,i,"getOobCode",!0);n&&eo(s,o,n),await Cd(s,o)}else n&&eo(s,i,n),await Cd(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await as(s,i,"getOobCode",!0);n&&eo(s,a,n),await Cd(s,a)}else return Promise.reject(o)})}async function WN(t,e,n){await w0(ne(t),{oobCode:e,newPassword:n})}async function QN(t,e){await kN(ne(t),{oobCode:e})}async function k0(t,e){const n=ne(t),r=await w0(n,{oobCode:e}),s=r.requestType;switch(O(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=Mc._fromServerResponse(st(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function YN(t,e){const{data:n}=await k0(ne(t),e);return n.email}async function XN(t,e,n){var r;const s=st(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await as(s,i,"signUpPassword");o=zl(s,l)}else o=zl(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await as(s,i,"signUpPassword");return zl(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await xn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function JN(t,e,n){return Th(ne(t),ys.credential(e,n))}/**
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
 */async function ZN(t,e,n){var r;const s=st(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){O(c.handleCodeInApp,s,"argument-error"),c&&eo(s,a,c)}if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await as(s,i,"getOobCode",!0);o(a,n),await Rd(s,a)}else o(i,n),await Rd(s,i).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await as(s,i,"getOobCode",!0);o(c,n),await Rd(s,c)}else return Promise.reject(a)})}function eP(t,e){const n=Ih.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function tP(t,e,n){const r=ne(t),s=ys.credentialWithLink(e,n||rc());return O(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Th(r,s)}/**
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
 */async function nP(t,e){return ft(t,"POST","/v1/accounts:createAuthUri",ut(t,e))}/**
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
 */async function rP(t,e){const n=Kp()?rc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await nP(ne(t),r);return s||[]}async function sP(t,e){const n=ne(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&eo(n.auth,s,e);const{email:i}=await CN(n.auth,s);i!==t.email&&await t.reload()}async function iP(t,e,n){const r=ne(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&eo(r.auth,i,n);const{email:o}=await RN(r.auth,i);o!==t.email&&await t.reload()}/**
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
 */async function oP(t,e){return ft(t,"POST","/v1/accounts:update",e)}/**
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
 */async function aP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Tr(r,oP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function cP(t,e){return C0(ne(t),e,null)}function lP(t,e){return C0(ne(t),null,e)}async function C0(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Tr(t,b0(r,i));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function uP(t){var e,n;if(!t)return null;const{providerId:r}=t,s=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},i=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=wh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new to(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new hP(i,s);case"github.com":return new dP(i,s);case"google.com":return new fP(i,s);case"twitter.com":return new pP(i,s,t.screenName||null);case"custom":case"anonymous":return new to(i,null);default:return new to(i,r,s)}}class to{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class R0 extends to{constructor(e,n,r,s){super(e,n,r),this.username=s}}class hP extends to{constructor(e,n){super(e,"facebook.com",n)}}class dP extends R0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class fP extends to{constructor(e,n){super(e,"google.com",n)}}class pP extends R0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function mP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:uP(n)}class Bs{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Bs("enroll",e,n)}static _fromMfaPendingCredential(e){return new Bs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Bs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Bs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Zp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=st(e),s=n.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>Mc._fromServerResponse(r,a));O(s.mfaPendingCredential,r,"internal-error");const o=Bs._fromMfaPendingCredential(s.mfaPendingCredential);return new Zp(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const u=await xn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return O(n.user,r,"internal-error"),xn._forOperation(n.user,n.operationType,l);default:Nt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function gP(t,e){var n;const r=ne(t),s=e;return O(e.customData.operationType,r,"argument-error"),O((n=s.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Zp._fromError(r,s)}/**
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
 */function yP(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:start",ut(t,e))}function vP(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:finalize",ut(t,e))}function _P(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ut(t,e))}class em{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Mc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new em(e)}async getSession(){return Bs._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,s=await this.getSession(),i=await Tr(this.user,r._process(this.user.auth,s,n));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const s=await Tr(this.user,_P(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==n),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const Nd=new WeakMap;function wP(t){const e=ne(t);return Nd.has(e)||Nd.set(e,em._fromUser(e)),Nd.get(e)}const bu="__sak";/**
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
 */class N0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bu,"1"),this.storage.removeItem(bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function bP(){const t=We();return Wp(t)||Uo(t)}const IP=1e3,EP=10;class P0 extends N0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bP()&&gN(),this.fallbackToPolling=f0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P0.type="LOCAL";const tm=P0;/**
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
 */class D0 extends N0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D0.type="SESSION";const oi=D0;/**
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
 */function TP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await TP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xh.receivers=[];/**
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
 */function Fc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Fc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lt(){return window}function SP(t){lt().location.href=t}/**
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
 */function nm(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function AP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CP(){return nm()?self:null}/**
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
 */const O0="firebaseLocalStorageDb",RP=1,Iu="firebaseLocalStorage",L0="fbase_key";class Uc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sh(t,e){return t.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function NP(){const t=indexedDB.deleteDatabase(O0);return new Uc(t).toPromise()}function _f(){const t=indexedDB.open(O0,RP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Iu,{keyPath:L0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Iu)?e(r):(r.close(),await NP(),e(await _f()))})})}async function Ev(t,e,n){const r=Sh(t,!0).put({[L0]:e,value:n});return new Uc(r).toPromise()}async function PP(t,e){const n=Sh(t,!1).get(e),r=await new Uc(n).toPromise();return r===void 0?null:r.value}function Tv(t,e){const n=Sh(t,!0).delete(e);return new Uc(n).toPromise()}const DP=800,OP=3;class M0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _f(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xh._getInstance(CP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AP(),!this.activeServiceWorker)return;this.sender=new xP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _f();return await Ev(e,bu,"1"),await Tv(e,bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ev(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sh(s,!1).getAll();return new Uc(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M0.type="LOCAL";const ac=M0;/**
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
 */function LP(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:start",ut(t,e))}function MP(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:finalize",ut(t,e))}/**
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
 */const FP=500,UP=6e4,yl=1e12;class $P{constructor(e){this.auth=e,this.counter=yl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new VP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||yl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||yl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||yl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class VP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;O(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=BP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},UP)},FP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function BP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Pd=y0("rcb"),jP=new Oc(3e4,6e4),qP="https://www.google.com/recaptcha/api.js?";class zP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=lt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(HP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&vv(lt().grecaptcha)?Promise.resolve(lt().grecaptcha):new Promise((r,s)=>{const i=lt().setTimeout(()=>{s(Ct(e,"network-request-failed"))},jP.get());lt()[Pd]=()=>{lt().clearTimeout(i),delete lt()[Pd];const a=lt().grecaptcha;if(!a||!vv(a)){s(Ct(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${qP}?${Mo({onload:Pd,render:"explicit",hl:n})}`;Qp(o).catch(()=>{clearTimeout(i),s(Ct(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=lt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function HP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class KP{async load(e){return new $P(e)}clearedOneInstance(){}}/**
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
 */const F0="recaptcha",GP={theme:"light",type:"image"};let WP=class{constructor(e,n=Object.assign({},GP),r){this.parameters=n,this.type=F0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=st(r),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;O(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new KP:new zP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=lt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(Kp()&&!nm(),this.auth,"internal-error"),await QP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await yN(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function QP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class rm{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Zs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function YP(t,e,n){const r=st(t),s=await Ah(r,e,ne(n));return new rm(s,i=>Th(r,i))}async function XP(t,e,n){const r=ne(t);await Eh(!1,r,"phone");const s=await Ah(r.auth,e,ne(n));return new rm(s,i=>S0(r,i))}async function JP(t,e,n){const r=ne(t),s=await Ah(r.auth,e,ne(n));return new rm(s,i=>A0(r,i))}async function Ah(t,e,n){var r;const s=await n.verify();try{O(typeof s=="string",t,"argument-error"),O(n.type===F0,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return O(o.type==="enroll",t,"internal-error"),(await yP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await LP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await ON(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}async function ZP(t,e){await Yp(ne(t),e)}/**
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
 */let ai=class Hl{constructor(e){this.providerId=Hl.PROVIDER_ID,this.auth=st(e)}verifyPhoneNumber(e,n){return Ah(this.auth,e,ne(n))}static credential(e,n){return Zs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Hl.credentialFromTaggedObject(n)}static credentialFromError(e){return Hl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Zs._fromTokenResponse(n,r):null}};ai.PROVIDER_ID="phone";ai.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ti(t,e){return e?fn(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sm extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eD(t){return x0(t.auth,new sm(t),t.bypassAuthState)}function tD(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),T0(n,new sm(t),t.bypassAuthState)}async function nD(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Yp(n,new sm(t),t.bypassAuthState)}/**
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
 */class U0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eD;case"linkViaPopup":case"linkViaRedirect":return nD;case"reauthViaPopup":case"reauthViaRedirect":return tD;default:Nt(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rD=new Oc(2e3,1e4);async function sD(t,e,n){const r=st(t);Fo(t,e,Nr);const s=Ti(r,n);return new pr(r,"signInViaPopup",e,s).executeNotNull()}async function iD(t,e,n){const r=ne(t);Fo(r.auth,e,Nr);const s=Ti(r.auth,n);return new pr(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function oD(t,e,n){const r=ne(t);Fo(r.auth,e,Nr);const s=Ti(r.auth,n);return new pr(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class pr extends U0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rD.get())};e()}}pr.currentPopupAction=null;/**
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
 */const aD="pendingRedirect",Na=new Map;class cD extends U0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Na.get(this.auth._key());if(!e){try{const r=await lD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Na.set(this.auth._key(),e)}return this.bypassAuthState||Na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lD(t,e){const n=V0(e),r=$0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function im(t,e){return $0(t)._set(V0(e),"true")}function uD(){Na.clear()}function om(t,e){Na.set(t._key(),e)}function $0(t){return fn(t._redirectPersistence)}function V0(t){return Js(aD,t.config.apiKey,t.name)}/**
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
 */function hD(t,e,n){return dD(t,e,n)}async function dD(t,e,n){const r=st(t);Fo(t,e,Nr),await r._initializationPromise;const s=Ti(r,n);return await im(s,r),s._openRedirect(r,e,"signInViaRedirect")}function fD(t,e,n){return pD(t,e,n)}async function pD(t,e,n){const r=ne(t);Fo(r.auth,e,Nr),await r.auth._initializationPromise;const s=Ti(r.auth,n);await im(s,r.auth);const i=await B0(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function mD(t,e,n){return gD(t,e,n)}async function gD(t,e,n){const r=ne(t);Fo(r.auth,e,Nr),await r.auth._initializationPromise;const s=Ti(r.auth,n);await Eh(!1,r,e.providerId),await im(s,r.auth);const i=await B0(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function yD(t,e){return await st(t)._initializationPromise,kh(t,e,!1)}async function kh(t,e,n=!1){const r=st(t),s=Ti(r,e),o=await new cD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function B0(t){const e=Fc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const vD=10*60*1e3;class j0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_D(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vD&&this.cachedEventUids.clear(),this.cachedEventUids.has(xv(e))}saveEventToCache(e){this.cachedEventUids.add(xv(e)),this.lastProcessedEventTime=Date.now()}}function xv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _D(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q0(t);default:return!1}}/**
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
 */async function z0(t,e={}){return ft(t,"GET","/v1/projects",e)}/**
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
 */const wD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bD=/^https?/;async function ID(t){if(t.config.emulator)return;const{authorizedDomains:e}=await z0(t);for(const n of e)try{if(ED(n))return}catch{}Nt(t,"unauthorized-domain")}function ED(t){const e=rc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bD.test(n))return!1;if(wD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const TD=new Oc(3e4,6e4);function Sv(){const t=lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xD(t){return new Promise((e,n)=>{var r,s,i;function o(){Sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sv(),n(Ct(t,"network-request-failed"))},timeout:TD.get()})}if(!((s=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=lt().gapi)===null||i===void 0)&&i.load)o();else{const a=y0("iframefcb");return lt()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},Qp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Kl=null,e})}let Kl=null;function SD(t){return Kl=Kl||xD(t),Kl}/**
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
 */const AD=new Oc(5e3,15e3),kD="__/auth/iframe",CD="emulator/auth/iframe",RD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ND=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PD(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gp(e,CD):`https://${t.config.authDomain}/${kD}`,r={apiKey:e.apiKey,appName:t.name,v:Cr},s=ND.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mo(r).slice(1)}`}async function DD(t){const e=await SD(t),n=lt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:PD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=lt().setTimeout(()=>{i(o)},AD.get());function c(){lt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const OD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LD=500,MD=600,FD="_blank",UD="http://localhost";class Av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $D(t,e,n,r=LD,s=MD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},OD),{width:r.toString(),height:s.toString(),top:i,left:o}),l=We().toLowerCase();n&&(a=l0(l)?FD:n),c0(l)&&(e=e||UD,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(pN(l)&&a!=="_self")return VD(e||"",a),new Av(null);const h=window.open(e||"",a,u);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Av(h)}function VD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BD="__/auth/handler",jD="emulator/auth/handler",qD=encodeURIComponent("fac");async function wf(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cr,eventId:s};if(e instanceof Nr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Vo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${qD}=${encodeURIComponent(c)}`:"";return`${zD(t)}?${Mo(a).slice(1)}${l}`}function zD({config:t}){return t.emulator?Gp(t,jD):`https://${t.authDomain}/${BD}`}/**
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
 */const Dd="webStorageSupport";class HD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oi,this._completeRedirectFn=kh,this._overrideRedirectResult=om}async _openPopup(e,n,r,s){var i;$n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wf(e,n,r,rc(),s);return $D(e,o,Fc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wf(e,n,r,rc(),s);return SP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DD(e),r=new j0(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dd,{type:Dd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Dd];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ID(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return f0()||Wp()||Uo()}}const KD=HD;class GD{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Xn("unexpected MultiFactorSessionType")}}}class am extends GD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new am(e)}_finalizeEnroll(e,n,r){return vP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return MP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class H0{constructor(){}static assertion(e){return am._fromCredential(e)}}H0.FACTOR_ID="phone";var kv="@firebase/auth",Cv="0.23.2";/**
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
 */class WD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YD(t){Er(new Un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p0(t)},l=new EN(r,s,i,c);return TN(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Er(new Un("auth-internal",e=>{const n=st(e.getProvider("auth").getImmediate());return(r=>new WD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(kv,Cv,QD(t)),En(kv,Cv,"esm2017")}/**
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
 */const XD=5*60;yC("authIdTokenMaxAge");YD("Browser");/**
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
 */const JD=2e3;async function ZD(t,e,n){var r;const{BuildInfo:s}=ci();$n(e.sessionId,"AuthEvent did not contain a session ID");const i=await sO(e.sessionId),o={};return Uo()?o.ibi=s.packageName:Lc()?o.apn=s.packageName:Nt(t,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,wf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function eO(t){const{BuildInfo:e}=ci(),n={};Uo()?n.iosBundleId=e.packageName:Lc()?n.androidPackageName=e.packageName:Nt(t,"operation-not-supported-in-this-environment"),await z0(t,n)}function tO(t){const{cordova:e}=ci();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(t):s=e.InAppBrowser.open(t,fN()?"_blank":"_system","location=yes"),n(s)})})}async function nO(t,e,n){const{cordova:r}=ci();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Ct(t,"redirect-cancelled-by-user"))},JD))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Lc()&&document.addEventListener("visibilitychange",u,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{s()}}function rO(t){var e,n,r,s,i,o,a,c,l,u;const h=ci();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((i=(s=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function sO(t){const e=iO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}function iO(t){if($n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const oO=20;class aO extends j0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function cO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:hO(),postBody:null,tenantId:t.tenantId,error:Ct(t,"no-auth-event")}}function lO(t,e){return bf()._set(If(t),e)}async function Rv(t){const e=await bf()._get(If(t));return e&&await bf()._remove(If(t)),e}function uO(t,e){var n,r;const s=fO(e);if(s.includes("/__/auth/callback")){const i=Gl(s),o=i.firebaseError?dO(decodeURIComponent(i.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Ct(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:s,postBody:null}}return null}function hO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<oO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function bf(){return fn(tm)}function If(t){return Js("authEvent",t.config.apiKey,t.name)}function dO(t){try{return JSON.parse(t)}catch{return null}}function fO(t){const e=Gl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Gl(n).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Gl(s).link||s||r||n||t}function Gl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return zi(n.join("?"))}/**
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
 */const pO=500;class mO{constructor(){this._redirectPersistence=oi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=kh,this._overrideRedirectResult=om}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new aO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Nt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,s){rO(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),uD(),await this._originValidation(e);const o=cO(e,r,s);await lO(e,o);const a=await ZD(e,o,n),c=await tO(a);return nO(e,i,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=ci(),o=setTimeout(async()=>{await Rv(e),n.onEvent(Nv())},pO),a=async u=>{clearTimeout(o);const h=await Rv(e);let d=null;h&&(u!=null&&u.url)&&(d=uO(h,u.url)),n.onEvent(d||Nv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,l=`${i.packageName.toLowerCase()}://`;ci().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const gO=mO;function Nv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ct("no-auth-event")}}/**
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
 */function yO(t,e){st(t)._logFramework(e)}var vO="@firebase/auth-compat",_O="0.4.2";/**
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
 */const wO=1e3;function Pa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function bO(){return Pa()==="http:"||Pa()==="https:"}function K0(t=We()){return!!((Pa()==="file:"||Pa()==="ionic:"||Pa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function IO(){return $p()||vh()}function EO(){return Bb()&&(document==null?void 0:document.documentMode)===11}function TO(t=We()){return/Edge\/\d+/.test(t)}function xO(t=We()){return EO()||TO(t)}function G0(){try{const t=self.localStorage,e=Fc();if(t)return t.setItem(e,"1"),t.removeItem(e),xO()?ec():!0}catch{return cm()&&ec()}return!1}function cm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Od(){return(bO()||Vb()||K0())&&!IO()&&G0()&&!cm()}function W0(){return K0()&&typeof document<"u"}async function SO(){return W0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},wO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function AO(){return typeof window<"u"?window:null}/**
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
 */const hn={LOCAL:"local",NONE:"none",SESSION:"session"},ra=O,Q0="persistence";function kO(t,e){if(ra(Object.values(hn).includes(e),t,"invalid-persistence-type"),$p()){ra(e!==hn.SESSION,t,"unsupported-persistence-type");return}if(vh()){ra(e===hn.NONE,t,"unsupported-persistence-type");return}if(cm()){ra(e===hn.NONE||e===hn.LOCAL&&ec(),t,"unsupported-persistence-type");return}ra(e===hn.NONE||G0(),t,"unsupported-persistence-type")}async function Ef(t){await t._initializationPromise;const e=Y0(),n=Js(Q0,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function CO(t,e){const n=Y0();if(!n)return[];const r=Js(Q0,t,e);switch(n.getItem(r)){case hn.NONE:return[fo];case hn.LOCAL:return[ac,oi];case hn.SESSION:return[oi];default:return[]}}function Y0(){var t;try{return((t=AO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const RO=O;class Xr{constructor(){this.browserResolver=fn(KD),this.cordovaResolver=fn(gO),this.underlyingResolver=null,this._redirectPersistence=oi,this._completeRedirectFn=kh,this._overrideRedirectResult=om}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,s)}async _openRedirect(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,s)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return W0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return RO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await SO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function X0(t){return t.unwrap()}function NO(t){return t.wrapped()}/**
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
 */function PO(t){return J0(t)}function DO(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new OO(t,gP(t,e))}else if(r){const s=J0(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function J0(t){const{_tokenResponse:e}=t instanceof Mt?t.customData:t;if(!e)return null;if(!(t instanceof Mt)&&"temporaryProof"in e&&"phoneNumber"in e)return ai.credentialFromResult(t);const n=e.providerId;if(!n||n===na.PASSWORD)return null;let r;switch(n){case na.GOOGLE:r=Gn;break;case na.FACEBOOK:r=Kn;break;case na.GITHUB:r=Wn;break;case na.TWITTER:r=Qn;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?n.startsWith("saml.")?po._create(n,a):cr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:s,accessToken:i}):new Zi(n).credential({idToken:s,accessToken:i,rawNonce:c})}return t instanceof Mt?r.credentialFromError(t):r.credentialFromResult(t)}function Wt(t,e){return e.catch(n=>{throw n instanceof Mt&&DO(t,n),n}).then(n=>{const r=n.operationType,s=n.user;return{operationType:r,credential:PO(n),additionalUserInfo:mP(n),user:mr.getOrCreate(s)}})}async function Tf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Wt(t,n.confirm(r))}}class OO{constructor(e,n){this.resolver=n,this.auth=NO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Wt(X0(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class mr{constructor(e){this._delegate=e,this.multiFactor=wP(e)}static getOrCreate(e){return mr.USER_MAP.has(e)||mr.USER_MAP.set(e,new mr(e)),mr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Wt(this.auth,S0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Tf(this.auth,XP(this._delegate,e,n))}async linkWithPopup(e){return Wt(this.auth,oD(this._delegate,e,Xr))}async linkWithRedirect(e){return await Ef(st(this.auth)),mD(this._delegate,e,Xr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Wt(this.auth,A0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Tf(this.auth,JP(this._delegate,e,n))}reauthenticateWithPopup(e){return Wt(this.auth,iD(this._delegate,e,Xr))}async reauthenticateWithRedirect(e){return await Ef(st(this.auth)),fD(this._delegate,e,Xr)}sendEmailVerification(e){return sP(this._delegate,e)}async unlink(e){return await zN(this._delegate,e),this}updateEmail(e){return cP(this._delegate,e)}updatePassword(e){return lP(this._delegate,e)}updatePhoneNumber(e){return ZP(this._delegate,e)}updateProfile(e){return aP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return iP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}mr.USER_MAP=new WeakMap;/**
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
 */const sa=O;class xf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;sa(r,"invalid-api-key",{appName:e.name}),sa(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?Xr:void 0;this._delegate=n.initialize({options:{persistence:LO(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(WR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?mr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){xN(this._delegate,e,n)}applyActionCode(e){return QN(this._delegate,e)}checkActionCode(e){return k0(this._delegate,e)}confirmPasswordReset(e,n){return WN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Wt(this._delegate,XN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return rP(this._delegate,e)}isSignInWithEmailLink(e){return eP(this._delegate,e)}async getRedirectResult(){sa(Od(),this._delegate,"operation-not-supported-in-this-environment");const e=await yD(this._delegate,Xr);return e?Wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){yO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:s,error:i,complete:o}=Pv(e,n,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,n,r){const{next:s,error:i,complete:o}=Pv(e,n,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,n){return ZN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return GN(this._delegate,e,n||void 0)}async setPersistence(e){kO(this._delegate,e);let n;switch(e){case hn.SESSION:n=oi;break;case hn.LOCAL:n=await fn(ac)._isAvailable()?ac:tm;break;case hn.NONE:n=fo;break;default:return Nt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Wt(this._delegate,qN(this._delegate))}signInWithCredential(e){return Wt(this._delegate,Th(this._delegate,e))}signInWithCustomToken(e){return Wt(this._delegate,KN(this._delegate,e))}signInWithEmailAndPassword(e,n){return Wt(this._delegate,JN(this._delegate,e,n))}signInWithEmailLink(e,n){return Wt(this._delegate,tP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Tf(this._delegate,YP(this._delegate,e,n))}async signInWithPopup(e){return sa(Od(),this._delegate,"operation-not-supported-in-this-environment"),Wt(this._delegate,sD(this._delegate,e,Xr))}async signInWithRedirect(e){return sa(Od(),this._delegate,"operation-not-supported-in-this-environment"),await Ef(this._delegate),hD(this._delegate,e,Xr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return YN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}xf.Persistence=hn;function Pv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const s=r;return{next:o=>s(o&&mr.getOrCreate(o)),error:e,complete:n}}function LO(t,e){const n=CO(t,e);if(typeof self<"u"&&!n.includes(ac)&&n.push(ac),typeof window<"u")for(const r of[tm,oi])n.includes(r)||n.push(r);return n.includes(fo)||n.push(fo),n}/**
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
 */class lm{constructor(){this.providerId="phone",this._delegate=new ai(X0(Xt.auth()))}static credential(e,n){return ai.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}lm.PHONE_SIGN_IN_METHOD=ai.PHONE_SIGN_IN_METHOD;lm.PROVIDER_ID=ai.PROVIDER_ID;/**
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
 */const MO=O;class FO{constructor(e,n,r=Xt.app()){var s;MO((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new WP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const UO="auth-compat";function $O(t){t.INTERNAL.registerComponent(new Un(UO,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new xf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Oi.EMAIL_SIGNIN,PASSWORD_RESET:Oi.PASSWORD_RESET,RECOVER_EMAIL:Oi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Oi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Oi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Oi.VERIFY_EMAIL}},EmailAuthProvider:ys,FacebookAuthProvider:Kn,GithubAuthProvider:Wn,GoogleAuthProvider:Gn,OAuthProvider:Zi,SAMLAuthProvider:_u,PhoneAuthProvider:lm,PhoneMultiFactorGenerator:H0,RecaptchaVerifier:FO,TwitterAuthProvider:Qn,Auth:xf,AuthCredential:$o,Error:Mt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(vO,_O)}$O(Xt);var VO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,um=um||{},ae=VO||self;function Ch(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $c(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BO(t){return Object.prototype.hasOwnProperty.call(t,Ld)&&t[Ld]||(t[Ld]=++jO)}var Ld="closure_uid_"+(1e9*Math.random()>>>0),jO=0;function qO(t,e,n){return t.call.apply(t.bind,arguments)}function zO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ft=qO:Ft=zO,Ft.apply(null,arguments)}function vl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function bt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function vs(){this.s=this.s,this.o=this.o}var HO=0;vs.prototype.s=!1;vs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),HO!=0)&&BO(this)};vs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Z0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ch(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ut.prototype.h=function(){this.defaultPrevented=!0};var KO=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",()=>{},e),ae.removeEventListener("test",()=>{},e)}catch{}return t}();function cc(t){return/^[\s\xa0]*$/.test(t)}function Rh(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function Yn(t){return Rh().indexOf(t)!=-1}function dm(t){return dm[" "](t),t}dm[" "]=function(){};function GO(t,e){var n=$L;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var WO=Yn("Opera"),mo=Yn("Trident")||Yn("MSIE"),eI=Yn("Edge"),Sf=eI||mo,tI=Yn("Gecko")&&!(Rh().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge"))&&!(Yn("Trident")||Yn("MSIE"))&&!Yn("Edge"),QO=Rh().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge");function nI(){var t=ae.document;return t?t.documentMode:void 0}var Af;e:{var Md="",Fd=function(){var t=Rh();if(tI)return/rv:([^\);]+)(\)|;)/.exec(t);if(eI)return/Edge\/([\d\.]+)/.exec(t);if(mo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QO)return/WebKit\/(\S+)/.exec(t);if(WO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fd&&(Md=Fd?Fd[1]:""),mo){var Ud=nI();if(Ud!=null&&Ud>parseFloat(Md)){Af=String(Ud);break e}}Af=Md}var kf;if(ae.document&&mo){var Ov=nI();kf=Ov||parseInt(Af,10)||void 0}else kf=void 0;var YO=kf;function lc(t,e){if(Ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tI){e:{try{dm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lc.$.h.call(this)}}bt(lc,Ut);var XO={2:"touch",3:"pen",4:"mouse"};lc.prototype.h=function(){lc.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vc="closure_listenable_"+(1e6*Math.random()|0),JO=0;function ZO(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++JO,this.fa=this.ia=!1}function Nh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function fm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function eL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function rI(t){const e={};for(const n in t)e[n]=t[n];return e}const Lv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sI(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Lv.length;i++)n=Lv[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ph(t){this.src=t,this.g={},this.h=0}Ph.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Rf(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ZO(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Cf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Z0(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Nh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rf(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var pm="closure_lm_"+(1e6*Math.random()|0),$d={};function iI(t,e,n,r,s){if(r&&r.once)return aI(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)iI(t,e[i],n,r,s);return null}return n=ym(n),t&&t[Vc]?t.O(e,n,$c(r)?!!r.capture:!!r,s):oI(t,e,n,!1,r,s)}function oI(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=$c(s)?!!s.capture:!!s,a=gm(t);if(a||(t[pm]=a=new Ph(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=tL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)KO||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(lI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tL(){function t(n){return e.call(t.src,t.listener,n)}const e=nL;return t}function aI(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)aI(t,e[i],n,r,s);return null}return n=ym(n),t&&t[Vc]?t.P(e,n,$c(r)?!!r.capture:!!r,s):oI(t,e,n,!0,r,s)}function cI(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)cI(t,e[i],n,r,s);else r=$c(r)?!!r.capture:!!r,n=ym(n),t&&t[Vc]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Rf(i,n,r,s),-1<n&&(Nh(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=gm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rf(e,n,r,s)),(n=-1<t?e[t]:null)&&mm(n))}function mm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vc])Cf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(lI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gm(e))?(Cf(n,t),n.h==0&&(n.src=null,e[pm]=null)):Nh(t)}}}function lI(t){return t in $d?$d[t]:$d[t]="on"+t}function nL(t,e){if(t.fa)t=!0;else{e=new lc(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mm(t),t=n.call(r,e)}return t}function gm(t){return t=t[pm],t instanceof Ph?t:null}var Vd="__closure_events_fn_"+(1e9*Math.random()>>>0);function ym(t){return typeof t=="function"?t:(t[Vd]||(t[Vd]=function(e){return t.handleEvent(e)}),t[Vd])}function wt(){vs.call(this),this.i=new Ph(this),this.S=this,this.J=null}bt(wt,vs);wt.prototype[Vc]=!0;wt.prototype.removeEventListener=function(t,e,n,r){cI(this,t,e,n,r)};function Rt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ut(e,t);else if(e instanceof Ut)e.target=e.target||t;else{var s=e;e=new Ut(r,t),sI(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=_l(o,r,!0,e)&&s}if(o=e.g=t,s=_l(o,r,!0,e)&&s,s=_l(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=_l(o,r,!1,e)&&s}wt.prototype.N=function(){if(wt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Nh(n[r]);delete t.g[e],t.h--}}this.J=null};wt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};wt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _l(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Cf(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var vm=ae.JSON.stringify;class rL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function sL(){var t=_m;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class iL{constructor(){this.h=this.g=null}add(e,n){const r=uI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var uI=new rL(()=>new oL,t=>t.reset());class oL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function cL(t){ae.setTimeout(()=>{throw t},0)}let uc,hc=!1,_m=new iL,hI=()=>{const t=ae.Promise.resolve(void 0);uc=()=>{t.then(lL)}};var lL=()=>{for(var t;t=sL();){try{t.h.call(t.g)}catch(n){cL(n)}var e=uI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hc=!1};function Dh(t,e){wt.call(this),this.h=t||1,this.g=e||ae,this.j=Ft(this.qb,this),this.l=Date.now()}bt(Dh,wt);j=Dh.prototype;j.ga=!1;j.T=null;j.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Rt(this,"tick"),this.ga&&(wm(this),this.start()))}};j.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}j.N=function(){Dh.$.N.call(this),wm(this),delete this.g};function bm(t,e,n){if(typeof t=="function")n&&(t=Ft(t,n));else if(t&&typeof t.handleEvent=="function")t=Ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function dI(t){t.g=bm(()=>{t.g=null,t.i&&(t.i=!1,dI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class uL extends vs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dI(this)}N(){super.N(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dc(t){vs.call(this),this.h=t,this.g={}}bt(dc,vs);var Mv=[];function fI(t,e,n,r){Array.isArray(n)||(n&&(Mv[0]=n.toString()),n=Mv);for(var s=0;s<n.length;s++){var i=iI(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function pI(t){fm(t.g,function(e,n){this.g.hasOwnProperty(n)&&mm(e)},t),t.g={}}dc.prototype.N=function(){dc.$.N.call(this),pI(this)};dc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oh(){this.g=!0}Oh.prototype.Ea=function(){this.g=!1};function hL(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function dL(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Hi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pL(t,n)+(r?" "+r:"")})}function fL(t,e){t.info(function(){return"TIMEOUT: "+e})}Oh.prototype.info=function(){};function pL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return vm(n)}catch{return e}}var xi={},Fv=null;function Lh(){return Fv=Fv||new wt}xi.Ta="serverreachability";function mI(t){Ut.call(this,xi.Ta,t)}bt(mI,Ut);function fc(t){const e=Lh();Rt(e,new mI(e))}xi.STAT_EVENT="statevent";function gI(t,e){Ut.call(this,xi.STAT_EVENT,t),this.stat=e}bt(gI,Ut);function zt(t){const e=Lh();Rt(e,new gI(e,t))}xi.Ua="timingevent";function yI(t,e){Ut.call(this,xi.Ua,t),this.size=e}bt(yI,Ut);function Bc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var Mh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Im(){}Im.prototype.h=null;function Uv(t){return t.h||(t.h=t.i())}function _I(){}var jc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Em(){Ut.call(this,"d")}bt(Em,Ut);function Tm(){Ut.call(this,"c")}bt(Tm,Ut);var Nf;function Fh(){}bt(Fh,Im);Fh.prototype.g=function(){return new XMLHttpRequest};Fh.prototype.i=function(){return{}};Nf=new Fh;function qc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new dc(this),this.P=mL,t=Sf?125:void 0,this.V=new Dh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wI}function wI(){this.i=null,this.g="",this.h=!1}var mL=45e3,Pf={},Eu={};j=qc.prototype;j.setTimeout=function(t){this.P=t};function Df(t,e,n){t.L=1,t.v=$h(xr(e)),t.s=n,t.S=!0,bI(t,null)}function bI(t,e){t.G=Date.now(),zc(t),t.A=xr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),CI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new wI,t.g=YI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new uL(Ft(t.Pa,t,t.g),t.O)),fI(t.U,t.g,"readystatechange",t.nb),e=t.I?rI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),fc(),hL(t.j,t.u,t.A,t.m,t.W,t.s)}j.nb=function(t){t=t.target;const e=this.M;e&&Jn(t)==3?e.l():this.Pa(t)};j.Pa=function(t){try{if(t==this.g)e:{const u=Jn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sf||this.g&&(this.h.h||this.g.ja()||jv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?fc(3):fc(2)),Uh(this);var n=this.g.da();this.ca=n;t:if(II(this)){var r=jv(this.g);t="";var s=r.length,i=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){js(this),Da(this);var o="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,dL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cc(a)){var l=a;break t}}l=null}if(n=l)Hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Of(this,n);else{this.i=!1,this.o=3,zt(12),js(this),Da(this);break e}}this.S?(EI(this,u,o),Sf&&this.i&&u==3&&(fI(this.U,this.V,"tick",this.mb),this.V.start())):(Hi(this.j,this.m,o,null),Of(this,o)),u==4&&js(this),this.i&&!this.J&&(u==4?KI(this.l,this):(this.i=!1,zc(this)))}else ML(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),js(this),Da(this)}}}catch{}finally{}};function II(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function EI(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=gL(t,n),s==Eu){e==4&&(t.o=4,zt(14),r=!1),Hi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Pf){t.o=4,zt(15),Hi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hi(t.j,t.m,s,null),Of(t,s);II(t)&&s!=Eu&&s!=Pf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rm(e),e.M=!0,zt(11))):(Hi(t.j,t.m,n,"[Invalid Chunked Response]"),js(t),Da(t))}j.mb=function(){if(this.g){var t=Jn(this.g),e=this.g.ja();this.C<e.length&&(Uh(this),EI(this,t,e),this.i&&t!=4&&zc(this))}};function gL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Eu:(n=Number(e.substring(n,r)),isNaN(n)?Pf:(r+=1,r+n>e.length?Eu:(e=e.slice(r,r+n),t.C=r+n,e)))}j.cancel=function(){this.J=!0,js(this)};function zc(t){t.Y=Date.now()+t.P,TI(t,t.P)}function TI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bc(Ft(t.lb,t),e)}function Uh(t){t.B&&(ae.clearTimeout(t.B),t.B=null)}j.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fL(this.j,this.A),this.L!=2&&(fc(),zt(17)),js(this),this.o=2,Da(this)):TI(this,this.Y-t)};function Da(t){t.l.H==0||t.J||KI(t.l,t)}function js(t){Uh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,wm(t.V),pI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Of(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Lf(n.i,t))){if(!t.K&&Lf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Su(n),jh(n);else break e;Cm(n),zt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bc(Ft(n.ib,n),6e3));if(1>=PI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else qs(n,11)}else if((t.K||n.g==t)&&Su(n),!cc(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(xm(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,$e(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=QI(r,r.J?r.pa:null,r.Y),o.K){DI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Uh(a),zc(a)),r.g=o}else zI(r);0<n.j.length&&qh(n)}else l[0]!="stop"&&l[0]!="close"||qs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qs(n,7):km(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}fc(4)}catch{}}function yL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ch(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function vL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ch(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ch(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vL(t),r=yL(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var SI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _L(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=t.h,Tu(this,t.j),this.s=t.s,this.g=t.g,xu(this,t.m),this.l=t.l;var e=t.i,n=new pc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$v(this,n),this.o=t.o}else t&&(e=String(t).match(SI))?(this.h=!1,Tu(this,e[1]||"",!0),this.s=_a(e[2]||""),this.g=_a(e[3]||"",!0),xu(this,e[4]),this.l=_a(e[5]||"",!0),$v(this,e[6]||"",!0),this.o=_a(e[7]||"")):(this.h=!1,this.i=new pc(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wa(e,Vv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wa(e,Vv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wa(n,n.charAt(0)=="/"?IL:bL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wa(n,TL)),t.join("")};function xr(t){return new ei(t)}function Tu(t,e,n){t.j=n?_a(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $v(t,e,n){e instanceof pc?(t.i=e,xL(t.i,t.h)):(n||(e=wa(e,EL)),t.i=new pc(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function $h(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _a(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vv=/[#\/\?@]/g,bL=/[#\?:]/g,IL=/[#\?]/g,EL=/[#\?@]/g,TL=/#/g;function pc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _s(t){t.g||(t.g=new Map,t.h=0,t.i&&_L(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=pc.prototype;j.add=function(t,e){_s(this),this.i=null,t=Bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function AI(t,e){_s(t),e=Bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kI(t,e){return _s(t),e=Bo(t,e),t.g.has(e)}j.forEach=function(t,e){_s(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};j.ta=function(){_s(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};j.Z=function(t){_s(this);let e=[];if(typeof t=="string")kI(this,t)&&(e=e.concat(this.g.get(Bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return _s(this),this.i=null,t=Bo(this,t),kI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function CI(t,e,n){AI(t,e),0<n.length&&(t.i=null,t.g.set(Bo(t,e),hm(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xL(t,e){e&&!t.j&&(_s(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(AI(this,r),CI(this,s,n))},t)),t.j=e}var SL=class{constructor(t,e){this.g=t,this.map=e}};function RI(t){this.l=t||AL,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ka&&ae.g.Ka()&&ae.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AL=10;function NI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function PI(t){return t.h?1:t.g?t.g.size:0}function Lf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xm(t,e){t.g?t.g.add(e):t.h=e}function DI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}RI.prototype.cancel=function(){if(this.i=OI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function OI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hm(t.i)}var kL=class{stringify(t){return ae.JSON.stringify(t,void 0)}parse(t){return ae.JSON.parse(t,void 0)}};function CL(){this.g=new kL}function RL(t,e,n){const r=n||"";try{xI(t,function(s,i){let o=s;$c(s)&&(o=vm(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function NL(t,e){const n=new Oh;if(ae.Image){const r=new Image;r.onload=vl(wl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vl(wl,n,r,"TestLoadImage: error",!1,e),r.onabort=vl(wl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vl(wl,n,r,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wl(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Hc(t){this.l=t.fc||null,this.j=t.ob||!1}bt(Hc,Im);Hc.prototype.g=function(){return new Vh(this.l,this.j)};Hc.prototype.i=function(t){return function(){return t}}({});function Vh(t,e){wt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Sm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(Vh,wt);var Sm=0;j=Vh.prototype;j.open=function(t,e){if(this.readyState!=Sm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,mc(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kc(this)),this.readyState=Sm};j.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mc(this)),this.g&&(this.readyState=3,mc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;LI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function LI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}j.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kc(this):mc(this),this.readyState==3&&LI(this)}};j.Za=function(t){this.g&&(this.response=this.responseText=t,Kc(this))};j.Ya=function(t){this.g&&(this.response=t,Kc(this))};j.ka=function(){this.g&&Kc(this)};function Kc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,mc(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function mc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PL=ae.JSON.parse;function Je(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=MI,this.L=this.M=!1}bt(Je,wt);var MI="",DL=/^https?$/i,OL=["POST","PUT"];j=Je.prototype;j.Oa=function(t){this.M=t};j.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nf.g(),this.C=this.u?Uv(this.u):Uv(Nf),this.g.onreadystatechange=Ft(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Bv(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ae.FormData&&t instanceof ae.FormData,!(0<=Z0(OL,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$I(this),0<this.B&&((this.L=LL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ft(this.ua,this)):this.A=bm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bv(this,i)}};function LL(t){return mo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.ua=function(){typeof um<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))};function Bv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,FI(t),Bh(t)}function FI(t){t.F||(t.F=!0,Rt(t,"complete"),Rt(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Rt(this,"complete"),Rt(this,"abort"),Bh(this))};j.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bh(this,!0)),Je.$.N.call(this)};j.La=function(){this.s||(this.G||this.v||this.l?UI(this):this.kb())};j.kb=function(){UI(this)};function UI(t){if(t.h&&typeof um<"u"&&(!t.C[1]||Jn(t)!=4||t.da()!=2)){if(t.v&&Jn(t)==4)bm(t.La,0,t);else if(Rt(t,"readystatechange"),Jn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(SI)[1]||null;!s&&ae.self&&ae.self.location&&(s=ae.self.location.protocol.slice(0,-1)),r=!DL.test(s?s.toLowerCase():"")}n=r}if(n)Rt(t,"complete"),Rt(t,"success");else{t.m=6;try{var i=2<Jn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",FI(t)}}finally{Bh(t)}}}}function Bh(t,e){if(t.g){$I(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function $I(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}j.isActive=function(){return!!this.g};function Jn(t){return t.g?t.g.readyState:0}j.da=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}};j.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PL(e)}};function jv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case MI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ML(t){const e={};t=(t.g&&2<=Jn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(cc(t[r]))continue;var n=aL(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}eL(e,function(r){return r.join(", ")})}j.Ia=function(){return this.m};j.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function VI(t){let e="";return fm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Am(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=VI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$e(t,e,n))}function ia(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function BI(t){this.Ga=0,this.j=[],this.l=new Oh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ia("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ia("baseRetryDelayMs",5e3,t),this.hb=ia("retryDelaySeedMs",1e4,t),this.eb=ia("forwardChannelMaxRetries",2,t),this.xa=ia("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new RI(t&&t.concurrentRequestLimit),this.Ja=new CL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}j=BI.prototype;j.ra=8;j.H=1;function km(t){if(jI(t),t.H==3){var e=t.W++,n=xr(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),Gc(t,n),e=new qc(t,t.l,e),e.L=2,e.v=$h(xr(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon)try{n=ae.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ae.Image&&(new Image().src=e.v,n=!0),n||(e.g=YI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zc(e)}WI(t)}function jh(t){t.g&&(Rm(t),t.g.cancel(),t.g=null)}function jI(t){jh(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Su(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function qh(t){if(!NI(t.i)&&!t.m){t.m=!0;var e=t.Na;uc||hI(),hc||(uc(),hc=!0),_m.add(e,t),t.C=0}}function FL(t,e){return PI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bc(Ft(t.Na,t,e),GI(t,t.C)),t.C++,!0)}j.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new qc(this,this.l,t);let i=this.s;if(this.U&&(i?(i=rI(i),sI(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qI(this,s,e),n=xr(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),Gc(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(VI(i)))+"&"+e:this.o&&Am(n,this.o,i)),xm(this.i,s),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),s.aa=!0,Df(s,n,null)):Df(s,n,e),this.H=2}}else this.H==3&&(t?qv(this,t):this.j.length==0||NI(this.i)||qv(this))};function qv(t,e){var n;e?n=e.m:n=t.W++;const r=xr(t.I);$e(r,"SID",t.K),$e(r,"RID",n),$e(r,"AID",t.V),Gc(t,r),t.o&&t.s&&Am(r,t.o,t.s),n=new qc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=qI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xm(t.i,n),Df(n,r,e)}function Gc(t,e){t.na&&fm(t.na,function(n,r){$e(e,r,n)}),t.h&&xI({},function(n,r){$e(e,r,n)})}function qI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ft(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{RL(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function zI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;uc||hI(),hc||(uc(),hc=!0),_m.add(e,t),t.A=0}}function Cm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bc(Ft(t.Ma,t),GI(t,t.A)),t.A++,!0)}j.Ma=function(){if(this.u=null,HI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bc(Ft(this.jb,this),t)}};j.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zt(10),jh(this),HI(this))};function Rm(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function HI(t){t.g=new qc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=xr(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),Gc(t,e),t.o&&t.s&&Am(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=$h(xr(e)),n.s=null,n.S=!0,bI(n,t)}j.ib=function(){this.v!=null&&(this.v=null,jh(this),Cm(this),zt(19))};function Su(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function KI(t,e){var n=null;if(t.g==e){Su(t),Rm(t),t.g=null;var r=2}else if(Lf(t.i,e))n=e.F,DI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Lh(),Rt(r,new yI(r,n)),qh(t)}else zI(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&FL(t,e)||r==2&&Cm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:qs(t,5);break;case 4:qs(t,10);break;case 3:qs(t,6);break;default:qs(t,2)}}}function GI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function qs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ft(t.pb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||Tu(n,"https"),$h(n)),NL(n.toString(),r)}else zt(2);t.H=0,t.h&&t.h.za(e),WI(t),jI(t)}j.pb=function(t){t?(this.l.info("Successfully pinged google.com"),zt(2)):(this.l.info("Failed to ping google.com"),zt(1))};function WI(t){if(t.H=0,t.ma=[],t.h){const e=OI(t.i);(e.length!=0||t.j.length!=0)&&(Dv(t.ma,e),Dv(t.ma,t.j),t.i.i.length=0,hm(t.j),t.j.length=0),t.h.ya()}}function QI(t,e,n){var r=n instanceof ei?xr(n):new ei(n);if(r.g!="")e&&(r.g=e+"."+r.g),xu(r,r.m);else{var s=ae.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ei(null);r&&Tu(i,r),e&&(i.g=e),s&&xu(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&$e(r,n,e),$e(r,"VER",t.ra),Gc(t,r),r}function YI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Je(new Hc({ob:!0})):new Je(t.va),e.Oa(t.J),e}j.isActive=function(){return!!this.h&&this.h.isActive(this)};function XI(){}j=XI.prototype;j.Ba=function(){};j.Aa=function(){};j.za=function(){};j.ya=function(){};j.isActive=function(){return!0};j.Va=function(){};function Au(){if(mo&&!(10<=Number(YO)))throw Error("Environmental error: no available transport.")}Au.prototype.g=function(t,e){return new mn(t,e)};function mn(t,e){wt.call(this),this.g=new BI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!cc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new jo(this)}bt(mn,wt);mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;zt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=QI(t,null,t.Y),qh(t)};mn.prototype.close=function(){km(this.g)};mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vm(t),t=n);e.j.push(new SL(e.fb++,t)),e.H==3&&qh(e)};mn.prototype.N=function(){this.g.h=null,delete this.j,km(this.g),delete this.g,mn.$.N.call(this)};function JI(t){Em.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}bt(JI,Em);function ZI(){Tm.call(this),this.status=1}bt(ZI,Tm);function jo(t){this.g=t}bt(jo,XI);jo.prototype.Ba=function(){Rt(this.g,"a")};jo.prototype.Aa=function(t){Rt(this.g,new JI(t))};jo.prototype.za=function(t){Rt(this.g,new ZI)};jo.prototype.ya=function(){Rt(this.g,"b")};function UL(){this.blockSize=-1}function Vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(Vn,UL);Vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Vn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Bd(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Bd(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Bd(this,r),s=0;break}}this.h=s,this.i+=e};Vn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Pe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var $L={};function Nm(t){return-128<=t&&128>t?GO(t,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([t|0],0>t?-1:0)}function Zn(t){if(isNaN(t)||!isFinite(t))return no;if(0>t)return St(Zn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mf;return new Pe(e,0)}function eE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return St(eE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zn(Math.pow(e,8)),r=no,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Zn(Math.pow(e,i)),r=r.R(i).add(Zn(o))):(r=r.R(n),r=r.add(Zn(o)))}return r}var Mf=4294967296,no=Nm(0),Ff=Nm(1),zv=Nm(16777216);j=Pe.prototype;j.ea=function(){if(vn(this))return-St(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mf+r)*e,e*=Mf}return t};j.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gr(this))return"0";if(vn(this))return"-"+St(this).toString(t);for(var e=Zn(Math.pow(t,6)),n=this,r="";;){var s=Cu(n,e).g;n=ku(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,gr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};j.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vn(t){return t.h==-1}j.X=function(t){return t=ku(this,t),vn(t)?-1:gr(t)?0:1};function St(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Pe(n,~t.h).add(Ff)}j.abs=function(){return vn(this)?St(this):this};j.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Pe(n,n[n.length-1]&-2147483648?-1:0)};function ku(t,e){return t.add(St(e))}j.R=function(t){if(gr(this)||gr(t))return no;if(vn(this))return vn(t)?St(this).R(St(t)):St(St(this).R(t));if(vn(t))return St(this.R(St(t)));if(0>this.X(zv)&&0>t.X(zv))return Zn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,bl(n,2*r+2*s),n[2*r+2*s+1]+=i*c,bl(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,bl(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,bl(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Pe(n,0)};function bl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function oa(t,e){this.g=t,this.h=e}function Cu(t,e){if(gr(e))throw Error("division by zero");if(gr(t))return new oa(no,no);if(vn(t))return e=Cu(St(t),e),new oa(St(e.g),St(e.h));if(vn(e))return e=Cu(t,St(e)),new oa(St(e.g),e.h);if(30<t.g.length){if(vn(t)||vn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ff,r=e;0>=r.X(t);)n=Hv(n),r=Hv(r);var s=Li(n,1),i=Li(r,1);for(r=Li(r,2),n=Li(n,2);!gr(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Li(r,1),n=Li(n,1)}return e=ku(t,s.R(e)),new oa(s,e)}for(s=no;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Zn(n),o=i.R(e);vn(o)||0<o.X(t);)n-=r,i=Zn(n),o=i.R(e);gr(i)&&(i=Ff),s=s.add(i),t=ku(t,o)}return new oa(s,t)}j.gb=function(t){return Cu(this,t).h};j.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Pe(n,this.h&t.h)};j.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Pe(n,this.h|t.h)};j.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Pe(n,this.h^t.h)};function Hv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Pe(n,t.h)}function Li(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Pe(s,t.h)}Au.prototype.createWebChannel=Au.prototype.g;mn.prototype.send=mn.prototype.u;mn.prototype.open=mn.prototype.m;mn.prototype.close=mn.prototype.close;Mh.NO_ERROR=0;Mh.TIMEOUT=8;Mh.HTTP_ERROR=6;vI.COMPLETE="complete";_I.EventType=jc;jc.OPEN="a";jc.CLOSE="b";jc.ERROR="c";jc.MESSAGE="d";wt.prototype.listen=wt.prototype.O;Je.prototype.listenOnce=Je.prototype.P;Je.prototype.getLastError=Je.prototype.Sa;Je.prototype.getLastErrorCode=Je.prototype.Ia;Je.prototype.getStatus=Je.prototype.da;Je.prototype.getResponseJson=Je.prototype.Wa;Je.prototype.getResponseText=Je.prototype.ja;Je.prototype.send=Je.prototype.ha;Je.prototype.setWithCredentials=Je.prototype.Oa;Vn.prototype.digest=Vn.prototype.l;Vn.prototype.reset=Vn.prototype.reset;Vn.prototype.update=Vn.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=Zn;Pe.fromString=eE;var VL=function(){return new Au},BL=function(){return Lh()},jd=Mh,jL=vI,qL=xi,Kv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zL=Hc,Il=_I,HL=Je,KL=Vn,ro=Pe;const Gv="@firebase/firestore";/**
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
 */let qo="9.22.2";/**
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
 */const cs=new _h("@firebase/firestore");function Uf(){return cs.logLevel}function GL(t){cs.setLogLevel(t)}function P(t,...e){if(cs.logLevel<=be.DEBUG){const n=e.map(Pm);cs.debug(`Firestore (${qo}): ${t}`,...n)}}function et(t,...e){if(cs.logLevel<=be.ERROR){const n=e.map(Pm);cs.error(`Firestore (${qo}): ${t}`,...n)}}function Bn(t,...e){if(cs.logLevel<=be.WARN){const n=e.map(Pm);cs.warn(`Firestore (${qo}): ${t}`,...n)}}function Pm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw et(e),new Error(e)}function J(t,e){t||K()}function WL(t,e){t||K()}function B(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class YL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XL{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new tE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new mt(e)}}class JL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ZL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new JL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tM{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.T=n.token,new eM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function nM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class nE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function go(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function rE(t){return t+"\0"}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new He(0,0))}static max(){return new X(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gc{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends gc{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const rM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends gc{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return rM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new R(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new R(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(Ie.fromString(e))}static fromName(e){return new V(Ie.fromString(e).popFirst(5))}static empty(){return new V(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new Ie(e.slice()))}}/**
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
 */class sE{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function $f(t){return t.fields.find(e=>e.kind===2)}function Cs(t){return t.fields.filter(e=>e.kind!==2)}sE.UNKNOWN_ID=-1;class sM{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ru{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ru(0,gn.min())}}function iE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new gn(s,V.empty(),e)}function oE(t){return new gn(t.readTime,t.key,-1)}class gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gn(X.min(),V.empty(),-1)}static max(){return new gn(X.max(),V.empty(),-1)}}function Dm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const aE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ws(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==aE)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class zh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new vt,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Oa(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const s=Om(r.target.error);this.v.reject(new Oa(e,s))}}static open(e,n,r,s){try{return new zh(n,e.transaction(s,r))}catch(i){throw new Oa(n,i)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new oM(n)}}class Dn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,Dn.S(We())===12.2&&et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Ps(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ec())return!1;if(Dn.C())return!0;const e=We(),n=Dn.S(e),r=0<n&&n<10,s=Dn.N(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Oa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new R(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Oa(e,o))},s.onupgradeneeded=i=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.O(o,s.transaction,i.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=zh.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),b.reject(l))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class iM{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ps(this.L.delete())}}class Oa extends R{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function bs(t){return t.name==="IndexedDbTransactionError"}class oM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ps(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Ps(this.store.add(e))}get(e){return Ps(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Ps(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Ps(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.W(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new b((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.W(s,n)}Z(e){const n=this.cursor({});return new b((r,s)=>{n.onerror=i=>{const o=Om(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new b((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new iM(a),l=n(a.primaryKey,a.value,c);if(l instanceof b){const u=l.catch(h=>(c.done(),b.reject(h)));r.push(u)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ps(t){return new b((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Om(r.target.error);n(s)}})}let Wv=!1;function Om(t){const e=Dn.S(We());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Wv||(Wv=!0,setTimeout(()=>{throw r},0)),r}}return t}class aM{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){bs(n)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await ws(n)}await this.et(6e4)})}}class cM{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let s=n,i=!0;return b.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(s,i)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=oE(i);Dm(o,r)>0&&(r=o)}),new gn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Jt.ct=-1;function Wc(t){return t==null}function yc(t){return t===0&&1/t==-1/0}function lE(t){return typeof t=="number"&&Number.isInteger(t)&&!yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ht(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qv(e)),e=lM(t.get(n),e);return Qv(e)}function lM(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Qv(t){return t+""}function er(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),Ie.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&K(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:K()}i=o+2}return new Ie(r)}/**
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
 */const Yv=["userId","batchId"];/**
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
 */function Wl(t,e){return[t,Ht(e)]}function uE(t,e,n){return[t,Ht(e),n]}const uM={},hM=["prefixPath","collectionGroup","readTime","documentId"],dM=["prefixPath","collectionGroup","documentId"],fM=["collectionGroup","readTime","prefixPath","documentId"],pM=["canonicalId","targetId"],mM=["targetId","path"],gM=["path","targetId"],yM=["collectionId","parent"],vM=["indexId","uid"],_M=["uid","sequenceNumber"],wM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],bM=["indexId","uid","orderedDocumentKey"],IM=["userId","collectionPath","documentId"],EM=["userId","collectionPath","largestBatchId"],TM=["userId","collectionGroup","largestBatchId"],hE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xM=[...hE,"documentOverlays"],dE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fE=dE,SM=[...fE,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Vf extends cE{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function It(t,e){const n=B(t);return Dn.M(n.ht,e)}/**
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
 */function Xv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??xt.RED,this.left=s??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new xt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,s){return this}insert(t,e,n){return new xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jv(this.data.getIterator())}getIteratorFrom(e){return new Jv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Jv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Mi(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new Be(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function AM(){return typeof atob<"u"}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mE("Invalid base64 string: "+s):s}}(e);return new dt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const kM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(t){if(J(!!t),typeof t=="string"){let e=0;const n=kM.exec(t);if(J(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function Hh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lm(t){const e=t.mapValue.fields.__previous_value__;return Hh(e)?Lm(e):e}function vc(t){const e=ls(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class CM{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class hs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ql={nullValue:"NULL_VALUE"};function li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hh(t)?4:gE(t)?9007199254740991:10:K()}function lr(t,e){if(t===e)return!0;const n=li(t);if(n!==li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vc(t).isEqual(vc(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=ls(r.timestampValue),o=ls(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return us(r.bytesValue).isEqual(us(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Xe(r.geoPointValue.latitude)===Xe(s.geoPointValue.latitude)&&Xe(r.geoPointValue.longitude)===Xe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Xe(r.integerValue)===Xe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Xe(r.doubleValue),o=Xe(s.doubleValue);return i===o?yc(i)===yc(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return go(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Xv(i)!==Xv(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!lr(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function _c(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=li(t),r=li(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Xe(s.integerValue||s.doubleValue),a=Xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Zv(t.timestampValue,e.timestampValue);case 4:return Zv(vc(t),vc(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,i){const o=us(s),a=us(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ue(Xe(s.latitude),Xe(i.latitude));return o!==0?o:ue(Xe(s.longitude),Xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ds(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Jr.mapValue&&i===Jr.mapValue)return 0;if(s===Jr.mapValue)return 1;if(i===Jr.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=ds(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function Zv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=ls(t),r=ls(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function yo(t){return Bf(t)}function Bf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=ls(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?us(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Bf(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Bf(r.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function ui(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jf(t){return!!t&&"integerValue"in t}function wc(t){return!!t&&"arrayValue"in t}function e_(t){return!!t&&"nullValue"in t}function t_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function La(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=La(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=La(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function RM(t){return"nullValue"in t?Ql:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ui(hs.empty(),V.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:K()}function NM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ui(hs.empty(),V.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Jr:K()}function n_(t,e){const n=ds(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function r_(t,e){const n=ds(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=La(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=La(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Si(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(La(this.value))}}function yE(t){const e=[];return Si(t.fields,(n,r)=>{const s=new tt([n]);if(Yl(r)){const i=yE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
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
 */class Ve{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,X.min(),X.min(),X.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new Ve(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new Ve(e,2,n,X.min(),X.min(),At.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,X.min(),X.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fs{constructor(e,n){this.position=e,this.inclusive=n}}function s_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function i_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class so{constructor(e,n="asc"){this.field=e,this.dir=n}}function PM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class vE{}class ge extends vE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DM(e,n,r):n==="array-contains"?new MM(e,r):n==="in"?new TE(e,r):n==="not-in"?new FM(e,r):n==="array-contains-any"?new UM(e,r):new ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OM(e,r):new LM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ds(n,this.value)):n!==null&&li(this.value)===li(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ne extends vE{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Ne(e,n)}matches(e){return vo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vo(t){return t.op==="and"}function qf(t){return t.op==="or"}function Mm(t){return _E(t)&&vo(t)}function _E(t){for(const e of t.filters)if(e instanceof Ne)return!1;return!0}function zf(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(Mm(t))return t.filters.map(e=>zf(e)).join(",");{const e=t.filters.map(n=>zf(n)).join(",");return`${t.op}(${e})`}}function wE(t,e){return t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.field.isEqual(r.field)&&lr(n.value,r.value)}(t,e):t instanceof Ne?function(n,r){return r instanceof Ne&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&wE(i,r.filters[o]),!0):!1}(t,e):void K()}function bE(t,e){const n=t.filters.concat(e);return Ne.create(n,t.op)}function IE(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${yo(e.value)}`}(t):t instanceof Ne?function(e){return e.op.toString()+" {"+e.getFilters().map(IE).join(" ,")+"}"}(t):"Filter"}class DM extends ge{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class OM extends ge{constructor(e,n){super(e,"in",n),this.keys=EE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LM extends ge{constructor(e,n){super(e,"not-in",n),this.keys=EE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function EE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class MM extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wc(n)&&_c(n.arrayValue,this.value)}}class TE extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_c(this.value.arrayValue,n)}}class FM extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(_c(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_c(this.value.arrayValue,n)}}class UM extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_c(this.value.arrayValue,r))}}/**
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
 */class $M{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Hf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new $M(t,e,n,r,s,i,o)}function hi(t){const e=B(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),e.dt=n}return e.dt}function Qc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i_(t.startAt,e.startAt)&&i_(t.endAt,e.endAt)}function Nu(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Pu(t,e){return t.filters.filter(n=>n instanceof ge&&n.field.isEqual(e))}function o_(t,e,n){let r=Ql,s=!0;for(const i of Pu(t,e)){let o=Ql,a=!0;switch(i.op){case"<":case"<=":o=RM(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ql}n_({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];n_({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function a_(t,e,n){let r=Jr,s=!0;for(const i of Pu(t,e)){let o=Jr,a=!0;switch(i.op){case">=":case">":o=NM(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Jr}r_({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];r_({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Pr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function xE(t,e,n,r,s,i,o,a){return new Pr(t,e,n,r,s,i,o,a)}function zo(t){return new Pr(t)}function c_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Kh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Um(t){return t.collectionGroup!==null}function ti(t){const e=B(t);if(e.wt===null){e.wt=[];const n=Kh(e),r=Fm(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new so(n)),e.wt.push(new so(tt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new so(tt.keyField(),i))}}}return e.wt}function sn(t){const e=B(t);if(!e._t)if(e.limitType==="F")e._t=Hf(e.path,e.collectionGroup,ti(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ti(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new so(i.field,o))}const r=e.endAt?new fs(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new fs(e.startAt.position,e.startAt.inclusive):null;e._t=Hf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Kf(t,e){e.getFirstInequalityField(),Kh(t);const n=t.filters.concat([e]);return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Du(t,e,n){return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yc(t,e){return Qc(sn(t),sn(e))&&t.limitType===e.limitType}function SE(t){return`${hi(sn(t))}|lt:${t.limitType}`}function Gf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>IE(r)).join(", ")}]`),Wc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),`Target(${n})`}(sn(t))}; limitType=${t.limitType})`}function Xc(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):V.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of ti(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=s_(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,ti(n),r)||n.endAt&&!function(s,i,o){const a=s_(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,ti(n),r))}(t,e)}function AE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kE(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=VM(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VM(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ds(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Si(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pE(this.inner)}size(){return this.innerSize}}/**
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
 */const BM=new Me(V.comparator);function en(){return BM}const CE=new Me(V.comparator);function ba(...t){let e=CE;for(const n of t)e=e.insert(n.key,n);return e}function RE(t){let e=CE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function tr(){return Ma()}function NE(){return Ma()}function Ma(){return new Is(t=>t.toString(),(t,e)=>t.isEqual(e))}const jM=new Me(V.comparator),qM=new Be(V.comparator);function he(...t){let e=qM;for(const n of t)e=e.add(n);return e}const zM=new Be(ue);function $m(){return zM}/**
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
 */function PE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function DE(t){return{integerValue:""+t}}function OE(t,e){return lE(e)?DE(e):PE(t,e)}/**
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
 */class Gh{constructor(){this._=void 0}}function HM(t,e,n){return t instanceof _o?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Hh(s)&&(s=Lm(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof di?ME(t,e):t instanceof fi?FE(t,e):function(r,s){const i=LE(r,s),o=l_(i)+l_(r.gt);return jf(i)&&jf(r.gt)?DE(o):PE(r.serializer,o)}(t,e)}function KM(t,e,n){return t instanceof di?ME(t,e):t instanceof fi?FE(t,e):n}function LE(t,e){return t instanceof wo?jf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class _o extends Gh{}class di extends Gh{constructor(e){super(),this.elements=e}}function ME(t,e){const n=UE(e);for(const r of t.elements)n.some(s=>lr(s,r))||n.push(r);return{arrayValue:{values:n}}}class fi extends Gh{constructor(e){super(),this.elements=e}}function FE(t,e){let n=UE(e);for(const r of t.elements)n=n.filter(s=>!lr(s,r));return{arrayValue:{values:n}}}class wo extends Gh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function l_(t){return Xe(t.integerValue||t.doubleValue)}function UE(t){return wc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Jc{constructor(e,n){this.field=e,this.transform=n}}function GM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof di&&r instanceof di||n instanceof fi&&r instanceof fi?go(n.elements,r.elements,lr):n instanceof wo&&r instanceof wo?lr(n.gt,r.gt):n instanceof _o&&r instanceof _o}(t.transform,e.transform)}class WM{constructor(e,n){this.version=e,this.transformResults=n}}class ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wh{}function $E(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ko(t.key,ze.none()):new Ho(t.key,t.data,ze.none());{const n=t.data,r=At.empty();let s=new Be(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dr(t.key,r,new Zt(s.toArray()),ze.none())}}function QM(t,e,n){t instanceof Ho?function(r,s,i){const o=r.value.clone(),a=h_(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(r,s,i){if(!Xl(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=h_(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(VE(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Fa(t,e,n,r){return t instanceof Ho?function(s,i,o,a){if(!Xl(s.precondition,i))return o;const c=s.value.clone(),l=d_(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,i,o,a){if(!Xl(s.precondition,i))return o;const c=d_(s.fieldTransforms,a,i),l=i.data;return l.setAll(VE(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Xl(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function YM(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=LE(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function u_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&go(n,r,(s,i)=>GM(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ho extends Wh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends Wh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function VE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h_(t,e,n){const r=new Map;J(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,KM(o,a,n[s]))}return r}function d_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,HM(i,o,e))}return r}class Ko extends Wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vm extends Wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bm{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QM(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=NE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=$E(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(n,r)=>u_(n,r))&&go(this.baseMutations,e.baseMutations,(n,r)=>u_(n,r))}}class jm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){J(e.mutations.length===r.length);let s=jM;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jm(e,n,r,s)}}/**
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
 */class qm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ct,_e;function BE(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function jE(t){if(t===void 0)return et("GRPC error has no .code"),I.UNKNOWN;switch(t){case ct.OK:return I.OK;case ct.CANCELLED:return I.CANCELLED;case ct.UNKNOWN:return I.UNKNOWN;case ct.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ct.INTERNAL:return I.INTERNAL;case ct.UNAVAILABLE:return I.UNAVAILABLE;case ct.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ct.NOT_FOUND:return I.NOT_FOUND;case ct.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ct.ABORTED:return I.ABORTED;case ct.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ct.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(_e=ct||(ct={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Tl}static getOrCreateInstance(){return Tl===null&&(Tl=new zm),Tl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Tl=null;/**
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
 */function qE(){return new TextEncoder}/**
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
 */const JM=new ro([4294967295,4294967295],0);function f_(t){const e=qE().encode(t),n=new KL;return n.update(e),new Uint8Array(n.digest())}function p_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ro([n,r],0),new ro([s,i],0)]}class Hm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ia(`Invalid padding: ${n}`);if(r<0)throw new Ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ia(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ro.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(ro.fromNumber(r)));return s.compare(JM)===1&&(s=new ro([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=f_(e),[r,s]=p_(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Hm(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=f_(e),[r,s]=p_(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zc(X.min(),s,new Me(ue),en(),he())}}class el{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new el(r,n,he(),he(),he())}}/**
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
 */class Jl{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class zE{constructor(e,n){this.targetId=e,this.Vt=n}}class HE{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class m_{constructor(){this.St=0,this.Dt=y_(),this.Ct=dt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=he(),n=he(),r=he();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new el(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=y_()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class ZM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=en(),this.zt=g_(),this.Wt=new Me(ue)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(Nu(o))if(s===0){const a=new V(o.path);this.Yt(r,a,Ve.newNoDocument(a,X.min()))}else J(s===1);else{const a=this.ie(r);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=zm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,g,v,_,T;const A={localCacheCount:u,existenceFilterCount:h.count},k=h.unchangedNames;return k&&(A.bloomFilter={applied:l===0,hashCount:(d=k==null?void 0:k.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(g=(f=k==null?void 0:k.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&v!==void 0?v:0,padding:(T=(_=k==null?void 0:k.bits)===null||_===void 0?void 0:_.padding)!==null&&T!==void 0?T:0}),A}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=us(i).toUint8Array()}catch(u){if(u instanceof mE)return Bn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Hm(c,o,a)}catch(u){return Bn(u instanceof Ia?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Nu(a.target)){const c=new V(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Ve.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=he();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new Zc(e,n,this.Wt,this.jt,r);return this.jt=en(),this.zt=g_(),this.Wt=new Me(ue),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new m_,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Be(ue),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new m_),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function g_(){return new Me(V.comparator)}function y_(){return new Me(V.comparator)}const e2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),t2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),n2=(()=>({and:"AND",or:"OR"}))();class r2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wf(t,e){return t.useProto3Json||Wc(e)?e:{value:e}}function bo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function s2(t,e){return bo(t,e.toTimestamp())}function rt(t){return J(!!t),X.fromTimestamp(function(e){const n=ls(e);return new He(n.seconds,n.nanos)}(t))}function Km(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function GE(t){const e=Ie.fromString(t);return J(nT(e)),e}function bc(t,e){return Km(t.databaseId,e.path)}function sr(t,e){const n=GE(e);if(n.get(1)!==t.databaseId.projectId)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(QE(n))}function Qf(t,e){return Km(t.databaseId,e)}function WE(t){const e=GE(t);return e.length===4?Ie.emptyPath():QE(e)}function Ic(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QE(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function v_(t,e,n){return{name:bc(t,e),fields:n.value.mapValue.fields}}function YE(t,e,n){const r=sr(t,e.name),s=rt(e.updateTime),i=e.createTime?rt(e.createTime):X.min(),o=new At({mapValue:{fields:e.fields}}),a=Ve.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function i2(t,e){return"found"in e?function(n,r){J(!!r.found),r.found.name,r.found.updateTime;const s=sr(n,r.found.name),i=rt(r.found.updateTime),o=r.found.createTime?rt(r.found.createTime):X.min(),a=new At({mapValue:{fields:r.found.fields}});return Ve.newFoundDocument(s,i,o,a)}(t,e):"missing"in e?function(n,r){J(!!r.missing),J(!!r.readTime);const s=sr(n,r.missing),i=rt(r.readTime);return Ve.newNoDocument(s,i)}(t,e):K()}function o2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(J(l===void 0||typeof l=="string"),dt.fromBase64String(l||"")):(J(l===void 0||l instanceof Uint8Array),dt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:jE(c.code);return new R(l,c.message||"")}(o);n=new HE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sr(t,r.document.name),i=rt(r.document.updateTime),o=r.document.createTime?rt(r.document.createTime):X.min(),a=new At({mapValue:{fields:r.document.fields}}),c=Ve.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Jl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sr(t,r.document),i=r.readTime?rt(r.readTime):X.min(),o=Ve.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Jl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sr(t,r.document),i=r.removedTargetIds||[];n=new Jl([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new XM(s,i),a=r.targetId;n=new zE(a,o)}}return n}function Ec(t,e){let n;if(e instanceof Ho)n={update:v_(t,e.key,e.value)};else if(e instanceof Ko)n={delete:bc(t,e.key)};else if(e instanceof Dr)n={update:v_(t,e.key,e.data),updateMask:d2(e.fieldMask)};else{if(!(e instanceof Vm))return K();n={verify:bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof _o)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof di)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wo)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:s2(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function Yf(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?ze.updateTime(rt(s.updateTime)):s.exists!==void 0?ze.exists(s.exists):ze.none()}(e.currentDocument):ze.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)J(o.setToServerValue==="REQUEST_TIME"),a=new _o;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new di(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new fi(l)}else"increment"in o?a=new wo(i,o.increment):K();const c=tt.fromServerFormat(o.fieldPath);return new Jc(c,a)}(t,s)):[];if(e.update){e.update.name;const s=sr(t,e.update.name),i=new At({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Zt(c.map(l=>tt.fromServerFormat(l)))}(e.updateMask);return new Dr(s,i,o,n,r)}return new Ho(s,i,n,r)}if(e.delete){const s=sr(t,e.delete);return new Ko(s,n)}if(e.verify){const s=sr(t,e.verify);return new Vm(s,n)}return K()}function a2(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?rt(r.updateTime):rt(s);return i.isEqual(X.min())&&(i=rt(s)),new WM(i,r.transformResults||[])}(n,e))):[]}function XE(t,e){return{documents:[Qf(t,e.path)]}}function JE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return tT(Ne.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Vi(u.field),direction:l2(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Wf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ZE(t){let e=WE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){J(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=eT(u);return h instanceof Ne&&Mm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new so(Bi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Wc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new fs(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new fs(d,h)}(n.endAt)),xE(e,s,o,i,a,"F",c,l)}function c2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Bi(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Bi(e.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bi(e.unaryFilter.field);return ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bi(e.unaryFilter.field);return ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return ge.create(Bi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ne.create(e.compositeFilter.filters.map(n=>eT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function l2(t){return e2[t]}function u2(t){return t2[t]}function h2(t){return n2[t]}function Vi(t){return{fieldPath:t.canonicalString()}}function Bi(t){return tt.fromServerFormat(t.fieldPath)}function tT(t){return t instanceof ge?function(e){if(e.op==="=="){if(t_(e.value))return{unaryFilter:{field:Vi(e.field),op:"IS_NAN"}};if(e_(e.value))return{unaryFilter:{field:Vi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(t_(e.value))return{unaryFilter:{field:Vi(e.field),op:"IS_NOT_NAN"}};if(e_(e.value))return{unaryFilter:{field:Vi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(e.field),op:u2(e.op),value:e.value}}}(t):t instanceof Ne?function(e){const n=e.getFilters().map(r=>tT(r));return n.length===1?n[0]:{compositeFilter:{op:h2(e.op),filters:n}}}(t):K()}function d2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class yr{constructor(e,n,r,s,i=X.min(),o=X.min(),a=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rT{constructor(e){this.fe=e}}function f2(t,e){let n;if(e.document)n=YE(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=V.fromSegments(e.noDocument.path),s=mi(e.noDocument.readTime);n=Ve.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=V.fromSegments(e.unknownDocument.path),s=mi(e.unknownDocument.version);n=Ve.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(r){const s=new He(r[0],r[1]);return X.fromTimestamp(s)}(e.readTime)),n}function __(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ou(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:bc(s,i.key),fields:i.data.value.mapValue.fields,updateTime:bo(s,i.version.toTimestamp()),createTime:bo(s,i.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:pi(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:n.path.toArray(),version:pi(e.version)}}return r}function Ou(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function pi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function mi(t){const e=new He(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function Ds(t,e){const n=(e.baseMutations||[]).map(i=>Yf(t.fe,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Yf(t.fe,i)),s=He.fromMillis(e.localWriteTimeMs);return new Bm(e.batchId,s,n,r)}function Ea(t){const e=mi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?mi(t.lastLimboFreeSnapshotVersion):X.min();let r;var s;return t.query.documents!==void 0?(J((s=t.query).documents.length===1),r=sn(zo(WE(s.documents[0])))):r=function(i){return sn(ZE(i))}(t.query),new yr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,dt.fromBase64String(t.resumeToken))}function sT(t,e){const n=pi(e.snapshotVersion),r=pi(e.lastLimboFreeSnapshotVersion);let s;s=Nu(e.target)?XE(t.fe,e.target):JE(t.fe,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:hi(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Gm(t){const e=ZE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Du(e,e.limit,"L"):e}function qd(t,e){return new qm(e.largestBatchId,Yf(t.fe,e.overlayMutation))}function w_(t,e){const n=e.path.lastSegment();return[t,Ht(e.path.popLast()),n]}function b_(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:pi(r.readTime),documentKey:Ht(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class p2{getBundleMetadata(e,n){return I_(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:mi(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return I_(e).put({bundleId:(r=n).id,createTime:pi(rt(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return E_(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:Gm(s.bundledQuery),readTime:mi(s.readTime)};var s})}saveNamedQuery(e,n){return E_(e).put(function(r){return{name:r.name,readTime:pi(rt(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function I_(t){return It(t,"bundles")}function E_(t){return It(t,"namedQueries")}/**
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
 */class Qh{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new Qh(e,r)}getOverlay(e,n){return aa(e).get(w_(this.userId,n)).next(r=>r?qd(this.serializer,r):null)}getOverlays(e,n){const r=tr();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new qm(n,o);s.push(this.we(e,a))}),b.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(Ht(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(aa(e).J("collectionPathOverlayIndex",a))}),b.waitFor(i)}getOverlaysForCollection(e,n,r){const s=tr(),i=Ht(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return aa(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=qd(this.serializer,c);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=tr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return aa(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=qd(this.serializer,l);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}we(e,n){return aa(e).put(function(r,s,i){const[o,a,c]=w_(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Ec(r.fe,i.mutation)}}(this.serializer,this.userId,n))}}function aa(t){return It(t,"documentOverlays")}/**
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
 */class Os{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(Xe(e.integerValue));else if("doubleValue"in e){const r=Xe(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),yc(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(us(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?gE(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):K()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const s of Object.keys(r))this.Te(s,n),this.me(r[s],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const s of r)this.me(s,n)}ve(e,n){this.ye(n,37),V.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Os.Ve=new Os;function m2(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function T_(t){const e=64-function(n){let r=0;for(let s=0;s<8;++s){const i=m2(255&n[s]);if(r+=i,i!==8)break}return r}(t);return Math.ceil(e/8)}class g2{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const s=n.codePointAt(0);this.De(240|s>>>18),this.De(128|63&s>>>12),this.De(128|63&s>>>6),this.De(128|63&s)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const s=n.codePointAt(0);this.Ne(240|s>>>18),this.Ne(128|63&s>>>12),this.Ne(128|63&s>>>6),this.Ne(128|63&s)}}this.ke()}Oe(e){const n=this.Fe(e),r=T_(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}Le(e){const n=this.Fe(e),r=T_(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class y2{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class v2{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class ca{constructor(){this.je=new g2,this.ze=new y2(this.je),this.We=new v2(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Ls{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ls(this.indexId,this.documentKey,this.arrayValue,r)}}function Ur(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=x_(t.arrayValue,e.arrayValue),n!==0?n:(n=x_(t.directionalValue,e.directionalValue),n!==0?n:V.comparator(t.documentKey,e.documentKey)))}function x_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class _2{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){J(e.collectionGroup===this.collectionId);const n=$f(e);if(n!==void 0&&!this.en(n))return!1;const r=Cs(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.en(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Ze!==void 0){if(!s.has(this.Ze.field.canonicalString())){const a=r[i];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function iT(t){var e,n;if(J(t instanceof ge||t instanceof Ne),t instanceof ge){if(t instanceof TE){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ge.create(t.field,"==",i)))||[];return Ne.create(s,"or")}return t}const r=t.filters.map(s=>iT(s));return Ne.create(r,t.op)}function w2(t){if(t.getFilters().length===0)return[];const e=Zf(iT(t));return J(oT(e)),Xf(e)||Jf(e)?[e]:e.getFilters()}function Xf(t){return t instanceof ge}function Jf(t){return t instanceof Ne&&Mm(t)}function oT(t){return Xf(t)||Jf(t)||function(e){if(e instanceof Ne&&qf(e)){for(const n of e.getFilters())if(!Xf(n)&&!Jf(n))return!1;return!0}return!1}(t)}function Zf(t){if(J(t instanceof ge||t instanceof Ne),t instanceof ge)return t;if(t.filters.length===1)return Zf(t.filters[0]);const e=t.filters.map(r=>Zf(r));let n=Ne.create(e,t.op);return n=Lu(n),oT(n)?n:(J(n instanceof Ne),J(vo(n)),J(n.filters.length>1),n.filters.reduce((r,s)=>Wm(r,s)))}function Wm(t,e){let n;return J(t instanceof ge||t instanceof Ne),J(e instanceof ge||e instanceof Ne),n=t instanceof ge?e instanceof ge?function(r,s){return Ne.create([r,s],"and")}(t,e):S_(t,e):e instanceof ge?S_(e,t):function(r,s){if(J(r.filters.length>0&&s.filters.length>0),vo(r)&&vo(s))return bE(r,s.getFilters());const i=qf(r)?r:s,o=qf(r)?s:r,a=i.filters.map(c=>Wm(c,o));return Ne.create(a,"or")}(t,e),Lu(n)}function S_(t,e){if(vo(e))return bE(e,t.getFilters());{const n=e.filters.map(r=>Wm(t,r));return Ne.create(n,"or")}}function Lu(t){if(J(t instanceof ge||t instanceof Ne),t instanceof ge)return t;const e=t.getFilters();if(e.length===1)return Lu(e[0]);if(_E(t))return t;const n=e.map(s=>Lu(s)),r=[];return n.forEach(s=>{s instanceof ge?r.push(s):s instanceof Ne&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ne.create(r,t.op)}/**
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
 */class b2{constructor(){this.rn=new Qm}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(gn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(gn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Qm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Be(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(Ie.comparator)).toArray()}}/**
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
 */const xl=new Uint8Array(0);class I2{constructor(e,n){this.user=e,this.databaseId=n,this.on=new Qm,this.un=new Is(r=>hi(r),(r,s)=>Qc(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const i={collectionId:r,parent:Ht(s)};return A_(e).put(i)}return b.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[rE(n),""],!1,!0);return A_(e).j(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(er(o.parent))}return r})}addFieldIndex(e,n){const r=Sl(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=ua(e);return i.next(a=>{o.put(b_(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=Sl(e),s=ua(e),i=la(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=la(e);let s=!0;const i=new Map;return b.forEach(this.cn(n),o=>this.an(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=he();const a=[];return b.forEach(i,(c,l)=>{var u;P("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(k=>`${k.fieldPath}:${k.kind}`).join(",")}`} to execute ${hi(n)}`);const h=function(k,E){const L=$f(E);if(L===void 0)return null;for(const U of Pu(k,L.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(l,c),d=function(k,E){const L=new Map;for(const U of Cs(E))for(const Y of Pu(k,U.fieldPath))switch(Y.op){case"==":case"in":L.set(U.fieldPath.canonicalString(),Y.value);break;case"not-in":case"!=":return L.set(U.fieldPath.canonicalString(),Y.value),Array.from(L.values())}return null}(l,c),f=function(k,E){const L=[];let U=!0;for(const Y of Cs(E)){const G=Y.kind===0?o_(k,Y.fieldPath,k.startAt):a_(k,Y.fieldPath,k.startAt);L.push(G.value),U&&(U=G.inclusive)}return new fs(L,U)}(l,c),g=function(k,E){const L=[];let U=!0;for(const Y of Cs(E)){const G=Y.kind===0?a_(k,Y.fieldPath,k.endAt):o_(k,Y.fieldPath,k.endAt);L.push(G.value),U&&(U=G.inclusive)}return new fs(L,U)}(l,c),v=this.hn(c,l,f),_=this.hn(c,l,g),T=this.ln(c,l,d),A=this.fn(c.indexId,h,v,f.inclusive,_,g.inclusive,T);return b.forEach(A,k=>r.H(k,n.limit).next(E=>{E.forEach(L=>{const U=V.fromSegments(L.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return b.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=w2(Ne.create(e.filters,"and")).map(r=>Hf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),l=c/(n!=null?n.length:1),u=[];for(let h=0;h<c;++h){const d=n?this.dn(n[h/l]):xl,f=this.wn(e,d,r[h%l],s),g=this._n(e,d,i[h%l],o),v=a.map(_=>this.wn(e,d,_,!0));u.push(...this.createRange(f,g,v))}return u}wn(e,n,r,s){const i=new Ls(e,V.empty(),n,r);return s?i:i.Je()}_n(e,n,r,s){const i=new Ls(e,V.empty(),n,r);return s?i.Je():i}an(e,n){const r=new _2(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.cn(n);return b.forEach(s,i=>this.an(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Be(tt.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(n)&&s.length>1&&r===2?1:r)}mn(e,n){const r=new ca;for(const s of Cs(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.He(s.kind);Os.Ve._e(i,o)}return r.Qe()}dn(e){const n=new ca;return Os.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new ca;return Os.Ve._e(ui(this.databaseId,n),r.He(function(s){const i=Cs(s);return i.length===0?0:i[i.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let s=[];s.push(new ca);let i=0;for(const o of Cs(e)){const a=r[i++];for(const c of s)if(this.yn(n,o.fieldPath)&&wc(a))s=this.pn(s,o,a);else{const l=c.He(o.kind);Os.Ve._e(a,l)}}return this.In(s)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new ca;c.seed(a.Qe()),Os.Ve._e(o,c.He(n.kind)),i.push(c)}return i}yn(e,n){return!!e.filters.find(r=>r instanceof ge&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Sl(e),s=ua(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(i=>{const o=[];return b.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Ru(u.sequenceNumber,new gn(mi(u.readTime),new V(er(u.documentKey)),u.largestBatchId)):Ru.empty(),d=l.fields.map(([f,g])=>new sM(tt.fromServerFormat(f),g));return new sE(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ue(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=Sl(e),i=ua(e);return this.Tn(e).next(o=>s.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,c=>i.put(b_(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),b.forEach(a,c=>this.En(e,s,c).next(l=>{const u=this.An(i,c);return l.isEqual(u)?b.resolve():this.vn(e,i,c,l,u)}))))})}Rn(e,n,r,s){return la(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,s){return la(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const s=la(e);let i=new Be(Ur);return s.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{i=i.add(new Ls(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}An(e,n){let r=new Be(Ur);const s=this.mn(n,e);if(s==null)return r;const i=$f(n);if(i!=null){const o=e.data.field(i.fieldPath);if(wc(o))for(const a of o.arrayValue.values||[])r=r.add(new Ls(n.indexId,e.key,this.dn(a),s))}else r=r.add(new Ls(n.indexId,e.key,xl,s));return r}vn(e,n,r,s,i){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let g=Mi(d),v=Mi(f);for(;g||v;){let _=!1,T=!1;if(g&&v){const A=l(g,v);A<0?T=!0:A>0&&(_=!0)}else g!=null?T=!0:_=!0;_?(u(v),v=Mi(f)):T?(h(g),g=Mi(d)):(g=Mi(d),v=Mi(f))}}(s,i,Ur,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),b.waitFor(o)}Tn(e){let n=1;return ua(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Ur(o,a)).filter((o,a,c)=>!a||Ur(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Ur(o,e),c=Ur(o,n);if(a===0)s[0]=e.Je();else if(a>0&&c<0)s.push(o),s.push(o.Je());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.bn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,xl,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,xl,[]];i.push(IDBKeyRange.bound(a,c))}return i}bn(e,n){return Ur(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(k_)}getMinOffset(e,n){return b.mapArray(this.cn(n),r=>this.an(e,r).next(s=>s||K())).next(k_)}}function A_(t){return It(t,"collectionParents")}function la(t){return It(t,"indexEntries")}function Sl(t){return It(t,"indexConfiguration")}function ua(t){return It(t,"indexState")}function k_(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Dm(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new gn(e.readTime,e.documentKey,n)}/**
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
 */const C_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Qt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function aT(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{J(a===1)}));const l=[];for(const u of n.mutations){const h=uE(e,u.key.path,n.batchId);i.push(s.delete(h)),l.push(u.key)}return b.waitFor(i).next(()=>l)}function Mu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw K();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(41943040,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);class Yh{constructor(e,n,r,s){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=s,this.Vn={}}static de(e,n,r,s){J(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Yh(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $r(e).X({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=ji(e),o=$r(e);return o.add({}).next(a=>{J(typeof a=="number");const c=new Bm(a,n,r,s),l=function(d,f,g){const v=g.baseMutations.map(T=>Ec(d.fe,T)),_=g.mutations.map(T=>Ec(d.fe,T));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:v,mutations:_}}(this.serializer,this.userId,c),u=[];let h=new Be((d,f)=>ue(d.canonicalString(),f.canonicalString()));for(const d of s){const f=uE(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(f,uM))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),b.waitFor(u).next(()=>c)})}lookupMutationBatch(e,n){return $r(e).get(n).next(r=>r?(J(r.userId===this.userId),Ds(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?b.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.Vn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return $r(e).X({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(J(a.batchId>=r),i=Ds(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return $r(e).X({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return $r(e).j("userMutationsIndex",n).next(r=>r.map(s=>Ds(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Wl(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return ji(e).X({range:s},(o,a,c)=>{const[l,u,h]=o,d=er(u);if(l===this.userId&&n.path.isEqual(d))return $r(e).get(h).next(f=>{if(!f)throw K();J(f.userId===this.userId),i.push(Ds(this.serializer,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(ue);const s=[];return n.forEach(i=>{const o=Wl(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=ji(e).X({range:a},(l,u,h)=>{const[d,f,g]=l,v=er(f);d===this.userId&&i.path.isEqual(v)?r=r.add(g):h.done()});s.push(c)}),b.waitFor(s).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=Wl(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Be(ue);return ji(e).X({range:o},(c,l,u)=>{const[h,d,f]=c,g=er(d);h===this.userId&&r.isPrefixOf(g)?g.length===s&&(a=a.add(f)):u.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],s=[];return n.forEach(i=>{s.push($r(e).get(i).next(o=>{if(o===null)throw K();J(o.userId===this.userId),r.push(Ds(this.serializer,o))}))}),b.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return aT(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),b.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return ji(e).X({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=er(i[1]);s.push(c)}else a.done()}).next(()=>{J(s.length===0)})})}containsKey(e,n){return cT(e,this.userId,n)}xn(e){return lT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function cT(t,e,n){const r=Wl(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ji(t).X({range:i,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===s&&(o=!0),l.done()}).next(()=>o)}function $r(t){return It(t,"mutations")}function ji(t){return It(t,"documentMutations")}function lT(t){return It(t,"mutationQueues")}/**
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
 */class gi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new gi(0)}static Mn(){return new gi(-1)}}/**
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
 */class E2{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new gi(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>X.fromTimestamp(new He(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.On(e,s)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Fi(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return Fi(e).X((o,a)=>{const c=Ea(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>b.waitFor(i)).next(()=>s)}forEachTarget(e,n){return Fi(e).X((r,s)=>{const i=Ea(s);n(i)})}$n(e){return R_(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}On(e,n){return R_(e).put("targetGlobalKey",n)}Fn(e,n){return Fi(e).put(sT(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=hi(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Fi(e).X({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const l=Ea(a);Qc(n,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=Wr(e);return n.forEach(o=>{const a=Ht(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(s)}removeMatchingKeys(e,n,r){const s=Wr(e);return b.forEach(n,i=>{const o=Ht(i.path);return b.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=Wr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=Wr(e);let i=he();return s.X({range:r,Y:!0},(o,a,c)=>{const l=er(o[1]),u=new V(l);i=i.add(u)}).next(()=>i)}containsKey(e,n){const r=Ht(n.path),s=IDBKeyRange.bound([r],[rE(r)],!1,!0);let i=0;return Wr(e).X({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}le(e,n){return Fi(e).get(n).next(r=>r?Ea(r):null)}}function Fi(t){return It(t,"targets")}function R_(t){return It(t,"targetGlobal")}function Wr(t){return It(t,"targetDocuments")}/**
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
 */function N_([t,e],[n,r]){const s=ue(t,n);return s===0?ue(e,r):s}class T2{constructor(e){this.Ln=e,this.buffer=new Be(N_),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();N_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class x2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bs(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ws(n)}await this.Qn(3e5)})}}class S2{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Jt.ct);const r=new T2(n);return this.jn.forEachTarget(e,s=>r.Kn(s.sequenceNumber)).next(()=>this.jn.Wn(e,s=>r.Kn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(C_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),C_):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,s,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Uf()<=be.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function A2(t,e){return new S2(t,e)}/**
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
 */class k2{constructor(e,n){this.db=e,this.garbageCollector=A2(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,s)=>n(s))}addReference(e,n,r){return Al(e,r)}removeReference(e,n,r){return Al(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Al(e,n)}Xn(e,n){return function(r,s){let i=!1;return lT(r).Z(o=>cT(r,o,s).next(a=>(a&&(i=!0),b.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Xn(e,o).next(l=>{if(!l)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),Wr(e).delete([0,Ht(o.path)])))});s.push(c)}}).next(()=>b.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Al(e,n)}Yn(e,n){const r=Wr(e);let s,i=Jt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==Jt.ct&&n(new V(er(s)),i),i=l,s=c):i=Jt.ct}).next(()=>{i!==Jt.ct&&n(new V(er(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Al(t,e){return Wr(t).put(function(n,r){return{targetId:0,path:Ht(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class uT{constructor(){this.changes=new Is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class C2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return As(e).put(r)}removeEntry(e,n,r){return As(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ou(i),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=Ve.newInvalidDocument(n);return As(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ha(n))},(s,i)=>{r=this.ts(n,i)}).next(()=>r)}es(e,n){let r={size:0,document:Ve.newInvalidDocument(n)};return As(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ha(n))},(s,i)=>{r={document:this.ts(n,i),size:Mu(i)}}).next(()=>r)}getEntries(e,n){let r=en();return this.ns(e,n,(s,i)=>{const o=this.ts(s,i);r=r.insert(s,o)}).next(()=>r)}ss(e,n){let r=en(),s=new Me(V.comparator);return this.ns(e,n,(i,o)=>{const a=this.ts(i,o);r=r.insert(i,a),s=s.insert(i,Mu(o))}).next(()=>({documents:r,rs:s}))}ns(e,n,r){if(n.isEmpty())return b.resolve();let s=new Be(O_);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(ha(s.first()),ha(s.last())),o=s.getIterator();let a=o.getNext();return As(e).X({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=V.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&O_(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.G(ha(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,s){const i=n.path,o=[i.popLast().toArray(),i.lastSegment(),Ou(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return As(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=en();for(const u of c){const h=this.ts(V.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Xc(n,h)||s.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,s){let i=en();const o=D_(n,r),a=D_(n,gn.max());return As(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.ts(V.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===s&&u.done()}).next(()=>i)}newChangeBuffer(e){return new R2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return P_(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}Zn(e,n){return P_(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=f2(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Ve.newInvalidDocument(e)}}function hT(t){return new C2(t)}class R2 extends uT{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new Is(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new Be((i,o)=>ue(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.us.get(i);if(n.push(this.os.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=__(this.os.serializer,o);s=s.add(i.path.popLast());const l=Mu(c);r+=l-a.size,n.push(this.os.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=__(this.os.serializer,o.convertToNoDocument(X.min()));n.push(this.os.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.os.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:s})=>(s.forEach((i,o)=>{this.us.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function P_(t){return It(t,"remoteDocumentGlobal")}function As(t){return It(t,"remoteDocumentsV14")}function ha(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function D_(t,e){const n=e.documentKey.path.toArray();return[t,Ou(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function O_(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ue(n[i],r[i]),s)return s;return s=ue(n.length,r.length),s||(s=ue(n[n.length-2],r[r.length-2]),s||ue(n[n.length-1],r[r.length-1]))}/**
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
 */class N2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Fa(r.mutation,s,Zt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ba();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=en();const o=Ma(),a=Ma();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Dr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Fa(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new N2(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ma();let s=new Me((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Zt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||he()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=NE();u.forEach(d=>{if(!i.has(d)){const f=$E(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return V.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Um(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(tr());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:RE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let s=ba();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=ba();return this.indexManager.getCollectionParents(e,s).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Pr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ve.newInvalidDocument(l)))});let o=ba();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Fa(l.mutation,c,Zt.empty(),He.now()),Xc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class P2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:rt(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Gm(r.bundledQuery),readTime:rt(r.readTime)}}(n)),b.resolve()}}/**
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
 */class D2{constructor(){this.overlays=new Me(V.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=tr();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=tr(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=tr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qm(n,r));let i=this.ls.get(n);i===void 0&&(i=he(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
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
 */class Ym{constructor(){this.fs=new Be(pt.ds),this.ws=new Be(pt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new pt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new pt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new V(new Ie([])),r=new pt(n,e),s=new pt(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new V(new Ie([])),r=new pt(n,e),s=new pt(n,e+1);let i=he();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new pt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return V.comparator(e.key,n.key)||ue(e.As,n.As)}static _s(e,n){return ue(e.As,n.As)||V.comparator(e.key,n.key)}}/**
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
 */class O2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Be(pt.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bm(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new pt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),s=new pt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(ue);return n.forEach(s=>{const i=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),b.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;V.isDocumentKey(i)||(i=i.child(""));const o=new pt(new V(i),0);let a=new Be(ue);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){J(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return b.forEach(n.mutations,s=>{const i=new pt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new pt(n,0),s=this.Rs.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class L2{constructor(e){this.Ds=e,this.docs=new Me(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=en();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ve.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=en();const o=n.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Dm(oE(u),r)<=0||(s.has(u.key)||Xc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}Cs(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new M2(this)}getSize(e){return b.resolve(this.size)}}class M2 extends uT{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class F2{constructor(e){this.persistence=e,this.xs=new Is(n=>hi(n),Qc),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Ym,this.targetCount=0,this.Ms=gi.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
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
 */class fT{constructor(e,n){this.$s={},this.overlays={},this.Os=new Jt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new F2(this),this.indexManager=new b2,this.remoteDocumentCache=function(r){return new L2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new rT(n),this.qs=new P2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new D2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new O2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const s=new U2(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return b.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class U2 extends cE{constructor(e){super(),this.currentSequenceNumber=e}}class Xh{constructor(e){this.persistence=e,this.Qs=new Ym,this.js=null}static zs(e){return new Xh(e)}get Ws(){if(this.js)return this.js;throw K()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,r=>{const s=V.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class $2{constructor(e){this.serializer=e}O(e,n,r,s){const i=new zh("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yv,{unique:!0}),a.createObjectStore("documentMutations")}(e),L_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),L_(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yv,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return b.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Ys(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),r<7&&s>=7&&(o=o.next(()=>this.Zs(i))),r<8&&s>=8&&(o=o.next(()=>this.ti(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ei(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:IM});c.createIndex("collectionPathOverlayIndex",EM,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",TM,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:hM});c.createIndex("documentKeyIndex",dM),c.createIndex("collectionGroupIndex",fM)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.si(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:vM}).createIndex("sequenceNumberIndex",_M,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:wM}).createIndex("documentKeyIndex",bM,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,s)=>{n+=Mu(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(s=>b.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>b.forEach(a,c=>{J(c.userId===i.userId);const l=Ds(this.serializer,c);return aT(e,i.userId,l).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.X((o,a)=>{const c=new Ie(o),l=function(u){return[0,Ht(u)]}(c);i.push(n.get(l).next(u=>u?b.resolve():(h=>n.put({targetId:0,path:Ht(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>b.waitFor(i))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:yM});const r=n.store("collectionParents"),s=new Qm,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ht(c)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new Ie(o);return i(c.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,c],l)=>{const u=er(a);return i(u.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,s)=>{const i=Ea(s),o=sT(this.serializer,i);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),s=[];return r.X((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(l=o,l.document?new V(Ie.fromString(l.document.name).popFirst(5)):l.noDocument?V.fromSegments(l.noDocument.path):l.unknownDocument?V.fromSegments(l.unknownDocument.path):K()).path.toArray();var l;/**
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
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>b.waitFor(s))}si(e,n){const r=n.store("mutations"),s=hT(this.serializer),i=new fT(Xh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:he();Ds(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),b.forEach(a,(c,l)=>{const u=new mt(l),h=Qh.de(this.serializer,u),d=i.getIndexManager(u),f=Yh.de(u,this.serializer,d,i.referenceDelegate);return new dT(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Vf(n,Jt.ct),c).next()})})}}function L_(t){t.createObjectStore("targetDocuments",{keyPath:mM}).createIndex("documentTargetsIndex",gM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pM,{unique:!0}),t.createObjectStore("targetGlobal")}const zd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Xm{constructor(e,n,r,s,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=i,this.window=o,this.document=a,this.ri=l,this.oi=u,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Xm.D())throw new R(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new k2(this,s),this.di=n+"main",this.serializer=new rT(c),this.wi=new Dn(this.di,this.ui,new $2(this.serializer)),this.Bs=new E2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=hT(this.serializer),this.qs=new p2,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,u===!1&&et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,zd);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Jt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>kl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(bs(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return da(e).get("owner").next(n=>b.resolve(this.Ri(n)))}Pi(e){return kl(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=It(n,"clientMetadata");return r.j().next(s=>{const i=this.Si(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?b.resolve(!0):da(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,zd);return!1}}return!(!this.networkEnabled||!this.inForeground)||kl(e).j().next(r=>this.Si(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Vf(e,Jt.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>kl(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Yh.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new I2(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Qh.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=(o=this.ui)===15?SM:o===14?fE:o===13?dE:o===12?xM:o===11?hE:void K();var o;let a;return this.wi.runTransaction(e,s,i,c=>(a=new Vf(c,this.Os?this.Os.next():Jt.ct),n==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new R(I.FAILED_PRECONDITION,aE);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return da(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(I.FAILED_PRECONDITION,zd)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return da(e).put("owner",n)}static D(){return Dn.D()}Ai(e){const n=da(e);return n.get("owner").next(r=>this.Ri(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(et(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;bC()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return et("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){et("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function da(t){return It(t,"owner")}function kl(t){return It(t,"clientMetadata")}function Jm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Zm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zm(e,n.fromCache,r,s)}}/**
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
 */class pT{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(c_(n))return b.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Du(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Du(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,r,s){return c_(n)||s.isEqual(X.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(Uf()<=be.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gf(n)),this.Wi(e,o,n,iE(s,-1)))})}ji(e,n){let r=new Be(kE(e));return n.forEach((s,i)=>{Xc(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return Uf()<=be.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Gf(n)),this.Ui.getDocumentsMatchingQuery(e,n,gn.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class V2{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Me(ue),this.Yi=new Is(i=>hi(i),Qc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dT(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function mT(t,e,n,r){return new V2(t,e,n,r)}async function gT(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=he();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function B2(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const v=c.docVersions.get(f);J(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=he();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function yT(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function j2(t,e){const n=B(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(dt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(g,v,_){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,u)&&a.push(n.Bs.updateTargetData(i,f))});let c=en(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(vT(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(X.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function vT(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=en();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function q2(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Io(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Eo(t,e,n){const r=B(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bs(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Fu(t,e,n){const r=B(t);let s=X.min(),i=he();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=B(a),h=u.Yi.get(l);return h!==void 0?b.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,sn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:he())).next(a=>(bT(r,AE(e),a),{documents:a,ir:i})))}function _T(t,e){const n=B(t),r=B(n.Bs),s=n.Ji.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.le(i,e).next(o=>o?o.target:null))}function wT(t,e){const n=B(t),r=n.Xi.get(e)||X.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Zi.getAllFromCollectionGroup(s,e,iE(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(bT(n,e,s),s))}function bT(t,e,n){let r=t.Xi.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}async function z2(t,e,n,r){const s=B(t);let i=he(),o=en();for(const l of n){const u=e.rr(l.metadata.name);l.document&&(i=i.add(u));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(u,h)}const a=s.Zi.newChangeBuffer({trackRemovals:!0}),c=await Io(s,function(l){return sn(zo(Ie.fromString(`__bundle__/docs/${l}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>vT(l,a,o).next(u=>(a.apply(l),u)).next(u=>s.Bs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>s.Bs.addMatchingKeys(l,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,u.nr,u.sr)).next(()=>u.nr)))}async function H2(t,e,n=he()){const r=await Io(t,sn(Gm(e.bundledQuery))),s=B(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=rt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.qs.saveNamedQuery(i,e);const a=r.withResumeToken(dt.EMPTY_BYTE_STRING,o);return s.Ji=s.Ji.insert(a.targetId,a),s.Bs.updateTargetData(i,a).next(()=>s.Bs.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Bs.addMatchingKeys(i,n,r.targetId)).next(()=>s.qs.saveNamedQuery(i,e))})}function M_(t,e){return`firestore_clients_${t}_${e}`}function F_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Hd(t,e){return`firestore_targets_${t}_${e}`}class Uu{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static ar(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new R(s.error.code,s.error.message))),o?new Uu(e,n,s.state,i):(et("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ua{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new R(r.error.code,r.error.message))),i?new Ua(e,r.state,s):(et("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $u{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=$m();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=lE(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new $u(e,i):(et("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class eg{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new eg(n.clientId,n.onlineState):(et("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ep{constructor(){this.activeTargetIds=$m()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kd{constructor(e,n,r,s,i){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Me(ue),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=M_(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new ep),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const s=this.getItem(M_(this.persistenceKey,r));if(s){const i=$u.ar(r,s);i&&(this.gr=this.gr.insert(i.clientId,i))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Hd(this.persistenceKey,e));if(r){const s=Ua.ar(e,r);s&&(n=s.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Hd(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.Cr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void et("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(s){let i=Jt.ct;if(s!=null)try{const o=JSON.parse(s);J(typeof o=="number"),i=o}catch(o){et("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(n.newValue);r!==Jt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(s=>this.syncEngine.Qr(s)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const s=new Uu(this.currentUser,e,n,r),i=F_(this.persistenceKey,this.currentUser,e);this.setItem(i,s.hr())}Cr(e){const n=F_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const s=Hd(this.persistenceKey,e),i=new Ua(e,n,r);this.setItem(s,i.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return $u.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Uu.ar(new mt(i),s,n)}Ur(e,n){const r=this.Ar.exec(e),s=Number(r[1]);return Ua.ar(s,n)}br(e){return eg.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),s=this.Sr(this.gr),i=this.Sr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=$m();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class IT{constructor(){this.Hr=new ep,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class K2{Yr(e){}shutdown(){}}/**
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
 */class U_{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cl=null;function Gd(){return Cl===null?Cl=268435456+Math.round(2147483648*Math.random()):Cl++,"0x"+Cl.toString(16)}/**
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
 */const G2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class W2{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Dt="WebChannelConnection";class Q2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=Gd(),a=this.To(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,s,i),this.Ao(e,a,c,r).then(l=>(P("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Bn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+qo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=G2[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=Gd();return new Promise((o,a)=>{const c=new HL;c.setWithCredentials(!0),c.listenOnce(jL.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case jd.NO_ERROR:const u=c.getResponseJson();P(Dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case jd.TIMEOUT:P(Dt,`RPC '${e}' ${i} timed out`),a(new R(I.DEADLINE_EXCEEDED,"Request time out"));break;case jd.HTTP_ERROR:const h=c.getStatus();if(P(Dt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(f.status);a(new R(g,f.message))}else a(new R(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{P(Dt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);P(Dt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Ro(e,n,r){const s=Gd(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=VL(),a=BL(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new zL({})),this.Eo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");P(Dt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new W2({ro:_=>{f?P(Dt,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(d||(P(Dt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),P(Dt,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,T,A)=>{_.listen(T,k=>{try{A(k)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,Il.EventType.OPEN,()=>{f||P(Dt,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Il.EventType.CLOSE,()=>{f||(f=!0,P(Dt,`RPC '${e}' stream ${s} transport closed`),g.wo())}),v(h,Il.EventType.ERROR,_=>{f||(f=!0,Bn(Dt,`RPC '${e}' stream ${s} transport errored:`,_),g.wo(new R(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,Il.EventType.MESSAGE,_=>{var T;if(!f){const A=_.data[0];J(!!A);const k=A,E=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(E){P(Dt,`RPC '${e}' stream ${s} received error:`,E);const L=E.status;let U=function(G){const W=ct[G];if(W!==void 0)return jE(W)}(L),Y=E.message;U===void 0&&(U=I.INTERNAL,Y="Unknown error status: "+L+" with message "+E.message),f=!0,g.wo(new R(U,Y)),h.close()}else P(Dt,`RPC '${e}' stream ${s} received:`,A),g._o(A)}}),v(a,qL.STAT_EVENT,_=>{_.stat===Kv.PROXY?P(Dt,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Kv.NOPROXY&&P(Dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}/**
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
 */function ET(){return typeof window<"u"?window:null}function Zl(){return typeof document<"u"?document:null}/**
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
 */function tl(t){return new r2(t,!0)}/**
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
 */class tg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&P("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class TT{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new tg(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(et(n.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new R(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y2 extends TT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=o2(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?X.min():i.readTime?rt(i.readTime):X.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Ic(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=Nu(a)?{documents:XE(s,a)}:{query:JE(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=KE(s,i.resumeToken);const c=Wf(s,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(X.min())>0){o.readTime=bo(s,i.snapshotVersion.toTimestamp());const c=Wf(s,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=c2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Ic(this.serializer),n.removeTarget=e,this.Wo(n)}}class X2 extends TT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=a2(e.writeResults,e.commitTime),r=rt(e.commitTime);return this.listener.cu(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ic(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ec(this.serializer,r))};this.Wo(n)}}/**
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
 */class J2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(I.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(I.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class Z2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(et(n),this.mu=!1):P("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class eF{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Es(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=B(a);c.vu.add(4),await Go(c),c.bu.set("Unknown"),c.vu.delete(4),await nl(c)}(this))})}),this.bu=new Z2(r,s)}}async function nl(t){if(Es(t))for(const e of t.Ru)await e(!0)}async function Go(t){for(const e of t.Ru)await e(!1)}function Jh(t,e){const n=B(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),sg(n)?rg(n):Qo(n).Ko()&&ng(n,e))}function Tc(t,e){const n=B(t),r=Qo(n);n.Au.delete(e),r.Ko()&&xT(n,e),n.Au.size===0&&(r.Ko()?r.jo():Es(n)&&n.bu.set("Unknown"))}function ng(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).su(e)}function xT(t,e){t.Vu.qt(e),Qo(t).iu(e)}function rg(t){t.Vu=new ZM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.bu.gu()}function sg(t){return Es(t)&&!Qo(t).Uo()&&t.Au.size>0}function Es(t){return B(t).vu.size===0}function ST(t){t.Vu=void 0}async function tF(t){t.Au.forEach((e,n)=>{ng(t,e)})}async function nF(t,e){ST(t),sg(t)?(t.bu.Iu(e),rg(t)):t.bu.set("Unknown")}async function rF(t,e,n){if(t.bu.set("Online"),e instanceof HE&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vu(t,r)}else if(e instanceof Jl?t.Vu.Ht(e):e instanceof zE?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(X.min()))try{const r=await yT(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(dt.EMPTY_BYTE_STRING,l.snapshotVersion)),xT(s,a);const u=new yr(l.target,a,c,l.sequenceNumber);ng(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Vu(t,r)}}async function Vu(t,e,n){if(!bs(e))throw e;t.vu.add(1),await Go(t),t.bu.set("Offline"),n||(n=()=>yT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await nl(t)})}function AT(t,e){return e().catch(n=>Vu(t,n,e))}async function Wo(t){const e=B(t),n=ps(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;sF(e);)try{const s=await q2(e.localStore,r);if(s===null){e.Eu.length===0&&n.jo();break}r=s.batchId,iF(e,s)}catch(s){await Vu(e,s)}kT(e)&&CT(e)}function sF(t){return Es(t)&&t.Eu.length<10}function iF(t,e){t.Eu.push(e);const n=ps(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function kT(t){return Es(t)&&!ps(t).Uo()&&t.Eu.length>0}function CT(t){ps(t).start()}async function oF(t){ps(t).hu()}async function aF(t){const e=ps(t);for(const n of t.Eu)e.uu(n.mutations)}async function cF(t,e,n){const r=t.Eu.shift(),s=jm.from(r,e,n);await AT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wo(t)}async function lF(t,e){e&&ps(t).ou&&await async function(n,r){if(s=r.code,BE(s)&&s!==I.ABORTED){const i=n.Eu.shift();ps(n).Qo(),await AT(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Wo(n)}var s}(t,e),kT(t)&&CT(t)}async function $_(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.vu.add(3),await Go(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await nl(n)}async function tp(t,e){const n=B(t);e?(n.vu.delete(2),await nl(n)):e||(n.vu.add(2),await Go(n),n.bu.set("Unknown"))}function Qo(t){return t.Su||(t.Su=function(e,n,r){const s=B(e);return s.fu(),new Y2(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:tF.bind(null,t),ao:nF.bind(null,t),nu:rF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),sg(t)?rg(t):t.bu.set("Unknown")):(await t.Su.stop(),ST(t))})),t.Su}function ps(t){return t.Du||(t.Du=function(e,n,r){const s=B(e);return s.fu(),new X2(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:oF.bind(null,t),ao:lF.bind(null,t),au:aF.bind(null,t),cu:cF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Wo(t)):(await t.Du.stop(),t.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class ig{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ig(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yo(t,e){if(et("AsyncQueue",`${e}: ${t}`),bs(t))return new R(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class io{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=ba(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new io(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof io)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new io;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class V_{constructor(){this.Cu=new Me(V.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):K():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class To{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new To(e,n,io.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class uF{constructor(){this.Nu=void 0,this.listeners=[]}}class hF{constructor(){this.queries=new Is(e=>SE(e),Yc),this.onlineState="Unknown",this.ku=new Set}}async function og(t,e){const n=B(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new uF),s)try{i.Nu=await n.onListen(r)}catch(o){const a=Yo(o,`Initialization of query '${Gf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&cg(n)}async function ag(t,e){const n=B(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function dF(t,e){const n=B(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&cg(n)}function fF(t,e,n){const r=B(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function cg(t){t.ku.forEach(e=>{e.next()})}class lg{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new To(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class pF{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
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
 */class B_{constructor(e){this.serializer=e}rr(e){return sr(this.serializer,e)}ur(e){return e.metadata.exists?YE(this.serializer,e.document,!1):Ve.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return rt(e)}}class mF{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=RT(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=Ie.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new B_(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.rr(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||he()).add(i);n.set(o,a)}}return n}async complete(){const e=await z2(this.localStore,new B_(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await H2(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function RT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class NT{constructor(e){this.key=e}}class PT{constructor(e){this.key=e}}class DT{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=he(),this.mutatedKeys=he(),this.tc=kE(e),this.ec=new io(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new V_,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Xc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),_=!0):this.rc(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new To(this.query,e.ec,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new V_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=he(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new PT(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new NT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=he();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return To.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class gF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yF{constructor(e){this.key=e,this.fc=!1}}class vF{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Is(a=>SE(a),Yc),this._c=new Map,this.mc=new Set,this.gc=new Me(V.comparator),this.yc=new Map,this.Ic=new Ym,this.Tc={},this.Ec=new Map,this.Ac=gi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function _F(t,e){const n=pg(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await Io(n.localStore,sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await ug(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Jh(n.remoteStore,o)}return s}async function ug(t,e,n,r,s){t.Rc=(h,d,f)=>async function(g,v,_,T){let A=v.view.sc(_);A.zi&&(A=await Fu(g.localStore,v.query,!1).then(({documents:L})=>v.view.sc(L,A)));const k=T&&T.targetChanges.get(v.targetId),E=v.view.applyChanges(A,g.isPrimaryClient,k);return np(g,v.targetId,E.cc),E.snapshot}(t,h,d,f);const i=await Fu(t.localStore,e,!0),o=new DT(e,i.ir),a=o.sc(i.documents),c=el.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);np(t,n,l.cc);const u=new gF(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function wF(t,e){const n=B(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!Yc(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Eo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Tc(n.remoteStore,r.targetId),xo(n,r.targetId)}).catch(ws)):(xo(n,r.targetId),await Eo(n.localStore,r.targetId,!0))}async function bF(t,e,n){const r=mg(t);try{const s=await function(i,o){const a=B(i),c=He.now(),l=o.reduce((d,f)=>d.add(f.key),he());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=en(),g=he();return a.Zi.getEntries(d,l).next(v=>{f=v,f.forEach((_,T)=>{T.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{u=v;const _=[];for(const T of o){const A=YM(T,u.get(T.key).overlayedDocument);A!=null&&_.push(new Dr(T.key,A,yE(A.value.mapValue),ze.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:RE(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new Me(ue)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Or(r,s.changes),await Wo(r.remoteStore)}catch(s){const i=Yo(s,"Failed to persist write");n.reject(i)}}async function OT(t,e){const n=B(t);try{const r=await j2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?J(o.fc):s.removedDocuments.size>0&&(J(o.fc),o.fc=!1))}),await Or(n,r,e)}catch(r){await ws(r)}}function j_(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=B(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&cg(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IF(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new Me(V.comparator);o=o.insert(i,Ve.newNoDocument(i,X.min()));const a=he().add(i),c=new Zc(X.min(),new Map,new Me(ue),o,a);await OT(r,c),r.gc=r.gc.remove(i),r.yc.delete(e),fg(r)}else await Eo(r.localStore,e,!1).then(()=>xo(r,e,n)).catch(ws)}async function EF(t,e){const n=B(t),r=e.batch.batchId;try{const s=await B2(n.localStore,e);dg(n,r,null),hg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Or(n,s)}catch(s){await ws(s)}}async function TF(t,e,n){const r=B(t);try{const s=await function(i,o){const a=B(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(J(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);dg(r,e,n),hg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Or(r,s)}catch(s){await ws(s)}}async function xF(t,e){const n=B(t);Es(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=B(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const s=n.Ec.get(r)||[];s.push(e),n.Ec.set(r,s)}catch(r){const s=Yo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function hg(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function dg(t,e,n){const r=B(t);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function xo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||LT(t,r)})}function LT(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Tc(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),fg(t))}function np(t,e,n){for(const r of n)r instanceof NT?(t.Ic.addReference(r.key,e),SF(t,r)):r instanceof PT?(P("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||LT(t,r.key)):K()}function SF(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.mc.add(r),fg(t))}function fg(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new V(Ie.fromString(e)),r=t.Ac.next();t.yc.set(r,new yF(n)),t.gc=t.gc.insert(n,r),Jh(t.remoteStore,new yr(sn(zo(n.path)),r,"TargetPurposeLimboResolution",Jt.ct))}}async function Or(t,e,n){const r=B(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Zm.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,c){const l=B(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!bs(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,g)}}}(r.localStore,i))}async function AF(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await gT(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(I.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Or(n,r.er)}}function kF(t,e){const n=B(t),r=n.yc.get(e);if(r&&r.fc)return he().add(r.key);{let s=he();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}async function CF(t,e){const n=B(t),r=await Fu(n.localStore,e.query,!0),s=e.view.hc(r);return n.isPrimaryClient&&np(n,e.targetId,s.cc),s}async function RF(t,e){const n=B(t);return wT(n.localStore,e).then(r=>Or(n,r))}async function NF(t,e,n,r){const s=B(t),i=await function(o,a){const c=B(o),l=B(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Sn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):b.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await Wo(s.remoteStore):n==="acknowledged"||n==="rejected"?(dg(s,e,r||null),hg(s,e),function(o,a){B(B(o).mutationQueue).Cn(a)}(s.localStore,e)):K(),await Or(s,i)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function PF(t,e){const n=B(t);if(pg(n),mg(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await q_(n,r.toArray());n.vc=!0,await tp(n.remoteStore,!0);for(const i of s)Jh(n.remoteStore,i)}else if(e===!1&&n.vc!==!1){const r=[];let s=Promise.resolve();n._c.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(xo(n,o),Eo(n.localStore,o,!0))),Tc(n.remoteStore,o)}),await s,await q_(n,r),function(i){const o=B(i);o.yc.forEach((a,c)=>{Tc(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Me(V.comparator)}(n),n.vc=!1,await tp(n.remoteStore,!1)}}async function q_(t,e,n){const r=B(t),s=[],i=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Io(r.localStore,sn(c[0]));for(const l of c){const u=r.wc.get(l),h=await CF(r,u);h.snapshot&&i.push(h.snapshot)}}else{const l=await _T(r.localStore,o);a=await Io(r.localStore,l),await ug(r,MT(l),o,!1,a.resumeToken)}s.push(a)}return r.dc.nu(i),s}function MT(t){return xE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function DF(t){const e=B(t);return B(B(e.localStore).persistence).$i()}async function OF(t,e,n,r){const s=B(t);if(s.vc)return void P("SyncEngine","Ignoring unexpected query state notification.");const i=s._c.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await wT(s.localStore,AE(i[0])),a=Zc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",dt.EMPTY_BYTE_STRING);await Or(s,o,a);break}case"rejected":await Eo(s.localStore,e,!0),xo(s,e,r);break;default:K()}}async function LF(t,e,n){const r=pg(t);if(r.vc){for(const s of e){if(r._c.has(s)){P("SyncEngine","Adding an already active target "+s);continue}const i=await _T(r.localStore,s),o=await Io(r.localStore,i);await ug(r,MT(i),o.targetId,!1,o.resumeToken),Jh(r.remoteStore,o)}for(const s of n)r._c.has(s)&&await Eo(r.localStore,s,!1).then(()=>{Tc(r.remoteStore,s),xo(r,s)}).catch(ws)}}function pg(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=OT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IF.bind(null,e),e.dc.nu=dF.bind(null,e.eventManager),e.dc.Pc=fF.bind(null,e.eventManager),e}function mg(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TF.bind(null,e),e}function MF(t,e,n){const r=B(t);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const f=B(h),g=rt(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.qs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(g)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(RT(a));const c=new mF(a,s.localStore,i.serializer);let l=await i.bc();for(;l;){const h=await c.zu(l);h&&o._updateProgress(h),l=await i.bc()}const u=await c.complete();return await Or(s,u.Ju,void 0),await function(h,d){const f=B(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.qs.saveBundleMetadata(g,d))}(s.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Hu)}catch(a){return Bn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class rp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=tl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mT(this.persistence,new pT,e.initialUser,this.serializer)}createPersistence(e){return new fT(Xh.zs,this.serializer)}createSharedClientState(e){return new IT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FT extends rp{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await mg(this.Vc.syncEngine),await Wo(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return mT(this.persistence,new pT,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new x2(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new cM(n,this.persistence);return new aM(e.asyncQueue,r)}createPersistence(e){const n=Jm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new Xm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,ET(),Zl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new IT}}class FF extends FT{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof Kd&&(this.sharedClientState.syncEngine={jr:NF.bind(null,n),zr:OF.bind(null,n),Wr:LF.bind(null,n),$i:DF.bind(null,n),Qr:RF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await PF(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=ET();if(!Kd.D(n))throw new R(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Jm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Kd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class gg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AF.bind(null,this.syncEngine),await tp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hF}createDatastore(e){const n=tl(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Q2(s));var s;return function(i,o,a,c){return new J2(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>j_(this.syncEngine,a,0),o=U_.D()?new U_:new K2,new eF(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new vF(r,s,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);P("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Go(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */function z_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class UF{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new vt,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const s=await this.$c(r);return new pF(JSON.parse(s),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class $F{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,s){const i=B(r),o=Ic(i.serializer)+"/documents",a={documents:s.map(h=>bc(i.serializer,h))},c=await i.vo("BatchGetDocuments",o,a,s.length),l=new Map;c.forEach(h=>{const d=i2(i.serializer,h);l.set(d.key.toString(),d)});const u=[];return s.forEach(h=>{const d=l.get(h.toString());J(!!d),u.push(d)}),u}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ko(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=V.fromPath(r);this.mutations.push(new Vm(s,this.precondition(s)))}),await async function(n,r){const s=B(n),i=Ic(s.serializer)+"/documents",o={writes:r.map(a=>Ec(s.serializer,a))};await s.Io("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new R(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?ze.exists(!1):ze.updateTime(n):ze.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new R(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ze.updateTime(n)}return ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class VF{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Bc=r.maxAttempts,this.qo=new tg(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new $F(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Uc(s)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Wc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!BE(n)}return!1}}/**
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
 */class BF{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=nE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{P("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(P("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function eu(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yg(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>$_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>$_(e.remoteStore,i)),t._onlineComponents=e}function UT(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function yg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await eu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!UT(n))throw n;Bn("Error using user provided cache. Falling back to memory cache: "+n),await eu(t,new rp)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await eu(t,new rp);return t._offlineComponents}async function ed(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await sp(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await sp(t,new gg))),t._onlineComponents}function $T(t){return yg(t).then(e=>e.persistence)}function vg(t){return yg(t).then(e=>e.localStore)}function VT(t){return ed(t).then(e=>e.remoteStore)}function _g(t){return ed(t).then(e=>e.syncEngine)}function jF(t){return ed(t).then(e=>e.datastore)}async function So(t){const e=await ed(t),n=e.eventManager;return n.onListen=_F.bind(null,e.syncEngine),n.onUnlisten=wF.bind(null,e.syncEngine),n}function qF(t){return t.asyncQueue.enqueue(async()=>{const e=await $T(t),n=await VT(t);return e.setNetworkEnabled(!0),function(r){const s=B(r);return s.vu.delete(0),nl(s)}(n)})}function zF(t){return t.asyncQueue.enqueue(async()=>{const e=await $T(t),n=await VT(t);return e.setNetworkEnabled(!1),async function(r){const s=B(r);s.vu.add(0),await Go(s),s.bu.set("Offline")}(n)})}function HF(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const l=B(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new R(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Yo(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await vg(t),e,n)),n.promise}function BT(t,e,n={}){const r=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new Zh({next:h=>{i.enqueueAndForget(()=>ag(s,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new lg(zo(o.path),l,{includeMetadataChanges:!0,Ku:!0});return og(s,u)}(await So(t),t.asyncQueue,e,n,r)),r.promise}function KF(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await Fu(r,s,!0),a=new DT(s,o.ir),c=a.sc(o.documents),l=a.applyChanges(c,!1);i.resolve(l.snapshot)}catch(o){const a=Yo(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await vg(t),e,n)),n.promise}function jT(t,e,n={}){const r=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new Zh({next:h=>{i.enqueueAndForget(()=>ag(s,u)),h.fromCache&&a.source==="server"?c.reject(new R(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new lg(o,l,{includeMetadataChanges:!0,Ku:!0});return og(s,u)}(await So(t),t.asyncQueue,e,n,r)),r.promise}function GF(t,e){const n=new Zh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,s){B(r).ku.add(s),s.next()}(await So(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,s){B(r).ku.delete(s)}(await So(t),n))}}function WF(t,e,n,r){const s=function(i,o){let a;return a=typeof i=="string"?qE().encode(i):i,function(c,l){return new UF(c,l)}(function(c,l){if(c instanceof Uint8Array)return z_(c,l);if(c instanceof ArrayBuffer)return z_(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,tl(e));t.asyncQueue.enqueueAndForget(async()=>{MF(await _g(t),s,r)})}function QF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const s=B(n);return s.persistence.runTransaction("Get named query","readonly",i=>s.qs.getNamedQuery(i,r))}(await vg(t),e))}/**
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
 */function qT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const H_=new Map;/**
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
 */function wg(t,e,n){if(!n)throw new R(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zT(t,e,n,r){if(e===!0&&r===!0)throw new R(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function K_(t){if(!V.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function G_(t){if(V.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function td(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=td(t);throw new R(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function HT(t,e){if(e<=0)throw new R(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class W_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class rl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new QL;switch(n.type){case"firstParty":return new ZL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=H_.get(e);n&&(P("ComponentProvider","Removing Datastore"),H_.delete(e),n.terminate())}(this),Promise.resolve()}}function YF(t,e,n,r={}){var s;const i=(t=Ae(t,rl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=mt.MOCK_USER;else{a=$b(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new R(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(l)}t._authCredentials=new YL(new tE(a,c))}}/**
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
 */class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class Pt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pt(this.firestore,e,this._query)}}class ir extends Pt{constructor(e,n,r){super(e,n,zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new V(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Ki(t,e,...n){if(t=ne(t),wg("collection","path",e),t instanceof rl){const r=Ie.fromString(e,...n);return G_(r),new ir(t,null,r)}{if(!(t instanceof je||t instanceof ir))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return G_(r),new ir(t.firestore,null,r)}}function XF(t,e){if(t=Ae(t,rl),wg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Pt(t,null,function(n){return new Pr(Ie.emptyPath(),n)}(e))}function ni(t,e,...n){if(t=ne(t),arguments.length===1&&(e=nE.A()),wg("doc","path",e),t instanceof rl){const r=Ie.fromString(e,...n);return K_(r),new je(t,null,new V(r))}{if(!(t instanceof je||t instanceof ir))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return K_(r),new je(t.firestore,t instanceof ir?t.converter:null,new V(r))}}function KT(t,e){return t=ne(t),e=ne(e),(t instanceof je||t instanceof ir)&&(e instanceof je||e instanceof ir)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function GT(t,e){return t=ne(t),e=ne(e),t instanceof Pt&&e instanceof Pt&&t.firestore===e.firestore&&Yc(t._query,e._query)&&t.converter===e.converter}/**
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
 */class JF{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new tg(this,"async_queue_retry"),this.Xc=()=>{const n=Zl();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Zl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Zl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new vt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!bs(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw et("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=ig.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&K()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function ip(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ZF{constructor(){this._progressObserver={},this._taskCompletionResolver=new vt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const eU=-1;class Ze extends rl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new JF,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WT(this),this._firestoreClient.terminate()}}function Et(t){return t._firestoreClient||WT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WT(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,c,l){return new CM(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,qT(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new BF(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function tU(t,e){YT(t=Ae(t,Ze));const n=Et(t);if(n._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");Bn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),s=new gg;return QT(n,s,new FT(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function nU(t){YT(t=Ae(t,Ze));const e=Et(t);if(e._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");Bn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new gg;return QT(e,r,new FF(r,n.cacheSizeBytes))}function QT(t,e,n){const r=new vt;return t.asyncQueue.enqueue(async()=>{try{await eu(t,n),await sp(t,e),r.resolve()}catch(s){const i=s;if(!UT(i))throw i;Bn("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function rU(t){if(t._initialized&&!t._terminated)throw new R(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new vt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Dn.D())return Promise.resolve();const r=n+"main";await Dn.delete(r)}(Jm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function sU(t){return function(e){const n=new vt;return e.asyncQueue.enqueueAndForget(async()=>xF(await _g(e),n)),n.promise}(Et(t=Ae(t,Ze)))}function iU(t){return qF(Et(t=Ae(t,Ze)))}function oU(t){return zF(Et(t=Ae(t,Ze)))}function aU(t,e){const n=Et(t=Ae(t,Ze)),r=new ZF;return WF(n,t._databaseId,e,r),r}function cU(t,e){return QF(Et(t=Ae(t,Ze)),e).then(n=>n?new Pt(t,null,n.query):null)}function YT(t){if(t._initialized||t._terminated)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(dt.fromBase64String(e))}catch(n){throw new R(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ms{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ai{constructor(e){this._methodName=e}}/**
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
 */class nd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const lU=/^__.*__$/;class uU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ho(e,this.data,n,this.fieldTransforms)}}class XT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function JT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class rd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Bu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(JT(this.ca)&&lU.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class hU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tl(e)}ya(e,n,r,s=!1){return new rd({ca:e,methodName:n,ga:r,path:tt.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ki(t){const e=t._freezeSettings(),n=tl(t._databaseId);return new hU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sd(t,e,n,r,s,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,s);Tg("Data must be an object, but it was:",o,r);const a=tx(r,o);let c,l;if(i.merge)c=new Zt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=op(e,h,n);if(!o.contains(d))throw new R(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rx(u,d)||u.push(d)}c=new Zt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new uU(new At(a),c,l)}class sl extends Ai{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sl}}function ZT(t,e,n){return new rd({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class bg extends Ai{_toFieldTransform(e){return new Jc(e.path,new _o)}isEqual(e){return e instanceof bg}}class dU extends Ai{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=ZT(this,e,!0),r=this.pa.map(i=>Ci(i,n)),s=new di(r);return new Jc(e.path,s)}isEqual(e){return this===e}}class fU extends Ai{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=ZT(this,e,!0),r=this.pa.map(i=>Ci(i,n)),s=new fi(r);return new Jc(e.path,s)}isEqual(e){return this===e}}class pU extends Ai{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new wo(e.serializer,OE(e.serializer,this.Ia));return new Jc(e.path,n)}isEqual(e){return this===e}}function Ig(t,e,n,r){const s=t.ya(1,e,n);Tg("Data must be an object, but it was:",s,r);const i=[],o=At.empty();Si(r,(c,l)=>{const u=xg(e,c,n);l=ne(l);const h=s.da(u);if(l instanceof sl)i.push(u);else{const d=Ci(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Zt(i);return new XT(o,a,s.fieldTransforms)}function Eg(t,e,n,r,s,i){const o=t.ya(1,e,n),a=[op(e,r,n)],c=[s];if(i.length%2!=0)throw new R(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(op(e,i[d])),c.push(i[d+1]);const l=[],u=At.empty();for(let d=a.length-1;d>=0;--d)if(!rx(l,a[d])){const f=a[d];let g=c[d];g=ne(g);const v=o.da(f);if(g instanceof sl)l.push(f);else{const _=Ci(g,v);_!=null&&(l.push(f),u.set(f,_))}}const h=new Zt(l);return new XT(u,h,o.fieldTransforms)}function ex(t,e,n,r=!1){return Ci(n,t.ya(r?4:3,e))}function Ci(t,e){if(nx(t=ne(t)))return Tg("Unsupported field value:",e,t),tx(t,e);if(t instanceof Ai)return function(n,r){if(!JT(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Ci(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return OE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=He.fromDate(n);return{timestampValue:bo(r.serializer,s)}}if(n instanceof He){const s=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bo(r.serializer,s)}}if(n instanceof nd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ur)return{bytesValue:KE(r.serializer,n._byteString)};if(n instanceof je){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Km(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${td(n)}`)}(t,e)}function tx(t,e){const n={};return pE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Si(t,(r,s)=>{const i=Ci(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function nx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof nd||t instanceof ur||t instanceof je||t instanceof Ai)}function Tg(t,e,n){if(!nx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=td(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function op(t,e,n){if((e=ne(e))instanceof ms)return e._internalPath;if(typeof e=="string")return xg(t,e);throw Bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const mU=new RegExp("[~\\*/\\[\\]]");function xg(t,e,n){if(e.search(mU)>=0)throw Bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ms(...e.split("."))._internalPath}catch{throw Bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new R(I.INVALID_ARGUMENT,a+t+c)}function rx(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class xc{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(id("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gU extends xc{data(){return super.data()}}function id(t,e){return typeof e=="string"?xg(t,e):e instanceof ms?e._internalPath:e._delegate._internalPath}/**
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
 */function sx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sg{}class il extends Sg{}function Ot(t,e,...n){let r=[];e instanceof Sg&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Ag).length,o=s.filter(a=>a instanceof od).length;if(i>1||i>0&&o>0)throw new R(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class od extends il{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new od(e,n,r)}_apply(e){const n=this._parse(e);return ox(e._query,n),new Pt(e.firestore,e.converter,Kf(e._query,n))}_parse(e){const n=ki(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Y_(u,l);const d=[];for(const f of u)d.push(Q_(a,s,f));h={arrayValue:{values:d}}}else h=Q_(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Y_(u,l),h=ex(o,i,u,l==="in"||l==="not-in");return ge.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ap(t,e,n){const r=e,s=id("where",t);return od._create(s,r,n)}class Ag extends Sg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ag(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ne.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)ox(i,a),i=Kf(i,a)}(e._query,n),new Pt(e.firestore,e.converter,Kf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kg extends il{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kg(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new so(s,i);return function(a,c){if(Fm(a)===null){const l=Kh(a);l!==null&&ax(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Pt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Pr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function tu(t,e="asc"){const n=e,r=id("orderBy",t);return kg._create(r,n)}class ad extends il{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ad(e,n,r)}_apply(e){return new Pt(e.firestore,e.converter,Du(e._query,this._limit,this._limitType))}}function nu(t){return HT("limit",t),ad._create("limit",t,"F")}function yU(t){return HT("limitToLast",t),ad._create("limitToLast",t,"L")}class cd extends il{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=ix(e,this.type,this._docOrFields,this._inclusive);return new Pt(e.firestore,e.converter,function(r,s){return new Pr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function vU(...t){return cd._create("startAt",t,!0)}function _U(...t){return cd._create("startAfter",t,!1)}class ld extends il{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ld(e,n,r)}_apply(e){const n=ix(e,this.type,this._docOrFields,this._inclusive);return new Pt(e.firestore,e.converter,function(r,s){return new Pr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,n))}}function wU(...t){return ld._create("endBefore",t,!1)}function bU(...t){return ld._create("endAt",t,!0)}function ix(t,e,n,r){if(n[0]=ne(n[0]),n[0]instanceof xc)return function(s,i,o,a,c){if(!a)throw new R(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of ti(s))if(u.field.isKeyField())l.push(ui(i,a.key));else{const h=a.data.field(u.field);if(Hh(h))throw new R(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new R(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new fs(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=ki(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new R(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const g=l[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new R(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Um(i)&&g.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const v=i.path.child(Ie.fromString(g));if(!V.isDocumentKey(v))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const _=new V(v);d.push(ui(o,_))}else{const v=ex(a,c,g);d.push(v)}}return new fs(d,u)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Q_(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new R(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Um(e)&&n.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!V.isDocumentKey(r))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ui(t,new V(r))}if(n instanceof je)return ui(t,n._key);throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${td(n)}.`)}function Y_(t,e){if(!Array.isArray(t)||t.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ox(t,e){if(e.isInequality()){const r=Kh(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new R(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Fm(t);i!==null&&ax(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ax(t,e,n){if(!n.isEqual(e))throw new R(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Cg{convertValue(e,n="none"){switch(li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Si(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new nd(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vc(e));default:return null}}convertTimestamp(e){const n=ls(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);J(nT(r));const s=new hs(r.get(1),r.get(3)),i=new V(r.popFirst(5));return s.isEqual(n)||et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ud(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class IU extends Cg{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}/**
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
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sr extends xc{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(id("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $a extends Sr{data(e={}){return super.data(e)}}class gs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new $a(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new $a(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:EU(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function cx(t,e){return t instanceof Sr&&e instanceof Sr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof gs&&e instanceof gs&&t._firestore===e._firestore&&GT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function ru(t){t=Ae(t,je);const e=Ae(t.firestore,Ze);return BT(Et(e),t._key).then(n=>Rg(e,t,n))}class Ri extends Cg{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function TU(t){t=Ae(t,je);const e=Ae(t.firestore,Ze),n=Et(e),r=new Ri(e);return HF(n,t._key).then(s=>new Sr(e,r,t._key,s,new zs(s!==null&&s.hasLocalMutations,!0),t.converter))}function xU(t){t=Ae(t,je);const e=Ae(t.firestore,Ze);return BT(Et(e),t._key,{source:"server"}).then(n=>Rg(e,t,n))}function su(t){t=Ae(t,Pt);const e=Ae(t.firestore,Ze),n=Et(e),r=new Ri(e);return sx(t._query),jT(n,t._query).then(s=>new gs(e,r,t,s))}function SU(t){t=Ae(t,Pt);const e=Ae(t.firestore,Ze),n=Et(e),r=new Ri(e);return KF(n,t._query).then(s=>new gs(e,r,t,s))}function AU(t){t=Ae(t,Pt);const e=Ae(t.firestore,Ze),n=Et(e),r=new Ri(e);return jT(n,t._query,{source:"server"}).then(s=>new gs(e,r,t,s))}function X_(t,e,n){t=Ae(t,je);const r=Ae(t.firestore,Ze),s=ud(t.converter,e,n);return ol(r,[sd(ki(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ze.none())])}function J_(t,e,n,...r){t=Ae(t,je);const s=Ae(t.firestore,Ze),i=ki(s);let o;return o=typeof(e=ne(e))=="string"||e instanceof ms?Eg(i,"updateDoc",t._key,e,n,r):Ig(i,"updateDoc",t._key,e),ol(s,[o.toMutation(t._key,ze.exists(!0))])}function kU(t){return ol(Ae(t.firestore,Ze),[new Ko(t._key,ze.none())])}function lx(t,e){const n=Ae(t.firestore,Ze),r=ni(t),s=ud(t.converter,e);return ol(n,[sd(ki(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,ze.exists(!1))]).then(()=>r)}function ux(t,...e){var n,r,s;t=ne(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ip(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ip(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof je)l=Ae(t.firestore,Ze),u=zo(t._key.path),c={next:h=>{e[o]&&e[o](Rg(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ae(t,Pt);l=Ae(h.firestore,Ze),u=h._query;const d=new Ri(l);c={next:f=>{e[o]&&e[o](new gs(l,d,h,f))},error:e[o+1],complete:e[o+2]},sx(t._query)}return function(h,d,f,g){const v=new Zh(g),_=new lg(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>og(await So(h),_)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>ag(await So(h),_))}}(Et(l),u,a,c)}function CU(t,e){return GF(Et(t=Ae(t,Ze)),ip(e)?e:{next:e})}function ol(t,e){return function(n,r){const s=new vt;return n.asyncQueue.enqueueAndForget(async()=>bF(await _g(n),r,s)),s.promise}(Et(t),e)}function Rg(t,e,n){const r=n.docs.get(e._key),s=new Ri(t);return new Sr(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const RU={maxAttempts:5};/**
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
 */class NU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ki(e)}set(e,n,r){this._verifyNotCommitted();const s=Qr(e,this._firestore),i=ud(s.converter,n,r),o=sd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,ze.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Qr(e,this._firestore);let o;return o=typeof(n=ne(n))=="string"||n instanceof ms?Eg(this._dataReader,"WriteBatch.update",i._key,n,r,s):Ig(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,ze.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Qr(e,this._firestore);return this._mutations=this._mutations.concat(new Ko(n._key,ze.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Qr(t,e){if((t=ne(t)).firestore!==e)throw new R(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class PU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ki(e)}get(e){const n=Qr(e,this._firestore),r=new IU(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return K();const i=s[0];if(i.isFoundDocument())return new xc(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new xc(this._firestore,r,n._key,null,n.converter);throw K()})}set(e,n,r){const s=Qr(e,this._firestore),i=ud(s.converter,n,r),o=sd(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Qr(e,this._firestore);let o;return o=typeof(n=ne(n))=="string"||n instanceof ms?Eg(this._dataReader,"Transaction.update",i._key,n,r,s):Ig(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Qr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Qr(e,this._firestore),r=new Ri(this._firestore);return super.get(e).then(s=>new Sr(this._firestore,r,n._key,s._document,new zs(!1,!1),n.converter))}}function DU(t,e,n){t=Ae(t,Ze);const r=Object.assign(Object.assign({},RU),n);return function(s){if(s.maxAttempts<1)throw new R(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new vt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await jF(s);new VF(s.asyncQueue,c,o,i,a).run()}),a.promise}(Et(t),s=>e(new PU(t,s)),r)}/**
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
 */function OU(){return new sl("deleteField")}function LU(){return new bg("serverTimestamp")}function MU(...t){return new dU("arrayUnion",t)}function FU(...t){return new fU("arrayRemove",t)}function UU(t){return new pU("increment",t)}(function(t,e=!0){(function(n){qo=n})(Cr),Er(new Un("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Ze(new XL(n.getProvider("auth-internal")),new tM(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),En(Gv,"3.12.2",t),En(Gv,"3.12.2","esm2017")})();const $U="@firebase/firestore-compat",VU="0.3.11";/**
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
 */function Ng(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Z_(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function ew(){if(!AM())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}let hx=class cp{constructor(e){this._delegate=e}static fromBase64String(e){return ew(),new cp(ur.fromBase64String(e))}static fromUint8Array(e){return Z_(),new cp(ur.fromUint8Array(e))}toBase64(){return ew(),this._delegate.toBase64()}toUint8Array(){return Z_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function lp(t){return BU(t,["next","error","complete"])}function BU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class jU{enableIndexedDbPersistence(e,n){return tU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return nU(e._delegate)}clearIndexedDbPersistence(e){return rU(e._delegate)}}class dx{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof hs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Bn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){YF(this._delegate,e,n,r)}enableNetwork(){return iU(this._delegate)}disableNetwork(){return oU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,zT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return sU(this._delegate)}onSnapshotsInSync(e){return CU(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ao(this,Ki(this._delegate,e))}catch(n){throw qt(n,"collection()","Firestore.collection()")}}doc(e){try{return new bn(this,ni(this._delegate,e))}catch(n){throw qt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new jt(this,XF(this._delegate,e))}catch(n){throw qt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return DU(this._delegate,n=>e(new fx(this,n)))}batch(){return Et(this._delegate),new px(new NU(this._delegate,e=>ol(this._delegate,e)))}loadBundle(e){return aU(this._delegate,e)}namedQuery(e){return cU(this._delegate,e).then(n=>n?new jt(this,n):null)}}class hd extends Cg{constructor(e){super(),this.firestore=e}convertBytes(e){return new hx(new ur(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return bn.forKey(n,this.firestore,null)}}function qU(t){GL(t)}class fx{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new hd(e)}get(e){const n=Hs(e);return this._delegate.get(n).then(r=>new Sc(this._firestore,new Sr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const s=Hs(e);return r?(Ng("Transaction.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=Hs(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=Hs(e);return this._delegate.delete(n),this}}class px{constructor(e){this._delegate=e}set(e,n,r){const s=Hs(e);return r?(Ng("WriteBatch.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=Hs(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=Hs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class yi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new $a(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ac(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=yi.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(n);return i||(i=new yi(e,new hd(e),n),s.set(n,i)),i}}yi.INSTANCES=new WeakMap;class bn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new hd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new bn(n,new je(n._delegate,r,new V(e)))}static forKey(e,n,r){return new bn(n,new je(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ao(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ao(this.firestore,Ki(this._delegate,e))}catch(n){throw qt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof je?KT(this._delegate,e):!1}set(e,n){n=Ng("DocumentReference.set",n);try{return n?X_(this._delegate,e,n):X_(this._delegate,e)}catch(r){throw qt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?J_(this._delegate,e):J_(this._delegate,e,n,...r)}catch(s){throw qt(s,"updateDoc()","DocumentReference.update()")}}delete(){return kU(this._delegate)}onSnapshot(...e){const n=mx(e),r=gx(e,s=>new Sc(this.firestore,new Sr(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return ux(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=TU(this._delegate):(e==null?void 0:e.source)==="server"?n=xU(this._delegate):n=ru(this._delegate),n.then(r=>new Sc(this.firestore,new Sr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function qt(t,e,n){return t.message=t.message.replace(e,n),t}function mx(t){for(const e of t)if(typeof e=="object"&&!lp(e))return e;return{}}function gx(t,e){var n,r;let s;return lp(t[0])?s=t[0]:lp(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:i=>{s.next&&s.next(e(i))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Sc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new bn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return cx(this._delegate,e._delegate)}}class Ac extends Sc{data(e){const n=this._delegate.data(e);return WL(n!==void 0),n}}class jt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new hd(e)}where(e,n,r){try{return new jt(this.firestore,Ot(this._delegate,ap(e,n,r)))}catch(s){throw qt(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new jt(this.firestore,Ot(this._delegate,tu(e,n)))}catch(r){throw qt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new jt(this.firestore,Ot(this._delegate,nu(e)))}catch(n){throw qt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new jt(this.firestore,Ot(this._delegate,yU(e)))}catch(n){throw qt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new jt(this.firestore,Ot(this._delegate,vU(...e)))}catch(n){throw qt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new jt(this.firestore,Ot(this._delegate,_U(...e)))}catch(n){throw qt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new jt(this.firestore,Ot(this._delegate,wU(...e)))}catch(n){throw qt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new jt(this.firestore,Ot(this._delegate,bU(...e)))}catch(n){throw qt(n,"endAt()","Query.endAt()")}}isEqual(e){return GT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=SU(this._delegate):(e==null?void 0:e.source)==="server"?n=AU(this._delegate):n=su(this._delegate),n.then(r=>new up(this.firestore,new gs(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=mx(e),r=gx(e,s=>new up(this.firestore,new gs(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return ux(this._delegate,n,r)}withConverter(e){return new jt(this.firestore,e?this._delegate.withConverter(yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class zU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ac(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class up{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new jt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ac(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new zU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ac(this._firestore,r))})}isEqual(e){return cx(this._delegate,e._delegate)}}class Ao extends jt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new bn(this.firestore,e):null}doc(e){try{return e===void 0?new bn(this.firestore,ni(this._delegate)):new bn(this.firestore,ni(this._delegate,e))}catch(n){throw qt(n,"doc()","CollectionReference.doc()")}}add(e){return lx(this._delegate,e).then(n=>new bn(this.firestore,n))}isEqual(e){return KT(this._delegate,e._delegate)}withConverter(e){return new Ao(this.firestore,e?this._delegate.withConverter(yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Hs(t){return Ae(t,je)}/**
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
 */class Pg{constructor(...e){this._delegate=new ms(...e)}static documentId(){return new Pg(tt.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof ms?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Ms{constructor(e){this._delegate=e}static serverTimestamp(){const e=LU();return e._methodName="FieldValue.serverTimestamp",new Ms(e)}static delete(){const e=OU();return e._methodName="FieldValue.delete",new Ms(e)}static arrayUnion(...e){const n=MU(...e);return n._methodName="FieldValue.arrayUnion",new Ms(n)}static arrayRemove(...e){const n=FU(...e);return n._methodName="FieldValue.arrayRemove",new Ms(n)}static increment(e){const n=UU(e);return n._methodName="FieldValue.increment",new Ms(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const HU={Firestore:dx,GeoPoint:nd,Timestamp:He,Blob:hx,Transaction:fx,WriteBatch:px,DocumentReference:bn,DocumentSnapshot:Sc,Query:jt,QueryDocumentSnapshot:Ac,QuerySnapshot:up,CollectionReference:Ao,FieldPath:Pg,FieldValue:Ms,setLogLevel:qU,CACHE_SIZE_UNLIMITED:eU};function KU(t,e){t.INTERNAL.registerComponent(new Un("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},HU)))}/**
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
 */function GU(t){KU(t,(e,n)=>new dx(e,n,new jU)),t.registerVersion($U,VU)}GU(Xt);const WU={apiKey:"AIzaSyB92XCW231iCTqH4TmwITBeQvbLVqneYA8",authDomain:"itemshare-68ae3.firebaseapp.com",projectId:"itemshare-68ae3",storageBucket:"itemshare-68ae3.appspot.com",messagingSenderId:"468617277076",appId:"1:468617277076:web:6c0ce2cd38ad48ca66ce81"};Xt.initializeApp(WU);Xt.firestore.FieldValue.serverTimestamp;const Vr=Xt.firestore();/**
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
 */const yx="firebasestorage.googleapis.com",vx="storageBucket",QU=2*60*1e3,YU=10*60*1e3,XU=1e3;/**
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
 */class Qe extends Mt{constructor(e,n,r=0){super(Wd(e),`Firebase Storage: ${n} (${Wd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function Wd(t){return"storage/"+t}function Dg(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(qe.UNKNOWN,t)}function JU(t){return new Qe(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ZU(t){return new Qe(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function e$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(qe.UNAUTHENTICATED,t)}function t$(){return new Qe(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function n$(t){return new Qe(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _x(){return new Qe(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wx(){return new Qe(qe.CANCELED,"User canceled the upload/download.")}function r$(t){return new Qe(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function s$(t){return new Qe(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function i$(){return new Qe(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vx+"' property when initializing the app?")}function bx(){return new Qe(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function o$(){return new Qe(qe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function a$(){return new Qe(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function c$(t){return new Qe(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hp(t){return new Qe(qe.INVALID_ARGUMENT,t)}function Ix(){return new Qe(qe.APP_DELETED,"The Firebase app was deleted.")}function l$(t){return new Qe(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Va(t,e){return new Qe(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function fa(t){throw new Qe(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw s$(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},v=n===yx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",T=new RegExp(`^https?://${v}/${s}/${_}`,"i"),k=[{regex:a,indices:c,postModify:i},{regex:f,indices:g,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let E=0;E<k.length;E++){const L=k[E],U=L.regex.exec(e);if(U){const Y=U[L.indices.bucket];let G=U[L.indices.path];G||(G=""),r=new pn(Y,G),L.postModify(r);break}}if(r==null)throw r$(e);return r}}class u${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function h$(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(f,c())},_)}function d(){i&&clearTimeout(i)}function f(_,...T){if(l){d();return}if(_){d(),u.call(null,_,...T);return}if(c()||o){d(),u.call(null,_,...T);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let g=!1;function v(_){g||(g=!0,d(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function d$(t){t(!1)}/**
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
 */function f$(t){return t!==void 0}function p$(t){return typeof t=="function"}function m$(t){return typeof t=="object"&&!Array.isArray(t)}function dd(t){return typeof t=="string"||t instanceof String}function tw(t){return Og()&&t instanceof Blob}function Og(){return typeof Blob<"u"&&!vh()}function nw(t,e,n,r){if(r<e)throw hp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function al(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ex(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ri||(ri={}));/**
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
 */function Tx(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class g${constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Rl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ri.NO_ERROR,c=i.getStatus();if(!a||Tx(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ri.ABORT;r(!1,new Rl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Rl(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());f$(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Dg();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ix():wx();o(c)}else{const c=_x();o(c)}};this.canceled_?n(!1,new Rl(!1,null,!0)):this.backoffId_=h$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&d$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function y$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function v$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function w$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function b$(t,e,n,r,s,i,o=!0){const a=Ex(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return _$(l,e),y$(l,n),v$(l,i),w$(l,r),new g$(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function I$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function E$(...t){const e=I$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Og())return new Blob(t);throw new Qe(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function T$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function x$(t){if(typeof atob>"u")throw c$("base-64");return atob(t)}/**
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
 */const nr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qd{constructor(e,n){this.data=e,this.contentType=n||null}}function S$(t,e){switch(t){case nr.RAW:return new Qd(xx(e));case nr.BASE64:case nr.BASE64URL:return new Qd(Sx(t,e));case nr.DATA_URL:return new Qd(k$(e),C$(e))}throw Dg()}function xx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function A$(t){let e;try{e=decodeURIComponent(t)}catch{throw Va(nr.DATA_URL,"Malformed data URL.")}return xx(e)}function Sx(t,e){switch(t){case nr.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Va(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case nr.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Va(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=x$(e)}catch(s){throw s.message.includes("polyfill")?s:Va(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ax{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Va(nr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=R$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function k$(t){const e=new Ax(t);return e.base64?Sx(nr.BASE64,e.rest):A$(e.rest)}function C$(t){return new Ax(t).contentType}function R$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Yr{constructor(e,n){let r=0,s="";tw(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(tw(this.data_)){const r=this.data_,s=T$(r,e,n);return s===null?null:new Yr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Yr(r,!0)}}static getBlob(...e){if(Og()){const n=e.map(r=>r instanceof Yr?r.data_:r);return new Yr(E$.apply(null,n))}else{const n=e.map(o=>dd(o)?S$(nr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Yr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function kx(t){let e;try{e=JSON.parse(t)}catch{return null}return m$(e)?e:null}/**
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
 */function N$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function P$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Cx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function D$(t,e){return e}class Vt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||D$}}let Nl=null;function O$(t){return!dd(t)||t.length<2?t:Cx(t)}function Rx(){if(Nl)return Nl;const t=[];t.push(new Vt("bucket")),t.push(new Vt("generation")),t.push(new Vt("metageneration")),t.push(new Vt("name","fullPath",!0));function e(i,o){return O$(o)}const n=new Vt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Vt("size");return s.xform=r,t.push(s),t.push(new Vt("timeCreated")),t.push(new Vt("updated")),t.push(new Vt("md5Hash",null,!0)),t.push(new Vt("cacheControl",null,!0)),t.push(new Vt("contentDisposition",null,!0)),t.push(new Vt("contentEncoding",null,!0)),t.push(new Vt("contentLanguage",null,!0)),t.push(new Vt("contentType",null,!0)),t.push(new Vt("metadata","customMetadata",!0)),Nl=t,Nl}function L$(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new pn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function M$(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return L$(r,t),r}function Nx(t,e,n){const r=kx(e);return r===null?null:M$(t,r,n)}function F$(t,e,n,r){const s=kx(e);if(s===null||!dd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=al(d,n,r),g=Ex({alt:"media",token:l});return f+g})[0]}function Px(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Xo{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wr(t){if(!t)throw Dg()}function Lg(t,e){function n(r,s){const i=Nx(t,s,e);return wr(i!==null),i}return n}function U$(t,e){function n(r,s){const i=Nx(t,s,e);return wr(i!==null),F$(i,s,t.host,t._protocol)}return n}function cl(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=t$():s=e$():n.getStatus()===402?s=ZU(t.bucket):n.getStatus()===403?s=n$(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Dx(t){const e=cl(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=JU(t.path)),i.serverResponse=s.serverResponse,i}return n}function $$(t,e,n){const r=e.fullServerUrl(),s=al(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Xo(s,i,Lg(t,n),o);return a.errorHandler=Dx(e),a}function V$(t,e,n){const r=e.fullServerUrl(),s=al(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Xo(s,i,U$(t,n),o);return a.errorHandler=Dx(e),a}function B$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ox(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=B$(null,e)),r}function j$(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let E=0;E<2;E++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Ox(e,r,s),u=Px(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Yr.getBlob(h,r,d);if(f===null)throw bx();const g={name:l.fullPath},v=al(i,t.host,t._protocol),_="POST",T=t.maxUploadRetryTime,A=new Xo(v,_,Lg(t,n),T);return A.urlParams=g,A.headers=o,A.body=f.uploadData(),A.errorHandler=cl(e),A}class ju{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Mg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{wr(!1)}return wr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function q$(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=Ox(e,r,s),a={name:o.fullPath},c=al(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Px(o,n),d=t.maxUploadRetryTime;function f(v){Mg(v);let _;try{_=v.getResponseHeader("X-Goog-Upload-URL")}catch{wr(!1)}return wr(dd(_)),_}const g=new Xo(c,l,f,d);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=cl(e),g}function z$(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=Mg(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{wr(!1)}h||wr(!1);const d=Number(h);return wr(!isNaN(d)),new ju(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Xo(n,o,i,a);return c.headers=s,c.errorHandler=cl(e),c}const rw=256*1024;function H$(t,e,n,r,s,i,o,a){const c=new ju(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw o$();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},v=r.slice(h,d);if(v===null)throw bx();function _(E,L){const U=Mg(E,["active","final"]),Y=c.current+u,G=r.size();let W;return U==="final"?W=Lg(e,i)(E,L):W=null,new ju(Y,G,U==="final",W)}const T="POST",A=e.maxUploadRetryTime,k=new Xo(n,T,_,A);return k.headers=g,k.body=v.uploadData(),k.progressCallback=a||null,k.errorHandler=cl(t),k}const Yt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Yd(t){switch(t){case"running":case"pausing":case"canceling":return Yt.RUNNING;case"paused":return Yt.PAUSED;case"success":return Yt.SUCCESS;case"canceled":return Yt.CANCELED;case"error":return Yt.ERROR;default:return Yt.ERROR}}/**
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
 */class K${constructor(e,n,r){if(p$(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Ui(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class G${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw fa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class W$ extends G${initXhr(){this.xhr_.responseType="text"}}function qi(){return new W$}/**
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
 */class Q${constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Rx(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(qe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Tx(s.status,[]))if(i)s=_x();else{this.sleepTime=Math.max(this.sleepTime*2,XU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(qe.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=q$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,qi,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=z$(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,qi,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=rw*this._chunkMultiplier,n=new ju(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=H$(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,qi,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){rw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=$$(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,qi,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=j$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,qi,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=wx(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Yd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new K$(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Yd(this._state)){case Yt.SUCCESS:Ui(this._resolve.bind(null,this.snapshot))();break;case Yt.CANCELED:case Yt.ERROR:const n=this._reject;Ui(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Yd(this._state)){case Yt.RUNNING:case Yt.PAUSED:e.next&&Ui(e.next.bind(e,this.snapshot))();break;case Yt.SUCCESS:e.complete&&Ui(e.complete.bind(e))();break;case Yt.CANCELED:case Yt.ERROR:e.error&&Ui(e.error.bind(e,this._error))();break;default:e.error&&Ui(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class vi{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vi(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Cx(this._location.path)}get storage(){return this._service}get parent(){const e=N$(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new vi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw l$(e)}}function Y$(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Q$(t,new Yr(e),n)}function X$(t){t._throwIfRoot("getDownloadURL");const e=V$(t.storage,t._location,Rx());return t.storage.makeRequestWithTokens(e,qi).then(n=>{if(n===null)throw a$();return n})}function J$(t,e){const n=P$(t._location.path,e),r=new pn(t._location.bucket,n);return new vi(t.storage,r)}/**
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
 */function Z$(t){return/^[A-Za-z]+:\/\//.test(t)}function eV(t,e){return new vi(t,e)}function Lx(t,e){if(t instanceof Fg){const n=t;if(n._bucket==null)throw i$();const r=new vi(n,n._bucket);return e!=null?Lx(r,e):r}else return e!==void 0?J$(t,e):t}function tV(t,e){if(e&&Z$(e)){if(t instanceof Fg)return eV(t,e);throw hp("To use ref(service, url), the first argument must be a Storage instance.")}else return Lx(t,e)}function sw(t,e){const n=e==null?void 0:e[vx];return n==null?null:pn.makeFromBucketSpec(n,t)}function nV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:$b(s,t.app.options.projectId))}class Fg{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=yx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QU,this._maxUploadRetryTime=YU,this._requests=new Set,s!=null?this._bucket=pn.makeFromBucketSpec(s,this._host):this._bucket=sw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=sw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){nw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){nw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vi(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new u$(Ix());{const o=b$(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const iw="@firebase/storage",ow="0.11.2";/**
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
 */const Mx="storage";function rV(t,e,n){return t=ne(t),Y$(t,e,n)}function sV(t){return t=ne(t),X$(t)}function iV(t,e){return t=ne(t),tV(t,e)}function oV(t=Gb(),e){t=ne(t);const r=jp(t,Mx).getImmediate({identifier:e}),s=gC("storage");return s&&aV(r,...s),r}function aV(t,e,n,r={}){nV(t,e,n,r)}function cV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Fg(n,r,s,e,Cr)}function lV(){Er(new Un(Mx,cV,"PUBLIC").setMultipleInstances(!0)),En(iw,ow,""),En(iw,ow,"esm2017")}lV();const uV=oV(),kn=Vk("itemshare",{state:()=>({temp:1,myUserUid:localStorage.getItem("useruid")||null,myProfile:{firstName:"",lastName:"",image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",location:""},editProfile:{id:9,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},sampleProfiles:[{id:0,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},{id:1,firstName:"John",lastName:"Smith",image:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",location:"Baybay City"},{id:2,firstName:"Emily",lastName:"Johnson",image:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",location:"Tacloban City"},{id:3,firstName:"David",lastName:"Brown",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Calbayog City"},{id:4,firstName:"Sarah",lastName:"Davis",image:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",location:"Tacloban City"},{id:5,firstName:"Michael",lastName:"Wilson",image:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",location:"Ormoc City"},{id:6,firstName:"Jessica",lastName:"Thompson",image:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",location:"Maasin City"},{id:7,firstName:"Christopher",lastName:"Martinez",image:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",location:"Tacloban City"},{id:8,firstName:"Megan",lastName:"Taylor",image:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",location:"Calbayog City"}],rentedItems:[],sampleItems:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",ownerId:0},{itemId:2,itemName:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",ownerId:1},{itemId:3,itemName:"Cushion set A",location:"Maasin City",rentAmount:"50.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",ownerId:2},{itemId:4,name:"Table",location:"Ormoc City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",ownerId:3},{itemId:5,itemName:"Chair",location:"Sogod, Southern Leyte",rentAmount:"75.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",ownerId:4},{itemId:6,itemName:"Bookshelf",location:"Biliran",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",ownerId:5},{itemId:7,itemName:"Sofa",location:"Ormoc City",rentAmount:"250.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",ownerId:6},{itemId:8,itemName:"Dining Table",location:"Baybay City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",ownerId:7},{itemId:9,itemName:"Kitchen Cabinet",location:"Maasin, Southern Leyte",rentAmount:"220.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",ownerId:8},{itemId:10,itemName:"Desk",location:"Tacloban City",rentAmount:"120.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",ownerId:0},{itemId:11,itemName:"Bed Frame",location:"Ormoc City",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",ownerId:1},{itemId:12,itemName:"Mattress",location:"Baybay City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",ownerId:2},{itemId:13,itemName:"Wardrobe",location:"Tacloban City",rentAmount:"180.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",ownerId:3},{itemId:14,itemName:"Television",location:"Maasin, Southern Leyte",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",ownerId:4},{itemId:15,itemName:"Coffee Table",location:"Ormoc City",rentAmount:"90.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",ownerId:5},{itemId:16,itemName:"Side Table",location:"Baybay City",rentAmount:"60.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",ownerId:6},{itemId:17,itemName:"Dresser",location:"Tacloban City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",ownerId:7},{itemId:18,itemName:"Armchair",location:"Maasin, Southern Leyte",rentAmount:"120.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",ownerId:8}]}),getters:{tempUserProfile(t){return{firstName:"Loading...",lastName:"",image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",location:"Loading location..."}},productsCheaperThan(t){return e=>t.products.filter(n=>n.price<e)},itemsInRange(t){return(e,n)=>t.sampleItems.slice(e,n)},itemById(t){return e=>t.sampleItems.find(n=>n.id==e)},loadedProfile(t){return e=>t.sampleProfiles[e]},loggedInUser(t){return t.myUserUid}},actions:{async initMyProfile(){Xt.auth().onAuthStateChanged(async t=>{if(t)this.myUserUid=t.uid,this.myProfile=await this.loadProfile(t.uid);else return this.useruid=null,{}})},async loadProfile(t){const e=await ru(ni(Vr,"users",t));if(e.exists())return{firstName:e.data().firstName,lastName:e.data().lastName,location:e.data().location,image:e.data().image}},async login(t,e){if(t!==""&&e!=="")try{const n=await Xt.auth().signInWithEmailAndPassword(t,e);return this.myUserUid=n.user.uid,localStorage.setItem("useruid",this.myUserUid),!0}catch(n){switch(n.code){case"auth/invalid-email":throw"Invalid email";case"auth/user-not-found":throw"No account with that email was found";case"auth/wrong-password":throw"Incorrect password";default:throw n.code}}else throw"Please fill out all the fields!"},async loadItems(t=12,e=""){let n=Ot(Ki(Vr,"items"));e&&(n=Ot(n,ap("ownerId","==",e))),n=Ot(n,tu("createdAt","desc"),nu(t));const r=await su(n),s=[];return r.forEach(i=>{const o={itemId:i.id,itemName:i.data().itemName,location:i.data().location,rentAmount:i.data().rentAmount,rentRate:i.data().rentRate,image:i.data().images?i.data().images[0]:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"};s.push(o)}),s},async loadItem(t){const e=await ru(ni(Vr,"items",t));if(e.exists())return{itemName:e.data().itemName,location:e.data().location,rentAmount:e.data().rentAmount,rentRate:e.data().rentRate,description:e.data().description,tags:e.data().tags,images:e.data().images||["https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"],ownerId:e.data().ownerId}},async uploadImage(t){const e=iV(uV,"itemImages/"+Date.now()+"."+t.name.split(".").pop());return await rV(e,t),await sV(e)},async createItem(t){if(t.imageFiles.length==0||t.itemName==""||t.location==""||t.rentAmount==""||t.rentRate==""||t.tags.length==0||t.description=="")throw"Please fill out all the fields!";try{const n=[];for(var e of t.imageFiles)n.push(await this.uploadImage(e));return await lx(Ki(Vr,"items"),{ownerId:this.myUserUid,images:n,itemName:t.itemName,location:t.location,rentAmount:t.rentAmount,rentRate:t.rentRate,tags:t.tags,description:t.description,createdAt:Date.now()}),!0}catch(n){throw n.message}},searchItem(){return[]},async loadConversations(t){let e=Ot(Ki(Vr,"conversations"));e=Ot(e,ap("participants","array-contains",t)),e=Ot(e,tu("lastSentAt","desc"),nu(12));const n=await su(e),r=[];for(const s of n.docs){let i={convoId:s.id,lastMessage:s.data().lastMessage,lastSentAt:s.data().lastSentAt,lastSender:s.data().lastSender,participant:await this.loadProfile(s.data().participants.find(o=>o!=t)),isRead:s.data().isRead};r.push(i)}return r},async loadConversation(t){const e=await ru(ni(Vr,"conversations",t));if(e.exists())return{lastMessage:e.data().lastMessage,lastSentAt:e.data().lastSentAt,lastSender:e.data().lastSender,participants:e.data().participants,isRead:e.data().isRead}},async loadMessages(t){let e=Ot(Ki(Vr,"conversations",t,"messages"));e=Ot(e,tu("sentAt","desc"),nu(64));const n=await su(e),r=[];return n.forEach(s=>{let i={content:s.data().content,sender:s.data().sender,type:s.data().type};r.push(i)}),r},async register(t){if(t.phoneNumber==""||t.email==""||t.firstName==""||t.lastName==""||t.gender=="Select"||t.location==""||t.birthday==""||t.password==""||t.confirmPassword=="")throw"Please fill out all the fields!";if(t.password!=t.confirmPassword)throw"Password does not match!";if(!t.terms)throw"Please agree to the terms and conditions.";switch(t.gender){case"Male":t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_male.png?alt=media&token=b239dcf0-a57f-43a1-a0bd-34898f5a9714";break;case"Female":t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_female.png?alt=media&token=6bca62c3-150b-46f7-ad60-6128217e24bd";break;default:t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366";break}try{const e=await Xt.auth().createUserWithEmailAndPassword(t.email,t.password);await Vr.collection("users").doc(e.user.uid).set({firstName:t.firstName,lastName:t.lastName,email:t.email,phoneNumber:t.phoneNumber,gender:t.gender,birthday:t.birthday,location:t.location,image:t.image,verified:!1,admin:!1}),this.myUserUid=e.user.uid,localStorage.setItem("useruid",this.myUserUid)}catch(e){throw e.message}return!0},async logout(){try{return await Xt.auth().signOut(),this.myUserUid=null,localStorage.removeItem("useruid"),!0}catch(t){throw t}}}}),hV={class:"flex w-full flex-col gap-1"},dV=["type","placeholder","value"],gt={__name:"CustomField",props:{modelValue:{default:""},inputType:{type:String,default:"text"},placeholder:{type:String,default:""},label:{type:String,default:""}},emits:["update:modelValue"],setup(t){return(e,n)=>(se(),fe("div",hV,[_n(p("label",{class:"text-text"},Oe(t.label),513),[[Ys,t.label]]),p("input",{size:"1",type:t.inputType,placeholder:t.placeholder,value:t.modelValue,onInput:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value)),class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 text-text placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-2 focus:border-primary focus:border-opacity-100 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50"},null,40,dV),sb(e.$slots,"default")]))}},fV={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},pV=["onSubmit"],mV=p("h1",null,"Login",-1),gV={class:"pt-2"},yV={class:"pt-2"},vV=p("button",{class:"rounded-md bg-primary px-6 py-2 text-background"}," Login ",-1),_V={__name:"LoginView",setup(t){const e=mh(),n=kn();let r=Ee("");const s=Ee(""),i=Ee("");async function o(){r.value="";try{await n.login(s.value,i.value)&&e.push("/home")}catch(a){r.value=a}}return(a,c)=>{const l=Pc("RouterLink");return se(),fe("div",fV,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:Ir(o,["stop","prevent"])},[mV,H(gt,{"input-type":"email",modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),placeholder:"Email"},null,8,["modelValue"]),H(gt,{"input-type":"password",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=u=>i.value=u),placeholder:"Password"},null,8,["modelValue"]),_n(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},Oe(ce(r)),513),[[Ys,ce(r)]]),p("p",gV,[H(l,{to:"/forgot-password",class:"underline decoration-accent"},{default:Ge(()=>[we("Forgot Password?")]),_:1})]),p("p",yV,[we(" New here? "),H(l,{to:"/register",class:"underline decoration-accent"},{default:Ge(()=>[we("Create an account!")]),_:1})]),vV],40,pV)])}}},wV={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},bV=["onSubmit"],IV=p("h1",null,"Create an account",-1),EV={class:"flex flex-col gap-2 xl:flex-row xl:gap-8"},TV={class:"flex basis-1/2 flex-col gap-2"},xV=p("button",{class:"rounded-md border-2 border-text border-opacity-50 bg-secondary px-6 py-2 text-text text-opacity-80 transition-colors hover:bg-opacity-90"}," Send SMS Code ",-1),SV={class:"flex w-full flex-col gap-1"},AV=p("label",null,"Gender",-1),kV=p("option",null,"Select",-1),CV=p("option",null,"Male",-1),RV=p("option",null,"Female",-1),NV=p("option",null,"Others",-1),PV=[kV,CV,RV,NV],DV={class:"flex basis-1/2 flex-col gap-2"},OV={class:"text-sm"},LV=p("span",null," I agree to the ",-1),MV=p("button",{class:"rounded-md border-2 border-transparent bg-primary px-6 py-2 text-white"}," Create account ",-1),FV={__name:"RegisterView",setup(t){const e=mh(),n=kn();let r=Ee("");const s=Ee({phoneNumber:"",email:"",firstName:"",lastName:"",gender:"Select",location:"",image:"",birthday:"",password:"",confirmPassword:"",terms:!1});async function i(){try{await n.register(s.value)&&e.push("/home")}catch(o){r.value=o}}return(o,a)=>{const c=Pc("RouterLink");return se(),fe("div",wV,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:Ir(i,["stop","prevent"])},[IV,p("div",EV,[p("div",TV,[H(gt,{label:"Phone Number",modelValue:s.value.phoneNumber,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value.phoneNumber=l),"input-type":"tel",placeholder:"Enter your phone number"},{default:Ge(()=>[xV]),_:1},8,["modelValue"]),H(gt,{label:"Email Address",modelValue:s.value.email,"onUpdate:modelValue":a[1]||(a[1]=l=>s.value.email=l),"input-type":"email",placeholder:"Email"},null,8,["modelValue"]),H(gt,{label:"First Name",modelValue:s.value.firstName,"onUpdate:modelValue":a[2]||(a[2]=l=>s.value.firstName=l),"input-type":"text",placeholder:"First Name"},null,8,["modelValue"]),H(gt,{label:"Last Name",modelValue:s.value.lastName,"onUpdate:modelValue":a[3]||(a[3]=l=>s.value.lastName=l),"input-type":"text",placeholder:"Last Name"},null,8,["modelValue"]),p("div",SV,[AV,_n(p("select",{"onUpdate:modelValue":a[4]||(a[4]=l=>s.value.gender=l),class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 focus:border-2 focus:border-primary focus:border-opacity-60 focus:bg-white focus:bg-opacity-90 focus:ring-0",placeholder:"Gender"},PV,512),[[Tk,s.value.gender]])])]),p("div",DV,[H(gt,{label:"Location",modelValue:s.value.location,"onUpdate:modelValue":a[5]||(a[5]=l=>s.value.location=l),"input-type":"text",placeholder:"Location"},null,8,["modelValue"]),H(gt,{label:"Birthday",modelValue:s.value.birthday,"onUpdate:modelValue":a[6]||(a[6]=l=>s.value.birthday=l),"input-type":"date"},null,8,["modelValue"]),H(gt,{label:"Password",modelValue:s.value.password,"onUpdate:modelValue":a[7]||(a[7]=l=>s.value.password=l),"input-type":"password",placeholder:"Password"},null,8,["modelValue"]),H(gt,{label:"Confirm Password",modelValue:s.value.confirmPassword,"onUpdate:modelValue":a[8]||(a[8]=l=>s.value.confirmPassword=l),"input-type":"password",placeholder:"Confirm Password"},null,8,["modelValue"]),_n(p("div",{class:"errorMessage rounded-md border-2 border-red-400 bg-red-300 px-4 py-2 align-middle text-sm text-red-800"},Oe(ce(r)),513),[[Ys,ce(r)]]),p("p",OV,[_n(p("input",{type:"checkbox",name:"checkbox",id:"checkbox","onUpdate:modelValue":a[9]||(a[9]=l=>s.value.terms=l),class:"text-accent focus:ring-0"},null,512),[[Ek,s.value.terms]]),LV,H(c,{to:"/terms-and-conditions",class:"underline decoration-accent"},{default:Ge(()=>[we(" Terms and Conditions ")]),_:1})]),MV,H(c,{to:"/login",class:"rounded-md border-2 border-primary bg-background px-6 py-2 text-center text-primary"},{default:Ge(()=>[we(" Go back ")]),_:1})])])],40,bV)])}}},UV={class:"whitespace-pre text-primary"},$V={class:"material-icons-outlined"},Ks={__name:"StarRating",props:{value:{default:0}},setup(t){return(e,n)=>(se(),fe("p",UV,[(se(),fe(Ke,null,rr(5,r=>p("span",$V,Oe(r<t.value?"star":"grade"),1)),64))]))}},VV={class:"rounded-lg shadow-md shadow-gray-400 overflow-hidden hidden z-50 bg-white",id:"dropdownNotifications"},BV={class:"h-64 w-full md:w-96 flex flex-col","aria-labelledby":"dropdownNotificationsButton"},jV=p("h2",{class:"font-bold px-3 py-2 shadow-sm shadow-gray-400 z-10 text-green-600"}," NOTIFICATIONS ",-1),qV={class:"overflow-y-auto bg-green-50"},zV={class:"flex flex-col gap-1 p-2"},HV={class:"p-2 text-sm shadow-sm bg-white shadow-gray-400 text-gray-700"},KV={__name:"NotificationsPopup",setup(t){const e=Ee([{type:"review",message:'Lorem Dolor gave your "3D Scanner" a rating:',rating:4,time:"JUST NOW"},{type:"review",message:'Lorem Dolor left a review to your "3D Scanner": "Way lami imo item di nani nahu iuli nimo kay ahu ni sunugon human gamit!"',rating:5,time:"24 MINS AGO"},{type:"upcoming",message:'"2D Printer" will be ready for you to pick up in 24 hours.',time:"23 HOURS AGO"},{type:"message",message:"Lorem Dolor chatted you! Be sure to leave a reply.",time:"4 DAYS AGO"}]);return(n,r)=>(se(),fe("div",VV,[p("div",BV,[jV,p("div",qV,[p("div",zV,[(se(!0),fe(Ke,null,rr(e.value,s=>(se(),fe("article",HV,[p("p",null,Oe(s.message),1),s.rating?(se(),Ii(Ks,{key:0,value:s.rating},null,8,["value"])):Xi("",!0),p("p",null,Oe(s.time),1)]))),256))])])])]))}};var GV=function(){function t(e,n){n===void 0&&(n=[]),this._eventType=e,this._eventFunctions=n}return t.prototype.init=function(){var e=this;this._eventFunctions.forEach(function(n){typeof window<"u"&&window.addEventListener(e._eventType,n)})},t}(),qu=globalThis&&globalThis.__assign||function(){return qu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},qu.apply(this,arguments)},zu={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},Fx=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=zu),this._items=e,this._options=qu(qu({},zu),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&this._items.map(function(n){n.active&&e.open(n.id),n.triggerEl.addEventListener("click",function(){e.toggle(n.id)})})},t.prototype.getItem=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.open=function(e){var n,r,s=this,i=this.getItem(e);this._options.alwaysOpen||this._items.map(function(o){var a,c;o!==i&&((a=o.triggerEl.classList).remove.apply(a,s._options.activeClasses.split(" ")),(c=o.triggerEl.classList).add.apply(c,s._options.inactiveClasses.split(" ")),o.targetEl.classList.add("hidden"),o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"))}),(n=i.triggerEl.classList).add.apply(n,this._options.activeClasses.split(" ")),(r=i.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),i.triggerEl.setAttribute("aria-expanded","true"),i.targetEl.classList.remove("hidden"),i.active=!0,i.iconEl&&i.iconEl.classList.add("rotate-180"),this._options.onOpen(this,i)},t.prototype.toggle=function(e){var n=this.getItem(e);n.active?this.close(e):this.open(e),this._options.onToggle(this,n)},t.prototype.close=function(e){var n,r,s=this.getItem(e);(n=s.triggerEl.classList).remove.apply(n,this._options.activeClasses.split(" ")),(r=s.triggerEl.classList).add.apply(r,this._options.inactiveClasses.split(" ")),s.targetEl.classList.add("hidden"),s.triggerEl.setAttribute("aria-expanded","false"),s.active=!1,s.iconEl&&s.iconEl.classList.remove("rotate-180"),this._options.onClose(this,s)},t}();function Ug(){document.querySelectorAll("[data-accordion]").forEach(function(t){var e=t.getAttribute("data-accordion"),n=t.getAttribute("data-active-classes"),r=t.getAttribute("data-inactive-classes"),s=[];t.querySelectorAll("[data-accordion-target]").forEach(function(i){if(i.closest("[data-accordion]")===t){var o={id:i.getAttribute("data-accordion-target"),triggerEl:i,targetEl:document.querySelector(i.getAttribute("data-accordion-target")),iconEl:i.querySelector("[data-accordion-icon]"),active:i.getAttribute("aria-expanded")==="true"};s.push(o)}}),new Fx(s,{alwaysOpen:e==="open",activeClasses:n||zu.activeClasses,inactiveClasses:r||zu.inactiveClasses})})}typeof window<"u"&&(window.Accordion=Fx,window.initAccordions=Ug);var Hu=globalThis&&globalThis.__assign||function(){return Hu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Hu.apply(this,arguments)},aw={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},Ux=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=aw),this._targetEl=e,this._triggerEl=n,this._options=Hu(Hu({},aw),r),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){e.toggle()}))},t.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},t.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},t.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},t}();function $g(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(t){var e=t.getAttribute("data-collapse-toggle"),n=document.getElementById(e);n?new Ux(n,t):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))})}typeof window<"u"&&(window.Collapse=Ux,window.initCollapses=$g);var Fs=globalThis&&globalThis.__assign||function(){return Fs=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Fs.apply(this,arguments)},iu={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},$x=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=iu),this._items=e,this._options=Fs(Fs(Fs({},iu),n),{indicators:Fs(Fs({},iu.indicators),n.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return t.prototype._init=function(){var e=this;this._items.map(function(n){n.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(n,r){n.el.addEventListener("click",function(){e.slideTo(r)})})},t.prototype.getItem=function(e){return this._items[e]},t.prototype.slideTo=function(e){var n=this._items[e],r={left:n.position===0?this._items[this._items.length-1]:this._items[n.position-1],middle:n,right:n.position===this._items.length-1?this._items[0]:this._items[n.position+1]};this._rotate(r),this._setActiveItem(n),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},t.prototype.next=function(){var e=this._getActiveItem(),n=null;e.position===this._items.length-1?n=this._items[0]:n=this._items[e.position+1],this.slideTo(n.position),this._options.onNext(this)},t.prototype.prev=function(){var e=this._getActiveItem(),n=null;e.position===0?n=this._items[this._items.length-1]:n=this._items[e.position-1],this.slideTo(n.position),this._options.onPrev(this)},t.prototype._rotate=function(e){this._items.map(function(n){n.el.classList.add("hidden")}),e.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.left.el.classList.add("-translate-x-full","z-10"),e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-20"),e.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.right.el.classList.add("translate-x-full","z-10")},t.prototype.cycle=function(){var e=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){e.next()},this._intervalDuration))},t.prototype.pause=function(){clearInterval(this._intervalInstance)},t.prototype._getActiveItem=function(){return this._activeItem},t.prototype._setActiveItem=function(e){var n,r,s=this;this._activeItem=e;var i=e.position;this._indicators.length&&(this._indicators.map(function(o){var a,c;o.el.setAttribute("aria-current","false"),(a=o.el.classList).remove.apply(a,s._options.indicators.activeClasses.split(" ")),(c=o.el.classList).add.apply(c,s._options.indicators.inactiveClasses.split(" "))}),(n=this._indicators[i].el.classList).add.apply(n,this._options.indicators.activeClasses.split(" ")),(r=this._indicators[i].el.classList).remove.apply(r,this._options.indicators.inactiveClasses.split(" ")),this._indicators[i].el.setAttribute("aria-current","true"))},t}();function Vg(){document.querySelectorAll("[data-carousel]").forEach(function(t){var e=t.getAttribute("data-carousel-interval"),n=t.getAttribute("data-carousel")==="slide",r=[],s=0;t.querySelectorAll("[data-carousel-item]").length&&Array.from(t.querySelectorAll("[data-carousel-item]")).map(function(l,u){r.push({position:u,el:l}),l.getAttribute("data-carousel-item")==="active"&&(s=u)});var i=[];t.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function(l){i.push({position:parseInt(l.getAttribute("data-carousel-slide-to")),el:l})});var o=new $x(r,{defaultPosition:s,indicators:{items:i},interval:e||iu.interval});n&&o.cycle();var a=t.querySelector("[data-carousel-next]"),c=t.querySelector("[data-carousel-prev]");a&&a.addEventListener("click",function(){o.next()}),c&&c.addEventListener("click",function(){o.prev()})})}typeof window<"u"&&(window.Carousel=$x,window.initCarousels=Vg);var Ku=globalThis&&globalThis.__assign||function(){return Ku=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Ku.apply(this,arguments)},cw={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},Vx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=cw),this._targetEl=e,this._triggerEl=n,this._options=Ku(Ku({},cw),r),this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){e.hide()})},t.prototype.hide=function(){var e=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){e._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},t}();function Bg(){document.querySelectorAll("[data-dismiss-target]").forEach(function(t){var e=t.getAttribute("data-dismiss-target"),n=document.querySelector(e);n?new Vx(n,t):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))})}typeof window<"u"&&(window.Dismiss=Vx,window.initDismisses=Bg);var tn="top",Sn="bottom",An="right",nn="left",jg="auto",ll=[tn,Sn,An,nn],ko="start",kc="end",WV="clippingParents",Bx="viewport",pa="popper",QV="reference",lw=ll.reduce(function(t,e){return t.concat([e+"-"+ko,e+"-"+kc])},[]),jx=[].concat(ll,[jg]).reduce(function(t,e){return t.concat([e,e+"-"+ko,e+"-"+kc])},[]),YV="beforeRead",XV="read",JV="afterRead",ZV="beforeMain",eB="main",tB="afterMain",nB="beforeWrite",rB="write",sB="afterWrite",iB=[YV,XV,JV,ZV,eB,tB,nB,rB,sB];function hr(t){return t?(t.nodeName||"").toLowerCase():null}function yn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function _i(t){var e=yn(t).Element;return t instanceof e||t instanceof Element}function Tn(t){var e=yn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function qg(t){if(typeof ShadowRoot>"u")return!1;var e=yn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function oB(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},s=e.attributes[n]||{},i=e.elements[n];!Tn(i)||!hr(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var a=s[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function aB(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],i=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!Tn(s)||!hr(s)||(Object.assign(s.style,a),Object.keys(i).forEach(function(c){s.removeAttribute(c)}))})}}const cB={name:"applyStyles",enabled:!0,phase:"write",fn:oB,effect:aB,requires:["computeStyles"]};function or(t){return t.split("-")[0]}var si=Math.max,Gu=Math.min,Co=Math.round;function dp(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function qx(){return!/^((?!chrome|android).)*safari/i.test(dp())}function Ro(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),s=1,i=1;e&&Tn(t)&&(s=t.offsetWidth>0&&Co(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Co(r.height)/t.offsetHeight||1);var o=_i(t)?yn(t):window,a=o.visualViewport,c=!qx()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/s,u=(r.top+(c&&a?a.offsetTop:0))/i,h=r.width/s,d=r.height/i;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function zg(t){var e=Ro(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function zx(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&qg(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ar(t){return yn(t).getComputedStyle(t)}function lB(t){return["table","td","th"].indexOf(hr(t))>=0}function Ts(t){return((_i(t)?t.ownerDocument:t.document)||window.document).documentElement}function fd(t){return hr(t)==="html"?t:t.assignedSlot||t.parentNode||(qg(t)?t.host:null)||Ts(t)}function uw(t){return!Tn(t)||Ar(t).position==="fixed"?null:t.offsetParent}function uB(t){var e=/firefox/i.test(dp()),n=/Trident/i.test(dp());if(n&&Tn(t)){var r=Ar(t);if(r.position==="fixed")return null}var s=fd(t);for(qg(s)&&(s=s.host);Tn(s)&&["html","body"].indexOf(hr(s))<0;){var i=Ar(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function ul(t){for(var e=yn(t),n=uw(t);n&&lB(n)&&Ar(n).position==="static";)n=uw(n);return n&&(hr(n)==="html"||hr(n)==="body"&&Ar(n).position==="static")?e:n||uB(t)||e}function Hg(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ba(t,e,n){return si(t,Gu(e,n))}function hB(t,e,n){var r=Ba(t,e,n);return r>n?n:r}function Hx(){return{top:0,right:0,bottom:0,left:0}}function Kx(t){return Object.assign({},Hx(),t)}function Gx(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var dB=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Kx(typeof e!="number"?e:Gx(e,ll))};function fB(t){var e,n=t.state,r=t.name,s=t.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=or(n.placement),c=Hg(a),l=[nn,An].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var h=dB(s.padding,n),d=zg(i),f=c==="y"?tn:nn,g=c==="y"?Sn:An,v=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],_=o[c]-n.rects.reference[c],T=ul(i),A=T?c==="y"?T.clientHeight||0:T.clientWidth||0:0,k=v/2-_/2,E=h[f],L=A-d[u]-h[g],U=A/2-d[u]/2+k,Y=Ba(E,U,L),G=c;n.modifiersData[r]=(e={},e[G]=Y,e.centerOffset=Y-U,e)}}function pB(t){var e=t.state,n=t.options,r=n.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||zx(e.elements.popper,s)&&(e.elements.arrow=s))}const mB={name:"arrow",enabled:!0,phase:"main",fn:fB,effect:pB,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function No(t){return t.split("-")[1]}var gB={top:"auto",right:"auto",bottom:"auto",left:"auto"};function yB(t,e){var n=t.x,r=t.y,s=e.devicePixelRatio||1;return{x:Co(n*s)/s||0,y:Co(r*s)/s||0}}function hw(t){var e,n=t.popper,r=t.popperRect,s=t.placement,i=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,g=o.y,v=g===void 0?0:g,_=typeof u=="function"?u({x:f,y:v}):{x:f,y:v};f=_.x,v=_.y;var T=o.hasOwnProperty("x"),A=o.hasOwnProperty("y"),k=nn,E=tn,L=window;if(l){var U=ul(n),Y="clientHeight",G="clientWidth";if(U===yn(n)&&(U=Ts(n),Ar(U).position!=="static"&&a==="absolute"&&(Y="scrollHeight",G="scrollWidth")),U=U,s===tn||(s===nn||s===An)&&i===kc){E=Sn;var W=h&&U===L&&L.visualViewport?L.visualViewport.height:U[Y];v-=W-r.height,v*=c?1:-1}if(s===nn||(s===tn||s===Sn)&&i===kc){k=An;var le=h&&U===L&&L.visualViewport?L.visualViewport.width:U[G];f-=le-r.width,f*=c?1:-1}}var Te=Object.assign({position:a},l&&gB),Fe=u===!0?yB({x:f,y:v},yn(n)):{x:f,y:v};if(f=Fe.x,v=Fe.y,c){var De;return Object.assign({},Te,(De={},De[E]=A?"0":"",De[k]=T?"0":"",De.transform=(L.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",De))}return Object.assign({},Te,(e={},e[E]=A?v+"px":"",e[k]=T?f+"px":"",e.transform="",e))}function vB(t){var e=t.state,n=t.options,r=n.gpuAcceleration,s=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:or(e.placement),variation:No(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,hw(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,hw(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const _B={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vB,data:{}};var Pl={passive:!0};function wB(t){var e=t.state,n=t.instance,r=t.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,a=o===void 0?!0:o,c=yn(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",n.update,Pl)}),a&&c.addEventListener("resize",n.update,Pl),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Pl)}),a&&c.removeEventListener("resize",n.update,Pl)}}const bB={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:wB,data:{}};var IB={left:"right",right:"left",bottom:"top",top:"bottom"};function ou(t){return t.replace(/left|right|bottom|top/g,function(e){return IB[e]})}var EB={start:"end",end:"start"};function dw(t){return t.replace(/start|end/g,function(e){return EB[e]})}function Kg(t){var e=yn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Gg(t){return Ro(Ts(t)).left+Kg(t).scrollLeft}function TB(t,e){var n=yn(t),r=Ts(t),s=n.visualViewport,i=r.clientWidth,o=r.clientHeight,a=0,c=0;if(s){i=s.width,o=s.height;var l=qx();(l||!l&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:i,height:o,x:a+Gg(t),y:c}}function xB(t){var e,n=Ts(t),r=Kg(t),s=(e=t.ownerDocument)==null?void 0:e.body,i=si(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=si(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-r.scrollLeft+Gg(t),c=-r.scrollTop;return Ar(s||n).direction==="rtl"&&(a+=si(n.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function Wg(t){var e=Ar(t),n=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+r)}function Wx(t){return["html","body","#document"].indexOf(hr(t))>=0?t.ownerDocument.body:Tn(t)&&Wg(t)?t:Wx(fd(t))}function ja(t,e){var n;e===void 0&&(e=[]);var r=Wx(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=yn(r),o=s?[i].concat(i.visualViewport||[],Wg(r)?r:[]):r,a=e.concat(o);return s?a:a.concat(ja(fd(o)))}function fp(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function SB(t,e){var n=Ro(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function fw(t,e,n){return e===Bx?fp(TB(t,n)):_i(e)?SB(e,n):fp(xB(Ts(t)))}function AB(t){var e=ja(fd(t)),n=["absolute","fixed"].indexOf(Ar(t).position)>=0,r=n&&Tn(t)?ul(t):t;return _i(r)?e.filter(function(s){return _i(s)&&zx(s,r)&&hr(s)!=="body"}):[]}function kB(t,e,n,r){var s=e==="clippingParents"?AB(t):[].concat(e),i=[].concat(s,[n]),o=i[0],a=i.reduce(function(c,l){var u=fw(t,l,r);return c.top=si(u.top,c.top),c.right=Gu(u.right,c.right),c.bottom=Gu(u.bottom,c.bottom),c.left=si(u.left,c.left),c},fw(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Qx(t){var e=t.reference,n=t.element,r=t.placement,s=r?or(r):null,i=r?No(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(s){case tn:c={x:o,y:e.y-n.height};break;case Sn:c={x:o,y:e.y+e.height};break;case An:c={x:e.x+e.width,y:a};break;case nn:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=s?Hg(s):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case ko:c[l]=c[l]-(e[u]/2-n[u]/2);break;case kc:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function Cc(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=r===void 0?t.placement:r,i=n.strategy,o=i===void 0?t.strategy:i,a=n.boundary,c=a===void 0?WV:a,l=n.rootBoundary,u=l===void 0?Bx:l,h=n.elementContext,d=h===void 0?pa:h,f=n.altBoundary,g=f===void 0?!1:f,v=n.padding,_=v===void 0?0:v,T=Kx(typeof _!="number"?_:Gx(_,ll)),A=d===pa?QV:pa,k=t.rects.popper,E=t.elements[g?A:d],L=kB(_i(E)?E:E.contextElement||Ts(t.elements.popper),c,u,o),U=Ro(t.elements.reference),Y=Qx({reference:U,element:k,strategy:"absolute",placement:s}),G=fp(Object.assign({},k,Y)),W=d===pa?G:U,le={top:L.top-W.top+T.top,bottom:W.bottom-L.bottom+T.bottom,left:L.left-W.left+T.left,right:W.right-L.right+T.right},Te=t.modifiersData.offset;if(d===pa&&Te){var Fe=Te[s];Object.keys(le).forEach(function(De){var $t=[An,Sn].indexOf(De)>=0?1:-1,it=[tn,Sn].indexOf(De)>=0?"y":"x";le[De]+=Fe[it]*$t})}return le}function CB(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?jx:c,u=No(r),h=u?a?lw:lw.filter(function(g){return No(g)===u}):ll,d=h.filter(function(g){return l.indexOf(g)>=0});d.length===0&&(d=h);var f=d.reduce(function(g,v){return g[v]=Cc(t,{placement:v,boundary:s,rootBoundary:i,padding:o})[or(v)],g},{});return Object.keys(f).sort(function(g,v){return f[g]-f[v]})}function RB(t){if(or(t)===jg)return[];var e=ou(t);return[dw(t),e,dw(e)]}function NB(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,g=f===void 0?!0:f,v=n.allowedAutoPlacements,_=e.options.placement,T=or(_),A=T===_,k=c||(A||!g?[ou(_)]:RB(_)),E=[_].concat(k).reduce(function(an,cn){return an.concat(or(cn)===jg?CB(e,{placement:cn,boundary:u,rootBoundary:h,padding:l,flipVariations:g,allowedAutoPlacements:v}):cn)},[]),L=e.rects.reference,U=e.rects.popper,Y=new Map,G=!0,W=E[0],le=0;le<E.length;le++){var Te=E[le],Fe=or(Te),De=No(Te)===ko,$t=[tn,Sn].indexOf(Fe)>=0,it=$t?"width":"height",oe=Cc(e,{placement:Te,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),pe=$t?De?An:nn:De?Sn:tn;L[it]>U[it]&&(pe=ou(pe));var ye=ou(pe),Tt=[];if(i&&Tt.push(oe[Fe]<=0),a&&Tt.push(oe[pe]<=0,oe[ye]<=0),Tt.every(function(an){return an})){W=Te,G=!1;break}Y.set(Te,Tt)}if(G)for(var on=g?3:1,Kt=function(cn){var Ye=E.find(function(S){var q=Y.get(S);if(q)return q.slice(0,cn).every(function($){return $})});if(Ye)return W=Ye,"break"},ot=on;ot>0;ot--){var Cn=Kt(ot);if(Cn==="break")break}e.placement!==W&&(e.modifiersData[r]._skip=!0,e.placement=W,e.reset=!0)}}const PB={name:"flip",enabled:!0,phase:"main",fn:NB,requiresIfExists:["offset"],data:{_skip:!1}};function pw(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function mw(t){return[tn,An,Sn,nn].some(function(e){return t[e]>=0})}function DB(t){var e=t.state,n=t.name,r=e.rects.reference,s=e.rects.popper,i=e.modifiersData.preventOverflow,o=Cc(e,{elementContext:"reference"}),a=Cc(e,{altBoundary:!0}),c=pw(o,r),l=pw(a,s,i),u=mw(c),h=mw(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const OB={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:DB};function LB(t,e,n){var r=or(t),s=[nn,tn].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*s,[nn,An].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function MB(t){var e=t.state,n=t.options,r=t.name,s=n.offset,i=s===void 0?[0,0]:s,o=jx.reduce(function(u,h){return u[h]=LB(h,e.rects,i),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const FB={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:MB};function UB(t){var e=t.state,n=t.name;e.modifiersData[n]=Qx({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const $B={name:"popperOffsets",enabled:!0,phase:"read",fn:UB,data:{}};function VB(t){return t==="x"?"y":"x"}function BB(t){var e=t.state,n=t.options,r=t.name,s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,g=n.tetherOffset,v=g===void 0?0:g,_=Cc(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),T=or(e.placement),A=No(e.placement),k=!A,E=Hg(T),L=VB(E),U=e.modifiersData.popperOffsets,Y=e.rects.reference,G=e.rects.popper,W=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,le=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),Te=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Fe={x:0,y:0};if(U){if(i){var De,$t=E==="y"?tn:nn,it=E==="y"?Sn:An,oe=E==="y"?"height":"width",pe=U[E],ye=pe+_[$t],Tt=pe-_[it],on=f?-G[oe]/2:0,Kt=A===ko?Y[oe]:G[oe],ot=A===ko?-G[oe]:-Y[oe],Cn=e.elements.arrow,an=f&&Cn?zg(Cn):{width:0,height:0},cn=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Hx(),Ye=cn[$t],S=cn[it],q=Ba(0,Y[oe],an[oe]),$=k?Y[oe]/2-on-q-Ye-le.mainAxis:Kt-q-Ye-le.mainAxis,Z=k?-Y[oe]/2+on+q+S+le.mainAxis:ot+q+S+le.mainAxis,ve=e.elements.arrow&&ul(e.elements.arrow),m=ve?E==="y"?ve.clientTop||0:ve.clientLeft||0:0,y=(De=Te==null?void 0:Te[E])!=null?De:0,w=pe+$-y-m,x=pe+Z-y,C=Ba(f?Gu(ye,w):ye,pe,f?si(Tt,x):Tt);U[E]=C,Fe[E]=C-pe}if(a){var N,z=E==="x"?tn:nn,M=E==="x"?Sn:An,F=U[L],D=L==="y"?"height":"width",te=F+_[z],Q=F-_[M],ee=[tn,nn].indexOf(T)!==-1,ie=(N=Te==null?void 0:Te[L])!=null?N:0,me=ee?te:F-Y[D]-G[D]-ie+le.altAxis,Ce=ee?F+Y[D]+G[D]-ie-le.altAxis:Q,ke=f&&ee?hB(me,F,Ce):Ba(f?me:te,F,f?Ce:Q);U[L]=ke,Fe[L]=ke-F}e.modifiersData[r]=Fe}}const jB={name:"preventOverflow",enabled:!0,phase:"main",fn:BB,requiresIfExists:["offset"]};function qB(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function zB(t){return t===yn(t)||!Tn(t)?Kg(t):qB(t)}function HB(t){var e=t.getBoundingClientRect(),n=Co(e.width)/t.offsetWidth||1,r=Co(e.height)/t.offsetHeight||1;return n!==1||r!==1}function KB(t,e,n){n===void 0&&(n=!1);var r=Tn(e),s=Tn(e)&&HB(e),i=Ts(e),o=Ro(t,s,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((hr(e)!=="body"||Wg(i))&&(a=zB(e)),Tn(e)?(c=Ro(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=Gg(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function GB(t){var e=new Map,n=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function s(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&s(c)}}),r.push(i)}return t.forEach(function(i){n.has(i.name)||s(i)}),r}function WB(t){var e=GB(t);return iB.reduce(function(n,r){return n.concat(e.filter(function(s){return s.phase===r}))},[])}function QB(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function YB(t){var e=t.reduce(function(n,r){var s=n[r.name];return n[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var gw={placement:"bottom",modifiers:[],strategy:"absolute"};function yw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function XB(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,s=e.defaultOptions,i=s===void 0?gw:s;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},gw,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(T){var A=typeof T=="function"?T(u.options):T;v(),u.options=Object.assign({},i,u.options,A),u.scrollParents={reference:_i(a)?ja(a):a.contextElement?ja(a.contextElement):[],popper:ja(c)};var k=WB(YB([].concat(r,u.options.modifiers)));return u.orderedModifiers=k.filter(function(E){return E.enabled}),g(),f.update()},forceUpdate:function(){if(!d){var T=u.elements,A=T.reference,k=T.popper;if(yw(A,k)){u.rects={reference:KB(A,ul(k),u.options.strategy==="fixed"),popper:zg(k)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(le){return u.modifiersData[le.name]=Object.assign({},le.data)});for(var E=0;E<u.orderedModifiers.length;E++){if(u.reset===!0){u.reset=!1,E=-1;continue}var L=u.orderedModifiers[E],U=L.fn,Y=L.options,G=Y===void 0?{}:Y,W=L.name;typeof U=="function"&&(u=U({state:u,options:G,name:W,instance:f})||u)}}}},update:QB(function(){return new Promise(function(_){f.forceUpdate(),_(u)})}),destroy:function(){v(),d=!0}};if(!yw(a,c))return f;f.setOptions(l).then(function(_){!d&&l.onFirstUpdate&&l.onFirstUpdate(_)});function g(){u.orderedModifiers.forEach(function(_){var T=_.name,A=_.options,k=A===void 0?{}:A,E=_.effect;if(typeof E=="function"){var L=E({state:u,name:T,instance:f,options:k}),U=function(){};h.push(L||U)}})}function v(){h.forEach(function(_){return _()}),h=[]}return f}}var JB=[bB,$B,_B,cB,FB,PB,jB,mB,OB],Qg=XB({defaultModifiers:JB}),zr=globalThis&&globalThis.__assign||function(){return zr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},zr.apply(this,arguments)},Dl=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},Us={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,onShow:function(){},onHide:function(){},onToggle:function(){}},Yx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Us),this._targetEl=e,this._triggerEl=n,this._options=zr(zr({},Us),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();this._options.triggerType==="click"&&n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.toggle()})}),this._options.triggerType==="hover"&&(n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){r==="click"?e.toggle():setTimeout(function(){e.show()},e._options.delay)}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},e._options.delay)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},e._options.delay)})}))},t.prototype._createPopperInstance=function(){return Qg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.isVisible=function(){return this._visible},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(e){return zr(zr({},e),{modifiers:Dl(Dl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(e){return zr(zr({},e),{modifiers:Dl(Dl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},t}();function Yg(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(t){var e=t.getAttribute("data-dropdown-toggle"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-dropdown-placement"),s=t.getAttribute("data-dropdown-offset-skidding"),i=t.getAttribute("data-dropdown-offset-distance"),o=t.getAttribute("data-dropdown-trigger"),a=t.getAttribute("data-dropdown-delay");new Yx(n,t,{placement:r||Us.placement,triggerType:o||Us.triggerType,offsetSkidding:s?parseInt(s):Us.offsetSkidding,offsetDistance:i?parseInt(i):Us.offsetDistance,delay:a?parseInt(a):Us.delay})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}typeof window<"u"&&(window.Dropdown=Yx,window.initDropdowns=Yg);var Wu=globalThis&&globalThis.__assign||function(){return Wu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Wu.apply(this,arguments)},Gi={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},pp=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=Gi),this._targetEl=e,this._options=Wu(Wu({},Gi),n),this._isHidden=!0,this._backdropEl=null,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&this._getPlacementClasses().map(function(n){e._targetEl.classList.add(n)})},t.prototype._createBackdrop=function(){var e;if(this._isHidden){var n=document.createElement("div");n.setAttribute("modal-backdrop",""),(e=n.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(n),this._backdropEl=n}},t.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},t.prototype._setupModalCloseEventListeners=function(){var e=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(n){e._handleOutsideClick(n.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._handleOutsideClick=function(e){(e===this._targetEl||e===this._backdropEl&&this.isVisible())&&this.hide()},t.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},t.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},t.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},t.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},t.prototype.isVisible=function(){return!this._isHidden},t.prototype.isHidden=function(){return this._isHidden},t}(),Ol=function(t,e){return e.some(function(n){return n.id===t})?e.find(function(n){return n.id===t}):null};function Xg(){var t=[];document.querySelectorAll("[data-modal-target]").forEach(function(e){var n=e.getAttribute("data-modal-target"),r=document.getElementById(n);if(r){var s=r.getAttribute("data-modal-placement"),i=r.getAttribute("data-modal-backdrop");Ol(n,t)||t.push({id:n,object:new pp(r,{placement:s||Gi.placement,backdrop:i||Gi.backdrop})})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(e){var n=e.getAttribute("data-modal-toggle"),r=document.getElementById(n);if(r){var s=r.getAttribute("data-modal-placement"),i=r.getAttribute("data-modal-backdrop"),o=Ol(n,t);o||(o={id:n,object:new pp(r,{placement:s||Gi.placement,backdrop:i||Gi.backdrop})},t.push(o)),e.addEventListener("click",function(){o.object.toggle()})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(e){var n=e.getAttribute("data-modal-show"),r=document.getElementById(n);if(r){var s=Ol(n,t);s?e.addEventListener("click",function(){s.object.isHidden&&s.object.show()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(e){var n=e.getAttribute("data-modal-hide"),r=document.getElementById(n);if(r){var s=Ol(n,t);s?e.addEventListener("click",function(){s.object.isVisible&&s.object.hide()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}typeof window<"u"&&(window.Modal=pp,window.initModals=Xg);var Qu=globalThis&&globalThis.__assign||function(){return Qu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Qu.apply(this,arguments)},$s={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},Xx=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=$s),this._targetEl=e,this._options=Qu(Qu({},$s),n),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(n){e._targetEl.classList.add(n)}),document.addEventListener("keydown",function(n){n.key==="Escape"&&e.isVisible()&&e.hide()})},t.prototype.hide=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.add(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.add(n)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.remove(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.remove(n)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype._createBackdrop=function(){var e,n=this;if(!this._visible){var r=document.createElement("div");r.setAttribute("drawer-backdrop",""),(e=r.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(r),r.addEventListener("click",function(){n.hide()})}},t.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},t.prototype._getPlacementClasses=function(e){switch(e){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t}(),Ll=function(t,e){if(e.some(function(n){return n.id===t}))return e.find(function(n){return n.id===t})};function Jg(){var t=[];document.querySelectorAll("[data-drawer-target]").forEach(function(e){var n=e.getAttribute("data-drawer-target"),r=document.getElementById(n);if(r){var s=e.getAttribute("data-drawer-placement"),i=e.getAttribute("data-drawer-body-scrolling"),o=e.getAttribute("data-drawer-backdrop"),a=e.getAttribute("data-drawer-edge"),c=e.getAttribute("data-drawer-edge-offset");Ll(n,t)||t.push({id:n,object:new Xx(r,{placement:s||$s.placement,bodyScrolling:i?i==="true":$s.bodyScrolling,backdrop:o?o==="true":$s.backdrop,edge:a?a==="true":$s.edge,edgeOffset:c||$s.edgeOffset})})}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(e){var n=e.getAttribute("data-drawer-toggle"),r=document.getElementById(n);if(r){var s=Ll(n,t);s?e.addEventListener("click",function(){s.object.toggle()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(e){var n=e.getAttribute("data-drawer-dismiss")?e.getAttribute("data-drawer-dismiss"):e.getAttribute("data-drawer-hide"),r=document.getElementById(n);if(r){var s=Ll(n,t);s?e.addEventListener("click",function(){s.object.hide()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(e){var n=e.getAttribute("data-drawer-show"),r=document.getElementById(n);if(r){var s=Ll(n,t);s?e.addEventListener("click",function(){s.object.show()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}typeof window<"u"&&(window.Drawer=Xx,window.initDrawers=Jg);var Yu=globalThis&&globalThis.__assign||function(){return Yu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Yu.apply(this,arguments)},vw={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},Jx=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=vw),this._items=e,this._activeTab=n?this.getTab(n.defaultTabId):null,this._options=Yu(Yu({},vw),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(n){n.triggerEl.addEventListener("click",function(){e.show(n.id)})}))},t.prototype.getActiveTab=function(){return this._activeTab},t.prototype._setActiveTab=function(e){this._activeTab=e},t.prototype.getTab=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.show=function(e,n){var r,s,i=this;n===void 0&&(n=!1);var o=this.getTab(e);o===this._activeTab&&!n||(this._items.map(function(a){var c,l;a!==o&&((c=a.triggerEl.classList).remove.apply(c,i._options.activeClasses.split(" ")),(l=a.triggerEl.classList).add.apply(l,i._options.inactiveClasses.split(" ")),a.targetEl.classList.add("hidden"),a.triggerEl.setAttribute("aria-selected","false"))}),(r=o.triggerEl.classList).add.apply(r,this._options.activeClasses.split(" ")),(s=o.triggerEl.classList).remove.apply(s,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-selected","true"),o.targetEl.classList.remove("hidden"),this._setActiveTab(o),this._options.onShow(this,o))},t}();function Zg(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(t){var e=[],n=null;t.querySelectorAll('[role="tab"]').forEach(function(r){var s=r.getAttribute("aria-selected")==="true",i={id:r.getAttribute("data-tabs-target"),triggerEl:r,targetEl:document.querySelector(r.getAttribute("data-tabs-target"))};e.push(i),s&&(n=i.id)}),new Jx(e,{defaultTabId:n})})}typeof window<"u"&&(window.Tabs=Jx,window.initTabs=Zg);var Hr=globalThis&&globalThis.__assign||function(){return Hr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Hr.apply(this,arguments)},Ml=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},Xu={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Zx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Xu),this._targetEl=e,this._triggerEl=n,this._options=Hr(Hr({},Xu),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.hide()})})},t.prototype._createPopperInstance=function(){return Qg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Hr(Hr({},e),{modifiers:Ml(Ml([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Hr(Hr({},e),{modifiers:Ml(Ml([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function ey(){document.querySelectorAll("[data-tooltip-target]").forEach(function(t){var e=t.getAttribute("data-tooltip-target"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-tooltip-trigger"),s=t.getAttribute("data-tooltip-placement");new Zx(n,t,{placement:s||Xu.placement,triggerType:r||Xu.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))})}typeof window<"u"&&(window.Tooltip=Zx,window.initTooltips=ey);var Kr=globalThis&&globalThis.__assign||function(){return Kr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Kr.apply(this,arguments)},Fl=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},qa={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},eS=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=qa),this._targetEl=e,this._triggerEl=n,this._options=Kr(Kr({},qa),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},100)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},100)})})},t.prototype._createPopperInstance=function(){return Qg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Kr(Kr({},e),{modifiers:Fl(Fl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Kr(Kr({},e),{modifiers:Fl(Fl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function ty(){document.querySelectorAll("[data-popover-target]").forEach(function(t){var e=t.getAttribute("data-popover-target"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-popover-trigger"),s=t.getAttribute("data-popover-placement"),i=t.getAttribute("data-popover-offset");new eS(n,t,{placement:s||qa.placement,offset:i?parseInt(i):qa.offset,triggerType:r||qa.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))})}typeof window<"u"&&(window.Popover=eS,window.initPopovers=ty);var Ju=globalThis&&globalThis.__assign||function(){return Ju=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Ju.apply(this,arguments)},mp={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},tS=function(){function t(e,n,r,s){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=null),s===void 0&&(s=mp),this._parentEl=e,this._triggerEl=n,this._targetEl=r,this._options=Ju(Ju({},mp),s),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;if(this._triggerEl){var n=this._getTriggerEventTypes(this._options.triggerType);n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._parentEl.addEventListener(r,function(){e._parentEl.matches(":hover")||e.hide()})})}},t.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this._visible?this.hide():this.show()},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype._getTriggerEventTypes=function(e){switch(e){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t}();function ny(){document.querySelectorAll("[data-dial-init]").forEach(function(t){var e=t.querySelector("[data-dial-toggle]");if(e){var n=e.getAttribute("data-dial-toggle"),r=document.getElementById(n);if(r){var s=e.getAttribute("data-dial-trigger");new tS(t,e,r,{triggerType:s||mp.triggerType})}else console.error("Dial with id ".concat(n," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(t.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}typeof window<"u"&&(window.Dial=tS,window.initDials=ny);function nS(){Ug(),$g(),Vg(),Bg(),Yg(),Xg(),Jg(),Zg(),ey(),ty(),ny()}typeof window<"u"&&(window.initFlowbite=nS);var ZB=new GV("load",[Ug,$g,Vg,Bg,Yg,Xg,Jg,Zg,ey,ty,ny]);ZB.init();const e4={key:0,class:"sticky flex w-full flex-col bg-primary text-background shadow-sm shadow-secondary"},t4={class:"container mx-auto flex items-center justify-between bg-primary px-4 py-2"},n4={class:"flex items-center gap-4"},r4=p("span",{class:"material-icons text-3xl lg:text-base"},"add_box",-1),s4=p("span",{class:"hidden lg:inline-block"},"CREATE ITEM",-1),i4=p("button",{type:"button",class:"flex gap-1",id:"dropdownDefaultButton","data-dropdown-toggle":"dropdownNotifications","data-dropdown-trigger":"click"},[p("span",{class:"material-icons text-3xl lg:text-base"},"notifications"),p("span",{class:"hidden lg:inline-block"},"NOTIFICATIONS")],-1),o4=p("span",{class:"material-icons text-3xl lg:text-base"},"chat",-1),a4=p("span",{class:"hidden lg:inline-block"},"MESSAGES",-1),c4=["onClick"],l4=p("span",{class:"material-icons text-3xl lg:text-base"},"logout",-1),u4=p("span",{class:"hidden lg:inline-block"},"LOG OUT",-1),h4=[l4,u4],d4=["src"],f4={class:"bg-secondary bg-opacity-20"},p4={class:"container mx-auto flex flex-col-reverse items-stretch justify-between px-4 lg:flex-row"},m4={key:0,class:"flex scroll-p-12 gap-8 overflow-x-auto whitespace-nowrap px-4 pb-4 lg:py-4"},g4=p("li",null,"NEW",-1),y4=p("li",null,"HOT",-1),v4=p("li",null,"TOP RATED",-1),_4=p("li",null,"KIDS",-1),w4=p("li",null,"MEN",-1),b4=p("li",null,"WOMEN",-1),I4=[g4,y4,v4,_4,w4,b4],E4=p("div",null,null,-1),T4=p("input",{type:"text",name:"",id:"",class:"w-full rounded-l-md border-none bg-transparent bg-white bg-opacity-50 px-4 py-1 text-sm text-text placeholder:text-text placeholder:text-opacity-60 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50",placeholder:"Search..."},null,-1),x4=p("button",{class:"material-icons bg-accent px-2 py-1 text-text text-opacity-70 lg:py-0 lg:text-lg"}," search ",-1),S4={__name:"NavigationBar",setup(t){Xt.firestore();const e=mh(),n=kn();bi(async()=>{nS(),await n.initMyProfile()});function r(){n.searchItem()&&e.push("/search")}async function s(){try{await n.logout(),e.push("/")}catch(i){alert("Sign Out Error"+i)}}return(i,o)=>["login","register"].includes(i.$route.name)?Xi("",!0):(se(),fe("header",e4,[p("nav",t4,[H(Ob),p("ul",n4,[p("li",null,[H(ce(wn),{to:"/create-item",class:"flex gap-1"},{default:Ge(()=>[r4,s4]),_:1})]),p("li",null,[i4,H(KV)]),p("li",null,[H(ce(wn),{to:"/messages",class:"flex gap-1"},{default:Ge(()=>[o4,a4]),_:1})]),p("li",null,[p("button",{onClick:Ir(s,["prevent"]),class:"flex gap-1"},h4,8,c4)]),p("li",null,[H(ce(wn),{to:"/profile",class:"flex items-center gap-2"},{default:Ge(()=>[p("img",{src:ce(n).myProfile.image,alt:"",class:"aspect-square w-10 rounded-full"},null,8,d4)]),_:1})])])]),p("section",f4,[p("div",p4,[["home"].includes(i.$route.name)?(se(),fe("ol",m4,I4)):Xi("",!0),E4,["search"].includes(i.$route.name)?Xi("",!0):(se(),fe("form",{key:1,class:"my-3 flex overflow-hidden rounded-md border-2 border-text border-opacity-50 bg-background focus-within:border-2 focus-within:border-primary focus-within:border-opacity-100",onSubmit:o[0]||(o[0]=Ir(a=>r(),["stop","prevent"]))},[T4,x4,H(ce(wn),{to:"/search",class:"material-icons bg-accent py-1 pr-2 text-text text-opacity-70 lg:py-0 lg:text-lg"},{default:Ge(()=>[we("menu")]),_:1})],32))])])]))}},A4={},k4={key:0,class:"sticky bottom-0 flex w-full flex-col bg-primary px-4 text-background"},C4=p("nav",{class:"container mx-auto flex items-center justify-end py-4"},[p("p",null,"All Rights Reserved 2023. ®")],-1),R4=[C4];function N4(t,e){return["login","register"].includes(t.$route.name)?Xi("",!0):(se(),fe("header",k4,R4))}const P4=gh(A4,[["render",N4]]),D4={class:"flex flex-col h-screen"},O4={class:"basis-full overflow-y-auto"},L4={__name:"HomePageView",setup(t){return(e,n)=>(se(),fe("div",D4,[H(S4),p("div",O4,[H(ce(Dc))]),H(P4)]))}},M4={class:"aspect-square w-full"},F4=["src"],U4={class:"flex flex-col"},$4={class:"text-xs"},V4={class:"text-green-800"},B4=p("span",{class:"text-2xl"},"₱",-1),Zu={__name:"ItemsContainer",props:{gridfor:{type:String,default:""},items:{type:Array,default:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"},{id:2,name:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg"}]}},setup(t){function e(n){switch(n){case"search":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"}}return(n,r)=>(se(),fe("div",{class:Ln(["grid grid-flow-row gap-2 rounded-none bg-gradient-to-b from-secondary to-transparent bg-[length:100%_150px] bg-no-repeat px-2 py-4 sm:rounded-xl sm:px-4",e(t.gridfor)])},[(se(!0),fe(Ke,null,rr(t.items,s=>(se(),Ii(ce(wn),{to:"/item/"+s.itemId,class:"bg-white p-2 shadow-sm shadow-secondary"},{default:Ge(()=>[p("div",M4,[p("img",{src:s.image,alt:"",srcset:"",loading:"lazy",class:"aspect-square h-full object-contain"},null,8,F4)]),p("div",U4,[p("p",null,Oe(s.itemName),1),p("p",$4,Oe(s.location),1),p("p",V4,[B4,we(Oe(s.rentAmount+" - "+s.rentRate),1)])])]),_:2},1032,["to"]))),256))],2))}},j4={class:"container mx-auto flex flex-col gap-8 px-0 py-8 sm:px-4"},q4={class:"flex flex-col gap-2"},z4=p("h1",{class:"px-4 sm:px-0"},"JUST FOR YOU",-1),H4={class:"flex flex-col gap-2"},K4=p("h1",{class:"px-4 sm:px-0"},"DISCOVER",-1),G4={__name:"HomeView",setup(t){const e=kn(),n=Ee([]);return bi(async()=>{n.value=await e.loadItems()}),(r,s)=>(se(),fe("main",j4,[p("section",q4,[z4,H(Zu,{items:ce(e).itemsInRange(12,18)},null,8,["items"])]),p("section",H4,[K4,H(Zu,{items:n.value},null,8,["items"])])]))}},W4=["onSubmit"],Q4=p("h1",null,"Edit Profile",-1),Y4={class:"flex flex-col gap-2 p-2 md:gap-4"},X4={class:"flex flex-col gap-4 md:flex-row md:items-start md:gap-8"},J4={class:"flex flex-col"},Z4=p("h2",null,"Profile Picture",-1),ej={class:"relative inline-block aspect-square w-32 rounded-sm object-contain"},tj=["src"],nj=p("label",{for:"add-image",class:"material-icons absolute -bottom-2 -right-2 cursor-pointer rounded-md border-2 border-text border-opacity-50 bg-accent px-1 py-1 text-text text-opacity-70"}," add_photo_alternate ",-1),rj={class:"flex w-56 basis-full flex-col gap-2"},sj={class:"my-2 flex flex-col justify-end gap-2 px-2 md:flex-row"},ij=p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"}," Save changes ",-1),oj={__name:"EditProfile",props:{useruid:{default:0},profile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"}}},emits:["close"],setup(t,{emit:e}){const n=t,r=kn(),s=new FileReader,i=Ee(Object.assign({},n.profile));function o(c){let l=c.target.files[0];s.readAsDataURL(l),s.onload=u=>{i.value.image=u.target.result}}function a(){r.editProfile=Object.assign({},i.value),e("close")}return tb(async()=>{i.value=await r.loadProfile(n.useruid)}),(c,l)=>(se(),fe("form",{action:"#",onSubmit:Ir(a,["stop","prevent"])},[Q4,p("div",Y4,[p("div",X4,[p("div",J4,[Z4,p("div",ej,[p("img",{src:i.value.image,alt:"",srcset:"",class:"aspect-square w-32 rounded-lg object-contain"},null,8,tj),nj,p("input",{type:"file",id:"add-image",onChange:l[0]||(l[0]=u=>o(u)),hidden:""},null,32)])]),p("div",rj,[H(gt,{label:"First Name",modelValue:i.value.firstName,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value.firstName=u),placeholder:"First Name"},null,8,["modelValue"]),H(gt,{label:"Last Name",modelValue:i.value.lastName,"onUpdate:modelValue":l[2]||(l[2]=u=>i.value.lastName=u),placeholder:"Last Name"},null,8,["modelValue"])])]),H(gt,{label:"Location",modelValue:i.value.location,"onUpdate:modelValue":l[3]||(l[3]=u=>i.value.location=u),placeholder:"Current Location"},null,8,["modelValue"])]),p("footer",sj,[ij,p("button",{type:"button",onClick:l[4]||(l[4]=u=>e("close")),class:"rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"}," Cancel ")])],40,W4))}},aj={class:"container mx-auto flex flex-col gap-8 px-4 py-8"},cj={class:"flex flex-col gap-2 lg:flex-row"},lj={class:"flex basis-9/12 flex-col gap-2 sm:flex-row"},uj={class:"flex basis-4/12 flex-col gap-2 bg-white p-4 shadow-sm shadow-secondary"},hj=["src"],dj={class:"flex w-full basis-8/12 flex-col justify-between bg-white p-4 shadow-sm shadow-secondary"},fj={class:"flex flex-wrap items-start justify-between gap-2"},pj={class:"flex items-start gap-2"},mj={class:"text-3xl"},gj={class:"flex"},yj=p("span",{class:"material-icons text-green-600"},"location_on",-1),vj={class:"my-4"},_j=p("h2",null,"Lender Ratings",-1),wj={class:"mb-4 flex gap-4"},bj=p("span",null,"3.0 / 5.0",-1),Ij=p("h2",null,"Chat Response Rate",-1),Ej={class:"mb-4 flex gap-4"},Tj=p("span",null,"4.0 / 5.0",-1),xj={class:"flex flex-col justify-end gap-2 md:flex-row"},Sj=p("span",{class:"material-icons"},"forum",-1),Aj=p("span",null,"Chat",-1),kj=p("button",{class:"flex basis-1/2 items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80 transition-colors hover:bg-opacity-90 sm:basis-auto"},[p("span",{class:"material-icons"},"flag"),p("span",null,"Report user")],-1),Cj=uh('<div class="flex basis-3/12 flex-row gap-4 bg-white p-4 shadow-sm shadow-secondary lg:flex-col"><div class="basis-1/2 lg:basis-0"><h2>Lended Items</h2><h2 class="text-2xl">542</h2></div><div class="basis-1/2 lg:basis-0"><h2>Rented Items</h2><h2 class="text-2xl">34</h2></div></div>',1),Rj={class:"flex flex-col gap-2"},_w={__name:"ProfileView",setup(t){const e=kn(),n=Up();var r=n.params.id||e.myUserUid;const s=Ee([]),i=Ee({firstName:"",lastName:"",image:"",location:""});bi(async()=>{initFlowbite(),i.value=await e.loadProfile(r),s.value=await e.loadItems(12,r)}),Ws(()=>n.params.id,async l=>{l=l||e.myUserUid,i.value=await e.loadProfile(l),s.value=await e.loadItems(12,l)});const o=Ee(null);function a(){e.editProfile=i.value,o.value.showModal()}function c(){o.value.close()}return(l,u)=>(se(),fe(Ke,null,[p("main",aj,[p("section",cj,[p("div",lj,[p("div",uj,[p("img",{src:i.value.image,alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,hj)]),p("div",dj,[p("div",null,[p("div",fj,[p("div",pj,[p("h1",mj,Oe(i.value.firstName+" "+i.value.lastName),1),ce(r)==ce(e).myUserUid?(se(),fe("button",{key:0,onClick:a,class:"material-icons rounded-md border-2 border-text border-opacity-50 bg-accent px-1.5 py-0.5 text-base text-text text-opacity-60"}," edit ")):Xi("",!0)]),p("div",gj,[yj,p("span",null,Oe(i.value.location),1)])]),p("div",vj,[_j,p("div",wj,[bj,H(Ks,{value:"3"})]),Ij,p("div",Ej,[Tj,H(Ks,{value:"4"})])])]),p("div",xj,[H(ce(wn),{to:"/messages/5",class:"flex basis-1/2 items-center justify-center gap-1 rounded-md bg-primary px-8 py-2 text-background sm:basis-auto"},{default:Ge(()=>[Sj,Aj]),_:1}),kj])])]),Cj]),p("section",Rj,[p("h1",null,Oe(i.value.firstName+" "+i.value.lastName+"'s Item(s)"),1),H(Zu,{items:s.value},null,8,["items"])])]),p("dialog",{ref_key:"editDialog",ref:o,class:"rounded-xl backdrop:backdrop-brightness-50"},[H(oj,{onClose:c,useruid:ce(r),profile:i.value},null,8,["useruid","profile"])],512)],64))}},Nj={class:"container mx-auto flex flex-col gap-4 px-4 py-8"},Pj={class:"flex flex-row-reverse gap-2"},Dj={class:"flex flex-col gap-2 lg:flex-row"},Oj={class:"flex basis-3/12 flex-col bg-white p-4"},Lj=["src"],Mj={class:"flex w-full gap-2 overflow-x-auto px-1 py-2"},Fj=["src","onClick"],Uj={class:"flex w-full basis-6/12 flex-col justify-between bg-white p-4"},$j={class:"flex items-start justify-between"},Vj=p("span",{class:"rounded-full bg-green-600 px-4 py-1 text-xs font-black text-white"}," AVAILABLE ",-1),Bj={class:"my-4"},jj={class:"text-green-600"},qj=p("span",{class:"mr-2 text-2xl"},"₱",-1),zj={class:"flex gap-4"},Hj=p("span",null,"4.0 / 5.0",-1),Kj={class:"flex"},Gj=p("span",{class:"material-icons text-green-600"},"location_on",-1),Wj={class:"mt-2 flex flex-col"},Qj={class:"flex gap-2"},Yj={class:"flex flex-wrap gap-2"},Xj={class:"rounded-full border-2 border-yellow-500 bg-yellow-200 px-4 py-1 text-xs text-yellow-700"},Jj=uh('<div class="mt-4 flex flex-col justify-end gap-2 md:flex-row"><button class="flex basis-1/2 items-center justify-center gap-1 rounded-md bg-primary px-8 py-2 text-background sm:basis-auto"><span class="material-icons">more_time</span><span>Rent</span></button><button class="flex basis-1/2 items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80 transition-colors hover:bg-opacity-90 sm:basis-auto"><span class="material-icons">star</span><span>Add to Favorites</span></button></div>',1),Zj={class:"basis-3/12 bg-white p-4"},eq=p("h2",null,"Lender",-1),tq={class:"mb-4 flex flex-wrap items-center justify-between gap-2"},nq=["src"],rq={class:"whitespace-nowrap"},sq=p("button",{class:"flex items-center gap-1"},[p("span",{class:"material-icons text-green-600"},"forum"),we("Chat ")],-1),iq=p("h2",null,"Lender Ratings",-1),oq={class:"mb-4 flex items-center gap-4"},aq=p("span",null,"4.0 / 5.0",-1),cq=p("h2",null,"Chat Response Rate",-1),lq={class:"mb-4 flex items-center gap-4"},uq=p("span",null,"3.0 / 5.0",-1),hq={class:"flex flex-col gap-2"},dq=uh('<div class="flex flex-col justify-between gap-4 bg-gray-50 p-4 md:flex-row md:items-center"><h1>Item Reviews and Rating</h1><div class="flex flex-wrap items-start gap-4 text-sm sm:text-base md:items-center"><div class="flex items-center gap-1"><span class="material-icons text-green-600">filter_alt</span><span>Filter:</span><select name="" id="" class="text-xs sm:text-base"><option value="">All Star</option></select></div><div class="flex items-center gap-1"><span class="material-icons text-green-600">sort</span><span>Sort:</span><select name="" id="" class="text-xs sm:text-base"><option value="">Relevance</option><option value="">???</option></select></div></div></div>',1),fq={class:"flex flex-col gap-2"},pq={class:"flex flex-col gap-2 bg-white p-4"},mq={class:"flex items-center gap-2"},gq=["src"],yq={class:"flex flex-col"},vq={class:"truncate text-gray-700"},_q=p("p",{class:"py-2"},"user review........................",-1),wq={__name:"ItemDetailView",setup(t){const e=kn(),n=Up(),r=Ee(n.params.id),s=Ee(0);Ee(["https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg","https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg","https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg","https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg"]);const i=Ee(e.loadedProfile(5)),o=Ee({itemName:"",location:"",rentAmount:"",rentRate:"",images:[],description:"",ownerId:"",tags:[]});function a(c){s.value=c}return bi(async()=>{o.value=await e.loadItem(r.value),i.value=await e.loadProfile(o.value.ownerId)}),(c,l)=>(se(),fe("main",Nj,[p("section",Pj,[H(ce(wn),{to:"/home"},{default:Ge(()=>[we("Close X")]),_:1})]),p("section",Dj,[p("div",Oj,[p("img",{src:o.value.images[s.value],alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,Lj),p("div",Mj,[(se(!0),fe(Ke,null,rr(o.value.images,(u,h)=>(se(),fe("img",{class:Ln(["aspect-square h-24 cursor-pointer object-contain ring-4 ring-opacity-75",s.value==h?"ring-primary":"ring-transparent"]),src:u,onClick:d=>a(h),alt:"",srcset:""},null,10,Fj))),256))])]),p("div",Uj,[p("div",null,[p("div",$j,[p("h1",null,Oe(o.value.itemName),1),Vj]),p("div",Bj,[p("p",jj,[qj,we(Oe(o.value.rentAmount+" - "+o.value.rentRate),1)]),p("div",zj,[Hj,H(Ks,{value:"4"})]),p("div",Kj,[Gj,p("span",null,Oe(o.value.location),1)])]),p("p",null,Oe(o.value.description),1)]),p("div",Wj,[p("div",Qj,[we(" Tags: "),p("ul",Yj,[(se(!0),fe(Ke,null,rr(o.value.tags,u=>(se(),fe("li",Xj,Oe(u),1))),256))])]),Jj])]),p("div",Zj,[eq,p("div",tq,[H(ce(wn),{to:"/profile/"+o.value.ownerId,class:"flex items-center gap-2"},{default:Ge(()=>[p("img",{class:"aspect-square w-12 rounded-full",src:i.value.image,alt:"",srcset:""},null,8,nq),p("span",rq,Oe(i.value.firstName+" "+i.value.lastName),1)]),_:1},8,["to"]),sq]),iq,p("div",oq,[aq,H(Ks,{value:"4"})]),cq,p("div",lq,[uq,H(Ks,{value:"3"})])])]),p("section",hq,[dq,p("section",fq,[(se(),fe(Ke,null,rr(6,u=>p("article",pq,[p("div",mq,[p("img",{class:"aspect-square w-12 rounded-full",src:ce(e).loadedProfile(u).image,alt:"",srcset:""},null,8,gq),p("div",yq,[H(Ks,{value:"4"}),p("span",vq,Oe(ce(e).loadedProfile(u).firstName+" "+ce(e).loadedProfile(u).lastName),1)])]),_q])),64))])])]))}},bq={class:"container mx-auto flex h-full flex-row items-stretch gap-4 px-4 py-8"},Iq={class:"flex h-full flex-col overflow-hidden"},Eq=p("h1",{class:"z-10 px-6 py-4 shadow-sm shadow-secondary"}," Recent Messages ",-1),Tq={class:"overflow-y-auto px-2"},xq=["src"],Sq={class:"w-full truncate"},Aq={class:"truncate font-black"},kq={__name:"MessagesView",setup(t){const e=kn(),n=Ee([{convoId:"",participant:e.tempUserProfile,lastSender:"2",isRead:!0,lastMessage:"..."}]);return bi(async()=>{n.value=await e.loadConversations(e.myUserUid)}),(r,s)=>(se(),fe("main",bq,[p("aside",{class:Ln(["box-border basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-secondary lg:block lg:basis-1/3",["messages"].includes(r.$route.name)?"":"hidden"])},[p("div",Iq,[Eq,p("div",Tq,[(se(!0),fe(Ke,null,rr(n.value,i=>(se(),Ii(ce(wn),{to:"/messages/"+i.convoId,class:"my-2 flex gap-2 rounded-lg bg-opacity-40 p-2","active-class":"bg-secondary"},{default:Ge(()=>[p("img",{src:i.participant.image,alt:"",class:"aspect-square w-12 rounded-full shadow-sm shadow-secondary"},null,8,xq),p("div",Sq,[p("p",Aq,Oe(i.participant.firstName+" "+i.participant.lastName),1),p("p",{class:Ln(["truncate text-base text-gray-800",i.isRead||i.lastSender==ce(e).myUserUid?"font-normal":"font-bold"])},Oe((i.lastSender==ce(e).myUserUid?"You: ":"")+i.lastMessage),3)])]),_:2},1032,["to"]))),256))])])],2),p("div",{class:Ln(["basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-2/3",["messages"].includes(r.$route.name)?"hidden":""])},[H(ce(Dc))],2)]))}},Cq={class:"container mx-auto flex flex-col gap-4 px-4 py-8 lg:flex-row"},Rq=p("aside",{class:"basis-1/3"},[p("div",{class:"box-border flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm shadow-gray-400"},[p("h1",null,"Search for Items"),p("form",{action:"#",method:"get",class:"flex flex-col gap-2"},[p("div",{class:"flex gap-2"},[p("input",{type:"text",name:"",placeholder:"Item name",class:"w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),p("button",{type:"submit",class:"rounded-xl bg-green-700 px-4 py-2 text-white"}," Search ")]),p("div",{class:"flex gap-2"},[p("input",{type:"text",name:"",placeholder:"Min. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),p("input",{type:"text",name:"",placeholder:"Max. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""})]),p("input",{type:"text",placeholder:"Location",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"}),p("input",{type:"text",placeholder:"Tags",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"})]),p("section",null,[p("h2",null,"Category"),p("ul",null,[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Clothing "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Men")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Women")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Unisex")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Kids")])])]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Appliances "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Kitchen")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Laundry")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Living Room")])])]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Gadgets and Devices "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Smartphones")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Cameras")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Tablets")])])])])])])],-1),Nq={__name:"SearchView",setup(t){const e=kn();return(n,r)=>(se(),fe("main",Cq,[Rq,H(Zu,{items:ce(e).itemsInRange(4,16),gridfor:"search",class:"basis-2/3"},null,8,["items"])]))}},Pq={},Dq={class:"flex h-full flex-col items-center justify-center"},Oq={class:"text-gray-500"};function Lq(t,e){return se(),fe("div",Dq,[p("p",Oq,[sb(t.$slots,"default",{},()=>[we("Click on a conversation to start")])])])}const Mq=gh(Pq,[["render",Lq]]),Fq={class:"flex h-full flex-col justify-between"},Uq={class:"flex items-center justify-between bg-primary bg-opacity-90 px-6 py-2 shadow-md shadow-gray-400"},$q={class:"flex gap-2"},Vq=["src"],Bq={class:"flex flex-col text-background"},jq={class:"font-black"},qq=p("div",{class:"flex items-center gap-1 truncate"},[p("div",{class:"inline-block h-2 w-2 rounded-full bg-green-300"}),p("span",null,"Online")],-1),zq={class:"bg-white px-6 pt-12"},Hq=["src"],Kq={class:"max-w-full break-words"},Gq={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4"},Wq=p("button",{type:"submit",class:"material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background"}," send ",-1),Qq={__name:"ConversationView",setup(t){const e=Up(),n=kn(),r=Ee(""),s=Ee(),i=Ee(n.tempUserProfile),o=Ee({lastMessage:"Loading...",lastSender:"12",isRead:!0}),a=e.params.id,c=Ee([{sender:n.myUserUid,type:"message",content:"Loading..."}]);bi(async()=>{o.value=await n.loadConversation(a),c.value=[{sender:o.value.lastSender}],i.value=await n.loadProfile(o.value.participants.find(d=>d!=n.myUserUid)),c.value=await n.loadMessages(a)}),Ws(()=>e.params.id,async d=>{d&&(o.value=await n.loadConversation(d),i.value=await n.loadProfile(o.value.participants.find(f=>f!=n.myUserUid)),c.value=await n.loadMessages(d))});function l(){c.value.push({sender:n.myUserUid,content:r.value}),r.value=""}function u(d){return d+1==c.value.length?!1:c.value[d].sender==c.value[d+1].sender}function h(d){var f="";return d+1<c.value.length&&c.value[d].sender==c.value[d+1].sender&&(f+=c.value[d].sender==n.myUserUid?" rounded-br-none":" rounded-bl-none"),d-1>=0&&c.value[d].sender==c.value[d-1].sender&&(f+=c.value[d].sender==n.myUserUid?" rounded-tr-none":" rounded-tl-none"),f+=c.value[d].sender==n.myUserUid?" bg-primary text-background bg-opacity-90":" bg-secondary bg-opacity-40",f}return(d,f)=>(se(),fe("div",Fq,[p("header",Uq,[p("div",$q,[p("img",{src:i.value.image,alt:"",class:"aspect-square w-12 rounded-full"},null,8,Vq),p("div",Bq,[p("p",jq,Oe(i.value.firstName+" "+i.value.lastName),1),qq])]),H(ce(wn),{to:"/messages",class:"material-icons text-background"},{default:Ge(()=>[we("close")]),_:1})]),p("main",{class:"flex basis-full flex-col-reverse overflow-y-auto",ref_key:"scrollToElement",ref:s},[p("div",zq,[(se(!0),fe(Ke,null,rr(c.value,(g,v)=>(se(),fe("div",{class:Ln([g.sender==ce(n).myUserUid?"flex-row-reverse":"flex-row","my-1 flex items-end gap-2"])},[p("img",{src:g.sender==ce(n).myUserUid?ce(n).myProfile.image:i.value.image,alt:"",class:Ln(["aspect-square w-12 rounded-full shadow-sm shadow-secondary",u(v)?"opacity-0":""])},null,10,Hq),p("div",{class:Ln(["max-w-md rounded-3xl px-4 py-3 shadow-sm shadow-secondary",h(v)])},[p("p",Kq,Oe(g.content),1)],2)],2))),256)),p("section",Gq,[p("form",{class:"bg-amber-400 flex gap-2 rounded-xl bg-secondary bg-opacity-80 p-2 shadow-gray-400 drop-shadow-sm",onSubmit:f[1]||(f[1]=Ir(g=>l(),["prevent"]))},[H(gt,{placeholder:"Enter message...",modelValue:r.value,"onUpdate:modelValue":f[0]||(f[0]=g=>r.value=g)},null,8,["modelValue"]),Wq],32)])])],512)]))}},Yq={class:"bg-white p-8 self-center rounded-3xl flex flex-col overflow-y-auto max-w-full"},Xq={class:"successMessage bg-white rounded-md"},Jq={class:"py-3 px-5 text-white bg-gray-800 rounded-xl flex flex-col m-auto mt-5"},Zq=["onSubmit"],e6=p("h2",null,"Enter Email that is associated with your account.",-1),t6=p("button",{class:"py-3 px-5 text-white bg-green-800 rounded-xl"}," Reset Password ",-1),n6={__name:"ForgotPasswordView",setup(t){const e=Ee("");let n=Ee(!1),r=Ee(""),s=Ee(!1),i=Ee("");const o=async()=>{if(e.value!==""){try{await Xt.auth().sendPasswordResetEmail(e.value).then(()=>{s.value=!0,i.value="Check your email to reset your password",n.value=!1})}catch(a){s.value=!1,n.value=!0,r.value=a.message,console.log("error")}console.log("success")}else s.value=!1,n.value=!0,r.value="Please enter your email address.";console.log("failed")};return(a,c)=>{const l=Pc("RouterLink");return se(),fe("div",Yq,[_n(p("div",Xq,[we(Oe(ce(i))+" ",1),p("button",Jq,[H(l,{to:"/login"},{default:Ge(()=>[we("Close")]),_:1})])],512),[[Ys,ce(s)]]),_n(p("form",{onSubmit:Ir(o,["stop","prevent"]),class:"flex gap-2 flex-col"},[e6,_n(p("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Email Address"},null,512),[[lf,e.value]]),_n(p("div",{class:"errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"},Oe(ce(r)),513),[[Ys,ce(n)]]),t6,H(l,{to:"/login",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"},{default:Ge(()=>[we("Back")]),_:1})],40,Zq),[[Ys,!ce(s)]])])}}};const r6={},s6={class:"bg-white p-8 self-center max-w-full rounded-3xl flex flex-col overflow-y-auto"},i6=uh('<div class="overflow-y-auto max-h-96 text-justify pr-2" data-v-57730d13><h1 data-v-57730d13>Terms and Conditions</h1><h2 data-v-57730d13>Acceptance of Terms</h2><p data-v-57730d13> You accept and agree to be governed by these Terms and Conditions by accessing and using our renting web app (ItemShare). Please don&#39;t use the Platform if you disagree with these terms. </p><h2 data-v-57730d13>User Responsibility</h2><p data-v-57730d13> The Platform provides a platform for people to interact and conduct rental business. The things that are listed on the Platform are not under our ownership or control. </p><p data-v-57730d13> Users are completely responsible for their rental actions, which may include interacting with other users and negotiating and agreeing on rental terms. </p><p data-v-57730d13> Things advertised on the Platform may not be available, in good condition, of sufficient quality, or compliance with the law. Users are in charge of determining if the products are appropriate and trustworthy, and they use them at their own risk. </p><h2 data-v-57730d13>Liability</h2><p data-v-57730d13> We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or connected with the Platform, including but not limited to loss of data, loss of profit, or loss of business opportunities, to the extent permitted by applicable law. </p><p data-v-57730d13> The users undertake to hold us harmless from any claims, demands, or losses resulting from disagreements with other users or other parties. </p><h2 data-v-57730d13>Privacy and Personal Information</h2><p data-v-57730d13> We are dedicated to safeguarding our users&#39; data and privacy. For thorough information on how we gather, utilize, and protect user data, please refer to our Privacy Policy. </p><p data-v-57730d13> Although we will make a reasonable effort to protect user data, we cannot ensure the security of user data sent through the Platform. Users are aware of and agree to this risk. </p><h2 data-v-57730d13>Intellectual Property</h2><p data-v-57730d13> The Platform and its contents (aside from user-generated material) are owned by their respective owners and are covered by intellectual property rights. Without express authorization, Users agree not to use, modify, distribute, or reproduce any aspect of the Platform. </p><h2 data-v-57730d13>Modifications and Termination</h2><p data-v-57730d13> The Platform, together with these Terms and Conditions, is subject to change or termination at any moment with prior notice. </p><p data-v-57730d13> Users are recommended to often review the Terms and Conditions. Any changes made are accepted by continuing to use the Platform. </p></div>',1),o6={class:"flex justify-end gap-2 mt-4"};function a6(t,e){const n=Pc("RouterLink");return se(),fe("div",s6,[i6,p("div",o6,[H(n,{to:"/register",class:"py-3 px-5 text-white bg-green-800 rounded-lg"},{default:Ge(()=>[we(" ACCEPT ")]),_:1}),H(n,{to:"/register",class:"py-3 px-5 text-white bg-red-800 rounded-lg"},{default:Ge(()=>[we(" DECLINE ")]),_:1})])])}const c6=gh(r6,[["render",a6],["__scopeId","data-v-57730d13"]]),l6={class:"container mx-auto flex flex-col gap-2 px-4 py-8"},u6=p("h1",null,"New Item for Rent",-1),h6=["onSubmit"],d6={class:"flex basis-1/2 flex-col gap-4 px-8"},f6={class:"flex flex-col gap-1"},p6=p("label",null,"Description",-1),m6={class:"flex flex-col gap-1"},g6=p("label",null,"Tags",-1),y6={class:"flex flex-wrap gap-2 rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 p-2 focus-within:border-primary focus-within:border-opacity-100 focus-within:bg-white focus-within:bg-opacity-90"},v6={class:"flex items-center gap-1 whitespace-nowrap rounded-md bg-primary bg-opacity-80 py-1 pl-2 pr-1 text-background"},_6=["onClick"],w6={class:"flex basis-1/2 flex-col gap-4 px-8"},b6={class:"flex flex-col gap-1"},I6=p("label",null,"Images",-1),E6={class:"w-full overflow-x-auto rounded-md border-2 border-text border-opacity-25 bg-secondary bg-opacity-50 p-2",id:"images"},T6={class:"flex gap-2"},x6={for:"add-image",class:"group/x relative aspect-square h-40 rounded-md border-2 border-dashed border-text border-opacity-40 px-2 py-4 text-center hover:border-primary"},S6=p("p",{class:"material-icons text-6xl text-text text-opacity-50 group-hover/x:text-primary"}," add_photo_alternate ",-1),A6=p("p",{class:"text-sm text-text text-opacity-75 group-hover/x:text-primary"}," Browse for an image to upload. ",-1),k6=["src","onClick"],C6={class:"flex flex-col gap-4 sm:flex-row"},R6=p("footer",{class:"mt-4 flex flex-col justify-end gap-2 md:flex-row"},[p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-8 py-2 text-white"}," Create "),p("button",{type:"button",class:"rounded-md border-2 border-green-800 bg-white px-8 py-2 text-green-800"}," Cancel ")],-1),N6={__name:"CreateItemView",setup(t){const e=mh(),n=kn(),r=Ee([]),s=Ee({itemName:"",location:"",rentAmount:"",rentRate:"",description:"",imageFiles:[],tags:[]}),i=Ee(""),o=Ee("");function a(f){for(let g of f.target.files){let v=new FileReader;s.value.imageFiles.push(g),v.readAsDataURL(g),v.onload=_=>{r.value.push(_.target.result)}}}function c(f){r.value.splice(f,1),s.value.imageFiles.splice(f,1)}function l(f){s.value.tags.splice(f,1)}function u(){o.value&&(s.value.tags.includes(o.value)||s.value.tags.push(o.value),o.value="")}function h(){o.value.endsWith(",")&&(o.value=o.value.slice(0,-1),u())}async function d(){i.value="";try{await n.createItem(s.value)&&e.push("/home")}catch(f){i.value=f}}return(f,g)=>(se(),fe("main",l6,[u6,p("form",{onSubmit:Ir(d,["stop","prevent"]),class:"flex flex-col gap-4 divide-x-0 divide-secondary bg-white py-8 shadow-sm shadow-secondary md:flex-row md:gap-0 md:divide-x-2"},[p("div",d6,[H(gt,{modelValue:s.value.itemName,"onUpdate:modelValue":g[0]||(g[0]=v=>s.value.itemName=v),label:"Item Name",placeholder:"A name for the item..."},null,8,["modelValue"]),p("div",f6,[p6,_n(p("textarea",{"onUpdate:modelValue":g[1]||(g[1]=v=>s.value.description=v),name:"description",class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-primary focus:border-opacity-100 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50",placeholder:"A description on the item..."},null,512),[[lf,s.value.description]])]),p("div",m6,[g6,p("div",y6,[(se(!0),fe(Ke,null,rr(s.value.tags,(v,_)=>(se(),fe("div",v6,[p("span",null,Oe(v),1),p("button",{class:"material-icons aspect-square rounded-lg bg-background bg-opacity-10 px-1 text-xs font-bold text-background hover:bg-accent hover:text-text",onClick:T=>l(_),type:"button"}," close ",8,_6)]))),256)),_n(p("input",{type:"text",placeholder:"Add a tag...",onInput:g[2]||(g[2]=v=>h()),onKeydown:g[3]||(g[3]=kk(Ir(v=>u(),["prevent"]),["enter"])),onFocusout:g[4]||(g[4]=v=>u()),"onUpdate:modelValue":g[5]||(g[5]=v=>o.value=v),class:"flex-1 border-none bg-transparent px-1 py-1 focus:ring-0"},null,544),[[lf,o.value]])])]),H(gt,{modelValue:s.value.location,"onUpdate:modelValue":g[6]||(g[6]=v=>s.value.location=v),label:"Location",placeholder:"Preferred area to deliver or retrieve..."},null,8,["modelValue"])]),p("div",w6,[p("div",b6,[I6,p("div",E6,[p("div",T6,[p("label",x6,[S6,A6,p("input",{type:"file",id:"add-image",accept:"image/*",onChange:g[7]||(g[7]=v=>a(v)),class:"absolute left-0 top-0 block h-full w-full cursor-pointer opacity-0",multiple:""},null,32)]),(se(!0),fe(Ke,null,rr(r.value,(v,_)=>(se(),fe("img",{class:"aspect-square h-40 cursor-pointer rounded-md object-contain ring-4 ring-transparent hover:opacity-60 hover:ring-primary",src:v,alt:"",onClick:T=>c(_),srcset:""},null,8,k6))),256))])])]),p("div",C6,[H(gt,{modelValue:s.value.rentAmount,"onUpdate:modelValue":g[8]||(g[8]=v=>s.value.rentAmount=v),placeholder:"1,500",label:"Rent Amount",class:"basis-1/2"},null,8,["modelValue"]),H(gt,{modelValue:s.value.rentRate,"onUpdate:modelValue":g[9]||(g[9]=v=>s.value.rentRate=v),label:"Rent Rate",class:"basis-1/2",placeholder:"per day/week/month"},null,8,["modelValue"])]),_n(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},Oe(i.value),513),[[Ys,i.value]]),R6])],40,h6)]))}},rS=V1({history:s1("/itemshare/"),routes:[{path:"/",component:J1,meta:{requiresAuth:!1},children:[{path:"",name:"getStarted",component:oC},{path:"/login",name:"login",component:_V},{path:"/register",name:"register",component:FV},{path:"/terms-and-conditions",name:"termsAndConditions",component:c6},{path:"/forgot-password",name:"forgotPassword",component:n6}]},{path:"/home",component:L4,meta:{requiresAuth:!0},children:[{path:"",name:"home",component:G4},{path:"/profile/:id",name:"profile",component:_w},{path:"/profile",name:"myProfile",component:_w},{path:"/messages",component:kq,children:[{path:"",name:"messages",component:Mq},{path:"/messages/:id",name:"conversation",component:Qq}]},{path:"/item/:id",name:"itemDetail",component:wq},{path:"/search",name:"search",component:Nq},{path:"/create-item",name:"createItem",component:N6}]}]});rS.beforeEach((t,e,n)=>{const r=kn();t.meta.requiresAuth&&!r.loggedInUser?n("/"):!t.meta.requiresAuth&&r.loggedInUser?n("/home"):n()});const ry=Nk(j1);ry.use(Ok());ry.use(rS);ry.mount("#app");
