import { E as I } from "./@babel.7bf9beb3.js";
var V = { exports: {} }, E = { exports: {} }, l = 1;
function k() {
  return l = (l * 9301 + 49297) % 233280, l / 233280;
}
function C(r) {
  l = r;
}
var A = {
  nextValue: k,
  seed: C
}, g = A, s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-", a, y, f;
function w() {
  f = !1;
}
function M(r) {
  if (!r) {
    a !== s && (a = s, w());
    return;
  }
  if (r !== a) {
    if (r.length !== s.length)
      throw new Error("Custom alphabet for shortid must be " + s.length + " unique characters. You submitted " + r.length + " characters: " + r);
    var e = r.split("").filter(function(t, n, o) {
      return n !== o.lastIndexOf(t);
    });
    if (e.length)
      throw new Error("Custom alphabet for shortid must be " + s.length + " unique characters. These characters were not unique: " + e.join(", "));
    a = r, w();
  }
}
function R(r) {
  return M(r), a;
}
function j(r) {
  g.seed(r), y !== r && (w(), y = r);
}
function q() {
  a || M(s);
  for (var r = a.split(""), e = [], t = g.nextValue(), n; r.length > 0; )
    t = g.nextValue(), n = Math.floor(t * r.length), e.push(r.splice(n, 1)[0]);
  return e.join("");
}
function $() {
  return f || (f = q(), f);
}
function B(r) {
  var e = $();
  return e[r];
}
function D() {
  return a || s;
}
var m = {
  get: D,
  characters: R,
  seed: j,
  lookup: B,
  shuffled: $
}, p = typeof window == "object" && (window.crypto || window.msCrypto), x;
!p || !p.getRandomValues ? x = function(r) {
  for (var e = [], t = 0; t < r; t++)
    e.push(Math.floor(Math.random() * 256));
  return e;
} : x = function(r) {
  return p.getRandomValues(new Uint8Array(r));
};
var F = x, N = function(r, e, t) {
  for (var n = (2 << Math.log(e.length - 1) / Math.LN2) - 1, o = -~(1.6 * n * t / e.length), i = ""; ; )
    for (var d = r(o), c = o; c--; )
      if (i += e[d[c] & n] || "", i.length === +t)
        return i;
}, L = m, O = F, T = N;
function U(r) {
  for (var e = 0, t, n = ""; !t; )
    n = n + T(O, L.get(), 1), t = r < Math.pow(16, e + 1), e++;
  return n;
}
var G = U, v = G, W = 1567752802062, Y = 7, h, S;
function H(r) {
  var e = "", t = Math.floor((Date.now() - W) * 1e-3);
  return t === S ? h++ : (h = 0, S = t), e = e + v(Y), e = e + v(r), h > 0 && (e = e + v(h)), e = e + v(t), e;
}
var J = H, K = m;
function P(r) {
  if (!r || typeof r != "string" || r.length < 6)
    return !1;
  var e = new RegExp("[^" + K.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]");
  return !e.test(r);
}
var Q = P;
(function(r) {
  var e = m, t = J, n = Q, o = 0;
  function i(u) {
    return e.seed(u), r.exports;
  }
  function d(u) {
    return o = u, r.exports;
  }
  function c(u) {
    return u !== void 0 && e.characters(u), e.shuffled();
  }
  function b() {
    return t(o);
  }
  r.exports = b, r.exports.generate = b, r.exports.seed = i, r.exports.worker = d, r.exports.characters = c, r.exports.isValid = n;
})(E);
(function(r) {
  r.exports = E.exports;
})(V);
const Z = /* @__PURE__ */ I(V.exports);
export {
  Z as s
};
//# sourceMappingURL=shortid.a875005d.js.map
