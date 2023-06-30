(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hp(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ue={},zs=[],On=()=>{},rS=()=>!1,iS=/^on[^a-z]/,Xu=t=>iS.test(t),dp=t=>t.startsWith("onUpdate:"),vt=Object.assign,fp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sS=Object.prototype.hasOwnProperty,xe=(t,e)=>sS.call(t,e),re=Array.isArray,Hs=t=>Cc(t)==="[object Map]",Ro=t=>Cc(t)==="[object Set]",ry=t=>Cc(t)==="[object Date]",he=t=>typeof t=="function",ht=t=>typeof t=="string",qa=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",gw=t=>Le(t)&&he(t.then)&&he(t.catch),yw=Object.prototype.toString,Cc=t=>yw.call(t),oS=t=>Cc(t).slice(8,-1),vw=t=>Cc(t)==="[object Object]",pp=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ul=hp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ju=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},aS=/-(\w)/g,ar=Ju(t=>t.replace(aS,(e,n)=>n?n.toUpperCase():"")),cS=/\B([A-Z])/g,vs=Ju(t=>t.replace(cS,"-$1").toLowerCase()),Zu=Ju(t=>t.charAt(0).toUpperCase()+t.slice(1)),ud=Ju(t=>t?`on${Zu(t)}`:""),za=(t,e)=>!Object.is(t,e),$l=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ru=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},iu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let iy;const Gd=()=>iy||(iy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mp(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ht(r)?dS(r):mp(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ht(t))return t;if(Le(t))return t}}const lS=/;(?![^(]*\))/g,uS=/:([^]+)/,hS=/\/\*[^]*?\*\//g;function dS(t){const e={};return t.replace(hS,"").split(lS).forEach(n=>{if(n){const r=n.split(uS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function nr(t){let e="";if(ht(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=nr(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pS=hp(fS);function _w(t){return!!t||t===""}function mS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Rc(t[r],e[r]);return n}function Rc(t,e){if(t===e)return!0;let n=ry(t),r=ry(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=qa(t),r=qa(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?mS(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Rc(t[o],e[o]))return!1}}return String(t)===String(e)}function gp(t,e){return t.findIndex(n=>Rc(n,e))}const De=t=>ht(t)?t:t==null?"":re(t)||Le(t)&&(t.toString===yw||!he(t.toString))?JSON.stringify(t,ww,2):String(t),ww=(t,e)=>e&&e.__v_isRef?ww(t,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ro(e)?{[`Set(${e.size})`]:[...e.values()]}:Le(e)&&!re(e)&&!vw(e)?String(e):e;let ln;class bw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ln;try{return ln=this,e()}finally{ln=n}}}on(){ln=this}off(){ln=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Iw(t){return new bw(t)}function gS(t,e=ln){e&&e.active&&e.effects.push(t)}function Ew(){return ln}function yS(t){ln&&ln.cleanups.push(t)}const yp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Tw=t=>(t.w&ni)>0,xw=t=>(t.n&ni)>0,vS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ni},_S=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Tw(i)&&!xw(i)?i.delete(t):e[n++]=i,i.w&=~ni,i.n&=~ni}e.length=n}},su=new WeakMap;let pa=0,ni=1;const Wd=30;let Rn;const Ki=Symbol(""),Qd=Symbol("");class vp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gS(this,r)}run(){if(!this.active)return this.fn();let e=Rn,n=Jr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rn,Rn=this,Jr=!0,ni=1<<++pa,pa<=Wd?vS(this):sy(this),this.fn()}finally{pa<=Wd&&_S(this),ni=1<<--pa,Rn=this.parent,Jr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rn===this?this.deferStop=!0:this.active&&(sy(this),this.onStop&&this.onStop(),this.active=!1)}}function sy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Jr=!0;const Sw=[];function No(){Sw.push(Jr),Jr=!1}function Po(){const t=Sw.pop();Jr=t===void 0?!0:t}function nn(t,e,n){if(Jr&&Rn){let r=su.get(t);r||su.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=yp()),Aw(i)}}function Aw(t,e){let n=!1;pa<=Wd?xw(t)||(t.n|=ni,n=!Tw(t)):n=!t.has(Rn),n&&(t.add(Rn),Rn.deps.push(t))}function br(t,e,n,r,i,s){const o=su.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?pp(n)&&a.push(o.get("length")):(a.push(o.get(Ki)),Hs(t)&&a.push(o.get(Qd)));break;case"delete":re(t)||(a.push(o.get(Ki)),Hs(t)&&a.push(o.get(Qd)));break;case"set":Hs(t)&&a.push(o.get(Ki));break}if(a.length===1)a[0]&&Yd(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Yd(yp(c))}}function Yd(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&oy(r);for(const r of n)r.computed||oy(r)}function oy(t,e){(t!==Rn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function wS(t,e){var n;return(n=su.get(t))==null?void 0:n.get(e)}const bS=hp("__proto__,__v_isRef,__isVue"),kw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qa)),IS=_p(),ES=_p(!1,!0),TS=_p(!0),ay=xS();function xS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let s=0,o=this.length;s<o;s++)nn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){No();const r=Se(this)[e].apply(this,n);return Po(),r}}),t}function SS(t){const e=Se(this);return nn(e,"has",t),e.hasOwnProperty(t)}function _p(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?jS:Ow:e?Pw:Nw).get(r))return r;const o=re(r);if(!t){if(o&&xe(ay,i))return Reflect.get(ay,i,s);if(i==="hasOwnProperty")return SS}const a=Reflect.get(r,i,s);return(qa(i)?kw.has(i):bS(i))||(t||nn(r,"get",i),e)?a:nt(a)?o&&pp(i)?a:a.value:Le(a)?t?Dw(a):Oo(a):a}}const AS=Cw(),kS=Cw(!0);function Cw(t=!1){return function(n,r,i,s){let o=n[r];if(ro(o)&&nt(o)&&!nt(i))return!1;if(!t&&(!ou(i)&&!ro(i)&&(o=Se(o),i=Se(i)),!re(n)&&nt(o)&&!nt(i)))return o.value=i,!0;const a=re(n)&&pp(r)?Number(r)<n.length:xe(n,r),c=Reflect.set(n,r,i,s);return n===Se(s)&&(a?za(i,o)&&br(n,"set",r,i):br(n,"add",r,i)),c}}function CS(t,e){const n=xe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&br(t,"delete",e,void 0),r}function RS(t,e){const n=Reflect.has(t,e);return(!qa(e)||!kw.has(e))&&nn(t,"has",e),n}function NS(t){return nn(t,"iterate",re(t)?"length":Ki),Reflect.ownKeys(t)}const Rw={get:IS,set:AS,deleteProperty:CS,has:RS,ownKeys:NS},PS={get:TS,set(t,e){return!0},deleteProperty(t,e){return!0}},OS=vt({},Rw,{get:ES,set:kS}),wp=t=>t,eh=t=>Reflect.getPrototypeOf(t);function hl(t,e,n=!1,r=!1){t=t.__v_raw;const i=Se(t),s=Se(e);n||(e!==s&&nn(i,"get",e),nn(i,"get",s));const{has:o}=eh(i),a=r?wp:n?Ep:Ha;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function dl(t,e=!1){const n=this.__v_raw,r=Se(n),i=Se(t);return e||(t!==i&&nn(r,"has",t),nn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function fl(t,e=!1){return t=t.__v_raw,!e&&nn(Se(t),"iterate",Ki),Reflect.get(t,"size",t)}function cy(t){t=Se(t);const e=Se(this);return eh(e).has.call(e,t)||(e.add(t),br(e,"add",t,t)),this}function ly(t,e){e=Se(e);const n=Se(this),{has:r,get:i}=eh(n);let s=r.call(n,t);s||(t=Se(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?za(e,o)&&br(n,"set",t,e):br(n,"add",t,e),this}function uy(t){const e=Se(this),{has:n,get:r}=eh(e);let i=n.call(e,t);i||(t=Se(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&br(e,"delete",t,void 0),s}function hy(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&br(t,"clear",void 0,void 0),n}function pl(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Se(o),c=e?wp:t?Ep:Ha;return!t&&nn(a,"iterate",Ki),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function ml(t,e,n){return function(...r){const i=this.__v_raw,s=Se(i),o=Hs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?wp:e?Ep:Ha;return!e&&nn(s,"iterate",c?Qd:Ki),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Lr(t){return function(...e){return t==="delete"?!1:this}}function DS(){const t={get(s){return hl(this,s)},get size(){return fl(this)},has:dl,add:cy,set:ly,delete:uy,clear:hy,forEach:pl(!1,!1)},e={get(s){return hl(this,s,!1,!0)},get size(){return fl(this)},has:dl,add:cy,set:ly,delete:uy,clear:hy,forEach:pl(!1,!0)},n={get(s){return hl(this,s,!0)},get size(){return fl(this,!0)},has(s){return dl.call(this,s,!0)},add:Lr("add"),set:Lr("set"),delete:Lr("delete"),clear:Lr("clear"),forEach:pl(!0,!1)},r={get(s){return hl(this,s,!0,!0)},get size(){return fl(this,!0)},has(s){return dl.call(this,s,!0)},add:Lr("add"),set:Lr("set"),delete:Lr("delete"),clear:Lr("clear"),forEach:pl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ml(s,!1,!1),n[s]=ml(s,!0,!1),e[s]=ml(s,!1,!0),r[s]=ml(s,!0,!0)}),[t,n,e,r]}const[LS,MS,FS,US]=DS();function bp(t,e){const n=e?t?US:FS:t?MS:LS;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(xe(n,i)&&i in r?n:r,i,s)}const $S={get:bp(!1,!1)},VS={get:bp(!1,!0)},BS={get:bp(!0,!1)},Nw=new WeakMap,Pw=new WeakMap,Ow=new WeakMap,jS=new WeakMap;function qS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zS(t){return t.__v_skip||!Object.isExtensible(t)?0:qS(oS(t))}function Oo(t){return ro(t)?t:Ip(t,!1,Rw,$S,Nw)}function HS(t){return Ip(t,!1,OS,VS,Pw)}function Dw(t){return Ip(t,!0,PS,BS,Ow)}function Ip(t,e,n,r,i){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=zS(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Zr(t){return ro(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function ro(t){return!!(t&&t.__v_isReadonly)}function ou(t){return!!(t&&t.__v_isShallow)}function Lw(t){return Zr(t)||ro(t)}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function th(t){return ru(t,"__v_skip",!0),t}const Ha=t=>Le(t)?Oo(t):t,Ep=t=>Le(t)?Dw(t):t;function Mw(t){Jr&&Rn&&(t=Se(t),Aw(t.dep||(t.dep=yp())))}function Fw(t,e){t=Se(t);const n=t.dep;n&&Yd(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function Ee(t){return Uw(t,!1)}function KS(t){return Uw(t,!0)}function Uw(t,e){return nt(t)?t:new GS(t,e)}class GS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:Ha(e)}get value(){return Mw(this),this._value}set value(e){const n=this.__v_isShallow||ou(e)||ro(e);e=n?e:Se(e),za(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ha(e),Fw(this))}}function de(t){return nt(t)?t.value:t}const WS={get:(t,e,n)=>de(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return nt(i)&&!nt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function $w(t){return Zr(t)?t:new Proxy(t,WS)}function QS(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=XS(t,n);return e}class YS{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wS(Se(this._object),this._key)}}function XS(t,e,n){const r=t[e];return nt(r)?r:new YS(t,e,n)}class JS{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new vp(e,()=>{this._dirty||(this._dirty=!0,Fw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Se(this);return Mw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ZS(t,e,n=!1){let r,i;const s=he(t);return s?(r=t,i=On):(r=t.get,i=t.set),new JS(r,i,s||!i,n)}function ei(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){nh(s,e,n)}return i}function Dn(t,e,n,r){if(he(t)){const s=ei(t,e,n,r);return s&&gw(s)&&s.catch(o=>{nh(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Dn(t[s],e,n,r));return i}function nh(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){ei(c,null,10,[t,o,a]);return}}eA(t,n,i,r)}function eA(t,e,n,r=!0){console.error(t)}let Ka=!1,Xd=!1;const Ot=[];let zn=0;const Ks=[];let fr=null,Ci=0;const Vw=Promise.resolve();let Tp=null;function xp(t){const e=Tp||Vw;return t?e.then(this?t.bind(this):t):e}function tA(t){let e=zn+1,n=Ot.length;for(;e<n;){const r=e+n>>>1;Ga(Ot[r])<t?e=r+1:n=r}return e}function Sp(t){(!Ot.length||!Ot.includes(t,Ka&&t.allowRecurse?zn+1:zn))&&(t.id==null?Ot.push(t):Ot.splice(tA(t.id),0,t),Bw())}function Bw(){!Ka&&!Xd&&(Xd=!0,Tp=Vw.then(qw))}function nA(t){const e=Ot.indexOf(t);e>zn&&Ot.splice(e,1)}function rA(t){re(t)?Ks.push(...t):(!fr||!fr.includes(t,t.allowRecurse?Ci+1:Ci))&&Ks.push(t),Bw()}function dy(t,e=Ka?zn+1:0){for(;e<Ot.length;e++){const n=Ot[e];n&&n.pre&&(Ot.splice(e,1),e--,n())}}function jw(t){if(Ks.length){const e=[...new Set(Ks)];if(Ks.length=0,fr){fr.push(...e);return}for(fr=e,fr.sort((n,r)=>Ga(n)-Ga(r)),Ci=0;Ci<fr.length;Ci++)fr[Ci]();fr=null,Ci=0}}const Ga=t=>t.id==null?1/0:t.id,iA=(t,e)=>{const n=Ga(t)-Ga(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qw(t){Xd=!1,Ka=!0,Ot.sort(iA);const e=On;try{for(zn=0;zn<Ot.length;zn++){const n=Ot[zn];n&&n.active!==!1&&ei(n,null,14)}}finally{zn=0,Ot.length=0,jw(),Ka=!1,Tp=null,(Ot.length||Ks.length)&&qw()}}function sA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ue;d&&(i=n.map(f=>ht(f)?f.trim():f)),h&&(i=n.map(iu))}let a,c=r[a=ud(e)]||r[a=ud(ar(e))];!c&&s&&(c=r[a=ud(vs(e))]),c&&Dn(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dn(l,t,6,i)}}function zw(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!he(t)){const c=l=>{const u=zw(l,e,!0);u&&(a=!0,vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Le(t)&&r.set(t,null),null):(re(s)?s.forEach(c=>o[c]=null):vt(o,s),Le(t)&&r.set(t,o),o)}function rh(t,e){return!t||!Xu(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,vs(e))||xe(t,e))}let At=null,Hw=null;function au(t){const e=At;return At=t,Hw=t&&t.type.__scopeId||null,e}function Ge(t,e=At,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ey(-1);const s=au(e);let o;try{o=t(...i)}finally{au(s),r._d&&Ey(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hd(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=t;let _,T;const A=au(t);try{if(n.shapeFlag&4){const E=i||r;_=qn(u.call(E,E,h,s,f,d,g)),T=c}else{const E=e;_=qn(E.length>1?E(s,{attrs:c,slots:a,emit:l}):E(s,null)),T=e.props?c:oA(c)}}catch(E){xa.length=0,nh(E,t,1),_=G(ri)}let k=_;if(T&&v!==!1){const E=Object.keys(T),{shapeFlag:L}=k;E.length&&L&7&&(o&&E.some(dp)&&(T=aA(T,o)),k=io(k,T))}return n.dirs&&(k=io(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),_=k,au(A),_}const oA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xu(n))&&((e||(e={}))[n]=t[n]);return e},aA=(t,e)=>{const n={};for(const r in t)(!dp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cA(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fy(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!rh(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fy(r,o,l):!0:!!o;return!1}function fy(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!rh(n,s))return!0}return!1}function lA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const uA=t=>t.__isSuspense;function hA(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):rA(t)}const gl={};function Gs(t,e,n){return Kw(t,e,n)}function Kw(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ue){var a;const c=Ew()===((a=gt)==null?void 0:a.scope)?gt:null;let l,u=!1,h=!1;if(nt(t)?(l=()=>t.value,u=ou(t)):Zr(t)?(l=()=>t,r=!0):re(t)?(h=!0,u=t.some(E=>Zr(E)||ou(E)),l=()=>t.map(E=>{if(nt(E))return E.value;if(Zr(E))return $i(E);if(he(E))return ei(E,c,2)})):he(t)?e?l=()=>ei(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Dn(t,c,3,[f])}:l=On,e&&r){const E=l;l=()=>$i(E())}let d,f=E=>{d=A.onStop=()=>{ei(E,c,4)}},g;if(Ya)if(f=On,e?n&&Dn(e,c,3,[l(),h?[]:void 0,f]):l(),i==="sync"){const E=rk();g=E.__watcherHandles||(E.__watcherHandles=[])}else return On;let v=h?new Array(t.length).fill(gl):gl;const _=()=>{if(A.active)if(e){const E=A.run();(r||u||(h?E.some((L,U)=>za(L,v[U])):za(E,v)))&&(d&&d(),Dn(e,c,3,[E,v===gl?void 0:h&&v[0]===gl?[]:v,f]),v=E)}else A.run()};_.allowRecurse=!!e;let T;i==="sync"?T=_:i==="post"?T=()=>Kt(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),T=()=>Sp(_));const A=new vp(l,T);e?n?_():v=A.run():i==="post"?Kt(A.run.bind(A),c&&c.suspense):A.run();const k=()=>{A.stop(),c&&c.scope&&fp(c.scope.effects,A)};return g&&g.push(k),k}function dA(t,e,n){const r=this.proxy,i=ht(t)?t.includes(".")?Gw(r,t):()=>r[t]:t.bind(r,r);let s;he(e)?s=e:(s=e.handler,n=e);const o=gt;so(this);const a=Kw(i,s.bind(r),n);return o?so(o):Gi(),a}function Gw(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function $i(t,e){if(!Le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))$i(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)$i(t[n],e);else if(Ro(t)||Hs(t))t.forEach(n=>{$i(n,e)});else if(vw(t))for(const n in t)$i(t[n],e);return t}function Dt(t,e){const n=At;if(n===null)return t;const r=ah(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Ue]=e[s];o&&(he(o)&&(o={mounted:o,updated:o}),o.deep&&$i(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ti(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(No(),Dn(c,n,8,[t.el,a,t,e]),Po())}}function Ww(t,e){return he(t)?(()=>vt({name:t.name},e,{setup:t}))():t}const Ea=t=>!!t.type.__asyncLoader,Qw=t=>t.type.__isKeepAlive;function fA(t,e){Yw(t,"a",e)}function pA(t,e){Yw(t,"da",e)}function Yw(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ih(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Qw(i.parent.vnode)&&mA(r,e,n,i),i=i.parent}}function mA(t,e,n,r){const i=ih(e,t,r,!0);Jw(()=>{fp(r[e],i)},n)}function ih(t,e,n=gt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;No(),so(n);const a=Dn(e,n,t,o);return Gi(),Po(),a});return r?i.unshift(s):i.push(s),s}}const kr=t=>(e,n=gt)=>(!Ya||t==="sp")&&ih(t,(...r)=>e(...r),n),Xw=kr("bm"),Nc=kr("m"),gA=kr("bu"),yA=kr("u"),vA=kr("bum"),Jw=kr("um"),_A=kr("sp"),wA=kr("rtg"),bA=kr("rtc");function IA(t,e=gt){ih("ec",t,e)}const Zw="components";function Pc(t,e){return TA(Zw,t,!0,e)||t}const EA=Symbol.for("v-ndc");function TA(t,e,n=!0,r=!1){const i=At||gt;if(i){const s=i.type;if(t===Zw){const a=ek(s,!1);if(a&&(a===e||a===ar(e)||a===Zu(ar(e))))return s}const o=py(i[t]||s[t],e)||py(i.appContext[t],e);return!o&&r?s:o}}function py(t,e){return t&&(t[e]||t[ar(e)]||t[Zu(ar(e))])}function rr(t,e,n,r){let i;const s=n&&n[r];if(re(t)||ht(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Le(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function eb(t,e,n={},r,i){if(At.isCE||At.parent&&Ea(At.parent)&&At.parent.isCE)return e!=="default"&&(n.name=e),G("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),ie();const o=s&&tb(s(n)),a=_s(Ke,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function tb(t){return t.some(e=>lu(e)?!(e.type===ri||e.type===Ke&&!tb(e.children)):!0)?t:null}const Jd=t=>t?db(t)?ah(t)||t.proxy:Jd(t.parent):null,Ta=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jd(t.parent),$root:t=>Jd(t.root),$emit:t=>t.emit,$options:t=>Ap(t),$forceUpdate:t=>t.f||(t.f=()=>Sp(t.update)),$nextTick:t=>t.n||(t.n=xp.bind(t.proxy)),$watch:t=>dA.bind(t)}),dd=(t,e)=>t!==Ue&&!t.__isScriptSetup&&xe(t,e),xA={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(dd(r,e))return o[e]=1,r[e];if(i!==Ue&&xe(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&xe(l,e))return o[e]=3,s[e];if(n!==Ue&&xe(n,e))return o[e]=4,n[e];Zd&&(o[e]=0)}}const u=Ta[e];let h,d;if(u)return e==="$attrs"&&nn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ue&&xe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,xe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return dd(i,e)?(i[e]=n,!0):r!==Ue&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ue&&xe(t,o)||dd(e,o)||(a=s[0])&&xe(a,o)||xe(r,o)||xe(Ta,o)||xe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function my(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zd=!0;function SA(t){const e=Ap(t),n=t.proxy,r=t.ctx;Zd=!1,e.beforeCreate&&gy(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:_,beforeDestroy:T,beforeUnmount:A,destroyed:k,unmounted:E,render:L,renderTracked:U,renderTriggered:Y,errorCaptured:K,serverPrefetch:W,expose:ce,inheritAttrs:Te,components:Fe,directives:Oe,filters:Ut}=e;if(l&&AA(l,r,null),o)for(const pe in o){const ye=o[pe];he(ye)&&(r[pe]=ye.bind(n))}if(i){const pe=i.call(n,n);Le(pe)&&(t.data=Oo(pe))}if(Zd=!0,s)for(const pe in s){const ye=s[pe],Et=he(ye)?ye.bind(n,n):he(ye.get)?ye.get.bind(n,n):On,sn=!he(ye)&&he(ye.set)?ye.set.bind(n):On,Ht=dn({get:Et,set:sn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:ot=>Ht.value=ot})}if(a)for(const pe in a)nb(a[pe],r,n,pe);if(c){const pe=he(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ye=>{Vl(ye,pe[ye])})}u&&gy(u,t,"c");function oe(pe,ye){re(ye)?ye.forEach(Et=>pe(Et.bind(n))):ye&&pe(ye.bind(n))}if(oe(Xw,h),oe(Nc,d),oe(gA,f),oe(yA,g),oe(fA,v),oe(pA,_),oe(IA,K),oe(bA,U),oe(wA,Y),oe(vA,A),oe(Jw,E),oe(_A,W),re(ce))if(ce.length){const pe=t.exposed||(t.exposed={});ce.forEach(ye=>{Object.defineProperty(pe,ye,{get:()=>n[ye],set:Et=>n[ye]=Et})})}else t.exposed||(t.exposed={});L&&t.render===On&&(t.render=L),Te!=null&&(t.inheritAttrs=Te),Fe&&(t.components=Fe),Oe&&(t.directives=Oe)}function AA(t,e,n=On){re(t)&&(t=ef(t));for(const r in t){const i=t[r];let s;Le(i)?"default"in i?s=bn(i.from||r,i.default,!0):s=bn(i.from||r):s=bn(i),nt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function gy(t,e,n){Dn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function nb(t,e,n,r){const i=r.includes(".")?Gw(n,r):()=>n[r];if(ht(t)){const s=e[t];he(s)&&Gs(i,s)}else if(he(t))Gs(i,t.bind(n));else if(Le(t))if(re(t))t.forEach(s=>nb(s,e,n,r));else{const s=he(t.handler)?t.handler.bind(n):e[t.handler];he(s)&&Gs(i,s,t)}}function Ap(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>cu(c,l,o,!0)),cu(c,e,o)),Le(e)&&s.set(e,c),c}function cu(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&cu(t,s,n,!0),i&&i.forEach(o=>cu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=kA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kA={data:yy,props:vy,emits:vy,methods:ma,computed:ma,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ma,directives:ma,watch:RA,provide:yy,inject:CA};function yy(t,e){return e?t?function(){return vt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function CA(t,e){return ma(ef(t),ef(e))}function ef(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function ma(t,e){return t?vt(Object.create(null),t,e):e}function vy(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:vt(Object.create(null),my(t),my(e??{})):e}function RA(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function rb(){return{app:null,config:{isNativeTag:rS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let NA=0;function PA(t,e){return function(r,i=null){he(r)||(r=vt({},r)),i!=null&&!Le(i)&&(i=null);const s=rb(),o=new Set;let a=!1;const c=s.app={_uid:NA++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ik,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&he(l.install)?(o.add(l),l.install(c,...u)):he(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const d=G(r,i);return d.appContext=s,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ah(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Wa=c;try{return l()}finally{Wa=null}}};return c}}let Wa=null;function Vl(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function bn(t,e,n=!1){const r=gt||At;if(r||Wa){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Wa._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function OA(){return!!(gt||At||Wa)}function DA(t,e,n,r=!1){const i={},s={};ru(s,oh,1),t.propsDefaults=Object.create(null),ib(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:HS(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function LA(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Se(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(rh(t.emitsOptions,d))continue;const f=e[d];if(c)if(xe(s,d))f!==s[d]&&(s[d]=f,l=!0);else{const g=ar(d);i[g]=tf(c,a,g,f,t,!1)}else f!==s[d]&&(s[d]=f,l=!0)}}}else{ib(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!xe(e,h)&&((u=vs(h))===h||!xe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=tf(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!xe(e,h))&&(delete s[h],l=!0)}l&&br(t,"set","$attrs")}function ib(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ul(c))continue;const l=e[c];let u;i&&xe(i,u=ar(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:rh(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=Se(n),l=a||Ue;for(let u=0;u<s.length;u++){const h=s[u];n[h]=tf(i,c,h,l[h],t,!xe(l,h))}}return o}function tf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&he(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(so(i),r=l[n]=c.call(null,e),Gi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===vs(n))&&(r=!0))}return r}function sb(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!he(t)){const u=h=>{c=!0;const[d,f]=sb(h,e,!0);vt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return Le(t)&&r.set(t,zs),zs;if(re(s))for(let u=0;u<s.length;u++){const h=ar(s[u]);_y(h)&&(o[h]=Ue)}else if(s)for(const u in s){const h=ar(u);if(_y(h)){const d=s[u],f=o[h]=re(d)||he(d)?{type:d}:vt({},d);if(f){const g=Iy(Boolean,f.type),v=Iy(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||xe(f,"default"))&&a.push(h)}}}const l=[o,a];return Le(t)&&r.set(t,l),l}function _y(t){return t[0]!=="$"}function wy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function by(t,e){return wy(t)===wy(e)}function Iy(t,e){return re(e)?e.findIndex(n=>by(n,t)):he(e)&&by(e,t)?0:-1}const ob=t=>t[0]==="_"||t==="$stable",kp=t=>re(t)?t.map(qn):[qn(t)],MA=(t,e,n)=>{if(e._n)return e;const r=Ge((...i)=>kp(e(...i)),n);return r._c=!1,r},ab=(t,e,n)=>{const r=t._ctx;for(const i in t){if(ob(i))continue;const s=t[i];if(he(s))e[i]=MA(i,s,r);else if(s!=null){const o=kp(s);e[i]=()=>o}}},cb=(t,e)=>{const n=kp(e);t.slots.default=()=>n},FA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Se(e),ru(e,"_",n)):ab(e,t.slots={})}else t.slots={},e&&cb(t,e);ru(t.slots,oh,1)},UA=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(vt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,ab(e,i)),o=e}else e&&(cb(t,e),o={default:1});if(s)for(const a in i)!ob(a)&&!(a in o)&&delete i[a]};function nf(t,e,n,r,i=!1){if(re(t)){t.forEach((d,f)=>nf(d,e&&(re(e)?e[f]:e),n,r,i));return}if(Ea(r)&&!i)return;const s=r.shapeFlag&4?ah(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ht(l)?(u[l]=null,xe(h,l)&&(h[l]=null)):nt(l)&&(l.value=null)),he(c))ei(c,a,12,[o,u]);else{const d=ht(c),f=nt(c);if(d||f){const g=()=>{if(t.f){const v=d?xe(h,c)?h[c]:u[c]:c.value;i?re(v)&&fp(v,s):re(v)?v.includes(s)||v.push(s):d?(u[c]=[s],xe(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,xe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Kt(g,n)):g()}}}const Kt=hA;function $A(t){return VA(t)}function VA(t,e){const n=Gd();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=On,insertStaticContent:g}=t,v=(m,y,w,x=null,C=null,N=null,z=!1,M=null,F=!!y.dynamicChildren)=>{if(m===y)return;m&&!Xo(m,y)&&(x=S(m),ot(m,C,N,!0),m=null),y.patchFlag===-2&&(F=!1,y.dynamicChildren=null);const{type:O,ref:te,shapeFlag:Q}=y;switch(O){case sh:_(m,y,w,x);break;case ri:T(m,y,w,x);break;case Bl:m==null&&A(y,w,x,z);break;case Ke:Fe(m,y,w,x,C,N,z,M,F);break;default:Q&1?L(m,y,w,x,C,N,z,M,F):Q&6?Oe(m,y,w,x,C,N,z,M,F):(Q&64||Q&128)&&O.process(m,y,w,x,C,N,z,M,F,$)}te!=null&&C&&nf(te,m&&m.ref,N,y||m,!y)},_=(m,y,w,x)=>{if(m==null)r(y.el=a(y.children),w,x);else{const C=y.el=m.el;y.children!==m.children&&l(C,y.children)}},T=(m,y,w,x)=>{m==null?r(y.el=c(y.children||""),w,x):y.el=m.el},A=(m,y,w,x)=>{[m.el,m.anchor]=g(m.children,y,w,x,m.el,m.anchor)},k=({el:m,anchor:y},w,x)=>{let C;for(;m&&m!==y;)C=d(m),r(m,w,x),m=C;r(y,w,x)},E=({el:m,anchor:y})=>{let w;for(;m&&m!==y;)w=d(m),i(m),m=w;i(y)},L=(m,y,w,x,C,N,z,M,F)=>{z=z||y.type==="svg",m==null?U(y,w,x,C,N,z,M,F):W(m,y,C,N,z,M,F)},U=(m,y,w,x,C,N,z,M)=>{let F,O;const{type:te,props:Q,shapeFlag:ee,transition:se,dirs:me}=m;if(F=m.el=o(m.type,N,Q&&Q.is,Q),ee&8?u(F,m.children):ee&16&&K(m.children,F,null,x,C,N&&te!=="foreignObject",z,M),me&&Ti(m,null,x,"created"),Y(F,m,m.scopeId,z,x),Q){for(const ke in Q)ke!=="value"&&!Ul(ke)&&s(F,ke,null,Q[ke],N,m.children,x,C,Ye);"value"in Q&&s(F,"value",null,Q.value),(O=Q.onVnodeBeforeMount)&&jn(O,x,m)}me&&Ti(m,null,x,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&se&&!se.persisted;Ce&&se.beforeEnter(F),r(F,y,w),((O=Q&&Q.onVnodeMounted)||Ce||me)&&Kt(()=>{O&&jn(O,x,m),Ce&&se.enter(F),me&&Ti(m,null,x,"mounted")},C)},Y=(m,y,w,x,C)=>{if(w&&f(m,w),x)for(let N=0;N<x.length;N++)f(m,x[N]);if(C){let N=C.subTree;if(y===N){const z=C.vnode;Y(m,z,z.scopeId,z.slotScopeIds,C.parent)}}},K=(m,y,w,x,C,N,z,M,F=0)=>{for(let O=F;O<m.length;O++){const te=m[O]=M?Br(m[O]):qn(m[O]);v(null,te,y,w,x,C,N,z,M)}},W=(m,y,w,x,C,N,z)=>{const M=y.el=m.el;let{patchFlag:F,dynamicChildren:O,dirs:te}=y;F|=m.patchFlag&16;const Q=m.props||Ue,ee=y.props||Ue;let se;w&&xi(w,!1),(se=ee.onVnodeBeforeUpdate)&&jn(se,w,y,m),te&&Ti(y,m,w,"beforeUpdate"),w&&xi(w,!0);const me=C&&y.type!=="foreignObject";if(O?ce(m.dynamicChildren,O,M,w,x,me,N):z||ye(m,y,M,null,w,x,me,N,!1),F>0){if(F&16)Te(M,y,Q,ee,w,x,C);else if(F&2&&Q.class!==ee.class&&s(M,"class",null,ee.class,C),F&4&&s(M,"style",Q.style,ee.style,C),F&8){const Ce=y.dynamicProps;for(let ke=0;ke<Ce.length;ke++){const at=Ce[ke],kn=Q[at],ks=ee[at];(ks!==kn||at==="value")&&s(M,at,kn,ks,C,m.children,w,x,Ye)}}F&1&&m.children!==y.children&&u(M,y.children)}else!z&&O==null&&Te(M,y,Q,ee,w,x,C);((se=ee.onVnodeUpdated)||te)&&Kt(()=>{se&&jn(se,w,y,m),te&&Ti(y,m,w,"updated")},x)},ce=(m,y,w,x,C,N,z)=>{for(let M=0;M<y.length;M++){const F=m[M],O=y[M],te=F.el&&(F.type===Ke||!Xo(F,O)||F.shapeFlag&70)?h(F.el):w;v(F,O,te,null,x,C,N,z,!0)}},Te=(m,y,w,x,C,N,z)=>{if(w!==x){if(w!==Ue)for(const M in w)!Ul(M)&&!(M in x)&&s(m,M,w[M],null,z,y.children,C,N,Ye);for(const M in x){if(Ul(M))continue;const F=x[M],O=w[M];F!==O&&M!=="value"&&s(m,M,O,F,z,y.children,C,N,Ye)}"value"in x&&s(m,"value",w.value,x.value)}},Fe=(m,y,w,x,C,N,z,M,F)=>{const O=y.el=m?m.el:a(""),te=y.anchor=m?m.anchor:a("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:se}=y;se&&(M=M?M.concat(se):se),m==null?(r(O,w,x),r(te,w,x),K(y.children,w,te,C,N,z,M,F)):Q>0&&Q&64&&ee&&m.dynamicChildren?(ce(m.dynamicChildren,ee,w,C,N,z,M),(y.key!=null||C&&y===C.subTree)&&lb(m,y,!0)):ye(m,y,w,te,C,N,z,M,F)},Oe=(m,y,w,x,C,N,z,M,F)=>{y.slotScopeIds=M,m==null?y.shapeFlag&512?C.ctx.activate(y,w,x,z,F):Ut(y,w,x,C,N,z,F):st(m,y,F)},Ut=(m,y,w,x,C,N,z)=>{const M=m.component=QA(m,x,C);if(Qw(m)&&(M.ctx.renderer=$),YA(M),M.asyncDep){if(C&&C.registerDep(M,oe),!m.el){const F=M.subTree=G(ri);T(null,F,y,w)}return}oe(M,m,y,w,C,N,z)},st=(m,y,w)=>{const x=y.component=m.component;if(cA(m,y,w))if(x.asyncDep&&!x.asyncResolved){pe(x,y,w);return}else x.next=y,nA(x.update),x.update();else y.el=m.el,x.vnode=y},oe=(m,y,w,x,C,N,z)=>{const M=()=>{if(m.isMounted){let{next:te,bu:Q,u:ee,parent:se,vnode:me}=m,Ce=te,ke;xi(m,!1),te?(te.el=me.el,pe(m,te,z)):te=me,Q&&$l(Q),(ke=te.props&&te.props.onVnodeBeforeUpdate)&&jn(ke,se,te,me),xi(m,!0);const at=hd(m),kn=m.subTree;m.subTree=at,v(kn,at,h(kn.el),S(kn),m,C,N),te.el=at.el,Ce===null&&lA(m,at.el),ee&&Kt(ee,C),(ke=te.props&&te.props.onVnodeUpdated)&&Kt(()=>jn(ke,se,te,me),C)}else{let te;const{el:Q,props:ee}=y,{bm:se,m:me,parent:Ce}=m,ke=Ea(y);if(xi(m,!1),se&&$l(se),!ke&&(te=ee&&ee.onVnodeBeforeMount)&&jn(te,Ce,y),xi(m,!0),Q&&ve){const at=()=>{m.subTree=hd(m),ve(Q,m.subTree,m,C,null)};ke?y.type.__asyncLoader().then(()=>!m.isUnmounted&&at()):at()}else{const at=m.subTree=hd(m);v(null,at,w,x,m,C,N),y.el=at.el}if(me&&Kt(me,C),!ke&&(te=ee&&ee.onVnodeMounted)){const at=y;Kt(()=>jn(te,Ce,at),C)}(y.shapeFlag&256||Ce&&Ea(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&m.a&&Kt(m.a,C),m.isMounted=!0,y=w=x=null}},F=m.effect=new vp(M,()=>Sp(O),m.scope),O=m.update=()=>F.run();O.id=m.uid,xi(m,!0),O()},pe=(m,y,w)=>{y.component=m;const x=m.vnode.props;m.vnode=y,m.next=null,LA(m,y.props,x,w),UA(m,y.children,w),No(),dy(),Po()},ye=(m,y,w,x,C,N,z,M,F=!1)=>{const O=m&&m.children,te=m?m.shapeFlag:0,Q=y.children,{patchFlag:ee,shapeFlag:se}=y;if(ee>0){if(ee&128){sn(O,Q,w,x,C,N,z,M,F);return}else if(ee&256){Et(O,Q,w,x,C,N,z,M,F);return}}se&8?(te&16&&Ye(O,C,N),Q!==O&&u(w,Q)):te&16?se&16?sn(O,Q,w,x,C,N,z,M,F):Ye(O,C,N,!0):(te&8&&u(w,""),se&16&&K(Q,w,x,C,N,z,M,F))},Et=(m,y,w,x,C,N,z,M,F)=>{m=m||zs,y=y||zs;const O=m.length,te=y.length,Q=Math.min(O,te);let ee;for(ee=0;ee<Q;ee++){const se=y[ee]=F?Br(y[ee]):qn(y[ee]);v(m[ee],se,w,null,C,N,z,M,F)}O>te?Ye(m,C,N,!0,!1,Q):K(y,w,x,C,N,z,M,F,Q)},sn=(m,y,w,x,C,N,z,M,F)=>{let O=0;const te=y.length;let Q=m.length-1,ee=te-1;for(;O<=Q&&O<=ee;){const se=m[O],me=y[O]=F?Br(y[O]):qn(y[O]);if(Xo(se,me))v(se,me,w,null,C,N,z,M,F);else break;O++}for(;O<=Q&&O<=ee;){const se=m[Q],me=y[ee]=F?Br(y[ee]):qn(y[ee]);if(Xo(se,me))v(se,me,w,null,C,N,z,M,F);else break;Q--,ee--}if(O>Q){if(O<=ee){const se=ee+1,me=se<te?y[se].el:x;for(;O<=ee;)v(null,y[O]=F?Br(y[O]):qn(y[O]),w,me,C,N,z,M,F),O++}}else if(O>ee)for(;O<=Q;)ot(m[O],C,N,!0),O++;else{const se=O,me=O,Ce=new Map;for(O=me;O<=ee;O++){const cn=y[O]=F?Br(y[O]):qn(y[O]);cn.key!=null&&Ce.set(cn.key,O)}let ke,at=0;const kn=ee-me+1;let ks=!1,ey=0;const Yo=new Array(kn);for(O=0;O<kn;O++)Yo[O]=0;for(O=se;O<=Q;O++){const cn=m[O];if(at>=kn){ot(cn,C,N,!0);continue}let Bn;if(cn.key!=null)Bn=Ce.get(cn.key);else for(ke=me;ke<=ee;ke++)if(Yo[ke-me]===0&&Xo(cn,y[ke])){Bn=ke;break}Bn===void 0?ot(cn,C,N,!0):(Yo[Bn-me]=O+1,Bn>=ey?ey=Bn:ks=!0,v(cn,y[Bn],w,null,C,N,z,M,F),at++)}const ty=ks?BA(Yo):zs;for(ke=ty.length-1,O=kn-1;O>=0;O--){const cn=me+O,Bn=y[cn],ny=cn+1<te?y[cn+1].el:x;Yo[O]===0?v(null,Bn,w,ny,C,N,z,M,F):ks&&(ke<0||O!==ty[ke]?Ht(Bn,w,ny,2):ke--)}}},Ht=(m,y,w,x,C=null)=>{const{el:N,type:z,transition:M,children:F,shapeFlag:O}=m;if(O&6){Ht(m.component.subTree,y,w,x);return}if(O&128){m.suspense.move(y,w,x);return}if(O&64){z.move(m,y,w,$);return}if(z===Ke){r(N,y,w);for(let Q=0;Q<F.length;Q++)Ht(F[Q],y,w,x);r(m.anchor,y,w);return}if(z===Bl){k(m,y,w);return}if(x!==2&&O&1&&M)if(x===0)M.beforeEnter(N),r(N,y,w),Kt(()=>M.enter(N),C);else{const{leave:Q,delayLeave:ee,afterLeave:se}=M,me=()=>r(N,y,w),Ce=()=>{Q(N,()=>{me(),se&&se()})};ee?ee(N,me,Ce):Ce()}else r(N,y,w)},ot=(m,y,w,x=!1,C=!1)=>{const{type:N,props:z,ref:M,children:F,dynamicChildren:O,shapeFlag:te,patchFlag:Q,dirs:ee}=m;if(M!=null&&nf(M,null,w,m,!0),te&256){y.ctx.deactivate(m);return}const se=te&1&&ee,me=!Ea(m);let Ce;if(me&&(Ce=z&&z.onVnodeBeforeUnmount)&&jn(Ce,y,m),te&6)an(m.component,w,x);else{if(te&128){m.suspense.unmount(w,x);return}se&&Ti(m,null,y,"beforeUnmount"),te&64?m.type.remove(m,y,w,C,$,x):O&&(N!==Ke||Q>0&&Q&64)?Ye(O,y,w,!1,!0):(N===Ke&&Q&384||!C&&te&16)&&Ye(F,y,w),x&&An(m)}(me&&(Ce=z&&z.onVnodeUnmounted)||se)&&Kt(()=>{Ce&&jn(Ce,y,m),se&&Ti(m,null,y,"unmounted")},w)},An=m=>{const{type:y,el:w,anchor:x,transition:C}=m;if(y===Ke){on(w,x);return}if(y===Bl){E(m);return}const N=()=>{i(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:z,delayLeave:M}=C,F=()=>z(w,N);M?M(m.el,N,F):F()}else N()},on=(m,y)=>{let w;for(;m!==y;)w=d(m),i(m),m=w;i(y)},an=(m,y,w)=>{const{bum:x,scope:C,update:N,subTree:z,um:M}=m;x&&$l(x),C.stop(),N&&(N.active=!1,ot(z,m,y,w)),M&&Kt(M,y),Kt(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ye=(m,y,w,x=!1,C=!1,N=0)=>{for(let z=N;z<m.length;z++)ot(m[z],y,w,x,C)},S=m=>m.shapeFlag&6?S(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),q=(m,y,w)=>{m==null?y._vnode&&ot(y._vnode,null,null,!0):v(y._vnode||null,m,y,null,null,null,w),dy(),jw(),y._vnode=m},$={p:v,um:ot,m:Ht,r:An,mt:Ut,mc:K,pc:ye,pbc:ce,n:S,o:t};let Z,ve;return e&&([Z,ve]=e($)),{render:q,hydrate:Z,createApp:PA(q,Z)}}function xi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lb(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Br(i[s]),a.el=o.el),n||lb(o,a)),a.type===sh&&(a.el=o.el)}}function BA(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const jA=t=>t.__isTeleport,Ke=Symbol.for("v-fgt"),sh=Symbol.for("v-txt"),ri=Symbol.for("v-cmt"),Bl=Symbol.for("v-stc"),xa=[];let Nn=null;function ie(t=!1){xa.push(Nn=t?null:[])}function qA(){xa.pop(),Nn=xa[xa.length-1]||null}let Qa=1;function Ey(t){Qa+=t}function ub(t){return t.dynamicChildren=Qa>0?Nn||zs:null,qA(),Qa>0&&Nn&&Nn.push(t),t}function fe(t,e,n,r,i,s){return ub(p(t,e,n,r,i,s,!0))}function _s(t,e,n,r,i){return ub(G(t,e,n,r,i,!0))}function lu(t){return t?t.__v_isVNode===!0:!1}function Xo(t,e){return t.type===e.type&&t.key===e.key}const oh="__vInternal",hb=({key:t})=>t??null,jl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||nt(t)||he(t)?{i:At,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,r=0,i=null,s=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hb(e),ref:e&&jl(e),scopeId:Hw,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:At};return a?(Rp(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=ht(n)?8:16),Qa>0&&!o&&Nn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Nn.push(c),c}const G=zA;function zA(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===EA)&&(t=ri),lu(t)){const a=io(t,e,!0);return n&&Rp(a,n),Qa>0&&!s&&Nn&&(a.shapeFlag&6?Nn[Nn.indexOf(t)]=a:Nn.push(a)),a.patchFlag|=-2,a}if(tk(t)&&(t=t.__vccOpts),e){e=HA(e);let{class:a,style:c}=e;a&&!ht(a)&&(e.class=nr(a)),Le(c)&&(Lw(c)&&!re(c)&&(c=vt({},c)),e.style=mp(c))}const o=ht(t)?1:uA(t)?128:jA(t)?64:Le(t)?4:he(t)?2:0;return p(t,e,n,r,i,o,s,!0)}function HA(t){return t?Lw(t)||oh in t?vt({},t):t:null}function io(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?KA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hb(a),ref:e&&e.ref?n&&i?re(i)?i.concat(jl(e)):[i,jl(e)]:jl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&io(t.ssContent),ssFallback:t.ssFallback&&io(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function we(t=" ",e=0){return G(sh,null,t,e)}function Cp(t,e){const n=G(Bl,null,t);return n.staticCount=e,n}function Ws(t="",e=!1){return e?(ie(),_s(ri,null,t)):G(ri,null,t)}function qn(t){return t==null||typeof t=="boolean"?G(ri):re(t)?G(Ke,null,t.slice()):typeof t=="object"?Br(t):G(sh,null,String(t))}function Br(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:io(t)}function Rp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Rp(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(oh in e)?e._ctx=At:i===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[we(e)]):n=8);t.children=e,t.shapeFlag|=n}function KA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=nr([e.class,r.class]));else if(i==="style")e.style=mp([e.style,r.style]);else if(Xu(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function jn(t,e,n,r=null){Dn(t,e,7,[n,r])}const GA=rb();let WA=0;function QA(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||GA,s={uid:WA++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sb(r,i),emitsOptions:zw(r,i),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=sA.bind(null,s),t.ce&&t.ce(s),s}let gt=null,Np,Cs,Ty="__VUE_INSTANCE_SETTERS__";(Cs=Gd()[Ty])||(Cs=Gd()[Ty]=[]),Cs.push(t=>gt=t),Np=t=>{Cs.length>1?Cs.forEach(e=>e(t)):Cs[0](t)};const so=t=>{Np(t),t.scope.on()},Gi=()=>{gt&&gt.scope.off(),Np(null)};function db(t){return t.vnode.shapeFlag&4}let Ya=!1;function YA(t,e=!1){Ya=e;const{props:n,children:r}=t.vnode,i=db(t);DA(t,n,i,e),FA(t,r);const s=i?XA(t,e):void 0;return Ya=!1,s}function XA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=th(new Proxy(t.ctx,xA));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?ZA(t):null;so(t),No();const s=ei(r,t,0,[t.props,i]);if(Po(),Gi(),gw(s)){if(s.then(Gi,Gi),e)return s.then(o=>{xy(t,o,e)}).catch(o=>{nh(o,t,0)});t.asyncDep=s}else xy(t,s,e)}else fb(t,e)}function xy(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=$w(e)),fb(t,n)}let Sy;function fb(t,e,n){const r=t.type;if(!t.render){if(!e&&Sy&&!r.render){const i=r.template||Ap(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=vt(vt({isCustomElement:s,delimiters:a},o),c);r.render=Sy(i,l)}}t.render=r.render||On}so(t),No(),SA(t),Po(),Gi()}function JA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return nn(t,"get","$attrs"),e[n]}}))}function ZA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return JA(t)},slots:t.slots,emit:t.emit,expose:e}}function ah(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($w(th(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ta)return Ta[n](t)},has(e,n){return n in e||n in Ta}}))}function ek(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function tk(t){return he(t)&&"__vccOpts"in t}const dn=(t,e)=>ZS(t,e,Ya);function pb(t,e,n){const r=arguments.length;return r===2?Le(e)&&!re(e)?lu(e)?G(t,null,[e]):G(t,e):G(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&lu(n)&&(n=[n]),G(t,e,n))}const nk=Symbol.for("v-scx"),rk=()=>bn(nk),ik="3.3.4",sk="http://www.w3.org/2000/svg",Ri=typeof document<"u"?document:null,Ay=Ri&&Ri.createElement("template"),ok={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ri.createElementNS(sk,t):Ri.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ri.createTextNode(t),createComment:t=>Ri.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ri.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Ay.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ay.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ak(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ck(t,e,n){const r=t.style,i=ht(n);if(n&&!i){if(e&&!ht(e))for(const s in e)n[s]==null&&rf(r,s,"");for(const s in n)rf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const ky=/\s*!important$/;function rf(t,e,n){if(re(n))n.forEach(r=>rf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lk(t,e);ky.test(n)?t.setProperty(vs(r),n.replace(ky,""),"important"):t[r]=n}}const Cy=["Webkit","Moz","ms"],fd={};function lk(t,e){const n=fd[e];if(n)return n;let r=ar(e);if(r!=="filter"&&r in t)return fd[e]=r;r=Zu(r);for(let i=0;i<Cy.length;i++){const s=Cy[i]+r;if(s in t)return fd[e]=s}return e}const Ry="http://www.w3.org/1999/xlink";function uk(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ry,e.slice(6,e.length)):t.setAttributeNS(Ry,e,n);else{const s=pS(e);n==null||s&&!_w(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function hk(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=_w(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function dk(t,e,n,r){t.removeEventListener(e,n,r)}function fk(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=pk(e);if(r){const l=s[e]=yk(r,i);Kr(t,a,l,c)}else o&&(dk(t,a,o,c),s[e]=void 0)}}const Ny=/(?:Once|Passive|Capture)$/;function pk(t){let e;if(Ny.test(t)){e={};let r;for(;r=t.match(Ny);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vs(t.slice(2)),e]}let pd=0;const mk=Promise.resolve(),gk=()=>pd||(mk.then(()=>pd=0),pd=Date.now());function yk(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dn(vk(r,n.value),e,5,[r])};return n.value=t,n.attached=gk(),n}function vk(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Py=/^on[a-z]/,_k=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?ak(t,r,i):e==="style"?ck(t,n,r):Xu(e)?dp(e)||fk(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wk(t,e,r,i))?hk(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),uk(t,e,r,i))};function wk(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Py.test(e)&&he(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Py.test(e)&&ht(n)?!1:e in t}const oo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>$l(e,n):e};function bk(t){t.target.composing=!0}function Oy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wi={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=oo(i);const s=r||i.props&&i.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=iu(a)),t._assign(a)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",bk),Kr(t,"compositionend",Oy),Kr(t,"change",Oy))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=oo(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&iu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ik={deep:!0,created(t,e,n){t._assign=oo(n),Kr(t,"change",()=>{const r=t._modelValue,i=Xa(t),s=t.checked,o=t._assign;if(re(r)){const a=gp(r,i),c=a!==-1;if(s&&!c)o(r.concat(i));else if(!s&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Ro(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(mb(t,s))})},mounted:Dy,beforeUpdate(t,e,n){t._assign=oo(n),Dy(t,e,n)}};function Dy(t,{value:e,oldValue:n},r){t._modelValue=e,re(e)?t.checked=gp(e,r.props.value)>-1:Ro(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Rc(e,mb(t,!0)))}const Ek={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Ro(e);Kr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?iu(Xa(o)):Xa(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=oo(r)},mounted(t,{value:e}){Ly(t,e)},beforeUpdate(t,e,n){t._assign=oo(n)},updated(t,{value:e}){Ly(t,e)}};function Ly(t,e){const n=t.multiple;if(!(n&&!re(e)&&!Ro(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=Xa(s);if(n)re(e)?s.selected=gp(e,o)>-1:s.selected=e.has(o);else if(Rc(Xa(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xa(t){return"_value"in t?t._value:t.value}function mb(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Tk=["ctrl","shift","alt","meta"],xk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tk.some(n=>t[`${n}Key`]&&!e.includes(n))},Ir=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=xk[e[i]];if(s&&s(n,e))return}return t(n,...r)},Sk={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ak=(t,e)=>n=>{if(!("key"in n))return;const r=vs(n.key);if(e.some(i=>i===r||Sk[i]===r))return t(n)},Qi={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Jo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Jo(t,!0),r.enter(t)):r.leave(t,()=>{Jo(t,!1)}):Jo(t,e))},beforeUnmount(t,{value:e}){Jo(t,e)}};function Jo(t,e){t.style.display=e?t._vod:"none"}const kk=vt({patchProp:_k},ok);let My;function Ck(){return My||(My=$A(kk))}const Rk=(...t)=>{const e=Ck().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Nk(r);if(!i)return;const s=e._component;!he(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Nk(t){return ht(t)?document.querySelector(t):t}var Pk=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let gb;const ch=t=>gb=t,yb=Symbol();function sf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Sa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Sa||(Sa={}));function Ok(){const t=Iw(!0),e=t.run(()=>Ee({}));let n=[],r=[];const i=th({install(s){ch(i),i._a=s,s.provide(yb,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!Pk?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const vb=()=>{};function Fy(t,e,n,r=vb){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Ew()&&yS(i),i}function Rs(t,...e){t.slice().forEach(n=>{n(...e)})}const Dk=t=>t();function of(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];sf(i)&&sf(r)&&t.hasOwnProperty(n)&&!nt(r)&&!Zr(r)?t[n]=of(i,r):t[n]=r}return t}const Lk=Symbol();function Mk(t){return!sf(t)||!t.hasOwnProperty(Lk)}const{assign:Vr}=Object;function Fk(t){return!!(nt(t)&&t.effect)}function Uk(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=QS(n.state.value[t]);return Vr(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=th(dn(()=>{ch(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=_b(t,l,e,n,r,!0),c}function _b(t,e,n={},r,i,s){let o;const a=Vr({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=r.state.value[t];!s&&!g&&(r.state.value[t]={}),Ee({});let v;function _(K){let W;l=u=!1,typeof K=="function"?(K(r.state.value[t]),W={type:Sa.patchFunction,storeId:t,events:f}):(of(r.state.value[t],K),W={type:Sa.patchObject,payload:K,storeId:t,events:f});const ce=v=Symbol();xp().then(()=>{v===ce&&(l=!0)}),u=!0,Rs(h,W,r.state.value[t])}const T=s?function(){const{state:W}=n,ce=W?W():{};this.$patch(Te=>{Vr(Te,ce)})}:vb;function A(){o.stop(),h=[],d=[],r._s.delete(t)}function k(K,W){return function(){ch(r);const ce=Array.from(arguments),Te=[],Fe=[];function Oe(oe){Te.push(oe)}function Ut(oe){Fe.push(oe)}Rs(d,{args:ce,name:K,store:L,after:Oe,onError:Ut});let st;try{st=W.apply(this&&this.$id===t?this:L,ce)}catch(oe){throw Rs(Fe,oe),oe}return st instanceof Promise?st.then(oe=>(Rs(Te,oe),oe)).catch(oe=>(Rs(Fe,oe),Promise.reject(oe))):(Rs(Te,st),st)}}const E={_p:r,$id:t,$onAction:Fy.bind(null,d),$patch:_,$reset:T,$subscribe(K,W={}){const ce=Fy(h,K,W.detached,()=>Te()),Te=o.run(()=>Gs(()=>r.state.value[t],Fe=>{(W.flush==="sync"?u:l)&&K({storeId:t,type:Sa.direct,events:f},Fe)},Vr({},c,W)));return ce},$dispose:A},L=Oo(E);r._s.set(t,L);const U=r._a&&r._a.runWithContext||Dk,Y=r._e.run(()=>(o=Iw(),U(()=>o.run(e))));for(const K in Y){const W=Y[K];if(nt(W)&&!Fk(W)||Zr(W))s||(g&&Mk(W)&&(nt(W)?W.value=g[K]:of(W,g[K])),r.state.value[t][K]=W);else if(typeof W=="function"){const ce=k(K,W);Y[K]=ce,a.actions[K]=W}}return Vr(L,Y),Vr(Se(L),Y),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:K=>{_(W=>{Vr(W,K)})}}),r._p.forEach(K=>{Vr(L,o.run(()=>K({store:L,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(L.$state,g),l=!0,u=!0,L}function $k(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const l=OA();return a=a||(l?bn(yb,null):null),a&&ch(a),a=gb,a._s.has(r)||(s?_b(r,e,i,a):Uk(r,i,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ms=typeof window<"u";function Vk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function md(t,e){const n={};for(const r in e){const i=e[r];n[r]=Ln(i)?i.map(t):t(i)}return n}const Aa=()=>{},Ln=Array.isArray,Bk=/\/$/,jk=t=>t.replace(Bk,"");function gd(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Kk(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function qk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zk(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ao(e.matched[r],n.matched[i])&&wb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ao(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Hk(t[n],e[n]))return!1;return!0}function Hk(t,e){return Ln(t)?$y(t,e):Ln(e)?$y(e,t):t===e}function $y(t,e){return Ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Kk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ja;(function(t){t.pop="pop",t.push="push"})(Ja||(Ja={}));var ka;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ka||(ka={}));function Gk(t){if(!t)if(Ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jk(t)}const Wk=/^[^#]+#/;function Qk(t,e){return t.replace(Wk,"#")+e}function Yk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const lh=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Yk(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vy(t,e){return(history.state?history.state.position-e:-1)+t}const af=new Map;function Jk(t,e){af.set(t,e)}function Zk(t){const e=af.get(t);return af.delete(t),e}let e1=()=>location.protocol+"//"+location.host;function bb(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Uy(c,"")}return Uy(n,t)+r+i}function t1(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=bb(t,location),g=n.value,v=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}_=v?d.position-v.position:0}else r(f);i.forEach(T=>{T(n.value,g,{delta:_,type:Ja.pop,direction:_?_>0?ka.forward:ka.back:ka.unknown})})};function c(){o=n.value}function l(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:lh()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function By(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?lh():null}}function n1(t){const{history:e,location:n}=window,r={value:bb(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:e1()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Re({},e.state,By(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Re({},i.value,e.state,{forward:c,scroll:lh()});s(u.current,u,!0);const h=Re({},By(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function r1(t){t=Gk(t);const e=n1(t),n=t1(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Re({location:"",base:t,go:r,createHref:Qk.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function i1(t){return typeof t=="string"||t&&typeof t=="object"}function Ib(t){return typeof t=="string"||typeof t=="symbol"}const Mr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Eb=Symbol("");var jy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jy||(jy={}));function co(t,e){return Re(new Error,{type:t,[Eb]:!0},e)}function dr(t,e){return t instanceof Error&&Eb in t&&(e==null||!!(t.type&e))}const qy="[^/]+?",s1={sensitive:!1,strict:!1,start:!0,end:!0},o1=/[.+*?^${}()[\]/\\]/g;function a1(t,e){const n=Re({},s1,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(o1,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:v,optional:_,regexp:T}=d;s.push({name:g,repeatable:v,optional:_});const A=T||qy;if(A!==qy){f+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+E.message)}}let k=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(k=_&&l.length<2?`(?:/${k})`:"/"+k),_&&(k+="?"),i+=k,f+=20,_&&(f+=-8),v&&(f+=-20),A===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:_}=f,T=g in l?l[g]:"";if(Ln(T)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=Ln(T)?T.join("/"):T;if(!A)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function c1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function l1(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=c1(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(zy(r))return 1;if(zy(i))return-1}return i.length-r.length}function zy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const u1={type:0,value:""},h1=/[a-zA-Z0-9_]/;function d1(t){if(!t)return[[]];if(t==="/")return[[u1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:h1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function f1(t,e,n){const r=a1(d1(t.path),n),i=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function p1(t,e){const n=[],r=new Map;e=Gy({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,g=m1(u);g.aliasOf=d&&d.record;const v=Gy(e,u),_=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of k)_.push(Re({},g,{components:d?d.record.components:g.components,path:E,aliasOf:d?d.record:g}))}let T,A;for(const k of _){const{path:E}=k;if(h&&E[0]!=="/"){const L=h.record.path,U=L[L.length-1]==="/"?"":"/";k.path=h.record.path+(E&&U+E)}if(T=f1(k,h,v),d?d.alias.push(T):(A=A||T,A!==T&&A.alias.push(T),f&&u.name&&!Ky(T)&&o(u.name)),g.children){const L=g.children;for(let U=0;U<L.length;U++)s(L[U],T,d&&d.children[U])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return A?()=>{o(A)}:Aa}function o(u){if(Ib(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&l1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Tb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ky(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},g,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw co(1,{location:u});v=d.record.name,f=Re(Hy(h.params,d.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Hy(u.params,d.keys.map(A=>A.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(A=>A.re.test(g)),d&&(f=d.parse(g),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(A=>A.re.test(h.path)),!d)throw co(1,{location:u,currentLocation:h});v=d.record.name,f=Re({},h.params,u.params),g=d.stringify(f)}const _=[];let T=d;for(;T;)_.unshift(T.record),T=T.parent;return{name:v,path:g,params:f,matched:_,meta:y1(_)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Hy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function m1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:g1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function g1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ky(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function y1(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Gy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Tb(t,e){return e.children.some(n=>n===t||Tb(t,n))}const xb=/#/g,v1=/&/g,_1=/\//g,w1=/=/g,b1=/\?/g,Sb=/\+/g,I1=/%5B/g,E1=/%5D/g,Ab=/%5E/g,T1=/%60/g,kb=/%7B/g,x1=/%7C/g,Cb=/%7D/g,S1=/%20/g;function Pp(t){return encodeURI(""+t).replace(x1,"|").replace(I1,"[").replace(E1,"]")}function A1(t){return Pp(t).replace(kb,"{").replace(Cb,"}").replace(Ab,"^")}function cf(t){return Pp(t).replace(Sb,"%2B").replace(S1,"+").replace(xb,"%23").replace(v1,"%26").replace(T1,"`").replace(kb,"{").replace(Cb,"}").replace(Ab,"^")}function k1(t){return cf(t).replace(w1,"%3D")}function C1(t){return Pp(t).replace(xb,"%23").replace(b1,"%3F")}function R1(t){return t==null?"":C1(t).replace(_1,"%2F")}function uu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function N1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Sb," "),o=s.indexOf("="),a=uu(o<0?s:s.slice(0,o)),c=o<0?null:uu(s.slice(o+1));if(a in e){let l=e[a];Ln(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Wy(t){let e="";for(let n in t){const r=t[n];if(n=k1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ln(r)?r.map(s=>s&&cf(s)):[r&&cf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function P1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ln(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const O1=Symbol(""),Qy=Symbol(""),uh=Symbol(""),Op=Symbol(""),lf=Symbol("");function Zo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function jr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(co(4,{from:n,to:e})):h instanceof Error?a(h):i1(h)?a(co(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function yd(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(D1(a)){const l=(a.__vccOpts||a)[e];l&&i.push(jr(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Vk(l)?l.default:l;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&jr(d,n,r,s,o)()}))}}return i}function D1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yy(t){const e=bn(uh),n=bn(Op),r=dn(()=>e.resolve(de(t.to))),i=dn(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ao.bind(null,u));if(d>-1)return d;const f=Xy(c[l-2]);return l>1&&Xy(u)===f&&h[h.length-1].path!==f?h.findIndex(ao.bind(null,c[l-2])):d}),s=dn(()=>i.value>-1&&F1(n.params,r.value.params)),o=dn(()=>i.value>-1&&i.value===n.matched.length-1&&wb(n.params,r.value.params));function a(c={}){return M1(c)?e[de(t.replace)?"replace":"push"](de(t.to)).catch(Aa):Promise.resolve()}return{route:r,href:dn(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const L1=Ww({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yy,setup(t,{slots:e}){const n=Oo(Yy(t)),{options:r}=bn(uh),i=dn(()=>({[Jy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:pb("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),_n=L1;function M1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function F1(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ln(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Xy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jy=(t,e,n)=>t??e??n,U1=Ww({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=bn(lf),i=dn(()=>t.route||r.value),s=bn(Qy,0),o=dn(()=>{let l=de(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=dn(()=>i.value.matched[o.value]);Vl(Qy,dn(()=>o.value+1)),Vl(O1,a),Vl(lf,i);const c=Ee();return Gs(()=>[c.value,a.value,t.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!ao(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Zy(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=pb(d,Re({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Zy(n.default,{Component:_,route:l})||_}}});function Zy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Oc=U1;function $1(t){const e=p1(t.routes,t),n=t.parseQuery||N1,r=t.stringifyQuery||Wy,i=t.history,s=Zo(),o=Zo(),a=Zo(),c=KS(Mr);let l=Mr;Ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=md.bind(null,S=>""+S),h=md.bind(null,R1),d=md.bind(null,uu);function f(S,q){let $,Z;return Ib(S)?($=e.getRecordMatcher(S),Z=q):Z=S,e.addRoute(Z,$)}function g(S){const q=e.getRecordMatcher(S);q&&e.removeRoute(q)}function v(){return e.getRoutes().map(S=>S.record)}function _(S){return!!e.getRecordMatcher(S)}function T(S,q){if(q=Re({},q||c.value),typeof S=="string"){const w=gd(n,S,q.path),x=e.resolve({path:w.path},q),C=i.createHref(w.fullPath);return Re(w,x,{params:d(x.params),hash:uu(w.hash),redirectedFrom:void 0,href:C})}let $;if("path"in S)$=Re({},S,{path:gd(n,S.path,q.path).path});else{const w=Re({},S.params);for(const x in w)w[x]==null&&delete w[x];$=Re({},S,{params:h(w)}),q.params=h(q.params)}const Z=e.resolve($,q),ve=S.hash||"";Z.params=u(d(Z.params));const m=qk(r,Re({},S,{hash:A1(ve),path:Z.path})),y=i.createHref(m);return Re({fullPath:m,hash:ve,query:r===Wy?P1(S.query):S.query||{}},Z,{redirectedFrom:void 0,href:y})}function A(S){return typeof S=="string"?gd(n,S,c.value.path):Re({},S)}function k(S,q){if(l!==S)return co(8,{from:q,to:S})}function E(S){return Y(S)}function L(S){return E(Re(A(S),{replace:!0}))}function U(S){const q=S.matched[S.matched.length-1];if(q&&q.redirect){const{redirect:$}=q;let Z=typeof $=="function"?$(S):$;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=A(Z):{path:Z},Z.params={}),Re({query:S.query,hash:S.hash,params:"path"in Z?{}:S.params},Z)}}function Y(S,q){const $=l=T(S),Z=c.value,ve=S.state,m=S.force,y=S.replace===!0,w=U($);if(w)return Y(Re(A(w),{state:typeof w=="object"?Re({},ve,w.state):ve,force:m,replace:y}),q||$);const x=$;x.redirectedFrom=q;let C;return!m&&zk(r,Z,$)&&(C=co(16,{to:x,from:Z}),Ht(Z,Z,!0,!1)),(C?Promise.resolve(C):ce(x,Z)).catch(N=>dr(N)?dr(N,2)?N:sn(N):ye(N,x,Z)).then(N=>{if(N){if(dr(N,2))return Y(Re({replace:y},A(N.to),{state:typeof N.to=="object"?Re({},ve,N.to.state):ve,force:m}),q||x)}else N=Fe(x,Z,!0,y,ve);return Te(x,Z,N),N})}function K(S,q){const $=k(S,q);return $?Promise.reject($):Promise.resolve()}function W(S){const q=on.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(S):S()}function ce(S,q){let $;const[Z,ve,m]=V1(S,q);$=yd(Z.reverse(),"beforeRouteLeave",S,q);for(const w of Z)w.leaveGuards.forEach(x=>{$.push(jr(x,S,q))});const y=K.bind(null,S,q);return $.push(y),Ye($).then(()=>{$=[];for(const w of s.list())$.push(jr(w,S,q));return $.push(y),Ye($)}).then(()=>{$=yd(ve,"beforeRouteUpdate",S,q);for(const w of ve)w.updateGuards.forEach(x=>{$.push(jr(x,S,q))});return $.push(y),Ye($)}).then(()=>{$=[];for(const w of S.matched)if(w.beforeEnter&&!q.matched.includes(w))if(Ln(w.beforeEnter))for(const x of w.beforeEnter)$.push(jr(x,S,q));else $.push(jr(w.beforeEnter,S,q));return $.push(y),Ye($)}).then(()=>(S.matched.forEach(w=>w.enterCallbacks={}),$=yd(m,"beforeRouteEnter",S,q),$.push(y),Ye($))).then(()=>{$=[];for(const w of o.list())$.push(jr(w,S,q));return $.push(y),Ye($)}).catch(w=>dr(w,8)?w:Promise.reject(w))}function Te(S,q,$){for(const Z of a.list())W(()=>Z(S,q,$))}function Fe(S,q,$,Z,ve){const m=k(S,q);if(m)return m;const y=q===Mr,w=Ms?history.state:{};$&&(Z||y?i.replace(S.fullPath,Re({scroll:y&&w&&w.scroll},ve)):i.push(S.fullPath,ve)),c.value=S,Ht(S,q,$,y),sn()}let Oe;function Ut(){Oe||(Oe=i.listen((S,q,$)=>{if(!an.listening)return;const Z=T(S),ve=U(Z);if(ve){Y(Re(ve,{replace:!0}),Z).catch(Aa);return}l=Z;const m=c.value;Ms&&Jk(Vy(m.fullPath,$.delta),lh()),ce(Z,m).catch(y=>dr(y,12)?y:dr(y,2)?(Y(y.to,Z).then(w=>{dr(w,20)&&!$.delta&&$.type===Ja.pop&&i.go(-1,!1)}).catch(Aa),Promise.reject()):($.delta&&i.go(-$.delta,!1),ye(y,Z,m))).then(y=>{y=y||Fe(Z,m,!1),y&&($.delta&&!dr(y,8)?i.go(-$.delta,!1):$.type===Ja.pop&&dr(y,20)&&i.go(-1,!1)),Te(Z,m,y)}).catch(Aa)}))}let st=Zo(),oe=Zo(),pe;function ye(S,q,$){sn(S);const Z=oe.list();return Z.length?Z.forEach(ve=>ve(S,q,$)):console.error(S),Promise.reject(S)}function Et(){return pe&&c.value!==Mr?Promise.resolve():new Promise((S,q)=>{st.add([S,q])})}function sn(S){return pe||(pe=!S,Ut(),st.list().forEach(([q,$])=>S?$(S):q()),st.reset()),S}function Ht(S,q,$,Z){const{scrollBehavior:ve}=t;if(!Ms||!ve)return Promise.resolve();const m=!$&&Zk(Vy(S.fullPath,0))||(Z||!$)&&history.state&&history.state.scroll||null;return xp().then(()=>ve(S,q,m)).then(y=>y&&Xk(y)).catch(y=>ye(y,S,q))}const ot=S=>i.go(S);let An;const on=new Set,an={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:_,getRoutes:v,resolve:T,options:t,push:E,replace:L,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:Et,install(S){const q=this;S.component("RouterLink",_n),S.component("RouterView",Oc),S.config.globalProperties.$router=q,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>de(c)}),Ms&&!An&&c.value===Mr&&(An=!0,E(i.location).catch(ve=>{}));const $={};for(const ve in Mr)$[ve]=dn(()=>c.value[ve]);S.provide(uh,q),S.provide(Op,Oo($)),S.provide(lf,c);const Z=S.unmount;on.add(S),S.unmount=function(){on.delete(S),on.size<1&&(l=Mr,Oe&&Oe(),Oe=null,c.value=Mr,An=!1,pe=!1),Z()}}};function Ye(S){return S.reduce((q,$)=>q.then(()=>W($)),Promise.resolve())}return an}function V1(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>ao(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ao(l,c))||i.push(c))}return[n,r,i]}function hh(){return bn(uh)}function Dp(){return bn(Op)}const B1={__name:"App",setup(t){return(e,n)=>(ie(),_s(de(Oc)))}},j1="/itemshare/assets/ItemShareLogo-622ee656.png",q1=p("span",{class:"font-poppins hidden select-none text-3xl font-black text-white underline decoration-green-900 decoration-4 underline-offset-4 md:inline-block"},"ItemShare",-1),z1=["src"],Rb={__name:"ItemShareLogo",setup(t){return(e,n)=>(ie(),_s(de(_n),{to:"/",class:"flex items-center gap-2"},{default:Ge(()=>[q1,p("img",{src:de(j1),class:"w-10 rounded-xl",loading:"lazy"},null,8,z1)]),_:1}))}},H1=p("div",{class:"flex h-full flex-col-reverse bg-green-100 md:flex-row-reverse",style:{"background-image":"url('https://wordpress.heals.com/blog/wp-content/uploads/2021/08/Colourful-sofa-cushions-1024x485.jpg;')","background-size":"cover","background-position":"center"}},[p("div",{class:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),p("div",{class:"z-10 basis-1/2 bg-green-600"})],-1),K1={class:"absolute top-0 z-20 flex h-screen w-full flex-col md:flex-row-reverse"},G1={class:"flex w-full basis-full flex-col justify-between gap-4 overflow-y-auto p-8 md:basis-1/2"},W1={class:"flex items-center justify-between"},Q1=p("nav",{class:"flex gap-4 text-white"},[p("a",{href:"#"},"About Us"),p("a",{href:"#"},"Contacts")],-1),Y1=p("footer",{class:"text-right text-white"},"All Rights Reserved 2023. ®",-1),X1={__name:"LandingView",setup(t){return(e,n)=>(ie(),fe(Ke,null,[H1,p("div",K1,[p("div",G1,[p("header",W1,[Q1,G(Rb)]),G(de(Oc)),Y1])])],64))}},dh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},J1={},Z1={class:"flex basis-full flex-col justify-between px-4 pt-16"},eC=p("h1",{class:"basis-full border-0 border-green-400 text-5xl font-bold text-white sm:text-6xl md:border-b-4 md:shadow-none"}," Hello, looking for something you like? ",-1),tC={class:"flex basis-full flex-col gap-8 px-4 py-16"},nC=p("p",{class:"text-xl text-white"}," Unlock the value of your unused items: Earn, Share, and Connect with ItemShare ",-1),rC={class:"flex items-center gap-2"};function iC(t,e){const n=Pc("RouterLink");return ie(),fe("div",Z1,[eC,p("div",tC,[nC,p("div",rC,[G(n,{to:"/login",class:"rounded-xl border-2 border-white bg-white px-5 py-3 text-center text-green-800"},{default:Ge(()=>[we(" LOGIN ")]),_:1}),G(n,{to:"/register",class:"rounded-xl border-2 border-white px-5 py-3 text-center text-white"},{default:Ge(()=>[we(" REGISTER ")]),_:1})])])])}const sC=dh(J1,[["render",iC]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Nb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new aC;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cC=function(t){const e=Nb(t);return Pb.encodeByteArray(e,!0)},hu=function(t){return cC(t).replace(/\./g,"")},Ob=function(t){try{return Pb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function du(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lC(n)||(t[n]=du(t[n],e[n]));return t}function lC(t){return t!=="__proto__"}/**
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
 */function uC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hC=()=>uC().__FIREBASE_DEFAULTS__,dC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ob(t[1]);return e&&JSON.parse(e)},fh=()=>{try{return hC()||dC()||fC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pC=t=>{var e,n;return(n=(e=fh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mC=t=>{const e=pC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Db=()=>{var t;return(t=fh())===null||t===void 0?void 0:t.config},gC=t=>{var e;return(e=fh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Lb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hu(JSON.stringify(n)),hu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function ph(){var t;const e=(t=fh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _C(){return typeof self=="object"&&self.self===self}function Mb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fb(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wC(){return!ph()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Za(){try{return typeof indexedDB=="object"}catch{return!1}}function bC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="FirebaseError";class Lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IC,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?EC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Lt(i,a,r)}}function EC(t,e){return t.replace(TC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tv(s)&&tv(o)){if(!uf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ub(t,e){const n=new SC(t,e);return n.subscribe.bind(n)}class SC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vd),i.error===void 0&&(i.error=vd),i.complete===void 0&&(i.complete=vd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vd(){}/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ai="[DEFAULT]";/**
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
 */class kC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RC(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CC(t){return t===Ai?void 0:t}function RC(t){return t.instantiationMode==="EAGER"}/**
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
 */class NC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=[];var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const $b={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},PC=be.INFO,OC={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},DC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=OC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mh{constructor(e){this.name=e,this._logLevel=PC,this._logHandler=DC,this._userLogHandler=null,Mp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$b[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}function LC(t){Mp.forEach(e=>{e.setLogLevel(t)})}function MC(t,e){for(const n of Mp){let r=null;e&&e.level&&(r=$b[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&t({level:be[s].toLowerCase(),message:a,args:o,type:i.name})}}}const FC=(t,e)=>e.some(n=>t instanceof n);let nv,rv;function UC(){return nv||(nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $C(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vb=new WeakMap,hf=new WeakMap,Bb=new WeakMap,_d=new WeakMap,Fp=new WeakMap;function VC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ti(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vb.set(n,t)}).catch(()=>{}),Fp.set(e,t),e}function BC(t){if(hf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hf.set(t,e)}let df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jC(t){df=t(df)}function qC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wd(this),e,...n);return Bb.set(r,e.sort?e.sort():[e]),ti(r)}:$C().includes(t)?function(...e){return t.apply(wd(this),e),ti(Vb.get(this))}:function(...e){return ti(t.apply(wd(this),e))}}function zC(t){return typeof t=="function"?qC(t):(t instanceof IDBTransaction&&BC(t),FC(t,UC())?new Proxy(t,df):t)}function ti(t){if(t instanceof IDBRequest)return VC(t);if(_d.has(t))return _d.get(t);const e=zC(t);return e!==t&&(_d.set(t,e),Fp.set(e,t)),e}const wd=t=>Fp.get(t);function HC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ti(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ti(o.result),c.oldVersion,c.newVersion,ti(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const KC=["get","getKey","getAll","getAllKeys","count"],GC=["put","add","delete","clear"],bd=new Map;function iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bd.get(e))return bd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KC.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return bd.set(e,s),s}jC(t=>({...t,get:(e,n,r)=>iv(e,n)||t.get(e,n,r),has:(e,n)=>!!iv(e,n)||t.has(e,n)}));/**
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
 */class WC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ff="@firebase/app",sv="0.9.12";/**
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
 */const rs=new mh("@firebase/app"),YC="@firebase/app-compat",XC="@firebase/analytics-compat",JC="@firebase/analytics",ZC="@firebase/app-check-compat",eR="@firebase/app-check",tR="@firebase/auth",nR="@firebase/auth-compat",rR="@firebase/database",iR="@firebase/database-compat",sR="@firebase/functions",oR="@firebase/functions-compat",aR="@firebase/installations",cR="@firebase/installations-compat",lR="@firebase/messaging",uR="@firebase/messaging-compat",hR="@firebase/performance",dR="@firebase/performance-compat",fR="@firebase/remote-config",pR="@firebase/remote-config-compat",mR="@firebase/storage",gR="@firebase/storage-compat",yR="@firebase/firestore",vR="@firebase/firestore-compat",_R="firebase",wR="9.22.2";/**
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
 */const ii="[DEFAULT]",bR={[ff]:"fire-core",[YC]:"fire-core-compat",[JC]:"fire-analytics",[XC]:"fire-analytics-compat",[eR]:"fire-app-check",[ZC]:"fire-app-check-compat",[tR]:"fire-auth",[nR]:"fire-auth-compat",[rR]:"fire-rtdb",[iR]:"fire-rtdb-compat",[sR]:"fire-fn",[oR]:"fire-fn-compat",[aR]:"fire-iid",[cR]:"fire-iid-compat",[lR]:"fire-fcm",[uR]:"fire-fcm-compat",[hR]:"fire-perf",[dR]:"fire-perf-compat",[fR]:"fire-rc",[pR]:"fire-rc-compat",[mR]:"fire-gcs",[gR]:"fire-gcs-compat",[yR]:"fire-fst",[vR]:"fire-fst-compat","fire-js":"fire-js",[_R]:"fire-js-all"};/**
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
 */const si=new Map,ec=new Map;function fu(t,e){try{t.container.addComponent(e)}catch(n){rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jb(t,e){t.container.addOrOverwriteComponent(e)}function Er(t){const e=t.name;if(ec.has(e))return rs.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,t);for(const n of si.values())fu(n,t);return!0}function Up(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function IR(t,e,n=ii){Up(t,e).clearInstance(n)}function ER(){ec.clear()}/**
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
 */const TR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new ws("app","Firebase",TR);/**
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
 */let xR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}};/**
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
 */const Cr=wR;function $p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ii,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=Db()),!n)throw vr.create("no-options");const s=si.get(i);if(s){if(uf(n,s.options)&&uf(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new NC(i);for(const c of ec.values())o.addComponent(c);const a=new xR(n,r,o);return si.set(i,a),a}function qb(t=ii){const e=si.get(t);if(!e&&t===ii&&Db())return $p();if(!e)throw vr.create("no-app",{appName:t});return e}function SR(){return Array.from(si.values())}async function zb(t){const e=t.name;si.has(e)&&(si.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function In(t,e,n){var r;let i=(r=bR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rs.warn(a.join(" "));return}Er(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Hb(t,e){if(t!==null&&typeof t!="function")throw vr.create("invalid-log-argument");MC(t,e)}function Kb(t){LC(t)}/**
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
 */const AR="firebase-heartbeat-database",kR=1,tc="firebase-heartbeat-store";let Id=null;function Gb(){return Id||(Id=HC(AR,kR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tc)}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Id}async function CR(t){try{return await(await Gb()).transaction(tc).objectStore(tc).get(Wb(t))}catch(e){if(e instanceof Lt)rs.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rs.warn(n.message)}}}async function ov(t,e){try{const r=(await Gb()).transaction(tc,"readwrite");await r.objectStore(tc).put(e,Wb(t)),await r.done}catch(n){if(n instanceof Lt)rs.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rs.warn(r.message)}}}function Wb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RR=1024,NR=30*24*60*60*1e3;class PR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=av();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=NR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=av(),{heartbeatsToSend:n,unsentEntries:r}=OR(this._heartbeatsCache.heartbeats),i=hu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function av(){return new Date().toISOString().substring(0,10)}function OR(t,e=RR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Za()?bC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cv(t){return hu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function LR(t){Er(new Mn("platform-logger",e=>new WC(e),"PRIVATE")),Er(new Mn("heartbeat",e=>new PR(e),"PRIVATE")),In(ff,sv,t),In(ff,sv,"esm2017"),In("fire-js","")}LR("");const MR=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Lt,SDK_VERSION:Cr,_DEFAULT_ENTRY_NAME:ii,_addComponent:fu,_addOrOverwriteComponent:jb,_apps:si,_clearComponents:ER,_components:ec,_getProvider:Up,_registerComponent:Er,_removeServiceInstance:IR,deleteApp:zb,getApp:qb,getApps:SR,initializeApp:$p,onLog:Hb,registerVersion:In,setLogLevel:Kb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this._delegate=e,this.firebase=n,fu(e,new Mn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),zb(this._delegate)))}_getService(e,n=ii){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ii){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){fu(this._delegate,e)}_addOrOverwriteComponent(e){jb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const UR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},lv=new ws("app-compat","Firebase",UR);/**
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
 */function $R(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:In,setLogLevel:Kb,onLog:Hb,apps:null,SDK_VERSION:Cr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:MR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||ii,!ev(e,l))throw lv.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,u={}){const h=$p(l,u);if(ev(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Er(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw lv.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&du(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function c(l,u){return u==="serverAuth"?null:u}return n}/**
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
 */function Qb(){const t=$R(FR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Qb,extendNamespace:e,createSubscribe:Ub,ErrorFactory:ws,deepExtend:du});function e(n){du(t,n)}return t}const VR=Qb();/**
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
 */const uv=new mh("@firebase/app-compat"),BR="@firebase/app-compat",jR="0.2.12";/**
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
 */function qR(t){In(BR,jR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(_C()&&self.firebase!==void 0){uv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&uv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Yt=VR;qR();var zR="firebase",HR="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.registerVersion(zR,HR,"app-compat");function Vp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ea={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ns={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Yb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GR=KR,WR=Yb,Xb=new ws("auth","Firebase",Yb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=new mh("@firebase/auth");function QR(t,...e){pu.logLevel<=be.WARN&&pu.warn(`Auth (${Cr}): ${t}`,...e)}function ql(t,...e){pu.logLevel<=be.ERROR&&pu.error(`Auth (${Cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw Bp(t,...e)}function kt(t,...e){return Bp(t,...e)}function Jb(t,e,n){const r=Object.assign(Object.assign({},WR()),{[e]:n});return new ws("auth","Firebase",r).create(e,{appName:t.name})}function Lo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rt(t,"argument-error"),Jb(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xb.create(t,...e)}function D(t,e,...n){if(!t)throw Bp(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function Fn(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jp(){return hv()==="http:"||hv()==="https:"}function hv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jp()||Mb()||"connection"in navigator)?navigator.onLine:!0}function XR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=vC()||Lp()}get(){return YR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new Dc(3e4,6e4);function ut(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ft(t,e,n,r,i={}){return e0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Do(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Zb.fetch()(t0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function e0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JR),e);try{const i=new eN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ya(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Jb(t,u,l);Rt(t,u)}}catch(i){if(i instanceof Lt)throw i;Rt(t,"network-request-failed",{message:String(i)})}}async function Rr(t,e,n,r,i={}){const s=await ft(t,e,n,r,i);return"mfaPendingCredential"in s&&Rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function t0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qp(t.config,i):`${t.config.apiScheme}://${i}`}class eN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),ZR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e){return ft(t,"POST","/v1/accounts:delete",e)}async function nN(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function rN(t,e){return ft(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iN(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=gh(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ca(Ed(i.auth_time)),issuedAtTime:Ca(Ed(i.iat)),expirationTime:Ca(Ed(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ed(t){return Number(t)*1e3}function gh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ob(n);return i?JSON.parse(i):(ql("Failed to decode base64 JWT payload"),null)}catch(i){return ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sN(t){const e=gh(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lt&&oN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Tr(t,rN(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uN(s.providerUserInfo):[],a=lN(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new n0(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cN(t){const e=ne(t);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uN(t){return t.map(e=>{var{providerId:n}=e,r=Vp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e){const n=await e0(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=t0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ic;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ic,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new n0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iN(this,e)}reload(){return cN(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tr(this,tN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:E,isAnonymous:L,providerData:U,stsTokenManager:Y}=n;D(k&&Y,e,"internal-error");const K=ic.fromJSON(this.name,Y);D(typeof k=="string",e,"internal-error"),Fr(h,e.name),Fr(d,e.name),D(typeof E=="boolean",e,"internal-error"),D(typeof L=="boolean",e,"internal-error"),Fr(f,e.name),Fr(g,e.name),Fr(v,e.name),Fr(_,e.name),Fr(T,e.name),Fr(A,e.name);const W=new Yi({uid:k,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:L,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:K,createdAt:T,lastLoginAt:A});return U&&Array.isArray(U)&&(W.providerData=U.map(ce=>Object.assign({},ce))),_&&(W._redirectEventId=_),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new ic;i.updateFromServerResponse(n);const s=new Yi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Map;function fn(t){Fn(t instanceof Function,"Expected a class definition");let e=dv.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dv.set(t,e),e)}/**
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
 */class r0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}r0.type="NONE";const lo=r0;/**
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
 */function Xi(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(fn(lo),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||fn(lo);const o=Xi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Yi._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Qs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Qs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(i0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(a0(e))return"Blackberry";if(c0(e))return"Webos";if(zp(e))return"Safari";if((e.includes("chrome/")||s0(e))&&!e.includes("edge/"))return"Chrome";if(Lc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function i0(t=We()){return/firefox\//i.test(t)}function zp(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s0(t=We()){return/crios\//i.test(t)}function o0(t=We()){return/iemobile/i.test(t)}function Lc(t=We()){return/android/i.test(t)}function a0(t=We()){return/blackberry/i.test(t)}function c0(t=We()){return/webos/i.test(t)}function Mo(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dN(t=We()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function fN(t=We()){var e;return Mo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pN(){return Fb()&&document.documentMode===10}function l0(t=We()){return Mo(t)||Lc(t)||c0(t)||a0(t)||/windows phone/i.test(t)||o0(t)}function mN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e=[]){let n;switch(t){case"Browser":n=fv(We());break;case"Worker":n=`${fv(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t){return(await ft(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function h0(t,e){return ft(t,"GET","/v2/recaptchaConfig",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){return t!==void 0&&t.getResponse!==void 0}function mv(t){return t!==void 0&&t.enterprise!==void 0}class d0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yN().appendChild(r)})}function f0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vN="https://www.google.com/recaptcha/enterprise.js?render=",_N="recaptcha-enterprise",wN="NO_RECAPTCHA";class p0{constructor(e){this.type=_N,this.auth=it(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{h0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new d0(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;mv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(wN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&mv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Hp(vN+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function oi(t,e,n,r=!1){const i=new p0(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class bN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gv(this),this.idTokenSubscription=new gv(this),this.beforeStateQueue=new bN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ne(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}async initializeRecaptchaConfig(){const e=await h0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new d0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new p0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function it(t){return ne(t)}class gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ub(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function EN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TN(t,e,n){const r=it(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=m0(e),{host:o,port:a}=xN(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||SN()}function m0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xN(t){const e=m0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yv(o)}}}function yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e){return ft(t,"POST","/v1/accounts:resetPassword",ut(t,e))}async function y0(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function AN(t,e){return ft(t,"POST","/v1/accounts:update",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Td(t,e){return Rr(t,"POST","/v1/accounts:signInWithPassword",ut(t,e))}async function yh(t,e){return ft(t,"POST","/v1/accounts:sendOobCode",ut(t,e))}async function kN(t,e){return yh(t,e)}async function xd(t,e){return yh(t,e)}async function Sd(t,e){return yh(t,e)}async function CN(t,e){return yh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",ut(t,e))}async function NN(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends Fo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new sc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await oi(e,r,"signInWithPassword");return Td(e,i)}else return Td(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await oi(e,r,"signInWithPassword");return Td(e,s)}else return Promise.reject(i)});case"emailLink":return RN(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return y0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NN(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const PN="http://localhost";class cr extends Fo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_r(e,n)}buildRequest(){const e={requestUri:PN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e){return ft(t,"POST","/v1/accounts:sendVerificationCode",ut(t,e))}async function DN(t,e){return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,e))}async function LN(t,e){const n=await Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,e));if(n.temporaryProof)throw ya(t,"account-exists-with-different-credential",n);return n}const MN={USER_NOT_FOUND:"user-not-found"};async function FN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",ut(t,n),MN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Fo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ji({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ji({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return DN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return LN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return FN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ji({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $N(t){const e=Bs(ga(t)).link,n=e?Bs(ga(e)).deep_link_id:null,r=Bs(ga(t)).deep_link_id;return(r?Bs(ga(r)).link:null)||r||n||e||t}class vh{constructor(e){var n,r,i,s,o,a;const c=Bs(ga(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=UN((i=c.mode)!==null&&i!==void 0?i:null);D(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$N(e);try{return new vh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.providerId=gi.PROVIDER_ID}static credential(e,n){return sc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vh.parseLink(n);return D(r,"argument-error"),sc._fromEmailAndCode(e,r.code,r.tenantId)}}gi.PROVIDER_ID="password";gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uo extends Nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ys extends Uo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return D("providerId"in n&&"signInMethod"in n,"argument-error"),cr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),cr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ys.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ys.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ys(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Uo{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Uo{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="http://localhost";class uo extends Fo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return _r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_r(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new uo(r,s)}static _create(e,n){return new uo(e,n)}buildRequest(){return{requestUri:VN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="saml.";class mu extends Nr{constructor(e){D(e.startsWith(BN),"argument-error"),super(e)}static credentialFromResult(e){return mu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return mu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=uo.fromJSON(e);return D(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return uo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Uo{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yi._fromIdTokenResponse(e,r,i),o=vv(r);return new Tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vv(r);return new Tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t){var e;const n=it(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Tn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await zl(n,{returnSecureToken:!0}),i=await Tn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends Lt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gu(e,n,r,i)}}function v0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function qN(t,e){const n=ne(t);await _h(!0,n,e);const{providerUserInfo:r}=await nN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=_0(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Kp(t,e,n=!1){const r=await Tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tn._forOperation(t,"link",r)}async function _h(t,e,n){await rc(e);const r=_0(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===t,e.auth,i)}/**
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
 */async function w0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Tr(t,v0(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=gh(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(t,e,n=!1){const r="signIn",i=await v0(t,r,e),s=await Tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wh(t,e){return b0(it(t),e)}async function I0(t,e){const n=ne(t);return await _h(!1,n,e.providerId),Kp(n,e)}async function E0(t,e){return w0(ne(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e){return Rr(t,"POST","/v1/accounts:signInWithCustomToken",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(t,e){const n=it(t),r=await zN(n,{token:e,returnSecureToken:!0}),i=await Tn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Gp._fromServerResponse(e,n):"totpInfo"in n?Wp._fromServerResponse(e,n):Rt(e,"internal-error")}}class Gp extends Mc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Gp(n)}}class Wp extends Mc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Wp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t,e,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN(t,e,n){var r;const i=it(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await oi(i,s,"getOobCode",!0);n&&Xs(i,o,n),await xd(i,o)}else n&&Xs(i,s,n),await xd(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await oi(i,s,"getOobCode",!0);n&&Xs(i,a,n),await xd(i,a)}else return Promise.reject(o)})}async function GN(t,e,n){await g0(ne(t),{oobCode:e,newPassword:n})}async function WN(t,e){await AN(ne(t),{oobCode:e})}async function T0(t,e){const n=ne(t),r=await g0(n,{oobCode:e}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Mc._fromServerResponse(it(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function QN(t,e){const{data:n}=await T0(ne(t),e);return n.email}async function YN(t,e,n){var r;const i=it(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await oi(i,s,"signUpPassword");o=zl(i,l)}else o=zl(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await oi(i,s,"signUpPassword");return zl(i,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Tn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function XN(t,e,n){return wh(ne(t),gi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e,n){var r;const i=it(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){D(c.handleCodeInApp,i,"argument-error"),c&&Xs(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await oi(i,s,"getOobCode",!0);o(a,n),await Sd(i,a)}else o(s,n),await Sd(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await oi(i,s,"getOobCode",!0);o(c,n),await Sd(i,c)}else return Promise.reject(a)})}function ZN(t,e){const n=vh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function eP(t,e,n){const r=ne(t),i=gi.credentialWithLink(e,n||nc());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),wh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e){return ft(t,"POST","/v1/accounts:createAuthUri",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e){const n=jp()?nc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await tP(ne(t),r);return i||[]}async function rP(t,e){const n=ne(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Xs(n.auth,i,e);const{email:s}=await kN(n.auth,i);s!==t.email&&await t.reload()}async function iP(t,e,n){const r=ne(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Xs(r.auth,s,n);const{email:o}=await CN(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){return ft(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Tr(r,sP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aP(t,e){return x0(ne(t),e,null)}function cP(t,e){return x0(ne(t),null,e)}async function x0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Tr(t,y0(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function lP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=gh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Js(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new uP(s,i);case"github.com":return new hP(s,i);case"google.com":return new dP(s,i);case"twitter.com":return new fP(s,i,t.screenName||null);case"custom":case"anonymous":return new Js(s,null);default:return new Js(s,r,i)}}class Js{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class S0 extends Js{constructor(e,n,r,i){super(e,n,r),this.username=i}}class uP extends Js{constructor(e,n){super(e,"facebook.com",n)}}class hP extends S0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class dP extends Js{constructor(e,n){super(e,"google.com",n)}}class fP extends S0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function pP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:lP(n)}class Vi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Vi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Vi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Vi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Vi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=it(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Mc._fromServerResponse(r,a));D(i.mfaPendingCredential,r,"internal-error");const o=Vi._fromMfaPendingCredential(i.mfaPendingCredential);return new Qp(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const u=await Tn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return D(n.user,r,"internal-error"),Tn._forOperation(n.user,n.operationType,l);default:Rt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function mP(t,e){var n;const r=ne(t),i=e;return D(e.customData.operationType,r,"argument-error"),D((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Qp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:start",ut(t,e))}function yP(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:finalize",ut(t,e))}function vP(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ut(t,e))}class Yp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Mc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Yp(e)}async getSession(){return Vi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Tr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Tr(this.user,vP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ad=new WeakMap;function _P(t){const e=ne(t);return Ad.has(e)||Ad.set(e,Yp._fromUser(e)),Ad.get(e)}const yu="__sak";/**
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
 */class A0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yu,"1"),this.storage.removeItem(yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(){const t=We();return zp(t)||Mo(t)}const bP=1e3,IP=10;class k0 extends A0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wP()&&mN(),this.fallbackToPolling=l0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);pN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}k0.type="LOCAL";const Xp=k0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends A0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C0.type="SESSION";const is=C0;/**
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
 */function EP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await EP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Fc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function xP(t){lt().location.href=t}/**
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
 */function Jp(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function SP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kP(){return Jp()?self:null}/**
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
 */const R0="firebaseLocalStorageDb",CP=1,vu="firebaseLocalStorage",N0="fbase_key";class Uc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ih(t,e){return t.transaction([vu],e?"readwrite":"readonly").objectStore(vu)}function RP(){const t=indexedDB.deleteDatabase(R0);return new Uc(t).toPromise()}function pf(){const t=indexedDB.open(R0,CP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vu,{keyPath:N0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vu)?e(r):(r.close(),await RP(),e(await pf()))})})}async function _v(t,e,n){const r=Ih(t,!0).put({[N0]:e,value:n});return new Uc(r).toPromise()}async function NP(t,e){const n=Ih(t,!1).get(e),r=await new Uc(n).toPromise();return r===void 0?null:r.value}function wv(t,e){const n=Ih(t,!0).delete(e);return new Uc(n).toPromise()}const PP=800,OP=3;class P0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bh._getInstance(kP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SP(),!this.activeServiceWorker)return;this.sender=new TP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pf();return await _v(e,yu,"1"),await wv(e,yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_v(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ih(i,!1).getAll();return new Uc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P0.type="LOCAL";const oc=P0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:start",ut(t,e))}function LP(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:finalize",ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=500,FP=6e4,yl=1e12;class UP{constructor(e){this.auth=e,this.counter=yl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new $P(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||yl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||yl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||yl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class $P{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=VP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},FP)},MP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function VP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=f0("rcb"),BP=new Dc(3e4,6e4),jP="https://www.google.com/recaptcha/api.js?";class qP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=lt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return D(zP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&pv(lt().grecaptcha)?Promise.resolve(lt().grecaptcha):new Promise((r,i)=>{const s=lt().setTimeout(()=>{i(kt(e,"network-request-failed"))},BP.get());lt()[kd]=()=>{lt().clearTimeout(s),delete lt()[kd];const a=lt().grecaptcha;if(!a||!pv(a)){i(kt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${jP}?${Do({onload:kd,render:"explicit",hl:n})}`;Hp(o).catch(()=>{clearTimeout(s),i(kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=lt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class HP{async load(e){return new UP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="recaptcha",KP={theme:"light",type:"image"};let GP=class{constructor(e,n=Object.assign({},KP),r){this.parameters=n,this.type=O0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=it(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new HP:new qP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=lt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(jp()&&!Jp(),this.auth,"internal-error"),await WP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await gN(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function WP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ji._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function QP(t,e,n){const r=it(t),i=await Eh(r,e,ne(n));return new Zp(i,s=>wh(r,s))}async function YP(t,e,n){const r=ne(t);await _h(!1,r,"phone");const i=await Eh(r.auth,e,ne(n));return new Zp(i,s=>I0(r,s))}async function XP(t,e,n){const r=ne(t),i=await Eh(r.auth,e,ne(n));return new Zp(i,s=>E0(r,s))}async function Eh(t,e,n){var r;const i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===O0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",t,"internal-error"),(await gP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,t,"missing-multi-factor-info"),(await DP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await ON(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function JP(t,e){await Kp(ne(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss=class Hl{constructor(e){this.providerId=Hl.PROVIDER_ID,this.auth=it(e)}verifyPhoneNumber(e,n){return Eh(this.auth,e,ne(n))}static credential(e,n){return Ji._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Hl.credentialFromTaggedObject(n)}static credentialFromError(e){return Hl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ji._fromTokenResponse(n,r):null}};ss.PROVIDER_ID="phone";ss.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function bs(t,e){return e?fn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class em extends Fo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZP(t){return b0(t.auth,new em(t),t.bypassAuthState)}function eO(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),w0(n,new em(t),t.bypassAuthState)}async function tO(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Kp(n,new em(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZP;case"linkViaPopup":case"linkViaRedirect":return tO;case"reauthViaPopup":case"reauthViaRedirect":return eO;default:Rt(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new Dc(2e3,1e4);async function rO(t,e,n){const r=it(t);Lo(t,e,Nr);const i=bs(r,n);return new pr(r,"signInViaPopup",e,i).executeNotNull()}async function iO(t,e,n){const r=ne(t);Lo(r.auth,e,Nr);const i=bs(r.auth,n);return new pr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function sO(t,e,n){const r=ne(t);Lo(r.auth,e,Nr);const i=bs(r.auth,n);return new pr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class pr extends D0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nO.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO="pendingRedirect",Ra=new Map;class aO extends D0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await cO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cO(t,e){const n=M0(e),r=L0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function tm(t,e){return L0(t)._set(M0(e),"true")}function lO(){Ra.clear()}function nm(t,e){Ra.set(t._key(),e)}function L0(t){return fn(t._redirectPersistence)}function M0(t){return Xi(oO,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t,e,n){return hO(t,e,n)}async function hO(t,e,n){const r=it(t);Lo(t,e,Nr),await r._initializationPromise;const i=bs(r,n);return await tm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function dO(t,e,n){return fO(t,e,n)}async function fO(t,e,n){const r=ne(t);Lo(r.auth,e,Nr),await r.auth._initializationPromise;const i=bs(r.auth,n);await tm(i,r.auth);const s=await F0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function pO(t,e,n){return mO(t,e,n)}async function mO(t,e,n){const r=ne(t);Lo(r.auth,e,Nr),await r.auth._initializationPromise;const i=bs(r.auth,n);await _h(!1,r,e.providerId),await tm(i,r.auth);const s=await F0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function gO(t,e){return await it(t)._initializationPromise,Th(t,e,!1)}async function Th(t,e,n=!1){const r=it(t),i=bs(r,e),o=await new aO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function F0(t){const e=Fc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=10*60*1e3;class U0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yO&&this.cachedEventUids.clear(),this.cachedEventUids.has(bv(e))}saveEventToCache(e){this.cachedEventUids.add(bv(e)),this.lastProcessedEventTime=Date.now()}}function bv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(t,e={}){return ft(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wO=/^https?/;async function bO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await V0(t);for(const n of e)try{if(IO(n))return}catch{}Rt(t,"unauthorized-domain")}function IO(t){const e=nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wO.test(n))return!1;if(_O.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const EO=new Dc(3e4,6e4);function Iv(){const t=lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TO(t){return new Promise((e,n)=>{var r,i,s;function o(){Iv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iv(),n(kt(t,"network-request-failed"))},timeout:EO.get()})}if(!((i=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=lt().gapi)===null||s===void 0)&&s.load)o();else{const a=f0("iframefcb");return lt()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},Hp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Kl=null,e})}let Kl=null;function xO(t){return Kl=Kl||TO(t),Kl}/**
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
 */const SO=new Dc(5e3,15e3),AO="__/auth/iframe",kO="emulator/auth/iframe",CO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NO(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qp(e,kO):`https://${t.config.authDomain}/${AO}`,r={apiKey:e.apiKey,appName:t.name,v:Cr},i=RO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Do(r).slice(1)}`}async function PO(t){const e=await xO(t),n=lt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:NO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=lt().setTimeout(()=>{s(o)},SO.get());function c(){lt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const OO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DO=500,LO=600,MO="_blank",FO="http://localhost";class Ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UO(t,e,n,r=DO,i=LO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},OO),{width:r.toString(),height:i.toString(),top:s,left:o}),l=We().toLowerCase();n&&(a=s0(l)?MO:n),i0(l)&&(e=e||FO,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(fN(l)&&a!=="_self")return $O(e||"",a),new Ev(null);const h=window.open(e||"",a,u);D(h,t,"popup-blocked");try{h.focus()}catch{}return new Ev(h)}function $O(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VO="__/auth/handler",BO="emulator/auth/handler",jO=encodeURIComponent("fac");async function mf(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cr,eventId:i};if(e instanceof Nr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Uo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${jO}=${encodeURIComponent(c)}`:"";return`${qO(t)}?${Do(a).slice(1)}${l}`}function qO({config:t}){return t.emulator?qp(t,BO):`https://${t.authDomain}/${VO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="webStorageSupport";class zO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=is,this._completeRedirectFn=Th,this._overrideRedirectResult=nm}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mf(e,n,r,nc(),i);return UO(e,o,Fc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mf(e,n,r,nc(),i);return xP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PO(e),r=new U0(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cd,{type:Cd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cd];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l0()||zp()||Mo()}}const HO=zO;class KO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Yn("unexpected MultiFactorSessionType")}}}class rm extends KO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rm(e)}_finalizeEnroll(e,n,r){return yP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return LP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class B0{constructor(){}static assertion(e){return rm._fromCredential(e)}}B0.FACTOR_ID="phone";var Tv="@firebase/auth",xv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QO(t){Er(new Mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u0(t)},l=new IN(r,i,s,c);return EN(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Er(new Mn("auth-internal",e=>{const n=it(e.getProvider("auth").getImmediate());return(r=>new GO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Tv,xv,WO(t)),In(Tv,xv,"esm2017")}/**
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
 */const YO=5*60;gC("authIdTokenMaxAge");QO("Browser");/**
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
 */function os(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=2e3;async function JO(t,e,n){var r;const{BuildInfo:i}=os();Fn(e.sessionId,"AuthEvent did not contain a session ID");const s=await rD(e.sessionId),o={};return Mo()?o.ibi=i.packageName:Lc()?o.apn=i.packageName:Rt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,mf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function ZO(t){const{BuildInfo:e}=os(),n={};Mo()?n.iosBundleId=e.packageName:Lc()?n.androidPackageName=e.packageName:Rt(t,"operation-not-supported-in-this-environment"),await V0(t,n)}function eD(t){const{cordova:e}=os();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,dN()?"_blank":"_system","location=yes"),n(i)})})}async function tD(t,e,n){const{cordova:r}=os();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(kt(t,"redirect-cancelled-by-user"))},XO))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Lc()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function nD(t){var e,n,r,i,s,o,a,c,l,u;const h=os();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function rD(t){const e=iD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function iD(t){if(Fn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=20;class oD extends U0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function aD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:uD(),postBody:null,tenantId:t.tenantId,error:kt(t,"no-auth-event")}}function cD(t,e){return gf()._set(yf(t),e)}async function Sv(t){const e=await gf()._get(yf(t));return e&&await gf()._remove(yf(t)),e}function lD(t,e){var n,r;const i=dD(e);if(i.includes("/__/auth/callback")){const s=Gl(i),o=s.firebaseError?hD(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?kt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function uD(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<sD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function gf(){return fn(Xp)}function yf(t){return Xi("authEvent",t.config.apiKey,t.name)}function hD(t){try{return JSON.parse(t)}catch{return null}}function dD(t){const e=Gl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Gl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Gl(i).link||i||r||n||t}function Gl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Bs(n.join("?"))}/**
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
 */const fD=500;class pD{constructor(){this._redirectPersistence=is,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Th,this._overrideRedirectResult=nm}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new oD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){nD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),lO(),await this._originValidation(e);const o=aD(e,r,i);await cD(e,o);const a=await JO(e,o,n),c=await eD(a);return tD(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=os(),o=setTimeout(async()=>{await Sv(e),n.onEvent(Av())},fD),a=async u=>{clearTimeout(o);const h=await Sv(e);let d=null;h&&(u!=null&&u.url)&&(d=lD(h,u.url)),n.onEvent(d||Av())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,l=`${s.packageName.toLowerCase()}://`;os().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const mD=pD;function Av(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:kt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t,e){it(t)._logFramework(e)}var yD="@firebase/auth-compat",vD="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=1e3;function Na(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function wD(){return Na()==="http:"||Na()==="https:"}function j0(t=We()){return!!((Na()==="file:"||Na()==="ionic:"||Na()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function bD(){return Lp()||ph()}function ID(){return Fb()&&(document==null?void 0:document.documentMode)===11}function ED(t=We()){return/Edge\/\d+/.test(t)}function TD(t=We()){return ID()||ED(t)}function q0(){try{const t=self.localStorage,e=Fc();if(t)return t.setItem(e,"1"),t.removeItem(e),TD()?Za():!0}catch{return im()&&Za()}return!1}function im(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Rd(){return(wD()||Mb()||j0())&&!bD()&&q0()&&!im()}function z0(){return j0()&&typeof document<"u"}async function xD(){return z0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},_D);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function SD(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={LOCAL:"local",NONE:"none",SESSION:"session"},ta=D,H0="persistence";function AD(t,e){if(ta(Object.values(hn).includes(e),t,"invalid-persistence-type"),Lp()){ta(e!==hn.SESSION,t,"unsupported-persistence-type");return}if(ph()){ta(e===hn.NONE,t,"unsupported-persistence-type");return}if(im()){ta(e===hn.NONE||e===hn.LOCAL&&Za(),t,"unsupported-persistence-type");return}ta(e===hn.NONE||q0(),t,"unsupported-persistence-type")}async function vf(t){await t._initializationPromise;const e=K0(),n=Xi(H0,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function kD(t,e){const n=K0();if(!n)return[];const r=Xi(H0,t,e);switch(n.getItem(r)){case hn.NONE:return[lo];case hn.LOCAL:return[oc,is];case hn.SESSION:return[is];default:return[]}}function K0(){var t;try{return((t=SD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=D;class Yr{constructor(){this.browserResolver=fn(HO),this.cordovaResolver=fn(mD),this.underlyingResolver=null,this._redirectPersistence=is,this._completeRedirectFn=Th,this._overrideRedirectResult=nm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return z0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return CD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await xD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){return t.unwrap()}function RD(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){return W0(t)}function PD(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new OD(t,mP(t,e))}else if(r){const i=W0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function W0(t){const{_tokenResponse:e}=t instanceof Lt?t.customData:t;if(!e)return null;if(!(t instanceof Lt)&&"temporaryProof"in e&&"phoneNumber"in e)return ss.credentialFromResult(t);const n=e.providerId;if(!n||n===ea.PASSWORD)return null;let r;switch(n){case ea.GOOGLE:r=Kn;break;case ea.FACEBOOK:r=Hn;break;case ea.GITHUB:r=Gn;break;case ea.TWITTER:r=Wn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?uo._create(n,a):cr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ys(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Lt?r.credentialFromError(t):r.credentialFromResult(t)}function Gt(t,e){return e.catch(n=>{throw n instanceof Lt&&PD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:ND(n),additionalUserInfo:pP(n),user:mr.getOrCreate(i)}})}async function _f(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Gt(t,n.confirm(r))}}class OD{constructor(e,n){this.resolver=n,this.auth=RD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Gt(G0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this._delegate=e,this.multiFactor=_P(e)}static getOrCreate(e){return mr.USER_MAP.has(e)||mr.USER_MAP.set(e,new mr(e)),mr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Gt(this.auth,I0(this._delegate,e))}async linkWithPhoneNumber(e,n){return _f(this.auth,YP(this._delegate,e,n))}async linkWithPopup(e){return Gt(this.auth,sO(this._delegate,e,Yr))}async linkWithRedirect(e){return await vf(it(this.auth)),pO(this._delegate,e,Yr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Gt(this.auth,E0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return _f(this.auth,XP(this._delegate,e,n))}reauthenticateWithPopup(e){return Gt(this.auth,iO(this._delegate,e,Yr))}async reauthenticateWithRedirect(e){return await vf(it(this.auth)),dO(this._delegate,e,Yr)}sendEmailVerification(e){return rP(this._delegate,e)}async unlink(e){return await qN(this._delegate,e),this}updateEmail(e){return aP(this._delegate,e)}updatePassword(e){return cP(this._delegate,e)}updatePhoneNumber(e){return JP(this._delegate,e)}updateProfile(e){return oP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return iP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}mr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=D;class wf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;na(r,"invalid-api-key",{appName:e.name}),na(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Yr:void 0;this._delegate=n.initialize({options:{persistence:DD(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(GR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?mr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){TN(this._delegate,e,n)}applyActionCode(e){return WN(this._delegate,e)}checkActionCode(e){return T0(this._delegate,e)}confirmPasswordReset(e,n){return GN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Gt(this._delegate,YN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return nP(this._delegate,e)}isSignInWithEmailLink(e){return ZN(this._delegate,e)}async getRedirectResult(){na(Rd(),this._delegate,"operation-not-supported-in-this-environment");const e=await gO(this._delegate,Yr);return e?Gt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){gD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=kv(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=kv(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return JN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return KN(this._delegate,e,n||void 0)}async setPersistence(e){AD(this._delegate,e);let n;switch(e){case hn.SESSION:n=is;break;case hn.LOCAL:n=await fn(oc)._isAvailable()?oc:Xp;break;case hn.NONE:n=lo;break;default:return Rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Gt(this._delegate,jN(this._delegate))}signInWithCredential(e){return Gt(this._delegate,wh(this._delegate,e))}signInWithCustomToken(e){return Gt(this._delegate,HN(this._delegate,e))}signInWithEmailAndPassword(e,n){return Gt(this._delegate,XN(this._delegate,e,n))}signInWithEmailLink(e,n){return Gt(this._delegate,eP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return _f(this._delegate,QP(this._delegate,e,n))}async signInWithPopup(e){return na(Rd(),this._delegate,"operation-not-supported-in-this-environment"),Gt(this._delegate,rO(this._delegate,e,Yr))}async signInWithRedirect(e){return na(Rd(),this._delegate,"operation-not-supported-in-this-environment"),await vf(this._delegate),uO(this._delegate,e,Yr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return QN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}wf.Persistence=hn;function kv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&mr.getOrCreate(o)),error:e,complete:n}}function DD(t,e){const n=kD(t,e);if(typeof self<"u"&&!n.includes(oc)&&n.push(oc),typeof window<"u")for(const r of[Xp,is])n.includes(r)||n.push(r);return n.includes(lo)||n.push(lo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.providerId="phone",this._delegate=new ss(G0(Yt.auth()))}static credential(e,n){return ss.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}sm.PHONE_SIGN_IN_METHOD=ss.PHONE_SIGN_IN_METHOD;sm.PROVIDER_ID=ss.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=D;class MD{constructor(e,n,r=Yt.app()){var i;LD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new GP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="auth-compat";function UD(t){t.INTERNAL.registerComponent(new Mn(FD,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new wf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ns.EMAIL_SIGNIN,PASSWORD_RESET:Ns.PASSWORD_RESET,RECOVER_EMAIL:Ns.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ns.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ns.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ns.VERIFY_EMAIL}},EmailAuthProvider:gi,FacebookAuthProvider:Hn,GithubAuthProvider:Gn,GoogleAuthProvider:Kn,OAuthProvider:Ys,SAMLAuthProvider:mu,PhoneAuthProvider:sm,PhoneMultiFactorGenerator:B0,RecaptchaVerifier:MD,TwitterAuthProvider:Wn,Auth:wf,AuthCredential:Fo,Error:Lt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(yD,vD)}UD(Yt);var $D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,om=om||{},ae=$D||self;function xh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $c(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function VD(t){return Object.prototype.hasOwnProperty.call(t,Nd)&&t[Nd]||(t[Nd]=++BD)}var Nd="closure_uid_"+(1e9*Math.random()>>>0),BD=0;function jD(t,e,n){return t.call.apply(t.bind,arguments)}function qD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Mt=jD:Mt=qD,Mt.apply(null,arguments)}function vl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function wt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function yi(){this.s=this.s,this.o=this.o}var zD=0;yi.prototype.s=!1;yi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zD!=0)&&VD(this)};yi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Q0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function am(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Cv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ft.prototype.h=function(){this.defaultPrevented=!0};var HD=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",()=>{},e),ae.removeEventListener("test",()=>{},e)}catch{}return t}();function ac(t){return/^[\s\xa0]*$/.test(t)}function Sh(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function Qn(t){return Sh().indexOf(t)!=-1}function cm(t){return cm[" "](t),t}cm[" "]=function(){};function KD(t,e){var n=UL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var GD=Qn("Opera"),ho=Qn("Trident")||Qn("MSIE"),Y0=Qn("Edge"),bf=Y0||ho,X0=Qn("Gecko")&&!(Sh().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge"))&&!(Qn("Trident")||Qn("MSIE"))&&!Qn("Edge"),WD=Sh().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge");function J0(){var t=ae.document;return t?t.documentMode:void 0}var If;e:{var Pd="",Od=function(){var t=Sh();if(X0)return/rv:([^\);]+)(\)|;)/.exec(t);if(Y0)return/Edge\/([\d\.]+)/.exec(t);if(ho)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WD)return/WebKit\/(\S+)/.exec(t);if(GD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Od&&(Pd=Od?Od[1]:""),ho){var Dd=J0();if(Dd!=null&&Dd>parseFloat(Pd)){If=String(Dd);break e}}If=Pd}var Ef;if(ae.document&&ho){var Rv=J0();Ef=Rv||parseInt(If,10)||void 0}else Ef=void 0;var QD=Ef;function cc(t,e){if(Ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X0){e:{try{cm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cc.$.h.call(this)}}wt(cc,Ft);var YD={2:"touch",3:"pen",4:"mouse"};cc.prototype.h=function(){cc.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vc="closure_listenable_"+(1e6*Math.random()|0),XD=0;function JD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++XD,this.fa=this.ia=!1}function Ah(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function lm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ZD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Z0(t){const e={};for(const n in t)e[n]=t[n];return e}const Nv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Nv.length;s++)n=Nv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function kh(t){this.src=t,this.g={},this.h=0}kh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=xf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new JD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Tf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Q0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ah(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var um="closure_lm_"+(1e6*Math.random()|0),Ld={};function tI(t,e,n,r,i){if(r&&r.once)return rI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tI(t,e[s],n,r,i);return null}return n=fm(n),t&&t[Vc]?t.O(e,n,$c(r)?!!r.capture:!!r,i):nI(t,e,n,!1,r,i)}function nI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=$c(i)?!!i.capture:!!i,a=dm(t);if(a||(t[um]=a=new kh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=eL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)HD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eL(){function t(n){return e.call(t.src,t.listener,n)}const e=tL;return t}function rI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rI(t,e[s],n,r,i);return null}return n=fm(n),t&&t[Vc]?t.P(e,n,$c(r)?!!r.capture:!!r,i):nI(t,e,n,!0,r,i)}function iI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iI(t,e[s],n,r,i);else r=$c(r)?!!r.capture:!!r,n=fm(n),t&&t[Vc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=xf(s,n,r,i),-1<n&&(Ah(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=dm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xf(e,n,r,i)),(n=-1<t?e[t]:null)&&hm(n))}function hm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vc])Tf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dm(e))?(Tf(n,t),n.h==0&&(n.src=null,e[um]=null)):Ah(t)}}}function sI(t){return t in Ld?Ld[t]:Ld[t]="on"+t}function tL(t,e){if(t.fa)t=!0;else{e=new cc(e,this);var n=t.listener,r=t.la||t.src;t.ia&&hm(t),t=n.call(r,e)}return t}function dm(t){return t=t[um],t instanceof kh?t:null}var Md="__closure_events_fn_"+(1e9*Math.random()>>>0);function fm(t){return typeof t=="function"?t:(t[Md]||(t[Md]=function(e){return t.handleEvent(e)}),t[Md])}function _t(){yi.call(this),this.i=new kh(this),this.S=this,this.J=null}wt(_t,yi);_t.prototype[Vc]=!0;_t.prototype.removeEventListener=function(t,e,n,r){iI(this,t,e,n,r)};function Ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ft(e,t);else if(e instanceof Ft)e.target=e.target||t;else{var i=e;e=new Ft(r,t),eI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_l(o,r,!0,e)&&i}if(o=e.g=t,i=_l(o,r,!0,e)&&i,i=_l(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_l(o,r,!1,e)&&i}_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ah(n[r]);delete t.g[e],t.h--}}this.J=null};_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};_t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _l(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Tf(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var pm=ae.JSON.stringify;class nL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function rL(){var t=mm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class iL{constructor(){this.h=this.g=null}add(e,n){const r=oI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var oI=new nL(()=>new sL,t=>t.reset());class sL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function aL(t){ae.setTimeout(()=>{throw t},0)}let lc,uc=!1,mm=new iL,aI=()=>{const t=ae.Promise.resolve(void 0);lc=()=>{t.then(cL)}};var cL=()=>{for(var t;t=rL();){try{t.h.call(t.g)}catch(n){aL(n)}var e=oI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uc=!1};function Ch(t,e){_t.call(this),this.h=t||1,this.g=e||ae,this.j=Mt(this.qb,this),this.l=Date.now()}wt(Ch,_t);j=Ch.prototype;j.ga=!1;j.T=null;j.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ct(this,"tick"),this.ga&&(gm(this),this.start()))}};j.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}j.N=function(){Ch.$.N.call(this),gm(this),delete this.g};function ym(t,e,n){if(typeof t=="function")n&&(t=Mt(t,n));else if(t&&typeof t.handleEvent=="function")t=Mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function cI(t){t.g=ym(()=>{t.g=null,t.i&&(t.i=!1,cI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lL extends yi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cI(this)}N(){super.N(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hc(t){yi.call(this),this.h=t,this.g={}}wt(hc,yi);var Pv=[];function lI(t,e,n,r){Array.isArray(n)||(n&&(Pv[0]=n.toString()),n=Pv);for(var i=0;i<n.length;i++){var s=tI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function uI(t){lm(t.g,function(e,n){this.g.hasOwnProperty(n)&&hm(e)},t),t.g={}}hc.prototype.N=function(){hc.$.N.call(this),uI(this)};hc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rh(){this.g=!0}Rh.prototype.Ea=function(){this.g=!1};function uL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function hL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function js(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fL(t,n)+(r?" "+r:"")})}function dL(t,e){t.info(function(){return"TIMEOUT: "+e})}Rh.prototype.info=function(){};function fL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pm(n)}catch{return e}}var Is={},Ov=null;function Nh(){return Ov=Ov||new _t}Is.Ta="serverreachability";function hI(t){Ft.call(this,Is.Ta,t)}wt(hI,Ft);function dc(t){const e=Nh();Ct(e,new hI(e))}Is.STAT_EVENT="statevent";function dI(t,e){Ft.call(this,Is.STAT_EVENT,t),this.stat=e}wt(dI,Ft);function qt(t){const e=Nh();Ct(e,new dI(e,t))}Is.Ua="timingevent";function fI(t,e){Ft.call(this,Is.Ua,t),this.size=e}wt(fI,Ft);function Bc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var Ph={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vm(){}vm.prototype.h=null;function Dv(t){return t.h||(t.h=t.i())}function mI(){}var jc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _m(){Ft.call(this,"d")}wt(_m,Ft);function wm(){Ft.call(this,"c")}wt(wm,Ft);var Sf;function Oh(){}wt(Oh,vm);Oh.prototype.g=function(){return new XMLHttpRequest};Oh.prototype.i=function(){return{}};Sf=new Oh;function qc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new hc(this),this.P=pL,t=bf?125:void 0,this.V=new Ch(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gI}function gI(){this.i=null,this.g="",this.h=!1}var pL=45e3,Af={},_u={};j=qc.prototype;j.setTimeout=function(t){this.P=t};function kf(t,e,n){t.L=1,t.v=Lh(xr(e)),t.s=n,t.S=!0,yI(t,null)}function yI(t,e){t.G=Date.now(),zc(t),t.A=xr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),xI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new gI,t.g=KI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new lL(Mt(t.Pa,t,t.g),t.O)),lI(t.U,t.g,"readystatechange",t.nb),e=t.I?Z0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),dc(),uL(t.j,t.u,t.A,t.m,t.W,t.s)}j.nb=function(t){t=t.target;const e=this.M;e&&Xn(t)==3?e.l():this.Pa(t)};j.Pa=function(t){try{if(t==this.g)e:{const u=Xn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||bf||this.g&&(this.h.h||this.g.ja()||Uv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?dc(3):dc(2)),Dh(this);var n=this.g.da();this.ca=n;t:if(vI(this)){var r=Uv(this.g);t="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bi(this),Pa(this);var o="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,hL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ac(a)){var l=a;break t}}l=null}if(n=l)js(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cf(this,n);else{this.i=!1,this.o=3,qt(12),Bi(this),Pa(this);break e}}this.S?(_I(this,u,o),bf&&this.i&&u==3&&(lI(this.U,this.V,"tick",this.mb),this.V.start())):(js(this.j,this.m,o,null),Cf(this,o)),u==4&&Bi(this),this.i&&!this.J&&(u==4?jI(this.l,this):(this.i=!1,zc(this)))}else LL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qt(12)):(this.o=0,qt(13)),Bi(this),Pa(this)}}}catch{}finally{}};function vI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function _I(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=mL(t,n),i==_u){e==4&&(t.o=4,qt(14),r=!1),js(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Af){t.o=4,qt(15),js(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else js(t.j,t.m,i,null),Cf(t,i);vI(t)&&i!=_u&&i!=Af&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sm(e),e.M=!0,qt(11))):(js(t.j,t.m,n,"[Invalid Chunked Response]"),Bi(t),Pa(t))}j.mb=function(){if(this.g){var t=Xn(this.g),e=this.g.ja();this.C<e.length&&(Dh(this),_I(this,t,e),this.i&&t!=4&&zc(this))}};function mL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?_u:(n=Number(e.substring(n,r)),isNaN(n)?Af:(r+=1,r+n>e.length?_u:(e=e.slice(r,r+n),t.C=r+n,e)))}j.cancel=function(){this.J=!0,Bi(this)};function zc(t){t.Y=Date.now()+t.P,wI(t,t.P)}function wI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bc(Mt(t.lb,t),e)}function Dh(t){t.B&&(ae.clearTimeout(t.B),t.B=null)}j.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(dL(this.j,this.A),this.L!=2&&(dc(),qt(17)),Bi(this),this.o=2,Pa(this)):wI(this,this.Y-t)};function Pa(t){t.l.H==0||t.J||jI(t.l,t)}function Bi(t){Dh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,gm(t.V),uI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Cf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Rf(n.i,t))){if(!t.K&&Rf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Iu(n),Uh(n);else break e;xm(n),qt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bc(Mt(n.ib,n),6e3));if(1>=kI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ji(n,11)}else if((t.K||n.g==t)&&Iu(n),!ac(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bm(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,$e(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=HI(r,r.J?r.pa:null,r.Y),o.K){CI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Dh(a),zc(a)),r.g=o}else VI(r);0<n.j.length&&$h(n)}else l[0]!="stop"&&l[0]!="close"||ji(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ji(n,7):Tm(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}dc(4)}catch{}}function gL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function yL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function bI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yL(t),r=gL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var II=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Zi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zi){this.h=t.h,wu(this,t.j),this.s=t.s,this.g=t.g,bu(this,t.m),this.l=t.l;var e=t.i,n=new fc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lv(this,n),this.o=t.o}else t&&(e=String(t).match(II))?(this.h=!1,wu(this,e[1]||"",!0),this.s=va(e[2]||""),this.g=va(e[3]||"",!0),bu(this,e[4]),this.l=va(e[5]||"",!0),Lv(this,e[6]||"",!0),this.o=va(e[7]||"")):(this.h=!1,this.i=new fc(null,this.h))}Zi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_a(e,Mv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_a(e,Mv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_a(n,n.charAt(0)=="/"?bL:wL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_a(n,EL)),t.join("")};function xr(t){return new Zi(t)}function wu(t,e,n){t.j=n?va(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lv(t,e,n){e instanceof fc?(t.i=e,TL(t.i,t.h)):(n||(e=_a(e,IL)),t.i=new fc(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function Lh(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function va(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _a(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_L),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _L(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mv=/[#\/\?@]/g,wL=/[#\?:]/g,bL=/[#\?]/g,IL=/[#\?@]/g,EL=/#/g;function fc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vi(t){t.g||(t.g=new Map,t.h=0,t.i&&vL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=fc.prototype;j.add=function(t,e){vi(this),this.i=null,t=$o(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function EI(t,e){vi(t),e=$o(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function TI(t,e){return vi(t),e=$o(t,e),t.g.has(e)}j.forEach=function(t,e){vi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};j.ta=function(){vi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};j.Z=function(t){vi(this);let e=[];if(typeof t=="string")TI(this,t)&&(e=e.concat(this.g.get($o(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return vi(this),this.i=null,t=$o(this,t),TI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function xI(t,e,n){EI(t,e),0<n.length&&(t.i=null,t.g.set($o(t,e),am(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function $o(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TL(t,e){e&&!t.j&&(vi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(EI(this,r),xI(this,i,n))},t)),t.j=e}var xL=class{constructor(t,e){this.g=t,this.map=e}};function SI(t){this.l=t||SL,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ka&&ae.g.Ka()&&ae.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SL=10;function AI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kI(t){return t.h?1:t.g?t.g.size:0}function Rf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bm(t,e){t.g?t.g.add(e):t.h=e}function CI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}SI.prototype.cancel=function(){if(this.i=RI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function RI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return am(t.i)}var AL=class{stringify(t){return ae.JSON.stringify(t,void 0)}parse(t){return ae.JSON.parse(t,void 0)}};function kL(){this.g=new AL}function CL(t,e,n){const r=n||"";try{bI(t,function(i,s){let o=i;$c(i)&&(o=pm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function RL(t,e){const n=new Rh;if(ae.Image){const r=new Image;r.onload=vl(wl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vl(wl,n,r,"TestLoadImage: error",!1,e),r.onabort=vl(wl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vl(wl,n,r,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Hc(t){this.l=t.fc||null,this.j=t.ob||!1}wt(Hc,vm);Hc.prototype.g=function(){return new Mh(this.l,this.j)};Hc.prototype.i=function(t){return function(){return t}}({});function Mh(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Im,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wt(Mh,_t);var Im=0;j=Mh.prototype;j.open=function(t,e){if(this.readyState!=Im)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pc(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kc(this)),this.readyState=Im};j.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pc(this)),this.g&&(this.readyState=3,pc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;NI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function NI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}j.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kc(this):pc(this),this.readyState==3&&NI(this)}};j.Za=function(t){this.g&&(this.response=this.responseText=t,Kc(this))};j.Ya=function(t){this.g&&(this.response=t,Kc(this))};j.ka=function(){this.g&&Kc(this)};function Kc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pc(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NL=ae.JSON.parse;function Je(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=PI,this.L=this.M=!1}wt(Je,_t);var PI="",PL=/^https?$/i,OL=["POST","PUT"];j=Je.prototype;j.Oa=function(t){this.M=t};j.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sf.g(),this.C=this.u?Dv(this.u):Dv(Sf),this.g.onreadystatechange=Mt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Fv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ae.FormData&&t instanceof ae.FormData,!(0<=Q0(OL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{LI(this),0<this.B&&((this.L=DL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mt(this.ua,this)):this.A=ym(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Fv(this,s)}};function DL(t){return ho&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.ua=function(){typeof om<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))};function Fv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,OI(t),Fh(t)}function OI(t){t.F||(t.F=!0,Ct(t,"complete"),Ct(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Fh(this))};j.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fh(this,!0)),Je.$.N.call(this)};j.La=function(){this.s||(this.G||this.v||this.l?DI(this):this.kb())};j.kb=function(){DI(this)};function DI(t){if(t.h&&typeof om<"u"&&(!t.C[1]||Xn(t)!=4||t.da()!=2)){if(t.v&&Xn(t)==4)ym(t.La,0,t);else if(Ct(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(II)[1]||null;!i&&ae.self&&ae.self.location&&(i=ae.self.location.protocol.slice(0,-1)),r=!PL.test(i?i.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var s=2<Xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",OI(t)}}finally{Fh(t)}}}}function Fh(t,e){if(t.g){LI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function LI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}j.isActive=function(){return!!this.g};function Xn(t){return t.g?t.g.readyState:0}j.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};j.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NL(e)}};function Uv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case PI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function LL(t){const e={};t=(t.g&&2<=Xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ac(t[r]))continue;var n=oL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}ZD(e,function(r){return r.join(", ")})}j.Ia=function(){return this.m};j.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function MI(t){let e="";return lm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Em(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=MI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$e(t,e,n))}function ra(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function FI(t){this.Ga=0,this.j=[],this.l=new Rh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ra("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ra("baseRetryDelayMs",5e3,t),this.hb=ra("retryDelaySeedMs",1e4,t),this.eb=ra("forwardChannelMaxRetries",2,t),this.xa=ra("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new SI(t&&t.concurrentRequestLimit),this.Ja=new kL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}j=FI.prototype;j.ra=8;j.H=1;function Tm(t){if(UI(t),t.H==3){var e=t.W++,n=xr(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),Gc(t,n),e=new qc(t,t.l,e),e.L=2,e.v=Lh(xr(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon)try{n=ae.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ae.Image&&(new Image().src=e.v,n=!0),n||(e.g=KI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zc(e)}zI(t)}function Uh(t){t.g&&(Sm(t),t.g.cancel(),t.g=null)}function UI(t){Uh(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Iu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function $h(t){if(!AI(t.i)&&!t.m){t.m=!0;var e=t.Na;lc||aI(),uc||(lc(),uc=!0),mm.add(e,t),t.C=0}}function ML(t,e){return kI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bc(Mt(t.Na,t,e),qI(t,t.C)),t.C++,!0)}j.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new qc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Z0(s),eI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$I(this,i,e),n=xr(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),Gc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(MI(s)))+"&"+e:this.o&&Em(n,this.o,s)),bm(this.i,i),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),i.aa=!0,kf(i,n,null)):kf(i,n,e),this.H=2}}else this.H==3&&(t?$v(this,t):this.j.length==0||AI(this.i)||$v(this))};function $v(t,e){var n;e?n=e.m:n=t.W++;const r=xr(t.I);$e(r,"SID",t.K),$e(r,"RID",n),$e(r,"AID",t.V),Gc(t,r),t.o&&t.s&&Em(r,t.o,t.s),n=new qc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$I(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),bm(t.i,n),kf(n,r,e)}function Gc(t,e){t.na&&lm(t.na,function(n,r){$e(e,r,n)}),t.h&&bI({},function(n,r){$e(e,r,n)})}function $I(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Mt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{CL(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function VI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;lc||aI(),uc||(lc(),uc=!0),mm.add(e,t),t.A=0}}function xm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bc(Mt(t.Ma,t),qI(t,t.A)),t.A++,!0)}j.Ma=function(){if(this.u=null,BI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bc(Mt(this.jb,this),t)}};j.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,qt(10),Uh(this),BI(this))};function Sm(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function BI(t){t.g=new qc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=xr(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),Gc(t,e),t.o&&t.s&&Em(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Lh(xr(e)),n.s=null,n.S=!0,yI(n,t)}j.ib=function(){this.v!=null&&(this.v=null,Uh(this),xm(this),qt(19))};function Iu(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function jI(t,e){var n=null;if(t.g==e){Iu(t),Sm(t),t.g=null;var r=2}else if(Rf(t.i,e))n=e.F,CI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Nh(),Ct(r,new fI(r,n)),$h(t)}else VI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&ML(t,e)||r==2&&xm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ji(t,5);break;case 4:ji(t,10);break;case 3:ji(t,6);break;default:ji(t,2)}}}function qI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ji(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Mt(t.pb,t);n||(n=new Zi("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||wu(n,"https"),Lh(n)),RL(n.toString(),r)}else qt(2);t.H=0,t.h&&t.h.za(e),zI(t),UI(t)}j.pb=function(t){t?(this.l.info("Successfully pinged google.com"),qt(2)):(this.l.info("Failed to ping google.com"),qt(1))};function zI(t){if(t.H=0,t.ma=[],t.h){const e=RI(t.i);(e.length!=0||t.j.length!=0)&&(Cv(t.ma,e),Cv(t.ma,t.j),t.i.i.length=0,am(t.j),t.j.length=0),t.h.ya()}}function HI(t,e,n){var r=n instanceof Zi?xr(n):new Zi(n);if(r.g!="")e&&(r.g=e+"."+r.g),bu(r,r.m);else{var i=ae.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Zi(null);r&&wu(s,r),e&&(s.g=e),i&&bu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&$e(r,n,e),$e(r,"VER",t.ra),Gc(t,r),r}function KI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Je(new Hc({ob:!0})):new Je(t.va),e.Oa(t.J),e}j.isActive=function(){return!!this.h&&this.h.isActive(this)};function GI(){}j=GI.prototype;j.Ba=function(){};j.Aa=function(){};j.za=function(){};j.ya=function(){};j.isActive=function(){return!0};j.Va=function(){};function Eu(){if(ho&&!(10<=Number(QD)))throw Error("Environmental error: no available transport.")}Eu.prototype.g=function(t,e){return new mn(t,e)};function mn(t,e){_t.call(this),this.g=new FI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ac(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ac(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vo(this)}wt(mn,_t);mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;qt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=HI(t,null,t.Y),$h(t)};mn.prototype.close=function(){Tm(this.g)};mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pm(t),t=n);e.j.push(new xL(e.fb++,t)),e.H==3&&$h(e)};mn.prototype.N=function(){this.g.h=null,delete this.j,Tm(this.g),delete this.g,mn.$.N.call(this)};function WI(t){_m.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}wt(WI,_m);function QI(){wm.call(this),this.status=1}wt(QI,wm);function Vo(t){this.g=t}wt(Vo,GI);Vo.prototype.Ba=function(){Ct(this.g,"a")};Vo.prototype.Aa=function(t){Ct(this.g,new WI(t))};Vo.prototype.za=function(t){Ct(this.g,new QI)};Vo.prototype.ya=function(){Ct(this.g,"b")};function FL(){this.blockSize=-1}function Un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}wt(Un,FL);Un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Fd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Un.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Fd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Fd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Fd(this,r),i=0;break}}this.h=i,this.i+=e};Un.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Pe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var UL={};function Am(t){return-128<=t&&128>t?KD(t,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([t|0],0>t?-1:0)}function Jn(t){if(isNaN(t)||!isFinite(t))return Zs;if(0>t)return xt(Jn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Nf;return new Pe(e,0)}function YI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xt(YI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jn(Math.pow(e,8)),r=Zs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Jn(Math.pow(e,s)),r=r.R(s).add(Jn(o))):(r=r.R(n),r=r.add(Jn(o)))}return r}var Nf=4294967296,Zs=Am(0),Pf=Am(1),Vv=Am(16777216);j=Pe.prototype;j.ea=function(){if(vn(this))return-xt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Nf+r)*e,e*=Nf}return t};j.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gr(this))return"0";if(vn(this))return"-"+xt(this).toString(t);for(var e=Jn(Math.pow(t,6)),n=this,r="";;){var i=xu(n,e).g;n=Tu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,gr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};j.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vn(t){return t.h==-1}j.X=function(t){return t=Tu(this,t),vn(t)?-1:gr(t)?0:1};function xt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Pe(n,~t.h).add(Pf)}j.abs=function(){return vn(this)?xt(this):this};j.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Pe(n,n[n.length-1]&-2147483648?-1:0)};function Tu(t,e){return t.add(xt(e))}j.R=function(t){if(gr(this)||gr(t))return Zs;if(vn(this))return vn(t)?xt(this).R(xt(t)):xt(xt(this).R(t));if(vn(t))return xt(this.R(xt(t)));if(0>this.X(Vv)&&0>t.X(Vv))return Jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,bl(n,2*r+2*i),n[2*r+2*i+1]+=s*c,bl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,bl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,bl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Pe(n,0)};function bl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ia(t,e){this.g=t,this.h=e}function xu(t,e){if(gr(e))throw Error("division by zero");if(gr(t))return new ia(Zs,Zs);if(vn(t))return e=xu(xt(t),e),new ia(xt(e.g),xt(e.h));if(vn(e))return e=xu(t,xt(e)),new ia(xt(e.g),e.h);if(30<t.g.length){if(vn(t)||vn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Pf,r=e;0>=r.X(t);)n=Bv(n),r=Bv(r);var i=Ps(n,1),s=Ps(r,1);for(r=Ps(r,2),n=Ps(n,2);!gr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ps(r,1),n=Ps(n,1)}return e=Tu(t,i.R(e)),new ia(i,e)}for(i=Zs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jn(n),o=s.R(e);vn(o)||0<o.X(t);)n-=r,s=Jn(n),o=s.R(e);gr(s)&&(s=Pf),i=i.add(s),t=Tu(t,o)}return new ia(i,t)}j.gb=function(t){return xu(this,t).h};j.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Pe(n,this.h&t.h)};j.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Pe(n,this.h|t.h)};j.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Pe(n,this.h^t.h)};function Bv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Pe(n,t.h)}function Ps(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Pe(i,t.h)}Eu.prototype.createWebChannel=Eu.prototype.g;mn.prototype.send=mn.prototype.u;mn.prototype.open=mn.prototype.m;mn.prototype.close=mn.prototype.close;Ph.NO_ERROR=0;Ph.TIMEOUT=8;Ph.HTTP_ERROR=6;pI.COMPLETE="complete";mI.EventType=jc;jc.OPEN="a";jc.CLOSE="b";jc.ERROR="c";jc.MESSAGE="d";_t.prototype.listen=_t.prototype.O;Je.prototype.listenOnce=Je.prototype.P;Je.prototype.getLastError=Je.prototype.Sa;Je.prototype.getLastErrorCode=Je.prototype.Ia;Je.prototype.getStatus=Je.prototype.da;Je.prototype.getResponseJson=Je.prototype.Wa;Je.prototype.getResponseText=Je.prototype.ja;Je.prototype.send=Je.prototype.ha;Je.prototype.setWithCredentials=Je.prototype.Oa;Un.prototype.digest=Un.prototype.l;Un.prototype.reset=Un.prototype.reset;Un.prototype.update=Un.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=Jn;Pe.fromString=YI;var $L=function(){return new Eu},VL=function(){return Nh()},Ud=Ph,BL=pI,jL=Is,jv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qL=Hc,Il=mI,zL=Je,HL=Un,eo=Pe;const qv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Bo="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new mh("@firebase/firestore");function Of(){return ai.logLevel}function KL(t){ai.setLogLevel(t)}function P(t,...e){if(ai.logLevel<=be.DEBUG){const n=e.map(km);ai.debug(`Firestore (${Bo}): ${t}`,...n)}}function et(t,...e){if(ai.logLevel<=be.ERROR){const n=e.map(km);ai.error(`Firestore (${Bo}): ${t}`,...n)}}function $n(t,...e){if(ai.logLevel<=be.WARN){const n=e.map(km);ai.warn(`Firestore (${Bo}): ${t}`,...n)}}function km(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: `+t;throw et(e),new Error(e)}function J(t,e){t||H()}function GL(t,e){t||H()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class QL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YL{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new XI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new mt(e)}}class XL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class JL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new XL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eM{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.T=n.token,new ZL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function fo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function ZI(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mc{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends mc{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const nM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends mc{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return nM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eE{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Df(t){return t.fields.find(e=>e.kind===2)}function ki(t){return t.fields.filter(e=>e.kind!==2)}eE.UNKNOWN_ID=-1;class rM{constructor(e,n){this.fieldPath=e,this.kind=n}}class Su{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Su(0,gn.min())}}function tE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new gn(i,V.empty(),e)}function nE(t){return new gn(t.readTime,t.key,-1)}class gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gn(X.min(),V.empty(),-1)}static max(){return new gn(X.max(),V.empty(),-1)}}function Cm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==rE)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new yt,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Oa(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=Rm(r.target.error);this.v.reject(new Oa(e,i))}}static open(e,n,r,i){try{return new Vh(n,e.transaction(i,r))}catch(s){throw new Oa(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new sM(n)}}class Pn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,Pn.S(We())===12.2&&et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Ni(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Za())return!1;if(Pn.C())return!0;const e=We(),n=Pn.S(e),r=0<n&&n<10,i=Pn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Oa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Oa(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Vh.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),b.reject(l))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class iM{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ni(this.L.delete())}}class Oa extends R{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function wi(t){return t.name==="IndexedDbTransactionError"}class sM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ni(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Ni(this.store.add(e))}get(e){return Ni(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Ni(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Ni(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new b((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new b((r,i)=>{n.onerror=s=>{const o=Rm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new iM(a),l=n(a.primaryKey,a.value,c);if(l instanceof b){const u=l.catch(h=>(c.done(),b.reject(h)));r.push(u)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ni(t){return new b((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Rm(r.target.error);n(i)}})}let zv=!1;function Rm(t){const e=Pn.S(We());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return zv||(zv=!0,setTimeout(()=>{throw r},0)),r}}return t}class oM{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){wi(n)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await _i(n)}await this.et(6e4)})}}class aM{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=nE(s);Cm(o,r)>0&&(r=o)}),new gn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Xt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Xt.ct=-1;function Wc(t){return t==null}function gc(t){return t===0&&1/t==-1/0}function sE(t){return typeof t=="number"&&Number.isInteger(t)&&!gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Hv(e)),e=cM(t.get(n),e);return Hv(e)}function cM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Hv(t){return t+""}function Zn(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),Ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:H()}s=o+2}return new Ie(r)}/**
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
 */const Kv=["userId","batchId"];/**
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
 */function Wl(t,e){return[t,zt(e)]}function oE(t,e,n){return[t,zt(e),n]}const lM={},uM=["prefixPath","collectionGroup","readTime","documentId"],hM=["prefixPath","collectionGroup","documentId"],dM=["collectionGroup","readTime","prefixPath","documentId"],fM=["canonicalId","targetId"],pM=["targetId","path"],mM=["path","targetId"],gM=["collectionId","parent"],yM=["indexId","uid"],vM=["uid","sequenceNumber"],_M=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],wM=["indexId","uid","orderedDocumentKey"],bM=["userId","collectionPath","documentId"],IM=["userId","collectionPath","largestBatchId"],EM=["userId","collectionGroup","largestBatchId"],aE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],TM=[...aE,"documentOverlays"],cE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lE=cE,xM=[...lE,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends iE{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function bt(t,e){const n=B(t);return Pn.M(n.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wv(this.data.getIterator())}getIteratorFrom(e){return new Wv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Wv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Os(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new Be(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class hE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hE("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const AM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(t){if(J(!!t),typeof t=="string"){let e=0;const n=AM.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function li(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nm(t){const e=t.mapValue.fields.__previous_value__;return Bh(e)?Nm(e):e}function yc(t){const e=ci(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ui&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ql={nullValue:"NULL_VALUE"};function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bh(t)?4:dE(t)?9007199254740991:10:H()}function lr(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yc(t).isEqual(yc(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ci(r.timestampValue),o=ci(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return li(r.bytesValue).isEqual(li(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Xe(r.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(r.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Xe(r.integerValue)===Xe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Xe(r.doubleValue),o=Xe(i.doubleValue);return s===o?gc(s)===gc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return fo(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Gv(s)!==Gv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!lr(s[a],o[a])))return!1;return!0}(t,e);default:return H()}}function vc(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function hi(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Xe(i.integerValue||i.doubleValue),a=Xe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Qv(t.timestampValue,e.timestampValue);case 4:return Qv(yc(t),yc(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,s){const o=li(i),a=li(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=le(Xe(i.latitude),Xe(s.latitude));return o!==0?o:le(Xe(i.longitude),Xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=hi(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Xr.mapValue&&s===Xr.mapValue)return 0;if(i===Xr.mapValue)return 1;if(s===Xr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const d=hi(o[a[u]],c[l[u]]);if(d!==0)return d}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw H()}}function Qv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=ci(t),r=ci(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function po(t){return Mf(t)}function Mf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ci(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?li(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Mf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Mf(r.fields[a])}`;return s+"}"}(t.mapValue):H();var e,n}function cs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ff(t){return!!t&&"integerValue"in t}function _c(t){return!!t&&"arrayValue"in t}function Yv(t){return!!t&&"nullValue"in t}function Xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function Da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function CM(t){return"nullValue"in t?Ql:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?cs(ui.empty(),V.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:H()}function RM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?cs(ui.empty(),V.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Xr:H()}function Jv(t,e){const n=hi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Zv(t,e){const n=hi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Da(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(Da(this.value))}}function fE(t){const e=[];return Es(t.fields,(n,r)=>{const i=new tt([n]);if(Yl(r)){const s=fE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,X.min(),X.min(),X.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new Ve(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Ve(e,2,n,X.min(),X.min(),St.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,X.min(),X.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class di{constructor(e,n){this.position=e,this.inclusive=n}}function e_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=hi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function t_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class to{constructor(e,n="asc"){this.field=e,this.dir=n}}function NM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pE{}class ge extends pE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PM(e,n,r):n==="array-contains"?new LM(e,r):n==="in"?new wE(e,r):n==="not-in"?new MM(e,r):n==="array-contains-any"?new FM(e,r):new ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OM(e,r):new DM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hi(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ne extends pE{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Ne(e,n)}matches(e){return mo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function mo(t){return t.op==="and"}function Uf(t){return t.op==="or"}function Pm(t){return mE(t)&&mo(t)}function mE(t){for(const e of t.filters)if(e instanceof Ne)return!1;return!0}function $f(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+po(t.value);if(Pm(t))return t.filters.map(e=>$f(e)).join(",");{const e=t.filters.map(n=>$f(n)).join(",");return`${t.op}(${e})`}}function gE(t,e){return t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.field.isEqual(r.field)&&lr(n.value,r.value)}(t,e):t instanceof Ne?function(n,r){return r instanceof Ne&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&gE(s,r.filters[o]),!0):!1}(t,e):void H()}function yE(t,e){const n=t.filters.concat(e);return Ne.create(n,t.op)}function vE(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${po(e.value)}`}(t):t instanceof Ne?function(e){return e.op.toString()+" {"+e.getFilters().map(vE).join(" ,")+"}"}(t):"Filter"}class PM extends ge{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class OM extends ge{constructor(e,n){super(e,"in",n),this.keys=_E("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DM extends ge{constructor(e,n){super(e,"not-in",n),this.keys=_E("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _E(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class LM extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _c(n)&&vc(n.arrayValue,this.value)}}class wE extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vc(this.value.arrayValue,n)}}class MM extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(vc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vc(this.value.arrayValue,n)}}class FM extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_c(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vc(this.value.arrayValue,r))}}/**
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
 */class UM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Vf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new UM(t,e,n,r,i,s,o)}function ls(t){const e=B(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$f(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>po(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>po(r)).join(",")),e.dt=n}return e.dt}function Qc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!t_(t.startAt,e.startAt)&&t_(t.endAt,e.endAt)}function Au(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ku(t,e){return t.filters.filter(n=>n instanceof ge&&n.field.isEqual(e))}function n_(t,e,n){let r=Ql,i=!0;for(const s of ku(t,e)){let o=Ql,a=!0;switch(s.op){case"<":case"<=":o=CM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ql}Jv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Jv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function r_(t,e,n){let r=Xr,i=!0;for(const s of ku(t,e)){let o=Xr,a=!0;switch(s.op){case">=":case">":o=RM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Xr}Zv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Zv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function bE(t,e,n,r,i,s,o,a){return new Pr(t,e,n,r,i,s,o,a)}function jo(t){return new Pr(t)}function i_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Om(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Dm(t){return t.collectionGroup!==null}function es(t){const e=B(t);if(e.wt===null){e.wt=[];const n=jh(e),r=Om(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new to(n)),e.wt.push(new to(tt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new to(tt.keyField(),s))}}}return e.wt}function rn(t){const e=B(t);if(!e._t)if(e.limitType==="F")e._t=Vf(e.path,e.collectionGroup,es(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of es(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new to(s.field,o))}const r=e.endAt?new di(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new di(e.startAt.position,e.startAt.inclusive):null;e._t=Vf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Bf(t,e){e.getFirstInequalityField(),jh(t);const n=t.filters.concat([e]);return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Cu(t,e,n){return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yc(t,e){return Qc(rn(t),rn(e))&&t.limitType===e.limitType}function IE(t){return`${ls(rn(t))}|lt:${t.limitType}`}function jf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>vE(r)).join(", ")}]`),Wc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>po(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>po(r)).join(",")),`Target(${n})`}(rn(t))}; limitType=${t.limitType})`}function Xc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of es(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=e_(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,es(n),r)||n.endAt&&!function(i,s,o){const a=e_(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,es(n),r))}(t,e)}function EE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TE(t){return(e,n)=>{let r=!1;for(const i of es(t)){const s=$M(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $M(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?hi(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=new Me(V.comparator);function Zt(){return VM}const xE=new Me(V.comparator);function wa(...t){let e=xE;for(const n of t)e=e.insert(n.key,n);return e}function SE(t){let e=xE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function er(){return La()}function AE(){return La()}function La(){return new bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const BM=new Me(V.comparator),jM=new Be(V.comparator);function ue(...t){let e=jM;for(const n of t)e=e.add(n);return e}const qM=new Be(le);function Lm(){return qM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function CE(t){return{integerValue:""+t}}function RE(t,e){return sE(e)?CE(e):kE(t,e)}/**
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
 */class qh{constructor(){this._=void 0}}function zM(t,e,n){return t instanceof go?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Bh(i)&&(i=Nm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof us?PE(t,e):t instanceof hs?OE(t,e):function(r,i){const s=NE(r,i),o=s_(s)+s_(r.gt);return Ff(s)&&Ff(r.gt)?CE(o):kE(r.serializer,o)}(t,e)}function HM(t,e,n){return t instanceof us?PE(t,e):t instanceof hs?OE(t,e):n}function NE(t,e){return t instanceof yo?Ff(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class go extends qh{}class us extends qh{constructor(e){super(),this.elements=e}}function PE(t,e){const n=DE(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class hs extends qh{constructor(e){super(),this.elements=e}}function OE(t,e){let n=DE(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class yo extends qh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function s_(t){return Xe(t.integerValue||t.doubleValue)}function DE(t){return _c(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.field=e,this.transform=n}}function KM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof us&&r instanceof us||n instanceof hs&&r instanceof hs?fo(n.elements,r.elements,lr):n instanceof yo&&r instanceof yo?lr(n.gt,r.gt):n instanceof go&&r instanceof go}(t.transform,e.transform)}class GM{constructor(e,n){this.version=e,this.transformResults=n}}class ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zh{}function LE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zo(t.key,ze.none()):new qo(t.key,t.data,ze.none());{const n=t.data,r=St.empty();let i=new Be(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new Jt(i.toArray()),ze.none())}}function WM(t,e,n){t instanceof qo?function(r,i,s){const o=r.value.clone(),a=a_(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(r,i,s){if(!Xl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=a_(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ME(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ma(t,e,n,r){return t instanceof qo?function(i,s,o,a){if(!Xl(i.precondition,s))return o;const c=i.value.clone(),l=c_(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(i,s,o,a){if(!Xl(i.precondition,s))return o;const c=c_(i.fieldTransforms,a,s),l=s.data;return l.setAll(ME(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return Xl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function QM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=NE(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function o_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&fo(n,r,(i,s)=>KM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends zh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends zh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ME(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function a_(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HM(o,a,n[i]))}return r}function c_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,zM(s,o,e))}return r}class zo extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mm extends zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=AE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=LE(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(n,r)=>o_(n,r))&&fo(this.baseMutations,e.baseMutations,(n,r)=>o_(n,r))}}class Um{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=BM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Um(e,n,r,i)}}/**
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
 */class $m{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,_e;function FE(t){switch(t){default:return H();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function UE(t){if(t===void 0)return et("GRPC error has no .code"),I.UNKNOWN;switch(t){case ct.OK:return I.OK;case ct.CANCELLED:return I.CANCELLED;case ct.UNKNOWN:return I.UNKNOWN;case ct.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ct.INTERNAL:return I.INTERNAL;case ct.UNAVAILABLE:return I.UNAVAILABLE;case ct.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ct.NOT_FOUND:return I.NOT_FOUND;case ct.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ct.ABORTED:return I.ABORTED;case ct.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ct.DATA_LOSS:return I.DATA_LOSS;default:return H()}}(_e=ct||(ct={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Vm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Tl}static getOrCreateInstance(){return Tl===null&&(Tl=new Vm),Tl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Tl=null;/**
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
 */function $E(){return new TextEncoder}/**
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
 */const XM=new eo([4294967295,4294967295],0);function l_(t){const e=$E().encode(t),n=new HL;return n.update(e),new Uint8Array(n.digest())}function u_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new eo([n,r],0),new eo([i,s],0)]}class Bm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ba(`Invalid padding: ${n}`);if(r<0)throw new ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ba(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=eo.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(eo.fromNumber(r)));return i.compare(XM)===1&&(i=new eo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=l_(e),[r,i]=u_(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Bm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=l_(e),[r,i]=u_(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zc(X.min(),i,new Me(le),Zt(),ue())}}class el{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new el(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class VE{constructor(e,n){this.targetId=e,this.Vt=n}}class BE{constructor(e,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class h_{constructor(){this.St=0,this.Dt=f_(),this.Ct=dt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ue(),n=ue(),r=ue();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new el(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=f_()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class JM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Zt(),this.zt=d_(),this.Wt=new Me(le)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Au(o))if(i===0){const a=new V(o.path);this.Yt(r,a,Ve.newNoDocument(a,X.min()))}else J(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=Vm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,g,v,_,T;const A={localCacheCount:u,existenceFilterCount:h.count},k=h.unchangedNames;return k&&(A.bloomFilter={applied:l===0,hashCount:(d=k==null?void 0:k.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(g=(f=k==null?void 0:k.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&v!==void 0?v:0,padding:(T=(_=k==null?void 0:k.bits)===null||_===void 0?void 0:_.padding)!==null&&T!==void 0?T:0}),A}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=li(s).toUint8Array()}catch(u){if(u instanceof hE)return $n("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Bm(c,o,a)}catch(u){return $n(u instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:i!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Au(a.target)){const c=new V(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Ve.newNoDocument(c,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=ue();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Zc(e,n,this.Wt,this.jt,r);return this.jt=Zt(),this.zt=d_(),this.Wt=new Me(le),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new h_,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Be(le),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new h_),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function d_(){return new Me(V.comparator)}function f_(){return new Me(V.comparator)}const ZM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),e2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),t2=(()=>({and:"AND",or:"OR"}))();class n2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qf(t,e){return t.useProto3Json||Wc(e)?e:{value:e}}function vo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function r2(t,e){return vo(t,e.toTimestamp())}function rt(t){return J(!!t),X.fromTimestamp(function(e){const n=ci(e);return new He(n.seconds,n.nanos)}(t))}function jm(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qE(t){const e=Ie.fromString(t);return J(JE(e)),e}function wc(t,e){return jm(t.databaseId,e.path)}function ir(t,e){const n=qE(e);if(n.get(1)!==t.databaseId.projectId)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(HE(n))}function zf(t,e){return jm(t.databaseId,e)}function zE(t){const e=qE(t);return e.length===4?Ie.emptyPath():HE(e)}function bc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HE(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function p_(t,e,n){return{name:wc(t,e),fields:n.value.mapValue.fields}}function KE(t,e,n){const r=ir(t,e.name),i=rt(e.updateTime),s=e.createTime?rt(e.createTime):X.min(),o=new St({mapValue:{fields:e.fields}}),a=Ve.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function i2(t,e){return"found"in e?function(n,r){J(!!r.found),r.found.name,r.found.updateTime;const i=ir(n,r.found.name),s=rt(r.found.updateTime),o=r.found.createTime?rt(r.found.createTime):X.min(),a=new St({mapValue:{fields:r.found.fields}});return Ve.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){J(!!r.missing),J(!!r.readTime);const i=ir(n,r.missing),s=rt(r.readTime);return Ve.newNoDocument(i,s)}(t,e):H()}function s2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(J(l===void 0||typeof l=="string"),dt.fromBase64String(l||"")):(J(l===void 0||l instanceof Uint8Array),dt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:UE(c.code);return new R(l,c.message||"")}(o);n=new BE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ir(t,r.document.name),s=rt(r.document.updateTime),o=r.document.createTime?rt(r.document.createTime):X.min(),a=new St({mapValue:{fields:r.document.fields}}),c=Ve.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Jl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ir(t,r.document),s=r.readTime?rt(r.readTime):X.min(),o=Ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ir(t,r.document),s=r.removedTargetIds||[];n=new Jl([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new YM(i,s),a=r.targetId;n=new VE(a,o)}}return n}function Ic(t,e){let n;if(e instanceof qo)n={update:p_(t,e.key,e.value)};else if(e instanceof zo)n={delete:wc(t,e.key)};else if(e instanceof Or)n={update:p_(t,e.key,e.data),updateMask:h2(e.fieldMask)};else{if(!(e instanceof Mm))return H();n={verify:wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof go)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof us)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yo)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:r2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function Hf(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ze.updateTime(rt(i.updateTime)):i.exists!==void 0?ze.exists(i.exists):ze.none()}(e.currentDocument):ze.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)J(o.setToServerValue==="REQUEST_TIME"),a=new go;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new us(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new hs(l)}else"increment"in o?a=new yo(s,o.increment):H();const c=tt.fromServerFormat(o.fieldPath);return new Jc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=ir(t,e.update.name),s=new St({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Jt(c.map(l=>tt.fromServerFormat(l)))}(e.updateMask);return new Or(i,s,o,n,r)}return new qo(i,s,n,r)}if(e.delete){const i=ir(t,e.delete);return new zo(i,n)}if(e.verify){const i=ir(t,e.verify);return new Mm(i,n)}return H()}function o2(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?rt(r.updateTime):rt(i);return s.isEqual(X.min())&&(s=rt(i)),new GM(s,r.transformResults||[])}(n,e))):[]}function GE(t,e){return{documents:[zf(t,e.path)]}}function WE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return XE(Ne.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Fs(u.field),direction:c2(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=qf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function QE(t){let e=zE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=YE(u);return h instanceof Ne&&Pm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new to(Us(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Wc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new di(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new di(d,h)}(n.endAt)),bE(e,i,o,s,a,"F",c,l)}function a2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Us(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Us(e.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Us(e.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Us(e.unaryFilter.field);return ge.create(s,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return ge.create(Us(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ne.create(e.compositeFilter.filters.map(n=>YE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function c2(t){return ZM[t]}function l2(t){return e2[t]}function u2(t){return t2[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Us(t){return tt.fromServerFormat(t.fieldPath)}function XE(t){return t instanceof ge?function(e){if(e.op==="=="){if(Xv(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NAN"}};if(Yv(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xv(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NOT_NAN"}};if(Yv(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(e.field),op:l2(e.op),value:e.value}}}(t):t instanceof Ne?function(e){const n=e.getFilters().map(r=>XE(r));return n.length===1?n[0]:{compositeFilter:{op:u2(e.op),filters:n}}}(t):H()}function h2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.fe=e}}function d2(t,e){let n;if(e.document)n=KE(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=V.fromSegments(e.noDocument.path),i=fs(e.noDocument.readTime);n=Ve.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=V.fromSegments(e.unknownDocument.path),i=fs(e.unknownDocument.version);n=Ve.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new He(r[0],r[1]);return X.fromTimestamp(i)}(e.readTime)),n}function m_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ru(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:wc(i,s.key),fields:s.data.value.mapValue.fields,updateTime:vo(i,s.version.toTimestamp()),createTime:vo(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ds(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:ds(e.version)}}return r}function Ru(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ds(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function fs(t){const e=new He(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function Pi(t,e){const n=(e.baseMutations||[]).map(s=>Hf(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Hf(t.fe,s)),i=He.fromMillis(e.localWriteTimeMs);return new Fm(e.batchId,i,n,r)}function Ia(t){const e=fs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?fs(t.lastLimboFreeSnapshotVersion):X.min();let r;var i;return t.query.documents!==void 0?(J((i=t.query).documents.length===1),r=rn(jo(zE(i.documents[0])))):r=function(s){return rn(QE(s))}(t.query),new yr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,dt.fromBase64String(t.resumeToken))}function eT(t,e){const n=ds(e.snapshotVersion),r=ds(e.lastLimboFreeSnapshotVersion);let i;i=Au(e.target)?GE(t.fe,e.target):WE(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ls(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function qm(t){const e=QE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cu(e,e.limit,"L"):e}function $d(t,e){return new $m(e.largestBatchId,Hf(t.fe,e.overlayMutation))}function g_(t,e){const n=e.path.lastSegment();return[t,zt(e.path.popLast()),n]}function y_(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:ds(r.readTime),documentKey:zt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{getBundleMetadata(e,n){return v_(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:fs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return v_(e).put({bundleId:(r=n).id,createTime:ds(rt(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return __(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:qm(i.bundledQuery),readTime:fs(i.readTime)};var i})}saveNamedQuery(e,n){return __(e).put(function(r){return{name:r.name,readTime:ds(rt(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function v_(t){return bt(t,"bundles")}function __(t){return bt(t,"namedQueries")}/**
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
 */class Hh{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new Hh(e,r)}getOverlay(e,n){return sa(e).get(g_(this.userId,n)).next(r=>r?$d(this.serializer,r):null)}getOverlays(e,n){const r=er();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new $m(n,o);i.push(this.we(e,a))}),b.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(zt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(sa(e).J("collectionPathOverlayIndex",a))}),b.waitFor(s)}getOverlaysForCollection(e,n,r){const i=er(),s=zt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return sa(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=$d(this.serializer,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=er();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return sa(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=$d(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>s)}we(e,n){return sa(e).put(function(r,i,s){const[o,a,c]=g_(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Ic(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function sa(t){return bt(t,"documentOverlays")}/**
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
 */class Oi{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(Xe(e.integerValue));else if("doubleValue"in e){const r=Xe(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),gc(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(li(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?dE(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):H()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),V.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Oi.Ve=new Oi;function p2(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function w_(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=p2(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class m2{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=w_(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=w_(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class g2{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class y2{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class oa{constructor(){this.je=new m2,this.ze=new g2(this.je),this.We=new y2(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Di{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Di(this.indexId,this.documentKey,this.arrayValue,r)}}function Ur(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=b_(t.arrayValue,e.arrayValue),n!==0?n:(n=b_(t.directionalValue,e.directionalValue),n!==0?n:V.comparator(t.documentKey,e.documentKey)))}function b_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class v2{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){J(e.collectionGroup===this.collectionId);const n=Df(e);if(n!==void 0&&!this.en(n))return!1;const r=ki(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function tT(t){var e,n;if(J(t instanceof ge||t instanceof Ne),t instanceof ge){if(t instanceof wE){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ge.create(t.field,"==",s)))||[];return Ne.create(i,"or")}return t}const r=t.filters.map(i=>tT(i));return Ne.create(r,t.op)}function _2(t){if(t.getFilters().length===0)return[];const e=Wf(tT(t));return J(nT(e)),Kf(e)||Gf(e)?[e]:e.getFilters()}function Kf(t){return t instanceof ge}function Gf(t){return t instanceof Ne&&Pm(t)}function nT(t){return Kf(t)||Gf(t)||function(e){if(e instanceof Ne&&Uf(e)){for(const n of e.getFilters())if(!Kf(n)&&!Gf(n))return!1;return!0}return!1}(t)}function Wf(t){if(J(t instanceof ge||t instanceof Ne),t instanceof ge)return t;if(t.filters.length===1)return Wf(t.filters[0]);const e=t.filters.map(r=>Wf(r));let n=Ne.create(e,t.op);return n=Nu(n),nT(n)?n:(J(n instanceof Ne),J(mo(n)),J(n.filters.length>1),n.filters.reduce((r,i)=>zm(r,i)))}function zm(t,e){let n;return J(t instanceof ge||t instanceof Ne),J(e instanceof ge||e instanceof Ne),n=t instanceof ge?e instanceof ge?function(r,i){return Ne.create([r,i],"and")}(t,e):I_(t,e):e instanceof ge?I_(e,t):function(r,i){if(J(r.filters.length>0&&i.filters.length>0),mo(r)&&mo(i))return yE(r,i.getFilters());const s=Uf(r)?r:i,o=Uf(r)?i:r,a=s.filters.map(c=>zm(c,o));return Ne.create(a,"or")}(t,e),Nu(n)}function I_(t,e){if(mo(e))return yE(e,t.getFilters());{const n=e.filters.map(r=>zm(t,r));return Ne.create(n,"or")}}function Nu(t){if(J(t instanceof ge||t instanceof Ne),t instanceof ge)return t;const e=t.getFilters();if(e.length===1)return Nu(e[0]);if(mE(t))return t;const n=e.map(i=>Nu(i)),r=[];return n.forEach(i=>{i instanceof ge?r.push(i):i instanceof Ne&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ne.create(r,t.op)}/**
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
 */class w2{constructor(){this.rn=new Hm}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(gn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(gn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Hm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(Ie.comparator)).toArray()}}/**
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
 */const xl=new Uint8Array(0);class b2{constructor(e,n){this.user=e,this.databaseId=n,this.on=new Hm,this.un=new bi(r=>ls(r),(r,i)=>Qc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:zt(i)};return E_(e).put(s)}return b.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[ZI(n),""],!1,!0);return E_(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Zn(o.parent))}return r})}addFieldIndex(e,n){const r=Sl(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ca(e);return s.next(a=>{o.put(y_(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Sl(e),i=ca(e),s=aa(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=aa(e);let i=!0;const s=new Map;return b.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ue();const a=[];return b.forEach(s,(c,l)=>{var u;P("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(k=>`${k.fieldPath}:${k.kind}`).join(",")}`} to execute ${ls(n)}`);const h=function(k,E){const L=Df(E);if(L===void 0)return null;for(const U of ku(k,L.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(l,c),d=function(k,E){const L=new Map;for(const U of ki(E))for(const Y of ku(k,U.fieldPath))switch(Y.op){case"==":case"in":L.set(U.fieldPath.canonicalString(),Y.value);break;case"not-in":case"!=":return L.set(U.fieldPath.canonicalString(),Y.value),Array.from(L.values())}return null}(l,c),f=function(k,E){const L=[];let U=!0;for(const Y of ki(E)){const K=Y.kind===0?n_(k,Y.fieldPath,k.startAt):r_(k,Y.fieldPath,k.startAt);L.push(K.value),U&&(U=K.inclusive)}return new di(L,U)}(l,c),g=function(k,E){const L=[];let U=!0;for(const Y of ki(E)){const K=Y.kind===0?r_(k,Y.fieldPath,k.endAt):n_(k,Y.fieldPath,k.endAt);L.push(K.value),U&&(U=K.inclusive)}return new di(L,U)}(l,c),v=this.hn(c,l,f),_=this.hn(c,l,g),T=this.ln(c,l,d),A=this.fn(c.indexId,h,v,f.inclusive,_,g.inclusive,T);return b.forEach(A,k=>r.H(k,n.limit).next(E=>{E.forEach(L=>{const U=V.fromSegments(L.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return b.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=_2(Ne.create(e.filters,"and")).map(r=>Vf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),l=c/(n!=null?n.length:1),u=[];for(let h=0;h<c;++h){const d=n?this.dn(n[h/l]):xl,f=this.wn(e,d,r[h%l],i),g=this._n(e,d,s[h%l],o),v=a.map(_=>this.wn(e,d,_,!0));u.push(...this.createRange(f,g,v))}return u}wn(e,n,r,i){const s=new Di(e,V.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new Di(e,V.empty(),n,r);return i?s.Je():s}an(e,n){const r=new v2(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return b.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Be(tt.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new oa;for(const i of ki(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Oi.Ve._e(s,o)}return r.Qe()}dn(e){const n=new oa;return Oi.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new oa;return Oi.Ve._e(cs(this.databaseId,n),r.He(function(i){const s=ki(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new oa);let s=0;for(const o of ki(e)){const a=r[s++];for(const c of i)if(this.yn(n,o.fieldPath)&&_c(a))i=this.pn(i,o,a);else{const l=c.He(o.kind);Oi.Ve._e(a,l)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new oa;c.seed(a.Qe()),Oi.Ve._e(o,c.He(n.kind)),s.push(c)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof ge&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Sl(e),i=ca(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return b.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Su(u.sequenceNumber,new gn(fs(u.readTime),new V(Zn(u.documentKey)),u.largestBatchId)):Su.empty(),d=l.fields.map(([f,g])=>new rM(tt.fromServerFormat(f),g));return new eE(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:le(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Sl(e),s=ca(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,c=>s.put(y_(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),b.forEach(a,c=>this.En(e,i,c).next(l=>{const u=this.An(s,c);return l.isEqual(u)?b.resolve():this.vn(e,s,c,l,u)}))))})}Rn(e,n,r,i){return aa(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return aa(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=aa(e);let s=new Be(Ur);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new Di(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new Be(Ur);const i=this.mn(n,e);if(i==null)return r;const s=Df(n);if(s!=null){const o=e.data.field(s.fieldPath);if(_c(o))for(const a of o.arrayValue.values||[])r=r.add(new Di(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Di(n.indexId,e.key,xl,i));return r}vn(e,n,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let g=Os(d),v=Os(f);for(;g||v;){let _=!1,T=!1;if(g&&v){const A=l(g,v);A<0?T=!0:A>0&&(_=!0)}else g!=null?T=!0:_=!0;_?(u(v),v=Os(f)):T?(h(g),g=Os(d)):(g=Os(d),v=Os(f))}}(i,s,Ur,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),b.waitFor(o)}Tn(e){let n=1;return ca(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Ur(o,a)).filter((o,a,c)=>!a||Ur(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ur(o,e),c=Ur(o,n);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,xl,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,xl,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,n){return Ur(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(T_)}getMinOffset(e,n){return b.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||H())).next(T_)}}function E_(t){return bt(t,"collectionParents")}function aa(t){return bt(t,"indexEntries")}function Sl(t){return bt(t,"indexConfiguration")}function ca(t){return bt(t,"indexState")}function T_(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Cm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new gn(e.readTime,e.documentKey,n)}/**
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
 */const x_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(u,h,d)=>(a++,d.delete()));s.push(c.next(()=>{J(a===1)}));const l=[];for(const u of n.mutations){const h=oE(e,u.key.path,n.batchId);s.push(i.delete(h)),l.push(u.key)}return b.waitFor(s).next(()=>l)}function Pu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(41943040,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);class Kh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Kh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $r(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=$s(e),o=$r(e);return o.add({}).next(a=>{J(typeof a=="number");const c=new Fm(a,n,r,i),l=function(d,f,g){const v=g.baseMutations.map(T=>Ic(d.fe,T)),_=g.mutations.map(T=>Ic(d.fe,T));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:v,mutations:_}}(this.serializer,this.userId,c),u=[];let h=new Be((d,f)=>le(d.canonicalString(),f.canonicalString()));for(const d of i){const f=oE(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(s.put(f,lM))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),b.waitFor(u).next(()=>c)})}lookupMutationBatch(e,n){return $r(e).get(n).next(r=>r?(J(r.userId===this.userId),Pi(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?b.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return $r(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(J(a.batchId>=r),s=Pi(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return $r(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return $r(e).j("userMutationsIndex",n).next(r=>r.map(i=>Pi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Wl(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return $s(e).X({range:i},(o,a,c)=>{const[l,u,h]=o,d=Zn(u);if(l===this.userId&&n.path.isEqual(d))return $r(e).get(h).next(f=>{if(!f)throw H();J(f.userId===this.userId),s.push(Pi(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(le);const i=[];return n.forEach(s=>{const o=Wl(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=$s(e).X({range:a},(l,u,h)=>{const[d,f,g]=l,v=Zn(f);d===this.userId&&s.path.isEqual(v)?r=r.add(g):h.done()});i.push(c)}),b.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Wl(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Be(le);return $s(e).X({range:o},(c,l,u)=>{const[h,d,f]=c,g=Zn(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):u.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push($r(e).get(s).next(o=>{if(o===null)throw H();J(o.userId===this.userId),r.push(Pi(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return rT(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return $s(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Zn(s[1]);i.push(c)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,n){return iT(e,this.userId,n)}xn(e){return sT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function iT(t,e,n){const r=Wl(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return $s(t).X({range:s,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function $r(t){return bt(t,"mutations")}function $s(t){return bt(t,"documentMutations")}function sT(t){return bt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ps(0)}static Mn(){return new ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new ps(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>X.fromTimestamp(new He(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ds(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ds(e).X((o,a)=>{const c=Ia(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ds(e).X((r,i)=>{const s=Ia(i);n(s)})}$n(e){return S_(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}On(e,n){return S_(e).put("targetGlobalKey",n)}Fn(e,n){return Ds(e).put(eT(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ls(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ds(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=Ia(a);Qc(n,l.target)&&(s=l,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Gr(e);return n.forEach(o=>{const a=zt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,n,r){const i=Gr(e);return b.forEach(n,s=>{const o=zt(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Gr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Gr(e);let s=ue();return i.X({range:r,Y:!0},(o,a,c)=>{const l=Zn(o[1]),u=new V(l);s=s.add(u)}).next(()=>s)}containsKey(e,n){const r=zt(n.path),i=IDBKeyRange.bound([r],[ZI(r)],!1,!0);let s=0;return Gr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}le(e,n){return Ds(e).get(n).next(r=>r?Ia(r):null)}}function Ds(t){return bt(t,"targets")}function S_(t){return bt(t,"targetGlobal")}function Gr(t){return bt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_([t,e],[n,r]){const i=le(t,n);return i===0?le(e,r):i}class E2{constructor(e){this.Ln=e,this.buffer=new Be(A_),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();A_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class T2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await _i(n)}await this.Qn(3e5)})}}class x2{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Xt.ct);const r=new E2(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(x_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),x_):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Of()<=be.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function S2(t,e){return new x2(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n){this.db=e,this.garbageCollector=S2(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return Al(e,r)}removeReference(e,n,r){return Al(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Al(e,n)}Xn(e,n){return function(r,i){let s=!1;return sT(r).Z(o=>iT(r,o,i).next(a=>(a&&(s=!0),b.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Xn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),Gr(e).delete([0,zt(o.path)])))});i.push(c)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Al(e,n)}Yn(e,n){const r=Gr(e);let i,s=Xt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(s!==Xt.ct&&n(new V(Zn(i)),s),s=l,i=c):s=Xt.ct}).next(()=>{s!==Xt.ct&&n(new V(Zn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Al(t,e){return Gr(t).put(function(n,r){return{targetId:0,path:zt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(){this.changes=new bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Si(e).put(r)}removeEntry(e,n,r){return Si(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ru(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=Ve.newInvalidDocument(n);return Si(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(la(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:Ve.newInvalidDocument(n)};return Si(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(la(n))},(i,s)=>{r={document:this.ts(n,s),size:Pu(s)}}).next(()=>r)}getEntries(e,n){let r=Zt();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=Zt(),i=new Me(V.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,Pu(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return b.resolve();let i=new Be(R_);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(la(i.first()),la(i.last())),o=i.getIterator();let a=o.getNext();return Si(e).X({index:"documentKeyIndex",range:s},(c,l,u)=>{const h=V.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&R_(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.G(la(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Ru(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Si(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=Zt();for(const u of c){const h=this.ts(V.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Xc(n,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=Zt();const o=C_(n,r),a=C_(n,gn.max());return Si(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.ts(V.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&u.done()}).next(()=>s)}newChangeBuffer(e){return new C2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return k_(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}Zn(e,n){return k_(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=d2(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Ve.newInvalidDocument(e)}}function aT(t){return new k2(t)}class C2 extends oT{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new bi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Be((s,o)=>le(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=m_(this.os.serializer,o);i=i.add(s.path.popLast());const l=Pu(c);r+=l-a.size,n.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=m_(this.os.serializer,o.convertToNoDocument(X.min()));n.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function k_(t){return bt(t,"remoteDocumentGlobal")}function Si(t){return bt(t,"remoteDocumentsV14")}function la(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function C_(t,e){const n=e.documentKey.path.toArray();return[t,Ru(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function R_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=le(n[s],r[s]),i)return i;return i=le(n.length,r.length),i||(i=le(n[n.length-2],r[r.length-2]),i||le(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class R2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ma(r.mutation,i,Jt.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=er();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wa();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Zt();const o=La(),a=La();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Or)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ma(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new R2(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=La();let i=new Me((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Jt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||ue()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=AE();u.forEach(d=>{if(!s.has(d)){const f=LE(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(er());let a=-1,c=s;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:SE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=wa();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Pr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Ve.newInvalidDocument(l)))});let o=wa();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ma(l.mutation,c,Jt.empty(),He.now()),Xc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:rt(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:qm(r.bundledQuery),readTime:rt(r.readTime)}}(n)),b.resolve()}}/**
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
 */class P2{constructor(){this.overlays=new Me(V.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=er();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=er(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=er(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=er(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $m(n,r));let s=this.ls.get(n);s===void 0&&(s=ue(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.fs=new Be(pt.ds),this.ws=new Be(pt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new pt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new pt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new V(new Ie([])),r=new pt(n,e),i=new pt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new V(new Ie([])),r=new pt(n,e),i=new pt(n,e+1);let s=ue();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new pt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return V.comparator(e.key,n.key)||le(e.As,n.As)}static _s(e,n){return le(e.As,n.As)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Be(pt.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),i=new pt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(le);return n.forEach(i=>{const s=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),b.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new pt(new V(s),0);let a=new Be(le);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return b.forEach(n.mutations,i=>{const s=new pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new pt(n,0),i=this.Rs.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.Ds=e,this.docs=new Me(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=Zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zt();const o=n.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Cm(nE(u),r)<=0||(i.has(u.key)||Xc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Cs(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new L2(this)}getSize(e){return b.resolve(this.size)}}class L2 extends oT{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.persistence=e,this.xs=new bi(n=>ls(n),Qc),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Km,this.targetCount=0,this.Ms=ps.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.$s={},this.overlays={},this.Os=new Xt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new M2(this),this.indexManager=new w2,this.remoteDocumentCache=function(r){return new D2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new ZE(n),this.qs=new N2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new P2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new O2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new F2(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return b.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class F2 extends iE{constructor(e){super(),this.currentSequenceNumber=e}}class Gh{constructor(e){this.persistence=e,this.Qs=new Km,this.js=null}static zs(e){return new Gh(e)}get Ws(){if(this.js)return this.js;throw H()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,r=>{const i=V.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Vh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Kv,{unique:!0}),a.createObjectStore("documentMutations")}(e),N_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),N_(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Kv,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return b.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:bM});c.createIndex("collectionPathOverlayIndex",IM,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",EM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:uM});c.createIndex("documentKeyIndex",hM),c.createIndex("collectionGroupIndex",dM)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:yM}).createIndex("sequenceNumberIndex",vM,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:_M}).createIndex("documentKeyIndex",wM,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=Pu(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>b.forEach(a,c=>{J(c.userId===s.userId);const l=Pi(this.serializer,c);return rT(e,s.userId,l).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new Ie(o),l=function(u){return[0,zt(u)]}(c);s.push(n.get(l).next(u=>u?b.resolve():(h=>n.put({targetId:0,path:zt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>b.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:gM});const r=n.store("collectionParents"),i=new Hm,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:zt(c)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new Ie(o);return s(c.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,c],l)=>{const u=Zn(a);return s(u.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=Ia(i),o=eT(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),c=(l=o,l.document?new V(Ie.fromString(l.document.name).popFirst(5)):l.noDocument?V.fromSegments(l.noDocument.path):l.unknownDocument?V.fromSegments(l.unknownDocument.path):H()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>b.waitFor(i))}si(e,n){const r=n.store("mutations"),i=aT(this.serializer),s=new lT(Gh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:ue();Pi(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),b.forEach(a,(c,l)=>{const u=new mt(l),h=Hh.de(this.serializer,u),d=s.getIndexManager(u),f=Kh.de(u,this.serializer,d,s.referenceDelegate);return new cT(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Lf(n,Xt.ct),c).next()})})}}function N_(t){t.createObjectStore("targetDocuments",{keyPath:pM}).createIndex("documentTargetsIndex",mM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",fM,{unique:!0}),t.createObjectStore("targetGlobal")}const Vd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Gm{constructor(e,n,r,i,s,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=l,this.oi=u,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Gm.D())throw new R(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new A2(this,i),this.di=n+"main",this.serializer=new ZE(c),this.wi=new Pn(this.di,this.ui,new U2(this.serializer)),this.Bs=new I2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=aT(this.serializer),this.qs=new f2,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,u===!1&&et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,Vd);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Xt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>kl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(wi(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return ua(e).get("owner").next(n=>b.resolve(this.Ri(n)))}Pi(e){return kl(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=bt(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?b.resolve(!0):ua(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,Vd);return!1}}return!(!this.networkEnabled||!this.inForeground)||kl(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Lf(e,Xt.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>kl(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Kh.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new b2(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Hh.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?xM:o===14?lE:o===13?cE:o===12?TM:o===11?aE:void H();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new Lf(c,this.Os?this.Os.next():Xt.ct),n==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new R(I.FAILED_PRECONDITION,rE);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return ua(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(I.FAILED_PRECONDITION,Vd)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ua(e).put("owner",n)}static D(){return Pn.D()}Ai(e){const n=ua(e);return n.get("owner").next(r=>this.Ri(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(et(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;wC()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return et("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){et("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ua(t){return bt(t,"owner")}function kl(t){return bt(t,"clientMetadata")}function Wm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qm(e,n.fromCache,r,i)}}/**
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
 */class uT{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(i_(n))return b.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Cu(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Cu(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,r,i){return i_(n)||i.isEqual(X.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Of()<=be.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),jf(n)),this.Wi(e,o,n,tE(i,-1)))})}ji(e,n){let r=new Be(TE(e));return n.forEach((i,s)=>{Xc(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Of()<=be.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",jf(n)),this.Ui.getDocumentsMatchingQuery(e,n,gn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Me(le),this.Yi=new bi(s=>ls(s),Qc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cT(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function hT(t,e,n,r){return new $2(t,e,n,r)}async function dT(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ue();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function V2(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const v=c.docVersions.get(f);J(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ue();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fT(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function B2(t,e){const n=B(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(dt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(g,v,_){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,u)&&a.push(n.Bs.updateTargetData(s,f))});let c=Zt(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(pT(s,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(X.min())){const u=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Ji=i,s))}function pT(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Zt();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:i}})}function j2(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _o(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function wo(t,e,n){const r=B(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wi(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Ou(t,e,n){const r=B(t);let i=X.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=B(a),h=u.Yi.get(l);return h!==void 0?b.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,rn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ue())).next(a=>(yT(r,EE(e),a),{documents:a,ir:s})))}function mT(t,e){const n=B(t),r=B(n.Bs),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function gT(t,e){const n=B(t),r=n.Xi.get(e)||X.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Zi.getAllFromCollectionGroup(i,e,tE(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(yT(n,e,i),i))}function yT(t,e,n){let r=t.Xi.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}async function q2(t,e,n,r){const i=B(t);let s=ue(),o=Zt();for(const l of n){const u=e.rr(l.metadata.name);l.document&&(s=s.add(u));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await _o(i,function(l){return rn(jo(Ie.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>pT(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Bs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Bs.addMatchingKeys(l,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.nr,u.sr)).next(()=>u.nr)))}async function z2(t,e,n=ue()){const r=await _o(t,rn(qm(e.bundledQuery))),i=B(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=rt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(dt.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,n,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function P_(t,e){return`firestore_clients_${t}_${e}`}function O_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Bd(t,e){return`firestore_targets_${t}_${e}`}class Du{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static ar(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new R(i.error.code,i.error.message))),o?new Du(e,n,i.state,s):(et("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fa{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new R(r.error.code,r.error.message))),s?new Fa(e,r.state,i):(et("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Lu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Lm();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=sE(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Lu(e,s):(et("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Ym{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Ym(n.clientId,n.onlineState):(et("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Qf{constructor(){this.activeTargetIds=Lm()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jd{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Me(le),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=P_(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Qf),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(P_(this.persistenceKey,r));if(i){const s=Lu.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Bd(this.persistenceKey,e));if(r){const i=Fa.ar(e,r);i&&(n=i.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Bd(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void et("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(i){let s=Xt.ct;if(i!=null)try{const o=JSON.parse(i);J(typeof o=="number"),s=o}catch(o){et("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Xt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const i=new Du(this.currentUser,e,n,r),s=O_(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const n=O_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const i=Bd(this.persistenceKey,e),s=new Fa(e,n,r);this.setItem(i,s.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return Lu.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Du.ar(new mt(s),i,n)}Ur(e,n){const r=this.Ar.exec(e),i=Number(r[1]);return Fa.ar(i,n)}br(e){return Ym.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Lm();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class vT{constructor(){this.Hr=new Qf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Qf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class H2{Yr(e){}shutdown(){}}/**
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
 */class D_{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cl=null;function qd(){return Cl===null?Cl=268435456+Math.round(2147483648*Math.random()):Cl++,"0x"+Cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class W2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=qd(),a=this.To(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(l=>(P("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw $n("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Bo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=K2[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=qd();return new Promise((o,a)=>{const c=new zL;c.setWithCredentials(!0),c.listenOnce(BL.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ud.NO_ERROR:const u=c.getResponseJson();P(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Ud.TIMEOUT:P(Pt,`RPC '${e}' ${s} timed out`),a(new R(I.DEADLINE_EXCEEDED,"Request time out"));break;case Ud.HTTP_ERROR:const h=c.getStatus();if(P(Pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(f.status);a(new R(g,f.message))}else a(new R(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(I.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{P(Pt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);P(Pt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}Ro(e,n,r){const i=qd(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$L(),a=VL(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new qL({})),this.Eo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");P(Pt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new G2({ro:_=>{f?P(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(P(Pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(Pt,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,T,A)=>{_.listen(T,k=>{try{A(k)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,Il.EventType.OPEN,()=>{f||P(Pt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Il.EventType.CLOSE,()=>{f||(f=!0,P(Pt,`RPC '${e}' stream ${i} transport closed`),g.wo())}),v(h,Il.EventType.ERROR,_=>{f||(f=!0,$n(Pt,`RPC '${e}' stream ${i} transport errored:`,_),g.wo(new R(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,Il.EventType.MESSAGE,_=>{var T;if(!f){const A=_.data[0];J(!!A);const k=A,E=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(E){P(Pt,`RPC '${e}' stream ${i} received error:`,E);const L=E.status;let U=function(K){const W=ct[K];if(W!==void 0)return UE(W)}(L),Y=E.message;U===void 0&&(U=I.INTERNAL,Y="Unknown error status: "+L+" with message "+E.message),f=!0,g.wo(new R(U,Y)),h.close()}else P(Pt,`RPC '${e}' stream ${i} received:`,A),g._o(A)}}),v(a,jL.STAT_EVENT,_=>{_.stat===jv.PROXY?P(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===jv.NOPROXY&&P(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function _T(){return typeof window<"u"?window:null}function Zl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t){return new n2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Xm(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(et(n.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new R(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Q2 extends wT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=s2(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?rt(s.readTime):X.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=bc(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Au(a)?{documents:GE(i,a)}:{query:WE(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=jE(i,s.resumeToken);const c=qf(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(X.min())>0){o.readTime=vo(i,s.snapshotVersion.toTimestamp());const c=qf(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=a2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=bc(this.serializer),n.removeTarget=e,this.Wo(n)}}class Y2 extends wT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=o2(e.writeResults,e.commitTime),r=rt(e.commitTime);return this.listener.cu(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=bc(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ic(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(I.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(I.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class J2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Z2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=B(a);c.vu.add(4),await Ho(c),c.bu.set("Unknown"),c.vu.delete(4),await nl(c)}(this))})}),this.bu=new J2(r,i)}}async function nl(t){if(Ii(t))for(const e of t.Ru)await e(!0)}async function Ho(t){for(const e of t.Ru)await e(!1)}function Wh(t,e){const n=B(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),eg(n)?Zm(n):Go(n).Ko()&&Jm(n,e))}function Ec(t,e){const n=B(t),r=Go(n);n.Au.delete(e),r.Ko()&&bT(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ii(n)&&n.bu.set("Unknown"))}function Jm(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Go(t).su(e)}function bT(t,e){t.Vu.qt(e),Go(t).iu(e)}function Zm(t){t.Vu=new JM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Go(t).start(),t.bu.gu()}function eg(t){return Ii(t)&&!Go(t).Uo()&&t.Au.size>0}function Ii(t){return B(t).vu.size===0}function IT(t){t.Vu=void 0}async function eF(t){t.Au.forEach((e,n)=>{Jm(t,e)})}async function tF(t,e){IT(t),eg(t)?(t.bu.Iu(e),Zm(t)):t.bu.set("Unknown")}async function nF(t,e,n){if(t.bu.set("Online"),e instanceof BE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mu(t,r)}else if(e instanceof Jl?t.Vu.Ht(e):e instanceof VE?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(X.min()))try{const r=await fT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(c);l&&i.Au.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken(dt.EMPTY_BYTE_STRING,l.snapshotVersion)),bT(i,a);const u=new yr(l.target,a,c,l.sequenceNumber);Jm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Mu(t,r)}}async function Mu(t,e,n){if(!wi(e))throw e;t.vu.add(1),await Ho(t),t.bu.set("Offline"),n||(n=()=>fT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await nl(t)})}function ET(t,e){return e().catch(n=>Mu(t,n,e))}async function Ko(t){const e=B(t),n=fi(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;rF(e);)try{const i=await j2(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,iF(e,i)}catch(i){await Mu(e,i)}TT(e)&&xT(e)}function rF(t){return Ii(t)&&t.Eu.length<10}function iF(t,e){t.Eu.push(e);const n=fi(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function TT(t){return Ii(t)&&!fi(t).Uo()&&t.Eu.length>0}function xT(t){fi(t).start()}async function sF(t){fi(t).hu()}async function oF(t){const e=fi(t);for(const n of t.Eu)e.uu(n.mutations)}async function aF(t,e,n){const r=t.Eu.shift(),i=Um.from(r,e,n);await ET(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ko(t)}async function cF(t,e){e&&fi(t).ou&&await async function(n,r){if(i=r.code,FE(i)&&i!==I.ABORTED){const s=n.Eu.shift();fi(n).Qo(),await ET(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ko(n)}var i}(t,e),TT(t)&&xT(t)}async function L_(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Ii(n);n.vu.add(3),await Ho(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await nl(n)}async function Yf(t,e){const n=B(t);e?(n.vu.delete(2),await nl(n)):e||(n.vu.add(2),await Ho(n),n.bu.set("Unknown"))}function Go(t){return t.Su||(t.Su=function(e,n,r){const i=B(e);return i.fu(),new Q2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:eF.bind(null,t),ao:tF.bind(null,t),nu:nF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),eg(t)?Zm(t):t.bu.set("Unknown")):(await t.Su.stop(),IT(t))})),t.Su}function fi(t){return t.Du||(t.Du=function(e,n,r){const i=B(e);return i.fu(),new Y2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:sF.bind(null,t),ao:cF.bind(null,t),au:oF.bind(null,t),cu:aF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Ko(t)):(await t.Du.stop(),t.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new tg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wo(t,e){if(et("AsyncQueue",`${e}: ${t}`),wi(t))return new R(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=wa(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new no(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new no;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.Cu=new Me(V.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):H():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class bo{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new bo(e,n,no.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(){this.Nu=void 0,this.listeners=[]}}class uF{constructor(){this.queries=new bi(e=>IE(e),Yc),this.onlineState="Unknown",this.ku=new Set}}async function ng(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new lF),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Wo(o,`Initialization of query '${jf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&ig(n)}async function rg(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function hF(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&ig(n)}function dF(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ig(t){t.ku.forEach(e=>{e.next()})}class sg{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.serializer=e}rr(e){return ir(this.serializer,e)}ur(e){return e.metadata.exists?KE(this.serializer,e.document,!1):Ve.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return rt(e)}}class pF{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ST(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=Ie.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new F_(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ue()).add(s);n.set(o,a)}}return n}async complete(){const e=await q2(this.localStore,new F_(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await z2(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function ST(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.key=e}}class kT{constructor(e){this.key=e}}class CT{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ue(),this.mutatedKeys=ue(),this.tc=TE(e),this.ec=new no(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new M_,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Xc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),_=!0):this.rc(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new bo(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new M_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ue(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new kT(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new AT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=ue();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return bo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class mF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gF{constructor(e){this.key=e,this.fc=!1}}class yF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new bi(a=>IE(a),Yc),this._c=new Map,this.mc=new Set,this.gc=new Me(V.comparator),this.yc=new Map,this.Ic=new Km,this.Tc={},this.Ec=new Map,this.Ac=ps.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function vF(t,e){const n=ug(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await _o(n.localStore,rn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await og(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Wh(n.remoteStore,o)}return i}async function og(t,e,n,r,i){t.Rc=(h,d,f)=>async function(g,v,_,T){let A=v.view.sc(_);A.zi&&(A=await Ou(g.localStore,v.query,!1).then(({documents:L})=>v.view.sc(L,A)));const k=T&&T.targetChanges.get(v.targetId),E=v.view.applyChanges(A,g.isPrimaryClient,k);return Xf(g,v.targetId,E.cc),E.snapshot}(t,h,d,f);const s=await Ou(t.localStore,e,!0),o=new CT(e,s.ir),a=o.sc(s.documents),c=el.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Xf(t,n,l.cc);const u=new mF(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function _F(t,e){const n=B(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Yc(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ec(n.remoteStore,r.targetId),Io(n,r.targetId)}).catch(_i)):(Io(n,r.targetId),await wo(n.localStore,r.targetId,!0))}async function wF(t,e,n){const r=hg(t);try{const i=await function(s,o){const a=B(s),c=He.now(),l=o.reduce((d,f)=>d.add(f.key),ue());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Zt(),g=ue();return a.Zi.getEntries(d,l).next(v=>{f=v,f.forEach((_,T)=>{T.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{u=v;const _=[];for(const T of o){const A=QM(T,u.get(T.key).overlayedDocument);A!=null&&_.push(new Or(T.key,A,fE(A.value.mapValue),ze.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:SE(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new Me(le)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,n),await Dr(r,i.changes),await Ko(r.remoteStore)}catch(i){const s=Wo(i,"Failed to persist write");n.reject(s)}}async function RT(t,e){const n=B(t);try{const r=await B2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?J(o.fc):i.removedDocuments.size>0&&(J(o.fc),o.fc=!1))}),await Dr(n,r,e)}catch(r){await _i(r)}}function U_(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=B(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&ig(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bF(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Me(V.comparator);o=o.insert(s,Ve.newNoDocument(s,X.min()));const a=ue().add(s),c=new Zc(X.min(),new Map,new Me(le),o,a);await RT(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),lg(r)}else await wo(r.localStore,e,!1).then(()=>Io(r,e,n)).catch(_i)}async function IF(t,e){const n=B(t),r=e.batch.batchId;try{const i=await V2(n.localStore,e);cg(n,r,null),ag(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dr(n,i)}catch(i){await _i(i)}}async function EF(t,e,n){const r=B(t);try{const i=await function(s,o){const a=B(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(J(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);cg(r,e,n),ag(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dr(r,i)}catch(i){await _i(i)}}async function TF(t,e){const n=B(t);Ii(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=B(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ec.get(r)||[];i.push(e),n.Ec.set(r,i)}catch(r){const i=Wo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ag(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function cg(t,e,n){const r=B(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||NT(t,r)})}function NT(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Ec(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),lg(t))}function Xf(t,e,n){for(const r of n)r instanceof AT?(t.Ic.addReference(r.key,e),xF(t,r)):r instanceof kT?(P("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||NT(t,r.key)):H()}function xF(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.mc.add(r),lg(t))}function lg(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new V(Ie.fromString(e)),r=t.Ac.next();t.yc.set(r,new gF(n)),t.gc=t.gc.insert(n,r),Wh(t.remoteStore,new yr(rn(jo(n.path)),r,"TargetPurposeLimboResolution",Xt.ct))}}async function Dr(t,e,n){const r=B(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Qm.Li(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const l=B(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!wi(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,g)}}}(r.localStore,s))}async function SF(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await dT(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(I.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Dr(n,r.er)}}function AF(t,e){const n=B(t),r=n.yc.get(e);if(r&&r.fc)return ue().add(r.key);{let i=ue();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function kF(t,e){const n=B(t),r=await Ou(n.localStore,e.query,!0),i=e.view.hc(r);return n.isPrimaryClient&&Xf(n,e.targetId,i.cc),i}async function CF(t,e){const n=B(t);return gT(n.localStore,e).then(r=>Dr(n,r))}async function RF(t,e,n,r){const i=B(t),s=await function(o,a){const c=B(o),l=B(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Sn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):b.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ko(i.remoteStore):n==="acknowledged"||n==="rejected"?(cg(i,e,r||null),ag(i,e),function(o,a){B(B(o).mutationQueue).Cn(a)}(i.localStore,e)):H(),await Dr(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function NF(t,e){const n=B(t);if(ug(n),hg(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await $_(n,r.toArray());n.vc=!0,await Yf(n.remoteStore,!0);for(const s of i)Wh(n.remoteStore,s)}else if(e===!1&&n.vc!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Io(n,o),wo(n.localStore,o,!0))),Ec(n.remoteStore,o)}),await i,await $_(n,r),function(s){const o=B(s);o.yc.forEach((a,c)=>{Ec(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Me(V.comparator)}(n),n.vc=!1,await Yf(n.remoteStore,!1)}}async function $_(t,e,n){const r=B(t),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await _o(r.localStore,rn(c[0]));for(const l of c){const u=r.wc.get(l),h=await kF(r,u);h.snapshot&&s.push(h.snapshot)}}else{const l=await mT(r.localStore,o);a=await _o(r.localStore,l),await og(r,PT(l),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function PT(t){return bE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function PF(t){const e=B(t);return B(B(e.localStore).persistence).$i()}async function OF(t,e,n,r){const i=B(t);if(i.vc)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await gT(i.localStore,EE(s[0])),a=Zc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",dt.EMPTY_BYTE_STRING);await Dr(i,o,a);break}case"rejected":await wo(i.localStore,e,!0),Io(i,e,r);break;default:H()}}async function DF(t,e,n){const r=ug(t);if(r.vc){for(const i of e){if(r._c.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await mT(r.localStore,i),o=await _o(r.localStore,s);await og(r,PT(s),o.targetId,!1,o.resumeToken),Wh(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await wo(r.localStore,i,!1).then(()=>{Ec(r.remoteStore,i),Io(r,i)}).catch(_i)}}function ug(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bF.bind(null,e),e.dc.nu=hF.bind(null,e.eventManager),e.dc.Pc=dF.bind(null,e.eventManager),e}function hg(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EF.bind(null,e),e}function LF(t,e,n){const r=B(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=B(h),g=rt(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.qs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(ST(a));const c=new pF(a,i.localStore,s.serializer);let l=await s.bc();for(;l;){const h=await c.zu(l);h&&o._updateProgress(h),l=await s.bc()}const u=await c.complete();return await Dr(i,u.Ju,void 0),await function(h,d){const f=B(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.qs.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Hu)}catch(a){return $n("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Jf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=tl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hT(this.persistence,new uT,e.initialUser,this.serializer)}createPersistence(e){return new lT(Gh.zs,this.serializer)}createSharedClientState(e){return new vT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OT extends Jf{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await hg(this.Vc.syncEngine),await Ko(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return hT(this.persistence,new uT,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new T2(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new aM(n,this.persistence);return new oM(e.asyncQueue,r)}createPersistence(e){const n=Wm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new Gm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,_T(),Zl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new vT}}class MF extends OT{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof jd&&(this.sharedClientState.syncEngine={jr:RF.bind(null,n),zr:OF.bind(null,n),Wr:DF.bind(null,n),$i:PF.bind(null,n),Qr:CF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await NF(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=_T();if(!jd.D(n))throw new R(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Wm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new jd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class dg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>U_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SF.bind(null,this.syncEngine),await Yf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uF}createDatastore(e){const n=tl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new W2(i));var i;return function(s,o,a,c){return new X2(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>U_(this.syncEngine,a,0),o=D_.D()?new D_:new H2,new Z2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new yF(r,i,s,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);P("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ho(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new yt,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const i=await this.$c(r);return new fF(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=B(r),o=bc(s.serializer)+"/documents",a={documents:i.map(h=>wc(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=i2(s.serializer,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());J(!!d),u.push(d)}),u}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=V.fromPath(r);this.mutations.push(new Mm(i,this.precondition(i)))}),await async function(n,r){const i=B(n),s=bc(i.serializer)+"/documents",o={writes:r.map(a=>Ic(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw H();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new R(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?ze.exists(!1):ze.updateTime(n):ze.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new R(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ze.updateTime(n)}return ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class $F{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new Xm(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new UF(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Wc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!FE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=JI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function eu(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fg(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>L_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>L_(e.remoteStore,s)),t._onlineComponents=e}function DT(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await eu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!DT(n))throw n;$n("Error using user provided cache. Falling back to memory cache: "+n),await eu(t,new Jf)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await eu(t,new Jf);return t._offlineComponents}async function Yh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Zf(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Zf(t,new dg))),t._onlineComponents}function LT(t){return fg(t).then(e=>e.persistence)}function pg(t){return fg(t).then(e=>e.localStore)}function MT(t){return Yh(t).then(e=>e.remoteStore)}function mg(t){return Yh(t).then(e=>e.syncEngine)}function BF(t){return Yh(t).then(e=>e.datastore)}async function Eo(t){const e=await Yh(t),n=e.eventManager;return n.onListen=vF.bind(null,e.syncEngine),n.onUnlisten=_F.bind(null,e.syncEngine),n}function jF(t){return t.asyncQueue.enqueue(async()=>{const e=await LT(t),n=await MT(t);return e.setNetworkEnabled(!0),function(r){const i=B(r);return i.vu.delete(0),nl(i)}(n)})}function qF(t){return t.asyncQueue.enqueue(async()=>{const e=await LT(t),n=await MT(t);return e.setNetworkEnabled(!1),async function(r){const i=B(r);i.vu.add(0),await Ho(i),i.bu.set("Offline")}(n)})}function zF(t,e){const n=new yt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const l=B(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new R(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Wo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await pg(t),e,n)),n.promise}function FT(t,e,n={}){const r=new yt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Qh({next:h=>{s.enqueueAndForget(()=>rg(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new sg(jo(o.path),l,{includeMetadataChanges:!0,Ku:!0});return ng(i,u)}(await Eo(t),t.asyncQueue,e,n,r)),r.promise}function HF(t,e){const n=new yt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Ou(r,i,!0),a=new CT(i,o.ir),c=a.sc(o.documents),l=a.applyChanges(c,!1);s.resolve(l.snapshot)}catch(o){const a=Wo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await pg(t),e,n)),n.promise}function UT(t,e,n={}){const r=new yt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Qh({next:h=>{s.enqueueAndForget(()=>rg(i,u)),h.fromCache&&a.source==="server"?c.reject(new R(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new sg(o,l,{includeMetadataChanges:!0,Ku:!0});return ng(i,u)}(await Eo(t),t.asyncQueue,e,n,r)),r.promise}function KF(t,e){const n=new Qh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){B(r).ku.add(i),i.next()}(await Eo(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){B(r).ku.delete(i)}(await Eo(t),n))}}function GF(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?$E().encode(s):s,function(c,l){return new FF(c,l)}(function(c,l){if(c instanceof Uint8Array)return V_(c,l);if(c instanceof ArrayBuffer)return V_(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,tl(e));t.asyncQueue.enqueueAndForget(async()=>{LF(await mg(t),i,r)})}function WF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=B(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await pg(t),e))}/**
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
 */function $T(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e,n){if(!n)throw new R(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VT(t,e,n,r){if(e===!0&&r===!0)throw new R(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function j_(t){if(!V.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q_(t){if(V.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xh(t);throw new R(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function BT(t,e){if(e<=0)throw new R(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$T((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class rl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new WL;switch(n.type){case"firstParty":return new JL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=B_.get(e);n&&(P("ComponentProvider","Removing Datastore"),B_.delete(e),n.terminate())}(this),Promise.resolve()}}function QF(t,e,n,r={}){var i;const s=(t=Ae(t,rl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=mt.MOCK_USER;else{a=Lb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new R(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(l)}t._authCredentials=new QL(new XI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class Nt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class sr extends Nt{constructor(e,n,r){super(e,n,jo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new V(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function Fu(t,e,...n){if(t=ne(t),gg("collection","path",e),t instanceof rl){const r=Ie.fromString(e,...n);return q_(r),new sr(t,null,r)}{if(!(t instanceof je||t instanceof sr))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return q_(r),new sr(t.firestore,null,r)}}function YF(t,e){if(t=Ae(t,rl),gg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nt(t,null,function(n){return new Pr(Ie.emptyPath(),n)}(e))}function To(t,e,...n){if(t=ne(t),arguments.length===1&&(e=JI.A()),gg("doc","path",e),t instanceof rl){const r=Ie.fromString(e,...n);return j_(r),new je(t,null,new V(r))}{if(!(t instanceof je||t instanceof sr))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return j_(r),new je(t.firestore,t instanceof sr?t.converter:null,new V(r))}}function jT(t,e){return t=ne(t),e=ne(e),(t instanceof je||t instanceof sr)&&(e instanceof je||e instanceof sr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function qT(t,e){return t=ne(t),e=ne(e),t instanceof Nt&&e instanceof Nt&&t.firestore===e.firestore&&Yc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Xm(this,"async_queue_retry"),this.Xc=()=>{const n=Zl();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Zl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Zl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new yt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!wi(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw et("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=tg.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&H()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function ep(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class JF{constructor(){this._progressObserver={},this._taskCompletionResolver=new yt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZF=-1;class Ze extends rl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new XF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zT(this),this._firestoreClient.terminate()}}function It(t){return t._firestoreClient||zT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,c,l){return new kM(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,$T(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new VF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function eU(t,e){KT(t=Ae(t,Ze));const n=It(t);if(n._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");$n("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new dg;return HT(n,i,new OT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function tU(t){KT(t=Ae(t,Ze));const e=It(t);if(e._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");$n("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new dg;return HT(e,r,new MF(r,n.cacheSizeBytes))}function HT(t,e,n){const r=new yt;return t.asyncQueue.enqueue(async()=>{try{await eu(t,n),await Zf(t,e),r.resolve()}catch(i){const s=i;if(!DT(s))throw s;$n("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function nU(t){if(t._initialized&&!t._terminated)throw new R(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Pn.D())return Promise.resolve();const r=n+"main";await Pn.delete(r)}(Wm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function rU(t){return function(e){const n=new yt;return e.asyncQueue.enqueueAndForget(async()=>TF(await mg(e),n)),n.promise}(It(t=Ae(t,Ze)))}function iU(t){return jF(It(t=Ae(t,Ze)))}function sU(t){return qF(It(t=Ae(t,Ze)))}function oU(t,e){const n=It(t=Ae(t,Ze)),r=new JF;return GF(n,t._databaseId,e,r),r}function aU(t,e){return WF(It(t=Ae(t,Ze)),e).then(n=>n?new Nt(t,null,n.query):null)}function KT(t){if(t._initialized||t._terminated)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cU=/^__.*__$/;class lU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}class GT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function WT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Zh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Uu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(WT(this.ca)&&cU.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class uU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tl(e)}ya(e,n,r,i=!1){return new Zh({ca:e,methodName:n,ga:r,path:tt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xs(t){const e=t._freezeSettings(),n=tl(t._databaseId);return new uU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ed(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);wg("Data must be an object, but it was:",o,r);const a=XT(r,o);let c,l;if(s.merge)c=new Jt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=tp(e,h,n);if(!o.contains(d))throw new R(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ZT(u,d)||u.push(d)}c=new Jt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new lU(new St(a),c,l)}class il extends Ts{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof il}}function QT(t,e,n){return new Zh({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class yg extends Ts{_toFieldTransform(e){return new Jc(e.path,new go)}isEqual(e){return e instanceof yg}}class hU extends Ts{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=QT(this,e,!0),r=this.pa.map(s=>Ss(s,n)),i=new us(r);return new Jc(e.path,i)}isEqual(e){return this===e}}class dU extends Ts{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=QT(this,e,!0),r=this.pa.map(s=>Ss(s,n)),i=new hs(r);return new Jc(e.path,i)}isEqual(e){return this===e}}class fU extends Ts{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new yo(e.serializer,RE(e.serializer,this.Ia));return new Jc(e.path,n)}isEqual(e){return this===e}}function vg(t,e,n,r){const i=t.ya(1,e,n);wg("Data must be an object, but it was:",i,r);const s=[],o=St.empty();Es(r,(c,l)=>{const u=bg(e,c,n);l=ne(l);const h=i.da(u);if(l instanceof il)s.push(u);else{const d=Ss(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Jt(s);return new GT(o,a,i.fieldTransforms)}function _g(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[tp(e,r,n)],c=[i];if(s.length%2!=0)throw new R(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(tp(e,s[d])),c.push(s[d+1]);const l=[],u=St.empty();for(let d=a.length-1;d>=0;--d)if(!ZT(l,a[d])){const f=a[d];let g=c[d];g=ne(g);const v=o.da(f);if(g instanceof il)l.push(f);else{const _=Ss(g,v);_!=null&&(l.push(f),u.set(f,_))}}const h=new Jt(l);return new GT(u,h,o.fieldTransforms)}function YT(t,e,n,r=!1){return Ss(n,t.ya(r?4:3,e))}function Ss(t,e){if(JT(t=ne(t)))return wg("Unsupported field value:",e,t),XT(t,e);if(t instanceof Ts)return function(n,r){if(!WT(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ss(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return RE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=He.fromDate(n);return{timestampValue:vo(r.serializer,i)}}if(n instanceof He){const i=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vo(r.serializer,i)}}if(n instanceof Jh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ur)return{bytesValue:jE(r.serializer,n._byteString)};if(n instanceof je){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Xh(n)}`)}(t,e)}function XT(t,e){const n={};return uE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,i)=>{const s=Ss(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function JT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Jh||t instanceof ur||t instanceof je||t instanceof Ts)}function wg(t,e,n){if(!JT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function tp(t,e,n){if((e=ne(e))instanceof pi)return e._internalPath;if(typeof e=="string")return bg(t,e);throw Uu("Field path arguments must be of type string or ",t,!1,void 0,n)}const pU=new RegExp("[~\\*/\\[\\]]");function bg(t,e,n){if(e.search(pU)>=0)throw Uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pi(...e.split("."))._internalPath}catch{throw Uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new R(I.INVALID_ARGUMENT,a+t+c)}function ZT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(td("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mU extends Tc{data(){return super.data()}}function td(t,e){return typeof e=="string"?bg(t,e):e instanceof pi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ig{}class sl extends Ig{}function Cn(t,e,...n){let r=[];e instanceof Ig&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Eg).length,o=i.filter(a=>a instanceof nd).length;if(s>1||s>0&&o>0)throw new R(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class nd extends sl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nd(e,n,r)}_apply(e){const n=this._parse(e);return ix(e._query,n),new Nt(e.firestore,e.converter,Bf(e._query,n))}_parse(e){const n=xs(e.firestore);return function(i,s,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){K_(u,l);const d=[];for(const f of u)d.push(H_(a,i,f));h={arrayValue:{values:d}}}else h=H_(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||K_(u,l),h=YT(o,s,u,l==="in"||l==="not-in");return ge.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tx(t,e,n){const r=e,i=td("where",t);return nd._create(i,r,n)}class Eg extends Ig{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Eg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ne.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)ix(s,a),s=Bf(s,a)}(e._query,n),new Nt(e.firestore,e.converter,Bf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tg extends sl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Tg(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new to(i,s);return function(a,c){if(Om(a)===null){const l=jh(a);l!==null&&sx(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Pr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function gU(t,e="asc"){const n=e,r=td("orderBy",t);return Tg._create(r,n)}class rd extends sl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new rd(e,n,r)}_apply(e){return new Nt(e.firestore,e.converter,Cu(e._query,this._limit,this._limitType))}}function nx(t){return BT("limit",t),rd._create("limit",t,"F")}function yU(t){return BT("limitToLast",t),rd._create("limitToLast",t,"L")}class id extends sl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new id(e,n,r)}_apply(e){const n=rx(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(r,i){return new Pr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function vU(...t){return id._create("startAt",t,!0)}function _U(...t){return id._create("startAfter",t,!1)}class sd extends sl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new sd(e,n,r)}_apply(e){const n=rx(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(r,i){return new Pr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function wU(...t){return sd._create("endBefore",t,!1)}function bU(...t){return sd._create("endAt",t,!0)}function rx(t,e,n,r){if(n[0]=ne(n[0]),n[0]instanceof Tc)return function(i,s,o,a,c){if(!a)throw new R(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of es(i))if(u.field.isKeyField())l.push(cs(s,a.key));else{const h=a.data.field(u.field);if(Bh(h))throw new R(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new R(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new di(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=xs(t.firestore);return function(s,o,a,c,l,u){const h=s.explicitOrderBy;if(l.length>h.length)throw new R(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const g=l[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new R(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Dm(s)&&g.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const v=s.path.child(Ie.fromString(g));if(!V.isDocumentKey(v))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const _=new V(v);d.push(cs(o,_))}else{const v=YT(a,c,g);d.push(v)}}return new di(d,u)}(t._query,t.firestore._databaseId,i,e,n,r)}}function H_(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new R(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(e)&&n.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!V.isDocumentKey(r))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cs(t,new V(r))}if(n instanceof je)return cs(t,n._key);throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xh(n)}.`)}function K_(t,e){if(!Array.isArray(t)||t.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ix(t,e){if(e.isInequality()){const r=jh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new R(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Om(t);s!==null&&sx(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sx(t,e,n){if(!n.isEqual(e))throw new R(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class xg{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Jh(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yc(e));default:return null}}convertTimestamp(e){const n=ci(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);J(JE(r));const i=new ui(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||et(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class IU extends xg{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sr extends Tc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(td("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ua extends Sr{data(e={}){return super.data(e)}}class mi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ua(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ua(r._firestore,r._userDataWriter,o.doc.key,o.doc,new qi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ua(r._firestore,r._userDataWriter,o.doc.key,o.doc,new qi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:EU(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}function ox(t,e){return t instanceof Sr&&e instanceof Sr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof mi&&e instanceof mi&&t._firestore===e._firestore&&qT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){t=Ae(t,je);const e=Ae(t.firestore,Ze);return FT(It(e),t._key).then(n=>Sg(e,t,n))}class As extends xg{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function TU(t){t=Ae(t,je);const e=Ae(t.firestore,Ze),n=It(e),r=new As(e);return zF(n,t._key).then(i=>new Sr(e,r,t._key,i,new qi(i!==null&&i.hasLocalMutations,!0),t.converter))}function xU(t){t=Ae(t,je);const e=Ae(t.firestore,Ze);return FT(It(e),t._key,{source:"server"}).then(n=>Sg(e,t,n))}function ax(t){t=Ae(t,Nt);const e=Ae(t.firestore,Ze),n=It(e),r=new As(e);return ex(t._query),UT(n,t._query).then(i=>new mi(e,r,t,i))}function SU(t){t=Ae(t,Nt);const e=Ae(t.firestore,Ze),n=It(e),r=new As(e);return HF(n,t._query).then(i=>new mi(e,r,t,i))}function AU(t){t=Ae(t,Nt);const e=Ae(t.firestore,Ze),n=It(e),r=new As(e);return UT(n,t._query,{source:"server"}).then(i=>new mi(e,r,t,i))}function G_(t,e,n){t=Ae(t,je);const r=Ae(t.firestore,Ze),i=od(t.converter,e,n);return ol(r,[ed(xs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ze.none())])}function W_(t,e,n,...r){t=Ae(t,je);const i=Ae(t.firestore,Ze),s=xs(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof pi?_g(s,"updateDoc",t._key,e,n,r):vg(s,"updateDoc",t._key,e),ol(i,[o.toMutation(t._key,ze.exists(!0))])}function kU(t){return ol(Ae(t.firestore,Ze),[new zo(t._key,ze.none())])}function cx(t,e){const n=Ae(t.firestore,Ze),r=To(t),i=od(t.converter,e);return ol(n,[ed(xs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ze.exists(!1))]).then(()=>r)}function lx(t,...e){var n,r,i;t=ne(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ep(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ep(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof je)l=Ae(t.firestore,Ze),u=jo(t._key.path),c={next:h=>{e[o]&&e[o](Sg(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ae(t,Nt);l=Ae(h.firestore,Ze),u=h._query;const d=new As(l);c={next:f=>{e[o]&&e[o](new mi(l,d,h,f))},error:e[o+1],complete:e[o+2]},ex(t._query)}return function(h,d,f,g){const v=new Qh(g),_=new sg(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>ng(await Eo(h),_)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>rg(await Eo(h),_))}}(It(l),u,a,c)}function CU(t,e){return KF(It(t=Ae(t,Ze)),ep(e)?e:{next:e})}function ol(t,e){return function(n,r){const i=new yt;return n.asyncQueue.enqueueAndForget(async()=>wF(await mg(n),r,i)),i.promise}(It(t),e)}function Sg(t,e,n){const r=n.docs.get(e._key),i=new As(t);return new Sr(t,i,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class NU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=xs(e)}set(e,n,r){this._verifyNotCommitted();const i=Wr(e,this._firestore),s=od(i.converter,n,r),o=ed(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ze.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Wr(e,this._firestore);let o;return o=typeof(n=ne(n))=="string"||n instanceof pi?_g(this._dataReader,"WriteBatch.update",s._key,n,r,i):vg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ze.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Wr(e,this._firestore);return this._mutations=this._mutations.concat(new zo(n._key,ze.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wr(t,e){if((t=ne(t)).firestore!==e)throw new R(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class PU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=xs(e)}get(e){const n=Wr(e,this._firestore),r=new IU(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return H();const s=i[0];if(s.isFoundDocument())return new Tc(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Tc(this._firestore,r,n._key,null,n.converter);throw H()})}set(e,n,r){const i=Wr(e,this._firestore),s=od(i.converter,n,r),o=ed(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Wr(e,this._firestore);let o;return o=typeof(n=ne(n))=="string"||n instanceof pi?_g(this._dataReader,"Transaction.update",s._key,n,r,i):vg(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Wr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Wr(e,this._firestore),r=new As(this._firestore);return super.get(e).then(i=>new Sr(this._firestore,r,n._key,i._document,new qi(!1,!1),n.converter))}}function OU(t,e,n){t=Ae(t,Ze);const r=Object.assign(Object.assign({},RU),n);return function(i){if(i.maxAttempts<1)throw new R(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new yt;return i.asyncQueue.enqueueAndForget(async()=>{const c=await BF(i);new $F(i.asyncQueue,c,o,s,a).run()}),a.promise}(It(t),i=>e(new PU(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DU(){return new il("deleteField")}function LU(){return new yg("serverTimestamp")}function MU(...t){return new hU("arrayUnion",t)}function FU(...t){return new dU("arrayRemove",t)}function UU(t){return new fU("increment",t)}(function(t,e=!0){(function(n){Bo=n})(Cr),Er(new Mn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ze(new YL(n.getProvider("auth-internal")),new eM(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ui(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),In(qv,"3.12.2",t),In(qv,"3.12.2","esm2017")})();const $U="@firebase/firestore-compat",VU="0.3.11";/**
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
 */function Ag(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function Y_(){if(!SM())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}let ux=class rp{constructor(e){this._delegate=e}static fromBase64String(e){return Y_(),new rp(ur.fromBase64String(e))}static fromUint8Array(e){return Q_(),new rp(ur.fromUint8Array(e))}toBase64(){return Y_(),this._delegate.toBase64()}toUint8Array(){return Q_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){return BU(t,["next","error","complete"])}function BU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{enableIndexedDbPersistence(e,n){return eU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return tU(e._delegate)}clearIndexedDbPersistence(e){return nU(e._delegate)}}class hx{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ui||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&$n("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){QF(this._delegate,e,n,r)}enableNetwork(){return iU(this._delegate)}disableNetwork(){return sU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,VT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return rU(this._delegate)}onSnapshotsInSync(e){return CU(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new xo(this,Fu(this._delegate,e))}catch(n){throw jt(n,"collection()","Firestore.collection()")}}doc(e){try{return new wn(this,To(this._delegate,e))}catch(n){throw jt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Bt(this,YF(this._delegate,e))}catch(n){throw jt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return OU(this._delegate,n=>e(new dx(this,n)))}batch(){return It(this._delegate),new fx(new NU(this._delegate,e=>ol(this._delegate,e)))}loadBundle(e){return oU(this._delegate,e)}namedQuery(e){return aU(this._delegate,e).then(n=>n?new Bt(this,n):null)}}class ad extends xg{constructor(e){super(),this.firestore=e}convertBytes(e){return new ux(new ur(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return wn.forKey(n,this.firestore,null)}}function qU(t){KL(t)}class dx{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new ad(e)}get(e){const n=zi(e);return this._delegate.get(n).then(r=>new xc(this._firestore,new Sr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=zi(e);return r?(Ag("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=zi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=zi(e);return this._delegate.delete(n),this}}class fx{constructor(e){this._delegate=e}set(e,n,r){const i=zi(e);return r?(Ag("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=zi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=zi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ms{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ua(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Sc(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ms.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ms(e,new ad(e),n),i.set(n,s)),s}}ms.INSTANCES=new WeakMap;class wn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ad(e)}static forPath(e,n,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new wn(n,new je(n._delegate,r,new V(e)))}static forKey(e,n,r){return new wn(n,new je(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new xo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new xo(this.firestore,Fu(this._delegate,e))}catch(n){throw jt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof je?jT(this._delegate,e):!1}set(e,n){n=Ag("DocumentReference.set",n);try{return n?G_(this._delegate,e,n):G_(this._delegate,e)}catch(r){throw jt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?W_(this._delegate,e):W_(this._delegate,e,n,...r)}catch(i){throw jt(i,"updateDoc()","DocumentReference.update()")}}delete(){return kU(this._delegate)}onSnapshot(...e){const n=px(e),r=mx(e,i=>new xc(this.firestore,new Sr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return lx(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=TU(this._delegate):(e==null?void 0:e.source)==="server"?n=xU(this._delegate):n=np(this._delegate),n.then(r=>new xc(this.firestore,new Sr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new wn(this.firestore,e?this._delegate.withConverter(ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function jt(t,e,n){return t.message=t.message.replace(e,n),t}function px(t){for(const e of t)if(typeof e=="object"&&!ip(e))return e;return{}}function mx(t,e){var n,r;let i;return ip(t[0])?i=t[0]:ip(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class xc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new wn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return ox(this._delegate,e._delegate)}}class Sc extends xc{data(e){const n=this._delegate.data(e);return GL(n!==void 0),n}}class Bt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ad(e)}where(e,n,r){try{return new Bt(this.firestore,Cn(this._delegate,tx(e,n,r)))}catch(i){throw jt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Bt(this.firestore,Cn(this._delegate,gU(e,n)))}catch(r){throw jt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Bt(this.firestore,Cn(this._delegate,nx(e)))}catch(n){throw jt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Bt(this.firestore,Cn(this._delegate,yU(e)))}catch(n){throw jt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Bt(this.firestore,Cn(this._delegate,vU(...e)))}catch(n){throw jt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Bt(this.firestore,Cn(this._delegate,_U(...e)))}catch(n){throw jt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Bt(this.firestore,Cn(this._delegate,wU(...e)))}catch(n){throw jt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Bt(this.firestore,Cn(this._delegate,bU(...e)))}catch(n){throw jt(n,"endAt()","Query.endAt()")}}isEqual(e){return qT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=SU(this._delegate):(e==null?void 0:e.source)==="server"?n=AU(this._delegate):n=ax(this._delegate),n.then(r=>new sp(this.firestore,new mi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=px(e),r=mx(e,i=>new sp(this.firestore,new mi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return lx(this._delegate,n,r)}withConverter(e){return new Bt(this.firestore,e?this._delegate.withConverter(ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class zU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Sc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class sp{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Bt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Sc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new zU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Sc(this._firestore,r))})}isEqual(e){return ox(this._delegate,e._delegate)}}class xo extends Bt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new wn(this.firestore,e):null}doc(e){try{return e===void 0?new wn(this.firestore,To(this._delegate)):new wn(this.firestore,To(this._delegate,e))}catch(n){throw jt(n,"doc()","CollectionReference.doc()")}}add(e){return cx(this._delegate,e).then(n=>new wn(this.firestore,n))}isEqual(e){return jT(this._delegate,e._delegate)}withConverter(e){return new xo(this.firestore,e?this._delegate.withConverter(ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zi(t){return Ae(t,je)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(...e){this._delegate=new pi(...e)}static documentId(){return new kg(tt.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof pi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._delegate=e}static serverTimestamp(){const e=LU();return e._methodName="FieldValue.serverTimestamp",new Li(e)}static delete(){const e=DU();return e._methodName="FieldValue.delete",new Li(e)}static arrayUnion(...e){const n=MU(...e);return n._methodName="FieldValue.arrayUnion",new Li(n)}static arrayRemove(...e){const n=FU(...e);return n._methodName="FieldValue.arrayRemove",new Li(n)}static increment(e){const n=UU(e);return n._methodName="FieldValue.increment",new Li(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const HU={Firestore:hx,GeoPoint:Jh,Timestamp:He,Blob:ux,Transaction:dx,WriteBatch:fx,DocumentReference:wn,DocumentSnapshot:xc,Query:Bt,QueryDocumentSnapshot:Sc,QuerySnapshot:sp,CollectionReference:xo,FieldPath:kg,FieldValue:Li,setLogLevel:qU,CACHE_SIZE_UNLIMITED:ZF};function KU(t,e){t.INTERNAL.registerComponent(new Mn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},HU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GU(t){KU(t,(e,n)=>new hx(e,n,new jU)),t.registerVersion($U,VU)}GU(Yt);const WU={apiKey:"AIzaSyB92XCW231iCTqH4TmwITBeQvbLVqneYA8",authDomain:"itemshare-68ae3.firebaseapp.com",projectId:"itemshare-68ae3",storageBucket:"itemshare-68ae3.appspot.com",messagingSenderId:"468617277076",appId:"1:468617277076:web:6c0ce2cd38ad48ca66ce81"};Yt.initializeApp(WU);Yt.firestore.FieldValue.serverTimestamp;const ha=Yt.firestore();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="firebasestorage.googleapis.com",yx="storageBucket",QU=2*60*1e3,YU=10*60*1e3,XU=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Lt{constructor(e,n,r=0){super(zd(e),`Firebase Storage: ${n} (${zd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function zd(t){return"storage/"+t}function Cg(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(qe.UNKNOWN,t)}function JU(t){return new Qe(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ZU(t){return new Qe(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function e$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(qe.UNAUTHENTICATED,t)}function t$(){return new Qe(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function n$(t){return new Qe(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vx(){return new Qe(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _x(){return new Qe(qe.CANCELED,"User canceled the upload/download.")}function r$(t){return new Qe(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function i$(t){return new Qe(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function s$(){return new Qe(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yx+"' property when initializing the app?")}function wx(){return new Qe(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function o$(){return new Qe(qe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function a$(){return new Qe(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function c$(t){return new Qe(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function op(t){return new Qe(qe.INVALID_ARGUMENT,t)}function bx(){return new Qe(qe.APP_DELETED,"The Firebase app was deleted.")}function l$(t){return new Qe(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $a(t,e){return new Qe(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function da(t){throw new Qe(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw i$(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},v=n===gx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",T=new RegExp(`^https?://${v}/${i}/${_}`,"i"),k=[{regex:a,indices:c,postModify:s},{regex:f,indices:g,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let E=0;E<k.length;E++){const L=k[E],U=L.regex.exec(e);if(U){const Y=U[L.indices.bucket];let K=U[L.indices.path];K||(K=""),r=new pn(Y,K),L.postModify(r);break}}if(r==null)throw r$(e);return r}}class u${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(f,c())},_)}function d(){s&&clearTimeout(s)}function f(_,...T){if(l){d();return}if(_){d(),u.call(null,_,...T);return}if(c()||o){d(),u.call(null,_,...T);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let g=!1;function v(_){g||(g=!0,d(),!l&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function d$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f$(t){return t!==void 0}function p$(t){return typeof t=="function"}function m$(t){return typeof t=="object"&&!Array.isArray(t)}function cd(t){return typeof t=="string"||t instanceof String}function X_(t){return Rg()&&t instanceof Blob}function Rg(){return typeof Blob<"u"&&!ph()}function J_(t,e,n,r){if(r<e)throw op(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw op(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ix(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ts||(ts={}));/**
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
 */function Ex(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g${constructor(e,n,r,i,s,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Rl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ts.NO_ERROR,c=s.getStatus();if(!a||Ex(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ts.ABORT;r(!1,new Rl(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Rl(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());f$(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Cg();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?bx():_x();o(c)}else{const c=vx();o(c)}};this.canceled_?n(!1,new Rl(!1,null,!0)):this.backoffId_=h$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&d$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function y$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function v$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function w$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function b$(t,e,n,r,i,s,o=!0){const a=Ix(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return _$(l,e),y$(l,n),v$(l,s),w$(l,r),new g$(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function E$(...t){const e=I$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Rg())return new Blob(t);throw new Qe(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function T$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */const tr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hd{constructor(e,n){this.data=e,this.contentType=n||null}}function S$(t,e){switch(t){case tr.RAW:return new Hd(Tx(e));case tr.BASE64:case tr.BASE64URL:return new Hd(xx(t,e));case tr.DATA_URL:return new Hd(k$(e),C$(e))}throw Cg()}function Tx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function A$(t){let e;try{e=decodeURIComponent(t)}catch{throw $a(tr.DATA_URL,"Malformed data URL.")}return Tx(e)}function xx(t,e){switch(t){case tr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw $a(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw $a(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=x$(e)}catch(i){throw i.message.includes("polyfill")?i:$a(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Sx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw $a(tr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=R$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function k$(t){const e=new Sx(t);return e.base64?xx(tr.BASE64,e.rest):A$(e.rest)}function C$(t){return new Sx(t).contentType}function R$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){let r=0,i="";X_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(X_(this.data_)){const r=this.data_,i=T$(r,e,n);return i===null?null:new Qr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qr(r,!0)}}static getBlob(...e){if(Rg()){const n=e.map(r=>r instanceof Qr?r.data_:r);return new Qr(E$.apply(null,n))}else{const n=e.map(o=>cd(o)?S$(tr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Qr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){let e;try{e=JSON.parse(t)}catch{return null}return m$(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function P$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function kx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O$(t,e){return e}class $t{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||O$}}let Nl=null;function D$(t){return!cd(t)||t.length<2?t:kx(t)}function Cx(){if(Nl)return Nl;const t=[];t.push(new $t("bucket")),t.push(new $t("generation")),t.push(new $t("metageneration")),t.push(new $t("name","fullPath",!0));function e(s,o){return D$(o)}const n=new $t("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new $t("size");return i.xform=r,t.push(i),t.push(new $t("timeCreated")),t.push(new $t("updated")),t.push(new $t("md5Hash",null,!0)),t.push(new $t("cacheControl",null,!0)),t.push(new $t("contentDisposition",null,!0)),t.push(new $t("contentEncoding",null,!0)),t.push(new $t("contentLanguage",null,!0)),t.push(new $t("contentType",null,!0)),t.push(new $t("metadata","customMetadata",!0)),Nl=t,Nl}function L$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function M$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return L$(r,t),r}function Rx(t,e,n){const r=Ax(e);return r===null?null:M$(t,r,n)}function F$(t,e,n,r){const i=Ax(e);if(i===null||!cd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=al(d,n,r),g=Ix({alt:"media",token:l});return f+g})[0]}function Nx(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Qo{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){if(!t)throw Cg()}function Ng(t,e){function n(r,i){const s=Rx(t,i,e);return wr(s!==null),s}return n}function U$(t,e){function n(r,i){const s=Rx(t,i,e);return wr(s!==null),F$(s,i,t.host,t._protocol)}return n}function cl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=t$():i=e$():n.getStatus()===402?i=ZU(t.bucket):n.getStatus()===403?i=n$(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Px(t){const e=cl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=JU(t.path)),s.serverResponse=i.serverResponse,s}return n}function $$(t,e,n){const r=e.fullServerUrl(),i=al(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Qo(i,s,Ng(t,n),o);return a.errorHandler=Px(e),a}function V$(t,e,n){const r=e.fullServerUrl(),i=al(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Qo(i,s,U$(t,n),o);return a.errorHandler=Px(e),a}function B$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ox(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=B$(null,e)),r}function j$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let E=0;E<2;E++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Ox(e,r,i),u=Nx(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Qr.getBlob(h,r,d);if(f===null)throw wx();const g={name:l.fullPath},v=al(s,t.host,t._protocol),_="POST",T=t.maxUploadRetryTime,A=new Qo(v,_,Ng(t,n),T);return A.urlParams=g,A.headers=o,A.body=f.uploadData(),A.errorHandler=cl(e),A}class $u{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Pg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{wr(!1)}return wr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function q$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Ox(e,r,i),a={name:o.fullPath},c=al(s,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Nx(o,n),d=t.maxUploadRetryTime;function f(v){Pg(v);let _;try{_=v.getResponseHeader("X-Goog-Upload-URL")}catch{wr(!1)}return wr(cd(_)),_}const g=new Qo(c,l,f,d);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=cl(e),g}function z$(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const u=Pg(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{wr(!1)}h||wr(!1);const d=Number(h);return wr(!isNaN(d)),new $u(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Qo(n,o,s,a);return c.headers=i,c.errorHandler=cl(e),c}const Z_=256*1024;function H$(t,e,n,r,i,s,o,a){const c=new $u(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw o$();const l=c.total-c.current;let u=l;i>0&&(u=Math.min(u,i));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},v=r.slice(h,d);if(v===null)throw wx();function _(E,L){const U=Pg(E,["active","final"]),Y=c.current+u,K=r.size();let W;return U==="final"?W=Ng(e,s)(E,L):W=null,new $u(Y,K,U==="final",W)}const T="POST",A=e.maxUploadRetryTime,k=new Qo(n,T,_,A);return k.headers=g,k.body=v.uploadData(),k.progressCallback=a||null,k.errorHandler=cl(t),k}const Qt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Kd(t){switch(t){case"running":case"pausing":case"canceling":return Qt.RUNNING;case"paused":return Qt.PAUSED;case"success":return Qt.SUCCESS;case"canceled":return Qt.CANCELED;case"error":return Qt.ERROR;default:return Qt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(e,n,r){if(p$(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class G${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw da("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw da("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw da("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw da("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw da("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class W$ extends G${initXhr(){this.xhr_.responseType="text"}}function Vs(){return new W$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q${constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Cx(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(qe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Ex(i.status,[]))if(s)i=vx();else{this.sleepTime=Math.max(this.sleepTime*2,XU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(qe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=q$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=z$(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Vs,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Z_*this._chunkMultiplier,n=new $u(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=H$(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Vs,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Z_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=$$(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Vs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=j$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_x(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Kd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new K$(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Kd(this._state)){case Qt.SUCCESS:Ls(this._resolve.bind(null,this.snapshot))();break;case Qt.CANCELED:case Qt.ERROR:const n=this._reject;Ls(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Kd(this._state)){case Qt.RUNNING:case Qt.PAUSED:e.next&&Ls(e.next.bind(e,this.snapshot))();break;case Qt.SUCCESS:e.complete&&Ls(e.complete.bind(e))();break;case Qt.CANCELED:case Qt.ERROR:e.error&&Ls(e.error.bind(e,this._error))();break;default:e.error&&Ls(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class gs{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gs(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kx(this._location.path)}get storage(){return this._service}get parent(){const e=N$(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new gs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw l$(e)}}function Y$(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Q$(t,new Qr(e),n)}function X$(t){t._throwIfRoot("getDownloadURL");const e=V$(t.storage,t._location,Cx());return t.storage.makeRequestWithTokens(e,Vs).then(n=>{if(n===null)throw a$();return n})}function J$(t,e){const n=P$(t._location.path,e),r=new pn(t._location.bucket,n);return new gs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z$(t){return/^[A-Za-z]+:\/\//.test(t)}function eV(t,e){return new gs(t,e)}function Dx(t,e){if(t instanceof Og){const n=t;if(n._bucket==null)throw s$();const r=new gs(n,n._bucket);return e!=null?Dx(r,e):r}else return e!==void 0?J$(t,e):t}function tV(t,e){if(e&&Z$(e)){if(t instanceof Og)return eV(t,e);throw op("To use ref(service, url), the first argument must be a Storage instance.")}else return Dx(t,e)}function ew(t,e){const n=e==null?void 0:e[yx];return n==null?null:pn.makeFromBucketSpec(n,t)}function nV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Lb(i,t.app.options.projectId))}class Og{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QU,this._maxUploadRetryTime=YU,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=ew(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=ew(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new u$(bx());{const o=b$(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const tw="@firebase/storage",nw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="storage";function rV(t,e,n){return t=ne(t),Y$(t,e,n)}function iV(t){return t=ne(t),X$(t)}function sV(t,e){return t=ne(t),tV(t,e)}function oV(t=qb(),e){t=ne(t);const r=Up(t,Lx).getImmediate({identifier:e}),i=mC("storage");return i&&aV(r,...i),r}function aV(t,e,n,r={}){nV(t,e,n,r)}function cV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Og(n,r,i,e,Cr)}function lV(){Er(new Mn(Lx,cV,"PUBLIC").setMultipleInstances(!0)),In(tw,nw,""),In(tw,nw,"esm2017")}lV();const uV=oV(),Vn=$k("itemshare",{state:()=>({temp:1,myUserUid:localStorage.getItem("useruid")||null,myProfile:{firstName:"",lastName:"",image:"",location:""},editProfile:{id:9,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},sampleProfiles:[{id:0,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},{id:1,firstName:"John",lastName:"Smith",image:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",location:"Baybay City"},{id:2,firstName:"Emily",lastName:"Johnson",image:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",location:"Tacloban City"},{id:3,firstName:"David",lastName:"Brown",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Calbayog City"},{id:4,firstName:"Sarah",lastName:"Davis",image:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",location:"Tacloban City"},{id:5,firstName:"Michael",lastName:"Wilson",image:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",location:"Ormoc City"},{id:6,firstName:"Jessica",lastName:"Thompson",image:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",location:"Maasin City"},{id:7,firstName:"Christopher",lastName:"Martinez",image:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",location:"Tacloban City"},{id:8,firstName:"Megan",lastName:"Taylor",image:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",location:"Calbayog City"}],rentedItems:[],sampleItems:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",ownerId:0},{itemId:2,itemName:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",ownerId:1},{itemId:3,itemName:"Cushion set A",location:"Maasin City",rentAmount:"50.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",ownerId:2},{itemId:4,name:"Table",location:"Ormoc City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",ownerId:3},{itemId:5,itemName:"Chair",location:"Sogod, Southern Leyte",rentAmount:"75.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",ownerId:4},{itemId:6,itemName:"Bookshelf",location:"Biliran",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",ownerId:5},{itemId:7,itemName:"Sofa",location:"Ormoc City",rentAmount:"250.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",ownerId:6},{itemId:8,itemName:"Dining Table",location:"Baybay City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",ownerId:7},{itemId:9,itemName:"Kitchen Cabinet",location:"Maasin, Southern Leyte",rentAmount:"220.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",ownerId:8},{itemId:10,itemName:"Desk",location:"Tacloban City",rentAmount:"120.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",ownerId:0},{itemId:11,itemName:"Bed Frame",location:"Ormoc City",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",ownerId:1},{itemId:12,itemName:"Mattress",location:"Baybay City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",ownerId:2},{itemId:13,itemName:"Wardrobe",location:"Tacloban City",rentAmount:"180.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",ownerId:3},{itemId:14,itemName:"Television",location:"Maasin, Southern Leyte",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",ownerId:4},{itemId:15,itemName:"Coffee Table",location:"Ormoc City",rentAmount:"90.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",ownerId:5},{itemId:16,itemName:"Side Table",location:"Baybay City",rentAmount:"60.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",ownerId:6},{itemId:17,itemName:"Dresser",location:"Tacloban City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",ownerId:7},{itemId:18,itemName:"Armchair",location:"Maasin, Southern Leyte",rentAmount:"120.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",ownerId:8}],sampleConvos:[{username:"John Doe",lastMessage:"Sample message"}]}),getters:{tempGetter(t){return t.temp},productsCheaperThan(t){return e=>t.products.filter(n=>n.price<e)},itemsInRange(t){return(e,n)=>t.sampleItems.slice(e,n)},itemById(t){return e=>t.sampleItems.find(n=>n.id==e)},loadedProfile(t){return e=>t.sampleProfiles[e]},loggedInUser(t){return t.myUserUid}},actions:{async initMyProfile(){Yt.auth().onAuthStateChanged(async t=>{if(t)this.myUserUid=t.uid,this.myProfile=await this.loadProfile(t.uid);else return this.useruid=null,{}})},async loadProfile(t){const e=await np(To(ha,"users",t));if(e.exists())return{firstName:e.data().firstName,lastName:e.data().lastName,location:e.data().location,image:e.data().image}},async login(t,e){if(t!==""&&e!=="")try{const n=await Yt.auth().signInWithEmailAndPassword(t,e);return this.myUserUid=n.user.uid,localStorage.setItem("useruid",this.myUserUid),!0}catch(n){switch(n.code){case"auth/invalid-email":throw"Invalid email";case"auth/user-not-found":throw"No account with that email was found";case"auth/wrong-password":throw"Incorrect password";default:throw n.code}}else throw"Please fill out all the fields!"},async loadItems(t=12,e=""){let n=Cn(Fu(ha,"items"));e&&(n=Cn(n,tx("ownerId","==",e))),n=Cn(n,nx(t));const r=await ax(n),i=[];return r.forEach(s=>{const o={itemId:s.id,itemName:s.data().itemName,location:s.data().location,rentAmount:s.data().rentAmount,rentRate:s.data().rentRate,image:s.data().images?s.data().images[0]:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"};i.push(o)}),i},async loadItem(t){const e=await np(To(ha,"items",t));if(e.exists())return{itemName:e.data().itemName,location:e.data().location,rentAmount:e.data().rentAmount,rentRate:e.data().rentRate,description:e.data().description,tags:e.data().tags,images:e.data().images||["https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"],ownerId:e.data().ownerId}},async uploadImage(t){const e=sV(uV,"itemImages/"+Date.now()+"."+t.name.split(".").pop());return await rV(e,t),await iV(e)},async createItem(t){if(t.imageFiles.length==0||t.itemName==""||t.location==""||t.rentAmount==""||t.rentRate==""||t.tags.length==0||t.description=="")throw"Please fill out all the fields!";try{const n=[];for(var e of t.imageFiles)n.push(await this.uploadImage(e));return await cx(Fu(ha,"items"),{ownerId:this.myUserUid,images:n,itemName:t.itemName,location:t.location,rentAmount:t.rentAmount,rentRate:t.rentRate,tags:t.tags,description:t.description,dateCreated:Date.now()}),!0}catch(n){throw n.message}},searchItem(){return[]},async register(t){if(console.log(t),t.phoneNumber==""||t.email==""||t.firstName==""||t.lastName==""||t.gender=="Select"||t.birthday==""||t.password==""||t.confirmPassword=="")throw"Please fill out all the fields!";if(t.password!=t.confirmPassword)throw"Password does not match!";if(!t.terms)throw"Please agree to the terms and conditions.";try{const e=await Yt.auth().createUserWithEmailAndPassword(t.email,t.password);await ha.collection("users").doc(e.user.uid).set({firstName:t.firstName,lastName:t.lastName,email:t.email,phoneNumber:t.phoneNumber,gender:t.gender,birthday:t.birthday,location:"unspecified",verified:!1,admin:!1}),this.myUserUid=e.user.uid,localStorage.setItem("useruid",this.myUserUid)}catch(e){throw e.message}return!0},async logout(){try{return await Yt.auth().signOut(),this.myUserUid=null,localStorage.removeItem("useruid"),!0}catch(t){throw t}}}}),hV={class:"flex w-full flex-col gap-1"},dV=["type","placeholder","value"],un={__name:"CustomField",props:{modelValue:{default:""},inputType:{type:String,default:"text"},placeholder:{type:String,default:""},label:{type:String,default:""}},emits:["update:modelValue"],setup(t){return(e,n)=>(ie(),fe("div",hV,[Dt(p("label",{class:"text-text"},De(t.label),513),[[Qi,t.label]]),p("input",{size:"1",type:t.inputType,placeholder:t.placeholder,value:t.modelValue,onInput:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value)),class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-5 placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-2 focus:border-primary focus:border-opacity-100 focus:bg-accent focus:bg-opacity-20 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50"},null,40,dV),eb(e.$slots,"default")]))}},fV={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-white p-8"},pV=["onSubmit"],mV=p("h1",null,"Login",-1),gV={class:"pt-2"},yV={class:"pt-2"},vV=p("button",{class:"rounded-xl bg-green-800 px-5 py-3 text-white"}," Login ",-1),_V={__name:"LoginView",setup(t){const e=hh(),n=Vn();let r=Ee("");const i=Ee(""),s=Ee("");async function o(){try{await n.login(i.value,s.value)&&e.push("/home")}catch(a){r.value=a}}return(a,c)=>{const l=Pc("RouterLink");return ie(),fe("div",fV,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:Ir(o,["stop","prevent"])},[mV,G(un,{"input-type":"email",modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),placeholder:"Email"},null,8,["modelValue"]),G(un,{"input-type":"password",modelValue:s.value,"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),placeholder:"Password"},null,8,["modelValue"]),Dt(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},De(de(r)),513),[[Qi,de(r)]]),p("p",gV,[G(l,{to:"/forgot-password",class:"underline"},{default:Ge(()=>[we("Forgot Password?")]),_:1})]),p("p",yV,[we(" New here? "),G(l,{to:"/register",class:"underline"},{default:Ge(()=>[we("Create an account!")]),_:1})]),vV],40,pV)])}}},wV={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-white p-8"},bV=["onSubmit"],IV=p("h1",null,"Create an account",-1),EV={class:"flex flex-col gap-2 xl:flex-row xl:gap-8"},TV={class:"flex basis-1/2 flex-col gap-2"},xV=p("button",{class:"rounded-md border-2 border-transparent bg-primary bg-opacity-70 px-4 py-2 text-white transition-colors hover:bg-primary hover:bg-opacity-100"}," Send SMS Code ",-1),SV={class:"flex w-full flex-col gap-1"},AV=p("label",null,"Gender",-1),kV=p("option",null,"Select",-1),CV=p("option",null,"Male",-1),RV=p("option",null,"Female",-1),NV=p("option",null,"Others",-1),PV=[kV,CV,RV,NV],OV={class:"flex basis-1/2 flex-col gap-2"},DV={class:"text-sm"},LV=p("span",null," I agree to the ",-1),MV=p("button",{class:"rounded-md border-2 border-transparent bg-primary px-4 py-2 text-center text-white"}," CREATE ACCOUNT ",-1),FV={__name:"RegisterView",setup(t){const e=hh(),n=Vn();let r=Ee("");const i=Ee({phoneNumber:"",email:"",firstName:"",lastName:"",gender:"Select",birthday:"",password:"",confirmPassword:"",terms:!1});async function s(){try{await n.register(i.value)&&e.push("/home")}catch(o){r.value=o}}return(o,a)=>{const c=Pc("RouterLink");return ie(),fe("div",wV,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:Ir(s,["stop","prevent"])},[IV,p("div",EV,[p("div",TV,[G(un,{label:"Phone Number",modelValue:i.value.phoneNumber,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value.phoneNumber=l),"input-type":"tel",placeholder:"Enter your phone number"},{default:Ge(()=>[xV]),_:1},8,["modelValue"]),G(un,{label:"Email Address",modelValue:i.value.email,"onUpdate:modelValue":a[1]||(a[1]=l=>i.value.email=l),"input-type":"email",placeholder:"Email"},null,8,["modelValue"]),G(un,{label:"First Name",modelValue:i.value.firstName,"onUpdate:modelValue":a[2]||(a[2]=l=>i.value.firstName=l),"input-type":"text",placeholder:"First Name"},null,8,["modelValue"]),G(un,{label:"Last Name",modelValue:i.value.lastName,"onUpdate:modelValue":a[3]||(a[3]=l=>i.value.lastName=l),"input-type":"text",placeholder:"Last Name"},null,8,["modelValue"]),p("div",SV,[AV,Dt(p("select",{"onUpdate:modelValue":a[4]||(a[4]=l=>i.value.gender=l),class:"rounded-md border-2 border-text border-opacity-25 bg-secondary bg-opacity-50 focus:border-2 focus:border-primary focus:border-opacity-60 focus:bg-primary focus:bg-opacity-5 focus:ring-0",placeholder:"Gender"},PV,512),[[Ek,i.value.gender]])])]),p("div",OV,[G(un,{label:"Birthday",modelValue:i.value.birthday,"onUpdate:modelValue":a[5]||(a[5]=l=>i.value.birthday=l),"input-type":"date"},null,8,["modelValue"]),G(un,{label:"Password",modelValue:i.value.password,"onUpdate:modelValue":a[6]||(a[6]=l=>i.value.password=l),"input-type":"password",placeholder:"Password"},null,8,["modelValue"]),G(un,{label:"Confirm Password",modelValue:i.value.confirmPassword,"onUpdate:modelValue":a[7]||(a[7]=l=>i.value.confirmPassword=l),"input-type":"password",placeholder:"Confirm Password"},null,8,["modelValue"]),Dt(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},De(de(r)),513),[[Qi,de(r)]]),p("p",DV,[Dt(p("input",{type:"checkbox",name:"checkbox",id:"checkbox","onUpdate:modelValue":a[8]||(a[8]=l=>i.value.terms=l),class:"text-primary focus:ring-0"},null,512),[[Ik,i.value.terms]]),LV,G(c,{to:"/terms-and-conditions",class:"underline"},{default:Ge(()=>[we(" Terms and Conditions ")]),_:1})]),MV,G(c,{to:"/login",class:"rounded-md border-2 border-primary bg-white px-4 py-2 text-center text-primary"},{default:Ge(()=>[we(" GO BACK ")]),_:1})])])],40,bV)])}}},UV={class:"whitespace-pre text-green-600"},$V={class:"material-icons-outlined"},Hi={__name:"StarRating",props:{value:{default:0}},setup(t){return(e,n)=>(ie(),fe("p",UV,[(ie(),fe(Ke,null,rr(5,r=>p("span",$V,De(r<t.value?"star":"grade"),1)),64))]))}},VV={class:"rounded-lg shadow-md shadow-gray-400 overflow-hidden hidden z-50 bg-white",id:"dropdownNotifications"},BV={class:"h-64 w-full md:w-96 flex flex-col","aria-labelledby":"dropdownNotificationsButton"},jV=p("h2",{class:"font-bold px-3 py-2 shadow-sm shadow-gray-400 z-10 text-green-600"}," NOTIFICATIONS ",-1),qV={class:"overflow-y-auto bg-green-50"},zV={class:"flex flex-col gap-1 p-2"},HV={class:"p-2 text-sm shadow-sm bg-white shadow-gray-400 text-gray-700"},KV={__name:"NotificationsPopup",setup(t){const e=Ee([{type:"review",message:'Lorem Dolor gave your "3D Scanner" a rating:',rating:4,time:"JUST NOW"},{type:"review",message:'Lorem Dolor left a review to your "3D Scanner": "Way lami imo item di nani nahu iuli nimo kay ahu ni sunugon human gamit!"',rating:5,time:"24 MINS AGO"},{type:"upcoming",message:'"2D Printer" will be ready for you to pick up in 24 hours.',time:"23 HOURS AGO"},{type:"message",message:"Lorem Dolor chatted you! Be sure to leave a reply.",time:"4 DAYS AGO"}]);return(n,r)=>(ie(),fe("div",VV,[p("div",BV,[jV,p("div",qV,[p("div",zV,[(ie(!0),fe(Ke,null,rr(e.value,i=>(ie(),fe("article",HV,[p("p",null,De(i.message),1),i.rating?(ie(),_s(Hi,{key:0,value:i.rating},null,8,["value"])):Ws("",!0),p("p",null,De(i.time),1)]))),256))])])])]))}};var GV=function(){function t(e,n){n===void 0&&(n=[]),this._eventType=e,this._eventFunctions=n}return t.prototype.init=function(){var e=this;this._eventFunctions.forEach(function(n){typeof window<"u"&&window.addEventListener(e._eventType,n)})},t}(),Vu=globalThis&&globalThis.__assign||function(){return Vu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Vu.apply(this,arguments)},Bu={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},Mx=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=Bu),this._items=e,this._options=Vu(Vu({},Bu),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&this._items.map(function(n){n.active&&e.open(n.id),n.triggerEl.addEventListener("click",function(){e.toggle(n.id)})})},t.prototype.getItem=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.open=function(e){var n,r,i=this,s=this.getItem(e);this._options.alwaysOpen||this._items.map(function(o){var a,c;o!==s&&((a=o.triggerEl.classList).remove.apply(a,i._options.activeClasses.split(" ")),(c=o.triggerEl.classList).add.apply(c,i._options.inactiveClasses.split(" ")),o.targetEl.classList.add("hidden"),o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"))}),(n=s.triggerEl.classList).add.apply(n,this._options.activeClasses.split(" ")),(r=s.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),s.triggerEl.setAttribute("aria-expanded","true"),s.targetEl.classList.remove("hidden"),s.active=!0,s.iconEl&&s.iconEl.classList.add("rotate-180"),this._options.onOpen(this,s)},t.prototype.toggle=function(e){var n=this.getItem(e);n.active?this.close(e):this.open(e),this._options.onToggle(this,n)},t.prototype.close=function(e){var n,r,i=this.getItem(e);(n=i.triggerEl.classList).remove.apply(n,this._options.activeClasses.split(" ")),(r=i.triggerEl.classList).add.apply(r,this._options.inactiveClasses.split(" ")),i.targetEl.classList.add("hidden"),i.triggerEl.setAttribute("aria-expanded","false"),i.active=!1,i.iconEl&&i.iconEl.classList.remove("rotate-180"),this._options.onClose(this,i)},t}();function Dg(){document.querySelectorAll("[data-accordion]").forEach(function(t){var e=t.getAttribute("data-accordion"),n=t.getAttribute("data-active-classes"),r=t.getAttribute("data-inactive-classes"),i=[];t.querySelectorAll("[data-accordion-target]").forEach(function(s){if(s.closest("[data-accordion]")===t){var o={id:s.getAttribute("data-accordion-target"),triggerEl:s,targetEl:document.querySelector(s.getAttribute("data-accordion-target")),iconEl:s.querySelector("[data-accordion-icon]"),active:s.getAttribute("aria-expanded")==="true"};i.push(o)}}),new Mx(i,{alwaysOpen:e==="open",activeClasses:n||Bu.activeClasses,inactiveClasses:r||Bu.inactiveClasses})})}typeof window<"u"&&(window.Accordion=Mx,window.initAccordions=Dg);var ju=globalThis&&globalThis.__assign||function(){return ju=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ju.apply(this,arguments)},rw={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},Fx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=rw),this._targetEl=e,this._triggerEl=n,this._options=ju(ju({},rw),r),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){e.toggle()}))},t.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},t.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},t.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},t}();function Lg(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(t){var e=t.getAttribute("data-collapse-toggle"),n=document.getElementById(e);n?new Fx(n,t):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))})}typeof window<"u"&&(window.Collapse=Fx,window.initCollapses=Lg);var Mi=globalThis&&globalThis.__assign||function(){return Mi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Mi.apply(this,arguments)},tu={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},Ux=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=tu),this._items=e,this._options=Mi(Mi(Mi({},tu),n),{indicators:Mi(Mi({},tu.indicators),n.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return t.prototype._init=function(){var e=this;this._items.map(function(n){n.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(n,r){n.el.addEventListener("click",function(){e.slideTo(r)})})},t.prototype.getItem=function(e){return this._items[e]},t.prototype.slideTo=function(e){var n=this._items[e],r={left:n.position===0?this._items[this._items.length-1]:this._items[n.position-1],middle:n,right:n.position===this._items.length-1?this._items[0]:this._items[n.position+1]};this._rotate(r),this._setActiveItem(n),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},t.prototype.next=function(){var e=this._getActiveItem(),n=null;e.position===this._items.length-1?n=this._items[0]:n=this._items[e.position+1],this.slideTo(n.position),this._options.onNext(this)},t.prototype.prev=function(){var e=this._getActiveItem(),n=null;e.position===0?n=this._items[this._items.length-1]:n=this._items[e.position-1],this.slideTo(n.position),this._options.onPrev(this)},t.prototype._rotate=function(e){this._items.map(function(n){n.el.classList.add("hidden")}),e.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.left.el.classList.add("-translate-x-full","z-10"),e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-20"),e.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.right.el.classList.add("translate-x-full","z-10")},t.prototype.cycle=function(){var e=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){e.next()},this._intervalDuration))},t.prototype.pause=function(){clearInterval(this._intervalInstance)},t.prototype._getActiveItem=function(){return this._activeItem},t.prototype._setActiveItem=function(e){var n,r,i=this;this._activeItem=e;var s=e.position;this._indicators.length&&(this._indicators.map(function(o){var a,c;o.el.setAttribute("aria-current","false"),(a=o.el.classList).remove.apply(a,i._options.indicators.activeClasses.split(" ")),(c=o.el.classList).add.apply(c,i._options.indicators.inactiveClasses.split(" "))}),(n=this._indicators[s].el.classList).add.apply(n,this._options.indicators.activeClasses.split(" ")),(r=this._indicators[s].el.classList).remove.apply(r,this._options.indicators.inactiveClasses.split(" ")),this._indicators[s].el.setAttribute("aria-current","true"))},t}();function Mg(){document.querySelectorAll("[data-carousel]").forEach(function(t){var e=t.getAttribute("data-carousel-interval"),n=t.getAttribute("data-carousel")==="slide",r=[],i=0;t.querySelectorAll("[data-carousel-item]").length&&Array.from(t.querySelectorAll("[data-carousel-item]")).map(function(l,u){r.push({position:u,el:l}),l.getAttribute("data-carousel-item")==="active"&&(i=u)});var s=[];t.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function(l){s.push({position:parseInt(l.getAttribute("data-carousel-slide-to")),el:l})});var o=new Ux(r,{defaultPosition:i,indicators:{items:s},interval:e||tu.interval});n&&o.cycle();var a=t.querySelector("[data-carousel-next]"),c=t.querySelector("[data-carousel-prev]");a&&a.addEventListener("click",function(){o.next()}),c&&c.addEventListener("click",function(){o.prev()})})}typeof window<"u"&&(window.Carousel=Ux,window.initCarousels=Mg);var qu=globalThis&&globalThis.__assign||function(){return qu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},qu.apply(this,arguments)},iw={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},$x=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=iw),this._targetEl=e,this._triggerEl=n,this._options=qu(qu({},iw),r),this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){e.hide()})},t.prototype.hide=function(){var e=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){e._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},t}();function Fg(){document.querySelectorAll("[data-dismiss-target]").forEach(function(t){var e=t.getAttribute("data-dismiss-target"),n=document.querySelector(e);n?new $x(n,t):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))})}typeof window<"u"&&(window.Dismiss=$x,window.initDismisses=Fg);var en="top",xn="bottom",Sn="right",tn="left",Ug="auto",ll=[en,xn,Sn,tn],So="start",Ac="end",WV="clippingParents",Vx="viewport",fa="popper",QV="reference",sw=ll.reduce(function(t,e){return t.concat([e+"-"+So,e+"-"+Ac])},[]),Bx=[].concat(ll,[Ug]).reduce(function(t,e){return t.concat([e,e+"-"+So,e+"-"+Ac])},[]),YV="beforeRead",XV="read",JV="afterRead",ZV="beforeMain",eB="main",tB="afterMain",nB="beforeWrite",rB="write",iB="afterWrite",sB=[YV,XV,JV,ZV,eB,tB,nB,rB,iB];function hr(t){return t?(t.nodeName||"").toLowerCase():null}function yn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ys(t){var e=yn(t).Element;return t instanceof e||t instanceof Element}function En(t){var e=yn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function $g(t){if(typeof ShadowRoot>"u")return!1;var e=yn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function oB(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},s=e.elements[n];!En(s)||!hr(s)||(Object.assign(s.style,r),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function aB(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],s=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!En(i)||!hr(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}const cB={name:"applyStyles",enabled:!0,phase:"write",fn:oB,effect:aB,requires:["computeStyles"]};function or(t){return t.split("-")[0]}var ns=Math.max,zu=Math.min,Ao=Math.round;function ap(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function jx(){return!/^((?!chrome|android).)*safari/i.test(ap())}function ko(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,s=1;e&&En(t)&&(i=t.offsetWidth>0&&Ao(r.width)/t.offsetWidth||1,s=t.offsetHeight>0&&Ao(r.height)/t.offsetHeight||1);var o=ys(t)?yn(t):window,a=o.visualViewport,c=!jx()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/i,u=(r.top+(c&&a?a.offsetTop:0))/s,h=r.width/i,d=r.height/s;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function Vg(t){var e=ko(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function qx(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&$g(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ar(t){return yn(t).getComputedStyle(t)}function lB(t){return["table","td","th"].indexOf(hr(t))>=0}function Ei(t){return((ys(t)?t.ownerDocument:t.document)||window.document).documentElement}function ld(t){return hr(t)==="html"?t:t.assignedSlot||t.parentNode||($g(t)?t.host:null)||Ei(t)}function ow(t){return!En(t)||Ar(t).position==="fixed"?null:t.offsetParent}function uB(t){var e=/firefox/i.test(ap()),n=/Trident/i.test(ap());if(n&&En(t)){var r=Ar(t);if(r.position==="fixed")return null}var i=ld(t);for($g(i)&&(i=i.host);En(i)&&["html","body"].indexOf(hr(i))<0;){var s=Ar(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function ul(t){for(var e=yn(t),n=ow(t);n&&lB(n)&&Ar(n).position==="static";)n=ow(n);return n&&(hr(n)==="html"||hr(n)==="body"&&Ar(n).position==="static")?e:n||uB(t)||e}function Bg(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Va(t,e,n){return ns(t,zu(e,n))}function hB(t,e,n){var r=Va(t,e,n);return r>n?n:r}function zx(){return{top:0,right:0,bottom:0,left:0}}function Hx(t){return Object.assign({},zx(),t)}function Kx(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var dB=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Hx(typeof e!="number"?e:Kx(e,ll))};function fB(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=or(n.placement),c=Bg(a),l=[tn,Sn].indexOf(a)>=0,u=l?"height":"width";if(!(!s||!o)){var h=dB(i.padding,n),d=Vg(s),f=c==="y"?en:tn,g=c==="y"?xn:Sn,v=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],_=o[c]-n.rects.reference[c],T=ul(s),A=T?c==="y"?T.clientHeight||0:T.clientWidth||0:0,k=v/2-_/2,E=h[f],L=A-d[u]-h[g],U=A/2-d[u]/2+k,Y=Va(E,U,L),K=c;n.modifiersData[r]=(e={},e[K]=Y,e.centerOffset=Y-U,e)}}function pB(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||qx(e.elements.popper,i)&&(e.elements.arrow=i))}const mB={name:"arrow",enabled:!0,phase:"main",fn:fB,effect:pB,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Co(t){return t.split("-")[1]}var gB={top:"auto",right:"auto",bottom:"auto",left:"auto"};function yB(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:Ao(n*i)/i||0,y:Ao(r*i)/i||0}}function aw(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,g=o.y,v=g===void 0?0:g,_=typeof u=="function"?u({x:f,y:v}):{x:f,y:v};f=_.x,v=_.y;var T=o.hasOwnProperty("x"),A=o.hasOwnProperty("y"),k=tn,E=en,L=window;if(l){var U=ul(n),Y="clientHeight",K="clientWidth";if(U===yn(n)&&(U=Ei(n),Ar(U).position!=="static"&&a==="absolute"&&(Y="scrollHeight",K="scrollWidth")),U=U,i===en||(i===tn||i===Sn)&&s===Ac){E=xn;var W=h&&U===L&&L.visualViewport?L.visualViewport.height:U[Y];v-=W-r.height,v*=c?1:-1}if(i===tn||(i===en||i===xn)&&s===Ac){k=Sn;var ce=h&&U===L&&L.visualViewport?L.visualViewport.width:U[K];f-=ce-r.width,f*=c?1:-1}}var Te=Object.assign({position:a},l&&gB),Fe=u===!0?yB({x:f,y:v},yn(n)):{x:f,y:v};if(f=Fe.x,v=Fe.y,c){var Oe;return Object.assign({},Te,(Oe={},Oe[E]=A?"0":"",Oe[k]=T?"0":"",Oe.transform=(L.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",Oe))}return Object.assign({},Te,(e={},e[E]=A?v+"px":"",e[k]=T?f+"px":"",e.transform="",e))}function vB(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:or(e.placement),variation:Co(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,aw(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,aw(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const _B={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vB,data:{}};var Pl={passive:!0};function wB(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,c=yn(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",n.update,Pl)}),a&&c.addEventListener("resize",n.update,Pl),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Pl)}),a&&c.removeEventListener("resize",n.update,Pl)}}const bB={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:wB,data:{}};var IB={left:"right",right:"left",bottom:"top",top:"bottom"};function nu(t){return t.replace(/left|right|bottom|top/g,function(e){return IB[e]})}var EB={start:"end",end:"start"};function cw(t){return t.replace(/start|end/g,function(e){return EB[e]})}function jg(t){var e=yn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function qg(t){return ko(Ei(t)).left+jg(t).scrollLeft}function TB(t,e){var n=yn(t),r=Ei(t),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var l=jx();(l||!l&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+qg(t),y:c}}function xB(t){var e,n=Ei(t),r=jg(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=ns(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=ns(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+qg(t),c=-r.scrollTop;return Ar(i||n).direction==="rtl"&&(a+=ns(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function zg(t){var e=Ar(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Gx(t){return["html","body","#document"].indexOf(hr(t))>=0?t.ownerDocument.body:En(t)&&zg(t)?t:Gx(ld(t))}function Ba(t,e){var n;e===void 0&&(e=[]);var r=Gx(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=yn(r),o=i?[s].concat(s.visualViewport||[],zg(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Ba(ld(o)))}function cp(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function SB(t,e){var n=ko(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function lw(t,e,n){return e===Vx?cp(TB(t,n)):ys(e)?SB(e,n):cp(xB(Ei(t)))}function AB(t){var e=Ba(ld(t)),n=["absolute","fixed"].indexOf(Ar(t).position)>=0,r=n&&En(t)?ul(t):t;return ys(r)?e.filter(function(i){return ys(i)&&qx(i,r)&&hr(i)!=="body"}):[]}function kB(t,e,n,r){var i=e==="clippingParents"?AB(t):[].concat(e),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(c,l){var u=lw(t,l,r);return c.top=ns(u.top,c.top),c.right=zu(u.right,c.right),c.bottom=zu(u.bottom,c.bottom),c.left=ns(u.left,c.left),c},lw(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Wx(t){var e=t.reference,n=t.element,r=t.placement,i=r?or(r):null,s=r?Co(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(i){case en:c={x:o,y:e.y-n.height};break;case xn:c={x:o,y:e.y+e.height};break;case Sn:c={x:e.x+e.width,y:a};break;case tn:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=i?Bg(i):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case So:c[l]=c[l]-(e[u]/2-n[u]/2);break;case Ac:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function kc(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.strategy,o=s===void 0?t.strategy:s,a=n.boundary,c=a===void 0?WV:a,l=n.rootBoundary,u=l===void 0?Vx:l,h=n.elementContext,d=h===void 0?fa:h,f=n.altBoundary,g=f===void 0?!1:f,v=n.padding,_=v===void 0?0:v,T=Hx(typeof _!="number"?_:Kx(_,ll)),A=d===fa?QV:fa,k=t.rects.popper,E=t.elements[g?A:d],L=kB(ys(E)?E:E.contextElement||Ei(t.elements.popper),c,u,o),U=ko(t.elements.reference),Y=Wx({reference:U,element:k,strategy:"absolute",placement:i}),K=cp(Object.assign({},k,Y)),W=d===fa?K:U,ce={top:L.top-W.top+T.top,bottom:W.bottom-L.bottom+T.bottom,left:L.left-W.left+T.left,right:W.right-L.right+T.right},Te=t.modifiersData.offset;if(d===fa&&Te){var Fe=Te[i];Object.keys(ce).forEach(function(Oe){var Ut=[Sn,xn].indexOf(Oe)>=0?1:-1,st=[en,xn].indexOf(Oe)>=0?"y":"x";ce[Oe]+=Fe[st]*Ut})}return ce}function CB(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?Bx:c,u=Co(r),h=u?a?sw:sw.filter(function(g){return Co(g)===u}):ll,d=h.filter(function(g){return l.indexOf(g)>=0});d.length===0&&(d=h);var f=d.reduce(function(g,v){return g[v]=kc(t,{placement:v,boundary:i,rootBoundary:s,padding:o})[or(v)],g},{});return Object.keys(f).sort(function(g,v){return f[g]-f[v]})}function RB(t){if(or(t)===Ug)return[];var e=nu(t);return[cw(t),e,cw(e)]}function NB(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,g=f===void 0?!0:f,v=n.allowedAutoPlacements,_=e.options.placement,T=or(_),A=T===_,k=c||(A||!g?[nu(_)]:RB(_)),E=[_].concat(k).reduce(function(on,an){return on.concat(or(an)===Ug?CB(e,{placement:an,boundary:u,rootBoundary:h,padding:l,flipVariations:g,allowedAutoPlacements:v}):an)},[]),L=e.rects.reference,U=e.rects.popper,Y=new Map,K=!0,W=E[0],ce=0;ce<E.length;ce++){var Te=E[ce],Fe=or(Te),Oe=Co(Te)===So,Ut=[en,xn].indexOf(Fe)>=0,st=Ut?"width":"height",oe=kc(e,{placement:Te,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),pe=Ut?Oe?Sn:tn:Oe?xn:en;L[st]>U[st]&&(pe=nu(pe));var ye=nu(pe),Et=[];if(s&&Et.push(oe[Fe]<=0),a&&Et.push(oe[pe]<=0,oe[ye]<=0),Et.every(function(on){return on})){W=Te,K=!1;break}Y.set(Te,Et)}if(K)for(var sn=g?3:1,Ht=function(an){var Ye=E.find(function(S){var q=Y.get(S);if(q)return q.slice(0,an).every(function($){return $})});if(Ye)return W=Ye,"break"},ot=sn;ot>0;ot--){var An=Ht(ot);if(An==="break")break}e.placement!==W&&(e.modifiersData[r]._skip=!0,e.placement=W,e.reset=!0)}}const PB={name:"flip",enabled:!0,phase:"main",fn:NB,requiresIfExists:["offset"],data:{_skip:!1}};function uw(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function hw(t){return[en,Sn,xn,tn].some(function(e){return t[e]>=0})}function OB(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=kc(e,{elementContext:"reference"}),a=kc(e,{altBoundary:!0}),c=uw(o,r),l=uw(a,i,s),u=hw(c),h=hw(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const DB={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:OB};function LB(t,e,n){var r=or(t),i=[tn,en].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[tn,Sn].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function MB(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=Bx.reduce(function(u,h){return u[h]=LB(h,e.rects,s),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const FB={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:MB};function UB(t){var e=t.state,n=t.name;e.modifiersData[n]=Wx({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const $B={name:"popperOffsets",enabled:!0,phase:"read",fn:UB,data:{}};function VB(t){return t==="x"?"y":"x"}function BB(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,g=n.tetherOffset,v=g===void 0?0:g,_=kc(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),T=or(e.placement),A=Co(e.placement),k=!A,E=Bg(T),L=VB(E),U=e.modifiersData.popperOffsets,Y=e.rects.reference,K=e.rects.popper,W=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,ce=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),Te=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Fe={x:0,y:0};if(U){if(s){var Oe,Ut=E==="y"?en:tn,st=E==="y"?xn:Sn,oe=E==="y"?"height":"width",pe=U[E],ye=pe+_[Ut],Et=pe-_[st],sn=f?-K[oe]/2:0,Ht=A===So?Y[oe]:K[oe],ot=A===So?-K[oe]:-Y[oe],An=e.elements.arrow,on=f&&An?Vg(An):{width:0,height:0},an=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:zx(),Ye=an[Ut],S=an[st],q=Va(0,Y[oe],on[oe]),$=k?Y[oe]/2-sn-q-Ye-ce.mainAxis:Ht-q-Ye-ce.mainAxis,Z=k?-Y[oe]/2+sn+q+S+ce.mainAxis:ot+q+S+ce.mainAxis,ve=e.elements.arrow&&ul(e.elements.arrow),m=ve?E==="y"?ve.clientTop||0:ve.clientLeft||0:0,y=(Oe=Te==null?void 0:Te[E])!=null?Oe:0,w=pe+$-y-m,x=pe+Z-y,C=Va(f?zu(ye,w):ye,pe,f?ns(Et,x):Et);U[E]=C,Fe[E]=C-pe}if(a){var N,z=E==="x"?en:tn,M=E==="x"?xn:Sn,F=U[L],O=L==="y"?"height":"width",te=F+_[z],Q=F-_[M],ee=[en,tn].indexOf(T)!==-1,se=(N=Te==null?void 0:Te[L])!=null?N:0,me=ee?te:F-Y[O]-K[O]-se+ce.altAxis,Ce=ee?F+Y[O]+K[O]-se-ce.altAxis:Q,ke=f&&ee?hB(me,F,Ce):Va(f?me:te,F,f?Ce:Q);U[L]=ke,Fe[L]=ke-F}e.modifiersData[r]=Fe}}const jB={name:"preventOverflow",enabled:!0,phase:"main",fn:BB,requiresIfExists:["offset"]};function qB(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function zB(t){return t===yn(t)||!En(t)?jg(t):qB(t)}function HB(t){var e=t.getBoundingClientRect(),n=Ao(e.width)/t.offsetWidth||1,r=Ao(e.height)/t.offsetHeight||1;return n!==1||r!==1}function KB(t,e,n){n===void 0&&(n=!1);var r=En(e),i=En(e)&&HB(e),s=Ei(e),o=ko(t,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((hr(e)!=="body"||zg(s))&&(a=zB(e)),En(e)?(c=ko(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=qg(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function GB(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&i(c)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function WB(t){var e=GB(t);return sB.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function QB(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function YB(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var dw={placement:"bottom",modifiers:[],strategy:"absolute"};function fw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function XB(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?dw:i;return function(a,c,l){l===void 0&&(l=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},dw,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(T){var A=typeof T=="function"?T(u.options):T;v(),u.options=Object.assign({},s,u.options,A),u.scrollParents={reference:ys(a)?Ba(a):a.contextElement?Ba(a.contextElement):[],popper:Ba(c)};var k=WB(YB([].concat(r,u.options.modifiers)));return u.orderedModifiers=k.filter(function(E){return E.enabled}),g(),f.update()},forceUpdate:function(){if(!d){var T=u.elements,A=T.reference,k=T.popper;if(fw(A,k)){u.rects={reference:KB(A,ul(k),u.options.strategy==="fixed"),popper:Vg(k)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(ce){return u.modifiersData[ce.name]=Object.assign({},ce.data)});for(var E=0;E<u.orderedModifiers.length;E++){if(u.reset===!0){u.reset=!1,E=-1;continue}var L=u.orderedModifiers[E],U=L.fn,Y=L.options,K=Y===void 0?{}:Y,W=L.name;typeof U=="function"&&(u=U({state:u,options:K,name:W,instance:f})||u)}}}},update:QB(function(){return new Promise(function(_){f.forceUpdate(),_(u)})}),destroy:function(){v(),d=!0}};if(!fw(a,c))return f;f.setOptions(l).then(function(_){!d&&l.onFirstUpdate&&l.onFirstUpdate(_)});function g(){u.orderedModifiers.forEach(function(_){var T=_.name,A=_.options,k=A===void 0?{}:A,E=_.effect;if(typeof E=="function"){var L=E({state:u,name:T,instance:f,options:k}),U=function(){};h.push(L||U)}})}function v(){h.forEach(function(_){return _()}),h=[]}return f}}var JB=[bB,$B,_B,cB,FB,PB,jB,mB,DB],Hg=XB({defaultModifiers:JB}),qr=globalThis&&globalThis.__assign||function(){return qr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},qr.apply(this,arguments)},Ol=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))},Fi={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,onShow:function(){},onHide:function(){},onToggle:function(){}},Qx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Fi),this._targetEl=e,this._triggerEl=n,this._options=qr(qr({},Fi),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();this._options.triggerType==="click"&&n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.toggle()})}),this._options.triggerType==="hover"&&(n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){r==="click"?e.toggle():setTimeout(function(){e.show()},e._options.delay)}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},e._options.delay)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},e._options.delay)})}))},t.prototype._createPopperInstance=function(){return Hg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.isVisible=function(){return this._visible},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(e){return qr(qr({},e),{modifiers:Ol(Ol([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(e){return qr(qr({},e),{modifiers:Ol(Ol([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},t}();function Kg(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(t){var e=t.getAttribute("data-dropdown-toggle"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-dropdown-placement"),i=t.getAttribute("data-dropdown-offset-skidding"),s=t.getAttribute("data-dropdown-offset-distance"),o=t.getAttribute("data-dropdown-trigger"),a=t.getAttribute("data-dropdown-delay");new Qx(n,t,{placement:r||Fi.placement,triggerType:o||Fi.triggerType,offsetSkidding:i?parseInt(i):Fi.offsetSkidding,offsetDistance:s?parseInt(s):Fi.offsetDistance,delay:a?parseInt(a):Fi.delay})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}typeof window<"u"&&(window.Dropdown=Qx,window.initDropdowns=Kg);var Hu=globalThis&&globalThis.__assign||function(){return Hu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Hu.apply(this,arguments)},qs={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},lp=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=qs),this._targetEl=e,this._options=Hu(Hu({},qs),n),this._isHidden=!0,this._backdropEl=null,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&this._getPlacementClasses().map(function(n){e._targetEl.classList.add(n)})},t.prototype._createBackdrop=function(){var e;if(this._isHidden){var n=document.createElement("div");n.setAttribute("modal-backdrop",""),(e=n.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(n),this._backdropEl=n}},t.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},t.prototype._setupModalCloseEventListeners=function(){var e=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(n){e._handleOutsideClick(n.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._handleOutsideClick=function(e){(e===this._targetEl||e===this._backdropEl&&this.isVisible())&&this.hide()},t.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},t.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},t.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},t.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},t.prototype.isVisible=function(){return!this._isHidden},t.prototype.isHidden=function(){return this._isHidden},t}(),Dl=function(t,e){return e.some(function(n){return n.id===t})?e.find(function(n){return n.id===t}):null};function Gg(){var t=[];document.querySelectorAll("[data-modal-target]").forEach(function(e){var n=e.getAttribute("data-modal-target"),r=document.getElementById(n);if(r){var i=r.getAttribute("data-modal-placement"),s=r.getAttribute("data-modal-backdrop");Dl(n,t)||t.push({id:n,object:new lp(r,{placement:i||qs.placement,backdrop:s||qs.backdrop})})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(e){var n=e.getAttribute("data-modal-toggle"),r=document.getElementById(n);if(r){var i=r.getAttribute("data-modal-placement"),s=r.getAttribute("data-modal-backdrop"),o=Dl(n,t);o||(o={id:n,object:new lp(r,{placement:i||qs.placement,backdrop:s||qs.backdrop})},t.push(o)),e.addEventListener("click",function(){o.object.toggle()})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(e){var n=e.getAttribute("data-modal-show"),r=document.getElementById(n);if(r){var i=Dl(n,t);i?e.addEventListener("click",function(){i.object.isHidden&&i.object.show()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(e){var n=e.getAttribute("data-modal-hide"),r=document.getElementById(n);if(r){var i=Dl(n,t);i?e.addEventListener("click",function(){i.object.isVisible&&i.object.hide()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}typeof window<"u"&&(window.Modal=lp,window.initModals=Gg);var Ku=globalThis&&globalThis.__assign||function(){return Ku=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ku.apply(this,arguments)},Ui={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},Yx=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=Ui),this._targetEl=e,this._options=Ku(Ku({},Ui),n),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(n){e._targetEl.classList.add(n)}),document.addEventListener("keydown",function(n){n.key==="Escape"&&e.isVisible()&&e.hide()})},t.prototype.hide=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.add(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.add(n)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.remove(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.remove(n)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype._createBackdrop=function(){var e,n=this;if(!this._visible){var r=document.createElement("div");r.setAttribute("drawer-backdrop",""),(e=r.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(r),r.addEventListener("click",function(){n.hide()})}},t.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},t.prototype._getPlacementClasses=function(e){switch(e){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t}(),Ll=function(t,e){if(e.some(function(n){return n.id===t}))return e.find(function(n){return n.id===t})};function Wg(){var t=[];document.querySelectorAll("[data-drawer-target]").forEach(function(e){var n=e.getAttribute("data-drawer-target"),r=document.getElementById(n);if(r){var i=e.getAttribute("data-drawer-placement"),s=e.getAttribute("data-drawer-body-scrolling"),o=e.getAttribute("data-drawer-backdrop"),a=e.getAttribute("data-drawer-edge"),c=e.getAttribute("data-drawer-edge-offset");Ll(n,t)||t.push({id:n,object:new Yx(r,{placement:i||Ui.placement,bodyScrolling:s?s==="true":Ui.bodyScrolling,backdrop:o?o==="true":Ui.backdrop,edge:a?a==="true":Ui.edge,edgeOffset:c||Ui.edgeOffset})})}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(e){var n=e.getAttribute("data-drawer-toggle"),r=document.getElementById(n);if(r){var i=Ll(n,t);i?e.addEventListener("click",function(){i.object.toggle()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(e){var n=e.getAttribute("data-drawer-dismiss")?e.getAttribute("data-drawer-dismiss"):e.getAttribute("data-drawer-hide"),r=document.getElementById(n);if(r){var i=Ll(n,t);i?e.addEventListener("click",function(){i.object.hide()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(e){var n=e.getAttribute("data-drawer-show"),r=document.getElementById(n);if(r){var i=Ll(n,t);i?e.addEventListener("click",function(){i.object.show()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}typeof window<"u"&&(window.Drawer=Yx,window.initDrawers=Wg);var Gu=globalThis&&globalThis.__assign||function(){return Gu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Gu.apply(this,arguments)},pw={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},Xx=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=pw),this._items=e,this._activeTab=n?this.getTab(n.defaultTabId):null,this._options=Gu(Gu({},pw),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(n){n.triggerEl.addEventListener("click",function(){e.show(n.id)})}))},t.prototype.getActiveTab=function(){return this._activeTab},t.prototype._setActiveTab=function(e){this._activeTab=e},t.prototype.getTab=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.show=function(e,n){var r,i,s=this;n===void 0&&(n=!1);var o=this.getTab(e);o===this._activeTab&&!n||(this._items.map(function(a){var c,l;a!==o&&((c=a.triggerEl.classList).remove.apply(c,s._options.activeClasses.split(" ")),(l=a.triggerEl.classList).add.apply(l,s._options.inactiveClasses.split(" ")),a.targetEl.classList.add("hidden"),a.triggerEl.setAttribute("aria-selected","false"))}),(r=o.triggerEl.classList).add.apply(r,this._options.activeClasses.split(" ")),(i=o.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-selected","true"),o.targetEl.classList.remove("hidden"),this._setActiveTab(o),this._options.onShow(this,o))},t}();function Qg(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(t){var e=[],n=null;t.querySelectorAll('[role="tab"]').forEach(function(r){var i=r.getAttribute("aria-selected")==="true",s={id:r.getAttribute("data-tabs-target"),triggerEl:r,targetEl:document.querySelector(r.getAttribute("data-tabs-target"))};e.push(s),i&&(n=s.id)}),new Xx(e,{defaultTabId:n})})}typeof window<"u"&&(window.Tabs=Xx,window.initTabs=Qg);var zr=globalThis&&globalThis.__assign||function(){return zr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},zr.apply(this,arguments)},Ml=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))},Wu={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Jx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Wu),this._targetEl=e,this._triggerEl=n,this._options=zr(zr({},Wu),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.hide()})})},t.prototype._createPopperInstance=function(){return Hg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return zr(zr({},e),{modifiers:Ml(Ml([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return zr(zr({},e),{modifiers:Ml(Ml([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function Yg(){document.querySelectorAll("[data-tooltip-target]").forEach(function(t){var e=t.getAttribute("data-tooltip-target"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-tooltip-trigger"),i=t.getAttribute("data-tooltip-placement");new Jx(n,t,{placement:i||Wu.placement,triggerType:r||Wu.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))})}typeof window<"u"&&(window.Tooltip=Jx,window.initTooltips=Yg);var Hr=globalThis&&globalThis.__assign||function(){return Hr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Hr.apply(this,arguments)},Fl=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))},ja={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Zx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=ja),this._targetEl=e,this._triggerEl=n,this._options=Hr(Hr({},ja),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},100)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},100)})})},t.prototype._createPopperInstance=function(){return Hg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Hr(Hr({},e),{modifiers:Fl(Fl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Hr(Hr({},e),{modifiers:Fl(Fl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function Xg(){document.querySelectorAll("[data-popover-target]").forEach(function(t){var e=t.getAttribute("data-popover-target"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-popover-trigger"),i=t.getAttribute("data-popover-placement"),s=t.getAttribute("data-popover-offset");new Zx(n,t,{placement:i||ja.placement,offset:s?parseInt(s):ja.offset,triggerType:r||ja.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))})}typeof window<"u"&&(window.Popover=Zx,window.initPopovers=Xg);var Qu=globalThis&&globalThis.__assign||function(){return Qu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Qu.apply(this,arguments)},up={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},eS=function(){function t(e,n,r,i){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=null),i===void 0&&(i=up),this._parentEl=e,this._triggerEl=n,this._targetEl=r,this._options=Qu(Qu({},up),i),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;if(this._triggerEl){var n=this._getTriggerEventTypes(this._options.triggerType);n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._parentEl.addEventListener(r,function(){e._parentEl.matches(":hover")||e.hide()})})}},t.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this._visible?this.hide():this.show()},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype._getTriggerEventTypes=function(e){switch(e){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t}();function Jg(){document.querySelectorAll("[data-dial-init]").forEach(function(t){var e=t.querySelector("[data-dial-toggle]");if(e){var n=e.getAttribute("data-dial-toggle"),r=document.getElementById(n);if(r){var i=e.getAttribute("data-dial-trigger");new eS(t,e,r,{triggerType:i||up.triggerType})}else console.error("Dial with id ".concat(n," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(t.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}typeof window<"u"&&(window.Dial=eS,window.initDials=Jg);function tS(){Dg(),Lg(),Mg(),Fg(),Kg(),Gg(),Wg(),Qg(),Yg(),Xg(),Jg()}typeof window<"u"&&(window.initFlowbite=tS);var ZB=new GV("load",[Dg,Lg,Mg,Fg,Kg,Gg,Wg,Qg,Yg,Xg,Jg]);ZB.init();const e4={key:0,class:"sticky flex w-full flex-col bg-green-600 text-white shadow-sm shadow-gray-400"},t4={class:"container mx-auto flex items-center justify-between bg-green-600 px-4 py-2"},n4={class:"flex items-center gap-4"},r4=p("span",{class:"material-icons text-3xl lg:text-base"},"add_box",-1),i4=p("span",{class:"hidden lg:inline-block"},"CREATE ITEM",-1),s4=p("button",{type:"button",class:"flex gap-1",id:"dropdownDefaultButton","data-dropdown-toggle":"dropdownNotifications","data-dropdown-trigger":"click"},[p("span",{class:"material-icons text-3xl lg:text-base"},"notifications"),p("span",{class:"hidden lg:inline-block"},"NOTIFICATIONS")],-1),o4=p("span",{class:"material-icons text-3xl lg:text-base"},"chat",-1),a4=p("span",{class:"hidden lg:inline-block"},"MESSAGES",-1),c4=["onClick"],l4=p("img",{src:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",alt:"",class:"aspect-square w-10 rounded-full"},null,-1),u4={class:"bg-green-500"},h4={class:"container mx-auto flex flex-col-reverse items-stretch justify-between px-4 lg:flex-row"},d4={key:0,class:"flex scroll-p-12 gap-8 overflow-x-auto whitespace-nowrap px-4 pb-4 lg:py-4"},f4=p("li",null,"NEW",-1),p4=p("li",null,"HOT",-1),m4=p("li",null,"TOP RATED",-1),g4=p("li",null,"KIDS",-1),y4=p("li",null,"MEN",-1),v4=p("li",null,"WOMEN",-1),_4=[f4,p4,m4,g4,y4,v4],w4=p("div",null,null,-1),b4=p("input",{type:"text",name:"",id:"",class:"w-full rounded-l-xl border-none bg-transparent px-4 py-1 text-sm text-black placeholder-yellow-700",placeholder:"Search..."},null,-1),I4=p("button",{class:"material-icons px-2 py-1 text-yellow-700 lg:py-0 lg:text-lg"}," search ",-1),E4={__name:"NavigationBar",setup(t){Yt.firestore();const e=hh(),n=Vn();Nc(async()=>{tS(),await n.initMyProfile()});function r(){n.searchItem()&&e.push("/search")}async function i(){try{await n.logout(),e.push("/")}catch(s){alert("Sign Out Error"+s)}}return(s,o)=>["login","register"].includes(s.$route.name)?Ws("",!0):(ie(),fe("header",e4,[p("nav",t4,[G(Rb),p("ul",n4,[p("li",null,[G(de(_n),{to:"/create-item",class:"flex gap-1"},{default:Ge(()=>[r4,i4]),_:1})]),p("li",null,[s4,G(KV)]),p("li",null,[G(de(_n),{to:"/messages",class:"flex gap-1"},{default:Ge(()=>[o4,a4]),_:1})]),p("li",null,[p("button",{onClick:Ir(i,["prevent"])},"LOG OUT",8,c4)]),p("li",null,[G(de(_n),{to:"/profile"},{default:Ge(()=>[l4]),_:1})]),p("h5",null,De(de(n).myProfile.firstName+" "+de(n).myProfile.lastName),1)])]),p("section",u4,[p("div",h4,[["home"].includes(s.$route.name)?(ie(),fe("ol",d4,_4)):Ws("",!0),w4,["search"].includes(s.$route.name)?Ws("",!0):(ie(),fe("form",{key:1,class:"my-3 flex rounded-xl border-2 border-yellow-500 bg-yellow-200",onSubmit:o[0]||(o[0]=Ir(a=>r(),["stop","prevent"]))},[b4,I4,G(de(_n),{to:"/search",class:"material-icons py-1 pr-2 text-yellow-700 lg:py-0 lg:text-lg"},{default:Ge(()=>[we("menu")]),_:1})],32))])])]))}},T4={},x4={key:0,class:"bg-green-600 flex flex-col sticky w-full text-white bottom-0 px-4"},S4=p("nav",{class:"flex items-center justify-end container mx-auto py-4 bg-green-600"},[p("p",null,"All Rights Reserved 2023. ®")],-1),A4=[S4];function k4(t,e){return["login","register"].includes(t.$route.name)?Ws("",!0):(ie(),fe("header",x4,A4))}const C4=dh(T4,[["render",k4]]),R4={class:"flex flex-col h-screen"},N4={class:"basis-full overflow-y-auto"},P4={__name:"HomePageView",setup(t){return(e,n)=>(ie(),fe("div",R4,[G(E4),p("div",N4,[G(de(Oc))]),G(C4)]))}},O4={class:"aspect-square w-full"},D4=["src"],L4={class:"flex flex-col"},M4={class:"text-xs"},F4={class:"text-green-800"},U4=p("span",{class:"text-2xl"},"₱",-1),Yu={__name:"ItemsContainer",props:{gridfor:{type:String,default:""},items:{type:Array,default:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"},{id:2,name:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg"}]}},setup(t){function e(n){switch(n){case"search":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"}}return(n,r)=>(ie(),fe("div",{class:nr(["grid grid-flow-row gap-2 rounded-xl bg-gradient-to-b from-green-500 to-transparent bg-[length:100%_150px] bg-no-repeat p-4",e(t.gridfor)])},[(ie(!0),fe(Ke,null,rr(t.items,i=>(ie(),_s(de(_n),{to:"/item/"+i.itemId,class:"bg-white p-2 shadow-sm shadow-gray-400"},{default:Ge(()=>[p("div",O4,[p("img",{src:i.image,alt:"",srcset:"",loading:"lazy",class:"aspect-square h-full object-contain"},null,8,D4)]),p("div",L4,[p("p",null,De(i.itemName),1),p("p",M4,De(i.location),1),p("p",F4,[U4,we(De(i.rentAmount+" - "+i.rentRate),1)])])]),_:2},1032,["to"]))),256))],2))}},$4={class:"container mx-auto flex flex-col gap-8 px-4 py-8"},V4={class:"flex flex-col gap-2"},B4=p("h1",null,"JUST FOR YOU",-1),j4={class:"flex flex-col gap-2"},q4=p("h1",null,"DISCOVER",-1),z4={__name:"HomeView",setup(t){const e=Vn(),n=Ee([]);return Nc(async()=>{n.value=await e.loadItems()}),(r,i)=>(ie(),fe("main",$4,[p("section",V4,[B4,G(Yu,{items:de(e).itemsInRange(12,18)},null,8,["items"])]),p("section",j4,[q4,G(Yu,{items:n.value},null,8,["items"])])]))}},H4=["onSubmit"],K4=p("h1",null,"Edit Profile",-1),G4={class:"flex flex-col gap-2 p-2 md:gap-4"},W4={class:"flex flex-col gap-4 md:flex-row md:items-start md:gap-8"},Q4={class:"flex flex-col"},Y4=p("h2",null,"Profile Picture",-1),X4={class:"relative inline-block aspect-square w-32 rounded-sm object-contain"},J4=["src"],Z4=p("label",{for:"add-image",class:"material-icons absolute -bottom-2 -right-2 cursor-pointer rounded-lg border-2 border-yellow-500 bg-yellow-200 px-1 py-1 text-yellow-700"}," add_photo_alternate ",-1),ej={class:"flex flex-col gap-2"},tj={class:"flex flex-col"},nj=p("label",{for:"fname"},"First Name",-1),rj={class:"flex flex-col"},ij=p("label",{for:"lname"},"Last Name",-1),sj={class:"flex flex-col"},oj=p("label",{for:"lname"},"Location",-1),aj={class:"mt-4 flex flex-col justify-end gap-2 px-2 md:flex-row"},cj=p("button",{type:"submit",class:"rounded-lg border-2 border-green-800 bg-green-800 px-5 py-3 text-white"}," Save changes ",-1),lj={__name:"EditProfile",props:{useruid:{default:0},profile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"}}},emits:["close"],setup(t,{emit:e}){const n=t,r=Vn(),i=new FileReader,s=Ee(Object.assign({},n.profile));function o(c){let l=c.target.files[0];i.readAsDataURL(l),i.onload=u=>{s.value.image=u.target.result}}function a(){r.editProfile=Object.assign({},s.value),e("close")}return Xw(async()=>{s.value=await r.loadProfile(n.useruid)}),(c,l)=>(ie(),fe("form",{action:"#",onSubmit:Ir(a,["stop","prevent"])},[K4,p("div",G4,[p("div",W4,[p("div",Q4,[Y4,p("div",X4,[p("img",{src:s.value.image,alt:"",srcset:"",class:"aspect-square w-32 rounded-lg object-contain"},null,8,J4),Z4,p("input",{type:"file",id:"add-image",onChange:l[0]||(l[0]=u=>o(u)),hidden:""},null,32)])]),p("div",ej,[p("div",tj,[nj,Dt(p("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>s.value.firstName=u),name:"fname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700",placeholder:"First Name"},null,512),[[Wi,s.value.firstName]])]),p("div",rj,[ij,Dt(p("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>s.value.lastName=u),name:"lname",type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700",placeholder:"Last Name"},null,512),[[Wi,s.value.lastName]])])])]),p("div",sj,[oj,Dt(p("input",{name:"location","onUpdate:modelValue":l[3]||(l[3]=u=>s.value.location=u),type:"text",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-5 py-2 placeholder-yellow-700",placeholder:"Current Location"},null,512),[[Wi,s.value.location]])])]),p("footer",aj,[cj,p("button",{type:"button",onClick:l[4]||(l[4]=u=>e("close")),class:"rounded-lg border-2 border-green-800 bg-white px-5 py-3 text-green-800"}," Cancel ")])],40,H4))}},uj={class:"container mx-auto flex flex-col gap-8 px-4 py-8"},hj={class:"flex flex-col gap-2 lg:flex-row"},dj={class:"flex basis-9/12 flex-col gap-2 sm:flex-row"},fj={class:"flex basis-4/12 flex-col gap-2 bg-white p-4"},pj=["src"],mj={class:"flex w-full basis-8/12 flex-col justify-between bg-white p-4"},gj={class:"flex flex-wrap items-start justify-between gap-2"},yj={class:"flex items-center gap-2"},vj={class:"text-3xl"},_j={class:"flex"},wj=p("span",{class:"material-icons text-green-600"},"location_on",-1),bj={class:"my-4"},Ij=p("h2",null,"Lender Ratings",-1),Ej={class:"mb-4 flex gap-4"},Tj=p("span",null,"3.0 / 5.0",-1),xj=p("h2",null,"Chat Response Rate",-1),Sj={class:"mb-4 flex gap-4"},Aj=p("span",null,"4.0 / 5.0",-1),kj={class:"flex flex-col items-start"},Cj={class:"flex flex-col gap-2"},Rj=p("span",{class:"material-icons"},"forum",-1),Nj=p("span",null,"Chat",-1),Pj=p("button",{class:"flex items-center justify-center gap-1 rounded-lg border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-yellow-800"},[p("span",{class:"material-icons"},"flag"),p("span",null,"Report user")],-1),Oj=Cp('<div class="flex basis-3/12 flex-row gap-4 bg-white p-4 lg:flex-col"><div class="basis-1/2 lg:basis-0"><h2>Lended Items</h2><h2 class="text-2xl">542</h2></div><div class="basis-1/2 lg:basis-0"><h2>Rented Items</h2><h2 class="text-2xl">34</h2></div></div>',1),Dj={class:"flex flex-col gap-2"},mw={__name:"ProfileView",setup(t){const e=Vn();var r=Dp().params.id||e.myUserUid;const i=Ee([]),s=Ee({firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"});Nc(async()=>{initFlowbite(),s.value=await e.loadProfile(r),i.value=await e.loadItems(12,r)});const o=Ee(null);function a(){e.editProfile=s.value,o.value.showModal()}function c(){o.value.close()}return(l,u)=>(ie(),fe(Ke,null,[p("main",uj,[p("section",hj,[p("div",dj,[p("div",fj,[p("img",{src:s.value.image,alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,pj)]),p("div",mj,[p("div",null,[p("div",gj,[p("div",yj,[p("h1",vj,De(s.value.firstName+" "+s.value.lastName),1),de(r)==de(e).myUserUid?(ie(),fe("button",{key:0,onClick:a,class:"material-icons rounded-md border border-yellow-500 bg-yellow-200 p-0.5 px-1.5 text-base text-yellow-800"}," edit ")):Ws("",!0)]),p("div",_j,[wj,p("span",null,De(s.value.location),1)])]),p("div",bj,[Ij,p("div",Ej,[Tj,G(Hi,{value:"3"})]),xj,p("div",Sj,[Aj,G(Hi,{value:"4"})])])]),p("div",kj,[p("div",Cj,[G(de(_n),{to:"/messages/5",class:"flex items-center justify-center gap-1 rounded-lg bg-green-600 px-5 py-3 text-white"},{default:Ge(()=>[Rj,Nj]),_:1}),Pj])])])]),Oj]),p("section",Dj,[p("h1",null,De(s.value.firstName+" "+s.value.lastName+"'s Item(s)"),1),G(Yu,{items:i.value},null,8,["items"])])]),p("dialog",{ref_key:"editDialog",ref:o,class:"rounded-xl backdrop:backdrop-brightness-50"},[G(lj,{onClose:c,useruid:de(r),profile:s.value},null,8,["useruid","profile"])],512)],64))}},Lj={class:"container mx-auto flex flex-col gap-4 px-4 py-8"},Mj={class:"flex flex-row-reverse gap-2"},Fj={class:"flex flex-col gap-2 lg:flex-row"},Uj={class:"flex basis-3/12 flex-col bg-white p-4"},$j=["src"],Vj={class:"flex w-full gap-2 overflow-x-auto px-1 py-2"},Bj=["src","onClick"],jj={class:"flex w-full basis-6/12 flex-col justify-between bg-white p-4"},qj={class:"flex items-start justify-between"},zj=p("span",{class:"rounded-full bg-green-600 px-4 py-1 text-xs font-black text-white"}," AVAILABLE ",-1),Hj={class:"my-4"},Kj={class:"text-green-600"},Gj=p("span",{class:"mr-2 text-2xl"},"₱",-1),Wj={class:"flex gap-4"},Qj=p("span",null,"4.0 / 5.0",-1),Yj={class:"flex"},Xj=p("span",{class:"material-icons text-green-600"},"location_on",-1),Jj={class:"mt-2 flex flex-col items-start"},Zj={class:"flex gap-2"},eq={class:"flex flex-wrap gap-2"},tq={class:"rounded-full border-2 border-yellow-500 bg-yellow-200 px-4 py-1 text-xs text-yellow-700"},nq=p("div",{class:"flex flex-col gap-2"},[p("button",{class:"mt-4 rounded-lg bg-green-600 px-5 py-3 text-white"}," Rent "),p("button",{class:"rounded-lg border-2 border-yellow-500 bg-yellow-200 px-5 py-3 text-center text-yellow-800"}," Add to Favorites ")],-1),rq={class:"basis-3/12 bg-white p-4"},iq=p("h2",null,"Lender",-1),sq={class:"mb-4 flex flex-wrap items-center justify-between gap-2"},oq=["src"],aq={class:"whitespace-nowrap"},cq=p("button",{class:"flex items-center gap-1"},[p("span",{class:"material-icons text-green-600"},"forum"),we("Chat ")],-1),lq=p("h2",null,"Lender Ratings",-1),uq={class:"mb-4 flex items-center gap-4"},hq=p("span",null,"4.0 / 5.0",-1),dq=p("h2",null,"Chat Response Rate",-1),fq={class:"mb-4 flex items-center gap-4"},pq=p("span",null,"3.0 / 5.0",-1),mq={class:"flex flex-col gap-2"},gq=Cp('<div class="flex flex-col justify-between gap-4 bg-gray-50 p-4 md:flex-row md:items-center"><h1>Item Reviews and Rating</h1><div class="flex flex-wrap items-start gap-4 text-sm sm:text-base md:items-center"><div class="flex items-center gap-1"><span class="material-icons text-green-600">filter_alt</span><span>Filter:</span><select name="" id="" class="text-xs sm:text-base"><option value="">All Star</option></select></div><div class="flex items-center gap-1"><span class="material-icons text-green-600">sort</span><span>Sort:</span><select name="" id="" class="text-xs sm:text-base"><option value="">Relevance</option><option value="">???</option></select></div></div></div>',1),yq={class:"flex flex-col gap-2"},vq={class:"flex flex-col gap-2 bg-white p-4"},_q={class:"flex items-center gap-2"},wq=["src"],bq={class:"flex flex-col"},Iq={class:"truncate text-gray-700"},Eq=p("p",{class:"py-2"},"user review........................",-1),Tq={__name:"ItemDetailView",setup(t){const e=Vn(),n=Dp(),r=Ee(n.params.id),i=Ee(0);Ee(["https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg","https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg","https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg","https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg"]);const s=Ee(e.loadedProfile(5)),o=Ee({itemName:"",location:"",rentAmount:"",rentRate:"",images:[],description:"",ownerId:"",tags:[]});function a(c){i.value=c}return Nc(async()=>{o.value=await e.loadItem(r.value),s.value=await e.loadProfile(o.value.ownerId)}),(c,l)=>(ie(),fe("main",Lj,[p("section",Mj,[G(de(_n),{to:"/home"},{default:Ge(()=>[we("Close X")]),_:1})]),p("section",Fj,[p("div",Uj,[p("img",{src:o.value.images[i.value],alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,$j),p("div",Vj,[(ie(!0),fe(Ke,null,rr(o.value.images,(u,h)=>(ie(),fe("img",{class:nr(["aspect-square h-24 cursor-pointer object-contain ring-4 ring-opacity-75",i.value==h?"ring-primary":"ring-transparent"]),src:u,onClick:d=>a(h),alt:"",srcset:""},null,10,Bj))),256))])]),p("div",jj,[p("div",null,[p("div",qj,[p("h1",null,De(o.value.itemName),1),zj]),p("div",Hj,[p("p",Kj,[Gj,we(De(o.value.rentAmount+" - "+o.value.rentRate),1)]),p("div",Wj,[Qj,G(Hi,{value:"4"})]),p("div",Yj,[Xj,p("span",null,De(o.value.location),1)])]),p("p",null,De(o.value.description),1)]),p("div",Jj,[p("div",Zj,[we(" Tags: "),p("ul",eq,[(ie(!0),fe(Ke,null,rr(o.value.tags,u=>(ie(),fe("li",tq,De(u),1))),256))])]),nq])]),p("div",rq,[iq,p("div",sq,[G(de(_n),{to:"",class:"flex items-center gap-2"},{default:Ge(()=>[p("img",{class:"aspect-square w-12 rounded-full",src:s.value.image,alt:"",srcset:""},null,8,oq),p("span",aq,De(s.value.firstName+" "+s.value.lastName),1)]),_:1}),cq]),lq,p("div",uq,[hq,G(Hi,{value:"4"})]),dq,p("div",fq,[pq,G(Hi,{value:"3"})])])]),p("section",mq,[gq,p("section",yq,[(ie(),fe(Ke,null,rr(6,u=>p("article",vq,[p("div",_q,[p("img",{class:"aspect-square w-12 rounded-full",src:de(e).loadedProfile(u).image,alt:"",srcset:""},null,8,wq),p("div",bq,[G(Hi,{value:"4"}),p("span",Iq,De(de(e).loadedProfile(u).firstName+" "+de(e).loadedProfile(u).lastName),1)])]),Eq])),64))])])]))}},xq={class:"container mx-auto flex h-full flex-row items-stretch gap-4 px-4 py-8"},Sq={class:"flex h-full flex-col overflow-hidden"},Aq=p("h1",{class:"z-10 px-6 py-4 shadow-sm shadow-gray-300"}," Recent Messages ",-1),kq={class:"overflow-y-auto px-2"},Cq=["src"],Rq={class:"w-full truncate"},Nq={class:"truncate font-black"},Pq={class:"truncate text-gray-800"},Oq={__name:"MessagesView",setup(t){const e=Ee([{id:1,name:"John Smith",avatar:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",message:"Okay, but when?"},{id:2,name:"Emily Johnson",avatar:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",message:"Hi there! I'm interested in renting this item. Can you provide more details about its specifications?"},{id:3,name:"David Brown",avatar:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",message:"I received the package today, and I'm thrilled with the product! It exceeded my expectations."},{id:4,avatar:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",name:"Sarah Davis",message:"Great!"},{id:5,avatar:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",name:"Michael Wilson",message:"Will the item be available by Tuesday?"},{id:6,name:"Jessica Thompson",avatar:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",message:"I just wanted to say thank you for the excellent customer service. I'm impressed with the prompt responses and assistance."},{id:7,name:"Christopher Martinez",avatar:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",message:"👍"},{id:8,name:"Megan Taylor",avatar:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",message:"Look! A placeholder text!"}]);return(n,r)=>(ie(),fe("main",xq,[p("aside",{class:nr(["box-border basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-1/3",["messages"].includes(n.$route.name)?"":"hidden"])},[p("div",Sq,[Aq,p("div",kq,[(ie(!0),fe(Ke,null,rr(e.value,i=>(ie(),_s(de(_n),{to:"/messages/"+i.id,class:"my-2 flex gap-2 rounded-2xl p-2","active-class":"bg-yellow-200"},{default:Ge(()=>[p("img",{src:i.avatar,alt:"",class:"aspect-square w-12 rounded-full"},null,8,Cq),p("div",Rq,[p("p",Nq,De(i.name),1),p("p",Pq,De(i.message),1)])]),_:2},1032,["to"]))),256))])])],2),p("div",{class:nr(["basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-2/3",["messages"].includes(n.$route.name)?"hidden":""])},[G(de(Oc))],2)]))}},Dq={class:"container mx-auto flex flex-col gap-4 px-4 py-8 lg:flex-row"},Lq=p("aside",{class:"basis-1/3"},[p("div",{class:"box-border flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm shadow-gray-400"},[p("h1",null,"Search for Items"),p("form",{action:"#",method:"get",class:"flex flex-col gap-2"},[p("div",{class:"flex gap-2"},[p("input",{type:"text",name:"",placeholder:"Item name",class:"w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),p("button",{type:"submit",class:"rounded-xl bg-green-700 px-4 py-2 text-white"}," Search ")]),p("div",{class:"flex gap-2"},[p("input",{type:"text",name:"",placeholder:"Min. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),p("input",{type:"text",name:"",placeholder:"Max. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""})]),p("input",{type:"text",placeholder:"Location",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"}),p("input",{type:"text",placeholder:"Tags",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"})]),p("section",null,[p("h2",null,"Category"),p("ul",null,[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Clothing "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Men")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Women")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Unisex")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Kids")])])]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Appliances "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Kitchen")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Laundry")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Living Room")])])]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Gadgets and Devices "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Smartphones")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Cameras")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),we("Tablets")])])])])])])],-1),Mq={__name:"SearchView",setup(t){const e=Vn();return(n,r)=>(ie(),fe("main",Dq,[Lq,G(Yu,{items:de(e).itemsInRange(4,16),gridfor:"search",class:"basis-2/3"},null,8,["items"])]))}},Fq={},Uq={class:"h-full flex flex-col justify-center items-center"},$q={class:"text-gray-500"};function Vq(t,e){return ie(),fe("div",Uq,[p("p",$q,[eb(t.$slots,"default",{},()=>[we("Click a conversation to start")])])])}const Bq=dh(Fq,[["render",Vq]]),jq={class:"flex h-full flex-col justify-between"},qq={class:"flex items-center justify-between bg-green-600 px-6 py-2 shadow-md shadow-gray-400"},zq={class:"flex gap-2"},Hq=["src"],Kq={class:"flex flex-col text-white"},Gq={class:"font-black"},Wq=p("div",{class:"flex items-center gap-1 truncate"},[p("div",{class:"inline-block h-2 w-2 rounded-full bg-green-300"}),p("span",null,"Online")],-1),Qq={class:"bg-white px-6 pt-12"},Yq=["src"],Xq={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4"},Jq=p("button",{type:"submit",class:"rounded-xl bg-green-700 px-6 py-2 text-white"}," Send ",-1),Zq={__name:"ConversationView",setup(t){const e=Dp(),n=Vn(),r=Ee(e.params.id),i=Ee(""),s=Ee(),o=Ee(n.loadedProfile(r.value));Gs(()=>e.params.id,async h=>{o.value=await n.loadedProfile(h)});const a=Ee([{user:"me",message:"Hi, with regards to product X, is this item still in good condition?"},{user:"them",message:"Of course! "},{user:"them",message:'We regularly perform "Maintenance Order X" upon return of item to ensure that the product is in a good quality '},{user:"me",message:"Great!"},{user:"me",message:"Will the product be available by Tuesday?"},{user:"them",message:"Yes."},{user:"me",message:"👍"},{user:"them",message:"And by the way, you can try writing in the input field and it will actually send to our convo."}]);function c(){a.value.push({user:"me",message:i.value}),i.value="",s.value.scrollTop=scrollContainer.value.scrollHeight}function l(h){return h+1==a.value.length?!1:a.value[h].user==a.value[h+1].user}function u(h){var d="";return h+1<a.value.length&&a.value[h].user==a.value[h+1].user&&(d+=a.value[h].user=="me"?" rounded-br-none":" rounded-bl-none"),h-1>=0&&a.value[h].user==a.value[h-1].user&&(d+=a.value[h].user=="me"?" rounded-tr-none":" rounded-tl-none"),d+=a.value[h].user=="me"?" bg-green-700 text-white":" bg-gray-300",d}return(h,d)=>(ie(),fe("div",jq,[p("header",qq,[p("div",zq,[p("img",{src:o.value.image,alt:"",class:"aspect-square w-12 rounded-full"},null,8,Hq),p("div",Kq,[p("p",Gq,De(o.value.firstname+" "+o.value.lastname),1),Wq])]),G(de(_n),{to:"/messages",class:"material-icons text-white"},{default:Ge(()=>[we("close")]),_:1})]),p("main",{class:"flex basis-full flex-col-reverse overflow-y-auto",ref_key:"scrollToElement",ref:s},[p("div",Qq,[(ie(!0),fe(Ke,null,rr(a.value,(f,g)=>(ie(),fe("div",{class:nr([f.user=="me"?"flex-row-reverse":"flex-row","my-1 flex items-end gap-2"])},[p("img",{src:f.user=="me"?"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg":o.value.image,alt:"",class:nr(["aspect-square w-12 rounded-full",l(g)?"opacity-0":""])},null,10,Yq),p("div",{class:nr(["max-w-md rounded-3xl px-4 py-3",u(g)])},[p("p",null,De(f.message),1)],2)],2))),256)),p("section",Xq,[p("form",{class:"flex gap-2 rounded-xl bg-amber-400 p-2 shadow-sm shadow-gray-400",onSubmit:d[1]||(d[1]=Ir(f=>c(),["prevent"]))},[Dt(p("input",{type:"text",name:"",placeholder:"Enter message...",class:"w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:"","onUpdate:modelValue":d[0]||(d[0]=f=>i.value=f)},null,512),[[Wi,i.value]]),Jq],32)])])],512)]))}},e5={class:"bg-white p-8 self-center rounded-3xl flex flex-col overflow-y-auto max-w-full"},t5={class:"successMessage bg-white rounded-md"},n5={class:"py-3 px-5 text-white bg-gray-800 rounded-xl flex flex-col m-auto mt-5"},r5=["onSubmit"],i5=p("h2",null,"Enter Email that is associated with your account.",-1),s5=p("button",{class:"py-3 px-5 text-white bg-green-800 rounded-xl"}," Reset Password ",-1),o5={__name:"ForgotPasswordView",setup(t){const e=Ee("");let n=Ee(!1),r=Ee(""),i=Ee(!1),s=Ee("");const o=async()=>{if(e.value!==""){try{await Yt.auth().sendPasswordResetEmail(e.value).then(()=>{i.value=!0,s.value="Check your email to reset your password",n.value=!1})}catch(a){i.value=!1,n.value=!0,r.value=a.message,console.log("error")}console.log("success")}else i.value=!1,n.value=!0,r.value="Please enter your email address.";console.log("failed")};return(a,c)=>{const l=Pc("RouterLink");return ie(),fe("div",e5,[Dt(p("div",t5,[we(De(de(s))+" ",1),p("button",n5,[G(l,{to:"/login"},{default:Ge(()=>[we("Close")]),_:1})])],512),[[Qi,de(i)]]),Dt(p("form",{onSubmit:Ir(o,["stop","prevent"]),class:"flex gap-2 flex-col"},[i5,Dt(p("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Email Address"},null,512),[[Wi,e.value]]),Dt(p("div",{class:"errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"},De(de(r)),513),[[Qi,de(n)]]),s5,G(l,{to:"/login",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"},{default:Ge(()=>[we("Back")]),_:1})],40,r5),[[Qi,!de(i)]])])}}};const a5={},c5={class:"bg-white p-8 self-center max-w-full rounded-3xl flex flex-col overflow-y-auto"},l5=Cp('<div class="overflow-y-auto max-h-96 text-justify pr-2" data-v-57730d13><h1 data-v-57730d13>Terms and Conditions</h1><h2 data-v-57730d13>Acceptance of Terms</h2><p data-v-57730d13> You accept and agree to be governed by these Terms and Conditions by accessing and using our renting web app (ItemShare). Please don&#39;t use the Platform if you disagree with these terms. </p><h2 data-v-57730d13>User Responsibility</h2><p data-v-57730d13> The Platform provides a platform for people to interact and conduct rental business. The things that are listed on the Platform are not under our ownership or control. </p><p data-v-57730d13> Users are completely responsible for their rental actions, which may include interacting with other users and negotiating and agreeing on rental terms. </p><p data-v-57730d13> Things advertised on the Platform may not be available, in good condition, of sufficient quality, or compliance with the law. Users are in charge of determining if the products are appropriate and trustworthy, and they use them at their own risk. </p><h2 data-v-57730d13>Liability</h2><p data-v-57730d13> We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or connected with the Platform, including but not limited to loss of data, loss of profit, or loss of business opportunities, to the extent permitted by applicable law. </p><p data-v-57730d13> The users undertake to hold us harmless from any claims, demands, or losses resulting from disagreements with other users or other parties. </p><h2 data-v-57730d13>Privacy and Personal Information</h2><p data-v-57730d13> We are dedicated to safeguarding our users&#39; data and privacy. For thorough information on how we gather, utilize, and protect user data, please refer to our Privacy Policy. </p><p data-v-57730d13> Although we will make a reasonable effort to protect user data, we cannot ensure the security of user data sent through the Platform. Users are aware of and agree to this risk. </p><h2 data-v-57730d13>Intellectual Property</h2><p data-v-57730d13> The Platform and its contents (aside from user-generated material) are owned by their respective owners and are covered by intellectual property rights. Without express authorization, Users agree not to use, modify, distribute, or reproduce any aspect of the Platform. </p><h2 data-v-57730d13>Modifications and Termination</h2><p data-v-57730d13> The Platform, together with these Terms and Conditions, is subject to change or termination at any moment with prior notice. </p><p data-v-57730d13> Users are recommended to often review the Terms and Conditions. Any changes made are accepted by continuing to use the Platform. </p></div>',1),u5={class:"flex justify-end gap-2 mt-4"};function h5(t,e){const n=Pc("RouterLink");return ie(),fe("div",c5,[l5,p("div",u5,[G(n,{to:"/register",class:"py-3 px-5 text-white bg-green-800 rounded-lg"},{default:Ge(()=>[we(" ACCEPT ")]),_:1}),G(n,{to:"/register",class:"py-3 px-5 text-white bg-red-800 rounded-lg"},{default:Ge(()=>[we(" DECLINE ")]),_:1})])])}const d5=dh(a5,[["render",h5],["__scopeId","data-v-57730d13"]]),f5={class:"container mx-auto flex flex-col gap-2 px-4 py-8"},p5=p("h1",null,"New Item for Rent",-1),m5=["onSubmit"],g5={class:"flex basis-1/2 flex-col gap-4 px-8"},y5={class:"flex flex-col gap-1"},v5=p("label",null,"Description",-1),_5={class:"flex flex-col gap-1"},w5=p("label",null,"Tags",-1),b5={class:"flex flex-wrap gap-2 rounded-md border-2 border-text border-opacity-25 bg-white bg-opacity-5 p-2 focus-within:border-primary focus-within:border-opacity-60 focus-within:bg-accent focus-within:bg-opacity-20"},I5={class:"flex items-center gap-1 whitespace-nowrap rounded-md bg-primary bg-opacity-90 px-2 py-1 text-white"},E5=["onClick"],T5={class:"flex basis-1/2 flex-col gap-4 px-8"},x5={class:"flex flex-col gap-1"},S5=p("label",null,"Images",-1),A5={class:"w-full overflow-x-auto rounded-md border-2 border-text border-opacity-25 bg-secondary bg-opacity-50 p-2",id:"images"},k5={class:"flex gap-2"},C5={for:"add-image",class:"group/x relative aspect-square h-40 rounded-md border-2 border-dashed border-text border-opacity-40 px-2 py-4 text-center hover:border-primary"},R5=p("p",{class:"material-icons text-6xl text-text text-opacity-50 group-hover/x:text-primary"}," add_photo_alternate ",-1),N5=p("p",{class:"text-sm text-text text-opacity-75 group-hover/x:text-primary"}," Drag an image here or browse for an image to upload. ",-1),P5=["src","onClick"],O5={class:"flex flex-col gap-4 sm:flex-row"},D5=p("footer",{class:"mt-4 flex flex-col justify-end gap-2 md:flex-row"},[p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"}," Create "),p("button",{type:"button",class:"rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"}," Cancel ")],-1),L5={__name:"CreateItemView",setup(t){const e=hh(),n=Vn(),r=Ee([]),i=Ee({itemName:"",location:"",rentAmount:"",rentRate:"",description:"",imageFiles:[],tags:[]}),s=Ee(""),o=Ee("");function a(f){for(let g of f.target.files){let v=new FileReader;i.value.imageFiles.push(g),v.readAsDataURL(g),v.onload=_=>{r.value.push(_.target.result)}}}function c(f){r.value.splice(f,1),i.value.imageFiles.splice(f,1)}function l(f){i.value.tags.splice(f,1)}function u(){o.value&&(i.value.tags.includes(o.value)||i.value.tags.push(o.value),o.value="")}function h(){o.value.endsWith(",")&&(o.value=o.value.slice(0,-1),u())}async function d(){s.value="";try{await n.createItem(i.value)&&e.push("/home")}catch(f){s.value=f}}return(f,g)=>(ie(),fe("main",f5,[p5,p("form",{onSubmit:Ir(d,["stop","prevent"]),class:"flex flex-col gap-4 divide-x-0 divide-text divide-opacity-25 bg-white py-8 md:flex-row md:gap-0 md:divide-x-2"},[p("div",g5,[G(un,{modelValue:i.value.itemName,"onUpdate:modelValue":g[0]||(g[0]=v=>i.value.itemName=v),label:"Item Name",placeholder:"A name for the item..."},null,8,["modelValue"]),p("div",y5,[v5,Dt(p("textarea",{"onUpdate:modelValue":g[1]||(g[1]=v=>i.value.description=v),name:"description",class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-5 placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-2 focus:border-primary focus:border-opacity-100 focus:bg-accent focus:bg-opacity-20 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50",placeholder:"A description on the item..."},null,512),[[Wi,i.value.description]])]),p("div",_5,[w5,p("div",b5,[(ie(!0),fe(Ke,null,rr(i.value.tags,(v,_)=>(ie(),fe("div",I5,[p("span",null,De(v),1),p("button",{class:"material-icons aspect-square rounded-lg pl-1.5 text-xs font-bold text-white",onClick:T=>l(_),type:"button"}," close ",8,E5)]))),256)),Dt(p("input",{type:"text",placeholder:"Add a tag...",onInput:g[2]||(g[2]=v=>h()),onKeydown:g[3]||(g[3]=Ak(Ir(v=>u(),["prevent"]),["enter"])),onFocusout:g[4]||(g[4]=v=>u()),"onUpdate:modelValue":g[5]||(g[5]=v=>o.value=v),class:"flex-1 border-none bg-transparent px-1 py-1 focus:ring-0"},null,544),[[Wi,o.value]])])]),G(un,{modelValue:i.value.location,"onUpdate:modelValue":g[6]||(g[6]=v=>i.value.location=v),label:"Location",placeholder:"Preferred area to deliver or retrieve..."},null,8,["modelValue"])]),p("div",T5,[p("div",x5,[S5,p("div",A5,[p("div",k5,[p("label",C5,[R5,N5,p("input",{type:"file",id:"add-image",accept:"image/*",onChange:g[7]||(g[7]=v=>a(v)),class:"absolute left-0 top-0 block h-full w-full cursor-pointer opacity-0",multiple:""},null,32)]),(ie(!0),fe(Ke,null,rr(r.value,(v,_)=>(ie(),fe("img",{class:"aspect-square h-40 cursor-pointer rounded-md object-contain ring-4 ring-transparent hover:opacity-60 hover:ring-primary",src:v,alt:"",onClick:T=>c(_),srcset:""},null,8,P5))),256))])])]),p("div",O5,[G(un,{modelValue:i.value.rentAmount,"onUpdate:modelValue":g[8]||(g[8]=v=>i.value.rentAmount=v),placeholder:"1,500",label:"Rent Amount",class:"basis-1/2"},null,8,["modelValue"]),G(un,{modelValue:i.value.rentRate,"onUpdate:modelValue":g[9]||(g[9]=v=>i.value.rentRate=v),label:"Rent Rate",class:"basis-1/2",placeholder:"per day/week/month"},null,8,["modelValue"])]),Dt(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},De(s.value),513),[[Qi,s.value]]),D5])],40,m5)]))}},nS=$1({history:r1("/itemshare/"),routes:[{path:"/",component:X1,meta:{requiresAuth:!1},children:[{path:"",name:"getStarted",component:sC},{path:"/login",name:"login",component:_V},{path:"/register",name:"register",component:FV},{path:"/terms-and-conditions",name:"termsAndConditions",component:d5},{path:"/forgot-password",name:"forgotPassword",component:o5}]},{path:"/home",component:P4,meta:{requiresAuth:!0},children:[{path:"",name:"home",component:z4},{path:"/profile/:id",name:"profile",component:mw},{path:"/profile",name:"myProfile",component:mw},{path:"/messages",component:Oq,children:[{path:"",name:"messages",component:Bq},{path:"/messages/:id",name:"conversation",component:Zq}]},{path:"/item/:id",name:"itemDetail",component:Tq},{path:"/search",name:"search",component:Mq},{path:"/create-item",name:"createItem",component:L5}]}]});nS.beforeEach((t,e,n)=>{const r=Vn();t.meta.requiresAuth&&!r.loggedInUser?n("/"):!t.meta.requiresAuth&&r.loggedInUser?n("/home"):n()});const Zg=Rk(B1);Zg.use(Ok());Zg.use(nS);Zg.mount("#app");
