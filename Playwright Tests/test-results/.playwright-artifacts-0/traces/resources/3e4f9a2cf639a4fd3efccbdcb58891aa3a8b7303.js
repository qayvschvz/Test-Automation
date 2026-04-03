import { _ as Y, a as p, b as B, c as J, d as $, e as z } from "./tslib.0d11ab8c.js";
import { w as We, d as Dr } from "./optimism.9b69a115.js";
import { T as Te, e as F, S as si } from "./@wry.a2a6dbbf.js";
import { v as X, B as Fr, p as ui, K as A, i as zt } from "./graphql.add7d3ad.js";
import { O as q } from "./zen-observable-ts.28c60892.js";
import { i as ye, I as ci } from "./ts-invariant.1244200c.js";
import "./symbol-observable.fd2d5738.js";
var Rt = "3.8.4";
function V(i) {
  try {
    return i();
  } catch {
  }
}
const Bt = V(function() {
  return globalThis;
}) || V(function() {
  return window;
}) || V(function() {
  return self;
}) || V(function() {
  return global;
}) || V(function() {
  return V.constructor("return this")();
});
var Ut = /* @__PURE__ */ new Map();
function ct(i) {
  var e = Ut.get(i) || 1;
  return Ut.set(i, e + 1), "".concat(i, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
}
function Pr(i, e) {
  e === void 0 && (e = 0);
  var t = ct("stringifyForDisplay");
  return JSON.stringify(i, function(r, n) {
    return n === void 0 ? t : n;
  }, e).split(JSON.stringify(t)).join("<undefined>");
}
function Ie(i) {
  return function(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
    typeof e == "number" ? i(_t(e, t)) : i.apply(void 0, Y([e], t, !1));
  };
}
var E = Object.assign(function(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  e || ye(e, _t(t, r));
}, {
  debug: Ie(ye.debug),
  log: Ie(ye.log),
  warn: Ie(ye.warn),
  error: Ie(ye.error)
});
function L(i) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  return new ci(_t(i, e));
}
var Ht = Symbol.for("ApolloErrorMessageHandler_" + Rt);
function _t(i, e) {
  if (e === void 0 && (e = []), !!i) {
    var t = e.map(function(r) {
      return typeof r == "string" ? r : Pr(r, 2).slice(0, 1e3);
    });
    return Bt[Ht] && Bt[Ht](i, t) || "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: Rt,
      message: i,
      args: t
    })));
  }
}
function Qe(i, e) {
  var t = i.directives;
  return !t || !t.length ? !0 : hi(t).every(function(r) {
    var n = r.directive, a = r.ifArgument, o = !1;
    return a.value.kind === "Variable" ? (o = e && e[a.value.name.value], E(o !== void 0, 64, n.name.value)) : o = a.value.value, n.name.value === "skip" ? !o : o;
  });
}
function _e(i, e, t) {
  var r = new Set(i), n = r.size;
  return X(e, {
    Directive: function(a) {
      if (r.delete(a.name.value) && (!t || !r.size))
        return Fr;
    }
  }), t ? !r.size : r.size < n;
}
function fi(i) {
  return i && _e(["client", "export"], i, !0);
}
function li(i) {
  var e = i.name.value;
  return e === "skip" || e === "include";
}
function hi(i) {
  var e = [];
  return i && i.length && i.forEach(function(t) {
    if (!!li(t)) {
      var r = t.arguments, n = t.name.value;
      E(r && r.length === 1, 65, n);
      var a = r[0];
      E(a.name && a.name.value === "if", 66, n);
      var o = a.value;
      E(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 67, n), e.push({ directive: t, ifArgument: a });
    }
  }), e;
}
var U = typeof WeakMap == "function" && V(function() {
  return navigator.product;
}) !== "ReactNative", Tr = typeof WeakSet == "function", Dt = typeof Symbol == "function" && typeof Symbol.for == "function", Be = Dt && Symbol.asyncIterator, vi = typeof V(function() {
  return window.document.createElement;
}) == "function", pi = V(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
}) || !1, di = vi && !pi;
function Q(i) {
  return i !== null && typeof i == "object";
}
function yi(i, e) {
  var t = e, r = [];
  i.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw L(
        68,
        a.operation,
        a.name ? " named '".concat(a.name.value, "'") : ""
      );
    a.kind === "FragmentDefinition" && r.push(a);
  }), typeof t > "u" && (E(r.length === 1, 69, r.length), t = r[0].name.value);
  var n = p(p({}, i), { definitions: Y([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: t
            }
          }
        ]
      }
    }
  ], i.definitions, !0) });
  return n;
}
function Ue(i) {
  i === void 0 && (i = []);
  var e = {};
  return i.forEach(function(t) {
    e[t.name.value] = t;
  }), e;
}
function He(i, e) {
  switch (i.kind) {
    case "InlineFragment":
      return i;
    case "FragmentSpread": {
      var t = i.name.value;
      if (typeof e == "function")
        return e(t);
      var r = e && e[t];
      return E(r, 70, t), r || null;
    }
    default:
      return null;
  }
}
function he(i) {
  return { __ref: String(i) };
}
function P(i) {
  return Boolean(i && typeof i == "object" && typeof i.__ref == "string");
}
function mi(i) {
  return Q(i) && i.kind === "Document" && Array.isArray(i.definitions);
}
function gi(i) {
  return i.kind === "StringValue";
}
function bi(i) {
  return i.kind === "BooleanValue";
}
function Oi(i) {
  return i.kind === "IntValue";
}
function wi(i) {
  return i.kind === "FloatValue";
}
function Si(i) {
  return i.kind === "Variable";
}
function Ei(i) {
  return i.kind === "ObjectValue";
}
function ki(i) {
  return i.kind === "ListValue";
}
function Ri(i) {
  return i.kind === "EnumValue";
}
function _i(i) {
  return i.kind === "NullValue";
}
function de(i, e, t, r) {
  if (Oi(t) || wi(t))
    i[e.value] = Number(t.value);
  else if (bi(t) || gi(t))
    i[e.value] = t.value;
  else if (Ei(t)) {
    var n = {};
    t.fields.map(function(o) {
      return de(n, o.name, o.value, r);
    }), i[e.value] = n;
  } else if (Si(t)) {
    var a = (r || {})[t.name.value];
    i[e.value] = a;
  } else if (ki(t))
    i[e.value] = t.values.map(function(o) {
      var s = {};
      return de(s, e, o, r), s[e.value];
    });
  else if (Ri(t))
    i[e.value] = t.value;
  else if (_i(t))
    i[e.value] = null;
  else
    throw L(79, e.value, t.kind);
}
function Di(i, e) {
  var t = null;
  i.directives && (t = {}, i.directives.forEach(function(n) {
    t[n.name.value] = {}, n.arguments && n.arguments.forEach(function(a) {
      var o = a.name, s = a.value;
      return de(t[n.name.value], o, s, e);
    });
  }));
  var r = null;
  return i.arguments && i.arguments.length && (r = {}, i.arguments.forEach(function(n) {
    var a = n.name, o = n.value;
    return de(r, a, o, e);
  })), Ft(i.name.value, r, t);
}
var Fi = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], Ft = Object.assign(function(i, e, t) {
  if (e && t && t.connection && t.connection.key)
    if (t.connection.filter && t.connection.filter.length > 0) {
      var r = t.connection.filter ? t.connection.filter : [];
      r.sort();
      var n = {};
      return r.forEach(function(s) {
        n[s] = e[s];
      }), "".concat(t.connection.key, "(").concat(me(n), ")");
    } else
      return t.connection.key;
  var a = i;
  if (e) {
    var o = me(e);
    a += "(".concat(o, ")");
  }
  return t && Object.keys(t).forEach(function(s) {
    Fi.indexOf(s) === -1 && (t[s] && Object.keys(t[s]).length ? a += "@".concat(s, "(").concat(me(t[s]), ")") : a += "@".concat(s));
  }), a;
}, {
  setStringify: function(i) {
    var e = me;
    return me = i, e;
  }
}), me = function(e) {
  return JSON.stringify(e, Pi);
};
function Pi(i, e) {
  return Q(e) && !Array.isArray(e) && (e = Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t;
  }, {})), e;
}
function Ke(i, e) {
  if (i.arguments && i.arguments.length) {
    var t = {};
    return i.arguments.forEach(function(r) {
      var n = r.name, a = r.value;
      return de(t, n, a, e);
    }), t;
  }
  return null;
}
function Z(i) {
  return i.alias ? i.alias.value : i.name.value;
}
function ft(i, e, t) {
  for (var r, n = 0, a = e.selections; n < a.length; n++) {
    var o = a[n];
    if (ee(o)) {
      if (o.name.value === "__typename")
        return i[Z(o)];
    } else
      r ? r.push(o) : r = [o];
  }
  if (typeof i.__typename == "string")
    return i.__typename;
  if (r)
    for (var s = 0, u = r; s < u.length; s++) {
      var o = u[s], c = ft(i, He(o, t).selectionSet, t);
      if (typeof c == "string")
        return c;
    }
}
function ee(i) {
  return i.kind === "Field";
}
function Ti(i) {
  return i.kind === "InlineFragment";
}
function qe(i) {
  E(i && i.kind === "Document", 71);
  var e = i.definitions.filter(function(t) {
    return t.kind !== "FragmentDefinition";
  }).map(function(t) {
    if (t.kind !== "OperationDefinition")
      throw L(72, t.kind);
    return t;
  });
  return E(e.length <= 1, 73, e.length), i;
}
function Me(i) {
  return qe(i), i.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function lt(i) {
  return i.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function Ge(i) {
  return i.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function Qr(i) {
  var e = Me(i);
  return E(e && e.operation === "query", 74), e;
}
function Qi(i) {
  E(i.kind === "Document", 75), E(i.definitions.length <= 1, 76);
  var e = i.definitions[0];
  return E(e.kind === "FragmentDefinition", 77), e;
}
function Ce(i) {
  qe(i);
  for (var e, t = 0, r = i.definitions; t < r.length; t++) {
    var n = r[t];
    if (n.kind === "OperationDefinition") {
      var a = n.operation;
      if (a === "query" || a === "mutation" || a === "subscription")
        return n;
    }
    n.kind === "FragmentDefinition" && !e && (e = n);
  }
  if (e)
    return e;
  throw L(78);
}
function Pt(i) {
  var e = /* @__PURE__ */ Object.create(null), t = i && i.variableDefinitions;
  return t && t.length && t.forEach(function(r) {
    r.defaultValue && de(e, r.variable.name, r.defaultValue);
  }), e;
}
function qi(i) {
  return i;
}
var qr = function() {
  function i(e, t) {
    t === void 0 && (t = /* @__PURE__ */ Object.create(null)), this.resultCache = Tr ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), t.cache !== !1 && (this.stableCacheKeys = new Te(U, function(r) {
      return { key: r };
    }));
  }
  return i.prototype.getCacheKey = function(e) {
    return [e];
  }, i.identity = function() {
    return new i(qi, { cache: !1 });
  }, i.split = function(e, t, r) {
    return r === void 0 && (r = i.identity()), new i(function(n) {
      var a = e(n) ? t : r;
      return a.transformDocument(n);
    }, { cache: !1 });
  }, i.prototype.transformDocument = function(e) {
    if (this.resultCache.has(e))
      return e;
    var t = this.getStableCacheEntry(e);
    if (t && t.value)
      return t.value;
    qe(e);
    var r = this.transform(e);
    return this.resultCache.add(r), t && (t.value = r), r;
  }, i.prototype.concat = function(e) {
    var t = this;
    return new i(function(r) {
      return e.transformDocument(t.transformDocument(r));
    }, { cache: !1 });
  }, i.prototype.getStableCacheEntry = function(e) {
    if (!!this.stableCacheKeys) {
      var t = this.getCacheKey(e);
      if (t)
        return E(Array.isArray(t), 63), this.stableCacheKeys.lookupArray(t);
    }
  }, i;
}(), ue = U ? /* @__PURE__ */ new WeakMap() : void 0, Mr = function(i) {
  var e;
  return e = ue == null ? void 0 : ue.get(i), e || (e = ui(i), ue == null || ue.set(i, e)), e;
}, M = Array.isArray;
function N(i) {
  return Array.isArray(i) && i.length > 0;
}
var Kt = {
  kind: A.FIELD,
  name: {
    kind: A.NAME,
    value: "__typename"
  }
};
function Cr(i, e) {
  return !i || i.selectionSet.selections.every(function(t) {
    return t.kind === A.FRAGMENT_SPREAD && Cr(e[t.name.value], e);
  });
}
function Mi(i) {
  return Cr(Me(i) || Qi(i), Ue(Ge(i))) ? null : i;
}
function Ci(i) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return i.forEach(function(r) {
    r && (r.name ? e.set(r.name, r) : r.test && t.set(r.test, r));
  }), function(r) {
    var n = e.get(r.name.value);
    return !n && t.size && t.forEach(function(a, o) {
      o(r) && (n = a);
    }), n;
  };
}
function Gt(i) {
  var e = /* @__PURE__ */ new Map();
  return function(r) {
    r === void 0 && (r = i);
    var n = e.get(r);
    return n || e.set(r, n = {
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), n;
  };
}
function Ir(i, e) {
  qe(e);
  for (var t = Gt(""), r = Gt(""), n = function(d) {
    for (var O = 0, b = void 0; O < d.length && (b = d[O]); ++O)
      if (!M(b)) {
        if (b.kind === A.OPERATION_DEFINITION)
          return t(b.name && b.name.value);
        if (b.kind === A.FRAGMENT_DEFINITION)
          return r(b.name.value);
      }
    return globalThis.__DEV__ !== !1 && E.error(80), null;
  }, a = 0, o = e.definitions.length - 1; o >= 0; --o)
    e.definitions[o].kind === A.OPERATION_DEFINITION && ++a;
  var s = Ci(i), u = function(d) {
    return N(d) && d.map(s).some(function(O) {
      return O && O.remove;
    });
  }, c = /* @__PURE__ */ new Map(), f = !1, h = {
    enter: function(d) {
      if (u(d.directives))
        return f = !0, null;
    }
  }, l = X(e, {
    Field: h,
    InlineFragment: h,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(d, O, b, S, k) {
        var w = n(k);
        w && w.variables.add(d.name.value);
      }
    },
    FragmentSpread: {
      enter: function(d, O, b, S, k) {
        if (u(d.directives))
          return f = !0, null;
        var w = n(k);
        w && w.fragmentSpreads.add(d.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(d, O, b, S) {
        c.set(JSON.stringify(S), d);
      },
      leave: function(d, O, b, S) {
        var k = c.get(JSON.stringify(S));
        if (d === k)
          return d;
        if (a > 0 && d.selectionSet.selections.every(function(w) {
          return w.kind === A.FIELD && w.name.value === "__typename";
        }))
          return r(d.name.value).removed = !0, f = !0, null;
      }
    },
    Directive: {
      leave: function(d) {
        if (s(d))
          return f = !0, null;
      }
    }
  });
  if (!f)
    return e;
  var v = function(d) {
    return d.transitiveVars || (d.transitiveVars = new Set(d.variables), d.removed || d.fragmentSpreads.forEach(function(O) {
      v(r(O)).transitiveVars.forEach(function(b) {
        d.transitiveVars.add(b);
      });
    })), d;
  }, y = /* @__PURE__ */ new Set();
  l.definitions.forEach(function(d) {
    d.kind === A.OPERATION_DEFINITION ? v(t(d.name && d.name.value)).fragmentSpreads.forEach(function(O) {
      y.add(O);
    }) : d.kind === A.FRAGMENT_DEFINITION && a === 0 && !r(d.name.value).removed && y.add(d.name.value);
  }), y.forEach(function(d) {
    v(r(d)).fragmentSpreads.forEach(function(O) {
      y.add(O);
    });
  });
  var g = function(d) {
    return !!(!y.has(d) || r(d).removed);
  }, m = {
    enter: function(d) {
      if (g(d.name.value))
        return null;
    }
  };
  return Mi(X(l, {
    FragmentSpread: m,
    FragmentDefinition: m,
    OperationDefinition: {
      leave: function(d) {
        if (d.variableDefinitions) {
          var O = v(t(d.name && d.name.value)).transitiveVars;
          if (O.size < d.variableDefinitions.length)
            return p(p({}, d), { variableDefinitions: d.variableDefinitions.filter(function(b) {
              return O.has(b.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Tt = Object.assign(function(i) {
  return X(i, {
    SelectionSet: {
      enter: function(e, t, r) {
        if (!(r && r.kind === A.OPERATION_DEFINITION)) {
          var n = e.selections;
          if (!!n) {
            var a = n.some(function(s) {
              return ee(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!a) {
              var o = r;
              if (!(ee(o) && o.directives && o.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return p(p({}, e), { selections: Y(Y([], n, !0), [Kt], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(i) {
    return i === Kt;
  }
});
function Ii(i) {
  var e = Ce(i), t = e.operation;
  if (t === "query")
    return i;
  var r = X(i, {
    OperationDefinition: {
      enter: function(n) {
        return p(p({}, n), { operation: "query" });
      }
    }
  });
  return r;
}
function xr(i) {
  qe(i);
  var e = Ir([
    {
      test: function(t) {
        return t.name.value === "client";
      },
      remove: !0
    }
  ], i);
  return e;
}
var xi = Object.prototype.hasOwnProperty;
function Jt() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i[e] = arguments[e];
  return Qt(i);
}
function Qt(i) {
  var e = i[0] || {}, t = i.length;
  if (t > 1)
    for (var r = new te(), n = 1; n < t; ++n)
      e = r.merge(e, i[n]);
  return e;
}
var Li = function(i, e, t) {
  return this.merge(i[t], e[t]);
}, te = function() {
  function i(e) {
    e === void 0 && (e = Li), this.reconciler = e, this.isObject = Q, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return i.prototype.merge = function(e, t) {
    for (var r = this, n = [], a = 2; a < arguments.length; a++)
      n[a - 2] = arguments[a];
    return Q(t) && Q(e) ? (Object.keys(t).forEach(function(o) {
      if (xi.call(e, o)) {
        var s = e[o];
        if (t[o] !== s) {
          var u = r.reconciler.apply(r, Y([
            e,
            t,
            o
          ], n, !1));
          u !== s && (e = r.shallowCopyForMerge(e), e[o] = u);
        }
      } else
        e = r.shallowCopyForMerge(e), e[o] = t[o];
    }), e) : t;
  }, i.prototype.shallowCopyForMerge = function(e) {
    return Q(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = p({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
  }, i;
}(), $t = q.prototype, Yt = "@@observable";
$t[Yt] || ($t[Yt] = function() {
  return this;
});
var ji = Object.prototype.toString;
function Lr(i) {
  return ht(i);
}
function ht(i, e) {
  switch (ji.call(i)) {
    case "[object Array]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(i))
        return e.get(i);
      var t = i.slice(0);
      return e.set(i, t), t.forEach(function(n, a) {
        t[a] = ht(n, e);
      }), t;
    }
    case "[object Object]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(i))
        return e.get(i);
      var r = Object.create(Object.getPrototypeOf(i));
      return e.set(i, r), Object.keys(i).forEach(function(n) {
        r[n] = ht(i[n], e);
      }), r;
    }
    default:
      return i;
  }
}
function Ai(i) {
  var e = /* @__PURE__ */ new Set([i]);
  return e.forEach(function(t) {
    Q(t) && Ni(t) === t && Object.getOwnPropertyNames(t).forEach(function(r) {
      Q(t[r]) && e.add(t[r]);
    });
  }), i;
}
function Ni(i) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(i))
    try {
      Object.freeze(i);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  return i;
}
function De(i) {
  return globalThis.__DEV__ !== !1 && Ai(i), i;
}
function Se(i, e, t) {
  var r = [];
  i.forEach(function(n) {
    return n[e] && r.push(n);
  }), r.forEach(function(n) {
    return n[e](t);
  });
}
function Ze(i, e, t) {
  return new q(function(r) {
    var n = r.next, a = r.error, o = r.complete, s = 0, u = !1, c = {
      then: function(v) {
        return new Promise(function(y) {
          return y(v());
        });
      }
    };
    function f(v, y) {
      return v ? function(g) {
        ++s;
        var m = function() {
          return v(g);
        };
        c = c.then(m, m).then(function(d) {
          --s, n && n.call(r, d), u && h.complete();
        }, function(d) {
          throw --s, d;
        }).catch(function(d) {
          a && a.call(r, d);
        });
      } : function(g) {
        return y && y.call(r, g);
      };
    }
    var h = {
      next: f(e, n),
      error: f(t, a),
      complete: function() {
        u = !0, s || o && o.call(r);
      }
    }, l = i.subscribe(h);
    return function() {
      return l.unsubscribe();
    };
  });
}
function jr(i) {
  function e(t) {
    Object.defineProperty(i, t, { value: q });
  }
  return Dt && Symbol.species && e(Symbol.species), e("@@species"), i;
}
function Xt(i) {
  return i && typeof i.then == "function";
}
var ce = function(i) {
  B(e, i);
  function e(t) {
    var r = i.call(this, function(n) {
      return r.addObserver(n), function() {
        return r.removeObserver(n);
      };
    }) || this;
    return r.observers = /* @__PURE__ */ new Set(), r.promise = new Promise(function(n, a) {
      r.resolve = n, r.reject = a;
    }), r.handlers = {
      next: function(n) {
        r.sub !== null && (r.latest = ["next", n], r.notify("next", n), Se(r.observers, "next", n));
      },
      error: function(n) {
        var a = r.sub;
        a !== null && (a && setTimeout(function() {
          return a.unsubscribe();
        }), r.sub = null, r.latest = ["error", n], r.reject(n), r.notify("error", n), Se(r.observers, "error", n));
      },
      complete: function() {
        var n = r, a = n.sub, o = n.sources, s = o === void 0 ? [] : o;
        if (a !== null) {
          var u = s.shift();
          u ? Xt(u) ? u.then(function(c) {
            return r.sub = c.subscribe(r.handlers);
          }) : r.sub = u.subscribe(r.handlers) : (a && setTimeout(function() {
            return a.unsubscribe();
          }), r.sub = null, r.latest && r.latest[0] === "next" ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), Se(r.observers, "complete"));
        }
      }
    }, r.nextResultListeners = /* @__PURE__ */ new Set(), r.cancel = function(n) {
      r.reject(n), r.sources = [], r.handlers.complete();
    }, r.promise.catch(function(n) {
    }), typeof t == "function" && (t = [new q(t)]), Xt(t) ? t.then(function(n) {
      return r.start(n);
    }, r.handlers.error) : r.start(t), r;
  }
  return e.prototype.start = function(t) {
    this.sub === void 0 && (this.sources = Array.from(t), this.handlers.complete());
  }, e.prototype.deliverLastMessage = function(t) {
    if (this.latest) {
      var r = this.latest[0], n = t[r];
      n && n.call(t, this.latest[1]), this.sub === null && r === "next" && t.complete && t.complete();
    }
  }, e.prototype.addObserver = function(t) {
    this.observers.has(t) || (this.deliverLastMessage(t), this.observers.add(t));
  }, e.prototype.removeObserver = function(t) {
    this.observers.delete(t) && this.observers.size < 1 && this.handlers.complete();
  }, e.prototype.notify = function(t, r) {
    var n = this.nextResultListeners;
    n.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), n.forEach(function(a) {
      return a(t, r);
    }));
  }, e.prototype.beforeNext = function(t) {
    var r = !1;
    this.nextResultListeners.add(function(n, a) {
      r || (r = !0, t(n, a));
    });
  }, e;
}(q);
jr(ce);
function ve(i) {
  return "incremental" in i;
}
function Vi(i) {
  return "hasNext" in i && "data" in i;
}
function Wi(i) {
  return ve(i) || Vi(i);
}
function zi(i) {
  return Q(i) && "payload" in i;
}
function Ar(i, e) {
  var t = i, r = new te();
  return ve(e) && N(e.incremental) && e.incremental.forEach(function(n) {
    for (var a = n.data, o = n.path, s = o.length - 1; s >= 0; --s) {
      var u = o[s], c = !isNaN(+u), f = c ? [] : {};
      f[u] = a, a = f;
    }
    t = r.merge(t, a);
  }), t;
}
function je(i) {
  var e = vt(i);
  return N(e);
}
function vt(i) {
  var e = N(i.errors) ? i.errors.slice(0) : [];
  return ve(i) && N(i.incremental) && i.incremental.forEach(function(t) {
    t.errors && e.push.apply(e, t.errors);
  }), e;
}
function oe() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i[e] = arguments[e];
  var t = /* @__PURE__ */ Object.create(null);
  return i.forEach(function(r) {
    !r || Object.keys(r).forEach(function(n) {
      var a = r[n];
      a !== void 0 && (t[n] = a);
    });
  }), t;
}
function ne(i, e) {
  return oe(i, e, e.variables && {
    variables: oe(p(p({}, i && i.variables), e.variables))
  });
}
function et(i) {
  return new q(function(e) {
    e.error(i);
  });
}
var pt = function(i, e, t) {
  var r = new Error(t);
  throw r.name = "ServerError", r.response = i, r.statusCode = i.status, r.result = e, r;
};
function Bi(i) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], t = 0, r = Object.keys(i); t < r.length; t++) {
    var n = r[t];
    if (e.indexOf(n) < 0)
      throw L(41, n);
  }
  return i;
}
function Ui(i, e) {
  var t = p({}, i), r = function(a) {
    typeof a == "function" ? t = p(p({}, t), a(t)) : t = p(p({}, t), a);
  }, n = function() {
    return p({}, t);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: r
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: n
  }), e;
}
function Hi(i) {
  var e = {
    variables: i.variables || {},
    extensions: i.extensions || {},
    operationName: i.operationName,
    query: i.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? lt(e.query) || void 0 : ""), e;
}
function Ki(i, e) {
  var t = p({}, i), r = new Set(Object.keys(i));
  return X(e, {
    Variable: function(n, a, o) {
      o && o.kind !== "VariableDefinition" && r.delete(n.name.value);
    }
  }), r.forEach(function(n) {
    delete t[n];
  }), t;
}
function Zt(i, e) {
  return e ? e(i) : q.of();
}
function ge(i) {
  return typeof i == "function" ? new ie(i) : i;
}
function xe(i) {
  return i.request.length <= 1;
}
var ie = function() {
  function i(e) {
    e && (this.request = e);
  }
  return i.empty = function() {
    return new i(function() {
      return q.of();
    });
  }, i.from = function(e) {
    return e.length === 0 ? i.empty() : e.map(ge).reduce(function(t, r) {
      return t.concat(r);
    });
  }, i.split = function(e, t, r) {
    var n = ge(t), a = ge(r || new i(Zt));
    return xe(n) && xe(a) ? new i(function(o) {
      return e(o) ? n.request(o) || q.of() : a.request(o) || q.of();
    }) : new i(function(o, s) {
      return e(o) ? n.request(o, s) || q.of() : a.request(o, s) || q.of();
    });
  }, i.execute = function(e, t) {
    return e.request(Ui(t.context, Hi(Bi(t)))) || q.of();
  }, i.concat = function(e, t) {
    var r = ge(e);
    if (xe(r))
      return globalThis.__DEV__ !== !1 && E.warn(33, r), r;
    var n = ge(t);
    return xe(n) ? new i(function(a) {
      return r.request(a, function(o) {
        return n.request(o) || q.of();
      }) || q.of();
    }) : new i(function(a, o) {
      return r.request(a, function(s) {
        return n.request(s, o) || q.of();
      }) || q.of();
    });
  }, i.prototype.split = function(e, t, r) {
    return this.concat(i.split(e, t, r || new i(Zt)));
  }, i.prototype.concat = function(e) {
    return i.concat(this, e);
  }, i.prototype.request = function(e, t) {
    throw L(34);
  }, i.prototype.onError = function(e, t) {
    if (t && t.error)
      return t.error(e), !1;
    throw e;
  }, i.prototype.setOnError = function(e) {
    return this.onError = e, this;
  }, i;
}(), ca = ie.from, dt = ie.execute;
function Gi(i) {
  var e, t = i[Symbol.asyncIterator]();
  return e = {
    next: function() {
      return t.next();
    }
  }, e[Symbol.asyncIterator] = function() {
    return this;
  }, e;
}
function Ji(i) {
  var e = null, t = null, r = !1, n = [], a = [];
  function o(h) {
    if (!t) {
      if (a.length) {
        var l = a.shift();
        if (Array.isArray(l) && l[0])
          return l[0]({ value: h, done: !1 });
      }
      n.push(h);
    }
  }
  function s(h) {
    t = h;
    var l = a.slice();
    l.forEach(function(v) {
      v[1](h);
    }), !e || e();
  }
  function u() {
    r = !0;
    var h = a.slice();
    h.forEach(function(l) {
      l[0]({ value: void 0, done: !0 });
    }), !e || e();
  }
  e = function() {
    e = null, i.removeListener("data", o), i.removeListener("error", s), i.removeListener("end", u), i.removeListener("finish", u), i.removeListener("close", u);
  }, i.on("data", o), i.on("error", s), i.on("end", u), i.on("finish", u), i.on("close", u);
  function c() {
    return new Promise(function(h, l) {
      if (t)
        return l(t);
      if (n.length)
        return h({ value: n.shift(), done: !1 });
      if (r)
        return h({ value: void 0, done: !0 });
      a.push([h, l]);
    });
  }
  var f = {
    next: function() {
      return c();
    }
  };
  return Be && (f[Symbol.asyncIterator] = function() {
    return this;
  }), f;
}
function $i(i) {
  var e = !1, t = {
    next: function() {
      return e ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (e = !0, new Promise(function(r, n) {
        i.then(function(a) {
          r({ value: a, done: !1 });
        }).catch(n);
      }));
    }
  };
  return Be && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function er(i) {
  var e = {
    next: function() {
      return i.read();
    }
  };
  return Be && (e[Symbol.asyncIterator] = function() {
    return this;
  }), e;
}
function Yi(i) {
  return !!i.body;
}
function Xi(i) {
  return !!i.getReader;
}
function Zi(i) {
  return !!(Be && i[Symbol.asyncIterator]);
}
function en(i) {
  return !!i.stream;
}
function tn(i) {
  return !!i.arrayBuffer;
}
function rn(i) {
  return !!i.pipe;
}
function nn(i) {
  var e = i;
  if (Yi(i) && (e = i.body), Zi(e))
    return Gi(e);
  if (Xi(e))
    return er(e.getReader());
  if (en(e))
    return er(e.stream().getReader());
  if (tn(e))
    return $i(e.arrayBuffer());
  if (rn(e))
    return Ji(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var qt = Symbol();
function an(i) {
  return i.extensions ? Array.isArray(i.extensions[qt]) : !1;
}
function on(i) {
  return i.hasOwnProperty("graphQLErrors");
}
var sn = function(i) {
  var e = Y(Y(Y([], i.graphQLErrors, !0), i.clientErrors, !0), i.protocolErrors, !0);
  return i.networkError && e.push(i.networkError), e.map(function(t) {
    return Q(t) && t.message || "Error message not found.";
  }).join(`
`);
}, K = function(i) {
  B(e, i);
  function e(t) {
    var r = t.graphQLErrors, n = t.protocolErrors, a = t.clientErrors, o = t.networkError, s = t.errorMessage, u = t.extraInfo, c = i.call(this, s) || this;
    return c.name = "ApolloError", c.graphQLErrors = r || [], c.protocolErrors = n || [], c.clientErrors = a || [], c.networkError = o || null, c.message = s || sn(c), c.extraInfo = u, c.__proto__ = e.prototype, c;
  }
  return e;
}(Error), tr = Object.prototype.hasOwnProperty;
function un(i, e) {
  var t;
  return J(this, void 0, void 0, function() {
    var r, n, a, o, s, u, c, f, h, l, v, y, g, m, d, O, b, S, k, w, R, _, T;
    return $(this, function(C) {
      switch (C.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          r = new TextDecoder("utf-8"), n = (t = i.headers) === null || t === void 0 ? void 0 : t.get("content-type"), a = "boundary=", o = n != null && n.includes(a) ? n == null ? void 0 : n.substring((n == null ? void 0 : n.indexOf(a)) + a.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = `\r
--`.concat(o), u = "", c = nn(i), f = !0, C.label = 1;
        case 1:
          return f ? [4, c.next()] : [3, 3];
        case 2:
          for (h = C.sent(), l = h.value, v = h.done, y = typeof l == "string" ? l : r.decode(l), g = u.length - s.length + 1, f = !v, u += y, m = u.indexOf(s, g); m > -1; ) {
            if (d = void 0, _ = [
              u.slice(0, m),
              u.slice(m + s.length)
            ], d = _[0], u = _[1], O = d.indexOf(`\r
\r
`), b = cn(d.slice(0, O)), S = b["content-type"], S && S.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (k = d.slice(O), k) {
              if (w = Nr(i, k), Object.keys(w).length > 1 || "data" in w || "incremental" in w || "errors" in w || "payload" in w)
                zi(w) ? (R = {}, "payload" in w && (R = p({}, w.payload)), "errors" in w && (R = p(p({}, R), { extensions: p(p({}, "extensions" in R ? R.extensions : null), (T = {}, T[qt] = w.errors, T)) })), e(R)) : e(w);
              else if (Object.keys(w).length === 1 && "hasNext" in w && !w.hasNext)
                return [2];
            }
            m = u.indexOf(s);
          }
          return [3, 1];
        case 3:
          return [2];
      }
    });
  });
}
function cn(i) {
  var e = {};
  return i.split(`
`).forEach(function(t) {
    var r = t.indexOf(":");
    if (r > -1) {
      var n = t.slice(0, r).trim().toLowerCase(), a = t.slice(r + 1).trim();
      e[n] = a;
    }
  }), e;
}
function Nr(i, e) {
  if (i.status >= 300) {
    var t = function() {
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    };
    pt(i, t(), "Response not successful: Received status code ".concat(i.status));
  }
  try {
    return JSON.parse(e);
  } catch (n) {
    var r = n;
    throw r.name = "ServerParseError", r.response = i, r.statusCode = i.status, r.bodyText = e, r;
  }
}
function fn(i, e) {
  i.result && i.result.errors && i.result.data && e.next(i.result), e.error(i);
}
function ln(i) {
  return function(e) {
    return e.text().then(function(t) {
      return Nr(e, t);
    }).then(function(t) {
      return e.status >= 300 && pt(e, t, "Response not successful: Received status code ".concat(e.status)), !Array.isArray(t) && !tr.call(t, "data") && !tr.call(t, "errors") && pt(e, t, "Server response was missing for query '".concat(Array.isArray(i) ? i.map(function(r) {
        return r.operationName;
      }) : i.operationName, "'.")), t;
    });
  };
}
var yt = function(i, e) {
  var t;
  try {
    t = JSON.stringify(i);
  } catch (n) {
    var r = L(37, e, n.message);
    throw r.parseError = n, r;
  }
  return t;
}, hn = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, vn = {
  accept: "*/*",
  "content-type": "application/json"
}, pn = {
  method: "POST"
}, dn = {
  http: hn,
  headers: vn,
  options: pn
}, yn = function(i, e) {
  return e(i);
};
function mn(i, e) {
  for (var t = [], r = 2; r < arguments.length; r++)
    t[r - 2] = arguments[r];
  var n = {}, a = {};
  t.forEach(function(h) {
    n = p(p(p({}, n), h.options), { headers: p(p({}, n.headers), h.headers) }), h.credentials && (n.credentials = h.credentials), a = p(p({}, a), h.http);
  }), n.headers && (n.headers = gn(n.headers, a.preserveHeaderCase));
  var o = i.operationName, s = i.extensions, u = i.variables, c = i.query, f = { operationName: o, variables: u };
  return a.includeExtensions && (f.extensions = s), a.includeQuery && (f.query = e(c, Mr)), {
    options: n,
    body: f
  };
}
function gn(i, e) {
  if (!e) {
    var t = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(i)).forEach(function(a) {
      t[a.toLowerCase()] = i[a];
    }), t;
  }
  var r = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(i)).forEach(function(a) {
    r[a.toLowerCase()] = {
      originalName: a,
      value: i[a]
    };
  });
  var n = /* @__PURE__ */ Object.create(null);
  return Object.keys(r).forEach(function(a) {
    n[r[a].originalName] = r[a].value;
  }), n;
}
var bn = function(i) {
  if (!i && typeof fetch > "u")
    throw L(35);
}, On = function(i, e) {
  var t = i.getContext(), r = t.uri;
  return r || (typeof e == "function" ? e(i) : e || "/graphql");
};
function wn(i, e) {
  var t = [], r = function(h, l) {
    t.push("".concat(h, "=").concat(encodeURIComponent(l)));
  };
  if ("query" in e && r("query", e.query), e.operationName && r("operationName", e.operationName), e.variables) {
    var n = void 0;
    try {
      n = yt(e.variables, "Variables map");
    } catch (h) {
      return { parseError: h };
    }
    r("variables", n);
  }
  if (e.extensions) {
    var a = void 0;
    try {
      a = yt(e.extensions, "Extensions map");
    } catch (h) {
      return { parseError: h };
    }
    r("extensions", a);
  }
  var o = "", s = i, u = i.indexOf("#");
  u !== -1 && (o = i.substr(u), s = i.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", f = s + c + t.join("&") + o;
  return { newURI: f };
}
var rr = V(function() {
  return fetch;
}), Sn = function(i) {
  i === void 0 && (i = {});
  var e = i.uri, t = e === void 0 ? "/graphql" : e, r = i.fetch, n = i.print, a = n === void 0 ? yn : n, o = i.includeExtensions, s = i.preserveHeaderCase, u = i.useGETForQueries, c = i.includeUnusedVariables, f = c === void 0 ? !1 : c, h = z(i, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && bn(r || rr);
  var l = {
    http: { includeExtensions: o, preserveHeaderCase: s },
    options: h.fetchOptions,
    credentials: h.credentials,
    headers: h.headers
  };
  return new ie(function(v) {
    var y = On(v, t), g = v.getContext(), m = {};
    if (g.clientAwareness) {
      var d = g.clientAwareness, O = d.name, b = d.version;
      O && (m["apollographql-client-name"] = O), b && (m["apollographql-client-version"] = b);
    }
    var S = p(p({}, m), g.headers), k = {
      http: g.http,
      options: g.fetchOptions,
      credentials: g.credentials,
      headers: S
    };
    if (_e(["client"], v.query)) {
      var w = xr(v.query);
      if (!w)
        return et(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      v.query = w;
    }
    var R = mn(v, a, dn, l, k), _ = R.options, T = R.body;
    T.variables && !f && (T.variables = Ki(T.variables, v.query));
    var C;
    !_.signal && typeof AbortController < "u" && (C = new AbortController(), _.signal = C.signal);
    var x = function(j) {
      return j.kind === "OperationDefinition" && j.operation === "mutation";
    }, H = function(j) {
      return j.kind === "OperationDefinition" && j.operation === "subscription";
    }, Je = H(Ce(v.query)), $e = _e(["defer"], v.query);
    if (u && !v.query.definitions.some(x) && (_.method = "GET"), $e || Je) {
      _.headers = _.headers || {};
      var Ye = "multipart/mixed;";
      Je && $e && globalThis.__DEV__ !== !1 && E.warn(36), Je ? Ye += "boundary=graphql;subscriptionSpec=1.0,application/json" : $e && (Ye += "deferSpec=20220824,application/json"), _.headers.accept = Ye;
    }
    if (_.method === "GET") {
      var At = wn(y, T), ai = At.newURI, Nt = At.parseError;
      if (Nt)
        return et(Nt);
      y = ai;
    } else
      try {
        _.body = yt(T, "Payload");
      } catch (j) {
        return et(j);
      }
    return new q(function(j) {
      var oi = r || V(function() {
        return fetch;
      }) || rr, Vt = j.next.bind(j);
      return oi(y, _).then(function(se) {
        var Xe;
        v.setContext({ response: se });
        var Wt = (Xe = se.headers) === null || Xe === void 0 ? void 0 : Xe.get("content-type");
        return Wt !== null && /^multipart\/mixed/i.test(Wt) ? un(se, Vt) : ln(v)(se).then(Vt);
      }).then(function() {
        C = void 0, j.complete();
      }).catch(function(se) {
        C = void 0, fn(se, j);
      }), function() {
        C && C.abort();
      };
    });
  });
}, En = function(i) {
  B(e, i);
  function e(t) {
    t === void 0 && (t = {});
    var r = i.call(this, Sn(t).request) || this;
    return r.options = t, r;
  }
  return e;
}(ie), kn = function() {
  function i() {
    this.assumeImmutableResults = !1, this.getFragmentDoc = We(yi);
  }
  return i.prototype.batch = function(e) {
    var t = this, r = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, n;
    return this.performTransaction(function() {
      return n = e.update(t);
    }, r), n;
  }, i.prototype.recordOptimisticTransaction = function(e, t) {
    this.performTransaction(e, t);
  }, i.prototype.transformDocument = function(e) {
    return e;
  }, i.prototype.transformForLink = function(e) {
    return e;
  }, i.prototype.identify = function(e) {
  }, i.prototype.gc = function() {
    return [];
  }, i.prototype.modify = function(e) {
    return !1;
  }, i.prototype.readQuery = function(e, t) {
    return t === void 0 && (t = !!e.optimistic), this.read(p(p({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t }));
  }, i.prototype.readFragment = function(e, t) {
    return t === void 0 && (t = !!e.optimistic), this.read(p(p({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: t }));
  }, i.prototype.writeQuery = function(e) {
    var t = e.id, r = e.data, n = z(e, ["id", "data"]);
    return this.write(Object.assign(n, {
      dataId: t || "ROOT_QUERY",
      result: r
    }));
  }, i.prototype.writeFragment = function(e) {
    var t = e.id, r = e.data, n = e.fragment, a = e.fragmentName, o = z(e, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(o, {
      query: this.getFragmentDoc(n, a),
      dataId: t,
      result: r
    }));
  }, i.prototype.updateQuery = function(e, t) {
    return this.batch({
      update: function(r) {
        var n = r.readQuery(e), a = t(n);
        return a == null ? n : (r.writeQuery(p(p({}, e), { data: a })), a);
      }
    });
  }, i.prototype.updateFragment = function(e, t) {
    return this.batch({
      update: function(r) {
        var n = r.readFragment(e), a = t(n);
        return a == null ? n : (r.writeFragment(p(p({}, e), { data: a })), a);
      }
    });
  }, i;
}(), Vr = function(i) {
  B(e, i);
  function e(t, r, n, a) {
    var o, s = i.call(this, t) || this;
    if (s.message = t, s.path = r, s.query = n, s.variables = a, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var u = s.path.length - 1; u >= 0; --u)
        s.missing = (o = {}, o[s.path[u]] = s.missing, o);
    } else
      s.missing = s.path;
    return s.__proto__ = e.prototype, s;
  }
  return e;
}(Error), I = Object.prototype.hasOwnProperty;
function be(i) {
  return i == null;
}
function Wr(i, e) {
  var t = i.__typename, r = i.id, n = i._id;
  if (typeof t == "string" && (e && (e.keyObject = be(r) ? be(n) ? void 0 : { _id: n } : { id: r }), be(r) && !be(n) && (r = n), !be(r)))
    return "".concat(t, ":").concat(typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r));
}
var zr = {
  dataIdFromObject: Wr,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function Rn(i) {
  return oe(zr, i);
}
function Br(i) {
  var e = i.canonizeResults;
  return e === void 0 ? zr.canonizeResults : e;
}
function _n(i, e) {
  return P(e) ? i.get(e.__ref, "__typename") : e && e.__typename;
}
var Ur = /^[_a-z][_0-9a-z]*/i;
function re(i) {
  var e = i.match(Ur);
  return e ? e[0] : i;
}
function mt(i, e, t) {
  return Q(e) ? M(e) ? e.every(function(r) {
    return mt(i, r, t);
  }) : i.selections.every(function(r) {
    if (ee(r) && Qe(r, t)) {
      var n = Z(r);
      return I.call(e, n) && (!r.selectionSet || mt(r.selectionSet, e[n], t));
    }
    return !0;
  }) : !1;
}
function fe(i) {
  return Q(i) && !P(i) && !M(i);
}
function Dn() {
  return new te();
}
function Hr(i, e) {
  var t = Ue(Ge(i));
  return {
    fragmentMap: t,
    lookupFragment: function(r) {
      var n = t[r];
      return !n && e && (n = e.lookup(r)), n || null;
    }
  };
}
var Ae = /* @__PURE__ */ Object.create(null), tt = function() {
  return Ae;
}, ir = /* @__PURE__ */ Object.create(null), Fe = function() {
  function i(e, t) {
    var r = this;
    this.policies = e, this.group = t, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(n, a) {
      return De(P(n) ? r.get(n.__ref, a) : n && n[a]);
    }, this.canRead = function(n) {
      return P(n) ? r.has(n.__ref) : typeof n == "object";
    }, this.toReference = function(n, a) {
      if (typeof n == "string")
        return he(n);
      if (P(n))
        return n;
      var o = r.policies.identify(n)[0];
      if (o) {
        var s = he(o);
        return a && r.merge(o, n), s;
      }
    };
  }
  return i.prototype.toObject = function() {
    return p({}, this.data);
  }, i.prototype.has = function(e) {
    return this.lookup(e, !0) !== void 0;
  }, i.prototype.get = function(e, t) {
    if (this.group.depend(e, t), I.call(this.data, e)) {
      var r = this.data[e];
      if (r && I.call(r, t))
        return r[t];
    }
    if (t === "__typename" && I.call(this.policies.rootTypenamesById, e))
      return this.policies.rootTypenamesById[e];
    if (this instanceof G)
      return this.parent.get(e, t);
  }, i.prototype.lookup = function(e, t) {
    if (t && this.group.depend(e, "__exists"), I.call(this.data, e))
      return this.data[e];
    if (this instanceof G)
      return this.parent.lookup(e, t);
    if (this.policies.rootTypenamesById[e])
      return /* @__PURE__ */ Object.create(null);
  }, i.prototype.merge = function(e, t) {
    var r = this, n;
    P(e) && (e = e.__ref), P(t) && (t = t.__ref);
    var a = typeof e == "string" ? this.lookup(n = e) : e, o = typeof t == "string" ? this.lookup(n = t) : t;
    if (!!o) {
      E(typeof n == "string", 1);
      var s = new te(Pn).merge(a, o);
      if (this.data[n] = s, s !== a && (delete this.refs[n], this.group.caching)) {
        var u = /* @__PURE__ */ Object.create(null);
        a || (u.__exists = 1), Object.keys(o).forEach(function(c) {
          if (!a || a[c] !== s[c]) {
            u[c] = 1;
            var f = re(c);
            f !== c && !r.policies.hasKeyArgs(s.__typename, f) && (u[f] = 1), s[c] === void 0 && !(r instanceof G) && delete s[c];
          }
        }), u.__typename && !(a && a.__typename) && this.policies.rootTypenamesById[n] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
          return r.group.dirty(n, c);
        });
      }
    }
  }, i.prototype.modify = function(e, t) {
    var r = this, n = this.lookup(e);
    if (n) {
      var a = /* @__PURE__ */ Object.create(null), o = !1, s = !0, u = {
        DELETE: Ae,
        INVALIDATE: ir,
        isReference: P,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(c, f) {
          return r.policies.readField(typeof c == "string" ? {
            fieldName: c,
            from: f || he(e)
          } : c, { store: r });
        }
      };
      if (Object.keys(n).forEach(function(c) {
        var f = re(c), h = n[c];
        if (h !== void 0) {
          var l = typeof t == "function" ? t : t[c] || t[f];
          if (l) {
            var v = l === tt ? Ae : l(De(h), p(p({}, u), { fieldName: f, storeFieldName: c, storage: r.getStorage(e, c) }));
            v === ir ? r.group.dirty(e, c) : (v === Ae && (v = void 0), v !== h && (a[c] = v, o = !0, h = v));
          }
          h !== void 0 && (s = !1);
        }
      }), o)
        return this.merge(e, a), s && (this instanceof G ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
    }
    return !1;
  }, i.prototype.delete = function(e, t, r) {
    var n, a = this.lookup(e);
    if (a) {
      var o = this.getFieldValue(a, "__typename"), s = t && r ? this.policies.getStoreFieldName({ typename: o, fieldName: t, args: r }) : t;
      return this.modify(e, s ? (n = {}, n[s] = tt, n) : tt);
    }
    return !1;
  }, i.prototype.evict = function(e, t) {
    var r = !1;
    return e.id && (I.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof G && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r;
  }, i.prototype.clear = function() {
    this.replace(null);
  }, i.prototype.extract = function() {
    var e = this, t = this.toObject(), r = [];
    return this.getRootIdSet().forEach(function(n) {
      I.call(e.policies.rootTypenamesById, n) || r.push(n);
    }), r.length && (t.__META = { extraRootIds: r.sort() }), t;
  }, i.prototype.replace = function(e) {
    var t = this;
    if (Object.keys(this.data).forEach(function(a) {
      e && I.call(e, a) || t.delete(a);
    }), e) {
      var r = e.__META, n = z(e, ["__META"]);
      Object.keys(n).forEach(function(a) {
        t.merge(a, n[a]);
      }), r && r.extraRootIds.forEach(this.retain, this);
    }
  }, i.prototype.retain = function(e) {
    return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
  }, i.prototype.release = function(e) {
    if (this.rootIds[e] > 0) {
      var t = --this.rootIds[e];
      return t || delete this.rootIds[e], t;
    }
    return 0;
  }, i.prototype.getRootIdSet = function(e) {
    return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof G ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
  }, i.prototype.gc = function() {
    var e = this, t = this.getRootIdSet(), r = this.toObject();
    t.forEach(function(o) {
      I.call(r, o) && (Object.keys(e.findChildRefIds(o)).forEach(t.add, t), delete r[o]);
    });
    var n = Object.keys(r);
    if (n.length) {
      for (var a = this; a instanceof G; )
        a = a.parent;
      n.forEach(function(o) {
        return a.delete(o);
      });
    }
    return n;
  }, i.prototype.findChildRefIds = function(e) {
    if (!I.call(this.refs, e)) {
      var t = this.refs[e] = /* @__PURE__ */ Object.create(null), r = this.data[e];
      if (!r)
        return t;
      var n = /* @__PURE__ */ new Set([r]);
      n.forEach(function(a) {
        P(a) && (t[a.__ref] = !0), Q(a) && Object.keys(a).forEach(function(o) {
          var s = a[o];
          Q(s) && n.add(s);
        });
      });
    }
    return this.refs[e];
  }, i.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, i;
}(), Kr = function() {
  function i(e, t) {
    t === void 0 && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching();
  }
  return i.prototype.resetCaching = function() {
    this.d = this.caching ? Dr() : null, this.keyMaker = new Te(U);
  }, i.prototype.depend = function(e, t) {
    if (this.d) {
      this.d(rt(e, t));
      var r = re(t);
      r !== t && this.d(rt(e, r)), this.parent && this.parent.depend(e, t);
    }
  }, i.prototype.dirty = function(e, t) {
    this.d && this.d.dirty(rt(e, t), t === "__exists" ? "forget" : "setDirty");
  }, i;
}();
function rt(i, e) {
  return e + "#" + i;
}
function nr(i, e) {
  Ee(i) && i.group.depend(e, "__exists");
}
(function(i) {
  var e = function(t) {
    B(r, t);
    function r(n) {
      var a = n.policies, o = n.resultCaching, s = o === void 0 ? !0 : o, u = n.seed, c = t.call(this, a, new Kr(s)) || this;
      return c.stump = new Fn(c), c.storageTrie = new Te(U), u && c.replace(u), c;
    }
    return r.prototype.addLayer = function(n, a) {
      return this.stump.addLayer(n, a);
    }, r.prototype.removeLayer = function() {
      return this;
    }, r.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    }, r;
  }(i);
  i.Root = e;
})(Fe || (Fe = {}));
var G = function(i) {
  B(e, i);
  function e(t, r, n, a) {
    var o = i.call(this, r.policies, a) || this;
    return o.id = t, o.parent = r, o.replay = n, o.group = a, n(o), o;
  }
  return e.prototype.addLayer = function(t, r) {
    return new e(t, this, r, this.group);
  }, e.prototype.removeLayer = function(t) {
    var r = this, n = this.parent.removeLayer(t);
    return t === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(a) {
      var o = r.data[a], s = n.lookup(a);
      s ? o ? o !== s && Object.keys(o).forEach(function(u) {
        F(o[u], s[u]) || r.group.dirty(a, u);
      }) : (r.group.dirty(a, "__exists"), Object.keys(s).forEach(function(u) {
        r.group.dirty(a, u);
      })) : r.delete(a);
    }), n) : n === this.parent ? this : n.addLayer(this.id, this.replay);
  }, e.prototype.toObject = function() {
    return p(p({}, this.parent.toObject()), this.data);
  }, e.prototype.findChildRefIds = function(t) {
    var r = this.parent.findChildRefIds(t);
    return I.call(this.data, t) ? p(p({}, r), i.prototype.findChildRefIds.call(this, t)) : r;
  }, e.prototype.getStorage = function() {
    for (var t = this.parent; t.parent; )
      t = t.parent;
    return t.getStorage.apply(t, arguments);
  }, e;
}(Fe), Fn = function(i) {
  B(e, i);
  function e(t) {
    return i.call(this, "EntityStore.Stump", t, function() {
    }, new Kr(t.group.caching, t.group)) || this;
  }
  return e.prototype.removeLayer = function() {
    return this;
  }, e.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, e;
}(G);
function Pn(i, e, t) {
  var r = i[t], n = e[t];
  return F(r, n) ? r : n;
}
function Ee(i) {
  return !!(i instanceof Fe && i.group.caching);
}
function Tn(i) {
  return Q(i) ? M(i) ? i.slice(0) : p({ __proto__: Object.getPrototypeOf(i) }, i) : i;
}
var gt = function() {
  function i() {
    this.known = new (Tr ? WeakSet : Set)(), this.pool = new Te(U), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return i.prototype.isKnown = function(e) {
    return Q(e) && this.known.has(e);
  }, i.prototype.pass = function(e) {
    if (Q(e)) {
      var t = Tn(e);
      return this.passes.set(t, e), t;
    }
    return e;
  }, i.prototype.admit = function(e) {
    var t = this;
    if (Q(e)) {
      var r = this.passes.get(e);
      if (r)
        return r;
      var n = Object.getPrototypeOf(e);
      switch (n) {
        case Array.prototype: {
          if (this.known.has(e))
            return e;
          var a = e.map(this.admit, this), o = this.pool.lookupArray(a);
          return o.array || (this.known.add(o.array = a), globalThis.__DEV__ !== !1 && Object.freeze(a)), o.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(e))
            return e;
          var s = Object.getPrototypeOf(e), u = [s], c = this.sortedKeys(e);
          u.push(c.json);
          var f = u.length;
          c.sorted.forEach(function(v) {
            u.push(t.admit(e[v]));
          });
          var o = this.pool.lookupArray(u);
          if (!o.object) {
            var h = o.object = Object.create(s);
            this.known.add(h), c.sorted.forEach(function(v, y) {
              h[v] = u[f + y];
            }), globalThis.__DEV__ !== !1 && Object.freeze(h);
          }
          return o.object;
        }
      }
    }
    return e;
  }, i.prototype.sortedKeys = function(e) {
    var t = Object.keys(e), r = this.pool.lookupArray(t);
    if (!r.keys) {
      t.sort();
      var n = JSON.stringify(t);
      (r.keys = this.keysByJSON.get(n)) || this.keysByJSON.set(n, r.keys = { sorted: t, json: n });
    }
    return r.keys;
  }, i;
}(), ae = Object.assign(function(i) {
  if (Q(i)) {
    bt === void 0 && ar();
    var e = bt.admit(i), t = Ot.get(e);
    return t === void 0 && Ot.set(e, t = JSON.stringify(e)), t;
  }
  return JSON.stringify(i);
}, {
  reset: ar
}), bt, Ot;
function ar() {
  bt = new gt(), Ot = new (U ? WeakMap : Map)();
}
function or(i) {
  return [
    i.selectionSet,
    i.objectOrReference,
    i.context,
    i.context.canonizeResults
  ];
}
var Qn = function() {
  function i(e) {
    var t = this;
    this.knownResults = new (U ? WeakMap : Map)(), this.config = oe(e, {
      addTypename: e.addTypename !== !1,
      canonizeResults: Br(e)
    }), this.canon = e.canon || new gt(), this.executeSelectionSet = We(function(r) {
      var n, a = r.context.canonizeResults, o = or(r);
      o[3] = !a;
      var s = (n = t.executeSelectionSet).peek.apply(n, o);
      return s ? a ? p(p({}, s), { result: t.canon.admit(s.result) }) : s : (nr(r.context.store, r.enclosingRef.__ref), t.execSelectionSetImpl(r));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: or,
      makeCacheKey: function(r, n, a, o) {
        if (Ee(a.store))
          return a.store.makeCacheKey(r, P(n) ? n.__ref : n, a.varString, o);
      }
    }), this.executeSubSelectedArray = We(function(r) {
      return nr(r.context.store, r.enclosingRef.__ref), t.execSubSelectedArrayImpl(r);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(r) {
        var n = r.field, a = r.array, o = r.context;
        if (Ee(o.store))
          return o.store.makeCacheKey(n, a, o.varString);
      }
    });
  }
  return i.prototype.resetCanon = function() {
    this.canon = new gt();
  }, i.prototype.diffQueryAgainstStore = function(e) {
    var t = e.store, r = e.query, n = e.rootId, a = n === void 0 ? "ROOT_QUERY" : n, o = e.variables, s = e.returnPartialData, u = s === void 0 ? !0 : s, c = e.canonizeResults, f = c === void 0 ? this.config.canonizeResults : c, h = this.config.cache.policies;
    o = p(p({}, Pt(Qr(r))), o);
    var l = he(a), v = this.executeSelectionSet({
      selectionSet: Ce(r).selectionSet,
      objectOrReference: l,
      enclosingRef: l,
      context: p({ store: t, query: r, policies: h, variables: o, varString: ae(o), canonizeResults: f }, Hr(r, this.config.fragments))
    }), y;
    if (v.missing && (y = [
      new Vr(qn(v.missing), v.missing, r, o)
    ], !u))
      throw y[0];
    return {
      result: v.result,
      complete: !y,
      missing: y
    };
  }, i.prototype.isFresh = function(e, t, r, n) {
    if (Ee(n.store) && this.knownResults.get(e) === r) {
      var a = this.executeSelectionSet.peek(r, t, n, this.canon.isKnown(e));
      if (a && e === a.result)
        return !0;
    }
    return !1;
  }, i.prototype.execSelectionSetImpl = function(e) {
    var t = this, r = e.selectionSet, n = e.objectOrReference, a = e.enclosingRef, o = e.context;
    if (P(n) && !o.policies.rootTypenamesById[n.__ref] && !o.store.has(n.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(n.__ref, " object")
      };
    var s = o.variables, u = o.policies, c = o.store, f = c.getFieldValue(n, "__typename"), h = [], l, v = new te();
    this.config.addTypename && typeof f == "string" && !u.rootIdsByTypename[f] && h.push({ __typename: f });
    function y(b, S) {
      var k;
      return b.missing && (l = v.merge(l, (k = {}, k[S] = b.missing, k))), b.result;
    }
    var g = new Set(r.selections);
    g.forEach(function(b) {
      var S, k;
      if (!!Qe(b, s))
        if (ee(b)) {
          var w = u.readField({
            fieldName: b.name.value,
            field: b,
            variables: o.variables,
            from: n
          }, o), R = Z(b);
          w === void 0 ? Tt.added(b) || (l = v.merge(l, (S = {}, S[R] = "Can't find field '".concat(b.name.value, "' on ").concat(P(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), S))) : M(w) ? w = y(t.executeSubSelectedArray({
            field: b,
            array: w,
            enclosingRef: a,
            context: o
          }), R) : b.selectionSet ? w != null && (w = y(t.executeSelectionSet({
            selectionSet: b.selectionSet,
            objectOrReference: w,
            enclosingRef: P(w) ? w : a,
            context: o
          }), R)) : o.canonizeResults && (w = t.canon.pass(w)), w !== void 0 && h.push((k = {}, k[R] = w, k));
        } else {
          var _ = He(b, o.lookupFragment);
          if (!_ && b.kind === A.FRAGMENT_SPREAD)
            throw L(7, b.name.value);
          _ && u.fragmentMatches(_, f) && _.selectionSet.selections.forEach(g.add, g);
        }
    });
    var m = Qt(h), d = { result: m, missing: l }, O = o.canonizeResults ? this.canon.admit(d) : De(d);
    return O.result && this.knownResults.set(O.result, r), O;
  }, i.prototype.execSubSelectedArrayImpl = function(e) {
    var t = this, r = e.field, n = e.array, a = e.enclosingRef, o = e.context, s, u = new te();
    function c(f, h) {
      var l;
      return f.missing && (s = u.merge(s, (l = {}, l[h] = f.missing, l))), f.result;
    }
    return r.selectionSet && (n = n.filter(o.store.canRead)), n = n.map(function(f, h) {
      return f === null ? null : M(f) ? c(t.executeSubSelectedArray({
        field: r,
        array: f,
        enclosingRef: a,
        context: o
      }), h) : r.selectionSet ? c(t.executeSelectionSet({
        selectionSet: r.selectionSet,
        objectOrReference: f,
        enclosingRef: P(f) ? f : a,
        context: o
      }), h) : (globalThis.__DEV__ !== !1 && Mn(o.store, r, f), f);
    }), {
      result: o.canonizeResults ? this.canon.admit(n) : n,
      missing: s
    };
  }, i;
}();
function qn(i) {
  try {
    JSON.stringify(i, function(e, t) {
      if (typeof t == "string")
        throw t;
      return t;
    });
  } catch (e) {
    return e;
  }
}
function Mn(i, e, t) {
  if (!e.selectionSet) {
    var r = /* @__PURE__ */ new Set([t]);
    r.forEach(function(n) {
      Q(n) && (E(
        !P(n),
        8,
        _n(i, n),
        e.name.value
      ), Object.values(n).forEach(r.add, r));
    });
  }
}
var Mt = new si(), sr = /* @__PURE__ */ new WeakMap();
function ke(i) {
  var e = sr.get(i);
  return e || sr.set(i, e = {
    vars: /* @__PURE__ */ new Set(),
    dep: Dr()
  }), e;
}
function ur(i) {
  ke(i).vars.forEach(function(e) {
    return e.forgetCache(i);
  });
}
function Cn(i) {
  ke(i).vars.forEach(function(e) {
    return e.attachCache(i);
  });
}
function In(i) {
  var e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), r = function(a) {
    if (arguments.length > 0) {
      if (i !== a) {
        i = a, e.forEach(function(u) {
          ke(u).dep.dirty(r), xn(u);
        });
        var o = Array.from(t);
        t.clear(), o.forEach(function(u) {
          return u(i);
        });
      }
    } else {
      var s = Mt.getValue();
      s && (n(s), ke(s).dep(r));
    }
    return i;
  };
  r.onNextChange = function(a) {
    return t.add(a), function() {
      t.delete(a);
    };
  };
  var n = r.attachCache = function(a) {
    return e.add(a), ke(a).vars.add(r), r;
  };
  return r.forgetCache = function(a) {
    return e.delete(a);
  }, r;
}
function xn(i) {
  i.broadcastWatches && i.broadcastWatches();
}
var cr = /* @__PURE__ */ Object.create(null);
function Ct(i) {
  var e = JSON.stringify(i);
  return cr[e] || (cr[e] = /* @__PURE__ */ Object.create(null));
}
function fr(i) {
  var e = Ct(i);
  return e.keyFieldsFn || (e.keyFieldsFn = function(t, r) {
    var n = function(o, s) {
      return r.readField(s, o);
    }, a = r.keyObject = It(i, function(o) {
      var s = pe(r.storeObject, o, n);
      return s === void 0 && t !== r.storeObject && I.call(t, o[0]) && (s = pe(t, o, Jr)), E(s !== void 0, 2, o.join("."), t), s;
    });
    return "".concat(r.typename, ":").concat(JSON.stringify(a));
  });
}
function lr(i) {
  var e = Ct(i);
  return e.keyArgsFn || (e.keyArgsFn = function(t, r) {
    var n = r.field, a = r.variables, o = r.fieldName, s = It(i, function(c) {
      var f = c[0], h = f.charAt(0);
      if (h === "@") {
        if (n && N(n.directives)) {
          var l = f.slice(1), v = n.directives.find(function(d) {
            return d.name.value === l;
          }), y = v && Ke(v, a);
          return y && pe(y, c.slice(1));
        }
        return;
      }
      if (h === "$") {
        var g = f.slice(1);
        if (a && I.call(a, g)) {
          var m = c.slice(0);
          return m[0] = g, pe(a, m);
        }
        return;
      }
      if (t)
        return pe(t, c);
    }), u = JSON.stringify(s);
    return (t || u !== "{}") && (o += ":" + u), o;
  });
}
function It(i, e) {
  var t = new te();
  return Gr(i).reduce(function(r, n) {
    var a, o = e(n);
    if (o !== void 0) {
      for (var s = n.length - 1; s >= 0; --s)
        o = (a = {}, a[n[s]] = o, a);
      r = t.merge(r, o);
    }
    return r;
  }, /* @__PURE__ */ Object.create(null));
}
function Gr(i) {
  var e = Ct(i);
  if (!e.paths) {
    var t = e.paths = [], r = [];
    i.forEach(function(n, a) {
      M(n) ? (Gr(n).forEach(function(o) {
        return t.push(r.concat(o));
      }), r.length = 0) : (r.push(n), M(i[a + 1]) || (t.push(r.slice(0)), r.length = 0));
    });
  }
  return e.paths;
}
function Jr(i, e) {
  return i[e];
}
function pe(i, e, t) {
  return t = t || Jr, $r(e.reduce(function r(n, a) {
    return M(n) ? n.map(function(o) {
      return r(o, a);
    }) : n && t(n, a);
  }, i));
}
function $r(i) {
  return Q(i) ? M(i) ? i.map($r) : It(Object.keys(i).sort(), function(e) {
    return pe(i, e);
  }) : i;
}
Ft.setStringify(ae);
function wt(i) {
  return i.args !== void 0 ? i.args : i.field ? Ke(i.field, i.variables) : null;
}
var Ln = function() {
}, hr = function(i, e) {
  return e.fieldName;
}, vr = function(i, e, t) {
  var r = t.mergeObjects;
  return r(i, e);
}, pr = function(i, e) {
  return e;
}, jn = function() {
  function i(e) {
    this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = p({ dataIdFromObject: Wr }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
  }
  return i.prototype.identify = function(e, t) {
    var r, n = this, a = t && (t.typename || ((r = t.storeObject) === null || r === void 0 ? void 0 : r.__typename)) || e.__typename;
    if (a === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var o = t && t.storeObject || e, s = p(p({}, t), { typename: a, storeObject: o, readField: t && t.readField || function() {
      var l = xt(arguments, o);
      return n.readField(l, {
        store: n.cache.data,
        variables: l.variables
      });
    } }), u, c = a && this.getTypePolicy(a), f = c && c.keyFn || this.config.dataIdFromObject; f; ) {
      var h = f(p(p({}, e), o), s);
      if (M(h))
        f = fr(h);
      else {
        u = h;
        break;
      }
    }
    return u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
  }, i.prototype.addTypePolicies = function(e) {
    var t = this;
    Object.keys(e).forEach(function(r) {
      var n = e[r], a = n.queryType, o = n.mutationType, s = n.subscriptionType, u = z(n, ["queryType", "mutationType", "subscriptionType"]);
      a && t.setRootTypename("Query", r), o && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), I.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u];
    });
  }, i.prototype.updateTypePolicy = function(e, t) {
    var r = this, n = this.getTypePolicy(e), a = t.keyFields, o = t.fields;
    function s(u, c) {
      u.merge = typeof c == "function" ? c : c === !0 ? vr : c === !1 ? pr : u.merge;
    }
    s(n, t.merge), n.keyFn = a === !1 ? Ln : M(a) ? fr(a) : typeof a == "function" ? a : n.keyFn, o && Object.keys(o).forEach(function(u) {
      var c = r.getFieldPolicy(e, u, !0), f = o[u];
      if (typeof f == "function")
        c.read = f;
      else {
        var h = f.keyArgs, l = f.read, v = f.merge;
        c.keyFn = h === !1 ? hr : M(h) ? lr(h) : typeof h == "function" ? h : c.keyFn, typeof l == "function" && (c.read = l), s(c, v);
      }
      c.read && c.merge && (c.keyFn = c.keyFn || hr);
    });
  }, i.prototype.setRootTypename = function(e, t) {
    t === void 0 && (t = e);
    var r = "ROOT_" + e.toUpperCase(), n = this.rootTypenamesById[r];
    t !== n && (E(!n || n === e, 3, e), n && delete this.rootIdsByTypename[n], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t);
  }, i.prototype.addPossibleTypes = function(e) {
    var t = this;
    this.usingPossibleTypes = !0, Object.keys(e).forEach(function(r) {
      t.getSupertypeSet(r, !0), e[r].forEach(function(n) {
        t.getSupertypeSet(n, !0).add(r);
        var a = n.match(Ur);
        (!a || a[0] !== n) && t.fuzzySubtypes.set(n, new RegExp(n));
      });
    });
  }, i.prototype.getTypePolicy = function(e) {
    var t = this;
    if (!I.call(this.typePolicies, e)) {
      var r = this.typePolicies[e] = /* @__PURE__ */ Object.create(null);
      r.fields = /* @__PURE__ */ Object.create(null);
      var n = this.supertypeMap.get(e);
      !n && this.fuzzySubtypes.size && (n = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(o, s) {
        if (o.test(e)) {
          var u = t.supertypeMap.get(s);
          u && u.forEach(function(c) {
            return n.add(c);
          });
        }
      })), n && n.size && n.forEach(function(o) {
        var s = t.getTypePolicy(o), u = s.fields, c = z(s, ["fields"]);
        Object.assign(r, c), Object.assign(r.fields, u);
      });
    }
    var a = this.toBeAdded[e];
    return a && a.length && a.splice(0).forEach(function(o) {
      t.updateTypePolicy(e, o);
    }), this.typePolicies[e];
  }, i.prototype.getFieldPolicy = function(e, t, r) {
    if (e) {
      var n = this.getTypePolicy(e).fields;
      return n[t] || r && (n[t] = /* @__PURE__ */ Object.create(null));
    }
  }, i.prototype.getSupertypeSet = function(e, t) {
    var r = this.supertypeMap.get(e);
    return !r && t && this.supertypeMap.set(e, r = /* @__PURE__ */ new Set()), r;
  }, i.prototype.fragmentMatches = function(e, t, r, n) {
    var a = this;
    if (!e.typeCondition)
      return !0;
    if (!t)
      return !1;
    var o = e.typeCondition.name.value;
    if (t === o)
      return !0;
    if (this.usingPossibleTypes && this.supertypeMap.has(o))
      for (var s = this.getSupertypeSet(t, !0), u = [s], c = function(y) {
        var g = a.getSupertypeSet(y, !1);
        g && g.size && u.indexOf(g) < 0 && u.push(g);
      }, f = !!(r && this.fuzzySubtypes.size), h = !1, l = 0; l < u.length; ++l) {
        var v = u[l];
        if (v.has(o))
          return s.has(o) || (h && globalThis.__DEV__ !== !1 && E.warn(4, t, o), s.add(o)), !0;
        v.forEach(c), f && l === u.length - 1 && mt(e.selectionSet, r, n) && (f = !1, h = !0, this.fuzzySubtypes.forEach(function(y, g) {
          var m = t.match(y);
          m && m[0] === t && c(g);
        }));
      }
    return !1;
  }, i.prototype.hasKeyArgs = function(e, t) {
    var r = this.getFieldPolicy(e, t, !1);
    return !!(r && r.keyFn);
  }, i.prototype.getStoreFieldName = function(e) {
    var t = e.typename, r = e.fieldName, n = this.getFieldPolicy(t, r, !1), a, o = n && n.keyFn;
    if (o && t)
      for (var s = {
        typename: t,
        fieldName: r,
        field: e.field || null,
        variables: e.variables
      }, u = wt(e); o; ) {
        var c = o(u, s);
        if (M(c))
          o = lr(c);
        else {
          a = c || r;
          break;
        }
      }
    return a === void 0 && (a = e.field ? Di(e.field, e.variables) : Ft(r, wt(e))), a === !1 ? r : r === re(a) ? a : r + ":" + a;
  }, i.prototype.readField = function(e, t) {
    var r = e.from;
    if (!!r) {
      var n = e.field || e.fieldName;
      if (!!n) {
        if (e.typename === void 0) {
          var a = t.store.getFieldValue(r, "__typename");
          a && (e.typename = a);
        }
        var o = this.getStoreFieldName(e), s = re(o), u = t.store.getFieldValue(r, o), c = this.getFieldPolicy(e.typename, s, !1), f = c && c.read;
        if (f) {
          var h = dr(this, r, e, t, t.store.getStorage(P(r) ? r.__ref : r, o));
          return Mt.withValue(this.cache, f, [
            u,
            h
          ]);
        }
        return u;
      }
    }
  }, i.prototype.getReadFunction = function(e, t) {
    var r = this.getFieldPolicy(e, t, !1);
    return r && r.read;
  }, i.prototype.getMergeFunction = function(e, t, r) {
    var n = this.getFieldPolicy(e, t, !1), a = n && n.merge;
    return !a && r && (n = this.getTypePolicy(r), a = n && n.merge), a;
  }, i.prototype.runMergeFunction = function(e, t, r, n, a) {
    var o = r.field, s = r.typename, u = r.merge;
    return u === vr ? Yr(n.store)(e, t) : u === pr ? t : (n.overwrite && (e = void 0), u(e, t, dr(this, void 0, {
      typename: s,
      fieldName: o.name.value,
      field: o,
      variables: n.variables
    }, n, a || /* @__PURE__ */ Object.create(null))));
  }, i;
}();
function dr(i, e, t, r, n) {
  var a = i.getStoreFieldName(t), o = re(a), s = t.variables || r.variables, u = r.store, c = u.toReference, f = u.canRead;
  return {
    args: wt(t),
    field: t.field || null,
    fieldName: o,
    storeFieldName: a,
    variables: s,
    isReference: P,
    toReference: c,
    storage: n,
    cache: i.cache,
    canRead: f,
    readField: function() {
      return i.readField(xt(arguments, e, s), r);
    },
    mergeObjects: Yr(r.store)
  };
}
function xt(i, e, t) {
  var r = i[0], n = i[1], a = i.length, o;
  return typeof r == "string" ? o = {
    fieldName: r,
    from: a > 1 ? n : e
  } : (o = p({}, r), I.call(o, "from") || (o.from = e)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && E.warn(5, Pr(Array.from(i))), o.variables === void 0 && (o.variables = t), o;
}
function Yr(i) {
  return function(t, r) {
    if (M(t) || M(r))
      throw L(6);
    if (Q(t) && Q(r)) {
      var n = i.getFieldValue(t, "__typename"), a = i.getFieldValue(r, "__typename"), o = n && a && n !== a;
      if (o)
        return r;
      if (P(t) && fe(r))
        return i.merge(t.__ref, r), t;
      if (fe(t) && P(r))
        return i.merge(t, r.__ref), r;
      if (fe(t) && fe(r))
        return p(p({}, t), r);
    }
    return r;
  };
}
function it(i, e, t) {
  var r = "".concat(e).concat(t), n = i.flavors.get(r);
  return n || i.flavors.set(r, n = i.clientOnly === e && i.deferred === t ? i : p(p({}, i), { clientOnly: e, deferred: t })), n;
}
var An = function() {
  function i(e, t, r) {
    this.cache = e, this.reader = t, this.fragments = r;
  }
  return i.prototype.writeToStore = function(e, t) {
    var r = this, n = t.query, a = t.result, o = t.dataId, s = t.variables, u = t.overwrite, c = Me(n), f = Dn();
    s = p(p({}, Pt(c)), s);
    var h = p(p({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(v, y) {
      return f.merge(v, y);
    }, variables: s, varString: ae(s) }, Hr(n, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), l = this.processSelectionSet({
      result: a || /* @__PURE__ */ Object.create(null),
      dataId: o,
      selectionSet: c.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: h
    });
    if (!P(l))
      throw L(9, a);
    return h.incomingById.forEach(function(v, y) {
      var g = v.storeObject, m = v.mergeTree, d = v.fieldNodeSet, O = he(y);
      if (m && m.map.size) {
        var b = r.applyMerges(m, O, g, h);
        if (P(b))
          return;
        g = b;
      }
      if (globalThis.__DEV__ !== !1 && !h.overwrite) {
        var S = /* @__PURE__ */ Object.create(null);
        d.forEach(function(R) {
          R.selectionSet && (S[R.name.value] = !0);
        });
        var k = function(R) {
          return S[re(R)] === !0;
        }, w = function(R) {
          var _ = m && m.map.get(R);
          return Boolean(_ && _.info && _.info.merge);
        };
        Object.keys(g).forEach(function(R) {
          k(R) && !w(R) && Nn(O, g, R, h.store);
        });
      }
      e.merge(y, g);
    }), e.retain(l.__ref), l;
  }, i.prototype.processSelectionSet = function(e) {
    var t = this, r = e.dataId, n = e.result, a = e.selectionSet, o = e.context, s = e.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), f = r && u.rootTypenamesById[r] || ft(n, a, o.fragmentMap) || r && o.store.get(r, "__typename");
    typeof f == "string" && (c.__typename = f);
    var h = function() {
      var b = xt(arguments, c, o.variables);
      if (P(b.from)) {
        var S = o.incomingById.get(b.from.__ref);
        if (S) {
          var k = u.readField(p(p({}, b), { from: S.storeObject }), o);
          if (k !== void 0)
            return k;
        }
      }
      return u.readField(b, o);
    }, l = /* @__PURE__ */ new Set();
    this.flattenFields(a, n, o, f).forEach(function(b, S) {
      var k, w = Z(S), R = n[w];
      if (l.add(S), R !== void 0) {
        var _ = u.getStoreFieldName({
          typename: f,
          fieldName: S.name.value,
          field: S,
          variables: b.variables
        }), T = yr(s, _), C = t.processFieldValue(R, S, S.selectionSet ? it(b, !1, !1) : b, T), x = void 0;
        S.selectionSet && (P(C) || fe(C)) && (x = h("__typename", C));
        var H = u.getMergeFunction(f, S.name.value, x);
        H ? T.info = {
          field: S,
          typename: f,
          merge: H
        } : mr(s, _), c = b.merge(c, (k = {}, k[_] = C, k));
      } else
        globalThis.__DEV__ !== !1 && !b.clientOnly && !b.deferred && !Tt.added(S) && !u.getReadFunction(f, S.name.value) && globalThis.__DEV__ !== !1 && E.error(10, Z(S), n);
    });
    try {
      var v = u.identify(n, {
        typename: f,
        selectionSet: a,
        fragmentMap: o.fragmentMap,
        storeObject: c,
        readField: h
      }), y = v[0], g = v[1];
      r = r || y, g && (c = o.merge(c, g));
    } catch (b) {
      if (!r)
        throw b;
    }
    if (typeof r == "string") {
      var m = he(r), d = o.written[r] || (o.written[r] = []);
      if (d.indexOf(a) >= 0 || (d.push(a), this.reader && this.reader.isFresh(n, m, a, o)))
        return m;
      var O = o.incomingById.get(r);
      return O ? (O.storeObject = o.merge(O.storeObject, c), O.mergeTree = St(O.mergeTree, s), l.forEach(function(b) {
        return O.fieldNodeSet.add(b);
      })) : o.incomingById.set(r, {
        storeObject: c,
        mergeTree: ze(s) ? void 0 : s,
        fieldNodeSet: l
      }), m;
    }
    return c;
  }, i.prototype.processFieldValue = function(e, t, r, n) {
    var a = this;
    return !t.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? Lr(e) : e : M(e) ? e.map(function(o, s) {
      var u = a.processFieldValue(o, t, r, yr(n, s));
      return mr(n, s), u;
    }) : this.processSelectionSet({
      result: e,
      selectionSet: t.selectionSet,
      context: r,
      mergeTree: n
    });
  }, i.prototype.flattenFields = function(e, t, r, n) {
    n === void 0 && (n = ft(t, e, r.fragmentMap));
    var a = /* @__PURE__ */ new Map(), o = this.cache.policies, s = new Te(!1);
    return function u(c, f) {
      var h = s.lookup(c, f.clientOnly, f.deferred);
      h.visited || (h.visited = !0, c.selections.forEach(function(l) {
        if (!!Qe(l, r.variables)) {
          var v = f.clientOnly, y = f.deferred;
          if (!(v && y) && N(l.directives) && l.directives.forEach(function(d) {
            var O = d.name.value;
            if (O === "client" && (v = !0), O === "defer") {
              var b = Ke(d, r.variables);
              (!b || b.if !== !1) && (y = !0);
            }
          }), ee(l)) {
            var g = a.get(l);
            g && (v = v && g.clientOnly, y = y && g.deferred), a.set(l, it(r, v, y));
          } else {
            var m = He(l, r.lookupFragment);
            if (!m && l.kind === A.FRAGMENT_SPREAD)
              throw L(11, l.name.value);
            m && o.fragmentMatches(m, n, t, r.variables) && u(m.selectionSet, it(r, v, y));
          }
        }
      }));
    }(e, r), a;
  }, i.prototype.applyMerges = function(e, t, r, n, a) {
    var o, s = this;
    if (e.map.size && !P(r)) {
      var u = !M(r) && (P(t) || fe(t)) ? t : void 0, c = r;
      u && !a && (a = [P(u) ? u.__ref : u]);
      var f, h = function(l, v) {
        return M(l) ? typeof v == "number" ? l[v] : void 0 : n.store.getFieldValue(l, String(v));
      };
      e.map.forEach(function(l, v) {
        var y = h(u, v), g = h(c, v);
        if (g !== void 0) {
          a && a.push(v);
          var m = s.applyMerges(l, y, g, n, a);
          m !== g && (f = f || /* @__PURE__ */ new Map(), f.set(v, m)), a && E(a.pop() === v);
        }
      }), f && (r = M(c) ? c.slice(0) : p({}, c), f.forEach(function(l, v) {
        r[v] = l;
      }));
    }
    return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, n, a && (o = n.store).getStorage.apply(o, a)) : r;
  }, i;
}(), Xr = [];
function yr(i, e) {
  var t = i.map;
  return t.has(e) || t.set(e, Xr.pop() || { map: /* @__PURE__ */ new Map() }), t.get(e);
}
function St(i, e) {
  if (i === e || !e || ze(e))
    return i;
  if (!i || ze(i))
    return e;
  var t = i.info && e.info ? p(p({}, i.info), e.info) : i.info || e.info, r = i.map.size && e.map.size, n = r ? /* @__PURE__ */ new Map() : i.map.size ? i.map : e.map, a = { info: t, map: n };
  if (r) {
    var o = new Set(e.map.keys());
    i.map.forEach(function(s, u) {
      a.map.set(u, St(s, e.map.get(u))), o.delete(u);
    }), o.forEach(function(s) {
      a.map.set(s, St(e.map.get(s), i.map.get(s)));
    });
  }
  return a;
}
function ze(i) {
  return !i || !(i.info || i.map.size);
}
function mr(i, e) {
  var t = i.map, r = t.get(e);
  r && ze(r) && (Xr.push(r), t.delete(e));
}
var gr = /* @__PURE__ */ new Set();
function Nn(i, e, t, r) {
  var n = function(h) {
    var l = r.getFieldValue(h, t);
    return typeof l == "object" && l;
  }, a = n(i);
  if (!!a) {
    var o = n(e);
    if (!!o && !P(a) && !F(a, o) && !Object.keys(a).every(function(h) {
      return r.getFieldValue(o, h) !== void 0;
    })) {
      var s = r.getFieldValue(i, "__typename") || r.getFieldValue(e, "__typename"), u = re(t), c = "".concat(s, ".").concat(u);
      if (!gr.has(c)) {
        gr.add(c);
        var f = [];
        !M(a) && !M(o) && [a, o].forEach(function(h) {
          var l = r.getFieldValue(h, "__typename");
          typeof l == "string" && !f.includes(l) && f.push(l);
        }), globalThis.__DEV__ !== !1 && E.warn(12, u, s, f.length ? "either ensure all objects of type " + f.join(" and ") + " have an ID or a custom merge function, or " : "", c, a, o);
      }
    }
  }
}
var fa = function(i) {
  B(e, i);
  function e(t) {
    t === void 0 && (t = {});
    var r = i.call(this) || this;
    return r.watches = /* @__PURE__ */ new Set(), r.addTypenameTransform = new qr(Tt), r.assumeImmutableResults = !0, r.makeVar = In, r.txCount = 0, r.config = Rn(t), r.addTypename = !!r.config.addTypename, r.policies = new jn({
      cache: r,
      dataIdFromObject: r.config.dataIdFromObject,
      possibleTypes: r.config.possibleTypes,
      typePolicies: r.config.typePolicies
    }), r.init(), r;
  }
  return e.prototype.init = function() {
    var t = this.data = new Fe.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = t.stump, this.resetResultCache();
  }, e.prototype.resetResultCache = function(t) {
    var r = this, n = this.storeReader, a = this.config.fragments;
    this.storeWriter = new An(this, this.storeReader = new Qn({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: Br(this.config),
      canon: t ? void 0 : n && n.canon,
      fragments: a
    }), a), this.maybeBroadcastWatch = We(function(o, s) {
      return r.broadcastWatch(o, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(o) {
        var s = o.optimistic ? r.optimisticData : r.data;
        if (Ee(s)) {
          var u = o.optimistic, c = o.id, f = o.variables;
          return s.makeCacheKey(o.query, o.callback, ae({ optimistic: u, id: c, variables: f }));
        }
      }
    }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(o) {
      return o.resetCaching();
    });
  }, e.prototype.restore = function(t) {
    return this.init(), t && this.data.replace(t), this;
  }, e.prototype.extract = function(t) {
    return t === void 0 && (t = !1), (t ? this.optimisticData : this.data).extract();
  }, e.prototype.read = function(t) {
    var r = t.returnPartialData, n = r === void 0 ? !1 : r;
    try {
      return this.storeReader.diffQueryAgainstStore(p(p({}, t), { store: t.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: n })).result || null;
    } catch (a) {
      if (a instanceof Vr)
        return null;
      throw a;
    }
  }, e.prototype.write = function(t) {
    try {
      return ++this.txCount, this.storeWriter.writeToStore(this.data, t);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, e.prototype.modify = function(t) {
    if (I.call(t, "id") && !t.id)
      return !1;
    var r = t.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, r.modify(t.id || "ROOT_QUERY", t.fields);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, e.prototype.diff = function(t) {
    return this.storeReader.diffQueryAgainstStore(p(p({}, t), { store: t.optimistic ? this.optimisticData : this.data, rootId: t.id || "ROOT_QUERY", config: this.config }));
  }, e.prototype.watch = function(t) {
    var r = this;
    return this.watches.size || Cn(this), this.watches.add(t), t.immediate && this.maybeBroadcastWatch(t), function() {
      r.watches.delete(t) && !r.watches.size && ur(r), r.maybeBroadcastWatch.forget(t);
    };
  }, e.prototype.gc = function(t) {
    ae.reset();
    var r = this.optimisticData.gc();
    return t && !this.txCount && (t.resetResultCache ? this.resetResultCache(t.resetResultIdentities) : t.resetResultIdentities && this.storeReader.resetCanon()), r;
  }, e.prototype.retain = function(t, r) {
    return (r ? this.optimisticData : this.data).retain(t);
  }, e.prototype.release = function(t, r) {
    return (r ? this.optimisticData : this.data).release(t);
  }, e.prototype.identify = function(t) {
    if (P(t))
      return t.__ref;
    try {
      return this.policies.identify(t)[0];
    } catch (r) {
      globalThis.__DEV__ !== !1 && E.warn(r);
    }
  }, e.prototype.evict = function(t) {
    if (!t.id) {
      if (I.call(t, "id"))
        return !1;
      t = p(p({}, t), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(t, this.data);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, e.prototype.reset = function(t) {
    var r = this;
    return this.init(), ae.reset(), t && t.discardWatches ? (this.watches.forEach(function(n) {
      return r.maybeBroadcastWatch.forget(n);
    }), this.watches.clear(), ur(this)) : this.broadcastWatches(), Promise.resolve();
  }, e.prototype.removeOptimistic = function(t) {
    var r = this.optimisticData.removeLayer(t);
    r !== this.optimisticData && (this.optimisticData = r, this.broadcastWatches());
  }, e.prototype.batch = function(t) {
    var r = this, n = t.update, a = t.optimistic, o = a === void 0 ? !0 : a, s = t.removeOptimistic, u = t.onWatchUpdated, c, f = function(l) {
      var v = r, y = v.data, g = v.optimisticData;
      ++r.txCount, l && (r.data = r.optimisticData = l);
      try {
        return c = n(r);
      } finally {
        --r.txCount, r.data = y, r.optimisticData = g;
      }
    }, h = /* @__PURE__ */ new Set();
    return u && !this.txCount && this.broadcastWatches(p(p({}, t), { onWatchUpdated: function(l) {
      return h.add(l), !1;
    } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, f) : o === !1 ? f(this.data) : f(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && h.size ? (this.broadcastWatches(p(p({}, t), { onWatchUpdated: function(l, v) {
      var y = u.call(this, l, v);
      return y !== !1 && h.delete(l), y;
    } })), h.size && h.forEach(function(l) {
      return r.maybeBroadcastWatch.dirty(l);
    })) : this.broadcastWatches(t), c;
  }, e.prototype.performTransaction = function(t, r) {
    return this.batch({
      update: t,
      optimistic: r || r !== null
    });
  }, e.prototype.transformDocument = function(t) {
    return this.addTypenameToDocument(this.addFragmentsToDocument(t));
  }, e.prototype.broadcastWatches = function(t) {
    var r = this;
    this.txCount || this.watches.forEach(function(n) {
      return r.maybeBroadcastWatch(n, t);
    });
  }, e.prototype.addFragmentsToDocument = function(t) {
    var r = this.config.fragments;
    return r ? r.transform(t) : t;
  }, e.prototype.addTypenameToDocument = function(t) {
    return this.addTypename ? this.addTypenameTransform.transformDocument(t) : t;
  }, e.prototype.broadcastWatch = function(t, r) {
    var n = t.lastDiff, a = this.diff(t);
    r && (t.optimistic && typeof r.optimistic == "string" && (a.fromOptimisticTransaction = !0), r.onWatchUpdated && r.onWatchUpdated.call(this, t, a, n) === !1) || (!n || !F(n.result, a.result)) && t.callback(t.lastDiff = a, n);
  }, e;
}(kn), D;
(function(i) {
  i[i.loading = 1] = "loading", i[i.setVariables = 2] = "setVariables", i[i.fetchMore = 3] = "fetchMore", i[i.refetch = 4] = "refetch", i[i.poll = 6] = "poll", i[i.ready = 7] = "ready", i[i.error = 8] = "error";
})(D || (D = {}));
function Pe(i) {
  return i ? i < 7 : !1;
}
function Vn(i, e, t, r) {
  var n = e.data, a = z(e, ["data"]), o = t.data, s = z(t, ["data"]);
  return F(a, s) && Ne(Ce(i).selectionSet, n, o, {
    fragmentMap: Ue(Ge(i)),
    variables: r
  });
}
function Ne(i, e, t, r) {
  if (e === t)
    return !0;
  var n = /* @__PURE__ */ new Set();
  return i.selections.every(function(a) {
    if (n.has(a) || (n.add(a), !Qe(a, r.variables)) || br(a))
      return !0;
    if (ee(a)) {
      var o = Z(a), s = e && e[o], u = t && t[o], c = a.selectionSet;
      if (!c)
        return F(s, u);
      var f = Array.isArray(s), h = Array.isArray(u);
      if (f !== h)
        return !1;
      if (f && h) {
        var l = s.length;
        if (u.length !== l)
          return !1;
        for (var v = 0; v < l; ++v)
          if (!Ne(c, s[v], u[v], r))
            return !1;
        return !0;
      }
      return Ne(c, s, u, r);
    } else {
      var y = He(a, r.fragmentMap);
      if (y)
        return br(y) ? !0 : Ne(y.selectionSet, e, t, r);
    }
  });
}
function br(i) {
  return !!i.directives && i.directives.some(Wn);
}
function Wn(i) {
  return i.name.value === "nonreactive";
}
var Or = Object.assign, zn = Object.hasOwnProperty, Et = function(i) {
  B(e, i);
  function e(t) {
    var r = t.queryManager, n = t.queryInfo, a = t.options, o = i.call(this, function(m) {
      try {
        var d = m._subscription._observer;
        d && !d.error && (d.error = Bn);
      } catch {
      }
      var O = !o.observers.size;
      o.observers.add(m);
      var b = o.last;
      return b && b.error ? m.error && m.error(b.error) : b && b.result && m.next && m.next(b.result), O && o.reobserve().catch(function() {
      }), function() {
        o.observers.delete(m) && !o.observers.size && o.tearDownQuery();
      };
    }) || this;
    o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.queryInfo = n, o.queryManager = r, o.waitForOwnResult = nt(a.fetchPolicy), o.isTornDown = !1;
    var s = r.defaultOptions.watchQuery, u = s === void 0 ? {} : s, c = u.fetchPolicy, f = c === void 0 ? "cache-first" : c, h = a.fetchPolicy, l = h === void 0 ? f : h, v = a.initialFetchPolicy, y = v === void 0 ? l === "standby" ? f : l : v;
    o.options = p(p({}, a), { initialFetchPolicy: y, fetchPolicy: l }), o.queryId = n.queryId || r.generateQueryId();
    var g = Me(o.query);
    return o.queryName = g && g.name && g.name.value, o;
  }
  return Object.defineProperty(e.prototype, "query", {
    get: function() {
      return this.lastQuery || this.options.query;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.result = function() {
    var t = this;
    return new Promise(function(r, n) {
      var a = {
        next: function(s) {
          r(s), t.observers.delete(a), t.observers.size || t.queryManager.removeQuery(t.queryId), setTimeout(function() {
            o.unsubscribe();
          }, 0);
        },
        error: n
      }, o = t.subscribe(a);
    });
  }, e.prototype.getCurrentResult = function(t) {
    t === void 0 && (t = !0);
    var r = this.getLastResult(!0), n = this.queryInfo.networkStatus || r && r.networkStatus || D.ready, a = p(p({}, r), { loading: Pe(n), networkStatus: n }), o = this.options.fetchPolicy, s = o === void 0 ? "cache-first" : o;
    if (!(nt(s) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (a.data = u.result), F(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === D.loading && (s === "cache-first" || s === "cache-only") && (a.networkStatus = D.ready, a.loading = !1)) : a.partial = !0, globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && ei(u.missing);
      }
    return t && this.updateLastResult(a), a;
  }, e.prototype.isDifferentFromLastResult = function(t, r) {
    if (!this.last)
      return !0;
    var n = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !Vn(this.query, this.last.result, t, this.variables) : !F(this.last.result, t);
    return n || r && !F(this.last.variables, r);
  }, e.prototype.getLast = function(t, r) {
    var n = this.last;
    if (n && n[t] && (!r || F(n.variables, this.variables)))
      return n[t];
  }, e.prototype.getLastResult = function(t) {
    return this.getLast("result", t);
  }, e.prototype.getLastError = function(t) {
    return this.getLast("error", t);
  }, e.prototype.resetLastResults = function() {
    delete this.last, this.isTornDown = !1;
  }, e.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  }, e.prototype.refetch = function(t) {
    var r, n = {
      pollInterval: 0
    }, a = this.options.fetchPolicy;
    if (a === "cache-and-network" ? n.fetchPolicy = a : a === "no-cache" ? n.fetchPolicy = "no-cache" : n.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && t && zn.call(t, "variables")) {
      var o = Qr(this.query), s = o.variableDefinitions;
      (!s || !s.some(function(u) {
        return u.variable.name.value === "variables";
      })) && globalThis.__DEV__ !== !1 && E.warn(
        18,
        t,
        ((r = o.name) === null || r === void 0 ? void 0 : r.value) || o
      );
    }
    return t && !F(this.options.variables, t) && (n.variables = this.options.variables = p(p({}, this.options.variables), t)), this.queryInfo.resetLastWrite(), this.reobserve(n, D.refetch);
  }, e.prototype.fetchMore = function(t) {
    var r = this, n = p(p({}, t.query ? t : p(p(p(p({}, this.options), { query: this.options.query }), t), { variables: p(p({}, this.options.variables), t.variables) })), { fetchPolicy: "no-cache" });
    n.query = this.transformDocument(n.query);
    var a = this.queryManager.generateQueryId();
    this.lastQuery = t.query ? this.transformDocument(this.options.query) : n.query;
    var o = this.queryInfo, s = o.networkStatus;
    o.networkStatus = D.fetchMore, n.notifyOnNetworkStatusChange && this.observe();
    var u = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(a, n, D.fetchMore).then(function(c) {
      return r.queryManager.removeQuery(a), o.networkStatus === D.fetchMore && (o.networkStatus = s), r.queryManager.cache.batch({
        update: function(f) {
          var h = t.updateQuery;
          h ? f.updateQuery({
            query: r.query,
            variables: r.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(l) {
            return h(l, {
              fetchMoreResult: c.data,
              variables: n.variables
            });
          }) : f.writeQuery({
            query: n.query,
            variables: n.variables,
            data: c.data
          });
        },
        onWatchUpdated: function(f) {
          u.add(f.query);
        }
      }), c;
    }).finally(function() {
      u.has(r.query) || Zr(r);
    });
  }, e.prototype.subscribeToMore = function(t) {
    var r = this, n = this.queryManager.startGraphQLSubscription({
      query: t.document,
      variables: t.variables,
      context: t.context
    }).subscribe({
      next: function(a) {
        var o = t.updateQuery;
        o && r.updateQuery(function(s, u) {
          var c = u.variables;
          return o(s, {
            subscriptionData: a,
            variables: c
          });
        });
      },
      error: function(a) {
        if (t.onError) {
          t.onError(a);
          return;
        }
        globalThis.__DEV__ !== !1 && E.error(19, a);
      }
    });
    return this.subscriptions.add(n), function() {
      r.subscriptions.delete(n) && n.unsubscribe();
    };
  }, e.prototype.setOptions = function(t) {
    return this.reobserve(t);
  }, e.prototype.silentSetOptions = function(t) {
    var r = oe(this.options, t || {});
    Or(this.options, r);
  }, e.prototype.setVariables = function(t) {
    return F(this.variables, t) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = t, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: t
    }, D.setVariables) : Promise.resolve());
  }, e.prototype.updateQuery = function(t) {
    var r = this.queryManager, n = r.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: !0,
      optimistic: !1
    }).result, a = t(n, {
      variables: this.variables
    });
    a && (r.cache.writeQuery({
      query: this.options.query,
      data: a,
      variables: this.variables
    }), r.broadcastQueries());
  }, e.prototype.startPolling = function(t) {
    this.options.pollInterval = t, this.updatePolling();
  }, e.prototype.stopPolling = function() {
    this.options.pollInterval = 0, this.updatePolling();
  }, e.prototype.applyNextFetchPolicy = function(t, r) {
    if (r.nextFetchPolicy) {
      var n = r.fetchPolicy, a = n === void 0 ? "cache-first" : n, o = r.initialFetchPolicy, s = o === void 0 ? a : o;
      a === "standby" || (typeof r.nextFetchPolicy == "function" ? r.fetchPolicy = r.nextFetchPolicy(a, {
        reason: t,
        options: r,
        observable: this,
        initialFetchPolicy: s
      }) : t === "variables-changed" ? r.fetchPolicy = s : r.fetchPolicy = r.nextFetchPolicy);
    }
    return r.fetchPolicy;
  }, e.prototype.fetch = function(t, r) {
    return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, t, r);
  }, e.prototype.updatePolling = function() {
    var t = this;
    if (!this.queryManager.ssrMode) {
      var r = this, n = r.pollingInfo, a = r.options.pollInterval;
      if (!a) {
        n && (clearTimeout(n.timeout), delete this.pollingInfo);
        return;
      }
      if (!(n && n.interval === a)) {
        E(a, 20);
        var o = n || (this.pollingInfo = {});
        o.interval = a;
        var s = function() {
          t.pollingInfo && (Pe(t.queryInfo.networkStatus) ? u() : t.reobserve({
            fetchPolicy: t.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, D.poll).then(u, u));
        }, u = function() {
          var c = t.pollingInfo;
          c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
        };
        u();
      }
    }
  }, e.prototype.updateLastResult = function(t, r) {
    r === void 0 && (r = this.variables);
    var n = this.getLastError();
    return n && this.last && !F(r, this.last.variables) && (n = void 0), this.last = p({ result: this.queryManager.assumeImmutableResults ? t : Lr(t), variables: r }, n ? { error: n } : null);
  }, e.prototype.reobserveAsConcast = function(t, r) {
    var n = this;
    this.isTornDown = !1;
    var a = r === D.refetch || r === D.fetchMore || r === D.poll, o = this.options.variables, s = this.options.fetchPolicy, u = oe(this.options, t || {}), c = a ? u : Or(this.options, u), f = this.transformDocument(c.query);
    this.lastQuery = f, a || (this.updatePolling(), t && t.variables && !F(t.variables, o) && c.fetchPolicy !== "standby" && c.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", c), r === void 0 && (r = D.setVariables)));
    var h = f === c.query ? c : p(p({}, c), { query: f });
    this.waitForOwnResult && (this.waitForOwnResult = nt(h.fetchPolicy));
    var l = function() {
      n.concast === g && (n.waitForOwnResult = !1);
    }, v = h.variables && p({}, h.variables), y = this.fetch(h, r), g = y.concast, m = y.fromLink, d = {
      next: function(O) {
        l(), n.reportResult(O, v);
      },
      error: function(O) {
        l(), n.reportError(O, v);
      }
    };
    return !a && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = g, this.observer = d), g.addObserver(d), g;
  }, e.prototype.reobserve = function(t, r) {
    return this.reobserveAsConcast(t, r).promise;
  }, e.prototype.resubscribeAfterError = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    var n = this.last;
    this.resetLastResults();
    var a = this.subscribe.apply(this, t);
    return this.last = n, a;
  }, e.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, e.prototype.reportResult = function(t, r) {
    var n = this.getLastError(), a = this.isDifferentFromLastResult(t, r);
    (n || !t.partial || this.options.returnPartialData) && this.updateLastResult(t, r), (n || a) && Se(this.observers, "next", t);
  }, e.prototype.reportError = function(t, r) {
    var n = p(p({}, this.getLastResult()), { error: t, errors: t.graphQLErrors, networkStatus: D.error, loading: !1 });
    this.updateLastResult(n, r), Se(this.observers, "error", this.last.error = t);
  }, e.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, e.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(t) {
      return t.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, e.prototype.transformDocument = function(t) {
    return this.queryManager.transform(t);
  }, e;
}(q);
jr(Et);
function Zr(i) {
  var e = i.options, t = e.fetchPolicy, r = e.nextFetchPolicy;
  return t === "cache-and-network" || t === "network-only" ? i.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = r, typeof r == "function" ? r.apply(this, arguments) : t;
    }
  }) : i.reobserve();
}
function Bn(i) {
  globalThis.__DEV__ !== !1 && E.error(21, i.message, i.stack);
}
function ei(i) {
  globalThis.__DEV__ !== !1 && i && globalThis.__DEV__ !== !1 && E.debug(22, i);
}
function nt(i) {
  return i === "network-only" || i === "no-cache" || i === "standby";
}
var ti = function() {
  function i(e) {
    var t = e.cache, r = e.client, n = e.resolvers, a = e.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, r && (this.client = r), n && this.addResolvers(n), a && this.setFragmentMatcher(a);
  }
  return i.prototype.addResolvers = function(e) {
    var t = this;
    this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(r) {
      t.resolvers = Jt(t.resolvers, r);
    }) : this.resolvers = Jt(this.resolvers, e);
  }, i.prototype.setResolvers = function(e) {
    this.resolvers = {}, this.addResolvers(e);
  }, i.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, i.prototype.runResolvers = function(e) {
    var t = e.document, r = e.remoteResult, n = e.context, a = e.variables, o = e.onlyRunForcedResolvers, s = o === void 0 ? !1 : o;
    return J(this, void 0, void 0, function() {
      return $(this, function(u) {
        return t ? [2, this.resolveDocument(t, r.data, n, a, this.fragmentMatcher, s).then(function(c) {
          return p(p({}, r), { data: c.result });
        })] : [2, r];
      });
    });
  }, i.prototype.setFragmentMatcher = function(e) {
    this.fragmentMatcher = e;
  }, i.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, i.prototype.clientQuery = function(e) {
    return _e(["client"], e) && this.resolvers ? e : null;
  }, i.prototype.serverQuery = function(e) {
    return xr(e);
  }, i.prototype.prepareContext = function(e) {
    var t = this.cache;
    return p(p({}, e), { cache: t, getCacheKey: function(r) {
      return t.identify(r);
    } });
  }, i.prototype.addExportedVariables = function(e, t, r) {
    return t === void 0 && (t = {}), r === void 0 && (r = {}), J(this, void 0, void 0, function() {
      return $(this, function(n) {
        return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then(function(a) {
          return p(p({}, t), a.exportedVariables);
        })] : [2, p({}, t)];
      });
    });
  }, i.prototype.shouldForceResolvers = function(e) {
    var t = !1;
    return X(e, {
      Directive: {
        enter: function(r) {
          if (r.name.value === "client" && r.arguments && (t = r.arguments.some(function(n) {
            return n.name.value === "always" && n.value.kind === "BooleanValue" && n.value.value === !0;
          }), t))
            return Fr;
        }
      }
    }), t;
  }, i.prototype.buildRootValueFromCache = function(e, t) {
    return this.cache.diff({
      query: Ii(e),
      variables: t,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, i.prototype.resolveDocument = function(e, t, r, n, a, o) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), a === void 0 && (a = function() {
      return !0;
    }), o === void 0 && (o = !1), J(this, void 0, void 0, function() {
      var s, u, c, f, h, l, v, y, g, m, d;
      return $(this, function(O) {
        return s = Ce(e), u = Ge(e), c = Ue(u), f = this.collectSelectionsToResolve(s, c), h = s.operation, l = h ? h.charAt(0).toUpperCase() + h.slice(1) : "Query", v = this, y = v.cache, g = v.client, m = {
          fragmentMap: c,
          context: p(p({}, r), { cache: y, client: g }),
          variables: n,
          fragmentMatcher: a,
          defaultOperationType: l,
          exportedVariables: {},
          selectionsToResolve: f,
          onlyRunForcedResolvers: o
        }, d = !1, [2, this.resolveSelectionSet(s.selectionSet, d, t, m).then(function(b) {
          return {
            result: b,
            exportedVariables: m.exportedVariables
          };
        })];
      });
    });
  }, i.prototype.resolveSelectionSet = function(e, t, r, n) {
    return J(this, void 0, void 0, function() {
      var a, o, s, u, c, f = this;
      return $(this, function(h) {
        return a = n.fragmentMap, o = n.context, s = n.variables, u = [r], c = function(l) {
          return J(f, void 0, void 0, function() {
            var v, y;
            return $(this, function(g) {
              return !t && !n.selectionsToResolve.has(l) ? [2] : Qe(l, s) ? ee(l) ? [2, this.resolveField(l, t, r, n).then(function(m) {
                var d;
                typeof m < "u" && u.push((d = {}, d[Z(l)] = m, d));
              })] : (Ti(l) ? v = l : (v = a[l.name.value], E(v, 16, l.name.value)), v && v.typeCondition && (y = v.typeCondition.name.value, n.fragmentMatcher(r, y, o)) ? [2, this.resolveSelectionSet(v.selectionSet, t, r, n).then(function(m) {
                u.push(m);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(e.selections.map(c)).then(function() {
          return Qt(u);
        })];
      });
    });
  }, i.prototype.resolveField = function(e, t, r, n) {
    return J(this, void 0, void 0, function() {
      var a, o, s, u, c, f, h, l, v, y = this;
      return $(this, function(g) {
        return r ? (a = n.variables, o = e.name.value, s = Z(e), u = o !== s, c = r[s] || r[o], f = Promise.resolve(c), (!n.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (h = r.__typename || n.defaultOperationType, l = this.resolvers && this.resolvers[h], l && (v = l[u ? o : s], v && (f = Promise.resolve(Mt.withValue(this.cache, v, [
          r,
          Ke(e, a),
          n.context,
          { field: e, fragmentMap: n.fragmentMap }
        ]))))), [2, f.then(function(m) {
          var d, O;
          if (m === void 0 && (m = c), e.directives && e.directives.forEach(function(S) {
            S.name.value === "export" && S.arguments && S.arguments.forEach(function(k) {
              k.name.value === "as" && k.value.kind === "StringValue" && (n.exportedVariables[k.value.value] = m);
            });
          }), !e.selectionSet || m == null)
            return m;
          var b = (O = (d = e.directives) === null || d === void 0 ? void 0 : d.some(function(S) {
            return S.name.value === "client";
          })) !== null && O !== void 0 ? O : !1;
          if (Array.isArray(m))
            return y.resolveSubSelectedArray(e, t || b, m, n);
          if (e.selectionSet)
            return y.resolveSelectionSet(e.selectionSet, t || b, m, n);
        })]) : [2, null];
      });
    });
  }, i.prototype.resolveSubSelectedArray = function(e, t, r, n) {
    var a = this;
    return Promise.all(r.map(function(o) {
      if (o === null)
        return null;
      if (Array.isArray(o))
        return a.resolveSubSelectedArray(e, t, o, n);
      if (e.selectionSet)
        return a.resolveSelectionSet(e.selectionSet, t, o, n);
    }));
  }, i.prototype.collectSelectionsToResolve = function(e, t) {
    var r = function(o) {
      return !Array.isArray(o);
    }, n = this.selectionsToResolveCache;
    function a(o) {
      if (!n.has(o)) {
        var s = /* @__PURE__ */ new Set();
        n.set(o, s), X(o, {
          Directive: function(u, c, f, h, l) {
            u.name.value === "client" && l.forEach(function(v) {
              r(v) && zt(v) && s.add(v);
            });
          },
          FragmentSpread: function(u, c, f, h, l) {
            var v = t[u.name.value];
            E(v, 17, u.name.value);
            var y = a(v);
            y.size > 0 && (l.forEach(function(g) {
              r(g) && zt(g) && s.add(g);
            }), s.add(u), y.forEach(function(g) {
              s.add(g);
            }));
          }
        });
      }
      return n.get(o);
    }
    return a(e);
  }, i;
}(), le = new (U ? WeakMap : Map)();
function at(i, e) {
  var t = i[e];
  typeof t == "function" && (i[e] = function() {
    return le.set(i, (le.get(i) + 1) % 1e15), t.apply(this, arguments);
  });
}
function wr(i) {
  i.notifyTimeout && (clearTimeout(i.notifyTimeout), i.notifyTimeout = void 0);
}
var ot = function() {
  function i(e, t) {
    t === void 0 && (t = e.generateQueryId()), this.queryId = t, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var r = this.cache = e.cache;
    le.has(r) || (le.set(r, 0), at(r, "evict"), at(r, "modify"), at(r, "reset"));
  }
  return i.prototype.init = function(e) {
    var t = e.networkStatus || D.loading;
    return this.variables && this.networkStatus !== D.loading && !F(this.variables, e.variables) && (t = D.setVariables), F(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: e.document,
      variables: e.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: t
    }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
  }, i.prototype.reset = function() {
    wr(this), this.dirty = !1;
  }, i.prototype.getDiff = function() {
    var e = this.getDiffOptions();
    if (this.lastDiff && F(e, this.lastDiff.options))
      return this.lastDiff.diff;
    this.updateWatch(this.variables);
    var t = this.observableQuery;
    if (t && t.options.fetchPolicy === "no-cache")
      return { complete: !1 };
    var r = this.cache.diff(e);
    return this.updateLastDiff(r, e), r;
  }, i.prototype.updateLastDiff = function(e, t) {
    this.lastDiff = e ? {
      diff: e,
      options: t || this.getDiffOptions()
    } : void 0;
  }, i.prototype.getDiffOptions = function(e) {
    var t;
    return e === void 0 && (e = this.variables), {
      query: this.document,
      variables: e,
      returnPartialData: !0,
      optimistic: !0,
      canonizeResults: (t = this.observableQuery) === null || t === void 0 ? void 0 : t.options.canonizeResults
    };
  }, i.prototype.setDiff = function(e) {
    var t = this, r = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(e), !this.dirty && !F(r && r.result, e && e.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return t.notify();
    }, 0)));
  }, i.prototype.setObservableQuery = function(e) {
    var t = this;
    e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var r = t.getDiff();
      r.fromOptimisticTransaction ? e.observe() : Zr(e);
    })) : delete this.oqListener);
  }, i.prototype.notify = function() {
    var e = this;
    wr(this), this.shouldNotify() && this.listeners.forEach(function(t) {
      return t(e);
    }), this.dirty = !1;
  }, i.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (Pe(this.networkStatus) && this.observableQuery) {
      var e = this.observableQuery.options.fetchPolicy;
      if (e !== "cache-only" && e !== "cache-and-network")
        return !1;
    }
    return !0;
  }, i.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = !0, this.reset(), this.cancel(), this.cancel = i.prototype.cancel, this.subscriptions.forEach(function(t) {
        return t.unsubscribe();
      });
      var e = this.observableQuery;
      e && e.stopPolling();
    }
  }, i.prototype.cancel = function() {
  }, i.prototype.updateWatch = function(e) {
    var t = this;
    e === void 0 && (e = this.variables);
    var r = this.observableQuery;
    if (!(r && r.options.fetchPolicy === "no-cache")) {
      var n = p(p({}, this.getDiffOptions(e)), { watcher: this, callback: function(a) {
        return t.setDiff(a);
      } });
      (!this.lastWatch || !F(n, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = n));
    }
  }, i.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, i.prototype.shouldWrite = function(e, t) {
    var r = this.lastWrite;
    return !(r && r.dmCount === le.get(this.cache) && F(t, r.variables) && F(e.data, r.result.data));
  }, i.prototype.markResult = function(e, t, r, n) {
    var a = this, o = new te(), s = N(e.errors) ? e.errors.slice(0) : [];
    if (this.reset(), "incremental" in e && N(e.incremental)) {
      var u = Ar(this.getDiff().result, e);
      e.data = u;
    } else if ("hasNext" in e && e.hasNext) {
      var c = this.getDiff();
      e.data = o.merge(c.result, e.data);
    }
    this.graphQLErrors = s, r.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(r.variables)) : n !== 0 && (kt(e, r.errorPolicy) ? this.cache.performTransaction(function(f) {
      if (a.shouldWrite(e, r.variables))
        f.writeQuery({
          query: t,
          data: e.data,
          variables: r.variables,
          overwrite: n === 1
        }), a.lastWrite = {
          result: e,
          variables: r.variables,
          dmCount: le.get(a.cache)
        };
      else if (a.lastDiff && a.lastDiff.diff.complete) {
        e.data = a.lastDiff.diff.result;
        return;
      }
      var h = a.getDiffOptions(r.variables), l = f.diff(h);
      !a.stopped && F(a.variables, r.variables) && a.updateWatch(r.variables), a.updateLastDiff(l, h), l.complete && (e.data = l.result);
    }) : this.lastWrite = void 0);
  }, i.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = D.ready;
  }, i.prototype.markError = function(e) {
    return this.networkStatus = D.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
  }, i;
}();
function kt(i, e) {
  e === void 0 && (e = "none");
  var t = e === "ignore" || e === "all", r = !je(i);
  return !r && t && i.data && (r = !0), r;
}
var Un = Object.prototype.hasOwnProperty, Hn = function() {
  function i(e) {
    var t = this, r = e.cache, n = e.link, a = e.defaultOptions, o = e.documentTransform, s = e.queryDeduplication, u = s === void 0 ? !1 : s, c = e.onBroadcast, f = e.ssrMode, h = f === void 0 ? !1 : f, l = e.clientAwareness, v = l === void 0 ? {} : l, y = e.localState, g = e.assumeImmutableResults, m = g === void 0 ? !!r.assumeImmutableResults : g;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (U ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    var d = new qr(function(O) {
      return t.cache.transformDocument(O);
    }, { cache: !1 });
    this.cache = r, this.link = n, this.defaultOptions = a || /* @__PURE__ */ Object.create(null), this.queryDeduplication = u, this.clientAwareness = v, this.localState = y || new ti({ cache: r }), this.ssrMode = h, this.assumeImmutableResults = m, this.documentTransform = o ? d.concat(o).concat(d) : d, (this.onBroadcast = c) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return i.prototype.stop = function() {
    var e = this;
    this.queries.forEach(function(t, r) {
      e.stopQueryNoBroadcast(r);
    }), this.cancelPendingFetches(L(23));
  }, i.prototype.cancelPendingFetches = function(e) {
    this.fetchCancelFns.forEach(function(t) {
      return t(e);
    }), this.fetchCancelFns.clear();
  }, i.prototype.mutate = function(e) {
    var t, r, n = e.mutation, a = e.variables, o = e.optimisticResponse, s = e.updateQueries, u = e.refetchQueries, c = u === void 0 ? [] : u, f = e.awaitRefetchQueries, h = f === void 0 ? !1 : f, l = e.update, v = e.onQueryUpdated, y = e.fetchPolicy, g = y === void 0 ? ((t = this.defaultOptions.mutate) === null || t === void 0 ? void 0 : t.fetchPolicy) || "network-only" : y, m = e.errorPolicy, d = m === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.errorPolicy) || "none" : m, O = e.keepRootFields, b = e.context;
    return J(this, void 0, void 0, function() {
      var S, k, w, R;
      return $(this, function(_) {
        switch (_.label) {
          case 0:
            return E(n, 24), E(g === "network-only" || g === "no-cache", 25), S = this.generateMutationId(), n = this.cache.transformForLink(this.transform(n)), k = this.getDocumentInfo(n).hasClientExports, a = this.getVariables(n, a), k ? [4, this.localState.addExportedVariables(n, a, b)] : [3, 2];
          case 1:
            a = _.sent(), _.label = 2;
          case 2:
            return w = this.mutationStore && (this.mutationStore[S] = {
              mutation: n,
              variables: a,
              loading: !0,
              error: null
            }), o && this.markMutationOptimistic(o, {
              mutationId: S,
              document: n,
              variables: a,
              fetchPolicy: g,
              errorPolicy: d,
              context: b,
              updateQueries: s,
              update: l,
              keepRootFields: O
            }), this.broadcastQueries(), R = this, [2, new Promise(function(T, C) {
              return Ze(R.getObservableFromLink(n, p(p({}, b), { optimisticResponse: o }), a, !1), function(x) {
                if (je(x) && d === "none")
                  throw new K({
                    graphQLErrors: vt(x)
                  });
                w && (w.loading = !1, w.error = null);
                var H = p({}, x);
                return typeof c == "function" && (c = c(H)), d === "ignore" && je(H) && delete H.errors, R.markMutationResult({
                  mutationId: S,
                  result: H,
                  document: n,
                  variables: a,
                  fetchPolicy: g,
                  errorPolicy: d,
                  context: b,
                  update: l,
                  updateQueries: s,
                  awaitRefetchQueries: h,
                  refetchQueries: c,
                  removeOptimistic: o ? S : void 0,
                  onQueryUpdated: v,
                  keepRootFields: O
                });
              }).subscribe({
                next: function(x) {
                  R.broadcastQueries(), (!("hasNext" in x) || x.hasNext === !1) && T(x);
                },
                error: function(x) {
                  w && (w.loading = !1, w.error = x), o && R.cache.removeOptimistic(S), R.broadcastQueries(), C(x instanceof K ? x : new K({
                    networkError: x
                  }));
                }
              });
            })];
        }
      });
    });
  }, i.prototype.markMutationResult = function(e, t) {
    var r = this;
    t === void 0 && (t = this.cache);
    var n = e.result, a = [], o = e.fetchPolicy === "no-cache";
    if (!o && kt(n, e.errorPolicy)) {
      if (ve(n) || a.push({
        result: n.data,
        dataId: "ROOT_MUTATION",
        query: e.document,
        variables: e.variables
      }), ve(n) && N(n.incremental)) {
        var s = t.diff({
          id: "ROOT_MUTATION",
          query: this.getDocumentInfo(e.document).asQuery,
          variables: e.variables,
          optimistic: !1,
          returnPartialData: !0
        }), u = void 0;
        s.result && (u = Ar(s.result, n)), typeof u < "u" && (n.data = u, a.push({
          result: u,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }));
      }
      var c = e.updateQueries;
      c && this.queries.forEach(function(h, l) {
        var v = h.observableQuery, y = v && v.queryName;
        if (!(!y || !Un.call(c, y))) {
          var g = c[y], m = r.queries.get(l), d = m.document, O = m.variables, b = t.diff({
            query: d,
            variables: O,
            returnPartialData: !0,
            optimistic: !1
          }), S = b.result, k = b.complete;
          if (k && S) {
            var w = g(S, {
              mutationResult: n,
              queryName: d && lt(d) || void 0,
              queryVariables: O
            });
            w && a.push({
              result: w,
              dataId: "ROOT_QUERY",
              query: d,
              variables: O
            });
          }
        }
      });
    }
    if (a.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
      var f = [];
      if (this.refetchQueries({
        updateCache: function(h) {
          o || a.forEach(function(g) {
            return h.write(g);
          });
          var l = e.update, v = !Wi(n) || ve(n) && !n.hasNext;
          if (l) {
            if (!o) {
              var y = h.diff({
                id: "ROOT_MUTATION",
                query: r.getDocumentInfo(e.document).asQuery,
                variables: e.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              y.complete && (n = p(p({}, n), { data: y.result }), "incremental" in n && delete n.incremental, "hasNext" in n && delete n.hasNext);
            }
            v && l(h, n, {
              context: e.context,
              variables: e.variables
            });
          }
          !o && !e.keepRootFields && v && h.modify({
            id: "ROOT_MUTATION",
            fields: function(g, m) {
              var d = m.fieldName, O = m.DELETE;
              return d === "__typename" ? g : O;
            }
          });
        },
        include: e.refetchQueries,
        optimistic: !1,
        removeOptimistic: e.removeOptimistic,
        onQueryUpdated: e.onQueryUpdated || null
      }).forEach(function(h) {
        return f.push(h);
      }), e.awaitRefetchQueries || e.onQueryUpdated)
        return Promise.all(f).then(function() {
          return n;
        });
    }
    return Promise.resolve(n);
  }, i.prototype.markMutationOptimistic = function(e, t) {
    var r = this, n = typeof e == "function" ? e(t.variables) : e;
    return this.cache.recordOptimisticTransaction(function(a) {
      try {
        r.markMutationResult(p(p({}, t), { result: { data: n } }), a);
      } catch (o) {
        globalThis.__DEV__ !== !1 && E.error(o);
      }
    }, t.mutationId);
  }, i.prototype.fetchQuery = function(e, t, r) {
    return this.fetchConcastWithInfo(e, t, r).concast.promise;
  }, i.prototype.getQueryStore = function() {
    var e = /* @__PURE__ */ Object.create(null);
    return this.queries.forEach(function(t, r) {
      e[r] = {
        variables: t.variables,
        networkStatus: t.networkStatus,
        networkError: t.networkError,
        graphQLErrors: t.graphQLErrors
      };
    }), e;
  }, i.prototype.resetErrors = function(e) {
    var t = this.queries.get(e);
    t && (t.networkError = void 0, t.graphQLErrors = []);
  }, i.prototype.transform = function(e) {
    return this.documentTransform.transformDocument(e);
  }, i.prototype.getDocumentInfo = function(e) {
    var t = this.transformCache;
    if (!t.has(e)) {
      var r = {
        hasClientExports: fi(e),
        hasForcedResolvers: this.localState.shouldForceResolvers(e),
        hasNonreactiveDirective: _e(["nonreactive"], e),
        clientQuery: this.localState.clientQuery(e),
        serverQuery: Ir([
          { name: "client", remove: !0 },
          { name: "connection" },
          { name: "nonreactive" }
        ], e),
        defaultVars: Pt(Me(e)),
        asQuery: p(p({}, e), { definitions: e.definitions.map(function(n) {
          return n.kind === "OperationDefinition" && n.operation !== "query" ? p(p({}, n), { operation: "query" }) : n;
        }) })
      };
      t.set(e, r);
    }
    return t.get(e);
  }, i.prototype.getVariables = function(e, t) {
    return p(p({}, this.getDocumentInfo(e).defaultVars), t);
  }, i.prototype.watchQuery = function(e) {
    var t = this.transform(e.query);
    e = p(p({}, e), { variables: this.getVariables(t, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
    var r = new ot(this), n = new Et({
      queryManager: this,
      queryInfo: r,
      options: e
    });
    return n.lastQuery = t, this.queries.set(n.queryId, r), r.init({
      document: t,
      observableQuery: n,
      variables: n.variables
    }), n;
  }, i.prototype.query = function(e, t) {
    var r = this;
    return t === void 0 && (t = this.generateQueryId()), E(e.query, 26), E(e.query.kind === "Document", 27), E(!e.returnPartialData, 28), E(!e.pollInterval, 29), this.fetchQuery(t, p(p({}, e), { query: this.transform(e.query) })).finally(function() {
      return r.stopQuery(t);
    });
  }, i.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  }, i.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  }, i.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  }, i.prototype.stopQueryInStore = function(e) {
    this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
  }, i.prototype.stopQueryInStoreNoBroadcast = function(e) {
    var t = this.queries.get(e);
    t && t.stop();
  }, i.prototype.clearStore = function(e) {
    return e === void 0 && (e = {
      discardWatches: !0
    }), this.cancelPendingFetches(L(30)), this.queries.forEach(function(t) {
      t.observableQuery ? t.networkStatus = D.loading : t.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
  }, i.prototype.getObservableQueries = function(e) {
    var t = this;
    e === void 0 && (e = "active");
    var r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
    return Array.isArray(e) && e.forEach(function(o) {
      typeof o == "string" ? n.set(o, !1) : mi(o) ? n.set(t.transform(o), !1) : Q(o) && o.query && a.add(o);
    }), this.queries.forEach(function(o, s) {
      var u = o.observableQuery, c = o.document;
      if (u) {
        if (e === "all") {
          r.set(s, u);
          return;
        }
        var f = u.queryName, h = u.options.fetchPolicy;
        if (h === "standby" || e === "active" && !u.hasObservers())
          return;
        (e === "active" || f && n.has(f) || c && n.has(c)) && (r.set(s, u), f && n.set(f, !0), c && n.set(c, !0));
      }
    }), a.size && a.forEach(function(o) {
      var s = ct("legacyOneTimeQuery"), u = t.getQuery(s).init({
        document: o.query,
        variables: o.variables
      }), c = new Et({
        queryManager: t,
        queryInfo: u,
        options: p(p({}, o), { fetchPolicy: "network-only" })
      });
      E(c.queryId === s), u.setObservableQuery(c), r.set(s, c);
    }), globalThis.__DEV__ !== !1 && n.size && n.forEach(function(o, s) {
      o || globalThis.__DEV__ !== !1 && E.warn(typeof s == "string" ? 31 : 32, s);
    }), r;
  }, i.prototype.reFetchObservableQueries = function(e) {
    var t = this;
    e === void 0 && (e = !1);
    var r = [];
    return this.getObservableQueries(e ? "all" : "active").forEach(function(n, a) {
      var o = n.options.fetchPolicy;
      n.resetLastResults(), (e || o !== "standby" && o !== "cache-only") && r.push(n.refetch()), t.getQuery(a).setDiff(null);
    }), this.broadcastQueries(), Promise.all(r);
  }, i.prototype.setObservableQuery = function(e) {
    this.getQuery(e.queryId).setObservableQuery(e);
  }, i.prototype.startGraphQLSubscription = function(e) {
    var t = this, r = e.query, n = e.fetchPolicy, a = e.errorPolicy, o = a === void 0 ? "none" : a, s = e.variables, u = e.context, c = u === void 0 ? {} : u;
    r = this.transform(r), s = this.getVariables(r, s);
    var f = function(l) {
      return t.getObservableFromLink(r, c, l).map(function(v) {
        n !== "no-cache" && (kt(v, o) && t.cache.write({
          query: r,
          result: v.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: l
        }), t.broadcastQueries());
        var y = je(v), g = an(v);
        if (y || g) {
          var m = {};
          if (y && (m.graphQLErrors = v.errors), g && (m.protocolErrors = v.extensions[qt]), o === "none" || g)
            throw new K(m);
        }
        return o === "ignore" && delete v.errors, v;
      });
    };
    if (this.getDocumentInfo(r).hasClientExports) {
      var h = this.localState.addExportedVariables(r, s, c).then(f);
      return new q(function(l) {
        var v = null;
        return h.then(function(y) {
          return v = y.subscribe(l);
        }, l.error), function() {
          return v && v.unsubscribe();
        };
      });
    }
    return f(s);
  }, i.prototype.stopQuery = function(e) {
    this.stopQueryNoBroadcast(e), this.broadcastQueries();
  }, i.prototype.stopQueryNoBroadcast = function(e) {
    this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
  }, i.prototype.removeQuery = function(e) {
    this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
  }, i.prototype.broadcastQueries = function() {
    this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
      return e.notify();
    });
  }, i.prototype.getLocalState = function() {
    return this.localState;
  }, i.prototype.getObservableFromLink = function(e, t, r, n) {
    var a = this, o;
    n === void 0 && (n = (o = t == null ? void 0 : t.queryDeduplication) !== null && o !== void 0 ? o : this.queryDeduplication);
    var s, u = this.getDocumentInfo(e), c = u.serverQuery, f = u.clientQuery;
    if (c) {
      var h = this, l = h.inFlightLinkObservables, v = h.link, y = {
        query: c,
        variables: r,
        operationName: lt(c) || void 0,
        context: this.prepareContext(p(p({}, t), { forceFetch: !n }))
      };
      if (t = y.context, n) {
        var g = Mr(c), m = l.get(g) || /* @__PURE__ */ new Map();
        l.set(g, m);
        var d = ae(r);
        if (s = m.get(d), !s) {
          var O = new ce([
            dt(v, y)
          ]);
          m.set(d, s = O), O.beforeNext(function() {
            m.delete(d) && m.size < 1 && l.delete(g);
          });
        }
      } else
        s = new ce([
          dt(v, y)
        ]);
    } else
      s = new ce([q.of({ data: {} })]), t = this.prepareContext(t);
    return f && (s = Ze(s, function(b) {
      return a.localState.runResolvers({
        document: f,
        remoteResult: b,
        context: t,
        variables: r
      });
    })), s;
  }, i.prototype.getResultsFromLink = function(e, t, r) {
    var n = e.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(r.query);
    return Ze(this.getObservableFromLink(a, r.context, r.variables), function(o) {
      var s = vt(o), u = s.length > 0;
      if (n >= e.lastRequestId) {
        if (u && r.errorPolicy === "none")
          throw e.markError(new K({
            graphQLErrors: s
          }));
        e.markResult(o, a, r, t), e.markReady();
      }
      var c = {
        data: o.data,
        loading: !1,
        networkStatus: D.ready
      };
      return u && r.errorPolicy !== "ignore" && (c.errors = s, c.networkStatus = D.error), c;
    }, function(o) {
      var s = on(o) ? o : new K({ networkError: o });
      throw n >= e.lastRequestId && e.markError(s), s;
    });
  }, i.prototype.fetchConcastWithInfo = function(e, t, r) {
    var n = this;
    r === void 0 && (r = D.loading);
    var a = t.query, o = this.getVariables(a, t.variables), s = this.getQuery(e), u = this.defaultOptions.watchQuery, c = t.fetchPolicy, f = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, h = t.errorPolicy, l = h === void 0 ? u && u.errorPolicy || "none" : h, v = t.returnPartialData, y = v === void 0 ? !1 : v, g = t.notifyOnNetworkStatusChange, m = g === void 0 ? !1 : g, d = t.context, O = d === void 0 ? {} : d, b = Object.assign({}, t, {
      query: a,
      variables: o,
      fetchPolicy: f,
      errorPolicy: l,
      returnPartialData: y,
      notifyOnNetworkStatusChange: m,
      context: O
    }), S = function(T) {
      b.variables = T;
      var C = n.fetchQueryByPolicy(s, b, r);
      return b.fetchPolicy !== "standby" && C.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", t), C;
    }, k = function() {
      return n.fetchCancelFns.delete(e);
    };
    this.fetchCancelFns.set(e, function(T) {
      k(), setTimeout(function() {
        return w.cancel(T);
      });
    });
    var w, R;
    if (this.getDocumentInfo(b.query).hasClientExports)
      w = new ce(this.localState.addExportedVariables(b.query, b.variables, b.context).then(S).then(function(T) {
        return T.sources;
      })), R = !0;
    else {
      var _ = S(b.variables);
      R = _.fromLink, w = new ce(_.sources);
    }
    return w.promise.then(k, k), {
      concast: w,
      fromLink: R
    };
  }, i.prototype.refetchQueries = function(e) {
    var t = this, r = e.updateCache, n = e.include, a = e.optimistic, o = a === void 0 ? !1 : a, s = e.removeOptimistic, u = s === void 0 ? o ? ct("refetchQueries") : void 0 : s, c = e.onQueryUpdated, f = /* @__PURE__ */ new Map();
    n && this.getObservableQueries(n).forEach(function(l, v) {
      f.set(v, {
        oq: l,
        lastDiff: t.getQuery(v).getDiff()
      });
    });
    var h = /* @__PURE__ */ new Map();
    return r && this.cache.batch({
      update: r,
      optimistic: o && u || !1,
      removeOptimistic: u,
      onWatchUpdated: function(l, v, y) {
        var g = l.watcher instanceof ot && l.watcher.observableQuery;
        if (g) {
          if (c) {
            f.delete(g.queryId);
            var m = c(g, v, y);
            return m === !0 && (m = g.refetch()), m !== !1 && h.set(g, m), m;
          }
          c !== null && f.set(g.queryId, { oq: g, lastDiff: y, diff: v });
        }
      }
    }), f.size && f.forEach(function(l, v) {
      var y = l.oq, g = l.lastDiff, m = l.diff, d;
      if (c) {
        if (!m) {
          var O = y.queryInfo;
          O.reset(), m = O.getDiff();
        }
        d = c(y, m, g);
      }
      (!c || d === !0) && (d = y.refetch()), d !== !1 && h.set(y, d), v.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(v);
    }), u && this.cache.removeOptimistic(u), h;
  }, i.prototype.fetchQueryByPolicy = function(e, t, r) {
    var n = this, a = t.query, o = t.variables, s = t.fetchPolicy, u = t.refetchWritePolicy, c = t.errorPolicy, f = t.returnPartialData, h = t.context, l = t.notifyOnNetworkStatusChange, v = e.networkStatus;
    e.init({
      document: a,
      variables: o,
      networkStatus: r
    });
    var y = function() {
      return e.getDiff();
    }, g = function(S, k) {
      k === void 0 && (k = e.networkStatus || D.loading);
      var w = S.result;
      globalThis.__DEV__ !== !1 && !f && !F(w, {}) && ei(S.missing);
      var R = function(_) {
        return q.of(p({ data: _, loading: Pe(k), networkStatus: k }, S.complete ? null : { partial: !0 }));
      };
      return w && n.getDocumentInfo(a).hasForcedResolvers ? n.localState.runResolvers({
        document: a,
        remoteResult: { data: w },
        context: h,
        variables: o,
        onlyRunForcedResolvers: !0
      }).then(function(_) {
        return R(_.data || void 0);
      }) : c === "none" && k === D.refetch && Array.isArray(S.missing) ? R(void 0) : R(w);
    }, m = s === "no-cache" ? 0 : r === D.refetch && u !== "merge" ? 1 : 2, d = function() {
      return n.getResultsFromLink(e, m, {
        query: a,
        variables: o,
        context: h,
        fetchPolicy: s,
        errorPolicy: c
      });
    }, O = l && typeof v == "number" && v !== r && Pe(r);
    switch (s) {
      default:
      case "cache-first": {
        var b = y();
        return b.complete ? {
          fromLink: !1,
          sources: [g(b, e.markReady())]
        } : f || O ? {
          fromLink: !0,
          sources: [g(b), d()]
        } : { fromLink: !0, sources: [d()] };
      }
      case "cache-and-network": {
        var b = y();
        return b.complete || f || O ? {
          fromLink: !0,
          sources: [g(b), d()]
        } : { fromLink: !0, sources: [d()] };
      }
      case "cache-only":
        return {
          fromLink: !1,
          sources: [g(y(), e.markReady())]
        };
      case "network-only":
        return O ? {
          fromLink: !0,
          sources: [g(y()), d()]
        } : { fromLink: !0, sources: [d()] };
      case "no-cache":
        return O ? {
          fromLink: !0,
          sources: [g(e.getDiff()), d()]
        } : { fromLink: !0, sources: [d()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, i.prototype.getQuery = function(e) {
    return e && !this.queries.has(e) && this.queries.set(e, new ot(this, e)), this.queries.get(e);
  }, i.prototype.prepareContext = function(e) {
    e === void 0 && (e = {});
    var t = this.localState.prepareContext(e);
    return p(p({}, t), { clientAwareness: this.clientAwareness });
  }, i;
}(), Sr = !1, la = function() {
  function i(e) {
    var t = this;
    if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
      throw L(13);
    var r = e.uri, n = e.credentials, a = e.headers, o = e.cache, s = e.documentTransform, u = e.ssrMode, c = u === void 0 ? !1 : u, f = e.ssrForceFetchDelay, h = f === void 0 ? 0 : f, l = e.connectToDevTools, v = l === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== !1 : l, y = e.queryDeduplication, g = y === void 0 ? !0 : y, m = e.defaultOptions, d = e.assumeImmutableResults, O = d === void 0 ? o.assumeImmutableResults : d, b = e.resolvers, S = e.typeDefs, k = e.fragmentMatcher, w = e.name, R = e.version, _ = e.link;
    _ || (_ = r ? new En({ uri: r, credentials: n, headers: a }) : ie.empty()), this.link = _, this.cache = o, this.disableNetworkFetches = c || h > 0, this.queryDeduplication = g, this.defaultOptions = m || /* @__PURE__ */ Object.create(null), this.typeDefs = S, h && setTimeout(function() {
      return t.disableNetworkFetches = !1;
    }, h), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Rt, this.localState = new ti({
      cache: o,
      client: this,
      resolvers: b,
      fragmentMatcher: k
    }), this.queryManager = new Hn({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      documentTransform: s,
      queryDeduplication: g,
      ssrMode: c,
      clientAwareness: {
        name: w,
        version: R
      },
      localState: this.localState,
      assumeImmutableResults: O,
      onBroadcast: v ? function() {
        t.devToolsHookCb && t.devToolsHookCb({
          action: {},
          state: {
            queries: t.queryManager.getQueryStore(),
            mutations: t.queryManager.mutationStore || {}
          },
          dataWithOptimisticResults: t.cache.extract(!0)
        });
      } : void 0
    }), v && this.connectToDevTools();
  }
  return i.prototype.connectToDevTools = function() {
    if (typeof window == "object") {
      var e = window, t = Symbol.for("apollo.devtools");
      (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this;
    }
    !Sr && globalThis.__DEV__ !== !1 && (Sr = !0, setTimeout(function() {
      if (typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
        var r = window.navigator, n = r && r.userAgent, a = void 0;
        typeof n == "string" && (n.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : n.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && E.log("Download the Apollo DevTools for a better development experience: %s", a);
      }
    }, 1e4));
  }, Object.defineProperty(i.prototype, "documentTransform", {
    get: function() {
      return this.queryManager.documentTransform;
    },
    enumerable: !1,
    configurable: !0
  }), i.prototype.stop = function() {
    this.queryManager.stop();
  }, i.prototype.watchQuery = function(e) {
    return this.defaultOptions.watchQuery && (e = ne(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = p(p({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
  }, i.prototype.query = function(e) {
    return this.defaultOptions.query && (e = ne(this.defaultOptions.query, e)), E(e.fetchPolicy !== "cache-and-network", 14), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = p(p({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
  }, i.prototype.mutate = function(e) {
    return this.defaultOptions.mutate && (e = ne(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
  }, i.prototype.subscribe = function(e) {
    return this.queryManager.startGraphQLSubscription(e);
  }, i.prototype.readQuery = function(e, t) {
    return t === void 0 && (t = !1), this.cache.readQuery(e, t);
  }, i.prototype.readFragment = function(e, t) {
    return t === void 0 && (t = !1), this.cache.readFragment(e, t);
  }, i.prototype.writeQuery = function(e) {
    var t = this.cache.writeQuery(e);
    return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
  }, i.prototype.writeFragment = function(e) {
    var t = this.cache.writeFragment(e);
    return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
  }, i.prototype.__actionHookForDevTools = function(e) {
    this.devToolsHookCb = e;
  }, i.prototype.__requestRaw = function(e) {
    return dt(this.link, e);
  }, i.prototype.resetStore = function() {
    var e = this;
    return Promise.resolve().then(function() {
      return e.queryManager.clearStore({
        discardWatches: !1
      });
    }).then(function() {
      return Promise.all(e.resetStoreCallbacks.map(function(t) {
        return t();
      }));
    }).then(function() {
      return e.reFetchObservableQueries();
    });
  }, i.prototype.clearStore = function() {
    var e = this;
    return Promise.resolve().then(function() {
      return e.queryManager.clearStore({
        discardWatches: !0
      });
    }).then(function() {
      return Promise.all(e.clearStoreCallbacks.map(function(t) {
        return t();
      }));
    });
  }, i.prototype.onResetStore = function(e) {
    var t = this;
    return this.resetStoreCallbacks.push(e), function() {
      t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(r) {
        return r !== e;
      });
    };
  }, i.prototype.onClearStore = function(e) {
    var t = this;
    return this.clearStoreCallbacks.push(e), function() {
      t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(r) {
        return r !== e;
      });
    };
  }, i.prototype.reFetchObservableQueries = function(e) {
    return this.queryManager.reFetchObservableQueries(e);
  }, i.prototype.refetchQueries = function(e) {
    var t = this.queryManager.refetchQueries(e), r = [], n = [];
    t.forEach(function(o, s) {
      r.push(s), n.push(o);
    });
    var a = Promise.all(n);
    return a.queries = r, a.results = n, a.catch(function(o) {
      globalThis.__DEV__ !== !1 && E.debug(15, o);
    }), a;
  }, i.prototype.getObservableQueries = function(e) {
    return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
  }, i.prototype.extract = function(e) {
    return this.cache.extract(e);
  }, i.prototype.restore = function(e) {
    return this.cache.restore(e);
  }, i.prototype.addResolvers = function(e) {
    this.localState.addResolvers(e);
  }, i.prototype.setResolvers = function(e) {
    this.localState.setResolvers(e);
  }, i.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  }, i.prototype.setLocalStateFragmentMatcher = function(e) {
    this.localState.setFragmentMatcher(e);
  }, i.prototype.setLink = function(e) {
    this.link = this.queryManager.link = e;
  }, i;
}();
const Le = window.React;
var Er = Dt ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function Lt() {
  E("createContext" in Le, 43);
  var i = Le.createContext[Er];
  return i || (Object.defineProperty(Le.createContext, Er, {
    value: i = Le.createContext({}),
    enumerable: !1,
    writable: !1,
    configurable: !0
  }), i.displayName = "ApolloContext"), i;
}
const st = window.React;
var ha = function(i) {
  var e = i.client, t = i.children, r = Lt(), n = st.useContext(r), a = st.useMemo(function() {
    return p(p({}, n), { client: e || n.client });
  }, [n, e]);
  return E(a.client, 44), st.createElement(r.Provider, { value: a }, t);
};
const Kn = window.React;
function jt(i) {
  var e = Kn.useContext(Lt()), t = i || e.client;
  return E(!!t, 47), t;
}
const Ve = window.React;
var kr = !1, Gn = "useSyncExternalStore", Jn = Ve[Gn], ri = Jn || function(i, e, t) {
  var r = e();
  globalThis.__DEV__ !== !1 && !kr && r !== e() && (kr = !0, globalThis.__DEV__ !== !1 && E.error(56));
  var n = Ve.useState({
    inst: { value: r, getSnapshot: e }
  }), a = n[0].inst, o = n[1];
  return di ? Ve.useLayoutEffect(function() {
    Object.assign(a, { value: r, getSnapshot: e }), ut(a) && o({ inst: a });
  }, [i, r, e]) : Object.assign(a, { value: r, getSnapshot: e }), Ve.useEffect(function() {
    return ut(a) && o({ inst: a }), i(function() {
      ut(a) && o({ inst: a });
    });
  }, [i]), r;
};
function ut(i) {
  var e = i.value, t = i.getSnapshot;
  try {
    return e !== t();
  } catch {
    return !0;
  }
}
var W;
(function(i) {
  i[i.Query = 0] = "Query", i[i.Mutation = 1] = "Mutation", i[i.Subscription = 2] = "Subscription";
})(W || (W = {}));
var Rr = /* @__PURE__ */ new Map();
function _r(i) {
  var e;
  switch (i) {
    case W.Query:
      e = "Query";
      break;
    case W.Mutation:
      e = "Mutation";
      break;
    case W.Subscription:
      e = "Subscription";
      break;
  }
  return e;
}
function $n(i) {
  var e = Rr.get(i);
  if (e)
    return e;
  var t, r, n;
  E(!!i && !!i.kind, 57, i);
  for (var a = [], o = [], s = [], u = [], c = 0, f = i.definitions; c < f.length; c++) {
    var h = f[c];
    if (h.kind === "FragmentDefinition") {
      a.push(h);
      continue;
    }
    if (h.kind === "OperationDefinition")
      switch (h.operation) {
        case "query":
          o.push(h);
          break;
        case "mutation":
          s.push(h);
          break;
        case "subscription":
          u.push(h);
          break;
      }
  }
  E(!a.length || o.length || s.length || u.length, 58), E(
    o.length + s.length + u.length <= 1,
    59,
    i,
    o.length,
    u.length,
    s.length
  ), r = o.length ? W.Query : W.Mutation, !o.length && !s.length && (r = W.Subscription);
  var l = o.length ? o : s.length ? s : u;
  E(l.length === 1, 60, i, l.length);
  var v = l[0];
  t = v.variableDefinitions || [], v.name && v.name.kind === "Name" ? n = v.name.value : n = "data";
  var y = { name: n, type: r, variables: t };
  return Rr.set(i, y), y;
}
function ii(i, e) {
  var t = $n(i), r = _r(e), n = _r(t.type);
  E(
    t.type === e,
    61,
    r,
    r,
    n
  );
}
const Re = window.React;
var Yn = Object.prototype.hasOwnProperty;
function va(i, e) {
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null)), ni(jt(e.client), i).useQuery(e);
}
function ni(i, e) {
  var t = Re.useRef();
  (!t.current || i !== t.current.client || e !== t.current.query) && (t.current = new Xn(i, e, t.current));
  var r = t.current;
  return r.forceUpdateState = Re.useReducer(function(n) {
    return n + 1;
  }, 0)[1], r;
}
var Xn = function() {
  function i(e, t, r) {
    var n = this;
    this.client = e, this.query = t, this.forceUpdate = function() {
      return n.forceUpdateState();
    }, this.ssrDisabledResult = De({
      loading: !0,
      data: void 0,
      error: void 0,
      networkStatus: D.loading
    }), this.skipStandbyResult = De({
      loading: !1,
      data: void 0,
      error: void 0,
      networkStatus: D.ready
    }), this.toQueryResultCache = new (U ? WeakMap : Map)(), ii(t, W.Query);
    var a = r && r.result, o = a && a.data;
    o && (this.previousData = o);
  }
  return i.prototype.forceUpdateState = function() {
    globalThis.__DEV__ !== !1 && E.warn(48);
  }, i.prototype.executeQuery = function(e) {
    var t = this, r;
    e.query && Object.assign(this, { query: e.query }), this.watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = e);
    var n = this.observable.reobserveAsConcast(this.getObsQueryOptions());
    return this.previousData = ((r = this.result) === null || r === void 0 ? void 0 : r.data) || this.previousData, this.result = void 0, this.forceUpdate(), new Promise(function(a) {
      var o;
      n.subscribe({
        next: function(s) {
          o = s;
        },
        error: function() {
          a(t.toQueryResult(t.observable.getCurrentResult()));
        },
        complete: function() {
          a(t.toQueryResult(o));
        }
      });
    });
  }, i.prototype.useQuery = function(e) {
    var t = this;
    this.renderPromises = Re.useContext(Lt()).renderPromises, this.useOptions(e);
    var r = this.useObservableQuery(), n = ri(Re.useCallback(function(a) {
      if (t.renderPromises)
        return function() {
        };
      t.forceUpdate = a;
      var o = function() {
        var c = t.result, f = r.getCurrentResult();
        c && c.loading === f.loading && c.networkStatus === f.networkStatus && F(c.data, f.data) || t.setResult(f);
      }, s = function(c) {
        if (u.unsubscribe(), u = r.resubscribeAfterError(o, s), !Yn.call(c, "graphQLErrors"))
          throw c;
        var f = t.result;
        (!f || f && f.loading || !F(c, f.error)) && t.setResult({
          data: f && f.data,
          error: c,
          loading: !1,
          networkStatus: D.error
        });
      }, u = r.subscribe(o, s);
      return function() {
        setTimeout(function() {
          return u.unsubscribe();
        }), t.forceUpdate = function() {
          return t.forceUpdateState();
        };
      };
    }, [
      r,
      this.renderPromises,
      this.client.disableNetworkFetches
    ]), function() {
      return t.getCurrentResult();
    }, function() {
      return t.getCurrentResult();
    });
    return this.unsafeHandlePartialRefetch(n), this.toQueryResult(n);
  }, i.prototype.useOptions = function(e) {
    var t, r = this.createWatchQueryOptions(this.queryHookOptions = e), n = this.watchQueryOptions;
    F(r, n) || (this.watchQueryOptions = r, n && this.observable && (this.observable.reobserve(this.getObsQueryOptions()), this.previousData = ((t = this.result) === null || t === void 0 ? void 0 : t.data) || this.previousData, this.result = void 0)), this.onCompleted = e.onCompleted || i.prototype.onCompleted, this.onError = e.onError || i.prototype.onError, (this.renderPromises || this.client.disableNetworkFetches) && this.queryHookOptions.ssr === !1 && !this.queryHookOptions.skip ? this.result = this.ssrDisabledResult : this.queryHookOptions.skip || this.watchQueryOptions.fetchPolicy === "standby" ? this.result = this.skipStandbyResult : (this.result === this.ssrDisabledResult || this.result === this.skipStandbyResult) && (this.result = void 0);
  }, i.prototype.getObsQueryOptions = function() {
    var e = [], t = this.client.defaultOptions.watchQuery;
    return t && e.push(t), this.queryHookOptions.defaultOptions && e.push(this.queryHookOptions.defaultOptions), e.push(oe(this.observable && this.observable.options, this.watchQueryOptions)), e.reduce(ne);
  }, i.prototype.createWatchQueryOptions = function(e) {
    var t;
    e === void 0 && (e = {});
    var r = e.skip, n = z(e, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]), a = Object.assign(n, { query: this.query });
    if (this.renderPromises && (a.fetchPolicy === "network-only" || a.fetchPolicy === "cache-and-network") && (a.fetchPolicy = "cache-first"), a.variables || (a.variables = {}), r) {
      var o = a.fetchPolicy, s = o === void 0 ? this.getDefaultFetchPolicy() : o, u = a.initialFetchPolicy, c = u === void 0 ? s : u;
      Object.assign(a, {
        initialFetchPolicy: c,
        fetchPolicy: "standby"
      });
    } else
      a.fetchPolicy || (a.fetchPolicy = ((t = this.observable) === null || t === void 0 ? void 0 : t.options.initialFetchPolicy) || this.getDefaultFetchPolicy());
    return a;
  }, i.prototype.getDefaultFetchPolicy = function() {
    var e, t;
    return ((e = this.queryHookOptions.defaultOptions) === null || e === void 0 ? void 0 : e.fetchPolicy) || ((t = this.client.defaultOptions.watchQuery) === null || t === void 0 ? void 0 : t.fetchPolicy) || "cache-first";
  }, i.prototype.onCompleted = function(e) {
  }, i.prototype.onError = function(e) {
  }, i.prototype.useObservableQuery = function() {
    var e = this.observable = this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions) || this.observable || this.client.watchQuery(this.getObsQueryOptions());
    this.obsQueryFields = Re.useMemo(function() {
      return {
        refetch: e.refetch.bind(e),
        reobserve: e.reobserve.bind(e),
        fetchMore: e.fetchMore.bind(e),
        updateQuery: e.updateQuery.bind(e),
        startPolling: e.startPolling.bind(e),
        stopPolling: e.stopPolling.bind(e),
        subscribeToMore: e.subscribeToMore.bind(e)
      };
    }, [e]);
    var t = !(this.queryHookOptions.ssr === !1 || this.queryHookOptions.skip);
    return this.renderPromises && t && (this.renderPromises.registerSSRObservable(e), e.getCurrentResult().loading && this.renderPromises.addObservableQueryPromise(e)), e;
  }, i.prototype.setResult = function(e) {
    var t = this.result;
    t && t.data && (this.previousData = t.data), this.result = e, this.forceUpdate(), this.handleErrorOrCompleted(e, t);
  }, i.prototype.handleErrorOrCompleted = function(e, t) {
    var r = this;
    if (!e.loading) {
      var n = this.toApolloError(e);
      Promise.resolve().then(function() {
        n ? r.onError(n) : e.data && (t == null ? void 0 : t.networkStatus) !== e.networkStatus && e.networkStatus === D.ready && r.onCompleted(e.data);
      }).catch(function(a) {
        globalThis.__DEV__ !== !1 && E.warn(a);
      });
    }
  }, i.prototype.toApolloError = function(e) {
    return N(e.errors) ? new K({ graphQLErrors: e.errors }) : e.error;
  }, i.prototype.getCurrentResult = function() {
    return this.result || this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult()), this.result;
  }, i.prototype.toQueryResult = function(e) {
    var t = this.toQueryResultCache.get(e);
    if (t)
      return t;
    var r = e.data, n = z(e, ["data", "partial"]);
    return this.toQueryResultCache.set(e, t = p(p(p({ data: r }, n), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData })), !t.error && N(e.errors) && (t.error = new K({ graphQLErrors: e.errors })), t;
  }, i.prototype.unsafeHandlePartialRefetch = function(e) {
    e.partial && this.queryHookOptions.partialRefetch && !e.loading && (!e.data || Object.keys(e.data).length === 0) && this.observable.options.fetchPolicy !== "cache-only" && (Object.assign(e, {
      loading: !0,
      networkStatus: D.refetch
    }), this.observable.refetch());
  }, i;
}();
const Oe = window.React;
var Zn = [
  "refetch",
  "reobserve",
  "fetchMore",
  "updateQuery",
  "startPolling",
  "subscribeToMore"
];
function pa(i, e) {
  var t, r = Oe.useRef(), n = Oe.useRef(), a = Oe.useRef(), o = ne(e, r.current || {}), s = (t = o == null ? void 0 : o.query) !== null && t !== void 0 ? t : i;
  n.current = o, a.current = s;
  var u = ni(jt(e && e.client), s), c = u.useQuery(p(p({}, o), { skip: !r.current })), f = c.observable.options.initialFetchPolicy || u.getDefaultFetchPolicy(), h = Object.assign(c, {
    called: !!r.current
  }), l = Oe.useMemo(function() {
    for (var y = {}, g = function(b) {
      var S = h[b];
      y[b] = function() {
        return r.current || (r.current = /* @__PURE__ */ Object.create(null), u.forceUpdateState()), S.apply(this, arguments);
      };
    }, m = 0, d = Zn; m < d.length; m++) {
      var O = d[m];
      g(O);
    }
    return y;
  }, []);
  Object.assign(h, l);
  var v = Oe.useCallback(function(y) {
    r.current = y ? p(p({}, y), { fetchPolicy: y.fetchPolicy || f }) : {
      fetchPolicy: f
    };
    var g = ne(n.current, p({ query: a.current }, r.current)), m = u.executeQuery(p(p({}, g), { skip: !1 })).then(function(d) {
      return Object.assign(d, l);
    });
    return m.catch(function() {
    }), m;
  }, []);
  return [v, h];
}
const we = window.React;
function da(i, e) {
  var t = jt(e == null ? void 0 : e.client);
  ii(i, W.Mutation);
  var r = we.useState({
    called: !1,
    loading: !1,
    client: t
  }), n = r[0], a = r[1], o = we.useRef({
    result: n,
    mutationId: 0,
    isMounted: !0,
    client: t,
    mutation: i,
    options: e
  });
  Object.assign(o.current, { client: t, options: e, mutation: i });
  var s = we.useCallback(function(c) {
    c === void 0 && (c = {});
    var f = o.current, h = f.options, l = f.mutation, v = p(p({}, h), { mutation: l }), y = c.client || o.current.client;
    !o.current.result.loading && !v.ignoreResults && o.current.isMounted && a(o.current.result = {
      loading: !0,
      error: void 0,
      data: void 0,
      called: !0,
      client: y
    });
    var g = ++o.current.mutationId, m = ne(v, c);
    return y.mutate(m).then(function(d) {
      var O, b, S = d.data, k = d.errors, w = k && k.length > 0 ? new K({ graphQLErrors: k }) : void 0, R = c.onError || ((O = o.current.options) === null || O === void 0 ? void 0 : O.onError);
      if (w && R && R(w, m), g === o.current.mutationId && !m.ignoreResults) {
        var _ = {
          called: !0,
          loading: !1,
          data: S,
          error: w,
          client: y
        };
        o.current.isMounted && !F(o.current.result, _) && a(o.current.result = _);
      }
      var T = c.onCompleted || ((b = o.current.options) === null || b === void 0 ? void 0 : b.onCompleted);
      return w || T == null || T(d.data, m), d;
    }).catch(function(d) {
      var O;
      if (g === o.current.mutationId && o.current.isMounted) {
        var b = {
          loading: !1,
          error: d,
          data: void 0,
          called: !0,
          client: y
        };
        F(o.current.result, b) || a(o.current.result = b);
      }
      var S = c.onError || ((O = o.current.options) === null || O === void 0 ? void 0 : O.onError);
      if (S)
        return S(d, m), { data: void 0, errors: d };
      throw d;
    });
  }, []), u = we.useCallback(function() {
    o.current.isMounted && a({ called: !1, loading: !1, client: t });
  }, []);
  return we.useEffect(function() {
    return o.current.isMounted = !0, function() {
      o.current.isMounted = !1;
    };
  }, []), [s, p({ reset: u }, n)];
}
const ea = window.React;
function ya(i) {
  return ri(ea.useCallback(function(e) {
    return i.onNextChange(function t() {
      e(), i.onNextChange(t);
    });
  }, [i]), i, i);
}
function ta(i) {
  return new ie(function(e, t) {
    return new q(function(r) {
      var n, a, o;
      try {
        n = t(e).subscribe({
          next: function(s) {
            if (s.errors && (o = i({
              graphQLErrors: s.errors,
              response: s,
              operation: e,
              forward: t
            }), o)) {
              a = o.subscribe({
                next: r.next.bind(r),
                error: r.error.bind(r),
                complete: r.complete.bind(r)
              });
              return;
            }
            r.next(s);
          },
          error: function(s) {
            if (o = i({
              operation: e,
              networkError: s,
              graphQLErrors: s && s.result && s.result.errors,
              forward: t
            }), o) {
              a = o.subscribe({
                next: r.next.bind(r),
                error: r.error.bind(r),
                complete: r.complete.bind(r)
              });
              return;
            }
            r.error(s);
          },
          complete: function() {
            o || r.complete.bind(r)();
          }
        });
      } catch (s) {
        i({ networkError: s, operation: e, forward: t }), r.error(s);
      }
      return function() {
        n && n.unsubscribe(), a && n.unsubscribe();
      };
    });
  });
}
(function(i) {
  B(e, i);
  function e(t) {
    var r = i.call(this) || this;
    return r.link = ta(t), r;
  }
  return e.prototype.request = function(t, r) {
    return this.link.request(t, r);
  }, e;
})(ie);
export {
  la as A,
  fa as I,
  ie as a,
  pa as b,
  Sn as c,
  da as d,
  ya as e,
  ca as f,
  ha as g,
  on as i,
  In as m,
  ta as o,
  va as u
};
//# sourceMappingURL=@apollo.9c09ab32.js.map
