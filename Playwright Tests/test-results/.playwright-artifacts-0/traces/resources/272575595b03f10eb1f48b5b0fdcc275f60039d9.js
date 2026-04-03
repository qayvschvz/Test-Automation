import { a as V, b as j, d as W, c as N, e as S, f as U, h as z, s as C } from "./lodash.e7e500d3.js";
var u = V, L = C, O = j, E = U, G = W, J = z, A = S, h = N, _ = (r) => Array.isArray(r) ? r : [r], s = (r) => r === void 0, y = (r) => A(r) || Array.isArray(r) ? Object.keys(r) : [], o = (r, e) => r.hasOwnProperty(e), d = (r) => L(O(r)), w = (r) => s(r) || Array.isArray(r) && r.length === 0, K = (r, e, t, i) => e && o(e, t) && r && o(r, t) && i(r[t], e[t]), p = (r, e) => s(r) && e === 0 || s(e) && r === 0 || u(r, e), M = (r, e) => s(r) && e === !1 || s(e) && r === !1 || u(r, e), x = (r) => s(r) || u(r, {}) || r === !0, v = (r) => s(r) || u(r, {}), B = (r) => s(r) || A(r) || r === !0 || r === !1;
function I(r, e) {
  return w(r) && w(e) ? !0 : u(d(r), d(e));
}
function Z(r, e) {
  return r = _(r), e = _(e), u(d(r), d(e));
}
function c(r, e, t, i) {
  var l = O(y(r).concat(y(e)));
  return v(r) && v(e) ? !0 : v(r) && y(e).length || v(e) && y(r).length ? !1 : l.every(function(n) {
    var a = r[n], f = e[n];
    return Array.isArray(a) && Array.isArray(f) ? u(d(r), d(e)) : Array.isArray(a) && !Array.isArray(f) || Array.isArray(f) && !Array.isArray(a) ? !1 : K(r, e, n, i);
  });
}
function D(r, e, t, i) {
  return A(r) && A(e) ? i(r, e) : Array.isArray(r) && Array.isArray(e) ? c(r, e, t, i) : u(r, e);
}
function g(r, e, t, i) {
  var l = E(r, i), n = E(e, i), a = J(l, n, i);
  return a.length === Math.max(l.length, n.length);
}
var F = {
  title: u,
  uniqueItems: M,
  minLength: p,
  minItems: p,
  minProperties: p,
  required: I,
  enum: I,
  type: Z,
  items: D,
  anyOf: g,
  allOf: g,
  oneOf: g,
  properties: c,
  patternProperties: c,
  dependencies: c
}, H = [
  "properties",
  "patternProperties",
  "dependencies",
  "uniqueItems",
  "minLength",
  "minItems",
  "minProperties",
  "required"
], Q = ["additionalProperties", "additionalItems", "contains", "propertyNames", "not"];
function q(r, e, t) {
  if (t = G(t, {
    ignore: []
  }), x(r) && x(e))
    return !0;
  if (!B(r) || !B(e))
    throw new Error("Either of the values are not a JSON schema.");
  if (r === e)
    return !0;
  if (h(r) && h(e))
    return r === e;
  if (r === void 0 && e === !1 || e === void 0 && r === !1 || s(r) && !s(e) || !s(r) && s(e))
    return !1;
  var i = O(Object.keys(r).concat(Object.keys(e)));
  if (t.ignore.length && (i = i.filter((n) => t.ignore.indexOf(n) === -1)), !i.length)
    return !0;
  function l(n, a) {
    return q(n, a, t);
  }
  return i.every(function(n) {
    var a = r[n], f = e[n];
    if (Q.indexOf(n) !== -1)
      return q(a, f, t);
    var m = F[n];
    if (m || (m = u), u(a, f))
      return !0;
    if (H.indexOf(n) === -1 && (!o(r, n) && o(e, n) || o(r, n) && !o(e, n)))
      return a === f;
    var P = m(a, f, n, l);
    if (!h(P))
      throw new Error("Comparer must return true or false");
    return P;
  });
}
var T = q;
export {
  T as s
};
//# sourceMappingURL=json-schema-compare.7d164707.js.map
