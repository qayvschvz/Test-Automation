var v = {};
Object.defineProperty(v, "__esModule", {
  value: !0
});
var g = function(a) {
  console.warn("[react-gtm]", a);
};
v.default = g;
var f = v, w = y(f);
function y(e) {
  return e && e.__esModule ? e : { default: e };
}
var h = {
  tags: function(a) {
    var t = a.id, r = a.events, n = a.dataLayer, i = a.dataLayerName, s = a.preview, d = a.auth, u = "&gtm_auth=" + d, p = "&gtm_preview=" + s;
    t || (0, w.default)("GTM Id is required");
    var o = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=` + t + u + p + `&gtm_cookies_win=x"
        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`, m = `
      (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ` + JSON.stringify(r).slice(1, -1) + `});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'` + u + p + `&gtm_cookies_win=x';
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','` + i + "','" + t + "');", c = this.dataLayer(n, i);
    return {
      iframe: o,
      script: m,
      dataLayerVar: c
    };
  },
  dataLayer: function(a, t) {
    return `
      window.` + t + " = window." + t + ` || [];
      window.` + t + ".push(" + JSON.stringify(a) + ")";
  }
}, L = h, _ = L, l = S(_);
function S(e) {
  return e && e.__esModule ? e : { default: e };
}
var N = {
  dataScript: function(a) {
    var t = document.createElement("script");
    return t.innerHTML = a, t;
  },
  gtm: function(a) {
    var t = l.default.tags(a), r = function() {
      var d = document.createElement("noscript");
      return d.innerHTML = t.iframe, d;
    }, n = function() {
      var d = document.createElement("script");
      return d.innerHTML = t.script, d;
    }, i = this.dataScript(t.dataLayerVar);
    return {
      noScript: r,
      script: n,
      dataScript: i
    };
  },
  initialize: function(a) {
    var t = a.gtmId, r = a.events, n = r === void 0 ? {} : r, i = a.dataLayer, s = a.dataLayerName, d = s === void 0 ? "dataLayer" : s, u = a.auth, p = u === void 0 ? "" : u, o = a.preview, m = o === void 0 ? "" : o, c = this.gtm({
      id: t,
      events: n,
      dataLayer: i || void 0,
      dataLayerName: d,
      auth: p,
      preview: m
    });
    i && document.head.appendChild(c.dataScript), document.head.insertBefore(c.script(), document.head.childNodes[0]), document.body.insertBefore(c.noScript(), document.body.childNodes[0]);
  },
  dataLayer: function(a) {
    var t = a.dataLayer, r = a.dataLayerName, n = r === void 0 ? "dataLayer" : r;
    if (window[n])
      return window[n].push(t);
    var i = l.default.dataLayer(t, n), s = this.dataScript(i);
    document.head.insertBefore(s, document.head.childNodes[0]);
  }
}, M = N, T = M, $ = B(T);
function B(e) {
  return e && e.__esModule ? e : { default: e };
}
var E = $.default;
export {
  E as d
};
//# sourceMappingURL=react-gtm-module.b7b9f499.js.map
