import { _ as p, b as z, c as H, d as $, a as te } from "./@babel.7bf9beb3.js";
import { i as re } from "./is-in-browser.06a13cf8.js";
var ne = {}.constructor;
function O(a) {
  if (a == null || typeof a != "object")
    return a;
  if (Array.isArray(a))
    return a.map(O);
  if (a.constructor !== ne)
    return a;
  var r = {};
  for (var t in a)
    r[t] = O(a[t]);
  return r;
}
function N(a, r, t) {
  a === void 0 && (a = "unnamed");
  var e = t.jss, n = O(r), i = e.plugins.onCreateRule(a, n, t);
  return i || null;
}
var U = function(r, t) {
  for (var e = "", n = 0; n < r.length && r[n] !== "!important"; n++)
    e && (e += t), e += r[n];
  return e;
}, m = function(r, t) {
  if (t === void 0 && (t = !1), !Array.isArray(r))
    return r;
  var e = "";
  if (Array.isArray(r[0]))
    for (var n = 0; n < r.length && r[n] !== "!important"; n++)
      e && (e += ", "), e += U(r[n], " ");
  else
    e = U(r, ", ");
  return !t && r[r.length - 1] === "!important" && (e += " !important"), e;
};
function g(a) {
  return a && a.format === !1 ? {
    linebreak: "",
    space: ""
  } : {
    linebreak: `
`,
    space: " "
  };
}
function R(a, r) {
  for (var t = "", e = 0; e < r; e++)
    t += "  ";
  return t + a;
}
function x(a, r, t) {
  t === void 0 && (t = {});
  var e = "";
  if (!r)
    return e;
  var n = t, i = n.indent, s = i === void 0 ? 0 : i, u = r.fallbacks;
  t.format === !1 && (s = -1 / 0);
  var o = g(t), f = o.linebreak, l = o.space;
  if (a && s++, u)
    if (Array.isArray(u))
      for (var h = 0; h < u.length; h++) {
        var y = u[h];
        for (var d in y) {
          var c = y[d];
          c != null && (e && (e += f), e += R(d + ":" + l + m(c) + ";", s));
        }
      }
    else
      for (var v in u) {
        var b = u[v];
        b != null && (e && (e += f), e += R(v + ":" + l + m(b) + ";", s));
      }
  for (var P in r) {
    var M = r[P];
    M != null && P !== "fallbacks" && (e && (e += f), e += R(P + ":" + l + m(M) + ";", s));
  }
  return !e && !t.allowEmpty || !a ? e : (s--, e && (e = "" + f + e + f), R("" + a + l + "{" + e, s) + R("}", s));
}
var ie = /([[\].#*$><+~=|^:(),"'`\s])/g, K = typeof CSS < "u" && CSS.escape, q = function(a) {
  return K ? K(a) : a.replace(ie, "\\$1");
}, Q = /* @__PURE__ */ function() {
  function a(t, e, n) {
    this.type = "style", this.isProcessed = !1;
    var i = n.sheet, s = n.Renderer;
    this.key = t, this.options = n, this.style = e, i ? this.renderer = i.renderer : s && (this.renderer = new s());
  }
  var r = a.prototype;
  return r.prop = function(e, n, i) {
    if (n === void 0)
      return this.style[e];
    var s = i ? i.force : !1;
    if (!s && this.style[e] === n)
      return this;
    var u = n;
    (!i || i.process !== !1) && (u = this.options.jss.plugins.onChangeValue(n, e, this));
    var o = u == null || u === !1, f = e in this.style;
    if (o && !f && !s)
      return this;
    var l = o && f;
    return l ? delete this.style[e] : this.style[e] = u, this.renderable && this.renderer ? (l ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, u), this) : this;
  }, a;
}(), j = /* @__PURE__ */ function(a) {
  H(r, a);
  function r(e, n, i) {
    var s;
    s = a.call(this, e, n, i) || this;
    var u = i.selector, o = i.scoped, f = i.sheet, l = i.generateId;
    return u ? s.selectorText = u : o !== !1 && (s.id = l($($(s)), f), s.selectorText = "." + q(s.id)), s;
  }
  var t = r.prototype;
  return t.applyTo = function(n) {
    var i = this.renderer;
    if (i) {
      var s = this.toJSON();
      for (var u in s)
        i.setProperty(n, u, s[u]);
    }
    return this;
  }, t.toJSON = function() {
    var n = {};
    for (var i in this.style) {
      var s = this.style[i];
      typeof s != "object" ? n[i] = s : Array.isArray(s) && (n[i] = m(s));
    }
    return n;
  }, t.toString = function(n) {
    var i = this.options.sheet, s = i ? i.options.link : !1, u = s ? p({}, n, {
      allowEmpty: !0
    }) : n;
    return x(this.selectorText, this.style, u);
  }, z(r, [{
    key: "selector",
    set: function(n) {
      if (n !== this.selectorText) {
        this.selectorText = n;
        var i = this.renderer, s = this.renderable;
        if (!(!s || !i)) {
          var u = i.setSelector(s, n);
          u || i.replaceRule(s, this);
        }
      }
    },
    get: function() {
      return this.selectorText;
    }
  }]), r;
}(Q), se = {
  onCreateRule: function(r, t, e) {
    return r[0] === "@" || e.parent && e.parent.type === "keyframes" ? null : new j(r, t, e);
  }
}, k = {
  indent: 1,
  children: !0
}, ae = /@([\w-]+)/, ue = /* @__PURE__ */ function() {
  function a(t, e, n) {
    this.type = "conditional", this.isProcessed = !1, this.key = t;
    var i = t.match(ae);
    this.at = i ? i[1] : "unknown", this.query = n.name || "@" + this.at, this.options = n, this.rules = new E(p({}, n, {
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
  }, r.addRule = function(e, n, i) {
    var s = this.rules.add(e, n, i);
    return s ? (this.options.jss.plugins.onProcessRule(s), s) : null;
  }, r.replaceRule = function(e, n, i) {
    var s = this.rules.replace(e, n, i);
    return s && this.options.jss.plugins.onProcessRule(s), s;
  }, r.toString = function(e) {
    e === void 0 && (e = k);
    var n = g(e), i = n.linebreak;
    if (e.indent == null && (e.indent = k.indent), e.children == null && (e.children = k.children), e.children === !1)
      return this.query + " {}";
    var s = this.rules.toString(e);
    return s ? this.query + " {" + i + s + i + "}" : "";
  }, a;
}(), oe = /@media|@supports\s+/, fe = {
  onCreateRule: function(r, t, e) {
    return oe.test(r) ? new ue(r, t, e) : null;
  }
}, C = {
  indent: 1,
  children: !0
}, le = /@keyframes\s+([\w-]+)/, A = /* @__PURE__ */ function() {
  function a(t, e, n) {
    this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
    var i = t.match(le);
    i && i[1] ? this.name = i[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = n;
    var s = n.scoped, u = n.sheet, o = n.generateId;
    this.id = s === !1 ? this.name : q(o(this, u)), this.rules = new E(p({}, n, {
      parent: this
    }));
    for (var f in e)
      this.rules.add(f, e[f], p({}, n, {
        parent: this
      }));
    this.rules.process();
  }
  var r = a.prototype;
  return r.toString = function(e) {
    e === void 0 && (e = C);
    var n = g(e), i = n.linebreak;
    if (e.indent == null && (e.indent = C.indent), e.children == null && (e.children = C.children), e.children === !1)
      return this.at + " " + this.id + " {}";
    var s = this.rules.toString(e);
    return s && (s = "" + i + s + i), this.at + " " + this.id + " {" + s + "}";
  }, a;
}(), he = /@keyframes\s+/, de = /\$([\w-]+)/g, V = function(r, t) {
  return typeof r == "string" ? r.replace(de, function(e, n) {
    return n in t ? t[n] : e;
  }) : r;
}, G = function(r, t, e) {
  var n = r[t], i = V(n, e);
  i !== n && (r[t] = i);
}, ce = {
  onCreateRule: function(r, t, e) {
    return typeof r == "string" && he.test(r) ? new A(r, t, e) : null;
  },
  onProcessStyle: function(r, t, e) {
    return t.type !== "style" || !e || ("animation-name" in r && G(r, "animation-name", e.keyframes), "animation" in r && G(r, "animation", e.keyframes)), r;
  },
  onChangeValue: function(r, t, e) {
    var n = e.options.sheet;
    if (!n)
      return r;
    switch (t) {
      case "animation":
        return V(r, n.keyframes);
      case "animation-name":
        return V(r, n.keyframes);
      default:
        return r;
    }
  }
}, pe = /* @__PURE__ */ function(a) {
  H(r, a);
  function r() {
    return a.apply(this, arguments) || this;
  }
  var t = r.prototype;
  return t.toString = function(n) {
    var i = this.options.sheet, s = i ? i.options.link : !1, u = s ? p({}, n, {
      allowEmpty: !0
    }) : n;
    return x(this.key, this.style, u);
  }, r;
}(Q), ve = {
  onCreateRule: function(r, t, e) {
    return e.parent && e.parent.type === "keyframes" ? new pe(r, t, e) : null;
  }
}, ye = /* @__PURE__ */ function() {
  function a(t, e, n) {
    this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = t, this.style = e, this.options = n;
  }
  var r = a.prototype;
  return r.toString = function(e) {
    var n = g(e), i = n.linebreak;
    if (Array.isArray(this.style)) {
      for (var s = "", u = 0; u < this.style.length; u++)
        s += x(this.at, this.style[u]), this.style[u + 1] && (s += i);
      return s;
    }
    return x(this.at, this.style, e);
  }, a;
}(), ge = /@font-face/, Re = {
  onCreateRule: function(r, t, e) {
    return ge.test(r) ? new ye(r, t, e) : null;
  }
}, me = /* @__PURE__ */ function() {
  function a(t, e, n) {
    this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = t, this.style = e, this.options = n;
  }
  var r = a.prototype;
  return r.toString = function(e) {
    return x(this.key, this.style, e);
  }, a;
}(), Se = {
  onCreateRule: function(r, t, e) {
    return r === "@viewport" || r === "@-ms-viewport" ? new me(r, t, e) : null;
  }
}, xe = /* @__PURE__ */ function() {
  function a(t, e, n) {
    this.type = "simple", this.isProcessed = !1, this.key = t, this.value = e, this.options = n;
  }
  var r = a.prototype;
  return r.toString = function(e) {
    if (Array.isArray(this.value)) {
      for (var n = "", i = 0; i < this.value.length; i++)
        n += this.key + " " + this.value[i] + ";", this.value[i + 1] && (n += `
`);
      return n;
    }
    return this.key + " " + this.value + ";";
  }, a;
}(), be = {
  "@charset": !0,
  "@import": !0,
  "@namespace": !0
}, Pe = {
  onCreateRule: function(r, t, e) {
    return r in be ? new xe(r, t, e) : null;
  }
}, W = [se, fe, ce, ve, Re, Se, Pe], ke = {
  process: !0
}, F = {
  force: !0,
  process: !0
}, E = /* @__PURE__ */ function() {
  function a(t) {
    this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = t, this.classes = t.classes, this.keyframes = t.keyframes;
  }
  var r = a.prototype;
  return r.add = function(e, n, i) {
    var s = this.options, u = s.parent, o = s.sheet, f = s.jss, l = s.Renderer, h = s.generateId, y = s.scoped, d = p({
      classes: this.classes,
      parent: u,
      sheet: o,
      jss: f,
      Renderer: l,
      generateId: h,
      scoped: y,
      name: e,
      keyframes: this.keyframes,
      selector: void 0
    }, i), c = e;
    e in this.raw && (c = e + "-d" + this.counter++), this.raw[c] = n, c in this.classes && (d.selector = "." + q(this.classes[c]));
    var v = N(c, n, d);
    if (!v)
      return null;
    this.register(v);
    var b = d.index === void 0 ? this.index.length : d.index;
    return this.index.splice(b, 0, v), v;
  }, r.replace = function(e, n, i) {
    var s = this.get(e), u = this.index.indexOf(s);
    s && this.remove(s);
    var o = i;
    return u !== -1 && (o = p({}, i, {
      index: u
    })), this.add(e, n, o);
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
    this.map[e.key] = e, e instanceof j ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof A && this.keyframes && (this.keyframes[e.name] = e.id);
  }, r.unregister = function(e) {
    delete this.map[e.key], e instanceof j ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof A && delete this.keyframes[e.name];
  }, r.update = function() {
    var e, n, i;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (e = arguments.length <= 0 ? void 0 : arguments[0], n = arguments.length <= 1 ? void 0 : arguments[1], i = arguments.length <= 2 ? void 0 : arguments[2]) : (n = arguments.length <= 0 ? void 0 : arguments[0], i = arguments.length <= 1 ? void 0 : arguments[1], e = null), e)
      this.updateOne(this.get(e), n, i);
    else
      for (var s = 0; s < this.index.length; s++)
        this.updateOne(this.index[s], n, i);
  }, r.updateOne = function(e, n, i) {
    i === void 0 && (i = ke);
    var s = this.options, u = s.jss.plugins, o = s.sheet;
    if (e.rules instanceof a) {
      e.rules.update(n, i);
      return;
    }
    var f = e.style;
    if (u.onUpdate(n, e, o, i), i.process && f && f !== e.style) {
      u.onProcessStyle(e.style, e, o);
      for (var l in e.style) {
        var h = e.style[l], y = f[l];
        h !== y && e.prop(l, h, F);
      }
      for (var d in f) {
        var c = e.style[d], v = f[d];
        c == null && c !== v && e.prop(d, null, F);
      }
    }
  }, r.toString = function(e) {
    for (var n = "", i = this.options.sheet, s = i ? i.options.link : !1, u = g(e), o = u.linebreak, f = 0; f < this.index.length; f++) {
      var l = this.index[f], h = l.toString(e);
      !h && !s || (n && (n += o), n += h);
    }
    return n;
  }, a;
}(), X = /* @__PURE__ */ function() {
  function a(t, e) {
    this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = p({}, e, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    }), e.Renderer && (this.renderer = new e.Renderer(this)), this.rules = new E(this.options);
    for (var n in t)
      this.rules.add(n, t[n]);
    this.rules.process();
  }
  var r = a.prototype;
  return r.attach = function() {
    return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this);
  }, r.detach = function() {
    return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
  }, r.addRule = function(e, n, i) {
    var s = this.queue;
    this.attached && !s && (this.queue = []);
    var u = this.rules.add(e, n, i);
    return u ? (this.options.jss.plugins.onProcessRule(u), this.attached ? (this.deployed && (s ? s.push(u) : (this.insertRule(u), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), u) : (this.deployed = !1, u)) : null;
  }, r.replaceRule = function(e, n, i) {
    var s = this.rules.get(e);
    if (!s)
      return this.addRule(e, n, i);
    var u = this.rules.replace(e, n, i);
    return u && this.options.jss.plugins.onProcessRule(u), this.attached ? (this.deployed && this.renderer && (u ? s.renderable && this.renderer.replaceRule(s.renderable, u) : this.renderer.deleteRule(s)), u) : (this.deployed = !1, u);
  }, r.insertRule = function(e) {
    this.renderer && this.renderer.insertRule(e);
  }, r.addRules = function(e, n) {
    var i = [];
    for (var s in e) {
      var u = this.addRule(s, e[s], n);
      u && i.push(u);
    }
    return i;
  }, r.getRule = function(e) {
    return this.rules.get(e);
  }, r.deleteRule = function(e) {
    var n = typeof e == "object" ? e : this.rules.get(e);
    return !n || this.attached && !n.renderable ? !1 : (this.rules.remove(n), this.attached && n.renderable && this.renderer ? this.renderer.deleteRule(n.renderable) : !0);
  }, r.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, r.deploy = function() {
    return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
  }, r.update = function() {
    var e;
    return (e = this.rules).update.apply(e, arguments), this;
  }, r.updateOne = function(e, n, i) {
    return this.rules.updateOne(e, n, i), this;
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
  return r.onCreateRule = function(e, n, i) {
    for (var s = 0; s < this.registry.onCreateRule.length; s++) {
      var u = this.registry.onCreateRule[s](e, n, i);
      if (u)
        return u;
    }
    return null;
  }, r.onProcessRule = function(e) {
    if (!e.isProcessed) {
      for (var n = e.options.sheet, i = 0; i < this.registry.onProcessRule.length; i++)
        this.registry.onProcessRule[i](e, n);
      e.style && this.onProcessStyle(e.style, e, n), e.isProcessed = !0;
    }
  }, r.onProcessStyle = function(e, n, i) {
    for (var s = 0; s < this.registry.onProcessStyle.length; s++)
      n.style = this.registry.onProcessStyle[s](n.style, n, i);
  }, r.onProcessSheet = function(e) {
    for (var n = 0; n < this.registry.onProcessSheet.length; n++)
      this.registry.onProcessSheet[n](e);
  }, r.onUpdate = function(e, n, i, s) {
    for (var u = 0; u < this.registry.onUpdate.length; u++)
      this.registry.onUpdate[u](e, n, i, s);
  }, r.onChangeValue = function(e, n, i) {
    for (var s = e, u = 0; u < this.registry.onChangeValue.length; u++)
      s = this.registry.onChangeValue[u](s, n, i);
    return s;
  }, r.use = function(e, n) {
    n === void 0 && (n = {
      queue: "external"
    });
    var i = this.plugins[n.queue];
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
    var n = this.registry, i = e.options.index;
    if (n.indexOf(e) === -1) {
      if (n.length === 0 || i >= this.index) {
        n.push(e);
        return;
      }
      for (var s = 0; s < n.length; s++)
        if (n[s].options.index > i) {
          n.splice(s, 0, e);
          return;
        }
    }
  }, r.reset = function() {
    this.registry = [];
  }, r.remove = function(e) {
    var n = this.registry.indexOf(e);
    this.registry.splice(n, 1);
  }, r.toString = function(e) {
    for (var n = e === void 0 ? {} : e, i = n.attached, s = te(n, ["attached"]), u = g(s), o = u.linebreak, f = "", l = 0; l < this.registry.length; l++) {
      var h = this.registry[l];
      i != null && h.attached !== i || (f && (f += o), f += h.toString(s));
    }
    return f;
  }, z(a, [{
    key: "index",
    get: function() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]), a;
}(), S = new we(), _ = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), T = "2f1acc6c3a606b082e5eef5e54414ffb";
_[T] == null && (_[T] = 0);
var J = _[T]++, B = function(r) {
  r === void 0 && (r = {});
  var t = 0, e = function(i, s) {
    t += 1;
    var u = "", o = "";
    return s && (s.options.classNamePrefix && (o = s.options.classNamePrefix), s.options.jss.id != null && (u = String(s.options.jss.id))), r.minify ? "" + (o || "c") + J + u + t : o + i.key + "-" + J + (u ? "-" + u : "") + "-" + t;
  };
  return e;
}, Y = function(r) {
  var t;
  return function() {
    return t || (t = r()), t;
  };
}, Ie = function(r, t) {
  try {
    return r.attributeStyleMap ? r.attributeStyleMap.get(t) : r.style.getPropertyValue(t);
  } catch {
    return "";
  }
}, Oe = function(r, t, e) {
  try {
    var n = e;
    if (Array.isArray(e) && (n = m(e, !0), e[e.length - 1] === "!important"))
      return r.style.setProperty(t, n, "important"), !0;
    r.attributeStyleMap ? r.attributeStyleMap.set(t, n) : r.style.setProperty(t, n);
  } catch {
    return !1;
  }
  return !0;
}, je = function(r, t) {
  try {
    r.attributeStyleMap ? r.attributeStyleMap.delete(t) : r.style.removeProperty(t);
  } catch {
  }
}, Ae = function(r, t) {
  return r.selectorText = t, r.selectorText === t;
}, Z = Y(function() {
  return document.querySelector("head");
});
function Ve(a, r) {
  for (var t = 0; t < a.length; t++) {
    var e = a[t];
    if (e.attached && e.options.index > r.index && e.options.insertionPoint === r.insertionPoint)
      return e;
  }
  return null;
}
function _e(a, r) {
  for (var t = a.length - 1; t >= 0; t--) {
    var e = a[t];
    if (e.attached && e.options.insertionPoint === r.insertionPoint)
      return e;
  }
  return null;
}
function Te(a) {
  for (var r = Z(), t = 0; t < r.childNodes.length; t++) {
    var e = r.childNodes[t];
    if (e.nodeType === 8 && e.nodeValue.trim() === a)
      return e;
  }
  return null;
}
function Ne(a) {
  var r = S.registry;
  if (r.length > 0) {
    var t = Ve(r, a);
    if (t && t.renderer)
      return {
        parent: t.renderer.element.parentNode,
        node: t.renderer.element
      };
    if (t = _e(r, a), t && t.renderer)
      return {
        parent: t.renderer.element.parentNode,
        node: t.renderer.element.nextSibling
      };
  }
  var e = a.insertionPoint;
  if (e && typeof e == "string") {
    var n = Te(e);
    if (n)
      return {
        parent: n.parentNode,
        node: n.nextSibling
      };
  }
  return !1;
}
function qe(a, r) {
  var t = r.insertionPoint, e = Ne(r);
  if (e !== !1 && e.parent) {
    e.parent.insertBefore(a, e.node);
    return;
  }
  if (t && typeof t.nodeType == "number") {
    var n = t, i = n.parentNode;
    i && i.insertBefore(a, n.nextSibling);
    return;
  }
  Z().appendChild(a);
}
var Ee = Y(function() {
  var a = document.querySelector('meta[property="csp-nonce"]');
  return a ? a.getAttribute("content") : null;
}), D = function(r, t, e) {
  try {
    "insertRule" in r ? r.insertRule(t, e) : "appendRule" in r && r.appendRule(t);
  } catch {
    return !1;
  }
  return r.cssRules[e];
}, L = function(r, t) {
  var e = r.cssRules.length;
  return t === void 0 || t > e ? e : t;
}, Me = function() {
  var r = document.createElement("style");
  return r.textContent = `
`, r;
}, $e = /* @__PURE__ */ function() {
  function a(t) {
    this.getPropertyValue = Ie, this.setProperty = Oe, this.removeProperty = je, this.setSelector = Ae, this.hasInsertedRules = !1, this.cssRules = [], t && S.add(t), this.sheet = t;
    var e = this.sheet ? this.sheet.options : {}, n = e.media, i = e.meta, s = e.element;
    this.element = s || Me(), this.element.setAttribute("data-jss", ""), n && this.element.setAttribute("media", n), i && this.element.setAttribute("data-meta", i);
    var u = Ee();
    u && this.element.setAttribute("nonce", u);
  }
  var r = a.prototype;
  return r.attach = function() {
    if (!(this.element.parentNode || !this.sheet)) {
      qe(this.element, this.sheet.options);
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
  }, r.insertRules = function(e, n) {
    for (var i = 0; i < e.index.length; i++)
      this.insertRule(e.index[i], i, n);
  }, r.insertRule = function(e, n, i) {
    if (i === void 0 && (i = this.element.sheet), e.rules) {
      var s = e, u = i;
      if (e.type === "conditional" || e.type === "keyframes") {
        var o = L(i, n);
        if (u = D(i, s.toString({
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
    var l = L(i, n), h = D(i, f, l);
    return h === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(e, l, h), h);
  }, r.refCssRule = function(e, n, i) {
    e.renderable = i, e.options.parent instanceof X && this.cssRules.splice(n, 0, i);
  }, r.deleteRule = function(e) {
    var n = this.element.sheet, i = this.indexOf(e);
    return i === -1 ? !1 : (n.deleteRule(i), this.cssRules.splice(i, 1), !0);
  }, r.indexOf = function(e) {
    return this.cssRules.indexOf(e);
  }, r.replaceRule = function(e, n) {
    var i = this.indexOf(e);
    return i === -1 ? !1 : (this.element.sheet.deleteRule(i), this.cssRules.splice(i, 1), this.insertRule(n, i));
  }, r.getRules = function() {
    return this.element.sheet.cssRules;
  }, a;
}(), Ue = 0, Ke = /* @__PURE__ */ function() {
  function a(t) {
    this.id = Ue++, this.version = "10.9.0", this.plugins = new Ce(), this.options = {
      id: {
        minify: !1
      },
      createGenerateId: B,
      Renderer: re ? $e : null,
      plugins: []
    }, this.generateId = B({
      minify: !1
    });
    for (var e = 0; e < W.length; e++)
      this.plugins.use(W[e], {
        queue: "internal"
      });
    this.setup(t);
  }
  var r = a.prototype;
  return r.setup = function(e) {
    return e === void 0 && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = p({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), e.insertionPoint != null && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this;
  }, r.createStyleSheet = function(e, n) {
    n === void 0 && (n = {});
    var i = n, s = i.index;
    typeof s != "number" && (s = S.index === 0 ? 0 : S.index + 1);
    var u = new X(e, p({}, n, {
      jss: this,
      generateId: n.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: s
    }));
    return this.plugins.onProcessSheet(u), u;
  }, r.removeStyleSheet = function(e) {
    return e.detach(), S.remove(e), this;
  }, r.createRule = function(e, n, i) {
    if (n === void 0 && (n = {}), i === void 0 && (i = {}), typeof e == "object")
      return this.createRule(void 0, e, n);
    var s = p({}, i, {
      name: e,
      jss: this,
      Renderer: this.options.Renderer
    });
    s.generateId || (s.generateId = this.generateId), s.classes || (s.classes = {}), s.keyframes || (s.keyframes = {});
    var u = N(e, n, s);
    return u && this.plugins.onProcessRule(u), u;
  }, r.use = function() {
    for (var e = this, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return i.forEach(function(u) {
      e.plugins.use(u);
    }), this;
  }, a;
}(), Ge = function(r) {
  return new Ke(r);
};
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
Ge();
var ee = Date.now(), w = "fnValues" + ee, I = "fnStyle" + ++ee, We = function() {
  return {
    onCreateRule: function(t, e, n) {
      if (typeof e != "function")
        return null;
      var i = N(t, {}, n);
      return i[I] = e, i;
    },
    onProcessStyle: function(t, e) {
      if (w in e || I in e)
        return t;
      var n = {};
      for (var i in t) {
        var s = t[i];
        typeof s == "function" && (delete t[i], n[i] = s);
      }
      return e[w] = n, t;
    },
    onUpdate: function(t, e, n, i) {
      var s = e, u = s[I];
      u && (s.style = u(t) || {});
      var o = s[w];
      if (o)
        for (var f in o)
          s.prop(f, o[f](t), i);
    }
  };
};
const Be = We;
export {
  Be as f
};
//# sourceMappingURL=jss-plugin-rule-value-function.0b41422f.js.map
