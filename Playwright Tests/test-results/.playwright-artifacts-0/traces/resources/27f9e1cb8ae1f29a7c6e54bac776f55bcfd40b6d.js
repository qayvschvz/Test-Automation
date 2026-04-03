import { C as gr } from "./@babel.7bf9beb3.js";
var xe = { exports: {} };
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function(Sr, ze) {
  (function(D, o) {
    o(ze);
  })(gr, function(D) {
    function o() {
      for (var r = arguments.length, e = Array(r), a = 0; a < r; a++)
        e[a] = arguments[a];
      if (e.length > 1) {
        e[0] = e[0].slice(0, -1);
        for (var i = e.length - 1, n = 1; n < i; ++n)
          e[n] = e[n].slice(1, -1);
        return e[i] = e[i].slice(1), e.join("");
      } else
        return e[0];
    }
    function t(r) {
      return "(?:" + r + ")";
    }
    function re(r) {
      return r === void 0 ? "undefined" : r === null ? "null" : Object.prototype.toString.call(r).split(" ").pop().split("]").shift().toLowerCase();
    }
    function b(r) {
      return r.toUpperCase();
    }
    function He(r) {
      return r != null ? r instanceof Array ? r : typeof r.length != "number" || r.split || r.setInterval || r.call ? [r] : Array.prototype.slice.call(r) : [];
    }
    function Le(r, e) {
      var a = r;
      if (e)
        for (var i in e)
          a[i] = e[i];
      return a;
    }
    function se(r) {
      var e = "[A-Za-z]", a = "[0-9]", i = o(a, "[A-Fa-f]"), n = t(t("%[EFef]" + i + "%" + i + i + "%" + i + i) + "|" + t("%[89A-Fa-f]" + i + "%" + i + i) + "|" + t("%" + i + i)), f = "[\\:\\/\\?\\#\\[\\]\\@]", u = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", v = o(f, u), d = r ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", p = r ? "[\\uE000-\\uF8FF]" : "[]", s = o(e, a, "[\\-\\.\\_\\~]", d);
      t(e + o(e, a, "[\\+\\-\\.]") + "*"), t(t(n + "|" + o(s, u, "[\\:]")) + "*");
      var c = t(t("25[0-5]") + "|" + t("2[0-4]" + a) + "|" + t("1" + a + a) + "|" + t("0?[1-9]" + a) + "|0?0?" + a), g = t(c + "\\." + c + "\\." + c + "\\." + c), h = t(i + "{1,4}"), l = t(t(h + "\\:" + h) + "|" + g), S = t(t(h + "\\:") + "{6}" + l), E = t("\\:\\:" + t(h + "\\:") + "{5}" + l), w = t(t(h) + "?\\:\\:" + t(h + "\\:") + "{4}" + l), T = t(t(t(h + "\\:") + "{0,1}" + h) + "?\\:\\:" + t(h + "\\:") + "{3}" + l), N = t(t(t(h + "\\:") + "{0,2}" + h) + "?\\:\\:" + t(h + "\\:") + "{2}" + l), G = t(t(t(h + "\\:") + "{0,3}" + h) + "?\\:\\:" + h + "\\:" + l), x = t(t(t(h + "\\:") + "{0,4}" + h) + "?\\:\\:" + l), y = t(t(t(h + "\\:") + "{0,5}" + h) + "?\\:\\:" + h), m = t(t(t(h + "\\:") + "{0,6}" + h) + "?\\:\\:"), z = t([S, E, w, T, N, G, x, y, m].join("|")), U = t(t(s + "|" + n) + "+");
      t("[vV]" + i + "+\\." + o(s, u, "[\\:]") + "+"), t(t(n + "|" + o(s, u)) + "*");
      var k = t(n + "|" + o(s, u, "[\\:\\@]"));
      return t(t(n + "|" + o(s, u, "[\\@]")) + "+"), t(t(k + "|" + o("[\\/\\?]", p)) + "*"), {
        NOT_SCHEME: new RegExp(o("[^]", e, a, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(o("[^\\%\\:]", s, u), "g"),
        NOT_HOST: new RegExp(o("[^\\%\\[\\]\\:]", s, u), "g"),
        NOT_PATH: new RegExp(o("[^\\%\\/\\:\\@]", s, u), "g"),
        NOT_PATH_NOSCHEME: new RegExp(o("[^\\%\\/\\@]", s, u), "g"),
        NOT_QUERY: new RegExp(o("[^\\%]", s, u, "[\\:\\@\\/\\?]", p), "g"),
        NOT_FRAGMENT: new RegExp(o("[^\\%]", s, u, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(o("[^]", s, u), "g"),
        UNRESERVED: new RegExp(s, "g"),
        OTHER_CHARS: new RegExp(o("[^\\%]", s, v), "g"),
        PCT_ENCODED: new RegExp(n, "g"),
        IPV4ADDRESS: new RegExp("^(" + g + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + z + ")" + t(t("\\%25|\\%(?!" + i + "{2})") + "(" + U + ")") + "?\\]?$")
      };
    }
    var H = se(!1), X = se(!0), K = function() {
      function r(e, a) {
        var i = [], n = !0, f = !1, u = void 0;
        try {
          for (var v = e[Symbol.iterator](), d; !(n = (d = v.next()).done) && (i.push(d.value), !(a && i.length === a)); n = !0)
            ;
        } catch (p) {
          f = !0, u = p;
        } finally {
          try {
            !n && v.return && v.return();
          } finally {
            if (f)
              throw u;
          }
        }
        return i;
      }
      return function(e, a) {
        if (Array.isArray(e))
          return e;
        if (Symbol.iterator in Object(e))
          return r(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), qe = function(r) {
      if (Array.isArray(r)) {
        for (var e = 0, a = Array(r.length); e < r.length; e++)
          a[e] = r[e];
        return a;
      } else
        return Array.from(r);
    }, L = 2147483647, A = 36, ae = 1, Q = 26, Ve = 38, Me = 700, ve = 72, ce = 128, de = "-", je = /^xn--/, Ge = /[^\0-\x7E]/, Xe = /[\x2E\u3002\uFF0E\uFF61]/g, Qe = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, ne = A - ae, I = Math.floor, ie = String.fromCharCode;
    function _(r) {
      throw new RangeError(Qe[r]);
    }
    function Ye(r, e) {
      for (var a = [], i = r.length; i--; )
        a[i] = e(r[i]);
      return a;
    }
    function oe(r, e) {
      var a = r.split("@"), i = "";
      a.length > 1 && (i = a[0] + "@", r = a[1]), r = r.replace(Xe, ".");
      var n = r.split("."), f = Ye(n, e).join(".");
      return i + f;
    }
    function le(r) {
      for (var e = [], a = 0, i = r.length; a < i; ) {
        var n = r.charCodeAt(a++);
        if (n >= 55296 && n <= 56319 && a < i) {
          var f = r.charCodeAt(a++);
          (f & 64512) == 56320 ? e.push(((n & 1023) << 10) + (f & 1023) + 65536) : (e.push(n), a--);
        } else
          e.push(n);
      }
      return e;
    }
    var Ze = function(e) {
      return String.fromCodePoint.apply(String, qe(e));
    }, ke = function(e) {
      return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : A;
    }, Ee = function(e, a) {
      return e + 22 + 75 * (e < 26) - ((a != 0) << 5);
    }, pe = function(e, a, i) {
      var n = 0;
      for (e = i ? I(e / Me) : e >> 1, e += I(e / a); e > ne * Q >> 1; n += A)
        e = I(e / ne);
      return I(n + (ne + 1) * e / (e + Ve));
    }, ge = function(e) {
      var a = [], i = e.length, n = 0, f = ce, u = ve, v = e.lastIndexOf(de);
      v < 0 && (v = 0);
      for (var d = 0; d < v; ++d)
        e.charCodeAt(d) >= 128 && _("not-basic"), a.push(e.charCodeAt(d));
      for (var p = v > 0 ? v + 1 : 0; p < i; ) {
        for (var s = n, c = 1, g = A; ; g += A) {
          p >= i && _("invalid-input");
          var h = ke(e.charCodeAt(p++));
          (h >= A || h > I((L - n) / c)) && _("overflow"), n += h * c;
          var l = g <= u ? ae : g >= u + Q ? Q : g - u;
          if (h < l)
            break;
          var S = A - l;
          c > I(L / S) && _("overflow"), c *= S;
        }
        var E = a.length + 1;
        u = pe(n - s, E, s == 0), I(n / E) > L - f && _("overflow"), f += I(n / E), n %= E, a.splice(n++, 0, f);
      }
      return String.fromCodePoint.apply(String, a);
    }, Se = function(e) {
      var a = [];
      e = le(e);
      var i = e.length, n = ce, f = 0, u = ve, v = !0, d = !1, p = void 0;
      try {
        for (var s = e[Symbol.iterator](), c; !(v = (c = s.next()).done); v = !0) {
          var g = c.value;
          g < 128 && a.push(ie(g));
        }
      } catch (J) {
        d = !0, p = J;
      } finally {
        try {
          !v && s.return && s.return();
        } finally {
          if (d)
            throw p;
        }
      }
      var h = a.length, l = h;
      for (h && a.push(de); l < i; ) {
        var S = L, E = !0, w = !1, T = void 0;
        try {
          for (var N = e[Symbol.iterator](), G; !(E = (G = N.next()).done); E = !0) {
            var x = G.value;
            x >= n && x < S && (S = x);
          }
        } catch (J) {
          w = !0, T = J;
        } finally {
          try {
            !E && N.return && N.return();
          } finally {
            if (w)
              throw T;
          }
        }
        var y = l + 1;
        S - n > I((L - f) / y) && _("overflow"), f += (S - n) * y, n = S;
        var m = !0, z = !1, U = void 0;
        try {
          for (var k = e[Symbol.iterator](), Ue; !(m = (Ue = k.next()).done); m = !0) {
            var be = Ue.value;
            if (be < n && ++f > L && _("overflow"), be == n) {
              for (var W = f, B = A; ; B += A) {
                var ee = B <= u ? ae : B >= u + Q ? Q : B - u;
                if (W < ee)
                  break;
                var we = W - ee, _e = A - ee;
                a.push(ie(Ee(ee + we % _e, 0))), W = I(we / _e);
              }
              a.push(ie(Ee(W, 0))), u = pe(f, y, l == h), f = 0, ++l;
            }
          }
        } catch (J) {
          z = !0, U = J;
        } finally {
          try {
            !m && k.return && k.return();
          } finally {
            if (z)
              throw U;
          }
        }
        ++f, ++n;
      }
      return a.join("");
    }, Je = function(e) {
      return oe(e, function(a) {
        return je.test(a) ? ge(a.slice(4).toLowerCase()) : a;
      });
    }, Ke = function(e) {
      return oe(e, function(a) {
        return Ge.test(a) ? "xn--" + Se(a) : a;
      });
    }, q = {
      version: "2.1.0",
      ucs2: {
        decode: le,
        encode: Ze
      },
      decode: ge,
      encode: Se,
      toASCII: Ke,
      toUnicode: Je
    }, C = {};
    function R(r) {
      var e = r.charCodeAt(0), a = void 0;
      return e < 16 ? a = "%0" + e.toString(16).toUpperCase() : e < 128 ? a = "%" + e.toString(16).toUpperCase() : e < 2048 ? a = "%" + (e >> 6 | 192).toString(16).toUpperCase() + "%" + (e & 63 | 128).toString(16).toUpperCase() : a = "%" + (e >> 12 | 224).toString(16).toUpperCase() + "%" + (e >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (e & 63 | 128).toString(16).toUpperCase(), a;
    }
    function V(r) {
      for (var e = "", a = 0, i = r.length; a < i; ) {
        var n = parseInt(r.substr(a + 1, 2), 16);
        if (n < 128)
          e += String.fromCharCode(n), a += 3;
        else if (n >= 194 && n < 224) {
          if (i - a >= 6) {
            var f = parseInt(r.substr(a + 4, 2), 16);
            e += String.fromCharCode((n & 31) << 6 | f & 63);
          } else
            e += r.substr(a, 6);
          a += 6;
        } else if (n >= 224) {
          if (i - a >= 9) {
            var u = parseInt(r.substr(a + 4, 2), 16), v = parseInt(r.substr(a + 7, 2), 16);
            e += String.fromCharCode((n & 15) << 12 | (u & 63) << 6 | v & 63);
          } else
            e += r.substr(a, 9);
          a += 9;
        } else
          e += r.substr(a, 3), a += 3;
      }
      return e;
    }
    function te(r, e) {
      function a(i) {
        var n = V(i);
        return n.match(e.UNRESERVED) ? n : i;
      }
      return r.scheme && (r.scheme = String(r.scheme).replace(e.PCT_ENCODED, a).toLowerCase().replace(e.NOT_SCHEME, "")), r.userinfo !== void 0 && (r.userinfo = String(r.userinfo).replace(e.PCT_ENCODED, a).replace(e.NOT_USERINFO, R).replace(e.PCT_ENCODED, b)), r.host !== void 0 && (r.host = String(r.host).replace(e.PCT_ENCODED, a).toLowerCase().replace(e.NOT_HOST, R).replace(e.PCT_ENCODED, b)), r.path !== void 0 && (r.path = String(r.path).replace(e.PCT_ENCODED, a).replace(r.scheme ? e.NOT_PATH : e.NOT_PATH_NOSCHEME, R).replace(e.PCT_ENCODED, b)), r.query !== void 0 && (r.query = String(r.query).replace(e.PCT_ENCODED, a).replace(e.NOT_QUERY, R).replace(e.PCT_ENCODED, b)), r.fragment !== void 0 && (r.fragment = String(r.fragment).replace(e.PCT_ENCODED, a).replace(e.NOT_FRAGMENT, R).replace(e.PCT_ENCODED, b)), r;
    }
    function fe(r) {
      return r.replace(/^0*(.*)/, "$1") || "0";
    }
    function ue(r, e) {
      var a = r.match(e.IPV4ADDRESS) || [], i = K(a, 2), n = i[1];
      return n ? n.split(".").map(fe).join(".") : r;
    }
    function De(r, e) {
      var a = r.match(e.IPV6ADDRESS) || [], i = K(a, 3), n = i[1], f = i[2];
      if (n) {
        for (var u = n.toLowerCase().split("::").reverse(), v = K(u, 2), d = v[0], p = v[1], s = p ? p.split(":").map(fe) : [], c = d.split(":").map(fe), g = e.IPV4ADDRESS.test(c[c.length - 1]), h = g ? 7 : 8, l = c.length - h, S = Array(h), E = 0; E < h; ++E)
          S[E] = s[E] || c[l + E] || "";
        g && (S[h - 1] = ue(S[h - 1], e));
        var w = S.reduce(function(y, m, z) {
          if (!m || m === "0") {
            var U = y[y.length - 1];
            U && U.index + U.length === z ? U.length++ : y.push({ index: z, length: 1 });
          }
          return y;
        }, []), T = w.sort(function(y, m) {
          return m.length - y.length;
        })[0], N = void 0;
        if (T && T.length > 1) {
          var G = S.slice(0, T.index), x = S.slice(T.index + T.length);
          N = G.join(":") + "::" + x.join(":");
        } else
          N = S.join(":");
        return f && (N += "%" + f), N;
      } else
        return r;
    }
    var We = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Be = "".match(/(){0}/)[1] === void 0;
    function P(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = {}, i = e.iri !== !1 ? X : H;
      e.reference === "suffix" && (r = (e.scheme ? e.scheme + ":" : "") + "//" + r);
      var n = r.match(We);
      if (n) {
        Be ? (a.scheme = n[1], a.userinfo = n[3], a.host = n[4], a.port = parseInt(n[5], 10), a.path = n[6] || "", a.query = n[7], a.fragment = n[8], isNaN(a.port) && (a.port = n[5])) : (a.scheme = n[1] || void 0, a.userinfo = r.indexOf("@") !== -1 ? n[3] : void 0, a.host = r.indexOf("//") !== -1 ? n[4] : void 0, a.port = parseInt(n[5], 10), a.path = n[6] || "", a.query = r.indexOf("?") !== -1 ? n[7] : void 0, a.fragment = r.indexOf("#") !== -1 ? n[8] : void 0, isNaN(a.port) && (a.port = r.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? n[4] : void 0)), a.host && (a.host = De(ue(a.host, i), i)), a.scheme === void 0 && a.userinfo === void 0 && a.host === void 0 && a.port === void 0 && !a.path && a.query === void 0 ? a.reference = "same-document" : a.scheme === void 0 ? a.reference = "relative" : a.fragment === void 0 ? a.reference = "absolute" : a.reference = "uri", e.reference && e.reference !== "suffix" && e.reference !== a.reference && (a.error = a.error || "URI is not a " + e.reference + " reference.");
        var f = C[(e.scheme || a.scheme || "").toLowerCase()];
        if (!e.unicodeSupport && (!f || !f.unicodeSupport)) {
          if (a.host && (e.domainHost || f && f.domainHost))
            try {
              a.host = q.toASCII(a.host.replace(i.PCT_ENCODED, V).toLowerCase());
            } catch (u) {
              a.error = a.error || "Host's domain name can not be converted to ASCII via punycode: " + u;
            }
          te(a, H);
        } else
          te(a, i);
        f && f.parse && f.parse(a, e);
      } else
        a.error = a.error || "URI can not be parsed.";
      return a;
    }
    function er(r, e) {
      var a = e.iri !== !1 ? X : H, i = [];
      return r.userinfo !== void 0 && (i.push(r.userinfo), i.push("@")), r.host !== void 0 && i.push(De(ue(String(r.host), a), a).replace(a.IPV6ADDRESS, function(n, f, u) {
        return "[" + f + (u ? "%25" + u : "") + "]";
      })), (typeof r.port == "number" || typeof r.port == "string") && (i.push(":"), i.push(String(r.port))), i.length ? i.join("") : void 0;
    }
    var Ce = /^\.\.?\//, ye = /^\/\.(\/|$)/, Ae = /^\/\.\.(\/|$)/, rr = /^\/?(?:.|\n)*?(?=\/|$)/;
    function M(r) {
      for (var e = []; r.length; )
        if (r.match(Ce))
          r = r.replace(Ce, "");
        else if (r.match(ye))
          r = r.replace(ye, "/");
        else if (r.match(Ae))
          r = r.replace(Ae, "/"), e.pop();
        else if (r === "." || r === "..")
          r = "";
        else {
          var a = r.match(rr);
          if (a) {
            var i = a[0];
            r = r.slice(i.length), e.push(i);
          } else
            throw new Error("Unexpected dot segment condition");
        }
      return e.join("");
    }
    function $(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e.iri ? X : H, i = [], n = C[(e.scheme || r.scheme || "").toLowerCase()];
      if (n && n.serialize && n.serialize(r, e), r.host && !a.IPV6ADDRESS.test(r.host)) {
        if (e.domainHost || n && n.domainHost)
          try {
            r.host = e.iri ? q.toUnicode(r.host) : q.toASCII(r.host.replace(a.PCT_ENCODED, V).toLowerCase());
          } catch (v) {
            r.error = r.error || "Host's domain name can not be converted to " + (e.iri ? "Unicode" : "ASCII") + " via punycode: " + v;
          }
      }
      te(r, a), e.reference !== "suffix" && r.scheme && (i.push(r.scheme), i.push(":"));
      var f = er(r, e);
      if (f !== void 0 && (e.reference !== "suffix" && i.push("//"), i.push(f), r.path && r.path.charAt(0) !== "/" && i.push("/")), r.path !== void 0) {
        var u = r.path;
        !e.absolutePath && (!n || !n.absolutePath) && (u = M(u)), f === void 0 && (u = u.replace(/^\/\//, "/%2F")), i.push(u);
      }
      return r.query !== void 0 && (i.push("?"), i.push(r.query)), r.fragment !== void 0 && (i.push("#"), i.push(r.fragment)), i.join("");
    }
    function Ie(r, e) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments[3], n = {};
      return i || (r = P($(r, a), a), e = P($(e, a), a)), a = a || {}, !a.tolerant && e.scheme ? (n.scheme = e.scheme, n.userinfo = e.userinfo, n.host = e.host, n.port = e.port, n.path = M(e.path || ""), n.query = e.query) : (e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0 ? (n.userinfo = e.userinfo, n.host = e.host, n.port = e.port, n.path = M(e.path || ""), n.query = e.query) : (e.path ? (e.path.charAt(0) === "/" ? n.path = M(e.path) : ((r.userinfo !== void 0 || r.host !== void 0 || r.port !== void 0) && !r.path ? n.path = "/" + e.path : r.path ? n.path = r.path.slice(0, r.path.lastIndexOf("/") + 1) + e.path : n.path = e.path, n.path = M(n.path)), n.query = e.query) : (n.path = r.path, e.query !== void 0 ? n.query = e.query : n.query = r.query), n.userinfo = r.userinfo, n.host = r.host, n.port = r.port), n.scheme = r.scheme), n.fragment = e.fragment, n;
    }
    function ar(r, e, a) {
      var i = Le({ scheme: "null" }, a);
      return $(Ie(P(r, i), P(e, i), i, !0), i);
    }
    function nr(r, e) {
      return typeof r == "string" ? r = $(P(r, e), e) : re(r) === "object" && (r = P($(r, e), e)), r;
    }
    function ir(r, e, a) {
      return typeof r == "string" ? r = $(P(r, a), a) : re(r) === "object" && (r = $(r, a)), typeof e == "string" ? e = $(P(e, a), a) : re(e) === "object" && (e = $(e, a)), r === e;
    }
    function tr(r, e) {
      return r && r.toString().replace(!e || !e.iri ? H.ESCAPE : X.ESCAPE, R);
    }
    function F(r, e) {
      return r && r.toString().replace(!e || !e.iri ? H.PCT_ENCODED : X.PCT_ENCODED, V);
    }
    var Y = {
      scheme: "http",
      domainHost: !0,
      parse: function(e, a) {
        return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
      },
      serialize: function(e, a) {
        var i = String(e.scheme).toLowerCase() === "https";
        return (e.port === (i ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
      }
    }, Re = {
      scheme: "https",
      domainHost: Y.domainHost,
      parse: Y.parse,
      serialize: Y.serialize
    };
    function $e(r) {
      return typeof r.secure == "boolean" ? r.secure : String(r.scheme).toLowerCase() === "wss";
    }
    var Z = {
      scheme: "ws",
      domainHost: !0,
      parse: function(e, a) {
        var i = e;
        return i.secure = $e(i), i.resourceName = (i.path || "/") + (i.query ? "?" + i.query : ""), i.path = void 0, i.query = void 0, i;
      },
      serialize: function(e, a) {
        if ((e.port === ($e(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
          var i = e.resourceName.split("?"), n = K(i, 2), f = n[0], u = n[1];
          e.path = f && f !== "/" ? f : void 0, e.query = u, e.resourceName = void 0;
        }
        return e.fragment = void 0, e;
      }
    }, Oe = {
      scheme: "wss",
      domainHost: Z.domainHost,
      parse: Z.parse,
      serialize: Z.serialize
    }, fr = {}, Te = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", O = "[0-9A-Fa-f]", ur = t(t("%[EFef]" + O + "%" + O + O + "%" + O + O) + "|" + t("%[89A-Fa-f]" + O + "%" + O + O) + "|" + t("%" + O + O)), hr = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", sr = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", vr = o(sr, '[\\"\\\\]'), cr = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", dr = new RegExp(Te, "g"), j = new RegExp(ur, "g"), or = new RegExp(o("[^]", hr, "[\\.]", '[\\"]', vr), "g"), Ne = new RegExp(o("[^]", Te, cr), "g"), lr = Ne;
    function he(r) {
      var e = V(r);
      return e.match(dr) ? e : r;
    }
    var me = {
      scheme: "mailto",
      parse: function(e, a) {
        var i = e, n = i.to = i.path ? i.path.split(",") : [];
        if (i.path = void 0, i.query) {
          for (var f = !1, u = {}, v = i.query.split("&"), d = 0, p = v.length; d < p; ++d) {
            var s = v[d].split("=");
            switch (s[0]) {
              case "to":
                for (var c = s[1].split(","), g = 0, h = c.length; g < h; ++g)
                  n.push(c[g]);
                break;
              case "subject":
                i.subject = F(s[1], a);
                break;
              case "body":
                i.body = F(s[1], a);
                break;
              default:
                f = !0, u[F(s[0], a)] = F(s[1], a);
                break;
            }
          }
          f && (i.headers = u);
        }
        i.query = void 0;
        for (var l = 0, S = n.length; l < S; ++l) {
          var E = n[l].split("@");
          if (E[0] = F(E[0]), a.unicodeSupport)
            E[1] = F(E[1], a).toLowerCase();
          else
            try {
              E[1] = q.toASCII(F(E[1], a).toLowerCase());
            } catch (w) {
              i.error = i.error || "Email address's domain name can not be converted to ASCII via punycode: " + w;
            }
          n[l] = E.join("@");
        }
        return i;
      },
      serialize: function(e, a) {
        var i = e, n = He(e.to);
        if (n) {
          for (var f = 0, u = n.length; f < u; ++f) {
            var v = String(n[f]), d = v.lastIndexOf("@"), p = v.slice(0, d).replace(j, he).replace(j, b).replace(or, R), s = v.slice(d + 1);
            try {
              s = a.iri ? q.toUnicode(s) : q.toASCII(F(s, a).toLowerCase());
            } catch (l) {
              i.error = i.error || "Email address's domain name can not be converted to " + (a.iri ? "Unicode" : "ASCII") + " via punycode: " + l;
            }
            n[f] = p + "@" + s;
          }
          i.path = n.join(",");
        }
        var c = e.headers = e.headers || {};
        e.subject && (c.subject = e.subject), e.body && (c.body = e.body);
        var g = [];
        for (var h in c)
          c[h] !== fr[h] && g.push(h.replace(j, he).replace(j, b).replace(Ne, R) + "=" + c[h].replace(j, he).replace(j, b).replace(lr, R));
        return g.length && (i.query = g.join("&")), i;
      }
    }, Er = /^([^\:]+)\:(.*)/, Pe = {
      scheme: "urn",
      parse: function(e, a) {
        var i = e.path && e.path.match(Er), n = e;
        if (i) {
          var f = a.scheme || n.scheme || "urn", u = i[1].toLowerCase(), v = i[2], d = f + ":" + (a.nid || u), p = C[d];
          n.nid = u, n.nss = v, n.path = void 0, p && (n = p.parse(n, a));
        } else
          n.error = n.error || "URN can not be parsed.";
        return n;
      },
      serialize: function(e, a) {
        var i = a.scheme || e.scheme || "urn", n = e.nid, f = i + ":" + (a.nid || n), u = C[f];
        u && (e = u.serialize(e, a));
        var v = e, d = e.nss;
        return v.path = (n || a.nid) + ":" + d, v;
      }
    }, pr = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Fe = {
      scheme: "urn:uuid",
      parse: function(e, a) {
        var i = e;
        return i.uuid = i.nss, i.nss = void 0, !a.tolerant && (!i.uuid || !i.uuid.match(pr)) && (i.error = i.error || "UUID is not valid."), i;
      },
      serialize: function(e, a) {
        var i = e;
        return i.nss = (e.uuid || "").toLowerCase(), i;
      }
    };
    C[Y.scheme] = Y, C[Re.scheme] = Re, C[Z.scheme] = Z, C[Oe.scheme] = Oe, C[me.scheme] = me, C[Pe.scheme] = Pe, C[Fe.scheme] = Fe, D.SCHEMES = C, D.pctEncChar = R, D.pctDecChars = V, D.parse = P, D.removeDotSegments = M, D.serialize = $, D.resolveComponents = Ie, D.resolve = ar, D.normalize = nr, D.equal = ir, D.escapeComponent = tr, D.unescapeComponent = F, Object.defineProperty(D, "__esModule", { value: !0 });
  });
})(xe, xe.exports);
export {
  xe as u
};
//# sourceMappingURL=uri-js.e28dac87.js.map
