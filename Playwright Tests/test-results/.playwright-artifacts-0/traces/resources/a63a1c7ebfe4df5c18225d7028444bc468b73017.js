import { s as Z, a as E, b as ee } from "./css-vendor.ea226be1.js";
import { _ as v, b as L, c as z, d as M, a as te } from "./@babel.7bf9beb3.js";
import { i as re } from "./is-in-browser.06a13cf8.js";
var ne = {}.constructor;
function w(a) {
  if (a == null || typeof a != "object")
    return a;
  if (Array.isArray(a))
    return a.map(w);
  if (a.constructor !== ne)
    return a;
  var r = {};
  for (var n in a)
    r[n] = w(a[n]);
  return r;
}
function D(a, r, n) {
  a === void 0 && (a = "unnamed");
  var e = n.jss, t = w(r), i = e.plugins.onCreateRule(a, t, n);
  return i || null;
}
var N = function(r, n) {
  for (var e = "", t = 0; t < r.length && r[t] !== "!important"; t++)
    e && (e += n), e += r[t];
  return e;
}, y = function(r, n) {
  if (n === void 0 && (n = !1), !Array.isArray(r))
    return r;
  var e = "";
  if (Array.isArray(r[0]))
    for (var t = 0; t < r.length && r[t] !== "!important"; t++)
      e && (e += ", "), e += N(r[t], " ");
  else
    e = N(r, ", ");
  return !n && r[r.length - 1] === "!important" && (e += " !important"), e;
};
function R(a) {
  return a && a.format === !1 ? {
    linebreak: "",
    space: ""
  } : {
    linebreak: `
`,
    space: " "
  };
}
function m(a, r) {
  for (var n = "", e = 0; e < r; e++)
    n += "  ";
  return n + a;
}
function x(a, r, n) {
  n === void 0 && (n = {});
  var e = "";
  if (!r)
    return e;
  var t = n, i = t.indent, s = i === void 0 ? 0 : i, u = r.fallbacks;
  n.format === !1 && (s = -1 / 0);
  var o = R(n), f = o.linebreak, l = o.space;
  if (a && s++, u)
    if (Array.isArray(u))
      for (var h = 0; h < u.length; h++) {
        var g = u[h];
        for (var d in g) {
          var c = g[d];
          c != null && (e && (e += f), e += m(d + ":" + l + y(c) + ";", s));
        }
      }
    else
      for (var p in u) {
        var b = u[p];
        b != null && (e && (e += f), e += m(p + ":" + l + y(b) + ";", s));
      }
  for (var k in r) {
    var q = r[k];
    q != null && k !== "fallbacks" && (e && (e += f), e += m(k + ":" + l + y(q) + ";", s));
  }
  return !e && !n.allowEmpty || !a ? e : (s--, e && (e = "" + f + e + f), m("" + a + l + "{" + e, s) + m("}", s));
}
var ie = /([[\].#*$><+~=|^:(),"'`\s])/g, K = typeof CSS < "u" && CSS.escape, V = function(a) {
  return K ? K(a) : a.replace(ie, "\\$1");
}, H = /* @__PURE__ */ function() {
  function a(n, e, t) {
    this.type = "style", this.isProcessed = !1;
    var i = t.sheet, s = t.Renderer;
    this.key = n, this.options = t, this.style = e, i ? this.renderer = i.renderer : s && (this.renderer = new s());
  }
  var r = a.prototype;
  return r.prop = function(e, t, i) {
    if (t === void 0)
      return this.style[e];
    var s = i ? i.force : !1;
    if (!s && this.style[e] === t)
      return this;
    var u = t;
    (!i || i.process !== !1) && (u = this.options.jss.plugins.onChangeValue(t, e, this));
    var o = u == null || u === !1, f = e in this.style;
    if (o && !f && !s)
      return this;
    var l = o && f;
    return l ? delete this.style[e] : this.style[e] = u, this.renderable && this.renderer ? (l ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, u), this) : this;
  }, a;
}(), I = /* @__PURE__ */ function(a) {
  z(r, a);
  function r(e, t, i) {
    var s;
    s = a.call(this, e, t, i) || this;
    var u = i.selector, o = i.scoped, f = i.sheet, l = i.generateId;
    return u ? s.selectorText = u : o !== !1 && (s.id = l(M(M(s)), f), s.selectorText = "." + V(s.id)), s;
  }
  var n = r.prototype;
  return n.applyTo = function(t) {
    var i = this.renderer;
    if (i) {
      var s = this.toJSON();
      for (var u in s)
        i.setProperty(t, u, s[u]);
    }
    return this;
  }, n.toJSON = function() {
    var t = {};
    for (var i in this.style) {
      var s = this.style[i];
      typeof s != "object" ? t[i] = s : Array.isArray(s) && (t[i] = y(s));
    }
    return t;
  }, n.toString = function(t) {
    var i = this.options.sheet, s = i ? i.options.link : !1, u = s ? v({}, t, {
      allowEmpty: !0
    }) : t;
    return x(this.selectorText, this.style, u);
  }, L(r, [{
    key: "selector",
    set: function(t) {
      if (t !== this.selectorText) {
        this.selectorText = t;
        var i = this.renderer, s = this.renderable;
        if (!(!s || !i)) {
          var u = i.setSelector(s, t);
          u || i.replaceRule(s, this);
        }
      }
    },
    get: function() {
      return this.selectorText;
    }
  }]), r;
}(H), se = {
  onCreateRule: function(r, n, e) {
    return r[0] === "@" || e.parent && e.parent.type === "keyframes" ? null : new I(r, n, e);
  }
}, P = {
  indent: 1,
  children: !0
}, ae = /@([\w-]+)/, ue = /* @__PURE__ */ function() {
  function a(n, e, t) {
    this.type = "conditional", this.isProcessed = !1, this.key = n;
    var i = n.match(ae);
    this.at = i ? i[1] : "unknown", this.query = t.name || "@" + this.at, this.options = t, this.rules = new T(v({}, t, {
      parent: this
    }));
    for (var s in e)
      this.rules.add(s, e[s]);
    this.rules.process();
  }
  var r = a.prototype;
  return r.getRule = function(e) {
    return this.rules.get(e);
  }, r.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, r.addRule = function(e, t, i) {
    var s = this.rules.add(e, t, i);
    return s ? (this.options.jss.plugins.onProcessRule(s), s) : null;
  }, r.replaceRule = function(e, t, i) {
    var s = this.rules.replace(e, t, i);
    return s && this.options.jss.plugins.onProcessRule(s), s;
  }, r.toString = function(e) {
    e === void 0 && (e = P);
    var t = R(e), i = t.linebreak;
    if (e.indent == null && (e.indent = P.indent), e.children == null && (e.children = P.children), e.children === !1)
      return this.query + " {}";
    var s = this.rules.toString(e);
    return s ? this.query + " {" + i + s + i + "}" : "";
  }, a;
}(), oe = /@media|@supports\s+/, fe = {
  onCreateRule: function(r, n, e) {
    return oe.test(r) ? new ue(r, n, e) : null;
  }
}, C = {
  indent: 1,
  children: !0
}, le = /@keyframes\s+([\w-]+)/, O = /* @__PURE__ */ function() {
  function a(n, e, t) {
    this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
    var i = n.match(le);
    i && i[1] ? this.name = i[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = t;
    var s = t.scoped, u = t.sheet, o = t.generateId;
    this.id = s === !1 ? this.name : V(o(this, u)), this.rules = new T(v({}, t, {
      parent: this
    }));
    for (var f in e)
      this.rules.add(f, e[f], v({}, t, {
        parent: this
      }));
    this.rules.process();
  }
  var r = a.prototype;
  return r.toString = function(e) {
    e === void 0 && (e = C);
    var t = R(e), i = t.linebreak;
    if (e.indent == null && (e.indent = C.indent), e.children == null && (e.children = C.children), e.children === !1)
      return this.at + " " + this.id + " {}";
    var s = this.rules.toString(e);
    return s && (s = "" + i + s + i), this.at + " " + this.id + " {" + s + "}";
  }, a;
}(), he = /@keyframes\s+/, de = /\$([\w-]+)/g, j = function(r, n) {
  return typeof r == "string" ? r.replace(de, function(e, t) {
    return t in n ? n[t] : e;
  }) : r;
}, $ = function(r, n, e) {
  var t = r[n], i = j(t, e);
  i !== t && (r[n] = i);
}, ce = {
  onCreateRule: function(r, n, e) {
    return typeof r == "string" && he.test(r) ? new O(r, n, e) : null;
  },
  onProcessStyle: function(r, n, e) {
    return n.type !== "style" || !e || ("animation-name" in r && $(r, "animation-name", e.keyframes), "animation" in r && $(r, "animation", e.keyframes)), r;
  },
  onChangeValue: function(r, n, e) {
    var t = e.options.sheet;
    if (!t)
      return r;
    switch (n) {
      case "animation":
        return j(r, t.keyframes);
      case "animation-name":
        return j(r, t.keyframes);
      default:
        return r;
    }
  }
}, ve = /* @__PURE__ */ function(a) {
  z(r, a);
  function r() {
    return a.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.toString = function(t) {
    var i = this.options.sheet, s = i ? i.options.link : !1, u = s ? v({}, t, {
      allowEmpty: !0
    }) : t;
    return x(this.key, this.style, u);
  }, r;
}(H), pe = {
  onCreateRule: function(r, n, e) {
    return e.parent && e.parent.type === "keyframes" ? new ve(r, n, e) : null;
  }
}, ye = /* @__PURE__ */ function() {
  function a(n, e, t) {
    this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = n, this.style = e, this.options = t;
  }
  var r = a.prototype;
  return r.toString = function(e) {
    var t = R(e), i = t.linebreak;
    if (Array.isArray(this.style)) {
      for (var s = "", u = 0; u < this.style.length; u++)
        s += x(this.at, this.style[u]), this.style[u + 1] && (s += i);
      return s;
    }
    return x(this.at, this.style, e);
  }, a;
}(), ge = /@font-face/, Re = {
  onCreateRule: function(r, n, e) {
    return ge.test(r) ? new ye(r, n, e) : null;
  }
}, me = /* @__PURE__ */ function() {
  function a(n, e, t) {
    this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = n, this.style = e, this.options = t;
  }
  var r = a.prototype;
  return r.toString = function(e) {
    return x(this.key, this.style, e);
  }, a;
}(), Se = {
  onCreateRule: function(r, n, e) {
    return r === "@viewport" || r === "@-ms-viewport" ? new me(r, n, e) : null;
  }
}, xe = /* @__PURE__ */ function() {
  function a(n, e, t) {
    this.type = "simple", this.isProcessed = !1, this.key = n, this.value = e, this.options = t;
  }
  var r = a.prototype;
  return r.toString = function(e) {
    if (Array.isArray(this.value)) {
      for (var t = "", i = 0; i < this.value.length; i++)
        t += this.key + " " + this.value[i] + ";", this.value[i + 1] && (t += `
`);
      return t;
    }
    return this.key + " " + this.value + ";";
  }, a;
}(), be = {
  "@charset": !0,
  "@import": !0,
  "@namespace": !0
}, ke = {
  onCreateRule: function(r, n, e) {
    return r in be ? new xe(r, n, e) : null;
  }
}, G = [se, fe, ce, pe, Re, Se, ke], Pe = {
  process: !0
}, U = {
  force: !0,
  process: !0
}, T = /* @__PURE__ */ function() {
  function a(n) {
    this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = n, this.classes = n.classes, this.keyframes = n.keyframes;
  }
  var r = a.prototype;
  return r.add = function(e, t, i) {
    var s = this.options, u = s.parent, o = s.sheet, f = s.jss, l = s.Renderer, h = s.generateId, g = s.scoped, d = v({
      classes: this.classes,
      parent: u,
      sheet: o,
      jss: f,
      Renderer: l,
      generateId: h,
      scoped: g,
      name: e,
      keyframes: this.keyframes,
      selector: void 0
    }, i), c = e;
    e in this.raw && (c = e + "-d" + this.counter++), this.raw[c] = t, c in this.classes && (d.selector = "." + V(this.classes[c]));
    var p = D(c, t, d);
    if (!p)
      return null;
    this.register(p);
    var b = d.index === void 0 ? this.index.length : d.index;
    return this.index.splice(b, 0, p), p;
  }, r.replace = function(e, t, i) {
    var s = this.get(e), u = this.index.indexOf(s);
    s && this.remove(s);
    var o = i;
    return u !== -1 && (o = v({}, i, {
      index: u
    })), this.add(e, t, o);
  }, r.get = function(e) {
    return this.map[e];
  }, r.remove = function(e) {
    this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1);
  }, r.indexOf = function(e) {
    return this.index.indexOf(e);
  }, r.process = function() {
    var e = this.options.jss.plugins;
    this.index.slice(0).forEach(e.onProcessRule, e);
  }, r.register = function(e) {
    this.map[e.key] = e, e instanceof I ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof O && this.keyframes && (this.keyframes[e.name] = e.id);
  }, r.unregister = function(e) {
    delete this.map[e.key], e instanceof I ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof O && delete this.keyframes[e.name];
  }, r.update = function() {
    var e, t, i;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], i = arguments.length <= 2 ? void 0 : arguments[2]) : (t = arguments.length <= 0 ? void 0 : arguments[0], i = arguments.length <= 1 ? void 0 : arguments[1], e = null), e)
      this.updateOne(this.get(e), t, i);
    else
      for (var s = 0; s < this.index.length; s++)
        this.updateOne(this.index[s], t, i);
  }, r.updateOne = function(e, t, i) {
    i === void 0 && (i = Pe);
    var s = this.options, u = s.jss.plugins, o = s.sheet;
    if (e.rules instanceof a) {
      e.rules.update(t, i);
      return;
    }
    var f = e.style;
    if (u.onUpdate(t, e, o, i), i.process && f && f !== e.style) {
      u.onProcessStyle(e.style, e, o);
      for (var l in e.style) {
        var h = e.style[l], g = f[l];
        h !== g && e.prop(l, h, U);
      }
      for (var d in f) {
        var c = e.style[d], p = f[d];
        c == null && c !== p && e.prop(d, null, U);
      }
    }
  }, r.toString = function(e) {
    for (var t = "", i = this.options.sheet, s = i ? i.options.link : !1, u = R(e), o = u.linebreak, f = 0; f < this.index.length; f++) {
      var l = this.index[f], h = l.toString(e);
      !h && !s || (t && (t += o), t += h);
    }
    return t;
  }, a;
}(), Q = /* @__PURE__ */ function() {
  function a(n, e) {
    this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = v({}, e, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    }), e.Renderer && (this.renderer = new e.Renderer(this)), this.rules = new T(this.options);
    for (var t in n)
      this.rules.add(t, n[t]);
    this.rules.process();
  }
  var r = a.prototype;
  return r.attach = function() {
    return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this);
  }, r.detach = function() {
    return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
  }, r.addRule = function(e, t, i) {
    var s = this.queue;
    this.attached && !s && (this.queue = []);
    var u = this.rules.add(e, t, i);
    return u ? (this.options.jss.plugins.onProcessRule(u), this.attached ? (this.deployed && (s ? s.push(u) : (this.insertRule(u), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), u) : (this.deployed = !1, u)) : null;
  }, r.replaceRule = function(e, t, i) {
    var s = this.rules.get(e);
    if (!s)
      return this.addRule(e, t, i);
    var u = this.rules.replace(e, t, i);
    return u && this.options.jss.plugins.onProcessRule(u), this.attached ? (this.deployed && this.renderer && (u ? s.renderable && this.renderer.replaceRule(s.renderable, u) : this.renderer.deleteRule(s)), u) : (this.deployed = !1, u);
  }, r.insertRule = function(e) {
    this.renderer && this.renderer.insertRule(e);
  }, r.addRules = function(e, t) {
    var i = [];
    for (var s in e) {
      var u = this.addRule(s, e[s], t);
      u && i.push(u);
    }
    return i;
  }, r.getRule = function(e) {
    return this.rules.get(e);
  }, r.deleteRule = function(e) {
    var t = typeof e == "object" ? e : this.rules.get(e);
    return !t || this.attached && !t.renderable ? !1 : (this.rules.remove(t), this.attached && t.renderable && this.renderer ? this.renderer.deleteRule(t.renderable) : !0);
  }, r.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, r.deploy = function() {
    return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
  }, r.update = function() {
    var e;
    return (e = this.rules).update.apply(e, arguments), this;
  }, r.updateOne = function(e, t, i) {
    return this.rules.updateOne(e, t, i), this;
  }, r.toString = function(e) {
    return this.rules.toString(e);
  }, a;
}(), Ce = /* @__PURE__ */ function() {
  function a() {
    this.plugins = {
      internal: [],
      external: []
    }, this.registry = {};
  }
  var r = a.prototype;
  return r.onCreateRule = function(e, t, i) {
    for (var s = 0; s < this.registry.onCreateRule.length; s++) {
      var u = this.registry.onCreateRule[s](e, t, i);
      if (u)
        return u;
    }
    return null;
  }, r.onProcessRule = function(e) {
    if (!e.isProcessed) {
      for (var t = e.options.sheet, i = 0; i < this.registry.onProcessRule.length; i++)
        this.registry.onProcessRule[i](e, t);
      e.style && this.onProcessStyle(e.style, e, t), e.isProcessed = !0;
    }
  }, r.onProcessStyle = function(e, t, i) {
    for (var s = 0; s < this.registry.onProcessStyle.length; s++)
      t.style = this.registry.onProcessStyle[s](t.style, t, i);
  }, r.onProcessSheet = function(e) {
    for (var t = 0; t < this.registry.onProcessSheet.length; t++)
      this.registry.onProcessSheet[t](e);
  }, r.onUpdate = function(e, t, i, s) {
    for (var u = 0; u < this.registry.onUpdate.length; u++)
      this.registry.onUpdate[u](e, t, i, s);
  }, r.onChangeValue = function(e, t, i) {
    for (var s = e, u = 0; u < this.registry.onChangeValue.length; u++)
      s = this.registry.onChangeValue[u](s, t, i);
    return s;
  }, r.use = function(e, t) {
    t === void 0 && (t = {
      queue: "external"
    });
    var i = this.plugins[t.queue];
    i.indexOf(e) === -1 && (i.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(s, u) {
      for (var o in u)
        o in s && s[o].push(u[o]);
      return s;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    }));
  }, a;
}(), we = /* @__PURE__ */ function() {
  function a() {
    this.registry = [];
  }
  var r = a.prototype;
  return r.add = function(e) {
    var t = this.registry, i = e.options.index;
    if (t.indexOf(e) === -1) {
      if (t.length === 0 || i >= this.index) {
        t.push(e);
        return;
      }
      for (var s = 0; s < t.length; s++)
        if (t[s].options.index > i) {
          t.splice(s, 0, e);
          return;
        }
    }
  }, r.reset = function() {
    this.registry = [];
  }, r.remove = function(e) {
    var t = this.registry.indexOf(e);
    this.registry.splice(t, 1);
  }, r.toString = function(e) {
    for (var t = e === void 0 ? {} : e, i = t.attached, s = te(t, ["attached"]), u = R(s), o = u.linebreak, f = "", l = 0; l < this.registry.length; l++) {
      var h = this.registry[l];
      i != null && h.attached !== i || (f && (f += o), f += h.toString(s));
    }
    return f;
  }, L(a, [{
    key: "index",
    get: function() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]), a;
}(), S = new we(), A = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), _ = "2f1acc6c3a606b082e5eef5e54414ffb";
A[_] == null && (A[_] = 0);
var W = A[_]++, F = function(r) {
  r === void 0 && (r = {});
  var n = 0, e = function(i, s) {
    n += 1;
    var u = "", o = "";
    return s && (s.options.classNamePrefix && (o = s.options.classNamePrefix), s.options.jss.id != null && (u = String(s.options.jss.id))), r.minify ? "" + (o || "c") + W + u + n : o + i.key + "-" + W + (u ? "-" + u : "") + "-" + n;
  };
  return e;
}, X = function(r) {
  var n;
  return function() {
    return n || (n = r()), n;
  };
}, Ie = function(r, n) {
  try {
    return r.attributeStyleMap ? r.attributeStyleMap.get(n) : r.style.getPropertyValue(n);
  } catch {
    return "";
  }
}, Oe = function(r, n, e) {
  try {
    var t = e;
    if (Array.isArray(e) && (t = y(e, !0), e[e.length - 1] === "!important"))
      return r.style.setProperty(n, t, "important"), !0;
    r.attributeStyleMap ? r.attributeStyleMap.set(n, t) : r.style.setProperty(n, t);
  } catch {
    return !1;
  }
  return !0;
}, je = function(r, n) {
  try {
    r.attributeStyleMap ? r.attributeStyleMap.delete(n) : r.style.removeProperty(n);
  } catch {
  }
}, Ae = function(r, n) {
  return r.selectorText = n, r.selectorText === n;
}, Y = X(function() {
  return document.querySelector("head");
});
function _e(a, r) {
  for (var n = 0; n < a.length; n++) {
    var e = a[n];
    if (e.attached && e.options.index > r.index && e.options.insertionPoint === r.insertionPoint)
      return e;
  }
  return null;
}
function Ve(a, r) {
  for (var n = a.length - 1; n >= 0; n--) {
    var e = a[n];
    if (e.attached && e.options.insertionPoint === r.insertionPoint)
      return e;
  }
  return null;
}
function Te(a) {
  for (var r = Y(), n = 0; n < r.childNodes.length; n++) {
    var e = r.childNodes[n];
    if (e.nodeType === 8 && e.nodeValue.trim() === a)
      return e;
  }
  return null;
}
function qe(a) {
  var r = S.registry;
  if (r.length > 0) {
    var n = _e(r, a);
    if (n && n.renderer)
      return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element
      };
    if (n = Ve(r, a), n && n.renderer)
      return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element.nextSibling
      };
  }
  var e = a.insertionPoint;
  if (e && typeof e == "string") {
    var t = Te(e);
    if (t)
      return {
        parent: t.parentNode,
        node: t.nextSibling
      };
  }
  return !1;
}
function Ee(a, r) {
  var n = r.insertionPoint, e = qe(r);
  if (e !== !1 && e.parent) {
    e.parent.insertBefore(a, e.node);
    return;
  }
  if (n && typeof n.nodeType == "number") {
    var t = n, i = t.parentNode;
    i && i.insertBefore(a, t.nextSibling);
    return;
  }
  Y().appendChild(a);
}
var Me = X(function() {
  var a = document.querySelector('meta[property="csp-nonce"]');
  return a ? a.getAttribute("content") : null;
}), J = function(r, n, e) {
  try {
    "insertRule" in r ? r.insertRule(n, e) : "appendRule" in r && r.appendRule(n);
  } catch {
    return !1;
  }
  return r.cssRules[e];
}, B = function(r, n) {
  var e = r.cssRules.length;
  return n === void 0 || n > e ? e : n;
}, Ne = function() {
  var r = document.createElement("style");
  return r.textContent = `
`, r;
}, Ke = /* @__PURE__ */ function() {
  function a(n) {
    this.getPropertyValue = Ie, this.setProperty = Oe, this.removeProperty = je, this.setSelector = Ae, this.hasInsertedRules = !1, this.cssRules = [], n && S.add(n), this.sheet = n;
    var e = this.sheet ? this.sheet.options : {}, t = e.media, i = e.meta, s = e.element;
    this.element = s || Ne(), this.element.setAttribute("data-jss", ""), t && this.element.setAttribute("media", t), i && this.element.setAttribute("data-meta", i);
    var u = Me();
    u && this.element.setAttribute("nonce", u);
  }
  var r = a.prototype;
  return r.attach = function() {
    if (!(this.element.parentNode || !this.sheet)) {
      Ee(this.element, this.sheet.options);
      var e = Boolean(this.sheet && this.sheet.deployed);
      this.hasInsertedRules && e && (this.hasInsertedRules = !1, this.deploy());
    }
  }, r.detach = function() {
    if (!!this.sheet) {
      var e = this.element.parentNode;
      e && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`);
    }
  }, r.deploy = function() {
    var e = this.sheet;
    if (!!e) {
      if (e.options.link) {
        this.insertRules(e.rules);
        return;
      }
      this.element.textContent = `
` + e.toString() + `
`;
    }
  }, r.insertRules = function(e, t) {
    for (var i = 0; i < e.index.length; i++)
      this.insertRule(e.index[i], i, t);
  }, r.insertRule = function(e, t, i) {
    if (i === void 0 && (i = this.element.sheet), e.rules) {
      var s = e, u = i;
      if (e.type === "conditional" || e.type === "keyframes") {
        var o = B(i, t);
        if (u = J(i, s.toString({
          children: !1
        }), o), u === !1)
          return !1;
        this.refCssRule(e, o, u);
      }
      return this.insertRules(s.rules, u), u;
    }
    var f = e.toString();
    if (!f)
      return !1;
    var l = B(i, t), h = J(i, f, l);
    return h === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(e, l, h), h);
  }, r.refCssRule = function(e, t, i) {
    e.renderable = i, e.options.parent instanceof Q && this.cssRules.splice(t, 0, i);
  }, r.deleteRule = function(e) {
    var t = this.element.sheet, i = this.indexOf(e);
    return i === -1 ? !1 : (t.deleteRule(i), this.cssRules.splice(i, 1), !0);
  }, r.indexOf = function(e) {
    return this.cssRules.indexOf(e);
  }, r.replaceRule = function(e, t) {
    var i = this.indexOf(e);
    return i === -1 ? !1 : (this.element.sheet.deleteRule(i), this.cssRules.splice(i, 1), this.insertRule(t, i));
  }, r.getRules = function() {
    return this.element.sheet.cssRules;
  }, a;
}(), $e = 0, Ge = /* @__PURE__ */ function() {
  function a(n) {
    this.id = $e++, this.version = "10.9.0", this.plugins = new Ce(), this.options = {
      id: {
        minify: !1
      },
      createGenerateId: F,
      Renderer: re ? Ke : null,
      plugins: []
    }, this.generateId = F({
      minify: !1
    });
    for (var e = 0; e < G.length; e++)
      this.plugins.use(G[e], {
        queue: "internal"
      });
    this.setup(n);
  }
  var r = a.prototype;
  return r.setup = function(e) {
    return e === void 0 && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = v({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), e.insertionPoint != null && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this;
  }, r.createStyleSheet = function(e, t) {
    t === void 0 && (t = {});
    var i = t, s = i.index;
    typeof s != "number" && (s = S.index === 0 ? 0 : S.index + 1);
    var u = new Q(e, v({}, t, {
      jss: this,
      generateId: t.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: s
    }));
    return this.plugins.onProcessSheet(u), u;
  }, r.removeStyleSheet = function(e) {
    return e.detach(), S.remove(e), this;
  }, r.createRule = function(e, t, i) {
    if (t === void 0 && (t = {}), i === void 0 && (i = {}), typeof e == "object")
      return this.createRule(void 0, e, t);
    var s = v({}, i, {
      name: e,
      jss: this,
      Renderer: this.options.Renderer
    });
    s.generateId || (s.generateId = this.generateId), s.classes || (s.classes = {}), s.keyframes || (s.keyframes = {});
    var u = D(e, t, s);
    return u && this.plugins.onProcessRule(u), u;
  }, r.use = function() {
    for (var e = this, t = arguments.length, i = new Array(t), s = 0; s < t; s++)
      i[s] = arguments[s];
    return i.forEach(function(u) {
      e.plugins.use(u);
    }), this;
  }, a;
}(), Ue = function(r) {
  return new Ge(r);
};
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
Ue();
function Be() {
  function a(t) {
    if (t.type === "keyframes") {
      var i = t;
      i.at = Z(i.at);
    }
  }
  function r(t) {
    for (var i in t) {
      var s = t[i];
      if (i === "fallbacks" && Array.isArray(s)) {
        t[i] = s.map(r);
        continue;
      }
      var u = !1, o = ee(i);
      o && o !== i && (u = !0);
      var f = !1, l = E(o, y(s));
      l && l !== s && (f = !0), (u || f) && (u && delete t[i], t[o || i] = l || s);
    }
    return t;
  }
  function n(t, i) {
    return i.type !== "style" ? t : r(t);
  }
  function e(t, i) {
    return E(i, y(t)) || t;
  }
  return {
    onProcessRule: a,
    onProcessStyle: n,
    onChangeValue: e
  };
}
export {
  Be as j
};
//# sourceMappingURL=jss-plugin-vendor-prefixer.6ae1a5da.js.map
