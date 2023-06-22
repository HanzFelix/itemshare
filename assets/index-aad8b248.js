(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Pf(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const Ue={},ks=[],kn=()=>{},UT=()=>!1,BT=/^on[^a-z]/,ku=n=>BT.test(n),Nf=n=>n.startsWith("onUpdate:"),yt=Object.assign,Of=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jT=Object.prototype.hasOwnProperty,Te=(n,e)=>jT.call(n,e),te=Array.isArray,Cs=n=>dc(n)==="[object Map]",ho=n=>dc(n)==="[object Set]",wm=n=>dc(n)==="[object Date]",de=n=>typeof n=="function",lt=n=>typeof n=="string",xa=n=>typeof n=="symbol",Fe=n=>n!==null&&typeof n=="object",xw=n=>Fe(n)&&de(n.then)&&de(n.catch),Sw=Object.prototype.toString,dc=n=>Sw.call(n),qT=n=>dc(n).slice(8,-1),Aw=n=>dc(n)==="[object Object]",Lf=n=>lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yl=Pf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zT=/-(\w)/g,Jn=Cu(n=>n.replace(zT,(e,t)=>t?t.toUpperCase():"")),HT=/\B([A-Z])/g,fo=Cu(n=>n.replace(HT,"-$1").toLowerCase()),Ru=Cu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fh=Cu(n=>n?`on${Ru(n)}`:""),Sa=(n,e)=>!Object.is(n,e),vl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Ml=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Fl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let _m;const yd=()=>_m||(_m=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mf(n){if(te(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=lt(r)?QT(r):Mf(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(lt(n))return n;if(Fe(n))return n}}const KT=/;(?![^(]*\))/g,GT=/:([^]+)/,WT=/\/\*[^]*?\*\//g;function QT(n){const e={};return n.replace(WT,"").split(KT).forEach(t=>{if(t){const r=t.split(GT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ur(n){let e="";if(lt(n))e=n;else if(te(n))for(let t=0;t<n.length;t++){const r=Ur(n[t]);r&&(e+=r+" ")}else if(Fe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const YT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",XT=Pf(YT);function kw(n){return!!n||n===""}function JT(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=fc(n[r],e[r]);return t}function fc(n,e){if(n===e)return!0;let t=wm(n),r=wm(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=xa(n),r=xa(e),t||r)return n===e;if(t=te(n),r=te(e),t||r)return t&&r?JT(n,e):!1;if(t=Fe(n),r=Fe(e),t||r){if(!t||!r)return!1;const i=Object.keys(n).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!fc(n[o],e[o]))return!1}}return String(n)===String(e)}function Ff(n,e){return n.findIndex(t=>fc(t,e))}const De=n=>lt(n)?n:n==null?"":te(n)||Fe(n)&&(n.toString===Sw||!de(n.toString))?JSON.stringify(n,Cw,2):String(n),Cw=(n,e)=>e&&e.__v_isRef?Cw(n,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:ho(e)?{[`Set(${e.size})`]:[...e.values()]}:Fe(e)&&!te(e)&&!Aw(e)?String(e):e;let sn;class Rw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Dw(n){return new Rw(n)}function ZT(n,e=sn){e&&e.active&&e.effects.push(n)}function Pw(){return sn}function ex(n){sn&&sn.cleanups.push(n)}const $f=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Nw=n=>(n.w&Hr)>0,Ow=n=>(n.n&Hr)>0,tx=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Hr},nx=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];Nw(i)&&!Ow(i)?i.delete(n):e[t++]=i,i.w&=~Hr,i.n&=~Hr}e.length=t}},$l=new WeakMap;let Wo=0,Hr=1;const vd=30;let xn;const Fi=Symbol(""),wd=Symbol("");class Vf{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,ZT(this,r)}run(){if(!this.active)return this.fn();let e=xn,t=Br;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xn,xn=this,Br=!0,Hr=1<<++Wo,Wo<=vd?tx(this):bm(this),this.fn()}finally{Wo<=vd&&nx(this),Hr=1<<--Wo,xn=this.parent,Br=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xn===this?this.deferStop=!0:this.active&&(bm(this),this.onStop&&this.onStop(),this.active=!1)}}function bm(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Br=!0;const Lw=[];function po(){Lw.push(Br),Br=!1}function go(){const n=Lw.pop();Br=n===void 0?!0:n}function Jt(n,e,t){if(Br&&xn){let r=$l.get(n);r||$l.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=$f()),Mw(i)}}function Mw(n,e){let t=!1;Wo<=vd?Ow(n)||(n.n|=Hr,t=!Nw(n)):t=!n.has(xn),t&&(n.add(xn),xn.deps.push(n))}function dr(n,e,t,r,i,s){const o=$l.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&te(n)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":te(n)?Lf(t)&&a.push(o.get("length")):(a.push(o.get(Fi)),Cs(n)&&a.push(o.get(wd)));break;case"delete":te(n)||(a.push(o.get(Fi)),Cs(n)&&a.push(o.get(wd)));break;case"set":Cs(n)&&a.push(o.get(Fi));break}if(a.length===1)a[0]&&_d(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);_d($f(c))}}function _d(n,e){const t=te(n)?n:[...n];for(const r of t)r.computed&&Im(r);for(const r of t)r.computed||Im(r)}function Im(n,e){(n!==xn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function rx(n,e){var t;return(t=$l.get(n))==null?void 0:t.get(e)}const ix=Pf("__proto__,__v_isRef,__isVue"),Fw=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xa)),sx=Uf(),ox=Uf(!1,!0),ax=Uf(!0),Em=cx();function cx(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=Se(this);for(let s=0,o=this.length;s<o;s++)Jt(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(Se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){po();const r=Se(this)[e].apply(this,t);return go(),r}}),n}function lx(n){const e=Se(this);return Jt(e,"has",n),e.hasOwnProperty(n)}function Uf(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?xx:jw:e?Bw:Uw).get(r))return r;const o=te(r);if(!n){if(o&&Te(Em,i))return Reflect.get(Em,i,s);if(i==="hasOwnProperty")return lx}const a=Reflect.get(r,i,s);return(xa(i)?Fw.has(i):ix(i))||(n||Jt(r,"get",i),e)?a:et(a)?o&&Lf(i)?a:a.value:Fe(a)?n?qw(a):mo(a):a}}const ux=$w(),hx=$w(!0);function $w(n=!1){return function(t,r,i,s){let o=t[r];if(Vs(o)&&et(o)&&!et(i))return!1;if(!n&&(!Vl(i)&&!Vs(i)&&(o=Se(o),i=Se(i)),!te(t)&&et(o)&&!et(i)))return o.value=i,!0;const a=te(t)&&Lf(r)?Number(r)<t.length:Te(t,r),c=Reflect.set(t,r,i,s);return t===Se(s)&&(a?Sa(i,o)&&dr(t,"set",r,i):dr(t,"add",r,i)),c}}function dx(n,e){const t=Te(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&dr(n,"delete",e,void 0),r}function fx(n,e){const t=Reflect.has(n,e);return(!xa(e)||!Fw.has(e))&&Jt(n,"has",e),t}function px(n){return Jt(n,"iterate",te(n)?"length":Fi),Reflect.ownKeys(n)}const Vw={get:sx,set:ux,deleteProperty:dx,has:fx,ownKeys:px},gx={get:ax,set(n,e){return!0},deleteProperty(n,e){return!0}},mx=yt({},Vw,{get:ox,set:hx}),Bf=n=>n,Du=n=>Reflect.getPrototypeOf(n);function Kc(n,e,t=!1,r=!1){n=n.__v_raw;const i=Se(n),s=Se(e);t||(e!==s&&Jt(i,"get",e),Jt(i,"get",s));const{has:o}=Du(i),a=r?Bf:t?zf:Aa;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function Gc(n,e=!1){const t=this.__v_raw,r=Se(t),i=Se(n);return e||(n!==i&&Jt(r,"has",n),Jt(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function Wc(n,e=!1){return n=n.__v_raw,!e&&Jt(Se(n),"iterate",Fi),Reflect.get(n,"size",n)}function Tm(n){n=Se(n);const e=Se(this);return Du(e).has.call(e,n)||(e.add(n),dr(e,"add",n,n)),this}function xm(n,e){e=Se(e);const t=Se(this),{has:r,get:i}=Du(t);let s=r.call(t,n);s||(n=Se(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?Sa(e,o)&&dr(t,"set",n,e):dr(t,"add",n,e),this}function Sm(n){const e=Se(this),{has:t,get:r}=Du(e);let i=t.call(e,n);i||(n=Se(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&dr(e,"delete",n,void 0),s}function Am(){const n=Se(this),e=n.size!==0,t=n.clear();return e&&dr(n,"clear",void 0,void 0),t}function Qc(n,e){return function(r,i){const s=this,o=s.__v_raw,a=Se(o),c=e?Bf:n?zf:Aa;return!n&&Jt(a,"iterate",Fi),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Yc(n,e,t){return function(...r){const i=this.__v_raw,s=Se(i),o=Cs(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=i[n](...r),u=t?Bf:e?zf:Aa;return!e&&Jt(s,"iterate",c?wd:Fi),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Er(n){return function(...e){return n==="delete"?!1:this}}function yx(){const n={get(s){return Kc(this,s)},get size(){return Wc(this)},has:Gc,add:Tm,set:xm,delete:Sm,clear:Am,forEach:Qc(!1,!1)},e={get(s){return Kc(this,s,!1,!0)},get size(){return Wc(this)},has:Gc,add:Tm,set:xm,delete:Sm,clear:Am,forEach:Qc(!1,!0)},t={get(s){return Kc(this,s,!0)},get size(){return Wc(this,!0)},has(s){return Gc.call(this,s,!0)},add:Er("add"),set:Er("set"),delete:Er("delete"),clear:Er("clear"),forEach:Qc(!0,!1)},r={get(s){return Kc(this,s,!0,!0)},get size(){return Wc(this,!0)},has(s){return Gc.call(this,s,!0)},add:Er("add"),set:Er("set"),delete:Er("delete"),clear:Er("clear"),forEach:Qc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Yc(s,!1,!1),t[s]=Yc(s,!0,!1),e[s]=Yc(s,!1,!0),r[s]=Yc(s,!0,!0)}),[n,t,e,r]}const[vx,wx,_x,bx]=yx();function jf(n,e){const t=e?n?bx:_x:n?wx:vx;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(Te(t,i)&&i in r?t:r,i,s)}const Ix={get:jf(!1,!1)},Ex={get:jf(!1,!0)},Tx={get:jf(!0,!1)},Uw=new WeakMap,Bw=new WeakMap,jw=new WeakMap,xx=new WeakMap;function Sx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ax(n){return n.__v_skip||!Object.isExtensible(n)?0:Sx(qT(n))}function mo(n){return Vs(n)?n:qf(n,!1,Vw,Ix,Uw)}function kx(n){return qf(n,!1,mx,Ex,Bw)}function qw(n){return qf(n,!0,gx,Tx,jw)}function qf(n,e,t,r,i){if(!Fe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=Ax(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function jr(n){return Vs(n)?jr(n.__v_raw):!!(n&&n.__v_isReactive)}function Vs(n){return!!(n&&n.__v_isReadonly)}function Vl(n){return!!(n&&n.__v_isShallow)}function zw(n){return jr(n)||Vs(n)}function Se(n){const e=n&&n.__v_raw;return e?Se(e):n}function Pu(n){return Ml(n,"__v_skip",!0),n}const Aa=n=>Fe(n)?mo(n):n,zf=n=>Fe(n)?qw(n):n;function Hw(n){Br&&xn&&(n=Se(n),Mw(n.dep||(n.dep=$f())))}function Kw(n,e){n=Se(n);const t=n.dep;t&&_d(t)}function et(n){return!!(n&&n.__v_isRef===!0)}function xe(n){return Gw(n,!1)}function Cx(n){return Gw(n,!0)}function Gw(n,e){return et(n)?n:new Rx(n,e)}class Rx{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Se(e),this._value=t?e:Aa(e)}get value(){return Hw(this),this._value}set value(e){const t=this.__v_isShallow||Vl(e)||Vs(e);e=t?e:Se(e),Sa(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Aa(e),Kw(this))}}function re(n){return et(n)?n.value:n}const Dx={get:(n,e,t)=>re(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return et(i)&&!et(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function Ww(n){return jr(n)?n:new Proxy(n,Dx)}function Px(n){const e=te(n)?new Array(n.length):{};for(const t in n)e[t]=Ox(n,t);return e}class Nx{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rx(Se(this._object),this._key)}}function Ox(n,e,t){const r=n[e];return et(r)?r:new Nx(n,e,t)}class Lx{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Vf(e,()=>{this._dirty||(this._dirty=!0,Kw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Se(this);return Hw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Mx(n,e,t=!1){let r,i;const s=de(n);return s?(r=n,i=kn):(r=n.get,i=n.set),new Lx(r,i,s||!i,t)}function qr(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){Nu(s,e,t)}return i}function Cn(n,e,t,r){if(de(n)){const s=qr(n,e,t,r);return s&&xw(s)&&s.catch(o=>{Nu(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(Cn(n[s],e,t,r));return i}function Nu(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){qr(c,null,10,[n,o,a]);return}}Fx(n,t,i,r)}function Fx(n,e,t,r=!0){console.error(n)}let ka=!1,bd=!1;const Pt=[];let Fn=0;const Rs=[];let sr=null,_i=0;const Qw=Promise.resolve();let Hf=null;function Kf(n){const e=Hf||Qw;return n?e.then(this?n.bind(this):n):e}function $x(n){let e=Fn+1,t=Pt.length;for(;e<t;){const r=e+t>>>1;Ca(Pt[r])<n?e=r+1:t=r}return e}function Gf(n){(!Pt.length||!Pt.includes(n,ka&&n.allowRecurse?Fn+1:Fn))&&(n.id==null?Pt.push(n):Pt.splice($x(n.id),0,n),Yw())}function Yw(){!ka&&!bd&&(bd=!0,Hf=Qw.then(Jw))}function Vx(n){const e=Pt.indexOf(n);e>Fn&&Pt.splice(e,1)}function Ux(n){te(n)?Rs.push(...n):(!sr||!sr.includes(n,n.allowRecurse?_i+1:_i))&&Rs.push(n),Yw()}function km(n,e=ka?Fn+1:0){for(;e<Pt.length;e++){const t=Pt[e];t&&t.pre&&(Pt.splice(e,1),e--,t())}}function Xw(n){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,sr){sr.push(...e);return}for(sr=e,sr.sort((t,r)=>Ca(t)-Ca(r)),_i=0;_i<sr.length;_i++)sr[_i]();sr=null,_i=0}}const Ca=n=>n.id==null?1/0:n.id,Bx=(n,e)=>{const t=Ca(n)-Ca(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Jw(n){bd=!1,ka=!0,Pt.sort(Bx);const e=kn;try{for(Fn=0;Fn<Pt.length;Fn++){const t=Pt[Fn];t&&t.active!==!1&&qr(t,null,14)}}finally{Fn=0,Pt.length=0,Xw(),ka=!1,Hf=null,(Pt.length||Rs.length)&&Jw()}}function jx(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ue;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ue;d&&(i=t.map(p=>lt(p)?p.trim():p)),h&&(i=t.map(Fl))}let a,c=r[a=Fh(e)]||r[a=Fh(Jn(e))];!c&&s&&(c=r[a=Fh(fo(e))]),c&&Cn(c,n,6,i);const l=r[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(l,n,6,i)}}function Zw(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!de(n)){const c=l=>{const u=Zw(l,e,!0);u&&(a=!0,yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(Fe(n)&&r.set(n,null),null):(te(s)?s.forEach(c=>o[c]=null):yt(o,s),Fe(n)&&r.set(n,o),o)}function Ou(n,e){return!n||!ku(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(n,e[0].toLowerCase()+e.slice(1))||Te(n,fo(e))||Te(n,e))}let St=null,e_=null;function Ul(n){const e=St;return St=n,e_=n&&n.type.__scopeId||null,e}function Pe(n,e=St,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Vm(-1);const s=Ul(e);let o;try{o=n(...i)}finally{Ul(s),r._d&&Vm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $h(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:v}=n;let b,E;const R=Ul(n);try{if(t.shapeFlag&4){const A=i||r;b=Mn(u.call(A,A,h,s,p,d,y)),E=c}else{const A=e;b=Mn(A.length>1?A(s,{attrs:c,slots:a,emit:l}):A(s,null)),E=e.props?c:qx(c)}}catch(A){oa.length=0,Nu(A,n,1),b=ie(Kr)}let S=b;if(E&&v!==!1){const A=Object.keys(E),{shapeFlag:$}=S;A.length&&$&7&&(o&&A.some(Nf)&&(E=zx(E,o)),S=Us(S,E))}return t.dirs&&(S=Us(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),b=S,Ul(R),b}const qx=n=>{let e;for(const t in n)(t==="class"||t==="style"||ku(t))&&((e||(e={}))[t]=n[t]);return e},zx=(n,e)=>{const t={};for(const r in n)(!Nf(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Hx(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Cm(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ou(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Cm(r,o,l):!0:!!o;return!1}function Cm(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Ou(t,s))return!0}return!1}function Kx({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Gx=n=>n.__isSuspense;function Wx(n,e){e&&e.pendingBranch?te(n)?e.effects.push(...n):e.effects.push(n):Ux(n)}const Xc={};function ra(n,e,t){return t_(n,e,t)}function t_(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=Ue){var a;const c=Pw()===((a=gt)==null?void 0:a.scope)?gt:null;let l,u=!1,h=!1;if(et(n)?(l=()=>n.value,u=Vl(n)):jr(n)?(l=()=>n,r=!0):te(n)?(h=!0,u=n.some(A=>jr(A)||Vl(A)),l=()=>n.map(A=>{if(et(A))return A.value;if(jr(A))return Ri(A);if(de(A))return qr(A,c,2)})):de(n)?e?l=()=>qr(n,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Cn(n,c,3,[p])}:l=kn,e&&r){const A=l;l=()=>Ri(A())}let d,p=A=>{d=R.onStop=()=>{qr(A,c,4)}},y;if(Pa)if(p=kn,e?t&&Cn(e,c,3,[l(),h?[]:void 0,p]):l(),i==="sync"){const A=jS();y=A.__watcherHandles||(A.__watcherHandles=[])}else return kn;let v=h?new Array(n.length).fill(Xc):Xc;const b=()=>{if(R.active)if(e){const A=R.run();(r||u||(h?A.some(($,j)=>Sa($,v[j])):Sa(A,v)))&&(d&&d(),Cn(e,c,3,[A,v===Xc?void 0:h&&v[0]===Xc?[]:v,p]),v=A)}else R.run()};b.allowRecurse=!!e;let E;i==="sync"?E=b:i==="post"?E=()=>zt(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),E=()=>Gf(b));const R=new Vf(l,E);e?t?b():v=R.run():i==="post"?zt(R.run.bind(R),c&&c.suspense):R.run();const S=()=>{R.stop(),c&&c.scope&&Of(c.scope.effects,R)};return y&&y.push(S),S}function Qx(n,e,t){const r=this.proxy,i=lt(n)?n.includes(".")?n_(r,n):()=>r[n]:n.bind(r,r);let s;de(e)?s=e:(s=e.handler,t=e);const o=gt;Bs(this);const a=t_(i,s.bind(r),t);return o?Bs(o):$i(),a}function n_(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function Ri(n,e){if(!Fe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),et(n))Ri(n.value,e);else if(te(n))for(let t=0;t<n.length;t++)Ri(n[t],e);else if(ho(n)||Cs(n))n.forEach(t=>{Ri(t,e)});else if(Aw(n))for(const t in n)Ri(n[t],e);return n}function dt(n,e){const t=St;if(t===null)return n;const r=$u(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Ue]=e[s];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&Ri(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function gi(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(po(),Cn(c,t,8,[n.el,a,n,e]),go())}}function r_(n,e){return de(n)?(()=>yt({name:n.name},e,{setup:n}))():n}const ia=n=>!!n.type.__asyncLoader,i_=n=>n.type.__isKeepAlive;function Yx(n,e){s_(n,"a",e)}function Xx(n,e){s_(n,"da",e)}function s_(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Lu(e,r,t),t){let i=t.parent;for(;i&&i.parent;)i_(i.parent.vnode)&&Jx(r,e,t,i),i=i.parent}}function Jx(n,e,t,r){const i=Lu(e,n,r,!0);a_(()=>{Of(r[e],i)},t)}function Lu(n,e,t=gt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;po(),Bs(t);const a=Cn(e,t,n,o);return $i(),go(),a});return r?i.unshift(s):i.push(s),s}}const yr=n=>(e,t=gt)=>(!Pa||n==="sp")&&Lu(n,(...r)=>e(...r),t),Zx=yr("bm"),o_=yr("m"),eS=yr("bu"),tS=yr("u"),nS=yr("bum"),a_=yr("um"),rS=yr("sp"),iS=yr("rtg"),sS=yr("rtc");function oS(n,e=gt){Lu("ec",n,e)}const c_="components";function ss(n,e){return cS(c_,n,!0,e)||n}const aS=Symbol.for("v-ndc");function cS(n,e,t=!0,r=!1){const i=St||gt;if(i){const s=i.type;if(n===c_){const a=VS(s,!1);if(a&&(a===e||a===Jn(e)||a===Ru(Jn(e))))return s}const o=Rm(i[n]||s[n],e)||Rm(i.appContext[n],e);return!o&&r?s:o}}function Rm(n,e){return n&&(n[e]||n[Jn(e)]||n[Ru(Jn(e))])}function mn(n,e,t,r){let i;const s=t&&t[r];if(te(n)||lt(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Fe(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(n[l],l,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}function lS(n,e,t={},r,i){if(St.isCE||St.parent&&ia(St.parent)&&St.parent.isCE)return e!=="default"&&(t.name=e),ie("slot",t,r&&r());let s=n[e];s&&s._c&&(s._d=!1),se();const o=s&&l_(s(t)),a=yn(Me,{key:t.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&n._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function l_(n){return n.some(e=>jl(e)?!(e.type===Kr||e.type===Me&&!l_(e.children)):!0)?n:null}const Id=n=>n?__(n)?$u(n)||n.proxy:Id(n.parent):null,sa=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Id(n.parent),$root:n=>Id(n.root),$emit:n=>n.emit,$options:n=>Wf(n),$forceUpdate:n=>n.f||(n.f=()=>Gf(n.update)),$nextTick:n=>n.n||(n.n=Kf.bind(n.proxy)),$watch:n=>Qx.bind(n)}),Vh=(n,e)=>n!==Ue&&!n.__isScriptSetup&&Te(n,e),uS={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Vh(r,e))return o[e]=1,r[e];if(i!==Ue&&Te(i,e))return o[e]=2,i[e];if((l=n.propsOptions[0])&&Te(l,e))return o[e]=3,s[e];if(t!==Ue&&Te(t,e))return o[e]=4,t[e];Ed&&(o[e]=0)}}const u=sa[e];let h,d;if(u)return e==="$attrs"&&Jt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Ue&&Te(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,Te(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Vh(i,e)?(i[e]=t,!0):r!==Ue&&Te(r,e)?(r[e]=t,!0):Te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==Ue&&Te(n,o)||Vh(e,o)||(a=s[0])&&Te(a,o)||Te(r,o)||Te(sa,o)||Te(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Dm(n){return te(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ed=!0;function hS(n){const e=Wf(n),t=n.proxy,r=n.ctx;Ed=!1,e.beforeCreate&&Pm(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:v,deactivated:b,beforeDestroy:E,beforeUnmount:R,destroyed:S,unmounted:A,render:$,renderTracked:j,renderTriggered:X,errorCaptured:G,serverPrefetch:W,expose:le,inheritAttrs:Ee,components:Ve,directives:Le,filters:Mt}=e;if(l&&dS(l,r,null),o)for(const pe in o){const ve=o[pe];de(ve)&&(r[pe]=ve.bind(t))}if(i){const pe=i.call(t,t);Fe(pe)&&(n.data=mo(pe))}if(Ed=!0,s)for(const pe in s){const ve=s[pe],It=de(ve)?ve.bind(t,t):de(ve.get)?ve.get.bind(t,t):kn,en=!de(ve)&&de(ve.set)?ve.set.bind(t):kn,qt=an({get:It,set:en});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>qt.value,set:it=>qt.value=it})}if(a)for(const pe in a)u_(a[pe],r,t,pe);if(c){const pe=de(c)?c.call(t):c;Reflect.ownKeys(pe).forEach(ve=>{wl(ve,pe[ve])})}u&&Pm(u,n,"c");function ae(pe,ve){te(ve)?ve.forEach(It=>pe(It.bind(t))):ve&&pe(ve.bind(t))}if(ae(Zx,h),ae(o_,d),ae(eS,p),ae(tS,y),ae(Yx,v),ae(Xx,b),ae(oS,G),ae(sS,j),ae(iS,X),ae(nS,R),ae(a_,A),ae(rS,W),te(le))if(le.length){const pe=n.exposed||(n.exposed={});le.forEach(ve=>{Object.defineProperty(pe,ve,{get:()=>t[ve],set:It=>t[ve]=It})})}else n.exposed||(n.exposed={});$&&n.render===kn&&(n.render=$),Ee!=null&&(n.inheritAttrs=Ee),Ve&&(n.components=Ve),Le&&(n.directives=Le)}function dS(n,e,t=kn){te(n)&&(n=Td(n));for(const r in n){const i=n[r];let s;Fe(i)?"default"in i?s=pn(i.from||r,i.default,!0):s=pn(i.from||r):s=pn(i),et(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Pm(n,e,t){Cn(te(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function u_(n,e,t,r){const i=r.includes(".")?n_(t,r):()=>t[r];if(lt(n)){const s=e[n];de(s)&&ra(i,s)}else if(de(n))ra(i,n.bind(t));else if(Fe(n))if(te(n))n.forEach(s=>u_(s,e,t,r));else{const s=de(n.handler)?n.handler.bind(t):e[n.handler];de(s)&&ra(i,s,n)}}function Wf(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!t&&!r?c=e:(c={},i.length&&i.forEach(l=>Bl(c,l,o,!0)),Bl(c,e,o)),Fe(e)&&s.set(e,c),c}function Bl(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Bl(n,s,t,!0),i&&i.forEach(o=>Bl(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=fS[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const fS={data:Nm,props:Om,emits:Om,methods:Qo,computed:Qo,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Qo,directives:Qo,watch:gS,provide:Nm,inject:pS};function Nm(n,e){return e?n?function(){return yt(de(n)?n.call(this,this):n,de(e)?e.call(this,this):e)}:e:n}function pS(n,e){return Qo(Td(n),Td(e))}function Td(n){if(te(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Qo(n,e){return n?yt(Object.create(null),n,e):e}function Om(n,e){return n?te(n)&&te(e)?[...new Set([...n,...e])]:yt(Object.create(null),Dm(n),Dm(e??{})):e}function gS(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const r in e)t[r]=Ft(n[r],e[r]);return t}function h_(){return{app:null,config:{isNativeTag:UT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mS=0;function yS(n,e){return function(r,i=null){de(r)||(r=yt({},r)),i!=null&&!Fe(i)&&(i=null);const s=h_(),o=new Set;let a=!1;const c=s.app={_uid:mS++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:qS,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&de(l.install)?(o.add(l),l.install(c,...u)):de(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const d=ie(r,i);return d.appContext=s,u&&e?e(d,l):n(d,l,h),a=!0,c._container=l,l.__vue_app__=c,$u(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Ra=c;try{return l()}finally{Ra=null}}};return c}}let Ra=null;function wl(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function pn(n,e,t=!1){const r=gt||St;if(r||Ra){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ra._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&de(e)?e.call(r&&r.proxy):e}}function vS(){return!!(gt||St||Ra)}function wS(n,e,t,r=!1){const i={},s={};Ml(s,Fu,1),n.propsDefaults=Object.create(null),d_(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:kx(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function _S(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=Se(i),[c]=n.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ou(n.emitsOptions,d))continue;const p=e[d];if(c)if(Te(s,d))p!==s[d]&&(s[d]=p,l=!0);else{const y=Jn(d);i[y]=xd(c,a,y,p,n,!1)}else p!==s[d]&&(s[d]=p,l=!0)}}}else{d_(n,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!Te(e,h)&&((u=fo(h))===h||!Te(e,u)))&&(c?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=xd(c,a,h,void 0,n,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Te(e,h))&&(delete s[h],l=!0)}l&&dr(n,"set","$attrs")}function d_(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(yl(c))continue;const l=e[c];let u;i&&Te(i,u=Jn(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:Ou(n.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=Se(t),l=a||Ue;for(let u=0;u<s.length;u++){const h=s[u];t[h]=xd(i,c,h,l[h],n,!Te(l,h))}}return o}function xd(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=Te(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:l}=i;t in l?r=l[t]:(Bs(i),r=l[t]=c.call(null,e),$i())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===fo(t))&&(r=!0))}return r}function f_(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let c=!1;if(!de(n)){const u=h=>{c=!0;const[d,p]=f_(h,e,!0);yt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return Fe(n)&&r.set(n,ks),ks;if(te(s))for(let u=0;u<s.length;u++){const h=Jn(s[u]);Lm(h)&&(o[h]=Ue)}else if(s)for(const u in s){const h=Jn(u);if(Lm(h)){const d=s[u],p=o[h]=te(d)||de(d)?{type:d}:yt({},d);if(p){const y=$m(Boolean,p.type),v=$m(String,p.type);p[0]=y>-1,p[1]=v<0||y<v,(y>-1||Te(p,"default"))&&a.push(h)}}}const l=[o,a];return Fe(n)&&r.set(n,l),l}function Lm(n){return n[0]!=="$"}function Mm(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Fm(n,e){return Mm(n)===Mm(e)}function $m(n,e){return te(e)?e.findIndex(t=>Fm(t,n)):de(e)&&Fm(e,n)?0:-1}const p_=n=>n[0]==="_"||n==="$stable",Qf=n=>te(n)?n.map(Mn):[Mn(n)],bS=(n,e,t)=>{if(e._n)return e;const r=Pe((...i)=>Qf(e(...i)),t);return r._c=!1,r},g_=(n,e,t)=>{const r=n._ctx;for(const i in n){if(p_(i))continue;const s=n[i];if(de(s))e[i]=bS(i,s,r);else if(s!=null){const o=Qf(s);e[i]=()=>o}}},m_=(n,e)=>{const t=Qf(e);n.slots.default=()=>t},IS=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Se(e),Ml(e,"_",t)):g_(e,n.slots={})}else n.slots={},e&&m_(n,e);Ml(n.slots,Fu,1)},ES=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(yt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,g_(e,i)),o=e}else e&&(m_(n,e),o={default:1});if(s)for(const a in i)!p_(a)&&!(a in o)&&delete i[a]};function Sd(n,e,t,r,i=!1){if(te(n)){n.forEach((d,p)=>Sd(d,e&&(te(e)?e[p]:e),t,r,i));return}if(ia(r)&&!i)return;const s=r.shapeFlag&4?$u(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===Ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(lt(l)?(u[l]=null,Te(h,l)&&(h[l]=null)):et(l)&&(l.value=null)),de(c))qr(c,a,12,[o,u]);else{const d=lt(c),p=et(c);if(d||p){const y=()=>{if(n.f){const v=d?Te(h,c)?h[c]:u[c]:c.value;i?te(v)&&Of(v,s):te(v)?v.includes(s)||v.push(s):d?(u[c]=[s],Te(h,c)&&(h[c]=u[c])):(c.value=[s],n.k&&(u[n.k]=c.value))}else d?(u[c]=o,Te(h,c)&&(h[c]=o)):p&&(c.value=o,n.k&&(u[n.k]=o))};o?(y.id=-1,zt(y,t)):y()}}}const zt=Wx;function TS(n){return xS(n)}function xS(n,e){const t=yd();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=kn,insertStaticContent:y}=n,v=(g,m,w,T=null,k=null,D=null,z=!1,L=null,M=!!m.dynamicChildren)=>{if(g===m)return;g&&!No(g,m)&&(T=x(g),it(g,k,D,!0),g=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:N,ref:ee,shapeFlag:K}=m;switch(N){case Mu:b(g,m,w,T);break;case Kr:E(g,m,w,T);break;case _l:g==null&&R(m,w,T,z);break;case Me:Ve(g,m,w,T,k,D,z,L,M);break;default:K&1?$(g,m,w,T,k,D,z,L,M):K&6?Le(g,m,w,T,k,D,z,L,M):(K&64||K&128)&&N.process(g,m,w,T,k,D,z,L,M,F)}ee!=null&&k&&Sd(ee,g&&g.ref,D,m||g,!m)},b=(g,m,w,T)=>{if(g==null)r(m.el=a(m.children),w,T);else{const k=m.el=g.el;m.children!==g.children&&l(k,m.children)}},E=(g,m,w,T)=>{g==null?r(m.el=c(m.children||""),w,T):m.el=g.el},R=(g,m,w,T)=>{[g.el,g.anchor]=y(g.children,m,w,T,g.el,g.anchor)},S=({el:g,anchor:m},w,T)=>{let k;for(;g&&g!==m;)k=d(g),r(g,w,T),g=k;r(m,w,T)},A=({el:g,anchor:m})=>{let w;for(;g&&g!==m;)w=d(g),i(g),g=w;i(m)},$=(g,m,w,T,k,D,z,L,M)=>{z=z||m.type==="svg",g==null?j(m,w,T,k,D,z,L,M):W(g,m,k,D,z,L,M)},j=(g,m,w,T,k,D,z,L)=>{let M,N;const{type:ee,props:K,shapeFlag:Z,transition:oe,dirs:ge}=g;if(M=g.el=o(g.type,D,K&&K.is,K),Z&8?u(M,g.children):Z&16&&G(g.children,M,null,T,k,D&&ee!=="foreignObject",z,L),ge&&gi(g,null,T,"created"),X(M,g,g.scopeId,z,T),K){for(const ke in K)ke!=="value"&&!yl(ke)&&s(M,ke,null,K[ke],D,g.children,T,k,We);"value"in K&&s(M,"value",null,K.value),(N=K.onVnodeBeforeMount)&&Ln(N,T,g)}ge&&gi(g,null,T,"beforeMount");const Ce=(!k||k&&!k.pendingBranch)&&oe&&!oe.persisted;Ce&&oe.beforeEnter(M),r(M,m,w),((N=K&&K.onVnodeMounted)||Ce||ge)&&zt(()=>{N&&Ln(N,T,g),Ce&&oe.enter(M),ge&&gi(g,null,T,"mounted")},k)},X=(g,m,w,T,k)=>{if(w&&p(g,w),T)for(let D=0;D<T.length;D++)p(g,T[D]);if(k){let D=k.subTree;if(m===D){const z=k.vnode;X(g,z,z.scopeId,z.slotScopeIds,k.parent)}}},G=(g,m,w,T,k,D,z,L,M=0)=>{for(let N=M;N<g.length;N++){const ee=g[N]=L?Rr(g[N]):Mn(g[N]);v(null,ee,m,w,T,k,D,z,L)}},W=(g,m,w,T,k,D,z)=>{const L=m.el=g.el;let{patchFlag:M,dynamicChildren:N,dirs:ee}=m;M|=g.patchFlag&16;const K=g.props||Ue,Z=m.props||Ue;let oe;w&&mi(w,!1),(oe=Z.onVnodeBeforeUpdate)&&Ln(oe,w,m,g),ee&&gi(m,g,w,"beforeUpdate"),w&&mi(w,!0);const ge=k&&m.type!=="foreignObject";if(N?le(g.dynamicChildren,N,L,w,T,ge,D):z||ve(g,m,L,null,w,T,ge,D,!1),M>0){if(M&16)Ee(L,m,K,Z,w,T,k);else if(M&2&&K.class!==Z.class&&s(L,"class",null,Z.class,k),M&4&&s(L,"style",K.style,Z.style,k),M&8){const Ce=m.dynamicProps;for(let ke=0;ke<Ce.length;ke++){const st=Ce[ke],En=K[st],ps=Z[st];(ps!==En||st==="value")&&s(L,st,En,ps,k,g.children,w,T,We)}}M&1&&g.children!==m.children&&u(L,m.children)}else!z&&N==null&&Ee(L,m,K,Z,w,T,k);((oe=Z.onVnodeUpdated)||ee)&&zt(()=>{oe&&Ln(oe,w,m,g),ee&&gi(m,g,w,"updated")},T)},le=(g,m,w,T,k,D,z)=>{for(let L=0;L<m.length;L++){const M=g[L],N=m[L],ee=M.el&&(M.type===Me||!No(M,N)||M.shapeFlag&70)?h(M.el):w;v(M,N,ee,null,T,k,D,z,!0)}},Ee=(g,m,w,T,k,D,z)=>{if(w!==T){if(w!==Ue)for(const L in w)!yl(L)&&!(L in T)&&s(g,L,w[L],null,z,m.children,k,D,We);for(const L in T){if(yl(L))continue;const M=T[L],N=w[L];M!==N&&L!=="value"&&s(g,L,N,M,z,m.children,k,D,We)}"value"in T&&s(g,"value",w.value,T.value)}},Ve=(g,m,w,T,k,D,z,L,M)=>{const N=m.el=g?g.el:a(""),ee=m.anchor=g?g.anchor:a("");let{patchFlag:K,dynamicChildren:Z,slotScopeIds:oe}=m;oe&&(L=L?L.concat(oe):oe),g==null?(r(N,w,T),r(ee,w,T),G(m.children,w,ee,k,D,z,L,M)):K>0&&K&64&&Z&&g.dynamicChildren?(le(g.dynamicChildren,Z,w,k,D,z,L),(m.key!=null||k&&m===k.subTree)&&y_(g,m,!0)):ve(g,m,w,ee,k,D,z,L,M)},Le=(g,m,w,T,k,D,z,L,M)=>{m.slotScopeIds=L,g==null?m.shapeFlag&512?k.ctx.activate(m,w,T,z,M):Mt(m,w,T,k,D,z,M):rt(g,m,M)},Mt=(g,m,w,T,k,D,z)=>{const L=g.component=OS(g,T,k);if(i_(g)&&(L.ctx.renderer=F),LS(L),L.asyncDep){if(k&&k.registerDep(L,ae),!g.el){const M=L.subTree=ie(Kr);E(null,M,m,w)}return}ae(L,g,m,w,k,D,z)},rt=(g,m,w)=>{const T=m.component=g.component;if(Hx(g,m,w))if(T.asyncDep&&!T.asyncResolved){pe(T,m,w);return}else T.next=m,Vx(T.update),T.update();else m.el=g.el,T.vnode=m},ae=(g,m,w,T,k,D,z)=>{const L=()=>{if(g.isMounted){let{next:ee,bu:K,u:Z,parent:oe,vnode:ge}=g,Ce=ee,ke;mi(g,!1),ee?(ee.el=ge.el,pe(g,ee,z)):ee=ge,K&&vl(K),(ke=ee.props&&ee.props.onVnodeBeforeUpdate)&&Ln(ke,oe,ee,ge),mi(g,!0);const st=$h(g),En=g.subTree;g.subTree=st,v(En,st,h(En.el),x(En),g,k,D),ee.el=st.el,Ce===null&&Kx(g,st.el),Z&&zt(Z,k),(ke=ee.props&&ee.props.onVnodeUpdated)&&zt(()=>Ln(ke,oe,ee,ge),k)}else{let ee;const{el:K,props:Z}=m,{bm:oe,m:ge,parent:Ce}=g,ke=ia(m);if(mi(g,!1),oe&&vl(oe),!ke&&(ee=Z&&Z.onVnodeBeforeMount)&&Ln(ee,Ce,m),mi(g,!0),K&&we){const st=()=>{g.subTree=$h(g),we(K,g.subTree,g,k,null)};ke?m.type.__asyncLoader().then(()=>!g.isUnmounted&&st()):st()}else{const st=g.subTree=$h(g);v(null,st,w,T,g,k,D),m.el=st.el}if(ge&&zt(ge,k),!ke&&(ee=Z&&Z.onVnodeMounted)){const st=m;zt(()=>Ln(ee,Ce,st),k)}(m.shapeFlag&256||Ce&&ia(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&g.a&&zt(g.a,k),g.isMounted=!0,m=w=T=null}},M=g.effect=new Vf(L,()=>Gf(N),g.scope),N=g.update=()=>M.run();N.id=g.uid,mi(g,!0),N()},pe=(g,m,w)=>{m.component=g;const T=g.vnode.props;g.vnode=m,g.next=null,_S(g,m.props,T,w),ES(g,m.children,w),po(),km(),go()},ve=(g,m,w,T,k,D,z,L,M=!1)=>{const N=g&&g.children,ee=g?g.shapeFlag:0,K=m.children,{patchFlag:Z,shapeFlag:oe}=m;if(Z>0){if(Z&128){en(N,K,w,T,k,D,z,L,M);return}else if(Z&256){It(N,K,w,T,k,D,z,L,M);return}}oe&8?(ee&16&&We(N,k,D),K!==N&&u(w,K)):ee&16?oe&16?en(N,K,w,T,k,D,z,L,M):We(N,k,D,!0):(ee&8&&u(w,""),oe&16&&G(K,w,T,k,D,z,L,M))},It=(g,m,w,T,k,D,z,L,M)=>{g=g||ks,m=m||ks;const N=g.length,ee=m.length,K=Math.min(N,ee);let Z;for(Z=0;Z<K;Z++){const oe=m[Z]=M?Rr(m[Z]):Mn(m[Z]);v(g[Z],oe,w,null,k,D,z,L,M)}N>ee?We(g,k,D,!0,!1,K):G(m,w,T,k,D,z,L,M,K)},en=(g,m,w,T,k,D,z,L,M)=>{let N=0;const ee=m.length;let K=g.length-1,Z=ee-1;for(;N<=K&&N<=Z;){const oe=g[N],ge=m[N]=M?Rr(m[N]):Mn(m[N]);if(No(oe,ge))v(oe,ge,w,null,k,D,z,L,M);else break;N++}for(;N<=K&&N<=Z;){const oe=g[K],ge=m[Z]=M?Rr(m[Z]):Mn(m[Z]);if(No(oe,ge))v(oe,ge,w,null,k,D,z,L,M);else break;K--,Z--}if(N>K){if(N<=Z){const oe=Z+1,ge=oe<ee?m[oe].el:T;for(;N<=Z;)v(null,m[N]=M?Rr(m[N]):Mn(m[N]),w,ge,k,D,z,L,M),N++}}else if(N>Z)for(;N<=K;)it(g[N],k,D,!0),N++;else{const oe=N,ge=N,Ce=new Map;for(N=ge;N<=Z;N++){const rn=m[N]=M?Rr(m[N]):Mn(m[N]);rn.key!=null&&Ce.set(rn.key,N)}let ke,st=0;const En=Z-ge+1;let ps=!1,mm=0;const Po=new Array(En);for(N=0;N<En;N++)Po[N]=0;for(N=oe;N<=K;N++){const rn=g[N];if(st>=En){it(rn,k,D,!0);continue}let On;if(rn.key!=null)On=Ce.get(rn.key);else for(ke=ge;ke<=Z;ke++)if(Po[ke-ge]===0&&No(rn,m[ke])){On=ke;break}On===void 0?it(rn,k,D,!0):(Po[On-ge]=N+1,On>=mm?mm=On:ps=!0,v(rn,m[On],w,null,k,D,z,L,M),st++)}const ym=ps?SS(Po):ks;for(ke=ym.length-1,N=En-1;N>=0;N--){const rn=ge+N,On=m[rn],vm=rn+1<ee?m[rn+1].el:T;Po[N]===0?v(null,On,w,vm,k,D,z,L,M):ps&&(ke<0||N!==ym[ke]?qt(On,w,vm,2):ke--)}}},qt=(g,m,w,T,k=null)=>{const{el:D,type:z,transition:L,children:M,shapeFlag:N}=g;if(N&6){qt(g.component.subTree,m,w,T);return}if(N&128){g.suspense.move(m,w,T);return}if(N&64){z.move(g,m,w,F);return}if(z===Me){r(D,m,w);for(let K=0;K<M.length;K++)qt(M[K],m,w,T);r(g.anchor,m,w);return}if(z===_l){S(g,m,w);return}if(T!==2&&N&1&&L)if(T===0)L.beforeEnter(D),r(D,m,w),zt(()=>L.enter(D),k);else{const{leave:K,delayLeave:Z,afterLeave:oe}=L,ge=()=>r(D,m,w),Ce=()=>{K(D,()=>{ge(),oe&&oe()})};Z?Z(D,ge,Ce):Ce()}else r(D,m,w)},it=(g,m,w,T=!1,k=!1)=>{const{type:D,props:z,ref:L,children:M,dynamicChildren:N,shapeFlag:ee,patchFlag:K,dirs:Z}=g;if(L!=null&&Sd(L,null,w,g,!0),ee&256){m.ctx.deactivate(g);return}const oe=ee&1&&Z,ge=!ia(g);let Ce;if(ge&&(Ce=z&&z.onVnodeBeforeUnmount)&&Ln(Ce,m,g),ee&6)nn(g.component,w,T);else{if(ee&128){g.suspense.unmount(w,T);return}oe&&gi(g,null,m,"beforeUnmount"),ee&64?g.type.remove(g,m,w,k,F,T):N&&(D!==Me||K>0&&K&64)?We(N,m,w,!1,!0):(D===Me&&K&384||!k&&ee&16)&&We(M,m,w),T&&In(g)}(ge&&(Ce=z&&z.onVnodeUnmounted)||oe)&&zt(()=>{Ce&&Ln(Ce,m,g),oe&&gi(g,null,m,"unmounted")},w)},In=g=>{const{type:m,el:w,anchor:T,transition:k}=g;if(m===Me){tn(w,T);return}if(m===_l){A(g);return}const D=()=>{i(w),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(g.shapeFlag&1&&k&&!k.persisted){const{leave:z,delayLeave:L}=k,M=()=>z(w,D);L?L(g.el,D,M):M()}else D()},tn=(g,m)=>{let w;for(;g!==m;)w=d(g),i(g),g=w;i(m)},nn=(g,m,w)=>{const{bum:T,scope:k,update:D,subTree:z,um:L}=g;T&&vl(T),k.stop(),D&&(D.active=!1,it(z,g,m,w)),L&&zt(L,m),zt(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},We=(g,m,w,T=!1,k=!1,D=0)=>{for(let z=D;z<g.length;z++)it(g[z],m,w,T,k)},x=g=>g.shapeFlag&6?x(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),q=(g,m,w)=>{g==null?m._vnode&&it(m._vnode,null,null,!0):v(m._vnode||null,g,m,null,null,null,w),km(),Xw(),m._vnode=g},F={p:v,um:it,m:qt,r:In,mt:Mt,mc:G,pc:ve,pbc:le,n:x,o:n};let J,we;return e&&([J,we]=e(F)),{render:q,hydrate:J,createApp:yS(q,J)}}function mi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function y_(n,e,t=!1){const r=n.children,i=e.children;if(te(r)&&te(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Rr(i[s]),a.el=o.el),t||y_(o,a)),a.type===Mu&&(a.el=o.el)}}function SS(n){const e=n.slice(),t=[0];let r,i,s,o,a;const c=n.length;for(r=0;r<c;r++){const l=n[r];if(l!==0){if(i=t[t.length-1],n[i]<l){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const AS=n=>n.__isTeleport,Me=Symbol.for("v-fgt"),Mu=Symbol.for("v-txt"),Kr=Symbol.for("v-cmt"),_l=Symbol.for("v-stc"),oa=[];let Sn=null;function se(n=!1){oa.push(Sn=n?null:[])}function kS(){oa.pop(),Sn=oa[oa.length-1]||null}let Da=1;function Vm(n){Da+=n}function v_(n){return n.dynamicChildren=Da>0?Sn||ks:null,kS(),Da>0&&Sn&&Sn.push(n),n}function me(n,e,t,r,i,s){return v_(f(n,e,t,r,i,s,!0))}function yn(n,e,t,r,i){return v_(ie(n,e,t,r,i,!0))}function jl(n){return n?n.__v_isVNode===!0:!1}function No(n,e){return n.type===e.type&&n.key===e.key}const Fu="__vInternal",w_=({key:n})=>n??null,bl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?lt(n)||et(n)||de(n)?{i:St,r:n,k:e,f:!!t}:n:null);function f(n,e=null,t=null,r=0,i=null,s=n===Me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&w_(e),ref:e&&bl(e),scopeId:e_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:St};return a?(Yf(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=lt(t)?8:16),Da>0&&!o&&Sn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Sn.push(c),c}const ie=CS;function CS(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===aS)&&(n=Kr),jl(n)){const a=Us(n,e,!0);return t&&Yf(a,t),Da>0&&!s&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(n)]=a:Sn.push(a)),a.patchFlag|=-2,a}if(US(n)&&(n=n.__vccOpts),e){e=RS(e);let{class:a,style:c}=e;a&&!lt(a)&&(e.class=Ur(a)),Fe(c)&&(zw(c)&&!te(c)&&(c=yt({},c)),e.style=Mf(c))}const o=lt(n)?1:Gx(n)?128:AS(n)?64:Fe(n)?4:de(n)?2:0;return f(n,e,t,r,i,o,s,!0)}function RS(n){return n?zw(n)||Fu in n?yt({},n):n:null}function Us(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?DS(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&w_(a),ref:e&&e.ref?t&&i?te(i)?i.concat(bl(e)):[i,bl(e)]:bl(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Me?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Us(n.ssContent),ssFallback:n.ssFallback&&Us(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function fe(n=" ",e=0){return ie(Mu,null,n,e)}function pc(n,e){const t=ie(_l,null,n);return t.staticCount=e,t}function aa(n="",e=!1){return e?(se(),yn(Kr,null,n)):ie(Kr,null,n)}function Mn(n){return n==null||typeof n=="boolean"?ie(Kr):te(n)?ie(Me,null,n.slice()):typeof n=="object"?Rr(n):ie(Mu,null,String(n))}function Rr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Us(n)}function Yf(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(te(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Yf(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Fu in e)?e._ctx=St:i===3&&St&&(St.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:St},t=32):(e=String(e),r&64?(t=16,e=[fe(e)]):t=8);n.children=e,n.shapeFlag|=t}function DS(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ur([e.class,r.class]));else if(i==="style")e.style=Mf([e.style,r.style]);else if(ku(i)){const s=e[i],o=r[i];o&&s!==o&&!(te(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ln(n,e,t,r=null){Cn(n,e,7,[t,r])}const PS=h_();let NS=0;function OS(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||PS,s={uid:NS++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:f_(r,i),emitsOptions:Zw(r,i),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jx.bind(null,s),n.ce&&n.ce(s),s}let gt=null,Xf,gs,Um="__VUE_INSTANCE_SETTERS__";(gs=yd()[Um])||(gs=yd()[Um]=[]),gs.push(n=>gt=n),Xf=n=>{gs.length>1?gs.forEach(e=>e(n)):gs[0](n)};const Bs=n=>{Xf(n),n.scope.on()},$i=()=>{gt&&gt.scope.off(),Xf(null)};function __(n){return n.vnode.shapeFlag&4}let Pa=!1;function LS(n,e=!1){Pa=e;const{props:t,children:r}=n.vnode,i=__(n);wS(n,t,i,e),IS(n,r);const s=i?MS(n,e):void 0;return Pa=!1,s}function MS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Pu(new Proxy(n.ctx,uS));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?$S(n):null;Bs(n),po();const s=qr(r,n,0,[n.props,i]);if(go(),$i(),xw(s)){if(s.then($i,$i),e)return s.then(o=>{Bm(n,o,e)}).catch(o=>{Nu(o,n,0)});n.asyncDep=s}else Bm(n,s,e)}else b_(n,e)}function Bm(n,e,t){de(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Fe(e)&&(n.setupState=Ww(e)),b_(n,t)}let jm;function b_(n,e,t){const r=n.type;if(!n.render){if(!e&&jm&&!r.render){const i=r.template||Wf(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,l=yt(yt({isCustomElement:s,delimiters:a},o),c);r.render=jm(i,l)}}n.render=r.render||kn}Bs(n),po(),hS(n),go(),$i()}function FS(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Jt(n,"get","$attrs"),e[t]}}))}function $S(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return FS(n)},slots:n.slots,emit:n.emit,expose:e}}function $u(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ww(Pu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in sa)return sa[t](n)},has(e,t){return t in e||t in sa}}))}function VS(n,e=!0){return de(n)?n.displayName||n.name:n.name||e&&n.__name}function US(n){return de(n)&&"__vccOpts"in n}const an=(n,e)=>Mx(n,e,Pa);function I_(n,e,t){const r=arguments.length;return r===2?Fe(e)&&!te(e)?jl(e)?ie(n,null,[e]):ie(n,e):ie(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&jl(t)&&(t=[t]),ie(n,e,t))}const BS=Symbol.for("v-scx"),jS=()=>pn(BS),qS="3.3.4",zS="http://www.w3.org/2000/svg",bi=typeof document<"u"?document:null,qm=bi&&bi.createElement("template"),HS={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?bi.createElementNS(zS,n):bi.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{qm.innerHTML=r?`<svg>${n}</svg>`:n;const a=qm.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function KS(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function GS(n,e,t){const r=n.style,i=lt(t);if(t&&!i){if(e&&!lt(e))for(const s in e)t[s]==null&&Ad(r,s,"");for(const s in t)Ad(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const zm=/\s*!important$/;function Ad(n,e,t){if(te(t))t.forEach(r=>Ad(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=WS(n,e);zm.test(t)?n.setProperty(fo(r),t.replace(zm,""),"important"):n[r]=t}}const Hm=["Webkit","Moz","ms"],Uh={};function WS(n,e){const t=Uh[e];if(t)return t;let r=Jn(e);if(r!=="filter"&&r in n)return Uh[e]=r;r=Ru(r);for(let i=0;i<Hm.length;i++){const s=Hm[i]+r;if(s in n)return Uh[e]=s}return e}const Km="http://www.w3.org/1999/xlink";function QS(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Km,e.slice(6,e.length)):n.setAttributeNS(Km,e,t);else{const s=XT(e);t==null||s&&!kw(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function YS(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const l=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";l!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=kw(t):t==null&&l==="string"?(t="",c=!0):l==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function Lr(n,e,t,r){n.addEventListener(e,t,r)}function XS(n,e,t,r){n.removeEventListener(e,t,r)}function JS(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=ZS(e);if(r){const l=s[e]=nA(r,i);Lr(n,a,l,c)}else o&&(XS(n,a,o,c),s[e]=void 0)}}const Gm=/(?:Once|Passive|Capture)$/;function ZS(n){let e;if(Gm.test(n)){e={};let r;for(;r=n.match(Gm);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fo(n.slice(2)),e]}let Bh=0;const eA=Promise.resolve(),tA=()=>Bh||(eA.then(()=>Bh=0),Bh=Date.now());function nA(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Cn(rA(r,t.value),e,5,[r])};return t.value=n,t.attached=tA(),t}function rA(n,e){if(te(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Wm=/^on[a-z]/,iA=(n,e,t,r,i=!1,s,o,a,c)=>{e==="class"?KS(n,r,i):e==="style"?GS(n,t,r):ku(e)?Nf(e)||JS(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sA(n,e,r,i))?YS(n,e,r,s,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),QS(n,e,r,i))};function sA(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Wm.test(e)&&de(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Wm.test(e)&&lt(t)?!1:e in n}const js=n=>{const e=n.props["onUpdate:modelValue"]||!1;return te(e)?t=>vl(e,t):e};function oA(n){n.target.composing=!0}function Qm(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tn={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=js(i);const s=r||i.props&&i.props.type==="number";Lr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=Fl(a)),n._assign(a)}),t&&Lr(n,"change",()=>{n.value=n.value.trim()}),e||(Lr(n,"compositionstart",oA),Lr(n,"compositionend",Qm),Lr(n,"change",Qm))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=js(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&Fl(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},aA={deep:!0,created(n,e,t){n._assign=js(t),Lr(n,"change",()=>{const r=n._modelValue,i=Na(n),s=n.checked,o=n._assign;if(te(r)){const a=Ff(r,i),c=a!==-1;if(s&&!c)o(r.concat(i));else if(!s&&c){const l=[...r];l.splice(a,1),o(l)}}else if(ho(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(E_(n,s))})},mounted:Ym,beforeUpdate(n,e,t){n._assign=js(t),Ym(n,e,t)}};function Ym(n,{value:e,oldValue:t},r){n._modelValue=e,te(e)?n.checked=Ff(e,r.props.value)>-1:ho(e)?n.checked=e.has(r.props.value):e!==t&&(n.checked=fc(e,E_(n,!0)))}const cA={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const i=ho(e);Lr(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Fl(Na(o)):Na(o));n._assign(n.multiple?i?new Set(s):s:s[0])}),n._assign=js(r)},mounted(n,{value:e}){Xm(n,e)},beforeUpdate(n,e,t){n._assign=js(t)},updated(n,{value:e}){Xm(n,e)}};function Xm(n,e){const t=n.multiple;if(!(t&&!te(e)&&!ho(e))){for(let r=0,i=n.options.length;r<i;r++){const s=n.options[r],o=Na(s);if(t)te(e)?s.selected=Ff(e,o)>-1:s.selected=e.has(o);else if(fc(Na(s),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Na(n){return"_value"in n?n._value:n.value}function E_(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const lA=["ctrl","shift","alt","meta"],uA={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>lA.some(t=>n[`${t}Key`]&&!e.includes(t))},qs=(n,e)=>(t,...r)=>{for(let i=0;i<e.length;i++){const s=uA[e[i]];if(s&&s(t,e))return}return n(t,...r)},ca={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Oo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Oo(n,!0),r.enter(n)):r.leave(n,()=>{Oo(n,!1)}):Oo(n,e))},beforeUnmount(n,{value:e}){Oo(n,e)}};function Oo(n,e){n.style.display=e?n._vod:"none"}const hA=yt({patchProp:iA},HS);let Jm;function dA(){return Jm||(Jm=TS(hA))}const fA=(...n)=>{const e=dA().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=pA(r);if(!i)return;const s=e._component;!de(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function pA(n){return lt(n)?document.querySelector(n):n}var gA=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let T_;const Vu=n=>T_=n,x_=Symbol();function kd(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var la;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(la||(la={}));function mA(){const n=Dw(!0),e=n.run(()=>xe({}));let t=[],r=[];const i=Pu({install(s){Vu(i),i._a=s,s.provide(x_,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!gA?r.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const S_=()=>{};function Zm(n,e,t,r=S_){n.push(e);const i=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),r())};return!t&&Pw()&&ex(i),i}function ms(n,...e){n.slice().forEach(t=>{t(...e)})}const yA=n=>n();function Cd(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,r)=>n.set(r,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],i=n[t];kd(i)&&kd(r)&&n.hasOwnProperty(t)&&!et(r)&&!jr(r)?n[t]=Cd(i,r):n[t]=r}return n}const vA=Symbol();function wA(n){return!kd(n)||!n.hasOwnProperty(vA)}const{assign:Cr}=Object;function _A(n){return!!(et(n)&&n.effect)}function bA(n,e,t,r){const{state:i,actions:s,getters:o}=e,a=t.state.value[n];let c;function l(){a||(t.state.value[n]=i?i():{});const u=Px(t.state.value[n]);return Cr(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=Pu(an(()=>{Vu(t);const p=t._s.get(n);return o[d].call(p,p)})),h),{}))}return c=A_(n,l,e,t,r,!0),c}function A_(n,e,t={},r,i,s){let o;const a=Cr({actions:{}},t),c={deep:!0};let l,u,h=[],d=[],p;const y=r.state.value[n];!s&&!y&&(r.state.value[n]={}),xe({});let v;function b(G){let W;l=u=!1,typeof G=="function"?(G(r.state.value[n]),W={type:la.patchFunction,storeId:n,events:p}):(Cd(r.state.value[n],G),W={type:la.patchObject,payload:G,storeId:n,events:p});const le=v=Symbol();Kf().then(()=>{v===le&&(l=!0)}),u=!0,ms(h,W,r.state.value[n])}const E=s?function(){const{state:W}=t,le=W?W():{};this.$patch(Ee=>{Cr(Ee,le)})}:S_;function R(){o.stop(),h=[],d=[],r._s.delete(n)}function S(G,W){return function(){Vu(r);const le=Array.from(arguments),Ee=[],Ve=[];function Le(ae){Ee.push(ae)}function Mt(ae){Ve.push(ae)}ms(d,{args:le,name:G,store:$,after:Le,onError:Mt});let rt;try{rt=W.apply(this&&this.$id===n?this:$,le)}catch(ae){throw ms(Ve,ae),ae}return rt instanceof Promise?rt.then(ae=>(ms(Ee,ae),ae)).catch(ae=>(ms(Ve,ae),Promise.reject(ae))):(ms(Ee,rt),rt)}}const A={_p:r,$id:n,$onAction:Zm.bind(null,d),$patch:b,$reset:E,$subscribe(G,W={}){const le=Zm(h,G,W.detached,()=>Ee()),Ee=o.run(()=>ra(()=>r.state.value[n],Ve=>{(W.flush==="sync"?u:l)&&G({storeId:n,type:la.direct,events:p},Ve)},Cr({},c,W)));return le},$dispose:R},$=mo(A);r._s.set(n,$);const j=r._a&&r._a.runWithContext||yA,X=r._e.run(()=>(o=Dw(),j(()=>o.run(e))));for(const G in X){const W=X[G];if(et(W)&&!_A(W)||jr(W))s||(y&&wA(W)&&(et(W)?W.value=y[G]:Cd(W,y[G])),r.state.value[n][G]=W);else if(typeof W=="function"){const le=S(G,W);X[G]=le,a.actions[G]=W}}return Cr($,X),Cr(Se($),X),Object.defineProperty($,"$state",{get:()=>r.state.value[n],set:G=>{b(W=>{Cr(W,G)})}}),r._p.forEach(G=>{Cr($,o.run(()=>G({store:$,app:r._a,pinia:r,options:a})))}),y&&s&&t.hydrate&&t.hydrate($.$state,y),l=!0,u=!0,$}function IA(n,e,t){let r,i;const s=typeof e=="function";typeof n=="string"?(r=n,i=s?t:e):(i=n,r=n.id);function o(a,c){const l=vS();return a=a||(l?pn(x_,null):null),a&&Vu(a),a=T_,a._s.has(r)||(s?A_(r,e,i,a):bA(r,i,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof window<"u";function EA(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Re=Object.assign;function jh(n,e){const t={};for(const r in e){const i=e[r];t[r]=Rn(i)?i.map(n):n(i)}return t}const ua=()=>{},Rn=Array.isArray,TA=/\/$/,xA=n=>n.replace(TA,"");function qh(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=CA(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function SA(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ey(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function AA(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&zs(e.matched[r],t.matched[i])&&k_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function zs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function k_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!kA(n[t],e[t]))return!1;return!0}function kA(n,e){return Rn(n)?ty(n,e):Rn(e)?ty(e,n):n===e}function ty(n,e){return Rn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function CA(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Oa;(function(n){n.pop="pop",n.push="push"})(Oa||(Oa={}));var ha;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ha||(ha={}));function RA(n){if(!n)if(bs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),xA(n)}const DA=/^[^#]+#/;function PA(n,e){return n.replace(DA,"#")+e}function NA(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Uu=()=>({left:window.pageXOffset,top:window.pageYOffset});function OA(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=NA(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ny(n,e){return(history.state?history.state.position-e:-1)+n}const Rd=new Map;function LA(n,e){Rd.set(n,e)}function MA(n){const e=Rd.get(n);return Rd.delete(n),e}let FA=()=>location.protocol+"//"+location.host;function C_(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ey(c,"")}return ey(t,n)+r+i}function $A(n,e,t,r){let i=[],s=[],o=null;const a=({state:d})=>{const p=C_(n,location),y=t.value,v=e.value;let b=0;if(d){if(t.value=p,e.value=d,o&&o===y){o=null;return}b=v?d.position-v.position:0}else r(p);i.forEach(E=>{E(t.value,y,{delta:b,type:Oa.pop,direction:b?b>0?ha.forward:ha.back:ha.unknown})})};function c(){o=t.value}function l(d){i.push(d);const p=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:Uu()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function ry(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Uu():null}}function VA(n){const{history:e,location:t}=window,r={value:C_(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:FA()+n+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function o(c,l){const u=Re({},e.state,ry(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Re({},i.value,e.state,{forward:c,scroll:Uu()});s(u.current,u,!0);const h=Re({},ry(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function UA(n){n=RA(n);const e=VA(n),t=$A(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Re({location:"",base:n,go:r,createHref:PA.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function BA(n){return typeof n=="string"||n&&typeof n=="object"}function R_(n){return typeof n=="string"||typeof n=="symbol"}const Tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},D_=Symbol("");var iy;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(iy||(iy={}));function Hs(n,e){return Re(new Error,{type:n,[D_]:!0},e)}function ir(n,e){return n instanceof Error&&D_ in n&&(e==null||!!(n.type&e))}const sy="[^/]+?",jA={sensitive:!1,strict:!1,start:!0,end:!0},qA=/[.+*?^${}()[\]/\\]/g;function zA(n,e){const t=Re({},jA,e),r=[];let i=t.start?"^":"";const s=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(t.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(qA,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:v,optional:b,regexp:E}=d;s.push({name:y,repeatable:v,optional:b});const R=E||sy;if(R!==sy){p+=10;try{new RegExp(`(${R})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+A.message)}}let S=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(S=b&&l.length<2?`(?:/${S})`:"/"+S),b&&(S+="?"),i+=S,p+=20,b&&(p+=-8),v&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=s[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:v,optional:b}=p,E=y in l?l[y]:"";if(Rn(E)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Rn(E)?E.join("/"):E;if(!R)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function HA(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function KA(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=HA(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(oy(r))return 1;if(oy(i))return-1}return i.length-r.length}function oy(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const GA={type:0,value:""},WA=/[a-zA-Z0-9_]/;function QA(n){if(!n)return[[]];if(n==="/")return[[GA]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${l}": ${p}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(t===0?s.push({type:0,value:l}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:WA.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function YA(n,e,t){const r=zA(QA(n.path),t),i=Re(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function XA(n,e){const t=[],r=new Map;e=ly({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const p=!d,y=JA(u);y.aliasOf=d&&d.record;const v=ly(e,u),b=[y];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of S)b.push(Re({},y,{components:d?d.record.components:y.components,path:A,aliasOf:d?d.record:y}))}let E,R;for(const S of b){const{path:A}=S;if(h&&A[0]!=="/"){const $=h.record.path,j=$[$.length-1]==="/"?"":"/";S.path=h.record.path+(A&&j+A)}if(E=YA(S,h,v),d?d.alias.push(E):(R=R||E,R!==E&&R.alias.push(E),p&&u.name&&!cy(E)&&o(u.name)),y.children){const $=y.children;for(let j=0;j<$.length;j++)s($[j],E,d&&d.children[j])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return R?()=>{o(R)}:ua}function o(u){if(R_(u)){const h=r.get(u);h&&(r.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function c(u){let h=0;for(;h<t.length&&KA(u,t[h])>=0&&(u.record.path!==t[h].record.path||!P_(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!cy(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Hs(1,{location:u});v=d.record.name,p=Re(ay(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&ay(u.params,d.keys.map(R=>R.name))),y=d.stringify(p)}else if("path"in u)y=u.path,d=t.find(R=>R.re.test(y)),d&&(p=d.parse(y),v=d.record.name);else{if(d=h.name?r.get(h.name):t.find(R=>R.re.test(h.path)),!d)throw Hs(1,{location:u,currentLocation:h});v=d.record.name,p=Re({},h.params,u.params),y=d.stringify(p)}const b=[];let E=d;for(;E;)b.unshift(E.record),E=E.parent;return{name:v,path:y,params:p,matched:b,meta:e1(b)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ay(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function JA(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:ZA(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function ZA(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function cy(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function e1(n){return n.reduce((e,t)=>Re(e,t.meta),{})}function ly(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function P_(n,e){return e.children.some(t=>t===n||P_(n,t))}const N_=/#/g,t1=/&/g,n1=/\//g,r1=/=/g,i1=/\?/g,O_=/\+/g,s1=/%5B/g,o1=/%5D/g,L_=/%5E/g,a1=/%60/g,M_=/%7B/g,c1=/%7C/g,F_=/%7D/g,l1=/%20/g;function Jf(n){return encodeURI(""+n).replace(c1,"|").replace(s1,"[").replace(o1,"]")}function u1(n){return Jf(n).replace(M_,"{").replace(F_,"}").replace(L_,"^")}function Dd(n){return Jf(n).replace(O_,"%2B").replace(l1,"+").replace(N_,"%23").replace(t1,"%26").replace(a1,"`").replace(M_,"{").replace(F_,"}").replace(L_,"^")}function h1(n){return Dd(n).replace(r1,"%3D")}function d1(n){return Jf(n).replace(N_,"%23").replace(i1,"%3F")}function f1(n){return n==null?"":d1(n).replace(n1,"%2F")}function ql(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function p1(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(O_," "),o=s.indexOf("="),a=ql(o<0?s:s.slice(0,o)),c=o<0?null:ql(s.slice(o+1));if(a in e){let l=e[a];Rn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function uy(n){let e="";for(let t in n){const r=n[t];if(t=h1(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Rn(r)?r.map(s=>s&&Dd(s)):[r&&Dd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function g1(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Rn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const m1=Symbol(""),hy=Symbol(""),Bu=Symbol(""),Zf=Symbol(""),Pd=Symbol("");function Lo(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Dr(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Hs(4,{from:t,to:e})):h instanceof Error?a(h):BA(h)?a(Hs(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=n.call(r&&r.instances[i],e,t,c);let u=Promise.resolve(l);n.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function zh(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(y1(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Dr(l,t,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=EA(l)?l.default:l;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Dr(d,t,r,s,o)()}))}}return i}function y1(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function dy(n){const e=pn(Bu),t=pn(Zf),r=an(()=>e.resolve(re(n.to))),i=an(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(zs.bind(null,u));if(d>-1)return d;const p=fy(c[l-2]);return l>1&&fy(u)===p&&h[h.length-1].path!==p?h.findIndex(zs.bind(null,c[l-2])):d}),s=an(()=>i.value>-1&&_1(t.params,r.value.params)),o=an(()=>i.value>-1&&i.value===t.matched.length-1&&k_(t.params,r.value.params));function a(c={}){return w1(c)?e[re(n.replace)?"replace":"push"](re(n.to)).catch(ua):Promise.resolve()}return{route:r,href:an(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const v1=r_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dy,setup(n,{slots:e}){const t=mo(dy(n)),{options:r}=pn(Bu),i=an(()=>({[py(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[py(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:I_("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),Nt=v1;function w1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function _1(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!Rn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function fy(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const py=(n,e,t)=>n??e??t,b1=r_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=pn(Pd),i=an(()=>n.route||r.value),s=pn(hy,0),o=an(()=>{let l=re(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=an(()=>i.value.matched[o.value]);wl(hy,an(()=>o.value+1)),wl(m1,a),wl(Pd,i);const c=xe();return ra(()=>[c.value,a.value,n.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!zs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=n.name,h=a.value,d=h&&h.components[u];if(!d)return gy(t.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,b=I_(d,Re({},y,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return gy(t.default,{Component:b,route:l})||b}}});function gy(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const gc=b1;function I1(n){const e=XA(n.routes,n),t=n.parseQuery||p1,r=n.stringifyQuery||uy,i=n.history,s=Lo(),o=Lo(),a=Lo(),c=Cx(Tr);let l=Tr;bs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jh.bind(null,x=>""+x),h=jh.bind(null,f1),d=jh.bind(null,ql);function p(x,q){let F,J;return R_(x)?(F=e.getRecordMatcher(x),J=q):J=x,e.addRoute(J,F)}function y(x){const q=e.getRecordMatcher(x);q&&e.removeRoute(q)}function v(){return e.getRoutes().map(x=>x.record)}function b(x){return!!e.getRecordMatcher(x)}function E(x,q){if(q=Re({},q||c.value),typeof x=="string"){const w=qh(t,x,q.path),T=e.resolve({path:w.path},q),k=i.createHref(w.fullPath);return Re(w,T,{params:d(T.params),hash:ql(w.hash),redirectedFrom:void 0,href:k})}let F;if("path"in x)F=Re({},x,{path:qh(t,x.path,q.path).path});else{const w=Re({},x.params);for(const T in w)w[T]==null&&delete w[T];F=Re({},x,{params:h(w)}),q.params=h(q.params)}const J=e.resolve(F,q),we=x.hash||"";J.params=u(d(J.params));const g=SA(r,Re({},x,{hash:u1(we),path:J.path})),m=i.createHref(g);return Re({fullPath:g,hash:we,query:r===uy?g1(x.query):x.query||{}},J,{redirectedFrom:void 0,href:m})}function R(x){return typeof x=="string"?qh(t,x,c.value.path):Re({},x)}function S(x,q){if(l!==x)return Hs(8,{from:q,to:x})}function A(x){return X(x)}function $(x){return A(Re(R(x),{replace:!0}))}function j(x){const q=x.matched[x.matched.length-1];if(q&&q.redirect){const{redirect:F}=q;let J=typeof F=="function"?F(x):F;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=R(J):{path:J},J.params={}),Re({query:x.query,hash:x.hash,params:"path"in J?{}:x.params},J)}}function X(x,q){const F=l=E(x),J=c.value,we=x.state,g=x.force,m=x.replace===!0,w=j(F);if(w)return X(Re(R(w),{state:typeof w=="object"?Re({},we,w.state):we,force:g,replace:m}),q||F);const T=F;T.redirectedFrom=q;let k;return!g&&AA(r,J,F)&&(k=Hs(16,{to:T,from:J}),qt(J,J,!0,!1)),(k?Promise.resolve(k):le(T,J)).catch(D=>ir(D)?ir(D,2)?D:en(D):ve(D,T,J)).then(D=>{if(D){if(ir(D,2))return X(Re({replace:m},R(D.to),{state:typeof D.to=="object"?Re({},we,D.to.state):we,force:g}),q||T)}else D=Ve(T,J,!0,m,we);return Ee(T,J,D),D})}function G(x,q){const F=S(x,q);return F?Promise.reject(F):Promise.resolve()}function W(x){const q=tn.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(x):x()}function le(x,q){let F;const[J,we,g]=E1(x,q);F=zh(J.reverse(),"beforeRouteLeave",x,q);for(const w of J)w.leaveGuards.forEach(T=>{F.push(Dr(T,x,q))});const m=G.bind(null,x,q);return F.push(m),We(F).then(()=>{F=[];for(const w of s.list())F.push(Dr(w,x,q));return F.push(m),We(F)}).then(()=>{F=zh(we,"beforeRouteUpdate",x,q);for(const w of we)w.updateGuards.forEach(T=>{F.push(Dr(T,x,q))});return F.push(m),We(F)}).then(()=>{F=[];for(const w of x.matched)if(w.beforeEnter&&!q.matched.includes(w))if(Rn(w.beforeEnter))for(const T of w.beforeEnter)F.push(Dr(T,x,q));else F.push(Dr(w.beforeEnter,x,q));return F.push(m),We(F)}).then(()=>(x.matched.forEach(w=>w.enterCallbacks={}),F=zh(g,"beforeRouteEnter",x,q),F.push(m),We(F))).then(()=>{F=[];for(const w of o.list())F.push(Dr(w,x,q));return F.push(m),We(F)}).catch(w=>ir(w,8)?w:Promise.reject(w))}function Ee(x,q,F){for(const J of a.list())W(()=>J(x,q,F))}function Ve(x,q,F,J,we){const g=S(x,q);if(g)return g;const m=q===Tr,w=bs?history.state:{};F&&(J||m?i.replace(x.fullPath,Re({scroll:m&&w&&w.scroll},we)):i.push(x.fullPath,we)),c.value=x,qt(x,q,F,m),en()}let Le;function Mt(){Le||(Le=i.listen((x,q,F)=>{if(!nn.listening)return;const J=E(x),we=j(J);if(we){X(Re(we,{replace:!0}),J).catch(ua);return}l=J;const g=c.value;bs&&LA(ny(g.fullPath,F.delta),Uu()),le(J,g).catch(m=>ir(m,12)?m:ir(m,2)?(X(m.to,J).then(w=>{ir(w,20)&&!F.delta&&F.type===Oa.pop&&i.go(-1,!1)}).catch(ua),Promise.reject()):(F.delta&&i.go(-F.delta,!1),ve(m,J,g))).then(m=>{m=m||Ve(J,g,!1),m&&(F.delta&&!ir(m,8)?i.go(-F.delta,!1):F.type===Oa.pop&&ir(m,20)&&i.go(-1,!1)),Ee(J,g,m)}).catch(ua)}))}let rt=Lo(),ae=Lo(),pe;function ve(x,q,F){en(x);const J=ae.list();return J.length?J.forEach(we=>we(x,q,F)):console.error(x),Promise.reject(x)}function It(){return pe&&c.value!==Tr?Promise.resolve():new Promise((x,q)=>{rt.add([x,q])})}function en(x){return pe||(pe=!x,Mt(),rt.list().forEach(([q,F])=>x?F(x):q()),rt.reset()),x}function qt(x,q,F,J){const{scrollBehavior:we}=n;if(!bs||!we)return Promise.resolve();const g=!F&&MA(ny(x.fullPath,0))||(J||!F)&&history.state&&history.state.scroll||null;return Kf().then(()=>we(x,q,g)).then(m=>m&&OA(m)).catch(m=>ve(m,x,q))}const it=x=>i.go(x);let In;const tn=new Set,nn={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:b,getRoutes:v,resolve:E,options:n,push:A,replace:$,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:It,install(x){const q=this;x.component("RouterLink",Nt),x.component("RouterView",gc),x.config.globalProperties.$router=q,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>re(c)}),bs&&!In&&c.value===Tr&&(In=!0,A(i.location).catch(we=>{}));const F={};for(const we in Tr)F[we]=an(()=>c.value[we]);x.provide(Bu,q),x.provide(Zf,mo(F)),x.provide(Pd,c);const J=x.unmount;tn.add(x),x.unmount=function(){tn.delete(x),tn.size<1&&(l=Tr,Le&&Le(),Le=null,c.value=Tr,In=!1,pe=!1),J()}}};function We(x){return x.reduce((q,F)=>q.then(()=>W(F)),Promise.resolve())}return nn}function E1(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(l=>zs(l,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>zs(l,c))||i.push(c))}return[t,r,i]}function ep(){return pn(Bu)}function $_(){return pn(Zf)}const T1={__name:"App",setup(n){return(e,t)=>(se(),yn(re(gc)))}},V_="/itemshare/assets/ItemShareLogo-622ee656.png",x1=f("span",{class:"text-3xl text-white font-poppins font-black underline decoration-green-900 underline-offset-4 decoration-4 md:inline-block hidden select-none"},"ItemShare",-1),S1=["src"],A1={__name:"ItemShareLogoLP",setup(n){return(e,t)=>(se(),yn(re(Nt),{to:"/",class:"flex gap-2 items-center"},{default:Pe(()=>[x1,f("img",{src:re(V_),class:"w-10 rounded-xl",loading:"lazy"},null,8,S1)]),_:1}))}},k1=f("div",{class:"h-full bg-green-100 flex md:flex-row-reverse flex-col-reverse",style:{"background-image":"url('https://wordpress.heals.com/blog/wp-content/uploads/2021/08/Colourful-sofa-cushions-1024x485.jpg;')","background-size":"cover","background-position":"center"}},[f("div",{class:"basis-1/2 bg-green-600"})],-1),C1={class:"absolute top-0 h-screen flex md:flex-row-reverse flex-col w-full"},R1={class:"basis-full md:basis-1/2 p-8 flex flex-col justify-between w-full gap-4 overflow-y-auto"},D1={class:"flex justify-between"},P1=f("nav",{class:"flex gap-4 text-white"},[f("a",{href:"#"},"About Us"),f("a",{href:"#"},"Contacts")],-1),N1={class:"bg-white p-8 self-center rounded-3xl flex flex-col overflow-y-auto"},O1=f("footer",{class:"text-right text-white"},"All Rights Reserved 2023. ®",-1),L1={__name:"LandingView",setup(n){return(e,t)=>(se(),me(Me,null,[k1,f("div",C1,[f("div",R1,[f("header",D1,[P1,ie(A1)]),f("div",N1,[ie(re(gc))]),O1])])],64))}},ju=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},M1={};function F1(n,e){const t=ss("RouterLink");return se(),me(Me,null,[ie(t,{to:"/login",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"},{default:Pe(()=>[fe("LOGIN")]),_:1}),ie(t,{to:"/register",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"},{default:Pe(()=>[fe("REGISTER")]),_:1})],64)}const $1=ju(M1,[["render",F1]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const U_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},V1=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},B_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(t[u],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(U_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):V1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new U1;const d=s<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class U1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B1=function(n){const e=U_(n);return B_.encodeByteArray(e,!0)},zl=function(n){return B1(n).replace(/\./g,"")},j_=function(n){try{return B_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Hl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!j1(t)||(n[t]=Hl(n[t],e[t]));return n}function j1(n){return n!=="__proto__"}/**
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
 */function q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const z1=()=>q1().__FIREBASE_DEFAULTS__,H1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},K1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&j_(n[1]);return e&&JSON.parse(e)},tp=()=>{try{return z1()||H1()||K1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},q_=()=>{var n;return(n=tp())===null||n===void 0?void 0:n.config},G1=n=>{var e;return(e=tp())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Q1(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[zl(JSON.stringify(t)),zl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function np(){var n;const e=(n=tp())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function X1(){return typeof self=="object"&&self.self===self}function z_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H_(){const n=Ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function J1(){return!np()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function La(){try{return typeof indexedDB=="object"}catch{return!1}}function Z1(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ek,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function tk(n,e){return n.replace(nk,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function rk(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nd(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(yy(s)&&yy(o)){if(!Nd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function yy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Yo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function K_(n,e){const t=new ik(n,e);return t.subscribe.bind(t)}class ik{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");sk(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Hh),i.error===void 0&&(i.error=Hh),i.complete===void 0&&(i.complete=Hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hh(){}/**
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
 */function ne(n){return n&&n._delegate?n._delegate:n}class Zn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vi="[DEFAULT]";/**
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
 */class ok{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new W1;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ck(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ak(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ak(n){return n===vi?void 0:n}function ck(n){return n.instantiationMode==="EAGER"}/**
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
 */class lk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ok(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=[];var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const G_={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},uk=be.INFO,hk={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},dk=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=hk[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qu{constructor(e){this.name=e,this._logLevel=uk,this._logHandler=dk,this._userLogHandler=null,ip.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}function fk(n){ip.forEach(e=>{e.setLogLevel(n)})}function pk(n,e){for(const t of ip){let r=null;e&&e.level&&(r=G_[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:be[s].toLowerCase(),message:a,args:o,type:i.name})}}}const gk=(n,e)=>e.some(t=>n instanceof t);let vy,wy;function mk(){return vy||(vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yk(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W_=new WeakMap,Od=new WeakMap,Q_=new WeakMap,Kh=new WeakMap,sp=new WeakMap;function vk(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(zr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&W_.set(t,n)}).catch(()=>{}),sp.set(e,n),e}function wk(n){if(Od.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Od.set(n,e)}let Ld={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Od.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Q_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _k(n){Ld=n(Ld)}function bk(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Gh(this),e,...t);return Q_.set(r,e.sort?e.sort():[e]),zr(r)}:yk().includes(n)?function(...e){return n.apply(Gh(this),e),zr(W_.get(this))}:function(...e){return zr(n.apply(Gh(this),e))}}function Ik(n){return typeof n=="function"?bk(n):(n instanceof IDBTransaction&&wk(n),gk(n,mk())?new Proxy(n,Ld):n)}function zr(n){if(n instanceof IDBRequest)return vk(n);if(Kh.has(n))return Kh.get(n);const e=Ik(n);return e!==n&&(Kh.set(n,e),sp.set(e,n)),e}const Gh=n=>sp.get(n);function Ek(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zr(o.result),c.oldVersion,c.newVersion,zr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Tk=["get","getKey","getAll","getAllKeys","count"],xk=["put","add","delete","clear"],Wh=new Map;function _y(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wh.get(e))return Wh.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=xk.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Tk.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Wh.set(e,s),s}_k(n=>({...n,get:(e,t,r)=>_y(e,t)||n.get(e,t,r),has:(e,t)=>!!_y(e,t)||n.has(e,t)}));/**
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
 */class Sk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ak(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ak(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",by="0.9.12";/**
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
 */const Hi=new qu("@firebase/app"),kk="@firebase/app-compat",Ck="@firebase/analytics-compat",Rk="@firebase/analytics",Dk="@firebase/app-check-compat",Pk="@firebase/app-check",Nk="@firebase/auth",Ok="@firebase/auth-compat",Lk="@firebase/database",Mk="@firebase/database-compat",Fk="@firebase/functions",$k="@firebase/functions-compat",Vk="@firebase/installations",Uk="@firebase/installations-compat",Bk="@firebase/messaging",jk="@firebase/messaging-compat",qk="@firebase/performance",zk="@firebase/performance-compat",Hk="@firebase/remote-config",Kk="@firebase/remote-config-compat",Gk="@firebase/storage",Wk="@firebase/storage-compat",Qk="@firebase/firestore",Yk="@firebase/firestore-compat",Xk="firebase",Jk="9.22.2";/**
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
 */const Gr="[DEFAULT]",Zk={[Md]:"fire-core",[kk]:"fire-core-compat",[Rk]:"fire-analytics",[Ck]:"fire-analytics-compat",[Pk]:"fire-app-check",[Dk]:"fire-app-check-compat",[Nk]:"fire-auth",[Ok]:"fire-auth-compat",[Lk]:"fire-rtdb",[Mk]:"fire-rtdb-compat",[Fk]:"fire-fn",[$k]:"fire-fn-compat",[Vk]:"fire-iid",[Uk]:"fire-iid-compat",[Bk]:"fire-fcm",[jk]:"fire-fcm-compat",[qk]:"fire-perf",[zk]:"fire-perf-compat",[Hk]:"fire-rc",[Kk]:"fire-rc-compat",[Gk]:"fire-gcs",[Wk]:"fire-gcs-compat",[Qk]:"fire-fst",[Yk]:"fire-fst-compat","fire-js":"fire-js",[Xk]:"fire-js-all"};/**
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
 */const Wr=new Map,Ma=new Map;function Kl(n,e){try{n.container.addComponent(e)}catch(t){Hi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Y_(n,e){n.container.addOrOverwriteComponent(e)}function Qr(n){const e=n.name;if(Ma.has(e))return Hi.debug(`There were multiple attempts to register component ${e}.`),!1;Ma.set(e,n);for(const t of Wr.values())Kl(t,n);return!0}function X_(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function eC(n,e,t=Gr){X_(n,e).clearInstance(t)}function tC(){Ma.clear()}/**
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
 */const nC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ur=new os("app","Firebase",nC);/**
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
 */let rC=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}};/**
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
 */const oi=Jk;function op(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(t||(t=q_()),!t)throw ur.create("no-options");const s=Wr.get(i);if(s){if(Nd(t,s.options)&&Nd(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new lk(i);for(const c of Ma.values())o.addComponent(c);const a=new rC(t,r,o);return Wr.set(i,a),a}function iC(n=Gr){const e=Wr.get(n);if(!e&&n===Gr&&q_())return op();if(!e)throw ur.create("no-app",{appName:n});return e}function sC(){return Array.from(Wr.values())}async function J_(n){const e=n.name;Wr.has(e)&&(Wr.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Wn(n,e,t){var r;let i=(r=Zk[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hi.warn(a.join(" "));return}Qr(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Z_(n,e){if(n!==null&&typeof n!="function")throw ur.create("invalid-log-argument");pk(n,e)}function eb(n){fk(n)}/**
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
 */const oC="firebase-heartbeat-database",aC=1,Fa="firebase-heartbeat-store";let Qh=null;function tb(){return Qh||(Qh=Ek(oC,aC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Fa)}}}).catch(n=>{throw ur.create("idb-open",{originalErrorMessage:n.message})})),Qh}async function cC(n){try{return await(await tb()).transaction(Fa).objectStore(Fa).get(nb(n))}catch(e){if(e instanceof Bt)Hi.warn(e.message);else{const t=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hi.warn(t.message)}}}async function Iy(n,e){try{const r=(await tb()).transaction(Fa,"readwrite");await r.objectStore(Fa).put(e,nb(n)),await r.done}catch(t){if(t instanceof Bt)Hi.warn(t.message);else{const r=ur.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Hi.warn(r.message)}}}function nb(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lC=1024,uC=30*24*60*60*1e3;class hC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ey();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=uC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ey(),{heartbeatsToSend:t,unsentEntries:r}=dC(this._heartbeatsCache.heartbeats),i=zl(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ey(){return new Date().toISOString().substring(0,10)}function dC(n,e=lC){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ty(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ty(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class fC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return La()?Z1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ty(n){return zl(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function pC(n){Qr(new Zn("platform-logger",e=>new Sk(e),"PRIVATE")),Qr(new Zn("heartbeat",e=>new hC(e),"PRIVATE")),Wn(Md,by,n),Wn(Md,by,"esm2017"),Wn("fire-js","")}pC("");const gC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Bt,SDK_VERSION:oi,_DEFAULT_ENTRY_NAME:Gr,_addComponent:Kl,_addOrOverwriteComponent:Y_,_apps:Wr,_clearComponents:tC,_components:Ma,_getProvider:X_,_registerComponent:Qr,_removeServiceInstance:eC,deleteApp:J_,getApp:iC,getApps:sC,initializeApp:op,onLog:Z_,registerVersion:Wn,setLogLevel:eb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,t){this._delegate=e,this.firebase=t,Kl(e,new Zn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),J_(this._delegate)))}_getService(e,t=Gr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Gr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Kl(this._delegate,e)}_addOrOverwriteComponent(e){Y_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const yC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},xy=new os("app-compat","Firebase",yC);/**
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
 */function vC(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Wn,setLogLevel:eb,onLog:Z_,apps:null,SDK_VERSION:oi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:gC}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Gr,!my(e,l))throw xy.create("no-app",{appName:l});return e[l]}i.App=n;function s(l,u={}){const h=op(l,u);if(my(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Qr(l)&&l.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw xy.create("invalid-app-argument",{appName:u});return p[h]()};l.serviceProps!==void 0&&Hl(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,u).apply(this,l.multipleInstances?p:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
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
 */function rb(){const n=vC(mC);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:rb,extendNamespace:e,createSubscribe:K_,ErrorFactory:os,deepExtend:Hl});function e(t){Hl(n,t)}return n}const wC=rb();/**
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
 */const Sy=new qu("@firebase/app-compat"),_C="@firebase/app-compat",bC="0.2.12";/**
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
 */function IC(n){Wn(_C,bC,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(X1()&&self.firebase!==void 0){Sy.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Sy.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const bn=wC;IC();var EC="firebase",TC="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.registerVersion(EC,TC,"app-compat");function ap(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Mo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ys={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function ib(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SC=xC,AC=ib,sb=new os("auth","Firebase",ib());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new qu("@firebase/auth");function kC(n,...e){Gl.logLevel<=be.WARN&&Gl.warn(`Auth (${oi}): ${n}`,...e)}function Il(n,...e){Gl.logLevel<=be.ERROR&&Gl.error(`Auth (${oi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n,...e){throw cp(n,...e)}function At(n,...e){return cp(n,...e)}function ob(n,e,t){const r=Object.assign(Object.assign({},AC()),{[e]:t});return new os("auth","Firebase",r).create(e,{appName:n.name})}function vo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ct(n,"argument-error"),ob(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cp(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return sb.create(n,...e)}function O(n,e,...t){if(!n)throw cp(e,...t)}function qn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Il(e),new Error(e)}function Dn(n,e){n||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function lp(){return Ay()==="http:"||Ay()==="https:"}function Ay(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lp()||z_()||"connection"in navigator)?navigator.onLine:!0}function RC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dn(t>e,"Short delay should be less than long delay!"),this.isMobile=Y1()||rp()}get(){return CC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n,e){Dn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new mc(3e4,6e4);function ct(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ht(n,e,t,r,i={}){return cb(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),ab.fetch()(lb(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function cb(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},DC),e);try{const i=new NC(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xo(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xo(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ob(n,u,l);Ct(n,u)}}catch(i){if(i instanceof Bt)throw i;Ct(n,"network-request-failed",{message:String(i)})}}async function vr(n,e,t,r,i={}){const s=await ht(n,e,t,r,i);return"mfaPendingCredential"in s&&Ct(n,"multi-factor-auth-required",{_serverResponse:s}),s}function lb(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?up(n.config,i):`${n.config.apiScheme}://${i}`}class NC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),PC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=At(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(n,e){return ht(n,"POST","/v1/accounts:delete",e)}async function LC(n,e){return ht(n,"POST","/v1/accounts:update",e)}async function MC(n,e){return ht(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FC(n,e=!1){const t=ne(n),r=await t.getIdToken(e),i=zu(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:da(Yh(i.auth_time)),issuedAtTime:da(Yh(i.iat)),expirationTime:da(Yh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yh(n){return Number(n)*1e3}function zu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const i=j_(t);return i?JSON.parse(i):(Il("Failed to decode base64 JWT payload"),null)}catch(i){return Il("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $C(n){const e=zu(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&VC(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function VC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=da(this.lastLoginAt),this.creationTime=da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Va(n){var e;const t=n.auth,r=await n.getIdToken(),i=await fr(n,MC(t,{idToken:r}));O(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qC(s.providerUserInfo):[],a=jC(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ub(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function BC(n){const e=ne(n);await Va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jC(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qC(n){return n.map(e=>{var{providerId:t}=e,r=ap(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(n,e){const t=await cb(n,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=lb(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ab.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$C(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await zC(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ua;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ua,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vi{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ap(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ub(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fr(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FC(this,e)}reload(){return BC(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,OC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=t.createdAt)!==null&&l!==void 0?l:void 0,R=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:A,isAnonymous:$,providerData:j,stsTokenManager:X}=t;O(S&&X,e,"internal-error");const G=Ua.fromJSON(this.name,X);O(typeof S=="string",e,"internal-error"),xr(h,e.name),xr(d,e.name),O(typeof A=="boolean",e,"internal-error"),O(typeof $=="boolean",e,"internal-error"),xr(p,e.name),xr(y,e.name),xr(v,e.name),xr(b,e.name),xr(E,e.name),xr(R,e.name);const W=new Vi({uid:S,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:$,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:G,createdAt:E,lastLoginAt:R});return j&&Array.isArray(j)&&(W.providerData=j.map(le=>Object.assign({},le))),b&&(W._redirectEventId=b),W}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ua;i.updateFromServerResponse(t);const s=new Vi({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Va(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Map;function cn(n){Dn(n instanceof Function,"Expected a class definition");let e=ky.get(n);return e?(Dn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ky.set(n,e),e)}/**
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
 */class hb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hb.type="NONE";const Ks=hb;/**
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
 */function Ui(n,e,t){return`firebase:${n}:${e}:${t}`}class Ds{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ui(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ui("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ds(cn(Ks),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||cn(Ks);const o=Ui(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=Vi._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ds(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(db(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gb(e))return"Blackberry";if(mb(e))return"Webos";if(hp(e))return"Safari";if((e.includes("chrome/")||fb(e))&&!e.includes("edge/"))return"Chrome";if(yc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function db(n=Ge()){return/firefox\//i.test(n)}function hp(n=Ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fb(n=Ge()){return/crios\//i.test(n)}function pb(n=Ge()){return/iemobile/i.test(n)}function yc(n=Ge()){return/android/i.test(n)}function gb(n=Ge()){return/blackberry/i.test(n)}function mb(n=Ge()){return/webos/i.test(n)}function wo(n=Ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function HC(n=Ge()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function KC(n=Ge()){var e;return wo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GC(){return H_()&&document.documentMode===10}function yb(n=Ge()){return wo(n)||yc(n)||mb(n)||gb(n)||/windows phone/i.test(n)||pb(n)}function WC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(n,e=[]){let t;switch(n){case"Browser":t=Cy(Ge());break;case"Worker":t=`${Cy(Ge())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oi}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(n){return(await ht(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function wb(n,e){return ht(n,"GET","/v2/recaptchaConfig",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n){return n!==void 0&&n.getResponse!==void 0}function Dy(n){return n!==void 0&&n.enterprise!==void 0}class _b{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function dp(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",YC().appendChild(r)})}function bb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const XC="https://www.google.com/recaptcha/enterprise.js?render=",JC="recaptcha-enterprise",ZC="NO_RECAPTCHA";class Ib{constructor(e){this.type=JC,this.auth=nt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{wb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new _b(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Dy(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(ZC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Dy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dp(XC+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Yr(n,e,t,r=!1){const i=new Ib(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class eR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Py(this),this.idTokenSubscription=new Py(this),this.beforeStateQueue=new eR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Va(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ne(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}async initializeRecaptchaConfig(){const e=await wb(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new _b(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Ib(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cn(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function nt(n){return ne(n)}class Py{constructor(e){this.auth=e,this.observer=null,this.addObserver=K_(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function nR(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(cn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rR(n,e,t){const r=nt(n);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Eb(e),{host:o,port:a}=iR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sR()}function Eb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iR(n){const e=Eb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ny(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ny(o)}}}function Ny(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function sR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,t){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(n,e){return ht(n,"POST","/v1/accounts:resetPassword",ct(n,e))}async function xb(n,e){return ht(n,"POST","/v1/accounts:update",e)}async function oR(n,e){return ht(n,"POST","/v1/accounts:update",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(n,e){return vr(n,"POST","/v1/accounts:signInWithPassword",ct(n,e))}async function Hu(n,e){return ht(n,"POST","/v1/accounts:sendOobCode",ct(n,e))}async function aR(n,e){return Hu(n,e)}async function Jh(n,e){return Hu(n,e)}async function Zh(n,e){return Hu(n,e)}async function cR(n,e){return Hu(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(n,e){return vr(n,"POST","/v1/accounts:signInWithEmailLink",ct(n,e))}async function uR(n,e){return vr(n,"POST","/v1/accounts:signInWithEmailLink",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends _o{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ba(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ba(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Yr(e,r,"signInWithPassword");return Xh(e,i)}else return Xh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Yr(e,r,"signInWithPassword");return Xh(e,s)}else return Promise.reject(i)});case"emailLink":return lR(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xb(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uR(e,{idToken:t,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e){return vr(n,"POST","/v1/accounts:signInWithIdp",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="http://localhost";class er extends _o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ap(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new er(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,hr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}buildRequest(){const e={requestUri:hR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(n,e){return ht(n,"POST","/v1/accounts:sendVerificationCode",ct(n,e))}async function fR(n,e){return vr(n,"POST","/v1/accounts:signInWithPhoneNumber",ct(n,e))}async function pR(n,e){const t=await vr(n,"POST","/v1/accounts:signInWithPhoneNumber",ct(n,e));if(t.temporaryProof)throw Xo(n,"account-exists-with-different-credential",t);return t}const gR={USER_NOT_FOUND:"user-not-found"};async function mR(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return vr(n,"POST","/v1/accounts:signInWithPhoneNumber",ct(n,t),gR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends _o{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Bi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Bi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return fR(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return pR(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Bi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vR(n){const e=xs(Yo(n)).link,t=e?xs(Yo(e)).deep_link_id:null,r=xs(Yo(n)).deep_link_id;return(r?xs(Yo(r)).link:null)||r||t||e||n}class Ku{constructor(e){var t,r,i,s,o,a;const c=xs(Yo(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=yR((i=c.mode)!==null&&i!==void 0?i:null);O(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=vR(e);try{return new Ku(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,t){return Ba._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ku.parseLink(t);return O(r,"argument-error"),Ba._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bo extends wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ps extends bo{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return O("providerId"in t&&"signInMethod"in t,"argument-error"),er._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),er._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ps.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ps.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Ps(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends bo{constructor(){super("facebook.com")}static credential(e){return er._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return er._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Vn.credential(t,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends bo{constructor(){super("github.com")}static credential(e){return er._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="http://localhost";class Gs extends _o{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,hr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Gs(r,s)}static _create(e,t){return new Gs(e,t)}buildRequest(){return{requestUri:wR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="saml.";class Wl extends wr{constructor(e){O(e.startsWith(_R),"argument-error"),super(e)}static credentialFromResult(e){return Wl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Wl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Gs.fromJSON(e);return O(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Gs._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends bo{constructor(){super("twitter.com")}static credential(e,t){return er._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(n,e){return vr(n,"POST","/v1/accounts:signUp",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Vi._fromIdTokenResponse(e,r,i),o=Oy(r);return new vn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Oy(r);return new vn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Oy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(n){var e;const t=nt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await El(t,{returnSecureToken:!0}),i=await vn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Bt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ql(e,t,r,i)}}function Sb(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function IR(n,e){const t=ne(n);await Gu(!0,t,e);const{providerUserInfo:r}=await LC(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Ab(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function fp(n,e,t=!1){const r=await fr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}async function Gu(n,e,t){await Va(e);const r=Ab(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";O(r.has(t)===n,e.auth,i)}/**
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
 */async function kb(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await fr(n,Sb(r,i,e,n),t);O(s.idToken,r,"internal-error");const o=zu(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(n.uid===a,r,"user-mismatch"),vn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(n,e,t=!1){const r="signIn",i=await Sb(n,r,e),s=await vn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Wu(n,e){return Cb(nt(n),e)}async function Rb(n,e){const t=ne(n);return await Gu(!1,t,e.providerId),fp(t,e)}async function Db(n,e){return kb(ne(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(n,e){return vr(n,"POST","/v1/accounts:signInWithCustomToken",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(n,e){const t=nt(n),r=await ER(t,{token:e,returnSecureToken:!0}),i=await vn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?pp._fromServerResponse(e,t):"totpInfo"in t?gp._fromServerResponse(e,t):Ct(e,"internal-error")}}class pp extends vc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new pp(t)}}class gp extends vc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new gp(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n,e,t){var r;O(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),O(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(O(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(O(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(n,e,t){var r;const i=nt(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Yr(i,s,"getOobCode",!0);t&&Ns(i,o,t),await Jh(i,o)}else t&&Ns(i,s,t),await Jh(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Yr(i,s,"getOobCode",!0);t&&Ns(i,a,t),await Jh(i,a)}else return Promise.reject(o)})}async function SR(n,e,t){await Tb(ne(n),{oobCode:e,newPassword:t})}async function AR(n,e){await oR(ne(n),{oobCode:e})}async function Pb(n,e){const t=ne(n),r=await Tb(t,{oobCode:e}),i=r.requestType;switch(O(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,t,"internal-error");default:O(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=vc._fromServerResponse(nt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function kR(n,e){const{data:t}=await Pb(ne(n),e);return t.email}async function CR(n,e,t){var r;const i=nt(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Yr(i,s,"signUpPassword");o=El(i,l)}else o=El(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Yr(i,s,"signUpPassword");return El(i,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await vn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function RR(n,e,t){return Wu(ne(n),ai.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(n,e,t){var r;const i=nt(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){O(c.handleCodeInApp,i,"argument-error"),c&&Ns(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Yr(i,s,"getOobCode",!0);o(a,t),await Zh(i,a)}else o(s,t),await Zh(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Yr(i,s,"getOobCode",!0);o(c,t),await Zh(i,c)}else return Promise.reject(a)})}function PR(n,e){const t=Ku.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function NR(n,e,t){const r=ne(n),i=ai.credentialWithLink(e,t||$a());return O(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Wu(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(n,e){return ht(n,"POST","/v1/accounts:createAuthUri",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(n,e){const t=lp()?$a():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await OR(ne(n),r);return i||[]}async function MR(n,e){const t=ne(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ns(t.auth,i,e);const{email:s}=await aR(t.auth,i);s!==n.email&&await n.reload()}async function FR(n,e,t){const r=ne(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ns(r.auth,s,t);const{email:o}=await cR(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(n,e){return ht(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ne(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await fr(r,$R(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function UR(n,e){return Nb(ne(n),e,null)}function BR(n,e){return Nb(ne(n),null,e)}async function Nb(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await fr(n,xb(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function jR(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=zu(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Os(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new qR(s,i);case"github.com":return new zR(s,i);case"google.com":return new HR(s,i);case"twitter.com":return new KR(s,i,n.screenName||null);case"custom":case"anonymous":return new Os(s,null);default:return new Os(s,r,i)}}class Os{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Ob extends Os{constructor(e,t,r,i){super(e,t,r),this.username=i}}class qR extends Os{constructor(e,t){super(e,"facebook.com",t)}}class zR extends Ob{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class HR extends Os{constructor(e,t){super(e,"google.com",t)}}class KR extends Ob{constructor(e,t,r){super(e,"twitter.com",t,r)}}function GR(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:jR(t)}class Di{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new Di("enroll",e,t)}static _fromMfaPendingCredential(e){return new Di("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Di._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Di._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=nt(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>vc._fromServerResponse(r,a));O(i.mfaPendingCredential,r,"internal-error");const o=Di._fromMfaPendingCredential(i.mfaPendingCredential);return new mp(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await vn._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return O(t.user,r,"internal-error"),vn._forOperation(t.user,t.operationType,l);default:Ct(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function WR(n,e){var t;const r=ne(n),i=e;return O(e.customData.operationType,r,"argument-error"),O((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),mp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(n,e){return ht(n,"POST","/v2/accounts/mfaEnrollment:start",ct(n,e))}function YR(n,e){return ht(n,"POST","/v2/accounts/mfaEnrollment:finalize",ct(n,e))}function XR(n,e){return ht(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ct(n,e))}class yp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>vc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new yp(e)}async getSession(){return Di._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await fr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await fr(this.user,XR(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ed=new WeakMap;function JR(n){const e=ne(n);return ed.has(e)||ed.set(e,yp._fromUser(e)),ed.get(e)}const Yl="__sak";/**
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
 */class Lb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yl,"1"),this.storage.removeItem(Yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(){const n=Ge();return hp(n)||wo(n)}const eD=1e3,tD=10;class Mb extends Lb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZR()&&WC(),this.fallbackToPolling=yb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tD):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},eD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mb.type="LOCAL";const vp=Mb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb extends Lb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fb.type="SESSION";const Ki=Fb;/**
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
 */function nD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await nD(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class rD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=wc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function iD(n){at().location.href=n}/**
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
 */function wp(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function sD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oD(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aD(){return wp()?self:null}/**
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
 */const $b="firebaseLocalStorageDb",cD=1,Xl="firebaseLocalStorage",Vb="fbase_key";class _c{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yu(n,e){return n.transaction([Xl],e?"readwrite":"readonly").objectStore(Xl)}function lD(){const n=indexedDB.deleteDatabase($b);return new _c(n).toPromise()}function Fd(){const n=indexedDB.open($b,cD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xl,{keyPath:Vb})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xl)?e(r):(r.close(),await lD(),e(await Fd()))})})}async function Ly(n,e,t){const r=Yu(n,!0).put({[Vb]:e,value:t});return new _c(r).toPromise()}async function uD(n,e){const t=Yu(n,!1).get(e),r=await new _c(t).toPromise();return r===void 0?null:r.value}function My(n,e){const t=Yu(n,!0).delete(e);return new _c(t).toPromise()}const hD=800,dD=3;class Ub{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(aD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sD(),!this.activeServiceWorker)return;this.sender=new rD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fd();return await Ly(e,Yl,"1"),await My(e,Yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ly(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>uD(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>My(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yu(i,!1).getAll();return new _c(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ub.type="LOCAL";const ja=Ub;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(n,e){return ht(n,"POST","/v2/accounts/mfaSignIn:start",ct(n,e))}function pD(n,e){return ht(n,"POST","/v2/accounts/mfaSignIn:finalize",ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=500,mD=6e4,Jc=1e12;class yD{constructor(e){this.auth=e,this.counter=Jc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new vD(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Jc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Jc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Jc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class vD{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;O(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=wD(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},mD)},gD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function wD(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=bb("rcb"),_D=new mc(3e4,6e4),bD="https://www.google.com/recaptcha/api.js?";class ID{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=at().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return O(ED(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Ry(at().grecaptcha)?Promise.resolve(at().grecaptcha):new Promise((r,i)=>{const s=at().setTimeout(()=>{i(At(e,"network-request-failed"))},_D.get());at()[td]=()=>{at().clearTimeout(s),delete at()[td];const a=at().grecaptcha;if(!a||!Ry(a)){i(At(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${bD}?${yo({onload:td,render:"explicit",hl:t})}`;dp(o).catch(()=>{clearTimeout(s),i(At(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=at().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ED(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class TD{async load(e){return new yD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="recaptcha",xD={theme:"light",type:"image"};let SD=class{constructor(e,t=Object.assign({},xD),r){this.parameters=t,this.type=Bb,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=nt(r),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new TD:new ID,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=at()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(lp()&&!wp(),this.auth,"internal-error"),await AD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await QC(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function AD(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Bi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function kD(n,e,t){const r=nt(n),i=await Xu(r,e,ne(t));return new _p(i,s=>Wu(r,s))}async function CD(n,e,t){const r=ne(n);await Gu(!1,r,"phone");const i=await Xu(r.auth,e,ne(t));return new _p(i,s=>Rb(r,s))}async function RD(n,e,t){const r=ne(n),i=await Xu(r.auth,e,ne(t));return new _p(i,s=>Db(r,s))}async function Xu(n,e,t){var r;const i=await t.verify();try{O(typeof i=="string",n,"argument-error"),O(t.type===Bb,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return O(o.type==="enroll",n,"internal-error"),(await QR(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return O(a,n,"missing-multi-factor-info"),(await fD(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await dR(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function DD(n,e){await fp(ne(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi=class Tl{constructor(e){this.providerId=Tl.PROVIDER_ID,this.auth=nt(e)}verifyPhoneNumber(e,t){return Xu(this.auth,e,ne(t))}static credential(e,t){return Bi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Tl.credentialFromTaggedObject(t)}static credentialFromError(e){return Tl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Bi._fromTokenResponse(t,r):null}};Gi.PROVIDER_ID="phone";Gi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function as(n,e){return e?cn(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class bp extends _o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PD(n){return Cb(n.auth,new bp(n),n.bypassAuthState)}function ND(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),kb(t,new bp(n),n.bypassAuthState)}async function OD(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),fp(t,new bp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PD;case"linkViaPopup":case"linkViaRedirect":return OD;case"reauthViaPopup":case"reauthViaRedirect":return ND;default:Ct(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new mc(2e3,1e4);async function MD(n,e,t){const r=nt(n);vo(n,e,wr);const i=as(r,t);return new or(r,"signInViaPopup",e,i).executeNotNull()}async function FD(n,e,t){const r=ne(n);vo(r.auth,e,wr);const i=as(r.auth,t);return new or(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function $D(n,e,t){const r=ne(n);vo(r.auth,e,wr);const i=as(r.auth,t);return new or(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class or extends jb{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LD.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="pendingRedirect",fa=new Map;class UD extends jb{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fa.get(this.auth._key());if(!e){try{const r=await BD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fa.set(this.auth._key(),e)}return this.bypassAuthState||fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BD(n,e){const t=zb(e),r=qb(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Ip(n,e){return qb(n)._set(zb(e),"true")}function jD(){fa.clear()}function Ep(n,e){fa.set(n._key(),e)}function qb(n){return cn(n._redirectPersistence)}function zb(n){return Ui(VD,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(n,e,t){return zD(n,e,t)}async function zD(n,e,t){const r=nt(n);vo(n,e,wr),await r._initializationPromise;const i=as(r,t);return await Ip(i,r),i._openRedirect(r,e,"signInViaRedirect")}function HD(n,e,t){return KD(n,e,t)}async function KD(n,e,t){const r=ne(n);vo(r.auth,e,wr),await r.auth._initializationPromise;const i=as(r.auth,t);await Ip(i,r.auth);const s=await Hb(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function GD(n,e,t){return WD(n,e,t)}async function WD(n,e,t){const r=ne(n);vo(r.auth,e,wr),await r.auth._initializationPromise;const i=as(r.auth,t);await Gu(!1,r,e.providerId),await Ip(i,r.auth);const s=await Hb(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function QD(n,e){return await nt(n)._initializationPromise,Ju(n,e,!1)}async function Ju(n,e,t=!1){const r=nt(n),i=as(r,e),o=await new UD(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Hb(n){const e=wc(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=10*60*1e3;class Kb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Gb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(At(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fy(e))}saveEventToCache(e){this.cachedEventUids.add(Fy(e)),this.lastProcessedEventTime=Date.now()}}function Fy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Gb({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(n,e={}){return ht(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZD=/^https?/;async function eP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Wb(n);for(const t of e)try{if(tP(t))return}catch{}Ct(n,"unauthorized-domain")}function tP(n){const e=$a(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ZD.test(t))return!1;if(JD.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const nP=new mc(3e4,6e4);function $y(){const n=at().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rP(n){return new Promise((e,t)=>{var r,i,s;function o(){$y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$y(),t(At(n,"network-request-failed"))},timeout:nP.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=at().gapi)===null||s===void 0)&&s.load)o();else{const a=bb("iframefcb");return at()[a]=()=>{gapi.load?o():t(At(n,"network-request-failed"))},dp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw xl=null,e})}let xl=null;function iP(n){return xl=xl||rP(n),xl}/**
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
 */const sP=new mc(5e3,15e3),oP="__/auth/iframe",aP="emulator/auth/iframe",cP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uP(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?up(e,aP):`https://${n.config.authDomain}/${oP}`,r={apiKey:e.apiKey,appName:n.name,v:oi},i=lP.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${yo(r).slice(1)}`}async function hP(n){const e=await iP(n),t=at().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:uP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(n,"network-request-failed"),a=at().setTimeout(()=>{s(o)},sP.get());function c(){at().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const dP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fP=500,pP=600,gP="_blank",mP="http://localhost";class Vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yP(n,e,t,r=fP,i=pP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dP),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ge().toLowerCase();t&&(a=fb(l)?gP:t),db(l)&&(e=e||mP,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(KC(l)&&a!=="_self")return vP(e||"",a),new Vy(null);const h=window.open(e||"",a,u);O(h,n,"popup-blocked");try{h.focus()}catch{}return new Vy(h)}function vP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const wP="__/auth/handler",_P="emulator/auth/handler",bP=encodeURIComponent("fac");async function $d(n,e,t,r,i,s){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:oi,eventId:i};if(e instanceof wr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",rk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof bo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${bP}=${encodeURIComponent(c)}`:"";return`${IP(n)}?${yo(a).slice(1)}${l}`}function IP({config:n}){return n.emulator?up(n,_P):`https://${n.authDomain}/${wP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="webStorageSupport";class EP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ki,this._completeRedirectFn=Ju,this._overrideRedirectResult=Ep}async _openPopup(e,t,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $d(e,t,r,$a(),i);return yP(e,o,wc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await $d(e,t,r,$a(),i);return iD(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hP(e),r=new Kb(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nd,{type:nd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nd];o!==void 0&&t(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yb()||hp()||wo()}}const TP=EP;class xP{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return qn("unexpected MultiFactorSessionType")}}}class Tp extends xP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Tp(e)}_finalizeEnroll(e,t,r){return YR(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return pD(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qb{constructor(){}static assertion(e){return Tp._fromCredential(e)}}Qb.FACTOR_ID="phone";var Uy="@firebase/auth",By="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kP(n){Qr(new Zn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vb(n)},l=new tR(r,i,s,c);return nR(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new Zn("auth-internal",e=>{const t=nt(e.getProvider("auth").getImmediate());return(r=>new SP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(Uy,By,AP(n)),Wn(Uy,By,"esm2017")}/**
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
 */const CP=5*60;G1("authIdTokenMaxAge");kP("Browser");/**
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
 */function Wi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=2e3;async function DP(n,e,t){var r;const{BuildInfo:i}=Wi();Dn(e.sessionId,"AuthEvent did not contain a session ID");const s=await MP(e.sessionId),o={};return wo()?o.ibi=i.packageName:yc()?o.apn=i.packageName:Ct(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,$d(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function PP(n){const{BuildInfo:e}=Wi(),t={};wo()?t.iosBundleId=e.packageName:yc()?t.androidPackageName=e.packageName:Ct(n,"operation-not-supported-in-this-environment"),await Wb(n,t)}function NP(n){const{cordova:e}=Wi();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,HC()?"_blank":"_system","location=yes"),t(i)})})}async function OP(n,e,t){const{cordova:r}=Wi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(At(n,"redirect-cancelled-by-user"))},RP))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),yc()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function LP(n){var e,t,r,i,s,o,a,c,l,u;const h=Wi();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function MP(n){const e=FP(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function FP(n){if(Dn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=20;class VP extends Kb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function UP(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:qP(),postBody:null,tenantId:n.tenantId,error:At(n,"no-auth-event")}}function BP(n,e){return Vd()._set(Ud(n),e)}async function jy(n){const e=await Vd()._get(Ud(n));return e&&await Vd()._remove(Ud(n)),e}function jP(n,e){var t,r;const i=HP(e);if(i.includes("/__/auth/callback")){const s=Sl(i),o=s.firebaseError?zP(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?At(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function qP(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<$P;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Vd(){return cn(vp)}function Ud(n){return Ui("authEvent",n.config.apiKey,n.name)}function zP(n){try{return JSON.parse(n)}catch{return null}}function HP(n){const e=Sl(n),t=e.link?decodeURIComponent(e.link):void 0,r=Sl(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Sl(i).link||i||r||t||n}function Sl(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return xs(t.join("?"))}/**
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
 */const KP=500;class GP{constructor(){this._redirectPersistence=Ki,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ju,this._overrideRedirectResult=Ep}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new VP(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ct(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){LP(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),jD(),await this._originValidation(e);const o=UP(e,r,i);await BP(e,o);const a=await DP(e,o,t),c=await NP(a);return OP(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PP(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Wi(),o=setTimeout(async()=>{await jy(e),t.onEvent(qy())},KP),a=async u=>{clearTimeout(o);const h=await jy(e);let d=null;h&&(u!=null&&u.url)&&(d=jP(h,u.url)),t.onEvent(d||qy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,l=`${s.packageName.toLowerCase()}://`;Wi().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const WP=GP;function qy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:At("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(n,e){nt(n)._logFramework(e)}var YP="@firebase/auth-compat",XP="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=1e3;function pa(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function ZP(){return pa()==="http:"||pa()==="https:"}function Yb(n=Ge()){return!!((pa()==="file:"||pa()==="ionic:"||pa()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function eN(){return rp()||np()}function tN(){return H_()&&(document==null?void 0:document.documentMode)===11}function nN(n=Ge()){return/Edge\/\d+/.test(n)}function rN(n=Ge()){return tN()||nN(n)}function Xb(){try{const n=self.localStorage,e=wc();if(n)return n.setItem(e,"1"),n.removeItem(e),rN()?La():!0}catch{return xp()&&La()}return!1}function xp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function rd(){return(ZP()||z_()||Yb())&&!eN()&&Xb()&&!xp()}function Jb(){return Yb()&&typeof document<"u"}async function iN(){return Jb()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},JP);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function sN(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on={LOCAL:"local",NONE:"none",SESSION:"session"},Fo=O,Zb="persistence";function oN(n,e){if(Fo(Object.values(on).includes(e),n,"invalid-persistence-type"),rp()){Fo(e!==on.SESSION,n,"unsupported-persistence-type");return}if(np()){Fo(e===on.NONE,n,"unsupported-persistence-type");return}if(xp()){Fo(e===on.NONE||e===on.LOCAL&&La(),n,"unsupported-persistence-type");return}Fo(e===on.NONE||Xb(),n,"unsupported-persistence-type")}async function Bd(n){await n._initializationPromise;const e=e0(),t=Ui(Zb,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function aN(n,e){const t=e0();if(!t)return[];const r=Ui(Zb,n,e);switch(t.getItem(r)){case on.NONE:return[Ks];case on.LOCAL:return[ja,Ki];case on.SESSION:return[Ki];default:return[]}}function e0(){var n;try{return((n=sN())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=O;class $r{constructor(){this.browserResolver=cn(TP),this.cordovaResolver=cn(WP),this.underlyingResolver=null,this._redirectPersistence=Ki,this._completeRedirectFn=Ju,this._overrideRedirectResult=Ep}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Jb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return cN(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await iN();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n){return n.unwrap()}function lN(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(n){return n0(n)}function hN(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new dN(n,WR(n,e))}else if(r){const i=n0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function n0(n){const{_tokenResponse:e}=n instanceof Bt?n.customData:n;if(!e)return null;if(!(n instanceof Bt)&&"temporaryProof"in e&&"phoneNumber"in e)return Gi.credentialFromResult(n);const t=e.providerId;if(!t||t===Mo.PASSWORD)return null;let r;switch(t){case Mo.GOOGLE:r=Vn;break;case Mo.FACEBOOK:r=$n;break;case Mo.GITHUB:r=Un;break;case Mo.TWITTER:r=Bn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Gs._create(t,a):er._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Ps(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Bt?r.credentialFromError(n):r.credentialFromResult(n)}function Ht(n,e){return e.catch(t=>{throw t instanceof Bt&&hN(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:uN(t),additionalUserInfo:GR(t),user:ar.getOrCreate(i)}})}async function jd(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Ht(n,t.confirm(r))}}class dN{constructor(e,t){this.resolver=t,this.auth=lN(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ht(t0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._delegate=e,this.multiFactor=JR(e)}static getOrCreate(e){return ar.USER_MAP.has(e)||ar.USER_MAP.set(e,new ar(e)),ar.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ht(this.auth,Rb(this._delegate,e))}async linkWithPhoneNumber(e,t){return jd(this.auth,CD(this._delegate,e,t))}async linkWithPopup(e){return Ht(this.auth,$D(this._delegate,e,$r))}async linkWithRedirect(e){return await Bd(nt(this.auth)),GD(this._delegate,e,$r)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ht(this.auth,Db(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return jd(this.auth,RD(this._delegate,e,t))}reauthenticateWithPopup(e){return Ht(this.auth,FD(this._delegate,e,$r))}async reauthenticateWithRedirect(e){return await Bd(nt(this.auth)),HD(this._delegate,e,$r)}sendEmailVerification(e){return MR(this._delegate,e)}async unlink(e){return await IR(this._delegate,e),this}updateEmail(e){return UR(this._delegate,e)}updatePassword(e){return BR(this._delegate,e)}updatePhoneNumber(e){return DD(this._delegate,e)}updateProfile(e){return VR(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return FR(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ar.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=O;class qd{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;$o(r,"invalid-api-key",{appName:e.name}),$o(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?$r:void 0;this._delegate=t.initialize({options:{persistence:fN(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(SC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ar.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){rR(this._delegate,e,t)}applyActionCode(e){return AR(this._delegate,e)}checkActionCode(e){return Pb(this._delegate,e)}confirmPasswordReset(e,t){return SR(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ht(this._delegate,CR(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return LR(this._delegate,e)}isSignInWithEmailLink(e){return PR(this._delegate,e)}async getRedirectResult(){$o(rd(),this._delegate,"operation-not-supported-in-this-environment");const e=await QD(this._delegate,$r);return e?Ht(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){QP(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=zy(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=zy(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return DR(this._delegate,e,t)}sendPasswordResetEmail(e,t){return xR(this._delegate,e,t||void 0)}async setPersistence(e){oN(this._delegate,e);let t;switch(e){case on.SESSION:t=Ki;break;case on.LOCAL:t=await cn(ja)._isAvailable()?ja:vp;break;case on.NONE:t=Ks;break;default:return Ct("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ht(this._delegate,bR(this._delegate))}signInWithCredential(e){return Ht(this._delegate,Wu(this._delegate,e))}signInWithCustomToken(e){return Ht(this._delegate,TR(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ht(this._delegate,RR(this._delegate,e,t))}signInWithEmailLink(e,t){return Ht(this._delegate,NR(this._delegate,e,t))}signInWithPhoneNumber(e,t){return jd(this._delegate,kD(this._delegate,e,t))}async signInWithPopup(e){return $o(rd(),this._delegate,"operation-not-supported-in-this-environment"),Ht(this._delegate,MD(this._delegate,e,$r))}async signInWithRedirect(e){return $o(rd(),this._delegate,"operation-not-supported-in-this-environment"),await Bd(this._delegate),qD(this._delegate,e,$r)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return kR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}qd.Persistence=on;function zy(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&ar.getOrCreate(o)),error:e,complete:t}}function fN(n,e){const t=aN(n,e);if(typeof self<"u"&&!t.includes(ja)&&t.push(ja),typeof window<"u")for(const r of[vp,Ki])t.includes(r)||t.push(r);return t.includes(Ks)||t.push(Ks),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.providerId="phone",this._delegate=new Gi(t0(bn.auth()))}static credential(e,t){return Gi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Sp.PHONE_SIGN_IN_METHOD=Gi.PHONE_SIGN_IN_METHOD;Sp.PROVIDER_ID=Gi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=O;class gN{constructor(e,t,r=bn.app()){var i;pN((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new SD(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN="auth-compat";function yN(n){n.INTERNAL.registerComponent(new Zn(mN,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new qd(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ys.EMAIL_SIGNIN,PASSWORD_RESET:ys.PASSWORD_RESET,RECOVER_EMAIL:ys.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ys.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ys.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ys.VERIFY_EMAIL}},EmailAuthProvider:ai,FacebookAuthProvider:$n,GithubAuthProvider:Un,GoogleAuthProvider:Vn,OAuthProvider:Ps,SAMLAuthProvider:Wl,PhoneAuthProvider:Sp,PhoneMultiFactorGenerator:Qb,RecaptchaVerifier:gN,TwitterAuthProvider:Bn,Auth:qd,AuthCredential:_o,Error:Bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(YP,XP)}yN(bn);const vN=["onSubmit"],wN=f("h1",null,"Login",-1),_N={class:"pt-2"},bN={class:"pt-2"},IN=f("button",{class:"py-3 px-5 text-white bg-green-800 rounded-xl"},"Login",-1),EN={__name:"LoginView",setup(n){const e=ep();let t=xe(!1),r=xe("");const i=xe(""),s=xe(""),o=async()=>{i.value!==""&&s.value!==""?bn.auth().signInWithEmailAndPassword(i.value,s.value).then(()=>{e.push("/home")}).catch(a=>{switch(t.value=!0,t.code){case"auth/invalid-email":r.value="Invalid email";break;case"auth/user-not-found":r.value="No account with that email was found";break;case"auth/wrong-password":r.value="Incorrect password";break;default:r.value="Email or password was incorrect";break}}):(t.value=!0,r.value="Please fill out all the fields!")};return(a,c)=>{const l=ss("RouterLink");return se(),me("form",{class:"flex gap-2 flex-col",onSubmit:qs(o,["stop","prevent"])},[wN,dt(f("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Email"},null,512),[[Tn,i.value]]),dt(f("input",{"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),type:"password",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Password"},null,512),[[Tn,s.value]]),dt(f("div",{class:"errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"},De(re(r)),513),[[ca,re(t)]]),f("p",_N,[ie(l,{to:"/forgot-password",class:"underline"},{default:Pe(()=>[fe("Forgot Password?")]),_:1})]),f("p",bN,[fe(" New here? "),ie(l,{to:"/register",class:"underline"},{default:Pe(()=>[fe("Create an account!")]),_:1})]),IN],40,vN)}}};var TN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Ap=Ap||{},ce=TN||self;function Zu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function bc(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function xN(n){return Object.prototype.hasOwnProperty.call(n,id)&&n[id]||(n[id]=++SN)}var id="closure_uid_"+(1e9*Math.random()>>>0),SN=0;function AN(n,e,t){return n.call.apply(n.bind,arguments)}function kN(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ot(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ot=AN:Ot=kN,Ot.apply(null,arguments)}function Zc(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function wt(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ci(){this.s=this.s,this.o=this.o}var CN=0;ci.prototype.s=!1;ci.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),CN!=0)&&xN(this)};ci.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const r0=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function kp(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Hy(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Zu(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Lt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var RN=function(){if(!ce.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ce.addEventListener("test",()=>{},e),ce.removeEventListener("test",()=>{},e)}catch{}return n}();function qa(n){return/^[\s\xa0]*$/.test(n)}function eh(){var n=ce.navigator;return n&&(n=n.userAgent)?n:""}function jn(n){return eh().indexOf(n)!=-1}function Cp(n){return Cp[" "](n),n}Cp[" "]=function(){};function DN(n,e){var t=EO;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var PN=jn("Opera"),Ws=jn("Trident")||jn("MSIE"),i0=jn("Edge"),zd=i0||Ws,s0=jn("Gecko")&&!(eh().toLowerCase().indexOf("webkit")!=-1&&!jn("Edge"))&&!(jn("Trident")||jn("MSIE"))&&!jn("Edge"),NN=eh().toLowerCase().indexOf("webkit")!=-1&&!jn("Edge");function o0(){var n=ce.document;return n?n.documentMode:void 0}var Hd;e:{var sd="",od=function(){var n=eh();if(s0)return/rv:([^\);]+)(\)|;)/.exec(n);if(i0)return/Edge\/([\d\.]+)/.exec(n);if(Ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(NN)return/WebKit\/(\S+)/.exec(n);if(PN)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(od&&(sd=od?od[1]:""),Ws){var ad=o0();if(ad!=null&&ad>parseFloat(sd)){Hd=String(ad);break e}}Hd=sd}var Kd;if(ce.document&&Ws){var Ky=o0();Kd=Ky||parseInt(Hd,10)||void 0}else Kd=void 0;var ON=Kd;function za(n,e){if(Lt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(s0){e:{try{Cp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:LN[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&za.$.h.call(this)}}wt(za,Lt);var LN={2:"touch",3:"pen",4:"mouse"};za.prototype.h=function(){za.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ic="closure_listenable_"+(1e6*Math.random()|0),MN=0;function FN(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++MN,this.fa=this.ia=!1}function th(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Rp(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function $N(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function a0(n){const e={};for(const t in n)e[t]=n[t];return e}const Gy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function c0(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Gy.length;s++)t=Gy[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function nh(n){this.src=n,this.g={},this.h=0}nh.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Wd(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new FN(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Gd(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=r0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(th(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Wd(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Dp="closure_lm_"+(1e6*Math.random()|0),cd={};function l0(n,e,t,r,i){if(r&&r.once)return h0(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)l0(n,e[s],t,r,i);return null}return t=Op(t),n&&n[Ic]?n.O(e,t,bc(r)?!!r.capture:!!r,i):u0(n,e,t,!1,r,i)}function u0(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=bc(i)?!!i.capture:!!i,a=Np(n);if(a||(n[Dp]=a=new nh(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=VN(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)RN||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(f0(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function VN(){function n(t){return e.call(n.src,n.listener,t)}const e=UN;return n}function h0(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)h0(n,e[s],t,r,i);return null}return t=Op(t),n&&n[Ic]?n.P(e,t,bc(r)?!!r.capture:!!r,i):u0(n,e,t,!0,r,i)}function d0(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)d0(n,e[s],t,r,i);else r=bc(r)?!!r.capture:!!r,t=Op(t),n&&n[Ic]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Wd(s,t,r,i),-1<t&&(th(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Np(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Wd(e,t,r,i)),(t=-1<n?e[n]:null)&&Pp(t))}function Pp(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Ic])Gd(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(f0(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Np(e))?(Gd(t,n),t.h==0&&(t.src=null,e[Dp]=null)):th(n)}}}function f0(n){return n in cd?cd[n]:cd[n]="on"+n}function UN(n,e){if(n.fa)n=!0;else{e=new za(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Pp(n),n=t.call(r,e)}return n}function Np(n){return n=n[Dp],n instanceof nh?n:null}var ld="__closure_events_fn_"+(1e9*Math.random()>>>0);function Op(n){return typeof n=="function"?n:(n[ld]||(n[ld]=function(e){return n.handleEvent(e)}),n[ld])}function vt(){ci.call(this),this.i=new nh(this),this.S=this,this.J=null}wt(vt,ci);vt.prototype[Ic]=!0;vt.prototype.removeEventListener=function(n,e,t,r){d0(this,n,e,t,r)};function kt(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Lt(e,n);else if(e instanceof Lt)e.target=e.target||n;else{var i=e;e=new Lt(r,n),c0(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=el(o,r,!0,e)&&i}if(o=e.g=n,i=el(o,r,!0,e)&&i,i=el(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=el(o,r,!1,e)&&i}vt.prototype.N=function(){if(vt.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)th(t[r]);delete n.g[e],n.h--}}this.J=null};vt.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};vt.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function el(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Gd(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lp=ce.JSON.stringify;class BN{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function jN(){var n=Mp;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class qN{constructor(){this.h=this.g=null}add(e,t){const r=p0.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var p0=new BN(()=>new zN,n=>n.reset());class zN{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function HN(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function KN(n){ce.setTimeout(()=>{throw n},0)}let Ha,Ka=!1,Mp=new qN,g0=()=>{const n=ce.Promise.resolve(void 0);Ha=()=>{n.then(GN)}};var GN=()=>{for(var n;n=jN();){try{n.h.call(n.g)}catch(t){KN(t)}var e=p0;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ka=!1};function rh(n,e){vt.call(this),this.h=n||1,this.g=e||ce,this.j=Ot(this.qb,this),this.l=Date.now()}wt(rh,vt);B=rh.prototype;B.ga=!1;B.T=null;B.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),kt(this,"tick"),this.ga&&(Fp(this),this.start()))}};B.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fp(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}B.N=function(){rh.$.N.call(this),Fp(this),delete this.g};function $p(n,e,t){if(typeof n=="function")t&&(n=Ot(n,t));else if(n&&typeof n.handleEvent=="function")n=Ot(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ce.setTimeout(n,e||0)}function m0(n){n.g=$p(()=>{n.g=null,n.i&&(n.i=!1,m0(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class WN extends ci{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:m0(this)}N(){super.N(),this.g&&(ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ga(n){ci.call(this),this.h=n,this.g={}}wt(Ga,ci);var Wy=[];function y0(n,e,t,r){Array.isArray(t)||(t&&(Wy[0]=t.toString()),t=Wy);for(var i=0;i<t.length;i++){var s=l0(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function v0(n){Rp(n.g,function(e,t){this.g.hasOwnProperty(t)&&Pp(e)},n),n.g={}}Ga.prototype.N=function(){Ga.$.N.call(this),v0(this)};Ga.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ih(){this.g=!0}ih.prototype.Ea=function(){this.g=!1};function QN(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function YN(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Ss(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+JN(n,t)+(r?" "+r:"")})}function XN(n,e){n.info(function(){return"TIMEOUT: "+e})}ih.prototype.info=function(){};function JN(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lp(t)}catch{return e}}var cs={},Qy=null;function sh(){return Qy=Qy||new vt}cs.Ta="serverreachability";function w0(n){Lt.call(this,cs.Ta,n)}wt(w0,Lt);function Wa(n){const e=sh();kt(e,new w0(e))}cs.STAT_EVENT="statevent";function _0(n,e){Lt.call(this,cs.STAT_EVENT,n),this.stat=e}wt(_0,Lt);function Ut(n){const e=sh();kt(e,new _0(e,n))}cs.Ua="timingevent";function b0(n,e){Lt.call(this,cs.Ua,n),this.size=e}wt(b0,Lt);function Ec(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ce.setTimeout(function(){n()},e)}var oh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},I0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vp(){}Vp.prototype.h=null;function Yy(n){return n.h||(n.h=n.i())}function E0(){}var Tc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Up(){Lt.call(this,"d")}wt(Up,Lt);function Bp(){Lt.call(this,"c")}wt(Bp,Lt);var Qd;function ah(){}wt(ah,Vp);ah.prototype.g=function(){return new XMLHttpRequest};ah.prototype.i=function(){return{}};Qd=new ah;function xc(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Ga(this),this.P=ZN,n=zd?125:void 0,this.V=new rh(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new T0}function T0(){this.i=null,this.g="",this.h=!1}var ZN=45e3,Yd={},Jl={};B=xc.prototype;B.setTimeout=function(n){this.P=n};function Xd(n,e,t){n.L=1,n.v=lh(pr(e)),n.s=t,n.S=!0,x0(n,null)}function x0(n,e){n.G=Date.now(),Sc(n),n.A=pr(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),N0(t.i,"t",r),n.C=0,t=n.l.J,n.h=new T0,n.g=eI(n.l,t?e:null,!n.s),0<n.O&&(n.M=new WN(Ot(n.Pa,n,n.g),n.O)),y0(n.U,n.g,"readystatechange",n.nb),e=n.I?a0(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Wa(),QN(n.j,n.u,n.A,n.m,n.W,n.s)}B.nb=function(n){n=n.target;const e=this.M;e&&zn(n)==3?e.l():this.Pa(n)};B.Pa=function(n){try{if(n==this.g)e:{const u=zn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||zd||this.g&&(this.h.h||this.g.ja()||ev(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Wa(3):Wa(2)),ch(this);var t=this.g.da();this.ca=t;t:if(S0(this)){var r=ev(this.g);n="";var i=r.length,s=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pi(this),ga(this);var o="";break t}this.h.i=new ce.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,YN(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qa(a)){var l=a;break t}}l=null}if(t=l)Ss(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jd(this,t);else{this.i=!1,this.o=3,Ut(12),Pi(this),ga(this);break e}}this.S?(A0(this,u,o),zd&&this.i&&u==3&&(y0(this.U,this.V,"tick",this.mb),this.V.start())):(Ss(this.j,this.m,o,null),Jd(this,o)),u==4&&Pi(this),this.i&&!this.J&&(u==4?Y0(this.l,this):(this.i=!1,Sc(this)))}else _O(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),Pi(this),ga(this)}}}catch{}finally{}};function S0(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function A0(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=eO(n,t),i==Jl){e==4&&(n.o=4,Ut(14),r=!1),Ss(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Yd){n.o=4,Ut(15),Ss(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Ss(n.j,n.m,i,null),Jd(n,i);S0(n)&&i!=Jl&&i!=Yd&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ut(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Gp(e),e.M=!0,Ut(11))):(Ss(n.j,n.m,t,"[Invalid Chunked Response]"),Pi(n),ga(n))}B.mb=function(){if(this.g){var n=zn(this.g),e=this.g.ja();this.C<e.length&&(ch(this),A0(this,n,e),this.i&&n!=4&&Sc(this))}};function eO(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Jl:(t=Number(e.substring(t,r)),isNaN(t)?Yd:(r+=1,r+t>e.length?Jl:(e=e.slice(r,r+t),n.C=r+t,e)))}B.cancel=function(){this.J=!0,Pi(this)};function Sc(n){n.Y=Date.now()+n.P,k0(n,n.P)}function k0(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ec(Ot(n.lb,n),e)}function ch(n){n.B&&(ce.clearTimeout(n.B),n.B=null)}B.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(XN(this.j,this.A),this.L!=2&&(Wa(),Ut(17)),Pi(this),this.o=2,ga(this)):k0(this,this.Y-n)};function ga(n){n.l.H==0||n.J||Y0(n.l,n)}function Pi(n){ch(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Fp(n.V),v0(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Jd(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Zd(t.i,n))){if(!n.K&&Zd(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)tu(t),dh(t);else break e;Kp(t),Ut(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Ec(Ot(t.ib,t),6e3));if(1>=M0(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Ni(t,11)}else if((n.K||t.g==n)&&tu(t),!qa(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(jp(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Be(r.I,r.F,v))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Z0(r,r.J?r.pa:null,r.Y),o.K){F0(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ch(a),Sc(a)),r.g=o}else W0(r);0<t.j.length&&fh(t)}else l[0]!="stop"&&l[0]!="close"||Ni(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ni(t,7):Hp(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Wa(4)}catch{}}function tO(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Zu(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function nO(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Zu(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function C0(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Zu(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=nO(n),r=tO(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var R0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rO(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ji(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ji){this.h=n.h,Zl(this,n.j),this.s=n.s,this.g=n.g,eu(this,n.m),this.l=n.l;var e=n.i,t=new Qa;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Xy(this,t),this.o=n.o}else n&&(e=String(n).match(R0))?(this.h=!1,Zl(this,e[1]||"",!0),this.s=Jo(e[2]||""),this.g=Jo(e[3]||"",!0),eu(this,e[4]),this.l=Jo(e[5]||"",!0),Xy(this,e[6]||"",!0),this.o=Jo(e[7]||"")):(this.h=!1,this.i=new Qa(null,this.h))}ji.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Zo(e,Jy,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Zo(e,Jy,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Zo(t,t.charAt(0)=="/"?oO:sO,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Zo(t,cO)),n.join("")};function pr(n){return new ji(n)}function Zl(n,e,t){n.j=t?Jo(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function eu(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Xy(n,e,t){e instanceof Qa?(n.i=e,lO(n.i,n.h)):(t||(e=Zo(e,aO)),n.i=new Qa(e,n.h))}function Be(n,e,t){n.i.set(e,t)}function lh(n){return Be(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Jo(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Zo(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,iO),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function iO(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Jy=/[#\/\?@]/g,sO=/[#\?:]/g,oO=/[#\?]/g,aO=/[#\?@]/g,cO=/#/g;function Qa(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function li(n){n.g||(n.g=new Map,n.h=0,n.i&&rO(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}B=Qa.prototype;B.add=function(n,e){li(this),this.i=null,n=Io(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function D0(n,e){li(n),e=Io(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function P0(n,e){return li(n),e=Io(n,e),n.g.has(e)}B.forEach=function(n,e){li(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};B.ta=function(){li(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};B.Z=function(n){li(this);let e=[];if(typeof n=="string")P0(this,n)&&(e=e.concat(this.g.get(Io(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};B.set=function(n,e){return li(this),this.i=null,n=Io(this,n),P0(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};B.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function N0(n,e,t){D0(n,e),0<t.length&&(n.i=null,n.g.set(Io(n,e),kp(t)),n.h+=t.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Io(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function lO(n,e){e&&!n.j&&(li(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(D0(this,r),N0(this,i,t))},n)),n.j=e}var uO=class{constructor(n,e){this.g=n,this.map=e}};function O0(n){this.l=n||hO,ce.PerformanceNavigationTiming?(n=ce.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ce.g&&ce.g.Ka&&ce.g.Ka()&&ce.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hO=10;function L0(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function M0(n){return n.h?1:n.g?n.g.size:0}function Zd(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function jp(n,e){n.g?n.g.add(e):n.h=e}function F0(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}O0.prototype.cancel=function(){if(this.i=$0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function $0(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return kp(n.i)}var dO=class{stringify(n){return ce.JSON.stringify(n,void 0)}parse(n){return ce.JSON.parse(n,void 0)}};function fO(){this.g=new dO}function pO(n,e,t){const r=t||"";try{C0(n,function(i,s){let o=i;bc(i)&&(o=Lp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function gO(n,e){const t=new ih;if(ce.Image){const r=new Image;r.onload=Zc(tl,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Zc(tl,t,r,"TestLoadImage: error",!1,e),r.onabort=Zc(tl,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zc(tl,t,r,"TestLoadImage: timeout",!1,e),ce.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function tl(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ac(n){this.l=n.fc||null,this.j=n.ob||!1}wt(Ac,Vp);Ac.prototype.g=function(){return new uh(this.l,this.j)};Ac.prototype.i=function(n){return function(){return n}}({});function uh(n,e){vt.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=qp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wt(uh,vt);var qp=0;B=uh.prototype;B.open=function(n,e){if(this.readyState!=qp)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ya(this)};B.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||ce).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kc(this)),this.readyState=qp};B.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ya(this)),this.g&&(this.readyState=3,Ya(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ce.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;V0(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function V0(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}B.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?kc(this):Ya(this),this.readyState==3&&V0(this)}};B.Za=function(n){this.g&&(this.response=this.responseText=n,kc(this))};B.Ya=function(n){this.g&&(this.response=n,kc(this))};B.ka=function(){this.g&&kc(this)};function kc(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ya(n)}B.setRequestHeader=function(n,e){this.v.append(n,e)};B.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ya(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(uh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var mO=ce.JSON.parse;function Ye(n){vt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=U0,this.L=this.M=!1}wt(Ye,vt);var U0="",yO=/^https?$/i,vO=["POST","PUT"];B=Ye.prototype;B.Oa=function(n){this.M=n};B.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qd.g(),this.C=this.u?Yy(this.u):Yy(Qd),this.g.onreadystatechange=Ot(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Zy(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=ce.FormData&&n instanceof ce.FormData,!(0<=r0(vO,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{q0(this),0<this.B&&((this.L=wO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ot(this.ua,this)):this.A=$p(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Zy(this,s)}};function wO(n){return Ws&&typeof n.timeout=="number"&&n.ontimeout!==void 0}B.ua=function(){typeof Ap<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function Zy(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,B0(n),hh(n)}function B0(n){n.F||(n.F=!0,kt(n,"complete"),kt(n,"error"))}B.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,kt(this,"complete"),kt(this,"abort"),hh(this))};B.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hh(this,!0)),Ye.$.N.call(this)};B.La=function(){this.s||(this.G||this.v||this.l?j0(this):this.kb())};B.kb=function(){j0(this)};function j0(n){if(n.h&&typeof Ap<"u"&&(!n.C[1]||zn(n)!=4||n.da()!=2)){if(n.v&&zn(n)==4)$p(n.La,0,n);else if(kt(n,"readystatechange"),zn(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(R0)[1]||null;!i&&ce.self&&ce.self.location&&(i=ce.self.location.protocol.slice(0,-1)),r=!yO.test(i?i.toLowerCase():"")}t=r}if(t)kt(n,"complete"),kt(n,"success");else{n.m=6;try{var s=2<zn(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",B0(n)}}finally{hh(n)}}}}function hh(n,e){if(n.g){q0(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||kt(n,"ready");try{t.onreadystatechange=r}catch{}}}function q0(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(ce.clearTimeout(n.A),n.A=null)}B.isActive=function(){return!!this.g};function zn(n){return n.g?n.g.readyState:0}B.da=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}};B.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),mO(e)}};function ev(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case U0:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function _O(n){const e={};n=(n.g&&2<=zn(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(qa(n[r]))continue;var t=HN(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}$N(e,function(r){return r.join(", ")})}B.Ia=function(){return this.m};B.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function z0(n){let e="";return Rp(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function zp(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=z0(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Be(n,e,t))}function Vo(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function H0(n){this.Ga=0,this.j=[],this.l=new ih,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vo("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vo("baseRetryDelayMs",5e3,n),this.hb=Vo("retryDelaySeedMs",1e4,n),this.eb=Vo("forwardChannelMaxRetries",2,n),this.xa=Vo("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new O0(n&&n.concurrentRequestLimit),this.Ja=new fO,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}B=H0.prototype;B.ra=8;B.H=1;function Hp(n){if(K0(n),n.H==3){var e=n.W++,t=pr(n.I);if(Be(t,"SID",n.K),Be(t,"RID",e),Be(t,"TYPE","terminate"),Cc(n,t),e=new xc(n,n.l,e),e.L=2,e.v=lh(pr(t)),t=!1,ce.navigator&&ce.navigator.sendBeacon)try{t=ce.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&ce.Image&&(new Image().src=e.v,t=!0),t||(e.g=eI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Sc(e)}J0(n)}function dh(n){n.g&&(Gp(n),n.g.cancel(),n.g=null)}function K0(n){dh(n),n.u&&(ce.clearTimeout(n.u),n.u=null),tu(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&ce.clearTimeout(n.m),n.m=null)}function fh(n){if(!L0(n.i)&&!n.m){n.m=!0;var e=n.Na;Ha||g0(),Ka||(Ha(),Ka=!0),Mp.add(e,n),n.C=0}}function bO(n,e){return M0(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ec(Ot(n.Na,n,e),X0(n,n.C)),n.C++,!0)}B.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new xc(this,this.l,n);let s=this.s;if(this.U&&(s?(s=a0(s),c0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=G0(this,i,e),t=pr(this.I),Be(t,"RID",n),Be(t,"CVER",22),this.F&&Be(t,"X-HTTP-Session-Id",this.F),Cc(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(z0(s)))+"&"+e:this.o&&zp(t,this.o,s)),jp(this.i,i),this.bb&&Be(t,"TYPE","init"),this.P?(Be(t,"$req",e),Be(t,"SID","null"),i.aa=!0,Xd(i,t,null)):Xd(i,t,e),this.H=2}}else this.H==3&&(n?tv(this,n):this.j.length==0||L0(this.i)||tv(this))};function tv(n,e){var t;e?t=e.m:t=n.W++;const r=pr(n.I);Be(r,"SID",n.K),Be(r,"RID",t),Be(r,"AID",n.V),Cc(n,r),n.o&&n.s&&zp(r,n.o,n.s),t=new xc(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=G0(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),jp(n.i,t),Xd(t,r,e)}function Cc(n,e){n.na&&Rp(n.na,function(t,r){Be(e,r,t)}),n.h&&C0({},function(t,r){Be(e,r,t)})}function G0(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Ot(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{pO(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function W0(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Ha||g0(),Ka||(Ha(),Ka=!0),Mp.add(e,n),n.A=0}}function Kp(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ec(Ot(n.Ma,n),X0(n,n.A)),n.A++,!0)}B.Ma=function(){if(this.u=null,Q0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Ec(Ot(this.jb,this),n)}};B.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ut(10),dh(this),Q0(this))};function Gp(n){n.B!=null&&(ce.clearTimeout(n.B),n.B=null)}function Q0(n){n.g=new xc(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=pr(n.wa);Be(e,"RID","rpc"),Be(e,"SID",n.K),Be(e,"AID",n.V),Be(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Be(e,"TO",n.qa),Be(e,"TYPE","xmlhttp"),Cc(n,e),n.o&&n.s&&zp(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=lh(pr(e)),t.s=null,t.S=!0,x0(t,n)}B.ib=function(){this.v!=null&&(this.v=null,dh(this),Kp(this),Ut(19))};function tu(n){n.v!=null&&(ce.clearTimeout(n.v),n.v=null)}function Y0(n,e){var t=null;if(n.g==e){tu(n),Gp(n),n.g=null;var r=2}else if(Zd(n.i,e))t=e.F,F0(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=sh(),kt(r,new b0(r,t)),fh(n)}else W0(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&bO(n,e)||r==2&&Kp(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Ni(n,5);break;case 4:Ni(n,10);break;case 3:Ni(n,6);break;default:Ni(n,2)}}}function X0(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Ni(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Ot(n.pb,n);t||(t=new ji("//www.google.com/images/cleardot.gif"),ce.location&&ce.location.protocol=="http"||Zl(t,"https"),lh(t)),gO(t.toString(),r)}else Ut(2);n.H=0,n.h&&n.h.za(e),J0(n),K0(n)}B.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ut(2)):(this.l.info("Failed to ping google.com"),Ut(1))};function J0(n){if(n.H=0,n.ma=[],n.h){const e=$0(n.i);(e.length!=0||n.j.length!=0)&&(Hy(n.ma,e),Hy(n.ma,n.j),n.i.i.length=0,kp(n.j),n.j.length=0),n.h.ya()}}function Z0(n,e,t){var r=t instanceof ji?pr(t):new ji(t);if(r.g!="")e&&(r.g=e+"."+r.g),eu(r,r.m);else{var i=ce.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ji(null);r&&Zl(s,r),e&&(s.g=e),i&&eu(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Be(r,t,e),Be(r,"VER",n.ra),Cc(n,r),r}function eI(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Ye(new Ac({ob:!0})):new Ye(n.va),e.Oa(n.J),e}B.isActive=function(){return!!this.h&&this.h.isActive(this)};function tI(){}B=tI.prototype;B.Ba=function(){};B.Aa=function(){};B.za=function(){};B.ya=function(){};B.isActive=function(){return!0};B.Va=function(){};function nu(){if(Ws&&!(10<=Number(ON)))throw Error("Environmental error: no available transport.")}nu.prototype.g=function(n,e){return new ln(n,e)};function ln(n,e){vt.call(this),this.g=new H0(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!qa(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qa(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Eo(this)}wt(ln,vt);ln.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ut(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Z0(n,null,n.Y),fh(n)};ln.prototype.close=function(){Hp(this.g)};ln.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Lp(n),n=t);e.j.push(new uO(e.fb++,n)),e.H==3&&fh(e)};ln.prototype.N=function(){this.g.h=null,delete this.j,Hp(this.g),delete this.g,ln.$.N.call(this)};function nI(n){Up.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}wt(nI,Up);function rI(){Bp.call(this),this.status=1}wt(rI,Bp);function Eo(n){this.g=n}wt(Eo,tI);Eo.prototype.Ba=function(){kt(this.g,"a")};Eo.prototype.Aa=function(n){kt(this.g,new nI(n))};Eo.prototype.za=function(n){kt(this.g,new rI)};Eo.prototype.ya=function(){kt(this.g,"b")};function IO(){this.blockSize=-1}function Pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}wt(Pn,IO);Pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ud(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Pn.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)ud(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){ud(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){ud(this,r),i=0;break}}this.h=i,this.i+=e};Pn.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function Oe(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var EO={};function Wp(n){return-128<=n&&128>n?DN(n,function(e){return new Oe([e|0],0>e?-1:0)}):new Oe([n|0],0>n?-1:0)}function Hn(n){if(isNaN(n)||!isFinite(n))return Ls;if(0>n)return Tt(Hn(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=ef;return new Oe(e,0)}function iI(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Tt(iI(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Hn(Math.pow(e,8)),r=Ls,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Hn(Math.pow(e,s)),r=r.R(s).add(Hn(o))):(r=r.R(t),r=r.add(Hn(o)))}return r}var ef=4294967296,Ls=Wp(0),tf=Wp(1),nv=Wp(16777216);B=Oe.prototype;B.ea=function(){if(dn(this))return-Tt(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:ef+r)*e,e*=ef}return n};B.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(cr(this))return"0";if(dn(this))return"-"+Tt(this).toString(n);for(var e=Hn(Math.pow(n,6)),t=this,r="";;){var i=iu(t,e).g;t=ru(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,cr(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};B.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function cr(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function dn(n){return n.h==-1}B.X=function(n){return n=ru(this,n),dn(n)?-1:cr(n)?0:1};function Tt(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new Oe(t,~n.h).add(tf)}B.abs=function(){return dn(this)?Tt(this):this};B.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new Oe(t,t[t.length-1]&-2147483648?-1:0)};function ru(n,e){return n.add(Tt(e))}B.R=function(n){if(cr(this)||cr(n))return Ls;if(dn(this))return dn(n)?Tt(this).R(Tt(n)):Tt(Tt(this).R(n));if(dn(n))return Tt(this.R(Tt(n)));if(0>this.X(nv)&&0>n.X(nv))return Hn(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,nl(t,2*r+2*i),t[2*r+2*i+1]+=s*c,nl(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,nl(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,nl(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new Oe(t,0)};function nl(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Uo(n,e){this.g=n,this.h=e}function iu(n,e){if(cr(e))throw Error("division by zero");if(cr(n))return new Uo(Ls,Ls);if(dn(n))return e=iu(Tt(n),e),new Uo(Tt(e.g),Tt(e.h));if(dn(e))return e=iu(n,Tt(e)),new Uo(Tt(e.g),e.h);if(30<n.g.length){if(dn(n)||dn(e))throw Error("slowDivide_ only works with positive integers.");for(var t=tf,r=e;0>=r.X(n);)t=rv(t),r=rv(r);var i=vs(t,1),s=vs(r,1);for(r=vs(r,2),t=vs(t,2);!cr(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=vs(r,1),t=vs(t,1)}return e=ru(n,i.R(e)),new Uo(i,e)}for(i=Ls;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Hn(t),o=s.R(e);dn(o)||0<o.X(n);)t-=r,s=Hn(t),o=s.R(e);cr(s)&&(s=tf),i=i.add(s),n=ru(n,o)}return new Uo(i,n)}B.gb=function(n){return iu(this,n).h};B.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new Oe(t,this.h&n.h)};B.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new Oe(t,this.h|n.h)};B.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new Oe(t,this.h^n.h)};function rv(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Oe(t,n.h)}function vs(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new Oe(i,n.h)}nu.prototype.createWebChannel=nu.prototype.g;ln.prototype.send=ln.prototype.u;ln.prototype.open=ln.prototype.m;ln.prototype.close=ln.prototype.close;oh.NO_ERROR=0;oh.TIMEOUT=8;oh.HTTP_ERROR=6;I0.COMPLETE="complete";E0.EventType=Tc;Tc.OPEN="a";Tc.CLOSE="b";Tc.ERROR="c";Tc.MESSAGE="d";vt.prototype.listen=vt.prototype.O;Ye.prototype.listenOnce=Ye.prototype.P;Ye.prototype.getLastError=Ye.prototype.Sa;Ye.prototype.getLastErrorCode=Ye.prototype.Ia;Ye.prototype.getStatus=Ye.prototype.da;Ye.prototype.getResponseJson=Ye.prototype.Wa;Ye.prototype.getResponseText=Ye.prototype.ja;Ye.prototype.send=Ye.prototype.ha;Ye.prototype.setWithCredentials=Ye.prototype.Oa;Pn.prototype.digest=Pn.prototype.l;Pn.prototype.reset=Pn.prototype.reset;Pn.prototype.update=Pn.prototype.j;Oe.prototype.add=Oe.prototype.add;Oe.prototype.multiply=Oe.prototype.R;Oe.prototype.modulo=Oe.prototype.gb;Oe.prototype.compare=Oe.prototype.X;Oe.prototype.toNumber=Oe.prototype.ea;Oe.prototype.toString=Oe.prototype.toString;Oe.prototype.getBits=Oe.prototype.D;Oe.fromNumber=Hn;Oe.fromString=iI;var TO=function(){return new nu},xO=function(){return sh()},hd=oh,SO=I0,AO=cs,iv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},kO=Ac,rl=E0,CO=Ye,RO=Pn,Ms=Oe;const sv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new qu("@firebase/firestore");function nf(){return Xr.logLevel}function DO(n){Xr.setLogLevel(n)}function P(n,...e){if(Xr.logLevel<=be.DEBUG){const t=e.map(Qp);Xr.debug(`Firestore (${To}): ${n}`,...t)}}function Je(n,...e){if(Xr.logLevel<=be.ERROR){const t=e.map(Qp);Xr.error(`Firestore (${To}): ${n}`,...t)}}function Nn(n,...e){if(Xr.logLevel<=be.WARN){const t=e.map(Qp);Xr.warn(`Firestore (${To}): ${n}`,...t)}}function Qp(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(n="Unexpected state"){const e=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: `+n;throw Je(e),new Error(e)}function Y(n,e){n||H()}function PO(n,e){n||H()}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(pt.UNAUTHENTICATED))}shutdown(){}}class OO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class LO{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new sI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new pt(e)}}class MO{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class FO{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new MO(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VO{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string"),this.T=t.token,new $O(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=UO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Qs(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function aI(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new C(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ke(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ke(0,0))}static max(){return new Q(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xa?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ie extends Xa{construct(e,t,r){return new Ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Ie(t)}static emptyPath(){return new Ie([])}}const BO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Xa{construct(e,t,r){return new Ze(e,t,r)}static isValidIdentifier(e){return BO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(t)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(Ie.fromString(e))}static fromName(e){return new V(Ie.fromString(e).popFirst(5))}static empty(){return new V(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new Ie(e.slice()))}}/**
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
 */class cI{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function rf(n){return n.fields.find(e=>e.kind===2)}function wi(n){return n.fields.filter(e=>e.kind!==2)}cI.UNKNOWN_ID=-1;class jO{constructor(e,t){this.fieldPath=e,this.kind=t}}class su{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new su(0,un.min())}}function lI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Ke(t+1,0):new Ke(t,r));return new un(i,V.empty(),e)}function uI(n){return new un(n.readTime,n.key,-1)}class un{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new un(Q.min(),V.empty(),-1)}static max(){return new un(Q.max(),V.empty(),-1)}}function Yp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=V.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(n){if(n.code!==I.FAILED_PRECONDITION||n.message!==hI)throw n;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _?t:_.resolve(t)}catch(t){return _.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_.reject(t)}static resolve(e){return new _((t,r)=>{t(e)})}static reject(e){return new _((t,r)=>{r(e)})}static waitFor(e){return new _((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=_.resolve(!1);for(const r of e)t=t.next(i=>i?_.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new _((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new mt,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new ma(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=Xp(r.target.error);this.v.reject(new ma(e,i))}}static open(e,t,r,i){try{return new ph(t,e.transaction(i,r))}catch(s){throw new ma(t,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new zO(t)}}class An{constructor(e,t,r){this.name=e,this.version=t,this.V=r,An.S(Ge())===12.2&&Je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Ii(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!La())return!1;if(An.C())return!0;const e=Ge(),t=An.S(e),r=0<t&&t<10,i=An.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new ma(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ma(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=ph.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),_.reject(l))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class qO{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ii(this.L.delete())}}class ma extends C{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function hi(n){return n.name==="IndexedDbTransactionError"}class zO{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(P("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ii(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Ii(this.store.add(e))}get(e){return Ii(this.store.get(e)).next(t=>(t===void 0&&(t=null),P("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Ii(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Ii(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new _((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new _((r,i)=>{t.onerror=s=>{const o=Xp(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new _((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new qO(a),l=t(a.primaryKey,a.value,c);if(l instanceof _){const u=l.catch(h=>(c.done(),_.reject(h)));r.push(u)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>_.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ii(n){return new _((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Xp(r.target.error);t(i)}})}let ov=!1;function Xp(n){const e=An.S(Ge());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ov||(ov=!0,setTimeout(()=>{throw r},0)),r}}return n}class HO{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){hi(t)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await ui(t)}await this.et(6e4)})}}class KO{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return _.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=uI(s);Yp(o,r)>0&&(r=o)}),new un(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Gt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Gt.ct=-1;function Rc(n){return n==null}function Ja(n){return n===0&&1/n==-1/0}function fI(n){return typeof n=="number"&&Number.isInteger(n)&&!Ja(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=av(e)),e=GO(n.get(t),e);return av(e)}function GO(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function av(n){return n+""}function Kn(n){const e=n.length;if(Y(e>=2),e===2)return Y(n.charAt(0)===""&&n.charAt(1)===""),Ie.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&H(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:H()}s=o+2}return new Ie(r)}/**
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
 */const cv=["userId","batchId"];/**
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
 */function Al(n,e){return[n,jt(e)]}function pI(n,e,t){return[n,jt(e),t]}const WO={},QO=["prefixPath","collectionGroup","readTime","documentId"],YO=["prefixPath","collectionGroup","documentId"],XO=["collectionGroup","readTime","prefixPath","documentId"],JO=["canonicalId","targetId"],ZO=["targetId","path"],eL=["path","targetId"],tL=["collectionId","parent"],nL=["indexId","uid"],rL=["uid","sequenceNumber"],iL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],sL=["indexId","uid","orderedDocumentKey"],oL=["userId","collectionPath","documentId"],aL=["userId","collectionPath","largestBatchId"],cL=["userId","collectionGroup","largestBatchId"],gI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],lL=[...gI,"documentOverlays"],mI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yI=mI,uL=[...yI,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends dI{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function _t(n,e){const t=U(n);return An.M(t.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ls(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.comparator=e,this.root=t||Et.EMPTY}insert(e,t){return new $e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new il(this.root,e,this.comparator,!1)}getReverseIterator(){return new il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new il(this.root,e,this.comparator,!0)}}class il{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Et(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(n,e,t,r,i){return this}insert(n,e,t){return new Et(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uv(this.data.getIterator())}getIteratorFrom(e){return new uv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new qe(this.comparator);return t.data=e,t}}class uv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ws(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Wt([])}unionWith(e){let t=new qe(Ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class wI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wI("Invalid base64 string: "+i):i}}(e);return new ut(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const dL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(n){if(Y(!!n),typeof n=="string"){let e=0;const t=dL.exec(n);if(Y(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(n.seconds),nanos:Qe(n.nanos)}}function Qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zr(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Jp(n){const e=n.mapValue.fields.__previous_value__;return gh(e)?Jp(e):e}function Za(n){const e=Jr(n.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,t,r,i,s,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ei{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},kl={nullValue:"NULL_VALUE"};function Qi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gh(n)?4:_I(n)?9007199254740991:10:H()}function tr(n,e){if(n===e)return!0;const t=Qi(n);if(t!==Qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Za(n).isEqual(Za(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Jr(r.timestampValue),o=Jr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Zr(r.bytesValue).isEqual(Zr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Qe(r.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qe(r.integerValue)===Qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Qe(r.doubleValue),o=Qe(i.doubleValue);return s===o?Ja(s)===Ja(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Qs(n.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(lv(s)!==lv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!tr(s[a],o[a])))return!1;return!0}(n,e);default:return H()}}function ec(n,e){return(n.values||[]).find(t=>tr(t,e))!==void 0}function ti(n,e){if(n===e)return 0;const t=Qi(n),r=Qi(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Qe(i.integerValue||i.doubleValue),a=Qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return hv(n.timestampValue,e.timestampValue);case 4:return hv(Za(n),Za(e));case 5:return ue(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Zr(i),a=Zr(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ue(Qe(i.latitude),Qe(s.latitude));return o!==0?o:ue(Qe(i.longitude),Qe(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ti(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Vr.mapValue&&s===Vr.mapValue)return 0;if(i===Vr.mapValue)return 1;if(s===Vr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=ti(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(n.mapValue,e.mapValue);default:throw H()}}function hv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Jr(n),r=Jr(e),i=ue(t.seconds,r.seconds);return i!==0?i:ue(t.nanos,r.nanos)}function Ys(n){return of(n)}function of(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Jr(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Zr(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,V.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=of(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${of(r.fields[a])}`;return s+"}"}(n.mapValue):H();var e,t}function Yi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function af(n){return!!n&&"integerValue"in n}function tc(n){return!!n&&"arrayValue"in n}function dv(n){return!!n&&"nullValue"in n}function fv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cl(n){return!!n&&"mapValue"in n}function ya(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ls(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ya(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ya(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _I(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function pL(n){return"nullValue"in n?kl:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Yi(ei.empty(),V.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:H()}function gL(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Yi(ei.empty(),V.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Vr:H()}function pv(n,e){const t=ti(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function gv(n,e){const t=ti(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ya(t)}setAll(e){let t=Ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=ya(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Cl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Cl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ls(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(ya(this.value))}}function bI(n){const e=[];return ls(n.fields,(t,r)=>{const i=new Ze([t]);if(Cl(r)){const s=bI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,Q.min(),Q.min(),Q.min(),xt.empty(),0)}static newFoundDocument(e,t,r,i){return new je(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new je(e,2,t,Q.min(),Q.min(),xt.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,Q.min(),Q.min(),xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ni{constructor(e,t){this.position=e,this.inclusive=t}}function mv(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),t.key):r=ti(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function mL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class II{}class ye extends II{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new yL(e,t,r):t==="array-contains"?new _L(e,r):t==="in"?new kI(e,r):t==="not-in"?new bL(e,r):t==="array-contains-any"?new IL(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new vL(e,r):new wL(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ti(t,this.value)):t!==null&&Qi(this.value)===Qi(t)&&this.matchesComparison(ti(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ne extends II{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ne(e,t)}matches(e){return Xs(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Xs(n){return n.op==="and"}function cf(n){return n.op==="or"}function Zp(n){return EI(n)&&Xs(n)}function EI(n){for(const e of n.filters)if(e instanceof Ne)return!1;return!0}function lf(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+Ys(n.value);if(Zp(n))return n.filters.map(e=>lf(e)).join(",");{const e=n.filters.map(t=>lf(t)).join(",");return`${n.op}(${e})`}}function TI(n,e){return n instanceof ye?function(t,r){return r instanceof ye&&t.op===r.op&&t.field.isEqual(r.field)&&tr(t.value,r.value)}(n,e):n instanceof Ne?function(t,r){return r instanceof Ne&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&TI(s,r.filters[o]),!0):!1}(n,e):void H()}function xI(n,e){const t=n.filters.concat(e);return Ne.create(t,n.op)}function SI(n){return n instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Ys(e.value)}`}(n):n instanceof Ne?function(e){return e.op.toString()+" {"+e.getFilters().map(SI).join(" ,")+"}"}(n):"Filter"}class yL extends ye{constructor(e,t,r){super(e,t,r),this.key=V.fromName(r.referenceValue)}matches(e){const t=V.comparator(e.key,this.key);return this.matchesComparison(t)}}class vL extends ye{constructor(e,t){super(e,"in",t),this.keys=AI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wL extends ye{constructor(e,t){super(e,"not-in",t),this.keys=AI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function AI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>V.fromName(r.referenceValue))}class _L extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tc(t)&&ec(t.arrayValue,this.value)}}class kI extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ec(this.value.arrayValue,t)}}class bL extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(ec(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ec(this.value.arrayValue,t)}}class IL extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ec(this.value.arrayValue,r))}}/**
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
 */class EL{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function uf(n,e=null,t=[],r=[],i=null,s=null,o=null){return new EL(n,e,t,r,i,s,o)}function Xi(n){const e=U(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>lf(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ys(r)).join(",")),e.dt=t}return e.dt}function Dc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mL(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!TI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yv(n.startAt,e.startAt)&&yv(n.endAt,e.endAt)}function ou(n){return V.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function au(n,e){return n.filters.filter(t=>t instanceof ye&&t.field.isEqual(e))}function vv(n,e,t){let r=kl,i=!0;for(const s of au(n,e)){let o=kl,a=!0;switch(s.op){case"<":case"<=":o=pL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=kl}pv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];pv({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function wv(n,e,t){let r=Vr,i=!0;for(const s of au(n,e)){let o=Vr,a=!0;switch(s.op){case">=":case">":o=gL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Vr}gv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];gv({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function CI(n,e,t,r,i,s,o,a){return new _r(n,e,t,r,i,s,o,a)}function xo(n){return new _r(n)}function _v(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eg(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function mh(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function tg(n){return n.collectionGroup!==null}function qi(n){const e=U(n);if(e.wt===null){e.wt=[];const t=mh(e),r=eg(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new Fs(t)),e.wt.push(new Fs(Ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Fs(Ze.keyField(),s))}}}return e.wt}function Zt(n){const e=U(n);if(!e._t)if(e.limitType==="F")e._t=uf(e.path,e.collectionGroup,qi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of qi(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Fs(s.field,o))}const r=e.endAt?new ni(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ni(e.startAt.position,e.startAt.inclusive):null;e._t=uf(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function hf(n,e){e.getFirstInequalityField(),mh(n);const t=n.filters.concat([e]);return new _r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function cu(n,e,t){return new _r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Pc(n,e){return Dc(Zt(n),Zt(e))&&n.limitType===e.limitType}function RI(n){return`${Xi(Zt(n))}|lt:${n.limitType}`}function df(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>SI(r)).join(", ")}]`),Rc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ys(r)).join(",")),`Target(${t})`}(Zt(n))}; limitType=${n.limitType})`}function Nc(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):V.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of qi(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=mv(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,qi(t),r)||t.endAt&&!function(i,s,o){const a=mv(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,qi(t),r))}(n,e)}function DI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function PI(n){return(e,t)=>{let r=!1;for(const i of qi(n)){const s=TL(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TL(n,e,t){const r=n.field.isKeyField()?V.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ti(a,c):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=new $e(V.comparator);function Qt(){return xL}const NI=new $e(V.comparator);function ea(...n){let e=NI;for(const t of n)e=e.insert(t.key,t);return e}function OI(n){let e=NI;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Gn(){return va()}function LI(){return va()}function va(){return new di(n=>n.toString(),(n,e)=>n.isEqual(e))}const SL=new $e(V.comparator),AL=new qe(V.comparator);function he(...n){let e=AL;for(const t of n)e=e.add(t);return e}const kL=new qe(ue);function ng(){return kL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ja(e)?"-0":e}}function FI(n){return{integerValue:""+n}}function $I(n,e){return fI(e)?FI(e):MI(n,e)}/**
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
 */class yh{constructor(){this._=void 0}}function CL(n,e,t){return n instanceof Js?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&gh(i)&&(i=Jp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Ji?UI(n,e):n instanceof Zi?BI(n,e):function(r,i){const s=VI(r,i),o=bv(s)+bv(r.gt);return af(s)&&af(r.gt)?FI(o):MI(r.serializer,o)}(n,e)}function RL(n,e,t){return n instanceof Ji?UI(n,e):n instanceof Zi?BI(n,e):t}function VI(n,e){return n instanceof Zs?af(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Js extends yh{}class Ji extends yh{constructor(e){super(),this.elements=e}}function UI(n,e){const t=jI(e);for(const r of n.elements)t.some(i=>tr(i,r))||t.push(r);return{arrayValue:{values:t}}}class Zi extends yh{constructor(e){super(),this.elements=e}}function BI(n,e){let t=jI(e);for(const r of n.elements)t=t.filter(i=>!tr(i,r));return{arrayValue:{values:t}}}class Zs extends yh{constructor(e,t){super(),this.serializer=e,this.gt=t}}function bv(n){return Qe(n.integerValue||n.doubleValue)}function jI(n){return tc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.field=e,this.transform=t}}function DL(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Ji&&r instanceof Ji||t instanceof Zi&&r instanceof Zi?Qs(t.elements,r.elements,tr):t instanceof Zs&&r instanceof Zs?tr(t.gt,r.gt):t instanceof Js&&r instanceof Js}(n.transform,e.transform)}class PL{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vh{}function qI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ao(n.key,He.none()):new So(n.key,n.data,He.none());{const t=n.data,r=xt.empty();let i=new qe(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(n.key,r,new Wt(i.toArray()),He.none())}}function NL(n,e,t){n instanceof So?function(r,i,s){const o=r.value.clone(),a=Ev(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof br?function(r,i,s){if(!Rl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ev(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(zI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function wa(n,e,t,r){return n instanceof So?function(i,s,o,a){if(!Rl(i.precondition,s))return o;const c=i.value.clone(),l=Tv(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof br?function(i,s,o,a){if(!Rl(i.precondition,s))return o;const c=Tv(i.fieldTransforms,a,s),l=s.data;return l.setAll(zI(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,r):function(i,s,o){return Rl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function OL(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=VI(r.transform,i||null);s!=null&&(t===null&&(t=xt.empty()),t.set(r.field,s))}return t||null}function Iv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Qs(t,r,(i,s)=>DL(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class So extends vh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends vh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ev(n,e,t){const r=new Map;Y(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,RL(o,a,t[i]))}return r}function Tv(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,CL(s,o,e))}return r}class Ao extends vh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rg extends vh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NL(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=wa(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=wa(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=LI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=qI(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(t,r)=>Iv(t,r))&&Qs(this.baseMutations,e.baseMutations,(t,r)=>Iv(t,r))}}class sg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Y(e.mutations.length===r.length);let i=SL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sg(e,t,r,i)}}/**
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
 */class og{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,_e;function HI(n){switch(n){default:return H();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function KI(n){if(n===void 0)return Je("GRPC error has no .code"),I.UNKNOWN;switch(n){case ot.OK:return I.OK;case ot.CANCELLED:return I.CANCELLED;case ot.UNKNOWN:return I.UNKNOWN;case ot.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ot.INTERNAL:return I.INTERNAL;case ot.UNAVAILABLE:return I.UNAVAILABLE;case ot.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ot.NOT_FOUND:return I.NOT_FOUND;case ot.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ot.ABORTED:return I.ABORTED;case ot.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ot.DATA_LOSS:return I.DATA_LOSS;default:return H()}}(_e=ot||(ot={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ag{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sl}static getOrCreateInstance(){return sl===null&&(sl=new ag),sl}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let sl=null;/**
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
 */function GI(){return new TextEncoder}/**
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
 */const ML=new Ms([4294967295,4294967295],0);function xv(n){const e=GI().encode(n),t=new RO;return t.update(e),new Uint8Array(t.digest())}function Sv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ms([t,r],0),new Ms([i,s],0)]}class cg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ta(`Invalid padding: ${t}`);if(r<0)throw new ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ta(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ta(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Ms.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(Ms.fromNumber(r)));return i.compare(ML)===1&&(i=new Ms([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=xv(e),[r,i]=Sv(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cg(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=xv(e),[r,i]=Sv(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Mc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Lc(Q.min(),i,new $e(ue),Qt(),he())}}class Mc{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mc(r,t,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class WI{constructor(e,t){this.targetId=e,this.Vt=t}}class QI{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Av{constructor(){this.St=0,this.Dt=Cv(),this.Ct=ut.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=he(),t=he(),r=he();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:H()}}),new Mc(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=Cv()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class FL{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Qt(),this.zt=kv(),this.Wt=new $e(ue)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(ou(o))if(i===0){const a=new V(o.path);this.Yt(r,a,je.newNoDocument(a,Q.min()))}else Y(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,l)}(t=ag.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(l,u,h){var d,p,y,v,b,E;const R={localCacheCount:u,existenceFilterCount:h.count},S=h.unchangedNames;return S&&(R.bloomFilter={applied:l===0,hashCount:(d=S==null?void 0:S.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(p=S==null?void 0:S.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(E=(b=S==null?void 0:S.bits)===null||b===void 0?void 0:b.padding)!==null&&E!==void 0?E:0}),R}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=Zr(s).toUint8Array()}catch(u){if(u instanceof wI)return Nn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new cg(c,o,a)}catch(u){return Nn(u instanceof ta?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:i!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&ou(a.target)){const c=new V(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,je.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=he();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Lc(e,t,this.Wt,this.jt,r);return this.jt=Qt(),this.zt=kv(),this.Wt=new $e(ue),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Av,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new qe(ue),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||P("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Av),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function kv(){return new $e(V.comparator)}function Cv(){return new $e(V.comparator)}const $L=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),UL=(()=>({and:"AND",or:"OR"}))();class BL{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ff(n,e){return n.useProto3Json||Rc(e)?e:{value:e}}function eo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function YI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jL(n,e){return eo(n,e.toTimestamp())}function tt(n){return Y(!!n),Q.fromTimestamp(function(e){const t=Jr(e);return new Ke(t.seconds,t.nanos)}(n))}function lg(n,e){return function(t){return new Ie(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function XI(n){const e=Ie.fromString(n);return Y(oE(e)),e}function nc(n,e){return lg(n.databaseId,e.path)}function Qn(n,e){const t=XI(e);if(t.get(1)!==n.databaseId.projectId)throw new C(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new C(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new V(ZI(t))}function pf(n,e){return lg(n.databaseId,e)}function JI(n){const e=XI(n);return e.length===4?Ie.emptyPath():ZI(e)}function rc(n){return new Ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ZI(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rv(n,e,t){return{name:nc(n,e),fields:t.value.mapValue.fields}}function eE(n,e,t){const r=Qn(n,e.name),i=tt(e.updateTime),s=e.createTime?tt(e.createTime):Q.min(),o=new xt({mapValue:{fields:e.fields}}),a=je.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function qL(n,e){return"found"in e?function(t,r){Y(!!r.found),r.found.name,r.found.updateTime;const i=Qn(t,r.found.name),s=tt(r.found.updateTime),o=r.found.createTime?tt(r.found.createTime):Q.min(),a=new xt({mapValue:{fields:r.found.fields}});return je.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){Y(!!r.missing),Y(!!r.readTime);const i=Qn(t,r.missing),s=tt(r.readTime);return je.newNoDocument(i,s)}(n,e):H()}function zL(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(Y(l===void 0||typeof l=="string"),ut.fromBase64String(l||"")):(Y(l===void 0||l instanceof Uint8Array),ut.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:KI(c.code);return new C(l,c.message||"")}(o);t=new QI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qn(n,r.document.name),s=tt(r.document.updateTime),o=r.document.createTime?tt(r.document.createTime):Q.min(),a=new xt({mapValue:{fields:r.document.fields}}),c=je.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];t=new Dl(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qn(n,r.document),s=r.readTime?tt(r.readTime):Q.min(),o=je.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Dl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qn(n,r.document),s=r.removedTargetIds||[];t=new Dl([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new LL(i,s),a=r.targetId;t=new WI(a,o)}}return t}function ic(n,e){let t;if(e instanceof So)t={update:Rv(n,e.key,e.value)};else if(e instanceof Ao)t={delete:nc(n,e.key)};else if(e instanceof br)t={update:Rv(n,e.key,e.data),updateMask:YL(e.fieldMask)};else{if(!(e instanceof rg))return H();t={verify:nc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Js)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ji)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Zi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zs)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(n,e.precondition)),t}function gf(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?He.updateTime(tt(i.updateTime)):i.exists!==void 0?He.exists(i.exists):He.none()}(e.currentDocument):He.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)Y(o.setToServerValue==="REQUEST_TIME"),a=new Js;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Ji(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Zi(l)}else"increment"in o?a=new Zs(s,o.increment):H();const c=Ze.fromServerFormat(o.fieldPath);return new Oc(c,a)}(n,i)):[];if(e.update){e.update.name;const i=Qn(n,e.update.name),s=new xt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Wt(c.map(l=>Ze.fromServerFormat(l)))}(e.updateMask);return new br(i,s,o,t,r)}return new So(i,s,t,r)}if(e.delete){const i=Qn(n,e.delete);return new Ao(i,t)}if(e.verify){const i=Qn(n,e.verify);return new rg(i,t)}return H()}function HL(n,e){return n&&n.length>0?(Y(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?tt(r.updateTime):tt(i);return s.isEqual(Q.min())&&(s=tt(i)),new PL(s,r.transformResults||[])}(t,e))):[]}function tE(n,e){return{documents:[pf(n,e.path)]}}function nE(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=pf(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=pf(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return sE(Ne.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Is(u.field),direction:GL(u.dir)}}(l))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=ff(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function rE(n){let e=JI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Y(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(u){const h=iE(u);return h instanceof Ne&&Zp(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Fs(Es(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Rc(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ni(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ni(d,h)}(t.endAt)),CI(e,i,o,s,a,"F",c,l)}function KL(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function iE(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Es(e.unaryFilter.field);return ye.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Es(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Es(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(e){return ye.create(Es(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ne.create(e.compositeFilter.filters.map(t=>iE(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(n):H()}function GL(n){return $L[n]}function WL(n){return VL[n]}function QL(n){return UL[n]}function Is(n){return{fieldPath:n.canonicalString()}}function Es(n){return Ze.fromServerFormat(n.fieldPath)}function sE(n){return n instanceof ye?function(e){if(e.op==="=="){if(fv(e.value))return{unaryFilter:{field:Is(e.field),op:"IS_NAN"}};if(dv(e.value))return{unaryFilter:{field:Is(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fv(e.value))return{unaryFilter:{field:Is(e.field),op:"IS_NOT_NAN"}};if(dv(e.value))return{unaryFilter:{field:Is(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(e.field),op:WL(e.op),value:e.value}}}(n):n instanceof Ne?function(e){const t=e.getFilters().map(r=>sE(r));return t.length===1?t[0]:{compositeFilter:{op:QL(e.op),filters:t}}}(n):H()}function YL(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function oE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,r,i,s=Q.min(),o=Q.min(),a=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.fe=e}}function XL(n,e){let t;if(e.document)t=eE(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=V.fromSegments(e.noDocument.path),i=ts(e.noDocument.readTime);t=je.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=V.fromSegments(e.unknownDocument.path),i=ts(e.unknownDocument.version);t=je.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new Ke(r[0],r[1]);return Q.fromTimestamp(i)}(e.readTime)),t}function Dv(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:lu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:nc(i,s.key),fields:s.data.value.mapValue.fields,updateTime:eo(i,s.version.toTimestamp()),createTime:eo(i,s.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:es(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:t.path.toArray(),version:es(e.version)}}return r}function lu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function es(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ts(n){const e=new Ke(n.seconds,n.nanoseconds);return Q.fromTimestamp(e)}function Ei(n,e){const t=(e.baseMutations||[]).map(s=>gf(n.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>gf(n.fe,s)),i=Ke.fromMillis(e.localWriteTimeMs);return new ig(e.batchId,i,t,r)}function na(n){const e=ts(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ts(n.lastLimboFreeSnapshotVersion):Q.min();let r;var i;return n.query.documents!==void 0?(Y((i=n.query).documents.length===1),r=Zt(xo(JI(i.documents[0])))):r=function(s){return Zt(rE(s))}(n.query),new lr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ut.fromBase64String(n.resumeToken))}function cE(n,e){const t=es(e.snapshotVersion),r=es(e.lastLimboFreeSnapshotVersion);let i;i=ou(e.target)?tE(n.fe,e.target):nE(n.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Xi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ug(n){const e=rE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cu(e,e.limit,"L"):e}function dd(n,e){return new og(e.largestBatchId,gf(n.fe,e.overlayMutation))}function Pv(n,e){const t=e.path.lastSegment();return[n,jt(e.path.popLast()),t]}function Nv(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:es(r.readTime),documentKey:jt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{getBundleMetadata(e,t){return Ov(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:ts(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Ov(e).put({bundleId:(r=t).id,createTime:es(tt(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Lv(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:ug(i.bundledQuery),readTime:ts(i.readTime)};var i})}saveNamedQuery(e,t){return Lv(e).put(function(r){return{name:r.name,readTime:es(tt(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Ov(n){return _t(n,"bundles")}function Lv(n){return _t(n,"namedQueries")}/**
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
 */class wh{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new wh(e,r)}getOverlay(e,t){return Bo(e).get(Pv(this.userId,t)).next(r=>r?dd(this.serializer,r):null)}getOverlays(e,t){const r=Gn();return _.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new og(t,o);i.push(this.we(e,a))}),_.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(jt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Bo(e).J("collectionPathOverlayIndex",a))}),_.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Gn(),s=jt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Bo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=dd(this.serializer,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Gn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Bo(e).X({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=dd(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>s)}we(e,t){return Bo(e).put(function(r,i,s){const[o,a,c]=Pv(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:ic(r.fe,s.mutation)}}(this.serializer,this.userId,t))}}function Bo(n){return _t(n,"documentOverlays")}/**
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
 */class Ti{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Qe(e.integerValue));else if("doubleValue"in e){const r=Qe(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),Ja(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Zr(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?_I(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):H()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const i of Object.keys(r))this.Te(i,t),this.me(r[i],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const i of r)this.me(i,t)}ve(e,t){this.ye(t,37),V.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Ti.Ve=new Ti;function ZL(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Mv(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=ZL(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class eM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=t.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=t.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const t=this.Fe(e),r=Mv(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Le(e){const t=this.Fe(e),r=Mv(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class tM{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class nM{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class jo{constructor(){this.je=new eM,this.ze=new tM(this.je),this.We=new nM(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class xi{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new xi(this.indexId,this.documentKey,this.arrayValue,r)}}function Sr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Fv(n.arrayValue,e.arrayValue),t!==0?t:(t=Fv(n.directionalValue,e.directionalValue),t!==0?t:V.comparator(n.documentKey,e.documentKey)))}function Fv(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class rM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){Y(e.collectionGroup===this.collectionId);const t=rf(e);if(t!==void 0&&!this.en(t))return!1;const r=wi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function lE(n){var e,t;if(Y(n instanceof ye||n instanceof Ne),n instanceof ye){if(n instanceof kI){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ye.create(n.field,"==",s)))||[];return Ne.create(i,"or")}return n}const r=n.filters.map(i=>lE(i));return Ne.create(r,n.op)}function iM(n){if(n.getFilters().length===0)return[];const e=vf(lE(n));return Y(uE(e)),mf(e)||yf(e)?[e]:e.getFilters()}function mf(n){return n instanceof ye}function yf(n){return n instanceof Ne&&Zp(n)}function uE(n){return mf(n)||yf(n)||function(e){if(e instanceof Ne&&cf(e)){for(const t of e.getFilters())if(!mf(t)&&!yf(t))return!1;return!0}return!1}(n)}function vf(n){if(Y(n instanceof ye||n instanceof Ne),n instanceof ye)return n;if(n.filters.length===1)return vf(n.filters[0]);const e=n.filters.map(r=>vf(r));let t=Ne.create(e,n.op);return t=uu(t),uE(t)?t:(Y(t instanceof Ne),Y(Xs(t)),Y(t.filters.length>1),t.filters.reduce((r,i)=>hg(r,i)))}function hg(n,e){let t;return Y(n instanceof ye||n instanceof Ne),Y(e instanceof ye||e instanceof Ne),t=n instanceof ye?e instanceof ye?function(r,i){return Ne.create([r,i],"and")}(n,e):$v(n,e):e instanceof ye?$v(e,n):function(r,i){if(Y(r.filters.length>0&&i.filters.length>0),Xs(r)&&Xs(i))return xI(r,i.getFilters());const s=cf(r)?r:i,o=cf(r)?i:r,a=s.filters.map(c=>hg(c,o));return Ne.create(a,"or")}(n,e),uu(t)}function $v(n,e){if(Xs(e))return xI(e,n.getFilters());{const t=e.filters.map(r=>hg(n,r));return Ne.create(t,"or")}}function uu(n){if(Y(n instanceof ye||n instanceof Ne),n instanceof ye)return n;const e=n.getFilters();if(e.length===1)return uu(e[0]);if(EI(n))return n;const t=e.map(i=>uu(i)),r=[];return t.forEach(i=>{i instanceof ye?r.push(i):i instanceof Ne&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ne.create(r,n.op)}/**
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
 */class sM{constructor(){this.rn=new dg}addToCollectionParentIndex(e,t){return this.rn.add(t),_.resolve()}getCollectionParents(e,t){return _.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return _.resolve()}deleteFieldIndex(e,t){return _.resolve()}getDocumentsMatchingTarget(e,t){return _.resolve(null)}getIndexType(e,t){return _.resolve(0)}getFieldIndexes(e,t){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,t){return _.resolve(un.min())}getMinOffsetFromCollectionGroup(e,t){return _.resolve(un.min())}updateCollectionGroup(e,t,r){return _.resolve()}updateIndexEntries(e,t){return _.resolve()}}class dg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new qe(Ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(Ie.comparator)).toArray()}}/**
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
 */const ol=new Uint8Array(0);class oM{constructor(e,t){this.user=e,this.databaseId=t,this.on=new dg,this.un=new di(r=>Xi(r),(r,i)=>Dc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:jt(i)};return Vv(e).put(s)}return _.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[aI(t),""],!1,!0);return Vv(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Kn(o.parent))}return r})}addFieldIndex(e,t){const r=al(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=zo(e);return s.next(a=>{o.put(Nv(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=al(e),i=zo(e),s=qo(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=qo(e);let i=!0;const s=new Map;return _.forEach(this.cn(t),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=he();const a=[];return _.forEach(s,(c,l)=>{var u;P("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(S=>`${S.fieldPath}:${S.kind}`).join(",")}`} to execute ${Xi(t)}`);const h=function(S,A){const $=rf(A);if($===void 0)return null;for(const j of au(S,$.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(l,c),d=function(S,A){const $=new Map;for(const j of wi(A))for(const X of au(S,j.fieldPath))switch(X.op){case"==":case"in":$.set(j.fieldPath.canonicalString(),X.value);break;case"not-in":case"!=":return $.set(j.fieldPath.canonicalString(),X.value),Array.from($.values())}return null}(l,c),p=function(S,A){const $=[];let j=!0;for(const X of wi(A)){const G=X.kind===0?vv(S,X.fieldPath,S.startAt):wv(S,X.fieldPath,S.startAt);$.push(G.value),j&&(j=G.inclusive)}return new ni($,j)}(l,c),y=function(S,A){const $=[];let j=!0;for(const X of wi(A)){const G=X.kind===0?wv(S,X.fieldPath,S.endAt):vv(S,X.fieldPath,S.endAt);$.push(G.value),j&&(j=G.inclusive)}return new ni($,j)}(l,c),v=this.hn(c,l,p),b=this.hn(c,l,y),E=this.ln(c,l,d),R=this.fn(c.indexId,h,v,p.inclusive,b,y.inclusive,E);return _.forEach(R,S=>r.H(S,t.limit).next(A=>{A.forEach($=>{const j=V.fromSegments($.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return _.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=iM(Ne.create(e.filters,"and")).map(r=>uf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/l]):ol,p=this.wn(e,d,r[h%l],i),y=this._n(e,d,s[h%l],o),v=a.map(b=>this.wn(e,d,b,!0));u.push(...this.createRange(p,y,v))}return u}wn(e,t,r,i){const s=new xi(e,V.empty(),t,r);return i?s:s.Je()}_n(e,t,r,i){const s=new xi(e,V.empty(),t,r);return i?s.Je():s}an(e,t){const r=new rM(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return _.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new qe(Ze.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}mn(e,t){const r=new jo;for(const i of wi(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Ti.Ve._e(s,o)}return r.Qe()}dn(e){const t=new jo;return Ti.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new jo;return Ti.Ve._e(Yi(this.databaseId,t),r.He(function(i){const s=wi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new jo);let s=0;for(const o of wi(e)){const a=r[s++];for(const c of i)if(this.yn(t,o.fieldPath)&&tc(a))i=this.pn(i,o,a);else{const l=c.He(o.kind);Ti.Ve._e(a,l)}}return this.In(i)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new jo;c.seed(a.Qe()),Ti.Ve._e(o,c.He(t.kind)),s.push(c)}return s}yn(e,t){return!!e.filters.find(r=>r instanceof ye&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=al(e),i=zo(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return _.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new su(u.sequenceNumber,new un(ts(u.readTime),new V(Kn(u.documentKey)),u.largestBatchId)):su.empty(),d=l.fields.map(([p,y])=>new jO(Ze.fromServerFormat(p),y));return new cI(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ue(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=al(e),s=zo(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>_.forEach(a,c=>s.put(Nv(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return _.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),_.forEach(a,c=>this.En(e,i,c).next(l=>{const u=this.An(s,c);return l.isEqual(u)?_.resolve():this.vn(e,s,c,l,u)}))))})}Rn(e,t,r,i){return qo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,i){return qo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const i=qo(e);let s=new qe(Sr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new xi(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,t){let r=new qe(Sr);const i=this.mn(t,e);if(i==null)return r;const s=rf(t);if(s!=null){const o=e.data.field(s.fieldPath);if(tc(o))for(const a of o.arrayValue.values||[])r=r.add(new xi(t.indexId,e.key,this.dn(a),i))}else r=r.add(new xi(t.indexId,e.key,ol,i));return r}vn(e,t,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),p=c.getIterator();let y=ws(d),v=ws(p);for(;y||v;){let b=!1,E=!1;if(y&&v){const R=l(y,v);R<0?E=!0:R>0&&(b=!0)}else y!=null?E=!0:b=!0;b?(u(v),v=ws(p)):E?(h(y),y=ws(d)):(y=ws(d),v=ws(p))}}(i,s,Sr,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),_.waitFor(o)}Tn(e){let t=1;return zo(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Sr(o,a)).filter((o,a,c)=>!a||Sr(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Sr(o,e),c=Sr(o,t);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ol,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ol,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return Sr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Uv)}getMinOffset(e,t){return _.mapArray(this.cn(t),r=>this.an(e,r).next(i=>i||H())).next(Uv)}}function Vv(n){return _t(n,"collectionParents")}function qo(n){return _t(n,"indexEntries")}function al(n){return _t(n,"indexConfiguration")}function zo(n){return _t(n,"indexState")}function Uv(n){Y(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Yp(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new un(e.readTime,e.documentKey,t)}/**
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
 */const Bv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Kt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(u,h,d)=>(a++,d.delete()));s.push(c.next(()=>{Y(a===1)}));const l=[];for(const u of t.mutations){const h=pI(e,u.key.path,t.batchId);s.push(i.delete(h)),l.push(u.key)}return _.waitFor(s).next(()=>l)}function hu(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw H();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(41943040,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);class _h{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,t,r,i){Y(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new _h(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ar(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Ts(e),o=Ar(e);return o.add({}).next(a=>{Y(typeof a=="number");const c=new ig(a,t,r,i),l=function(d,p,y){const v=y.baseMutations.map(E=>ic(d.fe,E)),b=y.mutations.map(E=>ic(d.fe,E));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:b}}(this.serializer,this.userId,c),u=[];let h=new qe((d,p)=>ue(d.canonicalString(),p.canonicalString()));for(const d of i){const p=pI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(s.put(p,WO))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),_.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Ar(e).get(t).next(r=>r?(Y(r.userId===this.userId),Ei(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?_.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ar(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(Y(a.batchId>=r),s=Ei(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ar(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ar(e).j("userMutationsIndex",t).next(r=>r.map(i=>Ei(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Al(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Ts(e).X({range:i},(o,a,c)=>{const[l,u,h]=o,d=Kn(u);if(l===this.userId&&t.path.isEqual(d))return Ar(e).get(h).next(p=>{if(!p)throw H();Y(p.userId===this.userId),s.push(Ei(this.serializer,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qe(ue);const i=[];return t.forEach(s=>{const o=Al(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Ts(e).X({range:a},(l,u,h)=>{const[d,p,y]=l,v=Kn(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(c)}),_.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Al(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new qe(ue);return Ts(e).X({range:o},(c,l,u)=>{const[h,d,p]=c,y=Kn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):u.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Ar(e).get(s).next(o=>{if(o===null)throw H();Y(o.userId===this.userId),r.push(Ei(this.serializer,o))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return hE(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return _.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Ts(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Kn(s[1]);i.push(c)}else a.done()}).next(()=>{Y(i.length===0)})})}containsKey(e,t){return dE(e,this.userId,t)}xn(e){return fE(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function dE(n,e,t){const r=Al(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ts(n).X({range:s,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Ar(n){return _t(n,"mutations")}function Ts(n){return _t(n,"documentMutations")}function fE(n){return _t(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ns(0)}static Mn(){return new ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new ns(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>Q.fromTimestamp(new Ke(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>_s(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(Y(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return _s(e).X((o,a)=>{const c=na(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>_.waitFor(s)).next(()=>i)}forEachTarget(e,t){return _s(e).X((r,i)=>{const s=na(i);t(s)})}$n(e){return jv(e).get("targetGlobalKey").next(t=>(Y(t!==null),t))}On(e,t){return jv(e).put("targetGlobalKey",t)}Fn(e,t){return _s(e).put(cE(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Xi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return _s(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=na(a);Dc(t,l.target)&&(s=l,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Mr(e);return t.forEach(o=>{const a=jt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(i)}removeMatchingKeys(e,t,r){const i=Mr(e);return _.forEach(t,s=>{const o=jt(s.path);return _.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Mr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Mr(e);let s=he();return i.X({range:r,Y:!0},(o,a,c)=>{const l=Kn(o[1]),u=new V(l);s=s.add(u)}).next(()=>s)}containsKey(e,t){const r=jt(t.path),i=IDBKeyRange.bound([r],[aI(r)],!1,!0);let s=0;return Mr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}le(e,t){return _s(e).get(t).next(r=>r?na(r):null)}}function _s(n){return _t(n,"targets")}function jv(n){return _t(n,"targetGlobal")}function Mr(n){return _t(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv([n,e],[t,r]){const i=ue(n,t);return i===0?ue(e,r):i}class cM{constructor(e){this.Ln=e,this.buffer=new qe(qv),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();qv(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lM{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hi(t)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ui(t)}await this.Qn(3e5)})}}class uM{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return _.resolve(Gt.ct);const r=new cM(t);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(Bv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bv):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),nf()<=be.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function hM(n,e){return new uM(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e,t){this.db=e,this.garbageCollector=hM(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return cl(e,r)}removeReference(e,t,r){return cl(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return cl(e,t)}Xn(e,t){return function(r,i){let s=!1;return fE(r).Z(o=>dE(r,o,i).next(a=>(a&&(s=!0),_.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),Mr(e).delete([0,jt(o.path)])))});i.push(c)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return cl(e,t)}Yn(e,t){const r=Mr(e);let i,s=Gt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(s!==Gt.ct&&t(new V(Kn(i)),s),s=l,i=c):s=Gt.ct}).next(()=>{s!==Gt.ct&&t(new V(Kn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function cl(n,e){return Mr(n).put(function(t,r){return{targetId:0,path:jt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.changes=new di(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?_.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return yi(e).put(r)}removeEntry(e,t,r){return yi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],lu(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=je.newInvalidDocument(t);return yi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Ho(t))},(i,s)=>{r=this.ts(t,s)}).next(()=>r)}es(e,t){let r={size:0,document:je.newInvalidDocument(t)};return yi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Ho(t))},(i,s)=>{r={document:this.ts(t,s),size:hu(s)}}).next(()=>r)}getEntries(e,t){let r=Qt();return this.ns(e,t,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,t){let r=Qt(),i=new $e(V.comparator);return this.ns(e,t,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,hu(o))}).next(()=>({documents:r,rs:i}))}ns(e,t,r){if(t.isEmpty())return _.resolve();let i=new qe(Kv);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Ho(i.first()),Ho(i.last())),o=i.getIterator();let a=o.getNext();return yi(e).X({index:"documentKeyIndex",range:s},(c,l,u)=>{const h=V.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Kv(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.G(Ho(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),lu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return yi(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=Qt();for(const u of c){const h=this.ts(V.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Nc(t,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,t,r,i){let s=Qt();const o=Hv(t,r),a=Hv(t,un.max());return yi(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.ts(V.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&u.done()}).next(()=>s)}newChangeBuffer(e){return new pM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return zv(e).get("remoteDocumentGlobalKey").next(t=>(Y(!!t),t))}Zn(e,t){return zv(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=XL(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return je.newInvalidDocument(e)}}function gE(n){return new fM(n)}class pM extends pE{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new di(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new qe((s,o)=>ue(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(t.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Dv(this.os.serializer,o);i=i.add(s.path.popLast());const l=hu(c);r+=l-a.size,t.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Dv(this.os.serializer,o.convertToNoDocument(Q.min()));t.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.os.updateMetadata(e,r)),_.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function zv(n){return _t(n,"remoteDocumentGlobal")}function yi(n){return _t(n,"remoteDocumentsV14")}function Ho(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Hv(n,e){const t=e.documentKey.path.toArray();return[n,lu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Kv(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=ue(t[s],r[s]),i)return i;return i=ue(t.length,r.length),i||(i=ue(t[t.length-2],r[r.length-2]),i||ue(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&wa(r.mutation,i,Wt.empty(),Ke.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const i=Gn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ea();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Gn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Qt();const o=va(),a=va();return t.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof br)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),wa(u.mutation,l,u.mutation.getFieldMask(),Ke.now())):o.set(l.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new gM(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=va();let i=new $e((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=r.get(c)||Wt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||he()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=LI();u.forEach(d=>{if(!s.has(d)){const p=qI(t.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):_.resolve(Gn());let a=-1,c=s;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:OI(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new V(t)).next(r=>{let i=ea();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=ea();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const c=function(l,u){return new _r(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,je.newInvalidDocument(l)))});let o=ea();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&wa(l.mutation,c,Wt.empty(),Ke.now()),Nc(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return _.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:tt(r.createTime)}),_.resolve()}getNamedQuery(e,t){return _.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:ug(r.bundledQuery),readTime:tt(r.readTime)}}(t)),_.resolve()}}/**
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
 */class yM{constructor(){this.overlays=new $e(V.comparator),this.ls=new Map}getOverlay(e,t){return _.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Gn();return _.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),_.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),_.resolve()}getOverlaysForCollection(e,t,r){const i=Gn(),s=t.length+1,o=new V(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return _.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new $e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=Gn(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Gn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return _.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new og(t,r));let s=this.ls.get(t);s===void 0&&(s=he(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.fs=new qe(ft.ds),this.ws=new qe(ft._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new ft(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new ft(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new V(new Ie([])),r=new ft(t,e),i=new ft(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new V(new Ie([])),r=new ft(t,e),i=new ft(t,e+1);let s=he();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ft(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return V.comparator(e.key,t.key)||ue(e.As,t.As)}static _s(e,t){return ue(e.As,t.As)||V.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new qe(ft.ds)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ig(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ft(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,t){return _.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ft(t,0),i=new ft(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qe(ue);return t.forEach(i=>{const s=new ft(i,0),o=new ft(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),_.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new ft(new V(s),0);let a=new qe(ue);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.As)),!0)},o),_.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Y(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return _.forEach(t.mutations,i=>{const s=new ft(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new ft(t,0),i=this.Rs.firstAfterOrEqual(r);return _.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.Ds=e,this.docs=new $e(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return _.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=Qt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():je.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Qt();const o=t.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Yp(uI(u),r)<=0||(i.has(u.key)||Nc(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,t,r,i){H()}Cs(e,t){return _.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _M(this)}getSize(e){return _.resolve(this.size)}}class _M extends pE{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),_.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e){this.persistence=e,this.xs=new di(t=>Xi(t),Dc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Ns=0,this.ks=new fg,this.targetCount=0,this.Ms=ns.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),_.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,_.resolve()}updateTargetData(e,t){return this.Fn(t),_.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return _.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),_.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),_.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return _.resolve(r)}containsKey(e,t){return _.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t){this.$s={},this.overlays={},this.Os=new Gt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new bM(this),this.indexManager=new sM,this.remoteDocumentCache=function(r){return new wM(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new aE(t),this.qs=new mM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new vM(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){P("MemoryPersistence","Starting transaction:",e);const i=new IM(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return _.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class IM extends dI{constructor(e){super(),this.currentSequenceNumber=e}}class bh{constructor(e){this.persistence=e,this.Qs=new fg,this.js=null}static zs(e){return new bh(e)}get Ws(){if(this.js)return this.js;throw H()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),_.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),_.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,r=>{const i=V.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return _.or([()=>_.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.serializer=e}O(e,t,r,i){const s=new ph("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cv,{unique:!0}),a.createObjectStore("documentMutations")}(e),Gv(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Gv(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cv,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return _.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:oL});c.createIndex("collectionPathOverlayIndex",aL,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",cL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:QO});c.createIndex("documentKeyIndex",YO),c.createIndex("collectionGroupIndex",XO)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:nL}).createIndex("sequenceNumberIndex",rL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:iL}).createIndex("documentKeyIndex",sL,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=hu(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>_.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>_.forEach(a,c=>{Y(c.userId===s.userId);const l=Ei(this.serializer,c);return hE(e,s.userId,l).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new Ie(o),l=function(u){return[0,jt(u)]}(c);s.push(t.get(l).next(u=>u?_.resolve():(h=>t.put({targetId:0,path:jt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>_.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:tL});const r=t.store("collectionParents"),i=new dg,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:jt(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new Ie(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],l)=>{const u=Kn(a);return s(u.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,i)=>{const s=na(i),o=cE(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new V(Ie.fromString(l.document.name).popFirst(5)):l.noDocument?V.fromSegments(l.noDocument.path):l.unknownDocument?V.fromSegments(l.unknownDocument.path):H()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>_.waitFor(i))}si(e,t){const r=t.store("mutations"),i=gE(this.serializer),s=new yE(bh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:he();Ei(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),_.forEach(a,(c,l)=>{const u=new pt(l),h=wh.de(this.serializer,u),d=s.getIndexManager(u),p=_h.de(u,this.serializer,d,s.referenceDelegate);return new mE(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new sf(t,Gt.ct),c).next()})})}}function Gv(n){n.createObjectStore("targetDocuments",{keyPath:ZO}).createIndex("documentTargetsIndex",eL,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",JO,{unique:!0}),n.createObjectStore("targetGlobal")}const fd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class pg{constructor(e,t,r,i,s,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=l,this.oi=u,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!pg.D())throw new C(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new dM(this,i),this.di=t+"main",this.serializer=new aE(c),this.wi=new An(this.di,this.ui,new EM(this.serializer)),this.Bs=new aM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=gE(this.serializer),this.qs=new JL,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,u===!1&&Je("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(I.FAILED_PRECONDITION,fd);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Gt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ll(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(hi(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Ko(e).get("owner").next(t=>_.resolve(this.Ri(t)))}Pi(e){return ll(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=_t(t,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?_.resolve(!0):Ko(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new C(I.FAILED_PRECONDITION,fd);return!1}}return!(!this.networkEnabled||!this.inForeground)||ll(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&P("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new sf(e,Gt.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>ll(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return _h.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new oM(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return wh.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){P("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?uL:o===14?yI:o===13?mI:o===12?lL:o===11?gI:void H();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new sf(c,this.Os?this.Os.next():Gt.ct),t==="readwrite-primary"?this.Ti(a).next(l=>!!l||this.Ei(a)).next(l=>{if(!l)throw Je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new C(I.FAILED_PRECONDITION,hI);return r(a)}).next(l=>this.vi(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return Ko(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new C(I.FAILED_PRECONDITION,fd)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ko(e).put("owner",t)}static D(){return An.D()}Ai(e){const t=Ko(e);return t.get("owner").next(r=>this.Ri(r)?(P("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):_.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;J1()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Je("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Je("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ko(n){return _t(n,"owner")}function ll(n){return _t(n,"clientMetadata")}function gg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=he(),i=he();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mg(e,t.fromCache,r,i)}}/**
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
 */class vE{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(_v(t))return _.resolve(null);let r=Zt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=cu(t,null,"F"),r=Zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(t,a);return this.zi(t,l,o,c.readTime)?this.Ki(e,cu(t,null,"F")):this.Wi(e,l,t,c)}))})))}Gi(e,t,r,i){return _v(t)||i.isEqual(Q.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(nf()<=be.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),df(t)),this.Wi(e,o,t,lI(i,-1)))})}ji(e,t){let r=new qe(PI(e));return t.forEach((i,s)=>{Nc(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return nf()<=be.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",df(t)),this.Ui.getDocumentsMatchingQuery(e,t,un.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new $e(ue),this.Yi=new di(s=>Xi(s),Dc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mE(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function wE(n,e,t,r){return new TM(n,e,t,r)}async function _E(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=he();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function xM(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=_.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const v=c.docVersions.get(p);Y(v!==null),y.version.compareTo(v)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=he();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function bE(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function SM(n,e){const t=U(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,u.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ut.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),i=i.insert(h,p),function(y,v,b){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(t.Bs.updateTargetData(s,p))});let c=Qt(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(IE(s,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!r.isEqual(Q.min())){const u=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(t.Ji=i,s))}function IE(n,e,t){let r=he(),i=he();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Qt();return t.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:i}})}function AM(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function to(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function no(n,e,t){const r=U(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hi(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function du(n,e,t){const r=U(n);let i=Q.min(),s=he();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=U(a),h=u.Yi.get(l);return h!==void 0?_.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(r,o,Zt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:Q.min(),t?s:he())).next(a=>(xE(r,DI(e),a),{documents:a,ir:s})))}function EE(n,e){const t=U(n),r=U(t.Bs),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function TE(n,e){const t=U(n),r=t.Xi.get(e)||Q.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Zi.getAllFromCollectionGroup(i,e,lI(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(xE(t,e,i),i))}function xE(n,e,t){let r=n.Xi.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function kM(n,e,t,r){const i=U(n);let s=he(),o=Qt();for(const l of t){const u=e.rr(l.metadata.name);l.document&&(s=s.add(u));const h=e.ur(l);h.setReadTime(e.cr(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await to(i,function(l){return Zt(xo(Ie.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>IE(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Bs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Bs.addMatchingKeys(l,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.nr,u.sr)).next(()=>u.nr)))}async function CM(n,e,t=he()){const r=await to(n,Zt(ug(e.bundledQuery))),i=U(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=tt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(ut.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,t,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function Wv(n,e){return`firestore_clients_${n}_${e}`}function Qv(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function pd(n,e){return`firestore_targets_${n}_${e}`}class fu{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ar(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new fu(e,t,i.state,s):(Je("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _a{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new _a(e,r.state,i):(Je("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=ng();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=fI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new pu(e,s):(Je("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class yg{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new yg(t.clientId,t.onlineState):(Je("SharedClientState",`Failed to parse online state: ${e}`),null)}}class wf{constructor(){this.activeTargetIds=ng()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gd{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new $e(ue),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=Wv(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new wf),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(Wv(this.persistenceKey,r));if(i){const s=pu.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(pd(this.persistenceKey,e));if(r){const i=_a.ar(e,r);i&&(t=i.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(pd(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return P("SharedClientState","READ",e,t),t}setItem(e,t){P("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(P("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void Je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(i){let s=Gt.ct;if(i!=null)try{const o=JSON.parse(i);Y(typeof o=="number"),s=o}catch(o){Je("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Gt.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const i=new fu(this.currentUser,e,t,r),s=Qv(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const t=Qv(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const i=pd(this.persistenceKey,e),s=new _a(e,t,r);this.setItem(i,s.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return pu.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return fu.ar(new pt(s),i,t)}Ur(e,t){const r=this.Ar.exec(e),i=Number(r[1]);return _a.ar(i,t)}br(e){return yg.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=ng();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class SE{constructor(){this.Hr=new wf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new wf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RM{Yr(e){}shutdown(){}}/**
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
 */class Yv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ul=null;function md(){return ul===null?ul=268435456+Math.round(2147483648*Math.random()):ul++,"0x"+ul.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class NM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=md(),a=this.To(e,t);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(l=>(P("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Nn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+To,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=DM[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=md();return new Promise((o,a)=>{const c=new CO;c.setWithCredentials(!0),c.listenOnce(SO.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case hd.NO_ERROR:const u=c.getResponseJson();P(Dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case hd.TIMEOUT:P(Dt,`RPC '${e}' ${s} timed out`),a(new C(I.DEADLINE_EXCEEDED,"Request time out"));break;case hd.HTTP_ERROR:const h=c.getStatus();if(P(Dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(b)>=0?b:I.UNKNOWN}(p.status);a(new C(y,p.message))}else a(new C(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new C(I.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{P(Dt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);P(Dt,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",l,r,15)})}Ro(e,t,r){const i=md(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TO(),a=xO(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new kO({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");P(Dt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new PM({ro:b=>{p?P(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(d||(P(Dt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(Dt,`RPC '${e}' stream ${i} sending:`,b),h.send(b))},oo:()=>h.close()}),v=(b,E,R)=>{b.listen(E,S=>{try{R(S)}catch(A){setTimeout(()=>{throw A},0)}})};return v(h,rl.EventType.OPEN,()=>{p||P(Dt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,rl.EventType.CLOSE,()=>{p||(p=!0,P(Dt,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,rl.EventType.ERROR,b=>{p||(p=!0,Nn(Dt,`RPC '${e}' stream ${i} transport errored:`,b),y.wo(new C(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,rl.EventType.MESSAGE,b=>{var E;if(!p){const R=b.data[0];Y(!!R);const S=R,A=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(A){P(Dt,`RPC '${e}' stream ${i} received error:`,A);const $=A.status;let j=function(G){const W=ot[G];if(W!==void 0)return KI(W)}($),X=A.message;j===void 0&&(j=I.INTERNAL,X="Unknown error status: "+$+" with message "+A.message),p=!0,y.wo(new C(j,X)),h.close()}else P(Dt,`RPC '${e}' stream ${i} received:`,R),y._o(R)}}),v(a,AO.STAT_EVENT,b=>{b.stat===iv.PROXY?P(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===iv.NOPROXY&&P(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function AE(){return typeof window<"u"?window:null}function Pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n){return new BL(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new vg(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new C(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OM extends kE{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=zL(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?tt(s.readTime):Q.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=rc(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=ou(a)?{documents:tE(i,a)}:{query:nE(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=YI(i,s.resumeToken);const c=ff(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(Q.min())>0){o.readTime=eo(i,s.snapshotVersion.toTimestamp());const c=ff(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=KL(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=rc(this.serializer),t.removeTarget=e,this.Wo(t)}}class LM extends kE{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=HL(e.writeResults,e.commitTime),r=tt(e.commitTime);return this.listener.cu(r,t)}return Y(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=rc(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ic(this.serializer,r))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new C(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(I.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(I.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class FM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Je(t),this.mu=!1):P("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{fi(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=U(a);c.vu.add(4),await ko(c),c.bu.set("Unknown"),c.vu.delete(4),await $c(c)}(this))})}),this.bu=new FM(r,i)}}async function $c(n){if(fi(n))for(const e of n.Ru)await e(!0)}async function ko(n){for(const e of n.Ru)await e(!1)}function Ih(n,e){const t=U(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),bg(t)?_g(t):Ro(t).Ko()&&wg(t,e))}function sc(n,e){const t=U(n),r=Ro(t);t.Au.delete(e),r.Ko()&&CE(t,e),t.Au.size===0&&(r.Ko()?r.jo():fi(t)&&t.bu.set("Unknown"))}function wg(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ro(n).su(e)}function CE(n,e){n.Vu.qt(e),Ro(n).iu(e)}function _g(n){n.Vu=new FL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Ro(n).start(),n.bu.gu()}function bg(n){return fi(n)&&!Ro(n).Uo()&&n.Au.size>0}function fi(n){return U(n).vu.size===0}function RE(n){n.Vu=void 0}async function VM(n){n.Au.forEach((e,t)=>{wg(n,e)})}async function UM(n,e){RE(n),bg(n)?(n.bu.Iu(e),_g(n)):n.bu.set("Unknown")}async function BM(n,e,t){if(n.bu.set("Online"),e instanceof QI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gu(n,r)}else if(e instanceof Dl?n.Vu.Ht(e):e instanceof WI?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(Q.min()))try{const r=await bE(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(c);l&&i.Au.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken(ut.EMPTY_BYTE_STRING,l.snapshotVersion)),CE(i,a);const u=new lr(l.target,a,c,l.sequenceNumber);wg(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await gu(n,r)}}async function gu(n,e,t){if(!hi(e))throw e;n.vu.add(1),await ko(n),n.bu.set("Offline"),t||(t=()=>bE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await $c(n)})}function DE(n,e){return e().catch(t=>gu(n,t,e))}async function Co(n){const e=U(n),t=ri(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;jM(e);)try{const i=await AM(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,qM(e,i)}catch(i){await gu(e,i)}PE(e)&&NE(e)}function jM(n){return fi(n)&&n.Eu.length<10}function qM(n,e){n.Eu.push(e);const t=ri(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function PE(n){return fi(n)&&!ri(n).Uo()&&n.Eu.length>0}function NE(n){ri(n).start()}async function zM(n){ri(n).hu()}async function HM(n){const e=ri(n);for(const t of n.Eu)e.uu(t.mutations)}async function KM(n,e,t){const r=n.Eu.shift(),i=sg.from(r,e,t);await DE(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Co(n)}async function GM(n,e){e&&ri(n).ou&&await async function(t,r){if(i=r.code,HI(i)&&i!==I.ABORTED){const s=t.Eu.shift();ri(t).Qo(),await DE(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Co(t)}var i}(n,e),PE(n)&&NE(n)}async function Xv(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=fi(t);t.vu.add(3),await ko(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await $c(t)}async function _f(n,e){const t=U(n);e?(t.vu.delete(2),await $c(t)):e||(t.vu.add(2),await ko(t),t.bu.set("Unknown"))}function Ro(n){return n.Su||(n.Su=function(e,t,r){const i=U(e);return i.fu(),new OM(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:VM.bind(null,n),ao:UM.bind(null,n),nu:BM.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),bg(n)?_g(n):n.bu.set("Unknown")):(await n.Su.stop(),RE(n))})),n.Su}function ri(n){return n.Du||(n.Du=function(e,t,r){const i=U(e);return i.fu(),new LM(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:zM.bind(null,n),ao:GM.bind(null,n),au:HM.bind(null,n),cu:KM.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await Co(n)):(await n.Du.stop(),n.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Ig(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Do(n,e){if(Je("AsyncQueue",`${e}: ${n}`),hi(n))return new C(I.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(t,r)=>e(t,r)||V.comparator(t.key,r.key):(t,r)=>V.comparator(t.key,r.key),this.keyedMap=ea(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.Cu=new $e(V.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):H():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class ro{constructor(e,t,r,i,s,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ro(e,t,$s.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(){this.Nu=void 0,this.listeners=[]}}class QM{constructor(){this.queries=new di(e=>RI(e),Pc),this.onlineState="Unknown",this.ku=new Set}}async function Eg(n,e){const t=U(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new WM),i)try{s.Nu=await t.onListen(r)}catch(o){const a=Do(o,`Initialization of query '${df(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&xg(t)}async function Tg(n,e){const t=U(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function YM(n,e){const t=U(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&xg(t)}function XM(n,e,t){const r=U(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function xg(n){n.ku.forEach(e=>{e.next()})}class Sg{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.serializer=e}rr(e){return Qn(this.serializer,e)}ur(e){return e.metadata.exists?eE(this.serializer,e.document,!1):je.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return tt(e)}}class ZM{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=OE(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=Ie.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new Zv(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||he()).add(s);t.set(o,a)}}return t}async complete(){const e=await kM(this.localStore,new Zv(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await CM(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function OE(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.key=e}}class ME{constructor(e){this.key=e}}class FE{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=he(),this.mutatedKeys=he(),this.tc=PI(e),this.ec=new $s(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new Jv,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Nc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),b=!0):this.rc(d,p)||(r.track({type:2,doc:p}),b=!0,(c&&this.tc(p,c)>0||l&&this.tc(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),b=!0):d&&!p&&(r.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(p?(o=o.add(p),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((l,u)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return p(h)-p(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new ro(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Jv,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=he(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new ME(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new LE(r))}),t}hc(e){this.Yu=e.ir,this.Zu=he();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return ro.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class e2{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class t2{constructor(e){this.key=e,this.fc=!1}}class n2{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new di(a=>RI(a),Pc),this._c=new Map,this.mc=new Set,this.gc=new $e(V.comparator),this.yc=new Map,this.Ic=new fg,this.Tc={},this.Ec=new Map,this.Ac=ns.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function r2(n,e){const t=Dg(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await to(t.localStore,Zt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ag(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Ih(t.remoteStore,o)}return i}async function Ag(n,e,t,r,i){n.Rc=(h,d,p)=>async function(y,v,b,E){let R=v.view.sc(b);R.zi&&(R=await du(y.localStore,v.query,!1).then(({documents:$})=>v.view.sc($,R)));const S=E&&E.targetChanges.get(v.targetId),A=v.view.applyChanges(R,y.isPrimaryClient,S);return bf(y,v.targetId,A.cc),A.snapshot}(n,h,d,p);const s=await du(n.localStore,e,!0),o=new FE(e,s.ir),a=o.sc(s.documents),c=Mc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);bf(n,t,l.cc);const u=new e2(e,t,o);return n.wc.set(e,u),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),l.snapshot}async function i2(n,e){const t=U(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!Pc(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await no(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),sc(t.remoteStore,r.targetId),io(t,r.targetId)}).catch(ui)):(io(t,r.targetId),await no(t.localStore,r.targetId,!0))}async function s2(n,e,t){const r=Pg(n);try{const i=await function(s,o){const a=U(s),c=Ke.now(),l=o.reduce((d,p)=>d.add(p.key),he());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Qt(),y=he();return a.Zi.getEntries(d,l).next(v=>{p=v,p.forEach((b,E)=>{E.isValidDocument()||(y=y.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const b=[];for(const E of o){const R=OL(E,u.get(E.key).overlayedDocument);R!=null&&b.push(new br(E.key,R,bI(R.value.mapValue),He.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:OI(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new $e(ue)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,t),await Ir(r,i.changes),await Co(r.remoteStore)}catch(i){const s=Do(i,"Failed to persist write");t.reject(s)}}async function $E(n,e){const t=U(n);try{const r=await SM(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Y(o.fc):i.removedDocuments.size>0&&(Y(o.fc),o.fc=!1))}),await Ir(t,r,e)}catch(r){await ui(r)}}function ew(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&xg(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function o2(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new $e(V.comparator);o=o.insert(s,je.newNoDocument(s,Q.min()));const a=he().add(s),c=new Lc(Q.min(),new Map,new $e(ue),o,a);await $E(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),Rg(r)}else await no(r.localStore,e,!1).then(()=>io(r,e,t)).catch(ui)}async function a2(n,e){const t=U(n),r=e.batch.batchId;try{const i=await xM(t.localStore,e);Cg(t,r,null),kg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ir(t,i)}catch(i){await ui(i)}}async function c2(n,e,t){const r=U(n);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Y(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);Cg(r,e,t),kg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ir(r,i)}catch(i){await ui(i)}}async function l2(n,e){const t=U(n);fi(t.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=U(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ec.get(r)||[];i.push(e),t.Ec.set(r,i)}catch(r){const i=Do(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function kg(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function Cg(n,e,t){const r=U(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function io(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||VE(n,r)})}function VE(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(sc(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Rg(n))}function bf(n,e,t){for(const r of t)r instanceof LE?(n.Ic.addReference(r.key,e),u2(n,r)):r instanceof ME?(P("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||VE(n,r.key)):H()}function u2(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(P("SyncEngine","New document in limbo: "+t),n.mc.add(r),Rg(n))}function Rg(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new V(Ie.fromString(e)),r=n.Ac.next();n.yc.set(r,new t2(t)),n.gc=n.gc.insert(t,r),Ih(n.remoteStore,new lr(Zt(xo(t.path)),r,"TargetPurposeLimboResolution",Gt.ct))}}async function Ir(n,e,t){const r=U(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=mg.Li(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const l=U(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,h=>_.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>_.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!hi(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,y)}}}(r.localStore,s))}async function h2(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await _E(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new C(I.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ir(t,r.er)}}function d2(n,e){const t=U(n),r=t.yc.get(e);if(r&&r.fc)return he().add(r.key);{let i=he();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function f2(n,e){const t=U(n),r=await du(t.localStore,e.query,!0),i=e.view.hc(r);return t.isPrimaryClient&&bf(t,e.targetId,i.cc),i}async function p2(n,e){const t=U(n);return TE(t.localStore,e).then(r=>Ir(t,r))}async function g2(n,e,t,r){const i=U(n),s=await function(o,a){const c=U(o),l=U(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Sn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):_.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Co(i.remoteStore):t==="acknowledged"||t==="rejected"?(Cg(i,e,r||null),kg(i,e),function(o,a){U(U(o).mutationQueue).Cn(a)}(i.localStore,e)):H(),await Ir(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function m2(n,e){const t=U(n);if(Dg(t),Pg(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await tw(t,r.toArray());t.vc=!0,await _f(t.remoteStore,!0);for(const s of i)Ih(t.remoteStore,s)}else if(e===!1&&t.vc!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(io(t,o),no(t.localStore,o,!0))),sc(t.remoteStore,o)}),await i,await tw(t,r),function(s){const o=U(s);o.yc.forEach((a,c)=>{sc(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new $e(V.comparator)}(t),t.vc=!1,await _f(t.remoteStore,!1)}}async function tw(n,e,t){const r=U(n),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await to(r.localStore,Zt(c[0]));for(const l of c){const u=r.wc.get(l),h=await f2(r,u);h.snapshot&&s.push(h.snapshot)}}else{const l=await EE(r.localStore,o);a=await to(r.localStore,l),await Ag(r,UE(l),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function UE(n){return CI(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function y2(n){const e=U(n);return U(U(e.localStore).persistence).$i()}async function v2(n,e,t,r){const i=U(n);if(i.vc)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await TE(i.localStore,DI(s[0])),a=Lc.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ut.EMPTY_BYTE_STRING);await Ir(i,o,a);break}case"rejected":await no(i.localStore,e,!0),io(i,e,r);break;default:H()}}async function w2(n,e,t){const r=Dg(n);if(r.vc){for(const i of e){if(r._c.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await EE(r.localStore,i),o=await to(r.localStore,s);await Ag(r,UE(s),o.targetId,!1,o.resumeToken),Ih(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await no(r.localStore,i,!1).then(()=>{sc(r.remoteStore,i),io(r,i)}).catch(ui)}}function Dg(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=d2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o2.bind(null,e),e.dc.nu=YM.bind(null,e.eventManager),e.dc.Pc=XM.bind(null,e.eventManager),e}function Pg(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c2.bind(null,e),e}function _2(n,e,t){const r=U(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=U(h),y=tt(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.qs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(OE(a));const c=new ZM(a,i.localStore,s.serializer);let l=await s.bc();for(;l;){const h=await c.zu(l);h&&o._updateProgress(h),l=await s.bc()}const u=await c.complete();return await Ir(i,u.Ju,void 0),await function(h,d){const p=U(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.qs.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Hu)}catch(a){return Nn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class If{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return wE(this.persistence,new vE,e.initialUser,this.serializer)}createPersistence(e){return new yE(bh.zs,this.serializer)}createSharedClientState(e){return new SE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BE extends If{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Pg(this.Vc.syncEngine),await Co(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return wE(this.persistence,new vE,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new lM(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new KO(t,this.persistence);return new HO(e.asyncQueue,r)}createPersistence(e){const t=gg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new pg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,AE(),Pl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new SE}}class b2 extends BE{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof gd&&(this.sharedClientState.syncEngine={jr:g2.bind(null,t),zr:v2.bind(null,t),Wr:w2.bind(null,t),$i:y2.bind(null,t),Qr:p2.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await m2(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=AE();if(!gd.D(t))throw new C(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=gg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new gd(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ng{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ew(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h2.bind(null,this.syncEngine),await _f(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new QM}createDatastore(e){const t=Fc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new NM(i));var i;return function(s,o,a,c){return new MM(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ew(this.syncEngine,a,0),o=Yv.D()?new Yv:new RM,new $M(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,l){const u=new n2(r,i,s,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=U(e);P("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await ko(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Eh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new mt,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const i=await this.$c(r);return new JM(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=U(r),o=rc(s.serializer)+"/documents",a={documents:i.map(h=>nc(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=qL(s.serializer,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());Y(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ao(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=V.fromPath(r);this.mutations.push(new rg(i,this.precondition(i)))}),await async function(t,r){const i=U(t),s=rc(i.serializer)+"/documents",o={writes:r.map(a=>ic(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw H();t=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new C(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Q.min())?He.exists(!1):He.updateTime(t):He.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Q.min()))throw new C(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return He.updateTime(t)}return He.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class T2{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new vg(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new E2(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!Rc(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!HI(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=oI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Do(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nl(n,e){n.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _E(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ef(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Og(n);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Xv(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Xv(e.remoteStore,s)),n._onlineComponents=e}function jE(n){return n.name==="FirebaseError"?n.code===I.FAILED_PRECONDITION||n.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Og(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!jE(t))throw t;Nn("Error using user provided cache. Falling back to memory cache: "+t),await Nl(n,new If)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Nl(n,new If);return n._offlineComponents}async function Th(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Ef(n,n._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Ef(n,new Ng))),n._onlineComponents}function qE(n){return Og(n).then(e=>e.persistence)}function Lg(n){return Og(n).then(e=>e.localStore)}function zE(n){return Th(n).then(e=>e.remoteStore)}function Mg(n){return Th(n).then(e=>e.syncEngine)}function S2(n){return Th(n).then(e=>e.datastore)}async function so(n){const e=await Th(n),t=e.eventManager;return t.onListen=r2.bind(null,e.syncEngine),t.onUnlisten=i2.bind(null,e.syncEngine),t}function A2(n){return n.asyncQueue.enqueue(async()=>{const e=await qE(n),t=await zE(n);return e.setNetworkEnabled(!0),function(r){const i=U(r);return i.vu.delete(0),$c(i)}(t)})}function k2(n){return n.asyncQueue.enqueue(async()=>{const e=await qE(n),t=await zE(n);return e.setNetworkEnabled(!1),async function(r){const i=U(r);i.vu.add(0),await ko(i),i.bu.set("Offline")}(t)})}function C2(n,e){const t=new mt;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const l=U(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Do(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Lg(n),e,t)),t.promise}function HE(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Eh({next:h=>{s.enqueueAndForget(()=>Tg(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new C(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new C(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Sg(xo(o.path),l,{includeMetadataChanges:!0,Ku:!0});return Eg(i,u)}(await so(n),n.asyncQueue,e,t,r)),r.promise}function R2(n,e){const t=new mt;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await du(r,i,!0),a=new FE(i,o.ir),c=a.sc(o.documents),l=a.applyChanges(c,!1);s.resolve(l.snapshot)}catch(o){const a=Do(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Lg(n),e,t)),t.promise}function KE(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Eh({next:h=>{s.enqueueAndForget(()=>Tg(i,u)),h.fromCache&&a.source==="server"?c.reject(new C(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Sg(o,l,{includeMetadataChanges:!0,Ku:!0});return Eg(i,u)}(await so(n),n.asyncQueue,e,t,r)),r.promise}function D2(n,e){const t=new Eh(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).ku.add(i),i.next()}(await so(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).ku.delete(i)}(await so(n),t))}}function P2(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?GI().encode(s):s,function(c,l){return new I2(c,l)}(function(c,l){if(c instanceof Uint8Array)return nw(c,l);if(c instanceof ArrayBuffer)return nw(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Fc(e));n.asyncQueue.enqueueAndForget(async()=>{_2(await Mg(n),i,r)})}function N2(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=U(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Lg(n),e))}/**
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
 */function GE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n,e,t){if(!t)throw new C(I.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WE(n,e,t,r){if(e===!0&&r===!0)throw new C(I.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function iw(n){if(!V.isDocumentKey(n))throw new C(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sw(n){if(V.isDocumentKey(n))throw new C(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function Ae(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new C(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xh(n);throw new C(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function QE(n,e){if(e<=0)throw new C(I.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new C(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new C(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new C(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new C(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Vc{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ow({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ow(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new NO;switch(t.type){case"firstParty":return new FO(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new C(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=rw.get(e);t&&(P("ComponentProvider","Removing Datastore"),rw.delete(e),t.terminate())}(this),Promise.resolve()}}function O2(n,e,t,r={}){var i;const s=(n=Ae(n,Vc))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=pt.MOCK_USER;else{a=Q1(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new C(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pt(l)}n._authCredentials=new OO(new sI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Rt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rt(this.firestore,e,this._query)}}class Yn extends Rt{constructor(e,t,r){super(e,t,xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new V(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function YE(n,e,...t){if(n=ne(n),Fg("collection","path",e),n instanceof Vc){const r=Ie.fromString(e,...t);return sw(r),new Yn(n,null,r)}{if(!(n instanceof ze||n instanceof Yn))throw new C(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ie.fromString(e,...t));return sw(r),new Yn(n.firestore,null,r)}}function L2(n,e){if(n=Ae(n,Vc),Fg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(n,null,function(t){return new _r(Ie.emptyPath(),t)}(e))}function mu(n,e,...t){if(n=ne(n),arguments.length===1&&(e=oI.A()),Fg("doc","path",e),n instanceof Vc){const r=Ie.fromString(e,...t);return iw(r),new ze(n,null,new V(r))}{if(!(n instanceof ze||n instanceof Yn))throw new C(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ie.fromString(e,...t));return iw(r),new ze(n.firestore,n instanceof Yn?n.converter:null,new V(r))}}function XE(n,e){return n=ne(n),e=ne(e),(n instanceof ze||n instanceof Yn)&&(e instanceof ze||e instanceof Yn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function JE(n,e){return n=ne(n),e=ne(e),n instanceof Rt&&e instanceof Rt&&n.firestore===e.firestore&&Pc(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new vg(this,"async_queue_retry"),this.Xc=()=>{const t=Pl();t&&P("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Pl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Pl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new mt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!hi(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Je("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=Ig.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&H()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Tf(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class F2{constructor(){this._progressObserver={},this._taskCompletionResolver=new mt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=-1;class Xe extends Vc{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new M2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZE(this),this._firestoreClient.terminate()}}function bt(n){return n._firestoreClient||ZE(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ZE(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,l){return new fL(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,GE(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new x2(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function V2(n,e){tT(n=Ae(n,Xe));const t=bt(n);if(t._uninitializedComponentsProvider)throw new C(I.FAILED_PRECONDITION,"SDK cache is already specified.");Nn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Ng;return eT(t,i,new BE(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function U2(n){tT(n=Ae(n,Xe));const e=bt(n);if(e._uninitializedComponentsProvider)throw new C(I.FAILED_PRECONDITION,"SDK cache is already specified.");Nn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Ng;return eT(e,r,new b2(r,t.cacheSizeBytes))}function eT(n,e,t){const r=new mt;return n.asyncQueue.enqueue(async()=>{try{await Nl(n,t),await Ef(n,e),r.resolve()}catch(i){const s=i;if(!jE(s))throw s;Nn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function B2(n){if(n._initialized&&!n._terminated)throw new C(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new mt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!An.D())return Promise.resolve();const r=t+"main";await An.delete(r)}(gg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function j2(n){return function(e){const t=new mt;return e.asyncQueue.enqueueAndForget(async()=>l2(await Mg(e),t)),t.promise}(bt(n=Ae(n,Xe)))}function q2(n){return A2(bt(n=Ae(n,Xe)))}function z2(n){return k2(bt(n=Ae(n,Xe)))}function H2(n,e){const t=bt(n=Ae(n,Xe)),r=new F2;return P2(t,n._databaseId,e,r),r}function K2(n,e){return N2(bt(n=Ae(n,Xe)),e).then(t=>t?new Rt(n,null,t.query):null)}function tT(n){if(n._initialized||n._terminated)throw new C(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nr(ut.fromBase64String(e))}catch(t){throw new C(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nr(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=/^__.*__$/;class W2{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,t,this.fieldTransforms):new So(e,this.data,t,this.fieldTransforms)}}class nT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new br(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Ah{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return yu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(rT(this.ca)&&G2.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Q2{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fc(e)}ya(e,t,r,i=!1){return new Ah({ca:e,methodName:t,ga:r,path:Ze.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hs(n){const e=n._freezeSettings(),t=Fc(n._databaseId);return new Q2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kh(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);Bg("Data must be an object, but it was:",o,r);const a=oT(r,o);let c,l;if(s.merge)c=new Wt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=xf(e,h,t);if(!o.contains(d))throw new C(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);cT(u,d)||u.push(d)}c=new Wt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new W2(new xt(a),c,l)}class Uc extends us{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uc}}function iT(n,e,t){return new Ah({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class $g extends us{_toFieldTransform(e){return new Oc(e.path,new Js)}isEqual(e){return e instanceof $g}}class Y2 extends us{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=iT(this,e,!0),r=this.pa.map(s=>ds(s,t)),i=new Ji(r);return new Oc(e.path,i)}isEqual(e){return this===e}}class X2 extends us{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=iT(this,e,!0),r=this.pa.map(s=>ds(s,t)),i=new Zi(r);return new Oc(e.path,i)}isEqual(e){return this===e}}class J2 extends us{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Zs(e.serializer,$I(e.serializer,this.Ia));return new Oc(e.path,t)}isEqual(e){return this===e}}function Vg(n,e,t,r){const i=n.ya(1,e,t);Bg("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();ls(r,(c,l)=>{const u=jg(e,c,t);l=ne(l);const h=i.da(u);if(l instanceof Uc)s.push(u);else{const d=ds(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Wt(s);return new nT(o,a,i.fieldTransforms)}function Ug(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[xf(e,r,t)],c=[i];if(s.length%2!=0)throw new C(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(xf(e,s[d])),c.push(s[d+1]);const l=[],u=xt.empty();for(let d=a.length-1;d>=0;--d)if(!cT(l,a[d])){const p=a[d];let y=c[d];y=ne(y);const v=o.da(p);if(y instanceof Uc)l.push(p);else{const b=ds(y,v);b!=null&&(l.push(p),u.set(p,b))}}const h=new Wt(l);return new nT(u,h,o.fieldTransforms)}function sT(n,e,t,r=!1){return ds(t,n.ya(r?4:3,e))}function ds(n,e){if(aT(n=ne(n)))return Bg("Unsupported field value:",e,n),oT(n,e);if(n instanceof us)return function(t,r){if(!rT(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=ds(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=ne(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return $I(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Ke.fromDate(t);return{timestampValue:eo(r.serializer,i)}}if(t instanceof Ke){const i=new Ke(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:eo(r.serializer,i)}}if(t instanceof Sh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof nr)return{bytesValue:YI(r.serializer,t._byteString)};if(t instanceof ze){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lg(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${xh(t)}`)}(n,e)}function oT(n,e){const t={};return vI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(n,(r,i)=>{const s=ds(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function aT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ke||n instanceof Sh||n instanceof nr||n instanceof ze||n instanceof us)}function Bg(n,e,t){if(!aT(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=xh(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function xf(n,e,t){if((e=ne(e))instanceof ii)return e._internalPath;if(typeof e=="string")return jg(n,e);throw yu("Field path arguments must be of type string or ",n,!1,void 0,t)}const Z2=new RegExp("[~\\*/\\[\\]]");function jg(n,e,t){if(e.search(Z2)>=0)throw yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ii(...e.split("."))._internalPath}catch{throw yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function yu(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new C(I.INVALID_ARGUMENT,a+n+c)}function cT(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ch("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class eF extends oc{data(){return super.data()}}function Ch(n,e){return typeof e=="string"?jg(n,e):e instanceof ii?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new C(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qg{}class Bc extends qg{}function kr(n,e,...t){let r=[];e instanceof qg&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof zg).length,o=i.filter(a=>a instanceof Rh).length;if(s>1||s>0&&o>0)throw new C(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Rh extends Bc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Rh(e,t,r)}_apply(e){const t=this._parse(e);return hT(e._query,t),new Rt(e.firestore,e.converter,hf(e._query,t))}_parse(e){const t=hs(e.firestore);return function(i,s,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new C(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){cw(u,l);const d=[];for(const p of u)d.push(aw(a,i,p));h={arrayValue:{values:d}}}else h=aw(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||cw(u,l),h=sT(o,s,u,l==="in"||l==="not-in");return ye.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function tF(n,e,t){const r=e,i=Ch("where",n);return Rh._create(i,r,t)}class zg extends qg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new zg(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)hT(s,a),s=hf(s,a)}(e._query,t),new Rt(e.firestore,e.converter,hf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hg extends Bc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Hg(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new C(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Fs(i,s);return function(a,c){if(eg(a)===null){const l=mh(a);l!==null&&dT(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Rt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new _r(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function nF(n,e="asc"){const t=e,r=Ch("orderBy",n);return Hg._create(r,t)}class Dh extends Bc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Dh(e,t,r)}_apply(e){return new Rt(e.firestore,e.converter,cu(e._query,this._limit,this._limitType))}}function rF(n){return QE("limit",n),Dh._create("limit",n,"F")}function iF(n){return QE("limitToLast",n),Dh._create("limitToLast",n,"L")}class Ph extends Bc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ph(e,t,r)}_apply(e){const t=uT(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(r,i){return new _r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function sF(...n){return Ph._create("startAt",n,!0)}function oF(...n){return Ph._create("startAfter",n,!1)}class Nh extends Bc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Nh(e,t,r)}_apply(e){const t=uT(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(r,i){return new _r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function aF(...n){return Nh._create("endBefore",n,!1)}function cF(...n){return Nh._create("endAt",n,!0)}function uT(n,e,t,r){if(t[0]=ne(t[0]),t[0]instanceof oc)return function(i,s,o,a,c){if(!a)throw new C(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of qi(i))if(u.field.isKeyField())l.push(Yi(s,a.key));else{const h=a.data.field(u.field);if(gh(h))throw new C(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new C(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ni(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=hs(n.firestore);return function(s,o,a,c,l,u){const h=s.explicitOrderBy;if(l.length>h.length)throw new C(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<l.length;p++){const y=l[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new C(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof y}`);if(!tg(s)&&y.indexOf("/")!==-1)throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(Ie.fromString(y));if(!V.isDocumentKey(v))throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const b=new V(v);d.push(Yi(o,b))}else{const v=sT(a,c,y);d.push(v)}}return new ni(d,u)}(n._query,n.firestore._databaseId,i,e,t,r)}}function aw(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new C(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tg(e)&&t.indexOf("/")!==-1)throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ie.fromString(t));if(!V.isDocumentKey(r))throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yi(n,new V(r))}if(t instanceof ze)return Yi(n,t._key);throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xh(t)}.`)}function cw(n,e){if(!Array.isArray(n)||n.length===0)throw new C(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hT(n,e){if(e.isInequality()){const r=mh(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new C(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=eg(n);s!==null&&dT(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function dT(n,e,t){if(!t.isEqual(e))throw new C(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Kg{convertValue(e,t="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ls(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Sh(Qe(e.latitude),Qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Jp(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const t=Jr(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ie.fromString(e);Y(oE(r));const i=new ei(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(t)||Je(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class lF extends Kg{constructor(e){super(),this.firestore=e}convertBytes(e){return new nr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gr extends oc{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ba extends gr{data(e={}){return super.data(e)}}class si{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ba(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ba(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ba(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:uF(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function uF(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}function fT(n,e){return n instanceof gr&&e instanceof gr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof si&&e instanceof si&&n._firestore===e._firestore&&JE(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(n){n=Ae(n,ze);const e=Ae(n.firestore,Xe);return HE(bt(e),n._key).then(t=>Gg(e,n,t))}class fs extends Kg{constructor(e){super(),this.firestore=e}convertBytes(e){return new nr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}function dF(n){n=Ae(n,ze);const e=Ae(n.firestore,Xe),t=bt(e),r=new fs(e);return C2(t,n._key).then(i=>new gr(e,r,n._key,i,new Oi(i!==null&&i.hasLocalMutations,!0),n.converter))}function fF(n){n=Ae(n,ze);const e=Ae(n.firestore,Xe);return HE(bt(e),n._key,{source:"server"}).then(t=>Gg(e,n,t))}function pF(n){n=Ae(n,Rt);const e=Ae(n.firestore,Xe),t=bt(e),r=new fs(e);return lT(n._query),KE(t,n._query).then(i=>new si(e,r,n,i))}function gF(n){n=Ae(n,Rt);const e=Ae(n.firestore,Xe),t=bt(e),r=new fs(e);return R2(t,n._query).then(i=>new si(e,r,n,i))}function mF(n){n=Ae(n,Rt);const e=Ae(n.firestore,Xe),t=bt(e),r=new fs(e);return KE(t,n._query,{source:"server"}).then(i=>new si(e,r,n,i))}function lw(n,e,t){n=Ae(n,ze);const r=Ae(n.firestore,Xe),i=Oh(n.converter,e,t);return jc(r,[kh(hs(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,He.none())])}function uw(n,e,t,...r){n=Ae(n,ze);const i=Ae(n.firestore,Xe),s=hs(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof ii?Ug(s,"updateDoc",n._key,e,t,r):Vg(s,"updateDoc",n._key,e),jc(i,[o.toMutation(n._key,He.exists(!0))])}function yF(n){return jc(Ae(n.firestore,Xe),[new Ao(n._key,He.none())])}function vF(n,e){const t=Ae(n.firestore,Xe),r=mu(n),i=Oh(n.converter,e);return jc(t,[kh(hs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,He.exists(!1))]).then(()=>r)}function pT(n,...e){var t,r,i;n=ne(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Tf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Tf(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof ze)l=Ae(n.firestore,Xe),u=xo(n._key.path),c={next:h=>{e[o]&&e[o](Gg(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Ae(n,Rt);l=Ae(h.firestore,Xe),u=h._query;const d=new fs(l);c={next:p=>{e[o]&&e[o](new si(l,d,h,p))},error:e[o+1],complete:e[o+2]},lT(n._query)}return function(h,d,p,y){const v=new Eh(y),b=new Sg(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Eg(await so(h),b)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>Tg(await so(h),b))}}(bt(l),u,a,c)}function wF(n,e){return D2(bt(n=Ae(n,Xe)),Tf(e)?e:{next:e})}function jc(n,e){return function(t,r){const i=new mt;return t.asyncQueue.enqueueAndForget(async()=>s2(await Mg(t),r,i)),i.promise}(bt(n),e)}function Gg(n,e,t){const r=t.docs.get(e._key),i=new fs(n);return new gr(n,i,e._key,r,new Oi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const _F={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=hs(e)}set(e,t,r){this._verifyNotCommitted();const i=Fr(e,this._firestore),s=Oh(i.converter,t,r),o=kh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,He.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Fr(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof ii?Ug(this._dataReader,"WriteBatch.update",s._key,t,r,i):Vg(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,He.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Fr(e,this._firestore);return this._mutations=this._mutations.concat(new Ao(t._key,He.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fr(n,e){if((n=ne(n)).firestore!==e)throw new C(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IF extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=hs(e)}get(e){const t=Fr(e,this._firestore),r=new lF(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return H();const s=i[0];if(s.isFoundDocument())return new oc(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new oc(this._firestore,r,t._key,null,t.converter);throw H()})}set(e,t,r){const i=Fr(e,this._firestore),s=Oh(i.converter,t,r),o=kh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Fr(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof ii?Ug(this._dataReader,"Transaction.update",s._key,t,r,i):Vg(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Fr(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Fr(e,this._firestore),r=new fs(this._firestore);return super.get(e).then(i=>new gr(this._firestore,r,t._key,i._document,new Oi(!1,!1),t.converter))}}function EF(n,e,t){n=Ae(n,Xe);const r=Object.assign(Object.assign({},_F),t);return function(i){if(i.maxAttempts<1)throw new C(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new mt;return i.asyncQueue.enqueueAndForget(async()=>{const c=await S2(i);new T2(i.asyncQueue,c,o,s,a).run()}),a.promise}(bt(n),i=>e(new IF(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TF(){return new Uc("deleteField")}function xF(){return new $g("serverTimestamp")}function SF(...n){return new Y2("arrayUnion",n)}function AF(...n){return new X2("arrayRemove",n)}function kF(n){return new J2("increment",n)}(function(n,e=!0){(function(t){To=t})(oi),Qr(new Zn("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new Xe(new LO(t.getProvider("auth-internal")),new VO(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Wn(sv,"3.12.2",n),Wn(sv,"3.12.2","esm2017")})();const CF="@firebase/firestore-compat",RF="0.3.11";/**
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
 */function Wg(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function dw(){if(!hL())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ac{constructor(e){this._delegate=e}static fromBase64String(e){return dw(),new ac(nr.fromBase64String(e))}static fromUint8Array(e){return hw(),new ac(nr.fromUint8Array(e))}toBase64(){return dw(),this._delegate.toBase64()}toUint8Array(){return hw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n){return DF(n,["next","error","complete"])}function DF(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{enableIndexedDbPersistence(e,t){return V2(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return U2(e._delegate)}clearIndexedDbPersistence(e){return B2(e._delegate)}}class gT{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ei||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Nn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){O2(this._delegate,e,t,r)}enableNetwork(){return q2(this._delegate)}disableNetwork(){return z2(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,WE("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return j2(this._delegate)}onSnapshotsInSync(e){return wF(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new oo(this,YE(this._delegate,e))}catch(t){throw Vt(t,"collection()","Firestore.collection()")}}doc(e){try{return new fn(this,mu(this._delegate,e))}catch(t){throw Vt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new $t(this,L2(this._delegate,e))}catch(t){throw Vt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return EF(this._delegate,t=>e(new mT(this,t)))}batch(){return bt(this._delegate),new yT(new bF(this._delegate,e=>jc(this._delegate,e)))}loadBundle(e){return H2(this._delegate,e)}namedQuery(e){return K2(this._delegate,e).then(t=>t?new $t(this,t):null)}}class Lh extends Kg{constructor(e){super(),this.firestore=e}convertBytes(e){return new ac(new nr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return fn.forKey(t,this.firestore,null)}}function NF(n){DO(n)}class mT{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Lh(e)}get(e){const t=Li(e);return this._delegate.get(t).then(r=>new cc(this._firestore,new gr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Li(e);return r?(Wg("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Li(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Li(e);return this._delegate.delete(t),this}}class yT{constructor(e){this._delegate=e}set(e,t,r){const i=Li(e);return r?(Wg("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Li(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Li(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class rs{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new ba(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new lc(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=rs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new rs(e,new Lh(e),t),i.set(t,s)),s}}rs.INSTANCES=new WeakMap;class fn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Lh(e)}static forPath(e,t,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new fn(t,new ze(t._delegate,r,new V(e)))}static forKey(e,t,r){return new fn(t,new ze(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new oo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new oo(this.firestore,YE(this._delegate,e))}catch(t){throw Vt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof ze?XE(this._delegate,e):!1}set(e,t){t=Wg("DocumentReference.set",t);try{return t?lw(this._delegate,e,t):lw(this._delegate,e)}catch(r){throw Vt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?uw(this._delegate,e):uw(this._delegate,e,t,...r)}catch(i){throw Vt(i,"updateDoc()","DocumentReference.update()")}}delete(){return yF(this._delegate)}onSnapshot(...e){const t=vT(e),r=wT(e,i=>new cc(this.firestore,new gr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return pT(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=dF(this._delegate):(e==null?void 0:e.source)==="server"?t=fF(this._delegate):t=hF(this._delegate),t.then(r=>new cc(this.firestore,new gr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new fn(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Vt(n,e,t){return n.message=n.message.replace(e,t),n}function vT(n){for(const e of n)if(typeof e=="object"&&!Sf(e))return e;return{}}function wT(n,e){var t,r;let i;return Sf(n[0])?i=n[0]:Sf(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class cc{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new fn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return fT(this._delegate,e._delegate)}}class lc extends cc{data(e){const t=this._delegate.data(e);return PO(t!==void 0),t}}class $t{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Lh(e)}where(e,t,r){try{return new $t(this.firestore,kr(this._delegate,tF(e,t,r)))}catch(i){throw Vt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new $t(this.firestore,kr(this._delegate,nF(e,t)))}catch(r){throw Vt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new $t(this.firestore,kr(this._delegate,rF(e)))}catch(t){throw Vt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new $t(this.firestore,kr(this._delegate,iF(e)))}catch(t){throw Vt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new $t(this.firestore,kr(this._delegate,sF(...e)))}catch(t){throw Vt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new $t(this.firestore,kr(this._delegate,oF(...e)))}catch(t){throw Vt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new $t(this.firestore,kr(this._delegate,aF(...e)))}catch(t){throw Vt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new $t(this.firestore,kr(this._delegate,cF(...e)))}catch(t){throw Vt(t,"endAt()","Query.endAt()")}}isEqual(e){return JE(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=gF(this._delegate):(e==null?void 0:e.source)==="server"?t=mF(this._delegate):t=pF(this._delegate),t.then(r=>new Af(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=vT(e),r=wT(e,i=>new Af(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return pT(this._delegate,t,r)}withConverter(e){return new $t(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class OF{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new lc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Af{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new $t(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new lc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new OF(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new lc(this._firestore,r))})}isEqual(e){return fT(this._delegate,e._delegate)}}class oo extends $t{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new fn(this.firestore,e):null}doc(e){try{return e===void 0?new fn(this.firestore,mu(this._delegate)):new fn(this.firestore,mu(this._delegate,e))}catch(t){throw Vt(t,"doc()","CollectionReference.doc()")}}add(e){return vF(this._delegate,e).then(t=>new fn(this.firestore,t))}isEqual(e){return XE(this._delegate,e._delegate)}withConverter(e){return new oo(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Li(n){return Ae(n,ze)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(...e){this._delegate=new ii(...e)}static documentId(){return new Qg(Ze.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof ii?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this._delegate=e}static serverTimestamp(){const e=xF();return e._methodName="FieldValue.serverTimestamp",new Si(e)}static delete(){const e=TF();return e._methodName="FieldValue.delete",new Si(e)}static arrayUnion(...e){const t=SF(...e);return t._methodName="FieldValue.arrayUnion",new Si(t)}static arrayRemove(...e){const t=AF(...e);return t._methodName="FieldValue.arrayRemove",new Si(t)}static increment(e){const t=kF(e);return t._methodName="FieldValue.increment",new Si(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const LF={Firestore:gT,GeoPoint:Sh,Timestamp:Ke,Blob:ac,Transaction:mT,WriteBatch:yT,DocumentReference:fn,DocumentSnapshot:cc,Query:$t,QueryDocumentSnapshot:lc,QuerySnapshot:Af,CollectionReference:oo,FieldPath:Qg,FieldValue:Si,setLogLevel:NF,CACHE_SIZE_UNLIMITED:$2};function MF(n,e){n.INTERNAL.registerComponent(new Zn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},LF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FF(n){MF(n,(e,t)=>new gT(e,t,new PF)),n.registerVersion(CF,RF)}FF(bn);const $F={apiKey:"AIzaSyB92XCW231iCTqH4TmwITBeQvbLVqneYA8",authDomain:"itemshare-68ae3.firebaseapp.com",projectId:"itemshare-68ae3",storageBucket:"itemshare-68ae3.appspot.com",messagingSenderId:"468617277076",appId:"1:468617277076:web:6c0ce2cd38ad48ca66ce81"};bn.initializeApp($F);bn.firestore.FieldValue.serverTimestamp;const VF=bn.firestore(),UF=["onSubmit"],BF=f("h1",null,"Create an account",-1),jF={class:"flex xl:gap-12 gap-2 xl:flex-row flex-col"},qF={class:"flex flex-col gap-2 basis-1/2"},zF=f("label",{for:"phone"},"Phone Number",-1),HF=f("button",{class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl"}," Send SMS Code ",-1),KF=f("label",{for:"email"},"Email Address",-1),GF=f("label",{for:"fname"},"First Name",-1),WF=f("label",{for:"lname"},"Last Name",-1),QF=f("label",{for:"fname"},"Gender",-1),YF=f("option",null,"Male",-1),XF=f("option",null,"Female",-1),JF=f("option",null,"Others",-1),ZF=[YF,XF,JF],e$={class:"flex flex-col gap-2 basis-1/2"},t$=f("label",{for:"bday"},"Birthday",-1),n$=f("label",{for:"password"},"Password",-1),r$=f("label",{for:"confirm password"},"Confirm Password",-1),i$={class:"text-sm"},s$=f("span",null," I agree to the ",-1),o$=f("button",{class:"py-3 px-5 text-white bg-green-800 rounded-xl"}," CREATE ACCOUNT ",-1),a$={__name:"RegisterView",setup(n){const e=ep(),t=xe(""),r=xe(""),i=xe(""),s=xe(""),o=xe("Select"),a=xe(""),c=xe(""),l=xe(""),u=xe(!1),h=xe(!1),d=xe(!1);let p=xe(!1),y=xe("");const v=async()=>{try{if(t.value!==""&&r.value!==""&&i.value!==""&&s.value!==""&&o.value!=="Select"&&a.value!==""&&c.value!==""&&l!=="")if(c.value===l.value)if(d.value){const R=await await(await bn.auth()).createUserWithEmailAndPassword(r.value,c.value);await VF.collection("users").doc(R.user.uid).set({firstName:i.value,lastName:s.value,email:r.value,phoneNumber:t.value,gender:o.value,birthday:a.value,verified:u.value,admin:h.value}),e.push("/home");return}else p.value=!0,y.value="Please agree to the terms and conditions.";else p.value=!0,y.value="Password does not match!";else p.value=!0,y.value="Please fill out all the fields!"}catch(b){p.value=!0,y.value=b.message}};return(b,E)=>{const R=ss("RouterLink");return se(),me("form",{class:"flex gap-2 flex-col",onSubmit:qs(v,["stop","prevent"])},[BF,f("div",jF,[f("div",qF,[zF,dt(f("input",{"onUpdate:modelValue":E[0]||(E[0]=S=>t.value=S),name:"phone",type:"tel",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Enter your phone number"},null,512),[[Tn,t.value]]),HF,KF,dt(f("input",{"onUpdate:modelValue":E[1]||(E[1]=S=>r.value=S),name:"email",type:"email",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Email"},null,512),[[Tn,r.value]]),GF,dt(f("input",{"onUpdate:modelValue":E[2]||(E[2]=S=>i.value=S),name:"fname",type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"First Name"},null,512),[[Tn,i.value]]),WF,dt(f("input",{"onUpdate:modelValue":E[3]||(E[3]=S=>s.value=S),name:"lname",type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Last Name"},null,512),[[Tn,s.value]]),QF,dt(f("select",{"onUpdate:modelValue":E[4]||(E[4]=S=>o.value=S),name:"fname",type:"text",class:"py-3 px-5 bg-yellow-200 text-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Gender"},ZF,512),[[cA,o.value]])]),f("div",e$,[t$,dt(f("input",{"onUpdate:modelValue":E[5]||(E[5]=S=>a.value=S),name:"bday",type:"date",class:"py-3 px-5 bg-yellow-200 text-yellow-700 border-2 border-yellow-500 rounded-xl"},null,512),[[Tn,a.value]]),n$,dt(f("input",{"onUpdate:modelValue":E[6]||(E[6]=S=>c.value=S),name:"password",type:"password",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Password"},null,512),[[Tn,c.value]]),r$,dt(f("input",{"onUpdate:modelValue":E[7]||(E[7]=S=>l.value=S),name:"confirm password",type:"password",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Confirm Password"},null,512),[[Tn,l.value]]),dt(f("div",{class:"errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"},De(re(y)),513),[[ca,re(p)]]),f("p",i$,[dt(f("input",{type:"checkbox",name:"checkbox",id:"checkbox","onUpdate:modelValue":E[8]||(E[8]=S=>d.value=S)},null,512),[[aA,d.value]]),s$,ie(R,{to:"/terms-and-conditions",class:"underline"},{default:Pe(()=>[fe(" Terms and Conditions ")]),_:1})]),o$,ie(R,{to:"/login",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-xl text-center"},{default:Pe(()=>[fe(" GO BACK ")]),_:1})])])],40,UF)}}},qc=IA("itemshare",{state:()=>({temp:1,sampleItems:[{id:1,name:"Lampshade",location:"Baybay City",price:"150.00",rate:"per week",img:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"},{id:2,name:"Outdoor Bench",location:"Tacloban City",price:"150.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg"},{id:3,name:"Cushion set A",location:"Maasin City",price:"50.00",rate:"per week",img:"https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg"},{id:4,name:"Table",location:"Ormoc City",price:"100.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg"},{id:5,name:"Chair",location:"Sogod, Southern Leyte",price:"75.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg"},{id:6,name:"Bookshelf",location:"Biliran",price:"200.00",rate:"per week",img:"https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg"},{id:7,name:"Sofa",location:"Ormoc City",price:"250.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg"},{id:8,name:"Dining Table",location:"Baybay City",price:"180.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg"},{id:9,name:"Kitchen Cabinet",location:"Maasin, Southern Leyte",price:"220.00",rate:"per week",img:"https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg"},{id:10,name:"Desk",location:"Tacloban City",price:"120.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg"},{id:11,name:"Bed Frame",location:"Ormoc City",price:"200.00",rate:"per week",img:"https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg"},{id:12,name:"Mattress",location:"Baybay City",price:"100.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg"},{id:13,name:"Wardrobe",location:"Tacloban City",price:"180.00",rate:"per week",img:"https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg"},{id:14,name:"Television",location:"Maasin, Southern Leyte",price:"150.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg"},{id:15,name:"Coffee Table",location:"Ormoc City",price:"90.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg"},{id:16,name:"Side Table",location:"Baybay City",price:"60.00",rate:"per week",img:"https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg"},{id:17,name:"Dresser",location:"Tacloban City",price:"180.00",rate:"per day",img:"https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg"},{id:18,name:"Armchair",location:"Maasin, Southern Leyte",price:"120.00",rate:"per week",img:"https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg"}],sampleConvos:[{username:"John Doe",lastMessage:"Sample message"}]}),getters:{tempGetter(n){return n.temp},productsCheaperThan(n){return e=>n.products.filter(t=>t.price<e)},itemsInRange(n){return(e,t)=>n.sampleItems.slice(e,t)},itemById(n){return e=>n.sampleItems.find(t=>t.id==e)}},actions:{login(){return!0},searchItem(){return!0}}}),c$=f("span",{class:"text-3xl text-white font-poppins font-black underline decoration-green-900 underline-offset-4 decoration-4 md:inline-block hidden select-none"},"ItemShare",-1),l$=["src"],u$={__name:"ItemShareLogo",setup(n){return(e,t)=>(se(),yn(re(Nt),{to:"/home",class:"flex gap-2 items-center"},{default:Pe(()=>[c$,f("img",{src:re(V_),class:"w-10 rounded-xl",loading:"lazy"},null,8,l$)]),_:1}))}},h$={class:"text-green-600 whitespace-pre"},d$={class:"material-icons-outlined"},Mi={__name:"StarRating",props:{value:{type:Number,default:0}},setup(n){return(e,t)=>(se(),me("p",h$,[(se(),me(Me,null,mn(5,r=>f("span",d$,De(r<n.value?"star":"grade"),1)),64))]))}},f$={class:"rounded-lg shadow-md shadow-gray-400 overflow-hidden hidden z-50 bg-white",id:"dropdownNotifications"},p$={class:"h-64 w-full md:w-96 flex flex-col","aria-labelledby":"dropdownNotificationsButton"},g$=f("h2",{class:"font-bold px-3 py-2 shadow-sm shadow-gray-400 z-10 text-green-600"}," NOTIFICATIONS ",-1),m$={class:"overflow-y-auto bg-green-50"},y$={class:"flex flex-col gap-1 p-2"},v$={class:"p-2 text-sm shadow-sm bg-white shadow-gray-400 text-gray-700"},w$={__name:"NotificationsPopup",setup(n){const e=xe([{type:"review",message:'Lorem Dolor gave your "3D Scanner" a rating:',rating:4,time:"JUST NOW"},{type:"review",message:'Lorem Dolor left a review to your "3D Scanner": "Way lami imo item di nani nahu iuli nimo kay ahu ni sunugon human gamit!"',rating:5,time:"24 MINS AGO"},{type:"upcoming",message:'"2D Printer" will be ready for you to pick up in 24 hours.',time:"23 HOURS AGO"},{type:"message",message:"Lorem Dolor chatted you! Be sure to leave a reply.",time:"4 DAYS AGO"}]);return(t,r)=>(se(),me("div",f$,[f("div",p$,[g$,f("div",m$,[f("div",y$,[(se(!0),me(Me,null,mn(e.value,i=>(se(),me("article",v$,[f("p",null,De(i.message),1),i.rating?(se(),yn(Mi,{key:0,value:i.rating},null,8,["value"])):aa("",!0),f("p",null,De(i.time),1)]))),256))])])])]))}};var _$=function(){function n(e,t){t===void 0&&(t=[]),this._eventType=e,this._eventFunctions=t}return n.prototype.init=function(){var e=this;this._eventFunctions.forEach(function(t){typeof window<"u"&&window.addEventListener(e._eventType,t)})},n}(),vu=globalThis&&globalThis.__assign||function(){return vu=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},vu.apply(this,arguments)},wu={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},_T=function(){function n(e,t){e===void 0&&(e=[]),t===void 0&&(t=wu),this._items=e,this._options=vu(vu({},wu),t),this._init()}return n.prototype._init=function(){var e=this;this._items.length&&this._items.map(function(t){t.active&&e.open(t.id),t.triggerEl.addEventListener("click",function(){e.toggle(t.id)})})},n.prototype.getItem=function(e){return this._items.filter(function(t){return t.id===e})[0]},n.prototype.open=function(e){var t,r,i=this,s=this.getItem(e);this._options.alwaysOpen||this._items.map(function(o){var a,c;o!==s&&((a=o.triggerEl.classList).remove.apply(a,i._options.activeClasses.split(" ")),(c=o.triggerEl.classList).add.apply(c,i._options.inactiveClasses.split(" ")),o.targetEl.classList.add("hidden"),o.triggerEl.setAttribute("aria-expanded","false"),o.active=!1,o.iconEl&&o.iconEl.classList.remove("rotate-180"))}),(t=s.triggerEl.classList).add.apply(t,this._options.activeClasses.split(" ")),(r=s.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),s.triggerEl.setAttribute("aria-expanded","true"),s.targetEl.classList.remove("hidden"),s.active=!0,s.iconEl&&s.iconEl.classList.add("rotate-180"),this._options.onOpen(this,s)},n.prototype.toggle=function(e){var t=this.getItem(e);t.active?this.close(e):this.open(e),this._options.onToggle(this,t)},n.prototype.close=function(e){var t,r,i=this.getItem(e);(t=i.triggerEl.classList).remove.apply(t,this._options.activeClasses.split(" ")),(r=i.triggerEl.classList).add.apply(r,this._options.inactiveClasses.split(" ")),i.targetEl.classList.add("hidden"),i.triggerEl.setAttribute("aria-expanded","false"),i.active=!1,i.iconEl&&i.iconEl.classList.remove("rotate-180"),this._options.onClose(this,i)},n}();function Yg(){document.querySelectorAll("[data-accordion]").forEach(function(n){var e=n.getAttribute("data-accordion"),t=n.getAttribute("data-active-classes"),r=n.getAttribute("data-inactive-classes"),i=[];n.querySelectorAll("[data-accordion-target]").forEach(function(s){if(s.closest("[data-accordion]")===n){var o={id:s.getAttribute("data-accordion-target"),triggerEl:s,targetEl:document.querySelector(s.getAttribute("data-accordion-target")),iconEl:s.querySelector("[data-accordion-icon]"),active:s.getAttribute("aria-expanded")==="true"};i.push(o)}}),new _T(i,{alwaysOpen:e==="open",activeClasses:t||wu.activeClasses,inactiveClasses:r||wu.inactiveClasses})})}typeof window<"u"&&(window.Accordion=_T,window.initAccordions=Yg);var _u=globalThis&&globalThis.__assign||function(){return _u=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},_u.apply(this,arguments)},fw={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},bT=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=fw),this._targetEl=e,this._triggerEl=t,this._options=_u(_u({},fw),r),this._visible=!1,this._init()}return n.prototype._init=function(){var e=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){e.toggle()}))},n.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},n.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},n.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},n}();function Xg(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(n){var e=n.getAttribute("data-collapse-toggle"),t=document.getElementById(e);t?new bT(t,n):console.error('The target element with id "'.concat(e,'" does not exist. Please check the data-collapse-toggle attribute.'))})}typeof window<"u"&&(window.Collapse=bT,window.initCollapses=Xg);var Ai=globalThis&&globalThis.__assign||function(){return Ai=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Ai.apply(this,arguments)},Ol={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},IT=function(){function n(e,t){e===void 0&&(e=[]),t===void 0&&(t=Ol),this._items=e,this._options=Ai(Ai(Ai({},Ol),t),{indicators:Ai(Ai({},Ol.indicators),t.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return n.prototype._init=function(){var e=this;this._items.map(function(t){t.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(t,r){t.el.addEventListener("click",function(){e.slideTo(r)})})},n.prototype.getItem=function(e){return this._items[e]},n.prototype.slideTo=function(e){var t=this._items[e],r={left:t.position===0?this._items[this._items.length-1]:this._items[t.position-1],middle:t,right:t.position===this._items.length-1?this._items[0]:this._items[t.position+1]};this._rotate(r),this._setActiveItem(t),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},n.prototype.next=function(){var e=this._getActiveItem(),t=null;e.position===this._items.length-1?t=this._items[0]:t=this._items[e.position+1],this.slideTo(t.position),this._options.onNext(this)},n.prototype.prev=function(){var e=this._getActiveItem(),t=null;e.position===0?t=this._items[this._items.length-1]:t=this._items[e.position-1],this.slideTo(t.position),this._options.onPrev(this)},n.prototype._rotate=function(e){this._items.map(function(t){t.el.classList.add("hidden")}),e.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.left.el.classList.add("-translate-x-full","z-10"),e.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),e.middle.el.classList.add("translate-x-0","z-20"),e.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),e.right.el.classList.add("translate-x-full","z-10")},n.prototype.cycle=function(){var e=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){e.next()},this._intervalDuration))},n.prototype.pause=function(){clearInterval(this._intervalInstance)},n.prototype._getActiveItem=function(){return this._activeItem},n.prototype._setActiveItem=function(e){var t,r,i=this;this._activeItem=e;var s=e.position;this._indicators.length&&(this._indicators.map(function(o){var a,c;o.el.setAttribute("aria-current","false"),(a=o.el.classList).remove.apply(a,i._options.indicators.activeClasses.split(" ")),(c=o.el.classList).add.apply(c,i._options.indicators.inactiveClasses.split(" "))}),(t=this._indicators[s].el.classList).add.apply(t,this._options.indicators.activeClasses.split(" ")),(r=this._indicators[s].el.classList).remove.apply(r,this._options.indicators.inactiveClasses.split(" ")),this._indicators[s].el.setAttribute("aria-current","true"))},n}();function Jg(){document.querySelectorAll("[data-carousel]").forEach(function(n){var e=n.getAttribute("data-carousel-interval"),t=n.getAttribute("data-carousel")==="slide",r=[],i=0;n.querySelectorAll("[data-carousel-item]").length&&Array.from(n.querySelectorAll("[data-carousel-item]")).map(function(l,u){r.push({position:u,el:l}),l.getAttribute("data-carousel-item")==="active"&&(i=u)});var s=[];n.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(n.querySelectorAll("[data-carousel-slide-to]")).map(function(l){s.push({position:parseInt(l.getAttribute("data-carousel-slide-to")),el:l})});var o=new IT(r,{defaultPosition:i,indicators:{items:s},interval:e||Ol.interval});t&&o.cycle();var a=n.querySelector("[data-carousel-next]"),c=n.querySelector("[data-carousel-prev]");a&&a.addEventListener("click",function(){o.next()}),c&&c.addEventListener("click",function(){o.prev()})})}typeof window<"u"&&(window.Carousel=IT,window.initCarousels=Jg);var bu=globalThis&&globalThis.__assign||function(){return bu=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},bu.apply(this,arguments)},pw={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},ET=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=pw),this._targetEl=e,this._triggerEl=t,this._options=bu(bu({},pw),r),this._init()}return n.prototype._init=function(){var e=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){e.hide()})},n.prototype.hide=function(){var e=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){e._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},n}();function Zg(){document.querySelectorAll("[data-dismiss-target]").forEach(function(n){var e=n.getAttribute("data-dismiss-target"),t=document.querySelector(e);t?new ET(t,n):console.error('The dismiss element with id "'.concat(e,'" does not exist. Please check the data-dismiss-target attribute.'))})}typeof window<"u"&&(window.Dismiss=ET,window.initDismisses=Zg);var Yt="top",wn="bottom",_n="right",Xt="left",em="auto",zc=[Yt,wn,_n,Xt],ao="start",uc="end",b$="clippingParents",TT="viewport",Go="popper",I$="reference",gw=zc.reduce(function(n,e){return n.concat([e+"-"+ao,e+"-"+uc])},[]),xT=[].concat(zc,[em]).reduce(function(n,e){return n.concat([e,e+"-"+ao,e+"-"+uc])},[]),E$="beforeRead",T$="read",x$="afterRead",S$="beforeMain",A$="main",k$="afterMain",C$="beforeWrite",R$="write",D$="afterWrite",P$=[E$,T$,x$,S$,A$,k$,C$,R$,D$];function rr(n){return n?(n.nodeName||"").toLowerCase():null}function hn(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function is(n){var e=hn(n).Element;return n instanceof e||n instanceof Element}function gn(n){var e=hn(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function tm(n){if(typeof ShadowRoot>"u")return!1;var e=hn(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function N$(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},i=e.attributes[t]||{},s=e.elements[t];!gn(s)||!rr(s)||(Object.assign(s.style,r),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function O$(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],s=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!gn(i)||!rr(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}const L$={name:"applyStyles",enabled:!0,phase:"write",fn:N$,effect:O$,requires:["computeStyles"]};function Xn(n){return n.split("-")[0]}var zi=Math.max,Iu=Math.min,co=Math.round;function kf(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ST(){return!/^((?!chrome|android).)*safari/i.test(kf())}function lo(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=n.getBoundingClientRect(),i=1,s=1;e&&gn(n)&&(i=n.offsetWidth>0&&co(r.width)/n.offsetWidth||1,s=n.offsetHeight>0&&co(r.height)/n.offsetHeight||1);var o=is(n)?hn(n):window,a=o.visualViewport,c=!ST()&&t,l=(r.left+(c&&a?a.offsetLeft:0))/i,u=(r.top+(c&&a?a.offsetTop:0))/s,h=r.width/i,d=r.height/s;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function nm(n){var e=lo(n),t=n.offsetWidth,r=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:r}}function AT(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&tm(t)){var r=e;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function mr(n){return hn(n).getComputedStyle(n)}function M$(n){return["table","td","th"].indexOf(rr(n))>=0}function pi(n){return((is(n)?n.ownerDocument:n.document)||window.document).documentElement}function Mh(n){return rr(n)==="html"?n:n.assignedSlot||n.parentNode||(tm(n)?n.host:null)||pi(n)}function mw(n){return!gn(n)||mr(n).position==="fixed"?null:n.offsetParent}function F$(n){var e=/firefox/i.test(kf()),t=/Trident/i.test(kf());if(t&&gn(n)){var r=mr(n);if(r.position==="fixed")return null}var i=Mh(n);for(tm(i)&&(i=i.host);gn(i)&&["html","body"].indexOf(rr(i))<0;){var s=mr(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Hc(n){for(var e=hn(n),t=mw(n);t&&M$(t)&&mr(t).position==="static";)t=mw(t);return t&&(rr(t)==="html"||rr(t)==="body"&&mr(t).position==="static")?e:t||F$(n)||e}function rm(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Ia(n,e,t){return zi(n,Iu(e,t))}function $$(n,e,t){var r=Ia(n,e,t);return r>t?t:r}function kT(){return{top:0,right:0,bottom:0,left:0}}function CT(n){return Object.assign({},kT(),n)}function RT(n,e){return e.reduce(function(t,r){return t[r]=n,t},{})}var V$=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,CT(typeof e!="number"?e:RT(e,zc))};function U$(n){var e,t=n.state,r=n.name,i=n.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,a=Xn(t.placement),c=rm(a),l=[Xt,_n].indexOf(a)>=0,u=l?"height":"width";if(!(!s||!o)){var h=V$(i.padding,t),d=nm(s),p=c==="y"?Yt:Xt,y=c==="y"?wn:_n,v=t.rects.reference[u]+t.rects.reference[c]-o[c]-t.rects.popper[u],b=o[c]-t.rects.reference[c],E=Hc(s),R=E?c==="y"?E.clientHeight||0:E.clientWidth||0:0,S=v/2-b/2,A=h[p],$=R-d[u]-h[y],j=R/2-d[u]/2+S,X=Ia(A,j,$),G=c;t.modifiersData[r]=(e={},e[G]=X,e.centerOffset=X-j,e)}}function B$(n){var e=n.state,t=n.options,r=t.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||AT(e.elements.popper,i)&&(e.elements.arrow=i))}const j$={name:"arrow",enabled:!0,phase:"main",fn:U$,effect:B$,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function uo(n){return n.split("-")[1]}var q$={top:"auto",right:"auto",bottom:"auto",left:"auto"};function z$(n,e){var t=n.x,r=n.y,i=e.devicePixelRatio||1;return{x:co(t*i)/i||0,y:co(r*i)/i||0}}function yw(n){var e,t=n.popper,r=n.popperRect,i=n.placement,s=n.variation,o=n.offsets,a=n.position,c=n.gpuAcceleration,l=n.adaptive,u=n.roundOffsets,h=n.isFixed,d=o.x,p=d===void 0?0:d,y=o.y,v=y===void 0?0:y,b=typeof u=="function"?u({x:p,y:v}):{x:p,y:v};p=b.x,v=b.y;var E=o.hasOwnProperty("x"),R=o.hasOwnProperty("y"),S=Xt,A=Yt,$=window;if(l){var j=Hc(t),X="clientHeight",G="clientWidth";if(j===hn(t)&&(j=pi(t),mr(j).position!=="static"&&a==="absolute"&&(X="scrollHeight",G="scrollWidth")),j=j,i===Yt||(i===Xt||i===_n)&&s===uc){A=wn;var W=h&&j===$&&$.visualViewport?$.visualViewport.height:j[X];v-=W-r.height,v*=c?1:-1}if(i===Xt||(i===Yt||i===wn)&&s===uc){S=_n;var le=h&&j===$&&$.visualViewport?$.visualViewport.width:j[G];p-=le-r.width,p*=c?1:-1}}var Ee=Object.assign({position:a},l&&q$),Ve=u===!0?z$({x:p,y:v},hn(t)):{x:p,y:v};if(p=Ve.x,v=Ve.y,c){var Le;return Object.assign({},Ee,(Le={},Le[A]=R?"0":"",Le[S]=E?"0":"",Le.transform=($.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",Le))}return Object.assign({},Ee,(e={},e[A]=R?v+"px":"",e[S]=E?p+"px":"",e.transform="",e))}function H$(n){var e=n.state,t=n.options,r=t.gpuAcceleration,i=r===void 0?!0:r,s=t.adaptive,o=s===void 0?!0:s,a=t.roundOffsets,c=a===void 0?!0:a,l={placement:Xn(e.placement),variation:uo(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,yw(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,yw(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const K$={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:H$,data:{}};var hl={passive:!0};function G$(n){var e=n.state,t=n.instance,r=n.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,c=hn(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",t.update,hl)}),a&&c.addEventListener("resize",t.update,hl),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",t.update,hl)}),a&&c.removeEventListener("resize",t.update,hl)}}const W$={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:G$,data:{}};var Q$={left:"right",right:"left",bottom:"top",top:"bottom"};function Ll(n){return n.replace(/left|right|bottom|top/g,function(e){return Q$[e]})}var Y$={start:"end",end:"start"};function vw(n){return n.replace(/start|end/g,function(e){return Y$[e]})}function im(n){var e=hn(n),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function sm(n){return lo(pi(n)).left+im(n).scrollLeft}function X$(n,e){var t=hn(n),r=pi(n),i=t.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var l=ST();(l||!l&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+sm(n),y:c}}function J$(n){var e,t=pi(n),r=im(n),i=(e=n.ownerDocument)==null?void 0:e.body,s=zi(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=zi(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+sm(n),c=-r.scrollTop;return mr(i||t).direction==="rtl"&&(a+=zi(t.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function om(n){var e=mr(n),t=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+i+r)}function DT(n){return["html","body","#document"].indexOf(rr(n))>=0?n.ownerDocument.body:gn(n)&&om(n)?n:DT(Mh(n))}function Ea(n,e){var t;e===void 0&&(e=[]);var r=DT(n),i=r===((t=n.ownerDocument)==null?void 0:t.body),s=hn(r),o=i?[s].concat(s.visualViewport||[],om(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(Ea(Mh(o)))}function Cf(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Z$(n,e){var t=lo(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function ww(n,e,t){return e===TT?Cf(X$(n,t)):is(e)?Z$(e,t):Cf(J$(pi(n)))}function eV(n){var e=Ea(Mh(n)),t=["absolute","fixed"].indexOf(mr(n).position)>=0,r=t&&gn(n)?Hc(n):n;return is(r)?e.filter(function(i){return is(i)&&AT(i,r)&&rr(i)!=="body"}):[]}function tV(n,e,t,r){var i=e==="clippingParents"?eV(n):[].concat(e),s=[].concat(i,[t]),o=s[0],a=s.reduce(function(c,l){var u=ww(n,l,r);return c.top=zi(u.top,c.top),c.right=Iu(u.right,c.right),c.bottom=Iu(u.bottom,c.bottom),c.left=zi(u.left,c.left),c},ww(n,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function PT(n){var e=n.reference,t=n.element,r=n.placement,i=r?Xn(r):null,s=r?uo(r):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(i){case Yt:c={x:o,y:e.y-t.height};break;case wn:c={x:o,y:e.y+e.height};break;case _n:c={x:e.x+e.width,y:a};break;case Xt:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var l=i?rm(i):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case ao:c[l]=c[l]-(e[u]/2-t[u]/2);break;case uc:c[l]=c[l]+(e[u]/2-t[u]/2);break}}return c}function hc(n,e){e===void 0&&(e={});var t=e,r=t.placement,i=r===void 0?n.placement:r,s=t.strategy,o=s===void 0?n.strategy:s,a=t.boundary,c=a===void 0?b$:a,l=t.rootBoundary,u=l===void 0?TT:l,h=t.elementContext,d=h===void 0?Go:h,p=t.altBoundary,y=p===void 0?!1:p,v=t.padding,b=v===void 0?0:v,E=CT(typeof b!="number"?b:RT(b,zc)),R=d===Go?I$:Go,S=n.rects.popper,A=n.elements[y?R:d],$=tV(is(A)?A:A.contextElement||pi(n.elements.popper),c,u,o),j=lo(n.elements.reference),X=PT({reference:j,element:S,strategy:"absolute",placement:i}),G=Cf(Object.assign({},S,X)),W=d===Go?G:j,le={top:$.top-W.top+E.top,bottom:W.bottom-$.bottom+E.bottom,left:$.left-W.left+E.left,right:W.right-$.right+E.right},Ee=n.modifiersData.offset;if(d===Go&&Ee){var Ve=Ee[i];Object.keys(le).forEach(function(Le){var Mt=[_n,wn].indexOf(Le)>=0?1:-1,rt=[Yt,wn].indexOf(Le)>=0?"y":"x";le[Le]+=Ve[rt]*Mt})}return le}function nV(n,e){e===void 0&&(e={});var t=e,r=t.placement,i=t.boundary,s=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,l=c===void 0?xT:c,u=uo(r),h=u?a?gw:gw.filter(function(y){return uo(y)===u}):zc,d=h.filter(function(y){return l.indexOf(y)>=0});d.length===0&&(d=h);var p=d.reduce(function(y,v){return y[v]=hc(n,{placement:v,boundary:i,rootBoundary:s,padding:o})[Xn(v)],y},{});return Object.keys(p).sort(function(y,v){return p[y]-p[v]})}function rV(n){if(Xn(n)===em)return[];var e=Ll(n);return[vw(n),e,vw(e)]}function iV(n){var e=n.state,t=n.options,r=n.name;if(!e.modifiersData[r]._skip){for(var i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,l=t.padding,u=t.boundary,h=t.rootBoundary,d=t.altBoundary,p=t.flipVariations,y=p===void 0?!0:p,v=t.allowedAutoPlacements,b=e.options.placement,E=Xn(b),R=E===b,S=c||(R||!y?[Ll(b)]:rV(b)),A=[b].concat(S).reduce(function(tn,nn){return tn.concat(Xn(nn)===em?nV(e,{placement:nn,boundary:u,rootBoundary:h,padding:l,flipVariations:y,allowedAutoPlacements:v}):nn)},[]),$=e.rects.reference,j=e.rects.popper,X=new Map,G=!0,W=A[0],le=0;le<A.length;le++){var Ee=A[le],Ve=Xn(Ee),Le=uo(Ee)===ao,Mt=[Yt,wn].indexOf(Ve)>=0,rt=Mt?"width":"height",ae=hc(e,{placement:Ee,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),pe=Mt?Le?_n:Xt:Le?wn:Yt;$[rt]>j[rt]&&(pe=Ll(pe));var ve=Ll(pe),It=[];if(s&&It.push(ae[Ve]<=0),a&&It.push(ae[pe]<=0,ae[ve]<=0),It.every(function(tn){return tn})){W=Ee,G=!1;break}X.set(Ee,It)}if(G)for(var en=y?3:1,qt=function(nn){var We=A.find(function(x){var q=X.get(x);if(q)return q.slice(0,nn).every(function(F){return F})});if(We)return W=We,"break"},it=en;it>0;it--){var In=qt(it);if(In==="break")break}e.placement!==W&&(e.modifiersData[r]._skip=!0,e.placement=W,e.reset=!0)}}const sV={name:"flip",enabled:!0,phase:"main",fn:iV,requiresIfExists:["offset"],data:{_skip:!1}};function _w(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function bw(n){return[Yt,_n,wn,Xt].some(function(e){return n[e]>=0})}function oV(n){var e=n.state,t=n.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=hc(e,{elementContext:"reference"}),a=hc(e,{altBoundary:!0}),c=_w(o,r),l=_w(a,i,s),u=bw(c),h=bw(l);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const aV={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:oV};function cV(n,e,t){var r=Xn(n),i=[Xt,Yt].indexOf(r)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Xt,_n].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function lV(n){var e=n.state,t=n.options,r=n.name,i=t.offset,s=i===void 0?[0,0]:i,o=xT.reduce(function(u,h){return u[h]=cV(h,e.rects,s),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const uV={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:lV};function hV(n){var e=n.state,t=n.name;e.modifiersData[t]=PT({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const dV={name:"popperOffsets",enabled:!0,phase:"read",fn:hV,data:{}};function fV(n){return n==="x"?"y":"x"}function pV(n){var e=n.state,t=n.options,r=n.name,i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,l=t.rootBoundary,u=t.altBoundary,h=t.padding,d=t.tether,p=d===void 0?!0:d,y=t.tetherOffset,v=y===void 0?0:y,b=hc(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),E=Xn(e.placement),R=uo(e.placement),S=!R,A=rm(E),$=fV(A),j=e.modifiersData.popperOffsets,X=e.rects.reference,G=e.rects.popper,W=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,le=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),Ee=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ve={x:0,y:0};if(j){if(s){var Le,Mt=A==="y"?Yt:Xt,rt=A==="y"?wn:_n,ae=A==="y"?"height":"width",pe=j[A],ve=pe+b[Mt],It=pe-b[rt],en=p?-G[ae]/2:0,qt=R===ao?X[ae]:G[ae],it=R===ao?-G[ae]:-X[ae],In=e.elements.arrow,tn=p&&In?nm(In):{width:0,height:0},nn=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:kT(),We=nn[Mt],x=nn[rt],q=Ia(0,X[ae],tn[ae]),F=S?X[ae]/2-en-q-We-le.mainAxis:qt-q-We-le.mainAxis,J=S?-X[ae]/2+en+q+x+le.mainAxis:it+q+x+le.mainAxis,we=e.elements.arrow&&Hc(e.elements.arrow),g=we?A==="y"?we.clientTop||0:we.clientLeft||0:0,m=(Le=Ee==null?void 0:Ee[A])!=null?Le:0,w=pe+F-m-g,T=pe+J-m,k=Ia(p?Iu(ve,w):ve,pe,p?zi(It,T):It);j[A]=k,Ve[A]=k-pe}if(a){var D,z=A==="x"?Yt:Xt,L=A==="x"?wn:_n,M=j[$],N=$==="y"?"height":"width",ee=M+b[z],K=M-b[L],Z=[Yt,Xt].indexOf(E)!==-1,oe=(D=Ee==null?void 0:Ee[$])!=null?D:0,ge=Z?ee:M-X[N]-G[N]-oe+le.altAxis,Ce=Z?M+X[N]+G[N]-oe-le.altAxis:K,ke=p&&Z?$$(ge,M,Ce):Ia(p?ge:ee,M,p?Ce:K);j[$]=ke,Ve[$]=ke-M}e.modifiersData[r]=Ve}}const gV={name:"preventOverflow",enabled:!0,phase:"main",fn:pV,requiresIfExists:["offset"]};function mV(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function yV(n){return n===hn(n)||!gn(n)?im(n):mV(n)}function vV(n){var e=n.getBoundingClientRect(),t=co(e.width)/n.offsetWidth||1,r=co(e.height)/n.offsetHeight||1;return t!==1||r!==1}function wV(n,e,t){t===void 0&&(t=!1);var r=gn(e),i=gn(e)&&vV(e),s=pi(e),o=lo(n,i,t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!t)&&((rr(e)!=="body"||om(s))&&(a=yV(e)),gn(e)?(c=lo(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=sm(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function _V(n){var e=new Map,t=new Set,r=[];n.forEach(function(s){e.set(s.name,s)});function i(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&i(c)}}),r.push(s)}return n.forEach(function(s){t.has(s.name)||i(s)}),r}function bV(n){var e=_V(n);return P$.reduce(function(t,r){return t.concat(e.filter(function(i){return i.phase===r}))},[])}function IV(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function EV(n){var e=n.reduce(function(t,r){var i=t[r.name];return t[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var Iw={placement:"bottom",modifiers:[],strategy:"absolute"};function Ew(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function TV(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,r=t===void 0?[]:t,i=e.defaultOptions,s=i===void 0?Iw:i;return function(a,c,l){l===void 0&&(l=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Iw,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,p={state:u,setOptions:function(E){var R=typeof E=="function"?E(u.options):E;v(),u.options=Object.assign({},s,u.options,R),u.scrollParents={reference:is(a)?Ea(a):a.contextElement?Ea(a.contextElement):[],popper:Ea(c)};var S=bV(EV([].concat(r,u.options.modifiers)));return u.orderedModifiers=S.filter(function(A){return A.enabled}),y(),p.update()},forceUpdate:function(){if(!d){var E=u.elements,R=E.reference,S=E.popper;if(Ew(R,S)){u.rects={reference:wV(R,Hc(S),u.options.strategy==="fixed"),popper:nm(S)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(le){return u.modifiersData[le.name]=Object.assign({},le.data)});for(var A=0;A<u.orderedModifiers.length;A++){if(u.reset===!0){u.reset=!1,A=-1;continue}var $=u.orderedModifiers[A],j=$.fn,X=$.options,G=X===void 0?{}:X,W=$.name;typeof j=="function"&&(u=j({state:u,options:G,name:W,instance:p})||u)}}}},update:IV(function(){return new Promise(function(b){p.forceUpdate(),b(u)})}),destroy:function(){v(),d=!0}};if(!Ew(a,c))return p;p.setOptions(l).then(function(b){!d&&l.onFirstUpdate&&l.onFirstUpdate(b)});function y(){u.orderedModifiers.forEach(function(b){var E=b.name,R=b.options,S=R===void 0?{}:R,A=b.effect;if(typeof A=="function"){var $=A({state:u,name:E,instance:p,options:S}),j=function(){};h.push($||j)}})}function v(){h.forEach(function(b){return b()}),h=[]}return p}}var xV=[W$,dV,K$,L$,uV,sV,gV,j$,aV],am=TV({defaultModifiers:xV}),Pr=globalThis&&globalThis.__assign||function(){return Pr=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Pr.apply(this,arguments)},dl=globalThis&&globalThis.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))},ki={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,onShow:function(){},onHide:function(){},onToggle:function(){}},NT=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=ki),this._targetEl=e,this._triggerEl=t,this._options=Pr(Pr({},ki),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return n.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},n.prototype._setupEventListeners=function(){var e=this,t=this._getTriggerEvents();this._options.triggerType==="click"&&t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.toggle()})}),this._options.triggerType==="hover"&&(t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){r==="click"?e.toggle():setTimeout(function(){e.show()},e._options.delay)}),e._targetEl.addEventListener(r,function(){e.show()})}),t.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},e._options.delay)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},e._options.delay)})}))},n.prototype._createPopperInstance=function(){return am(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},n.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(t){e._handleClickOutside(t,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._handleClickOutside=function(e,t){var r=e.target;r!==t&&!t.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},n.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},n.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},n.prototype.isVisible=function(){return this._visible},n.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(e){return Pr(Pr({},e),{modifiers:dl(dl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},n.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(e){return Pr(Pr({},e),{modifiers:dl(dl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},n}();function cm(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(n){var e=n.getAttribute("data-dropdown-toggle"),t=document.getElementById(e);if(t){var r=n.getAttribute("data-dropdown-placement"),i=n.getAttribute("data-dropdown-offset-skidding"),s=n.getAttribute("data-dropdown-offset-distance"),o=n.getAttribute("data-dropdown-trigger"),a=n.getAttribute("data-dropdown-delay");new NT(t,n,{placement:r||ki.placement,triggerType:o||ki.triggerType,offsetSkidding:i?parseInt(i):ki.offsetSkidding,offsetDistance:s?parseInt(s):ki.offsetDistance,delay:a?parseInt(a):ki.delay})}else console.error('The dropdown element with id "'.concat(e,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}typeof window<"u"&&(window.Dropdown=NT,window.initDropdowns=cm);var Eu=globalThis&&globalThis.__assign||function(){return Eu=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Eu.apply(this,arguments)},As={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},Rf=function(){function n(e,t){e===void 0&&(e=null),t===void 0&&(t=As),this._targetEl=e,this._options=Eu(Eu({},As),t),this._isHidden=!0,this._backdropEl=null,this._init()}return n.prototype._init=function(){var e=this;this._targetEl&&this._getPlacementClasses().map(function(t){e._targetEl.classList.add(t)})},n.prototype._createBackdrop=function(){var e;if(this._isHidden){var t=document.createElement("div");t.setAttribute("modal-backdrop",""),(e=t.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(t),this._backdropEl=t}},n.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},n.prototype._setupModalCloseEventListeners=function(){var e=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(t){e._handleOutsideClick(t.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(t){t.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},n.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},n.prototype._handleOutsideClick=function(e){(e===this._targetEl||e===this._backdropEl&&this.isVisible())&&this.hide()},n.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},n.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},n.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},n.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},n.prototype.isVisible=function(){return!this._isHidden},n.prototype.isHidden=function(){return this._isHidden},n}(),fl=function(n,e){return e.some(function(t){return t.id===n})?e.find(function(t){return t.id===n}):null};function lm(){var n=[];document.querySelectorAll("[data-modal-target]").forEach(function(e){var t=e.getAttribute("data-modal-target"),r=document.getElementById(t);if(r){var i=r.getAttribute("data-modal-placement"),s=r.getAttribute("data-modal-backdrop");fl(t,n)||n.push({id:t,object:new Rf(r,{placement:i||As.placement,backdrop:s||As.backdrop})})}else console.error("Modal with id ".concat(t," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(e){var t=e.getAttribute("data-modal-toggle"),r=document.getElementById(t);if(r){var i=r.getAttribute("data-modal-placement"),s=r.getAttribute("data-modal-backdrop"),o=fl(t,n);o||(o={id:t,object:new Rf(r,{placement:i||As.placement,backdrop:s||As.backdrop})},n.push(o)),e.addEventListener("click",function(){o.object.toggle()})}else console.error("Modal with id ".concat(t," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(e){var t=e.getAttribute("data-modal-show"),r=document.getElementById(t);if(r){var i=fl(t,n);i?e.addEventListener("click",function(){i.object.isHidden&&i.object.show()}):console.error("Modal with id ".concat(t," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(t," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(e){var t=e.getAttribute("data-modal-hide"),r=document.getElementById(t);if(r){var i=fl(t,n);i?e.addEventListener("click",function(){i.object.isVisible&&i.object.hide()}):console.error("Modal with id ".concat(t," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(t," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}typeof window<"u"&&(window.Modal=Rf,window.initModals=lm);var Tu=globalThis&&globalThis.__assign||function(){return Tu=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Tu.apply(this,arguments)},Ci={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},OT=function(){function n(e,t){e===void 0&&(e=null),t===void 0&&(t=Ci),this._targetEl=e,this._options=Tu(Tu({},Ci),t),this._visible=!1,this._init()}return n.prototype._init=function(){var e=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(t){e._targetEl.classList.add(t)}),document.addEventListener("keydown",function(t){t.key==="Escape"&&e.isVisible()&&e.hide()})},n.prototype.hide=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(t){e._targetEl.classList.remove(t)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(t){e._targetEl.classList.add(t)})):(this._getPlacementClasses(this._options.placement).active.map(function(t){e._targetEl.classList.remove(t)}),this._getPlacementClasses(this._options.placement).inactive.map(function(t){e._targetEl.classList.add(t)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},n.prototype.show=function(){var e=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(t){e._targetEl.classList.add(t)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(t){e._targetEl.classList.remove(t)})):(this._getPlacementClasses(this._options.placement).active.map(function(t){e._targetEl.classList.add(t)}),this._getPlacementClasses(this._options.placement).inactive.map(function(t){e._targetEl.classList.remove(t)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},n.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},n.prototype._createBackdrop=function(){var e,t=this;if(!this._visible){var r=document.createElement("div");r.setAttribute("drawer-backdrop",""),(e=r.classList).add.apply(e,this._options.backdropClasses.split(" ")),document.querySelector("body").append(r),r.addEventListener("click",function(){t.hide()})}},n.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},n.prototype._getPlacementClasses=function(e){switch(e){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},n.prototype.isHidden=function(){return!this._visible},n.prototype.isVisible=function(){return this._visible},n}(),pl=function(n,e){if(e.some(function(t){return t.id===n}))return e.find(function(t){return t.id===n})};function um(){var n=[];document.querySelectorAll("[data-drawer-target]").forEach(function(e){var t=e.getAttribute("data-drawer-target"),r=document.getElementById(t);if(r){var i=e.getAttribute("data-drawer-placement"),s=e.getAttribute("data-drawer-body-scrolling"),o=e.getAttribute("data-drawer-backdrop"),a=e.getAttribute("data-drawer-edge"),c=e.getAttribute("data-drawer-edge-offset");pl(t,n)||n.push({id:t,object:new OT(r,{placement:i||Ci.placement,bodyScrolling:s?s==="true":Ci.bodyScrolling,backdrop:o?o==="true":Ci.backdrop,edge:a?a==="true":Ci.edge,edgeOffset:c||Ci.edgeOffset})})}else console.error("Drawer with id ".concat(t," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(e){var t=e.getAttribute("data-drawer-toggle"),r=document.getElementById(t);if(r){var i=pl(t,n);i?e.addEventListener("click",function(){i.object.toggle()}):console.error("Drawer with id ".concat(t," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(t," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(e){var t=e.getAttribute("data-drawer-dismiss")?e.getAttribute("data-drawer-dismiss"):e.getAttribute("data-drawer-hide"),r=document.getElementById(t);if(r){var i=pl(t,n);i?e.addEventListener("click",function(){i.object.hide()}):console.error("Drawer with id ".concat(t," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(t," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(e){var t=e.getAttribute("data-drawer-show"),r=document.getElementById(t);if(r){var i=pl(t,n);i?e.addEventListener("click",function(){i.object.show()}):console.error("Drawer with id ".concat(t," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(t," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}typeof window<"u"&&(window.Drawer=OT,window.initDrawers=um);var xu=globalThis&&globalThis.__assign||function(){return xu=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},xu.apply(this,arguments)},Tw={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},LT=function(){function n(e,t){e===void 0&&(e=[]),t===void 0&&(t=Tw),this._items=e,this._activeTab=t?this.getTab(t.defaultTabId):null,this._options=xu(xu({},Tw),t),this._init()}return n.prototype._init=function(){var e=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(t){t.triggerEl.addEventListener("click",function(){e.show(t.id)})}))},n.prototype.getActiveTab=function(){return this._activeTab},n.prototype._setActiveTab=function(e){this._activeTab=e},n.prototype.getTab=function(e){return this._items.filter(function(t){return t.id===e})[0]},n.prototype.show=function(e,t){var r,i,s=this;t===void 0&&(t=!1);var o=this.getTab(e);o===this._activeTab&&!t||(this._items.map(function(a){var c,l;a!==o&&((c=a.triggerEl.classList).remove.apply(c,s._options.activeClasses.split(" ")),(l=a.triggerEl.classList).add.apply(l,s._options.inactiveClasses.split(" ")),a.targetEl.classList.add("hidden"),a.triggerEl.setAttribute("aria-selected","false"))}),(r=o.triggerEl.classList).add.apply(r,this._options.activeClasses.split(" ")),(i=o.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),o.triggerEl.setAttribute("aria-selected","true"),o.targetEl.classList.remove("hidden"),this._setActiveTab(o),this._options.onShow(this,o))},n}();function hm(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(n){var e=[],t=null;n.querySelectorAll('[role="tab"]').forEach(function(r){var i=r.getAttribute("aria-selected")==="true",s={id:r.getAttribute("data-tabs-target"),triggerEl:r,targetEl:document.querySelector(r.getAttribute("data-tabs-target"))};e.push(s),i&&(t=s.id)}),new LT(e,{defaultTabId:t})})}typeof window<"u"&&(window.Tabs=LT,window.initTabs=hm);var Nr=globalThis&&globalThis.__assign||function(){return Nr=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Nr.apply(this,arguments)},gl=globalThis&&globalThis.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))},Su={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},MT=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=Su),this._targetEl=e,this._triggerEl=t,this._options=Nr(Nr({},Su),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return n.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},n.prototype._setupEventListeners=function(){var e=this,t=this._getTriggerEvents();t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()})}),t.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.hide()})})},n.prototype._createPopperInstance=function(){return am(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},n.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},n.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(t){t.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},n.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},n.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(t){e._handleClickOutside(t,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._handleClickOutside=function(e,t){var r=e.target;r!==t&&!t.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},n.prototype.isVisible=function(){return this._visible},n.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},n.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Nr(Nr({},e),{modifiers:gl(gl([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},n.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Nr(Nr({},e),{modifiers:gl(gl([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},n}();function dm(){document.querySelectorAll("[data-tooltip-target]").forEach(function(n){var e=n.getAttribute("data-tooltip-target"),t=document.getElementById(e);if(t){var r=n.getAttribute("data-tooltip-trigger"),i=n.getAttribute("data-tooltip-placement");new MT(t,n,{placement:i||Su.placement,triggerType:r||Su.triggerType})}else console.error('The tooltip element with id "'.concat(e,'" does not exist. Please check the data-tooltip-target attribute.'))})}typeof window<"u"&&(window.Tooltip=MT,window.initTooltips=dm);var Or=globalThis&&globalThis.__assign||function(){return Or=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Or.apply(this,arguments)},ml=globalThis&&globalThis.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))},Ta={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},FT=function(){function n(e,t,r){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=Ta),this._targetEl=e,this._triggerEl=t,this._options=Or(Or({},Ta),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return n.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},n.prototype._setupEventListeners=function(){var e=this,t=this._getTriggerEvents();t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),t.hideEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){setTimeout(function(){e._targetEl.matches(":hover")||e.hide()},100)}),e._targetEl.addEventListener(r,function(){setTimeout(function(){e._triggerEl.matches(":hover")||e.hide()},100)})})},n.prototype._createPopperInstance=function(){return am(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},n.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},n.prototype._setupKeydownListener=function(){var e=this;this._keydownEventListener=function(t){t.key==="Escape"&&e.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},n.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},n.prototype._setupClickOutsideListener=function(){var e=this;this._clickOutsideEventListener=function(t){e._handleClickOutside(t,e._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},n.prototype._handleClickOutside=function(e,t){var r=e.target;r!==t&&!t.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},n.prototype.isVisible=function(){return this._visible},n.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},n.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(e){return Or(Or({},e),{modifiers:ml(ml([],e.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},n.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(e){return Or(Or({},e),{modifiers:ml(ml([],e.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},n}();function fm(){document.querySelectorAll("[data-popover-target]").forEach(function(n){var e=n.getAttribute("data-popover-target"),t=document.getElementById(e);if(t){var r=n.getAttribute("data-popover-trigger"),i=n.getAttribute("data-popover-placement"),s=n.getAttribute("data-popover-offset");new FT(t,n,{placement:i||Ta.placement,offset:s?parseInt(s):Ta.offset,triggerType:r||Ta.triggerType})}else console.error('The popover element with id "'.concat(e,'" does not exist. Please check the data-popover-target attribute.'))})}typeof window<"u"&&(window.Popover=FT,window.initPopovers=fm);var Au=globalThis&&globalThis.__assign||function(){return Au=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Au.apply(this,arguments)},Df={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},$T=function(){function n(e,t,r,i){e===void 0&&(e=null),t===void 0&&(t=null),r===void 0&&(r=null),i===void 0&&(i=Df),this._parentEl=e,this._triggerEl=t,this._targetEl=r,this._options=Au(Au({},Df),i),this._visible=!1,this._init()}return n.prototype._init=function(){var e=this;if(this._triggerEl){var t=this._getTriggerEventTypes(this._options.triggerType);t.showEvents.forEach(function(r){e._triggerEl.addEventListener(r,function(){e.show()}),e._targetEl.addEventListener(r,function(){e.show()})}),t.hideEvents.forEach(function(r){e._parentEl.addEventListener(r,function(){e._parentEl.matches(":hover")||e.hide()})})}},n.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},n.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},n.prototype.toggle=function(){this._visible?this.hide():this.show()},n.prototype.isHidden=function(){return!this._visible},n.prototype.isVisible=function(){return this._visible},n.prototype._getTriggerEventTypes=function(e){switch(e){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},n}();function pm(){document.querySelectorAll("[data-dial-init]").forEach(function(n){var e=n.querySelector("[data-dial-toggle]");if(e){var t=e.getAttribute("data-dial-toggle"),r=document.getElementById(t);if(r){var i=e.getAttribute("data-dial-trigger");new $T(n,e,r,{triggerType:i||Df.triggerType})}else console.error("Dial with id ".concat(t," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(n.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}typeof window<"u"&&(window.Dial=$T,window.initDials=pm);function VT(){Yg(),Xg(),Jg(),Zg(),cm(),lm(),um(),hm(),dm(),fm(),pm()}typeof window<"u"&&(window.initFlowbite=VT);var SV=new _$("load",[Yg,Xg,Jg,Zg,cm,lm,um,hm,dm,fm,pm]);SV.init();const AV={key:0,class:"bg-green-600 flex flex-col sticky w-full text-white shadow-sm shadow-gray-400"},kV={class:"flex items-center justify-between container mx-auto py-2 px-4 bg-green-600"},CV={class:"flex gap-4 items-center"},RV=f("span",{class:"material-icons lg:text-base text-3xl"},"add_box",-1),DV=f("span",{class:"hidden lg:inline-block"},"CREATE ITEM",-1),PV=f("button",{type:"button",class:"flex gap-1",id:"dropdownDefaultButton","data-dropdown-toggle":"dropdownNotifications","data-dropdown-trigger":"click"},[f("span",{class:"material-icons lg:text-base text-3xl"},"notifications"),f("span",{class:"hidden lg:inline-block"},"NOTIFICATIONS")],-1),NV=f("span",{class:"material-icons lg:text-base text-3xl"},"chat",-1),OV=f("span",{class:"hidden lg:inline-block"},"MESSAGES",-1),LV=["onClick"],MV=f("img",{src:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",alt:"",class:"aspect-square w-10 rounded-full"},null,-1),FV=f("h5",null,"sample name",-1),$V={class:"bg-green-500"},VV={class:"container mx-auto flex flex-col-reverse lg:flex-row justify-between items-stretch px-4"},UV={key:0,class:"flex px-4 gap-8 lg:py-4 pb-4 whitespace-nowrap overflow-x-auto scroll-p-12"},BV=f("li",null,"NEW",-1),jV=f("li",null,"HOT",-1),qV=f("li",null,"TOP RATED",-1),zV=f("li",null,"KIDS",-1),HV=f("li",null,"MEN",-1),KV=f("li",null,"WOMEN",-1),GV=[BV,jV,qV,zV,HV,KV],WV=f("div",null,null,-1),QV=f("input",{type:"text",name:"",id:"",class:"placeholder-yellow-700 rounded-l-xl text-black py-1 px-4 text-sm bg-transparent w-full border-none",placeholder:"Search..."},null,-1),YV=f("button",{class:"text-yellow-700 px-2 py-1 lg:py-0 material-icons lg:text-lg"}," search ",-1),XV={__name:"NavigationBar",setup(n){o_(()=>{VT()});const e=ep(),t=qc();function r(){t.searchItem()&&e.push("/search")}const i=()=>{bn.auth().signOut().then(function(){alert("Successfully Signed Out"),e.push("/")},function(s){alert("Sign Out Error",s)})};return(s,o)=>["login","register"].includes(s.$route.name)?aa("",!0):(se(),me("header",AV,[f("nav",kV,[ie(u$),f("ul",CV,[f("li",null,[ie(re(Nt),{to:"/create-item",class:"flex gap-1"},{default:Pe(()=>[RV,DV]),_:1})]),f("li",null,[PV,ie(w$)]),f("li",null,[ie(re(Nt),{to:"/messages",class:"flex gap-1"},{default:Pe(()=>[NV,OV]),_:1})]),f("li",null,[f("button",{onClick:qs(i,["prevent"])},"LOG OUT",8,LV)]),f("li",null,[ie(re(Nt),{to:"/profile"},{default:Pe(()=>[MV]),_:1})]),FV])]),f("section",$V,[f("div",VV,[["home"].includes(s.$route.name)?(se(),me("ol",UV,GV)):aa("",!0),WV,["search"].includes(s.$route.name)?aa("",!0):(se(),me("form",{key:1,class:"bg-yellow-200 border-2 border-yellow-500 rounded-xl flex my-3",onSubmit:o[0]||(o[0]=qs(a=>r(),["stop","prevent"]))},[QV,YV,ie(re(Nt),{to:"/search",class:"text-yellow-700 py-1 lg:py-0 material-icons lg:text-lg pr-2"},{default:Pe(()=>[fe("menu")]),_:1})],32))])])]))}},JV={},ZV={key:0,class:"bg-green-600 flex flex-col sticky w-full text-white bottom-0 px-4"},eU=f("nav",{class:"flex items-center justify-end container mx-auto py-4 bg-green-600"},[f("p",null,"All Rights Reserved 2023. ®")],-1),tU=[eU];function nU(n,e){return["login","register"].includes(n.$route.name)?aa("",!0):(se(),me("header",ZV,tU))}const rU=ju(JV,[["render",nU]]),iU={class:"flex flex-col h-screen"},sU={class:"basis-full overflow-y-auto"},oU={__name:"HomePageView",setup(n){return(e,t)=>(se(),me("div",iU,[ie(XV),f("div",sU,[ie(re(gc))]),ie(rU)]))}},aU={class:"flex flex-col py-8 container mx-auto px-4 gap-8"},cU={class:"flex flex-col gap-2"},lU=f("h1",null,"JUST FOR YOU",-1),uU={class:"grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-gradient-to-b from-green-500 to-transparent bg-[length:auto_150px] bg-no-repeat rounded-xl p-4"},hU={class:"w-full aspect-square"},dU=["src"],fU={class:"flex flex-col"},pU={class:"text-xs"},gU={class:"text-green-800"},mU=f("span",{class:"text-2xl"},"₱",-1),yU={class:"flex flex-col gap-2"},vU=f("h1",null,"DISCOVER",-1),wU={class:"grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-gradient-to-b from-green-500 to-transparent bg-[length:auto_150px] bg-no-repeat rounded-xl p-4"},_U={class:"w-full aspect-square"},bU=["src"],IU={class:"flex flex-col"},EU={class:"text-xs"},TU={class:"text-green-800"},xU=f("span",{class:"text-2xl"},"₱",-1),SU={__name:"HomeView",setup(n){const e=qc();return(t,r)=>(se(),me("main",aU,[f("section",cU,[lU,f("div",uU,[(se(!0),me(Me,null,mn(re(e).itemsInRange(12,18),i=>(se(),yn(re(Nt),{to:"/item/"+i.id,class:"shadow-sm shadow-gray-400 p-2 bg-white"},{default:Pe(()=>[f("div",hU,[f("img",{src:i.img,alt:"",srcset:"",loading:"lazy",class:"object-contain"},null,8,dU)]),f("div",fU,[f("p",null,De(i.name),1),f("p",pU,De(i.location),1),f("p",gU,[mU,fe(De(i.price+" - "+i.rate),1)])])]),_:2},1032,["to"]))),256))])]),f("section",yU,[vU,f("div",wU,[(se(!0),me(Me,null,mn(re(e).itemsInRange(0,18),i=>(se(),yn(re(Nt),{to:"/item/"+i.id,class:"shadow-sm shadow-gray-400 p-2 bg-white"},{default:Pe(()=>[f("div",_U,[f("img",{src:i.img,alt:"",srcset:"",loading:"lazy",class:"object-contain"},null,8,bU)]),f("div",IU,[f("p",null,De(i.name),1),f("p",EU,De(i.location),1),f("p",TU,[xU,fe(De(i.price+" - "+i.rate),1)])])]),_:2},1032,["to"]))),256))])])]))}},AU={class:"flex flex-col py-8 container mx-auto px-4 gap-8"},kU={class:"flex gap-2 lg:flex-row flex-col"},CU={class:"basis-9/12 flex flex-col sm:flex-row gap-2"},RU=f("div",{class:"basis-4/12 flex flex-col gap-2 p-4 bg-white"},[f("img",{src:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",alt:"",srcset:""})],-1),DU={class:"basis-8/12 flex flex-col justify-between w-full p-4 bg-white"},PU=f("div",{class:"gap-2 flex-wrap flex justify-between items-start"},[f("h1",{class:"text-3xl"},"Isaac Einstein"),f("div",{class:"flex"},[f("span",{class:"material-icons text-green-600"},"location_on"),f("span",null,"Baybay City")])],-1),NU={class:"my-4 block md:flex xl:block flex-row"},OU={class:"basis-full"},LU=f("h2",null,"Lender Ratings",-1),MU={class:"flex gap-4 mb-4 items-center"},FU=f("span",null,"3.0 / 5.0",-1),$U={class:"basis-full"},VU=f("h2",{class:""},"Chat Response Rate",-1),UU={class:"flex gap-4 mb-4 items-center"},BU=f("span",null,"4.0 / 5.0",-1),jU={class:"block lg:flex flex-col items-start"},qU={class:"flex flex-row lg:flex-col gap-2"},zU=f("span",{class:"material-icons"},"forum",-1),HU=f("span",null,"Chat",-1),KU=f("button",{class:"py-3 px-5 bg-yellow-200 text-yellow-800 border-2 border-yellow-500 rounded-lg basis-full justify-center flex items-center gap-1"},[f("span",{class:"material-icons"},"flag"),f("span",null,"Report user")],-1),GU=pc('<div class="basis-3/12 bg-white p-4 flex flex-row lg:flex-col gap-4"><div class="basis-1/2 lg:basis-0"><h2>Lended Items</h2><h2 class="text-2xl">542</h2></div><div class="basis-1/2 lg:basis-0"><h2>Rented Items</h2><h2 class="text-2xl">34</h2></div></div>',1),WU={class:"flex flex-col gap-2"},QU=f("h1",null,"Isaac Einstein's Favorites",-1),YU={class:"grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-gradient-to-b from-green-500 to-transparent bg-[length:auto_150px] bg-no-repeat rounded-xl p-4"},XU={class:"w-full aspect-square"},JU=["src"],ZU={class:"flex flex-col"},eB={class:"text-xs"},tB={class:"text-green-800"},nB=f("span",{class:"text-2xl"},"₱",-1),rB={class:"flex flex-col gap-2"},iB=f("h1",null,"Isaac Einstein's Items",-1),sB={class:"grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 bg-gradient-to-b from-green-500 to-transparent bg-[length:auto_150px] bg-no-repeat rounded-xl p-4"},oB={class:"w-full aspect-square"},aB=["src"],cB={class:"flex flex-col"},lB={class:"text-xs"},uB={class:"text-green-800"},hB=f("span",{class:"text-2xl"},"₱",-1),dB={__name:"ProfileView",setup(n){const e=qc();return(t,r)=>(se(),me("main",AU,[f("section",kU,[f("div",CU,[RU,f("div",DU,[f("div",null,[PU,f("div",NU,[f("div",OU,[LU,f("div",MU,[FU,ie(Mi,{value:"3"})])]),f("div",$U,[VU,f("div",UU,[BU,ie(Mi,{value:"4"})])])])]),f("div",jU,[f("div",qU,[ie(re(Nt),{to:"/messages/5",class:"py-3 px-5 text-white bg-green-600 rounded-lg justify-center flex items-center gap-1 basis-full"},{default:Pe(()=>[zU,HU]),_:1}),KU])])])]),GU]),f("section",WU,[QU,f("div",YU,[(se(!0),me(Me,null,mn(re(e).itemsInRange(12,18),i=>(se(),yn(re(Nt),{to:"/item/"+i.id,class:"shadow-sm shadow-gray-400 p-2 bg-white"},{default:Pe(()=>[f("div",XU,[f("img",{src:i.img,alt:"",srcset:"",loading:"lazy",class:"object-contain"},null,8,JU)]),f("div",ZU,[f("p",null,De(i.name),1),f("p",eB,De(i.location),1),f("p",tB,[nB,fe(De(i.price+" - "+i.rate),1)])])]),_:2},1032,["to"]))),256))])]),f("section",rB,[iB,f("div",sB,[(se(!0),me(Me,null,mn(re(e).itemsInRange(0,18),i=>(se(),yn(re(Nt),{to:"/item/"+i.id,class:"shadow-sm shadow-gray-400 p-2 bg-white"},{default:Pe(()=>[f("div",oB,[f("img",{src:i.img,alt:"",srcset:"",loading:"lazy",class:"object-contain"},null,8,aB)]),f("div",cB,[f("p",null,De(i.name),1),f("p",lB,De(i.location),1),f("p",uB,[hB,fe(De(i.price+" - "+i.rate),1)])])]),_:2},1032,["to"]))),256))])])]))}},fB={class:"flex flex-col py-8 container mx-auto px-4 gap-4"},pB={class:"flex flex-row-reverse gap-2"},gB={class:"flex gap-2 lg:flex-row flex-col"},mB={class:"basis-3/12 flex flex-col gap-2 p-4 bg-white"},yB=["src"],vB={class:"flex w-full"},wB=["src"],_B=["src"],bB=["src"],IB={class:"basis-6/12 flex flex-col justify-between w-full p-4 bg-white"},EB={class:"flex justify-between items-start"},TB=f("span",{class:"bg-green-600 text-white text-xs py-1 px-4 rounded-full font-black"}," AVAILABLE ",-1),xB={class:"my-4"},SB={class:"text-green-600"},AB=f("span",{class:"text-2xl mr-2"},"₱",-1),kB={class:"flex gap-4"},CB=f("span",null,"4.0 / 5.0",-1),RB={class:"flex"},DB=f("span",{class:"material-icons text-green-600"},"location_on",-1),PB=f("p",null," Quality: 3d scanner, perfect for real object to graphic conversion chuchu text wrap verbose text paragraph really long line yes... ",-1),NB={class:"flex flex-col items-start mt-2"},OB={class:"flex gap-2"},LB={class:"flex gap-2 flex-wrap"},MB={class:"bg-yellow-200 text-yellow-700 text-xs py-1 border-2 px-4 border-yellow-500 rounded-full"},FB=f("div",{class:"flex flex-col gap-2"},[f("button",{class:"py-3 px-5 text-white bg-green-600 rounded-lg mt-4"}," Rent "),f("button",{class:"py-3 px-5 bg-yellow-200 text-yellow-800 border-2 border-yellow-500 rounded-lg text-center"}," Add to Favorites ")],-1),$B={class:"basis-3/12 bg-white p-4"},VB=f("h2",null,"Lender",-1),UB={class:"flex items-center gap-2 justify-between mb-4 flex-wrap"},BB=f("div",{class:"flex items-center gap-2"},[f("img",{class:"aspect-square w-12 rounded-full",src:"https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",alt:"",srcset:""}),f("span",{class:"whitespace-nowrap"},"Isaac Einstein")],-1),jB=f("span",{class:"material-icons text-green-600"},"forum",-1),qB=f("h2",null,"Lender Ratings",-1),zB={class:"flex gap-4 mb-4 items-center"},HB=f("span",null,"4.0 / 5.0",-1),KB=f("h2",null,"Chat Response Rate",-1),GB={class:"flex gap-4 mb-4 items-center"},WB=f("span",null,"4.0 / 5.0",-1),QB={class:"flex flex-col gap-2"},YB=pc('<div class="flex md:flex-row flex-col justify-between p-4 bg-gray-50 gap-4 md:items-center"><h1>Item Reviews and Rating</h1><div class="flex flex-wrap md:items-center items-start gap-4 text-sm sm:text-base"><div class="flex items-center gap-1"><span class="material-icons text-green-600">filter_alt</span><span>Filter:</span><select name="" id="" class="text-xs sm:text-base"><option value="">All Star</option></select></div><div class="flex items-center gap-1"><span class="material-icons text-green-600">sort</span><span>Sort:</span><select name="" id="" class="text-xs sm:text-base"><option value="">Relevance</option><option value="">???</option></select></div></div></div>',1),XB={class:"flex flex-col gap-2"},JB={class:"bg-white p-4 flex flex-col gap-2"},ZB={class:"flex items-center gap-2"},e4=f("img",{class:"aspect-square w-12 rounded-full",src:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",alt:"",srcset:""},null,-1),t4={class:"flex flex-col"},n4=f("span",{class:"truncate text-gray-700"},"Isaac Einstein",-1),r4=f("p",{class:"py-2"},"user review........................",-1),i4={__name:"ItemDetailView",setup(n){const e=qc(),t=$_(),r=parseInt(t.params.id),i=e.itemById(r),s=xe(["scanner","3d","technology","gadget","device"]);return(o,a)=>(se(),me("main",fB,[f("section",pB,[ie(re(Nt),{to:"/home"},{default:Pe(()=>[fe("Close X")]),_:1})]),f("section",gB,[f("div",mB,[f("img",{src:re(i).img,alt:"",srcset:""},null,8,yB),f("div",vB,[f("img",{class:"w-1/3 px-1 aspect-auto",src:re(i).img,alt:"",srcset:""},null,8,wB),f("img",{class:"w-1/3 px-1 aspect-auto",src:re(i).img,alt:"",srcset:""},null,8,_B),f("img",{class:"w-1/3 px-1 aspect-auto",src:re(i).img,alt:"",srcset:""},null,8,bB)])]),f("div",IB,[f("div",null,[f("div",EB,[f("h1",null,De(re(i).name),1),TB]),f("div",xB,[f("p",SB,[AB,fe(De(re(i).price+" - "+re(i).rate),1)]),f("div",kB,[CB,ie(Mi,{value:"4"})]),f("div",RB,[DB,f("span",null,De(re(i).location),1)])]),PB]),f("div",NB,[f("div",OB,[fe(" Tags: "),f("ul",LB,[(se(!0),me(Me,null,mn(s.value,c=>(se(),me("li",MB,De(c),1))),256))])]),FB])]),f("div",$B,[VB,f("div",UB,[BB,ie(re(Nt),{to:"/messages/3",class:"flex items-center gap-1"},{default:Pe(()=>[jB,fe("Chat ")]),_:1})]),qB,f("div",zB,[HB,ie(Mi,{value:"4"})]),KB,f("div",GB,[WB,ie(Mi,{value:"4"})])])]),f("section",QB,[YB,f("section",XB,[(se(),me(Me,null,mn(6,c=>f("article",JB,[f("div",ZB,[e4,f("div",t4,[ie(Mi,{value:"4"}),n4])]),r4])),64))])])]))}},s4={class:"flex flex-row items-stretch py-8 container mx-auto px-4 gap-4 h-full"},o4={class:"flex flex-col overflow-hidden h-full"},a4=f("h1",{class:"px-6 py-4 shadow-sm shadow-gray-300 z-10"}," Recent Messages ",-1),c4={class:"overflow-y-auto px-2"},l4=["src"],u4={class:"w-full truncate"},h4={class:"font-black truncate"},d4={class:"truncate text-gray-800"},f4={__name:"MessagesView",setup(n){const e=xe([{id:1,name:"John Smith",avatar:"https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",message:"Okay, but when?"},{id:2,name:"Emily Johnson",avatar:"https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",message:"Hi there! I'm interested in renting this item. Can you provide more details about its specifications?"},{id:3,name:"David Brown",avatar:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",message:"I received the package today, and I'm thrilled with the product! It exceeded my expectations."},{id:4,avatar:"https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",name:"Sarah Davis",message:"Great!"},{id:5,avatar:"https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",name:"Michael Wilson",message:"Will the item be available by Tuesday?"},{id:6,name:"Jessica Thompson",avatar:"https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",message:"I just wanted to say thank you for the excellent customer service. I'm impressed with the prompt responses and assistance."},{id:7,name:"Christopher Martinez",avatar:"https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",message:"👍"},{id:8,name:"Megan Taylor",avatar:"https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",message:"Look! A placeholder text!"}]);return(t,r)=>(se(),me("main",s4,[f("aside",{class:Ur(["lg:block basis-full lg:basis-1/3 box-border bg-white rounded-xl shadow-md shadow-gray-400 overflow-hidden",["messages"].includes(t.$route.name)?"":"hidden"])},[f("div",o4,[a4,f("div",c4,[(se(!0),me(Me,null,mn(e.value,i=>(se(),yn(re(Nt),{to:"/messages/"+i.id,class:"flex gap-2 p-2 rounded-2xl my-2","active-class":"bg-yellow-200"},{default:Pe(()=>[f("img",{src:i.avatar,alt:"",class:"aspect-square w-12 rounded-full"},null,8,l4),f("div",u4,[f("p",h4,De(i.name),1),f("p",d4,De(i.message),1)])]),_:2},1032,["to"]))),256))])])],2),f("div",{class:Ur(["basis-full lg:basis-2/3 lg:block bg-white overflow-hidden rounded-xl shadow-md shadow-gray-400",["messages"].includes(t.$route.name)?"hidden":""])},[ie(re(gc))],2)]))}},p4={class:"flex flex-col lg:flex-row py-8 container mx-auto px-4 gap-4"},g4=f("aside",{class:"basis-1/3"},[f("div",{class:"flex flex-col p-4 box-border bg-white gap-2 rounded-xl shadow-sm shadow-gray-400"},[f("h1",null,"Search for Items"),f("form",{action:"#",method:"get",class:"flex flex-col gap-2"},[f("div",{class:"flex gap-2"},[f("input",{type:"text",name:"",placeholder:"Item name",class:"w-full py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",id:""}),f("button",{type:"submit",class:"py-2 px-4 text-white bg-green-700 rounded-xl"}," Search ")]),f("div",{class:"flex gap-2"},[f("input",{type:"text",name:"",placeholder:"Min. Rate",class:"w-1/2 py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",id:""}),f("input",{type:"text",name:"",placeholder:"Max. Rate",class:"w-1/2 py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",id:""})]),f("input",{type:"text",placeholder:"Location",class:"py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl"})]),f("section",null,[f("h2",null,"Category"),f("ul",null,[f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Clothing "),f("ul",{class:"ml-4"},[f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Men")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Women")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Unisex")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Kids")])])]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Appliances "),f("ul",{class:"ml-4"},[f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Kitchen")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Laundry")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Living Room")])])]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Gadgets and Devices "),f("ul",{class:"ml-4"},[f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Smartphones")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Cameras")]),f("li",null,[f("input",{type:"checkbox",name:"",id:""}),fe("Tablets")])])])])])])],-1),m4={class:"basis-2/3 grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"},y4={class:"w-full aspect-square"},v4=["src"],w4={class:"flex flex-col"},_4={class:"text-xs"},b4={class:"text-green-800"},I4=f("span",{class:"text-2xl"},"₱",-1),E4={__name:"SearchView",setup(n){const e=qc();return(t,r)=>{const i=ss("RouterLink");return se(),me("main",p4,[g4,f("section",m4,[(se(!0),me(Me,null,mn(re(e).itemsInRange(4,16),s=>(se(),yn(i,{to:"/item/"+s.id,class:"shadow-sm shadow-gray-400 p-2 bg-white"},{default:Pe(()=>[f("div",y4,[f("img",{src:s.img,alt:"",srcset:"",loading:"lazy",class:"object-contain"},null,8,v4)]),f("div",w4,[f("p",null,De(s.name),1),f("p",_4,De(s.location),1),f("p",b4,[I4,fe(De(s.price+" - "+s.rate),1)])])]),_:2},1032,["to"]))),256))])])}}},T4={},x4={class:"h-full flex flex-col justify-center items-center"},S4={class:"text-gray-500"};function A4(n,e){return se(),me("div",x4,[f("p",S4,[lS(n.$slots,"default",{},()=>[fe("Click a conversation to start")])])])}const k4=ju(T4,[["render",A4]]),C4={class:"flex flex-col justify-between h-full"},R4={class:"bg-green-600 flex justify-between px-6 py-2 shadow-md shadow-gray-400 items-center"},D4=pc('<div class="flex gap-2"><img src="https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg" alt="" class="aspect-square w-12 rounded-full"><div class="flex flex-col text-white"><p class="font-black">Elong Mah</p><div class="truncate flex gap-1 items-center"><div class="h-2 rounded-full bg-green-300 w-2 inline-block"></div><span>Online</span></div></div></div>',1),P4={class:"bg-white px-6 pt-12"},N4={class:"bg-white pb-4 sticky bottom-0 mt-4 rounded-t-xl"},O4=f("button",{type:"submit",class:"py-2 px-6 text-white bg-green-700 rounded-xl"}," Send ",-1),L4={__name:"ConversationView",setup(n){const e=$_();parseInt(e.params.id);const t=xe(""),r=xe(),i=xe([{user:"me",message:"Hi, with regards to product X, is this item still in good condition?"},{user:"them",message:"Of course! "},{user:"them",message:'We regularly perform "Maintenance Order X" upon return of item to ensure that the product is in a good quality '},{user:"me",message:"Great!"},{user:"me",message:"Will the product be available by Tuesday?"},{user:"them",message:"Yes."},{user:"me",message:"👍"},{user:"them",message:"And by the way, you can try writing in the input field and it will actually send to our convo."}]);function s(){i.value.push({user:"me",message:t.value}),t.value="",r.value.scrollTop=scrollContainer.value.scrollHeight}function o(c){return c+1==i.value.length?!1:i.value[c].user==i.value[c+1].user}function a(c){var l="";return c+1<i.value.length&&i.value[c].user==i.value[c+1].user&&(l+=i.value[c].user=="me"?" rounded-br-none":" rounded-bl-none"),c-1>=0&&i.value[c].user==i.value[c-1].user&&(l+=i.value[c].user=="me"?" rounded-tr-none":" rounded-tl-none"),l+=i.value[c].user=="me"?" bg-green-700 text-white":" bg-gray-300",l}return(c,l)=>(se(),me("div",C4,[f("header",R4,[D4,ie(re(Nt),{to:"/messages",class:"text-white material-icons"},{default:Pe(()=>[fe("close")]),_:1})]),f("main",{class:"flex flex-col-reverse overflow-y-auto basis-full",ref_key:"scrollToElement",ref:r},[f("div",P4,[(se(!0),me(Me,null,mn(i.value,(u,h)=>(se(),me("div",{class:Ur([u.user=="me"?"flex-row-reverse":"flex-row","flex gap-2 my-1 items-end"])},[f("img",{src:"https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",alt:"",class:Ur(["aspect-square w-12 rounded-full",o(h)?"opacity-0":""])},null,2),f("div",{class:Ur(["max-w-md rounded-3xl py-3 px-4",a(h)])},[f("p",null,De(u.message),1)],2)],2))),256)),f("section",N4,[f("form",{class:"bg-amber-400 flex gap-2 p-2 rounded-xl shadow-sm shadow-gray-400",onSubmit:l[1]||(l[1]=qs(u=>s(),["prevent"]))},[dt(f("input",{type:"text",name:"",placeholder:"Enter message...",class:"w-full py-2 px-4 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",id:"","onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u)},null,512),[[Tn,t.value]]),O4],32)])])],512)]))}},M4={class:"successMessage bg-white rounded-md"},F4={class:"py-3 px-5 text-white bg-gray-800 rounded-xl flex flex-col m-auto mt-5"},$4=["onSubmit"],V4=f("h2",null,"Enter Email that is associated with your account.",-1),U4=f("button",{class:"py-3 px-5 text-white bg-green-800 rounded-xl"}," Reset Password ",-1),B4={class:"py-3 px-5 text-white bg-green-800 rounded-xl"},j4={__name:"ForgotPasswordView",setup(n){const e=xe("");let t=xe(!1),r=xe(""),i=xe(!1),s=xe("");const o=async()=>{if(e.value!==""){try{await bn.auth().sendPasswordResetEmail(e.value).then(()=>{i.value=!0,s.value="Check your email to reset your password",t.value=!1})}catch(a){i.value=!1,t.value=!0,r.value=a.message,console.log("error")}console.log("success")}else i.value=!1,t.value=!0,r.value="Please enter your email address.";console.log("failed")};return(a,c)=>{const l=ss("RouterLink");return se(),me(Me,null,[dt(f("div",M4,[fe(De(re(s))+" ",1),f("button",F4,[ie(l,{to:"/login"},{default:Pe(()=>[fe("Close")]),_:1})])],512),[[ca,re(i)]]),dt(f("form",{onSubmit:qs(o,["stop","prevent"]),class:"flex gap-2 flex-col"},[V4,dt(f("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",class:"py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl",placeholder:"Email Address"},null,512),[[Tn,e.value]]),dt(f("div",{class:"errorMessage bg-red-500 rounded-md align-middle text-sm px-5 py-2"},De(re(r)),513),[[ca,re(t)]]),U4,f("button",B4,[ie(l,{to:"/login"},{default:Pe(()=>[fe("Back")]),_:1})])],40,$4),[[ca,!re(i)]])],64)}}};const q4={},z4=pc('<div class="overflow-y-auto max-h-96 text-justify pr-2" data-v-5eeb0cad><h1 data-v-5eeb0cad>Terms and Conditions</h1><h2 data-v-5eeb0cad>Acceptance of Terms</h2><p data-v-5eeb0cad> You accept and agree to be governed by these Terms and Conditions by accessing and using our renting web app (ItemShare). Please don&#39;t use the Platform if you disagree with these terms. </p><h2 data-v-5eeb0cad>User Responsibility</h2><p data-v-5eeb0cad> The Platform provides a platform for people to interact and conduct rental business. The things that are listed on the Platform are not under our ownership or control. </p><p data-v-5eeb0cad> Users are completely responsible for their rental actions, which may include interacting with other users and negotiating and agreeing on rental terms. </p><p data-v-5eeb0cad> Things advertised on the Platform may not be available, in good condition, of sufficient quality, or compliance with the law. Users are in charge of determining if the products are appropriate and trustworthy, and they use them at their own risk. </p><h2 data-v-5eeb0cad>Liability</h2><p data-v-5eeb0cad> We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or connected with the Platform, including but not limited to loss of data, loss of profit, or loss of business opportunities, to the extent permitted by applicable law. </p><p data-v-5eeb0cad> The users undertake to hold us harmless from any claims, demands, or losses resulting from disagreements with other users or other parties. </p><h2 data-v-5eeb0cad>Privacy and Personal Information</h2><p data-v-5eeb0cad> We are dedicated to safeguarding our users&#39; data and privacy. For thorough information on how we gather, utilize, and protect user data, please refer to our Privacy Policy. </p><p data-v-5eeb0cad> Although we will make a reasonable effort to protect user data, we cannot ensure the security of user data sent through the Platform. Users are aware of and agree to this risk. </p><h2 data-v-5eeb0cad>Intellectual Property</h2><p data-v-5eeb0cad> The Platform and its contents (aside from user-generated material) are owned by their respective owners and are covered by intellectual property rights. Without express authorization, Users agree not to use, modify, distribute, or reproduce any aspect of the Platform. </p><h2 data-v-5eeb0cad>Modifications and Termination</h2><p data-v-5eeb0cad> The Platform, together with these Terms and Conditions, is subject to change or termination at any moment with prior notice. </p><p data-v-5eeb0cad> Users are recommended to often review the Terms and Conditions. Any changes made are accepted by continuing to use the Platform. </p></div>',1),H4={class:"flex justify-end gap-2 mt-4"};function K4(n,e){const t=ss("RouterLink");return se(),me(Me,null,[z4,f("div",H4,[ie(t,{to:"/register",class:"py-3 px-5 text-white bg-green-800 rounded-lg"},{default:Pe(()=>[fe(" ACCEPT ")]),_:1}),ie(t,{to:"/register",class:"py-3 px-5 text-white bg-red-800 rounded-lg"},{default:Pe(()=>[fe(" DECLINE ")]),_:1})])],64)}const G4=ju(q4,[["render",K4],["__scopeId","data-v-5eeb0cad"]]),W4={class:"flex flex-col py-8 container mx-auto px-4"},Q4=f("h1",null,"Create an item",-1),Y4=f("label",{for:"images"},"Images",-1),X4={class:"w-full overflow-x-auto p-4 bg-red-200",id:"images"},J4={class:"flex gap-2"},Z4=["src"],ej=f("label",{for:"add-image",class:"bg-green-400 cursor-pointer h-40 aspect-square text-center py-4"}," Add image... ",-1),tj=pc('<label for="fname">Item Name</label><input name="fname" type="text" class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl" placeholder="Add an item name"><label for="fname">Location</label><input name="fname" type="text" class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl" placeholder="Enter location..."><label for="fname">Rent rate</label><input name="fname" type="text" class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl" placeholder="rent rate..."><label for="fname">Tags</label><input name="fname" type="text" class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl" placeholder="tag1, tag2, tag3"><label for="fname">Description</label><textarea name="description" class="py-3 px-5 bg-yellow-200 placeholder-yellow-700 border-2 border-yellow-500 rounded-xl" placeholder="A short description on what the item is about"></textarea>',10),nj={class:"flex justify-end gap-2 mt-4"},rj={__name:"CreateItemView",setup(n){const e=new FileReader,t=xe([]),r=xe(["https://img.getimg.ai/generated/img-TJkw9SrWmpQLt9tIhgET7.jpeg"]);function i(s){let o=s.target.files[0];t.value.push(o),e.readAsDataURL(o),e.onload=a=>{r.value.push(a.target.result)}}return(s,o)=>{const a=ss("RouterLink");return se(),me("main",W4,[Q4,f("input",{type:"file",id:"add-image",onChange:o[0]||(o[0]=c=>i(c)),hidden:""},null,32),Y4,f("div",X4,[f("div",J4,[(se(!0),me(Me,null,mn(r.value,c=>(se(),me("img",{class:"h-40 gap-2 aspect-square object-contain",src:c,alt:"",srcset:""},null,8,Z4))),256)),ej])]),tj,f("div",nj,[ie(a,{to:"/item/1",class:"py-3 px-5 text-white bg-green-800 rounded-lg border-2 border-green-800"},{default:Pe(()=>[fe(" CREATE ")]),_:1}),ie(a,{to:"/home",class:"py-3 px-5 text-green-800 border-2 bg-white border-green-800 rounded-lg"},{default:Pe(()=>[fe(" CANCEL ")]),_:1})])])}}},ij=I1({history:UA("/itemshare/"),routes:[{path:"/",component:L1,children:[{path:"",name:"getStarted",component:$1},{path:"/login",name:"login",component:EN},{path:"/register",name:"register",component:a$},{path:"/terms-and-conditions",name:"termsAndConditions",component:G4},{path:"/forgot-password",name:"forgotPassword",component:j4}]},{path:"/home",component:oU,children:[{path:"",name:"home",component:SU},{path:"/profile",name:"profile",component:dB},{path:"/messages",component:f4,children:[{path:"",name:"messages",component:k4},{path:"/messages/:id",name:"conversation",component:L4}]},{path:"/item/:id",name:"itemDetail",component:i4},{path:"/search",name:"search",component:E4},{path:"/create-item",name:"createItem",component:rj}]}]}),gm=fA(T1);gm.use(mA());gm.use(ij);gm.mount("#app");
