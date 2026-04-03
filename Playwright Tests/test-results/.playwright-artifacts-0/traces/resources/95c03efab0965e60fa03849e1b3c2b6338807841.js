import { c as b, a as h } from "./history.b20123cb.js";
import { R as v, u as m, a as w, b as L, c as S } from "./react-router.0779000c.js";
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const p = window.React.useRef, C = window.React.useState, O = window.React.useLayoutEffect, y = window.React.createElement, E = window.React.forwardRef, R = window.React.useCallback, j = window.React.useMemo;
function d() {
  return d = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, d.apply(this, arguments);
}
function A(e, r) {
  if (e == null)
    return {};
  var t = {}, a = Object.keys(e), n, o;
  for (o = 0; o < a.length; o++)
    n = a[o], !(r.indexOf(n) >= 0) && (t[n] = e[n]);
  return t;
}
const K = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function M(e) {
  let {
    basename: r,
    children: t,
    window: a
  } = e, n = p();
  n.current == null && (n.current = b({
    window: a
  }));
  let o = n.current, [c, s] = C({
    action: o.action,
    location: o.location
  });
  return O(() => o.listen(s), [o]), /* @__PURE__ */ y(v, {
    basename: r,
    children: t,
    location: c.location,
    navigationType: c.action,
    navigator: o
  });
}
function x(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const U = /* @__PURE__ */ E(function(r, t) {
  let {
    onClick: a,
    reloadDocument: n,
    replace: o = !1,
    state: c,
    target: s,
    to: l
  } = r, i = A(r, K), g = L(l), P = B(l, {
    replace: o,
    state: c,
    target: s
  });
  function k(u) {
    a && a(u), !u.defaultPrevented && !n && P(u);
  }
  return /* @__PURE__ */ y("a", d({}, i, {
    href: g,
    onClick: k,
    ref: t,
    target: s
  }));
});
function B(e, r) {
  let {
    target: t,
    replace: a,
    state: n
  } = r === void 0 ? {} : r, o = w(), c = m(), s = S(e);
  return R((l) => {
    if (l.button === 0 && (!t || t === "_self") && !x(l)) {
      l.preventDefault();
      let i = !!a || h(c) === h(s);
      o(e, {
        replace: i,
        state: n
      });
    }
  }, [c, o, s, a, n, t, e]);
}
function W(e) {
  let r = p(f(e)), t = m(), a = j(() => {
    let c = f(t.search);
    for (let s of r.current.keys())
      c.has(s) || r.current.getAll(s).forEach((l) => {
        c.append(s, l);
      });
    return c;
  }, [t.search]), n = w(), o = R((c, s) => {
    n("?" + f(c), s);
  }, [n]);
  return [a, o];
}
function f(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((r, t) => {
    let a = e[t];
    return r.concat(Array.isArray(a) ? a.map((n) => [t, n]) : [[t, a]]);
  }, []));
}
export {
  M as B,
  U as L,
  f as c,
  W as u
};
//# sourceMappingURL=react-router-dom.58307be0.js.map
