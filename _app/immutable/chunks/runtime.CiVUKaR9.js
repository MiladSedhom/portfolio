var Qn=Array.isArray,Xn=Array.from,nt=Object.isFrozen,tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,In=Object.getOwnPropertyDescriptors,rt=Object.prototype,st=Array.prototype,gn=Object.getPrototypeOf;const R=2,rn=4,F=8,sn=16,T=32,G=64,A=128,C=256,E=512,y=1024,D=2048,I=4096,g=8192,Pn=16384,on=32768,ot=65536,un=1<<18,J=Symbol("$state"),ut=Symbol("$state.frozen"),lt=Symbol("");function ln(n){return n===this.v}function Fn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function fn(n){return!Fn(n,this.v)}const it=1,ft=2,at=4,ct=8,_t=1,pt=2,vt=4,dt="[",bn="]",ht="",Et=`${bn}!`,yt={},qn=Symbol(),Tt=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],wt=["touchstart","touchmove","touchend"],mt={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function At(n,t="exclude-on"){return n.endsWith("capture")?t=="exclude-on"?n!=="gotpointercapture"&&n!=="lostpointercapture":n!=="ongotpointercapture"&&n!=="onlostpointercapture":!1}function Mn(n){throw new Error("effect_in_teardown")}function Cn(){throw new Error("effect_in_unowned_derived")}function Ln(n){throw new Error("effect_orphan")}function Yn(){throw new Error("effect_update_depth_exceeded")}function Ot(){throw new Error("hydration_failed")}function St(n){throw new Error("props_invalid_value")}function jn(){throw new Error("state_unsafe_mutation")}function an(n){return{f:0,v:n,reactions:null,equals:ln,version:0}}function Rt(n){var e;const t=an(n);return t.equals=fn,d!==null&&d.l!==null&&((e=d.l).s??(e.s=[])).push(t),t}function Dt(n,t){var e=n.v!==qn;return e&&c!==null&&z()&&c.f&R&&jn(),n.equals(t)||(n.v=t,n.version=On(),W(n,y,!0),z()&&e&&a!==null&&a.f&E&&!(a.f&T)&&(_!==null&&_.includes(n)?(h(a,y),H(a)):m===null?Kn([n]):m.push(n))),t}function cn(n){a===null&&c===null&&Ln(),c!==null&&c.f&A&&Cn(),V&&Mn()}function Q(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function b(n,t,e,r=!0){var s=(n&G)!==0,o={ctx:d,deps:null,nodes:null,f:n|y,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null};if(e){var i=k;try{X(!0),j(o),o.f|=Pn}finally{X(i)}}else t!==null&&H(o);var u=e&&o.deps===null&&o.first===null&&o.nodes===null&&o.teardown===null;return!u&&!s&&r&&(a!==null&&Q(o,a),c!==null&&c.f&R&&Q(o,c)),o}function Nt(n){cn();var t=a!==null&&(a.f&F)!==0&&d!==null&&!d.m;if(t){var e=d;(e.e??(e.e=[])).push(n)}else{var r=_n(n);return r}}function kt(n){return cn(),pn(n)}function xt(n){const t=b(G,n,!0);return()=>{K(t)}}function _n(n){return b(rn,n,!1)}function pn(n){return b(F,n,!0)}function It(n){return pn(n)}function gt(n,t,e){const r=b(F|sn|t,e,!0);return n!==null&&(r.nodes={start:null,anchor:null,end:n}),r}function Pt(n,t=!0){return b(F|T,n,!0,t)}function vn(n){var t=n.teardown;if(t!==null){const e=V,r=c;nn(!0),tn(null);try{t.call(null)}finally{nn(e),tn(r)}}}function K(n,t=!0){var e=!1;if((t||n.f&un)&&n.nodes!==null){for(var r=dn(n),s=n.nodes.end;r!==null;){var o=r===s?null:r.nextSibling;r.remove(),r=o}e=!0}if(Z(n,t&&!e),Y(n,0),h(n,g),n.transitions)for(const u of n.transitions)u.stop();vn(n);var i=n.parent;i!==null&&n.f&T&&i.first!==null&&hn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function dn(n){var t=n.nodes,e=t.start;if(e===void 0)return t.anchor;if(e!==null)return e;for(var r=n.first;r&&(r.nodes===null||r.f&un);)r=r.next;return r!==null&&r.nodes!==null?dn(r):t.end}function hn(n){var t=n.parent,e=n.prev,r=n.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),t!==null&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function Ft(n,t){var e=[];En(n,e,!0),Hn(e,()=>{K(n),t&&t()})}function Hn(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var s of n)s.out(r)}else t()}function En(n,t,e){if(!(n.f&I)){if(n.f^=I,n.transitions!==null)for(const i of n.transitions)(i.is_global||e)&&t.push(i);for(var r=n.first;r!==null;){var s=r.next,o=(r.f&on)!==0||(r.f&T)!==0;En(r,t,o?e:!1),r=s}}}function bt(n){yn(n,!0)}function yn(n,t){if(n.f&I){n.f^=I,q(n)&&j(n);for(var e=n.first;e!==null;){var r=e.next,s=(e.f&on)!==0||(e.f&T)!==0;yn(e,s?t:!1),e=r}if(n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&o.in()}}const qt=()=>{};function Mt(n){return n()}function Un(n){for(var t=0;t<n.length;t++)n[t]()}let L=!1,B=[];function Tn(){L=!1;const n=B.slice();B=[],Un(n)}function Ct(n){L||(L=!0,queueMicrotask(Tn)),B.push(n)}function Bn(){L&&Tn()}function zn(n){let t=R|y;a===null&&(t|=A);const e={deps:null,deriveds:null,equals:ln,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(c!==null&&c.f&R){var r=c;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function Lt(n){const t=zn(n);return t.equals=fn,t}function wn(n){Z(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)$n(t[e])}}function mn(n){wn(n);var t=Sn(n),e=(N||n.f&A)&&n.deps!==null?D:E;h(n,e),n.equals(t)||(n.v=t,n.version=On(),W(n,y,!1))}function $n(n){wn(n),Y(n,0),h(n,g),n.first=n.last=n.deps=n.reactions=n.fn=null}const An=0,Gn=1;let M=An,P=!1,k=!1,V=!1;function X(n){k=n}function nn(n){V=n}let S=[],x=0,c=null;function tn(n){c=n}let a=null,_=null,p=0,m=null;function Kn(n){m=n}let Vn=0,N=!1,d=null;function On(){return Vn++}function z(){return d!==null&&d.l===null}function q(n){var O;var t=n.f,e=(t&y)!==0;if(e)return!0;var r=(t&A)!==0,s=(t&C)!==0;if(t&D){var o=n.deps;if(o!==null)for(var i=o.length,u,l=0;l<i;l++){var f=o[l];!e&&q(f)&&mn(f);var v=f.version;if(r){if(v>n.version)return!0;!N&&!((O=f==null?void 0:f.reactions)!=null&&O.includes(n))&&(f.reactions??(f.reactions=[])).push(n)}else{if(n.f&y)return!0;s&&(v>n.version&&(e=!0),u=f.reactions,u===null?f.reactions=[n]:u.includes(n)||u.push(n))}}r||h(n,E),s&&(n.f^=C)}return e}function Zn(n,t,e){throw n}function Sn(n){const t=_,e=p,r=m,s=c,o=N;_=null,p=0,m=null,c=n.f&(T|G)?null:n,N=!k&&(n.f&A)!==0;try{let i=(0,n.fn)(),u=n.deps;if(_!==null){let l;if(u!==null){const f=u.length,v=p===0?_:u.slice(0,p).concat(_),w=v.length>16&&f-p>1?new Set(v):null;for(l=p;l<f;l++){const U=u[l];(w!==null?!w.has(U):!v.includes(U))&&Rn(n,U)}}if(u!==null&&p>0)for(u.length=p+_.length,l=0;l<_.length;l++)u[p+l]=_[l];else n.deps=u=_;if(!N)for(l=p;l<u.length;l++){const f=u[l],v=f.reactions;v===null?f.reactions=[n]:v[v.length-1]!==n&&!v.includes(n)&&v.push(n)}}else u!==null&&p<u.length&&(Y(n,p),u.length=p);return i}finally{_=t,p=e,m=r,c=s,N=o}}function Rn(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(n);s!==-1&&(r===0?t.reactions=null:(e[s]=e[r],e.pop()))}r===0&&t.f&R&&(h(t,D),t.f&(A|C)||(t.f^=C),Y(t,0))}function Y(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let s;for(s=t;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&Rn(n,o)}}}function Z(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,K(e,t),e=r}function j(n){var t=n.f;if(!(t&g)){h(n,E);var e=n.ctx,r=a,s=d;a=n,d=e;try{t&sn||Z(n),vn(n);var o=Sn(n);n.teardown=typeof o=="function"?o:null}catch(i){Zn(i)}finally{a=r,d=s}}}function Dn(){x>1e3&&(x=0,Yn()),x++}function Nn(n){var t=n.length;if(t!==0){Dn();var e=k;k=!0;try{for(var r=0;r<t;r++){var s=n[r];if(s.first===null&&!(s.f&T))en([s]);else{var o=[];kn(s,o),en(o)}}}finally{k=e}}}function en(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&(g|I))&&q(r)&&(j(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null?hn(r):r.fn=null))}}function Wn(){if(P=!1,x>1001)return;const n=S;S=[],Nn(n),P||(x=0)}function H(n){M===An&&(P||(P=!0,queueMicrotask(Wn)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&T){if(!(e&E))return;h(t,D)}}S.push(t)}function kn(n,t){var e=n.first,r=[];n:for(;e!==null;){var s=e.f,o=(s&(g|I))===0,i=s&T,u=(s&E)!==0,l=e.first;if(o&&(!i||!u)){if(i&&h(e,E),s&F){if(!i&&q(e)&&(j(e),l=e.first),l!==null){e=l;continue}}else if(s&rn)if(i||u){if(l!==null){e=l;continue}}else r.push(e)}var f=e.next;if(f===null){let w=e.parent;for(;w!==null;){if(n===w)break n;var v=w.next;if(v!==null){e=v;continue n}w=w.parent}}e=f}for(var O=0;O<r.length;O++)l=r[O],t.push(l),kn(l,t)}function xn(n,t=!0){var e=M,r=S;try{Dn();const o=[];M=Gn,S=o,P=!1,t&&Nn(r);var s=n==null?void 0:n();return Bn(),(S.length>0||o.length>0)&&xn(),x=0,s}finally{M=e,S=r}}async function Yt(){await Promise.resolve(),xn()}function jt(n){const t=n.f;if(t&g)return n.v;if(c!==null){const e=(c.f&A)!==0,r=c.deps;_===null&&r!==null&&r[p]===n&&!(e&&a!==null)?p++:(r===null||p===0||r[p-1]!==n)&&(_===null?_=[n]:_[_.length-1]!==n&&!_.includes(n)&&_.push(n)),m!==null&&a!==null&&a.f&E&&!(a.f&T)&&m.includes(n)&&(h(a,y),H(a))}return t&R&&q(n)&&mn(n),n.v}function W(n,t,e){var r=n.reactions;if(r!==null)for(var s=z(),o=r.length,i=0;i<o;i++){var u=r[i],l=u.f;if(!(l&y||(!e||!s)&&u===a)){h(u,t);var f=(l&D)!==0,v=(l&A)!==0;(l&E||f&&v)&&(u.f&R?W(u,D,e):H(u))}}}function Ht(n){const t=c;try{return c=null,n()}finally{c=t}}const Jn=~(y|D|E);function h(n,t){n.f=n.f&Jn|t}function Ut(n,t=!1,e){d={p:d,c:null,e:null,m:!1,s:n,x:null,l:null},t||(d.l={s:null,u:null,r1:[],r2:an(!1)})}function Bt(n){const t=d;if(t!==null){const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)_n(r[e])}d=t.p,t.m=!0}return{}}function zt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(J in n)$(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&J in e&&$(e)}}}function $(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let r in n)try{$(n[r],t)}catch{}const e=gn(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=In(e);for(let s in r){const o=r[s].get;if(o)try{o.call(n)}catch{}}}}}export{bt as $,d as A,Un as B,Mt as C,zt as D,qt as E,Ut as F,It as G,Bt as H,dt as I,bn as J,yt as K,ot as L,ht as M,xn as N,Ot as O,ft as P,Xn as Q,xt as R,ut as S,Pt as T,qn as U,wt as V,_t as W,pt as X,vt as Y,gt as Z,Et as _,J as a,Ft as a0,on as a1,Yt as a2,K as a3,At as a4,mt as a5,lt as a6,Tt as a7,In as a8,Fn as a9,st as b,Qn as c,tt as d,Dt as e,jt as f,et as g,a as h,nt as i,gn as j,_n as k,at as l,Rt as m,fn as n,rt as o,St as p,Ct as q,pn as r,an as s,it as t,Ht as u,ct as v,zn as w,Lt as x,kt as y,Nt as z};
