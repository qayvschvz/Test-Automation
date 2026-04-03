var C = {
  Object,
  Array,
  Function,
  Number,
  String,
  Date,
  RegExp
}, te = function t(e) {
  return typeof Buffer < "u" && (C.Buffer = Buffer), typeof Promise < "u" && (C.Promise = Promise), t.definition = {
    compile: function(n) {
      if (typeof n == "string") {
        var r = a(n);
        return function(o) {
          return o instanceof r;
        };
      }
      var i = n.map(a);
      return function(o) {
        for (var u = 0; u < i.length; u++)
          if (o instanceof i[u])
            return !0;
        return !1;
      };
    },
    CONSTRUCTORS: C,
    metaSchema: {
      anyOf: [
        { type: "string" },
        {
          type: "array",
          items: { type: "string" }
        }
      ]
    }
  }, e.addKeyword("instanceof", t.definition), e;
  function a(n) {
    var r = C[n];
    if (r)
      return r;
    throw new Error('invalid "instanceof" keyword value ' + n);
  }
}, ae = function t(e) {
  return t.definition = {
    type: "number",
    macro: function(n, r) {
      var i = n[0], o = n[1], u = r.exclusiveRange;
      return a(i, o, u), u === !0 ? { exclusiveMinimum: i, exclusiveMaximum: o } : { minimum: i, maximum: o };
    },
    metaSchema: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: { type: "number" }
    }
  }, e.addKeyword("range", t.definition), e.addKeyword("exclusiveRange"), e;
  function a(n, r, i) {
    if (i !== void 0 && typeof i != "boolean")
      throw new Error("Invalid schema for exclusiveRange keyword, should be boolean");
    if (n > r || i && n == r)
      throw new Error("There are no numbers in range");
  }
}, ne = function t(e) {
  return t.definition = {
    type: "string",
    inline: function(a, n, r) {
      return i() + ".test(data" + (a.dataLevel || "") + ")";
      function i() {
        try {
          if (typeof r == "object")
            return new RegExp(r.pattern, r.flags);
          var o = r.match(/^\/(.*)\/([gimuy]*)$/);
          if (o)
            return new RegExp(o[1], o[2]);
          throw new Error("cannot parse string into RegExp");
        } catch (u) {
          throw console.error("regular expression", r, "is invalid"), u;
        }
      }
    },
    metaSchema: {
      type: ["string", "object"],
      properties: {
        pattern: { type: "string" },
        flags: { type: "string" }
      },
      required: ["pattern"],
      additionalProperties: !1
    }
  }, e.addKeyword("regexp", t.definition), e;
}, N = ["undefined", "string", "number", "object", "function", "boolean", "symbol"], ie = function t(e) {
  return t.definition = {
    inline: function(a, n, r) {
      var i = "data" + (a.dataLevel || "");
      return typeof r == "string" ? "typeof " + i + ' == "' + r + '"' : (r = "validate.schema" + a.schemaPath + "." + n, r + ".indexOf(typeof " + i + ") >= 0");
    },
    metaSchema: {
      anyOf: [
        {
          type: "string",
          enum: N
        },
        {
          type: "array",
          items: {
            type: "string",
            enum: N
          }
        }
      ]
    }
  }, e.addKeyword("typeof", t.definition), e;
}, M = {}, B = {
  timestamp: function() {
    return Date.now();
  },
  datetime: function() {
    return new Date().toISOString();
  },
  date: function() {
    return new Date().toISOString().slice(0, 10);
  },
  time: function() {
    return new Date().toISOString().slice(11);
  },
  random: function() {
    return Math.random();
  },
  randomint: function(t) {
    var e = t && t.max || 2;
    return function() {
      return Math.floor(Math.random() * e);
    };
  },
  seq: function(t) {
    var e = t && t.name || "";
    return M[e] = M[e] || 0, function() {
      return M[e]++;
    };
  }
}, oe = function t(e) {
  return t.definition = {
    compile: function(n, r, i) {
      var o = {};
      for (var u in n) {
        var l = n[u], s = a(typeof l == "string" ? l : l.func);
        o[u] = s.length ? s(l.args) : s;
      }
      return i.opts.useDefaults && !i.compositeRule ? p : m;
      function p(f) {
        for (var c in n)
          (f[c] === void 0 || i.opts.useDefaults == "empty" && (f[c] === null || f[c] === "")) && (f[c] = o[c]());
        return !0;
      }
      function m() {
        return !0;
      }
    },
    DEFAULTS: B,
    metaSchema: {
      type: "object",
      additionalProperties: {
        type: ["string", "object"],
        additionalProperties: !1,
        required: ["func", "args"],
        properties: {
          func: { type: "string" },
          args: { type: "object" }
        }
      }
    }
  }, e.addKeyword("dynamicDefaults", t.definition), e;
  function a(n) {
    var r = B[n];
    if (r)
      return r;
    throw new Error('invalid "dynamicDefaults" keyword property value: ' + n);
  }
}, ue = function t(e) {
  return t.definition = {
    type: "object",
    macro: function(a, n) {
      if (!a)
        return !0;
      var r = Object.keys(n.properties);
      return r.length == 0 ? !0 : { required: r };
    },
    metaSchema: { type: "boolean" },
    dependencies: ["properties"]
  }, e.addKeyword("allRequired", t.definition), e;
}, se = function t(e) {
  return t.definition = {
    type: "object",
    macro: function(a) {
      if (a.length == 0)
        return !0;
      if (a.length == 1)
        return { required: a };
      var n = a.map(function(r) {
        return { required: [r] };
      });
      return { anyOf: n };
    },
    metaSchema: {
      type: "array",
      items: {
        type: "string"
      }
    }
  }, e.addKeyword("anyRequired", t.definition), e;
}, fe = function t(e) {
  return t.definition = {
    type: "object",
    macro: function(a) {
      if (a.length == 0)
        return !0;
      if (a.length == 1)
        return { required: a };
      var n = a.map(function(r) {
        return { required: [r] };
      });
      return { oneOf: n };
    },
    metaSchema: {
      type: "array",
      items: {
        type: "string"
      }
    }
  }, e.addKeyword("oneRequired", t.definition), e;
}, le = function t(e) {
  return t.definition = {
    type: "object",
    macro: function(a) {
      if (a.length == 0)
        return !0;
      if (a.length == 1)
        return { not: { required: a } };
      var n = a.map(function(r) {
        return { required: [r] };
      });
      return { not: { anyOf: n } };
    },
    metaSchema: {
      type: "array",
      items: {
        type: "string"
      }
    }
  }, e.addKeyword("prohibited", t.definition), e;
}, de = ["number", "integer", "string", "boolean", "null"], ce = function t(e) {
  return t.definition = {
    type: "array",
    compile: function(a, n, r) {
      var i = r.util.equal, o = me(a, n);
      return function(u) {
        if (u.length > 1)
          for (var l = 0; l < a.length; l++) {
            var s, p = a[l];
            if (o[l]) {
              var m = {};
              for (s = u.length; s--; )
                if (!(!u[s] || typeof u[s] != "object")) {
                  var f = u[s][p];
                  if (!(f && typeof f == "object")) {
                    if (typeof f == "string" && (f = '"' + f), m[f])
                      return !1;
                    m[f] = !0;
                  }
                }
            } else
              for (s = u.length; s--; )
                if (!(!u[s] || typeof u[s] != "object")) {
                  for (var c = s; c--; )
                    if (u[c] && typeof u[c] == "object" && i(u[s][p], u[c][p]))
                      return !1;
                }
          }
        return !0;
      };
    },
    metaSchema: {
      type: "array",
      items: { type: "string" }
    }
  }, e.addKeyword("uniqueItemProperties", t.definition), e;
};
function me(t, e) {
  return t.map(function(a) {
    var n = e.items && e.items.properties, r = n && n[a] && n[a].type;
    return Array.isArray(r) ? r.indexOf("object") < 0 && r.indexOf("array") < 0 : de.indexOf(r) >= 0;
  });
}
var U = {
  metaSchemaRef: pe
}, z = "http://json-schema.org/draft-07/schema";
function pe(t) {
  var e = t._opts.defaultMeta;
  return typeof e == "string" ? { $ref: e } : t.getSchema(z) ? { $ref: z } : (console.warn("meta schema not defined"), {});
}
var ve = U, he = function t(e) {
  return t.definition = {
    type: "object",
    macro: function(a) {
      var n = [];
      for (var r in a)
        n.push(ye(r, a[r]));
      return { allOf: n };
    },
    metaSchema: {
      type: "object",
      propertyNames: {
        type: "string",
        format: "json-pointer"
      },
      additionalProperties: ve.metaSchemaRef(e)
    }
  }, e.addKeyword("deepProperties", t.definition), e;
};
function ye(t, e) {
  for (var a = t.split("/"), n = {}, r = n, i = 1; i < a.length; i++) {
    var o = a[i], u = i == a.length - 1;
    o = ge(o);
    var l = r.properties = {}, s = void 0;
    if (/[0-9]+/.test(o)) {
      var p = +o;
      for (s = r.items = []; p--; )
        s.push({});
    }
    r = u ? e : {}, l[o] = r, s && s.push(r);
  }
  return n;
}
function ge(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
var we = function t(e) {
  return t.definition = {
    type: "object",
    inline: function(a, n, r) {
      for (var i = "", o = 0; o < r.length; o++)
        o && (i += " && "), i += "(" + Se(r[o], a.dataLevel) + " !== undefined)";
      return i;
    },
    metaSchema: {
      type: "array",
      items: {
        type: "string",
        format: "json-pointer"
      }
    }
  }, e.addKeyword("deepRequired", t.definition), e;
};
function Se(t, e) {
  var a = "data" + (e || "");
  if (!t)
    return a;
  for (var n = a, r = t.split("/"), i = 1; i < r.length; i++) {
    var o = r[i];
    a += Re(qe(o)), n += " && " + a;
  }
  return n;
}
var Pe = /^[a-z$_][a-z$_0-9]*$/i, Ee = /^[0-9]+$/, be = /'|\\/g;
function Re(t) {
  return Ee.test(t) ? "[" + t + "]" : Pe.test(t) ? "." + t : "['" + t.replace(be, "\\$&") + "']";
}
function qe(t) {
  return t.replace(/~1/g, "/").replace(/~0/g, "~");
}
var A, H;
function $e() {
  return H || (H = 1, A = function(e, a, n) {
    var r = " ", i = e.level, o = e.dataLevel, u = e.schema[a], l = e.schemaPath + e.util.getProperty(a), s = e.errSchemaPath + "/" + a, p = !e.opts.allErrors, L, m = "data" + (o || ""), f = "valid" + i;
    if (r += "var " + f + " = undefined;", e.opts.format === !1)
      return r += " " + f + " = true; ", r;
    var c = e.schema.format, d = e.opts.$data && c.$data, y = "";
    if (d) {
      var E = e.util.getData(c.$data, o, e.dataPathArr), w = "format" + i, P = "compare" + i;
      r += " var " + w + " = formats[" + E + "] , " + P + " = " + w + " && " + w + ".compare;";
    } else {
      var w = e.formats[c];
      if (!(w && w.compare))
        return r += "  " + f + " = true; ", r;
      var P = "formats" + e.util.getProperty(c) + ".compare";
    }
    var q = a == "formatMaximum", b = "formatExclusive" + (q ? "Maximum" : "Minimum"), v = e.schema[b], S = e.opts.$data && v && v.$data, R = q ? "<" : ">", $ = "result" + i, g = e.opts.$data && u && u.$data, h;
    if (g ? (r += " var schema" + i + " = " + e.util.getData(u.$data, o, e.dataPathArr) + "; ", h = "schema" + i) : h = u, S) {
      var x = e.util.getData(v.$data, o, e.dataPathArr), O = "exclusive" + i, T = "op" + i, D = "' + " + T + " + '";
      r += " var schemaExcl" + i + " = " + x + "; ", x = "schemaExcl" + i, r += " if (typeof " + x + " != 'boolean' && " + x + " !== undefined) { " + f + " = false; ";
      var L = b, _ = _ || [];
      _.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (L || "_formatExclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(s) + " , params: {} ", e.opts.messages !== !1 && (r += " , message: '" + b + " should be boolean' "), e.opts.verbose && (r += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
      var K = r;
      r = _.pop(), !e.compositeRule && p ? e.async ? r += " throw new ValidationError([" + K + "]); " : r += " validate.errors = [" + K + "]; return false; " : r += " var err = " + K + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }  ", p && (y += "}", r += " else { "), g && (r += " if (" + h + " === undefined) " + f + " = true; else if (typeof " + h + " != 'string') " + f + " = false; else { ", y += "}"), d && (r += " if (!" + P + ") " + f + " = true; else { ", y += "}"), r += " var " + $ + " = " + P + "(" + m + ",  ", g ? r += "" + h : r += "" + e.util.toQuotedString(u), r += " ); if (" + $ + " === undefined) " + f + " = false; var " + O + " = " + x + " === true; if (" + f + " === undefined) { " + f + " = " + O + " ? " + $ + " " + R + " 0 : " + $ + " " + R + "= 0; } if (!" + f + ") var op" + i + " = " + O + " ? '" + R + "' : '" + R + "=';";
    } else {
      var O = v === !0, D = R;
      O || (D += "=");
      var T = "'" + D + "'";
      g && (r += " if (" + h + " === undefined) " + f + " = true; else if (typeof " + h + " != 'string') " + f + " = false; else { ", y += "}"), d && (r += " if (!" + P + ") " + f + " = true; else { ", y += "}"), r += " var " + $ + " = " + P + "(" + m + ",  ", g ? r += "" + h : r += "" + e.util.toQuotedString(u), r += " ); if (" + $ + " === undefined) " + f + " = false; if (" + f + " === undefined) " + f + " = " + $ + " " + R, O || (r += "="), r += " 0;";
    }
    r += "" + y + "if (!" + f + ") { ";
    var L = a, _ = _ || [];
    _.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: '" + (L || "_formatLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(s) + " , params: { comparison: " + T + ", limit:  ", g ? r += "" + h : r += "" + e.util.toQuotedString(u), r += " , exclusive: " + O + " } ", e.opts.messages !== !1 && (r += " , message: 'should be " + D + ' "', g ? r += "' + " + h + " + '" : r += "" + e.util.escapeQuotes(u), r += `"' `), e.opts.verbose && (r += " , schema:  ", g ? r += "validate.schema" + l : r += "" + e.util.toQuotedString(u), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
    var K = r;
    return r = _.pop(), !e.compositeRule && p ? e.async ? r += " throw new ValidationError([" + K + "]); " : r += " validate.errors = [" + K + "]; return false; " : r += " var err = " + K + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "}", r;
  }), A;
}
var Y = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i, k = /t|\s/i, G = {
  date: Z,
  time: j,
  "date-time": _e
}, J = {
  type: "object",
  required: ["$data"],
  properties: {
    $data: {
      type: "string",
      anyOf: [
        { format: "relative-json-pointer" },
        { format: "json-pointer" }
      ]
    }
  },
  additionalProperties: !1
}, X = function(t) {
  var e = "format" + t;
  return function a(n) {
    return a.definition = {
      type: "string",
      inline: $e(),
      statements: !0,
      errors: "full",
      dependencies: ["format"],
      metaSchema: {
        anyOf: [
          { type: "string" },
          J
        ]
      }
    }, n.addKeyword(e, a.definition), n.addKeyword("formatExclusive" + t, {
      dependencies: ["format" + t],
      metaSchema: {
        anyOf: [
          { type: "boolean" },
          J
        ]
      }
    }), Oe(n), n;
  };
};
function Oe(t) {
  var e = t._formats;
  for (var a in G) {
    var n = e[a];
    (typeof n != "object" || n instanceof RegExp || !n.validate) && (n = e[a] = { validate: n }), n.compare || (n.compare = G[a]);
  }
}
function Z(t, e) {
  if (!!(t && e)) {
    if (t > e)
      return 1;
    if (t < e)
      return -1;
    if (t === e)
      return 0;
  }
}
function j(t, e) {
  if (!!(t && e) && (t = t.match(Y), e = e.match(Y), !!(t && e))) {
    if (t = t[1] + t[2] + t[3] + (t[4] || ""), e = e[1] + e[2] + e[3] + (e[4] || ""), t > e)
      return 1;
    if (t < e)
      return -1;
    if (t === e)
      return 0;
  }
}
function _e(t, e) {
  if (!!(t && e)) {
    t = t.split(k), e = e.split(k);
    var a = Z(t[0], e[0]);
    if (a !== void 0)
      return a || j(t[1], e[1]);
  }
}
var Ke = X("Minimum"), xe = X("Maximum"), I, V;
function De() {
  return V || (V = 1, I = function(e, a, n) {
    var r = " ", i = e.level, o = e.dataLevel, u = e.schema[a], l = e.schemaPath + e.util.getProperty(a), s = e.errSchemaPath + "/" + a, p = !e.opts.allErrors, m = "data" + (o || ""), f = "valid" + i, c = "key" + i, d = "idx" + i, y = "patternMatched" + i, E = "dataProperties" + i, w = "", P = e.opts.ownProperties;
    r += "var " + f + " = true;", P && (r += " var " + E + " = undefined;");
    var q = u;
    if (q)
      for (var b, v = -1, S = q.length - 1; v < S; ) {
        b = q[v += 1], r += " var " + y + " = false;  ", P ? r += " " + E + " = " + E + " || Object.keys(" + m + "); for (var " + d + "=0; " + d + "<" + E + ".length; " + d + "++) { var " + c + " = " + E + "[" + d + "]; " : r += " for (var " + c + " in " + m + ") { ", r += " " + y + " = " + e.usePattern(b) + ".test(" + c + "); if (" + y + ") break; } ";
        var R = e.util.escapeQuotes(b);
        r += " if (!" + y + ") { " + f + " = false;  var err =   ", e.createErrors !== !1 ? (r += " { keyword: 'patternRequired' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(s) + " , params: { missingPattern: '" + R + "' } ", e.opts.messages !== !1 && (r += " , message: 'should have property matching pattern \\'" + R + "\\'' "), e.opts.verbose && (r += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ", p && (w += "}", r += " else { ");
      }
    return r += "" + w, r;
  }), I;
}
var Le = function t(e) {
  return t.definition = {
    type: "object",
    inline: De(),
    statements: !0,
    errors: "full",
    metaSchema: {
      type: "array",
      items: {
        type: "string",
        format: "regex"
      },
      uniqueItems: !0
    }
  }, e.addKeyword("patternRequired", t.definition), e;
}, Q, W;
function Ce() {
  return W || (W = 1, Q = function(e, a, n) {
    var r = " ", i = e.level, o = e.dataLevel, u = e.schema[a], l = e.schemaPath + e.util.getProperty(a), s = e.errSchemaPath + "/" + a, p = !e.opts.allErrors, m = "data" + (o || ""), f = "valid" + i, c = "errs__" + i, d = e.util.copy(e), y = "";
    d.level++;
    var E = "valid" + d.level, w = "ifPassed" + e.level, P = d.baseId, q;
    r += "var " + w + ";";
    var b = u;
    if (b)
      for (var v, S = -1, R = b.length - 1; S < R; ) {
        if (v = b[S += 1], S && !q && (r += " if (!" + w + ") { ", y += "}"), v.if && (e.opts.strictKeywords ? typeof v.if == "object" && Object.keys(v.if).length > 0 : e.util.schemaHasRules(v.if, e.RULES.all))) {
          r += " var " + c + " = errors;   ";
          var $ = e.compositeRule;
          if (e.compositeRule = d.compositeRule = !0, d.createErrors = !1, d.schema = v.if, d.schemaPath = l + "[" + S + "].if", d.errSchemaPath = s + "/" + S + "/if", r += "  " + e.validate(d) + " ", d.baseId = P, d.createErrors = !0, e.compositeRule = d.compositeRule = $, r += " " + w + " = " + E + "; if (" + w + ") {  ", typeof v.then == "boolean") {
            if (v.then === !1) {
              var g = g || [];
              g.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'switch' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(s) + " , params: { caseIndex: " + S + " } ", e.opts.messages !== !1 && (r += ` , message: 'should pass "switch" keyword validation' `), e.opts.verbose && (r += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
              var h = r;
              r = g.pop(), !e.compositeRule && p ? e.async ? r += " throw new ValidationError([" + h + "]); " : r += " validate.errors = [" + h + "]; return false; " : r += " var err = " + h + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            r += " var " + E + " = " + v.then + "; ";
          } else
            d.schema = v.then, d.schemaPath = l + "[" + S + "].then", d.errSchemaPath = s + "/" + S + "/then", r += "  " + e.validate(d) + " ", d.baseId = P;
          r += "  } else {  errors = " + c + "; if (vErrors !== null) { if (" + c + ") vErrors.length = " + c + "; else vErrors = null; } } ";
        } else if (r += " " + w + " = true;  ", typeof v.then == "boolean") {
          if (v.then === !1) {
            var g = g || [];
            g.push(r), r = "", e.createErrors !== !1 ? (r += " { keyword: 'switch' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(s) + " , params: { caseIndex: " + S + " } ", e.opts.messages !== !1 && (r += ` , message: 'should pass "switch" keyword validation' `), e.opts.verbose && (r += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), r += " } ") : r += " {} ";
            var h = r;
            r = g.pop(), !e.compositeRule && p ? e.async ? r += " throw new ValidationError([" + h + "]); " : r += " validate.errors = [" + h + "]; return false; " : r += " var err = " + h + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
          r += " var " + E + " = " + v.then + "; ";
        } else
          d.schema = v.then, d.schemaPath = l + "[" + S + "].then", d.errSchemaPath = s + "/" + S + "/then", r += "  " + e.validate(d) + " ", d.baseId = P;
        q = v.continue;
      }
    return r += "" + y + "var " + f + " = " + E + ";", r;
  }), Q;
}
var Fe = U, Te = function t(e) {
  if (!(e.RULES.keywords.switch && e.RULES.keywords.if)) {
    var a = Fe.metaSchemaRef(e);
    return t.definition = {
      inline: Ce(),
      statements: !0,
      errors: "full",
      metaSchema: {
        type: "array",
        items: {
          required: ["then"],
          properties: {
            if: a,
            then: {
              anyOf: [
                { type: "boolean" },
                a
              ]
            },
            continue: { type: "boolean" }
          },
          additionalProperties: !1,
          dependencies: {
            continue: ["if"]
          }
        }
      }
    }, e.addKeyword("switch", t.definition), e;
  }
}, Me = U, Ae = function t(e) {
  if (!e._opts.$data)
    return console.warn("keyword select requires $data option"), e;
  var a = Me.metaSchemaRef(e), n = [];
  return t.definition = {
    validate: function o(u, l, s) {
      if (s.selectCases === void 0)
        throw new Error('keyword "selectCases" is absent');
      var p = r(s, !1), m = p.cases[u];
      if (m === void 0 && (m = p.default), typeof m == "boolean")
        return m;
      var f = m(l);
      return f || (o.errors = m.errors), f;
    },
    $data: !0,
    metaSchema: { type: ["string", "number", "boolean", "null"] }
  }, e.addKeyword("select", t.definition), e.addKeyword("selectCases", {
    compile: function(o, u) {
      var l = r(u);
      for (var s in o)
        l.cases[s] = i(o[s]);
      return function() {
        return !0;
      };
    },
    valid: !0,
    metaSchema: {
      type: "object",
      additionalProperties: a
    }
  }), e.addKeyword("selectDefault", {
    compile: function(o, u) {
      var l = r(u);
      return l.default = i(o), function() {
        return !0;
      };
    },
    valid: !0,
    metaSchema: a
  }), e;
  function r(o, u) {
    var l;
    return n.some(function(s) {
      if (s.parentSchema === o)
        return l = s, !0;
    }), !l && u !== !1 && (l = {
      parentSchema: o,
      cases: {},
      default: !0
    }, n.push(l)), l;
  }
  function i(o) {
    return typeof o == "boolean" ? o : e.compile(o);
  }
}, Ie = function t(e) {
  var a = {
    trimLeft: function(r) {
      return r.replace(/^[\s]+/, "");
    },
    trimRight: function(r) {
      return r.replace(/[\s]+$/, "");
    },
    trim: function(r) {
      return r.trim();
    },
    toLowerCase: function(r) {
      return r.toLowerCase();
    },
    toUpperCase: function(r) {
      return r.toUpperCase();
    },
    toEnumCase: function(r, i) {
      return i.hash[n(r)] || r;
    }
  };
  return t.definition = {
    type: "string",
    errors: !1,
    modifying: !0,
    valid: !0,
    compile: function(r, i) {
      var o;
      if (r.indexOf("toEnumCase") !== -1) {
        if (o = { hash: {} }, !i.enum)
          throw new Error('Missing enum. To use `transform:["toEnumCase"]`, `enum:[...]` is required.');
        for (var u = i.enum.length; u--; u) {
          var l = i.enum[u];
          if (typeof l == "string") {
            var s = n(l);
            if (o.hash[s])
              throw new Error('Invalid enum uniqueness. To use `transform:["toEnumCase"]`, all values must be unique when case insensitive.');
            o.hash[s] = l;
          }
        }
      }
      return function(p, m, f, c) {
        if (!!f) {
          for (var d = 0, y = r.length; d < y; d++)
            p = a[r[d]](p, o);
          f[c] = p;
        }
      };
    },
    metaSchema: {
      type: "array",
      items: {
        type: "string",
        enum: [
          "trimLeft",
          "trimRight",
          "trim",
          "toLowerCase",
          "toUpperCase",
          "toEnumCase"
        ]
      }
    }
  }, e.addKeyword("transform", t.definition), e;
  function n(r) {
    return r.toLowerCase();
  }
}, Qe = {
  instanceof: te,
  range: ae,
  regexp: ne,
  typeof: ie,
  dynamicDefaults: oe,
  allRequired: ue,
  anyRequired: se,
  oneRequired: fe,
  prohibited: le,
  uniqueItemProperties: ce,
  deepProperties: he,
  deepRequired: we,
  formatMinimum: Ke,
  formatMaximum: xe,
  patternRequired: Le,
  switch: Te,
  select: Ae,
  transform: Ie
}, ee = Qe, Ue = re;
function re(t, e) {
  if (Array.isArray(e)) {
    for (var a = 0; a < e.length; a++)
      F(e[a])(t);
    return t;
  }
  if (e)
    return F(e)(t), t;
  for (e in ee)
    F(e)(t);
  return t;
}
re.get = F;
function F(t) {
  var e = ee[t];
  if (!e)
    throw new Error("Unknown keyword " + t);
  return e;
}
export {
  Ue as a
};
//# sourceMappingURL=ajv-keywords.09943dd7.js.map
