(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function zf(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const $e={},Ds=[],Cn=()=>{},ux=()=>!1,hx=/^on[^a-z]/,Fu=n=>hx.test(n),Hf=n=>n.startsWith("onUpdate:"),vt=Object.assign,Kf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},dx=Object.prototype.hasOwnProperty,xe=(n,e)=>dx.call(n,e),ne=Array.isArray,Os=n=>_c(n)==="[object Map]",bo=n=>_c(n)==="[object Set]",Pg=n=>_c(n)==="[object Date]",fe=n=>typeof n=="function",ht=n=>typeof n=="string",Pa=n=>typeof n=="symbol",Me=n=>n!==null&&typeof n=="object",zw=n=>Me(n)&&fe(n.then)&&fe(n.catch),Hw=Object.prototype.toString,_c=n=>Hw.call(n),fx=n=>_c(n).slice(8,-1),Kw=n=>_c(n)==="[object Object]",Gf=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tl=zf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},px=/-(\w)/g,er=Uu(n=>n.replace(px,(e,t)=>t?t.toUpperCase():"")),mx=/\B([A-Z])/g,ls=Uu(n=>n.replace(mx,"-$1").toLowerCase()),$u=Uu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wh=Uu(n=>n?`on${$u(n)}`:""),Da=(n,e)=>!Object.is(n,e),xl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ql=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},zl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Dg;const Cd=()=>Dg||(Dg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wf(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=ht(r)?wx(r):Wf(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ht(n))return n;if(Me(n))return n}}const gx=/;(?![^(]*\))/g,yx=/:([^]+)/,vx=/\/\*[^]*?\*\//g;function wx(n){const e={};return n.replace(vx,"").split(gx).forEach(t=>{if(t){const r=t.split(yx);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fr(n){let e="";if(ht(n))e=n;else if(ne(n))for(let t=0;t<n.length;t++){const r=fr(n[t]);r&&(e+=r+" ")}else if(Me(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const _x="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bx=zf(_x);function Gw(n){return!!n||n===""}function Ix(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=bc(n[r],e[r]);return t}function bc(n,e){if(n===e)return!0;let t=Pg(n),r=Pg(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Pa(n),r=Pa(e),t||r)return n===e;if(t=ne(n),r=ne(e),t||r)return t&&r?Ix(n,e):!1;if(t=Me(n),r=Me(e),t||r){if(!t||!r)return!1;const i=Object.keys(n).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!bc(n[o],e[o]))return!1}}return String(n)===String(e)}function Qf(n,e){return n.findIndex(t=>bc(t,e))}const Le=n=>ht(n)?n:n==null?"":ne(n)||Me(n)&&(n.toString===Hw||!fe(n.toString))?JSON.stringify(n,Ww,2):String(n),Ww=(n,e)=>e&&e.__v_isRef?Ww(n,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:bo(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!ne(e)&&!Kw(e)?String(e):e;let on;class Qw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Yw(n){return new Qw(n)}function Ex(n,e=on){e&&e.active&&e.effects.push(n)}function Xw(){return on}function Tx(n){on&&on.cleanups.push(n)}const Yf=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Jw=n=>(n.w&Xr)>0,Zw=n=>(n.n&Xr)>0,xx=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Xr},Sx=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];Jw(i)&&!Zw(i)?i.delete(n):e[t++]=i,i.w&=~Xr,i.n&=~Xr}e.length=t}},Hl=new WeakMap;let ia=0,Xr=1;const Rd=30;let Tn;const Bi=Symbol(""),Nd=Symbol("");class Xf{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ex(this,r)}run(){if(!this.active)return this.fn();let e=Tn,t=Gr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tn,Tn=this,Gr=!0,Xr=1<<++ia,ia<=Rd?xx(this):Og(this),this.fn()}finally{ia<=Rd&&Sx(this),Xr=1<<--ia,Tn=this.parent,Gr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tn===this?this.deferStop=!0:this.active&&(Og(this),this.onStop&&this.onStop(),this.active=!1)}}function Og(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Gr=!0;const e_=[];function Io(){e_.push(Gr),Gr=!1}function Eo(){const n=e_.pop();Gr=n===void 0?!0:n}function Zt(n,e,t){if(Gr&&Tn){let r=Hl.get(n);r||Hl.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=Yf()),t_(i)}}function t_(n,e){let t=!1;ia<=Rd?Zw(n)||(n.n|=Xr,t=!Jw(n)):t=!n.has(Tn),t&&(n.add(Tn),Tn.deps.push(n))}function gr(n,e,t,r,i,s){const o=Hl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ne(n)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ne(n)?Gf(t)&&a.push(o.get("length")):(a.push(o.get(Bi)),Os(n)&&a.push(o.get(Nd)));break;case"delete":ne(n)||(a.push(o.get(Bi)),Os(n)&&a.push(o.get(Nd)));break;case"set":Os(n)&&a.push(o.get(Bi));break}if(a.length===1)a[0]&&Pd(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Pd(Yf(c))}}function Pd(n,e){const t=ne(n)?n:[...n];for(const r of t)r.computed&&Lg(r);for(const r of t)r.computed||Lg(r)}function Lg(n,e){(n!==Tn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function Ax(n,e){var t;return(t=Hl.get(n))==null?void 0:t.get(e)}const kx=zf("__proto__,__v_isRef,__isVue"),n_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Pa)),Cx=Jf(),Rx=Jf(!1,!0),Nx=Jf(!0),Mg=Px();function Px(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=Se(this);for(let s=0,o=this.length;s<o;s++)Zt(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(Se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Io();const r=Se(this)[e].apply(this,t);return Eo(),r}}),n}function Dx(n){const e=Se(this);return Zt(e,"has",n),e.hasOwnProperty(n)}function Jf(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?Qx:a_:e?o_:s_).get(r))return r;const o=ne(r);if(!n){if(o&&xe(Mg,i))return Reflect.get(Mg,i,s);if(i==="hasOwnProperty")return Dx}const a=Reflect.get(r,i,s);return(Pa(i)?n_.has(i):kx(i))||(n||Zt(r,"get",i),e)?a:tt(a)?o&&Gf(i)?a:a.value:Me(a)?n?c_(a):To(a):a}}const Ox=r_(),Lx=r_(!0);function r_(n=!1){return function(t,r,i,s){let o=t[r];if(Gs(o)&&tt(o)&&!tt(i))return!1;if(!n&&(!Kl(i)&&!Gs(i)&&(o=Se(o),i=Se(i)),!ne(t)&&tt(o)&&!tt(i)))return o.value=i,!0;const a=ne(t)&&Gf(r)?Number(r)<t.length:xe(t,r),c=Reflect.set(t,r,i,s);return t===Se(s)&&(a?Da(i,o)&&gr(t,"set",r,i):gr(t,"add",r,i)),c}}function Mx(n,e){const t=xe(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&gr(n,"delete",e,void 0),r}function Fx(n,e){const t=Reflect.has(n,e);return(!Pa(e)||!n_.has(e))&&Zt(n,"has",e),t}function Ux(n){return Zt(n,"iterate",ne(n)?"length":Bi),Reflect.ownKeys(n)}const i_={get:Cx,set:Ox,deleteProperty:Mx,has:Fx,ownKeys:Ux},$x={get:Nx,set(n,e){return!0},deleteProperty(n,e){return!0}},Vx=vt({},i_,{get:Rx,set:Lx}),Zf=n=>n,Vu=n=>Reflect.getPrototypeOf(n);function Jc(n,e,t=!1,r=!1){n=n.__v_raw;const i=Se(n),s=Se(e);t||(e!==s&&Zt(i,"get",e),Zt(i,"get",s));const{has:o}=Vu(i),a=r?Zf:t?np:Oa;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function Zc(n,e=!1){const t=this.__v_raw,r=Se(t),i=Se(n);return e||(n!==i&&Zt(r,"has",n),Zt(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function el(n,e=!1){return n=n.__v_raw,!e&&Zt(Se(n),"iterate",Bi),Reflect.get(n,"size",n)}function Fg(n){n=Se(n);const e=Se(this);return Vu(e).has.call(e,n)||(e.add(n),gr(e,"add",n,n)),this}function Ug(n,e){e=Se(e);const t=Se(this),{has:r,get:i}=Vu(t);let s=r.call(t,n);s||(n=Se(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?Da(e,o)&&gr(t,"set",n,e):gr(t,"add",n,e),this}function $g(n){const e=Se(this),{has:t,get:r}=Vu(e);let i=t.call(e,n);i||(n=Se(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&gr(e,"delete",n,void 0),s}function Vg(){const n=Se(this),e=n.size!==0,t=n.clear();return e&&gr(n,"clear",void 0,void 0),t}function tl(n,e){return function(r,i){const s=this,o=s.__v_raw,a=Se(o),c=e?Zf:n?np:Oa;return!n&&Zt(a,"iterate",Bi),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function nl(n,e,t){return function(...r){const i=this.__v_raw,s=Se(i),o=Os(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=i[n](...r),u=t?Zf:e?np:Oa;return!e&&Zt(s,"iterate",c?Nd:Bi),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Nr(n){return function(...e){return n==="delete"?!1:this}}function Bx(){const n={get(s){return Jc(this,s)},get size(){return el(this)},has:Zc,add:Fg,set:Ug,delete:$g,clear:Vg,forEach:tl(!1,!1)},e={get(s){return Jc(this,s,!1,!0)},get size(){return el(this)},has:Zc,add:Fg,set:Ug,delete:$g,clear:Vg,forEach:tl(!1,!0)},t={get(s){return Jc(this,s,!0)},get size(){return el(this,!0)},has(s){return Zc.call(this,s,!0)},add:Nr("add"),set:Nr("set"),delete:Nr("delete"),clear:Nr("clear"),forEach:tl(!0,!1)},r={get(s){return Jc(this,s,!0,!0)},get size(){return el(this,!0)},has(s){return Zc.call(this,s,!0)},add:Nr("add"),set:Nr("set"),delete:Nr("delete"),clear:Nr("clear"),forEach:tl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nl(s,!1,!1),t[s]=nl(s,!0,!1),e[s]=nl(s,!1,!0),r[s]=nl(s,!0,!0)}),[n,t,e,r]}const[jx,qx,zx,Hx]=Bx();function ep(n,e){const t=e?n?Hx:zx:n?qx:jx;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(xe(t,i)&&i in r?t:r,i,s)}const Kx={get:ep(!1,!1)},Gx={get:ep(!1,!0)},Wx={get:ep(!0,!1)},s_=new WeakMap,o_=new WeakMap,a_=new WeakMap,Qx=new WeakMap;function Yx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xx(n){return n.__v_skip||!Object.isExtensible(n)?0:Yx(fx(n))}function To(n){return Gs(n)?n:tp(n,!1,i_,Kx,s_)}function Jx(n){return tp(n,!1,Vx,Gx,o_)}function c_(n){return tp(n,!0,$x,Wx,a_)}function tp(n,e,t,r,i){if(!Me(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=Xx(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function Wr(n){return Gs(n)?Wr(n.__v_raw):!!(n&&n.__v_isReactive)}function Gs(n){return!!(n&&n.__v_isReadonly)}function Kl(n){return!!(n&&n.__v_isShallow)}function l_(n){return Wr(n)||Gs(n)}function Se(n){const e=n&&n.__v_raw;return e?Se(e):n}function Bu(n){return ql(n,"__v_skip",!0),n}const Oa=n=>Me(n)?To(n):n,np=n=>Me(n)?c_(n):n;function u_(n){Gr&&Tn&&(n=Se(n),t_(n.dep||(n.dep=Yf())))}function h_(n,e){n=Se(n);const t=n.dep;t&&Pd(t)}function tt(n){return!!(n&&n.__v_isRef===!0)}function Y(n){return d_(n,!1)}function Zx(n){return d_(n,!0)}function d_(n,e){return tt(n)?n:new eS(n,e)}class eS{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Se(e),this._value=t?e:Oa(e)}get value(){return u_(this),this._value}set value(e){const t=this.__v_isShallow||Kl(e)||Gs(e);e=t?e:Se(e),Da(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Oa(e),h_(this))}}function he(n){return tt(n)?n.value:n}const tS={get:(n,e,t)=>he(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return tt(i)&&!tt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function f_(n){return Wr(n)?n:new Proxy(n,tS)}function nS(n){const e=ne(n)?new Array(n.length):{};for(const t in n)e[t]=iS(n,t);return e}class rS{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ax(Se(this._object),this._key)}}function iS(n,e,t){const r=n[e];return tt(r)?r:new rS(n,e,t)}class sS{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xf(e,()=>{this._dirty||(this._dirty=!0,h_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Se(this);return u_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function oS(n,e,t=!1){let r,i;const s=fe(n);return s?(r=n,i=Cn):(r=n.get,i=n.set),new sS(r,i,s||!i,t)}function Qr(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){ju(s,e,t)}return i}function Rn(n,e,t,r){if(fe(n)){const s=Qr(n,e,t,r);return s&&zw(s)&&s.catch(o=>{ju(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(Rn(n[s],e,t,r));return i}function ju(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Qr(c,null,10,[n,o,a]);return}}aS(n,t,i,r)}function aS(n,e,t,r=!0){console.error(n)}let La=!1,Dd=!1;const Dt=[];let $n=0;const Ls=[];let cr=null,Ti=0;const p_=Promise.resolve();let rp=null;function ip(n){const e=rp||p_;return n?e.then(this?n.bind(this):n):e}function cS(n){let e=$n+1,t=Dt.length;for(;e<t;){const r=e+t>>>1;Ma(Dt[r])<n?e=r+1:t=r}return e}function sp(n){(!Dt.length||!Dt.includes(n,La&&n.allowRecurse?$n+1:$n))&&(n.id==null?Dt.push(n):Dt.splice(cS(n.id),0,n),m_())}function m_(){!La&&!Dd&&(Dd=!0,rp=p_.then(y_))}function lS(n){const e=Dt.indexOf(n);e>$n&&Dt.splice(e,1)}function uS(n){ne(n)?Ls.push(...n):(!cr||!cr.includes(n,n.allowRecurse?Ti+1:Ti))&&Ls.push(n),m_()}function Bg(n,e=La?$n+1:0){for(;e<Dt.length;e++){const t=Dt[e];t&&t.pre&&(Dt.splice(e,1),e--,t())}}function g_(n){if(Ls.length){const e=[...new Set(Ls)];if(Ls.length=0,cr){cr.push(...e);return}for(cr=e,cr.sort((t,r)=>Ma(t)-Ma(r)),Ti=0;Ti<cr.length;Ti++)cr[Ti]();cr=null,Ti=0}}const Ma=n=>n.id==null?1/0:n.id,hS=(n,e)=>{const t=Ma(n)-Ma(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function y_(n){Dd=!1,La=!0,Dt.sort(hS);const e=Cn;try{for($n=0;$n<Dt.length;$n++){const t=Dt[$n];t&&t.active!==!1&&Qr(t,null,14)}}finally{$n=0,Dt.length=0,g_(),La=!1,rp=null,(Dt.length||Ls.length)&&y_()}}function dS(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||$e;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||$e;d&&(i=t.map(p=>ht(p)?p.trim():p)),h&&(i=t.map(zl))}let a,c=r[a=Wh(e)]||r[a=Wh(er(e))];!c&&s&&(c=r[a=Wh(ls(e))]),c&&Rn(c,n,6,i);const l=r[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(l,n,6,i)}}function v_(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!fe(n)){const c=l=>{const u=v_(l,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(Me(n)&&r.set(n,null),null):(ne(s)?s.forEach(c=>o[c]=null):vt(o,s),Me(n)&&r.set(n,o),o)}function qu(n,e){return!n||!Fu(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(n,e[0].toLowerCase()+e.slice(1))||xe(n,ls(e))||xe(n,e))}let At=null,w_=null;function Gl(n){const e=At;return At=n,w_=n&&n.type.__scopeId||null,e}function Ye(n,e=At,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Jg(-1);const s=Gl(e);let o;try{o=n(...i)}finally{Gl(s),r._d&&Jg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qh(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:v}=n;let w,I;const k=Gl(n);try{if(t.shapeFlag&4){const T=i||r;w=Un(u.call(T,T,h,s,p,d,y)),I=c}else{const T=e;w=Un(T.length>1?T(s,{attrs:c,slots:a,emit:l}):T(s,null)),I=e.props?c:fS(c)}}catch(T){ma.length=0,ju(T,n,1),w=re(Jr)}let C=w;if(I&&v!==!1){const T=Object.keys(I),{shapeFlag:M}=C;T.length&&M&7&&(o&&T.some(Hf)&&(I=pS(I,o)),C=Ws(C,I))}return t.dirs&&(C=Ws(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),w=C,Gl(k),w}const fS=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fu(t))&&((e||(e={}))[t]=n[t]);return e},pS=(n,e)=>{const t={};for(const r in n)(!Hf(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function mS(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?jg(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!qu(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?jg(r,o,l):!0:!!o;return!1}function jg(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!qu(t,s))return!0}return!1}function gS({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const yS=n=>n.__isSuspense;function vS(n,e){e&&e.pendingBranch?ne(n)?e.effects.push(...n):e.effects.push(n):uS(n)}const rl={};function Ms(n,e,t){return __(n,e,t)}function __(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=$e){var a;const c=Xw()===((a=gt)==null?void 0:a.scope)?gt:null;let l,u=!1,h=!1;if(tt(n)?(l=()=>n.value,u=Kl(n)):Wr(n)?(l=()=>n,r=!0):ne(n)?(h=!0,u=n.some(T=>Wr(T)||Kl(T)),l=()=>n.map(T=>{if(tt(T))return T.value;if(Wr(T))return Oi(T);if(fe(T))return Qr(T,c,2)})):fe(n)?e?l=()=>Qr(n,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Rn(n,c,3,[p])}:l=Cn,e&&r){const T=l;l=()=>Oi(T())}let d,p=T=>{d=k.onStop=()=>{Qr(T,c,4)}},y;if($a)if(p=Cn,e?t&&Rn(e,c,3,[l(),h?[]:void 0,p]):l(),i==="sync"){const T=hA();y=T.__watcherHandles||(T.__watcherHandles=[])}else return Cn;let v=h?new Array(n.length).fill(rl):rl;const w=()=>{if(k.active)if(e){const T=k.run();(r||u||(h?T.some((M,O)=>Da(M,v[O])):Da(T,v)))&&(d&&d(),Rn(e,c,3,[T,v===rl?void 0:h&&v[0]===rl?[]:v,p]),v=T)}else k.run()};w.allowRecurse=!!e;let I;i==="sync"?I=w:i==="post"?I=()=>Ht(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),I=()=>sp(w));const k=new Xf(l,I);e?t?w():v=k.run():i==="post"?Ht(k.run.bind(k),c&&c.suspense):k.run();const C=()=>{k.stop(),c&&c.scope&&Kf(c.scope.effects,k)};return y&&y.push(C),C}function wS(n,e,t){const r=this.proxy,i=ht(n)?n.includes(".")?b_(r,n):()=>r[n]:n.bind(r,r);let s;fe(e)?s=e:(s=e.handler,t=e);const o=gt;Qs(this);const a=__(i,s.bind(r),t);return o?Qs(o):ji(),a}function b_(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function Oi(n,e){if(!Me(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),tt(n))Oi(n.value,e);else if(ne(n))for(let t=0;t<n.length;t++)Oi(n[t],e);else if(bo(n)||Os(n))n.forEach(t=>{Oi(t,e)});else if(Kw(n))for(const t in n)Oi(n[t],e);return n}function Oe(n,e){const t=At;if(t===null)return n;const r=Gu(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=$e]=e[s];o&&(fe(o)&&(o={mounted:o,updated:o}),o.deep&&Oi(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function wi(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Io(),Rn(c,t,8,[n.el,a,n,e]),Eo())}}function I_(n,e){return fe(n)?(()=>vt({name:n.name},e,{setup:n}))():n}const fa=n=>!!n.type.__asyncLoader,E_=n=>n.type.__isKeepAlive;function _S(n,e){T_(n,"a",e)}function bS(n,e){T_(n,"da",e)}function T_(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(zu(e,r,t),t){let i=t.parent;for(;i&&i.parent;)E_(i.parent.vnode)&&IS(r,e,t,i),i=i.parent}}function IS(n,e,t,r){const i=zu(e,n,r,!0);S_(()=>{Kf(r[e],i)},t)}function zu(n,e,t=gt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Io(),Qs(t);const a=Rn(e,t,n,o);return ji(),Eo(),a});return r?i.unshift(s):i.push(s),s}}const Er=n=>(e,t=gt)=>(!$a||n==="sp")&&zu(n,(...r)=>e(...r),t),x_=Er("bm"),xo=Er("m"),ES=Er("bu"),TS=Er("u"),xS=Er("bum"),S_=Er("um"),SS=Er("sp"),AS=Er("rtg"),kS=Er("rtc");function CS(n,e=gt){zu("ec",n,e)}const A_="components";function So(n,e){return NS(A_,n,!0,e)||n}const RS=Symbol.for("v-ndc");function NS(n,e,t=!0,r=!1){const i=At||gt;if(i){const s=i.type;if(n===A_){const a=cA(s,!1);if(a&&(a===e||a===er(e)||a===$u(er(e))))return s}const o=qg(i[n]||s[n],e)||qg(i.appContext[n],e);return!o&&r?s:o}}function qg(n,e){return n&&(n[e]||n[er(e)]||n[$u(er(e))])}function Yn(n,e,t,r){let i;const s=t&&t[r];if(ne(n)||ht(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Me(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(n[l],l,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}function PS(n,e,t={},r,i){if(At.isCE||At.parent&&fa(At.parent)&&At.parent.isCE)return e!=="default"&&(t.name=e),re("slot",t,r&&r());let s=n[e];s&&s._c&&(s._d=!1),oe();const o=s&&k_(s(t)),a=us(Ke,{key:t.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&n._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function k_(n){return n.some(e=>Ql(e)?!(e.type===Jr||e.type===Ke&&!k_(e.children)):!0)?n:null}const Od=n=>n?$_(n)?Gu(n)||n.proxy:Od(n.parent):null,pa=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Od(n.parent),$root:n=>Od(n.root),$emit:n=>n.emit,$options:n=>op(n),$forceUpdate:n=>n.f||(n.f=()=>sp(n.update)),$nextTick:n=>n.n||(n.n=ip.bind(n.proxy)),$watch:n=>wS.bind(n)}),Yh=(n,e)=>n!==$e&&!n.__isScriptSetup&&xe(n,e),DS={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Yh(r,e))return o[e]=1,r[e];if(i!==$e&&xe(i,e))return o[e]=2,i[e];if((l=n.propsOptions[0])&&xe(l,e))return o[e]=3,s[e];if(t!==$e&&xe(t,e))return o[e]=4,t[e];Ld&&(o[e]=0)}}const u=pa[e];let h,d;if(u)return e==="$attrs"&&Zt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==$e&&xe(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,xe(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Yh(i,e)?(i[e]=t,!0):r!==$e&&xe(r,e)?(r[e]=t,!0):xe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==$e&&xe(n,o)||Yh(e,o)||(a=s[0])&&xe(a,o)||xe(r,o)||xe(pa,o)||xe(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zg(n){return ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ld=!0;function OS(n){const e=op(n),t=n.proxy,r=n.ctx;Ld=!1,e.beforeCreate&&Hg(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:v,deactivated:w,beforeDestroy:I,beforeUnmount:k,destroyed:C,unmounted:T,render:M,renderTracked:O,renderTriggered:$,errorCaptured:K,serverPrefetch:B,expose:ae,inheritAttrs:_e,components:Ue,directives:De,filters:Ft}=e;if(l&&LS(l,r,null),o)for(const me in o){const ve=o[me];fe(ve)&&(r[me]=ve.bind(t))}if(i){const me=i.call(t,t);Me(me)&&(n.data=To(me))}if(Ld=!0,s)for(const me in s){const ve=s[me],Et=fe(ve)?ve.bind(t,t):fe(ve.get)?ve.get.bind(t,t):Cn,tn=!fe(ve)&&fe(ve.set)?ve.set.bind(t):Cn,zt=cn({get:Et,set:tn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>zt.value,set:st=>zt.value=st})}if(a)for(const me in a)C_(a[me],r,t,me);if(c){const me=fe(c)?c.call(t):c;Reflect.ownKeys(me).forEach(ve=>{Sl(ve,me[ve])})}u&&Hg(u,n,"c");function ce(me,ve){ne(ve)?ve.forEach(Et=>me(Et.bind(t))):ve&&me(ve.bind(t))}if(ce(x_,h),ce(xo,d),ce(ES,p),ce(TS,y),ce(_S,v),ce(bS,w),ce(CS,K),ce(kS,O),ce(AS,$),ce(xS,k),ce(S_,T),ce(SS,B),ne(ae))if(ae.length){const me=n.exposed||(n.exposed={});ae.forEach(ve=>{Object.defineProperty(me,ve,{get:()=>t[ve],set:Et=>t[ve]=Et})})}else n.exposed||(n.exposed={});M&&n.render===Cn&&(n.render=M),_e!=null&&(n.inheritAttrs=_e),Ue&&(n.components=Ue),De&&(n.directives=De)}function LS(n,e,t=Cn){ne(n)&&(n=Md(n));for(const r in n){const i=n[r];let s;Me(i)?"default"in i?s=mn(i.from||r,i.default,!0):s=mn(i.from||r):s=mn(i),tt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Hg(n,e,t){Rn(ne(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function C_(n,e,t,r){const i=r.includes(".")?b_(t,r):()=>t[r];if(ht(n)){const s=e[n];fe(s)&&Ms(i,s)}else if(fe(n))Ms(i,n.bind(t));else if(Me(n))if(ne(n))n.forEach(s=>C_(s,e,t,r));else{const s=fe(n.handler)?n.handler.bind(t):e[n.handler];fe(s)&&Ms(i,s,n)}}function op(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!t&&!r?c=e:(c={},i.length&&i.forEach(l=>Wl(c,l,o,!0)),Wl(c,e,o)),Me(e)&&s.set(e,c),c}function Wl(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Wl(n,s,t,!0),i&&i.forEach(o=>Wl(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=MS[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const MS={data:Kg,props:Gg,emits:Gg,methods:sa,computed:sa,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:sa,directives:sa,watch:US,provide:Kg,inject:FS};function Kg(n,e){return e?n?function(){return vt(fe(n)?n.call(this,this):n,fe(e)?e.call(this,this):e)}:e:n}function FS(n,e){return sa(Md(n),Md(e))}function Md(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function sa(n,e){return n?vt(Object.create(null),n,e):e}function Gg(n,e){return n?ne(n)&&ne(e)?[...new Set([...n,...e])]:vt(Object.create(null),zg(n),zg(e??{})):e}function US(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const r in e)t[r]=Ut(n[r],e[r]);return t}function R_(){return{app:null,config:{isNativeTag:ux,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $S=0;function VS(n,e){return function(r,i=null){fe(r)||(r=vt({},r)),i!=null&&!Me(i)&&(i=null);const s=R_(),o=new Set;let a=!1;const c=s.app={_uid:$S++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:dA,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&fe(l.install)?(o.add(l),l.install(c,...u)):fe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const d=re(r,i);return d.appContext=s,u&&e?e(d,l):n(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Gu(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Fa=c;try{return l()}finally{Fa=null}}};return c}}let Fa=null;function Sl(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function mn(n,e,t=!1){const r=gt||At;if(r||Fa){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fa._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&fe(e)?e.call(r&&r.proxy):e}}function BS(){return!!(gt||At||Fa)}function jS(n,e,t,r=!1){const i={},s={};ql(s,Ku,1),n.propsDefaults=Object.create(null),N_(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:Jx(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function qS(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=Se(i),[c]=n.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(qu(n.emitsOptions,d))continue;const p=e[d];if(c)if(xe(s,d))p!==s[d]&&(s[d]=p,l=!0);else{const y=er(d);i[y]=Fd(c,a,y,p,n,!1)}else p!==s[d]&&(s[d]=p,l=!0)}}}else{N_(n,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!xe(e,h)&&((u=ls(h))===h||!xe(e,u)))&&(c?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=Fd(c,a,h,void 0,n,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!xe(e,h))&&(delete s[h],l=!0)}l&&gr(n,"set","$attrs")}function N_(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Tl(c))continue;const l=e[c];let u;i&&xe(i,u=er(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:qu(n.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=Se(t),l=a||$e;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Fd(i,c,h,l[h],n,!xe(l,h))}}return o}function Fd(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:l}=i;t in l?r=l[t]:(Qs(i),r=l[t]=c.call(null,e),ji())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ls(t))&&(r=!0))}return r}function P_(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let c=!1;if(!fe(n)){const u=h=>{c=!0;const[d,p]=P_(h,e,!0);vt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return Me(n)&&r.set(n,Ds),Ds;if(ne(s))for(let u=0;u<s.length;u++){const h=er(s[u]);Wg(h)&&(o[h]=$e)}else if(s)for(const u in s){const h=er(u);if(Wg(h)){const d=s[u],p=o[h]=ne(d)||fe(d)?{type:d}:vt({},d);if(p){const y=Xg(Boolean,p.type),v=Xg(String,p.type);p[0]=y>-1,p[1]=v<0||y<v,(y>-1||xe(p,"default"))&&a.push(h)}}}const l=[o,a];return Me(n)&&r.set(n,l),l}function Wg(n){return n[0]!=="$"}function Qg(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Yg(n,e){return Qg(n)===Qg(e)}function Xg(n,e){return ne(e)?e.findIndex(t=>Yg(t,n)):fe(e)&&Yg(e,n)?0:-1}const D_=n=>n[0]==="_"||n==="$stable",ap=n=>ne(n)?n.map(Un):[Un(n)],zS=(n,e,t)=>{if(e._n)return e;const r=Ye((...i)=>ap(e(...i)),t);return r._c=!1,r},O_=(n,e,t)=>{const r=n._ctx;for(const i in n){if(D_(i))continue;const s=n[i];if(fe(s))e[i]=zS(i,s,r);else if(s!=null){const o=ap(s);e[i]=()=>o}}},L_=(n,e)=>{const t=ap(e);n.slots.default=()=>t},HS=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Se(e),ql(e,"_",t)):O_(e,n.slots={})}else n.slots={},e&&L_(n,e);ql(n.slots,Ku,1)},KS=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=$e;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(vt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,O_(e,i)),o=e}else e&&(L_(n,e),o={default:1});if(s)for(const a in i)!D_(a)&&!(a in o)&&delete i[a]};function Ud(n,e,t,r,i=!1){if(ne(n)){n.forEach((d,p)=>Ud(d,e&&(ne(e)?e[p]:e),t,r,i));return}if(fa(r)&&!i)return;const s=r.shapeFlag&4?Gu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===$e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ht(l)?(u[l]=null,xe(h,l)&&(h[l]=null)):tt(l)&&(l.value=null)),fe(c))Qr(c,a,12,[o,u]);else{const d=ht(c),p=tt(c);if(d||p){const y=()=>{if(n.f){const v=d?xe(h,c)?h[c]:u[c]:c.value;i?ne(v)&&Kf(v,s):ne(v)?v.includes(s)||v.push(s):d?(u[c]=[s],xe(h,c)&&(h[c]=u[c])):(c.value=[s],n.k&&(u[n.k]=c.value))}else d?(u[c]=o,xe(h,c)&&(h[c]=o)):p&&(c.value=o,n.k&&(u[n.k]=o))};o?(y.id=-1,Ht(y,t)):y()}}}const Ht=vS;function GS(n){return WS(n)}function WS(n,e){const t=Cd();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Cn,insertStaticContent:y}=n,v=(m,g,_,x=null,A=null,N=null,G=!1,F=null,U=!!g.dynamicChildren)=>{if(m===g)return;m&&!qo(m,g)&&(x=S(m),st(m,A,N,!0),m=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:D,ref:te,shapeFlag:Q}=g;switch(D){case Hu:w(m,g,_,x);break;case Jr:I(m,g,_,x);break;case Al:m==null&&k(g,_,x,G);break;case Ke:Ue(m,g,_,x,A,N,G,F,U);break;default:Q&1?M(m,g,_,x,A,N,G,F,U):Q&6?De(m,g,_,x,A,N,G,F,U):(Q&64||Q&128)&&D.process(m,g,_,x,A,N,G,F,U,V)}te!=null&&A&&Ud(te,m&&m.ref,N,g||m,!g)},w=(m,g,_,x)=>{if(m==null)r(g.el=a(g.children),_,x);else{const A=g.el=m.el;g.children!==m.children&&l(A,g.children)}},I=(m,g,_,x)=>{m==null?r(g.el=c(g.children||""),_,x):g.el=m.el},k=(m,g,_,x)=>{[m.el,m.anchor]=y(m.children,g,_,x,m.el,m.anchor)},C=({el:m,anchor:g},_,x)=>{let A;for(;m&&m!==g;)A=d(m),r(m,_,x),m=A;r(g,_,x)},T=({el:m,anchor:g})=>{let _;for(;m&&m!==g;)_=d(m),i(m),m=_;i(g)},M=(m,g,_,x,A,N,G,F,U)=>{G=G||g.type==="svg",m==null?O(g,_,x,A,N,G,F,U):B(m,g,A,N,G,F,U)},O=(m,g,_,x,A,N,G,F)=>{let U,D;const{type:te,props:Q,shapeFlag:ee,transition:se,dirs:ge}=m;if(U=m.el=o(m.type,N,Q&&Q.is,Q),ee&8?u(U,m.children):ee&16&&K(m.children,U,null,x,A,N&&te!=="foreignObject",G,F),ge&&wi(m,null,x,"created"),$(U,m,m.scopeId,G,x),Q){for(const ke in Q)ke!=="value"&&!Tl(ke)&&s(U,ke,null,Q[ke],N,m.children,x,A,We);"value"in Q&&s(U,"value",null,Q.value),(D=Q.onVnodeBeforeMount)&&Fn(D,x,m)}ge&&wi(m,null,x,"beforeMount");const Ce=(!A||A&&!A.pendingBranch)&&se&&!se.persisted;Ce&&se.beforeEnter(U),r(U,g,_),((D=Q&&Q.onVnodeMounted)||Ce||ge)&&Ht(()=>{D&&Fn(D,x,m),Ce&&se.enter(U),ge&&wi(m,null,x,"mounted")},A)},$=(m,g,_,x,A)=>{if(_&&p(m,_),x)for(let N=0;N<x.length;N++)p(m,x[N]);if(A){let N=A.subTree;if(g===N){const G=A.vnode;$(m,G,G.scopeId,G.slotScopeIds,A.parent)}}},K=(m,g,_,x,A,N,G,F,U=0)=>{for(let D=U;D<m.length;D++){const te=m[D]=F?Fr(m[D]):Un(m[D]);v(null,te,g,_,x,A,N,G,F)}},B=(m,g,_,x,A,N,G)=>{const F=g.el=m.el;let{patchFlag:U,dynamicChildren:D,dirs:te}=g;U|=m.patchFlag&16;const Q=m.props||$e,ee=g.props||$e;let se;_&&_i(_,!1),(se=ee.onVnodeBeforeUpdate)&&Fn(se,_,g,m),te&&wi(g,m,_,"beforeUpdate"),_&&_i(_,!0);const ge=A&&g.type!=="foreignObject";if(D?ae(m.dynamicChildren,D,F,_,x,ge,N):G||ve(m,g,F,null,_,x,ge,N,!1),U>0){if(U&16)_e(F,g,Q,ee,_,x,A);else if(U&2&&Q.class!==ee.class&&s(F,"class",null,ee.class,A),U&4&&s(F,"style",Q.style,ee.style,A),U&8){const Ce=g.dynamicProps;for(let ke=0;ke<Ce.length;ke++){const ot=Ce[ke],In=Q[ot],ws=ee[ot];(ws!==In||ot==="value")&&s(F,ot,In,ws,A,m.children,_,x,We)}}U&1&&m.children!==g.children&&u(F,g.children)}else!G&&D==null&&_e(F,g,Q,ee,_,x,A);((se=ee.onVnodeUpdated)||te)&&Ht(()=>{se&&Fn(se,_,g,m),te&&wi(g,m,_,"updated")},x)},ae=(m,g,_,x,A,N,G)=>{for(let F=0;F<g.length;F++){const U=m[F],D=g[F],te=U.el&&(U.type===Ke||!qo(U,D)||U.shapeFlag&70)?h(U.el):_;v(U,D,te,null,x,A,N,G,!0)}},_e=(m,g,_,x,A,N,G)=>{if(_!==x){if(_!==$e)for(const F in _)!Tl(F)&&!(F in x)&&s(m,F,_[F],null,G,g.children,A,N,We);for(const F in x){if(Tl(F))continue;const U=x[F],D=_[F];U!==D&&F!=="value"&&s(m,F,D,U,G,g.children,A,N,We)}"value"in x&&s(m,"value",_.value,x.value)}},Ue=(m,g,_,x,A,N,G,F,U)=>{const D=g.el=m?m.el:a(""),te=g.anchor=m?m.anchor:a("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:se}=g;se&&(F=F?F.concat(se):se),m==null?(r(D,_,x),r(te,_,x),K(g.children,_,te,A,N,G,F,U)):Q>0&&Q&64&&ee&&m.dynamicChildren?(ae(m.dynamicChildren,ee,_,A,N,G,F),(g.key!=null||A&&g===A.subTree)&&M_(m,g,!0)):ve(m,g,_,te,A,N,G,F,U)},De=(m,g,_,x,A,N,G,F,U)=>{g.slotScopeIds=F,m==null?g.shapeFlag&512?A.ctx.activate(g,_,x,G,U):Ft(g,_,x,A,N,G,U):it(m,g,U)},Ft=(m,g,_,x,A,N,G)=>{const F=m.component=rA(m,x,A);if(E_(m)&&(F.ctx.renderer=V),iA(F),F.asyncDep){if(A&&A.registerDep(F,ce),!m.el){const U=F.subTree=re(Jr);I(null,U,g,_)}return}ce(F,m,g,_,A,N,G)},it=(m,g,_)=>{const x=g.component=m.component;if(mS(m,g,_))if(x.asyncDep&&!x.asyncResolved){me(x,g,_);return}else x.next=g,lS(x.update),x.update();else g.el=m.el,x.vnode=g},ce=(m,g,_,x,A,N,G)=>{const F=()=>{if(m.isMounted){let{next:te,bu:Q,u:ee,parent:se,vnode:ge}=m,Ce=te,ke;_i(m,!1),te?(te.el=ge.el,me(m,te,G)):te=ge,Q&&xl(Q),(ke=te.props&&te.props.onVnodeBeforeUpdate)&&Fn(ke,se,te,ge),_i(m,!0);const ot=Qh(m),In=m.subTree;m.subTree=ot,v(In,ot,h(In.el),S(In),m,A,N),te.el=ot.el,Ce===null&&gS(m,ot.el),ee&&Ht(ee,A),(ke=te.props&&te.props.onVnodeUpdated)&&Ht(()=>Fn(ke,se,te,ge),A)}else{let te;const{el:Q,props:ee}=g,{bm:se,m:ge,parent:Ce}=m,ke=fa(g);if(_i(m,!1),se&&xl(se),!ke&&(te=ee&&ee.onVnodeBeforeMount)&&Fn(te,Ce,g),_i(m,!0),Q&&be){const ot=()=>{m.subTree=Qh(m),be(Q,m.subTree,m,A,null)};ke?g.type.__asyncLoader().then(()=>!m.isUnmounted&&ot()):ot()}else{const ot=m.subTree=Qh(m);v(null,ot,_,x,m,A,N),g.el=ot.el}if(ge&&Ht(ge,A),!ke&&(te=ee&&ee.onVnodeMounted)){const ot=g;Ht(()=>Fn(te,Ce,ot),A)}(g.shapeFlag&256||Ce&&fa(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&m.a&&Ht(m.a,A),m.isMounted=!0,g=_=x=null}},U=m.effect=new Xf(F,()=>sp(D),m.scope),D=m.update=()=>U.run();D.id=m.uid,_i(m,!0),D()},me=(m,g,_)=>{g.component=m;const x=m.vnode.props;m.vnode=g,m.next=null,qS(m,g.props,x,_),KS(m,g.children,_),Io(),Bg(),Eo()},ve=(m,g,_,x,A,N,G,F,U=!1)=>{const D=m&&m.children,te=m?m.shapeFlag:0,Q=g.children,{patchFlag:ee,shapeFlag:se}=g;if(ee>0){if(ee&128){tn(D,Q,_,x,A,N,G,F,U);return}else if(ee&256){Et(D,Q,_,x,A,N,G,F,U);return}}se&8?(te&16&&We(D,A,N),Q!==D&&u(_,Q)):te&16?se&16?tn(D,Q,_,x,A,N,G,F,U):We(D,A,N,!0):(te&8&&u(_,""),se&16&&K(Q,_,x,A,N,G,F,U))},Et=(m,g,_,x,A,N,G,F,U)=>{m=m||Ds,g=g||Ds;const D=m.length,te=g.length,Q=Math.min(D,te);let ee;for(ee=0;ee<Q;ee++){const se=g[ee]=U?Fr(g[ee]):Un(g[ee]);v(m[ee],se,_,null,A,N,G,F,U)}D>te?We(m,A,N,!0,!1,Q):K(g,_,x,A,N,G,F,U,Q)},tn=(m,g,_,x,A,N,G,F,U)=>{let D=0;const te=g.length;let Q=m.length-1,ee=te-1;for(;D<=Q&&D<=ee;){const se=m[D],ge=g[D]=U?Fr(g[D]):Un(g[D]);if(qo(se,ge))v(se,ge,_,null,A,N,G,F,U);else break;D++}for(;D<=Q&&D<=ee;){const se=m[Q],ge=g[ee]=U?Fr(g[ee]):Un(g[ee]);if(qo(se,ge))v(se,ge,_,null,A,N,G,F,U);else break;Q--,ee--}if(D>Q){if(D<=ee){const se=ee+1,ge=se<te?g[se].el:x;for(;D<=ee;)v(null,g[D]=U?Fr(g[D]):Un(g[D]),_,ge,A,N,G,F,U),D++}}else if(D>ee)for(;D<=Q;)st(m[D],A,N,!0),D++;else{const se=D,ge=D,Ce=new Map;for(D=ge;D<=ee;D++){const sn=g[D]=U?Fr(g[D]):Un(g[D]);sn.key!=null&&Ce.set(sn.key,D)}let ke,ot=0;const In=ee-ge+1;let ws=!1,Cg=0;const jo=new Array(In);for(D=0;D<In;D++)jo[D]=0;for(D=se;D<=Q;D++){const sn=m[D];if(ot>=In){st(sn,A,N,!0);continue}let Mn;if(sn.key!=null)Mn=Ce.get(sn.key);else for(ke=ge;ke<=ee;ke++)if(jo[ke-ge]===0&&qo(sn,g[ke])){Mn=ke;break}Mn===void 0?st(sn,A,N,!0):(jo[Mn-ge]=D+1,Mn>=Cg?Cg=Mn:ws=!0,v(sn,g[Mn],_,null,A,N,G,F,U),ot++)}const Rg=ws?QS(jo):Ds;for(ke=Rg.length-1,D=In-1;D>=0;D--){const sn=ge+D,Mn=g[sn],Ng=sn+1<te?g[sn+1].el:x;jo[D]===0?v(null,Mn,_,Ng,A,N,G,F,U):ws&&(ke<0||D!==Rg[ke]?zt(Mn,_,Ng,2):ke--)}}},zt=(m,g,_,x,A=null)=>{const{el:N,type:G,transition:F,children:U,shapeFlag:D}=m;if(D&6){zt(m.component.subTree,g,_,x);return}if(D&128){m.suspense.move(g,_,x);return}if(D&64){G.move(m,g,_,V);return}if(G===Ke){r(N,g,_);for(let Q=0;Q<U.length;Q++)zt(U[Q],g,_,x);r(m.anchor,g,_);return}if(G===Al){C(m,g,_);return}if(x!==2&&D&1&&F)if(x===0)F.beforeEnter(N),r(N,g,_),Ht(()=>F.enter(N),A);else{const{leave:Q,delayLeave:ee,afterLeave:se}=F,ge=()=>r(N,g,_),Ce=()=>{Q(N,()=>{ge(),se&&se()})};ee?ee(N,ge,Ce):Ce()}else r(N,g,_)},st=(m,g,_,x=!1,A=!1)=>{const{type:N,props:G,ref:F,children:U,dynamicChildren:D,shapeFlag:te,patchFlag:Q,dirs:ee}=m;if(F!=null&&Ud(F,null,_,m,!0),te&256){g.ctx.deactivate(m);return}const se=te&1&&ee,ge=!fa(m);let Ce;if(ge&&(Ce=G&&G.onVnodeBeforeUnmount)&&Fn(Ce,g,m),te&6)rn(m.component,_,x);else{if(te&128){m.suspense.unmount(_,x);return}se&&wi(m,null,g,"beforeUnmount"),te&64?m.type.remove(m,g,_,A,V,x):D&&(N!==Ke||Q>0&&Q&64)?We(D,g,_,!1,!0):(N===Ke&&Q&384||!A&&te&16)&&We(U,g,_),x&&bn(m)}(ge&&(Ce=G&&G.onVnodeUnmounted)||se)&&Ht(()=>{Ce&&Fn(Ce,g,m),se&&wi(m,null,g,"unmounted")},_)},bn=m=>{const{type:g,el:_,anchor:x,transition:A}=m;if(g===Ke){nn(_,x);return}if(g===Al){T(m);return}const N=()=>{i(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(m.shapeFlag&1&&A&&!A.persisted){const{leave:G,delayLeave:F}=A,U=()=>G(_,N);F?F(m.el,N,U):U()}else N()},nn=(m,g)=>{let _;for(;m!==g;)_=d(m),i(m),m=_;i(g)},rn=(m,g,_)=>{const{bum:x,scope:A,update:N,subTree:G,um:F}=m;x&&xl(x),A.stop(),N&&(N.active=!1,st(G,m,g,_)),F&&Ht(F,g),Ht(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},We=(m,g,_,x=!1,A=!1,N=0)=>{for(let G=N;G<m.length;G++)st(m[G],g,_,x,A)},S=m=>m.shapeFlag&6?S(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),H=(m,g,_)=>{m==null?g._vnode&&st(g._vnode,null,null,!0):v(g._vnode||null,m,g,null,null,null,_),Bg(),g_(),g._vnode=m},V={p:v,um:st,m:zt,r:bn,mt:Ft,mc:K,pc:ve,pbc:ae,n:S,o:n};let Z,be;return e&&([Z,be]=e(V)),{render:H,hydrate:Z,createApp:VS(H,Z)}}function _i({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function M_(n,e,t=!1){const r=n.children,i=e.children;if(ne(r)&&ne(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Fr(i[s]),a.el=o.el),t||M_(o,a)),a.type===Hu&&(a.el=o.el)}}function QS(n){const e=n.slice(),t=[0];let r,i,s,o,a;const c=n.length;for(r=0;r<c;r++){const l=n[r];if(l!==0){if(i=t[t.length-1],n[i]<l){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const YS=n=>n.__isTeleport,Ke=Symbol.for("v-fgt"),Hu=Symbol.for("v-txt"),Jr=Symbol.for("v-cmt"),Al=Symbol.for("v-stc"),ma=[];let xn=null;function oe(n=!1){ma.push(xn=n?null:[])}function XS(){ma.pop(),xn=ma[ma.length-1]||null}let Ua=1;function Jg(n){Ua+=n}function F_(n){return n.dynamicChildren=Ua>0?xn||Ds:null,XS(),Ua>0&&xn&&xn.push(n),n}function pe(n,e,t,r,i,s){return F_(f(n,e,t,r,i,s,!0))}function us(n,e,t,r,i){return F_(re(n,e,t,r,i,!0))}function Ql(n){return n?n.__v_isVNode===!0:!1}function qo(n,e){return n.type===e.type&&n.key===e.key}const Ku="__vInternal",U_=({key:n})=>n??null,kl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||tt(n)||fe(n)?{i:At,r:n,k:e,f:!!t}:n:null);function f(n,e=null,t=null,r=0,i=null,s=n===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&U_(e),ref:e&&kl(e),scopeId:w_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:At};return a?(lp(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=ht(t)?8:16),Ua>0&&!o&&xn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&xn.push(c),c}const re=JS;function JS(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===RS)&&(n=Jr),Ql(n)){const a=Ws(n,e,!0);return t&&lp(a,t),Ua>0&&!s&&xn&&(a.shapeFlag&6?xn[xn.indexOf(n)]=a:xn.push(a)),a.patchFlag|=-2,a}if(lA(n)&&(n=n.__vccOpts),e){e=ZS(e);let{class:a,style:c}=e;a&&!ht(a)&&(e.class=fr(a)),Me(c)&&(l_(c)&&!ne(c)&&(c=vt({},c)),e.style=Wf(c))}const o=ht(n)?1:yS(n)?128:YS(n)?64:Me(n)?4:fe(n)?2:0;return f(n,e,t,r,i,o,s,!0)}function ZS(n){return n?l_(n)||Ku in n?vt({},n):n:null}function Ws(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?eA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&U_(a),ref:e&&e.ref?t&&i?ne(i)?i.concat(kl(e)):[i,kl(e)]:kl(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ke?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ws(n.ssContent),ssFallback:n.ssFallback&&Ws(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function we(n=" ",e=0){return re(Hu,null,n,e)}function cp(n,e){const t=re(Al,null,n);return t.staticCount=e,t}function Fs(n="",e=!1){return e?(oe(),us(Jr,null,n)):re(Jr,null,n)}function Un(n){return n==null||typeof n=="boolean"?re(Jr):ne(n)?re(Ke,null,n.slice()):typeof n=="object"?Fr(n):re(Hu,null,String(n))}function Fr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ws(n)}function lp(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ne(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),lp(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Ku in e)?e._ctx=At:i===3&&At&&(At.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:At},t=32):(e=String(e),r&64?(t=16,e=[we(e)]):t=8);n.children=e,n.shapeFlag|=t}function eA(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=fr([e.class,r.class]));else if(i==="style")e.style=Wf([e.style,r.style]);else if(Fu(i)){const s=e[i],o=r[i];o&&s!==o&&!(ne(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Fn(n,e,t,r=null){Rn(n,e,7,[t,r])}const tA=R_();let nA=0;function rA(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||tA,s={uid:nA++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P_(r,i),emitsOptions:v_(r,i),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dS.bind(null,s),n.ce&&n.ce(s),s}let gt=null,up,_s,Zg="__VUE_INSTANCE_SETTERS__";(_s=Cd()[Zg])||(_s=Cd()[Zg]=[]),_s.push(n=>gt=n),up=n=>{_s.length>1?_s.forEach(e=>e(n)):_s[0](n)};const Qs=n=>{up(n),n.scope.on()},ji=()=>{gt&&gt.scope.off(),up(null)};function $_(n){return n.vnode.shapeFlag&4}let $a=!1;function iA(n,e=!1){$a=e;const{props:t,children:r}=n.vnode,i=$_(n);jS(n,t,i,e),HS(n,r);const s=i?sA(n,e):void 0;return $a=!1,s}function sA(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Bu(new Proxy(n.ctx,DS));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?aA(n):null;Qs(n),Io();const s=Qr(r,n,0,[n.props,i]);if(Eo(),ji(),zw(s)){if(s.then(ji,ji),e)return s.then(o=>{ey(n,o,e)}).catch(o=>{ju(o,n,0)});n.asyncDep=s}else ey(n,s,e)}else V_(n,e)}function ey(n,e,t){fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Me(e)&&(n.setupState=f_(e)),V_(n,t)}let ty;function V_(n,e,t){const r=n.type;if(!n.render){if(!e&&ty&&!r.render){const i=r.template||op(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,l=vt(vt({isCustomElement:s,delimiters:a},o),c);r.render=ty(i,l)}}n.render=r.render||Cn}Qs(n),Io(),OS(n),Eo(),ji()}function oA(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Zt(n,"get","$attrs"),e[t]}}))}function aA(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return oA(n)},slots:n.slots,emit:n.emit,expose:e}}function Gu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(f_(Bu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in pa)return pa[t](n)},has(e,t){return t in e||t in pa}}))}function cA(n,e=!0){return fe(n)?n.displayName||n.name:n.name||e&&n.__name}function lA(n){return fe(n)&&"__vccOpts"in n}const cn=(n,e)=>oS(n,e,$a);function B_(n,e,t){const r=arguments.length;return r===2?Me(e)&&!ne(e)?Ql(e)?re(n,null,[e]):re(n,e):re(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Ql(t)&&(t=[t]),re(n,e,t))}const uA=Symbol.for("v-scx"),hA=()=>mn(uA),dA="3.3.4",fA="http://www.w3.org/2000/svg",xi=typeof document<"u"?document:null,ny=xi&&xi.createElement("template"),pA={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?xi.createElementNS(fA,n):xi.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>xi.createTextNode(n),createComment:n=>xi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>xi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{ny.innerHTML=r?`<svg>${n}</svg>`:n;const a=ny.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function mA(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function gA(n,e,t){const r=n.style,i=ht(t);if(t&&!i){if(e&&!ht(e))for(const s in e)t[s]==null&&$d(r,s,"");for(const s in t)$d(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const ry=/\s*!important$/;function $d(n,e,t){if(ne(t))t.forEach(r=>$d(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=yA(n,e);ry.test(t)?n.setProperty(ls(r),t.replace(ry,""),"important"):n[r]=t}}const iy=["Webkit","Moz","ms"],Xh={};function yA(n,e){const t=Xh[e];if(t)return t;let r=er(e);if(r!=="filter"&&r in n)return Xh[e]=r;r=$u(r);for(let i=0;i<iy.length;i++){const s=iy[i]+r;if(s in n)return Xh[e]=s}return e}const sy="http://www.w3.org/1999/xlink";function vA(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(sy,e.slice(6,e.length)):n.setAttributeNS(sy,e,t);else{const s=bx(e);t==null||s&&!Gw(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function wA(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const l=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";l!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Gw(t):t==null&&l==="string"?(t="",c=!0):l==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function jr(n,e,t,r){n.addEventListener(e,t,r)}function _A(n,e,t,r){n.removeEventListener(e,t,r)}function bA(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=IA(e);if(r){const l=s[e]=xA(r,i);jr(n,a,l,c)}else o&&(_A(n,a,o,c),s[e]=void 0)}}const oy=/(?:Once|Passive|Capture)$/;function IA(n){let e;if(oy.test(n)){e={};let r;for(;r=n.match(oy);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ls(n.slice(2)),e]}let Jh=0;const EA=Promise.resolve(),TA=()=>Jh||(EA.then(()=>Jh=0),Jh=Date.now());function xA(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Rn(SA(r,t.value),e,5,[r])};return t.value=n,t.attached=TA(),t}function SA(n,e){if(ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ay=/^on[a-z]/,AA=(n,e,t,r,i=!1,s,o,a,c)=>{e==="class"?mA(n,r,i):e==="style"?gA(n,t,r):Fu(e)?Hf(e)||bA(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kA(n,e,r,i))?wA(n,e,r,s,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),vA(n,e,r,i))};function kA(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&ay.test(e)&&fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||ay.test(e)&&ht(t)?!1:e in n}const Ys=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ne(e)?t=>xl(e,t):e};function CA(n){n.target.composing=!0}function cy(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lt={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=Ys(i);const s=r||i.props&&i.props.type==="number";jr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=zl(a)),n._assign(a)}),t&&jr(n,"change",()=>{n.value=n.value.trim()}),e||(jr(n,"compositionstart",CA),jr(n,"compositionend",cy),jr(n,"change",cy))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=Ys(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&zl(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},RA={deep:!0,created(n,e,t){n._assign=Ys(t),jr(n,"change",()=>{const r=n._modelValue,i=Va(n),s=n.checked,o=n._assign;if(ne(r)){const a=Qf(r,i),c=a!==-1;if(s&&!c)o(r.concat(i));else if(!s&&c){const l=[...r];l.splice(a,1),o(l)}}else if(bo(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(j_(n,s))})},mounted:ly,beforeUpdate(n,e,t){n._assign=Ys(t),ly(n,e,t)}};function ly(n,{value:e,oldValue:t},r){n._modelValue=e,ne(e)?n.checked=Qf(e,r.props.value)>-1:bo(e)?n.checked=e.has(r.props.value):e!==t&&(n.checked=bc(e,j_(n,!0)))}const NA={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const i=bo(e);jr(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?zl(Va(o)):Va(o));n._assign(n.multiple?i?new Set(s):s:s[0])}),n._assign=Ys(r)},mounted(n,{value:e}){uy(n,e)},beforeUpdate(n,e,t){n._assign=Ys(t)},updated(n,{value:e}){uy(n,e)}};function uy(n,e){const t=n.multiple;if(!(t&&!ne(e)&&!bo(e))){for(let r=0,i=n.options.length;r<i;r++){const s=n.options[r],o=Va(s);if(t)ne(e)?s.selected=Qf(e,o)>-1:s.selected=e.has(o);else if(bc(Va(s),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Va(n){return"_value"in n?n._value:n.value}function j_(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const PA=["ctrl","shift","alt","meta"],DA={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>PA.some(t=>n[`${t}Key`]&&!e.includes(t))},yr=(n,e)=>(t,...r)=>{for(let i=0;i<e.length;i++){const s=DA[e[i]];if(s&&s(t,e))return}return n(t,...r)},OA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},LA=(n,e)=>t=>{if(!("key"in t))return;const r=ls(t.key);if(e.some(i=>i===r||OA[i]===r))return n(t)},Us={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):zo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),zo(n,!0),r.enter(n)):r.leave(n,()=>{zo(n,!1)}):zo(n,e))},beforeUnmount(n,{value:e}){zo(n,e)}};function zo(n,e){n.style.display=e?n._vod:"none"}const MA=vt({patchProp:AA},pA);let hy;function FA(){return hy||(hy=GS(MA))}const UA=(...n)=>{const e=FA().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=$A(r);if(!i)return;const s=e._component;!fe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $A(n){return ht(n)?document.querySelector(n):n}var VA=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let q_;const Wu=n=>q_=n,z_=Symbol();function Vd(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ga;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ga||(ga={}));function BA(){const n=Yw(!0),e=n.run(()=>Y({}));let t=[],r=[];const i=Bu({install(s){Wu(i),i._a=s,s.provide(z_,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!VA?r.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const H_=()=>{};function dy(n,e,t,r=H_){n.push(e);const i=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),r())};return!t&&Xw()&&Tx(i),i}function bs(n,...e){n.slice().forEach(t=>{t(...e)})}const jA=n=>n();function Bd(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,r)=>n.set(r,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];Vd(i)&&Vd(r)&&n.hasOwnProperty(t)&&!tt(r)&&!Wr(r)?n[t]=Bd(i,r):n[t]=r}return n}const qA=Symbol();function zA(n){return!Vd(n)||!n.hasOwnProperty(qA)}const{assign:Mr}=Object;function HA(n){return!!(tt(n)&&n.effect)}function KA(n,e,t,r){const{state:i,actions:s,getters:o}=e,a=t.state.value[n];let c;function l(){a||(t.state.value[n]=i?i():{});const u=nS(t.state.value[n]);return Mr(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=Bu(cn(()=>{Wu(t);const p=t._s.get(n);return o[d].call(p,p)})),h),{}))}return c=K_(n,l,e,t,r,!0),c}function K_(n,e,t={},r,i,s){let o;const a=Mr({actions:{}},t),c={deep:!0};let l,u,h=[],d=[],p;const y=r.state.value[n];!s&&!y&&(r.state.value[n]={}),Y({});let v;function w(K){let B;l=u=!1,typeof K=="function"?(K(r.state.value[n]),B={type:ga.patchFunction,storeId:n,events:p}):(Bd(r.state.value[n],K),B={type:ga.patchObject,payload:K,storeId:n,events:p});const ae=v=Symbol();ip().then(()=>{v===ae&&(l=!0)}),u=!0,bs(h,B,r.state.value[n])}const I=s?function(){const{state:B}=t,ae=B?B():{};this.$patch(_e=>{Mr(_e,ae)})}:H_;function k(){o.stop(),h=[],d=[],r._s.delete(n)}function C(K,B){return function(){Wu(r);const ae=Array.from(arguments),_e=[],Ue=[];function De(ce){_e.push(ce)}function Ft(ce){Ue.push(ce)}bs(d,{args:ae,name:K,store:M,after:De,onError:Ft});let it;try{it=B.apply(this&&this.$id===n?this:M,ae)}catch(ce){throw bs(Ue,ce),ce}return it instanceof Promise?it.then(ce=>(bs(_e,ce),ce)).catch(ce=>(bs(Ue,ce),Promise.reject(ce))):(bs(_e,it),it)}}const T={_p:r,$id:n,$onAction:dy.bind(null,d),$patch:w,$reset:I,$subscribe(K,B={}){const ae=dy(h,K,B.detached,()=>_e()),_e=o.run(()=>Ms(()=>r.state.value[n],Ue=>{(B.flush==="sync"?u:l)&&K({storeId:n,type:ga.direct,events:p},Ue)},Mr({},c,B)));return ae},$dispose:k},M=To(T);r._s.set(n,M);const O=r._a&&r._a.runWithContext||jA,$=r._e.run(()=>(o=Yw(),O(()=>o.run(e))));for(const K in $){const B=$[K];if(tt(B)&&!HA(B)||Wr(B))s||(y&&zA(B)&&(tt(B)?B.value=y[K]:Bd(B,y[K])),r.state.value[n][K]=B);else if(typeof B=="function"){const ae=C(K,B);$[K]=ae,a.actions[K]=B}}return Mr(M,$),Mr(Se(M),$),Object.defineProperty(M,"$state",{get:()=>r.state.value[n],set:K=>{w(B=>{Mr(B,K)})}}),r._p.forEach(K=>{Mr(M,o.run(()=>K({store:M,app:r._a,pinia:r,options:a})))}),y&&s&&t.hydrate&&t.hydrate(M.$state,y),l=!0,u=!0,M}function GA(n,e,t){let r,i;const s=typeof e=="function";typeof n=="string"?(r=n,i=s?t:e):(i=n,r=n.id);function o(a,c){const l=BS();return a=a||(l?mn(z_,null):null),a&&Wu(a),a=q_,a._s.has(r)||(s?K_(r,e,i,a):KA(r,i,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof window<"u";function WA(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Re=Object.assign;function Zh(n,e){const t={};for(const r in e){const i=e[r];t[r]=Nn(i)?i.map(n):n(i)}return t}const ya=()=>{},Nn=Array.isArray,QA=/\/$/,YA=n=>n.replace(QA,"");function ed(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=e1(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function XA(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function fy(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function JA(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Xs(e.matched[r],t.matched[i])&&G_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Xs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function G_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!ZA(n[t],e[t]))return!1;return!0}function ZA(n,e){return Nn(n)?py(n,e):Nn(e)?py(e,n):n===e}function py(n,e){return Nn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function e1(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ba;(function(n){n.pop="pop",n.push="push"})(Ba||(Ba={}));var va;(function(n){n.back="back",n.forward="forward",n.unknown=""})(va||(va={}));function t1(n){if(!n)if(Ss){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),YA(n)}const n1=/^[^#]+#/;function r1(n,e){return n.replace(n1,"#")+e}function i1(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Qu=()=>({left:window.pageXOffset,top:window.pageYOffset});function s1(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=i1(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function my(n,e){return(history.state?history.state.position-e:-1)+n}const jd=new Map;function o1(n,e){jd.set(n,e)}function a1(n){const e=jd.get(n);return jd.delete(n),e}let c1=()=>location.protocol+"//"+location.host;function W_(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),fy(c,"")}return fy(t,n)+r+i}function l1(n,e,t,r){let i=[],s=[],o=null;const a=({state:d})=>{const p=W_(n,location),y=t.value,v=e.value;let w=0;if(d){if(t.value=p,e.value=d,o&&o===y){o=null;return}w=v?d.position-v.position:0}else r(p);i.forEach(I=>{I(t.value,y,{delta:w,type:Ba.pop,direction:w?w>0?va.forward:va.back:va.unknown})})};function c(){o=t.value}function l(d){i.push(d);const p=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:Qu()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function gy(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Qu():null}}function u1(n){const{history:e,location:t}=window,r={value:W_(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:c1()+n+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function o(c,l){const u=Re({},e.state,gy(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Re({},i.value,e.state,{forward:c,scroll:Qu()});s(u.current,u,!0);const h=Re({},gy(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function h1(n){n=t1(n);const e=u1(n),t=l1(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Re({location:"",base:n,go:r,createHref:r1.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function d1(n){return typeof n=="string"||n&&typeof n=="object"}function Q_(n){return typeof n=="string"||typeof n=="symbol"}const Pr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y_=Symbol("");var yy;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(yy||(yy={}));function Js(n,e){return Re(new Error,{type:n,[Y_]:!0},e)}function ar(n,e){return n instanceof Error&&Y_ in n&&(e==null||!!(n.type&e))}const vy="[^/]+?",f1={sensitive:!1,strict:!1,start:!0,end:!0},p1=/[.+*?^${}()[\]/\\]/g;function m1(n,e){const t=Re({},f1,e),r=[];let i=t.start?"^":"";const s=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(t.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(p1,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:v,optional:w,regexp:I}=d;s.push({name:y,repeatable:v,optional:w});const k=I||vy;if(k!==vy){p+=10;try{new RegExp(`(${k})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+T.message)}}let C=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(C=w&&l.length<2?`(?:/${C})`:"/"+C),w&&(C+="?"),i+=C,p+=20,w&&(p+=-8),v&&(p+=-20),k===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=s[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:v,optional:w}=p,I=y in l?l[y]:"";if(Nn(I)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=Nn(I)?I.join("/"):I;if(!k)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function g1(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function y1(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=g1(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(wy(r))return 1;if(wy(i))return-1}return i.length-r.length}function wy(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const v1={type:0,value:""},w1=/[a-zA-Z0-9_]/;function _1(n){if(!n)return[[]];if(n==="/")return[[v1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${l}": ${p}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(t===0?s.push({type:0,value:l}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:w1.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function b1(n,e,t){const r=m1(_1(n.path),t),i=Re(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function I1(n,e){const t=[],r=new Map;e=Iy({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const p=!d,y=E1(u);y.aliasOf=d&&d.record;const v=Iy(e,u),w=[y];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of C)w.push(Re({},y,{components:d?d.record.components:y.components,path:T,aliasOf:d?d.record:y}))}let I,k;for(const C of w){const{path:T}=C;if(h&&T[0]!=="/"){const M=h.record.path,O=M[M.length-1]==="/"?"":"/";C.path=h.record.path+(T&&O+T)}if(I=b1(C,h,v),d?d.alias.push(I):(k=k||I,k!==I&&k.alias.push(I),p&&u.name&&!by(I)&&o(u.name)),y.children){const M=y.children;for(let O=0;O<M.length;O++)s(M[O],I,d&&d.children[O])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&c(I)}return k?()=>{o(k)}:ya}function o(u){if(Q_(u)){const h=r.get(u);h&&(r.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function c(u){let h=0;for(;h<t.length&&y1(u,t[h])>=0&&(u.record.path!==t[h].record.path||!X_(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!by(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Js(1,{location:u});v=d.record.name,p=Re(_y(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&_y(u.params,d.keys.map(k=>k.name))),y=d.stringify(p)}else if("path"in u)y=u.path,d=t.find(k=>k.re.test(y)),d&&(p=d.parse(y),v=d.record.name);else{if(d=h.name?r.get(h.name):t.find(k=>k.re.test(h.path)),!d)throw Js(1,{location:u,currentLocation:h});v=d.record.name,p=Re({},h.params,u.params),y=d.stringify(p)}const w=[];let I=d;for(;I;)w.unshift(I.record),I=I.parent;return{name:v,path:y,params:p,matched:w,meta:x1(w)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function _y(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function E1(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:T1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function T1(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function by(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function x1(n){return n.reduce((e,t)=>Re(e,t.meta),{})}function Iy(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function X_(n,e){return e.children.some(t=>t===n||X_(n,t))}const J_=/#/g,S1=/&/g,A1=/\//g,k1=/=/g,C1=/\?/g,Z_=/\+/g,R1=/%5B/g,N1=/%5D/g,eb=/%5E/g,P1=/%60/g,tb=/%7B/g,D1=/%7C/g,nb=/%7D/g,O1=/%20/g;function hp(n){return encodeURI(""+n).replace(D1,"|").replace(R1,"[").replace(N1,"]")}function L1(n){return hp(n).replace(tb,"{").replace(nb,"}").replace(eb,"^")}function qd(n){return hp(n).replace(Z_,"%2B").replace(O1,"+").replace(J_,"%23").replace(S1,"%26").replace(P1,"`").replace(tb,"{").replace(nb,"}").replace(eb,"^")}function M1(n){return qd(n).replace(k1,"%3D")}function F1(n){return hp(n).replace(J_,"%23").replace(C1,"%3F")}function U1(n){return n==null?"":F1(n).replace(A1,"%2F")}function Yl(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function $1(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Z_," "),o=s.indexOf("="),a=Yl(o<0?s:s.slice(0,o)),c=o<0?null:Yl(s.slice(o+1));if(a in e){let l=e[a];Nn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ey(n){let e="";for(let t in n){const r=n[t];if(t=M1(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Nn(r)?r.map(s=>s&&qd(s)):[r&&qd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function V1(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Nn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const B1=Symbol(""),Ty=Symbol(""),Yu=Symbol(""),dp=Symbol(""),zd=Symbol("");function Ho(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Ur(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Js(4,{from:t,to:e})):h instanceof Error?a(h):d1(h)?a(Js(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=n.call(r&&r.instances[i],e,t,c);let u=Promise.resolve(l);n.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function td(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(j1(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Ur(l,t,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=WA(l)?l.default:l;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ur(d,t,r,s,o)()}))}}return i}function j1(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function xy(n){const e=mn(Yu),t=mn(dp),r=cn(()=>e.resolve(he(n.to))),i=cn(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(Xs.bind(null,u));if(d>-1)return d;const p=Sy(c[l-2]);return l>1&&Sy(u)===p&&h[h.length-1].path!==p?h.findIndex(Xs.bind(null,c[l-2])):d}),s=cn(()=>i.value>-1&&H1(t.params,r.value.params)),o=cn(()=>i.value>-1&&i.value===t.matched.length-1&&G_(t.params,r.value.params));function a(c={}){return z1(c)?e[he(n.replace)?"replace":"push"](he(n.to)).catch(ya):Promise.resolve()}return{route:r,href:cn(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const q1=I_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xy,setup(n,{slots:e}){const t=To(xy(n)),{options:r}=mn(Yu),i=cn(()=>({[Ay(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Ay(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:B_("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),Sn=q1;function z1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function H1(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!Nn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Sy(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ay=(n,e,t)=>n??e??t,K1=I_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=mn(zd),i=cn(()=>n.route||r.value),s=mn(Ty,0),o=cn(()=>{let l=he(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=cn(()=>i.value.matched[o.value]);Sl(Ty,cn(()=>o.value+1)),Sl(B1,a),Sl(zd,i);const c=Y();return Ms(()=>[c.value,a.value,n.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Xs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=n.name,h=a.value,d=h&&h.components[u];if(!d)return ky(t.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=B_(d,Re({},y,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ky(t.default,{Component:w,route:l})||w}}});function ky(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ic=K1;function G1(n){const e=I1(n.routes,n),t=n.parseQuery||$1,r=n.stringifyQuery||Ey,i=n.history,s=Ho(),o=Ho(),a=Ho(),c=Zx(Pr);let l=Pr;Ss&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zh.bind(null,S=>""+S),h=Zh.bind(null,U1),d=Zh.bind(null,Yl);function p(S,H){let V,Z;return Q_(S)?(V=e.getRecordMatcher(S),Z=H):Z=S,e.addRoute(Z,V)}function y(S){const H=e.getRecordMatcher(S);H&&e.removeRoute(H)}function v(){return e.getRoutes().map(S=>S.record)}function w(S){return!!e.getRecordMatcher(S)}function I(S,H){if(H=Re({},H||c.value),typeof S=="string"){const _=ed(t,S,H.path),x=e.resolve({path:_.path},H),A=i.createHref(_.fullPath);return Re(_,x,{params:d(x.params),hash:Yl(_.hash),redirectedFrom:void 0,href:A})}let V;if("path"in S)V=Re({},S,{path:ed(t,S.path,H.path).path});else{const _=Re({},S.params);for(const x in _)_[x]==null&&delete _[x];V=Re({},S,{params:h(_)}),H.params=h(H.params)}const Z=e.resolve(V,H),be=S.hash||"";Z.params=u(d(Z.params));const m=XA(r,Re({},S,{hash:L1(be),path:Z.path})),g=i.createHref(m);return Re({fullPath:m,hash:be,query:r===Ey?V1(S.query):S.query||{}},Z,{redirectedFrom:void 0,href:g})}function k(S){return typeof S=="string"?ed(t,S,c.value.path):Re({},S)}function C(S,H){if(l!==S)return Js(8,{from:H,to:S})}function T(S){return $(S)}function M(S){return T(Re(k(S),{replace:!0}))}function O(S){const H=S.matched[S.matched.length-1];if(H&&H.redirect){const{redirect:V}=H;let Z=typeof V=="function"?V(S):V;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=k(Z):{path:Z},Z.params={}),Re({query:S.query,hash:S.hash,params:"path"in Z?{}:S.params},Z)}}function $(S,H){const V=l=I(S),Z=c.value,be=S.state,m=S.force,g=S.replace===!0,_=O(V);if(_)return $(Re(k(_),{state:typeof _=="object"?Re({},be,_.state):be,force:m,replace:g}),H||V);const x=V;x.redirectedFrom=H;let A;return!m&&JA(r,Z,V)&&(A=Js(16,{to:x,from:Z}),zt(Z,Z,!0,!1)),(A?Promise.resolve(A):ae(x,Z)).catch(N=>ar(N)?ar(N,2)?N:tn(N):ve(N,x,Z)).then(N=>{if(N){if(ar(N,2))return $(Re({replace:g},k(N.to),{state:typeof N.to=="object"?Re({},be,N.to.state):be,force:m}),H||x)}else N=Ue(x,Z,!0,g,be);return _e(x,Z,N),N})}function K(S,H){const V=C(S,H);return V?Promise.reject(V):Promise.resolve()}function B(S){const H=nn.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(S):S()}function ae(S,H){let V;const[Z,be,m]=W1(S,H);V=td(Z.reverse(),"beforeRouteLeave",S,H);for(const _ of Z)_.leaveGuards.forEach(x=>{V.push(Ur(x,S,H))});const g=K.bind(null,S,H);return V.push(g),We(V).then(()=>{V=[];for(const _ of s.list())V.push(Ur(_,S,H));return V.push(g),We(V)}).then(()=>{V=td(be,"beforeRouteUpdate",S,H);for(const _ of be)_.updateGuards.forEach(x=>{V.push(Ur(x,S,H))});return V.push(g),We(V)}).then(()=>{V=[];for(const _ of S.matched)if(_.beforeEnter&&!H.matched.includes(_))if(Nn(_.beforeEnter))for(const x of _.beforeEnter)V.push(Ur(x,S,H));else V.push(Ur(_.beforeEnter,S,H));return V.push(g),We(V)}).then(()=>(S.matched.forEach(_=>_.enterCallbacks={}),V=td(m,"beforeRouteEnter",S,H),V.push(g),We(V))).then(()=>{V=[];for(const _ of o.list())V.push(Ur(_,S,H));return V.push(g),We(V)}).catch(_=>ar(_,8)?_:Promise.reject(_))}function _e(S,H,V){for(const Z of a.list())B(()=>Z(S,H,V))}function Ue(S,H,V,Z,be){const m=C(S,H);if(m)return m;const g=H===Pr,_=Ss?history.state:{};V&&(Z||g?i.replace(S.fullPath,Re({scroll:g&&_&&_.scroll},be)):i.push(S.fullPath,be)),c.value=S,zt(S,H,V,g),tn()}let De;function Ft(){De||(De=i.listen((S,H,V)=>{if(!rn.listening)return;const Z=I(S),be=O(Z);if(be){$(Re(be,{replace:!0}),Z).catch(ya);return}l=Z;const m=c.value;Ss&&o1(my(m.fullPath,V.delta),Qu()),ae(Z,m).catch(g=>ar(g,12)?g:ar(g,2)?($(g.to,Z).then(_=>{ar(_,20)&&!V.delta&&V.type===Ba.pop&&i.go(-1,!1)}).catch(ya),Promise.reject()):(V.delta&&i.go(-V.delta,!1),ve(g,Z,m))).then(g=>{g=g||Ue(Z,m,!1),g&&(V.delta&&!ar(g,8)?i.go(-V.delta,!1):V.type===Ba.pop&&ar(g,20)&&i.go(-1,!1)),_e(Z,m,g)}).catch(ya)}))}let it=Ho(),ce=Ho(),me;function ve(S,H,V){tn(S);const Z=ce.list();return Z.length?Z.forEach(be=>be(S,H,V)):console.error(S),Promise.reject(S)}function Et(){return me&&c.value!==Pr?Promise.resolve():new Promise((S,H)=>{it.add([S,H])})}function tn(S){return me||(me=!S,Ft(),it.list().forEach(([H,V])=>S?V(S):H()),it.reset()),S}function zt(S,H,V,Z){const{scrollBehavior:be}=n;if(!Ss||!be)return Promise.resolve();const m=!V&&a1(my(S.fullPath,0))||(Z||!V)&&history.state&&history.state.scroll||null;return ip().then(()=>be(S,H,m)).then(g=>g&&s1(g)).catch(g=>ve(g,S,H))}const st=S=>i.go(S);let bn;const nn=new Set,rn={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:w,getRoutes:v,resolve:I,options:n,push:T,replace:M,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:Et,install(S){const H=this;S.component("RouterLink",Sn),S.component("RouterView",Ic),S.config.globalProperties.$router=H,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>he(c)}),Ss&&!bn&&c.value===Pr&&(bn=!0,T(i.location).catch(be=>{}));const V={};for(const be in Pr)V[be]=cn(()=>c.value[be]);S.provide(Yu,H),S.provide(dp,To(V)),S.provide(zd,c);const Z=S.unmount;nn.add(S),S.unmount=function(){nn.delete(S),nn.size<1&&(l=Pr,De&&De(),De=null,c.value=Pr,bn=!1,me=!1),Z()}}};function We(S){return S.reduce((H,V)=>H.then(()=>B(V)),Promise.resolve())}return rn}function W1(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(l=>Xs(l,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>Xs(l,c))||i.push(c))}return[t,r,i]}function Xu(){return mn(Yu)}function fp(){return mn(dp)}const Q1={__name:"App",setup(n){return(e,t)=>(oe(),us(he(Ic)))}},Y1="/itemshare/assets/ItemShareLogo-622ee656.png",X1=f("span",{class:"font-poppins hidden select-none text-3xl font-black text-white underline decoration-green-900 decoration-4 underline-offset-4 md:inline-block"},"ItemShare",-1),J1=["src"],rb={__name:"ItemShareLogo",setup(n){return(e,t)=>(oe(),us(he(Sn),{to:"/",class:"flex items-center gap-2"},{default:Ye(()=>[X1,f("img",{src:he(Y1),class:"w-10 rounded-xl",loading:"lazy"},null,8,J1)]),_:1}))}},Z1=f("div",{class:"flex h-full flex-col-reverse bg-green-100 md:flex-row-reverse",style:{"background-image":"url('https://wordpress.heals.com/blog/wp-content/uploads/2021/08/Colourful-sofa-cushions-1024x485.jpg;')","background-size":"cover","background-position":"center"}},[f("div",{class:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),f("div",{class:"z-10 basis-1/2 bg-green-600"})],-1),ek={class:"absolute top-0 z-20 flex h-screen w-full flex-col md:flex-row-reverse"},tk={class:"flex w-full basis-full flex-col justify-between gap-4 overflow-y-auto p-8 md:basis-1/2"},nk={class:"flex items-center justify-between"},rk=f("nav",{class:"flex gap-4 text-white"},[f("a",{href:"#"},"About Us"),f("a",{href:"#"},"Contacts")],-1),ik=f("footer",{class:"text-right text-white"},"All Rights Reserved 2023. ®",-1),sk={__name:"LandingView",setup(n){return(e,t)=>(oe(),pe(Ke,null,[Z1,f("div",ek,[f("div",tk,[f("header",nk,[rk,re(rb)]),re(he(Ic)),ik])])],64))}},Ju=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},ok={},ak={class:"flex basis-full flex-col justify-between px-4 pt-16"},ck=f("h1",{class:"basis-full border-0 border-green-400 text-5xl font-bold text-white sm:text-6xl md:border-b-4 md:shadow-none"}," Hello, looking for something you like? ",-1),lk={class:"flex basis-full flex-col gap-8 px-4 py-16"},uk=f("p",{class:"text-xl text-white"}," Unlock the value of your unused items: Earn, Share, and Connect with ItemShare ",-1),hk={class:"flex items-center gap-2"};function dk(n,e){const t=So("RouterLink");return oe(),pe("div",ak,[ck,f("div",lk,[uk,f("div",hk,[re(t,{to:"/login",class:"rounded-xl border-2 border-white bg-white px-5 py-3 text-center text-green-800"},{default:Ye(()=>[we(" LOGIN ")]),_:1}),re(t,{to:"/register",class:"rounded-xl border-2 border-white px-5 py-3 text-center text-white"},{default:Ye(()=>[we(" REGISTER ")]),_:1})])])])}const fk=Ju(ok,[["render",dk]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ib=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},pk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(t[u],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ib(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new mk;const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gk=function(n){const e=ib(n);return sb.encodeByteArray(e,!0)},Xl=function(n){return gk(n).replace(/\./g,"")},ob=function(n){try{return sb.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Jl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!yk(t)||(n[t]=Jl(n[t],e[t]));return n}function yk(n){return n!=="__proto__"}/**
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
 */function vk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wk=()=>vk().__FIREBASE_DEFAULTS__,_k=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ob(n[1]);return e&&JSON.parse(e)},pp=()=>{try{return wk()||_k()||bk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ab=()=>{var n;return(n=pp())===null||n===void 0?void 0:n.config},Ik=n=>{var e;return(e=pp())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Tk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Xl(JSON.stringify(t)),Xl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function mp(){var n;const e=(n=pp())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sk(){return typeof self=="object"&&self.self===self}function cb(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lb(){const n=Ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ak(){return!mp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ja(){try{return typeof indexedDB=="object"}catch{return!1}}function kk(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="FirebaseError";class Ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ck,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Rk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,r)}}function Rk(n,e){return n.replace(Nk,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Pk(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hd(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ry(s)&&Ry(o)){if(!Hd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ry(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ub(n,e){const t=new Dk(n,e);return t.subscribe.bind(t)}class Dk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ok(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=nd),i.error===void 0&&(i.error=nd),i.complete===void 0&&(i.complete=nd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ok(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function nd(){}/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ii="[DEFAULT]";/**
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
 */class Lk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ek;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fk(e))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ii){return this.instances.has(e)}getOptions(e=Ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ii){return this.component?this.component.multipleInstances?e:Ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mk(n){return n===Ii?void 0:n}function Fk(n){return n.instantiationMode==="EAGER"}/**
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
 */class Uk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Lk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=[];var Ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ee||(Ee={}));const hb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},$k=Ee.INFO,Vk={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Bk=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Vk[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zu{constructor(e){this.name=e,this._logLevel=$k,this._logHandler=Bk,this._userLogHandler=null,yp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}function jk(n){yp.forEach(e=>{e.setLogLevel(n)})}function qk(n,e){for(const t of yp){let r=null;e&&e.level&&(r=hb[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:Ee[s].toLowerCase(),message:a,args:o,type:i.name})}}}const zk=(n,e)=>e.some(t=>n instanceof t);let Ny,Py;function Hk(){return Ny||(Ny=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kk(){return Py||(Py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const db=new WeakMap,Kd=new WeakMap,fb=new WeakMap,rd=new WeakMap,vp=new WeakMap;function Gk(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Yr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&db.set(t,n)}).catch(()=>{}),vp.set(e,n),e}function Wk(n){if(Kd.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Kd.set(n,e)}let Gd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Kd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fb.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Qk(n){Gd=n(Gd)}function Yk(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(id(this),e,...t);return fb.set(r,e.sort?e.sort():[e]),Yr(r)}:Kk().includes(n)?function(...e){return n.apply(id(this),e),Yr(db.get(this))}:function(...e){return Yr(n.apply(id(this),e))}}function Xk(n){return typeof n=="function"?Yk(n):(n instanceof IDBTransaction&&Wk(n),zk(n,Hk())?new Proxy(n,Gd):n)}function Yr(n){if(n instanceof IDBRequest)return Gk(n);if(rd.has(n))return rd.get(n);const e=Xk(n);return e!==n&&(rd.set(n,e),vp.set(e,n)),e}const id=n=>vp.get(n);function Jk(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yr(o.result),c.oldVersion,c.newVersion,Yr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Zk=["get","getKey","getAll","getAllKeys","count"],eC=["put","add","delete","clear"],sd=new Map;function Dy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=eC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zk.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return sd.set(e,s),s}Qk(n=>({...n,get:(e,t,r)=>Dy(e,t)||n.get(e,t,r),has:(e,t)=>!!Dy(e,t)||n.has(e,t)}));/**
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
 */class tC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function nC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wd="@firebase/app",Oy="0.9.12";/**
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
 */const Qi=new Zu("@firebase/app"),rC="@firebase/app-compat",iC="@firebase/analytics-compat",sC="@firebase/analytics",oC="@firebase/app-check-compat",aC="@firebase/app-check",cC="@firebase/auth",lC="@firebase/auth-compat",uC="@firebase/database",hC="@firebase/database-compat",dC="@firebase/functions",fC="@firebase/functions-compat",pC="@firebase/installations",mC="@firebase/installations-compat",gC="@firebase/messaging",yC="@firebase/messaging-compat",vC="@firebase/performance",wC="@firebase/performance-compat",_C="@firebase/remote-config",bC="@firebase/remote-config-compat",IC="@firebase/storage",EC="@firebase/storage-compat",TC="@firebase/firestore",xC="@firebase/firestore-compat",SC="firebase",AC="9.22.2";/**
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
 */const Zr="[DEFAULT]",kC={[Wd]:"fire-core",[rC]:"fire-core-compat",[sC]:"fire-analytics",[iC]:"fire-analytics-compat",[aC]:"fire-app-check",[oC]:"fire-app-check-compat",[cC]:"fire-auth",[lC]:"fire-auth-compat",[uC]:"fire-rtdb",[hC]:"fire-rtdb-compat",[dC]:"fire-fn",[fC]:"fire-fn-compat",[pC]:"fire-iid",[mC]:"fire-iid-compat",[gC]:"fire-fcm",[yC]:"fire-fcm-compat",[vC]:"fire-perf",[wC]:"fire-perf-compat",[_C]:"fire-rc",[bC]:"fire-rc-compat",[IC]:"fire-gcs",[EC]:"fire-gcs-compat",[TC]:"fire-fst",[xC]:"fire-fst-compat","fire-js":"fire-js",[SC]:"fire-js-all"};/**
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
 */const ei=new Map,qa=new Map;function Zl(n,e){try{n.container.addComponent(e)}catch(t){Qi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pb(n,e){n.container.addOrOverwriteComponent(e)}function vr(n){const e=n.name;if(qa.has(e))return Qi.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,n);for(const t of ei.values())Zl(t,n);return!0}function mb(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function CC(n,e,t=Zr){mb(n,e).clearInstance(t)}function RC(){qa.clear()}/**
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
 */const NC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pr=new hs("app","Firebase",NC);/**
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
 */let PC=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}};/**
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
 */const Tr=AC;function wp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pr.create("bad-app-name",{appName:String(i)});if(t||(t=ab()),!t)throw pr.create("no-options");const s=ei.get(i);if(s){if(Hd(t,s.options)&&Hd(r,s.config))return s;throw pr.create("duplicate-app",{appName:i})}const o=new Uk(i);for(const c of qa.values())o.addComponent(c);const a=new PC(t,r,o);return ei.set(i,a),a}function DC(n=Zr){const e=ei.get(n);if(!e&&n===Zr&&ab())return wp();if(!e)throw pr.create("no-app",{appName:n});return e}function OC(){return Array.from(ei.values())}async function gb(n){const e=n.name;ei.has(e)&&(ei.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function gn(n,e,t){var r;let i=(r=kC[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qi.warn(a.join(" "));return}vr(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function yb(n,e){if(n!==null&&typeof n!="function")throw pr.create("invalid-log-argument");qk(n,e)}function vb(n){jk(n)}/**
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
 */const LC="firebase-heartbeat-database",MC=1,za="firebase-heartbeat-store";let od=null;function wb(){return od||(od=Jk(LC,MC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(za)}}}).catch(n=>{throw pr.create("idb-open",{originalErrorMessage:n.message})})),od}async function FC(n){try{return await(await wb()).transaction(za).objectStore(za).get(_b(n))}catch(e){if(e instanceof Ot)Qi.warn(e.message);else{const t=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qi.warn(t.message)}}}async function Ly(n,e){try{const r=(await wb()).transaction(za,"readwrite");await r.objectStore(za).put(e,_b(n)),await r.done}catch(t){if(t instanceof Ot)Qi.warn(t.message);else{const r=pr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qi.warn(r.message)}}}function _b(n){return`${n.name}!${n.options.appId}`}/**
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
 */const UC=1024,$C=30*24*60*60*1e3;class VC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=My();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$C}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=My(),{heartbeatsToSend:t,unsentEntries:r}=BC(this._heartbeatsCache.heartbeats),i=Xl(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function My(){return new Date().toISOString().substring(0,10)}function BC(n,e=UC){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fy(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fy(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class jC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ja()?kk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await FC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fy(n){return Xl(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function qC(n){vr(new Pn("platform-logger",e=>new tC(e),"PRIVATE")),vr(new Pn("heartbeat",e=>new VC(e),"PRIVATE")),gn(Wd,Oy,n),gn(Wd,Oy,"esm2017"),gn("fire-js","")}qC("");const zC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ot,SDK_VERSION:Tr,_DEFAULT_ENTRY_NAME:Zr,_addComponent:Zl,_addOrOverwriteComponent:pb,_apps:ei,_clearComponents:RC,_components:qa,_getProvider:mb,_registerComponent:vr,_removeServiceInstance:CC,deleteApp:gb,getApp:DC,getApps:OC,initializeApp:wp,onLog:yb,registerVersion:gn,setLogLevel:vb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,t){this._delegate=e,this.firebase=t,Zl(e,new Pn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),gb(this._delegate)))}_getService(e,t=Zr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Zr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Zl(this._delegate,e)}_addOrOverwriteComponent(e){pb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const KC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Uy=new hs("app-compat","Firebase",KC);/**
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
 */function GC(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:gn,setLogLevel:vb,onLog:yb,apps:null,SDK_VERSION:Tr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:zC}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Zr,!Cy(e,l))throw Uy.create("no-app",{appName:l});return e[l]}i.App=n;function s(l,u={}){const h=wp(l,u);if(Cy(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(vr(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw Uy.create("invalid-app-argument",{appName:u});return p[h]()};l.serviceProps!==void 0&&Jl(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,u).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
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
 */function bb(){const n=GC(HC);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:bb,extendNamespace:e,createSubscribe:ub,ErrorFactory:hs,deepExtend:Jl});function e(t){Jl(n,t)}return n}const WC=bb();/**
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
 */const $y=new Zu("@firebase/app-compat"),QC="@firebase/app-compat",YC="0.2.12";/**
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
 */function XC(n){gn(QC,YC,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Sk()&&self.firebase!==void 0){$y.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&$y.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const jt=WC;XC();var JC="firebase",ZC="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.registerVersion(JC,ZC,"app-compat");function _p(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Ko={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Is={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Ib(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tR=eR,nR=Ib,Eb=new hs("auth","Firebase",Ib());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new Zu("@firebase/auth");function rR(n,...e){eu.logLevel<=Ee.WARN&&eu.warn(`Auth (${Tr}): ${n}`,...e)}function Cl(n,...e){eu.logLevel<=Ee.ERROR&&eu.error(`Auth (${Tr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,...e){throw bp(n,...e)}function kt(n,...e){return bp(n,...e)}function Tb(n,e,t){const r=Object.assign(Object.assign({},nR()),{[e]:t});return new hs("auth","Firebase",r).create(e,{appName:n.name})}function ko(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rt(n,"argument-error"),Tb(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bp(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Eb.create(n,...e)}function L(n,e,...t){if(!n)throw bp(e,...t)}function Hn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Cl(e),new Error(e)}function Dn(n,e){n||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ip(){return Vy()==="http:"||Vy()==="https:"}function Vy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ip()||cb()||"connection"in navigator)?navigator.onLine:!0}function sR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dn(t>e,"Short delay should be less than long delay!"),this.isMobile=xk()||gp()}get(){return iR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e){Dn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new Ec(3e4,6e4);function ut(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ft(n,e,t,r,i={}){return Sb(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),xb.fetch()(Ab(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Sb(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},oR),e);try{const i=new cR(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw aa(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw aa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw aa(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Tb(n,u,l);Rt(n,u)}}catch(i){if(i instanceof Ot)throw i;Rt(n,"network-request-failed",{message:String(i)})}}async function xr(n,e,t,r,i={}){const s=await ft(n,e,t,r,i);return"mfaPendingCredential"in s&&Rt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ab(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ep(n.config,i):`${n.config.apiScheme}://${i}`}class cR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),aR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function aa(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=kt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(n,e){return ft(n,"POST","/v1/accounts:delete",e)}async function uR(n,e){return ft(n,"POST","/v1/accounts:update",e)}async function hR(n,e){return ft(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dR(n,e=!1){const t=ie(n),r=await t.getIdToken(e),i=eh(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wa(ad(i.auth_time)),issuedAtTime:wa(ad(i.iat)),expirationTime:wa(ad(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ad(n){return Number(n)*1e3}function eh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Cl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ob(t);return i?JSON.parse(i):(Cl("Failed to decode base64 JWT payload"),null)}catch(i){return Cl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fR(n){const e=eh(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ot&&pR(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function pR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ka(n){var e;const t=n.auth,r=await n.getIdToken(),i=await wr(n,hR(t,{idToken:r}));L(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vR(s.providerUserInfo):[],a=yR(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new kb(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function gR(n){const e=ie(n);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yR(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vR(n){return n.map(e=>{var{providerId:t}=e,r=_p(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(n,e){const t=await Sb(n,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ab(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await wR(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ga;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ga,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qi{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=_p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dR(this,e)}reload(){return gR(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wr(this,lR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=t.createdAt)!==null&&l!==void 0?l:void 0,k=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:T,isAnonymous:M,providerData:O,stsTokenManager:$}=t;L(C&&$,e,"internal-error");const K=Ga.fromJSON(this.name,$);L(typeof C=="string",e,"internal-error"),Dr(h,e.name),Dr(d,e.name),L(typeof T=="boolean",e,"internal-error"),L(typeof M=="boolean",e,"internal-error"),Dr(p,e.name),Dr(y,e.name),Dr(v,e.name),Dr(w,e.name),Dr(I,e.name),Dr(k,e.name);const B=new qi({uid:C,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:M,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:K,createdAt:I,lastLoginAt:k});return O&&Array.isArray(O)&&(B.providerData=O.map(ae=>Object.assign({},ae))),w&&(B._redirectEventId=w),B}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ga;i.updateFromServerResponse(t);const s=new qi({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ka(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Map;function ln(n){Dn(n instanceof Function,"Expected a class definition");let e=By.get(n);return e?(Dn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,By.set(n,e),e)}/**
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
 */class Cb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cb.type="NONE";const Zs=Cb;/**
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
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class $s{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zi(this.userKey,i.apiKey,s),this.fullPersistenceKey=zi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new $s(ln(Zs),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||ln(Zs);const o=zi(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=qi._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new $s(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new $s(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Db(e))return"Blackberry";if(Ob(e))return"Webos";if(Tp(e))return"Safari";if((e.includes("chrome/")||Nb(e))&&!e.includes("edge/"))return"Chrome";if(Tc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rb(n=Ge()){return/firefox\//i.test(n)}function Tp(n=Ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nb(n=Ge()){return/crios\//i.test(n)}function Pb(n=Ge()){return/iemobile/i.test(n)}function Tc(n=Ge()){return/android/i.test(n)}function Db(n=Ge()){return/blackberry/i.test(n)}function Ob(n=Ge()){return/webos/i.test(n)}function Co(n=Ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _R(n=Ge()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function bR(n=Ge()){var e;return Co(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IR(){return lb()&&document.documentMode===10}function Lb(n=Ge()){return Co(n)||Tc(n)||Ob(n)||Db(n)||/windows phone/i.test(n)||Pb(n)}function ER(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(n,e=[]){let t;switch(n){case"Browser":t=jy(Ge());break;case"Worker":t=`${jy(Ge())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(n){return(await ft(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Fb(n,e){return ft(n,"GET","/v2/recaptchaConfig",ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n){return n!==void 0&&n.getResponse!==void 0}function zy(n){return n!==void 0&&n.enterprise!==void 0}class Ub{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function xp(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",xR().appendChild(r)})}function $b(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const SR="https://www.google.com/recaptcha/enterprise.js?render=",AR="recaptcha-enterprise",kR="NO_RECAPTCHA";class Vb{constructor(e){this.type=AR,this.auth=rt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ub(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;zy(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(kR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&zy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xp(SR+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ti(n,e,t,r=!1){const i=new Vb(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class CR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hy(this),this.idTokenSubscription=new Hy(this),this.beforeStateQueue=new CR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ka(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ie(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}async initializeRecaptchaConfig(){const e=await Fb(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ub(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Vb(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ln(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rt(n){return ie(n)}class Hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=ub(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function NR(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ln);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PR(n,e,t){const r=rt(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Bb(e),{host:o,port:a}=DR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||OR()}function Bb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function DR(n){const e=Bb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ky(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ky(o)}}}function Ky(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function OR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,t){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(n,e){return ft(n,"POST","/v1/accounts:resetPassword",ut(n,e))}async function qb(n,e){return ft(n,"POST","/v1/accounts:update",e)}async function LR(n,e){return ft(n,"POST","/v1/accounts:update",ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(n,e){return xr(n,"POST","/v1/accounts:signInWithPassword",ut(n,e))}async function th(n,e){return ft(n,"POST","/v1/accounts:sendOobCode",ut(n,e))}async function MR(n,e){return th(n,e)}async function ld(n,e){return th(n,e)}async function ud(n,e){return th(n,e)}async function FR(n,e){return th(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(n,e){return xr(n,"POST","/v1/accounts:signInWithEmailLink",ut(n,e))}async function $R(n,e){return xr(n,"POST","/v1/accounts:signInWithEmailLink",ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Ro{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Wa(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Wa(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await ti(e,r,"signInWithPassword");return cd(e,i)}else return cd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ti(e,r,"signInWithPassword");return cd(e,s)}else return Promise.reject(i)});case"emailLink":return UR(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qb(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $R(e,{idToken:t,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(n,e){return xr(n,"POST","/v1/accounts:signInWithIdp",ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="http://localhost";class tr extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=_p(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mr(e,t)}buildRequest(){const e={requestUri:VR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ao(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(n,e){return ft(n,"POST","/v1/accounts:sendVerificationCode",ut(n,e))}async function jR(n,e){return xr(n,"POST","/v1/accounts:signInWithPhoneNumber",ut(n,e))}async function qR(n,e){const t=await xr(n,"POST","/v1/accounts:signInWithPhoneNumber",ut(n,e));if(t.temporaryProof)throw aa(n,"account-exists-with-different-credential",t);return t}const zR={USER_NOT_FOUND:"user-not-found"};async function HR(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return xr(n,"POST","/v1/accounts:signInWithPhoneNumber",ut(n,t),zR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Ro{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Hi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Hi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return jR(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qR(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return HR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Hi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GR(n){const e=Rs(oa(n)).link,t=e?Rs(oa(e)).deep_link_id:null,r=Rs(oa(n)).deep_link_id;return(r?Rs(oa(r)).link:null)||r||t||e||n}class nh{constructor(e){var t,r,i,s,o,a;const c=Rs(oa(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=KR((i=c.mode)!==null&&i!==void 0?i:null);L(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=GR(e);try{return new nh(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.providerId=hi.PROVIDER_ID}static credential(e,t){return Wa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=nh.parseLink(t);return L(r,"argument-error"),Wa._fromEmailAndCode(e,r.code,r.tenantId)}}hi.PROVIDER_ID="password";hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class No extends Sr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vs extends No{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return L("providerId"in t&&"signInMethod"in t,"argument-error"),tr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return L(e.idToken||e.accessToken,"argument-error"),tr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Vs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Vs(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends No{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends No{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="http://localhost";class eo extends Ro{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return mr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new eo(r,s)}static _create(e,t){return new eo(e,t)}buildRequest(){return{requestUri:WR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="saml.";class tu extends Sr{constructor(e){L(e.startsWith(QR),"argument-error"),super(e)}static credentialFromResult(e){return tu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return tu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=eo.fromJSON(e);return L(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return eo._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends No{constructor(){super("twitter.com")}static credential(e,t){return tr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qn.credential(t,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(n,e){return xr(n,"POST","/v1/accounts:signUp",ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await qi._fromIdTokenResponse(e,r,i),o=Gy(r);return new vn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Gy(r);return new vn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Gy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(n){var e;const t=rt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Rl(t,{returnSecureToken:!0}),i=await vn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends Ot{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new nu(e,t,r,i)}}function zb(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nu._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function XR(n,e){const t=ie(n);await rh(!0,t,e);const{providerUserInfo:r}=await uR(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Hb(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Sp(n,e,t=!1){const r=await wr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}async function rh(n,e,t){await Ka(e);const r=Hb(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";L(r.has(t)===n,e.auth,i)}/**
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
 */async function Kb(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await wr(n,zb(r,i,e,n),t);L(s.idToken,r,"internal-error");const o=eh(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(n.uid===a,r,"user-mismatch"),vn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(n,e,t=!1){const r="signIn",i=await zb(n,r,e),s=await vn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function ih(n,e){return Gb(rt(n),e)}async function Wb(n,e){const t=ie(n);return await rh(!1,t,e.providerId),Sp(t,e)}async function Qb(n,e){return Kb(ie(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(n,e){return xr(n,"POST","/v1/accounts:signInWithCustomToken",ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(n,e){const t=rt(n),r=await JR(t,{token:e,returnSecureToken:!0}),i=await vn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ap._fromServerResponse(e,t):"totpInfo"in t?kp._fromServerResponse(e,t):Rt(e,"internal-error")}}class Ap extends xc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ap(t)}}class kp extends xc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new kp(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e,t){var r;L(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),L(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(L(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(L(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(n,e,t){var r;const i=rt(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await ti(i,s,"getOobCode",!0);t&&Bs(i,o,t),await ld(i,o)}else t&&Bs(i,s,t),await ld(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ti(i,s,"getOobCode",!0);t&&Bs(i,a,t),await ld(i,a)}else return Promise.reject(o)})}async function tN(n,e,t){await jb(ie(n),{oobCode:e,newPassword:t})}async function nN(n,e){await LR(ie(n),{oobCode:e})}async function Yb(n,e){const t=ie(n),r=await jb(t,{oobCode:e}),i=r.requestType;switch(L(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":L(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":L(r.mfaInfo,t,"internal-error");default:L(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=xc._fromServerResponse(rt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function rN(n,e){const{data:t}=await Yb(ie(n),e);return t.email}async function iN(n,e,t){var r;const i=rt(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ti(i,s,"signUpPassword");o=Rl(i,l)}else o=Rl(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ti(i,s,"signUpPassword");return Rl(i,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await vn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function sN(n,e,t){return ih(ie(n),hi.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(n,e,t){var r;const i=rt(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){L(c.handleCodeInApp,i,"argument-error"),c&&Bs(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await ti(i,s,"getOobCode",!0);o(a,t),await ud(i,a)}else o(s,t),await ud(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await ti(i,s,"getOobCode",!0);o(c,t),await ud(i,c)}else return Promise.reject(a)})}function aN(n,e){const t=nh.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function cN(n,e,t){const r=ie(n),i=hi.credentialWithLink(e,t||Ha());return L(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ih(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(n,e){return ft(n,"POST","/v1/accounts:createAuthUri",ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(n,e){const t=Ip()?Ha():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await lN(ie(n),r);return i||[]}async function hN(n,e){const t=ie(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Bs(t.auth,i,e);const{email:s}=await MR(t.auth,i);s!==n.email&&await n.reload()}async function dN(n,e,t){const r=ie(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Bs(r.auth,s,t);const{email:o}=await FR(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(n,e){return ft(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ie(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await wr(r,fN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function mN(n,e){return Xb(ie(n),e,null)}function gN(n,e){return Xb(ie(n),null,e)}async function Xb(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await wr(n,qb(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function yN(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=eh(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new js(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new vN(s,i);case"github.com":return new wN(s,i);case"google.com":return new _N(s,i);case"twitter.com":return new bN(s,i,n.screenName||null);case"custom":case"anonymous":return new js(s,null);default:return new js(s,r,i)}}class js{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Jb extends js{constructor(e,t,r,i){super(e,t,r),this.username=i}}class vN extends js{constructor(e,t){super(e,"facebook.com",t)}}class wN extends Jb{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class _N extends js{constructor(e,t){super(e,"google.com",t)}}class bN extends Jb{constructor(e,t,r){super(e,"twitter.com",t,r)}}function IN(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:yN(t)}class Li{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new Li("enroll",e,t)}static _fromMfaPendingCredential(e){return new Li("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Li._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Li._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=rt(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>xc._fromServerResponse(r,a));L(i.mfaPendingCredential,r,"internal-error");const o=Li._fromMfaPendingCredential(i.mfaPendingCredential);return new Cp(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await vn._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return L(t.user,r,"internal-error"),vn._forOperation(t.user,t.operationType,l);default:Rt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function EN(n,e){var t;const r=ie(n),i=e;return L(e.customData.operationType,r,"argument-error"),L((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Cp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(n,e){return ft(n,"POST","/v2/accounts/mfaEnrollment:start",ut(n,e))}function xN(n,e){return ft(n,"POST","/v2/accounts/mfaEnrollment:finalize",ut(n,e))}function SN(n,e){return ft(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ut(n,e))}class Rp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>xc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Rp(e)}async getSession(){return Li._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await wr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await wr(this.user,SN(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const hd=new WeakMap;function AN(n){const e=ie(n);return hd.has(e)||hd.set(e,Rp._fromUser(e)),hd.get(e)}const ru="__sak";/**
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
 */class Zb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ru,"1"),this.storage.removeItem(ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(){const n=Ge();return Tp(n)||Co(n)}const CN=1e3,RN=10;class e0 extends Zb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kN()&&ER(),this.fallbackToPolling=Lb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RN):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e0.type="LOCAL";const Np=e0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends Zb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}t0.type="SESSION";const Yi=t0;/**
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
 */function NN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await NN(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class PN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Sc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function DN(n){ct().location.href=n}/**
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
 */function Pp(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function ON(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function MN(){return Pp()?self:null}/**
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
 */const n0="firebaseLocalStorageDb",FN=1,iu="firebaseLocalStorage",r0="fbase_key";class Ac{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oh(n,e){return n.transaction([iu],e?"readwrite":"readonly").objectStore(iu)}function UN(){const n=indexedDB.deleteDatabase(n0);return new Ac(n).toPromise()}function Qd(){const n=indexedDB.open(n0,FN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(iu,{keyPath:r0})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(iu)?e(r):(r.close(),await UN(),e(await Qd()))})})}async function Wy(n,e,t){const r=oh(n,!0).put({[r0]:e,value:t});return new Ac(r).toPromise()}async function $N(n,e){const t=oh(n,!1).get(e),r=await new Ac(t).toPromise();return r===void 0?null:r.value}function Qy(n,e){const t=oh(n,!0).delete(e);return new Ac(t).toPromise()}const VN=800,BN=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>BN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sh._getInstance(MN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ON(),!this.activeServiceWorker)return;this.sender=new PN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await Wy(e,ru,"1"),await Qy(e,ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wy(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$N(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=oh(i,!1).getAll();return new Ac(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const Qa=i0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(n,e){return ft(n,"POST","/v2/accounts/mfaSignIn:start",ut(n,e))}function qN(n,e){return ft(n,"POST","/v2/accounts/mfaSignIn:finalize",ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=500,HN=6e4,il=1e12;class KN{constructor(e){this.auth=e,this.counter=il,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new GN(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||il;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||il;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||il;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class GN{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;L(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=WN(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},HN)},zN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function WN(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=$b("rcb"),QN=new Ec(3e4,6e4),YN="https://www.google.com/recaptcha/api.js?";class XN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ct().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return L(JN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&qy(ct().grecaptcha)?Promise.resolve(ct().grecaptcha):new Promise((r,i)=>{const s=ct().setTimeout(()=>{i(kt(e,"network-request-failed"))},QN.get());ct()[dd]=()=>{ct().clearTimeout(s),delete ct()[dd];const a=ct().grecaptcha;if(!a||!qy(a)){i(kt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${YN}?${Ao({onload:dd,render:"explicit",hl:t})}`;xp(o).catch(()=>{clearTimeout(s),i(kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ct().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function JN(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class ZN{async load(e){return new KN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="recaptcha",eP={theme:"light",type:"image"};let tP=class{constructor(e,t=Object.assign({},eP),r){this.parameters=t,this.type=s0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=rt(r),this.isInvisible=this.parameters.size==="invisible",L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;L(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ZN:new XN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){L(!this.parameters.sitekey,this.auth,"argument-error"),L(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ct()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){L(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){L(Ip()&&!Pp(),this.auth,"internal-error"),await nP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await TR(this.auth);L(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return L(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function nP(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Hi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function rP(n,e,t){const r=rt(n),i=await ah(r,e,ie(t));return new Dp(i,s=>ih(r,s))}async function iP(n,e,t){const r=ie(n);await rh(!1,r,"phone");const i=await ah(r.auth,e,ie(t));return new Dp(i,s=>Wb(r,s))}async function sP(n,e,t){const r=ie(n),i=await ah(r.auth,e,ie(t));return new Dp(i,s=>Qb(r,s))}async function ah(n,e,t){var r;const i=await t.verify();try{L(typeof i=="string",n,"argument-error"),L(t.type===s0,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return L(o.type==="enroll",n,"internal-error"),(await TN(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{L(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return L(a,n,"missing-multi-factor-info"),(await jN(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await BR(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function oP(n,e){await Sp(ie(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi=class Nl{constructor(e){this.providerId=Nl.PROVIDER_ID,this.auth=rt(e)}verifyPhoneNumber(e,t){return ah(this.auth,e,ie(t))}static credential(e,t){return Hi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Nl.credentialFromTaggedObject(t)}static credentialFromError(e){return Nl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Hi._fromTokenResponse(t,r):null}};Xi.PROVIDER_ID="phone";Xi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ds(n,e){return e?ln(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Op extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aP(n){return Gb(n.auth,new Op(n),n.bypassAuthState)}function cP(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Kb(t,new Op(n),n.bypassAuthState)}async function lP(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Sp(t,new Op(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aP;case"linkViaPopup":case"linkViaRedirect":return lP;case"reauthViaPopup":case"reauthViaRedirect":return cP;default:Rt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Ec(2e3,1e4);async function hP(n,e,t){const r=rt(n);ko(n,e,Sr);const i=ds(r,t);return new lr(r,"signInViaPopup",e,i).executeNotNull()}async function dP(n,e,t){const r=ie(n);ko(r.auth,e,Sr);const i=ds(r.auth,t);return new lr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function fP(n,e,t){const r=ie(n);ko(r.auth,e,Sr);const i=ds(r.auth,t);return new lr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class lr extends o0{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uP.get())};e()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="pendingRedirect",_a=new Map;class mP extends o0{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await gP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gP(n,e){const t=c0(e),r=a0(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Lp(n,e){return a0(n)._set(c0(e),"true")}function yP(){_a.clear()}function Mp(n,e){_a.set(n._key(),e)}function a0(n){return ln(n._redirectPersistence)}function c0(n){return zi(pP,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(n,e,t){return wP(n,e,t)}async function wP(n,e,t){const r=rt(n);ko(n,e,Sr),await r._initializationPromise;const i=ds(r,t);return await Lp(i,r),i._openRedirect(r,e,"signInViaRedirect")}function _P(n,e,t){return bP(n,e,t)}async function bP(n,e,t){const r=ie(n);ko(r.auth,e,Sr),await r.auth._initializationPromise;const i=ds(r.auth,t);await Lp(i,r.auth);const s=await l0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function IP(n,e,t){return EP(n,e,t)}async function EP(n,e,t){const r=ie(n);ko(r.auth,e,Sr),await r.auth._initializationPromise;const i=ds(r.auth,t);await rh(!1,r,e.providerId),await Lp(i,r.auth);const s=await l0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function TP(n,e){return await rt(n)._initializationPromise,ch(n,e,!1)}async function ch(n,e,t=!1){const r=rt(n),i=ds(r,e),o=await new mP(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function l0(n){const e=Sc(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=10*60*1e3;class u0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!h0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(kt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yy(e))}saveEventToCache(e){this.cachedEventUids.add(Yy(e)),this.lastProcessedEventTime=Date.now()}}function Yy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function h0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(n,e={}){return ft(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kP=/^https?/;async function CP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await d0(n);for(const t of e)try{if(RP(t))return}catch{}Rt(n,"unauthorized-domain")}function RP(n){const e=Ha(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!kP.test(t))return!1;if(AP.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NP=new Ec(3e4,6e4);function Xy(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PP(n){return new Promise((e,t)=>{var r,i,s;function o(){Xy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xy(),t(kt(n,"network-request-failed"))},timeout:NP.get()})}if(!((i=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ct().gapi)===null||s===void 0)&&s.load)o();else{const a=$b("iframefcb");return ct()[a]=()=>{gapi.load?o():t(kt(n,"network-request-failed"))},xp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function DP(n){return Pl=Pl||PP(n),Pl}/**
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
 */const OP=new Ec(5e3,15e3),LP="__/auth/iframe",MP="emulator/auth/iframe",FP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $P(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ep(e,MP):`https://${n.config.authDomain}/${LP}`,r={apiKey:e.apiKey,appName:n.name,v:Tr},i=UP.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ao(r).slice(1)}`}async function VP(n){const e=await DP(n),t=ct().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:$P(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(n,"network-request-failed"),a=ct().setTimeout(()=>{s(o)},OP.get());function c(){ct().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const BP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jP=500,qP=600,zP="_blank",HP="http://localhost";class Jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KP(n,e,t,r=jP,i=qP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},BP),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ge().toLowerCase();t&&(a=Nb(l)?zP:t),Rb(l)&&(e=e||HP,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(bR(l)&&a!=="_self")return GP(e||"",a),new Jy(null);const h=window.open(e||"",a,u);L(h,n,"popup-blocked");try{h.focus()}catch{}return new Jy(h)}function GP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const WP="__/auth/handler",QP="emulator/auth/handler",YP=encodeURIComponent("fac");async function Yd(n,e,t,r,i,s){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tr,eventId:i};if(e instanceof Sr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Pk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof No){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${YP}=${encodeURIComponent(c)}`:"";return`${XP(n)}?${Ao(a).slice(1)}${l}`}function XP({config:n}){return n.emulator?Ep(n,QP):`https://${n.authDomain}/${WP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="webStorageSupport";class JP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yi,this._completeRedirectFn=ch,this._overrideRedirectResult=Mp}async _openPopup(e,t,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Yd(e,t,r,Ha(),i);return KP(e,o,Sc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Yd(e,t,r,Ha(),i);return DN(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await VP(e),r=new u0(e);return t.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fd,{type:fd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fd];o!==void 0&&t(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lb()||Tp()||Co()}}const ZP=JP;class eD{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Hn("unexpected MultiFactorSessionType")}}}class Fp extends eD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Fp(e)}_finalizeEnroll(e,t,r){return xN(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return qN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class f0{constructor(){}static assertion(e){return Fp._fromCredential(e)}}f0.FACTOR_ID="phone";var Zy="@firebase/auth",ev="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rD(n){vr(new Pn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mb(n)},l=new RR(r,i,s,c);return NR(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vr(new Pn("auth-internal",e=>{const t=rt(e.getProvider("auth").getImmediate());return(r=>new tD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Zy,ev,nD(n)),gn(Zy,ev,"esm2017")}/**
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
 */const iD=5*60;Ik("authIdTokenMaxAge");rD("Browser");/**
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
 */function Ji(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=2e3;async function oD(n,e,t){var r;const{BuildInfo:i}=Ji();Dn(e.sessionId,"AuthEvent did not contain a session ID");const s=await hD(e.sessionId),o={};return Co()?o.ibi=i.packageName:Tc()?o.apn=i.packageName:Rt(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Yd(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function aD(n){const{BuildInfo:e}=Ji(),t={};Co()?t.iosBundleId=e.packageName:Tc()?t.androidPackageName=e.packageName:Rt(n,"operation-not-supported-in-this-environment"),await d0(n,t)}function cD(n){const{cordova:e}=Ji();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,_R()?"_blank":"_system","location=yes"),t(i)})})}async function lD(n,e,t){const{cordova:r}=Ji();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(kt(n,"redirect-cancelled-by-user"))},sD))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Tc()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function uD(n){var e,t,r,i,s,o,a,c,l,u;const h=Ji();L(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),L(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),L(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function hD(n){const e=dD(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function dD(n){if(Dn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=20;class pD extends u0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function mD(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:vD(),postBody:null,tenantId:n.tenantId,error:kt(n,"no-auth-event")}}function gD(n,e){return Xd()._set(Jd(n),e)}async function tv(n){const e=await Xd()._get(Jd(n));return e&&await Xd()._remove(Jd(n)),e}function yD(n,e){var t,r;const i=_D(e);if(i.includes("/__/auth/callback")){const s=Dl(i),o=s.firebaseError?wD(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?kt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function vD(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<fD;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Xd(){return ln(Np)}function Jd(n){return zi("authEvent",n.config.apiKey,n.name)}function wD(n){try{return JSON.parse(n)}catch{return null}}function _D(n){const e=Dl(n),t=e.link?decodeURIComponent(e.link):void 0,r=Dl(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Dl(i).link||i||r||t||n}function Dl(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Rs(t.join("?"))}/**
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
 */const bD=500;class ID{constructor(){this._redirectPersistence=Yi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ch,this._overrideRedirectResult=Mp}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new pD(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){uD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),yP(),await this._originValidation(e);const o=mD(e,r,i);await gD(e,o);const a=await oD(e,o,t),c=await cD(a);return lD(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aD(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ji(),o=setTimeout(async()=>{await tv(e),t.onEvent(nv())},bD),a=async u=>{clearTimeout(o);const h=await tv(e);let d=null;h&&(u!=null&&u.url)&&(d=yD(h,u.url)),t.onEvent(d||nv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,l=`${s.packageName.toLowerCase()}://`;Ji().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const ED=ID;function nv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:kt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(n,e){rt(n)._logFramework(e)}var xD="@firebase/auth-compat",SD="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=1e3;function ba(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function kD(){return ba()==="http:"||ba()==="https:"}function p0(n=Ge()){return!!((ba()==="file:"||ba()==="ionic:"||ba()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function CD(){return gp()||mp()}function RD(){return lb()&&(document==null?void 0:document.documentMode)===11}function ND(n=Ge()){return/Edge\/\d+/.test(n)}function PD(n=Ge()){return RD()||ND(n)}function m0(){try{const n=self.localStorage,e=Sc();if(n)return n.setItem(e,"1"),n.removeItem(e),PD()?ja():!0}catch{return Up()&&ja()}return!1}function Up(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function pd(){return(kD()||cb()||p0())&&!CD()&&m0()&&!Up()}function g0(){return p0()&&typeof document<"u"}async function DD(){return g0()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},AD);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function OD(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={LOCAL:"local",NONE:"none",SESSION:"session"},Go=L,y0="persistence";function LD(n,e){if(Go(Object.values(an).includes(e),n,"invalid-persistence-type"),gp()){Go(e!==an.SESSION,n,"unsupported-persistence-type");return}if(mp()){Go(e===an.NONE,n,"unsupported-persistence-type");return}if(Up()){Go(e===an.NONE||e===an.LOCAL&&ja(),n,"unsupported-persistence-type");return}Go(e===an.NONE||m0(),n,"unsupported-persistence-type")}async function Zd(n){await n._initializationPromise;const e=v0(),t=zi(y0,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function MD(n,e){const t=v0();if(!t)return[];const r=zi(y0,n,e);switch(t.getItem(r)){case an.NONE:return[Zs];case an.LOCAL:return[Qa,Yi];case an.SESSION:return[Yi];default:return[]}}function v0(){var n;try{return((n=OD())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=L;class Hr{constructor(){this.browserResolver=ln(ZP),this.cordovaResolver=ln(ED),this.underlyingResolver=null,this._redirectPersistence=Yi,this._completeRedirectFn=ch,this._overrideRedirectResult=Mp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return g0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return FD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await DD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(n){return n.unwrap()}function UD(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(n){return _0(n)}function VD(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new BD(n,EN(n,e))}else if(r){const i=_0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function _0(n){const{_tokenResponse:e}=n instanceof Ot?n.customData:n;if(!e)return null;if(!(n instanceof Ot)&&"temporaryProof"in e&&"phoneNumber"in e)return Xi.credentialFromResult(n);const t=e.providerId;if(!t||t===Ko.PASSWORD)return null;let r;switch(t){case Ko.GOOGLE:r=Bn;break;case Ko.FACEBOOK:r=Vn;break;case Ko.GITHUB:r=jn;break;case Ko.TWITTER:r=qn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?eo._create(t,a):tr._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Vs(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Ot?r.credentialFromError(n):r.credentialFromResult(n)}function Kt(n,e){return e.catch(t=>{throw t instanceof Ot&&VD(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:$D(t),additionalUserInfo:IN(t),user:ur.getOrCreate(i)}})}async function ef(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Kt(n,t.confirm(r))}}class BD{constructor(e,t){this.resolver=t,this.auth=UD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Kt(w0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this._delegate=e,this.multiFactor=AN(e)}static getOrCreate(e){return ur.USER_MAP.has(e)||ur.USER_MAP.set(e,new ur(e)),ur.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Kt(this.auth,Wb(this._delegate,e))}async linkWithPhoneNumber(e,t){return ef(this.auth,iP(this._delegate,e,t))}async linkWithPopup(e){return Kt(this.auth,fP(this._delegate,e,Hr))}async linkWithRedirect(e){return await Zd(rt(this.auth)),IP(this._delegate,e,Hr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Kt(this.auth,Qb(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ef(this.auth,sP(this._delegate,e,t))}reauthenticateWithPopup(e){return Kt(this.auth,dP(this._delegate,e,Hr))}async reauthenticateWithRedirect(e){return await Zd(rt(this.auth)),_P(this._delegate,e,Hr)}sendEmailVerification(e){return hN(this._delegate,e)}async unlink(e){return await XR(this._delegate,e),this}updateEmail(e){return mN(this._delegate,e)}updatePassword(e){return gN(this._delegate,e)}updatePhoneNumber(e){return oP(this._delegate,e)}updateProfile(e){return pN(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return dN(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ur.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=L;class tf{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Wo(r,"invalid-api-key",{appName:e.name}),Wo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Hr:void 0;this._delegate=t.initialize({options:{persistence:jD(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(tR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ur.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){PR(this._delegate,e,t)}applyActionCode(e){return nN(this._delegate,e)}checkActionCode(e){return Yb(this._delegate,e)}confirmPasswordReset(e,t){return tN(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Kt(this._delegate,iN(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return uN(this._delegate,e)}isSignInWithEmailLink(e){return aN(this._delegate,e)}async getRedirectResult(){Wo(pd(),this._delegate,"operation-not-supported-in-this-environment");const e=await TP(this._delegate,Hr);return e?Kt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){TD(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=rv(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=rv(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return oN(this._delegate,e,t)}sendPasswordResetEmail(e,t){return eN(this._delegate,e,t||void 0)}async setPersistence(e){LD(this._delegate,e);let t;switch(e){case an.SESSION:t=Yi;break;case an.LOCAL:t=await ln(Qa)._isAvailable()?Qa:Np;break;case an.NONE:t=Zs;break;default:return Rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Kt(this._delegate,YR(this._delegate))}signInWithCredential(e){return Kt(this._delegate,ih(this._delegate,e))}signInWithCustomToken(e){return Kt(this._delegate,ZR(this._delegate,e))}signInWithEmailAndPassword(e,t){return Kt(this._delegate,sN(this._delegate,e,t))}signInWithEmailLink(e,t){return Kt(this._delegate,cN(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ef(this._delegate,rP(this._delegate,e,t))}async signInWithPopup(e){return Wo(pd(),this._delegate,"operation-not-supported-in-this-environment"),Kt(this._delegate,hP(this._delegate,e,Hr))}async signInWithRedirect(e){return Wo(pd(),this._delegate,"operation-not-supported-in-this-environment"),await Zd(this._delegate),vP(this._delegate,e,Hr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return rN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}tf.Persistence=an;function rv(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&ur.getOrCreate(o)),error:e,complete:t}}function jD(n,e){const t=MD(n,e);if(typeof self<"u"&&!t.includes(Qa)&&t.push(Qa),typeof window<"u")for(const r of[Np,Yi])t.includes(r)||t.push(r);return t.includes(Zs)||t.push(Zs),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.providerId="phone",this._delegate=new Xi(w0(jt.auth()))}static credential(e,t){return Xi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}$p.PHONE_SIGN_IN_METHOD=Xi.PHONE_SIGN_IN_METHOD;$p.PROVIDER_ID=Xi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=L;class zD{constructor(e,t,r=jt.app()){var i;qD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new tP(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD="auth-compat";function KD(n){n.INTERNAL.registerComponent(new Pn(HD,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new tf(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Is.EMAIL_SIGNIN,PASSWORD_RESET:Is.PASSWORD_RESET,RECOVER_EMAIL:Is.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Is.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Is.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Is.VERIFY_EMAIL}},EmailAuthProvider:hi,FacebookAuthProvider:Vn,GithubAuthProvider:jn,GoogleAuthProvider:Bn,OAuthProvider:Vs,SAMLAuthProvider:tu,PhoneAuthProvider:$p,PhoneMultiFactorGenerator:f0,RecaptchaVerifier:zD,TwitterAuthProvider:qn,Auth:tf,AuthCredential:Ro,Error:Ot}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(xD,SD)}KD(jt);var GD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Vp=Vp||{},le=GD||self;function lh(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function kc(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function WD(n){return Object.prototype.hasOwnProperty.call(n,md)&&n[md]||(n[md]=++QD)}var md="closure_uid_"+(1e9*Math.random()>>>0),QD=0;function YD(n,e,t){return n.call.apply(n.bind,arguments)}function XD(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Lt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Lt=YD:Lt=XD,Lt.apply(null,arguments)}function sl(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function _t(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function di(){this.s=this.s,this.o=this.o}var JD=0;di.prototype.s=!1;di.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),JD!=0)&&WD(this)};di.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b0=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Bp(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function iv(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(lh(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Mt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var ZD=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{le.addEventListener("test",()=>{},e),le.removeEventListener("test",()=>{},e)}catch{}return n}();function Ya(n){return/^[\s\xa0]*$/.test(n)}function uh(){var n=le.navigator;return n&&(n=n.userAgent)?n:""}function zn(n){return uh().indexOf(n)!=-1}function jp(n){return jp[" "](n),n}jp[" "]=function(){};function eO(n,e){var t=KO;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var tO=zn("Opera"),to=zn("Trident")||zn("MSIE"),I0=zn("Edge"),nf=I0||to,E0=zn("Gecko")&&!(uh().toLowerCase().indexOf("webkit")!=-1&&!zn("Edge"))&&!(zn("Trident")||zn("MSIE"))&&!zn("Edge"),nO=uh().toLowerCase().indexOf("webkit")!=-1&&!zn("Edge");function T0(){var n=le.document;return n?n.documentMode:void 0}var rf;e:{var gd="",yd=function(){var n=uh();if(E0)return/rv:([^\);]+)(\)|;)/.exec(n);if(I0)return/Edge\/([\d\.]+)/.exec(n);if(to)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(nO)return/WebKit\/(\S+)/.exec(n);if(tO)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(yd&&(gd=yd?yd[1]:""),to){var vd=T0();if(vd!=null&&vd>parseFloat(gd)){rf=String(vd);break e}}rf=gd}var sf;if(le.document&&to){var sv=T0();sf=sv||parseInt(rf,10)||void 0}else sf=void 0;var rO=sf;function Xa(n,e){if(Mt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(E0){e:{try{jp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:iO[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Xa.$.h.call(this)}}_t(Xa,Mt);var iO={2:"touch",3:"pen",4:"mouse"};Xa.prototype.h=function(){Xa.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Cc="closure_listenable_"+(1e6*Math.random()|0),sO=0;function oO(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++sO,this.fa=this.ia=!1}function hh(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function qp(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function aO(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function x0(n){const e={};for(const t in n)e[t]=n[t];return e}const ov="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S0(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<ov.length;s++)t=ov[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function dh(n){this.src=n,this.g={},this.h=0}dh.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=af(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new oO(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function of(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=b0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(hh(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function af(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var zp="closure_lm_"+(1e6*Math.random()|0),wd={};function A0(n,e,t,r,i){if(r&&r.once)return C0(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)A0(n,e[s],t,r,i);return null}return t=Gp(t),n&&n[Cc]?n.O(e,t,kc(r)?!!r.capture:!!r,i):k0(n,e,t,!1,r,i)}function k0(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=kc(i)?!!i.capture:!!i,a=Kp(n);if(a||(n[zp]=a=new dh(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=cO(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)ZD||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(N0(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function cO(){function n(t){return e.call(n.src,n.listener,t)}const e=lO;return n}function C0(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)C0(n,e[s],t,r,i);return null}return t=Gp(t),n&&n[Cc]?n.P(e,t,kc(r)?!!r.capture:!!r,i):k0(n,e,t,!0,r,i)}function R0(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)R0(n,e[s],t,r,i);else r=kc(r)?!!r.capture:!!r,t=Gp(t),n&&n[Cc]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=af(s,t,r,i),-1<t&&(hh(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Kp(n))&&(e=n.g[e.toString()],n=-1,e&&(n=af(e,t,r,i)),(t=-1<n?e[n]:null)&&Hp(t))}function Hp(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Cc])of(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(N0(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Kp(e))?(of(t,n),t.h==0&&(t.src=null,e[zp]=null)):hh(n)}}}function N0(n){return n in wd?wd[n]:wd[n]="on"+n}function lO(n,e){if(n.fa)n=!0;else{e=new Xa(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Hp(n),n=t.call(r,e)}return n}function Kp(n){return n=n[zp],n instanceof dh?n:null}var _d="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gp(n){return typeof n=="function"?n:(n[_d]||(n[_d]=function(e){return n.handleEvent(e)}),n[_d])}function wt(){di.call(this),this.i=new dh(this),this.S=this,this.J=null}_t(wt,di);wt.prototype[Cc]=!0;wt.prototype.removeEventListener=function(n,e,t,r){R0(this,n,e,t,r)};function Ct(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Mt(e,n);else if(e instanceof Mt)e.target=e.target||n;else{var i=e;e=new Mt(r,n),S0(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=ol(o,r,!0,e)&&i}if(o=e.g=n,i=ol(o,r,!0,e)&&i,i=ol(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=ol(o,r,!1,e)&&i}wt.prototype.N=function(){if(wt.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)hh(t[r]);delete n.g[e],n.h--}}this.J=null};wt.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};wt.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ol(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&of(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Wp=le.JSON.stringify;class uO{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hO(){var n=Qp;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class dO{constructor(){this.h=this.g=null}add(e,t){const r=P0.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var P0=new uO(()=>new fO,n=>n.reset());class fO{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function pO(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function mO(n){le.setTimeout(()=>{throw n},0)}let Ja,Za=!1,Qp=new dO,D0=()=>{const n=le.Promise.resolve(void 0);Ja=()=>{n.then(gO)}};var gO=()=>{for(var n;n=hO();){try{n.h.call(n.g)}catch(t){mO(t)}var e=P0;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Za=!1};function fh(n,e){wt.call(this),this.h=n||1,this.g=e||le,this.j=Lt(this.qb,this),this.l=Date.now()}_t(fh,wt);z=fh.prototype;z.ga=!1;z.T=null;z.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ct(this,"tick"),this.ga&&(Yp(this),this.start()))}};z.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yp(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}z.N=function(){fh.$.N.call(this),Yp(this),delete this.g};function Xp(n,e,t){if(typeof n=="function")t&&(n=Lt(n,t));else if(n&&typeof n.handleEvent=="function")n=Lt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(n,e||0)}function O0(n){n.g=Xp(()=>{n.g=null,n.i&&(n.i=!1,O0(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class yO extends di{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:O0(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(n){di.call(this),this.h=n,this.g={}}_t(ec,di);var av=[];function L0(n,e,t,r){Array.isArray(t)||(t&&(av[0]=t.toString()),t=av);for(var i=0;i<t.length;i++){var s=A0(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function M0(n){qp(n.g,function(e,t){this.g.hasOwnProperty(t)&&Hp(e)},n),n.g={}}ec.prototype.N=function(){ec.$.N.call(this),M0(this)};ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ph(){this.g=!0}ph.prototype.Ea=function(){this.g=!1};function vO(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function wO(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Ns(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+bO(n,t)+(r?" "+r:"")})}function _O(n,e){n.info(function(){return"TIMEOUT: "+e})}ph.prototype.info=function(){};function bO(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wp(t)}catch{return e}}var fs={},cv=null;function mh(){return cv=cv||new wt}fs.Ta="serverreachability";function F0(n){Mt.call(this,fs.Ta,n)}_t(F0,Mt);function tc(n){const e=mh();Ct(e,new F0(e))}fs.STAT_EVENT="statevent";function U0(n,e){Mt.call(this,fs.STAT_EVENT,n),this.stat=e}_t(U0,Mt);function Bt(n){const e=mh();Ct(e,new U0(e,n))}fs.Ua="timingevent";function $0(n,e){Mt.call(this,fs.Ua,n),this.size=e}_t($0,Mt);function Rc(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){n()},e)}var gh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},V0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Jp(){}Jp.prototype.h=null;function lv(n){return n.h||(n.h=n.i())}function B0(){}var Nc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Zp(){Mt.call(this,"d")}_t(Zp,Mt);function em(){Mt.call(this,"c")}_t(em,Mt);var cf;function yh(){}_t(yh,Jp);yh.prototype.g=function(){return new XMLHttpRequest};yh.prototype.i=function(){return{}};cf=new yh;function Pc(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new ec(this),this.P=IO,n=nf?125:void 0,this.V=new fh(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new j0}function j0(){this.i=null,this.g="",this.h=!1}var IO=45e3,lf={},su={};z=Pc.prototype;z.setTimeout=function(n){this.P=n};function uf(n,e,t){n.L=1,n.v=wh(_r(e)),n.s=t,n.S=!0,q0(n,null)}function q0(n,e){n.G=Date.now(),Dc(n),n.A=_r(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),X0(t.i,"t",r),n.C=0,t=n.l.J,n.h=new j0,n.g=vI(n.l,t?e:null,!n.s),0<n.O&&(n.M=new yO(Lt(n.Pa,n,n.g),n.O)),L0(n.U,n.g,"readystatechange",n.nb),e=n.I?x0(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),tc(),vO(n.j,n.u,n.A,n.m,n.W,n.s)}z.nb=function(n){n=n.target;const e=this.M;e&&Kn(n)==3?e.l():this.Pa(n)};z.Pa=function(n){try{if(n==this.g)e:{const u=Kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||nf||this.g&&(this.h.h||this.g.ja()||fv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?tc(3):tc(2)),vh(this);var t=this.g.da();this.ca=t;t:if(z0(this)){var r=fv(this.g);n="";var i=r.length,s=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mi(this),Ia(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,wO(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ya(a)){var l=a;break t}}l=null}if(t=l)Ns(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hf(this,t);else{this.i=!1,this.o=3,Bt(12),Mi(this),Ia(this);break e}}this.S?(H0(this,u,o),nf&&this.i&&u==3&&(L0(this.U,this.V,"tick",this.mb),this.V.start())):(Ns(this.j,this.m,o,null),hf(this,o)),u==4&&Mi(this),this.i&&!this.J&&(u==4?pI(this.l,this):(this.i=!1,Dc(this)))}else qO(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Bt(12)):(this.o=0,Bt(13)),Mi(this),Ia(this)}}}catch{}finally{}};function z0(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function H0(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=EO(n,t),i==su){e==4&&(n.o=4,Bt(14),r=!1),Ns(n.j,n.m,null,"[Incomplete Response]");break}else if(i==lf){n.o=4,Bt(15),Ns(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Ns(n.j,n.m,i,null),hf(n,i);z0(n)&&i!=su&&i!=lf&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Bt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),om(e),e.M=!0,Bt(11))):(Ns(n.j,n.m,t,"[Invalid Chunked Response]"),Mi(n),Ia(n))}z.mb=function(){if(this.g){var n=Kn(this.g),e=this.g.ja();this.C<e.length&&(vh(this),H0(this,n,e),this.i&&n!=4&&Dc(this))}};function EO(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?su:(t=Number(e.substring(t,r)),isNaN(t)?lf:(r+=1,r+t>e.length?su:(e=e.slice(r,r+t),n.C=r+t,e)))}z.cancel=function(){this.J=!0,Mi(this)};function Dc(n){n.Y=Date.now()+n.P,K0(n,n.P)}function K0(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Rc(Lt(n.lb,n),e)}function vh(n){n.B&&(le.clearTimeout(n.B),n.B=null)}z.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(_O(this.j,this.A),this.L!=2&&(tc(),Bt(17)),Mi(this),this.o=2,Ia(this)):K0(this,this.Y-n)};function Ia(n){n.l.H==0||n.J||pI(n.l,n)}function Mi(n){vh(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Yp(n.V),M0(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function hf(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||df(t.i,n))){if(!n.K&&df(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)cu(t),Ih(t);else break e;sm(t),Bt(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Rc(Lt(t.ib,t),6e3));if(1>=eI(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Fi(t,11)}else if((n.K||t.g==n)&&cu(t),!Ya(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(tm(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ve(r.I,r.F,v))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=yI(r,r.J?r.pa:null,r.Y),o.K){tI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(vh(a),Dc(a)),r.g=o}else dI(r);0<t.j.length&&Eh(t)}else l[0]!="stop"&&l[0]!="close"||Fi(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Fi(t,7):im(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}tc(4)}catch{}}function TO(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(lh(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function xO(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(lh(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function G0(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(lh(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=xO(n),r=TO(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var W0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SO(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ki(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ki){this.h=n.h,ou(this,n.j),this.s=n.s,this.g=n.g,au(this,n.m),this.l=n.l;var e=n.i,t=new nc;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),uv(this,t),this.o=n.o}else n&&(e=String(n).match(W0))?(this.h=!1,ou(this,e[1]||"",!0),this.s=ca(e[2]||""),this.g=ca(e[3]||"",!0),au(this,e[4]),this.l=ca(e[5]||"",!0),uv(this,e[6]||"",!0),this.o=ca(e[7]||"")):(this.h=!1,this.i=new nc(null,this.h))}Ki.prototype.toString=function(){var n=[],e=this.j;e&&n.push(la(e,hv,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(la(e,hv,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(la(t,t.charAt(0)=="/"?CO:kO,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",la(t,NO)),n.join("")};function _r(n){return new Ki(n)}function ou(n,e,t){n.j=t?ca(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function au(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function uv(n,e,t){e instanceof nc?(n.i=e,PO(n.i,n.h)):(t||(e=la(e,RO)),n.i=new nc(e,n.h))}function Ve(n,e,t){n.i.set(e,t)}function wh(n){return Ve(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ca(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function la(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,AO),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function AO(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var hv=/[#\/\?@]/g,kO=/[#\?:]/g,CO=/[#\?]/g,RO=/[#\?@]/g,NO=/#/g;function nc(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function fi(n){n.g||(n.g=new Map,n.h=0,n.i&&SO(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}z=nc.prototype;z.add=function(n,e){fi(this),this.i=null,n=Po(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Q0(n,e){fi(n),e=Po(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Y0(n,e){return fi(n),e=Po(n,e),n.g.has(e)}z.forEach=function(n,e){fi(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};z.ta=function(){fi(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};z.Z=function(n){fi(this);let e=[];if(typeof n=="string")Y0(this,n)&&(e=e.concat(this.g.get(Po(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};z.set=function(n,e){return fi(this),this.i=null,n=Po(this,n),Y0(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};z.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function X0(n,e,t){Q0(n,e),0<t.length&&(n.i=null,n.g.set(Po(n,e),Bp(t)),n.h+=t.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Po(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function PO(n,e){e&&!n.j&&(fi(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Q0(this,r),X0(this,i,t))},n)),n.j=e}var DO=class{constructor(n,e){this.g=n,this.map=e}};function J0(n){this.l=n||OO,le.PerformanceNavigationTiming?(n=le.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OO=10;function Z0(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function eI(n){return n.h?1:n.g?n.g.size:0}function df(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function tm(n,e){n.g?n.g.add(e):n.h=e}function tI(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}J0.prototype.cancel=function(){if(this.i=nI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function nI(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Bp(n.i)}var LO=class{stringify(n){return le.JSON.stringify(n,void 0)}parse(n){return le.JSON.parse(n,void 0)}};function MO(){this.g=new LO}function FO(n,e,t){const r=t||"";try{G0(n,function(i,s){let o=i;kc(i)&&(o=Wp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function UO(n,e){const t=new ph;if(le.Image){const r=new Image;r.onload=sl(al,t,r,"TestLoadImage: loaded",!0,e),r.onerror=sl(al,t,r,"TestLoadImage: error",!1,e),r.onabort=sl(al,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=sl(al,t,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function al(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Oc(n){this.l=n.fc||null,this.j=n.ob||!1}_t(Oc,Jp);Oc.prototype.g=function(){return new _h(this.l,this.j)};Oc.prototype.i=function(n){return function(){return n}}({});function _h(n,e){wt.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=nm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(_h,wt);var nm=0;z=_h.prototype;z.open=function(n,e){if(this.readyState!=nm)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,rc(this)};z.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lc(this)),this.readyState=nm};z.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,rc(this)),this.g&&(this.readyState=3,rc(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rI(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function rI(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}z.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Lc(this):rc(this),this.readyState==3&&rI(this)}};z.Za=function(n){this.g&&(this.response=this.responseText=n,Lc(this))};z.Ya=function(n){this.g&&(this.response=n,Lc(this))};z.ka=function(){this.g&&Lc(this)};function Lc(n){n.readyState=4,n.l=null,n.j=null,n.A=null,rc(n)}z.setRequestHeader=function(n,e){this.v.append(n,e)};z.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function rc(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(_h.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var $O=le.JSON.parse;function Xe(n){wt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=iI,this.L=this.M=!1}_t(Xe,wt);var iI="",VO=/^https?$/i,BO=["POST","PUT"];z=Xe.prototype;z.Oa=function(n){this.M=n};z.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cf.g(),this.C=this.u?lv(this.u):lv(cf),this.g.onreadystatechange=Lt(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){dv(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=le.FormData&&n instanceof le.FormData,!(0<=b0(BO,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{aI(this),0<this.B&&((this.L=jO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.ua,this)):this.A=Xp(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){dv(this,s)}};function jO(n){return to&&typeof n.timeout=="number"&&n.ontimeout!==void 0}z.ua=function(){typeof Vp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))};function dv(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,sI(n),bh(n)}function sI(n){n.F||(n.F=!0,Ct(n,"complete"),Ct(n,"error"))}z.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ct(this,"complete"),Ct(this,"abort"),bh(this))};z.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bh(this,!0)),Xe.$.N.call(this)};z.La=function(){this.s||(this.G||this.v||this.l?oI(this):this.kb())};z.kb=function(){oI(this)};function oI(n){if(n.h&&typeof Vp<"u"&&(!n.C[1]||Kn(n)!=4||n.da()!=2)){if(n.v&&Kn(n)==4)Xp(n.La,0,n);else if(Ct(n,"readystatechange"),Kn(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(W0)[1]||null;!i&&le.self&&le.self.location&&(i=le.self.location.protocol.slice(0,-1)),r=!VO.test(i?i.toLowerCase():"")}t=r}if(t)Ct(n,"complete"),Ct(n,"success");else{n.m=6;try{var s=2<Kn(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",sI(n)}}finally{bh(n)}}}}function bh(n,e){if(n.g){aI(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Ct(n,"ready");try{t.onreadystatechange=r}catch{}}}function aI(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(le.clearTimeout(n.A),n.A=null)}z.isActive=function(){return!!this.g};function Kn(n){return n.g?n.g.readyState:0}z.da=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};z.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),$O(e)}};function fv(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case iI:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function qO(n){const e={};n=(n.g&&2<=Kn(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Ya(n[r]))continue;var t=pO(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}aO(e,function(r){return r.join(", ")})}z.Ia=function(){return this.m};z.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cI(n){let e="";return qp(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function rm(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=cI(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Ve(n,e,t))}function Qo(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function lI(n){this.Ga=0,this.j=[],this.l=new ph,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qo("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qo("baseRetryDelayMs",5e3,n),this.hb=Qo("retryDelaySeedMs",1e4,n),this.eb=Qo("forwardChannelMaxRetries",2,n),this.xa=Qo("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new J0(n&&n.concurrentRequestLimit),this.Ja=new MO,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}z=lI.prototype;z.ra=8;z.H=1;function im(n){if(uI(n),n.H==3){var e=n.W++,t=_r(n.I);if(Ve(t,"SID",n.K),Ve(t,"RID",e),Ve(t,"TYPE","terminate"),Mc(n,t),e=new Pc(n,n.l,e),e.L=2,e.v=wh(_r(t)),t=!1,le.navigator&&le.navigator.sendBeacon)try{t=le.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&le.Image&&(new Image().src=e.v,t=!0),t||(e.g=vI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Dc(e)}gI(n)}function Ih(n){n.g&&(om(n),n.g.cancel(),n.g=null)}function uI(n){Ih(n),n.u&&(le.clearTimeout(n.u),n.u=null),cu(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&le.clearTimeout(n.m),n.m=null)}function Eh(n){if(!Z0(n.i)&&!n.m){n.m=!0;var e=n.Na;Ja||D0(),Za||(Ja(),Za=!0),Qp.add(e,n),n.C=0}}function zO(n,e){return eI(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Rc(Lt(n.Na,n,e),mI(n,n.C)),n.C++,!0)}z.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Pc(this,this.l,n);let s=this.s;if(this.U&&(s?(s=x0(s),S0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=hI(this,i,e),t=_r(this.I),Ve(t,"RID",n),Ve(t,"CVER",22),this.F&&Ve(t,"X-HTTP-Session-Id",this.F),Mc(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(cI(s)))+"&"+e:this.o&&rm(t,this.o,s)),tm(this.i,i),this.bb&&Ve(t,"TYPE","init"),this.P?(Ve(t,"$req",e),Ve(t,"SID","null"),i.aa=!0,uf(i,t,null)):uf(i,t,e),this.H=2}}else this.H==3&&(n?pv(this,n):this.j.length==0||Z0(this.i)||pv(this))};function pv(n,e){var t;e?t=e.m:t=n.W++;const r=_r(n.I);Ve(r,"SID",n.K),Ve(r,"RID",t),Ve(r,"AID",n.V),Mc(n,r),n.o&&n.s&&rm(r,n.o,n.s),t=new Pc(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=hI(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),tm(n.i,t),uf(t,r,e)}function Mc(n,e){n.na&&qp(n.na,function(t,r){Ve(e,r,t)}),n.h&&G0({},function(t,r){Ve(e,r,t)})}function hI(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Lt(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{FO(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function dI(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Ja||D0(),Za||(Ja(),Za=!0),Qp.add(e,n),n.A=0}}function sm(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Rc(Lt(n.Ma,n),mI(n,n.A)),n.A++,!0)}z.Ma=function(){if(this.u=null,fI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Rc(Lt(this.jb,this),n)}};z.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Bt(10),Ih(this),fI(this))};function om(n){n.B!=null&&(le.clearTimeout(n.B),n.B=null)}function fI(n){n.g=new Pc(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=_r(n.wa);Ve(e,"RID","rpc"),Ve(e,"SID",n.K),Ve(e,"AID",n.V),Ve(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Ve(e,"TO",n.qa),Ve(e,"TYPE","xmlhttp"),Mc(n,e),n.o&&n.s&&rm(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=wh(_r(e)),t.s=null,t.S=!0,q0(t,n)}z.ib=function(){this.v!=null&&(this.v=null,Ih(this),sm(this),Bt(19))};function cu(n){n.v!=null&&(le.clearTimeout(n.v),n.v=null)}function pI(n,e){var t=null;if(n.g==e){cu(n),om(n),n.g=null;var r=2}else if(df(n.i,e))t=e.F,tI(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=mh(),Ct(r,new $0(r,t)),Eh(n)}else dI(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&zO(n,e)||r==2&&sm(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Fi(n,5);break;case 4:Fi(n,10);break;case 3:Fi(n,6);break;default:Fi(n,2)}}}function mI(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Fi(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Lt(n.pb,n);t||(t=new Ki("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||ou(t,"https"),wh(t)),UO(t.toString(),r)}else Bt(2);n.H=0,n.h&&n.h.za(e),gI(n),uI(n)}z.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Bt(2)):(this.l.info("Failed to ping google.com"),Bt(1))};function gI(n){if(n.H=0,n.ma=[],n.h){const e=nI(n.i);(e.length!=0||n.j.length!=0)&&(iv(n.ma,e),iv(n.ma,n.j),n.i.i.length=0,Bp(n.j),n.j.length=0),n.h.ya()}}function yI(n,e,t){var r=t instanceof Ki?_r(t):new Ki(t);if(r.g!="")e&&(r.g=e+"."+r.g),au(r,r.m);else{var i=le.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ki(null);r&&ou(s,r),e&&(s.g=e),i&&au(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Ve(r,t,e),Ve(r,"VER",n.ra),Mc(n,r),r}function vI(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Xe(new Oc({ob:!0})):new Xe(n.va),e.Oa(n.J),e}z.isActive=function(){return!!this.h&&this.h.isActive(this)};function wI(){}z=wI.prototype;z.Ba=function(){};z.Aa=function(){};z.za=function(){};z.ya=function(){};z.isActive=function(){return!0};z.Va=function(){};function lu(){if(to&&!(10<=Number(rO)))throw Error("Environmental error: no available transport.")}lu.prototype.g=function(n,e){return new un(n,e)};function un(n,e){wt.call(this),this.g=new lI(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Ya(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ya(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Do(this)}_t(un,wt);un.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Bt(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=yI(n,null,n.Y),Eh(n)};un.prototype.close=function(){im(this.g)};un.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Wp(n),n=t);e.j.push(new DO(e.fb++,n)),e.H==3&&Eh(e)};un.prototype.N=function(){this.g.h=null,delete this.j,im(this.g),delete this.g,un.$.N.call(this)};function _I(n){Zp.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}_t(_I,Zp);function bI(){em.call(this),this.status=1}_t(bI,em);function Do(n){this.g=n}_t(Do,wI);Do.prototype.Ba=function(){Ct(this.g,"a")};Do.prototype.Aa=function(n){Ct(this.g,new _I(n))};Do.prototype.za=function(n){Ct(this.g,new bI)};Do.prototype.ya=function(){Ct(this.g,"b")};function HO(){this.blockSize=-1}function On(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}_t(On,HO);On.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bd(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}On.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)bd(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){bd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){bd(this,r),i=0;break}}this.h=i,this.i+=e};On.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function Pe(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var KO={};function am(n){return-128<=n&&128>n?eO(n,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([n|0],0>n?-1:0)}function Gn(n){if(isNaN(n)||!isFinite(n))return qs;if(0>n)return xt(Gn(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=ff;return new Pe(e,0)}function II(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return xt(II(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Gn(Math.pow(e,8)),r=qs,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Gn(Math.pow(e,s)),r=r.R(s).add(Gn(o))):(r=r.R(t),r=r.add(Gn(o)))}return r}var ff=4294967296,qs=am(0),pf=am(1),mv=am(16777216);z=Pe.prototype;z.ea=function(){if(fn(this))return-xt(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:ff+r)*e,e*=ff}return n};z.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(hr(this))return"0";if(fn(this))return"-"+xt(this).toString(n);for(var e=Gn(Math.pow(n,6)),t=this,r="";;){var i=hu(t,e).g;t=uu(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,hr(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};z.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function hr(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function fn(n){return n.h==-1}z.X=function(n){return n=uu(this,n),fn(n)?-1:hr(n)?0:1};function xt(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new Pe(t,~n.h).add(pf)}z.abs=function(){return fn(this)?xt(this):this};z.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new Pe(t,t[t.length-1]&-2147483648?-1:0)};function uu(n,e){return n.add(xt(e))}z.R=function(n){if(hr(this)||hr(n))return qs;if(fn(this))return fn(n)?xt(this).R(xt(n)):xt(xt(this).R(n));if(fn(n))return xt(this.R(xt(n)));if(0>this.X(mv)&&0>n.X(mv))return Gn(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,cl(t,2*r+2*i),t[2*r+2*i+1]+=s*c,cl(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,cl(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,cl(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new Pe(t,0)};function cl(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Yo(n,e){this.g=n,this.h=e}function hu(n,e){if(hr(e))throw Error("division by zero");if(hr(n))return new Yo(qs,qs);if(fn(n))return e=hu(xt(n),e),new Yo(xt(e.g),xt(e.h));if(fn(e))return e=hu(n,xt(e)),new Yo(xt(e.g),e.h);if(30<n.g.length){if(fn(n)||fn(e))throw Error("slowDivide_ only works with positive integers.");for(var t=pf,r=e;0>=r.X(n);)t=gv(t),r=gv(r);var i=Es(t,1),s=Es(r,1);for(r=Es(r,2),t=Es(t,2);!hr(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Es(r,1),t=Es(t,1)}return e=uu(n,i.R(e)),new Yo(i,e)}for(i=qs;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Gn(t),o=s.R(e);fn(o)||0<o.X(n);)t-=r,s=Gn(t),o=s.R(e);hr(s)&&(s=pf),i=i.add(s),n=uu(n,o)}return new Yo(i,n)}z.gb=function(n){return hu(this,n).h};z.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new Pe(t,this.h&n.h)};z.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new Pe(t,this.h|n.h)};z.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new Pe(t,this.h^n.h)};function gv(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Pe(t,n.h)}function Es(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new Pe(i,n.h)}lu.prototype.createWebChannel=lu.prototype.g;un.prototype.send=un.prototype.u;un.prototype.open=un.prototype.m;un.prototype.close=un.prototype.close;gh.NO_ERROR=0;gh.TIMEOUT=8;gh.HTTP_ERROR=6;V0.COMPLETE="complete";B0.EventType=Nc;Nc.OPEN="a";Nc.CLOSE="b";Nc.ERROR="c";Nc.MESSAGE="d";wt.prototype.listen=wt.prototype.O;Xe.prototype.listenOnce=Xe.prototype.P;Xe.prototype.getLastError=Xe.prototype.Sa;Xe.prototype.getLastErrorCode=Xe.prototype.Ia;Xe.prototype.getStatus=Xe.prototype.da;Xe.prototype.getResponseJson=Xe.prototype.Wa;Xe.prototype.getResponseText=Xe.prototype.ja;Xe.prototype.send=Xe.prototype.ha;Xe.prototype.setWithCredentials=Xe.prototype.Oa;On.prototype.digest=On.prototype.l;On.prototype.reset=On.prototype.reset;On.prototype.update=On.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=Gn;Pe.fromString=II;var GO=function(){return new lu},WO=function(){return mh()},Id=gh,QO=V0,YO=fs,yv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},XO=Oc,ll=B0,JO=Xe,ZO=On,zs=Pe;const vv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Oo="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Zu("@firebase/firestore");function mf(){return ni.logLevel}function eL(n){ni.setLogLevel(n)}function P(n,...e){if(ni.logLevel<=Ee.DEBUG){const t=e.map(cm);ni.debug(`Firestore (${Oo}): ${n}`,...t)}}function Ze(n,...e){if(ni.logLevel<=Ee.ERROR){const t=e.map(cm);ni.error(`Firestore (${Oo}): ${n}`,...t)}}function Ln(n,...e){if(ni.logLevel<=Ee.WARN){const t=e.map(cm);ni.warn(`Firestore (${Oo}): ${n}`,...t)}}function cm(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+n;throw Ze(e),new Error(e)}function J(n,e){n||W()}function tL(n,e){n||W()}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(mt.UNAUTHENTICATED))}shutdown(){}}class rL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iL{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new EI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new mt(e)}}class sL{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class oL{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new sL(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.T=t.token,new aL(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function no(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function xI(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new R(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new R(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new R(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new He(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ic{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ic.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ic?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Te extends ic{construct(e,t,r){return new Te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Te(t)}static emptyPath(){return new Te([])}}const uL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends ic{construct(e,t,r){return new et(e,t,r)}static isValidIdentifier(e){return uL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Te.fromString(e))}static fromName(e){return new j(Te.fromString(e).popFirst(5))}static empty(){return new j(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Te(e.slice()))}}/**
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
 */class SI{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function gf(n){return n.fields.find(e=>e.kind===2)}function Ei(n){return n.fields.filter(e=>e.kind!==2)}SI.UNKNOWN_ID=-1;class hL{constructor(e,t){this.fieldPath=e,this.kind=t}}class du{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new du(0,hn.min())}}function AI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new He(t+1,0):new He(t,r));return new hn(i,j.empty(),e)}function kI(n){return new hn(n.readTime,n.key,-1)}class hn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hn(X.min(),j.empty(),-1)}static max(){return new hn(X.max(),j.empty(),-1)}}function lm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(n){if(n.code!==E.FAILED_PRECONDITION||n.message!==CI)throw n;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new b((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new yt,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Ea(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=um(r.target.error);this.v.reject(new Ea(e,i))}}static open(e,t,r,i){try{return new Th(t,e.transaction(i,r))}catch(s){throw new Ea(t,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new fL(t)}}class An{constructor(e,t,r){this.name=e,this.version=t,this.V=r,An.S(Ge())===12.2&&Ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Si(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ja())return!1;if(An.C())return!0;const e=Ge(),t=An.S(e),r=0<t&&t<10,i=An.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ea(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Th.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),b.reject(l))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Si(this.L.delete())}}class Ea extends R{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function mi(n){return n.name==="IndexedDbTransactionError"}class fL{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(P("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Si(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Si(this.store.add(e))}get(e){return Si(this.store.get(e)).next(t=>(t===void 0&&(t=null),P("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Si(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Si(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new b((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new b((r,i)=>{t.onerror=s=>{const o=um(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new dL(a),l=t(a.primaryKey,a.value,c);if(l instanceof b){const u=l.catch(h=>(c.done(),b.reject(h)));r.push(u)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>b.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Si(n){return new b((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=um(r.target.error);t(i)}})}let wv=!1;function um(n){const e=An.S(Ge());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return wv||(wv=!0,setTimeout(()=>{throw r},0)),r}}return n}class pL{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){mi(t)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await pi(t)}await this.et(6e4)})}}class mL{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=kI(s);lm(o,r)>0&&(r=o)}),new hn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Wt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Wt.ct=-1;function Fc(n){return n==null}function sc(n){return n===0&&1/n==-1/0}function NI(n){return typeof n=="number"&&Number.isInteger(n)&&!sc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_v(e)),e=gL(n.get(t),e);return _v(e)}function gL(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function _v(n){return n+""}function Wn(n){const e=n.length;if(J(e>=2),e===2)return J(n.charAt(0)===""&&n.charAt(1)===""),Te.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&W(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:W()}s=o+2}return new Te(r)}/**
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
 */const bv=["userId","batchId"];/**
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
 */function Ol(n,e){return[n,qt(e)]}function PI(n,e,t){return[n,qt(e),t]}const yL={},vL=["prefixPath","collectionGroup","readTime","documentId"],wL=["prefixPath","collectionGroup","documentId"],_L=["collectionGroup","readTime","prefixPath","documentId"],bL=["canonicalId","targetId"],IL=["targetId","path"],EL=["path","targetId"],TL=["collectionId","parent"],xL=["indexId","uid"],SL=["uid","sequenceNumber"],AL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],kL=["indexId","uid","orderedDocumentKey"],CL=["userId","collectionPath","documentId"],RL=["userId","collectionPath","largestBatchId"],NL=["userId","collectionGroup","largestBatchId"],DI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],PL=[...DI,"documentOverlays"],OI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],LI=OI,DL=[...LI,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends RI{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function bt(n,e){const t=q(n);return An.M(t.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ps(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function MI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||Tt.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Tt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(n,e,t,r,i){return this}insert(n,e,t){return new Tt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ev(this.data.getIterator())}getIteratorFrom(e){return new Ev(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class Ev{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ts(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Qt([])}unionWith(e){let t=new je(et.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class FI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new FI("Invalid base64 string: "+i):i}}(e);return new dt(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const LL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ri(n){if(J(!!n),typeof n=="string"){let e=0;const t=LL.exec(n);if(J(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(n.seconds),nanos:Qe(n.nanos)}}function Qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ii(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function hm(n){const e=n.mapValue.fields.__previous_value__;return xh(e)?hm(e):e}function oc(n){const e=ri(n.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e,t,r,i,s,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class si{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new si("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof si&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ll={nullValue:"NULL_VALUE"};function Zi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xh(n)?4:UI(n)?9007199254740991:10:W()}function nr(n,e){if(n===e)return!0;const t=Zi(n);if(t!==Zi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return oc(n).isEqual(oc(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ri(r.timestampValue),o=ri(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return ii(r.bytesValue).isEqual(ii(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Qe(r.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qe(r.integerValue)===Qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Qe(r.doubleValue),o=Qe(i.doubleValue);return s===o?sc(s)===sc(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return no(n.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Iv(s)!==Iv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!nr(s[a],o[a])))return!1;return!0}(n,e);default:return W()}}function ac(n,e){return(n.values||[]).find(t=>nr(t,e))!==void 0}function oi(n,e){if(n===e)return 0;const t=Zi(n),r=Zi(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Qe(i.integerValue||i.doubleValue),a=Qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Tv(n.timestampValue,e.timestampValue);case 4:return Tv(oc(n),oc(e));case 5:return ue(n.stringValue,e.stringValue);case 6:return function(i,s){const o=ii(i),a=ii(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ue(Qe(i.latitude),Qe(s.latitude));return o!==0?o:ue(Qe(i.longitude),Qe(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=oi(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Kr.mapValue&&s===Kr.mapValue)return 0;if(i===Kr.mapValue)return 1;if(s===Kr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=oi(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(n.mapValue,e.mapValue);default:throw W()}}function Tv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=ri(n),r=ri(e),i=ue(t.seconds,r.seconds);return i!==0?i:ue(t.nanos,r.nanos)}function ro(n){return vf(n)}function vf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=ri(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ii(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,j.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=vf(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${vf(r.fields[a])}`;return s+"}"}(n.mapValue):W();var e,t}function es(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wf(n){return!!n&&"integerValue"in n}function cc(n){return!!n&&"arrayValue"in n}function xv(n){return!!n&&"nullValue"in n}function Sv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ml(n){return!!n&&"mapValue"in n}function Ta(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ps(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ta(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ta(n.arrayValue.values[t]);return e}return Object.assign({},n)}function UI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function FL(n){return"nullValue"in n?Ll:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?es(si.empty(),j.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:W()}function UL(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?es(si.empty(),j.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Kr:W()}function Av(n,e){const t=oi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function kv(n,e){const t=oi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ml(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ta(t)}setAll(e){let t=et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Ta(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ml(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ps(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(Ta(this.value))}}function $I(n){const e=[];return ps(n.fields,(t,r)=>{const i=new et([t]);if(Ml(r)){const s=$I(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Be(e,0,X.min(),X.min(),X.min(),St.empty(),0)}static newFoundDocument(e,t,r,i){return new Be(e,1,t,X.min(),r,i,0)}static newNoDocument(e,t){return new Be(e,2,t,X.min(),X.min(),St.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,X.min(),X.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ai{constructor(e,t){this.position=e,this.inclusive=t}}function Cv(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),t.key):r=oi(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hs{constructor(e,t="asc"){this.field=e,this.dir=t}}function $L(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class VI{}class ye extends VI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new VL(e,t,r):t==="array-contains"?new qL(e,r):t==="in"?new KI(e,r):t==="not-in"?new zL(e,r):t==="array-contains-any"?new HL(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new BL(e,r):new jL(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(oi(t,this.value)):t!==null&&Zi(this.value)===Zi(t)&&this.matchesComparison(oi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ne extends VI{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ne(e,t)}matches(e){return io(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function io(n){return n.op==="and"}function _f(n){return n.op==="or"}function dm(n){return BI(n)&&io(n)}function BI(n){for(const e of n.filters)if(e instanceof Ne)return!1;return!0}function bf(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+ro(n.value);if(dm(n))return n.filters.map(e=>bf(e)).join(",");{const e=n.filters.map(t=>bf(t)).join(",");return`${n.op}(${e})`}}function jI(n,e){return n instanceof ye?function(t,r){return r instanceof ye&&t.op===r.op&&t.field.isEqual(r.field)&&nr(t.value,r.value)}(n,e):n instanceof Ne?function(t,r){return r instanceof Ne&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&jI(s,r.filters[o]),!0):!1}(n,e):void W()}function qI(n,e){const t=n.filters.concat(e);return Ne.create(t,n.op)}function zI(n){return n instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${ro(e.value)}`}(n):n instanceof Ne?function(e){return e.op.toString()+" {"+e.getFilters().map(zI).join(" ,")+"}"}(n):"Filter"}class VL extends ye{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class BL extends ye{constructor(e,t){super(e,"in",t),this.keys=HI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jL extends ye{constructor(e,t){super(e,"not-in",t),this.keys=HI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function HI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class qL extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cc(t)&&ac(t.arrayValue,this.value)}}class KI extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ac(this.value.arrayValue,t)}}class zL extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ac(this.value.arrayValue,t)}}class HL extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ac(this.value.arrayValue,r))}}/**
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
 */class KL{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function If(n,e=null,t=[],r=[],i=null,s=null,o=null){return new KL(n,e,t,r,i,s,o)}function ts(n){const e=q(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>bf(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ro(r)).join(",")),e.dt=t}return e.dt}function Uc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$L(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rv(n.startAt,e.startAt)&&Rv(n.endAt,e.endAt)}function fu(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function pu(n,e){return n.filters.filter(t=>t instanceof ye&&t.field.isEqual(e))}function Nv(n,e,t){let r=Ll,i=!0;for(const s of pu(n,e)){let o=Ll,a=!0;switch(s.op){case"<":case"<=":o=FL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ll}Av({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Av({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Pv(n,e,t){let r=Kr,i=!0;for(const s of pu(n,e)){let o=Kr,a=!0;switch(s.op){case">=":case">":o=UL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Kr}kv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];kv({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function GI(n,e,t,r,i,s,o,a){return new Ar(n,e,t,r,i,s,o,a)}function Lo(n){return new Ar(n)}function Dv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fm(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Sh(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function pm(n){return n.collectionGroup!==null}function Gi(n){const e=q(n);if(e.wt===null){e.wt=[];const t=Sh(e),r=fm(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new Hs(t)),e.wt.push(new Hs(et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Hs(et.keyField(),s))}}}return e.wt}function en(n){const e=q(n);if(!e._t)if(e.limitType==="F")e._t=If(e.path,e.collectionGroup,Gi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Gi(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Hs(s.field,o))}const r=e.endAt?new ai(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ai(e.startAt.position,e.startAt.inclusive):null;e._t=If(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function Ef(n,e){e.getFirstInequalityField(),Sh(n);const t=n.filters.concat([e]);return new Ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function mu(n,e,t){return new Ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $c(n,e){return Uc(en(n),en(e))&&n.limitType===e.limitType}function WI(n){return`${ts(en(n))}|lt:${n.limitType}`}function Tf(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>zI(r)).join(", ")}]`),Fc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ro(r)).join(",")),`Target(${t})`}(en(n))}; limitType=${n.limitType})`}function Vc(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):j.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of Gi(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Cv(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Gi(t),r)||t.endAt&&!function(i,s,o){const a=Cv(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Gi(t),r))}(n,e)}function QI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function YI(n){return(e,t)=>{let r=!1;for(const i of Gi(n)){const s=GL(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GL(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?oi(a,c):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return MI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=new Fe(j.comparator);function Yt(){return WL}const XI=new Fe(j.comparator);function ua(...n){let e=XI;for(const t of n)e=e.insert(t.key,t);return e}function JI(n){let e=XI;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Qn(){return xa()}function ZI(){return xa()}function xa(){return new gi(n=>n.toString(),(n,e)=>n.isEqual(e))}const QL=new Fe(j.comparator),YL=new je(j.comparator);function de(...n){let e=YL;for(const t of n)e=e.add(t);return e}const XL=new je(ue);function mm(){return XL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sc(e)?"-0":e}}function tE(n){return{integerValue:""+n}}function nE(n,e){return NI(e)?tE(e):eE(n,e)}/**
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
 */class Ah{constructor(){this._=void 0}}function JL(n,e,t){return n instanceof so?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&xh(i)&&(i=hm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof ns?iE(n,e):n instanceof rs?sE(n,e):function(r,i){const s=rE(r,i),o=Ov(s)+Ov(r.gt);return wf(s)&&wf(r.gt)?tE(o):eE(r.serializer,o)}(n,e)}function ZL(n,e,t){return n instanceof ns?iE(n,e):n instanceof rs?sE(n,e):t}function rE(n,e){return n instanceof oo?wf(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class so extends Ah{}class ns extends Ah{constructor(e){super(),this.elements=e}}function iE(n,e){const t=oE(e);for(const r of n.elements)t.some(i=>nr(i,r))||t.push(r);return{arrayValue:{values:t}}}class rs extends Ah{constructor(e){super(),this.elements=e}}function sE(n,e){let t=oE(e);for(const r of n.elements)t=t.filter(i=>!nr(i,r));return{arrayValue:{values:t}}}class oo extends Ah{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Ov(n){return Qe(n.integerValue||n.doubleValue)}function oE(n){return cc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t){this.field=e,this.transform=t}}function eM(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof ns&&r instanceof ns||t instanceof rs&&r instanceof rs?no(t.elements,r.elements,nr):t instanceof oo&&r instanceof oo?nr(t.gt,r.gt):t instanceof so&&r instanceof so}(n.transform,e.transform)}class tM{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class kh{}function aE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Fo(n.key,ze.none()):new Mo(n.key,n.data,ze.none());{const t=n.data,r=St.empty();let i=new je(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new kr(n.key,r,new Qt(i.toArray()),ze.none())}}function nM(n,e,t){n instanceof Mo?function(r,i,s){const o=r.value.clone(),a=Mv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof kr?function(r,i,s){if(!Fl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Mv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(cE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Sa(n,e,t,r){return n instanceof Mo?function(i,s,o,a){if(!Fl(i.precondition,s))return o;const c=i.value.clone(),l=Fv(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof kr?function(i,s,o,a){if(!Fl(i.precondition,s))return o;const c=Fv(i.fieldTransforms,a,s),l=s.data;return l.setAll(cE(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,r):function(i,s,o){return Fl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function rM(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=rE(r.transform,i||null);s!=null&&(t===null&&(t=St.empty()),t.set(r.field,s))}return t||null}function Lv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&no(t,r,(i,s)=>eM(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mo extends kh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kr extends kh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Mv(n,e,t){const r=new Map;J(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZL(o,a,t[i]))}return r}function Fv(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,JL(s,o,e))}return r}class Fo extends kh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gm extends kh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nM(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sa(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sa(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ZI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=aE(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(t,r)=>Lv(t,r))&&no(this.baseMutations,e.baseMutations,(t,r)=>Lv(t,r))}}class vm{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length);let i=QL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vm(e,t,r,i)}}/**
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
 */class wm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iM{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,Ie;function lE(n){switch(n){default:return W();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function uE(n){if(n===void 0)return Ze("GRPC error has no .code"),E.UNKNOWN;switch(n){case at.OK:return E.OK;case at.CANCELLED:return E.CANCELLED;case at.UNKNOWN:return E.UNKNOWN;case at.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case at.INTERNAL:return E.INTERNAL;case at.UNAVAILABLE:return E.UNAVAILABLE;case at.UNAUTHENTICATED:return E.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case at.NOT_FOUND:return E.NOT_FOUND;case at.ALREADY_EXISTS:return E.ALREADY_EXISTS;case at.PERMISSION_DENIED:return E.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case at.ABORTED:return E.ABORTED;case at.OUT_OF_RANGE:return E.OUT_OF_RANGE;case at.UNIMPLEMENTED:return E.UNIMPLEMENTED;case at.DATA_LOSS:return E.DATA_LOSS;default:return W()}}(Ie=at||(at={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _m{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return hl}static getOrCreateInstance(){return hl===null&&(hl=new _m),hl}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let hl=null;/**
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
 */function hE(){return new TextEncoder}/**
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
 */const sM=new zs([4294967295,4294967295],0);function Uv(n){const e=hE().encode(n),t=new ZO;return t.update(e),new Uint8Array(t.digest())}function $v(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zs([t,r],0),new zs([i,s],0)]}class bm{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ha(`Invalid padding: ${t}`);if(r<0)throw new ha(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ha(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ha(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=zs.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(zs.fromNumber(r)));return i.compare(sM)===1&&(i=new zs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Uv(e),[r,i]=$v(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bm(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Uv(e),[r,i]=$v(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,qc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new jc(X.min(),i,new Fe(ue),Yt(),de())}}class qc{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new qc(r,t,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class dE{constructor(e,t){this.targetId=e,this.Vt=t}}class fE{constructor(e,t,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Vv{constructor(){this.St=0,this.Dt=jv(),this.Ct=dt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=de(),t=de(),r=de();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W()}}),new qc(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=jv()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class oM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Yt(),this.zt=Bv(),this.Wt=new Fe(ue)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(fu(o))if(i===0){const a=new j(o.path);this.Yt(r,a,Be.newNoDocument(a,X.min()))}else J(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(t=_m.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(l,u,h){var d,p,y,v,w,I;const k={localCacheCount:u,existenceFilterCount:h.count},C=h.unchangedNames;return C&&(k.bloomFilter={applied:l===0,hashCount:(d=C==null?void 0:C.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(p=C==null?void 0:C.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(I=(w=C==null?void 0:C.bits)===null||w===void 0?void 0:w.padding)!==null&&I!==void 0?I:0}),k}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=ii(s).toUint8Array()}catch(u){if(u instanceof FI)return Ln("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new bm(c,o,a)}catch(u){return Ln(u instanceof ha?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:i!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&fu(a.target)){const c=new j(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Be.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=de();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new jc(e,t,this.Wt,this.jt,r);return this.jt=Yt(),this.zt=Bv(),this.Wt=new Fe(ue),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Vv,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new je(ue),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||P("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Vv),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Bv(){return new Fe(j.comparator)}function jv(){return new Fe(j.comparator)}const aM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lM=(()=>({and:"AND",or:"OR"}))();class uM{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xf(n,e){return n.useProto3Json||Fc(e)?e:{value:e}}function ao(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hM(n,e){return ao(n,e.toTimestamp())}function nt(n){return J(!!n),X.fromTimestamp(function(e){const t=ri(e);return new He(t.seconds,t.nanos)}(n))}function Im(n,e){return function(t){return new Te(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function mE(n){const e=Te.fromString(n);return J(TE(e)),e}function lc(n,e){return Im(n.databaseId,e.path)}function Xn(n,e){const t=mE(e);if(t.get(1)!==n.databaseId.projectId)throw new R(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new R(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(yE(t))}function Sf(n,e){return Im(n.databaseId,e)}function gE(n){const e=mE(n);return e.length===4?Te.emptyPath():yE(e)}function uc(n){return new Te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yE(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qv(n,e,t){return{name:lc(n,e),fields:t.value.mapValue.fields}}function vE(n,e,t){const r=Xn(n,e.name),i=nt(e.updateTime),s=e.createTime?nt(e.createTime):X.min(),o=new St({mapValue:{fields:e.fields}}),a=Be.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function dM(n,e){return"found"in e?function(t,r){J(!!r.found),r.found.name,r.found.updateTime;const i=Xn(t,r.found.name),s=nt(r.found.updateTime),o=r.found.createTime?nt(r.found.createTime):X.min(),a=new St({mapValue:{fields:r.found.fields}});return Be.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){J(!!r.missing),J(!!r.readTime);const i=Xn(t,r.missing),s=nt(r.readTime);return Be.newNoDocument(i,s)}(n,e):W()}function fM(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(J(l===void 0||typeof l=="string"),dt.fromBase64String(l||"")):(J(l===void 0||l instanceof Uint8Array),dt.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:uE(c.code);return new R(l,c.message||"")}(o);t=new fE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xn(n,r.document.name),s=nt(r.document.updateTime),o=r.document.createTime?nt(r.document.createTime):X.min(),a=new St({mapValue:{fields:r.document.fields}}),c=Be.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];t=new Ul(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xn(n,r.document),s=r.readTime?nt(r.readTime):X.min(),o=Be.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Ul([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xn(n,r.document),s=r.removedTargetIds||[];t=new Ul([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new iM(i,s),a=r.targetId;t=new dE(a,o)}}return t}function hc(n,e){let t;if(e instanceof Mo)t={update:qv(n,e.key,e.value)};else if(e instanceof Fo)t={delete:lc(n,e.key)};else if(e instanceof kr)t={update:qv(n,e.key,e.data),updateMask:wM(e.fieldMask)};else{if(!(e instanceof gm))return W();t={verify:lc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof so)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ns)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof oo)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:hM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(n,e.precondition)),t}function Af(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ze.updateTime(nt(i.updateTime)):i.exists!==void 0?ze.exists(i.exists):ze.none()}(e.currentDocument):ze.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)J(o.setToServerValue==="REQUEST_TIME"),a=new so;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new ns(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new rs(l)}else"increment"in o?a=new oo(s,o.increment):W();const c=et.fromServerFormat(o.fieldPath);return new Bc(c,a)}(n,i)):[];if(e.update){e.update.name;const i=Xn(n,e.update.name),s=new St({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Qt(c.map(l=>et.fromServerFormat(l)))}(e.updateMask);return new kr(i,s,o,t,r)}return new Mo(i,s,t,r)}if(e.delete){const i=Xn(n,e.delete);return new Fo(i,t)}if(e.verify){const i=Xn(n,e.verify);return new gm(i,t)}return W()}function pM(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?nt(r.updateTime):nt(i);return s.isEqual(X.min())&&(s=nt(i)),new tM(s,r.transformResults||[])}(t,e))):[]}function wE(n,e){return{documents:[Sf(n,e.path)]}}function _E(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Sf(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Sf(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return EE(Ne.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:As(u.field),direction:gM(u.dir)}}(l))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=xf(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function bE(n){let e=gE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){J(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(u){const h=IE(u);return h instanceof Ne&&dm(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Hs(ks(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Fc(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ai(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ai(d,h)}(t.endAt)),GI(e,i,o,s,a,"F",c,l)}function mM(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function IE(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ks(e.unaryFilter.field);return ye.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=ks(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ks(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ks(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return ye.create(ks(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ne.create(e.compositeFilter.filters.map(t=>IE(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function gM(n){return aM[n]}function yM(n){return cM[n]}function vM(n){return lM[n]}function As(n){return{fieldPath:n.canonicalString()}}function ks(n){return et.fromServerFormat(n.fieldPath)}function EE(n){return n instanceof ye?function(e){if(e.op==="=="){if(Sv(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NAN"}};if(xv(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sv(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NAN"}};if(xv(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(e.field),op:yM(e.op),value:e.value}}}(n):n instanceof Ne?function(e){const t=e.getFilters().map(r=>EE(r));return t.length===1?t[0]:{compositeFilter:{op:vM(e.op),filters:t}}}(n):W()}function wM(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function TE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,r,i,s=X.min(),o=X.min(),a=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.fe=e}}function _M(n,e){let t;if(e.document)t=vE(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=j.fromSegments(e.noDocument.path),i=ss(e.noDocument.readTime);t=Be.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return W();{const r=j.fromSegments(e.unknownDocument.path),i=ss(e.unknownDocument.version);t=Be.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new He(r[0],r[1]);return X.fromTimestamp(i)}(e.readTime)),t}function zv(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:gu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:lc(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ao(i,s.version.toTimestamp()),createTime:ao(i,s.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:is(e.version)};else{if(!e.isUnknownDocument())return W();r.unknownDocument={path:t.path.toArray(),version:is(e.version)}}return r}function gu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function is(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ss(n){const e=new He(n.seconds,n.nanoseconds);return X.fromTimestamp(e)}function Ai(n,e){const t=(e.baseMutations||[]).map(s=>Af(n.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Af(n.fe,s)),i=He.fromMillis(e.localWriteTimeMs);return new ym(e.batchId,i,t,r)}function da(n){const e=ss(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ss(n.lastLimboFreeSnapshotVersion):X.min();let r;var i;return n.query.documents!==void 0?(J((i=n.query).documents.length===1),r=en(Lo(gE(i.documents[0])))):r=function(s){return en(bE(s))}(n.query),new dr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,dt.fromBase64String(n.resumeToken))}function SE(n,e){const t=is(e.snapshotVersion),r=is(e.lastLimboFreeSnapshotVersion);let i;i=fu(e.target)?wE(n.fe,e.target):_E(n.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ts(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Em(n){const e=bE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mu(e,e.limit,"L"):e}function Ed(n,e){return new wm(e.largestBatchId,Af(n.fe,e.overlayMutation))}function Hv(n,e){const t=e.path.lastSegment();return[n,qt(e.path.popLast()),t]}function Kv(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:is(r.readTime),documentKey:qt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{getBundleMetadata(e,t){return Gv(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:ss(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Gv(e).put({bundleId:(r=t).id,createTime:is(nt(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Wv(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:Em(i.bundledQuery),readTime:ss(i.readTime)};var i})}saveNamedQuery(e,t){return Wv(e).put(function(r){return{name:r.name,readTime:is(nt(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Gv(n){return bt(n,"bundles")}function Wv(n){return bt(n,"namedQueries")}/**
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
 */class Ch{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new Ch(e,r)}getOverlay(e,t){return Xo(e).get(Hv(this.userId,t)).next(r=>r?Ed(this.serializer,r):null)}getOverlays(e,t){const r=Qn();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new wm(t,o);i.push(this.we(e,a))}),b.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(qt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Xo(e).J("collectionPathOverlayIndex",a))}),b.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Qn(),s=qt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Xo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Ed(this.serializer,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Qn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Xo(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Ed(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>s)}we(e,t){return Xo(e).put(function(r,i,s){const[o,a,c]=Hv(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:hc(r.fe,s.mutation)}}(this.serializer,this.userId,t))}}function Xo(n){return bt(n,"documentOverlays")}/**
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
 */class ki{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Qe(e.integerValue));else if("doubleValue"in e){const r=Qe(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),sc(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(ii(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?UI(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):W()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const i of Object.keys(r))this.Te(i,t),this.me(r[i],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const i of r)this.me(i,t)}ve(e,t){this.ye(t,37),j.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}ki.Ve=new ki;function IM(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Qv(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=IM(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class EM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=t.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=t.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const t=this.Fe(e),r=Qv(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Le(e){const t=this.Fe(e),r=Qv(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class TM{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class xM{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Jo{constructor(){this.je=new EM,this.ze=new TM(this.je),this.We=new xM(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Ci{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ci(this.indexId,this.documentKey,this.arrayValue,r)}}function Or(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Yv(n.arrayValue,e.arrayValue),t!==0?t:(t=Yv(n.directionalValue,e.directionalValue),t!==0?t:j.comparator(n.documentKey,e.documentKey)))}function Yv(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class SM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){J(e.collectionGroup===this.collectionId);const t=gf(e);if(t!==void 0&&!this.en(t))return!1;const r=Ei(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function AE(n){var e,t;if(J(n instanceof ye||n instanceof Ne),n instanceof ye){if(n instanceof KI){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ye.create(n.field,"==",s)))||[];return Ne.create(i,"or")}return n}const r=n.filters.map(i=>AE(i));return Ne.create(r,n.op)}function AM(n){if(n.getFilters().length===0)return[];const e=Rf(AE(n));return J(kE(e)),kf(e)||Cf(e)?[e]:e.getFilters()}function kf(n){return n instanceof ye}function Cf(n){return n instanceof Ne&&dm(n)}function kE(n){return kf(n)||Cf(n)||function(e){if(e instanceof Ne&&_f(e)){for(const t of e.getFilters())if(!kf(t)&&!Cf(t))return!1;return!0}return!1}(n)}function Rf(n){if(J(n instanceof ye||n instanceof Ne),n instanceof ye)return n;if(n.filters.length===1)return Rf(n.filters[0]);const e=n.filters.map(r=>Rf(r));let t=Ne.create(e,n.op);return t=yu(t),kE(t)?t:(J(t instanceof Ne),J(io(t)),J(t.filters.length>1),t.filters.reduce((r,i)=>Tm(r,i)))}function Tm(n,e){let t;return J(n instanceof ye||n instanceof Ne),J(e instanceof ye||e instanceof Ne),t=n instanceof ye?e instanceof ye?function(r,i){return Ne.create([r,i],"and")}(n,e):Xv(n,e):e instanceof ye?Xv(e,n):function(r,i){if(J(r.filters.length>0&&i.filters.length>0),io(r)&&io(i))return qI(r,i.getFilters());const s=_f(r)?r:i,o=_f(r)?i:r,a=s.filters.map(c=>Tm(c,o));return Ne.create(a,"or")}(n,e),yu(t)}function Xv(n,e){if(io(e))return qI(e,n.getFilters());{const t=e.filters.map(r=>Tm(n,r));return Ne.create(t,"or")}}function yu(n){if(J(n instanceof ye||n instanceof Ne),n instanceof ye)return n;const e=n.getFilters();if(e.length===1)return yu(e[0]);if(BI(n))return n;const t=e.map(i=>yu(i)),r=[];return t.forEach(i=>{i instanceof ye?r.push(i):i instanceof Ne&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ne.create(r,n.op)}/**
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
 */class kM{constructor(){this.rn=new xm}addToCollectionParentIndex(e,t){return this.rn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(hn.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class xm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new je(Te.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Te.comparator)).toArray()}}/**
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
 */const dl=new Uint8Array(0);class CM{constructor(e,t){this.user=e,this.databaseId=t,this.on=new xm,this.un=new gi(r=>ts(r),(r,i)=>Uc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:qt(i)};return Jv(e).put(s)}return b.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[xI(t),""],!1,!0);return Jv(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Wn(o.parent))}return r})}addFieldIndex(e,t){const r=fl(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ea(e);return s.next(a=>{o.put(Kv(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=fl(e),i=ea(e),s=Zo(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Zo(e);let i=!0;const s=new Map;return b.forEach(this.cn(t),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=de();const a=[];return b.forEach(s,(c,l)=>{var u;P("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(C=>`${C.fieldPath}:${C.kind}`).join(",")}`} to execute ${ts(t)}`);const h=function(C,T){const M=gf(T);if(M===void 0)return null;for(const O of pu(C,M.fieldPath))switch(O.op){case"array-contains-any":return O.value.arrayValue.values||[];case"array-contains":return[O.value]}return null}(l,c),d=function(C,T){const M=new Map;for(const O of Ei(T))for(const $ of pu(C,O.fieldPath))switch($.op){case"==":case"in":M.set(O.fieldPath.canonicalString(),$.value);break;case"not-in":case"!=":return M.set(O.fieldPath.canonicalString(),$.value),Array.from(M.values())}return null}(l,c),p=function(C,T){const M=[];let O=!0;for(const $ of Ei(T)){const K=$.kind===0?Nv(C,$.fieldPath,C.startAt):Pv(C,$.fieldPath,C.startAt);M.push(K.value),O&&(O=K.inclusive)}return new ai(M,O)}(l,c),y=function(C,T){const M=[];let O=!0;for(const $ of Ei(T)){const K=$.kind===0?Pv(C,$.fieldPath,C.endAt):Nv(C,$.fieldPath,C.endAt);M.push(K.value),O&&(O=K.inclusive)}return new ai(M,O)}(l,c),v=this.hn(c,l,p),w=this.hn(c,l,y),I=this.ln(c,l,d),k=this.fn(c.indexId,h,v,p.inclusive,w,y.inclusive,I);return b.forEach(k,C=>r.H(C,t.limit).next(T=>{T.forEach(M=>{const O=j.fromSegments(M.documentKey);o.has(O)||(o=o.add(O),a.push(O))})}))}).next(()=>a)}return b.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=AM(Ne.create(e.filters,"and")).map(r=>If(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/l]):dl,p=this.wn(e,d,r[h%l],i),y=this._n(e,d,s[h%l],o),v=a.map(w=>this.wn(e,d,w,!0));u.push(...this.createRange(p,y,v))}return u}wn(e,t,r,i){const s=new Ci(e,j.empty(),t,r);return i?s:s.Je()}_n(e,t,r,i){const s=new Ci(e,j.empty(),t,r);return i?s.Je():s}an(e,t){const r=new SM(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return b.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new je(et.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}mn(e,t){const r=new Jo;for(const i of Ei(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);ki.Ve._e(s,o)}return r.Qe()}dn(e){const t=new Jo;return ki.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new Jo;return ki.Ve._e(es(this.databaseId,t),r.He(function(i){const s=Ei(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new Jo);let s=0;for(const o of Ei(e)){const a=r[s++];for(const c of i)if(this.yn(t,o.fieldPath)&&cc(a))i=this.pn(i,o,a);else{const l=c.He(o.kind);ki.Ve._e(a,l)}}return this.In(i)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Jo;c.seed(a.Qe()),ki.Ve._e(o,c.He(t.kind)),s.push(c)}return s}yn(e,t){return!!e.filters.find(r=>r instanceof ye&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=fl(e),i=ea(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return b.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new du(u.sequenceNumber,new hn(ss(u.readTime),new j(Wn(u.documentKey)),u.largestBatchId)):du.empty(),d=l.fields.map(([p,y])=>new hL(et.fromServerFormat(p),y));return new SI(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ue(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=fl(e),s=ea(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>b.forEach(a,c=>s.put(Kv(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return b.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),b.forEach(a,c=>this.En(e,i,c).next(l=>{const u=this.An(s,c);return l.isEqual(u)?b.resolve():this.vn(e,s,c,l,u)}))))})}Rn(e,t,r,i){return Zo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,i){return Zo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const i=Zo(e);let s=new je(Or);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new Ci(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,t){let r=new je(Or);const i=this.mn(t,e);if(i==null)return r;const s=gf(t);if(s!=null){const o=e.data.field(s.fieldPath);if(cc(o))for(const a of o.arrayValue.values||[])r=r.add(new Ci(t.indexId,e.key,this.dn(a),i))}else r=r.add(new Ci(t.indexId,e.key,dl,i));return r}vn(e,t,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),p=c.getIterator();let y=Ts(d),v=Ts(p);for(;y||v;){let w=!1,I=!1;if(y&&v){const k=l(y,v);k<0?I=!0:k>0&&(w=!0)}else y!=null?I=!0:w=!0;w?(u(v),v=Ts(p)):I?(h(y),y=Ts(d)):(y=Ts(d),v=Ts(p))}}(i,s,Or,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),b.waitFor(o)}Tn(e){let t=1;return ea(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Or(o,a)).filter((o,a,c)=>!a||Or(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Or(o,e),c=Or(o,t);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,dl,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,dl,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return Or(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Zv)}getMinOffset(e,t){return b.mapArray(this.cn(t),r=>this.an(e,r).next(i=>i||W())).next(Zv)}}function Jv(n){return bt(n,"collectionParents")}function Zo(n){return bt(n,"indexEntries")}function fl(n){return bt(n,"indexConfiguration")}function ea(n){return bt(n,"indexState")}function Zv(n){J(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;lm(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new hn(e.readTime,e.documentKey,t)}/**
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
 */const ew={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Gt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(u,h,d)=>(a++,d.delete()));s.push(c.next(()=>{J(a===1)}));const l=[];for(const u of t.mutations){const h=PI(e,u.key.path,t.batchId);s.push(i.delete(h)),l.push(u.key)}return b.waitFor(s).next(()=>l)}function vu(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw W();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(41943040,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);class Rh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,t,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Rh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Lr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Cs(e),o=Lr(e);return o.add({}).next(a=>{J(typeof a=="number");const c=new ym(a,t,r,i),l=function(d,p,y){const v=y.baseMutations.map(I=>hc(d.fe,I)),w=y.mutations.map(I=>hc(d.fe,I));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:w}}(this.serializer,this.userId,c),u=[];let h=new je((d,p)=>ue(d.canonicalString(),p.canonicalString()));for(const d of i){const p=PI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(s.put(p,yL))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),b.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Lr(e).get(t).next(r=>r?(J(r.userId===this.userId),Ai(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?b.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Lr(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(J(a.batchId>=r),s=Ai(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Lr(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Lr(e).j("userMutationsIndex",t).next(r=>r.map(i=>Ai(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ol(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Cs(e).X({range:i},(o,a,c)=>{const[l,u,h]=o,d=Wn(u);if(l===this.userId&&t.path.isEqual(d))return Lr(e).get(h).next(p=>{if(!p)throw W();J(p.userId===this.userId),s.push(Ai(this.serializer,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(ue);const i=[];return t.forEach(s=>{const o=Ol(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Cs(e).X({range:a},(l,u,h)=>{const[d,p,y]=l,v=Wn(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(c)}),b.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Ol(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new je(ue);return Cs(e).X({range:o},(c,l,u)=>{const[h,d,p]=c,y=Wn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):u.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Lr(e).get(s).next(o=>{if(o===null)throw W();J(o.userId===this.userId),r.push(Ai(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return CE(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return b.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Cs(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Wn(s[1]);i.push(c)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,t){return RE(e,this.userId,t)}xn(e){return NE(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function RE(n,e,t){const r=Ol(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Cs(n).X({range:s,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Lr(n){return bt(n,"mutations")}function Cs(n){return bt(n,"documentMutations")}function NE(n){return bt(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new os(0)}static Mn(){return new os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new os(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>X.fromTimestamp(new He(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>xs(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return xs(e).X((o,a)=>{const c=da(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,t){return xs(e).X((r,i)=>{const s=da(i);t(s)})}$n(e){return tw(e).get("targetGlobalKey").next(t=>(J(t!==null),t))}On(e,t){return tw(e).put("targetGlobalKey",t)}Fn(e,t){return xs(e).put(SE(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=ts(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return xs(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=da(a);Uc(t,l.target)&&(s=l,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=qr(e);return t.forEach(o=>{const a=qt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,t,r){const i=qr(e);return b.forEach(t,s=>{const o=qt(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=qr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=qr(e);let s=de();return i.X({range:r,Y:!0},(o,a,c)=>{const l=Wn(o[1]),u=new j(l);s=s.add(u)}).next(()=>s)}containsKey(e,t){const r=qt(t.path),i=IDBKeyRange.bound([r],[xI(r)],!1,!0);let s=0;return qr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}le(e,t){return xs(e).get(t).next(r=>r?da(r):null)}}function xs(n){return bt(n,"targets")}function tw(n){return bt(n,"targetGlobal")}function qr(n){return bt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw([n,e],[t,r]){const i=ue(n,t);return i===0?ue(e,r):i}class NM{constructor(e){this.Ln=e,this.buffer=new je(nw),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();nw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PM{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mi(t)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await pi(t)}await this.Qn(3e5)})}}class DM{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Wt.ct);const r=new NM(t);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(ew)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ew):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),mf()<=Ee.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function OM(n,e){return new DM(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e,t){this.db=e,this.garbageCollector=OM(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return pl(e,r)}removeReference(e,t,r){return pl(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return pl(e,t)}Xn(e,t){return function(r,i){let s=!1;return NE(r).Z(o=>RE(r,o,i).next(a=>(a&&(s=!0),b.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),qr(e).delete([0,qt(o.path)])))});i.push(c)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return pl(e,t)}Yn(e,t){const r=qr(e);let i,s=Wt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(s!==Wt.ct&&t(new j(Wn(i)),s),s=l,i=c):s=Wt.ct}).next(()=>{s!==Wt.ct&&t(new j(Wn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function pl(n,e){return qr(n).put(function(t,r){return{targetId:0,path:qt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.changes=new gi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return bi(e).put(r)}removeEntry(e,t,r){return bi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],gu(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=Be.newInvalidDocument(t);return bi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ta(t))},(i,s)=>{r=this.ts(t,s)}).next(()=>r)}es(e,t){let r={size:0,document:Be.newInvalidDocument(t)};return bi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ta(t))},(i,s)=>{r={document:this.ts(t,s),size:vu(s)}}).next(()=>r)}getEntries(e,t){let r=Yt();return this.ns(e,t,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,t){let r=Yt(),i=new Fe(j.comparator);return this.ns(e,t,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,vu(o))}).next(()=>({documents:r,rs:i}))}ns(e,t,r){if(t.isEmpty())return b.resolve();let i=new je(sw);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(ta(i.first()),ta(i.last())),o=i.getIterator();let a=o.getNext();return bi(e).X({index:"documentKeyIndex",range:s},(c,l,u)=>{const h=j.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&sw(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.G(ta(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),gu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bi(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=Yt();for(const u of c){const h=this.ts(j.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Vc(t,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,t,r,i){let s=Yt();const o=iw(t,r),a=iw(t,hn.max());return bi(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.ts(j.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&u.done()}).next(()=>s)}newChangeBuffer(e){return new FM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return rw(e).get("remoteDocumentGlobalKey").next(t=>(J(!!t),t))}Zn(e,t){return rw(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=_M(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Be.newInvalidDocument(e)}}function DE(n){return new MM(n)}class FM extends PE{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new gi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new je((s,o)=>ue(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(t.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=zv(this.os.serializer,o);i=i.add(s.path.popLast());const l=vu(c);r+=l-a.size,t.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=zv(this.os.serializer,o.convertToNoDocument(X.min()));t.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.os.updateMetadata(e,r)),b.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function rw(n){return bt(n,"remoteDocumentGlobal")}function bi(n){return bt(n,"remoteDocumentsV14")}function ta(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function iw(n,e){const t=e.documentKey.path.toArray();return[n,gu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function sw(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=ue(t[s],r[s]),i)return i;return i=ue(t.length,r.length),i||(i=ue(t[t.length-2],r[r.length-2]),i||ue(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Sa(r.mutation,i,Qt.empty(),He.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const i=Qn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ua();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Qn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Yt();const o=xa(),a=xa();return t.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof kr)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Sa(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new UM(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=xa();let i=new Fe((o,a)=>o-a),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=r.get(c)||Qt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||de()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ZI();u.forEach(d=>{if(!s.has(d)){const p=aE(t.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):b.resolve(Qn());let a=-1,c=s;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,de())).next(u=>({batchId:a,changes:JI(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let i=ua();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=ua();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Ar(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Be.newInvalidDocument(l)))});let o=ua();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Sa(l.mutation,c,Qt.empty(),He.now()),Vc(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return b.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:nt(r.createTime)}),b.resolve()}getNamedQuery(e,t){return b.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:Em(r.bundledQuery),readTime:nt(r.readTime)}}(t)),b.resolve()}}/**
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
 */class VM{constructor(){this.overlays=new Fe(j.comparator),this.ls=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qn();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=Qn(),s=t.length+1,o=new j(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Fe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=Qn(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wm(t,r));let s=this.ls.get(t);s===void 0&&(s=de(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.fs=new je(pt.ds),this.ws=new je(pt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new pt(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new pt(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new j(new Te([])),r=new pt(t,e),i=new pt(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new j(new Te([])),r=new pt(t,e),i=new pt(t,e+1);let s=de();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new pt(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return j.comparator(e.key,t.key)||ue(e.As,t.As)}static _s(e,t){return ue(e.As,t.As)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new je(pt.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ym(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,t){return b.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pt(t,0),i=new pt(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(ue);return t.forEach(i=>{const s=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),b.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new pt(new j(s),0);let a=new je(ue);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){J(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return b.forEach(t.mutations,i=>{const s=new pt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new pt(t,0),i=this.Rs.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.Ds=e,this.docs=new Fe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let r=Yt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Be.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Yt();const o=t.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||lm(kI(u),r)<=0||(i.has(u.key)||Vc(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W()}Cs(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qM(this)}getSize(e){return b.resolve(this.size)}}class qM extends PE{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.persistence=e,this.xs=new gi(t=>ts(t),Uc),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Sm,this.targetCount=0,this.Ms=os.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),b.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new os(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Fn(t),b.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t){this.$s={},this.overlays={},this.Os=new Wt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new zM(this),this.indexManager=new kM,this.remoteDocumentCache=function(r){return new jM(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new xE(t),this.qs=new $M(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new VM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new BM(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){P("MemoryPersistence","Starting transaction:",e);const i=new HM(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return b.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class HM extends RI{constructor(e){super(),this.currentSequenceNumber=e}}class Nh{constructor(e){this.persistence=e,this.Qs=new Sm,this.js=null}static zs(e){return new Nh(e)}get Ws(){if(this.js)return this.js;throw W()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),b.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,r=>{const i=j.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,X.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return b.or([()=>b.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Th("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bv,{unique:!0}),a.createObjectStore("documentMutations")}(e),ow(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),ow(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bv,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return b.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:CL});c.createIndex("collectionPathOverlayIndex",RL,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",NL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:vL});c.createIndex("documentKeyIndex",wL),c.createIndex("collectionGroupIndex",_L)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:xL}).createIndex("sequenceNumberIndex",SL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:AL}).createIndex("documentKeyIndex",kL,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=vu(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>b.forEach(a,c=>{J(c.userId===s.userId);const l=Ai(this.serializer,c);return CE(e,s.userId,l).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new Te(o),l=function(u){return[0,qt(u)]}(c);s.push(t.get(l).next(u=>u?b.resolve():(h=>t.put({targetId:0,path:qt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>b.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:TL});const r=t.store("collectionParents"),i=new xm,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:qt(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new Te(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],l)=>{const u=Wn(a);return s(u.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,i)=>{const s=da(i),o=SE(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new j(Te.fromString(l.document.name).popFirst(5)):l.noDocument?j.fromSegments(l.noDocument.path):l.unknownDocument?j.fromSegments(l.unknownDocument.path):W()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>b.waitFor(i))}si(e,t){const r=t.store("mutations"),i=DE(this.serializer),s=new LE(Nh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:de();Ai(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),b.forEach(a,(c,l)=>{const u=new mt(l),h=Ch.de(this.serializer,u),d=s.getIndexManager(u),p=Rh.de(u,this.serializer,d,s.referenceDelegate);return new OE(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new yf(t,Wt.ct),c).next()})})}}function ow(n){n.createObjectStore("targetDocuments",{keyPath:IL}).createIndex("documentTargetsIndex",EL,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",bL,{unique:!0}),n.createObjectStore("targetGlobal")}const Td="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Am{constructor(e,t,r,i,s,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=l,this.oi=u,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Am.D())throw new R(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new LM(this,i),this.di=t+"main",this.serializer=new xE(c),this.wi=new An(this.di,this.ui,new KM(this.serializer)),this.Bs=new RM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=DE(this.serializer),this.qs=new bM,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,u===!1&&Ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(E.FAILED_PRECONDITION,Td);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Wt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ml(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(mi(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return na(e).get("owner").next(t=>b.resolve(this.Ri(t)))}Pi(e){return ml(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=bt(t,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?b.resolve(!0):na(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new R(E.FAILED_PRECONDITION,Td);return!1}}return!(!this.networkEnabled||!this.inForeground)||ml(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&P("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new yf(e,Wt.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>ml(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return Rh.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new CM(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Ch.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){P("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?DL:o===14?LI:o===13?OI:o===12?PL:o===11?DI:void W();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new yf(c,this.Os?this.Os.next():Wt.ct),t==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw Ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new R(E.FAILED_PRECONDITION,CI);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return na(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new R(E.FAILED_PRECONDITION,Td)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return na(e).put("owner",t)}static D(){return An.D()}Ai(e){const t=na(e);return t.get("owner").next(r=>this.Ri(r)?(P("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):b.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;Ak()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ze("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Ze("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function na(n){return bt(n,"owner")}function ml(n){return bt(n,"clientMetadata")}function km(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=de(),i=de();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cm(e,t.fromCache,r,i)}}/**
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
 */class ME{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(Dv(t))return b.resolve(null);let r=en(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=mu(t,null,"F"),r=en(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(t,a);return this.zi(t,l,o,c.readTime)?this.Ki(e,mu(t,null,"F")):this.Wi(e,l,t,c)}))})))}Gi(e,t,r,i){return Dv(t)||i.isEqual(X.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(mf()<=Ee.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tf(t)),this.Wi(e,o,t,AI(i,-1)))})}ji(e,t){let r=new je(YI(e));return t.forEach((i,s)=>{Vc(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return mf()<=Ee.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Tf(t)),this.Ui.getDocumentsMatchingQuery(e,t,hn.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new Fe(ue),this.Yi=new gi(s=>ts(s),Uc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OE(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function FE(n,e,t,r){return new GM(n,e,t,r)}async function UE(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=de();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function WM(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const v=c.docVersions.get(p);J(v!==null),y.version.compareTo(v)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=de();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function $E(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function QM(n,e){const t=q(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,u.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(dt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),i=i.insert(h,p),function(y,v,w){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(t.Bs.updateTargetData(s,p))});let c=Yt(),l=de();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(VE(s,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(X.min())){const u=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(t.Ji=i,s))}function VE(n,e,t){let r=de(),i=de();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Yt();return t.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:i}})}function YM(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function co(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function lo(n,e,t){const r=q(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mi(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function wu(n,e,t){const r=q(n);let i=X.min(),s=de();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=q(a),h=u.Yi.get(l);return h!==void 0?b.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,en(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:X.min(),t?s:de())).next(a=>(qE(r,QI(e),a),{documents:a,ir:s})))}function BE(n,e){const t=q(n),r=q(t.Bs),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function jE(n,e){const t=q(n),r=t.Xi.get(e)||X.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Zi.getAllFromCollectionGroup(i,e,AI(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(qE(t,e,i),i))}function qE(n,e,t){let r=n.Xi.get(e)||X.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function XM(n,e,t,r){const i=q(n);let s=de(),o=Yt();for(const l of t){const u=e.rr(l.metadata.name);l.document&&(s=s.add(u));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await co(i,function(l){return en(Lo(Te.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>VE(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Bs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Bs.addMatchingKeys(l,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.nr,u.sr)).next(()=>u.nr)))}async function JM(n,e,t=de()){const r=await co(n,en(Em(e.bundledQuery))),i=q(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=nt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(dt.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,t,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function aw(n,e){return`firestore_clients_${n}_${e}`}function cw(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function xd(n,e){return`firestore_targets_${n}_${e}`}class _u{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ar(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new R(i.error.code,i.error.message))),o?new _u(e,t,i.state,s):(Ze("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Aa{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new R(r.error.code,r.error.message))),s?new Aa(e,r.state,i):(Ze("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=mm();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=NI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new bu(e,s):(Ze("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Rm{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Rm(t.clientId,t.onlineState):(Ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Nf{constructor(){this.activeTargetIds=mm()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sd{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Fe(ue),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=aw(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Nf),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(aw(this.persistenceKey,r));if(i){const s=bu.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(xd(this.persistenceKey,e));if(r){const i=Aa.ar(e,r);i&&(t=i.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(xd(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return P("SharedClientState","READ",e,t),t}setItem(e,t){P("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(P("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void Ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(i){let s=Wt.ct;if(i!=null)try{const o=JSON.parse(i);J(typeof o=="number"),s=o}catch(o){Ze("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Wt.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const i=new _u(this.currentUser,e,t,r),s=cw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const t=cw(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const i=xd(this.persistenceKey,e),s=new Aa(e,t,r);this.setItem(i,s.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return bu.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return _u.ar(new mt(s),i,t)}Ur(e,t){const r=this.Ar.exec(e),i=Number(r[1]);return Aa.ar(i,t)}br(e){return Rm.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=mm();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class zE{constructor(){this.Hr=new Nf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Nf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZM{Yr(e){}shutdown(){}}/**
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
 */class lw{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function Ad(){return gl===null?gl=268435456+Math.round(2147483648*Math.random()):gl++,"0x"+gl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class n2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=Ad(),a=this.To(e,t);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(l=>(P("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ln("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Oo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=e2[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=Ad();return new Promise((o,a)=>{const c=new JO;c.setWithCredentials(!0),c.listenOnce(QO.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Id.NO_ERROR:const u=c.getResponseJson();P(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Id.TIMEOUT:P(Pt,`RPC '${e}' ${s} timed out`),a(new R(E.DEADLINE_EXCEEDED,"Request time out"));break;case Id.HTTP_ERROR:const h=c.getStatus();if(P(Pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(w)>=0?w:E.UNKNOWN}(p.status);a(new R(y,p.message))}else a(new R(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(E.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{P(Pt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);P(Pt,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",l,r,15)})}Ro(e,t,r){const i=Ad(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GO(),a=WO(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new XO({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");P(Pt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new t2({ro:w=>{p?P(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(P(Pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(Pt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),v=(w,I,k)=>{w.listen(I,C=>{try{k(C)}catch(T){setTimeout(()=>{throw T},0)}})};return v(h,ll.EventType.OPEN,()=>{p||P(Pt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,ll.EventType.CLOSE,()=>{p||(p=!0,P(Pt,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,ll.EventType.ERROR,w=>{p||(p=!0,Ln(Pt,`RPC '${e}' stream ${i} transport errored:`,w),y.wo(new R(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,ll.EventType.MESSAGE,w=>{var I;if(!p){const k=w.data[0];J(!!k);const C=k,T=C.error||((I=C[0])===null||I===void 0?void 0:I.error);if(T){P(Pt,`RPC '${e}' stream ${i} received error:`,T);const M=T.status;let O=function(K){const B=at[K];if(B!==void 0)return uE(B)}(M),$=T.message;O===void 0&&(O=E.INTERNAL,$="Unknown error status: "+M+" with message "+T.message),p=!0,y.wo(new R(O,$)),h.close()}else P(Pt,`RPC '${e}' stream ${i} received:`,k),y._o(k)}}),v(a,YO.STAT_EVENT,w=>{w.stat===yv.PROXY?P(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===yv.NOPROXY&&P(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function HE(){return typeof window<"u"?window:null}function $l(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){return new uM(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Nm(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(Ze(t.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new R(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r2 extends KE{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=fM(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?nt(s.readTime):X.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=uc(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=fu(a)?{documents:wE(i,a)}:{query:_E(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=pE(i,s.resumeToken);const c=xf(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(X.min())>0){o.readTime=ao(i,s.snapshotVersion.toTimestamp());const c=xf(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=mM(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=uc(this.serializer),t.removeTarget=e,this.Wo(t)}}class i2 extends KE{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=pM(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.cu(r,t)}return J(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=uc(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>hc(this.serializer,r))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new R(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(E.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(E.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class o2{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ze(t),this.mu=!1):P("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{yi(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=q(a);c.vu.add(4),await Uo(c),c.bu.set("Unknown"),c.vu.delete(4),await Hc(c)}(this))})}),this.bu=new o2(r,i)}}async function Hc(n){if(yi(n))for(const e of n.Ru)await e(!0)}async function Uo(n){for(const e of n.Ru)await e(!1)}function Ph(n,e){const t=q(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Om(t)?Dm(t):Vo(t).Ko()&&Pm(t,e))}function dc(n,e){const t=q(n),r=Vo(t);t.Au.delete(e),r.Ko()&&GE(t,e),t.Au.size===0&&(r.Ko()?r.jo():yi(t)&&t.bu.set("Unknown"))}function Pm(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(n).su(e)}function GE(n,e){n.Vu.qt(e),Vo(n).iu(e)}function Dm(n){n.Vu=new oM({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Vo(n).start(),n.bu.gu()}function Om(n){return yi(n)&&!Vo(n).Uo()&&n.Au.size>0}function yi(n){return q(n).vu.size===0}function WE(n){n.Vu=void 0}async function c2(n){n.Au.forEach((e,t)=>{Pm(n,e)})}async function l2(n,e){WE(n),Om(n)?(n.bu.Iu(e),Dm(n)):n.bu.set("Unknown")}async function u2(n,e,t){if(n.bu.set("Online"),e instanceof fE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Iu(n,r)}else if(e instanceof Ul?n.Vu.Ht(e):e instanceof dE?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(X.min()))try{const r=await $E(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(c);l&&i.Au.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken(dt.EMPTY_BYTE_STRING,l.snapshotVersion)),GE(i,a);const u=new dr(l.target,a,c,l.sequenceNumber);Pm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Iu(n,r)}}async function Iu(n,e,t){if(!mi(e))throw e;n.vu.add(1),await Uo(n),n.bu.set("Offline"),t||(t=()=>$E(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Hc(n)})}function QE(n,e){return e().catch(t=>Iu(n,t,e))}async function $o(n){const e=q(n),t=ci(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;h2(e);)try{const i=await YM(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,d2(e,i)}catch(i){await Iu(e,i)}YE(e)&&XE(e)}function h2(n){return yi(n)&&n.Eu.length<10}function d2(n,e){n.Eu.push(e);const t=ci(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function YE(n){return yi(n)&&!ci(n).Uo()&&n.Eu.length>0}function XE(n){ci(n).start()}async function f2(n){ci(n).hu()}async function p2(n){const e=ci(n);for(const t of n.Eu)e.uu(t.mutations)}async function m2(n,e,t){const r=n.Eu.shift(),i=vm.from(r,e,t);await QE(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await $o(n)}async function g2(n,e){e&&ci(n).ou&&await async function(t,r){if(i=r.code,lE(i)&&i!==E.ABORTED){const s=t.Eu.shift();ci(t).Qo(),await QE(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $o(t)}var i}(n,e),YE(n)&&XE(n)}async function uw(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=yi(t);t.vu.add(3),await Uo(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Hc(t)}async function Pf(n,e){const t=q(n);e?(t.vu.delete(2),await Hc(t)):e||(t.vu.add(2),await Uo(t),t.bu.set("Unknown"))}function Vo(n){return n.Su||(n.Su=function(e,t,r){const i=q(e);return i.fu(),new r2(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:c2.bind(null,n),ao:l2.bind(null,n),nu:u2.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),Om(n)?Dm(n):n.bu.set("Unknown")):(await n.Su.stop(),WE(n))})),n.Su}function ci(n){return n.Du||(n.Du=function(e,t,r){const i=q(e);return i.fu(),new i2(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:f2.bind(null,n),ao:g2.bind(null,n),au:p2.bind(null,n),cu:m2.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await $o(n)):(await n.Du.stop(),n.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Lm(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bo(n,e){if(Ze("AsyncQueue",`${e}: ${n}`),mi(n))return new R(E.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=ua(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Ks(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ks)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ks;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.Cu=new Fe(j.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):W():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class uo{constructor(e,t,r,i,s,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new uo(e,t,Ks.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.Nu=void 0,this.listeners=[]}}class v2{constructor(){this.queries=new gi(e=>WI(e),$c),this.onlineState="Unknown",this.ku=new Set}}async function Mm(n,e){const t=q(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new y2),i)try{s.Nu=await t.onListen(r)}catch(o){const a=Bo(o,`Initialization of query '${Tf(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&Um(t)}async function Fm(n,e){const t=q(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function w2(n,e){const t=q(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Um(t)}function _2(n,e,t){const r=q(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Um(n){n.ku.forEach(e=>{e.next()})}class $m{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.serializer=e}rr(e){return Xn(this.serializer,e)}ur(e){return e.metadata.exists?vE(this.serializer,e.document,!1):Be.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return nt(e)}}class I2{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=JE(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=Te.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new dw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||de()).add(s);t.set(o,a)}}return t}async complete(){const e=await XM(this.localStore,new dw(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await JM(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function JE(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.key=e}}class eT{constructor(e){this.key=e}}class tT{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=de(),this.mutatedKeys=de(),this.tc=YI(e),this.ec=new Ks(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new hw,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Vc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),w=!0):this.rc(d,p)||(r.track({type:2,doc:p}),w=!0,(c&&this.tc(p,c)>0||l&&this.tc(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((l,u)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return p(h)-p(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new uo(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new hw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=de(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new eT(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new ZE(r))}),t}hc(e){this.Yu=e.ir,this.Zu=de();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return uo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class E2{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class T2{constructor(e){this.key=e,this.fc=!1}}class x2{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new gi(a=>WI(a),$c),this._c=new Map,this.mc=new Set,this.gc=new Fe(j.comparator),this.yc=new Map,this.Ic=new Sm,this.Tc={},this.Ec=new Map,this.Ac=os.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function S2(n,e){const t=zm(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await co(t.localStore,en(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Vm(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Ph(t.remoteStore,o)}return i}async function Vm(n,e,t,r,i){n.Rc=(h,d,p)=>async function(y,v,w,I){let k=v.view.sc(w);k.zi&&(k=await wu(y.localStore,v.query,!1).then(({documents:M})=>v.view.sc(M,k)));const C=I&&I.targetChanges.get(v.targetId),T=v.view.applyChanges(k,y.isPrimaryClient,C);return Df(y,v.targetId,T.cc),T.snapshot}(n,h,d,p);const s=await wu(n.localStore,e,!0),o=new tT(e,s.ir),a=o.sc(s.documents),c=qc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);Df(n,t,l.cc);const u=new E2(e,t,o);return n.wc.set(e,u),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),l.snapshot}async function A2(n,e){const t=q(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!$c(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await lo(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),dc(t.remoteStore,r.targetId),ho(t,r.targetId)}).catch(pi)):(ho(t,r.targetId),await lo(t.localStore,r.targetId,!0))}async function k2(n,e,t){const r=Hm(n);try{const i=await function(s,o){const a=q(s),c=He.now(),l=o.reduce((d,p)=>d.add(p.key),de());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Yt(),y=de();return a.Zi.getEntries(d,l).next(v=>{p=v,p.forEach((w,I)=>{I.isValidDocument()||(y=y.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const w=[];for(const I of o){const k=rM(I,u.get(I.key).overlayedDocument);k!=null&&w.push(new kr(I.key,k,$I(k.value.mapValue),ze.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:JI(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new Fe(ue)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,t),await Cr(r,i.changes),await $o(r.remoteStore)}catch(i){const s=Bo(i,"Failed to persist write");t.reject(s)}}async function nT(n,e){const t=q(n);try{const r=await QM(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?J(o.fc):i.removedDocuments.size>0&&(J(o.fc),o.fc=!1))}),await Cr(t,r,e)}catch(r){await pi(r)}}function fw(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=q(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Um(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function C2(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Fe(j.comparator);o=o.insert(s,Be.newNoDocument(s,X.min()));const a=de().add(s),c=new jc(X.min(),new Map,new Fe(ue),o,a);await nT(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),qm(r)}else await lo(r.localStore,e,!1).then(()=>ho(r,e,t)).catch(pi)}async function R2(n,e){const t=q(n),r=e.batch.batchId;try{const i=await WM(t.localStore,e);jm(t,r,null),Bm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Cr(t,i)}catch(i){await pi(i)}}async function N2(n,e,t){const r=q(n);try{const i=await function(s,o){const a=q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(J(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);jm(r,e,t),Bm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Cr(r,i)}catch(i){await pi(i)}}async function P2(n,e){const t=q(n);yi(t.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=q(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ec.get(r)||[];i.push(e),t.Ec.set(r,i)}catch(r){const i=Bo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Bm(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function jm(n,e,t){const r=q(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function ho(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||rT(n,r)})}function rT(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(dc(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),qm(n))}function Df(n,e,t){for(const r of t)r instanceof ZE?(n.Ic.addReference(r.key,e),D2(n,r)):r instanceof eT?(P("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||rT(n,r.key)):W()}function D2(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(P("SyncEngine","New document in limbo: "+t),n.mc.add(r),qm(n))}function qm(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new j(Te.fromString(e)),r=n.Ac.next();n.yc.set(r,new T2(t)),n.gc=n.gc.insert(t,r),Ph(n.remoteStore,new dr(en(Lo(t.path)),r,"TargetPurposeLimboResolution",Wt.ct))}}async function Cr(n,e,t){const r=q(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Cm.Li(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const l=q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!mi(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,y)}}}(r.localStore,s))}async function O2(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await UE(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(E.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cr(t,r.er)}}function L2(n,e){const t=q(n),r=t.yc.get(e);if(r&&r.fc)return de().add(r.key);{let i=de();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function M2(n,e){const t=q(n),r=await wu(t.localStore,e.query,!0),i=e.view.hc(r);return t.isPrimaryClient&&Df(t,e.targetId,i.cc),i}async function F2(n,e){const t=q(n);return jE(t.localStore,e).then(r=>Cr(t,r))}async function U2(n,e,t,r){const i=q(n),s=await function(o,a){const c=q(o),l=q(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Sn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):b.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await $o(i.remoteStore):t==="acknowledged"||t==="rejected"?(jm(i,e,r||null),Bm(i,e),function(o,a){q(q(o).mutationQueue).Cn(a)}(i.localStore,e)):W(),await Cr(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function $2(n,e){const t=q(n);if(zm(t),Hm(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await pw(t,r.toArray());t.vc=!0,await Pf(t.remoteStore,!0);for(const s of i)Ph(t.remoteStore,s)}else if(e===!1&&t.vc!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ho(t,o),lo(t.localStore,o,!0))),dc(t.remoteStore,o)}),await i,await pw(t,r),function(s){const o=q(s);o.yc.forEach((a,c)=>{dc(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Fe(j.comparator)}(t),t.vc=!1,await Pf(t.remoteStore,!1)}}async function pw(n,e,t){const r=q(n),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await co(r.localStore,en(c[0]));for(const l of c){const u=r.wc.get(l),h=await M2(r,u);h.snapshot&&s.push(h.snapshot)}}else{const l=await BE(r.localStore,o);a=await co(r.localStore,l),await Vm(r,iT(l),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function iT(n){return GI(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function V2(n){const e=q(n);return q(q(e.localStore).persistence).$i()}async function B2(n,e,t,r){const i=q(n);if(i.vc)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await jE(i.localStore,QI(s[0])),a=jc.createSynthesizedRemoteEventForCurrentChange(e,t==="current",dt.EMPTY_BYTE_STRING);await Cr(i,o,a);break}case"rejected":await lo(i.localStore,e,!0),ho(i,e,r);break;default:W()}}async function j2(n,e,t){const r=zm(n);if(r.vc){for(const i of e){if(r._c.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await BE(r.localStore,i),o=await co(r.localStore,s);await Vm(r,iT(s),o.targetId,!1,o.resumeToken),Ph(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await lo(r.localStore,i,!1).then(()=>{dc(r.remoteStore,i),ho(r,i)}).catch(pi)}}function zm(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=L2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=C2.bind(null,e),e.dc.nu=w2.bind(null,e.eventManager),e.dc.Pc=_2.bind(null,e.eventManager),e}function Hm(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=R2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N2.bind(null,e),e}function q2(n,e,t){const r=q(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=q(h),y=nt(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.qs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(JE(a));const c=new I2(a,i.localStore,s.serializer);let l=await s.bc();for(;l;){const h=await c.zu(l);h&&o._updateProgress(h),l=await s.bc()}const u=await c.complete();return await Cr(i,u.Ju,void 0),await function(h,d){const p=q(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.qs.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Hu)}catch(a){return Ln("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Of{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return FE(this.persistence,new ME,e.initialUser,this.serializer)}createPersistence(e){return new LE(Nh.zs,this.serializer)}createSharedClientState(e){return new zE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sT extends Of{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Hm(this.Vc.syncEngine),await $o(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return FE(this.persistence,new ME,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new PM(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new mL(t,this.persistence);return new pL(e.asyncQueue,r)}createPersistence(e){const t=km(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new Am(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,HE(),$l(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new zE}}class z2 extends sT{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof Sd&&(this.sharedClientState.syncEngine={jr:U2.bind(null,t),zr:B2.bind(null,t),Wr:j2.bind(null,t),$i:V2.bind(null,t),Qr:F2.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await $2(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=HE();if(!Sd.D(t))throw new R(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=km(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Sd(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Km{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=O2.bind(null,this.syncEngine),await Pf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new v2}createDatastore(e){const t=zc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new n2(i));var i;return function(s,o,a,c){return new s2(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>fw(this.syncEngine,a,0),o=lw.D()?new lw:new ZM,new a2(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,l){const u=new x2(r,i,s,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=q(e);P("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Uo(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ze("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new yt,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const i=await this.$c(r);return new b2(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=q(r),o=uc(s.serializer)+"/documents",a={documents:i.map(h=>lc(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=dM(s.serializer,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());J(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Fo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=j.fromPath(r);this.mutations.push(new gm(i,this.precondition(i)))}),await async function(t,r){const i=q(t),s=uc(i.serializer)+"/documents",o={writes:r.map(a=>hc(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw W();t=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new R(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(X.min())?ze.exists(!1):ze.updateTime(t):ze.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(X.min()))throw new R(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ze.updateTime(t)}return ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class G2{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new Nm(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new K2(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!Fc(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!lE(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=TI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vl(n,e){n.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await UE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Lf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Gm(n);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>uw(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>uw(e.remoteStore,s)),n._onlineComponents=e}function oT(n){return n.name==="FirebaseError"?n.code===E.FAILED_PRECONDITION||n.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Gm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!oT(t))throw t;Ln("Error using user provided cache. Falling back to memory cache: "+t),await Vl(n,new Of)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Vl(n,new Of);return n._offlineComponents}async function Oh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Lf(n,n._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Lf(n,new Km))),n._onlineComponents}function aT(n){return Gm(n).then(e=>e.persistence)}function Wm(n){return Gm(n).then(e=>e.localStore)}function cT(n){return Oh(n).then(e=>e.remoteStore)}function Qm(n){return Oh(n).then(e=>e.syncEngine)}function Q2(n){return Oh(n).then(e=>e.datastore)}async function fo(n){const e=await Oh(n),t=e.eventManager;return t.onListen=S2.bind(null,e.syncEngine),t.onUnlisten=A2.bind(null,e.syncEngine),t}function Y2(n){return n.asyncQueue.enqueue(async()=>{const e=await aT(n),t=await cT(n);return e.setNetworkEnabled(!0),function(r){const i=q(r);return i.vu.delete(0),Hc(i)}(t)})}function X2(n){return n.asyncQueue.enqueue(async()=>{const e=await aT(n),t=await cT(n);return e.setNetworkEnabled(!1),async function(r){const i=q(r);i.vu.add(0),await Uo(i),i.bu.set("Offline")}(t)})}function J2(n,e){const t=new yt;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const l=q(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new R(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Bo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Wm(n),e,t)),t.promise}function lT(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Dh({next:h=>{s.enqueueAndForget(()=>Fm(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $m(Lo(o.path),l,{includeMetadataChanges:!0,Ku:!0});return Mm(i,u)}(await fo(n),n.asyncQueue,e,t,r)),r.promise}function Z2(n,e){const t=new yt;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await wu(r,i,!0),a=new tT(i,o.ir),c=a.sc(o.documents),l=a.applyChanges(c,!1);s.resolve(l.snapshot)}catch(o){const a=Bo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Wm(n),e,t)),t.promise}function uT(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Dh({next:h=>{s.enqueueAndForget(()=>Fm(i,u)),h.fromCache&&a.source==="server"?c.reject(new R(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $m(o,l,{includeMetadataChanges:!0,Ku:!0});return Mm(i,u)}(await fo(n),n.asyncQueue,e,t,r)),r.promise}function eF(n,e){const t=new Dh(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){q(r).ku.add(i),i.next()}(await fo(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){q(r).ku.delete(i)}(await fo(n),t))}}function tF(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?hE().encode(s):s,function(c,l){return new H2(c,l)}(function(c,l){if(c instanceof Uint8Array)return mw(c,l);if(c instanceof ArrayBuffer)return mw(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,zc(e));n.asyncQueue.enqueueAndForget(async()=>{q2(await Qm(n),i,r)})}function nF(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=q(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Wm(n),e))}/**
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
 */function hT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n,e,t){if(!t)throw new R(E.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dT(n,e,t,r){if(e===!0&&r===!0)throw new R(E.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yw(n){if(!j.isDocumentKey(n))throw new R(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vw(n){if(j.isDocumentKey(n))throw new R(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function Ae(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new R(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lh(n);throw new R(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function fT(n,e){if(e<=0)throw new R(E.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new R(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new R(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new R(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Kc{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ww({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ww(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new nL;switch(t.type){case"firstParty":return new oL(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new R(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=gw.get(e);t&&(P("ComponentProvider","Removing Datastore"),gw.delete(e),t.terminate())}(this),Promise.resolve()}}function rF(n,e,t,r={}){var i;const s=(n=Ae(n,Kc))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=mt.MOCK_USER;else{a=Tk(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new R(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(l)}n._authCredentials=new rL(new EI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Nt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class Jn extends Nt{constructor(e,t,r){super(e,t,Lo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new j(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function po(n,e,...t){if(n=ie(n),Ym("collection","path",e),n instanceof Kc){const r=Te.fromString(e,...t);return vw(r),new Jn(n,null,r)}{if(!(n instanceof qe||n instanceof Jn))throw new R(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return vw(r),new Jn(n.firestore,null,r)}}function iF(n,e){if(n=Ae(n,Kc),Ym("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nt(n,null,function(t){return new Ar(Te.emptyPath(),t)}(e))}function fc(n,e,...t){if(n=ie(n),arguments.length===1&&(e=TI.A()),Ym("doc","path",e),n instanceof Kc){const r=Te.fromString(e,...t);return yw(r),new qe(n,null,new j(r))}{if(!(n instanceof qe||n instanceof Jn))throw new R(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return yw(r),new qe(n.firestore,n instanceof Jn?n.converter:null,new j(r))}}function pT(n,e){return n=ie(n),e=ie(e),(n instanceof qe||n instanceof Jn)&&(e instanceof qe||e instanceof Jn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function mT(n,e){return n=ie(n),e=ie(e),n instanceof Nt&&e instanceof Nt&&n.firestore===e.firestore&&$c(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Nm(this,"async_queue_retry"),this.Xc=()=>{const t=$l();t&&P("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=$l();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=$l();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new yt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!mi(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=Lm.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&W()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Mf(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class oF{constructor(){this._progressObserver={},this._taskCompletionResolver=new yt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF=-1;class Je extends Kc{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new sF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gT(this),this._firestoreClient.terminate()}}function It(n){return n._firestoreClient||gT(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function gT(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,l){return new ML(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,hT(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new W2(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function cF(n,e){vT(n=Ae(n,Je));const t=It(n);if(t._uninitializedComponentsProvider)throw new R(E.FAILED_PRECONDITION,"SDK cache is already specified.");Ln("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Km;return yT(t,i,new sT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function lF(n){vT(n=Ae(n,Je));const e=It(n);if(e._uninitializedComponentsProvider)throw new R(E.FAILED_PRECONDITION,"SDK cache is already specified.");Ln("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Km;return yT(e,r,new z2(r,t.cacheSizeBytes))}function yT(n,e,t){const r=new yt;return n.asyncQueue.enqueue(async()=>{try{await Vl(n,t),await Lf(n,e),r.resolve()}catch(i){const s=i;if(!oT(s))throw s;Ln("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function uF(n){if(n._initialized&&!n._terminated)throw new R(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!An.D())return Promise.resolve();const r=t+"main";await An.delete(r)}(km(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function hF(n){return function(e){const t=new yt;return e.asyncQueue.enqueueAndForget(async()=>P2(await Qm(e),t)),t.promise}(It(n=Ae(n,Je)))}function dF(n){return Y2(It(n=Ae(n,Je)))}function fF(n){return X2(It(n=Ae(n,Je)))}function pF(n,e){const t=It(n=Ae(n,Je)),r=new oF;return tF(t,n._databaseId,e,r),r}function mF(n,e){return nF(It(n=Ae(n,Je)),e).then(t=>t?new Nt(n,null,t.query):null)}function vT(n){if(n._initialized||n._terminated)throw new R(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rr(dt.fromBase64String(e))}catch(t){throw new R(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rr(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new R(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new R(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new R(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=/^__.*__$/;class yF{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mo(e,this.data,t,this.fieldTransforms)}}class wT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _T(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Fh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Fh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Eu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(_T(this.ca)&&gF.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class vF{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zc(e)}ya(e,t,r,i=!1){return new Fh({ca:e,methodName:t,ga:r,path:et.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gs(n){const e=n._freezeSettings(),t=zc(n._databaseId);return new vF(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Uh(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);eg("Data must be an object, but it was:",o,r);const a=ET(r,o);let c,l;if(s.merge)c=new Qt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Ff(e,h,t);if(!o.contains(d))throw new R(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xT(u,d)||u.push(d)}c=new Qt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new yF(new St(a),c,l)}class Gc extends ms{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gc}}function bT(n,e,t){return new Fh({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Xm extends ms{_toFieldTransform(e){return new Bc(e.path,new so)}isEqual(e){return e instanceof Xm}}class wF extends ms{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=bT(this,e,!0),r=this.pa.map(s=>ys(s,t)),i=new ns(r);return new Bc(e.path,i)}isEqual(e){return this===e}}class _F extends ms{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=bT(this,e,!0),r=this.pa.map(s=>ys(s,t)),i=new rs(r);return new Bc(e.path,i)}isEqual(e){return this===e}}class bF extends ms{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new oo(e.serializer,nE(e.serializer,this.Ia));return new Bc(e.path,t)}isEqual(e){return this===e}}function Jm(n,e,t,r){const i=n.ya(1,e,t);eg("Data must be an object, but it was:",i,r);const s=[],o=St.empty();ps(r,(c,l)=>{const u=tg(e,c,t);l=ie(l);const h=i.da(u);if(l instanceof Gc)s.push(u);else{const d=ys(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Qt(s);return new wT(o,a,i.fieldTransforms)}function Zm(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[Ff(e,r,t)],c=[i];if(s.length%2!=0)throw new R(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ff(e,s[d])),c.push(s[d+1]);const l=[],u=St.empty();for(let d=a.length-1;d>=0;--d)if(!xT(l,a[d])){const p=a[d];let y=c[d];y=ie(y);const v=o.da(p);if(y instanceof Gc)l.push(p);else{const w=ys(y,v);w!=null&&(l.push(p),u.set(p,w))}}const h=new Qt(l);return new wT(u,h,o.fieldTransforms)}function IT(n,e,t,r=!1){return ys(t,n.ya(r?4:3,e))}function ys(n,e){if(TT(n=ie(n)))return eg("Unsupported field value:",e,n),ET(n,e);if(n instanceof ms)return function(t,r){if(!_T(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=ys(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=ie(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return nE(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=He.fromDate(t);return{timestampValue:ao(r.serializer,i)}}if(t instanceof He){const i=new He(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ao(r.serializer,i)}}if(t instanceof Mh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof rr)return{bytesValue:pE(r.serializer,t._byteString)};if(t instanceof qe){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Im(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${Lh(t)}`)}(n,e)}function ET(n,e){const t={};return MI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(n,(r,i)=>{const s=ys(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function TT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof He||n instanceof Mh||n instanceof rr||n instanceof qe||n instanceof ms)}function eg(n,e,t){if(!TT(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Lh(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function Ff(n,e,t){if((e=ie(e))instanceof li)return e._internalPath;if(typeof e=="string")return tg(n,e);throw Eu("Field path arguments must be of type string or ",n,!1,void 0,t)}const IF=new RegExp("[~\\*/\\[\\]]");function tg(n,e,t){if(e.search(IF)>=0)throw Eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new li(...e.split("."))._internalPath}catch{throw Eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Eu(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new R(E.INVALID_ARGUMENT,a+n+c)}function xT(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($h("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class EF extends pc{data(){return super.data()}}function $h(n,e){return typeof e=="string"?tg(n,e):e instanceof li?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new R(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ng{}class Wc extends ng{}function En(n,e,...t){let r=[];e instanceof ng&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof rg).length,o=i.filter(a=>a instanceof Vh).length;if(s>1||s>0&&o>0)throw new R(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Vh extends Wc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Vh(e,t,r)}_apply(e){const t=this._parse(e);return RT(e._query,t),new Nt(e.firestore,e.converter,Ef(e._query,t))}_parse(e){const t=gs(e.firestore);return function(i,s,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){bw(u,l);const d=[];for(const p of u)d.push(_w(a,i,p));h={arrayValue:{values:d}}}else h=_w(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||bw(u,l),h=IT(o,s,u,l==="in"||l==="not-in");return ye.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function AT(n,e,t){const r=e,i=$h("where",n);return Vh._create(i,r,t)}class rg extends ng{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rg(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)RT(s,a),s=Ef(s,a)}(e._query,t),new Nt(e.firestore,e.converter,Ef(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ig extends Wc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ig(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new R(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Hs(i,s);return function(a,c){if(fm(a)===null){const l=Sh(a);l!==null&&NT(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ar(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function TF(n,e="asc"){const t=e,r=$h("orderBy",n);return ig._create(r,t)}class Bh extends Wc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Bh(e,t,r)}_apply(e){return new Nt(e.firestore,e.converter,mu(e._query,this._limit,this._limitType))}}function kT(n){return fT("limit",n),Bh._create("limit",n,"F")}function xF(n){return fT("limitToLast",n),Bh._create("limitToLast",n,"L")}class jh extends Wc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new jh(e,t,r)}_apply(e){const t=CT(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(r,i){return new Ar(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function SF(...n){return jh._create("startAt",n,!0)}function AF(...n){return jh._create("startAfter",n,!1)}class qh extends Wc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new qh(e,t,r)}_apply(e){const t=CT(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(r,i){return new Ar(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function kF(...n){return qh._create("endBefore",n,!1)}function CF(...n){return qh._create("endAt",n,!0)}function CT(n,e,t,r){if(t[0]=ie(t[0]),t[0]instanceof pc)return function(i,s,o,a,c){if(!a)throw new R(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Gi(i))if(u.field.isKeyField())l.push(es(s,a.key));else{const h=a.data.field(u.field);if(xh(h))throw new R(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new R(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ai(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=gs(n.firestore);return function(s,o,a,c,l,u){const h=s.explicitOrderBy;if(l.length>h.length)throw new R(E.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const y=l[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new R(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof y}`);if(!pm(s)&&y.indexOf("/")!==-1)throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(Te.fromString(y));if(!j.isDocumentKey(v))throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const w=new j(v);d.push(es(o,w))}else{const v=IT(a,c,y);d.push(v)}}return new ai(d,u)}(n._query,n.firestore._databaseId,i,e,t,r)}}function _w(n,e,t){if(typeof(t=ie(t))=="string"){if(t==="")throw new R(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pm(e)&&t.indexOf("/")!==-1)throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Te.fromString(t));if(!j.isDocumentKey(r))throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return es(n,new j(r))}if(t instanceof qe)return es(n,t._key);throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lh(t)}.`)}function bw(n,e){if(!Array.isArray(n)||n.length===0)throw new R(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RT(n,e){if(e.isInequality()){const r=Sh(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new R(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=fm(n);s!==null&&NT(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new R(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function NT(n,e,t){if(!t.isEqual(e))throw new R(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class sg{convertValue(e,t="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ps(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Mh(Qe(e.latitude),Qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hm(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(oc(e));default:return null}}convertTimestamp(e){const t=ri(e);return new He(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Te.fromString(e);J(TE(r));const i=new si(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(t)||Ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class RF extends sg{constructor(e){super(),this.firestore=e}convertBytes(e){return new rr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends pc{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ka extends br{data(e={}){return super.data(e)}}class ui{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ui(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ka(this._firestore,this._userDataWriter,r.key,r,new Ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new R(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ka(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ui(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ka(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ui(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:NF(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function NF(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}function PT(n,e){return n instanceof br&&e instanceof br?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ui&&e instanceof ui&&n._firestore===e._firestore&&mT(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n){n=Ae(n,qe);const e=Ae(n.firestore,Je);return lT(It(e),n._key).then(t=>og(e,n,t))}class vs extends sg{constructor(e){super(),this.firestore=e}convertBytes(e){return new rr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function PF(n){n=Ae(n,qe);const e=Ae(n.firestore,Je),t=It(e),r=new vs(e);return J2(t,n._key).then(i=>new br(e,r,n._key,i,new Ui(i!==null&&i.hasLocalMutations,!0),n.converter))}function DF(n){n=Ae(n,qe);const e=Ae(n.firestore,Je);return lT(It(e),n._key,{source:"server"}).then(t=>og(e,n,t))}function Hh(n){n=Ae(n,Nt);const e=Ae(n.firestore,Je),t=It(e),r=new vs(e);return ST(n._query),uT(t,n._query).then(i=>new ui(e,r,n,i))}function OF(n){n=Ae(n,Nt);const e=Ae(n.firestore,Je),t=It(e),r=new vs(e);return Z2(t,n._query).then(i=>new ui(e,r,n,i))}function LF(n){n=Ae(n,Nt);const e=Ae(n.firestore,Je),t=It(e),r=new vs(e);return uT(t,n._query,{source:"server"}).then(i=>new ui(e,r,n,i))}function Iw(n,e,t){n=Ae(n,qe);const r=Ae(n.firestore,Je),i=zh(n.converter,e,t);return Qc(r,[Uh(gs(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ze.none())])}function Ew(n,e,t,...r){n=Ae(n,qe);const i=Ae(n.firestore,Je),s=gs(i);let o;return o=typeof(e=ie(e))=="string"||e instanceof li?Zm(s,"updateDoc",n._key,e,t,r):Jm(s,"updateDoc",n._key,e),Qc(i,[o.toMutation(n._key,ze.exists(!0))])}function MF(n){return Qc(Ae(n.firestore,Je),[new Fo(n._key,ze.none())])}function OT(n,e){const t=Ae(n.firestore,Je),r=fc(n),i=zh(n.converter,e);return Qc(t,[Uh(gs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ze.exists(!1))]).then(()=>r)}function LT(n,...e){var t,r,i;n=ie(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Mf(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof qe)l=Ae(n.firestore,Je),u=Lo(n._key.path),c={next:h=>{e[o]&&e[o](og(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Ae(n,Nt);l=Ae(h.firestore,Je),u=h._query;const d=new vs(l);c={next:p=>{e[o]&&e[o](new ui(l,d,h,p))},error:e[o+1],complete:e[o+2]},ST(n._query)}return function(h,d,p,y){const v=new Dh(y),w=new $m(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Mm(await fo(h),w)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>Fm(await fo(h),w))}}(It(l),u,a,c)}function FF(n,e){return eF(It(n=Ae(n,Je)),Mf(e)?e:{next:e})}function Qc(n,e){return function(t,r){const i=new yt;return t.asyncQueue.enqueueAndForget(async()=>k2(await Qm(t),r,i)),i.promise}(It(n),e)}function og(n,e,t){const r=t.docs.get(e._key),i=new vs(n);return new br(n,i,e._key,r,new Ui(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const UF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=gs(e)}set(e,t,r){this._verifyNotCommitted();const i=zr(e,this._firestore),s=zh(i.converter,t,r),o=Uh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ze.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=zr(e,this._firestore);let o;return o=typeof(t=ie(t))=="string"||t instanceof li?Zm(this._dataReader,"WriteBatch.update",s._key,t,r,i):Jm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,ze.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=zr(e,this._firestore);return this._mutations=this._mutations.concat(new Fo(t._key,ze.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function zr(n,e){if((n=ie(n)).firestore!==e)throw new R(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VF extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=gs(e)}get(e){const t=zr(e,this._firestore),r=new RF(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return W();const s=i[0];if(s.isFoundDocument())return new pc(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new pc(this._firestore,r,t._key,null,t.converter);throw W()})}set(e,t,r){const i=zr(e,this._firestore),s=zh(i.converter,t,r),o=Uh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=zr(e,this._firestore);let o;return o=typeof(t=ie(t))=="string"||t instanceof li?Zm(this._dataReader,"Transaction.update",s._key,t,r,i):Jm(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=zr(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=zr(e,this._firestore),r=new vs(this._firestore);return super.get(e).then(i=>new br(this._firestore,r,t._key,i._document,new Ui(!1,!1),t.converter))}}function BF(n,e,t){n=Ae(n,Je);const r=Object.assign(Object.assign({},UF),t);return function(i){if(i.maxAttempts<1)throw new R(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new yt;return i.asyncQueue.enqueueAndForget(async()=>{const c=await Q2(i);new G2(i.asyncQueue,c,o,s,a).run()}),a.promise}(It(n),i=>e(new VF(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jF(){return new Gc("deleteField")}function qF(){return new Xm("serverTimestamp")}function zF(...n){return new wF("arrayUnion",n)}function HF(...n){return new _F("arrayRemove",n)}function KF(n){return new bF("increment",n)}(function(n,e=!0){(function(t){Oo=t})(Tr),vr(new Pn("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new Je(new iL(t.getProvider("auth-internal")),new cL(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new si(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gn(vv,"3.12.2",n),gn(vv,"3.12.2","esm2017")})();const GF="@firebase/firestore-compat",WF="0.3.11";/**
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
 */function ag(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function xw(){if(!OL())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}class mc{constructor(e){this._delegate=e}static fromBase64String(e){return xw(),new mc(rr.fromBase64String(e))}static fromUint8Array(e){return Tw(),new mc(rr.fromUint8Array(e))}toBase64(){return xw(),this._delegate.toBase64()}toUint8Array(){return Tw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){return QF(n,["next","error","complete"])}function QF(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{enableIndexedDbPersistence(e,t){return cF(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return lF(e._delegate)}clearIndexedDbPersistence(e){return uF(e._delegate)}}class MT{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof si||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ln("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){rF(this._delegate,e,t,r)}enableNetwork(){return dF(this._delegate)}disableNetwork(){return fF(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,dT("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return hF(this._delegate)}onSnapshotsInSync(e){return FF(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new mo(this,po(this._delegate,e))}catch(t){throw Vt(t,"collection()","Firestore.collection()")}}doc(e){try{return new pn(this,fc(this._delegate,e))}catch(t){throw Vt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new $t(this,iF(this._delegate,e))}catch(t){throw Vt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return BF(this._delegate,t=>e(new FT(this,t)))}batch(){return It(this._delegate),new UT(new $F(this._delegate,e=>Qc(this._delegate,e)))}loadBundle(e){return pF(this._delegate,e)}namedQuery(e){return mF(this._delegate,e).then(t=>t?new $t(this,t):null)}}class Kh extends sg{constructor(e){super(),this.firestore=e}convertBytes(e){return new mc(new rr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return pn.forKey(t,this.firestore,null)}}function XF(n){eL(n)}class FT{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Kh(e)}get(e){const t=$i(e);return this._delegate.get(t).then(r=>new gc(this._firestore,new br(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=$i(e);return r?(ag("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=$i(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=$i(e);return this._delegate.delete(t),this}}class UT{constructor(e){this._delegate=e}set(e,t,r){const i=$i(e);return r?(ag("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=$i(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=$i(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class as{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new ka(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new yc(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=as.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new as(e,new Kh(e),t),i.set(t,s)),s}}as.INSTANCES=new WeakMap;class pn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Kh(e)}static forPath(e,t,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new pn(t,new qe(t._delegate,r,new j(e)))}static forKey(e,t,r){return new pn(t,new qe(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new mo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new mo(this.firestore,po(this._delegate,e))}catch(t){throw Vt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ie(e),e instanceof qe?pT(this._delegate,e):!1}set(e,t){t=ag("DocumentReference.set",t);try{return t?Iw(this._delegate,e,t):Iw(this._delegate,e)}catch(r){throw Vt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Ew(this._delegate,e):Ew(this._delegate,e,t,...r)}catch(i){throw Vt(i,"updateDoc()","DocumentReference.update()")}}delete(){return MF(this._delegate)}onSnapshot(...e){const t=$T(e),r=VT(e,i=>new gc(this.firestore,new br(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return LT(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=PF(this._delegate):(e==null?void 0:e.source)==="server"?t=DF(this._delegate):t=DT(this._delegate),t.then(r=>new gc(this.firestore,new br(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new pn(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Vt(n,e,t){return n.message=n.message.replace(e,t),n}function $T(n){for(const e of n)if(typeof e=="object"&&!Uf(e))return e;return{}}function VT(n,e){var t,r;let i;return Uf(n[0])?i=n[0]:Uf(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class gc{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new pn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return PT(this._delegate,e._delegate)}}class yc extends gc{data(e){const t=this._delegate.data(e);return tL(t!==void 0),t}}class $t{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Kh(e)}where(e,t,r){try{return new $t(this.firestore,En(this._delegate,AT(e,t,r)))}catch(i){throw Vt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new $t(this.firestore,En(this._delegate,TF(e,t)))}catch(r){throw Vt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new $t(this.firestore,En(this._delegate,kT(e)))}catch(t){throw Vt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new $t(this.firestore,En(this._delegate,xF(e)))}catch(t){throw Vt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new $t(this.firestore,En(this._delegate,SF(...e)))}catch(t){throw Vt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new $t(this.firestore,En(this._delegate,AF(...e)))}catch(t){throw Vt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new $t(this.firestore,En(this._delegate,kF(...e)))}catch(t){throw Vt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new $t(this.firestore,En(this._delegate,CF(...e)))}catch(t){throw Vt(t,"endAt()","Query.endAt()")}}isEqual(e){return mT(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=OF(this._delegate):(e==null?void 0:e.source)==="server"?t=LF(this._delegate):t=Hh(this._delegate),t.then(r=>new $f(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=$T(e),r=VT(e,i=>new $f(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return LT(this._delegate,t,r)}withConverter(e){return new $t(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class JF{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new yc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class $f{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new $t(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new yc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new JF(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new yc(this._firestore,r))})}isEqual(e){return PT(this._delegate,e._delegate)}}class mo extends $t{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new pn(this.firestore,e):null}doc(e){try{return e===void 0?new pn(this.firestore,fc(this._delegate)):new pn(this.firestore,fc(this._delegate,e))}catch(t){throw Vt(t,"doc()","CollectionReference.doc()")}}add(e){return OT(this._delegate,e).then(t=>new pn(this.firestore,t))}isEqual(e){return pT(this._delegate,e._delegate)}withConverter(e){return new mo(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $i(n){return Ae(n,qe)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(...e){this._delegate=new li(...e)}static documentId(){return new cg(et.keyField().canonicalString())}isEqual(e){return e=ie(e),e instanceof li?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._delegate=e}static serverTimestamp(){const e=qF();return e._methodName="FieldValue.serverTimestamp",new Ri(e)}static delete(){const e=jF();return e._methodName="FieldValue.delete",new Ri(e)}static arrayUnion(...e){const t=zF(...e);return t._methodName="FieldValue.arrayUnion",new Ri(t)}static arrayRemove(...e){const t=HF(...e);return t._methodName="FieldValue.arrayRemove",new Ri(t)}static increment(e){const t=KF(e);return t._methodName="FieldValue.increment",new Ri(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const ZF={Firestore:MT,GeoPoint:Mh,Timestamp:He,Blob:mc,Transaction:FT,WriteBatch:UT,DocumentReference:pn,DocumentSnapshot:gc,Query:$t,QueryDocumentSnapshot:yc,QuerySnapshot:$f,CollectionReference:mo,FieldPath:cg,FieldValue:Ri,setLogLevel:XF,CACHE_SIZE_UNLIMITED:aF};function eU(n,e){n.INTERNAL.registerComponent(new Pn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},ZF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(n){eU(n,(e,t)=>new MT(e,t,new YF)),n.registerVersion(GF,WF)}tU(jt);const nU={apiKey:"AIzaSyB92XCW231iCTqH4TmwITBeQvbLVqneYA8",authDomain:"itemshare-68ae3.firebaseapp.com",projectId:"itemshare-68ae3",storageBucket:"itemshare-68ae3.appspot.com",messagingSenderId:"468617277076",appId:"1:468617277076:web:6c0ce2cd38ad48ca66ce81"};jt.initializeApp(nU);jt.firestore.FieldValue.serverTimestamp;const go=jt.firestore(),Rr=GA("itemshare",{state:()=>({temp:1,myUserUid:localStorage.getItem("useruid")||null,myProfile:{firstName:"",lastName:"",image:"",location:""},editProfile:{id:9,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},sampleProfiles:[{id:0,firstname:"Isaac",lastname:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},{id:1,firstname:"John",lastname:"Smith",image:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",location:"Baybay City"},{id:2,firstname:"Emily",lastname:"Johnson",image:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",location:"Tacloban City"},{id:3,firstname:"David",lastname:"Brown",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Calbayog City"},{id:4,firstname:"Sarah",lastname:"Davis",image:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",location:"Tacloban City"},{id:5,firstname:"Michael",lastname:"Wilson",image:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",location:"Ormoc City"},{id:6,firstname:"Jessica",lastname:"Thompson",image:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",location:"Maasin City"},{id:7,firstname:"Christopher",lastname:"Martinez",image:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",location:"Tacloban City"},{id:8,firstname:"Megan",lastname:"Taylor",image:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",location:"Calbayog City"}],rentedItems:[],sampleItems:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",ownerId:0},{itemId:2,itemName:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",ownerId:1},{itemId:3,itemName:"Cushion set A",location:"Maasin City",rentAmount:"50.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",ownerId:2},{itemId:4,name:"Table",location:"Ormoc City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",ownerId:3},{itemId:5,itemName:"Chair",location:"Sogod, Southern Leyte",rentAmount:"75.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",ownerId:4},{itemId:6,itemName:"Bookshelf",location:"Biliran",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",ownerId:5},{itemId:7,itemName:"Sofa",location:"Ormoc City",rentAmount:"250.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",ownerId:6},{itemId:8,itemName:"Dining Table",location:"Baybay City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",ownerId:7},{itemId:9,itemName:"Kitchen Cabinet",location:"Maasin, Southern Leyte",rentAmount:"220.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",ownerId:8},{itemId:10,itemName:"Desk",location:"Tacloban City",rentAmount:"120.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",ownerId:0},{itemId:11,itemName:"Bed Frame",location:"Ormoc City",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",ownerId:1},{itemId:12,itemName:"Mattress",location:"Baybay City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",ownerId:2},{itemId:13,itemName:"Wardrobe",location:"Tacloban City",rentAmount:"180.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",ownerId:3},{itemId:14,itemName:"Television",location:"Maasin, Southern Leyte",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",ownerId:4},{itemId:15,itemName:"Coffee Table",location:"Ormoc City",rentAmount:"90.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",ownerId:5},{itemId:16,itemName:"Side Table",location:"Baybay City",rentAmount:"60.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",ownerId:6},{itemId:17,itemName:"Dresser",location:"Tacloban City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",ownerId:7},{itemId:18,itemName:"Armchair",location:"Maasin, Southern Leyte",rentAmount:"120.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",ownerId:8}],sampleConvos:[{username:"John Doe",lastMessage:"Sample message"}]}),getters:{tempGetter(n){return n.temp},productsCheaperThan(n){return e=>n.products.filter(t=>t.price<e)},itemsInRange(n){return(e,t)=>n.sampleItems.slice(e,t)},itemById(n){return e=>n.sampleItems.find(t=>t.id==e)},loadedProfile(n){return e=>n.sampleProfiles[e]},loggedInUser(n){return n.myUserUid}},actions:{async initMyProfile(){jt.auth().onAuthStateChanged(async n=>{if(n)this.myUserUid=n.uid,this.myProfile=await this.loadProfile(n.uid);else return this.useruid=null,{}})},async loadProfile(n){const e=await DT(fc(go,"users",n));if(e.exists())return{firstName:e.data().firstName,lastName:e.data().lastName,location:e.data().location,image:e.data().image}},async login(n,e){if(n!==""&&e!=="")try{return jt.auth().signInWithEmailAndPassword(n,e).then(t=>(this.myUserUid=t.user.uid,localStorage.setItem("useruid",this.myUserUid),!0))}catch(t){switch(t.code){case"auth/invalid-email":throw"Invalid email";case"auth/user-not-found":throw"No account with that email was found";case"auth/wrong-password":throw"Incorrect password";default:throw t.code}}else throw"Please fill out all the fields!"},async loadItems(n=12,e=""){let t=En(po(go,"items"));e&&(t=En(t,AT("ownerId","==",e))),t=En(t,kT(n));const r=await Hh(t),i=[];return r.forEach(s=>{const o={itemId:s.id,itemName:s.data().itemName,location:s.data().location,rentAmount:s.data().rentAmount,rentRate:s.data().rentRate,image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"};i.push(o)}),i},searchItem(){return!0},async logout(){try{await jt.auth().signOut(),this.myUserUid=null,localStorage.removeItem("useruid")}catch(n){throw n}}}}),rU={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-white p-8"},iU=["onSubmit"],sU=f("h1",null,"Login",-1),oU={class:"pt-2"},aU={class:"pt-2"},cU=f("button",{class:"rounded-xl bg-green-800 px-5 py-3 text-white"}," Login ",-1),lU={__name:"LoginView",setup(n){const e=Xu(),t=Rr();let r=Y(!1),i=Y("");const s=Y("hidol@gmail.com"),o=Y("iloveyou143");async function a(){try{await t.login(s.value,o.value)&&e.push("/home")}catch(c){r.value=!0,i.value=c}}return(c,l)=>{const u=So("RouterLink");return oe(),pe("div",rU,[f("form",{class:"flex max-w-full flex-col gap-2",onSubmit:yr(a,["stop","prevent"])},[sU,Oe(f("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>s.value=h),type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Email"},null,512),[[lt,s.value]]),Oe(f("input",{"onUpdate:modelValue":l[1]||(l[1]=h=>o.value=h),type:"password",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Password"},null,512),[[lt,o.value]]),Oe(f("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},Le(he(i)),513),[[Us,he(r)]]),f("p",oU,[re(u,{to:"/forgot-password",class:"underline"},{default:Ye(()=>[we("Forgot Password?")]),_:1})]),f("p",aU,[we(" New here? "),re(u,{to:"/register",class:"underline"},{default:Ye(()=>[we("Create an account!")]),_:1})]),cU],40,iU)])}}},uU={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-white p-8"},hU=["onSubmit"],dU=f("h1",null,"Create an account",-1),fU={class:"flex flex-col gap-2 xl:flex-row xl:gap-8"},pU={class:"flex basis-1/2 flex-col gap-2"},mU=f("label",{for:"phone"},"Phone Number",-1),gU=f("button",{class:"rounded-xl border-2 border-green-800 bg-white px-5 py-3 text-green-800"}," Send SMS Code ",-1),yU=f("label",{for:"email"},"Email Address",-1),vU=f("label",{for:"fname"},"First Name",-1),wU=f("label",{for:"lname"},"Last Name",-1),_U=f("label",{for:"fname"},"Gender",-1),bU=f("option",null,"Male",-1),IU=f("option",null,"Female",-1),EU=f("option",null,"Others",-1),TU=[bU,IU,EU],xU={class:"flex basis-1/2 flex-col gap-2"},SU=f("label",{for:"bday"},"Birthday",-1),AU=f("label",{for:"password"},"Password",-1),kU=f("label",{for:"confirm password"},"Confirm Password",-1),CU={class:"text-sm"},RU=f("span",null," I agree to the ",-1),NU=f("button",{class:"rounded-xl bg-green-800 px-5 py-3 text-white"}," CREATE ACCOUNT ",-1),PU={__name:"RegisterView",setup(n){const e=Xu(),t=Y(""),r=Y(""),i=Y(""),s=Y(""),o=Y("Select"),a=Y(""),c=Y(""),l=Y(""),u=Y(!1);let h=Y(!1),d=Y("");const p=async()=>{try{if(t.value!==""&&r.value!==""&&i.value!==""&&s.value!==""&&o.value!=="Select"&&a.value!==""&&c.value!==""&&l!=="")if(c.value===l.value)if(u.value){const w=await await(await jt.auth()).createUserWithEmailAndPassword(r.value,c.value);await go.collection("users").doc(w.user.uid).set({firstName:i.value,lastName:s.value,email:r.value,phoneNumber:t.value,gender:o.value,birthday:a.value,location:"unspecified",verified:!1,admin:!1}),e.push("/home");return}else h.value=!0,d.value="Please agree to the terms and conditions.";else h.value=!0,d.value="Password does not match!";else h.value=!0,d.value="Please fill out all the fields!"}catch(y){h.value=!0,d.value=y.message}};return(y,v)=>{const w=So("RouterLink");return oe(),pe("div",uU,[f("form",{class:"flex max-w-full flex-col gap-2",onSubmit:yr(p,["stop","prevent"])},[dU,f("div",fU,[f("div",pU,[mU,Oe(f("input",{"onUpdate:modelValue":v[0]||(v[0]=I=>t.value=I),name:"phone",type:"tel",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Enter your phone number"},null,512),[[lt,t.value]]),gU,yU,Oe(f("input",{"onUpdate:modelValue":v[1]||(v[1]=I=>r.value=I),name:"email",type:"email",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Email"},null,512),[[lt,r.value]]),vU,Oe(f("input",{"onUpdate:modelValue":v[2]||(v[2]=I=>i.value=I),name:"fname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"First Name"},null,512),[[lt,i.value]]),wU,Oe(f("input",{"onUpdate:modelValue":v[3]||(v[3]=I=>s.value=I),name:"lname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Last Name"},null,512),[[lt,s.value]]),_U,Oe(f("select",{"onUpdate:modelValue":v[4]||(v[4]=I=>o.value=I),name:"fname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-yellow-700",placeholder:"Gender"},TU,512),[[NA,o.value]])]),f("div",xU,[SU,Oe(f("input",{"onUpdate:modelValue":v[5]||(v[5]=I=>a.value=I),name:"bday",type:"date",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-yellow-700"},null,512),[[lt,a.value]]),AU,Oe(f("input",{"onUpdate:modelValue":v[6]||(v[6]=I=>c.value=I),name:"password",type:"password",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Password"},null,512),[[lt,c.value]]),kU,Oe(f("input",{"onUpdate:modelValue":v[7]||(v[7]=I=>l.value=I),name:"confirm password",type:"password",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Confirm Password"},null,512),[[lt,l.value]]),Oe(f("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},Le(he(d)),513),[[Us,he(h)]]),f("p",CU,[Oe(f("input",{type:"checkbox",name:"checkbox",id:"checkbox","onUpdate:modelValue":v[8]||(v[8]=I=>u.value=I)},null,512),[[RA,u.value]]),RU,re(w,{to:"/terms-and-conditions",class:"underline"},{default:Ye(()=>[we(" Terms and Conditions ")]),_:1})]),NU,re(w,{to:"/login",class:"rounded-xl border-2 border-green-800 bg-white px-5 py-3 text-center text-green-800"},{default:Ye(()=>[we(" GO BACK ")]),_:1})])])],40,hU)])}}},DU={class:"whitespace-pre text-green-600"},OU={class:"material-icons-outlined"},Vi={__name:"StarRating",props:{value:{default:0}},setup(n){return(e,t)=>(oe(),pe("p",DU,[(oe(),pe(Ke,null,Yn(5,r=>f("span",OU,Le(r<n.value?"star":"grade"),1)),64))]))}},LU={class:"rounded-lg shadow-md shadow-gray-400 overflow-hidden hidden z-50 bg-white",id:"dropdownNotifications"},MU={class:"h-64 w-full md:w-96 flex flex-col","aria-labelledby":"dropdownNotificationsButton"},FU=f("h2",{class:"font-bold px-3 py-2 shadow-sm shadow-gray-400 z-10 text-green-600"}," NOTIFICATIONS ",-1),UU={class:"overflow-y-auto bg-green-50"},$U={class:"flex flex-col gap-1 p-2"},VU={class:"p-2 text-sm shadow-sm bg-white shadow-gray-400 text-gray-700"},BU={__name:"NotificationsPopup",setup(n){const e=Y([{type:"review",message:'Lorem Dolor gave your "3D Scanner" a rating:',rating:4,time:"JUST NOW"},{type:"review",message:'Lorem Dolor left a review to your "3D Scanner": "Way lami imo item di nani nahu iuli nimo kay ahu ni sunugon human gamit!"',rating:5,time:"24 MINS AGO"},{type:"upcoming",message:'"2D Printer" will be ready for you to pick up in 24 hours.',time:"23 HOURS AGO"},{type:"message",message:"Lorem Dolor chatted you! Be sure to leave a reply.",time:"4 DAYS AGO"}]);return(t,r)=>(oe(),pe("div",LU,[f("div",MU,[FU,f("div",UU,[f("div",$U,[(oe(!0),pe(Ke,null,Yn(e.value,i=>(oe(),pe("article",VU,[f("p",null,Le(i.message),1),i.rating?(oe(),us(Vi,{key:0,value:i.rating},null,8,["value"])):Fs("",!0),f("p",null,Le(i.time),1)]))),256))])])])]))}};var jU=function(){function n(e,t){t===void 0&&(t=[]),this._eventType=e,this._eventFunctions=t}return n.prototype.init=function(){var e=this;this._eventFunctions.forEach(function(t){typeof window<"u"&&window.addEventListener(e._eventType,t)})},n}(),Tu=globalThis&&globalThis.__assign||function(){return Tu=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Tu.apply(this,arguments)},xu={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},BT=function(){function n(e,t){e===void 0&&(e=[]),t===void 0&&(t=xu),this._items=e,this._options=Tu(Tu({},xu),t),this._init()}return n.prototype._init=function(){var e=this;this._items.length&&this._items.map(function(t){t.active&&e.open(t.id),t.triggerEl.addEventListener("click",function(){e.toggle(t.id)})})},n.prototype.getItem=function(e){return this._items.filter(function(t){return t.id===e})[0]},n.prototype.open=function(e){var t,r,i=this,s=this.getItem(e);this._options.alwaysOpen||this._items.map(function(o){var a,c;o!==s&&((a=o.triggerEl.classList).remove.apply(a,i._options.activeClasses.split(" ")),(c=o.triggerEl.classList).add.apply(c,i._options.inactiveClasses.split(" ")),o.targetEl.classList.add("hidden"),o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"))}),(t=s.triggerEl.classList).add.apply(t,this._options.activeClasses.split(" ")),(r=s.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),s.triggerEl.setAttribute("aria-expanded","true"),s.targetEl.classList.remove("hidden"),s.active=!0,s.iconEl&&s.iconEl.classList.add("rotate-180"),this._options.onOpen(this,s)},n.prototype.toggle=function(e){var t=this.getItem(e);t.active?this.close(e):this.open(e),this._options.onToggle(this,t)},n.prototype.close=function(e){var t,r,i=this.getItem(e);(t=i.triggerEl.classList).remove.apply(t,this._options.activeClasses.split(" ")),(r=i.triggerEl.classList).add.apply(r,this._options.inactiveClasses.split(" ")),i.targetEl.classList.add("hidden"),i.triggerEl.setAttribute("aria-expanded","false"),i.active=!1,i.iconEl&&i.iconEl.classList.remove("rotate-180"),this._options.onClose(this,i)},n}();function lg(){document.querySelectorAll("[data-accordion]").forEach(function(n){var e=n.getAttribute("data-accordion"),t=n.getAttribute("data-active-classes"),r=n.getAttribute("data-inactive-classes"),i=[];n.querySelectorAll("[data-accordion-target]").forEach(function(s){if(s.closest("[data-accordion]")===n){var o={id:s.getAttribute("data-accordion-target"),triggerEl:s,targetEl:document.querySelector(s.getAttribute("data-accordion-target")),iconEl:s.querySelector("[data-accordion-icon]"),active:s.getAttribute("aria-expanded")==="true"};i.push(o)}}),new BT(i,{alwaysOpen:e==="open",activeClasses:t||xu.activeClasses,inactiveClasses:r||xu.inactiveClasses})})}typeof window<"u"&&(window.Accordion=BT,window.initAccordions=lg);var Su=globalThis&&globalThis.__assign||function(){return Su=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Su.apply(this,arguments)},Sw={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},jT=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=Sw),this._targetEl=e,this._triggerEl=t,this._options=Su(Su({},Sw),r),this._visible=!1,this._init()}return n.prototype._init=function(){var e=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){e.toggle()}))},n.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},n.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},n.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},n}();function ug(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(n){var e=n.getAttribute("data-collapse-toggle"),t=document.getElementById(e);t?new jT(t,n):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))})}typeof window<"u"&&(window.Collapse=jT,window.initCollapses=ug);var Ni=globalThis&&globalThis.__assign||function(){return Ni=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Ni.apply(this,arguments)},Bl={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},qT=function(){function n(e,t){e===void 0&&(e=[]),t===void 0&&(t=Bl),this._items=e,this._options=Ni(Ni(Ni({},Bl),t),{indicators:Ni(Ni({},Bl.indicators),t.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return n.prototype._init=function(){var e=this;this._items.map(function(t){t.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(t,r){t.el.addEventListener("click",function(){e.slideTo(r)})})},n.prototype.getItem=function(e){return this._items[e]},n.prototype.slideTo=function(e){var t=this._items[e],r={left:t.position===0?this._items[this._items.length-1]:this._items[t.position-1],middle:t,right:t.position===this._items.length-1?this._items[0]:this._items[t.position+1]};this._rotate(r),this._setActiveItem(t),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},n.prototype.next=function(){var e=this._getActiveItem(),t=null;e.position===this._items.length-1?t=this._items[0]:t=this._items[e.position+1],this.slideTo(t.position),this._options.onNext(this)},n.prototype.prev=function(){var e=this._getActiveItem(),t=null;e.position===0?t=this._items[this._items.length-1]:t=this._items[e.position-1],this.slideTo(t.position),this._options.onPrev(this)},n.prototype._rotate=function(e){this._items.map(function(t){t.el.classList.add("hidden")}),e.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.left.el.classList.add("-translate-x-full","z-10"),e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-20"),e.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.right.el.classList.add("translate-x-full","z-10")},n.prototype.cycle=function(){var e=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){e.next()},this._intervalDuration))},n.prototype.pause=function(){clearInterval(this._intervalInstance)},n.prototype._getActiveItem=function(){return this._activeItem},n.prototype._setActiveItem=function(e){var t,r,i=this;this._activeItem=e;var s=e.position;this._indicators.length&&(this._indicators.map(function(o){var a,c;o.el.setAttribute("aria-current","false"),(a=o.el.classList).remove.apply(a,i._options.indicators.activeClasses.split(" ")),(c=o.el.classList).add.apply(c,i._options.indicators.inactiveClasses.split(" "))}),(t=this._indicators[s].el.classList).add.apply(t,this._options.indicators.activeClasses.split(" ")),(r=this._indicators[s].el.classList).remove.apply(r,this._options.indicators.inactiveClasses.split(" ")),this._indicators[s].el.setAttribute("aria-current","true"))},n}();function hg(){document.querySelectorAll("[data-carousel]").forEach(function(n){var e=n.getAttribute("data-carousel-interval"),t=n.getAttribute("data-carousel")==="slide",r=[],i=0;n.querySelectorAll("[data-carousel-item]").length&&Array.from(n.querySelectorAll("[data-carousel-item]")).map(function(l,u){r.push({position:u,el:l}),l.getAttribute("data-carousel-item")==="active"&&(i=u)});var s=[];n.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(n.querySelectorAll("[data-carousel-slide-to]")).map(function(l){s.push({position:parseInt(l.getAttribute("data-carousel-slide-to")),el:l})});var o=new qT(r,{defaultPosition:i,indicators:{items:s},interval:e||Bl.interval});t&&o.cycle();var a=n.querySelector("[data-carousel-next]"),c=n.querySelector("[data-carousel-prev]");a&&a.addEventListener("click",function(){o.next()}),c&&c.addEventListener("click",function(){o.prev()})})}typeof window<"u"&&(window.Carousel=qT,window.initCarousels=hg);var Au=globalThis&&globalThis.__assign||function(){return Au=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Au.apply(this,arguments)},Aw={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},zT=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=Aw),this._targetEl=e,this._triggerEl=t,this._options=Au(Au({},Aw),r),this._init()}return n.prototype._init=function(){var e=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){e.hide()})},n.prototype.hide=function(){var e=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){e._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},n}();function dg(){document.querySelectorAll("[data-dismiss-target]").forEach(function(n){var e=n.getAttribute("data-dismiss-target"),t=document.querySelector(e);t?new zT(t,n):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))})}typeof window<"u"&&(window.Dismiss=zT,window.initDismisses=dg);var Xt="top",wn="bottom",_n="right",Jt="left",fg="auto",Yc=[Xt,wn,_n,Jt],yo="start",vc="end",qU="clippingParents",HT="viewport",ra="popper",zU="reference",kw=Yc.reduce(function(n,e){return n.concat([e+"-"+yo,e+"-"+vc])},[]),KT=[].concat(Yc,[fg]).reduce(function(n,e){return n.concat([e,e+"-"+yo,e+"-"+vc])},[]),HU="beforeRead",KU="read",GU="afterRead",WU="beforeMain",QU="main",YU="afterMain",XU="beforeWrite",JU="write",ZU="afterWrite",e$=[HU,KU,GU,WU,QU,YU,XU,JU,ZU];function ir(n){return n?(n.nodeName||"").toLowerCase():null}function dn(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function cs(n){var e=dn(n).Element;return n instanceof e||n instanceof Element}function yn(n){var e=dn(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function pg(n){if(typeof ShadowRoot>"u")return!1;var e=dn(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function t$(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},i=e.attributes[t]||{},s=e.elements[t];!yn(s)||!ir(s)||(Object.assign(s.style,r),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function n$(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],s=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!yn(i)||!ir(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}const r$={name:"applyStyles",enabled:!0,phase:"write",fn:t$,effect:n$,requires:["computeStyles"]};function Zn(n){return n.split("-")[0]}var Wi=Math.max,ku=Math.min,vo=Math.round;function Vf(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function GT(){return!/^((?!chrome|android).)*safari/i.test(Vf())}function wo(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=n.getBoundingClientRect(),i=1,s=1;e&&yn(n)&&(i=n.offsetWidth>0&&vo(r.width)/n.offsetWidth||1,s=n.offsetHeight>0&&vo(r.height)/n.offsetHeight||1);var o=cs(n)?dn(n):window,a=o.visualViewport,c=!GT()&&t,l=(r.left+(c&&a?a.offsetLeft:0))/i,u=(r.top+(c&&a?a.offsetTop:0))/s,h=r.width/i,d=r.height/s;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function mg(n){var e=wo(n),t=n.offsetWidth,r=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:r}}function WT(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&pg(t)){var r=e;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ir(n){return dn(n).getComputedStyle(n)}function i$(n){return["table","td","th"].indexOf(ir(n))>=0}function vi(n){return((cs(n)?n.ownerDocument:n.document)||window.document).documentElement}function Gh(n){return ir(n)==="html"?n:n.assignedSlot||n.parentNode||(pg(n)?n.host:null)||vi(n)}function Cw(n){return!yn(n)||Ir(n).position==="fixed"?null:n.offsetParent}function s$(n){var e=/firefox/i.test(Vf()),t=/Trident/i.test(Vf());if(t&&yn(n)){var r=Ir(n);if(r.position==="fixed")return null}var i=Gh(n);for(pg(i)&&(i=i.host);yn(i)&&["html","body"].indexOf(ir(i))<0;){var s=Ir(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Xc(n){for(var e=dn(n),t=Cw(n);t&&i$(t)&&Ir(t).position==="static";)t=Cw(t);return t&&(ir(t)==="html"||ir(t)==="body"&&Ir(t).position==="static")?e:t||s$(n)||e}function gg(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Ca(n,e,t){return Wi(n,ku(e,t))}function o$(n,e,t){var r=Ca(n,e,t);return r>t?t:r}function QT(){return{top:0,right:0,bottom:0,left:0}}function YT(n){return Object.assign({},QT(),n)}function XT(n,e){return e.reduce(function(t,r){return t[r]=n,t},{})}var a$=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,YT(typeof e!="number"?e:XT(e,Yc))};function c$(n){var e,t=n.state,r=n.name,i=n.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,a=Zn(t.placement),c=gg(a),l=[Jt,_n].indexOf(a)>=0,u=l?"height":"width";if(!(!s||!o)){var h=a$(i.padding,t),d=mg(s),p=c==="y"?Xt:Jt,y=c==="y"?wn:_n,v=t.rects.reference[u]+t.rects.reference[c]-o[c]-t.rects.popper[u],w=o[c]-t.rects.reference[c],I=Xc(s),k=I?c==="y"?I.clientHeight||0:I.clientWidth||0:0,C=v/2-w/2,T=h[p],M=k-d[u]-h[y],O=k/2-d[u]/2+C,$=Ca(T,O,M),K=c;t.modifiersData[r]=(e={},e[K]=$,e.centerOffset=$-O,e)}}function l$(n){var e=n.state,t=n.options,r=t.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||WT(e.elements.popper,i)&&(e.elements.arrow=i))}const u$={name:"arrow",enabled:!0,phase:"main",fn:c$,effect:l$,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function _o(n){return n.split("-")[1]}var h$={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d$(n,e){var t=n.x,r=n.y,i=e.devicePixelRatio||1;return{x:vo(t*i)/i||0,y:vo(r*i)/i||0}}function Rw(n){var e,t=n.popper,r=n.popperRect,i=n.placement,s=n.variation,o=n.offsets,a=n.position,c=n.gpuAcceleration,l=n.adaptive,u=n.roundOffsets,h=n.isFixed,d=o.x,p=d===void 0?0:d,y=o.y,v=y===void 0?0:y,w=typeof u=="function"?u({x:p,y:v}):{x:p,y:v};p=w.x,v=w.y;var I=o.hasOwnProperty("x"),k=o.hasOwnProperty("y"),C=Jt,T=Xt,M=window;if(l){var O=Xc(t),$="clientHeight",K="clientWidth";if(O===dn(t)&&(O=vi(t),Ir(O).position!=="static"&&a==="absolute"&&($="scrollHeight",K="scrollWidth")),O=O,i===Xt||(i===Jt||i===_n)&&s===vc){T=wn;var B=h&&O===M&&M.visualViewport?M.visualViewport.height:O[$];v-=B-r.height,v*=c?1:-1}if(i===Jt||(i===Xt||i===wn)&&s===vc){C=_n;var ae=h&&O===M&&M.visualViewport?M.visualViewport.width:O[K];p-=ae-r.width,p*=c?1:-1}}var _e=Object.assign({position:a},l&&h$),Ue=u===!0?d$({x:p,y:v},dn(t)):{x:p,y:v};if(p=Ue.x,v=Ue.y,c){var De;return Object.assign({},_e,(De={},De[T]=k?"0":"",De[C]=I?"0":"",De.transform=(M.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",De))}return Object.assign({},_e,(e={},e[T]=k?v+"px":"",e[C]=I?p+"px":"",e.transform="",e))}function f$(n){var e=n.state,t=n.options,r=t.gpuAcceleration,i=r===void 0?!0:r,s=t.adaptive,o=s===void 0?!0:s,a=t.roundOffsets,c=a===void 0?!0:a,l={placement:Zn(e.placement),variation:_o(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Rw(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Rw(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const p$={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:f$,data:{}};var yl={passive:!0};function m$(n){var e=n.state,t=n.instance,r=n.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,c=dn(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",t.update,yl)}),a&&c.addEventListener("resize",t.update,yl),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",t.update,yl)}),a&&c.removeEventListener("resize",t.update,yl)}}const g$={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:m$,data:{}};var y$={left:"right",right:"left",bottom:"top",top:"bottom"};function jl(n){return n.replace(/left|right|bottom|top/g,function(e){return y$[e]})}var v$={start:"end",end:"start"};function Nw(n){return n.replace(/start|end/g,function(e){return v$[e]})}function yg(n){var e=dn(n),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function vg(n){return wo(vi(n)).left+yg(n).scrollLeft}function w$(n,e){var t=dn(n),r=vi(n),i=t.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var l=GT();(l||!l&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+vg(n),y:c}}function _$(n){var e,t=vi(n),r=yg(n),i=(e=n.ownerDocument)==null?void 0:e.body,s=Wi(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Wi(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+vg(n),c=-r.scrollTop;return Ir(i||t).direction==="rtl"&&(a+=Wi(t.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function wg(n){var e=Ir(n),t=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+i+r)}function JT(n){return["html","body","#document"].indexOf(ir(n))>=0?n.ownerDocument.body:yn(n)&&wg(n)?n:JT(Gh(n))}function Ra(n,e){var t;e===void 0&&(e=[]);var r=JT(n),i=r===((t=n.ownerDocument)==null?void 0:t.body),s=dn(r),o=i?[s].concat(s.visualViewport||[],wg(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Ra(Gh(o)))}function Bf(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function b$(n,e){var t=wo(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function Pw(n,e,t){return e===HT?Bf(w$(n,t)):cs(e)?b$(e,t):Bf(_$(vi(n)))}function I$(n){var e=Ra(Gh(n)),t=["absolute","fixed"].indexOf(Ir(n).position)>=0,r=t&&yn(n)?Xc(n):n;return cs(r)?e.filter(function(i){return cs(i)&&WT(i,r)&&ir(i)!=="body"}):[]}function E$(n,e,t,r){var i=e==="clippingParents"?I$(n):[].concat(e),s=[].concat(i,[t]),o=s[0],a=s.reduce(function(c,l){var u=Pw(n,l,r);return c.top=Wi(u.top,c.top),c.right=ku(u.right,c.right),c.bottom=ku(u.bottom,c.bottom),c.left=Wi(u.left,c.left),c},Pw(n,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ZT(n){var e=n.reference,t=n.element,r=n.placement,i=r?Zn(r):null,s=r?_o(r):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(i){case Xt:c={x:o,y:e.y-t.height};break;case wn:c={x:o,y:e.y+e.height};break;case _n:c={x:e.x+e.width,y:a};break;case Jt:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var l=i?gg(i):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case yo:c[l]=c[l]-(e[u]/2-t[u]/2);break;case vc:c[l]=c[l]+(e[u]/2-t[u]/2);break}}return c}function wc(n,e){e===void 0&&(e={});var t=e,r=t.placement,i=r===void 0?n.placement:r,s=t.strategy,o=s===void 0?n.strategy:s,a=t.boundary,c=a===void 0?qU:a,l=t.rootBoundary,u=l===void 0?HT:l,h=t.elementContext,d=h===void 0?ra:h,p=t.altBoundary,y=p===void 0?!1:p,v=t.padding,w=v===void 0?0:v,I=YT(typeof w!="number"?w:XT(w,Yc)),k=d===ra?zU:ra,C=n.rects.popper,T=n.elements[y?k:d],M=E$(cs(T)?T:T.contextElement||vi(n.elements.popper),c,u,o),O=wo(n.elements.reference),$=ZT({reference:O,element:C,strategy:"absolute",placement:i}),K=Bf(Object.assign({},C,$)),B=d===ra?K:O,ae={top:M.top-B.top+I.top,bottom:B.bottom-M.bottom+I.bottom,left:M.left-B.left+I.left,right:B.right-M.right+I.right},_e=n.modifiersData.offset;if(d===ra&&_e){var Ue=_e[i];Object.keys(ae).forEach(function(De){var Ft=[_n,wn].indexOf(De)>=0?1:-1,it=[Xt,wn].indexOf(De)>=0?"y":"x";ae[De]+=Ue[it]*Ft})}return ae}function T$(n,e){e===void 0&&(e={});var t=e,r=t.placement,i=t.boundary,s=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,l=c===void 0?KT:c,u=_o(r),h=u?a?kw:kw.filter(function(y){return _o(y)===u}):Yc,d=h.filter(function(y){return l.indexOf(y)>=0});d.length===0&&(d=h);var p=d.reduce(function(y,v){return y[v]=wc(n,{placement:v,boundary:i,rootBoundary:s,padding:o})[Zn(v)],y},{});return Object.keys(p).sort(function(y,v){return p[y]-p[v]})}function x$(n){if(Zn(n)===fg)return[];var e=jl(n);return[Nw(n),e,Nw(e)]}function S$(n){var e=n.state,t=n.options,r=n.name;if(!e.modifiersData[r]._skip){for(var i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,l=t.padding,u=t.boundary,h=t.rootBoundary,d=t.altBoundary,p=t.flipVariations,y=p===void 0?!0:p,v=t.allowedAutoPlacements,w=e.options.placement,I=Zn(w),k=I===w,C=c||(k||!y?[jl(w)]:x$(w)),T=[w].concat(C).reduce(function(nn,rn){return nn.concat(Zn(rn)===fg?T$(e,{placement:rn,boundary:u,rootBoundary:h,padding:l,flipVariations:y,allowedAutoPlacements:v}):rn)},[]),M=e.rects.reference,O=e.rects.popper,$=new Map,K=!0,B=T[0],ae=0;ae<T.length;ae++){var _e=T[ae],Ue=Zn(_e),De=_o(_e)===yo,Ft=[Xt,wn].indexOf(Ue)>=0,it=Ft?"width":"height",ce=wc(e,{placement:_e,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),me=Ft?De?_n:Jt:De?wn:Xt;M[it]>O[it]&&(me=jl(me));var ve=jl(me),Et=[];if(s&&Et.push(ce[Ue]<=0),a&&Et.push(ce[me]<=0,ce[ve]<=0),Et.every(function(nn){return nn})){B=_e,K=!1;break}$.set(_e,Et)}if(K)for(var tn=y?3:1,zt=function(rn){var We=T.find(function(S){var H=$.get(S);if(H)return H.slice(0,rn).every(function(V){return V})});if(We)return B=We,"break"},st=tn;st>0;st--){var bn=zt(st);if(bn==="break")break}e.placement!==B&&(e.modifiersData[r]._skip=!0,e.placement=B,e.reset=!0)}}const A$={name:"flip",enabled:!0,phase:"main",fn:S$,requiresIfExists:["offset"],data:{_skip:!1}};function Dw(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function Ow(n){return[Xt,_n,wn,Jt].some(function(e){return n[e]>=0})}function k$(n){var e=n.state,t=n.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=wc(e,{elementContext:"reference"}),a=wc(e,{altBoundary:!0}),c=Dw(o,r),l=Dw(a,i,s),u=Ow(c),h=Ow(l);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const C$={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:k$};function R$(n,e,t){var r=Zn(n),i=[Jt,Xt].indexOf(r)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Jt,_n].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function N$(n){var e=n.state,t=n.options,r=n.name,i=t.offset,s=i===void 0?[0,0]:i,o=KT.reduce(function(u,h){return u[h]=R$(h,e.rects,s),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const P$={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:N$};function D$(n){var e=n.state,t=n.name;e.modifiersData[t]=ZT({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const O$={name:"popperOffsets",enabled:!0,phase:"read",fn:D$,data:{}};function L$(n){return n==="x"?"y":"x"}function M$(n){var e=n.state,t=n.options,r=n.name,i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,l=t.rootBoundary,u=t.altBoundary,h=t.padding,d=t.tether,p=d===void 0?!0:d,y=t.tetherOffset,v=y===void 0?0:y,w=wc(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),I=Zn(e.placement),k=_o(e.placement),C=!k,T=gg(I),M=L$(T),O=e.modifiersData.popperOffsets,$=e.rects.reference,K=e.rects.popper,B=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,ae=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),_e=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ue={x:0,y:0};if(O){if(s){var De,Ft=T==="y"?Xt:Jt,it=T==="y"?wn:_n,ce=T==="y"?"height":"width",me=O[T],ve=me+w[Ft],Et=me-w[it],tn=p?-K[ce]/2:0,zt=k===yo?$[ce]:K[ce],st=k===yo?-K[ce]:-$[ce],bn=e.elements.arrow,nn=p&&bn?mg(bn):{width:0,height:0},rn=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:QT(),We=rn[Ft],S=rn[it],H=Ca(0,$[ce],nn[ce]),V=C?$[ce]/2-tn-H-We-ae.mainAxis:zt-H-We-ae.mainAxis,Z=C?-$[ce]/2+tn+H+S+ae.mainAxis:st+H+S+ae.mainAxis,be=e.elements.arrow&&Xc(e.elements.arrow),m=be?T==="y"?be.clientTop||0:be.clientLeft||0:0,g=(De=_e==null?void 0:_e[T])!=null?De:0,_=me+V-g-m,x=me+Z-g,A=Ca(p?ku(ve,_):ve,me,p?Wi(Et,x):Et);O[T]=A,Ue[T]=A-me}if(a){var N,G=T==="x"?Xt:Jt,F=T==="x"?wn:_n,U=O[M],D=M==="y"?"height":"width",te=U+w[G],Q=U-w[F],ee=[Xt,Jt].indexOf(I)!==-1,se=(N=_e==null?void 0:_e[M])!=null?N:0,ge=ee?te:U-$[D]-K[D]-se+ae.altAxis,Ce=ee?U+$[D]+K[D]-se-ae.altAxis:Q,ke=p&&ee?o$(ge,U,Ce):Ca(p?ge:te,U,p?Ce:Q);O[M]=ke,Ue[M]=ke-U}e.modifiersData[r]=Ue}}const F$={name:"preventOverflow",enabled:!0,phase:"main",fn:M$,requiresIfExists:["offset"]};function U$(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function $$(n){return n===dn(n)||!yn(n)?yg(n):U$(n)}function V$(n){var e=n.getBoundingClientRect(),t=vo(e.width)/n.offsetWidth||1,r=vo(e.height)/n.offsetHeight||1;return t!==1||r!==1}function B$(n,e,t){t===void 0&&(t=!1);var r=yn(e),i=yn(e)&&V$(e),s=vi(e),o=wo(n,i,t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!t)&&((ir(e)!=="body"||wg(s))&&(a=$$(e)),yn(e)?(c=wo(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=vg(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function j$(n){var e=new Map,t=new Set,r=[];n.forEach(function(s){e.set(s.name,s)});function i(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&i(c)}}),r.push(s)}return n.forEach(function(s){t.has(s.name)||i(s)}),r}function q$(n){var e=j$(n);return e$.reduce(function(t,r){return t.concat(e.filter(function(i){return i.phase===r}))},[])}function z$(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function H$(n){var e=n.reduce(function(t,r){var i=t[r.name];return t[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var Lw={placement:"bottom",modifiers:[],strategy:"absolute"};function Mw(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function K$(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,r=t===void 0?[]:t,i=e.defaultOptions,s=i===void 0?Lw:i;return function(a,c,l){l===void 0&&(l=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Lw,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,p={state:u,setOptions:function(I){var k=typeof I=="function"?I(u.options):I;v(),u.options=Object.assign({},s,u.options,k),u.scrollParents={reference:cs(a)?Ra(a):a.contextElement?Ra(a.contextElement):[],popper:Ra(c)};var C=q$(H$([].concat(r,u.options.modifiers)));return u.orderedModifiers=C.filter(function(T){return T.enabled}),y(),p.update()},forceUpdate:function(){if(!d){var I=u.elements,k=I.reference,C=I.popper;if(Mw(k,C)){u.rects={reference:B$(k,Xc(C),u.options.strategy==="fixed"),popper:mg(C)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(ae){return u.modifiersData[ae.name]=Object.assign({},ae.data)});for(var T=0;T<u.orderedModifiers.length;T++){if(u.reset===!0){u.reset=!1,T=-1;continue}var M=u.orderedModifiers[T],O=M.fn,$=M.options,K=$===void 0?{}:$,B=M.name;typeof O=="function"&&(u=O({state:u,options:K,name:B,instance:p})||u)}}}},update:z$(function(){return new Promise(function(w){p.forceUpdate(),w(u)})}),destroy:function(){v(),d=!0}};if(!Mw(a,c))return p;p.setOptions(l).then(function(w){!d&&l.onFirstUpdate&&l.onFirstUpdate(w)});function y(){u.orderedModifiers.forEach(function(w){var I=w.name,k=w.options,C=k===void 0?{}:k,T=w.effect;if(typeof T=="function"){var M=T({state:u,name:I,instance:p,options:C}),O=function(){};h.push(M||O)}})}function v(){h.forEach(function(w){return w()}),h=[]}return p}}var G$=[g$,O$,p$,r$,P$,A$,F$,u$,C$],_g=K$({defaultModifiers:G$}),$r=globalThis&&globalThis.__assign||function(){return $r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},$r.apply(this,arguments)},vl=globalThis&&globalThis.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))},Pi={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,onShow:function(){},onHide:function(){},onToggle:function(){}},ex=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=Pi),this._targetEl=e,this._triggerEl=t,this._options=$r($r({},Pi),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return n.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},n.prototype._setupEventListeners=function(){var e=this,t=this._getTriggerEvents();this._options.triggerType==="click"&&t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.toggle()})}),this._options.triggerType==="hover"&&(t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){r==="click"?e.toggle():setTimeout(function(){e.show()},e._options.delay)}),e._targetEl.addEventListener(r,function(){e.show()})}),t.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},e._options.delay)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},e._options.delay)})}))},n.prototype._createPopperInstance=function(){return _g(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},n.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(t){e._handleClickOutside(t,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._handleClickOutside=function(e,t){var r=e.target;r!==t&&!t.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},n.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},n.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},n.prototype.isVisible=function(){return this._visible},n.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(e){return $r($r({},e),{modifiers:vl(vl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},n.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(e){return $r($r({},e),{modifiers:vl(vl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},n}();function bg(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(n){var e=n.getAttribute("data-dropdown-toggle"),t=document.getElementById(e);if(t){var r=n.getAttribute("data-dropdown-placement"),i=n.getAttribute("data-dropdown-offset-skidding"),s=n.getAttribute("data-dropdown-offset-distance"),o=n.getAttribute("data-dropdown-trigger"),a=n.getAttribute("data-dropdown-delay");new ex(t,n,{placement:r||Pi.placement,triggerType:o||Pi.triggerType,offsetSkidding:i?parseInt(i):Pi.offsetSkidding,offsetDistance:s?parseInt(s):Pi.offsetDistance,delay:a?parseInt(a):Pi.delay})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}typeof window<"u"&&(window.Dropdown=ex,window.initDropdowns=bg);var Cu=globalThis&&globalThis.__assign||function(){return Cu=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Cu.apply(this,arguments)},Ps={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},jf=function(){function n(e,t){e===void 0&&(e=null),t===void 0&&(t=Ps),this._targetEl=e,this._options=Cu(Cu({},Ps),t),this._isHidden=!0,this._backdropEl=null,this._init()}return n.prototype._init=function(){var e=this;this._targetEl&&this._getPlacementClasses().map(function(t){e._targetEl.classList.add(t)})},n.prototype._createBackdrop=function(){var e;if(this._isHidden){var t=document.createElement("div");t.setAttribute("modal-backdrop",""),(e=t.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(t),this._backdropEl=t}},n.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},n.prototype._setupModalCloseEventListeners=function(){var e=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(t){e._handleOutsideClick(t.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(t){t.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},n.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},n.prototype._handleOutsideClick=function(e){(e===this._targetEl||e===this._backdropEl&&this.isVisible())&&this.hide()},n.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},n.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},n.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},n.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},n.prototype.isVisible=function(){return!this._isHidden},n.prototype.isHidden=function(){return this._isHidden},n}(),wl=function(n,e){return e.some(function(t){return t.id===n})?e.find(function(t){return t.id===n}):null};function Ig(){var n=[];document.querySelectorAll("[data-modal-target]").forEach(function(e){var t=e.getAttribute("data-modal-target"),r=document.getElementById(t);if(r){var i=r.getAttribute("data-modal-placement"),s=r.getAttribute("data-modal-backdrop");wl(t,n)||n.push({id:t,object:new jf(r,{placement:i||Ps.placement,backdrop:s||Ps.backdrop})})}else console.error("Modal with id ".concat(t," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(e){var t=e.getAttribute("data-modal-toggle"),r=document.getElementById(t);if(r){var i=r.getAttribute("data-modal-placement"),s=r.getAttribute("data-modal-backdrop"),o=wl(t,n);o||(o={id:t,object:new jf(r,{placement:i||Ps.placement,backdrop:s||Ps.backdrop})},n.push(o)),e.addEventListener("click",function(){o.object.toggle()})}else console.error("Modal with id ".concat(t," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(e){var t=e.getAttribute("data-modal-show"),r=document.getElementById(t);if(r){var i=wl(t,n);i?e.addEventListener("click",function(){i.object.isHidden&&i.object.show()}):console.error("Modal with id ".concat(t," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(t," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(e){var t=e.getAttribute("data-modal-hide"),r=document.getElementById(t);if(r){var i=wl(t,n);i?e.addEventListener("click",function(){i.object.isVisible&&i.object.hide()}):console.error("Modal with id ".concat(t," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(t," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}typeof window<"u"&&(window.Modal=jf,window.initModals=Ig);var Ru=globalThis&&globalThis.__assign||function(){return Ru=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Ru.apply(this,arguments)},Di={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},tx=function(){function n(e,t){e===void 0&&(e=null),t===void 0&&(t=Di),this._targetEl=e,this._options=Ru(Ru({},Di),t),this._visible=!1,this._init()}return n.prototype._init=function(){var e=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(t){e._targetEl.classList.add(t)}),document.addEventListener("keydown",function(t){t.key==="Escape"&&e.isVisible()&&e.hide()})},n.prototype.hide=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(t){e._targetEl.classList.remove(t)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(t){e._targetEl.classList.add(t)})):(this._getPlacementClasses(this._options.placement).active.map(function(t){e._targetEl.classList.remove(t)}),this._getPlacementClasses(this._options.placement).inactive.map(function(t){e._targetEl.classList.add(t)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},n.prototype.show=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(t){e._targetEl.classList.add(t)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(t){e._targetEl.classList.remove(t)})):(this._getPlacementClasses(this._options.placement).active.map(function(t){e._targetEl.classList.add(t)}),this._getPlacementClasses(this._options.placement).inactive.map(function(t){e._targetEl.classList.remove(t)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},n.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},n.prototype._createBackdrop=function(){var e,t=this;if(!this._visible){var r=document.createElement("div");r.setAttribute("drawer-backdrop",""),(e=r.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(r),r.addEventListener("click",function(){t.hide()})}},n.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},n.prototype._getPlacementClasses=function(e){switch(e){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},n.prototype.isHidden=function(){return!this._visible},n.prototype.isVisible=function(){return this._visible},n}(),_l=function(n,e){if(e.some(function(t){return t.id===n}))return e.find(function(t){return t.id===n})};function Eg(){var n=[];document.querySelectorAll("[data-drawer-target]").forEach(function(e){var t=e.getAttribute("data-drawer-target"),r=document.getElementById(t);if(r){var i=e.getAttribute("data-drawer-placement"),s=e.getAttribute("data-drawer-body-scrolling"),o=e.getAttribute("data-drawer-backdrop"),a=e.getAttribute("data-drawer-edge"),c=e.getAttribute("data-drawer-edge-offset");_l(t,n)||n.push({id:t,object:new tx(r,{placement:i||Di.placement,bodyScrolling:s?s==="true":Di.bodyScrolling,backdrop:o?o==="true":Di.backdrop,edge:a?a==="true":Di.edge,edgeOffset:c||Di.edgeOffset})})}else console.error("Drawer with id ".concat(t," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(e){var t=e.getAttribute("data-drawer-toggle"),r=document.getElementById(t);if(r){var i=_l(t,n);i?e.addEventListener("click",function(){i.object.toggle()}):console.error("Drawer with id ".concat(t," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(t," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(e){var t=e.getAttribute("data-drawer-dismiss")?e.getAttribute("data-drawer-dismiss"):e.getAttribute("data-drawer-hide"),r=document.getElementById(t);if(r){var i=_l(t,n);i?e.addEventListener("click",function(){i.object.hide()}):console.error("Drawer with id ".concat(t," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(t," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(e){var t=e.getAttribute("data-drawer-show"),r=document.getElementById(t);if(r){var i=_l(t,n);i?e.addEventListener("click",function(){i.object.show()}):console.error("Drawer with id ".concat(t," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(t," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}typeof window<"u"&&(window.Drawer=tx,window.initDrawers=Eg);var Nu=globalThis&&globalThis.__assign||function(){return Nu=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Nu.apply(this,arguments)},Fw={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},nx=function(){function n(e,t){e===void 0&&(e=[]),t===void 0&&(t=Fw),this._items=e,this._activeTab=t?this.getTab(t.defaultTabId):null,this._options=Nu(Nu({},Fw),t),this._init()}return n.prototype._init=function(){var e=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(t){t.triggerEl.addEventListener("click",function(){e.show(t.id)})}))},n.prototype.getActiveTab=function(){return this._activeTab},n.prototype._setActiveTab=function(e){this._activeTab=e},n.prototype.getTab=function(e){return this._items.filter(function(t){return t.id===e})[0]},n.prototype.show=function(e,t){var r,i,s=this;t===void 0&&(t=!1);var o=this.getTab(e);o===this._activeTab&&!t||(this._items.map(function(a){var c,l;a!==o&&((c=a.triggerEl.classList).remove.apply(c,s._options.activeClasses.split(" ")),(l=a.triggerEl.classList).add.apply(l,s._options.inactiveClasses.split(" ")),a.targetEl.classList.add("hidden"),a.triggerEl.setAttribute("aria-selected","false"))}),(r=o.triggerEl.classList).add.apply(r,this._options.activeClasses.split(" ")),(i=o.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-selected","true"),o.targetEl.classList.remove("hidden"),this._setActiveTab(o),this._options.onShow(this,o))},n}();function Tg(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(n){var e=[],t=null;n.querySelectorAll('[role="tab"]').forEach(function(r){var i=r.getAttribute("aria-selected")==="true",s={id:r.getAttribute("data-tabs-target"),triggerEl:r,targetEl:document.querySelector(r.getAttribute("data-tabs-target"))};e.push(s),i&&(t=s.id)}),new nx(e,{defaultTabId:t})})}typeof window<"u"&&(window.Tabs=nx,window.initTabs=Tg);var Vr=globalThis&&globalThis.__assign||function(){return Vr=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Vr.apply(this,arguments)},bl=globalThis&&globalThis.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))},Pu={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},rx=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=Pu),this._targetEl=e,this._triggerEl=t,this._options=Vr(Vr({},Pu),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return n.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},n.prototype._setupEventListeners=function(){var e=this,t=this._getTriggerEvents();t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()})}),t.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.hide()})})},n.prototype._createPopperInstance=function(){return _g(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},n.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},n.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(t){t.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},n.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},n.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(t){e._handleClickOutside(t,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._handleClickOutside=function(e,t){var r=e.target;r!==t&&!t.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},n.prototype.isVisible=function(){return this._visible},n.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},n.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Vr(Vr({},e),{modifiers:bl(bl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},n.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Vr(Vr({},e),{modifiers:bl(bl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},n}();function xg(){document.querySelectorAll("[data-tooltip-target]").forEach(function(n){var e=n.getAttribute("data-tooltip-target"),t=document.getElementById(e);if(t){var r=n.getAttribute("data-tooltip-trigger"),i=n.getAttribute("data-tooltip-placement");new rx(t,n,{placement:i||Pu.placement,triggerType:r||Pu.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))})}typeof window<"u"&&(window.Tooltip=rx,window.initTooltips=xg);var Br=globalThis&&globalThis.__assign||function(){return Br=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Br.apply(this,arguments)},Il=globalThis&&globalThis.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))},Na={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},ix=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=Na),this._targetEl=e,this._triggerEl=t,this._options=Br(Br({},Na),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return n.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},n.prototype._setupEventListeners=function(){var e=this,t=this._getTriggerEvents();t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),t.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},100)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},100)})})},n.prototype._createPopperInstance=function(){return _g(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},n.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},n.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(t){t.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},n.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},n.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(t){e._handleClickOutside(t,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._handleClickOutside=function(e,t){var r=e.target;r!==t&&!t.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},n.prototype.isVisible=function(){return this._visible},n.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},n.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Br(Br({},e),{modifiers:Il(Il([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},n.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Br(Br({},e),{modifiers:Il(Il([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},n}();function Sg(){document.querySelectorAll("[data-popover-target]").forEach(function(n){var e=n.getAttribute("data-popover-target"),t=document.getElementById(e);if(t){var r=n.getAttribute("data-popover-trigger"),i=n.getAttribute("data-popover-placement"),s=n.getAttribute("data-popover-offset");new ix(t,n,{placement:i||Na.placement,offset:s?parseInt(s):Na.offset,triggerType:r||Na.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))})}typeof window<"u"&&(window.Popover=ix,window.initPopovers=Sg);var Du=globalThis&&globalThis.__assign||function(){return Du=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Du.apply(this,arguments)},qf={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},sx=function(){function n(e,t,r,i){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=null),i===void 0&&(i=qf),this._parentEl=e,this._triggerEl=t,this._targetEl=r,this._options=Du(Du({},qf),i),this._visible=!1,this._init()}return n.prototype._init=function(){var e=this;if(this._triggerEl){var t=this._getTriggerEventTypes(this._options.triggerType);t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),t.hideEvents.forEach(function(r){e._parentEl.addEventListener(r,function(){e._parentEl.matches(":hover")||e.hide()})})}},n.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},n.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},n.prototype.toggle=function(){this._visible?this.hide():this.show()},n.prototype.isHidden=function(){return!this._visible},n.prototype.isVisible=function(){return this._visible},n.prototype._getTriggerEventTypes=function(e){switch(e){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},n}();function Ag(){document.querySelectorAll("[data-dial-init]").forEach(function(n){var e=n.querySelector("[data-dial-toggle]");if(e){var t=e.getAttribute("data-dial-toggle"),r=document.getElementById(t);if(r){var i=e.getAttribute("data-dial-trigger");new sx(n,e,r,{triggerType:i||qf.triggerType})}else console.error("Dial with id ".concat(t," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(n.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}typeof window<"u"&&(window.Dial=sx,window.initDials=Ag);function ox(){lg(),ug(),hg(),dg(),bg(),Ig(),Eg(),Tg(),xg(),Sg(),Ag()}typeof window<"u"&&(window.initFlowbite=ox);var W$=new jU("load",[lg,ug,hg,dg,bg,Ig,Eg,Tg,xg,Sg,Ag]);W$.init();const Q$={key:0,class:"sticky flex w-full flex-col bg-green-600 text-white shadow-sm shadow-gray-400"},Y$={class:"container mx-auto flex items-center justify-between bg-green-600 px-4 py-2"},X$={class:"flex items-center gap-4"},J$=f("span",{class:"material-icons text-3xl lg:text-base"},"add_box",-1),Z$=f("span",{class:"hidden lg:inline-block"},"CREATE ITEM",-1),eV=f("button",{type:"button",class:"flex gap-1",id:"dropdownDefaultButton","data-dropdown-toggle":"dropdownNotifications","data-dropdown-trigger":"click"},[f("span",{class:"material-icons text-3xl lg:text-base"},"notifications"),f("span",{class:"hidden lg:inline-block"},"NOTIFICATIONS")],-1),tV=f("span",{class:"material-icons text-3xl lg:text-base"},"chat",-1),nV=f("span",{class:"hidden lg:inline-block"},"MESSAGES",-1),rV=["onClick"],iV=f("img",{src:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",alt:"",class:"aspect-square w-10 rounded-full"},null,-1),sV={class:"bg-green-500"},oV={class:"container mx-auto flex flex-col-reverse items-stretch justify-between px-4 lg:flex-row"},aV={key:0,class:"flex scroll-p-12 gap-8 overflow-x-auto whitespace-nowrap px-4 pb-4 lg:py-4"},cV=f("li",null,"NEW",-1),lV=f("li",null,"HOT",-1),uV=f("li",null,"TOP RATED",-1),hV=f("li",null,"KIDS",-1),dV=f("li",null,"MEN",-1),fV=f("li",null,"WOMEN",-1),pV=[cV,lV,uV,hV,dV,fV],mV=f("div",null,null,-1),gV=f("input",{type:"text",name:"",id:"",class:"w-full rounded-l-xl border-none bg-transparent px-4 py-1 text-sm text-black placeholder-yellow-700",placeholder:"Search..."},null,-1),yV=f("button",{class:"material-icons px-2 py-1 text-yellow-700 lg:py-0 lg:text-lg"}," search ",-1),vV={__name:"NavigationBar",setup(n){jt.firestore();const e=Xu(),t=Rr();xo(async()=>{ox(),await t.initMyProfile()});function r(){t.searchItem()&&e.push("/search")}async function i(){try{await t.logout(),e.push("/")}catch(s){alert("Sign Out Error"+s)}}return(s,o)=>["login","register"].includes(s.$route.name)?Fs("",!0):(oe(),pe("header",Q$,[f("nav",Y$,[re(rb),f("ul",X$,[f("li",null,[re(he(Sn),{to:"/create-item",class:"flex gap-1"},{default:Ye(()=>[J$,Z$]),_:1})]),f("li",null,[eV,re(BU)]),f("li",null,[re(he(Sn),{to:"/messages",class:"flex gap-1"},{default:Ye(()=>[tV,nV]),_:1})]),f("li",null,[f("button",{onClick:yr(i,["prevent"])},"LOG OUT",8,rV)]),f("li",null,[re(he(Sn),{to:"/profile"},{default:Ye(()=>[iV]),_:1})]),f("h5",null,Le(he(t).myProfile.firstName+" "+he(t).myProfile.lastName),1)])]),f("section",sV,[f("div",oV,[["home"].includes(s.$route.name)?(oe(),pe("ol",aV,pV)):Fs("",!0),mV,["search"].includes(s.$route.name)?Fs("",!0):(oe(),pe("form",{key:1,class:"my-3 flex rounded-xl border-2 border-yellow-500 bg-yellow-200",onSubmit:o[0]||(o[0]=yr(a=>r(),["stop","prevent"]))},[gV,yV,re(he(Sn),{to:"/search",class:"material-icons py-1 pr-2 text-yellow-700 lg:py-0 lg:text-lg"},{default:Ye(()=>[we("menu")]),_:1})],32))])])]))}},wV={},_V={key:0,class:"bg-green-600 flex flex-col sticky w-full text-white bottom-0 px-4"},bV=f("nav",{class:"flex items-center justify-end container mx-auto py-4 bg-green-600"},[f("p",null,"All Rights Reserved 2023. ®")],-1),IV=[bV];function EV(n,e){return["login","register"].includes(n.$route.name)?Fs("",!0):(oe(),pe("header",_V,IV))}const TV=Ju(wV,[["render",EV]]),xV={class:"flex flex-col h-screen"},SV={class:"basis-full overflow-y-auto"},AV={__name:"HomePageView",setup(n){return(e,t)=>(oe(),pe("div",xV,[re(vV),f("div",SV,[re(he(Ic))]),re(TV)]))}},kV={class:"aspect-square w-full"},CV=["src"],RV={class:"flex flex-col"},NV={class:"text-xs"},PV={class:"text-green-800"},DV=f("span",{class:"text-2xl"},"₱",-1),Ou={__name:"ItemsContainer",props:{gridfor:{type:String,default:""},items:{type:Array,default:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"},{id:2,name:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg"}]}},setup(n){function e(t){switch(t){case"search":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"}}return(t,r)=>(oe(),pe("div",{class:fr(["grid grid-flow-row gap-2 rounded-xl bg-gradient-to-b from-green-500 to-transparent bg-[length:100%_150px] bg-no-repeat p-4",e(n.gridfor)])},[(oe(!0),pe(Ke,null,Yn(n.items,i=>(oe(),us(he(Sn),{to:"/item/"+i.itemId,class:"bg-white p-2 shadow-sm shadow-gray-400"},{default:Ye(()=>[f("div",kV,[f("img",{src:i.image,alt:"",srcset:"",loading:"lazy",class:"object-contain"},null,8,CV)]),f("div",RV,[f("p",null,Le(i.itemName),1),f("p",NV,Le(i.location),1),f("p",PV,[DV,we(Le(i.rentAmount+" - "+i.rentRate),1)])])]),_:2},1032,["to"]))),256))],2))}},OV={class:"container mx-auto flex flex-col gap-8 px-4 py-8"},LV={class:"flex flex-col gap-2"},MV=f("h1",null,"JUST FOR YOU",-1),FV={class:"flex flex-col gap-2"},UV=f("h1",null,"DISCOVER",-1),$V={__name:"HomeView",setup(n){const e=Rr(),t=Y([]);return xo(async()=>{t.value=await e.loadItems()}),(r,i)=>(oe(),pe("main",OV,[f("section",LV,[MV,re(Ou,{items:he(e).itemsInRange(12,18)},null,8,["items"])]),f("section",FV,[UV,re(Ou,{items:t.value},null,8,["items"])])]))}},VV=["onSubmit"],BV=f("h1",null,"Edit Profile",-1),jV={class:"flex flex-col gap-2 p-2 md:gap-4"},qV={class:"flex flex-col gap-4 md:flex-row md:items-start md:gap-8"},zV={class:"flex flex-col"},HV=f("h2",null,"Profile Picture",-1),KV={class:"relative inline-block aspect-square w-32 rounded-sm object-contain"},GV=["src"],WV=f("label",{for:"add-image",class:"material-icons absolute -bottom-2 -right-2 cursor-pointer rounded-lg border-2 border-yellow-500 bg-yellow-200 px-1 py-1 text-yellow-700"}," add_photo_alternate ",-1),QV={class:"flex flex-col gap-2"},YV={class:"flex flex-col"},XV=f("label",{for:"fname"},"First Name",-1),JV={class:"flex flex-col"},ZV=f("label",{for:"lname"},"Last Name",-1),eB={class:"flex flex-col"},tB=f("label",{for:"lname"},"Location",-1),nB={class:"mt-4 flex flex-col justify-end gap-2 px-2 md:flex-row"},rB=f("button",{type:"submit",class:"rounded-lg border-2 border-green-800 bg-green-800 px-5 py-3 text-white"}," Save changes ",-1),iB={__name:"EditProfile",props:{useruid:{default:0},profile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"}}},emits:["close"],setup(n,{emit:e}){const t=n,r=Rr(),i=new FileReader,s=Y(Object.assign({},t.profile));function o(c){let l=c.target.files[0];i.readAsDataURL(l),i.onload=u=>{s.value.image=u.target.result}}function a(){r.editProfile=Object.assign({},s.value),e("close")}return x_(async()=>{s.value=await r.loadProfile(t.useruid)}),(c,l)=>(oe(),pe("form",{action:"#",onSubmit:yr(a,["stop","prevent"])},[BV,f("div",jV,[f("div",qV,[f("div",zV,[HV,f("div",KV,[f("img",{src:s.value.image,alt:"",srcset:"",class:"aspect-square w-32 rounded-lg object-contain"},null,8,GV),WV,f("input",{type:"file",id:"add-image",onChange:l[0]||(l[0]=u=>o(u)),hidden:""},null,32)])]),f("div",QV,[f("div",YV,[XV,Oe(f("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>s.value.firstName=u),name:"fname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700",placeholder:"First Name"},null,512),[[lt,s.value.firstName]])]),f("div",JV,[ZV,Oe(f("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>s.value.lastName=u),name:"lname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700",placeholder:"Last Name"},null,512),[[lt,s.value.lastName]])])])]),f("div",eB,[tB,Oe(f("input",{name:"location","onUpdate:modelValue":l[3]||(l[3]=u=>s.value.location=u),type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700",placeholder:"Current Location"},null,512),[[lt,s.value.location]])])]),f("footer",nB,[rB,f("button",{type:"button",onClick:l[4]||(l[4]=u=>e("close")),class:"rounded-lg border-2 border-green-800 bg-white px-5 py-3 text-green-800"}," Cancel ")])],40,VV))}},sB={class:"container mx-auto flex flex-col gap-8 px-4 py-8"},oB={class:"flex flex-col gap-2 lg:flex-row"},aB={class:"flex basis-9/12 flex-col gap-2 sm:flex-row"},cB={class:"flex basis-4/12 flex-col gap-2 bg-white p-4"},lB=["src"],uB={class:"flex w-full basis-8/12 flex-col justify-between bg-white p-4"},hB={class:"flex flex-wrap items-start justify-between gap-2"},dB={class:"flex items-center gap-2"},fB={class:"text-3xl"},pB={class:"flex"},mB=f("span",{class:"material-icons text-green-600"},"location_on",-1),gB={class:"my-4"},yB=f("h2",null,"Lender Ratings",-1),vB={class:"mb-4 flex gap-4"},wB=f("span",null,"3.0 / 5.0",-1),_B=f("h2",null,"Chat Response Rate",-1),bB={class:"mb-4 flex gap-4"},IB=f("span",null,"4.0 / 5.0",-1),EB={class:"flex flex-col items-start"},TB={class:"flex flex-col gap-2"},xB=f("span",{class:"material-icons"},"forum",-1),SB=f("span",null,"Chat",-1),AB=f("button",{class:"flex items-center justify-center gap-1 rounded-lg border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-yellow-800"},[f("span",{class:"material-icons"},"flag"),f("span",null,"Report user")],-1),kB=cp('<div class="flex basis-3/12 flex-row gap-4 bg-white p-4 lg:flex-col"><div class="basis-1/2 lg:basis-0"><h2>Lended Items</h2><h2 class="text-2xl">542</h2></div><div class="basis-1/2 lg:basis-0"><h2>Rented Items</h2><h2 class="text-2xl">34</h2></div></div>',1),CB={class:"flex flex-col gap-2"},Uw={__name:"ProfileView",setup(n){const e=Rr();var r=fp().params.id||e.myUserUid;const i=Y([]),s=Y({firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"});xo(async()=>{initFlowbite(),s.value=await e.loadProfile(r),i.value=await e.loadItems(12,r)});const o=Y(null);function a(){e.editProfile=s.value,o.value.showModal()}function c(){o.value.close()}return(l,u)=>(oe(),pe(Ke,null,[f("main",sB,[f("section",oB,[f("div",aB,[f("div",cB,[f("img",{src:s.value.image,alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,lB)]),f("div",uB,[f("div",null,[f("div",hB,[f("div",dB,[f("h1",fB,Le(s.value.firstName+" "+s.value.lastName),1),he(r)==he(e).myUserUid?(oe(),pe("button",{key:0,onClick:a,class:"material-icons rounded-md border border-yellow-500 bg-yellow-200 p-0.5 px-1.5 text-base text-yellow-800"}," edit ")):Fs("",!0)]),f("div",pB,[mB,f("span",null,Le(s.value.location),1)])]),f("div",gB,[yB,f("div",vB,[wB,re(Vi,{value:"3"})]),_B,f("div",bB,[IB,re(Vi,{value:"4"})])])]),f("div",EB,[f("div",TB,[re(he(Sn),{to:"/messages/5",class:"flex items-center justify-center gap-1 rounded-lg bg-green-600 px-5 py-3 text-white"},{default:Ye(()=>[xB,SB]),_:1}),AB])])])]),kB]),f("section",CB,[f("h1",null,Le(s.value.firstName+" "+s.value.lastName+"'s Item(s)"),1),re(Ou,{items:i.value},null,8,["items"])])]),f("dialog",{ref_key:"editDialog",ref:o,class:"rounded-xl backdrop:backdrop-brightness-50"},[re(iB,{onClose:c,useruid:he(r),profile:s.value},null,8,["useruid","profile"])],512)],64))}},RB={class:"container mx-auto flex flex-col gap-4 px-4 py-8"},NB={class:"flex flex-row-reverse gap-2"},PB={class:"flex flex-col gap-2 lg:flex-row"},DB={class:"flex basis-3/12 flex-col gap-2 bg-white p-4"},OB=["src"],LB={class:"flex w-full gap-2 overflow-x-auto"},MB=["src","onClick"],FB={class:"flex w-full basis-6/12 flex-col justify-between bg-white p-4"},UB={class:"flex items-start justify-between"},$B=f("span",{class:"rounded-full bg-green-600 px-4 py-1 text-xs font-black text-white"}," AVAILABLE ",-1),VB={class:"my-4"},BB={class:"text-green-600"},jB=f("span",{class:"mr-2 text-2xl"},"₱",-1),qB={class:"flex gap-4"},zB=f("span",null,"4.0 / 5.0",-1),HB={class:"flex"},KB=f("span",{class:"material-icons text-green-600"},"location_on",-1),GB={class:"mt-2 flex flex-col items-start"},WB={class:"flex gap-2"},QB={class:"flex flex-wrap gap-2"},YB={class:"rounded-full border-2 border-yellow-500 bg-yellow-200 px-4 py-1 text-xs text-yellow-700"},XB=f("div",{class:"flex flex-col gap-2"},[f("button",{class:"mt-4 rounded-lg bg-green-600 px-5 py-3 text-white"}," Rent "),f("button",{class:"rounded-lg border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-center text-yellow-800"}," Add to Favorites ")],-1),JB={class:"basis-3/12 bg-white p-4"},ZB=f("h2",null,"Lender",-1),e4={class:"mb-4 flex flex-wrap items-center justify-between gap-2"},t4={class:"flex items-center gap-2"},n4=["src"],r4={class:"whitespace-nowrap"},i4=f("button",{class:"flex items-center gap-1"},[f("span",{class:"material-icons text-green-600"},"forum"),we("Chat ")],-1),s4=f("h2",null,"Lender Ratings",-1),o4={class:"mb-4 flex items-center gap-4"},a4=f("span",null,"4.0 / 5.0",-1),c4=f("h2",null,"Chat Response Rate",-1),l4={class:"mb-4 flex items-center gap-4"},u4=f("span",null,"3.0 / 5.0",-1),h4={class:"flex flex-col gap-2"},d4=cp('<div class="flex flex-col justify-between gap-4 bg-gray-50 p-4 md:flex-row md:items-center"><h1>Item Reviews and Rating</h1><div class="flex flex-wrap items-start gap-4 text-sm sm:text-base md:items-center"><div class="flex items-center gap-1"><span class="material-icons text-green-600">filter_alt</span><span>Filter:</span><select name="" id="" class="text-xs sm:text-base"><option value="">All Star</option></select></div><div class="flex items-center gap-1"><span class="material-icons text-green-600">sort</span><span>Sort:</span><select name="" id="" class="text-xs sm:text-base"><option value="">Relevance</option><option value="">???</option></select></div></div></div>',1),f4={class:"flex flex-col gap-2"},p4={class:"flex flex-col gap-2 bg-white p-4"},m4={class:"flex items-center gap-2"},g4=["src"],y4={class:"flex flex-col"},v4={class:"truncate text-gray-700"},w4=f("p",{class:"py-2"},"user review........................",-1),_4={__name:"ItemDetailView",setup(n){const e=Rr(),t=fp(),r=Y(t.params.id),i=Y(0),s=Y(["https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg","https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg","https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg","https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg"]),o=Y(""),a=Y(""),c=Y(""),l=Y(""),u=Y(""),h=Y(""),d=Y(""),p=Y([]);function y(v){i.value=v}return xo(async()=>{(await Hh(po(go,"items"))).forEach(w=>{r.value==w.id&&(o.value=w.data().ownerFName,a.value=w.data().ownerLName,c.value=w.data().itemName,l.value=w.data().location,u.value=w.data().rentAmount,h.value=w.data().rentRate,d.value=w.data().description,p.value=w.data().tags)})}),(v,w)=>(oe(),pe("main",RB,[f("section",NB,[re(he(Sn),{to:"/home"},{default:Ye(()=>[we("Close X")]),_:1})]),f("section",PB,[f("div",DB,[f("img",{src:s.value[i.value],alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,OB),f("div",LB,[(oe(!0),pe(Ke,null,Yn(s.value,(I,k)=>(oe(),pe("img",{class:"aspect-square h-24 cursor-pointer object-contain",src:I,onClick:C=>y(k),alt:"",srcset:""},null,8,MB))),256))])]),f("div",FB,[f("div",null,[f("div",UB,[f("h1",null,Le(c.value),1),$B]),f("div",VB,[f("p",BB,[jB,we(Le(u.value+" - "+h.value),1)]),f("div",qB,[zB,re(Vi,{value:"4"})]),f("div",HB,[KB,f("span",null,Le(l.value),1)])]),f("p",null,Le(d.value),1)]),f("div",GB,[f("div",WB,[we(" Tags: "),f("ul",QB,[(oe(!0),pe(Ke,null,Yn(p.value,I=>(oe(),pe("li",YB,Le(I),1))),256))])]),XB])]),f("div",JB,[ZB,f("div",e4,[f("div",t4,[f("img",{class:"aspect-square w-12 rounded-full",src:he(e).loadedProfile(1).image,alt:"",srcset:""},null,8,n4),f("span",r4,Le(o.value+" "+a.value),1)]),i4]),s4,f("div",o4,[a4,re(Vi,{value:"4"})]),c4,f("div",l4,[u4,re(Vi,{value:"3"})])])]),f("section",h4,[d4,f("section",f4,[(oe(),pe(Ke,null,Yn(6,I=>f("article",p4,[f("div",m4,[f("img",{class:"aspect-square w-12 rounded-full",src:he(e).loadedProfile(I).image,alt:"",srcset:""},null,8,g4),f("div",y4,[re(Vi,{value:"4"}),f("span",v4,Le(he(e).loadedProfile(I).firstname+" "+he(e).loadedProfile(I).lastname),1)])]),w4])),64))])])]))}},b4={class:"container mx-auto flex h-full flex-row items-stretch gap-4 px-4 py-8"},I4={class:"flex h-full flex-col overflow-hidden"},E4=f("h1",{class:"z-10 px-6 py-4 shadow-sm shadow-gray-300"}," Recent Messages ",-1),T4={class:"overflow-y-auto px-2"},x4=["src"],S4={class:"w-full truncate"},A4={class:"truncate font-black"},k4={class:"truncate text-gray-800"},C4={__name:"MessagesView",setup(n){const e=Y([{id:1,name:"John Smith",avatar:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",message:"Okay, but when?"},{id:2,name:"Emily Johnson",avatar:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",message:"Hi there! I'm interested in renting this item. Can you provide more details about its specifications?"},{id:3,name:"David Brown",avatar:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",message:"I received the package today, and I'm thrilled with the product! It exceeded my expectations."},{id:4,avatar:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",name:"Sarah Davis",message:"Great!"},{id:5,avatar:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",name:"Michael Wilson",message:"Will the item be available by Tuesday?"},{id:6,name:"Jessica Thompson",avatar:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",message:"I just wanted to say thank you for the excellent customer service. I'm impressed with the prompt responses and assistance."},{id:7,name:"Christopher Martinez",avatar:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",message:"👍"},{id:8,name:"Megan Taylor",avatar:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",message:"Look! A placeholder text!"}]);return(t,r)=>(oe(),pe("main",b4,[f("aside",{class:fr(["box-border basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-1/3",["messages"].includes(t.$route.name)?"":"hidden"])},[f("div",I4,[E4,f("div",T4,[(oe(!0),pe(Ke,null,Yn(e.value,i=>(oe(),us(he(Sn),{to:"/messages/"+i.id,class:"my-2 flex gap-2 rounded-2xl p-2","active-class":"bg-yellow-200"},{default:Ye(()=>[f("img",{src:i.avatar,alt:"",class:"aspect-square w-12 rounded-full"},null,8,x4),f("div",S4,[f("p",A4,Le(i.name),1),f("p",k4,Le(i.message),1)])]),_:2},1032,["to"]))),256))])])],2),f("div",{class:fr(["basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-2/3",["messages"].includes(t.$route.name)?"hidden":""])},[re(he(Ic))],2)]))}},R4={class:"container mx-auto flex flex-col gap-4 px-4 py-8 lg:flex-row"},N4=f("aside",{class:"basis-1/3"},[f("div",{class:"box-border flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm shadow-gray-400"},[f("h1",null,"Search for Items"),f("form",{action:"#",method:"get",class:"flex flex-col gap-2"},[f("div",{class:"flex gap-2"},[f("input",{type:"text",name:"",placeholder:"Item name",class:"w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),f("button",{type:"submit",class:"rounded-xl bg-green-700 px-4 py-2 text-white"}," Search ")]),f("div",{class:"flex gap-2"},[f("input",{type:"text",name:"",placeholder:"Min. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),f("input",{type:"text",name:"",placeholder:"Max. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""})]),f("input",{type:"text",placeholder:"Location",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"}),f("input",{type:"text",placeholder:"Tags",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"})]),f("section",null,[f("h2",null,"Category"),f("ul",null,[f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Clothing "),f("ul",{class:"ml-4"},[f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Men")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Women")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Unisex")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Kids")])])]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Appliances "),f("ul",{class:"ml-4"},[f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Kitchen")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Laundry")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Living Room")])])]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Gadgets and Devices "),f("ul",{class:"ml-4"},[f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Smartphones")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Cameras")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),we("Tablets")])])])])])])],-1),P4={__name:"SearchView",setup(n){const e=Rr();return(t,r)=>(oe(),pe("main",R4,[N4,re(Ou,{items:he(e).itemsInRange(4,16),gridfor:"search",class:"basis-2/3"},null,8,["items"])]))}},D4={},O4={class:"h-full flex flex-col justify-center items-center"},L4={class:"text-gray-500"};function M4(n,e){return oe(),pe("div",O4,[f("p",L4,[PS(n.$slots,"default",{},()=>[we("Click a conversation to start")])])])}const F4=Ju(D4,[["render",M4]]),U4={class:"flex h-full flex-col justify-between"},$4={class:"flex items-center justify-between bg-green-600 px-6 py-2 shadow-md shadow-gray-400"},V4={class:"flex gap-2"},B4=["src"],j4={class:"flex flex-col text-white"},q4={class:"font-black"},z4=f("div",{class:"flex items-center gap-1 truncate"},[f("div",{class:"inline-block h-2 w-2 rounded-full bg-green-300"}),f("span",null,"Online")],-1),H4={class:"bg-white px-6 pt-12"},K4=["src"],G4={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4"},W4=f("button",{type:"submit",class:"rounded-xl bg-green-700 px-6 py-2 text-white"}," Send ",-1),Q4={__name:"ConversationView",setup(n){const e=fp(),t=Rr(),r=Y(e.params.id),i=Y(""),s=Y(),o=Y(t.loadedProfile(r.value));Ms(()=>e.params.id,async h=>{o.value=await t.loadedProfile(h)});const a=Y([{user:"me",message:"Hi, with regards to product X, is this item still in good condition?"},{user:"them",message:"Of course! "},{user:"them",message:'We regularly perform "Maintenance Order X" upon return of item to ensure that the product is in a good quality '},{user:"me",message:"Great!"},{user:"me",message:"Will the product be available by Tuesday?"},{user:"them",message:"Yes."},{user:"me",message:"👍"},{user:"them",message:"And by the way, you can try writing in the input field and it will actually send to our convo."}]);function c(){a.value.push({user:"me",message:i.value}),i.value="",s.value.scrollTop=scrollContainer.value.scrollHeight}function l(h){return h+1==a.value.length?!1:a.value[h].user==a.value[h+1].user}function u(h){var d="";return h+1<a.value.length&&a.value[h].user==a.value[h+1].user&&(d+=a.value[h].user=="me"?" rounded-br-none":" rounded-bl-none"),h-1>=0&&a.value[h].user==a.value[h-1].user&&(d+=a.value[h].user=="me"?" rounded-tr-none":" rounded-tl-none"),d+=a.value[h].user=="me"?" bg-green-700 text-white":" bg-gray-300",d}return(h,d)=>(oe(),pe("div",U4,[f("header",$4,[f("div",V4,[f("img",{src:o.value.image,alt:"",class:"aspect-square w-12 rounded-full"},null,8,B4),f("div",j4,[f("p",q4,Le(o.value.firstname+" "+o.value.lastname),1),z4])]),re(he(Sn),{to:"/messages",class:"material-icons text-white"},{default:Ye(()=>[we("close")]),_:1})]),f("main",{class:"flex basis-full flex-col-reverse overflow-y-auto",ref_key:"scrollToElement",ref:s},[f("div",H4,[(oe(!0),pe(Ke,null,Yn(a.value,(p,y)=>(oe(),pe("div",{class:fr([p.user=="me"?"flex-row-reverse":"flex-row","my-1 flex items-end gap-2"])},[f("img",{src:p.user=="me"?"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg":o.value.image,alt:"",class:fr(["aspect-square w-12 rounded-full",l(y)?"opacity-0":""])},null,10,K4),f("div",{class:fr(["max-w-md rounded-3xl px-4 py-3",u(y)])},[f("p",null,Le(p.message),1)],2)],2))),256)),f("section",G4,[f("form",{class:"flex gap-2 rounded-xl bg-amber-400 p-2 shadow-sm shadow-gray-400",onSubmit:d[1]||(d[1]=yr(p=>c(),["prevent"]))},[Oe(f("input",{type:"text",name:"",placeholder:"Enter message...",class:"w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:"","onUpdate:modelValue":d[0]||(d[0]=p=>i.value=p)},null,512),[[lt,i.value]]),W4],32)])])],512)]))}},Y4={class:"bg-white p-8 self-center rounded-3xl flex flex-col overflow-y-auto max-w-full"},X4={class:"successMessage bg-white rounded-md"},J4={class:"py-3 px-5 text-white bg-gray-800 rounded-xl flex flex-col m-auto mt-5"},Z4=["onSubmit"],ej=f("h2",null,"Enter Email that is associated with your account.",-1),tj=f("button",{class:"py-3 px-5 text-white bg-green-800 rounded-xl"}," Reset Password ",-1),nj={__name:"ForgotPasswordView",setup(n){const e=Y("");let t=Y(!1),r=Y(""),i=Y(!1),s=Y("");const o=async()=>{if(e.value!==""){try{await jt.auth().sendPasswordResetEmail(e.value).then(()=>{i.value=!0,s.value="Check your email to reset your password",t.value=!1})}catch(a){i.value=!1,t.value=!0,r.value=a.message,console.log("error")}console.log("success")}else i.value=!1,t.value=!0,r.value="Please enter your email address.";console.log("failed")};return(a,c)=>{const l=So("RouterLink");return oe(),pe("div",Y4,[Oe(f("div",X4,[we(Le(he(s))+" ",1),f("button",J4,[re(l,{to:"/login"},{default:Ye(()=>[we("Close")]),_:1})])],512),[[Us,he(i)]]),Oe(f("form",{onSubmit:yr(o,["stop","prevent"]),class:"flex gap-2 flex-col"},[ej,Oe(f("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Email Address"},null,512),[[lt,e.value]]),Oe(f("div",{class:"errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"},Le(he(r)),513),[[Us,he(t)]]),tj,re(l,{to:"/login",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"},{default:Ye(()=>[we("Back")]),_:1})],40,Z4),[[Us,!he(i)]])])}}};const rj={},ij={class:"bg-white p-8 self-center max-w-full rounded-3xl flex flex-col overflow-y-auto"},sj=cp('<div class="overflow-y-auto max-h-96 text-justify pr-2" data-v-57730d13><h1 data-v-57730d13>Terms and Conditions</h1><h2 data-v-57730d13>Acceptance of Terms</h2><p data-v-57730d13> You accept and agree to be governed by these Terms and Conditions by accessing and using our renting web app (ItemShare). Please don&#39;t use the Platform if you disagree with these terms. </p><h2 data-v-57730d13>User Responsibility</h2><p data-v-57730d13> The Platform provides a platform for people to interact and conduct rental business. The things that are listed on the Platform are not under our ownership or control. </p><p data-v-57730d13> Users are completely responsible for their rental actions, which may include interacting with other users and negotiating and agreeing on rental terms. </p><p data-v-57730d13> Things advertised on the Platform may not be available, in good condition, of sufficient quality, or compliance with the law. Users are in charge of determining if the products are appropriate and trustworthy, and they use them at their own risk. </p><h2 data-v-57730d13>Liability</h2><p data-v-57730d13> We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or connected with the Platform, including but not limited to loss of data, loss of profit, or loss of business opportunities, to the extent permitted by applicable law. </p><p data-v-57730d13> The users undertake to hold us harmless from any claims, demands, or losses resulting from disagreements with other users or other parties. </p><h2 data-v-57730d13>Privacy and Personal Information</h2><p data-v-57730d13> We are dedicated to safeguarding our users&#39; data and privacy. For thorough information on how we gather, utilize, and protect user data, please refer to our Privacy Policy. </p><p data-v-57730d13> Although we will make a reasonable effort to protect user data, we cannot ensure the security of user data sent through the Platform. Users are aware of and agree to this risk. </p><h2 data-v-57730d13>Intellectual Property</h2><p data-v-57730d13> The Platform and its contents (aside from user-generated material) are owned by their respective owners and are covered by intellectual property rights. Without express authorization, Users agree not to use, modify, distribute, or reproduce any aspect of the Platform. </p><h2 data-v-57730d13>Modifications and Termination</h2><p data-v-57730d13> The Platform, together with these Terms and Conditions, is subject to change or termination at any moment with prior notice. </p><p data-v-57730d13> Users are recommended to often review the Terms and Conditions. Any changes made are accepted by continuing to use the Platform. </p></div>',1),oj={class:"flex justify-end gap-2 mt-4"};function aj(n,e){const t=So("RouterLink");return oe(),pe("div",ij,[sj,f("div",oj,[re(t,{to:"/register",class:"py-3 px-5 text-white bg-green-800 rounded-lg"},{default:Ye(()=>[we(" ACCEPT ")]),_:1}),re(t,{to:"/register",class:"py-3 px-5 text-white bg-red-800 rounded-lg"},{default:Ye(()=>[we(" DECLINE ")]),_:1})])])}const cj=Ju(rj,[["render",aj],["__scopeId","data-v-57730d13"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="firebasestorage.googleapis.com",lj="storageBucket",uj=2*60*1e3,hj=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ot{constructor(e,t,r=0){super(kd(e),`Firebase Storage: ${t} (${kd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,or.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sr||(sr={}));function kd(n){return"storage/"+n}function dj(){const n="An unknown error occurred, please check the error payload for server response.";return new or(sr.UNKNOWN,n)}function fj(){return new or(sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pj(){return new or(sr.CANCELED,"User canceled the upload/download.")}function mj(n){return new or(sr.INVALID_URL,"Invalid URL '"+n+"'.")}function gj(n){return new or(sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function $w(n){return new or(sr.INVALID_ARGUMENT,n)}function cx(){return new or(sr.APP_DELETED,"The Firebase app was deleted.")}function yj(n){return new or(sr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=kn.makeFromUrl(e,t)}catch{return new kn(e,"")}if(r.path==="")return r;throw gj(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=t===ax?"(?:storage.googleapis.com|storage.cloud.google.com)":t,w="([^?#]*)",I=new RegExp(`^https?://${v}/${i}/${w}`,"i"),C=[{regex:a,indices:c,postModify:s},{regex:p,indices:y,postModify:l},{regex:I,indices:{bucket:1,path:2},postModify:l}];for(let T=0;T<C.length;T++){const M=C[T],O=M.regex.exec(e);if(O){const $=O[M.indices.bucket];let K=O[M.indices.path];K||(K=""),r=new kn($,K),M.postModify(r);break}}if(r==null)throw mj(e);return r}}class vj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wj(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,n(p,c())},w)}function d(){s&&clearTimeout(s)}function p(w,...I){if(l){d();return}if(w){d(),u.call(null,w,...I);return}if(c()||o){d(),u.call(null,w,...I);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,h(C)}let y=!1;function v(w){y||(y=!0,d(),!l&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},t),v}function _j(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bj(n){return n!==void 0}function Vw(n,e,t,r){if(r<e)throw $w(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw $w(`Invalid value for '${n}'. Expected ${t} or less.`)}function Ij(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lu;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Lu||(Lu={}));/**
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
 */function Ej(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{constructor(e,t,r,i,s,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new El(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Lu.NO_ERROR,c=s.getStatus();if(!a||Ej(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Lu.ABORT;r(!1,new El(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new El(l,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());bj(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=dj();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?cx():pj();o(c)}else{const c=fj();o(c)}};this.canceled_?t(!1,new El(!1,null,!0)):this.backoffId_=wj(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_j(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class El{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function xj(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Sj(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Aj(n,e){e&&(n["X-Firebase-GMPID"]=e)}function kj(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Cj(n,e,t,r,i,s,o=!0){const a=Ij(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return Aj(l,e),xj(l,t),Sj(l,s),kj(l,r),new Tj(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rj(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Nj(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Mu{constructor(e,t){this._service=e,t instanceof kn?this._location=t:this._location=kn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mu(e,t)}get root(){const e=new kn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nj(this._location.path)}get storage(){return this._service}get parent(){const e=Rj(this._location.path);if(e===null)return null;const t=new kn(this._location.bucket,e);return new Mu(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw yj(e)}}function Bw(n,e){const t=e==null?void 0:e[lj];return t==null?null:kn.makeFromBucketSpec(t,n)}class Pj{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ax,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uj,this._maxUploadRetryTime=hj,this._requests=new Set,i!=null?this._bucket=kn.makeFromBucketSpec(i,this._host):this._bucket=Bw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kn.makeFromBucketSpec(this._url,e):this._bucket=Bw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mu(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new vj(cx());{const o=Cj(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const jw="@firebase/storage",qw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dj="storage";function Oj(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Pj(t,r,i,e,Tr)}function Lj(){vr(new Pn(Dj,Oj,"PUBLIC").setMultipleInstances(!0)),gn(jw,qw,""),gn(jw,qw,"esm2017")}Lj();const Mj=["onSubmit"],Fj=f("h1",null,"Create an item",-1),Uj=f("label",{for:"images"},"Add Images",-1),$j={class:"w-full overflow-x-auto bg-red-200 p-4",id:"images"},Vj={class:"flex gap-2"},Bj=["src"],jj=f("label",{for:"add-image",class:"aspect-square h-40 cursor-pointer bg-green-400 py-4 text-center"}," Add image... ",-1),qj=f("label",{for:"fname"},"Item Name",-1),zj=f("label",{for:"fname"},"Location",-1),Hj=f("label",{for:"fname"},"Rent rate",-1),Kj={class:"rent-rate"},Gj=f("h2",null,"Tags",-1),Wj={class:"flex flex-wrap gap-2 border border-black p-2"},Qj={class:"flex items-center gap-1 whitespace-nowrap rounded-md bg-red-300 px-2 py-1"},Yj=["onClick"],Xj=f("label",{for:"fname"},"Description",-1),Jj={class:"mt-4 flex justify-end gap-2"},Zj=f("button",{class:"rounded-lg border-2 border-green-800 bg-green-800 px-5 py-3 text-white"}," CREATE ",-1),eq={__name:"CreateItemView",setup(n){const e=Y(),t=Y(""),r=Y("");xo(()=>{jt.auth().onAuthStateChanged(async O=>{O&&(e.value=O.uid,(await Hh(po(go,"users"))).forEach(K=>{O.uid==K.id&&(t.value=K.data().firstName,r.value=K.data().lastName)}))})});const i=Xu(),s=new FileReader,o=Y([]),a=Y([]);function c(O){let $=O.target.files[0];o.value.push($),s.readAsDataURL($),s.onload=K=>{a.value.push(K.target.result)}}const l=Y(""),u=Y([]);function h(O){u.value.splice(O,1)}function d(){u.value.includes(l.value)||u.value.push(l.value),l.value=""}function p(){l.value.endsWith(",")&&(l.value=l.value.slice(0,-1),d())}const y=Y(""),v=Y(""),w=Y(),I=Y(""),k=Y("");let C=Y(!1),T=Y("");const M=async()=>{try{if(y.value!==""&&v.value!==""&&w.value!==""&&I.value!==""&&u.value!==null&&k.value!=="")try{await OT(po(go,"items"),{ownerId:e.value,ownerFName:t.value,ownerLName:r.value,itemName:y.value,location:v.value,rentAmount:w.value,rentRate:I.value,tags:u.value,description:k.value}),i.push("/home");return}catch(O){C.value=!0,T.value=O.message}else C.value=!0,T.value="Please fill out all the fields!"}catch(O){C.value=!0,T.value=O.message}};return(O,$)=>{const K=So("RouterLink");return oe(),pe("main",null,[f("form",{class:"container mx-auto flex flex-col px-4 py-8",onSubmit:yr(M,["stop","prevent"])},[Fj,f("input",{type:"file",id:"add-image",onChange:$[0]||($[0]=B=>c(B)),hidden:""},null,32),Uj,f("div",$j,[f("div",Vj,[(oe(!0),pe(Ke,null,Yn(a.value,B=>(oe(),pe("img",{class:"aspect-square h-40 gap-2 object-contain",src:B,alt:"",srcset:""},null,8,Bj))),256)),jj])]),qj,Oe(f("input",{"onUpdate:modelValue":$[1]||($[1]=B=>y.value=B),name:"fname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Add an item name"},null,512),[[lt,y.value]]),zj,Oe(f("input",{"onUpdate:modelValue":$[2]||($[2]=B=>v.value=B),name:"fname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Enter location..."},null,512),[[lt,v.value]]),Hj,f("div",Kj,[Oe(f("input",{"onUpdate:modelValue":$[3]||($[3]=B=>w.value=B),name:"fname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Amount"},null,512),[[lt,w.value]]),Oe(f("input",{"onUpdate:modelValue":$[4]||($[4]=B=>I.value=B),name:"fname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"Rate (e.d. per day, per week, per month)"},null,512),[[lt,I.value]])]),Gj,f("div",Wj,[(oe(!0),pe(Ke,null,Yn(u.value,(B,ae)=>(oe(),pe("div",Qj,[f("span",null,Le(B),1),f("button",{class:"material-icons aspect-square rounded-lg bg-red-500 px-1.5 text-xs text-white",onClick:_e=>h(ae)}," close ",8,Yj)]))),256)),Oe(f("input",{type:"text",name:"",id:"",placeholder:"Add a tag...",onInput:$[5]||($[5]=B=>p()),onKeydown:$[6]||($[6]=LA(yr(B=>d(),["prevent"]),["enter"])),"onUpdate:modelValue":$[7]||($[7]=B=>l.value=B),class:"flex-1 border-none py-0"},null,544),[[lt,l.value]])]),Xj,Oe(f("textarea",{"onUpdate:modelValue":$[8]||($[8]=B=>k.value=B),name:"description",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-3 placeholder-yellow-700",placeholder:"A short description on what the item is about"},null,512),[[lt,k.value]]),Oe(f("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},Le(he(T)),513),[[Us,he(C)]]),f("div",Jj,[Zj,re(K,{to:"/home",class:"rounded-lg border-2 border-green-800 bg-white px-5 py-3 text-green-800"},{default:Ye(()=>[we(" CANCEL ")]),_:1})])],40,Mj)])}}},lx=G1({history:h1("/itemshare/"),routes:[{path:"/",component:sk,meta:{requiresAuth:!1},children:[{path:"",name:"getStarted",component:fk},{path:"/login",name:"login",component:lU},{path:"/register",name:"register",component:PU},{path:"/terms-and-conditions",name:"termsAndConditions",component:cj},{path:"/forgot-password",name:"forgotPassword",component:nj}]},{path:"/home",component:AV,meta:{requiresAuth:!0},children:[{path:"",name:"home",component:$V},{path:"/profile/:id",name:"profile",component:Uw},{path:"/profile",name:"myProfile",component:Uw},{path:"/messages",component:C4,children:[{path:"",name:"messages",component:F4},{path:"/messages/:id",name:"conversation",component:Q4}]},{path:"/item/:id",name:"itemDetail",component:_4},{path:"/search",name:"search",component:P4},{path:"/create-item",name:"createItem",component:eq}]}]});lx.beforeEach((n,e,t)=>{const r=Rr();n.meta.requiresAuth&&!r.loggedInUser?t("/"):!n.meta.requiresAuth&&r.loggedInUser?t("/home"):t()});const kg=UA(Q1);kg.use(BA());kg.use(lx);kg.mount("#app");
