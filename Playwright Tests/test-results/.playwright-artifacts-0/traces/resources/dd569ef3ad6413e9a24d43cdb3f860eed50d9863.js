import { a as l, b as O, e as d, _ as L } from "./tslib.0d11ab8c.js";
import { l as $, D as _, n as A, o as N, q as k } from "./@formatjs.8b514567.js";
import { i as b } from "./intl-messageformat.eb8c2d83.js";
import "./hoist-non-react-statics.5d83aeee.js";
const C = window.React;
function E(e) {
  $(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var x = l(l({}, _), { textComponent: C.Fragment });
function q(e) {
  return function(t) {
    return e(C.Children.toArray(t));
  };
}
function f(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  var a = Object.keys(e), n = Object.keys(t), s = a.length;
  if (n.length !== s)
    return !1;
  for (var r = 0; r < s; r++) {
    var o = a[r];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o))
      return !1;
  }
  return !0;
}
const D = window.React;
var F = D.createContext(null), S = F.Provider, K = S, U = F;
const Z = window.React;
function z() {
  var e = Z.useContext(U);
  return E(e), e;
}
const v = window.React;
function m(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    fallbackOnEmptyString: e.fallbackOnEmptyString,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    onWarn: e.onWarn,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
    defaultRichTextElements: e.defaultRichTextElements
  };
}
function I(e) {
  return e && Object.keys(e).reduce(function(t, a) {
    var n = e[a];
    return t[a] = b(n) ? q(n) : n, t;
  }, {});
}
var G = function(e, t, a, n) {
  for (var s = [], r = 4; r < arguments.length; r++)
    s[r - 4] = arguments[r];
  var o = I(n), u = k.apply(void 0, L([
    e,
    t,
    a,
    o
  ], s, !1));
  return Array.isArray(u) ? v.Children.toArray(u) : u;
}, y = function(e, t) {
  var a = e.defaultRichTextElements, n = d(e, ["defaultRichTextElements"]), s = I(a), r = N(l(l(l({}, x), n), { defaultRichTextElements: s }), t);
  return l(l({}, r), { formatMessage: G.bind(null, {
    locale: r.locale,
    timeZone: r.timeZone,
    fallbackOnEmptyString: r.fallbackOnEmptyString,
    formats: r.formats,
    defaultLocale: r.defaultLocale,
    defaultFormats: r.defaultFormats,
    messages: r.messages,
    onError: r.onError,
    defaultRichTextElements: s
  }, r.formatters) });
}, W = function(e) {
  O(t, e);
  function t() {
    var a = e !== null && e.apply(this, arguments) || this;
    return a.cache = A(), a.state = {
      cache: a.cache,
      intl: y(m(a.props), a.cache),
      prevConfig: m(a.props)
    }, a;
  }
  return t.getDerivedStateFromProps = function(a, n) {
    var s = n.prevConfig, r = n.cache, o = m(a);
    return f(s, o) ? null : {
      intl: y(o, r),
      prevConfig: o
    };
  }, t.prototype.render = function() {
    return E(this.state.intl), v.createElement(K, { value: this.state.intl }, this.props.children);
  }, t.displayName = "IntlProvider", t.defaultProps = x, t;
}(v.PureComponent);
const Y = W, i = window.React;
function X(e, t) {
  var a = e.values, n = d(e, ["values"]), s = t.values, r = d(t, ["values"]);
  return f(s, a) && f(n, r);
}
function R(e) {
  var t = z(), a = t.formatMessage, n = t.textComponent, s = n === void 0 ? i.Fragment : n, r = e.id, o = e.description, u = e.defaultMessage, M = e.values, g = e.children, h = e.tagName, p = h === void 0 ? s : h, w = e.ignoreTag, P = { id: r, description: o, defaultMessage: u }, c = a(P, M, {
    ignoreTag: w
  });
  return typeof g == "function" ? g(Array.isArray(c) ? c : [c]) : p ? i.createElement(p, null, i.Children.toArray(c)) : i.createElement(i.Fragment, null, c);
}
R.displayName = "FormattedMessage";
var T = i.memo(R, X);
T.displayName = "MemoizedFormattedMessage";
const j = T;
export {
  j as F,
  Y as I,
  z as u
};
//# sourceMappingURL=react-intl.1d87e970.js.map
