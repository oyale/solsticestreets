(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),s=n(4651),u=n(7426);var l={};function c(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):s||a}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,y=e.replace,m=e.shallow,v=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,w=u.useIntersection({rootMargin:"200px"}),j=r(w,2),_=j[0],x=j[1],O=a.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);a.default.useEffect((function(){var e=x&&n&&i.isLocalURL(d),t="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&c(o,d,h,{locale:t})}),[h,d,x,g,n,o]);var k={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:s}))}(e,o,d,h,y,m,v,g)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(o,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof g?g:o&&o.locale,P=o&&o.isLocaleDomain&&i.getDomainLocale(h,E,o&&o.locales,o&&o.domainLocales);k.href=P||i.addBasePath(i.addLocale(h,E,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=o.useRef(),l=o.useState(!1),c=r(l,2),f=c[0],d=c[1],h=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[h,f]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},8771:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a(a({},r),e));var o=r=a(a({},r),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};s(n(7294));var i=s(n(4860));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4860:function(e,t,n){"use strict";var r=n(4575),o=n(3913),a=n(9713);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,f=(c=n(7294))&&c.__esModule?c:{default:c},d=n(7161),h=n(1083);var p=[],y=[],m=!1;function v(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var g=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=f.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!m&&"function"===typeof n.webpack&&!n.suspense){var a=n.webpack();y.push((function(e){var t,n=u(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=n.suspense?function(e,t){return f.default.createElement(n.lazy,s(s({},e),{},{ref:t}))}:function(e,t){o();var a=f.default.useContext(h.LoadableContext),i=d.useSubscription(r);return f.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!n.suspense&&o()},i.displayName="LoadableComponent",f.default.forwardRef(i)}(v,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){w(p).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};w(y,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var j=b;t.default=j},2562:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return l}});var r=n(885),o=n(5152),a=n(1664),i=n(5893);function s(e){var t,n,o=(t=e.cities,n=function(e){return e.country},t.reduce((function(e,t,r,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n(t);return(e[a]||(e[a]=[])).push(t),e}),{})),s=Object.entries(o).sort().map((function(e,t){var n=(0,r.Z)(e,2),o=n[0],s=n[1].map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(a.default,{href:"/cities/".concat(encodeURIComponent(e.key)),prefetch:!1,children:(0,i.jsx)("a",{children:e.name})})},e.key)}));return(0,i.jsxs)("div",{className:"country",children:[(0,i.jsx)("h3",{children:o}),(0,i.jsx)("ul",{children:s})]},o)}));return(0,i.jsxs)("div",{className:"city_list",children:[(0,i.jsx)("h2",{children:"City Index"}),s]})}var u=!0;function l(e){var t=e.cities,r=(0,o.default)((function(){return Promise.all([n.e(269),n.e(919)]).then(n.bind(n,8919))}),{ssr:!1,loadableGenerated:{webpack:function(){return[8919]},modules:["index.tsx -> ../components/FrontMap"]}});return(0,i.jsxs)("div",{className:"index",children:[(0,i.jsx)("h1",{children:"On Solstices and City Planning"}),(0,i.jsxs)("article",{children:[(0,i.jsx)("img",{src:"stonehenge_plan.svg",className:"header_image"}),(0,i.jsxs)("p",{children:["Every year around 21st of December and 20th of June hundreds of people"," ",(0,i.jsx)("a",{href:"http://www.english-heritage.org.uk/daysout/properties/stonehenge/summer-solstice/?lang=en",children:"gather to Stonehenge"})," ","to spot the fabulous attraction happening only twice a year - you can see how the central Altar stone aligns with the Slaughter stone, Heel stone and the rising sun to the northeast."]}),(0,i.jsxs)("p",{children:["Similar alignments can be found at"," ",(0,i.jsx)("a",{href:"http://en.wikipedia.org/wiki/Newgrange",children:"Newgrange, Ireland"}),","," ",(0,i.jsx)("a",{href:"http://en.wikipedia.org/wiki/Maeshowe",children:"Maeshowe, Scotland"})," ","and other prehistoric monuments. Winter solstice was very important in the life of ancient communities since it was seen as the beginning of the deep winter, and in the same time the reversal of the days shrinking was giving some hope for people. Same is true for the"," ",(0,i.jsx)("a",{href:"http://www.timeanddate.com/calendar/june-solstice-customs.html",children:"Summer solstice"})]}),(0,i.jsxs)("p",{children:["There are many streets in the cities which are aligned along the direction of rising sun of the solstice. I have found all of them. Unfortunately I don't know whether these alignments are intentional or just happen to be such on statistical basis. If you know the story of a such street, please send me a quick"," ",(0,i.jsx)("a",{href:"mailto:sztanko@gmail.com",children:"email"})," and I will add this information."]})]}),(0,i.jsx)("h2",{children:"Choose your city to see the Stonehenge streets"}),(0,i.jsxs)("div",{className:"front-map",children:[" ",(0,i.jsx)(r,{cities:t})]}),(0,i.jsx)(s,{cities:t}),(0,i.jsx)("h2",{children:"Thank you,"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"OpenStreetMap contributors for being so awesome"}),(0,i.jsxs)("li",{children:["Brandon Craig Rhodes for writing"," ",(0,i.jsx)("a",{href:"http://rhodesmill.org/pyephem/",children:"ephem"})," a python library which I used to calculate the sun directions"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://www.mapbox.com/",children:"Mapbox"})," and"," ",(0,i.jsx)("a",{href:"https://github.com/mourner",children:"Vladimir Agafonkin"})," for Leaflet and everything else map related"]}),(0,i.jsx)("li",{children:"Sabine Leitner for general inspiration"})]}),(0,i.jsxs)("footer",{children:["This project is open and free, soure available here:"," ",(0,i.jsx)("a",{href:"https://github.com/sztanko/solsticestreets",children:"https://github.com/sztanko/solsticestreets"}),". ",(0,i.jsx)("br",{})," Page last updated on ",new Date(e.ts).toLocaleDateString(),","," ",Math.floor(((new Date).getTime()-e.ts)/1e3/3600/24)," days ago"]}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-52112966-1', 'sztanko.github.io');ga('send', 'pageview');"}})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2562)}])},5152:function(e,t,n){e.exports=n(8771)},1664:function(e,t,n){e.exports=n(2167)},907:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},885:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){s=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(907);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);