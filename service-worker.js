"use strict";var precacheConfig=[["/react-clicky-game/index.html","1006502a47cacb0653a2eeb72ddb366e"],["/react-clicky-game/static/css/main.13970d91.css","d97bc5e6926506744936f84aff906328"],["/react-clicky-game/static/js/main.1cfdb297.js","aca69ee84964268728ac7a5f5025eff8"],["/react-clicky-game/static/media/1.cdc81329.jpg","cdc81329fbbd644cc6c54d39c0fa7e56"],["/react-clicky-game/static/media/10.be433315.jpg","be4333155f7d061189434c3cd6cda98b"],["/react-clicky-game/static/media/11.7a2deef8.jpg","7a2deef85855755d73b5c56d2c4a11cd"],["/react-clicky-game/static/media/12.a2fadebe.jpg","a2fadebe9c9cae44c9d62127b0851073"],["/react-clicky-game/static/media/2.a27f1965.jpg","a27f196562640cab82f46711f5ed0c5f"],["/react-clicky-game/static/media/3.914731c5.jpg","914731c5fa75c18d8a02d77dc8bceed6"],["/react-clicky-game/static/media/4.245fb01f.jpg","245fb01f13a0ab2332b221db2c2c6661"],["/react-clicky-game/static/media/5.e7a9b085.jpg","e7a9b085c37f665e073b36cad29e7fa4"],["/react-clicky-game/static/media/7.d3c429a1.jpg","d3c429a1cbdafc1d22d38d2b5018b706"],["/react-clicky-game/static/media/8.a473a89f.jpg","a473a89f1612d804b1ee1d26882164cd"],["/react-clicky-game/static/media/9.4333af8f.jpg","4333af8fa223aca7be3ae6ecbd6e4a86"],["/react-clicky-game/static/media/background.438b12a5.png","438b12a5e5a29bc0ab3f3e3c7380a72a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/react-clicky-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});