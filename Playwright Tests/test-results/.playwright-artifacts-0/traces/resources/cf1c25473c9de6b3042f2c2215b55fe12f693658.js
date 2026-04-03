import { j as ir, k as nr, l as ar, h as or, a as fr, s as lr, b as ur, f as sr, m as pr, n as cr, e as dr, o as vr, w as mr, q as hr } from "./lodash.e7e500d3.js";
import { s as yr } from "./json-schema-compare.7d164707.js";
import { l as Ar } from "./compute-lcm.09f5037e.js";
var H = ir, E = yr, Pr = Ar, gr = pr, L = nr, W = cr, Or = ar, wr = or, D = fr, I = dr, N = hr, Q = lr, X = vr, $ = ur, P = sr, Er = mr, U = (r, ...e) => Er.apply(null, [r].concat(L(e))), Ir = (r) => h(er, r), qr = (r) => h(tr, r), h = (r, e) => r.indexOf(e) !== -1, xr = (r) => !A(r).length && r !== !1 && r !== !0, C = (r) => I(r) || r === !0 || r === !1, _r = (r) => r === !1, Z = (r) => r === !0, _ = (r, e, t) => t(r), b = (r) => Q($(W(r))), g = (r) => r !== void 0, j = (r) => $(W(r.map(A))), w = (r) => r[0], Rr = (r) => b(r), q = (r) => Math.max.apply(Math, r), x = (r) => Math.min.apply(Math, r), Mr = (r) => r.some(Z), Sr = (r) => P(L(r), D);
function Dr(r) {
  return function(e, t) {
    return E({
      [r]: e
    }, { [r]: t });
  };
}
function k(r) {
  if (Array.isArray(r.allOf)) {
    var e = r.allOf;
    return delete r.allOf, [r].concat(e.map(function(t) {
      return k(t);
    }));
  } else
    return [r];
}
function K(r, e) {
  return r.map(function(t) {
    return t && t[e];
  });
}
function Cr(r, e) {
  return r.map(function(t) {
    if (!!t)
      if (Array.isArray(t.items)) {
        var n = t.items[e];
        if (C(n))
          return n;
        if (t.hasOwnProperty("additionalItems"))
          return t.additionalItems;
      } else
        return t.items;
  });
}
function Vr(r, e) {
  return r.map(function(t, n) {
    try {
      return e(t, n);
    } catch {
      return;
    }
  }).filter(g);
}
function Fr(r) {
  return r.map(function(e) {
    if (!!e)
      return Array.isArray(e.items) ? e.additionalItems : e.items;
  });
}
function A(r) {
  return I(r) || Array.isArray(r) ? Object.keys(r) : [];
}
function V(r, e) {
  if (e = e || [], !r.length)
    return e;
  var t = r.slice(0).shift(), n = r.slice(1);
  return e.length ? V(n, L(e.map((a) => t.map((i) => [i].concat(a))))) : V(n, t.map((a) => a));
}
function Gr(r, e) {
  return Array.isArray(r) ? (r.splice.apply(r, [0, 0].concat(e)), r) : e;
}
function rr(r, e) {
  var t;
  try {
    t = r.map(function(n) {
      return JSON.stringify(n, null, 2);
    }).join(`
`);
  } catch {
    t = r.join(", ");
  }
  throw new Error('Could not resolve values for path:"' + e.join(".") + `". They are probably incompatible. Values: 
` + t);
}
function Lr(r) {
  for (var e in r)
    r.hasOwnProperty(e) && xr(r[e]) && delete r[e];
  return r;
}
function F(r, e, t) {
  return function(n, a) {
    if (a === void 0)
      throw new Error("You need to call merger with a key for the property name or index if array.");
    return a = String(a), r(n, null, t.concat(e, a));
  };
}
function Y(r, e, t, n, a, i) {
  if (r.length) {
    var o = a.resolvers[e];
    if (!o)
      throw new Error("No resolver found for " + e);
    var u = P(t.map(function(d) {
      return r.reduce(function(v, m) {
        return d[m] !== void 0 && (v[m] = d[m]), v;
      }, {});
    }).filter(g), E), s = e === "properties" ? er : tr, p = s.reduce(function(d, v) {
      return h(G, v) ? d[v] = F(n, v, i) : d[v] = function(m) {
        return n(m, null, i.concat(v));
      }, d;
    }, {});
    e === "items" && (p.itemsArray = F(n, "items", i), p.items = function(d) {
      return n(d, null, i.concat("items"));
    });
    var c = o(u, i.concat(e), p, a);
    return I(c) || rr(u, i.concat(e)), Lr(c);
  }
}
function S(r, e, t) {
  var n = j(t || r), a = t ? Cr : K;
  return n.reduce(function(i, o) {
    var u = a(r, o), s = P(u.filter(g), E);
    return i[o] = e(s, o), i;
  }, t ? [] : {});
}
function Wr(r) {
  X(r, function(e, t) {
    e === !1 && delete r[t];
  });
}
function $r(r) {
  X(r, function(e, t) {
    e === !1 && r.splice(t, 1);
  });
}
function jr(r) {
  return { required: r };
}
var er = ["properties", "patternProperties", "additionalProperties"], tr = ["items", "additionalItems"], G = ["properties", "patternProperties", "definitions", "dependencies"], z = ["anyOf", "oneOf"], Kr = [
  "additionalProperties",
  "additionalItems",
  "contains",
  "propertyNames",
  "not",
  "items"
], f = {
  type(r) {
    if (r.some(Array.isArray)) {
      var e = r.map(function(n) {
        return Array.isArray(n) ? n : [n];
      }), t = Or.apply(null, e);
      if (t.length === 1)
        return t[0];
      if (t.length > 1)
        return $(t);
    }
  },
  properties(r, e, t, n) {
    n.ignoreAdditionalProperties || (r.forEach(function(i) {
      var o = r.filter((c) => c !== i), u = A(i.properties), s = A(i.patternProperties), p = s.map((c) => new RegExp(c));
      o.forEach(function(c) {
        var d = A(c.properties), v = d.filter((l) => p.some((R) => R.test(l))), m = U(d, u, v);
        m.forEach(function(l) {
          c.properties[l] = t.properties([
            c.properties[l],
            i.additionalProperties
          ], l);
        });
      });
    }), r.forEach(function(i) {
      var o = r.filter((s) => s !== i), u = A(i.patternProperties);
      i.additionalProperties === !1 && o.forEach(function(s) {
        var p = A(s.patternProperties), c = U(p, u);
        c.forEach((d) => delete s.patternProperties[d]);
      });
    }));
    var a = {
      additionalProperties: t.additionalProperties(r.map((i) => i.additionalProperties)),
      patternProperties: S(r.map((i) => i.patternProperties), t.patternProperties),
      properties: S(r.map((i) => i.properties), t.properties)
    };
    return a.additionalProperties === !1 && Wr(a.properties), a;
  },
  dependencies(r, e, t) {
    var n = j(r);
    return n.reduce(function(a, i) {
      var o = K(r, i), u = P(o.filter(g), D), s = u.filter(Array.isArray);
      if (s.length) {
        if (s.length === u.length)
          a[i] = b(u);
        else {
          var p = u.filter(C), c = s.map(jr);
          a[i] = t(p.concat(c), i);
        }
        return a;
      }
      return u = P(u, E), a[i] = t(u, i), a;
    }, {});
  },
  items(r, e, t) {
    var n = r.map((u) => u.items), a = n.filter(g), i = {};
    a.every(C) ? i.items = t.items(n) : i.items = S(r, t.itemsArray, n);
    var o;
    return a.every(Array.isArray) ? o = r.map((u) => u.additionalItems) : a.some(Array.isArray) && (o = Fr(r)), o && (i.additionalItems = t.additionalItems(o)), i.additionalItems === !1 && Array.isArray(i.items) && $r(i.items), i;
  },
  oneOf(r, e, t) {
    var n = V(H(r)), a = Vr(n, t), i = P(a, E);
    if (i.length)
      return i;
  },
  not(r) {
    return { anyOf: r };
  },
  pattern(r, e, t, n, a) {
    var i = e.pop();
    a(r.map(function(o) {
      return { [i]: o };
    }));
  },
  multipleOf(r) {
    for (var e = r.slice(0), t = 1; e.some((n) => !Number.isInteger(n)); )
      e = e.map((n) => n * 10), t = t * 10;
    return Pr(e) / t;
  },
  enum(r) {
    var e = wr.apply(null, r.concat(D));
    if (e.length)
      return Q(e);
  }
};
f.$id = w;
f.$ref = w;
f.$schema = w;
f.additionalItems = _;
f.additionalProperties = _;
f.anyOf = f.oneOf;
f.contains = _;
f.default = w;
f.definitions = f.dependencies;
f.description = w;
f.examples = Sr;
f.exclusiveMaximum = x;
f.exclusiveMinimum = q;
f.maximum = x;
f.maxItems = x;
f.maxLength = x;
f.maxProperties = x;
f.minimum = q;
f.minItems = q;
f.minLength = q;
f.minProperties = q;
f.propertyNames = _;
f.required = Rr;
f.title = w;
f.uniqueItems = Mr;
function T(r, e, t) {
  e = gr(e, {
    ignoreAdditionalProperties: !1,
    resolvers: f
  });
  function n(o, u, s) {
    o = H(o.filter(g)), s = s || [];
    var p = I(u) ? u : {};
    if (!o.length)
      return;
    if (o.some(_r))
      return !1;
    if (o.every(Z))
      return !0;
    o = o.filter(I);
    var c = j(o);
    if (h(c, "allOf"))
      return T({
        allOf: o
      }, e);
    var d = c.filter(Ir);
    N(c, d);
    var v = c.filter(qr);
    N(c, v), c.forEach(function(l) {
      var R = K(o, l), O = P(R.filter(g), Dr(l));
      if (O.length === 1 && h(z, l))
        p[l] = O[0].map(function(y) {
          return n([y], y);
        });
      else if (O.length === 1 && !h(G, l) && !h(Kr, l))
        p[l] = O[0];
      else {
        var B = e.resolvers[l] || e.resolvers.defaultResolver;
        if (!B)
          throw new Error("No resolver found for key " + l + ". You can provide a resolver for this keyword in the options, or provide a default resolver.");
        var M;
        h(G, l) || h(z, l) ? M = F(n, l, s) : M = function(y) {
          return n(y, null, s.concat(l));
        };
        var J = !1;
        p[l] = B(O, s.concat(l), M, e, function(y) {
          return J = Array.isArray(y), m(y);
        }), p[l] === void 0 && !J ? rr(O, s.concat(l)) : p[l] === void 0 && delete p[l];
      }
    }), Object.assign(p, Y(d, "properties", o, n, e, s)), Object.assign(p, Y(v, "items", o, n, e, s));
    function m(l) {
      p.allOf = Gr(p.allOf, l);
    }
    return p;
  }
  var a = W(k(r)), i = n(a, r);
  return i;
}
T.options = {
  resolvers: f
};
var Nr = T;
export {
  Nr as s
};
//# sourceMappingURL=json-schema-merge-allof.84d57478.js.map
