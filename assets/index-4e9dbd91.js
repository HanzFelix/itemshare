(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ap(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Be={},no=[],Fn=()=>{},SS=()=>!1,AS=/^on[^a-z]/,ih=t=>AS.test(t),kp=t=>t.startsWith("onUpdate:"),dt=Object.assign,Cp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kS=Object.prototype.hasOwnProperty,Ae=(t,e)=>kS.call(t,e),oe=Array.isArray,ro=t=>Dc(t)==="[object Map]",oh=t=>Dc(t)==="[object Set]",Iy=t=>Dc(t)==="[object Date]",ye=t=>typeof t=="function",ft=t=>typeof t=="string",Wa=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",$w=t=>Me(t)&&ye(t.then)&&ye(t.catch),Vw=Object.prototype.toString,Dc=t=>Vw.call(t),CS=t=>Dc(t).slice(8,-1),Bw=t=>Dc(t)==="[object Object]",Rp=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bl=Ap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ah=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},RS=/-(\w)/g,dr=ah(t=>t.replace(RS,(e,n)=>n?n.toUpperCase():"")),NS=/\B([A-Z])/g,Ni=ah(t=>t.replace(NS,"-$1").toLowerCase()),ch=ah(t=>t.charAt(0).toUpperCase()+t.slice(1)),wd=ah(t=>t?`on${ch(t)}`:""),Qa=(t,e)=>!Object.is(t,e),jl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},du=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},of=t=>{const e=parseFloat(t);return isNaN(e)?t:e},PS=t=>{const e=ft(t)?Number(t):NaN;return isNaN(e)?t:e};let Ey;const af=()=>Ey||(Ey=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Np(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ft(r)?MS(r):Np(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ft(t))return t;if(Me(t))return t}}const DS=/;(?![^(]*\))/g,OS=/:([^]+)/,LS=/\/\*[^]*?\*\//g;function MS(t){const e={};return t.replace(LS,"").split(DS).forEach(n=>{if(n){const r=n.split(OS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Un(t){let e="";if(ft(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Un(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const FS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",US=Ap(FS);function jw(t){return!!t||t===""}function $S(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=lh(t[r],e[r]);return n}function lh(t,e){if(t===e)return!0;let n=Iy(t),r=Iy(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Wa(t),r=Wa(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?$S(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!lh(t[o],e[o]))return!1}}return String(t)===String(e)}function qw(t,e){return t.findIndex(n=>lh(n,e))}const De=t=>ft(t)?t:t==null?"":oe(t)||Me(t)&&(t.toString===Vw||!ye(t.toString))?JSON.stringify(t,zw,2):String(t),zw=(t,e)=>e&&e.__v_isRef?zw(t,e.value):ro(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:oh(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!oe(e)&&!Bw(e)?String(e):e;let hn;class Hw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=hn;try{return hn=this,e()}finally{hn=n}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Kw(t){return new Hw(t)}function VS(t,e=hn){e&&e.active&&e.effects.push(t)}function Gw(){return hn}function BS(t){hn&&hn.cleanups.push(t)}const Pp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ww=t=>(t.w&hs)>0,Qw=t=>(t.n&hs)>0,jS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hs},qS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ww(s)&&!Qw(s)?s.delete(t):e[n++]=s,s.w&=~hs,s.n&=~hs}e.length=n}},fu=new WeakMap;let _a=0,hs=1;const cf=30;let Dn;const ai=Symbol(""),lf=Symbol("");class Dp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,VS(this,r)}run(){if(!this.active)return this.fn();let e=Dn,n=is;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dn,Dn=this,is=!0,hs=1<<++_a,_a<=cf?jS(this):Ty(this),this.fn()}finally{_a<=cf&&qS(this),hs=1<<--_a,Dn=this.parent,is=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dn===this?this.deferStop=!0:this.active&&(Ty(this),this.onStop&&this.onStop(),this.active=!1)}}function Ty(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let is=!0;const Yw=[];function Fo(){Yw.push(is),is=!1}function Uo(){const t=Yw.pop();is=t===void 0?!0:t}function sn(t,e,n){if(is&&Dn){let r=fu.get(t);r||fu.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Pp()),Xw(s)}}function Xw(t,e){let n=!1;_a<=cf?Qw(t)||(t.n|=hs,n=!Ww(t)):n=!t.has(Dn),n&&(t.add(Dn),Dn.deps.push(t))}function Sr(t,e,n,r,s,i){const o=fu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?Rp(n)&&a.push(o.get("length")):(a.push(o.get(ai)),ro(t)&&a.push(o.get(lf)));break;case"delete":oe(t)||(a.push(o.get(ai)),ro(t)&&a.push(o.get(lf)));break;case"set":ro(t)&&a.push(o.get(ai));break}if(a.length===1)a[0]&&uf(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);uf(Pp(c))}}function uf(t,e){const n=oe(t)?t:[...t];for(const r of n)r.computed&&xy(r);for(const r of n)r.computed||xy(r)}function xy(t,e){(t!==Dn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function zS(t,e){var n;return(n=fu.get(t))==null?void 0:n.get(e)}const HS=Ap("__proto__,__v_isRef,__isVue"),Jw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wa)),KS=Op(),GS=Op(!1,!0),WS=Op(!0),Sy=QS();function QS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)sn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fo();const r=Se(this)[e].apply(this,n);return Uo(),r}}),t}function YS(t){const e=Se(this);return sn(e,"has",t),e.hasOwnProperty(t)}function Op(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?dA:rb:e?nb:tb).get(r))return r;const o=oe(r);if(!t){if(o&&Ae(Sy,s))return Reflect.get(Sy,s,i);if(s==="hasOwnProperty")return YS}const a=Reflect.get(r,s,i);return(Wa(s)?Jw.has(s):HS(s))||(t||sn(r,"get",s),e)?a:it(a)?o&&Rp(s)?a:a.value:Me(a)?t?sb(a):$o(a):a}}const XS=Zw(),JS=Zw(!0);function Zw(t=!1){return function(n,r,s,i){let o=n[r];if(po(o)&&it(o)&&!it(s))return!1;if(!t&&(!pu(s)&&!po(s)&&(o=Se(o),s=Se(s)),!oe(n)&&it(o)&&!it(s)))return o.value=s,!0;const a=oe(n)&&Rp(r)?Number(r)<n.length:Ae(n,r),c=Reflect.set(n,r,s,i);return n===Se(i)&&(a?Qa(s,o)&&Sr(n,"set",r,s):Sr(n,"add",r,s)),c}}function ZS(t,e){const n=Ae(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Sr(t,"delete",e,void 0),r}function eA(t,e){const n=Reflect.has(t,e);return(!Wa(e)||!Jw.has(e))&&sn(t,"has",e),n}function tA(t){return sn(t,"iterate",oe(t)?"length":ai),Reflect.ownKeys(t)}const eb={get:KS,set:XS,deleteProperty:ZS,has:eA,ownKeys:tA},nA={get:WS,set(t,e){return!0},deleteProperty(t,e){return!0}},rA=dt({},eb,{get:GS,set:JS}),Lp=t=>t,uh=t=>Reflect.getPrototypeOf(t);function pl(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(e!==i&&sn(s,"get",e),sn(s,"get",i));const{has:o}=uh(s),a=r?Lp:n?Up:Ya;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ml(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(t!==s&&sn(r,"has",t),sn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function gl(t,e=!1){return t=t.__v_raw,!e&&sn(Se(t),"iterate",ai),Reflect.get(t,"size",t)}function Ay(t){t=Se(t);const e=Se(this);return uh(e).has.call(e,t)||(e.add(t),Sr(e,"add",t,t)),this}function ky(t,e){e=Se(e);const n=Se(this),{has:r,get:s}=uh(n);let i=r.call(n,t);i||(t=Se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Qa(e,o)&&Sr(n,"set",t,e):Sr(n,"add",t,e),this}function Cy(t){const e=Se(this),{has:n,get:r}=uh(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Sr(e,"delete",t,void 0),i}function Ry(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&Sr(t,"clear",void 0,void 0),n}function yl(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Se(o),c=e?Lp:t?Up:Ya;return!t&&sn(a,"iterate",ai),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function vl(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=ro(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Lp:e?Up:Ya;return!e&&sn(i,"iterate",c?lf:ai),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function $r(t){return function(...e){return t==="delete"?!1:this}}function sA(){const t={get(i){return pl(this,i)},get size(){return gl(this)},has:ml,add:Ay,set:ky,delete:Cy,clear:Ry,forEach:yl(!1,!1)},e={get(i){return pl(this,i,!1,!0)},get size(){return gl(this)},has:ml,add:Ay,set:ky,delete:Cy,clear:Ry,forEach:yl(!1,!0)},n={get(i){return pl(this,i,!0)},get size(){return gl(this,!0)},has(i){return ml.call(this,i,!0)},add:$r("add"),set:$r("set"),delete:$r("delete"),clear:$r("clear"),forEach:yl(!0,!1)},r={get(i){return pl(this,i,!0,!0)},get size(){return gl(this,!0)},has(i){return ml.call(this,i,!0)},add:$r("add"),set:$r("set"),delete:$r("delete"),clear:$r("clear"),forEach:yl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vl(i,!1,!1),n[i]=vl(i,!0,!1),e[i]=vl(i,!1,!0),r[i]=vl(i,!0,!0)}),[t,n,e,r]}const[iA,oA,aA,cA]=sA();function Mp(t,e){const n=e?t?cA:aA:t?oA:iA;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const lA={get:Mp(!1,!1)},uA={get:Mp(!1,!0)},hA={get:Mp(!0,!1)},tb=new WeakMap,nb=new WeakMap,rb=new WeakMap,dA=new WeakMap;function fA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pA(t){return t.__v_skip||!Object.isExtensible(t)?0:fA(CS(t))}function $o(t){return po(t)?t:Fp(t,!1,eb,lA,tb)}function mA(t){return Fp(t,!1,rA,uA,nb)}function sb(t){return Fp(t,!0,nA,hA,rb)}function Fp(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=pA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function os(t){return po(t)?os(t.__v_raw):!!(t&&t.__v_isReactive)}function po(t){return!!(t&&t.__v_isReadonly)}function pu(t){return!!(t&&t.__v_isShallow)}function ib(t){return os(t)||po(t)}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function hh(t){return du(t,"__v_skip",!0),t}const Ya=t=>Me(t)?$o(t):t,Up=t=>Me(t)?sb(t):t;function ob(t){is&&Dn&&(t=Se(t),Xw(t.dep||(t.dep=Pp())))}function ab(t,e){t=Se(t);const n=t.dep;n&&uf(n)}function it(t){return!!(t&&t.__v_isRef===!0)}function de(t){return cb(t,!1)}function gA(t){return cb(t,!0)}function cb(t,e){return it(t)?t:new yA(t,e)}class yA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:Ya(e)}get value(){return ob(this),this._value}set value(e){const n=this.__v_isShallow||pu(e)||po(e);e=n?e:Se(e),Qa(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ya(e),ab(this))}}function he(t){return it(t)?t.value:t}const vA={get:(t,e,n)=>he(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lb(t){return os(t)?t:new Proxy(t,vA)}function _A(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=bA(t,n);return e}class wA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zS(Se(this._object),this._key)}}function bA(t,e,n){const r=t[e];return it(r)?r:new wA(t,e,n)}class IA{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Dp(e,()=>{this._dirty||(this._dirty=!0,ab(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return ob(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function EA(t,e,n=!1){let r,s;const i=ye(t);return i?(r=t,s=Fn):(r=t.get,s=t.set),new IA(r,s,i||!s,n)}function as(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){dh(i,e,n)}return s}function En(t,e,n,r){if(ye(t)){const i=as(t,e,n,r);return i&&$w(i)&&i.catch(o=>{dh(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}function dh(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){as(c,null,10,[t,o,a]);return}}TA(t,n,s,r)}function TA(t,e,n,r=!0){console.error(t)}let Xa=!1,hf=!1;const Ut=[];let Qn=0;const so=[];let vr=null,js=0;const ub=Promise.resolve();let $p=null;function Vp(t){const e=$p||ub;return t?e.then(this?t.bind(this):t):e}function xA(t){let e=Qn+1,n=Ut.length;for(;e<n;){const r=e+n>>>1;Ja(Ut[r])<t?e=r+1:n=r}return e}function Bp(t){(!Ut.length||!Ut.includes(t,Xa&&t.allowRecurse?Qn+1:Qn))&&(t.id==null?Ut.push(t):Ut.splice(xA(t.id),0,t),hb())}function hb(){!Xa&&!hf&&(hf=!0,$p=ub.then(fb))}function SA(t){const e=Ut.indexOf(t);e>Qn&&Ut.splice(e,1)}function AA(t){oe(t)?so.push(...t):(!vr||!vr.includes(t,t.allowRecurse?js+1:js))&&so.push(t),hb()}function Ny(t,e=Xa?Qn+1:0){for(;e<Ut.length;e++){const n=Ut[e];n&&n.pre&&(Ut.splice(e,1),e--,n())}}function db(t){if(so.length){const e=[...new Set(so)];if(so.length=0,vr){vr.push(...e);return}for(vr=e,vr.sort((n,r)=>Ja(n)-Ja(r)),js=0;js<vr.length;js++)vr[js]();vr=null,js=0}}const Ja=t=>t.id==null?1/0:t.id,kA=(t,e)=>{const n=Ja(t)-Ja(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function fb(t){hf=!1,Xa=!0,Ut.sort(kA);const e=Fn;try{for(Qn=0;Qn<Ut.length;Qn++){const n=Ut[Qn];n&&n.active!==!1&&as(n,null,14)}}finally{Qn=0,Ut.length=0,db(),Xa=!1,$p=null,(Ut.length||so.length)&&fb()}}function CA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Be;d&&(s=n.map(f=>ft(f)?f.trim():f)),h&&(s=n.map(of))}let a,c=r[a=wd(e)]||r[a=wd(dr(e))];!c&&i&&(c=r[a=wd(Ni(e))]),c&&En(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,En(l,t,6,s)}}function pb(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ye(t)){const c=l=>{const u=pb(l,e,!0);u&&(a=!0,dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Me(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):dt(o,i),Me(t)&&r.set(t,o),o)}function fh(t,e){return!t||!ih(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Ni(e))||Ae(t,e))}let bt=null,mb=null;function mu(t){const e=bt;return bt=t,mb=t&&t.type.__scopeId||null,e}function Ue(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qy(-1);const i=mu(e);let o;try{o=t(...s)}finally{mu(i),r._d&&qy(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bd(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:g}=t;let _,T;const S=mu(t);try{if(n.shapeFlag&4){const E=s||r;_=Wn(u.call(E,E,h,i,f,d,m)),T=c}else{const E=e;_=Wn(E.length>1?E(i,{attrs:c,slots:a,emit:l}):E(i,null)),T=e.props?c:RA(c)}}catch(E){Ra.length=0,dh(E,t,1),_=j(xn)}let A=_;if(T&&g!==!1){const E=Object.keys(T),{shapeFlag:L}=A;E.length&&L&7&&(o&&E.some(kp)&&(T=NA(T,o)),A=fs(A,T))}return n.dirs&&(A=fs(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),_=A,mu(S),_}const RA=t=>{let e;for(const n in t)(n==="class"||n==="style"||ih(n))&&((e||(e={}))[n]=t[n]);return e},NA=(t,e)=>{const n={};for(const r in t)(!kp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function PA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Py(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!fh(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Py(r,o,l):!0:!!o;return!1}function Py(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!fh(n,i))return!0}return!1}function DA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const OA=t=>t.__isSuspense;function LA(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):AA(t)}const _l={};function cs(t,e,n){return gb(t,e,n)}function gb(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Be){var a;const c=Gw()===((a=mt)==null?void 0:a.scope)?mt:null;let l,u=!1,h=!1;if(it(t)?(l=()=>t.value,u=pu(t)):os(t)?(l=()=>t,r=!0):oe(t)?(h=!0,u=t.some(E=>os(E)||pu(E)),l=()=>t.map(E=>{if(it(E))return E.value;if(os(E))return ei(E);if(ye(E))return as(E,c,2)})):ye(t)?e?l=()=>as(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),En(t,c,3,[f])}:l=Fn,e&&r){const E=l;l=()=>ei(E())}let d,f=E=>{d=S.onStop=()=>{as(E,c,4)}},m;if(tc)if(f=Fn,e?n&&En(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const E=N1();m=E.__watcherHandles||(E.__watcherHandles=[])}else return Fn;let g=h?new Array(t.length).fill(_l):_l;const _=()=>{if(S.active)if(e){const E=S.run();(r||u||(h?E.some((L,F)=>Qa(L,g[F])):Qa(E,g)))&&(d&&d(),En(e,c,3,[E,g===_l?void 0:h&&g[0]===_l?[]:g,f]),g=E)}else S.run()};_.allowRecurse=!!e;let T;s==="sync"?T=_:s==="post"?T=()=>Qt(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),T=()=>Bp(_));const S=new Dp(l,T);e?n?_():g=S.run():s==="post"?Qt(S.run.bind(S),c&&c.suspense):S.run();const A=()=>{S.stop(),c&&c.scope&&Cp(c.scope.effects,S)};return m&&m.push(A),A}function MA(t,e,n){const r=this.proxy,s=ft(t)?t.includes(".")?yb(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const o=mt;mo(this);const a=gb(s,i.bind(r),n);return o?mo(o):ci(),a}function yb(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ei(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),it(t))ei(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)ei(t[n],e);else if(oh(t)||ro(t))t.forEach(n=>{ei(n,e)});else if(Bw(t))for(const n in t)ei(t[n],e);return t}function fn(t,e){const n=bt;if(n===null)return t;const r=vh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Be]=e[i];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&ei(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ls(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Fo(),En(c,n,8,[t.el,a,t,e]),Uo())}}function FA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ss(()=>{t.isMounted=!0}),Eb(()=>{t.isUnmounting=!0}),t}const wn=[Function,Array],vb={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wn,onEnter:wn,onAfterEnter:wn,onEnterCancelled:wn,onBeforeLeave:wn,onLeave:wn,onAfterLeave:wn,onLeaveCancelled:wn,onBeforeAppear:wn,onAppear:wn,onAfterAppear:wn,onAppearCancelled:wn},UA={name:"BaseTransition",props:vb,setup(t,{slots:e}){const n=E1(),r=FA();let s;return()=>{const i=e.default&&wb(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const g of i)if(g.type!==xn){o=g;break}}const a=Se(t),{mode:c}=a;if(r.isLeaving)return Id(o);const l=Dy(o);if(!l)return Id(o);const u=df(l,a,r,n);ff(l,u);const h=n.subTree,d=h&&Dy(h);let f=!1;const{getTransitionKey:m}=l.type;if(m){const g=m();s===void 0?s=g:g!==s&&(s=g,f=!0)}if(d&&d.type!==xn&&(!qs(l,d)||f)){const g=df(d,a,r,n);if(ff(d,g),c==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Id(o);c==="in-out"&&l.type!==xn&&(g.delayLeave=(_,T,S)=>{const A=_b(r,d);A[String(d.key)]=d,_._leaveCb=()=>{T(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},$A=UA;function _b(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function df(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:g,onAppear:_,onAfterAppear:T,onAppearCancelled:S}=e,A=String(t.key),E=_b(n,t),L=(O,V)=>{O&&En(O,r,9,V)},F=(O,V)=>{const J=V[1];L(O,V),oe(O)?O.every(pe=>pe.length<=1)&&J():O.length<=1&&J()},Y={mode:i,persisted:o,beforeEnter(O){let V=a;if(!n.isMounted)if(s)V=g||a;else return;O._leaveCb&&O._leaveCb(!0);const J=E[A];J&&qs(t,J)&&J.el._leaveCb&&J.el._leaveCb(),L(V,[O])},enter(O){let V=c,J=l,pe=u;if(!n.isMounted)if(s)V=_||c,J=T||l,pe=S||u;else return;let z=!1;const le=O._enterCb=Ve=>{z||(z=!0,Ve?L(pe,[O]):L(J,[O]),Y.delayedLeave&&Y.delayedLeave(),O._enterCb=void 0)};V?F(V,[O,le]):le()},leave(O,V){const J=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return V();L(h,[O]);let pe=!1;const z=O._leaveCb=le=>{pe||(pe=!0,V(),le?L(m,[O]):L(f,[O]),O._leaveCb=void 0,E[J]===t&&delete E[J])};E[J]=t,d?F(d,[O,z]):z()},clone(O){return df(O,e,n,r)}};return Y}function Id(t){if(ph(t))return t=fs(t),t.children=null,t}function Dy(t){return ph(t)?t.children?t.children[0]:void 0:t}function ff(t,e){t.shapeFlag&6&&t.component?ff(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wb(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Fe?(o.patchFlag&128&&s++,r=r.concat(wb(o.children,e,a))):(e||o.type!==xn)&&r.push(a!=null?fs(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function bb(t,e){return ye(t)?(()=>dt({name:t.name},e,{setup:t}))():t}const ka=t=>!!t.type.__asyncLoader,ph=t=>t.type.__isKeepAlive;function VA(t,e){Ib(t,"a",e)}function BA(t,e){Ib(t,"da",e)}function Ib(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(mh(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ph(s.parent.vnode)&&jA(r,e,n,s),s=s.parent}}function jA(t,e,n,r){const s=mh(e,t,r,!0);Tb(()=>{Cp(r[e],s)},n)}function mh(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fo(),mo(n);const a=En(e,n,t,o);return ci(),Uo(),a});return r?s.unshift(i):s.push(i),i}}const Pr=t=>(e,n=mt)=>(!tc||t==="sp")&&mh(t,(...r)=>e(...r),n),qA=Pr("bm"),Ss=Pr("m"),zA=Pr("bu"),HA=Pr("u"),Eb=Pr("bum"),Tb=Pr("um"),KA=Pr("sp"),GA=Pr("rtg"),WA=Pr("rtc");function QA(t,e=mt){mh("ec",t,e)}const xb="components";function Oc(t,e){return XA(xb,t,!0,e)||t}const YA=Symbol.for("v-ndc");function XA(t,e,n=!0,r=!1){const s=bt||mt;if(s){const i=s.type;if(t===xb){const a=k1(i,!1);if(a&&(a===e||a===dr(e)||a===ch(dr(e))))return i}const o=Oy(s[t]||i[t],e)||Oy(s.appContext[t],e);return!o&&r?i:o}}function Oy(t,e){return t&&(t[e]||t[dr(e)]||t[ch(dr(e))])}function ar(t,e,n,r){let s;const i=n&&n[r];if(oe(t)||ft(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function jp(t,e,n={},r,s){if(bt.isCE||bt.parent&&ka(bt.parent)&&bt.parent.isCE)return e!=="default"&&(n.name=e),j("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Z();const o=i&&Sb(i(n)),a=ds(Fe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Sb(t){return t.some(e=>yu(e)?!(e.type===xn||e.type===Fe&&!Sb(e.children)):!0)?t:null}const pf=t=>t?Fb(t)?vh(t)||t.proxy:pf(t.parent):null,Ca=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pf(t.parent),$root:t=>pf(t.root),$emit:t=>t.emit,$options:t=>qp(t),$forceUpdate:t=>t.f||(t.f=()=>Bp(t.update)),$nextTick:t=>t.n||(t.n=Vp.bind(t.proxy)),$watch:t=>MA.bind(t)}),Ed=(t,e)=>t!==Be&&!t.__isScriptSetup&&Ae(t,e),JA={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ed(r,e))return o[e]=1,r[e];if(s!==Be&&Ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Ae(l,e))return o[e]=3,i[e];if(n!==Be&&Ae(n,e))return o[e]=4,n[e];mf&&(o[e]=0)}}const u=Ca[e];let h,d;if(u)return e==="$attrs"&&sn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Be&&Ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ed(s,e)?(s[e]=n,!0):r!==Be&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Be&&Ae(t,o)||Ed(e,o)||(a=i[0])&&Ae(a,o)||Ae(r,o)||Ae(Ca,o)||Ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ly(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mf=!0;function ZA(t){const e=qp(t),n=t.proxy,r=t.ctx;mf=!1,e.beforeCreate&&My(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:g,deactivated:_,beforeDestroy:T,beforeUnmount:S,destroyed:A,unmounted:E,render:L,renderTracked:F,renderTriggered:Y,errorCaptured:O,serverPrefetch:V,expose:J,inheritAttrs:pe,components:z,directives:le,filters:Ve}=e;if(l&&e1(l,r,null),o)for(const ve in o){const be=o[ve];ye(be)&&(r[ve]=be.bind(n))}if(s){const ve=s.call(n,n);Me(ve)&&(t.data=$o(ve))}if(mf=!0,i)for(const ve in i){const be=i[ve],At=ye(be)?be.bind(n,n):ye(be.get)?be.get.bind(n,n):Fn,an=!ye(be)&&ye(be.set)?be.set.bind(n):Fn,Wt=wt({get:At,set:an});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:ct=>Wt.value=ct})}if(a)for(const ve in a)Ab(a[ve],r,n,ve);if(c){const ve=ye(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(be=>{ql(be,ve[be])})}u&&My(u,t,"c");function ce(ve,be){oe(be)?be.forEach(At=>ve(At.bind(n))):be&&ve(be.bind(n))}if(ce(qA,h),ce(Ss,d),ce(zA,f),ce(HA,m),ce(VA,g),ce(BA,_),ce(QA,O),ce(WA,F),ce(GA,Y),ce(Eb,S),ce(Tb,E),ce(KA,V),oe(J))if(J.length){const ve=t.exposed||(t.exposed={});J.forEach(be=>{Object.defineProperty(ve,be,{get:()=>n[be],set:At=>n[be]=At})})}else t.exposed||(t.exposed={});L&&t.render===Fn&&(t.render=L),pe!=null&&(t.inheritAttrs=pe),z&&(t.components=z),le&&(t.directives=le)}function e1(t,e,n=Fn){oe(t)&&(t=gf(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Tn(s.from||r,s.default,!0):i=Tn(s.from||r):i=Tn(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function My(t,e,n){En(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ab(t,e,n,r){const s=r.includes(".")?yb(n,r):()=>n[r];if(ft(t)){const i=e[t];ye(i)&&cs(s,i)}else if(ye(t))cs(s,t.bind(n));else if(Me(t))if(oe(t))t.forEach(i=>Ab(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&cs(s,i,t)}}function qp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>gu(c,l,o,!0)),gu(c,e,o)),Me(e)&&i.set(e,c),c}function gu(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&gu(t,i,n,!0),s&&s.forEach(o=>gu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=t1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const t1={data:Fy,props:Uy,emits:Uy,methods:wa,computed:wa,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:wa,directives:wa,watch:r1,provide:Fy,inject:n1};function Fy(t,e){return e?t?function(){return dt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function n1(t,e){return wa(gf(t),gf(e))}function gf(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qt(t,e){return t?[...new Set([].concat(t,e))]:e}function wa(t,e){return t?dt(Object.create(null),t,e):e}function Uy(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:dt(Object.create(null),Ly(t),Ly(e??{})):e}function r1(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=qt(t[r],e[r]);return n}function kb(){return{app:null,config:{isNativeTag:SS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let s1=0;function i1(t,e){return function(r,s=null){ye(r)||(r=dt({},r)),s!=null&&!Me(s)&&(s=null);const i=kb(),o=new Set;let a=!1;const c=i.app={_uid:s1++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:P1,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ye(l.install)?(o.add(l),l.install(c,...u)):ye(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=j(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,vh(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Za=c;try{return l()}finally{Za=null}}};return c}}let Za=null;function ql(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function Tn(t,e,n=!1){const r=mt||bt;if(r||Za){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Za._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}function o1(){return!!(mt||bt||Za)}function a1(t,e,n,r=!1){const s={},i={};du(i,yh,1),t.propsDefaults=Object.create(null),Cb(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:mA(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function c1(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(fh(t.emitsOptions,d))continue;const f=e[d];if(c)if(Ae(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const m=dr(d);s[m]=yf(c,a,m,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{Cb(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!Ae(e,h)&&((u=Ni(h))===h||!Ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=yf(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Ae(e,h))&&(delete i[h],l=!0)}l&&Sr(t,"set","$attrs")}function Cb(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Bl(c))continue;const l=e[c];let u;s&&Ae(s,u=dr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:fh(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Se(n),l=a||Be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=yf(s,c,h,l[h],t,!Ae(l,h))}}return o}function yf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(mo(s),r=l[n]=c.call(null,e),ci())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ni(n))&&(r=!0))}return r}function Rb(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ye(t)){const u=h=>{c=!0;const[d,f]=Rb(h,e,!0);dt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Me(t)&&r.set(t,no),no;if(oe(i))for(let u=0;u<i.length;u++){const h=dr(i[u]);$y(h)&&(o[h]=Be)}else if(i)for(const u in i){const h=dr(u);if($y(h)){const d=i[u],f=o[h]=oe(d)||ye(d)?{type:d}:dt({},d);if(f){const m=jy(Boolean,f.type),g=jy(String,f.type);f[0]=m>-1,f[1]=g<0||m<g,(m>-1||Ae(f,"default"))&&a.push(h)}}}const l=[o,a];return Me(t)&&r.set(t,l),l}function $y(t){return t[0]!=="$"}function Vy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function By(t,e){return Vy(t)===Vy(e)}function jy(t,e){return oe(e)?e.findIndex(n=>By(n,t)):ye(e)&&By(e,t)?0:-1}const Nb=t=>t[0]==="_"||t==="$stable",zp=t=>oe(t)?t.map(Wn):[Wn(t)],l1=(t,e,n)=>{if(e._n)return e;const r=Ue((...s)=>zp(e(...s)),n);return r._c=!1,r},Pb=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Nb(s))continue;const i=t[s];if(ye(i))e[s]=l1(s,i,r);else if(i!=null){const o=zp(i);e[s]=()=>o}}},Db=(t,e)=>{const n=zp(e);t.slots.default=()=>n},u1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Se(e),du(e,"_",n)):Pb(e,t.slots={})}else t.slots={},e&&Db(t,e);du(t.slots,yh,1)},h1=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(dt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Pb(e,s)),o=e}else e&&(Db(t,e),o={default:1});if(i)for(const a in s)!Nb(a)&&!(a in o)&&delete s[a]};function vf(t,e,n,r,s=!1){if(oe(t)){t.forEach((d,f)=>vf(d,e&&(oe(e)?e[f]:e),n,r,s));return}if(ka(r)&&!s)return;const i=r.shapeFlag&4?vh(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ft(l)?(u[l]=null,Ae(h,l)&&(h[l]=null)):it(l)&&(l.value=null)),ye(c))as(c,a,12,[o,u]);else{const d=ft(c),f=it(c);if(d||f){const m=()=>{if(t.f){const g=d?Ae(h,c)?h[c]:u[c]:c.value;s?oe(g)&&Cp(g,i):oe(g)?g.includes(i)||g.push(i):d?(u[c]=[i],Ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,Ae(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Qt(m,n)):m()}}}const Qt=LA;function d1(t){return f1(t)}function f1(t,e){const n=af();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Fn,insertStaticContent:m}=t,g=(y,v,w,x=null,C=null,N=null,W=!1,U=null,$=!!v.dynamicChildren)=>{if(y===v)return;y&&!qs(y,v)&&(x=k(y),ct(y,C,N,!0),y=null),v.patchFlag===-2&&($=!1,v.dynamicChildren=null);const{type:D,ref:se,shapeFlag:X}=v;switch(D){case gh:_(y,v,w,x);break;case xn:T(y,v,w,x);break;case zl:y==null&&S(v,w,x,W);break;case Fe:z(y,v,w,x,C,N,W,U,$);break;default:X&1?L(y,v,w,x,C,N,W,U,$):X&6?le(y,v,w,x,C,N,W,U,$):(X&64||X&128)&&D.process(y,v,w,x,C,N,W,U,$,B)}se!=null&&C&&vf(se,y&&y.ref,N,v||y,!v)},_=(y,v,w,x)=>{if(y==null)r(v.el=a(v.children),w,x);else{const C=v.el=y.el;v.children!==y.children&&l(C,v.children)}},T=(y,v,w,x)=>{y==null?r(v.el=c(v.children||""),w,x):v.el=y.el},S=(y,v,w,x)=>{[y.el,y.anchor]=m(y.children,v,w,x,y.el,y.anchor)},A=({el:y,anchor:v},w,x)=>{let C;for(;y&&y!==v;)C=d(y),r(y,w,x),y=C;r(v,w,x)},E=({el:y,anchor:v})=>{let w;for(;y&&y!==v;)w=d(y),s(y),y=w;s(v)},L=(y,v,w,x,C,N,W,U,$)=>{W=W||v.type==="svg",y==null?F(v,w,x,C,N,W,U,$):V(y,v,C,N,W,U,$)},F=(y,v,w,x,C,N,W,U)=>{let $,D;const{type:se,props:X,shapeFlag:re,transition:ue,dirs:_e}=y;if($=y.el=o(y.type,N,X&&X.is,X),re&8?u($,y.children):re&16&&O(y.children,$,null,x,C,N&&se!=="foreignObject",W,U),_e&&Ls(y,null,x,"created"),Y($,y,y.scopeId,W,x),X){for(const Re in X)Re!=="value"&&!Bl(Re)&&i($,Re,null,X[Re],N,y.children,x,C,Ze);"value"in X&&i($,"value",null,X.value),(D=X.onVnodeBeforeMount)&&Kn(D,x,y)}_e&&Ls(y,null,x,"beforeMount");const Ne=(!C||C&&!C.pendingBranch)&&ue&&!ue.persisted;Ne&&ue.beforeEnter($),r($,v,w),((D=X&&X.onVnodeMounted)||Ne||_e)&&Qt(()=>{D&&Kn(D,x,y),Ne&&ue.enter($),_e&&Ls(y,null,x,"mounted")},C)},Y=(y,v,w,x,C)=>{if(w&&f(y,w),x)for(let N=0;N<x.length;N++)f(y,x[N]);if(C){let N=C.subTree;if(v===N){const W=C.vnode;Y(y,W,W.scopeId,W.slotScopeIds,C.parent)}}},O=(y,v,w,x,C,N,W,U,$=0)=>{for(let D=$;D<y.length;D++){const se=y[D]=U?Gr(y[D]):Wn(y[D]);g(null,se,v,w,x,C,N,W,U)}},V=(y,v,w,x,C,N,W)=>{const U=v.el=y.el;let{patchFlag:$,dynamicChildren:D,dirs:se}=v;$|=y.patchFlag&16;const X=y.props||Be,re=v.props||Be;let ue;w&&Ms(w,!1),(ue=re.onVnodeBeforeUpdate)&&Kn(ue,w,v,y),se&&Ls(v,y,w,"beforeUpdate"),w&&Ms(w,!0);const _e=C&&v.type!=="foreignObject";if(D?J(y.dynamicChildren,D,U,w,x,_e,N):W||be(y,v,U,null,w,x,_e,N,!1),$>0){if($&16)pe(U,v,X,re,w,x,C);else if($&2&&X.class!==re.class&&i(U,"class",null,re.class,C),$&4&&i(U,"style",X.style,re.style,C),$&8){const Ne=v.dynamicProps;for(let Re=0;Re<Ne.length;Re++){const lt=Ne[Re],Pn=X[lt],Vi=re[lt];(Vi!==Pn||lt==="value")&&i(U,lt,Pn,Vi,C,y.children,w,x,Ze)}}$&1&&y.children!==v.children&&u(U,v.children)}else!W&&D==null&&pe(U,v,X,re,w,x,C);((ue=re.onVnodeUpdated)||se)&&Qt(()=>{ue&&Kn(ue,w,v,y),se&&Ls(v,y,w,"updated")},x)},J=(y,v,w,x,C,N,W)=>{for(let U=0;U<v.length;U++){const $=y[U],D=v[U],se=$.el&&($.type===Fe||!qs($,D)||$.shapeFlag&70)?h($.el):w;g($,D,se,null,x,C,N,W,!0)}},pe=(y,v,w,x,C,N,W)=>{if(w!==x){if(w!==Be)for(const U in w)!Bl(U)&&!(U in x)&&i(y,U,w[U],null,W,v.children,C,N,Ze);for(const U in x){if(Bl(U))continue;const $=x[U],D=w[U];$!==D&&U!=="value"&&i(y,U,D,$,W,v.children,C,N,Ze)}"value"in x&&i(y,"value",w.value,x.value)}},z=(y,v,w,x,C,N,W,U,$)=>{const D=v.el=y?y.el:a(""),se=v.anchor=y?y.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:ue}=v;ue&&(U=U?U.concat(ue):ue),y==null?(r(D,w,x),r(se,w,x),O(v.children,w,se,C,N,W,U,$)):X>0&&X&64&&re&&y.dynamicChildren?(J(y.dynamicChildren,re,w,C,N,W,U),(v.key!=null||C&&v===C.subTree)&&Ob(y,v,!0)):be(y,v,w,se,C,N,W,U,$)},le=(y,v,w,x,C,N,W,U,$)=>{v.slotScopeIds=U,y==null?v.shapeFlag&512?C.ctx.activate(v,w,x,W,$):Ve(v,w,x,C,N,W,$):Qe(y,v,$)},Ve=(y,v,w,x,C,N,W)=>{const U=y.component=I1(y,x,C);if(ph(y)&&(U.ctx.renderer=B),T1(U),U.asyncDep){if(C&&C.registerDep(U,ce),!y.el){const $=U.subTree=j(xn);T(null,$,v,w)}return}ce(U,y,v,w,C,N,W)},Qe=(y,v,w)=>{const x=v.component=y.component;if(PA(y,v,w))if(x.asyncDep&&!x.asyncResolved){ve(x,v,w);return}else x.next=v,SA(x.update),x.update();else v.el=y.el,x.vnode=v},ce=(y,v,w,x,C,N,W)=>{const U=()=>{if(y.isMounted){let{next:se,bu:X,u:re,parent:ue,vnode:_e}=y,Ne=se,Re;Ms(y,!1),se?(se.el=_e.el,ve(y,se,W)):se=_e,X&&jl(X),(Re=se.props&&se.props.onVnodeBeforeUpdate)&&Kn(Re,ue,se,_e),Ms(y,!0);const lt=bd(y),Pn=y.subTree;y.subTree=lt,g(Pn,lt,h(Pn.el),k(Pn),y,C,N),se.el=lt.el,Ne===null&&DA(y,lt.el),re&&Qt(re,C),(Re=se.props&&se.props.onVnodeUpdated)&&Qt(()=>Kn(Re,ue,se,_e),C)}else{let se;const{el:X,props:re}=v,{bm:ue,m:_e,parent:Ne}=y,Re=ka(v);if(Ms(y,!1),ue&&jl(ue),!Re&&(se=re&&re.onVnodeBeforeMount)&&Kn(se,Ne,v),Ms(y,!0),X&&Ie){const lt=()=>{y.subTree=bd(y),Ie(X,y.subTree,y,C,null)};Re?v.type.__asyncLoader().then(()=>!y.isUnmounted&&lt()):lt()}else{const lt=y.subTree=bd(y);g(null,lt,w,x,y,C,N),v.el=lt.el}if(_e&&Qt(_e,C),!Re&&(se=re&&re.onVnodeMounted)){const lt=v;Qt(()=>Kn(se,Ne,lt),C)}(v.shapeFlag&256||Ne&&ka(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&y.a&&Qt(y.a,C),y.isMounted=!0,v=w=x=null}},$=y.effect=new Dp(U,()=>Bp(D),y.scope),D=y.update=()=>$.run();D.id=y.uid,Ms(y,!0),D()},ve=(y,v,w)=>{v.component=y;const x=y.vnode.props;y.vnode=v,y.next=null,c1(y,v.props,x,w),h1(y,v.children,w),Fo(),Ny(),Uo()},be=(y,v,w,x,C,N,W,U,$=!1)=>{const D=y&&y.children,se=y?y.shapeFlag:0,X=v.children,{patchFlag:re,shapeFlag:ue}=v;if(re>0){if(re&128){an(D,X,w,x,C,N,W,U,$);return}else if(re&256){At(D,X,w,x,C,N,W,U,$);return}}ue&8?(se&16&&Ze(D,C,N),X!==D&&u(w,X)):se&16?ue&16?an(D,X,w,x,C,N,W,U,$):Ze(D,C,N,!0):(se&8&&u(w,""),ue&16&&O(X,w,x,C,N,W,U,$))},At=(y,v,w,x,C,N,W,U,$)=>{y=y||no,v=v||no;const D=y.length,se=v.length,X=Math.min(D,se);let re;for(re=0;re<X;re++){const ue=v[re]=$?Gr(v[re]):Wn(v[re]);g(y[re],ue,w,null,C,N,W,U,$)}D>se?Ze(y,C,N,!0,!1,X):O(v,w,x,C,N,W,U,$,X)},an=(y,v,w,x,C,N,W,U,$)=>{let D=0;const se=v.length;let X=y.length-1,re=se-1;for(;D<=X&&D<=re;){const ue=y[D],_e=v[D]=$?Gr(v[D]):Wn(v[D]);if(qs(ue,_e))g(ue,_e,w,null,C,N,W,U,$);else break;D++}for(;D<=X&&D<=re;){const ue=y[X],_e=v[re]=$?Gr(v[re]):Wn(v[re]);if(qs(ue,_e))g(ue,_e,w,null,C,N,W,U,$);else break;X--,re--}if(D>X){if(D<=re){const ue=re+1,_e=ue<se?v[ue].el:x;for(;D<=re;)g(null,v[D]=$?Gr(v[D]):Wn(v[D]),w,_e,C,N,W,U,$),D++}}else if(D>re)for(;D<=X;)ct(y[D],C,N,!0),D++;else{const ue=D,_e=D,Ne=new Map;for(D=_e;D<=re;D++){const un=v[D]=$?Gr(v[D]):Wn(v[D]);un.key!=null&&Ne.set(un.key,D)}let Re,lt=0;const Pn=re-_e+1;let Vi=!1,_y=0;const na=new Array(Pn);for(D=0;D<Pn;D++)na[D]=0;for(D=ue;D<=X;D++){const un=y[D];if(lt>=Pn){ct(un,C,N,!0);continue}let Hn;if(un.key!=null)Hn=Ne.get(un.key);else for(Re=_e;Re<=re;Re++)if(na[Re-_e]===0&&qs(un,v[Re])){Hn=Re;break}Hn===void 0?ct(un,C,N,!0):(na[Hn-_e]=D+1,Hn>=_y?_y=Hn:Vi=!0,g(un,v[Hn],w,null,C,N,W,U,$),lt++)}const wy=Vi?p1(na):no;for(Re=wy.length-1,D=Pn-1;D>=0;D--){const un=_e+D,Hn=v[un],by=un+1<se?v[un+1].el:x;na[D]===0?g(null,Hn,w,by,C,N,W,U,$):Vi&&(Re<0||D!==wy[Re]?Wt(Hn,w,by,2):Re--)}}},Wt=(y,v,w,x,C=null)=>{const{el:N,type:W,transition:U,children:$,shapeFlag:D}=y;if(D&6){Wt(y.component.subTree,v,w,x);return}if(D&128){y.suspense.move(v,w,x);return}if(D&64){W.move(y,v,w,B);return}if(W===Fe){r(N,v,w);for(let X=0;X<$.length;X++)Wt($[X],v,w,x);r(y.anchor,v,w);return}if(W===zl){A(y,v,w);return}if(x!==2&&D&1&&U)if(x===0)U.beforeEnter(N),r(N,v,w),Qt(()=>U.enter(N),C);else{const{leave:X,delayLeave:re,afterLeave:ue}=U,_e=()=>r(N,v,w),Ne=()=>{X(N,()=>{_e(),ue&&ue()})};re?re(N,_e,Ne):Ne()}else r(N,v,w)},ct=(y,v,w,x=!1,C=!1)=>{const{type:N,props:W,ref:U,children:$,dynamicChildren:D,shapeFlag:se,patchFlag:X,dirs:re}=y;if(U!=null&&vf(U,null,w,y,!0),se&256){v.ctx.deactivate(y);return}const ue=se&1&&re,_e=!ka(y);let Ne;if(_e&&(Ne=W&&W.onVnodeBeforeUnmount)&&Kn(Ne,v,y),se&6)ln(y.component,w,x);else{if(se&128){y.suspense.unmount(w,x);return}ue&&Ls(y,null,v,"beforeUnmount"),se&64?y.type.remove(y,v,w,C,B,x):D&&(N!==Fe||X>0&&X&64)?Ze(D,v,w,!1,!0):(N===Fe&&X&384||!C&&se&16)&&Ze($,v,w),x&&Nn(y)}(_e&&(Ne=W&&W.onVnodeUnmounted)||ue)&&Qt(()=>{Ne&&Kn(Ne,v,y),ue&&Ls(y,null,v,"unmounted")},w)},Nn=y=>{const{type:v,el:w,anchor:x,transition:C}=y;if(v===Fe){cn(w,x);return}if(v===zl){E(y);return}const N=()=>{s(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(y.shapeFlag&1&&C&&!C.persisted){const{leave:W,delayLeave:U}=C,$=()=>W(w,N);U?U(y.el,N,$):$()}else N()},cn=(y,v)=>{let w;for(;y!==v;)w=d(y),s(y),y=w;s(v)},ln=(y,v,w)=>{const{bum:x,scope:C,update:N,subTree:W,um:U}=y;x&&jl(x),C.stop(),N&&(N.active=!1,ct(W,y,v,w)),U&&Qt(U,v),Qt(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Ze=(y,v,w,x=!1,C=!1,N=0)=>{for(let W=N;W<y.length;W++)ct(y[W],v,w,x,C)},k=y=>y.shapeFlag&6?k(y.component.subTree):y.shapeFlag&128?y.suspense.next():d(y.anchor||y.el),G=(y,v,w)=>{y==null?v._vnode&&ct(v._vnode,null,null,!0):g(v._vnode||null,y,v,null,null,null,w),Ny(),db(),v._vnode=y},B={p:g,um:ct,m:Wt,r:Nn,mt:Ve,mc:O,pc:be,pbc:J,n:k,o:t};let ne,Ie;return e&&([ne,Ie]=e(B)),{render:G,hydrate:ne,createApp:i1(G,ne)}}function Ms({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ob(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Gr(s[i]),a.el=o.el),n||Ob(o,a)),a.type===gh&&(a.el=o.el)}}function p1(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const m1=t=>t.__isTeleport,Fe=Symbol.for("v-fgt"),gh=Symbol.for("v-txt"),xn=Symbol.for("v-cmt"),zl=Symbol.for("v-stc"),Ra=[];let On=null;function Z(t=!1){Ra.push(On=t?null:[])}function g1(){Ra.pop(),On=Ra[Ra.length-1]||null}let ec=1;function qy(t){ec+=t}function Lb(t){return t.dynamicChildren=ec>0?On||no:null,g1(),ec>0&&On&&On.push(t),t}function ae(t,e,n,r,s,i){return Lb(p(t,e,n,r,s,i,!0))}function ds(t,e,n,r,s){return Lb(j(t,e,n,r,s,!0))}function yu(t){return t?t.__v_isVNode===!0:!1}function qs(t,e){return t.type===e.type&&t.key===e.key}const yh="__vInternal",Mb=({key:t})=>t??null,Hl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||it(t)||ye(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mb(e),ref:e&&Hl(e),scopeId:mb,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return a?(Kp(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ft(n)?8:16),ec>0&&!o&&On&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&On.push(c),c}const j=y1;function y1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===YA)&&(t=xn),yu(t)){const a=fs(t,e,!0);return n&&Kp(a,n),ec>0&&!i&&On&&(a.shapeFlag&6?On[On.indexOf(t)]=a:On.push(a)),a.patchFlag|=-2,a}if(C1(t)&&(t=t.__vccOpts),e){e=v1(e);let{class:a,style:c}=e;a&&!ft(a)&&(e.class=Un(a)),Me(c)&&(ib(c)&&!oe(c)&&(c=dt({},c)),e.style=Np(c))}const o=ft(t)?1:OA(t)?128:m1(t)?64:Me(t)?4:ye(t)?2:0;return p(t,e,n,r,s,o,i,!0)}function v1(t){return t?ib(t)||yh in t?dt({},t):t:null}function fs(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?_1(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Mb(a),ref:e&&e.ref?n&&s?oe(s)?s.concat(Hl(e)):[s,Hl(e)]:Hl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fs(t.ssContent),ssFallback:t.ssFallback&&fs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ke(t=" ",e=0){return j(gh,null,t,e)}function Hp(t,e){const n=j(zl,null,t);return n.staticCount=e,n}function cr(t="",e=!1){return e?(Z(),ds(xn,null,t)):j(xn,null,t)}function Wn(t){return t==null||typeof t=="boolean"?j(xn):oe(t)?j(Fe,null,t.slice()):typeof t=="object"?Gr(t):j(gh,null,String(t))}function Gr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fs(t)}function Kp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Kp(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(yh in e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[ke(e)]):n=8);t.children=e,t.shapeFlag|=n}function _1(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Un([e.class,r.class]));else if(s==="style")e.style=Np([e.style,r.style]);else if(ih(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kn(t,e,n,r=null){En(t,e,7,[n,r])}const w1=kb();let b1=0;function I1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||w1,i={uid:b1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rb(r,s),emitsOptions:pb(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=CA.bind(null,i),t.ce&&t.ce(i),i}let mt=null;const E1=()=>mt||bt;let Gp,Bi,zy="__VUE_INSTANCE_SETTERS__";(Bi=af()[zy])||(Bi=af()[zy]=[]),Bi.push(t=>mt=t),Gp=t=>{Bi.length>1?Bi.forEach(e=>e(t)):Bi[0](t)};const mo=t=>{Gp(t),t.scope.on()},ci=()=>{mt&&mt.scope.off(),Gp(null)};function Fb(t){return t.vnode.shapeFlag&4}let tc=!1;function T1(t,e=!1){tc=e;const{props:n,children:r}=t.vnode,s=Fb(t);a1(t,n,s,e),u1(t,r);const i=s?x1(t,e):void 0;return tc=!1,i}function x1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hh(new Proxy(t.ctx,JA));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?A1(t):null;mo(t),Fo();const i=as(r,t,0,[t.props,s]);if(Uo(),ci(),$w(i)){if(i.then(ci,ci),e)return i.then(o=>{Hy(t,o,e)}).catch(o=>{dh(o,t,0)});t.asyncDep=i}else Hy(t,i,e)}else Ub(t,e)}function Hy(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=lb(e)),Ub(t,n)}let Ky;function Ub(t,e,n){const r=t.type;if(!t.render){if(!e&&Ky&&!r.render){const s=r.template||qp(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=dt(dt({isCustomElement:i,delimiters:a},o),c);r.render=Ky(s,l)}}t.render=r.render||Fn}mo(t),Fo(),ZA(t),Uo(),ci()}function S1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return sn(t,"get","$attrs"),e[n]}}))}function A1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return S1(t)},slots:t.slots,emit:t.emit,expose:e}}function vh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lb(hh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ca)return Ca[n](t)},has(e,n){return n in e||n in Ca}}))}function k1(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function C1(t){return ye(t)&&"__vccOpts"in t}const wt=(t,e)=>EA(t,e,tc);function Wp(t,e,n){const r=arguments.length;return r===2?Me(e)&&!oe(e)?yu(e)?j(t,null,[e]):j(t,e):j(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yu(n)&&(n=[n]),j(t,e,n))}const R1=Symbol.for("v-scx"),N1=()=>Tn(R1),P1="3.3.4",D1="http://www.w3.org/2000/svg",zs=typeof document<"u"?document:null,Gy=zs&&zs.createElement("template"),O1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?zs.createElementNS(D1,t):zs.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>zs.createTextNode(t),createComment:t=>zs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gy.innerHTML=r?`<svg>${t}</svg>`:t;const a=Gy.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function L1(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function M1(t,e,n){const r=t.style,s=ft(n);if(n&&!s){if(e&&!ft(e))for(const i in e)n[i]==null&&_f(r,i,"");for(const i in n)_f(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Wy=/\s*!important$/;function _f(t,e,n){if(oe(n))n.forEach(r=>_f(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=F1(t,e);Wy.test(n)?t.setProperty(Ni(r),n.replace(Wy,""),"important"):t[r]=n}}const Qy=["Webkit","Moz","ms"],Td={};function F1(t,e){const n=Td[e];if(n)return n;let r=dr(e);if(r!=="filter"&&r in t)return Td[e]=r;r=ch(r);for(let s=0;s<Qy.length;s++){const i=Qy[s]+r;if(i in t)return Td[e]=i}return e}const Yy="http://www.w3.org/1999/xlink";function U1(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yy,e.slice(6,e.length)):t.setAttributeNS(Yy,e,n);else{const i=US(e);n==null||i&&!jw(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function $1(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jw(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Hs(t,e,n,r){t.addEventListener(e,n,r)}function V1(t,e,n,r){t.removeEventListener(e,n,r)}function B1(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=j1(e);if(r){const l=i[e]=H1(r,s);Hs(t,a,l,c)}else o&&(V1(t,a,o,c),i[e]=void 0)}}const Xy=/(?:Once|Passive|Capture)$/;function j1(t){let e;if(Xy.test(t)){e={};let r;for(;r=t.match(Xy);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ni(t.slice(2)),e]}let xd=0;const q1=Promise.resolve(),z1=()=>xd||(q1.then(()=>xd=0),xd=Date.now());function H1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(K1(r,n.value),e,5,[r])};return n.value=t,n.attached=z1(),n}function K1(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jy=/^on[a-z]/,G1=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?L1(t,r,s):e==="style"?M1(t,n,r):ih(e)?kp(e)||B1(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W1(t,e,r,s))?$1(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),U1(t,e,r,s))};function W1(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Jy.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Jy.test(e)&&ft(n)?!1:e in t}const Vr="transition",ra="animation",Qp=(t,{slots:e})=>Wp($A,Q1(t),e);Qp.displayName="Transition";const $b={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Qp.props=dt({},vb,$b);const Fs=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zy=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function Q1(t){const e={};for(const z in t)z in $b||(e[z]=t[z]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=Y1(s),g=m&&m[0],_=m&&m[1],{onBeforeEnter:T,onEnter:S,onEnterCancelled:A,onLeave:E,onLeaveCancelled:L,onBeforeAppear:F=T,onAppear:Y=S,onAppearCancelled:O=A}=e,V=(z,le,Ve)=>{Us(z,le?u:a),Us(z,le?l:o),Ve&&Ve()},J=(z,le)=>{z._isLeaving=!1,Us(z,h),Us(z,f),Us(z,d),le&&le()},pe=z=>(le,Ve)=>{const Qe=z?Y:S,ce=()=>V(le,z,Ve);Fs(Qe,[le,ce]),ev(()=>{Us(le,z?c:i),Br(le,z?u:a),Zy(Qe)||tv(le,r,g,ce)})};return dt(e,{onBeforeEnter(z){Fs(T,[z]),Br(z,i),Br(z,o)},onBeforeAppear(z){Fs(F,[z]),Br(z,c),Br(z,l)},onEnter:pe(!1),onAppear:pe(!0),onLeave(z,le){z._isLeaving=!0;const Ve=()=>J(z,le);Br(z,h),Z1(),Br(z,d),ev(()=>{z._isLeaving&&(Us(z,h),Br(z,f),Zy(E)||tv(z,r,_,Ve))}),Fs(E,[z,Ve])},onEnterCancelled(z){V(z,!1),Fs(A,[z])},onAppearCancelled(z){V(z,!0),Fs(O,[z])},onLeaveCancelled(z){J(z),Fs(L,[z])}})}function Y1(t){if(t==null)return null;if(Me(t))return[Sd(t.enter),Sd(t.leave)];{const e=Sd(t);return[e,e]}}function Sd(t){return PS(t)}function Br(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Us(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ev(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let X1=0;function tv(t,e,n,r){const s=t._endId=++X1,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=J1(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=f=>{f.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function J1(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),s=r(`${Vr}Delay`),i=r(`${Vr}Duration`),o=nv(s,i),a=r(`${ra}Delay`),c=r(`${ra}Duration`),l=nv(a,c);let u=null,h=0,d=0;e===Vr?o>0&&(u=Vr,h=o,d=i.length):e===ra?l>0&&(u=ra,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Vr:ra:null,d=u?u===Vr?i.length:c.length:0);const f=u===Vr&&/\b(transform|all)(,|$)/.test(r(`${Vr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function nv(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>rv(n)+rv(t[r])))}function rv(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Z1(){return document.body.offsetHeight}const vu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>jl(e,n):e};function ek(t){t.target.composing=!0}function sv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=vu(s);const i=r||s.props&&s.props.type==="number";Hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=of(a)),t._assign(a)}),n&&Hs(t,"change",()=>{t.value=t.value.trim()}),e||(Hs(t,"compositionstart",ek),Hs(t,"compositionend",sv),Hs(t,"change",sv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=vu(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&of(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Vb={deep:!0,created(t,e,n){t._assign=vu(n),Hs(t,"change",()=>{const r=t._modelValue,s=tk(t),i=t.checked,o=t._assign;if(oe(r)){const a=qw(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(oh(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Bb(t,i))})},mounted:iv,beforeUpdate(t,e,n){t._assign=vu(n),iv(t,e,n)}};function iv(t,{value:e,oldValue:n},r){t._modelValue=e,oe(e)?t.checked=qw(e,r.props.value)>-1:oh(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=lh(e,Bb(t,!0)))}function tk(t){return"_value"in t?t._value:t.value}function Bb(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nk=["ctrl","shift","alt","meta"],rk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nk.some(n=>t[`${n}Key`]&&!e.includes(n))},$n=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=rk[e[s]];if(i&&i(n,e))return}return t(n,...r)},sk={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ik=(t,e)=>n=>{if(!("key"in n))return;const r=Ni(n.key);if(e.some(s=>s===r||sk[s]===r))return t(n)},ls={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):sa(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),sa(t,!0),r.enter(t)):r.leave(t,()=>{sa(t,!1)}):sa(t,e))},beforeUnmount(t,{value:e}){sa(t,e)}};function sa(t,e){t.style.display=e?t._vod:"none"}const ok=dt({patchProp:G1},O1);let ov;function ak(){return ov||(ov=d1(ok))}const ck=(...t)=>{const e=ak().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lk(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function lk(t){return ft(t)?document.querySelector(t):t}var uk=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let jb;const _h=t=>jb=t,qb=Symbol();function bf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Na;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Na||(Na={}));function hk(){const t=Kw(!0),e=t.run(()=>de({}));let n=[],r=[];const s=hh({install(i){_h(s),s._a=i,i.provide(qb,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!uk?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const zb=()=>{};function av(t,e,n,r=zb){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Gw()&&BS(s),s}function ji(t,...e){t.slice().forEach(n=>{n(...e)})}const dk=t=>t();function If(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];bf(s)&&bf(r)&&t.hasOwnProperty(n)&&!it(r)&&!os(r)?t[n]=If(s,r):t[n]=r}return t}const fk=Symbol();function pk(t){return!bf(t)||!t.hasOwnProperty(fk)}const{assign:Kr}=Object;function mk(t){return!!(it(t)&&t.effect)}function gk(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=_A(n.state.value[t]);return Kr(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=hh(wt(()=>{_h(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=Hb(t,l,e,n,r,!0),c}function Hb(t,e,n={},r,s,i){let o;const a=Kr({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const m=r.state.value[t];!i&&!m&&(r.state.value[t]={}),de({});let g;function _(O){let V;l=u=!1,typeof O=="function"?(O(r.state.value[t]),V={type:Na.patchFunction,storeId:t,events:f}):(If(r.state.value[t],O),V={type:Na.patchObject,payload:O,storeId:t,events:f});const J=g=Symbol();Vp().then(()=>{g===J&&(l=!0)}),u=!0,ji(h,V,r.state.value[t])}const T=i?function(){const{state:V}=n,J=V?V():{};this.$patch(pe=>{Kr(pe,J)})}:zb;function S(){o.stop(),h=[],d=[],r._s.delete(t)}function A(O,V){return function(){_h(r);const J=Array.from(arguments),pe=[],z=[];function le(ce){pe.push(ce)}function Ve(ce){z.push(ce)}ji(d,{args:J,name:O,store:L,after:le,onError:Ve});let Qe;try{Qe=V.apply(this&&this.$id===t?this:L,J)}catch(ce){throw ji(z,ce),ce}return Qe instanceof Promise?Qe.then(ce=>(ji(pe,ce),ce)).catch(ce=>(ji(z,ce),Promise.reject(ce))):(ji(pe,Qe),Qe)}}const E={_p:r,$id:t,$onAction:av.bind(null,d),$patch:_,$reset:T,$subscribe(O,V={}){const J=av(h,O,V.detached,()=>pe()),pe=o.run(()=>cs(()=>r.state.value[t],z=>{(V.flush==="sync"?u:l)&&O({storeId:t,type:Na.direct,events:f},z)},Kr({},c,V)));return J},$dispose:S},L=$o(E);r._s.set(t,L);const F=r._a&&r._a.runWithContext||dk,Y=r._e.run(()=>(o=Kw(),F(()=>o.run(e))));for(const O in Y){const V=Y[O];if(it(V)&&!mk(V)||os(V))i||(m&&pk(V)&&(it(V)?V.value=m[O]:If(V,m[O])),r.state.value[t][O]=V);else if(typeof V=="function"){const J=A(O,V);Y[O]=J,a.actions[O]=V}}return Kr(L,Y),Kr(Se(L),Y),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:O=>{_(V=>{Kr(V,O)})}}),r._p.forEach(O=>{Kr(L,o.run(()=>O({store:L,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(L.$state,m),l=!0,u=!0,L}function yk(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=o1();return a=a||(l?Tn(qb,null):null),a&&_h(a),a=jb,a._s.has(r)||(i?Hb(r,e,s,a):gk(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Wi=typeof window<"u";function vk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Ad(t,e){const n={};for(const r in e){const s=e[r];n[r]=Vn(s)?s.map(t):t(s)}return n}const Pa=()=>{},Vn=Array.isArray,_k=/\/$/,wk=t=>t.replace(_k,"");function kd(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Tk(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function bk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cv(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ik(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&go(e.matched[r],n.matched[s])&&Kb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function go(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ek(t[n],e[n]))return!1;return!0}function Ek(t,e){return Vn(t)?lv(t,e):Vn(e)?lv(e,t):t===e}function lv(t,e){return Vn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Tk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var nc;(function(t){t.pop="pop",t.push="push"})(nc||(nc={}));var Da;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Da||(Da={}));function xk(t){if(!t)if(Wi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wk(t)}const Sk=/^[^#]+#/;function Ak(t,e){return t.replace(Sk,"#")+e}function kk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wh=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ck(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uv(t,e){return(history.state?history.state.position-e:-1)+t}const Ef=new Map;function Rk(t,e){Ef.set(t,e)}function Nk(t){const e=Ef.get(t);return Ef.delete(t),e}let Pk=()=>location.protocol+"//"+location.host;function Gb(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),cv(c,"")}return cv(n,t)+r+s}function Dk(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=Gb(t,location),m=n.value,g=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}_=g?d.position-g.position:0}else r(f);s.forEach(T=>{T(n.value,m,{delta:_,type:nc.pop,direction:_?_>0?Da.forward:Da.back:Da.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Pe({},d.state,{scroll:wh()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function hv(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wh():null}}function Ok(t){const{history:e,location:n}=window,r={value:Gb(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Pk()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Pe({},e.state,hv(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Pe({},s.value,e.state,{forward:c,scroll:wh()});i(u.current,u,!0);const h=Pe({},hv(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Lk(t){t=xk(t);const e=Ok(t),n=Dk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:Ak.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Mk(t){return typeof t=="string"||t&&typeof t=="object"}function Wb(t){return typeof t=="string"||typeof t=="symbol"}const jr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qb=Symbol("");var dv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dv||(dv={}));function yo(t,e){return Pe(new Error,{type:t,[Qb]:!0},e)}function yr(t,e){return t instanceof Error&&Qb in t&&(e==null||!!(t.type&e))}const fv="[^/]+?",Fk={sensitive:!1,strict:!1,start:!0,end:!0},Uk=/[.+*?^${}()[\]/\\]/g;function $k(t,e){const n=Pe({},Fk,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Uk,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:g,optional:_,regexp:T}=d;i.push({name:m,repeatable:g,optional:_});const S=T||fv;if(S!==fv){f+=10;try{new RegExp(`(${S})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+E.message)}}let A=g?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(A=_&&l.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),s+=A,f+=20,_&&(f+=-8),g&&(f+=-20),S===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=i[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:g,optional:_}=f,T=m in l?l[m]:"";if(Vn(T)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=Vn(T)?T.join("/"):T;if(!S)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=S}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Vk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Bk(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Vk(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pv(r))return 1;if(pv(s))return-1}return s.length-r.length}function pv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jk={type:0,value:""},qk=/[a-zA-Z0-9_]/;function zk(t){if(!t)return[[]];if(t==="/")return[[jk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:qk.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Hk(t,e,n){const r=$k(zk(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kk(t,e){const n=[],r=new Map;e=yv({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,m=Gk(u);m.aliasOf=d&&d.record;const g=yv(e,u),_=[m];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)_.push(Pe({},m,{components:d?d.record.components:m.components,path:E,aliasOf:d?d.record:m}))}let T,S;for(const A of _){const{path:E}=A;if(h&&E[0]!=="/"){const L=h.record.path,F=L[L.length-1]==="/"?"":"/";A.path=h.record.path+(E&&F+E)}if(T=Hk(A,h,g),d?d.alias.push(T):(S=S||T,S!==T&&S.alias.push(T),f&&u.name&&!gv(T)&&o(u.name)),m.children){const L=m.children;for(let F=0;F<L.length;F++)i(L[F],T,d&&d.children[F])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return S?()=>{o(S)}:Pa}function o(u){if(Wb(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Bk(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Yb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gv(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},m,g;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw yo(1,{location:u});g=d.record.name,f=Pe(mv(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&mv(u.params,d.keys.map(S=>S.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(S=>S.re.test(m)),d&&(f=d.parse(m),g=d.record.name);else{if(d=h.name?r.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw yo(1,{location:u,currentLocation:h});g=d.record.name,f=Pe({},h.params,u.params),m=d.stringify(f)}const _=[];let T=d;for(;T;)_.unshift(T.record),T=T.parent;return{name:g,path:m,params:f,matched:_,meta:Qk(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function mv(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Gk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Wk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Wk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function gv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qk(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function yv(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Yb(t,e){return e.children.some(n=>n===t||Yb(t,n))}const Xb=/#/g,Yk=/&/g,Xk=/\//g,Jk=/=/g,Zk=/\?/g,Jb=/\+/g,eC=/%5B/g,tC=/%5D/g,Zb=/%5E/g,nC=/%60/g,e0=/%7B/g,rC=/%7C/g,t0=/%7D/g,sC=/%20/g;function Yp(t){return encodeURI(""+t).replace(rC,"|").replace(eC,"[").replace(tC,"]")}function iC(t){return Yp(t).replace(e0,"{").replace(t0,"}").replace(Zb,"^")}function Tf(t){return Yp(t).replace(Jb,"%2B").replace(sC,"+").replace(Xb,"%23").replace(Yk,"%26").replace(nC,"`").replace(e0,"{").replace(t0,"}").replace(Zb,"^")}function oC(t){return Tf(t).replace(Jk,"%3D")}function aC(t){return Yp(t).replace(Xb,"%23").replace(Zk,"%3F")}function cC(t){return t==null?"":aC(t).replace(Xk,"%2F")}function _u(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function lC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jb," "),o=i.indexOf("="),a=_u(o<0?i:i.slice(0,o)),c=o<0?null:_u(i.slice(o+1));if(a in e){let l=e[a];Vn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function vv(t){let e="";for(let n in t){const r=t[n];if(n=oC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vn(r)?r.map(i=>i&&Tf(i)):[r&&Tf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function uC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const hC=Symbol(""),_v=Symbol(""),bh=Symbol(""),Xp=Symbol(""),xf=Symbol("");function ia(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Wr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(yo(4,{from:n,to:e})):h instanceof Error?a(h):Mk(h)?a(yo(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Cd(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(dC(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Wr(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=vk(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Wr(d,n,r,i,o)()}))}}return s}function dC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wv(t){const e=Tn(bh),n=Tn(Xp),r=wt(()=>e.resolve(he(t.to))),s=wt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(go.bind(null,u));if(d>-1)return d;const f=bv(c[l-2]);return l>1&&bv(u)===f&&h[h.length-1].path!==f?h.findIndex(go.bind(null,c[l-2])):d}),i=wt(()=>s.value>-1&&mC(n.params,r.value.params)),o=wt(()=>s.value>-1&&s.value===n.matched.length-1&&Kb(n.params,r.value.params));function a(c={}){return pC(c)?e[he(t.replace)?"replace":"push"](he(t.to)).catch(Pa):Promise.resolve()}return{route:r,href:wt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const fC=bb({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wv,setup(t,{slots:e}){const n=$o(wv(t)),{options:r}=Tn(bh),s=wt(()=>({[Iv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Iv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Wp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ln=fC;function pC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Vn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Iv=(t,e,n)=>t??e??n,gC=bb({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Tn(xf),s=wt(()=>t.route||r.value),i=Tn(_v,0),o=wt(()=>{let l=he(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=wt(()=>s.value.matched[o.value]);ql(_v,wt(()=>o.value+1)),ql(hC,a),ql(xf,s);const c=de();return cs(()=>[c.value,a.value,t.name],([l,u,h],[d,f,m])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!go(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ev(n.default,{Component:d,route:l});const f=h.props[u],m=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=Wp(d,Pe({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ev(n.default,{Component:_,route:l})||_}}});function Ev(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lc=gC;function yC(t){const e=Kk(t.routes,t),n=t.parseQuery||lC,r=t.stringifyQuery||vv,s=t.history,i=ia(),o=ia(),a=ia(),c=gA(jr);let l=jr;Wi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ad.bind(null,k=>""+k),h=Ad.bind(null,cC),d=Ad.bind(null,_u);function f(k,G){let B,ne;return Wb(k)?(B=e.getRecordMatcher(k),ne=G):ne=k,e.addRoute(ne,B)}function m(k){const G=e.getRecordMatcher(k);G&&e.removeRoute(G)}function g(){return e.getRoutes().map(k=>k.record)}function _(k){return!!e.getRecordMatcher(k)}function T(k,G){if(G=Pe({},G||c.value),typeof k=="string"){const w=kd(n,k,G.path),x=e.resolve({path:w.path},G),C=s.createHref(w.fullPath);return Pe(w,x,{params:d(x.params),hash:_u(w.hash),redirectedFrom:void 0,href:C})}let B;if("path"in k)B=Pe({},k,{path:kd(n,k.path,G.path).path});else{const w=Pe({},k.params);for(const x in w)w[x]==null&&delete w[x];B=Pe({},k,{params:h(w)}),G.params=h(G.params)}const ne=e.resolve(B,G),Ie=k.hash||"";ne.params=u(d(ne.params));const y=bk(r,Pe({},k,{hash:iC(Ie),path:ne.path})),v=s.createHref(y);return Pe({fullPath:y,hash:Ie,query:r===vv?uC(k.query):k.query||{}},ne,{redirectedFrom:void 0,href:v})}function S(k){return typeof k=="string"?kd(n,k,c.value.path):Pe({},k)}function A(k,G){if(l!==k)return yo(8,{from:G,to:k})}function E(k){return Y(k)}function L(k){return E(Pe(S(k),{replace:!0}))}function F(k){const G=k.matched[k.matched.length-1];if(G&&G.redirect){const{redirect:B}=G;let ne=typeof B=="function"?B(k):B;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=S(ne):{path:ne},ne.params={}),Pe({query:k.query,hash:k.hash,params:"path"in ne?{}:k.params},ne)}}function Y(k,G){const B=l=T(k),ne=c.value,Ie=k.state,y=k.force,v=k.replace===!0,w=F(B);if(w)return Y(Pe(S(w),{state:typeof w=="object"?Pe({},Ie,w.state):Ie,force:y,replace:v}),G||B);const x=B;x.redirectedFrom=G;let C;return!y&&Ik(r,ne,B)&&(C=yo(16,{to:x,from:ne}),Wt(ne,ne,!0,!1)),(C?Promise.resolve(C):J(x,ne)).catch(N=>yr(N)?yr(N,2)?N:an(N):be(N,x,ne)).then(N=>{if(N){if(yr(N,2))return Y(Pe({replace:v},S(N.to),{state:typeof N.to=="object"?Pe({},Ie,N.to.state):Ie,force:y}),G||x)}else N=z(x,ne,!0,v,Ie);return pe(x,ne,N),N})}function O(k,G){const B=A(k,G);return B?Promise.reject(B):Promise.resolve()}function V(k){const G=cn.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(k):k()}function J(k,G){let B;const[ne,Ie,y]=vC(k,G);B=Cd(ne.reverse(),"beforeRouteLeave",k,G);for(const w of ne)w.leaveGuards.forEach(x=>{B.push(Wr(x,k,G))});const v=O.bind(null,k,G);return B.push(v),Ze(B).then(()=>{B=[];for(const w of i.list())B.push(Wr(w,k,G));return B.push(v),Ze(B)}).then(()=>{B=Cd(Ie,"beforeRouteUpdate",k,G);for(const w of Ie)w.updateGuards.forEach(x=>{B.push(Wr(x,k,G))});return B.push(v),Ze(B)}).then(()=>{B=[];for(const w of k.matched)if(w.beforeEnter&&!G.matched.includes(w))if(Vn(w.beforeEnter))for(const x of w.beforeEnter)B.push(Wr(x,k,G));else B.push(Wr(w.beforeEnter,k,G));return B.push(v),Ze(B)}).then(()=>(k.matched.forEach(w=>w.enterCallbacks={}),B=Cd(y,"beforeRouteEnter",k,G),B.push(v),Ze(B))).then(()=>{B=[];for(const w of o.list())B.push(Wr(w,k,G));return B.push(v),Ze(B)}).catch(w=>yr(w,8)?w:Promise.reject(w))}function pe(k,G,B){for(const ne of a.list())V(()=>ne(k,G,B))}function z(k,G,B,ne,Ie){const y=A(k,G);if(y)return y;const v=G===jr,w=Wi?history.state:{};B&&(ne||v?s.replace(k.fullPath,Pe({scroll:v&&w&&w.scroll},Ie)):s.push(k.fullPath,Ie)),c.value=k,Wt(k,G,B,v),an()}let le;function Ve(){le||(le=s.listen((k,G,B)=>{if(!ln.listening)return;const ne=T(k),Ie=F(ne);if(Ie){Y(Pe(Ie,{replace:!0}),ne).catch(Pa);return}l=ne;const y=c.value;Wi&&Rk(uv(y.fullPath,B.delta),wh()),J(ne,y).catch(v=>yr(v,12)?v:yr(v,2)?(Y(v.to,ne).then(w=>{yr(w,20)&&!B.delta&&B.type===nc.pop&&s.go(-1,!1)}).catch(Pa),Promise.reject()):(B.delta&&s.go(-B.delta,!1),be(v,ne,y))).then(v=>{v=v||z(ne,y,!1),v&&(B.delta&&!yr(v,8)?s.go(-B.delta,!1):B.type===nc.pop&&yr(v,20)&&s.go(-1,!1)),pe(ne,y,v)}).catch(Pa)}))}let Qe=ia(),ce=ia(),ve;function be(k,G,B){an(k);const ne=ce.list();return ne.length?ne.forEach(Ie=>Ie(k,G,B)):console.error(k),Promise.reject(k)}function At(){return ve&&c.value!==jr?Promise.resolve():new Promise((k,G)=>{Qe.add([k,G])})}function an(k){return ve||(ve=!k,Ve(),Qe.list().forEach(([G,B])=>k?B(k):G()),Qe.reset()),k}function Wt(k,G,B,ne){const{scrollBehavior:Ie}=t;if(!Wi||!Ie)return Promise.resolve();const y=!B&&Nk(uv(k.fullPath,0))||(ne||!B)&&history.state&&history.state.scroll||null;return Vp().then(()=>Ie(k,G,y)).then(v=>v&&Ck(v)).catch(v=>be(v,k,G))}const ct=k=>s.go(k);let Nn;const cn=new Set,ln={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:_,getRoutes:g,resolve:T,options:t,push:E,replace:L,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:At,install(k){const G=this;k.component("RouterLink",Ln),k.component("RouterView",Lc),k.config.globalProperties.$router=G,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>he(c)}),Wi&&!Nn&&c.value===jr&&(Nn=!0,E(s.location).catch(Ie=>{}));const B={};for(const Ie in jr)B[Ie]=wt(()=>c.value[Ie]);k.provide(bh,G),k.provide(Xp,$o(B)),k.provide(xf,c);const ne=k.unmount;cn.add(k),k.unmount=function(){cn.delete(k),cn.size<1&&(l=jr,le&&le(),le=null,c.value=jr,Nn=!1,ve=!1),ne()}}};function Ze(k){return k.reduce((G,B)=>G.then(()=>V(B)),Promise.resolve())}return ln}function vC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>go(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>go(l,c))||s.push(c))}return[n,r,s]}function Mc(){return Tn(bh)}function Jp(){return Tn(Xp)}const _C={__name:"App",setup(t){return(e,n)=>(Z(),ds(he(Lc)))}},wC="/itemshare/assets/ItemShareLogo-622ee656.png",bC=p("span",{class:"font-poppins hidden select-none text-3xl font-black text-background underline decoration-accent decoration-2 underline-offset-4 md:inline-block"},"ItemShare",-1),IC=["src"],n0={__name:"ItemShareLogo",setup(t){return(e,n)=>(Z(),ds(he(Ln),{to:"/",class:"flex items-center gap-2"},{default:Ue(()=>[bC,p("img",{src:he(wC),class:"w-10 rounded-xl",loading:"lazy"},null,8,IC)]),_:1}))}},EC=p("div",{class:"flex h-full flex-col-reverse bg-background md:flex-row-reverse",style:{"background-image":"url('https://wordpress.heals.com/blog/wp-content/uploads/2021/08/Colourful-sofa-cushions-1024x485.jpg;')","background-size":"cover","background-position":"center"}},[p("div",{class:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),p("div",{class:"z-10 basis-1/2 bg-primary"})],-1),TC={class:"absolute top-0 z-20 flex h-screen w-full flex-col md:flex-row-reverse"},xC={class:"flex w-full basis-full flex-col justify-between gap-4 overflow-y-auto p-8 md:basis-1/2"},SC={class:"flex items-center justify-between"},AC=p("nav",{class:"flex gap-4 text-background"},[p("a",{href:"#"},"About Us"),p("a",{href:"#"},"Contacts")],-1),kC=p("footer",{class:"text-right text-background"}," All Rights Reserved 2023. ® ",-1),CC={__name:"LandingView",setup(t){return(e,n)=>(Z(),ae(Fe,null,[EC,p("div",TC,[p("div",xC,[p("header",SC,[AC,j(n0)]),j(he(Lc)),kC])])],64))}},Ih=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},RC={},NC={class:"flex basis-full flex-col justify-between divide-y-0 divide-secondary divide-opacity-80 px-4 md:divide-y-4"},PC=p("div",{class:"flex basis-full flex-col justify-center"},[p("h1",{class:"text-5xl font-bold text-background sm:text-6xl md:shadow-none"}," Hello, looking for something you like? ")],-1),DC={class:"flex basis-full flex-col gap-8 px-4 py-16"},OC=p("p",{class:"text-xl text-background"}," Unlock the value of your unused items: Earn, Share, and Connect with ItemShare ",-1),LC={class:"flex items-center gap-2"};function MC(t,e){const n=Oc("RouterLink");return Z(),ae("div",NC,[PC,p("div",DC,[OC,p("div",LC,[j(n,{to:"/login",class:"rounded-md border-2 border-background bg-background px-8 py-2 text-center text-green-800"},{default:Ue(()=>[ke(" LOGIN ")]),_:1}),j(n,{to:"/register",class:"rounded-md border-2 border-background px-8 py-2 text-center text-background"},{default:Ue(()=>[ke(" REGISTER ")]),_:1})])])])}const FC=Ih(RC,[["render",MC]]);/**
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
 */const r0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},UC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},s0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new $C;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $C extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VC=function(t){const e=r0(t);return s0.encodeByteArray(e,!0)},wu=function(t){return VC(t).replace(/\./g,"")},i0=function(t){try{return s0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function bu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BC(n)||(t[n]=bu(t[n],e[n]));return t}function BC(t){return t!=="__proto__"}/**
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
 */function jC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qC=()=>jC().__FIREBASE_DEFAULTS__,zC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&i0(t[1]);return e&&JSON.parse(e)},Eh=()=>{try{return qC()||zC()||HC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},KC=t=>{var e,n;return(n=(e=Eh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GC=t=>{const e=KC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},o0=()=>{var t;return(t=Eh())===null||t===void 0?void 0:t.config},WC=t=>{var e;return(e=Eh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class QC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function a0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wu(JSON.stringify(n)),wu(JSON.stringify(o)),a].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Th(){var t;const e=(t=Eh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XC(){return typeof self=="object"&&self.self===self}function c0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l0(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JC(){return!Th()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rc(){try{return typeof indexedDB=="object"}catch{return!1}}function ZC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const eR="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eR,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $t(s,a,r)}}function tR(t,e){return t.replace(nR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nR=/\{\$([^}]+)}/g;/**
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
 */function Tv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(xv(i)&&xv(o)){if(!Sf(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xv(t){return t!==null&&typeof t=="object"}/**
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
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function u0(t,e){const n=new sR(t,e);return n.subscribe.bind(n)}class sR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rd),s.error===void 0&&(s.error=Rd),s.complete===void 0&&(s.complete=Rd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rd(){}/**
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
 */function ie(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vs="[DEFAULT]";/**
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
 */class oR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cR(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aR(t){return t===Vs?void 0:t}function cR(t){return t.instantiationMode==="EAGER"}/**
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
 */class lR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const em=[];var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const h0={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},uR=Te.INFO,hR={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},dR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xh{constructor(e){this.name=e,this._logLevel=uR,this._logHandler=dR,this._userLogHandler=null,em.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}function fR(t){em.forEach(e=>{e.setLogLevel(t)})}function pR(t,e){for(const n of em){let r=null;e&&e.level&&(r=h0[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&t({level:Te[i].toLowerCase(),message:a,args:o,type:s.name})}}}const mR=(t,e)=>e.some(n=>t instanceof n);let Sv,Av;function gR(){return Sv||(Sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yR(){return Av||(Av=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d0=new WeakMap,Af=new WeakMap,f0=new WeakMap,Nd=new WeakMap,tm=new WeakMap;function vR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(us(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&d0.set(n,t)}).catch(()=>{}),tm.set(e,t),e}function _R(t){if(Af.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Af.set(t,e)}let kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||f0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wR(t){kf=t(kf)}function bR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return f0.set(r,e.sort?e.sort():[e]),us(r)}:yR().includes(t)?function(...e){return t.apply(Pd(this),e),us(d0.get(this))}:function(...e){return us(t.apply(Pd(this),e))}}function IR(t){return typeof t=="function"?bR(t):(t instanceof IDBTransaction&&_R(t),mR(t,gR())?new Proxy(t,kf):t)}function us(t){if(t instanceof IDBRequest)return vR(t);if(Nd.has(t))return Nd.get(t);const e=IR(t);return e!==t&&(Nd.set(t,e),tm.set(e,t)),e}const Pd=t=>tm.get(t);function ER(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=us(o);return r&&o.addEventListener("upgradeneeded",c=>{r(us(o.result),c.oldVersion,c.newVersion,us(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const TR=["get","getKey","getAll","getAllKeys","count"],xR=["put","add","delete","clear"],Dd=new Map;function kv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Dd.set(e,i),i}wR(t=>({...t,get:(e,n,r)=>kv(e,n)||t.get(e,n,r),has:(e,n)=>!!kv(e,n)||t.has(e,n)}));/**
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
 */class SR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cf="@firebase/app",Cv="0.9.12";/**
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
 */const gi=new xh("@firebase/app"),kR="@firebase/app-compat",CR="@firebase/analytics-compat",RR="@firebase/analytics",NR="@firebase/app-check-compat",PR="@firebase/app-check",DR="@firebase/auth",OR="@firebase/auth-compat",LR="@firebase/database",MR="@firebase/database-compat",FR="@firebase/functions",UR="@firebase/functions-compat",$R="@firebase/installations",VR="@firebase/installations-compat",BR="@firebase/messaging",jR="@firebase/messaging-compat",qR="@firebase/performance",zR="@firebase/performance-compat",HR="@firebase/remote-config",KR="@firebase/remote-config-compat",GR="@firebase/storage",WR="@firebase/storage-compat",QR="@firebase/firestore",YR="@firebase/firestore-compat",XR="firebase",JR="9.22.2";/**
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
 */const ps="[DEFAULT]",ZR={[Cf]:"fire-core",[kR]:"fire-core-compat",[RR]:"fire-analytics",[CR]:"fire-analytics-compat",[PR]:"fire-app-check",[NR]:"fire-app-check-compat",[DR]:"fire-auth",[OR]:"fire-auth-compat",[LR]:"fire-rtdb",[MR]:"fire-rtdb-compat",[FR]:"fire-fn",[UR]:"fire-fn-compat",[$R]:"fire-iid",[VR]:"fire-iid-compat",[BR]:"fire-fcm",[jR]:"fire-fcm-compat",[qR]:"fire-perf",[zR]:"fire-perf-compat",[HR]:"fire-rc",[KR]:"fire-rc-compat",[GR]:"fire-gcs",[WR]:"fire-gcs-compat",[QR]:"fire-fst",[YR]:"fire-fst-compat","fire-js":"fire-js",[XR]:"fire-js-all"};/**
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
 */const ms=new Map,sc=new Map;function Iu(t,e){try{t.container.addComponent(e)}catch(n){gi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function p0(t,e){t.container.addOrOverwriteComponent(e)}function Ar(t){const e=t.name;if(sc.has(e))return gi.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,t);for(const n of ms.values())Iu(n,t);return!0}function nm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function eN(t,e,n=ps){nm(t,e).clearInstance(n)}function tN(){sc.clear()}/**
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
 */const nN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Er=new Pi("app","Firebase",nN);/**
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
 */let rN=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}};/**
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
 */const Dr=JR;function rm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ps,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=o0()),!n)throw Er.create("no-options");const i=ms.get(s);if(i){if(Sf(n,i.options)&&Sf(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new lR(s);for(const c of sc.values())o.addComponent(c);const a=new rN(n,r,o);return ms.set(s,a),a}function m0(t=ps){const e=ms.get(t);if(!e&&t===ps&&o0())return rm();if(!e)throw Er.create("no-app",{appName:t});return e}function sN(){return Array.from(ms.values())}async function g0(t){const e=t.name;ms.has(e)&&(ms.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Sn(t,e,n){var r;let s=(r=ZR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gi.warn(a.join(" "));return}Ar(new Bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function y0(t,e){if(t!==null&&typeof t!="function")throw Er.create("invalid-log-argument");pR(t,e)}function v0(t){fR(t)}/**
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
 */const iN="firebase-heartbeat-database",oN=1,ic="firebase-heartbeat-store";let Od=null;function _0(){return Od||(Od=ER(iN,oN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ic)}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),Od}async function aN(t){try{return await(await _0()).transaction(ic).objectStore(ic).get(w0(t))}catch(e){if(e instanceof $t)gi.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gi.warn(n.message)}}}async function Rv(t,e){try{const r=(await _0()).transaction(ic,"readwrite");await r.objectStore(ic).put(e,w0(t)),await r.done}catch(n){if(n instanceof $t)gi.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gi.warn(r.message)}}}function w0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cN=1024,lN=30*24*60*60*1e3;class uN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=lN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nv(),{heartbeatsToSend:n,unsentEntries:r}=hN(this._heartbeatsCache.heartbeats),s=wu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nv(){return new Date().toISOString().substring(0,10)}function hN(t,e=cN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rc()?ZC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pv(t){return wu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fN(t){Ar(new Bn("platform-logger",e=>new SR(e),"PRIVATE")),Ar(new Bn("heartbeat",e=>new uN(e),"PRIVATE")),Sn(Cf,Cv,t),Sn(Cf,Cv,"esm2017"),Sn("fire-js","")}fN("");const pN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:$t,SDK_VERSION:Dr,_DEFAULT_ENTRY_NAME:ps,_addComponent:Iu,_addOrOverwriteComponent:p0,_apps:ms,_clearComponents:tN,_components:sc,_getProvider:nm,_registerComponent:Ar,_removeServiceInstance:eN,deleteApp:g0,getApp:m0,getApps:sN,initializeApp:rm,onLog:y0,registerVersion:Sn,setLogLevel:v0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n){this._delegate=e,this.firebase=n,Iu(e,new Bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),g0(this._delegate)))}_getService(e,n=ps){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=ps){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Iu(this._delegate,e)}_addOrOverwriteComponent(e){p0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const gN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Dv=new Pi("app-compat","Firebase",gN);/**
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
 */function yN(t){const e={},n={__esModule:!0,initializeApp:i,app:s,registerVersion:Sn,setLogLevel:v0,onLog:y0,apps:null,SDK_VERSION:Dr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:pN}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function s(l){if(l=l||ps,!Tv(e,l))throw Dv.create("no-app",{appName:l});return e[l]}s.App=t;function i(l,u={}){const h=rm(l,u);if(Tv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Ar(l)&&l.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw Dv.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&bu(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function c(l,u){return u==="serverAuth"?null:u}return n}/**
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
 */function b0(){const t=yN(mN);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:b0,extendNamespace:e,createSubscribe:u0,ErrorFactory:Pi,deepExtend:bu});function e(n){bu(t,n)}return t}const vN=b0();/**
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
 */const Ov=new xh("@firebase/app-compat"),_N="@firebase/app-compat",wN="0.2.12";/**
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
 */function bN(t){Sn(_N,wN,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(XC()&&self.firebase!==void 0){Ov.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ov.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ft=vN;bN();var IN="firebase",EN="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.registerVersion(IN,EN,"app-compat");function sm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}const oa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},qi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function I0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xN=TN,SN=I0,E0=new Pi("auth","Firebase",I0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new xh("@firebase/auth");function AN(t,...e){Eu.logLevel<=Te.WARN&&Eu.warn(`Auth (${Dr}): ${t}`,...e)}function Kl(t,...e){Eu.logLevel<=Te.ERROR&&Eu.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw im(t,...e)}function Pt(t,...e){return im(t,...e)}function T0(t,e,n){const r=Object.assign(Object.assign({},SN()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function Bo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(t,"argument-error"),T0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function im(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return E0.create(t,...e)}function M(t,e,...n){if(!t)throw im(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kl(e),new Error(e)}function jn(t,e){t||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function om(){return Lv()==="http:"||Lv()==="https:"}function Lv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(om()||c0()||"connection"in navigator)?navigator.onLine:!0}function CN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=YC()||Zp()}get(){return kN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=new Fc(3e4,6e4);function pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yt(t,e,n,r,s={}){return S0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),x0.fetch()(A0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function S0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RN),e);try{const s=new PN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ia(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw T0(t,u,l);Ot(t,u)}}catch(s){if(s instanceof $t)throw s;Ot(t,"network-request-failed",{message:String(s)})}}async function Or(t,e,n,r,s={}){const i=await yt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function A0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?am(t.config,s):`${t.config.apiScheme}://${s}`}class PN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),NN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){return yt(t,"POST","/v1/accounts:delete",e)}async function ON(t,e){return yt(t,"POST","/v1/accounts:update",e)}async function LN(t,e){return yt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MN(t,e=!1){const n=ie(t),r=await n.getIdToken(e),s=Sh(r);M(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Oa(Ld(s.auth_time)),issuedAtTime:Oa(Ld(s.iat)),expirationTime:Oa(Ld(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ld(t){return Number(t)*1e3}function Sh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const s=i0(n);return s?JSON.parse(s):(Kl("Failed to decode base64 JWT payload"),null)}catch(s){return Kl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function FN(t){const e=Sh(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&UN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ac(t){var e;const n=t.auth,r=await t.getIdToken(),s=await kr(t,LN(n,{idToken:r}));M(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jN(i.providerUserInfo):[],a=BN(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new k0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function VN(t){const e=ie(t);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jN(t){return t.map(e=>{var{providerId:n}=e,r=sm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(t,e){const n=await S0(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=A0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new cc;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cc,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=sm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $N(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new k0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await kr(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MN(this,e)}reload(){return VN(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kr(this,DN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:E,isAnonymous:L,providerData:F,stsTokenManager:Y}=n;M(A&&Y,e,"internal-error");const O=cc.fromJSON(this.name,Y);M(typeof A=="string",e,"internal-error"),qr(h,e.name),qr(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof L=="boolean",e,"internal-error"),qr(f,e.name),qr(m,e.name),qr(g,e.name),qr(_,e.name),qr(T,e.name),qr(S,e.name);const V=new li({uid:A,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:L,photoURL:m,phoneNumber:f,tenantId:g,stsTokenManager:O,createdAt:T,lastLoginAt:S});return F&&Array.isArray(F)&&(V.providerData=F.map(J=>Object.assign({},J))),_&&(V._redirectEventId=_),V}static async _fromIdTokenResponse(e,n,r=!1){const s=new cc;s.updateFromServerResponse(n);const i=new li({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ac(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;function pn(t){jn(t instanceof Function,"Expected a class definition");let e=Mv.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mv.set(t,e),e)}/**
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
 */class C0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}C0.type="NONE";const vo=C0;/**
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
 */function ui(t,e,n){return`firebase:${t}:${e}:${n}`}class io{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ui(this.userKey,s.apiKey,i),this.fullPersistenceKey=ui("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new io(pn(vo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||pn(vo);const o=ui(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=li._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new io(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new io(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(P0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D0(e))return"Blackberry";if(O0(e))return"Webos";if(cm(e))return"Safari";if((e.includes("chrome/")||N0(e))&&!e.includes("edge/"))return"Chrome";if(Uc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function R0(t=Xe()){return/firefox\//i.test(t)}function cm(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N0(t=Xe()){return/crios\//i.test(t)}function P0(t=Xe()){return/iemobile/i.test(t)}function Uc(t=Xe()){return/android/i.test(t)}function D0(t=Xe()){return/blackberry/i.test(t)}function O0(t=Xe()){return/webos/i.test(t)}function jo(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zN(t=Xe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function HN(t=Xe()){var e;return jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KN(){return l0()&&document.documentMode===10}function L0(t=Xe()){return jo(t)||Uc(t)||O0(t)||D0(t)||/windows phone/i.test(t)||P0(t)}function GN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t,e=[]){let n;switch(t){case"Browser":n=Fv(Xe());break;case"Worker":n=`${Fv(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(t){return(await yt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function F0(t,e){return yt(t,"GET","/v2/recaptchaConfig",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){return t!==void 0&&t.getResponse!==void 0}function $v(t){return t!==void 0&&t.enterprise!==void 0}class U0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QN().appendChild(r)})}function $0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const YN="https://www.google.com/recaptcha/enterprise.js?render=",XN="recaptcha-enterprise",JN="NO_RECAPTCHA";class V0{constructor(e){this.type=XN,this.auth=at(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{F0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new U0(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;$v(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(JN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&$v(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lm(YN+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function gs(t,e,n,r=!1){const s=new V0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class ZN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vv(this),this.idTokenSubscription=new Vv(this),this.beforeStateQueue=new ZN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ie(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}async initializeRecaptchaConfig(){const e=await F0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new U0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new V0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function at(t){return ie(t)}class Vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=u0(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function tP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nP(t,e,n){const r=at(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=B0(e),{host:o,port:a}=rP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||sP()}function B0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rP(t){const e=B0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Bv(o)}}}function Bv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(t,e){return yt(t,"POST","/v1/accounts:resetPassword",pt(t,e))}async function q0(t,e){return yt(t,"POST","/v1/accounts:update",e)}async function iP(t,e){return yt(t,"POST","/v1/accounts:update",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(t,e){return Or(t,"POST","/v1/accounts:signInWithPassword",pt(t,e))}async function Ah(t,e){return yt(t,"POST","/v1/accounts:sendOobCode",pt(t,e))}async function oP(t,e){return Ah(t,e)}async function Fd(t,e){return Ah(t,e)}async function Ud(t,e){return Ah(t,e)}async function aP(t,e){return Ah(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",pt(t,e))}async function lP(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends qo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new lc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new lc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await gs(e,r,"signInWithPassword");return Md(e,s)}else return Md(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await gs(e,r,"signInWithPassword");return Md(e,i)}else return Promise.reject(s)});case"emailLink":return cP(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return q0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lP(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e){return Or(t,"POST","/v1/accounts:signInWithIdp",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="http://localhost";class fr extends qo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=sm(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new fr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:uP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){return yt(t,"POST","/v1/accounts:sendVerificationCode",pt(t,e))}async function dP(t,e){return Or(t,"POST","/v1/accounts:signInWithPhoneNumber",pt(t,e))}async function fP(t,e){const n=await Or(t,"POST","/v1/accounts:signInWithPhoneNumber",pt(t,e));if(n.temporaryProof)throw Ia(t,"account-exists-with-different-credential",n);return n}const pP={USER_NOT_FOUND:"user-not-found"};async function mP(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Or(t,"POST","/v1/accounts:signInWithPhoneNumber",pt(t,n),pP)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends qo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new hi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new hi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return dP(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return fP(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mP(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new hi({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yP(t){const e=Zi(ba(t)).link,n=e?Zi(ba(e)).deep_link_id:null,r=Zi(ba(t)).deep_link_id;return(r?Zi(ba(r)).link:null)||r||n||e||t}class kh{constructor(e){var n,r,s,i,o,a;const c=Zi(ba(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=gP((s=c.mode)!==null&&s!==void 0?s:null);M(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yP(e);try{return new kh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return lc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kh.parseLink(n);return M(r,"argument-error"),lc._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zo extends Lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class oo extends zo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return M("providerId"in n&&"signInMethod"in n,"argument-error"),fr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),fr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return oo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return oo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!n&&!i||!a)return null;try{return new oo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends zo{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends zo{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="http://localhost";class _o extends qo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=n;return!r||!s||!i||r!==s?null:new _o(r,i)}static _create(e,n){return new _o(e,n)}buildRequest(){return{requestUri:vP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="saml.";class Tu extends Lr{constructor(e){M(e.startsWith(_P),"argument-error"),super(e)}static credentialFromResult(e){return Tu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Tu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=_o.fromJSON(e);return M(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return _o._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends zo{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(t,e){return Or(t,"POST","/v1/accounts:signUp",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await li._fromIdTokenResponse(e,r,s),o=jv(r);return new kn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jv(r);return new kn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t){var e;const n=at(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new kn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Gl(n,{returnSecureToken:!0}),s=await kn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends $t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xu(e,n,r,s)}}function z0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xu._fromErrorAndOperation(t,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function bP(t,e){const n=ie(t);await Ch(!0,n,e);const{providerUserInfo:r}=await ON(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=H0(r||[]);return n.providerData=n.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function um(t,e,n=!1){const r=await kr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}async function Ch(t,e,n){await ac(e);const r=H0(e.providerData),s=t===!1?"provider-already-linked":"no-such-provider";M(r.has(n)===t,e.auth,s)}/**
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
 */async function K0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await kr(t,z0(r,s,e,t),n);M(i.idToken,r,"internal-error");const o=Sh(i.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),kn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(t,e,n=!1){const r="signIn",s=await z0(t,r,e),i=await kn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Rh(t,e){return G0(at(t),e)}async function W0(t,e){const n=ie(t);return await Ch(!1,n,e.providerId),um(n,e)}async function Q0(t,e){return K0(ie(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e){return Or(t,"POST","/v1/accounts:signInWithCustomToken",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){const n=at(t),r=await IP(n,{token:e,returnSecureToken:!0}),s=await kn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?hm._fromServerResponse(e,n):"totpInfo"in n?dm._fromServerResponse(e,n):Ot(e,"internal-error")}}class hm extends $c{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new hm(n)}}class dm extends $c{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new dm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e,n){var r;M(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),M(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(M(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(M(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e,n){var r;const s=at(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await gs(s,i,"getOobCode",!0);n&&ao(s,o,n),await Fd(s,o)}else n&&ao(s,i,n),await Fd(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await gs(s,i,"getOobCode",!0);n&&ao(s,a,n),await Fd(s,a)}else return Promise.reject(o)})}async function xP(t,e,n){await j0(ie(t),{oobCode:e,newPassword:n})}async function SP(t,e){await iP(ie(t),{oobCode:e})}async function Y0(t,e){const n=ie(t),r=await j0(n,{oobCode:e}),s=r.requestType;switch(M(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":M(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":M(r.mfaInfo,n,"internal-error");default:M(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=$c._fromServerResponse(at(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function AP(t,e){const{data:n}=await Y0(ie(t),e);return n.email}async function kP(t,e,n){var r;const s=at(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await gs(s,i,"signUpPassword");o=Gl(s,l)}else o=Gl(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await gs(s,i,"signUpPassword");return Gl(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await kn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function CP(t,e,n){return Rh(ie(t),As.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e,n){var r;const s=at(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){M(c.handleCodeInApp,s,"argument-error"),c&&ao(s,a,c)}if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await gs(s,i,"getOobCode",!0);o(a,n),await Ud(s,a)}else o(i,n),await Ud(s,i).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await gs(s,i,"getOobCode",!0);o(c,n),await Ud(s,c)}else return Promise.reject(a)})}function NP(t,e){const n=kh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function PP(t,e,n){const r=ie(t),s=As.credentialWithLink(e,n||oc());return M(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Rh(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){return yt(t,"POST","/v1/accounts:createAuthUri",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){const n=om()?oc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await DP(ie(t),r);return s||[]}async function LP(t,e){const n=ie(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ao(n.auth,s,e);const{email:i}=await oP(n.auth,s);i!==t.email&&await t.reload()}async function MP(t,e,n){const r=ie(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ao(r.auth,i,n);const{email:o}=await aP(r.auth,i);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e){return yt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ie(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await kr(r,FP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $P(t,e){return X0(ie(t),e,null)}function VP(t,e){return X0(ie(t),null,e)}async function X0(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await kr(t,q0(r,i));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function BP(t){var e,n;if(!t)return null;const{providerId:r}=t,s=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},i=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Sh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new co(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new jP(i,s);case"github.com":return new qP(i,s);case"google.com":return new zP(i,s);case"twitter.com":return new HP(i,s,t.screenName||null);case"custom":case"anonymous":return new co(i,null);default:return new co(i,r,s)}}class co{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class J0 extends co{constructor(e,n,r,s){super(e,n,r),this.username=s}}class jP extends co{constructor(e,n){super(e,"facebook.com",n)}}class qP extends J0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class zP extends co{constructor(e,n){super(e,"google.com",n)}}class HP extends J0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function KP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:BP(n)}class ti{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ti("enroll",e,n)}static _fromMfaPendingCredential(e){return new ti("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ti._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ti._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=at(e),s=n.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>$c._fromServerResponse(r,a));M(s.mfaPendingCredential,r,"internal-error");const o=ti._fromMfaPendingCredential(s.mfaPendingCredential);return new fm(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const u=await kn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return M(n.user,r,"internal-error"),kn._forOperation(n.user,n.operationType,l);default:Ot(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function GP(t,e){var n;const r=ie(t),s=e;return M(e.customData.operationType,r,"argument-error"),M((n=s.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),fm._fromError(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e){return yt(t,"POST","/v2/accounts/mfaEnrollment:start",pt(t,e))}function QP(t,e){return yt(t,"POST","/v2/accounts/mfaEnrollment:finalize",pt(t,e))}function YP(t,e){return yt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",pt(t,e))}class pm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>$c._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new pm(e)}async getSession(){return ti._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,s=await this.getSession(),i=await kr(this.user,r._process(this.user.auth,s,n));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const s=await kr(this.user,YP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==n),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const $d=new WeakMap;function XP(t){const e=ie(t);return $d.has(e)||$d.set(e,pm._fromUser(e)),$d.get(e)}const Su="__sak";/**
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
 */class Z0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(){const t=Xe();return cm(t)||jo(t)}const ZP=1e3,eD=10;class eI extends Z0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JP()&&GN(),this.fallbackToPolling=L0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);KN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eD):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eI.type="LOCAL";const mm=eI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI extends Z0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tI.type="SESSION";const yi=tI;/**
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
 */function tD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await tD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Vc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function rD(t){ht().location.href=t}/**
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
 */function gm(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function sD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oD(){return gm()?self:null}/**
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
 */const nI="firebaseLocalStorageDb",aD=1,Au="firebaseLocalStorage",rI="fbase_key";class Bc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ph(t,e){return t.transaction([Au],e?"readwrite":"readonly").objectStore(Au)}function cD(){const t=indexedDB.deleteDatabase(nI);return new Bc(t).toPromise()}function Rf(){const t=indexedDB.open(nI,aD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Au,{keyPath:rI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Au)?e(r):(r.close(),await cD(),e(await Rf()))})})}async function qv(t,e,n){const r=Ph(t,!0).put({[rI]:e,value:n});return new Bc(r).toPromise()}async function lD(t,e){const n=Ph(t,!1).get(e),r=await new Bc(n).toPromise();return r===void 0?null:r.value}function zv(t,e){const n=Ph(t,!0).delete(e);return new Bc(n).toPromise()}const uD=800,hD=3;class sI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nh._getInstance(oD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sD(),!this.activeServiceWorker)return;this.sender=new nD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rf();return await qv(e,Su,"1"),await zv(e,Su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ph(s,!1).getAll();return new Bc(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sI.type="LOCAL";const uc=sI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t,e){return yt(t,"POST","/v2/accounts/mfaSignIn:start",pt(t,e))}function fD(t,e){return yt(t,"POST","/v2/accounts/mfaSignIn:finalize",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=500,mD=6e4,wl=1e12;class gD{constructor(e){this.auth=e,this.counter=wl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new yD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||wl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||wl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||wl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class yD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;M(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=vD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},mD)},pD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=$0("rcb"),_D=new Fc(3e4,6e4),wD="https://www.google.com/recaptcha/api.js?";class bD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ht().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return M(ID(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Uv(ht().grecaptcha)?Promise.resolve(ht().grecaptcha):new Promise((r,s)=>{const i=ht().setTimeout(()=>{s(Pt(e,"network-request-failed"))},_D.get());ht()[Vd]=()=>{ht().clearTimeout(i),delete ht()[Vd];const a=ht().grecaptcha;if(!a||!Uv(a)){s(Pt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${wD}?${Vo({onload:Vd,render:"explicit",hl:n})}`;lm(o).catch(()=>{clearTimeout(i),s(Pt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ht().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ID(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class ED{async load(e){return new gD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="recaptcha",TD={theme:"light",type:"image"};let xD=class{constructor(e,n=Object.assign({},TD),r){this.parameters=n,this.type=iI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=at(r),this.isInvisible=this.parameters.size==="invisible",M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;M(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ED:new bD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ht()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){M(om()&&!gm(),this.auth,"internal-error"),await SD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await WN(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function SD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=hi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function AD(t,e,n){const r=at(t),s=await Dh(r,e,ie(n));return new ym(s,i=>Rh(r,i))}async function kD(t,e,n){const r=ie(t);await Ch(!1,r,"phone");const s=await Dh(r.auth,e,ie(n));return new ym(s,i=>W0(r,i))}async function CD(t,e,n){const r=ie(t),s=await Dh(r.auth,e,ie(n));return new ym(s,i=>Q0(r,i))}async function Dh(t,e,n){var r;const s=await n.verify();try{M(typeof s=="string",t,"argument-error"),M(n.type===iI,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return M(o.type==="enroll",t,"internal-error"),(await WP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{M(o.type==="signin",t,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return M(a,t,"missing-multi-factor-info"),(await dD(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await hP(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}async function RD(t,e){await um(ie(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi=class Wl{constructor(e){this.providerId=Wl.PROVIDER_ID,this.auth=at(e)}verifyPhoneNumber(e,n){return Dh(this.auth,e,ie(n))}static credential(e,n){return hi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Wl.credentialFromTaggedObject(n)}static credentialFromError(e){return Wl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?hi._fromTokenResponse(n,r):null}};vi.PROVIDER_ID="phone";vi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Di(t,e){return e?pn(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vm extends qo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ND(t){return G0(t.auth,new vm(t),t.bypassAuthState)}function PD(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),K0(n,new vm(t),t.bypassAuthState)}async function DD(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),um(n,new vm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ND;case"linkViaPopup":case"linkViaRedirect":return DD;case"reauthViaPopup":case"reauthViaRedirect":return PD;default:Ot(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=new Fc(2e3,1e4);async function LD(t,e,n){const r=at(t);Bo(t,e,Lr);const s=Di(r,n);return new _r(r,"signInViaPopup",e,s).executeNotNull()}async function MD(t,e,n){const r=ie(t);Bo(r.auth,e,Lr);const s=Di(r.auth,n);return new _r(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function FD(t,e,n){const r=ie(t);Bo(r.auth,e,Lr);const s=Di(r.auth,n);return new _r(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class _r extends oI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OD.get())};e()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="pendingRedirect",La=new Map;class $D extends oI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=La.get(this.auth._key());if(!e){try{const r=await VD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}La.set(this.auth._key(),e)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VD(t,e){const n=cI(e),r=aI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function _m(t,e){return aI(t)._set(cI(e),"true")}function BD(){La.clear()}function wm(t,e){La.set(t._key(),e)}function aI(t){return pn(t._redirectPersistence)}function cI(t){return ui(UD,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t,e,n){return qD(t,e,n)}async function qD(t,e,n){const r=at(t);Bo(t,e,Lr),await r._initializationPromise;const s=Di(r,n);return await _m(s,r),s._openRedirect(r,e,"signInViaRedirect")}function zD(t,e,n){return HD(t,e,n)}async function HD(t,e,n){const r=ie(t);Bo(r.auth,e,Lr),await r.auth._initializationPromise;const s=Di(r.auth,n);await _m(s,r.auth);const i=await lI(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function KD(t,e,n){return GD(t,e,n)}async function GD(t,e,n){const r=ie(t);Bo(r.auth,e,Lr),await r.auth._initializationPromise;const s=Di(r.auth,n);await Ch(!1,r,e.providerId),await _m(s,r.auth);const i=await lI(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function WD(t,e){return await at(t)._initializationPromise,Oh(t,e,!1)}async function Oh(t,e,n=!1){const r=at(t),s=Di(r,e),o=await new $D(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function lI(t){const e=Vc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=10*60*1e3;class uI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hv(e))}saveEventToCache(e){this.cachedEventUids.add(Hv(e)),this.lastProcessedEventTime=Date.now()}}function Hv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e={}){return yt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JD=/^https?/;async function ZD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dI(t);for(const n of e)try{if(eO(n))return}catch{}Ot(t,"unauthorized-domain")}function eO(t){const e=oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JD.test(n))return!1;if(XD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tO=new Fc(3e4,6e4);function Kv(){const t=ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nO(t){return new Promise((e,n)=>{var r,s,i;function o(){Kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kv(),n(Pt(t,"network-request-failed"))},timeout:tO.get()})}if(!((s=(r=ht().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ht().gapi)===null||i===void 0)&&i.load)o();else{const a=$0("iframefcb");return ht()[a]=()=>{gapi.load?o():n(Pt(t,"network-request-failed"))},lm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ql=null,e})}let Ql=null;function rO(t){return Ql=Ql||nO(t),Ql}/**
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
 */const sO=new Fc(5e3,15e3),iO="__/auth/iframe",oO="emulator/auth/iframe",aO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lO(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?am(e,oO):`https://${t.config.authDomain}/${iO}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},s=cO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vo(r).slice(1)}`}async function uO(t){const e=await rO(t),n=ht().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:lO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pt(t,"network-request-failed"),a=ht().setTimeout(()=>{i(o)},sO.get());function c(){ht().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dO=500,fO=600,pO="_blank",mO="http://localhost";class Gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(t,e,n,r=dO,s=fO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hO),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Xe().toLowerCase();n&&(a=N0(l)?pO:n),R0(l)&&(e=e||mO,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(HN(l)&&a!=="_self")return yO(e||"",a),new Gv(null);const h=window.open(e||"",a,u);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Gv(h)}function yO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vO="__/auth/handler",_O="emulator/auth/handler",wO=encodeURIComponent("fac");async function Nf(t,e,n,r,s,i){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:s};if(e instanceof Lr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof zo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${wO}=${encodeURIComponent(c)}`:"";return`${bO(t)}?${Vo(a).slice(1)}${l}`}function bO({config:t}){return t.emulator?am(t,_O):`https://${t.authDomain}/${vO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="webStorageSupport";class IO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yi,this._completeRedirectFn=Oh,this._overrideRedirectResult=wm}async _openPopup(e,n,r,s){var i;jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nf(e,n,r,oc(),s);return gO(e,o,Vc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Nf(e,n,r,oc(),s);return rD(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uO(e),r=new uI(e);return n.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bd,{type:Bd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bd];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return L0()||cm()||jo()}}const EO=IO;class TO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return tr("unexpected MultiFactorSessionType")}}}class bm extends TO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new bm(e)}_finalizeEnroll(e,n,r){return QP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return fD(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fI{constructor(){}static assertion(e){return bm._fromCredential(e)}}fI.FACTOR_ID="phone";var Wv="@firebase/auth",Qv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AO(t){Ar(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M0(t)},l=new eP(r,s,i,c);return tP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new Bn("auth-internal",e=>{const n=at(e.getProvider("auth").getImmediate());return(r=>new xO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Wv,Qv,SO(t)),Sn(Wv,Qv,"esm2017")}/**
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
 */const kO=5*60;WC("authIdTokenMaxAge");AO("Browser");/**
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
 */function _i(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=2e3;async function RO(t,e,n){var r;const{BuildInfo:s}=_i();jn(e.sessionId,"AuthEvent did not contain a session ID");const i=await LO(e.sessionId),o={};return jo()?o.ibi=s.packageName:Uc()?o.apn=s.packageName:Ot(t,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,Nf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function NO(t){const{BuildInfo:e}=_i(),n={};jo()?n.iosBundleId=e.packageName:Uc()?n.androidPackageName=e.packageName:Ot(t,"operation-not-supported-in-this-environment"),await dI(t,n)}function PO(t){const{cordova:e}=_i();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(t):s=e.InAppBrowser.open(t,zN()?"_blank":"_system","location=yes"),n(s)})})}async function DO(t,e,n){const{cordova:r}=_i();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Pt(t,"redirect-cancelled-by-user"))},CO))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Uc()&&document.addEventListener("visibilitychange",u,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{s()}}function OO(t){var e,n,r,s,i,o,a,c,l,u;const h=_i();M(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),M(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),M(typeof((i=(s=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function LO(t){const e=MO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}function MO(t){if(jn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=20;class UO extends uI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function $O(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:jO(),postBody:null,tenantId:t.tenantId,error:Pt(t,"no-auth-event")}}function VO(t,e){return Pf()._set(Df(t),e)}async function Yv(t){const e=await Pf()._get(Df(t));return e&&await Pf()._remove(Df(t)),e}function BO(t,e){var n,r;const s=zO(e);if(s.includes("/__/auth/callback")){const i=Yl(s),o=i.firebaseError?qO(decodeURIComponent(i.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Pt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:s,postBody:null}}return null}function jO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<FO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Pf(){return pn(mm)}function Df(t){return ui("authEvent",t.config.apiKey,t.name)}function qO(t){try{return JSON.parse(t)}catch{return null}}function zO(t){const e=Yl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Yl(n).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Yl(s).link||s||r||n||t}function Yl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Zi(n.join("?"))}/**
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
 */const HO=500;class KO{constructor(){this._redirectPersistence=yi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Oh,this._overrideRedirectResult=wm}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new UO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ot(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,s){OO(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),BD(),await this._originValidation(e);const o=$O(e,r,s);await VO(e,o);const a=await RO(e,o,n),c=await PO(a);return DO(e,i,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=_i(),o=setTimeout(async()=>{await Yv(e),n.onEvent(Xv())},HO),a=async u=>{clearTimeout(o);const h=await Yv(e);let d=null;h&&(u!=null&&u.url)&&(d=BO(h,u.url)),n.onEvent(d||Xv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,l=`${i.packageName.toLowerCase()}://`;_i().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const GO=KO;function Xv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Pt("no-auth-event")}}/**
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
 */function WO(t,e){at(t)._logFramework(e)}var QO="@firebase/auth-compat",YO="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=1e3;function Ma(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function JO(){return Ma()==="http:"||Ma()==="https:"}function pI(t=Xe()){return!!((Ma()==="file:"||Ma()==="ionic:"||Ma()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ZO(){return Zp()||Th()}function eL(){return l0()&&(document==null?void 0:document.documentMode)===11}function tL(t=Xe()){return/Edge\/\d+/.test(t)}function nL(t=Xe()){return eL()||tL(t)}function mI(){try{const t=self.localStorage,e=Vc();if(t)return t.setItem(e,"1"),t.removeItem(e),nL()?rc():!0}catch{return Im()&&rc()}return!1}function Im(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function jd(){return(JO()||c0()||pI())&&!ZO()&&mI()&&!Im()}function gI(){return pI()&&typeof document<"u"}async function rL(){return gI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},XO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function sL(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={LOCAL:"local",NONE:"none",SESSION:"session"},aa=M,yI="persistence";function iL(t,e){if(aa(Object.values(dn).includes(e),t,"invalid-persistence-type"),Zp()){aa(e!==dn.SESSION,t,"unsupported-persistence-type");return}if(Th()){aa(e===dn.NONE,t,"unsupported-persistence-type");return}if(Im()){aa(e===dn.NONE||e===dn.LOCAL&&rc(),t,"unsupported-persistence-type");return}aa(e===dn.NONE||mI(),t,"unsupported-persistence-type")}async function Of(t){await t._initializationPromise;const e=vI(),n=ui(yI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function oL(t,e){const n=vI();if(!n)return[];const r=ui(yI,t,e);switch(n.getItem(r)){case dn.NONE:return[vo];case dn.LOCAL:return[uc,yi];case dn.SESSION:return[yi];default:return[]}}function vI(){var t;try{return((t=sL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=M;class ns{constructor(){this.browserResolver=pn(EO),this.cordovaResolver=pn(GO),this.underlyingResolver=null,this._redirectPersistence=yi,this._completeRedirectFn=Oh,this._overrideRedirectResult=wm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,s)}async _openRedirect(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,s)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return gI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return aL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await rL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){return t.unwrap()}function cL(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){return wI(t)}function uL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new hL(t,GP(t,e))}else if(r){const s=wI(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function wI(t){const{_tokenResponse:e}=t instanceof $t?t.customData:t;if(!e)return null;if(!(t instanceof $t)&&"temporaryProof"in e&&"phoneNumber"in e)return vi.credentialFromResult(t);const n=e.providerId;if(!n||n===oa.PASSWORD)return null;let r;switch(n){case oa.GOOGLE:r=Xn;break;case oa.FACEBOOK:r=Yn;break;case oa.GITHUB:r=Jn;break;case oa.TWITTER:r=Zn;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?n.startsWith("saml.")?_o._create(n,a):fr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:s,accessToken:i}):new oo(n).credential({idToken:s,accessToken:i,rawNonce:c})}return t instanceof $t?r.credentialFromError(t):r.credentialFromResult(t)}function Yt(t,e){return e.catch(n=>{throw n instanceof $t&&uL(t,n),n}).then(n=>{const r=n.operationType,s=n.user;return{operationType:r,credential:lL(n),additionalUserInfo:KP(n),user:wr.getOrCreate(s)}})}async function Lf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Yt(t,n.confirm(r))}}class hL{constructor(e,n){this.resolver=n,this.auth=cL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Yt(_I(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this._delegate=e,this.multiFactor=XP(e)}static getOrCreate(e){return wr.USER_MAP.has(e)||wr.USER_MAP.set(e,new wr(e)),wr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Yt(this.auth,W0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Lf(this.auth,kD(this._delegate,e,n))}async linkWithPopup(e){return Yt(this.auth,FD(this._delegate,e,ns))}async linkWithRedirect(e){return await Of(at(this.auth)),KD(this._delegate,e,ns)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Yt(this.auth,Q0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Lf(this.auth,CD(this._delegate,e,n))}reauthenticateWithPopup(e){return Yt(this.auth,MD(this._delegate,e,ns))}async reauthenticateWithRedirect(e){return await Of(at(this.auth)),zD(this._delegate,e,ns)}sendEmailVerification(e){return LP(this._delegate,e)}async unlink(e){return await bP(this._delegate,e),this}updateEmail(e){return $P(this._delegate,e)}updatePassword(e){return VP(this._delegate,e)}updatePhoneNumber(e){return RD(this._delegate,e)}updateProfile(e){return UP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return MP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}wr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=M;class Mf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ca(r,"invalid-api-key",{appName:e.name}),ca(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?ns:void 0;this._delegate=n.initialize({options:{persistence:dL(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(xN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?wr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){nP(this._delegate,e,n)}applyActionCode(e){return SP(this._delegate,e)}checkActionCode(e){return Y0(this._delegate,e)}confirmPasswordReset(e,n){return xP(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Yt(this._delegate,kP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return OP(this._delegate,e)}isSignInWithEmailLink(e){return NP(this._delegate,e)}async getRedirectResult(){ca(jd(),this._delegate,"operation-not-supported-in-this-environment");const e=await WD(this._delegate,ns);return e?Yt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){WO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:s,error:i,complete:o}=Jv(e,n,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,n,r){const{next:s,error:i,complete:o}=Jv(e,n,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,n){return RP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return TP(this._delegate,e,n||void 0)}async setPersistence(e){iL(this._delegate,e);let n;switch(e){case dn.SESSION:n=yi;break;case dn.LOCAL:n=await pn(uc)._isAvailable()?uc:mm;break;case dn.NONE:n=vo;break;default:return Ot("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Yt(this._delegate,wP(this._delegate))}signInWithCredential(e){return Yt(this._delegate,Rh(this._delegate,e))}signInWithCustomToken(e){return Yt(this._delegate,EP(this._delegate,e))}signInWithEmailAndPassword(e,n){return Yt(this._delegate,CP(this._delegate,e,n))}signInWithEmailLink(e,n){return Yt(this._delegate,PP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Lf(this._delegate,AD(this._delegate,e,n))}async signInWithPopup(e){return ca(jd(),this._delegate,"operation-not-supported-in-this-environment"),Yt(this._delegate,LD(this._delegate,e,ns))}async signInWithRedirect(e){return ca(jd(),this._delegate,"operation-not-supported-in-this-environment"),await Of(this._delegate),jD(this._delegate,e,ns)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return AP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Mf.Persistence=dn;function Jv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const s=r;return{next:o=>s(o&&wr.getOrCreate(o)),error:e,complete:n}}function dL(t,e){const n=oL(t,e);if(typeof self<"u"&&!n.includes(uc)&&n.push(uc),typeof window<"u")for(const r of[mm,yi])n.includes(r)||n.push(r);return n.includes(vo)||n.push(vo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.providerId="phone",this._delegate=new vi(_I(Ft.auth()))}static credential(e,n){return vi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Em.PHONE_SIGN_IN_METHOD=vi.PHONE_SIGN_IN_METHOD;Em.PROVIDER_ID=vi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=M;class pL{constructor(e,n,r=Ft.app()){var s;fL((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new xD(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL="auth-compat";function gL(t){t.INTERNAL.registerComponent(new Bn(mL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Mf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:qi.EMAIL_SIGNIN,PASSWORD_RESET:qi.PASSWORD_RESET,RECOVER_EMAIL:qi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:qi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:qi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:qi.VERIFY_EMAIL}},EmailAuthProvider:As,FacebookAuthProvider:Yn,GithubAuthProvider:Jn,GoogleAuthProvider:Xn,OAuthProvider:oo,SAMLAuthProvider:Tu,PhoneAuthProvider:Em,PhoneMultiFactorGenerator:fI,RecaptchaVerifier:pL,TwitterAuthProvider:Zn,Auth:Mf,AuthCredential:qo,Error:$t}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(QO,YO)}gL(Ft);var yL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,Tm=Tm||{},fe=yL||self;function Lh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vL(t){return Object.prototype.hasOwnProperty.call(t,qd)&&t[qd]||(t[qd]=++_L)}var qd="closure_uid_"+(1e9*Math.random()>>>0),_L=0;function wL(t,e,n){return t.call.apply(t.bind,arguments)}function bL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Vt=wL:Vt=bL,Vt.apply(null,arguments)}function bl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Tt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ks(){this.s=this.s,this.o=this.o}var IL=0;ks.prototype.s=!1;ks.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),IL!=0)&&vL(this)};ks.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Zv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lh(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var EL=function(){if(!fe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{fe.addEventListener("test",()=>{},e),fe.removeEventListener("test",()=>{},e)}catch{}return t}();function hc(t){return/^[\s\xa0]*$/.test(t)}function Mh(){var t=fe.navigator;return t&&(t=t.userAgent)?t:""}function er(t){return Mh().indexOf(t)!=-1}function Sm(t){return Sm[" "](t),t}Sm[" "]=function(){};function TL(t,e){var n=gM;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xL=er("Opera"),wo=er("Trident")||er("MSIE"),II=er("Edge"),Ff=II||wo,EI=er("Gecko")&&!(Mh().toLowerCase().indexOf("webkit")!=-1&&!er("Edge"))&&!(er("Trident")||er("MSIE"))&&!er("Edge"),SL=Mh().toLowerCase().indexOf("webkit")!=-1&&!er("Edge");function TI(){var t=fe.document;return t?t.documentMode:void 0}var Uf;e:{var zd="",Hd=function(){var t=Mh();if(EI)return/rv:([^\);]+)(\)|;)/.exec(t);if(II)return/Edge\/([\d\.]+)/.exec(t);if(wo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SL)return/WebKit\/(\S+)/.exec(t);if(xL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hd&&(zd=Hd?Hd[1]:""),wo){var Kd=TI();if(Kd!=null&&Kd>parseFloat(zd)){Uf=String(Kd);break e}}Uf=zd}var $f;if(fe.document&&wo){var e_=TI();$f=e_||parseInt(Uf,10)||void 0}else $f=void 0;var AL=$f;function dc(t,e){if(Bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(EI){e:{try{Sm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&dc.$.h.call(this)}}Tt(dc,Bt);var kL={2:"touch",3:"pen",4:"mouse"};dc.prototype.h=function(){dc.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qc="closure_listenable_"+(1e6*Math.random()|0),CL=0;function RL(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++CL,this.fa=this.ia=!1}function Fh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Am(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function NL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xI(t){const e={};for(const n in t)e[n]=t[n];return e}const t_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function SI(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<t_.length;i++)n=t_[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Uh(t){this.src=t,this.g={},this.h=0}Uh.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Bf(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new RL(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Vf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=bI(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bf(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var km="closure_lm_"+(1e6*Math.random()|0),Gd={};function AI(t,e,n,r,s){if(r&&r.once)return CI(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)AI(t,e[i],n,r,s);return null}return n=Nm(n),t&&t[qc]?t.O(e,n,jc(r)?!!r.capture:!!r,s):kI(t,e,n,!1,r,s)}function kI(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=jc(s)?!!s.capture:!!s,a=Rm(t);if(a||(t[km]=a=new Uh(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=PL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)EL||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(NI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PL(){function t(n){return e.call(t.src,t.listener,n)}const e=DL;return t}function CI(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)CI(t,e[i],n,r,s);return null}return n=Nm(n),t&&t[qc]?t.P(e,n,jc(r)?!!r.capture:!!r,s):kI(t,e,n,!0,r,s)}function RI(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)RI(t,e[i],n,r,s);else r=jc(r)?!!r.capture:!!r,n=Nm(n),t&&t[qc]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Bf(i,n,r,s),-1<n&&(Fh(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bf(e,n,r,s)),(n=-1<t?e[t]:null)&&Cm(n))}function Cm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[qc])Vf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(NI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rm(e))?(Vf(n,t),n.h==0&&(n.src=null,e[km]=null)):Fh(t)}}}function NI(t){return t in Gd?Gd[t]:Gd[t]="on"+t}function DL(t,e){if(t.fa)t=!0;else{e=new dc(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Cm(t),t=n.call(r,e)}return t}function Rm(t){return t=t[km],t instanceof Uh?t:null}var Wd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nm(t){return typeof t=="function"?t:(t[Wd]||(t[Wd]=function(e){return t.handleEvent(e)}),t[Wd])}function Et(){ks.call(this),this.i=new Uh(this),this.S=this,this.J=null}Tt(Et,ks);Et.prototype[qc]=!0;Et.prototype.removeEventListener=function(t,e,n,r){RI(this,t,e,n,r)};function Dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Bt(e,t);else if(e instanceof Bt)e.target=e.target||t;else{var s=e;e=new Bt(r,t),SI(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Il(o,r,!0,e)&&s}if(o=e.g=t,s=Il(o,r,!0,e)&&s,s=Il(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Il(o,r,!1,e)&&s}Et.prototype.N=function(){if(Et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fh(n[r]);delete t.g[e],t.h--}}this.J=null};Et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Et.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Il(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Vf(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Pm=fe.JSON.stringify;class OL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function LL(){var t=Dm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ML{constructor(){this.h=this.g=null}add(e,n){const r=PI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var PI=new OL(()=>new FL,t=>t.reset());class FL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $L(t){fe.setTimeout(()=>{throw t},0)}let fc,pc=!1,Dm=new ML,DI=()=>{const t=fe.Promise.resolve(void 0);fc=()=>{t.then(VL)}};var VL=()=>{for(var t;t=LL();){try{t.h.call(t.g)}catch(n){$L(n)}var e=PI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pc=!1};function $h(t,e){Et.call(this),this.h=t||1,this.g=e||fe,this.j=Vt(this.qb,this),this.l=Date.now()}Tt($h,Et);K=$h.prototype;K.ga=!1;K.T=null;K.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Dt(this,"tick"),this.ga&&(Om(this),this.start()))}};K.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Om(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}K.N=function(){$h.$.N.call(this),Om(this),delete this.g};function Lm(t,e,n){if(typeof t=="function")n&&(t=Vt(t,n));else if(t&&typeof t.handleEvent=="function")t=Vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:fe.setTimeout(t,e||0)}function OI(t){t.g=Lm(()=>{t.g=null,t.i&&(t.i=!1,OI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BL extends ks{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:OI(this)}N(){super.N(),this.g&&(fe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mc(t){ks.call(this),this.h=t,this.g={}}Tt(mc,ks);var n_=[];function LI(t,e,n,r){Array.isArray(n)||(n&&(n_[0]=n.toString()),n=n_);for(var s=0;s<n.length;s++){var i=AI(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function MI(t){Am(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cm(e)},t),t.g={}}mc.prototype.N=function(){mc.$.N.call(this),MI(this)};mc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vh(){this.g=!0}Vh.prototype.Ea=function(){this.g=!1};function jL(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function qL(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function eo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HL(t,n)+(r?" "+r:"")})}function zL(t,e){t.info(function(){return"TIMEOUT: "+e})}Vh.prototype.info=function(){};function HL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Pm(n)}catch{return e}}var Oi={},r_=null;function Bh(){return r_=r_||new Et}Oi.Ta="serverreachability";function FI(t){Bt.call(this,Oi.Ta,t)}Tt(FI,Bt);function gc(t){const e=Bh();Dt(e,new FI(e))}Oi.STAT_EVENT="statevent";function UI(t,e){Bt.call(this,Oi.STAT_EVENT,t),this.stat=e}Tt(UI,Bt);function Kt(t){const e=Bh();Dt(e,new UI(e,t))}Oi.Ua="timingevent";function $I(t,e){Bt.call(this,Oi.Ua,t),this.size=e}Tt($I,Bt);function zc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return fe.setTimeout(function(){t()},e)}var jh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},VI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mm(){}Mm.prototype.h=null;function s_(t){return t.h||(t.h=t.i())}function BI(){}var Hc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fm(){Bt.call(this,"d")}Tt(Fm,Bt);function Um(){Bt.call(this,"c")}Tt(Um,Bt);var jf;function qh(){}Tt(qh,Mm);qh.prototype.g=function(){return new XMLHttpRequest};qh.prototype.i=function(){return{}};jf=new qh;function Kc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new mc(this),this.P=KL,t=Ff?125:void 0,this.V=new $h(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jI}function jI(){this.i=null,this.g="",this.h=!1}var KL=45e3,qf={},ku={};K=Kc.prototype;K.setTimeout=function(t){this.P=t};function zf(t,e,n){t.L=1,t.v=Hh(Cr(e)),t.s=n,t.S=!0,qI(t,null)}function qI(t,e){t.G=Date.now(),Gc(t),t.A=Cr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),XI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new jI,t.g=vE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new BL(Vt(t.Pa,t,t.g),t.O)),LI(t.U,t.g,"readystatechange",t.nb),e=t.I?xI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),gc(),jL(t.j,t.u,t.A,t.m,t.W,t.s)}K.nb=function(t){t=t.target;const e=this.M;e&&nr(t)==3?e.l():this.Pa(t)};K.Pa=function(t){try{if(t==this.g)e:{const u=nr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ff||this.g&&(this.h.h||this.g.ja()||c_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?gc(3):gc(2)),zh(this);var n=this.g.da();this.ca=n;t:if(zI(this)){var r=c_(this.g);t="";var s=r.length,i=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),Fa(this);var o="";break t}this.h.i=new fe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,qL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hc(a)){var l=a;break t}}l=null}if(n=l)eo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hf(this,n);else{this.i=!1,this.o=3,Kt(12),ni(this),Fa(this);break e}}this.S?(HI(this,u,o),Ff&&this.i&&u==3&&(LI(this.U,this.V,"tick",this.mb),this.V.start())):(eo(this.j,this.m,o,null),Hf(this,o)),u==4&&ni(this),this.i&&!this.J&&(u==4?pE(this.l,this):(this.i=!1,Gc(this)))}else fM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),ni(this),Fa(this)}}}catch{}finally{}};function zI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function HI(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=GL(t,n),s==ku){e==4&&(t.o=4,Kt(14),r=!1),eo(t.j,t.m,null,"[Incomplete Response]");break}else if(s==qf){t.o=4,Kt(15),eo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else eo(t.j,t.m,s,null),Hf(t,s);zI(t)&&s!=ku&&s!=qf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zm(e),e.M=!0,Kt(11))):(eo(t.j,t.m,n,"[Invalid Chunked Response]"),ni(t),Fa(t))}K.mb=function(){if(this.g){var t=nr(this.g),e=this.g.ja();this.C<e.length&&(zh(this),HI(this,t,e),this.i&&t!=4&&Gc(this))}};function GL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ku:(n=Number(e.substring(n,r)),isNaN(n)?qf:(r+=1,r+n>e.length?ku:(e=e.slice(r,r+n),t.C=r+n,e)))}K.cancel=function(){this.J=!0,ni(this)};function Gc(t){t.Y=Date.now()+t.P,KI(t,t.P)}function KI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zc(Vt(t.lb,t),e)}function zh(t){t.B&&(fe.clearTimeout(t.B),t.B=null)}K.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zL(this.j,this.A),this.L!=2&&(gc(),Kt(17)),ni(this),this.o=2,Fa(this)):KI(this,this.Y-t)};function Fa(t){t.l.H==0||t.J||pE(t.l,t)}function ni(t){zh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Om(t.V),MI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Hf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Kf(n.i,t))){if(!t.K&&Kf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Nu(n),Wh(n);else break e;qm(n),Kt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=zc(Vt(n.ib,n),6e3));if(1>=eE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ri(n,11)}else if((t.K||n.g==t)&&Nu(n),!hc(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&($m(i,i.h),i.h=null))}if(r.F){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,je(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=yE(r,r.J?r.pa:null,r.Y),o.K){tE(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(zh(a),Gc(a)),r.g=o}else dE(r);0<n.j.length&&Qh(n)}else l[0]!="stop"&&l[0]!="close"||ri(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ri(n,7):jm(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}gc(4)}catch{}}function WL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function QL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function GI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QL(t),r=WL(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var WI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function di(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof di){this.h=t.h,Cu(this,t.j),this.s=t.s,this.g=t.g,Ru(this,t.m),this.l=t.l;var e=t.i,n=new yc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),i_(this,n),this.o=t.o}else t&&(e=String(t).match(WI))?(this.h=!1,Cu(this,e[1]||"",!0),this.s=Ea(e[2]||""),this.g=Ea(e[3]||"",!0),Ru(this,e[4]),this.l=Ea(e[5]||"",!0),i_(this,e[6]||"",!0),this.o=Ea(e[7]||"")):(this.h=!1,this.i=new yc(null,this.h))}di.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ta(e,o_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ta(e,o_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ta(n,n.charAt(0)=="/"?ZL:JL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ta(n,tM)),t.join("")};function Cr(t){return new di(t)}function Cu(t,e,n){t.j=n?Ea(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ru(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function i_(t,e,n){e instanceof yc?(t.i=e,nM(t.i,t.h)):(n||(e=Ta(e,eM)),t.i=new yc(e,t.h))}function je(t,e,n){t.i.set(e,n)}function Hh(t){return je(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ea(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ta(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var o_=/[#\/\?@]/g,JL=/[#\?:]/g,ZL=/[#\?]/g,eM=/[#\?@]/g,tM=/#/g;function yc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&YL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=yc.prototype;K.add=function(t,e){Cs(this),this.i=null,t=Ho(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function QI(t,e){Cs(t),e=Ho(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function YI(t,e){return Cs(t),e=Ho(t,e),t.g.has(e)}K.forEach=function(t,e){Cs(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};K.ta=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};K.Z=function(t){Cs(this);let e=[];if(typeof t=="string")YI(this,t)&&(e=e.concat(this.g.get(Ho(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return Cs(this),this.i=null,t=Ho(this,t),YI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function XI(t,e,n){QI(t,e),0<n.length&&(t.i=null,t.g.set(Ho(t,e),xm(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ho(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nM(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(QI(this,r),XI(this,s,n))},t)),t.j=e}var rM=class{constructor(t,e){this.g=t,this.map=e}};function JI(t){this.l=t||sM,fe.PerformanceNavigationTiming?(t=fe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(fe.g&&fe.g.Ka&&fe.g.Ka()&&fe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sM=10;function ZI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function eE(t){return t.h?1:t.g?t.g.size:0}function Kf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $m(t,e){t.g?t.g.add(e):t.h=e}function tE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}JI.prototype.cancel=function(){if(this.i=nE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return xm(t.i)}var iM=class{stringify(t){return fe.JSON.stringify(t,void 0)}parse(t){return fe.JSON.parse(t,void 0)}};function oM(){this.g=new iM}function aM(t,e,n){const r=n||"";try{GI(t,function(s,i){let o=s;jc(s)&&(o=Pm(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function cM(t,e){const n=new Vh;if(fe.Image){const r=new Image;r.onload=bl(El,n,r,"TestLoadImage: loaded",!0,e),r.onerror=bl(El,n,r,"TestLoadImage: error",!1,e),r.onabort=bl(El,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=bl(El,n,r,"TestLoadImage: timeout",!1,e),fe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function El(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Wc(t){this.l=t.fc||null,this.j=t.ob||!1}Tt(Wc,Mm);Wc.prototype.g=function(){return new Kh(this.l,this.j)};Wc.prototype.i=function(t){return function(){return t}}({});function Kh(t,e){Et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Vm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Tt(Kh,Et);var Vm=0;K=Kh.prototype;K.open=function(t,e){if(this.readyState!=Vm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vc(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||fe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qc(this)),this.readyState=Vm};K.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vc(this)),this.g&&(this.readyState=3,vc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof fe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function rE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}K.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qc(this):vc(this),this.readyState==3&&rE(this)}};K.Za=function(t){this.g&&(this.response=this.responseText=t,Qc(this))};K.Ya=function(t){this.g&&(this.response=t,Qc(this))};K.ka=function(){this.g&&Qc(this)};function Qc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vc(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Kh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lM=fe.JSON.parse;function tt(t){Et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sE,this.L=this.M=!1}Tt(tt,Et);var sE="",uM=/^https?$/i,hM=["POST","PUT"];K=tt.prototype;K.Oa=function(t){this.M=t};K.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jf.g(),this.C=this.u?s_(this.u):s_(jf),this.g.onreadystatechange=Vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){a_(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=fe.FormData&&t instanceof fe.FormData,!(0<=bI(hM,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{aE(this),0<this.B&&((this.L=dM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Vt(this.ua,this)):this.A=Lm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){a_(this,i)}};function dM(t){return wo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.ua=function(){typeof Tm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Dt(this,"timeout"),this.abort(8))};function a_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,iE(t),Gh(t)}function iE(t){t.F||(t.F=!0,Dt(t,"complete"),Dt(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Dt(this,"complete"),Dt(this,"abort"),Gh(this))};K.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gh(this,!0)),tt.$.N.call(this)};K.La=function(){this.s||(this.G||this.v||this.l?oE(this):this.kb())};K.kb=function(){oE(this)};function oE(t){if(t.h&&typeof Tm<"u"&&(!t.C[1]||nr(t)!=4||t.da()!=2)){if(t.v&&nr(t)==4)Lm(t.La,0,t);else if(Dt(t,"readystatechange"),nr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(WI)[1]||null;!s&&fe.self&&fe.self.location&&(s=fe.self.location.protocol.slice(0,-1)),r=!uM.test(s?s.toLowerCase():"")}n=r}if(n)Dt(t,"complete"),Dt(t,"success");else{t.m=6;try{var i=2<nr(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",iE(t)}}finally{Gh(t)}}}}function Gh(t,e){if(t.g){aE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function aE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(fe.clearTimeout(t.A),t.A=null)}K.isActive=function(){return!!this.g};function nr(t){return t.g?t.g.readyState:0}K.da=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}};K.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lM(e)}};function c_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case sE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fM(t){const e={};t=(t.g&&2<=nr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(hc(t[r]))continue;var n=UL(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}NL(e,function(r){return r.join(", ")})}K.Ia=function(){return this.m};K.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cE(t){let e="";return Am(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):je(t,e,n))}function la(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function lE(t){this.Ga=0,this.j=[],this.l=new Vh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=la("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=la("baseRetryDelayMs",5e3,t),this.hb=la("retryDelaySeedMs",1e4,t),this.eb=la("forwardChannelMaxRetries",2,t),this.xa=la("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new JI(t&&t.concurrentRequestLimit),this.Ja=new oM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}K=lE.prototype;K.ra=8;K.H=1;function jm(t){if(uE(t),t.H==3){var e=t.W++,n=Cr(t.I);if(je(n,"SID",t.K),je(n,"RID",e),je(n,"TYPE","terminate"),Yc(t,n),e=new Kc(t,t.l,e),e.L=2,e.v=Hh(Cr(n)),n=!1,fe.navigator&&fe.navigator.sendBeacon)try{n=fe.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&fe.Image&&(new Image().src=e.v,n=!0),n||(e.g=vE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Gc(e)}gE(t)}function Wh(t){t.g&&(zm(t),t.g.cancel(),t.g=null)}function uE(t){Wh(t),t.u&&(fe.clearTimeout(t.u),t.u=null),Nu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&fe.clearTimeout(t.m),t.m=null)}function Qh(t){if(!ZI(t.i)&&!t.m){t.m=!0;var e=t.Na;fc||DI(),pc||(fc(),pc=!0),Dm.add(e,t),t.C=0}}function pM(t,e){return eE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zc(Vt(t.Na,t,e),mE(t,t.C)),t.C++,!0)}K.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Kc(this,this.l,t);let i=this.s;if(this.U&&(i?(i=xI(i),SI(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=hE(this,s,e),n=Cr(this.I),je(n,"RID",t),je(n,"CVER",22),this.F&&je(n,"X-HTTP-Session-Id",this.F),Yc(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(cE(i)))+"&"+e:this.o&&Bm(n,this.o,i)),$m(this.i,s),this.bb&&je(n,"TYPE","init"),this.P?(je(n,"$req",e),je(n,"SID","null"),s.aa=!0,zf(s,n,null)):zf(s,n,e),this.H=2}}else this.H==3&&(t?l_(this,t):this.j.length==0||ZI(this.i)||l_(this))};function l_(t,e){var n;e?n=e.m:n=t.W++;const r=Cr(t.I);je(r,"SID",t.K),je(r,"RID",n),je(r,"AID",t.V),Yc(t,r),t.o&&t.s&&Bm(r,t.o,t.s),n=new Kc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=hE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),$m(t.i,n),zf(n,r,e)}function Yc(t,e){t.na&&Am(t.na,function(n,r){je(e,r,n)}),t.h&&GI({},function(n,r){je(e,r,n)})}function hE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Vt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{aM(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function dE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;fc||DI(),pc||(fc(),pc=!0),Dm.add(e,t),t.A=0}}function qm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zc(Vt(t.Ma,t),mE(t,t.A)),t.A++,!0)}K.Ma=function(){if(this.u=null,fE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zc(Vt(this.jb,this),t)}};K.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),Wh(this),fE(this))};function zm(t){t.B!=null&&(fe.clearTimeout(t.B),t.B=null)}function fE(t){t.g=new Kc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Cr(t.wa);je(e,"RID","rpc"),je(e,"SID",t.K),je(e,"AID",t.V),je(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&je(e,"TO",t.qa),je(e,"TYPE","xmlhttp"),Yc(t,e),t.o&&t.s&&Bm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Hh(Cr(e)),n.s=null,n.S=!0,qI(n,t)}K.ib=function(){this.v!=null&&(this.v=null,Wh(this),qm(this),Kt(19))};function Nu(t){t.v!=null&&(fe.clearTimeout(t.v),t.v=null)}function pE(t,e){var n=null;if(t.g==e){Nu(t),zm(t),t.g=null;var r=2}else if(Kf(t.i,e))n=e.F,tE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Bh(),Dt(r,new $I(r,n)),Qh(t)}else dE(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&pM(t,e)||r==2&&qm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ri(t,5);break;case 4:ri(t,10);break;case 3:ri(t,6);break;default:ri(t,2)}}}function mE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ri(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Vt(t.pb,t);n||(n=new di("//www.google.com/images/cleardot.gif"),fe.location&&fe.location.protocol=="http"||Cu(n,"https"),Hh(n)),cM(n.toString(),r)}else Kt(2);t.H=0,t.h&&t.h.za(e),gE(t),uE(t)}K.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function gE(t){if(t.H=0,t.ma=[],t.h){const e=nE(t.i);(e.length!=0||t.j.length!=0)&&(Zv(t.ma,e),Zv(t.ma,t.j),t.i.i.length=0,xm(t.j),t.j.length=0),t.h.ya()}}function yE(t,e,n){var r=n instanceof di?Cr(n):new di(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ru(r,r.m);else{var s=fe.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new di(null);r&&Cu(i,r),e&&(i.g=e),s&&Ru(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&je(r,n,e),je(r,"VER",t.ra),Yc(t,r),r}function vE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new tt(new Wc({ob:!0})):new tt(t.va),e.Oa(t.J),e}K.isActive=function(){return!!this.h&&this.h.isActive(this)};function _E(){}K=_E.prototype;K.Ba=function(){};K.Aa=function(){};K.za=function(){};K.ya=function(){};K.isActive=function(){return!0};K.Va=function(){};function Pu(){if(wo&&!(10<=Number(AL)))throw Error("Environmental error: no available transport.")}Pu.prototype.g=function(t,e){return new gn(t,e)};function gn(t,e){Et.call(this),this.g=new lE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!hc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ko(this)}Tt(gn,Et);gn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=yE(t,null,t.Y),Qh(t)};gn.prototype.close=function(){jm(this.g)};gn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pm(t),t=n);e.j.push(new rM(e.fb++,t)),e.H==3&&Qh(e)};gn.prototype.N=function(){this.g.h=null,delete this.j,jm(this.g),delete this.g,gn.$.N.call(this)};function wE(t){Fm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Tt(wE,Fm);function bE(){Um.call(this),this.status=1}Tt(bE,Um);function Ko(t){this.g=t}Tt(Ko,_E);Ko.prototype.Ba=function(){Dt(this.g,"a")};Ko.prototype.Aa=function(t){Dt(this.g,new wE(t))};Ko.prototype.za=function(t){Dt(this.g,new bE)};Ko.prototype.ya=function(){Dt(this.g,"b")};function mM(){this.blockSize=-1}function qn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Tt(qn,mM);qn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}qn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Qd(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Qd(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Qd(this,r),s=0;break}}this.h=s,this.i+=e};qn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Le(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var gM={};function Hm(t){return-128<=t&&128>t?TL(t,function(e){return new Le([e|0],0>e?-1:0)}):new Le([t|0],0>t?-1:0)}function rr(t){if(isNaN(t)||!isFinite(t))return lo;if(0>t)return Rt(rr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Gf;return new Le(e,0)}function IE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Rt(IE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rr(Math.pow(e,8)),r=lo,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=rr(Math.pow(e,i)),r=r.R(i).add(rr(o))):(r=r.R(n),r=r.add(rr(o)))}return r}var Gf=4294967296,lo=Hm(0),Wf=Hm(1),u_=Hm(16777216);K=Le.prototype;K.ea=function(){if(bn(this))return-Rt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Gf+r)*e,e*=Gf}return t};K.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(br(this))return"0";if(bn(this))return"-"+Rt(this).toString(t);for(var e=rr(Math.pow(t,6)),n=this,r="";;){var s=Ou(n,e).g;n=Du(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,br(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};K.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function br(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bn(t){return t.h==-1}K.X=function(t){return t=Du(this,t),bn(t)?-1:br(t)?0:1};function Rt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Le(n,~t.h).add(Wf)}K.abs=function(){return bn(this)?Rt(this):this};K.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Le(n,n[n.length-1]&-2147483648?-1:0)};function Du(t,e){return t.add(Rt(e))}K.R=function(t){if(br(this)||br(t))return lo;if(bn(this))return bn(t)?Rt(this).R(Rt(t)):Rt(Rt(this).R(t));if(bn(t))return Rt(this.R(Rt(t)));if(0>this.X(u_)&&0>t.X(u_))return rr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Tl(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Tl(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Tl(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Tl(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Le(n,0)};function Tl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ua(t,e){this.g=t,this.h=e}function Ou(t,e){if(br(e))throw Error("division by zero");if(br(t))return new ua(lo,lo);if(bn(t))return e=Ou(Rt(t),e),new ua(Rt(e.g),Rt(e.h));if(bn(e))return e=Ou(t,Rt(e)),new ua(Rt(e.g),e.h);if(30<t.g.length){if(bn(t)||bn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wf,r=e;0>=r.X(t);)n=h_(n),r=h_(r);var s=zi(n,1),i=zi(r,1);for(r=zi(r,2),n=zi(n,2);!br(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=zi(r,1),n=zi(n,1)}return e=Du(t,s.R(e)),new ua(s,e)}for(s=lo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=rr(n),o=i.R(e);bn(o)||0<o.X(t);)n-=r,i=rr(n),o=i.R(e);br(i)&&(i=Wf),s=s.add(i),t=Du(t,o)}return new ua(s,t)}K.gb=function(t){return Ou(this,t).h};K.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Le(n,this.h&t.h)};K.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Le(n,this.h|t.h)};K.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Le(n,this.h^t.h)};function h_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Le(n,t.h)}function zi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Le(s,t.h)}Pu.prototype.createWebChannel=Pu.prototype.g;gn.prototype.send=gn.prototype.u;gn.prototype.open=gn.prototype.m;gn.prototype.close=gn.prototype.close;jh.NO_ERROR=0;jh.TIMEOUT=8;jh.HTTP_ERROR=6;VI.COMPLETE="complete";BI.EventType=Hc;Hc.OPEN="a";Hc.CLOSE="b";Hc.ERROR="c";Hc.MESSAGE="d";Et.prototype.listen=Et.prototype.O;tt.prototype.listenOnce=tt.prototype.P;tt.prototype.getLastError=tt.prototype.Sa;tt.prototype.getLastErrorCode=tt.prototype.Ia;tt.prototype.getStatus=tt.prototype.da;tt.prototype.getResponseJson=tt.prototype.Wa;tt.prototype.getResponseText=tt.prototype.ja;tt.prototype.send=tt.prototype.ha;tt.prototype.setWithCredentials=tt.prototype.Oa;qn.prototype.digest=qn.prototype.l;qn.prototype.reset=qn.prototype.reset;qn.prototype.update=qn.prototype.j;Le.prototype.add=Le.prototype.add;Le.prototype.multiply=Le.prototype.R;Le.prototype.modulo=Le.prototype.gb;Le.prototype.compare=Le.prototype.X;Le.prototype.toNumber=Le.prototype.ea;Le.prototype.toString=Le.prototype.toString;Le.prototype.getBits=Le.prototype.D;Le.fromNumber=rr;Le.fromString=IE;var yM=function(){return new Pu},vM=function(){return Bh()},Yd=jh,_M=VI,wM=Oi,d_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bM=Wc,xl=BI,IM=tt,EM=qn,uo=Le;const f_="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let Go="9.22.2";/**
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
 */const ys=new xh("@firebase/firestore");function Qf(){return ys.logLevel}function TM(t){ys.setLogLevel(t)}function P(t,...e){if(ys.logLevel<=Te.DEBUG){const n=e.map(Km);ys.debug(`Firestore (${Go}): ${t}`,...n)}}function rt(t,...e){if(ys.logLevel<=Te.ERROR){const n=e.map(Km);ys.error(`Firestore (${Go}): ${t}`,...n)}}function zn(t,...e){if(ys.logLevel<=Te.WARN){const n=e.map(Km);ys.warn(`Firestore (${Go}): ${t}`,...n)}}function Km(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+t;throw rt(e),new Error(e)}function te(t,e){t||Q()}function xM(t,e){t||Q()}function H(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class It{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class EE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class AM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kM{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new It;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new It,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new It)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new EE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new _t(e)}}class CM{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class RM{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new CM(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PM{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.T=n.token,new NM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class TE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function bo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function xE(t){return t+"\0"}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new We(0,0))}static max(){return new ee(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _c{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _c.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _c?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends _c{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const OM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends _c{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return OM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new R(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new R(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(xe.fromString(e))}static fromName(e){return new q(xe.fromString(e).popFirst(5))}static empty(){return new q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new xe(e.slice()))}}/**
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
 */class SE{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function Yf(t){return t.fields.find(e=>e.kind===2)}function Bs(t){return t.fields.filter(e=>e.kind!==2)}SE.UNKNOWN_ID=-1;class LM{constructor(e,n){this.fieldPath=e,this.kind=n}}class Lu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Lu(0,yn.min())}}function AE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new yn(s,q.empty(),e)}function kE(t){return new yn(t.readTime,t.key,-1)}class yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yn(ee.min(),q.empty(),-1)}static max(){return new yn(ee.max(),q.empty(),-1)}}function Gm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rs(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==CE)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Yh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new It,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Ua(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const s=Wm(r.target.error);this.v.reject(new Ua(e,s))}}static open(e,n,r,s){try{return new Yh(n,e.transaction(s,r))}catch(i){throw new Ua(n,i)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new FM(n)}}class Mn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,Mn.S(Xe())===12.2&&rt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Ks(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!rc())return!1;if(Mn.C())return!0;const e=Xe(),n=Mn.S(e),r=0<n&&n<10,s=Mn.N(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Ua(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new R(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ua(e,o))},s.onupgradeneeded=i=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.O(o,s.transaction,i.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Yh.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),b.reject(l))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class MM{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ks(this.L.delete())}}class Ua extends R{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ns(t){return t.name==="IndexedDbTransactionError"}class FM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ks(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Ks(this.store.add(e))}get(e){return Ks(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Ks(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Ks(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.W(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new b((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.W(s,n)}Z(e){const n=this.cursor({});return new b((r,s)=>{n.onerror=i=>{const o=Wm(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new b((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new MM(a),l=n(a.primaryKey,a.value,c);if(l instanceof b){const u=l.catch(h=>(c.done(),b.reject(h)));r.push(u)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ks(t){return new b((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Wm(r.target.error);n(s)}})}let p_=!1;function Wm(t){const e=Mn.S(Xe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return p_||(p_=!0,setTimeout(()=>{throw r},0)),r}}return t}class UM{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){Ns(n)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Rs(n)}await this.et(6e4)})}}class $M{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let s=n,i=!0;return b.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(s,i)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=kE(i);Gm(o,r)>0&&(r=o)}),new yn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Zt.ct=-1;function Xc(t){return t==null}function wc(t){return t===0&&1/t==-1/0}function NE(t){return typeof t=="number"&&Number.isInteger(t)&&!wc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=m_(e)),e=VM(t.get(n),e);return m_(e)}function VM(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function m_(t){return t+""}function sr(t){const e=t.length;if(te(e>=2),e===2)return te(t.charAt(0)===""&&t.charAt(1)===""),xe.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&Q(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:Q()}i=o+2}return new xe(r)}/**
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
 */const g_=["userId","batchId"];/**
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
 */function Xl(t,e){return[t,Gt(e)]}function PE(t,e,n){return[t,Gt(e),n]}const BM={},jM=["prefixPath","collectionGroup","readTime","documentId"],qM=["prefixPath","collectionGroup","documentId"],zM=["collectionGroup","readTime","prefixPath","documentId"],HM=["canonicalId","targetId"],KM=["targetId","path"],GM=["path","targetId"],WM=["collectionId","parent"],QM=["indexId","uid"],YM=["uid","sequenceNumber"],XM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],JM=["indexId","uid","orderedDocumentKey"],ZM=["userId","collectionPath","documentId"],e2=["userId","collectionPath","largestBatchId"],t2=["userId","collectionGroup","largestBatchId"],DE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],n2=[...DE,"documentOverlays"],OE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],LE=OE,r2=[...LE,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends RE{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function xt(t,e){const n=H(t);return Mn.M(n.ht,e)}/**
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
 */function y_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ME(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||Ct.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ct.RED,this.left=s??Ct.EMPTY,this.right=i??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new v_(this.data.getIterator())}getIteratorFrom(e){return new v_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class v_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Hi(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new en([])}unionWith(e){let n=new ze(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class FE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FE("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const i2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(t){if(te(!!t),typeof t=="string"){let e=0;const n=i2.exec(t);if(te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _s(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qm(t){const e=t.mapValue.fields.__previous_value__;return Xh(e)?Qm(e):e}function bc(t){const e=vs(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class o2{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ws{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ws&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Jl={nullValue:"NULL_VALUE"};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xh(t)?4:UE(t)?9007199254740991:10:Q()}function pr(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bc(t).isEqual(bc(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=vs(r.timestampValue),o=vs(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return _s(r.bytesValue).isEqual(_s(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return et(r.geoPointValue.latitude)===et(s.geoPointValue.latitude)&&et(r.geoPointValue.longitude)===et(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return et(r.integerValue)===et(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=et(r.doubleValue),o=et(s.doubleValue);return i===o?wc(i)===wc(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return bo(t.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(y_(i)!==y_(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!pr(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Ic(t,e){return(t.values||[]).find(n=>pr(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=et(s.integerValue||s.doubleValue),a=et(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return __(t.timestampValue,e.timestampValue);case 4:return __(bc(t),bc(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(s,i){const o=_s(s),a=_s(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=me(et(s.latitude),et(i.latitude));return o!==0?o:me(et(s.longitude),et(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bs(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===rs.mapValue&&i===rs.mapValue)return 0;if(s===rs.mapValue)return 1;if(i===rs.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const d=bs(o[a[u]],c[l[u]]);if(d!==0)return d}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function __(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=vs(t),r=vs(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Io(t){return Jf(t)}function Jf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=vs(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Jf(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Jf(r.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function bi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zf(t){return!!t&&"integerValue"in t}function Ec(t){return!!t&&"arrayValue"in t}function w_(t){return!!t&&"nullValue"in t}function b_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zl(t){return!!t&&"mapValue"in t}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function a2(t){return"nullValue"in t?Jl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?bi(ws.empty(),q.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Q()}function c2(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?bi(ws.empty(),q.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?rs:Q()}function I_(t,e){const n=bs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function E_(t,e){const n=bs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=$a(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Zl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Li(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt($a(this.value))}}function $E(t){const e=[];return Li(t.fields,(n,r)=>{const s=new st([n]);if(Zl(r)){const i=$E(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new en(e)}/**
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
 */class qe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qe(e,0,ee.min(),ee.min(),ee.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new qe(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new qe(e,2,n,ee.min(),ee.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,ee.min(),ee.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Is{constructor(e,n){this.position=e,this.inclusive=n}}function T_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=bs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function x_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function l2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class VE{}class we extends VE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new u2(e,n,r):n==="array-contains"?new f2(e,r):n==="in"?new KE(e,r):n==="not-in"?new p2(e,r):n==="array-contains-any"?new m2(e,r):new we(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new h2(e,r):new d2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bs(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Oe extends VE{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Oe(e,n)}matches(e){return Eo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Eo(t){return t.op==="and"}function ep(t){return t.op==="or"}function Ym(t){return BE(t)&&Eo(t)}function BE(t){for(const e of t.filters)if(e instanceof Oe)return!1;return!0}function tp(t){if(t instanceof we)return t.field.canonicalString()+t.op.toString()+Io(t.value);if(Ym(t))return t.filters.map(e=>tp(e)).join(",");{const e=t.filters.map(n=>tp(n)).join(",");return`${t.op}(${e})`}}function jE(t,e){return t instanceof we?function(n,r){return r instanceof we&&n.op===r.op&&n.field.isEqual(r.field)&&pr(n.value,r.value)}(t,e):t instanceof Oe?function(n,r){return r instanceof Oe&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&jE(i,r.filters[o]),!0):!1}(t,e):void Q()}function qE(t,e){const n=t.filters.concat(e);return Oe.create(n,t.op)}function zE(t){return t instanceof we?function(e){return`${e.field.canonicalString()} ${e.op} ${Io(e.value)}`}(t):t instanceof Oe?function(e){return e.op.toString()+" {"+e.getFilters().map(zE).join(" ,")+"}"}(t):"Filter"}class u2 extends we{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class h2 extends we{constructor(e,n){super(e,"in",n),this.keys=HE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class d2 extends we{constructor(e,n){super(e,"not-in",n),this.keys=HE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function HE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class f2 extends we{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ec(n)&&Ic(n.arrayValue,this.value)}}class KE extends we{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ic(this.value.arrayValue,n)}}class p2 extends we{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ic(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ic(this.value.arrayValue,n)}}class m2 extends we{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ec(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ic(this.value.arrayValue,r))}}/**
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
 */class g2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function np(t,e=null,n=[],r=[],s=null,i=null,o=null){return new g2(t,e,n,r,s,i,o)}function Ii(t){const e=H(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),e.dt=n}return e.dt}function Jc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!l2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!x_(t.startAt,e.startAt)&&x_(t.endAt,e.endAt)}function Mu(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Fu(t,e){return t.filters.filter(n=>n instanceof we&&n.field.isEqual(e))}function S_(t,e,n){let r=Jl,s=!0;for(const i of Fu(t,e)){let o=Jl,a=!0;switch(i.op){case"<":case"<=":o=a2(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Jl}I_({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];I_({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function A_(t,e,n){let r=rs,s=!0;for(const i of Fu(t,e)){let o=rs,a=!0;switch(i.op){case">=":case">":o=c2(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=rs}E_({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];E_({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Mr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function GE(t,e,n,r,s,i,o,a){return new Mr(t,e,n,r,s,i,o,a)}function Wo(t){return new Mr(t)}function k_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Jm(t){return t.collectionGroup!==null}function fi(t){const e=H(t);if(e.wt===null){e.wt=[];const n=Jh(e),r=Xm(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ho(n)),e.wt.push(new ho(st.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ho(st.keyField(),i))}}}return e.wt}function on(t){const e=H(t);if(!e._t)if(e.limitType==="F")e._t=np(e.path,e.collectionGroup,fi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of fi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ho(i.field,o))}const r=e.endAt?new Is(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Is(e.startAt.position,e.startAt.inclusive):null;e._t=np(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function rp(t,e){e.getFirstInequalityField(),Jh(t);const n=t.filters.concat([e]);return new Mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Uu(t,e,n){return new Mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zc(t,e){return Jc(on(t),on(e))&&t.limitType===e.limitType}function WE(t){return`${Ii(on(t))}|lt:${t.limitType}`}function sp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>zE(r)).join(", ")}]`),Xc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),`Target(${n})`}(on(t))}; limitType=${t.limitType})`}function el(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of fi(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=T_(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,fi(n),r)||n.endAt&&!function(s,i,o){const a=T_(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,fi(n),r))}(t,e)}function QE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YE(t){return(e,n)=>{let r=!1;for(const s of fi(t)){const i=y2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function y2(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?bs(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ME(this.inner)}size(){return this.innerSize}}/**
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
 */const v2=new $e(q.comparator);function tn(){return v2}const XE=new $e(q.comparator);function xa(...t){let e=XE;for(const n of t)e=e.insert(n.key,n);return e}function JE(t){let e=XE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ir(){return Va()}function ZE(){return Va()}function Va(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const _2=new $e(q.comparator),w2=new ze(q.comparator);function ge(...t){let e=w2;for(const n of t)e=e.add(n);return e}const b2=new ze(me);function Zm(){return b2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wc(e)?"-0":e}}function tT(t){return{integerValue:""+t}}function nT(t,e){return NE(e)?tT(e):eT(t,e)}/**
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
 */class Zh{constructor(){this._=void 0}}function I2(t,e,n){return t instanceof To?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Xh(s)&&(s=Qm(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ei?sT(t,e):t instanceof Ti?iT(t,e):function(r,s){const i=rT(r,s),o=C_(i)+C_(r.gt);return Zf(i)&&Zf(r.gt)?tT(o):eT(r.serializer,o)}(t,e)}function E2(t,e,n){return t instanceof Ei?sT(t,e):t instanceof Ti?iT(t,e):n}function rT(t,e){return t instanceof xo?Zf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class To extends Zh{}class Ei extends Zh{constructor(e){super(),this.elements=e}}function sT(t,e){const n=oT(e);for(const r of t.elements)n.some(s=>pr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ti extends Zh{constructor(e){super(),this.elements=e}}function iT(t,e){let n=oT(e);for(const r of t.elements)n=n.filter(s=>!pr(s,r));return{arrayValue:{values:n}}}class xo extends Zh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function C_(t){return et(t.integerValue||t.doubleValue)}function oT(t){return Ec(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tl{constructor(e,n){this.field=e,this.transform=n}}function T2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ei&&r instanceof Ei||n instanceof Ti&&r instanceof Ti?bo(n.elements,r.elements,pr):n instanceof xo&&r instanceof xo?pr(n.gt,r.gt):n instanceof To&&r instanceof To}(t.transform,e.transform)}class x2{constructor(e,n){this.version=e,this.transformResults=n}}class Ge{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ed{}function aT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yo(t.key,Ge.none()):new Qo(t.key,t.data,Ge.none());{const n=t.data,r=Nt.empty();let s=new ze(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fr(t.key,r,new en(s.toArray()),Ge.none())}}function S2(t,e,n){t instanceof Qo?function(r,s,i){const o=r.value.clone(),a=N_(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(r,s,i){if(!eu(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=N_(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(cT(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ba(t,e,n,r){return t instanceof Qo?function(s,i,o,a){if(!eu(s.precondition,i))return o;const c=s.value.clone(),l=P_(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(s,i,o,a){if(!eu(s.precondition,i))return o;const c=P_(s.fieldTransforms,a,i),l=i.data;return l.setAll(cT(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return eu(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function A2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=rT(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function R_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&bo(n,r,(s,i)=>T2(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qo extends ed{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends ed{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function N_(t,e,n){const r=new Map;te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,E2(o,a,n[s]))}return r}function P_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,I2(i,o,e))}return r}class Yo extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eg extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tg{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&S2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=aT(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(n,r)=>R_(n,r))&&bo(this.baseMutations,e.baseMutations,(n,r)=>R_(n,r))}}class ng{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){te(e.mutations.length===r.length);let s=_2;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ng(e,n,r,s)}}/**
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
 */class rg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class k2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ut,Ee;function lT(t){switch(t){default:return Q();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function uT(t){if(t===void 0)return rt("GRPC error has no .code"),I.UNKNOWN;switch(t){case ut.OK:return I.OK;case ut.CANCELLED:return I.CANCELLED;case ut.UNKNOWN:return I.UNKNOWN;case ut.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ut.INTERNAL:return I.INTERNAL;case ut.UNAVAILABLE:return I.UNAVAILABLE;case ut.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ut.NOT_FOUND:return I.NOT_FOUND;case ut.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ut.ABORTED:return I.ABORTED;case ut.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ut.DATA_LOSS:return I.DATA_LOSS;default:return Q()}}(Ee=ut||(ut={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class sg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Al}static getOrCreateInstance(){return Al===null&&(Al=new sg),Al}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Al=null;/**
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
 */function hT(){return new TextEncoder}/**
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
 */const C2=new uo([4294967295,4294967295],0);function D_(t){const e=hT().encode(t),n=new EM;return n.update(e),new Uint8Array(n.digest())}function O_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new uo([n,r],0),new uo([s,i],0)]}class ig{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Sa(`Invalid padding: ${n}`);if(r<0)throw new Sa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=uo.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(uo.fromNumber(r)));return s.compare(C2)===1&&(s=new uo([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=D_(e),[r,s]=O_(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ig(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=D_(e),[r,s]=O_(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nl(ee.min(),s,new $e(me),tn(),ge())}}class rl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new rl(r,n,ge(),ge(),ge())}}/**
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
 */class tu{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class dT{constructor(e,n){this.targetId=e,this.Vt=n}}class fT{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class L_{constructor(){this.St=0,this.Dt=F_(),this.Ct=gt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ge(),n=ge(),r=ge();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new rl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=F_()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class R2{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=tn(),this.zt=M_(),this.Wt=new $e(me)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(Mu(o))if(s===0){const a=new q(o.path);this.Yt(r,a,qe.newNoDocument(a,ee.min()))}else te(s===1);else{const a=this.ie(r);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=sg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,m,g,_,T;const S={localCacheCount:u,existenceFilterCount:h.count},A=h.unchangedNames;return A&&(S.bloomFilter={applied:l===0,hashCount:(d=A==null?void 0:A.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(g=(m=(f=A==null?void 0:A.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&g!==void 0?g:0,padding:(T=(_=A==null?void 0:A.bits)===null||_===void 0?void 0:_.padding)!==null&&T!==void 0?T:0}),S}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=_s(i).toUint8Array()}catch(u){if(u instanceof FE)return zn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new ig(c,o,a)}catch(u){return zn(u instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Mu(a.target)){const c=new q(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,qe.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=ge();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new nl(e,n,this.Wt,this.jt,r);return this.jt=tn(),this.zt=M_(),this.Wt=new $e(me),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new L_,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ze(me),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new L_),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function M_(){return new $e(q.comparator)}function F_(){return new $e(q.comparator)}const N2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),P2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),D2=(()=>({and:"AND",or:"OR"}))();class O2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ip(t,e){return t.useProto3Json||Xc(e)?e:{value:e}}function So(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function L2(t,e){return So(t,e.toTimestamp())}function ot(t){return te(!!t),ee.fromTimestamp(function(e){const n=vs(e);return new We(n.seconds,n.nanos)}(t))}function og(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function mT(t){const e=xe.fromString(t);return te(TT(e)),e}function Tc(t,e){return og(t.databaseId,e.path)}function lr(t,e){const n=mT(e);if(n.get(1)!==t.databaseId.projectId)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(yT(n))}function op(t,e){return og(t.databaseId,e)}function gT(t){const e=mT(t);return e.length===4?xe.emptyPath():yT(e)}function xc(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yT(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function U_(t,e,n){return{name:Tc(t,e),fields:n.value.mapValue.fields}}function vT(t,e,n){const r=lr(t,e.name),s=ot(e.updateTime),i=e.createTime?ot(e.createTime):ee.min(),o=new Nt({mapValue:{fields:e.fields}}),a=qe.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function M2(t,e){return"found"in e?function(n,r){te(!!r.found),r.found.name,r.found.updateTime;const s=lr(n,r.found.name),i=ot(r.found.updateTime),o=r.found.createTime?ot(r.found.createTime):ee.min(),a=new Nt({mapValue:{fields:r.found.fields}});return qe.newFoundDocument(s,i,o,a)}(t,e):"missing"in e?function(n,r){te(!!r.missing),te(!!r.readTime);const s=lr(n,r.missing),i=ot(r.readTime);return qe.newNoDocument(s,i)}(t,e):Q()}function F2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(te(l===void 0||typeof l=="string"),gt.fromBase64String(l||"")):(te(l===void 0||l instanceof Uint8Array),gt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:uT(c.code);return new R(l,c.message||"")}(o);n=new fT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lr(t,r.document.name),i=ot(r.document.updateTime),o=r.document.createTime?ot(r.document.createTime):ee.min(),a=new Nt({mapValue:{fields:r.document.fields}}),c=qe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new tu(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lr(t,r.document),i=r.readTime?ot(r.readTime):ee.min(),o=qe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lr(t,r.document),i=r.removedTargetIds||[];n=new tu([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new k2(s,i),a=r.targetId;n=new dT(a,o)}}return n}function Sc(t,e){let n;if(e instanceof Qo)n={update:U_(t,e.key,e.value)};else if(e instanceof Yo)n={delete:Tc(t,e.key)};else if(e instanceof Fr)n={update:U_(t,e.key,e.data),updateMask:q2(e.fieldMask)};else{if(!(e instanceof eg))return Q();n={verify:Tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof To)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ei)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xo)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:L2(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function ap(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ge.updateTime(ot(s.updateTime)):s.exists!==void 0?Ge.exists(s.exists):Ge.none()}(e.currentDocument):Ge.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)te(o.setToServerValue==="REQUEST_TIME"),a=new To;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Ei(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Ti(l)}else"increment"in o?a=new xo(i,o.increment):Q();const c=st.fromServerFormat(o.fieldPath);return new tl(c,a)}(t,s)):[];if(e.update){e.update.name;const s=lr(t,e.update.name),i=new Nt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new en(c.map(l=>st.fromServerFormat(l)))}(e.updateMask);return new Fr(s,i,o,n,r)}return new Qo(s,i,n,r)}if(e.delete){const s=lr(t,e.delete);return new Yo(s,n)}if(e.verify){const s=lr(t,e.verify);return new eg(s,n)}return Q()}function U2(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?ot(r.updateTime):ot(s);return i.isEqual(ee.min())&&(i=ot(s)),new x2(i,r.transformResults||[])}(n,e))):[]}function _T(t,e){return{documents:[op(t,e.path)]}}function wT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=op(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=op(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return ET(Oe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Qi(u.field),direction:V2(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ip(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function bT(t){let e=gT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=IT(u);return h instanceof Oe&&Ym(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ho(Yi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Xc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Is(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Is(d,h)}(n.endAt)),GE(e,s,o,i,a,"F",c,l)}function $2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function IT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Yi(e.unaryFilter.field);return we.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Yi(e.unaryFilter.field);return we.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yi(e.unaryFilter.field);return we.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yi(e.unaryFilter.field);return we.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return we.create(Yi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Oe.create(e.compositeFilter.filters.map(n=>IT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function V2(t){return N2[t]}function B2(t){return P2[t]}function j2(t){return D2[t]}function Qi(t){return{fieldPath:t.canonicalString()}}function Yi(t){return st.fromServerFormat(t.fieldPath)}function ET(t){return t instanceof we?function(e){if(e.op==="=="){if(b_(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NAN"}};if(w_(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(b_(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NOT_NAN"}};if(w_(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(e.field),op:B2(e.op),value:e.value}}}(t):t instanceof Oe?function(e){const n=e.getFilters().map(r=>ET(r));return n.length===1?n[0]:{compositeFilter:{op:j2(e.op),filters:n}}}(t):Q()}function q2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ir{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xT{constructor(e){this.fe=e}}function z2(t,e){let n;if(e.document)n=vT(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),s=Si(e.noDocument.readTime);n=qe.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q();{const r=q.fromSegments(e.unknownDocument.path),s=Si(e.unknownDocument.version);n=qe.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(r){const s=new We(r[0],r[1]);return ee.fromTimestamp(s)}(e.readTime)),n}function $_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:$u(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:Tc(s,i.key),fields:i.data.value.mapValue.fields,updateTime:So(s,i.version.toTimestamp()),createTime:So(s,i.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:xi(e.version)};else{if(!e.isUnknownDocument())return Q();r.unknownDocument={path:n.path.toArray(),version:xi(e.version)}}return r}function $u(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function xi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Si(t){const e=new We(t.seconds,t.nanoseconds);return ee.fromTimestamp(e)}function Gs(t,e){const n=(e.baseMutations||[]).map(i=>ap(t.fe,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>ap(t.fe,i)),s=We.fromMillis(e.localWriteTimeMs);return new tg(e.batchId,s,n,r)}function Aa(t){const e=Si(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Si(t.lastLimboFreeSnapshotVersion):ee.min();let r;var s;return t.query.documents!==void 0?(te((s=t.query).documents.length===1),r=on(Wo(gT(s.documents[0])))):r=function(i){return on(bT(i))}(t.query),new Ir(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,gt.fromBase64String(t.resumeToken))}function ST(t,e){const n=xi(e.snapshotVersion),r=xi(e.lastLimboFreeSnapshotVersion);let s;s=Mu(e.target)?_T(t.fe,e.target):wT(t.fe,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ii(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function ag(t){const e=bT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uu(e,e.limit,"L"):e}function Xd(t,e){return new rg(e.largestBatchId,ap(t.fe,e.overlayMutation))}function V_(t,e){const n=e.path.lastSegment();return[t,Gt(e.path.popLast()),n]}function B_(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:xi(r.readTime),documentKey:Gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{getBundleMetadata(e,n){return j_(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:Si(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return j_(e).put({bundleId:(r=n).id,createTime:xi(ot(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return q_(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:ag(s.bundledQuery),readTime:Si(s.readTime)};var s})}saveNamedQuery(e,n){return q_(e).put(function(r){return{name:r.name,readTime:xi(ot(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function j_(t){return xt(t,"bundles")}function q_(t){return xt(t,"namedQueries")}/**
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
 */class td{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new td(e,r)}getOverlay(e,n){return ha(e).get(V_(this.userId,n)).next(r=>r?Xd(this.serializer,r):null)}getOverlays(e,n){const r=ir();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new rg(n,o);s.push(this.we(e,a))}),b.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(Gt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(ha(e).J("collectionPathOverlayIndex",a))}),b.waitFor(i)}getOverlaysForCollection(e,n,r){const s=ir(),i=Gt(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ha(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Xd(this.serializer,c);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=ir();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ha(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Xd(this.serializer,l);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}we(e,n){return ha(e).put(function(r,s,i){const[o,a,c]=V_(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Sc(r.fe,i.mutation)}}(this.serializer,this.userId,n))}}function ha(t){return xt(t,"documentOverlays")}/**
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
 */class Ws{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(et(e.integerValue));else if("doubleValue"in e){const r=et(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),wc(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(_s(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?UE(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):Q()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const s of Object.keys(r))this.Te(s,n),this.me(r[s],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const s of r)this.me(s,n)}ve(e,n){this.ye(n,37),q.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Ws.Ve=new Ws;function K2(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function z_(t){const e=64-function(n){let r=0;for(let s=0;s<8;++s){const i=K2(255&n[s]);if(r+=i,i!==8)break}return r}(t);return Math.ceil(e/8)}class G2{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const s=n.codePointAt(0);this.De(240|s>>>18),this.De(128|63&s>>>12),this.De(128|63&s>>>6),this.De(128|63&s)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const s=n.codePointAt(0);this.Ne(240|s>>>18),this.Ne(128|63&s>>>12),this.Ne(128|63&s>>>6),this.Ne(128|63&s)}}this.ke()}Oe(e){const n=this.Fe(e),r=z_(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}Le(e){const n=this.Fe(e),r=z_(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class W2{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class Q2{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class da{constructor(){this.je=new G2,this.ze=new W2(this.je),this.We=new Q2(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Qs{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Qs(this.indexId,this.documentKey,this.arrayValue,r)}}function zr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=H_(t.arrayValue,e.arrayValue),n!==0?n:(n=H_(t.directionalValue,e.directionalValue),n!==0?n:q.comparator(t.documentKey,e.documentKey)))}function H_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class Y2{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){te(e.collectionGroup===this.collectionId);const n=Yf(e);if(n!==void 0&&!this.en(n))return!1;const r=Bs(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.en(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Ze!==void 0){if(!s.has(this.Ze.field.canonicalString())){const a=r[i];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function AT(t){var e,n;if(te(t instanceof we||t instanceof Oe),t instanceof we){if(t instanceof KE){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>we.create(t.field,"==",i)))||[];return Oe.create(s,"or")}return t}const r=t.filters.map(s=>AT(s));return Oe.create(r,t.op)}function X2(t){if(t.getFilters().length===0)return[];const e=up(AT(t));return te(kT(e)),cp(e)||lp(e)?[e]:e.getFilters()}function cp(t){return t instanceof we}function lp(t){return t instanceof Oe&&Ym(t)}function kT(t){return cp(t)||lp(t)||function(e){if(e instanceof Oe&&ep(e)){for(const n of e.getFilters())if(!cp(n)&&!lp(n))return!1;return!0}return!1}(t)}function up(t){if(te(t instanceof we||t instanceof Oe),t instanceof we)return t;if(t.filters.length===1)return up(t.filters[0]);const e=t.filters.map(r=>up(r));let n=Oe.create(e,t.op);return n=Vu(n),kT(n)?n:(te(n instanceof Oe),te(Eo(n)),te(n.filters.length>1),n.filters.reduce((r,s)=>cg(r,s)))}function cg(t,e){let n;return te(t instanceof we||t instanceof Oe),te(e instanceof we||e instanceof Oe),n=t instanceof we?e instanceof we?function(r,s){return Oe.create([r,s],"and")}(t,e):K_(t,e):e instanceof we?K_(e,t):function(r,s){if(te(r.filters.length>0&&s.filters.length>0),Eo(r)&&Eo(s))return qE(r,s.getFilters());const i=ep(r)?r:s,o=ep(r)?s:r,a=i.filters.map(c=>cg(c,o));return Oe.create(a,"or")}(t,e),Vu(n)}function K_(t,e){if(Eo(e))return qE(e,t.getFilters());{const n=e.filters.map(r=>cg(t,r));return Oe.create(n,"or")}}function Vu(t){if(te(t instanceof we||t instanceof Oe),t instanceof we)return t;const e=t.getFilters();if(e.length===1)return Vu(e[0]);if(BE(t))return t;const n=e.map(s=>Vu(s)),r=[];return n.forEach(s=>{s instanceof we?r.push(s):s instanceof Oe&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Oe.create(r,t.op)}/**
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
 */class J2{constructor(){this.rn=new lg}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(yn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class lg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(xe.comparator)).toArray()}}/**
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
 */const kl=new Uint8Array(0);class Z2{constructor(e,n){this.user=e,this.databaseId=n,this.on=new lg,this.un=new Ps(r=>Ii(r),(r,s)=>Jc(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const i={collectionId:r,parent:Gt(s)};return G_(e).put(i)}return b.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[xE(n),""],!1,!0);return G_(e).j(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(sr(o.parent))}return r})}addFieldIndex(e,n){const r=Cl(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=pa(e);return i.next(a=>{o.put(B_(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=Cl(e),s=pa(e),i=fa(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=fa(e);let s=!0;const i=new Map;return b.forEach(this.cn(n),o=>this.an(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=ge();const a=[];return b.forEach(i,(c,l)=>{var u;P("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(A=>`${A.fieldPath}:${A.kind}`).join(",")}`} to execute ${Ii(n)}`);const h=function(A,E){const L=Yf(E);if(L===void 0)return null;for(const F of Fu(A,L.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(l,c),d=function(A,E){const L=new Map;for(const F of Bs(E))for(const Y of Fu(A,F.fieldPath))switch(Y.op){case"==":case"in":L.set(F.fieldPath.canonicalString(),Y.value);break;case"not-in":case"!=":return L.set(F.fieldPath.canonicalString(),Y.value),Array.from(L.values())}return null}(l,c),f=function(A,E){const L=[];let F=!0;for(const Y of Bs(E)){const O=Y.kind===0?S_(A,Y.fieldPath,A.startAt):A_(A,Y.fieldPath,A.startAt);L.push(O.value),F&&(F=O.inclusive)}return new Is(L,F)}(l,c),m=function(A,E){const L=[];let F=!0;for(const Y of Bs(E)){const O=Y.kind===0?A_(A,Y.fieldPath,A.endAt):S_(A,Y.fieldPath,A.endAt);L.push(O.value),F&&(F=O.inclusive)}return new Is(L,F)}(l,c),g=this.hn(c,l,f),_=this.hn(c,l,m),T=this.ln(c,l,d),S=this.fn(c.indexId,h,g,f.inclusive,_,m.inclusive,T);return b.forEach(S,A=>r.H(A,n.limit).next(E=>{E.forEach(L=>{const F=q.fromSegments(L.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return b.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=X2(Oe.create(e.filters,"and")).map(r=>np(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),l=c/(n!=null?n.length:1),u=[];for(let h=0;h<c;++h){const d=n?this.dn(n[h/l]):kl,f=this.wn(e,d,r[h%l],s),m=this._n(e,d,i[h%l],o),g=a.map(_=>this.wn(e,d,_,!0));u.push(...this.createRange(f,m,g))}return u}wn(e,n,r,s){const i=new Qs(e,q.empty(),n,r);return s?i:i.Je()}_n(e,n,r,s){const i=new Qs(e,q.empty(),n,r);return s?i.Je():i}an(e,n){const r=new Y2(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.cn(n);return b.forEach(s,i=>this.an(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new ze(st.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(n)&&s.length>1&&r===2?1:r)}mn(e,n){const r=new da;for(const s of Bs(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.He(s.kind);Ws.Ve._e(i,o)}return r.Qe()}dn(e){const n=new da;return Ws.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new da;return Ws.Ve._e(bi(this.databaseId,n),r.He(function(s){const i=Bs(s);return i.length===0?0:i[i.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let s=[];s.push(new da);let i=0;for(const o of Bs(e)){const a=r[i++];for(const c of s)if(this.yn(n,o.fieldPath)&&Ec(a))s=this.pn(s,o,a);else{const l=c.He(o.kind);Ws.Ve._e(a,l)}}return this.In(s)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new da;c.seed(a.Qe()),Ws.Ve._e(o,c.He(n.kind)),i.push(c)}return i}yn(e,n){return!!e.filters.find(r=>r instanceof we&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Cl(e),s=pa(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(i=>{const o=[];return b.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Lu(u.sequenceNumber,new yn(Si(u.readTime),new q(sr(u.documentKey)),u.largestBatchId)):Lu.empty(),d=l.fields.map(([f,m])=>new LM(st.fromServerFormat(f),m));return new SE(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:me(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=Cl(e),i=pa(e);return this.Tn(e).next(o=>s.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,c=>i.put(B_(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),b.forEach(a,c=>this.En(e,s,c).next(l=>{const u=this.An(i,c);return l.isEqual(u)?b.resolve():this.vn(e,i,c,l,u)}))))})}Rn(e,n,r,s){return fa(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,s){return fa(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const s=fa(e);let i=new ze(zr);return s.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{i=i.add(new Qs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}An(e,n){let r=new ze(zr);const s=this.mn(n,e);if(s==null)return r;const i=Yf(n);if(i!=null){const o=e.data.field(i.fieldPath);if(Ec(o))for(const a of o.arrayValue.values||[])r=r.add(new Qs(n.indexId,e.key,this.dn(a),s))}else r=r.add(new Qs(n.indexId,e.key,kl,s));return r}vn(e,n,r,s,i){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let m=Hi(d),g=Hi(f);for(;m||g;){let _=!1,T=!1;if(m&&g){const S=l(m,g);S<0?T=!0:S>0&&(_=!0)}else m!=null?T=!0:_=!0;_?(u(g),g=Hi(f)):T?(h(m),m=Hi(d)):(m=Hi(d),g=Hi(f))}}(s,i,zr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),b.waitFor(o)}Tn(e){let n=1;return pa(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>zr(o,a)).filter((o,a,c)=>!a||zr(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=zr(o,e),c=zr(o,n);if(a===0)s[0]=e.Je();else if(a>0&&c<0)s.push(o),s.push(o.Je());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.bn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,kl,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,kl,[]];i.push(IDBKeyRange.bound(a,c))}return i}bn(e,n){return zr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(W_)}getMinOffset(e,n){return b.mapArray(this.cn(n),r=>this.an(e,r).next(s=>s||Q())).next(W_)}}function G_(t){return xt(t,"collectionParents")}function fa(t){return xt(t,"indexEntries")}function Cl(t){return xt(t,"indexConfiguration")}function pa(t){return xt(t,"indexState")}function W_(t){te(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Gm(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new yn(e.readTime,e.documentKey,n)}/**
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
 */const Q_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{te(a===1)}));const l=[];for(const u of n.mutations){const h=PE(e,u.key.path,n.batchId);i.push(s.delete(h)),l.push(u.key)}return b.waitFor(i).next(()=>l)}function Bu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Q();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class nd{constructor(e,n,r,s){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=s,this.Vn={}}static de(e,n,r,s){te(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new nd(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Hr(e).X({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=Xi(e),o=Hr(e);return o.add({}).next(a=>{te(typeof a=="number");const c=new tg(a,n,r,s),l=function(d,f,m){const g=m.baseMutations.map(T=>Sc(d.fe,T)),_=m.mutations.map(T=>Sc(d.fe,T));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:g,mutations:_}}(this.serializer,this.userId,c),u=[];let h=new ze((d,f)=>me(d.canonicalString(),f.canonicalString()));for(const d of s){const f=PE(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(f,BM))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),b.waitFor(u).next(()=>c)})}lookupMutationBatch(e,n){return Hr(e).get(n).next(r=>r?(te(r.userId===this.userId),Gs(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?b.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.Vn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Hr(e).X({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(te(a.batchId>=r),i=Gs(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Hr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Hr(e).j("userMutationsIndex",n).next(r=>r.map(s=>Gs(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Xl(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return Xi(e).X({range:s},(o,a,c)=>{const[l,u,h]=o,d=sr(u);if(l===this.userId&&n.path.isEqual(d))return Hr(e).get(h).next(f=>{if(!f)throw Q();te(f.userId===this.userId),i.push(Gs(this.serializer,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(me);const s=[];return n.forEach(i=>{const o=Xl(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Xi(e).X({range:a},(l,u,h)=>{const[d,f,m]=l,g=sr(f);d===this.userId&&i.path.isEqual(g)?r=r.add(m):h.done()});s.push(c)}),b.waitFor(s).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=Xl(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new ze(me);return Xi(e).X({range:o},(c,l,u)=>{const[h,d,f]=c,m=sr(d);h===this.userId&&r.isPrefixOf(m)?m.length===s&&(a=a.add(f)):u.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],s=[];return n.forEach(i=>{s.push(Hr(e).get(i).next(o=>{if(o===null)throw Q();te(o.userId===this.userId),r.push(Gs(this.serializer,o))}))}),b.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return CT(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),b.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return Xi(e).X({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=sr(i[1]);s.push(c)}else a.done()}).next(()=>{te(s.length===0)})})}containsKey(e,n){return RT(e,this.userId,n)}xn(e){return NT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function RT(t,e,n){const r=Xl(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Xi(t).X({range:i,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===s&&(o=!0),l.done()}).next(()=>o)}function Hr(t){return xt(t,"mutations")}function Xi(t){return xt(t,"documentMutations")}function NT(t){return xt(t,"mutationQueues")}/**
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
 */class Ai{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ai(0)}static Mn(){return new Ai(-1)}}/**
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
 */class eF{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new Ai(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>ee.fromTimestamp(new We(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.On(e,s)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ki(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(te(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return Ki(e).X((o,a)=>{const c=Aa(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>b.waitFor(i)).next(()=>s)}forEachTarget(e,n){return Ki(e).X((r,s)=>{const i=Aa(s);n(i)})}$n(e){return Y_(e).get("targetGlobalKey").next(n=>(te(n!==null),n))}On(e,n){return Y_(e).put("targetGlobalKey",n)}Fn(e,n){return Ki(e).put(ST(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ii(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ki(e).X({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const l=Aa(a);Jc(n,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=Zr(e);return n.forEach(o=>{const a=Gt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(s)}removeMatchingKeys(e,n,r){const s=Zr(e);return b.forEach(n,i=>{const o=Gt(i.path);return b.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=Zr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=Zr(e);let i=ge();return s.X({range:r,Y:!0},(o,a,c)=>{const l=sr(o[1]),u=new q(l);i=i.add(u)}).next(()=>i)}containsKey(e,n){const r=Gt(n.path),s=IDBKeyRange.bound([r],[xE(r)],!1,!0);let i=0;return Zr(e).X({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}le(e,n){return Ki(e).get(n).next(r=>r?Aa(r):null)}}function Ki(t){return xt(t,"targets")}function Y_(t){return xt(t,"targetGlobal")}function Zr(t){return xt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class tF{constructor(e){this.Ln=e,this.buffer=new ze(X_),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();X_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nF{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Rs(n)}await this.Qn(3e5)})}}class rF{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Zt.ct);const r=new tF(n);return this.jn.forEachTarget(e,s=>r.Kn(s.sequenceNumber)).next(()=>this.jn.Wn(e,s=>r.Kn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Q_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Q_):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,s,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Qf()<=Te.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function sF(t,e){return new rF(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n){this.db=e,this.garbageCollector=sF(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,s)=>n(s))}addReference(e,n,r){return Rl(e,r)}removeReference(e,n,r){return Rl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Rl(e,n)}Xn(e,n){return function(r,s){let i=!1;return NT(r).Z(o=>RT(r,o,s).next(a=>(a&&(i=!0),b.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Xn(e,o).next(l=>{if(!l)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),Zr(e).delete([0,Gt(o.path)])))});s.push(c)}}).next(()=>b.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Rl(e,n)}Yn(e,n){const r=Zr(e);let s,i=Zt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==Zt.ct&&n(new q(sr(s)),i),i=l,s=c):i=Zt.ct}).next(()=>{i!==Zt.ct&&n(new q(sr(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Rl(t,e){return Zr(t).put(function(n,r){return{targetId:0,path:Gt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class PT{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oF{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return $s(e).put(r)}removeEntry(e,n,r){return $s(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],$u(i),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=qe.newInvalidDocument(n);return $s(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ma(n))},(s,i)=>{r=this.ts(n,i)}).next(()=>r)}es(e,n){let r={size:0,document:qe.newInvalidDocument(n)};return $s(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ma(n))},(s,i)=>{r={document:this.ts(n,i),size:Bu(i)}}).next(()=>r)}getEntries(e,n){let r=tn();return this.ns(e,n,(s,i)=>{const o=this.ts(s,i);r=r.insert(s,o)}).next(()=>r)}ss(e,n){let r=tn(),s=new $e(q.comparator);return this.ns(e,n,(i,o)=>{const a=this.ts(i,o);r=r.insert(i,a),s=s.insert(i,Bu(o))}).next(()=>({documents:r,rs:s}))}ns(e,n,r){if(n.isEmpty())return b.resolve();let s=new ze(ew);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(ma(s.first()),ma(s.last())),o=s.getIterator();let a=o.getNext();return $s(e).X({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=q.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&ew(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.G(ma(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,s){const i=n.path,o=[i.popLast().toArray(),i.lastSegment(),$u(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return $s(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=tn();for(const u of c){const h=this.ts(q.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(el(n,h)||s.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,s){let i=tn();const o=Z_(n,r),a=Z_(n,yn.max());return $s(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.ts(q.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===s&&u.done()}).next(()=>i)}newChangeBuffer(e){return new aF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return J_(e).get("remoteDocumentGlobalKey").next(n=>(te(!!n),n))}Zn(e,n){return J_(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=z2(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return qe.newInvalidDocument(e)}}function DT(t){return new oF(t)}class aF extends PT{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new Ps(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new ze((i,o)=>me(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.us.get(i);if(n.push(this.os.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=$_(this.os.serializer,o);s=s.add(i.path.popLast());const l=Bu(c);r+=l-a.size,n.push(this.os.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=$_(this.os.serializer,o.convertToNoDocument(ee.min()));n.push(this.os.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.os.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:s})=>(s.forEach((i,o)=>{this.us.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function J_(t){return xt(t,"remoteDocumentGlobal")}function $s(t){return xt(t,"remoteDocumentsV14")}function ma(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Z_(t,e){const n=e.documentKey.path.toArray();return[t,$u(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ew(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=me(n[i],r[i]),s)return s;return s=me(n.length,r.length),s||(s=me(n[n.length-2],r[r.length-2]),s||me(n[n.length-1],r[r.length-1]))}/**
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
 */class cF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class OT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ba(r.mutation,s,en.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xa();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=tn();const o=Va(),a=Va();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Fr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ba(u.mutation,l,u.mutation.getFieldMask(),We.now())):o.set(l.key,en.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new cF(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Va();let s=new $e((o,a)=>o-a),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||en.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ge()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ZE();u.forEach(d=>{if(!i.has(d)){const f=aT(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(ir());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ge())).next(u=>({batchId:a,changes:JE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=xa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=xa();return this.indexManager.getCollectionParents(e,s).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Mr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,qe.newInvalidDocument(l)))});let o=xa();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ba(l.mutation,c,en.empty(),We.now()),el(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:ot(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:ag(r.bundledQuery),readTime:ot(r.readTime)}}(n)),b.resolve()}}/**
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
 */class uF{constructor(){this.overlays=new $e(q.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ir();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=ir(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ir(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ir(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rg(n,r));let i=this.ls.get(n);i===void 0&&(i=ge(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
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
 */class ug{constructor(){this.fs=new ze(vt.ds),this.ws=new ze(vt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new vt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new vt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new q(new xe([])),r=new vt(n,e),s=new vt(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new q(new xe([])),r=new vt(n,e),s=new vt(n,e+1);let i=ge();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new vt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return q.comparator(e.key,n.key)||me(e.As,n.As)}static _s(e,n){return me(e.As,n.As)||q.comparator(e.key,n.key)}}/**
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
 */class hF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ze(vt.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tg(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new vt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),s=new vt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(me);return n.forEach(s=>{const i=new vt(s,0),o=new vt(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),b.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new vt(new q(i),0);let a=new ze(me);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){te(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return b.forEach(n.mutations,s=>{const i=new vt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new vt(n,0),s=this.Rs.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dF{constructor(e){this.Ds=e,this.docs=new $e(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let r=tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qe.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Gm(kE(u),r)<=0||(s.has(u.key)||el(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}Cs(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fF(this)}getSize(e){return b.resolve(this.size)}}class fF extends PT{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class pF{constructor(e){this.persistence=e,this.xs=new Ps(n=>Ii(n),Jc),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ug,this.targetCount=0,this.Ms=Ai.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
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
 */class LT{constructor(e,n){this.$s={},this.overlays={},this.Os=new Zt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new pF(this),this.indexManager=new J2,this.remoteDocumentCache=function(r){return new dF(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new xT(n),this.qs=new lF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new hF(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const s=new mF(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return b.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class mF extends RE{constructor(e){super(),this.currentSequenceNumber=e}}class rd{constructor(e){this.persistence=e,this.Qs=new ug,this.js=null}static zs(e){return new rd(e)}get Ws(){if(this.js)return this.js;throw Q()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,r=>{const s=q.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e){this.serializer=e}O(e,n,r,s){const i=new Yh("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",g_,{unique:!0}),a.createObjectStore("documentMutations")}(e),tw(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),tw(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",g_,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return b.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Ys(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),r<7&&s>=7&&(o=o.next(()=>this.Zs(i))),r<8&&s>=8&&(o=o.next(()=>this.ti(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ei(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:ZM});c.createIndex("collectionPathOverlayIndex",e2,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",t2,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:jM});c.createIndex("documentKeyIndex",qM),c.createIndex("collectionGroupIndex",zM)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.si(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:QM}).createIndex("sequenceNumberIndex",YM,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:XM}).createIndex("documentKeyIndex",JM,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,s)=>{n+=Bu(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(s=>b.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>b.forEach(a,c=>{te(c.userId===i.userId);const l=Gs(this.serializer,c);return CT(e,i.userId,l).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.X((o,a)=>{const c=new xe(o),l=function(u){return[0,Gt(u)]}(c);i.push(n.get(l).next(u=>u?b.resolve():(h=>n.put({targetId:0,path:Gt(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>b.waitFor(i))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:WM});const r=n.store("collectionParents"),s=new lg,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Gt(c)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new xe(o);return i(c.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,c],l)=>{const u=sr(a);return i(u.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,s)=>{const i=Aa(s),o=ST(this.serializer,i);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),s=[];return r.X((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(l=o,l.document?new q(xe.fromString(l.document.name).popFirst(5)):l.noDocument?q.fromSegments(l.noDocument.path):l.unknownDocument?q.fromSegments(l.unknownDocument.path):Q()).path.toArray();var l;/**
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
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>b.waitFor(s))}si(e,n){const r=n.store("mutations"),s=DT(this.serializer),i=new LT(rd.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:ge();Gs(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),b.forEach(a,(c,l)=>{const u=new _t(l),h=td.de(this.serializer,u),d=i.getIndexManager(u),f=nd.de(u,this.serializer,d,i.referenceDelegate);return new OT(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Xf(n,Zt.ct),c).next()})})}}function tw(t){t.createObjectStore("targetDocuments",{keyPath:KM}).createIndex("documentTargetsIndex",GM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",HM,{unique:!0}),t.createObjectStore("targetGlobal")}const Jd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class hg{constructor(e,n,r,s,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=i,this.window=o,this.document=a,this.ri=l,this.oi=u,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!hg.D())throw new R(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iF(this,s),this.di=n+"main",this.serializer=new xT(c),this.wi=new Mn(this.di,this.ui,new gF(this.serializer)),this.Bs=new eF(this.referenceDelegate,this.serializer),this.remoteDocumentCache=DT(this.serializer),this.qs=new H2,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,u===!1&&rt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,Jd);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Zt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Nl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(Ns(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return ga(e).get("owner").next(n=>b.resolve(this.Ri(n)))}Pi(e){return Nl(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=xt(n,"clientMetadata");return r.j().next(s=>{const i=this.Si(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?b.resolve(!0):ga(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,Jd);return!1}}return!(!this.networkEnabled||!this.inForeground)||Nl(e).j().next(r=>this.Si(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Xf(e,Zt.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Nl(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return nd.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Z2(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return td.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=(o=this.ui)===15?r2:o===14?LE:o===13?OE:o===12?n2:o===11?DE:void Q();var o;let a;return this.wi.runTransaction(e,s,i,c=>(a=new Xf(c,this.Os?this.Os.next():Zt.ct),n==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw rt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new R(I.FAILED_PRECONDITION,CE);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return ga(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(I.FAILED_PRECONDITION,Jd)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ga(e).put("owner",n)}static D(){return Mn.D()}Ai(e){const n=ga(e);return n.get("owner").next(r=>this.Ri(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(rt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;JC()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return rt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){rt("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ga(t){return xt(t,"owner")}function Nl(t){return xt(t,"clientMetadata")}function dg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class fg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fg(e,n.fromCache,r,s)}}/**
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
 */class MT{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(k_(n))return b.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Uu(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Uu(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,r,s){return k_(n)||s.isEqual(ee.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(Qf()<=Te.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sp(n)),this.Wi(e,o,n,AE(s,-1)))})}ji(e,n){let r=new ze(YE(e));return n.forEach((s,i)=>{el(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return Qf()<=Te.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",sp(n)),this.Ui.getDocumentsMatchingQuery(e,n,yn.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new $e(me),this.Yi=new Ps(i=>Ii(i),Jc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OT(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function FT(t,e,n,r){return new yF(t,e,n,r)}async function UT(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ge();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function vF(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const g=c.docVersions.get(f);te(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ge();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $T(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function _F(t,e){const n=H(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(gt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(m,g,_){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,u)&&a.push(n.Bs.updateTargetData(i,f))});let c=tn(),l=ge();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(VT(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(ee.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function VT(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function wF(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ao(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function ko(t,e,n){const r=H(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ns(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function ju(t,e,n){const r=H(t);let s=ee.min(),i=ge();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=H(a),h=u.Yi.get(l);return h!==void 0?b.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,on(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ge())).next(a=>(qT(r,QE(e),a),{documents:a,ir:i})))}function BT(t,e){const n=H(t),r=H(n.Bs),s=n.Ji.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.le(i,e).next(o=>o?o.target:null))}function jT(t,e){const n=H(t),r=n.Xi.get(e)||ee.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Zi.getAllFromCollectionGroup(s,e,AE(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(qT(n,e,s),s))}function qT(t,e,n){let r=t.Xi.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}async function bF(t,e,n,r){const s=H(t);let i=ge(),o=tn();for(const l of n){const u=e.rr(l.metadata.name);l.document&&(i=i.add(u));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(u,h)}const a=s.Zi.newChangeBuffer({trackRemovals:!0}),c=await Ao(s,function(l){return on(Wo(xe.fromString(`__bundle__/docs/${l}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>VT(l,a,o).next(u=>(a.apply(l),u)).next(u=>s.Bs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>s.Bs.addMatchingKeys(l,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,u.nr,u.sr)).next(()=>u.nr)))}async function IF(t,e,n=ge()){const r=await Ao(t,on(ag(e.bundledQuery))),s=H(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=ot(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.qs.saveNamedQuery(i,e);const a=r.withResumeToken(gt.EMPTY_BYTE_STRING,o);return s.Ji=s.Ji.insert(a.targetId,a),s.Bs.updateTargetData(i,a).next(()=>s.Bs.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Bs.addMatchingKeys(i,n,r.targetId)).next(()=>s.qs.saveNamedQuery(i,e))})}function nw(t,e){return`firestore_clients_${t}_${e}`}function rw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Zd(t,e){return`firestore_targets_${t}_${e}`}class qu{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static ar(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new R(s.error.code,s.error.message))),o?new qu(e,n,s.state,i):(rt("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ja{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new R(r.error.code,r.error.message))),i?new ja(e,r.state,s):(rt("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Zm();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=NE(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new zu(e,i):(rt("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class pg{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new pg(n.clientId,n.onlineState):(rt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class hp{constructor(){this.activeTargetIds=Zm()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ef{constructor(e,n,r,s,i){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new $e(me),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=nw(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new hp),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const s=this.getItem(nw(this.persistenceKey,r));if(s){const i=zu.ar(r,s);i&&(this.gr=this.gr.insert(i.clientId,i))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Zd(this.persistenceKey,e));if(r){const s=ja.ar(e,r);s&&(n=s.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zd(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.Cr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void rt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(s){let i=Zt.ct;if(s!=null)try{const o=JSON.parse(s);te(typeof o=="number"),i=o}catch(o){rt("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(n.newValue);r!==Zt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(s=>this.syncEngine.Qr(s)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const s=new qu(this.currentUser,e,n,r),i=rw(this.persistenceKey,this.currentUser,e);this.setItem(i,s.hr())}Cr(e){const n=rw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const s=Zd(this.persistenceKey,e),i=new ja(e,n,r);this.setItem(s,i.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return zu.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return qu.ar(new _t(i),s,n)}Ur(e,n){const r=this.Ar.exec(e),s=Number(r[1]);return ja.ar(s,n)}br(e){return pg.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),s=this.Sr(this.gr),i=this.Sr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Zm();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class zT{constructor(){this.Hr=new hp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new hp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EF{Yr(e){}shutdown(){}}/**
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
 */class sw{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pl=null;function tf(){return Pl===null?Pl=268435456+Math.round(2147483648*Math.random()):Pl++,"0x"+Pl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xF{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Mt="WebChannelConnection";class SF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=tf(),a=this.To(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,s,i),this.Ao(e,a,c,r).then(l=>(P("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw zn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Go,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=TF[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=tf();return new Promise((o,a)=>{const c=new IM;c.setWithCredentials(!0),c.listenOnce(_M.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yd.NO_ERROR:const u=c.getResponseJson();P(Mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Yd.TIMEOUT:P(Mt,`RPC '${e}' ${i} timed out`),a(new R(I.DEADLINE_EXCEEDED,"Request time out"));break;case Yd.HTTP_ERROR:const h=c.getStatus();if(P(Mt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(f.status);a(new R(m,f.message))}else a(new R(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(I.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{P(Mt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);P(Mt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Ro(e,n,r){const s=tf(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yM(),a=vM(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new bM({})),this.Eo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");P(Mt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const m=new xF({ro:_=>{f?P(Mt,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(d||(P(Mt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),P(Mt,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),g=(_,T,S)=>{_.listen(T,A=>{try{S(A)}catch(E){setTimeout(()=>{throw E},0)}})};return g(h,xl.EventType.OPEN,()=>{f||P(Mt,`RPC '${e}' stream ${s} transport opened.`)}),g(h,xl.EventType.CLOSE,()=>{f||(f=!0,P(Mt,`RPC '${e}' stream ${s} transport closed`),m.wo())}),g(h,xl.EventType.ERROR,_=>{f||(f=!0,zn(Mt,`RPC '${e}' stream ${s} transport errored:`,_),m.wo(new R(I.UNAVAILABLE,"The operation could not be completed")))}),g(h,xl.EventType.MESSAGE,_=>{var T;if(!f){const S=_.data[0];te(!!S);const A=S,E=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(E){P(Mt,`RPC '${e}' stream ${s} received error:`,E);const L=E.status;let F=function(O){const V=ut[O];if(V!==void 0)return uT(V)}(L),Y=E.message;F===void 0&&(F=I.INTERNAL,Y="Unknown error status: "+L+" with message "+E.message),f=!0,m.wo(new R(F,Y)),h.close()}else P(Mt,`RPC '${e}' stream ${s} received:`,S),m._o(S)}}),g(a,wM.STAT_EVENT,_=>{_.stat===d_.PROXY?P(Mt,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===d_.NOPROXY&&P(Mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function HT(){return typeof window<"u"?window:null}function nu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t){return new O2(t,!0)}/**
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
 */class mg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&P("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class KT{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new mg(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(rt(n.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new R(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AF extends KT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=F2(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?ot(i.readTime):ee.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=xc(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=Mu(a)?{documents:_T(s,a)}:{query:wT(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=pT(s,i.resumeToken);const c=ip(s,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(ee.min())>0){o.readTime=So(s,i.snapshotVersion.toTimestamp());const c=ip(s,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=$2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=xc(this.serializer),n.removeTarget=e,this.Wo(n)}}class kF extends KT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=U2(e.writeResults,e.commitTime),r=ot(e.commitTime);return this.listener.cu(r,n)}return te(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=xc(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sc(this.serializer,r))};this.Wo(n)}}/**
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
 */class CF extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(I.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(I.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class RF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(rt(n),this.mu=!1):P("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class NF{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ds(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=H(a);c.vu.add(4),await Xo(c),c.bu.set("Unknown"),c.vu.delete(4),await il(c)}(this))})}),this.bu=new RF(r,s)}}async function il(t){if(Ds(t))for(const e of t.Ru)await e(!0)}async function Xo(t){for(const e of t.Ru)await e(!1)}function sd(t,e){const n=H(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),vg(n)?yg(n):Zo(n).Ko()&&gg(n,e))}function Ac(t,e){const n=H(t),r=Zo(n);n.Au.delete(e),r.Ko()&&GT(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ds(n)&&n.bu.set("Unknown"))}function gg(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zo(t).su(e)}function GT(t,e){t.Vu.qt(e),Zo(t).iu(e)}function yg(t){t.Vu=new R2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Zo(t).start(),t.bu.gu()}function vg(t){return Ds(t)&&!Zo(t).Uo()&&t.Au.size>0}function Ds(t){return H(t).vu.size===0}function WT(t){t.Vu=void 0}async function PF(t){t.Au.forEach((e,n)=>{gg(t,e)})}async function DF(t,e){WT(t),vg(t)?(t.bu.Iu(e),yg(t)):t.bu.set("Unknown")}async function OF(t,e,n){if(t.bu.set("Online"),e instanceof fT&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hu(t,r)}else if(e instanceof tu?t.Vu.Ht(e):e instanceof dT?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(ee.min()))try{const r=await $T(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(gt.EMPTY_BYTE_STRING,l.snapshotVersion)),GT(s,a);const u=new Ir(l.target,a,c,l.sequenceNumber);gg(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Hu(t,r)}}async function Hu(t,e,n){if(!Ns(e))throw e;t.vu.add(1),await Xo(t),t.bu.set("Offline"),n||(n=()=>$T(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await il(t)})}function QT(t,e){return e().catch(n=>Hu(t,n,e))}async function Jo(t){const e=H(t),n=Es(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;LF(e);)try{const s=await wF(e.localStore,r);if(s===null){e.Eu.length===0&&n.jo();break}r=s.batchId,MF(e,s)}catch(s){await Hu(e,s)}YT(e)&&XT(e)}function LF(t){return Ds(t)&&t.Eu.length<10}function MF(t,e){t.Eu.push(e);const n=Es(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function YT(t){return Ds(t)&&!Es(t).Uo()&&t.Eu.length>0}function XT(t){Es(t).start()}async function FF(t){Es(t).hu()}async function UF(t){const e=Es(t);for(const n of t.Eu)e.uu(n.mutations)}async function $F(t,e,n){const r=t.Eu.shift(),s=ng.from(r,e,n);await QT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Jo(t)}async function VF(t,e){e&&Es(t).ou&&await async function(n,r){if(s=r.code,lT(s)&&s!==I.ABORTED){const i=n.Eu.shift();Es(n).Qo(),await QT(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Jo(n)}var s}(t,e),YT(t)&&XT(t)}async function iw(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Ds(n);n.vu.add(3),await Xo(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await il(n)}async function dp(t,e){const n=H(t);e?(n.vu.delete(2),await il(n)):e||(n.vu.add(2),await Xo(n),n.bu.set("Unknown"))}function Zo(t){return t.Su||(t.Su=function(e,n,r){const s=H(e);return s.fu(),new AF(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:PF.bind(null,t),ao:DF.bind(null,t),nu:OF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),vg(t)?yg(t):t.bu.set("Unknown")):(await t.Su.stop(),WT(t))})),t.Su}function Es(t){return t.Du||(t.Du=function(e,n,r){const s=H(e);return s.fu(),new kF(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:FF.bind(null,t),ao:VF.bind(null,t),au:UF.bind(null,t),cu:$F.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Jo(t)):(await t.Du.stop(),t.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class _g{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new _g(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ea(t,e){if(rt("AsyncQueue",`${e}: ${t}`),Ns(t))return new R(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=xa(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new fo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ow{constructor(){this.Cu=new $e(q.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):Q():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Co{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Co(e,n,fo.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class BF{constructor(){this.Nu=void 0,this.listeners=[]}}class jF{constructor(){this.queries=new Ps(e=>WE(e),Zc),this.onlineState="Unknown",this.ku=new Set}}async function wg(t,e){const n=H(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new BF),s)try{i.Nu=await n.onListen(r)}catch(o){const a=ea(o,`Initialization of query '${sp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Ig(n)}async function bg(t,e){const n=H(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function qF(t,e){const n=H(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&Ig(n)}function zF(t,e,n){const r=H(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ig(t){t.ku.forEach(e=>{e.next()})}class Eg{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.serializer=e}rr(e){return lr(this.serializer,e)}ur(e){return e.metadata.exists?vT(this.serializer,e.document,!1):qe.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return ot(e)}}class KF{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=JT(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=xe.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new aw(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.rr(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||ge()).add(i);n.set(o,a)}}return n}async complete(){const e=await bF(this.localStore,new aw(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await IF(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function JT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class ZT{constructor(e){this.key=e}}class ex{constructor(e){this.key=e}}class tx{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ge(),this.mutatedKeys=ge(),this.tc=YE(e),this.ec=new fo(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new ow,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=el(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?m!==g&&(r.track({type:3,doc:f}),_=!0):this.rc(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Co(this.query,e.ec,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ow,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ge(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new ex(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new ZT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=ge();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Co.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class GF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WF{constructor(e){this.key=e,this.fc=!1}}class QF{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ps(a=>WE(a),Zc),this._c=new Map,this.mc=new Set,this.gc=new $e(q.comparator),this.yc=new Map,this.Ic=new ug,this.Tc={},this.Ec=new Map,this.Ac=Ai.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function YF(t,e){const n=kg(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await Ao(n.localStore,on(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Tg(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&sd(n.remoteStore,o)}return s}async function Tg(t,e,n,r,s){t.Rc=(h,d,f)=>async function(m,g,_,T){let S=g.view.sc(_);S.zi&&(S=await ju(m.localStore,g.query,!1).then(({documents:L})=>g.view.sc(L,S)));const A=T&&T.targetChanges.get(g.targetId),E=g.view.applyChanges(S,m.isPrimaryClient,A);return fp(m,g.targetId,E.cc),E.snapshot}(t,h,d,f);const i=await ju(t.localStore,e,!0),o=new tx(e,i.ir),a=o.sc(i.documents),c=rl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);fp(t,n,l.cc);const u=new GF(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function XF(t,e){const n=H(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!Zc(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ko(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ac(n.remoteStore,r.targetId),Ro(n,r.targetId)}).catch(Rs)):(Ro(n,r.targetId),await ko(n.localStore,r.targetId,!0))}async function JF(t,e,n){const r=Cg(t);try{const s=await function(i,o){const a=H(i),c=We.now(),l=o.reduce((d,f)=>d.add(f.key),ge());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=tn(),m=ge();return a.Zi.getEntries(d,l).next(g=>{f=g,f.forEach((_,T)=>{T.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(g=>{u=g;const _=[];for(const T of o){const S=A2(T,u.get(T.key).overlayedDocument);S!=null&&_.push(new Fr(T.key,S,$E(S.value.mapValue),Ge.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(g=>{h=g;const _=g.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,g.batchId,_)})}).then(()=>({batchId:h.batchId,changes:JE(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new $e(me)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ur(r,s.changes),await Jo(r.remoteStore)}catch(s){const i=ea(s,"Failed to persist write");n.reject(i)}}async function nx(t,e){const n=H(t);try{const r=await _F(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?te(o.fc):s.removedDocuments.size>0&&(te(o.fc),o.fc=!1))}),await Ur(n,r,e)}catch(r){await Rs(r)}}function cw(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=H(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Ig(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZF(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new $e(q.comparator);o=o.insert(i,qe.newNoDocument(i,ee.min()));const a=ge().add(i),c=new nl(ee.min(),new Map,new $e(me),o,a);await nx(r,c),r.gc=r.gc.remove(i),r.yc.delete(e),Ag(r)}else await ko(r.localStore,e,!1).then(()=>Ro(r,e,n)).catch(Rs)}async function eU(t,e){const n=H(t),r=e.batch.batchId;try{const s=await vF(n.localStore,e);Sg(n,r,null),xg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ur(n,s)}catch(s){await Rs(s)}}async function tU(t,e,n){const r=H(t);try{const s=await function(i,o){const a=H(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);Sg(r,e,n),xg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ur(r,s)}catch(s){await Rs(s)}}async function nU(t,e){const n=H(t);Ds(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=H(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const s=n.Ec.get(r)||[];s.push(e),n.Ec.set(r,s)}catch(r){const s=ea(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function xg(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Sg(t,e,n){const r=H(t);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function Ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||rx(t,r)})}function rx(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Ac(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Ag(t))}function fp(t,e,n){for(const r of n)r instanceof ZT?(t.Ic.addReference(r.key,e),rU(t,r)):r instanceof ex?(P("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||rx(t,r.key)):Q()}function rU(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.mc.add(r),Ag(t))}function Ag(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new q(xe.fromString(e)),r=t.Ac.next();t.yc.set(r,new WF(n)),t.gc=t.gc.insert(n,r),sd(t.remoteStore,new Ir(on(Wo(n.path)),r,"TargetPurposeLimboResolution",Zt.ct))}}async function Ur(t,e,n){const r=H(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=fg.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,c){const l=H(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ns(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,m)}}}(r.localStore,i))}async function sU(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await UT(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(I.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ur(n,r.er)}}function iU(t,e){const n=H(t),r=n.yc.get(e);if(r&&r.fc)return ge().add(r.key);{let s=ge();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}async function oU(t,e){const n=H(t),r=await ju(n.localStore,e.query,!0),s=e.view.hc(r);return n.isPrimaryClient&&fp(n,e.targetId,s.cc),s}async function aU(t,e){const n=H(t);return jT(n.localStore,e).then(r=>Ur(n,r))}async function cU(t,e,n,r){const s=H(t),i=await function(o,a){const c=H(o),l=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Sn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):b.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await Jo(s.remoteStore):n==="acknowledged"||n==="rejected"?(Sg(s,e,r||null),xg(s,e),function(o,a){H(H(o).mutationQueue).Cn(a)}(s.localStore,e)):Q(),await Ur(s,i)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function lU(t,e){const n=H(t);if(kg(n),Cg(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await lw(n,r.toArray());n.vc=!0,await dp(n.remoteStore,!0);for(const i of s)sd(n.remoteStore,i)}else if(e===!1&&n.vc!==!1){const r=[];let s=Promise.resolve();n._c.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Ro(n,o),ko(n.localStore,o,!0))),Ac(n.remoteStore,o)}),await s,await lw(n,r),function(i){const o=H(i);o.yc.forEach((a,c)=>{Ac(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new $e(q.comparator)}(n),n.vc=!1,await dp(n.remoteStore,!1)}}async function lw(t,e,n){const r=H(t),s=[],i=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Ao(r.localStore,on(c[0]));for(const l of c){const u=r.wc.get(l),h=await oU(r,u);h.snapshot&&i.push(h.snapshot)}}else{const l=await BT(r.localStore,o);a=await Ao(r.localStore,l),await Tg(r,sx(l),o,!1,a.resumeToken)}s.push(a)}return r.dc.nu(i),s}function sx(t){return GE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function uU(t){const e=H(t);return H(H(e.localStore).persistence).$i()}async function hU(t,e,n,r){const s=H(t);if(s.vc)return void P("SyncEngine","Ignoring unexpected query state notification.");const i=s._c.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await jT(s.localStore,QE(i[0])),a=nl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",gt.EMPTY_BYTE_STRING);await Ur(s,o,a);break}case"rejected":await ko(s.localStore,e,!0),Ro(s,e,r);break;default:Q()}}async function dU(t,e,n){const r=kg(t);if(r.vc){for(const s of e){if(r._c.has(s)){P("SyncEngine","Adding an already active target "+s);continue}const i=await BT(r.localStore,s),o=await Ao(r.localStore,i);await Tg(r,sx(i),o.targetId,!1,o.resumeToken),sd(r.remoteStore,o)}for(const s of n)r._c.has(s)&&await ko(r.localStore,s,!1).then(()=>{Ac(r.remoteStore,s),Ro(r,s)}).catch(Rs)}}function kg(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZF.bind(null,e),e.dc.nu=qF.bind(null,e.eventManager),e.dc.Pc=zF.bind(null,e.eventManager),e}function Cg(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tU.bind(null,e),e}function fU(t,e,n){const r=H(t);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const f=H(h),m=ot(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",g=>f.qs.getBundleMetadata(g,d.id)).then(g=>!!g&&g.createTime.compareTo(m)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(JT(a));const c=new KF(a,s.localStore,i.serializer);let l=await i.bc();for(;l;){const h=await c.zu(l);h&&o._updateProgress(h),l=await i.bc()}const u=await c.complete();return await Ur(s,u.Ju,void 0),await function(h,d){const f=H(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.qs.saveBundleMetadata(m,d))}(s.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Hu)}catch(a){return zn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class pp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return FT(this.persistence,new MT,e.initialUser,this.serializer)}createPersistence(e){return new LT(rd.zs,this.serializer)}createSharedClientState(e){return new zT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ix extends pp{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Cg(this.Vc.syncEngine),await Jo(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return FT(this.persistence,new MT,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new nF(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new $M(n,this.persistence);return new UM(e.asyncQueue,r)}createPersistence(e){const n=dg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new hg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,HT(),nu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new zT}}class pU extends ix{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof ef&&(this.sharedClientState.syncEngine={jr:cU.bind(null,n),zr:hU.bind(null,n),Wr:dU.bind(null,n),$i:uU.bind(null,n),Qr:aU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await lU(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=HT();if(!ef.D(n))throw new R(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=dg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ef(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Rg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sU.bind(null,this.syncEngine),await dp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jF}createDatastore(e){const n=sl(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new SF(s));var s;return function(i,o,a,c){return new CF(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>cw(this.syncEngine,a,0),o=sw.D()?new sw:new EF,new NF(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new QF(r,s,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);P("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Xo(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class id{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new It,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const s=await this.$c(r);return new HF(JSON.parse(s),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class gU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,s){const i=H(r),o=xc(i.serializer)+"/documents",a={documents:s.map(h=>Tc(i.serializer,h))},c=await i.vo("BatchGetDocuments",o,a,s.length),l=new Map;c.forEach(h=>{const d=M2(i.serializer,h);l.set(d.key.toString(),d)});const u=[];return s.forEach(h=>{const d=l.get(h.toString());te(!!d),u.push(d)}),u}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Yo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=q.fromPath(r);this.mutations.push(new eg(s,this.precondition(s)))}),await async function(n,r){const s=H(n),i=xc(s.serializer)+"/documents",o={writes:r.map(a=>Sc(s.serializer,a))};await s.Io("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Q();n=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new R(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ee.min())?Ge.exists(!1):Ge.updateTime(n):Ge.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ee.min()))throw new R(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ge.updateTime(n)}return Ge.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class yU{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Bc=r.maxAttempts,this.qo=new mg(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new gU(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Uc(s)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Xc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!lT(n)}return!1}}/**
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
 */class vU{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=TE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{P("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(P("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ea(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ru(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await UT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ng(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>iw(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>iw(e.remoteStore,i)),t._onlineComponents=e}function ox(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ng(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await ru(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ox(n))throw n;zn("Error using user provided cache. Falling back to memory cache: "+n),await ru(t,new pp)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await ru(t,new pp);return t._offlineComponents}async function od(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await mp(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await mp(t,new Rg))),t._onlineComponents}function ax(t){return Ng(t).then(e=>e.persistence)}function Pg(t){return Ng(t).then(e=>e.localStore)}function cx(t){return od(t).then(e=>e.remoteStore)}function Dg(t){return od(t).then(e=>e.syncEngine)}function _U(t){return od(t).then(e=>e.datastore)}async function No(t){const e=await od(t),n=e.eventManager;return n.onListen=YF.bind(null,e.syncEngine),n.onUnlisten=XF.bind(null,e.syncEngine),n}function wU(t){return t.asyncQueue.enqueue(async()=>{const e=await ax(t),n=await cx(t);return e.setNetworkEnabled(!0),function(r){const s=H(r);return s.vu.delete(0),il(s)}(n)})}function bU(t){return t.asyncQueue.enqueue(async()=>{const e=await ax(t),n=await cx(t);return e.setNetworkEnabled(!1),async function(r){const s=H(r);s.vu.add(0),await Xo(s),s.bu.set("Offline")}(n)})}function IU(t,e){const n=new It;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const l=H(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new R(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=ea(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await Pg(t),e,n)),n.promise}function lx(t,e,n={}){const r=new It;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new id({next:h=>{i.enqueueAndForget(()=>bg(s,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Eg(Wo(o.path),l,{includeMetadataChanges:!0,Ku:!0});return wg(s,u)}(await No(t),t.asyncQueue,e,n,r)),r.promise}function EU(t,e){const n=new It;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await ju(r,s,!0),a=new tx(s,o.ir),c=a.sc(o.documents),l=a.applyChanges(c,!1);i.resolve(l.snapshot)}catch(o){const a=ea(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await Pg(t),e,n)),n.promise}function ux(t,e,n={}){const r=new It;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new id({next:h=>{i.enqueueAndForget(()=>bg(s,u)),h.fromCache&&a.source==="server"?c.reject(new R(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Eg(o,l,{includeMetadataChanges:!0,Ku:!0});return wg(s,u)}(await No(t),t.asyncQueue,e,n,r)),r.promise}function TU(t,e){const n=new id(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,s){H(r).ku.add(s),s.next()}(await No(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,s){H(r).ku.delete(s)}(await No(t),n))}}function xU(t,e,n,r){const s=function(i,o){let a;return a=typeof i=="string"?hT().encode(i):i,function(c,l){return new mU(c,l)}(function(c,l){if(c instanceof Uint8Array)return uw(c,l);if(c instanceof ArrayBuffer)return uw(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,sl(e));t.asyncQueue.enqueueAndForget(async()=>{fU(await Dg(t),s,r)})}function SU(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const s=H(n);return s.persistence.runTransaction("Get named query","readonly",i=>s.qs.getNamedQuery(i,r))}(await Pg(t),e))}/**
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
 */function hx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new Map;/**
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
 */function Og(t,e,n){if(!n)throw new R(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dx(t,e,n,r){if(e===!0&&r===!0)throw new R(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dw(t){if(!q.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fw(t){if(q.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ad(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Ce(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ad(t);throw new R(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function fx(t,e){if(e<=0)throw new R(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class ol{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new SM;switch(n.type){case"firstParty":return new RM(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hw.get(e);n&&(P("ComponentProvider","Removing Datastore"),hw.delete(e),n.terminate())}(this),Promise.resolve()}}function AU(t,e,n,r={}){var s;const i=(t=Ce(t,ol))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=_t.MOCK_USER;else{a=a0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new R(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(l)}t._authCredentials=new AM(new EE(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class Lt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lt(this.firestore,e,this._query)}}class ur extends Lt{constructor(e,n,r){super(e,n,Wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new q(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function Qr(t,e,...n){if(t=ie(t),Og("collection","path",e),t instanceof ol){const r=xe.fromString(e,...n);return fw(r),new ur(t,null,r)}{if(!(t instanceof He||t instanceof ur))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return fw(r),new ur(t.firestore,null,r)}}function kU(t,e){if(t=Ce(t,ol),Og("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Lt(t,null,function(n){return new Mr(xe.emptyPath(),n)}(e))}function ss(t,e,...n){if(t=ie(t),arguments.length===1&&(e=TE.A()),Og("doc","path",e),t instanceof ol){const r=xe.fromString(e,...n);return dw(r),new He(t,null,new q(r))}{if(!(t instanceof He||t instanceof ur))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return dw(r),new He(t.firestore,t instanceof ur?t.converter:null,new q(r))}}function px(t,e){return t=ie(t),e=ie(e),(t instanceof He||t instanceof ur)&&(e instanceof He||e instanceof ur)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function mx(t,e){return t=ie(t),e=ie(e),t instanceof Lt&&e instanceof Lt&&t.firestore===e.firestore&&Zc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new mg(this,"async_queue_retry"),this.Xc=()=>{const n=nu();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=nu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=nu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new It;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ns(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw rt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=_g.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&Q()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function gp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class RU{constructor(){this._progressObserver={},this._taskCompletionResolver=new It,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NU=-1;class nt extends ol{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new CU,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gx(this),this._firestoreClient.terminate()}}function St(t){return t._firestoreClient||gx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gx(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,c,l){return new o2(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,hx(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new vU(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function PU(t,e){vx(t=Ce(t,nt));const n=St(t);if(n._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");zn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),s=new Rg;return yx(n,s,new ix(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function DU(t){vx(t=Ce(t,nt));const e=St(t);if(e._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");zn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Rg;return yx(e,r,new pU(r,n.cacheSizeBytes))}function yx(t,e,n){const r=new It;return t.asyncQueue.enqueue(async()=>{try{await ru(t,n),await mp(t,e),r.resolve()}catch(s){const i=s;if(!ox(i))throw i;zn("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function OU(t){if(t._initialized&&!t._terminated)throw new R(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new It;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Mn.D())return Promise.resolve();const r=n+"main";await Mn.delete(r)}(dg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function LU(t){return function(e){const n=new It;return e.asyncQueue.enqueueAndForget(async()=>nU(await Dg(e),n)),n.promise}(St(t=Ce(t,nt)))}function MU(t){return wU(St(t=Ce(t,nt)))}function FU(t){return bU(St(t=Ce(t,nt)))}function UU(t,e){const n=St(t=Ce(t,nt)),r=new RU;return xU(n,t._databaseId,e,r),r}function $U(t,e){return SU(St(t=Ce(t,nt)),e).then(n=>n?new Lt(t,null,n.query):null)}function vx(t){if(t._initialized||t._terminated)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(gt.fromBase64String(e))}catch(n){throw new R(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mr(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this._methodName=e}}/**
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
 */class cd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const VU=/^__.*__$/;class BU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qo(e,this.data,n,this.fieldTransforms)}}class _x{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class ld{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ku(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(wx(this.ca)&&VU.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class jU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sl(e)}ya(e,n,r,s=!1){return new ld({ca:e,methodName:n,ga:r,path:st.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fi(t){const e=t._freezeSettings(),n=sl(t._databaseId);return new jU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ud(t,e,n,r,s,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,s);Ug("Data must be an object, but it was:",o,r);const a=Ex(r,o);let c,l;if(i.merge)c=new en(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=yp(e,h,n);if(!o.contains(d))throw new R(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xx(u,d)||u.push(d)}c=new en(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new BU(new Nt(a),c,l)}class al extends Mi{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof al}}function bx(t,e,n){return new ld({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Lg extends Mi{_toFieldTransform(e){return new tl(e.path,new To)}isEqual(e){return e instanceof Lg}}class qU extends Mi{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=bx(this,e,!0),r=this.pa.map(i=>Ui(i,n)),s=new Ei(r);return new tl(e.path,s)}isEqual(e){return this===e}}class zU extends Mi{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=bx(this,e,!0),r=this.pa.map(i=>Ui(i,n)),s=new Ti(r);return new tl(e.path,s)}isEqual(e){return this===e}}class HU extends Mi{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new xo(e.serializer,nT(e.serializer,this.Ia));return new tl(e.path,n)}isEqual(e){return this===e}}function Mg(t,e,n,r){const s=t.ya(1,e,n);Ug("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();Li(r,(c,l)=>{const u=$g(e,c,n);l=ie(l);const h=s.da(u);if(l instanceof al)i.push(u);else{const d=Ui(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new en(i);return new _x(o,a,s.fieldTransforms)}function Fg(t,e,n,r,s,i){const o=t.ya(1,e,n),a=[yp(e,r,n)],c=[s];if(i.length%2!=0)throw new R(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(yp(e,i[d])),c.push(i[d+1]);const l=[],u=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!xx(l,a[d])){const f=a[d];let m=c[d];m=ie(m);const g=o.da(f);if(m instanceof al)l.push(f);else{const _=Ui(m,g);_!=null&&(l.push(f),u.set(f,_))}}const h=new en(l);return new _x(u,h,o.fieldTransforms)}function Ix(t,e,n,r=!1){return Ui(n,t.ya(r?4:3,e))}function Ui(t,e){if(Tx(t=ie(t)))return Ug("Unsupported field value:",e,t),Ex(t,e);if(t instanceof Mi)return function(n,r){if(!wx(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Ui(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nT(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=We.fromDate(n);return{timestampValue:So(r.serializer,s)}}if(n instanceof We){const s=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:So(r.serializer,s)}}if(n instanceof cd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof mr)return{bytesValue:pT(r.serializer,n._byteString)};if(n instanceof He){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:og(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${ad(n)}`)}(t,e)}function Ex(t,e){const n={};return ME(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(t,(r,s)=>{const i=Ui(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Tx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof cd||t instanceof mr||t instanceof He||t instanceof Mi)}function Ug(t,e,n){if(!Tx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ad(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function yp(t,e,n){if((e=ie(e))instanceof Ts)return e._internalPath;if(typeof e=="string")return $g(t,e);throw Ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const KU=new RegExp("[~\\*/\\[\\]]");function $g(t,e,n){if(e.search(KU)>=0)throw Ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ts(...e.split("."))._internalPath}catch{throw Ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ku(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new R(I.INVALID_ARGUMENT,a+t+c)}function xx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GU extends kc{data(){return super.data()}}function hd(t,e){return typeof e=="string"?$g(t,e):e instanceof Ts?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vg{}class cl extends Vg{}function kt(t,e,...n){let r=[];e instanceof Vg&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Bg).length,o=s.filter(a=>a instanceof dd).length;if(i>1||i>0&&o>0)throw new R(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class dd extends cl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new dd(e,n,r)}_apply(e){const n=this._parse(e);return kx(e._query,n),new Lt(e.firestore,e.converter,rp(e._query,n))}_parse(e){const n=Fi(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){gw(u,l);const d=[];for(const f of u)d.push(mw(a,s,f));h={arrayValue:{values:d}}}else h=mw(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||gw(u,l),h=Ix(o,i,u,l==="in"||l==="not-in");return we.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function su(t,e,n){const r=e,s=hd("where",t);return dd._create(s,r,n)}class Bg extends Vg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Oe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)kx(i,a),i=rp(i,a)}(e._query,n),new Lt(e.firestore,e.converter,rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jg extends cl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jg(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ho(s,i);return function(a,c){if(Xm(a)===null){const l=Jh(a);l!==null&&Cx(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Lt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Mr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function iu(t,e="asc"){const n=e,r=hd("orderBy",t);return jg._create(r,n)}class fd extends cl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new fd(e,n,r)}_apply(e){return new Lt(e.firestore,e.converter,Uu(e._query,this._limit,this._limitType))}}function ou(t){return fx("limit",t),fd._create("limit",t,"F")}function WU(t){return fx("limitToLast",t),fd._create("limitToLast",t,"L")}class pd extends cl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new pd(e,n,r)}_apply(e){const n=Ax(e,this.type,this._docOrFields,this._inclusive);return new Lt(e.firestore,e.converter,function(r,s){return new Mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function QU(...t){return pd._create("startAt",t,!0)}function YU(...t){return pd._create("startAfter",t,!1)}class md extends cl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new md(e,n,r)}_apply(e){const n=Ax(e,this.type,this._docOrFields,this._inclusive);return new Lt(e.firestore,e.converter,function(r,s){return new Mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,n))}}function XU(...t){return md._create("endBefore",t,!1)}function JU(...t){return md._create("endAt",t,!0)}function Ax(t,e,n,r){if(n[0]=ie(n[0]),n[0]instanceof kc)return function(s,i,o,a,c){if(!a)throw new R(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of fi(s))if(u.field.isKeyField())l.push(bi(i,a.key));else{const h=a.data.field(u.field);if(Xh(h))throw new R(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new R(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Is(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Fi(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new R(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const m=l[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new R(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Jm(i)&&m.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const g=i.path.child(xe.fromString(m));if(!q.isDocumentKey(g))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const _=new q(g);d.push(bi(o,_))}else{const g=Ix(a,c,m);d.push(g)}}return new Is(d,u)}(t._query,t.firestore._databaseId,s,e,n,r)}}function mw(t,e,n){if(typeof(n=ie(n))=="string"){if(n==="")throw new R(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jm(e)&&n.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!q.isDocumentKey(r))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bi(t,new q(r))}if(n instanceof He)return bi(t,n._key);throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ad(n)}.`)}function gw(t,e){if(!Array.isArray(t)||t.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kx(t,e){if(e.isInequality()){const r=Jh(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new R(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Xm(t);i!==null&&Cx(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Cx(t,e,n){if(!n.isEqual(e))throw new R(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class qg{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Li(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new cd(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bc(e));default:return null}}convertTimestamp(e){const n=vs(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);te(TT(r));const s=new ws(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||rt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ZU extends qg{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rr extends kc{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qa extends Rr{data(e={}){return super.data(e)}}class xs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qa(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new qa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new si(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new qa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new si(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:e$(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function e$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}function Rx(t,e){return t instanceof Rr&&e instanceof Rr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof xs&&e instanceof xs&&t._firestore===e._firestore&&mx(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){t=Ce(t,He);const e=Ce(t.firestore,nt);return lx(St(e),t._key).then(n=>Hg(e,t,n))}class $i extends qg{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function t$(t){t=Ce(t,He);const e=Ce(t.firestore,nt),n=St(e),r=new $i(e);return IU(n,t._key).then(s=>new Rr(e,r,t._key,s,new si(s!==null&&s.hasLocalMutations,!0),t.converter))}function n$(t){t=Ce(t,He);const e=Ce(t.firestore,nt);return lx(St(e),t._key,{source:"server"}).then(n=>Hg(e,t,n))}function cu(t){t=Ce(t,Lt);const e=Ce(t.firestore,nt),n=St(e),r=new $i(e);return Sx(t._query),ux(n,t._query).then(s=>new xs(e,r,t,s))}function r$(t){t=Ce(t,Lt);const e=Ce(t.firestore,nt),n=St(e),r=new $i(e);return EU(n,t._query).then(s=>new xs(e,r,t,s))}function s$(t){t=Ce(t,Lt);const e=Ce(t.firestore,nt),n=St(e),r=new $i(e);return ux(n,t._query,{source:"server"}).then(s=>new xs(e,r,t,s))}function yw(t,e,n){t=Ce(t,He);const r=Ce(t.firestore,nt),s=gd(t.converter,e,n);return ll(r,[ud(Fi(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ge.none())])}function vp(t,e,n,...r){t=Ce(t,He);const s=Ce(t.firestore,nt),i=Fi(s);let o;return o=typeof(e=ie(e))=="string"||e instanceof Ts?Fg(i,"updateDoc",t._key,e,n,r):Mg(i,"updateDoc",t._key,e),ll(s,[o.toMutation(t._key,Ge.exists(!0))])}function i$(t){return ll(Ce(t.firestore,nt),[new Yo(t._key,Ge.none())])}function lu(t,e){const n=Ce(t.firestore,nt),r=ss(t),s=gd(t.converter,e);return ll(n,[ud(Fi(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function zg(t,...e){var n,r,s;t=ie(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||gp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(gp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof He)l=Ce(t.firestore,nt),u=Wo(t._key.path),c={next:h=>{e[o]&&e[o](Hg(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ce(t,Lt);l=Ce(h.firestore,nt),u=h._query;const d=new $i(l);c={next:f=>{e[o]&&e[o](new xs(l,d,h,f))},error:e[o+1],complete:e[o+2]},Sx(t._query)}return function(h,d,f,m){const g=new id(m),_=new Eg(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>wg(await No(h),_)),()=>{g.Dc(),h.asyncQueue.enqueueAndForget(async()=>bg(await No(h),_))}}(St(l),u,a,c)}function o$(t,e){return TU(St(t=Ce(t,nt)),gp(e)?e:{next:e})}function ll(t,e){return function(n,r){const s=new It;return n.asyncQueue.enqueueAndForget(async()=>JF(await Dg(n),r,s)),s.promise}(St(t),e)}function Hg(t,e,n){const r=n.docs.get(e._key),s=new $i(t);return new Rr(t,s,e._key,r,new si(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const a$={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Fi(e)}set(e,n,r){this._verifyNotCommitted();const s=es(e,this._firestore),i=gd(s.converter,n,r),o=ud(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ge.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=es(e,this._firestore);let o;return o=typeof(n=ie(n))=="string"||n instanceof Ts?Fg(this._dataReader,"WriteBatch.update",i._key,n,r,s):Mg(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ge.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=es(e,this._firestore);return this._mutations=this._mutations.concat(new Yo(n._key,Ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function es(t,e){if((t=ie(t)).firestore!==e)throw new R(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class l$ extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Fi(e)}get(e){const n=es(e,this._firestore),r=new ZU(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return Q();const i=s[0];if(i.isFoundDocument())return new kc(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new kc(this._firestore,r,n._key,null,n.converter);throw Q()})}set(e,n,r){const s=es(e,this._firestore),i=gd(s.converter,n,r),o=ud(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=es(e,this._firestore);let o;return o=typeof(n=ie(n))=="string"||n instanceof Ts?Fg(this._dataReader,"Transaction.update",i._key,n,r,s):Mg(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=es(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=es(e,this._firestore),r=new $i(this._firestore);return super.get(e).then(s=>new Rr(this._firestore,r,n._key,s._document,new si(!1,!1),n.converter))}}function u$(t,e,n){t=Ce(t,nt);const r=Object.assign(Object.assign({},a$),n);return function(s){if(s.maxAttempts<1)throw new R(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new It;return s.asyncQueue.enqueueAndForget(async()=>{const c=await _U(s);new yU(s.asyncQueue,c,o,i,a).run()}),a.promise}(St(t),s=>e(new l$(t,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h$(){return new al("deleteField")}function d$(){return new Lg("serverTimestamp")}function f$(...t){return new qU("arrayUnion",t)}function p$(...t){return new zU("arrayRemove",t)}function m$(t){return new HU("increment",t)}(function(t,e=!0){(function(n){Go=n})(Dr),Ar(new Bn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new nt(new kM(n.getProvider("auth-internal")),new PM(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ws(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Sn(f_,"3.12.2",t),Sn(f_,"3.12.2","esm2017")})();const g$="@firebase/firestore-compat",y$="0.3.11";/**
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
 */function Kg(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function vw(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function _w(){if(!s2())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}let Nx=class _p{constructor(e){this._delegate=e}static fromBase64String(e){return _w(),new _p(mr.fromBase64String(e))}static fromUint8Array(e){return vw(),new _p(mr.fromUint8Array(e))}toBase64(){return _w(),this._delegate.toBase64()}toUint8Array(){return vw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function wp(t){return v$(t,["next","error","complete"])}function v$(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class _${enableIndexedDbPersistence(e,n){return PU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return DU(e._delegate)}clearIndexedDbPersistence(e){return OU(e._delegate)}}class Px{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ws||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&zn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){AU(this._delegate,e,n,r)}enableNetwork(){return MU(this._delegate)}disableNetwork(){return FU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,dx("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return LU(this._delegate)}onSnapshotsInSync(e){return o$(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Po(this,Qr(this._delegate,e))}catch(n){throw Ht(n,"collection()","Firestore.collection()")}}doc(e){try{return new In(this,ss(this._delegate,e))}catch(n){throw Ht(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new zt(this,kU(this._delegate,e))}catch(n){throw Ht(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return u$(this._delegate,n=>e(new Dx(this,n)))}batch(){return St(this._delegate),new Ox(new c$(this._delegate,e=>ll(this._delegate,e)))}loadBundle(e){return UU(this._delegate,e)}namedQuery(e){return $U(this._delegate,e).then(n=>n?new zt(this,n):null)}}class yd extends qg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nx(new mr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return In.forKey(n,this.firestore,null)}}function w$(t){TM(t)}class Dx{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new yd(e)}get(e){const n=ii(e);return this._delegate.get(n).then(r=>new Cc(this._firestore,new Rr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const s=ii(e);return r?(Kg("Transaction.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=ii(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=ii(e);return this._delegate.delete(n),this}}class Ox{constructor(e){this._delegate=e}set(e,n,r){const s=ii(e);return r?(Kg("WriteBatch.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=ii(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=ii(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ki{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new qa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Rc(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ki.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(n);return i||(i=new ki(e,new yd(e),n),s.set(n,i)),i}}ki.INSTANCES=new WeakMap;class In{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new yd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new In(n,new He(n._delegate,r,new q(e)))}static forKey(e,n,r){return new In(n,new He(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Po(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Po(this.firestore,Qr(this._delegate,e))}catch(n){throw Ht(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ie(e),e instanceof He?px(this._delegate,e):!1}set(e,n){n=Kg("DocumentReference.set",n);try{return n?yw(this._delegate,e,n):yw(this._delegate,e)}catch(r){throw Ht(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?vp(this._delegate,e):vp(this._delegate,e,n,...r)}catch(s){throw Ht(s,"updateDoc()","DocumentReference.update()")}}delete(){return i$(this._delegate)}onSnapshot(...e){const n=Lx(e),r=Mx(e,s=>new Cc(this.firestore,new Rr(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return zg(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=t$(this._delegate):(e==null?void 0:e.source)==="server"?n=n$(this._delegate):n=au(this._delegate),n.then(r=>new Cc(this.firestore,new Rr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new In(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ht(t,e,n){return t.message=t.message.replace(e,n),t}function Lx(t){for(const e of t)if(typeof e=="object"&&!wp(e))return e;return{}}function Mx(t,e){var n,r;let s;return wp(t[0])?s=t[0]:wp(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:i=>{s.next&&s.next(e(i))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Cc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new In(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Rx(this._delegate,e._delegate)}}class Rc extends Cc{data(e){const n=this._delegate.data(e);return xM(n!==void 0),n}}class zt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new yd(e)}where(e,n,r){try{return new zt(this.firestore,kt(this._delegate,su(e,n,r)))}catch(s){throw Ht(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new zt(this.firestore,kt(this._delegate,iu(e,n)))}catch(r){throw Ht(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new zt(this.firestore,kt(this._delegate,ou(e)))}catch(n){throw Ht(n,"limit()","Query.limit()")}}limitToLast(e){try{return new zt(this.firestore,kt(this._delegate,WU(e)))}catch(n){throw Ht(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new zt(this.firestore,kt(this._delegate,QU(...e)))}catch(n){throw Ht(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new zt(this.firestore,kt(this._delegate,YU(...e)))}catch(n){throw Ht(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new zt(this.firestore,kt(this._delegate,XU(...e)))}catch(n){throw Ht(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new zt(this.firestore,kt(this._delegate,JU(...e)))}catch(n){throw Ht(n,"endAt()","Query.endAt()")}}isEqual(e){return mx(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=r$(this._delegate):(e==null?void 0:e.source)==="server"?n=s$(this._delegate):n=cu(this._delegate),n.then(r=>new bp(this.firestore,new xs(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Lx(e),r=Mx(e,s=>new bp(this.firestore,new xs(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return zg(this._delegate,n,r)}withConverter(e){return new zt(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class b${constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Rc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class bp{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new zt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Rc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new b$(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Rc(this._firestore,r))})}isEqual(e){return Rx(this._delegate,e._delegate)}}class Po extends zt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new In(this.firestore,e):null}doc(e){try{return e===void 0?new In(this.firestore,ss(this._delegate)):new In(this.firestore,ss(this._delegate,e))}catch(n){throw Ht(n,"doc()","CollectionReference.doc()")}}add(e){return lu(this._delegate,e).then(n=>new In(this.firestore,n))}isEqual(e){return px(this._delegate,e._delegate)}withConverter(e){return new Po(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ii(t){return Ce(t,He)}/**
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
 */class Gg{constructor(...e){this._delegate=new Ts(...e)}static documentId(){return new Gg(st.keyField().canonicalString())}isEqual(e){return e=ie(e),e instanceof Ts?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Ys{constructor(e){this._delegate=e}static serverTimestamp(){const e=d$();return e._methodName="FieldValue.serverTimestamp",new Ys(e)}static delete(){const e=h$();return e._methodName="FieldValue.delete",new Ys(e)}static arrayUnion(...e){const n=f$(...e);return n._methodName="FieldValue.arrayUnion",new Ys(n)}static arrayRemove(...e){const n=p$(...e);return n._methodName="FieldValue.arrayRemove",new Ys(n)}static increment(e){const n=m$(e);return n._methodName="FieldValue.increment",new Ys(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const I$={Firestore:Px,GeoPoint:cd,Timestamp:We,Blob:Nx,Transaction:Dx,WriteBatch:Ox,DocumentReference:In,DocumentSnapshot:Cc,Query:zt,QueryDocumentSnapshot:Rc,QuerySnapshot:bp,CollectionReference:Po,FieldPath:Gg,FieldValue:Ys,setLogLevel:w$,CACHE_SIZE_UNLIMITED:NU};function E$(t,e){t.INTERNAL.registerComponent(new Bn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},I$)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T$(t){E$(t,(e,n)=>new Px(e,n,new _$)),t.registerVersion(g$,y$)}T$(Ft);const x$={apiKey:"AIzaSyB92XCW231iCTqH4TmwITBeQvbLVqneYA8",authDomain:"itemshare-68ae3.firebaseapp.com",projectId:"itemshare-68ae3",storageBucket:"itemshare-68ae3.appspot.com",messagingSenderId:"468617277076",appId:"1:468617277076:web:6c0ce2cd38ad48ca66ce81"};Ft.initializeApp(x$);Ft.firestore.FieldValue.serverTimestamp;const Gn=Ft.firestore();/**
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
 */const Fx="firebasestorage.googleapis.com",Ux="storageBucket",S$=2*60*1e3,A$=10*60*1e3,k$=1e3;/**
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
 */class Je extends $t{constructor(e,n,r=0){super(nf(e),`Firebase Storage: ${n} (${nf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ke||(Ke={}));function nf(t){return"storage/"+t}function Wg(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Ke.UNKNOWN,t)}function C$(t){return new Je(Ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function R$(t){return new Je(Ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function N$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Ke.UNAUTHENTICATED,t)}function P$(){return new Je(Ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function D$(t){return new Je(Ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $x(){return new Je(Ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Vx(){return new Je(Ke.CANCELED,"User canceled the upload/download.")}function O$(t){return new Je(Ke.INVALID_URL,"Invalid URL '"+t+"'.")}function L$(t){return new Je(Ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function M$(){return new Je(Ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ux+"' property when initializing the app?")}function Bx(){return new Je(Ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function F$(){return new Je(Ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function U$(){return new Je(Ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $$(t){return new Je(Ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ip(t){return new Je(Ke.INVALID_ARGUMENT,t)}function jx(){return new Je(Ke.APP_DELETED,"The Firebase app was deleted.")}function V$(t){return new Je(Ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function za(t,e){return new Je(Ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ya(t){throw new Je(Ke.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw L$(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},g=n===Fx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",T=new RegExp(`^https?://${g}/${s}/${_}`,"i"),A=[{regex:a,indices:c,postModify:i},{regex:f,indices:m,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let E=0;E<A.length;E++){const L=A[E],F=L.regex.exec(e);if(F){const Y=F[L.indices.bucket];let O=F[L.indices.path];O||(O=""),r=new mn(Y,O),L.postModify(r);break}}if(r==null)throw O$(e);return r}}class B${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function j$(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(f,c())},_)}function d(){i&&clearTimeout(i)}function f(_,...T){if(l){d();return}if(_){d(),u.call(null,_,...T);return}if(c()||o){d(),u.call(null,_,...T);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,h(A)}let m=!1;function g(_){m||(m=!0,d(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,g(!0)},n),g}function q$(t){t(!1)}/**
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
 */function z$(t){return t!==void 0}function H$(t){return typeof t=="function"}function K$(t){return typeof t=="object"&&!Array.isArray(t)}function vd(t){return typeof t=="string"||t instanceof String}function ww(t){return Qg()&&t instanceof Blob}function Qg(){return typeof Blob<"u"&&!Th()}function bw(t,e,n,r){if(r<e)throw Ip(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ip(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ul(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var pi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pi||(pi={}));/**
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
 */function zx(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class G${constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Dl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===pi.NO_ERROR,c=i.getStatus();if(!a||zx(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===pi.ABORT;r(!1,new Dl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Dl(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());z$(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Wg();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?jx():Vx();o(c)}else{const c=$x();o(c)}};this.canceled_?n(!1,new Dl(!1,null,!0)):this.backoffId_=j$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&q$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Dl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function W$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Q$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Y$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function X$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function J$(t,e,n,r,s,i,o=!0){const a=qx(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Y$(l,e),W$(l,n),Q$(l,i),X$(l,r),new G$(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function Z$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eV(...t){const e=Z$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qg())return new Blob(t);throw new Je(Ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function nV(t){if(typeof atob>"u")throw $$("base-64");return atob(t)}/**
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
 */const or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rf{constructor(e,n){this.data=e,this.contentType=n||null}}function rV(t,e){switch(t){case or.RAW:return new rf(Hx(e));case or.BASE64:case or.BASE64URL:return new rf(Kx(t,e));case or.DATA_URL:return new rf(iV(e),oV(e))}throw Wg()}function Hx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function sV(t){let e;try{e=decodeURIComponent(t)}catch{throw za(or.DATA_URL,"Malformed data URL.")}return Hx(e)}function Kx(t,e){switch(t){case or.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw za(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case or.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw za(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nV(e)}catch(s){throw s.message.includes("polyfill")?s:za(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Gx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw za(or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=aV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function iV(t){const e=new Gx(t);return e.base64?Kx(or.BASE64,e.rest):sV(e.rest)}function oV(t){return new Gx(t).contentType}function aV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ts{constructor(e,n){let r=0,s="";ww(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ww(this.data_)){const r=this.data_,s=tV(r,e,n);return s===null?null:new ts(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ts(r,!0)}}static getBlob(...e){if(Qg()){const n=e.map(r=>r instanceof ts?r.data_:r);return new ts(eV.apply(null,n))}else{const n=e.map(o=>vd(o)?rV(or.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new ts(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Wx(t){let e;try{e=JSON.parse(t)}catch{return null}return K$(e)?e:null}/**
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
 */function cV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Qx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function uV(t,e){return e}class jt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||uV}}let Ol=null;function hV(t){return!vd(t)||t.length<2?t:Qx(t)}function Yx(){if(Ol)return Ol;const t=[];t.push(new jt("bucket")),t.push(new jt("generation")),t.push(new jt("metageneration")),t.push(new jt("name","fullPath",!0));function e(i,o){return hV(o)}const n=new jt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new jt("size");return s.xform=r,t.push(s),t.push(new jt("timeCreated")),t.push(new jt("updated")),t.push(new jt("md5Hash",null,!0)),t.push(new jt("cacheControl",null,!0)),t.push(new jt("contentDisposition",null,!0)),t.push(new jt("contentEncoding",null,!0)),t.push(new jt("contentLanguage",null,!0)),t.push(new jt("contentType",null,!0)),t.push(new jt("metadata","customMetadata",!0)),Ol=t,Ol}function dV(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new mn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function fV(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return dV(r,t),r}function Xx(t,e,n){const r=Wx(e);return r===null?null:fV(t,r,n)}function pV(t,e,n,r){const s=Wx(e);if(s===null||!vd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=ul(d,n,r),m=qx({alt:"media",token:l});return f+m})[0]}function Jx(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ta{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function xr(t){if(!t)throw Wg()}function Yg(t,e){function n(r,s){const i=Xx(t,s,e);return xr(i!==null),i}return n}function mV(t,e){function n(r,s){const i=Xx(t,s,e);return xr(i!==null),pV(i,s,t.host,t._protocol)}return n}function hl(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=P$():s=N$():n.getStatus()===402?s=R$(t.bucket):n.getStatus()===403?s=D$(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Zx(t){const e=hl(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=C$(t.path)),i.serverResponse=s.serverResponse,i}return n}function gV(t,e,n){const r=e.fullServerUrl(),s=ul(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ta(s,i,Yg(t,n),o);return a.errorHandler=Zx(e),a}function yV(t,e,n){const r=e.fullServerUrl(),s=ul(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ta(s,i,mV(t,n),o);return a.errorHandler=Zx(e),a}function vV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function eS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vV(null,e)),r}function _V(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let E=0;E<2;E++)A=A+Math.random().toString().slice(2);return A}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=eS(e,r,s),u=Jx(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=ts.getBlob(h,r,d);if(f===null)throw Bx();const m={name:l.fullPath},g=ul(i,t.host,t._protocol),_="POST",T=t.maxUploadRetryTime,S=new ta(g,_,Yg(t,n),T);return S.urlParams=m,S.headers=o,S.body=f.uploadData(),S.errorHandler=hl(e),S}class Gu{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Xg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{xr(!1)}return xr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function wV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=eS(e,r,s),a={name:o.fullPath},c=ul(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Jx(o,n),d=t.maxUploadRetryTime;function f(g){Xg(g);let _;try{_=g.getResponseHeader("X-Goog-Upload-URL")}catch{xr(!1)}return xr(vd(_)),_}const m=new ta(c,l,f,d);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=hl(e),m}function bV(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=Xg(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{xr(!1)}h||xr(!1);const d=Number(h);return xr(!isNaN(d)),new Gu(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new ta(n,o,i,a);return c.headers=s,c.errorHandler=hl(e),c}const Iw=256*1024;function IV(t,e,n,r,s,i,o,a){const c=new Gu(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw F$();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},g=r.slice(h,d);if(g===null)throw Bx();function _(E,L){const F=Xg(E,["active","final"]),Y=c.current+u,O=r.size();let V;return F==="final"?V=Yg(e,i)(E,L):V=null,new Gu(Y,O,F==="final",V)}const T="POST",S=e.maxUploadRetryTime,A=new ta(n,T,_,S);return A.headers=m,A.body=g.uploadData(),A.progressCallback=a||null,A.errorHandler=hl(t),A}const Jt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function sf(t){switch(t){case"running":case"pausing":case"canceling":return Jt.RUNNING;case"paused":return Jt.PAUSED;case"success":return Jt.SUCCESS;case"canceled":return Jt.CANCELED;case"error":return Jt.ERROR;default:return Jt.ERROR}}/**
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
 */class EV{constructor(e,n,r){if(H$(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Gi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class TV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ya("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ya("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ya("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ya("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ya("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xV extends TV{initXhr(){this.xhr_.responseType="text"}}function Ji(){return new xV}/**
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
 */class SV{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Yx(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(zx(s.status,[]))if(i)s=$x();else{this.sleepTime=Math.max(this.sleepTime*2,k$),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ke.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=wV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ji,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=bV(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Ji,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Iw*this._chunkMultiplier,n=new Gu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=IV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ji,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Iw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=gV(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Ji,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=_V(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ji,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Vx(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=sf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new EV(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(sf(this._state)){case Jt.SUCCESS:Gi(this._resolve.bind(null,this.snapshot))();break;case Jt.CANCELED:case Jt.ERROR:const n=this._reject;Gi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(sf(this._state)){case Jt.RUNNING:case Jt.PAUSED:e.next&&Gi(e.next.bind(e,this.snapshot))();break;case Jt.SUCCESS:e.complete&&Gi(e.complete.bind(e))();break;case Jt.CANCELED:case Jt.ERROR:e.error&&Gi(e.error.bind(e,this._error))();break;default:e.error&&Gi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ci{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ci(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qx(this._location.path)}get storage(){return this._service}get parent(){const e=cV(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new Ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw V$(e)}}function AV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new SV(t,new ts(e),n)}function kV(t){t._throwIfRoot("getDownloadURL");const e=yV(t.storage,t._location,Yx());return t.storage.makeRequestWithTokens(e,Ji).then(n=>{if(n===null)throw U$();return n})}function CV(t,e){const n=lV(t._location.path,e),r=new mn(t._location.bucket,n);return new Ci(t.storage,r)}/**
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
 */function RV(t){return/^[A-Za-z]+:\/\//.test(t)}function NV(t,e){return new Ci(t,e)}function tS(t,e){if(t instanceof Jg){const n=t;if(n._bucket==null)throw M$();const r=new Ci(n,n._bucket);return e!=null?tS(r,e):r}else return e!==void 0?CV(t,e):t}function PV(t,e){if(e&&RV(e)){if(t instanceof Jg)return NV(t,e);throw Ip("To use ref(service, url), the first argument must be a Storage instance.")}else return tS(t,e)}function Ew(t,e){const n=e==null?void 0:e[Ux];return n==null?null:mn.makeFromBucketSpec(n,t)}function DV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:a0(s,t.app.options.projectId))}class Jg{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Fx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=S$,this._maxUploadRetryTime=A$,this._requests=new Set,s!=null?this._bucket=mn.makeFromBucketSpec(s,this._host):this._bucket=Ew(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=Ew(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ci(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new B$(jx());{const o=J$(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Tw="@firebase/storage",xw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="storage";function OV(t,e,n){return t=ie(t),AV(t,e,n)}function LV(t){return t=ie(t),kV(t)}function MV(t,e){return t=ie(t),PV(t,e)}function FV(t=m0(),e){t=ie(t);const r=nm(t,nS).getImmediate({identifier:e}),s=GC("storage");return s&&UV(r,...s),r}function UV(t,e,n,r={}){DV(t,e,n,r)}function $V(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Jg(n,r,s,e,Dr)}function VV(){Ar(new Bn(nS,$V,"PUBLIC").setMultipleInstances(!0)),Sn(Tw,xw,""),Sn(Tw,xw,"esm2017")}VV();const BV=FV(),_n=yk("itemshare",{state:()=>({temp:1,myUserUid:localStorage.getItem("useruid")||null,myProfile:{firstName:"",lastName:"",image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",location:""},editProfile:{id:9,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},sampleProfiles:[{id:0,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},{id:1,firstName:"John",lastName:"Smith",image:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",location:"Baybay City"},{id:2,firstName:"Emily",lastName:"Johnson",image:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",location:"Tacloban City"},{id:3,firstName:"David",lastName:"Brown",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Calbayog City"},{id:4,firstName:"Sarah",lastName:"Davis",image:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",location:"Tacloban City"},{id:5,firstName:"Michael",lastName:"Wilson",image:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",location:"Ormoc City"},{id:6,firstName:"Jessica",lastName:"Thompson",image:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",location:"Maasin City"},{id:7,firstName:"Christopher",lastName:"Martinez",image:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",location:"Tacloban City"},{id:8,firstName:"Megan",lastName:"Taylor",image:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",location:"Calbayog City"}],rentedItems:[],sampleItems:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",ownerId:0},{itemId:2,itemName:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",ownerId:1},{itemId:3,itemName:"Cushion set A",location:"Maasin City",rentAmount:"50.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",ownerId:2},{itemId:4,name:"Table",location:"Ormoc City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",ownerId:3},{itemId:5,itemName:"Chair",location:"Sogod, Southern Leyte",rentAmount:"75.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",ownerId:4},{itemId:6,itemName:"Bookshelf",location:"Biliran",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",ownerId:5},{itemId:7,itemName:"Sofa",location:"Ormoc City",rentAmount:"250.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",ownerId:6},{itemId:8,itemName:"Dining Table",location:"Baybay City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",ownerId:7},{itemId:9,itemName:"Kitchen Cabinet",location:"Maasin, Southern Leyte",rentAmount:"220.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",ownerId:8},{itemId:10,itemName:"Desk",location:"Tacloban City",rentAmount:"120.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",ownerId:0},{itemId:11,itemName:"Bed Frame",location:"Ormoc City",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",ownerId:1},{itemId:12,itemName:"Mattress",location:"Baybay City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",ownerId:2},{itemId:13,itemName:"Wardrobe",location:"Tacloban City",rentAmount:"180.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",ownerId:3},{itemId:14,itemName:"Television",location:"Maasin, Southern Leyte",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",ownerId:4},{itemId:15,itemName:"Coffee Table",location:"Ormoc City",rentAmount:"90.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",ownerId:5},{itemId:16,itemName:"Side Table",location:"Baybay City",rentAmount:"60.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",ownerId:6},{itemId:17,itemName:"Dresser",location:"Tacloban City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",ownerId:7},{itemId:18,itemName:"Armchair",location:"Maasin, Southern Leyte",rentAmount:"120.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",ownerId:8}],loadedMessages:[]}),getters:{tempUserProfile(t){return{firstName:"Loading...",lastName:"",image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",location:"Loading location..."}},productsCheaperThan(t){return e=>t.products.filter(n=>n.price<e)},itemsInRange(t){return(e,n)=>t.sampleItems.slice(e,n)},itemById(t){return e=>t.sampleItems.find(n=>n.id==e)},loadedProfile(t){return e=>t.sampleProfiles[e]},loggedInUser(t){return t.myUserUid},isSamePerson(t){return e=>e+1==t.loadedMessages.length?!1:t.loadedMessages[e].sender==t.loadedMessages[e+1].sender},isSameMessageSource(t){return e=>{var n="";return e+1<t.loadedMessages.length&&t.loadedMessages[e].sender==t.loadedMessages[e+1].sender&&(n+=t.loadedMessages[e].sender==t.myUserUid?" rounded-br-none":" rounded-bl-none"),e-1>=0&&t.loadedMessages[e].sender==t.loadedMessages[e-1].sender&&(n+=t.loadedMessages[e].sender==t.myUserUid?" rounded-tr-none":" rounded-tl-none"),n+=t.loadedMessages[e].sender==t.myUserUid?" bg-primary text-background bg-opacity-90":" bg-secondary bg-opacity-40",n}}},actions:{async initMyProfile(){Ft.auth().onAuthStateChanged(async t=>{if(t)this.myUserUid=t.uid,this.myProfile=await this.loadProfile(t.uid);else return this.useruid=null,{}})},async loadProfile(t){const e=await au(ss(Gn,"users",t));if(e.exists())return{firstName:e.data().firstName,lastName:e.data().lastName,location:e.data().location,image:e.data().image}},async login(t,e){if(t!==""&&e!=="")try{const n=await Ft.auth().signInWithEmailAndPassword(t,e);return this.myUserUid=n.user.uid,localStorage.setItem("useruid",this.myUserUid),!0}catch(n){switch(n.code){case"auth/invalid-email":throw"Invalid email";case"auth/user-not-found":throw"No account with that email was found";case"auth/wrong-password":throw"Incorrect password";default:throw n.code}}else throw"Please fill out all the fields!"},async loadItems(t=12,e=""){let n=kt(Qr(Gn,"items"));e&&(n=kt(n,su("ownerId","==",e))),n=kt(n,iu("createdAt","desc"),ou(t));const r=await cu(n),s=[];return r.forEach(i=>{const o={itemId:i.id,itemName:i.data().itemName,location:i.data().location,rentAmount:i.data().rentAmount,rentRate:i.data().rentRate,image:i.data().images?i.data().images[0]:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"};s.push(o)}),s},async loadItem(t){const e=await au(ss(Gn,"items",t));if(e.exists())return{itemName:e.data().itemName,location:e.data().location,rentAmount:e.data().rentAmount,rentRate:e.data().rentRate,description:e.data().description,tags:e.data().tags,images:e.data().images||["https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"],ownerId:e.data().ownerId}},async uploadImage(t){const e=MV(BV,"itemImages/"+Date.now()+"."+t.name.split(".").pop());return await OV(e,t),await LV(e)},async createItem(t){if(t.imageFiles.length==0||t.itemName==""||t.location==""||t.rentAmount==""||t.rentRate==""||t.tags.length==0||t.description=="")throw"Please fill out all the fields!";try{const n=[];for(var e of t.imageFiles)n.push(await this.uploadImage(e));return await lu(Qr(Gn,"items"),{ownerId:this.myUserUid,images:n,itemName:t.itemName,location:t.location,rentAmount:t.rentAmount,rentRate:t.rentRate,tags:t.tags,description:t.description,createdAt:Date.now()}),!0}catch(n){throw n.message}},searchItem(){return[]},async loadConversations(t){let e=kt(Qr(Gn,"conversations"));e=kt(e,su("participants","array-contains",t)),e=kt(e,iu("lastSentAt","desc"),ou(12));const n=await cu(e),r=[];for(const s of n.docs){let i={convoId:s.id,lastMessage:s.data().lastMessage,lastSentAt:s.data().lastSentAt,lastSender:s.data().lastSender,participant:await this.loadProfile(s.data().participants.find(o=>o!=t)),isRead:s.data().isRead};r.push(i)}return r},async loadConversation(t){const e=await au(ss(Gn,"conversations",t));if(e.exists())return{lastMessage:e.data().lastMessage,lastSentAt:e.data().lastSentAt,lastSender:e.data().lastSender,participants:e.data().participants,isRead:e.data().isRead}},async loadMessages(t){this.loadedMessages=[];let e=kt(Qr(Gn,"conversations",t,"messages"));e=kt(e,iu("sentAt"),ou(64)),zg(e,n=>{const r=[];n.forEach(s=>{let i={content:s.data().content,sender:s.data().sender,type:s.data().type};r.push(i)}),this.loadedMessages=r})},async register(t){if(t.phoneNumber==""||t.email==""||t.firstName==""||t.lastName==""||t.gender=="Select"||t.location==""||t.birthday==""||t.password==""||t.confirmPassword=="")throw"Please fill out all the fields!";if(t.password!=t.confirmPassword)throw"Password does not match!";if(!t.terms)throw"Please agree to the terms and conditions.";switch(t.gender){case"Male":t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_male.png?alt=media&token=b239dcf0-a57f-43a1-a0bd-34898f5a9714";break;case"Female":t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_female.png?alt=media&token=6bca62c3-150b-46f7-ad60-6128217e24bd";break;default:t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366";break}try{const e=await Ft.auth().createUserWithEmailAndPassword(t.email,t.password);await Gn.collection("users").doc(e.user.uid).set({firstName:t.firstName,lastName:t.lastName,email:t.email,phoneNumber:t.phoneNumber,gender:t.gender,birthday:t.birthday,location:t.location,image:t.image,verified:!1,admin:!1}),this.myUserUid=e.user.uid,localStorage.setItem("useruid",this.myUserUid)}catch(e){throw e.message}return!0},async logout(){try{return await Ft.auth().signOut(),this.myUserUid=null,localStorage.removeItem("useruid"),!0}catch(t){throw t}},async messageOwner(t,e){const n=Qr(Gn,"conversations"),r=[this.myUserUid,t],s=kt(n,su("participants","==",r)),i=await cu(s);let o,a;return i.empty?(a=await lu(n,{participants:r}),o=a.id):(a=i.docs[0],o=a.id),this.sendMessage(o,e),o},async sendMessage(t,e){const n=ss(Gn,"conversations",t),r=Qr(n,"messages");await lu(r,{sender:this.myUserUid,type:"message",content:e,sentAt:Ft.firestore.FieldValue.serverTimestamp()}),await vp(n,{lastMessage:e,lastSender:this.myUserUid,lastSentAt:Ft.firestore.FieldValue.serverTimestamp(),isRead:!1})}}}),jV={class:"flex w-full flex-col gap-1"},qV=["type","placeholder","value","disabled"],Ye={__name:"CustomField",props:{modelValue:{default:""},inputType:{type:String,default:"text"},placeholder:{type:String,default:""},label:{type:String,default:""},disabled:{default:!1}},emits:["update:modelValue"],setup(t){return(e,n)=>(Z(),ae("div",jV,[fn(p("label",{class:"text-text"},De(t.label),513),[[ls,t.label]]),p("input",{size:"1",type:t.inputType,placeholder:t.placeholder,value:t.modelValue,disabled:t.disabled,onInput:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value)),class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 text-text placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-2 focus:border-primary focus:border-opacity-100 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50 disabled:bg-text disabled:bg-opacity-10"},null,40,qV),jp(e.$slots,"default")]))}},zV={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},HV=["onSubmit"],KV=p("h1",null,"Login",-1),GV={class:"pt-2"},WV={class:"pt-2"},QV=p("button",{class:"rounded-md bg-primary px-6 py-2 text-background"}," Login ",-1),YV={__name:"LoginView",setup(t){const e=Mc(),n=_n();let r=de("");const s=de(""),i=de("");async function o(){r.value="";try{await n.login(s.value,i.value)&&e.push("/home")}catch(a){r.value=a}}return(a,c)=>{const l=Oc("RouterLink");return Z(),ae("div",zV,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:$n(o,["stop","prevent"])},[KV,j(Ye,{"input-type":"email",modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),placeholder:"Email"},null,8,["modelValue"]),j(Ye,{"input-type":"password",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=u=>i.value=u),placeholder:"Password"},null,8,["modelValue"]),fn(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},De(he(r)),513),[[ls,he(r)]]),p("p",GV,[j(l,{to:"/forgot-password",class:"underline decoration-accent"},{default:Ue(()=>[ke("Forgot Password?")]),_:1})]),p("p",WV,[ke(" New here? "),j(l,{to:"/register",class:"underline decoration-accent"},{default:Ue(()=>[ke("Create an account!")]),_:1})]),QV],40,HV)])}}},XV={class:"flex w-full flex-col gap-1"},JV=["disabled","value"],ZV=p("option",null,"Select...",-1),rS={__name:"CustomDropdown",props:{modelValue:{default:""},label:{type:String,default:""},disabled:{default:!1}},emits:["update:modelValue"],setup(t){return(e,n)=>(Z(),ae("div",XV,[fn(p("label",{class:"text-text"},De(t.label),513),[[ls,t.label]]),p("select",{disabled:t.disabled,value:t.modelValue,class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 focus:border-2 focus:border-primary focus:border-opacity-60 focus:bg-white focus:bg-opacity-90 focus:ring-0",onChange:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value))},[jp(e.$slots,"default",{},()=>[ZV])],40,JV)]))}},eB={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},tB=["onSubmit"],nB=p("h1",null,"Create an account",-1),rB={class:"flex flex-col gap-2 xl:flex-row xl:gap-8"},sB={class:"flex basis-1/2 flex-col gap-2"},iB=p("button",{class:"rounded-md border-2 border-text border-opacity-50 bg-secondary px-6 py-2 text-text text-opacity-80 transition-colors hover:bg-opacity-90"}," Send SMS Code ",-1),oB=p("option",null,"Select",-1),aB=p("option",null,"Male",-1),cB=p("option",null,"Female",-1),lB=p("option",null,"Others",-1),uB={class:"flex basis-1/2 flex-col gap-2"},hB={class:"text-sm"},dB=p("span",null," I agree to the ",-1),fB=p("button",{class:"rounded-md border-2 border-transparent bg-primary px-6 py-2 text-white"}," Create account ",-1),pB={__name:"RegisterView",setup(t){const e=Mc(),n=_n();let r=de("");const s=de({phoneNumber:"",email:"",firstName:"",lastName:"",gender:"Select",location:"",image:"",birthday:"",password:"",confirmPassword:"",terms:!1});async function i(){try{await n.register(s.value)&&e.push("/home")}catch(o){r.value=o}}return(o,a)=>{const c=Oc("RouterLink");return Z(),ae("div",eB,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:$n(i,["stop","prevent"])},[nB,p("div",rB,[p("div",sB,[j(Ye,{label:"Phone Number",modelValue:s.value.phoneNumber,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value.phoneNumber=l),"input-type":"tel",placeholder:"Enter your phone number"},{default:Ue(()=>[iB]),_:1},8,["modelValue"]),j(Ye,{label:"Email Address",modelValue:s.value.email,"onUpdate:modelValue":a[1]||(a[1]=l=>s.value.email=l),"input-type":"email",placeholder:"Email"},null,8,["modelValue"]),j(Ye,{label:"First Name",modelValue:s.value.firstName,"onUpdate:modelValue":a[2]||(a[2]=l=>s.value.firstName=l),"input-type":"text",placeholder:"First Name"},null,8,["modelValue"]),j(Ye,{label:"Last Name",modelValue:s.value.lastName,"onUpdate:modelValue":a[3]||(a[3]=l=>s.value.lastName=l),"input-type":"text",placeholder:"Last Name"},null,8,["modelValue"]),j(rS,{label:"Gender",modelValue:s.value.gender,"onUpdate:modelValue":a[4]||(a[4]=l=>s.value.gender=l)},{default:Ue(()=>[oB,aB,cB,lB]),_:1},8,["modelValue"])]),p("div",uB,[j(Ye,{label:"Location",modelValue:s.value.location,"onUpdate:modelValue":a[5]||(a[5]=l=>s.value.location=l),"input-type":"text",placeholder:"Location"},null,8,["modelValue"]),j(Ye,{label:"Birthday",modelValue:s.value.birthday,"onUpdate:modelValue":a[6]||(a[6]=l=>s.value.birthday=l),"input-type":"date"},null,8,["modelValue"]),j(Ye,{label:"Password",modelValue:s.value.password,"onUpdate:modelValue":a[7]||(a[7]=l=>s.value.password=l),"input-type":"password",placeholder:"Password"},null,8,["modelValue"]),j(Ye,{label:"Confirm Password",modelValue:s.value.confirmPassword,"onUpdate:modelValue":a[8]||(a[8]=l=>s.value.confirmPassword=l),"input-type":"password",placeholder:"Confirm Password"},null,8,["modelValue"]),fn(p("div",{class:"errorMessage rounded-md border-2 border-red-400 bg-red-300 px-4 py-2 align-middle text-sm text-red-800"},De(he(r)),513),[[ls,he(r)]]),p("p",hB,[fn(p("input",{type:"checkbox",name:"checkbox",id:"checkbox","onUpdate:modelValue":a[9]||(a[9]=l=>s.value.terms=l),class:"text-accent focus:ring-0"},null,512),[[Vb,s.value.terms]]),dB,j(c,{to:"/terms-and-conditions",class:"underline decoration-accent"},{default:Ue(()=>[ke(" Terms and Conditions ")]),_:1})]),fB,j(c,{to:"/login",class:"rounded-md border-2 border-primary bg-background px-6 py-2 text-center text-primary"},{default:Ue(()=>[ke(" Go back ")]),_:1})])])],40,tB)])}}},mB={class:"whitespace-pre text-primary"},gB={class:"material-icons-outlined"},oi={__name:"StarRating",props:{value:{default:0}},setup(t){return(e,n)=>(Z(),ae("p",mB,[(Z(),ae(Fe,null,ar(5,r=>p("span",gB,De(r<t.value?"star":"grade"),1)),64))]))}},yB={key:0,class:"absolute left-0 z-50 mt-2.5 w-screen max-w-max translate-x-0 overflow-hidden rounded-none bg-white shadow-md shadow-gray-400 md:left-auto md:-translate-x-1/2 md:rounded-lg lg:mt-4",id:"dropdownNotifications"},vB={class:"flex h-64 w-full flex-col md:w-96"},_B=p("h2",{class:"z-10 px-3 py-2 font-bold text-green-600 shadow-sm shadow-gray-400"}," NOTIFICATIONS ",-1),wB={class:"overflow-y-auto bg-green-50"},bB={class:"flex flex-col gap-1 p-2"},IB={class:"bg-white p-2 text-sm text-gray-700 shadow-sm shadow-gray-400"},EB={__name:"NotificationsPopup",props:{visible:Boolean},setup(t){const e=de([{type:"review",message:'Lorem Dolor gave your "3D Scanner" a rating:',rating:4,time:"JUST NOW"},{type:"review",message:'Lorem Dolor left a review to your "3D Scanner": "Way lami imo item di nani nahu iuli nimo kay ahu ni sunugon human gamit!"',rating:5,time:"24 MINS AGO"},{type:"upcoming",message:'"2D Printer" will be ready for you to pick up in 24 hours.',time:"23 HOURS AGO"},{type:"message",message:"Lorem Dolor chatted you! Be sure to leave a reply.",time:"4 DAYS AGO"}]);return(n,r)=>(Z(),ds(Qp,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:Ue(()=>[t.visible?(Z(),ae("div",yB,[p("div",vB,[_B,p("div",wB,[p("div",bB,[(Z(!0),ae(Fe,null,ar(e.value,s=>(Z(),ae("article",IB,[p("p",null,De(s.message),1),s.rating?(Z(),ds(oi,{key:0,value:s.rating},null,8,["value"])):cr("",!0),p("p",null,De(s.time),1)]))),256))])])])])):cr("",!0)]),_:1}))}};var TB=function(){function t(e,n){n===void 0&&(n=[]),this._eventType=e,this._eventFunctions=n}return t.prototype.init=function(){var e=this;this._eventFunctions.forEach(function(n){typeof window<"u"&&window.addEventListener(e._eventType,n)})},t}(),Wu=globalThis&&globalThis.__assign||function(){return Wu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Wu.apply(this,arguments)},Qu={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},sS=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=Qu),this._items=e,this._options=Wu(Wu({},Qu),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&this._items.map(function(n){n.active&&e.open(n.id),n.triggerEl.addEventListener("click",function(){e.toggle(n.id)})})},t.prototype.getItem=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.open=function(e){var n,r,s=this,i=this.getItem(e);this._options.alwaysOpen||this._items.map(function(o){var a,c;o!==i&&((a=o.triggerEl.classList).remove.apply(a,s._options.activeClasses.split(" ")),(c=o.triggerEl.classList).add.apply(c,s._options.inactiveClasses.split(" ")),o.targetEl.classList.add("hidden"),o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"))}),(n=i.triggerEl.classList).add.apply(n,this._options.activeClasses.split(" ")),(r=i.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),i.triggerEl.setAttribute("aria-expanded","true"),i.targetEl.classList.remove("hidden"),i.active=!0,i.iconEl&&i.iconEl.classList.add("rotate-180"),this._options.onOpen(this,i)},t.prototype.toggle=function(e){var n=this.getItem(e);n.active?this.close(e):this.open(e),this._options.onToggle(this,n)},t.prototype.close=function(e){var n,r,s=this.getItem(e);(n=s.triggerEl.classList).remove.apply(n,this._options.activeClasses.split(" ")),(r=s.triggerEl.classList).add.apply(r,this._options.inactiveClasses.split(" ")),s.targetEl.classList.add("hidden"),s.triggerEl.setAttribute("aria-expanded","false"),s.active=!1,s.iconEl&&s.iconEl.classList.remove("rotate-180"),this._options.onClose(this,s)},t}();function Zg(){document.querySelectorAll("[data-accordion]").forEach(function(t){var e=t.getAttribute("data-accordion"),n=t.getAttribute("data-active-classes"),r=t.getAttribute("data-inactive-classes"),s=[];t.querySelectorAll("[data-accordion-target]").forEach(function(i){if(i.closest("[data-accordion]")===t){var o={id:i.getAttribute("data-accordion-target"),triggerEl:i,targetEl:document.querySelector(i.getAttribute("data-accordion-target")),iconEl:i.querySelector("[data-accordion-icon]"),active:i.getAttribute("aria-expanded")==="true"};s.push(o)}}),new sS(s,{alwaysOpen:e==="open",activeClasses:n||Qu.activeClasses,inactiveClasses:r||Qu.inactiveClasses})})}typeof window<"u"&&(window.Accordion=sS,window.initAccordions=Zg);var Yu=globalThis&&globalThis.__assign||function(){return Yu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Yu.apply(this,arguments)},Sw={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},iS=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Sw),this._targetEl=e,this._triggerEl=n,this._options=Yu(Yu({},Sw),r),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){e.toggle()}))},t.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},t.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},t.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},t}();function ey(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(t){var e=t.getAttribute("data-collapse-toggle"),n=document.getElementById(e);n?new iS(n,t):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))})}typeof window<"u"&&(window.Collapse=iS,window.initCollapses=ey);var Xs=globalThis&&globalThis.__assign||function(){return Xs=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Xs.apply(this,arguments)},uu={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},oS=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=uu),this._items=e,this._options=Xs(Xs(Xs({},uu),n),{indicators:Xs(Xs({},uu.indicators),n.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return t.prototype._init=function(){var e=this;this._items.map(function(n){n.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(n,r){n.el.addEventListener("click",function(){e.slideTo(r)})})},t.prototype.getItem=function(e){return this._items[e]},t.prototype.slideTo=function(e){var n=this._items[e],r={left:n.position===0?this._items[this._items.length-1]:this._items[n.position-1],middle:n,right:n.position===this._items.length-1?this._items[0]:this._items[n.position+1]};this._rotate(r),this._setActiveItem(n),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},t.prototype.next=function(){var e=this._getActiveItem(),n=null;e.position===this._items.length-1?n=this._items[0]:n=this._items[e.position+1],this.slideTo(n.position),this._options.onNext(this)},t.prototype.prev=function(){var e=this._getActiveItem(),n=null;e.position===0?n=this._items[this._items.length-1]:n=this._items[e.position-1],this.slideTo(n.position),this._options.onPrev(this)},t.prototype._rotate=function(e){this._items.map(function(n){n.el.classList.add("hidden")}),e.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.left.el.classList.add("-translate-x-full","z-10"),e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-20"),e.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.right.el.classList.add("translate-x-full","z-10")},t.prototype.cycle=function(){var e=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){e.next()},this._intervalDuration))},t.prototype.pause=function(){clearInterval(this._intervalInstance)},t.prototype._getActiveItem=function(){return this._activeItem},t.prototype._setActiveItem=function(e){var n,r,s=this;this._activeItem=e;var i=e.position;this._indicators.length&&(this._indicators.map(function(o){var a,c;o.el.setAttribute("aria-current","false"),(a=o.el.classList).remove.apply(a,s._options.indicators.activeClasses.split(" ")),(c=o.el.classList).add.apply(c,s._options.indicators.inactiveClasses.split(" "))}),(n=this._indicators[i].el.classList).add.apply(n,this._options.indicators.activeClasses.split(" ")),(r=this._indicators[i].el.classList).remove.apply(r,this._options.indicators.inactiveClasses.split(" ")),this._indicators[i].el.setAttribute("aria-current","true"))},t}();function ty(){document.querySelectorAll("[data-carousel]").forEach(function(t){var e=t.getAttribute("data-carousel-interval"),n=t.getAttribute("data-carousel")==="slide",r=[],s=0;t.querySelectorAll("[data-carousel-item]").length&&Array.from(t.querySelectorAll("[data-carousel-item]")).map(function(l,u){r.push({position:u,el:l}),l.getAttribute("data-carousel-item")==="active"&&(s=u)});var i=[];t.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function(l){i.push({position:parseInt(l.getAttribute("data-carousel-slide-to")),el:l})});var o=new oS(r,{defaultPosition:s,indicators:{items:i},interval:e||uu.interval});n&&o.cycle();var a=t.querySelector("[data-carousel-next]"),c=t.querySelector("[data-carousel-prev]");a&&a.addEventListener("click",function(){o.next()}),c&&c.addEventListener("click",function(){o.prev()})})}typeof window<"u"&&(window.Carousel=oS,window.initCarousels=ty);var Xu=globalThis&&globalThis.__assign||function(){return Xu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Xu.apply(this,arguments)},Aw={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},aS=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Aw),this._targetEl=e,this._triggerEl=n,this._options=Xu(Xu({},Aw),r),this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){e.hide()})},t.prototype.hide=function(){var e=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){e._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},t}();function ny(){document.querySelectorAll("[data-dismiss-target]").forEach(function(t){var e=t.getAttribute("data-dismiss-target"),n=document.querySelector(e);n?new aS(n,t):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))})}typeof window<"u"&&(window.Dismiss=aS,window.initDismisses=ny);var nn="top",Cn="bottom",Rn="right",rn="left",ry="auto",dl=[nn,Cn,Rn,rn],Do="start",Nc="end",xB="clippingParents",cS="viewport",va="popper",SB="reference",kw=dl.reduce(function(t,e){return t.concat([e+"-"+Do,e+"-"+Nc])},[]),lS=[].concat(dl,[ry]).reduce(function(t,e){return t.concat([e,e+"-"+Do,e+"-"+Nc])},[]),AB="beforeRead",kB="read",CB="afterRead",RB="beforeMain",NB="main",PB="afterMain",DB="beforeWrite",OB="write",LB="afterWrite",MB=[AB,kB,CB,RB,NB,PB,DB,OB,LB];function gr(t){return t?(t.nodeName||"").toLowerCase():null}function vn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ri(t){var e=vn(t).Element;return t instanceof e||t instanceof Element}function An(t){var e=vn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function sy(t){if(typeof ShadowRoot>"u")return!1;var e=vn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function FB(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},s=e.attributes[n]||{},i=e.elements[n];!An(i)||!gr(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var a=s[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function UB(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],i=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!An(s)||!gr(s)||(Object.assign(s.style,a),Object.keys(i).forEach(function(c){s.removeAttribute(c)}))})}}const $B={name:"applyStyles",enabled:!0,phase:"write",fn:FB,effect:UB,requires:["computeStyles"]};function hr(t){return t.split("-")[0]}var mi=Math.max,Ju=Math.min,Oo=Math.round;function Ep(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function uS(){return!/^((?!chrome|android).)*safari/i.test(Ep())}function Lo(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),s=1,i=1;e&&An(t)&&(s=t.offsetWidth>0&&Oo(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Oo(r.height)/t.offsetHeight||1);var o=Ri(t)?vn(t):window,a=o.visualViewport,c=!uS()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/s,u=(r.top+(c&&a?a.offsetTop:0))/i,h=r.width/s,d=r.height/i;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function iy(t){var e=Lo(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function hS(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&sy(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Nr(t){return vn(t).getComputedStyle(t)}function VB(t){return["table","td","th"].indexOf(gr(t))>=0}function Os(t){return((Ri(t)?t.ownerDocument:t.document)||window.document).documentElement}function _d(t){return gr(t)==="html"?t:t.assignedSlot||t.parentNode||(sy(t)?t.host:null)||Os(t)}function Cw(t){return!An(t)||Nr(t).position==="fixed"?null:t.offsetParent}function BB(t){var e=/firefox/i.test(Ep()),n=/Trident/i.test(Ep());if(n&&An(t)){var r=Nr(t);if(r.position==="fixed")return null}var s=_d(t);for(sy(s)&&(s=s.host);An(s)&&["html","body"].indexOf(gr(s))<0;){var i=Nr(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function fl(t){for(var e=vn(t),n=Cw(t);n&&VB(n)&&Nr(n).position==="static";)n=Cw(n);return n&&(gr(n)==="html"||gr(n)==="body"&&Nr(n).position==="static")?e:n||BB(t)||e}function oy(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ha(t,e,n){return mi(t,Ju(e,n))}function jB(t,e,n){var r=Ha(t,e,n);return r>n?n:r}function dS(){return{top:0,right:0,bottom:0,left:0}}function fS(t){return Object.assign({},dS(),t)}function pS(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var qB=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,fS(typeof e!="number"?e:pS(e,dl))};function zB(t){var e,n=t.state,r=t.name,s=t.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=hr(n.placement),c=oy(a),l=[rn,Rn].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var h=qB(s.padding,n),d=iy(i),f=c==="y"?nn:rn,m=c==="y"?Cn:Rn,g=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],_=o[c]-n.rects.reference[c],T=fl(i),S=T?c==="y"?T.clientHeight||0:T.clientWidth||0:0,A=g/2-_/2,E=h[f],L=S-d[u]-h[m],F=S/2-d[u]/2+A,Y=Ha(E,F,L),O=c;n.modifiersData[r]=(e={},e[O]=Y,e.centerOffset=Y-F,e)}}function HB(t){var e=t.state,n=t.options,r=n.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||hS(e.elements.popper,s)&&(e.elements.arrow=s))}const KB={name:"arrow",enabled:!0,phase:"main",fn:zB,effect:HB,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Mo(t){return t.split("-")[1]}var GB={top:"auto",right:"auto",bottom:"auto",left:"auto"};function WB(t,e){var n=t.x,r=t.y,s=e.devicePixelRatio||1;return{x:Oo(n*s)/s||0,y:Oo(r*s)/s||0}}function Rw(t){var e,n=t.popper,r=t.popperRect,s=t.placement,i=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,m=o.y,g=m===void 0?0:m,_=typeof u=="function"?u({x:f,y:g}):{x:f,y:g};f=_.x,g=_.y;var T=o.hasOwnProperty("x"),S=o.hasOwnProperty("y"),A=rn,E=nn,L=window;if(l){var F=fl(n),Y="clientHeight",O="clientWidth";if(F===vn(n)&&(F=Os(n),Nr(F).position!=="static"&&a==="absolute"&&(Y="scrollHeight",O="scrollWidth")),F=F,s===nn||(s===rn||s===Rn)&&i===Nc){E=Cn;var V=h&&F===L&&L.visualViewport?L.visualViewport.height:F[Y];g-=V-r.height,g*=c?1:-1}if(s===rn||(s===nn||s===Cn)&&i===Nc){A=Rn;var J=h&&F===L&&L.visualViewport?L.visualViewport.width:F[O];f-=J-r.width,f*=c?1:-1}}var pe=Object.assign({position:a},l&&GB),z=u===!0?WB({x:f,y:g},vn(n)):{x:f,y:g};if(f=z.x,g=z.y,c){var le;return Object.assign({},pe,(le={},le[E]=S?"0":"",le[A]=T?"0":"",le.transform=(L.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",le))}return Object.assign({},pe,(e={},e[E]=S?g+"px":"",e[A]=T?f+"px":"",e.transform="",e))}function QB(t){var e=t.state,n=t.options,r=n.gpuAcceleration,s=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:hr(e.placement),variation:Mo(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Rw(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Rw(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const YB={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:QB,data:{}};var Ll={passive:!0};function XB(t){var e=t.state,n=t.instance,r=t.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,a=o===void 0?!0:o,c=vn(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",n.update,Ll)}),a&&c.addEventListener("resize",n.update,Ll),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Ll)}),a&&c.removeEventListener("resize",n.update,Ll)}}const JB={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:XB,data:{}};var ZB={left:"right",right:"left",bottom:"top",top:"bottom"};function hu(t){return t.replace(/left|right|bottom|top/g,function(e){return ZB[e]})}var e4={start:"end",end:"start"};function Nw(t){return t.replace(/start|end/g,function(e){return e4[e]})}function ay(t){var e=vn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function cy(t){return Lo(Os(t)).left+ay(t).scrollLeft}function t4(t,e){var n=vn(t),r=Os(t),s=n.visualViewport,i=r.clientWidth,o=r.clientHeight,a=0,c=0;if(s){i=s.width,o=s.height;var l=uS();(l||!l&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:i,height:o,x:a+cy(t),y:c}}function n4(t){var e,n=Os(t),r=ay(t),s=(e=t.ownerDocument)==null?void 0:e.body,i=mi(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=mi(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-r.scrollLeft+cy(t),c=-r.scrollTop;return Nr(s||n).direction==="rtl"&&(a+=mi(n.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function ly(t){var e=Nr(t),n=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+r)}function mS(t){return["html","body","#document"].indexOf(gr(t))>=0?t.ownerDocument.body:An(t)&&ly(t)?t:mS(_d(t))}function Ka(t,e){var n;e===void 0&&(e=[]);var r=mS(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=vn(r),o=s?[i].concat(i.visualViewport||[],ly(r)?r:[]):r,a=e.concat(o);return s?a:a.concat(Ka(_d(o)))}function Tp(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function r4(t,e){var n=Lo(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Pw(t,e,n){return e===cS?Tp(t4(t,n)):Ri(e)?r4(e,n):Tp(n4(Os(t)))}function s4(t){var e=Ka(_d(t)),n=["absolute","fixed"].indexOf(Nr(t).position)>=0,r=n&&An(t)?fl(t):t;return Ri(r)?e.filter(function(s){return Ri(s)&&hS(s,r)&&gr(s)!=="body"}):[]}function i4(t,e,n,r){var s=e==="clippingParents"?s4(t):[].concat(e),i=[].concat(s,[n]),o=i[0],a=i.reduce(function(c,l){var u=Pw(t,l,r);return c.top=mi(u.top,c.top),c.right=Ju(u.right,c.right),c.bottom=Ju(u.bottom,c.bottom),c.left=mi(u.left,c.left),c},Pw(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function gS(t){var e=t.reference,n=t.element,r=t.placement,s=r?hr(r):null,i=r?Mo(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(s){case nn:c={x:o,y:e.y-n.height};break;case Cn:c={x:o,y:e.y+e.height};break;case Rn:c={x:e.x+e.width,y:a};break;case rn:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=s?oy(s):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case Do:c[l]=c[l]-(e[u]/2-n[u]/2);break;case Nc:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function Pc(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=r===void 0?t.placement:r,i=n.strategy,o=i===void 0?t.strategy:i,a=n.boundary,c=a===void 0?xB:a,l=n.rootBoundary,u=l===void 0?cS:l,h=n.elementContext,d=h===void 0?va:h,f=n.altBoundary,m=f===void 0?!1:f,g=n.padding,_=g===void 0?0:g,T=fS(typeof _!="number"?_:pS(_,dl)),S=d===va?SB:va,A=t.rects.popper,E=t.elements[m?S:d],L=i4(Ri(E)?E:E.contextElement||Os(t.elements.popper),c,u,o),F=Lo(t.elements.reference),Y=gS({reference:F,element:A,strategy:"absolute",placement:s}),O=Tp(Object.assign({},A,Y)),V=d===va?O:F,J={top:L.top-V.top+T.top,bottom:V.bottom-L.bottom+T.bottom,left:L.left-V.left+T.left,right:V.right-L.right+T.right},pe=t.modifiersData.offset;if(d===va&&pe){var z=pe[s];Object.keys(J).forEach(function(le){var Ve=[Rn,Cn].indexOf(le)>=0?1:-1,Qe=[nn,Cn].indexOf(le)>=0?"y":"x";J[le]+=z[Qe]*Ve})}return J}function o4(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?lS:c,u=Mo(r),h=u?a?kw:kw.filter(function(m){return Mo(m)===u}):dl,d=h.filter(function(m){return l.indexOf(m)>=0});d.length===0&&(d=h);var f=d.reduce(function(m,g){return m[g]=Pc(t,{placement:g,boundary:s,rootBoundary:i,padding:o})[hr(g)],m},{});return Object.keys(f).sort(function(m,g){return f[m]-f[g]})}function a4(t){if(hr(t)===ry)return[];var e=hu(t);return[Nw(t),e,Nw(e)]}function c4(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,m=f===void 0?!0:f,g=n.allowedAutoPlacements,_=e.options.placement,T=hr(_),S=T===_,A=c||(S||!m?[hu(_)]:a4(_)),E=[_].concat(A).reduce(function(cn,ln){return cn.concat(hr(ln)===ry?o4(e,{placement:ln,boundary:u,rootBoundary:h,padding:l,flipVariations:m,allowedAutoPlacements:g}):ln)},[]),L=e.rects.reference,F=e.rects.popper,Y=new Map,O=!0,V=E[0],J=0;J<E.length;J++){var pe=E[J],z=hr(pe),le=Mo(pe)===Do,Ve=[nn,Cn].indexOf(z)>=0,Qe=Ve?"width":"height",ce=Pc(e,{placement:pe,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),ve=Ve?le?Rn:rn:le?Cn:nn;L[Qe]>F[Qe]&&(ve=hu(ve));var be=hu(ve),At=[];if(i&&At.push(ce[z]<=0),a&&At.push(ce[ve]<=0,ce[be]<=0),At.every(function(cn){return cn})){V=pe,O=!1;break}Y.set(pe,At)}if(O)for(var an=m?3:1,Wt=function(ln){var Ze=E.find(function(k){var G=Y.get(k);if(G)return G.slice(0,ln).every(function(B){return B})});if(Ze)return V=Ze,"break"},ct=an;ct>0;ct--){var Nn=Wt(ct);if(Nn==="break")break}e.placement!==V&&(e.modifiersData[r]._skip=!0,e.placement=V,e.reset=!0)}}const l4={name:"flip",enabled:!0,phase:"main",fn:c4,requiresIfExists:["offset"],data:{_skip:!1}};function Dw(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Ow(t){return[nn,Rn,Cn,rn].some(function(e){return t[e]>=0})}function u4(t){var e=t.state,n=t.name,r=e.rects.reference,s=e.rects.popper,i=e.modifiersData.preventOverflow,o=Pc(e,{elementContext:"reference"}),a=Pc(e,{altBoundary:!0}),c=Dw(o,r),l=Dw(a,s,i),u=Ow(c),h=Ow(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const h4={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:u4};function d4(t,e,n){var r=hr(t),s=[rn,nn].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*s,[rn,Rn].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function f4(t){var e=t.state,n=t.options,r=t.name,s=n.offset,i=s===void 0?[0,0]:s,o=lS.reduce(function(u,h){return u[h]=d4(h,e.rects,i),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const p4={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:f4};function m4(t){var e=t.state,n=t.name;e.modifiersData[n]=gS({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const g4={name:"popperOffsets",enabled:!0,phase:"read",fn:m4,data:{}};function y4(t){return t==="x"?"y":"x"}function v4(t){var e=t.state,n=t.options,r=t.name,s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,m=n.tetherOffset,g=m===void 0?0:m,_=Pc(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),T=hr(e.placement),S=Mo(e.placement),A=!S,E=oy(T),L=y4(E),F=e.modifiersData.popperOffsets,Y=e.rects.reference,O=e.rects.popper,V=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,J=typeof V=="number"?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),pe=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,z={x:0,y:0};if(F){if(i){var le,Ve=E==="y"?nn:rn,Qe=E==="y"?Cn:Rn,ce=E==="y"?"height":"width",ve=F[E],be=ve+_[Ve],At=ve-_[Qe],an=f?-O[ce]/2:0,Wt=S===Do?Y[ce]:O[ce],ct=S===Do?-O[ce]:-Y[ce],Nn=e.elements.arrow,cn=f&&Nn?iy(Nn):{width:0,height:0},ln=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:dS(),Ze=ln[Ve],k=ln[Qe],G=Ha(0,Y[ce],cn[ce]),B=A?Y[ce]/2-an-G-Ze-J.mainAxis:Wt-G-Ze-J.mainAxis,ne=A?-Y[ce]/2+an+G+k+J.mainAxis:ct+G+k+J.mainAxis,Ie=e.elements.arrow&&fl(e.elements.arrow),y=Ie?E==="y"?Ie.clientTop||0:Ie.clientLeft||0:0,v=(le=pe==null?void 0:pe[E])!=null?le:0,w=ve+B-v-y,x=ve+ne-v,C=Ha(f?Ju(be,w):be,ve,f?mi(At,x):At);F[E]=C,z[E]=C-ve}if(a){var N,W=E==="x"?nn:rn,U=E==="x"?Cn:Rn,$=F[L],D=L==="y"?"height":"width",se=$+_[W],X=$-_[U],re=[nn,rn].indexOf(T)!==-1,ue=(N=pe==null?void 0:pe[L])!=null?N:0,_e=re?se:$-Y[D]-O[D]-ue+J.altAxis,Ne=re?$+Y[D]+O[D]-ue-J.altAxis:X,Re=f&&re?jB(_e,$,Ne):Ha(f?_e:se,$,f?Ne:X);F[L]=Re,z[L]=Re-$}e.modifiersData[r]=z}}const _4={name:"preventOverflow",enabled:!0,phase:"main",fn:v4,requiresIfExists:["offset"]};function w4(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function b4(t){return t===vn(t)||!An(t)?ay(t):w4(t)}function I4(t){var e=t.getBoundingClientRect(),n=Oo(e.width)/t.offsetWidth||1,r=Oo(e.height)/t.offsetHeight||1;return n!==1||r!==1}function E4(t,e,n){n===void 0&&(n=!1);var r=An(e),s=An(e)&&I4(e),i=Os(e),o=Lo(t,s,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((gr(e)!=="body"||ly(i))&&(a=b4(e)),An(e)?(c=Lo(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=cy(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function T4(t){var e=new Map,n=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function s(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&s(c)}}),r.push(i)}return t.forEach(function(i){n.has(i.name)||s(i)}),r}function x4(t){var e=T4(t);return MB.reduce(function(n,r){return n.concat(e.filter(function(s){return s.phase===r}))},[])}function S4(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function A4(t){var e=t.reduce(function(n,r){var s=n[r.name];return n[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var Lw={placement:"bottom",modifiers:[],strategy:"absolute"};function Mw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function k4(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,s=e.defaultOptions,i=s===void 0?Lw:s;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Lw,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(T){var S=typeof T=="function"?T(u.options):T;g(),u.options=Object.assign({},i,u.options,S),u.scrollParents={reference:Ri(a)?Ka(a):a.contextElement?Ka(a.contextElement):[],popper:Ka(c)};var A=x4(A4([].concat(r,u.options.modifiers)));return u.orderedModifiers=A.filter(function(E){return E.enabled}),m(),f.update()},forceUpdate:function(){if(!d){var T=u.elements,S=T.reference,A=T.popper;if(Mw(S,A)){u.rects={reference:E4(S,fl(A),u.options.strategy==="fixed"),popper:iy(A)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(J){return u.modifiersData[J.name]=Object.assign({},J.data)});for(var E=0;E<u.orderedModifiers.length;E++){if(u.reset===!0){u.reset=!1,E=-1;continue}var L=u.orderedModifiers[E],F=L.fn,Y=L.options,O=Y===void 0?{}:Y,V=L.name;typeof F=="function"&&(u=F({state:u,options:O,name:V,instance:f})||u)}}}},update:S4(function(){return new Promise(function(_){f.forceUpdate(),_(u)})}),destroy:function(){g(),d=!0}};if(!Mw(a,c))return f;f.setOptions(l).then(function(_){!d&&l.onFirstUpdate&&l.onFirstUpdate(_)});function m(){u.orderedModifiers.forEach(function(_){var T=_.name,S=_.options,A=S===void 0?{}:S,E=_.effect;if(typeof E=="function"){var L=E({state:u,name:T,instance:f,options:A}),F=function(){};h.push(L||F)}})}function g(){h.forEach(function(_){return _()}),h=[]}return f}}var C4=[JB,g4,YB,$B,p4,l4,_4,KB,h4],uy=k4({defaultModifiers:C4}),Yr=globalThis&&globalThis.__assign||function(){return Yr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Yr.apply(this,arguments)},Ml=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},Js={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,onShow:function(){},onHide:function(){},onToggle:function(){}},yS=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Js),this._targetEl=e,this._triggerEl=n,this._options=Yr(Yr({},Js),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();this._options.triggerType==="click"&&n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.toggle()})}),this._options.triggerType==="hover"&&(n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){r==="click"?e.toggle():setTimeout(function(){e.show()},e._options.delay)}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},e._options.delay)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},e._options.delay)})}))},t.prototype._createPopperInstance=function(){return uy(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.isVisible=function(){return this._visible},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(e){return Yr(Yr({},e),{modifiers:Ml(Ml([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(e){return Yr(Yr({},e),{modifiers:Ml(Ml([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},t}();function hy(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(t){var e=t.getAttribute("data-dropdown-toggle"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-dropdown-placement"),s=t.getAttribute("data-dropdown-offset-skidding"),i=t.getAttribute("data-dropdown-offset-distance"),o=t.getAttribute("data-dropdown-trigger"),a=t.getAttribute("data-dropdown-delay");new yS(n,t,{placement:r||Js.placement,triggerType:o||Js.triggerType,offsetSkidding:s?parseInt(s):Js.offsetSkidding,offsetDistance:i?parseInt(i):Js.offsetDistance,delay:a?parseInt(a):Js.delay})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}typeof window<"u"&&(window.Dropdown=yS,window.initDropdowns=hy);var Zu=globalThis&&globalThis.__assign||function(){return Zu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Zu.apply(this,arguments)},to={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},xp=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=to),this._targetEl=e,this._options=Zu(Zu({},to),n),this._isHidden=!0,this._backdropEl=null,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&this._getPlacementClasses().map(function(n){e._targetEl.classList.add(n)})},t.prototype._createBackdrop=function(){var e;if(this._isHidden){var n=document.createElement("div");n.setAttribute("modal-backdrop",""),(e=n.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(n),this._backdropEl=n}},t.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},t.prototype._setupModalCloseEventListeners=function(){var e=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(n){e._handleOutsideClick(n.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._handleOutsideClick=function(e){(e===this._targetEl||e===this._backdropEl&&this.isVisible())&&this.hide()},t.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},t.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},t.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},t.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},t.prototype.isVisible=function(){return!this._isHidden},t.prototype.isHidden=function(){return this._isHidden},t}(),Fl=function(t,e){return e.some(function(n){return n.id===t})?e.find(function(n){return n.id===t}):null};function dy(){var t=[];document.querySelectorAll("[data-modal-target]").forEach(function(e){var n=e.getAttribute("data-modal-target"),r=document.getElementById(n);if(r){var s=r.getAttribute("data-modal-placement"),i=r.getAttribute("data-modal-backdrop");Fl(n,t)||t.push({id:n,object:new xp(r,{placement:s||to.placement,backdrop:i||to.backdrop})})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(e){var n=e.getAttribute("data-modal-toggle"),r=document.getElementById(n);if(r){var s=r.getAttribute("data-modal-placement"),i=r.getAttribute("data-modal-backdrop"),o=Fl(n,t);o||(o={id:n,object:new xp(r,{placement:s||to.placement,backdrop:i||to.backdrop})},t.push(o)),e.addEventListener("click",function(){o.object.toggle()})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(e){var n=e.getAttribute("data-modal-show"),r=document.getElementById(n);if(r){var s=Fl(n,t);s?e.addEventListener("click",function(){s.object.isHidden&&s.object.show()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(e){var n=e.getAttribute("data-modal-hide"),r=document.getElementById(n);if(r){var s=Fl(n,t);s?e.addEventListener("click",function(){s.object.isVisible&&s.object.hide()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}typeof window<"u"&&(window.Modal=xp,window.initModals=dy);var eh=globalThis&&globalThis.__assign||function(){return eh=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},eh.apply(this,arguments)},Zs={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},vS=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=Zs),this._targetEl=e,this._options=eh(eh({},Zs),n),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(n){e._targetEl.classList.add(n)}),document.addEventListener("keydown",function(n){n.key==="Escape"&&e.isVisible()&&e.hide()})},t.prototype.hide=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.add(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.add(n)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.remove(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.remove(n)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype._createBackdrop=function(){var e,n=this;if(!this._visible){var r=document.createElement("div");r.setAttribute("drawer-backdrop",""),(e=r.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(r),r.addEventListener("click",function(){n.hide()})}},t.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},t.prototype._getPlacementClasses=function(e){switch(e){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t}(),Ul=function(t,e){if(e.some(function(n){return n.id===t}))return e.find(function(n){return n.id===t})};function fy(){var t=[];document.querySelectorAll("[data-drawer-target]").forEach(function(e){var n=e.getAttribute("data-drawer-target"),r=document.getElementById(n);if(r){var s=e.getAttribute("data-drawer-placement"),i=e.getAttribute("data-drawer-body-scrolling"),o=e.getAttribute("data-drawer-backdrop"),a=e.getAttribute("data-drawer-edge"),c=e.getAttribute("data-drawer-edge-offset");Ul(n,t)||t.push({id:n,object:new vS(r,{placement:s||Zs.placement,bodyScrolling:i?i==="true":Zs.bodyScrolling,backdrop:o?o==="true":Zs.backdrop,edge:a?a==="true":Zs.edge,edgeOffset:c||Zs.edgeOffset})})}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(e){var n=e.getAttribute("data-drawer-toggle"),r=document.getElementById(n);if(r){var s=Ul(n,t);s?e.addEventListener("click",function(){s.object.toggle()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(e){var n=e.getAttribute("data-drawer-dismiss")?e.getAttribute("data-drawer-dismiss"):e.getAttribute("data-drawer-hide"),r=document.getElementById(n);if(r){var s=Ul(n,t);s?e.addEventListener("click",function(){s.object.hide()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(e){var n=e.getAttribute("data-drawer-show"),r=document.getElementById(n);if(r){var s=Ul(n,t);s?e.addEventListener("click",function(){s.object.show()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}typeof window<"u"&&(window.Drawer=vS,window.initDrawers=fy);var th=globalThis&&globalThis.__assign||function(){return th=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},th.apply(this,arguments)},Fw={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},_S=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=Fw),this._items=e,this._activeTab=n?this.getTab(n.defaultTabId):null,this._options=th(th({},Fw),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(n){n.triggerEl.addEventListener("click",function(){e.show(n.id)})}))},t.prototype.getActiveTab=function(){return this._activeTab},t.prototype._setActiveTab=function(e){this._activeTab=e},t.prototype.getTab=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.show=function(e,n){var r,s,i=this;n===void 0&&(n=!1);var o=this.getTab(e);o===this._activeTab&&!n||(this._items.map(function(a){var c,l;a!==o&&((c=a.triggerEl.classList).remove.apply(c,i._options.activeClasses.split(" ")),(l=a.triggerEl.classList).add.apply(l,i._options.inactiveClasses.split(" ")),a.targetEl.classList.add("hidden"),a.triggerEl.setAttribute("aria-selected","false"))}),(r=o.triggerEl.classList).add.apply(r,this._options.activeClasses.split(" ")),(s=o.triggerEl.classList).remove.apply(s,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-selected","true"),o.targetEl.classList.remove("hidden"),this._setActiveTab(o),this._options.onShow(this,o))},t}();function py(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(t){var e=[],n=null;t.querySelectorAll('[role="tab"]').forEach(function(r){var s=r.getAttribute("aria-selected")==="true",i={id:r.getAttribute("data-tabs-target"),triggerEl:r,targetEl:document.querySelector(r.getAttribute("data-tabs-target"))};e.push(i),s&&(n=i.id)}),new _S(e,{defaultTabId:n})})}typeof window<"u"&&(window.Tabs=_S,window.initTabs=py);var Xr=globalThis&&globalThis.__assign||function(){return Xr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Xr.apply(this,arguments)},$l=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},nh={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},wS=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=nh),this._targetEl=e,this._triggerEl=n,this._options=Xr(Xr({},nh),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.hide()})})},t.prototype._createPopperInstance=function(){return uy(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Xr(Xr({},e),{modifiers:$l($l([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Xr(Xr({},e),{modifiers:$l($l([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function my(){document.querySelectorAll("[data-tooltip-target]").forEach(function(t){var e=t.getAttribute("data-tooltip-target"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-tooltip-trigger"),s=t.getAttribute("data-tooltip-placement");new wS(n,t,{placement:s||nh.placement,triggerType:r||nh.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))})}typeof window<"u"&&(window.Tooltip=wS,window.initTooltips=my);var Jr=globalThis&&globalThis.__assign||function(){return Jr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Jr.apply(this,arguments)},Vl=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},Ga={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},bS=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Ga),this._targetEl=e,this._triggerEl=n,this._options=Jr(Jr({},Ga),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},100)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},100)})})},t.prototype._createPopperInstance=function(){return uy(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Jr(Jr({},e),{modifiers:Vl(Vl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Jr(Jr({},e),{modifiers:Vl(Vl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function gy(){document.querySelectorAll("[data-popover-target]").forEach(function(t){var e=t.getAttribute("data-popover-target"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-popover-trigger"),s=t.getAttribute("data-popover-placement"),i=t.getAttribute("data-popover-offset");new bS(n,t,{placement:s||Ga.placement,offset:i?parseInt(i):Ga.offset,triggerType:r||Ga.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))})}typeof window<"u"&&(window.Popover=bS,window.initPopovers=gy);var rh=globalThis&&globalThis.__assign||function(){return rh=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},rh.apply(this,arguments)},Sp={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},IS=function(){function t(e,n,r,s){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=null),s===void 0&&(s=Sp),this._parentEl=e,this._triggerEl=n,this._targetEl=r,this._options=rh(rh({},Sp),s),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;if(this._triggerEl){var n=this._getTriggerEventTypes(this._options.triggerType);n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._parentEl.addEventListener(r,function(){e._parentEl.matches(":hover")||e.hide()})})}},t.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this._visible?this.hide():this.show()},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype._getTriggerEventTypes=function(e){switch(e){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t}();function yy(){document.querySelectorAll("[data-dial-init]").forEach(function(t){var e=t.querySelector("[data-dial-toggle]");if(e){var n=e.getAttribute("data-dial-toggle"),r=document.getElementById(n);if(r){var s=e.getAttribute("data-dial-trigger");new IS(t,e,r,{triggerType:s||Sp.triggerType})}else console.error("Dial with id ".concat(n," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(t.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}typeof window<"u"&&(window.Dial=IS,window.initDials=yy);function ES(){Zg(),ey(),ty(),ny(),hy(),dy(),fy(),py(),my(),gy(),yy()}typeof window<"u"&&(window.initFlowbite=ES);var R4=new TB("load",[Zg,ey,ty,ny,hy,dy,fy,py,my,gy,yy]);R4.init();const N4={key:0,class:"sticky flex w-full flex-col bg-primary text-background shadow-sm shadow-secondary"},P4={class:"container mx-auto flex items-center justify-between bg-primary px-4 py-2"},D4={class:"flex items-center gap-4"},O4=p("span",{class:"material-icons text-3xl lg:text-base"},"add_box",-1),L4=p("span",{class:"hidden lg:inline-block"},"CREATE ITEM",-1),M4=p("span",{class:"material-icons text-3xl lg:text-base"},"notifications",-1),F4=p("span",{class:"hidden lg:inline-block"},"NOTIFICATIONS",-1),U4=[M4,F4],$4=p("span",{class:"material-icons text-3xl lg:text-base"},"chat",-1),V4=p("span",{class:"hidden lg:inline-block"},"MESSAGES",-1),B4=["onClick"],j4=p("span",{class:"material-icons text-3xl lg:text-base"},"logout",-1),q4=p("span",{class:"hidden lg:inline-block"},"LOG OUT",-1),z4=[j4,q4],H4=["src"],K4={class:"bg-secondary bg-opacity-20"},G4={class:"container mx-auto flex flex-col-reverse items-stretch justify-between px-4 lg:flex-row"},W4={key:0,class:"flex scroll-p-12 gap-8 overflow-x-auto whitespace-nowrap px-4 pb-4 lg:py-4"},Q4=p("li",null,"NEW",-1),Y4=p("li",null,"HOT",-1),X4=p("li",null,"TOP RATED",-1),J4=p("li",null,"KIDS",-1),Z4=p("li",null,"MEN",-1),ej=p("li",null,"WOMEN",-1),tj=[Q4,Y4,X4,J4,Z4,ej],nj=p("div",null,null,-1),rj=p("input",{type:"text",name:"",id:"",class:"w-full rounded-l-md border-none bg-transparent bg-white bg-opacity-50 px-4 py-1 text-sm text-text placeholder:text-text placeholder:text-opacity-60 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50",placeholder:"Search..."},null,-1),sj=p("button",{class:"material-icons bg-accent px-2 py-1 text-text text-opacity-70 lg:py-0 lg:text-lg"}," search ",-1),ij={__name:"NavigationBar",setup(t){Ft.firestore();const e=Mc(),n=_n(),r=de(!1);Ss(async()=>{ES(),await n.initMyProfile()});function s(){n.searchItem()&&e.push("/search")}async function i(){try{await n.logout(),e.push("/")}catch(o){alert("Sign Out Error"+o)}}return(o,a)=>["login","register"].includes(o.$route.name)?cr("",!0):(Z(),ae("header",N4,[p("nav",P4,[j(n0),p("ul",D4,[p("li",null,[j(he(Ln),{to:"/create-item",class:"flex gap-1"},{default:Ue(()=>[O4,L4]),_:1})]),p("li",null,[p("button",{type:"button",class:"flex gap-1",onClick:a[0]||(a[0]=c=>r.value=!r.value)},U4),j(EB,{visible:r.value},null,8,["visible"])]),p("li",null,[j(he(Ln),{to:"/messages",class:"flex gap-1"},{default:Ue(()=>[$4,V4]),_:1})]),p("li",null,[p("button",{onClick:$n(i,["prevent"]),class:"flex gap-1"},z4,8,B4)]),p("li",null,[j(he(Ln),{to:"/profile",class:"flex items-center gap-2"},{default:Ue(()=>[p("img",{src:he(n).myProfile.image,alt:"",class:"aspect-square w-10 rounded-full"},null,8,H4)]),_:1})])])]),p("section",K4,[p("div",G4,[["home"].includes(o.$route.name)?(Z(),ae("ol",W4,tj)):cr("",!0),nj,["search"].includes(o.$route.name)?cr("",!0):(Z(),ae("form",{key:1,class:"my-3 flex overflow-hidden rounded-md border-2 border-text border-opacity-50 bg-background focus-within:border-2 focus-within:border-primary focus-within:border-opacity-100",onSubmit:a[1]||(a[1]=$n(c=>s(),["stop","prevent"]))},[rj,sj,j(he(Ln),{to:"/search",class:"material-icons bg-accent py-1 pr-2 text-text text-opacity-70 lg:py-0 lg:text-lg"},{default:Ue(()=>[ke("menu")]),_:1})],32))])])]))}},oj={},aj={key:0,class:"sticky bottom-0 flex w-full flex-col bg-primary px-4 text-background"},cj=p("nav",{class:"container mx-auto flex items-center justify-end py-4"},[p("p",null,"All Rights Reserved 2023. ®")],-1),lj=[cj];function uj(t,e){return["login","register"].includes(t.$route.name)?cr("",!0):(Z(),ae("header",aj,lj))}const hj=Ih(oj,[["render",uj]]),dj={class:"flex flex-col h-screen"},fj={class:"basis-full overflow-y-auto"},pj={__name:"HomePageView",setup(t){return(e,n)=>(Z(),ae("div",dj,[j(ij),p("div",fj,[j(he(Lc))]),j(hj)]))}},mj={class:"aspect-square w-full"},gj=["src"],yj={class:"flex flex-col"},vj={class:"text-xs"},_j={class:"text-green-800"},wj=p("span",{class:"text-2xl"},"₱",-1),sh={__name:"ItemsContainer",props:{gridfor:{type:String,default:""},items:{type:Array,default:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"},{id:2,name:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg"}]}},setup(t){function e(n){switch(n){case"search":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"}}return(n,r)=>(Z(),ae("div",{class:Un(["grid grid-flow-row gap-2 rounded-none bg-gradient-to-b from-secondary to-transparent bg-[length:100%_150px] bg-no-repeat px-2 py-4 sm:rounded-xl sm:px-4",e(t.gridfor)])},[(Z(!0),ae(Fe,null,ar(t.items,s=>(Z(),ds(he(Ln),{to:"/item/"+s.itemId,class:"bg-white p-2 shadow-sm shadow-secondary"},{default:Ue(()=>[p("div",mj,[p("img",{src:s.image,alt:"",srcset:"",loading:"lazy",class:"aspect-square h-full object-contain"},null,8,gj)]),p("div",yj,[p("p",null,De(s.itemName),1),p("p",vj,De(s.location),1),p("p",_j,[wj,ke(De(s.rentAmount+" - "+s.rentRate),1)])])]),_:2},1032,["to"]))),256))],2))}},bj={class:"container mx-auto flex flex-col gap-8 px-0 py-8 sm:px-4"},Ij={class:"flex flex-col gap-2"},Ej=p("h1",{class:"px-4 sm:px-0"},"JUST FOR YOU",-1),Tj={class:"flex flex-col gap-2"},xj=p("h1",{class:"px-4 sm:px-0"},"DISCOVER",-1),Sj={__name:"HomeView",setup(t){const e=_n(),n=de([]);return Ss(async()=>{n.value=await e.loadItems()}),(r,s)=>(Z(),ae("main",bj,[p("section",Ij,[Ej,j(sh,{items:he(e).itemsInRange(12,18)},null,8,["items"])]),p("section",Tj,[xj,j(sh,{items:n.value},null,8,["items"])])]))}},Aj=["onSubmit"],kj=p("h1",null,"Edit Profile",-1),Cj={class:"flex flex-col gap-2 p-2 sm:gap-4"},Rj={class:"flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"},Nj={class:"flex flex-col"},Pj=p("h2",null,"Profile Picture",-1),Dj={class:"relative inline-block aspect-square w-32 rounded-sm object-contain"},Oj=["src"],Lj=p("label",{for:"add-image",class:"material-icons absolute -bottom-2 -right-2 cursor-pointer rounded-md border-2 border-text border-opacity-50 bg-accent px-1 py-1 text-text text-opacity-70"}," add_photo_alternate ",-1),Mj={class:"flex w-56 basis-full flex-col gap-2"},Fj={class:"my-2 flex flex-col justify-end gap-2 px-2 sm:flex-row"},Uj=p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"}," Save changes ",-1),$j={__name:"EditProfile",props:{useruid:{default:0},profile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:""}}},emits:["close"],setup(t,{emit:e}){const n=t,r=_n(),s=new FileReader,i=de(Object.assign({},n.profile));function o(c){let l=c.target.files[0];s.readAsDataURL(l),s.onload=u=>{profile.value.image=u.target.result}}function a(){r.editProfile=Object.assign({},profile.value),e("close")}return cs(()=>n.profile,c=>{i.value=Object.assign({},c)}),(c,l)=>(Z(),ae("form",{action:"#",onSubmit:$n(a,["stop","prevent"])},[kj,p("div",Cj,[p("div",Rj,[p("div",Nj,[Pj,p("div",Dj,[p("img",{src:i.value.image,alt:"",srcset:"",class:"aspect-square w-32 rounded-lg object-contain"},null,8,Oj),Lj,p("input",{type:"file",id:"add-image",onChange:l[0]||(l[0]=u=>o(u)),hidden:""},null,32)])]),p("div",Mj,[j(Ye,{label:"First Name",modelValue:i.value.firstName,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value.firstName=u),placeholder:"First Name"},null,8,["modelValue"]),j(Ye,{label:"Last Name",modelValue:i.value.lastName,"onUpdate:modelValue":l[2]||(l[2]=u=>i.value.lastName=u),placeholder:"Last Name"},null,8,["modelValue"])])]),j(Ye,{label:"Location",modelValue:i.value.location,"onUpdate:modelValue":l[3]||(l[3]=u=>i.value.location=u),placeholder:"Current Location"},null,8,["modelValue"])]),p("footer",Fj,[Uj,p("button",{type:"button",onClick:l[4]||(l[4]=u=>e("close")),class:"rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"}," Cancel ")])],40,Aj))}},Vj={class:"flex items-center justify-between gap-24 bg-primary bg-opacity-90 px-4 py-2 shadow-md shadow-gray-400"},Bj={class:"flex items-center gap-2"},jj=["src"],qj={class:"font-black text-background"},zj={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white"},Hj=["disabled"],TS={__name:"MessageOwner",props:{ownerId:String,ownerProfile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:""}}},emits:["close"],setup(t,{emit:e}){const n=t,r=Mc(),s=_n(),i=de(""),o=de(!1);async function a(){try{o.value=!0;let c=await s.messageOwner(n.ownerId,i.value);r.push("/messages/"+c)}catch(c){console.log(c+"from MessageOwner")}finally{o.value=!1}}return(c,l)=>(Z(),ae(Fe,null,[p("header",Vj,[p("div",Bj,[p("img",{src:t.ownerProfile.image,alt:"",class:"aspect-square w-8 rounded-full"},null,8,jj),p("p",qj,De(t.ownerProfile.firstName+" "+t.ownerProfile.lastName),1)]),p("button",{class:"material-icons text-background",onClick:l[0]||(l[0]=u=>e("close"))}," close ")]),p("section",zj,[p("form",{class:"bg-amber-400 flex gap-2 bg-secondary bg-opacity-80 p-2 shadow-gray-400 drop-shadow-sm",onSubmit:l[2]||(l[2]=$n(u=>a(),["prevent"]))},[j(Ye,{placeholder:"Enter message...",modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value=u),disabled:o.value},null,8,["modelValue","disabled"]),p("button",{disabled:o.value,type:"submit",class:"material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background disabled:bg-text disabled:bg-opacity-50"}," send ",8,Hj)],32)])],64))}},Kj={class:"container mx-auto flex flex-col gap-8 px-4 py-8"},Gj={class:"flex flex-col gap-2 lg:flex-row"},Wj={class:"flex basis-9/12 flex-col gap-2 sm:flex-row"},Qj={class:"flex basis-4/12 flex-col gap-2 bg-white p-4 shadow-sm shadow-secondary"},Yj=["src"],Xj={class:"flex w-full basis-8/12 flex-col justify-between bg-white p-4 shadow-sm shadow-secondary"},Jj={class:"flex flex-wrap items-start justify-between gap-2"},Zj={class:"text-3xl"},eq={class:"flex"},tq=p("span",{class:"material-icons text-green-600"},"location_on",-1),nq={class:"my-4"},rq=p("h2",null,"Lender Ratings",-1),sq={class:"mb-4 flex gap-4"},iq=p("span",null,"3.0 / 5.0",-1),oq=p("h2",null,"Chat Response Rate",-1),aq={class:"mb-4 flex gap-4"},cq=p("span",null,"4.0 / 5.0",-1),lq={class:"flex flex-col justify-end gap-2 md:flex-row"},uq=p("span",{class:"material-icons"},"edit",-1),hq=p("span",null,"Edit Profile",-1),dq=[uq,hq],fq=p("span",{class:"material-icons"},"forum",-1),pq=p("span",null,"Chat",-1),mq=[fq,pq],gq={key:2,class:"flex items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80"},yq=p("span",{class:"material-icons"},"flag",-1),vq=p("span",null,"Report user",-1),_q=[yq,vq],wq=Hp('<div class="flex basis-3/12 flex-row gap-4 bg-white p-4 shadow-sm shadow-secondary lg:flex-col"><div class="basis-1/2 lg:basis-0"><h2>Lended Items</h2><h2 class="text-2xl">542</h2></div><div class="basis-1/2 lg:basis-0"><h2>Rented Items</h2><h2 class="text-2xl">34</h2></div></div>',1),bq={class:"flex flex-col gap-2"},Uw={__name:"ProfileView",setup(t){const e=_n(),n=Jp(),r=de(n.params.id||e.myUserUid),s=de([]),i=de({firstName:"",lastName:"",image:"",location:""});Ss(async()=>{i.value=await e.loadProfile(r.value),s.value=await e.loadItems(12,r.value)}),cs(()=>n.params.id,async h=>{r.value=h||e.myUserUid,i.value=await e.loadProfile(r.value),s.value=await e.loadItems(12,r.value)});const o=de(null),a=de(null),c=wt(()=>r.value==e.myUserUid);function l(h){h?o.value.showModal():o.value.close()}function u(h){h?a.value.showModal():a.value.close()}return(h,d)=>(Z(),ae(Fe,null,[p("main",Kj,[p("section",Gj,[p("div",Wj,[p("div",Qj,[p("img",{src:i.value.image,alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,Yj)]),p("div",Xj,[p("div",null,[p("div",Jj,[p("h1",Zj,De(i.value.firstName+" "+i.value.lastName),1),p("div",eq,[tq,p("span",null,De(i.value.location),1)])]),p("div",nq,[rq,p("div",sq,[iq,j(oi,{value:"3"})]),oq,p("div",aq,[cq,j(oi,{value:"4"})])])]),p("div",lq,[c.value?(Z(),ae("button",{key:0,onClick:d[0]||(d[0]=f=>l(!0)),class:"flex items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80"},dq)):cr("",!0),c.value?cr("",!0):(Z(),ae("button",{key:1,onClick:d[1]||(d[1]=f=>u(!0)),class:"flex items-center justify-center gap-1 rounded-md border-2 border-primary bg-primary px-8 py-2 text-background sm:basis-auto"},mq)),c.value?cr("",!0):(Z(),ae("button",gq,_q))])])]),wq]),p("section",bq,[p("h1",null,De(i.value.firstName+" "+i.value.lastName+"'s Item(s)"),1),j(sh,{items:s.value},null,8,["items"])])]),p("dialog",{ref_key:"editDialog",ref:o,class:"rounded-xl backdrop:backdrop-brightness-50"},[j($j,{onClose:d[2]||(d[2]=f=>l(!1)),useruid:r.value,profile:i.value},null,8,["useruid","profile"])],512),p("dialog",{ref_key:"messageDialog",ref:a,class:"rounded-xl p-0 backdrop:backdrop-brightness-50"},[j(TS,{"owner-id":r.value,"owner-profile":i.value,onClose:d[3]||(d[3]=f=>u(!1))},null,8,["owner-id","owner-profile"])],512)],64))}},Iq=["onSubmit"],Eq=p("h1",null,"Rent Item",-1),Tq={class:"flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"},xq={class:"flex w-56 basis-full flex-col gap-2"},Sq={class:"flex w-56 basis-full flex-col gap-2"},Aq={class:"flex items-center text-sm"},kq=p("span",null,"Suggest another address",-1),Cq=p("option",null,"Select...",-1),Rq=p("option",null,"Cash on Delivery",-1),Nq=p("option",null,"Credit Card",-1),Pq={class:"mt-4 flex flex-col justify-end gap-2 sm:flex-row"},Dq=p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"}," Request Rent ",-1),Oq={__name:"RentItem",props:{rentRate:{default:1}},emits:["close"],setup(t,{emit:e}){const n=t,r=de(!1),s=de({startDate:h(new Date,1),endDate:h(new Date,n.rentRate+1),returnDate:h(new Date,n.rentRate+2),address:"The Chasm, Liyue",paymentOption:"Select..."}),i=wt({get(){return u(s.value.startDate)},set(m){s.value.startDate=l(m)}}),o=wt({get(){return u(s.value.endDate)},set(m){s.value.endDate=l(m)}}),a=wt({get(){return u(s.value.returnDate)},set(m){s.value.returnDate=l(m)}});function c(){e("close")}function l(m){const[g,_,T]=m.split("-");return new Date(+g,_-1,+T)}function u(m){return m.getFullYear()+"-"+f(m.getMonth()+1)+"-"+f(m.getDate())}function h(m=new Date,g){const _=new Date(m);return _.setDate(m.getDate()+g),_}function d(){s.value.returnDate=h(s.value.endDate,1)}function f(m,g=String(m)){return g.length<2?`0${g}`:g}return(m,g)=>(Z(),ae("form",{action:"#",onSubmit:$n(c,["stop","prevent"])},[Eq,p("div",Tq,[p("div",xq,[j(Ye,{label:"Start Date","input-type":"date",modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=_=>i.value=_)},null,8,["modelValue"]),j(Ye,{label:"End Date","input-type":"date",modelValue:o.value,"onUpdate:modelValue":[g[1]||(g[1]=_=>o.value=_),d]},null,8,["modelValue"]),j(Ye,{label:"Return Date","input-type":"date",modelValue:a.value,"onUpdate:modelValue":g[2]||(g[2]=_=>a.value=_),disabled:"true"},null,8,["modelValue"])]),p("div",Sq,[j(Ye,{label:"Address",disabled:!r.value,modelValue:s.value.address,"onUpdate:modelValue":g[4]||(g[4]=_=>s.value.address=_)},{default:Ue(()=>[p("p",Aq,[fn(p("input",{type:"checkbox","onUpdate:modelValue":g[3]||(g[3]=_=>r.value=_),class:"mr-1 rounded-sm text-accent focus:ring-0"},null,512),[[Vb,r.value]]),kq])]),_:1},8,["disabled","modelValue"]),j(rS,{label:"Payment Options",modelValue:s.value.paymentOption,"onUpdate:modelValue":g[5]||(g[5]=_=>s.value.paymentOption=_)},{default:Ue(()=>[Cq,Rq,Nq]),_:1},8,["modelValue"])])]),p("footer",Pq,[Dq,p("button",{type:"button",onClick:g[6]||(g[6]=_=>e("close")),class:"rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"}," Cancel ")])],40,Iq))}},Lq={class:"container mx-auto flex flex-col gap-4 px-4 py-8"},Mq={class:"flex flex-row-reverse gap-2"},Fq={class:"flex flex-col gap-2 lg:flex-row"},Uq={class:"flex basis-3/12 flex-col bg-white p-4 shadow-sm shadow-secondary"},$q=["src"],Vq={class:"flex w-full gap-2 overflow-x-auto px-1 py-2"},Bq=["src","onClick"],jq={class:"flex w-full basis-6/12 flex-col justify-between bg-white p-4 shadow-sm shadow-secondary"},qq={class:"flex items-start justify-between"},zq=p("span",{class:"rounded-full bg-green-600 px-4 py-1 text-xs font-black text-white"}," AVAILABLE ",-1),Hq={class:"my-4"},Kq={class:"text-green-600"},Gq=p("span",{class:"mr-2 text-2xl"},"₱",-1),Wq={class:"flex gap-4"},Qq=p("span",null,"4.0 / 5.0",-1),Yq={class:"flex"},Xq=p("span",{class:"material-icons text-green-600"},"location_on",-1),Jq={class:"mt-2 flex flex-col"},Zq={class:"flex gap-2"},e6={class:"flex flex-wrap gap-2"},t6={class:"rounded-full border-2 border-yellow-500 bg-yellow-200 px-4 py-1 text-xs text-yellow-700"},n6=p("span",{class:"material-icons"},"more_time",-1),r6=p("span",null,"Rent",-1),s6=[n6,r6],i6=p("button",{class:"flex basis-1/2 items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80 transition-colors hover:bg-opacity-90 sm:basis-auto"},[p("span",{class:"material-icons"},"star"),p("span",null,"Add to Favorites")],-1),o6={class:"basis-3/12 bg-white p-4 shadow-sm shadow-secondary"},a6=p("h2",null,"Lender",-1),c6={class:"mb-4 flex flex-wrap items-center justify-between gap-2"},l6=["src"],u6={class:"whitespace-nowrap"},h6=p("span",{class:"material-icons text-green-600"},"forum",-1),d6=p("span",null,"Chat",-1),f6=[h6,d6],p6=p("h2",null,"Lender Ratings",-1),m6={class:"mb-4 flex items-center gap-4"},g6=p("span",null,"4.0 / 5.0",-1),y6=p("h2",null,"Chat Response Rate",-1),v6={class:"mb-4 flex items-center gap-4"},_6=p("span",null,"3.0 / 5.0",-1),w6={class:"flex flex-col gap-2"},b6=Hp('<div class="flex flex-col justify-between gap-4 bg-gray-50 p-4 md:flex-row md:items-center"><h1>Item Reviews and Rating</h1><div class="flex flex-wrap items-start gap-4 text-sm sm:text-base md:items-center"><div class="flex items-center gap-1"><span class="material-icons text-green-600">filter_alt</span><span>Filter:</span><select name="" id="" class="text-xs sm:text-base"><option value="">All Star</option></select></div><div class="flex items-center gap-1"><span class="material-icons text-green-600">sort</span><span>Sort:</span><select name="" id="" class="text-xs sm:text-base"><option value="">Relevance</option><option value="">???</option></select></div></div></div>',1),I6={class:"flex flex-col gap-2"},E6={class:"flex flex-col gap-2 bg-white p-4"},T6={class:"flex items-center gap-2"},x6=["src"],S6={class:"flex flex-col"},A6={class:"truncate text-gray-700"},k6=p("p",{class:"py-2"},"user review........................",-1),C6={__name:"ItemDetailView",setup(t){const e=_n(),n=Jp(),r=de(n.params.id),s=de(0),i=de(null);function o(m){m?i.value.showModal():i.value.close()}const a=de(e.loadedProfile(5)),c=wt(()=>l.value.ownerId==e.myUserUid),l=de({itemName:"",location:"",rentAmount:"",rentRate:"",images:[],description:"",ownerId:"",tags:[]});function u(m){s.value=m}Ss(async()=>{l.value=await e.loadItem(r.value),a.value=await e.loadProfile(l.value.ownerId)});const h=de(null);function d(){e.editProfile=a.value,h.value.showModal()}function f(){h.value.close()}return(m,g)=>(Z(),ae(Fe,null,[p("main",Lq,[p("section",Mq,[j(he(Ln),{to:"/home"},{default:Ue(()=>[ke("Close X")]),_:1})]),p("section",Fq,[p("div",Uq,[p("img",{src:l.value.images[s.value],alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,$q),p("div",Vq,[(Z(!0),ae(Fe,null,ar(l.value.images,(_,T)=>(Z(),ae("img",{class:Un(["aspect-square h-24 cursor-pointer object-contain ring-4 ring-opacity-75",s.value==T?"ring-primary":"ring-transparent"]),src:_,onClick:S=>u(T),alt:"",srcset:""},null,10,Bq))),256))])]),p("div",jq,[p("div",null,[p("div",qq,[p("h1",null,De(l.value.itemName),1),zq]),p("div",Hq,[p("p",Kq,[Gq,ke(De(l.value.rentAmount+" - "+l.value.rentRate),1)]),p("div",Wq,[Qq,j(oi,{value:"4"})]),p("div",Yq,[Xq,p("span",null,De(l.value.location),1)])]),p("p",null,De(l.value.description),1)]),p("div",Jq,[p("div",Zq,[ke(" Tags: "),p("ul",e6,[(Z(!0),ae(Fe,null,ar(l.value.tags,_=>(Z(),ae("li",t6,De(_),1))),256))])]),p("div",{class:"mt-4 flex flex-col justify-end gap-2 sm:flex-row"},[p("button",{onClick:d,class:"flex basis-1/2 items-center justify-center gap-1 rounded-md bg-primary px-8 py-2 text-background sm:basis-auto"},s6),i6])])]),p("div",o6,[a6,p("div",c6,[j(he(Ln),{to:"/profile/"+l.value.ownerId,class:"flex items-center gap-2"},{default:Ue(()=>[p("img",{class:"aspect-square w-12 rounded-full",src:a.value.image,alt:"",srcset:""},null,8,l6),p("span",u6,De(a.value.firstName+" "+a.value.lastName),1)]),_:1},8,["to"]),c.value?cr("",!0):(Z(),ae("button",{key:0,class:"flex items-center gap-1",onClick:g[0]||(g[0]=_=>o(!0))},f6))]),p6,p("div",m6,[g6,j(oi,{value:"4"})]),y6,p("div",v6,[_6,j(oi,{value:"3"})])])]),p("section",w6,[b6,p("section",I6,[(Z(),ae(Fe,null,ar(6,_=>p("article",E6,[p("div",T6,[p("img",{class:"aspect-square w-12 rounded-full",src:he(e).loadedProfile(_).image,alt:"",srcset:""},null,8,x6),p("div",S6,[j(oi,{value:"4"}),p("span",A6,De(he(e).loadedProfile(_).firstName+" "+he(e).loadedProfile(_).lastName),1)])]),k6])),64))])])]),p("dialog",{ref_key:"rentDialog",ref:h,class:"rounded-xl bg-background backdrop:backdrop-brightness-50"},[j(Oq,{onClose:f,item:l.value},null,8,["item"])],512),p("dialog",{ref_key:"messageDialog",ref:i,class:"rounded-xl p-0 backdrop:backdrop-brightness-50"},[j(TS,{"owner-id":l.value.ownerId,"owner-profile":a.value,onClose:g[1]||(g[1]=_=>o(!1))},null,8,["owner-id","owner-profile"])],512)],64))}},R6={class:"container mx-auto flex h-full flex-row items-stretch gap-4 px-4 py-8"},N6={class:"flex h-full flex-col overflow-hidden"},P6=p("h1",{class:"bg-white px-6 py-4 shadow-sm shadow-secondary"}," Recent Messages ",-1),D6={key:0,class:"overflow-y-auto px-2"},O6=["src"],L6={class:"w-full truncate"},M6={class:"truncate font-black"},F6={key:1,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text text-opacity-60"},U6=p("p",null,"Loading messages...",-1),$6=[U6],V6={key:2,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text text-opacity-60"},B6=p("p",null,"No messages to show.",-1),j6=[B6],q6={__name:"MessagesView",setup(t){const e=_n(),n=de([]),r=de(!0);return Ss(async()=>{n.value=await e.loadConversations(e.myUserUid),r.value=!1}),(s,i)=>(Z(),ae("main",R6,[p("aside",{class:Un(["box-border basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-secondary lg:block lg:basis-1/3",["messages"].includes(s.$route.name)?"":"hidden"])},[p("div",N6,[P6,n.value.length!=0?(Z(),ae("div",D6,[(Z(!0),ae(Fe,null,ar(n.value,o=>(Z(),ds(he(Ln),{to:"/messages/"+o.convoId,class:"my-2 flex gap-2 rounded-lg bg-opacity-40 p-2","active-class":"bg-secondary"},{default:Ue(()=>[p("img",{src:o.participant.image,alt:"",class:"aspect-square w-12 rounded-full shadow-sm shadow-secondary"},null,8,O6),p("div",L6,[p("p",M6,De(o.participant.firstName+" "+o.participant.lastName),1),p("p",{class:Un(["truncate text-base text-gray-800",o.isRead||o.lastSender==he(e).myUserUid?"font-normal":"font-bold"])},De((o.lastSender==he(e).myUserUid?"You: ":"")+o.lastMessage),3)])]),_:2},1032,["to"]))),256))])):r.value?(Z(),ae("div",F6,$6)):(Z(),ae("div",V6,j6))])],2),p("div",{class:Un(["basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-2/3",["messages"].includes(s.$route.name)?"hidden":""])},[j(he(Lc))],2)]))}},z6={class:"container mx-auto flex flex-col gap-4 px-4 py-8 lg:flex-row"},H6=p("aside",{class:"basis-1/3"},[p("div",{class:"box-border flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm shadow-gray-400"},[p("h1",null,"Search for Items"),p("form",{action:"#",method:"get",class:"flex flex-col gap-2"},[p("div",{class:"flex gap-2"},[p("input",{type:"text",name:"",placeholder:"Item name",class:"w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),p("button",{type:"submit",class:"rounded-xl bg-green-700 px-4 py-2 text-white"}," Search ")]),p("div",{class:"flex gap-2"},[p("input",{type:"text",name:"",placeholder:"Min. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),p("input",{type:"text",name:"",placeholder:"Max. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""})]),p("input",{type:"text",placeholder:"Location",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"}),p("input",{type:"text",placeholder:"Tags",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"})]),p("section",null,[p("h2",null,"Category"),p("ul",null,[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Clothing "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Men")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Women")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Unisex")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Kids")])])]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Appliances "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Kitchen")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Laundry")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Living Room")])])]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Gadgets and Devices "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Smartphones")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Cameras")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),ke("Tablets")])])])])])])],-1),K6={__name:"SearchView",setup(t){const e=_n();return(n,r)=>(Z(),ae("main",z6,[H6,j(sh,{items:he(e).itemsInRange(4,16),gridfor:"search",class:"basis-2/3"},null,8,["items"])]))}},G6={},W6={class:"flex h-full flex-col items-center justify-center"},Q6={class:"text-gray-500"};function Y6(t,e){return Z(),ae("div",W6,[p("p",Q6,[jp(t.$slots,"default",{},()=>[ke("Click on a conversation to start")])])])}const X6=Ih(G6,[["render",Y6]]),J6={key:0,class:"flex h-full flex-col justify-between"},Z6={class:"flex items-center justify-between bg-primary bg-opacity-90 px-6 py-2 shadow-sm shadow-secondary"},e5={class:"flex gap-2"},t5=["src"],n5={class:"flex flex-col text-background"},r5={class:"font-black"},s5=p("div",{class:"flex items-center gap-1 truncate"},[p("div",{class:"inline-block h-2 w-2 rounded-full bg-green-300"}),p("span",null,"Online")],-1),i5={class:"bg-white px-6 pt-12"},o5=["src"],a5={class:"max-w-full break-words"},c5={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4"},l5=p("button",{type:"submit",class:"material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background"}," send ",-1),u5={key:1,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text text-opacity-60"},h5=p("p",null,"Loading messages...",-1),d5=[h5],f5={__name:"ConversationView",setup(t){const e=Jp(),n=_n(),r=de(""),s=de(),i=de(n.tempUserProfile),o=de({lastMessage:"Loading...",lastSender:"12",isRead:!0}),a=de(e.params.id);de(!0),de([]),Ss(async()=>{await c(e.params.id)}),cs(()=>e.params.id,async u=>{u&&(a.value=u,await c(u))});async function c(u){o.value=await n.loadConversation(u),i.value=await n.loadProfile(o.value.participants.find(h=>h!=n.myUserUid)),n.loadMessages(u)}async function l(u){r.value="",n.loadedMessages.push({sender:n.myUserUid,content:u,type:"message"}),await n.sendMessage(a.value,u)}return(u,h)=>he(n).loadedMessages.length!=0?(Z(),ae("div",J6,[p("header",Z6,[p("div",e5,[p("img",{src:i.value.image,alt:"",class:"aspect-square w-12 rounded-full"},null,8,t5),p("div",n5,[p("p",r5,De(i.value.firstName+" "+i.value.lastName),1),s5])]),j(he(Ln),{to:"/messages",class:"material-icons text-background"},{default:Ue(()=>[ke("close")]),_:1})]),p("main",{class:"flex basis-full flex-col-reverse overflow-y-auto",ref_key:"scrollToElement",ref:s},[p("div",i5,[(Z(!0),ae(Fe,null,ar(he(n).loadedMessages,(d,f)=>(Z(),ae("div",{class:Un([d.sender==he(n).myUserUid?"flex-row-reverse":"flex-row","my-1 flex items-end gap-2"])},[p("img",{src:d.sender==he(n).myUserUid?he(n).myProfile.image:i.value.image,alt:"",class:Un(["aspect-square w-12 rounded-full shadow-sm shadow-secondary",he(n).isSamePerson(f)?"opacity-0":""])},null,10,o5),p("div",{class:Un(["max-w-md rounded-3xl px-4 py-3 shadow-sm shadow-secondary",he(n).isSameMessageSource(f)])},[p("p",a5,De(d.content),1)],2)],2))),256)),p("section",c5,[p("form",{class:"bg-amber-400 flex gap-2 rounded-xl bg-secondary bg-opacity-80 p-2 shadow-gray-400 drop-shadow-sm",onSubmit:h[1]||(h[1]=$n(d=>l(r.value),["prevent"]))},[j(Ye,{placeholder:"Enter message...",modelValue:r.value,"onUpdate:modelValue":h[0]||(h[0]=d=>r.value=d)},null,8,["modelValue"]),l5],32)])])],512)])):(Z(),ae("div",u5,d5))}},p5={class:"bg-white p-8 self-center rounded-3xl flex flex-col overflow-y-auto max-w-full"},m5={class:"successMessage bg-white rounded-md"},g5={class:"py-3 px-5 text-white bg-gray-800 rounded-xl flex flex-col m-auto mt-5"},y5=["onSubmit"],v5=p("h2",null,"Enter Email that is associated with your account.",-1),_5=p("button",{class:"py-3 px-5 text-white bg-green-800 rounded-xl"}," Reset Password ",-1),w5={__name:"ForgotPasswordView",setup(t){const e=de("");let n=de(!1),r=de(""),s=de(!1),i=de("");const o=async()=>{if(e.value!==""){try{await Ft.auth().sendPasswordResetEmail(e.value).then(()=>{s.value=!0,i.value="Check your email to reset your password",n.value=!1})}catch(a){s.value=!1,n.value=!0,r.value=a.message,console.log("error")}console.log("success")}else s.value=!1,n.value=!0,r.value="Please enter your email address.";console.log("failed")};return(a,c)=>{const l=Oc("RouterLink");return Z(),ae("div",p5,[fn(p("div",m5,[ke(De(he(i))+" ",1),p("button",g5,[j(l,{to:"/login"},{default:Ue(()=>[ke("Close")]),_:1})])],512),[[ls,he(s)]]),fn(p("form",{onSubmit:$n(o,["stop","prevent"]),class:"flex gap-2 flex-col"},[v5,fn(p("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Email Address"},null,512),[[wf,e.value]]),fn(p("div",{class:"errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"},De(he(r)),513),[[ls,he(n)]]),_5,j(l,{to:"/login",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"},{default:Ue(()=>[ke("Back")]),_:1})],40,y5),[[ls,!he(s)]])])}}};const b5={},I5={class:"bg-white p-8 self-center max-w-full rounded-3xl flex flex-col overflow-y-auto"},E5=Hp('<div class="overflow-y-auto max-h-96 text-justify pr-2" data-v-57730d13><h1 data-v-57730d13>Terms and Conditions</h1><h2 data-v-57730d13>Acceptance of Terms</h2><p data-v-57730d13> You accept and agree to be governed by these Terms and Conditions by accessing and using our renting web app (ItemShare). Please don&#39;t use the Platform if you disagree with these terms. </p><h2 data-v-57730d13>User Responsibility</h2><p data-v-57730d13> The Platform provides a platform for people to interact and conduct rental business. The things that are listed on the Platform are not under our ownership or control. </p><p data-v-57730d13> Users are completely responsible for their rental actions, which may include interacting with other users and negotiating and agreeing on rental terms. </p><p data-v-57730d13> Things advertised on the Platform may not be available, in good condition, of sufficient quality, or compliance with the law. Users are in charge of determining if the products are appropriate and trustworthy, and they use them at their own risk. </p><h2 data-v-57730d13>Liability</h2><p data-v-57730d13> We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or connected with the Platform, including but not limited to loss of data, loss of profit, or loss of business opportunities, to the extent permitted by applicable law. </p><p data-v-57730d13> The users undertake to hold us harmless from any claims, demands, or losses resulting from disagreements with other users or other parties. </p><h2 data-v-57730d13>Privacy and Personal Information</h2><p data-v-57730d13> We are dedicated to safeguarding our users&#39; data and privacy. For thorough information on how we gather, utilize, and protect user data, please refer to our Privacy Policy. </p><p data-v-57730d13> Although we will make a reasonable effort to protect user data, we cannot ensure the security of user data sent through the Platform. Users are aware of and agree to this risk. </p><h2 data-v-57730d13>Intellectual Property</h2><p data-v-57730d13> The Platform and its contents (aside from user-generated material) are owned by their respective owners and are covered by intellectual property rights. Without express authorization, Users agree not to use, modify, distribute, or reproduce any aspect of the Platform. </p><h2 data-v-57730d13>Modifications and Termination</h2><p data-v-57730d13> The Platform, together with these Terms and Conditions, is subject to change or termination at any moment with prior notice. </p><p data-v-57730d13> Users are recommended to often review the Terms and Conditions. Any changes made are accepted by continuing to use the Platform. </p></div>',1),T5={class:"flex justify-end gap-2 mt-4"};function x5(t,e){const n=Oc("RouterLink");return Z(),ae("div",I5,[E5,p("div",T5,[j(n,{to:"/register",class:"py-3 px-5 text-white bg-green-800 rounded-lg"},{default:Ue(()=>[ke(" ACCEPT ")]),_:1}),j(n,{to:"/register",class:"py-3 px-5 text-white bg-red-800 rounded-lg"},{default:Ue(()=>[ke(" DECLINE ")]),_:1})])])}const S5=Ih(b5,[["render",x5],["__scopeId","data-v-57730d13"]]),A5={class:"container mx-auto flex flex-col gap-2 px-4 py-8"},k5=p("h1",null,"New Item for Rent",-1),C5=["onSubmit"],R5={class:"flex basis-1/2 flex-col gap-4 px-8"},N5={class:"flex flex-col gap-1"},P5=p("label",null,"Description",-1),D5={class:"flex flex-col gap-1"},O5=p("label",null,"Tags",-1),L5={class:"flex flex-wrap gap-2 rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 p-2 focus-within:border-primary focus-within:border-opacity-100 focus-within:bg-white focus-within:bg-opacity-90"},M5={class:"flex items-center gap-1 whitespace-nowrap rounded-md bg-primary bg-opacity-80 py-1 pl-2 pr-1 text-background"},F5=["onClick"],U5={class:"flex basis-1/2 flex-col gap-4 px-8"},$5={class:"flex flex-col gap-1"},V5=p("label",null,"Images",-1),B5={class:"w-full overflow-x-auto rounded-md border-2 border-text border-opacity-25 bg-secondary bg-opacity-50 p-2",id:"images"},j5={class:"flex gap-2"},q5={for:"add-image",class:"group/x relative aspect-square h-40 rounded-md border-2 border-dashed border-text border-opacity-40 px-2 py-4 text-center hover:border-primary"},z5=p("p",{class:"material-icons text-6xl text-text text-opacity-50 group-hover/x:text-primary"}," add_photo_alternate ",-1),H5=p("p",{class:"text-sm text-text text-opacity-75 group-hover/x:text-primary"}," Browse for an image to upload. ",-1),K5=["src","onClick"],G5={class:"flex flex-col gap-4 sm:flex-row"},W5=p("footer",{class:"mt-4 flex flex-col justify-end gap-2 md:flex-row"},[p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-8 py-2 text-white"}," Create "),p("button",{type:"button",class:"rounded-md border-2 border-green-800 bg-white px-8 py-2 text-green-800"}," Cancel ")],-1),Q5={__name:"CreateItemView",setup(t){const e=Mc(),n=_n(),r=de([]),s=de({itemName:"",location:"",rentAmount:"",rentRate:"",description:"",imageFiles:[],tags:[]}),i=de(""),o=de("");function a(f){for(let m of f.target.files){let g=new FileReader;s.value.imageFiles.push(m),g.readAsDataURL(m),g.onload=_=>{r.value.push(_.target.result)}}}function c(f){r.value.splice(f,1),s.value.imageFiles.splice(f,1)}function l(f){s.value.tags.splice(f,1)}function u(){o.value&&(s.value.tags.includes(o.value)||s.value.tags.push(o.value),o.value="")}function h(){o.value.endsWith(",")&&(o.value=o.value.slice(0,-1),u())}async function d(){i.value="";try{await n.createItem(s.value)&&e.push("/home")}catch(f){i.value=f}}return(f,m)=>(Z(),ae("main",A5,[k5,p("form",{onSubmit:$n(d,["stop","prevent"]),class:"flex flex-col gap-4 divide-x-0 divide-secondary bg-white py-8 shadow-sm shadow-secondary md:flex-row md:gap-0 md:divide-x-2"},[p("div",R5,[j(Ye,{modelValue:s.value.itemName,"onUpdate:modelValue":m[0]||(m[0]=g=>s.value.itemName=g),label:"Item Name",placeholder:"A name for the item..."},null,8,["modelValue"]),p("div",N5,[P5,fn(p("textarea",{"onUpdate:modelValue":m[1]||(m[1]=g=>s.value.description=g),name:"description",class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-primary focus:border-opacity-100 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50",placeholder:"A description on the item..."},null,512),[[wf,s.value.description]])]),p("div",D5,[O5,p("div",L5,[(Z(!0),ae(Fe,null,ar(s.value.tags,(g,_)=>(Z(),ae("div",M5,[p("span",null,De(g),1),p("button",{class:"material-icons aspect-square rounded-lg bg-background bg-opacity-10 px-1 text-xs font-bold text-background hover:bg-accent hover:text-text",onClick:T=>l(_),type:"button"}," close ",8,F5)]))),256)),fn(p("input",{type:"text",placeholder:"Add a tag...",onInput:m[2]||(m[2]=g=>h()),onKeydown:m[3]||(m[3]=ik($n(g=>u(),["prevent"]),["enter"])),onFocusout:m[4]||(m[4]=g=>u()),"onUpdate:modelValue":m[5]||(m[5]=g=>o.value=g),class:"flex-1 border-none bg-transparent px-1 py-1 focus:ring-0"},null,544),[[wf,o.value]])])]),j(Ye,{modelValue:s.value.location,"onUpdate:modelValue":m[6]||(m[6]=g=>s.value.location=g),label:"Location",placeholder:"Preferred area to deliver or retrieve..."},null,8,["modelValue"])]),p("div",U5,[p("div",$5,[V5,p("div",B5,[p("div",j5,[p("label",q5,[z5,H5,p("input",{type:"file",id:"add-image",accept:"image/*",onChange:m[7]||(m[7]=g=>a(g)),class:"absolute left-0 top-0 block h-full w-full cursor-pointer opacity-0",multiple:""},null,32)]),(Z(!0),ae(Fe,null,ar(r.value,(g,_)=>(Z(),ae("img",{class:"aspect-square h-40 cursor-pointer rounded-md object-contain ring-4 ring-transparent hover:opacity-60 hover:ring-primary",src:g,alt:"",onClick:T=>c(_),srcset:""},null,8,K5))),256))])])]),p("div",G5,[j(Ye,{modelValue:s.value.rentAmount,"onUpdate:modelValue":m[8]||(m[8]=g=>s.value.rentAmount=g),placeholder:"1,500",label:"Rent Amount",class:"basis-1/2"},null,8,["modelValue"]),j(Ye,{modelValue:s.value.rentRate,"onUpdate:modelValue":m[9]||(m[9]=g=>s.value.rentRate=g),label:"Rent Rate",class:"basis-1/2",placeholder:"per day/week/month"},null,8,["modelValue"])]),fn(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},De(i.value),513),[[ls,i.value]]),W5])],40,C5)]))}},xS=yC({history:Lk("/itemshare/"),routes:[{path:"/",component:CC,meta:{requiresAuth:!1},children:[{path:"",name:"getStarted",component:FC},{path:"/login",name:"login",component:YV},{path:"/register",name:"register",component:pB},{path:"/terms-and-conditions",name:"termsAndConditions",component:S5},{path:"/forgot-password",name:"forgotPassword",component:w5}]},{path:"/home",component:pj,meta:{requiresAuth:!0},children:[{path:"",name:"home",component:Sj},{path:"/profile/:id",name:"profile",component:Uw},{path:"/profile",name:"myProfile",component:Uw},{path:"/messages",component:q6,children:[{path:"",name:"messages",component:X6},{path:"/messages/:id",name:"conversation",component:f5}]},{path:"/item/:id",name:"itemDetail",component:C6},{path:"/search",name:"search",component:K6},{path:"/create-item",name:"createItem",component:Q5}]}],scrollBehavior(t,e,n){return n||{top:0}}});xS.beforeEach((t,e,n)=>{const r=_n();t.meta.requiresAuth&&!r.loggedInUser?n("/"):!t.meta.requiresAuth&&r.loggedInUser?n("/home"):n()});const vy=ck(_C);vy.use(hk());vy.use(xS);vy.mount("#app");
