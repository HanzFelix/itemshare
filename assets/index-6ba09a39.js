(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gp(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Fe={},Qi=[],On=()=>{},rS=()=>!1,sS=/^on[^a-z]/,Zu=t=>sS.test(t),yp=t=>t.startsWith("onUpdate:"),wt=Object.assign,vp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iS=Object.prototype.hasOwnProperty,Te=(t,e)=>iS.call(t,e),ie=Array.isArray,Yi=t=>Cc(t)==="[object Map]",eh=t=>Cc(t)==="[object Set]",cy=t=>Cc(t)==="[object Date]",fe=t=>typeof t=="function",dt=t=>typeof t=="string",za=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",_w=t=>Le(t)&&fe(t.then)&&fe(t.catch),ww=Object.prototype.toString,Cc=t=>ww.call(t),oS=t=>Cc(t).slice(8,-1),bw=t=>Cc(t)==="[object Object]",_p=t=>dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ml=gp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),th=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},aS=/-(\w)/g,lr=th(t=>t.replace(aS,(e,n)=>n?n.toUpperCase():"")),cS=/\B([A-Z])/g,Ii=th(t=>t.replace(cS,"-$1").toLowerCase()),nh=th(t=>t.charAt(0).toUpperCase()+t.slice(1)),fd=th(t=>t?`on${nh(t)}`:""),Ha=(t,e)=>!Object.is(t,e),Ul=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ou=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Yd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ly;const Xd=()=>ly||(ly=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wp(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=dt(r)?dS(r):wp(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(dt(t))return t;if(Le(t))return t}}const lS=/;(?![^(]*\))/g,uS=/:([^]+)/,hS=/\/\*[^]*?\*\//g;function dS(t){const e={};return t.replace(hS,"").split(lS).forEach(n=>{if(n){const r=n.split(uS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ln(t){let e="";if(dt(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Ln(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pS=gp(fS);function Iw(t){return!!t||t===""}function mS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=rh(t[r],e[r]);return n}function rh(t,e){if(t===e)return!0;let n=cy(t),r=cy(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=za(t),r=za(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?mS(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!rh(t[o],e[o]))return!1}}return String(t)===String(e)}function Ew(t,e){return t.findIndex(n=>rh(n,e))}const Ne=t=>dt(t)?t:t==null?"":ie(t)||Le(t)&&(t.toString===ww||!fe(t.toString))?JSON.stringify(t,Tw,2):String(t),Tw=(t,e)=>e&&e.__v_isRef?Tw(t,e.value):Yi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:eh(e)?{[`Set(${e.size})`]:[...e.values()]}:Le(e)&&!ie(e)&&!bw(e)?String(e):e;let hn;class xw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=hn;try{return hn=this,e()}finally{hn=n}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sw(t){return new xw(t)}function gS(t,e=hn){e&&e.active&&e.effects.push(t)}function kw(){return hn}function yS(t){hn&&hn.cleanups.push(t)}const bp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Aw=t=>(t.w&as)>0,Cw=t=>(t.n&as)>0,vS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=as},_S=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Aw(s)&&!Cw(s)?s.delete(t):e[n++]=s,s.w&=~as,s.n&=~as}e.length=n}},au=new WeakMap;let pa=0,as=1;const Jd=30;let Rn;const Js=Symbol(""),Zd=Symbol("");class Ip{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gS(this,r)}run(){if(!this.active)return this.fn();let e=Rn,n=ts;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rn,Rn=this,ts=!0,as=1<<++pa,pa<=Jd?vS(this):uy(this),this.fn()}finally{pa<=Jd&&_S(this),as=1<<--pa,Rn=this.parent,ts=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rn===this?this.deferStop=!0:this.active&&(uy(this),this.onStop&&this.onStop(),this.active=!1)}}function uy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ts=!0;const Rw=[];function Po(){Rw.push(ts),ts=!1}function Do(){const t=Rw.pop();ts=t===void 0?!0:t}function sn(t,e,n){if(ts&&Rn){let r=au.get(t);r||au.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=bp()),Nw(s)}}function Nw(t,e){let n=!1;pa<=Jd?Cw(t)||(t.n|=as,n=!Aw(t)):n=!t.has(Rn),n&&(t.add(Rn),Rn.deps.push(t))}function Tr(t,e,n,r,s,i){const o=au.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ie(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ie(t)?_p(n)&&a.push(o.get("length")):(a.push(o.get(Js)),Yi(t)&&a.push(o.get(Zd)));break;case"delete":ie(t)||(a.push(o.get(Js)),Yi(t)&&a.push(o.get(Zd)));break;case"set":Yi(t)&&a.push(o.get(Js));break}if(a.length===1)a[0]&&ef(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ef(bp(c))}}function ef(t,e){const n=ie(t)?t:[...t];for(const r of n)r.computed&&hy(r);for(const r of n)r.computed||hy(r)}function hy(t,e){(t!==Rn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function wS(t,e){var n;return(n=au.get(t))==null?void 0:n.get(e)}const bS=gp("__proto__,__v_isRef,__isVue"),Pw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(za)),IS=Ep(),ES=Ep(!1,!0),TS=Ep(!0),dy=xS();function xS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)sn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Po();const r=Se(this)[e].apply(this,n);return Do(),r}}),t}function SS(t){const e=Se(this);return sn(e,"has",t),e.hasOwnProperty(t)}function Ep(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?jS:Uw:e?Mw:Lw).get(r))return r;const o=ie(r);if(!t){if(o&&Te(dy,s))return Reflect.get(dy,s,i);if(s==="hasOwnProperty")return SS}const a=Reflect.get(r,s,i);return(za(s)?Pw.has(s):bS(s))||(t||sn(r,"get",s),e)?a:rt(a)?o&&_p(s)?a:a.value:Le(a)?t?Fw(a):Oo(a):a}}const kS=Dw(),AS=Dw(!0);function Dw(t=!1){return function(n,r,s,i){let o=n[r];if(oo(o)&&rt(o)&&!rt(s))return!1;if(!t&&(!cu(s)&&!oo(s)&&(o=Se(o),s=Se(s)),!ie(n)&&rt(o)&&!rt(s)))return o.value=s,!0;const a=ie(n)&&_p(r)?Number(r)<n.length:Te(n,r),c=Reflect.set(n,r,s,i);return n===Se(i)&&(a?Ha(s,o)&&Tr(n,"set",r,s):Tr(n,"add",r,s)),c}}function CS(t,e){const n=Te(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Tr(t,"delete",e,void 0),r}function RS(t,e){const n=Reflect.has(t,e);return(!za(e)||!Pw.has(e))&&sn(t,"has",e),n}function NS(t){return sn(t,"iterate",ie(t)?"length":Js),Reflect.ownKeys(t)}const Ow={get:IS,set:kS,deleteProperty:CS,has:RS,ownKeys:NS},PS={get:TS,set(t,e){return!0},deleteProperty(t,e){return!0}},DS=wt({},Ow,{get:ES,set:AS}),Tp=t=>t,sh=t=>Reflect.getPrototypeOf(t);function ll(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(e!==i&&sn(s,"get",e),sn(s,"get",i));const{has:o}=sh(s),a=r?Tp:n?kp:Ka;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ul(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(t!==s&&sn(r,"has",t),sn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function hl(t,e=!1){return t=t.__v_raw,!e&&sn(Se(t),"iterate",Js),Reflect.get(t,"size",t)}function fy(t){t=Se(t);const e=Se(this);return sh(e).has.call(e,t)||(e.add(t),Tr(e,"add",t,t)),this}function py(t,e){e=Se(e);const n=Se(this),{has:r,get:s}=sh(n);let i=r.call(n,t);i||(t=Se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ha(e,o)&&Tr(n,"set",t,e):Tr(n,"add",t,e),this}function my(t){const e=Se(this),{has:n,get:r}=sh(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Tr(e,"delete",t,void 0),i}function gy(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&Tr(t,"clear",void 0,void 0),n}function dl(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Se(o),c=e?Tp:t?kp:Ka;return!t&&sn(a,"iterate",Js),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function fl(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Yi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Tp:e?kp:Ka;return!e&&sn(i,"iterate",c?Zd:Js),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ur(t){return function(...e){return t==="delete"?!1:this}}function OS(){const t={get(i){return ll(this,i)},get size(){return hl(this)},has:ul,add:fy,set:py,delete:my,clear:gy,forEach:dl(!1,!1)},e={get(i){return ll(this,i,!1,!0)},get size(){return hl(this)},has:ul,add:fy,set:py,delete:my,clear:gy,forEach:dl(!1,!0)},n={get(i){return ll(this,i,!0)},get size(){return hl(this,!0)},has(i){return ul.call(this,i,!0)},add:Ur("add"),set:Ur("set"),delete:Ur("delete"),clear:Ur("clear"),forEach:dl(!0,!1)},r={get(i){return ll(this,i,!0,!0)},get size(){return hl(this,!0)},has(i){return ul.call(this,i,!0)},add:Ur("add"),set:Ur("set"),delete:Ur("delete"),clear:Ur("clear"),forEach:dl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=fl(i,!1,!1),n[i]=fl(i,!0,!1),e[i]=fl(i,!1,!0),r[i]=fl(i,!0,!0)}),[t,n,e,r]}const[LS,MS,US,FS]=OS();function xp(t,e){const n=e?t?FS:US:t?MS:LS;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const $S={get:xp(!1,!1)},VS={get:xp(!1,!0)},BS={get:xp(!0,!1)},Lw=new WeakMap,Mw=new WeakMap,Uw=new WeakMap,jS=new WeakMap;function qS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zS(t){return t.__v_skip||!Object.isExtensible(t)?0:qS(oS(t))}function Oo(t){return oo(t)?t:Sp(t,!1,Ow,$S,Lw)}function HS(t){return Sp(t,!1,DS,VS,Mw)}function Fw(t){return Sp(t,!0,PS,BS,Uw)}function Sp(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zS(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function ns(t){return oo(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function oo(t){return!!(t&&t.__v_isReadonly)}function cu(t){return!!(t&&t.__v_isShallow)}function $w(t){return ns(t)||oo(t)}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function ih(t){return ou(t,"__v_skip",!0),t}const Ka=t=>Le(t)?Oo(t):t,kp=t=>Le(t)?Fw(t):t;function Vw(t){ts&&Rn&&(t=Se(t),Nw(t.dep||(t.dep=bp())))}function Bw(t,e){t=Se(t);const n=t.dep;n&&ef(n)}function rt(t){return!!(t&&t.__v_isRef===!0)}function le(t){return jw(t,!1)}function KS(t){return jw(t,!0)}function jw(t,e){return rt(t)?t:new GS(t,e)}class GS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:Ka(e)}get value(){return Vw(this),this._value}set value(e){const n=this.__v_isShallow||cu(e)||oo(e);e=n?e:Se(e),Ha(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ka(e),Bw(this))}}function pe(t){return rt(t)?t.value:t}const WS={get:(t,e,n)=>pe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qw(t){return ns(t)?t:new Proxy(t,WS)}function QS(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=XS(t,n);return e}class YS{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wS(Se(this._object),this._key)}}function XS(t,e,n){const r=t[e];return rt(r)?r:new YS(t,e,n)}class JS{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ip(e,()=>{this._dirty||(this._dirty=!0,Bw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return Vw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ZS(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=On):(r=t.get,s=t.set),new JS(r,s,i||!s,n)}function rs(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){oh(i,e,n)}return s}function Mn(t,e,n,r){if(fe(t)){const i=rs(t,e,n,r);return i&&_w(i)&&i.catch(o=>{oh(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Mn(t[i],e,n,r));return s}function oh(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){rs(c,null,10,[t,o,a]);return}}ek(t,n,s,r)}function ek(t,e,n,r=!0){console.error(t)}let Ga=!1,tf=!1;const Ut=[];let Gn=0;const Xi=[];let mr=null,Os=0;const zw=Promise.resolve();let Ap=null;function Cp(t){const e=Ap||zw;return t?e.then(this?t.bind(this):t):e}function tk(t){let e=Gn+1,n=Ut.length;for(;e<n;){const r=e+n>>>1;Wa(Ut[r])<t?e=r+1:n=r}return e}function Rp(t){(!Ut.length||!Ut.includes(t,Ga&&t.allowRecurse?Gn+1:Gn))&&(t.id==null?Ut.push(t):Ut.splice(tk(t.id),0,t),Hw())}function Hw(){!Ga&&!tf&&(tf=!0,Ap=zw.then(Gw))}function nk(t){const e=Ut.indexOf(t);e>Gn&&Ut.splice(e,1)}function rk(t){ie(t)?Xi.push(...t):(!mr||!mr.includes(t,t.allowRecurse?Os+1:Os))&&Xi.push(t),Hw()}function yy(t,e=Ga?Gn+1:0){for(;e<Ut.length;e++){const n=Ut[e];n&&n.pre&&(Ut.splice(e,1),e--,n())}}function Kw(t){if(Xi.length){const e=[...new Set(Xi)];if(Xi.length=0,mr){mr.push(...e);return}for(mr=e,mr.sort((n,r)=>Wa(n)-Wa(r)),Os=0;Os<mr.length;Os++)mr[Os]();mr=null,Os=0}}const Wa=t=>t.id==null?1/0:t.id,sk=(t,e)=>{const n=Wa(t)-Wa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gw(t){tf=!1,Ga=!0,Ut.sort(sk);const e=On;try{for(Gn=0;Gn<Ut.length;Gn++){const n=Ut[Gn];n&&n.active!==!1&&rs(n,null,14)}}finally{Gn=0,Ut.length=0,Kw(),Ga=!1,Ap=null,(Ut.length||Xi.length)&&Gw()}}function ik(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Fe;d&&(s=n.map(f=>dt(f)?f.trim():f)),h&&(s=n.map(Yd))}let a,c=r[a=fd(e)]||r[a=fd(lr(e))];!c&&i&&(c=r[a=fd(Ii(e))]),c&&Mn(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mn(l,t,6,s)}}function Ww(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!fe(t)){const c=l=>{const u=Ww(l,e,!0);u&&(a=!0,wt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Le(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):wt(o,i),Le(t)&&r.set(t,o),o)}function ah(t,e){return!t||!Zu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,Ii(e))||Te(t,e))}let Rt=null,Qw=null;function lu(t){const e=Rt;return Rt=t,Qw=t&&t.type.__scopeId||null,e}function je(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ay(-1);const i=lu(e);let o;try{o=t(...s)}finally{lu(i),r._d&&Ay(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pd(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let _,T;const k=lu(t);try{if(n.shapeFlag&4){const E=s||r;_=Kn(u.call(E,E,h,i,f,d,m)),T=c}else{const E=e;_=Kn(E.length>1?E(i,{attrs:c,slots:a,emit:l}):E(i,null)),T=e.props?c:ok(c)}}catch(E){Sa.length=0,oh(E,t,1),_=V(cs)}let A=_;if(T&&y!==!1){const E=Object.keys(T),{shapeFlag:L}=A;E.length&&L&7&&(o&&E.some(yp)&&(T=ak(T,o)),A=co(A,T))}return n.dirs&&(A=co(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),_=A,lu(k),_}const ok=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zu(n))&&((e||(e={}))[n]=t[n]);return e},ak=(t,e)=>{const n={};for(const r in t)(!yp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ck(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?vy(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ah(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?vy(r,o,l):!0:!!o;return!1}function vy(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ah(n,i))return!0}return!1}function lk({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const uk=t=>t.__isSuspense;function hk(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):rk(t)}const pl={};function ss(t,e,n){return Yw(t,e,n)}function Yw(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Fe){var a;const c=kw()===((a=yt)==null?void 0:a.scope)?yt:null;let l,u=!1,h=!1;if(rt(t)?(l=()=>t.value,u=cu(t)):ns(t)?(l=()=>t,r=!0):ie(t)?(h=!0,u=t.some(E=>ns(E)||cu(E)),l=()=>t.map(E=>{if(rt(E))return E.value;if(ns(E))return Hs(E);if(fe(E))return rs(E,c,2)})):fe(t)?e?l=()=>rs(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Mn(t,c,3,[f])}:l=On,e&&r){const E=l;l=()=>Hs(E())}let d,f=E=>{d=k.onStop=()=>{rs(E,c,4)}},m;if(Xa)if(f=On,e?n&&Mn(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const E=sA();m=E.__watcherHandles||(E.__watcherHandles=[])}else return On;let y=h?new Array(t.length).fill(pl):pl;const _=()=>{if(k.active)if(e){const E=k.run();(r||u||(h?E.some((L,F)=>Ha(L,y[F])):Ha(E,y)))&&(d&&d(),Mn(e,c,3,[E,y===pl?void 0:h&&y[0]===pl?[]:y,f]),y=E)}else k.run()};_.allowRecurse=!!e;let T;s==="sync"?T=_:s==="post"?T=()=>Qt(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),T=()=>Rp(_));const k=new Ip(l,T);e?n?_():y=k.run():s==="post"?Qt(k.run.bind(k),c&&c.suspense):k.run();const A=()=>{k.stop(),c&&c.scope&&vp(c.scope.effects,k)};return m&&m.push(A),A}function dk(t,e,n){const r=this.proxy,s=dt(t)?t.includes(".")?Xw(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=yt;lo(this);const a=Yw(s,i.bind(r),n);return o?lo(o):Zs(),a}function Xw(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Hs(t,e){if(!Le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),rt(t))Hs(t.value,e);else if(ie(t))for(let n=0;n<t.length;n++)Hs(t[n],e);else if(eh(t)||Yi(t))t.forEach(n=>{Hs(n,e)});else if(bw(t))for(const n in t)Hs(t[n],e);return t}function fn(t,e){const n=Rt;if(n===null)return t;const r=hh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Fe]=e[i];o&&(fe(o)&&(o={mounted:o,updated:o}),o.deep&&Hs(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Cs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Po(),Mn(c,n,8,[t.el,a,t,e]),Do())}}function Jw(t,e){return fe(t)?(()=>wt({name:t.name},e,{setup:t}))():t}const Ta=t=>!!t.type.__asyncLoader,Zw=t=>t.type.__isKeepAlive;function fk(t,e){eb(t,"a",e)}function pk(t,e){eb(t,"da",e)}function eb(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ch(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zw(s.parent.vnode)&&mk(r,e,n,s),s=s.parent}}function mk(t,e,n,r){const s=ch(e,t,r,!0);tb(()=>{vp(r[e],s)},n)}function ch(t,e,n=yt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Po(),lo(n);const a=Mn(e,n,t,o);return Zs(),Do(),a});return r?s.unshift(i):s.push(i),i}}const Rr=t=>(e,n=yt)=>(!Xa||t==="sp")&&ch(t,(...r)=>e(...r),n),gk=Rr("bm"),Ei=Rr("m"),yk=Rr("bu"),vk=Rr("u"),_k=Rr("bum"),tb=Rr("um"),wk=Rr("sp"),bk=Rr("rtg"),Ik=Rr("rtc");function Ek(t,e=yt){ch("ec",t,e)}const nb="components";function ao(t,e){return xk(nb,t,!0,e)||t}const Tk=Symbol.for("v-ndc");function xk(t,e,n=!0,r=!1){const s=Rt||yt;if(s){const i=s.type;if(t===nb){const a=tA(i,!1);if(a&&(a===e||a===lr(e)||a===nh(lr(e))))return i}const o=_y(s[t]||i[t],e)||_y(s.appContext[t],e);return!o&&r?i:o}}function _y(t,e){return t&&(t[e]||t[lr(e)]||t[nh(lr(e))])}function ir(t,e,n,r){let s;const i=n&&n[r];if(ie(t)||dt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Np(t,e,n={},r,s){if(Rt.isCE||Rt.parent&&Ta(Rt.parent)&&Rt.parent.isCE)return e!=="default"&&(n.name=e),V("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),J();const o=i&&rb(i(n)),a=Ti($e,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function rb(t){return t.some(e=>hu(e)?!(e.type===cs||e.type===$e&&!rb(e.children)):!0)?t:null}const nf=t=>t?pb(t)?hh(t)||t.proxy:nf(t.parent):null,xa=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nf(t.parent),$root:t=>nf(t.root),$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>Rp(t.update)),$nextTick:t=>t.n||(t.n=Cp.bind(t.proxy)),$watch:t=>dk.bind(t)}),md=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Te(t,e),Sk={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(md(r,e))return o[e]=1,r[e];if(s!==Fe&&Te(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Te(l,e))return o[e]=3,i[e];if(n!==Fe&&Te(n,e))return o[e]=4,n[e];rf&&(o[e]=0)}}const u=xa[e];let h,d;if(u)return e==="$attrs"&&sn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Fe&&Te(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Te(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return md(s,e)?(s[e]=n,!0):r!==Fe&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&Te(t,o)||md(e,o)||(a=i[0])&&Te(a,o)||Te(r,o)||Te(xa,o)||Te(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wy(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rf=!0;function kk(t){const e=Pp(t),n=t.proxy,r=t.ctx;rf=!1,e.beforeCreate&&by(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:_,beforeDestroy:T,beforeUnmount:k,destroyed:A,unmounted:E,render:L,renderTracked:F,renderTriggered:Y,errorCaptured:G,serverPrefetch:W,expose:ue,inheritAttrs:Ee,components:Ue,directives:Oe,filters:Bt}=e;if(l&&Ak(l,r,null),o)for(const me in o){const ve=o[me];fe(ve)&&(r[me]=ve.bind(n))}if(s){const me=s.call(n,n);Le(me)&&(t.data=Oo(me))}if(rf=!0,i)for(const me in i){const ve=i[me],xt=fe(ve)?ve.bind(n,n):fe(ve.get)?ve.get.bind(n,n):On,an=!fe(ve)&&fe(ve.set)?ve.set.bind(n):On,Wt=vt({get:xt,set:an});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:at=>Wt.value=at})}if(a)for(const me in a)sb(a[me],r,n,me);if(c){const me=fe(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ve=>{Fl(ve,me[ve])})}u&&by(u,t,"c");function ae(me,ve){ie(ve)?ve.forEach(xt=>me(xt.bind(n))):ve&&me(ve.bind(n))}if(ae(gk,h),ae(Ei,d),ae(yk,f),ae(vk,m),ae(fk,y),ae(pk,_),ae(Ek,G),ae(Ik,F),ae(bk,Y),ae(_k,k),ae(tb,E),ae(wk,W),ie(ue))if(ue.length){const me=t.exposed||(t.exposed={});ue.forEach(ve=>{Object.defineProperty(me,ve,{get:()=>n[ve],set:xt=>n[ve]=xt})})}else t.exposed||(t.exposed={});L&&t.render===On&&(t.render=L),Ee!=null&&(t.inheritAttrs=Ee),Ue&&(t.components=Ue),Oe&&(t.directives=Oe)}function Ak(t,e,n=On){ie(t)&&(t=sf(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=In(s.from||r,s.default,!0):i=In(s.from||r):i=In(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function by(t,e,n){Mn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sb(t,e,n,r){const s=r.includes(".")?Xw(n,r):()=>n[r];if(dt(t)){const i=e[t];fe(i)&&ss(s,i)}else if(fe(t))ss(s,t.bind(n));else if(Le(t))if(ie(t))t.forEach(i=>sb(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&ss(s,i,t)}}function Pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>uu(c,l,o,!0)),uu(c,e,o)),Le(e)&&i.set(e,c),c}function uu(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&uu(t,i,n,!0),s&&s.forEach(o=>uu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ck[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ck={data:Iy,props:Ey,emits:Ey,methods:ma,computed:ma,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:ma,directives:ma,watch:Nk,provide:Iy,inject:Rk};function Iy(t,e){return e?t?function(){return wt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Rk(t,e){return ma(sf(t),sf(e))}function sf(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qt(t,e){return t?[...new Set([].concat(t,e))]:e}function ma(t,e){return t?wt(Object.create(null),t,e):e}function Ey(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:wt(Object.create(null),wy(t),wy(e??{})):e}function Nk(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const r in e)n[r]=qt(t[r],e[r]);return n}function ib(){return{app:null,config:{isNativeTag:rS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pk=0;function Dk(t,e){return function(r,s=null){fe(r)||(r=wt({},r)),s!=null&&!Le(s)&&(s=null);const i=ib(),o=new Set;let a=!1;const c=i.app={_uid:Pk++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iA,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&fe(l.install)?(o.add(l),l.install(c,...u)):fe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=V(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,hh(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Qa=c;try{return l()}finally{Qa=null}}};return c}}let Qa=null;function Fl(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=yt||Rt;if(r||Qa){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qa._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function Ok(){return!!(yt||Rt||Qa)}function Lk(t,e,n,r=!1){const s={},i={};ou(i,uh,1),t.propsDefaults=Object.create(null),ob(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:HS(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mk(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ah(t.emitsOptions,d))continue;const f=e[d];if(c)if(Te(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const m=lr(d);s[m]=of(c,a,m,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{ob(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!Te(e,h)&&((u=Ii(h))===h||!Te(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=of(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Te(e,h))&&(delete i[h],l=!0)}l&&Tr(t,"set","$attrs")}function ob(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ml(c))continue;const l=e[c];let u;s&&Te(s,u=lr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ah(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Se(n),l=a||Fe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=of(s,c,h,l[h],t,!Te(l,h))}}return o}function of(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Te(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(lo(s),r=l[n]=c.call(null,e),Zs())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ii(n))&&(r=!0))}return r}function ab(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!fe(t)){const u=h=>{c=!0;const[d,f]=ab(h,e,!0);wt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Le(t)&&r.set(t,Qi),Qi;if(ie(i))for(let u=0;u<i.length;u++){const h=lr(i[u]);Ty(h)&&(o[h]=Fe)}else if(i)for(const u in i){const h=lr(u);if(Ty(h)){const d=i[u],f=o[h]=ie(d)||fe(d)?{type:d}:wt({},d);if(f){const m=ky(Boolean,f.type),y=ky(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||Te(f,"default"))&&a.push(h)}}}const l=[o,a];return Le(t)&&r.set(t,l),l}function Ty(t){return t[0]!=="$"}function xy(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Sy(t,e){return xy(t)===xy(e)}function ky(t,e){return ie(e)?e.findIndex(n=>Sy(n,t)):fe(e)&&Sy(e,t)?0:-1}const cb=t=>t[0]==="_"||t==="$stable",Dp=t=>ie(t)?t.map(Kn):[Kn(t)],Uk=(t,e,n)=>{if(e._n)return e;const r=je((...s)=>Dp(e(...s)),n);return r._c=!1,r},lb=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cb(s))continue;const i=t[s];if(fe(i))e[s]=Uk(s,i,r);else if(i!=null){const o=Dp(i);e[s]=()=>o}}},ub=(t,e)=>{const n=Dp(e);t.slots.default=()=>n},Fk=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Se(e),ou(e,"_",n)):lb(e,t.slots={})}else t.slots={},e&&ub(t,e);ou(t.slots,uh,1)},$k=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(wt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,lb(e,s)),o=e}else e&&(ub(t,e),o={default:1});if(i)for(const a in s)!cb(a)&&!(a in o)&&delete s[a]};function af(t,e,n,r,s=!1){if(ie(t)){t.forEach((d,f)=>af(d,e&&(ie(e)?e[f]:e),n,r,s));return}if(Ta(r)&&!s)return;const i=r.shapeFlag&4?hh(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Fe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(dt(l)?(u[l]=null,Te(h,l)&&(h[l]=null)):rt(l)&&(l.value=null)),fe(c))rs(c,a,12,[o,u]);else{const d=dt(c),f=rt(c);if(d||f){const m=()=>{if(t.f){const y=d?Te(h,c)?h[c]:u[c]:c.value;s?ie(y)&&vp(y,i):ie(y)?y.includes(i)||y.push(i):d?(u[c]=[i],Te(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,Te(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Qt(m,n)):m()}}}const Qt=hk;function Vk(t){return Bk(t)}function Bk(t,e){const n=Xd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=On,insertStaticContent:m}=t,y=(g,v,w,x=null,C=null,N=null,H=!1,M=null,U=!!v.dynamicChildren)=>{if(g===v)return;g&&!Jo(g,v)&&(x=S(g),at(g,C,N,!0),g=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:D,ref:ne,shapeFlag:Q}=v;switch(D){case lh:_(g,v,w,x);break;case cs:T(g,v,w,x);break;case $l:g==null&&k(v,w,x,H);break;case $e:Ue(g,v,w,x,C,N,H,M,U);break;default:Q&1?L(g,v,w,x,C,N,H,M,U):Q&6?Oe(g,v,w,x,C,N,H,M,U):(Q&64||Q&128)&&D.process(g,v,w,x,C,N,H,M,U,$)}ne!=null&&C&&af(ne,g&&g.ref,N,v||g,!v)},_=(g,v,w,x)=>{if(g==null)r(v.el=a(v.children),w,x);else{const C=v.el=g.el;v.children!==g.children&&l(C,v.children)}},T=(g,v,w,x)=>{g==null?r(v.el=c(v.children||""),w,x):v.el=g.el},k=(g,v,w,x)=>{[g.el,g.anchor]=m(g.children,v,w,x,g.el,g.anchor)},A=({el:g,anchor:v},w,x)=>{let C;for(;g&&g!==v;)C=d(g),r(g,w,x),g=C;r(v,w,x)},E=({el:g,anchor:v})=>{let w;for(;g&&g!==v;)w=d(g),s(g),g=w;s(v)},L=(g,v,w,x,C,N,H,M,U)=>{H=H||v.type==="svg",g==null?F(v,w,x,C,N,H,M,U):W(g,v,C,N,H,M,U)},F=(g,v,w,x,C,N,H,M)=>{let U,D;const{type:ne,props:Q,shapeFlag:te,transition:oe,dirs:ge}=g;if(U=g.el=o(g.type,N,Q&&Q.is,Q),te&8?u(U,g.children):te&16&&G(g.children,U,null,x,C,N&&ne!=="foreignObject",H,M),ge&&Cs(g,null,x,"created"),Y(U,g,g.scopeId,H,x),Q){for(const Ae in Q)Ae!=="value"&&!Ml(Ae)&&i(U,Ae,null,Q[Ae],N,g.children,x,C,Xe);"value"in Q&&i(U,"value",null,Q.value),(D=Q.onVnodeBeforeMount)&&zn(D,x,g)}ge&&Cs(g,null,x,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&oe&&!oe.persisted;Ce&&oe.beforeEnter(U),r(U,v,w),((D=Q&&Q.onVnodeMounted)||Ce||ge)&&Qt(()=>{D&&zn(D,x,g),Ce&&oe.enter(U),ge&&Cs(g,null,x,"mounted")},C)},Y=(g,v,w,x,C)=>{if(w&&f(g,w),x)for(let N=0;N<x.length;N++)f(g,x[N]);if(C){let N=C.subTree;if(v===N){const H=C.vnode;Y(g,H,H.scopeId,H.slotScopeIds,C.parent)}}},G=(g,v,w,x,C,N,H,M,U=0)=>{for(let D=U;D<g.length;D++){const ne=g[D]=M?qr(g[D]):Kn(g[D]);y(null,ne,v,w,x,C,N,H,M)}},W=(g,v,w,x,C,N,H)=>{const M=v.el=g.el;let{patchFlag:U,dynamicChildren:D,dirs:ne}=v;U|=g.patchFlag&16;const Q=g.props||Fe,te=v.props||Fe;let oe;w&&Rs(w,!1),(oe=te.onVnodeBeforeUpdate)&&zn(oe,w,v,g),ne&&Cs(v,g,w,"beforeUpdate"),w&&Rs(w,!0);const ge=C&&v.type!=="foreignObject";if(D?ue(g.dynamicChildren,D,M,w,x,ge,N):H||ve(g,v,M,null,w,x,ge,N,!1),U>0){if(U&16)Ee(M,v,Q,te,w,x,C);else if(U&2&&Q.class!==te.class&&i(M,"class",null,te.class,C),U&4&&i(M,"style",Q.style,te.style,C),U&8){const Ce=v.dynamicProps;for(let Ae=0;Ae<Ce.length;Ae++){const ct=Ce[Ae],Cn=Q[ct],Di=te[ct];(Di!==Cn||ct==="value")&&i(M,ct,Cn,Di,C,g.children,w,x,Xe)}}U&1&&g.children!==v.children&&u(M,v.children)}else!H&&D==null&&Ee(M,v,Q,te,w,x,C);((oe=te.onVnodeUpdated)||ne)&&Qt(()=>{oe&&zn(oe,w,v,g),ne&&Cs(v,g,w,"updated")},x)},ue=(g,v,w,x,C,N,H)=>{for(let M=0;M<v.length;M++){const U=g[M],D=v[M],ne=U.el&&(U.type===$e||!Jo(U,D)||U.shapeFlag&70)?h(U.el):w;y(U,D,ne,null,x,C,N,H,!0)}},Ee=(g,v,w,x,C,N,H)=>{if(w!==x){if(w!==Fe)for(const M in w)!Ml(M)&&!(M in x)&&i(g,M,w[M],null,H,v.children,C,N,Xe);for(const M in x){if(Ml(M))continue;const U=x[M],D=w[M];U!==D&&M!=="value"&&i(g,M,D,U,H,v.children,C,N,Xe)}"value"in x&&i(g,"value",w.value,x.value)}},Ue=(g,v,w,x,C,N,H,M,U)=>{const D=v.el=g?g.el:a(""),ne=v.anchor=g?g.anchor:a("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:oe}=v;oe&&(M=M?M.concat(oe):oe),g==null?(r(D,w,x),r(ne,w,x),G(v.children,w,ne,C,N,H,M,U)):Q>0&&Q&64&&te&&g.dynamicChildren?(ue(g.dynamicChildren,te,w,C,N,H,M),(v.key!=null||C&&v===C.subTree)&&hb(g,v,!0)):ve(g,v,w,ne,C,N,H,M,U)},Oe=(g,v,w,x,C,N,H,M,U)=>{v.slotScopeIds=M,g==null?v.shapeFlag&512?C.ctx.activate(v,w,x,H,U):Bt(v,w,x,C,N,H,U):ot(g,v,U)},Bt=(g,v,w,x,C,N,H)=>{const M=g.component=Yk(g,x,C);if(Zw(g)&&(M.ctx.renderer=$),Xk(M),M.asyncDep){if(C&&C.registerDep(M,ae),!g.el){const U=M.subTree=V(cs);T(null,U,v,w)}return}ae(M,g,v,w,C,N,H)},ot=(g,v,w)=>{const x=v.component=g.component;if(ck(g,v,w))if(x.asyncDep&&!x.asyncResolved){me(x,v,w);return}else x.next=v,nk(x.update),x.update();else v.el=g.el,x.vnode=v},ae=(g,v,w,x,C,N,H)=>{const M=()=>{if(g.isMounted){let{next:ne,bu:Q,u:te,parent:oe,vnode:ge}=g,Ce=ne,Ae;Rs(g,!1),ne?(ne.el=ge.el,me(g,ne,H)):ne=ge,Q&&Ul(Q),(Ae=ne.props&&ne.props.onVnodeBeforeUpdate)&&zn(Ae,oe,ne,ge),Rs(g,!0);const ct=pd(g),Cn=g.subTree;g.subTree=ct,y(Cn,ct,h(Cn.el),S(Cn),g,C,N),ne.el=ct.el,Ce===null&&lk(g,ct.el),te&&Qt(te,C),(Ae=ne.props&&ne.props.onVnodeUpdated)&&Qt(()=>zn(Ae,oe,ne,ge),C)}else{let ne;const{el:Q,props:te}=v,{bm:oe,m:ge,parent:Ce}=g,Ae=Ta(v);if(Rs(g,!1),oe&&Ul(oe),!Ae&&(ne=te&&te.onVnodeBeforeMount)&&zn(ne,Ce,v),Rs(g,!0),Q&&_e){const ct=()=>{g.subTree=pd(g),_e(Q,g.subTree,g,C,null)};Ae?v.type.__asyncLoader().then(()=>!g.isUnmounted&&ct()):ct()}else{const ct=g.subTree=pd(g);y(null,ct,w,x,g,C,N),v.el=ct.el}if(ge&&Qt(ge,C),!Ae&&(ne=te&&te.onVnodeMounted)){const ct=v;Qt(()=>zn(ne,Ce,ct),C)}(v.shapeFlag&256||Ce&&Ta(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&g.a&&Qt(g.a,C),g.isMounted=!0,v=w=x=null}},U=g.effect=new Ip(M,()=>Rp(D),g.scope),D=g.update=()=>U.run();D.id=g.uid,Rs(g,!0),D()},me=(g,v,w)=>{v.component=g;const x=g.vnode.props;g.vnode=v,g.next=null,Mk(g,v.props,x,w),$k(g,v.children,w),Po(),yy(),Do()},ve=(g,v,w,x,C,N,H,M,U=!1)=>{const D=g&&g.children,ne=g?g.shapeFlag:0,Q=v.children,{patchFlag:te,shapeFlag:oe}=v;if(te>0){if(te&128){an(D,Q,w,x,C,N,H,M,U);return}else if(te&256){xt(D,Q,w,x,C,N,H,M,U);return}}oe&8?(ne&16&&Xe(D,C,N),Q!==D&&u(w,Q)):ne&16?oe&16?an(D,Q,w,x,C,N,H,M,U):Xe(D,C,N,!0):(ne&8&&u(w,""),oe&16&&G(Q,w,x,C,N,H,M,U))},xt=(g,v,w,x,C,N,H,M,U)=>{g=g||Qi,v=v||Qi;const D=g.length,ne=v.length,Q=Math.min(D,ne);let te;for(te=0;te<Q;te++){const oe=v[te]=U?qr(v[te]):Kn(v[te]);y(g[te],oe,w,null,C,N,H,M,U)}D>ne?Xe(g,C,N,!0,!1,Q):G(v,w,x,C,N,H,M,U,Q)},an=(g,v,w,x,C,N,H,M,U)=>{let D=0;const ne=v.length;let Q=g.length-1,te=ne-1;for(;D<=Q&&D<=te;){const oe=g[D],ge=v[D]=U?qr(v[D]):Kn(v[D]);if(Jo(oe,ge))y(oe,ge,w,null,C,N,H,M,U);else break;D++}for(;D<=Q&&D<=te;){const oe=g[Q],ge=v[te]=U?qr(v[te]):Kn(v[te]);if(Jo(oe,ge))y(oe,ge,w,null,C,N,H,M,U);else break;Q--,te--}if(D>Q){if(D<=te){const oe=te+1,ge=oe<ne?v[oe].el:x;for(;D<=te;)y(null,v[D]=U?qr(v[D]):Kn(v[D]),w,ge,C,N,H,M,U),D++}}else if(D>te)for(;D<=Q;)at(g[D],C,N,!0),D++;else{const oe=D,ge=D,Ce=new Map;for(D=ge;D<=te;D++){const un=v[D]=U?qr(v[D]):Kn(v[D]);un.key!=null&&Ce.set(un.key,D)}let Ae,ct=0;const Cn=te-ge+1;let Di=!1,iy=0;const Xo=new Array(Cn);for(D=0;D<Cn;D++)Xo[D]=0;for(D=oe;D<=Q;D++){const un=g[D];if(ct>=Cn){at(un,C,N,!0);continue}let qn;if(un.key!=null)qn=Ce.get(un.key);else for(Ae=ge;Ae<=te;Ae++)if(Xo[Ae-ge]===0&&Jo(un,v[Ae])){qn=Ae;break}qn===void 0?at(un,C,N,!0):(Xo[qn-ge]=D+1,qn>=iy?iy=qn:Di=!0,y(un,v[qn],w,null,C,N,H,M,U),ct++)}const oy=Di?jk(Xo):Qi;for(Ae=oy.length-1,D=Cn-1;D>=0;D--){const un=ge+D,qn=v[un],ay=un+1<ne?v[un+1].el:x;Xo[D]===0?y(null,qn,w,ay,C,N,H,M,U):Di&&(Ae<0||D!==oy[Ae]?Wt(qn,w,ay,2):Ae--)}}},Wt=(g,v,w,x,C=null)=>{const{el:N,type:H,transition:M,children:U,shapeFlag:D}=g;if(D&6){Wt(g.component.subTree,v,w,x);return}if(D&128){g.suspense.move(v,w,x);return}if(D&64){H.move(g,v,w,$);return}if(H===$e){r(N,v,w);for(let Q=0;Q<U.length;Q++)Wt(U[Q],v,w,x);r(g.anchor,v,w);return}if(H===$l){A(g,v,w);return}if(x!==2&&D&1&&M)if(x===0)M.beforeEnter(N),r(N,v,w),Qt(()=>M.enter(N),C);else{const{leave:Q,delayLeave:te,afterLeave:oe}=M,ge=()=>r(N,v,w),Ce=()=>{Q(N,()=>{ge(),oe&&oe()})};te?te(N,ge,Ce):Ce()}else r(N,v,w)},at=(g,v,w,x=!1,C=!1)=>{const{type:N,props:H,ref:M,children:U,dynamicChildren:D,shapeFlag:ne,patchFlag:Q,dirs:te}=g;if(M!=null&&af(M,null,w,g,!0),ne&256){v.ctx.deactivate(g);return}const oe=ne&1&&te,ge=!Ta(g);let Ce;if(ge&&(Ce=H&&H.onVnodeBeforeUnmount)&&zn(Ce,v,g),ne&6)ln(g.component,w,x);else{if(ne&128){g.suspense.unmount(w,x);return}oe&&Cs(g,null,v,"beforeUnmount"),ne&64?g.type.remove(g,v,w,C,$,x):D&&(N!==$e||Q>0&&Q&64)?Xe(D,v,w,!1,!0):(N===$e&&Q&384||!C&&ne&16)&&Xe(U,v,w),x&&An(g)}(ge&&(Ce=H&&H.onVnodeUnmounted)||oe)&&Qt(()=>{Ce&&zn(Ce,v,g),oe&&Cs(g,null,v,"unmounted")},w)},An=g=>{const{type:v,el:w,anchor:x,transition:C}=g;if(v===$e){cn(w,x);return}if(v===$l){E(g);return}const N=()=>{s(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(g.shapeFlag&1&&C&&!C.persisted){const{leave:H,delayLeave:M}=C,U=()=>H(w,N);M?M(g.el,N,U):U()}else N()},cn=(g,v)=>{let w;for(;g!==v;)w=d(g),s(g),g=w;s(v)},ln=(g,v,w)=>{const{bum:x,scope:C,update:N,subTree:H,um:M}=g;x&&Ul(x),C.stop(),N&&(N.active=!1,at(H,g,v,w)),M&&Qt(M,v),Qt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Xe=(g,v,w,x=!1,C=!1,N=0)=>{for(let H=N;H<g.length;H++)at(g[H],v,w,x,C)},S=g=>g.shapeFlag&6?S(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),z=(g,v,w)=>{g==null?v._vnode&&at(v._vnode,null,null,!0):y(v._vnode||null,g,v,null,null,null,w),yy(),Kw(),v._vnode=g},$={p:y,um:at,m:Wt,r:An,mt:Bt,mc:G,pc:ve,pbc:ue,n:S,o:t};let ee,_e;return e&&([ee,_e]=e($)),{render:z,hydrate:ee,createApp:Dk(z,ee)}}function Rs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hb(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=qr(s[i]),a.el=o.el),n||hb(o,a)),a.type===lh&&(a.el=o.el)}}function jk(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const qk=t=>t.__isTeleport,$e=Symbol.for("v-fgt"),lh=Symbol.for("v-txt"),cs=Symbol.for("v-cmt"),$l=Symbol.for("v-stc"),Sa=[];let Nn=null;function J(t=!1){Sa.push(Nn=t?null:[])}function zk(){Sa.pop(),Nn=Sa[Sa.length-1]||null}let Ya=1;function Ay(t){Ya+=t}function db(t){return t.dynamicChildren=Ya>0?Nn||Qi:null,zk(),Ya>0&&Nn&&Nn.push(t),t}function se(t,e,n,r,s,i){return db(p(t,e,n,r,s,i,!0))}function Ti(t,e,n,r,s){return db(V(t,e,n,r,s,!0))}function hu(t){return t?t.__v_isVNode===!0:!1}function Jo(t,e){return t.type===e.type&&t.key===e.key}const uh="__vInternal",fb=({key:t})=>t??null,Vl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?dt(t)||rt(t)||fe(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,r=0,s=null,i=t===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fb(e),ref:e&&Vl(e),scopeId:Qw,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return a?(Lp(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=dt(n)?8:16),Ya>0&&!o&&Nn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nn.push(c),c}const V=Hk;function Hk(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Tk)&&(t=cs),hu(t)){const a=co(t,e,!0);return n&&Lp(a,n),Ya>0&&!i&&Nn&&(a.shapeFlag&6?Nn[Nn.indexOf(t)]=a:Nn.push(a)),a.patchFlag|=-2,a}if(nA(t)&&(t=t.__vccOpts),e){e=Kk(e);let{class:a,style:c}=e;a&&!dt(a)&&(e.class=Ln(a)),Le(c)&&($w(c)&&!ie(c)&&(c=wt({},c)),e.style=wp(c))}const o=dt(t)?1:uk(t)?128:qk(t)?64:Le(t)?4:fe(t)?2:0;return p(t,e,n,r,s,o,i,!0)}function Kk(t){return t?$w(t)||uh in t?wt({},t):t:null}function co(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Gk(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fb(a),ref:e&&e.ref?n&&s?ie(s)?s.concat(Vl(e)):[s,Vl(e)]:Vl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&co(t.ssContent),ssFallback:t.ssFallback&&co(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function xe(t=" ",e=0){return V(lh,null,t,e)}function Op(t,e){const n=V($l,null,t);return n.staticCount=e,n}function wr(t="",e=!1){return e?(J(),Ti(cs,null,t)):V(cs,null,t)}function Kn(t){return t==null||typeof t=="boolean"?V(cs):ie(t)?V($e,null,t.slice()):typeof t=="object"?qr(t):V(lh,null,String(t))}function qr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:co(t)}function Lp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Lp(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(uh in e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gk(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ln([e.class,r.class]));else if(s==="style")e.style=wp([e.style,r.style]);else if(Zu(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zn(t,e,n,r=null){Mn(t,e,7,[n,r])}const Wk=ib();let Qk=0;function Yk(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Wk,i={uid:Qk++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ab(r,s),emitsOptions:Ww(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ik.bind(null,i),t.ce&&t.ce(i),i}let yt=null,Mp,Oi,Cy="__VUE_INSTANCE_SETTERS__";(Oi=Xd()[Cy])||(Oi=Xd()[Cy]=[]),Oi.push(t=>yt=t),Mp=t=>{Oi.length>1?Oi.forEach(e=>e(t)):Oi[0](t)};const lo=t=>{Mp(t),t.scope.on()},Zs=()=>{yt&&yt.scope.off(),Mp(null)};function pb(t){return t.vnode.shapeFlag&4}let Xa=!1;function Xk(t,e=!1){Xa=e;const{props:n,children:r}=t.vnode,s=pb(t);Lk(t,n,s,e),Fk(t,r);const i=s?Jk(t,e):void 0;return Xa=!1,i}function Jk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ih(new Proxy(t.ctx,Sk));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?eA(t):null;lo(t),Po();const i=rs(r,t,0,[t.props,s]);if(Do(),Zs(),_w(i)){if(i.then(Zs,Zs),e)return i.then(o=>{Ry(t,o,e)}).catch(o=>{oh(o,t,0)});t.asyncDep=i}else Ry(t,i,e)}else mb(t,e)}function Ry(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=qw(e)),mb(t,n)}let Ny;function mb(t,e,n){const r=t.type;if(!t.render){if(!e&&Ny&&!r.render){const s=r.template||Pp(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=wt(wt({isCustomElement:i,delimiters:a},o),c);r.render=Ny(s,l)}}t.render=r.render||On}lo(t),Po(),kk(t),Do(),Zs()}function Zk(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return sn(t,"get","$attrs"),e[n]}}))}function eA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Zk(t)},slots:t.slots,emit:t.emit,expose:e}}function hh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qw(ih(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xa)return xa[n](t)},has(e,n){return n in e||n in xa}}))}function tA(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function nA(t){return fe(t)&&"__vccOpts"in t}const vt=(t,e)=>ZS(t,e,Xa);function gb(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ie(e)?hu(e)?V(t,null,[e]):V(t,e):V(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hu(n)&&(n=[n]),V(t,e,n))}const rA=Symbol.for("v-scx"),sA=()=>In(rA),iA="3.3.4",oA="http://www.w3.org/2000/svg",Ls=typeof document<"u"?document:null,Py=Ls&&Ls.createElement("template"),aA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ls.createElementNS(oA,t):Ls.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ls.createTextNode(t),createComment:t=>Ls.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ls.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Py.innerHTML=r?`<svg>${t}</svg>`:t;const a=Py.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cA(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lA(t,e,n){const r=t.style,s=dt(n);if(n&&!s){if(e&&!dt(e))for(const i in e)n[i]==null&&cf(r,i,"");for(const i in n)cf(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Dy=/\s*!important$/;function cf(t,e,n){if(ie(n))n.forEach(r=>cf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uA(t,e);Dy.test(n)?t.setProperty(Ii(r),n.replace(Dy,""),"important"):t[r]=n}}const Oy=["Webkit","Moz","ms"],gd={};function uA(t,e){const n=gd[e];if(n)return n;let r=lr(e);if(r!=="filter"&&r in t)return gd[e]=r;r=nh(r);for(let s=0;s<Oy.length;s++){const i=Oy[s]+r;if(i in t)return gd[e]=i}return e}const Ly="http://www.w3.org/1999/xlink";function hA(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ly,e.slice(6,e.length)):t.setAttributeNS(Ly,e,n);else{const i=pS(e);n==null||i&&!Iw(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function dA(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Iw(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ms(t,e,n,r){t.addEventListener(e,n,r)}function fA(t,e,n,r){t.removeEventListener(e,n,r)}function pA(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=mA(e);if(r){const l=i[e]=vA(r,s);Ms(t,a,l,c)}else o&&(fA(t,a,o,c),i[e]=void 0)}}const My=/(?:Once|Passive|Capture)$/;function mA(t){let e;if(My.test(t)){e={};let r;for(;r=t.match(My);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ii(t.slice(2)),e]}let yd=0;const gA=Promise.resolve(),yA=()=>yd||(gA.then(()=>yd=0),yd=Date.now());function vA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mn(_A(r,n.value),e,5,[r])};return n.value=t,n.attached=yA(),n}function _A(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uy=/^on[a-z]/,wA=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?cA(t,r,s):e==="style"?lA(t,n,r):Zu(e)?yp(e)||pA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bA(t,e,r,s))?dA(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hA(t,e,r,s))};function bA(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uy.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uy.test(e)&&dt(n)?!1:e in t}const du=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Ul(e,n):e};function IA(t){t.target.composing=!0}function Fy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=du(s);const i=r||s.props&&s.props.type==="number";Ms(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Yd(a)),t._assign(a)}),n&&Ms(t,"change",()=>{t.value=t.value.trim()}),e||(Ms(t,"compositionstart",IA),Ms(t,"compositionend",Fy),Ms(t,"change",Fy))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=du(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Yd(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},yb={deep:!0,created(t,e,n){t._assign=du(n),Ms(t,"change",()=>{const r=t._modelValue,s=EA(t),i=t.checked,o=t._assign;if(ie(r)){const a=Ew(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(eh(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(vb(t,i))})},mounted:$y,beforeUpdate(t,e,n){t._assign=du(n),$y(t,e,n)}};function $y(t,{value:e,oldValue:n},r){t._modelValue=e,ie(e)?t.checked=Ew(e,r.props.value)>-1:eh(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=rh(e,vb(t,!0)))}function EA(t){return"_value"in t?t._value:t.value}function vb(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const TA=["ctrl","shift","alt","meta"],xA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>TA.some(n=>t[`${n}Key`]&&!e.includes(n))},Un=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=xA[e[s]];if(i&&i(n,e))return}return t(n,...r)},SA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kA=(t,e)=>n=>{if(!("key"in n))return;const r=Ii(n.key);if(e.some(s=>s===r||SA[s]===r))return t(n)},is={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Zo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Zo(t,!0),r.enter(t)):r.leave(t,()=>{Zo(t,!1)}):Zo(t,e))},beforeUnmount(t,{value:e}){Zo(t,e)}};function Zo(t,e){t.style.display=e?t._vod:"none"}const AA=wt({patchProp:wA},aA);let Vy;function CA(){return Vy||(Vy=Vk(AA))}const RA=(...t)=>{const e=CA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=NA(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function NA(t){return dt(t)?document.querySelector(t):t}var PA=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let _b;const dh=t=>_b=t,wb=Symbol();function uf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ka;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ka||(ka={}));function DA(){const t=Sw(!0),e=t.run(()=>le({}));let n=[],r=[];const s=ih({install(i){dh(s),s._a=i,i.provide(wb,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!PA?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const bb=()=>{};function By(t,e,n,r=bb){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&kw()&&yS(s),s}function Li(t,...e){t.slice().forEach(n=>{n(...e)})}const OA=t=>t();function hf(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];uf(s)&&uf(r)&&t.hasOwnProperty(n)&&!rt(r)&&!ns(r)?t[n]=hf(s,r):t[n]=r}return t}const LA=Symbol();function MA(t){return!uf(t)||!t.hasOwnProperty(LA)}const{assign:jr}=Object;function UA(t){return!!(rt(t)&&t.effect)}function FA(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=QS(n.state.value[t]);return jr(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ih(vt(()=>{dh(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=Ib(t,l,e,n,r,!0),c}function Ib(t,e,n={},r,s,i){let o;const a=jr({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const m=r.state.value[t];!i&&!m&&(r.state.value[t]={}),le({});let y;function _(G){let W;l=u=!1,typeof G=="function"?(G(r.state.value[t]),W={type:ka.patchFunction,storeId:t,events:f}):(hf(r.state.value[t],G),W={type:ka.patchObject,payload:G,storeId:t,events:f});const ue=y=Symbol();Cp().then(()=>{y===ue&&(l=!0)}),u=!0,Li(h,W,r.state.value[t])}const T=i?function(){const{state:W}=n,ue=W?W():{};this.$patch(Ee=>{jr(Ee,ue)})}:bb;function k(){o.stop(),h=[],d=[],r._s.delete(t)}function A(G,W){return function(){dh(r);const ue=Array.from(arguments),Ee=[],Ue=[];function Oe(ae){Ee.push(ae)}function Bt(ae){Ue.push(ae)}Li(d,{args:ue,name:G,store:L,after:Oe,onError:Bt});let ot;try{ot=W.apply(this&&this.$id===t?this:L,ue)}catch(ae){throw Li(Ue,ae),ae}return ot instanceof Promise?ot.then(ae=>(Li(Ee,ae),ae)).catch(ae=>(Li(Ue,ae),Promise.reject(ae))):(Li(Ee,ot),ot)}}const E={_p:r,$id:t,$onAction:By.bind(null,d),$patch:_,$reset:T,$subscribe(G,W={}){const ue=By(h,G,W.detached,()=>Ee()),Ee=o.run(()=>ss(()=>r.state.value[t],Ue=>{(W.flush==="sync"?u:l)&&G({storeId:t,type:ka.direct,events:f},Ue)},jr({},c,W)));return ue},$dispose:k},L=Oo(E);r._s.set(t,L);const F=r._a&&r._a.runWithContext||OA,Y=r._e.run(()=>(o=Sw(),F(()=>o.run(e))));for(const G in Y){const W=Y[G];if(rt(W)&&!UA(W)||ns(W))i||(m&&MA(W)&&(rt(W)?W.value=m[G]:hf(W,m[G])),r.state.value[t][G]=W);else if(typeof W=="function"){const ue=A(G,W);Y[G]=ue,a.actions[G]=W}}return jr(L,Y),jr(Se(L),Y),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:G=>{_(W=>{jr(W,G)})}}),r._p.forEach(G=>{jr(L,o.run(()=>G({store:L,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(L.$state,m),l=!0,u=!0,L}function $A(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Ok();return a=a||(l?In(wb,null):null),a&&dh(a),a=_b,a._s.has(r)||(i?Ib(r,e,s,a):FA(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bi=typeof window<"u";function VA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function vd(t,e){const n={};for(const r in e){const s=e[r];n[r]=Fn(s)?s.map(t):t(s)}return n}const Aa=()=>{},Fn=Array.isArray,BA=/\/$/,jA=t=>t.replace(BA,"");function _d(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=KA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function qA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&uo(e.matched[r],n.matched[s])&&Eb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function uo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Eb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HA(t[n],e[n]))return!1;return!0}function HA(t,e){return Fn(t)?qy(t,e):Fn(e)?qy(e,t):t===e}function qy(t,e){return Fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function KA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ja;(function(t){t.pop="pop",t.push="push"})(Ja||(Ja={}));var Ca;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ca||(Ca={}));function GA(t){if(!t)if(Bi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jA(t)}const WA=/^[^#]+#/;function QA(t,e){return t.replace(WA,"#")+e}function YA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fh=()=>({left:window.pageXOffset,top:window.pageYOffset});function XA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=YA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zy(t,e){return(history.state?history.state.position-e:-1)+t}const df=new Map;function JA(t,e){df.set(t,e)}function ZA(t){const e=df.get(t);return df.delete(t),e}let e1=()=>location.protocol+"//"+location.host;function Tb(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),jy(c,"")}return jy(n,t)+r+s}function t1(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=Tb(t,location),m=n.value,y=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}_=y?d.position-y.position:0}else r(f);s.forEach(T=>{T(n.value,m,{delta:_,type:Ja.pop,direction:_?_>0?Ca.forward:Ca.back:Ca.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:fh()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Hy(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fh():null}}function n1(t){const{history:e,location:n}=window,r={value:Tb(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:e1()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Re({},e.state,Hy(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Re({},s.value,e.state,{forward:c,scroll:fh()});i(u.current,u,!0);const h=Re({},Hy(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function r1(t){t=GA(t);const e=n1(t),n=t1(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:QA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function s1(t){return typeof t=="string"||t&&typeof t=="object"}function xb(t){return typeof t=="string"||typeof t=="symbol"}const Fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sb=Symbol("");var Ky;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ky||(Ky={}));function ho(t,e){return Re(new Error,{type:t,[Sb]:!0},e)}function pr(t,e){return t instanceof Error&&Sb in t&&(e==null||!!(t.type&e))}const Gy="[^/]+?",i1={sensitive:!1,strict:!1,start:!0,end:!0},o1=/[.+*?^${}()[\]/\\]/g;function a1(t,e){const n=Re({},i1,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(o1,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:_,regexp:T}=d;i.push({name:m,repeatable:y,optional:_});const k=T||Gy;if(k!==Gy){f+=10;try{new RegExp(`(${k})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${k}): `+E.message)}}let A=y?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(A=_&&l.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),s+=A,f+=20,_&&(f+=-8),y&&(f+=-20),k===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=i[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:_}=f,T=m in l?l[m]:"";if(Fn(T)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const k=Fn(T)?T.join("/"):T;if(!k)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function c1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function l1(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=c1(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wy(r))return 1;if(Wy(s))return-1}return s.length-r.length}function Wy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const u1={type:0,value:""},h1=/[a-zA-Z0-9_]/;function d1(t){if(!t)return[[]];if(t==="/")return[[u1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:h1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function f1(t,e,n){const r=a1(d1(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function p1(t,e){const n=[],r=new Map;e=Xy({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,m=m1(u);m.aliasOf=d&&d.record;const y=Xy(e,u),_=[m];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)_.push(Re({},m,{components:d?d.record.components:m.components,path:E,aliasOf:d?d.record:m}))}let T,k;for(const A of _){const{path:E}=A;if(h&&E[0]!=="/"){const L=h.record.path,F=L[L.length-1]==="/"?"":"/";A.path=h.record.path+(E&&F+E)}if(T=f1(A,h,y),d?d.alias.push(T):(k=k||T,k!==T&&k.alias.push(T),f&&u.name&&!Yy(T)&&o(u.name)),m.children){const L=m.children;for(let F=0;F<L.length;F++)i(L[F],T,d&&d.children[F])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return k?()=>{o(k)}:Aa}function o(u){if(xb(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&l1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!kb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Yy(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},m,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ho(1,{location:u});y=d.record.name,f=Re(Qy(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Qy(u.params,d.keys.map(k=>k.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(k=>k.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw ho(1,{location:u,currentLocation:h});y=d.record.name,f=Re({},h.params,u.params),m=d.stringify(f)}const _=[];let T=d;for(;T;)_.unshift(T.record),T=T.parent;return{name:y,path:m,params:f,matched:_,meta:y1(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function m1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:g1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function g1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Yy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function y1(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Xy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kb(t,e){return e.children.some(n=>n===t||kb(t,n))}const Ab=/#/g,v1=/&/g,_1=/\//g,w1=/=/g,b1=/\?/g,Cb=/\+/g,I1=/%5B/g,E1=/%5D/g,Rb=/%5E/g,T1=/%60/g,Nb=/%7B/g,x1=/%7C/g,Pb=/%7D/g,S1=/%20/g;function Up(t){return encodeURI(""+t).replace(x1,"|").replace(I1,"[").replace(E1,"]")}function k1(t){return Up(t).replace(Nb,"{").replace(Pb,"}").replace(Rb,"^")}function ff(t){return Up(t).replace(Cb,"%2B").replace(S1,"+").replace(Ab,"%23").replace(v1,"%26").replace(T1,"`").replace(Nb,"{").replace(Pb,"}").replace(Rb,"^")}function A1(t){return ff(t).replace(w1,"%3D")}function C1(t){return Up(t).replace(Ab,"%23").replace(b1,"%3F")}function R1(t){return t==null?"":C1(t).replace(_1,"%2F")}function fu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function N1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Cb," "),o=i.indexOf("="),a=fu(o<0?i:i.slice(0,o)),c=o<0?null:fu(i.slice(o+1));if(a in e){let l=e[a];Fn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Jy(t){let e="";for(let n in t){const r=t[n];if(n=A1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fn(r)?r.map(i=>i&&ff(i)):[r&&ff(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function P1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const D1=Symbol(""),Zy=Symbol(""),ph=Symbol(""),Fp=Symbol(""),pf=Symbol("");function ea(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function zr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ho(4,{from:n,to:e})):h instanceof Error?a(h):s1(h)?a(ho(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function wd(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(O1(a)){const l=(a.__vccOpts||a)[e];l&&s.push(zr(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=VA(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&zr(d,n,r,i,o)()}))}}return s}function O1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ev(t){const e=In(ph),n=In(Fp),r=vt(()=>e.resolve(pe(t.to))),s=vt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(uo.bind(null,u));if(d>-1)return d;const f=tv(c[l-2]);return l>1&&tv(u)===f&&h[h.length-1].path!==f?h.findIndex(uo.bind(null,c[l-2])):d}),i=vt(()=>s.value>-1&&U1(n.params,r.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&Eb(n.params,r.value.params));function a(c={}){return M1(c)?e[pe(t.replace)?"replace":"push"](pe(t.to)).catch(Aa):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const L1=Jw({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ev,setup(t,{slots:e}){const n=Oo(ev(t)),{options:r}=In(ph),s=vt(()=>({[nv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[nv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:gb("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Pn=L1;function M1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function U1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function tv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nv=(t,e,n)=>t??e??n,F1=Jw({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=In(pf),s=vt(()=>t.route||r.value),i=In(Zy,0),o=vt(()=>{let l=pe(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=vt(()=>s.value.matched[o.value]);Fl(Zy,vt(()=>o.value+1)),Fl(D1,a),Fl(pf,s);const c=le();return ss(()=>[c.value,a.value,t.name],([l,u,h],[d,f,m])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!uo(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return rv(n.default,{Component:d,route:l});const f=h.props[u],m=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=gb(d,Re({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return rv(n.default,{Component:_,route:l})||_}}});function rv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Rc=F1;function $1(t){const e=p1(t.routes,t),n=t.parseQuery||N1,r=t.stringifyQuery||Jy,s=t.history,i=ea(),o=ea(),a=ea(),c=KS(Fr);let l=Fr;Bi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vd.bind(null,S=>""+S),h=vd.bind(null,R1),d=vd.bind(null,fu);function f(S,z){let $,ee;return xb(S)?($=e.getRecordMatcher(S),ee=z):ee=S,e.addRoute(ee,$)}function m(S){const z=e.getRecordMatcher(S);z&&e.removeRoute(z)}function y(){return e.getRoutes().map(S=>S.record)}function _(S){return!!e.getRecordMatcher(S)}function T(S,z){if(z=Re({},z||c.value),typeof S=="string"){const w=_d(n,S,z.path),x=e.resolve({path:w.path},z),C=s.createHref(w.fullPath);return Re(w,x,{params:d(x.params),hash:fu(w.hash),redirectedFrom:void 0,href:C})}let $;if("path"in S)$=Re({},S,{path:_d(n,S.path,z.path).path});else{const w=Re({},S.params);for(const x in w)w[x]==null&&delete w[x];$=Re({},S,{params:h(w)}),z.params=h(z.params)}const ee=e.resolve($,z),_e=S.hash||"";ee.params=u(d(ee.params));const g=qA(r,Re({},S,{hash:k1(_e),path:ee.path})),v=s.createHref(g);return Re({fullPath:g,hash:_e,query:r===Jy?P1(S.query):S.query||{}},ee,{redirectedFrom:void 0,href:v})}function k(S){return typeof S=="string"?_d(n,S,c.value.path):Re({},S)}function A(S,z){if(l!==S)return ho(8,{from:z,to:S})}function E(S){return Y(S)}function L(S){return E(Re(k(S),{replace:!0}))}function F(S){const z=S.matched[S.matched.length-1];if(z&&z.redirect){const{redirect:$}=z;let ee=typeof $=="function"?$(S):$;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=k(ee):{path:ee},ee.params={}),Re({query:S.query,hash:S.hash,params:"path"in ee?{}:S.params},ee)}}function Y(S,z){const $=l=T(S),ee=c.value,_e=S.state,g=S.force,v=S.replace===!0,w=F($);if(w)return Y(Re(k(w),{state:typeof w=="object"?Re({},_e,w.state):_e,force:g,replace:v}),z||$);const x=$;x.redirectedFrom=z;let C;return!g&&zA(r,ee,$)&&(C=ho(16,{to:x,from:ee}),Wt(ee,ee,!0,!1)),(C?Promise.resolve(C):ue(x,ee)).catch(N=>pr(N)?pr(N,2)?N:an(N):ve(N,x,ee)).then(N=>{if(N){if(pr(N,2))return Y(Re({replace:v},k(N.to),{state:typeof N.to=="object"?Re({},_e,N.to.state):_e,force:g}),z||x)}else N=Ue(x,ee,!0,v,_e);return Ee(x,ee,N),N})}function G(S,z){const $=A(S,z);return $?Promise.reject($):Promise.resolve()}function W(S){const z=cn.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(S):S()}function ue(S,z){let $;const[ee,_e,g]=V1(S,z);$=wd(ee.reverse(),"beforeRouteLeave",S,z);for(const w of ee)w.leaveGuards.forEach(x=>{$.push(zr(x,S,z))});const v=G.bind(null,S,z);return $.push(v),Xe($).then(()=>{$=[];for(const w of i.list())$.push(zr(w,S,z));return $.push(v),Xe($)}).then(()=>{$=wd(_e,"beforeRouteUpdate",S,z);for(const w of _e)w.updateGuards.forEach(x=>{$.push(zr(x,S,z))});return $.push(v),Xe($)}).then(()=>{$=[];for(const w of S.matched)if(w.beforeEnter&&!z.matched.includes(w))if(Fn(w.beforeEnter))for(const x of w.beforeEnter)$.push(zr(x,S,z));else $.push(zr(w.beforeEnter,S,z));return $.push(v),Xe($)}).then(()=>(S.matched.forEach(w=>w.enterCallbacks={}),$=wd(g,"beforeRouteEnter",S,z),$.push(v),Xe($))).then(()=>{$=[];for(const w of o.list())$.push(zr(w,S,z));return $.push(v),Xe($)}).catch(w=>pr(w,8)?w:Promise.reject(w))}function Ee(S,z,$){for(const ee of a.list())W(()=>ee(S,z,$))}function Ue(S,z,$,ee,_e){const g=A(S,z);if(g)return g;const v=z===Fr,w=Bi?history.state:{};$&&(ee||v?s.replace(S.fullPath,Re({scroll:v&&w&&w.scroll},_e)):s.push(S.fullPath,_e)),c.value=S,Wt(S,z,$,v),an()}let Oe;function Bt(){Oe||(Oe=s.listen((S,z,$)=>{if(!ln.listening)return;const ee=T(S),_e=F(ee);if(_e){Y(Re(_e,{replace:!0}),ee).catch(Aa);return}l=ee;const g=c.value;Bi&&JA(zy(g.fullPath,$.delta),fh()),ue(ee,g).catch(v=>pr(v,12)?v:pr(v,2)?(Y(v.to,ee).then(w=>{pr(w,20)&&!$.delta&&$.type===Ja.pop&&s.go(-1,!1)}).catch(Aa),Promise.reject()):($.delta&&s.go(-$.delta,!1),ve(v,ee,g))).then(v=>{v=v||Ue(ee,g,!1),v&&($.delta&&!pr(v,8)?s.go(-$.delta,!1):$.type===Ja.pop&&pr(v,20)&&s.go(-1,!1)),Ee(ee,g,v)}).catch(Aa)}))}let ot=ea(),ae=ea(),me;function ve(S,z,$){an(S);const ee=ae.list();return ee.length?ee.forEach(_e=>_e(S,z,$)):console.error(S),Promise.reject(S)}function xt(){return me&&c.value!==Fr?Promise.resolve():new Promise((S,z)=>{ot.add([S,z])})}function an(S){return me||(me=!S,Bt(),ot.list().forEach(([z,$])=>S?$(S):z()),ot.reset()),S}function Wt(S,z,$,ee){const{scrollBehavior:_e}=t;if(!Bi||!_e)return Promise.resolve();const g=!$&&ZA(zy(S.fullPath,0))||(ee||!$)&&history.state&&history.state.scroll||null;return Cp().then(()=>_e(S,z,g)).then(v=>v&&XA(v)).catch(v=>ve(v,S,z))}const at=S=>s.go(S);let An;const cn=new Set,ln={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:_,getRoutes:y,resolve:T,options:t,push:E,replace:L,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:xt,install(S){const z=this;S.component("RouterLink",Pn),S.component("RouterView",Rc),S.config.globalProperties.$router=z,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>pe(c)}),Bi&&!An&&c.value===Fr&&(An=!0,E(s.location).catch(_e=>{}));const $={};for(const _e in Fr)$[_e]=vt(()=>c.value[_e]);S.provide(ph,z),S.provide(Fp,Oo($)),S.provide(pf,c);const ee=S.unmount;cn.add(S),S.unmount=function(){cn.delete(S),cn.size<1&&(l=Fr,Oe&&Oe(),Oe=null,c.value=Fr,An=!1,me=!1),ee()}}};function Xe(S){return S.reduce((z,$)=>z.then(()=>W($)),Promise.resolve())}return ln}function V1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>uo(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>uo(l,c))||s.push(c))}return[n,r,s]}function Nc(){return In(ph)}function $p(){return In(Fp)}const B1={__name:"App",setup(t){return(e,n)=>(J(),Ti(pe(Rc)))}},j1="/itemshare/assets/ItemShareLogo-622ee656.png",q1=p("span",{class:"font-poppins hidden select-none text-3xl font-black text-background underline decoration-accent decoration-2 underline-offset-4 md:inline-block"},"ItemShare",-1),z1=["src"],Db={__name:"ItemShareLogo",setup(t){return(e,n)=>(J(),Ti(pe(Pn),{to:"/",class:"flex items-center gap-2"},{default:je(()=>[q1,p("img",{src:pe(j1),class:"w-10 rounded-xl",loading:"lazy"},null,8,z1)]),_:1}))}},H1=p("div",{class:"flex h-full flex-col-reverse bg-background md:flex-row-reverse",style:{"background-image":"url('https://wordpress.heals.com/blog/wp-content/uploads/2021/08/Colourful-sofa-cushions-1024x485.jpg;')","background-size":"cover","background-position":"center"}},[p("div",{class:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),p("div",{class:"z-10 basis-1/2 bg-primary"})],-1),K1={class:"absolute top-0 z-20 flex h-screen w-full flex-col md:flex-row-reverse"},G1={class:"flex w-full basis-full flex-col justify-between gap-4 overflow-y-auto p-8 md:basis-1/2"},W1={class:"flex items-center justify-between"},Q1=p("nav",{class:"flex gap-4 text-background"},[p("a",{href:"#"},"About Us"),p("a",{href:"#"},"Contacts")],-1),Y1=p("footer",{class:"text-right text-background"}," All Rights Reserved 2023. ® ",-1),X1={__name:"LandingView",setup(t){return(e,n)=>(J(),se($e,null,[H1,p("div",K1,[p("div",G1,[p("header",W1,[Q1,V(Db)]),V(pe(Rc)),Y1])])],64))}},mh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},J1={},Z1={class:"flex basis-full flex-col justify-between divide-y-0 divide-secondary divide-opacity-80 px-4 md:divide-y-4"},eC=p("div",{class:"flex basis-full flex-col justify-center"},[p("h1",{class:"text-5xl font-bold text-background sm:text-6xl md:shadow-none"}," Hello, looking for something you like? ")],-1),tC={class:"flex basis-full flex-col gap-8 px-4 py-16"},nC=p("p",{class:"text-xl text-background"}," Unlock the value of your unused items: Earn, Share, and Connect with ItemShare ",-1),rC={class:"flex items-center gap-2"};function sC(t,e){const n=ao("RouterLink");return J(),se("div",Z1,[eC,p("div",tC,[nC,p("div",rC,[V(n,{to:"/login",class:"rounded-md border-2 border-background bg-background px-8 py-2 text-center text-green-800"},{default:je(()=>[xe(" LOGIN ")]),_:1}),V(n,{to:"/register",class:"rounded-md border-2 border-background px-8 py-2 text-center text-background"},{default:je(()=>[xe(" REGISTER ")]),_:1})])])])}const iC=mh(J1,[["render",sC]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ob=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ob(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new aC;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cC=function(t){const e=Ob(t);return Lb.encodeByteArray(e,!0)},pu=function(t){return cC(t).replace(/\./g,"")},Mb=function(t){try{return Lb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function mu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lC(n)||(t[n]=mu(t[n],e[n]));return t}function lC(t){return t!=="__proto__"}/**
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
 */const hC=()=>uC().__FIREBASE_DEFAULTS__,dC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mb(t[1]);return e&&JSON.parse(e)},gh=()=>{try{return hC()||dC()||fC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pC=t=>{var e,n;return(n=(e=gh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mC=t=>{const e=pC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ub=()=>{var t;return(t=gh())===null||t===void 0?void 0:t.config},gC=t=>{var e;return(e=gh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Fb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pu(JSON.stringify(n)),pu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function yh(){var t;const e=(t=gh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _C(){return typeof self=="object"&&self.self===self}function $b(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vb(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wC(){return!yh()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Za(){try{return typeof indexedDB=="object"}catch{return!1}}function bC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="FirebaseError";class Ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IC,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ft(s,a,r)}}function EC(t,e){return t.replace(TC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(iv(i)&&iv(o)){if(!mf(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function iv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Bb(t,e){const n=new SC(t,e);return n.subscribe.bind(n)}class SC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bd),s.error===void 0&&(s.error=bd),s.complete===void 0&&(s.complete=bd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bd(){}/**
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
 */function re(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ps="[DEFAULT]";/**
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
 */class AC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RC(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CC(t){return t===Ps?void 0:t}function RC(t){return t.instantiationMode==="EAGER"}/**
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
 */class NC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=[];var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const jb={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},PC=be.INFO,DC={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},OC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=DC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vh{constructor(e){this.name=e,this._logLevel=PC,this._logHandler=OC,this._userLogHandler=null,Bp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}function LC(t){Bp.forEach(e=>{e.setLogLevel(t)})}function MC(t,e){for(const n of Bp){let r=null;e&&e.level&&(r=jb[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&t({level:be[i].toLowerCase(),message:a,args:o,type:s.name})}}}const UC=(t,e)=>e.some(n=>t instanceof n);let ov,av;function FC(){return ov||(ov=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $C(){return av||(av=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qb=new WeakMap,gf=new WeakMap,zb=new WeakMap,Id=new WeakMap,jp=new WeakMap;function VC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(os(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qb.set(n,t)}).catch(()=>{}),jp.set(e,t),e}function BC(t){if(gf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gf.set(t,e)}let yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return os(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jC(t){yf=t(yf)}function qC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ed(this),e,...n);return zb.set(r,e.sort?e.sort():[e]),os(r)}:$C().includes(t)?function(...e){return t.apply(Ed(this),e),os(qb.get(this))}:function(...e){return os(t.apply(Ed(this),e))}}function zC(t){return typeof t=="function"?qC(t):(t instanceof IDBTransaction&&BC(t),UC(t,FC())?new Proxy(t,yf):t)}function os(t){if(t instanceof IDBRequest)return VC(t);if(Id.has(t))return Id.get(t);const e=zC(t);return e!==t&&(Id.set(t,e),jp.set(e,t)),e}const Ed=t=>jp.get(t);function HC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=os(o);return r&&o.addEventListener("upgradeneeded",c=>{r(os(o.result),c.oldVersion,c.newVersion,os(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const KC=["get","getKey","getAll","getAllKeys","count"],GC=["put","add","delete","clear"],Td=new Map;function cv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Td.get(e))return Td.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=GC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Td.set(e,i),i}jC(t=>({...t,get:(e,n,r)=>cv(e,n)||t.get(e,n,r),has:(e,n)=>!!cv(e,n)||t.has(e,n)}));/**
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
 */class WC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vf="@firebase/app",lv="0.9.12";/**
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
 */const ai=new vh("@firebase/app"),YC="@firebase/app-compat",XC="@firebase/analytics-compat",JC="@firebase/analytics",ZC="@firebase/app-check-compat",eR="@firebase/app-check",tR="@firebase/auth",nR="@firebase/auth-compat",rR="@firebase/database",sR="@firebase/database-compat",iR="@firebase/functions",oR="@firebase/functions-compat",aR="@firebase/installations",cR="@firebase/installations-compat",lR="@firebase/messaging",uR="@firebase/messaging-compat",hR="@firebase/performance",dR="@firebase/performance-compat",fR="@firebase/remote-config",pR="@firebase/remote-config-compat",mR="@firebase/storage",gR="@firebase/storage-compat",yR="@firebase/firestore",vR="@firebase/firestore-compat",_R="firebase",wR="9.22.2";/**
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
 */const ls="[DEFAULT]",bR={[vf]:"fire-core",[YC]:"fire-core-compat",[JC]:"fire-analytics",[XC]:"fire-analytics-compat",[eR]:"fire-app-check",[ZC]:"fire-app-check-compat",[tR]:"fire-auth",[nR]:"fire-auth-compat",[rR]:"fire-rtdb",[sR]:"fire-rtdb-compat",[iR]:"fire-fn",[oR]:"fire-fn-compat",[aR]:"fire-iid",[cR]:"fire-iid-compat",[lR]:"fire-fcm",[uR]:"fire-fcm-compat",[hR]:"fire-perf",[dR]:"fire-perf-compat",[fR]:"fire-rc",[pR]:"fire-rc-compat",[mR]:"fire-gcs",[gR]:"fire-gcs-compat",[yR]:"fire-fst",[vR]:"fire-fst-compat","fire-js":"fire-js",[_R]:"fire-js-all"};/**
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
 */const us=new Map,ec=new Map;function gu(t,e){try{t.container.addComponent(e)}catch(n){ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hb(t,e){t.container.addOrOverwriteComponent(e)}function xr(t){const e=t.name;if(ec.has(e))return ai.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,t);for(const n of us.values())gu(n,t);return!0}function qp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function IR(t,e,n=ls){qp(t,e).clearInstance(n)}function ER(){ec.clear()}/**
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
 */const TR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},br=new xi("app","Firebase",TR);/**
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
 */let xR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}};/**
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
 */const Nr=wR;function zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ls,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=Ub()),!n)throw br.create("no-options");const i=us.get(s);if(i){if(mf(n,i.options)&&mf(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new NC(s);for(const c of ec.values())o.addComponent(c);const a=new xR(n,r,o);return us.set(s,a),a}function Kb(t=ls){const e=us.get(t);if(!e&&t===ls&&Ub())return zp();if(!e)throw br.create("no-app",{appName:t});return e}function SR(){return Array.from(us.values())}async function Gb(t){const e=t.name;us.has(e)&&(us.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function En(t,e,n){var r;let s=(r=bR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ai.warn(a.join(" "));return}xr(new $n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Wb(t,e){if(t!==null&&typeof t!="function")throw br.create("invalid-log-argument");MC(t,e)}function Qb(t){LC(t)}/**
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
 */const kR="firebase-heartbeat-database",AR=1,tc="firebase-heartbeat-store";let xd=null;function Yb(){return xd||(xd=HC(kR,AR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tc)}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),xd}async function CR(t){try{return await(await Yb()).transaction(tc).objectStore(tc).get(Xb(t))}catch(e){if(e instanceof Ft)ai.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ai.warn(n.message)}}}async function uv(t,e){try{const r=(await Yb()).transaction(tc,"readwrite");await r.objectStore(tc).put(e,Xb(t)),await r.done}catch(n){if(n instanceof Ft)ai.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ai.warn(r.message)}}}function Xb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RR=1024,NR=30*24*60*60*1e3;class PR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=NR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hv(),{heartbeatsToSend:n,unsentEntries:r}=DR(this._heartbeatsCache.heartbeats),s=pu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function hv(){return new Date().toISOString().substring(0,10)}function DR(t,e=RR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Za()?bC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dv(t){return pu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function LR(t){xr(new $n("platform-logger",e=>new WC(e),"PRIVATE")),xr(new $n("heartbeat",e=>new PR(e),"PRIVATE")),En(vf,lv,t),En(vf,lv,"esm2017"),En("fire-js","")}LR("");const MR=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ft,SDK_VERSION:Nr,_DEFAULT_ENTRY_NAME:ls,_addComponent:gu,_addOrOverwriteComponent:Hb,_apps:us,_clearComponents:ER,_components:ec,_getProvider:qp,_registerComponent:xr,_removeServiceInstance:IR,deleteApp:Gb,getApp:Kb,getApps:SR,initializeApp:zp,onLog:Wb,registerVersion:En,setLogLevel:Qb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this._delegate=e,this.firebase=n,gu(e,new $n("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Gb(this._delegate)))}_getService(e,n=ls){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=ls){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){gu(this._delegate,e)}_addOrOverwriteComponent(e){Hb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const FR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},fv=new xi("app-compat","Firebase",FR);/**
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
 */function $R(t){const e={},n={__esModule:!0,initializeApp:i,app:s,registerVersion:En,setLogLevel:Qb,onLog:Wb,apps:null,SDK_VERSION:Nr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:MR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function s(l){if(l=l||ls,!sv(e,l))throw fv.create("no-app",{appName:l});return e[l]}s.App=t;function i(l,u={}){const h=zp(l,u);if(sv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(xr(l)&&l.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw fv.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&mu(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function c(l,u){return u==="serverAuth"?null:u}return n}/**
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
 */function Jb(){const t=$R(UR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Jb,extendNamespace:e,createSubscribe:Bb,ErrorFactory:xi,deepExtend:mu});function e(n){mu(t,n)}return t}const VR=Jb();/**
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
 */const pv=new vh("@firebase/app-compat"),BR="@firebase/app-compat",jR="0.2.12";/**
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
 */function qR(t){En(BR,jR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(_C()&&self.firebase!==void 0){pv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&pv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Mt=VR;qR();var zR="firebase",HR="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.registerVersion(zR,HR,"app-compat");function Hp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}const ta={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Mi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Zb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GR=KR,WR=Zb,e0=new xi("auth","Firebase",Zb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new vh("@firebase/auth");function QR(t,...e){yu.logLevel<=be.WARN&&yu.warn(`Auth (${Nr}): ${t}`,...e)}function Bl(t,...e){yu.logLevel<=be.ERROR&&yu.error(`Auth (${Nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw Kp(t,...e)}function Nt(t,...e){return Kp(t,...e)}function t0(t,e,n){const r=Object.assign(Object.assign({},WR()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function Mo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),t0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e0.create(t,...e)}function O(t,e,...n){if(!t)throw Kp(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function Vn(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gp(){return mv()==="http:"||mv()==="https:"}function mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gp()||$b()||"connection"in navigator)?navigator.onLine:!0}function XR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=vC()||Vp()}get(){return YR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ZR=new Pc(3e4,6e4);function ht(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pt(t,e,n,r,s={}){return r0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),n0.fetch()(s0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function r0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JR),e);try{const s=new eN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ya(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw t0(t,u,l);Dt(t,u)}}catch(s){if(s instanceof Ft)throw s;Dt(t,"network-request-failed",{message:String(s)})}}async function Pr(t,e,n,r,s={}){const i=await pt(t,e,n,r,s);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function s0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Wp(t.config,s):`${t.config.apiScheme}://${s}`}class eN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),ZR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e){return pt(t,"POST","/v1/accounts:delete",e)}async function nN(t,e){return pt(t,"POST","/v1/accounts:update",e)}async function rN(t,e){return pt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sN(t,e=!1){const n=re(t),r=await n.getIdToken(e),s=_h(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ra(Sd(s.auth_time)),issuedAtTime:Ra(Sd(s.iat)),expirationTime:Ra(Sd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sd(t){return Number(t)*1e3}function _h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mb(n);return s?JSON.parse(s):(Bl("Failed to decode base64 JWT payload"),null)}catch(s){return Bl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iN(t){const e=_h(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ft&&oN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Sr(t,rN(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?uN(i.providerUserInfo):[],a=lN(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new i0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cN(t){const e=re(t);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uN(t){return t.map(e=>{var{providerId:n}=e,r=Hp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e){const n=await r0(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=s0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new sc;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sc,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ei{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new i0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sN(this,e)}reload(){return cN(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sr(this,tN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:E,isAnonymous:L,providerData:F,stsTokenManager:Y}=n;O(A&&Y,e,"internal-error");const G=sc.fromJSON(this.name,Y);O(typeof A=="string",e,"internal-error"),$r(h,e.name),$r(d,e.name),O(typeof E=="boolean",e,"internal-error"),O(typeof L=="boolean",e,"internal-error"),$r(f,e.name),$r(m,e.name),$r(y,e.name),$r(_,e.name),$r(T,e.name),$r(k,e.name);const W=new ei({uid:A,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:L,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:G,createdAt:T,lastLoginAt:k});return F&&Array.isArray(F)&&(W.providerData=F.map(ue=>Object.assign({},ue))),_&&(W._redirectEventId=_),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new sc;s.updateFromServerResponse(n);const i=new ei({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rc(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Map;function pn(t){Vn(t instanceof Function,"Expected a class definition");let e=gv.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gv.set(t,e),e)}/**
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
 */class o0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o0.type="NONE";const fo=o0;/**
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
 */function ti(t,e,n){return`firebase:${t}:${e}:${n}`}class Ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ti(this.userKey,s.apiKey,i),this.fullPersistenceKey=ti("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ji(pn(fo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||pn(fo);const o=ti(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ei._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ji(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ji(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u0(e))return"Blackberry";if(h0(e))return"Webos";if(Qp(e))return"Safari";if((e.includes("chrome/")||c0(e))&&!e.includes("edge/"))return"Chrome";if(Dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a0(t=Qe()){return/firefox\//i.test(t)}function Qp(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c0(t=Qe()){return/crios\//i.test(t)}function l0(t=Qe()){return/iemobile/i.test(t)}function Dc(t=Qe()){return/android/i.test(t)}function u0(t=Qe()){return/blackberry/i.test(t)}function h0(t=Qe()){return/webos/i.test(t)}function Uo(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dN(t=Qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function fN(t=Qe()){var e;return Uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pN(){return Vb()&&document.documentMode===10}function d0(t=Qe()){return Uo(t)||Dc(t)||h0(t)||u0(t)||/windows phone/i.test(t)||l0(t)}function mN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t,e=[]){let n;switch(t){case"Browser":n=yv(Qe());break;case"Worker":n=`${yv(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t){return(await pt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function p0(t,e){return pt(t,"GET","/v2/recaptchaConfig",ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){return t!==void 0&&t.getResponse!==void 0}function _v(t){return t!==void 0&&t.enterprise!==void 0}class m0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Yp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yN().appendChild(r)})}function g0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vN="https://www.google.com/recaptcha/enterprise.js?render=",_N="recaptcha-enterprise",wN="NO_RECAPTCHA";class y0{constructor(e){this.type=_N,this.auth=it(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{p0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new m0(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;_v(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(wN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&_v(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Yp(vN+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function hs(t,e,n,r=!1){const s=new y0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class bN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wv(this),this.idTokenSubscription=new wv(this),this.beforeStateQueue=new bN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?re(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}async initializeRecaptchaConfig(){const e=await p0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new m0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new y0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function it(t){return re(t)}class wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bb(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function EN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TN(t,e,n){const r=it(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=v0(e),{host:o,port:a}=xN(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||SN()}function v0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xN(t){const e=v0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:bv(o)}}}function bv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e){return pt(t,"POST","/v1/accounts:resetPassword",ht(t,e))}async function w0(t,e){return pt(t,"POST","/v1/accounts:update",e)}async function kN(t,e){return pt(t,"POST","/v1/accounts:update",ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kd(t,e){return Pr(t,"POST","/v1/accounts:signInWithPassword",ht(t,e))}async function wh(t,e){return pt(t,"POST","/v1/accounts:sendOobCode",ht(t,e))}async function AN(t,e){return wh(t,e)}async function Ad(t,e){return wh(t,e)}async function Cd(t,e){return wh(t,e)}async function CN(t,e){return wh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",ht(t,e))}async function NN(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends Fo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ic(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ic(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await hs(e,r,"signInWithPassword");return kd(e,s)}else return kd(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await hs(e,r,"signInWithPassword");return kd(e,i)}else return Promise.reject(s)});case"emailLink":return RN(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return w0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NN(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,e){return Pr(t,"POST","/v1/accounts:signInWithIdp",ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="http://localhost";class ur extends Fo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ur(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:PN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){return pt(t,"POST","/v1/accounts:sendVerificationCode",ht(t,e))}async function ON(t,e){return Pr(t,"POST","/v1/accounts:signInWithPhoneNumber",ht(t,e))}async function LN(t,e){const n=await Pr(t,"POST","/v1/accounts:signInWithPhoneNumber",ht(t,e));if(n.temporaryProof)throw ya(t,"account-exists-with-different-credential",n);return n}const MN={USER_NOT_FOUND:"user-not-found"};async function UN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Pr(t,"POST","/v1/accounts:signInWithPhoneNumber",ht(t,n),MN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Fo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ni({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ni({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return ON(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return LN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return UN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new ni({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $N(t){const e=Ki(ga(t)).link,n=e?Ki(ga(e)).deep_link_id:null,r=Ki(ga(t)).deep_link_id;return(r?Ki(ga(r)).link:null)||r||n||e||t}class bh{constructor(e){var n,r,s,i,o,a;const c=Ki(ga(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=FN((s=c.mode)!==null&&s!==void 0?s:null);O(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$N(e);try{return new bh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return ic._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bh.parseLink(n);return O(r,"argument-error"),ic._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $o extends Dr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zi extends $o{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),ur._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),ur._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Zi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!n&&!i||!a)return null;try{return new Zi(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends $o{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends $o{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="http://localhost";class po extends Fo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=n;return!r||!s||!i||r!==s?null:new po(r,i)}static _create(e,n){return new po(e,n)}buildRequest(){return{requestUri:VN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="saml.";class vu extends Dr{constructor(e){O(e.startsWith(BN),"argument-error"),super(e)}static credentialFromResult(e){return vu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return vu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=po.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return po._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends $o{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t,e){return Pr(t,"POST","/v1/accounts:signUp",ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ei._fromIdTokenResponse(e,r,s),o=Iv(r);return new xn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Iv(r);return new xn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t){var e;const n=it(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new xn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await jl(n,{returnSecureToken:!0}),s=await xn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends Ft{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _u(e,n,r,s)}}function b0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function qN(t,e){const n=re(t);await Ih(!0,n,e);const{providerUserInfo:r}=await nN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=I0(r||[]);return n.providerData=n.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Xp(t,e,n=!1){const r=await Sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xn._forOperation(t,"link",r)}async function Ih(t,e,n){await rc(e);const r=I0(e.providerData),s=t===!1?"provider-already-linked":"no-such-provider";O(r.has(n)===t,e.auth,s)}/**
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
 */async function E0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Sr(t,b0(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=_h(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),xn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,e,n=!1){const r="signIn",s=await b0(t,r,e),i=await xn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Eh(t,e){return T0(it(t),e)}async function x0(t,e){const n=re(t);return await Ih(!1,n,e.providerId),Xp(n,e)}async function S0(t,e){return E0(re(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e){return Pr(t,"POST","/v1/accounts:signInWithCustomToken",ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(t,e){const n=it(t),r=await zN(n,{token:e,returnSecureToken:!0}),s=await xn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Jp._fromServerResponse(e,n):"totpInfo"in n?Zp._fromServerResponse(e,n):Dt(e,"internal-error")}}class Jp extends Oc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Jp(n)}}class Zp extends Oc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Zp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function KN(t,e,n){var r;const s=it(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await hs(s,i,"getOobCode",!0);n&&eo(s,o,n),await Ad(s,o)}else n&&eo(s,i,n),await Ad(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await hs(s,i,"getOobCode",!0);n&&eo(s,a,n),await Ad(s,a)}else return Promise.reject(o)})}async function GN(t,e,n){await _0(re(t),{oobCode:e,newPassword:n})}async function WN(t,e){await kN(re(t),{oobCode:e})}async function k0(t,e){const n=re(t),r=await _0(n,{oobCode:e}),s=r.requestType;switch(O(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=Oc._fromServerResponse(it(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function QN(t,e){const{data:n}=await k0(re(t),e);return n.email}async function YN(t,e,n){var r;const s=it(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await hs(s,i,"signUpPassword");o=jl(s,l)}else o=jl(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await hs(s,i,"signUpPassword");return jl(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await xn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function XN(t,e,n){return Eh(re(t),bs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e,n){var r;const s=it(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){O(c.handleCodeInApp,s,"argument-error"),c&&eo(s,a,c)}if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await hs(s,i,"getOobCode",!0);o(a,n),await Cd(s,a)}else o(i,n),await Cd(s,i).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await hs(s,i,"getOobCode",!0);o(c,n),await Cd(s,c)}else return Promise.reject(a)})}function ZN(t,e){const n=bh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function eP(t,e,n){const r=re(t),s=bs.credentialWithLink(e,n||nc());return O(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Eh(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e){return pt(t,"POST","/v1/accounts:createAuthUri",ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e){const n=Gp()?nc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await tP(re(t),r);return s||[]}async function rP(t,e){const n=re(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&eo(n.auth,s,e);const{email:i}=await AN(n.auth,s);i!==t.email&&await t.reload()}async function sP(t,e,n){const r=re(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&eo(r.auth,i,n);const{email:o}=await CN(r.auth,i);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){return pt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=re(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Sr(r,iP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aP(t,e){return A0(re(t),e,null)}function cP(t,e){return A0(re(t),null,e)}async function A0(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Sr(t,w0(r,i));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function lP(t){var e,n;if(!t)return null;const{providerId:r}=t,s=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},i=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=_h(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new to(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new uP(i,s);case"github.com":return new hP(i,s);case"google.com":return new dP(i,s);case"twitter.com":return new fP(i,s,t.screenName||null);case"custom":case"anonymous":return new to(i,null);default:return new to(i,r,s)}}class to{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class C0 extends to{constructor(e,n,r,s){super(e,n,r),this.username=s}}class uP extends to{constructor(e,n){super(e,"facebook.com",n)}}class hP extends C0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class dP extends to{constructor(e,n){super(e,"google.com",n)}}class fP extends C0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function pP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:lP(n)}class Ks{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Ks("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ks("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ks._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ks._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=it(e),s=n.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>Oc._fromServerResponse(r,a));O(s.mfaPendingCredential,r,"internal-error");const o=Ks._fromMfaPendingCredential(s.mfaPendingCredential);return new em(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const u=await xn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return O(n.user,r,"internal-error"),xn._forOperation(n.user,n.operationType,l);default:Dt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function mP(t,e){var n;const r=re(t),s=e;return O(e.customData.operationType,r,"argument-error"),O((n=s.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),em._fromError(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t,e){return pt(t,"POST","/v2/accounts/mfaEnrollment:start",ht(t,e))}function yP(t,e){return pt(t,"POST","/v2/accounts/mfaEnrollment:finalize",ht(t,e))}function vP(t,e){return pt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ht(t,e))}class tm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Oc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new tm(e)}async getSession(){return Ks._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,s=await this.getSession(),i=await Sr(this.user,r._process(this.user.auth,s,n));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const s=await Sr(this.user,vP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==n),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const Rd=new WeakMap;function _P(t){const e=re(t);return Rd.has(e)||Rd.set(e,tm._fromUser(e)),Rd.get(e)}const wu="__sak";/**
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
 */class R0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(){const t=Qe();return Qp(t)||Uo(t)}const bP=1e3,IP=10;class N0 extends R0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wP()&&mN(),this.fallbackToPolling=d0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N0.type="LOCAL";const nm=N0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0 extends R0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P0.type="SESSION";const ci=P0;/**
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
 */class Th{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Th(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await EP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Lc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function xP(t){ut().location.href=t}/**
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
 */function rm(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function SP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AP(){return rm()?self:null}/**
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
 */const D0="firebaseLocalStorageDb",CP=1,bu="firebaseLocalStorage",O0="fbase_key";class Mc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xh(t,e){return t.transaction([bu],e?"readwrite":"readonly").objectStore(bu)}function RP(){const t=indexedDB.deleteDatabase(D0);return new Mc(t).toPromise()}function _f(){const t=indexedDB.open(D0,CP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bu,{keyPath:O0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bu)?e(r):(r.close(),await RP(),e(await _f()))})})}async function Ev(t,e,n){const r=xh(t,!0).put({[O0]:e,value:n});return new Mc(r).toPromise()}async function NP(t,e){const n=xh(t,!1).get(e),r=await new Mc(n).toPromise();return r===void 0?null:r.value}function Tv(t,e){const n=xh(t,!0).delete(e);return new Mc(n).toPromise()}const PP=800,DP=3;class L0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _f(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Th._getInstance(AP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SP(),!this.activeServiceWorker)return;this.sender=new TP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _f();return await Ev(e,wu,"1"),await Tv(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ev(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xh(s,!1).getAll();return new Mc(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L0.type="LOCAL";const oc=L0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t,e){return pt(t,"POST","/v2/accounts/mfaSignIn:start",ht(t,e))}function LP(t,e){return pt(t,"POST","/v2/accounts/mfaSignIn:finalize",ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=500,UP=6e4,ml=1e12;class FP{constructor(e){this.auth=e,this.counter=ml,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new $P(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ml;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ml;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ml;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class $P{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;O(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=VP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},UP)},MP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function VP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=g0("rcb"),BP=new Pc(3e4,6e4),jP="https://www.google.com/recaptcha/api.js?";class qP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ut().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(zP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&vv(ut().grecaptcha)?Promise.resolve(ut().grecaptcha):new Promise((r,s)=>{const i=ut().setTimeout(()=>{s(Nt(e,"network-request-failed"))},BP.get());ut()[Nd]=()=>{ut().clearTimeout(i),delete ut()[Nd];const a=ut().grecaptcha;if(!a||!vv(a)){s(Nt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${jP}?${Lo({onload:Nd,render:"explicit",hl:n})}`;Yp(o).catch(()=>{clearTimeout(i),s(Nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ut().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class HP{async load(e){return new FP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="recaptcha",KP={theme:"light",type:"image"};let GP=class{constructor(e,n=Object.assign({},KP),r){this.parameters=n,this.type=M0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=it(r),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;O(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new HP:new qP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ut()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(Gp()&&!rm(),this.auth,"internal-error"),await WP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await gN(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function WP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ni._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function QP(t,e,n){const r=it(t),s=await Sh(r,e,re(n));return new sm(s,i=>Eh(r,i))}async function YP(t,e,n){const r=re(t);await Ih(!1,r,"phone");const s=await Sh(r.auth,e,re(n));return new sm(s,i=>x0(r,i))}async function XP(t,e,n){const r=re(t),s=await Sh(r.auth,e,re(n));return new sm(s,i=>S0(r,i))}async function Sh(t,e,n){var r;const s=await n.verify();try{O(typeof s=="string",t,"argument-error"),O(n.type===M0,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return O(o.type==="enroll",t,"internal-error"),(await gP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await OP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await DN(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}async function JP(t,e){await Xp(re(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li=class ql{constructor(e){this.providerId=ql.PROVIDER_ID,this.auth=it(e)}verifyPhoneNumber(e,n){return Sh(this.auth,e,re(n))}static credential(e,n){return ni._fromVerification(e,n)}static credentialFromResult(e){const n=e;return ql.credentialFromTaggedObject(n)}static credentialFromError(e){return ql.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ni._fromTokenResponse(n,r):null}};li.PROVIDER_ID="phone";li.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Si(t,e){return e?pn(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class im extends Fo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZP(t){return T0(t.auth,new im(t),t.bypassAuthState)}function eD(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),E0(n,new im(t),t.bypassAuthState)}async function tD(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Xp(n,new im(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZP;case"linkViaPopup":case"linkViaRedirect":return tD;case"reauthViaPopup":case"reauthViaRedirect":return eD;default:Dt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new Pc(2e3,1e4);async function rD(t,e,n){const r=it(t);Mo(t,e,Dr);const s=Si(r,n);return new gr(r,"signInViaPopup",e,s).executeNotNull()}async function sD(t,e,n){const r=re(t);Mo(r.auth,e,Dr);const s=Si(r.auth,n);return new gr(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function iD(t,e,n){const r=re(t);Mo(r.auth,e,Dr);const s=Si(r.auth,n);return new gr(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class gr extends U0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nD.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="pendingRedirect",Na=new Map;class aD extends U0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Na.get(this.auth._key());if(!e){try{const r=await cD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Na.set(this.auth._key(),e)}return this.bypassAuthState||Na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cD(t,e){const n=$0(e),r=F0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function om(t,e){return F0(t)._set($0(e),"true")}function lD(){Na.clear()}function am(t,e){Na.set(t._key(),e)}function F0(t){return pn(t._redirectPersistence)}function $0(t){return ti(oD,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,e,n){return hD(t,e,n)}async function hD(t,e,n){const r=it(t);Mo(t,e,Dr),await r._initializationPromise;const s=Si(r,n);return await om(s,r),s._openRedirect(r,e,"signInViaRedirect")}function dD(t,e,n){return fD(t,e,n)}async function fD(t,e,n){const r=re(t);Mo(r.auth,e,Dr),await r.auth._initializationPromise;const s=Si(r.auth,n);await om(s,r.auth);const i=await V0(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function pD(t,e,n){return mD(t,e,n)}async function mD(t,e,n){const r=re(t);Mo(r.auth,e,Dr),await r.auth._initializationPromise;const s=Si(r.auth,n);await Ih(!1,r,e.providerId),await om(s,r.auth);const i=await V0(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function gD(t,e){return await it(t)._initializationPromise,kh(t,e,!1)}async function kh(t,e,n=!1){const r=it(t),s=Si(r,e),o=await new aD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function V0(t){const e=Lc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=10*60*1e3;class B0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!j0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yD&&this.cachedEventUids.clear(),this.cachedEventUids.has(xv(e))}saveEventToCache(e){this.cachedEventUids.add(xv(e)),this.lastProcessedEventTime=Date.now()}}function xv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function j0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e={}){return pt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wD=/^https?/;async function bD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await q0(t);for(const n of e)try{if(ID(n))return}catch{}Dt(t,"unauthorized-domain")}function ID(t){const e=nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wD.test(n))return!1;if(_D.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ED=new Pc(3e4,6e4);function Sv(){const t=ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TD(t){return new Promise((e,n)=>{var r,s,i;function o(){Sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sv(),n(Nt(t,"network-request-failed"))},timeout:ED.get()})}if(!((s=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ut().gapi)===null||i===void 0)&&i.load)o();else{const a=g0("iframefcb");return ut()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},Yp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw zl=null,e})}let zl=null;function xD(t){return zl=zl||TD(t),zl}/**
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
 */const SD=new Pc(5e3,15e3),kD="__/auth/iframe",AD="emulator/auth/iframe",CD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ND(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wp(e,AD):`https://${t.config.authDomain}/${kD}`,r={apiKey:e.apiKey,appName:t.name,v:Nr},s=RD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Lo(r).slice(1)}`}async function PD(t){const e=await xD(t),n=ut().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:ND(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=ut().setTimeout(()=>{i(o)},SD.get());function c(){ut().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const DD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OD=500,LD=600,MD="_blank",UD="http://localhost";class kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FD(t,e,n,r=OD,s=LD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DD),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Qe().toLowerCase();n&&(a=c0(l)?MD:n),a0(l)&&(e=e||UD,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(fN(l)&&a!=="_self")return $D(e||"",a),new kv(null);const h=window.open(e||"",a,u);O(h,t,"popup-blocked");try{h.focus()}catch{}return new kv(h)}function $D(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VD="__/auth/handler",BD="emulator/auth/handler",jD=encodeURIComponent("fac");async function wf(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Nr,eventId:s};if(e instanceof Dr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof $o){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${jD}=${encodeURIComponent(c)}`:"";return`${qD(t)}?${Lo(a).slice(1)}${l}`}function qD({config:t}){return t.emulator?Wp(t,BD):`https://${t.authDomain}/${VD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="webStorageSupport";class zD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ci,this._completeRedirectFn=kh,this._overrideRedirectResult=am}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wf(e,n,r,nc(),s);return FD(e,o,Lc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wf(e,n,r,nc(),s);return xP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PD(e),r=new B0(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pd,{type:Pd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pd];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d0()||Qp()||Uo()}}const HD=zD;class KD{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Zn("unexpected MultiFactorSessionType")}}}class cm extends KD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cm(e)}_finalizeEnroll(e,n,r){return yP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return LP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class z0{constructor(){}static assertion(e){return cm._fromCredential(e)}}z0.FACTOR_ID="phone";var Av="@firebase/auth",Cv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QD(t){xr(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f0(t)},l=new IN(r,s,i,c);return EN(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new $n("auth-internal",e=>{const n=it(e.getProvider("auth").getImmediate());return(r=>new GD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Av,Cv,WD(t)),En(Av,Cv,"esm2017")}/**
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
 */const YD=5*60;gC("authIdTokenMaxAge");QD("Browser");/**
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
 */function ui(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=2e3;async function JD(t,e,n){var r;const{BuildInfo:s}=ui();Vn(e.sessionId,"AuthEvent did not contain a session ID");const i=await rO(e.sessionId),o={};return Uo()?o.ibi=s.packageName:Dc()?o.apn=s.packageName:Dt(t,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,wf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function ZD(t){const{BuildInfo:e}=ui(),n={};Uo()?n.iosBundleId=e.packageName:Dc()?n.androidPackageName=e.packageName:Dt(t,"operation-not-supported-in-this-environment"),await q0(t,n)}function eO(t){const{cordova:e}=ui();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(t):s=e.InAppBrowser.open(t,dN()?"_blank":"_system","location=yes"),n(s)})})}async function tO(t,e,n){const{cordova:r}=ui();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Nt(t,"redirect-cancelled-by-user"))},XD))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),Dc()&&document.addEventListener("visibilitychange",u,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{s()}}function nO(t){var e,n,r,s,i,o,a,c,l,u;const h=ui();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((i=(s=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function rO(t){const e=sO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}function sO(t){if(Vn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=20;class oO extends B0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function aO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:uO(),postBody:null,tenantId:t.tenantId,error:Nt(t,"no-auth-event")}}function cO(t,e){return bf()._set(If(t),e)}async function Rv(t){const e=await bf()._get(If(t));return e&&await bf()._remove(If(t)),e}function lO(t,e){var n,r;const s=dO(e);if(s.includes("/__/auth/callback")){const i=Hl(s),o=i.firebaseError?hO(decodeURIComponent(i.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Nt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:s,postBody:null}}return null}function uO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<iO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function bf(){return pn(nm)}function If(t){return ti("authEvent",t.config.apiKey,t.name)}function hO(t){try{return JSON.parse(t)}catch{return null}}function dO(t){const e=Hl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Hl(n).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Hl(s).link||s||r||n||t}function Hl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ki(n.join("?"))}/**
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
 */const fO=500;class pO{constructor(){this._redirectPersistence=ci,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=kh,this._overrideRedirectResult=am}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new oO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Dt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,s){nO(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),lD(),await this._originValidation(e);const o=aO(e,r,s);await cO(e,o);const a=await JD(e,o,n),c=await eO(a);return tO(e,i,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=ui(),o=setTimeout(async()=>{await Rv(e),n.onEvent(Nv())},fO),a=async u=>{clearTimeout(o);const h=await Rv(e);let d=null;h&&(u!=null&&u.url)&&(d=lO(h,u.url)),n.onEvent(d||Nv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,l=`${i.packageName.toLowerCase()}://`;ui().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const mO=pO;function Nv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Nt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t,e){it(t)._logFramework(e)}var yO="@firebase/auth-compat",vO="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=1e3;function Pa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function wO(){return Pa()==="http:"||Pa()==="https:"}function H0(t=Qe()){return!!((Pa()==="file:"||Pa()==="ionic:"||Pa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function bO(){return Vp()||yh()}function IO(){return Vb()&&(document==null?void 0:document.documentMode)===11}function EO(t=Qe()){return/Edge\/\d+/.test(t)}function TO(t=Qe()){return IO()||EO(t)}function K0(){try{const t=self.localStorage,e=Lc();if(t)return t.setItem(e,"1"),t.removeItem(e),TO()?Za():!0}catch{return lm()&&Za()}return!1}function lm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Dd(){return(wO()||$b()||H0())&&!bO()&&K0()&&!lm()}function G0(){return H0()&&typeof document<"u"}async function xO(){return G0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},_O);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function SO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={LOCAL:"local",NONE:"none",SESSION:"session"},na=O,W0="persistence";function kO(t,e){if(na(Object.values(dn).includes(e),t,"invalid-persistence-type"),Vp()){na(e!==dn.SESSION,t,"unsupported-persistence-type");return}if(yh()){na(e===dn.NONE,t,"unsupported-persistence-type");return}if(lm()){na(e===dn.NONE||e===dn.LOCAL&&Za(),t,"unsupported-persistence-type");return}na(e===dn.NONE||K0(),t,"unsupported-persistence-type")}async function Ef(t){await t._initializationPromise;const e=Q0(),n=ti(W0,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function AO(t,e){const n=Q0();if(!n)return[];const r=ti(W0,t,e);switch(n.getItem(r)){case dn.NONE:return[fo];case dn.LOCAL:return[oc,ci];case dn.SESSION:return[ci];default:return[]}}function Q0(){var t;try{return((t=SO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=O;class Jr{constructor(){this.browserResolver=pn(HD),this.cordovaResolver=pn(mO),this.underlyingResolver=null,this._redirectPersistence=ci,this._completeRedirectFn=kh,this._overrideRedirectResult=am}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,s)}async _openRedirect(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,s)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return G0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return CO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await xO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){return t.unwrap()}function RO(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t){return X0(t)}function PO(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new DO(t,mP(t,e))}else if(r){const s=X0(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function X0(t){const{_tokenResponse:e}=t instanceof Ft?t.customData:t;if(!e)return null;if(!(t instanceof Ft)&&"temporaryProof"in e&&"phoneNumber"in e)return li.credentialFromResult(t);const n=e.providerId;if(!n||n===ta.PASSWORD)return null;let r;switch(n){case ta.GOOGLE:r=Qn;break;case ta.FACEBOOK:r=Wn;break;case ta.GITHUB:r=Yn;break;case ta.TWITTER:r=Xn;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?n.startsWith("saml.")?po._create(n,a):ur._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:s,accessToken:i}):new Zi(n).credential({idToken:s,accessToken:i,rawNonce:c})}return t instanceof Ft?r.credentialFromError(t):r.credentialFromResult(t)}function Yt(t,e){return e.catch(n=>{throw n instanceof Ft&&PO(t,n),n}).then(n=>{const r=n.operationType,s=n.user;return{operationType:r,credential:NO(n),additionalUserInfo:pP(n),user:yr.getOrCreate(s)}})}async function Tf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Yt(t,n.confirm(r))}}class DO{constructor(e,n){this.resolver=n,this.auth=RO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Yt(Y0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this._delegate=e,this.multiFactor=_P(e)}static getOrCreate(e){return yr.USER_MAP.has(e)||yr.USER_MAP.set(e,new yr(e)),yr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Yt(this.auth,x0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Tf(this.auth,YP(this._delegate,e,n))}async linkWithPopup(e){return Yt(this.auth,iD(this._delegate,e,Jr))}async linkWithRedirect(e){return await Ef(it(this.auth)),pD(this._delegate,e,Jr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Yt(this.auth,S0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Tf(this.auth,XP(this._delegate,e,n))}reauthenticateWithPopup(e){return Yt(this.auth,sD(this._delegate,e,Jr))}async reauthenticateWithRedirect(e){return await Ef(it(this.auth)),dD(this._delegate,e,Jr)}sendEmailVerification(e){return rP(this._delegate,e)}async unlink(e){return await qN(this._delegate,e),this}updateEmail(e){return aP(this._delegate,e)}updatePassword(e){return cP(this._delegate,e)}updatePhoneNumber(e){return JP(this._delegate,e)}updateProfile(e){return oP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return sP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}yr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=O;class xf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ra(r,"invalid-api-key",{appName:e.name}),ra(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?Jr:void 0;this._delegate=n.initialize({options:{persistence:OO(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(GR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?yr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){TN(this._delegate,e,n)}applyActionCode(e){return WN(this._delegate,e)}checkActionCode(e){return k0(this._delegate,e)}confirmPasswordReset(e,n){return GN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Yt(this._delegate,YN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return nP(this._delegate,e)}isSignInWithEmailLink(e){return ZN(this._delegate,e)}async getRedirectResult(){ra(Dd(),this._delegate,"operation-not-supported-in-this-environment");const e=await gD(this._delegate,Jr);return e?Yt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){gO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:s,error:i,complete:o}=Pv(e,n,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,n,r){const{next:s,error:i,complete:o}=Pv(e,n,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,n){return JN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return KN(this._delegate,e,n||void 0)}async setPersistence(e){kO(this._delegate,e);let n;switch(e){case dn.SESSION:n=ci;break;case dn.LOCAL:n=await pn(oc)._isAvailable()?oc:nm;break;case dn.NONE:n=fo;break;default:return Dt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Yt(this._delegate,jN(this._delegate))}signInWithCredential(e){return Yt(this._delegate,Eh(this._delegate,e))}signInWithCustomToken(e){return Yt(this._delegate,HN(this._delegate,e))}signInWithEmailAndPassword(e,n){return Yt(this._delegate,XN(this._delegate,e,n))}signInWithEmailLink(e,n){return Yt(this._delegate,eP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Tf(this._delegate,QP(this._delegate,e,n))}async signInWithPopup(e){return ra(Dd(),this._delegate,"operation-not-supported-in-this-environment"),Yt(this._delegate,rD(this._delegate,e,Jr))}async signInWithRedirect(e){return ra(Dd(),this._delegate,"operation-not-supported-in-this-environment"),await Ef(this._delegate),uD(this._delegate,e,Jr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return QN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}xf.Persistence=dn;function Pv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const s=r;return{next:o=>s(o&&yr.getOrCreate(o)),error:e,complete:n}}function OO(t,e){const n=AO(t,e);if(typeof self<"u"&&!n.includes(oc)&&n.push(oc),typeof window<"u")for(const r of[nm,ci])n.includes(r)||n.push(r);return n.includes(fo)||n.push(fo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.providerId="phone",this._delegate=new li(Y0(Mt.auth()))}static credential(e,n){return li.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}um.PHONE_SIGN_IN_METHOD=li.PHONE_SIGN_IN_METHOD;um.PROVIDER_ID=li.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=O;class MO{constructor(e,n,r=Mt.app()){var s;LO((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new GP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO="auth-compat";function FO(t){t.INTERNAL.registerComponent(new $n(UO,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new xf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Mi.EMAIL_SIGNIN,PASSWORD_RESET:Mi.PASSWORD_RESET,RECOVER_EMAIL:Mi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Mi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Mi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Mi.VERIFY_EMAIL}},EmailAuthProvider:bs,FacebookAuthProvider:Wn,GithubAuthProvider:Yn,GoogleAuthProvider:Qn,OAuthProvider:Zi,SAMLAuthProvider:vu,PhoneAuthProvider:um,PhoneMultiFactorGenerator:z0,RecaptchaVerifier:MO,TwitterAuthProvider:Xn,Auth:xf,AuthCredential:Fo,Error:Ft}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(yO,vO)}FO(Mt);var $O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,hm=hm||{},ce=$O||self;function Ah(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Uc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function VO(t){return Object.prototype.hasOwnProperty.call(t,Od)&&t[Od]||(t[Od]=++BO)}var Od="closure_uid_"+(1e9*Math.random()>>>0),BO=0;function jO(t,e,n){return t.call.apply(t.bind,arguments)}function qO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function $t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$t=jO:$t=qO,$t.apply(null,arguments)}function gl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function It(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Is(){this.s=this.s,this.o=this.o}var zO=0;Is.prototype.s=!1;Is.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zO!=0)&&VO(this)};Is.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const J0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ah(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};var HO=function(){if(!ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ce.addEventListener("test",()=>{},e),ce.removeEventListener("test",()=>{},e)}catch{}return t}();function ac(t){return/^[\s\xa0]*$/.test(t)}function Ch(){var t=ce.navigator;return t&&(t=t.userAgent)?t:""}function Jn(t){return Ch().indexOf(t)!=-1}function fm(t){return fm[" "](t),t}fm[" "]=function(){};function KO(t,e){var n=FL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var GO=Jn("Opera"),mo=Jn("Trident")||Jn("MSIE"),Z0=Jn("Edge"),Sf=Z0||mo,eI=Jn("Gecko")&&!(Ch().toLowerCase().indexOf("webkit")!=-1&&!Jn("Edge"))&&!(Jn("Trident")||Jn("MSIE"))&&!Jn("Edge"),WO=Ch().toLowerCase().indexOf("webkit")!=-1&&!Jn("Edge");function tI(){var t=ce.document;return t?t.documentMode:void 0}var kf;e:{var Ld="",Md=function(){var t=Ch();if(eI)return/rv:([^\);]+)(\)|;)/.exec(t);if(Z0)return/Edge\/([\d\.]+)/.exec(t);if(mo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WO)return/WebKit\/(\S+)/.exec(t);if(GO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Md&&(Ld=Md?Md[1]:""),mo){var Ud=tI();if(Ud!=null&&Ud>parseFloat(Ld)){kf=String(Ud);break e}}kf=Ld}var Af;if(ce.document&&mo){var Ov=tI();Af=Ov||parseInt(kf,10)||void 0}else Af=void 0;var QO=Af;function cc(t,e){if(Vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eI){e:{try{fm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cc.$.h.call(this)}}It(cc,Vt);var YO={2:"touch",3:"pen",4:"mouse"};cc.prototype.h=function(){cc.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fc="closure_listenable_"+(1e6*Math.random()|0),XO=0;function JO(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++XO,this.fa=this.ia=!1}function Rh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ZO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nI(t){const e={};for(const n in t)e[n]=t[n];return e}const Lv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rI(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Lv.length;i++)n=Lv[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nh(t){this.src=t,this.g={},this.h=0}Nh.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Rf(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new JO(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Cf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=J0(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Rh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rf(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var mm="closure_lm_"+(1e6*Math.random()|0),Fd={};function sI(t,e,n,r,s){if(r&&r.once)return oI(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)sI(t,e[i],n,r,s);return null}return n=vm(n),t&&t[Fc]?t.O(e,n,Uc(r)?!!r.capture:!!r,s):iI(t,e,n,!1,r,s)}function iI(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Uc(s)?!!s.capture:!!s,a=ym(t);if(a||(t[mm]=a=new Nh(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=eL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)HO||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(cI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eL(){function t(n){return e.call(t.src,t.listener,n)}const e=tL;return t}function oI(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)oI(t,e[i],n,r,s);return null}return n=vm(n),t&&t[Fc]?t.P(e,n,Uc(r)?!!r.capture:!!r,s):iI(t,e,n,!0,r,s)}function aI(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)aI(t,e[i],n,r,s);else r=Uc(r)?!!r.capture:!!r,n=vm(n),t&&t[Fc]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Rf(i,n,r,s),-1<n&&(Rh(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ym(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rf(e,n,r,s)),(n=-1<t?e[t]:null)&&gm(n))}function gm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fc])Cf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ym(e))?(Cf(n,t),n.h==0&&(n.src=null,e[mm]=null)):Rh(t)}}}function cI(t){return t in Fd?Fd[t]:Fd[t]="on"+t}function tL(t,e){if(t.fa)t=!0;else{e=new cc(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gm(t),t=n.call(r,e)}return t}function ym(t){return t=t[mm],t instanceof Nh?t:null}var $d="__closure_events_fn_"+(1e9*Math.random()>>>0);function vm(t){return typeof t=="function"?t:(t[$d]||(t[$d]=function(e){return t.handleEvent(e)}),t[$d])}function bt(){Is.call(this),this.i=new Nh(this),this.S=this,this.J=null}It(bt,Is);bt.prototype[Fc]=!0;bt.prototype.removeEventListener=function(t,e,n,r){aI(this,t,e,n,r)};function Pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Vt(e,t);else if(e instanceof Vt)e.target=e.target||t;else{var s=e;e=new Vt(r,t),rI(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=yl(o,r,!0,e)&&s}if(o=e.g=t,s=yl(o,r,!0,e)&&s,s=yl(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=yl(o,r,!1,e)&&s}bt.prototype.N=function(){if(bt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rh(n[r]);delete t.g[e],t.h--}}this.J=null};bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};bt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Cf(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var _m=ce.JSON.stringify;class nL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function rL(){var t=wm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sL{constructor(){this.h=this.g=null}add(e,n){const r=lI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lI=new nL(()=>new iL,t=>t.reset());class iL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function aL(t){ce.setTimeout(()=>{throw t},0)}let lc,uc=!1,wm=new sL,uI=()=>{const t=ce.Promise.resolve(void 0);lc=()=>{t.then(cL)}};var cL=()=>{for(var t;t=rL();){try{t.h.call(t.g)}catch(n){aL(n)}var e=lI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uc=!1};function Ph(t,e){bt.call(this),this.h=t||1,this.g=e||ce,this.j=$t(this.qb,this),this.l=Date.now()}It(Ph,bt);q=Ph.prototype;q.ga=!1;q.T=null;q.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pt(this,"tick"),this.ga&&(bm(this),this.start()))}};q.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}q.N=function(){Ph.$.N.call(this),bm(this),delete this.g};function Im(t,e,n){if(typeof t=="function")n&&(t=$t(t,n));else if(t&&typeof t.handleEvent=="function")t=$t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ce.setTimeout(t,e||0)}function hI(t){t.g=Im(()=>{t.g=null,t.i&&(t.i=!1,hI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lL extends Is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hI(this)}N(){super.N(),this.g&&(ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hc(t){Is.call(this),this.h=t,this.g={}}It(hc,Is);var Mv=[];function dI(t,e,n,r){Array.isArray(n)||(n&&(Mv[0]=n.toString()),n=Mv);for(var s=0;s<n.length;s++){var i=sI(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function fI(t){pm(t.g,function(e,n){this.g.hasOwnProperty(n)&&gm(e)},t),t.g={}}hc.prototype.N=function(){hc.$.N.call(this),fI(this)};hc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dh(){this.g=!0}Dh.prototype.Ea=function(){this.g=!1};function uL(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function hL(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Gi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fL(t,n)+(r?" "+r:"")})}function dL(t,e){t.info(function(){return"TIMEOUT: "+e})}Dh.prototype.info=function(){};function fL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return _m(n)}catch{return e}}var ki={},Uv=null;function Oh(){return Uv=Uv||new bt}ki.Ta="serverreachability";function pI(t){Vt.call(this,ki.Ta,t)}It(pI,Vt);function dc(t){const e=Oh();Pt(e,new pI(e))}ki.STAT_EVENT="statevent";function mI(t,e){Vt.call(this,ki.STAT_EVENT,t),this.stat=e}It(mI,Vt);function Kt(t){const e=Oh();Pt(e,new mI(e,t))}ki.Ua="timingevent";function gI(t,e){Vt.call(this,ki.Ua,t),this.size=e}It(gI,Vt);function $c(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ce.setTimeout(function(){t()},e)}var Lh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},yI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Em(){}Em.prototype.h=null;function Fv(t){return t.h||(t.h=t.i())}function vI(){}var Vc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Tm(){Vt.call(this,"d")}It(Tm,Vt);function xm(){Vt.call(this,"c")}It(xm,Vt);var Nf;function Mh(){}It(Mh,Em);Mh.prototype.g=function(){return new XMLHttpRequest};Mh.prototype.i=function(){return{}};Nf=new Mh;function Bc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new hc(this),this.P=pL,t=Sf?125:void 0,this.V=new Ph(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _I}function _I(){this.i=null,this.g="",this.h=!1}var pL=45e3,Pf={},Iu={};q=Bc.prototype;q.setTimeout=function(t){this.P=t};function Df(t,e,n){t.L=1,t.v=Fh(kr(e)),t.s=n,t.S=!0,wI(t,null)}function wI(t,e){t.G=Date.now(),jc(t),t.A=kr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),AI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new _I,t.g=QI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new lL($t(t.Pa,t,t.g),t.O)),dI(t.U,t.g,"readystatechange",t.nb),e=t.I?nI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),dc(),uL(t.j,t.u,t.A,t.m,t.W,t.s)}q.nb=function(t){t=t.target;const e=this.M;e&&er(t)==3?e.l():this.Pa(t)};q.Pa=function(t){try{if(t==this.g)e:{const u=er(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sf||this.g&&(this.h.h||this.g.ja()||jv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?dc(3):dc(2)),Uh(this);var n=this.g.da();this.ca=n;t:if(bI(this)){var r=jv(this.g);t="";var s=r.length,i=er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gs(this),Da(this);var o="";break t}this.h.i=new ce.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,hL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ac(a)){var l=a;break t}}l=null}if(n=l)Gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Of(this,n);else{this.i=!1,this.o=3,Kt(12),Gs(this),Da(this);break e}}this.S?(II(this,u,o),Sf&&this.i&&u==3&&(dI(this.U,this.V,"tick",this.mb),this.V.start())):(Gi(this.j,this.m,o,null),Of(this,o)),u==4&&Gs(this),this.i&&!this.J&&(u==4?HI(this.l,this):(this.i=!1,jc(this)))}else LL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),Gs(this),Da(this)}}}catch{}finally{}};function bI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function II(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=mL(t,n),s==Iu){e==4&&(t.o=4,Kt(14),r=!1),Gi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Pf){t.o=4,Kt(15),Gi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gi(t.j,t.m,s,null),Of(t,s);bI(t)&&s!=Iu&&s!=Pf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nm(e),e.M=!0,Kt(11))):(Gi(t.j,t.m,n,"[Invalid Chunked Response]"),Gs(t),Da(t))}q.mb=function(){if(this.g){var t=er(this.g),e=this.g.ja();this.C<e.length&&(Uh(this),II(this,t,e),this.i&&t!=4&&jc(this))}};function mL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Iu:(n=Number(e.substring(n,r)),isNaN(n)?Pf:(r+=1,r+n>e.length?Iu:(e=e.slice(r,r+n),t.C=r+n,e)))}q.cancel=function(){this.J=!0,Gs(this)};function jc(t){t.Y=Date.now()+t.P,EI(t,t.P)}function EI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$c($t(t.lb,t),e)}function Uh(t){t.B&&(ce.clearTimeout(t.B),t.B=null)}q.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(dL(this.j,this.A),this.L!=2&&(dc(),Kt(17)),Gs(this),this.o=2,Da(this)):EI(this,this.Y-t)};function Da(t){t.l.H==0||t.J||HI(t.l,t)}function Gs(t){Uh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bm(t.V),fI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Of(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Lf(n.i,t))){if(!t.K&&Lf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)xu(n),Bh(n);else break e;Rm(n),Kt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=$c($t(n.ib,n),6e3));if(1>=NI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ws(n,11)}else if((t.K||n.g==t)&&xu(n),!ac(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sm(i,i.h),i.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ve(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=WI(r,r.J?r.pa:null,r.Y),o.K){PI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Uh(a),jc(a)),r.g=o}else qI(r);0<n.j.length&&jh(n)}else l[0]!="stop"&&l[0]!="close"||Ws(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ws(n,7):Cm(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}dc(4)}catch{}}function gL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ah(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function yL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ah(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function TI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ah(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yL(t),r=gL(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var xI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ri(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ri){this.h=t.h,Eu(this,t.j),this.s=t.s,this.g=t.g,Tu(this,t.m),this.l=t.l;var e=t.i,n=new fc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$v(this,n),this.o=t.o}else t&&(e=String(t).match(xI))?(this.h=!1,Eu(this,e[1]||"",!0),this.s=va(e[2]||""),this.g=va(e[3]||"",!0),Tu(this,e[4]),this.l=va(e[5]||"",!0),$v(this,e[6]||"",!0),this.o=va(e[7]||"")):(this.h=!1,this.i=new fc(null,this.h))}ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_a(e,Vv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_a(e,Vv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_a(n,n.charAt(0)=="/"?bL:wL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_a(n,EL)),t.join("")};function kr(t){return new ri(t)}function Eu(t,e,n){t.j=n?va(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $v(t,e,n){e instanceof fc?(t.i=e,TL(t.i,t.h)):(n||(e=_a(e,IL)),t.i=new fc(e,t.h))}function Ve(t,e,n){t.i.set(e,n)}function Fh(t){return Ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function va(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _a(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_L),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _L(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vv=/[#\/\?@]/g,wL=/[#\?:]/g,bL=/[#\?]/g,IL=/[#\?@]/g,EL=/#/g;function fc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Es(t){t.g||(t.g=new Map,t.h=0,t.i&&vL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=fc.prototype;q.add=function(t,e){Es(this),this.i=null,t=Vo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function SI(t,e){Es(t),e=Vo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kI(t,e){return Es(t),e=Vo(t,e),t.g.has(e)}q.forEach=function(t,e){Es(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};q.ta=function(){Es(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};q.Z=function(t){Es(this);let e=[];if(typeof t=="string")kI(this,t)&&(e=e.concat(this.g.get(Vo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return Es(this),this.i=null,t=Vo(this,t),kI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function AI(t,e,n){SI(t,e),0<n.length&&(t.i=null,t.g.set(Vo(t,e),dm(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Vo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TL(t,e){e&&!t.j&&(Es(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(SI(this,r),AI(this,s,n))},t)),t.j=e}var xL=class{constructor(t,e){this.g=t,this.map=e}};function CI(t){this.l=t||SL,ce.PerformanceNavigationTiming?(t=ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ce.g&&ce.g.Ka&&ce.g.Ka()&&ce.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SL=10;function RI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function NI(t){return t.h?1:t.g?t.g.size:0}function Lf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sm(t,e){t.g?t.g.add(e):t.h=e}function PI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}CI.prototype.cancel=function(){if(this.i=DI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function DI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dm(t.i)}var kL=class{stringify(t){return ce.JSON.stringify(t,void 0)}parse(t){return ce.JSON.parse(t,void 0)}};function AL(){this.g=new kL}function CL(t,e,n){const r=n||"";try{TI(t,function(s,i){let o=s;Uc(s)&&(o=_m(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function RL(t,e){const n=new Dh;if(ce.Image){const r=new Image;r.onload=gl(vl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gl(vl,n,r,"TestLoadImage: error",!1,e),r.onabort=gl(vl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gl(vl,n,r,"TestLoadImage: timeout",!1,e),ce.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vl(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function qc(t){this.l=t.fc||null,this.j=t.ob||!1}It(qc,Em);qc.prototype.g=function(){return new $h(this.l,this.j)};qc.prototype.i=function(t){return function(){return t}}({});function $h(t,e){bt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=km,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}It($h,bt);var km=0;q=$h.prototype;q.open=function(t,e){if(this.readyState!=km)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pc(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ce).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zc(this)),this.readyState=km};q.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pc(this)),this.g&&(this.readyState=3,pc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ce.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function OI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}q.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zc(this):pc(this),this.readyState==3&&OI(this)}};q.Za=function(t){this.g&&(this.response=this.responseText=t,zc(this))};q.Ya=function(t){this.g&&(this.response=t,zc(this))};q.ka=function(){this.g&&zc(this)};function zc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pc(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($h.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NL=ce.JSON.parse;function Ze(t){bt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=LI,this.L=this.M=!1}It(Ze,bt);var LI="",PL=/^https?$/i,DL=["POST","PUT"];q=Ze.prototype;q.Oa=function(t){this.M=t};q.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nf.g(),this.C=this.u?Fv(this.u):Fv(Nf),this.g.onreadystatechange=$t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Bv(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ce.FormData&&t instanceof ce.FormData,!(0<=J0(DL,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{FI(this),0<this.B&&((this.L=OL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$t(this.ua,this)):this.A=Im(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bv(this,i)}};function OL(t){return mo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.ua=function(){typeof hm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))};function Bv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,MI(t),Vh(t)}function MI(t){t.F||(t.F=!0,Pt(t,"complete"),Pt(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),Vh(this))};q.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vh(this,!0)),Ze.$.N.call(this)};q.La=function(){this.s||(this.G||this.v||this.l?UI(this):this.kb())};q.kb=function(){UI(this)};function UI(t){if(t.h&&typeof hm<"u"&&(!t.C[1]||er(t)!=4||t.da()!=2)){if(t.v&&er(t)==4)Im(t.La,0,t);else if(Pt(t,"readystatechange"),er(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(xI)[1]||null;!s&&ce.self&&ce.self.location&&(s=ce.self.location.protocol.slice(0,-1)),r=!PL.test(s?s.toLowerCase():"")}n=r}if(n)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var i=2<er(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",MI(t)}}finally{Vh(t)}}}}function Vh(t,e){if(t.g){FI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function FI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ce.clearTimeout(t.A),t.A=null)}q.isActive=function(){return!!this.g};function er(t){return t.g?t.g.readyState:0}q.da=function(){try{return 2<er(this)?this.g.status:-1}catch{return-1}};q.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NL(e)}};function jv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case LI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function LL(t){const e={};t=(t.g&&2<=er(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ac(t[r]))continue;var n=oL(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}ZO(e,function(r){return r.join(", ")})}q.Ia=function(){return this.m};q.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $I(t){let e="";return pm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Am(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$I(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ve(t,e,n))}function sa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function VI(t){this.Ga=0,this.j=[],this.l=new Dh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=sa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=sa("baseRetryDelayMs",5e3,t),this.hb=sa("retryDelaySeedMs",1e4,t),this.eb=sa("forwardChannelMaxRetries",2,t),this.xa=sa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new CI(t&&t.concurrentRequestLimit),this.Ja=new AL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}q=VI.prototype;q.ra=8;q.H=1;function Cm(t){if(BI(t),t.H==3){var e=t.W++,n=kr(t.I);if(Ve(n,"SID",t.K),Ve(n,"RID",e),Ve(n,"TYPE","terminate"),Hc(t,n),e=new Bc(t,t.l,e),e.L=2,e.v=Fh(kr(n)),n=!1,ce.navigator&&ce.navigator.sendBeacon)try{n=ce.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ce.Image&&(new Image().src=e.v,n=!0),n||(e.g=QI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),jc(e)}GI(t)}function Bh(t){t.g&&(Nm(t),t.g.cancel(),t.g=null)}function BI(t){Bh(t),t.u&&(ce.clearTimeout(t.u),t.u=null),xu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ce.clearTimeout(t.m),t.m=null)}function jh(t){if(!RI(t.i)&&!t.m){t.m=!0;var e=t.Na;lc||uI(),uc||(lc(),uc=!0),wm.add(e,t),t.C=0}}function ML(t,e){return NI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=$c($t(t.Na,t,e),KI(t,t.C)),t.C++,!0)}q.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Bc(this,this.l,t);let i=this.s;if(this.U&&(i?(i=nI(i),rI(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jI(this,s,e),n=kr(this.I),Ve(n,"RID",t),Ve(n,"CVER",22),this.F&&Ve(n,"X-HTTP-Session-Id",this.F),Hc(this,n),i&&(this.O?e="headers="+encodeURIComponent(String($I(i)))+"&"+e:this.o&&Am(n,this.o,i)),Sm(this.i,s),this.bb&&Ve(n,"TYPE","init"),this.P?(Ve(n,"$req",e),Ve(n,"SID","null"),s.aa=!0,Df(s,n,null)):Df(s,n,e),this.H=2}}else this.H==3&&(t?qv(this,t):this.j.length==0||RI(this.i)||qv(this))};function qv(t,e){var n;e?n=e.m:n=t.W++;const r=kr(t.I);Ve(r,"SID",t.K),Ve(r,"RID",n),Ve(r,"AID",t.V),Hc(t,r),t.o&&t.s&&Am(r,t.o,t.s),n=new Bc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=jI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sm(t.i,n),Df(n,r,e)}function Hc(t,e){t.na&&pm(t.na,function(n,r){Ve(e,r,n)}),t.h&&TI({},function(n,r){Ve(e,r,n)})}function jI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?$t(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{CL(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function qI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;lc||uI(),uc||(lc(),uc=!0),wm.add(e,t),t.A=0}}function Rm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=$c($t(t.Ma,t),KI(t,t.A)),t.A++,!0)}q.Ma=function(){if(this.u=null,zI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=$c($t(this.jb,this),t)}};q.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),Bh(this),zI(this))};function Nm(t){t.B!=null&&(ce.clearTimeout(t.B),t.B=null)}function zI(t){t.g=new Bc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kr(t.wa);Ve(e,"RID","rpc"),Ve(e,"SID",t.K),Ve(e,"AID",t.V),Ve(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ve(e,"TO",t.qa),Ve(e,"TYPE","xmlhttp"),Hc(t,e),t.o&&t.s&&Am(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Fh(kr(e)),n.s=null,n.S=!0,wI(n,t)}q.ib=function(){this.v!=null&&(this.v=null,Bh(this),Rm(this),Kt(19))};function xu(t){t.v!=null&&(ce.clearTimeout(t.v),t.v=null)}function HI(t,e){var n=null;if(t.g==e){xu(t),Nm(t),t.g=null;var r=2}else if(Lf(t.i,e))n=e.F,PI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Oh(),Pt(r,new gI(r,n)),jh(t)}else qI(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&ML(t,e)||r==2&&Rm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ws(t,5);break;case 4:Ws(t,10);break;case 3:Ws(t,6);break;default:Ws(t,2)}}}function KI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ws(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=$t(t.pb,t);n||(n=new ri("//www.google.com/images/cleardot.gif"),ce.location&&ce.location.protocol=="http"||Eu(n,"https"),Fh(n)),RL(n.toString(),r)}else Kt(2);t.H=0,t.h&&t.h.za(e),GI(t),BI(t)}q.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function GI(t){if(t.H=0,t.ma=[],t.h){const e=DI(t.i);(e.length!=0||t.j.length!=0)&&(Dv(t.ma,e),Dv(t.ma,t.j),t.i.i.length=0,dm(t.j),t.j.length=0),t.h.ya()}}function WI(t,e,n){var r=n instanceof ri?kr(n):new ri(n);if(r.g!="")e&&(r.g=e+"."+r.g),Tu(r,r.m);else{var s=ce.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ri(null);r&&Eu(i,r),e&&(i.g=e),s&&Tu(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ve(r,n,e),Ve(r,"VER",t.ra),Hc(t,r),r}function QI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ze(new qc({ob:!0})):new Ze(t.va),e.Oa(t.J),e}q.isActive=function(){return!!this.h&&this.h.isActive(this)};function YI(){}q=YI.prototype;q.Ba=function(){};q.Aa=function(){};q.za=function(){};q.ya=function(){};q.isActive=function(){return!0};q.Va=function(){};function Su(){if(mo&&!(10<=Number(QO)))throw Error("Environmental error: no available transport.")}Su.prototype.g=function(t,e){return new gn(t,e)};function gn(t,e){bt.call(this),this.g=new VI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ac(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ac(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bo(this)}It(gn,bt);gn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=WI(t,null,t.Y),jh(t)};gn.prototype.close=function(){Cm(this.g)};gn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_m(t),t=n);e.j.push(new xL(e.fb++,t)),e.H==3&&jh(e)};gn.prototype.N=function(){this.g.h=null,delete this.j,Cm(this.g),delete this.g,gn.$.N.call(this)};function XI(t){Tm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}It(XI,Tm);function JI(){xm.call(this),this.status=1}It(JI,xm);function Bo(t){this.g=t}It(Bo,YI);Bo.prototype.Ba=function(){Pt(this.g,"a")};Bo.prototype.Aa=function(t){Pt(this.g,new XI(t))};Bo.prototype.za=function(t){Pt(this.g,new JI)};Bo.prototype.ya=function(){Pt(this.g,"b")};function UL(){this.blockSize=-1}function Bn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}It(Bn,UL);Bn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Bn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Vd(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Vd(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Vd(this,r),s=0;break}}this.h=s,this.i+=e};Bn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function De(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var FL={};function Pm(t){return-128<=t&&128>t?KO(t,function(e){return new De([e|0],0>e?-1:0)}):new De([t|0],0>t?-1:0)}function tr(t){if(isNaN(t)||!isFinite(t))return no;if(0>t)return At(tr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mf;return new De(e,0)}function ZI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return At(ZI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=tr(Math.pow(e,8)),r=no,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=tr(Math.pow(e,i)),r=r.R(i).add(tr(o))):(r=r.R(n),r=r.add(tr(o)))}return r}var Mf=4294967296,no=Pm(0),Uf=Pm(1),zv=Pm(16777216);q=De.prototype;q.ea=function(){if(wn(this))return-At(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mf+r)*e,e*=Mf}return t};q.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vr(this))return"0";if(wn(this))return"-"+At(this).toString(t);for(var e=tr(Math.pow(t,6)),n=this,r="";;){var s=Au(n,e).g;n=ku(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,vr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};q.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function wn(t){return t.h==-1}q.X=function(t){return t=ku(this,t),wn(t)?-1:vr(t)?0:1};function At(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new De(n,~t.h).add(Uf)}q.abs=function(){return wn(this)?At(this):this};q.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new De(n,n[n.length-1]&-2147483648?-1:0)};function ku(t,e){return t.add(At(e))}q.R=function(t){if(vr(this)||vr(t))return no;if(wn(this))return wn(t)?At(this).R(At(t)):At(At(this).R(t));if(wn(t))return At(this.R(At(t)));if(0>this.X(zv)&&0>t.X(zv))return tr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,_l(n,2*r+2*s),n[2*r+2*s+1]+=i*c,_l(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,_l(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,_l(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new De(n,0)};function _l(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ia(t,e){this.g=t,this.h=e}function Au(t,e){if(vr(e))throw Error("division by zero");if(vr(t))return new ia(no,no);if(wn(t))return e=Au(At(t),e),new ia(At(e.g),At(e.h));if(wn(e))return e=Au(t,At(e)),new ia(At(e.g),e.h);if(30<t.g.length){if(wn(t)||wn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Uf,r=e;0>=r.X(t);)n=Hv(n),r=Hv(r);var s=Ui(n,1),i=Ui(r,1);for(r=Ui(r,2),n=Ui(n,2);!vr(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ui(r,1),n=Ui(n,1)}return e=ku(t,s.R(e)),new ia(s,e)}for(s=no;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=tr(n),o=i.R(e);wn(o)||0<o.X(t);)n-=r,i=tr(n),o=i.R(e);vr(i)&&(i=Uf),s=s.add(i),t=ku(t,o)}return new ia(s,t)}q.gb=function(t){return Au(this,t).h};q.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new De(n,this.h&t.h)};q.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new De(n,this.h|t.h)};q.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new De(n,this.h^t.h)};function Hv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new De(n,t.h)}function Ui(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new De(s,t.h)}Su.prototype.createWebChannel=Su.prototype.g;gn.prototype.send=gn.prototype.u;gn.prototype.open=gn.prototype.m;gn.prototype.close=gn.prototype.close;Lh.NO_ERROR=0;Lh.TIMEOUT=8;Lh.HTTP_ERROR=6;yI.COMPLETE="complete";vI.EventType=Vc;Vc.OPEN="a";Vc.CLOSE="b";Vc.ERROR="c";Vc.MESSAGE="d";bt.prototype.listen=bt.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;Bn.prototype.digest=Bn.prototype.l;Bn.prototype.reset=Bn.prototype.reset;Bn.prototype.update=Bn.prototype.j;De.prototype.add=De.prototype.add;De.prototype.multiply=De.prototype.R;De.prototype.modulo=De.prototype.gb;De.prototype.compare=De.prototype.X;De.prototype.toNumber=De.prototype.ea;De.prototype.toString=De.prototype.toString;De.prototype.getBits=De.prototype.D;De.fromNumber=tr;De.fromString=ZI;var $L=function(){return new Su},VL=function(){return Oh()},Bd=Lh,BL=yI,jL=ki,Kv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qL=qc,wl=vI,zL=Ze,HL=Bn,ro=De;const Gv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new vh("@firebase/firestore");function Ff(){return ds.logLevel}function KL(t){ds.setLogLevel(t)}function P(t,...e){if(ds.logLevel<=be.DEBUG){const n=e.map(Dm);ds.debug(`Firestore (${jo}): ${t}`,...n)}}function tt(t,...e){if(ds.logLevel<=be.ERROR){const n=e.map(Dm);ds.error(`Firestore (${jo}): ${t}`,...n)}}function jn(t,...e){if(ds.logLevel<=be.WARN){const n=e.map(Dm);ds.warn(`Firestore (${jo}): ${t}`,...n)}}function Dm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: `+t;throw tt(e),new Error(e)}function Z(t,e){t||K()}function GL(t,e){t||K()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class QL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YL{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _t,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _t)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new eE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new gt(e)}}class XL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class JL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new XL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eM{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.T=n.token,new ZL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function go(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function nE(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ge(0,0))}static max(){return new X(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends mc{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const nM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends mc{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return nM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new R(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new R(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ie.fromString(e))}static fromName(e){return new B(Ie.fromString(e).popFirst(5))}static empty(){return new B(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ie(e.slice()))}}/**
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
 */class rE{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function $f(t){return t.fields.find(e=>e.kind===2)}function Ds(t){return t.fields.filter(e=>e.kind!==2)}rE.UNKNOWN_ID=-1;class rM{constructor(e,n){this.fieldPath=e,this.kind=n}}class Cu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Cu(0,yn.min())}}function sE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new yn(s,B.empty(),e)}function iE(t){return new yn(t.readTime,t.key,-1)}class yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yn(X.min(),B.empty(),-1)}static max(){return new yn(X.max(),B.empty(),-1)}}function Om(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==oE)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new _t,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Oa(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const s=Lm(r.target.error);this.v.reject(new Oa(e,s))}}static open(e,n,r,s){try{return new qh(n,e.transaction(s,r))}catch(i){throw new Oa(n,i)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new iM(n)}}class Dn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,Dn.S(Qe())===12.2&&tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Us(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Za())return!1;if(Dn.C())return!0;const e=Qe(),n=Dn.S(e),r=0<n&&n<10,s=Dn.N(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Oa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new R(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Oa(e,o))},s.onupgradeneeded=i=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.O(o,s.transaction,i.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=qh.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),b.reject(l))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class sM{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Us(this.L.delete())}}class Oa extends R{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function xs(t){return t.name==="IndexedDbTransactionError"}class iM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Us(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Us(this.store.add(e))}get(e){return Us(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Us(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Us(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.W(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new b((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.W(s,n)}Z(e){const n=this.cursor({});return new b((r,s)=>{n.onerror=i=>{const o=Lm(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new b((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new sM(a),l=n(a.primaryKey,a.value,c);if(l instanceof b){const u=l.catch(h=>(c.done(),b.reject(h)));r.push(u)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Us(t){return new b((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Lm(r.target.error);n(s)}})}let Wv=!1;function Lm(t){const e=Dn.S(Qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Wv||(Wv=!0,setTimeout(()=>{throw r},0)),r}}return t}class oM{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){xs(n)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Ts(n)}await this.et(6e4)})}}class aM{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let s=n,i=!0;return b.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(s,i)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=iE(i);Om(o,r)>0&&(r=o)}),new yn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Zt.ct=-1;function Kc(t){return t==null}function gc(t){return t===0&&1/t==-1/0}function cE(t){return typeof t=="number"&&Number.isInteger(t)&&!gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qv(e)),e=cM(t.get(n),e);return Qv(e)}function cM(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Qv(t){return t+""}function nr(t){const e=t.length;if(Z(e>=2),e===2)return Z(t.charAt(0)===""&&t.charAt(1)===""),Ie.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&K(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:K()}i=o+2}return new Ie(r)}/**
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
 */function Kl(t,e){return[t,Gt(e)]}function lE(t,e,n){return[t,Gt(e),n]}const lM={},uM=["prefixPath","collectionGroup","readTime","documentId"],hM=["prefixPath","collectionGroup","documentId"],dM=["collectionGroup","readTime","prefixPath","documentId"],fM=["canonicalId","targetId"],pM=["targetId","path"],mM=["path","targetId"],gM=["collectionId","parent"],yM=["indexId","uid"],vM=["uid","sequenceNumber"],_M=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],wM=["indexId","uid","orderedDocumentKey"],bM=["userId","collectionPath","documentId"],IM=["userId","collectionPath","largestBatchId"],EM=["userId","collectionGroup","largestBatchId"],uE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],TM=[...uE,"documentOverlays"],hE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dE=hE,xM=[...dE,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends aE{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function Et(t,e){const n=j(t);return Dn.M(n.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||kt.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bl(this.root,e,this.comparator,!0)}}class bl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??kt.RED,this.left=s??kt.EMPTY,this.right=i??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new kt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,s){return this}insert(t,e,n){return new kt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jv(this.data.getIterator())}getIteratorFrom(e){return new Jv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Jv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Fi(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new en([])}unionWith(e){let n=new qe(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pE("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const kM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fs(t){if(Z(!!t),typeof t=="string"){let e=0;const n=kM.exec(t);if(Z(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mm(t){const e=t.mapValue.fields.__previous_value__;return zh(e)?Mm(e):e}function yc(t){const e=fs(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ms{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Gl={nullValue:"NULL_VALUE"};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zh(t)?4:mE(t)?9007199254740991:10:K()}function hr(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yc(t).isEqual(yc(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=fs(r.timestampValue),o=fs(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return ps(r.bytesValue).isEqual(ps(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Je(r.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(r.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Je(r.integerValue)===Je(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Je(r.doubleValue),o=Je(s.doubleValue);return i===o?gc(i)===gc(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return go(t.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Xv(i)!==Xv(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!hr(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function vc(t,e){return(t.values||[]).find(n=>hr(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Je(s.integerValue||s.doubleValue),a=Je(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Zv(t.timestampValue,e.timestampValue);case 4:return Zv(yc(t),yc(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,i){const o=ps(s),a=ps(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=he(o[c],a[c]);if(l!==0)return l}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=he(Je(s.latitude),Je(i.latitude));return o!==0?o:he(Je(s.longitude),Je(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=gs(o[c],a[c]);if(l)return l}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Zr.mapValue&&i===Zr.mapValue)return 0;if(s===Zr.mapValue)return 1;if(i===Zr.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=he(a[u],l[u]);if(h!==0)return h;const d=gs(o[a[u]],c[l[u]]);if(d!==0)return d}return he(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function Zv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=fs(t),r=fs(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function yo(t){return Bf(t)}function Bf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=fs(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ps(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Bf(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Bf(r.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function di(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jf(t){return!!t&&"integerValue"in t}function _c(t){return!!t&&"arrayValue"in t}function e_(t){return!!t&&"nullValue"in t}function t_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wl(t){return!!t&&"mapValue"in t}function La(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ai(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=La(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=La(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function CM(t){return"nullValue"in t?Gl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?di(ms.empty(),B.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:K()}function RM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?di(ms.empty(),B.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Zr:K()}function n_(t,e){const n=gs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function r_(t,e){const n=gs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=La(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=La(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Wl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ai(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(La(this.value))}}function gE(t){const e=[];return Ai(t.fields,(n,r)=>{const s=new nt([n]);if(Wl(r)){const i=gE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Be(e,0,X.min(),X.min(),X.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new Be(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new Be(e,2,n,X.min(),X.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,X.min(),X.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ys{constructor(e,n){this.position=e,this.inclusive=n}}function s_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function i_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class so{constructor(e,n="asc"){this.field=e,this.dir=n}}function NM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yE{}class ye extends yE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PM(e,n,r):n==="array-contains"?new LM(e,r):n==="in"?new EE(e,r):n==="not-in"?new MM(e,r):n==="array-contains-any"?new UM(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DM(e,r):new OM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gs(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pe extends yE{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Pe(e,n)}matches(e){return vo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vo(t){return t.op==="and"}function qf(t){return t.op==="or"}function Um(t){return vE(t)&&vo(t)}function vE(t){for(const e of t.filters)if(e instanceof Pe)return!1;return!0}function zf(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(Um(t))return t.filters.map(e=>zf(e)).join(",");{const e=t.filters.map(n=>zf(n)).join(",");return`${t.op}(${e})`}}function _E(t,e){return t instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&hr(n.value,r.value)}(t,e):t instanceof Pe?function(n,r){return r instanceof Pe&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&_E(i,r.filters[o]),!0):!1}(t,e):void K()}function wE(t,e){const n=t.filters.concat(e);return Pe.create(n,t.op)}function bE(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${yo(e.value)}`}(t):t instanceof Pe?function(e){return e.op.toString()+" {"+e.getFilters().map(bE).join(" ,")+"}"}(t):"Filter"}class PM extends ye{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class DM extends ye{constructor(e,n){super(e,"in",n),this.keys=IE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OM extends ye{constructor(e,n){super(e,"not-in",n),this.keys=IE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class LM extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _c(n)&&vc(n.arrayValue,this.value)}}class EE extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vc(this.value.arrayValue,n)}}class MM extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(vc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vc(this.value.arrayValue,n)}}class UM extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_c(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vc(this.value.arrayValue,r))}}/**
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
 */class FM{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Hf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new FM(t,e,n,r,s,i,o)}function fi(t){const e=j(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Kc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),e.dt=n}return e.dt}function Gc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_E(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i_(t.startAt,e.startAt)&&i_(t.endAt,e.endAt)}function Ru(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Nu(t,e){return t.filters.filter(n=>n instanceof ye&&n.field.isEqual(e))}function o_(t,e,n){let r=Gl,s=!0;for(const i of Nu(t,e)){let o=Gl,a=!0;switch(i.op){case"<":case"<=":o=CM(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Gl}n_({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];n_({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function a_(t,e,n){let r=Zr,s=!0;for(const i of Nu(t,e)){let o=Zr,a=!0;switch(i.op){case">=":case">":o=RM(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Zr}r_({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];r_({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function TE(t,e,n,r,s,i,o,a){return new Or(t,e,n,r,s,i,o,a)}function qo(t){return new Or(t)}function c_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Hh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $m(t){return t.collectionGroup!==null}function si(t){const e=j(t);if(e.wt===null){e.wt=[];const n=Hh(e),r=Fm(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new so(n)),e.wt.push(new so(nt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new so(nt.keyField(),i))}}}return e.wt}function on(t){const e=j(t);if(!e._t)if(e.limitType==="F")e._t=Hf(e.path,e.collectionGroup,si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of si(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new so(i.field,o))}const r=e.endAt?new ys(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ys(e.startAt.position,e.startAt.inclusive):null;e._t=Hf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Kf(t,e){e.getFirstInequalityField(),Hh(t);const n=t.filters.concat([e]);return new Or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pu(t,e,n){return new Or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wc(t,e){return Gc(on(t),on(e))&&t.limitType===e.limitType}function xE(t){return`${fi(on(t))}|lt:${t.limitType}`}function Gf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>bE(r)).join(", ")}]`),Kc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),`Target(${n})`}(on(t))}; limitType=${t.limitType})`}function Qc(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):B.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of si(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=s_(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,si(n),r)||n.endAt&&!function(s,i,o){const a=s_(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,si(n),r))}(t,e)}function SE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kE(t){return(e,n)=>{let r=!1;for(const s of si(t)){const i=$M(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $M(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?gs(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=new Me(B.comparator);function tn(){return VM}const AE=new Me(B.comparator);function wa(...t){let e=AE;for(const n of t)e=e.insert(n.key,n);return e}function CE(t){let e=AE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rr(){return Ma()}function RE(){return Ma()}function Ma(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const BM=new Me(B.comparator),jM=new qe(B.comparator);function de(...t){let e=jM;for(const n of t)e=e.add(n);return e}const qM=new qe(he);function Vm(){return qM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function PE(t){return{integerValue:""+t}}function DE(t,e){return cE(e)?PE(e):NE(t,e)}/**
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
 */class Kh{constructor(){this._=void 0}}function zM(t,e,n){return t instanceof _o?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&zh(s)&&(s=Mm(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof pi?LE(t,e):t instanceof mi?ME(t,e):function(r,s){const i=OE(r,s),o=l_(i)+l_(r.gt);return jf(i)&&jf(r.gt)?PE(o):NE(r.serializer,o)}(t,e)}function HM(t,e,n){return t instanceof pi?LE(t,e):t instanceof mi?ME(t,e):n}function OE(t,e){return t instanceof wo?jf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class _o extends Kh{}class pi extends Kh{constructor(e){super(),this.elements=e}}function LE(t,e){const n=UE(e);for(const r of t.elements)n.some(s=>hr(s,r))||n.push(r);return{arrayValue:{values:n}}}class mi extends Kh{constructor(e){super(),this.elements=e}}function ME(t,e){let n=UE(e);for(const r of t.elements)n=n.filter(s=>!hr(s,r));return{arrayValue:{values:n}}}class wo extends Kh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function l_(t){return Je(t.integerValue||t.doubleValue)}function UE(t){return _c(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n){this.field=e,this.transform=n}}function KM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof pi&&r instanceof pi||n instanceof mi&&r instanceof mi?go(n.elements,r.elements,hr):n instanceof wo&&r instanceof wo?hr(n.gt,r.gt):n instanceof _o&&r instanceof _o}(t.transform,e.transform)}class GM{constructor(e,n){this.version=e,this.transformResults=n}}class Ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gh{}function FE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ho(t.key,Ke.none()):new zo(t.key,t.data,Ke.none());{const n=t.data,r=Ct.empty();let s=new qe(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new en(s.toArray()),Ke.none())}}function WM(t,e,n){t instanceof zo?function(r,s,i){const o=r.value.clone(),a=h_(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(r,s,i){if(!Ql(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=h_(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll($E(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ua(t,e,n,r){return t instanceof zo?function(s,i,o,a){if(!Ql(s.precondition,i))return o;const c=s.value.clone(),l=d_(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(s,i,o,a){if(!Ql(s.precondition,i))return o;const c=d_(s.fieldTransforms,a,i),l=i.data;return l.setAll($E(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Ql(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function QM(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=OE(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function u_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&go(n,r,(s,i)=>KM(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends Gh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends Gh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $E(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h_(t,e,n){const r=new Map;Z(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,HM(o,a,n[s]))}return r}function d_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zM(i,o,e))}return r}class Ho extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bm extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WM(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ua(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ua(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=FE(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(n,r)=>u_(n,r))&&go(this.baseMutations,e.baseMutations,(n,r)=>u_(n,r))}}class qm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Z(e.mutations.length===r.length);let s=BM;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new qm(e,n,r,s)}}/**
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
 */class zm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var lt,we;function VE(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function BE(t){if(t===void 0)return tt("GRPC error has no .code"),I.UNKNOWN;switch(t){case lt.OK:return I.OK;case lt.CANCELLED:return I.CANCELLED;case lt.UNKNOWN:return I.UNKNOWN;case lt.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case lt.INTERNAL:return I.INTERNAL;case lt.UNAVAILABLE:return I.UNAVAILABLE;case lt.UNAUTHENTICATED:return I.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case lt.NOT_FOUND:return I.NOT_FOUND;case lt.ALREADY_EXISTS:return I.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return I.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case lt.ABORTED:return I.ABORTED;case lt.OUT_OF_RANGE:return I.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return I.UNIMPLEMENTED;case lt.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(we=lt||(lt={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Hm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Il}static getOrCreateInstance(){return Il===null&&(Il=new Hm),Il}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Il=null;/**
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
 */function jE(){return new TextEncoder}/**
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
 */const XM=new ro([4294967295,4294967295],0);function f_(t){const e=jE().encode(t),n=new HL;return n.update(e),new Uint8Array(n.digest())}function p_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ro([n,r],0),new ro([s,i],0)]}class Km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ba(`Invalid padding: ${n}`);if(r<0)throw new ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ba(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ro.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(ro.fromNumber(r)));return s.compare(XM)===1&&(s=new ro([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=f_(e),[r,s]=p_(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Km(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=f_(e),[r,s]=p_(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Jc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xc(X.min(),s,new Me(he),tn(),de())}}class Jc{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jc(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class qE{constructor(e,n){this.targetId=e,this.Vt=n}}class zE{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class m_{constructor(){this.St=0,this.Dt=y_(),this.Ct=ft.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=de(),n=de(),r=de();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new Jc(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=y_()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class JM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=tn(),this.zt=g_(),this.Wt=new Me(he)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(Ru(o))if(s===0){const a=new B(o.path);this.Yt(r,a,Be.newNoDocument(a,X.min()))}else Z(s===1);else{const a=this.ie(r);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(n=Hm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,m,y,_,T;const k={localCacheCount:u,existenceFilterCount:h.count},A=h.unchangedNames;return A&&(k.bloomFilter={applied:l===0,hashCount:(d=A==null?void 0:A.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(m=(f=A==null?void 0:A.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&y!==void 0?y:0,padding:(T=(_=A==null?void 0:A.bits)===null||_===void 0?void 0:_.padding)!==null&&T!==void 0?T:0}),k}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=ps(i).toUint8Array()}catch(u){if(u instanceof pE)return jn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Km(c,o,a)}catch(u){return jn(u instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Ru(a.target)){const c=new B(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Be.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=de();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new Xc(e,n,this.Wt,this.jt,r);return this.jt=tn(),this.zt=g_(),this.Wt=new Me(he),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new m_,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new qe(he),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new m_),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function g_(){return new Me(B.comparator)}function y_(){return new Me(B.comparator)}const ZM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),e2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),t2=(()=>({and:"AND",or:"OR"}))();class n2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wf(t,e){return t.useProto3Json||Kc(e)?e:{value:e}}function bo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function r2(t,e){return bo(t,e.toTimestamp())}function st(t){return Z(!!t),X.fromTimestamp(function(e){const n=fs(e);return new Ge(n.seconds,n.nanos)}(t))}function Gm(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function KE(t){const e=Ie.fromString(t);return Z(tT(e)),e}function wc(t,e){return Gm(t.databaseId,e.path)}function or(t,e){const n=KE(e);if(n.get(1)!==t.databaseId.projectId)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(WE(n))}function Qf(t,e){return Gm(t.databaseId,e)}function GE(t){const e=KE(t);return e.length===4?Ie.emptyPath():WE(e)}function bc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function WE(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function v_(t,e,n){return{name:wc(t,e),fields:n.value.mapValue.fields}}function QE(t,e,n){const r=or(t,e.name),s=st(e.updateTime),i=e.createTime?st(e.createTime):X.min(),o=new Ct({mapValue:{fields:e.fields}}),a=Be.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function s2(t,e){return"found"in e?function(n,r){Z(!!r.found),r.found.name,r.found.updateTime;const s=or(n,r.found.name),i=st(r.found.updateTime),o=r.found.createTime?st(r.found.createTime):X.min(),a=new Ct({mapValue:{fields:r.found.fields}});return Be.newFoundDocument(s,i,o,a)}(t,e):"missing"in e?function(n,r){Z(!!r.missing),Z(!!r.readTime);const s=or(n,r.missing),i=st(r.readTime);return Be.newNoDocument(s,i)}(t,e):K()}function i2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Z(l===void 0||typeof l=="string"),ft.fromBase64String(l||"")):(Z(l===void 0||l instanceof Uint8Array),ft.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:BE(c.code);return new R(l,c.message||"")}(o);n=new zE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=or(t,r.document.name),i=st(r.document.updateTime),o=r.document.createTime?st(r.document.createTime):X.min(),a=new Ct({mapValue:{fields:r.document.fields}}),c=Be.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Yl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=or(t,r.document),i=r.readTime?st(r.readTime):X.min(),o=Be.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Yl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=or(t,r.document),i=r.removedTargetIds||[];n=new Yl([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new YM(s,i),a=r.targetId;n=new qE(a,o)}}return n}function Ic(t,e){let n;if(e instanceof zo)n={update:v_(t,e.key,e.value)};else if(e instanceof Ho)n={delete:wc(t,e.key)};else if(e instanceof Lr)n={update:v_(t,e.key,e.data),updateMask:h2(e.fieldMask)};else{if(!(e instanceof Bm))return K();n={verify:wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof _o)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof mi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wo)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:r2(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function Yf(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ke.updateTime(st(s.updateTime)):s.exists!==void 0?Ke.exists(s.exists):Ke.none()}(e.currentDocument):Ke.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)Z(o.setToServerValue==="REQUEST_TIME"),a=new _o;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new pi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new mi(l)}else"increment"in o?a=new wo(i,o.increment):K();const c=nt.fromServerFormat(o.fieldPath);return new Yc(c,a)}(t,s)):[];if(e.update){e.update.name;const s=or(t,e.update.name),i=new Ct({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new en(c.map(l=>nt.fromServerFormat(l)))}(e.updateMask);return new Lr(s,i,o,n,r)}return new zo(s,i,n,r)}if(e.delete){const s=or(t,e.delete);return new Ho(s,n)}if(e.verify){const s=or(t,e.verify);return new Bm(s,n)}return K()}function o2(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?st(r.updateTime):st(s);return i.isEqual(X.min())&&(i=st(s)),new GM(i,r.transformResults||[])}(n,e))):[]}function YE(t,e){return{documents:[Qf(t,e.path)]}}function XE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return eT(Pe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ji(u.field),direction:c2(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Wf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function JE(t){let e=GE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Z(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=ZE(u);return h instanceof Pe&&Um(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new so(qi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Kc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ys(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ys(d,h)}(n.endAt)),TE(e,s,o,i,a,"F",c,l)}function a2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=qi(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=qi(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qi(e.unaryFilter.field);return ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qi(e.unaryFilter.field);return ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(qi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pe.create(e.compositeFilter.filters.map(n=>ZE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function c2(t){return ZM[t]}function l2(t){return e2[t]}function u2(t){return t2[t]}function ji(t){return{fieldPath:t.canonicalString()}}function qi(t){return nt.fromServerFormat(t.fieldPath)}function eT(t){return t instanceof ye?function(e){if(e.op==="=="){if(t_(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NAN"}};if(e_(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(t_(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NAN"}};if(e_(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(e.field),op:l2(e.op),value:e.value}}}(t):t instanceof Pe?function(e){const n=e.getFilters().map(r=>eT(r));return n.length===1?n[0]:{compositeFilter:{op:u2(e.op),filters:n}}}(t):K()}function h2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r,s,i=X.min(),o=X.min(),a=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.fe=e}}function d2(t,e){let n;if(e.document)n=QE(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=B.fromSegments(e.noDocument.path),s=yi(e.noDocument.readTime);n=Be.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=B.fromSegments(e.unknownDocument.path),s=yi(e.unknownDocument.version);n=Be.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(r){const s=new Ge(r[0],r[1]);return X.fromTimestamp(s)}(e.readTime)),n}function __(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Du(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:wc(s,i.key),fields:i.data.value.mapValue.fields,updateTime:bo(s,i.version.toTimestamp()),createTime:bo(s,i.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:gi(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:n.path.toArray(),version:gi(e.version)}}return r}function Du(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function gi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function yi(t){const e=new Ge(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function Fs(t,e){const n=(e.baseMutations||[]).map(i=>Yf(t.fe,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Yf(t.fe,i)),s=Ge.fromMillis(e.localWriteTimeMs);return new jm(e.batchId,s,n,r)}function Ia(t){const e=yi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?yi(t.lastLimboFreeSnapshotVersion):X.min();let r;var s;return t.query.documents!==void 0?(Z((s=t.query).documents.length===1),r=on(qo(GE(s.documents[0])))):r=function(i){return on(JE(i))}(t.query),new _r(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ft.fromBase64String(t.resumeToken))}function rT(t,e){const n=gi(e.snapshotVersion),r=gi(e.lastLimboFreeSnapshotVersion);let s;s=Ru(e.target)?YE(t.fe,e.target):XE(t.fe,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:fi(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Wm(t){const e=JE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pu(e,e.limit,"L"):e}function jd(t,e){return new zm(e.largestBatchId,Yf(t.fe,e.overlayMutation))}function w_(t,e){const n=e.path.lastSegment();return[t,Gt(e.path.popLast()),n]}function b_(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:gi(r.readTime),documentKey:Gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{getBundleMetadata(e,n){return I_(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:yi(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return I_(e).put({bundleId:(r=n).id,createTime:gi(st(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return E_(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:Wm(s.bundledQuery),readTime:yi(s.readTime)};var s})}saveNamedQuery(e,n){return E_(e).put(function(r){return{name:r.name,readTime:gi(st(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function I_(t){return Et(t,"bundles")}function E_(t){return Et(t,"namedQueries")}/**
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
 */class Wh{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new Wh(e,r)}getOverlay(e,n){return oa(e).get(w_(this.userId,n)).next(r=>r?jd(this.serializer,r):null)}getOverlays(e,n){const r=rr();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new zm(n,o);s.push(this.we(e,a))}),b.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(Gt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(oa(e).J("collectionPathOverlayIndex",a))}),b.waitFor(i)}getOverlaysForCollection(e,n,r){const s=rr(),i=Gt(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return oa(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=jd(this.serializer,c);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=rr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return oa(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=jd(this.serializer,l);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}we(e,n){return oa(e).put(function(r,s,i){const[o,a,c]=w_(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Ic(r.fe,i.mutation)}}(this.serializer,this.userId,n))}}function oa(t){return Et(t,"documentOverlays")}/**
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
 */class $s{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(Je(e.integerValue));else if("doubleValue"in e){const r=Je(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),gc(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(ps(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?mE(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):K()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const s of Object.keys(r))this.Te(s,n),this.me(r[s],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const s of r)this.me(s,n)}ve(e,n){this.ye(n,37),B.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}$s.Ve=new $s;function p2(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function T_(t){const e=64-function(n){let r=0;for(let s=0;s<8;++s){const i=p2(255&n[s]);if(r+=i,i!==8)break}return r}(t);return Math.ceil(e/8)}class m2{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const s=n.codePointAt(0);this.De(240|s>>>18),this.De(128|63&s>>>12),this.De(128|63&s>>>6),this.De(128|63&s)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const s=n.codePointAt(0);this.Ne(240|s>>>18),this.Ne(128|63&s>>>12),this.Ne(128|63&s>>>6),this.Ne(128|63&s)}}this.ke()}Oe(e){const n=this.Fe(e),r=T_(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}Le(e){const n=this.Fe(e),r=T_(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class g2{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class y2{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class aa{constructor(){this.je=new m2,this.ze=new g2(this.je),this.We=new y2(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Vs{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Vs(this.indexId,this.documentKey,this.arrayValue,r)}}function Vr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=x_(t.arrayValue,e.arrayValue),n!==0?n:(n=x_(t.directionalValue,e.directionalValue),n!==0?n:B.comparator(t.documentKey,e.documentKey)))}function x_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class v2{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){Z(e.collectionGroup===this.collectionId);const n=$f(e);if(n!==void 0&&!this.en(n))return!1;const r=Ds(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.en(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Ze!==void 0){if(!s.has(this.Ze.field.canonicalString())){const a=r[i];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function sT(t){var e,n;if(Z(t instanceof ye||t instanceof Pe),t instanceof ye){if(t instanceof EE){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ye.create(t.field,"==",i)))||[];return Pe.create(s,"or")}return t}const r=t.filters.map(s=>sT(s));return Pe.create(r,t.op)}function _2(t){if(t.getFilters().length===0)return[];const e=Zf(sT(t));return Z(iT(e)),Xf(e)||Jf(e)?[e]:e.getFilters()}function Xf(t){return t instanceof ye}function Jf(t){return t instanceof Pe&&Um(t)}function iT(t){return Xf(t)||Jf(t)||function(e){if(e instanceof Pe&&qf(e)){for(const n of e.getFilters())if(!Xf(n)&&!Jf(n))return!1;return!0}return!1}(t)}function Zf(t){if(Z(t instanceof ye||t instanceof Pe),t instanceof ye)return t;if(t.filters.length===1)return Zf(t.filters[0]);const e=t.filters.map(r=>Zf(r));let n=Pe.create(e,t.op);return n=Ou(n),iT(n)?n:(Z(n instanceof Pe),Z(vo(n)),Z(n.filters.length>1),n.filters.reduce((r,s)=>Qm(r,s)))}function Qm(t,e){let n;return Z(t instanceof ye||t instanceof Pe),Z(e instanceof ye||e instanceof Pe),n=t instanceof ye?e instanceof ye?function(r,s){return Pe.create([r,s],"and")}(t,e):S_(t,e):e instanceof ye?S_(e,t):function(r,s){if(Z(r.filters.length>0&&s.filters.length>0),vo(r)&&vo(s))return wE(r,s.getFilters());const i=qf(r)?r:s,o=qf(r)?s:r,a=i.filters.map(c=>Qm(c,o));return Pe.create(a,"or")}(t,e),Ou(n)}function S_(t,e){if(vo(e))return wE(e,t.getFilters());{const n=e.filters.map(r=>Qm(t,r));return Pe.create(n,"or")}}function Ou(t){if(Z(t instanceof ye||t instanceof Pe),t instanceof ye)return t;const e=t.getFilters();if(e.length===1)return Ou(e[0]);if(vE(t))return t;const n=e.map(s=>Ou(s)),r=[];return n.forEach(s=>{s instanceof ye?r.push(s):s instanceof Pe&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Pe.create(r,t.op)}/**
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
 */class w2{constructor(){this.rn=new Ym}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(yn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Ym{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(Ie.comparator)).toArray()}}/**
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
 */const El=new Uint8Array(0);class b2{constructor(e,n){this.user=e,this.databaseId=n,this.on=new Ym,this.un=new Ss(r=>fi(r),(r,s)=>Gc(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const i={collectionId:r,parent:Gt(s)};return k_(e).put(i)}return b.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[nE(n),""],!1,!0);return k_(e).j(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(nr(o.parent))}return r})}addFieldIndex(e,n){const r=Tl(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=la(e);return i.next(a=>{o.put(b_(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=Tl(e),s=la(e),i=ca(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=ca(e);let s=!0;const i=new Map;return b.forEach(this.cn(n),o=>this.an(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=de();const a=[];return b.forEach(i,(c,l)=>{var u;P("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(A=>`${A.fieldPath}:${A.kind}`).join(",")}`} to execute ${fi(n)}`);const h=function(A,E){const L=$f(E);if(L===void 0)return null;for(const F of Nu(A,L.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(l,c),d=function(A,E){const L=new Map;for(const F of Ds(E))for(const Y of Nu(A,F.fieldPath))switch(Y.op){case"==":case"in":L.set(F.fieldPath.canonicalString(),Y.value);break;case"not-in":case"!=":return L.set(F.fieldPath.canonicalString(),Y.value),Array.from(L.values())}return null}(l,c),f=function(A,E){const L=[];let F=!0;for(const Y of Ds(E)){const G=Y.kind===0?o_(A,Y.fieldPath,A.startAt):a_(A,Y.fieldPath,A.startAt);L.push(G.value),F&&(F=G.inclusive)}return new ys(L,F)}(l,c),m=function(A,E){const L=[];let F=!0;for(const Y of Ds(E)){const G=Y.kind===0?a_(A,Y.fieldPath,A.endAt):o_(A,Y.fieldPath,A.endAt);L.push(G.value),F&&(F=G.inclusive)}return new ys(L,F)}(l,c),y=this.hn(c,l,f),_=this.hn(c,l,m),T=this.ln(c,l,d),k=this.fn(c.indexId,h,y,f.inclusive,_,m.inclusive,T);return b.forEach(k,A=>r.H(A,n.limit).next(E=>{E.forEach(L=>{const F=B.fromSegments(L.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return b.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=_2(Pe.create(e.filters,"and")).map(r=>Hf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),l=c/(n!=null?n.length:1),u=[];for(let h=0;h<c;++h){const d=n?this.dn(n[h/l]):El,f=this.wn(e,d,r[h%l],s),m=this._n(e,d,i[h%l],o),y=a.map(_=>this.wn(e,d,_,!0));u.push(...this.createRange(f,m,y))}return u}wn(e,n,r,s){const i=new Vs(e,B.empty(),n,r);return s?i:i.Je()}_n(e,n,r,s){const i=new Vs(e,B.empty(),n,r);return s?i.Je():i}an(e,n){const r=new v2(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.cn(n);return b.forEach(s,i=>this.an(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new qe(nt.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(n)&&s.length>1&&r===2?1:r)}mn(e,n){const r=new aa;for(const s of Ds(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.He(s.kind);$s.Ve._e(i,o)}return r.Qe()}dn(e){const n=new aa;return $s.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new aa;return $s.Ve._e(di(this.databaseId,n),r.He(function(s){const i=Ds(s);return i.length===0?0:i[i.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let s=[];s.push(new aa);let i=0;for(const o of Ds(e)){const a=r[i++];for(const c of s)if(this.yn(n,o.fieldPath)&&_c(a))s=this.pn(s,o,a);else{const l=c.He(o.kind);$s.Ve._e(a,l)}}return this.In(s)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new aa;c.seed(a.Qe()),$s.Ve._e(o,c.He(n.kind)),i.push(c)}return i}yn(e,n){return!!e.filters.find(r=>r instanceof ye&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Tl(e),s=la(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(i=>{const o=[];return b.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Cu(u.sequenceNumber,new yn(yi(u.readTime),new B(nr(u.documentKey)),u.largestBatchId)):Cu.empty(),d=l.fields.map(([f,m])=>new rM(nt.fromServerFormat(f),m));return new rE(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:he(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=Tl(e),i=la(e);return this.Tn(e).next(o=>s.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,c=>i.put(b_(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),b.forEach(a,c=>this.En(e,s,c).next(l=>{const u=this.An(i,c);return l.isEqual(u)?b.resolve():this.vn(e,i,c,l,u)}))))})}Rn(e,n,r,s){return ca(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,s){return ca(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const s=ca(e);let i=new qe(Vr);return s.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{i=i.add(new Vs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}An(e,n){let r=new qe(Vr);const s=this.mn(n,e);if(s==null)return r;const i=$f(n);if(i!=null){const o=e.data.field(i.fieldPath);if(_c(o))for(const a of o.arrayValue.values||[])r=r.add(new Vs(n.indexId,e.key,this.dn(a),s))}else r=r.add(new Vs(n.indexId,e.key,El,s));return r}vn(e,n,r,s,i){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let m=Fi(d),y=Fi(f);for(;m||y;){let _=!1,T=!1;if(m&&y){const k=l(m,y);k<0?T=!0:k>0&&(_=!0)}else m!=null?T=!0:_=!0;_?(u(y),y=Fi(f)):T?(h(m),m=Fi(d)):(m=Fi(d),y=Fi(f))}}(s,i,Vr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),b.waitFor(o)}Tn(e){let n=1;return la(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Vr(o,a)).filter((o,a,c)=>!a||Vr(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Vr(o,e),c=Vr(o,n);if(a===0)s[0]=e.Je();else if(a>0&&c<0)s.push(o),s.push(o.Je());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.bn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,El,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,El,[]];i.push(IDBKeyRange.bound(a,c))}return i}bn(e,n){return Vr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(A_)}getMinOffset(e,n){return b.mapArray(this.cn(n),r=>this.an(e,r).next(s=>s||K())).next(A_)}}function k_(t){return Et(t,"collectionParents")}function ca(t){return Et(t,"indexEntries")}function Tl(t){return Et(t,"indexConfiguration")}function la(t){return Et(t,"indexState")}function A_(t){Z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Om(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new yn(e.readTime,e.documentKey,n)}/**
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
 */const C_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{Z(a===1)}));const l=[];for(const u of n.mutations){const h=lE(e,u.key.path,n.batchId);i.push(s.delete(h)),l.push(u.key)}return b.waitFor(i).next(()=>l)}function Lu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw K();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class Qh{constructor(e,n,r,s){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=s,this.Vn={}}static de(e,n,r,s){Z(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Qh(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Br(e).X({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=zi(e),o=Br(e);return o.add({}).next(a=>{Z(typeof a=="number");const c=new jm(a,n,r,s),l=function(d,f,m){const y=m.baseMutations.map(T=>Ic(d.fe,T)),_=m.mutations.map(T=>Ic(d.fe,T));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:y,mutations:_}}(this.serializer,this.userId,c),u=[];let h=new qe((d,f)=>he(d.canonicalString(),f.canonicalString()));for(const d of s){const f=lE(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(f,lM))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),b.waitFor(u).next(()=>c)})}lookupMutationBatch(e,n){return Br(e).get(n).next(r=>r?(Z(r.userId===this.userId),Fs(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?b.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.Vn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Br(e).X({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(Z(a.batchId>=r),i=Fs(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Br(e).X({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Br(e).j("userMutationsIndex",n).next(r=>r.map(s=>Fs(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Kl(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return zi(e).X({range:s},(o,a,c)=>{const[l,u,h]=o,d=nr(u);if(l===this.userId&&n.path.isEqual(d))return Br(e).get(h).next(f=>{if(!f)throw K();Z(f.userId===this.userId),i.push(Fs(this.serializer,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(he);const s=[];return n.forEach(i=>{const o=Kl(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=zi(e).X({range:a},(l,u,h)=>{const[d,f,m]=l,y=nr(f);d===this.userId&&i.path.isEqual(y)?r=r.add(m):h.done()});s.push(c)}),b.waitFor(s).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=Kl(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new qe(he);return zi(e).X({range:o},(c,l,u)=>{const[h,d,f]=c,m=nr(d);h===this.userId&&r.isPrefixOf(m)?m.length===s&&(a=a.add(f)):u.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],s=[];return n.forEach(i=>{s.push(Br(e).get(i).next(o=>{if(o===null)throw K();Z(o.userId===this.userId),r.push(Fs(this.serializer,o))}))}),b.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return oT(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),b.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return zi(e).X({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=nr(i[1]);s.push(c)}else a.done()}).next(()=>{Z(s.length===0)})})}containsKey(e,n){return aT(e,this.userId,n)}xn(e){return cT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function aT(t,e,n){const r=Kl(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return zi(t).X({range:i,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===s&&(o=!0),l.done()}).next(()=>o)}function Br(t){return Et(t,"mutations")}function zi(t){return Et(t,"documentMutations")}function cT(t){return Et(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new vi(0)}static Mn(){return new vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new vi(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>X.fromTimestamp(new Ge(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.On(e,s)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>$i(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return $i(e).X((o,a)=>{const c=Ia(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>b.waitFor(i)).next(()=>s)}forEachTarget(e,n){return $i(e).X((r,s)=>{const i=Ia(s);n(i)})}$n(e){return R_(e).get("targetGlobalKey").next(n=>(Z(n!==null),n))}On(e,n){return R_(e).put("targetGlobalKey",n)}Fn(e,n){return $i(e).put(rT(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=fi(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return $i(e).X({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const l=Ia(a);Gc(n,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=Qr(e);return n.forEach(o=>{const a=Gt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(s)}removeMatchingKeys(e,n,r){const s=Qr(e);return b.forEach(n,i=>{const o=Gt(i.path);return b.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=Qr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=Qr(e);let i=de();return s.X({range:r,Y:!0},(o,a,c)=>{const l=nr(o[1]),u=new B(l);i=i.add(u)}).next(()=>i)}containsKey(e,n){const r=Gt(n.path),s=IDBKeyRange.bound([r],[nE(r)],!1,!0);let i=0;return Qr(e).X({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}le(e,n){return $i(e).get(n).next(r=>r?Ia(r):null)}}function $i(t){return Et(t,"targets")}function R_(t){return Et(t,"targetGlobal")}function Qr(t){return Et(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class E2{constructor(e){this.Ln=e,this.buffer=new qe(N_),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();N_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class T2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xs(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ts(n)}await this.Qn(3e5)})}}class x2{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Zt.ct);const r=new E2(n);return this.jn.forEachTarget(e,s=>r.Kn(s.sequenceNumber)).next(()=>this.jn.Wn(e,s=>r.Kn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(C_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),C_):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,s,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Ff()<=be.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function S2(t,e){return new x2(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n){this.db=e,this.garbageCollector=S2(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,s)=>n(s))}addReference(e,n,r){return xl(e,r)}removeReference(e,n,r){return xl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return xl(e,n)}Xn(e,n){return function(r,s){let i=!1;return cT(r).Z(o=>aT(r,o,s).next(a=>(a&&(i=!0),b.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Xn(e,o).next(l=>{if(!l)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),Qr(e).delete([0,Gt(o.path)])))});s.push(c)}}).next(()=>b.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return xl(e,n)}Yn(e,n){const r=Qr(e);let s,i=Zt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==Zt.ct&&n(new B(nr(s)),i),i=l,s=c):i=Zt.ct}).next(()=>{i!==Zt.ct&&n(new B(nr(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xl(t,e){return Qr(t).put(function(n,r){return{targetId:0,path:Gt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ns(e).put(r)}removeEntry(e,n,r){return Ns(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Du(i),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=Be.newInvalidDocument(n);return Ns(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ua(n))},(s,i)=>{r=this.ts(n,i)}).next(()=>r)}es(e,n){let r={size:0,document:Be.newInvalidDocument(n)};return Ns(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ua(n))},(s,i)=>{r={document:this.ts(n,i),size:Lu(i)}}).next(()=>r)}getEntries(e,n){let r=tn();return this.ns(e,n,(s,i)=>{const o=this.ts(s,i);r=r.insert(s,o)}).next(()=>r)}ss(e,n){let r=tn(),s=new Me(B.comparator);return this.ns(e,n,(i,o)=>{const a=this.ts(i,o);r=r.insert(i,a),s=s.insert(i,Lu(o))}).next(()=>({documents:r,rs:s}))}ns(e,n,r){if(n.isEmpty())return b.resolve();let s=new qe(O_);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(ua(s.first()),ua(s.last())),o=s.getIterator();let a=o.getNext();return Ns(e).X({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=B.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&O_(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.G(ua(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,s){const i=n.path,o=[i.popLast().toArray(),i.lastSegment(),Du(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ns(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=tn();for(const u of c){const h=this.ts(B.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Qc(n,h)||s.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,s){let i=tn();const o=D_(n,r),a=D_(n,yn.max());return Ns(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.ts(B.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===s&&u.done()}).next(()=>i)}newChangeBuffer(e){return new C2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return P_(e).get("remoteDocumentGlobalKey").next(n=>(Z(!!n),n))}Zn(e,n){return P_(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=d2(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Be.newInvalidDocument(e)}}function uT(t){return new A2(t)}class C2 extends lT{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new Ss(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new qe((i,o)=>he(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.us.get(i);if(n.push(this.os.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=__(this.os.serializer,o);s=s.add(i.path.popLast());const l=Lu(c);r+=l-a.size,n.push(this.os.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=__(this.os.serializer,o.convertToNoDocument(X.min()));n.push(this.os.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.os.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:s})=>(s.forEach((i,o)=>{this.us.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function P_(t){return Et(t,"remoteDocumentGlobal")}function Ns(t){return Et(t,"remoteDocumentsV14")}function ua(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function D_(t,e){const n=e.documentKey.path.toArray();return[t,Du(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function O_(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=he(n[i],r[i]),s)return s;return s=he(n.length,r.length),s||(s=he(n[n.length-2],r[r.length-2]),s||he(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ua(r.mutation,s,en.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=rr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=wa();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=tn();const o=Ma(),a=Ma();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Lr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ua(u.mutation,l,u.mutation.getFieldMask(),Ge.now())):o.set(l.key,en.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new R2(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ma();let s=new Me((o,a)=>o-a),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||en.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||de()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=RE();u.forEach(d=>{if(!i.has(d)){const f=FE(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return B.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$m(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(rr());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,de())).next(u=>({batchId:a,changes:CE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let s=wa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=wa();return this.indexManager.getCollectionParents(e,s).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Or(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Be.newInvalidDocument(l)))});let o=wa();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ua(l.mutation,c,en.empty(),Ge.now()),Qc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:st(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Wm(r.bundledQuery),readTime:st(r.readTime)}}(n)),b.resolve()}}/**
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
 */class P2{constructor(){this.overlays=new Me(B.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rr();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=rr(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=rr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=rr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zm(n,r));let i=this.ls.get(n);i===void 0&&(i=de(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.fs=new qe(mt.ds),this.ws=new qe(mt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new mt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new mt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new B(new Ie([])),r=new mt(n,e),s=new mt(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new B(new Ie([])),r=new mt(n,e),s=new mt(n,e+1);let i=de();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new mt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return B.comparator(e.key,n.key)||he(e.As,n.As)}static _s(e,n){return he(e.As,n.As)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new qe(mt.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jm(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new mt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),s=new mt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(he);return n.forEach(s=>{const i=new mt(s,0),o=new mt(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),b.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new mt(new B(i),0);let a=new qe(he);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),b.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Z(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return b.forEach(n.mutations,s=>{const i=new mt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new mt(n,0),s=this.Rs.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.Ds=e,this.docs=new Me(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(n))}getEntries(e,n){let r=tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Be.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tn();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Om(iE(u),r)<=0||(s.has(u.key)||Qc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}Cs(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new L2(this)}getSize(e){return b.resolve(this.size)}}class L2 extends lT{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.persistence=e,this.xs=new Ss(n=>fi(n),Gc),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Xm,this.targetCount=0,this.Ms=vi.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n){this.$s={},this.overlays={},this.Os=new Zt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new M2(this),this.indexManager=new w2,this.remoteDocumentCache=function(r){return new O2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new nT(n),this.qs=new N2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new P2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new D2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const s=new U2(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return b.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class U2 extends aE{constructor(e){super(),this.currentSequenceNumber=e}}class Yh{constructor(e){this.persistence=e,this.Qs=new Xm,this.js=null}static zs(e){return new Yh(e)}get Ws(){if(this.js)return this.js;throw K()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,r=>{const s=B.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.serializer=e}O(e,n,r,s){const i=new qh("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yv,{unique:!0}),a.createObjectStore("documentMutations")}(e),L_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),L_(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yv,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return b.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Ys(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),r<7&&s>=7&&(o=o.next(()=>this.Zs(i))),r<8&&s>=8&&(o=o.next(()=>this.ti(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ei(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:bM});c.createIndex("collectionPathOverlayIndex",IM,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",EM,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:uM});c.createIndex("documentKeyIndex",hM),c.createIndex("collectionGroupIndex",dM)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.si(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:yM}).createIndex("sequenceNumberIndex",vM,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:_M}).createIndex("documentKeyIndex",wM,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,s)=>{n+=Lu(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(s=>b.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>b.forEach(a,c=>{Z(c.userId===i.userId);const l=Fs(this.serializer,c);return oT(e,i.userId,l).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.X((o,a)=>{const c=new Ie(o),l=function(u){return[0,Gt(u)]}(c);i.push(n.get(l).next(u=>u?b.resolve():(h=>n.put({targetId:0,path:Gt(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>b.waitFor(i))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:gM});const r=n.store("collectionParents"),s=new Ym,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Gt(c)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new Ie(o);return i(c.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,c],l)=>{const u=nr(a);return i(u.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,s)=>{const i=Ia(s),o=rT(this.serializer,i);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),s=[];return r.X((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(l=o,l.document?new B(Ie.fromString(l.document.name).popFirst(5)):l.noDocument?B.fromSegments(l.noDocument.path):l.unknownDocument?B.fromSegments(l.unknownDocument.path):K()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>b.waitFor(s))}si(e,n){const r=n.store("mutations"),s=uT(this.serializer),i=new dT(Yh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:de();Fs(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),b.forEach(a,(c,l)=>{const u=new gt(l),h=Wh.de(this.serializer,u),d=i.getIndexManager(u),f=Qh.de(u,this.serializer,d,i.referenceDelegate);return new hT(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Vf(n,Zt.ct),c).next()})})}}function L_(t){t.createObjectStore("targetDocuments",{keyPath:pM}).createIndex("documentTargetsIndex",mM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",fM,{unique:!0}),t.createObjectStore("targetGlobal")}const qd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Jm{constructor(e,n,r,s,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=i,this.window=o,this.document=a,this.ri=l,this.oi=u,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Jm.D())throw new R(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new k2(this,s),this.di=n+"main",this.serializer=new nT(c),this.wi=new Dn(this.di,this.ui,new F2(this.serializer)),this.Bs=new I2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=uT(this.serializer),this.qs=new f2,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,u===!1&&tt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,qd);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Zt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Sl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(xs(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return ha(e).get("owner").next(n=>b.resolve(this.Ri(n)))}Pi(e){return Sl(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Et(n,"clientMetadata");return r.j().next(s=>{const i=this.Si(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?b.resolve(!0):ha(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,qd);return!1}}return!(!this.networkEnabled||!this.inForeground)||Sl(e).j().next(r=>this.Si(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Vf(e,Zt.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Sl(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Qh.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new b2(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Wh.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=(o=this.ui)===15?xM:o===14?dE:o===13?hE:o===12?TM:o===11?uE:void K();var o;let a;return this.wi.runTransaction(e,s,i,c=>(a=new Vf(c,this.Os?this.Os.next():Zt.ct),n==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw tt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new R(I.FAILED_PRECONDITION,oE);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return ha(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(I.FAILED_PRECONDITION,qd)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ha(e).put("owner",n)}static D(){return Dn.D()}Ai(e){const n=ha(e);return n.get("owner").next(r=>this.Ri(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(tt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;wC()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return tt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){tt("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ha(t){return Et(t,"owner")}function Sl(t){return Et(t,"clientMetadata")}function Zm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eg(e,n.fromCache,r,s)}}/**
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
 */class fT{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(c_(n))return b.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Pu(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=de(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Pu(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,r,s){return c_(n)||s.isEqual(X.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(Ff()<=be.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gf(n)),this.Wi(e,o,n,sE(s,-1)))})}ji(e,n){let r=new qe(kE(e));return n.forEach((s,i)=>{Qc(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return Ff()<=be.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Gf(n)),this.Ui.getDocumentsMatchingQuery(e,n,yn.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Me(he),this.Yi=new Ss(i=>fi(i),Gc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hT(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function pT(t,e,n,r){return new $2(t,e,n,r)}async function mT(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=de();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function V2(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const y=c.docVersions.get(f);Z(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=de();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function gT(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function B2(t,e){const n=j(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ft.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(m,y,_){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,u)&&a.push(n.Bs.updateTargetData(i,f))});let c=tn(),l=de();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(yT(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(X.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function yT(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function j2(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Io(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Eo(t,e,n){const r=j(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!xs(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Mu(t,e,n){const r=j(t);let s=X.min(),i=de();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=j(a),h=u.Yi.get(l);return h!==void 0?b.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,on(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:de())).next(a=>(wT(r,SE(e),a),{documents:a,ir:i})))}function vT(t,e){const n=j(t),r=j(n.Bs),s=n.Ji.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.le(i,e).next(o=>o?o.target:null))}function _T(t,e){const n=j(t),r=n.Xi.get(e)||X.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Zi.getAllFromCollectionGroup(s,e,sE(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(wT(n,e,s),s))}function wT(t,e,n){let r=t.Xi.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}async function q2(t,e,n,r){const s=j(t);let i=de(),o=tn();for(const l of n){const u=e.rr(l.metadata.name);l.document&&(i=i.add(u));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(u,h)}const a=s.Zi.newChangeBuffer({trackRemovals:!0}),c=await Io(s,function(l){return on(qo(Ie.fromString(`__bundle__/docs/${l}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>yT(l,a,o).next(u=>(a.apply(l),u)).next(u=>s.Bs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>s.Bs.addMatchingKeys(l,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,u.nr,u.sr)).next(()=>u.nr)))}async function z2(t,e,n=de()){const r=await Io(t,on(Wm(e.bundledQuery))),s=j(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=st(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.qs.saveNamedQuery(i,e);const a=r.withResumeToken(ft.EMPTY_BYTE_STRING,o);return s.Ji=s.Ji.insert(a.targetId,a),s.Bs.updateTargetData(i,a).next(()=>s.Bs.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Bs.addMatchingKeys(i,n,r.targetId)).next(()=>s.qs.saveNamedQuery(i,e))})}function M_(t,e){return`firestore_clients_${t}_${e}`}function U_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function zd(t,e){return`firestore_targets_${t}_${e}`}class Uu{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static ar(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new R(s.error.code,s.error.message))),o?new Uu(e,n,s.state,i):(tt("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fa{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new R(r.error.code,r.error.message))),i?new Fa(e,r.state,s):(tt("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Vm();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=cE(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Fu(e,i):(tt("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class tg{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new tg(n.clientId,n.onlineState):(tt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ep{constructor(){this.activeTargetIds=Vm()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hd{constructor(e,n,r,s,i){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Me(he),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=M_(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new ep),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const s=this.getItem(M_(this.persistenceKey,r));if(s){const i=Fu.ar(r,s);i&&(this.gr=this.gr.insert(i.clientId,i))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(zd(this.persistenceKey,e));if(r){const s=Fa.ar(e,r);s&&(n=s.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zd(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.Cr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void tt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(s){let i=Zt.ct;if(s!=null)try{const o=JSON.parse(s);Z(typeof o=="number"),i=o}catch(o){tt("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(n.newValue);r!==Zt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(s=>this.syncEngine.Qr(s)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const s=new Uu(this.currentUser,e,n,r),i=U_(this.persistenceKey,this.currentUser,e);this.setItem(i,s.hr())}Cr(e){const n=U_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const s=zd(this.persistenceKey,e),i=new Fa(e,n,r);this.setItem(s,i.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return Fu.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Uu.ar(new gt(i),s,n)}Ur(e,n){const r=this.Ar.exec(e),s=Number(r[1]);return Fa.ar(s,n)}br(e){return tg.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),s=this.Sr(this.gr),i=this.Sr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Vm();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class bT{constructor(){this.Hr=new ep,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class F_{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kl=null;function Kd(){return kl===null?kl=268435456+Math.round(2147483648*Math.random()):kl++,"0x"+kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Lt="WebChannelConnection";class W2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=Kd(),a=this.To(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,s,i),this.Ao(e,a,c,r).then(l=>(P("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw jn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+jo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=K2[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=Kd();return new Promise((o,a)=>{const c=new zL;c.setWithCredentials(!0),c.listenOnce(BL.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bd.NO_ERROR:const u=c.getResponseJson();P(Lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Bd.TIMEOUT:P(Lt,`RPC '${e}' ${i} timed out`),a(new R(I.DEADLINE_EXCEEDED,"Request time out"));break;case Bd.HTTP_ERROR:const h=c.getStatus();if(P(Lt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(f.status);a(new R(m,f.message))}else a(new R(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{P(Lt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);P(Lt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Ro(e,n,r){const s=Kd(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$L(),a=VL(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new qL({})),this.Eo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");P(Lt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const m=new G2({ro:_=>{f?P(Lt,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(d||(P(Lt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),P(Lt,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),y=(_,T,k)=>{_.listen(T,A=>{try{k(A)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,wl.EventType.OPEN,()=>{f||P(Lt,`RPC '${e}' stream ${s} transport opened.`)}),y(h,wl.EventType.CLOSE,()=>{f||(f=!0,P(Lt,`RPC '${e}' stream ${s} transport closed`),m.wo())}),y(h,wl.EventType.ERROR,_=>{f||(f=!0,jn(Lt,`RPC '${e}' stream ${s} transport errored:`,_),m.wo(new R(I.UNAVAILABLE,"The operation could not be completed")))}),y(h,wl.EventType.MESSAGE,_=>{var T;if(!f){const k=_.data[0];Z(!!k);const A=k,E=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(E){P(Lt,`RPC '${e}' stream ${s} received error:`,E);const L=E.status;let F=function(G){const W=lt[G];if(W!==void 0)return BE(W)}(L),Y=E.message;F===void 0&&(F=I.INTERNAL,Y="Unknown error status: "+L+" with message "+E.message),f=!0,m.wo(new R(F,Y)),h.close()}else P(Lt,`RPC '${e}' stream ${s} received:`,k),m._o(k)}}),y(a,jL.STAT_EVENT,_=>{_.stat===Kv.PROXY?P(Lt,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Kv.NOPROXY&&P(Lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function IT(){return typeof window<"u"?window:null}function Xl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t){return new n2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&P("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ng(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(tt(n.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new R(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Q2 extends ET{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=i2(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?X.min():i.readTime?st(i.readTime):X.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=bc(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=Ru(a)?{documents:YE(s,a)}:{query:XE(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=HE(s,i.resumeToken);const c=Wf(s,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(X.min())>0){o.readTime=bo(s,i.snapshotVersion.toTimestamp());const c=Wf(s,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=a2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=bc(this.serializer),n.removeTarget=e,this.Wo(n)}}class Y2 extends ET{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=o2(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.cu(r,n)}return Z(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=bc(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ic(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(I.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(I.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class J2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(tt(n),this.mu=!1):P("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{ks(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=j(a);c.vu.add(4),await Ko(c),c.bu.set("Unknown"),c.vu.delete(4),await el(c)}(this))})}),this.bu=new J2(r,s)}}async function el(t){if(ks(t))for(const e of t.Ru)await e(!0)}async function Ko(t){for(const e of t.Ru)await e(!1)}function Xh(t,e){const n=j(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),ig(n)?sg(n):Wo(n).Ko()&&rg(n,e))}function Ec(t,e){const n=j(t),r=Wo(n);n.Au.delete(e),r.Ko()&&TT(n,e),n.Au.size===0&&(r.Ko()?r.jo():ks(n)&&n.bu.set("Unknown"))}function rg(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wo(t).su(e)}function TT(t,e){t.Vu.qt(e),Wo(t).iu(e)}function sg(t){t.Vu=new JM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Wo(t).start(),t.bu.gu()}function ig(t){return ks(t)&&!Wo(t).Uo()&&t.Au.size>0}function ks(t){return j(t).vu.size===0}function xT(t){t.Vu=void 0}async function eU(t){t.Au.forEach((e,n)=>{rg(t,e)})}async function tU(t,e){xT(t),ig(t)?(t.bu.Iu(e),sg(t)):t.bu.set("Unknown")}async function nU(t,e,n){if(t.bu.set("Online"),e instanceof zE&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $u(t,r)}else if(e instanceof Yl?t.Vu.Ht(e):e instanceof qE?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(X.min()))try{const r=await gT(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(ft.EMPTY_BYTE_STRING,l.snapshotVersion)),TT(s,a);const u=new _r(l.target,a,c,l.sequenceNumber);rg(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await $u(t,r)}}async function $u(t,e,n){if(!xs(e))throw e;t.vu.add(1),await Ko(t),t.bu.set("Offline"),n||(n=()=>gT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await el(t)})}function ST(t,e){return e().catch(n=>$u(t,n,e))}async function Go(t){const e=j(t),n=vs(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;rU(e);)try{const s=await j2(e.localStore,r);if(s===null){e.Eu.length===0&&n.jo();break}r=s.batchId,sU(e,s)}catch(s){await $u(e,s)}kT(e)&&AT(e)}function rU(t){return ks(t)&&t.Eu.length<10}function sU(t,e){t.Eu.push(e);const n=vs(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function kT(t){return ks(t)&&!vs(t).Uo()&&t.Eu.length>0}function AT(t){vs(t).start()}async function iU(t){vs(t).hu()}async function oU(t){const e=vs(t);for(const n of t.Eu)e.uu(n.mutations)}async function aU(t,e,n){const r=t.Eu.shift(),s=qm.from(r,e,n);await ST(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Go(t)}async function cU(t,e){e&&vs(t).ou&&await async function(n,r){if(s=r.code,VE(s)&&s!==I.ABORTED){const i=n.Eu.shift();vs(n).Qo(),await ST(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Go(n)}var s}(t,e),kT(t)&&AT(t)}async function $_(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=ks(n);n.vu.add(3),await Ko(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await el(n)}async function tp(t,e){const n=j(t);e?(n.vu.delete(2),await el(n)):e||(n.vu.add(2),await Ko(n),n.bu.set("Unknown"))}function Wo(t){return t.Su||(t.Su=function(e,n,r){const s=j(e);return s.fu(),new Q2(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:eU.bind(null,t),ao:tU.bind(null,t),nu:nU.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),ig(t)?sg(t):t.bu.set("Unknown")):(await t.Su.stop(),xT(t))})),t.Su}function vs(t){return t.Du||(t.Du=function(e,n,r){const s=j(e);return s.fu(),new Y2(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:iU.bind(null,t),ao:cU.bind(null,t),au:oU.bind(null,t),cu:aU.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Go(t)):(await t.Du.stop(),t.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new og(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(t,e){if(tt("AsyncQueue",`${e}: ${t}`),xs(t))return new R(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=wa(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new io(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof io)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class V_{constructor(){this.Cu=new Me(B.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):K():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class To{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new To(e,n,io.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(){this.Nu=void 0,this.listeners=[]}}class uU{constructor(){this.queries=new Ss(e=>xE(e),Wc),this.onlineState="Unknown",this.ku=new Set}}async function ag(t,e){const n=j(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new lU),s)try{i.Nu=await n.onListen(r)}catch(o){const a=Qo(o,`Initialization of query '${Gf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&lg(n)}async function cg(t,e){const n=j(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function hU(t,e){const n=j(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&lg(n)}function dU(t,e,n){const r=j(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function lg(t){t.ku.forEach(e=>{e.next()})}class ug{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new To(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.serializer=e}rr(e){return or(this.serializer,e)}ur(e){return e.metadata.exists?QE(this.serializer,e.document,!1):Be.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return st(e)}}class pU{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=CT(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=Ie.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new B_(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.rr(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||de()).add(i);n.set(o,a)}}return n}async complete(){const e=await q2(this.localStore,new B_(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await z2(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function CT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.key=e}}class NT{constructor(e){this.key=e}}class PT{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=de(),this.mutatedKeys=de(),this.tc=kE(e),this.ec=new io(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new V_,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Qc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(r.track({type:3,doc:f}),_=!0):this.rc(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new To(this.query,e.ec,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new V_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=de(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new NT(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new RT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=de();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return To.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class mU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gU{constructor(e){this.key=e,this.fc=!1}}class yU{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ss(a=>xE(a),Wc),this._c=new Map,this.mc=new Set,this.gc=new Me(B.comparator),this.yc=new Map,this.Ic=new Xm,this.Tc={},this.Ec=new Map,this.Ac=vi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function vU(t,e){const n=mg(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await Io(n.localStore,on(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await hg(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Xh(n.remoteStore,o)}return s}async function hg(t,e,n,r,s){t.Rc=(h,d,f)=>async function(m,y,_,T){let k=y.view.sc(_);k.zi&&(k=await Mu(m.localStore,y.query,!1).then(({documents:L})=>y.view.sc(L,k)));const A=T&&T.targetChanges.get(y.targetId),E=y.view.applyChanges(k,m.isPrimaryClient,A);return np(m,y.targetId,E.cc),E.snapshot}(t,h,d,f);const i=await Mu(t.localStore,e,!0),o=new PT(e,i.ir),a=o.sc(i.documents),c=Jc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);np(t,n,l.cc);const u=new mU(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function _U(t,e){const n=j(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!Wc(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Eo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ec(n.remoteStore,r.targetId),xo(n,r.targetId)}).catch(Ts)):(xo(n,r.targetId),await Eo(n.localStore,r.targetId,!0))}async function wU(t,e,n){const r=gg(t);try{const s=await function(i,o){const a=j(i),c=Ge.now(),l=o.reduce((d,f)=>d.add(f.key),de());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=tn(),m=de();return a.Zi.getEntries(d,l).next(y=>{f=y,f.forEach((_,T)=>{T.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{u=y;const _=[];for(const T of o){const k=QM(T,u.get(T.key).overlayedDocument);k!=null&&_.push(new Lr(T.key,k,gE(k.value.mapValue),Ke.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(y=>{h=y;const _=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,_)})}).then(()=>({batchId:h.batchId,changes:CE(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new Me(he)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Mr(r,s.changes),await Go(r.remoteStore)}catch(s){const i=Qo(s,"Failed to persist write");n.reject(i)}}async function DT(t,e){const n=j(t);try{const r=await B2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?Z(o.fc):s.removedDocuments.size>0&&(Z(o.fc),o.fc=!1))}),await Mr(n,r,e)}catch(r){await Ts(r)}}function j_(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=j(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&lg(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bU(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new Me(B.comparator);o=o.insert(i,Be.newNoDocument(i,X.min()));const a=de().add(i),c=new Xc(X.min(),new Map,new Me(he),o,a);await DT(r,c),r.gc=r.gc.remove(i),r.yc.delete(e),pg(r)}else await Eo(r.localStore,e,!1).then(()=>xo(r,e,n)).catch(Ts)}async function IU(t,e){const n=j(t),r=e.batch.batchId;try{const s=await V2(n.localStore,e);fg(n,r,null),dg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mr(n,s)}catch(s){await Ts(s)}}async function EU(t,e,n){const r=j(t);try{const s=await function(i,o){const a=j(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Z(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);fg(r,e,n),dg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mr(r,s)}catch(s){await Ts(s)}}async function TU(t,e){const n=j(t);ks(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=j(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const s=n.Ec.get(r)||[];s.push(e),n.Ec.set(r,s)}catch(r){const s=Qo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function dg(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function fg(t,e,n){const r=j(t);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function xo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||OT(t,r)})}function OT(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Ec(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),pg(t))}function np(t,e,n){for(const r of n)r instanceof RT?(t.Ic.addReference(r.key,e),xU(t,r)):r instanceof NT?(P("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||OT(t,r.key)):K()}function xU(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.mc.add(r),pg(t))}function pg(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new B(Ie.fromString(e)),r=t.Ac.next();t.yc.set(r,new gU(n)),t.gc=t.gc.insert(n,r),Xh(t.remoteStore,new _r(on(qo(n.path)),r,"TargetPurposeLimboResolution",Zt.ct))}}async function Mr(t,e,n){const r=j(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=eg.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,c){const l=j(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!xs(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,m)}}}(r.localStore,i))}async function SU(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await mT(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(I.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mr(n,r.er)}}function kU(t,e){const n=j(t),r=n.yc.get(e);if(r&&r.fc)return de().add(r.key);{let s=de();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}async function AU(t,e){const n=j(t),r=await Mu(n.localStore,e.query,!0),s=e.view.hc(r);return n.isPrimaryClient&&np(n,e.targetId,s.cc),s}async function CU(t,e){const n=j(t);return _T(n.localStore,e).then(r=>Mr(n,r))}async function RU(t,e,n,r){const s=j(t),i=await function(o,a){const c=j(o),l=j(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Sn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):b.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await Go(s.remoteStore):n==="acknowledged"||n==="rejected"?(fg(s,e,r||null),dg(s,e),function(o,a){j(j(o).mutationQueue).Cn(a)}(s.localStore,e)):K(),await Mr(s,i)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function NU(t,e){const n=j(t);if(mg(n),gg(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await q_(n,r.toArray());n.vc=!0,await tp(n.remoteStore,!0);for(const i of s)Xh(n.remoteStore,i)}else if(e===!1&&n.vc!==!1){const r=[];let s=Promise.resolve();n._c.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(xo(n,o),Eo(n.localStore,o,!0))),Ec(n.remoteStore,o)}),await s,await q_(n,r),function(i){const o=j(i);o.yc.forEach((a,c)=>{Ec(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Me(B.comparator)}(n),n.vc=!1,await tp(n.remoteStore,!1)}}async function q_(t,e,n){const r=j(t),s=[],i=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Io(r.localStore,on(c[0]));for(const l of c){const u=r.wc.get(l),h=await AU(r,u);h.snapshot&&i.push(h.snapshot)}}else{const l=await vT(r.localStore,o);a=await Io(r.localStore,l),await hg(r,LT(l),o,!1,a.resumeToken)}s.push(a)}return r.dc.nu(i),s}function LT(t){return TE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function PU(t){const e=j(t);return j(j(e.localStore).persistence).$i()}async function DU(t,e,n,r){const s=j(t);if(s.vc)return void P("SyncEngine","Ignoring unexpected query state notification.");const i=s._c.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await _T(s.localStore,SE(i[0])),a=Xc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ft.EMPTY_BYTE_STRING);await Mr(s,o,a);break}case"rejected":await Eo(s.localStore,e,!0),xo(s,e,r);break;default:K()}}async function OU(t,e,n){const r=mg(t);if(r.vc){for(const s of e){if(r._c.has(s)){P("SyncEngine","Adding an already active target "+s);continue}const i=await vT(r.localStore,s),o=await Io(r.localStore,i);await hg(r,LT(i),o.targetId,!1,o.resumeToken),Xh(r.remoteStore,o)}for(const s of n)r._c.has(s)&&await Eo(r.localStore,s,!1).then(()=>{Ec(r.remoteStore,s),xo(r,s)}).catch(Ts)}}function mg(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bU.bind(null,e),e.dc.nu=hU.bind(null,e.eventManager),e.dc.Pc=dU.bind(null,e.eventManager),e}function gg(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EU.bind(null,e),e}function LU(t,e,n){const r=j(t);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const f=j(h),m=st(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.qs.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(m)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(CT(a));const c=new pU(a,s.localStore,i.serializer);let l=await i.bc();for(;l;){const h=await c.zu(l);h&&o._updateProgress(h),l=await i.bc()}const u=await c.complete();return await Mr(s,u.Ju,void 0),await function(h,d){const f=j(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.qs.saveBundleMetadata(m,d))}(s.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Hu)}catch(a){return jn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class rp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pT(this.persistence,new fT,e.initialUser,this.serializer)}createPersistence(e){return new dT(Yh.zs,this.serializer)}createSharedClientState(e){return new bT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MT extends rp{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await gg(this.Vc.syncEngine),await Go(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return pT(this.persistence,new fT,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new T2(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new aM(n,this.persistence);return new oM(e.asyncQueue,r)}createPersistence(e){const n=Zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Jm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,IT(),Xl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new bT}}class MU extends MT{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof Hd&&(this.sharedClientState.syncEngine={jr:RU.bind(null,n),zr:DU.bind(null,n),Wr:OU.bind(null,n),$i:PU.bind(null,n),Qr:CU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await NU(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=IT();if(!Hd.D(n))throw new R(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Hd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class yg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SU.bind(null,this.syncEngine),await tp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uU}createDatastore(e){const n=Zc(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new W2(s));var s;return function(i,o,a,c){return new X2(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>j_(this.syncEngine,a,0),o=F_.D()?new F_:new H2,new Z2(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new yU(r,s,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);P("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ko(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new _t,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const s=await this.$c(r);return new fU(JSON.parse(s),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,s){const i=j(r),o=bc(i.serializer)+"/documents",a={documents:s.map(h=>wc(i.serializer,h))},c=await i.vo("BatchGetDocuments",o,a,s.length),l=new Map;c.forEach(h=>{const d=s2(i.serializer,h);l.set(d.key.toString(),d)});const u=[];return s.forEach(h=>{const d=l.get(h.toString());Z(!!d),u.push(d)}),u}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ho(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=B.fromPath(r);this.mutations.push(new Bm(s,this.precondition(s)))}),await async function(n,r){const s=j(n),i=bc(s.serializer)+"/documents",o={writes:r.map(a=>Ic(s.serializer,a))};await s.Io("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new R(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Ke.exists(!1):Ke.updateTime(n):Ke.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new R(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ke.updateTime(n)}return Ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class $U{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Bc=r.maxAttempts,this.qo=new ng(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new FU(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Uc(s)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Kc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!VE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=tE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{P("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(P("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jl(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await mT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vg(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>$_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>$_(e.remoteStore,i)),t._onlineComponents=e}function UT(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function vg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!UT(n))throw n;jn("Error using user provided cache. Falling back to memory cache: "+n),await Jl(t,new rp)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Jl(t,new rp);return t._offlineComponents}async function Zh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await sp(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await sp(t,new yg))),t._onlineComponents}function FT(t){return vg(t).then(e=>e.persistence)}function _g(t){return vg(t).then(e=>e.localStore)}function $T(t){return Zh(t).then(e=>e.remoteStore)}function wg(t){return Zh(t).then(e=>e.syncEngine)}function BU(t){return Zh(t).then(e=>e.datastore)}async function So(t){const e=await Zh(t),n=e.eventManager;return n.onListen=vU.bind(null,e.syncEngine),n.onUnlisten=_U.bind(null,e.syncEngine),n}function jU(t){return t.asyncQueue.enqueue(async()=>{const e=await FT(t),n=await $T(t);return e.setNetworkEnabled(!0),function(r){const s=j(r);return s.vu.delete(0),el(s)}(n)})}function qU(t){return t.asyncQueue.enqueue(async()=>{const e=await FT(t),n=await $T(t);return e.setNetworkEnabled(!1),async function(r){const s=j(r);s.vu.add(0),await Ko(s),s.bu.set("Offline")}(n)})}function zU(t,e){const n=new _t;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const l=j(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new R(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Qo(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await _g(t),e,n)),n.promise}function VT(t,e,n={}){const r=new _t;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new Jh({next:h=>{i.enqueueAndForget(()=>cg(s,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ug(qo(o.path),l,{includeMetadataChanges:!0,Ku:!0});return ag(s,u)}(await So(t),t.asyncQueue,e,n,r)),r.promise}function HU(t,e){const n=new _t;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await Mu(r,s,!0),a=new PT(s,o.ir),c=a.sc(o.documents),l=a.applyChanges(c,!1);i.resolve(l.snapshot)}catch(o){const a=Qo(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await _g(t),e,n)),n.promise}function BT(t,e,n={}){const r=new _t;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new Jh({next:h=>{i.enqueueAndForget(()=>cg(s,u)),h.fromCache&&a.source==="server"?c.reject(new R(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ug(o,l,{includeMetadataChanges:!0,Ku:!0});return ag(s,u)}(await So(t),t.asyncQueue,e,n,r)),r.promise}function KU(t,e){const n=new Jh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,s){j(r).ku.add(s),s.next()}(await So(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,s){j(r).ku.delete(s)}(await So(t),n))}}function GU(t,e,n,r){const s=function(i,o){let a;return a=typeof i=="string"?jE().encode(i):i,function(c,l){return new UU(c,l)}(function(c,l){if(c instanceof Uint8Array)return z_(c,l);if(c instanceof ArrayBuffer)return z_(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Zc(e));t.asyncQueue.enqueueAndForget(async()=>{LU(await wg(t),s,r)})}function WU(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const s=j(n);return s.persistence.runTransaction("Get named query","readonly",i=>s.qs.getNamedQuery(i,r))}(await _g(t),e))}/**
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
 */function jT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bg(t,e,n){if(!n)throw new R(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qT(t,e,n,r){if(e===!0&&r===!0)throw new R(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function K_(t){if(!B.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function G_(t){if(B.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ed(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function ke(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ed(t);throw new R(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function zT(t,e){if(e<=0)throw new R(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class tl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new WL;switch(n.type){case"firstParty":return new JL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=H_.get(e);n&&(P("ComponentProvider","Removing Datastore"),H_.delete(e),n.terminate())}(this),Promise.resolve()}}function QU(t,e,n,r={}){var s;const i=(t=ke(t,tl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=gt.MOCK_USER;else{a=Fb(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new R(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new gt(l)}t._authCredentials=new QL(new eE(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Ot{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ot(this.firestore,e,this._query)}}class ar extends Ot{constructor(e,n,r){super(e,n,qo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new B(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Hr(t,e,...n){if(t=re(t),bg("collection","path",e),t instanceof tl){const r=Ie.fromString(e,...n);return G_(r),new ar(t,null,r)}{if(!(t instanceof ze||t instanceof ar))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return G_(r),new ar(t.firestore,null,r)}}function YU(t,e){if(t=ke(t,tl),bg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ot(t,null,function(n){return new Or(Ie.emptyPath(),n)}(e))}function es(t,e,...n){if(t=re(t),arguments.length===1&&(e=tE.A()),bg("doc","path",e),t instanceof tl){const r=Ie.fromString(e,...n);return K_(r),new ze(t,null,new B(r))}{if(!(t instanceof ze||t instanceof ar))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return K_(r),new ze(t.firestore,t instanceof ar?t.converter:null,new B(r))}}function HT(t,e){return t=re(t),e=re(e),(t instanceof ze||t instanceof ar)&&(e instanceof ze||e instanceof ar)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function KT(t,e){return t=re(t),e=re(e),t instanceof Ot&&e instanceof Ot&&t.firestore===e.firestore&&Wc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ng(this,"async_queue_retry"),this.Xc=()=>{const n=Xl();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Xl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new _t;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!xs(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw tt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=og.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&K()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function ip(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class JU{constructor(){this._progressObserver={},this._taskCompletionResolver=new _t,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZU=-1;class et extends tl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new XU,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||GT(this),this._firestoreClient.terminate()}}function Tt(t){return t._firestoreClient||GT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function GT(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,c,l){return new AM(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,jT(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new VU(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function eF(t,e){QT(t=ke(t,et));const n=Tt(t);if(n._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");jn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),s=new yg;return WT(n,s,new MT(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function tF(t){QT(t=ke(t,et));const e=Tt(t);if(e._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");jn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new yg;return WT(e,r,new MU(r,n.cacheSizeBytes))}function WT(t,e,n){const r=new _t;return t.asyncQueue.enqueue(async()=>{try{await Jl(t,n),await sp(t,e),r.resolve()}catch(s){const i=s;if(!UT(i))throw i;jn("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function nF(t){if(t._initialized&&!t._terminated)throw new R(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new _t;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Dn.D())return Promise.resolve();const r=n+"main";await Dn.delete(r)}(Zm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function rF(t){return function(e){const n=new _t;return e.asyncQueue.enqueueAndForget(async()=>TU(await wg(e),n)),n.promise}(Tt(t=ke(t,et)))}function sF(t){return jU(Tt(t=ke(t,et)))}function iF(t){return qU(Tt(t=ke(t,et)))}function oF(t,e){const n=Tt(t=ke(t,et)),r=new JU;return GU(n,t._databaseId,e,r),r}function aF(t,e){return WU(Tt(t=ke(t,et)),e).then(n=>n?new Ot(t,null,n.query):null)}function QT(t){if(t._initialized||t._terminated)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dr(ft.fromBase64String(e))}catch(n){throw new R(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new dr(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cF=/^__.*__$/;class lF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class YT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function XT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class nd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new nd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Vu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(XT(this.ca)&&cF.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class uF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zc(e)}ya(e,n,r,s=!1){return new nd({ca:e,methodName:n,ga:r,path:nt.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ri(t){const e=t._freezeSettings(),n=Zc(t._databaseId);return new uF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rd(t,e,n,r,s,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,s);xg("Data must be an object, but it was:",o,r);const a=ex(r,o);let c,l;if(i.merge)c=new en(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=op(e,h,n);if(!o.contains(d))throw new R(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nx(u,d)||u.push(d)}c=new en(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new lF(new Ct(a),c,l)}class nl extends Ci{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nl}}function JT(t,e,n){return new nd({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ig extends Ci{_toFieldTransform(e){return new Yc(e.path,new _o)}isEqual(e){return e instanceof Ig}}class hF extends Ci{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=JT(this,e,!0),r=this.pa.map(i=>Ni(i,n)),s=new pi(r);return new Yc(e.path,s)}isEqual(e){return this===e}}class dF extends Ci{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=JT(this,e,!0),r=this.pa.map(i=>Ni(i,n)),s=new mi(r);return new Yc(e.path,s)}isEqual(e){return this===e}}class fF extends Ci{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new wo(e.serializer,DE(e.serializer,this.Ia));return new Yc(e.path,n)}isEqual(e){return this===e}}function Eg(t,e,n,r){const s=t.ya(1,e,n);xg("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();Ai(r,(c,l)=>{const u=Sg(e,c,n);l=re(l);const h=s.da(u);if(l instanceof nl)i.push(u);else{const d=Ni(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new en(i);return new YT(o,a,s.fieldTransforms)}function Tg(t,e,n,r,s,i){const o=t.ya(1,e,n),a=[op(e,r,n)],c=[s];if(i.length%2!=0)throw new R(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(op(e,i[d])),c.push(i[d+1]);const l=[],u=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!nx(l,a[d])){const f=a[d];let m=c[d];m=re(m);const y=o.da(f);if(m instanceof nl)l.push(f);else{const _=Ni(m,y);_!=null&&(l.push(f),u.set(f,_))}}const h=new en(l);return new YT(u,h,o.fieldTransforms)}function ZT(t,e,n,r=!1){return Ni(n,t.ya(r?4:3,e))}function Ni(t,e){if(tx(t=re(t)))return xg("Unsupported field value:",e,t),ex(t,e);if(t instanceof Ci)return function(n,r){if(!XT(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Ni(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=re(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return DE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ge.fromDate(n);return{timestampValue:bo(r.serializer,s)}}if(n instanceof Ge){const s=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bo(r.serializer,s)}}if(n instanceof td)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof dr)return{bytesValue:HE(r.serializer,n._byteString)};if(n instanceof ze){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${ed(n)}`)}(t,e)}function ex(t,e){const n={};return fE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(t,(r,s)=>{const i=Ni(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function tx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof td||t instanceof dr||t instanceof ze||t instanceof Ci)}function xg(t,e,n){if(!tx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ed(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function op(t,e,n){if((e=re(e))instanceof _s)return e._internalPath;if(typeof e=="string")return Sg(t,e);throw Vu("Field path arguments must be of type string or ",t,!1,void 0,n)}const pF=new RegExp("[~\\*/\\[\\]]");function Sg(t,e,n){if(e.search(pF)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _s(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new R(I.INVALID_ARGUMENT,a+t+c)}function nx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mF extends Tc{data(){return super.data()}}function sd(t,e){return typeof e=="string"?Sg(t,e):e instanceof _s?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kg{}class rl extends kg{}function St(t,e,...n){let r=[];e instanceof kg&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Ag).length,o=s.filter(a=>a instanceof id).length;if(i>1||i>0&&o>0)throw new R(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class id extends rl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new id(e,n,r)}_apply(e){const n=this._parse(e);return ix(e._query,n),new Ot(e.firestore,e.converter,Kf(e._query,n))}_parse(e){const n=Ri(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Y_(u,l);const d=[];for(const f of u)d.push(Q_(a,s,f));h={arrayValue:{values:d}}}else h=Q_(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Y_(u,l),h=ZT(o,i,u,l==="in"||l==="not-in");return ye.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zl(t,e,n){const r=e,s=sd("where",t);return id._create(s,r,n)}class Ag extends kg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ag(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)ix(i,a),i=Kf(i,a)}(e._query,n),new Ot(e.firestore,e.converter,Kf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cg extends rl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cg(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new so(s,i);return function(a,c){if(Fm(a)===null){const l=Hh(a);l!==null&&ox(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Ot(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Or(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function eu(t,e="asc"){const n=e,r=sd("orderBy",t);return Cg._create(r,n)}class od extends rl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new od(e,n,r)}_apply(e){return new Ot(e.firestore,e.converter,Pu(e._query,this._limit,this._limitType))}}function tu(t){return zT("limit",t),od._create("limit",t,"F")}function gF(t){return zT("limitToLast",t),od._create("limitToLast",t,"L")}class ad extends rl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ad(e,n,r)}_apply(e){const n=sx(e,this.type,this._docOrFields,this._inclusive);return new Ot(e.firestore,e.converter,function(r,s){return new Or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function yF(...t){return ad._create("startAt",t,!0)}function vF(...t){return ad._create("startAfter",t,!1)}class cd extends rl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=sx(e,this.type,this._docOrFields,this._inclusive);return new Ot(e.firestore,e.converter,function(r,s){return new Or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,n))}}function _F(...t){return cd._create("endBefore",t,!1)}function wF(...t){return cd._create("endAt",t,!0)}function sx(t,e,n,r){if(n[0]=re(n[0]),n[0]instanceof Tc)return function(s,i,o,a,c){if(!a)throw new R(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of si(s))if(u.field.isKeyField())l.push(di(i,a.key));else{const h=a.data.field(u.field);if(zh(h))throw new R(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new R(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ys(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Ri(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new R(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const m=l[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new R(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!$m(i)&&m.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const y=i.path.child(Ie.fromString(m));if(!B.isDocumentKey(y))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const _=new B(y);d.push(di(o,_))}else{const y=ZT(a,c,m);d.push(y)}}return new ys(d,u)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Q_(t,e,n){if(typeof(n=re(n))=="string"){if(n==="")throw new R(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$m(e)&&n.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!B.isDocumentKey(r))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return di(t,new B(r))}if(n instanceof ze)return di(t,n._key);throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ed(n)}.`)}function Y_(t,e){if(!Array.isArray(t)||t.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ix(t,e){if(e.isInequality()){const r=Hh(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new R(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Fm(t);i!==null&&ox(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ox(t,e,n){if(!n.isEqual(e))throw new R(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Rg{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ai(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new td(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yc(e));default:return null}}convertTimestamp(e){const n=fs(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Z(tT(r));const s=new ms(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(n)||tt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class bF extends Rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ar extends Tc{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $a extends Ar{data(e={}){return super.data(e)}}class ws{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new $a(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new $a(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:IF(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function ax(t,e){return t instanceof Ar&&e instanceof Ar?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ws&&e instanceof ws&&t._firestore===e._firestore&&KT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){t=ke(t,ze);const e=ke(t.firestore,et);return VT(Tt(e),t._key).then(n=>Ng(e,t,n))}class Pi extends Rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function EF(t){t=ke(t,ze);const e=ke(t.firestore,et),n=Tt(e),r=new Pi(e);return zU(n,t._key).then(s=>new Ar(e,r,t._key,s,new Qs(s!==null&&s.hasLocalMutations,!0),t.converter))}function TF(t){t=ke(t,ze);const e=ke(t.firestore,et);return VT(Tt(e),t._key,{source:"server"}).then(n=>Ng(e,t,n))}function Ea(t){t=ke(t,Ot);const e=ke(t.firestore,et),n=Tt(e),r=new Pi(e);return rx(t._query),BT(n,t._query).then(s=>new ws(e,r,t,s))}function xF(t){t=ke(t,Ot);const e=ke(t.firestore,et),n=Tt(e),r=new Pi(e);return HU(n,t._query).then(s=>new ws(e,r,t,s))}function SF(t){t=ke(t,Ot);const e=ke(t.firestore,et),n=Tt(e),r=new Pi(e);return BT(n,t._query,{source:"server"}).then(s=>new ws(e,r,t,s))}function X_(t,e,n){t=ke(t,ze);const r=ke(t.firestore,et),s=ld(t.converter,e,n);return sl(r,[rd(Ri(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ke.none())])}function ap(t,e,n,...r){t=ke(t,ze);const s=ke(t.firestore,et),i=Ri(s);let o;return o=typeof(e=re(e))=="string"||e instanceof _s?Tg(i,"updateDoc",t._key,e,n,r):Eg(i,"updateDoc",t._key,e),sl(s,[o.toMutation(t._key,Ke.exists(!0))])}function kF(t){return sl(ke(t.firestore,et),[new Ho(t._key,Ke.none())])}function ru(t,e){const n=ke(t.firestore,et),r=es(t),s=ld(t.converter,e);return sl(n,[rd(Ri(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then(()=>r)}function cx(t,...e){var n,r,s;t=re(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ip(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ip(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ze)l=ke(t.firestore,et),u=qo(t._key.path),c={next:h=>{e[o]&&e[o](Ng(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ke(t,Ot);l=ke(h.firestore,et),u=h._query;const d=new Pi(l);c={next:f=>{e[o]&&e[o](new ws(l,d,h,f))},error:e[o+1],complete:e[o+2]},rx(t._query)}return function(h,d,f,m){const y=new Jh(m),_=new ug(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>ag(await So(h),_)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>cg(await So(h),_))}}(Tt(l),u,a,c)}function AF(t,e){return KU(Tt(t=ke(t,et)),ip(e)?e:{next:e})}function sl(t,e){return function(n,r){const s=new _t;return n.asyncQueue.enqueueAndForget(async()=>wU(await wg(n),r,s)),s.promise}(Tt(t),e)}function Ng(t,e,n){const r=n.docs.get(e._key),s=new Pi(t);return new Ar(t,s,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const CF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ri(e)}set(e,n,r){this._verifyNotCommitted();const s=Yr(e,this._firestore),i=ld(s.converter,n,r),o=rd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ke.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Yr(e,this._firestore);let o;return o=typeof(n=re(n))=="string"||n instanceof _s?Tg(this._dataReader,"WriteBatch.update",i._key,n,r,s):Eg(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Yr(e,this._firestore);return this._mutations=this._mutations.concat(new Ho(n._key,Ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yr(t,e){if((t=re(t)).firestore!==e)throw new R(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NF extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ri(e)}get(e){const n=Yr(e,this._firestore),r=new bF(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return K();const i=s[0];if(i.isFoundDocument())return new Tc(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Tc(this._firestore,r,n._key,null,n.converter);throw K()})}set(e,n,r){const s=Yr(e,this._firestore),i=ld(s.converter,n,r),o=rd(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Yr(e,this._firestore);let o;return o=typeof(n=re(n))=="string"||n instanceof _s?Tg(this._dataReader,"Transaction.update",i._key,n,r,s):Eg(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Yr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Yr(e,this._firestore),r=new Pi(this._firestore);return super.get(e).then(s=>new Ar(this._firestore,r,n._key,s._document,new Qs(!1,!1),n.converter))}}function PF(t,e,n){t=ke(t,et);const r=Object.assign(Object.assign({},CF),n);return function(s){if(s.maxAttempts<1)throw new R(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new _t;return s.asyncQueue.enqueueAndForget(async()=>{const c=await BU(s);new $U(s.asyncQueue,c,o,i,a).run()}),a.promise}(Tt(t),s=>e(new NF(t,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(){return new nl("deleteField")}function OF(){return new Ig("serverTimestamp")}function LF(...t){return new hF("arrayUnion",t)}function MF(...t){return new dF("arrayRemove",t)}function UF(t){return new fF("increment",t)}(function(t,e=!0){(function(n){jo=n})(Nr),xr(new $n("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new et(new YL(n.getProvider("auth-internal")),new eM(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),En(Gv,"3.12.2",t),En(Gv,"3.12.2","esm2017")})();const FF="@firebase/firestore-compat",$F="0.3.11";/**
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
 */function Pg(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function Z_(){if(!SM())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}let lx=class cp{constructor(e){this._delegate=e}static fromBase64String(e){return Z_(),new cp(dr.fromBase64String(e))}static fromUint8Array(e){return J_(),new cp(dr.fromUint8Array(e))}toBase64(){return Z_(),this._delegate.toBase64()}toUint8Array(){return J_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t){return VF(t,["next","error","complete"])}function VF(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{enableIndexedDbPersistence(e,n){return eF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return tF(e._delegate)}clearIndexedDbPersistence(e){return nF(e._delegate)}}class ux{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ms||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&jn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){QU(this._delegate,e,n,r)}enableNetwork(){return sF(this._delegate)}disableNetwork(){return iF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,qT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return rF(this._delegate)}onSnapshotsInSync(e){return AF(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ko(this,Hr(this._delegate,e))}catch(n){throw Ht(n,"collection()","Firestore.collection()")}}doc(e){try{return new bn(this,es(this._delegate,e))}catch(n){throw Ht(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new zt(this,YU(this._delegate,e))}catch(n){throw Ht(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return PF(this._delegate,n=>e(new hx(this,n)))}batch(){return Tt(this._delegate),new dx(new RF(this._delegate,e=>sl(this._delegate,e)))}loadBundle(e){return oF(this._delegate,e)}namedQuery(e){return aF(this._delegate,e).then(n=>n?new zt(this,n):null)}}class ud extends Rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new lx(new dr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return bn.forKey(n,this.firestore,null)}}function jF(t){KL(t)}class hx{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new ud(e)}get(e){const n=Ys(e);return this._delegate.get(n).then(r=>new xc(this._firestore,new Ar(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const s=Ys(e);return r?(Pg("Transaction.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=Ys(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=Ys(e);return this._delegate.delete(n),this}}class dx{constructor(e){this._delegate=e}set(e,n,r){const s=Ys(e);return r?(Pg("WriteBatch.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=Ys(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=Ys(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class _i{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new $a(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Sc(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=_i.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(n);return i||(i=new _i(e,new ud(e),n),s.set(n,i)),i}}_i.INSTANCES=new WeakMap;class bn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ud(e)}static forPath(e,n,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new bn(n,new ze(n._delegate,r,new B(e)))}static forKey(e,n,r){return new bn(n,new ze(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ko(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ko(this.firestore,Hr(this._delegate,e))}catch(n){throw Ht(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=re(e),e instanceof ze?HT(this._delegate,e):!1}set(e,n){n=Pg("DocumentReference.set",n);try{return n?X_(this._delegate,e,n):X_(this._delegate,e)}catch(r){throw Ht(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?ap(this._delegate,e):ap(this._delegate,e,n,...r)}catch(s){throw Ht(s,"updateDoc()","DocumentReference.update()")}}delete(){return kF(this._delegate)}onSnapshot(...e){const n=fx(e),r=px(e,s=>new xc(this.firestore,new Ar(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return cx(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=EF(this._delegate):(e==null?void 0:e.source)==="server"?n=TF(this._delegate):n=nu(this._delegate),n.then(r=>new xc(this.firestore,new Ar(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(_i.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ht(t,e,n){return t.message=t.message.replace(e,n),t}function fx(t){for(const e of t)if(typeof e=="object"&&!lp(e))return e;return{}}function px(t,e){var n,r;let s;return lp(t[0])?s=t[0]:lp(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:i=>{s.next&&s.next(e(i))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class xc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new bn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return ax(this._delegate,e._delegate)}}class Sc extends xc{data(e){const n=this._delegate.data(e);return GL(n!==void 0),n}}class zt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ud(e)}where(e,n,r){try{return new zt(this.firestore,St(this._delegate,Zl(e,n,r)))}catch(s){throw Ht(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new zt(this.firestore,St(this._delegate,eu(e,n)))}catch(r){throw Ht(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new zt(this.firestore,St(this._delegate,tu(e)))}catch(n){throw Ht(n,"limit()","Query.limit()")}}limitToLast(e){try{return new zt(this.firestore,St(this._delegate,gF(e)))}catch(n){throw Ht(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new zt(this.firestore,St(this._delegate,yF(...e)))}catch(n){throw Ht(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new zt(this.firestore,St(this._delegate,vF(...e)))}catch(n){throw Ht(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new zt(this.firestore,St(this._delegate,_F(...e)))}catch(n){throw Ht(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new zt(this.firestore,St(this._delegate,wF(...e)))}catch(n){throw Ht(n,"endAt()","Query.endAt()")}}isEqual(e){return KT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=xF(this._delegate):(e==null?void 0:e.source)==="server"?n=SF(this._delegate):n=Ea(this._delegate),n.then(r=>new up(this.firestore,new ws(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=fx(e),r=px(e,s=>new up(this.firestore,new ws(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return cx(this._delegate,n,r)}withConverter(e){return new zt(this.firestore,e?this._delegate.withConverter(_i.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class qF{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Sc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class up{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new zt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Sc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new qF(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Sc(this._firestore,r))})}isEqual(e){return ax(this._delegate,e._delegate)}}class ko extends zt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new bn(this.firestore,e):null}doc(e){try{return e===void 0?new bn(this.firestore,es(this._delegate)):new bn(this.firestore,es(this._delegate,e))}catch(n){throw Ht(n,"doc()","CollectionReference.doc()")}}add(e){return ru(this._delegate,e).then(n=>new bn(this.firestore,n))}isEqual(e){return HT(this._delegate,e._delegate)}withConverter(e){return new ko(this.firestore,e?this._delegate.withConverter(_i.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ys(t){return ke(t,ze)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(...e){this._delegate=new _s(...e)}static documentId(){return new Dg(nt.keyField().canonicalString())}isEqual(e){return e=re(e),e instanceof _s?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this._delegate=e}static serverTimestamp(){const e=OF();return e._methodName="FieldValue.serverTimestamp",new Bs(e)}static delete(){const e=DF();return e._methodName="FieldValue.delete",new Bs(e)}static arrayUnion(...e){const n=LF(...e);return n._methodName="FieldValue.arrayUnion",new Bs(n)}static arrayRemove(...e){const n=MF(...e);return n._methodName="FieldValue.arrayRemove",new Bs(n)}static increment(e){const n=UF(e);return n._methodName="FieldValue.increment",new Bs(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const zF={Firestore:ux,GeoPoint:td,Timestamp:Ge,Blob:lx,Transaction:hx,WriteBatch:dx,DocumentReference:bn,DocumentSnapshot:xc,Query:zt,QueryDocumentSnapshot:Sc,QuerySnapshot:up,CollectionReference:ko,FieldPath:Dg,FieldValue:Bs,setLogLevel:jF,CACHE_SIZE_UNLIMITED:ZU};function HF(t,e){t.INTERNAL.registerComponent(new $n("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},zF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KF(t){HF(t,(e,n)=>new ux(e,n,new BF)),t.registerVersion(FF,$F)}KF(Mt);const GF={apiKey:"AIzaSyB92XCW231iCTqH4TmwITBeQvbLVqneYA8",authDomain:"itemshare-68ae3.firebaseapp.com",projectId:"itemshare-68ae3",storageBucket:"itemshare-68ae3.appspot.com",messagingSenderId:"468617277076",appId:"1:468617277076:web:6c0ce2cd38ad48ca66ce81"};Mt.initializeApp(GF);Mt.firestore.FieldValue.serverTimestamp;const Hn=Mt.firestore();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="firebasestorage.googleapis.com",gx="storageBucket",WF=2*60*1e3,QF=10*60*1e3,YF=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Ft{constructor(e,n,r=0){super(Gd(e),`Firebase Storage: ${n} (${Gd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function Gd(t){return"storage/"+t}function Og(){const t="An unknown error occurred, please check the error payload for server response.";return new Ye(He.UNKNOWN,t)}function XF(t){return new Ye(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function JF(t){return new Ye(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ZF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ye(He.UNAUTHENTICATED,t)}function e$(){return new Ye(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function t$(t){return new Ye(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function yx(){return new Ye(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vx(){return new Ye(He.CANCELED,"User canceled the upload/download.")}function n$(t){return new Ye(He.INVALID_URL,"Invalid URL '"+t+"'.")}function r$(t){return new Ye(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function s$(){return new Ye(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gx+"' property when initializing the app?")}function _x(){return new Ye(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function i$(){return new Ye(He.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function o$(){return new Ye(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function a$(t){return new Ye(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hp(t){return new Ye(He.INVALID_ARGUMENT,t)}function wx(){return new Ye(He.APP_DELETED,"The Firebase app was deleted.")}function c$(t){return new Ye(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Va(t,e){return new Ye(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function da(t){throw new Ye(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(r.path==="")return r;throw r$(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},y=n===mx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",T=new RegExp(`^https?://${y}/${s}/${_}`,"i"),A=[{regex:a,indices:c,postModify:i},{regex:f,indices:m,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let E=0;E<A.length;E++){const L=A[E],F=L.regex.exec(e);if(F){const Y=F[L.indices.bucket];let G=F[L.indices.path];G||(G=""),r=new mn(Y,G),L.postModify(r);break}}if(r==null)throw n$(e);return r}}class l${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u$(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(f,c())},_)}function d(){i&&clearTimeout(i)}function f(_,...T){if(l){d();return}if(_){d(),u.call(null,_,...T);return}if(c()||o){d(),u.call(null,_,...T);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,h(A)}let m=!1;function y(_){m||(m=!0,d(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function h$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d$(t){return t!==void 0}function f$(t){return typeof t=="function"}function p$(t){return typeof t=="object"&&!Array.isArray(t)}function hd(t){return typeof t=="string"||t instanceof String}function ew(t){return Lg()&&t instanceof Blob}function Lg(){return typeof Blob<"u"&&!yh()}function tw(t,e,n,r){if(r<e)throw hp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function bx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ii;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ii||(ii={}));/**
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
 */function Ix(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Al(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ii.NO_ERROR,c=i.getStatus();if(!a||Ix(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ii.ABORT;r(!1,new Al(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Al(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());d$(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Og();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?wx():vx();o(c)}else{const c=yx();o(c)}};this.canceled_?n(!1,new Al(!1,null,!0)):this.backoffId_=u$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&h$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Al{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function g$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function y$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function v$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function w$(t,e,n,r,s,i,o=!0){const a=bx(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return v$(l,e),g$(l,n),y$(l,i),_$(l,r),new m$(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function I$(...t){const e=b$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Lg())return new Blob(t);throw new Ye(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function E$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function T$(t){if(typeof atob>"u")throw a$("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wd{constructor(e,n){this.data=e,this.contentType=n||null}}function x$(t,e){switch(t){case sr.RAW:return new Wd(Ex(e));case sr.BASE64:case sr.BASE64URL:return new Wd(Tx(t,e));case sr.DATA_URL:return new Wd(k$(e),A$(e))}throw Og()}function Ex(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function S$(t){let e;try{e=decodeURIComponent(t)}catch{throw Va(sr.DATA_URL,"Malformed data URL.")}return Ex(e)}function Tx(t,e){switch(t){case sr.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Va(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case sr.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Va(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=T$(e)}catch(s){throw s.message.includes("polyfill")?s:Va(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class xx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Va(sr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=C$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function k$(t){const e=new xx(t);return e.base64?Tx(sr.BASE64,e.rest):S$(e.rest)}function A$(t){return new xx(t).contentType}function C$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){let r=0,s="";ew(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ew(this.data_)){const r=this.data_,s=E$(r,e,n);return s===null?null:new Xr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Xr(r,!0)}}static getBlob(...e){if(Lg()){const n=e.map(r=>r instanceof Xr?r.data_:r);return new Xr(I$.apply(null,n))}else{const n=e.map(o=>hd(o)?x$(sr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Xr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){let e;try{e=JSON.parse(t)}catch{return null}return p$(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function N$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function kx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P$(t,e){return e}class jt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||P$}}let Cl=null;function D$(t){return!hd(t)||t.length<2?t:kx(t)}function Ax(){if(Cl)return Cl;const t=[];t.push(new jt("bucket")),t.push(new jt("generation")),t.push(new jt("metageneration")),t.push(new jt("name","fullPath",!0));function e(i,o){return D$(o)}const n=new jt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new jt("size");return s.xform=r,t.push(s),t.push(new jt("timeCreated")),t.push(new jt("updated")),t.push(new jt("md5Hash",null,!0)),t.push(new jt("cacheControl",null,!0)),t.push(new jt("contentDisposition",null,!0)),t.push(new jt("contentEncoding",null,!0)),t.push(new jt("contentLanguage",null,!0)),t.push(new jt("contentType",null,!0)),t.push(new jt("metadata","customMetadata",!0)),Cl=t,Cl}function O$(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new mn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function L$(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return O$(r,t),r}function Cx(t,e,n){const r=Sx(e);return r===null?null:L$(t,r,n)}function M$(t,e,n,r){const s=Sx(e);if(s===null||!hd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=il(d,n,r),m=bx({alt:"media",token:l});return f+m})[0]}function Rx(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Yo{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){if(!t)throw Og()}function Mg(t,e){function n(r,s){const i=Cx(t,s,e);return Er(i!==null),i}return n}function U$(t,e){function n(r,s){const i=Cx(t,s,e);return Er(i!==null),M$(i,s,t.host,t._protocol)}return n}function ol(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=e$():s=ZF():n.getStatus()===402?s=JF(t.bucket):n.getStatus()===403?s=t$(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Nx(t){const e=ol(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=XF(t.path)),i.serverResponse=s.serverResponse,i}return n}function F$(t,e,n){const r=e.fullServerUrl(),s=il(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Yo(s,i,Mg(t,n),o);return a.errorHandler=Nx(e),a}function $$(t,e,n){const r=e.fullServerUrl(),s=il(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Yo(s,i,U$(t,n),o);return a.errorHandler=Nx(e),a}function V$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Px(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=V$(null,e)),r}function B$(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let E=0;E<2;E++)A=A+Math.random().toString().slice(2);return A}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Px(e,r,s),u=Rx(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Xr.getBlob(h,r,d);if(f===null)throw _x();const m={name:l.fullPath},y=il(i,t.host,t._protocol),_="POST",T=t.maxUploadRetryTime,k=new Yo(y,_,Mg(t,n),T);return k.urlParams=m,k.headers=o,k.body=f.uploadData(),k.errorHandler=ol(e),k}class Bu{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Ug(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Er(!1)}return Er(!!n&&(e||["active"]).indexOf(n)!==-1),n}function j$(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=Px(e,r,s),a={name:o.fullPath},c=il(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Rx(o,n),d=t.maxUploadRetryTime;function f(y){Ug(y);let _;try{_=y.getResponseHeader("X-Goog-Upload-URL")}catch{Er(!1)}return Er(hd(_)),_}const m=new Yo(c,l,f,d);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=ol(e),m}function q$(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=Ug(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Er(!1)}h||Er(!1);const d=Number(h);return Er(!isNaN(d)),new Bu(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Yo(n,o,i,a);return c.headers=s,c.errorHandler=ol(e),c}const nw=256*1024;function z$(t,e,n,r,s,i,o,a){const c=new Bu(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw i$();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,d);if(y===null)throw _x();function _(E,L){const F=Ug(E,["active","final"]),Y=c.current+u,G=r.size();let W;return F==="final"?W=Mg(e,i)(E,L):W=null,new Bu(Y,G,F==="final",W)}const T="POST",k=e.maxUploadRetryTime,A=new Yo(n,T,_,k);return A.headers=m,A.body=y.uploadData(),A.progressCallback=a||null,A.errorHandler=ol(t),A}const Jt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Qd(t){switch(t){case"running":case"pausing":case"canceling":return Jt.RUNNING;case"paused":return Jt.PAUSED;case"success":return Jt.SUCCESS;case"canceled":return Jt.CANCELED;case"error":return Jt.ERROR;default:return Jt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(e,n,r){if(f$(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class K${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ii.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ii.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ii.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw da("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw da("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw da("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw da("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw da("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class G$ extends K${initXhr(){this.xhr_.responseType="text"}}function Hi(){return new G$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W${constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ax(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(He.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Ix(s.status,[]))if(i)s=yx();else{this.sleepTime=Math.max(this.sleepTime*2,YF),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(He.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=j$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Hi,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=q$(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Hi,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=nw*this._chunkMultiplier,n=new Bu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=z$(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Hi,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){nw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=F$(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Hi,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=B$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Hi,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=vx(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Qd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new H$(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Qd(this._state)){case Jt.SUCCESS:Vi(this._resolve.bind(null,this.snapshot))();break;case Jt.CANCELED:case Jt.ERROR:const n=this._reject;Vi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Qd(this._state)){case Jt.RUNNING:case Jt.PAUSED:e.next&&Vi(e.next.bind(e,this.snapshot))();break;case Jt.SUCCESS:e.complete&&Vi(e.complete.bind(e))();break;case Jt.CANCELED:case Jt.ERROR:e.error&&Vi(e.error.bind(e,this._error))();break;default:e.error&&Vi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class wi{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wi(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kx(this._location.path)}get storage(){return this._service}get parent(){const e=R$(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new wi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw c$(e)}}function Q$(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new W$(t,new Xr(e),n)}function Y$(t){t._throwIfRoot("getDownloadURL");const e=$$(t.storage,t._location,Ax());return t.storage.makeRequestWithTokens(e,Hi).then(n=>{if(n===null)throw o$();return n})}function X$(t,e){const n=N$(t._location.path,e),r=new mn(t._location.bucket,n);return new wi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J$(t){return/^[A-Za-z]+:\/\//.test(t)}function Z$(t,e){return new wi(t,e)}function Dx(t,e){if(t instanceof Fg){const n=t;if(n._bucket==null)throw s$();const r=new wi(n,n._bucket);return e!=null?Dx(r,e):r}else return e!==void 0?X$(t,e):t}function eV(t,e){if(e&&J$(e)){if(t instanceof Fg)return Z$(t,e);throw hp("To use ref(service, url), the first argument must be a Storage instance.")}else return Dx(t,e)}function rw(t,e){const n=e==null?void 0:e[gx];return n==null?null:mn.makeFromBucketSpec(n,t)}function tV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Fb(s,t.app.options.projectId))}class Fg{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=mx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WF,this._maxUploadRetryTime=QF,this._requests=new Set,s!=null?this._bucket=mn.makeFromBucketSpec(s,this._host):this._bucket=rw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=rw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wi(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new l$(wx());{const o=w$(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const sw="@firebase/storage",iw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="storage";function nV(t,e,n){return t=re(t),Q$(t,e,n)}function rV(t){return t=re(t),Y$(t)}function sV(t,e){return t=re(t),eV(t,e)}function iV(t=Kb(),e){t=re(t);const r=qp(t,Ox).getImmediate({identifier:e}),s=mC("storage");return s&&oV(r,...s),r}function oV(t,e,n,r={}){tV(t,e,n,r)}function aV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Fg(n,r,s,e,Nr)}function cV(){xr(new $n(Ox,aV,"PUBLIC").setMultipleInstances(!0)),En(sw,iw,""),En(sw,iw,"esm2017")}cV();const lV=iV(),_n=$A("itemshare",{state:()=>({temp:1,myUserUid:localStorage.getItem("useruid")||null,myProfile:{firstName:"",lastName:"",image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",location:""},editProfile:{id:9,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},sampleProfiles:[{id:0,firstName:"Isaac",lastName:"Einstein",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Baybay City"},{id:1,firstName:"John",lastName:"Smith",image:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",location:"Baybay City"},{id:2,firstName:"Emily",lastName:"Johnson",image:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",location:"Tacloban City"},{id:3,firstName:"David",lastName:"Brown",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:"Calbayog City"},{id:4,firstName:"Sarah",lastName:"Davis",image:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",location:"Tacloban City"},{id:5,firstName:"Michael",lastName:"Wilson",image:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",location:"Ormoc City"},{id:6,firstName:"Jessica",lastName:"Thompson",image:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",location:"Maasin City"},{id:7,firstName:"Christopher",lastName:"Martinez",image:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",location:"Tacloban City"},{id:8,firstName:"Megan",lastName:"Taylor",image:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",location:"Calbayog City"}],rentedItems:[],sampleItems:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",ownerId:0},{itemId:2,itemName:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",ownerId:1},{itemId:3,itemName:"Cushion set A",location:"Maasin City",rentAmount:"50.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",ownerId:2},{itemId:4,name:"Table",location:"Ormoc City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",ownerId:3},{itemId:5,itemName:"Chair",location:"Sogod, Southern Leyte",rentAmount:"75.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",ownerId:4},{itemId:6,itemName:"Bookshelf",location:"Biliran",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",ownerId:5},{itemId:7,itemName:"Sofa",location:"Ormoc City",rentAmount:"250.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",ownerId:6},{itemId:8,itemName:"Dining Table",location:"Baybay City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",ownerId:7},{itemId:9,itemName:"Kitchen Cabinet",location:"Maasin, Southern Leyte",rentAmount:"220.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",ownerId:8},{itemId:10,itemName:"Desk",location:"Tacloban City",rentAmount:"120.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",ownerId:0},{itemId:11,itemName:"Bed Frame",location:"Ormoc City",rentAmount:"200.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",ownerId:1},{itemId:12,itemName:"Mattress",location:"Baybay City",rentAmount:"100.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",ownerId:2},{itemId:13,itemName:"Wardrobe",location:"Tacloban City",rentAmount:"180.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",ownerId:3},{itemId:14,itemName:"Television",location:"Maasin, Southern Leyte",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",ownerId:4},{itemId:15,itemName:"Coffee Table",location:"Ormoc City",rentAmount:"90.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",ownerId:5},{itemId:16,itemName:"Side Table",location:"Baybay City",rentAmount:"60.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",ownerId:6},{itemId:17,itemName:"Dresser",location:"Tacloban City",rentAmount:"180.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",ownerId:7},{itemId:18,itemName:"Armchair",location:"Maasin, Southern Leyte",rentAmount:"120.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",ownerId:8}]}),getters:{tempUserProfile(t){return{firstName:"Loading...",lastName:"",image:"https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",location:"Loading location..."}},productsCheaperThan(t){return e=>t.products.filter(n=>n.price<e)},itemsInRange(t){return(e,n)=>t.sampleItems.slice(e,n)},itemById(t){return e=>t.sampleItems.find(n=>n.id==e)},loadedProfile(t){return e=>t.sampleProfiles[e]},loggedInUser(t){return t.myUserUid}},actions:{async initMyProfile(){Mt.auth().onAuthStateChanged(async t=>{if(t)this.myUserUid=t.uid,this.myProfile=await this.loadProfile(t.uid);else return this.useruid=null,{}})},async loadProfile(t){const e=await nu(es(Hn,"users",t));if(e.exists())return{firstName:e.data().firstName,lastName:e.data().lastName,location:e.data().location,image:e.data().image}},async login(t,e){if(t!==""&&e!=="")try{const n=await Mt.auth().signInWithEmailAndPassword(t,e);return this.myUserUid=n.user.uid,localStorage.setItem("useruid",this.myUserUid),!0}catch(n){switch(n.code){case"auth/invalid-email":throw"Invalid email";case"auth/user-not-found":throw"No account with that email was found";case"auth/wrong-password":throw"Incorrect password";default:throw n.code}}else throw"Please fill out all the fields!"},async loadItems(t=12,e=""){let n=St(Hr(Hn,"items"));e&&(n=St(n,Zl("ownerId","==",e))),n=St(n,eu("createdAt","desc"),tu(t));const r=await Ea(n),s=[];return r.forEach(i=>{const o={itemId:i.id,itemName:i.data().itemName,location:i.data().location,rentAmount:i.data().rentAmount,rentRate:i.data().rentRate,image:i.data().images?i.data().images[0]:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"};s.push(o)}),s},async loadItem(t){const e=await nu(es(Hn,"items",t));if(e.exists())return{itemName:e.data().itemName,location:e.data().location,rentAmount:e.data().rentAmount,rentRate:e.data().rentRate,description:e.data().description,tags:e.data().tags,images:e.data().images||["https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"],ownerId:e.data().ownerId}},async uploadImage(t){const e=sV(lV,"itemImages/"+Date.now()+"."+t.name.split(".").pop());return await nV(e,t),await rV(e)},async createItem(t){if(t.imageFiles.length==0||t.itemName==""||t.location==""||t.rentAmount==""||t.rentRate==""||t.tags.length==0||t.description=="")throw"Please fill out all the fields!";try{const n=[];for(var e of t.imageFiles)n.push(await this.uploadImage(e));return await ru(Hr(Hn,"items"),{ownerId:this.myUserUid,images:n,itemName:t.itemName,location:t.location,rentAmount:t.rentAmount,rentRate:t.rentRate,tags:t.tags,description:t.description,createdAt:Date.now()}),!0}catch(n){throw n.message}},searchItem(){return[]},async loadConversations(t){let e=St(Hr(Hn,"conversations"));e=St(e,Zl("participants","array-contains",t)),e=St(e,eu("lastSentAt","desc"),tu(12));const n=await Ea(e),r=[];for(const s of n.docs){let i={convoId:s.id,lastMessage:s.data().lastMessage,lastSentAt:s.data().lastSentAt,lastSender:s.data().lastSender,participant:await this.loadProfile(s.data().participants.find(o=>o!=t)),isRead:s.data().isRead};r.push(i)}return r},async loadConversation(t){const e=await nu(es(Hn,"conversations",t));if(e.exists())return{lastMessage:e.data().lastMessage,lastSentAt:e.data().lastSentAt,lastSender:e.data().lastSender,participants:e.data().participants,isRead:e.data().isRead}},async loadMessages(t){let e=St(Hr(Hn,"conversations",t,"messages"));e=St(e,eu("sentAt"),tu(64));const n=await Ea(e),r=[];return n.forEach(s=>{let i={content:s.data().content,sender:s.data().sender,type:s.data().type};r.push(i)}),r},async register(t){if(t.phoneNumber==""||t.email==""||t.firstName==""||t.lastName==""||t.gender=="Select"||t.location==""||t.birthday==""||t.password==""||t.confirmPassword=="")throw"Please fill out all the fields!";if(t.password!=t.confirmPassword)throw"Password does not match!";if(!t.terms)throw"Please agree to the terms and conditions.";switch(t.gender){case"Male":t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_male.png?alt=media&token=b239dcf0-a57f-43a1-a0bd-34898f5a9714";break;case"Female":t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_female.png?alt=media&token=6bca62c3-150b-46f7-ad60-6128217e24bd";break;default:t.image="https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366";break}try{const e=await Mt.auth().createUserWithEmailAndPassword(t.email,t.password);await Hn.collection("users").doc(e.user.uid).set({firstName:t.firstName,lastName:t.lastName,email:t.email,phoneNumber:t.phoneNumber,gender:t.gender,birthday:t.birthday,location:t.location,image:t.image,verified:!1,admin:!1}),this.myUserUid=e.user.uid,localStorage.setItem("useruid",this.myUserUid)}catch(e){throw e.message}return!0},async logout(){try{return await Mt.auth().signOut(),this.myUserUid=null,localStorage.removeItem("useruid"),!0}catch(t){throw t}},async messageOwner(t,e){const n=Hr(Hn,"conversations"),r=[this.myUserUid,t],s=St(n,Zl("participants","==",r)),i=await Ea(s);let o,a;return i.empty?(a=await ru(n,{participants:r}),o=a.id):(a=i.docs[0],o=a.id),this.sendMessage(o,e),o},async sendMessage(t,e){const n=es(Hn,"conversations",t),r=Hr(n,"messages");await ru(r,{sender:this.myUserUid,type:"message",content:e,sentAt:Mt.firestore.FieldValue.serverTimestamp()}),await ap(n,{lastMessage:e,lastSender:this.myUserUid,lastSentAt:Mt.firestore.FieldValue.serverTimestamp(),isRead:!1})}}}),uV={class:"flex w-full flex-col gap-1"},hV=["type","placeholder","value","disabled"],We={__name:"CustomField",props:{modelValue:{default:""},inputType:{type:String,default:"text"},placeholder:{type:String,default:""},label:{type:String,default:""},disabled:{default:!1}},emits:["update:modelValue"],setup(t){return(e,n)=>(J(),se("div",uV,[fn(p("label",{class:"text-text"},Ne(t.label),513),[[is,t.label]]),p("input",{size:"1",type:t.inputType,placeholder:t.placeholder,value:t.modelValue,disabled:t.disabled,onInput:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value)),class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 text-text placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-2 focus:border-primary focus:border-opacity-100 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50 disabled:bg-text disabled:bg-opacity-10"},null,40,hV),Np(e.$slots,"default")]))}},dV={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},fV=["onSubmit"],pV=p("h1",null,"Login",-1),mV={class:"pt-2"},gV={class:"pt-2"},yV=p("button",{class:"rounded-md bg-primary px-6 py-2 text-background"}," Login ",-1),vV={__name:"LoginView",setup(t){const e=Nc(),n=_n();let r=le("");const s=le(""),i=le("");async function o(){r.value="";try{await n.login(s.value,i.value)&&e.push("/home")}catch(a){r.value=a}}return(a,c)=>{const l=ao("RouterLink");return J(),se("div",dV,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:Un(o,["stop","prevent"])},[pV,V(We,{"input-type":"email",modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),placeholder:"Email"},null,8,["modelValue"]),V(We,{"input-type":"password",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=u=>i.value=u),placeholder:"Password"},null,8,["modelValue"]),fn(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},Ne(pe(r)),513),[[is,pe(r)]]),p("p",mV,[V(l,{to:"/forgot-password",class:"underline decoration-accent"},{default:je(()=>[xe("Forgot Password?")]),_:1})]),p("p",gV,[xe(" New here? "),V(l,{to:"/register",class:"underline decoration-accent"},{default:je(()=>[xe("Create an account!")]),_:1})]),yV],40,fV)])}}},_V={class:"flex max-w-full flex-col self-center overflow-y-auto rounded-3xl bg-background p-8"},wV=["onSubmit"],bV=p("h1",null,"Create an account",-1),IV={class:"flex flex-col gap-2 xl:flex-row xl:gap-8"},EV={class:"flex basis-1/2 flex-col gap-2"},TV=p("button",{class:"rounded-md border-2 border-text border-opacity-50 bg-secondary px-6 py-2 text-text text-opacity-80 transition-colors hover:bg-opacity-90"}," Send SMS Code ",-1),xV=p("option",null,"Select",-1),SV=p("option",null,"Male",-1),kV=p("option",null,"Female",-1),AV=p("option",null,"Others",-1),CV={class:"flex basis-1/2 flex-col gap-2"},RV={class:"text-sm"},NV=p("span",null," I agree to the ",-1),PV=p("button",{class:"rounded-md border-2 border-transparent bg-primary px-6 py-2 text-white"}," Create account ",-1),DV={__name:"RegisterView",setup(t){const e=Nc(),n=_n();let r=le("");const s=le({phoneNumber:"",email:"",firstName:"",lastName:"",gender:"Select",location:"",image:"",birthday:"",password:"",confirmPassword:"",terms:!1});async function i(){try{await n.register(s.value)&&e.push("/home")}catch(o){r.value=o}}return(o,a)=>{const c=ao("CustomDropdown"),l=ao("RouterLink");return J(),se("div",_V,[p("form",{class:"flex max-w-full flex-col gap-2",onSubmit:Un(i,["stop","prevent"])},[bV,p("div",IV,[p("div",EV,[V(We,{label:"Phone Number",modelValue:s.value.phoneNumber,"onUpdate:modelValue":a[0]||(a[0]=u=>s.value.phoneNumber=u),"input-type":"tel",placeholder:"Enter your phone number"},{default:je(()=>[TV]),_:1},8,["modelValue"]),V(We,{label:"Email Address",modelValue:s.value.email,"onUpdate:modelValue":a[1]||(a[1]=u=>s.value.email=u),"input-type":"email",placeholder:"Email"},null,8,["modelValue"]),V(We,{label:"First Name",modelValue:s.value.firstName,"onUpdate:modelValue":a[2]||(a[2]=u=>s.value.firstName=u),"input-type":"text",placeholder:"First Name"},null,8,["modelValue"]),V(We,{label:"Last Name",modelValue:s.value.lastName,"onUpdate:modelValue":a[3]||(a[3]=u=>s.value.lastName=u),"input-type":"text",placeholder:"Last Name"},null,8,["modelValue"]),V(c,{label:"Gender",modelValue:s.value.gender,"onUpdate:modelValue":a[4]||(a[4]=u=>s.value.gender=u)},{default:je(()=>[xV,SV,kV,AV]),_:1},8,["modelValue"])]),p("div",CV,[V(We,{label:"Location",modelValue:s.value.location,"onUpdate:modelValue":a[5]||(a[5]=u=>s.value.location=u),"input-type":"text",placeholder:"Location"},null,8,["modelValue"]),V(We,{label:"Birthday",modelValue:s.value.birthday,"onUpdate:modelValue":a[6]||(a[6]=u=>s.value.birthday=u),"input-type":"date"},null,8,["modelValue"]),V(We,{label:"Password",modelValue:s.value.password,"onUpdate:modelValue":a[7]||(a[7]=u=>s.value.password=u),"input-type":"password",placeholder:"Password"},null,8,["modelValue"]),V(We,{label:"Confirm Password",modelValue:s.value.confirmPassword,"onUpdate:modelValue":a[8]||(a[8]=u=>s.value.confirmPassword=u),"input-type":"password",placeholder:"Confirm Password"},null,8,["modelValue"]),fn(p("div",{class:"errorMessage rounded-md border-2 border-red-400 bg-red-300 px-4 py-2 align-middle text-sm text-red-800"},Ne(pe(r)),513),[[is,pe(r)]]),p("p",RV,[fn(p("input",{type:"checkbox",name:"checkbox",id:"checkbox","onUpdate:modelValue":a[9]||(a[9]=u=>s.value.terms=u),class:"text-accent focus:ring-0"},null,512),[[yb,s.value.terms]]),NV,V(l,{to:"/terms-and-conditions",class:"underline decoration-accent"},{default:je(()=>[xe(" Terms and Conditions ")]),_:1})]),PV,V(l,{to:"/login",class:"rounded-md border-2 border-primary bg-background px-6 py-2 text-center text-primary"},{default:je(()=>[xe(" Go back ")]),_:1})])])],40,wV)])}}},OV={class:"whitespace-pre text-primary"},LV={class:"material-icons-outlined"},Xs={__name:"StarRating",props:{value:{default:0}},setup(t){return(e,n)=>(J(),se("p",OV,[(J(),se($e,null,ir(5,r=>p("span",LV,Ne(r<t.value?"star":"grade"),1)),64))]))}},MV={class:"rounded-lg shadow-md shadow-gray-400 overflow-hidden hidden z-50 bg-white",id:"dropdownNotifications"},UV={class:"h-64 w-full md:w-96 flex flex-col","aria-labelledby":"dropdownNotificationsButton"},FV=p("h2",{class:"font-bold px-3 py-2 shadow-sm shadow-gray-400 z-10 text-green-600"}," NOTIFICATIONS ",-1),$V={class:"overflow-y-auto bg-green-50"},VV={class:"flex flex-col gap-1 p-2"},BV={class:"p-2 text-sm shadow-sm bg-white shadow-gray-400 text-gray-700"},jV={__name:"NotificationsPopup",setup(t){const e=le([{type:"review",message:'Lorem Dolor gave your "3D Scanner" a rating:',rating:4,time:"JUST NOW"},{type:"review",message:'Lorem Dolor left a review to your "3D Scanner": "Way lami imo item di nani nahu iuli nimo kay ahu ni sunugon human gamit!"',rating:5,time:"24 MINS AGO"},{type:"upcoming",message:'"2D Printer" will be ready for you to pick up in 24 hours.',time:"23 HOURS AGO"},{type:"message",message:"Lorem Dolor chatted you! Be sure to leave a reply.",time:"4 DAYS AGO"}]);return(n,r)=>(J(),se("div",MV,[p("div",UV,[FV,p("div",$V,[p("div",VV,[(J(!0),se($e,null,ir(e.value,s=>(J(),se("article",BV,[p("p",null,Ne(s.message),1),s.rating?(J(),Ti(Xs,{key:0,value:s.rating},null,8,["value"])):wr("",!0),p("p",null,Ne(s.time),1)]))),256))])])])]))}};var qV=function(){function t(e,n){n===void 0&&(n=[]),this._eventType=e,this._eventFunctions=n}return t.prototype.init=function(){var e=this;this._eventFunctions.forEach(function(n){typeof window<"u"&&window.addEventListener(e._eventType,n)})},t}(),ju=globalThis&&globalThis.__assign||function(){return ju=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},ju.apply(this,arguments)},qu={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},Lx=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=qu),this._items=e,this._options=ju(ju({},qu),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&this._items.map(function(n){n.active&&e.open(n.id),n.triggerEl.addEventListener("click",function(){e.toggle(n.id)})})},t.prototype.getItem=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.open=function(e){var n,r,s=this,i=this.getItem(e);this._options.alwaysOpen||this._items.map(function(o){var a,c;o!==i&&((a=o.triggerEl.classList).remove.apply(a,s._options.activeClasses.split(" ")),(c=o.triggerEl.classList).add.apply(c,s._options.inactiveClasses.split(" ")),o.targetEl.classList.add("hidden"),o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"))}),(n=i.triggerEl.classList).add.apply(n,this._options.activeClasses.split(" ")),(r=i.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),i.triggerEl.setAttribute("aria-expanded","true"),i.targetEl.classList.remove("hidden"),i.active=!0,i.iconEl&&i.iconEl.classList.add("rotate-180"),this._options.onOpen(this,i)},t.prototype.toggle=function(e){var n=this.getItem(e);n.active?this.close(e):this.open(e),this._options.onToggle(this,n)},t.prototype.close=function(e){var n,r,s=this.getItem(e);(n=s.triggerEl.classList).remove.apply(n,this._options.activeClasses.split(" ")),(r=s.triggerEl.classList).add.apply(r,this._options.inactiveClasses.split(" ")),s.targetEl.classList.add("hidden"),s.triggerEl.setAttribute("aria-expanded","false"),s.active=!1,s.iconEl&&s.iconEl.classList.remove("rotate-180"),this._options.onClose(this,s)},t}();function $g(){document.querySelectorAll("[data-accordion]").forEach(function(t){var e=t.getAttribute("data-accordion"),n=t.getAttribute("data-active-classes"),r=t.getAttribute("data-inactive-classes"),s=[];t.querySelectorAll("[data-accordion-target]").forEach(function(i){if(i.closest("[data-accordion]")===t){var o={id:i.getAttribute("data-accordion-target"),triggerEl:i,targetEl:document.querySelector(i.getAttribute("data-accordion-target")),iconEl:i.querySelector("[data-accordion-icon]"),active:i.getAttribute("aria-expanded")==="true"};s.push(o)}}),new Lx(s,{alwaysOpen:e==="open",activeClasses:n||qu.activeClasses,inactiveClasses:r||qu.inactiveClasses})})}typeof window<"u"&&(window.Accordion=Lx,window.initAccordions=$g);var zu=globalThis&&globalThis.__assign||function(){return zu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},zu.apply(this,arguments)},ow={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},Mx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=ow),this._targetEl=e,this._triggerEl=n,this._options=zu(zu({},ow),r),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){e.toggle()}))},t.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},t.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},t.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},t}();function Vg(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(t){var e=t.getAttribute("data-collapse-toggle"),n=document.getElementById(e);n?new Mx(n,t):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))})}typeof window<"u"&&(window.Collapse=Mx,window.initCollapses=Vg);var js=globalThis&&globalThis.__assign||function(){return js=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},js.apply(this,arguments)},su={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},Ux=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=su),this._items=e,this._options=js(js(js({},su),n),{indicators:js(js({},su.indicators),n.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return t.prototype._init=function(){var e=this;this._items.map(function(n){n.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(n,r){n.el.addEventListener("click",function(){e.slideTo(r)})})},t.prototype.getItem=function(e){return this._items[e]},t.prototype.slideTo=function(e){var n=this._items[e],r={left:n.position===0?this._items[this._items.length-1]:this._items[n.position-1],middle:n,right:n.position===this._items.length-1?this._items[0]:this._items[n.position+1]};this._rotate(r),this._setActiveItem(n),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},t.prototype.next=function(){var e=this._getActiveItem(),n=null;e.position===this._items.length-1?n=this._items[0]:n=this._items[e.position+1],this.slideTo(n.position),this._options.onNext(this)},t.prototype.prev=function(){var e=this._getActiveItem(),n=null;e.position===0?n=this._items[this._items.length-1]:n=this._items[e.position-1],this.slideTo(n.position),this._options.onPrev(this)},t.prototype._rotate=function(e){this._items.map(function(n){n.el.classList.add("hidden")}),e.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.left.el.classList.add("-translate-x-full","z-10"),e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-20"),e.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.right.el.classList.add("translate-x-full","z-10")},t.prototype.cycle=function(){var e=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){e.next()},this._intervalDuration))},t.prototype.pause=function(){clearInterval(this._intervalInstance)},t.prototype._getActiveItem=function(){return this._activeItem},t.prototype._setActiveItem=function(e){var n,r,s=this;this._activeItem=e;var i=e.position;this._indicators.length&&(this._indicators.map(function(o){var a,c;o.el.setAttribute("aria-current","false"),(a=o.el.classList).remove.apply(a,s._options.indicators.activeClasses.split(" ")),(c=o.el.classList).add.apply(c,s._options.indicators.inactiveClasses.split(" "))}),(n=this._indicators[i].el.classList).add.apply(n,this._options.indicators.activeClasses.split(" ")),(r=this._indicators[i].el.classList).remove.apply(r,this._options.indicators.inactiveClasses.split(" ")),this._indicators[i].el.setAttribute("aria-current","true"))},t}();function Bg(){document.querySelectorAll("[data-carousel]").forEach(function(t){var e=t.getAttribute("data-carousel-interval"),n=t.getAttribute("data-carousel")==="slide",r=[],s=0;t.querySelectorAll("[data-carousel-item]").length&&Array.from(t.querySelectorAll("[data-carousel-item]")).map(function(l,u){r.push({position:u,el:l}),l.getAttribute("data-carousel-item")==="active"&&(s=u)});var i=[];t.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function(l){i.push({position:parseInt(l.getAttribute("data-carousel-slide-to")),el:l})});var o=new Ux(r,{defaultPosition:s,indicators:{items:i},interval:e||su.interval});n&&o.cycle();var a=t.querySelector("[data-carousel-next]"),c=t.querySelector("[data-carousel-prev]");a&&a.addEventListener("click",function(){o.next()}),c&&c.addEventListener("click",function(){o.prev()})})}typeof window<"u"&&(window.Carousel=Ux,window.initCarousels=Bg);var Hu=globalThis&&globalThis.__assign||function(){return Hu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Hu.apply(this,arguments)},aw={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},Fx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=aw),this._targetEl=e,this._triggerEl=n,this._options=Hu(Hu({},aw),r),this._init()}return t.prototype._init=function(){var e=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){e.hide()})},t.prototype.hide=function(){var e=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){e._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},t}();function jg(){document.querySelectorAll("[data-dismiss-target]").forEach(function(t){var e=t.getAttribute("data-dismiss-target"),n=document.querySelector(e);n?new Fx(n,t):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))})}typeof window<"u"&&(window.Dismiss=Fx,window.initDismisses=jg);var nn="top",Sn="bottom",kn="right",rn="left",qg="auto",al=[nn,Sn,kn,rn],Ao="start",kc="end",zV="clippingParents",$x="viewport",fa="popper",HV="reference",cw=al.reduce(function(t,e){return t.concat([e+"-"+Ao,e+"-"+kc])},[]),Vx=[].concat(al,[qg]).reduce(function(t,e){return t.concat([e,e+"-"+Ao,e+"-"+kc])},[]),KV="beforeRead",GV="read",WV="afterRead",QV="beforeMain",YV="main",XV="afterMain",JV="beforeWrite",ZV="write",eB="afterWrite",tB=[KV,GV,WV,QV,YV,XV,JV,ZV,eB];function fr(t){return t?(t.nodeName||"").toLowerCase():null}function vn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function bi(t){var e=vn(t).Element;return t instanceof e||t instanceof Element}function Tn(t){var e=vn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function zg(t){if(typeof ShadowRoot>"u")return!1;var e=vn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function nB(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},s=e.attributes[n]||{},i=e.elements[n];!Tn(i)||!fr(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var a=s[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function rB(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],i=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!Tn(s)||!fr(s)||(Object.assign(s.style,a),Object.keys(i).forEach(function(c){s.removeAttribute(c)}))})}}const sB={name:"applyStyles",enabled:!0,phase:"write",fn:nB,effect:rB,requires:["computeStyles"]};function cr(t){return t.split("-")[0]}var oi=Math.max,Ku=Math.min,Co=Math.round;function dp(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Bx(){return!/^((?!chrome|android).)*safari/i.test(dp())}function Ro(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),s=1,i=1;e&&Tn(t)&&(s=t.offsetWidth>0&&Co(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Co(r.height)/t.offsetHeight||1);var o=bi(t)?vn(t):window,a=o.visualViewport,c=!Bx()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/s,u=(r.top+(c&&a?a.offsetTop:0))/i,h=r.width/s,d=r.height/i;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function Hg(t){var e=Ro(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function jx(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&zg(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Cr(t){return vn(t).getComputedStyle(t)}function iB(t){return["table","td","th"].indexOf(fr(t))>=0}function As(t){return((bi(t)?t.ownerDocument:t.document)||window.document).documentElement}function dd(t){return fr(t)==="html"?t:t.assignedSlot||t.parentNode||(zg(t)?t.host:null)||As(t)}function lw(t){return!Tn(t)||Cr(t).position==="fixed"?null:t.offsetParent}function oB(t){var e=/firefox/i.test(dp()),n=/Trident/i.test(dp());if(n&&Tn(t)){var r=Cr(t);if(r.position==="fixed")return null}var s=dd(t);for(zg(s)&&(s=s.host);Tn(s)&&["html","body"].indexOf(fr(s))<0;){var i=Cr(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function cl(t){for(var e=vn(t),n=lw(t);n&&iB(n)&&Cr(n).position==="static";)n=lw(n);return n&&(fr(n)==="html"||fr(n)==="body"&&Cr(n).position==="static")?e:n||oB(t)||e}function Kg(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ba(t,e,n){return oi(t,Ku(e,n))}function aB(t,e,n){var r=Ba(t,e,n);return r>n?n:r}function qx(){return{top:0,right:0,bottom:0,left:0}}function zx(t){return Object.assign({},qx(),t)}function Hx(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var cB=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,zx(typeof e!="number"?e:Hx(e,al))};function lB(t){var e,n=t.state,r=t.name,s=t.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=cr(n.placement),c=Kg(a),l=[rn,kn].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var h=cB(s.padding,n),d=Hg(i),f=c==="y"?nn:rn,m=c==="y"?Sn:kn,y=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],_=o[c]-n.rects.reference[c],T=cl(i),k=T?c==="y"?T.clientHeight||0:T.clientWidth||0:0,A=y/2-_/2,E=h[f],L=k-d[u]-h[m],F=k/2-d[u]/2+A,Y=Ba(E,F,L),G=c;n.modifiersData[r]=(e={},e[G]=Y,e.centerOffset=Y-F,e)}}function uB(t){var e=t.state,n=t.options,r=n.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||jx(e.elements.popper,s)&&(e.elements.arrow=s))}const hB={name:"arrow",enabled:!0,phase:"main",fn:lB,effect:uB,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function No(t){return t.split("-")[1]}var dB={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fB(t,e){var n=t.x,r=t.y,s=e.devicePixelRatio||1;return{x:Co(n*s)/s||0,y:Co(r*s)/s||0}}function uw(t){var e,n=t.popper,r=t.popperRect,s=t.placement,i=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,m=o.y,y=m===void 0?0:m,_=typeof u=="function"?u({x:f,y}):{x:f,y};f=_.x,y=_.y;var T=o.hasOwnProperty("x"),k=o.hasOwnProperty("y"),A=rn,E=nn,L=window;if(l){var F=cl(n),Y="clientHeight",G="clientWidth";if(F===vn(n)&&(F=As(n),Cr(F).position!=="static"&&a==="absolute"&&(Y="scrollHeight",G="scrollWidth")),F=F,s===nn||(s===rn||s===kn)&&i===kc){E=Sn;var W=h&&F===L&&L.visualViewport?L.visualViewport.height:F[Y];y-=W-r.height,y*=c?1:-1}if(s===rn||(s===nn||s===Sn)&&i===kc){A=kn;var ue=h&&F===L&&L.visualViewport?L.visualViewport.width:F[G];f-=ue-r.width,f*=c?1:-1}}var Ee=Object.assign({position:a},l&&dB),Ue=u===!0?fB({x:f,y},vn(n)):{x:f,y};if(f=Ue.x,y=Ue.y,c){var Oe;return Object.assign({},Ee,(Oe={},Oe[E]=k?"0":"",Oe[A]=T?"0":"",Oe.transform=(L.devicePixelRatio||1)<=1?"translate("+f+"px, "+y+"px)":"translate3d("+f+"px, "+y+"px, 0)",Oe))}return Object.assign({},Ee,(e={},e[E]=k?y+"px":"",e[A]=T?f+"px":"",e.transform="",e))}function pB(t){var e=t.state,n=t.options,r=n.gpuAcceleration,s=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:cr(e.placement),variation:No(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,uw(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,uw(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const mB={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:pB,data:{}};var Rl={passive:!0};function gB(t){var e=t.state,n=t.instance,r=t.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,a=o===void 0?!0:o,c=vn(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",n.update,Rl)}),a&&c.addEventListener("resize",n.update,Rl),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Rl)}),a&&c.removeEventListener("resize",n.update,Rl)}}const yB={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gB,data:{}};var vB={left:"right",right:"left",bottom:"top",top:"bottom"};function iu(t){return t.replace(/left|right|bottom|top/g,function(e){return vB[e]})}var _B={start:"end",end:"start"};function hw(t){return t.replace(/start|end/g,function(e){return _B[e]})}function Gg(t){var e=vn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Wg(t){return Ro(As(t)).left+Gg(t).scrollLeft}function wB(t,e){var n=vn(t),r=As(t),s=n.visualViewport,i=r.clientWidth,o=r.clientHeight,a=0,c=0;if(s){i=s.width,o=s.height;var l=Bx();(l||!l&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:i,height:o,x:a+Wg(t),y:c}}function bB(t){var e,n=As(t),r=Gg(t),s=(e=t.ownerDocument)==null?void 0:e.body,i=oi(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=oi(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-r.scrollLeft+Wg(t),c=-r.scrollTop;return Cr(s||n).direction==="rtl"&&(a+=oi(n.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function Qg(t){var e=Cr(t),n=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+r)}function Kx(t){return["html","body","#document"].indexOf(fr(t))>=0?t.ownerDocument.body:Tn(t)&&Qg(t)?t:Kx(dd(t))}function ja(t,e){var n;e===void 0&&(e=[]);var r=Kx(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=vn(r),o=s?[i].concat(i.visualViewport||[],Qg(r)?r:[]):r,a=e.concat(o);return s?a:a.concat(ja(dd(o)))}function fp(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function IB(t,e){var n=Ro(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function dw(t,e,n){return e===$x?fp(wB(t,n)):bi(e)?IB(e,n):fp(bB(As(t)))}function EB(t){var e=ja(dd(t)),n=["absolute","fixed"].indexOf(Cr(t).position)>=0,r=n&&Tn(t)?cl(t):t;return bi(r)?e.filter(function(s){return bi(s)&&jx(s,r)&&fr(s)!=="body"}):[]}function TB(t,e,n,r){var s=e==="clippingParents"?EB(t):[].concat(e),i=[].concat(s,[n]),o=i[0],a=i.reduce(function(c,l){var u=dw(t,l,r);return c.top=oi(u.top,c.top),c.right=Ku(u.right,c.right),c.bottom=Ku(u.bottom,c.bottom),c.left=oi(u.left,c.left),c},dw(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Gx(t){var e=t.reference,n=t.element,r=t.placement,s=r?cr(r):null,i=r?No(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(s){case nn:c={x:o,y:e.y-n.height};break;case Sn:c={x:o,y:e.y+e.height};break;case kn:c={x:e.x+e.width,y:a};break;case rn:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=s?Kg(s):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case Ao:c[l]=c[l]-(e[u]/2-n[u]/2);break;case kc:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function Ac(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=r===void 0?t.placement:r,i=n.strategy,o=i===void 0?t.strategy:i,a=n.boundary,c=a===void 0?zV:a,l=n.rootBoundary,u=l===void 0?$x:l,h=n.elementContext,d=h===void 0?fa:h,f=n.altBoundary,m=f===void 0?!1:f,y=n.padding,_=y===void 0?0:y,T=zx(typeof _!="number"?_:Hx(_,al)),k=d===fa?HV:fa,A=t.rects.popper,E=t.elements[m?k:d],L=TB(bi(E)?E:E.contextElement||As(t.elements.popper),c,u,o),F=Ro(t.elements.reference),Y=Gx({reference:F,element:A,strategy:"absolute",placement:s}),G=fp(Object.assign({},A,Y)),W=d===fa?G:F,ue={top:L.top-W.top+T.top,bottom:W.bottom-L.bottom+T.bottom,left:L.left-W.left+T.left,right:W.right-L.right+T.right},Ee=t.modifiersData.offset;if(d===fa&&Ee){var Ue=Ee[s];Object.keys(ue).forEach(function(Oe){var Bt=[kn,Sn].indexOf(Oe)>=0?1:-1,ot=[nn,Sn].indexOf(Oe)>=0?"y":"x";ue[Oe]+=Ue[ot]*Bt})}return ue}function xB(t,e){e===void 0&&(e={});var n=e,r=n.placement,s=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?Vx:c,u=No(r),h=u?a?cw:cw.filter(function(m){return No(m)===u}):al,d=h.filter(function(m){return l.indexOf(m)>=0});d.length===0&&(d=h);var f=d.reduce(function(m,y){return m[y]=Ac(t,{placement:y,boundary:s,rootBoundary:i,padding:o})[cr(y)],m},{});return Object.keys(f).sort(function(m,y){return f[m]-f[y]})}function SB(t){if(cr(t)===qg)return[];var e=iu(t);return[hw(t),e,hw(e)]}function kB(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,m=f===void 0?!0:f,y=n.allowedAutoPlacements,_=e.options.placement,T=cr(_),k=T===_,A=c||(k||!m?[iu(_)]:SB(_)),E=[_].concat(A).reduce(function(cn,ln){return cn.concat(cr(ln)===qg?xB(e,{placement:ln,boundary:u,rootBoundary:h,padding:l,flipVariations:m,allowedAutoPlacements:y}):ln)},[]),L=e.rects.reference,F=e.rects.popper,Y=new Map,G=!0,W=E[0],ue=0;ue<E.length;ue++){var Ee=E[ue],Ue=cr(Ee),Oe=No(Ee)===Ao,Bt=[nn,Sn].indexOf(Ue)>=0,ot=Bt?"width":"height",ae=Ac(e,{placement:Ee,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),me=Bt?Oe?kn:rn:Oe?Sn:nn;L[ot]>F[ot]&&(me=iu(me));var ve=iu(me),xt=[];if(i&&xt.push(ae[Ue]<=0),a&&xt.push(ae[me]<=0,ae[ve]<=0),xt.every(function(cn){return cn})){W=Ee,G=!1;break}Y.set(Ee,xt)}if(G)for(var an=m?3:1,Wt=function(ln){var Xe=E.find(function(S){var z=Y.get(S);if(z)return z.slice(0,ln).every(function($){return $})});if(Xe)return W=Xe,"break"},at=an;at>0;at--){var An=Wt(at);if(An==="break")break}e.placement!==W&&(e.modifiersData[r]._skip=!0,e.placement=W,e.reset=!0)}}const AB={name:"flip",enabled:!0,phase:"main",fn:kB,requiresIfExists:["offset"],data:{_skip:!1}};function fw(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function pw(t){return[nn,kn,Sn,rn].some(function(e){return t[e]>=0})}function CB(t){var e=t.state,n=t.name,r=e.rects.reference,s=e.rects.popper,i=e.modifiersData.preventOverflow,o=Ac(e,{elementContext:"reference"}),a=Ac(e,{altBoundary:!0}),c=fw(o,r),l=fw(a,s,i),u=pw(c),h=pw(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const RB={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:CB};function NB(t,e,n){var r=cr(t),s=[rn,nn].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*s,[rn,kn].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function PB(t){var e=t.state,n=t.options,r=t.name,s=n.offset,i=s===void 0?[0,0]:s,o=Vx.reduce(function(u,h){return u[h]=NB(h,e.rects,i),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const DB={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:PB};function OB(t){var e=t.state,n=t.name;e.modifiersData[n]=Gx({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const LB={name:"popperOffsets",enabled:!0,phase:"read",fn:OB,data:{}};function MB(t){return t==="x"?"y":"x"}function UB(t){var e=t.state,n=t.options,r=t.name,s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,m=n.tetherOffset,y=m===void 0?0:m,_=Ac(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),T=cr(e.placement),k=No(e.placement),A=!k,E=Kg(T),L=MB(E),F=e.modifiersData.popperOffsets,Y=e.rects.reference,G=e.rects.popper,W=typeof y=="function"?y(Object.assign({},e.rects,{placement:e.placement})):y,ue=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),Ee=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ue={x:0,y:0};if(F){if(i){var Oe,Bt=E==="y"?nn:rn,ot=E==="y"?Sn:kn,ae=E==="y"?"height":"width",me=F[E],ve=me+_[Bt],xt=me-_[ot],an=f?-G[ae]/2:0,Wt=k===Ao?Y[ae]:G[ae],at=k===Ao?-G[ae]:-Y[ae],An=e.elements.arrow,cn=f&&An?Hg(An):{width:0,height:0},ln=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:qx(),Xe=ln[Bt],S=ln[ot],z=Ba(0,Y[ae],cn[ae]),$=A?Y[ae]/2-an-z-Xe-ue.mainAxis:Wt-z-Xe-ue.mainAxis,ee=A?-Y[ae]/2+an+z+S+ue.mainAxis:at+z+S+ue.mainAxis,_e=e.elements.arrow&&cl(e.elements.arrow),g=_e?E==="y"?_e.clientTop||0:_e.clientLeft||0:0,v=(Oe=Ee==null?void 0:Ee[E])!=null?Oe:0,w=me+$-v-g,x=me+ee-v,C=Ba(f?Ku(ve,w):ve,me,f?oi(xt,x):xt);F[E]=C,Ue[E]=C-me}if(a){var N,H=E==="x"?nn:rn,M=E==="x"?Sn:kn,U=F[L],D=L==="y"?"height":"width",ne=U+_[H],Q=U-_[M],te=[nn,rn].indexOf(T)!==-1,oe=(N=Ee==null?void 0:Ee[L])!=null?N:0,ge=te?ne:U-Y[D]-G[D]-oe+ue.altAxis,Ce=te?U+Y[D]+G[D]-oe-ue.altAxis:Q,Ae=f&&te?aB(ge,U,Ce):Ba(f?ge:ne,U,f?Ce:Q);F[L]=Ae,Ue[L]=Ae-U}e.modifiersData[r]=Ue}}const FB={name:"preventOverflow",enabled:!0,phase:"main",fn:UB,requiresIfExists:["offset"]};function $B(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function VB(t){return t===vn(t)||!Tn(t)?Gg(t):$B(t)}function BB(t){var e=t.getBoundingClientRect(),n=Co(e.width)/t.offsetWidth||1,r=Co(e.height)/t.offsetHeight||1;return n!==1||r!==1}function jB(t,e,n){n===void 0&&(n=!1);var r=Tn(e),s=Tn(e)&&BB(e),i=As(e),o=Ro(t,s,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((fr(e)!=="body"||Qg(i))&&(a=VB(e)),Tn(e)?(c=Ro(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=Wg(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function qB(t){var e=new Map,n=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function s(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&s(c)}}),r.push(i)}return t.forEach(function(i){n.has(i.name)||s(i)}),r}function zB(t){var e=qB(t);return tB.reduce(function(n,r){return n.concat(e.filter(function(s){return s.phase===r}))},[])}function HB(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function KB(t){var e=t.reduce(function(n,r){var s=n[r.name];return n[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var mw={placement:"bottom",modifiers:[],strategy:"absolute"};function gw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function GB(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,s=e.defaultOptions,i=s===void 0?mw:s;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},mw,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(T){var k=typeof T=="function"?T(u.options):T;y(),u.options=Object.assign({},i,u.options,k),u.scrollParents={reference:bi(a)?ja(a):a.contextElement?ja(a.contextElement):[],popper:ja(c)};var A=zB(KB([].concat(r,u.options.modifiers)));return u.orderedModifiers=A.filter(function(E){return E.enabled}),m(),f.update()},forceUpdate:function(){if(!d){var T=u.elements,k=T.reference,A=T.popper;if(gw(k,A)){u.rects={reference:jB(k,cl(A),u.options.strategy==="fixed"),popper:Hg(A)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(ue){return u.modifiersData[ue.name]=Object.assign({},ue.data)});for(var E=0;E<u.orderedModifiers.length;E++){if(u.reset===!0){u.reset=!1,E=-1;continue}var L=u.orderedModifiers[E],F=L.fn,Y=L.options,G=Y===void 0?{}:Y,W=L.name;typeof F=="function"&&(u=F({state:u,options:G,name:W,instance:f})||u)}}}},update:HB(function(){return new Promise(function(_){f.forceUpdate(),_(u)})}),destroy:function(){y(),d=!0}};if(!gw(a,c))return f;f.setOptions(l).then(function(_){!d&&l.onFirstUpdate&&l.onFirstUpdate(_)});function m(){u.orderedModifiers.forEach(function(_){var T=_.name,k=_.options,A=k===void 0?{}:k,E=_.effect;if(typeof E=="function"){var L=E({state:u,name:T,instance:f,options:A}),F=function(){};h.push(L||F)}})}function y(){h.forEach(function(_){return _()}),h=[]}return f}}var WB=[yB,LB,mB,sB,DB,AB,FB,hB,RB],Yg=GB({defaultModifiers:WB}),Kr=globalThis&&globalThis.__assign||function(){return Kr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Kr.apply(this,arguments)},Nl=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},qs={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,onShow:function(){},onHide:function(){},onToggle:function(){}},Wx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=qs),this._targetEl=e,this._triggerEl=n,this._options=Kr(Kr({},qs),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();this._options.triggerType==="click"&&n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.toggle()})}),this._options.triggerType==="hover"&&(n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){r==="click"?e.toggle():setTimeout(function(){e.show()},e._options.delay)}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},e._options.delay)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},e._options.delay)})}))},t.prototype._createPopperInstance=function(){return Yg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.isVisible=function(){return this._visible},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(e){return Kr(Kr({},e),{modifiers:Nl(Nl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(e){return Kr(Kr({},e),{modifiers:Nl(Nl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},t}();function Xg(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(t){var e=t.getAttribute("data-dropdown-toggle"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-dropdown-placement"),s=t.getAttribute("data-dropdown-offset-skidding"),i=t.getAttribute("data-dropdown-offset-distance"),o=t.getAttribute("data-dropdown-trigger"),a=t.getAttribute("data-dropdown-delay");new Wx(n,t,{placement:r||qs.placement,triggerType:o||qs.triggerType,offsetSkidding:s?parseInt(s):qs.offsetSkidding,offsetDistance:i?parseInt(i):qs.offsetDistance,delay:a?parseInt(a):qs.delay})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}typeof window<"u"&&(window.Dropdown=Wx,window.initDropdowns=Xg);var Gu=globalThis&&globalThis.__assign||function(){return Gu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Gu.apply(this,arguments)},Wi={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},pp=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=Wi),this._targetEl=e,this._options=Gu(Gu({},Wi),n),this._isHidden=!0,this._backdropEl=null,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&this._getPlacementClasses().map(function(n){e._targetEl.classList.add(n)})},t.prototype._createBackdrop=function(){var e;if(this._isHidden){var n=document.createElement("div");n.setAttribute("modal-backdrop",""),(e=n.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(n),this._backdropEl=n}},t.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},t.prototype._setupModalCloseEventListeners=function(){var e=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(n){e._handleOutsideClick(n.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._handleOutsideClick=function(e){(e===this._targetEl||e===this._backdropEl&&this.isVisible())&&this.hide()},t.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},t.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},t.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},t.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},t.prototype.isVisible=function(){return!this._isHidden},t.prototype.isHidden=function(){return this._isHidden},t}(),Pl=function(t,e){return e.some(function(n){return n.id===t})?e.find(function(n){return n.id===t}):null};function Jg(){var t=[];document.querySelectorAll("[data-modal-target]").forEach(function(e){var n=e.getAttribute("data-modal-target"),r=document.getElementById(n);if(r){var s=r.getAttribute("data-modal-placement"),i=r.getAttribute("data-modal-backdrop");Pl(n,t)||t.push({id:n,object:new pp(r,{placement:s||Wi.placement,backdrop:i||Wi.backdrop})})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(e){var n=e.getAttribute("data-modal-toggle"),r=document.getElementById(n);if(r){var s=r.getAttribute("data-modal-placement"),i=r.getAttribute("data-modal-backdrop"),o=Pl(n,t);o||(o={id:n,object:new pp(r,{placement:s||Wi.placement,backdrop:i||Wi.backdrop})},t.push(o)),e.addEventListener("click",function(){o.object.toggle()})}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(e){var n=e.getAttribute("data-modal-show"),r=document.getElementById(n);if(r){var s=Pl(n,t);s?e.addEventListener("click",function(){s.object.isHidden&&s.object.show()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(e){var n=e.getAttribute("data-modal-hide"),r=document.getElementById(n);if(r){var s=Pl(n,t);s?e.addEventListener("click",function(){s.object.isVisible&&s.object.hide()}):console.error("Modal with id ".concat(n," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(n," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}typeof window<"u"&&(window.Modal=pp,window.initModals=Jg);var Wu=globalThis&&globalThis.__assign||function(){return Wu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Wu.apply(this,arguments)},zs={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},Qx=function(){function t(e,n){e===void 0&&(e=null),n===void 0&&(n=zs),this._targetEl=e,this._options=Wu(Wu({},zs),n),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(n){e._targetEl.classList.add(n)}),document.addEventListener("keydown",function(n){n.key==="Escape"&&e.isVisible()&&e.hide()})},t.prototype.hide=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.add(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.remove(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.add(n)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(n){e._targetEl.classList.remove(n)})):(this._getPlacementClasses(this._options.placement).active.map(function(n){e._targetEl.classList.add(n)}),this._getPlacementClasses(this._options.placement).inactive.map(function(n){e._targetEl.classList.remove(n)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype._createBackdrop=function(){var e,n=this;if(!this._visible){var r=document.createElement("div");r.setAttribute("drawer-backdrop",""),(e=r.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(r),r.addEventListener("click",function(){n.hide()})}},t.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},t.prototype._getPlacementClasses=function(e){switch(e){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t}(),Dl=function(t,e){if(e.some(function(n){return n.id===t}))return e.find(function(n){return n.id===t})};function Zg(){var t=[];document.querySelectorAll("[data-drawer-target]").forEach(function(e){var n=e.getAttribute("data-drawer-target"),r=document.getElementById(n);if(r){var s=e.getAttribute("data-drawer-placement"),i=e.getAttribute("data-drawer-body-scrolling"),o=e.getAttribute("data-drawer-backdrop"),a=e.getAttribute("data-drawer-edge"),c=e.getAttribute("data-drawer-edge-offset");Dl(n,t)||t.push({id:n,object:new Qx(r,{placement:s||zs.placement,bodyScrolling:i?i==="true":zs.bodyScrolling,backdrop:o?o==="true":zs.backdrop,edge:a?a==="true":zs.edge,edgeOffset:c||zs.edgeOffset})})}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(e){var n=e.getAttribute("data-drawer-toggle"),r=document.getElementById(n);if(r){var s=Dl(n,t);s?e.addEventListener("click",function(){s.object.toggle()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(e){var n=e.getAttribute("data-drawer-dismiss")?e.getAttribute("data-drawer-dismiss"):e.getAttribute("data-drawer-hide"),r=document.getElementById(n);if(r){var s=Dl(n,t);s?e.addEventListener("click",function(){s.object.hide()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(e){var n=e.getAttribute("data-drawer-show"),r=document.getElementById(n);if(r){var s=Dl(n,t);s?e.addEventListener("click",function(){s.object.show()}):console.error("Drawer with id ".concat(n," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(n," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}typeof window<"u"&&(window.Drawer=Qx,window.initDrawers=Zg);var Qu=globalThis&&globalThis.__assign||function(){return Qu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Qu.apply(this,arguments)},yw={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},Yx=function(){function t(e,n){e===void 0&&(e=[]),n===void 0&&(n=yw),this._items=e,this._activeTab=n?this.getTab(n.defaultTabId):null,this._options=Qu(Qu({},yw),n),this._init()}return t.prototype._init=function(){var e=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(n){n.triggerEl.addEventListener("click",function(){e.show(n.id)})}))},t.prototype.getActiveTab=function(){return this._activeTab},t.prototype._setActiveTab=function(e){this._activeTab=e},t.prototype.getTab=function(e){return this._items.filter(function(n){return n.id===e})[0]},t.prototype.show=function(e,n){var r,s,i=this;n===void 0&&(n=!1);var o=this.getTab(e);o===this._activeTab&&!n||(this._items.map(function(a){var c,l;a!==o&&((c=a.triggerEl.classList).remove.apply(c,i._options.activeClasses.split(" ")),(l=a.triggerEl.classList).add.apply(l,i._options.inactiveClasses.split(" ")),a.targetEl.classList.add("hidden"),a.triggerEl.setAttribute("aria-selected","false"))}),(r=o.triggerEl.classList).add.apply(r,this._options.activeClasses.split(" ")),(s=o.triggerEl.classList).remove.apply(s,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-selected","true"),o.targetEl.classList.remove("hidden"),this._setActiveTab(o),this._options.onShow(this,o))},t}();function ey(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(t){var e=[],n=null;t.querySelectorAll('[role="tab"]').forEach(function(r){var s=r.getAttribute("aria-selected")==="true",i={id:r.getAttribute("data-tabs-target"),triggerEl:r,targetEl:document.querySelector(r.getAttribute("data-tabs-target"))};e.push(i),s&&(n=i.id)}),new Yx(e,{defaultTabId:n})})}typeof window<"u"&&(window.Tabs=Yx,window.initTabs=ey);var Gr=globalThis&&globalThis.__assign||function(){return Gr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Gr.apply(this,arguments)},Ol=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},Yu={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Xx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=Yu),this._targetEl=e,this._triggerEl=n,this._options=Gr(Gr({},Yu),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.hide()})})},t.prototype._createPopperInstance=function(){return Yg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Gr(Gr({},e),{modifiers:Ol(Ol([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Gr(Gr({},e),{modifiers:Ol(Ol([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function ty(){document.querySelectorAll("[data-tooltip-target]").forEach(function(t){var e=t.getAttribute("data-tooltip-target"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-tooltip-trigger"),s=t.getAttribute("data-tooltip-placement");new Xx(n,t,{placement:s||Yu.placement,triggerType:r||Yu.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))})}typeof window<"u"&&(window.Tooltip=Xx,window.initTooltips=ty);var Wr=globalThis&&globalThis.__assign||function(){return Wr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Wr.apply(this,arguments)},Ll=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},qa={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Jx=function(){function t(e,n,r){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=qa),this._targetEl=e,this._triggerEl=n,this._options=Wr(Wr({},qa),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return t.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},t.prototype._setupEventListeners=function(){var e=this,n=this._getTriggerEvents();n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},100)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},100)})})},t.prototype._createPopperInstance=function(){return Yg(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},t.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(n){n.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},t.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},t.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(n){e._handleClickOutside(n,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},t.prototype._handleClickOutside=function(e,n){var r=e.target;r!==n&&!n.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},t.prototype.isVisible=function(){return this._visible},t.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},t.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Wr(Wr({},e),{modifiers:Ll(Ll([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},t.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Wr(Wr({},e),{modifiers:Ll(Ll([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},t}();function ny(){document.querySelectorAll("[data-popover-target]").forEach(function(t){var e=t.getAttribute("data-popover-target"),n=document.getElementById(e);if(n){var r=t.getAttribute("data-popover-trigger"),s=t.getAttribute("data-popover-placement"),i=t.getAttribute("data-popover-offset");new Jx(n,t,{placement:s||qa.placement,offset:i?parseInt(i):qa.offset,triggerType:r||qa.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))})}typeof window<"u"&&(window.Popover=Jx,window.initPopovers=ny);var Xu=globalThis&&globalThis.__assign||function(){return Xu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Xu.apply(this,arguments)},mp={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},Zx=function(){function t(e,n,r,s){e===void 0&&(e=null),n===void 0&&(n=null),r===void 0&&(r=null),s===void 0&&(s=mp),this._parentEl=e,this._triggerEl=n,this._targetEl=r,this._options=Xu(Xu({},mp),s),this._visible=!1,this._init()}return t.prototype._init=function(){var e=this;if(this._triggerEl){var n=this._getTriggerEventTypes(this._options.triggerType);n.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),n.hideEvents.forEach(function(r){e._parentEl.addEventListener(r,function(){e._parentEl.matches(":hover")||e.hide()})})}},t.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},t.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},t.prototype.toggle=function(){this._visible?this.hide():this.show()},t.prototype.isHidden=function(){return!this._visible},t.prototype.isVisible=function(){return this._visible},t.prototype._getTriggerEventTypes=function(e){switch(e){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},t}();function ry(){document.querySelectorAll("[data-dial-init]").forEach(function(t){var e=t.querySelector("[data-dial-toggle]");if(e){var n=e.getAttribute("data-dial-toggle"),r=document.getElementById(n);if(r){var s=e.getAttribute("data-dial-trigger");new Zx(t,e,r,{triggerType:s||mp.triggerType})}else console.error("Dial with id ".concat(n," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(t.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}typeof window<"u"&&(window.Dial=Zx,window.initDials=ry);function eS(){$g(),Vg(),Bg(),jg(),Xg(),Jg(),Zg(),ey(),ty(),ny(),ry()}typeof window<"u"&&(window.initFlowbite=eS);var QB=new qV("load",[$g,Vg,Bg,jg,Xg,Jg,Zg,ey,ty,ny,ry]);QB.init();const YB={key:0,class:"sticky flex w-full flex-col bg-primary text-background shadow-sm shadow-secondary"},XB={class:"container mx-auto flex items-center justify-between bg-primary px-4 py-2"},JB={class:"flex items-center gap-4"},ZB=p("span",{class:"material-icons text-3xl lg:text-base"},"add_box",-1),e4=p("span",{class:"hidden lg:inline-block"},"CREATE ITEM",-1),t4=p("button",{type:"button",class:"flex gap-1",id:"dropdownDefaultButton","data-dropdown-toggle":"dropdownNotifications","data-dropdown-trigger":"click"},[p("span",{class:"material-icons text-3xl lg:text-base"},"notifications"),p("span",{class:"hidden lg:inline-block"},"NOTIFICATIONS")],-1),n4=p("span",{class:"material-icons text-3xl lg:text-base"},"chat",-1),r4=p("span",{class:"hidden lg:inline-block"},"MESSAGES",-1),s4=["onClick"],i4=p("span",{class:"material-icons text-3xl lg:text-base"},"logout",-1),o4=p("span",{class:"hidden lg:inline-block"},"LOG OUT",-1),a4=[i4,o4],c4=["src"],l4={class:"bg-secondary bg-opacity-20"},u4={class:"container mx-auto flex flex-col-reverse items-stretch justify-between px-4 lg:flex-row"},h4={key:0,class:"flex scroll-p-12 gap-8 overflow-x-auto whitespace-nowrap px-4 pb-4 lg:py-4"},d4=p("li",null,"NEW",-1),f4=p("li",null,"HOT",-1),p4=p("li",null,"TOP RATED",-1),m4=p("li",null,"KIDS",-1),g4=p("li",null,"MEN",-1),y4=p("li",null,"WOMEN",-1),v4=[d4,f4,p4,m4,g4,y4],_4=p("div",null,null,-1),w4=p("input",{type:"text",name:"",id:"",class:"w-full rounded-l-md border-none bg-transparent bg-white bg-opacity-50 px-4 py-1 text-sm text-text placeholder:text-text placeholder:text-opacity-60 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50",placeholder:"Search..."},null,-1),b4=p("button",{class:"material-icons bg-accent px-2 py-1 text-text text-opacity-70 lg:py-0 lg:text-lg"}," search ",-1),I4={__name:"NavigationBar",setup(t){Mt.firestore();const e=Nc(),n=_n();Ei(async()=>{eS(),await n.initMyProfile()});function r(){n.searchItem()&&e.push("/search")}async function s(){try{await n.logout(),e.push("/")}catch(i){alert("Sign Out Error"+i)}}return(i,o)=>["login","register"].includes(i.$route.name)?wr("",!0):(J(),se("header",YB,[p("nav",XB,[V(Db),p("ul",JB,[p("li",null,[V(pe(Pn),{to:"/create-item",class:"flex gap-1"},{default:je(()=>[ZB,e4]),_:1})]),p("li",null,[t4,V(jV)]),p("li",null,[V(pe(Pn),{to:"/messages",class:"flex gap-1"},{default:je(()=>[n4,r4]),_:1})]),p("li",null,[p("button",{onClick:Un(s,["prevent"]),class:"flex gap-1"},a4,8,s4)]),p("li",null,[V(pe(Pn),{to:"/profile",class:"flex items-center gap-2"},{default:je(()=>[p("img",{src:pe(n).myProfile.image,alt:"",class:"aspect-square w-10 rounded-full"},null,8,c4)]),_:1})])])]),p("section",l4,[p("div",u4,[["home"].includes(i.$route.name)?(J(),se("ol",h4,v4)):wr("",!0),_4,["search"].includes(i.$route.name)?wr("",!0):(J(),se("form",{key:1,class:"my-3 flex overflow-hidden rounded-md border-2 border-text border-opacity-50 bg-background focus-within:border-2 focus-within:border-primary focus-within:border-opacity-100",onSubmit:o[0]||(o[0]=Un(a=>r(),["stop","prevent"]))},[w4,b4,V(pe(Pn),{to:"/search",class:"material-icons bg-accent py-1 pr-2 text-text text-opacity-70 lg:py-0 lg:text-lg"},{default:je(()=>[xe("menu")]),_:1})],32))])])]))}},E4={},T4={key:0,class:"sticky bottom-0 flex w-full flex-col bg-primary px-4 text-background"},x4=p("nav",{class:"container mx-auto flex items-center justify-end py-4"},[p("p",null,"All Rights Reserved 2023. ®")],-1),S4=[x4];function k4(t,e){return["login","register"].includes(t.$route.name)?wr("",!0):(J(),se("header",T4,S4))}const A4=mh(E4,[["render",k4]]),C4={class:"flex flex-col h-screen"},R4={class:"basis-full overflow-y-auto"},N4={__name:"HomePageView",setup(t){return(e,n)=>(J(),se("div",C4,[V(I4),p("div",R4,[V(pe(Rc))]),V(A4)]))}},P4={class:"aspect-square w-full"},D4=["src"],O4={class:"flex flex-col"},L4={class:"text-xs"},M4={class:"text-green-800"},U4=p("span",{class:"text-2xl"},"₱",-1),Ju={__name:"ItemsContainer",props:{gridfor:{type:String,default:""},items:{type:Array,default:[{itemId:1,itemName:"Lampshade",location:"Baybay City",rentAmount:"150.00",rentRate:"per week",image:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"},{id:2,name:"Outdoor Bench",location:"Tacloban City",rentAmount:"150.00",rentRate:"per day",image:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg"}]}},setup(t){function e(n){switch(n){case"search":return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";default:return"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"}}return(n,r)=>(J(),se("div",{class:Ln(["grid grid-flow-row gap-2 rounded-none bg-gradient-to-b from-secondary to-transparent bg-[length:100%_150px] bg-no-repeat px-2 py-4 sm:rounded-xl sm:px-4",e(t.gridfor)])},[(J(!0),se($e,null,ir(t.items,s=>(J(),Ti(pe(Pn),{to:"/item/"+s.itemId,class:"bg-white p-2 shadow-sm shadow-secondary"},{default:je(()=>[p("div",P4,[p("img",{src:s.image,alt:"",srcset:"",loading:"lazy",class:"aspect-square h-full object-contain"},null,8,D4)]),p("div",O4,[p("p",null,Ne(s.itemName),1),p("p",L4,Ne(s.location),1),p("p",M4,[U4,xe(Ne(s.rentAmount+" - "+s.rentRate),1)])])]),_:2},1032,["to"]))),256))],2))}},F4={class:"container mx-auto flex flex-col gap-8 px-0 py-8 sm:px-4"},$4={class:"flex flex-col gap-2"},V4=p("h1",{class:"px-4 sm:px-0"},"JUST FOR YOU",-1),B4={class:"flex flex-col gap-2"},j4=p("h1",{class:"px-4 sm:px-0"},"DISCOVER",-1),q4={__name:"HomeView",setup(t){const e=_n(),n=le([]);return Ei(async()=>{n.value=await e.loadItems()}),(r,s)=>(J(),se("main",F4,[p("section",$4,[V4,V(Ju,{items:pe(e).itemsInRange(12,18)},null,8,["items"])]),p("section",B4,[j4,V(Ju,{items:n.value},null,8,["items"])])]))}},z4=["onSubmit"],H4=p("h1",null,"Edit Profile",-1),K4={class:"flex flex-col gap-2 p-2 sm:gap-4"},G4={class:"flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"},W4={class:"flex flex-col"},Q4=p("h2",null,"Profile Picture",-1),Y4={class:"relative inline-block aspect-square w-32 rounded-sm object-contain"},X4=["src"],J4=p("label",{for:"add-image",class:"material-icons absolute -bottom-2 -right-2 cursor-pointer rounded-md border-2 border-text border-opacity-50 bg-accent px-1 py-1 text-text text-opacity-70"}," add_photo_alternate ",-1),Z4={class:"flex w-56 basis-full flex-col gap-2"},ej={class:"my-2 flex flex-col justify-end gap-2 px-2 sm:flex-row"},tj=p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"}," Save changes ",-1),nj={__name:"EditProfile",props:{useruid:{default:0},profile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:""}}},emits:["close"],setup(t,{emit:e}){const n=t,r=_n(),s=new FileReader,i=le(Object.assign({},n.profile));function o(c){let l=c.target.files[0];s.readAsDataURL(l),s.onload=u=>{profile.value.image=u.target.result}}function a(){r.editProfile=Object.assign({},profile.value),e("close")}return ss(()=>n.profile,c=>{i.value=Object.assign({},c)}),(c,l)=>(J(),se("form",{action:"#",onSubmit:Un(a,["stop","prevent"])},[H4,p("div",K4,[p("div",G4,[p("div",W4,[Q4,p("div",Y4,[p("img",{src:i.value.image,alt:"",srcset:"",class:"aspect-square w-32 rounded-lg object-contain"},null,8,X4),J4,p("input",{type:"file",id:"add-image",onChange:l[0]||(l[0]=u=>o(u)),hidden:""},null,32)])]),p("div",Z4,[V(We,{label:"First Name",modelValue:i.value.firstName,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value.firstName=u),placeholder:"First Name"},null,8,["modelValue"]),V(We,{label:"Last Name",modelValue:i.value.lastName,"onUpdate:modelValue":l[2]||(l[2]=u=>i.value.lastName=u),placeholder:"Last Name"},null,8,["modelValue"])])]),V(We,{label:"Location",modelValue:i.value.location,"onUpdate:modelValue":l[3]||(l[3]=u=>i.value.location=u),placeholder:"Current Location"},null,8,["modelValue"])]),p("footer",ej,[tj,p("button",{type:"button",onClick:l[4]||(l[4]=u=>e("close")),class:"rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"}," Cancel ")])],40,z4))}},rj={class:"flex items-center justify-between gap-24 bg-primary bg-opacity-90 px-4 py-2 shadow-md shadow-gray-400"},sj={class:"flex items-center gap-2"},ij=["src"],oj={class:"font-black text-background"},aj={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white"},cj=["disabled"],tS={__name:"MessageOwner",props:{ownerId:String,ownerProfile:{default:{firstName:"",lastName:"",image:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",location:""}}},emits:["close"],setup(t,{emit:e}){const n=t,r=Nc(),s=_n(),i=le(""),o=le(!1);async function a(){try{o.value=!0;let c=await s.messageOwner(n.ownerId,i.value);r.push("/messages/"+c)}catch(c){console.log(c+"from MessageOwner")}finally{o.value=!1}}return(c,l)=>(J(),se($e,null,[p("header",rj,[p("div",sj,[p("img",{src:t.ownerProfile.image,alt:"",class:"aspect-square w-8 rounded-full"},null,8,ij),p("p",oj,Ne(t.ownerProfile.firstName+" "+t.ownerProfile.lastName),1)]),p("button",{class:"material-icons text-background",onClick:l[0]||(l[0]=u=>e("close"))}," close ")]),p("section",aj,[p("form",{class:"bg-amber-400 flex gap-2 bg-secondary bg-opacity-80 p-2 shadow-gray-400 drop-shadow-sm",onSubmit:l[2]||(l[2]=Un(u=>a(),["prevent"]))},[V(We,{placeholder:"Enter message...",modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value=u),disabled:o.value},null,8,["modelValue","disabled"]),p("button",{disabled:o.value,type:"submit",class:"material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background disabled:bg-text disabled:bg-opacity-50"}," send ",8,cj)],32)])],64))}},lj={class:"container mx-auto flex flex-col gap-8 px-4 py-8"},uj={class:"flex flex-col gap-2 lg:flex-row"},hj={class:"flex basis-9/12 flex-col gap-2 sm:flex-row"},dj={class:"flex basis-4/12 flex-col gap-2 bg-white p-4 shadow-sm shadow-secondary"},fj=["src"],pj={class:"flex w-full basis-8/12 flex-col justify-between bg-white p-4 shadow-sm shadow-secondary"},mj={class:"flex flex-wrap items-start justify-between gap-2"},gj={class:"text-3xl"},yj={class:"flex"},vj=p("span",{class:"material-icons text-green-600"},"location_on",-1),_j={class:"my-4"},wj=p("h2",null,"Lender Ratings",-1),bj={class:"mb-4 flex gap-4"},Ij=p("span",null,"3.0 / 5.0",-1),Ej=p("h2",null,"Chat Response Rate",-1),Tj={class:"mb-4 flex gap-4"},xj=p("span",null,"4.0 / 5.0",-1),Sj={class:"flex flex-col justify-end gap-2 md:flex-row"},kj=p("span",{class:"material-icons"},"edit",-1),Aj=p("span",null,"Edit Profile",-1),Cj=[kj,Aj],Rj=p("span",{class:"material-icons"},"forum",-1),Nj=p("span",null,"Chat",-1),Pj=[Rj,Nj],Dj={key:2,class:"flex items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80"},Oj=p("span",{class:"material-icons"},"flag",-1),Lj=p("span",null,"Report user",-1),Mj=[Oj,Lj],Uj=Op('<div class="flex basis-3/12 flex-row gap-4 bg-white p-4 shadow-sm shadow-secondary lg:flex-col"><div class="basis-1/2 lg:basis-0"><h2>Lended Items</h2><h2 class="text-2xl">542</h2></div><div class="basis-1/2 lg:basis-0"><h2>Rented Items</h2><h2 class="text-2xl">34</h2></div></div>',1),Fj={class:"flex flex-col gap-2"},vw={__name:"ProfileView",setup(t){const e=_n(),n=$p(),r=le(n.params.id||e.myUserUid),s=le([]),i=le({firstName:"",lastName:"",image:"",location:""});Ei(async()=>{i.value=await e.loadProfile(r.value),s.value=await e.loadItems(12,r.value)}),ss(()=>n.params.id,async h=>{r.value=h||e.myUserUid,i.value=await e.loadProfile(r.value),s.value=await e.loadItems(12,r.value)});const o=le(null),a=le(null),c=vt(()=>r.value==e.myUserUid);function l(h){h?o.value.showModal():o.value.close()}function u(h){h?a.value.showModal():a.value.close()}return(h,d)=>(J(),se($e,null,[p("main",lj,[p("section",uj,[p("div",hj,[p("div",dj,[p("img",{src:i.value.image,alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,fj)]),p("div",pj,[p("div",null,[p("div",mj,[p("h1",gj,Ne(i.value.firstName+" "+i.value.lastName),1),p("div",yj,[vj,p("span",null,Ne(i.value.location),1)])]),p("div",_j,[wj,p("div",bj,[Ij,V(Xs,{value:"3"})]),Ej,p("div",Tj,[xj,V(Xs,{value:"4"})])])]),p("div",Sj,[c.value?(J(),se("button",{key:0,onClick:d[0]||(d[0]=f=>l(!0)),class:"flex items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80"},Cj)):wr("",!0),c.value?wr("",!0):(J(),se("button",{key:1,onClick:d[1]||(d[1]=f=>u(!0)),class:"flex items-center justify-center gap-1 rounded-md border-2 border-primary bg-primary px-8 py-2 text-background sm:basis-auto"},Pj)),c.value?wr("",!0):(J(),se("button",Dj,Mj))])])]),Uj]),p("section",Fj,[p("h1",null,Ne(i.value.firstName+" "+i.value.lastName+"'s Item(s)"),1),V(Ju,{items:s.value},null,8,["items"])])]),p("dialog",{ref_key:"editDialog",ref:o,class:"rounded-xl backdrop:backdrop-brightness-50"},[V(nj,{onClose:d[2]||(d[2]=f=>l(!1)),useruid:r.value,profile:i.value},null,8,["useruid","profile"])],512),p("dialog",{ref_key:"messageDialog",ref:a,class:"rounded-xl p-0 backdrop:backdrop-brightness-50"},[V(tS,{"owner-id":r.value,"owner-profile":i.value,onClose:d[3]||(d[3]=f=>u(!1))},null,8,["owner-id","owner-profile"])],512)],64))}},$j={class:"flex w-full flex-col gap-1"},Vj=["disabled","value"],Bj=p("option",null,"Select...",-1),jj={__name:"CustomDropdown",props:{modelValue:{default:""},label:{type:String,default:""},disabled:{default:!1}},emits:["update:modelValue"],setup(t){return(e,n)=>(J(),se("div",$j,[fn(p("label",{class:"text-text"},Ne(t.label),513),[[is,t.label]]),p("select",{disabled:t.disabled,value:t.modelValue,class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 focus:border-2 focus:border-primary focus:border-opacity-60 focus:bg-white focus:bg-opacity-90 focus:ring-0",onChange:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value))},[Np(e.$slots,"default",{},()=>[Bj])],40,Vj)]))}},qj=["onSubmit"],zj=p("h1",null,"Rent Item",-1),Hj={class:"flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"},Kj={class:"flex w-56 basis-full flex-col gap-2"},Gj={class:"flex w-56 basis-full flex-col gap-2"},Wj={class:"flex items-center text-sm"},Qj=p("span",null,"Suggest another address",-1),Yj=p("option",null,"Select...",-1),Xj=p("option",null,"Cash on Delivery",-1),Jj=p("option",null,"Credit Card",-1),Zj={class:"mt-4 flex flex-col justify-end gap-2 sm:flex-row"},eq=p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-6 py-2 text-white"}," Request Rent ",-1),tq={__name:"RentItem",props:{rentRate:{default:1}},emits:["close"],setup(t,{emit:e}){const n=t,r=le(!1),s=le({startDate:h(new Date,1),endDate:h(new Date,n.rentRate+1),returnDate:h(new Date,n.rentRate+2),address:"The Chasm, Liyue",paymentOption:"Select..."}),i=vt({get(){return u(s.value.startDate)},set(m){s.value.startDate=l(m)}}),o=vt({get(){return u(s.value.endDate)},set(m){s.value.endDate=l(m)}}),a=vt({get(){return u(s.value.returnDate)},set(m){s.value.returnDate=l(m)}});function c(){e("close")}function l(m){const[y,_,T]=m.split("-");return new Date(+y,_-1,+T)}function u(m){return m.getFullYear()+"-"+f(m.getMonth()+1)+"-"+f(m.getDate())}function h(m=new Date,y){const _=new Date(m);return _.setDate(m.getDate()+y),_}function d(){s.value.returnDate=h(s.value.endDate,1)}function f(m,y=String(m)){return y.length<2?`0${y}`:y}return(m,y)=>(J(),se("form",{action:"#",onSubmit:Un(c,["stop","prevent"])},[zj,p("div",Hj,[p("div",Kj,[V(We,{label:"Start Date","input-type":"date",modelValue:i.value,"onUpdate:modelValue":y[0]||(y[0]=_=>i.value=_)},null,8,["modelValue"]),V(We,{label:"End Date","input-type":"date",modelValue:o.value,"onUpdate:modelValue":[y[1]||(y[1]=_=>o.value=_),d]},null,8,["modelValue"]),V(We,{label:"Return Date","input-type":"date",modelValue:a.value,"onUpdate:modelValue":y[2]||(y[2]=_=>a.value=_),disabled:"true"},null,8,["modelValue"])]),p("div",Gj,[V(We,{label:"Address",disabled:!r.value,modelValue:s.value.address,"onUpdate:modelValue":y[4]||(y[4]=_=>s.value.address=_)},{default:je(()=>[p("p",Wj,[fn(p("input",{type:"checkbox","onUpdate:modelValue":y[3]||(y[3]=_=>r.value=_),class:"mr-1 rounded-sm text-accent focus:ring-0"},null,512),[[yb,r.value]]),Qj])]),_:1},8,["disabled","modelValue"]),V(jj,{label:"Payment Options",modelValue:s.value.paymentOption,"onUpdate:modelValue":y[5]||(y[5]=_=>s.value.paymentOption=_)},{default:je(()=>[Yj,Xj,Jj]),_:1},8,["modelValue"])])]),p("footer",Zj,[eq,p("button",{type:"button",onClick:y[6]||(y[6]=_=>e("close")),class:"rounded-md border-2 border-green-800 bg-white px-6 py-2 text-green-800"}," Cancel ")])],40,qj))}},nq={class:"container mx-auto flex flex-col gap-4 px-4 py-8"},rq={class:"flex flex-row-reverse gap-2"},sq={class:"flex flex-col gap-2 lg:flex-row"},iq={class:"flex basis-3/12 flex-col bg-white p-4 shadow-sm shadow-secondary"},oq=["src"],aq={class:"flex w-full gap-2 overflow-x-auto px-1 py-2"},cq=["src","onClick"],lq={class:"flex w-full basis-6/12 flex-col justify-between bg-white p-4 shadow-sm shadow-secondary"},uq={class:"flex items-start justify-between"},hq=p("span",{class:"rounded-full bg-green-600 px-4 py-1 text-xs font-black text-white"}," AVAILABLE ",-1),dq={class:"my-4"},fq={class:"text-green-600"},pq=p("span",{class:"mr-2 text-2xl"},"₱",-1),mq={class:"flex gap-4"},gq=p("span",null,"4.0 / 5.0",-1),yq={class:"flex"},vq=p("span",{class:"material-icons text-green-600"},"location_on",-1),_q={class:"mt-2 flex flex-col"},wq={class:"flex gap-2"},bq={class:"flex flex-wrap gap-2"},Iq={class:"rounded-full border-2 border-yellow-500 bg-yellow-200 px-4 py-1 text-xs text-yellow-700"},Eq=p("span",{class:"material-icons"},"more_time",-1),Tq=p("span",null,"Rent",-1),xq=[Eq,Tq],Sq=p("button",{class:"flex basis-1/2 items-center justify-center gap-1 rounded-md border-2 border-text border-opacity-50 bg-secondary px-8 py-2 text-text text-opacity-80 transition-colors hover:bg-opacity-90 sm:basis-auto"},[p("span",{class:"material-icons"},"star"),p("span",null,"Add to Favorites")],-1),kq={class:"basis-3/12 bg-white p-4 shadow-sm shadow-secondary"},Aq=p("h2",null,"Lender",-1),Cq={class:"mb-4 flex flex-wrap items-center justify-between gap-2"},Rq=["src"],Nq={class:"whitespace-nowrap"},Pq=p("span",{class:"material-icons text-green-600"},"forum",-1),Dq=p("span",null,"Chat",-1),Oq=[Pq,Dq],Lq=p("h2",null,"Lender Ratings",-1),Mq={class:"mb-4 flex items-center gap-4"},Uq=p("span",null,"4.0 / 5.0",-1),Fq=p("h2",null,"Chat Response Rate",-1),$q={class:"mb-4 flex items-center gap-4"},Vq=p("span",null,"3.0 / 5.0",-1),Bq={class:"flex flex-col gap-2"},jq=Op('<div class="flex flex-col justify-between gap-4 bg-gray-50 p-4 md:flex-row md:items-center"><h1>Item Reviews and Rating</h1><div class="flex flex-wrap items-start gap-4 text-sm sm:text-base md:items-center"><div class="flex items-center gap-1"><span class="material-icons text-green-600">filter_alt</span><span>Filter:</span><select name="" id="" class="text-xs sm:text-base"><option value="">All Star</option></select></div><div class="flex items-center gap-1"><span class="material-icons text-green-600">sort</span><span>Sort:</span><select name="" id="" class="text-xs sm:text-base"><option value="">Relevance</option><option value="">???</option></select></div></div></div>',1),qq={class:"flex flex-col gap-2"},zq={class:"flex flex-col gap-2 bg-white p-4"},Hq={class:"flex items-center gap-2"},Kq=["src"],Gq={class:"flex flex-col"},Wq={class:"truncate text-gray-700"},Qq=p("p",{class:"py-2"},"user review........................",-1),Yq={__name:"ItemDetailView",setup(t){const e=_n(),n=$p(),r=le(n.params.id),s=le(0),i=le(null);function o(m){m?i.value.showModal():i.value.close()}const a=le(e.loadedProfile(5)),c=vt(()=>l.value.ownerId==e.myUserUid),l=le({itemName:"",location:"",rentAmount:"",rentRate:"",images:[],description:"",ownerId:"",tags:[]});function u(m){s.value=m}Ei(async()=>{l.value=await e.loadItem(r.value),a.value=await e.loadProfile(l.value.ownerId)});const h=le(null);function d(){e.editProfile=a.value,h.value.showModal()}function f(){h.value.close()}return(m,y)=>(J(),se($e,null,[p("main",nq,[p("section",rq,[V(pe(Pn),{to:"/home"},{default:je(()=>[xe("Close X")]),_:1})]),p("section",sq,[p("div",iq,[p("img",{src:l.value.images[s.value],alt:"",srcset:"",class:"aspect-square w-full object-contain"},null,8,oq),p("div",aq,[(J(!0),se($e,null,ir(l.value.images,(_,T)=>(J(),se("img",{class:Ln(["aspect-square h-24 cursor-pointer object-contain ring-4 ring-opacity-75",s.value==T?"ring-primary":"ring-transparent"]),src:_,onClick:k=>u(T),alt:"",srcset:""},null,10,cq))),256))])]),p("div",lq,[p("div",null,[p("div",uq,[p("h1",null,Ne(l.value.itemName),1),hq]),p("div",dq,[p("p",fq,[pq,xe(Ne(l.value.rentAmount+" - "+l.value.rentRate),1)]),p("div",mq,[gq,V(Xs,{value:"4"})]),p("div",yq,[vq,p("span",null,Ne(l.value.location),1)])]),p("p",null,Ne(l.value.description),1)]),p("div",_q,[p("div",wq,[xe(" Tags: "),p("ul",bq,[(J(!0),se($e,null,ir(l.value.tags,_=>(J(),se("li",Iq,Ne(_),1))),256))])]),p("div",{class:"mt-4 flex flex-col justify-end gap-2 sm:flex-row"},[p("button",{onClick:d,class:"flex basis-1/2 items-center justify-center gap-1 rounded-md bg-primary px-8 py-2 text-background sm:basis-auto"},xq),Sq])])]),p("div",kq,[Aq,p("div",Cq,[V(pe(Pn),{to:"/profile/"+l.value.ownerId,class:"flex items-center gap-2"},{default:je(()=>[p("img",{class:"aspect-square w-12 rounded-full",src:a.value.image,alt:"",srcset:""},null,8,Rq),p("span",Nq,Ne(a.value.firstName+" "+a.value.lastName),1)]),_:1},8,["to"]),c.value?wr("",!0):(J(),se("button",{key:0,class:"flex items-center gap-1",onClick:y[0]||(y[0]=_=>o(!0))},Oq))]),Lq,p("div",Mq,[Uq,V(Xs,{value:"4"})]),Fq,p("div",$q,[Vq,V(Xs,{value:"3"})])])]),p("section",Bq,[jq,p("section",qq,[(J(),se($e,null,ir(6,_=>p("article",zq,[p("div",Hq,[p("img",{class:"aspect-square w-12 rounded-full",src:pe(e).loadedProfile(_).image,alt:"",srcset:""},null,8,Kq),p("div",Gq,[V(Xs,{value:"4"}),p("span",Wq,Ne(pe(e).loadedProfile(_).firstName+" "+pe(e).loadedProfile(_).lastName),1)])]),Qq])),64))])])]),p("dialog",{ref_key:"rentDialog",ref:h,class:"rounded-xl bg-background backdrop:backdrop-brightness-50"},[V(tq,{onClose:f,item:l.value},null,8,["item"])],512),p("dialog",{ref_key:"messageDialog",ref:i,class:"rounded-xl p-0 backdrop:backdrop-brightness-50"},[V(tS,{"owner-id":l.value.ownerId,"owner-profile":a.value,onClose:y[1]||(y[1]=_=>o(!1))},null,8,["owner-id","owner-profile"])],512)],64))}},Xq={class:"container mx-auto flex h-full flex-row items-stretch gap-4 px-4 py-8"},Jq={class:"flex h-full flex-col overflow-hidden"},Zq=p("h1",{class:"z-10 px-6 py-4 shadow-sm shadow-secondary"}," Recent Messages ",-1),e6={key:0,class:"overflow-y-auto px-2"},t6=["src"],n6={class:"w-full truncate"},r6={class:"truncate font-black"},s6={key:1,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text text-opacity-60"},i6=p("p",null,"Loading messages...",-1),o6=[i6],a6={key:2,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text text-opacity-60"},c6=p("p",null,"No messages to show.",-1),l6=[c6],u6={__name:"MessagesView",setup(t){const e=_n(),n=le([]),r=le(!0);return Ei(async()=>{n.value=await e.loadConversations(e.myUserUid),r.value=!1}),(s,i)=>(J(),se("main",Xq,[p("aside",{class:Ln(["box-border basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-secondary lg:block lg:basis-1/3",["messages"].includes(s.$route.name)?"":"hidden"])},[p("div",Jq,[Zq,n.value.length!=0?(J(),se("div",e6,[(J(!0),se($e,null,ir(n.value,o=>(J(),Ti(pe(Pn),{to:"/messages/"+o.convoId,class:"my-2 flex gap-2 rounded-lg bg-opacity-40 p-2","active-class":"bg-secondary"},{default:je(()=>[p("img",{src:o.participant.image,alt:"",class:"aspect-square w-12 rounded-full shadow-sm shadow-secondary"},null,8,t6),p("div",n6,[p("p",r6,Ne(o.participant.firstName+" "+o.participant.lastName),1),p("p",{class:Ln(["truncate text-base text-gray-800",o.isRead||o.lastSender==pe(e).myUserUid?"font-normal":"font-bold"])},Ne((o.lastSender==pe(e).myUserUid?"You: ":"")+o.lastMessage),3)])]),_:2},1032,["to"]))),256))])):r.value?(J(),se("div",s6,o6)):(J(),se("div",a6,l6))])],2),p("div",{class:Ln(["basis-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-400 lg:block lg:basis-2/3",["messages"].includes(s.$route.name)?"hidden":""])},[V(pe(Rc))],2)]))}},h6={class:"container mx-auto flex flex-col gap-4 px-4 py-8 lg:flex-row"},d6=p("aside",{class:"basis-1/3"},[p("div",{class:"box-border flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm shadow-gray-400"},[p("h1",null,"Search for Items"),p("form",{action:"#",method:"get",class:"flex flex-col gap-2"},[p("div",{class:"flex gap-2"},[p("input",{type:"text",name:"",placeholder:"Item name",class:"w-full rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),p("button",{type:"submit",class:"rounded-xl bg-green-700 px-4 py-2 text-white"}," Search ")]),p("div",{class:"flex gap-2"},[p("input",{type:"text",name:"",placeholder:"Min. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""}),p("input",{type:"text",name:"",placeholder:"Max. Rate",class:"w-1/2 rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700",id:""})]),p("input",{type:"text",placeholder:"Location",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"}),p("input",{type:"text",placeholder:"Tags",class:"rounded-xl border-2 border-yellow-500 bg-yellow-200 px-4 py-2 placeholder-yellow-700"})]),p("section",null,[p("h2",null,"Category"),p("ul",null,[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Clothing "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Men")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Women")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Unisex")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Kids")])])]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Appliances "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Kitchen")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Laundry")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Living Room")])])]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Gadgets and Devices "),p("ul",{class:"ml-4"},[p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Smartphones")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Cameras")]),p("li",null,[p("input",{type:"checkbox",name:"",id:""}),xe("Tablets")])])])])])])],-1),f6={__name:"SearchView",setup(t){const e=_n();return(n,r)=>(J(),se("main",h6,[d6,V(Ju,{items:pe(e).itemsInRange(4,16),gridfor:"search",class:"basis-2/3"},null,8,["items"])]))}},p6={},m6={class:"flex h-full flex-col items-center justify-center"},g6={class:"text-gray-500"};function y6(t,e){return J(),se("div",m6,[p("p",g6,[Np(t.$slots,"default",{},()=>[xe("Click on a conversation to start")])])])}const v6=mh(p6,[["render",y6]]),_6={key:0,class:"flex h-full flex-col justify-between"},w6={class:"flex items-center justify-between bg-primary bg-opacity-90 px-6 py-2 shadow-md shadow-gray-400"},b6={class:"flex gap-2"},I6=["src"],E6={class:"flex flex-col text-background"},T6={class:"font-black"},x6=p("div",{class:"flex items-center gap-1 truncate"},[p("div",{class:"inline-block h-2 w-2 rounded-full bg-green-300"}),p("span",null,"Online")],-1),S6={class:"bg-white px-6 pt-12"},k6=["src"],A6={class:"max-w-full break-words"},C6={class:"sticky bottom-0 mt-4 rounded-t-xl bg-white pb-4"},R6=p("button",{type:"submit",class:"material-icons rounded-md border-2 border-transparent bg-primary px-4 py-2 text-background"}," send ",-1),N6={key:1,class:"my-2 flex h-full basis-full flex-col justify-center text-center text-text text-opacity-60"},P6=p("p",null,"Loading messages...",-1),D6=[P6],O6={__name:"ConversationView",setup(t){const e=$p(),n=_n(),r=le(""),s=le(),i=le(n.tempUserProfile),o=le({lastMessage:"Loading...",lastSender:"12",isRead:!0}),a=le(e.params.id),c=le(!0),l=le([]);Ei(async()=>{o.value=await n.loadConversation(a.value),l.value=[{sender:o.value.lastSender}],i.value=await n.loadProfile(o.value.participants.find(f=>f!=n.myUserUid)),l.value=await n.loadMessages(a.value),c.value=!1}),ss(()=>e.params.id,async f=>{f&&(a.value=f,c.value=!0,l.value=[],o.value=await n.loadConversation(f),i.value=await n.loadProfile(o.value.participants.find(m=>m!=n.myUserUid)),l.value=await n.loadMessages(f),c.value=!1)});async function u(){await n.sendMessage(a.value,r.value),l.value.push({sender:n.myUserUid,content:r.value}),r.value=""}function h(f){return f+1==l.value.length?!1:l.value[f].sender==l.value[f+1].sender}function d(f){var m="";return f+1<l.value.length&&l.value[f].sender==l.value[f+1].sender&&(m+=l.value[f].sender==n.myUserUid?" rounded-br-none":" rounded-bl-none"),f-1>=0&&l.value[f].sender==l.value[f-1].sender&&(m+=l.value[f].sender==n.myUserUid?" rounded-tr-none":" rounded-tl-none"),m+=l.value[f].sender==n.myUserUid?" bg-primary text-background bg-opacity-90":" bg-secondary bg-opacity-40",m}return(f,m)=>l.value.length!=0?(J(),se("div",_6,[p("header",w6,[p("div",b6,[p("img",{src:i.value.image,alt:"",class:"aspect-square w-12 rounded-full"},null,8,I6),p("div",E6,[p("p",T6,Ne(i.value.firstName+" "+i.value.lastName),1),x6])]),V(pe(Pn),{to:"/messages",class:"material-icons text-background"},{default:je(()=>[xe("close")]),_:1})]),p("main",{class:"flex basis-full flex-col-reverse overflow-y-auto",ref_key:"scrollToElement",ref:s},[p("div",S6,[(J(!0),se($e,null,ir(l.value,(y,_)=>(J(),se("div",{class:Ln([y.sender==pe(n).myUserUid?"flex-row-reverse":"flex-row","my-1 flex items-end gap-2"])},[p("img",{src:y.sender==pe(n).myUserUid?pe(n).myProfile.image:i.value.image,alt:"",class:Ln(["aspect-square w-12 rounded-full shadow-sm shadow-secondary",h(_)?"opacity-0":""])},null,10,k6),p("div",{class:Ln(["max-w-md rounded-3xl px-4 py-3 shadow-sm shadow-secondary",d(_)])},[p("p",A6,Ne(y.content),1)],2)],2))),256)),p("section",C6,[p("form",{class:"bg-amber-400 flex gap-2 rounded-xl bg-secondary bg-opacity-80 p-2 shadow-gray-400 drop-shadow-sm",onSubmit:m[1]||(m[1]=Un(y=>u(),["prevent"]))},[V(We,{placeholder:"Enter message...",modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=y=>r.value=y)},null,8,["modelValue"]),R6],32)])])],512)])):(J(),se("div",N6,D6))}},L6={class:"bg-white p-8 self-center rounded-3xl flex flex-col overflow-y-auto max-w-full"},M6={class:"successMessage bg-white rounded-md"},U6={class:"py-3 px-5 text-white bg-gray-800 rounded-xl flex flex-col m-auto mt-5"},F6=["onSubmit"],$6=p("h2",null,"Enter Email that is associated with your account.",-1),V6=p("button",{class:"py-3 px-5 text-white bg-green-800 rounded-xl"}," Reset Password ",-1),B6={__name:"ForgotPasswordView",setup(t){const e=le("");let n=le(!1),r=le(""),s=le(!1),i=le("");const o=async()=>{if(e.value!==""){try{await Mt.auth().sendPasswordResetEmail(e.value).then(()=>{s.value=!0,i.value="Check your email to reset your password",n.value=!1})}catch(a){s.value=!1,n.value=!0,r.value=a.message,console.log("error")}console.log("success")}else s.value=!1,n.value=!0,r.value="Please enter your email address.";console.log("failed")};return(a,c)=>{const l=ao("RouterLink");return J(),se("div",L6,[fn(p("div",M6,[xe(Ne(pe(i))+" ",1),p("button",U6,[V(l,{to:"/login"},{default:je(()=>[xe("Close")]),_:1})])],512),[[is,pe(s)]]),fn(p("form",{onSubmit:Un(o,["stop","prevent"]),class:"flex gap-2 flex-col"},[$6,fn(p("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Email Address"},null,512),[[lf,e.value]]),fn(p("div",{class:"errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"},Ne(pe(r)),513),[[is,pe(n)]]),V6,V(l,{to:"/login",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"},{default:je(()=>[xe("Back")]),_:1})],40,F6),[[is,!pe(s)]])])}}};const j6={},q6={class:"bg-white p-8 self-center max-w-full rounded-3xl flex flex-col overflow-y-auto"},z6=Op('<div class="overflow-y-auto max-h-96 text-justify pr-2" data-v-57730d13><h1 data-v-57730d13>Terms and Conditions</h1><h2 data-v-57730d13>Acceptance of Terms</h2><p data-v-57730d13> You accept and agree to be governed by these Terms and Conditions by accessing and using our renting web app (ItemShare). Please don&#39;t use the Platform if you disagree with these terms. </p><h2 data-v-57730d13>User Responsibility</h2><p data-v-57730d13> The Platform provides a platform for people to interact and conduct rental business. The things that are listed on the Platform are not under our ownership or control. </p><p data-v-57730d13> Users are completely responsible for their rental actions, which may include interacting with other users and negotiating and agreeing on rental terms. </p><p data-v-57730d13> Things advertised on the Platform may not be available, in good condition, of sufficient quality, or compliance with the law. Users are in charge of determining if the products are appropriate and trustworthy, and they use them at their own risk. </p><h2 data-v-57730d13>Liability</h2><p data-v-57730d13> We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or connected with the Platform, including but not limited to loss of data, loss of profit, or loss of business opportunities, to the extent permitted by applicable law. </p><p data-v-57730d13> The users undertake to hold us harmless from any claims, demands, or losses resulting from disagreements with other users or other parties. </p><h2 data-v-57730d13>Privacy and Personal Information</h2><p data-v-57730d13> We are dedicated to safeguarding our users&#39; data and privacy. For thorough information on how we gather, utilize, and protect user data, please refer to our Privacy Policy. </p><p data-v-57730d13> Although we will make a reasonable effort to protect user data, we cannot ensure the security of user data sent through the Platform. Users are aware of and agree to this risk. </p><h2 data-v-57730d13>Intellectual Property</h2><p data-v-57730d13> The Platform and its contents (aside from user-generated material) are owned by their respective owners and are covered by intellectual property rights. Without express authorization, Users agree not to use, modify, distribute, or reproduce any aspect of the Platform. </p><h2 data-v-57730d13>Modifications and Termination</h2><p data-v-57730d13> The Platform, together with these Terms and Conditions, is subject to change or termination at any moment with prior notice. </p><p data-v-57730d13> Users are recommended to often review the Terms and Conditions. Any changes made are accepted by continuing to use the Platform. </p></div>',1),H6={class:"flex justify-end gap-2 mt-4"};function K6(t,e){const n=ao("RouterLink");return J(),se("div",q6,[z6,p("div",H6,[V(n,{to:"/register",class:"py-3 px-5 text-white bg-green-800 rounded-lg"},{default:je(()=>[xe(" ACCEPT ")]),_:1}),V(n,{to:"/register",class:"py-3 px-5 text-white bg-red-800 rounded-lg"},{default:je(()=>[xe(" DECLINE ")]),_:1})])])}const G6=mh(j6,[["render",K6],["__scopeId","data-v-57730d13"]]),W6={class:"container mx-auto flex flex-col gap-2 px-4 py-8"},Q6=p("h1",null,"New Item for Rent",-1),Y6=["onSubmit"],X6={class:"flex basis-1/2 flex-col gap-4 px-8"},J6={class:"flex flex-col gap-1"},Z6=p("label",null,"Description",-1),e5={class:"flex flex-col gap-1"},t5=p("label",null,"Tags",-1),n5={class:"flex flex-wrap gap-2 rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 p-2 focus-within:border-primary focus-within:border-opacity-100 focus-within:bg-white focus-within:bg-opacity-90"},r5={class:"flex items-center gap-1 whitespace-nowrap rounded-md bg-primary bg-opacity-80 py-1 pl-2 pr-1 text-background"},s5=["onClick"],i5={class:"flex basis-1/2 flex-col gap-4 px-8"},o5={class:"flex flex-col gap-1"},a5=p("label",null,"Images",-1),c5={class:"w-full overflow-x-auto rounded-md border-2 border-text border-opacity-25 bg-secondary bg-opacity-50 p-2",id:"images"},l5={class:"flex gap-2"},u5={for:"add-image",class:"group/x relative aspect-square h-40 rounded-md border-2 border-dashed border-text border-opacity-40 px-2 py-4 text-center hover:border-primary"},h5=p("p",{class:"material-icons text-6xl text-text text-opacity-50 group-hover/x:text-primary"}," add_photo_alternate ",-1),d5=p("p",{class:"text-sm text-text text-opacity-75 group-hover/x:text-primary"}," Browse for an image to upload. ",-1),f5=["src","onClick"],p5={class:"flex flex-col gap-4 sm:flex-row"},m5=p("footer",{class:"mt-4 flex flex-col justify-end gap-2 md:flex-row"},[p("button",{type:"submit",class:"rounded-md border-2 border-green-800 bg-green-800 px-8 py-2 text-white"}," Create "),p("button",{type:"button",class:"rounded-md border-2 border-green-800 bg-white px-8 py-2 text-green-800"}," Cancel ")],-1),g5={__name:"CreateItemView",setup(t){const e=Nc(),n=_n(),r=le([]),s=le({itemName:"",location:"",rentAmount:"",rentRate:"",description:"",imageFiles:[],tags:[]}),i=le(""),o=le("");function a(f){for(let m of f.target.files){let y=new FileReader;s.value.imageFiles.push(m),y.readAsDataURL(m),y.onload=_=>{r.value.push(_.target.result)}}}function c(f){r.value.splice(f,1),s.value.imageFiles.splice(f,1)}function l(f){s.value.tags.splice(f,1)}function u(){o.value&&(s.value.tags.includes(o.value)||s.value.tags.push(o.value),o.value="")}function h(){o.value.endsWith(",")&&(o.value=o.value.slice(0,-1),u())}async function d(){i.value="";try{await n.createItem(s.value)&&e.push("/home")}catch(f){i.value=f}}return(f,m)=>(J(),se("main",W6,[Q6,p("form",{onSubmit:Un(d,["stop","prevent"]),class:"flex flex-col gap-4 divide-x-0 divide-secondary bg-white py-8 shadow-sm shadow-secondary md:flex-row md:gap-0 md:divide-x-2"},[p("div",X6,[V(We,{modelValue:s.value.itemName,"onUpdate:modelValue":m[0]||(m[0]=y=>s.value.itemName=y),label:"Item Name",placeholder:"A name for the item..."},null,8,["modelValue"]),p("div",J6,[Z6,fn(p("textarea",{"onUpdate:modelValue":m[1]||(m[1]=y=>s.value.description=y),name:"description",class:"rounded-md border-2 border-text border-opacity-50 bg-white bg-opacity-50 placeholder:text-sm placeholder:text-text placeholder:text-opacity-60 focus:border-primary focus:border-opacity-100 focus:bg-white focus:bg-opacity-90 focus:ring-0 focus:placeholder:text-text focus:placeholder:text-opacity-50",placeholder:"A description on the item..."},null,512),[[lf,s.value.description]])]),p("div",e5,[t5,p("div",n5,[(J(!0),se($e,null,ir(s.value.tags,(y,_)=>(J(),se("div",r5,[p("span",null,Ne(y),1),p("button",{class:"material-icons aspect-square rounded-lg bg-background bg-opacity-10 px-1 text-xs font-bold text-background hover:bg-accent hover:text-text",onClick:T=>l(_),type:"button"}," close ",8,s5)]))),256)),fn(p("input",{type:"text",placeholder:"Add a tag...",onInput:m[2]||(m[2]=y=>h()),onKeydown:m[3]||(m[3]=kA(Un(y=>u(),["prevent"]),["enter"])),onFocusout:m[4]||(m[4]=y=>u()),"onUpdate:modelValue":m[5]||(m[5]=y=>o.value=y),class:"flex-1 border-none bg-transparent px-1 py-1 focus:ring-0"},null,544),[[lf,o.value]])])]),V(We,{modelValue:s.value.location,"onUpdate:modelValue":m[6]||(m[6]=y=>s.value.location=y),label:"Location",placeholder:"Preferred area to deliver or retrieve..."},null,8,["modelValue"])]),p("div",i5,[p("div",o5,[a5,p("div",c5,[p("div",l5,[p("label",u5,[h5,d5,p("input",{type:"file",id:"add-image",accept:"image/*",onChange:m[7]||(m[7]=y=>a(y)),class:"absolute left-0 top-0 block h-full w-full cursor-pointer opacity-0",multiple:""},null,32)]),(J(!0),se($e,null,ir(r.value,(y,_)=>(J(),se("img",{class:"aspect-square h-40 cursor-pointer rounded-md object-contain ring-4 ring-transparent hover:opacity-60 hover:ring-primary",src:y,alt:"",onClick:T=>c(_),srcset:""},null,8,f5))),256))])])]),p("div",p5,[V(We,{modelValue:s.value.rentAmount,"onUpdate:modelValue":m[8]||(m[8]=y=>s.value.rentAmount=y),placeholder:"1,500",label:"Rent Amount",class:"basis-1/2"},null,8,["modelValue"]),V(We,{modelValue:s.value.rentRate,"onUpdate:modelValue":m[9]||(m[9]=y=>s.value.rentRate=y),label:"Rent Rate",class:"basis-1/2",placeholder:"per day/week/month"},null,8,["modelValue"])]),fn(p("div",{class:"errorMessage rounded-md bg-red-500 px-5 py-2 align-middle text-sm"},Ne(i.value),513),[[is,i.value]]),m5])],40,Y6)]))}},nS=$1({history:r1("/itemshare/"),routes:[{path:"/",component:X1,meta:{requiresAuth:!1},children:[{path:"",name:"getStarted",component:iC},{path:"/login",name:"login",component:vV},{path:"/register",name:"register",component:DV},{path:"/terms-and-conditions",name:"termsAndConditions",component:G6},{path:"/forgot-password",name:"forgotPassword",component:B6}]},{path:"/home",component:N4,meta:{requiresAuth:!0},children:[{path:"",name:"home",component:q4},{path:"/profile/:id",name:"profile",component:vw},{path:"/profile",name:"myProfile",component:vw},{path:"/messages",component:u6,children:[{path:"",name:"messages",component:v6},{path:"/messages/:id",name:"conversation",component:O6}]},{path:"/item/:id",name:"itemDetail",component:Yq},{path:"/search",name:"search",component:f6},{path:"/create-item",name:"createItem",component:g5}]}],scrollBehavior(t,e,n){return n||{top:0}}});nS.beforeEach((t,e,n)=>{const r=_n();t.meta.requiresAuth&&!r.loggedInUser?n("/"):!t.meta.requiresAuth&&r.loggedInUser?n("/home"):n()});const sy=RA(B1);sy.use(DA());sy.use(nS);sy.mount("#app");
