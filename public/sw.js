if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const f=e=>a(e,n),r={module:{uri:n},exports:t,require:f};i[n]=Promise.all(s.map((e=>r[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/3X4jOu11LiGG4z5vdWliH/_buildManifest.js",revision:"d751c1560b8e7c1072214f82f4d0c2b5"},{url:"/_next/static/3X4jOu11LiGG4z5vdWliH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/140-56d3a911da35f18d.js",revision:"56d3a911da35f18d"},{url:"/_next/static/chunks/483-a71e4d9bf273d3ba.js",revision:"a71e4d9bf273d3ba"},{url:"/_next/static/chunks/592-50986bdd8277326a.js",revision:"50986bdd8277326a"},{url:"/_next/static/chunks/75fc9c18-36f994258e23e278.js",revision:"36f994258e23e278"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-129e5da6b2161174.js",revision:"129e5da6b2161174"},{url:"/_next/static/chunks/pages/_app-61a5326611061298.js",revision:"61a5326611061298"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/categorie-973fa455960a904f.js",revision:"973fa455960a904f"},{url:"/_next/static/chunks/pages/index-6f1dfbf4ee284f8c.js",revision:"6f1dfbf4ee284f8c"},{url:"/_next/static/chunks/pages/recipe-161c1725d3a93c19.js",revision:"161c1725d3a93c19"},{url:"/_next/static/chunks/pages/recipe/%5Bid%5D copy-cbbbae03e4804461.js",revision:"cbbbae03e4804461"},{url:"/_next/static/chunks/pages/recipe/%5Bid%5D-b3cb38a2e2f6235e.js",revision:"b3cb38a2e2f6235e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-38cee4c0e358b1a3.js",revision:"38cee4c0e358b1a3"},{url:"/_next/static/css/808cf4daee3accec.css",revision:"808cf4daee3accec"},{url:"/_next/static/css/f7ea8ae82dce3c68.css",revision:"f7ea8ae82dce3c68"},{url:"/_next/static/media/10939feefdad71be.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/119a69c4f231f60f.woff2",revision:"89b3fa63f395adbba5c66cb0f7e648af"},{url:"/_next/static/media/20b8b8f6f47c1e10.woff2",revision:"7def222d1a45cb1cb7d8c3ae675dbdcc"},{url:"/_next/static/media/370d1cc320ec5619.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/3828f203592f7603.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/591327bf3b62a611.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/7777133e901cd5ed.p.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/839135d04a097cea.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/87c72f23c47212b9.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/916d3686010a8de2.p.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_next/static/media/953974ac5e9ff354.woff2",revision:"6731e1ba3788bda094c89ee8fc131aef"},{url:"/_next/static/media/988507a0588e08c2.woff2",revision:"466bde9c4517556d472ba8574c0d5d26"},{url:"/_next/static/media/9a881e2ac07d406b.p.woff2",revision:"25b0e113ca7cce3770d542736db26368"},{url:"/_next/static/media/c04551857776278f.p.woff2",revision:"8d91ec1ca2d8b56640a47117e313a3e9"},{url:"/_next/static/media/d3993855bd828edf.woff2",revision:"27335205f75b5244aa4f5dfea7b44634"},{url:"/_next/static/media/d869208648ca5469.p.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/media/e025c64520263018.woff2",revision:"dc820d9f0f62811268590ff631f36be9"},{url:"/_next/static/media/f8b4884fe242ed41.p.woff2",revision:"f6cac6a46dff4f08aed592e00f20cf8e"},{url:"/_next/static/media/f93b79c1ea023ab6.woff2",revision:"96b6d54684daa94742f7bfd72a981213"},{url:"/_next/static/media/logo-header.2d2fa246.png",revision:"ec37f9c202e121a437e52c389d703cb2"},{url:"/_next/static/media/remixicon.1e0fb76b.woff",revision:"1e0fb76b"},{url:"/_next/static/media/remixicon.2b2ee314.svg",revision:"2b2ee314"},{url:"/_next/static/media/remixicon.5400338c.woff2",revision:"5400338c"},{url:"/_next/static/media/remixicon.e313410c.ttf",revision:"e313410c"},{url:"/_next/static/media/remixicon.f12fd1a0.eot",revision:"f12fd1a0"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/img/bg-cacao.png",revision:"f6f5086d2e9f20a663f047fb04975017"},{url:"/img/bg-pancake.png",revision:"642e75fb7d43871145ab4a2af8780e7e"},{url:"/img/jadou.png",revision:"47e30540a6b2d6c07d11c29d24aa4127"},{url:"/img/logo-192.jpg",revision:"74f171a9c7617d3346db0f7026ad9b1f"},{url:"/img/logo-256.jpg",revision:"a1a8daecb8bc2de01d86d6e613cbeb77"},{url:"/img/logo-384.jpg",revision:"db4c32706391624859094d69386f2988"},{url:"/img/logo-512.jpg",revision:"1810e891b7c06674e3b50dc0dd6ec573"},{url:"/img/logo-header.png",revision:"ec37f9c202e121a437e52c389d703cb2"},{url:"/img/noise.png",revision:"151b3baccd30fd35b8c66adb7b8a46fc"},{url:"/img/totor.png",revision:"87691d173ca03ca1b591ab20d7a6cb22"},{url:"/manifest.json",revision:"58b96781ddfe240949ef0359186e68ed"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
