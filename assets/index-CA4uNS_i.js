var Ak=Object.defineProperty;var Ik=(xg,bg,MC)=>bg in xg?Ak(xg,bg,{enumerable:!0,configurable:!0,writable:!0,value:MC}):xg[bg]=MC;var DA=(xg,bg,MC)=>Ik(xg,typeof bg!="symbol"?bg+"":bg,MC);(async()=>{(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))I(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const Q of C.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&I(Q)}).observe(document,{childList:!0,subtree:!0});function A(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function I(g){if(g.ep)return;g.ep=!0;const C=A(g);fetch(g.href,C)}})();const xg="171",bg=0,MC=1,oD=2,Fe=1,eD=2,Og=3,vg=0,Cg=1,Sg=2,tC=0,jC=1,fE=2,Re=3,pe=4,tD=5,NC=100,aD=101,sD=102,DD=103,hD=104,rD=200,nD=201,SD=202,wD=203,TE=204,xE=205,cD=206,lD=207,GD=208,kD=209,yD=210,UD=211,MD=212,ND=213,KD=214,bE=0,OE=1,vE=2,XC=3,_E=4,ZE=5,WE=6,PE=7,VE=0,JD=1,FD=2,aC=0,RD=1,pD=2,dD=3,qD=4,YD=5,LD=6,uD=7,de="attached",mD="detached",qe=300,zC=301,$C=302,FQ=303,jE=304,RQ=306,KC=1e3,pg=1001,pQ=1002,xI=1003,Ye=1004,fB=1005,mI=1006,dQ=1007,dg=1008,wg=1009,Le=1010,ue=1011,TB=1012,XE=1013,JC=1014,Bg=1015,_g=1016,zE=1017,$E=1018,AB=1020,me=35902,He=1021,fe=1022,tg=1023,Te=1024,xe=1025,IB=1026,gB=1027,Ai=1028,Ii=1029,be=1030,gi=1031,Ci=1033,qQ=33776,YQ=33777,LQ=33778,uQ=33779,Bi=35840,Qi=35841,Ei=35842,ii=35843,oi=36196,ei=37492,ti=37496,ai=37808,si=37809,Di=37810,hi=37811,ri=37812,ni=37813,Si=37814,wi=37815,ci=37816,li=37817,Gi=37818,ki=37819,yi=37820,Ui=37821,mQ=36492,Mi=36494,Ni=36495,Oe=36283,Ki=36284,Ji=36285,Fi=36286,HD=2200,fD=2201,TD=2202,xB=2300,bB=2301,Ri=2302,CB=2400,BB=2401,HQ=2402,pi=2500,ve=2501,xD=0,_e=1,di=2,bD=3200,OD=3201,qi=0,vD=1,sC="",KI="srgb",bI="srgb-linear",fQ="linear",oI="srgb",QB=7680,Ze=519,_D=512,ZD=513,WD=514,We=515,PD=516,VD=517,jD=518,XD=519,Yi=35044,Pe="300 es",Zg=2e3,TQ=2001;class FC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const g=I.slice(0);for(let C=0,Q=g.length;C<Q;C++)g[C].call(this,A);A.target=null}}}const ZI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ve=1234567;const OB=Math.PI/180,EB=180/Math.PI;function cg(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(ZI[B&255]+ZI[B>>8&255]+ZI[B>>16&255]+ZI[B>>24&255]+"-"+ZI[A&255]+ZI[A>>8&255]+"-"+ZI[A>>16&15|64]+ZI[A>>24&255]+"-"+ZI[I&63|128]+ZI[I>>8&255]+"-"+ZI[I>>16&255]+ZI[I>>24&255]+ZI[g&255]+ZI[g>>8&255]+ZI[g>>16&255]+ZI[g>>24&255]).toLowerCase()}function OA(B,A,I){return Math.max(A,Math.min(I,B))}function Li(B,A){return(B%A+A)%A}function zD(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function $D(B,A,I){return B!==A?(I-B)/(A-B):0}function vB(B,A,I){return(1-I)*B+I*A}function Ah(B,A,I,g){return vB(B,A,1-Math.exp(-I*g))}function Ih(B,A=1){return A-Math.abs(Li(B,A*2)-A)}function gh(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function Ch(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function Bh(B,A){return B+Math.floor(Math.random()*(A-B+1))}function Qh(B,A){return B+Math.random()*(A-B)}function Eh(B){return B*(.5-Math.random())}function ih(B){B!==void 0&&(Ve=B);let A=Ve+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function oh(B){return B*OB}function eh(B){return B*EB}function th(B){return(B&B-1)===0&&B!==0}function ah(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function sh(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function Dh(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),e=Q((A+g)/2),t=E((A+g)/2),a=Q((A-g)/2),s=E((A-g)/2),r=Q((g-A)/2),S=E((g-A)/2);switch(C){case"XYX":B.set(i*t,o*a,o*s,i*e);break;case"YZY":B.set(o*s,i*t,o*a,i*e);break;case"ZXZ":B.set(o*a,o*s,i*t,i*e);break;case"XZX":B.set(i*t,o*S,o*r,i*e);break;case"YXY":B.set(o*r,i*t,o*S,i*e);break;case"ZYZ":B.set(o*S,o*r,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function lg(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function EI(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}const hh={DEG2RAD:OB,RAD2DEG:EB,generateUUID:cg,clamp:OA,euclideanModulo:Li,mapLinear:zD,inverseLerp:$D,lerp:vB,damp:Ah,pingpong:Ih,smoothstep:gh,smootherstep:Ch,randInt:Bh,randFloat:Qh,randFloatSpread:Eh,seededRandom:ih,degToRad:oh,radToDeg:eh,isPowerOfTwo:th,ceilPowerOfTwo:ah,floorPowerOfTwo:sh,setQuaternionFromProperEuler:Dh,normalize:EI,denormalize:lg};class LA{constructor(A=0,I=0){LA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=OA(this.x,A.x,I.x),this.y=OA(this.y,A.y,I.y),this}clampScalar(A,I){return this.x=OA(this.x,A,I),this.y=OA(this.y,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(OA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(OA(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fA{constructor(A,I,g,C,Q,E,i,o,e){fA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e)}set(A,I,g,C,Q,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=Q,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],r=g[5],S=g[8],w=C[0],n=C[3],h=C[6],U=C[1],M=C[4],l=C[7],R=C[2],J=C[5],K=C[8];return Q[0]=E*w+i*U+o*R,Q[3]=E*n+i*M+o*J,Q[6]=E*h+i*l+o*K,Q[1]=e*w+t*U+a*R,Q[4]=e*n+t*M+a*J,Q[7]=e*h+t*l+a*K,Q[2]=s*w+r*U+S*R,Q[5]=s*n+r*M+S*J,Q[8]=s*h+r*l+S*K,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*Q*t+g*i*o+C*Q*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*Q,r=e*Q-E*o,S=I*a+g*s+C*r;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return A[0]=a*w,A[1]=(C*e-t*g)*w,A[2]=(i*g-C*E)*w,A[3]=s*w,A[4]=(t*I-C*o)*w,A[5]=(C*Q-i*I)*w,A[6]=r*w,A[7]=(g*o-e*I)*w,A[8]=(E*I-g*Q)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),e=Math.sin(Q);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(ui.makeScale(A,I)),this}rotate(A){return this.premultiply(ui.makeRotation(-A)),this}translate(A,I){return this.premultiply(ui.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const ui=new fA;function je(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function _B(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function rh(){const B=_B("canvas");return B.style.display="block",B}const Xe={};function iB(B){B in Xe||(Xe[B]=!0,console.warn(B))}function nh(B,A,I){return new Promise(function(g,C){function Q(){switch(B.clientWaitSync(A,B.SYNC_FLUSH_COMMANDS_BIT,0)){case B.WAIT_FAILED:C();break;case B.TIMEOUT_EXPIRED:setTimeout(Q,I);break;default:g()}}setTimeout(Q,I)})}function Sh(B){const A=B.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function wh(B){const A=B.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const ze=new fA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$e=new fA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ch(){const B={enabled:!0,workingColorSpace:bI,spaces:{},convert:function(C,Q,E){return this.enabled===!1||Q===E||!Q||!E||(this.spaces[Q].transfer===oI&&(C.r=Wg(C.r),C.g=Wg(C.g),C.b=Wg(C.b)),this.spaces[Q].primaries!==this.spaces[E].primaries&&(C.applyMatrix3(this.spaces[Q].toXYZ),C.applyMatrix3(this.spaces[E].fromXYZ)),this.spaces[E].transfer===oI&&(C.r=oB(C.r),C.g=oB(C.g),C.b=oB(C.b))),C},fromWorkingColorSpace:function(C,Q){return this.convert(C,this.workingColorSpace,Q)},toWorkingColorSpace:function(C,Q){return this.convert(C,Q,this.workingColorSpace)},getPrimaries:function(C){return this.spaces[C].primaries},getTransfer:function(C){return C===sC?fQ:this.spaces[C].transfer},getLuminanceCoefficients:function(C,Q=this.workingColorSpace){return C.fromArray(this.spaces[Q].luminanceCoefficients)},define:function(C){Object.assign(this.spaces,C)},_getMatrix:function(C,Q,E){return C.copy(this.spaces[Q].toXYZ).multiply(this.spaces[E].fromXYZ)},_getDrawingBufferColorSpace:function(C){return this.spaces[C].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(C=this.workingColorSpace){return this.spaces[C].workingColorSpaceConfig.unpackColorSpace}},A=[.64,.33,.3,.6,.15,.06],I=[.2126,.7152,.0722],g=[.3127,.329];return B.define({[bI]:{primaries:A,whitePoint:g,transfer:fQ,toXYZ:ze,fromXYZ:$e,luminanceCoefficients:I,workingColorSpaceConfig:{unpackColorSpace:KI},outputColorSpaceConfig:{drawingBufferColorSpace:KI}},[KI]:{primaries:A,whitePoint:g,transfer:oI,toXYZ:ze,fromXYZ:$e,luminanceCoefficients:I,outputColorSpaceConfig:{drawingBufferColorSpace:KI}}}),B}const PA=ch();function Wg(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function oB(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}let eB;class lh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{eB===void 0&&(eB=_B("canvas")),eB.width=A.width,eB.height=A.height;const g=eB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=eB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=_B("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=Wg(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(Wg(I[g]/255)*255):I[g]=Wg(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Gh=0;class At{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=cg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(mi(C[E].image)):Q.push(mi(C[E]))}else Q=mi(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function mi(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?lh.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;class pI extends FC{constructor(A=pI.DEFAULT_IMAGE,I=pI.DEFAULT_MAPPING,g=pg,C=pg,Q=mI,E=dg,i=tg,o=wg,e=pI.DEFAULT_ANISOTROPY,t=sC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=cg(),this.name="",this.source=new At(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new LA(0,0),this.repeat=new LA(1,1),this.center=new LA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==qe)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case KC:A.x=A.x-Math.floor(A.x);break;case pg:A.x=A.x<0?0:1;break;case pQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case KC:A.y=A.y-Math.floor(A.y);break;case pg:A.y=A.y<0?0:1;break;case pQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}pI.DEFAULT_IMAGE=null,pI.DEFAULT_MAPPING=qe,pI.DEFAULT_ANISOTROPY=1;class gI{constructor(A=0,I=0,g=0,C=1){gI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const E=A.elements,i=E[0],o=E[4],e=E[8],t=E[1],a=E[5],s=E[9],r=E[2],S=E[6],w=E[10];if(Math.abs(o-t)<.01&&Math.abs(e-r)<.01&&Math.abs(s-S)<.01){if(Math.abs(o+t)<.1&&Math.abs(e+r)<.1&&Math.abs(s+S)<.1&&Math.abs(i+a+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const h=(i+1)/2,U=(a+1)/2,M=(w+1)/2,l=(o+t)/4,R=(e+r)/4,J=(s+S)/4;return h>U&&h>M?h<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(h),C=l/g,Q=R/g):U>M?U<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(U),g=l/C,Q=J/C):M<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(M),g=R/Q,C=J/Q),this.set(g,C,Q,I),this}let n=Math.sqrt((S-s)*(S-s)+(e-r)*(e-r)+(t-o)*(t-o));return Math.abs(n)<.001&&(n=1),this.x=(S-s)/n,this.y=(e-r)/n,this.z=(t-o)/n,this.w=Math.acos((i+a+w-1)/2),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=OA(this.x,A.x,I.x),this.y=OA(this.y,A.y,I.y),this.z=OA(this.z,A.z,I.z),this.w=OA(this.w,A.w,I.w),this}clampScalar(A,I){return this.x=OA(this.x,A,I),this.y=OA(this.y,A,I),this.z=OA(this.z,A,I),this.w=OA(this.w,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(OA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yh extends FC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new gI(0,0,A,I),this.scissorTest=!1,this.viewport=new gI(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mI,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const Q=new pI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);Q.flipY=!1,Q.generateMipmaps=g.generateMipmaps,Q.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=Q.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,Q=this.textures.length;C<Q;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new At(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class RC extends yh{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class It extends pI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=xI,this.minFilter=xI,this.wrapR=pg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends pI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=xI,this.minFilter=xI,this.wrapR=pg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=Q[E+0],r=Q[E+1],S=Q[E+2],w=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=r,A[I+2]=S,A[I+3]=w;return}if(a!==w||o!==s||e!==r||t!==S){let n=1-i;const h=o*s+e*r+t*S+a*w,U=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const R=Math.sqrt(M),J=Math.atan2(R,h*U);n=Math.sin(n*J)/R,i=Math.sin(i*J)/R}const l=i*U;if(o=o*n+s*l,e=e*n+r*l,t=t*n+S*l,a=a*n+w*l,n===1-i){const R=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=R,e*=R,t*=R,a*=R}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=Q[E],s=Q[E+1],r=Q[E+2],S=Q[E+3];return A[I]=i*S+t*a+o*r-e*s,A[I+1]=o*S+t*s+e*a-i*r,A[I+2]=e*S+t*r+i*s-o*a,A[I+3]=t*S-i*a-o*s-e*r,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(Q/2),s=o(g/2),r=o(C/2),S=o(Q/2);switch(E){case"XYZ":this._x=s*t*a+e*r*S,this._y=e*r*a-s*t*S,this._z=e*t*S+s*r*a,this._w=e*t*a-s*r*S;break;case"YXZ":this._x=s*t*a+e*r*S,this._y=e*r*a-s*t*S,this._z=e*t*S-s*r*a,this._w=e*t*a+s*r*S;break;case"ZXY":this._x=s*t*a-e*r*S,this._y=e*r*a+s*t*S,this._z=e*t*S+s*r*a,this._w=e*t*a-s*r*S;break;case"ZYX":this._x=s*t*a-e*r*S,this._y=e*r*a+s*t*S,this._z=e*t*S-s*r*a,this._w=e*t*a+s*r*S;break;case"YZX":this._x=s*t*a+e*r*S,this._y=e*r*a+s*t*S,this._z=e*t*S-s*r*a,this._w=e*t*a-s*r*S;break;case"XZY":this._x=s*t*a-e*r*S,this._y=e*r*a-s*t*S,this._z=e*t*S+s*r*a,this._w=e*t*a+s*r*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const r=.5/Math.sqrt(s+1);this._w=.25/r,this._x=(t-o)*r,this._y=(Q-e)*r,this._z=(E-C)*r}else if(g>i&&g>a){const r=2*Math.sqrt(1+g-i-a);this._w=(t-o)/r,this._x=.25*r,this._y=(C+E)/r,this._z=(Q+e)/r}else if(i>a){const r=2*Math.sqrt(1+i-g-a);this._w=(Q-e)/r,this._x=(C+E)/r,this._y=.25*r,this._z=(o+t)/r}else{const r=2*Math.sqrt(1+a-g-i);this._w=(E-C)/r,this._x=(Q+e)/r,this._y=(o+t)/r,this._z=.25*r}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(OA(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-Q*o,this._y=C*t+E*o+Q*i-g*e,this._z=Q*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-Q*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const r=1-I;return this._w=r*E+I*this._w,this._x=r*g+I*this._x,this._y=r*C+I*this._y,this._z=r*Q+I*this._z,this.normalize(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),Q=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),Q*Math.sin(I),Q*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(A=0,I=0,g=0){Y.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(gt.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(gt.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,e=2*(E*C-i*g),t=2*(i*I-Q*C),a=2*(Q*g-E*I);return this.x=I+o*e+E*a-i*t,this.y=g+o*t+i*e-Q*a,this.z=C+o*a+Q*t-E*e,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=OA(this.x,A.x,I.x),this.y=OA(this.y,A.y,I.y),this.z=OA(this.z,A.z,I.z),this}clampScalar(A,I){return this.x=OA(this.x,A,I),this.y=OA(this.y,A,I),this.z=OA(this.z,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(OA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Hi.copy(this).projectOnVector(A),this.sub(Hi)}reflect(A){return this.sub(Hi.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(OA(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hi=new Y,gt=new HI;class Pg{constructor(A=new Y(1/0,1/0,1/0),I=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Gg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Gg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Gg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,Gg):Gg.fromBufferAttribute(Q,E),Gg.applyMatrix4(A.matrixWorld),this.expandByPoint(Gg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),xQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),xQ.copy(g.boundingBox)),xQ.applyMatrix4(A.matrixWorld),this.union(xQ)}const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,Gg),Gg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(ZB),bQ.subVectors(this.max,ZB),tB.subVectors(A.a,ZB),aB.subVectors(A.b,ZB),sB.subVectors(A.c,ZB),DC.subVectors(aB,tB),hC.subVectors(sB,aB),pC.subVectors(tB,sB);let I=[0,-DC.z,DC.y,0,-hC.z,hC.y,0,-pC.z,pC.y,DC.z,0,-DC.x,hC.z,0,-hC.x,pC.z,0,-pC.x,-DC.y,DC.x,0,-hC.y,hC.x,0,-pC.y,pC.x,0];return!fi(I,tB,aB,sB,bQ)||(I=[1,0,0,0,1,0,0,0,1],!fi(I,tB,aB,sB,bQ))?!1:(OQ.crossVectors(DC,hC),I=[OQ.x,OQ.y,OQ.z],fi(I,tB,aB,sB,bQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Gg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Gg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Vg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Vg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Vg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Vg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Vg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Vg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Vg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Vg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Vg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Vg=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Gg=new Y,xQ=new Pg,tB=new Y,aB=new Y,sB=new Y,DC=new Y,hC=new Y,pC=new Y,ZB=new Y,bQ=new Y,OQ=new Y,dC=new Y;function fi(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){dC.fromArray(B,Q);const i=C.x*Math.abs(dC.x)+C.y*Math.abs(dC.y)+C.z*Math.abs(dC.z),o=A.dot(dC),e=I.dot(dC),t=g.dot(dC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const Mh=new Pg,WB=new Y,Ti=new Y;class qg{constructor(A=new Y,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Mh.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;WB.subVectors(A,this.center);const I=WB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(WB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Ti.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(WB.copy(A.center).add(Ti)),this.expandByPoint(WB.copy(A.center).sub(Ti))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jg=new Y,xi=new Y,vQ=new Y,rC=new Y,bi=new Y,_Q=new Y,Oi=new Y;class ZQ{constructor(A=new Y,I=new Y(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,jg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=jg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(jg.copy(this.origin).addScaledVector(this.direction,I),jg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){xi.copy(A).add(I).multiplyScalar(.5),vQ.copy(I).sub(A).normalize(),rC.copy(this.origin).sub(xi);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(vQ),i=rC.dot(this.direction),o=-rC.dot(vQ),e=rC.lengthSq(),t=Math.abs(1-E*E);let a,s,r,S;if(t>0)if(a=E*o-i,s=E*i-o,S=Q*t,a>=0)if(s>=-S)if(s<=S){const w=1/t;a*=w,s*=w,r=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=Q,a=Math.max(0,-(E*s+i)),r=-a*a+s*(s+2*o)+e;else s=-Q,a=Math.max(0,-(E*s+i)),r=-a*a+s*(s+2*o)+e;else s<=-S?(a=Math.max(0,-(-E*Q+i)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),r=-a*a+s*(s+2*o)+e):s<=S?(a=0,s=Math.min(Math.max(-Q,-o),Q),r=s*(s+2*o)+e):(a=Math.max(0,-(E*Q+i)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),r=-a*a+s*(s+2*o)+e);else s=E>0?-Q:Q,a=Math.max(0,-(E*s+i)),r=-a*a+s*(s+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(xi).addScaledVector(vQ,s),r}intersectSphere(A,I){jg.subVectors(A.center,this.origin);const g=jg.dot(this.direction),C=jg.dot(jg)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(Q=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(Q=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,jg)!==null}intersectTriangle(A,I,g,C,Q){bi.subVectors(I,A),_Q.subVectors(g,A),Oi.crossVectors(bi,_Q);let E=this.direction.dot(Oi),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;rC.subVectors(this.origin,A);const o=i*this.direction.dot(_Q.crossVectors(rC,_Q));if(o<0)return null;const e=i*this.direction.dot(bi.cross(rC));if(e<0||o+e>E)return null;const t=-i*rC.dot(Oi);return t<0?null:this.at(t/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uA{constructor(A,I,g,C,Q,E,i,o,e,t,a,s,r,S,w,n){uA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e,t,a,s,r,S,w,n)}set(A,I,g,C,Q,E,i,o,e,t,a,s,r,S,w,n){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=Q,h[5]=E,h[9]=i,h[13]=o,h[2]=e,h[6]=t,h[10]=a,h[14]=s,h[3]=r,h[7]=S,h[11]=w,h[15]=n,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/DB.setFromMatrixColumn(A,0).length(),Q=1/DB.setFromMatrixColumn(A,1).length(),E=1/DB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=E*t,r=E*a,S=i*t,w=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=r+S*e,I[5]=s-w*e,I[9]=-i*o,I[2]=w-s*e,I[6]=S+r*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,r=o*a,S=e*t,w=e*a;I[0]=s+w*i,I[4]=S*i-r,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=r*i-S,I[6]=w+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,r=o*a,S=e*t,w=e*a;I[0]=s-w*i,I[4]=-E*a,I[8]=S+r*i,I[1]=r+S*i,I[5]=E*t,I[9]=w-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,r=E*a,S=i*t,w=i*a;I[0]=o*t,I[4]=S*e-r,I[8]=s*e+w,I[1]=o*a,I[5]=w*e+s,I[9]=r*e-S,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,r=E*e,S=i*o,w=i*e;I[0]=o*t,I[4]=w-s*a,I[8]=S*a+r,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=r*a+S,I[10]=s-w*a}else if(A.order==="XZY"){const s=E*o,r=E*e,S=i*o,w=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+w,I[5]=E*t,I[9]=r*a-S,I[2]=S*a-r,I[6]=i*t,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Nh,A,Kh)}lookAt(A,I,g){const C=this.elements;return Qg.subVectors(A,I),Qg.lengthSq()===0&&(Qg.z=1),Qg.normalize(),nC.crossVectors(g,Qg),nC.lengthSq()===0&&(Math.abs(g.z)===1?Qg.x+=1e-4:Qg.z+=1e-4,Qg.normalize(),nC.crossVectors(g,Qg)),nC.normalize(),WQ.crossVectors(Qg,nC),C[0]=nC.x,C[4]=WQ.x,C[8]=Qg.x,C[1]=nC.y,C[5]=WQ.y,C[9]=Qg.y,C[2]=nC.z,C[6]=WQ.z,C[10]=Qg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],r=g[13],S=g[2],w=g[6],n=g[10],h=g[14],U=g[3],M=g[7],l=g[11],R=g[15],J=C[0],K=C[4],p=C[8],y=C[12],G=C[1],d=C[5],x=C[9],b=C[13],W=C[2],X=C[6],_=C[10],gA=C[14],P=C[3],QA=C[7],cA=C[11],mA=C[15];return Q[0]=E*J+i*G+o*W+e*P,Q[4]=E*K+i*d+o*X+e*QA,Q[8]=E*p+i*x+o*_+e*cA,Q[12]=E*y+i*b+o*gA+e*mA,Q[1]=t*J+a*G+s*W+r*P,Q[5]=t*K+a*d+s*X+r*QA,Q[9]=t*p+a*x+s*_+r*cA,Q[13]=t*y+a*b+s*gA+r*mA,Q[2]=S*J+w*G+n*W+h*P,Q[6]=S*K+w*d+n*X+h*QA,Q[10]=S*p+w*x+n*_+h*cA,Q[14]=S*y+w*b+n*gA+h*mA,Q[3]=U*J+M*G+l*W+R*P,Q[7]=U*K+M*d+l*X+R*QA,Q[11]=U*p+M*x+l*_+R*cA,Q[15]=U*y+M*b+l*gA+R*mA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],r=A[14],S=A[3],w=A[7],n=A[11],h=A[15];return S*(+Q*o*a-C*e*a-Q*i*s+g*e*s+C*i*r-g*o*r)+w*(+I*o*r-I*e*s+Q*E*s-C*E*r+C*e*t-Q*o*t)+n*(+I*e*a-I*i*r-Q*E*a+g*E*r+Q*i*t-g*e*t)+h*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],r=A[11],S=A[12],w=A[13],n=A[14],h=A[15],U=a*n*e-w*s*e+w*o*r-i*n*r-a*o*h+i*s*h,M=S*s*e-t*n*e-S*o*r+E*n*r+t*o*h-E*s*h,l=t*w*e-S*a*e+S*i*r-E*w*r-t*i*h+E*a*h,R=S*a*o-t*w*o-S*i*s+E*w*s+t*i*n-E*a*n,J=I*U+g*M+C*l+Q*R;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/J;return A[0]=U*K,A[1]=(w*s*Q-a*n*Q-w*C*r+g*n*r+a*C*h-g*s*h)*K,A[2]=(i*n*Q-w*o*Q+w*C*e-g*n*e-i*C*h+g*o*h)*K,A[3]=(a*o*Q-i*s*Q-a*C*e+g*s*e+i*C*r-g*o*r)*K,A[4]=M*K,A[5]=(t*n*Q-S*s*Q+S*C*r-I*n*r-t*C*h+I*s*h)*K,A[6]=(S*o*Q-E*n*Q-S*C*e+I*n*e+E*C*h-I*o*h)*K,A[7]=(E*s*Q-t*o*Q+t*C*e-I*s*e-E*C*r+I*o*r)*K,A[8]=l*K,A[9]=(S*a*Q-t*w*Q-S*g*r+I*w*r+t*g*h-I*a*h)*K,A[10]=(E*w*Q-S*i*Q+S*g*e-I*w*e-E*g*h+I*i*h)*K,A[11]=(t*i*Q-E*a*Q-t*g*e+I*a*e+E*g*r-I*i*r)*K,A[12]=R*K,A[13]=(t*w*C-S*a*C+S*g*s-I*w*s-t*g*n+I*a*n)*K,A[14]=(S*i*C-E*w*C-S*g*o+I*w*o+E*g*n-I*i*n)*K,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*K,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,e=Q*E,t=Q*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,e=Q+Q,t=E+E,a=i+i,s=Q*e,r=Q*t,S=Q*a,w=E*t,n=E*a,h=i*a,U=o*e,M=o*t,l=o*a,R=g.x,J=g.y,K=g.z;return C[0]=(1-(w+h))*R,C[1]=(r+l)*R,C[2]=(S-M)*R,C[3]=0,C[4]=(r-l)*J,C[5]=(1-(s+h))*J,C[6]=(n+U)*J,C[7]=0,C[8]=(S+M)*K,C[9]=(n-U)*K,C[10]=(1-(s+w))*K,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=DB.set(C[0],C[1],C[2]).length();const E=DB.set(C[4],C[5],C[6]).length(),i=DB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],kg.copy(this);const o=1/Q,e=1/E,t=1/i;return kg.elements[0]*=o,kg.elements[1]*=o,kg.elements[2]*=o,kg.elements[4]*=e,kg.elements[5]*=e,kg.elements[6]*=e,kg.elements[8]*=t,kg.elements[9]*=t,kg.elements[10]*=t,I.setFromRotationMatrix(kg),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E,i=Zg){const o=this.elements,e=2*Q/(I-A),t=2*Q/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let r,S;if(i===Zg)r=-(E+Q)/(E-Q),S=-2*E*Q/(E-Q);else if(i===TQ)r=-E/(E-Q),S=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=e,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=t,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=r,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,Q,E,i=Zg){const o=this.elements,e=1/(I-A),t=1/(g-C),a=1/(E-Q),s=(I+A)*e,r=(g+C)*t;let S,w;if(i===Zg)S=(E+Q)*a,w=-2*a;else if(i===TQ)S=Q*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*e,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*t,o[9]=0,o[13]=-r,o[2]=0,o[6]=0,o[10]=w,o[14]=-S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const DB=new Y,kg=new uA,Nh=new Y(0,0,0),Kh=new Y(1,1,1),nC=new Y,WQ=new Y,Qg=new Y,Ct=new uA,Bt=new HI;class jI{constructor(A=0,I=0,g=0,C=jI.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],r=C[10];switch(I){case"XYZ":this._y=Math.asin(OA(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,r),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-OA(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,r),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(OA(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,r),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-OA(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,r),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(OA(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,r));break;case"XZY":this._z=Math.asin(-OA(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-t,r),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Ct.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ct,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Bt.setFromEuler(this),this.setFromQuaternion(Bt,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jI.DEFAULT_ORDER="XYZ";class Qt{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Jh=0;const Et=new Y,hB=new HI,Xg=new uA,PQ=new Y,PB=new Y,Fh=new Y,Rh=new HI,it=new Y(1,0,0),ot=new Y(0,1,0),et=new Y(0,0,1),tt={type:"added"},ph={type:"removed"},rB={type:"childadded",child:null},vi={type:"childremoved",child:null};class aI extends FC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=cg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=aI.DEFAULT_UP.clone();const A=new Y,I=new jI,g=new HI,C=new Y(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new uA},normalMatrix:{value:new fA}}),this.matrix=new uA,this.matrixWorld=new uA,this.matrixAutoUpdate=aI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=aI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return hB.setFromAxisAngle(A,I),this.quaternion.multiply(hB),this}rotateOnWorldAxis(A,I){return hB.setFromAxisAngle(A,I),this.quaternion.premultiply(hB),this}rotateX(A){return this.rotateOnAxis(it,A)}rotateY(A){return this.rotateOnAxis(ot,A)}rotateZ(A){return this.rotateOnAxis(et,A)}translateOnAxis(A,I){return Et.copy(A).applyQuaternion(this.quaternion),this.position.add(Et.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(it,A)}translateY(A){return this.translateOnAxis(ot,A)}translateZ(A){return this.translateOnAxis(et,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Xg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?PQ.copy(A):PQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),PB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xg.lookAt(PB,PQ,this.up):Xg.lookAt(PQ,PB,this.up),this.quaternion.setFromRotationMatrix(Xg),C&&(Xg.extractRotation(C.matrixWorld),hB.setFromRotationMatrix(Xg),this.quaternion.premultiply(hB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(tt),rB.child=A,this.dispatchEvent(rB),rB.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(ph),vi.child=A,this.dispatchEvent(vi),vi.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Xg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Xg.multiply(A.parent.matrixWorld)),A.applyMatrix4(Xg),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(tt),rB.child=A,this.dispatchEvent(rB),rB.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(PB,A,Fh),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(PB,Rh,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxInstanceCount=this._maxInstanceCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(C.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),r=E(A.animations),S=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),r.length>0&&(g.animations=r),S.length>0&&(g.nodes=S)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}aI.DEFAULT_UP=new Y(0,1,0),aI.DEFAULT_MATRIX_AUTO_UPDATE=!0,aI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yg=new Y,zg=new Y,_i=new Y,$g=new Y,nB=new Y,SB=new Y,at=new Y,Zi=new Y,Wi=new Y,Pi=new Y,Vi=new gI,ji=new gI,Xi=new gI;class Ug{constructor(A=new Y,I=new Y,g=new Y){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),yg.subVectors(A,I),C.cross(yg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){yg.subVectors(C,I),zg.subVectors(g,I),_i.subVectors(A,I);const E=yg.dot(yg),i=yg.dot(zg),o=yg.dot(_i),e=zg.dot(zg),t=zg.dot(_i),a=E*e-i*i;if(a===0)return Q.set(0,0,0),null;const s=1/a,r=(e*o-i*t)*s,S=(E*t-i*o)*s;return Q.set(1-r-S,S,r)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,$g)===null?!1:$g.x>=0&&$g.y>=0&&$g.x+$g.y<=1}static getInterpolation(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,$g)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,$g.x),o.addScaledVector(E,$g.y),o.addScaledVector(i,$g.z),o)}static getInterpolatedAttribute(A,I,g,C,Q,E){return Vi.setScalar(0),ji.setScalar(0),Xi.setScalar(0),Vi.fromBufferAttribute(A,I),ji.fromBufferAttribute(A,g),Xi.fromBufferAttribute(A,C),E.setScalar(0),E.addScaledVector(Vi,Q.x),E.addScaledVector(ji,Q.y),E.addScaledVector(Xi,Q.z),E}static isFrontFacing(A,I,g,C){return yg.subVectors(g,I),zg.subVectors(A,I),yg.cross(zg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return yg.subVectors(this.c,this.b),zg.subVectors(this.a,this.b),yg.cross(zg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Ug.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Ug.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,Q){return Ug.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return Ug.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Ug.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;nB.subVectors(C,g),SB.subVectors(Q,g),Zi.subVectors(A,g);const o=nB.dot(Zi),e=SB.dot(Zi);if(o<=0&&e<=0)return I.copy(g);Wi.subVectors(A,C);const t=nB.dot(Wi),a=SB.dot(Wi);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(nB,E);Pi.subVectors(A,Q);const r=nB.dot(Pi),S=SB.dot(Pi);if(S>=0&&r<=S)return I.copy(Q);const w=r*e-o*S;if(w<=0&&e>=0&&S<=0)return i=e/(e-S),I.copy(g).addScaledVector(SB,i);const n=t*S-r*a;if(n<=0&&a-t>=0&&r-S>=0)return at.subVectors(Q,C),i=(a-t)/(a-t+(r-S)),I.copy(C).addScaledVector(at,i);const h=1/(n+w+s);return E=w*h,i=s*h,I.copy(g).addScaledVector(nB,E).addScaledVector(SB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const st={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},SC={h:0,s:0,l:0},VQ={h:0,s:0,l:0};function zi(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class JA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=KI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,PA.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=PA.workingColorSpace){return this.r=A,this.g=I,this.b=g,PA.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=PA.workingColorSpace){if(A=Li(A,1),I=OA(I,0,1),g=OA(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=zi(E,Q,A+1/3),this.g=zi(E,Q,A),this.b=zi(E,Q,A-1/3)}return PA.toWorkingColorSpace(this,C),this}setStyle(A,I=KI){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=KI){const g=st[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Wg(A.r),this.g=Wg(A.g),this.b=Wg(A.b),this}copyLinearToSRGB(A){return this.r=oB(A.r),this.g=oB(A.g),this.b=oB(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=KI){return PA.fromWorkingColorSpace(WI.copy(this),A),Math.round(OA(WI.r*255,0,255))*65536+Math.round(OA(WI.g*255,0,255))*256+Math.round(OA(WI.b*255,0,255))}getHexString(A=KI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=PA.workingColorSpace){PA.fromWorkingColorSpace(WI.copy(this),I);const g=WI.r,C=WI.g,Q=WI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=PA.workingColorSpace){return PA.fromWorkingColorSpace(WI.copy(this),I),A.r=WI.r,A.g=WI.g,A.b=WI.b,A}getStyle(A=KI){PA.fromWorkingColorSpace(WI.copy(this),A);const I=WI.r,g=WI.g,C=WI.b;return A!==KI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(SC),this.setHSL(SC.h+A,SC.s+I,SC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(SC),A.getHSL(VQ);const g=vB(SC.h,VQ.h,I),C=vB(SC.s,VQ.s,I),Q=vB(SC.l,VQ.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const WI=new JA;JA.NAMES=st;let dh=0;class Mg extends FC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=cg(),this.name="",this.type="Material",this.blending=jC,this.side=vg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=TE,this.blendDst=xE,this.blendEquation=NC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new JA(0,0,0),this.blendAlpha=0,this.depthFunc=XC,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ze,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=QB,this.stencilZFail=QB,this.stencilZPass=QB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==jC&&(g.blending=this.blending),this.side!==vg&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==TE&&(g.blendSrc=this.blendSrc),this.blendDst!==xE&&(g.blendDst=this.blendDst),this.blendEquation!==NC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==XC&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ze&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==QB&&(g.stencilFail=this.stencilFail),this.stencilZFail!==QB&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==QB&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wC extends Mg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new JA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jI,this.combine=VE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const AC=qh();function qh(){const B=new ArrayBuffer(4),A=new Float32Array(B),I=new Uint32Array(B),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):e<-14?(g[o]=1024>>-e-14,g[o|256]=1024>>-e-14|32768,C[o]=-e-1,C[o|256]=-e-1):e<=15?(g[o]=e+15<<10,g[o|256]=e+15<<10|32768,C[o]=13,C[o|256]=13):e<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const Q=new Uint32Array(2048),E=new Uint32Array(64),i=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Q[o]=e|t}for(let o=1024;o<2048;++o)Q[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)E[o]=o<<23;E[31]=1199570944,E[32]=2147483648;for(let o=33;o<63;++o)E[o]=2147483648+(o-32<<23);E[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(i[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:Q,exponentTable:E,offsetTable:i}}function Yh(B){Math.abs(B)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),B=OA(B,-65504,65504),AC.floatView[0]=B;const A=AC.uint32View[0],I=A>>23&511;return AC.baseTable[I]+((A&8388607)>>AC.shiftTable[I])}function Lh(B){const A=B>>10;return AC.uint32View[0]=AC.mantissaTable[AC.offsetTable[A]+(B&1023)]+AC.exponentTable[A],AC.floatView[0]}const jQ={toHalfFloat:Yh,fromHalfFloat:Lh},JI=new Y,XQ=new LA;class dI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Yi,this.updateRanges=[],this.gpuType=Bg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)XQ.fromBufferAttribute(this,I),XQ.applyMatrix3(A),this.setXY(I,XQ.x,XQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)JI.fromBufferAttribute(this,I),JI.applyMatrix3(A),this.setXYZ(I,JI.x,JI.y,JI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)JI.fromBufferAttribute(this,I),JI.applyMatrix4(A),this.setXYZ(I,JI.x,JI.y,JI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)JI.fromBufferAttribute(this,I),JI.applyNormalMatrix(A),this.setXYZ(I,JI.x,JI.y,JI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)JI.fromBufferAttribute(this,I),JI.transformDirection(A),this.setXYZ(I,JI.x,JI.y,JI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=lg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=EI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=lg(I,this.array)),I}setX(A,I){return this.normalized&&(I=EI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=lg(I,this.array)),I}setY(A,I){return this.normalized&&(I=EI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=lg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=EI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=lg(I,this.array)),I}setW(A,I){return this.normalized&&(I=EI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array),C=EI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array),C=EI(C,this.array),Q=EI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Yi&&(A.usage=this.usage),A}}class Dt extends dI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class ht extends dI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class XI extends dI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let uh=0;const ag=new uA,$i=new aI,wB=new Y,Eg=new Pg,VB=new Pg,fI=new Y;class zI extends FC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=cg(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(je(A)?ht:Dt)(A,1):this.index=A,this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new fA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return ag.makeRotationFromQuaternion(A),this.applyMatrix4(ag),this}rotateX(A){return ag.makeRotationX(A),this.applyMatrix4(ag),this}rotateY(A){return ag.makeRotationY(A),this.applyMatrix4(ag),this}rotateZ(A){return ag.makeRotationZ(A),this.applyMatrix4(ag),this}translate(A,I,g){return ag.makeTranslation(A,I,g),this.applyMatrix4(ag),this}scale(A,I,g){return ag.makeScale(A,I,g),this.applyMatrix4(ag),this}lookAt(A){return $i.lookAt(A),$i.updateMatrix(),this.applyMatrix4($i.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wB).negate(),this.translate(wB.x,wB.y,wB.z),this}setFromPoints(A){const I=this.getAttribute("position");if(I===void 0){const g=[];for(let C=0,Q=A.length;C<Q;C++){const E=A[C];g.push(E.x,E.y,E.z||0)}this.setAttribute("position",new XI(g,3))}else{const g=Math.min(A.length,I.count);for(let C=0;C<g;C++){const Q=A[C];I.setXYZ(C,Q.x,Q.y,Q.z||0)}A.length>I.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),I.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];Eg.setFromBufferAttribute(Q),this.morphTargetsRelative?(fI.addVectors(this.boundingBox.min,Eg.min),this.boundingBox.expandByPoint(fI),fI.addVectors(this.boundingBox.max,Eg.max),this.boundingBox.expandByPoint(fI)):(this.boundingBox.expandByPoint(Eg.min),this.boundingBox.expandByPoint(Eg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(A){const g=this.boundingSphere.center;if(Eg.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];VB.setFromBufferAttribute(i),this.morphTargetsRelative?(fI.addVectors(Eg.min,VB.min),Eg.expandByPoint(fI),fI.addVectors(Eg.max,VB.max),Eg.expandByPoint(fI)):(Eg.expandByPoint(VB.min),Eg.expandByPoint(VB.max))}Eg.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)fI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(fI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)fI.fromBufferAttribute(i,e),o&&(wB.fromBufferAttribute(A,e),fI.add(wB)),C=Math.max(C,g.distanceToSquared(fI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,Q=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dI(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let p=0;p<g.count;p++)i[p]=new Y,o[p]=new Y;const e=new Y,t=new Y,a=new Y,s=new LA,r=new LA,S=new LA,w=new Y,n=new Y;function h(p,y,G){e.fromBufferAttribute(g,p),t.fromBufferAttribute(g,y),a.fromBufferAttribute(g,G),s.fromBufferAttribute(Q,p),r.fromBufferAttribute(Q,y),S.fromBufferAttribute(Q,G),t.sub(e),a.sub(e),r.sub(s),S.sub(s);const d=1/(r.x*S.y-S.x*r.y);isFinite(d)&&(w.copy(t).multiplyScalar(S.y).addScaledVector(a,-r.y).multiplyScalar(d),n.copy(a).multiplyScalar(r.x).addScaledVector(t,-S.x).multiplyScalar(d),i[p].add(w),i[y].add(w),i[G].add(w),o[p].add(n),o[y].add(n),o[G].add(n))}let U=this.groups;U.length===0&&(U=[{start:0,count:A.count}]);for(let p=0,y=U.length;p<y;++p){const G=U[p],d=G.start,x=G.count;for(let b=d,W=d+x;b<W;b+=3)h(A.getX(b+0),A.getX(b+1),A.getX(b+2))}const M=new Y,l=new Y,R=new Y,J=new Y;function K(p){R.fromBufferAttribute(C,p),J.copy(R);const y=i[p];M.copy(y),M.sub(R.multiplyScalar(R.dot(y))).normalize(),l.crossVectors(J,y);const G=l.dot(o[p])<0?-1:1;E.setXYZW(p,M.x,M.y,M.z,G)}for(let p=0,y=U.length;p<y;++p){const G=U[p],d=G.start,x=G.count;for(let b=d,W=d+x;b<W;b+=3)K(A.getX(b+0)),K(A.getX(b+1)),K(A.getX(b+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new dI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,r=g.count;s<r;s++)g.setXYZ(s,0,0,0);const C=new Y,Q=new Y,E=new Y,i=new Y,o=new Y,e=new Y,t=new Y,a=new Y;if(A)for(let s=0,r=A.count;s<r;s+=3){const S=A.getX(s+0),w=A.getX(s+1),n=A.getX(s+2);C.fromBufferAttribute(I,S),Q.fromBufferAttribute(I,w),E.fromBufferAttribute(I,n),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),i.fromBufferAttribute(g,S),o.fromBufferAttribute(g,w),e.fromBufferAttribute(g,n),i.add(t),o.add(t),e.add(t),g.setXYZ(S,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(n,e.x,e.y,e.z)}else for(let s=0,r=I.count;s<r;s+=3)C.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)fI.fromBufferAttribute(A,I),fI.normalize(),A.setXYZ(I,fI.x,fI.y,fI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let r=0,S=0;for(let w=0,n=o.length;w<n;w++){i.isInterleavedBufferAttribute?r=o[w]*i.data.stride+i.offset:r=o[w]*t;for(let h=0;h<t;h++)s[S++]=e[r++]}return new dI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new zI,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const Q=this.morphAttributes;for(const i in Q){const o=[],e=Q[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],r=A(s,g);o.push(r)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];t.push(r.toJSON(A.data))}t.length>0&&(C[o]=t,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const Q=A.morphAttributes;for(const e in Q){const t=[],a=Q[e];for(let s=0,r=a.length;s<r;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rt=new uA,qC=new ZQ,zQ=new qg,nt=new Y,$Q=new Y,AE=new Y,IE=new Y,Ao=new Y,gE=new Y,St=new Y,CE=new Y;class yI extends aI{constructor(A=new zI,I=new wC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){gE.set(0,0,0);for(let o=0,e=Q.length;o<e;o++){const t=i[o],a=Q[o];t!==0&&(Ao.fromBufferAttribute(a,A),E?gE.addScaledVector(Ao,t):gE.addScaledVector(Ao.sub(I),t))}I.add(gE)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),zQ.copy(g.boundingSphere),zQ.applyMatrix4(Q),qC.copy(A.ray).recast(A.near),!(zQ.containsPoint(qC.origin)===!1&&(qC.intersectSphere(zQ,nt)===null||qC.origin.distanceToSquared(nt)>(A.far-A.near)**2))&&(rt.copy(Q).invert(),qC.copy(A.ray).applyMatrix4(rt),!(g.boundingBox!==null&&qC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,qC)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,e=Q.attributes.uv,t=Q.attributes.uv1,a=Q.attributes.normal,s=Q.groups,r=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let S=0,w=s.length;S<w;S++){const n=s[S],h=E[n.materialIndex],U=Math.max(n.start,r.start),M=Math.min(i.count,Math.min(n.start+n.count,r.start+r.count));for(let l=U,R=M;l<R;l+=3){const J=i.getX(l),K=i.getX(l+1),p=i.getX(l+2);C=BE(this,h,A,g,e,t,a,J,K,p),C&&(C.faceIndex=Math.floor(l/3),C.face.materialIndex=n.materialIndex,I.push(C))}}else{const S=Math.max(0,r.start),w=Math.min(i.count,r.start+r.count);for(let n=S,h=w;n<h;n+=3){const U=i.getX(n),M=i.getX(n+1),l=i.getX(n+2);C=BE(this,E,A,g,e,t,a,U,M,l),C&&(C.faceIndex=Math.floor(n/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let S=0,w=s.length;S<w;S++){const n=s[S],h=E[n.materialIndex],U=Math.max(n.start,r.start),M=Math.min(o.count,Math.min(n.start+n.count,r.start+r.count));for(let l=U,R=M;l<R;l+=3){const J=l,K=l+1,p=l+2;C=BE(this,h,A,g,e,t,a,J,K,p),C&&(C.faceIndex=Math.floor(l/3),C.face.materialIndex=n.materialIndex,I.push(C))}}else{const S=Math.max(0,r.start),w=Math.min(o.count,r.start+r.count);for(let n=S,h=w;n<h;n+=3){const U=n,M=n+1,l=n+2;C=BE(this,E,A,g,e,t,a,U,M,l),C&&(C.faceIndex=Math.floor(n/3),I.push(C))}}}}function mh(B,A,I,g,C,Q,E,i){let o;if(A.side===Cg?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===vg,i),o===null)return null;CE.copy(i),CE.applyMatrix4(B.matrixWorld);const e=I.ray.origin.distanceTo(CE);return e<I.near||e>I.far?null:{distance:e,point:CE.clone(),object:B}}function BE(B,A,I,g,C,Q,E,i,o,e){B.getVertexPosition(i,$Q),B.getVertexPosition(o,AE),B.getVertexPosition(e,IE);const t=mh(B,A,I,g,$Q,AE,IE,St);if(t){const a=new Y;Ug.getBarycoord(St,$Q,AE,IE,a),C&&(t.uv=Ug.getInterpolatedAttribute(C,i,o,e,a,new LA)),Q&&(t.uv1=Ug.getInterpolatedAttribute(Q,i,o,e,a,new LA)),E&&(t.normal=Ug.getInterpolatedAttribute(E,i,o,e,a,new Y),t.normal.dot(g.direction)>0&&t.normal.multiplyScalar(-1));const s={a:i,b:o,c:e,normal:new Y,materialIndex:0};Ug.getNormal($Q,AE,IE,s.normal),t.face=s,t.barycoord=a}return t}class cB extends zI{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,r=0;S("z","y","x",-1,-1,g,I,A,E,Q,0),S("z","y","x",1,-1,g,I,-A,E,Q,1),S("x","z","y",1,1,A,g,I,C,E,2),S("x","z","y",1,-1,A,g,-I,C,E,3),S("x","y","z",1,-1,A,I,g,C,Q,4),S("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new XI(e,3)),this.setAttribute("normal",new XI(t,3)),this.setAttribute("uv",new XI(a,2));function S(w,n,h,U,M,l,R,J,K,p,y){const G=l/K,d=R/p,x=l/2,b=R/2,W=J/2,X=K+1,_=p+1;let gA=0,P=0;const QA=new Y;for(let cA=0;cA<_;cA++){const mA=cA*d-b;for(let ZA=0;ZA<X;ZA++){const DI=ZA*G-x;QA[w]=DI*U,QA[n]=mA*M,QA[h]=W,e.push(QA.x,QA.y,QA.z),QA[w]=0,QA[n]=0,QA[h]=J>0?1:-1,t.push(QA.x,QA.y,QA.z),a.push(ZA/K),a.push(1-cA/p),gA+=1}}for(let cA=0;cA<p;cA++)for(let mA=0;mA<K;mA++){const ZA=s+mA+X*cA,DI=s+mA+X*(cA+1),V=s+(mA+1)+X*(cA+1),BA=s+(mA+1)+X*cA;o.push(ZA,DI,BA),o.push(DI,V,BA),P+=6}i.addGroup(r,P,y),r+=P,s+=gA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new cB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function lB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function $I(B){const A={};for(let I=0;I<B.length;I++){const g=lB(B[I]);for(const C in g)A[C]=g[C]}return A}function Hh(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function wt(B){const A=B.getRenderTarget();return A===null?B.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:PA.workingColorSpace}const fh={clone:lB,merge:$I};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class IC extends Mg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=lB(A.uniforms),this.uniformsGroups=Hh(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const Q=this.uniforms[C].value;Q&&Q.isTexture?I.uniforms[C]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[C]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[C]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[C]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[C]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[C]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[C]={type:"m4",value:Q.toArray()}:I.uniforms[C]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class ct extends aI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new uA,this.projectionMatrix=new uA,this.projectionMatrixInverse=new uA,this.coordinateSystem=Zg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cC=new Y,lt=new LA,Gt=new LA;class Ag extends ct{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=EB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(OB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return EB*2*Math.atan(Math.tan(OB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){cC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(cC.x,cC.y).multiplyScalar(-A/cC.z),cC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(cC.x,cC.y).multiplyScalar(-A/cC.z)}getViewSize(A,I){return this.getViewBounds(A,lt,Gt),I.subVectors(Gt,lt)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(OB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const GB=-90,kB=1;class bh extends aI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new Ag(GB,kB,A,I);C.layers=this.layers,this.add(C);const Q=new Ag(GB,kB,A,I);Q.layers=this.layers,this.add(Q);const E=new Ag(GB,kB,A,I);E.layers=this.layers,this.add(E);const i=new Ag(GB,kB,A,I);i.layers=this.layers,this.add(i);const o=new Ag(GB,kB,A,I);o.layers=this.layers,this.add(o);const e=new Ag(GB,kB,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,E,i,o]=I;for(const e of I)this.remove(e);if(A===Zg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===TQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,e,t]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),r=A.getActiveMipmapLevel(),S=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,Q),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,e),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,t),A.setRenderTarget(a,s,r),A.xr.enabled=S,g.texture.needsPMREMUpdate=!0}}class kt extends pI{constructor(A,I,g,C,Q,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:zC,super(A,I,g,C,Q,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Oh extends RC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new kt(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:mI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new cB(5,5,5),Q=new IC({name:"CubemapFromEquirect",uniforms:lB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:Cg,blending:tC});Q.uniforms.tEquirect.value=I;const E=new yI(C,Q),i=I.minFilter;return I.minFilter===dg&&(I.minFilter=mI),new bh(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}class vh extends aI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jI,this.environmentIntensity=1,this.environmentRotation=new jI,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(I.object.environmentIntensity=this.environmentIntensity),I.object.environmentRotation=this.environmentRotation.toArray(),I}}class yt{constructor(A,I){this.isInterleavedBuffer=!0,this.array=A,this.stride=I,this.count=A!==void 0?A.length/I:0,this.usage=Yi,this.updateRanges=[],this.version=0,this.uuid=cg()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,I,g){A*=this.stride,g*=I.stride;for(let C=0,Q=this.stride;C<Q;C++)this.array[A+C]=I.array[g+C];return this}set(A,I=0){return this.array.set(A,I),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const I=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),g=new this.constructor(I,this.stride);return g.setUsage(this.usage),g}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ig=new Y;class jB{constructor(A,I,g,C=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=I,this.offset=g,this.normalized=C}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let I=0,g=this.data.count;I<g;I++)Ig.fromBufferAttribute(this,I),Ig.applyMatrix4(A),this.setXYZ(I,Ig.x,Ig.y,Ig.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Ig.fromBufferAttribute(this,I),Ig.applyNormalMatrix(A),this.setXYZ(I,Ig.x,Ig.y,Ig.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Ig.fromBufferAttribute(this,I),Ig.transformDirection(A),this.setXYZ(I,Ig.x,Ig.y,Ig.z);return this}getComponent(A,I){let g=this.array[A*this.data.stride+this.offset+I];return this.normalized&&(g=lg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=EI(g,this.array)),this.data.array[A*this.data.stride+this.offset+I]=g,this}setX(A,I){return this.normalized&&(I=EI(I,this.array)),this.data.array[A*this.data.stride+this.offset]=I,this}setY(A,I){return this.normalized&&(I=EI(I,this.array)),this.data.array[A*this.data.stride+this.offset+1]=I,this}setZ(A,I){return this.normalized&&(I=EI(I,this.array)),this.data.array[A*this.data.stride+this.offset+2]=I,this}setW(A,I){return this.normalized&&(I=EI(I,this.array)),this.data.array[A*this.data.stride+this.offset+3]=I,this}getX(A){let I=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(I=lg(I,this.array)),I}getY(A){let I=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(I=lg(I,this.array)),I}getZ(A){let I=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(I=lg(I,this.array)),I}getW(A){let I=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(I=lg(I,this.array)),I}setXY(A,I,g){return A=A*this.data.stride+this.offset,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this}setXYZ(A,I,g,C){return A=A*this.data.stride+this.offset,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array),C=EI(C,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A=A*this.data.stride+this.offset,this.normalized&&(I=EI(I,this.array),g=EI(g,this.array),C=EI(C,this.array),Q=EI(Q,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this.data.array[A+3]=Q,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return new dI(new this.array.constructor(I),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new jB(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ut=new Y,Mt=new gI,Nt=new gI,_h=new Y,Kt=new uA,QE=new Y,Io=new qg,Jt=new uA,go=new ZQ;class Zh extends yI{constructor(A,I){super(A,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=de,this.bindMatrix=new uA,this.bindMatrixInverse=new uA,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const A=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pg),this.boundingBox.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)this.getVertexPosition(g,QE),this.boundingBox.expandByPoint(QE)}computeBoundingSphere(){const A=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qg),this.boundingSphere.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)this.getVertexPosition(g,QE),this.boundingSphere.expandByPoint(QE)}copy(A,I){return super.copy(A,I),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}raycast(A,I){const g=this.material,C=this.matrixWorld;g!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(C),A.ray.intersectsSphere(Io)!==!1&&(Jt.copy(C).invert(),go.copy(A.ray).applyMatrix4(Jt),!(this.boundingBox!==null&&go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(A,I,go)))}getVertexPosition(A,I){return super.getVertexPosition(A,I),this.applyBoneTransform(A,I),I}bind(A,I){this.skeleton=A,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new gI,I=this.geometry.attributes.skinWeight;for(let g=0,C=I.count;g<C;g++){A.fromBufferAttribute(I,g);const Q=1/A.manhattanLength();Q!==1/0?A.multiplyScalar(Q):A.set(1,0,0,0),I.setXYZW(g,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode===de?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mD?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(A,I){const g=this.skeleton,C=this.geometry;Mt.fromBufferAttribute(C.attributes.skinIndex,A),Nt.fromBufferAttribute(C.attributes.skinWeight,A),Ut.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let Q=0;Q<4;Q++){const E=Nt.getComponent(Q);if(E!==0){const i=Mt.getComponent(Q);Kt.multiplyMatrices(g.bones[i].matrixWorld,g.boneInverses[i]),I.addScaledVector(_h.copy(Ut).applyMatrix4(Kt),E)}}return I.applyMatrix4(this.bindMatrixInverse)}}class Ft extends aI{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Co extends pI{constructor(A=null,I=1,g=1,C,Q,E,i,o,e=xI,t=xI,a,s){super(null,E,i,o,e,t,C,Q,a,s),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rt=new uA,Wh=new uA;class Bo{constructor(A=[],I=[]){this.uuid=cg(),this.bones=A.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const A=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),I.length===0)this.calculateInverses();else if(A.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,C=this.bones.length;g<C;g++)this.boneInverses.push(new uA)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,I=this.bones.length;A<I;A++){const g=new uA;this.bones[A]&&g.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&g.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const A=this.bones,I=this.boneInverses,g=this.boneMatrices,C=this.boneTexture;for(let Q=0,E=A.length;Q<E;Q++){const i=A[Q]?A[Q].matrixWorld:Wh;Rt.multiplyMatrices(i,I[Q]),Rt.toArray(g,Q*16)}C!==null&&(C.needsUpdate=!0)}clone(){return new Bo(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Math.ceil(A/4)*4,A=Math.max(A,4);const I=new Float32Array(A*A*4);I.set(this.boneMatrices);const g=new Co(I,A,A,tg,Bg);return g.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=g,this}getBoneByName(A){for(let I=0,g=this.bones.length;I<g;I++){const C=this.bones[I];if(C.name===A)return C}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,I){this.uuid=A.uuid;for(let g=0,C=A.bones.length;g<C;g++){const Q=A.bones[g];let E=I[Q];E===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",Q),E=new Ft),this.bones.push(E),this.boneInverses.push(new uA().fromArray(A.boneInverses[g]))}return this.init(),this}toJSON(){const A={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const I=this.bones,g=this.boneInverses;for(let C=0,Q=I.length;C<Q;C++){const E=I[C];A.bones.push(E.uuid);const i=g[C];A.boneInverses.push(i.toArray())}return A}}class Qo extends dI{constructor(A,I,g,C=1){super(A,I,g),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=C}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const yB=new uA,pt=new uA,EE=[],dt=new Pg,Ph=new uA,XB=new yI,zB=new qg;class Vh extends yI{constructor(A,I,g){super(A,I),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(g*16),16),this.instanceColor=null,this.morphTexture=null,this.count=g,this.boundingBox=null,this.boundingSphere=null;for(let C=0;C<g;C++)this.setMatrixAt(C,Ph)}computeBoundingBox(){const A=this.geometry,I=this.count;this.boundingBox===null&&(this.boundingBox=new Pg),A.boundingBox===null&&A.computeBoundingBox(),this.boundingBox.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,yB),dt.copy(A.boundingBox).applyMatrix4(yB),this.boundingBox.union(dt)}computeBoundingSphere(){const A=this.geometry,I=this.count;this.boundingSphere===null&&(this.boundingSphere=new qg),A.boundingSphere===null&&A.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,yB),zB.copy(A.boundingSphere).applyMatrix4(yB),this.boundingSphere.union(zB)}copy(A,I){return super.copy(A,I),this.instanceMatrix.copy(A.instanceMatrix),A.morphTexture!==null&&(this.morphTexture=A.morphTexture.clone()),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}getColorAt(A,I){I.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,I){I.fromArray(this.instanceMatrix.array,A*16)}getMorphAt(A,I){const g=I.morphTargetInfluences,C=this.morphTexture.source.data.data,Q=g.length+1,E=A*Q+1;for(let i=0;i<g.length;i++)g[i]=C[E+i]}raycast(A,I){const g=this.matrixWorld,C=this.count;if(XB.geometry=this.geometry,XB.material=this.material,XB.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zB.copy(this.boundingSphere),zB.applyMatrix4(g),A.ray.intersectsSphere(zB)!==!1))for(let Q=0;Q<C;Q++){this.getMatrixAt(Q,yB),pt.multiplyMatrices(g,yB),XB.matrixWorld=pt,XB.raycast(A,EE);for(let E=0,i=EE.length;E<i;E++){const o=EE[E];o.instanceId=Q,o.object=this,I.push(o)}EE.length=0}}setColorAt(A,I){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),I.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,I){I.toArray(this.instanceMatrix.array,A*16)}setMorphAt(A,I){const g=I.morphTargetInfluences,C=g.length+1;this.morphTexture===null&&(this.morphTexture=new Co(new Float32Array(C*this.count),C,this.count,Ai,Bg));const Q=this.morphTexture.source.data.data;let E=0;for(let e=0;e<g.length;e++)E+=g[e];const i=this.geometry.morphTargetsRelative?1:1-E,o=C*A;Q[o]=i,Q.set(g,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Eo=new Y,jh=new Y,Xh=new fA;class YC{constructor(A=new Y(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Eo.subVectors(g,I).cross(jh.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(Eo),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Xh.getNormalMatrix(A),C=this.coplanarPoint(Eo).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const LC=new qg,iE=new Y;class io{constructor(A=new YC,I=new YC,g=new YC,C=new YC,Q=new YC,E=new YC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=Zg){const g=this.planes,C=A.elements,Q=C[0],E=C[1],i=C[2],o=C[3],e=C[4],t=C[5],a=C[6],s=C[7],r=C[8],S=C[9],w=C[10],n=C[11],h=C[12],U=C[13],M=C[14],l=C[15];if(g[0].setComponents(o-Q,s-e,n-r,l-h).normalize(),g[1].setComponents(o+Q,s+e,n+r,l+h).normalize(),g[2].setComponents(o+E,s+t,n+S,l+U).normalize(),g[3].setComponents(o-E,s-t,n-S,l-U).normalize(),g[4].setComponents(o-i,s-a,n-w,l-M).normalize(),I===Zg)g[5].setComponents(o+i,s+a,n+w,l+M).normalize();else if(I===TQ)g[5].setComponents(i,a,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),LC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),LC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(LC)}intersectsSprite(A){return LC.center.set(0,0,0),LC.radius=.7071067811865476,LC.applyMatrix4(A.matrixWorld),this.intersectsSphere(LC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(iE.x=C.normal.x>0?A.max.x:A.min.x,iE.y=C.normal.y>0?A.max.y:A.min.y,iE.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(iE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oo extends Mg{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new JA(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const oE=new Y,eE=new Y,qt=new uA,$B=new ZQ,tE=new qg,eo=new Y,Yt=new Y;class to extends aI{constructor(A=new zI,I=new oo){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,Q=I.count;C<Q;C++)oE.fromBufferAttribute(I,C-1),eE.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=oE.distanceTo(eE);A.setAttribute("lineDistance",new XI(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),tE.copy(g.boundingSphere),tE.applyMatrix4(C),tE.radius+=Q,A.ray.intersectsSphere(tE)===!1)return;qt.copy(C).invert(),$B.copy(A.ray).applyMatrix4(qt);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=this.isLineSegments?2:1,t=g.index,a=g.attributes.position;if(t!==null){const s=Math.max(0,E.start),r=Math.min(t.count,E.start+E.count);for(let S=s,w=r-1;S<w;S+=e){const n=t.getX(S),h=t.getX(S+1),U=aE(this,A,$B,o,n,h);U&&I.push(U)}if(this.isLineLoop){const S=t.getX(r-1),w=t.getX(s),n=aE(this,A,$B,o,S,w);n&&I.push(n)}}else{const s=Math.max(0,E.start),r=Math.min(a.count,E.start+E.count);for(let S=s,w=r-1;S<w;S+=e){const n=aE(this,A,$B,o,S,S+1);n&&I.push(n)}if(this.isLineLoop){const S=aE(this,A,$B,o,r-1,s);S&&I.push(S)}}}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}}function aE(B,A,I,g,C,Q){const E=B.geometry.attributes.position;if(oE.fromBufferAttribute(E,C),eE.fromBufferAttribute(E,Q),I.distanceSqToSegment(oE,eE,eo,Yt)>g)return;eo.applyMatrix4(B.matrixWorld);const i=A.ray.origin.distanceTo(eo);if(!(i<A.near||i>A.far))return{distance:i,point:Yt.clone().applyMatrix4(B.matrixWorld),index:C,face:null,faceIndex:null,barycoord:null,object:B}}const Lt=new Y,ut=new Y;class mt extends to{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,Q=I.count;C<Q;C+=2)Lt.fromBufferAttribute(I,C),ut.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+Lt.distanceTo(ut);A.setAttribute("lineDistance",new XI(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zh extends to{constructor(A,I){super(A,I),this.isLineLoop=!0,this.type="LineLoop"}}class Ht extends Mg{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new JA(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const ft=new uA,ao=new ZQ,sE=new qg,DE=new Y;class $h extends aI{constructor(A=new zI,I=new Ht){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Points.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),sE.copy(g.boundingSphere),sE.applyMatrix4(C),sE.radius+=Q,A.ray.intersectsSphere(sE)===!1)return;ft.copy(C).invert(),ao.copy(A.ray).applyMatrix4(ft);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=g.index,t=g.attributes.position;if(e!==null){const a=Math.max(0,E.start),s=Math.min(e.count,E.start+E.count);for(let r=a,S=s;r<S;r++){const w=e.getX(r);DE.fromBufferAttribute(t,w),Tt(DE,w,o,C,A,I,this)}}else{const a=Math.max(0,E.start),s=Math.min(t.count,E.start+E.count);for(let r=a,S=s;r<S;r++)DE.fromBufferAttribute(t,r),Tt(DE,r,o,C,A,I,this)}}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}}function Tt(B,A,I,g,C,Q,E){const i=ao.distanceSqToPoint(B);if(i<I){const o=new Y;ao.closestPointToPoint(B,o),o.applyMatrix4(g);const e=C.ray.origin.distanceTo(o);if(e<C.near||e>C.far)return;Q.push({distance:e,distanceToRay:Math.sqrt(i),point:o,index:A,face:null,faceIndex:null,barycoord:null,object:E})}}class gC extends aI{constructor(){super(),this.isGroup=!0,this.type="Group"}}class xt extends pI{constructor(A,I){super({width:A,height:I}),this.isFramebufferTexture=!0,this.magFilter=xI,this.minFilter=xI,this.generateMipmaps=!1,this.needsUpdate=!0}}class bt extends pI{constructor(A,I,g,C,Q,E,i,o,e,t=IB){if(t!==IB&&t!==gB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===IB&&(g=JC),g===void 0&&t===gB&&(g=AB),super(null,C,Q,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:xI,this.minFilter=o!==void 0?o:xI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}class AQ extends zI{constructor(A=1,I=1,g=1,C=32,Q=1,E=!1,i=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:A,radiusBottom:I,height:g,radialSegments:C,heightSegments:Q,openEnded:E,thetaStart:i,thetaLength:o};const e=this;C=Math.floor(C),Q=Math.floor(Q);const t=[],a=[],s=[],r=[];let S=0;const w=[],n=g/2;let h=0;U(),E===!1&&(A>0&&M(!0),I>0&&M(!1)),this.setIndex(t),this.setAttribute("position",new XI(a,3)),this.setAttribute("normal",new XI(s,3)),this.setAttribute("uv",new XI(r,2));function U(){const l=new Y,R=new Y;let J=0;const K=(I-A)/g;for(let p=0;p<=Q;p++){const y=[],G=p/Q,d=G*(I-A)+A;for(let x=0;x<=C;x++){const b=x/C,W=b*o+i,X=Math.sin(W),_=Math.cos(W);R.x=d*X,R.y=-G*g+n,R.z=d*_,a.push(R.x,R.y,R.z),l.set(X,K,_).normalize(),s.push(l.x,l.y,l.z),r.push(b,1-G),y.push(S++)}w.push(y)}for(let p=0;p<C;p++)for(let y=0;y<Q;y++){const G=w[y][p],d=w[y+1][p],x=w[y+1][p+1],b=w[y][p+1];(A>0||y!==0)&&(t.push(G,d,b),J+=3),(I>0||y!==Q-1)&&(t.push(d,x,b),J+=3)}e.addGroup(h,J,0),h+=J}function M(l){const R=S,J=new LA,K=new Y;let p=0;const y=l===!0?A:I,G=l===!0?1:-1;for(let x=1;x<=C;x++)a.push(0,n*G,0),s.push(0,G,0),r.push(.5,.5),S++;const d=S;for(let x=0;x<=C;x++){const b=x/C*o+i,W=Math.cos(b),X=Math.sin(b);K.x=y*X,K.y=n*G,K.z=y*W,a.push(K.x,K.y,K.z),s.push(0,G,0),J.x=W*.5+.5,J.y=X*.5*G+.5,r.push(J.x,J.y),S++}for(let x=0;x<C;x++){const b=R+x,W=d+x;l===!0?t.push(W,W+1,b):t.push(W+1,W,b),p+=3}e.addGroup(h,p,l===!0?1:2),h+=p}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new AQ(A.radiusTop,A.radiusBottom,A.height,A.radialSegments,A.heightSegments,A.openEnded,A.thetaStart,A.thetaLength)}}class hE extends zI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,r=[],S=[],w=[],n=[];for(let h=0;h<t;h++){const U=h*s-E;for(let M=0;M<e;M++){const l=M*a-Q;S.push(l,-U,0),w.push(0,0,1),n.push(M/i),n.push(1-h/o)}}for(let h=0;h<o;h++)for(let U=0;U<i;U++){const M=U+e*h,l=U+e*(h+1),R=U+1+e*(h+1),J=U+1+e*h;r.push(M,l,J),r.push(l,R,J)}this.setIndex(r),this.setAttribute("position",new XI(S,3)),this.setAttribute("normal",new XI(w,3)),this.setAttribute("uv",new XI(n,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new hE(A.width,A.height,A.widthSegments,A.heightSegments)}}class so extends zI{constructor(A=1,I=32,g=16,C=0,Q=Math.PI*2,E=0,i=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:I,heightSegments:g,phiStart:C,phiLength:Q,thetaStart:E,thetaLength:i},I=Math.max(3,Math.floor(I)),g=Math.max(2,Math.floor(g));const o=Math.min(E+i,Math.PI);let e=0;const t=[],a=new Y,s=new Y,r=[],S=[],w=[],n=[];for(let h=0;h<=g;h++){const U=[],M=h/g;let l=0;h===0&&E===0?l=.5/I:h===g&&o===Math.PI&&(l=-.5/I);for(let R=0;R<=I;R++){const J=R/I;a.x=-A*Math.cos(C+J*Q)*Math.sin(E+M*i),a.y=A*Math.cos(E+M*i),a.z=A*Math.sin(C+J*Q)*Math.sin(E+M*i),S.push(a.x,a.y,a.z),s.copy(a).normalize(),w.push(s.x,s.y,s.z),n.push(J+l,1-M),U.push(e++)}t.push(U)}for(let h=0;h<g;h++)for(let U=0;U<I;U++){const M=t[h][U+1],l=t[h][U],R=t[h+1][U],J=t[h+1][U+1];(h!==0||E>0)&&r.push(M,l,J),(h!==g-1||o<Math.PI)&&r.push(l,R,J)}this.setIndex(r),this.setAttribute("position",new XI(S,3)),this.setAttribute("normal",new XI(w,3)),this.setAttribute("uv",new XI(n,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new so(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class Do extends IC{constructor(A){super(A),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CC extends Mg{constructor(A){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new JA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new JA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new LA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jI,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class Yg extends CC{constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new LA(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return OA(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new JA(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new JA(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new JA(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){this._anisotropy>0!=A>0&&this.version++,this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get dispersion(){return this._dispersion}set dispersion(A){this._dispersion>0!=A>0&&this.version++,this._dispersion=A}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.dispersion=A.dispersion,this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}class Ar extends Mg{constructor(A){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new JA(16777215),this.specular=new JA(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new JA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new LA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jI,this.combine=VE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.specular.copy(A.specular),this.shininess=A.shininess,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class Ir extends Mg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class gr extends Mg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}function uC(B,A,I){return!B||!I&&B.constructor===A?B:typeof A.BYTES_PER_ELEMENT=="number"?new A(B):Array.prototype.slice.call(B)}function Ot(B){return ArrayBuffer.isView(B)&&!(B instanceof DataView)}function vt(B){function A(C,Q){return B[C]-B[Q]}const I=B.length,g=new Array(I);for(let C=0;C!==I;++C)g[C]=C;return g.sort(A),g}function ho(B,A,I){const g=B.length,C=new B.constructor(g);for(let Q=0,E=0;E!==g;++Q){const i=I[Q]*A;for(let o=0;o!==A;++o)C[E++]=B[i+o]}return C}function ro(B,A,I,g){let C=1,Q=B[0];for(;Q!==void 0&&Q[g]===void 0;)Q=B[C++];if(Q===void 0)return;let E=Q[g];if(E!==void 0)if(Array.isArray(E))do E=Q[g],E!==void 0&&(A.push(Q.time),I.push.apply(I,E)),Q=B[C++];while(Q!==void 0);else if(E.toArray!==void 0)do E=Q[g],E!==void 0&&(A.push(Q.time),E.toArray(I,I.length)),Q=B[C++];while(Q!==void 0);else do E=Q[g],E!==void 0&&(A.push(Q.time),I.push(E)),Q=B[C++];while(Q!==void 0)}function Cr(B,A,I,g,C=30){const Q=B.clone();Q.name=A;const E=[];for(let o=0;o<Q.tracks.length;++o){const e=Q.tracks[o],t=e.getValueSize(),a=[],s=[];for(let r=0;r<e.times.length;++r){const S=e.times[r]*C;if(!(S<I||S>=g)){a.push(e.times[r]);for(let w=0;w<t;++w)s.push(e.values[r*t+w])}}a.length!==0&&(e.times=uC(a,e.times.constructor),e.values=uC(s,e.values.constructor),E.push(e))}Q.tracks=E;let i=1/0;for(let o=0;o<Q.tracks.length;++o)i>Q.tracks[o].times[0]&&(i=Q.tracks[o].times[0]);for(let o=0;o<Q.tracks.length;++o)Q.tracks[o].shift(-1*i);return Q.resetDuration(),Q}function Br(B,A=0,I=B,g=30){g<=0&&(g=30);const C=I.tracks.length,Q=A/g;for(let E=0;E<C;++E){const i=I.tracks[E],o=i.ValueTypeName;if(o==="bool"||o==="string")continue;const e=B.tracks.find(function(h){return h.name===i.name&&h.ValueTypeName===o});if(e===void 0)continue;let t=0;const a=i.getValueSize();i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(t=a/3);let s=0;const r=e.getValueSize();e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(s=r/3);const S=i.times.length-1;let w;if(Q<=i.times[0]){const h=t,U=a-t;w=i.values.slice(h,U)}else if(Q>=i.times[S]){const h=S*a+t,U=h+a-t;w=i.values.slice(h,U)}else{const h=i.createInterpolant(),U=t,M=a-t;h.evaluate(Q),w=h.resultBuffer.slice(U,M)}o==="quaternion"&&new HI().fromArray(w).normalize().conjugate().toArray(w);const n=e.times.length;for(let h=0;h<n;++h){const U=h*r+s;if(o==="quaternion")HI.multiplyQuaternionsFlat(e.values,U,w,0,e.values,U);else{const M=r-s*2;for(let l=0;l<M;++l)e.values[U+l]-=w[l]}}}return B.blendMode=ve,B}const Qr={convertArray:uC,isTypedArray:Ot,getKeyframeOrder:vt,sortedArray:ho,flattenJSON:ro,subclip:Cr,makeClipAdditive:Br};class IQ{constructor(A,I,g,C){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=C!==void 0?C:new I.constructor(g),this.sampleValues=I,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(A){const I=this.parameterPositions;let g=this._cachedIndex,C=I[g],Q=I[g-1];A:{I:{let E;g:{C:if(!(A<C)){for(let i=g+2;;){if(C===void 0){if(A<Q)break C;return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===i)break;if(Q=C,C=I[++g],A<C)break I}E=I.length;break g}if(!(A>=Q)){const i=I[1];A<i&&(g=2,Q=i);for(let o=g-2;;){if(Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===o)break;if(C=Q,Q=I[--g-1],A>=Q)break I}E=g,g=0;break g}break A}for(;g<E;){const i=g+E>>>1;A<I[i]?E=i:g=i+1}if(C=I[g],Q=I[g-1],Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===void 0)return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,Q,C)}return this.interpolate_(g,Q,A,C)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C;for(let E=0;E!==C;++E)I[E]=g[Q+E];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Er extends IQ{constructor(A,I,g,C){super(A,I,g,C),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:CB,endingEnd:CB}}intervalChanged_(A,I,g){const C=this.parameterPositions;let Q=A-2,E=A+1,i=C[Q],o=C[E];if(i===void 0)switch(this.getSettings_().endingStart){case BB:Q=A,i=2*I-g;break;case HQ:Q=C.length-2,i=I+C[Q]-C[Q+1];break;default:Q=A,i=g}if(o===void 0)switch(this.getSettings_().endingEnd){case BB:E=A,o=2*g-I;break;case HQ:E=1,o=g+C[1]-C[0];break;default:E=A-1,o=I}const e=(g-I)*.5,t=this.valueSize;this._weightPrev=e/(I-i),this._weightNext=e/(o-g),this._offsetPrev=Q*t,this._offsetNext=E*t}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=this._offsetPrev,a=this._offsetNext,s=this._weightPrev,r=this._weightNext,S=(g-I)/(C-I),w=S*S,n=w*S,h=-s*n+2*s*w-s*S,U=(1+s)*n+(-1.5-2*s)*w+(-.5+s)*S+1,M=(-1-r)*n+(1.5+r)*w+.5*S,l=r*n-r*w;for(let R=0;R!==i;++R)Q[R]=h*E[t+R]+U*E[e+R]+M*E[o+R]+l*E[a+R];return Q}}class _t extends IQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=(g-I)/(C-I),a=1-t;for(let s=0;s!==i;++s)Q[s]=E[e+s]*a+E[o+s]*t;return Q}}class ir extends IQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A){return this.copySampleValue_(A-1)}}class Lg{constructor(A,I,g,C){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=uC(I,this.TimeBufferType),this.values=uC(g,this.ValueBufferType),this.setInterpolation(C||this.DefaultInterpolation)}static toJSON(A){const I=A.constructor;let g;if(I.toJSON!==this.toJSON)g=I.toJSON(A);else{g={name:A.name,times:uC(A.times,Array),values:uC(A.values,Array)};const C=A.getInterpolation();C!==A.DefaultInterpolation&&(g.interpolation=C)}return g.type=A.ValueTypeName,g}InterpolantFactoryMethodDiscrete(A){return new ir(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new _t(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new Er(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let I;switch(A){case xB:I=this.InterpolantFactoryMethodDiscrete;break;case bB:I=this.InterpolantFactoryMethodLinear;break;case Ri:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xB;case this.InterpolantFactoryMethodLinear:return bB;case this.InterpolantFactoryMethodSmooth:return Ri}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]+=A}return this}scale(A){if(A!==1){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]*=A}return this}trim(A,I){const g=this.times,C=g.length;let Q=0,E=C-1;for(;Q!==C&&g[Q]<A;)++Q;for(;E!==-1&&g[E]>I;)--E;if(++E,Q!==0||E!==C){Q>=E&&(E=Math.max(E,1),Q=E-1);const i=this.getValueSize();this.times=g.slice(Q,E),this.values=this.values.slice(Q*i,E*i)}return this}validate(){let A=!0;const I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const g=this.times,C=this.values,Q=g.length;Q===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let E=null;for(let i=0;i!==Q;i++){const o=g[i];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,o),A=!1;break}if(E!==null&&E>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,o,E),A=!1;break}E=o}if(C!==void 0&&Ot(C))for(let i=0,o=C.length;i!==o;++i){const e=C[i];if(isNaN(e)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,e),A=!1;break}}return A}optimize(){const A=this.times.slice(),I=this.values.slice(),g=this.getValueSize(),C=this.getInterpolation()===Ri,Q=A.length-1;let E=1;for(let i=1;i<Q;++i){let o=!1;const e=A[i],t=A[i+1];if(e!==t&&(i!==1||e!==A[0]))if(C)o=!0;else{const a=i*g,s=a-g,r=a+g;for(let S=0;S!==g;++S){const w=I[a+S];if(w!==I[s+S]||w!==I[r+S]){o=!0;break}}}if(o){if(i!==E){A[E]=A[i];const a=i*g,s=E*g;for(let r=0;r!==g;++r)I[s+r]=I[a+r]}++E}}if(Q>0){A[E]=A[Q];for(let i=Q*g,o=E*g,e=0;e!==g;++e)I[o+e]=I[i+e];++E}return E!==A.length?(this.times=A.slice(0,E),this.values=I.slice(0,E*g)):(this.times=A,this.values=I),this}clone(){const A=this.times.slice(),I=this.values.slice(),g=this.constructor,C=new g(this.name,A,I);return C.createInterpolant=this.createInterpolant,C}}Lg.prototype.TimeBufferType=Float32Array,Lg.prototype.ValueBufferType=Float32Array,Lg.prototype.DefaultInterpolation=bB;class UB extends Lg{constructor(A,I,g){super(A,I,g)}}UB.prototype.ValueTypeName="bool",UB.prototype.ValueBufferType=Array,UB.prototype.DefaultInterpolation=xB,UB.prototype.InterpolantFactoryMethodLinear=void 0,UB.prototype.InterpolantFactoryMethodSmooth=void 0;class Zt extends Lg{}Zt.prototype.ValueTypeName="color";class MB extends Lg{}MB.prototype.ValueTypeName="number";class or extends IQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=(g-I)/(C-I);let e=A*i;for(let t=e+i;e!==t;e+=4)HI.slerpFlat(Q,0,E,e-i,E,e,o);return Q}}class NB extends Lg{InterpolantFactoryMethodLinear(A){return new or(this.times,this.values,this.getValueSize(),A)}}NB.prototype.ValueTypeName="quaternion",NB.prototype.InterpolantFactoryMethodSmooth=void 0;class KB extends Lg{constructor(A,I,g){super(A,I,g)}}KB.prototype.ValueTypeName="string",KB.prototype.ValueBufferType=Array,KB.prototype.DefaultInterpolation=xB,KB.prototype.InterpolantFactoryMethodLinear=void 0,KB.prototype.InterpolantFactoryMethodSmooth=void 0;class JB extends Lg{}JB.prototype.ValueTypeName="vector";class no{constructor(A="",I=-1,g=[],C=pi){this.name=A,this.tracks=g,this.duration=I,this.blendMode=C,this.uuid=cg(),this.duration<0&&this.resetDuration()}static parse(A){const I=[],g=A.tracks,C=1/(A.fps||1);for(let E=0,i=g.length;E!==i;++E)I.push(tr(g[E]).scale(C));const Q=new this(A.name,A.duration,I,A.blendMode);return Q.uuid=A.uuid,Q}static toJSON(A){const I=[],g=A.tracks,C={name:A.name,duration:A.duration,tracks:I,uuid:A.uuid,blendMode:A.blendMode};for(let Q=0,E=g.length;Q!==E;++Q)I.push(Lg.toJSON(g[Q]));return C}static CreateFromMorphTargetSequence(A,I,g,C){const Q=I.length,E=[];for(let i=0;i<Q;i++){let o=[],e=[];o.push((i+Q-1)%Q,i,(i+1)%Q),e.push(0,1,0);const t=vt(o);o=ho(o,1,t),e=ho(e,1,t),!C&&o[0]===0&&(o.push(Q),e.push(e[0])),E.push(new MB(".morphTargetInfluences["+I[i].name+"]",o,e).scale(1/g))}return new this(A,-1,E)}static findByName(A,I){let g=A;if(!Array.isArray(A)){const C=A;g=C.geometry&&C.geometry.animations||C.animations}for(let C=0;C<g.length;C++)if(g[C].name===I)return g[C];return null}static CreateClipsFromMorphTargetSequences(A,I,g){const C={},Q=/^([\w-]*?)([\d]+)$/;for(let i=0,o=A.length;i<o;i++){const e=A[i],t=e.name.match(Q);if(t&&t.length>1){const a=t[1];let s=C[a];s||(C[a]=s=[]),s.push(e)}}const E=[];for(const i in C)E.push(this.CreateFromMorphTargetSequence(i,C[i],I,g));return E}static parseAnimation(A,I){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(t,a,s,r,S){if(s.length!==0){const w=[],n=[];ro(s,w,n,r),w.length!==0&&S.push(new t(a,w,n))}},C=[],Q=A.name||"default",E=A.fps||30,i=A.blendMode;let o=A.length||-1;const e=A.hierarchy||[];for(let t=0;t<e.length;t++){const a=e[t].keys;if(!(!a||a.length===0))if(a[0].morphTargets){const s={};let r;for(r=0;r<a.length;r++)if(a[r].morphTargets)for(let S=0;S<a[r].morphTargets.length;S++)s[a[r].morphTargets[S]]=-1;for(const S in s){const w=[],n=[];for(let h=0;h!==a[r].morphTargets.length;++h){const U=a[r];w.push(U.time),n.push(U.morphTarget===S?1:0)}C.push(new MB(".morphTargetInfluence["+S+"]",w,n))}o=s.length*E}else{const s=".bones["+I[t].name+"]";g(JB,s+".position",a,"pos",C),g(NB,s+".quaternion",a,"rot",C),g(JB,s+".scale",a,"scl",C)}}return C.length===0?null:new this(Q,o,C,i)}resetDuration(){const A=this.tracks;let I=0;for(let g=0,C=A.length;g!==C;++g){const Q=this.tracks[g];I=Math.max(I,Q.times[Q.times.length-1])}return this.duration=I,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let I=0;I<this.tracks.length;I++)A=A&&this.tracks[I].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let I=0;I<this.tracks.length;I++)A.push(this.tracks[I].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function er(B){switch(B.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return MB;case"vector":case"vector2":case"vector3":case"vector4":return JB;case"color":return Zt;case"quaternion":return NB;case"bool":case"boolean":return UB;case"string":return KB}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+B)}function tr(B){if(B.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=er(B.type);if(B.times===void 0){const I=[],g=[];ro(B.keys,I,g,"value"),B.times=I,B.values=g}return A.parse!==void 0?A.parse(B):new A(B.name,B.times,B.values,B.interpolation)}const lC={enabled:!1,files:{},add:function(B,A){this.enabled!==!1&&(this.files[B]=A)},get:function(B){if(this.enabled!==!1)return this.files[B]},remove:function(B){delete this.files[B]},clear:function(){this.files={}}};class ar{constructor(A,I,g){const C=this;let Q=!1,E=0,i=0,o;const e=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(t){i++,Q===!1&&C.onStart!==void 0&&C.onStart(t,E,i),Q=!0},this.itemEnd=function(t){E++,C.onProgress!==void 0&&C.onProgress(t,E,i),E===i&&(Q=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(t){C.onError!==void 0&&C.onError(t)},this.resolveURL=function(t){return o?o(t):t},this.setURLModifier=function(t){return o=t,this},this.addHandler=function(t,a){return e.push(t,a),this},this.removeHandler=function(t){const a=e.indexOf(t);return a!==-1&&e.splice(a,2),this},this.getHandler=function(t){for(let a=0,s=e.length;a<s;a+=2){const r=e[a],S=e[a+1];if(r.global&&(r.lastIndex=0),r.test(t))return S}return null}}}const sr=new ar;class GC{constructor(A){this.manager=A!==void 0?A:sr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,Q){g.load(A,C,I,Q)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}GC.DEFAULT_MATERIAL_NAME="__DEFAULT";const BC={};class Dr extends Error{constructor(A,I){super(A),this.response=I}}class gQ extends GC{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=lC.get(A);if(Q!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(Q),this.manager.itemEnd(A)},0),Q;if(BC[A]!==void 0){BC[A].push({onLoad:I,onProgress:g,onError:C});return}BC[A]=[],BC[A].push({onLoad:I,onProgress:g,onError:C});const E=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,o=this.responseType;fetch(E).then(e=>{if(e.status===200||e.status===0){if(e.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||e.body===void 0||e.body.getReader===void 0)return e;const t=BC[A],a=e.body.getReader(),s=e.headers.get("X-File-Size")||e.headers.get("Content-Length"),r=s?parseInt(s):0,S=r!==0;let w=0;const n=new ReadableStream({start(h){U();function U(){a.read().then(({done:M,value:l})=>{if(M)h.close();else{w+=l.byteLength;const R=new ProgressEvent("progress",{lengthComputable:S,loaded:w,total:r});for(let J=0,K=t.length;J<K;J++){const p=t[J];p.onProgress&&p.onProgress(R)}h.enqueue(l),U()}},M=>{h.error(M)})}}});return new Response(n)}else throw new Dr(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(t=>new DOMParser().parseFromString(t,i));case"json":return e.json();default:if(i===void 0)return e.text();{const t=/charset="?([^;"\s]*)"?/i.exec(i),a=t&&t[1]?t[1].toLowerCase():void 0,s=new TextDecoder(a);return e.arrayBuffer().then(r=>s.decode(r))}}}).then(e=>{lC.add(A,e);const t=BC[A];delete BC[A];for(let a=0,s=t.length;a<s;a++){const r=t[a];r.onLoad&&r.onLoad(e)}}).catch(e=>{const t=BC[A];if(t===void 0)throw this.manager.itemError(A),e;delete BC[A];for(let a=0,s=t.length;a<s;a++){const r=t[a];r.onError&&r.onError(e)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class hr extends GC{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=lC.get(A);if(E!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E;const i=_B("img");function o(){t(),lC.add(A,this),I&&I(this),Q.manager.itemEnd(A)}function e(a){t(),C&&C(a),Q.manager.itemError(A),Q.manager.itemEnd(A)}function t(){i.removeEventListener("load",o,!1),i.removeEventListener("error",e,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",e,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),Q.manager.itemStart(A),i.src=A,i}}class rr extends GC{constructor(A){super(A)}load(A,I,g,C){const Q=this,E=new Co,i=new gQ(this.manager);return i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setPath(this.path),i.setWithCredentials(Q.withCredentials),i.load(A,function(o){let e;try{e=Q.parse(o)}catch(t){if(C!==void 0)C(t);else{console.error(t);return}}e.image!==void 0?E.image=e.image:e.data!==void 0&&(E.image.width=e.width,E.image.height=e.height,E.image.data=e.data),E.wrapS=e.wrapS!==void 0?e.wrapS:pg,E.wrapT=e.wrapT!==void 0?e.wrapT:pg,E.magFilter=e.magFilter!==void 0?e.magFilter:mI,E.minFilter=e.minFilter!==void 0?e.minFilter:mI,E.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(E.colorSpace=e.colorSpace),e.flipY!==void 0&&(E.flipY=e.flipY),e.format!==void 0&&(E.format=e.format),e.type!==void 0&&(E.type=e.type),e.mipmaps!==void 0&&(E.mipmaps=e.mipmaps,E.minFilter=dg),e.mipmapCount===1&&(E.minFilter=mI),e.generateMipmaps!==void 0&&(E.generateMipmaps=e.generateMipmaps),E.needsUpdate=!0,I&&I(E,e)},g,C),E}}class So extends GC{constructor(A){super(A)}load(A,I,g,C){const Q=new pI,E=new hr(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){Q.image=i,Q.needsUpdate=!0,I!==void 0&&I(Q)},g,C),Q}}class wo extends aI{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new JA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(I.object.target=this.target.uuid),I}}const co=new uA,Wt=new Y,Pt=new Y;class lo{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new LA(512,512),this.map=null,this.mapPass=null,this.matrix=new uA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new LA(1,1),this._viewportCount=1,this._viewports=[new gI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;Wt.setFromMatrixPosition(A.matrixWorld),I.position.copy(Wt),Pt.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Pt),I.updateMatrixWorld(),co.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(co)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.intensity!==1&&(A.intensity=this.intensity),this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class nr extends lo{constructor(){super(new Ag(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const I=this.camera,g=EB*2*A.angle*this.focus,C=this.mapSize.width/this.mapSize.height,Q=A.distance||I.far;(g!==I.fov||C!==I.aspect||Q!==I.far)&&(I.fov=g,I.aspect=C,I.far=Q,I.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class Sr extends wo{constructor(A,I,g=0,C=Math.PI/3,Q=0,E=2){super(A,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(aI.DEFAULT_UP),this.updateMatrix(),this.target=new aI,this.distance=g,this.angle=C,this.penumbra=Q,this.decay=E,this.map=null,this.shadow=new nr}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const Vt=new uA,CQ=new Y,Go=new Y;class wr extends lo{constructor(){super(new Ag(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new LA(4,2),this._viewportCount=6,this._viewports=[new gI(2,1,1,1),new gI(0,1,1,1),new gI(3,1,1,1),new gI(1,1,1,1),new gI(3,0,1,1),new gI(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,Q=A.distance||g.far;Q!==g.far&&(g.far=Q,g.updateProjectionMatrix()),CQ.setFromMatrixPosition(A.matrixWorld),g.position.copy(CQ),Go.copy(g.position),Go.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(Go),g.updateMatrixWorld(),C.makeTranslation(-CQ.x,-CQ.y,-CQ.z),Vt.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vt)}}class cr extends wo{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new wr}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class ko extends ct{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=e*this.view.offsetX,E=Q+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}class lr extends lo{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jt extends wo{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(aI.DEFAULT_UP),this.updateMatrix(),this.target=new aI,this.shadow=new lr}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class BQ{static decodeText(A){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(A);let I="";for(let g=0,C=A.length;g<C;g++)I+=String.fromCharCode(A[g]);try{return decodeURIComponent(escape(I))}catch{return I}}static extractUrlBase(A){const I=A.lastIndexOf("/");return I===-1?"./":A.slice(0,I+1)}static resolveURL(A,I){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(A)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:I+A)}}class Gr extends GC{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=lC.get(A);if(E!==void 0){if(Q.manager.itemStart(A),E.then){E.then(e=>{I&&I(e),Q.manager.itemEnd(A)}).catch(e=>{C&&C(e)});return}return setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E}const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader;const o=fetch(A,i).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(Q.options,{colorSpaceConversion:"none"}))}).then(function(e){return lC.add(A,e),I&&I(e),Q.manager.itemEnd(A),e}).catch(function(e){C&&C(e),lC.remove(A),Q.manager.itemError(A),Q.manager.itemEnd(A)});lC.add(A,o),Q.manager.itemStart(A)}}class kr extends Ag{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class yr{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xt(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=Xt();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function Xt(){return performance.now()}class Ur{constructor(A,I,g){this.binding=A,this.valueSize=g;let C,Q,E;switch(I){case"quaternion":C=this._slerp,Q=this._slerpAdditive,E=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(g*6),this._workIndex=5;break;case"string":case"bool":C=this._select,Q=this._select,E=this._setAdditiveIdentityOther,this.buffer=new Array(g*5);break;default:C=this._lerp,Q=this._lerpAdditive,E=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(g*5)}this._mixBufferRegion=C,this._mixBufferRegionAdditive=Q,this._setIdentity=E,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(A,I){const g=this.buffer,C=this.valueSize,Q=A*C+C;let E=this.cumulativeWeight;if(E===0){for(let i=0;i!==C;++i)g[Q+i]=g[i];E=I}else{E+=I;const i=I/E;this._mixBufferRegion(g,Q,0,i,C)}this.cumulativeWeight=E}accumulateAdditive(A){const I=this.buffer,g=this.valueSize,C=g*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(I,C,0,A,g),this.cumulativeWeightAdditive+=A}apply(A){const I=this.valueSize,g=this.buffer,C=A*I+I,Q=this.cumulativeWeight,E=this.cumulativeWeightAdditive,i=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Q<1){const o=I*this._origIndex;this._mixBufferRegion(g,C,o,1-Q,I)}E>0&&this._mixBufferRegionAdditive(g,C,this._addIndex*I,1,I);for(let o=I,e=I+I;o!==e;++o)if(g[o]!==g[o+I]){i.setValue(g,C);break}}saveOriginalState(){const A=this.binding,I=this.buffer,g=this.valueSize,C=g*this._origIndex;A.getValue(I,C);for(let Q=g,E=C;Q!==E;++Q)I[Q]=I[C+Q%g];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const A=this.valueSize*3;this.binding.setValue(this.buffer,A)}_setAdditiveIdentityNumeric(){const A=this._addIndex*this.valueSize,I=A+this.valueSize;for(let g=A;g<I;g++)this.buffer[g]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const A=this._origIndex*this.valueSize,I=this._addIndex*this.valueSize;for(let g=0;g<this.valueSize;g++)this.buffer[I+g]=this.buffer[A+g]}_select(A,I,g,C,Q){if(C>=.5)for(let E=0;E!==Q;++E)A[I+E]=A[g+E]}_slerp(A,I,g,C){HI.slerpFlat(A,I,A,I,A,g,C)}_slerpAdditive(A,I,g,C,Q){const E=this._workIndex*Q;HI.multiplyQuaternionsFlat(A,E,A,I,A,g),HI.slerpFlat(A,I,A,I,A,E,C)}_lerp(A,I,g,C,Q){const E=1-C;for(let i=0;i!==Q;++i){const o=I+i;A[o]=A[o]*E+A[g+i]*C}}_lerpAdditive(A,I,g,C,Q){for(let E=0;E!==Q;++E){const i=I+E;A[i]=A[i]+A[g+E]*C}}}const yo="\\[\\]\\.:\\/",Mr=new RegExp("["+yo+"]","g"),Uo="[^"+yo+"]",Nr="[^"+yo.replace("\\.","")+"]",Kr=/((?:WC+[\/:])*)/.source.replace("WC",Uo),Jr=/(WCOD+)?/.source.replace("WCOD",Nr),Fr=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uo),Rr=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uo),pr=new RegExp("^"+Kr+Jr+Fr+Rr+"$"),dr=["material","materials","bones","map"];class qr{constructor(A,I,g){const C=g||BI.parseTrackName(I);this._targetGroup=A,this._bindings=A.subscribe_(I,C)}getValue(A,I){this.bind();const g=this._targetGroup.nCachedObjects_,C=this._bindings[g];C!==void 0&&C.getValue(A,I)}setValue(A,I){const g=this._bindings;for(let C=this._targetGroup.nCachedObjects_,Q=g.length;C!==Q;++C)g[C].setValue(A,I)}bind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].bind()}unbind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].unbind()}}class BI{constructor(A,I,g){this.path=I,this.parsedPath=g||BI.parseTrackName(I),this.node=BI.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,I,g){return A&&A.isAnimationObjectGroup?new BI.Composite(A,I,g):new BI(A,I,g)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(Mr,"")}static parseTrackName(A){const I=pr.exec(A);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const g={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},C=g.nodeName&&g.nodeName.lastIndexOf(".");if(C!==void 0&&C!==-1){const Q=g.nodeName.substring(C+1);dr.indexOf(Q)!==-1&&(g.nodeName=g.nodeName.substring(0,C),g.objectName=Q)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return g}static findNode(A,I){if(I===void 0||I===""||I==="."||I===-1||I===A.name||I===A.uuid)return A;if(A.skeleton){const g=A.skeleton.getBoneByName(I);if(g!==void 0)return g}if(A.children){const g=function(Q){for(let E=0;E<Q.length;E++){const i=Q[E];if(i.name===I||i.uuid===I)return i;const o=g(i.children);if(o)return o}return null},C=g(A.children);if(C)return C}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,I){A[I]=this.targetObject[this.propertyName]}_getValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)A[I++]=g[C]}_getValue_arrayElement(A,I){A[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,I){this.resolvedProperty.toArray(A,I)}_setValue_direct(A,I){this.targetObject[this.propertyName]=A[I]}_setValue_direct_setNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++]}_setValue_array_setNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,I){this.resolvedProperty[this.propertyIndex]=A[I]}_setValue_arrayElement_setNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,I){this.resolvedProperty.fromArray(A,I)}_setValue_fromArray_setNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,I){this.bind(),this.getValue(A,I)}_setValue_unbound(A,I){this.bind(),this.setValue(A,I)}bind(){let A=this.node;const I=this.parsedPath,g=I.objectName,C=I.propertyName;let Q=I.propertyIndex;if(A||(A=BI.findNode(this.rootNode,I.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(g){let e=I.objectIndex;switch(g){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let t=0;t<A.length;t++)if(A[t].name===e){e=t;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[g]}if(e!==void 0){if(A[e]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[e]}}const E=A[C];if(E===void 0){const e=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+e+"."+C+" but it wasn't found.",A);return}let i=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(Q!==void 0){if(C==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[Q]!==void 0&&(Q=A.morphTargetDictionary[Q])}o=this.BindingType.ArrayElement,this.resolvedProperty=E,this.propertyIndex=Q}else E.fromArray!==void 0&&E.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=E):Array.isArray(E)?(o=this.BindingType.EntireArray,this.resolvedProperty=E):this.propertyName=C;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}BI.Composite=qr,BI.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},BI.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},BI.prototype.GetterByBindingType=[BI.prototype._getValue_direct,BI.prototype._getValue_array,BI.prototype._getValue_arrayElement,BI.prototype._getValue_toArray],BI.prototype.SetterByBindingTypeAndVersioning=[[BI.prototype._setValue_direct,BI.prototype._setValue_direct_setNeedsUpdate,BI.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[BI.prototype._setValue_array,BI.prototype._setValue_array_setNeedsUpdate,BI.prototype._setValue_array_setMatrixWorldNeedsUpdate],[BI.prototype._setValue_arrayElement,BI.prototype._setValue_arrayElement_setNeedsUpdate,BI.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[BI.prototype._setValue_fromArray,BI.prototype._setValue_fromArray_setNeedsUpdate,BI.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yr{constructor(A,I,g=null,C=I.blendMode){this._mixer=A,this._clip=I,this._localRoot=g,this.blendMode=C;const Q=I.tracks,E=Q.length,i=new Array(E),o={endingStart:CB,endingEnd:CB};for(let e=0;e!==E;++e){const t=Q[e].createInterpolant(null);i[e]=t,t.settings=o}this._interpolantSettings=o,this._interpolants=i,this._propertyBindings=new Array(E),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=fD,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(A){return this._startTime=A,this}setLoop(A,I){return this.loop=A,this.repetitions=I,this}setEffectiveWeight(A){return this.weight=A,this._effectiveWeight=this.enabled?A:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(A){return this._scheduleFading(A,0,1)}fadeOut(A){return this._scheduleFading(A,1,0)}crossFadeFrom(A,I,g){if(A.fadeOut(I),this.fadeIn(I),g){const C=this._clip.duration,Q=A._clip.duration,E=Q/C,i=C/Q;A.warp(1,E,I),this.warp(i,1,I)}return this}crossFadeTo(A,I,g){return A.crossFadeFrom(this,I,g)}stopFading(){const A=this._weightInterpolant;return A!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(A)),this}setEffectiveTimeScale(A){return this.timeScale=A,this._effectiveTimeScale=this.paused?0:A,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(A){return this.timeScale=this._clip.duration/A,this.stopWarping()}syncWith(A){return this.time=A.time,this.timeScale=A.timeScale,this.stopWarping()}halt(A){return this.warp(this._effectiveTimeScale,0,A)}warp(A,I,g){const C=this._mixer,Q=C.time,E=this.timeScale;let i=this._timeScaleInterpolant;i===null&&(i=C._lendControlInterpolant(),this._timeScaleInterpolant=i);const o=i.parameterPositions,e=i.sampleValues;return o[0]=Q,o[1]=Q+g,e[0]=A/E,e[1]=I/E,this}stopWarping(){const A=this._timeScaleInterpolant;return A!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(A)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(A,I,g,C){if(!this.enabled){this._updateWeight(A);return}const Q=this._startTime;if(Q!==null){const o=(A-Q)*g;o<0||g===0?I=0:(this._startTime=null,I=g*o)}I*=this._updateTimeScale(A);const E=this._updateTime(I),i=this._updateWeight(A);if(i>0){const o=this._interpolants,e=this._propertyBindings;switch(this.blendMode){case ve:for(let t=0,a=o.length;t!==a;++t)o[t].evaluate(E),e[t].accumulateAdditive(i);break;case pi:default:for(let t=0,a=o.length;t!==a;++t)o[t].evaluate(E),e[t].accumulate(C,i)}}}_updateWeight(A){let I=0;if(this.enabled){I=this.weight;const g=this._weightInterpolant;if(g!==null){const C=g.evaluate(A)[0];I*=C,A>g.parameterPositions[1]&&(this.stopFading(),C===0&&(this.enabled=!1))}}return this._effectiveWeight=I,I}_updateTimeScale(A){let I=0;if(!this.paused){I=this.timeScale;const g=this._timeScaleInterpolant;if(g!==null){const C=g.evaluate(A)[0];I*=C,A>g.parameterPositions[1]&&(this.stopWarping(),I===0?this.paused=!0:this.timeScale=I)}}return this._effectiveTimeScale=I,I}_updateTime(A){const I=this._clip.duration,g=this.loop;let C=this.time+A,Q=this._loopCount;const E=g===TD;if(A===0)return Q===-1?C:E&&(Q&1)===1?I-C:C;if(g===HD){Q===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));A:{if(C>=I)C=I;else if(C<0)C=0;else{this.time=C;break A}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=C,this._mixer.dispatchEvent({type:"finished",action:this,direction:A<0?-1:1})}}else{if(Q===-1&&(A>=0?(Q=0,this._setEndings(!0,this.repetitions===0,E)):this._setEndings(this.repetitions===0,!0,E)),C>=I||C<0){const i=Math.floor(C/I);C-=I*i,Q+=Math.abs(i);const o=this.repetitions-Q;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,C=A>0?I:0,this.time=C,this._mixer.dispatchEvent({type:"finished",action:this,direction:A>0?1:-1});else{if(o===1){const e=A<0;this._setEndings(e,!e,E)}else this._setEndings(!1,!1,E);this._loopCount=Q,this.time=C,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:i})}}else this.time=C;if(E&&(Q&1)===1)return I-C}return C}_setEndings(A,I,g){const C=this._interpolantSettings;g?(C.endingStart=BB,C.endingEnd=BB):(A?C.endingStart=this.zeroSlopeAtStart?BB:CB:C.endingStart=HQ,I?C.endingEnd=this.zeroSlopeAtEnd?BB:CB:C.endingEnd=HQ)}_scheduleFading(A,I,g){const C=this._mixer,Q=C.time;let E=this._weightInterpolant;E===null&&(E=C._lendControlInterpolant(),this._weightInterpolant=E);const i=E.parameterPositions,o=E.sampleValues;return i[0]=Q,o[0]=I,i[1]=Q+A,o[1]=g,this}}const Lr=new Float32Array(1);class ur extends FC{constructor(A){super(),this._root=A,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(A,I){const g=A._localRoot||this._root,C=A._clip.tracks,Q=C.length,E=A._propertyBindings,i=A._interpolants,o=g.uuid,e=this._bindingsByRootAndName;let t=e[o];t===void 0&&(t={},e[o]=t);for(let a=0;a!==Q;++a){const s=C[a],r=s.name;let S=t[r];if(S!==void 0)++S.referenceCount,E[a]=S;else{if(S=E[a],S!==void 0){S._cacheIndex===null&&(++S.referenceCount,this._addInactiveBinding(S,o,r));continue}const w=I&&I._propertyBindings[a].binding.parsedPath;S=new Ur(BI.create(g,r,w),s.ValueTypeName,s.getValueSize()),++S.referenceCount,this._addInactiveBinding(S,o,r),E[a]=S}i[a].resultBuffer=S.buffer}}_activateAction(A){if(!this._isActiveAction(A)){if(A._cacheIndex===null){const g=(A._localRoot||this._root).uuid,C=A._clip.uuid,Q=this._actionsByClip[C];this._bindAction(A,Q&&Q.knownActions[0]),this._addInactiveAction(A,C,g)}const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];Q.useCount++===0&&(this._lendBinding(Q),Q.saveOriginalState())}this._lendAction(A)}}_deactivateAction(A){if(this._isActiveAction(A)){const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];--Q.useCount===0&&(Q.restoreOriginalState(),this._takeBackBinding(Q))}this._takeBackAction(A)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const A=this;this.stats={actions:{get total(){return A._actions.length},get inUse(){return A._nActiveActions}},bindings:{get total(){return A._bindings.length},get inUse(){return A._nActiveBindings}},controlInterpolants:{get total(){return A._controlInterpolants.length},get inUse(){return A._nActiveControlInterpolants}}}}_isActiveAction(A){const I=A._cacheIndex;return I!==null&&I<this._nActiveActions}_addInactiveAction(A,I,g){const C=this._actions,Q=this._actionsByClip;let E=Q[I];if(E===void 0)E={knownActions:[A],actionByRoot:{}},A._byClipCacheIndex=0,Q[I]=E;else{const i=E.knownActions;A._byClipCacheIndex=i.length,i.push(A)}A._cacheIndex=C.length,C.push(A),E.actionByRoot[g]=A}_removeInactiveAction(A){const I=this._actions,g=I[I.length-1],C=A._cacheIndex;g._cacheIndex=C,I[C]=g,I.pop(),A._cacheIndex=null;const Q=A._clip.uuid,E=this._actionsByClip,i=E[Q],o=i.knownActions,e=o[o.length-1],t=A._byClipCacheIndex;e._byClipCacheIndex=t,o[t]=e,o.pop(),A._byClipCacheIndex=null;const a=i.actionByRoot,s=(A._localRoot||this._root).uuid;delete a[s],o.length===0&&delete E[Q],this._removeInactiveBindingsForAction(A)}_removeInactiveBindingsForAction(A){const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];--Q.referenceCount===0&&this._removeInactiveBinding(Q)}}_lendAction(A){const I=this._actions,g=A._cacheIndex,C=this._nActiveActions++,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_takeBackAction(A){const I=this._actions,g=A._cacheIndex,C=--this._nActiveActions,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_addInactiveBinding(A,I,g){const C=this._bindingsByRootAndName,Q=this._bindings;let E=C[I];E===void 0&&(E={},C[I]=E),E[g]=A,A._cacheIndex=Q.length,Q.push(A)}_removeInactiveBinding(A){const I=this._bindings,g=A.binding,C=g.rootNode.uuid,Q=g.path,E=this._bindingsByRootAndName,i=E[C],o=I[I.length-1],e=A._cacheIndex;o._cacheIndex=e,I[e]=o,I.pop(),delete i[Q],Object.keys(i).length===0&&delete E[C]}_lendBinding(A){const I=this._bindings,g=A._cacheIndex,C=this._nActiveBindings++,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_takeBackBinding(A){const I=this._bindings,g=A._cacheIndex,C=--this._nActiveBindings,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_lendControlInterpolant(){const A=this._controlInterpolants,I=this._nActiveControlInterpolants++;let g=A[I];return g===void 0&&(g=new _t(new Float32Array(2),new Float32Array(2),1,Lr),g.__cacheIndex=I,A[I]=g),g}_takeBackControlInterpolant(A){const I=this._controlInterpolants,g=A.__cacheIndex,C=--this._nActiveControlInterpolants,Q=I[C];A.__cacheIndex=C,I[C]=A,Q.__cacheIndex=g,I[g]=Q}clipAction(A,I,g){const C=I||this._root,Q=C.uuid;let E=typeof A=="string"?no.findByName(C,A):A;const i=E!==null?E.uuid:A,o=this._actionsByClip[i];let e=null;if(g===void 0&&(E!==null?g=E.blendMode:g=pi),o!==void 0){const a=o.actionByRoot[Q];if(a!==void 0&&a.blendMode===g)return a;e=o.knownActions[0],E===null&&(E=e._clip)}if(E===null)return null;const t=new Yr(this,E,I,g);return this._bindAction(t,e),this._addInactiveAction(t,i,Q),t}existingAction(A,I){const g=I||this._root,C=g.uuid,Q=typeof A=="string"?no.findByName(g,A):A,E=Q?Q.uuid:A,i=this._actionsByClip[E];return i!==void 0&&i.actionByRoot[C]||null}stopAllAction(){const A=this._actions,I=this._nActiveActions;for(let g=I-1;g>=0;--g)A[g].stop();return this}update(A){A*=this.timeScale;const I=this._actions,g=this._nActiveActions,C=this.time+=A,Q=Math.sign(A),E=this._accuIndex^=1;for(let e=0;e!==g;++e)I[e]._update(C,A,Q,E);const i=this._bindings,o=this._nActiveBindings;for(let e=0;e!==o;++e)i[e].apply(E);return this}setTime(A){this.time=0;for(let I=0;I<this._actions.length;I++)this._actions[I].time=0;return this.update(A)}getRoot(){return this._root}uncacheClip(A){const I=this._actions,g=A.uuid,C=this._actionsByClip,Q=C[g];if(Q!==void 0){const E=Q.knownActions;for(let i=0,o=E.length;i!==o;++i){const e=E[i];this._deactivateAction(e);const t=e._cacheIndex,a=I[I.length-1];e._cacheIndex=null,e._byClipCacheIndex=null,a._cacheIndex=t,I[t]=a,I.pop(),this._removeInactiveBindingsForAction(e)}delete C[g]}}uncacheRoot(A){const I=A.uuid,g=this._actionsByClip;for(const E in g){const i=g[E].actionByRoot,o=i[I];o!==void 0&&(this._deactivateAction(o),this._removeInactiveAction(o))}const C=this._bindingsByRootAndName,Q=C[I];if(Q!==void 0)for(const E in Q){const i=Q[E];i.restoreOriginalState(),this._removeInactiveBinding(i)}}uncacheAction(A,I){const g=this.existingAction(A,I);g!==null&&(this._deactivateAction(g),this._removeInactiveAction(g))}}const zt=new LA;class mr{constructor(A=new LA(1/0,1/0),I=new LA(-1/0,-1/0)){this.isBox2=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=zt.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(A){return this.isEmpty()?A.set(0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,zt).distanceTo(A)}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}function $t(B,A,I,g){const C=Hr(g);switch(I){case He:return B*A;case Te:return B*A;case xe:return B*A*2;case Ai:return B*A/C.components*C.byteLength;case Ii:return B*A/C.components*C.byteLength;case be:return B*A*2/C.components*C.byteLength;case gi:return B*A*2/C.components*C.byteLength;case fe:return B*A*3/C.components*C.byteLength;case tg:return B*A*4/C.components*C.byteLength;case Ci:return B*A*4/C.components*C.byteLength;case qQ:case YQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case LQ:case uQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case Qi:case ii:return Math.max(B,16)*Math.max(A,8)/4;case Bi:case Ei:return Math.max(B,8)*Math.max(A,8)/2;case oi:case ei:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case ti:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case ai:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case si:return Math.floor((B+4)/5)*Math.floor((A+3)/4)*16;case Di:return Math.floor((B+4)/5)*Math.floor((A+4)/5)*16;case hi:return Math.floor((B+5)/6)*Math.floor((A+4)/5)*16;case ri:return Math.floor((B+5)/6)*Math.floor((A+5)/6)*16;case ni:return Math.floor((B+7)/8)*Math.floor((A+4)/5)*16;case Si:return Math.floor((B+7)/8)*Math.floor((A+5)/6)*16;case wi:return Math.floor((B+7)/8)*Math.floor((A+7)/8)*16;case ci:return Math.floor((B+9)/10)*Math.floor((A+4)/5)*16;case li:return Math.floor((B+9)/10)*Math.floor((A+5)/6)*16;case Gi:return Math.floor((B+9)/10)*Math.floor((A+7)/8)*16;case ki:return Math.floor((B+9)/10)*Math.floor((A+9)/10)*16;case yi:return Math.floor((B+11)/12)*Math.floor((A+9)/10)*16;case Ui:return Math.floor((B+11)/12)*Math.floor((A+11)/12)*16;case mQ:case Mi:case Ni:return Math.ceil(B/4)*Math.ceil(A/4)*16;case Oe:case Ki:return Math.ceil(B/4)*Math.ceil(A/4)*8;case Ji:case Fi:return Math.ceil(B/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function Hr(B){switch(B){case wg:case Le:return{byteLength:1,components:1};case TB:case ue:case _g:return{byteLength:2,components:1};case zE:case $E:return{byteLength:2,components:4};case JC:case XE:case Bg:return{byteLength:4,components:1};case me:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${B}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xg}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xg);function Aa(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function fr(B){const A=new WeakMap;function I(i,o){const e=i.array,t=i.usage,a=e.byteLength,s=B.createBuffer();B.bindBuffer(o,s),B.bufferData(o,e,t),i.onUploadCallback();let r;if(e instanceof Float32Array)r=B.FLOAT;else if(e instanceof Uint16Array)i.isFloat16BufferAttribute?r=B.HALF_FLOAT:r=B.UNSIGNED_SHORT;else if(e instanceof Int16Array)r=B.SHORT;else if(e instanceof Uint32Array)r=B.UNSIGNED_INT;else if(e instanceof Int32Array)r=B.INT;else if(e instanceof Int8Array)r=B.BYTE;else if(e instanceof Uint8Array)r=B.UNSIGNED_BYTE;else if(e instanceof Uint8ClampedArray)r=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+e);return{buffer:s,type:r,bytesPerElement:e.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,e){const t=o.array,a=o.updateRanges;if(B.bindBuffer(e,i),a.length===0)B.bufferSubData(e,0,t);else{a.sort((r,S)=>r.start-S.start);let s=0;for(let r=1;r<a.length;r++){const S=a[s],w=a[r];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++s,a[s]=w)}a.length=s+1;for(let r=0,S=a.length;r<S;r++){const w=a[r];B.bufferSubData(e,w.start*t.BYTES_PER_ELEMENT,t,w.start,w.count)}o.clearUpdateRanges()}o.onUploadCallback()}function C(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function Q(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(B.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){const t=A.get(i);(!t||t.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}const e=A.get(i);if(e===void 0)A.set(i,I(i,o));else if(e.version<i.version){if(e.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(e.buffer,i,o),e.version=i.version}}return{get:C,remove:Q,update:E}}var Tr=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xr=`#ifdef USE_ALPHAHASH
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
#endif`,br=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Or=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vr=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_r=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zr=`#ifdef USE_AOMAP
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
#endif`,Wr=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pr=`#ifdef USE_BATCHING
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
#endif`,Vr=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jr=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xr=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zr=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$r=`#ifdef USE_IRIDESCENCE
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
#endif`,An=`#ifdef USE_BUMPMAP
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
#endif`,In=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bn=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qn=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,En=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,on=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,en=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tn=`#define PI 3.141592653589793
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
} // validated`,an=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sn=`vec3 transformedNormal = objectNormal;
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
#endif`,Dn=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hn=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rn=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nn=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sn="gl_FragColor = linearToOutputTexel( gl_FragColor );",wn=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cn=`#ifdef USE_ENVMAP
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
#endif`,ln=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gn=`#ifdef USE_ENVMAP
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
#endif`,kn=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yn=`#ifdef USE_ENVMAP
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
#endif`,Un=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mn=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nn=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kn=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jn=`#ifdef USE_GRADIENTMAP
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
}`,Fn=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rn=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pn=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dn=`uniform bool receiveShadow;
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
#endif`,qn=`#ifdef USE_ENVMAP
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
#endif`,Yn=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ln=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,un=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mn=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hn=`PhysicalMaterial material;
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
#endif`,fn=`struct PhysicalMaterial {
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
}`,Tn=`
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
#endif`,xn=`#if defined( RE_IndirectDiffuse )
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
#endif`,bn=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,On=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vn=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_n=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zn=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wn=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pn=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vn=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jn=`#if defined( USE_POINTS_UV )
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
#endif`,Xn=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zn=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$n=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,CS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eS=`#ifdef USE_NORMALMAP
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
#endif`,tS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,NS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,JS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xS=`uniform sampler2D t2D;
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`#include <common>
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
}`,PS=`#define DISTANCE
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
}`,VS=`#define DISTANCE
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`uniform float scale;
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
}`,$S=`uniform vec3 diffuse;
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
}`,Aw=`#include <common>
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
}`,Iw=`uniform vec3 diffuse;
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
}`,gw=`#define LAMBERT
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
}`,Cw=`#define LAMBERT
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
}`,Bw=`#define MATCAP
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
}`,Qw=`#define MATCAP
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
}`,Ew=`#define NORMAL
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
}`,iw=`#define NORMAL
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
}`,ow=`#define PHONG
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
}`,ew=`#define PHONG
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
}`,tw=`#define STANDARD
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
}`,aw=`#define STANDARD
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
}`,sw=`#define TOON
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
}`,Dw=`#define TOON
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
}`,hw=`uniform float size;
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
}`,rw=`uniform vec3 diffuse;
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
}`,nw=`#include <common>
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
}`,Sw=`uniform vec3 color;
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
}`,ww=`uniform float rotation;
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
}`,cw=`uniform vec3 diffuse;
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
}`,TA={alphahash_fragment:Tr,alphahash_pars_fragment:xr,alphamap_fragment:br,alphamap_pars_fragment:Or,alphatest_fragment:vr,alphatest_pars_fragment:_r,aomap_fragment:Zr,aomap_pars_fragment:Wr,batching_pars_vertex:Pr,batching_vertex:Vr,begin_vertex:jr,beginnormal_vertex:Xr,bsdfs:zr,iridescence_fragment:$r,bumpmap_pars_fragment:An,clipping_planes_fragment:In,clipping_planes_pars_fragment:gn,clipping_planes_pars_vertex:Cn,clipping_planes_vertex:Bn,color_fragment:Qn,color_pars_fragment:En,color_pars_vertex:on,color_vertex:en,common:tn,cube_uv_reflection_fragment:an,defaultnormal_vertex:sn,displacementmap_pars_vertex:Dn,displacementmap_vertex:hn,emissivemap_fragment:rn,emissivemap_pars_fragment:nn,colorspace_fragment:Sn,colorspace_pars_fragment:wn,envmap_fragment:cn,envmap_common_pars_fragment:ln,envmap_pars_fragment:Gn,envmap_pars_vertex:kn,envmap_physical_pars_fragment:qn,envmap_vertex:yn,fog_vertex:Un,fog_pars_vertex:Mn,fog_fragment:Nn,fog_pars_fragment:Kn,gradientmap_pars_fragment:Jn,lightmap_pars_fragment:Fn,lights_lambert_fragment:Rn,lights_lambert_pars_fragment:pn,lights_pars_begin:dn,lights_toon_fragment:Yn,lights_toon_pars_fragment:Ln,lights_phong_fragment:un,lights_phong_pars_fragment:mn,lights_physical_fragment:Hn,lights_physical_pars_fragment:fn,lights_fragment_begin:Tn,lights_fragment_maps:xn,lights_fragment_end:bn,logdepthbuf_fragment:On,logdepthbuf_pars_fragment:vn,logdepthbuf_pars_vertex:_n,logdepthbuf_vertex:Zn,map_fragment:Wn,map_pars_fragment:Pn,map_particle_fragment:Vn,map_particle_pars_fragment:jn,metalnessmap_fragment:Xn,metalnessmap_pars_fragment:zn,morphinstance_vertex:$n,morphcolor_vertex:AS,morphnormal_vertex:IS,morphtarget_pars_vertex:gS,morphtarget_vertex:CS,normal_fragment_begin:BS,normal_fragment_maps:QS,normal_pars_fragment:ES,normal_pars_vertex:iS,normal_vertex:oS,normalmap_pars_fragment:eS,clearcoat_normal_fragment_begin:tS,clearcoat_normal_fragment_maps:aS,clearcoat_pars_fragment:sS,iridescence_pars_fragment:DS,opaque_fragment:hS,packing:rS,premultiplied_alpha_fragment:nS,project_vertex:SS,dithering_fragment:wS,dithering_pars_fragment:cS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:kS,shadowmap_pars_vertex:yS,shadowmap_vertex:US,shadowmask_pars_fragment:MS,skinbase_vertex:NS,skinning_pars_vertex:KS,skinning_vertex:JS,skinnormal_vertex:FS,specularmap_fragment:RS,specularmap_pars_fragment:pS,tonemapping_fragment:dS,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:LS,uv_pars_fragment:uS,uv_pars_vertex:mS,uv_vertex:HS,worldpos_vertex:fS,background_vert:TS,background_frag:xS,backgroundCube_vert:bS,backgroundCube_frag:OS,cube_vert:vS,cube_frag:_S,depth_vert:ZS,depth_frag:WS,distanceRGBA_vert:PS,distanceRGBA_frag:VS,equirect_vert:jS,equirect_frag:XS,linedashed_vert:zS,linedashed_frag:$S,meshbasic_vert:Aw,meshbasic_frag:Iw,meshlambert_vert:gw,meshlambert_frag:Cw,meshmatcap_vert:Bw,meshmatcap_frag:Qw,meshnormal_vert:Ew,meshnormal_frag:iw,meshphong_vert:ow,meshphong_frag:ew,meshphysical_vert:tw,meshphysical_frag:aw,meshtoon_vert:sw,meshtoon_frag:Dw,points_vert:hw,points_frag:rw,shadow_vert:nw,shadow_frag:Sw,sprite_vert:ww,sprite_frag:cw},iA={common:{diffuse:{value:new JA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fA},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fA}},envmap:{envMap:{value:null},envMapRotation:{value:new fA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fA},normalScale:{value:new LA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new JA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new JA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0},uvTransform:{value:new fA}},sprite:{diffuse:{value:new JA(16777215)},opacity:{value:1},center:{value:new LA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fA},alphaMap:{value:null},alphaMapTransform:{value:new fA},alphaTest:{value:0}}},ug={basic:{uniforms:$I([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.fog]),vertexShader:TA.meshbasic_vert,fragmentShader:TA.meshbasic_frag},lambert:{uniforms:$I([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new JA(0)}}]),vertexShader:TA.meshlambert_vert,fragmentShader:TA.meshlambert_frag},phong:{uniforms:$I([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new JA(0)},specular:{value:new JA(1118481)},shininess:{value:30}}]),vertexShader:TA.meshphong_vert,fragmentShader:TA.meshphong_frag},standard:{uniforms:$I([iA.common,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.roughnessmap,iA.metalnessmap,iA.fog,iA.lights,{emissive:{value:new JA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:TA.meshphysical_vert,fragmentShader:TA.meshphysical_frag},toon:{uniforms:$I([iA.common,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.gradientmap,iA.fog,iA.lights,{emissive:{value:new JA(0)}}]),vertexShader:TA.meshtoon_vert,fragmentShader:TA.meshtoon_frag},matcap:{uniforms:$I([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,{matcap:{value:null}}]),vertexShader:TA.meshmatcap_vert,fragmentShader:TA.meshmatcap_frag},points:{uniforms:$I([iA.points,iA.fog]),vertexShader:TA.points_vert,fragmentShader:TA.points_frag},dashed:{uniforms:$I([iA.common,iA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:TA.linedashed_vert,fragmentShader:TA.linedashed_frag},depth:{uniforms:$I([iA.common,iA.displacementmap]),vertexShader:TA.depth_vert,fragmentShader:TA.depth_frag},normal:{uniforms:$I([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,{opacity:{value:1}}]),vertexShader:TA.meshnormal_vert,fragmentShader:TA.meshnormal_frag},sprite:{uniforms:$I([iA.sprite,iA.fog]),vertexShader:TA.sprite_vert,fragmentShader:TA.sprite_frag},background:{uniforms:{uvTransform:{value:new fA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:TA.background_vert,fragmentShader:TA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fA}},vertexShader:TA.backgroundCube_vert,fragmentShader:TA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:TA.cube_vert,fragmentShader:TA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:TA.equirect_vert,fragmentShader:TA.equirect_frag},distanceRGBA:{uniforms:$I([iA.common,iA.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:TA.distanceRGBA_vert,fragmentShader:TA.distanceRGBA_frag},shadow:{uniforms:$I([iA.lights,iA.fog,{color:{value:new JA(0)},opacity:{value:1}}]),vertexShader:TA.shadow_vert,fragmentShader:TA.shadow_frag}};ug.physical={uniforms:$I([ug.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fA},clearcoatNormalScale:{value:new LA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fA},sheen:{value:0},sheenColor:{value:new JA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fA},transmissionSamplerSize:{value:new LA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fA},attenuationDistance:{value:0},attenuationColor:{value:new JA(0)},specularColor:{value:new JA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fA},anisotropyVector:{value:new LA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fA}}]),vertexShader:TA.meshphysical_vert,fragmentShader:TA.meshphysical_frag};const rE={r:0,b:0,g:0},mC=new jI,lw=new uA;function Gw(B,A,I,g,C,Q,E){const i=new JA(0);let o=Q===!0?0:1,e,t,a=null,s=0,r=null;function S(M){let l=M.isScene===!0?M.background:null;return l&&l.isTexture&&(l=(M.backgroundBlurriness>0?I:A).get(l)),l}function w(M){let l=!1;const R=S(M);R===null?h(i,o):R&&R.isColor&&(h(R,1),l=!0);const J=B.xr.getEnvironmentBlendMode();J==="additive"?g.buffers.color.setClear(0,0,0,1,E):J==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(B.autoClear||l)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil))}function n(M,l){const R=S(l);R&&(R.isCubeTexture||R.mapping===RQ)?(t===void 0&&(t=new yI(new cB(1,1,1),new IC({name:"BackgroundCubeMaterial",uniforms:lB(ug.backgroundCube.uniforms),vertexShader:ug.backgroundCube.vertexShader,fragmentShader:ug.backgroundCube.fragmentShader,side:Cg,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(J,K,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),mC.copy(l.backgroundRotation),mC.x*=-1,mC.y*=-1,mC.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mC.y*=-1,mC.z*=-1),t.material.uniforms.envMap.value=R,t.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=l.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,t.material.uniforms.backgroundRotation.value.setFromMatrix4(lw.makeRotationFromEuler(mC)),t.material.toneMapped=PA.getTransfer(R.colorSpace)!==oI,(a!==R||s!==R.version||r!==B.toneMapping)&&(t.material.needsUpdate=!0,a=R,s=R.version,r=B.toneMapping),t.layers.enableAll(),M.unshift(t,t.geometry,t.material,0,0,null)):R&&R.isTexture&&(e===void 0&&(e=new yI(new hE(2,2),new IC({name:"BackgroundMaterial",uniforms:lB(ug.background.uniforms),vertexShader:ug.background.vertexShader,fragmentShader:ug.background.fragmentShader,side:vg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=R,e.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,e.material.toneMapped=PA.getTransfer(R.colorSpace)!==oI,R.matrixAutoUpdate===!0&&R.updateMatrix(),e.material.uniforms.uvTransform.value.copy(R.matrix),(a!==R||s!==R.version||r!==B.toneMapping)&&(e.material.needsUpdate=!0,a=R,s=R.version,r=B.toneMapping),e.layers.enableAll(),M.unshift(e,e.geometry,e.material,0,0,null))}function h(M,l){M.getRGB(rE,wt(B)),g.buffers.color.setClear(rE.r,rE.g,rE.b,l,E)}function U(){t!==void 0&&(t.geometry.dispose(),t.material.dispose()),e!==void 0&&(e.geometry.dispose(),e.material.dispose())}return{getClearColor:function(){return i},setClearColor:function(M,l=1){i.set(M),o=l,h(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,h(i,o)},render:w,addToRenderList:n,dispose:U}}function kw(B,A){const I=B.getParameter(B.MAX_VERTEX_ATTRIBS),g={},C=s(null);let Q=C,E=!1;function i(G,d,x,b,W){let X=!1;const _=a(b,x,d);Q!==_&&(Q=_,e(Q.object)),X=r(G,b,x,W),X&&S(G,b,x,W),W!==null&&A.update(W,B.ELEMENT_ARRAY_BUFFER),(X||E)&&(E=!1,l(G,d,x,b),W!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,A.get(W).buffer))}function o(){return B.createVertexArray()}function e(G){return B.bindVertexArray(G)}function t(G){return B.deleteVertexArray(G)}function a(G,d,x){const b=x.wireframe===!0;let W=g[G.id];W===void 0&&(W={},g[G.id]=W);let X=W[d.id];X===void 0&&(X={},W[d.id]=X);let _=X[b];return _===void 0&&(_=s(o()),X[b]=_),_}function s(G){const d=[],x=[],b=[];for(let W=0;W<I;W++)d[W]=0,x[W]=0,b[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:d,enabledAttributes:x,attributeDivisors:b,object:G,attributes:{},index:null}}function r(G,d,x,b){const W=Q.attributes,X=d.attributes;let _=0;const gA=x.getAttributes();for(const P in gA)if(gA[P].location>=0){const QA=W[P];let cA=X[P];if(cA===void 0&&(P==="instanceMatrix"&&G.instanceMatrix&&(cA=G.instanceMatrix),P==="instanceColor"&&G.instanceColor&&(cA=G.instanceColor)),QA===void 0||QA.attribute!==cA||cA&&QA.data!==cA.data)return!0;_++}return Q.attributesNum!==_||Q.index!==b}function S(G,d,x,b){const W={},X=d.attributes;let _=0;const gA=x.getAttributes();for(const P in gA)if(gA[P].location>=0){let QA=X[P];QA===void 0&&(P==="instanceMatrix"&&G.instanceMatrix&&(QA=G.instanceMatrix),P==="instanceColor"&&G.instanceColor&&(QA=G.instanceColor));const cA={};cA.attribute=QA,QA&&QA.data&&(cA.data=QA.data),W[P]=cA,_++}Q.attributes=W,Q.attributesNum=_,Q.index=b}function w(){const G=Q.newAttributes;for(let d=0,x=G.length;d<x;d++)G[d]=0}function n(G){h(G,0)}function h(G,d){const x=Q.newAttributes,b=Q.enabledAttributes,W=Q.attributeDivisors;x[G]=1,b[G]===0&&(B.enableVertexAttribArray(G),b[G]=1),W[G]!==d&&(B.vertexAttribDivisor(G,d),W[G]=d)}function U(){const G=Q.newAttributes,d=Q.enabledAttributes;for(let x=0,b=d.length;x<b;x++)d[x]!==G[x]&&(B.disableVertexAttribArray(x),d[x]=0)}function M(G,d,x,b,W,X,_){_===!0?B.vertexAttribIPointer(G,d,x,W,X):B.vertexAttribPointer(G,d,x,b,W,X)}function l(G,d,x,b){w();const W=b.attributes,X=x.getAttributes(),_=d.defaultAttributeValues;for(const gA in X){const P=X[gA];if(P.location>=0){let QA=W[gA];if(QA===void 0&&(gA==="instanceMatrix"&&G.instanceMatrix&&(QA=G.instanceMatrix),gA==="instanceColor"&&G.instanceColor&&(QA=G.instanceColor)),QA!==void 0){const cA=QA.normalized,mA=QA.itemSize,ZA=A.get(QA);if(ZA===void 0)continue;const DI=ZA.buffer,V=ZA.type,BA=ZA.bytesPerElement,GA=V===B.INT||V===B.UNSIGNED_INT||QA.gpuType===XE;if(QA.isInterleavedBufferAttribute){const eA=QA.data,RA=eA.stride,HA=QA.offset;if(eA.isInstancedInterleavedBuffer){for(let WA=0;WA<P.locationSize;WA++)h(P.location+WA,eA.meshPerAttribute);G.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=eA.meshPerAttribute*eA.count)}else for(let WA=0;WA<P.locationSize;WA++)n(P.location+WA);B.bindBuffer(B.ARRAY_BUFFER,DI);for(let WA=0;WA<P.locationSize;WA++)M(P.location+WA,mA/P.locationSize,V,cA,RA*BA,(HA+mA/P.locationSize*WA)*BA,GA)}else{if(QA.isInstancedBufferAttribute){for(let eA=0;eA<P.locationSize;eA++)h(P.location+eA,QA.meshPerAttribute);G.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=QA.meshPerAttribute*QA.count)}else for(let eA=0;eA<P.locationSize;eA++)n(P.location+eA);B.bindBuffer(B.ARRAY_BUFFER,DI);for(let eA=0;eA<P.locationSize;eA++)M(P.location+eA,mA/P.locationSize,V,cA,mA*BA,mA/P.locationSize*eA*BA,GA)}}else if(_!==void 0){const cA=_[gA];if(cA!==void 0)switch(cA.length){case 2:B.vertexAttrib2fv(P.location,cA);break;case 3:B.vertexAttrib3fv(P.location,cA);break;case 4:B.vertexAttrib4fv(P.location,cA);break;default:B.vertexAttrib1fv(P.location,cA)}}}}U()}function R(){p();for(const G in g){const d=g[G];for(const x in d){const b=d[x];for(const W in b)t(b[W].object),delete b[W];delete d[x]}delete g[G]}}function J(G){if(g[G.id]===void 0)return;const d=g[G.id];for(const x in d){const b=d[x];for(const W in b)t(b[W].object),delete b[W];delete d[x]}delete g[G.id]}function K(G){for(const d in g){const x=g[d];if(x[G.id]===void 0)continue;const b=x[G.id];for(const W in b)t(b[W].object),delete b[W];delete x[G.id]}}function p(){y(),E=!0,Q!==C&&(Q=C,e(Q.object))}function y(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:i,reset:p,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:J,releaseStatesOfProgram:K,initAttributes:w,enableAttribute:n,disableUnusedAttributes:U}}function yw(B,A,I){let g;function C(e){g=e}function Q(e,t){B.drawArrays(g,e,t),I.update(t,g,1)}function E(e,t,a){a!==0&&(B.drawArraysInstanced(g,e,t,a),I.update(t,g,a))}function i(e,t,a){if(a===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,e,0,t,0,a);let s=0;for(let r=0;r<a;r++)s+=t[r];I.update(s,g,1)}function o(e,t,a,s){if(a===0)return;const r=A.get("WEBGL_multi_draw");if(r===null)for(let S=0;S<e.length;S++)E(e[S],t[S],s[S]);else{r.multiDrawArraysInstancedWEBGL(g,e,0,t,0,s,0,a);let S=0;for(let w=0;w<a;w++)S+=t[w]*s[w];I.update(S,g,1)}}this.setMode=C,this.render=Q,this.renderInstances=E,this.renderMultiDraw=i,this.renderMultiDrawInstances=o}function Uw(B,A,I,g){let C;function Q(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const K=A.get("EXT_texture_filter_anisotropic");C=B.getParameter(K.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function E(K){return!(K!==tg&&g.convert(K)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(K){const p=K===_g&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(K!==wg&&g.convert(K)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&K!==Bg&&!p)}function o(K){if(K==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";K="mediump"}return K==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let e=I.precision!==void 0?I.precision:"highp";const t=o(e);t!==e&&(console.warn("THREE.WebGLRenderer:",e,"not supported, using",t,"instead."),e=t);const a=I.logarithmicDepthBuffer===!0,s=I.reverseDepthBuffer===!0&&A.has("EXT_clip_control"),r=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),S=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=B.getParameter(B.MAX_TEXTURE_SIZE),n=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),h=B.getParameter(B.MAX_VERTEX_ATTRIBS),U=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),M=B.getParameter(B.MAX_VARYING_VECTORS),l=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),R=S>0,J=B.getParameter(B.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:o,textureFormatReadable:E,textureTypeReadable:i,precision:e,logarithmicDepthBuffer:a,reverseDepthBuffer:s,maxTextures:r,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:n,maxAttributes:h,maxVertexUniforms:U,maxVaryings:M,maxFragmentUniforms:l,vertexTextures:R,maxSamples:J}}function Mw(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new YC,i=new fA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const r=a.length!==0||s||g!==0||C;return C=s,g=a.length,r},this.beginShadows=function(){Q=!0,t(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,s){I=t(a,s,0)},this.setState=function(a,s,r){const S=a.clippingPlanes,w=a.clipIntersection,n=a.clipShadows,h=B.get(a);if(!C||S===null||S.length===0||Q&&!n)Q?t(null):e();else{const U=Q?0:g,M=U*4;let l=h.clippingState||null;o.value=l,l=t(S,s,M,r);for(let R=0;R!==M;++R)l[R]=I[R];h.clippingState=l,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,r,S){const w=a!==null?a.length:0;let n=null;if(w!==0){if(n=o.value,S!==!0||n===null){const h=r+w*4,U=s.matrixWorldInverse;i.getNormalMatrix(U),(n===null||n.length<h)&&(n=new Float32Array(h));for(let M=0,l=r;M!==w;++M,l+=4)E.copy(a[M]).applyMatrix4(U,i),E.normal.toArray(n,l),n[l+3]=E.constant}o.value=n,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,n}}function Nw(B){let A=new WeakMap;function I(E,i){return i===FQ?E.mapping=zC:i===jE&&(E.mapping=$C),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===FQ||i===jE)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new Oh(o.height);return e.fromEquirectangularTexture(B,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}const FB=4,Ia=[.125,.215,.35,.446,.526,.582],HC=20,Mo=new ko,ga=new JA;let No=null,Ko=0,Jo=0,Fo=!1;const fC=(1+Math.sqrt(5))/2,RB=1/fC,Ca=[new Y(-fC,RB,0),new Y(fC,RB,0),new Y(-RB,0,fC),new Y(RB,0,fC),new Y(0,fC,-RB),new Y(0,fC,RB),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Ba{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){No=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ia(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(No,Ko,Jo),this._renderer.xr.enabled=Fo,A.scissorTest=!1,nE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===zC||A.mapping===$C?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),No=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:mI,minFilter:mI,generateMipmaps:!1,type:_g,format:tg,colorSpace:bI,depthBuffer:!1},C=Qa(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kw(Q)),this._blurMaterial=Jw(Q,A,I)}return C}_compileMaterial(A){const I=new yI(this._lodPlanes[0],A);this._renderer.compile(I,Mo)}_sceneToCubeUV(A,I,g,C){const Q=new Ag(90,1,I,g),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],o=this._renderer,e=o.autoClear,t=o.toneMapping;o.getClearColor(ga),o.toneMapping=aC,o.autoClear=!1;const a=new wC({name:"PMREM.Background",side:Cg,depthWrite:!1,depthTest:!1}),s=new yI(new cB,a);let r=!1;const S=A.background;S?S.isColor&&(a.color.copy(S),A.background=null,r=!0):(a.color.copy(ga),r=!0);for(let w=0;w<6;w++){const n=w%3;n===0?(Q.up.set(0,E[w],0),Q.lookAt(i[w],0,0)):n===1?(Q.up.set(0,0,E[w]),Q.lookAt(0,i[w],0)):(Q.up.set(0,E[w],0),Q.lookAt(0,0,i[w]));const h=this._cubeSize;nE(C,n*h,w>2?h:0,h,h),o.setRenderTarget(C),r&&o.render(s,Q),o.render(A,Q)}s.geometry.dispose(),s.material.dispose(),o.toneMapping=t,o.autoClear=e,A.background=S}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===zC||A.mapping===$C;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=ia()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ea());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new yI(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;nE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,Mo)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const C=this._lodPlanes.length;for(let Q=1;Q<C;Q++){const E=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),i=Ca[(C-Q-1)%Ca.length];this._blur(A,Q-1,Q,E,i)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new yI(this._lodPlanes[C],e),s=e.uniforms,r=this._sizeLods[g]-1,S=isFinite(Q)?Math.PI/(2*r):2*Math.PI/(2*HC-1),w=Q/S,n=isFinite(Q)?1+Math.floor(t*w):HC;n>HC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${n} samples when the maximum is set to ${HC}`);const h=[];let U=0;for(let K=0;K<HC;++K){const p=K/w,y=Math.exp(-p*p/2);h.push(y),K===0?U+=y:K<n&&(U+=2*y)}for(let K=0;K<h.length;K++)h[K]=h[K]/U;s.envMap.value=A.texture,s.samples.value=n,s.weights.value=h,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:M}=this;s.dTheta.value=S,s.mipInt.value=M-g;const l=this._sizeLods[C],R=3*l*(C>M-FB?C-M+FB:0),J=4*(this._cubeSize-l);nE(I,R,J,3*l,2*l),o.setRenderTarget(I),o.render(a,Mo)}}function Kw(B){const A=[],I=[],g=[];let C=B;const Q=B-FB+1+Ia.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-FB?o=Ia[E-B+FB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],r=6,S=6,w=3,n=2,h=1,U=new Float32Array(w*S*r),M=new Float32Array(n*S*r),l=new Float32Array(h*S*r);for(let J=0;J<r;J++){const K=J%3*2/3-1,p=J>2?0:-1,y=[K,p,0,K+2/3,p,0,K+2/3,p+1,0,K,p,0,K+2/3,p+1,0,K,p+1,0];U.set(y,w*S*J),M.set(s,n*S*J);const G=[J,J,J,J,J,J];l.set(G,h*S*J)}const R=new zI;R.setAttribute("position",new dI(U,w)),R.setAttribute("uv",new dI(M,n)),R.setAttribute("faceIndex",new dI(l,h)),A.push(R),C>FB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Qa(B,A,I){const g=new RC(B,A,I);return g.texture.mapping=RQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function nE(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function Jw(B,A,I){const g=new Float32Array(HC),C=new Y(0,1,0);return new IC({name:"SphericalGaussianBlur",defines:{n:HC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:tC,depthTest:!1,depthWrite:!1})}function Ea(){return new IC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:tC,depthTest:!1,depthWrite:!1})}function ia(){return new IC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tC,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Fw(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===FQ||o===jE,t=o===zC||o===$C;if(e||t){let a=A.get(i);const s=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==s)return I===null&&(I=new Ba(B)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const r=i.image;return e&&r&&r.height>0||t&&r&&C(r)?(I===null&&(I=new Ba(B)),a=e?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",Q),a.texture):null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function Rw(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&iB("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function pw(B,A,I,g){const C={},Q=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const S in s.attributes)A.remove(s.attributes[S]);s.removeEventListener("dispose",E),delete C[s.id];const r=Q.get(s);r&&(A.remove(r),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const r in s)A.update(s[r],B.ARRAY_BUFFER)}function e(a){const s=[],r=a.index,S=a.attributes.position;let w=0;if(r!==null){const U=r.array;w=r.version;for(let M=0,l=U.length;M<l;M+=3){const R=U[M+0],J=U[M+1],K=U[M+2];s.push(R,J,J,K,K,R)}}else if(S!==void 0){const U=S.array;w=S.version;for(let M=0,l=U.length/3-1;M<l;M+=3){const R=M+0,J=M+1,K=M+2;s.push(R,J,J,K,K,R)}}else return;const n=new(je(s)?ht:Dt)(s,1);n.version=w;const h=Q.get(a);h&&A.remove(h),Q.set(a,n)}function t(a){const s=Q.get(a);if(s){const r=a.index;r!==null&&s.version<r.version&&e(a)}else e(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function dw(B,A,I){let g;function C(s){g=s}let Q,E;function i(s){Q=s.type,E=s.bytesPerElement}function o(s,r){B.drawElements(g,r,Q,s*E),I.update(r,g,1)}function e(s,r,S){S!==0&&(B.drawElementsInstanced(g,r,Q,s*E,S),I.update(r,g,S))}function t(s,r,S){if(S===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,r,0,Q,s,0,S);let w=0;for(let n=0;n<S;n++)w+=r[n];I.update(w,g,1)}function a(s,r,S,w){if(S===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let h=0;h<s.length;h++)e(s[h]/E,r[h],w[h]);else{n.multiDrawElementsInstancedWEBGL(g,r,0,Q,s,0,w,0,S);let h=0;for(let U=0;U<S;U++)h+=r[U]*w[U];I.update(h,g,1)}}this.setMode=C,this.setIndex=i,this.render=o,this.renderInstances=e,this.renderMultiDraw=t,this.renderMultiDrawInstances=a}function qw(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case B.TRIANGLES:I.triangles+=i*(Q/3);break;case B.LINES:I.lines+=i*(Q/2);break;case B.LINE_STRIP:I.lines+=i*(Q-1);break;case B.LINE_LOOP:I.lines+=i*Q;break;case B.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Yw(B,A,I){const g=new WeakMap,C=new gI;function Q(E,i,o){const e=E.morphTargetInfluences,t=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=t!==void 0?t.length:0;let s=g.get(i);if(s===void 0||s.count!==a){let r=function(){p.dispose(),g.delete(i),i.removeEventListener("dispose",r)};s!==void 0&&s.texture.dispose();const S=i.morphAttributes.position!==void 0,w=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,h=i.morphAttributes.position||[],U=i.morphAttributes.normal||[],M=i.morphAttributes.color||[];let l=0;S===!0&&(l=1),w===!0&&(l=2),n===!0&&(l=3);let R=i.attributes.position.count*l,J=1;R>A.maxTextureSize&&(J=Math.ceil(R/A.maxTextureSize),R=A.maxTextureSize);const K=new Float32Array(R*J*4*a),p=new It(K,R,J,a);p.type=Bg,p.needsUpdate=!0;const y=l*4;for(let G=0;G<a;G++){const d=h[G],x=U[G],b=M[G],W=R*J*4*G;for(let X=0;X<d.count;X++){const _=X*y;S===!0&&(C.fromBufferAttribute(d,X),K[W+_+0]=C.x,K[W+_+1]=C.y,K[W+_+2]=C.z,K[W+_+3]=0),w===!0&&(C.fromBufferAttribute(x,X),K[W+_+4]=C.x,K[W+_+5]=C.y,K[W+_+6]=C.z,K[W+_+7]=0),n===!0&&(C.fromBufferAttribute(b,X),K[W+_+8]=C.x,K[W+_+9]=C.y,K[W+_+10]=C.z,K[W+_+11]=b.itemSize===4?C.w:1)}}s={count:a,texture:p,size:new LA(R,J)},g.set(i,s),i.addEventListener("dispose",r)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(B,"morphTexture",E.morphTexture,I);else{let r=0;for(let w=0;w<e.length;w++)r+=e[w];const S=i.morphTargetsRelative?1:1-r;o.getUniforms().setValue(B,"morphTargetBaseInfluence",S),o.getUniforms().setValue(B,"morphTargetInfluences",e)}o.getUniforms().setValue(B,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(B,"morphTargetsTextureSize",s.size)}return{update:Q}}function Lw(B,A,I,g){let C=new WeakMap;function Q(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);if(C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==e&&(I.update(o.instanceMatrix,B.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,B.ARRAY_BUFFER),C.set(o,e))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==e&&(s.update(),C.set(s,e))}return a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:Q,dispose:E}}const oa=new pI,ea=new bt(1,1),ta=new It,aa=new Uh,sa=new kt,Da=[],ha=[],ra=new Float32Array(16),na=new Float32Array(9),Sa=new Float32Array(4);function pB(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=Da[C];if(Q===void 0&&(Q=new Float32Array(C),Da[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function qI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function YI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function SE(B,A){let I=ha[A];I===void 0&&(I=new Int32Array(A),ha[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function uw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function mw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(qI(I,A))return;B.uniform2fv(this.addr,A),YI(I,A)}}function Hw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(qI(I,A))return;B.uniform3fv(this.addr,A),YI(I,A)}}function fw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(qI(I,A))return;B.uniform4fv(this.addr,A),YI(I,A)}}function Tw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(qI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),YI(I,A)}else{if(qI(I,g))return;Sa.set(g),B.uniformMatrix2fv(this.addr,!1,Sa),YI(I,g)}}function xw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(qI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),YI(I,A)}else{if(qI(I,g))return;na.set(g),B.uniformMatrix3fv(this.addr,!1,na),YI(I,g)}}function bw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(qI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),YI(I,A)}else{if(qI(I,g))return;ra.set(g),B.uniformMatrix4fv(this.addr,!1,ra),YI(I,g)}}function Ow(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function vw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(qI(I,A))return;B.uniform2iv(this.addr,A),YI(I,A)}}function _w(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(qI(I,A))return;B.uniform3iv(this.addr,A),YI(I,A)}}function Zw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(qI(I,A))return;B.uniform4iv(this.addr,A),YI(I,A)}}function Ww(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function Pw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(qI(I,A))return;B.uniform2uiv(this.addr,A),YI(I,A)}}function Vw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(qI(I,A))return;B.uniform3uiv(this.addr,A),YI(I,A)}}function jw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(qI(I,A))return;B.uniform4uiv(this.addr,A),YI(I,A)}}function Xw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C);let Q;this.type===B.SAMPLER_2D_SHADOW?(ea.compareFunction=We,Q=ea):Q=oa,I.setTexture2D(A||Q,C)}function zw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||aa,C)}function $w(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||sa,C)}function Ac(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||ta,C)}function Ic(B){switch(B){case 5126:return uw;case 35664:return mw;case 35665:return Hw;case 35666:return fw;case 35674:return Tw;case 35675:return xw;case 35676:return bw;case 5124:case 35670:return Ow;case 35667:case 35671:return vw;case 35668:case 35672:return _w;case 35669:case 35673:return Zw;case 5125:return Ww;case 36294:return Pw;case 36295:return Vw;case 36296:return jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return Ac}}function gc(B,A){B.uniform1fv(this.addr,A)}function Cc(B,A){const I=pB(A,this.size,2);B.uniform2fv(this.addr,I)}function Bc(B,A){const I=pB(A,this.size,3);B.uniform3fv(this.addr,I)}function Qc(B,A){const I=pB(A,this.size,4);B.uniform4fv(this.addr,I)}function Ec(B,A){const I=pB(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function ic(B,A){const I=pB(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function oc(B,A){const I=pB(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function ec(B,A){B.uniform1iv(this.addr,A)}function tc(B,A){B.uniform2iv(this.addr,A)}function ac(B,A){B.uniform3iv(this.addr,A)}function sc(B,A){B.uniform4iv(this.addr,A)}function Dc(B,A){B.uniform1uiv(this.addr,A)}function hc(B,A){B.uniform2uiv(this.addr,A)}function rc(B,A){B.uniform3uiv(this.addr,A)}function nc(B,A){B.uniform4uiv(this.addr,A)}function Sc(B,A,I){const g=this.cache,C=A.length,Q=SE(I,C);qI(g,Q)||(B.uniform1iv(this.addr,Q),YI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||oa,Q[E])}function wc(B,A,I){const g=this.cache,C=A.length,Q=SE(I,C);qI(g,Q)||(B.uniform1iv(this.addr,Q),YI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||aa,Q[E])}function cc(B,A,I){const g=this.cache,C=A.length,Q=SE(I,C);qI(g,Q)||(B.uniform1iv(this.addr,Q),YI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||sa,Q[E])}function lc(B,A,I){const g=this.cache,C=A.length,Q=SE(I,C);qI(g,Q)||(B.uniform1iv(this.addr,Q),YI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||ta,Q[E])}function Gc(B){switch(B){case 5126:return gc;case 35664:return Cc;case 35665:return Bc;case 35666:return Qc;case 35674:return Ec;case 35675:return ic;case 35676:return oc;case 5124:case 35670:return ec;case 35667:case 35671:return tc;case 35668:case 35672:return ac;case 35669:case 35673:return sc;case 5125:return Dc;case 36294:return hc;case 36295:return rc;case 36296:return nc;case 35678:case 36198:case 36298:case 36306:case 35682:return Sc;case 35679:case 36299:case 36307:return wc;case 35680:case 36300:case 36308:case 36293:return cc;case 36289:case 36303:case 36311:case 36292:return lc}}class kc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=Ic(I.type)}}class yc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=Gc(I.type)}}class Uc{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const po=/(\w+)(\])?(\[|\.)?/g;function wa(B,A){B.seq.push(A),B.map[A.id]=A}function Mc(B,A,I){const g=B.name,C=g.length;for(po.lastIndex=0;;){const Q=po.exec(g),E=po.lastIndex;let i=Q[1];const o=Q[2]==="]",e=Q[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){wa(I,e===void 0?new kc(i,B,A):new yc(i,B,A));break}else{let t=I.map[i];t===void 0&&(t=new Uc(i),wa(I,t)),I=t}}}class wE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);Mc(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function ca(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}const Nc=37297;let Kc=0;function Jc(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}const la=new fA;function Fc(B){PA._getMatrix(la,PA.workingColorSpace,B);const A=`mat3( ${la.elements.map(I=>I.toFixed(4))} )`;switch(PA.getTransfer(B)){case fQ:return[A,"LinearTransferOETF"];case oI:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",B),[A,"LinearTransferOETF"]}}function Ga(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+Jc(B.getShaderSource(A),E)}else return C}function Rc(B,A){const I=Fc(A);return[`vec4 ${B}( vec4 value ) {`,`	return ${I[1]}( vec4( value.rgb * ${I[0]}, value.a ) );`,"}"].join(`
`)}function pc(B,A){let I;switch(A){case RD:I="Linear";break;case pD:I="Reinhard";break;case dD:I="Cineon";break;case qD:I="ACESFilmic";break;case LD:I="AgX";break;case uD:I="Neutral";break;case YD:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}const cE=new Y;function dc(){PA.getLuminanceCoefficients(cE);const B=cE.x.toFixed(4),A=cE.y.toFixed(4),I=cE.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${B}, ${A}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qc(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(QQ).join(`
`)}function Yc(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Lc(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===B.FLOAT_MAT2&&(i=2),Q.type===B.FLOAT_MAT3&&(i=3),Q.type===B.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function QQ(B){return B!==""}function ka(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ya(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const uc=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(B){return B.replace(uc,Hc)}const mc=new Map;function Hc(B,A){let I=TA[A];if(I===void 0){const g=mc.get(A);if(g!==void 0)I=TA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return qo(I)}const fc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(B){return B.replace(fc,Tc)}function Tc(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function Ma(B){let A=`precision ${B.precision} float;
	precision ${B.precision} int;
	precision ${B.precision} sampler2D;
	precision ${B.precision} samplerCube;
	precision ${B.precision} sampler3D;
	precision ${B.precision} sampler2DArray;
	precision ${B.precision} sampler2DShadow;
	precision ${B.precision} samplerCubeShadow;
	precision ${B.precision} sampler2DArrayShadow;
	precision ${B.precision} isampler2D;
	precision ${B.precision} isampler3D;
	precision ${B.precision} isamplerCube;
	precision ${B.precision} isampler2DArray;
	precision ${B.precision} usampler2D;
	precision ${B.precision} usampler3D;
	precision ${B.precision} usamplerCube;
	precision ${B.precision} usampler2DArray;
	`;return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function xc(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Fe?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===eD?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===Og&&(A="SHADOWMAP_TYPE_VSM"),A}function bc(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case zC:case $C:A="ENVMAP_TYPE_CUBE";break;case RQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Oc(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case $C:A="ENVMAP_MODE_REFRACTION";break}return A}function vc(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case VE:A="ENVMAP_BLENDING_MULTIPLY";break;case JD:A="ENVMAP_BLENDING_MIX";break;case FD:A="ENVMAP_BLENDING_ADD";break}return A}function _c(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function Zc(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=xc(I),e=bc(I),t=Oc(I),a=vc(I),s=_c(I),r=qc(I),S=Yc(Q),w=C.createProgram();let n,h,U=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(n=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S].filter(QQ).join(`
`),n.length>0&&(n+=`
`),h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S].filter(QQ).join(`
`),h.length>0&&(h+=`
`)):(n=[Ma(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(QQ).join(`
`),h=[Ma(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==aC?"#define TONE_MAPPING":"",I.toneMapping!==aC?TA.tonemapping_pars_fragment:"",I.toneMapping!==aC?pc("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",TA.colorspace_pars_fragment,Rc("linearToOutputTexel",I.outputColorSpace),dc(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(QQ).join(`
`)),E=qo(E),E=ka(E,I),E=ya(E,I),i=qo(i),i=ka(i,I),i=ya(i,I),E=Ua(E),i=Ua(i),I.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,n=[r,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+n,h=["#define varying in",I.glslVersion===Pe?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Pe?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=U+n+E,l=U+h+i,R=ca(C,C.VERTEX_SHADER,M),J=ca(C,C.FRAGMENT_SHADER,l);C.attachShader(w,R),C.attachShader(w,J),I.index0AttributeName!==void 0?C.bindAttribLocation(w,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(w,0,"position"),C.linkProgram(w);function K(d){if(B.debug.checkShaderErrors){const x=C.getProgramInfoLog(w).trim(),b=C.getShaderInfoLog(R).trim(),W=C.getShaderInfoLog(J).trim();let X=!0,_=!0;if(C.getProgramParameter(w,C.LINK_STATUS)===!1)if(X=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,w,R,J);else{const gA=Ga(C,R,"vertex"),P=Ga(C,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(w,C.VALIDATE_STATUS)+`

Material Name: `+d.name+`
Material Type: `+d.type+`

Program Info Log: `+x+`
`+gA+`
`+P)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||W==="")&&(_=!1);_&&(d.diagnostics={runnable:X,programLog:x,vertexShader:{log:b,prefix:n},fragmentShader:{log:W,prefix:h}})}C.deleteShader(R),C.deleteShader(J),p=new wE(C,w),y=Lc(C,w)}let p;this.getUniforms=function(){return p===void 0&&K(this),p};let y;this.getAttributes=function(){return y===void 0&&K(this),y};let G=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=C.getProgramParameter(w,Nc)),G},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(w),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=Kc++,this.cacheKey=A,this.usedTimes=1,this.program=w,this.vertexShader=R,this.fragmentShader=J,this}let Wc=0;class Pc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Vc(A),I.set(A,g)),g}}class Vc{constructor(A){this.id=Wc++,this.code=A,this.usedTimes=0}}function jc(B,A,I,g,C,Q,E){const i=new Qt,o=new Pc,e=new Set,t=[],a=C.logarithmicDepthBuffer,s=C.vertexTextures;let r=C.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(y){return e.add(y),y===0?"uv":`uv${y}`}function n(y,G,d,x,b){const W=x.fog,X=b.geometry,_=y.isMeshStandardMaterial?x.environment:null,gA=(y.isMeshStandardMaterial?I:A).get(y.envMap||_),P=gA&&gA.mapping===RQ?gA.image.height:null,QA=S[y.type];y.precision!==null&&(r=C.getMaxPrecision(y.precision),r!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",r,"instead."));const cA=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mA=cA!==void 0?cA.length:0;let ZA=0;X.morphAttributes.position!==void 0&&(ZA=1),X.morphAttributes.normal!==void 0&&(ZA=2),X.morphAttributes.color!==void 0&&(ZA=3);let DI,V,BA,GA;if(QA){const iI=ug[QA];DI=iI.vertexShader,V=iI.fragmentShader}else DI=y.vertexShader,V=y.fragmentShader,o.update(y),BA=o.getVertexShaderID(y),GA=o.getFragmentShaderID(y);const eA=B.getRenderTarget(),RA=B.state.buffers.depth.getReversed(),HA=b.isInstancedMesh===!0,WA=b.isBatchedMesh===!0,GI=!!y.map,AI=!!y.matcap,NI=!!gA,q=!!y.aoMap,hg=!!y.lightMap,jA=!!y.bumpMap,XA=!!y.normalMap,yA=!!y.displacementMap,wI=!!y.emissiveMap,UA=!!y.metalnessMap,N=!!y.roughnessMap,c=y.anisotropy>0,T=y.clearcoat>0,z=y.dispersion>0,IA=y.iridescence>0,j=y.sheen>0,kA=y.transmission>0,tA=c&&!!y.anisotropyMap,wA=T&&!!y.clearcoatMap,II=T&&!!y.clearcoatNormalMap,CA=T&&!!y.clearcoatRoughnessMap,rA=IA&&!!y.iridescenceMap,FA=IA&&!!y.iridescenceThicknessMap,pA=j&&!!y.sheenColorMap,nA=j&&!!y.sheenRoughnessMap,zA=!!y.specularMap,bA=!!y.specularColorMap,rI=!!y.specularIntensityMap,m=kA&&!!y.transmissionMap,oA=kA&&!!y.thicknessMap,Z=!!y.gradientMap,$=!!y.alphaMap,aA=y.alphaTest>0,EA=!!y.alphaHash,$A=!!y.extensions;let kI=aC;y.toneMapped&&(eA===null||eA.isXRRenderTarget===!0)&&(kI=B.toneMapping);const VI={shaderID:QA,shaderType:y.type,shaderName:y.name,vertexShader:DI,fragmentShader:V,defines:y.defines,customVertexShaderID:BA,customFragmentShaderID:GA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:r,batching:WA,batchingColor:WA&&b._colorsTexture!==null,instancing:HA,instancingColor:HA&&b.instanceColor!==null,instancingMorph:HA&&b.morphTexture!==null,supportsVertexTextures:s,outputColorSpace:eA===null?B.outputColorSpace:eA.isXRRenderTarget===!0?eA.texture.colorSpace:bI,alphaToCoverage:!!y.alphaToCoverage,map:GI,matcap:AI,envMap:NI,envMapMode:NI&&gA.mapping,envMapCubeUVHeight:P,aoMap:q,lightMap:hg,bumpMap:jA,normalMap:XA,displacementMap:s&&yA,emissiveMap:wI,normalMapObjectSpace:XA&&y.normalMapType===vD,normalMapTangentSpace:XA&&y.normalMapType===qi,metalnessMap:UA,roughnessMap:N,anisotropy:c,anisotropyMap:tA,clearcoat:T,clearcoatMap:wA,clearcoatNormalMap:II,clearcoatRoughnessMap:CA,dispersion:z,iridescence:IA,iridescenceMap:rA,iridescenceThicknessMap:FA,sheen:j,sheenColorMap:pA,sheenRoughnessMap:nA,specularMap:zA,specularColorMap:bA,specularIntensityMap:rI,transmission:kA,transmissionMap:m,thicknessMap:oA,gradientMap:Z,opaque:y.transparent===!1&&y.blending===jC&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:aA,alphaHash:EA,combine:y.combine,mapUv:GI&&w(y.map.channel),aoMapUv:q&&w(y.aoMap.channel),lightMapUv:hg&&w(y.lightMap.channel),bumpMapUv:jA&&w(y.bumpMap.channel),normalMapUv:XA&&w(y.normalMap.channel),displacementMapUv:yA&&w(y.displacementMap.channel),emissiveMapUv:wI&&w(y.emissiveMap.channel),metalnessMapUv:UA&&w(y.metalnessMap.channel),roughnessMapUv:N&&w(y.roughnessMap.channel),anisotropyMapUv:tA&&w(y.anisotropyMap.channel),clearcoatMapUv:wA&&w(y.clearcoatMap.channel),clearcoatNormalMapUv:II&&w(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:CA&&w(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rA&&w(y.iridescenceMap.channel),iridescenceThicknessMapUv:FA&&w(y.iridescenceThicknessMap.channel),sheenColorMapUv:pA&&w(y.sheenColorMap.channel),sheenRoughnessMapUv:nA&&w(y.sheenRoughnessMap.channel),specularMapUv:zA&&w(y.specularMap.channel),specularColorMapUv:bA&&w(y.specularColorMap.channel),specularIntensityMapUv:rI&&w(y.specularIntensityMap.channel),transmissionMapUv:m&&w(y.transmissionMap.channel),thicknessMapUv:oA&&w(y.thicknessMap.channel),alphaMapUv:$&&w(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(XA||c),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!X.attributes.uv&&(GI||$),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:RA,skinning:b.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mA,morphTextureStride:ZA,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:y.dithering,shadowMapEnabled:B.shadowMap.enabled&&d.length>0,shadowMapType:B.shadowMap.type,toneMapping:kI,decodeVideoTexture:GI&&y.map.isVideoTexture===!0&&PA.getTransfer(y.map.colorSpace)===oI,decodeVideoTextureEmissive:wI&&y.emissiveMap.isVideoTexture===!0&&PA.getTransfer(y.emissiveMap.colorSpace)===oI,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sg,flipSided:y.side===Cg,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$A&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($A&&y.extensions.multiDraw===!0||WA)&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return VI.vertexUv1s=e.has(1),VI.vertexUv2s=e.has(2),VI.vertexUv3s=e.has(3),e.clear(),VI}function h(y){const G=[];if(y.shaderID?G.push(y.shaderID):(G.push(y.customVertexShaderID),G.push(y.customFragmentShaderID)),y.defines!==void 0)for(const d in y.defines)G.push(d),G.push(y.defines[d]);return y.isRawShaderMaterial===!1&&(U(G,y),M(G,y),G.push(B.outputColorSpace)),G.push(y.customProgramCacheKey),G.join()}function U(y,G){y.push(G.precision),y.push(G.outputColorSpace),y.push(G.envMapMode),y.push(G.envMapCubeUVHeight),y.push(G.mapUv),y.push(G.alphaMapUv),y.push(G.lightMapUv),y.push(G.aoMapUv),y.push(G.bumpMapUv),y.push(G.normalMapUv),y.push(G.displacementMapUv),y.push(G.emissiveMapUv),y.push(G.metalnessMapUv),y.push(G.roughnessMapUv),y.push(G.anisotropyMapUv),y.push(G.clearcoatMapUv),y.push(G.clearcoatNormalMapUv),y.push(G.clearcoatRoughnessMapUv),y.push(G.iridescenceMapUv),y.push(G.iridescenceThicknessMapUv),y.push(G.sheenColorMapUv),y.push(G.sheenRoughnessMapUv),y.push(G.specularMapUv),y.push(G.specularColorMapUv),y.push(G.specularIntensityMapUv),y.push(G.transmissionMapUv),y.push(G.thicknessMapUv),y.push(G.combine),y.push(G.fogExp2),y.push(G.sizeAttenuation),y.push(G.morphTargetsCount),y.push(G.morphAttributeCount),y.push(G.numDirLights),y.push(G.numPointLights),y.push(G.numSpotLights),y.push(G.numSpotLightMaps),y.push(G.numHemiLights),y.push(G.numRectAreaLights),y.push(G.numDirLightShadows),y.push(G.numPointLightShadows),y.push(G.numSpotLightShadows),y.push(G.numSpotLightShadowsWithMaps),y.push(G.numLightProbes),y.push(G.shadowMapType),y.push(G.toneMapping),y.push(G.numClippingPlanes),y.push(G.numClipIntersection),y.push(G.depthPacking)}function M(y,G){i.disableAll(),G.supportsVertexTextures&&i.enable(0),G.instancing&&i.enable(1),G.instancingColor&&i.enable(2),G.instancingMorph&&i.enable(3),G.matcap&&i.enable(4),G.envMap&&i.enable(5),G.normalMapObjectSpace&&i.enable(6),G.normalMapTangentSpace&&i.enable(7),G.clearcoat&&i.enable(8),G.iridescence&&i.enable(9),G.alphaTest&&i.enable(10),G.vertexColors&&i.enable(11),G.vertexAlphas&&i.enable(12),G.vertexUv1s&&i.enable(13),G.vertexUv2s&&i.enable(14),G.vertexUv3s&&i.enable(15),G.vertexTangents&&i.enable(16),G.anisotropy&&i.enable(17),G.alphaHash&&i.enable(18),G.batching&&i.enable(19),G.dispersion&&i.enable(20),G.batchingColor&&i.enable(21),y.push(i.mask),i.disableAll(),G.fog&&i.enable(0),G.useFog&&i.enable(1),G.flatShading&&i.enable(2),G.logarithmicDepthBuffer&&i.enable(3),G.reverseDepthBuffer&&i.enable(4),G.skinning&&i.enable(5),G.morphTargets&&i.enable(6),G.morphNormals&&i.enable(7),G.morphColors&&i.enable(8),G.premultipliedAlpha&&i.enable(9),G.shadowMapEnabled&&i.enable(10),G.doubleSided&&i.enable(11),G.flipSided&&i.enable(12),G.useDepthPacking&&i.enable(13),G.dithering&&i.enable(14),G.transmission&&i.enable(15),G.sheen&&i.enable(16),G.opaque&&i.enable(17),G.pointsUvs&&i.enable(18),G.decodeVideoTexture&&i.enable(19),G.decodeVideoTextureEmissive&&i.enable(20),G.alphaToCoverage&&i.enable(21),y.push(i.mask)}function l(y){const G=S[y.type];let d;if(G){const x=ug[G];d=fh.clone(x.uniforms)}else d=y.uniforms;return d}function R(y,G){let d;for(let x=0,b=t.length;x<b;x++){const W=t[x];if(W.cacheKey===G){d=W,++d.usedTimes;break}}return d===void 0&&(d=new Zc(B,G,y,Q),t.push(d)),d}function J(y){if(--y.usedTimes===0){const G=t.indexOf(y);t[G]=t[t.length-1],t.pop(),y.destroy()}}function K(y){o.remove(y)}function p(){o.dispose()}return{getParameters:n,getProgramCacheKey:h,getUniforms:l,acquireProgram:R,releaseProgram:J,releaseShaderCache:K,programs:t,dispose:p}}function Xc(){let B=new WeakMap;function A(E){return B.has(E)}function I(E){let i=B.get(E);return i===void 0&&(i={},B.set(E,i)),i}function g(E){B.delete(E)}function C(E,i,o){B.get(E)[i]=o}function Q(){B=new WeakMap}return{has:A,get:I,remove:g,update:C,dispose:Q}}function zc(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function Na(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function Ka(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,r,S,w,n){let h=B[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:r,groupOrder:S,renderOrder:a.renderOrder,z:w,group:n},B[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=r,h.groupOrder=S,h.renderOrder=a.renderOrder,h.z=w,h.group=n),A++,h}function i(a,s,r,S,w,n){const h=E(a,s,r,S,w,n);r.transmission>0?g.push(h):r.transparent===!0?C.push(h):I.push(h)}function o(a,s,r,S,w,n){const h=E(a,s,r,S,w,n);r.transmission>0?g.unshift(h):r.transparent===!0?C.unshift(h):I.unshift(h)}function e(a,s){I.length>1&&I.sort(a||zc),g.length>1&&g.sort(s||Na),C.length>1&&C.sort(s||Na)}function t(){for(let a=A,s=B.length;a<s;a++){const r=B[a];if(r.id===null)break;r.id=null,r.object=null,r.geometry=null,r.material=null,r.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:t,sort:e}}function $c(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new Ka,B.set(g,[E])):C>=Q.length?(E=new Ka,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function Al(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new Y,color:new JA};break;case"SpotLight":I={position:new Y,direction:new Y,color:new JA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new Y,color:new JA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new Y,skyColor:new JA,groundColor:new JA};break;case"RectAreaLight":I={color:new JA,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return B[A.id]=I,I}}}function Il(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let gl=0;function Cl(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function Bl(B){const A=new Al,I=Il(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)g.probe.push(new Y);const C=new Y,Q=new uA,E=new uA;function i(e){let t=0,a=0,s=0;for(let y=0;y<9;y++)g.probe[y].set(0,0,0);let r=0,S=0,w=0,n=0,h=0,U=0,M=0,l=0,R=0,J=0,K=0;e.sort(Cl);for(let y=0,G=e.length;y<G;y++){const d=e[y],x=d.color,b=d.intensity,W=d.distance,X=d.shadow&&d.shadow.map?d.shadow.map.texture:null;if(d.isAmbientLight)t+=x.r*b,a+=x.g*b,s+=x.b*b;else if(d.isLightProbe){for(let _=0;_<9;_++)g.probe[_].addScaledVector(d.sh.coefficients[_],b);K++}else if(d.isDirectionalLight){const _=A.get(d);if(_.color.copy(d.color).multiplyScalar(d.intensity),d.castShadow){const gA=d.shadow,P=I.get(d);P.shadowIntensity=gA.intensity,P.shadowBias=gA.bias,P.shadowNormalBias=gA.normalBias,P.shadowRadius=gA.radius,P.shadowMapSize=gA.mapSize,g.directionalShadow[r]=P,g.directionalShadowMap[r]=X,g.directionalShadowMatrix[r]=d.shadow.matrix,U++}g.directional[r]=_,r++}else if(d.isSpotLight){const _=A.get(d);_.position.setFromMatrixPosition(d.matrixWorld),_.color.copy(x).multiplyScalar(b),_.distance=W,_.coneCos=Math.cos(d.angle),_.penumbraCos=Math.cos(d.angle*(1-d.penumbra)),_.decay=d.decay,g.spot[w]=_;const gA=d.shadow;if(d.map&&(g.spotLightMap[R]=d.map,R++,gA.updateMatrices(d),d.castShadow&&J++),g.spotLightMatrix[w]=gA.matrix,d.castShadow){const P=I.get(d);P.shadowIntensity=gA.intensity,P.shadowBias=gA.bias,P.shadowNormalBias=gA.normalBias,P.shadowRadius=gA.radius,P.shadowMapSize=gA.mapSize,g.spotShadow[w]=P,g.spotShadowMap[w]=X,l++}w++}else if(d.isRectAreaLight){const _=A.get(d);_.color.copy(x).multiplyScalar(b),_.halfWidth.set(d.width*.5,0,0),_.halfHeight.set(0,d.height*.5,0),g.rectArea[n]=_,n++}else if(d.isPointLight){const _=A.get(d);if(_.color.copy(d.color).multiplyScalar(d.intensity),_.distance=d.distance,_.decay=d.decay,d.castShadow){const gA=d.shadow,P=I.get(d);P.shadowIntensity=gA.intensity,P.shadowBias=gA.bias,P.shadowNormalBias=gA.normalBias,P.shadowRadius=gA.radius,P.shadowMapSize=gA.mapSize,P.shadowCameraNear=gA.camera.near,P.shadowCameraFar=gA.camera.far,g.pointShadow[S]=P,g.pointShadowMap[S]=X,g.pointShadowMatrix[S]=d.shadow.matrix,M++}g.point[S]=_,S++}else if(d.isHemisphereLight){const _=A.get(d);_.skyColor.copy(d.color).multiplyScalar(b),_.groundColor.copy(d.groundColor).multiplyScalar(b),g.hemi[h]=_,h++}}n>0&&(B.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=iA.LTC_FLOAT_1,g.rectAreaLTC2=iA.LTC_FLOAT_2):(g.rectAreaLTC1=iA.LTC_HALF_1,g.rectAreaLTC2=iA.LTC_HALF_2)),g.ambient[0]=t,g.ambient[1]=a,g.ambient[2]=s;const p=g.hash;(p.directionalLength!==r||p.pointLength!==S||p.spotLength!==w||p.rectAreaLength!==n||p.hemiLength!==h||p.numDirectionalShadows!==U||p.numPointShadows!==M||p.numSpotShadows!==l||p.numSpotMaps!==R||p.numLightProbes!==K)&&(g.directional.length=r,g.spot.length=w,g.rectArea.length=n,g.point.length=S,g.hemi.length=h,g.directionalShadow.length=U,g.directionalShadowMap.length=U,g.pointShadow.length=M,g.pointShadowMap.length=M,g.spotShadow.length=l,g.spotShadowMap.length=l,g.directionalShadowMatrix.length=U,g.pointShadowMatrix.length=M,g.spotLightMatrix.length=l+R-J,g.spotLightMap.length=R,g.numSpotLightShadowsWithMaps=J,g.numLightProbes=K,p.directionalLength=r,p.pointLength=S,p.spotLength=w,p.rectAreaLength=n,p.hemiLength=h,p.numDirectionalShadows=U,p.numPointShadows=M,p.numSpotShadows=l,p.numSpotMaps=R,p.numLightProbes=K,g.version=gl++)}function o(e,t){let a=0,s=0,r=0,S=0,w=0;const n=t.matrixWorldInverse;for(let h=0,U=e.length;h<U;h++){const M=e[h];if(M.isDirectionalLight){const l=g.directional[a];l.direction.setFromMatrixPosition(M.matrixWorld),C.setFromMatrixPosition(M.target.matrixWorld),l.direction.sub(C),l.direction.transformDirection(n),a++}else if(M.isSpotLight){const l=g.spot[r];l.position.setFromMatrixPosition(M.matrixWorld),l.position.applyMatrix4(n),l.direction.setFromMatrixPosition(M.matrixWorld),C.setFromMatrixPosition(M.target.matrixWorld),l.direction.sub(C),l.direction.transformDirection(n),r++}else if(M.isRectAreaLight){const l=g.rectArea[S];l.position.setFromMatrixPosition(M.matrixWorld),l.position.applyMatrix4(n),E.identity(),Q.copy(M.matrixWorld),Q.premultiply(n),E.extractRotation(Q),l.halfWidth.set(M.width*.5,0,0),l.halfHeight.set(0,M.height*.5,0),l.halfWidth.applyMatrix4(E),l.halfHeight.applyMatrix4(E),S++}else if(M.isPointLight){const l=g.point[s];l.position.setFromMatrixPosition(M.matrixWorld),l.position.applyMatrix4(n),s++}else if(M.isHemisphereLight){const l=g.hemi[w];l.direction.setFromMatrixPosition(M.matrixWorld),l.direction.transformDirection(n),w++}}}return{setup:i,setupView:o,state:g}}function Ja(B){const A=new Bl(B),I=[],g=[];function C(t){e.camera=t,I.length=0,g.length=0}function Q(t){I.push(t)}function E(t){g.push(t)}function i(){A.setup(I)}function o(t){A.setupView(I,t)}const e={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:C,state:e,setupLights:i,setupLightsView:o,pushLight:Q,pushShadow:E}}function Ql(B){let A=new WeakMap;function I(C,Q=0){const E=A.get(C);let i;return E===void 0?(i=new Ja(B),A.set(C,[i])):Q>=E.length?(i=new Ja(B),E.push(i)):i=E[Q],i}function g(){A=new WeakMap}return{get:I,dispose:g}}const El=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,il=`uniform sampler2D shadow_pass;
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
}`;function ol(B,A,I){let g=new io;const C=new LA,Q=new LA,E=new gI,i=new Ir({depthPacking:OD}),o=new gr,e={},t=I.maxTextureSize,a={[vg]:Cg,[Cg]:vg,[Sg]:Sg},s=new IC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new LA},radius:{value:4}},vertexShader:El,fragmentShader:il}),r=s.clone();r.defines.HORIZONTAL_PASS=1;const S=new zI;S.setAttribute("position",new dI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new yI(S,s),n=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fe;let h=this.type;this.render=function(J,K,p){if(n.enabled===!1||n.autoUpdate===!1&&n.needsUpdate===!1||J.length===0)return;const y=B.getRenderTarget(),G=B.getActiveCubeFace(),d=B.getActiveMipmapLevel(),x=B.state;x.setBlending(tC),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);const b=h!==Og&&this.type===Og,W=h===Og&&this.type!==Og;for(let X=0,_=J.length;X<_;X++){const gA=J[X],P=gA.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",gA,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;C.copy(P.mapSize);const QA=P.getFrameExtents();if(C.multiply(QA),Q.copy(P.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(Q.x=Math.floor(t/QA.x),C.x=Q.x*QA.x,P.mapSize.x=Q.x),C.y>t&&(Q.y=Math.floor(t/QA.y),C.y=Q.y*QA.y,P.mapSize.y=Q.y)),P.map===null||b===!0||W===!0){const mA=this.type!==Og?{minFilter:xI,magFilter:xI}:{};P.map!==null&&P.map.dispose(),P.map=new RC(C.x,C.y,mA),P.map.texture.name=gA.name+".shadowMap",P.camera.updateProjectionMatrix()}B.setRenderTarget(P.map),B.clear();const cA=P.getViewportCount();for(let mA=0;mA<cA;mA++){const ZA=P.getViewport(mA);E.set(Q.x*ZA.x,Q.y*ZA.y,Q.x*ZA.z,Q.y*ZA.w),x.viewport(E),P.updateMatrices(gA,mA),g=P.getFrustum(),l(K,p,P.camera,gA,this.type)}P.isPointLightShadow!==!0&&this.type===Og&&U(P,p),P.needsUpdate=!1}h=this.type,n.needsUpdate=!1,B.setRenderTarget(y,G,d)};function U(J,K){const p=A.update(w);s.defines.VSM_SAMPLES!==J.blurSamples&&(s.defines.VSM_SAMPLES=J.blurSamples,r.defines.VSM_SAMPLES=J.blurSamples,s.needsUpdate=!0,r.needsUpdate=!0),J.mapPass===null&&(J.mapPass=new RC(C.x,C.y)),s.uniforms.shadow_pass.value=J.map.texture,s.uniforms.resolution.value=J.mapSize,s.uniforms.radius.value=J.radius,B.setRenderTarget(J.mapPass),B.clear(),B.renderBufferDirect(K,null,p,s,w,null),r.uniforms.shadow_pass.value=J.mapPass.texture,r.uniforms.resolution.value=J.mapSize,r.uniforms.radius.value=J.radius,B.setRenderTarget(J.map),B.clear(),B.renderBufferDirect(K,null,p,r,w,null)}function M(J,K,p,y){let G=null;const d=p.isPointLight===!0?J.customDistanceMaterial:J.customDepthMaterial;if(d!==void 0)G=d;else if(G=p.isPointLight===!0?o:i,B.localClippingEnabled&&K.clipShadows===!0&&Array.isArray(K.clippingPlanes)&&K.clippingPlanes.length!==0||K.displacementMap&&K.displacementScale!==0||K.alphaMap&&K.alphaTest>0||K.map&&K.alphaTest>0){const x=G.uuid,b=K.uuid;let W=e[x];W===void 0&&(W={},e[x]=W);let X=W[b];X===void 0&&(X=G.clone(),W[b]=X,K.addEventListener("dispose",R)),G=X}if(G.visible=K.visible,G.wireframe=K.wireframe,y===Og?G.side=K.shadowSide!==null?K.shadowSide:K.side:G.side=K.shadowSide!==null?K.shadowSide:a[K.side],G.alphaMap=K.alphaMap,G.alphaTest=K.alphaTest,G.map=K.map,G.clipShadows=K.clipShadows,G.clippingPlanes=K.clippingPlanes,G.clipIntersection=K.clipIntersection,G.displacementMap=K.displacementMap,G.displacementScale=K.displacementScale,G.displacementBias=K.displacementBias,G.wireframeLinewidth=K.wireframeLinewidth,G.linewidth=K.linewidth,p.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const x=B.properties.get(G);x.light=p}return G}function l(J,K,p,y,G){if(J.visible===!1)return;if(J.layers.test(K.layers)&&(J.isMesh||J.isLine||J.isPoints)&&(J.castShadow||J.receiveShadow&&G===Og)&&(!J.frustumCulled||g.intersectsObject(J))){J.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,J.matrixWorld);const x=A.update(J),b=J.material;if(Array.isArray(b)){const W=x.groups;for(let X=0,_=W.length;X<_;X++){const gA=W[X],P=b[gA.materialIndex];if(P&&P.visible){const QA=M(J,P,y,G);J.onBeforeShadow(B,J,K,p,x,QA,gA),B.renderBufferDirect(p,null,x,QA,J,gA),J.onAfterShadow(B,J,K,p,x,QA,gA)}}}else if(b.visible){const W=M(J,b,y,G);J.onBeforeShadow(B,J,K,p,x,W,null),B.renderBufferDirect(p,null,x,W,J,null),J.onAfterShadow(B,J,K,p,x,W,null)}}const d=J.children;for(let x=0,b=d.length;x<b;x++)l(d[x],K,p,y,G)}function R(J){J.target.removeEventListener("dispose",R);for(const K in e){const p=e[K],y=J.target.uuid;y in p&&(p[y].dispose(),delete p[y])}}}const el={[bE]:OE,[vE]:WE,[_E]:PE,[XC]:ZE,[OE]:bE,[WE]:vE,[PE]:_E,[ZE]:XC};function tl(B,A){function I(){let m=!1;const oA=new gI;let Z=null;const $=new gI(0,0,0,0);return{setMask:function(aA){Z!==aA&&!m&&(B.colorMask(aA,aA,aA,aA),Z=aA)},setLocked:function(aA){m=aA},setClear:function(aA,EA,$A,kI,VI){VI===!0&&(aA*=kI,EA*=kI,$A*=kI),oA.set(aA,EA,$A,kI),$.equals(oA)===!1&&(B.clearColor(aA,EA,$A,kI),$.copy(oA))},reset:function(){m=!1,Z=null,$.set(-1,0,0,0)}}}function g(){let m=!1,oA=!1,Z=null,$=null,aA=null;return{setReversed:function(EA){if(oA!==EA){const $A=A.get("EXT_clip_control");oA?$A.clipControlEXT($A.LOWER_LEFT_EXT,$A.ZERO_TO_ONE_EXT):$A.clipControlEXT($A.LOWER_LEFT_EXT,$A.NEGATIVE_ONE_TO_ONE_EXT);const kI=aA;aA=null,this.setClear(kI)}oA=EA},getReversed:function(){return oA},setTest:function(EA){EA?eA(B.DEPTH_TEST):RA(B.DEPTH_TEST)},setMask:function(EA){Z!==EA&&!m&&(B.depthMask(EA),Z=EA)},setFunc:function(EA){if(oA&&(EA=el[EA]),$!==EA){switch(EA){case bE:B.depthFunc(B.NEVER);break;case OE:B.depthFunc(B.ALWAYS);break;case vE:B.depthFunc(B.LESS);break;case XC:B.depthFunc(B.LEQUAL);break;case _E:B.depthFunc(B.EQUAL);break;case ZE:B.depthFunc(B.GEQUAL);break;case WE:B.depthFunc(B.GREATER);break;case PE:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}$=EA}},setLocked:function(EA){m=EA},setClear:function(EA){aA!==EA&&(oA&&(EA=1-EA),B.clearDepth(EA),aA=EA)},reset:function(){m=!1,Z=null,$=null,aA=null,oA=!1}}}function C(){let m=!1,oA=null,Z=null,$=null,aA=null,EA=null,$A=null,kI=null,VI=null;return{setTest:function(iI){m||(iI?eA(B.STENCIL_TEST):RA(B.STENCIL_TEST))},setMask:function(iI){oA!==iI&&!m&&(B.stencilMask(iI),oA=iI)},setFunc:function(iI,Jg,eC){(Z!==iI||$!==Jg||aA!==eC)&&(B.stencilFunc(iI,Jg,eC),Z=iI,$=Jg,aA=eC)},setOp:function(iI,Jg,eC){(EA!==iI||$A!==Jg||kI!==eC)&&(B.stencilOp(iI,Jg,eC),EA=iI,$A=Jg,kI=eC)},setLocked:function(iI){m=iI},setClear:function(iI){VI!==iI&&(B.clearStencil(iI),VI=iI)},reset:function(){m=!1,oA=null,Z=null,$=null,aA=null,EA=null,$A=null,kI=null,VI=null}}}const Q=new I,E=new g,i=new C,o=new WeakMap,e=new WeakMap;let t={},a={},s=new WeakMap,r=[],S=null,w=!1,n=null,h=null,U=null,M=null,l=null,R=null,J=null,K=new JA(0,0,0),p=0,y=!1,G=null,d=null,x=null,b=null,W=null;const X=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _=!1,gA=0;const P=B.getParameter(B.VERSION);P.indexOf("WebGL")!==-1?(gA=parseFloat(/^WebGL (\d)/.exec(P)[1]),_=gA>=1):P.indexOf("OpenGL ES")!==-1&&(gA=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),_=gA>=2);let QA=null,cA={};const mA=B.getParameter(B.SCISSOR_BOX),ZA=B.getParameter(B.VIEWPORT),DI=new gI().fromArray(mA),V=new gI().fromArray(ZA);function BA(m,oA,Z,$){const aA=new Uint8Array(4),EA=B.createTexture();B.bindTexture(m,EA),B.texParameteri(m,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(m,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let $A=0;$A<Z;$A++)m===B.TEXTURE_3D||m===B.TEXTURE_2D_ARRAY?B.texImage3D(oA,0,B.RGBA,1,1,$,0,B.RGBA,B.UNSIGNED_BYTE,aA):B.texImage2D(oA+$A,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,aA);return EA}const GA={};GA[B.TEXTURE_2D]=BA(B.TEXTURE_2D,B.TEXTURE_2D,1),GA[B.TEXTURE_CUBE_MAP]=BA(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),GA[B.TEXTURE_2D_ARRAY]=BA(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),GA[B.TEXTURE_3D]=BA(B.TEXTURE_3D,B.TEXTURE_3D,1,1),Q.setClear(0,0,0,1),E.setClear(1),i.setClear(0),eA(B.DEPTH_TEST),E.setFunc(XC),jA(!1),XA(MC),eA(B.CULL_FACE),q(tC);function eA(m){t[m]!==!0&&(B.enable(m),t[m]=!0)}function RA(m){t[m]!==!1&&(B.disable(m),t[m]=!1)}function HA(m,oA){return a[m]!==oA?(B.bindFramebuffer(m,oA),a[m]=oA,m===B.DRAW_FRAMEBUFFER&&(a[B.FRAMEBUFFER]=oA),m===B.FRAMEBUFFER&&(a[B.DRAW_FRAMEBUFFER]=oA),!0):!1}function WA(m,oA){let Z=r,$=!1;if(m){Z=s.get(oA),Z===void 0&&(Z=[],s.set(oA,Z));const aA=m.textures;if(Z.length!==aA.length||Z[0]!==B.COLOR_ATTACHMENT0){for(let EA=0,$A=aA.length;EA<$A;EA++)Z[EA]=B.COLOR_ATTACHMENT0+EA;Z.length=aA.length,$=!0}}else Z[0]!==B.BACK&&(Z[0]=B.BACK,$=!0);$&&B.drawBuffers(Z)}function GI(m){return S!==m?(B.useProgram(m),S=m,!0):!1}const AI={[NC]:B.FUNC_ADD,[aD]:B.FUNC_SUBTRACT,[sD]:B.FUNC_REVERSE_SUBTRACT};AI[DD]=B.MIN,AI[hD]=B.MAX;const NI={[rD]:B.ZERO,[nD]:B.ONE,[SD]:B.SRC_COLOR,[TE]:B.SRC_ALPHA,[yD]:B.SRC_ALPHA_SATURATE,[GD]:B.DST_COLOR,[cD]:B.DST_ALPHA,[wD]:B.ONE_MINUS_SRC_COLOR,[xE]:B.ONE_MINUS_SRC_ALPHA,[kD]:B.ONE_MINUS_DST_COLOR,[lD]:B.ONE_MINUS_DST_ALPHA,[UD]:B.CONSTANT_COLOR,[MD]:B.ONE_MINUS_CONSTANT_COLOR,[ND]:B.CONSTANT_ALPHA,[KD]:B.ONE_MINUS_CONSTANT_ALPHA};function q(m,oA,Z,$,aA,EA,$A,kI,VI,iI){if(m===tC){w===!0&&(RA(B.BLEND),w=!1);return}if(w===!1&&(eA(B.BLEND),w=!0),m!==tD){if(m!==n||iI!==y){if((h!==NC||l!==NC)&&(B.blendEquation(B.FUNC_ADD),h=NC,l=NC),iI)switch(m){case jC:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case fE:B.blendFunc(B.ONE,B.ONE);break;case Re:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case pe:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}else switch(m){case jC:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case fE:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case Re:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case pe:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}U=null,M=null,R=null,J=null,K.set(0,0,0),p=0,n=m,y=iI}return}aA=aA||oA,EA=EA||Z,$A=$A||$,(oA!==h||aA!==l)&&(B.blendEquationSeparate(AI[oA],AI[aA]),h=oA,l=aA),(Z!==U||$!==M||EA!==R||$A!==J)&&(B.blendFuncSeparate(NI[Z],NI[$],NI[EA],NI[$A]),U=Z,M=$,R=EA,J=$A),(kI.equals(K)===!1||VI!==p)&&(B.blendColor(kI.r,kI.g,kI.b,VI),K.copy(kI),p=VI),n=m,y=!1}function hg(m,oA){m.side===Sg?RA(B.CULL_FACE):eA(B.CULL_FACE);let Z=m.side===Cg;oA&&(Z=!Z),jA(Z),m.blending===jC&&m.transparent===!1?q(tC):q(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),E.setFunc(m.depthFunc),E.setTest(m.depthTest),E.setMask(m.depthWrite),Q.setMask(m.colorWrite);const $=m.stencilWrite;i.setTest($),$&&(i.setMask(m.stencilWriteMask),i.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),i.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),wI(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?eA(B.SAMPLE_ALPHA_TO_COVERAGE):RA(B.SAMPLE_ALPHA_TO_COVERAGE)}function jA(m){G!==m&&(m?B.frontFace(B.CW):B.frontFace(B.CCW),G=m)}function XA(m){m!==bg?(eA(B.CULL_FACE),m!==d&&(m===MC?B.cullFace(B.BACK):m===oD?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):RA(B.CULL_FACE),d=m}function yA(m){m!==x&&(_&&B.lineWidth(m),x=m)}function wI(m,oA,Z){m?(eA(B.POLYGON_OFFSET_FILL),(b!==oA||W!==Z)&&(B.polygonOffset(oA,Z),b=oA,W=Z)):RA(B.POLYGON_OFFSET_FILL)}function UA(m){m?eA(B.SCISSOR_TEST):RA(B.SCISSOR_TEST)}function N(m){m===void 0&&(m=B.TEXTURE0+X-1),QA!==m&&(B.activeTexture(m),QA=m)}function c(m,oA,Z){Z===void 0&&(QA===null?Z=B.TEXTURE0+X-1:Z=QA);let $=cA[Z];$===void 0&&($={type:void 0,texture:void 0},cA[Z]=$),($.type!==m||$.texture!==oA)&&(QA!==Z&&(B.activeTexture(Z),QA=Z),B.bindTexture(m,oA||GA[m]),$.type=m,$.texture=oA)}function T(){const m=cA[QA];m!==void 0&&m.type!==void 0&&(B.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function z(){try{B.compressedTexImage2D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function IA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function j(){try{B.texSubImage2D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function kA(){try{B.texSubImage3D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function tA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function wA(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function II(){try{B.texStorage2D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function CA(){try{B.texStorage3D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function rA(){try{B.texImage2D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function FA(){try{B.texImage3D.apply(B,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function pA(m){DI.equals(m)===!1&&(B.scissor(m.x,m.y,m.z,m.w),DI.copy(m))}function nA(m){V.equals(m)===!1&&(B.viewport(m.x,m.y,m.z,m.w),V.copy(m))}function zA(m,oA){let Z=e.get(oA);Z===void 0&&(Z=new WeakMap,e.set(oA,Z));let $=Z.get(m);$===void 0&&($=B.getUniformBlockIndex(oA,m.name),Z.set(m,$))}function bA(m,oA){const Z=e.get(oA).get(m);o.get(oA)!==Z&&(B.uniformBlockBinding(oA,Z,m.__bindingPointIndex),o.set(oA,Z))}function rI(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.blendColor(0,0,0,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),E.setReversed(!1),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),t={},QA=null,cA={},a={},s=new WeakMap,r=[],S=null,w=!1,n=null,h=null,U=null,M=null,l=null,R=null,J=null,K=new JA(0,0,0),p=0,y=!1,G=null,d=null,x=null,b=null,W=null,DI.set(0,0,B.canvas.width,B.canvas.height),V.set(0,0,B.canvas.width,B.canvas.height),Q.reset(),E.reset(),i.reset()}return{buffers:{color:Q,depth:E,stencil:i},enable:eA,disable:RA,bindFramebuffer:HA,drawBuffers:WA,useProgram:GI,setBlending:q,setMaterial:hg,setFlipSided:jA,setCullFace:XA,setLineWidth:yA,setPolygonOffset:wI,setScissorTest:UA,activeTexture:N,bindTexture:c,unbindTexture:T,compressedTexImage2D:z,compressedTexImage3D:IA,texImage2D:rA,texImage3D:FA,updateUBOMapping:zA,uniformBlockBinding:bA,texStorage2D:II,texStorage3D:CA,texSubImage2D:j,texSubImage3D:kA,compressedTexSubImage2D:tA,compressedTexSubImage3D:wA,scissor:pA,viewport:nA,reset:rI}}function al(B,A,I,g,C,Q,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new LA,t=new WeakMap;let a;const s=new WeakMap;let r=!1;try{r=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,c){return r?new OffscreenCanvas(N,c):_B("canvas")}function w(N,c,T){let z=1;const IA=UA(N);if((IA.width>T||IA.height>T)&&(z=T/Math.max(IA.width,IA.height)),z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const j=Math.floor(z*IA.width),kA=Math.floor(z*IA.height);a===void 0&&(a=S(j,kA));const tA=c?S(j,kA):a;return tA.width=j,tA.height=kA,tA.getContext("2d").drawImage(N,0,0,j,kA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+IA.width+"x"+IA.height+") to ("+j+"x"+kA+")."),tA}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+IA.width+"x"+IA.height+")."),N;return N}function n(N){return N.generateMipmaps}function h(N){B.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?B.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?B.TEXTURE_2D_ARRAY:B.TEXTURE_2D}function M(N,c,T,z,IA=!1){if(N!==null){if(B[N]!==void 0)return B[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let j=c;if(c===B.RED&&(T===B.FLOAT&&(j=B.R32F),T===B.HALF_FLOAT&&(j=B.R16F),T===B.UNSIGNED_BYTE&&(j=B.R8)),c===B.RED_INTEGER&&(T===B.UNSIGNED_BYTE&&(j=B.R8UI),T===B.UNSIGNED_SHORT&&(j=B.R16UI),T===B.UNSIGNED_INT&&(j=B.R32UI),T===B.BYTE&&(j=B.R8I),T===B.SHORT&&(j=B.R16I),T===B.INT&&(j=B.R32I)),c===B.RG&&(T===B.FLOAT&&(j=B.RG32F),T===B.HALF_FLOAT&&(j=B.RG16F),T===B.UNSIGNED_BYTE&&(j=B.RG8)),c===B.RG_INTEGER&&(T===B.UNSIGNED_BYTE&&(j=B.RG8UI),T===B.UNSIGNED_SHORT&&(j=B.RG16UI),T===B.UNSIGNED_INT&&(j=B.RG32UI),T===B.BYTE&&(j=B.RG8I),T===B.SHORT&&(j=B.RG16I),T===B.INT&&(j=B.RG32I)),c===B.RGB_INTEGER&&(T===B.UNSIGNED_BYTE&&(j=B.RGB8UI),T===B.UNSIGNED_SHORT&&(j=B.RGB16UI),T===B.UNSIGNED_INT&&(j=B.RGB32UI),T===B.BYTE&&(j=B.RGB8I),T===B.SHORT&&(j=B.RGB16I),T===B.INT&&(j=B.RGB32I)),c===B.RGBA_INTEGER&&(T===B.UNSIGNED_BYTE&&(j=B.RGBA8UI),T===B.UNSIGNED_SHORT&&(j=B.RGBA16UI),T===B.UNSIGNED_INT&&(j=B.RGBA32UI),T===B.BYTE&&(j=B.RGBA8I),T===B.SHORT&&(j=B.RGBA16I),T===B.INT&&(j=B.RGBA32I)),c===B.RGB&&T===B.UNSIGNED_INT_5_9_9_9_REV&&(j=B.RGB9_E5),c===B.RGBA){const kA=IA?fQ:PA.getTransfer(z);T===B.FLOAT&&(j=B.RGBA32F),T===B.HALF_FLOAT&&(j=B.RGBA16F),T===B.UNSIGNED_BYTE&&(j=kA===oI?B.SRGB8_ALPHA8:B.RGBA8),T===B.UNSIGNED_SHORT_4_4_4_4&&(j=B.RGBA4),T===B.UNSIGNED_SHORT_5_5_5_1&&(j=B.RGB5_A1)}return(j===B.R16F||j===B.R32F||j===B.RG16F||j===B.RG32F||j===B.RGBA16F||j===B.RGBA32F)&&A.get("EXT_color_buffer_float"),j}function l(N,c){let T;return N?c===null||c===JC||c===AB?T=B.DEPTH24_STENCIL8:c===Bg?T=B.DEPTH32F_STENCIL8:c===TB&&(T=B.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):c===null||c===JC||c===AB?T=B.DEPTH_COMPONENT24:c===Bg?T=B.DEPTH_COMPONENT32F:c===TB&&(T=B.DEPTH_COMPONENT16),T}function R(N,c){return n(N)===!0||N.isFramebufferTexture&&N.minFilter!==xI&&N.minFilter!==mI?Math.log2(Math.max(c.width,c.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?c.mipmaps.length:1}function J(N){const c=N.target;c.removeEventListener("dispose",J),p(c),c.isVideoTexture&&t.delete(c)}function K(N){const c=N.target;c.removeEventListener("dispose",K),G(c)}function p(N){const c=g.get(N);if(c.__webglInit===void 0)return;const T=N.source,z=s.get(T);if(z){const IA=z[c.__cacheKey];IA.usedTimes--,IA.usedTimes===0&&y(N),Object.keys(z).length===0&&s.delete(T)}g.remove(N)}function y(N){const c=g.get(N);B.deleteTexture(c.__webglTexture);const T=N.source,z=s.get(T);delete z[c.__cacheKey],E.memory.textures--}function G(N){const c=g.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),g.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(c.__webglFramebuffer[z]))for(let IA=0;IA<c.__webglFramebuffer[z].length;IA++)B.deleteFramebuffer(c.__webglFramebuffer[z][IA]);else B.deleteFramebuffer(c.__webglFramebuffer[z]);c.__webglDepthbuffer&&B.deleteRenderbuffer(c.__webglDepthbuffer[z])}else{if(Array.isArray(c.__webglFramebuffer))for(let z=0;z<c.__webglFramebuffer.length;z++)B.deleteFramebuffer(c.__webglFramebuffer[z]);else B.deleteFramebuffer(c.__webglFramebuffer);if(c.__webglDepthbuffer&&B.deleteRenderbuffer(c.__webglDepthbuffer),c.__webglMultisampledFramebuffer&&B.deleteFramebuffer(c.__webglMultisampledFramebuffer),c.__webglColorRenderbuffer)for(let z=0;z<c.__webglColorRenderbuffer.length;z++)c.__webglColorRenderbuffer[z]&&B.deleteRenderbuffer(c.__webglColorRenderbuffer[z]);c.__webglDepthRenderbuffer&&B.deleteRenderbuffer(c.__webglDepthRenderbuffer)}const T=N.textures;for(let z=0,IA=T.length;z<IA;z++){const j=g.get(T[z]);j.__webglTexture&&(B.deleteTexture(j.__webglTexture),E.memory.textures--),g.remove(T[z])}g.remove(N)}let d=0;function x(){d=0}function b(){const N=d;return N>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+C.maxTextures),d+=1,N}function W(N){const c=[];return c.push(N.wrapS),c.push(N.wrapT),c.push(N.wrapR||0),c.push(N.magFilter),c.push(N.minFilter),c.push(N.anisotropy),c.push(N.internalFormat),c.push(N.format),c.push(N.type),c.push(N.generateMipmaps),c.push(N.premultiplyAlpha),c.push(N.flipY),c.push(N.unpackAlignment),c.push(N.colorSpace),c.join()}function X(N,c){const T=g.get(N);if(N.isVideoTexture&&yA(N),N.isRenderTargetTexture===!1&&N.version>0&&T.__version!==N.version){const z=N.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(T,N,c);return}}I.bindTexture(B.TEXTURE_2D,T.__webglTexture,B.TEXTURE0+c)}function _(N,c){const T=g.get(N);if(N.version>0&&T.__version!==N.version){V(T,N,c);return}I.bindTexture(B.TEXTURE_2D_ARRAY,T.__webglTexture,B.TEXTURE0+c)}function gA(N,c){const T=g.get(N);if(N.version>0&&T.__version!==N.version){V(T,N,c);return}I.bindTexture(B.TEXTURE_3D,T.__webglTexture,B.TEXTURE0+c)}function P(N,c){const T=g.get(N);if(N.version>0&&T.__version!==N.version){BA(T,N,c);return}I.bindTexture(B.TEXTURE_CUBE_MAP,T.__webglTexture,B.TEXTURE0+c)}const QA={[KC]:B.REPEAT,[pg]:B.CLAMP_TO_EDGE,[pQ]:B.MIRRORED_REPEAT},cA={[xI]:B.NEAREST,[Ye]:B.NEAREST_MIPMAP_NEAREST,[fB]:B.NEAREST_MIPMAP_LINEAR,[mI]:B.LINEAR,[dQ]:B.LINEAR_MIPMAP_NEAREST,[dg]:B.LINEAR_MIPMAP_LINEAR},mA={[_D]:B.NEVER,[XD]:B.ALWAYS,[ZD]:B.LESS,[We]:B.LEQUAL,[WD]:B.EQUAL,[jD]:B.GEQUAL,[PD]:B.GREATER,[VD]:B.NOTEQUAL};function ZA(N,c){if(c.type===Bg&&A.has("OES_texture_float_linear")===!1&&(c.magFilter===mI||c.magFilter===dQ||c.magFilter===fB||c.magFilter===dg||c.minFilter===mI||c.minFilter===dQ||c.minFilter===fB||c.minFilter===dg)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B.texParameteri(N,B.TEXTURE_WRAP_S,QA[c.wrapS]),B.texParameteri(N,B.TEXTURE_WRAP_T,QA[c.wrapT]),(N===B.TEXTURE_3D||N===B.TEXTURE_2D_ARRAY)&&B.texParameteri(N,B.TEXTURE_WRAP_R,QA[c.wrapR]),B.texParameteri(N,B.TEXTURE_MAG_FILTER,cA[c.magFilter]),B.texParameteri(N,B.TEXTURE_MIN_FILTER,cA[c.minFilter]),c.compareFunction&&(B.texParameteri(N,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(N,B.TEXTURE_COMPARE_FUNC,mA[c.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(c.magFilter===xI||c.minFilter!==fB&&c.minFilter!==dg||c.type===Bg&&A.has("OES_texture_float_linear")===!1)return;if(c.anisotropy>1||g.get(c).__currentAnisotropy){const T=A.get("EXT_texture_filter_anisotropic");B.texParameterf(N,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,C.getMaxAnisotropy())),g.get(c).__currentAnisotropy=c.anisotropy}}}function DI(N,c){let T=!1;N.__webglInit===void 0&&(N.__webglInit=!0,c.addEventListener("dispose",J));const z=c.source;let IA=s.get(z);IA===void 0&&(IA={},s.set(z,IA));const j=W(c);if(j!==N.__cacheKey){IA[j]===void 0&&(IA[j]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,T=!0),IA[j].usedTimes++;const kA=IA[N.__cacheKey];kA!==void 0&&(IA[N.__cacheKey].usedTimes--,kA.usedTimes===0&&y(c)),N.__cacheKey=j,N.__webglTexture=IA[j].texture}return T}function V(N,c,T){let z=B.TEXTURE_2D;(c.isDataArrayTexture||c.isCompressedArrayTexture)&&(z=B.TEXTURE_2D_ARRAY),c.isData3DTexture&&(z=B.TEXTURE_3D);const IA=DI(N,c),j=c.source;I.bindTexture(z,N.__webglTexture,B.TEXTURE0+T);const kA=g.get(j);if(j.version!==kA.__version||IA===!0){I.activeTexture(B.TEXTURE0+T);const tA=PA.getPrimaries(PA.workingColorSpace),wA=c.colorSpace===sC?null:PA.getPrimaries(c.colorSpace),II=c.colorSpace===sC||tA===wA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,c.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,c.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,II);let CA=w(c.image,!1,C.maxTextureSize);CA=wI(c,CA);const rA=Q.convert(c.format,c.colorSpace),FA=Q.convert(c.type);let pA=M(c.internalFormat,rA,FA,c.colorSpace,c.isVideoTexture);ZA(z,c);let nA;const zA=c.mipmaps,bA=c.isVideoTexture!==!0,rI=kA.__version===void 0||IA===!0,m=j.dataReady,oA=R(c,CA);if(c.isDepthTexture)pA=l(c.format===gB,c.type),rI&&(bA?I.texStorage2D(B.TEXTURE_2D,1,pA,CA.width,CA.height):I.texImage2D(B.TEXTURE_2D,0,pA,CA.width,CA.height,0,rA,FA,null));else if(c.isDataTexture)if(zA.length>0){bA&&rI&&I.texStorage2D(B.TEXTURE_2D,oA,pA,zA[0].width,zA[0].height);for(let Z=0,$=zA.length;Z<$;Z++)nA=zA[Z],bA?m&&I.texSubImage2D(B.TEXTURE_2D,Z,0,0,nA.width,nA.height,rA,FA,nA.data):I.texImage2D(B.TEXTURE_2D,Z,pA,nA.width,nA.height,0,rA,FA,nA.data);c.generateMipmaps=!1}else bA?(rI&&I.texStorage2D(B.TEXTURE_2D,oA,pA,CA.width,CA.height),m&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,CA.width,CA.height,rA,FA,CA.data)):I.texImage2D(B.TEXTURE_2D,0,pA,CA.width,CA.height,0,rA,FA,CA.data);else if(c.isCompressedTexture)if(c.isCompressedArrayTexture){bA&&rI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,oA,pA,zA[0].width,zA[0].height,CA.depth);for(let Z=0,$=zA.length;Z<$;Z++)if(nA=zA[Z],c.format!==tg)if(rA!==null)if(bA){if(m)if(c.layerUpdates.size>0){const aA=$t(nA.width,nA.height,c.format,c.type);for(const EA of c.layerUpdates){const $A=nA.data.subarray(EA*aA/nA.data.BYTES_PER_ELEMENT,(EA+1)*aA/nA.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,Z,0,0,EA,nA.width,nA.height,1,rA,$A)}c.clearLayerUpdates()}else I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,Z,0,0,0,nA.width,nA.height,CA.depth,rA,nA.data)}else I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,Z,pA,nA.width,nA.height,CA.depth,0,nA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bA?m&&I.texSubImage3D(B.TEXTURE_2D_ARRAY,Z,0,0,0,nA.width,nA.height,CA.depth,rA,FA,nA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,Z,pA,nA.width,nA.height,CA.depth,0,rA,FA,nA.data)}else{bA&&rI&&I.texStorage2D(B.TEXTURE_2D,oA,pA,zA[0].width,zA[0].height);for(let Z=0,$=zA.length;Z<$;Z++)nA=zA[Z],c.format!==tg?rA!==null?bA?m&&I.compressedTexSubImage2D(B.TEXTURE_2D,Z,0,0,nA.width,nA.height,rA,nA.data):I.compressedTexImage2D(B.TEXTURE_2D,Z,pA,nA.width,nA.height,0,nA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bA?m&&I.texSubImage2D(B.TEXTURE_2D,Z,0,0,nA.width,nA.height,rA,FA,nA.data):I.texImage2D(B.TEXTURE_2D,Z,pA,nA.width,nA.height,0,rA,FA,nA.data)}else if(c.isDataArrayTexture)if(bA){if(rI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,oA,pA,CA.width,CA.height,CA.depth),m)if(c.layerUpdates.size>0){const Z=$t(CA.width,CA.height,c.format,c.type);for(const $ of c.layerUpdates){const aA=CA.data.subarray($*Z/CA.data.BYTES_PER_ELEMENT,($+1)*Z/CA.data.BYTES_PER_ELEMENT);I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,$,CA.width,CA.height,1,rA,FA,aA)}c.clearLayerUpdates()}else I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,CA.width,CA.height,CA.depth,rA,FA,CA.data)}else I.texImage3D(B.TEXTURE_2D_ARRAY,0,pA,CA.width,CA.height,CA.depth,0,rA,FA,CA.data);else if(c.isData3DTexture)bA?(rI&&I.texStorage3D(B.TEXTURE_3D,oA,pA,CA.width,CA.height,CA.depth),m&&I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,CA.width,CA.height,CA.depth,rA,FA,CA.data)):I.texImage3D(B.TEXTURE_3D,0,pA,CA.width,CA.height,CA.depth,0,rA,FA,CA.data);else if(c.isFramebufferTexture){if(rI)if(bA)I.texStorage2D(B.TEXTURE_2D,oA,pA,CA.width,CA.height);else{let Z=CA.width,$=CA.height;for(let aA=0;aA<oA;aA++)I.texImage2D(B.TEXTURE_2D,aA,pA,Z,$,0,rA,FA,null),Z>>=1,$>>=1}}else if(zA.length>0){if(bA&&rI){const Z=UA(zA[0]);I.texStorage2D(B.TEXTURE_2D,oA,pA,Z.width,Z.height)}for(let Z=0,$=zA.length;Z<$;Z++)nA=zA[Z],bA?m&&I.texSubImage2D(B.TEXTURE_2D,Z,0,0,rA,FA,nA):I.texImage2D(B.TEXTURE_2D,Z,pA,rA,FA,nA);c.generateMipmaps=!1}else if(bA){if(rI){const Z=UA(CA);I.texStorage2D(B.TEXTURE_2D,oA,pA,Z.width,Z.height)}m&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,rA,FA,CA)}else I.texImage2D(B.TEXTURE_2D,0,pA,rA,FA,CA);n(c)&&h(z),kA.__version=j.version,c.onUpdate&&c.onUpdate(c)}N.__version=c.version}function BA(N,c,T){if(c.image.length!==6)return;const z=DI(N,c),IA=c.source;I.bindTexture(B.TEXTURE_CUBE_MAP,N.__webglTexture,B.TEXTURE0+T);const j=g.get(IA);if(IA.version!==j.__version||z===!0){I.activeTexture(B.TEXTURE0+T);const kA=PA.getPrimaries(PA.workingColorSpace),tA=c.colorSpace===sC?null:PA.getPrimaries(c.colorSpace),wA=c.colorSpace===sC||kA===tA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,c.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,c.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,wA);const II=c.isCompressedTexture||c.image[0].isCompressedTexture,CA=c.image[0]&&c.image[0].isDataTexture,rA=[];for(let $=0;$<6;$++)!II&&!CA?rA[$]=w(c.image[$],!0,C.maxCubemapSize):rA[$]=CA?c.image[$].image:c.image[$],rA[$]=wI(c,rA[$]);const FA=rA[0],pA=Q.convert(c.format,c.colorSpace),nA=Q.convert(c.type),zA=M(c.internalFormat,pA,nA,c.colorSpace),bA=c.isVideoTexture!==!0,rI=j.__version===void 0||z===!0,m=IA.dataReady;let oA=R(c,FA);ZA(B.TEXTURE_CUBE_MAP,c);let Z;if(II){bA&&rI&&I.texStorage2D(B.TEXTURE_CUBE_MAP,oA,zA,FA.width,FA.height);for(let $=0;$<6;$++){Z=rA[$].mipmaps;for(let aA=0;aA<Z.length;aA++){const EA=Z[aA];c.format!==tg?pA!==null?bA?m&&I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,aA,0,0,EA.width,EA.height,pA,EA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,aA,zA,EA.width,EA.height,0,EA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bA?m&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,aA,0,0,EA.width,EA.height,pA,nA,EA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,aA,zA,EA.width,EA.height,0,pA,nA,EA.data)}}}else{if(Z=c.mipmaps,bA&&rI){Z.length>0&&oA++;const $=UA(rA[0]);I.texStorage2D(B.TEXTURE_CUBE_MAP,oA,zA,$.width,$.height)}for(let $=0;$<6;$++)if(CA){bA?m&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,rA[$].width,rA[$].height,pA,nA,rA[$].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zA,rA[$].width,rA[$].height,0,pA,nA,rA[$].data);for(let aA=0;aA<Z.length;aA++){const EA=Z[aA].image[$].image;bA?m&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,aA+1,0,0,EA.width,EA.height,pA,nA,EA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,aA+1,zA,EA.width,EA.height,0,pA,nA,EA.data)}}else{bA?m&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pA,nA,rA[$]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zA,pA,nA,rA[$]);for(let aA=0;aA<Z.length;aA++){const EA=Z[aA];bA?m&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,aA+1,0,0,pA,nA,EA.image[$]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+$,aA+1,zA,pA,nA,EA.image[$])}}}n(c)&&h(B.TEXTURE_CUBE_MAP),j.__version=IA.version,c.onUpdate&&c.onUpdate(c)}N.__version=c.version}function GA(N,c,T,z,IA,j){const kA=Q.convert(T.format,T.colorSpace),tA=Q.convert(T.type),wA=M(T.internalFormat,kA,tA,T.colorSpace),II=g.get(c),CA=g.get(T);if(CA.__renderTarget=c,!II.__hasExternalTextures){const rA=Math.max(1,c.width>>j),FA=Math.max(1,c.height>>j);IA===B.TEXTURE_3D||IA===B.TEXTURE_2D_ARRAY?I.texImage3D(IA,j,wA,rA,FA,c.depth,0,kA,tA,null):I.texImage2D(IA,j,wA,rA,FA,0,kA,tA,null)}I.bindFramebuffer(B.FRAMEBUFFER,N),XA(c)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,z,IA,CA.__webglTexture,0,jA(c)):(IA===B.TEXTURE_2D||IA>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&IA<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,z,IA,CA.__webglTexture,j),I.bindFramebuffer(B.FRAMEBUFFER,null)}function eA(N,c,T){if(B.bindRenderbuffer(B.RENDERBUFFER,N),c.depthBuffer){const z=c.depthTexture,IA=z&&z.isDepthTexture?z.type:null,j=l(c.stencilBuffer,IA),kA=c.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,tA=jA(c);XA(c)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,tA,j,c.width,c.height):T?B.renderbufferStorageMultisample(B.RENDERBUFFER,tA,j,c.width,c.height):B.renderbufferStorage(B.RENDERBUFFER,j,c.width,c.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,kA,B.RENDERBUFFER,N)}else{const z=c.textures;for(let IA=0;IA<z.length;IA++){const j=z[IA],kA=Q.convert(j.format,j.colorSpace),tA=Q.convert(j.type),wA=M(j.internalFormat,kA,tA,j.colorSpace),II=jA(c);T&&XA(c)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,II,wA,c.width,c.height):XA(c)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,II,wA,c.width,c.height):B.renderbufferStorage(B.RENDERBUFFER,wA,c.width,c.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function RA(N,c){if(c&&c.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,N),!(c.depthTexture&&c.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const T=g.get(c.depthTexture);T.__renderTarget=c,(!T.__webglTexture||c.depthTexture.image.width!==c.width||c.depthTexture.image.height!==c.height)&&(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),X(c.depthTexture,0);const z=T.__webglTexture,IA=jA(c);if(c.depthTexture.format===IB)XA(c)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,z,0,IA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,z,0);else if(c.depthTexture.format===gB)XA(c)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,z,0,IA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function HA(N){const c=g.get(N),T=N.isWebGLCubeRenderTarget===!0;if(c.__boundDepthTexture!==N.depthTexture){const z=N.depthTexture;if(c.__depthDisposeCallback&&c.__depthDisposeCallback(),z){const IA=()=>{delete c.__boundDepthTexture,delete c.__depthDisposeCallback,z.removeEventListener("dispose",IA)};z.addEventListener("dispose",IA),c.__depthDisposeCallback=IA}c.__boundDepthTexture=z}if(N.depthTexture&&!c.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");RA(c.__webglFramebuffer,N)}else if(T){c.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(I.bindFramebuffer(B.FRAMEBUFFER,c.__webglFramebuffer[z]),c.__webglDepthbuffer[z]===void 0)c.__webglDepthbuffer[z]=B.createRenderbuffer(),eA(c.__webglDepthbuffer[z],N,!1);else{const IA=N.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,j=c.__webglDepthbuffer[z];B.bindRenderbuffer(B.RENDERBUFFER,j),B.framebufferRenderbuffer(B.FRAMEBUFFER,IA,B.RENDERBUFFER,j)}}else if(I.bindFramebuffer(B.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer===void 0)c.__webglDepthbuffer=B.createRenderbuffer(),eA(c.__webglDepthbuffer,N,!1);else{const z=N.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,IA=c.__webglDepthbuffer;B.bindRenderbuffer(B.RENDERBUFFER,IA),B.framebufferRenderbuffer(B.FRAMEBUFFER,z,B.RENDERBUFFER,IA)}I.bindFramebuffer(B.FRAMEBUFFER,null)}function WA(N,c,T){const z=g.get(N);c!==void 0&&GA(z.__webglFramebuffer,N,N.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,0),T!==void 0&&HA(N)}function GI(N){const c=N.texture,T=g.get(N),z=g.get(c);N.addEventListener("dispose",K);const IA=N.textures,j=N.isWebGLCubeRenderTarget===!0,kA=IA.length>1;if(kA||(z.__webglTexture===void 0&&(z.__webglTexture=B.createTexture()),z.__version=c.version,E.memory.textures++),j){T.__webglFramebuffer=[];for(let tA=0;tA<6;tA++)if(c.mipmaps&&c.mipmaps.length>0){T.__webglFramebuffer[tA]=[];for(let wA=0;wA<c.mipmaps.length;wA++)T.__webglFramebuffer[tA][wA]=B.createFramebuffer()}else T.__webglFramebuffer[tA]=B.createFramebuffer()}else{if(c.mipmaps&&c.mipmaps.length>0){T.__webglFramebuffer=[];for(let tA=0;tA<c.mipmaps.length;tA++)T.__webglFramebuffer[tA]=B.createFramebuffer()}else T.__webglFramebuffer=B.createFramebuffer();if(kA)for(let tA=0,wA=IA.length;tA<wA;tA++){const II=g.get(IA[tA]);II.__webglTexture===void 0&&(II.__webglTexture=B.createTexture(),E.memory.textures++)}if(N.samples>0&&XA(N)===!1){T.__webglMultisampledFramebuffer=B.createFramebuffer(),T.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let tA=0;tA<IA.length;tA++){const wA=IA[tA];T.__webglColorRenderbuffer[tA]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,T.__webglColorRenderbuffer[tA]);const II=Q.convert(wA.format,wA.colorSpace),CA=Q.convert(wA.type),rA=M(wA.internalFormat,II,CA,wA.colorSpace,N.isXRRenderTarget===!0),FA=jA(N);B.renderbufferStorageMultisample(B.RENDERBUFFER,FA,rA,N.width,N.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tA,B.RENDERBUFFER,T.__webglColorRenderbuffer[tA])}B.bindRenderbuffer(B.RENDERBUFFER,null),N.depthBuffer&&(T.__webglDepthRenderbuffer=B.createRenderbuffer(),eA(T.__webglDepthRenderbuffer,N,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if(j){I.bindTexture(B.TEXTURE_CUBE_MAP,z.__webglTexture),ZA(B.TEXTURE_CUBE_MAP,c);for(let tA=0;tA<6;tA++)if(c.mipmaps&&c.mipmaps.length>0)for(let wA=0;wA<c.mipmaps.length;wA++)GA(T.__webglFramebuffer[tA][wA],N,c,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+tA,wA);else GA(T.__webglFramebuffer[tA],N,c,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+tA,0);n(c)&&h(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(kA){for(let tA=0,wA=IA.length;tA<wA;tA++){const II=IA[tA],CA=g.get(II);I.bindTexture(B.TEXTURE_2D,CA.__webglTexture),ZA(B.TEXTURE_2D,II),GA(T.__webglFramebuffer,N,II,B.COLOR_ATTACHMENT0+tA,B.TEXTURE_2D,0),n(II)&&h(B.TEXTURE_2D)}I.unbindTexture()}else{let tA=B.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(tA=N.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY),I.bindTexture(tA,z.__webglTexture),ZA(tA,c),c.mipmaps&&c.mipmaps.length>0)for(let wA=0;wA<c.mipmaps.length;wA++)GA(T.__webglFramebuffer[wA],N,c,B.COLOR_ATTACHMENT0,tA,wA);else GA(T.__webglFramebuffer,N,c,B.COLOR_ATTACHMENT0,tA,0);n(c)&&h(tA),I.unbindTexture()}N.depthBuffer&&HA(N)}function AI(N){const c=N.textures;for(let T=0,z=c.length;T<z;T++){const IA=c[T];if(n(IA)){const j=U(N),kA=g.get(IA).__webglTexture;I.bindTexture(j,kA),h(j),I.unbindTexture()}}}const NI=[],q=[];function hg(N){if(N.samples>0){if(XA(N)===!1){const c=N.textures,T=N.width,z=N.height;let IA=B.COLOR_BUFFER_BIT;const j=N.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,kA=g.get(N),tA=c.length>1;if(tA)for(let wA=0;wA<c.length;wA++)I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+wA,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+wA,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,kA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,kA.__webglFramebuffer);for(let wA=0;wA<c.length;wA++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(IA|=B.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(IA|=B.STENCIL_BUFFER_BIT)),tA){B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,kA.__webglColorRenderbuffer[wA]);const II=g.get(c[wA]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,II,0)}B.blitFramebuffer(0,0,T,z,0,0,T,z,IA,B.NEAREST),o===!0&&(NI.length=0,q.length=0,NI.push(B.COLOR_ATTACHMENT0+wA),N.depthBuffer&&N.resolveDepthBuffer===!1&&(NI.push(j),q.push(j),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,q)),B.invalidateFramebuffer(B.READ_FRAMEBUFFER,NI))}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),tA)for(let wA=0;wA<c.length;wA++){I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+wA,B.RENDERBUFFER,kA.__webglColorRenderbuffer[wA]);const II=g.get(c[wA]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+wA,B.TEXTURE_2D,II,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,kA.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&o){const c=N.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT;B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[c])}}}function jA(N){return Math.min(C.maxSamples,N.samples)}function XA(N){const c=g.get(N);return N.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&c.__useRenderToTexture!==!1}function yA(N){const c=E.render.frame;t.get(N)!==c&&(t.set(N,c),N.update())}function wI(N,c){const T=N.colorSpace,z=N.format,IA=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||T!==bI&&T!==sC&&(PA.getTransfer(T)===oI?(z!==tg||IA!==wg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),c}function UA(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(e.width=N.naturalWidth||N.width,e.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(e.width=N.displayWidth,e.height=N.displayHeight):(e.width=N.width,e.height=N.height),e}this.allocateTextureUnit=b,this.resetTextureUnits=x,this.setTexture2D=X,this.setTexture2DArray=_,this.setTexture3D=gA,this.setTextureCube=P,this.rebindTextures=WA,this.setupRenderTarget=GI,this.updateRenderTargetMipmap=AI,this.updateMultisampleRenderTarget=hg,this.setupDepthRenderbuffer=HA,this.setupFrameBufferTexture=GA,this.useMultisampledRTT=XA}function sl(B,A){function I(g,C=sC){let Q;const E=PA.getTransfer(C);if(g===wg)return B.UNSIGNED_BYTE;if(g===zE)return B.UNSIGNED_SHORT_4_4_4_4;if(g===$E)return B.UNSIGNED_SHORT_5_5_5_1;if(g===me)return B.UNSIGNED_INT_5_9_9_9_REV;if(g===Le)return B.BYTE;if(g===ue)return B.SHORT;if(g===TB)return B.UNSIGNED_SHORT;if(g===XE)return B.INT;if(g===JC)return B.UNSIGNED_INT;if(g===Bg)return B.FLOAT;if(g===_g)return B.HALF_FLOAT;if(g===He)return B.ALPHA;if(g===fe)return B.RGB;if(g===tg)return B.RGBA;if(g===Te)return B.LUMINANCE;if(g===xe)return B.LUMINANCE_ALPHA;if(g===IB)return B.DEPTH_COMPONENT;if(g===gB)return B.DEPTH_STENCIL;if(g===Ai)return B.RED;if(g===Ii)return B.RED_INTEGER;if(g===be)return B.RG;if(g===gi)return B.RG_INTEGER;if(g===Ci)return B.RGBA_INTEGER;if(g===qQ||g===YQ||g===LQ||g===uQ)if(E===oI)if(Q=A.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(g===qQ)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===YQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===LQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===uQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=A.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(g===qQ)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===YQ)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===LQ)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===uQ)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===Bi||g===Qi||g===Ei||g===ii)if(Q=A.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(g===Bi)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Qi)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Ei)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===ii)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===oi||g===ei||g===ti)if(Q=A.get("WEBGL_compressed_texture_etc"),Q!==null){if(g===oi||g===ei)return E===oI?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(g===ti)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===ai||g===si||g===Di||g===hi||g===ri||g===ni||g===Si||g===wi||g===ci||g===li||g===Gi||g===ki||g===yi||g===Ui)if(Q=A.get("WEBGL_compressed_texture_astc"),Q!==null){if(g===ai)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===si)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===Di)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===hi)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===ri)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===ni)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===Si)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===wi)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===ci)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===li)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===Gi)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===ki)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===yi)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===Ui)return E===oI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===mQ||g===Mi||g===Ni)if(Q=A.get("EXT_texture_compression_bptc"),Q!==null){if(g===mQ)return E===oI?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===Mi)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===Ni)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===Oe||g===Ki||g===Ji||g===Fi)if(Q=A.get("EXT_texture_compression_rgtc"),Q!==null){if(g===mQ)return Q.COMPRESSED_RED_RGTC1_EXT;if(g===Ki)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===Ji)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Fi)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===AB?B.UNSIGNED_INT_24_8:B[g]!==void 0?B[g]:null}return{convert:I}}const Dl={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const w of A.hand.values()){const n=I.getJointPose(w,g),h=this._getHandJoint(e,w);n!==null&&(h.matrix.fromArray(n.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=n.radius),h.visible=n!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),r=.02,S=.005;e.inputState.pinching&&s>r+S?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=r-S&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Dl)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new gC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const hl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rl=`
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

`);this.workerSourceURL=URL.createObjectURL(new Blob([E]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(Q){const E=Q.data;switch(E.type){case"decode":C._callbacks[E.id].resolve(E);break;case"error":C._callbacks[E.id].reject(E);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+E.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,Q){return C._taskLoad>Q._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function KG(){let B,A;onmessage=function(E){const i=E.data;switch(i.type){case"init":B=i.decoderConfig,A=new Promise(function(t){B.onModuleLoaded=function(a){t({draco:a})},DracoDecoderModule(B)});break;case"decode":const o=i.buffer,e=i.taskConfig;A.then(t=>{const a=t.draco,s=new a.Decoder;try{const r=I(a,s,new Int8Array(o),e),S=r.attributes.map(w=>w.array.buffer);r.index&&S.push(r.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:r},S)}catch(r){console.error(r),self.postMessage({type:"error",id:i.id,error:r.message})}finally{a.destroy(s)}});break}};function I(E,i,o,e){const t=e.attributeIDs,a=e.attributeTypes;let s,r;const S=i.GetEncodedGeometryType(o);if(S===E.TRIANGULAR_MESH)s=new E.Mesh,r=i.DecodeArrayToMesh(o,o.byteLength,s);else if(S===E.POINT_CLOUD)s=new E.PointCloud,r=i.DecodeArrayToPointCloud(o,o.byteLength,s);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!r.ok()||s.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+r.error_msg());const w={index:null,attributes:[]};for(const n in t){const h=self[a[n]];let U,M;if(e.useUniqueIDs)M=t[n],U=i.GetAttributeByUniqueId(s,M);else{if(M=i.GetAttributeId(s,E[t[n]]),M===-1)continue;U=i.GetAttribute(s,M)}const l=C(E,i,s,n,h,U);n==="color"&&(l.vertexColorSpace=e.vertexColorSpace),w.attributes.push(l)}return S===E.TRIANGULAR_MESH&&(w.index=g(E,i,s)),E.destroy(s),w}function g(E,i,o){const e=o.num_faces()*3,t=e*4,a=E._malloc(t);i.GetTrianglesUInt32Array(o,t,a);const s=new Uint32Array(E.HEAPF32.buffer,a,e).slice();return E._free(a),{array:s,itemSize:1}}function C(E,i,o,e,t,a){const s=a.num_components(),r=o.num_points()*s,S=r*t.BYTES_PER_ELEMENT,w=Q(E,t),n=E._malloc(S);i.GetAttributeDataArrayForAllPoints(o,a,w,S,n);const h=new t(E.HEAPF32.buffer,n,r).slice();return E._free(n),{name:e,array:h,itemSize:s}}function Q(E,i){switch(i){case Float32Array:return E.DT_FLOAT32;case Int8Array:return E.DT_INT8;case Int16Array:return E.DT_INT16;case Int32Array:return E.DT_INT32;case Uint8Array:return E.DT_UINT8;case Uint16Array:return E.DT_UINT16;case Uint32Array:return E.DT_UINT32}}}class JG extends gC{constructor(){super();DA(this,"mixer");DA(this,"glTFLoader");const I=new NG;I.setDecoderPath("jsm/libs/draco/"),this.glTFLoader=new Se,this.glTFLoader.setDRACOLoader(I)}async init(I){const[g,C,Q,E]=await Promise.all([this.glTFLoader.loadAsync("models/wraith$AN-walking.glb"),this.glTFLoader.loadAsync("models/wraithAN-idle.glb"),this.glTFLoader.loadAsync("models/wraithAN-jump.glb"),this.glTFLoader.loadAsync("models/wraithAN-pose.glb")]);g.scene.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),this.mixer=new ur(g.scene),I.idle=this.mixer.clipAction(C.animations[0]),I.walk=this.mixer.clipAction(Qr.subclip(g.animations[0],"walk",0,42)),Q.animations[0].tracks=Q.animations[0].tracks.filter(function(i){return!i.name.endsWith(".position")}),I.jump=this.mixer.clipAction(Q.animations[0]),I.pose=this.mixer.clipAction(E.animations[0]),I.idle.play(),this.add(g.scene)}update(I){var g;(g=this.mixer)==null||g.update(I)}}class FG{constructor(A,I){DA(this,"scene");DA(this,"wait",!1);DA(this,"animationActions",{});DA(this,"activeAction");DA(this,"speed",0);DA(this,"keyboard");DA(this,"model");this.scene=A,this.keyboard=I}async init(){this.model=new JG,await this.model.init(this.animationActions),this.activeAction=this.animationActions.idle,this.scene.add(this.model)}setAction(A){var I;this.activeAction!=A&&((I=this.activeAction)==null||I.fadeOut(.1),A.reset().fadeIn(.1).play(),this.activeAction=A)}update(A){var I,g;if(!this.wait){let C=!1;this.keyboard.keyMap.Space&&(this.setAction(this.animationActions.jump),C=!0,this.wait=!0,setTimeout(()=>this.wait=!1,1200)),!C&&(this.keyboard.keyMap.KeyW||this.keyboard.keyMap.KeyA||this.keyboard.keyMap.KeyS||this.keyboard.keyMap.KeyD)&&(this.setAction(this.animationActions.walk),C=!0),!C&&this.keyboard.keyMap.KeyQ&&(this.setAction(this.animationActions.pose),C=!0),!C&&this.setAction(this.animationActions.idle)}this.activeAction===this.animationActions.walk?(I=this.model)==null||I.update(A*2):(g=this.model)==null||g.update(A)}}class RG{constructor(A,I,g){DA(this,"camera");DA(this,"pivot",new aI);DA(this,"yaw",new aI);DA(this,"pitch",new aI);DA(this,"onDocumentMouseMove",A=>{this.yaw.rotation.y-=A.movementX*.002;const I=this.pitch.rotation.x-A.movementY*.002;I>-1&&I<1&&(this.pitch.rotation.x=I)});DA(this,"onDocumentMouseWheel",A=>{A.preventDefault();const I=this.camera.position.z+A.deltaY*.005;I>=.5&&I<=10&&(this.camera.position.z=I)});this.camera=I,this.yaw.position.y=.75,document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===g.domElement?(g.domElement.addEventListener("mousemove",this.onDocumentMouseMove),g.domElement.addEventListener("wheel",this.onDocumentMouseWheel)):(g.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),g.domElement.removeEventListener("wheel",this.onDocumentMouseWheel))}),A.add(this.pivot),this.pivot.add(this.yaw),this.yaw.add(this.pitch),this.pitch.add(I)}}class pG{constructor(A){DA(this,"keyMap",{});DA(this,"onDocumentKey",A=>{this.keyMap[A.code]=A.type==="keydown"});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===A.domElement?(document.addEventListener("keydown",this.onDocumentKey),document.addEventListener("keyup",this.onDocumentKey)):(document.removeEventListener("keydown",this.onDocumentKey),document.removeEventListener("keyup",this.onDocumentKey))})}}class dG{constructor(A,I,g,C,Q=[0,0,0],E){DA(this,"scene");DA(this,"world");DA(this,"ui");DA(this,"body");DA(this,"animationController");DA(this,"vector",new Y);DA(this,"inputVelocity",new Y);DA(this,"euler",new jI);DA(this,"quaternion",new HI);DA(this,"followTarget",new aI);DA(this,"grounded",!1);DA(this,"rotationMatrix",new uA);DA(this,"targetQuaternion",new HI);DA(this,"followCam");DA(this,"keyboard");DA(this,"wait",!1);DA(this,"handle",-1);this.scene=A,this.world=C,this.ui=E,this.keyboard=new pG(g),this.followCam=new RG(this.scene,I,g),A.add(this.followTarget),this.body=C.createRigidBody(PI.dynamic().setTranslation(...Q).enabledRotations(!1,!1,!1).setCanSleep(!1)),this.handle=this.body.handle;const i=hI.capsule(.5,.15).setTranslation(0,.645,0).setMass(1).setFriction(0).setActiveEvents(SQ.COLLISION_EVENTS);C.createCollider(i,this.body)}async init(){this.animationController=new FG(this.scene,this.keyboard),await this.animationController.init()}setGrounded(A){A!=this.grounded&&(this.grounded=A,A?(this.body.setLinearDamping(4),setTimeout(()=>{this.wait=!1},250)):this.body.setLinearDamping(0))}reset(){this.body.setLinvel(new Y(0,0,0),!0),this.body.setTranslation(new Y(0,1,0),!0),this.ui.reset()}update(A){var g,C,Q,E,i,o,e,t,a,s,r,S,w;this.inputVelocity.set(0,0,0);let I=1;this.grounded&&(this.keyboard.keyMap.KeyW&&(this.inputVelocity.z=-1,I=9.9),this.keyboard.keyMap.KeyS&&(this.inputVelocity.z=1,I=9.5),this.keyboard.keyMap.KeyA&&(this.inputVelocity.x=-1,I=9.5),this.keyboard.keyMap.KeyD&&(this.inputVelocity.x=1,I=9.5),this.inputVelocity.setLength(A*I),!this.wait&&this.keyboard.keyMap.Space&&(this.wait=!0,this.inputVelocity.y=6)),this.euler.y=this.followCam.yaw.rotation.y,this.quaternion.setFromEuler(this.euler),this.inputVelocity.applyQuaternion(this.quaternion),this.body.applyImpulse(this.inputVelocity,!0),this.body.translation().y<-3&&this.reset(),this.followTarget.position.copy(this.body.translation()),this.followTarget.getWorldPosition(this.vector),this.followCam.pivot.position.lerp(this.vector,A*10),(C=(g=this.animationController)==null?void 0:g.model)==null||C.position.lerp(this.vector,A*20),this.rotationMatrix.lookAt(this.followTarget.position,(E=(Q=this.animationController)==null?void 0:Q.model)==null?void 0:E.position,(o=(i=this.animationController)==null?void 0:i.model)==null?void 0:o.up),this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix),((t=(e=this.animationController)==null?void 0:e.model)==null?void 0:t.position.distanceTo(this.followTarget.position))>1e-4&&!((s=(a=this.animationController)==null?void 0:a.model)!=null&&s.quaternion.equals(this.targetQuaternion))&&(this.targetQuaternion.z=0,this.targetQuaternion.x=0,this.targetQuaternion.normalize(),(S=(r=this.animationController)==null?void 0:r.model)==null||S.quaternion.rotateTowards(this.targetQuaternion,A*20)),(w=this.animationController)==null||w.update(A)}}class qG extends rr{constructor(A){super(A),this.type=_g}parse(A){const I=function(h,U){switch(h){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(U||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(U||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(U||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(U||""))}},g=`
`,C=function(h,U,M){U=U||1024;let l=h.pos,R=-1,J=0,K="",p=String.fromCharCode.apply(null,new Uint16Array(h.subarray(l,l+128)));for(;0>(R=p.indexOf(g))&&J<U&&l<h.byteLength;)K+=p,J+=p.length,l+=128,p+=String.fromCharCode.apply(null,new Uint16Array(h.subarray(l,l+128)));return-1<R?(h.pos+=J+R+1,K+p.slice(0,R)):!1},Q=function(h){const U=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,l=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,J=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,K={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let p,y;for((h.pos>=h.byteLength||!(p=C(h)))&&I(1,"no header found"),(y=p.match(U))||I(3,"bad initial token"),K.valid|=1,K.programtype=y[1],K.string+=p+`
`;p=C(h),p!==!1;){if(K.string+=p+`
`,p.charAt(0)==="#"){K.comments+=p+`
`;continue}if((y=p.match(M))&&(K.gamma=parseFloat(y[1])),(y=p.match(l))&&(K.exposure=parseFloat(y[1])),(y=p.match(R))&&(K.valid|=2,K.format=y[1]),(y=p.match(J))&&(K.valid|=4,K.height=parseInt(y[1],10),K.width=parseInt(y[2],10)),K.valid&2&&K.valid&4)break}return K.valid&2||I(3,"missing format specifier"),K.valid&4||I(3,"missing image size specifier"),K},E=function(h,U,M){const l=U;if(l<8||l>32767||h[0]!==2||h[1]!==2||h[2]&128)return new Uint8Array(h);l!==(h[2]<<8|h[3])&&I(3,"wrong scanline width");const R=new Uint8Array(4*U*M);R.length||I(4,"unable to allocate buffer space");let J=0,K=0;const p=4*l,y=new Uint8Array(4),G=new Uint8Array(p);let d=M;for(;d>0&&K<h.byteLength;){K+4>h.byteLength&&I(1),y[0]=h[K++],y[1]=h[K++],y[2]=h[K++],y[3]=h[K++],(y[0]!=2||y[1]!=2||(y[2]<<8|y[3])!=l)&&I(3,"bad rgbe scanline format");let x=0,b;for(;x<p&&K<h.byteLength;){b=h[K++];const X=b>128;if(X&&(b-=128),(b===0||x+b>p)&&I(3,"bad scanline data"),X){const _=h[K++];for(let gA=0;gA<b;gA++)G[x++]=_}else G.set(h.subarray(K,K+b),x),x+=b,K+=b}const W=l;for(let X=0;X<W;X++){let _=0;R[J]=G[X+_],_+=l,R[J+1]=G[X+_],_+=l,R[J+2]=G[X+_],_+=l,R[J+3]=G[X+_],J+=4}d--}return R},i=function(h,U,M,l){const R=h[U+3],J=Math.pow(2,R-128)/255;M[l+0]=h[U+0]*J,M[l+1]=h[U+1]*J,M[l+2]=h[U+2]*J,M[l+3]=1},o=function(h,U,M,l){const R=h[U+3],J=Math.pow(2,R-128)/255;M[l+0]=jQ.toHalfFloat(Math.min(h[U+0]*J,65504)),M[l+1]=jQ.toHalfFloat(Math.min(h[U+1]*J,65504)),M[l+2]=jQ.toHalfFloat(Math.min(h[U+2]*J,65504)),M[l+3]=jQ.toHalfFloat(1)},e=new Uint8Array(A);e.pos=0;const t=Q(e),a=t.width,s=t.height,r=E(e.subarray(e.pos),a,s);let S,w,n;switch(this.type){case Bg:n=r.length/4;const h=new Float32Array(n*4);for(let M=0;M<n;M++)i(r,M*4,h,M*4);S=h,w=Bg;break;case _g:n=r.length/4;const U=new Uint16Array(n*4);for(let M=0;M<n;M++)o(r,M*4,U,M*4);S=U,w=_g;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:a,height:s,data:S,header:t.string,gamma:t.gamma,exposure:t.exposure,type:w}}setDataType(A){return this.type=A,this}load(A,I,g,C){function Q(E,i){switch(E.type){case Bg:case _g:E.colorSpace=bI,E.minFilter=mI,E.magFilter=mI,E.generateMipmaps=!1,E.flipY=!0;break}I&&I(E,i)}return super.load(A,Q,g,C)}}class MQ extends yI{constructor(){super(MQ.Geometry,new wC({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const A=new Y,I=new Y,g=new xt(16,16),C=new xt(16,16);let Q=wg;const E=MQ.Geometry,i=new Do({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),o=new Do({uniforms:{map:{value:g},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),e=new yI(E,i),t=[],a=ZC.Shader,s=new Do({name:a.name,uniforms:{map:{value:null},occlusionMap:{value:C},color:{value:new JA(16777215)},scale:{value:new LA},screenPosition:{value:new Y}},vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:fE,transparent:!0,depthWrite:!1}),r=new yI(E,s);this.addElement=function(U){t.push(U)};const S=new LA,w=new LA,n=new mr,h=new gI;this.onBeforeRender=function(U,M,l){U.getCurrentViewport(h);const R=U.getRenderTarget(),J=R!==null?R.texture.type:wg;Q!==J&&(g.dispose(),C.dispose(),g.type=C.type=J,Q=J);const K=h.w/h.z,p=h.z/2,y=h.w/2;let G=16/h.w;if(S.set(G*K,G),n.min.set(h.x,h.y),n.max.set(h.x+(h.z-16),h.y+(h.w-16)),I.setFromMatrixPosition(this.matrixWorld),I.applyMatrix4(l.matrixWorldInverse),!(I.z>0)&&(A.copy(I).applyMatrix4(l.projectionMatrix),w.x=h.x+A.x*p+p-8,w.y=h.y+A.y*y+y-8,n.containsPoint(w))){U.copyFramebufferToTexture(g,w);let d=i.uniforms;d.scale.value=S,d.screenPosition.value=A,U.renderBufferDirect(l,null,E,i,e,null),U.copyFramebufferToTexture(C,w),d=o.uniforms,d.scale.value=S,d.screenPosition.value=A,U.renderBufferDirect(l,null,E,o,e,null);const x=-A.x*2,b=-A.y*2;for(let W=0,X=t.length;W<X;W++){const _=t[W],gA=s.uniforms;gA.color.value.copy(_.color),gA.map.value=_.texture,gA.screenPosition.value.x=A.x+x*_.distance,gA.screenPosition.value.y=A.y+b*_.distance,G=_.size/h.w;const P=h.w/h.z;gA.scale.value.set(G*P,G),s.uniformsNeedUpdate=!0,U.renderBufferDirect(l,null,E,s,r,null)}}},this.dispose=function(){i.dispose(),o.dispose(),s.dispose(),g.dispose(),C.dispose();for(let U=0,M=t.length;U<M;U++)t[U].texture.dispose()}}}class ZC{constructor(A,I=1,g=0,C=new JA(16777215)){this.texture=A,this.size=I,this.distance=g,this.color=C}}ZC.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`},MQ.Geometry=function(){const B=new zI,A=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),I=new yt(A,5);return B.setIndex([0,1,2,0,2,3]),B.setAttribute("position",new jB(I,3,0,!1)),B.setAttribute("uv",new jB(I,2,3,!1)),B}();class YG{constructor(A){DA(this,"scene");DA(this,"light");this.scene=A,this.light=new jt(16777215,Math.PI),this.light.position.set(65.7,19.2,50.2),this.light.castShadow=!0,this.scene.add(this.light);const I=new So,g=I.load("img/lensflare0.png"),C=I.load("img/lensflare3.png"),Q=new MQ;Q.addElement(new ZC(g,1e3,0)),Q.addElement(new ZC(C,500,.2)),Q.addElement(new ZC(C,250,.8)),Q.addElement(new ZC(C,125,.6)),Q.addElement(new ZC(C,62.5,.4)),this.light.add(Q)}async init(){await new qG().loadAsync("img/venice_sunset_1k.hdr").then(A=>{A.mapping=FQ,this.scene.environment=A,this.scene.background=A,this.scene.backgroundBlurriness=.4})}}class LG{constructor(A,I){DA(this,"mesh");DA(this,"world");DA(this,"enabled",!0);this.world=I,this.mesh=new mt(new zI,new oo({color:16777215,vertexColors:!0})),this.mesh.frustumCulled=!1,A.add(this.mesh)}update(){if(this.enabled){const{vertices:A,colors:I}=this.world.debugRender();this.mesh.geometry.setAttribute("position",new dI(A,3)),this.mesh.geometry.setAttribute("color",new dI(I,4)),this.mesh.visible=!0}else this.mesh.visible=!1}}class fg{constructor(A,I,g,C,Q="div"){this.parent=A,this.object=I,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(C),this.$name=document.createElement("div"),this.$name.classList.add("name"),fg.nextNameID=fg.nextNameID||0,this.$name.id="lil-gui-name-"+ ++fg.nextNameID,this.$widget=document.createElement(Q),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const I=this.parent.add(this.object,this.property,A);return I.name(this._name),this.destroy(),I}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class uG extends fg{constructor(A,I,g){super(A,I,g,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ue(B){let A,I;return(A=B.match(/(#|0x)?([a-f0-9]{6})/i))?I=A[2]:(A=B.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=B.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!I&&"#"+I}const mG={isPrimitive:!0,match:B=>typeof B=="string",fromHexString:Ue,toHexString:Ue},NQ={isPrimitive:!0,match:B=>typeof B=="number",fromHexString:B=>parseInt(B.substring(1),16),toHexString:B=>"#"+B.toString(16).padStart(6,0)},HG={isPrimitive:!1,match:Array.isArray,fromHexString(B,A,I=1){const g=NQ.fromHexString(B);A[0]=(g>>16&255)/255*I,A[1]=(g>>8&255)/255*I,A[2]=(255&g)/255*I},toHexString:([B,A,I],g=1)=>NQ.toHexString(B*(g=255/g)<<16^A*g<<8^I*g<<0)},fG={isPrimitive:!1,match:B=>Object(B)===B,fromHexString(B,A,I=1){const g=NQ.fromHexString(B);A.r=(g>>16&255)/255*I,A.g=(g>>8&255)/255*I,A.b=(255&g)/255*I},toHexString:({r:B,g:A,b:I},g=1)=>NQ.toHexString(B*(g=255/g)<<16^A*g<<8^I*g<<0)},TG=[mG,NQ,HG,fG];class xG extends fg{constructor(A,I,g,C){var Q;super(A,I,g,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(Q=this.initialValue,TG.find(E=>E.match(Q))),this._rgbScale=C,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const E=Ue(this.$text.value);E&&this._setValueFromHexString(E)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const I=this._format.fromHexString(A);this.setValue(I)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Me extends fg{constructor(A,I,g){super(A,I,g,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",C=>{C.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class bG extends fg{constructor(A,I,g,C,Q,E){super(A,I,g,"number"),this._initInput(),this.min(C),this.max(Q);const i=E!==void 0;this.step(i?E:this._getImplicitStep(),i),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,I=!0){return this._step=A,this._stepExplicit=I,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let I=(A-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=100*I+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=t=>{const a=parseFloat(this.$input.value);isNaN(a)||(this._snapClampSetValue(a+t),this.$input.value=this.getValue())};let I,g,C,Q,E,i=!1;const o=t=>{if(i){const a=t.clientX-I,s=t.clientY-g;Math.abs(s)>5?(t.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(a)>5&&e()}if(!i){const a=t.clientY-C;E-=a*this._step*this._arrowKeyMultiplier(t),Q+E>this._max?E=this._max-Q:Q+E<this._min&&(E=this._min-Q),this._snapClampSetValue(Q+E)}C=t.clientY},e=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",e)};this.$input.addEventListener("input",()=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._stepExplicit&&(t=this._snap(t)),this.setValue(this._clamp(t)))}),this.$input.addEventListener("keydown",t=>{t.code==="Enter"&&this.$input.blur(),t.code==="ArrowUp"&&(t.preventDefault(),A(this._step*this._arrowKeyMultiplier(t))),t.code==="ArrowDown"&&(t.preventDefault(),A(this._step*this._arrowKeyMultiplier(t)*-1))}),this.$input.addEventListener("wheel",t=>{this._inputFocused&&(t.preventDefault(),A(this._step*this._normalizeMouseWheel(t)))},{passive:!1}),this.$input.addEventListener("mousedown",t=>{I=t.clientX,g=C=t.clientY,i=!0,Q=this.getValue(),E=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",e)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=s=>{const r=this.$slider.getBoundingClientRect();let S=(w=s,n=r.left,h=r.right,U=this._min,M=this._max,(w-n)/(h-n)*(M-U)+U);var w,n,h,U,M;this._snapClampSetValue(S)},I=s=>{A(s.clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",g)};let C,Q,E=!1;const i=s=>{s.preventDefault(),this._setDraggingStyle(!0),A(s.touches[0].clientX),E=!1},o=s=>{if(E){const r=s.touches[0].clientX-C,S=s.touches[0].clientY-Q;Math.abs(r)>Math.abs(S)?i(s):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",e))}else s.preventDefault(),A(s.touches[0].clientX)},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",e)},t=this._callOnFinishChange.bind(this);let a;this.$slider.addEventListener("mousedown",s=>{this._setDraggingStyle(!0),A(s.clientX),window.addEventListener("mousemove",I),window.addEventListener("mouseup",g)}),this.$slider.addEventListener("touchstart",s=>{s.touches.length>1||(this._hasScrollBar?(C=s.touches[0].clientX,Q=s.touches[0].clientY,E=!0):i(s),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",e))},{passive:!1}),this.$slider.addEventListener("wheel",s=>{if(Math.abs(s.deltaX)<Math.abs(s.deltaY)&&this._hasScrollBar)return;s.preventDefault();const r=this._normalizeMouseWheel(s)*this._step;this._snapClampSetValue(this.getValue()+r),this.$input.value=this.getValue(),clearTimeout(a),a=setTimeout(t,400)},{passive:!1})}_setDraggingStyle(A,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+I,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:I,deltaY:g}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(I=0,g=-A.wheelDelta/120,g*=this._stepExplicit?1:10),I+-g}_arrowKeyMultiplier(A){let I=this._stepExplicit?1:10;return A.shiftKey?I*=10:A.altKey&&(I/=10),I}_snap(A){const I=Math.round(A/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class OG extends fg{constructor(A,I,g,C){super(A,I,g,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(C)?C:Object.values(C),this._names=Array.isArray(C)?C:Object.keys(C),this._names.forEach(Q=>{const E=document.createElement("option");E.innerHTML=Q,this.$select.appendChild(E)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),I=this._values.indexOf(A);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?A:this._names[I],this}}class vG extends fg{constructor(A,I,g){super(A,I,g,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",C=>{C.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Ws=!1;class Ne{constructor({parent:A,autoPlace:I=A===void 0,container:g,width:C,title:Q="Controls",injectStyles:E=!0,touchStyles:i=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(Q),i&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Ws&&E&&(function(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Ws=!0),g?g.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),C&&this.domElement.style.setProperty("--width",C+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,I,g,C,Q){if(Object(g)===g)return new OG(this,A,I,g);const E=A[I];switch(typeof E){case"number":return new bG(this,A,I,g,C,Q);case"boolean":return new uG(this,A,I);case"string":return new vG(this,A,I);case"function":return new Me(this,A,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,A,`
	value:`,E)}addColor(A,I,g=1){return new xG(this,A,I,g)}addFolder(A){return new Ne({parent:this,title:A})}load(A,I=!0){return A.controllers&&this.controllers.forEach(g=>{g instanceof Me||g._name in A.controllers&&g.load(A.controllers[g._name])}),I&&A.folders&&this.folders.forEach(g=>{g._title in A.folders&&g.load(A.folders[g._title])}),this}save(A=!0){const I={controllers:{},folders:{}};return this.controllers.forEach(g=>{if(!(g instanceof Me)){if(g._name in I.controllers)throw new Error(`Cannot save GUI with duplicate property "${g._name}"`);I.controllers[g._name]=g.save()}}),A&&this.folders.forEach(g=>{if(g._title in I.folders)throw new Error(`Cannot save GUI with duplicate folder "${g._title}"`);I.folders[g._title]=g.save()}),I}open(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const I=this.$children.clientHeight;this.$children.style.height=I+"px",this.domElement.classList.add("transition");const g=Q=>{Q.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",g))};this.$children.addEventListener("transitionend",g);const C=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=C+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(I=>I.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(I=>{A=A.concat(I.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(I=>{A=A.concat(I.foldersRecursive())}),A}}class _G{constructor(A,I,g){DA(this,"material",new CC);new Se().load("models/start.glb",C=>{var e;const Q=C.scene.getObjectByName("Cylinder");Q.receiveShadow=!0,A.add(Q),this.material=Q.material,(e=this.material.map)==null||e.center.set(.1034,0);const E=I.createRigidBody(PI.fixed().setTranslation(...g)),i=new Float32Array(Q.geometry.attributes.position.array),o=hI.convexHull(i);I.createCollider(o,E),Q.position.copy(E.translation()),Q.quaternion.copy(E.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}}class Tg{constructor(A,I,g,C,Q=[0,0,0]){const E=new yI(new cB(...g),new CC);E.castShadow=!0,E.receiveShadow=!0,A.add(E);const i=I.createRigidBody(PI.fixed().setTranslation(...C).setRotation(new HI().setFromEuler(new jI(...Q)))),o=hI.cuboid(g[0]/2,g[1]/2,g[2]/2);I.createCollider(o,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation())}}class ZG{constructor(A,I,g){DA(this,"dynamicBody");DA(this,"material",new CC);DA(this,"texture");DA(this,"handle",-1);this.texture=new So().load("img/finish.png",Q=>{Q.repeat.x=2,Q.wrapS=KC,Q.flipY=!0});const C=new yI(new AQ(3.4,3.4,2,12,1,!0),new Ar({transparent:!0,opacity:.75,map:this.texture,side:Sg}));C.position.set(...g),C.position.y+=3,A.add(C),new Se().load("models/finish.glb",Q=>{const E=Q.scene.getObjectByName("Cylinder");E.receiveShadow=!0,A.add(E),this.material=E.material;const i=I.createRigidBody(PI.fixed().setTranslation(...g));this.handle=i.handle;const o=new Float32Array(E.geometry.attributes.position.array),e=hI.convexHull(o);I.createCollider(e,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}update(A){this.texture.offset.x+=A/3}}class Ps{constructor(A,I,g){DA(this,"group");DA(this,"body");DA(this,"handle",-1);this.group=new gC,this.group.position.set(...g),A.add(this.group);const C=new yI(new AQ(.25,.25,1.5),new CC);C.castShadow=!0,this.group.add(C);const Q=new yI(new AQ(.25,.25,4),new CC);Q.rotateX(-Math.PI/2),Q.castShadow=!0,this.group.add(Q),this.body=I.createRigidBody(PI.kinematicPositionBased().setTranslation(...g)),this.handle=this.body.handle;const E=hI.cylinder(2,.25).setRotation(new HI().setFromEuler(new jI(-Math.PI/2,0,0)));I.createCollider(E,this.body)}update(A){this.group.rotation.y+=A,this.body.setNextKinematicRotation(this.group.quaternion)}}class uE{constructor(A,I,g,C=0){DA(this,"dynamicBodies",[]);DA(this,"handles",[-1,-1]);const Q=[];for(let E=0;E<4;E++){const i=new yI(new so(.4),new CC);i.position.set(g[0],g[1],E+g[2]),i.castShadow=!0,A.add(i);let o;E==0?o=og.Fixed:o=og.Dynamic;const e=I.createRigidBody(new PI(o).setTranslation(g[0],g[1],E+g[2]).setRotation(new HI().setFromEuler(new jI(0,C,0))));let t=hI.ball(.4).setMass(1);if(E>=2&&this.handles.push(e.handle),I.createCollider(t,e),E>0){let a=Q[Q.length-1],s=mg.spherical(new FE(0,0,0),new FE(0,0,-1));I.createImpulseJoint(s,a,e,!0)}Q.push(e),this.dynamicBodies.push([i,e])}}update(){for(let A=0,I=this.dynamicBodies.length;A<I;A++)this.dynamicBodies[A][0].position.copy(this.dynamicBodies[A][1].translation()),this.dynamicBodies[A][0].quaternion.copy(this.dynamicBodies[A][1].rotation())}}class WG{constructor(A,I,g){DA(this,"scene");DA(this,"camera");DA(this,"renderer");DA(this,"ui");DA(this,"player");DA(this,"world");DA(this,"rapierDebugRenderer");DA(this,"eventQueue");DA(this,"finish");DA(this,"spinners",[]);DA(this,"pendulums",[]);this.scene=A,this.camera=I,this.renderer=g,this.ui=new kl(this.renderer)}async init(){await _l.init();const A=new Y(0,-9.81,0);this.world=new yQ(A),this.eventQueue=new ms(!0),this.rapierDebugRenderer=new LG(this.scene,this.world),this.rapierDebugRenderer.enabled=!1,new Ne().add(this.rapierDebugRenderer,"enabled").name("Rapier Degug Renderer"),new _G(this.scene,this.world,[0,-.5,0]),new Tg(this.scene,this.world,[1,.1,2],[0,0,6]),new Tg(this.scene,this.world,[2.5,.1,1],[3,.25,6]),new Tg(this.scene,this.world,[2,.1,1],[6,1,6]),new Tg(this.scene,this.world,[.25,.1,4.5],[6,2,2.25]),new Tg(this.scene,this.world,[4,.1,5],[6,2,-3]),this.spinners.push(new Ps(this.scene,this.world,[6,2.8,-3])),new Tg(this.scene,this.world,[1,.1,2],[6.25,2.5,-7.5]),new Tg(this.scene,this.world,[4,.1,4],[2.5,3,-8]),this.spinners.push(new Ps(this.scene,this.world,[2.5,3.8,-8])),new Tg(this.scene,this.world,[1,.1,2.75],[1.5,3.75,-3.25],[-Math.PI/8,0,0]),new Tg(this.scene,this.world,[6,.1,1],[-1,4.5,-1]),this.pendulums.push(new uE(this.scene,this.world,[0,8,-1])),this.pendulums.push(new uE(this.scene,this.world,[-2,8,-1])),new Tg(this.scene,this.world,[1.5,.1,8],[-5.5,4.5,4.5],[0,0,-Math.PI/8]),this.pendulums.push(new uE(this.scene,this.world,[-5,8,2.5],Math.PI/2)),this.pendulums.push(new uE(this.scene,this.world,[-5,8,5],Math.PI/2)),this.finish=new ZG(this.scene,this.world,[0,4,10]),this.player=new dG(this.scene,this.camera,this.renderer,this.world,[0,.1,0],this.ui),await this.player.init();const I=new YG(this.scene);await I.init(),I.light.target=this.player.followTarget,this.ui.show()}update(A){var I,g,C,Q,E;this.spinners.forEach(i=>{i.update(A)}),this.world.timestep=Math.min(A,.1),(I=this.world)==null||I.step(this.eventQueue),(g=this.eventQueue)==null||g.drainCollisionEvents((i,o,e)=>{var s,r;e&&[i,o].includes((s=this.finish)==null?void 0:s.handle)&&this.ui.showLevelCompleted();let t=!1;this.spinners.forEach(S=>{[i,o].includes(S.handle)&&(t=!0)});let a=!1;this.pendulums.forEach(S=>{S.handles.some(w=>[i,o].includes(w))&&(a=!0)}),!t&&!a&&((r=this.player)==null||r.setGrounded(e))}),(C=this.player)==null||C.update(A),(Q=this.finish)==null||Q.update(A),this.pendulums.forEach(i=>{i.update()}),(E=this.rapierDebugRenderer)==null||E.update()}}const Vs=new vh,KQ=new Ag(75,window.innerWidth/window.innerHeight,.1,1e3);KQ.position.set(0,0,2);const mB=new Gl({antialias:!0});mB.setSize(window.innerWidth,window.innerHeight),mB.shadowMap.enabled=!0,document.body.appendChild(mB.domElement),window.addEventListener("resize",()=>{KQ.aspect=window.innerWidth/window.innerHeight,KQ.updateProjectionMatrix(),mB.setSize(window.innerWidth,window.innerHeight)});const js=new EQ;document.body.appendChild(js.dom);const Xs=new WG(Vs,KQ,mB);await Xs.init();const PG=new yr;let zs=0;function $s(){requestAnimationFrame($s),zs=PG.getDelta(),Xs.update(zs),mB.render(Vs,KQ),js.update()}$s()})();