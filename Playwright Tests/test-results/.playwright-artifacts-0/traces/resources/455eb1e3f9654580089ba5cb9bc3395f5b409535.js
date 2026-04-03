import { C as et } from "./@babel.7bf9beb3.js";
import { q as lt } from "./querystring.1911be23.js";
var E = {}, ht = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(s, n) {
  (function(t) {
    var g = n && !n.nodeType && n, p = s && !s.nodeType && s, d = typeof et == "object" && et;
    (d.global === d || d.window === d || d.self === d) && (t = d);
    var m, e = 2147483647, x = 36, b = 1, F = 26, G = 38, y = 700, f = 72, T = 128, k = "-", O = /^xn--/, Z = /[^\x20-\x7E]/, r = /[\x2E\u3002\uFF0E\uFF61]/g, c = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, w = x - b, u = Math.floor, v = String.fromCharCode, z;
    function q(h) {
      throw RangeError(c[h]);
    }
    function I(h, o) {
      for (var i = h.length, a = []; i--; )
        a[i] = o(h[i]);
      return a;
    }
    function S(h, o) {
      var i = h.split("@"), a = "";
      i.length > 1 && (a = i[0] + "@", h = i[1]), h = h.replace(r, ".");
      var l = h.split("."), j = I(l, o).join(".");
      return a + j;
    }
    function K(h) {
      for (var o = [], i = 0, a = h.length, l, j; i < a; )
        l = h.charCodeAt(i++), l >= 55296 && l <= 56319 && i < a ? (j = h.charCodeAt(i++), (j & 64512) == 56320 ? o.push(((l & 1023) << 10) + (j & 1023) + 65536) : (o.push(l), i--)) : o.push(l);
      return o;
    }
    function Q(h) {
      return I(h, function(o) {
        var i = "";
        return o > 65535 && (o -= 65536, i += v(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), i += v(o), i;
      }).join("");
    }
    function _(h) {
      return h - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : x;
    }
    function W(h, o) {
      return h + 22 + 75 * (h < 26) - ((o != 0) << 5);
    }
    function X(h, o, i) {
      var a = 0;
      for (h = i ? u(h / y) : h >> 1, h += u(h / o); h > w * F >> 1; a += x)
        h = u(h / w);
      return u(a + (w + 1) * h / (h + G));
    }
    function V(h) {
      var o = [], i = h.length, a, l = 0, j = T, C = f, M, P, D, $, A, U, R, B, J;
      for (M = h.lastIndexOf(k), M < 0 && (M = 0), P = 0; P < M; ++P)
        h.charCodeAt(P) >= 128 && q("not-basic"), o.push(h.charCodeAt(P));
      for (D = M > 0 ? M + 1 : 0; D < i; ) {
        for ($ = l, A = 1, U = x; D >= i && q("invalid-input"), R = _(h.charCodeAt(D++)), (R >= x || R > u((e - l) / A)) && q("overflow"), l += R * A, B = U <= C ? b : U >= C + F ? F : U - C, !(R < B); U += x)
          J = x - B, A > u(e / J) && q("overflow"), A *= J;
        a = o.length + 1, C = X(l - $, a, $ == 0), u(l / a) > e - j && q("overflow"), j += u(l / a), l %= a, o.splice(l++, 0, j);
      }
      return Q(o);
    }
    function tt(h) {
      var o, i, a, l, j, C, M, P, D, $, A, U = [], R, B, J, st;
      for (h = K(h), R = h.length, o = T, i = 0, j = f, C = 0; C < R; ++C)
        A = h[C], A < 128 && U.push(v(A));
      for (a = l = U.length, l && U.push(k); a < R; ) {
        for (M = e, C = 0; C < R; ++C)
          A = h[C], A >= o && A < M && (M = A);
        for (B = a + 1, M - o > u((e - i) / B) && q("overflow"), i += (M - o) * B, o = M, C = 0; C < R; ++C)
          if (A = h[C], A < o && ++i > e && q("overflow"), A == o) {
            for (P = i, D = x; $ = D <= j ? b : D >= j + F ? F : D - j, !(P < $); D += x)
              st = P - $, J = x - $, U.push(
                v(W($ + st % J, 0))
              ), P = u(st / J);
            U.push(v(W(P, 0))), j = X(i, B, a == l), i = 0, ++a;
          }
        ++i, ++o;
      }
      return U.join("");
    }
    function ut(h) {
      return S(h, function(o) {
        return O.test(o) ? V(o.slice(4).toLowerCase()) : o;
      });
    }
    function ct(h) {
      return S(h, function(o) {
        return Z.test(o) ? "xn--" + tt(o) : o;
      });
    }
    if (m = {
      version: "1.3.2",
      ucs2: {
        decode: K,
        encode: Q
      },
      decode: V,
      encode: tt,
      toASCII: ct,
      toUnicode: ut
    }, g && p)
      if (s.exports == g)
        p.exports = m;
      else
        for (z in m)
          m.hasOwnProperty(z) && (g[z] = m[z]);
    else
      t.punycode = m;
  })(et);
})(ht, ht.exports);
var pt = {
  isString: function(s) {
    return typeof s == "string";
  },
  isObject: function(s) {
    return typeof s == "object" && s !== null;
  },
  isNull: function(s) {
    return s === null;
  },
  isNullOrUndefined: function(s) {
    return s == null;
  }
}, mt = ht.exports, L = pt;
E.parse = H;
E.resolve = At;
E.resolveObject = jt;
E.format = qt;
E.Url = N;
function N() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var xt = /^([a-z0-9.+-]+:)/i, gt = /:[0-9]*$/, dt = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, bt = ["<", ">", '"', "`", " ", "\r", `
`, "	"], yt = ["{", "}", "|", "\\", "^", "`"].concat(bt), rt = ["'"].concat(yt), it = ["%", "/", "?", ";", "#"].concat(rt), at = ["/", "?", "#"], vt = 255, ft = /^[+a-z0-9A-Z_-]{0,63}$/, Ct = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Ot = {
  javascript: !0,
  "javascript:": !0
}, ot = {
  javascript: !0,
  "javascript:": !0
}, Y = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, nt = lt;
function H(s, n, t) {
  if (s && L.isObject(s) && s instanceof N)
    return s;
  var g = new N();
  return g.parse(s, n, t), g;
}
N.prototype.parse = function(s, n, t) {
  if (!L.isString(s))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof s);
  var g = s.indexOf("?"), p = g !== -1 && g < s.indexOf("#") ? "?" : "#", d = s.split(p), m = /\\/g;
  d[0] = d[0].replace(m, "/"), s = d.join(p);
  var e = s;
  if (e = e.trim(), !t && s.split("#").length === 1) {
    var x = dt.exec(e);
    if (x)
      return this.path = e, this.href = e, this.pathname = x[1], x[2] ? (this.search = x[2], n ? this.query = nt.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : n && (this.search = "", this.query = {}), this;
  }
  var b = xt.exec(e);
  if (b) {
    b = b[0];
    var F = b.toLowerCase();
    this.protocol = F, e = e.substr(b.length);
  }
  if (t || b || e.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var G = e.substr(0, 2) === "//";
    G && !(b && ot[b]) && (e = e.substr(2), this.slashes = !0);
  }
  if (!ot[b] && (G || b && !Y[b])) {
    for (var y = -1, f = 0; f < at.length; f++) {
      var T = e.indexOf(at[f]);
      T !== -1 && (y === -1 || T < y) && (y = T);
    }
    var k, O;
    y === -1 ? O = e.lastIndexOf("@") : O = e.lastIndexOf("@", y), O !== -1 && (k = e.slice(0, O), e = e.slice(O + 1), this.auth = decodeURIComponent(k)), y = -1;
    for (var f = 0; f < it.length; f++) {
      var T = e.indexOf(it[f]);
      T !== -1 && (y === -1 || T < y) && (y = T);
    }
    y === -1 && (y = e.length), this.host = e.slice(0, y), e = e.slice(y), this.parseHost(), this.hostname = this.hostname || "";
    var Z = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!Z)
      for (var r = this.hostname.split(/\./), f = 0, c = r.length; f < c; f++) {
        var w = r[f];
        if (!!w && !w.match(ft)) {
          for (var u = "", v = 0, z = w.length; v < z; v++)
            w.charCodeAt(v) > 127 ? u += "x" : u += w[v];
          if (!u.match(ft)) {
            var q = r.slice(0, f), I = r.slice(f + 1), S = w.match(Ct);
            S && (q.push(S[1]), I.unshift(S[2])), I.length && (e = "/" + I.join(".") + e), this.hostname = q.join(".");
            break;
          }
        }
      }
    this.hostname.length > vt ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), Z || (this.hostname = mt.toASCII(this.hostname));
    var K = this.port ? ":" + this.port : "", Q = this.hostname || "";
    this.host = Q + K, this.href += this.host, Z && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), e[0] !== "/" && (e = "/" + e));
  }
  if (!Ot[F])
    for (var f = 0, c = rt.length; f < c; f++) {
      var _ = rt[f];
      if (e.indexOf(_) !== -1) {
        var W = encodeURIComponent(_);
        W === _ && (W = escape(_)), e = e.split(_).join(W);
      }
    }
  var X = e.indexOf("#");
  X !== -1 && (this.hash = e.substr(X), e = e.slice(0, X));
  var V = e.indexOf("?");
  if (V !== -1 ? (this.search = e.substr(V), this.query = e.substr(V + 1), n && (this.query = nt.parse(this.query)), e = e.slice(0, V)) : n && (this.search = "", this.query = {}), e && (this.pathname = e), Y[F] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var K = this.pathname || "", tt = this.search || "";
    this.path = K + tt;
  }
  return this.href = this.format(), this;
};
function qt(s) {
  return L.isString(s) && (s = H(s)), s instanceof N ? s.format() : N.prototype.format.call(s);
}
N.prototype.format = function() {
  var s = this.auth || "";
  s && (s = encodeURIComponent(s), s = s.replace(/%3A/i, ":"), s += "@");
  var n = this.protocol || "", t = this.pathname || "", g = this.hash || "", p = !1, d = "";
  this.host ? p = s + this.host : this.hostname && (p = s + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (p += ":" + this.port)), this.query && L.isObject(this.query) && Object.keys(this.query).length && (d = nt.stringify(this.query));
  var m = this.search || d && "?" + d || "";
  return n && n.substr(-1) !== ":" && (n += ":"), this.slashes || (!n || Y[n]) && p !== !1 ? (p = "//" + (p || ""), t && t.charAt(0) !== "/" && (t = "/" + t)) : p || (p = ""), g && g.charAt(0) !== "#" && (g = "#" + g), m && m.charAt(0) !== "?" && (m = "?" + m), t = t.replace(/[?#]/g, function(e) {
    return encodeURIComponent(e);
  }), m = m.replace("#", "%23"), n + p + t + m + g;
};
function At(s, n) {
  return H(s, !1, !0).resolve(n);
}
N.prototype.resolve = function(s) {
  return this.resolveObject(H(s, !1, !0)).format();
};
function jt(s, n) {
  return s ? H(s, !1, !0).resolveObject(n) : n;
}
N.prototype.resolveObject = function(s) {
  if (L.isString(s)) {
    var n = new N();
    n.parse(s, !1, !0), s = n;
  }
  for (var t = new N(), g = Object.keys(this), p = 0; p < g.length; p++) {
    var d = g[p];
    t[d] = this[d];
  }
  if (t.hash = s.hash, s.href === "")
    return t.href = t.format(), t;
  if (s.slashes && !s.protocol) {
    for (var m = Object.keys(s), e = 0; e < m.length; e++) {
      var x = m[e];
      x !== "protocol" && (t[x] = s[x]);
    }
    return Y[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t;
  }
  if (s.protocol && s.protocol !== t.protocol) {
    if (!Y[s.protocol]) {
      for (var b = Object.keys(s), F = 0; F < b.length; F++) {
        var G = b[F];
        t[G] = s[G];
      }
      return t.href = t.format(), t;
    }
    if (t.protocol = s.protocol, !s.host && !ot[s.protocol]) {
      for (var c = (s.pathname || "").split("/"); c.length && !(s.host = c.shift()); )
        ;
      s.host || (s.host = ""), s.hostname || (s.hostname = ""), c[0] !== "" && c.unshift(""), c.length < 2 && c.unshift(""), t.pathname = c.join("/");
    } else
      t.pathname = s.pathname;
    if (t.search = s.search, t.query = s.query, t.host = s.host || "", t.auth = s.auth, t.hostname = s.hostname || s.host, t.port = s.port, t.pathname || t.search) {
      var y = t.pathname || "", f = t.search || "";
      t.path = y + f;
    }
    return t.slashes = t.slashes || s.slashes, t.href = t.format(), t;
  }
  var T = t.pathname && t.pathname.charAt(0) === "/", k = s.host || s.pathname && s.pathname.charAt(0) === "/", O = k || T || t.host && s.pathname, Z = O, r = t.pathname && t.pathname.split("/") || [], c = s.pathname && s.pathname.split("/") || [], w = t.protocol && !Y[t.protocol];
  if (w && (t.hostname = "", t.port = null, t.host && (r[0] === "" ? r[0] = t.host : r.unshift(t.host)), t.host = "", s.protocol && (s.hostname = null, s.port = null, s.host && (c[0] === "" ? c[0] = s.host : c.unshift(s.host)), s.host = null), O = O && (c[0] === "" || r[0] === "")), k)
    t.host = s.host || s.host === "" ? s.host : t.host, t.hostname = s.hostname || s.hostname === "" ? s.hostname : t.hostname, t.search = s.search, t.query = s.query, r = c;
  else if (c.length)
    r || (r = []), r.pop(), r = r.concat(c), t.search = s.search, t.query = s.query;
  else if (!L.isNullOrUndefined(s.search)) {
    if (w) {
      t.hostname = t.host = r.shift();
      var u = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : !1;
      u && (t.auth = u.shift(), t.host = t.hostname = u.shift());
    }
    return t.search = s.search, t.query = s.query, (!L.isNull(t.pathname) || !L.isNull(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.href = t.format(), t;
  }
  if (!r.length)
    return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
  for (var v = r.slice(-1)[0], z = (t.host || s.host || r.length > 1) && (v === "." || v === "..") || v === "", q = 0, I = r.length; I >= 0; I--)
    v = r[I], v === "." ? r.splice(I, 1) : v === ".." ? (r.splice(I, 1), q++) : q && (r.splice(I, 1), q--);
  if (!O && !Z)
    for (; q--; q)
      r.unshift("..");
  O && r[0] !== "" && (!r[0] || r[0].charAt(0) !== "/") && r.unshift(""), z && r.join("/").substr(-1) !== "/" && r.push("");
  var S = r[0] === "" || r[0] && r[0].charAt(0) === "/";
  if (w) {
    t.hostname = t.host = S ? "" : r.length ? r.shift() : "";
    var u = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : !1;
    u && (t.auth = u.shift(), t.host = t.hostname = u.shift());
  }
  return O = O || t.host && r.length, O && !S && r.unshift(""), r.length ? t.pathname = r.join("/") : (t.pathname = null, t.path = null), (!L.isNull(t.pathname) || !L.isNull(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.auth = s.auth || t.auth, t.slashes = t.slashes || s.slashes, t.href = t.format(), t;
};
N.prototype.parseHost = function() {
  var s = this.host, n = gt.exec(s);
  n && (n = n[0], n !== ":" && (this.port = n.substr(1)), s = s.substr(0, s.length - n.length)), s && (this.hostname = s);
};
export {
  E as u
};
//# sourceMappingURL=url.b35ad3c3.js.map
