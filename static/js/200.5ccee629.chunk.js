/*! For license information please see 200.5ccee629.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[200],{2134:function(t,r,e){"use strict";e.d(r,{Z:function(){return i}});var n=e(2791);var o=function(t){var r=(0,n.useRef)(t);return(0,n.useEffect)((function(){r.current=t}),[t]),r};function i(t){var r=o(t);return(0,n.useCallback)((function(){return r.current&&r.current.apply(r,arguments)}),[r])}},3201:function(t,r,e){"use strict";var n=e(2791),o=function(t){return t&&"function"!==typeof t?function(r){t.current=r}:t};r.Z=function(t,r){return(0,n.useMemo)((function(){return function(t,r){var e=o(t),n=o(r);return function(t){e&&e(t),n&&n(t)}}(t,r)}),[t,r])}},1306:function(t,r,e){"use strict";e.d(r,{$F:function(){return o},PB:function(){return n}});function n(t){return"".concat("data-rr-ui-").concat(t)}function o(t){return"".concat("rrUi").concat(t)}},8633:function(t,r,e){"use strict";e.d(r,{h:function(){return o}});var n=e(2791).createContext(null),o=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=t?String(t):r||null};r.Z=n},1694:function(t,r){var e;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)){if(e.length){var a=o.apply(null,e);a&&t.push(a)}}else if("object"===i)if(e.toString===Object.prototype.toString)for(var u in e)n.call(e,u)&&e[u]&&t.push(u);else t.push(e.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(r,[]))||(t.exports=e)}()},3808:function(t,r,e){"use strict";e.d(r,{Z:function(){return o}});var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(t,r){return n(t.querySelectorAll(r))}},2176:function(t){"use strict";t.exports=function(t,r,e,n,o,i,a,u){if(!t){var s;if(void 0===r)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[e,n,o,i,a,u],f=0;(s=new Error(r.replace(/%s/g,(function(){return c[f++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},888:function(t,r,e){"use strict";var n=e(9047);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,r,e,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function r(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},2007:function(t,r,e){t.exports=e(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7022:function(t,r,e){"use strict";var n=e(1413),o=e(5987),i=e(1694),a=e.n(i),u=e(2791),s=e(162),c=e(184),f=["bsPrefix","fluid","as","className"],l=u.forwardRef((function(t,r){var e=t.bsPrefix,i=t.fluid,u=t.as,l=void 0===u?"div":u,p=t.className,v=(0,o.Z)(t,f),d=(0,s.vE)(e,"container"),h="string"===typeof i?"-".concat(i):"-fluid";return(0,c.jsx)(l,(0,n.Z)((0,n.Z)({ref:r},v),{},{className:a()(p,i?"".concat(d).concat(h):d)}))}));l.displayName="Container",l.defaultProps={fluid:!1},r.Z=l},162:function(t,r,e){"use strict";e.d(r,{Hz:function(){return o},pi:function(){return u},vE:function(){return a}});var n=e(2791),o=(e(184),["xxl","xl","lg","md","sm","xs"]),i=n.createContext({prefixes:{},breakpoints:o});i.Consumer,i.Provider;function a(t,r){var e=(0,n.useContext)(i).prefixes;return t||e[r]||r}function u(){return(0,n.useContext)(i).breakpoints}},6543:function(t,r,e){"use strict";e.d(r,{Z:function(){return v}});var n=e(1413),o=e(5987),i=e(1694),a=e.n(i),u=/-(.)/g;var s=e(2791),c=e(162),f=e(184),l=["className","bsPrefix","as"],p=function(t){return t[0].toUpperCase()+(r=t,r.replace(u,(function(t,r){return r.toUpperCase()}))).slice(1);var r};function v(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.displayName,i=void 0===e?p(t):e,u=r.Component,v=r.defaultProps,d=s.forwardRef((function(r,e){var i=r.className,s=r.bsPrefix,p=r.as,v=void 0===p?u||"div":p,d=(0,o.Z)(r,l),h=(0,c.vE)(s,t);return(0,f.jsx)(v,(0,n.Z)({ref:e,className:a()(i,h)},d))}));return d.defaultProps=v,d.displayName=i,d}},7472:function(t,r,e){"use strict";var n=e(1413),o=e(2791),i=e(1694),a=e.n(i),u=e(184);r.Z=function(t){return o.forwardRef((function(r,e){return(0,u.jsx)("div",(0,n.Z)((0,n.Z)({},r),{},{ref:e,className:a()(r.className,t)}))}))}},6373:function(t,r,e){"use strict";e.d(r,{iT:function(){return u}});var n=e(2791),o=function(){return o=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},o.apply(this,arguments)},i=function(t){return{display:t?"flex":"none"}},a=function(t,r,e){var n=Math.max(t,r),o=-e-n/2+1,i=2*e+n;return[o,o,i,i].join(" ")},u=function(t){var r,e=t.height,u=void 0===e?80:e,s=t.width,c=void 0===s?80:s,f=t.color,l=void 0===f?"green":f,p=t.secondaryColor,v=void 0===p?"green":p,d=t.ariaLabel,h=void 0===d?"oval-loading":d,m=t.wrapperStyle,y=t.wrapperClass,g=t.visible,b=void 0===g||g,x=t.strokeWidth,w=void 0===x?2:x,_=t.strokeWidthSecondary;return n.createElement("div",{style:o(o(o({},i(b)),m),{padding:3}),className:y,"data-testid":"oval-loading"},n.createElement("svg",{width:c,height:u,viewBox:a(Number(w),Number(_||w),20),xmlns:"http://www.w3.org/2000/svg",stroke:l,"data-testid":"oval-svg","aria-label":h},n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{transform:"translate(1 1)",strokeWidth:Number(_||w)},n.createElement("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:v,strokeWidth:w}),n.createElement("path",{d:(r=20,["M"+r+" 0c0-9.94-8.06",r,r,r].join("-"))},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"}))))))}},239:function(t,r,e){"use strict";e.d(r,{Ch:function(){return s}});var n=e(7462),o=e(3366),i=e(2791);e(2176);function a(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function u(t){var r=function(t,r){if("object"!==typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===typeof r?r:String(r)}function s(t,r){return Object.keys(r).reduce((function(e,s){var c,f=e,l=f[a(s)],p=f[s],v=(0,o.Z)(f,[a(s),s].map(u)),d=r[s],h=function(t,r,e){var n=(0,i.useRef)(void 0!==t),o=(0,i.useState)(r),a=o[0],u=o[1],s=void 0!==t,c=n.current;return n.current=s,!s&&c&&a!==r&&u(r),[s?t:a,(0,i.useCallback)((function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];e&&e.apply(void 0,[t].concat(n)),u(t)}),[e])]}(p,l,t[d]),m=h[0],y=h[1];return(0,n.Z)({},v,((c={})[s]=m,c[d]=y,c))}),t)}function c(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function f(t){this.setState(function(r){var e=this.constructor.getDerivedStateFromProps(t,r);return null!==e&&void 0!==e?e:null}.bind(this))}function l(t,r){try{var e=this.props,n=this.state;this.props=t,this.state=r,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(e,n)}finally{this.props=e,this.state=n}}c.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0},5987:function(t,r,e){"use strict";e.d(r,{Z:function(){return o}});var n=e(3366);function o(t,r){if(null==t)return{};var e,o,i=(0,n.Z)(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},3366:function(t,r,e){"use strict";function n(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=200.5ccee629.chunk.js.map