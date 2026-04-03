import { p as g, A as F } from "./history.b20123cb.js";
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const C = window.React.createContext, m = window.React.useContext, R = window.React.useMemo, T = window.React.useRef, j = window.React.useEffect, k = window.React.useCallback, y = window.React.createElement, L = window.React.Children, z = window.React.isValidElement, H = window.React.Fragment, B = /* @__PURE__ */ C(null), w = /* @__PURE__ */ C(null), P = /* @__PURE__ */ C({
  outlet: null,
  matches: []
});
function p(e, t) {
  if (!e)
    throw new Error(t);
}
function b(e, t, n) {
  n === void 0 && (n = "/");
  let l = typeof t == "string" ? g(t) : t, a = V(l.pathname || "/", n);
  if (a == null)
    return null;
  let i = I(e);
  U(i);
  let s = null;
  for (let r = 0; s == null && r < i.length; ++r)
    s = Z(i[r], a);
  return s;
}
function I(e, t, n, l) {
  return t === void 0 && (t = []), n === void 0 && (n = []), l === void 0 && (l = ""), e.forEach((a, i) => {
    let s = {
      relativePath: a.path || "",
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: i,
      route: a
    };
    s.relativePath.startsWith("/") && (s.relativePath.startsWith(l) || p(!1), s.relativePath = s.relativePath.slice(l.length));
    let r = d([l, s.relativePath]), o = n.concat(s);
    a.children && a.children.length > 0 && (a.index === !0 && p(!1), I(a.children, t, o, r)), !(a.path == null && !a.index) && t.push({
      path: r,
      score: X(r, a.index),
      routesMeta: o
    });
  }), t;
}
function U(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : Y(t.routesMeta.map((l) => l.childrenIndex), n.routesMeta.map((l) => l.childrenIndex)));
}
const _ = /^:\w+$/, D = 3, G = 2, q = 1, K = 10, Q = -2, N = (e) => e === "*";
function X(e, t) {
  let n = e.split("/"), l = n.length;
  return n.some(N) && (l += Q), t && (l += G), n.filter((a) => !N(a)).reduce((a, i) => a + (_.test(i) ? D : i === "" ? q : K), l);
}
function Y(e, t) {
  return e.length === t.length && e.slice(0, -1).every((l, a) => l === t[a]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Z(e, t) {
  let {
    routesMeta: n
  } = e, l = {}, a = "/", i = [];
  for (let s = 0; s < n.length; ++s) {
    let r = n[s], o = s === n.length - 1, c = a === "/" ? t : t.slice(a.length) || "/", u = M({
      path: r.relativePath,
      caseSensitive: r.caseSensitive,
      end: o
    }, c);
    if (!u)
      return null;
    Object.assign(l, u.params);
    let f = r.route;
    i.push({
      params: l,
      pathname: d([a, u.pathname]),
      pathnameBase: J(d([a, u.pathnameBase])),
      route: f
    }), u.pathnameBase !== "/" && (a = d([a, u.pathnameBase]));
  }
  return i;
}
function M(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, l] = A(e.path, e.caseSensitive, e.end), a = t.match(n);
  if (!a)
    return null;
  let i = a[0], s = i.replace(/(.)\/+$/, "$1"), r = a.slice(1);
  return {
    params: l.reduce((c, u, f) => {
      if (u === "*") {
        let h = r[f] || "";
        s = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return c[u] = ee(r[f] || ""), c;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function A(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0);
  let l = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (s, r) => (l.push(r), "([^\\/]+)"));
  return e.endsWith("*") ? (l.push("*"), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)", [new RegExp(a, t ? void 0 : "i"), l];
}
function ee(e, t) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function te(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: l = "",
    hash: a = ""
  } = typeof e == "string" ? g(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : ne(n, t) : t,
    search: le(l),
    hash: ie(a)
  };
}
function ne(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
  }), n.length > 1 ? n.join("/") : "/";
}
function O(e, t, n) {
  let l = typeof e == "string" ? g(e) : e, a = e === "" || l.pathname === "" ? "/" : l.pathname, i;
  if (a == null)
    i = n;
  else {
    let r = t.length - 1;
    if (a.startsWith("..")) {
      let o = a.split("/");
      for (; o[0] === ".."; )
        o.shift(), r -= 1;
      l.pathname = o.join("/");
    }
    i = r >= 0 ? t[r] : "/";
  }
  let s = te(l, i);
  return a && a !== "/" && a.endsWith("/") && !s.pathname.endsWith("/") && (s.pathname += "/"), s;
}
function ae(e) {
  return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? g(e).pathname : e.pathname;
}
function V(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = e.charAt(t.length);
  return n && n !== "/" ? null : e.slice(t.length) || "/";
}
const d = (e) => e.join("/").replace(/\/\/+/g, "/"), J = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), le = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, ie = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function pe(e) {
  v() || p(!1);
  let {
    basename: t,
    navigator: n
  } = m(B), {
    hash: l,
    pathname: a,
    search: i
  } = se(e), s = a;
  if (t !== "/") {
    let r = ae(e), o = r != null && r.endsWith("/");
    s = a === "/" ? t + (o ? "/" : "") : d([t, a]);
  }
  return n.createHref({
    pathname: s,
    search: i,
    hash: l
  });
}
function v() {
  return m(w) != null;
}
function x() {
  return v() || p(!1), m(w).location;
}
function fe() {
  return m(w).navigationType;
}
function me(e) {
  v() || p(!1);
  let {
    pathname: t
  } = x();
  return R(() => M(e, t), [t, e]);
}
function re() {
  v() || p(!1);
  let {
    basename: e,
    navigator: t
  } = m(B), {
    matches: n
  } = m(P), {
    pathname: l
  } = x(), a = JSON.stringify(n.map((r) => r.pathnameBase)), i = T(!1);
  return j(() => {
    i.current = !0;
  }), k(function(r, o) {
    if (o === void 0 && (o = {}), !i.current)
      return;
    if (typeof r == "number") {
      t.go(r);
      return;
    }
    let c = O(r, JSON.parse(a), l);
    e !== "/" && (c.pathname = d([e, c.pathname])), (o.replace ? t.replace : t.push)(c, o.state);
  }, [e, t, a, l]);
}
function de() {
  let {
    matches: e
  } = m(P), t = e[e.length - 1];
  return t ? t.params : {};
}
function se(e) {
  let {
    matches: t
  } = m(P), {
    pathname: n
  } = x(), l = JSON.stringify(t.map((a) => a.pathnameBase));
  return R(() => O(e, JSON.parse(l), n), [e, l, n]);
}
function oe(e, t) {
  v() || p(!1);
  let {
    matches: n
  } = m(P), l = n[n.length - 1], a = l ? l.params : {}, i = l ? l.pathnameBase : "/", s = x(), r;
  if (t) {
    var o;
    let h = typeof t == "string" ? g(t) : t;
    i === "/" || ((o = h.pathname) == null ? void 0 : o.startsWith(i)) || p(!1), r = h;
  } else
    r = s;
  let c = r.pathname || "/", u = i === "/" ? c : c.slice(i.length) || "/", f = b(e, {
    pathname: u
  });
  return ce(f && f.map((h) => Object.assign({}, h, {
    params: Object.assign({}, a, h.params),
    pathname: d([i, h.pathname]),
    pathnameBase: h.pathnameBase === "/" ? i : d([i, h.pathnameBase])
  })), n);
}
function ce(e, t) {
  return t === void 0 && (t = []), e == null ? null : e.reduceRight((n, l, a) => /* @__PURE__ */ y(P.Provider, {
    children: l.route.element !== void 0 ? l.route.element : n,
    value: {
      outlet: n,
      matches: t.concat(e.slice(0, a + 1))
    }
  }), null);
}
function ve(e) {
  let {
    to: t,
    replace: n,
    state: l
  } = e;
  v() || p(!1);
  let a = re();
  return j(() => {
    a(t, {
      replace: n,
      state: l
    });
  }), null;
}
function ue(e) {
  p(!1);
}
function ge(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: l,
    navigationType: a = F.Pop,
    navigator: i,
    static: s = !1
  } = e;
  v() && p(!1);
  let r = J(t), o = R(() => ({
    basename: r,
    navigator: i,
    static: s
  }), [r, i, s]);
  typeof l == "string" && (l = g(l));
  let {
    pathname: c = "/",
    search: u = "",
    hash: f = "",
    state: h = null,
    key: W = "default"
  } = l, $ = R(() => {
    let E = V(c, r);
    return E == null ? null : {
      pathname: E,
      search: u,
      hash: f,
      state: h,
      key: W
    };
  }, [r, c, u, f, h, W]);
  return $ == null ? null : /* @__PURE__ */ y(B.Provider, {
    value: o
  }, /* @__PURE__ */ y(w.Provider, {
    children: n,
    value: {
      location: $,
      navigationType: a
    }
  }));
}
function Pe(e) {
  let {
    children: t,
    location: n
  } = e;
  return oe(S(t), n);
}
function S(e) {
  let t = [];
  return L.forEach(e, (n) => {
    if (!/* @__PURE__ */ z(n))
      return;
    if (n.type === H) {
      t.push.apply(t, S(n.props.children));
      return;
    }
    n.type !== ue && p(!1);
    let l = {
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      index: n.props.index,
      path: n.props.path
    };
    n.props.children && (l.children = S(n.props.children)), t.push(l);
  }), t;
}
export {
  ve as N,
  ge as R,
  re as a,
  pe as b,
  se as c,
  de as d,
  fe as e,
  Pe as f,
  ue as g,
  me as h,
  x as u
};
//# sourceMappingURL=react-router.0779000c.js.map
