(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,F=33779,I=35840,L=35841,R=35842,ee=35843,z=36196,te=37492,ne=37496,B=37488,V=37489,re=37490,ie=37491,ae=37808,oe=37809,se=37810,ce=37811,le=37812,ue=37813,H=37814,de=37815,fe=37816,pe=37817,me=37818,he=37819,ge=37820,_e=37821,ve=36492,ye=36494,be=36495,xe=36283,Se=36284,Ce=36285,we=36286,Te=2300,Ee=2301,U=2302,De=2303,Oe=2400,ke=2401,W=2402,Ae=3200,je=`srgb`,G=`srgb-linear`,K=`linear`,Me=`srgb`,Ne=7680,Pe=35044,Fe=2e3;function Ie(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Le(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Re(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ze(){let e=Re(`canvas`);return e.style.display=`block`,e}var Be={};function Ve(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function He(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function q(...e){e=He(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function J(...e){e=He(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ue(...e){let t=e.join(` `);t in Be||(Be[t]=!0,q(...e))}function We(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ge={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Ke=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Je=1234567,Ye=Math.PI/180,Xe=180/Math.PI;function Ze(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qe[e&255]+qe[e>>8&255]+qe[e>>16&255]+qe[e>>24&255]+`-`+qe[t&255]+qe[t>>8&255]+`-`+qe[t>>16&15|64]+qe[t>>24&255]+`-`+qe[n&63|128]+qe[n>>8&255]+`-`+qe[n>>16&255]+qe[n>>24&255]+qe[r&255]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]).toLowerCase()}function Qe(e,t,n){return Math.max(t,Math.min(n,e))}function $e(e,t){return(e%t+t)%t}function et(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function tt(e,t,n){return e===t?0:(n-e)/(t-e)}function nt(e,t,n){return(1-n)*e+n*t}function rt(e,t,n,r){return nt(e,t,1-Math.exp(-n*r))}function it(e,t=1){return t-Math.abs($e(e,t*2)-t)}function at(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ot(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function st(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ct(e,t){return e+Math.random()*(t-e)}function lt(e){return e*(.5-Math.random())}function ut(e){e!==void 0&&(Je=e);let t=Je+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dt(e){return e*Ye}function ft(e){return e*Xe}function pt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function mt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ht(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function gt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:q(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function _t(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vt(e,t){if(t.constructor===Float32Array)return e;let n=_t(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function yt(e,t){if(t.constructor===Float32Array)return e;let n=_t(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var bt={DEG2RAD:Ye,RAD2DEG:Xe,generateUUID:Ze,clamp:Qe,euclideanModulo:$e,mapLinear:et,inverseLerp:tt,lerp:nt,damp:rt,pingpong:it,smoothstep:at,smootherstep:ot,randInt:st,randFloat:ct,randFloatSpread:lt,seededRandom:ut,degToRad:dt,radToDeg:ft,isPowerOfTwo:pt,ceilPowerOfTwo:mt,floorPowerOfTwo:ht,setQuaternionFromProperEuler:gt,normalize:yt,denormalize:vt},xt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:q(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ct.copy(this).projectOnVector(e),this.sub(Ct)}reflect(e){return this.sub(Ct.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ct=new Y,wt=new St,X=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ue(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Tt.makeScale(e,t)),this}rotate(e){return Ue(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Tt.makeRotation(-e)),this}translate(e,t){return Ue(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Tt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tt=new X,Et=new X().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dt=new X().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ot(){let e={enabled:!0,workingColorSpace:G,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=At(e.r),e.g=At(e.g),e.b=At(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=jt(e.r),e.g=jt(e.g),e.b=jt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?K:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[G]:{primaries:t,whitePoint:r,transfer:K,toXYZ:Et,fromXYZ:Dt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:r,transfer:Me,toXYZ:Et,fromXYZ:Dt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),e}var kt=Ot();function At(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function jt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Mt,Nt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mt===void 0&&(Mt=Re(`canvas`)),Mt.width=e.width,Mt.height=e.height;let t=Mt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Mt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Re(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=At(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(At(t[e]/255)*255):t[e]=At(t[e]);return{data:t,width:e.width,height:e.height}}return q(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Pt=0,Ft=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pt++}),this.uuid=Ze(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(It(r[t].image)):e.push(It(r[t]))}else e=It(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function It(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Nt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(q(`Texture: Unable to serialize Texture.`),{})}var Lt=0,Rt=new Y,zt=class r extends Ke{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lt++}),this.uuid=Ze(),this.name=``,this.source=new Ft(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rt).x}get height(){return this.source.getSize(Rt).y}get depth(){return this.source.getSize(Rt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){q(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=300,zt.DEFAULT_ANISOTROPY=1;var Bt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vt=class extends Ke{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new zt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ft(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ht=class extends Vt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ut=class extends zt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Wt=class extends zt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Gt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Kt.setFromMatrixColumn(e,0).length(),i=1/Kt.setFromMatrixColumn(e,1).length(),a=1/Kt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jt,e,Yt)}lookAt(e,t,n){let r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Xt.crossVectors(n,Qt),Xt.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Xt.crossVectors(n,Qt)),Xt.normalize(),Zt.crossVectors(Qt,Xt),r[0]=Xt.x,r[4]=Zt.x,r[8]=Qt.x,r[1]=Xt.y,r[5]=Zt.y,r[9]=Qt.y,r[2]=Xt.z,r[6]=Zt.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Kt.set(r[0],r[1],r[2]).length(),o=Kt.set(r[4],r[5],r[6]).length(),s=Kt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),qt.copy(this);let c=1/a,l=1/o,u=1/s;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=l,qt.elements[5]*=l,qt.elements[6]*=l,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Fe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Fe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Kt=new Y,qt=new Gt,Jt=new Y(0,0,0),Yt=new Y(1,1,1),Xt=new Y,Zt=new Y,Qt=new Y,$t=new Gt,en=new St,tn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Qe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:q(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $t.makeRotationFromQuaternion(e),this.setFromRotationMatrix($t,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return en.setFromEuler(this),this.setFromQuaternion(en,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER=`XYZ`;var nn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},rn=0,an=new Y,on=new St,sn=new Gt,cn=new Y,ln=new Y,un=new Y,dn=new St,fn=new Y(1,0,0),pn=new Y(0,1,0),mn=new Y(0,0,1),hn={type:`added`},gn={type:`removed`},_n={type:`childadded`,child:null},vn={type:`childremoved`,child:null},yn=class e extends Ke{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=Ze(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new tn,r=new St,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new X}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return on.setFromAxisAngle(e,t),this.quaternion.multiply(on),this}rotateOnWorldAxis(e,t){return on.setFromAxisAngle(e,t),this.quaternion.premultiply(on),this}rotateX(e){return this.rotateOnAxis(fn,e)}rotateY(e){return this.rotateOnAxis(pn,e)}rotateZ(e){return this.rotateOnAxis(mn,e)}translateOnAxis(e,t){return an.copy(e).applyQuaternion(this.quaternion),this.position.add(an.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fn,e)}translateY(e){return this.translateOnAxis(pn,e)}translateZ(e){return this.translateOnAxis(mn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cn.copy(e):cn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(ln,cn,this.up):sn.lookAt(cn,ln,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),on.setFromRotationMatrix(sn),this.quaternion.premultiply(on.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(J(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hn),_n.child=e,this.dispatchEvent(_n),_n.child=null):J(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gn),vn.child=e,this.dispatchEvent(vn),vn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hn),_n.child=e,this.dispatchEvent(_n),_n.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ln,e,un),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ln,dn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};yn.DEFAULT_UP=new Y(0,1,0),yn.DEFAULT_MATRIX_AUTO_UPDATE=!0,yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=class extends yn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},xn={type:`move`},Sn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Tn={h:0,s:0,l:0};function En(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Dn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=kt.workingColorSpace){if(e=$e(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=En(i,r,e+1/3),this.g=En(i,r,e),this.b=En(i,r,e-1/3)}return kt.colorSpaceToWorking(this,r),this}setStyle(e,t=je){function n(t){t!==void 0&&parseFloat(t)<1&&q(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:q(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);q(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let n=Cn[e.toLowerCase()];return n===void 0?q(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=At(e.r),this.g=At(e.g),this.b=At(e.b),this}copyLinearToSRGB(e){return this.r=jt(e.r),this.g=jt(e.g),this.b=jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return kt.workingToColorSpace(On.copy(this),e),Math.round(Qe(On.r*255,0,255))*65536+Math.round(Qe(On.g*255,0,255))*256+Math.round(Qe(On.b*255,0,255))}getHexString(e=je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(On.copy(this),t);let n=On.r,r=On.g,i=On.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=je){kt.workingToColorSpace(On.copy(this),e);let t=On.r,n=On.g,r=On.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Tn);let n=nt(wn.h,Tn.h,t),r=nt(wn.s,Tn.s,t),i=nt(wn.l,Tn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new Dn;Dn.NAMES=Cn;var kn=class extends yn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new Y,jn=new Y,Mn=new Y,Nn=new Y,Pn=new Y,Fn=new Y,In=new Y,Ln=new Y,Rn=new Y,zn=new Y,Bn=new Bt,Vn=new Bt,Hn=new Bt,Un=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),An.subVectors(e,t),r.cross(An);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){An.subVectors(r,t),jn.subVectors(n,t),Mn.subVectors(e,t);let a=An.dot(An),o=An.dot(jn),s=An.dot(Mn),c=jn.dot(jn),l=jn.dot(Mn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)!==null&&Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Nn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Nn.x),s.addScaledVector(a,Nn.y),s.addScaledVector(o,Nn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Bn.setScalar(0),Vn.setScalar(0),Hn.setScalar(0),Bn.fromBufferAttribute(e,t),Vn.fromBufferAttribute(e,n),Hn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bn,i.x),a.addScaledVector(Vn,i.y),a.addScaledVector(Hn,i.z),a}static isFrontFacing(e,t,n,r){return An.subVectors(n,t),jn.subVectors(e,t),An.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),An.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Pn.subVectors(r,n),Fn.subVectors(i,n),Ln.subVectors(e,n);let s=Pn.dot(Ln),c=Fn.dot(Ln);if(s<=0&&c<=0)return t.copy(n);Rn.subVectors(e,r);let l=Pn.dot(Rn),u=Fn.dot(Rn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Pn,a);zn.subVectors(e,i);let f=Pn.dot(zn),p=Fn.dot(zn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Fn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return In.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(In,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Pn,a).addScaledVector(Fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Kn):Kn.fromBufferAttribute(r,t),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),qn.copy(e.boundingBox)),qn.applyMatrix4(e.matrixWorld),this.union(qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),tr.subVectors(this.max,er),Jn.subVectors(e.a,er),Yn.subVectors(e.b,er),Xn.subVectors(e.c,er),Zn.subVectors(Yn,Jn),Qn.subVectors(Xn,Yn),$n.subVectors(Jn,Xn);let t=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-$n.z,$n.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,$n.z,0,-$n.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-$n.y,$n.x,0];return!ir(t,Jn,Yn,Xn,tr)||(t=[1,0,0,0,1,0,0,0,1],!ir(t,Jn,Yn,Xn,tr))?!1:(nr.crossVectors(Zn,Qn),t=[nr.x,nr.y,nr.z],ir(t,Jn,Yn,Xn,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Kn=new Y,qn=new Wn,Jn=new Y,Yn=new Y,Xn=new Y,Zn=new Y,Qn=new Y,$n=new Y,er=new Y,tr=new Y,nr=new Y,rr=new Y;function ir(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){rr.fromArray(e,a);let o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),s=t.dot(rr),c=n.dot(rr),l=r.dot(rr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ar=new Y,or=new xt,sr=0,cr=class extends Ke{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Pe,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:_t(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix4(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyNormalMatrix(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.transformDirection(e),this.setXYZ(t,ar.x,ar.y,ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?vt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?yt(e,this.array):Math.round(e*t)}},lr=class extends cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ur=class extends cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},dr=class extends cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},fr=new Wn,pr=new Y,mr=new Y,hr=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?fr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(pr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(mr)),this.expandByPoint(pr.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gr=0,_r=new Gt,vr=new yn,yr=new Y,br=new Wn,xr=new Wn,Sr=new Y,Cr=class e extends Ke{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gr++}),this.uuid=Ze(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ie(e)?ur:lr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new X().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _r.makeRotationFromQuaternion(e),this.applyMatrix4(_r),this}rotateX(e){return _r.makeRotationX(e),this.applyMatrix4(_r),this}rotateY(e){return _r.makeRotationY(e),this.applyMatrix4(_r),this}rotateZ(e){return _r.makeRotationZ(e),this.applyMatrix4(_r),this}translate(e,t,n){return _r.makeTranslation(e,t,n),this.applyMatrix4(_r),this}scale(e,t,n){return _r.makeScale(e,t,n),this.applyMatrix4(_r),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&q(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)J(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];br.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(this.boundingBox.min,br.min),this.boundingBox.expandByPoint(Sr),Sr.addVectors(this.boundingBox.max,br.max),this.boundingBox.expandByPoint(Sr)):(this.boundingBox.expandByPoint(br.min),this.boundingBox.expandByPoint(br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&J(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)J(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);else if(e){let n=this.boundingSphere.center;if(br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xr.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(br.min,xr.min),br.expandByPoint(Sr),Sr.addVectors(br.max,xr.max),br.expandByPoint(Sr)):(br.expandByPoint(xr.min),br.expandByPoint(xr.max))}br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Sr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Sr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Sr.fromBufferAttribute(a,t),o&&(yr.fromBufferAttribute(e,t),Sr.add(yr)),r=Math.max(r,n.distanceToSquared(Sr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&J(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){J(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let l=new Y,u=new Y,d=new Y,f=new xt,p=new xt,m=new xt,h=new Y,g=new Y;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new Y,b=new Y,x=new Y,S=new Y;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sr.fromBufferAttribute(e,t),Sr.normalize(),e.setXYZ(t,Sr.x,Sr.y,Sr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new cr(a,r,i)}if(this.index===null)return q(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},wr=new Y,Tr=new Y,Er=new X,Dr=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=wr.subVectors(n,t).cross(Tr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(wr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Er.getNormalMatrix(e),r=this.coplanarPoint(wr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Or=0,kr=class extends Ke{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Or++}),this.uuid=Ze(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ne,this.stencilZFail=Ne,this.stencilZPass=Ne,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){q(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Dr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new xt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ar=new Y,jr=new Y,Mr=new Y,Nr=new Y,Pr=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jr.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Mr),o=Nr.dot(this.direction),s=-Nr.dot(Mr),c=Nr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(jr).addScaledVector(Mr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ar.subVectors(e.center,this.origin);let n=Ar.dot(this.direction),r=Ar.dot(Ar)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,z=k-F*A,te=j-P*N,ne=M-F*N,B=te*z-ne*ee,V=L*ne-R*te,re=ee*R-z*L;if(r){if(B<0||V<0||re<0)return null}else if((B<0||V<0||re<0)&&(B>0||V>0||re>0))return null;let ie=B+V+re;if(ie===0)return null;let ae=I*(B*D+V*A+re*N);return(ie>0?ae<0:ae>0)?null:this.at(ae/ie,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fr=class extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Dn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ir=new Gt,Lr=new Pr,Rr=new hr,zr=new Y,Br=new Y,Vr=new Y,Hr=new Y,Ur=new Y,Wr=new Y,Gr=new Y,Kr=new Y,qr=class extends yn{constructor(e=new Cr,t=new Fr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Wr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ur.fromBufferAttribute(s,e),a?Wr.addScaledVector(Ur,r):Wr.addScaledVector(Ur.sub(t),r))}t.add(Wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Lr.copy(e.ray).recast(e.near),Rr.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Rr,zr)===null||Lr.origin.distanceToSquared(zr)>(e.far-e.near)**2)||(Ir.copy(i).invert(),Lr.copy(e.ray).applyMatrix4(Ir),(n.boundingBox===null||Lr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Yr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Yr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Yr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Yr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Jr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Kr.copy(s),Kr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Kr);return l<n.near||l>n.far?null:{distance:l,point:Kr.clone(),object:e}}function Yr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Br),e.getVertexPosition(c,Vr),e.getVertexPosition(l,Hr);let u=Jr(e,t,n,r,Br,Vr,Hr,Gr);if(u){let e=new Y;Un.getBarycoord(Gr,Br,Vr,Hr,e),i&&(u.uv=Un.getInterpolatedAttribute(i,s,c,l,e,new xt)),a&&(u.uv1=Un.getInterpolatedAttribute(a,s,c,l,e,new xt)),o&&(u.normal=Un.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};Un.getNormal(Br,Vr,Hr,t.normal),u.face=t,u.barycoord=e}return u}var Xr=class extends zt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zr=new hr,Qr=new xt(.5,.5),$r=new Y,ei=class{constructor(e=new Dr,t=new Dr,n=new Dr,r=new Dr,i=new Dr,a=new Dr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476+Qr.distanceTo(e.center),Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if($r.x=r.normal.x>0?e.max.x:e.min.x,$r.y=r.normal.y>0?e.max.y:e.min.y,$r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ti=new Gt,ni=class e{constructor(){this.coordinateSystem=Fe,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ti.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ei),n[e].setFromProjectionMatrix(ti,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ei),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},ri=class extends kr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Dn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ii=new Gt,ai=new Pr,oi=new hr,si=new Y,ci=class extends yn{constructor(e=new Cr,t=new ri){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oi.copy(n.boundingSphere),oi.applyMatrix4(r),oi.radius+=i,e.ray.intersectsSphere(oi)===!1)return;ii.copy(r).invert(),ai.copy(e.ray).applyMatrix4(ii);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);si.fromBufferAttribute(l,n),li(si,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)si.fromBufferAttribute(l,a),li(si,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function li(e,t,n,r,i,a,o){let s=ai.distanceSqToPoint(e);if(s<n){let n=new Y;ai.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ui=class extends zt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},di=class extends zt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fi=class extends zt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ft(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},pi=class extends fi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mi=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hi=class e extends Cr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new dr(c,3)),this.setAttribute(`normal`,new dr(l,3)),this.setAttribute(`uv`,new dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},gi=class e extends Cr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new Y,g=new Y;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new dr(o,3)),this.setAttribute(`normal`,new dr(s,3)),this.setAttribute(`uv`,new dr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},_i=class e extends Cr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new Y,l=new xt;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new dr(a,3)),this.setAttribute(`normal`,new dr(o,3)),this.setAttribute(`uv`,new dr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},vi=class e extends Cr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new dr(u,3)),this.setAttribute(`normal`,new dr(d,3)),this.setAttribute(`uv`,new dr(f,2));function _(){let a=new Y,_=new Y,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new xt,m=new Y,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yi=class e extends Cr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new dr(p,3)),this.setAttribute(`normal`,new dr(m,3)),this.setAttribute(`uv`,new dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},bi=class e extends Cr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Y,d=new Y,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new dr(p,3)),this.setAttribute(`normal`,new dr(m,3)),this.setAttribute(`uv`,new dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},xi=class e extends Cr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new Y,f=new Y,p=new Y;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new dr(c,3)),this.setAttribute(`normal`,new dr(l,3)),this.setAttribute(`uv`,new dr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Si(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(wi(i))i.isRenderTargetTexture?(q(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(wi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ci(e){let t={};for(let n=0;n<e.length;n++){let r=Si(e[n]);for(let e in r)t[e]=r[e]}return t}function wi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ti(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ei(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}var Di={clone:Si,merge:Ci},Oi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ki=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ai=class extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oi,this.fragmentShader=ki,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Ti(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Dn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new xt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Bt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new X().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ji=class extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Mi=class extends kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Dn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ni=class extends Mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Dn(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dn(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dn(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ue(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ue(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Pi=class extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ae,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fi=class extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ii(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Li(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ri=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},zi=class extends Ri{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oe,endingEnd:Oe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ke:i=e,o=2*t-n;break;case W:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ke:a=e,s=2*n-t;break;case W:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Bi=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Vi=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hi=class extends Ri{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Gi(n,t,g,y,r);i[p]=Ui(x,o,_,b,m)}return i}};function Ui(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Wi(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Gi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ui(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Wi(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ki=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ii(t,this.TimeBufferType),this.values=Ii(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ii(e.times,Array),values:Ii(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Li(e.settings)&&(n.settings={inTangents:Ii(e.settings.inTangents,Array),outTangents:Ii(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Te:t=this.InterpolantFactoryMethodDiscrete;break;case Ee:t=this.InterpolantFactoryMethodLinear;break;case U:t=this.InterpolantFactoryMethodSmooth;break;case De:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return q(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Te;case this.InterpolantFactoryMethodLinear:return Ee;case this.InterpolantFactoryMethodSmooth:return U;case this.InterpolantFactoryMethodBezier:return De}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Li(this.settings)&&(qi(this.settings.inTangents,e),qi(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Li(this.settings)&&(Ji(this.settings.inTangents,e),Ji(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(J(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(J(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){J(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){J(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Le(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){J(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===U,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Li(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function qi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ji(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ki.prototype.ValueTypeName=``,Ki.prototype.TimeBufferType=Float32Array,Ki.prototype.ValueBufferType=Float32Array,Ki.prototype.DefaultInterpolation=Ee;var Yi=class extends Ki{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName=`bool`,Yi.prototype.ValueBufferType=Array,Yi.prototype.DefaultInterpolation=Te,Yi.prototype.InterpolantFactoryMethodLinear=void 0,Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}};Xi.prototype.ValueTypeName=`color`;var Zi=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}};Zi.prototype.ValueTypeName=`number`;var Qi=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)St.slerpFlat(i,0,a,c-o,a,c,s);return i}},$i=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Qi(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName=`quaternion`,$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Ki{constructor(e,t,n){super(e,t,n)}};ea.prototype.ValueTypeName=`string`,ea.prototype.ValueBufferType=Array,ea.prototype.DefaultInterpolation=Te,ea.prototype.InterpolantFactoryMethodLinear=void 0,ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Ki{constructor(e,t,n,r){super(e,t,n,r)}};ta.prototype.ValueTypeName=`vector`;var na=new Y,ra=new St,ia=new Y,aa=class extends yn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Fe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(na,ra,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ra,ia.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(na,ra,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ra,ia.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oa=new Y,sa=new xt,ca=new xt,la=class extends aa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ye*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xe*2*Math.atan(Math.tan(Ye*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oa.x,oa.y).multiplyScalar(-e/oa.z),oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oa.x,oa.y).multiplyScalar(-e/oa.z)}getViewSize(e,t){return this.getViewBounds(e,sa,ca),t.subVectors(ca,sa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ye*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ua=class extends aa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},da=-90,fa=1,pa=class extends yn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new la(da,fa,e,t);r.layers=this.layers,this.add(r);let i=new la(da,fa,e,t);i.layers=this.layers,this.add(i);let a=new la(da,fa,e,t);a.layers=this.layers,this.add(a);let o=new la(da,fa,e,t);o.layers=this.layers,this.add(o);let s=new la(da,fa,e,t);s.layers=this.layers,this.add(s);let c=new la(da,fa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ma=class extends la{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ha=`\\[\\]\\.:\\/`,ga=RegExp(`[\\[\\]\\.:\\/]`,`g`),_a=`[^\\[\\]\\.:\\/]`,va=`[^`+ha.replace(`\\.`,``)+`]`,ya=`((?:WC+[\\/:])*)`.replace(`WC`,_a),ba=`(WCOD+)?`.replace(`WCOD`,va),xa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,_a),Sa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,_a),Ca=RegExp(`^`+ya+ba+xa+Sa+`$`),wa=[`material`,`materials`,`bones`,`map`],Ta=class{constructor(e,t,n){let r=n||Ea.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ea=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ga,``)}static parseTrackName(e){let t=Ca.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);wa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){q(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){J(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){J(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){J(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){J(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){J(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){J(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){J(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;J(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){J(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){J(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ea.Composite=Ta,Ea.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ea.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ea.prototype.GetterByBindingType=[Ea.prototype._getValue_direct,Ea.prototype._getValue_array,Ea.prototype._getValue_arrayElement,Ea.prototype._getValue_toArray],Ea.prototype.SetterByBindingTypeAndVersioning=[[Ea.prototype._setValue_direct,Ea.prototype._setValue_direct_setNeedsUpdate,Ea.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ea.prototype._setValue_array,Ea.prototype._setValue_array_setNeedsUpdate,Ea.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ea.prototype._setValue_arrayElement,Ea.prototype._setValue_arrayElement_setNeedsUpdate,Ea.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ea.prototype._setValue_fromArray,Ea.prototype._setValue_fromArray_setNeedsUpdate,Ea.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Da=new Gt,Oa=class{constructor(e,t,n=0,r=1/0){this.ray=new Pr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new nn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):J(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Da.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Da),this}intersectObject(e,t=!0,n=[]){return Aa(e,this,n,t),n.sort(ka),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Aa(e[r],this,n,t);return n.sort(ka),n}};function ka(e,t){return e.distance-t.distance}function Aa(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Aa(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ja(e,t,n,r){let i=Ma(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case L:case ee:return Math.max(e,16)*Math.max(t,8)/4;case I:case R:return Math.max(e,8)*Math.max(t,8)/2;case z:case te:case B:case V:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ne:case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ce:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case le:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ue:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case H:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case de:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ge:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _e:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ve:case ye:case be:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xe:case Se:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ma(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?q(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Na(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Pa(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Fa={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Z={common:{diffuse:{value:new Dn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X}},envmap:{envMap:{value:null},envMapRotation:{value:new X},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Dn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0},uvTransform:{value:new X}},sprite:{diffuse:{value:new Dn(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}}},Ia={basic:{uniforms:Ci([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:Fa.meshbasic_vert,fragmentShader:Fa.meshbasic_frag},lambert:{uniforms:Ci([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Dn(0)},envMapIntensity:{value:1}}]),vertexShader:Fa.meshlambert_vert,fragmentShader:Fa.meshlambert_frag},phong:{uniforms:Ci([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Dn(0)},specular:{value:new Dn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fa.meshphong_vert,fragmentShader:Fa.meshphong_frag},standard:{uniforms:Ci([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Dn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fa.meshphysical_vert,fragmentShader:Fa.meshphysical_frag},toon:{uniforms:Ci([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Dn(0)}}]),vertexShader:Fa.meshtoon_vert,fragmentShader:Fa.meshtoon_frag},matcap:{uniforms:Ci([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:Fa.meshmatcap_vert,fragmentShader:Fa.meshmatcap_frag},points:{uniforms:Ci([Z.points,Z.fog]),vertexShader:Fa.points_vert,fragmentShader:Fa.points_frag},dashed:{uniforms:Ci([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fa.linedashed_vert,fragmentShader:Fa.linedashed_frag},depth:{uniforms:Ci([Z.common,Z.displacementmap]),vertexShader:Fa.depth_vert,fragmentShader:Fa.depth_frag},normal:{uniforms:Ci([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:Fa.meshnormal_vert,fragmentShader:Fa.meshnormal_frag},sprite:{uniforms:Ci([Z.sprite,Z.fog]),vertexShader:Fa.sprite_vert,fragmentShader:Fa.sprite_frag},background:{uniforms:{uvTransform:{value:new X},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fa.background_vert,fragmentShader:Fa.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X}},vertexShader:Fa.backgroundCube_vert,fragmentShader:Fa.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fa.cube_vert,fragmentShader:Fa.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fa.equirect_vert,fragmentShader:Fa.equirect_frag},distance:{uniforms:Ci([Z.common,Z.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fa.distance_vert,fragmentShader:Fa.distance_frag},shadow:{uniforms:Ci([Z.lights,Z.fog,{color:{value:new Dn(0)},opacity:{value:1}}]),vertexShader:Fa.shadow_vert,fragmentShader:Fa.shadow_frag}};Ia.physical={uniforms:Ci([Ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new X},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X},sheen:{value:0},sheenColor:{value:new Dn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X},attenuationDistance:{value:0},attenuationColor:{value:new Dn(0)},specularColor:{value:new Dn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X}}]),vertexShader:Fa.meshphysical_vert,fragmentShader:Fa.meshphysical_frag};var La={r:0,b:0,g:0},Ra=new Gt,za=new X;za.set(-1,0,0,0,1,0,0,0,1);function Ba(e,t,n,r,i,a){let o=new Dn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new qr(new hi(1,1,1),new Ai({name:`BackgroundCubeMaterial`,uniforms:Si(Ia.backgroundCube.uniforms),vertexShader:Ia.backgroundCube.vertexShader,fragmentShader:Ia.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ra.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(za),l.material.toneMapped=kt.getTransfer(i.colorSpace)!==Me,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new qr(new yi(2,2),new Ai({name:`BackgroundMaterial`,uniforms:Si(Ia.background.uniforms),vertexShader:Ia.background.vertexShader,fragmentShader:Ia.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=kt.getTransfer(i.colorSpace)!==Me,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(La,Ei(e)),n.buffers.color.setClear(La.r,La.g,La.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Va(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ha(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ua(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(q(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&q(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&q(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Wa(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Dr,s=new X,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ga=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ui(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),i=new Ai({name:`CubemapFromEquirect`,uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new qr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new pa(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ka=256,qa=3,Ja=20,Ya=256,Xa=16,Za=3,Qa=new Y,$a=new Dn,eo=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pa(1,10,null),this._boxMesh=new qr(new hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qa}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor($a));let h=new pa(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ka,ht(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ka:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=to(e,!1,!1),n=Math.log2(e)-qa;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=to(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=oo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ro(),this._integrationMaterial=io());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Xa);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Za)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Ya*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ao());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function to(e,t,n){return new Ga(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:G,depthBuffer:n})}function no(e,t,n){return new Ai({name:e,uniforms:t,vertexShader:Fa.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function ro(){return no(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ya}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function io(){return no(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xa}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ao(){return no(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ja}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function oo(){return no(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function so(){return no(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function co(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ga(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new eo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new eo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function lo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ue(`WebGLRenderer: `+e+` extension not supported.`),t}}}function uo(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?ur:lr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function fo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function po(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:J(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function mo(e,t,n){let r=new WeakMap,i=new Bt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Ut(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new xt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ho(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var go={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function _o(e,t,n,r,i,a){let o=new Ht(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Cr;u.setAttribute(`position`,new dr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new dr([0,2,0,0,2,0],2));let d=new ji({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new qr(u,d),p=new ua(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Ht(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Ht(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new fi(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},kt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=go[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var vo=new zt,yo=new fi(1,1),bo=new pi(1),xo=new Ut,So=new Wt,Co=new ui,wo=[],To=[],Eo=new Float32Array(16),Do=new Float32Array(9),Oo=new Float32Array(4);function ko(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=wo[i];if(a===void 0&&(a=new Float32Array(i),wo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ao(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function jo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Mo(e,t){let n=To[t];n===void 0&&(n=new Int32Array(t),To[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function No(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ao(n,t))return;e.uniform2fv(this.addr,t),jo(n,t)}}function Fo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ao(n,t))return;e.uniform3fv(this.addr,t),jo(n,t)}}function Io(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ao(n,t))return;e.uniform4fv(this.addr,t),jo(n,t)}}function Lo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ao(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),jo(n,t)}else{if(Ao(n,r))return;Oo.set(r),e.uniformMatrix2fv(this.addr,!1,Oo),jo(n,r)}}function Ro(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ao(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),jo(n,t)}else{if(Ao(n,r))return;Do.set(r),e.uniformMatrix3fv(this.addr,!1,Do),jo(n,r)}}function zo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ao(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),jo(n,t)}else{if(Ao(n,r))return;Eo.set(r),e.uniformMatrix4fv(this.addr,!1,Eo),jo(n,r)}}function Bo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ao(n,t))return;e.uniform2iv(this.addr,t),jo(n,t)}}function Ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ao(n,t))return;e.uniform3iv(this.addr,t),jo(n,t)}}function Uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ao(n,t))return;e.uniform4iv(this.addr,t),jo(n,t)}}function Wo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ao(n,t))return;e.uniform2uiv(this.addr,t),jo(n,t)}}function Ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ao(n,t))return;e.uniform3uiv(this.addr,t),jo(n,t)}}function qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ao(n,t))return;e.uniform4uiv(this.addr,t),jo(n,t)}}function Jo(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Yo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Jo(yo):vo,n.setTexture2D(t||a,i)}function Xo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||So,i)}function Zo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Jo(bo):Co,n.setTextureCube(t||a,i)}function Qo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||xo,i)}function $o(e){switch(e){case 5126:return No;case 35664:return Po;case 35665:return Fo;case 35666:return Io;case 35674:return Lo;case 35675:return Ro;case 35676:return zo;case 5124:case 35670:return Bo;case 35667:case 35671:return Vo;case 35668:case 35672:return Ho;case 35669:case 35673:return Uo;case 5125:return Wo;case 36294:return Go;case 36295:return Ko;case 36296:return qo;case 35678:case 36198:case 36298:case 36306:case 35682:return Yo;case 35679:case 36299:case 36307:return Xo;case 35680:case 36300:case 36308:case 36293:return Zo;case 36289:case 36303:case 36311:case 36292:return Qo}}function es(e,t){e.uniform1fv(this.addr,t)}function ts(e,t){let n=ko(t,this.size,2);e.uniform2fv(this.addr,n)}function ns(e,t){let n=ko(t,this.size,3);e.uniform3fv(this.addr,n)}function rs(e,t){let n=ko(t,this.size,4);e.uniform4fv(this.addr,n)}function is(e,t){let n=ko(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function as(e,t){let n=ko(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function os(e,t){let n=ko(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ss(e,t){e.uniform1iv(this.addr,t)}function cs(e,t){e.uniform2iv(this.addr,t)}function ls(e,t){e.uniform3iv(this.addr,t)}function us(e,t){e.uniform4iv(this.addr,t)}function ds(e,t){e.uniform1uiv(this.addr,t)}function fs(e,t){e.uniform2uiv(this.addr,t)}function ps(e,t){e.uniform3uiv(this.addr,t)}function ms(e,t){e.uniform4uiv(this.addr,t)}function hs(e,t,n){let r=this.cache,i=t.length,a=Mo(n,i);Ao(r,a)||(e.uniform1iv(this.addr,a),jo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Jo(yo):vo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gs(e,t,n){let r=this.cache,i=t.length,a=Mo(n,i);Ao(r,a)||(e.uniform1iv(this.addr,a),jo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||So,a[e])}function _s(e,t,n){let r=this.cache,i=t.length,a=Mo(n,i);Ao(r,a)||(e.uniform1iv(this.addr,a),jo(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Jo(bo):Co;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function vs(e,t,n){let r=this.cache,i=t.length,a=Mo(n,i);Ao(r,a)||(e.uniform1iv(this.addr,a),jo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||xo,a[e])}function ys(e){switch(e){case 5126:return es;case 35664:return ts;case 35665:return ns;case 35666:return rs;case 35674:return is;case 35675:return as;case 35676:return os;case 5124:case 35670:return ss;case 35667:case 35671:return cs;case 35668:case 35672:return ls;case 35669:case 35673:return us;case 5125:return ds;case 36294:return fs;case 36295:return ps;case 36296:return ms;case 35678:case 36198:case 36298:case 36306:case 35682:return hs;case 35679:case 36299:case 36307:return gs;case 35680:case 36300:case 36308:case 36293:return _s;case 36289:case 36303:case 36311:case 36292:return vs}}var bs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$o(t.type)}},xs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ys(t.type)}},Ss=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cs=/(\w+)(\])?(\[|\.)?/g;function ws(e,t){e.seq.push(t),e.map[t.id]=t}function Ts(e,t,n){let r=e.name,i=r.length;for(Cs.lastIndex=0;;){let a=Cs.exec(r),o=Cs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ws(n,l===void 0?new bs(s,e,t):new xs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ss(s),ws(n,e)),n=e}}}var Es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ts(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ds(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Os=37297,ks=0;function As(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var js=new X;function Ms(e){kt._getMatrix(js,kt.workingColorSpace,e);let t=`mat3( ${js.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(e)){case K:return[t,`LinearTransferOETF`];case Me:return[t,`sRGBTransferOETF`];default:return q(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ns(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+As(e.getShaderSource(t),r)}return i}function Ps(e,t){let n=Ms(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Fs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Is(e,t){let n=Fs[t];return n===void 0?(q(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ls=new Y;function Rs(){return kt.getLuminanceCoefficients(Ls),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ls.x.toFixed(4)}, ${Ls.y.toFixed(4)}, ${Ls.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hs).join(`
`)}function Bs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hs(e){return e!==``}function Us(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ws(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gs=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ks(e){return e.replace(Gs,qs)}function qs(e,t){let n=Fa[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Ks(n)}var Js=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ys(e){return e.replace(Js,Xs)}function Xs(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Zs(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Qs={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function $s(e){return Qs[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ec={302:`ENVMAP_MODE_REFRACTION`};function tc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ec[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var nc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function rc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:nc[e.combine]||`ENVMAP_BLENDING_NONE`}function ic(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=$s(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=tc(n),d=rc(n),f=zs(n),p=Bs(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Hs).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Hs).join(`
`),g.length>0&&(g+=`
`)):(h=[Zs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hs).join(`
`),g=[Zs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Fa.tonemapping_pars_fragment,n.toneMapping===0?``:Is(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Fa.colorspace_pars_fragment,Ps(`linearToOutputTexel`,n.outputColorSpace),Rs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hs).join(`
`)),o=Ks(o),o=Us(o,n),o=Ws(o,n),s=Ks(s),s=Us(s,n),s=Ws(s,n),o=Ys(o),s=Ys(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Ds(i,i.VERTEX_SHADER,v),x=Ds(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Ns(i,b,`vertex`),n=Ns(i,x,`fragment`);J(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):q(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Es(i,m),w=Vs(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Os)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ks++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var ac=0,oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sc(e),t.set(e,n)),n}},sc=class{constructor(e){this.id=ac++,this.code=e,this.usedTimes=0}};function cc(e){return e===1030||e===37490||e===36285}function lc(e,t,n,r,i,a){let o=new nn,s=new oc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&q(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Ia[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,L=I&&b.isPMREMTexture===!0,R=!!i.aoMap,ee=!!i.lightMap,z=!!i.bumpMap&&i.wireframe===!1,te=!!i.normalMap,ne=!!i.displacementMap,B=!!i.emissiveMap,V=!!i.metalnessMap,re=!!i.roughnessMap,ie=i.anisotropy>0,ae=i.clearcoat>0,oe=i.diffuseRoughness>0,se=i.dispersion>0,ce=i.retroreflectivity>0,le=i.iridescence>0,ue=i.sheen>0,H=i.transmission>0,de=ie&&!!i.anisotropyMap,fe=ae&&!!i.clearcoatMap,pe=ae&&!!i.clearcoatNormalMap,me=ae&&!!i.clearcoatRoughnessMap,he=oe&&!!i.diffuseRoughnessMap,ge=le&&!!i.iridescenceMap,_e=le&&!!i.iridescenceThicknessMap,ve=ue&&!!i.sheenColorMap,ye=ue&&!!i.sheenRoughnessMap,be=!!i.specularMap,xe=!!i.specularColorMap,Se=!!i.specularIntensityMap,Ce=H&&!!i.transmissionMap,we=H&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,U=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=e.toneMapping);let W=L?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ae={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:L,envMapMaxLod:L?W.length-1:null,envMapSize:L?W[0].width:null,aoMap:R,lightMap:ee,bumpMap:z,normalMap:te,displacementMap:ne,emissiveMap:B,normalMapObjectSpace:te&&i.normalMapType===1,normalMapTangentSpace:te&&i.normalMapType===0,packedNormalMap:te&&i.normalMapType===0&&cc(i.normalMap.format),metalnessMap:V,roughnessMap:re,anisotropy:ie,anisotropyMap:de,clearcoat:ae,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,diffuseRoughness:oe,diffuseRoughnessMap:he,dispersion:se,retroreflection:ce,iridescence:le,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:ue,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:H,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:U,alphaHash:De,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:R&&p(i.aoMap.channel),lightMapUv:ee&&p(i.lightMap.channel),bumpMapUv:z&&p(i.bumpMap.channel),normalMapUv:te&&p(i.normalMap.channel),displacementMapUv:ne&&p(i.displacementMap.channel),emissiveMapUv:B&&p(i.emissiveMap.channel),metalnessMapUv:V&&p(i.metalnessMap.channel),roughnessMapUv:re&&p(i.roughnessMap.channel),anisotropyMapUv:de&&p(i.anisotropyMap.channel),clearcoatMapUv:fe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(i.sheenRoughnessMap.channel),specularMapUv:be&&p(i.specularMap.channel),specularColorMapUv:xe&&p(i.specularColorMap.channel),specularIntensityMapUv:Se&&p(i.specularIntensityMap.channel),transmissionMapUv:Ce&&p(i.transmissionMap.channel),thicknessMapUv:we&&p(i.thicknessMap.channel),alphaMapUv:Ee&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(te||ie),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Ee),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&te===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&kt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:B&&i.emissiveMap.isVideoTexture===!0&&kt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ia[t];n=Di.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new ic(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function uc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function dc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||dc),r.length>1&&r.sort(t||fc),i.length>1&&i.sort(t||fc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function mc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new pc,e.set(t,[i])):n>=r.length?(i=new pc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function hc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Y,color:new Dn};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new Dn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new Dn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new Dn,groundColor:new Dn};break;case`RectAreaLight`:n={color:new Dn,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function gc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var _c=0;function vc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function yc(e){let t=new hc,n=gc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new Gt,o=new Gt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(vc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=_c++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function bc(e){let t=new yc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function xc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new bc(e),t.set(n,[a])):r>=i.length?(a=new bc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Sc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wc=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Tc=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ec=new Gt,Dc=new Y,Oc=new Y;function kc(e,t,n){let i=new ei,a=new xt,s=new xt,c=new Bt,l=new Pi,u=new Fi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Sc,fragmentShader:Cc}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Cr;y.setAttribute(`position`,new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new qr(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(q(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){q(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){q(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Ht(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new fi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Ga(a.x),p.map.depthTexture=new pi(a.x,m)):(p.map=new Ht(a.x,a.y),p.map.depthTexture=new fi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Dc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Dc),Oc.copy(e.position),Oc.add(wc[t]),e.up.copy(Tc[t]),e.lookAt(Oc),e.updateMatrixWorld(),n.makeTranslation(-Dc.x,-Dc.y,-Dc.z),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Ec,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ht(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ac(e,t){function n(){let t=!1,n=new Bt,r=null,i=new Bt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?V(e.DEPTH_TEST):re(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ge[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?V(e.STENCIL_TEST):re(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Dn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),z=new Bt().fromArray(R),te=new Bt().fromArray(ee);function ne(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let B={};B[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),V(e.DEPTH_TEST),o.setFunc(3),H(!1),de(1),V(e.CULL_FACE),le(0);function V(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function re(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(re(e.BLEND),g=!1);else if(g===!1&&(V(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:J(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:J(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:J(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:J(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(se[n],se[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ue(t,n){t.side===2?re(e.CULL_FACE):V(e.CULL_FACE);let r=t.side===1;n&&(r=!r),H(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),pe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?V(e.SAMPLE_ALPHA_TO_COVERAGE):re(e.SAMPLE_ALPHA_TO_COVERAGE)}function H(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function de(t){t===0?re(e.CULL_FACE):(V(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function fe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function pe(t,n,r){t?(V(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):re(e.POLYGON_OFFSET_FILL)}function me(t){t?V(e.SCISSOR_TEST):re(e.SCISSOR_TEST)}function he(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ge(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||B[t]),i.type=t,i.texture=n)}function _e(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ve(){try{e.compressedTexImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function ye(){try{e.compressedTexImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function be(){try{e.texSubImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function xe(){try{e.texSubImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Se(){try{e.compressedTexSubImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function we(){try{e.texStorage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Te(){try{e.texStorage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Ee(){try{e.texImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function U(){try{e.texImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function De(t){return d[t]===void 0?e.getParameter(t):d[t]}function Oe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ke(t){z.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),z.copy(t))}function W(t){te.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),te.copy(t))}function Ae(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function je(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function G(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Dn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,z.set(0,0,e.canvas.width,e.canvas.height),te.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:V,disable:re,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:le,setMaterial:ue,setFlipSided:H,setCullFace:de,setLineWidth:fe,setPolygonOffset:pe,setScissorTest:me,activeTexture:he,bindTexture:ge,unbindTexture:_e,compressedTexImage2D:ve,compressedTexImage3D:ye,texImage2D:Ee,texImage3D:U,pixelStorei:Oe,getParameter:De,updateUBOMapping:Ae,uniformBlockBinding:je,texStorage2D:we,texStorage3D:Te,texSubImage2D:be,texSubImage3D:xe,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ce,scissor:ke,viewport:W,reset:G}}function jc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new xt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Re(`canvas`)}function O(e,t,n){let r=1,i=G(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),q(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&q(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function j(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function M(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];q(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||q(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?K:kt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function N(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,q(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function P(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function F(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function I(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function L(e){ee(e.target)}function R(e){z(e.target)}function ee(e){e.removeEventListener(`dispose`,L),I(e),ne(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function z(e){e.removeEventListener(`dispose`,R),I(e),V(e)}function te(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?z(t):ee(t))}C.clear(),b.clear()}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&B(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function B(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function V(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ee(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=p.maxTextures&&q(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),re+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(e,t){let n=f.get(e);if(e.isVideoTexture&&Ae(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)q(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)q(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ye(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function H(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ye(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?be(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let fe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},pe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},me={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function he(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&q(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,fe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,fe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,fe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,pe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,pe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,me[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ge(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,L),F(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ce(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&B(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=_e(r.start,t.width,4),c=_e(n.start,t.width,4);r.start<=o+1&&s===c&&_e(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ye(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ge(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=kt.getPrimaries(kt.workingColorSpace),n=t.colorSpace===``?null:kt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=je(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=M(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);he(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=P(t,e);if(t.isDepthTexture)u=N(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ve(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ja(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ja(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=G(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=G(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n){if(t.image.length!==6)return;let r=ge(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=kt.getPrimaries(kt.workingColorSpace),o=t.colorSpace===``?null:kt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=je(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=M(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=P(t,h);he(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=N(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=G(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=M(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),W(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,ke(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Se(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=N(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;W(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,ke(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,ke(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=M(i.internalFormat,a,o,i.normalized,i.colorSpace);W(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,ke(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,ke(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ce(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?de(t.depthTexture,0):le(t.depthTexture,0);let o=i.__webglTexture,s=ke(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)W(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)W(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ce(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?Ce(t.__webglFramebuffer[0],e,0):Ce(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Se(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Se(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){let r=f.get(e);t!==void 0&&xe(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&we(e)}function Ee(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,R),F(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&W(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=M(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=ke(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Se(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),he(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)xe(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),he(o,r),xe(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),he(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else xe(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&we(e)}function U(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let De=[];function Oe(e){if(e.samples>0){if(W(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(De.length=0,De.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&De.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,De))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function ke(e){return Math.min(p.maxSamples,e.samples)}function W(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Ae(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function je(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(kt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&q(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):J(`WebGLTextures: Unsupported texture color space:`,n)),t}function G(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=H,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=W,this.dispose=te}function Mc(e,t){function n(n,r=``){let i,a=kt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Nc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pc=`
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

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ai({vertexShader:Nc,fragmentShader:Pc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qr(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends Ke{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Fc,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new xt,k=null,A=null,j=new la;j.viewport=new Bt;let M=new la;M.viewport=new Bt;let N=[j,M],P=new ma,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Sn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Sn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Sn,C[e]=t),t.getHandSpace()};function L(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function R(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,R),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,V.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&q(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&q(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,R),r.addEventListener(`inputsourceschange`,ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ht(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new fi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ht(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),V.setContext(r),V.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function z(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;z(P,i);for(let e=0;e<a.length;e++)z(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),te(e,P,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Xe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let ne=null;function B(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new la,o.layers.enable(n),o.viewport=new Bt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new mi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let V=new Na;V.setAnimationLoop(B),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},Lc=new Gt,Rc=new X;Rc.set(-1,0,0,0,1,0,0,0,1);function zc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ei(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Lc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Rc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Bc(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?q(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):q(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Vc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hc=null;function Uc(){return Hc===null&&(Hc=new Xr(Vc,16,16,k,g),Hc.name=`DFG_LUT`,Hc.minFilter=o,Hc.magFilter=o,Hc.wrapS=t,Hc.wrapT=t,Hc.generateMipmaps=!1,Hc.needsUpdate=!0),Hc}var Wc=class{constructor(e={}){let{canvas:t=ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,M=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,R=null,ee=null,z=null,te=null;this._outputColorSpace=je;let ne=0,B=0,V=null,re=-1,ie=null,ae=new Bt,oe=new Bt,se=null,ce=new Dn(0),le=0,ue=t.width,H=t.height,de=1,fe=null,pe=null,me=new Bt(0,0,ue,H),he=new Bt(0,0,ue,H),ge=!1,_e=new ei,ve=new ni,ye=!1,be=!1,xe=new Gt,Se=new Y,Ce=new Bt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ee(){return V===null?de:1}let U=n;function De(e,n){return t.getContext(e,n)}let Oe,ke,W,Ae,G,K,Me,Ne,Pe,Ie,Le,Re,Be,He,Ue,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,tt,!1),t.addEventListener(`webglcontextrestored`,nt,!1),t.addEventListener(`webglcontextcreationerror`,rt,!1),U===null){let t=`webgl2`;if(U=De(t,e),U===null)throw De(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}$e()}catch(e){throw t.removeEventListener(`webglcontextlost`,tt,!1),t.removeEventListener(`webglcontextrestored`,nt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),J(`WebGLRenderer: `+e.message),e}function $e(){Oe=new lo(U),Oe.init(),Xe=new Mc(U,Oe),ke=new Ua(U,Oe,e,Xe),W=new Ac(U,Oe),ke.reversedDepthBuffer&&h&&W.buffers.depth.setReversed(!0),ee=U.createFramebuffer(),z=U.createFramebuffer(),te=U.createFramebuffer(),Ae=new po(U),G=new uc,K=new jc(U,Oe,W,G,ke,Xe,Ae),Me=new co(I),Ne=new Pa(U),Ze=new Va(U,Ne),Pe=new uo(U,Ne,Ae,Ze),Ie=new ho(U,Pe,Ne,Ze,Ae),qe=new mo(U,ke,K),Ue=new Wa(G),Le=new lc(I,Me,Oe,ke,Ze,Ue),Re=new zc(I,G),Be=new mc,He=new xc(Oe),Ke=new Ba(I,Me,W,Ie,x,s),Ge=new kc(I,Ie,ke),Qe=new Bc(U,Ae,ke,W),Je=new Ha(U,Oe,Ae),Ye=new fo(U,Oe,Ae),Ae.programs=Le.programs,I.capabilities=ke,I.extensions=Oe,I.properties=G,I.renderLists=Be,I.shadowMap=Ge,I.state=W,I.info=Ae}S!==1009&&(F=new _o(S,t.width,t.height,o,r,i));let et=new Ic(I,U);this.xr=et,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(ue,H,!1))},this.getSize=function(e){return e.set(ue,H)},this.setSize=function(e,n,r=!0){et.isPresenting?q(`WebGLRenderer: Can't change size while VR device is presenting.`):(ue=e,H=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ue*de,H*de).floor()},this.setDrawingBufferSize=function(e,n,r){ue=e,H=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)J(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){q(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(me)},this.setViewport=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),W.viewport(ae.copy(me).multiplyScalar(Ee()).round())},this.getScissor=function(e){return e.copy(he)},this.setScissor=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),W.scissor(oe.copy(he).multiplyScalar(Ee()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(e){W.setScissorTest(ge=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){pe=e},this.getClearColor=function(e){return e.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(V!==null){let t=V.texture.format;e=C.has(t)}if(e){let e=V.texture.type,t=w.has(e),n=Ke.getClearColor(),r=Ke.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,U.clearBufferuiv(U.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,U.clearBufferiv(U.COLOR,0,E))}else r|=U.COLOR_BUFFER_BIT}t&&(r|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&U.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),R=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,tt,!1),t.removeEventListener(`webglcontextrestored`,nt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),Ke.dispose(),Be.dispose(),He.dispose(),K.dispose(),G.dispose(),Me.dispose(),Ie.dispose(),Pe.dispose(),Ze.dispose(),Qe.dispose(),Le.dispose(),et.dispose(),et.removeEventListener(`sessionstart`,ut),et.removeEventListener(`sessionend`,dt),ft.stop()};function tt(e){e.preventDefault(),Ve(`WebGLRenderer: Context Lost.`),L=!0}function nt(){Ve(`WebGLRenderer: Context Restored.`),L=!1;let e=Ae.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;$e(),Ae.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function rt(e){J(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function it(e){let t=e.target;t.removeEventListener(`dispose`,it),at(t)}function at(e){ot(e),G.remove(e)}function ot(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){Le.releaseProgram(e)}),e.isShaderMaterial&&Le.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=we);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ct(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ze.setup(i,r,s,n,c);let h,g=Je;if(c!==null&&(h=Ne.get(c),g=Ye,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*Ee()),g.setMode(U.LINES)):g.setMode(U.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*Ee()),i.isLineSegments?g.setMode(U.LINES):i.isLineLoop?g.setMode(U.LINE_LOOP):g.setMode(U.LINE_STRIP)}else i.isPoints?g.setMode(U.POINTS):i.isSprite&&g.setMode(U.TRIANGLES);if(i.isBatchedMesh){if(Oe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(U,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function st(e,t,n,r){R!==null&&e.isNodeMaterial&&R.setObject(r,e),ye===!0&&Ue.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,yt(e,t,r),e.side=0,e.needsUpdate=!0,yt(e,t,r),e.side=2):yt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),R!==null&&R.renderStart(e,t,n),M=He.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),R!==null&&R.updateLights(M.state.lightsArray),be=this.localClippingEnabled,ye=Ue.init(this.clippingPlanes,be),ye===!0&&Ue.setGlobalState(this.clippingPlanes,t),R!==null&&Ge.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];st(o,n,t,e),r.add(o)}else st(i,n,t,e),r.add(i)}}),M=P.pop(),R!==null&&R.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=G.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Oe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ct=null;function lt(e){ct&&ct(e)}function ut(){ft.stop()}function dt(){ft.start()}let ft=new Na;ft.setAnimationLoop(lt),typeof self<`u`&&ft.setContext(self),this.setAnimationLoop=function(e){ct=e,et.setAnimationLoop(e),e===null?ft.stop():ft.start()},et.addEventListener(`sessionstart`,ut),et.addEventListener(`sessionend`,dt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){J(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;R!==null&&R.renderStart(e,t);let n=et.enabled===!0&&et.isPresenting===!0,r=F!==null&&(V===null||n)&&F.begin(I,V);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(t),t=et.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,V),M=He.get(e,P.length),M.init(t),M.state.textureUnits=K.getTextureUnits(),P.push(M),xe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ve.setFromArrayCamera(t):_e.setFromProjectionMatrix(xe,Fe,t.reversedDepth),be=this.localClippingEnabled,ye=Ue.init(this.clippingPlanes,be),k=Be.get(e,N.length),k.init(),N.push(k),this.info.render.frame++,et.enabled===!0&&et.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&pt(e,t,-1/0,I.sortObjects)}pt(e,t,0,I.sortObjects),k.finish(),R!==null&&R.updateLights(M.state.lightsArray),I.sortObjects===!0&&k.sort(fe,pe),Te=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Te&&Ke.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),ye===!0&&Ue.beginShadows();let i=M.state.shadowsArray;if(Ge.render(i,e,t),ye===!0&&Ue.endShadows(),(r&&F.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ht(n,r,e,a)}Te&&Ke.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];mt(k,e,n,n.viewport)}}else r.length>0&&ht(n,r,e,t),Te&&Ke.render(e),mt(k,e,t)}V!==null&&B===0&&(K.updateMultisampleRenderTarget(V),K.updateRenderTargetMipmap(V)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),Ze.resetDefaultState(),re=-1,ie=null,P.pop(),P.length>0?(M=P[P.length-1],K.setTextureUnits(M.state.textureUnits),ye===!0&&Ue.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,R!==null&&R.renderEnd()};function pt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ve:_e;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(xe);let i=Ie.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Ce.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ve:_e;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ie.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ce.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ce.copy(e.boundingSphere.center)),Ce.applyMatrix4(e.matrixWorld).applyMatrix4(xe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Ce.z,s,t)}}else a.visible&&k.push(e,i,a,n,Ce.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)pt(i[e],t,n,r)}function mt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),ye===!0&&Ue.setGlobalState(I.clippingPlanes,n),r&&W.viewport(ae.copy(r)),i.length>0&&gt(i,t,n),a.length>0&&gt(a,t,n),o.length>0&&gt(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function ht(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Oe.has(`EXT_color_buffer_half_float`)||Oe.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Ht(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,ke.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),u=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(ce),le=I.getClearAlpha(),le<1&&I.setClearColor(16777215,.5),I.clear(),Te&&Ke.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),ye===!0&&Ue.setGlobalState(I.clippingPlanes,r),gt(e,n,r),K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a),Oe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,_t(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a))}I.setRenderTarget(s,u,d),I.setClearColor(ce,le),p!==void 0&&(r.viewport=p),I.toneMapping=f}function gt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&_t(o,t,n,s,l,c)}}function _t(e,t,n,r,i,a){R!==null&&i.isNodeMaterial&&R.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function vt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function yt(e,t,n){t.isScene!==!0&&(t=we);let r=G.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=Le.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=Le.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,it),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return St(e,s),d}else s.uniforms=Le.getUniforms(e),R!==null&&e.isNodeMaterial&&R.build(e,n,s),e.onBeforeCompile(s,I),d=Le.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ue.uniform),St(e,s),r.needsLights=X(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=vt(M.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function bt(e,t,n,r,i){let a=G.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=yt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function xt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Es.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t,n,r,i){t.isScene!==!0&&(t=we),K.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=V===null?I.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:kt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=M.state.lights;if(ye===!0&&(be===!0||e!==ie)){let t=e===ie&&r.id===re;Ue.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ue.numPlanes||v.numIntersection!==Ue.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===vt(M.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?bt(r,t,i,s,h):yt(r,t,i),R&&r.isNodeMaterial&&R.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(W.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==re&&(re=r.id,w=!0),C||ie!==e){W.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(U,`projectionMatrix`,e.projectionMatrix),E.setValue(U,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(U,Se.setFromMatrixPosition(e.matrixWorld)),ke.logarithmicDepthBuffer&&E.setValue(U,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(U,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(U,`sunShadowMap`,y.state.sunShadowMap,K),y.state.directionalShadowMap.length>0&&E.setValue(U,`directionalShadowMap`,y.state.directionalShadowMap,K),y.state.spotShadowMap.length>0&&E.setValue(U,`spotShadowMap`,y.state.spotShadowMap,K),y.state.pointShadowMap.length>0&&E.setValue(U,`pointShadowMap`,y.state.pointShadowMap,K)),i.isSkinnedMesh){E.setOptional(U,i,`bindMatrix`),E.setOptional(U,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(U,`boneTexture`,e.boneTexture,K))}i.isBatchedMesh&&(E.setOptional(U,i,`batchingTexture`),E.setValue(U,`batchingTexture`,i._matricesTexture,K),E.setOptional(U,i,`batchingIdTexture`),E.setValue(U,`batchingIdTexture`,i._indirectTexture,K),E.setOptional(U,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(U,`batchingColorTexture`,i._colorsTexture,K));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(U,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Uc()),w){if(E.setValue(U,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&wt(O,T),a&&r.fog===!0&&Re.refreshFogUniforms(O,a),Re.refreshMaterialUniforms(O,r,de,H,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of M.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Es.upload(U,xt(v),O,K)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Es.upload(U,xt(v),O,K),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(U,`center`,i.center),E.setValue(U,`modelViewMatrix`,i.modelViewMatrix),E.setValue(U,`normalMatrix`,i.normalMatrix),E.setValue(U,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Qe.update(n,S),Qe.bind(n,S)}}return S}function wt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function X(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){V=e,ne=t,B=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(U.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest,W.viewport(ae),W.scissor(oe),W.setScissorTest(se),re=-1;return}if(o.__webglFramebuffer===void 0)K.setupRenderTarget(e);else if(o.__hasExternalTextures)K.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);K.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&K.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest}else ae.copy(me).multiplyScalar(de).floor(),oe.copy(he).multiplyScalar(de).floor(),se=ge;if(n!==0&&(r=ee),W.bindFramebuffer(U.FRAMEBUFFER,r)&&W.drawBuffers(e,r),W.viewport(ae),W.scissor(oe),W.setScissorTest(se),i){let r=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,t.__webglTexture,n)}re=-1};function Tt(e){let t=G.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ke.textureFormatReadable(e.format),t.__typeReadable=ke.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){W.bindFramebuffer(U.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let u=Tt(o);if(u.__formatReadable===!1){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&U.readPixels(t,n,r,i,Xe.convert(c),Xe.convert(l),a)}finally{let e=V===null?null:G.get(V).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){W.bindFramebuffer(U.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let d=Tt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.bufferData(U.PIXEL_PACK_BUFFER,a.byteLength,U.STREAM_READ),U.readPixels(t,n,r,i,Xe.convert(l),Xe.convert(u),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let p=V===null?null:G.get(V).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,p);let m=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await We(U,m,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,a),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(f),U.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;K.setTexture2D(e,0),U.copyTexSubImage2D(U.TEXTURE_2D,n,0,0,o,s,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Xe.convert(t.format),_=Xe.convert(t.type),v;t.isData3DTexture?(K.setTexture3D(t,0),v=U.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(K.setTexture2DArray(t,0),v=U.TEXTURE_2D_ARRAY):(K.setTexture2D(t,0),v=U.TEXTURE_2D),W.activeTexture(U.TEXTURE0),W.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,t.flipY),W.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),W.pixelStorei(U.UNPACK_ALIGNMENT,t.unpackAlignment);let y=W.getParameter(U.UNPACK_ROW_LENGTH),b=W.getParameter(U.UNPACK_IMAGE_HEIGHT),x=W.getParameter(U.UNPACK_SKIP_PIXELS),S=W.getParameter(U.UNPACK_SKIP_ROWS),C=W.getParameter(U.UNPACK_SKIP_IMAGES);W.pixelStorei(U.UNPACK_ROW_LENGTH,h.width),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,h.height),W.pixelStorei(U.UNPACK_SKIP_PIXELS,l),W.pixelStorei(U.UNPACK_SKIP_ROWS,u),W.pixelStorei(U.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);W.bindFramebuffer(U.READ_FRAMEBUFFER,h.__webglFramebuffer),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),U.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,U.DEPTH_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);W.bindFramebuffer(U.READ_FRAMEBUFFER,z),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,n.__webglTexture,i),T?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,r.__webglTexture,a),i===0?T?U.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):U.copyTexSubImage2D(v,a,f,p,l,u,o,s):U.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,U.COLOR_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?U.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h);W.pixelStorei(U.UNPACK_ROW_LENGTH,y),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,b),W.pixelStorei(U.UNPACK_SKIP_PIXELS,x),W.pixelStorei(U.UNPACK_SKIP_ROWS,S),W.pixelStorei(U.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&U.generateMipmap(v),W.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&K.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?K.setTextureCube(e,0):e.isData3DTexture?K.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?K.setTexture2DArray(e,0):K.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){ne=0,B=0,V=null,W.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Fe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}};function Gc(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Kc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var qc={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},Jc={duration:.5,overwrite:!1,delay:0},Yc,Xc,Zc,Qc=1e8,$c=1/Qc,el=Math.PI*2,tl=el/4,nl=0,rl=Math.sqrt,il=Math.cos,al=Math.sin,ol=function(e){return typeof e==`string`},sl=function(e){return typeof e==`function`},cl=function(e){return typeof e==`number`},ll=function(e){return e===void 0},ul=function(e){return typeof e==`object`},dl=function(e){return e!==!1},fl=function(){return typeof window<`u`},pl=function(e){return sl(e)||ol(e)},ml=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},hl=Array.isArray,gl=/random\([^)]+\)/g,_l=/,\s*/g,vl=/(?:-?\.?\d|\.)+/gi,yl=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sl=/[+-]=-?[.\d]+/,Cl=/[^,'"\[\]\s]+/gi,wl=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tl,El,Dl,Ol,kl={},Al={},jl,Ml=function(e){return(Al=uu(e,kl))&&Af},Nl=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Pl=function(e,t){return!t&&console.warn(e)},Fl=function(e,t){return e&&(kl[e]=t)&&Al&&(Al[e]=t)||kl},Il=function(){return 0},Ll={suppressEvents:!0,isStart:!0,kill:!1},Rl={suppressEvents:!0,kill:!1},zl={suppressEvents:!0},Bl={},Vl=[],Hl={},Ul,Wl={},Gl={},Kl=30,ql=[],Jl=``,Yl=function(e){var t=e[0],n,r;if(ul(t)||sl(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ql.length;r--&&!ql[r].targetTest(t););n=ql[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zd(e[r],n)))||e.splice(r,1);return e},Xl=function(e){return e._gsap||Yl(qu(e))[0]._gsap},Zl=function(e,t,n){return(n=e[t])&&sl(n)?e[t]():ll(n)&&e.getAttribute&&e.getAttribute(t)||n},Ql=function(e,t){return(e=e.split(`,`)).forEach(t)||e},$l=function(e){return Math.round(e*1e5)/1e5||0},eu=function(e){return Math.round(e*1e7)/1e7||0},tu=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},nu=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ru=function(){var e=Vl.length,t=Vl.slice(0),n,r;for(Hl={},Vl.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},iu=function(e){return!!(e._initted||e._startAt||e.add)},au=function(e,t,n,r){Vl.length&&!Xc&&ru(),e.render(t,n,r||!!(Xc&&t<0&&iu(e))),Vl.length&&!Xc&&ru()},ou=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Cl).length<2?t:ol(e)?e.trim():e},su=function(e){return e},cu=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lu=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},uu=function(e,t){for(var n in t)e[n]=t[n];return e},du=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=ul(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},fu=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},pu=function(e){var t=e.parent||Tl,n=e.keyframes?lu(hl(e.keyframes)):cu;if(dl(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},mu=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},hu=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},gu=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},_u=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vu=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yu=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bu=function(e,t,n,r){return e._startAt&&(Xc?e._startAt.revert(Rl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},xu=function e(t){return!t||t._ts&&e(t.parent)},Su=function(e){return e._repeat?Cu(e._tTime,e=e.duration()+e._rDelay)*e:0},Cu=function(e,t){var n=Math.floor(e=eu(e/t));return e&&n===e?n-1:n},wu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Tu=function(e){return e._end=eu(e._start+(e._tDur/Math.abs(e._ts||e._rts||$c)||0))},Eu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=eu(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Tu(e),n._dirty||vu(n,e)),e},Du=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wu(e.rawTime(),t),(!t._dur||Vu(0,t.totalDuration(),n)-t._tTime>$c)&&t.render(n,!0)),vu(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$c}},Ou=function(e,t,n,r){return t.parent&&_u(t),t._start=eu((cl(n)?n:!n&&Mu(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Tl?Ru(e,n,t):e._time)+t._delay),t._end=eu(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hu(e,t,`_first`,`_last`,e._sort?`_start`:0),Mu(t)||(e._recent=t),r||Du(e,t),e._ts<0&&Eu(e,e._tTime),e},ku=function(e,t){return(kl.ScrollTrigger||Nl(`scrollTrigger`,t))&&kl.ScrollTrigger.create(t,e)},Au=function(e,t,n,r,i){if(Jd(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!Xc&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ul!==Td.frame)return Vl.push(e),e._lazy=[i,r],1},ju=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Mu=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Nu=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&ju(e)&&(e._initted||!Mu(e))||(e._ts<0||e._dp._ts<0)&&!Mu(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Vu(0,e._tDur,t),l=Cu(s,o),e._yoyo&&l&1&&(a=1-a),l!==Cu(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||Xc||r||e._zTime===$c||!t&&e._zTime){if(!e._initted&&Au(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?$c:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&bu(e,t,n,!0),e._onUpdate&&!n&&ud(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&ud(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&_u(e,1),!n&&!Xc&&(ud(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Pu=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Fu=function(e,t,n,r){var i=e._repeat,a=eu(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:eu(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Eu(e,e._tTime=e._tDur*o),e.parent&&Tu(e),n||vu(e.parent,e),e},Iu=function(e){return e instanceof Vd?vu(e):Fu(e,e._dur)},Lu={_start:0,endTime:Il,totalDuration:Il},Ru=function e(t,n,r){var i=t.labels,a=t._recent||Lu,o=t.duration()>=Qc?a.endTime(!1):t._dur,s,c,l;return ol(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(hl(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},zu=function(e,t,n){var r=cl(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=dl(s.vars.inherit)&&s.parent;a.immediateRender=dl(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new tf(t[0],a,t[i+1])},Bu=function(e,t){return e||e===0?t(e):t},Vu=function(e,t,n){return n<e?e:n>t?t:n},Hu=function(e,t){return!ol(e)||!(t=wl.exec(e))?``:t[1]},Uu=function(e,t,n){return Bu(n,function(n){return Vu(e,t,n)})},Wu=[].slice,Gu=function(e,t){return e&&ul(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&ul(e[0]))&&!e.nodeType&&e!==El},Ku=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return ol(e)&&!t||Gu(e,1)?(r=n).push.apply(r,qu(e)):n.push(e)})||n},qu=function(e,t,n){return Zc&&!t&&Zc.selector?Zc.selector(e):ol(e)&&!n&&(Dl||!Ed())?Wu.call((t||Ol).querySelectorAll(e),0):hl(e)?Ku(e,n):Gu(e)?Wu.call(e,0):e?[e]:[]},Ju=function(e){return e=qu(e)[0]||Pl(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return qu(t,n.querySelectorAll?n:n===e?Pl(`Invalid scope`)||Ol.createElement(`div`):e)}},Yu=function(e){return e.sort(function(){return .5-Math.random()})},Xu=function(e){if(sl(e))return e;var t=ul(e)?e:{each:e},n=Pd(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return ol(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,Qc])[1],!S){for(b=-Qc;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===Qc?0:s?f*u/S-.5:r/S|0,b=0,x=Qc,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):rl(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Yu(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=Hu(t.amount||t.each)||0,n=n&&f<0?Nd(n):n}return f=(p[e]-p.min)/p.max||0,eu(p.b+(n?n(f):f)*p.v)+p.u}},Zu=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=eu(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(cl(n)?0:Hu(n))}},Qu=function(e,t){var n=hl(e),r,i;return!n&&ul(e)&&(r=n=e.radius||Qc,e.values?(e=qu(e.values),(i=!cl(e[0]))&&(r*=r)):e=Zu(e.increment)),Bu(t,n?sl(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=Qc,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||cl(t)?s:s+Hu(t)}:Zu(e))},$u=function(e,t,n,r){return Bu(hl(e)?!t:n===!0?!!(n=0):!r,function(){return hl(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},ed=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},td=function(e,t){return function(n){return e(parseFloat(n))+(t||Hu(n))}},nd=function(e,t,n){return sd(e,t,0,1,n)},rd=function(e,t,n){return Bu(n,function(n){return e[~~t(n)]})},id=function e(t,n,r){var i=n-t;return hl(t)?rd(t,e(0,t.length),n):Bu(r,function(e){return(i+(e-t)%i)%i+t})},ad=function e(t,n,r){var i=n-t,a=i*2;return hl(t)?rd(t,e(0,t.length-1),n):Bu(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},od=function(e){return e.replace(gl,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(_l);return $u(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},sd=function(e,t,n,r,i){var a=t-e,o=r-n;return Bu(i,function(t){return n+((t-e)/a*o||0)})},cd=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=ol(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(hl(t)&&!hl(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=uu(hl(t)?[]:{},t));if(!u){for(c in n)Ud.call(s,t,c,`get`,n[c]);a=function(e){return df(e,s)||(o?t.p:t)}}}return Bu(r,a)},ld=function(e,t,n){var r=e.labels,i=Qc,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},ud=function(e,t,n){var r=e.vars,i=r[t],a=Zc,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&Vl.length&&ru(),o&&(Zc=o),l=s?i.apply(c,s):i.call(c),Zc=a,l},dd=function(e){return _u(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Xc),e.progress()<1&&ud(e,`onInterrupt`),e},fd,pd=[],md=function(e){if(e){if(e=!e.name&&e.default||e,fl()||e.headless){var t=e.name,n=sl(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Il,render:df,add:Ud,kill:pf,modifier:ff,rawVars:0},a={targetTest:0,get:0,getSetter:sf,aliases:{},register:0};if(Ed(),e!==r){if(Wl[t])return;cu(r,cu(fu(e,i),a)),uu(r.prototype,uu(i,fu(e,a))),Wl[r.prop=t]=r,e.targetTest&&(ql.push(r),Bl[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Fl(t,r),e.register&&e.register(Af,r,gf)}else pd.push(e)}},hd=255,gd={aqua:[0,hd,hd],lime:[0,hd,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,hd],navy:[0,0,128],white:[hd,hd,hd],olive:[128,128,0],yellow:[hd,hd,0],orange:[hd,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[hd,0,0],pink:[hd,192,203],cyan:[0,hd,hd],transparent:[hd,hd,hd,0]},_d=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*hd+.5|0},vd=function(e,t,n){var r=e?cl(e)?[e>>16,e>>8&hd,e&hd]:0:gd.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),gd[e])r=gd[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&hd,r&hd,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&hd,e&hd]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(vl),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=_d(s+1/3,i,a),r[1]=_d(s,i,a),r[2]=_d(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(yl),n&&r.length<4&&(r[3]=1),r}else r=e.match(vl)||gd.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/hd,a=r[1]/hd,o=r[2]/hd,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},yd=function(e){var t=[],n=[],r=-1;return e.split(xd).forEach(function(e){var i=e.match(bl)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},bd=function(e,t,n){var r=``,i=(e+r).match(xd),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=vd(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=yd(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(xd,`1`).split(bl),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(xd),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},xd=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in gd)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Sd=/hsl[a]?\(/,Cd=function(e){var t=e.join(` `),n;if(xd.lastIndex=0,xd.test(t))return n=Sd.test(t),e[1]=bd(e[1],n),e[0]=bd(e[0],n,yd(e[1])),!0},wd,Td=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?0:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){jl&&(!Dl&&fl()&&(El=Dl=window,Ol=El.document||{},kl.gsap=Af,(El.gsapVersions||(El.gsapVersions=[])).push(Af.version),Ml(Al||El.GreenSockGlobals||!El.gsap&&El||{}),pd.forEach(md)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},wd=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),wd=0,l=Il},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Ed(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Ed=function(){return!wd&&Td.wake()},Dd={},Od=/^[\d.\-M][\d.\-,\s]/,kd=/["']/g,Ad=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(kd,``).trim():+c,r=s.substr(o+1).trim();return t},jd=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Md=function(e){var t=(e+``).split(`(`),n=Dd[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Ad(t[1])]:jd(e).split(`,`).map(ou)):Dd._CE&&Od.test(e)?Dd._CE(``,e):n},Nd=function(e){return function(t){return 1-e(1-t)}},Pd=function(e,t){return e&&(sl(e)?e:Dd[e]||Md(e))||t},Fd=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Ql(e,function(e){for(var t in Dd[e]=kl[e]=i,Dd[a=e.toLowerCase()]=n,i)Dd[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Dd[e+`.`+t]=i[t]}),i},Id=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ld=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/el*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*al((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Id(s);return a=el/a,c.config=function(n,r){return e(t,n,r)},c},Rd=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Id(r);return i.config=function(n){return e(t,n)},i};Ql(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Fd(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Dd.Linear.easeNone=Dd.none=Dd.Linear.easeIn,Fd(`Elastic`,Ld(`in`),Ld(`out`),Ld()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Fd(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Fd(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Fd(`Circ`,function(e){return-(rl(1-e*e)-1)}),Fd(`Sine`,function(e){return e===1?1:-il(e*tl)+1}),Fd(`Back`,Rd(`in`),Rd(`out`),Rd()),Dd.SteppedEase=Dd.steps=kl.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-$c;return function(e){return((r*Vu(0,a,e)|0)+i)*n}}},Jc.ease=Dd[`quad.out`],Ql(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Jl+=e+`,`+e+`Params,`});var zd=function(e,t){this.id=nl++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Zl,this.set=t?t.getSetter:sf},Bd=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Fu(this,+e.duration,1,1),this.data=e.data,Zc&&(this._ctx=Zc,Zc.data.push(this)),wd||Td.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Fu(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Ed(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Eu(this,e),!n._dp||n.parent||Du(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Ou(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===$c||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),au(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Su(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Su(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Cu(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-$c?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?wu(this.parent._time,this):this._tTime,r=this._rts<0;this._rts=+e||0,this._ts=this._ps||e===-$c?0:this._rts;var i=this.totalDuration();return(r!==this._rts<0||n>0&&n<i)&&this.totalTime(Vu(-Math.abs(this._delay),i,n),t!==!1),Tu(this),yu(this)},t.paused=function(e){if(!arguments.length)return this._ps;if(this._ps!==e){if(this._ps=e,e)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ed(),this._ts=this._rts;var t=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,n=this.progress()===1&&Math.abs(this._zTime)!==$c,r;if(n)for(this._tTime-=$c,r=this._first;r;){if(!r._dur&&r._zTime<0&&r._ts&&r._start<=t+$c){n=!1;break}r=r._next}this.totalTime(t,n)}}return this},t.startTime=function(e){if(arguments.length){this._start=eu(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Ou(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(dl(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wu(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=zl);var t=Xc;return Xc=e,iu(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),Xc=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Iu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Iu(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Ru(this,e),dl(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,dl(t)),this._dur||(this._zTime=-$c),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-$c:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$c,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-$c)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=sl(e)?e:su,a=function(){var e=t.then;t.then=null,n&&n(),sl(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){dd(this)},e}();cu(Bd.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$c,_prom:0,_ps:!1,_rts:1});var Vd=function(e){Kc(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=dl(t.sortChildren),Tl&&Ou(t.parent||Tl,Gc(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&ku(Gc(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return zu(0,arguments,this),this},n.from=function(e,t,n){return zu(1,arguments,this),this},n.fromTo=function(e,t,n,r){return zu(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,pu(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new tf(e,t,Ru(this,n),1),this},n.call=function(e,t,n){return Ou(this,tf.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new tf(e,n,Ru(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,pu(n).immediateRender=dl(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,pu(r).immediateRender=dl(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:eu(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Tl&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=eu(o%f),o===i?(d=this._repeat,c=a):(_=eu(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=Cu(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:eu(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&ud(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Pu(this,eu(r),eu(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(ud(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-$c);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||Xc&&iu(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-$c:$c);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-$c)._zTime=c>=r?1:-1,this._ts))return this._start=g,Tu(this),this.render(e,t,n);this._onUpdate&&!t&&ud(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&_u(this,1),t||e<0&&!r||!o&&!r&&i||(ud(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(cl(t)||(t=Ru(this,t,e)),!(e instanceof Bd)){if(hl(e))return e.forEach(function(e){return n.add(e,t)}),this;if(ol(e))return this.addLabel(e,t);if(sl(e))e=tf.delayedCall(0,e);else return this}return this===e?this:Ou(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-Qc);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof tf?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return ol(e)?this.removeLabel(e):sl(e)?this.killTweensOf(e):(e.parent===this&&gu(this,e),e===this._recent&&(this._recent=this._last),vu(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=eu(Td.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=Ru(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=tf.delayedCall(0,t||Il,n);return r.data=`isPause`,this._hasPause=1,Ou(this,r,Ru(this,e))},n.removePause=function(e){var t=this._first;for(e=Ru(this,e);t;)t._start===e&&t.data===`isPause`&&_u(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Kd!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=qu(e),i=this._first,a=cl(t),o;i;)i instanceof tf?nu(i._targets,r)&&(a?(!Kd||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=Ru(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=tf.to(n,cu({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||$c,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&Fu(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,cu({startAt:{time:Ru(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),ld(this,Ru(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),ld(this,Ru(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+$c)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=eu(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return vu(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),vu(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=Qc,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Ou(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=eu(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Fu(n,n===Tl&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Tl._ts&&(au(Tl,wu(e,Tl)),Ul=Td.frame),Td.frame>=Kl){Kl+=qc.autoSleep||120;var t=Tl._first;if((!t||!t._ts)&&qc.autoSleep&&Td._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Td.sleep()}}},t}(Bd);cu(Vd.prototype,{_lock:0,_hasPause:0,_forcing:0});var Hd=function(e,t,n,r,i,a,o){var s=new gf(this._pt,e,t,0,1,uf,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=od(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(xl)||[];u=xl.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?tu(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=xl.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Sl.test(r)||g)&&(s.e=0),this._pt=s,s},Ud=function(e,t,n,r,i,a,o,s,c,l){sl(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?sl(u)?c?e[t.indexOf(`set`)||!sl(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=sl(u)?c?af:rf:nf,p;if(ol(r)&&(~r.indexOf(`random(`)&&(r=od(r)),r.charAt(1)===`=`&&(p=tu(d,r)+(Hu(d)||0),(p||p===0)&&(r=p))),!l||d!==r||qd)return!isNaN(d*r)&&r!==``?(p=new gf(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?lf:cf,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Nl(t,r),Hd.call(this,e,t,d,r,f,s||qc.stringFilter,c))},Wd=function(e,t,n,r,i){if(sl(e)&&(e=Qd(e,i,t,n,r)),!ul(e)||e.style&&e.nodeType||hl(e)||ml(e))return ol(e)?Qd(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=Qd(e[o],i,t,n,r);return a},Gd=function(e,t,n,r,i,a){var o,s,c,l;if(Wl[e]&&(o=new Wl[e]).init(i,o.rawVars?t[e]:Wd(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new gf(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==fd))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Kd,qd,Jd=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!Yc,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(!b||f&&a||(a=`none`),t._ease=Pd(a,Jc.ease),t._rEase=x&&(Pd(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?Xl(g[0]).harness:0,N=k&&i[k.prop],S=fu(i,Bl),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?Rl:Ll),h._lazy=0),o){if(_u(t._startAt=tf.set(g,cu({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&dl(c),startAt:null,delay:0,onUpdate:l&&function(){return ud(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Xc||!s&&!p)&&t._startAt.revert(Rl),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=cu({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&dl(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),_u(t._startAt=tf.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Xc?t._startAt.revert(Rl):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,$c,$c);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&dl(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||Yl(g)[C]._gsap,t._ptLookup[C]=j={},Hl[O.id]&&Vl.length&&ru(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new gf(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)Wl[w]&&(A=Gd(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=Ud.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(Kd=t,Tl.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,Kd=0),t._pt&&c&&(Hl[O.id]=1)}D&&hf(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(Qc,!0,!0)},Yd=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return qd=1,e.vars[t]=`+=0`,Jd(e,o),qd=0,s?Pl(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=$l(n)+Hu(u.e)),u.b&&(u.b=l.s+Hu(u.b))},Xd=function(e,t){var n=e[0]?Xl(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=uu({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Zd=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(hl(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},Qd=function(e,t,n,r,i){return sl(e)?e.call(t,n,r,i):ol(e)&&~e.indexOf(`random(`)?od(e):e},$d=Jl+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,ef={};Ql($d+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return ef[e]=1}),$d=$d.split(`,`);var tf=function(e){Kc(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:pu(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Tl,g=(hl(t)||ml(t)?cl(t[0]):`length`in n)?[t]:qu(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?Yl(g):Pl(`GSAP target `+t+` not found. https://gsap.com`,!qc.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||pl(s)||pl(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new Vd({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=Gc(a),_._start=0,u||pl(s)||pl(c)){if(b=g.length,C=u&&Xu(u),ul(u))for(x in u)~$d.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=fu(n,ef),y.stagger=0,T&&(y.easeReverse=T),w&&uu(y,w),S=g[v],y.duration=+Qd(s,Gc(a),v,S,g),y.delay=(+Qd(c,Gc(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=Dd.none;_.duration()?s=c=0:a.timeline=0}else if(f){pu(cu(_.vars.defaults,{ease:`none`})),_._ease=Pd(f.ease||n.ease||`none`);var E=0,D,O,k;if(hl(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||Zd(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!Yc&&(Kd=Gc(a),Tl.killTweensOf(g),Kd=0),Ou(h,Gc(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===eu(h._time)&&dl(l)&&xu(Gc(a))&&h.data!==`nested`)&&(a._tTime=-$c,a.render(Math.max(0,-c)||0)),m&&ku(Gc(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-$c&&!o?i:e<$c?0:e,c,l,u,d,f,p,m,h;if(!a)Nu(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=eu(s%d),s===i?(u=this._repeat,c=a):(f=eu(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Cu(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(eu(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(Au(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(ud(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&bu(this,e,t,n),ud(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&ud(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&bu(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&_u(this,1),!t&&(!o||r)&&(s||r||p)&&(ud(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){wd||Td.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Jd(this,a),o=this._ease(a/this._dur),Yd(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Eu(this,0),this.parent||hu(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?dd(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Xc),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Kd&&Kd.vars.overwrite!==!0)._first||dd(this),this.parent&&n!==this.timeline.totalDuration()&&Fu(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?qu(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&mu(r,i))return t===`all`&&(this._pt=0),dd(this);for(s=this._op=this._op||[],t!==`all`&&(ol(t)&&(d={},Ql(t,function(e){return d[e]=1}),t=d),t=Xd(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||gu(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&dd(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return zu(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return zu(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Tl.killTweensOf(e,t,n)},t}(Bd);cu(tf.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Ql(`staggerTo,staggerFrom,staggerFromTo`,function(e){tf[e]=function(){var t=new Vd,n=Wu.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var nf=function(e,t,n){return e[t]=n},rf=function(e,t,n){return e[t](n)},af=function(e,t,n,r){return e[t](r.fp,n)},of=function(e,t,n){return e.setAttribute(t,n)},sf=function(e,t){return sl(e[t])?rf:ll(e[t])&&e.setAttribute?of:nf},cf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},lf=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},uf=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},df=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ff=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},pf=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?gu(this,t,`_pt`):t.dep||(n=1),t=r;return!n},mf=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},hf=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},gf=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||cf,this.d=o||this,this.set=s||nf,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=mf,this.m=e,this.mt=n,this.tween=t},e}();Ql(Jl+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return Bl[e]=1}),kl.TweenMax=kl.TweenLite=tf,kl.TimelineLite=kl.TimelineMax=Vd,Tl=new Vd({sortChildren:!1,defaults:Jc,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),qc.stringFilter=Cd;var _f=[],vf={},yf=[],bf=0,xf=0,Sf=function(e){return(vf[e]||yf).map(function(e){return e()})},Cf=function(){var e=Date.now(),t=[];e-bf>2&&(Sf(`matchMediaInit`),_f.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=El.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Sf(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),bf=e,Sf(`matchMedia`))},wf=function(){function e(e,t){this.selector=t&&Ju(t),this.data=[],this._r=[],this.isReverted=!1,this.id=xf++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){sl(e)&&(n=t,t=e,e=sl);var r=this,i=function(){var e=Zc,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Ju(n)),Zc=r,a=t.apply(r,arguments),sl(a)&&r._r.push(a),Zc=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===sl?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=Zc;Zc=null,e(this),Zc=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof tf&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Vd?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof tf)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t){for(var r=_f.length;r--;)_f[r].id===this.id&&_f.splice(r,1);this._mqs&&this._mqs.forEach(function(e){return e.removeListener?e.removeListener(Cf):e.removeEventListener(`change`,Cf)}),this._mqs=null}},t.revert=function(e){this.kill(e||{})},e}(),Tf=function(){function e(e){this.contexts=[],this.scope=e,Zc&&Zc.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){ul(e)||(e={matches:e});var r=new wf(0,n||this.scope),i=r.conditions={},a,o,s;for(o in Zc&&!r.selector&&(r.selector=Zc.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=El.matchMedia(e[o]),a&&(_f.indexOf(r)<0&&_f.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Cf):a.addEventListener(`change`,Cf),(r._mqs||=[]).push(a)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Ef={registerPlugin:function(){[...arguments].forEach(function(e){return md(e)})},timeline:function(e){return new Vd(e)},getTweensOf:function(e,t){return Tl.getTweensOf(e,t)},getProperty:function(e,t,n,r){ol(e)&&(e=qu(e)[0]);var i=Xl(e||{}).get,a=n?su:ou;return n===`native`&&(n=``),e&&(t?a((Wl[t]&&Wl[t].get||i)(e,t,n,r)):function(t,n,r){return a((Wl[t]&&Wl[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=qu(e),e.length>1){var r=e.map(function(e){return Af.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Wl[t],o=Xl(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;fd._pt=0,r.init(e,n?t+n:t,fd,0,[e]),r.render(1,r),fd._pt&&df(1,fd)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Af.to(e,cu((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Tl.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pd(e.ease,Jc.ease)),du(Jc,e||{})},config:function(e){return du(qc,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Wl[e]&&!kl[e]&&Pl(t+` effect requires `+e+` plugin.`)}),Gl[t]=function(e,t,r){return n(qu(e),cu(t||{},i),r)},a&&(Vd.prototype[t]=function(e,n,r){return this.add(Gl[t](e,ul(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Dd[e]=Pd(t)},parseEase:function(e,t){return arguments.length?Pd(e,t):Dd},getById:function(e){return Tl.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vd(e),r,i;for(n.smoothChildTiming=dl(e.smoothChildTiming),Tl.remove(n),n._dp=0,n._time=n._tTime=Tl._time,r=Tl._first;r;)i=r._next,(t||!(!r._dur&&r instanceof tf&&r.vars.onComplete===r._targets[0]))&&Ou(n,r,r._start-r._delay),r=i;return Ou(Tl,n,0),n},context:function(e,t){return e?new wf(e,t):Zc},matchMedia:function(e){return new Tf(e)},matchMediaRefresh:function(){return _f.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Cf()},addEventListener:function(e,t){var n=vf[e]||(vf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:id,wrapYoyo:ad,distribute:Xu,random:$u,snap:Qu,normalize:nd,getUnit:Hu,clamp:Uu,splitColor:vd,toArray:qu,selector:Ju,mapRange:sd,pipe:ed,unitize:td,interpolate:cd,shuffle:Yu},install:Ml,effects:Gl,ticker:Td,updateRoot:Vd.updateRoot,plugins:Wl,globalTimeline:Tl,core:{PropTween:gf,globals:Fl,Tween:tf,Timeline:Vd,Animation:Bd,getCache:Xl,_removeLinkedListItem:gu,reverting:function(){return Xc},context:function(e){return e&&Zc&&(Zc.data.push(e),e._ctx=Zc),Zc},suppressOverwrites:function(e){return Yc=e}}};Ql(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Ef[e]=tf[e]}),Td.add(Vd.updateRoot),fd=Ef.to({},{duration:0});var Df=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Of=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Df(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},kf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(ol(n)&&(r={},Ql(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Of(e,n)}}}},Af=Ef.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Xc?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kf(`roundProps`,Zu),kf(`modifiers`),kf(`snap`,Qu))||Ef;tf.version=Vd.version=Af.version=`3.15.1`,jl=1,fl()&&Ed(),Dd.Power0,Dd.Power1,Dd.Power2,Dd.Power3,Dd.Power4,Dd.Linear,Dd.Quad,Dd.Cubic,Dd.Quart,Dd.Quint,Dd.Strong,Dd.Elastic,Dd.Back,Dd.SteppedEase,Dd.Bounce,Dd.Sine,Dd.Expo,Dd.Circ;var jf,Mf,Nf,Pf,Ff,If,Lf,Rf=function(){return typeof window<`u`},zf={},Bf=180/Math.PI,Vf=Math.PI/180,Hf=Math.atan2,Uf=1e8,Wf=/([A-Z])/g,Gf=/(left|right|width|margin|padding|x)/i,Kf=/[\s,\(]\S/,qf={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},Jf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yf=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xf=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Zf=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qf=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$f=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ep=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},tp=function(e,t,n){return e.style[t]=n},np=function(e,t,n){return e.style.setProperty(t,n)},rp=function(e,t,n){return e._gsap[t]=n},ip=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ap=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},op=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},sp=`transform`,cp=sp+`Origin`,lp=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in zf&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=qf[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Op(i,e)}):this.tfm[t]=o.x?o[t]:Op(i,t),t===cp&&(this.tfm.zOrigin=o.zOrigin);else return qf.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(sp)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(cp,n,``)),t=sp}(a||n)&&this.props.push(t,n,a[t])},up=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},dp=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Wf,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Lf(),i&&i.isStart||n[sp]||(up(n),r.zOrigin&&n[cp]&&(n[cp]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},fp=function(e,t){var n={target:e,props:[],revert:dp,save:lp};return e._gsap||Af.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},pp,mp=function(e,t){var n=Mf.createElementNS?Mf.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Mf.createElement(e);return n&&n.style?n:Mf.createElement(e)},hp=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Wf,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,_p(n)||n,1)||``},gp=`O,Moz,ms,Ms,Webkit`.split(`,`),_p=function(e,t,n){var r=(t||Ff).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(gp[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?gp[i]:``)+e},vp=function(){Rf()&&window.document&&(jf=window,Mf=jf.document,Nf=Mf.documentElement,Ff=mp(`div`)||{style:{}},mp(`div`),sp=_p(sp),cp=sp+`Origin`,Ff.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,pp=!!_p(`perspective`),Lf=Af.core.reverting,Pf=1)},yp=function(e){var t=e.ownerSVGElement,n=mp(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Nf.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Nf.removeChild(n),i},bp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},xp=function(e){var t,n;try{t=e.getBBox()}catch{t=yp(e),n=1}return t&&(t.width||t.height)||n||(t=yp(e)),t&&!t.width&&!t.x&&!t.y?{x:+bp(e,[`x`,`cx`,`x1`])||0,y:+bp(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Sp=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!xp(e))},Cp=function(e,t){if(t){var n=e.style,r;t in zf&&t!==cp&&(t=sp),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Wf,`-$1`).toLowerCase())):n.removeAttribute(t)}},wp=function(e,t,n,r,i,a){var o=new gf(e._pt,t,n,0,1,a?ep:$f);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Tp={deg:1,rad:1,turn:1},Ep={grid:1,flex:1},Dp=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Ff.style,c=Gf.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Tp[i]||Tp[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Sp(t),(p||o===`%`)&&(zf[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],$l(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==Mf&&h.appendChild||(h=Mf.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Td.time&&!g.uncache)return $l(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Cp(t,n)}else(p||o===`%`)&&!Ep[hp(h,`display`)]&&(s.position=hp(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Ff),m=Ff[u],h.removeChild(Ff),s.position=`absolute`;return c&&p&&(g=Xl(h),g.time=Td.time,g.width=h[u]),$l(f?m*a/d:m&&a?d/m*a:0)},Op=function(e,t,n,r){var i;return Pf||vp(),t in qf&&t!==`transform`&&(t=qf[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),zf[t]&&t!==`transform`?(i=Bp(e,r),i=t===`transformOrigin`?i.svg?i.origin:Vp(hp(e,cp))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Np[t]&&Np[t](e,t,n)||hp(e,t)||Zl(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Dp(e,t,i,n)+n:i},kp=function(e,t,n,r){if(!n||n===`none`){var i=_p(t,e,1),a=i&&hp(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=hp(e,`borderTopColor`))}var o=new gf(this._pt,e.style,t,0,1,uf),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=hp(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=hp(e,t)||r,m?e.style[t]=m:Cp(e,t)),l=[n,r],Cd(l),n=l[0],r=l[1],d=n.match(bl)||[],b=r.match(bl)||[],b.length){for(;u=bl.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=tu(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=bl.lastIndex-v.length,v||(v=v||qc.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Dp(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?ep:$f;return Sl.test(r)&&(o.e=0),this._pt=o,o},Ap={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},jp=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Ap[n]||n,t[1]=Ap[r]||r,t.join(` `)},Mp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],zf[o]&&(s=1,o=o===`transformOrigin`?cp:sp),Cp(n,o);s&&(Cp(n,sp),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,Bp(n,1),a.uncache=1,up(r)))}},Np={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new gf(e._pt,t,n,0,0,Mp);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Pp=[1,0,0,1,0,0],Fp={},Ip=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Lp=function(e){var t=hp(e,sp);return Ip(t)?Pp:t.substr(7).match(yl).map($l)},Rp=function(e,t){var n=e._gsap||Xl(e),r=e.style,i=Lp(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Pp:i):(i===Pp&&!e.offsetParent&&e!==Nf&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,Nf.appendChild(e)),i=Lp(e),s?r.display=s:Cp(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Nf.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},zp=function(e,t,n,r,i,a){var o=e._gsap,s=i||Rp(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Pp&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=xp(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[cp]=`0px 0px`,a&&(wp(a,o,`xOrigin`,c,y),wp(a,o,`yOrigin`,l,b),wp(a,o,`xOffset`,u,o.xOffset),wp(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},Bp=function(e,t){var n=e._gsap||new zd(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=hp(e,cp)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,ee,z;return n.svg=!!(e.getCTM&&Sp(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[sp]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[sp]===`none`?``:s[sp])),r.scale=r.rotate=r.translate=`none`),S=Rp(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),zp(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==Pp&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?Hf(D,E)*Bf:0,_=O||k?Hf(O,k)*Bf+m:0,_&&(p*=Math.abs(Math.cos(_*Vf))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(z=S[6],R=S[7],F=S[8],I=S[9],L=S[10],ee=S[11],l=S[12],u=S[13],d=S[14],C=Hf(z,L),h=C*Bf,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+I*T,P=z*w+L*T,F=A*-T+F*w,I=j*-T+I*w,L=z*-T+L*w,ee=R*-T+ee*w,A=M,j=N,z=P),C=Hf(-O,L),g=C*Bf,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-I*T,P=O*w-L*T,ee=k*T+ee*w,E=M,D=N,O=P),C=Hf(D,E),m=C*Bf,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=$l(Math.sqrt(E*E+D*D+O*O)),p=$l(Math.sqrt(j*j+z*z)),C=Hf(A,j),_=Math.abs(C)>2e-4?C*Bf:0,y=ee?1/(ee<0?-ee:ee):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Ip(hp(e,sp)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=$l(f),n.scaleY=$l(p),n.rotation=$l(m)+o,n.rotationX=$l(h)+o,n.rotationY=$l(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[cp]=Vp(c)),n.xOffset=n.yOffset=0,n.force3D=qc.force3D,n.renderTransform=n.svg?Jp:pp?qp:Up,n.uncache=0,n},Vp=function(e){return(e=e.split(` `))[0]+` `+e[1]},Hp=function(e,t,n){var r=Hu(t);return $l(parseFloat(t)+parseFloat(Dp(e,`x`,n+`px`,r)))+r},Up=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,qp(e,t)},Wp=`0deg`,Gp=`0px`,Kp=`) `,qp=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==Wp||l!==Wp)){var x=parseFloat(l)*Vf,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Vf,w=Math.cos(x),a=Hp(_,a,S*w*-v),o=Hp(_,o,-Math.sin(x)*-v),s=Hp(_,s,C*w*-v+v)}h!==Gp&&(y+=`perspective(`+h+Kp),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Gp||o!==Gp||s!==Gp)&&(y+=s!==Gp||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+Kp),c!==Wp&&(y+=`rotate(`+c+Kp),l!==Wp&&(y+=`rotateY(`+l+Kp),u!==Wp&&(y+=`rotateX(`+u+Kp),(d!==Wp||f!==Wp)&&(y+=`skew(`+d+`, `+f+Kp),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+Kp),_.style[sp]=y||`translate(0, 0)`},Jp=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Vf,c*=Vf,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Vf,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=$l(b),x=$l(x),S=$l(S),C=$l(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Dp(f,`x`,a,`px`),y=Dp(f,`y`,o,`px`)),(p||m||h||g)&&(v=$l(v+p-(p*b+m*S)+h),y=$l(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=$l(v+r/100*w.width),y=$l(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[sp]=w)},Yp=function(e,t,n,r,i){var a=360,o=ol(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?Bf:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*Uf)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*Uf)%a-~~(s/a)*a)),e._pt=u=new gf(e._pt,t,n,r,s,Yf),u.e=c,u.u=`deg`,e._props.push(n),u},Xp=function(e,t){for(var n in t)e[n]=t[n];return e},Zp=function(e,t,n){var r=Xp({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[sp]=t,o=Bp(n,1),Cp(n,sp),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[sp],a[sp]=t,o=Bp(n,1),a[sp]=c),zf)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=Hu(c),p=Hu(l),u=f===p?parseFloat(c):Dp(n,s,c,p),d=parseFloat(l),e._pt=new gf(e._pt,o,s,u,d-u,Jf),e._pt.u=p||0,e._props.push(s));Xp(o,r)};Ql(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Np[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Op(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Qp={name:`css`,register:vp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in Pf||vp(),this.styles=this.styles||fp(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Wl[m]&&Gd(m,t,n,r,e,i)))){if(f=typeof l,p=Np[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=od(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,xd.lastIndex=0,xd.test(c)||(h=Hu(c),g=Hu(l),g?h!==g&&(c=Dp(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],ol(c)&&~c.indexOf(`random(`)&&(c=od(c)),Hu(c+``)||c===`auto`||(c+=qc.units[m]||Hu(Op(e,m))||``),(c+``).charAt(1)===`=`&&(c=Op(e,m))):c=Op(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in qf&&(m===`autoAlpha`&&(d===1&&Op(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),wp(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=qf[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in zf,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=hp(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=hp(e,`perspective`),T?e.style.perspective=T:Cp(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Bp(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new gf(this._pt,o,sp,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new gf(this._pt,b,`scaleY`,b.scaleY,(_?tu(b.scaleY,_+u):u)-b.scaleY||0,Jf),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(cp,0,o[cp]),l=jp(l),b.svg?zp(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&wp(this,b,`zOrigin`,b.zOrigin,g),wp(this,o,m,Vp(c),Vp(l)));continue}else if(m===`svgOrigin`){zp(e,l,1,x,0,this);continue}else if(m in Fp){Yp(this,b,m,d,_?tu(d,_+l):l);continue}else if(m===`smoothOrigin`){wp(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Zp(this,l,e);continue}}else m in o||(m=_p(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Kf.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=Hu(l)||(m in qc.units?qc.units[m]:h),h!==g&&(d=Dp(e,m,c,g)),this._pt=new gf(this._pt,v?b:o,m,d,(_?tu(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Qf:Jf),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=Zf):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Xf);else if(m in o)kp.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Nl(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&hf(this)},render:function(e,t){if(t.tween._time||!Lf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Op,aliases:qf,getSetter:function(e,t,n){var r=qf[t];return r&&r.indexOf(`,`)<0&&(t=r),t in zf&&t!==cp&&(e._gsap.x||Op(e,`x`))?n&&If===n?t===`scale`?ip:rp:(If=n||{})&&(t===`scale`?ap:op):e.style&&!ll(e.style[t])?tp:~t.indexOf(`-`)?np:sf(e,t)},core:{_removeProperty:Cp,_getMatrix:Rp}};Af.utils.checkPrefix=_p,Af.core.getStyleSaver=fp,(function(e,t,n,r){var i=Ql(e+`,`+t+`,`+n,function(e){zf[e]=1});Ql(t,function(e){qc.units[e]=`deg`,Fp[e]=1}),qf[i[13]]=e+`,`+t,Ql(r,function(e){var t=e.split(`:`);qf[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Ql(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){qc.units[e]=`px`}),Af.registerPlugin(Qp);var Q=Af.registerPlugin(Qp)||Af;Q.core.Tween;function $p(e,t){let n=parseInt(e.replace(`#`,``),16);return`rgba(${n>>16&255},${n>>8&255},${n&255},${Math.max(0,Math.min(1,t)).toFixed(3)})`}function em(e,t,n,r,i=0,a=!1){e.save(),e.translate(t,n),a&&(e.fillStyle=`rgba(255, 110, 110, 0.28)`,e.beginPath(),e.arc(0,0,r*1.15,0,Math.PI*2),e.fill());let o=e.createRadialGradient(-r*.28,-r*.3,r*.12,0,0,r*1.15);o.addColorStop(0,`#ff8f8f`),o.addColorStop(.45,`#e84a5f`),o.addColorStop(1,`#9e1c2f`),e.fillStyle=o,e.beginPath(),e.arc(-r*.25,0,r*.78,0,Math.PI*2),e.arc(r*.25,0,r*.78,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(0,r*.28,r*.85,r*.68,0,0,Math.PI),e.fill(),e.fillStyle=`rgba(255,255,255,0.45)`,e.beginPath(),e.ellipse(-r*.38,-r*.28,r*.16,r*.28,-.4,0,Math.PI*2),e.fill(),e.strokeStyle=`#8b5a2b`,e.lineWidth=Math.max(2,r*.12),e.lineCap=`round`,e.beginPath(),e.moveTo(0,-r*.55),e.quadraticCurveTo(r*.1,-r*.95,r*.25,-r*1.05),e.stroke(),e.fillStyle=`#5cd68d`,e.beginPath(),e.ellipse(r*.32,-r*.82,r*.34,r*.16,-.45+Math.sin(i*2)*.05,0,Math.PI*2),e.fill(),e.restore()}function tm(e,t,n,r,i=`#8fa0ff`,a=``,o=0){e.save(),e.translate(t,n),e.strokeStyle=`rgba(237,237,235,0.45)`,e.lineWidth=1.6,e.beginPath(),e.moveTo(0,r*1.15),e.quadraticCurveTo(Math.sin(o*3+t)*6,r*1.6,Math.cos(o*2+n)*5,r*2.15),e.stroke(),e.fillStyle=i,e.beginPath(),e.moveTo(-4,r*1.18),e.lineTo(4,r*1.18),e.lineTo(0,r*1.02),e.closePath(),e.fill();let s=e.createRadialGradient(-r*.32,-r*.35,r*.1,0,0,r*1.25);if(s.addColorStop(0,`#ffffff`),s.addColorStop(.22,i),s.addColorStop(1,`#181822`),e.fillStyle=s,e.beginPath(),e.ellipse(0,0,r*.88,r*1.06,0,0,Math.PI*2),e.fill(),e.fillStyle=$p(i,.52),e.beginPath(),e.ellipse(0,0,r*.88,r*1.06,0,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(255,255,255,0.42)`,e.beginPath(),e.ellipse(-r*.34,-r*.38,r*.16,r*.28,-.35,0,Math.PI*2),e.fill(),e.strokeStyle=`rgba(255,255,255,0.28)`,e.lineWidth=1.2,e.beginPath(),e.ellipse(0,0,r*.88,r*1.06,0,0,Math.PI*2),e.stroke(),a){e.fillStyle=`#0c0c0d`,e.textAlign=`center`,e.textBaseline=`middle`;let t=a.length>2?r*.56:r*.85;e.font=`700 ${Math.round(t)}px "Nunito", ui-sans-serif, sans-serif`,e.fillText(a,0,2)}e.restore()}function nm(e,t,n,r,i=`#f3c57a`,a=`rgba(255,255,255,0.4)`){e.save(),e.translate(t,n),e.beginPath();for(let t=0;t<10;t++){let n=t%2==0?r:r*.46,i=-Math.PI/2+t*Math.PI/5,a=Math.cos(i)*n,o=Math.sin(i)*n;t===0?e.moveTo(a,o):e.lineTo(a,o)}e.closePath(),e.fillStyle=i,e.fill(),a&&(e.strokeStyle=a,e.lineWidth=1.2,e.stroke()),e.restore()}function rm(e,t,n,r,i=1,a=0){e.save(),e.translate(t,n+Math.sin(a*3.2)*2.5),e.scale(i,1),e.strokeStyle=`rgba(124, 224, 195, 0.4)`,e.lineWidth=1.5,e.beginPath(),e.ellipse(0,r*.58,r*.95,r*.22,0,0,Math.PI*2),e.stroke(),e.fillStyle=`#ffd166`,e.beginPath(),e.ellipse(-r*.08,r*.22,r*.68,r*.44,0,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(-r*.65,r*.1),e.lineTo(-r*.92,-r*.14),e.lineTo(-r*.52,r*.3),e.closePath(),e.fill(),e.fillStyle=`#f4b942`,e.beginPath(),e.ellipse(-r*.1,r*.22,r*.36,r*.22,-.15,0,Math.PI*2),e.fill(),e.fillStyle=`#ffd166`,e.beginPath(),e.arc(r*.34,-r*.26,r*.35,0,Math.PI*2),e.fill(),e.fillStyle=`#ff7b54`,e.beginPath(),e.ellipse(r*.72,-r*.22,r*.24,r*.11,.08,0,Math.PI*2),e.fill(),e.fillStyle=`#141417`,e.beginPath(),e.arc(r*.42,-r*.33,r*.065,0,Math.PI*2),e.fill(),e.fillStyle=`#fff`,e.beginPath(),e.arc(r*.44,-r*.35,r*.025,0,Math.PI*2),e.fill(),e.restore()}function im(e,t,n,r,i,a=0,o=`#8fa0ff`){e.save(),e.translate(n,r);let s=i*.46;switch(t){case`sir`:e.save(),e.translate(0,Math.sin(a*1.8)*1.8),e.fillStyle=`#d97736`;for(let t=0;t<12;t++){let n=t/12*Math.PI*2+Math.sin(a*1.4)*.05;e.beginPath(),e.arc(Math.cos(n)*s*.72,Math.sin(n)*s*.72,s*.32,0,Math.PI*2),e.fill()}e.fillStyle=`#f3b75f`,e.beginPath(),e.arc(-s*.48,-s*.5,s*.18,0,Math.PI*2),e.arc(s*.48,-s*.5,s*.18,0,Math.PI*2),e.fill(),e.fillStyle=`#f8c978`,e.beginPath(),e.arc(0,0,s*.65,0,Math.PI*2),e.fill(),a%4.2>4.02?(e.strokeStyle=`#141417`,e.lineWidth=2,e.beginPath(),e.moveTo(-s*.29,-s*.1),e.lineTo(-s*.15,-s*.1),e.moveTo(s*.15,-s*.1),e.lineTo(s*.29,-s*.1),e.stroke()):(e.fillStyle=`#141417`,e.beginPath(),e.arc(-s*.22,-s*.1,s*.075,0,Math.PI*2),e.arc(s*.22,-s*.1,s*.075,0,Math.PI*2),e.fill(),e.fillStyle=`#fff`,e.beginPath(),e.arc(-s*.2,-s*.12,s*.025,0,Math.PI*2),e.arc(s*.24,-s*.12,s*.025,0,Math.PI*2),e.fill()),e.fillStyle=`#8b4513`,e.beginPath(),e.moveTo(-s*.1,s*.06),e.lineTo(s*.1,s*.06),e.lineTo(0,s*.18),e.closePath(),e.fill(),e.strokeStyle=`#8b4513`,e.lineWidth=2,e.beginPath(),e.arc(-s*.09,s*.2,s*.09,0,Math.PI),e.stroke(),e.beginPath(),e.arc(s*.09,s*.2,s*.09,0,Math.PI),e.stroke(),e.restore();break;case`sar`:tm(e,-s*.35,-s*.05+Math.sin(a*2)*3,s*.46,`#8fa0ff`,`Ş`,a),tm(e,s*.34,-s*.22+Math.cos(a*2.2)*3,s*.42,`#f3c57a`,`ş`,a+1);break;case`coy`:e.strokeStyle=`rgba(237,237,235,0.45)`,e.lineWidth=2,e.lineCap=`round`;for(let t=-1;t<=1;t++){let n=t*s*.22,r=Math.sin(a*3+t)*4;e.beginPath(),e.moveTo(n,-s*.55),e.quadraticCurveTo(n+r,-s*.8,n-r,-s*1),e.stroke()}e.strokeStyle=`#7ce0c3`,e.lineWidth=Math.max(3,s*.12),e.beginPath(),e.arc(-s*.5,s*.05,s*.36,Math.PI*.55,Math.PI*1.45),e.stroke(),e.beginPath(),e.moveTo(s*.45,s*.15),e.quadraticCurveTo(s*.8,-s*.05,s*.78,-s*.28),e.stroke(),e.fillStyle=`#52c4a8`,e.beginPath(),e.ellipse(0,s*.12,s*.56,s*.46,0,0,Math.PI*2),e.fill(),e.fillStyle=`#7ce0c3`,e.beginPath(),e.ellipse(0,-s*.3,s*.34,s*.12,0,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(0,-s*.44,s*.1,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(255,255,255,0.28)`,e.fillRect(-s*.45,s*.05,s*.9,s*.12);break;case`ordak`:rm(e,0,0,s*.95,1,a);break;case`goz`:case`tog`:{e.fillStyle=`#485278`,e.beginPath(),e.moveTo(-s*.95,s*.65),e.lineTo(-s*.15,-s*.65),e.lineTo(s*.65,s*.65),e.closePath(),e.fill(),e.fillStyle=`#626f9e`,e.beginPath(),e.moveTo(-s*.1,s*.65),e.lineTo(s*.45,-s*.35),e.lineTo(s*.98,s*.65),e.closePath(),e.fill(),e.fillStyle=`#ededeb`,e.beginPath(),e.moveTo(-s*.15,-s*.65),e.lineTo(-s*.42,-s*.22),e.lineTo(-s*.22,-s*.16),e.lineTo(-s*.08,-s*.26),e.lineTo(s*.12,-s*.2),e.closePath(),e.fill();let t=-s*.5+Math.sin(a*4)*3;e.strokeStyle=`#e58fa9`,e.lineWidth=2.5,e.beginPath(),e.moveTo(s*.25,t+5),e.quadraticCurveTo(s*.4,t-8,s*.55,t),e.quadraticCurveTo(s*.7,t-8,s*.82,t+5),e.stroke();break}case`quyos`:{e.save(),e.rotate(a*.35),e.strokeStyle=`#f3c57a`,e.lineWidth=Math.max(2,s*.09),e.lineCap=`round`;for(let t=0;t<10;t++){let n=t/10*Math.PI*2;e.beginPath(),e.moveTo(Math.cos(n)*s*.62,Math.sin(n)*s*.62),e.lineTo(Math.cos(n)*s*.88,Math.sin(n)*s*.88),e.stroke()}e.restore();let t=e.createRadialGradient(-s*.15,-s*.15,s*.1,0,0,s*.55);t.addColorStop(0,`#fff4b8`),t.addColorStop(1,`#f3a83b`),e.fillStyle=t,e.beginPath(),e.arc(0,0,s*.5,0,Math.PI*2),e.fill(),e.fillStyle=`#6b3e08`,e.beginPath(),e.arc(-s*.15,-s*.06,s*.055,0,Math.PI*2),e.arc(s*.15,-s*.06,s*.055,0,Math.PI*2),e.fill(),e.strokeStyle=`#6b3e08`,e.lineWidth=2,e.beginPath(),e.arc(0,s*.04,s*.18,.2,Math.PI-.2),e.stroke();break}case`olma`:em(e,-s*.28,s*.1+Math.sin(a*2)*2.2,s*.45,a,!1),em(e,s*.36,-s*.12+Math.cos(a*1.8)*2.2,s*.36,a+1,!1);break;case`yulduz`:nm(e,-s*.22,0,s*.55,`#f3c57a`),nm(e,s*.48,-s*.36+Math.sin(a*3)*3,s*.28,`#8fa0ff`),nm(e,s*.45,s*.42,s*.22,`#7ce0c3`);break;case`raketa`:e.save(),e.rotate(-.45),e.translate(0,Math.sin(a*6)*2),e.fillStyle=`#ff9f43`,e.beginPath(),e.moveTo(-s*.18,s*.45),e.lineTo(s*.18,s*.45),e.lineTo(0,s*(.9+Math.sin(a*20)*.12)),e.closePath(),e.fill(),e.fillStyle=`#e58fa9`,e.beginPath(),e.moveTo(-s*.28,s*.15),e.lineTo(-s*.54,s*.52),e.lineTo(-s*.22,s*.45),e.closePath(),e.fill(),e.beginPath(),e.moveTo(s*.28,s*.15),e.lineTo(s*.54,s*.52),e.lineTo(s*.22,s*.45),e.closePath(),e.fill(),e.fillStyle=`#ededeb`,e.strokeStyle=`rgba(15, 23, 42, 0.16)`,e.lineWidth=1.2,e.beginPath(),e.ellipse(0,0,s*.3,s*.62,0,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=o,e.beginPath(),e.arc(0,-s*.36,s*.22,Math.PI,0),e.fill(),e.fillStyle=`#252ba7`,e.beginPath(),e.arc(0,-s*.08,s*.14,0,Math.PI*2),e.fill(),e.restore();break;case`poyezd`:{let t=Math.sin(a*5)*1.5;e.translate(0,t),e.fillStyle=`rgba(237,237,235,0.3)`,e.beginPath(),e.arc(s*.38,-s*.68,s*.14,0,Math.PI*2),e.arc(s*.18,-s*.85,s*.18,0,Math.PI*2),e.fill(),e.fillStyle=`#f3c57a`,e.fillRect(s*.32,-s*.5,s*.18,s*.32),e.fillStyle=o,e.fillRect(-s*.2,-s*.22,s*.85,s*.58),e.fillStyle=`#7ce0c3`,e.fillRect(-s*.72,-s*.48,s*.56,s*.84),e.fillStyle=`#141417`,e.fillRect(-s*.58,-s*.32,s*.28,s*.26),e.fillStyle=`#ededeb`,[-s*.45,0,s*.42].forEach(t=>{e.beginPath(),e.arc(t,s*.42,s*.18,0,Math.PI*2),e.fill(),e.fillStyle=`#141417`,e.beginPath(),e.arc(t,s*.42,s*.06,0,Math.PI*2),e.fill(),e.fillStyle=`#ededeb`});break}case`tarozi`:{let t=Math.sin(a*2)*.14;e.fillStyle=`#f3c57a`,e.fillRect(-s*.07,-s*.5,s*.14,s*1.1),e.fillRect(-s*.48,s*.55,s*.96,s*.14),e.save(),e.translate(0,-s*.45),e.rotate(t),e.fillStyle=`#ededeb`,e.strokeStyle=`rgba(15, 23, 42, 0.16)`,e.lineWidth=1.2,e.fillRect(-s*.8,-s*.05,s*1.6,s*.1),e.strokeRect(-s*.8,-s*.05,s*1.6,s*.1),[-s*.7,s*.7].forEach((n,r)=>{e.save(),e.translate(n,0),e.rotate(-t),e.strokeStyle=`rgba(237,237,235,0.5)`,e.lineWidth=1.5,e.beginPath(),e.moveTo(0,0),e.lineTo(-s*.22,s*.48),e.moveTo(0,0),e.lineTo(s*.22,s*.48),e.stroke(),e.fillStyle=r===0?`#8fa0ff`:`#7ce0c3`,e.beginPath(),e.arc(0,s*.48,s*.25,0,Math.PI),e.fill(),e.restore()}),e.restore();break}case`kitob`:e.save(),e.translate(0,Math.sin(a*1.8)*2.2),e.fillStyle=`#ededeb`,e.strokeStyle=`rgba(15, 23, 42, 0.18)`,e.lineWidth=1.2,e.beginPath(),e.moveTo(0,-s*.35),e.quadraticCurveTo(-s*.45,-s*.55,-s*.85,-s*.35),e.lineTo(-s*.85,s*.48),e.quadraticCurveTo(-s*.45,s*.28,0,s*.48),e.closePath(),e.fill(),e.stroke(),e.fillStyle=`#dcdcd8`,e.beginPath(),e.moveTo(0,-s*.35),e.quadraticCurveTo(s*.45,-s*.55,s*.85,-s*.35),e.lineTo(s*.85,s*.48),e.quadraticCurveTo(s*.45,s*.28,0,s*.48),e.closePath(),e.fill(),e.stroke(),e.fillStyle=`#252ba7`,e.font=`700 ${Math.round(s*.45)}px "Nunito", serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`A`,-s*.42,s*.05),e.fillStyle=`#d94862`,e.fillText(`Ş`,s*.42,s*.05),nm(e,0,-s*.72+Math.sin(a*2.6)*2.5,s*.16,`#ffd166`,`rgba(15,23,42,0.16)`),e.restore();break;case`qurbaqa`:{e.fillStyle=`#38a169`,e.beginPath(),e.ellipse(0,s*.48,s*.85,s*.26,0,.2,Math.PI*2-.2),e.lineTo(0,s*.48),e.closePath(),e.fill();let t=Math.abs(Math.sin(a*2.5))*5;e.translate(0,-t),e.fillStyle=`#68d391`,e.beginPath(),e.ellipse(0,s*.12,s*.52,s*.4,0,0,Math.PI*2),e.fill(),e.fillStyle=`#68d391`,e.beginPath(),e.arc(-s*.25,-s*.32,s*.18,0,Math.PI*2),e.arc(s*.25,-s*.32,s*.18,0,Math.PI*2),e.fill(),e.fillStyle=`#fff`,e.beginPath(),e.arc(-s*.25,-s*.32,s*.11,0,Math.PI*2),e.arc(s*.25,-s*.32,s*.11,0,Math.PI*2),e.fill(),e.fillStyle=`#141417`,e.beginPath(),e.arc(-s*.25,-s*.32,s*.055,0,Math.PI*2),e.arc(s*.25,-s*.32,s*.055,0,Math.PI*2),e.fill(),e.strokeStyle=`#1b4332`,e.lineWidth=2,e.beginPath(),e.arc(0,s*.05,s*.26,.15,Math.PI-.15),e.stroke();break}case`qozi`:e.save(),e.translate(0,Math.sin(a*2.1)*2.4),e.fillStyle=`#ededeb`,e.strokeStyle=`rgba(15, 23, 42, 0.16)`,e.lineWidth=1;for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.beginPath(),e.arc(Math.cos(n)*s*.38,Math.sin(n)*s*.28,s*.28,0,Math.PI*2),e.fill(),e.stroke()}e.fillStyle=`#2d2d34`,e.beginPath(),e.ellipse(0,s*.08,s*.28,s*.34,0,0,Math.PI*2),e.fill(),e.fillStyle=`#fff`,e.beginPath(),e.arc(-s*.1,0,s*.05,0,Math.PI*2),e.arc(s*.1,0,s*.05,0,Math.PI*2),e.fill(),e.restore();break;default:for(let t=0;t<6;t++){let n=t/6*Math.PI*2+a*.4;e.fillStyle=$p(o,.72),e.beginPath(),e.arc(Math.cos(n)*s*.36,Math.sin(n)*s*.36,s*.28,0,Math.PI*2),e.fill()}e.fillStyle=`#f3c57a`,e.beginPath(),e.arc(0,0,s*.24,0,Math.PI*2),e.fill()}e.restore()}var am=`alif.theme`,om=(()=>{try{return localStorage.getItem(am)===`light`?`light`:`dark`}catch{return`dark`}})(),sm=new Set;function cm(e){if(typeof document>`u`)return;let t=document.documentElement;t.dataset.theme=e,t.classList.toggle(`is-day`,e===`light`);let n=document.querySelector(`meta[name="theme-color"]`);n&&n.setAttribute(`content`,e===`light`?`#dce8fa`:`#080a12`)}cm(om);function lm(){return om}function um(){return om===`light`}function dm(e){let t=e===`light`?`light`:`dark`;if(t===om)return cm(t),om;om=t;try{localStorage.setItem(am,t)}catch{}return cm(t),sm.forEach(e=>{try{e(t)}catch{}}),typeof window<`u`&&window.dispatchEvent(new CustomEvent(`alif:theme`,{detail:{theme:t}})),om}function fm(){return dm(om===`dark`?`light`:`dark`)}function pm(e){return sm.add(e),e(om),()=>sm.delete(e)}function mm(){if(typeof window>`u`)return!1;let e=navigator,t=e.hardwareConcurrency||4,n=e.deviceMemory||4,r=window.matchMedia?.(`(pointer: coarse)`).matches??!1,i=Math.min(window.innerWidth,window.innerHeight)<768;return(window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1)||r&&i&&(t<=4||n<=4)}var hm={aurora:`./assets/images/glass_aurora_bg_1794753550731.webp`,valley:`./assets/images/storybook_valley_bg_1794753551314.webp`,space:`./assets/images/cosmic_nebula_bg_1794753551824.webp`,prism:`./assets/images/studio_prism_bg_1794753553266.webp`},gm={},_m=new Set,vm=0;Object.entries(hm).forEach(([e,t])=>{let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{gm[e]=n,vm++,_m.forEach(t=>{try{t(e)}catch{}})},n.src=t});function ym(e){return _m.add(e),vm>0&&e(`init`),()=>_m.delete(e)}function bm(e,t,n,r,i=.35){let a=gm[r]||gm.aurora;if(a&&a.naturalWidth){let r=a.naturalWidth/a.naturalHeight,o=t/n,s=t,c=n,l=0,u=0;o>r?(s=t,c=t/r,u=(n-c)/2):(c=n,s=n*r,l=(t-s)/2),e.drawImage(a,l,u,s,c),i>0&&(e.fillStyle=`rgba(10, 12, 18, ${i})`,e.fillRect(0,0,t,n))}else{let r=e.createLinearGradient(0,0,t,n);r.addColorStop(0,`#131829`),r.addColorStop(1,`#0c0e16`),e.fillStyle=r,e.fillRect(0,0,t,n)}}var xm=[{num:1,upper:`A`,lower:`a`,example:`Anor`,words:[`Anor`,`Ari`,`Asal`],art:`olma`,hint:`1-harf · Unli tovuş`,type:`unli`},{num:2,upper:`B`,lower:`b`,example:`Bola`,words:[`Bola`,`Boğ`,`Baliq`],art:`sir`,hint:`2-harf · Undosh tovuş`,type:`undosh`},{num:3,upper:`Ç`,lower:`ç`,example:`Çoynak`,words:[`Çoynak`,`Çana`,`Çiroq`],art:`coy`,hint:`3-harf · Yangi harf (avvalgi Ch ch)`,type:`yangi`,old:`Ch ch`},{num:4,upper:`D`,lower:`d`,example:`Daftar`,words:[`Daftar`,`Daraxt`,`Daryo`],art:`kitob`,hint:`4-harf · Undosh tovuş`,type:`undosh`},{num:5,upper:`E`,lower:`e`,example:`Eşik`,words:[`Eşik`,`Erkak`,`Elak`],art:`kitob`,hint:`5-harf · Unli tovuş`,type:`unli`},{num:6,upper:`F`,lower:`f`,example:`Fil`,words:[`Fil`,`Fasl`,`Fonar`],art:`sir`,hint:`6-harf · Undosh tovuş`,type:`undosh`},{num:7,upper:`G`,lower:`g`,example:`Gul`,words:[`Gul`,`Gilam`,`Gilos`],art:`gul`,hint:`7-harf · Undosh tovuş`,type:`undosh`},{num:8,upper:`Ğ`,lower:`ğ`,example:`Ğoz`,words:[`Ğoz`,`Toğ`,`Boğ`],art:`tog`,hint:`8-harf · Yangi harf (avvalgi Gʻ gʻ)`,type:`yangi`,old:`Gʻ gʻ`},{num:9,upper:`H`,lower:`h`,example:`Havo`,words:[`Havo`,`Hovli`,`Hikoya`],art:`sar`,hint:`9-harf · Undosh tovuş`,type:`undosh`},{num:10,upper:`I`,lower:`i`,example:`Ilm`,words:[`Ilm`,`Ikki`,`Issiq`],art:`kitob`,hint:`10-harf · Unli tovuş`,type:`unli`},{num:11,upper:`J`,lower:`j`,example:`Jöja`,words:[`Jöja`,`Jayron`,`Jilğa`],art:`ordak`,hint:`11-harf · Undosh tovuş`,type:`undosh`},{num:12,upper:`K`,lower:`k`,example:`Kitob`,words:[`Kitob`,`Kapalak`,`Kema`],art:`kitob`,hint:`12-harf · Undosh tovuş`,type:`undosh`},{num:13,upper:`L`,lower:`l`,example:`Lola`,words:[`Lola`,`Limon`,`Laylak`],art:`gul`,hint:`13-harf · Undosh tovuş`,type:`undosh`},{num:14,upper:`M`,lower:`m`,example:`Maktab`,words:[`Maktab`,`Meva`,`Muşuk`],art:`kitob`,hint:`14-harf · Undosh tovuş`,type:`undosh`},{num:15,upper:`N`,lower:`n`,example:`Non`,words:[`Non`,`Nur`,`Nok`],art:`quyos`,hint:`15-harf · Undosh tovuş`,type:`undosh`},{num:16,upper:`O`,lower:`o`,example:`Olma`,words:[`Olma`,`Osmon`,`Ota`],art:`olma`,hint:`16-harf · Unli tovuş`,type:`unli`},{num:17,upper:`Ö`,lower:`ö`,example:`Ördak`,words:[`Ördak`,`Öqiş`,`Qözi`],art:`ordak`,hint:`17-harf · Yangi harf (avvalgi Oʻ oʻ)`,type:`yangi`,old:`Oʻ oʻ`},{num:18,upper:`P`,lower:`p`,example:`Poyezd`,words:[`Poyezd`,`Paxta`,`Piyola`],art:`poyezd`,hint:`18-harf · Undosh tovuş`,type:`undosh`},{num:19,upper:`Q`,lower:`q`,example:`Qurbaqa`,words:[`Qurbaqa`,`Qalam`,`Qor`],art:`qurbaqa`,hint:`19-harf · Undosh tovuş`,type:`undosh`},{num:20,upper:`R`,lower:`r`,example:`Raketa`,words:[`Raketa`,`Rasm`,`Rang`],art:`raketa`,hint:`20-harf · Undosh tovuş`,type:`undosh`},{num:21,upper:`S`,lower:`s`,example:`Soat`,words:[`Soat`,`Suv`,`Savat`],art:`quyos`,hint:`21-harf · Undosh tovuş`,type:`undosh`},{num:22,upper:`Ş`,lower:`ş`,example:`Şar`,words:[`Şar`,`Şir`,`Quyoş`],art:`sir`,hint:`22-harf · Yangi harf (avvalgi Sh sh)`,type:`yangi`,old:`Sh sh`},{num:23,upper:`T`,lower:`t`,example:`Tarozi`,words:[`Tarozi`,`Toğ`,`Tuz`],art:`tarozi`,hint:`23-harf · Undosh tovuş`,type:`undosh`},{num:24,upper:`U`,lower:`u`,example:`Uçqur`,words:[`Uçqur`,`Uzum`,`Uy`],art:`raketa`,hint:`24-harf · Unli tovuş`,type:`unli`},{num:25,upper:`V`,lower:`v`,example:`Vatan`,words:[`Vatan`,`Vodiy`,`Varaqa`],art:`tog`,hint:`25-harf · Undosh tovuş`,type:`undosh`},{num:26,upper:`X`,lower:`x`,example:`Xat`,words:[`Xat`,`Xona`,`Xarita`],art:`kitob`,hint:`26-harf · Undosh tovuş`,type:`undosh`},{num:27,upper:`Y`,lower:`y`,example:`Yulduz`,words:[`Yulduz`,`Yomğir`,`Yöl`],art:`yulduz`,hint:`27-harf · Undosh tovuş`,type:`undosh`},{num:28,upper:`Z`,lower:`z`,example:`Zebra`,words:[`Zebra`,`Zina`,`Zafar`],art:`sir`,hint:`28-harf · Undosh tovuş`,type:`undosh`},{num:29,upper:`ʼ`,lower:`ʼ`,example:`Maʼno`,words:[`Maʼno`,`Aʼlo`,`Sanʼat`],art:`kitob`,hint:`29-belgi · Tutuq belgisi (unli yoki undoshdan keyin)`,type:`belgi`,old:`Tutuq belgisi`}],Sm=[{id:1,glyph:`Ş ş`,subGlyph:`Rasm ovi · sh → ş`,title:`Şir va Şar`,category:`Yangi Alifbo`,year:`Boşlanğiç`,desc:`Vodiy boğida tarkibida Ş harfi bor rasmlarni (Şir, Şar, Quyoş) toping!`,accent:`#68b5ff`,art:`sir`,bg:`valley`,gameType:`picture-hunt`,config:{letter:`Ş`,old:`sh`}},{id:2,glyph:`A – ʼ`,subGlyph:`29 harf yoziş`,title:`Harf Yozib Kör`,category:`Yangi Alifbo`,year:`Boşlanğiç`,desc:`Barcha 29 ta harfni (A dan ʼ belgisigaça) suyuq şisha taxtasida barmoq bilan çizing.`,accent:`#5eead4`,art:`coy`,bg:`prism`,gameType:`letter-trace`,config:{}},{id:3,glyph:`Ö ö`,subGlyph:`Köl öyini · o' → ö`,title:`Ördak va Öt`,category:`Yangi Alifbo`,year:`Boşlanğiç`,desc:`Köldagi Ö harfli ördakçalarni tutib uyasiga kuzating!`,accent:`#ffd166`,art:`ordak`,bg:`valley`,gameType:`duck-pond`,config:{letter:`Ö`}},{id:4,glyph:`Ğ ğ`,subGlyph:`Sehrli fonar · g' → ğ`,title:`Ğoz va Toğ`,category:`Yangi Alifbo`,year:`Boşlanğiç`,desc:`Tungi vodiyda sehrli fonarni yurgizib Ğ harfli rasmlarni yoritib toping!`,accent:`#ff8fab`,art:`tog`,bg:`valley`,gameType:`flashlight-hunt`,config:{letter:`Ğ`}},{id:5,glyph:`29 ta`,subGlyph:`Alifbo · A – ʼ`,title:`Yangi Alifbo`,category:`Alifbo`,year:`Tayyorlov`,desc:`1 dan 29 gaça yangi özbek lotin alifbosi (Ç, Ğ, Ö, Ş, ʼ) va tez topiş PvP maşqi!`,accent:`#a78bfa`,art:`kitob`,bg:`prism`,gameType:`alphabet-board`,config:{}},{id:6,glyph:`A E Ö`,subGlyph:`Musiqiy tovuş`,title:`Unli Ksilofon`,category:`Alifbo`,year:`Boşlanğiç`,desc:`Rasm va sözdagi tuşib qolgan unli harfni şisha klavişda bosing!`,accent:`#56ccf2`,art:`sar`,bg:`aurora`,gameType:`xylophone-notes`,config:{mode:`vowels`}},{id:7,glyph:`_AR`,subGlyph:`Şar yoriş · Ş Ç Ö Ğ`,title:`Harf Ovçisi`,category:`Alifbo`,year:`Tayyorlov`,desc:`Kosmik osmonga kötarilayotgan Ş, Ç, Ö, Ğ şarlaridan töğrisini yoring.`,accent:`#5eead4`,art:`sar`,bg:`space`,gameType:`balloon-pop`,config:{mode:`reformed`}},{id:8,glyph:`ŞA+R`,subGlyph:`Qisqa sözlar`,title:`Rasmli Sözlar`,category:`Öqiş`,year:`İlk qadam`,desc:`Rasmga qarab harflarni ketma-ket tering va ilk qisqa sözlarni yiğing.`,accent:`#ffd166`,art:`quyos`,bg:`prism`,gameType:`word-builder`,config:{level:1}},{id:9,glyph:`QUYOŞ`,subGlyph:`Söz tuziş`,title:`Söz Ustasi`,category:`Öqiş`,year:`Tayyorlov`,desc:`Ş, Ç, Ö, Ğ va ʼ belgilari qatnaşgan sözlarni şisha bloklarda tuzing.`,accent:`#ff8fab`,art:`qozi`,bg:`aurora`,gameType:`word-builder`,config:{level:2}},{id:10,glyph:`1 — 10`,subGlyph:`Olma savati`,title:`Olma Sanaş`,category:`Raqamlar`,year:`İlk qadam`,desc:`Boğdan kerakli miqdordagi olmalarni savatga sanab soling!`,accent:`#68b5ff`,art:`olma`,bg:`valley`,gameType:`apple-basket`,config:{max:10}},{id:11,glyph:`11 — 20`,subGlyph:`Yulduz yiğiş`,title:`Yulduzlar 11–20`,category:`Raqamlar`,year:`Tayyorlov`,desc:`10 talik qutiga qöşimça yulduzlarni yiğib 11 dan 20 gaça sonlarni tuzing.`,accent:`#5eead4`,art:`yulduz`,bg:`space`,gameType:`apple-basket`,config:{max:20}},{id:12,glyph:`1 → 10`,subGlyph:`Qurbaqa sakraşi`,title:`Qurbaqa Yöli`,category:`Raqamlar`,year:`İlk qadam`,desc:`Qurbaqa nilufar yaproqlaridan tartib bilan (1 → 2 → 3...) sakrab ötsin!`,accent:`#ffd166`,art:`qurbaqa`,bg:`valley`,gameType:`frog-hops`,config:{step:1}},{id:13,glyph:`2 · 4 · 6`,subGlyph:`Poyezd vagoni`,title:`Sakraş Poyezdi`,category:`Raqamlar`,year:`Tayyorlov`,desc:`Poyezd vagonlarida yetişmayotgan sonli yuklarni yuklab yölga çiqaring!`,accent:`#ff8fab`,art:`poyezd`,bg:`valley`,gameType:`train-builder`,config:{}},{id:14,glyph:`6 < 9`,subGlyph:`Şisha tarozi`,title:`Katta va Kiçik`,category:`Raqamlar`,year:`Boşlanğiç`,desc:`Tarozi pallalaridagi olmalarni soliştirib (<, =, >) belgisini bosing.`,accent:`#68b5ff`,art:`tarozi`,bg:`prism`,gameType:`balance-scale`,config:{mode:`compare`}},{id:15,glyph:`3 + 4`,subGlyph:`Şirga olma ber`,title:`Şir Ziyofati`,category:`Qöşiş`,year:`İlk qadam`,desc:`Quvnoq şirga olmalarni sanab bering va jami sonini hisoblang!`,accent:`#5eead4`,art:`sir`,bg:`valley`,gameType:`lion-feeder`,config:{}},{id:16,glyph:`7 + 6`,subGlyph:`Pufak qöşiş`,title:`Önlikdan Ötiş`,category:`Qöşiş`,year:`Tayyorlov`,desc:`Suyuq şisha pufaklarini sanab qöşiş javobini toping!`,accent:`#ffd166`,art:`yulduz`,bg:`aurora`,gameType:`bubble-math`,config:{mode:`add`,maxSum:20}},{id:17,glyph:`14 + 12`,subGlyph:`Kosmik raketa`,title:`Raketa Qöşiş`,category:`Qöşiş`,year:`Boşlanğiç`,desc:`Töğri javobli meteoritni lazer bilan urib raketani yulduzlarga uçiring!`,accent:`#ff8fab`,art:`raketa`,bg:`space`,gameType:`rocket-shooter`,config:{mode:`add`}},{id:18,glyph:`? + ? = 10`,subGlyph:`Tarozi 10`,title:`Önlik Tarozisi`,category:`Qöşiş`,year:`İlk qadam`,desc:`Tarozini 10 ga tenglaş uçun yetmayotgan olma toşini pallasiga qöying!`,accent:`#a78bfa`,art:`tarozi`,bg:`prism`,gameType:`balance-scale`,config:{mode:`maketen`}},{id:19,glyph:`9 − 4`,subGlyph:`Şar yorib ayir`,title:`Yorib Ayiriş`,category:`Ayiriş`,year:`İlk qadam`,desc:`Avval şarçalarni yoring, söng neçtasi qolganini sanab javobni toping!`,accent:`#5eead4`,art:`sar`,bg:`aurora`,gameType:`bubble-math`,config:{mode:`sub`,maxVal:10}},{id:20,glyph:`15 − 7`,subGlyph:`20 içida ayir`,title:`Katta Ayiriş`,category:`Ayiriş`,year:`Tayyorlov`,desc:`Pufakçalarni birma-bir yorib 20 içida ayirişni öz közlaringiz bilan köring!`,accent:`#ffd166`,art:`olma`,bg:`space`,gameType:`bubble-math`,config:{mode:`sub`,maxVal:20}},{id:21,glyph:`+ / −`,subGlyph:`Kosmik sinov`,title:`Hisob Raketasi`,category:`Matematika`,year:`Boşlanğiç`,desc:`Qöşiş va ayiriş misollarini tezkor lazer zarbalari bilan yeçing!`,accent:`#ff8fab`,art:`raketa`,bg:`space`,gameType:`rocket-shooter`,config:{mode:`mixed`}},{id:22,glyph:`sh → ş`,subGlyph:`Sehrli konveyer`,title:`Tört Yangi Harf`,category:`Yangi Alifbo`,year:`Tayyorlov`,desc:`Eski sh, ch, o', g' sözlarini sehrli tugma bilan yangi harfga aylantiring!`,accent:`#68b5ff`,art:`kitob`,bg:`prism`,gameType:`magic-zap`,config:{}},{id:23,glyph:`★ ↔ ★`,subGlyph:`Rasmli xotira`,title:`Juftini Top`,category:`Mantiq`,year:`İlk qadam`,desc:`Suyuq şisha kartalarni oçib rasm va söz juftliklarini toping.`,accent:`#5eead4`,art:`gul`,bg:`aurora`,gameType:`memory-art`,config:{mode:`art`}},{id:24,glyph:`100 ★`,subGlyph:`Olimpiada`,title:`Katta Bellaşuv`,category:`Sinov`,year:`Tayyorlov`,desc:`Barcha öyinlardan tasodifiy tanlanadigan katta bellaşuv!`,accent:`#ffd166`,art:`raketa`,bg:`space`,gameType:`final-mix`,config:{}},{id:25,glyph:`▲ ● ★`,subGlyph:`Geometriya`,title:`Şakllar Dunyosi`,category:`Mantiq`,year:`İlk qadam`,desc:`Doira, kvadrat, uçburçak, yulduz va yurak şakllarini soyasidan tanib oling!`,accent:`#68b5ff`,art:`yulduz`,bg:`prism`,gameType:`shadow-match`,config:{}},{id:26,glyph:`🔴 🔵 ?`,subGlyph:`Ketma-ketlik`,title:`Mantiqiy Zanjir`,category:`Mantiq`,year:`Tayyorlov`,desc:`Rang, şakl va sonlar ketma-ketligini davom ettiring!`,accent:`#a78bfa`,art:`gul`,bg:`aurora`,gameType:`pattern-next`,config:{}},{id:27,glyph:`🎨`,subGlyph:`Rang aralaşuvi`,title:`Ranglar Sehrgarligi`,category:`Ijod`,year:`İlk qadam`,desc:`Ikki rangni aralaştirib qaysi yangi rang hosil bölişini toping!`,accent:`#ff8fab`,art:`sar`,bg:`valley`,gameType:`color-mixer`,config:{}},{id:28,glyph:`👏 1·2·3`,subGlyph:`Böğin sanaş`,title:`Böğin Çapagi`,category:`Öqiş`,year:`Tayyorlov`,desc:`Rasm va sözdagi böğinlar sonini qarsak bilan sanab toping!`,accent:`#5eead4`,art:`ordak`,bg:`valley`,gameType:`syllable-clap`,config:{}},{id:29,glyph:`Unli/Und`,subGlyph:`29 ta harf`,title:`Tovuş Ajratiş`,category:`Alifbo`,year:`Tayyorlov`,desc:`Harflarni Unli (A E I O U Ö) va Undosh savatlariga ajrating!`,accent:`#ffd166`,art:`kitob`,bg:`prism`,gameType:`vowel-sort`,config:{}},{id:30,glyph:`↔ Zid`,subGlyph:`Maʼno juftlari`,title:`Zid Sözlar`,category:`Öqiş`,year:`Tayyorlov`,desc:`Katta↔Kiçik, Issiq↔Sovuq kabi qarama-qarşi maʼnoli sözlarni toping!`,accent:`#56ccf2`,art:`tarozi`,bg:`aurora`,gameType:`opposite-words`,config:{}},{id:31,glyph:`🕒 Soat`,subGlyph:`Vaqt örganiş`,title:`Soat Vaqti`,category:`Mantiq`,year:`Tayyorlov`,desc:`Şisha soat strelkalariga qarab aniq soat va yarim soatni toping!`,accent:`#68b5ff`,art:`quyos`,bg:`prism`,gameType:`clock-time`,config:{}},{id:32,glyph:`Ç ç`,subGlyph:`Rasm ovi · ch → ç`,title:`Çoynak va Çana`,category:`Yangi Alifbo`,year:`Boşlanğiç`,desc:`Tarkibida yangi Ç ç harfi qatnaşgan rasmli kartalarni ovlang!`,accent:`#5eead4`,art:`coy`,bg:`valley`,gameType:`picture-hunt`,config:{letter:`Ç`,old:`ch`}},{id:33,glyph:`Ö ö`,subGlyph:`Tungi fonar · o' → ö`,title:`Örmon Fonari`,category:`Yangi Alifbo`,year:`Boşlanğiç`,desc:`Tungi ördak va qözi vodiysida Ö ö harfli rasmlarni fonar bilan toping!`,accent:`#ffd166`,art:`qozi`,bg:`valley`,gameType:`flashlight-hunt`,config:{letter:`Ö`}},{id:34,glyph:`5 · 10 · 15`,subGlyph:`Tez sakraş`,title:`Beşlik Sakraş`,category:`Raqamlar`,year:`Tayyorlov`,desc:`Qurbaqani 5 qadamlik nilufar yaproqlaridan marra tomon sakrating!`,accent:`#5eead4`,art:`qurbaqa`,bg:`valley`,gameType:`frog-hops`,config:{step:5}},{id:35,glyph:`Maʼno`,subGlyph:`29-belgi · ʼ`,title:`Tutuq ʼ Ustasi`,category:`Yangi Alifbo`,year:`Tayyorlov`,desc:`Maʼno, Aʼlo, Sanʼat kabi sözlardagi tutuq belgisi va maxsus harf şarlarini yoring!`,accent:`#a78bfa`,art:`kitob`,bg:`space`,gameType:`balloon-pop`,config:{mode:`tutuq`}},{id:36,glyph:`QALAM`,subGlyph:`Maktab anjomi`,title:`Maktab Sumkasi`,category:`Öqiş`,year:`Tayyorlov`,desc:`Qalam, Kitob, Sumka, Maktab kabi asosiy maktab sözlarini harflardan yiğing!`,accent:`#ff8fab`,art:`kitob`,bg:`prism`,gameType:`word-builder`,config:{level:3}},{id:37,glyph:`4 + 3`,subGlyph:`10 içida tez`,title:`Tez Hisob 10`,category:`Matematika`,year:`İlk qadam`,desc:`Maktabga tayyorlov uçun 10 içidagi eng oson qöşiş va ayiriş meteorlari!`,accent:`#68b5ff`,art:`raketa`,bg:`space`,gameType:`rocket-shooter`,config:{mode:`easy10`}},{id:38,glyph:`A ↔ Ş`,subGlyph:`29 harf xotira`,title:`Alifbo Xotira`,category:`Alifbo`,year:`Boşlanğiç`,desc:`Harf va unga mos rasm-söz juftliklarini xotirada saqlab toping!`,accent:`#ffd166`,art:`sir`,bg:`aurora`,gameType:`memory-art`,config:{mode:`alpha`}},{id:39,glyph:`_ITOB`,subGlyph:`Boş harf ovi`,title:`Boş Harfni Top`,category:`Öqiş`,year:`İlk qadam`,desc:`Rasmga qarab sözning birinçi tuşib qolgan harfini 29 ta harf içidan tanlang!`,accent:`#5eead4`,art:`gul`,bg:`valley`,gameType:`first-letter`,config:{}},{id:40,glyph:`🏆 40`,subGlyph:`Super sayohat`,title:`Katta Sayohat`,category:`Sinov`,year:`Tayyorlov`,desc:`Barcha öyinlardan tasodifiy marafon — PvP musobaqa uçun eng zör sinov!`,accent:`#ffd166`,art:`yulduz`,bg:`space`,gameType:`final-mix`,config:{}}];function Cm(e,t,n,r,i=0,a=0){e.clearRect(0,0,t,n);let o=um();if(bm(e,t,n,r.bg||`aurora`,o?0:.44-a*.1),o){let r=e.createLinearGradient(0,0,t,n);r.addColorStop(0,`rgba(248, 251, 255, ${.86-a*.05})`),r.addColorStop(.5,`rgba(232, 242, 254, ${.82-a*.05})`),r.addColorStop(1,`rgba(215, 231, 252, ${.86-a*.05})`),e.fillStyle=r,e.fillRect(0,0,t,n)}e.save();let s=Math.sin(i*.45+r.id)*14,c=e.createLinearGradient(0,0,t*.7,n);o?(c.addColorStop(0,`rgba(255, 255, 255, 0.72)`),c.addColorStop(.5,$p(r.accent,.1)),c.addColorStop(1,`rgba(255, 255, 255, 0.0)`)):(c.addColorStop(0,`rgba(190, 230, 255, 0.12)`),c.addColorStop(.5,`rgba(94, 234, 212, 0.04)`),c.addColorStop(1,`rgba(10, 14, 28, 0.0)`)),e.fillStyle=c,e.beginPath(),e.moveTo(0,0),e.lineTo(t*.62+s,0),e.lineTo(t*.34-s*.5,n),e.lineTo(0,n),e.closePath(),e.fill();let l=e.createLinearGradient(t*.35,0,t,n);l.addColorStop(0,`rgba(255, 255, 255, 0.0)`),l.addColorStop(.55,$p(r.accent,o?.16+.08*a:.11+.09*a)),l.addColorStop(1,o?`rgba(255, 255, 255, 0.52)`:`rgba(165, 210, 255, 0.14)`),e.fillStyle=l,e.beginPath(),e.moveTo(t*.58+s,0),e.lineTo(t,0),e.lineTo(t,n*.76),e.lineTo(t*.42-s*.4,n),e.closePath(),e.fill(),e.strokeStyle=o?`rgba(15, 23, 42, 0.08)`:`rgba(220, 242, 255, 0.18)`,e.lineWidth=1,e.beginPath(),e.moveTo(t*.58+s,0),e.lineTo(t*.42-s*.4,n),e.stroke();let u=(i*.22+r.id*.17)%1.8-.4,d=e.createLinearGradient(t*(u-.18),0,t*(u+.18),n);d.addColorStop(0,`rgba(255, 255, 255, 0)`),d.addColorStop(.5,o?`rgba(255, 255, 255, ${.42+a*.22})`:`rgba(225, 245, 255, ${.11+a*.1})`),d.addColorStop(1,`rgba(255, 255, 255, 0)`),e.fillStyle=d,e.fillRect(0,0,t,n),e.restore();let f=t*(.48+.1*a),p=e.createRadialGradient(t*.78,n*.4,6,t*.78,n*.4,f);p.addColorStop(0,$p(r.accent,o?.28+.16*a:.34+.2*a)),p.addColorStop(.55,$p(r.accent,.08)),p.addColorStop(1,o?`rgba(255,255,255,0)`:`rgba(10,12,18,0)`),e.fillStyle=p,e.fillRect(0,0,t,n);let m=t*.5,h=n*.68;e.save(),wm(e,12,12,m,h,16);let g=e.createLinearGradient(12,12,12+m*.4,12+h);o?(g.addColorStop(0,`rgba(255, 255, 255, 0.94)`),g.addColorStop(.45,`rgba(242, 247, 255, 0.80)`),g.addColorStop(1,`rgba(255, 255, 255, 0.88)`)):(g.addColorStop(0,`rgba(255, 255, 255, 0.24)`),g.addColorStop(.38,`rgba(180, 220, 255, 0.10)`),g.addColorStop(.65,`rgba(14, 18, 34, 0.52)`),g.addColorStop(1,`rgba(160, 215, 255, 0.14)`)),e.fillStyle=g,e.fill();let _=e.createLinearGradient(12,12,12+m,12+h);o?(_.addColorStop(0,a>.3?`rgba(2, 132, 199, 0.55)`:`rgba(15, 23, 42, 0.16)`),_.addColorStop(.5,$p(r.accent,.42)),_.addColorStop(1,`rgba(15, 23, 42, 0.12)`)):(_.addColorStop(0,a>.3?`rgba(255, 255, 255, 0.72)`:`rgba(255, 255, 255, 0.44)`),_.addColorStop(.5,`rgba(130, 215, 255, 0.34)`),_.addColorStop(1,`rgba(255, 255, 255, 0.26)`)),e.strokeStyle=_,e.lineWidth=1.4,e.stroke(),e.strokeStyle=o?`rgba(255, 255, 255, 0.96)`:`rgba(255, 255, 255, 0.62)`,e.lineWidth=1.2,e.beginPath(),e.moveTo(30,13.5),e.lineTo(12+m-18,13.5),e.stroke(),e.restore(),e.save();let v=n*(.58+a*.05);im(e,r.art||`gul`,t*.77,n*.4,v,i+r.id*.4,r.accent),e.restore(),e.save(),e.fillStyle=o?`#0f172a`:`#ffffff`,e.textBaseline=`middle`,e.textAlign=`left`;let y=r.glyph.length;e.font=`700 ${y<=3?58:y<=6?42:31}px "Nunito", ui-serif, serif`,e.fillText(r.glyph,30,12+h*.39),e.restore();let b=r.subGlyph;e.font=`700 12px "Nunito", ui-sans-serif, sans-serif`;let x=e.measureText(b).width,S=12+h*.64;e.fillStyle=$p(r.accent,o?.22:.28),wm(e,30,S,x+18,24,999),e.fill(),e.strokeStyle=$p(r.accent,o?.72:.78),e.lineWidth=1.1,e.stroke(),e.fillStyle=o?`#0f172a`:`#ffffff`,e.textBaseline=`middle`,e.textAlign=`left`,e.fillText(b,39,S+12);let C=n*.775,w=e.createLinearGradient(0,C,t,n);o?(w.addColorStop(0,`rgba(255, 255, 255, 0.90)`),w.addColorStop(1,`rgba(235, 244, 255, 0.86)`)):(w.addColorStop(0,`rgba(10, 14, 28, 0.76)`),w.addColorStop(1,`rgba(14, 20, 38, 0.68)`)),e.fillStyle=w,e.fillRect(0,C,t,n-C),e.strokeStyle=o?`rgba(15, 23, 42, 0.12)`:`rgba(210, 235, 255, 0.30)`,e.beginPath(),e.moveTo(0,C),e.lineTo(t,C),e.stroke(),e.save(),e.fillStyle=o?`#0f172a`:`#ffffff`,e.textBaseline=`middle`,e.textAlign=`left`,e.font=`700 14.5px "Nunito", ui-sans-serif, sans-serif`,e.fillText(r.title,18,n*.89),e.textAlign=`right`,e.fillStyle=o?a>.3?`#0284c7`:`#0369a1`:a>.3?r.accent:`rgba(225, 240, 255, 0.9)`,e.font=`600 13px "Nunito", ui-serif, serif`,e.fillText(`${r.year} · Öynaş →`,t-18,n*.89),e.restore();let T=e.createLinearGradient(0,0,t,n);o?(T.addColorStop(0,a>.35?`rgba(2, 132, 199, 0.55)`:`rgba(15, 23, 42, 0.18)`),T.addColorStop(.5,`rgba(255, 255, 255, 0.85)`),T.addColorStop(1,`rgba(15, 23, 42, 0.16)`)):(T.addColorStop(0,a>.35?`rgba(255, 255, 255, 0.75)`:`rgba(255, 255, 255, 0.40)`),T.addColorStop(.5,`rgba(130, 215, 255, 0.32)`),T.addColorStop(1,`rgba(255, 255, 255, 0.24)`)),e.strokeStyle=T,e.lineWidth=1.8,e.strokeRect(.9,.9,t-1.8,n-1.8)}function wm(e,t,n,r,i,a){let o=Math.min(a,r/2,i/2);e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()}var Tm=null,$=null,Em=null,Dm=null,Om=null,km=null,Am=null,jm=new Set;function Mm(e,t){let n=window.setTimeout(()=>{jm.delete(n),e()},t);return jm.add(n),n}function Nm(){if(jm.forEach(e=>window.clearTimeout(e)),jm.clear(),Am){try{Am()}catch{}Am=null}}function Pm(){return!!(Tm&&Tm.classList.contains(`is-open`))}function Fm(){Tm&&Pm()&&(Nm(),Tm.classList.remove(`is-open`),Tm.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`is-game-open`),window.dispatchEvent(new Event(`alif:gamemodal`)),Q.to(Tm,{opacity:0,duration:.28,ease:`power2.in`,onComplete:()=>{Pm()||(Tm.style.visibility=`hidden`,$.innerHTML=``,km&&km())}}))}function Im(){Tm||(Tm=document.getElementById(`edu-modal`),$=document.getElementById(`edu-body`),Em=document.getElementById(`edu-title`),Dm=document.getElementById(`edu-sub`),Om=document.getElementById(`edu-score`),document.getElementById(`edu-close`).addEventListener(`click`,Fm),Tm.addEventListener(`click`,e=>{e.target===Tm&&Fm()}))}var Lm=new Map;function Rm(e,t,n,r=e=>JSON.stringify(e)){let i=Lm.get(e);i||(i=new Set,Lm.set(e,i));let a=t.filter(e=>!i.has(r(e)));if(a.length>=n){let e=Vm(a).slice(0,n);return e.forEach(e=>i.add(r(e))),e}let o=Vm(a);i.clear();let s=new Set(o.map(r)),c=Vm(t.filter(e=>!s.has(r(e)))).slice(0,Math.max(0,n-o.length)),l=Vm([...o,...c]);return l.forEach(e=>i.add(r(e))),l}function zm(e,t,n,r=28){let i=Lm.get(e);i||(i=new Set,Lm.set(e,i)),i.size>48&&i.clear();let a=t();for(let e=0;e<r;e++){let e=n(a);if(!i.has(e))return i.add(e),a;a=t()}return i.clear(),i.add(n(a)),a}function Bm(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Vm(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Hm(e,t){let n=new Set([e]);for(let e of Vm(t)){if(n.size>=4)break;n.add(e)}return Vm(Array.from(n))}function Um(e=320){let t=document.createElement(`div`);t.className=`edu-canvas-wrap`;let n=document.createElement(`canvas`);n.className=`edu-game-canvas`,t.appendChild(n),$.appendChild(t);let r=window.innerWidth,i=window.innerHeight,a=r>=1560&&i>=880?1.32:r>=1200&&i>=740?1.16:1,o=Math.min(window.devicePixelRatio||1,mm()?1:1.5),s=Math.max(300,t.clientWidth||680),c=Math.min(Math.round(i*.52),Math.round(e*a));n.width=Math.round(s*o),n.height=Math.round(c*o),n.style.width=`100%`,n.style.height=`${c}px`;let l=n.getContext(`2d`);return l.setTransform(o,0,0,o,0,0),{wrap:t,canvas:n,ctx:l,w:s,h:c,getXY(e){let t=n.getBoundingClientRect(),r=e.touches?e.touches[0].clientX:e.clientX,i=e.touches?e.touches[0].clientY:e.clientY;return{x:(r-t.left)/t.width*s,y:(i-t.top)/t.height*c}}}}function Wm(e,t,n,r,i=14){for(let a=0;a<i;a++){let o=Math.PI*2*a/i+Math.random()*.4,s=.9+Math.random()*2.1;e.push({x:t,y:n,vx:Math.cos(o)*s,vy:Math.sin(o)*s-.7,life:1,color:r,r:2.5+Math.random()*3})}}function Gm(e,t){for(let n=t.length-1;n>=0;n--){let r=t[n];r.x+=r.vx,r.y+=r.vy,r.vy+=.045,r.life-=.018,r.life<=0?t.splice(n,1):(e.fillStyle=$p(r.color,r.life),e.beginPath(),e.arc(r.x,r.y,r.r*r.life,0,Math.PI*2),e.fill())}}var Km=[{q:`Avvalgi «Ch ch» yangi alifboda nechanchi va qaysi harf?`,opts:[`3 · Ç ç`,`22 · Ş ş`,`8 · Ğ ğ`,`17 · Ö ö`],a:`3 · Ç ç`},{q:`Avvalgi «Sh sh» qaysi harfga o‘zgargan?`,opts:[`Ş ş (22)`,`Ç ç (3)`,`S s (21)`,`Ğ ğ (8)`],a:`Ş ş (22)`},{q:`Avvalgi «Gʻ gʻ» qaysi harf bilan yoziladi?`,opts:[`Ğ ğ (8)`,`G g (7)`,`Q q (19)`,`H h (9)`],a:`Ğ ğ (8)`},{q:`Avvalgi «Oʻ oʻ» yangi alifboda qanday yoziladi?`,opts:[`Ö ö (17)`,`O o (16)`,`U u (24)`,`I i (10)`],a:`Ö ö (17)`},{q:`Alifboning 29-o‘rnida qaysi belgi turadi?`,opts:[`ʼ (tutuq)`,`Ng ng`,`Ş ş`,`Ç ç`],a:`ʼ (tutuq)`},{q:`«Quyosh» so‘zi yangi alifboda qanday yoziladi?`,opts:[`Quyoş`,`Quyos`,`Quyoch`,`Qöyoş`],a:`Quyoş`},{q:`«O‘rdak» so‘zining to‘g‘ri yangi yozuvi:`,opts:[`Ördak`,`Ordak`,`Urdak`,`Ğördak`],a:`Ördak`},{q:`«Choynak» so‘zi qaysi harf bilan boshlanadi?`,opts:[`Ç`,`Ş`,`C`,`Ğ`],a:`Ç`},{q:`«Ma’no» so‘zida 29-belgi qanday qo‘yiladi?`,opts:[`Maʼno`,`Mano`,`Mağno`,`Maçno`],a:`Maʼno`},{q:`«G‘oz» so‘zining bosh harfi qaysi?`,opts:[`Ğ`,`G`,`Q`,`Ö`],a:`Ğ`},{q:`«Bog‘» so‘zi oxirida qaysi harf yoziladi?`,opts:[`ğ`,`g`,`q`,`ç`],a:`ğ`},{q:`«Shamol» so‘zining yangi shakli:`,opts:[`Şamol`,`Çamol`,`Samol`,`Ğamol`],a:`Şamol`},{q:`Alifboda 1-o‘rindagi unli harf:`,opts:[`A a`,`O o`,`E e`,`I i`],a:`A a`},{q:`«A’lo» so‘zidagi belgi nechanchi o‘rinda?`,opts:[`29 · ʼ`,`28 · Z`,`17 · Ö`,`3 · Ç`],a:`29 · ʼ`},{q:`Qaysi harf UNLI tovush hisoblanadi?`,opts:[`Ö ö`,`Ş ş`,`Ç ç`,`Ğ ğ`],a:`Ö ö`},{q:`«Ol-ma» so‘zida nechta bo‘g‘in bor?`,opts:[`2 ta`,`1 ta`,`3 ta`,`4 ta`],a:`2 ta`},{q:`«Ka-pa-lak» so‘zi nechta bo‘g‘indan iborat?`,opts:[`3 ta`,`2 ta`,`1 ta`,`4 ta`],a:`3 ta`},{q:`«Katta» so‘zining ziddi qaysi?`,opts:[`Kiçik`,`Uzun`,`Issiq`,`Tez`],a:`Kiçik`},{q:`«Issiq» so‘zining ziddi qaysi?`,opts:[`Sovuq`,`Baland`,`Yangi`,`Şirin`],a:`Sovuq`},{q:`«Qalam» so‘zi qaysi harf bilan boshlanadi?`,opts:[`Q`,`K`,`G`,`Ğ`],a:`Q`},{q:`Qizil va sariq rang qo‘shilsa qaysi rang chiqadi?`,opts:[`Zarğaldoq`,`Yaşil`,`Kök`,`Qora`],a:`Zarğaldoq`},{q:`Ko‘k va sariq rang qo‘shilsa qaysi rang bo‘ladi?`,opts:[`Yaşil`,`Binafşa`,`Puşti`,`Kulrang`],a:`Yaşil`},{q:`Alifboda oxirgi harf (28-o‘rin) qaysi?`,opts:[`Z z`,`Y y`,`X x`,`V v`],a:`Z z`},{q:`«Kitob» so‘zida nechta bo‘g‘in bor?`,opts:[`2 ta`,`1 ta`,`3 ta`,`4 ta`],a:`2 ta`}];function qm(){return zm(`pvp-math-duel`,()=>{let e=Bm(0,2);if(e===0){let e=Bm(3,14),t=Bm(2,12),n=e+t;return{q:`${e} + ${t} = ?`,opts:Hm(n,[n-2,n-1,n+1,n+2,n+3].filter(e=>e>0&&e!==n)).map(String),a:String(n)}}if(e===1){let e=Bm(8,20),t=Bm(2,e-1),n=e-t;return{q:`${e} − ${t} = ?`,opts:Hm(n,[n-2,n-1,n+1,n+2,n+3].filter(e=>e>=0&&e!==n)).map(String),a:String(n)}}let t=Bm(2,19),n=Bm(2,19),r=t<n?`<`:t>n?`>`:`=`;return{q:`${t}  ?  ${n}`,opts:Vm([`<`,`=`,`>`]),a:r}},e=>e.q)}function Jm(e=`lang`){Ym({id:99,glyph:`⚔️ PvP`,subGlyph:`2 Öyinçi Duel`,title:e===`math`?`Tez Hisob Dueli (PvP)`:`Tez Alifbo Dueli (PvP)`,category:e===`math`?`Matematika PvP`:`Yangi Alifbo PvP`,year:`1 vs 2`,accent:`#5eead4`,gameType:`pvp-duel`,config:{track:e,directPvp:!0}})}function Ym(e,t){Im(),Nm(),km=t||null,Em.textContent=e.title,Dm.textContent=`${e.category}, ${e.year}`;let n=Tm.querySelector(`.edu-top-right`),r=n.querySelector(`#edu-pvp-toggle`);r||(r=document.createElement(`button`),r.type=`button`,r.id=`edu-pvp-toggle`,r.className=`pill-btn edu-pvp-toggle`,n.prepend(r));let i=n.querySelector(`#edu-head-replay`);i||(i=document.createElement(`button`),i.type=`button`,i.id=`edu-head-replay`,i.className=`pill-btn`,i.textContent=`↻ Qayta`,i.title=`Yangi tasodifiy savollar bilan qayta boşlaş`,n.insertBefore(i,r.nextSibling));let a=Tm.querySelector(`.edu-stage`),o=a.querySelector(`#edu-pvp-bar`);o||(o=document.createElement(`div`),o.id=`edu-pvp-bar`,o.className=`edu-pvp-bar`,a.insertBefore(o,$));let s=0,c=!!(e.config&&e.config.directPvp),l=1,u=0,d=0,f=()=>{if(r.classList.toggle(`is-active`,c),r.textContent=c?`⚔️ PvP: Yoqilgan`:`⚔️ PvP`,c){Om.style.display=`none`,o.style.display=`flex`,o.innerHTML=`
        <div class="edu-pvp-player p1 ${l===1?`is-turn`:``}">
          <span>1-Öyinçi</span><strong>★ ${u}</strong>
        </div>
        <div class="edu-pvp-mid">
          <span class="edu-pvp-turn-tag">${e.gameType===`pvp-duel`?`Jonli Duel`:`Navbat: ${l}-Öyinçi`}</span>
          ${e.gameType===`pvp-duel`?``:`<button type="button" class="pill-btn edu-fast-duel-btn">⚡ Tez Duel</button>`}
        </div>
        <div class="edu-pvp-player p2 ${l===2?`is-turn`:``}">
          <span>2-Öyinçi</span><strong>★ ${d}</strong>
        </div>
      `;let t=o.querySelector(`.edu-fast-duel-btn`);t&&(t.onclick=()=>{g({track:/Alifbo|Öqiş|Harf|Ijod/i.test(e.category||``)?`lang`:`math`})})}else Om.style.display=``,o.style.display=`none`,Om.textContent=`★ ${s}`},p=(e=1)=>{s+=e,c&&(l===1?u+=e:d+=e),f()},m=()=>{s=0,l=1,u=0,d=0,f(),B(e)};r.onclick=()=>{c=!c,m()},i.onclick=()=>{m()},f(),Tm.classList.add(`is-open`),Tm.style.visibility=`visible`,Tm.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`is-game-open`),window.dispatchEvent(new Event(`alif:gamemodal`)),Q.killTweensOf(Tm),Q.fromTo(Tm,{opacity:0},{opacity:1,duration:.34,ease:`power2.out`}),Q.fromTo(a,{scale:.88,y:22},{scale:1,y:0,duration:.62,ease:`expo.out`});function h(t,n){if(Nm(),c&&e.gameType!==`pvp-duel`){if(l===1){$.innerHTML=`
          <div class="edu-finish">
            <div class="edu-finish-stars">⚔️</div>
            <h3 class="edu-finish-title">1-Öyinçi yakunladi: ★ ${u}</h3>
            <p class="edu-finish-desc">Endi 2-Öyinçi uçun yangi tasodifiy topşiriqlar tayyor!</p>
            <div class="edu-finish-actions">
              <button type="button" class="edu-btn-primary" id="edu-p2-start">2-Öyinçi Boşlasin →</button>
              <button type="button" class="pill-btn" id="edu-done">Çiqiş</button>
            </div>
          </div>
        `,$.querySelector(`#edu-p2-start`).addEventListener(`click`,()=>{l=2,f(),B(e)}),$.querySelector(`#edu-done`).addEventListener(`click`,Fm);return}$.innerHTML=`
        <div class="edu-finish">
          <div class="edu-finish-stars">🏆</div>
          <h3 class="edu-finish-title">${u>d?`🏆 1-Öyinçi Ğolib!`:d>u?`🏆 2-Öyinçi Ğolib!`:`🤝 Durang! Ikkalasi ham teng!`}</h3>
          <p class="edu-finish-desc">1-Öyinçi: <strong>★ ${u}</strong> &nbsp;·&nbsp; 2-Öyinçi: <strong>★ ${d}</strong></p>
          <div class="edu-finish-actions">
            <button type="button" class="edu-btn-primary" id="edu-replay">Yana PvP öynaş</button>
            <button type="button" class="pill-btn" id="edu-done">Çiqiş</button>
          </div>
        </div>
      `,$.querySelector(`#edu-replay`).addEventListener(`click`,m),$.querySelector(`#edu-done`).addEventListener(`click`,Fm)}else $.innerHTML=`
      <div class="edu-finish">
        <div class="edu-finish-stars">★★★</div>
        <h3 class="edu-finish-title">${t||`Barakalla!`}</h3>
        <p class="edu-finish-desc">${n||`Siz ${s} ta yulduzça topladingiz!`}</p>
        <div class="edu-finish-actions">
          <button type="button" class="edu-btn-primary" id="edu-replay">Yana öynaş</button>
          <button type="button" class="pill-btn" id="edu-done">Çiqiş</button>
        </div>
      </div>
    `,$.querySelector(`#edu-replay`).addEventListener(`click`,()=>{s=0,f(),B(e)}),$.querySelector(`#edu-done`).addEventListener(`click`,Fm)}function g(e={}){Nm(),l=1,s=0,u=0,d=0,f();let t=(e.track||`lang`)===`math`?Array.from({length:7},()=>qm()):Rm(`pvp-lang-duel`,Km,7,e=>e.q),n=0,r=()=>{if(Nm(),n>=t.length){$.innerHTML=`
          <div class="edu-finish">
            <div class="edu-finish-stars">⚔️</div>
            <h3 class="edu-finish-title">${u>d?`🏆 1-Öyinçi Tez Duel Ğolibi!`:d>u?`🏆 2-Öyinçi Tez Duel Ğolibi!`:`🤝 Durang! Ikkalasi ham teng!`}</h3>
            <p class="edu-finish-desc">1-Öyinçi: <strong>★ ${u}</strong> &nbsp;·&nbsp; 2-Öyinçi: <strong>★ ${d}</strong></p>
            <div class="edu-finish-actions">
              <button type="button" class="edu-btn-primary" id="edu-duel-replay">Yangi Savollar bilan Duel →</button>
              <button type="button" class="pill-btn" id="edu-done">Çiqiş</button>
            </div>
          </div>
        `,$.querySelector(`#edu-duel-replay`).addEventListener(`click`,()=>g(e)),$.querySelector(`#edu-done`).addEventListener(`click`,Fm);return}let i=t[n];n++;let a=Vm(i.opts),o=Vm(i.opts),c=!1,l=!1,p=!1;$.innerHTML=`
        <div class="edu-hud">
          <span>⚔️ Tez Duel · Savol ${n} / ${t.length}</span>
          <span class="edu-hud-pill">Kim birinçi töğri topsa +1 ★</span>
        </div>
        <div class="edu-duel-question">${i.q}</div>
        <div class="edu-duel-arena">
          <div class="edu-duel-side p1">
            <div class="edu-duel-side-head"><span>1-Öyinçi</span><small>★ ${u}</small></div>
            <div class="edu-duel-opts">
              ${a.map(e=>`<button type="button" class="edu-opt edu-duel-btn" data-p="1" data-v="${e}">${e}</button>`).join(``)}
            </div>
          </div>
          <div class="edu-duel-side p2">
            <div class="edu-duel-side-head"><span>2-Öyinçi</span><small>★ ${d}</small></div>
            <div class="edu-duel-opts">
              ${o.map(e=>`<button type="button" class="edu-opt edu-duel-btn" data-p="2" data-v="${e}">${e}</button>`).join(``)}
            </div>
          </div>
        </div>
        <div class="edu-feedback" id="duel-fb">Ikkala öyinçi barobar javobni bosing!</div>
      `,$.querySelectorAll(`.edu-duel-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(c)return;let t=Number(e.dataset.p),n=e.dataset.v;if(t===1&&l||t===2&&p)return;let a=$.querySelector(`#duel-fb`);n===i.a?(c=!0,e.classList.add(`is-correct`),t===1?u++:d++,s++,f(),a&&(a.textContent=`${t}-Öyinçi birinçi topdi! +1 ★`),Mm(r,1050)):(e.classList.add(`is-wrong`),t===1?(l=!0,Mm(()=>{l=!1,e.classList.remove(`is-wrong`)},750)):(p=!0,Mm(()=>{p=!1,e.classList.remove(`is-wrong`)},750)),a&&(a.textContent=`${t}-Öyinçi xato bosdi!`))})})};r()}function _(t){Nm();let n=t.letter||`Ş`,r=0,i={Ş:[{word:`Şar`,art:`sar`},{word:`Şir`,art:`sir`},{word:`Quyoş`,art:`quyos`},{word:`Şahar`,art:`raketa`},{word:`Şamol`,art:`gul`},{word:`Şirin`,art:`olma`},{word:`Şahzod`,art:`yulduz`},{word:`Şoli`,art:`kitob`},{word:`Şarpa`,art:`tog`}],Ç:[{word:`Çoynak`,art:`coy`},{word:`Çana`,art:`poyezd`},{word:`Çiroq`,art:`quyos`},{word:`Çumoli`,art:`qurbaqa`},{word:`Quşça`,art:`ordak`},{word:`Keça`,art:`yulduz`},{word:`Köpçik`,art:`sar`},{word:`Ölçov`,art:`tarozi`},{word:`Gulça`,art:`gul`}]},a=i[n]||i.Ş,o=[{word:`Olma`,art:`olma`},{word:`Kitob`,art:`kitob`},{word:`Lola`,art:`gul`},{word:`Poyezd`,art:`poyezd`},{word:`Yulduz`,art:`yulduz`},{word:`Tarozi`,art:`tarozi`},{word:`Ördak`,art:`ordak`},{word:`Ğoz`,art:`tog`},{word:`Qözi`,art:`qozi`},{word:`Non`,art:`quyos`}].filter(e=>!e.word.toUpperCase().includes(n)),s=Rm(`pic-g-${n}`,a,9,e=>e.word),c=Rm(`pic-b-${n}`,o,9,e=>e.word);function l(){if(Nm(),r>=3){h(`Ajoyib ovçi!`,`"${n}" harfini rasmlardan aʼlo darajada topdingiz!`);return}let t=s.slice(r*3,r*3+3).map(e=>({...e,good:!0})),i=c.slice(r*3,r*3+3).map(e=>({...e,good:!1}));r++;let a=Vm([...t,...i]);$.innerHTML=`
        <div class="edu-hud">
          <span>Bosqiç ${r} / 3</span>
          <span class="edu-hud-pill" id="hunt-found">Topildi: 0 / 3</span>
        </div>
        <div class="edu-banner">
          Rasmli şisha kartalardan tarkibida <strong>"${n} ${n.toLowerCase()}"</strong> harfi borlarini bosing!
        </div>
      `;let{canvas:o,ctx:u,w:d,h:f,getXY:m}=Um(310),g=[],_=0,v=a.map((e,t)=>{let n=t%3,r=Math.floor(t/3);return{...e,baseX:d*(.19+n*.31),baseY:f*(.28+r*.44),x:d*(.19+n*.31),y:f*(.28+r*.44),r:Math.min(d/7.5,58),phase:t*1.1,collected:!1,shake:0,scale:1}}),y=0,b=t=>{let n=t*.001;u.clearRect(0,0,d,f),bm(u,d,f,`valley`,.28);for(let t of v)t.collected&&(t.scale=Math.max(0,t.scale-.035),t.scale<=.02)||(t.shake*=.88,t.x=t.baseX+Math.sin(n*.7+t.phase)*5+Math.sin(n*32)*t.shake*6,t.y=t.baseY+Math.cos(n*.85+t.phase)*4,u.save(),u.translate(t.x,t.y),u.scale(t.scale,t.scale),u.fillStyle=t.shake>.1?`rgba(255,143,171,0.28)`:`rgba(255,255,255,0.12)`,u.strokeStyle=t.shake>.1?`#ff8fab`:`rgba(255,255,255,0.28)`,u.lineWidth=1.5,wm(u,-t.r*1.15,-t.r*.92,t.r*2.3,t.r*1.84,16),u.fill(),u.stroke(),im(u,t.art,0,-t.r*.12,t.r*1.25,n+t.phase,e.accent),u.font=`600 14px "Nunito", ui-sans-serif, sans-serif`,u.textAlign=`center`,u.textBaseline=`middle`,u.fillStyle=`#ffffff`,u.fillText(t.word,0,t.r*.65),u.restore());Gm(u,g),y=requestAnimationFrame(b)};y=requestAnimationFrame(b);let x=e=>{let t=m(e);for(let e of v)if(!e.collected&&Math.abs(t.x-e.x)<e.r*1.15&&Math.abs(t.y-e.y)<e.r*.92){if(e.good){e.collected=!0,_++,p(1),Wm(g,e.x,e.y,`#5eead4`,18);let t=$.querySelector(`#hunt-found`);t&&(t.textContent=`Topildi: ${_} / 3`),_>=3&&Mm(l,1150)}else e.shake=1,Wm(g,e.x,e.y,`#ff8fab`,8);break}};o.addEventListener(`pointerdown`,x),Am=()=>{cancelAnimationFrame(y),o.removeEventListener(`pointerdown`,x)}}l()}function v(e){Nm();let t=e.letter||`Ğ`,n={Ğ:[{word:`Ğoz`,art:`ordak`,good:!0},{word:`Toğ`,art:`tog`,good:!0},{word:`Boğ`,art:`olma`,good:!0},{word:`Ğalla`,art:`gul`,good:!0},{word:`Ğor`,art:`tog`,good:!0},{word:`Jilğa`,art:`quyos`,good:!0}],Ö:[{word:`Ördak`,art:`ordak`,good:!0},{word:`Qözi`,art:`qozi`,good:!0},{word:`Örmon`,art:`tog`,good:!0},{word:`Jöja`,art:`ordak`,good:!0},{word:`Öt`,art:`gul`,good:!0},{word:`Qöşiq`,art:`sar`,good:!0}]},r=n[t]||n.Ğ,i=[{word:`Olma`,art:`olma`,good:!1},{word:`Kitob`,art:`kitob`,good:!1},{word:`Raketa`,art:`raketa`,good:!1},{word:`Şar`,art:`sar`,good:!1},{word:`Çoynak`,art:`coy`,good:!1},{word:`Lola`,art:`gul`,good:!1},{word:`Yulduz`,art:`yulduz`,good:!1},{word:`Poyezd`,art:`poyezd`,good:!1}].filter(e=>!e.word.toUpperCase().includes(t)),a=[...Rm(`flash-g-${t}`,r,3,e=>e.word),...Rm(`flash-b-${t}`,i,3,e=>e.word)];$.innerHTML=`
      <div class="edu-hud">
        <span>Tungi fonar ovi</span>
        <span class="edu-hud-pill" id="fl-hud">Topildi: 0 / 3</span>
      </div>
      <div class="edu-banner">
        Fonarni qoronğida yurgizing va <strong>"${t} ${t.toLowerCase()}"</strong> harfli 3 ta rasmni topib bosing!
      </div>
    `;let{canvas:o,ctx:s,w:c,h:l,getXY:u}=Um(310),d=[],f=0,m=Vm(a).map((e,t)=>({...e,x:c*(.17+t%3*.33),y:l*(.28+Math.floor(t/3)*.44),r:46,done:!1,shake:0,phase:t})),g=c/2,_=l/2,v=e=>{let t=u(e);g=t.x,_=t.y},y=e=>{let n=u(e);g=n.x,_=n.y;for(let e of m)if(!e.done&&Math.hypot(n.x-e.x,n.y-e.y)<e.r+10){if(e.good){e.done=!0,f++,p(1),Wm(d,e.x,e.y,`#ffd166`,22);let n=$.querySelector(`#fl-hud`);n&&(n.textContent=`Topildi: ${f} / 3`),f>=3&&Mm(()=>h(`Fonar qahramoni!`,`Tungi vodiydagi barcha "${t}" harfli rasmlarni topdingiz!`),1150)}else e.shake=1;break}};o.addEventListener(`pointermove`,v),o.addEventListener(`pointerdown`,y);let b=0,x=e=>{let t=e*.001;s.clearRect(0,0,c,l),bm(s,c,l,`valley`,.22);for(let e of m){e.shake*=.85;let n=e.x+Math.sin(t*45)*e.shake*7;s.save(),e.done&&(s.globalAlpha=.25),im(s,e.art,n,e.y-10,62,t+e.phase,`#ff8fab`),s.fillStyle=`#ffffff`,s.font=`600 14px "Nunito", sans-serif`,s.textAlign=`center`,s.fillText(e.word,n,e.y+32),s.restore()}s.save();let n=s.createRadialGradient(g,_,22,g,_,130);n.addColorStop(0,`rgba(6, 8, 14, 0)`),n.addColorStop(.55,`rgba(6, 8, 14, 0.35)`),n.addColorStop(1,`rgba(6, 8, 14, 0.92)`),s.fillStyle=n,s.fillRect(0,0,c,l),s.strokeStyle=`rgba(255, 255, 255, 0.38)`,s.lineWidth=2,s.beginPath(),s.arc(g,_,92,0,Math.PI*2),s.stroke(),s.restore(),Gm(s,d),b=requestAnimationFrame(x)};b=requestAnimationFrame(x),Am=()=>{cancelAnimationFrame(b),o.removeEventListener(`pointermove`,v),o.removeEventListener(`pointerdown`,y)}}function y(t={}){let n=xm.map(e=>e.upper),r;r=t.letters&&t.letters.length<=2?[...t.letters]:t.startLetter&&n.includes(t.startLetter)?[t.startLetter,...Rm(`letter-trace-29`,n.filter(e=>e!==t.startLetter),4,e=>e)]:Rm(`letter-trace-29`,n,5,e=>e);let i=0,a=!1,o=new Set;function s(){if(Nm(),i>=r.length){h(`Mohir xattot!`,`Barcha tanlangan harflarni çiroyli yozişni örganib oldingiz!`);return}let t=r[i],n=xm.find(e=>e.upper===t||e.lower===t)||xm[0],c=n.type===`belgi`?`ʼ`:a?n.lower:n.upper,l=n.example,u=n.art;$.innerHTML=`
        <div class="edu-hud">
          <span>${String(n.num).padStart(2,`0`)} / 29 · Navbat ${i+1}/${r.length}</span>
          <span class="edu-hud-pill" id="trace-pct">Bajarildi: 0%</span>
        </div>
        <div class="edu-banner">
          ${n.type===`belgi`?`Tutuq belgisi <strong>"ʼ"</strong> ustidan qalam bilan yurgizing`:`<strong>"${c}"</strong> harfi ustidan qalam bilan yurgizing`} (${l})
        </div>
        <div class="edu-trace-row">
          <div class="edu-trace-side" id="trace-art-box"></div>
        </div>
      `;let d=$.querySelector(`#trace-art-box`),f=document.createElement(`canvas`);f.width=130,f.height=130,d.appendChild(f);let m=f.getContext(`2d`),{wrap:g,canvas:_,ctx:v,w:y,h:b,getXY:x}=Um(225);g.style.flex=`1`,$.querySelector(`.edu-trace-row`).prepend(g);let S=document.createElement(`div`);S.className=`edu-inline-actions`,S.innerHTML=`
        <button type="button" class="pill-btn" id="trace-case">${a?`Katta (A)`:`Kiçik (a)`}</button>
        <button type="button" class="pill-btn" id="trace-clear">Tozalaş</button>
        <button type="button" class="edu-btn-primary" id="trace-next">${i+1>=r.length?`Yakunlaş ★`:`Keyingi harf →`}</button>
      `,$.appendChild(S);let C=document.createElement(`div`);C.className=`edu-trace-picker`,C.innerHTML=xm.map(e=>`
        <button type="button" class="edu-trace-pill ${e.upper===n.upper?`is-active`:``} ${o.has(e.upper)?`is-done`:``}" data-u="${e.upper}" title="${e.num}. ${e.example}">
          ${e.upper}
        </button>
      `).join(``),$.appendChild(C),C.querySelectorAll(`.edu-trace-pill`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.u;r[i]=t,s()})});let w=document.createElement(`canvas`);w.width=Math.round(y),w.height=Math.round(b);let T=w.getContext(`2d`,{willReadFrequently:!0});T.fillStyle=`#000`,T.fillRect(0,0,y,b),T.fillStyle=`#fff`,T.font=`700 ${Math.round(b*.72)}px "Nunito", ui-sans-serif, sans-serif`,T.textAlign=`center`,T.textBaseline=`middle`,T.fillText(c,y/2,b/2+8);let E=T.getImageData(0,0,Math.round(y),Math.round(b)).data,D=[];for(let e=12;e<b-12;e+=14)for(let t=12;t<y-12;t+=14)E[(Math.round(e)*Math.round(y)+Math.round(t))*4]>128&&D.push({x:t,y:e,hit:!1});let O=[],k=[],A=!1,j=[],M=!1,N=()=>{let e=D.filter(e=>e.hit).length,t=Math.min(100,Math.round(e/Math.max(1,D.length*.7)*100)),r=$.querySelector(`#trace-pct`);if(r&&(r.textContent=`Bajarildi: ${t}%`),t>=100&&!M){M=!0,o.add(n.upper),p(1),Wm(k,y/2,b/2,`#5eead4`,28);let e=C.querySelector(`[data-u="${n.upper}"]`);e&&e.classList.add(`is-done`)}},P=e=>{j.push(e);for(let t of D)!t.hit&&Math.hypot(t.x-e.x,t.y-e.y)<25&&(t.hit=!0);Math.random()<.35&&k.push({x:e.x,y:e.y,vx:(Math.random()-.5)*2,vy:-Math.random()*2,life:.9,color:`#5eead4`,r:2.5}),N()},F=e=>{e.preventDefault(),A=!0,j=[],O.push(j),P(x(e))},I=e=>{A&&(e.preventDefault(),P(x(e)))},L=()=>{A=!1};_.addEventListener(`pointerdown`,F),window.addEventListener(`pointermove`,I),window.addEventListener(`pointerup`,L),S.querySelector(`#trace-case`).addEventListener(`click`,()=>{a=!a,s()}),S.querySelector(`#trace-clear`).addEventListener(`click`,()=>{O.length=0,D.forEach(e=>e.hit=!1),M=!1,N()}),S.querySelector(`#trace-next`).addEventListener(`click`,()=>{i++,s()});let R=Math.min(window.devicePixelRatio||1,mm()?1:1.5),ee=document.createElement(`canvas`);ee.width=_.width,ee.height=_.height;let z=ee.getContext(`2d`),te=null;function ne(e){te=e,z.setTransform(R,0,0,R,0,0),z.clearRect(0,0,y,b),bm(z,y,b,`prism`,.42),z.strokeStyle=`rgba(255,255,255,0.10)`,z.setLineDash([6,6]),[b*.25,b*.5,b*.78].forEach(e=>{z.beginPath(),z.moveTo(16,e),z.lineTo(y-16,e),z.stroke()}),z.setLineDash([]),z.font=`700 ${Math.round(b*.72)}px "Nunito", ui-sans-serif, sans-serif`,z.textAlign=`center`,z.textBaseline=`middle`,z.fillStyle=`rgba(255,255,255,0.12)`,z.fillText(c,y/2,b/2+8),z.strokeStyle=e?`rgba(94,234,212,0.8)`:`rgba(255,255,255,0.35)`,z.lineWidth=2,z.setLineDash([5,5]),z.strokeText(c,y/2,b/2+8),z.setLineDash([])}ne(!1);let B=0,V=0,re=t=>{let n=t*.001;t-V>=50&&(V=t,m.clearRect(0,0,130,130),im(m,u,65,55,86,n,e.accent),m.fillStyle=um()?`#0f172a`:`#ffffff`,m.font=`600 13px "Nunito", sans-serif`,m.textAlign=`center`,m.fillText(l,65,118)),te!==M&&ne(M),v.clearRect(0,0,y,b),v.drawImage(ee,0,0,y,b),v.lineCap=`round`,v.lineJoin=`round`,v.lineWidth=18,v.strokeStyle=M?`#5eead4`:`#68b5ff`;for(let e of O)if(!(e.length<2)){v.beginPath(),v.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)v.lineTo(e[t].x,e[t].y);v.stroke()}Gm(v,k),B=requestAnimationFrame(re)};B=requestAnimationFrame(re),Am=()=>{cancelAnimationFrame(B),_.removeEventListener(`pointerdown`,F),window.removeEventListener(`pointermove`,I),window.removeEventListener(`pointerup`,L)}}s()}function b(){Nm();let e=0;$.innerHTML=`
      <div class="edu-hud">
        <span>Köl öyini</span>
        <span class="edu-hud-pill" id="duck-hud">Uyasida: 0 / 5</span>
      </div>
      <div class="edu-banner">Köldagi faqat <strong>"Ö / ö"</strong> harfi yozilgan ördakçalarni bosing!</div>
    `;let{canvas:t,ctx:n,w:r,h:i,getXY:a}=Um(310),o=[],s=[],c=Rm(`duck-good`,[`Ö`,`ö`,`Ördak`,`Öt`,`Qözi`,`Öqiş`,`Qöşiş`,`Tört`,`Jöja`],6,e=>e),l=Rm(`duck-bad`,[`O`,`U`,`Olma`,`Uy`,`Anor`,`Şar`,`Çoy`,`Ğoz`],6,e=>e),u=e=>{let t=Math.random()<.5?1:-1;return{x:t>0?-40:r+40,y:Bm(95,i-50),vx:t*(.45+Math.random()*.45),dir:t,good:e,label:e?c[Bm(0,c.length-1)]:l[Bm(0,l.length-1)],r:34,phase:Math.random()*6}},d=[u(!0),u(!1),u(!0),u(!1),u(!0)],f=0,m=0,g=e=>{let t=m?Math.min(2.5,Math.max(.25,(e-m)/16.6667)):1;m=e;let a=e*.001;n.clearRect(0,0,r,i),bm(n,r,i,`valley`,.25);for(let e=s.length-1;e>=0;e--){let r=s[e];r.r+=1*t,r.a-=.02*t,r.a<=0?s.splice(e,1):(n.strokeStyle=$p(r.col,r.a),n.beginPath(),n.ellipse(r.x,r.y,r.r,r.r*.4,0,0,Math.PI*2),n.stroke())}for(let e=0;e<d.length;e++){let i=d[e];i.x+=i.vx*t,(i.dir>0&&i.x>r+65||i.dir<0&&i.x<-65)&&(d[e]=u(Math.random()<.58)),rm(n,i.x,i.y,i.r,i.dir,a+i.phase),n.fillStyle=`rgba(20, 24, 38, 0.72)`,n.strokeStyle=`rgba(255,255,255,0.38)`,n.lineWidth=1.5,wm(n,i.x-28,i.y-54,56,26,999),n.fill(),n.stroke(),n.fillStyle=`#ffffff`,n.font=`700 13px "Nunito", sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(i.label,i.x,i.y-41)}Gm(n,o),f=requestAnimationFrame(g)};f=requestAnimationFrame(g);let _=t=>{let n=a(t);s.push({x:n.x,y:n.y,r:8,a:.9,col:`#5eead4`});for(let t=d.length-1;t>=0;t--){let r=d[t];if(Math.hypot(n.x-r.x,n.y-(r.y-12))<48){if(r.good){e++,p(1),Wm(o,r.x,r.y,`#ffd166`,18),d[t]=u(!0);let n=$.querySelector(`#duck-hud`);n&&(n.textContent=`Uyasida: ${e} / 5`),e>=5&&Mm(()=>h(`Ördakçalar uyasida!`,`Barcha Ö harfli ördakçalarni töğri topdingiz!`),1150)}else Wm(o,r.x,r.y,`#ff8fab`,10),r.vx=-r.vx,r.dir*=-1;break}}};t.addEventListener(`pointerdown`,_),Am=()=>{cancelAnimationFrame(f),t.removeEventListener(`pointerdown`,_)}}function x(){let e=Rm(`xylophone`,[{w:`_LMA`,a:`O`,art:`olma`},{w:`_RDAK`,a:`Ö`,art:`ordak`},{w:`_NOR`,a:`A`,art:`olma`},{w:`Q_ZI`,a:`Ö`,art:`qozi`},{w:`G_L`,a:`U`,art:`gul`},{w:`_ŞIK`,a:`E`,art:`kitob`},{w:`K_TOB`,a:`I`,art:`kitob`},{w:`Ş_R`,a:`A`,art:`sar`},{w:`Ş_R`,a:`I`,art:`sir`},{w:`T_Ğ`,a:`O`,art:`tog`},{w:`YULD_Z`,a:`U`,art:`yulduz`},{w:`_LAK`,a:`E`,art:`tarozi`}],5,e=>`${e.w}:${e.a}`),t=[{l:`A`,col:`#ff8fab`,note:0},{l:`E`,col:`#ffd166`,note:1},{l:`I`,col:`#5eead4`,note:2},{l:`O`,col:`#68b5ff`,note:3},{l:`U`,col:`#a78bfa`,note:4},{l:`Ö`,col:`#56ccf2`,note:5}],n=0;function r(){if(Nm(),n>=e.length){h(`Musiqiy ustoz!`,`Unli harflarni suyuq şisha ksilofonda bexato çaldingiz!`);return}let i=e[n];n++,$.innerHTML=`
        <div class="edu-hud">
          <span>Ksilofon ${n} / ${e.length}</span>
          <span class="edu-hud-pill">Unli tovuşni çaling!</span>
        </div>
        <div class="edu-word-card">
          <canvas id="xy-art" width="76" height="76"></canvas>
          <div class="edu-word-card-text">${i.w}</div>
        </div>
      `,im($.querySelector(`#xy-art`).getContext(`2d`),i.art,38,38,62,.3,`#56ccf2`);let{canvas:a,ctx:o,w:s,h:c,getXY:l}=Um(220),u=[],d=!1,f=t.map((e,n)=>({...e,x:s*.08+n*(s*.84/t.length)+4,y:26+n*6,bw:s*.84/t.length-8,bh:c-52-n*10,glow:0})),m=0,g=()=>{o.clearRect(0,0,s,c),bm(o,s,c,`aurora`,.4);for(let e of f)e.glow*=.94,o.save(),o.fillStyle=$p(e.col,.24+e.glow*.45),o.strokeStyle=e.glow>.1?`#ffffff`:$p(e.col,.75),o.lineWidth=2,wm(o,e.x,e.y,e.bw,e.bh,14),o.fill(),o.stroke(),o.fillStyle=`rgba(255,255,255,0.65)`,o.beginPath(),o.arc(e.x+e.bw/2,e.y+18,5,0,Math.PI*2),o.fill(),o.fillStyle=`#ffffff`,o.font=`700 26px "Nunito", serif`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillText(e.l,e.x+e.bw/2,e.y+e.bh/2+8),o.restore();Gm(o,u),m=requestAnimationFrame(g)};m=requestAnimationFrame(g);let _=e=>{if(d)return;let t=l(e);for(let e of f)if(t.x>=e.x&&t.x<=e.x+e.bw&&t.y>=e.y&&t.y<=e.y+e.bh){if(e.glow=1,e.note,e.l===i.a){d=!0,p(1),Wm(u,e.x+e.bw/2,e.y+e.bh/2,`#5eead4`,24);let t=$.querySelector(`.edu-word-card-text`);t&&(t.innerHTML=i.w.replace(`_`,`<span style="color:#5eead4">${i.a}</span>`)),Mm(r,1250)}else Wm(u,e.x+e.bw/2,e.y+e.bh/2,`#ff8fab`,10);break}};a.addEventListener(`pointerdown`,_),Am=()=>{cancelAnimationFrame(m),a.removeEventListener(`pointerdown`,_)}}r()}function S(){let e=[2,3,5,10],t=Array.from({length:4},()=>zm(`train-seq`,()=>{let t=e[Bm(0,e.length-1)],n=t===10?Bm(1,5)*10:t*Bm(1,5),r=Bm(1,3),i=[n,n+t,n+t*2,n+t*3],a=i[r];return{step:t,cars:i.map((e,t)=>t===r?null:e),ans:a}},e=>`${e.step}:${e.cars.join(`,`)}`)),n=0;function r(){if(Nm(),n>=t.length){h(`Poyezd maşinisti!`,`Barcha raqamli vagonlarni töğri yuklab manzilga yetkazdingiz!`);return}let e=t[n];n++;let i=Hm(e.ans,[e.ans-e.step,e.ans+e.step,e.ans+2,e.ans-1].filter(t=>t>0&&t!==e.ans));$.innerHTML=`
        <div class="edu-hud">
          <span>Poyezd ${n} / ${t.length}</span>
          <span class="edu-hud-pill">Qadam: +${e.step}</span>
        </div>
        <div class="edu-banner">Böş vagonga qaysi sonli yuk töğri keladi?</div>
      `;let{canvas:a,ctx:o,w:s,h:c}=Um(210),l=document.createElement(`div`);l.className=`edu-options`,l.innerHTML=i.map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``),$.appendChild(l);let u=[],d=0,f=!1,m=!1,g=0,_=0,v=t=>{let n=_?Math.min(2.5,Math.max(.25,(t-_)/16.6667)):1;_=t;let r=t*.001;o.clearRect(0,0,s,c),bm(o,s,c,`valley`,.3),f&&(d+=2.6*n),o.fillStyle=`rgba(255,255,255,0.22)`,o.fillRect(0,c-38,s,4);let i=Math.min(1,(s-28)/520),a=Math.max(42,62*i),l=Math.round(88*i),p=Math.round(104*i),m=a+Math.round(62*i);o.save(),o.translate(d,0),im(o,`poyezd`,a,c-78,Math.round(84*i),r,`#ff8fab`),e.cars.forEach((t,n)=>{let r=m+n*p,a=c-102,s=t===null;o.fillStyle=s&&!f?`rgba(255,209,102,0.22)`:`rgba(255,255,255,0.16)`,o.strokeStyle=s&&!f?`#ffd166`:`rgba(255,255,255,0.35)`,o.lineWidth=2,wm(o,r,a,l,56,12),o.fill(),o.stroke(),o.fillStyle=`#ffffff`,o.beginPath(),o.arc(r+l*.25,c-42,Math.max(6.5,9*i),0,Math.PI*2),o.arc(r+l*.75,c-42,Math.max(6.5,9*i),0,Math.PI*2),o.fill(),o.fillStyle=s&&f?`#5eead4`:`#ffffff`,o.font=`700 ${Math.round(Math.max(16,22*i))}px "Nunito", sans-serif`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillText(s?f?String(e.ans):`?`:String(t),r+l/2,a+28)}),o.restore(),Gm(o,u),g=requestAnimationFrame(v)};g=requestAnimationFrame(v),l.querySelectorAll(`.edu-opt`).forEach(t=>{t.addEventListener(`click`,()=>{m||(m=!0,Number(t.dataset.v)===e.ans?(f=!0,t.classList.add(`is-correct`),p(1),Wm(u,s/2,c/2,`#5eead4`,26),Mm(r,1550)):(t.classList.add(`is-wrong`),Mm(()=>{t.classList.remove(`is-wrong`),m=!1},950)))})}),Am=()=>cancelAnimationFrame(g)}r()}function C(){let e=0;function t(){if(Nm(),e>=4){h(`Mehribon hisobçi!`,`Şirga barcha olmalarni sanab berdingiz va jami sonini töğri topdingiz!`);return}e++;let n=zm(`lion-meal`,()=>({a:Bm(2,5),b:Bm(1,5)}),e=>`${e.a}+${e.b}`),r=n.a,i=n.b,a=r+i;$.innerHTML=`
        <div class="edu-hud">
          <span>Ziyofat ${e} / 4</span>
          <span class="edu-hud-pill" id="lion-hud">Berildi: 0 / ${a}</span>
        </div>
        <div class="edu-banner" id="lion-ban">
          Şirga avval <strong>${r}</strong> ta, söng yana <strong>${i}</strong> ta olma bosing (<strong>${r} + ${i}</strong>)!
        </div>
      `;let{canvas:o,ctx:s,w:c,h:l,getXY:u}=Um(235),d=document.createElement(`div`);d.className=`edu-options`,d.style.opacity=`0.35`,d.innerHTML=Hm(a,[a-2,a-1,a+1,a+2].filter(e=>e>0&&e!==a)).map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``),$.appendChild(d);let f=[],m=0,g=1,_=c-Math.min(108,Math.max(66,c*.22)),v=Math.max(150,_-88),y=c<420?4:5,b=v/Math.max(1,y-1),x=c<420?15:19,S=Array.from({length:r+i},(e,t)=>({x:38+t%y*b,y:56+Math.floor(t/y)*62,taken:!1,phase:t*.5})),C=0,w=e=>{let t=e*.001;s.clearRect(0,0,c,l),bm(s,c,l,`valley`,.3),g+=(1-g)*.08,s.save(),s.translate(_,l/2+10),s.scale(g,g),im(s,`sir`,0,0,Math.min(128,c*.28),t,`#ffd166`),s.restore();for(let e of S)e.taken||em(s,e.x,e.y+Math.sin(t*1.3+e.phase)*2.5,x,t+e.phase);Gm(s,f),C=requestAnimationFrame(w)};C=requestAnimationFrame(w);let T=e=>{if(m>=a)return;let t=u(e);for(let e of S)if(!e.taken&&Math.hypot(t.x-e.x,t.y-e.y)<30){e.taken=!0,m++,g=1.18,Wm(f,_,l/2,`#ffd166`,14);let t=$.querySelector(`#lion-hud`);if(t&&(t.textContent=`Berildi: ${m} / ${a}`),m>=a){d.style.opacity=`1`;let e=$.querySelector(`#lion-ban`);e&&(e.innerHTML=`Endi Şir jami neçta olma yeganini tanlang: <strong>${r} + ${i} = ?</strong>`)}break}};o.addEventListener(`pointerdown`,T);let E=!1;d.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{m<a||E||(E=!0,Number(e.dataset.v)===a?(e.classList.add(`is-correct`),p(1),Mm(t,1250)):(e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),E=!1},950)))})}),Am=()=>{cancelAnimationFrame(C),o.removeEventListener(`pointerdown`,T)}}t()}function w(){Nm();let e=xm.find(e=>e.upper===`Ç`)||xm[0],t=Rm(`alpha-board-q`,xm,5,e=>e.upper),n=0,r=``,i=()=>{if(n>=t.length){h(`Alifbo bilimdoni!`,`29 ta harf içidan barcha söralgan harflarni aniq topdingiz!`);return}let a=t[n],o=e.type===`belgi`?e.upper:`${e.upper} ${e.lower}`;$.innerHTML=`
        <div class="edu-alpha-wrap">
          <div class="edu-board-challenge">
            <span>🎯 Topiş (${n+1}/${t.length}): <strong>«${a.example}»</strong> sözidagi <strong>${a.num}. "${a.upper}"</strong> ni jadvaldan bosing!</span>
            <small>${r||`Töğri harf +1 ★`}</small>
          </div>
          <div class="edu-alpha-hero">
            <canvas id="alpha-art" width="90" height="90" class="edu-alpha-art"></canvas>
            <div class="edu-alpha-big">${o}</div>
            <div class="edu-alpha-info">
              <div class="edu-alpha-word">${String(e.num).padStart(2,`0`)}. ${e.example}</div>
              <div class="edu-alpha-note">${e.hint}${e.old?` <span class="edu-badge">${e.type===`belgi`?`Belgi`:`Yangi harf`}</span>`:``}</div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button type="button" class="pill-btn" id="edu-trace-this">Yozib kör →</button>
              <button type="button" class="edu-btn-primary" id="edu-start-quiz">Şar ovi →</button>
            </div>
          </div>
          <div class="edu-alpha-grid">
            ${xm.map(t=>`
              <button type="button" class="edu-alpha-cell ${t.upper===e.upper?`is-selected`:``} ${t.type===`yangi`||t.type===`belgi`?`is-new`:``}" data-u="${t.upper}">
                <span>${t.upper}</span><small>${t.type===`belgi`?`29`:t.lower}</small>
              </button>
            `).join(``)}
          </div>
        </div>
      `,im($.querySelector(`#alpha-art`).getContext(`2d`),e.art,45,45,72,.5,`#68b5ff`),$.querySelectorAll(`.edu-alpha-cell`).forEach(t=>{t.addEventListener(`click`,()=>{e=xm.find(e=>e.upper===t.dataset.u),e&&e.upper===a.upper?(p(1),n++,r=`✓ "${a.upper}" töğri!`):r=`Hozir "${a.upper}" (${a.num}-örin) ni izlang!`,i()})}),$.querySelector(`#edu-trace-this`).addEventListener(`click`,()=>{y({letters:e.upper===e.lower?[e.upper]:[e.upper,e.lower]})}),$.querySelector(`#edu-start-quiz`).addEventListener(`click`,()=>{T({mode:`reformed`})})};i()}function T(t){let n=t&&t.mode===`tutuq`?[{w:`MA_NO`,a:`ʼ`,art:`kitob`,pool:[`ʼ`,`Ğ`,`Ö`,`Ç`,`Ş`]},{w:`A_LO`,a:`ʼ`,art:`yulduz`,pool:[`ʼ`,`Ğ`,`Ö`,`Ç`,`Ş`]},{w:`SAN_AT`,a:`ʼ`,art:`gul`,pool:[`ʼ`,`G`,`O`,`Ç`,`Ş`]},{w:`TA_LIM`,a:`ʼ`,art:`kitob`,pool:[`ʼ`,`A`,`E`,`Ş`,`Ğ`]},{w:`ŞE_R`,a:`ʼ`,art:`kitob`,pool:[`ʼ`,`E`,`I`,`Ş`,`Ç`]},{w:`ME_MOR`,a:`ʼ`,art:`tog`,pool:[`ʼ`,`M`,`O`,`Ğ`,`Ö`]},{w:`E_LON`,a:`ʼ`,art:`sar`,pool:[`ʼ`,`L`,`O`,`Ç`,`Ş`]},{w:`RA_NO`,a:`ʼ`,art:`gul`,pool:[`ʼ`,`A`,`O`,`Ğ`,`Ş`]}]:[{w:`_AR`,a:`Ş`,art:`sar`,pool:[`Ş`,`Ç`,`Ö`,`Ğ`,`S`]},{w:`_OYNAK`,a:`Ç`,art:`coy`,pool:[`Ç`,`Ş`,`C`,`Ğ`,`Ö`]},{w:`_RDAK`,a:`Ö`,art:`ordak`,pool:[`Ö`,`O`,`Ş`,`Ğ`,`U`]},{w:`TO_`,a:`Ğ`,art:`tog`,pool:[`Ğ`,`G`,`Ş`,`Ç`,`Ö`]},{w:`QUYO_`,a:`Ş`,art:`quyos`,pool:[`Ş`,`S`,`Ç`,`Ğ`,`Ö`]},{w:`_OZ`,a:`Ğ`,art:`ordak`,pool:[`Ğ`,`G`,`Q`,`Ç`,`Ş`]},{w:`Q_ZI`,a:`Ö`,art:`qozi`,pool:[`Ö`,`O`,`U`,`Ğ`,`Ş`]},{w:`BO_`,a:`Ğ`,art:`olma`,pool:[`Ğ`,`G`,`Q`,`Ç`,`Ö`]},{w:`_ANA`,a:`Ç`,art:`coy`,pool:[`Ç`,`Ş`,`C`,`T`,`Ğ`]},{w:`_AMOL`,a:`Ş`,art:`sar`,pool:[`Ş`,`S`,`Ç`,`Ğ`,`Ö`]},{w:`MA_NO`,a:`ʼ`,art:`kitob`,pool:[`ʼ`,`Ğ`,`Ö`,`Ç`,`Ş`]},{w:`T_RT`,a:`Ö`,art:`tarozi`,pool:[`Ö`,`O`,`U`,`A`,`Ğ`]}],r=Rm(`balloon-pop-${t?.mode||`reformed`}`,n,5,e=>`${e.w}:${e.a}`),i=0;function a(){if(Nm(),i>=r.length){h(`Şar qahramoni!`,`Barcha tuşib qolgan harf şarlarini aniq yordingiz!`);return}let t=r[i];i++,$.innerHTML=`
        <div class="edu-hud">
          <span>Şar ovi ${i} / ${r.length}</span>
          <span class="edu-hud-pill">Töğri belgini yoring!</span>
        </div>
        <div class="edu-word-card">
          <canvas id="bp-art" width="76" height="76"></canvas>
          <div class="edu-word-card-text">${t.w}</div>
        </div>
      `,im($.querySelector(`#bp-art`).getContext(`2d`),t.art,38,38,62,.3,e.accent);let{canvas:n,ctx:o,w:s,h:c,getXY:l}=Um(250),u=[`#68b5ff`,`#5eead4`,`#ffd166`,`#ff8fab`],d=[],f=Hm(t.a,t.pool.filter(e=>e!==t.a)).map((e,t)=>({letter:e,x:s*(.16+t*.22),y:c+30+t*32,vy:.34+Math.random()*.22,r:34,color:u[t%u.length],phase:t*1.4,dead:!1})),m=0,g=0,_=!1,v=e=>{let t=g?Math.min(2.5,Math.max(.25,(e-g)/16.6667)):1;g=e;let n=e*.001;o.clearRect(0,0,s,c),bm(o,s,c,`space`,.25);for(let e of f)e.dead||(e.y-=e.vy*t,e.x+=Math.sin(n*1.1+e.phase)*.22*t,e.y<-55&&(e.y=c+55),tm(o,e.x,e.y,e.r,e.color,e.letter,n));Gm(o,d),m=requestAnimationFrame(v)};m=requestAnimationFrame(v);let y=e=>{if(_)return;let n=l(e);for(let e of f)if(!e.dead&&Math.hypot(n.x-e.x,n.y-e.y)<e.r*1.15){if(e.letter===t.a){_=!0,e.dead=!0,p(1),Wm(d,e.x,e.y,`#5eead4`,26);let n=$.querySelector(`.edu-word-card-text`);n&&(n.innerHTML=t.w.replace(`_`,`<span style="color:#5eead4">${t.a}</span>`)),Mm(a,1150)}else e.dead=!0,Wm(d,e.x,e.y,`#ff8fab`,12);break}};n.addEventListener(`pointerdown`,y),Am=()=>{cancelAnimationFrame(m),n.removeEventListener(`pointerdown`,y)}}a()}function E(t){let n=t.level===1?[{word:`ŞAR`,art:`sar`},{word:`ŞIR`,art:`sir`},{word:`ÇOY`,art:`coy`},{word:`TOĞ`,art:`tog`},{word:`ĞOZ`,art:`ordak`},{word:`GUL`,art:`gul`},{word:`BOĞ`,art:`olma`},{word:`QOR`,art:`tog`},{word:`NON`,art:`quyos`},{word:`ÖT`,art:`gul`}]:t.level===3?[{word:`QALAM`,art:`kitob`},{word:`KITOB`,art:`kitob`},{word:`SUMKA`,art:`tarozi`},{word:`MAKTAB`,art:`tog`},{word:`SOAT`,art:`quyos`},{word:`DAFTAR`,art:`kitob`},{word:`RASM`,art:`gul`},{word:`DARS`,art:`yulduz`},{word:`POYEZD`,art:`poyezd`}]:[{word:`QUYOŞ`,art:`quyos`},{word:`ÖRDAK`,art:`ordak`},{word:`ÇOYNAK`,art:`coy`},{word:`QÖZI`,art:`qozi`},{word:`ŞAMOL`,art:`sar`},{word:`ÇIROQ`,art:`quyos`},{word:`MAʼNO`,art:`kitob`},{word:`AʼLO`,art:`yulduz`},{word:`OLMA`,art:`olma`},{word:`YULDUZ`,art:`yulduz`}],r=Rm(`word-l${t.level||2}`,n,4,e=>e.word),i=0;function a(){if(Nm(),i>=r.length){h(`Söz ustasi!`,`Rasmlarga qarab barcha sözlarni töğri tuzdingiz!`);return}let t=r[i];i++;let n=t.word,o=Vm(n.split(``).map((e,t)=>({ch:e,id:t}))),s=[],c=()=>{let l=s.map(e=>e.ch).join(``),u=l===n,d=l.length===n.length&&!u;$.innerHTML=`
          <div class="edu-hud">
            <span>Söz ${i} / ${r.length}</span>
            <span class="edu-hud-pill">Harflarni tartibda tering</span>
          </div>
          <div style="display:flex;justify-content:center;margin:6px 0 12px;">
            <canvas id="wb-art" width="120" height="120"></canvas>
          </div>
          <div class="edu-slots">
            ${n.split(``).map((e,t)=>`<span class="edu-slot ${s[t]?u?`is-good`:d?`is-bad`:`is-filled`:``}">${s[t]?s[t].ch:``}</span>`).join(``)}
          </div>
          <div class="edu-letter-tray">
            ${o.map(e=>{let t=s.some(t=>t.id===e.id);return`<button type="button" class="edu-tile-btn ${t?`is-used`:``}" data-id="${e.id}" ${t?`disabled`:``}>${e.ch}</button>`}).join(``)}
          </div>
          <div class="edu-feedback">
            ${u?`Barakalla! Töğri söz ✓`:d?`Qaytadan urinib köring!`:`<button type="button" class="pill-btn" id="edu-clear">Tozalaş</button>`}
          </div>
        `,im($.querySelector(`#wb-art`).getContext(`2d`),t.art,60,60,96,u?1.2:.2,e.accent);let f=$.querySelector(`#edu-clear`);f&&f.addEventListener(`click`,()=>{s=[],c()}),$.querySelectorAll(`.edu-tile-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(s.length>=n.length)return;let t=o.find(t=>t.id===Number(e.dataset.id));t&&(s.push(t),s.length,c(),s.length===n.length&&(s.map(e=>e.ch).join(``)===n?(p(1),Mm(a,1200)):Mm(()=>{s=[],c()},1150)))})})};c()}a()}function D(e){let t=(e.max||10)>10,n=0;function r(){if(Nm(),n>=4){h(`Sanoq ustasi!`,`Olmalar va yulduzlarni aniq sanab yiğdingiz!`);return}n++;let e=zm(`basket-${t?20:10}`,()=>t?Bm(11,19):Bm(2,9),String),i=t?e-10:e;$.innerHTML=`
        <div class="edu-hud">
          <span>Sanoq ${n} / 4</span>
          <span class="edu-hud-pill" id="basket-hud">${t?`10 + 0 = 10`:`Savatda: 0`}</span>
        </div>
        <div class="edu-banner">
          ${t?`Qutida <strong>10</strong> ta yulduz bor. Jami <strong>${e}</strong> ta bölişi uçun yulduzça qöşing!`:`Savatga roppa-rosa <strong>${e}</strong> ta olma soling!`}
        </div>
      `;let{canvas:a,ctx:o,w:s,h:c,getXY:l}=Um(290),u=document.createElement(`div`);u.className=`edu-inline-actions`,u.innerHTML=`<button type="button" class="edu-btn-primary" id="basket-check">Tekşiriş ✓</button>`,$.appendChild(u);let d=[],f=0,m=Array.from({length:10},(e,t)=>({idx:t,homeX:s*(.16+t%5*.17),homeY:c*(.22+Math.floor(t/5)*.22),x:s*(.16+t%5*.17),y:c*(.22+Math.floor(t/5)*.22),inBasket:!1,phase:t*.6})),g=s/2,_=c*.8,v=()=>{let e=$.querySelector(`#basket-hud`);e&&(e.textContent=t?`10 + ${f} = ${10+f}`:`Savatda: ${f}`)},y=0,b=e=>{let n=e*.001;o.clearRect(0,0,s,c),bm(o,s,c,t?`space`:`valley`,.28);let r=Math.min(270,s-24);if(o.fillStyle=`rgba(255,255,255,0.14)`,o.strokeStyle=`rgba(255,255,255,0.34)`,o.lineWidth=2,wm(o,g-r/2,_-34,r,68,16),o.fill(),o.stroke(),o.fillStyle=`#ffffff`,o.font=`600 13px "Nunito", sans-serif`,o.textAlign=`center`,o.fillText(t?`10 ta yulduz + ${f} ta`:`Savat: ${f} ta olma`,g,_+26),t)for(let e=0;e<10;e++)nm(o,g-r*.42+e%5*18,_-12+Math.floor(e/5)*16,6.5,`#5eead4`);let i=0;for(let e of m){let a=e.inBasket?t?g+10+i%5*22:g-r*.35+i%5*(r*.165):e.homeX,s=e.inBasket?t?_-10+Math.floor(i/5)*18:_-14+Math.floor(i/5)*20:e.homeY+Math.sin(n*1.2+e.phase)*2.5;e.inBasket&&i++,e.x+=(a-e.x)*.11,e.y+=(s-e.y)*.11,t?nm(o,e.x,e.y,e.inBasket?10:18,`#ffd166`):em(o,e.x,e.y,e.inBasket?13:19,n+e.phase,e.inBasket)}Gm(o,d),y=requestAnimationFrame(b)};y=requestAnimationFrame(b);let x=e=>{let n=l(e);for(let e of m)if(Math.hypot(n.x-e.x,n.y-e.y)<28){e.inBasket=!e.inBasket,f=m.filter(e=>e.inBasket).length,Wm(d,e.x,e.y,t?`#ffd166`:`#5eead4`,10),v();break}};a.addEventListener(`pointerdown`,x),u.querySelector(`#basket-check`).addEventListener(`click`,()=>{f===i?(p(1),Wm(d,g,_,`#5eead4`,26),Mm(r,1200)):(u.querySelector(`#basket-check`).textContent=f<i?`Yana qöşing!`:`Biroz kamaytiring!`,Mm(()=>{let e=u.querySelector(`#basket-check`);e&&(e.textContent=`Tekşiriş ✓`)},1500))}),Am=()=>{cancelAnimationFrame(y),a.removeEventListener(`pointerdown`,x)}}r()}function O(e){let t=0;function n(){if(Nm(),t>=3){h(`Sakrovçi qahramon!`,`Barcha raqam yaproqlaridan adaşmay sakrab ötdingiz!`);return}t++;let r=zm(`frog-hop`,()=>{let t=e.step&&e.step>1?e.step:[1,2,3][Bm(0,2)];return{step:t,start:t===1?Bm(1,9):Bm(1,10)}},e=>`${e.start}+${e.step}`),i=r.step,a=r.start,o=[a,a+i,a+i*2,a+i*3,a+i*4],s=Vm(o);$.innerHTML=`
        <div class="edu-hud">
          <span>Sakraş ${t} / 3 · +${i}</span>
          <span class="edu-hud-pill" id="frog-next">Keyingi son: ${o[0]}</span>
        </div>
        <div class="edu-banner">Qurbaqa ötişi uçun sonlarni <strong>kiçikdan kattaga (+${i})</strong> qarab bosing!</div>
      `;let{canvas:c,ctx:l,w:u,h:d,getXY:f}=Um(290),m=[],g=0,_=Math.min(36,Math.max(24,Math.round(u*.082))),v=s.map((e,t)=>({val:e,x:u*(.14+t*.18),y:d*(t%2==0?.42:.64),r:_,done:!1,shake:0})),y={x:42,y:d*.82,tx:42,ty:d*.82},b=0,x=e=>{let t=e*.001;l.clearRect(0,0,u,d),bm(l,u,d,`valley`,.28);for(let e of v){e.shake*=.88;let n=e.x+Math.sin(t*32)*e.shake*6,r=e.y+Math.sin(t*1.2+e.x)*2.5;l.fillStyle=e.done?`rgba(94,234,212,0.42)`:`rgba(56,161,105,0.72)`,l.strokeStyle=e.done?`#ffffff`:`rgba(255,255,255,0.38)`,l.lineWidth=2,l.beginPath(),l.arc(n,r,e.r,.25,Math.PI*2-.25),l.lineTo(n,r),l.closePath(),l.fill(),l.stroke(),l.fillStyle=`#ffffff`,l.font=`700 22px "Nunito", sans-serif`,l.textAlign=`center`,l.textBaseline=`middle`,l.fillText(String(e.val),n,r)}y.x+=(y.tx-y.x)*.09,y.y+=(y.ty-y.y)*.09,im(l,`qurbaqa`,y.x,y.y-16,48,t,`#5eead4`),Gm(l,m),b=requestAnimationFrame(x)};b=requestAnimationFrame(x);let S=e=>{let t=f(e);for(let e of v)if(!e.done&&Math.hypot(t.x-e.x,t.y-e.y)<e.r+8){if(e.val===o[g]){e.done=!0,y.tx=e.x,y.ty=e.y,g++,p(1),Wm(m,e.x,e.y,`#5eead4`,16);let t=$.querySelector(`#frog-next`);t&&(t.textContent=g<o.length?`Keyingi son: ${o[g]}`:`Marra!`),g>=o.length&&Mm(n,1250)}else e.shake=1;break}};c.addEventListener(`pointerdown`,S),Am=()=>{cancelAnimationFrame(b),c.removeEventListener(`pointerdown`,S)}}n()}function k(e){let t=e.mode===`maketen`,n=0;function r(){if(Nm(),n>=4){h(`Muvozanat ustasi!`,`Tarozini töğri hisoblab barobar qildingiz!`);return}n++;let e=zm(`scale-${t?`10`:`cmp`}`,()=>({l:t?10:Bm(1,9),r:Bm(1,9)}),e=>`${e.l}:${e.r}`),i=e.l,a=e.r,o=0;$.innerHTML=`
        <div class="edu-hud">
          <span>Tarozi ${n} / 4</span>
          <span class="edu-hud-pill">${t?`10 va ${a}`:`${i} ? ${a}`}</span>
        </div>
        <div class="edu-banner">
          ${t?`Öng pallada <strong>${a}</strong> ta bor. <strong>10</strong> bölişi uçun neçta qöşiş kerak?`:`Çap va öng palladagi olmalarni soliştirib töğri belgini tanlang!`}
        </div>
      `;let{canvas:s,ctx:c,w:l,h:u}=Um(220),d=[],f=t?Hm(10-a,[1,2,3,4,5,6,7,8,9].filter(e=>e!==10-a)):[`<`,`=`,`>`],m=document.createElement(`div`);m.className=`edu-options`,m.innerHTML=f.map(e=>`<button type="button" class="edu-opt" data-v="${e}">${t?`+ ${e}`:e}</button>`).join(``),$.appendChild(m);let g=0,_=!1,v=0,y=e=>{let t=e*.001;c.clearRect(0,0,l,u),bm(c,l,u,`prism`,.36);let n=a+o,r=Math.max(-.22,Math.min(.22,(n-i)*.045));g+=(r-g)*.06;let s=Math.min(1,(l-24)/360),f=l/2;c.fillStyle=`#ffd166`,c.fillRect(f-5*s,58,10*s,128),c.fillRect(f-55*s,180,110*s,10),c.save(),c.translate(f,66),c.rotate(g),c.fillStyle=`#ffffff`,c.fillRect(-145*s,-4,290*s,8),[{px:-125*s,count:i,col:`#68b5ff`},{px:125*s,count:n,col:`#5eead4`}].forEach(e=>{c.save(),c.translate(e.px,0),c.rotate(-g),c.strokeStyle=`rgba(255,255,255,0.55)`,c.lineWidth=1.5,c.beginPath(),c.moveTo(0,0),c.lineTo(-34*s,72),c.moveTo(0,0),c.lineTo(34*s,72),c.stroke(),c.fillStyle=$p(e.col,.72),c.beginPath(),c.arc(0,72,42*s,0,Math.PI),c.fill();for(let n=0;n<e.count;n++)em(c,(-22+n%4*14)*s,62-Math.floor(n/4)*14*s,6.5*s,t);c.fillStyle=`#ffffff`,c.font=`700 ${Math.round(Math.max(15,18*s))}px "Nunito", sans-serif`,c.textAlign=`center`,c.fillText(String(e.count),0,26),c.restore()}),c.restore(),Gm(c,d),v=requestAnimationFrame(y)};v=requestAnimationFrame(y),m.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{if(_)return;_=!0;let n=e.dataset.v;(t?Number(n)===10-a:n===(i<a?`<`:i>a?`>`:`=`))?(t&&(o=Number(n)),e.classList.add(`is-correct`),p(1),Wm(d,l/2,70,`#5eead4`,24),Mm(r,1400)):(e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),_=!1},1e3))})}),Am=()=>cancelAnimationFrame(v)}r()}function A(t){let n=t.mode===`sub`,r=0;function i(){if(Nm(),r>=4){h(`Hisob donosi!`,n?`Şarçalarni yorib ayirişni juda yaxşi bajardingiz!`:`Pufakçalarni birlaştirib töğri javob topdingiz!`);return}r++;let a=t.maxVal||20,o=zm(`bubble-${n?`sub`:`add`}-${a}`,()=>{if(n){let e=a<=10?Bm(5,10):Bm(11,18),t=Bm(2,Math.min(8,e-1));return{a:e,b:t,ans:e-t}}let e=Bm(4,9),t=Bm(Math.max(2,11-e),9);return{a:e,b:t,ans:e+t}},e=>`${e.a}:${e.b}`),s=o.a,c=o.b,l=o.ans;$.innerHTML=`
        <div class="edu-hud">
          <span>Misol ${r} / 4</span>
          <span class="edu-hud-pill" id="bm-hud">${n?`Yoriş: 0 / ${c}`:`${s} + ${c} = ?`}</span>
        </div>
        <div class="edu-banner" id="bm-banner">
          ${n?`<strong>${s} − ${c}</strong>: Avval <strong>${c}</strong> ta şarçani bosing (yoring)!`:`<strong>${s} + ${c}</strong>: Kök va sariq şarçalarni sanab javobni bosing!`}
        </div>
      `;let{canvas:u,ctx:d,w:f,h:m,getXY:g}=Um(230),_=document.createElement(`div`);_.className=`edu-options`,_.innerHTML=Hm(l,[l-2,l-1,l+1,l+2,l+3].filter(e=>e>=0&&e!==l)).map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``),n&&(_.style.opacity=`0.35`),$.appendChild(_);let v=[],y=0,b=!n,x=[];if(n){let e=Math.min(s,f<420?5:6),t=Math.min(58,(f-56)/Math.max(1,e)),n=f<420?18:22;for(let r=0;r<s;r++)x.push({x:f/2-(Math.min(e,s)-1)*t/2+r%e*t,y:62+Math.floor(r/e)*60,r:n,color:`#5eead4`,popped:!1,phase:r*.5})}else{let e=f<420?13:17,t=Math.min(s,f<440?3:5),n=Math.min(c,f<440?3:5),r=Math.max(70,f*.42-36),i=t>1?Math.min(44,r/(t-1)):0,a=n>1?Math.min(44,r/(n-1)):0,o=Math.max(24,f*.22-(t-1)*i/2),l=Math.min(f-24-(n-1)*a,f*.78-(n-1)*a/2);for(let n=0;n<s;n++)x.push({x:o+n%t*i,y:66+Math.floor(n/t)*48,r:e,color:`#68b5ff`,phase:n});for(let t=0;t<c;t++)x.push({x:l+t%n*a,y:66+Math.floor(t/n)*48,r:e,color:`#ffd166`,phase:t+3})}let S=0,C=t=>{let r=t*.001;d.clearRect(0,0,f,m),bm(d,f,m,e.bg||`aurora`,.34),n||(d.fillStyle=`#ffffff`,d.font=`400 32px "Nunito", serif`,d.textAlign=`center`,d.fillText(`+`,f/2,m/2));for(let e of x)e.popped||tm(d,e.x,e.y+Math.sin(r*1.15+e.phase)*3.5,e.r,e.color,``,r);Gm(d,v),S=requestAnimationFrame(C)};S=requestAnimationFrame(C);let w=e=>{if(!n||y>=c)return;let t=g(e);for(let e of x)if(!e.popped&&Math.hypot(t.x-e.x,t.y-e.y)<e.r+10){e.popped=!0,y++,Wm(v,e.x,e.y,`#5eead4`,16);let t=$.querySelector(`#bm-hud`);if(t&&(t.textContent=`Yorildi: ${y} / ${c}`),y>=c){b=!0,_.style.opacity=`1`;let e=$.querySelector(`#bm-banner`);e&&(e.innerHTML=`Endi qolgan şarçalarni sanab <strong>${s} − ${c}</strong> javobini bosing!`)}break}};u.addEventListener(`pointerdown`,w);let T=!1;_.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{b&&!T&&(T=!0,Number(e.dataset.v)===l?(e.classList.add(`is-correct`),p(1),Wm(v,f/2,m/2,`#5eead4`,26),Mm(i,1250)):(e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),T=!1},1e3)))})}),Am=()=>{cancelAnimationFrame(S),u.removeEventListener(`pointerdown`,w)}}i()}function j(e){Nm();let t=0;function n(){if(Nm(),t>=5){h(`Kosmik kapitan!`,`Raketangiz barcha meteorlarni yengib oyga yetib bordi!`);return}t++;let r=zm(`rocket-${e.mode||`add`}`,()=>{if(e.mode===`easy10`){let e=Math.random()<.45,t=e?Bm(4,10):Bm(1,6),n=e?Bm(1,t-1):Bm(1,10-t);return{a:t,b:n,op:e?`−`:`+`,ans:e?t-n:t+n}}let t=e.mode===`mixed`&&Math.random()<.5,n=t?Bm(12,28):Bm(11,27),r=t?Bm(3,11):Bm(10,22);return{a:n,b:r,op:t?`−`:`+`,ans:t?n-r:n+r}},e=>`${e.a}${e.op}${e.b}`),i=r.a,a=r.b,o=r.ans,s=r.op;$.innerHTML=`
        <div class="edu-hud">
          <span>Kosmos ${t} / 5</span>
          <span class="edu-hud-pill">Töğri meteoritni bosing!</span>
        </div>
        <div class="edu-banner">
          Töğri javobli meteoritni lazer bilan urib tuşiring: <strong>${i} ${s} ${a} = ?</strong>
        </div>
      `;let{canvas:c,ctx:l,w:u,h:d,getXY:f}=Um(310),m=[],g=[],_=Hm(o,[o-2,o-1,o+1,o+2,o+10].filter(e=>e>0&&e!==o)),v=Math.min(32,Math.max(24,Math.round(u*.085))),y=_.map((e,t)=>({val:e,x:u*(.16+t*.22),y:-20-t*14,vy:.18+Bm(0,10)*.01,r:v,dead:!1,shake:0})),b=u/2,x=!1,S=0,C=0,w=e=>{let t=C?Math.min(2.5,Math.max(.25,(e-C)/16.6667)):1;C=e;let n=e*.001;l.clearRect(0,0,u,d),bm(l,u,d,`space`,.22);for(let e of y){if(e.dead)continue;e.y+=e.vy*t,e.shake*=.85,e.y>d-85&&(e.y=35);let r=e.x+Math.sin(n*45)*e.shake*7;l.fillStyle=`rgba(255,255,255,0.16)`,l.strokeStyle=e.shake>.1?`#ff8fab`:`#68b5ff`,l.lineWidth=2,l.beginPath(),l.arc(r,e.y,e.r,0,Math.PI*2),l.fill(),l.stroke(),l.fillStyle=`#ffffff`,l.font=`700 20px "Nunito", sans-serif`,l.textAlign=`center`,l.textBaseline=`middle`,l.fillText(String(e.val),r,e.y)}for(let e=g.length-1;e>=0;e--){let n=g[e];n.a-=.03*t,n.a<=0?g.splice(e,1):(l.strokeStyle=$p(`#5eead4`,n.a),l.lineWidth=4,l.beginPath(),l.moveTo(n.x1,n.y1),l.lineTo(n.x2,n.y2),l.stroke())}im(l,`raketa`,b,d-42,68,n,`#68b5ff`),Gm(l,m),S=requestAnimationFrame(w)};S=requestAnimationFrame(w);let T=e=>{if(x)return;let t=f(e);for(let e of y)if(!e.dead&&Math.hypot(t.x-e.x,t.y-e.y)<e.r+12){b=e.x,g.push({x1:b,y1:d-65,x2:e.x,y2:e.y,a:1}),e.val===o?(x=!0,e.dead=!0,p(1),Wm(m,e.x,e.y,`#5eead4`,28),Mm(n,1250)):(e.shake=1,Wm(m,e.x,e.y,`#ff8fab`,10));break}};c.addEventListener(`pointerdown`,T),Am=()=>{cancelAnimationFrame(S),c.removeEventListener(`pointerdown`,T)}}n()}function M(){Nm();let e=Rm(`magic-zap`,[{old:`shahar`,neo:`Ş`,full:`şahar`},{old:`choy`,neo:`Ç`,full:`çoy`},{old:`o'rdak`,neo:`Ö`,full:`ördak`},{old:`g'oz`,neo:`Ğ`,full:`ğoz`},{old:`quyosh`,neo:`Ş`,full:`quyoş`},{old:`to'rt`,neo:`Ö`,full:`tört`},{old:`chiroq`,neo:`Ç`,full:`çiroq`},{old:`shamol`,neo:`Ş`,full:`şamol`},{old:`qo'zi`,neo:`Ö`,full:`qözi`},{old:`bog'`,neo:`Ğ`,full:`boğ`},{old:`ma'no`,neo:`ʼ`,full:`maʼno`},{old:`a'lo`,neo:`ʼ`,full:`aʼlo`}],6,e=>e.old),t=0;function n(){if(Nm(),t>=e.length){h(`Sehrgar ustoz!`,`Eski yozuvni yangi Ş, Ç, Ö, Ğ va ʼ belgilariga bexato ötkazdingiz!`);return}let r=e[t];t++,$.innerHTML=`
        <div class="edu-hud">
          <span>Konveyer ${t} / ${e.length}</span>
          <span class="edu-hud-pill">Yangi belgini tanlang!</span>
        </div>
        <div class="edu-banner">
          Eski yozuvdagi <strong>"${r.old}"</strong> sözini yangi harf tugmasi bilan özgartiring:
        </div>
      `;let{canvas:i,ctx:a,w:o,h:s}=Um(190),c=document.createElement(`div`);c.className=`edu-options`,c.innerHTML=[`Ş`,`Ç`,`Ö`,`Ğ`,`ʼ`].map(e=>`<button type="button" class="edu-opt" data-l="${e}">${e}</button>`).join(``),$.appendChild(c);let l=[],u=Math.max(96,o*.28),d=!1,f=0,m=0,g=e=>{let t=m?Math.min(2.5,Math.max(.25,(e-m)/16.6667)):1;m=e,a.clearRect(0,0,o,s),bm(a,o,s,`prism`,.36),a.fillStyle=`rgba(255,255,255,0.16)`,a.fillRect(20,s-42,o-40,14),d||(u=Math.min(o-96,u+.2*t)),a.fillStyle=d?`rgba(94,234,212,0.24)`:`rgba(255,255,255,0.16)`,a.strokeStyle=d?`#5eead4`:`rgba(255,255,255,0.35)`,a.lineWidth=2,wm(a,u-90,42,180,74,16),a.fill(),a.stroke(),a.fillStyle=`#ffffff`,a.font=`400 32px "Nunito", serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(d?r.full:r.old,u,79),Gm(a,l),f=requestAnimationFrame(g)};f=requestAnimationFrame(g),c.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{d||(e.dataset.l===r.neo?(d=!0,e.classList.add(`is-correct`),p(1),Wm(l,u,78,`#5eead4`,24),Mm(n,1350)):(e.classList.add(`is-wrong`),Mm(()=>e.classList.remove(`is-wrong`),950)))})}),Am=()=>cancelAnimationFrame(f)}n()}function N(e={}){Nm();let t=[{id:`sar`,a:{txt:`Şar`,art:null},b:{txt:``,art:`sar`}},{id:`ordak`,a:{txt:`Ördak`,art:null},b:{txt:``,art:`ordak`}},{id:`coy`,a:{txt:`Çoy`,art:null},b:{txt:``,art:`coy`}},{id:`tog`,a:{txt:`Toğ`,art:null},b:{txt:``,art:`tog`}},{id:`sir`,a:{txt:`Şir`,art:null},b:{txt:``,art:`sir`}},{id:`quyos`,a:{txt:`Quyoş`,art:null},b:{txt:``,art:`quyos`}},{id:`qozi`,a:{txt:`Qözi`,art:null},b:{txt:``,art:`qozi`}},{id:`olma`,a:{txt:`Olma`,art:null},b:{txt:``,art:`olma`}},{id:`m1`,a:{txt:`3 + 4`,art:null},b:{txt:`7`,art:null}},{id:`m2`,a:{txt:`9 − 3`,art:null},b:{txt:`6`,art:null}},{id:`m3`,a:{txt:`5 + 6`,art:null},b:{txt:`11`,art:null}},{id:`m4`,a:{txt:`8 + 4`,art:null},b:{txt:`12`,art:null}}],n=xm.map(e=>({id:`al-${e.upper}`,a:{txt:e.type===`belgi`?`ʼ (29)`:`${e.upper} ${e.lower}`,art:null},b:{txt:e.example,art:e.art}})),r=e.mode===`alpha`?n:t,i=Vm(Rm(`memory-${e.mode||`art`}`,r,4,e=>e.id).flatMap(e=>[{id:e.id,...e.a},{id:e.id,...e.b}]).map((e,t)=>({...e,uid:t,flipped:!1,matched:!1}))),a=null,o=!1,s=0,c=()=>{i.every(e=>e.matched)?(p(4),h(`Zör xotira!`,`Barcha 4 juftlikni ${s} urinişda topdingiz!`)):($.innerHTML=`
        <div class="edu-hud">
          <span>Xotira öyini</span>
          <span class="edu-hud-pill">Uriniş: ${s}</span>
        </div>
        <div class="edu-banner">${e.mode===`alpha`?`Harf va unga mos söz juftligini toping!`:`Rasm va söz yoki misol va javob juftligini toping!`}</div>
        <div class="edu-mem-grid">
          ${i.map(t=>`
            <button type="button" class="edu-mem-card ${t.flipped||t.matched?`is-open`:``} ${t.matched?`is-matched`:``}" data-uid="${t.uid}">
              ${t.flipped||t.matched?t.art&&e.mode===`alpha`?`<span style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;"><canvas class="mem-c" data-art="${t.art}" width="50" height="40"></canvas><span style="font-size:12px;font-weight:800;line-height:1.1">${t.txt}</span></span>`:t.art?`<canvas class="mem-c" data-art="${t.art}" width="64" height="58"></canvas>`:`<span>${t.txt}</span>`:`<span>?</span>`}
            </button>
          `).join(``)}
        </div>
      `,$.querySelectorAll(`.mem-c`).forEach(e=>{let t=e.getContext(`2d`),n=e.width,r=e.height;im(t,e.dataset.art,n/2,r/2,Math.min(n,r)*.88,.3,`#5eead4`)}),$.querySelectorAll(`.edu-mem-card`).forEach(e=>{e.addEventListener(`click`,()=>{if(o)return;let t=i.find(t=>t.uid===Number(e.dataset.uid));if(!(!t||t.flipped||t.matched)){if(t.flipped=!0,c(),!a)a=t;else if(s++,a.id===t.id)a.matched=!0,t.matched=!0,a=null,p(1),c();else{o=!0;let e=a;a=null,Mm(()=>{e.flipped=!1,t.flipped=!1,o=!1,c()},1150)}}})}))};c()}function P(){let e=[{id:`circle`,name:`Doira`,col:`#68b5ff`},{id:`square`,name:`Kvadrat`,col:`#5eead4`},{id:`triangle`,name:`Uçburçak`,col:`#ffd166`},{id:`star`,name:`Yulduz`,col:`#ff8fab`},{id:`hex`,name:`Oltiburçak`,col:`#a78bfa`},{id:`heart`,name:`Yurak`,col:`#fb7185`},{id:`diamond`,name:`Olmos`,col:`#38bdf8`},{id:`moon`,name:`Yarim oy`,col:`#facc15`}],t=Rm(`shadow-match`,e,5,e=>e.id),n=0;function r(e,t,n,r,i,a){if(e.save(),e.translate(n,r),e.fillStyle=a,e.strokeStyle=`rgba(255,255,255,0.5)`,e.lineWidth=2.5,e.beginPath(),t===`circle`)e.arc(0,0,i,0,Math.PI*2);else if(t===`square`)wm(e,-i*.86,-i*.86,i*1.72,i*1.72,12);else if(t===`triangle`)e.moveTo(0,-i),e.lineTo(i*.94,i*.78),e.lineTo(-i*.94,i*.78),e.closePath();else if(t===`hex`){for(let t=0;t<6;t++){let n=t*Math.PI/3-Math.PI/6;t===0?e.moveTo(Math.cos(n)*i,Math.sin(n)*i):e.lineTo(Math.cos(n)*i,Math.sin(n)*i)}e.closePath()}else if(t===`diamond`)e.moveTo(0,-i),e.lineTo(i*.78,0),e.lineTo(0,i),e.lineTo(-i*.78,0),e.closePath();else if(t===`heart`)e.moveTo(0,i*.78),e.bezierCurveTo(i*1.25,i*.05,i*.85,-i*.92,0,-i*.35),e.bezierCurveTo(-i*.85,-i*.92,-i*1.25,i*.05,0,i*.78);else if(t===`moon`)e.arc(0,0,i*.92,.45,Math.PI*2-.45),e.arc(i*.36,-i*.05,i*.72,Math.PI*2-.72,.72,!0),e.closePath();else{nm(e,0,0,i,a),e.restore();return}e.fill(),e.stroke(),e.restore()}function i(){if(Nm(),n>=t.length){h(`Geometriya ustasi!`,`Barcha şakllarni va soyalarni bexato tanidingiz!`);return}let a=t[n];n++;let o=Hm(a.name,e.filter(e=>e.id!==a.id).map(e=>e.name));$.innerHTML=`
        <div class="edu-hud">
          <span>Şakl ${n} / ${t.length}</span>
          <span class="edu-hud-pill">Soyadan şaklni taning</span>
        </div>
        <div class="edu-banner">Ekrandagi şaklning nomi qaysi?</div>
      `;let{canvas:s,ctx:c,w:l,h:u}=Um(200),d=document.createElement(`div`);d.className=`edu-options`,d.innerHTML=o.map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``),$.appendChild(d);let f=!1,m=!1,g=0,_=e=>{let t=e*.001;c.clearRect(0,0,l,u),bm(c,l,u,`prism`,.35);let n=1+Math.sin(t*2.2)*.05;r(c,a.id,l/2,u/2,Math.min(58,u*.32)*n,f?a.col:`rgba(255,255,255,0.22)`),g=requestAnimationFrame(_)};g=requestAnimationFrame(_),d.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{m||(m=!0,e.dataset.v===a.name?(f=!0,e.classList.add(`is-correct`),p(1),Mm(i,1100)):(e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),m=!1},900)))})}),Am=()=>cancelAnimationFrame(g)}i()}function F(){Nm();let e=Rm(`pattern-next`,[{seq:[`🔴`,`🔵`,`🔴`,`🔵`],ans:`🔴`,pool:[`🔴`,`🔵`,`🟢`,`🟡`],hint:`Navbatma-navbat rang`},{seq:[`★`,`🌙`,`★`,`🌙`],ans:`★`,pool:[`★`,`🌙`,`☀`,`☁`],hint:`Yulduz va oy`},{seq:[`A`,`Ç`,`A`,`Ç`],ans:`A`,pool:[`A`,`Ç`,`Ş`,`Ö`],hint:`Harf zanjiri`},{seq:[`5`,`10`,`15`,`20`],ans:`25`,pool:[`25`,`21`,`30`,`22`],hint:`+5 qadam`},{seq:[`▲`,`●`,`●`,`▲`,`●`],ans:`●`,pool:[`●`,`▲`,`■`,`★`],hint:`1 uçburçak, 2 doira`},{seq:[`2`,`4`,`6`,`8`],ans:`10`,pool:[`10`,`9`,`12`,`11`],hint:`Juft sonlar (+2)`},{seq:[`🍏`,`🍒`,`🍏`,`🍒`],ans:`🍏`,pool:[`🍏`,`🍒`,`🍋`,`🍇`],hint:`Meva tartibi`},{seq:[`Ş`,`Ö`,`Ğ`,`Ş`,`Ö`],ans:`Ğ`,pool:[`Ğ`,`Ş`,`Ö`,`Ç`],hint:`3 harf sikli`},{seq:[`1`,`3`,`5`,`7`],ans:`9`,pool:[`9`,`8`,`10`,`11`],hint:`Toq sonlar (+2)`},{seq:[`10`,`20`,`30`,`40`],ans:`50`,pool:[`50`,`45`,`60`,`35`],hint:`Önliklar (+10)`}],5,e=>e.seq.join(`,`)),t=0;function n(){if(Nm(),t>=e.length){h(`Mantiq ustasi!`,`Barcha mantiqiy zanjirlarni töğri davom ettirdingiz!`);return}let r=e[t];t++;let i=Hm(r.ans,r.pool.filter(e=>e!==r.ans)),a=!1;$.innerHTML=`
        <div class="edu-hud">
          <span>Zanjir ${t} / ${e.length}</span>
          <span class="edu-hud-pill">${r.hint}</span>
        </div>
        <div class="edu-banner">Söroq belgisi <strong>"?"</strong> örniga qaysi element keladi?</div>
        <div class="edu-pattern-row">
          ${r.seq.map(e=>`<span class="edu-pattern-cell">${e}</span>`).join(``)}
          <span class="edu-pattern-cell is-gap" id="pat-gap">?</span>
        </div>
        <div class="edu-options">
          ${i.map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``)}
        </div>
      `,$.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{if(!a){if(a=!0,e.dataset.v===r.ans){e.classList.add(`is-correct`);let t=$.querySelector(`#pat-gap`);t&&(t.textContent=r.ans),p(1),Mm(n,1050)}else e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),a=!1},900)}})})}n()}function I(){Nm();let e=Rm(`color-mixer`,[{aName:`Qizil`,aHex:`#ef4444`,bName:`Sariq`,bHex:`#facc15`,ans:`Zarğaldoq`,pool:[`Zarğaldoq`,`Binafşa`,`Yaşil`,`Kök`]},{aName:`Kök`,aHex:`#3b82f6`,bName:`Sariq`,bHex:`#facc15`,ans:`Yaşil`,pool:[`Yaşil`,`Zarğaldoq`,`Puşti`,`Qora`]},{aName:`Qizil`,aHex:`#ef4444`,bName:`Kök`,bHex:`#3b82f6`,ans:`Binafşa`,pool:[`Binafşa`,`Yaşil`,`Sariq`,`Kulrang`]},{aName:`Qizil`,aHex:`#ef4444`,bName:`Oq`,bHex:`#f8fafc`,ans:`Puşti`,pool:[`Puşti`,`Qora`,`Kök`,`Yaşil`]},{aName:`Qora`,aHex:`#1e293b`,bName:`Oq`,bHex:`#f8fafc`,ans:`Kulrang`,pool:[`Kulrang`,`Sariq`,`Qizil`,`Puşti`]},{aName:`Kök`,aHex:`#2563eb`,bName:`Oq`,bHex:`#f8fafc`,ans:`Havorang`,pool:[`Havorang`,`Qizil`,`Binafşa`,`Jigarrang`]},{aName:`Sariq`,aHex:`#eab308`,bName:`Yaşil`,bHex:`#16a34a`,ans:`Oç yaşil`,pool:[`Oç yaşil`,`Binafşa`,`Puşti`,`Qora`]}],5,e=>`${e.aName}+${e.bName}`),t=0;function n(){if(Nm(),t>=e.length){h(`Rassom usta!`,`Ranglarni aralaştirib barcha hosil bölgan ranglarni topdingiz!`);return}let r=e[t];t++;let i=Hm(r.ans,r.pool.filter(e=>e!==r.ans)),a=!1;$.innerHTML=`
        <div class="edu-hud">
          <span>Rang ${t} / ${e.length}</span>
          <span class="edu-hud-pill">Rang aralaşuvi</span>
        </div>
        <div class="edu-banner"><strong>${r.aName}</strong> va <strong>${r.bName}</strong> ranglar qöşilsa qaysi rang çiqadi?</div>
        <div class="edu-color-mix-row">
          <div class="edu-color-swatch" style="background:${r.aHex}">${r.aName}</div>
          <span class="edu-color-op">+</span>
          <div class="edu-color-swatch" style="background:${r.bHex}">${r.bName}</div>
          <span class="edu-color-op">=</span>
          <div class="edu-color-swatch" style="background:rgba(255,255,255,0.14)">?</div>
        </div>
        <div class="edu-options">
          ${i.map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``)}
        </div>
      `,$.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{a||(a=!0,e.dataset.v===r.ans?(e.classList.add(`is-correct`),p(1),Mm(n,1050)):(e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),a=!1},900)))})})}n()}function L(){Nm();let e=Rm(`syllable-clap`,[{word:`Şar`,syl:`Şar`,count:1,art:`sar`},{word:`Non`,syl:`Non`,count:1,art:`quyos`},{word:`Boğ`,syl:`Boğ`,count:1,art:`olma`},{word:`Olma`,syl:`Ol-ma`,count:2,art:`olma`},{word:`Ördak`,syl:`Ör-dak`,count:2,art:`ordak`},{word:`Çoynak`,syl:`Çoy-nak`,count:2,art:`coy`},{word:`Qözi`,syl:`Qö-zi`,count:2,art:`qozi`},{word:`Quyoş`,syl:`Qu-yoş`,count:2,art:`quyos`},{word:`Poyezd`,syl:`Po-yezd`,count:2,art:`poyezd`},{word:`Qurbaqa`,syl:`Qur-ba-qa`,count:3,art:`qurbaqa`},{word:`Tarozi`,syl:`Ta-ro-zi`,count:3,art:`tarozi`},{word:`Raketa`,syl:`Ra-ke-ta`,count:3,art:`raketa`},{word:`Kapalak`,syl:`Ka-pa-lak`,count:3,art:`gul`}],5,e=>e.word),t=0;function n(){if(Nm(),t>=e.length){h(`Böğin ustasi!`,`Sözlardagi barcha böğinlarni töğri sanadingiz!`);return}let r=e[t];t++;let i=!1;$.innerHTML=`
        <div class="edu-hud">
          <span>Söz ${t} / ${e.length}</span>
          <span class="edu-hud-pill">Qarsak bilan sanang 👏</span>
        </div>
        <div class="edu-word-card">
          <canvas id="syl-art" width="84" height="84"></canvas>
          <div class="edu-word-card-text" id="syl-word">${r.word}</div>
        </div>
        <div class="edu-banner"><strong>"${r.word}"</strong> sözida neçta böğin bor?</div>
        <div class="edu-options">
          ${[1,2,3,4].map(e=>`<button type="button" class="edu-opt" data-v="${e}">👏 ${e} ta</button>`).join(``)}
        </div>
      `,im($.querySelector(`#syl-art`).getContext(`2d`),r.art,42,42,68,.3,`#5eead4`),$.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{if(!i){if(i=!0,Number(e.dataset.v)===r.count){e.classList.add(`is-correct`);let t=$.querySelector(`#syl-word`);t&&(t.textContent=r.syl),p(1),Mm(n,1100)}else e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),i=!1},900)}})})}n()}function R(){Nm();let e=Rm(`vowel-sort`,xm,7,e=>e.upper),t=0;function n(){if(Nm(),t>=e.length){h(`Tovuş bilimdoni!`,`Unli va undosh harflarni aʼlo darajada ajratdingiz!`);return}let r=e[t];t++;let i=r.type===`unli`,a=!1;$.innerHTML=`
        <div class="edu-hud">
          <span>Belgi ${t} / ${e.length}</span>
          <span class="edu-hud-pill">${r.num}-örin · ${r.example}</span>
        </div>
        <div class="edu-banner">Ushbu belgi qaysi guruhga kiradi?</div>
        <div class="edu-sort-token">
          <span>${r.type===`belgi`?`ʼ`:`${r.upper}${r.lower}`}</span>
          <small>${r.example}</small>
        </div>
        <div class="edu-sort-bins">
          <button type="button" class="edu-sort-bin" data-k="unli">
            <span>Unli tovuş</span>
            <small>A · E · I · O · U · Ö</small>
          </button>
          <button type="button" class="edu-sort-bin" data-k="other">
            <span>Undosh / Belgi</span>
            <small>B Ç D ... Z va ʼ</small>
          </button>
        </div>
      `,$.querySelectorAll(`.edu-sort-bin`).forEach(e=>{e.addEventListener(`click`,()=>{a||(a=!0,e.dataset.k===`unli`===i?(e.classList.add(`is-correct`),p(1),Mm(n,850)):(e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),a=!1},850)))})})}n()}function ee(){Nm();let e=Rm(`opposite-words`,[{w:`Katta`,a:`Kiçik`,pool:[`Kiçik`,`Uzun`,`Baland`,`Oq`]},{w:`Issiq`,a:`Sovuq`,pool:[`Sovuq`,`Yumşoq`,`Tez`,`Quruq`]},{w:`Tez`,a:`Sekin`,pool:[`Sekin`,`Yaqin`,`Oğir`,`Yangi`]},{w:`Uzun`,a:`Qisqa`,pool:[`Qisqa`,`Katta`,`Keng`,`Yengil`]},{w:`Kun`,a:`Tun`,pool:[`Tun`,`Tong`,`Bahor`,`Şamol`]},{w:`Baland`,a:`Past`,pool:[`Past`,`Uzun`,`Yumşoq`,`Kök`]},{w:`Yoruğ`,a:`Qoronği`,pool:[`Qoronği`,`Sovuq`,`Şirin`,`Eski`]},{w:`Oğir`,a:`Yengil`,pool:[`Yengil`,`Katta`,`Qattiq`,`Tez`]},{w:`Yangi`,a:`Eski`,pool:[`Eski`,`Kiçik`,`Oçiq`,`Issiq`]},{w:`Oçiq`,a:`Yopiq`,pool:[`Yopiq`,`Töğri`,`Baland`,`Qisqa`]},{w:`Şirin`,a:`Aççiq`,pool:[`Aççiq`,`Sovuq`,`Yengil`,`Past`]}],5,e=>e.w),t=0;function n(){if(Nm(),t>=e.length){h(`Zid sözlar ustasi!`,`Barcha qarama-qarşi maʼnoli sözlarni töğri topdingiz!`);return}let r=e[t];t++;let i=Hm(r.a,r.pool.filter(e=>e!==r.a)),a=!1;$.innerHTML=`
        <div class="edu-hud">
          <span>Söz ${t} / ${e.length}</span>
          <span class="edu-hud-pill">Zid maʼno ↔</span>
        </div>
        <div class="edu-word-card">
          <div class="edu-word-card-text">${r.w} ↔ ?</div>
        </div>
        <div class="edu-banner"><strong>"${r.w}"</strong> söziga qarama-qarşi sözni tanlang:</div>
        <div class="edu-options">
          ${i.map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``)}
        </div>
      `,$.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{a||(a=!0,e.dataset.v===r.a?(e.classList.add(`is-correct`),p(1),Mm(n,950)):(e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),a=!1},850)))})})}n()}function z(){Nm();let e=[{h:1,m:0},{h:2,m:0},{h:3,m:0},{h:4,m:0},{h:5,m:0},{h:6,m:0},{h:7,m:0},{h:8,m:0},{h:9,m:0},{h:10,m:0},{h:11,m:0},{h:12,m:0},{h:1,m:30},{h:2,m:30},{h:3,m:30},{h:4,m:30},{h:6,m:30},{h:7,m:30},{h:9,m:30},{h:11,m:30}],t=e=>`${String(e.h).padStart(2,`0`)}:${String(e.m).padStart(2,`0`)}`,n=Rm(`clock-time`,e,4,t),r=0;function i(){if(Nm(),r>=n.length){h(`Vaqt ustasi!`,`Soat strelkalaridan vaqtni aniq öqişni örganib oldingiz!`);return}let a=n[r];r++;let o=t(a),s=Hm(o,e.filter(e=>t(e)!==o).map(t)),c=!1;$.innerHTML=`
        <div class="edu-hud">
          <span>Soat ${r} / ${n.length}</span>
          <span class="edu-hud-pill">Vaqtni toping 🕒</span>
        </div>
        <div class="edu-banner">Soat neça bölganini tanlang:</div>
      `;let{canvas:l,ctx:u,w:d,h:f}=Um(215),m=document.createElement(`div`);m.className=`edu-options`,m.innerHTML=s.map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``),$.appendChild(m),(()=>{u.clearRect(0,0,d,f),bm(u,d,f,`prism`,.34);let e=d/2,t=f/2,n=Math.min(d,f)*.4;u.fillStyle=`rgba(255,255,255,0.14)`,u.strokeStyle=`rgba(255,255,255,0.45)`,u.lineWidth=3,u.beginPath(),u.arc(e,t,n,0,Math.PI*2),u.fill(),u.stroke(),u.fillStyle=`#ffffff`,u.font=`700 13px "Nunito", sans-serif`,u.textAlign=`center`,u.textBaseline=`middle`;for(let r=1;r<=12;r++){let i=r*Math.PI/6-Math.PI/2;u.fillText(String(r),e+n*.78*Math.cos(i),t+n*.78*Math.sin(i))}let r=a.m/60*Math.PI*2-Math.PI/2,i=(a.h%12+a.m/60)/12*Math.PI*2-Math.PI/2;u.strokeStyle=`#5eead4`,u.lineWidth=4,u.lineCap=`round`,u.beginPath(),u.moveTo(e,t),u.lineTo(e+Math.cos(r)*n*.64,t+Math.sin(r)*n*.64),u.stroke(),u.strokeStyle=`#ffd166`,u.lineWidth=6,u.beginPath(),u.moveTo(e,t),u.lineTo(e+Math.cos(i)*n*.42,t+Math.sin(i)*n*.42),u.stroke(),u.fillStyle=`#ffffff`,u.beginPath(),u.arc(e,t,5,0,Math.PI*2),u.fill()})(),m.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{c||(c=!0,e.dataset.v===o?(e.classList.add(`is-correct`),p(1),Mm(i,1050)):(e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),c=!1},850)))})})}i()}function te(){Nm();let e=Rm(`first-letter`,[{word:`_AR`,a:`Ş`,art:`sar`,pool:[`Ş`,`Ç`,`S`,`Ğ`]},{word:`_OYNAK`,a:`Ç`,art:`coy`,pool:[`Ç`,`Ş`,`K`,`T`]},{word:`_RDAK`,a:`Ö`,art:`ordak`,pool:[`Ö`,`O`,`U`,`A`]},{word:`_OZ`,a:`Ğ`,art:`ordak`,pool:[`Ğ`,`G`,`Q`,`X`]},{word:`_LMA`,a:`O`,art:`olma`,pool:[`O`,`Ö`,`A`,`U`]},{word:`_ITOB`,a:`K`,art:`kitob`,pool:[`K`,`Q`,`B`,`D`]},{word:`_UL`,a:`G`,art:`gul`,pool:[`G`,`Ğ`,`L`,`M`]},{word:`_AKETA`,a:`R`,art:`raketa`,pool:[`R`,`L`,`P`,`T`]},{word:`_URBAQA`,a:`Q`,art:`qurbaqa`,pool:[`Q`,`K`,`Ğ`,`B`]},{word:`_OYEZD`,a:`P`,art:`poyezd`,pool:[`P`,`B`,`T`,`V`]},{word:`_ULDUZ`,a:`Y`,art:`yulduz`,pool:[`Y`,`J`,`Z`,`U`]},{word:`_AROZI`,a:`T`,art:`tarozi`,pool:[`T`,`D`,`S`,`Z`]},{word:`_UYOŞ`,a:`Q`,art:`quyos`,pool:[`Q`,`K`,`Ş`,`O`]}],5,e=>e.word),t=0;function n(){if(Nm(),t>=e.length){h(`Boş harf ustasi!`,`Rasmga qarab barcha sözlarning boş harfini töğri topdingiz!`);return}let r=e[t];t++;let i=Hm(r.a,r.pool.filter(e=>e!==r.a)),a=!1;$.innerHTML=`
        <div class="edu-hud">
          <span>Söz ${t} / ${e.length}</span>
          <span class="edu-hud-pill">Boş harfni tanlang</span>
        </div>
        <div class="edu-word-card">
          <canvas id="fl-art" width="84" height="84"></canvas>
          <div class="edu-word-card-text" id="fl-word">${r.word}</div>
        </div>
        <div class="edu-options">
          ${i.map(e=>`<button type="button" class="edu-opt" data-v="${e}">${e}</button>`).join(``)}
        </div>
      `,im($.querySelector(`#fl-art`).getContext(`2d`),r.art,42,42,68,.3,`#5eead4`),$.querySelectorAll(`.edu-opt`).forEach(e=>{e.addEventListener(`click`,()=>{if(!a){if(a=!0,e.dataset.v===r.a){e.classList.add(`is-correct`);let t=$.querySelector(`#fl-word`);t&&(t.innerHTML=r.word.replace(`_`,`<span style="color:#5eead4">${r.a}</span>`)),p(1),Mm(n,1050)}else e.classList.add(`is-wrong`),Mm(()=>{e.classList.remove(`is-wrong`),a=!1},850)}})})}n()}function ne(){let e=Rm(`final-mix`,[0,1,2,3,4,5,6,7,8,9],1,String)[0];e===0?v({letter:`Ğ`}):e===1?C():e===2?S():e===3?x():e===4?j({mode:`mixed`}):e===5?M():e===6?P():e===7?F():e===8?L():ee()}function B(e){switch(e.gameType){case`pvp-duel`:g(e.config);break;case`picture-hunt`:_(e.config);break;case`flashlight-hunt`:v(e.config);break;case`letter-trace`:y(e.config);break;case`duck-pond`:b();break;case`xylophone-notes`:x();break;case`train-builder`:S();break;case`lion-feeder`:C();break;case`alphabet-board`:w();break;case`balloon-pop`:T(e.config);break;case`word-builder`:E(e.config);break;case`apple-basket`:D(e.config);break;case`frog-hops`:O(e.config);break;case`balance-scale`:k(e.config);break;case`bubble-math`:A(e.config);break;case`rocket-shooter`:j(e.config);break;case`magic-zap`:M();break;case`memory-art`:N(e.config);break;case`shadow-match`:P();break;case`pattern-next`:F();break;case`color-mixer`:I();break;case`syllable-clap`:L();break;case`vowel-sort`:R();break;case`opposite-words`:ee();break;case`clock-time`:z();break;case`first-letter`:te();break;case`final-mix`:ne();break;default:D({max:10})}}B(e)}var Xm=xm,Zm=`vesna.alphabet.idea`,Qm=(()=>{try{let e=localStorage.getItem(Zm);return e===`matrix`||e===`strip`||e===`cards`?e:`matrix`}catch{return`matrix`}})();function $m(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function eh(e){if(e.upper===`Ç`)return{title:`3-harf tekşiruvi`,prompt:`Avvalgi «Ch ch» tovuşi yangi alifboda qanday yoziladi?`,options:$m([`Ç ç`,`Ş ş`,`C c`,`Ğ ğ`]),answer:`Ç ç`,explain:`Töğri! Avvalgi «Ch ch» endi «Ç ç» tarzida yoziladi (masalan: Çoynak).`};if(e.upper===`Ğ`)return{title:`8-harf tekşiruvi`,prompt:`Avvalgi «Gʻ gʻ» harfi alifboda neçinçi örinda va qanday yoziladi?`,options:$m([`8 · Ğ ğ`,`7 · G g`,`22 · Ş ş`,`17 · Ö ö`]),answer:`8 · Ğ ğ`,explain:`Töğri! «Ğ ğ» alifboda 8-örinda turadi (masalan: Ğoz, Toğ).`};if(e.upper===`Ö`)return{title:`17-harf tekşiruvi`,prompt:`Avvalgi «Oʻ oʻ» harfi örniga qaysi harf işlatiladi?`,options:$m([`Ö ö`,`O o`,`U u`,`Ğ ğ`]),answer:`Ö ö`,explain:`Töğri! «Oʻ oʻ» endi «Ö ö» bölib 17-örinda turadi (Ördak).`};if(e.upper===`Ş`)return{title:`22-harf tekşiruvi`,prompt:`«Quyosh» sözidagi «sh» örniga qaysi harf yoziladi?`,options:$m([`Ş ş`,`S s`,`Ç ç`,`J j`]),answer:`Ş ş`,explain:`Töğri! Avvalgi «Sh sh» endi «Ş ş» (Quyoş, Şar, Şir).`};if(e.type===`belgi`)return{title:`29-belgi tekşiruvi`,prompt:`29-örindagi «ʼ» belgisi qaysi sözda töğri işlatilgan?`,options:$m([`Maʼno`,`Anor`,`Şar`,`Çoynak`]),answer:`Maʼno`,explain:`Töğri! «ʼ» — tutuq belgisi bölib, Maʼno, Aʼlo, Sanʼat kabi sözlarda qöllanadi.`};let t=$m(Xm.filter(t=>t.upper!==e.upper&&t.type!==`belgi`)).slice(0,3).map(e=>e.example),n=e.words&&e.words.length?e.words:[e.example],r=n[Math.floor(Math.random()*n.length)],i=$m([r,...t]);return{title:`${e.num}-harf tekşiruvi`,prompt:`«${e.upper} ${e.lower}» harfi bilan boşlanadigan sözni tanlang:`,options:i,answer:r,explain:`Barakalla! «${r}» sözi ${e.num}-harf «${e.upper}» bilan boşlanadi.`}}function th(e){return e.replace(/Ch/g,`Ç`).replace(/CH/g,`Ç`).replace(/ch/g,`ç`).replace(/Sh/g,`Ş`).replace(/SH/g,`Ş`).replace(/sh/g,`ş`).replace(/O['‘ʻ`]/g,`Ö`).replace(/o['‘ʻ`]/g,`ö`).replace(/G['‘ʻ`]/g,`Ğ`).replace(/g['‘ʻ`]/g,`ğ`).replace(/([A-Za-zÖöĞğŞşÇç])['‘`]/g,`$1ʼ`)}function nh(e){return e.type===`yangi`?`#5eead4`:e.type===`belgi`?`#ffd166`:e.type===`unli`?`#68b5ff`:`#a78bfa`}function rh(e){e.upper===`Ş`?Ym(Sm[0]):e.upper===`Ç`?Ym(Sm[31]||Sm[0]):e.upper===`Ö`?Ym(Sm[2]):e.upper===`Ğ`?Ym(Sm[3]):e.type===`belgi`?Ym(Sm[34]||Sm[4]):Ym({...Sm[1],config:{...Sm[1].config||{},startLetter:e.upper}})}function ih(){let e=document.getElementById(`view-alphabet`),t=document.getElementById(`alpha-host`);if(!e||!t)return{el:e||document.createElement(`div`),enter(){},leave(){}};let n=t,r=Qm,i=`all`,a=2,o=`trace`,s=`Choynak, shahar, o'rdak, g'oz va ma'no`,c=2,l=0,u=0,d=null,f=!1,p=0,m=[],h=0,g=[],_=null,v=[{q:`3-örinda turgan yangi harf qaysi?`,opts:[`Ç ç`,`Ş ş`,`Ö ö`,`Ğ ğ`],a:`Ç ç`},{q:`29-örinda alifboga nima qöşilgan?`,opts:[`ʼ (tutuq belgisi)`,`Ng ng`,`Sh sh`,`Ch ch`],a:`ʼ (tutuq belgisi)`},{q:`Avvalgi «Oʻ oʻ» yangi alifboda neçinçi va qaysi harf?`,opts:[`17 · Ö ö`,`16 · O o`,`8 · Ğ ğ`,`22 · Ş ş`],a:`17 · Ö ö`},{q:`Avvalgi «Sh sh» qaysi harf bilan almaşdi?`,opts:[`Ş ş (22)`,`Ç ç (3)`,`S s (21)`,`Ğ ğ (8)`],a:`Ş ş (22)`},{q:`Avvalgi «Gʻ gʻ» qaysi harfga aylandi?`,opts:[`Ğ ğ (8)`,`G g (7)`,`Q q (19)`,`Ö ö (17)`],a:`Ğ ğ (8)`},{q:`«Quyosh» sözining yangi alifbodagi töğri yozuvi:`,opts:[`Quyoş`,`Quyos`,`Quyoch`,`Qöyoş`],a:`Quyoş`},{q:`«Ma’no» sözida 29-belgi qanday qöyiladi?`,opts:[`Maʼno`,`Mano`,`Mağno`,`Maçno`],a:`Maʼno`},{q:`«Choynak» sözi qaysi harf bilan boşlanadi?`,opts:[`Ç`,`Ş`,`C`,`Ğ`],a:`Ç`},{q:`«Bog‘» sözi oxirida qaysi harf yoziladi?`,opts:[`ğ`,`g`,`q`,`ç`],a:`ğ`},{q:`Alifboda 1-örindagi unli harf qaysi?`,opts:[`A a`,`O o`,`E e`,`I i`],a:`A a`}],y=$m(v.map((e,t)=>t)),b=$m(v[y[0]].opts);function x(){cancelAnimationFrame(p),p=0}function S(){if(x(),!f)return;let e=0,t=n=>{if(p=0,f){if(!document.hidden&&!document.body.classList.contains(`is-game-open`)&&(!e||n-e>=42)){e=n;let t=n*.001;for(let e of m){if(!e.canvas.isConnected)continue;let n=e.canvas.getContext(`2d`);if(!n)continue;let r=e.canvas.width,i=e.canvas.height;n.clearRect(0,0,r,i),im(n,e.art,r/2,i/2,e.size,t,e.accent)}}f&&(p=requestAnimationFrame(t))}};p=requestAnimationFrame(t)}function C(e,t){_&&=(_(),null);let n=Math.min(window.devicePixelRatio||1,1.5),r=e.getBoundingClientRect(),i=Math.max(240,r.width||320);e.width=Math.round(i*n),e.height=Math.round(164*n),e.style.height=`164px`;let a=e.getContext(`2d`);if(!a)return;let o=document.createElement(`canvas`);o.width=e.width,o.height=e.height;let s=o.getContext(`2d`),c=um();if(s){s.setTransform(n,0,0,n,0,0),s.strokeStyle=c?`rgba(15, 23, 42, 0.12)`:`rgba(255, 255, 255, 0.12)`,s.setLineDash([5,5]),s.lineWidth=1,[39.36,82,127.92].forEach(e=>{s.beginPath(),s.moveTo(16,e),s.lineTo(i-16,e),s.stroke()}),s.setLineDash([]);let e=t.type===`belgi`?`ʼ`:`${t.upper} ${t.lower}`;s.font=`800 ${t.type===`belgi`?110:78}px "Nunito", sans-serif`,s.textAlign=`center`,s.textBaseline=`middle`,s.fillStyle=c?`rgba(15, 23, 42, 0.08)`:`rgba(255, 255, 255, 0.09)`,s.fillText(e,i/2,86),s.strokeStyle=c?`rgba(2, 132, 199, 0.35)`:`rgba(94, 234, 212, 0.35)`,s.lineWidth=1.5,s.setLineDash([4,4]),s.strokeText(e,i/2,86),s.setLineDash([])}let l=!1,u=[],d=()=>{a.save(),a.setTransform(n,0,0,n,0,0),a.clearRect(0,0,i,164),a.drawImage(o,0,0,i,164),a.lineCap=`round`,a.lineJoin=`round`,a.lineWidth=8,a.strokeStyle=c?`#0284c7`:`#5eead4`;for(let e of g)if(!(e.length<2)){a.beginPath(),a.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)a.lineTo(e[t].x,e[t].y);a.stroke()}a.restore()},f=t=>{let n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}},p=e=>{e.preventDefault(),l=!0,u=[f(e)],g.push(u),d()},m=e=>{l&&(e.preventDefault(),u.push(f(e)),d())},h=()=>{l=!1};e.addEventListener(`pointerdown`,p),window.addEventListener(`pointermove`,m),window.addEventListener(`pointerup`,h),d(),_=()=>{e.removeEventListener(`pointerdown`,p),window.removeEventListener(`pointermove`,m),window.removeEventListener(`pointerup`,h)}}function w(){clearTimeout(h),h=0,_&&=(_(),null),m=[];let e=Xm[a]||Xm[0],t=nh(e),i=[{id:`matrix`,label:`1-g‘oya · Studiya`,desc:`29 jadval + yon maşq`},{id:`strip`,label:`2-g‘oya · Lenta`,desc:`Taqqoslaş + ögirgiç`},{id:`cards`,label:`3-g‘oya · Kartalar`,desc:`Guruhlar + tez test`}];n.innerHTML=``;let o=document.createElement(`div`);o.className=`alpha-studio-shell`;let s=document.createElement(`header`);s.className=`alpha-studio-head`,s.innerHTML=`
      <div class="alpha-head-title-wrap">
        <h1 class="alpha-head-title">Yangi Özbek Alifbosi <span class="alpha-count-tag">29 ta</span></h1>
        <p class="alpha-head-sub">1. A a — 29. ʼ (tutuq belgisi) · Ç, Ğ, Ö, Ş tartibi</p>
      </div>
      <div class="alpha-idea-switcher" role="tablist" aria-label="Alifbo dizayn g‘oyalari">
        ${i.map(e=>`
          <button type="button" class="alpha-idea-btn ${r===e.id?`is-active`:``}" data-idea="${e.id}" role="tab" aria-selected="${r===e.id}">
            <strong>${e.label}</strong>
            <span>${e.desc}</span>
          </button>`).join(``)}
      </div>
    `,o.appendChild(s),s.querySelectorAll(`.alpha-idea-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.idea;if(t&&t!==r){r=t;try{localStorage.setItem(Zm,t)}catch{}w()}})}),r===`matrix`?E(o,e,t):r===`strip`?D(o,e,t):O(o),T(o),n.appendChild(o),S()}function T(e){let t=[0,1,2,3,4,5,6,7,8,21,27,28,29,31,32,34,35,37,38],n=document.createElement(`section`);n.className=`alpha-games-dock`,n.setAttribute(`aria-label`,`Til va alifbo öyinlari`),n.innerHTML=`
      <div class="alpha-games-head">
        <div>
          <h2 class="alpha-games-title">Til va Alifbo Öyinlari (${t.length} ta)</h2>
          <p class="alpha-games-sub">Maşqlar bölimidagi barcha harf, böğin, zid söz va yozuv öyinlari · har safar yangi tasodifiy savollar</p>
        </div>
        <button type="button" class="edu-btn-primary alpha-pvp-cta" id="alpha-pvp-duel-btn">⚔️ Alifbo PvP Duel (1 vs 2)</button>
      </div>
      <div class="alpha-games-grid"></div>
    `,n.querySelector(`#alpha-pvp-duel-btn`)?.addEventListener(`click`,()=>{Jm(`lang`)});let r=n.querySelector(`.alpha-games-grid`);t.forEach(e=>{let t=Sm[e];if(!t)return;let n=document.createElement(`button`);n.type=`button`,n.className=`alpha-game-btn`,n.innerHTML=`
        <span class="alpha-game-glyph">${t.glyph}</span>
        <span class="alpha-game-info">
          <strong>${t.title}</strong>
          <small>${t.subGlyph}</small>
        </span>
        <span class="alpha-game-go" aria-hidden="true">→</span>
      `,n.addEventListener(`click`,()=>Ym(t)),r.appendChild(n)}),e.appendChild(n)}function E(e,t,n){let r=[{id:`all`,label:`Hammasi (29)`},{id:`yangi`,label:`Yangi harflar (4)`},{id:`unli`,label:`Unlilar (5)`},{id:`undosh`,label:`Undoshlar (19)`},{id:`belgi`,label:`Tutuq belgisi (1)`}],s=document.createElement(`div`);s.className=`alpha-filter-row`,r.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`alpha-filter-btn ${i===e.id?`is-active`:``}`,t.textContent=e.label,t.addEventListener(`click`,()=>{i=e.id,w()}),s.appendChild(t)}),e.appendChild(s);let c=document.createElement(`div`);c.className=`alpha-matrix-layout`;let l=document.createElement(`div`);l.className=`alpha-matrix-board`,(i===`all`?Xm:Xm.filter(e=>e.type===i)).forEach(e=>{let t=e.num-1,n=document.createElement(`button`);n.type=`button`,n.className=[`alpha-matrix-cell`,t===a?`is-selected`:``,e.type===`yangi`?`is-reformed`:``,e.type===`belgi`?`is-mark`:``].filter(Boolean).join(` `),n.innerHTML=`
        <span class="alpha-cell-num">${String(e.num).padStart(2,`0`)}</span>
        <span class="alpha-cell-glyph">${e.type===`belgi`?`ʼ`:`${e.upper} <small>${e.lower}</small>`}</span>
        <span class="alpha-cell-word">${e.old?e.old:e.example}</span>
      `,n.addEventListener(`click`,()=>{a=t,g=[],w()}),l.appendChild(n)});let u=document.createElement(`aside`);u.className=`alpha-stage-card`;let d=document.createElement(`div`);d.className=`alpha-stage-top`;let f=document.createElement(`div`);f.className=`alpha-stage-hero`;let p=t.type===`belgi`?`ʼ`:`${t.upper} ${t.lower}`;f.innerHTML=`
      <div class="alpha-stage-meta">
        <span>${String(t.num).padStart(2,`0`)} / 29</span>
        <span>·</span>
        <span>${t.type===`yangi`?`Yangi harf`:t.type===`belgi`?`Tutuq belgisi`:t.type===`unli`?`Unli`:`Undosh`}</span>
        ${t.old?`<span>· Avvalgi: <strong>${t.old}</strong></span>`:``}
      </div>
      <div class="alpha-stage-pair" style="--entry-accent:${n}">${p}</div>
      <div class="alpha-stage-words">
        ${(t.words||[t.example]).map(e=>`<span class="alpha-word-chip">${e}</span>`).join(``)}
      </div>
    `;let h=document.createElement(`canvas`);h.width=124,h.height=124,h.className=`alpha-stage-art`,m.push({canvas:h,art:t.art,accent:n,size:96}),d.append(f,h),u.appendChild(d);let _=document.createElement(`div`);_.className=`alpha-subtabs`,_.innerHTML=`
      <button type="button" class="alpha-subtab ${o===`trace`?`is-active`:``}" data-sub="trace">Yozib kör (Taxta)</button>
      <button type="button" class="alpha-subtab ${o===`check`?`is-active`:``}" data-sub="check">Tekşiruv maşqi</button>
      <button type="button" class="pill-btn alpha-open-game-btn">Katta öyin →</button>
    `,_.querySelectorAll(`[data-sub]`).forEach(e=>{e.addEventListener(`click`,()=>{o=e.dataset.sub,w()})}),_.querySelector(`.alpha-open-game-btn`)?.addEventListener(`click`,()=>rh(t)),u.appendChild(_);let v=document.createElement(`div`);if(v.className=`alpha-lab-body`,o===`trace`){let e=document.createElement(`canvas`);e.className=`alpha-mini-pad`;let n=document.createElement(`div`);n.className=`alpha-pad-actions`,n.innerHTML=`
        <span class="alpha-pad-hint">${t.hint}</span>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button type="button" class="pill-btn" id="alpha-trace-prev" aria-label="Oldingi harf">←</button>
          <button type="button" class="pill-btn" id="alpha-trace-next" aria-label="Keyingi harf">→</button>
          <button type="button" class="pill-btn" id="alpha-clear-pad">Tozalaş</button>
        </div>
      `,v.append(e,n),u.appendChild(v),requestAnimationFrame(()=>C(e,t)),n.querySelector(`#alpha-trace-prev`)?.addEventListener(`click`,()=>{a=(a-1+Xm.length)%Xm.length,g=[],w()}),n.querySelector(`#alpha-trace-next`)?.addEventListener(`click`,()=>{a=(a+1)%Xm.length,g=[],w()}),n.querySelector(`#alpha-clear-pad`)?.addEventListener(`click`,()=>{g=[],C(e,t)})}else{let e=eh(t),n=document.createElement(`div`);n.className=`alpha-check-form`,n.innerHTML=`
        <div class="alpha-check-prompt">${e.prompt}</div>
        <div class="alpha-check-opts">
          ${e.options.map(e=>`<button type="button" class="alpha-check-opt" data-val="${e}">${e}</button>`).join(``)}
        </div>
        <div class="alpha-check-msg" id="alpha-check-msg"></div>
      `,n.querySelectorAll(`.alpha-check-opt`).forEach(t=>{t.addEventListener(`click`,()=>{let r=t.dataset.val||``,i=n.querySelector(`#alpha-check-msg`);n.querySelectorAll(`.alpha-check-opt`).forEach(e=>e.classList.remove(`is-correct`,`is-wrong`)),r===e.answer?(t.classList.add(`is-correct`),i.textContent=e.explain,i.style.color=um()?`#047857`:`#5eead4`):(t.classList.add(`is-wrong`),i.textContent=`Yana bir marta urinib köring.`,i.style.color=um()?`#be123c`:`#ff8fab`)})}),v.appendChild(n),u.appendChild(v)}c.append(l,u),e.appendChild(c)}function D(e,t,n){let r=document.createElement(`div`);r.className=`alpha-spotlight`;let i=document.createElement(`button`);i.type=`button`,i.className=`alpha-nav-arrow`,i.textContent=`←`,i.setAttribute(`aria-label`,`Oldingi harf`),i.addEventListener(`click`,()=>{a=(a-1+Xm.length)%Xm.length,w()});let o=document.createElement(`button`);o.type=`button`,o.className=`alpha-nav-arrow`,o.textContent=`→`,o.setAttribute(`aria-label`,`Keyingi harf`),o.addEventListener(`click`,()=>{a=(a+1)%Xm.length,w()});let c=document.createElement(`div`);c.className=`alpha-spot-center`;let l=document.createElement(`canvas`);l.width=148,l.height=148,l.className=`alpha-spot-art`,m.push({canvas:l,art:t.art,accent:n,size:112});let u=document.createElement(`div`);u.className=`alpha-spot-info`,u.innerHTML=`
      <div class="alpha-spot-pos">Tartib raqami: <strong>${String(t.num).padStart(2,`0`)} / 29</strong></div>
      <div class="alpha-spot-diff">
        ${t.old?`<span class="alpha-diff-old">${t.old}</span><span class="alpha-diff-arrow">→</span>`:``}
        <span class="alpha-diff-new">${t.type===`belgi`?`ʼ`:`${t.upper} ${t.lower}`}</span>
      </div>
      <p class="alpha-spot-hint">${t.hint}</p>
      <div class="alpha-stage-words">
        ${(t.words||[t.example]).map(e=>`<span class="alpha-word-chip">${e}</span>`).join(``)}
      </div>
    `;let d=document.createElement(`div`);d.className=`alpha-spot-actions`;let f=document.createElement(`button`);f.type=`button`,f.className=`edu-btn-primary`,f.textContent=`Bu harf bilan öyin →`,f.addEventListener(`click`,()=>rh(t)),d.appendChild(f),c.append(l,u,d),r.append(i,c,o),e.appendChild(r);let p=document.createElement(`div`);p.className=`alpha-converter-card`,p.innerHTML=`
      <div class="alpha-conv-head">
        <strong>Eski yozuvdan yangisiga jonli ögirgiç</strong>
        <div class="alpha-conv-presets">
          <button type="button" class="alpha-preset-btn" data-txt="Choynak, shahar, o'rdak, g'oz, ma'no">Namuna 1</button>
          <button type="button" class="alpha-preset-btn" data-txt="Quyosh chiqdi, bog'da a'lo dars">Namuna 2</button>
        </div>
      </div>
      <div class="alpha-conv-grid">
        <label class="alpha-conv-col">
          <span>Avvalgi yozuv (ch, sh, o', g', ')</span>
          <input type="text" class="alpha-conv-input" maxlength="80" />
        </label>
        <div class="alpha-conv-col">
          <span>Yangi alifbo (ç, ş, ö, ğ, ʼ)</span>
          <div class="alpha-conv-output"></div>
        </div>
      </div>
    `;let h=p.querySelector(`.alpha-conv-input`),g=p.querySelector(`.alpha-conv-output`);h.value=s,g.textContent=th(s),h.addEventListener(`input`,()=>{s=h.value,g.textContent=th(s)||`—`}),p.querySelectorAll(`.alpha-preset-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.txt||``;s=t,h.value=t,g.textContent=th(t)})}),e.appendChild(p);let _=document.createElement(`div`);_.className=`alpha-strip-dock`,Xm.forEach((e,t)=>{let n=document.createElement(`button`);n.type=`button`,n.className=`alpha-strip-item ${t===a?`is-active`:``} ${e.old?`is-special`:``}`,n.innerHTML=`<small>${String(e.num).padStart(2,`0`)}</small><strong>${e.upper}</strong>`,n.addEventListener(`click`,()=>{a=t,w()}),_.appendChild(n)}),e.appendChild(_),requestAnimationFrame(()=>{_.querySelector(`.is-active`)?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`center`})})}function O(e){let t=document.createElement(`div`);t.className=`alpha-cards-lower`;let n=y[l%y.length],i=v[n],o=document.createElement(`div`);o.className=`alpha-quiz-card`,o.innerHTML=`
      <div class="alpha-quiz-head">
        <strong>Tez savol (${l%y.length+1} / ${y.length})</strong>
        <span class="alpha-streak">★ ${u}</span>
      </div>
      <p class="alpha-quiz-q">${i.q}</p>
      <div class="alpha-check-opts">
        ${b.map(e=>`<button type="button" class="alpha-check-opt" data-val="${e}">${e}</button>`).join(``)}
      </div>
      <div class="alpha-check-msg" style="color:${d?d.ok?um()?`#047857`:`#5eead4`:um()?`#be123c`:`#ff8fab`:``}">${d?d.text:``}</div>
    `,o.querySelectorAll(`.alpha-check-opt`).forEach(e=>{e.addEventListener(`click`,()=>{(e.dataset.val||``)===i.a?(u++,d={text:`Töğri javob! Keyingi savolga ötamiz.`,ok:!0},w(),clearTimeout(h),h=window.setTimeout(()=>{if(h=0,l++,l%y.length===0){let e=y[y.length-1];y=$m(v.map((e,t)=>t)),y[0]===e&&y.length>1&&([y[0],y[1]]=[y[1],y[0]])}let e=v[y[l%y.length]];b=$m(e.opts),d=null,f&&r===`cards`&&w()},950)):(u=0,d={text:`Töğri javobni qayta tanlab köring.`,ok:!1},w())})});let s=document.createElement(`div`);s.className=`alpha-ref-card`;let p=document.createElement(`div`);p.className=`alpha-ref-head`,p.innerHTML=`<strong>Töliq 29 talik tartib</strong><span>Bosing → yozib köring</span>`,s.appendChild(p);let m=document.createElement(`div`);m.className=`alpha-ref-grid`,Xm.forEach((e,t)=>{let n=document.createElement(`button`);n.type=`button`,n.className=`alpha-ref-row ${c===t?`is-active`:``} ${e.old?`is-special`:``}`,n.innerHTML=`
        <span class="alpha-ref-num">${e.num}.</span>
        <strong class="alpha-ref-glyph">${e.type===`belgi`?`ʼ`:`${e.upper} ${e.lower}`}</strong>
        <span class="alpha-ref-ex">${e.old?e.old:e.example}</span>
      `,n.addEventListener(`click`,()=>{c=t,a=t,Ym({...Sm[1],config:{...Sm[1].config||{},startLetter:e.upper}})}),m.appendChild(n)}),s.appendChild(m),t.append(o,s),e.appendChild(t)}return pm(()=>{f&&w()}),window.addEventListener(`keydown`,e=>{f&&r===`strip`&&document.activeElement?.tagName!==`INPUT`&&(e.key===`ArrowRight`?(a=(a+1)%Xm.length,w()):e.key===`ArrowLeft`&&(a=(a-1+Xm.length)%Xm.length,w()))}),{el:e,enter(){f=!0,w()},leave(){f=!1,clearTimeout(h),h=0,x(),_&&=(_(),null)}}}function ah(e={}){let{scale:t=1,spreadX:n=11,spreadY:r=6.5,opacity:i=.9,theme:a=`dark`}=e,o=new bn,s=[],c=new Float32Array(960),l=new Float32Array(320),u=new Float32Array(320),d=new Float32Array(320);for(let e=0;e<320;e++){let i=e%3,a=e*2.3999632,o=Math.sqrt((e+.5)/320),s=n*(i===0?.65:i===1?.78:.96),f=r*(i===0?.65:i===1?.78:.96);c[e*3]=Math.cos(a)*s*(.22+.78*o),c[e*3+1]=Math.sin(a*1.618)*f*.68,c[e*3+2]=i===0?t*(1.45+e*13%20*.11):i===1?t*(-.95+e*17%24*.1):-t*(2.1+e*23%30*.12),l[e]=i===0?(.2+e*7%10*.022)*t:i===1?(.115+e*11%10*.015)*t:(.08+e*5%8*.01)*t,u[e]=e*1.37%100,d[e]=e%4/3}let f=new Cr;f.setAttribute(`position`,new cr(c,3)),f.setAttribute(`aSize`,new cr(l,1)),f.setAttribute(`aSeed`,new cr(u,1)),f.setAttribute(`aTint`,new cr(d,1));let p=new Ai({uniforms:{uTime:{value:0},uOpacity:{value:i},uDayMix:{value:+(a===`light`)},uParallax:{value:new xt(0,0)},uScale:{value:t}},vertexShader:`
      attribute float aSize;
      attribute float aSeed;
      attribute float aTint;
      uniform float uTime;
      uniform vec2 uParallax;
      uniform float uScale;
      varying float vTwinkle;
      varying float vTint;
      varying float vDepthAlpha;

      void main() {
        vec3 p = position;
        p.x += sin(uTime * 0.28 + aSeed) * 0.24 * uScale;
        p.y += cos(uTime * 0.22 + aSeed * 1.3) * 0.18 * uScale + mod(uTime * 0.06 * uScale + aSeed, 0.8 * uScale) * 0.12;
        p.z += sin(uTime * 0.19 + aSeed * 0.7) * 0.15 * uScale;

        // Depth-proportional parallax shift (foreground dust shifts faster than distant dust)
        float depthFactor = clamp((p.z / max(uScale, 0.001) + 4.0) / 7.0, 0.25, 1.85);
        p.x -= uParallax.x * 0.62 * depthFactor * uScale;
        p.y += uParallax.y * 0.44 * depthFactor * uScale;

        vec4 mvPos = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPos;

        float dist = max(1.0, -mvPos.z);
        gl_PointSize = clamp((aSize * 620.0) / dist, 2.0, 42.0);

        vTwinkle = 0.55 + 0.45 * sin(uTime * (1.2 + fract(aSeed) * 1.4) + aSeed * 3.1);
        vTint = aTint;
        vDepthAlpha = clamp(depthFactor * 0.78, 0.34, 1.0);
      }
    `,fragmentShader:`
      uniform float uOpacity;
      uniform float uDayMix;
      varying float vTwinkle;
      varying float vTint;
      varying float vDepthAlpha;

      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float r = length(c);
        if (r > 0.5) discard;

        float core = smoothstep(0.16, 0.0, r);
        float halo = pow(max(0.0, 1.0 - r * 2.0), 2.1);
        float alpha = (core * 0.95 + halo * 0.45) * vTwinkle * vDepthAlpha * uOpacity;

        vec3 nightCol = mix(vec3(0.55, 0.88, 1.0), vec3(0.95, 0.98, 1.0), vTint);
        vec3 dayCol = mix(vec3(0.08, 0.42, 0.86), vec3(0.05, 0.62, 0.76), vTint);
        vec3 col = mix(nightCol, dayCol, uDayMix);
        col += vec3(0.35) * core * (1.0 - uDayMix * 0.5);

        gl_FragColor = vec4(col, alpha * mix(0.88, 0.58, uDayMix));
      }
    `,transparent:!0,depthWrite:!1,blending:a===`light`?1:2}),m=new ci(f,p);o.add(m),s.push(f,p);function h(e){let t=e===`light`;p.uniforms.uDayMix.value=+!!t,p.blending=t?1:2,p.needsUpdate=!0}h(a);let g=0,_=0;return{group:o,setTheme:h,update(e,t=0,n=0){g+=(t-g)*.08,_+=(n-_)*.08,p.uniforms.uTime.value=e,p.uniforms.uParallax.value.set(g,_)},dispose(){s.forEach(e=>e.dispose())}}}var oh=!1,sh=0,ch=0,lh=!1,uh=0,dh=0,fh=!1,ph=null,mh=null,hh=0,gh=0,_h=0,vh=!1;function yh(e,t,n){return Math.max(t,Math.min(n,e))}function bh(e){if(e.beta===null||e.gamma===null)return;let t=e.beta,n=e.gamma;ph===null||mh===null?(ph=t,mh=n):(ph+=(t-ph)*.008,mh+=(n-mh)*.008);let r=window.screen?.orientation?.angle??0,i=n-mh,a=t-ph;r===90?(i=t-ph,a=-(n-mh)):(r===-90||r===270)&&(i=-(t-ph),a=n-mh),uh=yh(i/24,-1,1),dh=yh(a/22,-1,1),fh=!0}async function xh(){if(typeof window>`u`)return!1;let e=window.DeviceOrientationEvent;if(e&&typeof e.requestPermission==`function`)try{return await e.requestPermission()===`granted`}catch{return!1}return!0}function Sh(){if(oh||typeof window>`u`)return;oh=!0,window.addEventListener(`pointermove`,e=>{let t=Math.max(1,window.innerWidth),n=Math.max(1,window.innerHeight);sh=yh(e.clientX/t*2-1,-1,1),ch=yh(e.clientY/n*2-1,-1,1),lh=!0},{passive:!0}),window.addEventListener(`deviceorientation`,bh,{passive:!0});let e=()=>{vh||(vh=!0,xh().then(e=>{e&&window.addEventListener(`deviceorientation`,bh,{passive:!0})}))};window.addEventListener(`pointerdown`,e,{passive:!0,once:!0}),window.addEventListener(`touchstart`,e,{passive:!0,once:!0})}function Ch(){oh||Sh();let e=performance.now(),t=_h?Math.min(.05,(e-_h)*.001):.016;_h=e;let n=fh?lh?uh*.72+sh*.28:uh:sh,r=fh?lh?dh*.72+ch*.28:dh:ch,i=1-Math.exp(-7.5*t);return hh+=(n-hh)*i,gh+=(r-gh)*i,{x:hh,y:gh,hasGyro:fh}}var wh=!1,Th=null;function Eh(e){wh=e===`projects`||e===`about`,Th&&Th()}function Dh(){let e=document.getElementById(`living-bg-canvas`);if(!e)return;Sh();let t=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches,n=mm(),r;try{r=new Wc({canvas:e,alpha:!0,antialias:!n,powerPreference:n?`default`:`high-performance`})}catch{return}let i=()=>Math.min(window.devicePixelRatio||1,n?1:window.innerWidth>=1440?1.25:1.5);r.setPixelRatio(i()),r.setSize(window.innerWidth,Math.max(1,window.innerHeight),!1),r.setClearColor(0,0),r.outputColorSpace=je,r.toneMapping=4,r.toneMappingExposure=1.2;let a=new kn,o=new la(42,window.innerWidth/Math.max(1,window.innerHeight),.1,60);o.position.set(0,0,9.5);let s=ah({renderer:r,scale:1.15,shardCount:window.innerWidth<640?10:16,spreadX:11.5,spreadY:6.8,spreadZ:4.5,opacity:.94,includeFlanks:!0,theme:lm()});s.group.position.set(0,0,-1.2),a.add(s.group),pm(e=>{s.setTheme(e),r.toneMappingExposure=e===`light`?1.08:1.2});function c(){let e=window.innerWidth,t=Math.max(1,window.innerHeight);o.aspect=e/t,o.updateProjectionMatrix(),r.setPixelRatio(i()),r.setSize(e,t,!1)}window.addEventListener(`resize`,c);let l=0,u=!1,d=0,f=performance.now();function p(e){if(l=0,u)return;if(n&&d&&e-d<32){l=requestAnimationFrame(p);return}d=e;let i=(e-f)*.001,c=Ch();o.position.x=c.x*1.1,o.position.y=-c.y*.72,o.lookAt(0,0,-1.2),s.update(t?0:i,c.x,c.y),r.render(a,o),!t&&!u&&(l=requestAnimationFrame(p))}function m(){let e=wh||document.hidden||document.body.classList.contains(`is-game-open`);e!==u&&(u=e,u?l&&=(cancelAnimationFrame(l),0):!t&&!l&&(l=requestAnimationFrame(p)))}Th=m,m(),u||(l=requestAnimationFrame(p)),document.addEventListener(`visibilitychange`,m),window.addEventListener(`alif:gamemodal`,m)}function Oh(){let e=document.getElementById(`dock`),t=document.getElementById(`dock-active-pill`);if(!e)return()=>{};let n=()=>{if(!t)return;let n=e.querySelector(`.dock-tab.is-active`);if(!n){t.style.opacity=`0`;return}let r=n.offsetLeft,i=n.offsetTop,a=n.offsetWidth,o=n.offsetHeight;t.style.opacity=`1`,t.style.width=`${a}px`,t.style.height=`${o}px`,t.style.transform=`translate3d(${r}px, ${i}px, 0)`};return e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/Math.max(1,n.width)*100,i=(t.clientY-n.top)/Math.max(1,n.height)*100;e.style.setProperty(`--dock-mx`,`${r.toFixed(1)}%`),e.style.setProperty(`--dock-my`,`${i.toFixed(1)}%`),e.classList.add(`is-specular-hot`)}),e.addEventListener(`pointerleave`,()=>{e.classList.remove(`is-specular-hot`)}),window.addEventListener(`resize`,()=>{requestAnimationFrame(n)}),window.addEventListener(`alif:lang`,()=>{requestAnimationFrame(n)}),window.addEventListener(`alif:theme`,()=>{requestAnimationFrame(n)}),document.fonts?.ready&&document.fonts.ready.then(()=>requestAnimationFrame(n)),requestAnimationFrame(n),n}window.gsap=Q;try{await Promise.race([Promise.all([document.fonts.load(`800 24px Nunito`),document.fonts.load(`400 14px Nunito`)]),new Promise(e=>setTimeout(e,1500))])}catch{}window.__alifBoot=`modules-ok`,Sh(),Dh();var kh=Oh(),Ah=Sm,jh=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,Mh=()=>`ontouchstart`in window||navigator.maxTouchPoints>0,Nh=(e=1.5)=>Ph?1:Math.min(window.devicePixelRatio||1,window.innerWidth>=1440?1.25:Mh()?1.5:e),Ph=(()=>{try{let e=document.createElement(`canvas`),t=e.getContext(`webgl2`)||e.getContext(`webgl`);if(!t)return!0;let n=t.getExtension(`WEBGL_debug_renderer_info`),r=n?n.UNMASKED_RENDERER_WEBGL:t.RENDERER,i=String(t.getParameter(r)||``);return t.getExtension(`WEBGL_lose_context`)?.loseContext(),/SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(i)}catch{return!1}})();function Fh(e,t=480,n=270){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`);return Cm(i,t,n,e,0,0),{canvas:r,ctx:i,w:t,h:n}}function Ih(e,t){let n=!1,r=0,i=0,a=0;function o(t){let r=e.getContext();if(r&&typeof r.fenceSync==`function`){let e=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);r.flush();let a=()=>{if(!n)try{r.deleteSync(e)}catch{}else if((e?r.getSyncParameter(e,r.SYNC_STATUS):r.SIGNALED)===r.UNSIGNALED)i=window.setTimeout(a,5);else{try{r.deleteSync(e)}catch{}i=window.setTimeout(t,80)}};i=window.setTimeout(a,5)}else i=window.setTimeout(t,80)}function s(e){if(!n)return;let i=typeof e==`number`?e:performance.now(),c=a?Math.min((i-a)/1e3,.05):1/60;a=i,t(c,i/1e3),n&&(Ph?o(()=>s(performance.now())):r=requestAnimationFrame(s))}return{start(){n||(n=!0,a=performance.now(),r=requestAnimationFrame(s))},stop(){n=!1,cancelAnimationFrame(r),clearTimeout(i)}}}var Lh=document.getElementById(`dock`),Rh=document.getElementById(`dock-menu-btn`),zh=document.getElementById(`dock-menu-panel`),Bh=Array.from(Lh.querySelectorAll(`.dock-tab`)),Vh=!1,Hh=!1;function Uh(e=!1){Vh||(Vh=!0,Lh.style.pointerEvents=`auto`,e||jh?(Q.set(Lh,{y:0,opacity:1}),kh()):Q.fromTo(Lh,{y:-16,opacity:0},{y:0,opacity:1,duration:.9,ease:`expo.out`,onComplete:kh}),requestAnimationFrame(kh))}function Wh(e){Hh=e,Rh.classList.toggle(`is-open`,e),Rh.setAttribute(`aria-expanded`,String(e)),zh.classList.toggle(`is-open`,e),zh.setAttribute(`aria-hidden`,String(!e))}Rh.addEventListener(`click`,e=>{e.stopPropagation(),Wh(!Hh)}),document.addEventListener(`pointerdown`,e=>{Hh&&!zh.contains(e.target)&&!Rh.contains(e.target)&&Wh(!1)});var Gh={},Kh={},qh=null,Jh=null;window.addEventListener(`alif:gamemodal`,()=>{Jh&&(Pm()?Jh.stop():Jh.start())}),window.addEventListener(`keydown`,e=>{if(e.key!==`Escape`)return;let t=document.getElementById(`about-guide-panel`);t&&t.classList.contains(`is-open`)||(Hh?Wh(!1):Pm()&&Fm())});function Yh(){let e=(window.location.hash||`#gallery`).replace(`#`,``).toLowerCase();return e===`projects`||e===`alphabet`||e===`about`||e===`gallery`?e:`gallery`}function Xh(e){for(let t of Bh)t.classList.toggle(`is-active`,t.dataset.route===e);requestAnimationFrame(kh)}function Zh(e){if(e===qh&&Kh[e])return;Wh(!1),Xh(e),Eh(e);let t=qh;qh=e;let n=e=>(Kh[e]||(Kh[e]=Gh[e]()),Kh[e]);if(!t){let t=n(e);t.el.style.visibility=`visible`,t.el.style.opacity=`1`,t.enter(!0),(e!==`gallery`||jh)&&Uh(e!==`gallery`&&jh);return}let r=Kh[t],i=n(e);Q.killTweensOf(r.el),Q.killTweensOf(i.el),Q.to(r.el,{opacity:0,duration:jh?0:.35,ease:`power2.in`,onComplete:()=>{r.leave(),r.el.style.visibility=`hidden`,i.el.style.visibility=`visible`,i.el.style.opacity=`0`,i.enter(!1),Uh(!1),Q.to(i.el,{opacity:1,duration:jh?0:.5,ease:`power2.out`,onComplete:()=>{}})}})}window.addEventListener(`hashchange`,()=>{Zh(Yh())}),document.querySelectorAll(`[data-route]`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);n&&n.startsWith(`#`)&&(Wh(!1),window.location.hash===n&&t.preventDefault())})}),Gh.gallery=()=>{let e=document.getElementById(`view-gallery`),t=document.getElementById(`gal-canvas`),n=Array.from(e.querySelectorAll(`.gal-side-inner`)),r=document.getElementById(`gal-counter`),i=document.getElementById(`gal-hint`),a=document.getElementById(`gal-caption-inner`),s=document.getElementById(`gal-cursor-label`),c=document.getElementById(`gal-overview`),l=document.getElementById(`ov-title`),u=document.getElementById(`ov-sub`),d=document.getElementById(`ov-desc`),f=document.getElementById(`ov-close`),p=Ah.slice(0,20),m=p.length,h=Mh(),g=new Wc({alpha:!0,antialias:!h,powerPreference:`high-performance`});g.outputColorSpace=je,g.setClearColor(789517,0),g.setPixelRatio(Nh()),g.setSize(window.innerWidth,window.innerHeight),t.appendChild(g.domElement);let _=new kn,v=new la(60,window.innerWidth/Math.max(1,window.innerHeight),.1,100);v.position.set(0,0,12);let y=e=>24*Math.tan(Math.PI/6)*e/Math.max(1,window.innerHeight);function b(){let e=window.innerWidth,t=Math.max(1,window.innerHeight),n=e<=640,r=e>1440?Math.min(1.55,Math.min(e/1380,t/860)):e>=1025&&e<=1440?.84:1,i=n?74:Math.round(108*r),a=Math.max(90,e/2-24-i/2);return{vw:e,vh:t,isPhone:n,planeSize:i,radX:n?a:Math.round(255*r),radY:n?a:Math.round(255*r),radZ:n?a:Math.round(255*r),centerScale:120/82*i,circleRadius:n?180:Math.round(240*Math.max(1,r*.92))}}let x=b();function S(){let e=Nh(1.5),t=document.createElement(`canvas`),n=t.getContext(`2d`);n.font=`600 64px "Nunito", ui-sans-serif, sans-serif`;let r=`VESNA`,i=n.measureText(r),a=Math.ceil(i.width+24);t.width=a*e,t.height=92*e,n.scale(e,e),n.font=`600 64px "Nunito", ui-sans-serif, sans-serif`,n.fillStyle=`#ffffff`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(r,a/2,48);let s=new di(t);s.colorSpace=je,s.minFilter=o,s.magFilter=o,s.generateMipmaps=!1;let c=new Fr({map:s,color:um()?988970:15592939,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}),l=new qr(new yi(1,1),c),u=y(90);return l.scale.set(u,92/a*u,1),l.renderOrder=2,l}let C=S();_.add(C);let w=new bn;_.add(w);let T=new yi(1,1),E=[];pm(e=>{let t=e===`light`;C.material.color.setHex(t?988970:15592939),E.forEach(e=>{e.card&&e.texture?(Cm(e.card.ctx,e.card.w,e.card.h,e.item,0,0),e.texture.needsUpdate=!0):e.mat&&e.mat.color.setHex(t?14412542:1776413)})});function D(e,t){let n=2/t*e-1+1/t,r=Math.sqrt(Math.max(0,1-n*n)),i=Math.PI*(3-Math.sqrt(5))*e;return new Y(Math.cos(i)*r,n,Math.sin(i)*r)}for(let e=0;e<m;e++){let t=p[e],n=D(e,m),r=new Fr({color:um()?14412542:1776413,transparent:!0,opacity:0,side:2,depthWrite:!1}),i=new qr(T,r),a={index:e,item:t,mesh:i,mat:r,unit:n,aspect:16/9,texture:null,hasFrame:!1,loadStarted:!1,sizePx:x.planeSize,baseOpacity:0,localPos:new Y(0,0,0),fibPos:new Y(n.x*y(x.radX),n.y*y(x.radY),n.z*y(x.radZ)),isCircleIntro:e<10};i.userData.planeState=a,w.add(i),E.push(a)}let O=0,k={val:1},A=jh?`sphere`:`loading`,j=0,M=!1,N=0,P=!1;function F(){let e=Math.max(1,Math.min(100,Math.round(k.val)));r.textContent=String(e).padStart(3,`0`)}function I(){P||(P=!0,E.forEach((e,t)=>{window.setTimeout(()=>{if(e.hasFrame)return;e.hasFrame=!0;let n=window.innerWidth>=1440?520:400,r=Math.round(9/16*n),i=Fh(e.item,n,r);e.card=i;let a=new di(i.canvas);if(a.colorSpace=je,a.minFilter=o,a.magFilter=o,a.generateMipmaps=!1,e.texture=a,e.mat.map=a,e.mat.color.setHex(16777215),e.mat.needsUpdate=!0,t<10&&(O++,A===`loading`)){let e=Math.min(99,Math.round(O/10*99));Q.to(k,{val:Math.max(k.val,e),duration:.35,ease:`power1.out`,onUpdate:F})}},t*80)}),ym(()=>{E.forEach(e=>{e.card&&e.texture&&(Cm(e.card.ctx,e.card.w,e.card.h,e.item,0,0),e.texture.needsUpdate=!0)})}))}let L=0,R=0,ee=0,z=0,te=0,ne=0,B=!1,V=new Y(Math.sin(23*Math.PI/180),Math.cos(23*Math.PI/180),0).normalize(),re=new Y(1,0,0),ie=new Y(0,1,0),ae=new Y(0,0,1),oe=new St,se=new St,ce=new St,le=new St;new Y,new Y;let ue=new Y,H=null,de=!1,fe={expand:0,overview:0},pe=Q.quickTo(s,`x`,{duration:.5,ease:`power3.out`}),me=Q.quickTo(s,`y`,{duration:.5,ease:`power3.out`}),he=!1;function ge(e,t){h||(t&&(s.textContent=t),e!==he&&(he=e,Q.to(s,{opacity:+!!e,scale:e?1:.6,duration:e?.6:.35,ease:`power4.out`})))}let _e=null,ve=``;function ye(e){let t=e?`${e.item.title}|${e.item.category}`:``;if(t===ve)return;if(ve=t,Q.killTweensOf(a),!e){Q.to(a,{yPercent:-110,duration:.25,ease:`power2.in`,onComplete:()=>{a.innerHTML=``}});return}let n=()=>{a.innerHTML=`<span class="gal-cap-title">${e.item.title}</span><span class="gal-cap-cat">${e.item.category}</span>`,Q.fromTo(a,{yPercent:110},{yPercent:0,duration:.6,ease:`expo.out`})};a.innerHTML?Q.to(a,{yPercent:-110,duration:.25,ease:`power2.in`,onComplete:n}):n()}function be(e){H=e,de=!1,ye(null),_e=null,E[e].mesh.renderOrder=25,E[e].mat.depthTest=!1,Q.to(fe,{expand:1,duration:.8,ease:`power4.out`}),Q.to(i,{opacity:0,duration:.35})}function xe(){if(H===null)return;de=!0;let e=E[H].item;l.textContent=e.title,u.textContent=`${e.category}, ${e.year}`,d.textContent=e.desc,c.classList.add(`is-open`),c.setAttribute(`aria-hidden`,`false`),Q.to(fe,{overview:1,duration:.8,ease:`power4.out`}),Q.killTweensOf(c),Q.fromTo(c,{y:16,opacity:0},{y:0,opacity:1,duration:.7,ease:`expo.out`,delay:.12}),he&&(s.textContent=`Yopiş`)}function Se(){de&&(de=!1,c.classList.remove(`is-open`),c.setAttribute(`aria-hidden`,`true`),Q.to(fe,{overview:0,duration:.8,ease:`power4.out`}),Q.killTweensOf(c),Q.to(c,{opacity:0,y:10,duration:.35,ease:`power2.in`}),he&&(s.textContent=`Ma'lumot`))}function Ce(){if(H===null)return;let e=H;H=null,de&&Se(),ge(!1),Q.to(fe,{expand:0,overview:0,duration:.8,ease:`power4.out`,onComplete:()=>{H===null&&E[e]&&(E[e].mesh.renderOrder=0,E[e].mat.depthTest=!0)}})}document.getElementById(`ov-play`).addEventListener(`click`,e=>{e.stopPropagation(),H!==null&&Ym(E[H].item)}),f.addEventListener(`click`,e=>{e.stopPropagation(),Ce()});let we=new Oa,Te=new xt(-99,-99),Ee=window.innerWidth/2,U=window.innerHeight/2,De=!1,Oe=!1,ke=0,W=0,Ae=0,G=0,K=0,Me=0;function Ne(e){if(Oe){t.style.cursor=`grabbing`;return}if(e){t.style.cursor=`pointer`;return}if(H!==null){t.style.cursor=`default`;return}let n=Ee-window.innerWidth/2,r=U-window.innerHeight/2;t.style.cursor=n*n+r*r<=62500?`grab`:`default`}function Pe(e,t){if(A!==`sphere`)return null;let n=g.domElement.getBoundingClientRect();Te.x=(e-n.left)/n.width*2-1,Te.y=-((t-n.top)/n.height)*2+1,we.setFromCamera(Te,v);let r=E.map(e=>e.mesh),i=we.intersectObjects(r,!1);if(!i.length)return null;if(H!==null){let e=i.find(e=>e.object.userData.planeState.index===H);return e?e.object.userData.planeState:null}return i[0].object.userData.planeState}t.addEventListener(`pointerdown`,e=>{A===`sphere`&&(Oe=!0,ke=Ae=e.clientX,W=G=e.clientY,K=0,Ee=e.clientX,U=e.clientY,H===null&&Ne(null))}),window.addEventListener(`pointermove`,e=>{if(qh===`gallery`){if(Ee=e.clientX,U=e.clientY,De=!0,h||(pe(e.clientX+14),me(e.clientY+14)),Oe&&H===null&&A===`sphere`){let t=e.clientX-Ae,n=e.clientY-G;K+=Math.hypot(t,n),Ae=e.clientX,G=e.clientY,Math.hypot(e.clientX-ke,e.clientY-W)>2&&(B=!0,Q.to(i,{opacity:0,duration:.4})),L+=t*.001,R+=n*.001}else if(Oe){let t=e.clientX-Ae,n=e.clientY-G;K+=Math.hypot(t,n),Ae=e.clientX,G=e.clientY}}}),window.addEventListener(`pointerup`,e=>{if(Oe&&qh===`gallery`){if(Oe=!1,Math.hypot(e.clientX-ke,e.clientY-W)<6&&K<10&&A===`sphere`){let t=Pe(e.clientX,e.clientY);H===null?t&&(B=!0,e.clientX,e.clientY,t.item?.accent,be(t.index)):t&&t.index===H?de?Se():xe():Ce()}De=!0}}),t.addEventListener(`wheel`,e=>{A===`sphere`&&H===null&&(e.preventDefault(),B=!0,Q.to(i,{opacity:0,duration:.4}),L+=e.deltaY*2e-4)},{passive:!1}),t.addEventListener(`touchstart`,e=>{e.touches.length===2&&(Me=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY))},{passive:!0}),t.addEventListener(`touchmove`,e=>{if(e.touches.length===2&&A===`sphere`&&H===null){let t=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),n=Me-t;Me=t,B=!0,L+=n*2e-4}},{passive:!0}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&!Pm()&&qh===`gallery`&&H!==null&&Ce()});let Fe=!1;function Ie(){Fe||(Fe=!0,jh?(A=`sphere`,C.material.opacity=0,C.visible=!1,r.style.display=`none`,n.forEach(e=>Q.set(e,{yPercent:0,transform:`none`})),E.forEach(e=>{e.localPos.copy(e.fibPos),e.sizePx=x.planeSize,e.baseOpacity=1}),I(),Uh(!0)):(j=performance.now(),Q.to(C.material,{opacity:1,duration:.6,delay:.2,ease:`power2.out`}),Q.fromTo(n,{yPercent:100},{yPercent:0,duration:.9,ease:`expo.out`,stagger:.07,delay:.5}),Q.fromTo(r,{yPercent:110},{yPercent:0,duration:.75,ease:`power4.out`,delay:.5}),window.setTimeout(()=>{I()},200)))}function Le(){if(M)return;M=!0,A=`circle`,Q.to(k,{val:100,duration:.25,ease:`power1.out`,onUpdate:F,onComplete:()=>{Q.to(r,{yPercent:-120,duration:.5,ease:`power2.in`})}}),N=1;let e=y(x.circleRadius);for(let t=0;t<10;t++){let n=E[t],r=-Math.PI/2+Math.PI*2/10*t;n.localPos.set(Math.cos(r)*e,Math.sin(r)*e,0),n.sizePx=.01,n.baseOpacity=0,Q.to(n,{baseOpacity:1,duration:1,ease:`power3.out`,delay:t*.1}),Q.to(n,{sizePx:70,duration:1,ease:`back.out(1.7)`,delay:t*.1})}let t={mult:1};Q.to(t,{mult:7.3,duration:1,delay:1.3,ease:`power2.in`,onUpdate:()=>{N=t.mult}});let a=2.3+.8;Q.to(C.material,{opacity:0,duration:.75,delay:a,ease:`power2.inOut`,onComplete:()=>{C.visible=!1}}),Q.to(n,{yPercent:-105,duration:.65,delay:a,ease:`power2.inOut`});for(let e=0;e<10;e++){let t=E[e],n=(9-e)*y(1.5);Q.to(t.localPos,{x:0,y:0,z:n,duration:1.25,delay:a+e*.05,ease:`power2.inOut`}),Q.to(t,{sizePx:x.centerScale,duration:1.25,delay:a+e*.05,ease:`power2.inOut`})}Q.delayedCall(5,()=>{A=`explode`,N=0,w.quaternion.identity();for(let e=0;e<m;e++){let t=E[e],n=t.localPos.clone(),r=t.fibPos,i={t:0};e>=10&&(t.sizePx=.01,t.baseOpacity=0,Q.to(t,{baseOpacity:1,duration:.9,ease:`power3.out`})),Q.to(t,{sizePx:x.planeSize,duration:1,ease:`power3.out`}),Q.to(i,{t:1,duration:1,ease:`power3.out`,onUpdate:()=>{let e=1+.1*Math.sin(Math.PI*i.t);t.localPos.lerpVectors(n,r,i.t).multiplyScalar(e)},onComplete:()=>{t.localPos.copy(t.fibPos),e===m-1&&(A=`sphere`)}})}Q.fromTo(n,{yPercent:105},{yPercent:0,duration:.9,ease:`expo.out`,stagger:.07}),Uh(!1),Q.to(i,{opacity:1,duration:.9,ease:`expo.out`,delay:.2})})}let Re=Ih(g,(e,t)=>{let n=e*60;if(A===`loading`){let e=performance.now()-j;e>=2e3&&(O>=10||e>=3e4)&&Le()}if(A===`circle`&&N>0){let e=.5*Math.PI/180*N*n;oe.setFromAxisAngle(ae,-e),w.quaternion.premultiply(oe).normalize()}if(A===`sphere`){if(H===null){let e=.94**n;L*=e,R*=e,ee+=L*n,z+=R*n;let t=1-.89**n,r=te,i=ne;te+=(ee-te)*t,ne+=(z-ne)*t;let a=te-r,o=ne-i;Math.abs(a)>1e-7&&(oe.setFromAxisAngle(ie,a),w.quaternion.premultiply(oe)),Math.abs(o)>1e-7&&(se.setFromAxisAngle(re,o),w.quaternion.premultiply(se)),!B&&!jh&&(ce.setFromAxisAngle(V,.001*n),w.quaternion.premultiply(ce)),w.quaternion.normalize()}if(!jh&&m>0&&!Pm()){let e=performance.now(),n=H===null?_e:H;if(n!==null){let r=E[n];r&&r.card&&r.texture&&(!r.lastAnimMs||e-r.lastAnimMs>46)&&(r.lastAnimMs=e,Cm(r.card.ctx,r.card.w,r.card.h,r.item,t,1),r.texture.needsUpdate=!0)}typeof Ih.__galAnimCursor!=`number`&&(Ih.__galAnimCursor=0);let r=0;for(let i=0;i<m&&r<1;i++){let a=(Ih.__galAnimCursor+i)%m;if(a===n)continue;let o=E[a];o&&o.hasFrame&&o.card&&o.texture&&(!o.lastAnimMs||e-o.lastAnimMs>115)&&(o.lastAnimMs=e,Cm(o.card.ctx,o.card.w,o.card.h,o.item,t,0),o.texture.needsUpdate=!0,r++)}Ih.__galAnimCursor=(Ih.__galAnimCursor+1)%m}if(De&&!Oe){De=!1;let e=Pe(Ee,U);if(Ne(e),H===null){let t=e?e.index:null;t!==_e&&(_e=t,ye(e)),ge(!1)}else ge(!!(e&&e.index===H),de?`Yopiş`:`Ma'lumot`)}}le.copy(w.quaternion).invert();let r=fe.expand,i=fe.overview;for(let e=0;e<m;e++){let t=E[e];if(t.mesh.quaternion.copy(le),r>1e-4&&H!==null){if(e===H){let e=Math.min(310,Math.max(240,x.vh*.28)),n=(x.vh-e*i)*.76,a=n*t.aspect;a>x.vw-24&&(a=x.vw-24,n=a/t.aspect);let o=bt.lerp(x.planeSize,a,r),s=bt.lerp(x.planeSize/t.aspect,n,r);t.mesh.scale.set(y(o),y(s),1),ue.set(0,y(e*.48*i),0),w.worldToLocal(ue),t.mesh.position.lerpVectors(t.localPos,ue,r),t.mat.opacity=1}else{let e=1+.8*r;t.mesh.position.copy(t.localPos).multiplyScalar(e);let n=t.sizePx;t.mesh.scale.set(y(n),y(n/t.aspect),1),t.mat.opacity=t.baseOpacity*(1-.9*r)}}else{t.mesh.position.copy(t.localPos);let e=t.sizePx;t.mesh.scale.set(y(e),y(e/t.aspect),1),t.mat.opacity=t.baseOpacity}}let a=Ch(),o=H===null?1:Math.max(0,1-fe.expand);v.position.x=a.x*.72*o,v.position.y=-a.y*.48*o,v.lookAt(0,0,0),g.render(_,v)});function ze(){x=b(),v.aspect=window.innerWidth/Math.max(1,window.innerHeight),v.updateProjectionMatrix(),g.setPixelRatio(Nh()),g.setSize(window.innerWidth,window.innerHeight);let e=y(90),t=C.material.map?.image;t&&C.scale.set(e,e*(t.height/t.width),1);for(let e=0;e<m;e++){let t=E[e];t.fibPos.set(t.unit.x*y(x.radX),t.unit.y*y(x.radY),t.unit.z*y(x.radZ)),A===`sphere`&&(t.localPos.copy(t.fibPos),t.sizePx=x.planeSize)}}return window.addEventListener(`resize`,ze),{el:e,enter(){ze(),Ie(),Jh=Re,Pm()||Re.start()},leave(){Jh===Re&&(Jh=null),Re.stop(),ge(!1),ye(null)}}},Gh.projects=()=>{let e=document.getElementById(`view-projects`),t=document.getElementById(`proj-canvas`),n=document.getElementById(`proj-view-bubble`),r=Ah.slice(0,40),i=Mh(),a=new Wc({antialias:!0,powerPreference:`high-performance`});a.setClearColor(um()?15003130:329486,1),a.outputColorSpace=je,a.toneMapping=4,a.toneMappingExposure=um()?1.06:1.15;let s=()=>Nh();a.setPixelRatio(s()),a.setSize(window.innerWidth,window.innerHeight),t.appendChild(a.domElement);let c=a.getContext(),u=a.capabilities.isWebGL2&&!!c.getExtension(`EXT_color_buffer_float`),d=null;function f(){let e=s(),t=Math.max(1,Math.floor(window.innerWidth*e)),n=Math.max(1,Math.floor(window.innerHeight*e)),r=window.innerWidth;d&&d.dispose(),d=new Ht(t,n,{samples:Ph||i||r>=1440?0:2,type:u?g:l,minFilter:o,magFilter:o})}f();let p=new kn;p.background=new Dn(um()?15003130:329486);let m=ah({renderer:a,scale:175,shardCount:14,spreadX:1550,spreadY:960,spreadZ:420,opacity:.92,includeFlanks:!0,theme:lm()});p.add(m.group);let h=new la(35,window.innerWidth/Math.max(1,window.innerHeight),1,8e3),_=1e3;function v(){let e=window.innerWidth,t=Math.max(1,window.innerHeight);_=t/2/Math.tan(35*Math.PI/180/2),h.aspect=e/t,h.position.set(e/2,-t/2,_),h.lookAt(e/2,-t/2,0),h.updateProjectionMatrix();let n=Math.max(.55,Math.min(1.25,Math.min(e,t)/900));m.group.position.set(e/2,-t/2,-520),m.group.scale.setScalar(n)}v();let y=new bn;p.add(y);let b=new kn,x=new ua(-1,1,1,-1,0,1),S=new Ai({uniforms:{tDiffuse:{value:d.texture}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position.xy, 0.0, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D tDiffuse;
          varying vec2 vUv;

          void main() {
            float band = 0.08;
            float t = 0.0;
            float dir = 0.0;
            if (vUv.y > 1.0 - band) {
              t = (vUv.y - (1.0 - band)) / band;
              dir = -1.0;
            } else if (vUv.y < band) {
              t = (band - vUv.y) / band;
              dir = 1.0;
            }

            vec3 col;
            if (t > 0.0) {
              float sag = 1.0 - sqrt(max(0.0, 1.0 - t * t));
              float distortion = sag * band * 1.0;
              vec2 baseUv = vec2(vUv.x, clamp(vUv.y + dir * distortion, 0.0, 1.0));

              vec3 acc = vec3(0.0);
              vec3 wSum = vec3(0.0);
              for (int i = 0; i < 16; i++) {
                float fi = float(i) / 15.0;
                float off = (fi - 0.5) * 0.01 * distortion * 30.0;
                vec2 suv = clamp(baseUv + vec2(0.0, off), 0.0, 1.0);
                vec3 s = texture2D(tDiffuse, suv).rgb;
                float wr = smoothstep(0.8, 0.2, fi);
                float wg = smoothstep(0.0, 0.5, fi) * smoothstep(1.0, 0.5, fi);
                float wb = smoothstep(0.2, 0.8, fi);
                vec3 w = vec3(wr, wg, wb);
                acc += s * w;
                wSum += w;
              }
              col = acc / max(wSum, vec3(0.0001));
            } else {
              col = texture2D(tDiffuse, vUv).rgb;
            }

            gl_FragColor = vec4(col, 1.0);
            #include <colorspace_fragment>
          }
        `,depthTest:!1,depthWrite:!1});b.add(new qr(new yi(2,2),S));let C=new Xr(new Uint8Array([22,22,24,255]),1,1);C.colorSpace=je,C.needsUpdate=!0;let w=document.createElement(`canvas`),T=w.getContext(`2d`,{willReadFrequently:!0}),E=new di(w);E.colorSpace=je,E.minFilter=o,E.magFilter=o,E.generateMipmaps=!1;let D=new Fr({map:E,transparent:!0,opacity:0,depthWrite:!1}),O=new qr(new yi(1,1),D);y.add(O);let k=[`.`,`:`,`·`,`,`,`;`,`_`],A={desktop:[{text:`Boşlanğiç va maktabga kiruvçilar uçun `,font:`500 16px "Nunito", ui-sans-serif, sans-serif`,tracking:-.16,color:`#ededeb`},{text:`Alifbo, Mantiq va Hisob — 40 Öyin`,font:`400 17px "Nunito", ui-serif, serif`,tracking:0,color:`#ededeb`}],phone:[{text:`Boşlanğiç va maktabga tayyorlov`,font:`500 16px "Nunito", ui-sans-serif, sans-serif`,tracking:-.16,color:`#ededeb`},{text:`Alifbo, Mantiq va 40 Öyin`,font:`400 17px "Nunito", ui-serif, serif`,tracking:0,color:`#ededeb`}]},j=[];for(let e=0;e<80;e++)j.push({rand:Math.random(),glyph:k[Math.floor(Math.random()*k.length)]});function M(e,t,n,r,i){if(!i)return e.fillText(t,n,r),e.measureText(t).width;let a=n;for(let n=0;n<t.length;n++){let o=t[n];e.fillText(o,a,r),a+=e.measureText(o).width+i}return a-n}function N(e,t,n){if(!n)return e.measureText(t).width;let r=0;for(let i=0;i<t.length;i++)r+=e.measureText(t[i]).width+(i<t.length-1?n:0);return r}let P=+!!jh;function F(e){let t=window.innerWidth,n=t<=640,r=s(),i=t,a=n?56:36;(w.width!==Math.floor(i*r)||w.height!==Math.floor(a*r))&&(w.width=Math.floor(i*r),w.height=Math.floor(a*r));let o=T;o.setTransform(r,0,0,r,0,0),o.clearRect(0,0,i,a),o.textBaseline=`middle`;let c=(t,n)=>{if(e>=1)return t;let r=``;t.length;for(let i=0;i<t.length;i++){let a=t[i];if(a===` `){r+=` `;continue}let o=(n+i)/55,s=j[(n+i)%j.length],c=.7*o+.3*s.rand;r+=e>=c?a:s.glyph}return r},l=um()?`#0f172a`:`#ededeb`;if(n){let e=A.phone;o.textAlign=`center`,o.font=e[0].font,o.fillStyle=l,o.fillText(c(e[0].text,0),i/2,16),o.font=e[1].font,o.fillStyle=l,o.fillText(c(e[1].text,e[0].text.length),i/2,36),o.textAlign=`left`}else{let e=A.desktop;o.font=e[0].font;let t=N(o,e[0].text,e[0].tracking);o.font=e[1].font;let n=(i-(t+N(o,e[1].text,e[1].tracking)))/2,r=a/2;o.font=e[0].font,o.fillStyle=l,M(o,c(e[0].text,0),n,r,e[0].tracking),n+=t,o.font=e[1].font,o.fillStyle=l,M(o,c(e[1].text,e[0].text.length),n,r,e[1].tracking)}E.needsUpdate=!0,O.scale.set(i,a,1);let u=Math.max(150,Math.round(window.innerHeight*.16));O.position.set(i/2,-(u+a/2),0)}let I=document.createElement(`canvas`),L=I.getContext(`2d`,{willReadFrequently:!0}),R=new di(I);R.colorSpace=je,R.minFilter=o,R.magFilter=o,R.generateMipmaps=!1;let ee=new qr(new yi(1,1),new Fr({map:R,transparent:!0,depthWrite:!1}));y.add(ee);function z(e){let t=window.innerWidth,n=t<=640,r=s();I.width=Math.floor(t*r),I.height=Math.floor(28*r);let i=L;i.setTransform(r,0,0,r,0,0),i.clearRect(0,0,t,28),i.font=`400 13px "Nunito", ui-serif, serif`,i.fillStyle=um()?`#475569`:`#8a8a88`,i.textBaseline=`middle`,n?(i.textAlign=`left`,i.fillText(`VESNA`,8,14),i.textAlign=`right`,i.fillText(`Boşlanğiç · Ş Ç Ö Ğ`,t-8,14)):(i.textAlign=`center`,i.fillText(`VESNA — Yangi Özbek Alifbosi Ş Ç Ö Ğ`,t/2,14)),R.needsUpdate=!0,ee.scale.set(t,28,1),ee.position.set(t/2,-(e+14),0)}function te(e,t,n){let r=s(),i=document.createElement(`canvas`),a=i.getContext(`2d`,{willReadFrequently:!0});a.font=t;let c=Math.ceil(a.measureText(e).width+6);i.width=c*r,i.height=20*r,a.scale(r,r),a.font=t,a.fillStyle=n,a.textBaseline=`middle`,a.fillText(e,1,10);let l=new di(i);return l.colorSpace=je,l.minFilter=o,l.magFilter=o,l.generateMipmaps=!1,{tex:l,w:c,h:20}}function ne(e,t){let n=s(),r=`${String(e+1).padStart(2,`0`)}  ${t}`,i=document.createElement(`canvas`),a=i.getContext(`2d`,{willReadFrequently:!0}),c=`500 12px "Nunito", ui-sans-serif, sans-serif`;a.font=c;let l=Math.ceil(a.measureText(r).width)+16;i.width=l*n,i.height=22*n,a.scale(n,n),a.font=c,a.fillStyle=`#ededeb`,a.textBaseline=`top`,a.fillText(r,8,6);let u=new di(i);return u.colorSpace=je,u.minFilter=o,u.magFilter=o,u.generateMipmaps=!1,{tex:u,w:l,h:22}}let B=new yi(1,1),V=[],re=`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,ie=+!!um();for(let e=0;e<r.length;e++){let t=r[e],n=new Ai({uniforms:{uTex:{value:C},uTex2:{value:C},uMix:{value:0},uReveal:{value:0},uOpacity:{value:0},uTime:{value:0},uDayMix:{value:ie}},vertexShader:re,fragmentShader:`
        uniform sampler2D uTex;
        uniform sampler2D uTex2;
        uniform float uMix;
        uniform float uReveal;
        uniform float uOpacity;
        uniform float uTime;
        uniform float uDayMix;
        varying vec2 vUv;

        void main() {
          float sweep = fract(uTime * 0.6);
          float band = smoothstep(0.18, 0.0, abs((vUv.x + vUv.y) * 0.5 - sweep)) * 0.035;
          vec3 skelDark = vec3(0.085 + band);
          vec3 skelLight = vec3(0.86 + band * 0.8, 0.91 + band * 0.8, 0.98);
          vec3 skel = mix(skelDark, skelLight, uDayMix);
          vec3 m0 = texture2D(uTex, vUv).rgb;
          vec3 m1 = texture2D(uTex2, vUv).rgb;
          vec3 media = mix(m0, m1, uMix);

          // Liquid Glass specular edge & diagonal caustic sheen
          float ex = min(vUv.x, 1.0 - vUv.x);
          float ey = min(vUv.y, 1.0 - vUv.y);
          float edge = pow(1.0 - clamp(min(ex, ey) * 14.0, 0.0, 1.0), 2.0);
          float diag = vUv.x * 0.75 + vUv.y * 0.55 - fract(uTime * 0.16) * 2.2 + 0.5;
          float caustic = smoothstep(0.18, 0.0, abs(diag)) * (0.05 + 0.08 * uMix);
          vec3 glowCol = mix(vec3(0.72, 0.88, 1.0), vec3(1.0, 1.0, 1.0), uDayMix);
          media += glowCol * (edge * (0.09 + 0.14 * uMix) + caustic * mix(1.0, 0.55, uDayMix));

          vec3 col = mix(skel, media, uReveal);
          gl_FragColor = vec4(col, uOpacity);
        }
      `,transparent:!0,depthWrite:!1}),i=new qr(B,n),a=ne(e,t.category),o=new Ai({uniforms:{uTex:{value:C},uTex2:{value:C},uLabelTex:{value:a.tex},uTileRect:{value:new Bt(0,0,1,1)},uBlurRadiusUv:{value:new xt(.08,.14)},uChipSize:{value:new xt(a.w,a.h)},uMix:{value:0},uReveal:{value:0},uOpacity:{value:0},uDayMix:{value:ie}},vertexShader:re,fragmentShader:`
        uniform sampler2D uTex;
        uniform sampler2D uTex2;
        uniform sampler2D uLabelTex;
        uniform vec4 uTileRect;
        uniform vec2 uBlurRadiusUv;
        uniform vec2 uChipSize;
        uniform float uMix;
        uniform float uReveal;
        uniform float uOpacity;
        uniform float uDayMix;
        varying vec2 vUv;

        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 q = abs(p) - b + r;
          return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
        }

        void main() {
          vec2 p = (vUv - 0.5) * uChipSize;
          float d = roundedBoxSDF(p, uChipSize * 0.5, 4.0);
          float alphaMask = 1.0 - smoothstep(-0.75, 0.75, d);
          if (alphaMask <= 0.001) discard;

          vec2 tileUv = vec2(
            mix(uTileRect.x, uTileRect.z, vUv.x),
            mix(uTileRect.y, uTileRect.w, vUv.y)
          );

          vec3 blurCol = vec3(0.0);
          for (int i = 0; i < 12; i++) {
            float fi = float(i);
            float r = sqrt((fi + 0.5) / 12.0);
            float theta = fi * 2.39996323;
            vec2 off = vec2(cos(theta), sin(theta)) * r * uBlurRadiusUv;
            vec2 suv = clamp(tileUv + off, 0.0, 1.0);
            vec3 s0 = texture2D(uTex, suv).rgb;
            vec3 s1 = texture2D(uTex2, suv).rgb;
            blurCol += mix(s0, s1, uMix);
          }
          blurCol /= 12.0;

          vec3 skelChip = mix(vec3(0.085), vec3(0.90, 0.94, 0.99), uDayMix);
          vec3 mediaBlur = mix(skelChip, blurCol, uReveal);
          vec3 tintTarget = mix(vec3(0.05), vec3(0.97, 0.985, 1.0), uDayMix);
          vec3 bg = mix(mediaBlur, tintTarget, mix(0.45, 0.62, uDayMix));
          vec4 lbl = texture2D(uLabelTex, vUv);
          vec3 lblTint = mix(lbl.rgb, vec3(0.06, 0.09, 0.16), uDayMix);
          vec3 col = mix(bg, lblTint, lbl.a);
          gl_FragColor = vec4(col, alphaMask * uOpacity);
        }
      `,transparent:!0,depthWrite:!1}),s=new qr(B,o);s.renderOrder=2;let c=te(t.title,`500 12px "Nunito", ui-sans-serif, sans-serif`,`#ffffff`),l=new Fr({map:c.tex,color:um()?988970:15592939,transparent:!0,opacity:0,depthWrite:!1}),u=new qr(B,l),d=te(`${t.category}, ${t.year}`,`400 13px "Nunito", ui-serif, serif`,`#ffffff`),f=new Fr({map:d.tex,color:um()?4674921:9079432,transparent:!0,opacity:0,depthWrite:!1}),p=new qr(B,f);y.add(i,s,u,p);let m={index:e,item:t,tileMesh:i,tileMat:n,chipMesh:s,chipMat:o,chipW:a.w,chipH:a.h,titleMesh:u,titleMat:l,titleW:c.w,titleH:c.h,catMesh:p,catMat:f,catW:d.w,catH:d.h,col:0,row:0,x:0,yTop:0,tileW:100,tileH:56,riseOffset:jh?0:60,opacityVal:+!!jh,loading:!1,stillReady:!1,videoTex:null};i.userData.tileState=m,V.push(m)}let ae=1e3,oe=0,se=0,ce=0,le=0;function ue(){let e=window.innerWidth,t=Math.max(1,window.innerHeight),n=e<=640,r=e>=1440,i=e>=1840?5:e>960?4:e>600?3:2,a=r?Math.round(Math.min(44,e*.022)):12,o=r?16:12,s=r?40:32,c=(e-a*2-(i-1)*o)/i,l=9/16*c;F(P);let u=n?56:36,d=Math.max(150,Math.round(t*.16))+u+(r?56:48),f=l+10+16+4+16,p=d;for(let e=0;e<V.length;e++){let t=V[e],n=e%i,r=Math.floor(e/i),u=a+n*(c+o),m=d+r*(f+s),h=Math.max(40,c-16),g=t.chipW>h?h/t.chipW:1;t.drawChipW=t.chipW*g,t.drawChipH=t.chipH*g;let _=t.titleW>c?c/t.titleW:1;t.drawTitleW=t.titleW*_,t.drawTitleH=t.titleH*_;let v=t.catW>c?c/t.catW:1;t.drawCatW=t.catW*v,t.drawCatH=t.catH*v,t.col=n,t.row=r,t.x=u,t.yTop=m,t.tileW=c,t.tileH=l,t.tileMesh.scale.set(c,l,1),t.chipMesh.scale.set(t.drawChipW,t.drawChipH,1),t.titleMesh.scale.set(t.drawTitleW,t.drawTitleH,1),t.catMesh.scale.set(t.drawCatW,t.drawCatH,1);let y=8/c,b=(8+t.drawChipW)/c,x=1-8/l,S=1-(8+t.drawChipH)/l;t.chipMat.uniforms.uTileRect.value.set(y,S,b,x),t.chipMat.uniforms.uBlurRadiusUv.value.set(40/c,40/l),p=Math.max(p,m+f)}let m=p+240;le=m,z(m),ae=Math.max(t,m+100);let h=Math.max(0,ae-t);oe=Math.min(oe,h),se=Math.min(se,h)}ue(),pm(e=>{let t=e===`light`,n=t?15003130:329486;p.background.setHex(n),a.setClearColor(n,1),a.toneMappingExposure=t?1.06:1.15,m.setTheme(e),F(P),le>0&&z(le);let r=t?988970:15592939,i=t?4674921:9079432,o=+!!t;V.forEach(e=>{e.titleMat.color.setHex(r),e.catMat.color.setHex(i),e.tileMat.uniforms.uDayMix.value=o,e.chipMat.uniforms.uDayMix.value=o,e.stillCard&&e.stillTex&&(Cm(e.stillCard.ctx,e.stillCard.w,e.stillCard.h,e.item,0,0),e.stillTex.needsUpdate=!0),e.liveCard&&e.videoTex&&(Cm(e.liveCard.ctx,e.liveCard.w,e.liveCard.h,e.item,0,1),e.videoTex.needsUpdate=!0)})});let H=!1;function de(){if(H)return;if(H=!0,jh){P=1,D.opacity=1,F(1),V.forEach(e=>{e.opacityVal=1,e.riseOffset=0});return}Q.to(D,{opacity:1,duration:.3,ease:`power2.out`});let e={p:0};Q.to(e,{p:1,duration:1.1,ease:`power2.out`,onUpdate:()=>{P=e.p,F(e.p)}}),V.forEach(e=>{let t=.35+.08*e.col+.06*e.row;Q.to(e,{opacityVal:1,duration:.9,delay:t,ease:`power2.out`}),Q.to(e,{riseOffset:0,duration:1.2,delay:t,ease:`expo.out`})})}function fe(e){if(e.loading)return;e.loading=!0;let t=window.innerWidth>=1440?520:400,n=Math.round(9/16*t),r=Fh(e.item,t,n),i=new di(r.canvas);i.colorSpace=je,i.minFilter=o,i.magFilter=o,i.generateMipmaps=!1;let a=Fh(e.item,t,n);Cm(a.ctx,a.w,a.h,e.item,0,1);let s=new di(a.canvas);s.colorSpace=je,s.minFilter=o,s.magFilter=o,s.generateMipmaps=!1,e.stillCard=r,e.stillTex=i,e.liveCard=a,e.videoTex=s,e.tileMat.uniforms.uTex.value=i,e.tileMat.uniforms.uTex2.value=s,e.chipMat.uniforms.uTex.value=i,e.chipMat.uniforms.uTex2.value=s,e.stillReady=!0,Q.to(e.tileMat.uniforms.uReveal,{value:1,duration:.8,ease:`power2.out`}),Q.to(e.chipMat.uniforms.uReveal,{value:1,duration:.8,ease:`power2.out`})}ym(()=>{V.forEach(e=>{e.stillCard&&e.stillTex&&(Cm(e.stillCard.ctx,e.stillCard.w,e.stillCard.h,e.item,0,0),e.stillTex.needsUpdate=!0),e.liveCard&&e.videoTex&&(Cm(e.liveCard.ctx,e.liveCard.w,e.liveCard.h,e.item,0,1),e.videoTex.needsUpdate=!0)})});let pe=Q.quickTo(n,`x`,{duration:.5,ease:`power3.out`}),me=Q.quickTo(n,`y`,{duration:.5,ease:`power3.out`}),he=!1,ge=null,_e=null;function ve(e){(i||window.innerWidth<=1024)&&(e=!1),e!==he&&(he=e,Q.killTweensOf(n,`opacity,scale`),Q.to(n,{opacity:+!!e,scale:e?1:.6,duration:e?.75:.6,ease:`power4.out`}))}function ye(e,n){for(let t of V){let n=+(t===e);Math.abs(t.tileMat.uniforms.uMix.value-n)>.001&&(Q.to(t.tileMat.uniforms.uMix,{value:n,duration:.45,ease:`power2.out`}),Q.to(t.chipMat.uniforms.uMix,{value:n,duration:.45,ease:`power2.out`}))}n&&(t.style.cursor=e?`pointer`:`default`,ve(!!e))}let be=!1;function xe(e){be=!0,ve(!1),Ym(e,()=>{be=!1})}function Se(){be&&(be=!1,Fm())}let Ce=new Oa,we=new xt(-99,-99),Te=-999,Ee=-999,U=!1,De=0,Oe=0,ke=!1;t.addEventListener(`wheel`,e=>{if(Pm())return;e.preventDefault();let t=Math.max(0,ae-window.innerHeight);oe=Math.max(0,Math.min(t,oe+e.deltaY)),U=!0},{passive:!1}),t.addEventListener(`touchstart`,e=>{Pm()||e.touches.length!==1||(ke=!0,De=e.touches[0].clientY,Oe=0,ce=0)},{passive:!0}),t.addEventListener(`touchmove`,e=>{if(!ke||Pm()||e.touches.length!==1)return;let t=e.touches[0].clientY,n=De-t;Oe+=Math.abs(n),De=t,ce=n;let r=Math.max(0,ae-window.innerHeight);oe=Math.max(0,Math.min(r,oe+n))},{passive:!0}),t.addEventListener(`touchend`,()=>{ke=!1}),window.addEventListener(`pointermove`,e=>{qh!==`projects`||Pm()||(Te=e.clientX,Ee=e.clientY,U=!0,!i&&window.innerWidth>1024&&(pe(e.clientX-32),me(e.clientY-32)))}),t.addEventListener(`pointerleave`,()=>{!i&&window.innerWidth>1024&&(ge=null,ye(null,!0))}),t.addEventListener(`click`,e=>{if(Pm()||Oe>10)return;let t=a.domElement.getBoundingClientRect();we.x=(e.clientX-t.left)/t.width*2-1,we.y=-((e.clientY-t.top)/t.height)*2+1,Ce.setFromCamera(we,h);let n=Ce.intersectObjects(V.map(e=>e.tileMesh),!1);n.length&&xe(n[0].object.userData.tileState.item)});let W=Ih(a,(e,t)=>{let n=e*60,r=window.innerHeight,o=window.innerWidth,s=Math.max(0,ae-r);!ke&&Math.abs(ce)>.05&&(ce*=.95**n,oe=Math.max(0,Math.min(s,oe+ce*n)));let c=1-.88**n;se+=(oe-se)*c,y.position.y=se;let l=se-.6*r,u=se+2.6*r,f=null,g=1/0,v=se+r/2;for(let e=0;e<V.length;e++){let n=V[e],r=n.yTop+n.tileH;!n.loading&&r>=l&&n.yTop<=u&&fe(n),n.tileMat.uniforms.uTime.value=t,n.tileMat.uniforms.uOpacity.value=n.opacityVal,n.chipMat.uniforms.uOpacity.value=n.opacityVal,n.titleMat.opacity=n.opacityVal,n.catMat.opacity=n.opacityVal;let i=n.riseOffset,a=n.x+n.tileW/2,o=-(n.yTop+n.tileH/2+i);n.tileMesh.position.set(a,o,0);let s=n.drawChipW||n.chipW,c=n.drawChipH||n.chipH,d=n.drawTitleW||n.titleW,p=n.drawTitleH||n.titleH,m=n.drawCatW||n.catW,h=n.drawCatH||n.catH;n.chipMesh.position.set(n.x+8+s/2,-(n.yTop+8+c/2+i),.1),n.titleMesh.position.set(n.x+d/2,-(n.yTop+n.tileH+10+p/2+i),0),n.catMesh.position.set(n.x+m/2,-(n.yTop+n.tileH+10+16+4+h/2+i),0);let _=n.yTop+n.tileH/2,y=Math.abs(_-v);y<g&&(g=y,f=n)}let S=i||o<=1024?_e:ge;if(!jh&&!Pm()){let e=performance.now();S&&S.liveCard&&S.videoTex&&(!S.lastAnimMs||e-S.lastAnimMs>46)&&(S.lastAnimMs=e,Cm(S.liveCard.ctx,S.liveCard.w,S.liveCard.h,S.item,t,1),S.videoTex.needsUpdate=!0);let n=V.filter(e=>e.stillReady&&e.yTop+e.tileH>=se-80&&e.yTop<=se+r+80);if(n.length>0){typeof Ih.__projAnimCursor!=`number`&&(Ih.__projAnimCursor=0);let r=n[Ih.__projAnimCursor%n.length];if(r&&r!==S&&(!r.lastAnimMs||e-r.lastAnimMs>=115)){r.lastAnimMs=e;let n=r.tileMat.uniforms.uMix.value;n<.98&&r.stillCard&&r.stillTex&&(Cm(r.stillCard.ctx,r.stillCard.w,r.stillCard.h,r.item,t,0),r.stillTex.needsUpdate=!0),n>.02&&r.liveCard&&r.videoTex&&(Cm(r.liveCard.ctx,r.liveCard.w,r.liveCard.h,r.item,t,1),r.videoTex.needsUpdate=!0)}Ih.__projAnimCursor=(Ih.__projAnimCursor+1)%n.length}}if(i||o<=1024)f!==_e&&(_e=f,ye(_e,!1));else if(U&&!Pm()){U=!1;let e=a.domElement.getBoundingClientRect();we.x=(Te-e.left)/e.width*2-1,we.y=-((Ee-e.top)/e.height)*2+1,Ce.setFromCamera(we,h);let t=Ce.intersectObjects(V.map(e=>e.tileMesh),!1),n=t.length?t[0].object.userData.tileState:null;n!==ge&&(ge=n,ye(ge,!0))}let C=Ch();h.position.set(o/2+C.x*58,-r/2-C.y*38,_),h.lookAt(o/2,-r/2,0),m.update(t,C.x,C.y),a.setRenderTarget(d),a.render(p,h),a.setRenderTarget(null),a.render(b,x)});function Ae(){a.setPixelRatio(s()),a.setSize(window.innerWidth,window.innerHeight),f(),S.uniforms.tDiffuse.value=d.texture,v(),ue()}return window.addEventListener(`resize`,Ae),{el:e,enter(){Ae(),de(),Jh=W,Pm()||W.start()},leave(){Jh===W&&(Jh=null),W.stop(),ve(!1),Se()}}},Gh.about=()=>{let e=document.getElementById(`view-about`),t=document.getElementById(`about-canvas`),n=document.getElementById(`about-scroll-hint`),r=document.getElementById(`about-scroll-arrow`),i=Mh(),a=new Wc({antialias:!0,powerPreference:`high-performance`});a.setClearColor(um()?15003130:329486,1),a.outputColorSpace=je,a.toneMapping=0;let s=()=>Nh();a.setPixelRatio(s()),a.setSize(window.innerWidth,window.innerHeight),t.appendChild(a.domElement);let c=a.getContext(),u=a.capabilities.isWebGL2&&!!c.getExtension(`EXT_color_buffer_float`),d=null;function f(){let e=s(),t=Math.max(1,Math.floor(window.innerWidth*e)),n=Math.max(1,Math.floor(window.innerHeight*e));d&&d.dispose(),d=new Ht(t,n,{type:u?g:l,minFilter:o,magFilter:o})}f();let p=new kn;p.background=new Dn(um()?15003130:329486);let m=new la(45,window.innerWidth/Math.max(1,window.innerHeight),.1,100);m.position.set(0,0,13);let h=ah({renderer:a,scale:1.5,shardCount:14,spreadX:17,spreadY:9.5,spreadZ:5,opacity:.9,includeFlanks:!0,theme:lm()});h.group.position.set(0,0,-14),p.add(h.group);let _=new kn;_.background=new Dn(657931);function v(e,t,n,r,i){let a=new qr(new yi(e,t),new Fr({color:new Dn().setScalar(i),side:2}));a.position.set(n[0],n[1],n[2]),a.lookAt(r[0],r[1],r[2]),_.add(a)}v(14,5,[0,6,0],[0,0,0],1.1),v(3.2,10,[-6,0,0],[0,0,0],1),v(2.4,10,[6,0,0],[0,0,0],.85),v(12,2.2,[0,-1.5,-6],[0,-1.5,0],.6),v(5,4,[3,2.5,6],[0,0,0],.8),v(14,6,[0,-6,0],[0,0,0],.22);let y=new eo(a);p.environment=y.fromScene(_,.04).texture,y.dispose();let b={uReveal:{value:+!!jh},uMinY:{value:-1.4},uMaxY:{value:1.5},uBand:{value:.97},uTime:{value:0},uHoverPos:{value:new Y(0,0,0)},uHover:{value:0},uBotCenter:{value:new Y(0,0,-1)},uBotScale:{value:1},uLiquidTint:{value:new Dn(9412863)},uMeniscusColor:{value:new Dn(1450495)}};function x(e){return e.customProgramCacheKey=()=>`krst-bot-mat-v1`,e.onBeforeCompile=e=>{Object.assign(e.uniforms,b),e.vertexShader=`varying vec3 vBotWorldPos;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
            vBotWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=`
            uniform float uReveal;
            uniform float uMinY;
            uniform float uMaxY;
            uniform float uBand;
            uniform float uTime;
            uniform vec3 uHoverPos;
            uniform float uHover;
            uniform vec3 uBotCenter;
            uniform float uBotScale;
            uniform vec3 uLiquidTint;
            uniform vec3 uMeniscusColor;
            varying vec3 vBotWorldPos;

            float botHash(vec2 p) {
              return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
            }
            float botNoise(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);
              vec2 u = f * f * (3.0 - 2.0 * f);
              return mix(
                mix(botHash(i), botHash(i + vec2(1.0, 0.0)), u.x),
                mix(botHash(i + vec2(0.0, 1.0)), botHash(i + vec2(1.0, 1.0)), u.x),
                u.y
              );
            }
          
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
            vec3 botLocal = (vBotWorldPos - uBotCenter) / max(uBotScale, 0.001);
            float bWave = (botNoise(botLocal.xz * 2.5 + vec2(uTime * 0.35, uTime * 0.22)) - 0.5) * 0.95 * (1.0 - uReveal);
            float bLineY = mix(uMinY - uBand, uMaxY + 0.25 * uBand, uReveal) + bWave;
            if (botLocal.y > bLineY && uReveal < 0.999) discard;`),e.fragmentShader=e.fragmentShader.replace(`#include <tonemapping_fragment>`,`
            float bBandT = clamp((bLineY - botLocal.y) / uBand, 0.0, 1.0);
            float bFadeOut = 1.0 - smoothstep(0.92, 1.0, uReveal);
            float bLiquidMask = (1.0 - bBandT) * bFadeOut;
            gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * 1.45 + uLiquidTint * 0.32, bLiquidMask);
            float bMeniscus = pow(1.0 - bBandT, 3.0) * 1.4 * bFadeOut;
            gl_FragColor.rgb += uMeniscusColor * bMeniscus;

            float bDistH = distance(vBotWorldPos, uHoverPos);
            float bHoverGlow = pow(smoothstep(1.09, 0.262, bDistH), 3.0) * 0.4 * uHover;
            gl_FragColor.rgb += uMeniscusColor * bHoverGlow;
            #include <tonemapping_fragment>`)},e}let S=x(new Ni({color:16777215,metalness:1,roughness:.07})),C=x(new Ni({color:263173,metalness:.3,roughness:.12,clearcoat:1,clearcoatRoughness:.04})),w=x(new Fr({color:15921902})),T=new bn;T.position.set(0,0,-1),p.add(T);let E=new bn;T.add(E);let D=new qr(new bi(1,40,28),S);D.scale.set(1.1,1,.98),E.add(D);let O=new qr(new bi(1,40,24,Math.PI/2-1.02,2.04,Math.PI/2-.5,1),C);O.scale.set(1.1165,1.015,.98*1.015),E.add(O);let k=new gi(.075,.2,8,16),A=[];[-.3,.3].forEach(e=>{let t=.03,n=Math.sqrt(Math.max(.01,1-(e/1.1165)**2-(t/1.015)**2))*(.98*1.015)+.015,r=new qr(k,w);r.position.set(e,t,n),r.scale.set(1,1,.45),E.add(r),A.push(r)});let j=new qr(new vi(.022,.03,.42,24),S);j.position.set(0,1.15,0),E.add(j);let M=new qr(new bi(.095,24,16),S);M.position.set(0,1.38,0),E.add(M),[-1.1,1.1].forEach(e=>{let t=new qr(new xi(.2,.065,20,36),S);t.position.set(e,0,0),t.rotation.y=Math.PI/2,E.add(t);let n=new qr(new vi(.15,.15,.08,24),C);n.position.set(e,0,0),n.rotation.z=Math.PI/2,E.add(n)});let N=new bn;N.position.set(0,-1.28,0),N.rotation.x=Math.PI/2*.92;let P=new qr(new xi(.78,.05,16,44),S);N.add(P),E.add(N);let F=new Wn().setFromObject(E),I=new Y,L=new Y;F.getCenter(I),F.getSize(L),E.children.forEach(e=>{e.position.sub(I)});let R=new Wn().setFromObject(E);b.uMinY.value=R.min.y,b.uMaxY.value=R.max.y;let ee=L.y||2.8,z=1;function te(){let e=window.innerWidth,t=Math.max(1,window.innerHeight),n=205;e<=1024?n*=.85:e<=1440?n*=.92:n=Math.min(310,Math.max(220,t*.27));let r=28*Math.tan(45*Math.PI/180/2);z=n/t*r/ee,T.scale.setScalar(z),b.uBotScale.value=z}te();let ne=new Ai({uniforms:{tBg:{value:d.texture},uResolution:{value:new xt(window.innerWidth*s(),window.innerHeight*s())},uDiscCenter:{value:new xt(.5,.5)},uDissolve:{value:0},uGlow:{value:11},uNovaColor:{value:new Dn(16777215)},uRingColor:{value:new Dn(2436007)}},vertexShader:`
          varying vec2 vLocalPos;
          void main() {
            vLocalPos = position.xy;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D tBg;
          uniform vec2 uResolution;
          uniform vec2 uDiscCenter;
          uniform float uDissolve;
          uniform float uGlow;
          uniform vec3 uNovaColor;
          uniform vec3 uRingColor;
          varying vec2 vLocalPos;

          void main() {
            float nd = length(vLocalPos);
            if (nd > 1.0) discard;

            vec2 screenUv = gl_FragCoord.xy / uResolution;
            vec2 dir = screenUv - uDiscCenter;
            float dLen = length(dir);
            vec2 nDir = dLen > 0.0001 ? dir / dLen : vec2(0.0);

            float distortFade = 1.0 - smoothstep(0.0, 0.8, uDissolve);
            float zoomPull = 0.5 * 0.30 * nd * nd;
            float rimPull = smoothstep(0.85, 1.0, nd) * 0.2344;
            vec2 pulledUv = screenUv - dir * zoomPull * distortFade - nDir * rimPull * 0.08 * distortFade;

            float dispAmt = smoothstep(0.6, 1.0, nd) * 1.64 * 0.004 * distortFade;
            vec3 bgCol = vec3(0.0);
            if (dispAmt > 0.00001) {
              vec3 acc = vec3(0.0);
              vec3 wSum = vec3(0.0);
              for (int i = 0; i < 8; i++) {
                float fi = float(i) / 7.0;
                float off = (fi - 0.5) * dispAmt * 2.0;
                vec2 suv = clamp(pulledUv + nDir * off, 0.0, 1.0);
                vec3 s = texture2D(tBg, suv).rgb;
                float wr = exp(-pow((fi - 0.18) / 0.28, 2.0));
                float wg = exp(-pow((fi - 0.50) / 0.28, 2.0));
                float wb = exp(-pow((fi - 0.82) / 0.28, 2.0));
                vec3 w = vec3(wr, wg, wb);
                acc += s * w;
                wSum += w;
              }
              bgCol = acc / max(wSum, vec3(0.0001));
            } else {
              bgCol = texture2D(tBg, clamp(pulledUv, 0.0, 1.0)).rgb;
            }

            float lightFade = 1.0 - smoothstep(0.0, 0.6, uDissolve);

            // White nova
            float novaSigma = 4.0 * uGlow * 0.003;
            float nova = exp(-(nd * nd) / (2.0 * novaSigma * novaSigma)) * (0.285 * (uGlow / 17.0) * 1.15);

            // Main #252ba7 ring at 0.49, width 0.08 + wide aura
            float ringCore = exp(-pow((nd - 0.49) / 0.04, 2.0));
            float ringAura = exp(-pow((nd - 0.49) / 0.18, 2.0)) * 0.35;
            float ringInt = (ringCore + ringAura) * (0.9 * (uGlow / 17.0) * 1.8);

            // Thin white rim at 0.483
            float whiteRim = exp(-pow((nd - 0.483) / 0.008, 2.0)) * 0.65;

            // Edge ring at 0.478, width 0.06, softness 1, intensity 1.053
            float edgeRing = smoothstep(0.06, 0.0, abs(nd - 0.478)) * 1.053;

            vec3 lightAdd = (uNovaColor * (nova + whiteRim) + uRingColor * (ringInt + edgeRing)) * lightFade;
            vec3 finalCol = bgCol + lightAdd;

            float edgeFeather = 1.0 - smoothstep(0.94, 1.0, nd);
            float alpha = (1.0 - smoothstep(0.8, 1.0, uDissolve)) * edgeFeather;

            gl_FragColor = vec4(finalCol, alpha);
            #include <colorspace_fragment>
          }
        `,transparent:!0,depthWrite:!1}),B=new qr(new _i(1,48),ne);B.position.set(0,0,-8),B.renderOrder=5,B.visible=!1,p.add(B);let V=new bn;p.add(V);let re=42*Math.tan(45*Math.PI/180/2),ie=e=>e*re/Math.max(1,window.innerHeight);function ae(e,t,n){let r=s(),i=document.createElement(`canvas`);i.width=Math.max(2,Math.ceil(t*r)),i.height=Math.max(2,Math.ceil(n*r));let a=i.getContext(`2d`,{willReadFrequently:!0});a.scale(r,r),e(a,t,n);let c=new di(i);c.colorSpace=je,c.minFilter=o,c.magFilter=o,c.generateMipmaps=!1;let l=new Fr({map:c,transparent:!0,opacity:1,depthWrite:!1}),u=new qr(new yi(1,1),l);return u.scale.set(ie(t),ie(n),1),{mesh:u,mat:l,tex:c,wPx:t,hPx:n}}let oe=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0});function se(e,t,n){oe.font=t;let r=e.split(` `),i=[],a=``;for(let e of r){let t=a?a+` `+e:e;oe.measureText(t).width<=n||!a?a=t:(i.push(a),a=e)}return a&&i.push(a),i}let ce=[],le=[],ue=[],H=3e3,de=0,fe=0,pe=0,me=!1;function he(){for(;V.children.length;){let e=V.children[0];V.remove(e),e.material?.map&&e.material.map.dispose(),e.material&&e.material.dispose(),e.geometry&&e.geometry.dispose()}ce=[],le=[],ue=[];let e=window.innerWidth,t=window.innerHeight,n=e<=640,r=e<=1024,i=um(),a=i?`#0f172a`:`#ededeb`,o=i?`#475569`:`#8a8a88`;{let o=n?62:75;if(r){oe.font=`300 ${o}px "Nunito", ui-serif, serif`;let t=Math.max(...[`raqamlar`,`öyinlar`,`birinçi`,`qadam.`].map(e=>oe.measureText(e).width)),n=e-48;t>n&&(o=Math.floor(n/t*o))}let s=r?16:24,c=o*1.18,l=n?12:14,u=`300 ${o}px "Nunito", ui-serif, serif`,d=`400 ${s}px "Nunito", ui-sans-serif, sans-serif`,f=`500 ${l}px "Nunito", ui-sans-serif, sans-serif`,p=(e,t,n,r,i)=>{e.font=u;let a=0;for(let n=0;n<t.length;n++)a+=e.measureText(t[n]).width+(n<t.length-1?i:0);let o=n-a/2;e.textAlign=`left`;for(let n=0;n<t.length;n++)e.fillText(t[n],o,r),o+=e.measureText(t[n]).width+i},m=(e,t,n)=>{oe.font=t;let r=0;for(let t=0;t<e.length;t++)r+=oe.measureText(e[t]).width+(t<e.length-1?n:0);return r},h=-.01*o,g;if(!r)g=[{type:`text`,text:`Harflar, raqamlar va`},{type:`text`,text:`quvnoq öyinlar bilan ilk`},{type:`motion`}];else{let t=e-48,n=se(`Harflar, raqamlar va`,u,t),r=se(`quvnoq öyinlar bilan ilk`,u,t);g=[...n.map(e=>({type:`text`,text:e})),...r.map(e=>({type:`text`,text:e}))],m(`Bilim`,u,h)+8+m(`™`,d,0)+m(` sari birinçi qadam.`,u,h)<=t?g.push({type:`motion`}):(g.push({type:`motionOnly`}),se(`sari birinçi qadam.`,u,t).forEach(e=>g.push({type:`text`,text:e})))}let _=-(g.length*c+56+l)/2+c/2,v=_+(g.length-1)*c+c*.45+56,y={x:0,y:0,w:100,h:20},b=ae((e,t,n)=>{e.fillStyle=a,e.textBaseline=`middle`;let r=t/2,i=n/2;g.forEach((t,n)=>{let a=i+_+n*c;if(t.type===`text`)p(e,t.text,r,a,h);else if(t.type===`motion`||t.type===`motionOnly`){let n=m(`Bilim`,u,h);e.font=d;let i=e.measureText(`™`).width,s=t.type===`motion`?` sari birinçi qadam.`:``,c=s?m(s,u,h):0,l=n+8+i+c,f=r-l/2;e.font=u,e.textAlign=`left`;for(let t=0;t<5;t++)e.fillText(`Bilim`[t],f,a),f+=e.measureText(`Bilim`[t]).width+h;if(f+=8,e.font=d,e.fillText(`™`,f,a-.2*o),f+=i,s){e.font=u;for(let t=0;t<s.length;t++)e.fillText(s[t],f,a),f+=e.measureText(s[t]).width+h}}});let s=`Yangi özbek alifbosi · `,b=`Ş · Ç · Ö · Ğ`;e.font=f,e.textAlign=`left`;let x=e.measureText(s).width,S=e.measureText(b).width,C=r-(x+S)/2,w=i+v;e.fillStyle=a,e.fillText(s+b,C,w),y={x:C+x-t/2+S/2,y:-(w-n/2),w:S+6,h:l+10}},e,t);b.mesh.position.set(0,0,-8),V.add(b.mesh),ue.push({mesh:b.mesh,baseXPx:0});let x=new Fr({color:i?15003130:789517,transparent:!0,opacity:0,depthWrite:!1}),S=new qr(new yi(ie(y.w),ie(y.h)),x);S.position.set(ie(y.x),ie(y.y),-7.98),S.renderOrder=2,S.userData.action=`alphabet`,S.userData.onHover=e=>{Q.to(x,{opacity:e?.5:0,duration:.55,ease:`expo.out`})},V.add(S),ue.push({mesh:S,baseXPx:y.x}),le.push(S)}let s=n?Math.min(e-56,300):440,c=n?64:78,l=e/2+(n?70:200),u=[{kind:`paragraph`,side:`top`,heading:`Yangi alifbo`,body:`Yangi özbek alifbosi: 29 ta harf (Ç, Ğ, Ö, Ş va tutuq belgisi ʼ) bilan oson öqiş.`,wrapW:Math.min(320,s)},{kind:`list`,side:`bottom`,heading:`Bölimlar`,rows:[`Harf taniş va yoziş`,`Böğin va söz tuziş`,`Raqamlar 1–20`,`Mantiq, şakl va soat`]},{kind:`chapter`,side:`top`,heading:`1-qism  ·  Harflar`,numeral:`I`,body:`Har bir tovuşni öyin va misollar bilan tez eslab qoliş mumkin.`,wrapW:Math.min(300,s)},{kind:`quote`,side:`bottom`,quote:`“Öynab örganilgan bilim bir umr esda qoladi.”`,note:`— Ilk qadamlar daftari`,wrapW:Math.min(440,s)},{kind:`stats`,side:`top`,heading:`40 ta Maşq`,rows:[`12  Alifbo va öqiş`,`10  Raqam va hisob`,`10  Mantiq, şakl va soat`,`08  Rang, zid söz va PvP`]},{kind:`paragraph`,side:`bottom`,heading:`Matematika va Mantiq`,body:`Nuqtalar, tarozi va şakllar yordamida hisob va mantiqni tez örganing.`,wrapW:Math.min(320,s)},{kind:`chapter`,side:`top`,heading:`2-qism  ·  Hisob`,numeral:`II`,body:`Kiçik misollar katta muvaffaqiyatlarga yöl oçadi.`,wrapW:Math.min(300,s)},{kind:`list`,side:`bottom`,heading:`Yangi belgilar`,rows:[`Ç ç — Çoynak, Çana`,`Ğ ğ — Ğoz, Toğ`,`Ö ö — Ördak, Öt`,`Ş ş · ʼ — Şir, Maʼno`]},{kind:`quote`,side:`top`,quote:`“Har kuni beş daqiqa maşq — aʼlo bilim kaliti.”`,note:`— Maktabga tayyorlov`,wrapW:Math.min(440,s)},{kind:`links`,side:`bottom`,heading:`Boşlaş`,rows:[{text:`Alifbo taxtasini oçiş →`,action:`alphabet`,color:a},{text:`Barcha 40 ta maşq →`,action:`projects`,color:a},{text:`Boşlanğiç va maktabga kiruvçilar uçun`,action:null,color:o}]}],d=`500 12px "Nunito", ui-sans-serif, sans-serif`;for(let e of u){let t=[],r=0;if(e.kind===`paragraph`){t.push({text:e.heading,font:d,color:o,h:16,gapAfter:16});let n=`300 22px "Nunito", ui-serif, serif`,r=se(e.body,n,e.wrapW);r.forEach((e,i)=>{t.push({text:e,font:n,color:a,h:29,gapAfter:(r.length-1,0)})})}else if(e.kind===`list`)t.push({text:e.heading,font:d,color:o,h:16,gapAfter:14}),e.rows.forEach((n,r)=>{t.push({text:n,font:`400 18px "Nunito", ui-serif, serif`,color:a,h:22,gapAfter:r<e.rows.length-1?7:0})});else if(e.kind===`chapter`){t.push({text:e.heading,font:d,color:o,h:16,gapAfter:12}),t.push({text:e.numeral,font:`300 72px "Nunito", ui-serif, serif`,color:a,h:74,gapAfter:12});let n=`300 19px "Nunito", ui-serif, serif`;se(e.body,n,e.wrapW).forEach(e=>{t.push({text:e,font:n,color:a,h:26,gapAfter:0})})}else if(e.kind===`quote`){let r=n?30:40,i=`italic 300 ${r}px "Nunito", ui-serif, serif`,s=Math.round(r*1.12),c=se(e.quote,i,e.wrapW);c.forEach((e,n)=>{t.push({text:e,font:i,color:a,h:s,gapAfter:n===c.length-1?14:0})}),t.push({text:e.note,font:d,color:o,h:16,gapAfter:0})}else e.kind===`stats`?(t.push({text:e.heading,font:d,color:o,h:16,gapAfter:14}),e.rows.forEach((n,r)=>{t.push({text:n,font:`400 18px "Nunito", ui-sans-serif, sans-serif`,color:a,h:22,gapAfter:r<e.rows.length-1?9:0})})):e.kind===`links`&&(t.push({text:e.heading,font:d,color:o,h:16,gapAfter:14}),e.rows.forEach((n,r)=>{t.push({text:n.text,font:`300 22px "Nunito", ui-serif, serif`,color:n.color,h:28,gapAfter:r<e.rows.length-1?8:0,action:n.action})}));let i=0;t.forEach(e=>{oe.font=e.font,e.w=Math.ceil(oe.measureText(e.text).width+8),r=Math.max(r,e.w),i+=e.h+e.gapAfter});let s=e.side===`top`?c+i:-c,u=[];for(let e of t){let t=ae((t,n,r)=>{t.font=e.font,t.fillStyle=e.color,t.textBaseline=`middle`,t.fillText(e.text,2,r/2)},e.w,e.h),n=l+e.w/2,r=ie(s-e.h/2);t.mesh.position.set(ie(n),r,-8),V.add(t.mesh),e.action&&(t.mesh.userData.action=e.action,t.mesh.userData.onHover=e=>{Q.to(t.mat,{opacity:e?.5:1,duration:.55,ease:`expo.out`})},le.push(t.mesh)),u.push({mesh:t.mesh,baseCenterXPx:n,baseY:r,halfWWorld:ie(e.w/2),halfHWorld:ie(e.h/2),shift:0}),s-=e.h+e.gapAfter}let f=e.side===`top`?[...u].reverse():[...u];ce.push({side:e.side,lines:f});let p=Math.max(.62*r,n?150:200)+(n?60:90);l+=p}H=l+(n?140:260)+e/2}he(),pm(e=>{let t=e===`light`?15003130:329486;p.background.setHex(t),a.setClearColor(t,1),h.setTheme(e),he()});let ge=i?{x:0,y:0,z:0}:{x:-.62,y:.59,z:.2},_e={x:ge.x,y:ge.y,z:ge.z},ve={phase:0,speed:1,amplitude:1},ye={y:0},be={x:0,y:0,z:0},xe=!1,Se=!1,Ce=!1,we=!1,Te=performance.now(),Ee=null,U=!1;function De(){clearTimeout(Ee),Ee=window.setTimeout(()=>{qh===`about`&&!xe&&!Se&&A.forEach(e=>{Q.to(e.scale,{y:.1,duration:.09,ease:`power2.in`,yoyo:!0,repeat:1})}),De()},3e3+Math.random()*2e3)}function Oe(){Q.timeline().to(ye,{y:.22,duration:.09,ease:`power2.out`}).to(ye,{y:-.18,duration:.12,ease:`power2.inOut`}).to(ye,{y:.1,duration:.11,ease:`power2.inOut`}).to(ye,{y:0,duration:.18,ease:`power2.out`})}function ke(){Te=performance.now(),xe&&(xe=!1,Q.to(ve,{speed:1,amplitude:1,duration:.8,ease:`power2.out`}),A.forEach(e=>Q.to(e.scale,{y:1,duration:.15,ease:`power2.out`})),Oe())}function W(){xe||i||b.uReveal.value<.98||Se||(xe=!0,A.forEach(e=>Q.to(e.scale,{y:.2,duration:1.1,ease:`power2.inOut`})),Q.to(ge,{x:.42,y:0,z:.12,duration:1.4,ease:`power2.inOut`}),Q.to(ve,{speed:.35,amplitude:1.6,duration:1.6,ease:`power2.inOut`}))}function Ae(){if(b.uReveal.value<.8||we||Se)return;Se=!0,we=!0,B.visible=!0,B.scale.setScalar(.001),ne.uniforms.uDissolve.value=0;let e=!1,t={s:.001};Q.to(t,{s:10,duration:4,ease:`expo.out`,onUpdate:()=>{B.scale.setScalar(t.s),!e&&t.s>=6.14&&(e=!0,Q.to(ne.uniforms.uDissolve,{value:1,duration:.8975,ease:`sine.inOut`,onComplete:()=>{we=!1,B.visible=!1,B.scale.setScalar(.001),ne.uniforms.uDissolve.value=0}}))}}),Ce=!Ce,Ce?(A.forEach(e=>Q.to(e.scale,{y:.15,duration:.16,ease:`power3.out`})),Q.timeline({onComplete:()=>{Se=!1,Oe()}}).to(be,{x:-.45,y:.18,duration:.16,ease:`power3.out`}).to(be,{x:0,y:0,duration:.9,ease:`elastic.out(1, 0.45)`}),A.forEach(e=>Q.to(e.scale,{y:1,duration:.4,delay:.25,ease:`power2.out`}))):Q.timeline({onComplete:()=>{be.y=0,Se=!1,Oe()}}).to(be,{y:Math.PI*2,duration:1.1,ease:`power3.inOut`},0).to(be,{z:.25,duration:.35,ease:`power2.out`},0).to(be,{z:0,duration:.75,ease:`elastic.out(1, 0.5)`},.35)}let G=new Oa,K=new xt(-99,-99),Me=!1,Ne=null,Pe=0,Fe=0,Ie=!1,Le=0,Re=()=>{qh===`about`&&ke()};[`mousemove`,`wheel`,`pointerdown`,`touchstart`,`keydown`].forEach(e=>{window.addEventListener(e,Re,{passive:!0})}),window.addEventListener(`pointermove`,e=>{if(qh!==`about`||Pm())return;let t=window.innerWidth/2,n=window.innerHeight/2,r=(e.clientX-t)/Math.max(1,t),i=(e.clientY-n)/Math.max(1,n);xe||(ge.x=bt.clamp(i,-.62,.62),ge.y=bt.clamp(r,-.59,.59),ge.z=.2*r);let o=a.domElement.getBoundingClientRect();K.x=(e.clientX-o.left)/o.width*2-1,K.y=-((e.clientY-o.top)/o.height)*2+1,Me=!0});function ze(){me||(me=!0,Q.to(n,{opacity:0,duration:.45,ease:`power2.out`}))}t.addEventListener(`wheel`,e=>{if(Pm())return;e.preventDefault(),ze();let t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;fe+=t,Me=!0},{passive:!1}),t.addEventListener(`touchstart`,e=>{Pm()||e.touches.length!==1||(Ie=!0,Pe=e.touches[0].clientX,Fe=e.touches[0].clientY,Le=0,pe=0)},{passive:!0}),t.addEventListener(`touchmove`,e=>{if(!Ie||Pm()||e.touches.length!==1)return;let t=e.touches[0].clientX,n=e.touches[0].clientY,r=Pe-t,i=Fe-n;Pe=t,Fe=n;let a=Math.abs(r)>Math.abs(i)?r:i;Le+=Math.abs(a),Le>4&&ze(),pe=a,fe+=a},{passive:!0}),t.addEventListener(`touchend`,()=>{Ie=!1}),t.addEventListener(`click`,e=>{if(Pm()||Le>10)return;let t=a.domElement.getBoundingClientRect();if(K.x=(e.clientX-t.left)/t.width*2-1,K.y=-((e.clientY-t.top)/t.height)*2+1,G.setFromCamera(K,m),G.intersectObject(T,!0).length){Ae(),window.dispatchEvent(new CustomEvent(`alif:robot-click`,{detail:{x:e.clientX,y:e.clientY}}));return}let n=G.intersectObjects(le,!1);if(n.length){let e=n[0].object.userData.action;e===`alphabet`?Ym(Ah[4]):e===`projects`&&(window.location.hash=`#projects`)}});let Be=!1,Ve=null;function He(){let e=!Be;Be=!0,Te=performance.now(),jh?(b.uReveal.value=1,Q.set(n,{opacity:1,x:0})):(Ve&&Ve.kill(),b.uReveal.value=0,Ve=Q.to(b.uReveal,{value:1,duration:3.85,delay:e?1:.45,ease:`power2.out`}),me||(Q.fromTo(n,{opacity:0,x:-8},{opacity:1,x:0,duration:.9,delay:1.6,ease:`expo.out`}),Q.killTweensOf(r),Q.to(r,{x:5,duration:.8,ease:`sine.inOut`,yoyo:!0,repeat:-1}))),De()}let q=new Y,J=Ih(a,(e,n)=>{let r=e*60,o=Ch();b.uTime.value=n,m.position.x=o.x*.55,m.position.y=-o.y*.36,m.lookAt(0,0,-1),h.update(n,o.x,o.y),!i&&!xe&&performance.now()-Te>3e4&&W(),o.hasGyro&&!xe&&!Se&&(ge.x=bt.clamp(o.y*.58,-.62,.62),ge.y=bt.clamp(o.x*.58,-.59,.59),ge.z=.2*o.x);let s=1-.92**(60*e);Se||(_e.x+=(ge.x-_e.x)*s,_e.y+=(ge.y-_e.y)*s,_e.z+=(ge.z-_e.z)*s),T.rotation.set(_e.x+be.x,_e.y+be.y,_e.z+be.z);let c=0;if(!jh){ve.phase+=e*1.5*ve.speed;let t=Math.sin(ve.phase)*.2*ve.amplitude*b.uReveal.value;c=T.position.y+(t-T.position.y)*s}if(T.position.y=c+ye.y,b.uBotCenter.value.copy(T.position),P.rotation.z+=.35*e,Me){Me=!1,G.setFromCamera(K,m);let e=G.intersectObject(T,!0);e.length&&b.uReveal.value>=.8?(U=!0,b.uHoverPos.value.copy(e[0].point)):U=!1;let n=G.intersectObjects(le,!1),r=n.length?n[0].object:null;r!==Ne&&(Ne?.userData.onHover&&Ne.userData.onHover(!1),Ne=r,Ne?.userData.onHover&&Ne.userData.onHover(!0)),t.style.cursor=U||r?`pointer`:`default`}let l=+!!U,u=U?.1:.05;b.uHover.value+=(l-b.uHover.value)*(1-(1-u)**r),!Ie&&Math.abs(pe)>.05&&(pe*=.95**r,fe+=pe*r);let f=1-.88**r;de+=(fe-de)*f;let g=e=>{let t=H;return((e+t/2)%t+t)%t-t/2};ue.forEach(e=>{e.mesh.position.x=ie(g(e.baseXPx-de))});let _=window.innerWidth<=640?.7875:1,v=3.4*_,y=4.0543*_;for(let e of ce){let t=0,n=e.lines;for(let i=0;i<n.length;i++){let a=n[i],o=ie(g(a.baseCenterXPx-de));a.mesh.position.x=o;let s=o-a.halfWWorld,c=o+a.halfWWorld,l=0>=s&&0<=c?0:Math.min(Math.abs(s),Math.abs(c)),u=0;if(l<v){let t=y*Math.sqrt(Math.max(0,1-l/v*(l/v)))+.35;if(e.side===`top`){let e=a.baseY-a.halfHWorld;u=Math.max(0,t-e)}else{let e=a.baseY+a.halfHWorld;u=Math.max(0,e+t)}}i>0&&(u=Math.max(u,t));let d=1-(1-Math.max(.1,.14-.012*i))**r;a.shift+=(u-a.shift)*d,t=a.shift,a.mesh.position.y=a.baseY+(e.side===`top`?a.shift:-a.shift)}}we&&(q.copy(B.position).project(m),ne.uniforms.uDiscCenter.value.set(q.x*.5+.5,q.y*.5+.5),T.visible=!1,B.visible=!1,a.setRenderTarget(d),a.render(p,m),a.setRenderTarget(null),T.visible=!0,B.visible=!0),a.render(p,m)});function Ue(){let e=s();m.aspect=window.innerWidth/Math.max(1,window.innerHeight),m.updateProjectionMatrix(),a.setPixelRatio(e),a.setSize(window.innerWidth,window.innerHeight),f(),ne.uniforms.tBg.value=d.texture,ne.uniforms.uResolution.value.set(window.innerWidth*e,Math.max(1,window.innerHeight)*e),te(),he()}return window.addEventListener(`resize`,Ue),{el:e,enter(){Ue(),He(),Jh=J,Pm()||J.start()},leave(){Jh===J&&(Jh=null),J.stop(),clearTimeout(Ee)}}},Gh.alphabet=()=>ih();async function Qh(){await Promise.allSettled([document.fonts.load(`600 64px "Nunito"`),document.fonts.load(`500 16px "Nunito"`),document.fonts.load(`400 18px "Nunito"`),document.fonts.load(`300 75px "Nunito"`),document.fonts.load(`400 18px "Nunito"`),document.fonts.load(`italic 300 40px "Nunito"`)]),await document.fonts.ready;let e=Yh();Zh(e),e!==`gallery`&&Uh(!1)}Qh();var $h={email:`hello@vesna.uz`,telegram:`https://t.me/vesna_edu`,defaultLang:`uz`,intervalOptions:[10,15,20,30],restOptions:[20,40,60],defaultInterval:20,defaultRest:40,idleCutoffMs:45e3,snoozeMin:5,promptAutoMs:12e3},eg=/[?&]demo\b/.test(location.search),tg={uz:{nav_sphere:`Sfera`,nav_games:`Maşqlar`,nav_letters:`Harflar`,nav_alphabet:`Alifbo`,nav_contact:`Boğlaniş`,hint_spin:`AYLANTIRIB TANLANG`,play_arrow:`Öynaş →`,close:`Yopiş`,scroll:`SURİŞ`,menu_intro:`Yangi özbek alifbosi: Ç · Ğ · Ö · Ş · ʼ`,set_every:`Köz uçun dam oliş eslatmasi`,set_rest:`Dam oliş davomiyligi`,min:`daq`,sec:`s`,rest_now:`Hozir dam olamiz`,eye_now:`Köz maşqi`,theme_mode:`Kungi / Tungi rejim`,theme_day:`Kun`,theme_night:`Tun`,guide_btn:`Sayt yöriqnomasi`,guide_title:`VESNA — Sayt yöriqnomasi`,guide_sub:`Boşlanğiç va maktabga kiruvçilar uçun`,greet:[`Salom! Men Vesna. Meni bosib kör!`,`Birga öynaymizmi?`],again:`Yana salom! Davom etamizmi?`,prompt_now:`Hozir dam olamiz`,prompt_later:`5 daqiqadan keyin`,rest_title:`Köz dam olsin!`,back_msg:`Qaytding! Davom etamizmi?`,back_btn:`Qaytiş`,eye_start:`Köz maşqi`,eye_choose:`Maşqni tanla`,break_msgs:[`Közlaring çarçadi! Derazadan uzoqqa qara.`,`Biroz havo almaştiraylik, köçaga çiqib kel.`,`Dars vaqti ham böldi, vazifangni qilib kel, keyin yana öynaymiz.`,`20 soniya uzoqdagi narsaga qara, keyin davom etamiz.`,`Közlaringni kaftlaring bilan yopib, dam ol.`],ex_ball_t:`Şarni kuzat`,ex_ball_d:`Boşingni burma, faqat közing bilan şarni kuzat.`,ex_focus_t:`Yaqin va uzoq`,ex_focus_d:`Doira kattalaşsa yaqinga, kiçiklaşsa uzoqqa qara.`,ex_blink_t:`Kapalak`,ex_blink_d:`Qanotlar yopilganda közingni qis.`,ex_far_t:`Uzoqqa qara`,ex_far_d:`Derazadan eng uzoqdagi narsaga qara.`,ex_near:`Yaqin`,ex_farw:`Uzoq`,ex_stop:`Töxtat`,ex_done:`Barakalla!`,contact_title:`Boğlaniş`,contact_lead:`Savolingiz bormi yoki maktabingizda VESNA ni sinab körmoqçimisiz? Yozing!`,contact_email:`Poçta yoziş`,contact_tg:`Telegram`,f_school:`Maktab nomi`,f_name:`Ismingiz`,f_phone:`Telefon yoki Telegram`,f_msg:`Xabar`,f_send:`Yuboriş`,mail_subject:`VESNA haqida`,err_boot:`Sayt töliq yuklanmadi. Sahifani yangilang.`,reload:`Yangilaş`},kaa:{nav_sphere:`Sfera`,nav_games:`Shınıǵıwlar`,nav_letters:`Háripler`,nav_alphabet:`Álipbe`,nav_contact:`Baylanıs`,hint_spin:`AYLANDIRIP SAYLAŃ`,play_arrow:`Oynaw →`,close:`Jabıw`,scroll:`SÚRIŃ`,menu_intro:`Jańa ózbek álipbesi: Ç · Ğ · Ö · Ş · ʼ`,set_every:`Kóz dem alıw eskertiwi`,set_rest:`Dem alıw dawamlılığı`,min:`min`,sec:`s`,rest_now:`Házir dem alamız`,eye_now:`Kóz shınıǵıwı`,theme_mode:`Kún / Tún rejimi`,theme_day:`Kún`,theme_night:`Tún`,guide_btn:`Sayt jollanbası`,guide_title:`VESNA — Sayt jollanbası`,guide_sub:`Baslawısh hám mektepke tayarlıq ushın`,greet:[`Sálem! Men Vesna. Maǵan bas!`,`Birge oynayıqpa?`],again:`Taǵı sálem! Dawam etemizbe?`,prompt_now:`Házir dem alamız`,prompt_later:`5 minuttan keyin`,rest_title:`Kózlerge dem kerek!`,back_msg:`Qaytıp keldiń! Dawam etemizbe?`,back_btn:`Qaytıw`,eye_start:`Kóz shınıǵıwı`,eye_choose:`Shınıǵıwdı tańla`,break_msgs:[`Kózleriń sharshadı! Derezeden uzaqqa qara.`,`Azıraq hawa almasayıq, kóshege shıǵıp kel.`,`Sabaq waqtı da boldı, tapsırmańdı orınlap kel, keyin taǵı oynaymız.`,`20 sekund uzaqtaǵı nárseǵe qara, keyin dawam etemiz.`,`Kózlerińdi alaqanıń menen jabıp, dem al.`],ex_ball_t:`Sharıqtı baqla`,ex_ball_d:`Basıńdı burma, tek kózińdi júgirt.`,ex_focus_t:`Jaqın hám uzaq`,ex_focus_d:`Dóńgelek úlkeyse jaqınǵa, kishireyse uzaqqa qara.`,ex_blink_t:`Kóbelek`,ex_blink_d:`Qanatlar jabılǵanda kózińdi qısıp ash.`,ex_far_t:`Uzaqqa qara`,ex_far_d:`Derezeden eń uzaqtaǵı nárseǵe qara.`,ex_near:`Jaqın`,ex_farw:`Uzaq`,ex_stop:`Toqtat`,ex_done:`Aferin!`,contact_title:`Baylanıs`,contact_lead:`Sorawıńız barma yamasa VESNA di mektebińizde sınap kórgińiz keledi me? Jazıń!`,contact_email:`Poshta jazıw`,contact_tg:`Telegram`,f_school:`Mektep atı`,f_name:`Atıńız`,f_phone:`Telefon yamasa Telegram`,f_msg:`Xabar`,f_send:`Jiberiw`,mail_subject:`VESNA haqqında`,err_boot:`Sayt tolıq júklenbedi. Betti jańalań.`,reload:`Jańalaw`},ru:{nav_sphere:`Сфера`,nav_games:`Игры`,nav_letters:`Буквы`,nav_alphabet:`Азбука`,nav_contact:`Контакты`,hint_spin:`ВРАЩАЙТЕ И ВЫБИРАЙТЕ`,play_arrow:`Играть →`,close:`Закрыть`,scroll:`ЛИСТАЙТЕ`,menu_intro:`Новый узбекский алфавит: Ç · Ğ · Ö · Ş · ʼ`,set_every:`Напоминание об отдыхе для глаз`,set_rest:`Длительность отдыха`,min:`мин`,sec:`с`,rest_now:`Отдохнём сейчас`,eye_now:`Зарядка для глаз`,theme_mode:`Дневной / Ночной режим`,theme_day:`День`,theme_night:`Ночь`,guide_btn:`Руководство по сайту`,guide_title:`VESNA — Руководство`,guide_sub:`Для малышей и поступающих в школу`,greet:[`Привет! Я Весна. Нажми на меня!`,`Давай играть вместе?`],again:`Снова привет! Продолжим?`,prompt_now:`Отдохнём сейчас`,prompt_later:`Через 5 минут`,rest_title:`Глазам нужен отдых!`,back_msg:`Ты вернулся! Продолжим?`,back_btn:`Вернуться`,eye_start:`Зарядка для глаз`,eye_choose:`Выбери упражнение`,break_msgs:[`Глазки устали! Посмотри вдаль, в окно.`,`Давай проветримся: выйди на улицу подышать.`,`Пора и за уроки — сделай домашку, а потом поиграем.`,`Посмотри 20 секунд на что-нибудь далёкое, и продолжим.`,`Закрой глаза ладошками и отдохни.`],ex_ball_t:`Следи за шариком`,ex_ball_d:`Не двигай головой — следи только глазами.`,ex_focus_t:`Ближе и дальше`,ex_focus_d:`Круг растёт — смотри вблизи, уменьшается — вдаль.`,ex_blink_t:`Бабочка`,ex_blink_d:`Когда крылья закрываются — моргни.`,ex_far_t:`Смотри вдаль`,ex_far_d:`Найди за окном самый далёкий предмет и смотри на него.`,ex_near:`Близко`,ex_farw:`Далеко`,ex_stop:`Остановить`,ex_done:`Молодец!`,contact_title:`Контакты`,contact_lead:`Есть вопрос или хотите попробовать VESNA в вашей школе? Напишите нам!`,contact_email:`Написать на почту`,contact_tg:`Telegram`,f_school:`Название школы`,f_name:`Ваше имя`,f_phone:`Телефон или Telegram`,f_msg:`Сообщение`,f_send:`Отправить`,mail_subject:`Про VESNA`,err_boot:`Сайт загрузился не полностью. Обновите страницу.`,reload:`Обновить`},en:{nav_sphere:`Sphere`,nav_games:`Games`,nav_letters:`Letters`,nav_alphabet:`Alphabet`,nav_contact:`Contact`,hint_spin:`SPIN AND PICK`,play_arrow:`Play →`,close:`Close`,scroll:`SCROLL`,menu_intro:`New Uzbek alphabet: Ç · Ğ · Ö · Ş · ʼ`,set_every:`Eye-rest reminder`,set_rest:`Rest length`,min:`min`,sec:`s`,rest_now:`Rest now`,eye_now:`Eye exercise`,theme_mode:`Day / Night mode`,theme_day:`Day`,theme_night:`Night`,guide_btn:`Site guide`,guide_title:`VESNA — User Guide`,guide_sub:`Interactive Alphabet & Math for Early Learners`,greet:[`Hi! I'm Vesna. Tap me!`,`Shall we play together?`],again:`Hi again! Shall we continue?`,prompt_now:`Rest now`,prompt_later:`In 5 minutes`,rest_title:`Time to rest your eyes!`,back_msg:`You're back! Shall we continue?`,back_btn:`Back to the site`,eye_start:`Eye exercise`,eye_choose:`Pick an exercise`,break_msgs:[`Your eyes are tired! Look far out of the window.`,`Let's get some fresh air. Step outside for a bit.`,`It's homework time too. Do it, then we'll play again.`,`Look at something far away for 20 seconds, then we continue.`,`Cover your eyes with your palms and rest.`],ex_ball_t:`Follow the ball`,ex_ball_d:`Don't move your head — follow it with your eyes only.`,ex_focus_t:`Near and far`,ex_focus_d:`Circle grows: look near. It shrinks: look far away.`,ex_blink_t:`Butterfly`,ex_blink_d:`Blink when the wings close.`,ex_far_t:`Look far away`,ex_far_d:`Find the farthest thing outside the window and look at it.`,ex_near:`Near`,ex_farw:`Far`,ex_stop:`Stop`,ex_done:`Well done!`,contact_title:`Contact`,contact_lead:`Have a question, or want to try VESNA at your school? Write to us!`,contact_email:`Send an email`,contact_tg:`Telegram`,f_school:`School name`,f_name:`Your name`,f_phone:`Phone or Telegram`,f_msg:`Message`,f_send:`Send`,mail_subject:`About VESNA`,err_boot:`The site did not load fully. Please refresh.`,reload:`Refresh`}},ng=[{code:`uz`,name:`O‘zbekcha`,short:`UZ`},{code:`kaa`,name:`Qaraqalpaqsha`,short:`QQ`},{code:`ru`,name:`Русский`,short:`RU`},{code:`en`,name:`English`,short:`EN`}],rg=(e,t=document)=>t.querySelector(e),ig={get(e,t){try{let n=localStorage.getItem(`alif.`+e);return n===null?t:n}catch{return t}},set(e,t){try{localStorage.setItem(`alif.`+e,String(t))}catch{}},sget(e,t){try{let n=sessionStorage.getItem(`alif.`+e);return n===null?t:n}catch{return t}},sset(e,t){try{sessionStorage.setItem(`alif.`+e,String(t))}catch{}}},ag=(e,t,n)=>Math.max(t,Math.min(n,e)),og=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,sg=window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,cg=document.createElement(`div`);cg.className=`alif-toast`,document.body.appendChild(cg);function lg(e){cg.innerHTML=``;let t=document.createElement(`span`);t.textContent=e;let n=document.createElement(`button`);n.textContent=`OK`,n.className=`bubble-btn`,n.onclick=()=>cg.classList.remove(`is-on`),cg.append(t,n),cg.classList.add(`is-on`)}var ug=``;window.addEventListener(`error`,e=>{ug=(e.message||`Error`)+(e.filename?` @ `+String(e.filename).split(`/`).pop()+`:`+e.lineno:``),lg(ug)}),window.addEventListener(`unhandledrejection`,e=>{ug=`Promise: `+(e.reason&&e.reason.message?e.reason.message:String(e.reason)),lg(ug)});var dg=document.createElement(`div`);dg.className=`alif-boot-msg`,document.body.appendChild(dg),setTimeout(()=>{if(window.__alifBoot)return;let e=!(HTMLScriptElement.supports&&HTMLScriptElement.supports(`importmap`));dg.innerHTML=``;let t=document.createElement(`div`),n=document.createElement(`div`);n.textContent=mg(`err_boot`);let r=document.createElement(`button`);r.className=`big-btn`,r.style.marginTop=`16px`,r.textContent=mg(`reload`),r.onclick=()=>location.reload();let i=document.createElement(`small`);i.textContent=(e?`importmap: no. `:``)+(ug||`timeout`)+` | `+navigator.userAgent,t.append(n,r,i),dg.appendChild(t),dg.classList.add(`is-on`)},2e4),window.addEventListener(`alif:ready`,()=>dg.classList.remove(`is-on`));function fg(){let e=ig.get(`lang`,``);if(tg[e])return e;let t=(navigator.language||``).toLowerCase();return t.startsWith(`ru`)?`ru`:t.startsWith(`en`)?`en`:$h.defaultLang}var pg=fg();function mg(e){return(tg[pg]&&tg[pg][e])??tg.uz[e]??e}function hg(){document.documentElement.lang=pg===`kaa`?`kk-Latn`:pg,document.querySelectorAll(`[data-i18n]`).forEach(e=>{e.textContent=mg(e.dataset.i18n)});let e=ng.find(e=>e.code===pg),t=rg(`#lang-code`);t&&(t.textContent=e?e.short:`UZ`),document.querySelectorAll(`.lang-opt`).forEach(e=>e.classList.toggle(`is-active`,e.dataset.lang===pg)),Tg(),E_();let n=rg(`#nav-guide`);n&&(n.title=mg(`guide_btn`)),window.dispatchEvent(new CustomEvent(`alif:lang`,{detail:{lang:pg}}))}function gg(e){tg[e]&&(pg=e,ig.set(`lang`,e),hg(),bg())}var _g=rg(`#lang-pop`),vg=rg(`#nav-lang`);ng.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`lang-opt`,t.dataset.lang=e.code;let n=document.createElement(`span`);n.textContent=e.name;let r=document.createElement(`small`);r.textContent=e.short,t.append(n,r),t.addEventListener(`click`,()=>gg(e.code)),_g.appendChild(t)});function yg(){_g.classList.add(`is-open`),vg.setAttribute(`aria-expanded`,`true`),_g.setAttribute(`aria-hidden`,`false`)}function bg(){_g.classList.remove(`is-open`),vg.setAttribute(`aria-expanded`,`false`),_g.setAttribute(`aria-hidden`,`true`)}vg.addEventListener(`click`,e=>{e.stopPropagation(),_g.classList.contains(`is-open`)?bg():yg()}),document.addEventListener(`pointerdown`,e=>{!_g.contains(e.target)&&!vg.contains(e.target)&&bg()});var xg=Number(ig.get(`interval`,$h.defaultInterval)),Sg=Number(ig.get(`rest`,$h.defaultRest));$h.intervalOptions.includes(xg)||(xg=$h.defaultInterval),$h.restOptions.includes(Sg)||(Sg=$h.defaultRest);var Cg=()=>(eg?.5:xg)*60,wg=()=>eg?15:Sg;function Tg(){let e=rg(`#chips-interval`),t=rg(`#chips-rest`);e&&t&&(e.innerHTML=``,t.innerHTML=``,$h.intervalOptions.forEach(t=>{let n=document.createElement(`button`);n.type=`button`,n.className=`chip`+(t===xg?` is-active`:``),n.textContent=t+` `+mg(`min`),n.onclick=()=>{xg=t,ig.set(`interval`,t),Zg=0,ig.sset(`active`,0),Tg()},e.appendChild(n)}),$h.restOptions.forEach(e=>{let n=document.createElement(`button`);n.type=`button`,n.className=`chip`+(e===Sg?` is-active`:``),n.textContent=e+` `+mg(`sec`),n.onclick=()=>{Sg=e,ig.set(`rest`,e),Tg()},t.appendChild(n)}))}var Eg=window.requestAnimationFrame.bind(window),Dg=window.cancelAnimationFrame.bind(window),Og=performance.now.bind(performance),kg=0,Ag=0,jg=!1,Mg=new Map,Ng=-1;window.requestAnimationFrame=e=>jg?(Mg.set(Ng,e),Ng--):Eg(t=>e(t-kg)),window.cancelAnimationFrame=e=>{Mg.has(e)?Mg.delete(e):Dg(e)},performance.now=()=>Og()-kg;function Pg(){jg||(jg=!0,Ag=Og())}function Fg(){if(!jg)return;kg+=Og()-Ag,jg=!1;let e=Array.from(Mg.values());Mg.clear(),e.forEach(e=>Eg(t=>e(t-kg)))}var Ig=document.createElement(`div`);Ig.className=`mascot`,Ig.setAttribute(`role`,`button`),Ig.setAttribute(`aria-label`,`Alif robot`),Ig.tabIndex=0,Ig.innerHTML=`
<svg viewBox="0 0 120 130" aria-hidden="true">
  <defs>
    <!-- Studio Chrome Metallic Gradient (matches Alifbo 3D Bot) -->
    <radialGradient id="mChromeHead" cx="38%" cy="24%" r="76%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="28%" stop-color="#e4e9f5"/>
      <stop offset="56%" stop-color="#7c859e"/>
      <stop offset="82%" stop-color="#222738"/>
      <stop offset="100%" stop-color="#9ca6c2"/>
    </radialGradient>
    <linearGradient id="mChromeMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#b8c1d6"/>
      <stop offset="75%" stop-color="#2a3042"/>
      <stop offset="100%" stop-color="#e3e8f4"/>
    </linearGradient>
    <radialGradient id="mChromeBall" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="45%" stop-color="#c4cde0"/>
      <stop offset="100%" stop-color="#2b3145"/>
    </radialGradient>
    <radialGradient id="mVisorBlack" cx="42%" cy="28%" r="78%">
      <stop offset="0%" stop-color="#191c26"/>
      <stop offset="48%" stop-color="#06070a"/>
      <stop offset="100%" stop-color="#020203"/>
    </radialGradient>
    <linearGradient id="mVisorGloss" x1="15%" y1="0%" x2="85%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.32"/>
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="mHaloMetal" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#606982"/>
      <stop offset="30%" stop-color="#ffffff"/>
      <stop offset="65%" stop-color="#9ea8c2"/>
      <stop offset="100%" stop-color="#485068"/>
    </linearGradient>
  </defs>

  <!-- Left & Right Chrome Torus Ears + Dark Obsidian Inner Caps -->
  <g>
    <ellipse cx="20" cy="60" rx="8.5" ry="12.5" fill="url(#mChromeMetal)" stroke="#1a1f2d" stroke-width="1"/>
    <ellipse cx="19" cy="60" rx="4.2" ry="7.2" fill="#06070b"/>
    <ellipse cx="100" cy="60" rx="8.5" ry="12.5" fill="url(#mChromeMetal)" stroke="#1a1f2d" stroke-width="1"/>
    <ellipse cx="101" cy="60" rx="4.2" ry="7.2" fill="#06070b"/>
  </g>

  <!-- Chrome Antenna Stem & Chrome Silver Sphere -->
  <rect x="57.6" y="13" width="4.8" height="16" rx="2" fill="url(#mChromeMetal)"/>
  <circle cx="60" cy="10.5" r="5.5" fill="url(#mChromeBall)"/>

  <!-- Wide-Oval Studio Chrome Head (1.1 x 1.0) -->
  <ellipse cx="60" cy="60" rx="39" ry="35.5" fill="url(#mChromeHead)"/>
  <ellipse cx="60" cy="60" rx="38.5" ry="35" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>

  <!-- Glossy Curved Obsidian Visor -->
  <path d="M 30 58 C 30 43, 44 37, 60 37 C 76 37, 90 43, 90 58 C 90 73, 76 80, 60 80 C 44 80, 30 73, 30 58 Z"
        fill="url(#mVisorBlack)" stroke="rgba(255,255,255,0.16)" stroke-width="0.9"/>
  <!-- Crisp Studio Clearcoat Reflection on Visor -->
  <path d="M 35 50 C 40 41, 56 39, 71 42 C 62 45, 44 49, 36 56 Z" fill="url(#mVisorGloss)"/>

  <!-- #f2f2ee Off-White Vertical Capsule Eyes (1:1 with Alifbo 3D Robot) -->
  <g class="m-eyes">
    <rect class="m-eye" x="45.5" y="50" width="7.2" height="17" rx="3.6" fill="#f2f2ee"/>
    <rect class="m-eye" x="67.3" y="50" width="7.2" height="17" rx="3.6" fill="#f2f2ee"/>
  </g>

  <!-- Floating Tilted Chrome Halo Ring Underneath -->
  <ellipse cx="60" cy="112" rx="30" ry="6.2" fill="none" stroke="url(#mHaloMetal)" stroke-width="4.2"/>
</svg>`,document.body.appendChild(Ig);var Lg=document.createElement(`style`);Lg.textContent=`.mascot .m-eye{transform-box:fill-box;transform-origin:center}`,document.head.appendChild(Lg);var Rg=document.createElement(`div`);Rg.className=`mascot-bubble`,Rg.setAttribute(`role`,`status`),Rg.setAttribute(`aria-live`,`polite`),document.body.appendChild(Rg);var zg=0;function Bg(e,{actions:t=null,ms:n=6e3}={}){clearTimeout(zg),Rg.innerHTML=``;let r=document.createElement(`div`);if(r.textContent=e,Rg.appendChild(r),t){let e=document.createElement(`div`);e.className=`bubble-actions`,t.forEach(t=>{let n=document.createElement(`button`);n.type=`button`,n.className=`bubble-btn`+(t.ghost?` ghost`:``),n.textContent=t.label,n.onclick=t.onClick,e.appendChild(n)}),Rg.appendChild(e)}Rg.classList.add(`is-open`),n&&(zg=setTimeout(Vg,n))}function Vg(){clearTimeout(zg),Rg.classList.remove(`is-open`)}function Hg(){Ig.classList.remove(`is-hop`),Ig.offsetWidth,Ig.classList.add(`is-hop`)}var Ug=0,Wg=0,Gg=0,Kg=0,qg=99,Jg=99;function Yg(e,t){let n=Ig.getBoundingClientRect(),r=e-(n.left+n.width/2),i=t-(n.top+n.height/2),a=Math.hypot(r,i)||1,o=Math.min(1,a/220);Gg=r/a*4.5*o,Kg=i/a*3.5*o}window.addEventListener(`pointermove`,e=>Yg(e.clientX,e.clientY),{passive:!0}),window.addEventListener(`touchstart`,e=>{e.touches[0]&&Yg(e.touches[0].clientX,e.touches[0].clientY)},{passive:!0}),(function e(){!jg&&!document.hidden&&(Ug+=(Gg-Ug)*.18,Wg+=(Kg-Wg)*.18,(Math.abs(Ug-qg)>.02||Math.abs(Wg-Jg)>.02)&&(qg=Ug,Jg=Wg,Ig.style.setProperty(`--ex`,Ug.toFixed(2)),Ig.style.setProperty(`--ey`,Wg.toFixed(2)))),Eg(e)})(),(function e(){setTimeout(()=>{Ig.classList.contains(`is-sleep`)||(Ig.classList.add(`is-blink`),setTimeout(()=>Ig.classList.remove(`is-blink`),140)),e()},2600+Math.random()*3200)})();var Xg=`awake`,Zg=Number(ig.sget(`active`,0))||0,Qg=Date.now(),$g=-1;[`pointerdown`,`pointermove`,`keydown`,`touchstart`,`wheel`].forEach(e=>window.addEventListener(e,()=>{Qg=Date.now()},{passive:!0}));var e_=0;setInterval(()=>{Xg===`awake`&&document.visibilityState===`visible`&&(Date.now()-Qg>$h.idleCutoffMs||(Zg+=1,Zg%5==0&&ig.sset(`active`,Zg),Zg>=Cg()&&n_()))},1e3);function t_(){let e=mg(`break_msgs`),t;do t=Math.floor(Math.random()*e.length);while(e.length>1&&t===$g);return $g=t,e[t]}function n_(){if(Xg!==`awake`)return;Xg=`prompt`,Hg();let e=()=>{clearTimeout(e_),Vg(),p_(o_())};Bg(t_(),{ms:0,actions:[{label:mg(`prompt_now`),onClick:e},{label:mg(`prompt_later`),onClick:()=>{clearTimeout(e_),Vg(),Xg=`awake`,Zg=Math.max(0,Cg()-$h.snoozeMin*60),eg&&(Zg=0),ig.sset(`active`,Zg)},ghost:!0}]}),e_=setTimeout(e,$h.promptAutoMs)}var r_=document.createElement(`div`);r_.className=`rest-veil`,r_.innerHTML=`
  <div class="veil-orb o1"></div><div class="veil-orb o2"></div><div class="veil-orb o3"></div>
  <div class="eye-stage" id="eye-stage"></div>
  <div class="rest-panel" id="rest-panel">
    <h2 class="rest-title" id="rest-title"></h2>
    <p class="rest-sub" id="rest-sub"></p>
    <div class="eye-picker" id="eye-picker"></div>
    <div class="rest-timer" id="rest-timer"></div>
    <div class="rest-bar"><i id="rest-bar"></i></div>
    <div class="rest-actions">
      <button type="button" class="big-btn alt" id="rest-eye"></button>
      <button type="button" class="big-btn" id="rest-back"></button>
    </div>
  </div>`,document.body.appendChild(r_);var i_=document.createElement(`div`);i_.className=`wave-ring`,document.body.appendChild(i_);var a_={title:rg(`#rest-title`,r_),sub:rg(`#rest-sub`,r_),picker:rg(`#eye-picker`,r_),timer:rg(`#rest-timer`,r_),bar:rg(`#rest-bar`,r_),eyeBtn:rg(`#rest-eye`,r_),backBtn:rg(`#rest-back`,r_),stage:rg(`#eye-stage`,r_)};function o_(){let e=Ig.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}function s_(e,t){let n=window.innerWidth,r=window.innerHeight;return Math.hypot(Math.max(e,n-e),Math.max(t,r-t))}function c_(e,t,n){return new Promise(r=>{let i=s_(t.x,t.y)+150;r_.style.setProperty(`--ox`,t.x+`px`),r_.style.setProperty(`--oy`,t.y+`px`),r_.style.setProperty(`--soft`,`150px`),r_.classList.remove(`mode-in`,`mode-out`),r_.classList.add(`is-on`,e===`in`?`mode-in`:`mode-out`),i_.style.left=t.x+`px`,i_.style.top=t.y+`px`,i_.classList.add(`is-on`),sg&&(n=250);let a=Og();(function e(){let t=ag((Og()-a)/n,0,1),o=og(t)*i;r_.style.setProperty(`--r`,o+`px`);let s=Math.max(0,(o-75)/49);i_.style.transform=`scale(${s})`,i_.style.opacity=String(ag(1-t*.9,0,1)),t<1?Eg(e):(i_.classList.remove(`is-on`),r())})()})}var l_=0,u_=0,d_=null;function f_(e,t){a_.title.textContent=mg(e),a_.sub.textContent=t,a_.eyeBtn.textContent=`👀 `+mg(`eye_start`),a_.backBtn.textContent=mg(`back_btn`)}async function p_(e,t={}){if(Xg===`dissolving`||Xg===`resting`||Xg===`returning`)return;clearTimeout(e_),Vg(),bg(),Xg=`dissolving`,r_.classList.remove(`is-rest`,`is-picking`,`is-exercise`),f_(`rest_title`,t_()),a_.timer.textContent=``,a_.bar.style.width=`0%`,setTimeout(()=>{Ig.classList.add(`is-center`,`is-sleep`)},450),await c_(`in`,e,1500),r_.classList.remove(`mode-in`,`mode-out`),Pg(),Xg=`resting`,Ig.classList.remove(`is-sleep`),r_.classList.add(`is-rest`),t.exercise&&r_.classList.add(`is-picking`),u_=wg();let n=u_;clearInterval(l_);let r=()=>{let e=Math.max(0,u_);a_.timer.textContent=Math.floor(e/60)+`:`+String(e%60).padStart(2,`0`),a_.bar.style.width=100-u_/n*100+`%`};r(),l_=setInterval(()=>{d_||(--u_,r(),u_<=0&&(clearInterval(l_),m_()))},1e3)}async function m_(){if(Xg!==`resting`)return;Xg=`returning`,clearInterval(l_),d_&&=(d_.cancel(),null),r_.classList.remove(`is-picking`,`is-exercise`,`is-rest`),Ig.classList.remove(`is-hidden`),Fg();let e=c_(`out`,{x:window.innerWidth/2,y:window.innerHeight*.33},1700);setTimeout(()=>{Ig.classList.remove(`is-center`)},500),await e,r_.classList.remove(`is-on`,`mode-in`,`mode-out`),Xg=`awake`,Zg=0,ig.sset(`active`,0),Hg(),Bg(mg(`back_msg`),{ms:5e3})}a_.backBtn.addEventListener(`click`,()=>m_()),a_.eyeBtn.addEventListener(`click`,()=>{r_.classList.toggle(`is-picking`)});var h_={ball:{emoji:`🎯`,dur:40},focus:{emoji:`🔭`,dur:30},blink:{emoji:`🦋`,dur:24},far:{emoji:`🌳`,dur:20}};function g_(){a_.picker.innerHTML=``,Object.keys(h_).forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`eye-card`;let n=document.createElement(`span`);n.textContent=h_[e].emoji;let r=document.createElement(`div`);r.textContent=mg(`ex_`+e+`_t`),t.append(n,r),t.addEventListener(`click`,()=>__(e)),a_.picker.appendChild(t)})}window.addEventListener(`alif:lang`,g_);function __(e){if(Xg!==`resting`||d_)return;r_.classList.remove(`is-picking`),r_.classList.add(`is-exercise`),Ig.classList.add(`is-hidden`);let t=h_[e],n=a_.stage;n.innerHTML=``;let r=document.createElement(`div`);r.className=`eye-hud`;let i=document.createElement(`h3`);i.textContent=mg(`ex_`+e+`_t`);let a=document.createElement(`p`);a.textContent=mg(`ex_`+e+`_d`),r.append(i,a);let o=document.createElement(`div`);o.className=`eye-prog`;let s=document.createElement(`div`);s.className=`eye-foot`;let c=document.createElement(`button`);c.type=`button`,c.className=`big-btn alt`,c.textContent=mg(`ex_stop`),s.appendChild(c),n.append(r,o,s);let l=()=>n.clientWidth,u=()=>n.clientHeight,d=!1,f=null,p=null,m=null,h=null;if(e===`ball`)p=document.createElement(`div`),p.className=`eye-ball`,f=document.createElement(`div`),f.className=`eye-label`,n.append(p,f);else if(e===`focus`)m=document.createElement(`div`),m.className=`eye-focus`,f=document.createElement(`div`),f.className=`eye-label`,n.append(m,f);else if(e===`blink`){let e=document.createElement(`div`);e.className=`butterfly`,e.innerHTML=`<i></i><i></i>`,f=document.createElement(`div`),f.className=`eye-label`,n.append(e,f)}else h=document.createElement(`div`),h.className=`eye-big`,n.appendChild(h);let g=Og(),_=!1,v=e=>{_||(_=!0,d=!0,d_=null,r_.classList.remove(`is-exercise`),Ig.classList.remove(`is-hidden`),n.innerHTML=``,e&&(a_.title.textContent=mg(`ex_done`),a_.sub.textContent=mg(`back_msg`),Hg(),u_=Math.min(u_,3)))};d_={cancel:()=>v(!1)},c.addEventListener(`click`,()=>v(!1));let y=()=>l()/2,b=()=>u()/2+20;(function n(){if(d)return;let r=(Og()-g)/1e3;if(o.style.width=ag(r/t.dur*100,0,100)+`%`,r>=t.dur)v(!0);else{if(e===`ball`){let e=Math.min(l()*.38,340),t=Math.min(u()*.28,220),n=Math.PI*2/5,i=Math.floor(r/10)%4,a=Math.sin(n*r),o=y(),s=b(),c=``;i===0?(o+=e*a,c=`←  →`):i===1?(s+=t*a,c=`↑  ↓`):i===2?(o+=e*.8*a,s+=t*.8*a,c=`↗  ↙`):(o+=e*a,s+=t*Math.sin(2*n*r)/2,c=`∞`),p.style.transform=`translate(${o}px, ${s}px)`,f.textContent=c,f.style.top=`118px`}else if(e===`focus`){let e=.5+.5*Math.sin(Math.PI*2*r/6-Math.PI/2);m.style.transform=`scale(${.35+1.5*e})`,f.textContent=mg(e>.5?`ex_near`:`ex_farw`)}else e===`blink`?f.textContent=Math.min(12,Math.floor(r/2)+1)+` / 12`:h.textContent=String(Math.max(0,Math.ceil(t.dur-r)));Eg(n)}})()}var v_={uz:{lead:`VESNA — boşlanğiç va maktabga kiruvçilar uçun 29 ta harf, raqamlar, mantiq va 40 ta öyin.`,cards:[{title:`1. Sfera`,tag:`20 ta karta`,items:[`Şarni aylantirib mavzuni tanlang.`,`Kartani ikki marta bosib «Öynaş →» tugmasini bosing.`]},{title:`2. Maşqlar`,tag:`40 öyin · PvP`,items:[`Har bir öyinda har xil savollar beriladi, bitta öyin içida ham, qaytadan ham takrorlanmaydi.`,`Yuqoridagi «⚔️ PvP» va «↻ Qayta» tugmalari bilan 2 kişi bellashing.`]},{title:`3. Harflar (29 ta)`,tag:`A – ʼ + Öyinlar`,items:[`3. Ç, 8. Ğ, 17. Ö, 22. Ş va 29. ʼ (tutuq belgisi) tartibida jadval.`,`Pastdagi til öyinlari va «⚔️ Alifbo PvP Duel»ni birga öynang.`]},{title:`4. Alifbo (Robot) va Kun/Tun`,tag:`Kun / Tun`,items:[`Robotça bilan suhbatlaşing, köz dam oliş taymeri va maşqini oçing.`,`Tepadagi sariq/qora kalit bilan kun va tun rejimini almaştiring.`]}],footLeft:`Yopiş: ESC yoki «Yopiş».`,footRight:`VESNA`},kaa:{lead:`VESNA — baslawısh hám mektepke kirer balalar ushın 29 hárip hám 40 interaktiv oyın.`,cards:[{title:`1. Sfera`,tag:`20 karta`,items:[`Shardı aylandırıp tema saylań.`,`Kartanı eki márte basıp «Oynaw →» túymesin basıń.`]},{title:`2. Shınıǵıwlar`,tag:`40 oyın · PvP`,items:[`Hár bir oyında sorawlar qaytalawlanbay jańadan beriledi.`,`Joqarıdaǵı «⚔️ PvP» hám «↻ Qayta» arqalı 2 oyınshı jarısıń.`]},{title:`3. Háripler (29)`,tag:`A – ʼ + Oyınlar`,items:[`3. Ç, 8. Ğ, 17. Ö, 22. Ş hám 29. ʼ tártibinde álipbe.`,`Til oyınları hám «⚔️ PvP Duel» usı bólimde de bar.`]},{title:`4. Álipbe (Robot) hám Kún/Tún`,tag:`Kún / Tún`,items:[`Robotsha arqalı kóz dem alıwı hám shınıǵıwlardı qosıń.`,`Joqarıdaǵı túyme menen kún hám tún rejimine ótiń.`]}],footLeft:`Jabıw: ESC yamasa «Jabıw».`,footRight:`VESNA`},ru:{lead:`VESNA — 40 интерактивных игр для дошкольников и начинающих: 29 букв, счёт и логика.`,cards:[{title:`1. Сфера`,tag:`20 карточек`,items:[`Поверните 3D-шар и выберите тему.`,`Нажмите на карточку дважды и выберите «Играть →».`]},{title:`2. Игры`,tag:`40 игр · PvP`,items:[`Вопросы внутри каждой игры и при перезапуске не повторяются.`,`Кнопки «⚔️ PvP» и «↻ Qayta» запускают парный режим и повтор.`]},{title:`3. Буквы (29)`,tag:`A – ʼ + Игры`,items:[`Порядок с 3. Ç, 8. Ğ, 17. Ö, 22. Ş и 29. ʼ (tutuq belgisi).`,`Языковые игры и «⚔️ PvP Дуэль» встроены прямо сюда.`]},{title:`4. Азбука (Робот) и Тема`,tag:`День / Ночь`,items:[`Нажмите на робота для паузы и гимнастики для глаз.`,`Переключатель сверху меняет дневную и ночную тему.`]}],footLeft:`Закрыть: ESC или «Закрыть».`,footRight:`VESNA`},en:{lead:`VESNA features 40 non-repeating interactive games for early learners and school entrants.`,cards:[{title:`1. Sphere`,tag:`20 cards`,items:[`Rotate the globe to pick a topic.`,`Tap a card twice and press Play →.`]},{title:`2. Games`,tag:`40 games · PvP`,items:[`Every game deals fresh non-repeating prompts and equations.`,`Use «⚔️ PvP» and «↻ Qayta» inside any game to duel or restart.`]},{title:`3. Letters (29)`,tag:`A – ʼ + Games`,items:[`Full 1–29 order including Ç, Ğ, Ö, Ş, and 29. ʼ (tutuq belgisi).`,`Includes all language mini-games and PvP Alphabet Duel.`]},{title:`4. Alphabet (Robot) & Theme`,tag:`Day / Night`,items:[`Interact with the 3D robot and open eye-care breaks anytime.`,`Use the top switch to toggle between Night and Day modes.`]}],footLeft:`Press ESC or Close to collapse.`,footRight:`VESNA`}},y_=rg(`#about-guide-dock`),b_=rg(`#about-guide-panel`),x_=rg(`#about-guide-toggle`),S_=rg(`#about-guide-close`),C_=rg(`#guide-body`),w_=rg(`#nav-guide`),T_=rg(`#btn-guide-open`);function E_(){if(!C_)return;let e=v_[pg]||v_.uz;C_.innerHTML=``;let t=document.createElement(`div`);t.className=`guide-hero`;let n=document.createElement(`p`);n.className=`guide-hero-lead`,n.textContent=e.lead,t.appendChild(n);let r=document.createElement(`div`);r.className=`guide-grid`,e.cards.forEach(e=>{let t=document.createElement(`section`);t.className=`guide-card`;let n=document.createElement(`div`);n.className=`guide-card-head`;let i=document.createElement(`h3`);i.className=`guide-card-title`,i.textContent=e.title;let a=document.createElement(`span`);a.className=`guide-card-tag`,a.textContent=e.tag,n.append(i,a);let o=document.createElement(`ul`);o.className=`guide-list`,e.items.forEach(e=>{let t=document.createElement(`li`);t.textContent=e,o.appendChild(t)}),t.append(n,o),r.appendChild(t)});let i=document.createElement(`div`);i.className=`guide-foot`;let a=document.createElement(`span`);a.textContent=e.footLeft;let o=document.createElement(`strong`);o.textContent=e.footRight,i.append(a,o),C_.append(t,r,i)}function D_(){return!!(b_&&b_.classList.contains(`is-open`))}function O_(e=!1){e&&window.location.hash!==`#about`&&(window.location.hash=`#about`),b_&&(bg(),E_(),b_.classList.add(`is-open`),b_.setAttribute(`aria-hidden`,`false`),x_&&x_.setAttribute(`aria-expanded`,`true`),y_&&y_.classList.add(`is-open`))}function k_(){b_&&D_()&&(b_.classList.remove(`is-open`),b_.setAttribute(`aria-hidden`,`true`),x_&&x_.setAttribute(`aria-expanded`,`false`),y_&&y_.classList.remove(`is-open`))}x_&&x_.addEventListener(`click`,e=>{e.stopPropagation(),D_()?k_():O_(!1)}),S_&&S_.addEventListener(`click`,e=>{e.stopPropagation(),k_()}),w_&&w_.addEventListener(`click`,()=>{window.location.hash===`#about`&&D_()?k_():O_(!0)}),T_&&T_.addEventListener(`click`,()=>{let e=rg(`#dock-menu-btn`);e&&e.classList.contains(`is-open`)&&e.click(),O_(!0)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&D_()&&k_()}),Ig.addEventListener(`click`,()=>{Xg===`resting`?Hg():(Xg===`awake`||Xg===`prompt`)&&(Hg(),p_(o_()))}),Ig.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),Ig.click())}),window.addEventListener(`alif:robot-click`,e=>{(Xg===`awake`||Xg===`prompt`)&&p_({x:e.detail.x,y:e.detail.y})}),rg(`#btn-rest-now`).addEventListener(`click`,()=>{rg(`#dock-menu-btn`).click(),p_(o_())}),rg(`#btn-eye-now`).addEventListener(`click`,()=>{rg(`#dock-menu-btn`).click(),p_(o_(),{exercise:!0})});var A_=rg(`#nav-theme`),j_=rg(`#btn-theme-toggle`),M_=rg(`#menu-theme-switch`);function N_(){fm()}pm(e=>{let t=e===`light`;A_&&(A_.classList.toggle(`is-day`,t),A_.setAttribute(`aria-checked`,String(t)),A_.title=mg(`theme_mode`)),j_&&j_.setAttribute(`aria-checked`,String(t)),M_&&M_.classList.toggle(`is-day`,t)}),A_&&A_.addEventListener(`click`,N_),j_&&j_.addEventListener(`click`,N_),setInterval(()=>{Xg===`awake`&&jg&&Fg()},1500),g_(),hg();var P_=ig.get(`visited`,``);ig.set(`visited`,`1`),setTimeout(()=>{if(Xg===`awake`){if(Hg(),P_)Bg(mg(`again`),{ms:5e3});else{let e=mg(`greet`);Bg(e[0]+` `+e[1],{ms:7e3})}}},4500);