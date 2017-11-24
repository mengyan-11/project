"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6f408934d989510d1e68a5d9b6f31ae8"],["/static/css/main.9c43d95f.css","e21efd9e9fb10c49d07355dc05e14bb5"],["/static/js/main.d907000f.js","e35cc6c3ffd05ab344336c2483302f99"],["/static/media/background.1113d52e.jpg","1113d52e007e14ec53f383db69dc6963"],["/static/media/logo.1e5fb683.png","1e5fb6838887a0990aed9523379f2aba"],["/static/media/lt_cover1.6ae7b772.jpg","6ae7b772ab531b9ab663b7cb0aea792f"],["/static/media/lt_cover2.93edf3af.jpg","93edf3afcc48584b0a76e12ccfb7a22d"],["/static/media/lt_cover3.0534d2f7.jpg","0534d2f7294055c8e29662ebc08a566e"],["/static/media/lt_mag.3135312f.png","3135312f0185d2116b912f4c844f1eec"],["/static/media/lt_title.3bf87494.png","3bf87494e4f632d827e6ea03e224ebb8"],["/static/media/studio_ad.a6039261.gif","a60392619157a38d365779ebe07e6466"],["/static/media/studio_logo.3f6452aa.png","3f6452aa3593479f68c7c6a3025d96a9"],["/static/media/swiper4.274f0e82.jpg","274f0e8219c8ae6eda456e64092b6789"],["/static/media/swiper5.eae09a5f.jpg","eae09a5f74c2f9e011032a3dd48421f5"],["/static/media/swiper6.79ff2ee4.jpg","79ff2ee4c7c80b3dc8066b2a95e2167d"],["/static/media/timg.54f87410.jpg","54f874100b08e02c96b7da00ce76c7a0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});