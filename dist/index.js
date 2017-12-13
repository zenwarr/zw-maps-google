!function(t,n){for(var e in n)t[e]=n[e]}(exports,function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=function(t){function n(n,e){var o=t.call(this,n,e)||this;if(!window.google||!google.maps)throw new Error("Google maps api is not detected, make sure you have plugged the scripts in");if(o.mapContainer){var r=o.initialCenter;o._gmap=new google.maps.Map(o.mapContainer,{center:{lat:r.lat,lng:r.long},zoom:o.initialZoom,scrollwheel:!o._options.disableScrollZoom});for(var i=0;i<o._points.length;++i){var a=o._points[i];o._addMarker(a)}}return o}return o(n,t),n.prototype._addMarker=function(t){var n=this,e={position:{lat:t.lat,lng:t.long},map:this._gmap,title:t.title},o=t.template?this.getPointTemplate(t.template):null;o&&o.imageUrl&&(e.icon={url:o.imageUrl,size:new google.maps.Size(o.imageWidth||0,o.imageHeight||0),anchor:new google.maps.Point(o.imageAnchorX||0,o.imageAnchorY||0)}),t.marker=new google.maps.Marker(e),t.balloonContent&&(t.infoWindow=new google.maps.InfoWindow({content:t.balloonContent}),t.marker.addListener("click",function(){t.infoWindow&&t.marker&&t.infoWindow.open(n._gmap,t.marker)}))},n.prototype._parsePoint=function(n){var e=t.prototype._parsePoint.call(this,n);return e.marker=null,e.infoWindow=null,e},n.prototype._panToPoint=function(t){t&&this._gmap&&this._gmap.panTo(new google.maps.LatLng(t.lat,t.long))},n}(e(1).Map);n.GoogleMap=r},function(t,n){!function(t,n){for(var e in n)t[e]=n[e]}(n,function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=e(1),i={rootSelector:".js-map",pointSelector:".js-map__point",containerClass:"js-map__map",templateSelector:".js-map__point-template",initialZoom:15,disableScrollZoom:!0},a=function(){function t(t,n){if(this._initialCenter=null,this._initialZoom=null,this._points=[],this._options=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Object.assign?Object.assign.apply(this,t):r.apply(this,t)}(n||{},i),this._root=t,t.__hidden_map)throw new Error("Cannot construct a map on the same object twice");t.__hidden_map=this;var e=this._root.querySelector("."+this._options.containerClass||"");e||((e=document.createElement("div")).classList.add(this._options.containerClass||""),this._root.appendChild(e)),this._mapContainer=e,this._parseMap();for(var o=this._root.querySelectorAll(this._options.pointSelector),a=0;a<o.length;++a)try{this._points.push(this._parsePoint(o[a]))}catch(t){console.warn("Error while processing point element",o[a],": ",t)}if(this._options.templateSelector){var u=this._root.querySelectorAll(this._options.templateSelector);for(a=0;a<u.length;++a)try{var l=this._parseTemplate(u[a]);this._options.pointTemplates?this._options.pointTemplates.push(l):this._options.pointTemplates=[l]}catch(t){console.warn("Error while processing template element",u[a],": ",t)}}}return t.fromRoot=function(t){return t?t.__hidden_map||null:null},Object.defineProperty(t.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mapContainer",{get:function(){return this._mapContainer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"initialCenter",{get:function(){return this._initialCenter},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"initialZoom",{get:function(){return this._initialZoom||this._options.initialZoom||15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"points",{get:function(){return this._points},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pointTemplates",{get:function(){return this._options.pointTemplates||[]},enumerable:!0,configurable:!0}),t.prototype.getPointTemplate=function(t){if(this._options.pointTemplates)for(var n=this._options.pointTemplates,e=0;e<n.length;++e)if(n[e].name===t)return n[e];return null},t.prototype.getPoint=function(t){if(!t)return null;for(var n=0;n<this._points.length;++n)if(this._points[n].name===t)return this._points[n];return null},t.prototype.panToPoint=function(t){var n=this.getPoint(t);n&&this._panToPoint(n)},t.prototype._parseMap=function(){var t=this._root.getAttribute("data-lat"),n=this._root.getAttribute("data-long");t&&n&&!isNaN(+t)&&!isNaN(+n)&&(this._initialCenter={lat:+t,long:+n});var e=this._root.getAttribute("data-zoom");e&&!isNaN(+e)&&(this._initialZoom=+e)},t.prototype._parsePoint=function(t){var n=t.getAttribute("data-lat"),e=t.getAttribute("data-long");if(!n||!e||isNaN(+n)||isNaN(+e))throw new Error("Broken coordinates, please provide data-lat and data-long attributes");return{lat:+n,long:+e,title:t.getAttribute("data-title")||t.getAttribute("title")||void 0,balloonContent:t.innerHTML||void 0,template:t.getAttribute("data-template")||void 0,name:t.getAttribute("data-name")||void 0}},t.prototype._parseTemplate=function(t){var n=t.getAttribute("data-name"),e=t.getAttribute("data-image-url"),o=t.getAttribute("data-image-width"),r=t.getAttribute("data-image-height"),i=t.getAttribute("data-image-anchor-x"),a=t.getAttribute("data-image-anchor-y");if(!n)throw new Error("Invalid point template data: element should have a non-empty data-name attribute");var u=function(t){return t&&!isNaN(+t)?+t:void 0};return{name:n,imageUrl:e||void 0,imageWidth:u(o),imageHeight:u(r),imageAnchorX:u(i),imageAnchorY:u(a)}},t}();n.Map=a;var u=function(){function t(){}return t.init=function(t,n){return this.initWithFunctor(function(n,e){return new t(n,e)},n)},t.initWithFunctor=function(t,n){for(var e=n&&n.rootSelector?n.rootSelector:i.rootSelector||"",o=document.querySelectorAll(e),r=0;r<o.length;++r)this.initMapWithFunctor(t,o[r],n)},t.initMap=function(t,n,e){return this.initMapWithFunctor(function(n,e){return new t(n,e)},n,e)},t.initMapWithFunctor=function(t,n,e){return a.fromRoot(n)||t(n,e)},t}();n.MapFactory=u;var l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype._panToPoint=function(t){},n}(a);n.DummyMap=l},function(t,n){function e(t,n,e){var o=t[n];g.call(t,n)&&i(o,e)&&(void 0!==e||n in t)||(t[n]=e)}function o(t,n){return!!(n=null==n?p:n)&&("number"==typeof t||h.test(t))&&t>-1&&t%1==0&&t<n}function r(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||m)}function i(t,n){return t===n||t!=t&&n!=n}function a(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=p}(t.length)&&!function(t){var n=u(t)?_.call(t):"";return n==s||n==f}(t)}function u(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function l(t){return a(t)?function(t,n){var e=w(t)||function(t){return function(t){return!!t&&"object"==typeof t&&a(t)}(t)&&g.call(t,"callee")&&(!d.call(t,"callee")||_.call(t)==c)}(t)?function(t,n){for(var e=-1,o=Array(t);++e<t;)o[e]=n(e);return o}(t.length,String):[],r=e.length,i=!!r;for(var u in t)!n&&!g.call(t,u)||i&&("length"==u||o(u,r))||e.push(u);return e}(t):function(t){if(!r(t))return v(t);var n=[];for(var e in Object(t))g.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}var p=9007199254740991,c="[object Arguments]",s="[object Function]",f="[object GeneratorFunction]",h=/^(?:0|[1-9]\d*)$/,m=Object.prototype,g=m.hasOwnProperty,_=m.toString,d=m.propertyIsEnumerable,v=function(t,n){return function(e){return t(n(e))}}(Object.keys,Object),y=Math.max,b=!d.call({valueOf:1},"valueOf"),w=Array.isArray,j=function(t){return function(t,n){return n=y(void 0===n?t.length-1:n,0),function(){for(var e=arguments,o=-1,r=y(e.length-n,0),i=Array(r);++o<r;)i[o]=e[n+o];o=-1;for(var a=Array(n+1);++o<n;)a[o]=e[o];return a[n]=i,function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}(t,this,a)}}(function(n,e){var r=-1,l=e.length,p=l>1?e[l-1]:void 0,c=l>2?e[2]:void 0;for(p=t.length>3&&"function"==typeof p?(l--,p):void 0,c&&function(t,n,e){if(!u(e))return!1;var r=typeof n;return!!("number"==r?a(e)&&o(n,e.length):"string"==r&&n in e)&&i(e[n],t)}(e[0],e[1],c)&&(p=l<3?void 0:p,l=1),n=Object(n);++r<l;){var s=e[r];s&&t(n,s)}return n})}(function(t,n){if(b||r(n)||a(n))!function(t,n,o,r){o||(o={});for(var i=-1,a=n.length;++i<a;){var u=n[i];e(o,u,t[u])}}(n,l(n),t);else for(var o in n)g.call(n,o)&&e(t,o,n[o])});t.exports=j}]))}]));