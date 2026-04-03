import { _ as g, b as Q, c as X, d as z, a as ie } from "./@babel.7bf9beb3.js";
import { i as se } from "./is-in-browser.06a13cf8.js";
var ae = {}.constructor;
function A(a) {
  if (a == null || typeof a != "object")
    return a;
  if (Array.isArray(a))
    return a.map(A);
  if (a.constructor !== ae)
    return a;
  var t = {};
  for (var n in a)
    t[n] = A(a[n]);
  return t;
}
function Y(a, t, n) {
  a === void 0 && (a = "unnamed");
  var e = n.jss, r = A(t), i = e.plugins.onCreateRule(a, r, n);
  return i || null;
}
var K = function(t, n) {
  for (var e = "", r = 0; r < t.length && t[r] !== "!important"; r++)
    e && (e += n), e += t[r];
  return e;
}, S = function(t, n) {
  if (n === void 0 && (n = !1), !Array.isArray(t))
    return t;
  var e = "";
  if (Array.isArray(t[0]))
    for (var r = 0; r < t.length && t[r] !== "!important"; r++)
      e && (e += ", "), e += K(t[r], " ");
  else
    e = K(t, ", ");
  return !n && t[t.length - 1] === "!important" && (e += " !important"), e;
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
function b(a, t) {
  for (var n = "", e = 0; e < t; e++)
    n += "  ";
  return n + a;
}
function w(a, t, n) {
  n === void 0 && (n = {});
  var e = "";
  if (!t)
    return e;
  var r = n, i = r.indent, s = i === void 0 ? 0 : i, u = t.fallbacks;
  n.format === !1 && (s = -1 / 0);
  var f = R(n), l = f.linebreak, h = f.space;
  if (a && s++, u)
    if (Array.isArray(u))
      for (var d = 0; d < u.length; d++) {
        var y = u[d];
        for (var c in y) {
          var p = y[c];
          p != null && (e && (e += l), e += b(c + ":" + h + S(p) + ";", s));
        }
      }
    else
      for (var v in u) {
        var C = u[v];
        C != null && (e && (e += l), e += b(v + ":" + h + S(C) + ";", s));
      }
  for (var I in t) {
    var U = t[I];
    U != null && I !== "fallbacks" && (e && (e += l), e += b(I + ":" + h + S(U) + ";", s));
  }
  return !e && !n.allowEmpty || !a ? e : (s--, e && (e = "" + l + e + l), b("" + a + h + "{" + e, s) + b("}", s));
}
var oe = /([[\].#*$><+~=|^:(),"'`\s])/g, G = typeof CSS < "u" && CSS.escape, q = function(a) {
  return G ? G(a) : a.replace(oe, "\\$1");
}, Z = /* @__PURE__ */ function() {
  function a(n, e, r) {
    this.type = "style", this.isProcessed = !1;
    var i = r.sheet, s = r.Renderer;
    this.key = n, this.options = r, this.style = e, i ? this.renderer = i.renderer : s && (this.renderer = new s());
  }
  var t = a.prototype;
  return t.prop = function(e, r, i) {
    if (r === void 0)
      return this.style[e];
    var s = i ? i.force : !1;
    if (!s && this.style[e] === r)
      return this;
    var u = r;
    (!i || i.process !== !1) && (u = this.options.jss.plugins.onChangeValue(r, e, this));
    var f = u == null || u === !1, l = e in this.style;
    if (f && !l && !s)
      return this;
    var h = f && l;
    return h ? delete this.style[e] : this.style[e] = u, this.renderable && this.renderer ? (h ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, u), this) : this;
  }, a;
}(), V = /* @__PURE__ */ function(a) {
  X(t, a);
  function t(e, r, i) {
    var s;
    s = a.call(this, e, r, i) || this;
    var u = i.selector, f = i.scoped, l = i.sheet, h = i.generateId;
    return u ? s.selectorText = u : f !== !1 && (s.id = h(z(z(s)), l), s.selectorText = "." + q(s.id)), s;
  }
  var n = t.prototype;
  return n.applyTo = function(r) {
    var i = this.renderer;
    if (i) {
      var s = this.toJSON();
      for (var u in s)
        i.setProperty(r, u, s[u]);
    }
    return this;
  }, n.toJSON = function() {
    var r = {};
    for (var i in this.style) {
      var s = this.style[i];
      typeof s != "object" ? r[i] = s : Array.isArray(s) && (r[i] = S(s));
    }
    return r;
  }, n.toString = function(r) {
    var i = this.options.sheet, s = i ? i.options.link : !1, u = s ? g({}, r, {
      allowEmpty: !0
    }) : r;
    return w(this.selectorText, this.style, u);
  }, Q(t, [{
    key: "selector",
    set: function(r) {
      if (r !== this.selectorText) {
        this.selectorText = r;
        var i = this.renderer, s = this.renderable;
        if (!(!s || !i)) {
          var u = i.setSelector(s, r);
          u || i.replaceRule(s, this);
        }
      }
    },
    get: function() {
      return this.selectorText;
    }
  }]), t;
}(Z), ue = {
  onCreateRule: function(t, n, e) {
    return t[0] === "@" || e.parent && e.parent.type === "keyframes" ? null : new V(t, n, e);
  }
}, O = {
  indent: 1,
  children: !0
}, le = /@([\w-]+)/, fe = /* @__PURE__ */ function() {
  function a(n, e, r) {
    this.type = "conditional", this.isProcessed = !1, this.key = n;
    var i = n.match(le);
    this.at = i ? i[1] : "unknown", this.query = r.name || "@" + this.at, this.options = r, this.rules = new M(g({}, r, {
      parent: this
    }));
    for (var s in e)
      this.rules.add(s, e[s]);
    this.rules.process();
  }
  var t = a.prototype;
  return t.getRule = function(e) {
    return this.rules.get(e);
  }, t.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, t.addRule = function(e, r, i) {
    var s = this.rules.add(e, r, i);
    return s ? (this.options.jss.plugins.onProcessRule(s), s) : null;
  }, t.replaceRule = function(e, r, i) {
    var s = this.rules.replace(e, r, i);
    return s && this.options.jss.plugins.onProcessRule(s), s;
  }, t.toString = function(e) {
    e === void 0 && (e = O);
    var r = R(e), i = r.linebreak;
    if (e.indent == null && (e.indent = O.indent), e.children == null && (e.children = O.children), e.children === !1)
      return this.query + " {}";
    var s = this.rules.toString(e);
    return s ? this.query + " {" + i + s + i + "}" : "";
  }, a;
}(), he = /@media|@supports\s+/, de = {
  onCreateRule: function(t, n, e) {
    return he.test(t) ? new fe(t, n, e) : null;
  }
}, j = {
  indent: 1,
  children: !0
}, ce = /@keyframes\s+([\w-]+)/, _ = /* @__PURE__ */ function() {
  function a(n, e, r) {
    this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
    var i = n.match(ce);
    i && i[1] ? this.name = i[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = r;
    var s = r.scoped, u = r.sheet, f = r.generateId;
    this.id = s === !1 ? this.name : q(f(this, u)), this.rules = new M(g({}, r, {
      parent: this
    }));
    for (var l in e)
      this.rules.add(l, e[l], g({}, r, {
        parent: this
      }));
    this.rules.process();
  }
  var t = a.prototype;
  return t.toString = function(e) {
    e === void 0 && (e = j);
    var r = R(e), i = r.linebreak;
    if (e.indent == null && (e.indent = j.indent), e.children == null && (e.children = j.children), e.children === !1)
      return this.at + " " + this.id + " {}";
    var s = this.rules.toString(e);
    return s && (s = "" + i + s + i), this.at + " " + this.id + " {" + s + "}";
  }, a;
}(), pe = /@keyframes\s+/, ge = /\$([\w-]+)/g, T = function(t, n) {
  return typeof t == "string" ? t.replace(ge, function(e, r) {
    return r in n ? n[r] : e;
  }) : t;
}, W = function(t, n, e) {
  var r = t[n], i = T(r, e);
  i !== r && (t[n] = i);
}, ve = {
  onCreateRule: function(t, n, e) {
    return typeof t == "string" && pe.test(t) ? new _(t, n, e) : null;
  },
  onProcessStyle: function(t, n, e) {
    return n.type !== "style" || !e || ("animation-name" in t && W(t, "animation-name", e.keyframes), "animation" in t && W(t, "animation", e.keyframes)), t;
  },
  onChangeValue: function(t, n, e) {
    var r = e.options.sheet;
    if (!r)
      return t;
    switch (n) {
      case "animation":
        return T(t, r.keyframes);
      case "animation-name":
        return T(t, r.keyframes);
      default:
        return t;
    }
  }
}, ye = /* @__PURE__ */ function(a) {
  X(t, a);
  function t() {
    return a.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.toString = function(r) {
    var i = this.options.sheet, s = i ? i.options.link : !1, u = s ? g({}, r, {
      allowEmpty: !0
    }) : r;
    return w(this.key, this.style, u);
  }, t;
}(Z), me = {
  onCreateRule: function(t, n, e) {
    return e.parent && e.parent.type === "keyframes" ? new ye(t, n, e) : null;
  }
}, Re = /* @__PURE__ */ function() {
  function a(n, e, r) {
    this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = n, this.style = e, this.options = r;
  }
  var t = a.prototype;
  return t.toString = function(e) {
    var r = R(e), i = r.linebreak;
    if (Array.isArray(this.style)) {
      for (var s = "", u = 0; u < this.style.length; u++)
        s += w(this.at, this.style[u]), this.style[u + 1] && (s += i);
      return s;
    }
    return w(this.at, this.style, e);
  }, a;
}(), be = /@font-face/, Se = {
  onCreateRule: function(t, n, e) {
    return be.test(t) ? new Re(t, n, e) : null;
  }
}, xe = /* @__PURE__ */ function() {
  function a(n, e, r) {
    this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = n, this.style = e, this.options = r;
  }
  var t = a.prototype;
  return t.toString = function(e) {
    return w(this.key, this.style, e);
  }, a;
}(), ke = {
  onCreateRule: function(t, n, e) {
    return t === "@viewport" || t === "@-ms-viewport" ? new xe(t, n, e) : null;
  }
}, we = /* @__PURE__ */ function() {
  function a(n, e, r) {
    this.type = "simple", this.isProcessed = !1, this.key = n, this.value = e, this.options = r;
  }
  var t = a.prototype;
  return t.toString = function(e) {
    if (Array.isArray(this.value)) {
      for (var r = "", i = 0; i < this.value.length; i++)
        r += this.key + " " + this.value[i] + ";", this.value[i + 1] && (r += `
`);
      return r;
    }
    return this.key + " " + this.value + ";";
  }, a;
}(), Ce = {
  "@charset": !0,
  "@import": !0,
  "@namespace": !0
}, Pe = {
  onCreateRule: function(t, n, e) {
    return t in Ce ? new we(t, n, e) : null;
  }
}, F = [ue, de, ve, me, Se, ke, Pe], Ie = {
  process: !0
}, J = {
  force: !0,
  process: !0
}, M = /* @__PURE__ */ function() {
  function a(n) {
    this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = n, this.classes = n.classes, this.keyframes = n.keyframes;
  }
  var t = a.prototype;
  return t.add = function(e, r, i) {
    var s = this.options, u = s.parent, f = s.sheet, l = s.jss, h = s.Renderer, d = s.generateId, y = s.scoped, c = g({
      classes: this.classes,
      parent: u,
      sheet: f,
      jss: l,
      Renderer: h,
      generateId: d,
      scoped: y,
      name: e,
      keyframes: this.keyframes,
      selector: void 0
    }, i), p = e;
    e in this.raw && (p = e + "-d" + this.counter++), this.raw[p] = r, p in this.classes && (c.selector = "." + q(this.classes[p]));
    var v = Y(p, r, c);
    if (!v)
      return null;
    this.register(v);
    var C = c.index === void 0 ? this.index.length : c.index;
    return this.index.splice(C, 0, v), v;
  }, t.replace = function(e, r, i) {
    var s = this.get(e), u = this.index.indexOf(s);
    s && this.remove(s);
    var f = i;
    return u !== -1 && (f = g({}, i, {
      index: u
    })), this.add(e, r, f);
  }, t.get = function(e) {
    return this.map[e];
  }, t.remove = function(e) {
    this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1);
  }, t.indexOf = function(e) {
    return this.index.indexOf(e);
  }, t.process = function() {
    var e = this.options.jss.plugins;
    this.index.slice(0).forEach(e.onProcessRule, e);
  }, t.register = function(e) {
    this.map[e.key] = e, e instanceof V ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof _ && this.keyframes && (this.keyframes[e.name] = e.id);
  }, t.unregister = function(e) {
    delete this.map[e.key], e instanceof V ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof _ && delete this.keyframes[e.name];
  }, t.update = function() {
    var e, r, i;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (e = arguments.length <= 0 ? void 0 : arguments[0], r = arguments.length <= 1 ? void 0 : arguments[1], i = arguments.length <= 2 ? void 0 : arguments[2]) : (r = arguments.length <= 0 ? void 0 : arguments[0], i = arguments.length <= 1 ? void 0 : arguments[1], e = null), e)
      this.updateOne(this.get(e), r, i);
    else
      for (var s = 0; s < this.index.length; s++)
        this.updateOne(this.index[s], r, i);
  }, t.updateOne = function(e, r, i) {
    i === void 0 && (i = Ie);
    var s = this.options, u = s.jss.plugins, f = s.sheet;
    if (e.rules instanceof a) {
      e.rules.update(r, i);
      return;
    }
    var l = e.style;
    if (u.onUpdate(r, e, f, i), i.process && l && l !== e.style) {
      u.onProcessStyle(e.style, e, f);
      for (var h in e.style) {
        var d = e.style[h], y = l[h];
        d !== y && e.prop(h, d, J);
      }
      for (var c in l) {
        var p = e.style[c], v = l[c];
        p == null && p !== v && e.prop(c, null, J);
      }
    }
  }, t.toString = function(e) {
    for (var r = "", i = this.options.sheet, s = i ? i.options.link : !1, u = R(e), f = u.linebreak, l = 0; l < this.index.length; l++) {
      var h = this.index[l], d = h.toString(e);
      !d && !s || (r && (r += f), r += d);
    }
    return r;
  }, a;
}(), ee = /* @__PURE__ */ function() {
  function a(n, e) {
    this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = g({}, e, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    }), e.Renderer && (this.renderer = new e.Renderer(this)), this.rules = new M(this.options);
    for (var r in n)
      this.rules.add(r, n[r]);
    this.rules.process();
  }
  var t = a.prototype;
  return t.attach = function() {
    return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this);
  }, t.detach = function() {
    return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
  }, t.addRule = function(e, r, i) {
    var s = this.queue;
    this.attached && !s && (this.queue = []);
    var u = this.rules.add(e, r, i);
    return u ? (this.options.jss.plugins.onProcessRule(u), this.attached ? (this.deployed && (s ? s.push(u) : (this.insertRule(u), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), u) : (this.deployed = !1, u)) : null;
  }, t.replaceRule = function(e, r, i) {
    var s = this.rules.get(e);
    if (!s)
      return this.addRule(e, r, i);
    var u = this.rules.replace(e, r, i);
    return u && this.options.jss.plugins.onProcessRule(u), this.attached ? (this.deployed && this.renderer && (u ? s.renderable && this.renderer.replaceRule(s.renderable, u) : this.renderer.deleteRule(s)), u) : (this.deployed = !1, u);
  }, t.insertRule = function(e) {
    this.renderer && this.renderer.insertRule(e);
  }, t.addRules = function(e, r) {
    var i = [];
    for (var s in e) {
      var u = this.addRule(s, e[s], r);
      u && i.push(u);
    }
    return i;
  }, t.getRule = function(e) {
    return this.rules.get(e);
  }, t.deleteRule = function(e) {
    var r = typeof e == "object" ? e : this.rules.get(e);
    return !r || this.attached && !r.renderable ? !1 : (this.rules.remove(r), this.attached && r.renderable && this.renderer ? this.renderer.deleteRule(r.renderable) : !0);
  }, t.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, t.deploy = function() {
    return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
  }, t.update = function() {
    var e;
    return (e = this.rules).update.apply(e, arguments), this;
  }, t.updateOne = function(e, r, i) {
    return this.rules.updateOne(e, r, i), this;
  }, t.toString = function(e) {
    return this.rules.toString(e);
  }, a;
}(), Oe = /* @__PURE__ */ function() {
  function a() {
    this.plugins = {
      internal: [],
      external: []
    }, this.registry = {};
  }
  var t = a.prototype;
  return t.onCreateRule = function(e, r, i) {
    for (var s = 0; s < this.registry.onCreateRule.length; s++) {
      var u = this.registry.onCreateRule[s](e, r, i);
      if (u)
        return u;
    }
    return null;
  }, t.onProcessRule = function(e) {
    if (!e.isProcessed) {
      for (var r = e.options.sheet, i = 0; i < this.registry.onProcessRule.length; i++)
        this.registry.onProcessRule[i](e, r);
      e.style && this.onProcessStyle(e.style, e, r), e.isProcessed = !0;
    }
  }, t.onProcessStyle = function(e, r, i) {
    for (var s = 0; s < this.registry.onProcessStyle.length; s++)
      r.style = this.registry.onProcessStyle[s](r.style, r, i);
  }, t.onProcessSheet = function(e) {
    for (var r = 0; r < this.registry.onProcessSheet.length; r++)
      this.registry.onProcessSheet[r](e);
  }, t.onUpdate = function(e, r, i, s) {
    for (var u = 0; u < this.registry.onUpdate.length; u++)
      this.registry.onUpdate[u](e, r, i, s);
  }, t.onChangeValue = function(e, r, i) {
    for (var s = e, u = 0; u < this.registry.onChangeValue.length; u++)
      s = this.registry.onChangeValue[u](s, r, i);
    return s;
  }, t.use = function(e, r) {
    r === void 0 && (r = {
      queue: "external"
    });
    var i = this.plugins[r.queue];
    i.indexOf(e) === -1 && (i.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(s, u) {
      for (var f in u)
        f in s && s[f].push(u[f]);
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
}(), je = /* @__PURE__ */ function() {
  function a() {
    this.registry = [];
  }
  var t = a.prototype;
  return t.add = function(e) {
    var r = this.registry, i = e.options.index;
    if (r.indexOf(e) === -1) {
      if (r.length === 0 || i >= this.index) {
        r.push(e);
        return;
      }
      for (var s = 0; s < r.length; s++)
        if (r[s].options.index > i) {
          r.splice(s, 0, e);
          return;
        }
    }
  }, t.reset = function() {
    this.registry = [];
  }, t.remove = function(e) {
    var r = this.registry.indexOf(e);
    this.registry.splice(r, 1);
  }, t.toString = function(e) {
    for (var r = e === void 0 ? {} : e, i = r.attached, s = ie(r, ["attached"]), u = R(s), f = u.linebreak, l = "", h = 0; h < this.registry.length; h++) {
      var d = this.registry[h];
      i != null && d.attached !== i || (l && (l += f), l += d.toString(s));
    }
    return l;
  }, Q(a, [{
    key: "index",
    get: function() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]), a;
}(), x = new je(), E = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), N = "2f1acc6c3a606b082e5eef5e54414ffb";
E[N] == null && (E[N] = 0);
var B = E[N]++, L = function(t) {
  t === void 0 && (t = {});
  var n = 0, e = function(i, s) {
    n += 1;
    var u = "", f = "";
    return s && (s.options.classNamePrefix && (f = s.options.classNamePrefix), s.options.jss.id != null && (u = String(s.options.jss.id))), t.minify ? "" + (f || "c") + B + u + n : f + i.key + "-" + B + (u ? "-" + u : "") + "-" + n;
  };
  return e;
}, te = function(t) {
  var n;
  return function() {
    return n || (n = t()), n;
  };
}, Ae = function(t, n) {
  try {
    return t.attributeStyleMap ? t.attributeStyleMap.get(n) : t.style.getPropertyValue(n);
  } catch {
    return "";
  }
}, Ve = function(t, n, e) {
  try {
    var r = e;
    if (Array.isArray(e) && (r = S(e, !0), e[e.length - 1] === "!important"))
      return t.style.setProperty(n, r, "important"), !0;
    t.attributeStyleMap ? t.attributeStyleMap.set(n, r) : t.style.setProperty(n, r);
  } catch {
    return !1;
  }
  return !0;
}, _e = function(t, n) {
  try {
    t.attributeStyleMap ? t.attributeStyleMap.delete(n) : t.style.removeProperty(n);
  } catch {
  }
}, Te = function(t, n) {
  return t.selectorText = n, t.selectorText === n;
}, re = te(function() {
  return document.querySelector("head");
});
function Ee(a, t) {
  for (var n = 0; n < a.length; n++) {
    var e = a[n];
    if (e.attached && e.options.index > t.index && e.options.insertionPoint === t.insertionPoint)
      return e;
  }
  return null;
}
function Ne(a, t) {
  for (var n = a.length - 1; n >= 0; n--) {
    var e = a[n];
    if (e.attached && e.options.insertionPoint === t.insertionPoint)
      return e;
  }
  return null;
}
function qe(a) {
  for (var t = re(), n = 0; n < t.childNodes.length; n++) {
    var e = t.childNodes[n];
    if (e.nodeType === 8 && e.nodeValue.trim() === a)
      return e;
  }
  return null;
}
function Me(a) {
  var t = x.registry;
  if (t.length > 0) {
    var n = Ee(t, a);
    if (n && n.renderer)
      return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element
      };
    if (n = Ne(t, a), n && n.renderer)
      return {
        parent: n.renderer.element.parentNode,
        node: n.renderer.element.nextSibling
      };
  }
  var e = a.insertionPoint;
  if (e && typeof e == "string") {
    var r = qe(e);
    if (r)
      return {
        parent: r.parentNode,
        node: r.nextSibling
      };
  }
  return !1;
}
function $e(a, t) {
  var n = t.insertionPoint, e = Me(t);
  if (e !== !1 && e.parent) {
    e.parent.insertBefore(a, e.node);
    return;
  }
  if (n && typeof n.nodeType == "number") {
    var r = n, i = r.parentNode;
    i && i.insertBefore(a, r.nextSibling);
    return;
  }
  re().appendChild(a);
}
var Ue = te(function() {
  var a = document.querySelector('meta[property="csp-nonce"]');
  return a ? a.getAttribute("content") : null;
}), D = function(t, n, e) {
  try {
    "insertRule" in t ? t.insertRule(n, e) : "appendRule" in t && t.appendRule(n);
  } catch {
    return !1;
  }
  return t.cssRules[e];
}, H = function(t, n) {
  var e = t.cssRules.length;
  return n === void 0 || n > e ? e : n;
}, ze = function() {
  var t = document.createElement("style");
  return t.textContent = `
`, t;
}, Ke = /* @__PURE__ */ function() {
  function a(n) {
    this.getPropertyValue = Ae, this.setProperty = Ve, this.removeProperty = _e, this.setSelector = Te, this.hasInsertedRules = !1, this.cssRules = [], n && x.add(n), this.sheet = n;
    var e = this.sheet ? this.sheet.options : {}, r = e.media, i = e.meta, s = e.element;
    this.element = s || ze(), this.element.setAttribute("data-jss", ""), r && this.element.setAttribute("media", r), i && this.element.setAttribute("data-meta", i);
    var u = Ue();
    u && this.element.setAttribute("nonce", u);
  }
  var t = a.prototype;
  return t.attach = function() {
    if (!(this.element.parentNode || !this.sheet)) {
      $e(this.element, this.sheet.options);
      var e = Boolean(this.sheet && this.sheet.deployed);
      this.hasInsertedRules && e && (this.hasInsertedRules = !1, this.deploy());
    }
  }, t.detach = function() {
    if (!!this.sheet) {
      var e = this.element.parentNode;
      e && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`);
    }
  }, t.deploy = function() {
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
  }, t.insertRules = function(e, r) {
    for (var i = 0; i < e.index.length; i++)
      this.insertRule(e.index[i], i, r);
  }, t.insertRule = function(e, r, i) {
    if (i === void 0 && (i = this.element.sheet), e.rules) {
      var s = e, u = i;
      if (e.type === "conditional" || e.type === "keyframes") {
        var f = H(i, r);
        if (u = D(i, s.toString({
          children: !1
        }), f), u === !1)
          return !1;
        this.refCssRule(e, f, u);
      }
      return this.insertRules(s.rules, u), u;
    }
    var l = e.toString();
    if (!l)
      return !1;
    var h = H(i, r), d = D(i, l, h);
    return d === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(e, h, d), d);
  }, t.refCssRule = function(e, r, i) {
    e.renderable = i, e.options.parent instanceof ee && this.cssRules.splice(r, 0, i);
  }, t.deleteRule = function(e) {
    var r = this.element.sheet, i = this.indexOf(e);
    return i === -1 ? !1 : (r.deleteRule(i), this.cssRules.splice(i, 1), !0);
  }, t.indexOf = function(e) {
    return this.cssRules.indexOf(e);
  }, t.replaceRule = function(e, r) {
    var i = this.indexOf(e);
    return i === -1 ? !1 : (this.element.sheet.deleteRule(i), this.cssRules.splice(i, 1), this.insertRule(r, i));
  }, t.getRules = function() {
    return this.element.sheet.cssRules;
  }, a;
}(), Ge = 0, We = /* @__PURE__ */ function() {
  function a(n) {
    this.id = Ge++, this.version = "10.9.0", this.plugins = new Oe(), this.options = {
      id: {
        minify: !1
      },
      createGenerateId: L,
      Renderer: se ? Ke : null,
      plugins: []
    }, this.generateId = L({
      minify: !1
    });
    for (var e = 0; e < F.length; e++)
      this.plugins.use(F[e], {
        queue: "internal"
      });
    this.setup(n);
  }
  var t = a.prototype;
  return t.setup = function(e) {
    return e === void 0 && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = g({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), e.insertionPoint != null && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this;
  }, t.createStyleSheet = function(e, r) {
    r === void 0 && (r = {});
    var i = r, s = i.index;
    typeof s != "number" && (s = x.index === 0 ? 0 : x.index + 1);
    var u = new ee(e, g({}, r, {
      jss: this,
      generateId: r.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: s
    }));
    return this.plugins.onProcessSheet(u), u;
  }, t.removeStyleSheet = function(e) {
    return e.detach(), x.remove(e), this;
  }, t.createRule = function(e, r, i) {
    if (r === void 0 && (r = {}), i === void 0 && (i = {}), typeof e == "object")
      return this.createRule(void 0, e, r);
    var s = g({}, i, {
      name: e,
      jss: this,
      Renderer: this.options.Renderer
    });
    s.generateId || (s.generateId = this.generateId), s.classes || (s.classes = {}), s.keyframes || (s.keyframes = {});
    var u = Y(e, r, s);
    return u && this.plugins.onProcessRule(u), u;
  }, t.use = function() {
    for (var e = this, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return i.forEach(function(u) {
      e.plugins.use(u);
    }), this;
  }, a;
}(), Fe = function(t) {
  return new We(t);
}, $ = typeof CSS == "object" && CSS != null && "number" in CSS;
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
Fe();
var o = $ && CSS ? CSS.px : "px", P = $ && CSS ? CSS.ms : "ms", m = $ && CSS ? CSS.percent : "%", Je = {
  "animation-delay": P,
  "animation-duration": P,
  "background-position": o,
  "background-position-x": o,
  "background-position-y": o,
  "background-size": o,
  border: o,
  "border-bottom": o,
  "border-bottom-left-radius": o,
  "border-bottom-right-radius": o,
  "border-bottom-width": o,
  "border-left": o,
  "border-left-width": o,
  "border-radius": o,
  "border-right": o,
  "border-right-width": o,
  "border-top": o,
  "border-top-left-radius": o,
  "border-top-right-radius": o,
  "border-top-width": o,
  "border-width": o,
  "border-block": o,
  "border-block-end": o,
  "border-block-end-width": o,
  "border-block-start": o,
  "border-block-start-width": o,
  "border-block-width": o,
  "border-inline": o,
  "border-inline-end": o,
  "border-inline-end-width": o,
  "border-inline-start": o,
  "border-inline-start-width": o,
  "border-inline-width": o,
  "border-start-start-radius": o,
  "border-start-end-radius": o,
  "border-end-start-radius": o,
  "border-end-end-radius": o,
  margin: o,
  "margin-bottom": o,
  "margin-left": o,
  "margin-right": o,
  "margin-top": o,
  "margin-block": o,
  "margin-block-end": o,
  "margin-block-start": o,
  "margin-inline": o,
  "margin-inline-end": o,
  "margin-inline-start": o,
  padding: o,
  "padding-bottom": o,
  "padding-left": o,
  "padding-right": o,
  "padding-top": o,
  "padding-block": o,
  "padding-block-end": o,
  "padding-block-start": o,
  "padding-inline": o,
  "padding-inline-end": o,
  "padding-inline-start": o,
  "mask-position-x": o,
  "mask-position-y": o,
  "mask-size": o,
  height: o,
  width: o,
  "min-height": o,
  "max-height": o,
  "min-width": o,
  "max-width": o,
  bottom: o,
  left: o,
  top: o,
  right: o,
  inset: o,
  "inset-block": o,
  "inset-block-end": o,
  "inset-block-start": o,
  "inset-inline": o,
  "inset-inline-end": o,
  "inset-inline-start": o,
  "box-shadow": o,
  "text-shadow": o,
  "column-gap": o,
  "column-rule": o,
  "column-rule-width": o,
  "column-width": o,
  "font-size": o,
  "font-size-delta": o,
  "letter-spacing": o,
  "text-decoration-thickness": o,
  "text-indent": o,
  "text-stroke": o,
  "text-stroke-width": o,
  "word-spacing": o,
  motion: o,
  "motion-offset": o,
  outline: o,
  "outline-offset": o,
  "outline-width": o,
  perspective: o,
  "perspective-origin-x": m,
  "perspective-origin-y": m,
  "transform-origin": m,
  "transform-origin-x": m,
  "transform-origin-y": m,
  "transform-origin-z": m,
  "transition-delay": P,
  "transition-duration": P,
  "vertical-align": o,
  "flex-basis": o,
  "shape-margin": o,
  size: o,
  gap: o,
  grid: o,
  "grid-gap": o,
  "row-gap": o,
  "grid-row-gap": o,
  "grid-column-gap": o,
  "grid-template-rows": o,
  "grid-template-columns": o,
  "grid-auto-rows": o,
  "grid-auto-columns": o,
  "box-shadow-x": o,
  "box-shadow-y": o,
  "box-shadow-blur": o,
  "box-shadow-spread": o,
  "font-line-height": o,
  "text-shadow-x": o,
  "text-shadow-y": o,
  "text-shadow-blur": o
};
function ne(a) {
  var t = /(-[a-z])/g, n = function(s) {
    return s[1].toUpperCase();
  }, e = {};
  for (var r in a)
    e[r] = a[r], e[r.replace(t, n)] = a[r];
  return e;
}
var Be = ne(Je);
function k(a, t, n) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    for (var e = 0; e < t.length; e++)
      t[e] = k(a, t[e], n);
  else if (typeof t == "object")
    if (a === "fallbacks")
      for (var r in t)
        t[r] = k(r, t[r], n);
    else
      for (var i in t)
        t[i] = k(a + "-" + i, t[i], n);
  else if (typeof t == "number" && isNaN(t) === !1) {
    var s = n[a] || Be[a];
    return s && !(t === 0 && s === o) ? typeof s == "function" ? s(t).toString() : "" + t + s : t.toString();
  }
  return t;
}
function He(a) {
  a === void 0 && (a = {});
  var t = ne(a);
  function n(r, i) {
    if (i.type !== "style")
      return r;
    for (var s in r)
      r[s] = k(s, r[s], t);
    return r;
  }
  function e(r, i) {
    return k(i, r, t);
  }
  return {
    onProcessStyle: n,
    onChangeValue: e
  };
}
export {
  He as d
};
//# sourceMappingURL=jss-plugin-default-unit.d4668efa.js.map
