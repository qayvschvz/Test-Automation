import { _ as d, c as z, d as N, b as D, a as te } from "./@babel.7bf9beb3.js";
import { i as re } from "./is-in-browser.06a13cf8.js";
var ne = {}.constructor;
function O(a) {
  if (a == null || typeof a != "object")
    return a;
  if (Array.isArray(a))
    return a.map(O);
  if (a.constructor !== ne)
    return a;
  var n = {};
  for (var r in a)
    n[r] = O(a[r]);
  return n;
}
function H(a, n, r) {
  a === void 0 && (a = "unnamed");
  var e = r.jss, t = O(n), i = e.plugins.onCreateRule(a, t, r);
  return i || null;
}
var M = function(n, r) {
  for (var e = "", t = 0; t < n.length && n[t] !== "!important"; t++)
    e && (e += r), e += n[t];
  return e;
}, S = function(n, r) {
  if (r === void 0 && (r = !1), !Array.isArray(n))
    return n;
  var e = "";
  if (Array.isArray(n[0]))
    for (var t = 0; t < n.length && n[t] !== "!important"; t++)
      e && (e += ", "), e += M(n[t], " ");
  else
    e = M(n, ", ");
  return !r && n[n.length - 1] === "!important" && (e += " !important"), e;
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
function m(a, n) {
  for (var r = "", e = 0; e < n; e++)
    r += "  ";
  return r + a;
}
function x(a, n, r) {
  r === void 0 && (r = {});
  var e = "";
  if (!n)
    return e;
  var t = r, i = t.indent, s = i === void 0 ? 0 : i, u = n.fallbacks;
  r.format === !1 && (s = -1 / 0);
  var l = R(r), o = l.linebreak, f = l.space;
  if (a && s++, u)
    if (Array.isArray(u))
      for (var h = 0; h < u.length; h++) {
        var y = u[h];
        for (var c in y) {
          var p = y[c];
          p != null && (e && (e += o), e += m(c + ":" + f + S(p) + ";", s));
        }
      }
    else
      for (var v in u) {
        var P = u[v];
        P != null && (e && (e += o), e += m(v + ":" + f + S(P) + ";", s));
      }
  for (var C in n) {
    var q = n[C];
    q != null && C !== "fallbacks" && (e && (e += o), e += m(C + ":" + f + S(q) + ";", s));
  }
  return !e && !r.allowEmpty || !a ? e : (s--, e && (e = "" + o + e + o), m("" + a + f + "{" + e, s) + m("}", s));
}
var ie = /([[\].#*$><+~=|^:(),"'`\s])/g, $ = typeof CSS < "u" && CSS.escape, G = function(a) {
  return $ ? $(a) : a.replace(ie, "\\$1");
}, Q = /* @__PURE__ */ function() {
  function a(r, e, t) {
    this.type = "style", this.isProcessed = !1;
    var i = t.sheet, s = t.Renderer;
    this.key = r, this.options = t, this.style = e, i ? this.renderer = i.renderer : s && (this.renderer = new s());
  }
  var n = a.prototype;
  return n.prop = function(e, t, i) {
    if (t === void 0)
      return this.style[e];
    var s = i ? i.force : !1;
    if (!s && this.style[e] === t)
      return this;
    var u = t;
    (!i || i.process !== !1) && (u = this.options.jss.plugins.onChangeValue(t, e, this));
    var l = u == null || u === !1, o = e in this.style;
    if (l && !o && !s)
      return this;
    var f = l && o;
    return f ? delete this.style[e] : this.style[e] = u, this.renderable && this.renderer ? (f ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, u), this) : this;
  }, a;
}(), j = /* @__PURE__ */ function(a) {
  z(n, a);
  function n(e, t, i) {
    var s;
    s = a.call(this, e, t, i) || this;
    var u = i.selector, l = i.scoped, o = i.sheet, f = i.generateId;
    return u ? s.selectorText = u : l !== !1 && (s.id = f(N(N(s)), o), s.selectorText = "." + G(s.id)), s;
  }
  var r = n.prototype;
  return r.applyTo = function(t) {
    var i = this.renderer;
    if (i) {
      var s = this.toJSON();
      for (var u in s)
        i.setProperty(t, u, s[u]);
    }
    return this;
  }, r.toJSON = function() {
    var t = {};
    for (var i in this.style) {
      var s = this.style[i];
      typeof s != "object" ? t[i] = s : Array.isArray(s) && (t[i] = S(s));
    }
    return t;
  }, r.toString = function(t) {
    var i = this.options.sheet, s = i ? i.options.link : !1, u = s ? d({}, t, {
      allowEmpty: !0
    }) : t;
    return x(this.selectorText, this.style, u);
  }, D(n, [{
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
  }]), n;
}(Q), se = {
  onCreateRule: function(n, r, e) {
    return n[0] === "@" || e.parent && e.parent.type === "keyframes" ? null : new j(n, r, e);
  }
}, w = {
  indent: 1,
  children: !0
}, ae = /@([\w-]+)/, ue = /* @__PURE__ */ function() {
  function a(r, e, t) {
    this.type = "conditional", this.isProcessed = !1, this.key = r;
    var i = r.match(ae);
    this.at = i ? i[1] : "unknown", this.query = t.name || "@" + this.at, this.options = t, this.rules = new k(d({}, t, {
      parent: this
    }));
    for (var s in e)
      this.rules.add(s, e[s]);
    this.rules.process();
  }
  var n = a.prototype;
  return n.getRule = function(e) {
    return this.rules.get(e);
  }, n.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, n.addRule = function(e, t, i) {
    var s = this.rules.add(e, t, i);
    return s ? (this.options.jss.plugins.onProcessRule(s), s) : null;
  }, n.replaceRule = function(e, t, i) {
    var s = this.rules.replace(e, t, i);
    return s && this.options.jss.plugins.onProcessRule(s), s;
  }, n.toString = function(e) {
    e === void 0 && (e = w);
    var t = R(e), i = t.linebreak;
    if (e.indent == null && (e.indent = w.indent), e.children == null && (e.children = w.children), e.children === !1)
      return this.query + " {}";
    var s = this.rules.toString(e);
    return s ? this.query + " {" + i + s + i + "}" : "";
  }, a;
}(), oe = /@media|@supports\s+/, le = {
  onCreateRule: function(n, r, e) {
    return oe.test(n) ? new ue(n, r, e) : null;
  }
}, I = {
  indent: 1,
  children: !0
}, fe = /@keyframes\s+([\w-]+)/, _ = /* @__PURE__ */ function() {
  function a(r, e, t) {
    this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
    var i = r.match(fe);
    i && i[1] ? this.name = i[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = t;
    var s = t.scoped, u = t.sheet, l = t.generateId;
    this.id = s === !1 ? this.name : G(l(this, u)), this.rules = new k(d({}, t, {
      parent: this
    }));
    for (var o in e)
      this.rules.add(o, e[o], d({}, t, {
        parent: this
      }));
    this.rules.process();
  }
  var n = a.prototype;
  return n.toString = function(e) {
    e === void 0 && (e = I);
    var t = R(e), i = t.linebreak;
    if (e.indent == null && (e.indent = I.indent), e.children == null && (e.children = I.children), e.children === !1)
      return this.at + " " + this.id + " {}";
    var s = this.rules.toString(e);
    return s && (s = "" + i + s + i), this.at + " " + this.id + " {" + s + "}";
  }, a;
}(), he = /@keyframes\s+/, de = /\$([\w-]+)/g, A = function(n, r) {
  return typeof n == "string" ? n.replace(de, function(e, t) {
    return t in r ? r[t] : e;
  }) : n;
}, K = function(n, r, e) {
  var t = n[r], i = A(t, e);
  i !== t && (n[r] = i);
}, ce = {
  onCreateRule: function(n, r, e) {
    return typeof n == "string" && he.test(n) ? new _(n, r, e) : null;
  },
  onProcessStyle: function(n, r, e) {
    return r.type !== "style" || !e || ("animation-name" in n && K(n, "animation-name", e.keyframes), "animation" in n && K(n, "animation", e.keyframes)), n;
  },
  onChangeValue: function(n, r, e) {
    var t = e.options.sheet;
    if (!t)
      return n;
    switch (r) {
      case "animation":
        return A(n, t.keyframes);
      case "animation-name":
        return A(n, t.keyframes);
      default:
        return n;
    }
  }
}, pe = /* @__PURE__ */ function(a) {
  z(n, a);
  function n() {
    return a.apply(this, arguments) || this;
  }
  var r = n.prototype;
  return r.toString = function(t) {
    var i = this.options.sheet, s = i ? i.options.link : !1, u = s ? d({}, t, {
      allowEmpty: !0
    }) : t;
    return x(this.key, this.style, u);
  }, n;
}(Q), ve = {
  onCreateRule: function(n, r, e) {
    return e.parent && e.parent.type === "keyframes" ? new pe(n, r, e) : null;
  }
}, ge = /* @__PURE__ */ function() {
  function a(r, e, t) {
    this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = r, this.style = e, this.options = t;
  }
  var n = a.prototype;
  return n.toString = function(e) {
    var t = R(e), i = t.linebreak;
    if (Array.isArray(this.style)) {
      for (var s = "", u = 0; u < this.style.length; u++)
        s += x(this.at, this.style[u]), this.style[u + 1] && (s += i);
      return s;
    }
    return x(this.at, this.style, e);
  }, a;
}(), ye = /@font-face/, Re = {
  onCreateRule: function(n, r, e) {
    return ye.test(n) ? new ge(n, r, e) : null;
  }
}, me = /* @__PURE__ */ function() {
  function a(r, e, t) {
    this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = r, this.style = e, this.options = t;
  }
  var n = a.prototype;
  return n.toString = function(e) {
    return x(this.key, this.style, e);
  }, a;
}(), Se = {
  onCreateRule: function(n, r, e) {
    return n === "@viewport" || n === "@-ms-viewport" ? new me(n, r, e) : null;
  }
}, be = /* @__PURE__ */ function() {
  function a(r, e, t) {
    this.type = "simple", this.isProcessed = !1, this.key = r, this.value = e, this.options = t;
  }
  var n = a.prototype;
  return n.toString = function(e) {
    if (Array.isArray(this.value)) {
      for (var t = "", i = 0; i < this.value.length; i++)
        t += this.key + " " + this.value[i] + ";", this.value[i + 1] && (t += `
`);
      return t;
    }
    return this.key + " " + this.value + ";";
  }, a;
}(), xe = {
  "@charset": !0,
  "@import": !0,
  "@namespace": !0
}, Pe = {
  onCreateRule: function(n, r, e) {
    return n in xe ? new be(n, r, e) : null;
  }
}, U = [se, le, ce, ve, Re, Se, Pe], ke = {
  process: !0
}, W = {
  force: !0,
  process: !0
}, k = /* @__PURE__ */ function() {
  function a(r) {
    this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = r, this.classes = r.classes, this.keyframes = r.keyframes;
  }
  var n = a.prototype;
  return n.add = function(e, t, i) {
    var s = this.options, u = s.parent, l = s.sheet, o = s.jss, f = s.Renderer, h = s.generateId, y = s.scoped, c = d({
      classes: this.classes,
      parent: u,
      sheet: l,
      jss: o,
      Renderer: f,
      generateId: h,
      scoped: y,
      name: e,
      keyframes: this.keyframes,
      selector: void 0
    }, i), p = e;
    e in this.raw && (p = e + "-d" + this.counter++), this.raw[p] = t, p in this.classes && (c.selector = "." + G(this.classes[p]));
    var v = H(p, t, c);
    if (!v)
      return null;
    this.register(v);
    var P = c.index === void 0 ? this.index.length : c.index;
    return this.index.splice(P, 0, v), v;
  }, n.replace = function(e, t, i) {
    var s = this.get(e), u = this.index.indexOf(s);
    s && this.remove(s);
    var l = i;
    return u !== -1 && (l = d({}, i, {
      index: u
    })), this.add(e, t, l);
  }, n.get = function(e) {
    return this.map[e];
  }, n.remove = function(e) {
    this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1);
  }, n.indexOf = function(e) {
    return this.index.indexOf(e);
  }, n.process = function() {
    var e = this.options.jss.plugins;
    this.index.slice(0).forEach(e.onProcessRule, e);
  }, n.register = function(e) {
    this.map[e.key] = e, e instanceof j ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof _ && this.keyframes && (this.keyframes[e.name] = e.id);
  }, n.unregister = function(e) {
    delete this.map[e.key], e instanceof j ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof _ && delete this.keyframes[e.name];
  }, n.update = function() {
    var e, t, i;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], i = arguments.length <= 2 ? void 0 : arguments[2]) : (t = arguments.length <= 0 ? void 0 : arguments[0], i = arguments.length <= 1 ? void 0 : arguments[1], e = null), e)
      this.updateOne(this.get(e), t, i);
    else
      for (var s = 0; s < this.index.length; s++)
        this.updateOne(this.index[s], t, i);
  }, n.updateOne = function(e, t, i) {
    i === void 0 && (i = ke);
    var s = this.options, u = s.jss.plugins, l = s.sheet;
    if (e.rules instanceof a) {
      e.rules.update(t, i);
      return;
    }
    var o = e.style;
    if (u.onUpdate(t, e, l, i), i.process && o && o !== e.style) {
      u.onProcessStyle(e.style, e, l);
      for (var f in e.style) {
        var h = e.style[f], y = o[f];
        h !== y && e.prop(f, h, W);
      }
      for (var c in o) {
        var p = e.style[c], v = o[c];
        p == null && p !== v && e.prop(c, null, W);
      }
    }
  }, n.toString = function(e) {
    for (var t = "", i = this.options.sheet, s = i ? i.options.link : !1, u = R(e), l = u.linebreak, o = 0; o < this.index.length; o++) {
      var f = this.index[o], h = f.toString(e);
      !h && !s || (t && (t += l), t += h);
    }
    return t;
  }, a;
}(), X = /* @__PURE__ */ function() {
  function a(r, e) {
    this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = d({}, e, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    }), e.Renderer && (this.renderer = new e.Renderer(this)), this.rules = new k(this.options);
    for (var t in r)
      this.rules.add(t, r[t]);
    this.rules.process();
  }
  var n = a.prototype;
  return n.attach = function() {
    return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this);
  }, n.detach = function() {
    return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
  }, n.addRule = function(e, t, i) {
    var s = this.queue;
    this.attached && !s && (this.queue = []);
    var u = this.rules.add(e, t, i);
    return u ? (this.options.jss.plugins.onProcessRule(u), this.attached ? (this.deployed && (s ? s.push(u) : (this.insertRule(u), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), u) : (this.deployed = !1, u)) : null;
  }, n.replaceRule = function(e, t, i) {
    var s = this.rules.get(e);
    if (!s)
      return this.addRule(e, t, i);
    var u = this.rules.replace(e, t, i);
    return u && this.options.jss.plugins.onProcessRule(u), this.attached ? (this.deployed && this.renderer && (u ? s.renderable && this.renderer.replaceRule(s.renderable, u) : this.renderer.deleteRule(s)), u) : (this.deployed = !1, u);
  }, n.insertRule = function(e) {
    this.renderer && this.renderer.insertRule(e);
  }, n.addRules = function(e, t) {
    var i = [];
    for (var s in e) {
      var u = this.addRule(s, e[s], t);
      u && i.push(u);
    }
    return i;
  }, n.getRule = function(e) {
    return this.rules.get(e);
  }, n.deleteRule = function(e) {
    var t = typeof e == "object" ? e : this.rules.get(e);
    return !t || this.attached && !t.renderable ? !1 : (this.rules.remove(t), this.attached && t.renderable && this.renderer ? this.renderer.deleteRule(t.renderable) : !0);
  }, n.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, n.deploy = function() {
    return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
  }, n.update = function() {
    var e;
    return (e = this.rules).update.apply(e, arguments), this;
  }, n.updateOne = function(e, t, i) {
    return this.rules.updateOne(e, t, i), this;
  }, n.toString = function(e) {
    return this.rules.toString(e);
  }, a;
}(), Ce = /* @__PURE__ */ function() {
  function a() {
    this.plugins = {
      internal: [],
      external: []
    }, this.registry = {};
  }
  var n = a.prototype;
  return n.onCreateRule = function(e, t, i) {
    for (var s = 0; s < this.registry.onCreateRule.length; s++) {
      var u = this.registry.onCreateRule[s](e, t, i);
      if (u)
        return u;
    }
    return null;
  }, n.onProcessRule = function(e) {
    if (!e.isProcessed) {
      for (var t = e.options.sheet, i = 0; i < this.registry.onProcessRule.length; i++)
        this.registry.onProcessRule[i](e, t);
      e.style && this.onProcessStyle(e.style, e, t), e.isProcessed = !0;
    }
  }, n.onProcessStyle = function(e, t, i) {
    for (var s = 0; s < this.registry.onProcessStyle.length; s++)
      t.style = this.registry.onProcessStyle[s](t.style, t, i);
  }, n.onProcessSheet = function(e) {
    for (var t = 0; t < this.registry.onProcessSheet.length; t++)
      this.registry.onProcessSheet[t](e);
  }, n.onUpdate = function(e, t, i, s) {
    for (var u = 0; u < this.registry.onUpdate.length; u++)
      this.registry.onUpdate[u](e, t, i, s);
  }, n.onChangeValue = function(e, t, i) {
    for (var s = e, u = 0; u < this.registry.onChangeValue.length; u++)
      s = this.registry.onChangeValue[u](s, t, i);
    return s;
  }, n.use = function(e, t) {
    t === void 0 && (t = {
      queue: "external"
    });
    var i = this.plugins[t.queue];
    i.indexOf(e) === -1 && (i.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(s, u) {
      for (var l in u)
        l in s && s[l].push(u[l]);
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
  var n = a.prototype;
  return n.add = function(e) {
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
  }, n.reset = function() {
    this.registry = [];
  }, n.remove = function(e) {
    var t = this.registry.indexOf(e);
    this.registry.splice(t, 1);
  }, n.toString = function(e) {
    for (var t = e === void 0 ? {} : e, i = t.attached, s = te(t, ["attached"]), u = R(s), l = u.linebreak, o = "", f = 0; f < this.registry.length; f++) {
      var h = this.registry[f];
      i != null && h.attached !== i || (o && (o += l), o += h.toString(s));
    }
    return o;
  }, D(a, [{
    key: "index",
    get: function() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]), a;
}(), b = new we(), V = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), T = "2f1acc6c3a606b082e5eef5e54414ffb";
V[T] == null && (V[T] = 0);
var F = V[T]++, J = function(n) {
  n === void 0 && (n = {});
  var r = 0, e = function(i, s) {
    r += 1;
    var u = "", l = "";
    return s && (s.options.classNamePrefix && (l = s.options.classNamePrefix), s.options.jss.id != null && (u = String(s.options.jss.id))), n.minify ? "" + (l || "c") + F + u + r : l + i.key + "-" + F + (u ? "-" + u : "") + "-" + r;
  };
  return e;
}, Y = function(n) {
  var r;
  return function() {
    return r || (r = n()), r;
  };
}, Ie = function(n, r) {
  try {
    return n.attributeStyleMap ? n.attributeStyleMap.get(r) : n.style.getPropertyValue(r);
  } catch {
    return "";
  }
}, Oe = function(n, r, e) {
  try {
    var t = e;
    if (Array.isArray(e) && (t = S(e, !0), e[e.length - 1] === "!important"))
      return n.style.setProperty(r, t, "important"), !0;
    n.attributeStyleMap ? n.attributeStyleMap.set(r, t) : n.style.setProperty(r, t);
  } catch {
    return !1;
  }
  return !0;
}, je = function(n, r) {
  try {
    n.attributeStyleMap ? n.attributeStyleMap.delete(r) : n.style.removeProperty(r);
  } catch {
  }
}, _e = function(n, r) {
  return n.selectorText = r, n.selectorText === r;
}, Z = Y(function() {
  return document.querySelector("head");
});
function Ae(a, n) {
  for (var r = 0; r < a.length; r++) {
    var e = a[r];
    if (e.attached && e.options.index > n.index && e.options.insertionPoint === n.insertionPoint)
      return e;
  }
  return null;
}
function Ve(a, n) {
  for (var r = a.length - 1; r >= 0; r--) {
    var e = a[r];
    if (e.attached && e.options.insertionPoint === n.insertionPoint)
      return e;
  }
  return null;
}
function Te(a) {
  for (var n = Z(), r = 0; r < n.childNodes.length; r++) {
    var e = n.childNodes[r];
    if (e.nodeType === 8 && e.nodeValue.trim() === a)
      return e;
  }
  return null;
}
function Ee(a) {
  var n = b.registry;
  if (n.length > 0) {
    var r = Ae(n, a);
    if (r && r.renderer)
      return {
        parent: r.renderer.element.parentNode,
        node: r.renderer.element
      };
    if (r = Ve(n, a), r && r.renderer)
      return {
        parent: r.renderer.element.parentNode,
        node: r.renderer.element.nextSibling
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
function Ge(a, n) {
  var r = n.insertionPoint, e = Ee(n);
  if (e !== !1 && e.parent) {
    e.parent.insertBefore(a, e.node);
    return;
  }
  if (r && typeof r.nodeType == "number") {
    var t = r, i = t.parentNode;
    i && i.insertBefore(a, t.nextSibling);
    return;
  }
  Z().appendChild(a);
}
var qe = Y(function() {
  var a = document.querySelector('meta[property="csp-nonce"]');
  return a ? a.getAttribute("content") : null;
}), B = function(n, r, e) {
  try {
    "insertRule" in n ? n.insertRule(r, e) : "appendRule" in n && n.appendRule(r);
  } catch {
    return !1;
  }
  return n.cssRules[e];
}, L = function(n, r) {
  var e = n.cssRules.length;
  return r === void 0 || r > e ? e : r;
}, Ne = function() {
  var n = document.createElement("style");
  return n.textContent = `
`, n;
}, Me = /* @__PURE__ */ function() {
  function a(r) {
    this.getPropertyValue = Ie, this.setProperty = Oe, this.removeProperty = je, this.setSelector = _e, this.hasInsertedRules = !1, this.cssRules = [], r && b.add(r), this.sheet = r;
    var e = this.sheet ? this.sheet.options : {}, t = e.media, i = e.meta, s = e.element;
    this.element = s || Ne(), this.element.setAttribute("data-jss", ""), t && this.element.setAttribute("media", t), i && this.element.setAttribute("data-meta", i);
    var u = qe();
    u && this.element.setAttribute("nonce", u);
  }
  var n = a.prototype;
  return n.attach = function() {
    if (!(this.element.parentNode || !this.sheet)) {
      Ge(this.element, this.sheet.options);
      var e = Boolean(this.sheet && this.sheet.deployed);
      this.hasInsertedRules && e && (this.hasInsertedRules = !1, this.deploy());
    }
  }, n.detach = function() {
    if (!!this.sheet) {
      var e = this.element.parentNode;
      e && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`);
    }
  }, n.deploy = function() {
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
  }, n.insertRules = function(e, t) {
    for (var i = 0; i < e.index.length; i++)
      this.insertRule(e.index[i], i, t);
  }, n.insertRule = function(e, t, i) {
    if (i === void 0 && (i = this.element.sheet), e.rules) {
      var s = e, u = i;
      if (e.type === "conditional" || e.type === "keyframes") {
        var l = L(i, t);
        if (u = B(i, s.toString({
          children: !1
        }), l), u === !1)
          return !1;
        this.refCssRule(e, l, u);
      }
      return this.insertRules(s.rules, u), u;
    }
    var o = e.toString();
    if (!o)
      return !1;
    var f = L(i, t), h = B(i, o, f);
    return h === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(e, f, h), h);
  }, n.refCssRule = function(e, t, i) {
    e.renderable = i, e.options.parent instanceof X && this.cssRules.splice(t, 0, i);
  }, n.deleteRule = function(e) {
    var t = this.element.sheet, i = this.indexOf(e);
    return i === -1 ? !1 : (t.deleteRule(i), this.cssRules.splice(i, 1), !0);
  }, n.indexOf = function(e) {
    return this.cssRules.indexOf(e);
  }, n.replaceRule = function(e, t) {
    var i = this.indexOf(e);
    return i === -1 ? !1 : (this.element.sheet.deleteRule(i), this.cssRules.splice(i, 1), this.insertRule(t, i));
  }, n.getRules = function() {
    return this.element.sheet.cssRules;
  }, a;
}(), $e = 0, Ke = /* @__PURE__ */ function() {
  function a(r) {
    this.id = $e++, this.version = "10.9.0", this.plugins = new Ce(), this.options = {
      id: {
        minify: !1
      },
      createGenerateId: J,
      Renderer: re ? Me : null,
      plugins: []
    }, this.generateId = J({
      minify: !1
    });
    for (var e = 0; e < U.length; e++)
      this.plugins.use(U[e], {
        queue: "internal"
      });
    this.setup(r);
  }
  var n = a.prototype;
  return n.setup = function(e) {
    return e === void 0 && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = d({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), e.insertionPoint != null && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this;
  }, n.createStyleSheet = function(e, t) {
    t === void 0 && (t = {});
    var i = t, s = i.index;
    typeof s != "number" && (s = b.index === 0 ? 0 : b.index + 1);
    var u = new X(e, d({}, t, {
      jss: this,
      generateId: t.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: s
    }));
    return this.plugins.onProcessSheet(u), u;
  }, n.removeStyleSheet = function(e) {
    return e.detach(), b.remove(e), this;
  }, n.createRule = function(e, t, i) {
    if (t === void 0 && (t = {}), i === void 0 && (i = {}), typeof e == "object")
      return this.createRule(void 0, e, t);
    var s = d({}, i, {
      name: e,
      jss: this,
      Renderer: this.options.Renderer
    });
    s.generateId || (s.generateId = this.generateId), s.classes || (s.classes = {}), s.keyframes || (s.keyframes = {});
    var u = H(e, t, s);
    return u && this.plugins.onProcessRule(u), u;
  }, n.use = function() {
    for (var e = this, t = arguments.length, i = new Array(t), s = 0; s < t; s++)
      i[s] = arguments[s];
    return i.forEach(function(u) {
      e.plugins.use(u);
    }), this;
  }, a;
}(), Ue = function(n) {
  return new Ke(n);
};
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
Ue();
var g = "@global", E = "@global ", We = /* @__PURE__ */ function() {
  function a(r, e, t) {
    this.type = "global", this.at = g, this.isProcessed = !1, this.key = r, this.options = t, this.rules = new k(d({}, t, {
      parent: this
    }));
    for (var i in e)
      this.rules.add(i, e[i]);
    this.rules.process();
  }
  var n = a.prototype;
  return n.getRule = function(e) {
    return this.rules.get(e);
  }, n.addRule = function(e, t, i) {
    var s = this.rules.add(e, t, i);
    return s && this.options.jss.plugins.onProcessRule(s), s;
  }, n.replaceRule = function(e, t, i) {
    var s = this.rules.replace(e, t, i);
    return s && this.options.jss.plugins.onProcessRule(s), s;
  }, n.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, n.toString = function(e) {
    return this.rules.toString(e);
  }, a;
}(), Fe = /* @__PURE__ */ function() {
  function a(r, e, t) {
    this.type = "global", this.at = g, this.isProcessed = !1, this.key = r, this.options = t;
    var i = r.substr(E.length);
    this.rule = t.jss.createRule(i, e, d({}, t, {
      parent: this
    }));
  }
  var n = a.prototype;
  return n.toString = function(e) {
    return this.rule ? this.rule.toString(e) : "";
  }, a;
}(), Je = /\s*,\s*/g;
function ee(a, n) {
  for (var r = a.split(Je), e = "", t = 0; t < r.length; t++)
    e += n + " " + r[t].trim(), r[t + 1] && (e += ", ");
  return e;
}
function Be(a, n) {
  var r = a.options, e = a.style, t = e ? e[g] : null;
  if (!!t) {
    for (var i in t)
      n.addRule(i, t[i], d({}, r, {
        selector: ee(i, a.selector)
      }));
    delete e[g];
  }
}
function Le(a, n) {
  var r = a.options, e = a.style;
  for (var t in e)
    if (!(t[0] !== "@" || t.substr(0, g.length) !== g)) {
      var i = ee(t.substr(g.length), a.selector);
      n.addRule(i, e[t], d({}, r, {
        selector: i
      })), delete e[t];
    }
}
function He() {
  function a(r, e, t) {
    if (!r)
      return null;
    if (r === g)
      return new We(r, e, t);
    if (r[0] === "@" && r.substr(0, E.length) === E)
      return new Fe(r, e, t);
    var i = t.parent;
    return i && (i.type === "global" || i.options.parent && i.options.parent.type === "global") && (t.scoped = !1), !t.selector && t.scoped === !1 && (t.selector = r), null;
  }
  function n(r, e) {
    r.type !== "style" || !e || (Be(r, e), Le(r, e));
  }
  return {
    onCreateRule: a,
    onProcessRule: n
  };
}
export {
  He as j
};
//# sourceMappingURL=jss-plugin-global.d2895978.js.map
