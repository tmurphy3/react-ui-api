(this["webpackJsonpreact-ui-api"]=this["webpackJsonpreact-ui-api"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),l=(a(12),a(13),a(1)),i=(a(14),a(15),function(e){var t=e.date,a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],i=r[1],u=Object(n.useState)(""),s=Object(l.a)(u,2),f=s[0],m=s[1],d=Object(n.useState)(""),v=Object(l.a)(d,2),E=v[0],p=v[1];return Object(n.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?api_key=oKwdbMT2N85wHNYQKRlSpik1Ek8aSgQHfwv8IY0J&date=".concat(t)).then((function(e){return e.json()})).then((function(e){i(e.title),m(e.explanation),p(e.url)}))}),[t]),o.a.createElement("div",{className:"modalViewItemContainer"},o.a.createElement("div",{className:"modalViewItem",style:{background:"url(".concat(E,")"),backgroundSize:"cover"}}),o.a.createElement("div",null,o.a.createElement("div",{className:"title"},c),o.a.createElement("div",null,t),o.a.createElement("div",{className:"explanation"},f)))}),u=function(){var e=o.a.useState(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("2020-02-02"),u=Object(l.a)(c,2),s=u[0],f=u[1];return o.a.createElement("div",{className:"filterContainer"},o.a.createElement("div",{className:"filter"},o.a.createElement("form",{onSubmit:function(e){a&&f(a),e.preventDefault()}},o.a.createElement("input",{type:"text",className:"input",value:a,placeholder:"YYYY-MM-DD",onChange:function(e){r(e.target.value)}}),o.a.createElement("button",{className:"searchButton"},"Search")),o.a.createElement("div",{className:"searchedPic"},o.a.createElement(i,{date:s}))))},s=a(6),f=(a(16),a(17),function(e){var t=e.background;return o.a.createElement("div",null,o.a.createElement("div",{className:"modalItem",style:{background:"url(".concat(t,")"),backgroundSize:"cover"}}))}),m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(l.a)(c,2),m=u[0],d=u[1];Object(n.useEffect)((function(){for(var e=11;e<13;e++){var t=e.toString();1===t.length&&(t="0"+t,console.log(t));for(var a=25;a<30;a++){var n=a.toString();1===n.length&&(n="0"+n);var o="https://api.nasa.gov/planetary/apod?api_key=oKwdbMT2N85wHNYQKRlSpik1Ek8aSgQHfwv8IY0J&date=2019-".concat(t,"-").concat(n);fetch(o).then((function(e){return e.json()})).then((function(e){var t=e;r((function(e){return[].concat(Object(s.a)(e),[t])}))}))}}}),[]);return o.a.createElement("div",null,o.a.createElement("div",{className:"modalContainer"},a.map((function(e,t){return o.a.createElement("div",{key:t,onClick:function(){return t=e.date,void d(t);var t}},o.a.createElement(f,{background:e.url,date:e.date}))}))),o.a.createElement("div",{className:"picWords"},o.a.createElement("div",{className:"picWordsHolder"},o.a.createElement(i,{date:m}))))};var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"intro"},"NASA APOD"),o.a.createElement(u,null),o.a.createElement(m,null),o.a.createElement("div",{className:"footer"},"footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.758c386a.chunk.js.map