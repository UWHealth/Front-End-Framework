(window.webpackJsonpuwhealth=window.webpackJsonpuwhealth||[]).push([[1],{Gamu:function(t,e,c){function n(t){t=Array.isArray(t)?t[2]:t;var e=/(&lt;img[\s].*\/&gt;)/gi.exec(t);return e=e?e[0]:"",t=t.replace(e,""),{text:p(t),image:p(e)}}function i(t,e){var c,i,a,r,o,s,u,j,b,f,O,h,p=e.result,_=e.i,v=n(p.description).image,g=p.title,E=n(p.description).text;return{c:function(){c=Object(l.l)("div"),i=Object(l.l)("div"),a=Object(l.l)("div"),r=Object(l.n)("\n            "),o=Object(l.l)("div"),s=Object(l.l)("strong"),u=Object(l.n)(g),j=Object(l.n)("\n                "),b=Object(l.l)("p"),this.h()},l:function(t){c=Object(l.i)(t,"DIV",{class:!0},!1),t=Object(l.h)(c),i=Object(l.i)(t,"DIV",{class:!0},!1);var e=Object(l.h)(i);a=Object(l.i)(e,"DIV",{class:!0},!1),Object(l.h)(a).forEach(l.p),r=Object(l.j)(e,"\n            "),o=Object(l.i)(e,"DIV",{class:!0},!1);var n=Object(l.h)(o);s=Object(l.i)(n,"STRONG",{},!1);var f=Object(l.h)(s);u=Object(l.j)(f,g),f.forEach(l.p),j=Object(l.j)(n,"\n                "),b=Object(l.i)(n,"P",{},!1),Object(l.h)(b).forEach(l.p),n.forEach(l.p),e.forEach(l.p),t.forEach(l.p),this.h()},h:function(){a.className="media-object__media",o.className="media-object__body",i.className="media-object",c.className="item"},m:function(t,e){Object(l.t)(c,t,e),Object(l.d)(i,c),Object(l.d)(a,i),a.innerHTML=v,Object(l.d)(r,i),Object(l.d)(o,i),Object(l.d)(s,o),Object(l.d)(u,s),Object(l.d)(j,o),Object(l.d)(b,o),b.innerHTML=E},p:function(t,e){p=e.result,_=e.i,(h||t.results)&&v!==(v=n(p.description).image)&&(a.innerHTML=v),(h||t.results)&&g!==(g=p.title)&&(u.data=g),(h||t.results)&&E!==(E=n(p.description).text)&&(b.innerHTML=E)},i:function(n,i){O||(O=!0,h=!1,t.root._aftercreate.push(function(){f||(f=Object(l.D)(t,c,d.b,{duration:300,delay:e.Math.min(900,100*(_+1.5)),easing:m.a},!0,null)),f.run(!0,function(){t.fire("intro.end",{node:c})})}),this.m(n,i))},o:function(e){if(!h){h=!0,O=!1;var n=1;f.run(!1,function(){t.fire("outro.end",{node:c}),0==--n&&e(),f=null})}},u:function(){a.innerHTML="",b.innerHTML="",Object(l.p)(c)},d:l.v}}function a(t,e){for(var c,n=e.results.result,a=[],r=0;r<n.length;r+=1)a[r]=i(t,Object(l.e)({},e,{each_value:n,result:n[r],i:r}));return{c:function(){for(var t=0;t<a.length;t+=1)a[t].c();c=Object(l.k)()},l:function(t){for(var e=0;e<a.length;e+=1)a[e].l(t);c=Object(l.k)()},m:function(t,e){for(var n=0;n<a.length;n+=1)a[n].i(t,e);Object(l.t)(c,t,e)},p:function(e,n){var r=n.results.result;if(e.results){for(var o=function(t){a[t]&&a[t].o(function(){a[t].u(),a[t].d(),a[t]=null})},s=0;s<r.length;s+=1){var u=Object(l.e)({},n,{each_value:r,result:r[s],i:s});a[s]?a[s].p(e,u):(a[s]=i(t,u),a[s].c()),a[s].i(c.parentNode,c)}for(;s<a.length;s+=1)o(s)}},u:function(){for(var t=0;t<a.length;t+=1)a[t].u();Object(l.p)(c)},d:function(){Object(l.o)(a)}}}function r(t){if(Object(l.s)(this,t),this._state=Object(l.e)({Math:Math},t.data),t.root||(this._oncreate=[],this._aftercreate=[]),this._fragment=function(t,e){var c,n=e.results&&a(t,e);return{c:function(){n&&n.c(),c=Object(l.k)()},l:function(t){n&&n.l(t),c=Object(l.k)()},m:function(t,e){n&&n.m(t,e),Object(l.t)(c,t,e)},p:function(e,i){i.results?n?n.p(e,i):((n=a(t,i)).c(),n.m(c.parentNode,c)):n&&(n.u(),n.d(),n=null)},u:function(){n&&n.u(),Object(l.p)(c)},d:function(){n&&n.d()}}}(this,this._state),t.target){var e=Object(l.h)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(l.p),this._mount(t.target,t.anchor),Object(l.g)(this._aftercreate)}}function o(t,e){var c,n;return{c:function(){c=Object(l.l)("p"),n=Object(l.n)("Loading Feed...")},l:function(t){c=Object(l.i)(t,"P",{},!1),t=Object(l.h)(c),n=Object(l.j)(t,"Loading Feed..."),t.forEach(l.p)},m:function(t,e){Object(l.t)(c,t,e),Object(l.d)(n,c)},p:l.v,u:function(){Object(l.p)(c)},d:l.v}}function s(t,e){var c=e.response,n=new _({root:t.root,data:{results:c.results}});return{c:function(){n._fragment.c()},l:function(t){n._fragment.l(t)},m:function(t,e){n._mount(t,e)},p:function(t,e){c=e.response,e={},t.feed&&(e.results=c.results),n._set(e)},u:function(){n._unmount()},d:function(){n.destroy(!1)}}}function u(t,e){var c,n,i=e.error,a=i;return{c:function(){c=Object(l.l)("p"),n=Object(l.n)(a)},l:function(t){c=Object(l.i)(t,"P",{},!1),t=Object(l.h)(c),n=Object(l.j)(t,a),t.forEach(l.p)},m:function(t,e){Object(l.t)(c,t,e),Object(l.d)(n,c)},p:function(t,e){i=e.error,t.feed&&a!==(a=i)&&(n.data=a)},u:function(){Object(l.p)(c)},d:l.v}}function j(t,e){var c=new _({root:t.root,data:{results:e.feedResults}});return{c:function(){c._fragment.c()},l:function(t){c._fragment.l(t)},m:function(t,e){c._mount(t,e)},p:function(t,e){var n={};t.feedResults&&(n.results=e.feedResults),c._set(n)},u:function(){c._unmount()},d:function(){c.destroy(!1)}}}function b(t,e){function c(e,c,n){e===j&&(e=a,a=c&&(r=c)(t,n),e&&(e.u(),e.d(),a.c(),a.m(i.parentNode,i),t.root.set({})))}function n(e,n){var i=j={};if(Object(l.u)(e)){if(e.then(function(e){var n=t.get();f={response:e},c(i,s,Object(l.e)({},n,f))},function(e){var n=t.get();f={error:e},c(i,u,Object(l.e)({},n,f))}),r!==o)return c(i,o,n),!0}else if(f={response:e},r!==s)return c(i,s,Object(l.e)({},n,f)),!0}var i,a,r,j,b,f;return n(b=e.feed,e),{c:function(){i=Object(l.k)(),a.c()},l:function(t){i=Object(l.k)(),a.l(t)},m:function(t,e){Object(l.t)(i,t,e),a.m(t,e)},p:function(t,e){"feed"in t&&b!==(b=e.feed)&&n(b,e)||a.p(t,Object(l.e)({},e,f))},u:function(){Object(l.p)(i),a.u()},d:function(){j=null,a.d()}}}function f(t){Object(l.s)(this,t),this.store=O.a,this._state=Object(l.e)({feedUrl:"https://uconnect.wisc.edu/feeds/30m/json/homepage/index.json",page:1},t.data),this._recompute({feedUrl:1},this._state);var e=function(){var t=this;console.log(this),this.observe("feed",function(e){e.then(function(e){t.set({feedResults:e.results})})})}.bind(this);t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var c,n,i,a,r,o=e.feedResults?j:b,s=o(t,e),u=new h.a({root:t.root,slots:{default:Object(l.m)(),header:Object(l.m)(),variants:Object(l.m)()},data:{demoTitle:"Feed Example",variants:!0}});return{c:function(){c=Object(l.n)("\n    "),n=Object(l.l)("div"),i=Object(l.n)("\n    "),a=Object(l.l)("div"),s.c(),r=Object(l.n)("\n"),u._fragment.c(),this.h()},l:function(t){c=Object(l.j)(t,"\n    "),n=Object(l.i)(t,"DIV",{slot:!0},!1),Object(l.h)(n).forEach(l.p),i=Object(l.j)(t,"\n    "),a=Object(l.i)(t,"DIV",{slot:!0},!1);var e=Object(l.h)(a);s.l(e),e.forEach(l.p),r=Object(l.j)(t,"\n"),u._fragment.l(t),this.h()},h:function(){Object(l.C)(n,"slot","header"),Object(l.C)(a,"slot","variants")},m:function(t,e){Object(l.d)(c,u._slotted.default),Object(l.d)(n,u._slotted.header),Object(l.d)(i,u._slotted.default),Object(l.d)(a,u._slotted.variants),s.m(a,null),Object(l.d)(r,u._slotted.default),u._mount(t,e)},p:function(e,c){o===(o=c.feedResults?j:b)&&s?s.p(e,c):(s.u(),s.d(),(s=o(t,c)).c(),s.m(a,null)),u._set({variants:!0})},u:function(){s.u(),u._unmount()},d:function(){s.d(),u.destroy(!1)}}}(this,this._state),this.root._oncreate.push(e),t.target&&(e=Object(l.h)(t.target),t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(l.p),this._mount(t.target,t.anchor),this._lock=!0,Object(l.g)(this._beforecreate),Object(l.g)(this._oncreate),Object(l.g)(this._aftercreate),this._lock=!1)}c.r(e);var l=c("j6kw");t=c("9gOg");var O=c.n(t),h=c("PlRO"),d=c("LNEQ"),m=c("jVoe"),p=function(){var t=document?document.createElement("div"):"";return function(e){return e&&"string"==typeof e&&(e=(e=e.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,"")).replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),t.innerHTML=e,e=t.textContent,t.textContent=""),e}}();Object(l.e)(r.prototype,l.x);var _=r;Object(l.e)(f.prototype,{},l.x),f.prototype._recompute=function(t,e){t.feedUrl&&this._differs(e.feed,e.feed=function(t){return window.fetch?fetch(t).then(function(t){return t.json()}):"{}"}(e.feedUrl))&&(t.feed=!0)},e.default=f},PlRO:function(t,e,c){function n(t){if(Object(o.s)(this,t),this._state=Object(o.e)({mainClass:"main"},t.data),this._slotted=t.slots||{},this.slots={},this._fragment=function(t,e){var c,n=t._slotted.default;return{c:function(){c=Object(o.l)("main"),this.h()},l:function(t){c=Object(o.i)(t,"MAIN",{class:!0},!1),Object(o.h)(c).forEach(o.p),this.h()},h:function(){c.className=e.mainClass},m:function(t,e){Object(o.t)(c,t,e),n&&Object(o.d)(n,c)},p:function(t,e){t.mainClass&&(c.className=e.mainClass)},u:function(){Object(o.p)(c),n&&Object(o.z)(c,n)},d:o.v}}(this,this._state),t.target){var e=Object(o.h)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(o.p),this._mount(t.target,t.anchor)}}function i(){}function a(t,e){var c,n,i,a,r,s,u=e.variantTitle||e.demoTitle,j=t._slotted.variants;return{c:function(){c=Object(o.l)("h2"),n=Object(o.n)(u),i=Object(o.n)(" Variants"),a=Object(o.n)("\n            "),this.h()},l:function(t){c=Object(o.i)(t,"H2",{class:!0},!1);var e=Object(o.h)(c);n=Object(o.j)(e,u),i=Object(o.j)(e," Variants"),e.forEach(o.p),a=Object(o.j)(t,"\n            "),this.h()},h:function(){c.className="demo-body__head"},m:function(t,e){Object(o.t)(c,t,e),Object(o.d)(n,c),Object(o.d)(i,c),Object(o.t)(a,t,e),j&&(Object(o.t)(r||(r=Object(o.k)()),t,e),Object(o.t)(j,t,e),Object(o.t)(s||(s=Object(o.k)()),t,e))},p:function(t,e){(t.variantTitle||t.demoTitle)&&u!==(u=e.variantTitle||e.demoTitle)&&(n.data=u)},u:function(){Object(o.p)(c),Object(o.p)(a),j&&(Object(o.y)(r,s,j),Object(o.p)(r),Object(o.p)(s))},d:o.v}}function r(t){Object(o.s)(this,t),this.store=u.a,this._state=Object(o.e)({demoTitle:"Demo",variantTitle:!1,variants:!1},t.data),this._handlers.destroy=[i],this._slotted=t.slots||{};var e=function(){this.slots.variants&&this.set({variants:!0})}.bind(this);t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this.slots={},this._fragment=function(t,e){var c,n,i,r,u,j,b,f,l,O,h,d,m,p,_,v=t._slotted.header,g=(e.variants||e.variantTitle)&&a(t,e),E=new s({root:t.root,slots:{default:Object(o.m)()},data:{mainClass:"demo-body"}});return{c:function(){c=Object(o.l)("div"),n=Object(o.l)("link"),i=Object(o.n)("\n\n    "),r=Object(o.l)("header"),u=Object(o.l)("div"),j=Object(o.l)("h1"),b=Object(o.n)(e.demoTitle),f=Object(o.n)("\n            "),l=Object(o.l)("div"),v||(O=Object(o.l)("p"),h=Object(o.n)("No Examples")),d=Object(o.n)("\n\n    "),m=Object(o.n)("\n        "),p=Object(o.l)("div"),g&&g.c(),_=Object(o.n)("\n    "),E._fragment.c(),this.h()},l:function(t){c=Object(o.i)(t,"DIV",{class:!0},!1);var a=Object(o.h)(c);n=Object(o.i)(a,"LINK",{rel:!0,href:!0},!1),Object(o.h)(n).forEach(o.p),i=Object(o.j)(a,"\n\n    "),r=Object(o.i)(a,"HEADER",{class:!0},!1);var s=Object(o.h)(r);u=Object(o.i)(s,"DIV",{class:!0},!1);var v=Object(o.h)(u);j=Object(o.i)(v,"H1",{class:!0},!1);var y=Object(o.h)(j);b=Object(o.j)(y,e.demoTitle),y.forEach(o.p),f=Object(o.j)(v,"\n            "),l=Object(o.i)(v,"DIV",{class:!0},!1),y=Object(o.h)(l),O=Object(o.i)(y,"P",{},!1);var T=Object(o.h)(O);h=Object(o.j)(T,"No Examples"),T.forEach(o.p),y.forEach(o.p),v.forEach(o.p),s.forEach(o.p),d=Object(o.j)(a,"\n\n    "),m=Object(o.j)(t,"\n        "),p=Object(o.i)(t,"DIV",{class:!0},!1),s=Object(o.h)(p),g&&g.l(s),s.forEach(o.p),_=Object(o.j)(t,"\n    "),E._fragment.l(a),a.forEach(o.p),this.h()},h:function(){n.rel="stylesheet",n.href="/public/css/demo/demo.css",j.className="demo-header__title",l.className="demo-header__component",u.className="wrap",r.className="demo-header",p.className="wrap",c.className="demo"},m:function(t,e){Object(o.t)(c,t,e),Object(o.d)(n,c),Object(o.d)(i,c),Object(o.d)(r,c),Object(o.d)(u,r),Object(o.d)(j,u),Object(o.d)(b,j),Object(o.d)(f,u),Object(o.d)(l,u),v?Object(o.d)(v,l):(Object(o.d)(O,l),Object(o.d)(h,O)),Object(o.d)(d,c),Object(o.d)(m,E._slotted.default),Object(o.d)(p,E._slotted.default),g&&g.m(p,null),Object(o.d)(_,E._slotted.default),E._mount(c,null)},p:function(e,c){e.demoTitle&&(b.data=c.demoTitle),c.variants||c.variantTitle?g?g.p(e,c):((g=a(t,c)).c(),g.m(p,null)):g&&(g.u(),g.d(),g=null)},u:function(){Object(o.p)(c),v&&Object(o.z)(l,v),g&&g.u()},d:function(){g&&g.d(),E.destroy(!1)}}}(this,this._state),this.root._oncreate.push(e),t.target&&(e=Object(o.h)(t.target),t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(o.p),this._mount(t.target,t.anchor),this._lock=!0,Object(o.g)(this._beforecreate),Object(o.g)(this._oncreate),Object(o.g)(this._aftercreate),this._lock=!1)}var o=c("j6kw");Object(o.e)(n.prototype,o.x);var s=n;t=c("9gOg");var u=c.n(t);Object(o.e)(r.prototype,o.x),e.a=r}}]);
//# sourceMappingURL=1.chunk.js.map